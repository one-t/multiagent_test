import assert from "node:assert/strict";
import test from "node:test";
import { TAROT_DECK } from "../js/cards.js";
import { SPREADS } from "../js/spreads.js";
import { CARD_INTERPRETATIONS } from "../js/readers/cassian-lines.js";
import { CassianVetch, POSITION_FRAMES } from "../js/readers/cassian-vetch.js";
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

test("Cassian is on the readers panel", () => {
  const reader = getReaderById("cassian_vetch");
  assert.equal(reader.name, "Cassian Vetch");
  assert.match(reader.backstory, /Adele Vetch/);
  assert.match(reader.bio, /night window/);
  assert.match(reader.philosophy, /sentence you were avoiding/);
});

test("every card in the deck has an upright line and a slipped plate", () => {
  assert.equal(TAROT_DECK.length, 78);
  assert.equal(Object.keys(CARD_INTERPRETATIONS).length, 78);
  const lines = new Set();
  for (const card of TAROT_DECK) {
    const entry = CARD_INTERPRETATIONS[card.id];
    assert.ok(entry, `missing ${card.id}`);
    for (const side of ["upright", "reversed"]) {
      assert.ok(entry[side].includes("Stamp:"), `${card.id} ${side}`);
      assert.ok(entry[side].length > 80, `${card.id} ${side}`);
      assert.equal(lines.has(entry[side]), false, entry[side]);
      lines.add(entry[side]);
      const haystack = entry[side].toLowerCase();
      for (const banned of BANNED) assert.equal(haystack.includes(banned), false, `${card.id} says ${banned}`);
    }
  }
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
  const reading = CassianVetch.interpret({
    spread: SPREADS.celtic_cross,
    question: "Do I leave the job?",
    cards: seated.map((position) => ({ card, isReversed: false, position })),
  });
  const reflections = reading.cardReadings.map((entry) => entry.reflection);
  assert.equal(new Set(reflections).size, seated.length);
  assert.match(reading.summary, /Do I leave the job\?/);
  assert.match(reading.closingBenediction, /condolence card/);
  for (const reflection of reflections) {
    assert.match(reflection, /The Fool\./);
    assert.match(reflection, /Stamp:/);
  }
  const slipped = CassianVetch.interpret({
    spread: SPREADS.single,
    question: "",
    cards: [{ card, isReversed: true, position: SPREADS.single.positions[0] }],
  });
  assert.match(slipped.cardReadings[0].reflection, /printed upside down/);
  assert.match(slipped.summary, /No slip/);
  assert.equal(Object.keys(POSITION_FRAMES).length >= seated.length, true);
});
