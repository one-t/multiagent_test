import type { Orientation } from "../../types";
export interface CardVoiceLines {
    upright: string;
    reversed: string;
}
/**
 * Sable Moreau's read on every one of the 78 cards, upright and reversed.
 * Keyed to match CardId.key from the panel deck. The text matches the altar.
 */
export declare const INTERPRETATIONS: Record<string, CardVoiceLines>;
export declare function getCardLine(cardKey: string, orientation: Orientation): string;
