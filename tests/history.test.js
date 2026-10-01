/**
 * Reading records: what goes into browser history and shareable links.
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import { TAROT_DECK } from '../js/cards.js';
import {
  HISTORY_KEY,
  makeRecord,
  encodeRecord,
  decodeRecord,
  resolveCards,
  validateRecord,
  upsertRecord,
  removeRecord,
  loadHistory,
  saveHistory
} from '../js/history.js';

function draw(indices, reversedAt = []) {
  return indices.map((index, seat) => ({ card: TAROT_DECK[index], isReversed: reversedAt.includes(seat) }));
}

function record(overrides = {}) {
  return makeRecord({
    spreadId: 'three_card',
    threeCardTheme: 'mind_body_spirit',
    readerId: 'cassian_vetch',
    deckTheme: 'household',
    question: '  Do I leave the job?  ',
    drawnCards: draw([0, 30, 77], [1]),
    deck: TAROT_DECK,
    at: 1790800000000,
    ...overrides
  });
}

function memoryStorage() {
  const data = new Map();
  return {
    getItem: key => (data.has(key) ? data.get(key) : null),
    setItem: (key, value) => data.set(key, String(value))
  };
}

test('a record survives the trip through a link, cards and orientation intact', () => {
  const original = record();
  const decoded = decodeRecord(encodeRecord(original));
  assert.deepEqual(decoded, original);
  assert.equal(decoded.q, 'Do I leave the job?');

  const cards = resolveCards(decoded, TAROT_DECK);
  assert.deepEqual(cards.map(item => item.card.id), [TAROT_DECK[0].id, TAROT_DECK[30].id, TAROT_DECK[77].id]);
  assert.deepEqual(cards.map(item => item.isReversed), [false, true, false]);
});

test('links are URL-safe and keep non-ASCII questions', () => {
  const original = record({ question: 'Où vais-je — 我该走吗？ 🐈' });
  const encoded = encodeRecord(original);
  assert.match(encoded, /^[A-Za-z0-9_-]+$/);
  assert.equal(decodeRecord(encoded).q, 'Où vais-je — 我该走吗？ 🐈');
});

test('every spread size round-trips', () => {
  const ten = [3, 9, 14, 21, 22, 35, 48, 49, 62, 76];
  for (const [spreadId, indices] of [['single', [5]], ['three_card', [1, 2, 3]], ['celtic_cross', ten]]) {
    const original = record({ spreadId, drawnCards: draw(indices, [0]) });
    assert.deepEqual(decodeRecord(encodeRecord(original)), original, spreadId);
    assert.equal(original.theme, spreadId === 'three_card' ? 'mind_body_spirit' : '');
  }
});

test('malformed or tampered links are refused', () => {
  assert.equal(decodeRecord(''), null);
  assert.equal(decodeRecord('not base64 at all !!'), null);
  assert.equal(decodeRecord(encodeRecord(record()).slice(0, 12)), null);

  const base = record();
  assert.equal(validateRecord({ ...base, spread: 'pyramid' }), null, 'unknown spread');
  assert.equal(validateRecord({ ...base, cards: [[0, 0]] }), null, 'wrong card count');
  assert.equal(validateRecord({ ...base, cards: [[0, 0], [0, 1], [5, 0]] }), null, 'same card twice');
  assert.equal(validateRecord({ ...base, cards: [[0, 0], [78, 0], [5, 0]] }), null, 'card outside the deck');
  assert.equal(validateRecord({ ...base, cards: [[0, 0], [1.5, 0], [5, 0]] }), null, 'fractional index');
  assert.equal(validateRecord({ ...base, at: 'yesterday' }), null, 'bad timestamp');
  assert.equal(validateRecord({ ...base, q: 'x'.repeat(1000) }).q.length, 280, 'long questions are trimmed');
});

test('history keeps the newest first, replaces a re-read reading, and respects the limit', () => {
  const first = record({ at: 1000 });
  const second = record({ at: 2000 });
  let list = upsertRecord([], first);
  list = upsertRecord(list, second);
  assert.deepEqual(list.map(item => item.at), [2000, 1000]);

  // Same cards at the same moment, read by someone else: one entry, updated.
  const reread = record({ at: 1000, readerId: 'lyle_pasternak' });
  assert.equal(reread.id, first.id);
  list = upsertRecord(list, reread);
  assert.equal(list.length, 2);
  assert.equal(list.find(item => item.id === first.id).reader, 'lyle_pasternak');

  list = removeRecord(list, second.id);
  assert.deepEqual(list.map(item => item.at), [1000]);

  let many = [];
  for (let at = 1; at <= 60; at++) many = upsertRecord(many, record({ at }), 50);
  assert.equal(many.length, 50);
  assert.equal(many[0].at, 60);
  assert.equal(many[49].at, 11);
});

test('history survives storage and drops entries it cannot trust', () => {
  const storage = memoryStorage();
  assert.deepEqual(loadHistory(storage), []);

  const good = record();
  assert.equal(saveHistory(storage, [good]), true);
  assert.deepEqual(loadHistory(storage), [good]);

  storage.setItem(HISTORY_KEY, JSON.stringify([good, { spread: 'single', cards: [[999, 0]], at: 5 }, 'junk']));
  assert.deepEqual(loadHistory(storage), [good]);

  storage.setItem(HISTORY_KEY, '{not json');
  assert.deepEqual(loadHistory(storage), []);
});
