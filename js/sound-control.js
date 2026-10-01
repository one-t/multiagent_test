/**
 * One sound control with three states, stepped through in order:
 *
 *   off      silence (the default)
 *   effects  the deal, the card turn and the closing chime
 *   full     those, plus the quiet candle crackle in the background
 *
 * The visible label says what pressing will do. The accessible name
 * also says the current state.
 */

import { sound } from './sound.js';

export const SOUND_STATES = ['off', 'effects', 'full'];

const LABELS = {
  off: { now: 'Sound off', next: 'Turn sound on' },
  effects: { now: 'Card sounds on', next: 'Add background sound' },
  full: { now: 'Background sound on', next: 'Turn sound off' }
};

const ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
  <path d="M4 9.5h3l4.5-3.8v12.6L7 14.5H4z"/>
  <path class="wave-1" d="M15 9.2a4 4 0 0 1 0 5.6"/>
  <path class="wave-2" d="M17.6 6.6a7.6 7.6 0 0 1 0 10.8"/>
  <path class="slash" d="M15.5 9.5l5 5M20.5 9.5l-5 5"/>
</svg>`;

export function normaliseSoundState(value) {
  return SOUND_STATES.includes(value) ? value : 'off';
}

/**
 * @param {HTMLButtonElement} button
 * @param {object} options
 * @param {string} options.initial One of SOUND_STATES
 * @param {(state: string) => void} options.onChange Called after the person changes it
 * @returns {{ get: () => string }}
 */
export function setupSoundControl(button, { initial, onChange }) {
  let state = normaliseSoundState(initial);

  button.innerHTML = `${ICON}<span class="sound-label"></span>`;
  const label = button.querySelector('.sound-label');

  const apply = ({ fromGesture }) => {
    sound.setMuted(state === 'off');
    // Browsers only allow sound to start from a press or a key, so a saved
    // "full" setting waits for the first one.
    if (fromGesture || state !== 'full') sound.setAmbiance(state === 'full');

    button.dataset.state = state;
    label.textContent = LABELS[state].next;
    button.setAttribute('aria-label', `${LABELS[state].now}. ${LABELS[state].next}.`);
    button.title = LABELS[state].next;
  };

  button.addEventListener('click', () => {
    state = SOUND_STATES[(SOUND_STATES.indexOf(state) + 1) % SOUND_STATES.length];
    apply({ fromGesture: true });
    if (state !== 'off') sound.playFlip(); // let the person hear what "on" sounds like
    onChange(state);
  });

  if (state === 'full') {
    const start = () => {
      if (state === 'full') sound.setAmbiance(true);
    };
    window.addEventListener('pointerdown', start, { once: true });
    window.addEventListener('keydown', start, { once: true });
  }

  apply({ fromGesture: false });
  return { get: () => state, announce: () => LABELS[state].now };
}
