/**
 * The eight built-in readers. Every reader goes through the same checks, so a
 * new one is covered by adding it to js/readers/index.js and to VOICES below.
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import { TAROT_DECK } from '../js/cards.js';
import { SPREADS, getSpread, getPositions } from '../js/spreads.js';
import { ReaderRegistry } from '../js/reader-interface.js';
import { READERS, DEFAULT_READER_ID, getReaderById } from '../js/readers/index.js';
import { composeReading, splitSignature } from '../js/readers/compose.js';
import * as ruth from '../js/readers/ruth-calloway.js';
import * as cassian from '../js/readers/cassian-vetch.js';
import * as lyle from '../js/readers/lyle-pasternak.js';
import * as sable from '../js/readers/sable-moreau.js';
import * as cal from '../js/readers/cal-navarro.js';
import * as morwenna from '../js/readers/morwenna.js';
import * as barnaby from '../js/readers/barnaby.js';
import * as pippin from '../js/readers/pippin.js';
import { CARD_INTERPRETATIONS as CASSIAN_LINES } from '../js/readers/cassian-lines.js';
import { CARD_INTERPRETATIONS as LYLE_LINES } from '../js/readers/lyle-lines.js';
import { CARD_INTERPRETATIONS as SABLE_LINES } from '../js/readers/sable-lines.js';
import { CARD_INTERPRETATIONS as CAL_LINES } from '../js/readers/cal-lines.js';
import { CARD_INTERPRETATIONS as MORWENNA_LINES } from '../js/readers/morwenna-lines.js';
import { CARD_INTERPRETATIONS as BARNABY_LINES } from '../js/readers/barnaby-lines.js';
import { CARD_INTERPRETATIONS as PIPPIN_LINES } from '../js/readers/pippin-lines.js';

/** id -> the reader's position lead-ins, card lines, and the label that starts each card's sign-off. */
const VOICES = {
  cassian_vetch: { frames: cassian.POSITION_FRAMES, lines: CASSIAN_LINES, tag: 'Stamp' },
  ruth_calloway: { frames: ruth.POSITION_FRAMES, lines: ruth.CARD_INTERPRETATIONS, tag: null },
  lyle_pasternak: { frames: lyle.POSITION_FRAMES, lines: LYLE_LINES, tag: 'Slip' },
  morwenna_ravenscroft: { frames: morwenna.POSITION_FRAMES, lines: MORWENNA_LINES, tag: 'Proverb' },
  barnaby: { frames: barnaby.POSITION_FRAMES, lines: BARNABY_LINES, tag: 'Rule' },
  pippin: { frames: pippin.POSITION_FRAMES, lines: PIPPIN_LINES, tag: null },
  sable_moreau: { frames: sable.POSITION_FRAMES, lines: SABLE_LINES, tag: 'Order' },
  cal_navarro: { frames: cal.POSITION_FRAMES, lines: CAL_LINES, tag: 'Want' }
};

// Phrases the five readers written for this app agreed never to use
const NO_STOCK_PHRASES = ['cassian_vetch', 'lyle_pasternak', 'sable_moreau', 'cal_navarro'];
const BANNED = ['the universe', 'spirit guide', 'twin flame', 'vibrational', 'your journey', 'as above so below', 'everything happens for a reason'];

const card = id => TAROT_DECK.find(item => item.id === id);

/** The position sets the app actually deals: one card, each three-card frame, the Celtic Cross. */
function everySpread() {
  return [
    SPREADS.single.positions,
    ...SPREADS.three_card.subThemes.map(theme => getPositions('three_card', theme.id)),
    SPREADS.celtic_cross.positions
  ];
}

function deal(spreadId, themeId, cardIds, { reversed = [], question = 'should I quit my job?' } = {}) {
  return {
    spread: getSpread(spreadId),
    question,
    cards: getPositions(spreadId, themeId).map((position, i) => ({
      card: card(cardIds[i]),
      isReversed: reversed.includes(i),
      position
    }))
  };
}

const THREE = ['maj_16', 'cups_5', 'pentacles_king'];
const TEN = ['maj_00', 'maj_01', 'maj_02', 'maj_03', 'cups_2', 'cups_3', 'swords_2', 'swords_3', 'wands_ace', 'pentacles_ace'];

