import type { SpreadPosition } from "../../types";
/** How Cal frames each seat before he says what he wants. */
export declare const POSITION_FRAMES: Record<SpreadPosition, string>;
export declare function getPositionFrame(position: SpreadPosition): string;
