import { ruthCalloway } from "../readers/ruthCalloway";
import { morwennaRavenscroft } from "../readers/morwennaRavenscroft";
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

console.log("--- Past / Present / Future ---");
const threeCard: CardDraw[] = [
  draw("cups-8", "upright", "past"),
  draw("major-9", "reversed", "present"),
  draw("major-19", "upright", "future"),
];
console.log(ruthCalloway.interpretSpread(threeCard));
console.log();

console.log(`\n=== ${morwennaRavenscroft.name} ===`);
console.log(morwennaRavenscroft.tagline);
console.log();

console.log("--- Single card pull ---");
console.log(morwennaRavenscroft.interpretCard(draw("major-16", "reversed", "single")));
console.log();

console.log("--- Past / Present / Future ---");
console.log(morwennaRavenscroft.interpretSpread(threeCard));
console.log();

console.log("--- Celtic Cross (all ten positions) ---");
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
console.log(morwennaRavenscroft.interpretSpread(celticCross));
