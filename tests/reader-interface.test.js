/**
 * The suit tally every reader and the reading panel rely on, and the fallback
 * reading used when a reader fails.
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import { TAROT_DECK } from '../js/cards.js';
import { ReaderRegistry } from '../js/reader-interface.js';

const card = id => TAROT_DECK.find(item => item.id === id);
const drawn = (...ids) => ids.map(id => ({ card: card(id), isReversed: false, position: { index: 0, name: 'Seat' } }));

test('a Major Arcana card is never counted as a suit card', () => {
  // The Tower carries the element "Fire / Mars"; there is still no Wands card here
  const { counts, suits, majors, total } = ReaderRegistry.analyzeElements(drawn('maj_16', 'cups_5', 'pentacles_king'));
  assert.deepEqual(suits, { wands: 0, cups: 1, swords: 0, pentacles: 1 });
  assert.equal(majors, 1);
  assert.equal(total, 3);
  assert.deepEqual(counts, { Fire: 0, Water: 1, Air: 0, Earth: 1, Spirit: 1 });
});

test('every card in the deck lands in exactly one group', () => {
  const { suits, majors } = ReaderRegistry.analyzeElements(TAROT_DECK.map(item => ({ card: item })));
  assert.deepEqual(suits, { wands: 14, cups: 14, swords: 14, pentacles: 14 });
  assert.equal(majors, 22);
});

test('a tie has no dominant group', () => {
  assert.equal(ReaderRegistry.analyzeElements(drawn('maj_16', 'cups_5', 'pentacles_king')).dominant, null);
  assert.equal(ReaderRegistry.analyzeElements(drawn('wands_2', 'wands_3', 'cups_2', 'cups_3')).dominant, null);
});

test('a spread of fewer than three cards has no dominant group', () => {
  assert.equal(ReaderRegistry.analyzeElements(drawn('wands_2')).dominant, null);
  assert.equal(ReaderRegistry.analyzeElements(drawn('wands_2', 'wands_3')).dominant, null);
});

test('a clear lead is reported, for a suit and for the majors', () => {
  assert.equal(ReaderRegistry.analyzeElements(drawn('wands_2', 'wands_3', 'cups_2')).dominant, 'Fire');
  assert.equal(ReaderRegistry.analyzeElements(drawn('swords_2', 'swords_3', 'swords_4', 'maj_01')).dominant, 'Air');
  assert.equal(ReaderRegistry.analyzeElements(drawn('maj_00', 'maj_01', 'cups_2')).dominant, 'Spirit');
});

test('the fallback reading gives every card its own meaning, the right way up', () => {
  const cards = [
    { card: card('maj_16'), isReversed: false, position: { index: 0, name: 'Past', subtitle: '' } },
    { card: card('cups_5'), isReversed: true, position: { index: 1, name: 'Present', subtitle: '' } }
  ];
  const reading = ReaderRegistry.plainReading({ cards }, { id: 'x', name: 'Someone', title: 'A title' });
  assert.equal(reading.readerName, 'Someone');
  assert.equal(reading.cardReadings.length, 2);
  assert.equal(reading.cardReadings[0].reflection, card('maj_16').meaningUpright);
  assert.equal(reading.cardReadings[1].reflection, card('cups_5').meaningReversed);
  assert.equal(reading.cardReadings[1].orientation, 'Reversed');
  assert.equal(ReaderRegistry.isUsableReading(reading, 2), true);
});

test('unusable reader output is recognised', () => {
  assert.equal(ReaderRegistry.isUsableReading(null, 1), false);
  assert.equal(ReaderRegistry.isUsableReading('a string', 1), false);
  assert.equal(ReaderRegistry.isUsableReading({ cardReadings: [] }, 1), false);
  assert.equal(ReaderRegistry.isUsableReading({ cardReadings: [{ reflection: 5 }] }, 1), false);
  assert.equal(ReaderRegistry.isUsableReading({ cardReadings: [{ reflection: 'ok' }] }, 1), true);
});
