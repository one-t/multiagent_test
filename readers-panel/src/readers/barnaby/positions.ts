import type { SpreadPosition } from "../../types";

/**
 * Barnaby frames each position as a station in a cat's daily territory.
 */
export const POSITION_FRAMES: Record<SpreadPosition, string> = {
  single:
    "Batted this one off the edge of the dresser for you. Sniff it close, kid:",
  past:
    "The scent mark you left three fences back — the territory you're walking in from:",
  present:
    "Right where your four paws are planted right now, whiskers twitching:",
  future:
    "What's rustling behind the pantry door, waiting for you to turn the corner:",
  heart:
    "Right in the chest, where the motor purrs when it's safe or stalls when it ain't:",
  challenge:
    "The vacuum cleaner roaring in the hallway — the thing making your back ridge spike up:",
  foundation:
    "The warm iron radiator under the fleece blanket — what's kept your belly warm this whole time:",
  recentPast:
    "The moth you chased under the sofa yesterday — dust on your whiskers, but the hunt's over:",
  crown:
    "The very top of the kitchen refrigerator — what you're staring up at, sizing up the leap:",
  nearFuture:
    "The click of the can opener two rooms over — it's coming down the hall fast:",
  attitude:
    "How you're holding your tail and ears right now, whether you're honest about it or not:",
  environment:
    "The rest of the house — dogs barking through the screen, two-legs stomping, drafts under doors:",
  hopesFears:
    "What makes your paws twitch in your sleep — the open window ledge versus the vet's plastic box:",
  outcome:
    "Where you curl your tail around your nose when the house goes dark at last:",
};

export function getPositionFrame(position: SpreadPosition): string {
  return POSITION_FRAMES[position] || `In the station of ${position}:`;
}
