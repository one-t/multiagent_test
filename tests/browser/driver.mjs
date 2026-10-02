/**
 * A small driver for checking the app in a real browser, with no dependencies.
 *
 * It starts server.js on a spare port, starts headless Edge or Chrome, and
 * talks to it over the DevTools protocol. `npm run test:browser` uses it.
 * Set BROWSER_PATH to point at a Chromium-based browser if none is found.
 */
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import net from 'node:net';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');

const BROWSERS = [
  process.env.BROWSER_PATH,
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser',
  '/usr/bin/microsoft-edge'
].filter(Boolean);

function freePort() {
  return new Promise((resolve, reject) => {
    const probe = net.createServer();
    probe.once('error', reject);
    probe.listen(0, '127.0.0.1', () => {
      const { port } = probe.address();
      probe.close(() => resolve(port));
    });
  });
}

async function until(check, what, tries = 60) {
  for (let i = 0; i < tries; i++) {
    try {
      const value = await check();
      if (value) return value;
    } catch {
      // not ready yet
    }
    await new Promise(resolve => setTimeout(resolve, 200));
  }
  throw new Error(`${what} did not start`);
}

/**
 * @returns {Promise<{ page: object, url: string, close: () => Promise<void> }>}
 */
export async function launch() {
  const browserPath = BROWSERS.find(candidate => fs.existsSync(candidate));
  if (!browserPath) throw new Error('No Chromium-based browser found. Set BROWSER_PATH.');

  const appPort = await freePort();
  const server = spawn(process.execPath, ['server.js'], { cwd: root, env: { ...process.env, PORT: String(appPort) }, stdio: 'ignore' });
  const url = `http://127.0.0.1:${appPort}/`;
  await until(async () => (await fetch(url)).ok, 'The app server');

  const debugPort = await freePort();
  const profile = fs.mkdtempSync(path.join(os.tmpdir(), 'astralis-browser-'));
  const browser = spawn(browserPath, [
    '--headless=new', '--disable-gpu', '--hide-scrollbars', '--no-first-run', '--no-default-browser-check',
    `--remote-debugging-port=${debugPort}`, `--user-data-dir=${profile}`, '--window-size=1280,800', 'about:blank'
  ], { stdio: 'ignore' });

  const targets = await until(async () => (await fetch(`http://127.0.0.1:${debugPort}/json`)).json(), 'The browser');
  const socket = new WebSocket(targets.find(target => target.type === 'page').webSocketDebuggerUrl);
  await new Promise((resolve, reject) => {
    socket.onopen = resolve;
    socket.onerror = reject;
  });

  let sequence = 0;
  const pending = new Map();
  const problems = []; // uncaught errors and console errors from the page
  socket.onmessage = (event) => {
    const message = JSON.parse(event.data);
    if (message.id && pending.has(message.id)) {
      const { resolve, reject } = pending.get(message.id);
      pending.delete(message.id);
      if (message.error) reject(new Error(message.error.message));
      else resolve(message.result);
    } else if (message.method === 'Runtime.exceptionThrown') {
      problems.push(message.params.exceptionDetails.exception?.description || message.params.exceptionDetails.text);
    } else if (message.method === 'Runtime.consoleAPICalled' && message.params.type === 'error') {
      problems.push(message.params.args.map(arg => arg.value ?? arg.description).join(' '));
    } else if (message.method === 'Log.entryAdded' && message.params.entry.level === 'error') {
      problems.push(`${message.params.entry.text} ${message.params.entry.url || ''}`);
    }
  };
  const send = (method, params = {}) => new Promise((resolve, reject) => {
    const id = ++sequence;
    pending.set(id, { resolve, reject });
    socket.send(JSON.stringify({ id, method, params }));
  });

  await send('Page.enable');
  await send('Runtime.enable');
  await send('Log.enable');

  const shots = path.join(os.tmpdir(), 'astralis-shots');
  fs.mkdirSync(shots, { recursive: true });
  const KEY_CODES = { Enter: 13, Escape: 27, Tab: 9, ArrowLeft: 37, ArrowRight: 39, ArrowUp: 38, ArrowDown: 40, ' ': 32, Home: 36, End: 35 };

  const page = {
    problems,
    wait: ms => new Promise(resolve => setTimeout(resolve, ms)),
    async size(width, height, { touch = false } = {}) {
      await send('Emulation.setDeviceMetricsOverride', { width, height, deviceScaleFactor: 1, mobile: touch });
      await send('Emulation.setTouchEmulationEnabled', { enabled: touch });
    },
    async reducedMotion(on) {
      await send('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-reduced-motion', value: on ? 'reduce' : 'no-preference' }] });
    },
    async goto(target = url) {
      await send('Page.navigate', { url: target });
      await page.wait(1200);
    },
    async reload() {
      await send('Page.reload');
      await page.wait(1200);
    },
    /** Run an expression in the page and return its value. */
    async eval(expression) {
      const result = await send('Runtime.evaluate', { expression, awaitPromise: true, returnByValue: true, userGesture: true });
      if (result.exceptionDetails) throw new Error(result.exceptionDetails.exception?.description || result.exceptionDetails.text);
      return result.result.value;
    },
    async key(key) {
      const base = { key, code: key === ' ' ? 'Space' : key, windowsVirtualKeyCode: KEY_CODES[key] || key.toUpperCase().charCodeAt(0) };
      const text = key === 'Enter' ? '\r' : key.length === 1 ? key : undefined;
      await send('Input.dispatchKeyEvent', { type: text ? 'keyDown' : 'rawKeyDown', ...base, text });
      await send('Input.dispatchKeyEvent', { type: 'keyUp', ...base });
      await page.wait(60);
    },
    async type(text) {
      await send('Input.insertText', { text });
      await page.wait(60);
    },
    /** A real mouse click at the centre of the first element matching the selector. */
    async click(selector) {
      const point = await page.eval(`(() => { const e = document.querySelector(${JSON.stringify(selector)}); if (!e) return null; e.scrollIntoView({ block: 'nearest' }); const r = e.getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top + r.height / 2 }; })()`);
      if (!point) throw new Error(`Nothing matches ${selector}`);
      await send('Input.dispatchMouseEvent', { type: 'mouseMoved', x: point.x, y: point.y });
      await send('Input.dispatchMouseEvent', { type: 'mousePressed', x: point.x, y: point.y, button: 'left', clickCount: 1 });
      await send('Input.dispatchMouseEvent', { type: 'mouseReleased', x: point.x, y: point.y, button: 'left', clickCount: 1 });
      await page.wait(150);
    },
    /** Save a screenshot to the temp folder and return its path. */
    async shot(name, { full = false } = {}) {
      const result = await send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: full });
      const file = path.join(shots, `${name}.png`);
      fs.writeFileSync(file, Buffer.from(result.data, 'base64'));
      return file;
    }
  };

  await page.size(1280, 800);

  return {
    page,
    url,
    async close() {
      try {
        await send('Browser.close');
      } catch {
        // already gone
      }
      socket.close();
      browser.kill();
      server.kill();
      await new Promise(resolve => setTimeout(resolve, 400));
      try {
        fs.rmSync(profile, { recursive: true, force: true });
      } catch {
        // the browser may still hold a file for a moment; the temp folder is cleaned by the OS
      }
    }
  };
}
