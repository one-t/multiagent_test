import type { SpreadPosition } from "../../types";
/**
 * How the Night Clerk frames each seat before he reads the card in it.
 * Every position the panel can deal — one card, three cards, and all ten
 * seats of the Celtic Cross — gets its own sentence, so the same card
 * does not come out of his mouth the same way twice.
 */
export declare const POSITION_FRAMES: Record<SpreadPosition, string>;
export declare function getPositionFrame(position: SpreadPosition): string;