test('the reader list and the checks cover the same eight readers', () => {
  assert.deepEqual(READERS.map(reader => reader.id).sort(), Object.keys(VOICES).sort());
  assert.equal(new Set(READERS.map(reader => reader.id)).size, READERS.length);
  assert.equal(getReaderById(DEFAULT_READER_ID).name, 'Cassian Vetch');
});

test('every reader registers and has what the reader list shows', () => {
  const registry = new ReaderRegistry();
  for (const reader of READERS) {
    registry.register(reader);
    for (const field of ['id', 'name', 'shortName', 'title', 'bio', 'shortBio', 'philosophy', 'greeting']) {
      assert.ok(typeof reader[field] === 'string' && reader[field].length > 0, `${reader.id} has no ${field}`);
    }
    // One pattern for titles: what the reader is, short, sentence case, no leading "The"
    assert.ok(reader.title.split(/\s+/).length <= 6, `${reader.id} title is long: ${reader.title}`);
    assert.equal(/^The\b/.test(reader.title), false, `${reader.id} title starts with "The"`);
    assert.equal(/ [A-Z][a-z]+ [A-Z][a-z]+$/.test(reader.title), false, `${reader.id} title is in Title Case: ${reader.title}`);
    // Written to stand alone in the list: two sentences
    assert.ok(reader.shortBio.length <= 210, `${reader.id} short bio is ${reader.shortBio.length} characters`);
  }
});

test('only Sable and Cal are marked explicit', () => {
  assert.deepEqual(READERS.filter(reader => reader.explicit).map(reader => reader.id), ['sable_moreau', 'cal_navarro']);
});

test('every reader has a distinct line for every card, both ways up', () => {
  for (const reader of READERS) {
    const { lines, tag } = VOICES[reader.id];
    assert.equal(Object.keys(lines).length, 78, reader.id);
    const seen = new Set();
    for (const item of TAROT_DECK) {
      for (const side of ['upright', 'reversed']) {
        const text = lines[item.id][side];
        assert.ok(typeof text === 'string' && text.length > 40, `${reader.id} ${item.id} ${side}`);
        assert.equal(seen.has(text), false, `${reader.id} ${item.id} ${side} repeats another line`);
        seen.add(text);
        if (NO_STOCK_PHRASES.includes(reader.id)) {
          for (const phrase of BANNED) assert.equal(text.toLowerCase().includes(phrase), false, `${reader.id} ${item.id} says "${phrase}"`);
        }
      }
    }
    assert.equal(seen.size, 156, reader.id);

    // A reader with a sign-off gives one on every card, and it can be lifted out cleanly
    if (tag) {
      for (const item of TAROT_DECK) {
        for (const isReversed of [false, true]) {
          const reading = reader.interpret({ spread: SPREADS.single, question: '', cards: [{ card: item, isReversed, position: SPREADS.single.positions[0] }] });
          const entry = reading.cardReadings[0];
          assert.equal(entry.signatureLabel, tag, `${reader.id} ${item.id}`);
          assert.ok(entry.signature.length > 8, `${reader.id} ${item.id} has no ${tag}`);
          assert.ok(entry.body.length > 20, `${reader.id} ${item.id} has no body`);
          assert.equal(entry.body.includes(`${tag}:`), false, `${reader.id} ${item.id} keeps the ${tag} in the body`);
        }
      }
    }
  }
});

test('every position has its own lead-in, and no lead-in gives a verdict the card might contradict', () => {
  for (const reader of READERS) {
    const { frames } = VOICES[reader.id];
    for (const positions of everySpread()) {
      for (const position of positions) {
        assert.ok(frames[position.role], `${reader.id} has no lead-in for ${position.role}`);
        assert.ok(frames[position.role].endsWith(':'), `${reader.id} ${position.role} does not lead into the card`);
      }
    }
    assert.equal(new Set(Object.values(frames)).size, Object.values(frames).length, `${reader.id} repeats a lead-in`);
  }
  // Morwenna's old position text said "upright" or "reversed" and judged the card. The lead-ins must not.
  for (const frame of Object.values(morwenna.POSITION_FRAMES)) {
    assert.equal(/upright|revers|blockage|distortion/i.test(frame), false, frame);
  }
});

