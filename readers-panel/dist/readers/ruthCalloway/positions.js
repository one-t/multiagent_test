"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POSITION_FRAMES = void 0;
exports.getPositionFrame = getPositionFrame;
/**
 * How Ruth frames each spread position before she reads the card itself.
 * Every position a reader in this panel must support (see SpreadPosition)
 * gets its own line in her voice, so a card's meaning is never read the
 * same way twice depending on where it lands.
 */
exports.POSITION_FRAMES = {
    single: "Pulled one off the top, and it's talking straight at you:",
    past: "Mile marker behind you, where you're driving in from:",
    present: "Right here, right now, hands on this wheel:",
    future: "Up the road, past the next bend:",
    heart: "Smack in the middle of the dash — the heart of this haul:",
    challenge: "Laid crossways over that first card, what's riding you right now:",
    foundation: "Down in the frame, under everything, what's been holding this rig up the whole time:",
    recentPast: "Rearview mirror — what you just drove through:",
    crown: "Up over the cab, what you're aiming this whole rig toward:",
    nearFuture: "Next exit but one, coming up quick:",
    attitude: "How you're gripping the wheel right now, whether you notice it or not:",
    environment: "Traffic around you — what everybody else on this road's doing that you can't control:",
    hopesFears: "What you're half-hoping, half-dreading you'll catch in the headlights:",
    outcome: "Last mile marker on this map, far as the cards can see down the highway:",
};
function getPositionFrame(position) {
    return exports.POSITION_FRAMES[position];
}
