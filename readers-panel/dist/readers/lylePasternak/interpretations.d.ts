import type { Orientation } from "../../types";
export interface CardVoiceLines {
    upright: string;
    reversed: string;
}
/**
 * Lyle's raw read on every one of the 78 cards, upright and reversed.
 * Keyed to match CardId.key from the panel deck. Position framing is
 * layered on separately in positions.ts. Text matches js/readers/lyle-lines.js.
 */
export declare const INTERPRETATIONS: Record<string, CardVoiceLines>;
export declare function getCardLine(cardKey: string, orientation: Orientation): string;