test('every card reads in every position of every spread, both ways up', () => {
  for (const reader of READERS) {
    for (const isReversed of [false, true]) {
      for (const item of TAROT_DECK) {
        for (const positions of everySpread()) {
          const cards = positions.map(position => ({ card: item, isReversed, position }));
          const reading = reader.interpret({ spread: SPREADS.celtic_cross, question: '', cards });
          assert.equal(ReaderRegistry.isUsableReading(reading, cards.length), true, `${reader.id} ${item.id}`);
          const texts = reading.cardReadings.map(entry => entry.reflection);
          assert.equal(new Set(texts).size, texts.length, `${reader.id} ${item.id}: two positions read the same`);
          for (const entry of reading.cardReadings) {
            assert.equal(entry.orientation, isReversed ? 'Reversed' : 'Upright');
            assert.ok(entry.lead.includes(item.name), `${reader.id} does not name ${item.name}`);
            assert.equal(/undefined|\[object/.test(entry.reflection), false, entry.reflection);
          }
        }
      }
    }
  }
});

test('the opening quotes the question as typed and comes before the cards', () => {
  for (const reader of READERS) {
    for (const data of [deal('single', null, ['maj_16']), deal('three_card', 'past_present_future', THREE, { reversed: [1] }), deal('celtic_cross', null, TEN, { reversed: [2, 5] })]) {
      const reading = reader.interpret(data);
      assert.equal(reading.readerName, reader.name);
      assert.ok(reading.opening.includes('“should I quit my job?”'), `${reader.id}: ${reading.opening}`);
      assert.doesNotMatch(reading.opening, /\?”[.:,]/, `${reader.id} adds punctuation after the question`);
      // The question belongs to the opening, not to what is said after the cards
      assert.equal(reading.summary.includes('quit my job'), false, reader.id);
    }
    const blank = reader.interpret(deal('three_card', 'past_present_future', THREE, { question: '   ' }));
    assert.equal(blank.opening.includes('“'), false, `${reader.id} quotes an empty question`);
    assert.ok(blank.opening.length > 10, reader.id);
  }
});

test('a single card gets no lines written for a spread', () => {
  for (const reader of READERS) {
    const reading = reader.interpret(deal('single', null, ['pentacles_king']));
    assert.equal(reading.summary, '', `${reader.id} sums up one card: ${reading.summary}`);
    assert.equal(reading.actionableAdvice, '', `${reader.id} gives spread advice for one card`);
    assert.equal(reading.elementalInsight, '', `${reader.id} comments on the suits of one card`);
    assert.ok(reading.closingBenediction.length > 10, reader.id);
    assert.equal(/last card|ends on|is last|the last order|more than half|mostly/i.test(reading.closingBenediction), false, `${reader.id}: ${reading.closingBenediction}`);
  }
});

test('a spread gets a suit sentence with no counts in it, advice and a closing', () => {
  for (const reader of READERS) {
    for (const data of [deal('three_card', 'situation_obstacle_advice', THREE, { reversed: [1] }), deal('three_card', 'mind_body_spirit', ['wands_2', 'wands_3', 'cups_5'], { reversed: [0, 1, 2] }), deal('celtic_cross', null, TEN)]) {
      const reading = reader.interpret(data);
      for (const part of ['elementalInsight', 'actionableAdvice', 'closingBenediction']) {
        assert.ok(typeof reading[part] === 'string' && reading[part].length > 10, `${reader.id} ${part}`);
      }
      assert.equal(/\d/.test(reading.elementalInsight), false, `${reader.id}: ${reading.elementalInsight}`);
    }
  }
});

test('two spreads that end on different suits do not end with the same words', () => {
  for (const reader of READERS.filter(item => item.id !== 'pippin')) { // Pippin always falls asleep on your hand
    const closings = ['wands_2', 'cups_2', 'swords_2', 'pentacles_2', 'maj_05'].map(last =>
      reader.interpret(deal('three_card', 'past_present_future', ['maj_16', 'cups_5', last])).closingBenediction);
    assert.equal(new Set(closings).size, 5, `${reader.id} repeats a closing`);
  }
});

test('no two readers end a spread on the same sentence', () => {
  for (const last of ['wands_2', 'cups_2', 'swords_2', 'pentacles_king', 'maj_05']) {
    const sentences = new Map();
    for (const reader of READERS) {
      const closing = reader.interpret(deal('three_card', 'past_present_future', ['maj_16', 'cups_5', last])).closingBenediction;
      for (const sentence of closing.split(/(?<=[.!?])\s+/).filter(text => text.split(' ').length > 6)) {
        assert.equal(sentences.has(sentence), false, `${reader.id} and ${sentences.get(sentence)} both say: ${sentence}`);
        sentences.set(sentence, reader.id);
      }
    }
  }
});

test('a card a reader does not know is an error, except for Ruth, who says so in her own words', () => {
  const stranger = { spread: SPREADS.single, question: '', cards: [{ card: { ...TAROT_DECK[0], id: 'not_a_card' }, isReversed: false, position: SPREADS.single.positions[0] }] };
  for (const reader of READERS) {
    if (reader.id === 'ruth_calloway') {
      assert.match(reader.interpret(stranger).cardReadings[0].reflection, /Can't place this one/);
    } else {
      assert.throws(() => reader.interpret(stranger), reader.id);
    }
  }
});

test('what a reader does is in square brackets, never asterisks', () => {
  for (const reader of READERS) {
    const { lines } = VOICES[reader.id];
    const all = Object.values(lines).map(entry => entry.upright + entry.reversed).join('');
    assert.equal(all.includes('*'), false, `${reader.id} has asterisks, which the app would show literally`);
  }
});

test('sign-offs are lifted out of a card line cleanly', () => {
  assert.deepEqual(splitSignature('Body text. Stamp: Do the thing.', 'Stamp'), { body: 'Body text.', signature: 'Do the thing.' });
  assert.deepEqual(splitSignature('No sign-off here.', 'Stamp'), { body: 'No sign-off here.', signature: '' });
  assert.deepEqual(splitSignature('Anything.', null), { body: 'Anything.', signature: '' });
});

test('a fixed line with several variants varies by deal, and the same deal always says the same thing', () => {
  const variants = ['a', 'b', 'c', 'd'];
  const voice = {
    ...cassian.VOICE,
    openers: { question: { 1: variants.map(v => q => `${v} ${q}`), 3: variants.map(v => q => `${v} ${q}`), 10: [q => q] }, blank: { 1: variants, 3: variants, 10: variants } },
    weight: { heavy: variants, light: variants },
    advice: { none: { light: variants, heavy: variants }, some: variants, most: variants },
    closers: Object.fromEntries(['wands', 'cups', 'swords', 'pentacles', 'major'].map(key => [key, variants.map(v => name => `${v} ${name}`)])),
    closerOne: variants.map(v => name => `${v} ${name}`)
  };
  const seen = { opening: new Set(), summary: new Set(), actionableAdvice: new Set(), closingBenediction: new Set() };
  for (const first of TAROT_DECK.slice(0, 40)) {
    const data = deal('three_card', 'past_present_future', [first.id, 'cups_5', 'pentacles_king']);
    const reading = composeReading(voice, data);
    assert.deepEqual(composeReading(voice, data), reading, 'the same deal reads the same twice');
    for (const part of Object.keys(seen)) {
      assert.match(reading[part], /^[abcd]( |$)/, part);
      seen[part].add(reading[part][0]);
    }
  }
  for (const [part, used] of Object.entries(seen)) assert.equal(used.size, 4, `${part} used ${[...used]}`);
  assert.match(composeReading(voice, deal('single', null, ['maj_05'])).closingBenediction, /^[abcd] The Hierophant$/);
});

// ---------------------------------------------------------------- reader by reader

test('Cassian: every card ends in a stamp, and a reversal is printed upside down', () => {
  for (const item of TAROT_DECK) {
    for (const side of ['upright', 'reversed']) assert.match(CASSIAN_LINES[item.id][side], /Stamp: /, `${item.id} ${side}`);
  }
  const reading = cassian.CassianVetch.interpret(deal('single', null, ['maj_00'], { reversed: [0], question: '' }));
  assert.match(reading.cardReadings[0].lead, /The Fool, printed upside down\.$/);
  assert.match(reading.opening, /No slip/);
  assert.match(cassian.CassianVetch.backstory, /Adele Vetch/);
});

test('Lyle: slips are curly-quoted, and the score is for spreads and moves with them', () => {
  for (const item of TAROT_DECK) {
    for (const side of ['upright', 'reversed']) {
      assert.match(LYLE_LINES[item.id][side], /Slip: “[^”]+”$/, `${item.id} ${side}`);
      assert.equal(LYLE_LINES[item.id][side].includes('"'), false, `${item.id} ${side} uses straight quotes`);
    }
  }
  assert.equal(lyle.scoreSpread({ total: 3, reversedCount: 0, majorHeavy: false }), 8);
  assert.equal(lyle.scoreSpread({ total: 3, reversedCount: 3, majorHeavy: true }), 1);
  assert.ok(lyle.scoreSpread({ total: 10, reversedCount: 2, majorHeavy: false }) > lyle.scoreSpread({ total: 10, reversedCount: 8, majorHeavy: false }));

  assert.match(lyle.LylePasternak.interpret(deal('three_card', 'past_present_future', THREE)).summary, /Score: \d out of 10\./);
  const one = lyle.LylePasternak.interpret(deal('single', null, ['maj_00']));
  assert.equal(/Score:/.test(one.opening + one.summary + one.closingBenediction), false, 'one card is not marked out of ten');

  const fixed = [lyle.LylePasternak.bio, lyle.LylePasternak.philosophy, ...Object.values(lyle.POSITION_FRAMES)].join('\n');
  for (const prop of ['Doris', 'laminator', 'Slim Jim', 'Circuit City']) {
    assert.ok(fixed.split(prop).length - 1 <= 1, `${prop} is in the fixed text more than once`);
  }
});

test('Ruth: "hon" arrives only with a card, and her years add up', () => {
  const fixed = [ruth.RuthCalloway.bio, ruth.RuthCalloway.shortBio, ruth.RuthCalloway.philosophy, ...Object.values(ruth.POSITION_FRAMES)].join('\n');
  assert.doesNotMatch(fixed, /\bhon\b/);
  const reading = ruth.RuthCalloway.interpret(deal('three_card', 'past_present_future', ['wands_2', 'wands_3', 'wands_4'], { question: '' }));
  assert.doesNotMatch([reading.opening, reading.summary, reading.elementalInsight, reading.actionableAdvice, reading.closingBenediction].join('\n'), /\bhon\b/);
  assert.match(ruth.RuthCalloway.bio, /Thirty-eight years/);
  assert.match(ruth.RuthCalloway.backstory, /thirty-eight years/);
});

test('Sable and Cal: every card has its own order and its own want, and they are not the same person', () => {
  for (const [lines, tag] of [[SABLE_LINES, 'Order'], [CAL_LINES, 'Want']]) {
    const closers = new Set();
    for (const item of TAROT_DECK) {
      for (const side of ['upright', 'reversed']) {
        const text = lines[item.id][side];
        assert.match(text, new RegExp(`${tag}: “[^”]+”$`), `${item.id} ${side}`);
        assert.equal(text.includes('"'), false, `${item.id} ${side} uses straight quotes`);
        const closer = text.match(/“([^”]+)”$/)[1];
        assert.equal(closers.has(closer), false, closer);
        closers.add(closer);
      }
    }
  }
  for (const item of TAROT_DECK) {
    assert.notEqual(SABLE_LINES[item.id].upright, CAL_LINES[item.id].upright);
    assert.notEqual(SABLE_LINES[item.id].reversed, CAL_LINES[item.id].reversed);
  }
  assert.notEqual(sable.SableMoreau.voice, cal.CalNavarro.voice);
});

test('Morwenna: the card is named, its line follows, and its proverb is set apart', () => {
  const reading = morwenna.morwennaReader.interpret(deal('three_card', 'past_present_future', THREE, { reversed: [1] }));
  const [, present] = reading.cardReadings;
  assert.match(present.lead, /Five of Cups, reversed\.$/);
  assert.equal(present.body, MORWENNA_LINES.cups_5.reversed);
  assert.equal(present.signature, MORWENNA_LINES.cups_5.proverb);
  // The old position sentence called a healing card "an internal blockage". Nothing follows her own line now.
  assert.equal(/blockage|root distortion/.test(present.reflection), false);
});

test('Barnaby: every card ends in a Rule', () => {
  for (const item of TAROT_DECK) {
    for (const side of ['upright', 'reversed']) assert.match(BARNABY_LINES[item.id][side], /Rule: “[^”]+”$/, `${item.id} ${side}`);
  }
});

test('Pippin: what the cat does is always in square brackets', () => {
  const reading = pippin.Pippin.interpret(deal('three_card', 'past_present_future', THREE));
  for (const text of [reading.opening, reading.elementalInsight, reading.actionableAdvice, reading.closingBenediction, ...reading.cardReadings.map(entry => entry.reflection)]) {
    assert.match(text, /\[[^\]]+\]/, text);
  }
});
