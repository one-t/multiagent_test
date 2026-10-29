/**
 * Sable's orders sit under the card guide. Every card, both ways up, every kind of question.
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import { TAROT_DECK } from '../js/cards.js';
import { composeGuide, describeCard } from '../js/card-guide.js';
import { applySableVoice, SABLE_ORDERS, sableOrders } from '../js/readers/sable-voice.js';
import { getPositions } from '../js/spreads.js';

const CATEGORIES = ['love', 'work', 'money', 'choice', 'inner'];
const BANNED = [
  'the universe',
  'spirit guide',
  'twin flame',
  'vibrational',
  'your journey',
  'as above so below',
  'everything happens for a reason'
];

test('Sable has a distinct order for every card, both ways up, for every kind of question', () => {
  const seen = new Set();
  for (const card of TAROT_DECK) {
    const entry = SABLE_ORDERS[card.id];
    assert.ok(entry, card.id);
    for (const side of ['u', 'r']) {
      for (const category of CATEGORIES) {
        const line = entry[side][category];
        const where = `${card.id} ${side} ${category}`;
        assert.equal(typeof line, 'string', where);
        assert.ok(line.length >= 40, where);
        assert.match(line, /Order: “[^”]+”$/, where);
        assert.equal(line.includes('['), false, where);
        assert.equal(line.includes(']'), false, where);
        for (const phrase of BANNED) assert.equal(line.toLowerCase().includes(phrase), false, `${where} ${phrase}`);
        assert.equal(seen.has(line), false, `repeated: ${line}`);
        seen.add(line);
      }
    }
    assert.notEqual(entry.u.love, entry.r.love, card.id);
    assert.notEqual(entry.u.work, entry.r.work, card.id);
  }
  assert.equal(Object.keys(SABLE_ORDERS).length, 78);
  assert.equal(seen.size, 78 * 2 * CATEGORIES.length);
});

test('her orders attach under the guide and the clean sentence stays', () => {
  const card = TAROT_DECK.find(item => item.id === 'maj_00');
  const described = describeCard(card, false, 'work');
  const positions = getPositions('single');
  const guide = composeGuide({
    question: 'should I quit my job?',
    cards: [{ card, isReversed: false, position: positions[0] }]
  }, 'work');
  assert.equal(guide.cardReadings[0].lead.voice, undefined);

  const voiced = applySableVoice(guide);
  const lead = voiced.cardReadings[0].lead;
  assert.equal(lead.label, 'Work');
  assert.equal(lead.text, described.lead.text);
  assert.equal(lead.voice, sableOrders('maj_00', false).work);
  assert.match(voiced.cardReadings[0].reflection, /Sable: /);
  assert.match(voiced.cardReadings[0].reflection, /Work: /);
  assert.equal(voiced.voiceNote.includes('Stop means stop'), true);
  assert.equal(voiced.cardReadings[0].others.every(item => item.voice && item.text), true);
});
