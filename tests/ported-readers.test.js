/**
 * Morwenna, Barnaby and Pippin read through the same interface as the other
 * readers: any card, either way up, in any position the app can deal.
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import { TAROT_DECK } from '../js/cards.js';
import { SPREADS, getSpread, getPositions } from '../js/spreads.js';
import { ReaderRegistry } from '../js/reader-interface.js';
import { morwennaReader } from '../js/readers/morwenna.js';
import { Barnaby, POSITION_FRAMES as BARNABY_FRAMES } from '../js/readers/barnaby.js';
import { Pippin, POSITION_FRAMES as PIPPIN_FRAMES } from '../js/readers/pippin.js';
import { CARD_INTERPRETATIONS as BARNABY_LINES } from '../js/readers/barnaby-lines.js';
import { CARD_INTERPRETATIONS as PIPPIN_LINES } from '../js/readers/pippin-lines.js';
import { getReaderById } from '../js/readers/index.js';

const READERS = [morwennaReader, Barnaby, Pippin];

/** The position sets the app actually deals: one card, each three-card frame, the Celtic Cross. */
function everySpread() {
  return [
    SPREADS.single.positions,
    ...SPREADS.three_card.subThemes.map(theme => getPositions('three_card', theme.id)),
    SPREADS.celtic_cross.positions
  ];
}

function everyPosition() {
  return everySpread().flat();
}

function deal(spreadId, themeId, cardIds, reversed = []) {
  return {
    spread: getSpread(spreadId),
    question: 'should I quit my job?',
    cards: getPositions(spreadId, themeId).map((position, i) => ({
      card: TAROT_DECK.find(card => card.id === cardIds[i]),
      isReversed: reversed.includes(i),
      position
    }))
  };
}

test('each reader can be registered and has what the reader list shows', () => {
  const registry = new ReaderRegistry();
  for (const reader of READERS) {
    registry.register(reader);
    assert.ok(reader.id && reader.name && reader.title && reader.bio && reader.shortName, reader.id);
    assert.ok(reader.title.length <= 45, `${reader.id} title is too long for the list`);
  }
  assert.equal(getReaderById('barnaby').name, Barnaby.name);
  assert.equal(getReaderById('pippin').name, Pippin.name);
});

test('Barnaby and Pippin have a line for every card and a frame for every position', () => {
  for (const [lines, frames] of [[BARNABY_LINES, BARNABY_FRAMES], [PIPPIN_LINES, PIPPIN_FRAMES]]) {
    assert.equal(Object.keys(lines).length, 78);
    const seen = new Set();
    for (const card of TAROT_DECK) {
      for (const side of ['upright', 'reversed']) {
        const text = lines[card.id][side];
        assert.ok(text.length > 40, `${card.id} ${side}`);
        assert.equal(seen.has(text), false, `${card.id} ${side} repeats another line`);
        seen.add(text);
      }
    }
    for (const position of everyPosition()) assert.ok(frames[position.role], position.role);
  }
});

test('every card reads in every position, both ways up', () => {
  for (const reader of READERS) {
    for (const isReversed of [false, true]) {
      for (const card of TAROT_DECK) {
        for (const positions of everySpread()) {
          const cards = positions.map(position => ({ card, isReversed, position }));
          const reading = reader.interpret({ spread: SPREADS.celtic_cross, question: '', cards });
          assert.equal(ReaderRegistry.isUsableReading(reading, cards.length), true, `${reader.id} ${card.id}`);
          // Within one spread, no two positions say the same thing about the same card
          const texts = reading.cardReadings.map(entry => entry.reflection);
          assert.equal(new Set(texts).size, texts.length, `${reader.id} ${card.id}: two positions read the same`);
          for (const entry of reading.cardReadings) {
            assert.equal(entry.orientation, isReversed ? 'Reversed' : 'Upright');
            assert.equal(/undefined|\[object/.test(entry.reflection), false, entry.reflection);
          }
        }
      }
    }
  }
});

test('the synthesis is complete, quotes the question, and leaves the counts to the app', () => {
  const spreads = [
    deal('single', null, ['maj_16']),
    deal('three_card', 'situation_obstacle_advice', ['maj_16', 'cups_5', 'pentacles_king'], [1]),
    deal('three_card', 'mind_body_spirit', ['wands_2', 'wands_3', 'cups_5'], [0, 1, 2]),
    deal('celtic_cross', null, ['maj_00', 'maj_01', 'maj_02', 'maj_03', 'cups_2', 'cups_3', 'swords_2', 'swords_3', 'wands_ace', 'pentacles_ace'], [2, 5])
  ];
  for (const reader of READERS) {
    for (const data of spreads) {
      const reading = reader.interpret(data);
      assert.equal(reading.readerName, reader.name);
      assert.ok(reading.summary.includes('should I quit my job?'), reader.id);
      assert.equal(reading.summary.includes('?.') || reading.summary.includes('?,'), false, 'punctuation added to the question');
      for (const part of ['elementalInsight', 'actionableAdvice', 'closingBenediction']) {
        assert.ok(typeof reading[part] === 'string' && reading[part].length > 10, `${reader.id} ${part}`);
      }
      assert.equal(/\d/.test(reading.elementalInsight), false, `${reader.id}: ${reading.elementalInsight}`);
    }
    const blank = reader.interpret({ ...spreads[0], question: '   ' });
    assert.equal(blank.summary.includes('“'), false, `${reader.id} quotes an empty question`);
  }
});

test('a card the reader does not know is an error, which the app turns into a fallback reading', () => {
  for (const reader of READERS) {
    assert.throws(() => reader.interpret({
      spread: SPREADS.single,
      question: '',
      cards: [{ card: { ...TAROT_DECK[0], id: 'not_a_card' }, isReversed: false, position: SPREADS.single.positions[0] }]
    }), reader.id);
  }
});
