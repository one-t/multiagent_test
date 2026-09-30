"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POSITION_FRAMES = void 0;
exports.getPositionFrame = getPositionFrame;
/**
 * How Madame Morwenna frames each spread position before delivering the card's reading.
 * Positions are treated as stations along the subterranean descent.
 */
exports.POSITION_FRAMES = {
    single: "One card pulled from the black velvet — the sole lantern swinging in the dark:",
    past: "The footprints receding in the wet peat — the season that just closed its account in your ledger:",
    present: "The tallow candle burning before us right now — the exact station of your feet:",
    future: "The footsteps approaching on the stone stairs — what is taking shape in the damp air:",
    heart: "The Central Stake — the raw nerve beating at the marrow of your inquiry:",
    challenge: "The Thorn in the Sandal — laid crosswise upon you, the grindstone sent to sharpen your edge:",
    foundation: "Where the Water Table Lies — buried deep in the cellar floor beneath pride and memory:",
    recentPast: "The Echoing Shutter — the door that swung shut behind you only yesterday:",
    crown: "The Highest Gargoyle — what your conscious intellect claims it aspires to in the daylight:",
    nearFuture: "The Next Bend in the Close — what meets you before the moon changes her face:",
    attitude: "The Mirror in the Dim Corner — how your own posture and shadow are shaping this theater:",
    environment: "The Whispers in the Alley — the external weather, rivalries, and house-winds around you:",
    hopesFears: "The Raven on the Lintel — where secret appetite and secret dread share the same perch:",
    outcome: "The Seventh Bell — the final tally when the fog clears and all accounts are settled:",
};
function getPositionFrame(position) {
    return exports.POSITION_FRAMES[position] || `In the station of ${position}:`;
}
