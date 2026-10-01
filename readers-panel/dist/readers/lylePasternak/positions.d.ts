import type { SpreadPosition } from "../../types";
/**
 * How Lyle frames each spread position before he insults the card.
 * Same picture, different seat, different grievance.
 */
export declare const POSITION_FRAMES: Record<SpreadPosition, string>;
export declare function getPositionFrame(position: SpreadPosition): string;
