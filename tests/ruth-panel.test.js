import assert from "node:assert/strict";
import test from "node:test";
import { TAROT_DECK } from "../js/cards.js";
import { SPREADS, getPositions } from "../js/spreads.js";
import { RuthCalloway, CARD_INTERPRETATIONS, POSITION_FRAMES } from "../js/readers/ruth-calloway.js";

function everyPosition() {
  return [
    ...SPREADS.single.positions,
    ...SPREADS.three_card.subThemes.flatMap((theme) => getPositions("three_card", theme.id)),
    ...SPREADS.celtic_cross.positions,
  ];
}

test("Ruth's name and title fit the header chip, and her years add up", () => {
  assert.equal(RuthCalloway.name, "Ruth Calloway");
  assert.ok(RuthCalloway.title.length <= 32, RuthCalloway.title);
  assert.match(RuthCalloway.bio, /Thirty-eight years/);
  assert.match(RuthCalloway.backstory, /thirty-eight years/);
});

test("every card has an upright and a reversed line", () => {
  assert.equal(Object.keys(CARD_INTERPRETATIONS).length, 78);
  for (const card of TAROT_DECK) {
    const entry = CARD_INTERPRETATIONS[card.id];
    assert.ok(entry && entry.upright && entry.reversed, card.id);
  }
});

test("every position the app can deal has its own frame, including all three three-card frames", () => {
  const card = TAROT_DECK.find((item) => item.id === "maj_16");
  const seated = everyPosition();
  for (const position of seated) assert.ok(POSITION_FRAMES[position.role], `no frame for role ${position.role}`);

  const reading = RuthCalloway.interpret({
    spread: SPREADS.celtic_cross,
    question: "should I quit my job?",
    cards: seated.map((position) => ({ card, isReversed: false, position })),
  });
  const reflections = reading.cardReadings.map((entry) => entry.reflection);
  assert.equal(new Set(reflections).size, seated.length);
  assert.match(reading.summary, /“should I quit my job\?”/);
  assert.doesNotMatch(reading.summary, /\?”[.:,]/, "nothing is appended to the user's punctuation");
});

test("\"hon\" arrives only with a card, never in the fixed text", () => {
  const fixed = [RuthCalloway.bio, RuthCalloway.philosophy, ...Object.values(POSITION_FRAMES)].join("\n");
  assert.doesNotMatch(fixed, /\bhon\b/);

  const position = SPREADS.single.positions[0];
  const plain = TAROT_DECK.find((item) => item.id === "wands_2"); // a line without "hon"
  const reading = RuthCalloway.interpret({ spread: SPREADS.single, question: "", cards: [{ card: plain, isReversed: true, position }] });
  const outside = [reading.summary, reading.elementalInsight, reading.actionableAdvice, reading.closingBenediction].join("\n");
  assert.doesNotMatch(outside, /\bhon\b/);
  assert.equal(/\d/.test(reading.elementalInsight), false, "the reader's suit note carries no counts");
});

test("two readings do not have to end the same way", () => {
  const position = SPREADS.single.positions[0];
  const sword = TAROT_DECK.find((item) => item.id === "swords_3");
  const coin = TAROT_DECK.find((item) => item.id === "pentacles_9");
  const a = RuthCalloway.interpret({ spread: SPREADS.single, question: "", cards: [{ card: sword, isReversed: false, position }] });
  const b = RuthCalloway.interpret({ spread: SPREADS.single, question: "", cards: [{ card: coin, isReversed: true, position }] });
  assert.notEqual(a.closingBenediction, b.closingBenediction);
  assert.notEqual(a.actionableAdvice, b.actionableAdvice);
});
