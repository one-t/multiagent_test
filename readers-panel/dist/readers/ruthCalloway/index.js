"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ruthCalloway = void 0;
const persona_1 = require("./persona");
const interpretations_1 = require("./interpretations");
const positions_1 = require("./positions");
function interpretCard(draw) {
    const frame = (0, positions_1.getPositionFrame)(draw.position);
    const line = (0, interpretations_1.getCardLine)(draw.card.key, draw.orientation);
    const orientationTag = draw.orientation === "reversed" ? " (reversed)" : "";
    return `${frame} ${draw.card.name}${orientationTag}. ${line}`;
}
function openerFor(count) {
    if (count <= 1)
        return "Alright, hon. Let's see what's on the map.";
    if (count === 3)
        return "Three cards, three mile markers. Let's drive it front to back.";
    if (count === 10)
        return "Big spread. Settle in — this is the whole route, not just the next exit.";
    return `${count} cards on the dash. Let's take 'em in order.`;
}
const SIGN_OFF = "That's what's coming through the static from here, hon. Rest of the drive's on you.";
function interpretSpread(draws) {
    if (draws.length === 0) {
        return "Deck's shuffled and nothing's turned over yet. Pull a card, hon.";
    }
    const lines = [openerFor(draws.length), "", ...draws.map((draw) => interpretCard(draw)), "", SIGN_OFF];
    return lines.join("\n");
}
exports.ruthCalloway = {
    id: persona_1.ID,
    name: persona_1.NAME,
    tagline: persona_1.TAGLINE,
    backstory: persona_1.BACKSTORY,
    voiceGuide: persona_1.VOICE_GUIDE,
    interpretCard,
    interpretSpread,
};
exports.default = exports.ruthCalloway;
