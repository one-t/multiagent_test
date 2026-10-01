import type { CardDraw, ReaderPersona } from "../../types";
import { ID, NAME, TAGLINE, BACKSTORY, VOICE_GUIDE } from "./persona";
import { getCardLine } from "./interpretations";
import { getPositionFrame } from "./positions";

function interpretCard(draw: CardDraw): string {
  const frame = getPositionFrame(draw.position);
  const line = getCardLine(draw.card.key, draw.orientation);
  const turned = draw.orientation === "reversed" ? " (reversed)" : "";
  return `${frame} ${draw.card.name}${turned}. ${line}`;
}

function openerFor(count: number): string {
  if (count <= 1) return "Sit down. One card. I am already interested, and then I will earn it.";
  if (count === 3) return "Three cards. I want the answer, and I want it off your mouth.";
  if (count === 10) return "Ten cards. A whole night. I am not rushing my mouth.";
  return `${count} cards beside the bed. We go in order, and I am going to want all of them.`;
}

function signOff(draws: CardDraw[]): string {
  const last = draws[draws.length - 1];
  const name = last.card.name;
  if (last.card.arcana === "major") return `${name} is last. I want the whole night, not a polite version of it.`;
  if (last.card.suit === "wands") return `${name} is last. You will want it fast. Let it be fast, then do it again.`;
  if (last.card.suit === "cups") return `${name} is last. I want to kiss you through it until you stop performing fine.`;
  if (last.card.suit === "swords") return `${name} is last. I want the truth more than I want to be nice, and I still want you.`;
  return `${name} is last. I want the slow version, the one that still makes sense in the morning.`;
}

function interpretSpread(draws: CardDraw[]): string {
  if (draws.length === 0) {
    return "The cards are still stacked and you have not pulled one. I am looking at you anyway. Pull, or leave.";
  }
  return [openerFor(draws.length), "", ...draws.map((draw) => interpretCard(draw)), "", signOff(draws)].join("\n");
}

export const calNavarro: ReaderPersona = {
  id: ID,
  name: NAME,
  tagline: TAGLINE,
  backstory: BACKSTORY,
  voiceGuide: VOICE_GUIDE,
  interpretCard,
  interpretSpread,
};

export default calNavarro;
