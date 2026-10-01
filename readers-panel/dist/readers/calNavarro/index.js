"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calNavarro = void 0;
const persona_1 = require("./persona");
const interpretations_1 = require("./interpretations");
const positions_1 = require("./positions");
function interpretCard(draw) {
    const frame = (0, positions_1.getPositionFrame)(draw.position);
    const line = (0, interpretations_1.getCardLine)(draw.card.key, draw.orientation);
    const turned = draw.orientation === "reversed" ? " (reversed)" : "";
    return `${frame} ${draw.card.name}${turned}. ${line}`;
}
function openerFor(count) {
    if (count <= 1)
        return "Sit down. One card. I am already interested, and then I will earn it.";
    if (count === 3)
        return "Three cards. I want the answer, and I want it off your mouth.";
    if (count === 10)
        return "Ten cards. A whole night. I am not rushing my mouth.";
    return `${count} cards beside the bed. We go in order, and I am going to want all of them.`;
}
function signOff(draws) {
    const last = draws[draws.length - 1];
    const name = last.card.name;
    if (last.card.arcana === "major")
        return `${name} is last. I want the whole night, not a polite version of it.`;
    if (last.card.suit === "wands")
        return `${name} is last. You will want it fast. Let it be fast, then do it again.`;
    if (last.card.suit === "cups")
        return `${name} is last. I want to kiss you through it until you stop performing fine.`;
    if (last.card.suit === "swords")
        return `${name} is last. I want the truth more than I want to be nice, and I still want you.`;
    return `${name} is last. I want the slow version, the one that still makes sense in the morning.`;
}
function interpretSpread(draws) {
    if (draws.length === 0) {
        return "The cards are still stacked and you have not pulled one. I am looking at you anyway. Pull, or leave.";
    }
    return [openerFor(draws.length), "", ...draws.map((draw) => interpretCard(draw)), "", signOff(draws)].join("\n");
}
exports.calNavarro = {
    id: persona_1.ID,
    name: persona_1.NAME,
    tagline: persona_1.TAGLINE,
    backstory: persona_1.BACKSTORY,
    voiceGuide: persona_1.VOICE_GUIDE,
    interpretCard,
    interpretSpread,
};
exports.default = exports.calNavarro;
