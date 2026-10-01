import assert from "node:assert/strict";
import test from "node:test";
import { TAROT_DECK } from "../js/cards.js";
import { SPREADS, getPositions } from "../js/spreads.js";
import { CARD_INTERPRETATIONS } from "../js/readers/lyle-lines.js";
import { LylePasternak, POSITION_FRAMES, scoreSpread } from "../js/readers/lyle-pasternak.js";
import { getReaderById } from "../js/readers/index.js";

const BANNED = [
  "the universe",
  "spirit guide",
  "spirit guides",
  "twin flame",
  "vibrational",
  "your journey",
  "as above so below",
  "everything happens for a reason",
];

function everyPosition() {
  return [
    ...SPREADS.single.positions,
    ...SPREADS.three_card.subThemes.flatMap((theme) => getPositions("three_card", theme.id)),
    ...SPREADS.celtic_cross.positions,
  ];
}

test("Lyle is on the readers panel", () => {
  const reader = getReaderById("lyle_pasternak");
  assert.equal(reader.name, "Lyle Pasternak");
  assert.equal(reader.id, "lyle_pasternak");
  assert.match(reader.backstory, /Circuit City/);
  assert.match(reader.backstory, /Doris/);
  assert.match(reader.bio, /parking lot/);
  assert.match(reader.philosophy, /Would not recommend/);
  assert.equal(reader.avatar, "🎟️");
});

test("every card in the deck has a unique upright roast and a unique reversal, with curly-quoted slips", () => {
  assert.equal(TAROT_DECK.length, 78);
  assert.equal(Object.keys(CARD_INTERPRETATIONS).length, 78);
  const lines = new Set();
  for (const card of TAROT_DECK) {
    const entry = CARD_INTERPRETATIONS[card.id];
    assert.ok(entry, `missing ${card.id}`);
    for (const side of ["upright", "reversed"]) {
      assert.match(entry[side], /Slip: “[^”]+”$/, `${card.id} ${side}`);
      assert.equal(entry[side].includes('"'), false, `${card.id} ${side} uses straight quotes`);
      assert.ok(entry[side].length > 80, `${card.id} ${side}`);
      assert.equal(lines.has(entry[side]), false, entry[side]);
      lines.add(entry[side]);
      const haystack = entry[side].toLowerCase();
      for (const banned of BANNED) assert.equal(haystack.includes(banned), false, `${card.id} says ${banned}`);
    }
  }
  assert.equal(lines.size, 156);
});

test("a card Lyle does not keep is thrown out of the Ziploc", () => {
  assert.throws(
    () =>
      LylePasternak.interpret({
        spread: SPREADS.single,
        question: "",
        cards: [
          {
            card: { ...TAROT_DECK[0], id: "not_a_card" },
            isReversed: false,
            position: SPREADS.single.positions[0],
          },
        ],
      }),
    /Ziploc/,
  );
});

test("the same card reads differently in every position the app can deal", () => {
  const card = TAROT_DECK.find((item) => item.id === "maj_00");
  const seated = everyPosition();
  for (const position of seated) assert.ok(POSITION_FRAMES[position.role], `no frame for role ${position.role}`);

  const reading = LylePasternak.interpret({
    spread: SPREADS.celtic_cross,
    question: "Do I leave the job?",
    cards: seated.map((position) => ({ card, isReversed: false, position })),
  });
  const reflections = reading.cardReadings.map((entry) => entry.reflection);
  assert.equal(new Set(reflections).size, seated.length);
  assert.match(reading.summary, /“Do I leave the job\?”/);
  assert.doesNotMatch(reading.summary, /\?”[.:,]/, "nothing is appended to the user's punctuation");
  assert.match(reading.summary, /Score: \d out of 10\./);
  assert.match(reading.closingBenediction, /^That's the reading\./);
  assert.equal(reading.readerName, "Lyle Pasternak");
  for (const reflection of reflections) {
    assert.match(reflection, /The Fool\./);
    assert.match(reflection, /Slip:/);
  }
  for (const text of [reading.summary, reading.elementalInsight, reading.actionableAdvice, reading.closingBenediction]) {
    for (const banned of BANNED) assert.equal(text.toLowerCase().includes(banned), false);
  }
  const slipped = LylePasternak.interpret({
    spread: SPREADS.single,
    question: "",
    cards: [{ card, isReversed: true, position: SPREADS.single.positions[0] }],
  });
  assert.match(slipped.cardReadings[0].reflection, /\(reversed\)/);
  assert.doesNotMatch(slipped.cardReadings[0].reflection, /unfortunately|in the dip/);
  assert.equal(slipped.cardReadings[0].orientation, "Reversed");
  assert.match(slipped.summary, /No question/);
});

test("the score moves with the spread and is not capped at six", () => {
  assert.equal(scoreSpread({ total: 3, reversedCount: 0, majorHeavy: false }), 8);
  assert.equal(scoreSpread({ total: 3, reversedCount: 3, majorHeavy: true }), 1);
  assert.ok(scoreSpread({ total: 10, reversedCount: 2, majorHeavy: false }) > scoreSpread({ total: 10, reversedCount: 8, majorHeavy: false }));

  const fool = TAROT_DECK.find((item) => item.id === "maj_00");
  const ace = TAROT_DECK.find((item) => item.id === "pentacles_ace");
  const position = SPREADS.single.positions[0];
  const a = LylePasternak.interpret({ spread: SPREADS.single, question: "", cards: [{ card: fool, isReversed: false, position }] });
  const b = LylePasternak.interpret({ spread: SPREADS.single, question: "", cards: [{ card: ace, isReversed: true, position }] });
  assert.notEqual(a.summary, b.summary);
  assert.notEqual(a.closingBenediction, b.closingBenediction);
  assert.equal(/\d/.test(a.elementalInsight), false, "the reader's suit note carries no counts");
});

test("his props stay in the card lines, not in every reading", () => {
  const fixed = [LylePasternak.bio, LylePasternak.philosophy, ...Object.values(POSITION_FRAMES)].join("\n");
  for (const prop of ["Doris", "laminator", "Slim Jim", "Circuit City", "contestant", "pal"]) {
    const hits = fixed.split(prop).length - 1;
    assert.ok(hits <= 1, `${prop} appears ${hits} times in fixed text`);
  }
});
