"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lylePasternak = void 0;
const persona_1 = require("./persona");
const interpretations_1 = require("./interpretations");
const positions_1 = require("./positions");
function interpretCard(draw) {
    const frame = (0, positions_1.getPositionFrame)(draw.position);
    const line = (0, interpretations_1.getCardLine)(draw.card.key, draw.orientation);
    const resign = draw.orientation === "reversed" ? ", and it's trying to resign" : "";
    return `${frame} ${draw.card.name}${resign}. ${line}`;
}
function openerFor(count) {
    if (count <= 1)
        return "Sit down, contestant. One card. I'll try to be brief, which is a lie.";
    if (count === 3)
        return "Three cards. Past, present, and the part where you do it again.";
    if (count === 10)
        return "Ten cards. A whole personnel file. I hope you brought a sturdier chair than this one.";
    return `${count} cards on a folding table. Let's ruin them in order.`;
}
const SIGN_OFF = "That's the reading. Keep the last slip if you keep only one. The table folds at dark, and I am not your friend. Next.";
function interpretSpread(draws) {
    if (draws.length === 0) {
        return "The deck is in the Ziploc and you haven't pulled anything. Brave. Also useless. Sit down or leave the lot.";
    }
    const lines = [openerFor(draws.length), "", ...draws.map((draw) => interpretCard(draw)), "", SIGN_OFF];
    return lines.join("\n");
}
exports.lylePasternak = {
    id: persona_1.ID,
    name: persona_1.NAME,
    tagline: persona_1.TAGLINE,
    backstory: persona_1.BACKSTORY,
    voiceGuide: persona_1.VOICE_GUIDE,
    interpretCard,
    interpretSpread,
};
exports.default = exports.lylePasternak;
