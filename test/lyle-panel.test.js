import assert from "node:assert/strict";
import test from "node:test";
import { TAROT_DECK } from "../js/cards.js";
import { SPREADS } from "../js/spreads.js";
import { CARD_INTERPRETATIONS } from "../js/readers/lyle-lines.js";
import { LylePasternak, POSITION_FRAMES } from "../js/readers/lyle-pasternak.js";
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

test("every card in the deck has a unique upright roast and a unique reversal", () => {
  assert.equal(TAROT_DECK.length, 78);
  assert.equal(Object.keys(CARD_INTERPRETATIONS).length, 78);
  const lines = new Set();
  for (const card of TAROT_DECK) {
    const entry = CARD_INTERPRETATIONS[card.id];
    assert.ok(entry, `missing ${card.id}`);
    for (const side of ["upright", "reversed"]) {
      assert.ok(entry[side].includes("Slip:"), `${card.id} ${side}`);
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

test("the same card reads differently in every seat, including the renamed three-card themes", () => {
  const card = TAROT_DECK.find((item) => item.id === "maj_00");
  const seated = [
    ...SPREADS.single.positions,
    ...SPREADS.three_card.positions,
    ...SPREADS.celtic_cross.positions,
    { index: 0, name: "1. The Situation", subtitle: "Current Context", description: "x" },
    { index: 1, name: "2. The Obstacle", subtitle: "Core Challenge", description: "x" },
    { index: 2, name: "3. The Advice", subtitle: "Recommended Action", description: "x" },
    { index: 0, name: "1. Mind", subtitle: "Intellect", description: "x" },
    { index: 1, name: "2. Body", subtitle: "Physical", description: "x" },
    { index: 2, name: "3. Spirit", subtitle: "Higher Purpose", description: "x" },
  ];
  const reading = LylePasternak.interpret({
    spread: SPREADS.celtic_cross,
    question: "Do I leave the job?",
    cards: seated.map((position) => ({ card, isReversed: false, position })),
  });
  const reflections = reading.cardReadings.map((entry) => entry.reflection);
  assert.equal(new Set(reflections).size, seated.length);
  assert.match(reading.summary, /Do I leave the job\?/);
  assert.match(reading.closingBenediction, /Doris has the laminator/);
  assert.equal(reading.readerName, "Lyle Pasternak");
  for (const reflection of reflections) {
    assert.match(reflection, /The Fool\./);
    assert.match(reflection, /Slip:/);
  }
  for (const banned of BANNED) {
    assert.equal(reading.summary.toLowerCase().includes(banned), false);
    assert.equal(reading.elementalInsight.toLowerCase().includes(banned), false);
    assert.equal(reading.actionableAdvice.toLowerCase().includes(banned), false);
  }
  const slipped = LylePasternak.interpret({
    spread: SPREADS.single,
    question: "",
    cards: [{ card, isReversed: true, position: SPREADS.single.positions[0] }],
  });
  assert.match(slipped.cardReadings[0].reflection, /trying to resign/);
  assert.equal(slipped.cardReadings[0].orientation, "Face-down in the dip");
  assert.match(slipped.summary, /No question/);
  assert.equal(Object.keys(POSITION_FRAMES).length >= seated.length, true);
});
