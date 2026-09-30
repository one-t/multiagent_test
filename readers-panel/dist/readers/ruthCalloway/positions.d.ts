import type { SpreadPosition } from "../../types";
/**
 * How Ruth frames each spread position before she reads the card itself.
 * Every position a reader in this panel must support (see SpreadPosition)
 * gets its own line in her voice, so a card's meaning is never read the
 * same way twice depending on where it lands.
 */
export declare const POSITION_FRAMES: Record<SpreadPosition, string>;
export declare function getPositionFrame(position: SpreadPosition): string;
