import type { Orientation } from "../../types";
export interface CardVoiceLines {
    upright: string;
    reversed: string;
}
/**
 * Ruth's raw read on every one of the 78 cards, upright and reversed.
 * Keyed to match CardId.key from src/cards. This is the card's meaning in
 * her own words, independent of where it falls in a spread — position
 * framing is layered on separately in positions.ts.
 */
export declare const INTERPRETATIONS: Record<string, CardVoiceLines>;
export declare function getCardLine(cardKey: string, orientation: Orientation): string;
