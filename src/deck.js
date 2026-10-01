/** The traditional seventy-eight, named in the Rider-Waite-Smith order. Facts only — each reader brings the meanings. */

const MAJORS = [
  ["fool", "The Fool", "0"],
  ["magician", "The Magician", "I"],
  ["high-priestess", "The High Priestess", "II"],
  ["empress", "The Empress", "III"],
  ["emperor", "The Emperor", "IV"],
  ["hierophant", "The Hierophant", "V"],
  ["lovers", "The Lovers", "VI"],
  ["chariot", "The Chariot", "VII"],
  ["strength", "Strength", "VIII"],
  ["hermit", "The Hermit", "IX"],
  ["wheel-of-fortune", "Wheel of Fortune", "X"],
  ["justice", "Justice", "XI"],
  ["hanged-man", "The Hanged Man", "XII"],
  ["death", "Death", "XIII"],
  ["temperance", "Temperance", "XIV"],
  ["devil", "The Devil", "XV"],
  ["tower", "The Tower", "XVI"],
  ["star", "The Star", "XVII"],
  ["moon", "The Moon", "XVIII"],
  ["sun", "The Sun", "XIX"],
  ["judgement", "Judgement", "XX"],
  ["world", "The World", "XXI"],
];

const SUITS = [
  ["wands", "Wands"],
  ["cups", "Cups"],
  ["swords", "Swords"],
  ["pentacles", "Pentacles"],
];

const RANKS = [
  ["ace", "Ace", "A"],
  ["two", "Two", "2"],
  ["three", "Three", "3"],
  ["four", "Four", "4"],
  ["five", "Five", "5"],
  ["six", "Six", "6"],
  ["seven", "Seven", "7"],
  ["eight", "Eight", "8"],
  ["nine", "Nine", "9"],
  ["ten", "Ten", "10"],
  ["page", "Page", "P"],
  ["knight", "Knight", "Kn"],
  ["queen", "Queen", "Q"],
  ["king", "King", "K"],
];

function major(id, name, numeral) {
  return { id, name, numeral, arcana: "major", suit: null, rank: null };
}

function minor(suitId, suitName, rankId, rankName, numeral) {
  return {
    id: `${rankId}-of-${suitId}`,
    name: `${rankName} of ${suitName}`,
    numeral,
    arcana: "minor",
    suit: suitId,
    rank: rankId,
  };
}

export const deck = [
  ...MAJORS.map(([id, name, numeral]) => major(id, name, numeral)),
  ...SUITS.flatMap(([suitId, suitName]) =>
    RANKS.map(([rankId, rankName, numeral]) => minor(suitId, suitName, rankId, rankName, numeral)),
  ),
];

export const deckById = new Map(deck.map((card) => [card.id, card]));

export function getCard(id) {
  const card = deckById.get(id);
  if (!card) throw new Error(`No such card: ${id}`);
  return card;
}
