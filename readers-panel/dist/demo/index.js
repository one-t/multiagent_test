"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cassianVetch_1 = require("../readers/cassianVetch");
const morwennaRavenscroft_1 = require("../readers/morwennaRavenscroft");
const ruthCalloway_1 = require("../readers/ruthCalloway");
const barnaby_1 = require("../readers/barnaby");
const pippin_1 = require("../readers/pippin");
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
console.log(`\n=== ${morwennaRavenscroft_1.morwennaRavenscroft.name} ===`);
console.log(morwennaRavenscroft_1.morwennaRavenscroft.tagline);
console.log();
console.log("--- Single card pull ---");
console.log(morwennaRavenscroft_1.morwennaRavenscroft.interpretCard(draw("major-16", "reversed", "single")));
console.log();
console.log(`\n=== ${cassianVetch_1.cassianVetch.name} ===`);
console.log(cassianVetch_1.cassianVetch.tagline);
console.log();
console.log("--- Single card pull ---");
console.log(cassianVetch_1.cassianVetch.interpretCard(draw("major-0", "upright", "single")));
console.log();
const threeCard = [
    draw("cups-8", "upright", "past"),
    draw("major-9", "reversed", "present"),
    draw("major-19", "upright", "future"),
];
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
console.log(`\n=== ${barnaby_1.barnaby.name} ===`);
console.log(barnaby_1.barnaby.tagline);
console.log();
console.log("--- Single card pull ---");
console.log(barnaby_1.barnaby.interpretCard(draw("major-16", "reversed", "single")));
console.log();
console.log("--- Past / Present / Future ---");
console.log(barnaby_1.barnaby.interpretSpread(threeCard));
console.log();
console.log("--- Celtic Cross (all ten positions) ---");
console.log(barnaby_1.barnaby.interpretSpread(celticCross));
console.log(`\n=== ${pippin_1.pippin.name} ===`);
console.log(pippin_1.pippin.tagline);
console.log();
console.log("--- Single card pull ---");
console.log(pippin_1.pippin.interpretCard(draw("major-16", "reversed", "single")));
console.log();
console.log("--- Past / Present / Future ---");
console.log(pippin_1.pippin.interpretSpread(threeCard));
console.log();
console.log("--- Celtic Cross (all ten positions) ---");
console.log(pippin_1.pippin.interpretSpread(celticCross));
