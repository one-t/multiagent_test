import type { SpreadPosition } from "../../types";
/**
 * How Madame Morwenna frames each spread position before delivering the card's reading.
 * Positions are treated as stations along the subterranean descent.
 */
export declare const POSITION_FRAMES: Record<SpreadPosition, string>;
export declare function getPositionFrame(position: SpreadPosition): string;
