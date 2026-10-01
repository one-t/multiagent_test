import assert from "node:assert/strict";
import test from "node:test";
import { TAROT_DECK } from "../js/cards.js";
import { SPREADS, getPositions } from "../js/spreads.js";
import { CARD_INTERPRETATIONS as SABLE_LINES } from "../js/readers/sable-lines.js";
import { CARD_INTERPRETATIONS as CAL_LINES } from "../js/readers/cal-lines.js";
import { SableMoreau, POSITION_FRAMES as SABLE_FRAMES } from "../js/readers/sable-moreau.js";
import { CalNavarro, POSITION_FRAMES as CAL_FRAMES } from "../js/readers/cal-navarro.js";
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

function assertLines(lines, tag) {
  assert.equal(Object.keys(lines).length, 78);
  const seen = new Set();
  const closers = new Set();
  for (const card of TAROT_DECK) {
    const entry = lines[card.id];
    assert.ok(entry, card.id);
    for (const side of ["upright", "reversed"]) {
      const text = entry[side];
      assert.match(text, new RegExp(`${tag}: “[^”]+”$`), `${card.id} ${side}`);
      assert.equal(text.includes('"'), false, `${card.id} ${side} uses straight quotes`);
      assert.ok(text.length > 80, `${card.id} ${side}`);
      assert.equal(seen.has(text), false, text);
      seen.add(text);
      const closer = text.match(/“([^”]+)”$/)[1];
      assert.equal(closers.has(closer), false, closer);
      closers.add(closer);
      const haystack = text.toLowerCase();
      for (const banned of BANNED) assert.equal(haystack.includes(banned), false, `${card.id} says ${banned}`);
    }
  }
  assert.equal(seen.size, 156);
}

test("Sable and Cal are both on the readers panel, and they are not the same person", () => {
  const sable = getReaderById("sable_moreau");
  const cal = getReaderById("cal_navarro");
  assert.equal(sable.name, "Sable Moreau");
  assert.equal(cal.name, "Cal Navarro");
  assert.match(sable.backstory, /thirty-four/i);
  assert.match(cal.backstory, /thirty-eight/i);
  assert.match(sable.philosophy, /filthy part/);
  assert.match(cal.philosophy, /I want you/);
  assert.equal(sable.avatar, "💋");
  assert.equal(cal.avatar, "🫦");
  assert.ok(sable.title.length <= 32, sable.title);
  assert.ok(cal.title.length <= 32, cal.title);
  assert.notEqual(sable.voice, cal.voice);
});

test("every card has its own order and its own want", () => {
  assert.equal(TAROT_DECK.length, 78);
  assertLines(SABLE_LINES, "Order");
  assertLines(CAL_LINES, "Want");
  for (const card of TAROT_DECK) {
    assert.notEqual(SABLE_LINES[card.id].upright, CAL_LINES[card.id].upright);
    assert.notEqual(SABLE_LINES[card.id].reversed, CAL_LINES[card.id].reversed);
  }
});

test("a missing card is refused by both of them", () => {
  const position = SPREADS.single.positions[0];
  const card = { ...TAROT_DECK[0], id: "not_a_card" };
  assert.throws(() => SableMoreau.interpret({ spread: SPREADS.single, question: "", cards: [{ card, isReversed: false, position }] }), /sheet/);
  assert.throws(() => CalNavarro.interpret({ spread: SPREADS.single, question: "", cards: [{ card, isReversed: false, position }] }), /bed/);
});

function assertSeats(reader, frames, mark) {
  const card = TAROT_DECK.find((item) => item.id === "maj_00");
  const seated = everyPosition();
  for (const position of seated) assert.ok(frames[position.role], `no frame for ${position.role}`);

  const reading = reader.interpret({
    spread: SPREADS.celtic_cross,
    question: "Do I leave the job?",
    cards: seated.map((position) => ({ card, isReversed: false, position })),
  });
  const reflections = reading.cardReadings.map((entry) => entry.reflection);
  assert.equal(new Set(reflections).size, seated.length);
  assert.match(reading.summary, /“Do I leave the job\?”/);
  assert.doesNotMatch(reading.summary, /\?”[.:,]/);
  assert.equal(reading.readerName, reader.name);
  for (const reflection of reflections) {
    assert.match(reflection, /The Fool\./);
    assert.match(reflection, new RegExp(mark));
  }
  for (const text of [reading.summary, reading.elementalInsight, reading.actionableAdvice, reading.closingBenediction]) {
    for (const banned of BANNED) assert.equal(text.toLowerCase().includes(banned), false);
    assert.equal(/\d/.test(text), false, text);
  }

  const ace = TAROT_DECK.find((item) => item.id === "pentacles_ace");
  const slipped = reader.interpret({
    spread: SPREADS.single,
    question: "",
    cards: [{ card: ace, isReversed: true, position: SPREADS.single.positions[0] }],
  });
  assert.match(slipped.cardReadings[0].reflection, /\(reversed\)/);
  assert.equal(slipped.cardReadings[0].orientation, "Reversed");
  assert.match(slipped.summary, /No question/);
  assert.notEqual(reading.closingBenediction, slipped.closingBenediction);
  assert.notEqual(reading.actionableAdvice, slipped.actionableAdvice);
  assert.notEqual(reading.summary, slipped.summary);
}

test("the same card reads differently in every seat Sable can be dealt", () => {
  assertSeats(SableMoreau, SABLE_FRAMES, "Order:");
});

test("the same card reads differently in every seat Cal can be dealt", () => {
  assertSeats(CalNavarro, CAL_FRAMES, "Want:");
});

test("their signature props stay out of the seat frames", () => {
  const sableFixed = [SableMoreau.bio, SableMoreau.philosophy, ...Object.values(SABLE_FRAMES)].join("\n");
  const calFixed = [CalNavarro.bio, CalNavarro.philosophy, ...Object.values(CAL_FRAMES)].join("\n");
  assert.equal(sableFixed.split("phone").length - 1, 1);
  assert.equal(calFixed.split("film").length - 1, 1);
  assert.doesNotMatch(Object.values(SABLE_FRAMES).join("\n"), /Order:/);
  assert.doesNotMatch(Object.values(CAL_FRAMES).join("\n"), /Want:/);
});
