"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sableMoreau = void 0;
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
        return "You climbed the stairs. One card. Do not get shy on the landing.";
    if (count === 3)
        return "Three cards. I am going to be ruder than whatever you were about to ask.";
    if (count === 10)
        return "Ten cards. A long time to stay dressed. We will manage.";
    return `${count} cards on the sheet. We take them in order, and we do not skip the wet one.`;
}
function signOff(draws) {
    const last = draws[draws.length - 1];
    const name = last.card.name;
    if (last.card.arcana === "major") {
        return `Leave the last order. It was ${name}. This one changes how you fuck, not just who.`;
    }
    if (last.card.suit === "wands")
        return `Leave the last order. It was ${name}, so you do it hot and a little too fast.`;
    if (last.card.suit === "cups")
        return `Leave the last order. It was ${name}, so you feel it while you come.`;
    if (last.card.suit === "swords")
        return `Leave the last order. It was ${name}. Say the true sentence while the act is still going.`;
    return `Leave the last order. It was ${name}. Make it physical, and make it last.`;
}
function interpretSpread(draws) {
    if (draws.length === 0) {
        return "The bed is made and you have not pulled a card. Brave. Also useless. Sit down or go back downstairs.";
    }
    return [openerFor(draws.length), "", ...draws.map((draw) => interpretCard(draw)), "", signOff(draws)].join("\n");
}
exports.sableMoreau = {
    id: persona_1.ID,
    name: persona_1.NAME,
    tagline: persona_1.TAGLINE,
    backstory: persona_1.BACKSTORY,
    voiceGuide: persona_1.VOICE_GUIDE,
    interpretCard,
    interpretSpread,
};
exports.default = exports.sableMoreau;
