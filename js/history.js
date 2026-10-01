/**
 * Reading records.
 *
 * A finished reading is stored as the facts needed to lay it out again:
 * which spread, which cards in which seats, which way up, who read it, and
 * the question. The interpretation text is not stored; the reader produces it
 * again from the same cards. The same record goes into browser history and,
 * encoded, into a shareable link.
 */

export const HISTORY_KEY = 'astralis.history.v1';
export const HISTORY_LIMIT = 50;

const SPREAD_SIZES = { single: 1, three_card: 3, celtic_cross: 10 };
const MAX_QUESTION = 280;

/**
 * @param {object} input
 * @param {string} input.spreadId
 * @param {string} input.threeCardTheme
 * @param {string} input.readerId
 * @param {string} input.deckTheme
 * @param {string} input.question
 * @param {Array<{card: {id: string}, isReversed: boolean}>} input.drawnCards
 * @param {ReadonlyArray<{id: string}>} input.deck
 * @param {number} [input.at] When the reading was completed (ms since epoch)
 */
export function makeRecord({ spreadId, threeCardTheme, readerId, deckTheme, question, drawnCards, deck, at = Date.now() }) {
  const cards = drawnCards.map(({ card, isReversed }) => {
    const index = deck.findIndex(item => item.id === card.id);
    if (index < 0) throw new Error(`Card ${card.id} is not in the deck.`);
    return [index, isReversed ? 1 : 0];
  });
  const record = {
    at,
    spread: spreadId,
    theme: spreadId === 'three_card' ? threeCardTheme : '',
    reader: readerId || '',
    deck: deckTheme || '',
    q: String(question || '').trim().slice(0, MAX_QUESTION),
    cards
  };
  record.id = recordId(record);
  return record;
}

/** The same cards dealt at the same moment are the same reading, whoever reads them. */
export function recordId(record) {
  return `${record.at}:${cardsToString(record.cards)}`;
}

function cardsToString(cards) {
  return cards.map(([index, reversed]) => `${index}${reversed ? 'r' : ''}`).join('.');
}

function cardsFromString(text) {
  return String(text).split('.').map(part => {
    const match = /^(\d{1,2})(r?)$/.exec(part);
    if (!match) return null;
    return [Number(match[1]), match[2] ? 1 : 0];
  });
}

/** Check a record that came from storage or a link. Returns a clean copy, or null. */
export function validateRecord(raw, deckSize = 78) {
  if (!raw || typeof raw !== 'object') return null;
  const size = SPREAD_SIZES[raw.spread];
  if (!size) return null;
  if (!Array.isArray(raw.cards) || raw.cards.length !== size) return null;

  const seen = new Set();
  const cards = [];
  for (const entry of raw.cards) {
    if (!Array.isArray(entry)) return null;
    const [index, reversed] = entry;
    if (!Number.isInteger(index) || index < 0 || index >= deckSize || seen.has(index)) return null;
    seen.add(index);
    cards.push([index, reversed ? 1 : 0]);
  }

  const at = Number(raw.at);
  if (!Number.isFinite(at) || at <= 0) return null;

  const record = {
    at,
    spread: raw.spread,
    theme: typeof raw.theme === 'string' ? raw.theme.slice(0, 60) : '',
    reader: typeof raw.reader === 'string' ? raw.reader.slice(0, 80) : '',
    deck: typeof raw.deck === 'string' ? raw.deck.slice(0, 40) : '',
    q: typeof raw.q === 'string' ? raw.q.slice(0, MAX_QUESTION) : '',
    cards
  };
  record.id = recordId(record);
  return record;
}

function toBase64Url(text) {
  const bytes = new TextEncoder().encode(text);
  let binary = '';
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function fromBase64Url(text) {
  const binary = atob(String(text).replace(/-/g, '+').replace(/_/g, '/'));
  const bytes = Uint8Array.from(binary, char => char.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

/** Encode a record for the URL fragment. */
export function encodeRecord(record) {
  return toBase64Url(JSON.stringify([
    1, record.spread, record.theme, record.reader, record.deck, record.q, record.at, cardsToString(record.cards)
  ]));
}

/** Decode a record from the URL fragment. Returns null for anything malformed. */
export function decodeRecord(text, deckSize = 78) {
  try {
    const parts = JSON.parse(fromBase64Url(text));
    if (!Array.isArray(parts) || parts[0] !== 1) return null;
    const [, spread, theme, reader, deck, q, at, cards] = parts;
    const parsed = cardsFromString(cards);
    if (parsed.includes(null)) return null;
    return validateRecord({ spread, theme, reader, deck, q, at, cards: parsed }, deckSize);
  } catch (err) {
    return null;
  }
}

/** Turn a record's card indices back into deck cards. */
export function resolveCards(record, deck) {
  return record.cards.map(([index, reversed]) => ({ card: deck[index], isReversed: Boolean(reversed) }));
}

/** Newest first. A record with the same id replaces the old one in place of duplicating it. */
export function upsertRecord(list, record, limit = HISTORY_LIMIT) {
  const rest = list.filter(item => item.id !== record.id);
  return [record, ...rest].sort((a, b) => b.at - a.at).slice(0, limit);
}

export function removeRecord(list, id) {
  return list.filter(item => item.id !== id);
}

export function loadHistory(storage, deckSize = 78) {
  try {
    const raw = JSON.parse(storage.getItem(HISTORY_KEY));
    if (!Array.isArray(raw)) return [];
    return raw.map(item => validateRecord(item, deckSize)).filter(Boolean);
  } catch (err) {
    return [];
  }
}

export function saveHistory(storage, list) {
  try {
    storage.setItem(HISTORY_KEY, JSON.stringify(list));
    return true;
  } catch (err) {
    return false;
  }
}
