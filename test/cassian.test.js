import assert from "node:assert/strict";
import test from "node:test";
import { deck } from "../src/deck.js";
import { cassianVetch } from "../src/readers/cassian-vetch/index.js";
import { dossiers } from "../src/readers/cassian-vetch/dossiers/index.js";
import { getReader, readers } from "../src/readers/registry.js";

test("the readers panel has Cassian on duty", () => {
  assert.equal(readers.length, 1);
  assert.equal(getReader("cassian-vetch").name, "Cassian Vetch");
  assert.equal(cassianVetch.title, "The Night Clerk");
  assert.ok(cassianVetch.backstory.join(" ").includes("Adele"));
  assert.ok(cassianVetch.voice.summary.length > 40);
  assert.ok(cassianVetch.greeting.includes("Cassian"));
});

test("the night window has a seat for every position he claims", () => {
  const ids = cassianVetch.spread.positions.map((position) => position.id);
  assert.deepEqual(ids, ["slip", "plate", "misregistration", "gutter", "yesterday", "next", "receipt"]);
  for (const position of cassianVetch.spread.positions) {
    assert.ok(position.anchor.length > 3);
    assert.ok(position.seat.length > 8);
  }
});

test("every card in both orientations is interpreted in every seat", () => {
  assert.equal(deck.length, 78);
  const seen = new Set();
  const bodies = new Set();

  for (const card of deck) {
    for (const position of cassianVetch.spread.positions) {
      for (const reversed of [false, true]) {
        const reading = cassianVetch.interpret(card, position, reversed);
        const key = `${card.id}|${position.id}|${reversed}`;
        seen.add(key);

        assert.equal(reading.cardName, card.name);
        assert.equal(reading.positionName, position.name);
        assert.equal(reading.reversed, reversed);
        assert.ok(reading.body.startsWith(reversed ? `${card.name}, printed upside down.` : `${card.name}.`));
        assert.ok(reading.body.toLowerCase().includes(position.anchor));
        assert.ok(reading.body.includes(`Stamp: ${reading.stamp}`));
        assert.ok(reading.stamp.length > 20);
        assert.ok(reading.body.toLowerCase().includes("you"));
        assert.ok(!bodies.has(reading.body), `duplicate reading for ${key}`);
        bodies.add(reading.body);

        const haystack = `${reading.body} ${reading.stamp}`.toLowerCase();
        for (const banned of cassianVetch.voice.refuses) {
          assert.ok(!haystack.includes(banned), `${key} says “${banned}”`);
        }
      }
    }
  }

  assert.equal(seen.size, 78 * 7 * 2);
});

test("upright and reversed are different pictures, and seats do not share a grammar", () => {
  const fool = deck[0];
  const upright = cassianVetch.interpret(fool, "plate", false);
  const slipped = cassianVetch.interpret(fool, "plate", true);
  const gutter = cassianVetch.interpret(fool, "gutter", false);
  assert.notEqual(upright.body, slipped.body);
  assert.notEqual(upright.body, gutter.body);
  assert.match(slipped.body, /printed upside down/);
  assert.match(gutter.body, /in the gutter/);
  assert.match(upright.body, /on the tympan/);
});

test("each card face has its own line and its own stamp", () => {
  const lines = new Set();
  const stamps = new Set();
  for (const card of deck) {
    for (const side of ["upright", "reversed"]) {
      const entry = dossiers[card.id][side];
      assert.ok(!lines.has(entry.line), entry.line);
      assert.ok(!stamps.has(entry.stamp), entry.stamp);
      lines.add(entry.line);
      stamps.add(entry.stamp);
    }
  }
  assert.equal(lines.size, 156);
  assert.equal(stamps.size, 156);
});

test("a dealt sheet uses seven distinct cards and speaks in his voice", () => {
  let n = 0;
  const random = () => {
    n += 1;
    return (n % 7) / 7;
  };
  const sheet = cassianVetch.read("Do I leave the job?", random);
  assert.equal(sheet.entries.length, 7);
  assert.equal(new Set(sheet.entries.map((entry) => entry.cardId)).size, 7);
  assert.match(sheet.opening, /Do I leave the job\?/);
  assert.match(sheet.closing, /condolence card/);
  assert.match(sheet.closing, new RegExp(sheet.entries[0].cardName));
  assert.match(sheet.closing, new RegExp(sheet.entries.at(-1).cardName));
});

test("a blank slip is allowed, and unknown cards are refused", () => {
  const sheet = cassianVetch.read("   ", () => 0.9);
  assert.equal(sheet.question, "");
  assert.match(sheet.opening, /No slip/);
  assert.equal(sheet.entries.every((entry) => entry.reversed === false), true);
  assert.throws(() => cassianVetch.interpret({ id: "credit-card" }, "slip", false), /does not keep/);
  assert.throws(() => cassianVetch.interpret(deck[0], "epilogue", false), /no seat/);
});

test("his own voice, backstory, and greeting refuse the phrases he refuses", () => {
  const prose = [
    cassianVetch.greeting,
    cassianVetch.voice.summary,
    cassianVetch.voice.sample,
    cassianVetch.epithet,
    ...cassianVetch.backstory,
  ]
    .join("\n")
    .toLowerCase();
  for (const banned of cassianVetch.voice.refuses) {
    assert.ok(!prose.includes(banned), banned);
  }
});
