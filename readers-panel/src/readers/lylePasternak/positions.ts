import type { SpreadPosition } from "../../types";

/**
 * How Lyle frames each spread position before he insults the card.
 * Same picture, different seat, different grievance.
 */
export const POSITION_FRAMES: Record<SpreadPosition, string> = {
  single:
    "One card, contestant. Try not to clap. The lot is full of people who clapped:",
  past: "Rear of the lot, where you parked the version of this you already lived:",
  present:
    "Right now, under the busted Circuit City sign, which is your life at this minute:",
  future: "Down the service road, if you keep driving like this:",
  heart: "The heart of the spread, the thing the rest of the cards are gossiping about:",
  challenge:
    "Laid across it, the problem you brought and then pretended was weather:",
  foundation: "Under the table, the reason this mess has legs:",
  recentPast: "What you just did, still warm, still yours:",
  crown: "The thing you're aiming at, which I have notes on:",
  nearFuture: "Coming up next, and no, you don't get to reshoot:",
  attitude: "How you're sitting in the chair. I can see it from here:",
  environment:
    "Everybody else in the lot, doing their bit to make this worse:",
  hopesFears:
    "The hope and the flinch, sharing one cigarette behind the cart return:",
  outcome: "Where this lands if you change nothing, which is your brand:",
};

export function getPositionFrame(position: SpreadPosition): string {
  return POSITION_FRAMES[position];
}
