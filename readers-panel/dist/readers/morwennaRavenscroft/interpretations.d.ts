export interface CardVoiceLines {
    upright: string;
    reversed: string;
}
/**
 * Madame Morwenna's bespoke readings for all 78 tarot cards, upright and reversed.
 * Keyed by CardId.key to match src/cards.
 */
export declare const INTERPRETATIONS: Record<string, CardVoiceLines>;
export declare function getCardLine(key: string, orientation: "upright" | "reversed"): string;
