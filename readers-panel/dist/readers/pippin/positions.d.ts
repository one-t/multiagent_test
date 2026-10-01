import type { SpreadPosition } from "../../types";
/**
 * Pippin reacts to each position with distinct body language and sound cues.
 */
export declare const POSITION_FRAMES: Record<SpreadPosition, string>;
export declare function getPositionFrame(position: SpreadPosition): string;
