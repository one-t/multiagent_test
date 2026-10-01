import type { SpreadPosition } from "../../types";
/** How Sable frames each seat before she gives the order. */
export declare const POSITION_FRAMES: Record<SpreadPosition, string>;
export declare function getPositionFrame(position: SpreadPosition): string;
