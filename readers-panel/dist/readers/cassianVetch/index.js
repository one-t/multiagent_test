"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cassianVetch = void 0;
const interpretations_1 = require("./interpretations");
const persona_1 = require("./persona");
const positions_1 = require("./positions");
function interpretCard(draw) {
    const frame = (0, positions_1.getPositionFrame)(draw.position);
    const line = (0, interpretations_1.getCardLine)(draw.card.key, draw.orientation);
    const orientationTag = draw.orientation === "reversed" ? ", printed upside down" : "";
    return `${frame} ${draw.card.name}${orientationTag}. ${line}`;
}
function openerFor(count) {
    if (count <= 1) {
        return "Window's open. One sheet. I'll read it the way it came off the press.";
    }
    if (count === 3) {
        return "Three sheets. Where you were, where the ink is wet, and where this is headed if nobody resets the lockup.";
    }
    if (count === 10) {
        return "The whole forme. Ten seats, from the heart of the sheet to the receipt. Stay with me. I don't skip the ugly ones.";
    }
    return `${count} sheets on the stone. I'll take them in the order they were locked.`;
}
const SIGN_OFF = "That's the sheet. Keep the stamp on the last card if you keep only one. The window stays open another minute, then I have a condolence card to lock up.";
function interpretSpread(draws) {
    if (draws.length === 0) {
        return "Nothing on the tympan yet. Slide a slip under the grille, or leave it blank and I'll pull the sheet you are already holding.";
    }
    const lines = [openerFor(draws.length), "", ...draws.map((draw) => interpretCard(draw)), "", SIGN_OFF];
    return lines.join("\n");
}
exports.cassianVetch = {
    id: persona_1.ID,
    name: persona_1.NAME,
    tagline: persona_1.TAGLINE,
    backstory: persona_1.BACKSTORY,
    voiceGuide: persona_1.VOICE_GUIDE,
    interpretCard,
    interpretSpread,
};
exports.default = exports.cassianVetch;
