import type { CardId } from "../types";
import { MAJOR_ARCANA } from "./majorArcana";
import { MINOR_ARCANA } from "./minorArcana";

export const ALL_CARDS: CardId[] = [...MAJOR_ARCANA, ...MINOR_ARCANA];

export const CARD_BY_KEY: Record<string, CardId> = Object.fromEntries(
  ALL_CARDS.map((card) => [card.key, card]),
);

export { MAJOR_ARCANA } from "./majorArcana";
export { MINOR_ARCANA } from "./minorArcana";
