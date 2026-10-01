import assert from "node:assert/strict";
import test from "node:test";
import { TAROT_DECK } from "../js/cards.js";
import { SPREADS, getPositions } from "../js/spreads.js";
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

/** Every position the app can deal, from the spread data itself. */
function everyPosition() {
  return [
    ...SPREADS.single.positions,
    ...SPREADS.three_card.subThemes.flatMap((theme) => getPositions("three_card", theme.id)),
    ...SPREADS.celtic_cross.positions,
  ];
}

test("Cassian is on the readers panel", () => {
  const reader = getReaderById("cassian_vetch");
  assert.equal(reader.name, "Cassian Vetch");
  assert.match(reader.backstory, /Adele Vetch/);
  assert.match(reader.bio, /night window/);
  assert.match(reader.philosophy, /^I stamp the sentence you were avoiding/);
  assert.equal(reader.bio.split(/\.\s/).length <= 3, true, "bio is two sentences");
});

test("every card in the deck has an upright line and a reversed line, each ending in a stamp", () => {
  assert.equal(TAROT_DECK.length, 78);
  assert.equal(Object.keys(CARD_INTERPRETATIONS).length, 78);
  const lines = new Set();
  for (const card of TAROT_DECK) {
    const entry = CARD_INTERPRETATIONS[card.id];
    assert.ok(entry, `missing ${card.id}`);
    for (const side of ["upright", "reversed"]) {
      assert.ok(entry[side].includes("Stamp:"), `${card.id} ${side}`);
      assert.ok(entry[side].length > 80, `${card.id} ${side}`);
      assert.equal(entry[side].includes("The picture in the case is"), false, `${card.id} ${side} keeps the old scaffold`);
      assert.equal(entry[side].includes("The stake is"), false, `${card.id} ${side} keeps the old scaffold`);
      assert.equal(lines.has(entry[side]), false, entry[side]);
      lines.add(entry[side]);
      const haystack = entry[side].toLowerCase();
      for (const banned of BANNED) assert.equal(haystack.includes(banned), false, `${card.id} says ${banned}`);
    }
  }
});

test("the same card reads differently in every position the app can deal", () => {
  const card = TAROT_DECK.find((item) => item.id === "maj_00");
  const seated = everyPosition();
  for (const position of seated) assert.ok(POSITION_FRAMES[position.role], `no frame for role ${position.role}`);

  const reading = CassianVetch.interpret({
    spread: SPREADS.celtic_cross,
    question: "Do I leave the job?",
    cards: seated.map((position) => ({ card, isReversed: false, position })),
  });
  const reflections = reading.cardReadings.map((entry) => entry.reflection);
  assert.equal(new Set(reflections).size, seated.length);
  assert.match(reading.summary, /“Do I leave the job\?”/);
  assert.doesNotMatch(reading.summary, /\?”[.:,]/, "nothing is appended to the user's punctuation");
  assert.match(reading.closingBenediction, /^That's the sheet\./);
  for (const reflection of reflections) {
    assert.match(reflection, /The Fool\./);
    assert.match(reflection, /Stamp:/);
  }
  for (const entry of reading.cardReadings) assert.equal(entry.orientation, "Upright");

  const slipped = CassianVetch.interpret({
    spread: SPREADS.single,
    question: "",
    cards: [{ card, isReversed: true, position: SPREADS.single.positions[0] }],
  });
  assert.match(slipped.cardReadings[0].reflection, /printed upside down/);
  assert.equal(slipped.cardReadings[0].orientation, "Reversed");
  assert.match(slipped.summary, /No slip/);
});

test("two readings do not have to end the same way", () => {
  const wand = TAROT_DECK.find((item) => item.id === "wands_ace");
  const cup = TAROT_DECK.find((item) => item.id === "cups_ace");
  const position = SPREADS.single.positions[0];
  const a = CassianVetch.interpret({ spread: SPREADS.single, question: "", cards: [{ card: wand, isReversed: false, position }] });
  const b = CassianVetch.interpret({ spread: SPREADS.single, question: "", cards: [{ card: cup, isReversed: true, position }] });
  assert.notEqual(a.closingBenediction, b.closingBenediction);
  assert.notEqual(a.actionableAdvice, b.actionableAdvice);
  assert.equal(/\d/.test(a.elementalInsight), false, "the reader's suit note carries no counts");
});
