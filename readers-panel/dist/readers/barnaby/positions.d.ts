import type { SpreadPosition } from "../../types";
/**
 * Barnaby frames each position as a station in a cat's daily territory.
 */
export declare const POSITION_FRAMES: Record<SpreadPosition, string>;
export declare function getPositionFrame(position: SpreadPosition): string;
