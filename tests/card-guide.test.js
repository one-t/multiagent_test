/**
 * The card guide: every card, both ways up, for every kind of question.
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import { TAROT_DECK } from '../js/cards.js';
import { LINES } from '../js/inquiry-lines.js';
import {
  INQUIRIES,
  composeGuide,
  describeCard,
  guessInquiry,
  openingLine
} from '../js/card-guide.js';
import { getPositions } from '../js/spreads.js';

const CATEGORIES = ['love', 'work', 'money', 'choice', 'inner'];

test('every card has an about-line and five question lines, upright and reversed', () => {
  const seen = new Set();
  for (const card of TAROT_DECK) {
    const entry = LINES[card.id];
    assert.ok(entry, card.id);
    assert.equal(typeof entry.about, 'string', card.id);
    assert.ok(entry.about.length >= 40, card.id);
    for (const side of ['u', 'r']) {
      for (const category of CATEGORIES) {
        const line = entry[side][category];
        assert.equal(typeof line, 'string', `${card.id} ${side} ${category}`);
        assert.ok(line.length >= 40, `${card.id} ${side} ${category}`);
        assert.equal(seen.has(line), false, `repeated: ${line}`);
        seen.add(line);
      }
    }
    assert.notEqual(entry.u.love, entry.r.love);
  }
  assert.equal(Object.keys(LINES).length, 78);
});

test('a job question is read as work, and a blank question is general', () => {
  assert.equal(guessInquiry('should I quit my job?'), 'work');
  assert.equal(guessInquiry('does he love me'), 'love');
  assert.equal(guessInquiry('can I afford the rent'), 'money');
  assert.equal(guessInquiry('should I stay or leave'), 'choice');
  assert.equal(guessInquiry(''), 'general');
  assert.equal(guessInquiry('I love my job and I am anxious'), 'general');
});

test('a dealt card carries keywords, the usual meaning, and the question it was read for', () => {
  const card = TAROT_DECK.find(item => item.id === 'maj_16');
  const described = describeCard(card, false, 'work');
  assert.ok(described.keywords.includes('upheaval') || described.keywords.length >= 3);
  assert.equal(described.general, card.meaningUpright);
  assert.equal(described.lead.label, 'Work');
  assert.deepEqual(described.others.map(item => item.label), ['Love', 'Money', 'A decision', 'Inner life']);
  assert.match(described.reflection, /^The Tower/);
  assert.match(described.reflection, /Keywords: /);
  assert.match(described.reflection, /Work: /);
  assert.equal(described.reflection.includes('Love:'), false);

  const positions = getPositions('single');
  const reading = composeGuide({
    question: 'should I quit my job?',
    cards: [{ card, isReversed: false, position: positions[0] }]
  }, 'work');
  assert.equal(reading.guide, true);
  assert.equal(reading.inquiryId, 'work');
  assert.equal(reading.opening, openingLine('should I quit my job?', 'work'));
  assert.ok(reading.opening.includes('“should I quit my job?” '));
  assert.equal(reading.opening.includes('?”.'), false);
  assert.equal(reading.summary, '');
  assert.equal(reading.actionableAdvice, '');
  assert.match(reading.closingBenediction, /^One card/);
  assert.equal(reading.cardReadings[0].reflection, described.reflection);
  assert.equal(INQUIRIES[0].id, 'general');
});
