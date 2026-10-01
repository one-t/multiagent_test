"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.barnaby = void 0;
const persona_1 = require("./persona");
const interpretations_1 = require("./interpretations");
const positions_1 = require("./positions");
function interpretCard(draw) {
    const frame = (0, positions_1.getPositionFrame)(draw.position);
    const line = (0, interpretations_1.getCardLine)(draw.card.key, draw.orientation);
    const orientationTag = draw.orientation === "reversed" ? " (reversed)" : "";
    return `${frame} ${draw.card.name}${orientationTag}. "${line}"`;
}
function openerFor(count) {
    if (count <= 1) {
        return "Hop up on the radiator, kid. Floor's cold, but the iron is hot. Let's see what you dragged in under your whiskers.";
    }
    if (count === 3) {
        return "Three cards knocked off the table. Past fence, present porch, future alley. Tuck your paws in and listen to your elders.";
    }
    if (count === 10) {
        return "The whole nine yards of territory laid out on the rug. Ten stations from the raw chest-purr to the final sunbeam. Keep your tail still and don't twitch your whiskers till I'm done.";
    }
    return `${count} cards spread across the wool blanket. Let's sniff 'em in order, nose to tail.`;
}
const SIGN_OFF = "That's the layout, kid. Wash your face, keep your claws sharp, and remember: you're a cat. Act like it.";
function interpretSpread(draws) {
    if (draws.length === 0) {
        return "Blanket's empty and the bowl's dry. Hop up here and turn over a card, kid.";
    }
    const lines = [
        openerFor(draws.length),
        "",
        ...draws.map((draw) => interpretCard(draw)),
        "",
        SIGN_OFF,
    ];
    return lines.join("\n");
}
exports.barnaby = {
    id: persona_1.ID,
    name: persona_1.NAME,
    tagline: persona_1.TAGLINE,
    backstory: persona_1.BACKSTORY,
    voiceGuide: persona_1.VOICE_GUIDE,
    interpretCard,
    interpretSpread,
};
exports.default = exports.barnaby;
