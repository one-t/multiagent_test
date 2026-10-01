"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POSITION_FRAMES = void 0;
exports.getPositionFrame = getPositionFrame;
/** How Sable frames each seat before she gives the order. */
exports.POSITION_FRAMES = {
    single: "One card, said the way you would say it with your clothes off:",
    past: "What you already let someone do, still on your mouth:",
    present: "Right now, while you pretend this is about anything but want:",
    future: "Where your body goes if you stop negotiating with it:",
    heart: "The thing you actually want, under the polite sentence:",
    challenge: "What is crossing your legs and calling itself a problem:",
    foundation: "Under the question, the old fuck you keep returning to:",
    recentPast: "What just happened, still slick, still yours:",
    crown: "The fuck you are aiming at and refusing to ask for:",
    nearFuture: "What is about to get its hands on you:",
    attitude: "How you are holding your own want. The grip is visible:",
    environment: "The other people in this, and what they do to your attention:",
    hopesFears: "The want and the flinch, sharing the sheet:",
    outcome: "Where you end up if you come the way you always come:",
};
function getPositionFrame(position) {
    return exports.POSITION_FRAMES[position];
}
