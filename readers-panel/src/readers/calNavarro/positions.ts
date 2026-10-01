import type { SpreadPosition } from "../../types";

/** How Cal frames each seat before he says what he wants. */
export const POSITION_FRAMES: Record<SpreadPosition, string> = {
  single: "One card. I am already leaning in. Here is what it makes me want:",
  past: "The sex you already had, still on you from the way you sat:",
  present: "Right now, in this room, with me looking at your mouth:",
  future: "What I would do next if you stayed:",
  heart: "The center of it, where I would put my mouth and not rush:",
  challenge: "The thing lying across your want. I still want you through it:",
  foundation: "What this grew out of, some earlier night your body remembers:",
  recentPast: "What you just did, and I am jealous of whoever got it:",
  crown: "The thing you are reaching for. I would like to be it:",
  nearFuture: "Coming toward you. I want to meet it with my hands already busy:",
  attitude: "How you are sitting in the want. I would like to ruin the posture:",
  environment: "Everyone else around this, and the one I would steal you from:",
  hopesFears: "What you hope I do, and what you are afraid you will beg for:",
  outcome: "How this ends if you let me finish the way the card points:",
};

export function getPositionFrame(position: SpreadPosition): string {
  return POSITION_FRAMES[position];
}
