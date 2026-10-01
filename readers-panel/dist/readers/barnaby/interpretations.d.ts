export interface CardVoiceLines {
    upright: string;
    reversed: string;
}
/**
 * Old Barnaby Clawson's bespoke readings for all 78 tarot cards, upright and reversed.
 * Spoken to the querent strictly as a fellow cat, ending with a signature Rule.
 */
export declare const INTERPRETATIONS: Record<string, CardVoiceLines>;
export declare function getCardLine(key: string, orientation: "upright" | "reversed"): string;
