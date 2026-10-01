import { deck, deckById } from "../../deck.js";
import { draw } from "../../draw.js";
import { dossiers } from "./dossiers/index.js";
import { persona } from "./persona.js";
import { closeSheet, compose, openSheet, spread } from "./positions.js";

/** One plate in three slips. A house rule, not a law of the cards. */
export const REVERSAL_RATE = 1 / 3;

function seatOf(position) {
  if (typeof position === "string") {
    const found = spread.positions.find((item) => item.id === position);
    if (!found) throw new Error(`Cassian has no seat called ${position}.`);
    return found;
  }
  if (!position?.id || !spread.positions.some((item) => item.id === position.id)) {
    throw new Error(`Cassian has no seat called ${position?.id ?? "(blank)"}.`);
  }
  return position;
}

/**
 * Read one card in one seat.
 * The card supplies the picture, the cost, and the stamp.
 * The seat supplies the grammar: question, present, interference, margin, past, next, outcome.
 */
export function interpret(card, position, reversed = false) {
  const seat = seatOf(position);
  const known = deckById.get(card?.id);
  if (!known) throw new Error(`Cassian does not keep ${card?.id ?? "that card"} in the case.`);

  const entry = reversed ? dossiers[known.id].reversed : dossiers[known.id].upright;
  const spoken = compose(seat, entry);
  const name = reversed ? `${known.name}, printed upside down.` : `${known.name}.`;

  return {
    readerId: persona.id,
    cardId: known.id,
    cardName: known.name,
    positionId: seat.id,
    positionName: seat.name,
    reversed: Boolean(reversed),
    headline: `${seat.name} — ${known.name}${reversed ? ", slipped" : ""}`,
    body: `${name} ${spoken} Stamp: ${entry.stamp}`,
    stamp: entry.stamp,
    tell: entry.tell,
  };
}

export function read(question = "", random = Math.random) {
  const dealt = draw(spread, deck, random, REVERSAL_RATE);
  const entries = dealt.map(({ position, card, reversed }) => interpret(card, position, reversed));
  return {
    readerId: persona.id,
    spreadId: spread.id,
    question: String(question ?? "").trim(),
    opening: openSheet(String(question ?? "")),
    entries,
    closing: closeSheet(entries),
  };
}

export const cassianVetch = {
  ...persona,
  spread,
  reversalRate: REVERSAL_RATE,
  interpret,
  read,
};
