import { cassianVetch } from "../readers/cassianVetch";
import { morwennaRavenscroft } from "../readers/morwennaRavenscroft";
import { ruthCalloway } from "../readers/ruthCalloway";
import { barnaby } from "../readers/barnaby";
import { pippin } from "../readers/pippin";
import { CARD_BY_KEY } from "../cards";
import type { CardDraw } from "../types";

function draw(key: string, orientation: "upright" | "reversed", position: CardDraw["position"]): CardDraw {
  const card = CARD_BY_KEY[key];
  if (!card) throw new Error(`Unknown card key "${key}"`);
  return { card, orientation, position };
}

console.log(`=== ${ruthCalloway.name} ===`);
console.log(ruthCalloway.tagline);
console.log();

console.log("--- Single card pull ---");
console.log(ruthCalloway.interpretCard(draw("major-16", "reversed", "single")));
console.log();

console.log(`\n=== ${morwennaRavenscroft.name} ===`);
console.log(morwennaRavenscroft.tagline);
console.log();

console.log("--- Single card pull ---");
console.log(morwennaRavenscroft.interpretCard(draw("major-16", "reversed", "single")));
console.log();

console.log(`\n=== ${cassianVetch.name} ===`);
console.log(cassianVetch.tagline);
console.log();

console.log("--- Single card pull ---");
console.log(cassianVetch.interpretCard(draw("major-0", "upright", "single")));
console.log();

const threeCard: CardDraw[] = [
  draw("cups-8", "upright", "past"),
  draw("major-9", "reversed", "present"),
  draw("major-19", "upright", "future"),
];

const celticCross: CardDraw[] = [
  draw("major-0", "upright", "heart"),
  draw("swords-5", "reversed", "challenge"),
  draw("cups-10", "upright", "foundation"),
  draw("swords-3", "upright", "recentPast"),
  draw("wands-6", "upright", "crown"),
  draw("major-17", "upright", "nearFuture"),
  draw("pentacles-9", "reversed", "attitude"),
  draw("wands-queen", "upright", "environment"),
  draw("cups-9", "reversed", "hopesFears"),
  draw("major-21", "upright", "outcome"),
];

console.log(`\n=== ${barnaby.name} ===`);
console.log(barnaby.tagline);
console.log();
console.log("--- Single card pull ---");
console.log(barnaby.interpretCard(draw("major-16", "reversed", "single")));
console.log();
console.log("--- Past / Present / Future ---");
console.log(barnaby.interpretSpread(threeCard));
console.log();
console.log("--- Celtic Cross (all ten positions) ---");
console.log(barnaby.interpretSpread(celticCross));

console.log(`\n=== ${pippin.name} ===`);
console.log(pippin.tagline);
console.log();
console.log("--- Single card pull ---");
console.log(pippin.interpretCard(draw("major-16", "reversed", "single")));
console.log();
console.log("--- Past / Present / Future ---");
console.log(pippin.interpretSpread(threeCard));
console.log();
console.log("--- Celtic Cross (all ten positions) ---");
console.log(pippin.interpretSpread(celticCross));
