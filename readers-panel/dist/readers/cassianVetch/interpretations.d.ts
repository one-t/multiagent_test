import type { Orientation } from "../../types";
export interface CardVoiceLines {
    upright: string;
    reversed: string;
}
/**
 * Cassian's read on every one of the 78 cards, upright and reversed.
 * The seat he finds the card in is applied separately, in positions.ts.
 */
export declare const INTERPRETATIONS: Record<string, CardVoiceLines>;
export declare function getCardLine(cardKey: string, orientation: Orientation): string;
