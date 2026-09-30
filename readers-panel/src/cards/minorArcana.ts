import type { CardId, Suit } from "../types";

const SUITS: { suit: Suit; label: string }[] = [
  { suit: "wands", label: "Wands" },
  { suit: "cups", label: "Cups" },
  { suit: "swords", label: "Swords" },
  { suit: "pentacles", label: "Pentacles" },
];

const RANKS: { rank: number | string; label: string }[] = [
  { rank: "ace", label: "Ace" },
  { rank: 2, label: "Two" },
  { rank: 3, label: "Three" },
  { rank: 4, label: "Four" },
  { rank: 5, label: "Five" },
  { rank: 6, label: "Six" },
  { rank: 7, label: "Seven" },
  { rank: 8, label: "Eight" },
  { rank: 9, label: "Nine" },
  { rank: 10, label: "Ten" },
  { rank: "page", label: "Page" },
  { rank: "knight", label: "Knight" },
  { rank: "queen", label: "Queen" },
  { rank: "king", label: "King" },
];

export const MINOR_ARCANA: CardId[] = SUITS.flatMap(({ suit, label: suitLabel }) =>
  RANKS.map(({ rank, label: rankLabel }) => ({
    key: `${suit}-${rank}`,
    name: `${rankLabel} of ${suitLabel}`,
    arcana: "minor" as const,
    suit,
    rank,
  })),
);
