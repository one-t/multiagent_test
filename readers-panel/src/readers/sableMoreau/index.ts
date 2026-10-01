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
  if (count <= 1) return "You climbed the stairs. One card. Do not get shy on the landing.";
  if (count === 3) return "Three cards. I am going to be ruder than whatever you were about to ask.";
  if (count === 10) return "Ten cards. A long time to stay dressed. We will manage.";
  return `${count} cards on the sheet. We take them in order, and we do not skip the wet one.`;
}

function signOff(draws: CardDraw[]): string {
  const last = draws[draws.length - 1];
  const name = last.card.name;
  if (last.card.arcana === "major") {
    return `Leave the last order. It was ${name}. This one changes how you fuck, not just who.`;
  }
  if (last.card.suit === "wands") return `Leave the last order. It was ${name}, so you do it hot and a little too fast.`;
  if (last.card.suit === "cups") return `Leave the last order. It was ${name}, so you feel it while you come.`;
  if (last.card.suit === "swords") return `Leave the last order. It was ${name}. Say the true sentence while the act is still going.`;
  return `Leave the last order. It was ${name}. Make it physical, and make it last.`;
}

function interpretSpread(draws: CardDraw[]): string {
  if (draws.length === 0) {
    return "The bed is made and you have not pulled a card. Brave. Also useless. Sit down or go back downstairs.";
  }
  return [openerFor(draws.length), "", ...draws.map((draw) => interpretCard(draw)), "", signOff(draws)].join("\n");
}

export const sableMoreau: ReaderPersona = {
  id: ID,
  name: NAME,
  tagline: TAGLINE,
  backstory: BACKSTORY,
  voiceGuide: VOICE_GUIDE,
  interpretCard,
  interpretSpread,
};

export default sableMoreau;
