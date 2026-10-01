/**
 * The drawer and the dialogs share one stack: the newest sits on top, takes
 * the keyboard, and makes everything beneath it inert. Closing one hands
 * focus back to whatever opened it.
 */

const stack = []; // { backdrop, opener, close }
let pageRoot = null;

const FOCUSABLE = 'button, [href], input, select, textarea, summary, [tabindex]:not([tabindex="-1"])';

function focusableIn(node) {
  return Array.from(node.querySelectorAll(FOCUSABLE))
    .filter(item => !item.disabled && !item.hidden && item.offsetParent !== null);
}

/** Only the top layer can be reached, by keyboard, pointer or screen reader. */
function syncInert() {
  const top = stack[stack.length - 1];
  if (pageRoot) pageRoot.inert = stack.length > 0;
  stack.forEach(entry => {
    entry.backdrop.inert = entry !== top;
  });
  document.documentElement.classList.toggle('overlay-open', stack.length > 0);
}

export function isOverlayOpen(backdrop) {
  return stack.some(entry => entry.backdrop === backdrop);
}

export function topOverlay() {
  return stack.length ? stack[stack.length - 1].backdrop : null;
}

/**
 * @param {HTMLElement} backdrop The overlay's outermost element
 * @param {() => void} close Called for Escape
 * @param {HTMLElement} [focusTarget] Where focus goes; the first control otherwise
 */
export function openOverlay(backdrop, close, focusTarget) {
  if (isOverlayOpen(backdrop)) return;

  // An overlay opened from inside another must sit above it, whatever the markup order
  if (stack.length > 0) backdrop.style.zIndex = String(300 + stack.length);
  stack.push({ backdrop, opener: document.activeElement, close });
  backdrop.classList.add('open');
  syncInert();

  const target = focusTarget || focusableIn(backdrop)[0];
  if (target) target.focus({ preventScroll: true });
  // A control that is still transitioning in cannot take focus yet; the dialog itself can.
  if (!target || document.activeElement !== target) {
    const dialog = backdrop.querySelector('[role="dialog"]');
    if (dialog) {
      dialog.tabIndex = -1;
      dialog.focus({ preventScroll: true });
    }
  }
}

export function closeOverlay(backdrop) {
  const at = stack.findIndex(entry => entry.backdrop === backdrop);
  backdrop.classList.remove('open');
  backdrop.style.zIndex = '';
  if (at < 0) return;

  const [entry] = stack.splice(at, 1);
  backdrop.inert = false;
  syncInert(); // the layer below must be reachable again before it can take focus

  if (entry.opener && entry.opener !== document.body && document.contains(entry.opener)) {
    entry.opener.focus({ preventScroll: true });
  } else if (backdrop.contains(document.activeElement)) {
    document.activeElement.blur(); // never leave focus inside a closed overlay
  }
}

/**
 * Escape closes the top overlay, Tab stays inside it, and the arrow keys are
 * offered to the caller.
 * @param {object} options
 * @param {HTMLElement} options.root The page behind the overlays
 * @param {(backdrop: HTMLElement, direction: 1 | -1) => boolean} [options.onArrow] Return true when handled
 */
export function setupOverlays({ root, onArrow }) {
  pageRoot = root;

  document.addEventListener('keydown', (event) => {
    const top = stack[stack.length - 1];
    if (!top) return;

    if (event.key === 'Escape') {
      event.preventDefault();
      top.close();
      return;
    }

    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      const target = event.target;
      const editing = target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement || target instanceof HTMLSelectElement;
      const inGroup = target instanceof Element && target.closest('[role="radiogroup"]');
      if (!editing && !inGroup && onArrow && onArrow(top.backdrop, event.key === 'ArrowRight' ? 1 : -1)) {
        event.preventDefault();
      }
      return;
    }

    if (event.key !== 'Tab') return;
    const focusable = focusableIn(top.backdrop);
    if (focusable.length === 0) {
      event.preventDefault();
      return;
    }
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (!top.backdrop.contains(document.activeElement)) {
      event.preventDefault();
      first.focus();
    } else if (event.shiftKey && (document.activeElement === first || !focusable.includes(document.activeElement))) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
}

/**
 * Make a set of buttons behave as one radio group: one tab stop, arrow keys
 * move between the options, Home and End jump to the ends, and Space, Enter
 * or a click chooses. Arrows only move, because choosing here does something
 * that should be deliberate (it deals a spread, or picks and closes).
 * The buttons carry role="radio" and aria-checked; `onChoose` does the choosing.
 *
 * @param {HTMLElement} group Element with role="radiogroup"
 * @param {(button: HTMLElement) => void} onChoose
 */
export function wireRadioGroup(group, onChoose) {
  const radios = () => Array.from(group.querySelectorAll('[role="radio"]')).filter(item => !item.disabled);

  group.addEventListener('click', (event) => {
    const radio = event.target instanceof Element ? event.target.closest('[role="radio"]') : null;
    if (radio && group.contains(radio) && !radio.disabled) onChoose(radio);
  });

  group.addEventListener('keydown', (event) => {
    const list = radios();
    const current = list.indexOf(document.activeElement);
    if (current < 0) return;

    let next = null;
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = list[(current + 1) % list.length];
    else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = list[(current - 1 + list.length) % list.length];
    else if (event.key === 'Home') next = list[0];
    else if (event.key === 'End') next = list[list.length - 1];
    if (!next) return;

    event.preventDefault();
    event.stopPropagation();
    next.focus();
  });
}

/** Mark which radio is chosen and keep the group to a single tab stop. */
export function syncRadioGroup(group, isChosen) {
  const radios = Array.from(group.querySelectorAll('[role="radio"]'));
  let anyChosen = false;
  radios.forEach(radio => {
    const chosen = Boolean(isChosen(radio));
    anyChosen = anyChosen || chosen;
    radio.setAttribute('aria-checked', chosen ? 'true' : 'false');
    radio.tabIndex = chosen ? 0 : -1;
  });
  if (!anyChosen && radios[0]) radios[0].tabIndex = 0;
}
