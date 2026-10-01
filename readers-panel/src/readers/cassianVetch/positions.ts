import type { SpreadPosition } from "../../types";

/**
 * How the Night Clerk frames each seat before he reads the card in it.
 * Every position the panel can deal — one card, three cards, and all ten
 * seats of the Celtic Cross — gets its own sentence, so the same card
 * does not come out of his mouth the same way twice.
 */
export const POSITION_FRAMES: Record<SpreadPosition, string> = {
  single: "One sheet, pulled for you and held up to the grille:",
  past: "Yesterday's ink, still wet on the page you came in from:",
  present: "The sheet locked on the tympan, which is your present:",
  future: "The next pull, already inked, waiting for you:",
  heart: "The heart of the forme, the sheet this whole job locks around you:",
  challenge: "A second plate, printing over the true impression you actually set:",
  foundation: "Down in the gutter, the margin you do not bill:",
  recentPast: "Ink from the last sheet, still offsetting onto the page you are calling blank:",
  crown: "What you keep aiming the press toward, whether the copy agrees or not:",
  nearFuture: "The sheet that meets you on the next pull:",
  attitude: "How you are holding the plate, whether you have noticed your hands:",
  environment: "The room around you, everybody else's weather on your sheet:",
  hopesFears: "The line you almost cut, the hope and the flinch sharing one sentence:",
  outcome: "The receipt, if you leave the forme locked the way it is:",
};

export function getPositionFrame(position: SpreadPosition): string {
  return POSITION_FRAMES[position];
}
