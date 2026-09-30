"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MINOR_ARCANA = void 0;
const SUITS = [
    { suit: "wands", label: "Wands" },
    { suit: "cups", label: "Cups" },
    { suit: "swords", label: "Swords" },
    { suit: "pentacles", label: "Pentacles" },
];
const RANKS = [
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
exports.MINOR_ARCANA = SUITS.flatMap(({ suit, label: suitLabel }) => RANKS.map(({ rank, label: rankLabel }) => ({
    key: `${suit}-${rank}`,
    name: `${rankLabel} of ${suitLabel}`,
    arcana: "minor",
    suit,
    rank,
})));
