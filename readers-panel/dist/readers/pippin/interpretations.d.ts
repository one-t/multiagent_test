export interface CardVoiceLines {
    upright: string;
    reversed: string;
}
/**
 * Pippin's bespoke onomatopoeic reactions for all 78 tarot cards, upright and reversed.
 * Expressed through feline vocalizations, bracketed physical behaviors, and signature ending cues.
 */
export declare const INTERPRETATIONS: Record<string, CardVoiceLines>;
export declare function getCardLine(key: string, orientation: "upright" | "reversed"): string;
