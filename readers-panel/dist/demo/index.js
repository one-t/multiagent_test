"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ruthCalloway_1 = require("../readers/ruthCalloway");
const morwennaRavenscroft_1 = require("../readers/morwennaRavenscroft");
const cards_1 = require("../cards");
function draw(key, orientation, position) {
    const card = cards_1.CARD_BY_KEY[key];
    if (!card)
        throw new Error(`Unknown card key "${key}"`);
    return { card, orientation, position };
}
console.log(`=== ${ruthCalloway_1.ruthCalloway.name} ===`);
console.log(ruthCalloway_1.ruthCalloway.tagline);
console.log();
console.log("--- Single card pull ---");
console.log(ruthCalloway_1.ruthCalloway.interpretCard(draw("major-16", "reversed", "single")));
console.log();
console.log("--- Past / Present / Future ---");
const threeCard = [
    draw("cups-8", "upright", "past"),
    draw("major-9", "reversed", "present"),
    draw("major-19", "upright", "future"),
];
console.log(ruthCalloway_1.ruthCalloway.interpretSpread(threeCard));
console.log();
console.log(`\n=== ${morwennaRavenscroft_1.morwennaRavenscroft.name} ===`);
console.log(morwennaRavenscroft_1.morwennaRavenscroft.tagline);
console.log();
console.log("--- Single card pull ---");
console.log(morwennaRavenscroft_1.morwennaRavenscroft.interpretCard(draw("major-16", "reversed", "single")));
console.log();
console.log("--- Past / Present / Future ---");
console.log(morwennaRavenscroft_1.morwennaRavenscroft.interpretSpread(threeCard));
console.log();
console.log("--- Celtic Cross (all ten positions) ---");
const celticCross = [
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
console.log(morwennaRavenscroft_1.morwennaRavenscroft.interpretSpread(celticCross));
