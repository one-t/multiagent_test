"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POSITION_FRAMES = void 0;
exports.getPositionFrame = getPositionFrame;
/**
 * Pippin reacts to each position with distinct body language and sound cues.
 */
exports.POSITION_FRAMES = {
    single: "*Mrrrrp?* [sniffs card intently, then pats it twice with a white front paw]:",
    past: "*Mrooo-o-o...* [looks back over shoulder, tail flicking low against the rug]:",
    present: "*Prrrt!* [steps directly onto the center card, sitting down firmly on your knuckles]:",
    future: "*Ek-ek-ek-ek!* [stares unblinking at the ceiling corner with whiskers vibrating]:",
    heart: "*PURRRRR-chunk-PURRRRR* [presses warm wet nose directly against your cheek]:",
    challenge: "*HISSSSSS-k-k-k!* [ears flatten instantly into airplane mode, spine arched high]:",
    foundation: "*Mmrrph...* [burrows nose deep under the corner of the velvet cloth, dead weight]:",
    recentPast: "*Chirp!* [grooms left shoulder thoughtfully, then bites back toenail with a sharp click]:",
    crown: "*ME-E-E-OWWW!* [stands on hind legs and stretches front paws all the way up the wall]:",
    nearFuture: "*Mew?* [ears swivel forward like radar dishes, tail tip giving two sharp twitches]:",
    attitude: "*Mrrrgh...* [stares into your eyes while slowly pushing a pen toward the table edge]:",
    environment: "*YOWWWW-whine* [head darts left and right as heavy footsteps pass in the hallway]:",
    hopesFears: "*Mrrp... prrr... hiss?* [saucer pupils dilate until eyes are pure black voids]:",
    outcome: "*Prrr-rowww!* [spins three circles, curls into a tight cinnamon bun, and tucks nose under tail]:",
};
function getPositionFrame(position) {
    return exports.POSITION_FRAMES[position] || `*Mrrrp:* [taps ${position} with paw]:`;
}
