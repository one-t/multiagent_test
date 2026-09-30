/** Shared types for the readers panel: cards, draws, and the reader persona contract. */

export type Suit = "wands" | "cups" | "swords" | "pentacles";
export type Arcana = "major" | "minor";
export type Orientation = "upright" | "reversed";

export interface CardId {
  /** Stable machine key, e.g. "major-0" or "wands-ace". */
  key: string;
  name: string;
  arcana: Arcana;
  suit?: Suit;
  /** 0-21 for major arcana; "ace" | 2-10 | "page" | "knight" | "queen" | "king" for minor. */
  rank?: number | string;
}

/**
 * Positions a reader must be able to speak to. Covers a single-card pull,
 * the classic three-card past/present/future spread, and all ten Celtic
 * Cross slots, so any reader in the panel can be dropped into any of the
 * three standard spreads without extra wiring.
 */
export type SpreadPosition =
  | "single"
  | "past"
  | "present"
  | "future"
  | "heart"
  | "challenge"
  | "foundation"
  | "recentPast"
  | "crown"
  | "nearFuture"
  | "attitude"
  | "environment"
  | "hopesFears"
  | "outcome";

export interface CardDraw {
  card: CardId;
  orientation: Orientation;
  position: SpreadPosition;
}

export interface ReaderPersona {
  id: string;
  name: string;
  tagline: string;
  backstory: string;
  voiceGuide: string;
  /** Interpret a single card in a single position. */
  interpretCard(draw: CardDraw): string;
  /** Interpret a full spread, in reading order, with an opener and a sign-off. */
  interpretSpread(draws: CardDraw[]): string;
}
