/**
 * server.js serves the app's files and nothing else, and a bad request
 * cannot stop it.
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import net from 'node:net';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

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

async function startServer() {
  const port = await freePort();
  const server = spawn(process.execPath, ['server.js'], { cwd: root, env: { ...process.env, PORT: String(port) }, stdio: 'ignore' });
  const base = `http://127.0.0.1:${port}`;
  for (let i = 0; i < 50; i++) {
    try {
      if ((await fetch(base)).ok) return { base, server };
    } catch {
      // not listening yet
    }
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  server.kill();
  throw new Error('server.js did not start');
}

test('a null byte in the address is refused, and the server keeps running', async () => {
  const { base, server } = await startServer();
  try {
    assert.equal((await fetch(`${base}/%00`)).status, 400);
    assert.equal((await fetch(`${base}/index.html%00.js`)).status, 400);
    assert.equal((await fetch(base)).status, 200);
  } finally {
    server.kill();
  }
});

test('hidden files and folders are not served', async () => {
  const { base, server } = await startServer();
  try {
    assert.equal((await fetch(`${base}/.git/config`)).status, 404);
    assert.equal((await fetch(`${base}/.gitignore`)).status, 404);
    assert.equal((await fetch(`${base}/js/app.js`)).status, 200);
  } finally {
    server.kill();
  }
});
