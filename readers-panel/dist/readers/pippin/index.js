"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pippin = void 0;
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
        return "*Mrrrrp?* [hops onto the green baize table, circles your wrist twice, and butts warm forehead into your palm]:";
    }
    if (count === 3) {
        return "*Chirp! Prrr-rrt!* [kneads the green velvet cloth three times with both paws, then sits down firmly]:";
    }
    if (count === 10) {
        return "*MEOW-purrrr-chunk!* [ten cards spread out; eyes widen into huge black saucers, tail swishing with intense feline concentration]:";
    }
    return `*Mrrr-rowww!* [surveys ${count} cards on the cloth, whiskers vibrating with anticipation]:`;
}
const SIGN_OFF = "*PURRRRRRRRRRRRRRRRRRRRRR* [head-butts the cards, steps directly onto your keyboard, and falls asleep across your hand].";
function interpretSpread(draws) {
    if (draws.length === 0) {
        return "*Mrow?* [bats empty velvet cloth with paw, looking for something to knock onto floor].";
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
exports.pippin = {
    id: persona_1.ID,
    name: persona_1.NAME,
    tagline: persona_1.TAGLINE,
    backstory: persona_1.BACKSTORY,
    voiceGuide: persona_1.VOICE_GUIDE,
    interpretCard,
    interpretSpread,
};
exports.default = exports.pippin;
