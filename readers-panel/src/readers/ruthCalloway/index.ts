import type { CardDraw, ReaderPersona } from "../../types";
import { ID, NAME, TAGLINE, BACKSTORY, VOICE_GUIDE } from "./persona";
import { getCardLine } from "./interpretations";
import { getPositionFrame } from "./positions";

function interpretCard(draw: CardDraw): string {
  const frame = getPositionFrame(draw.position);
  const line = getCardLine(draw.card.key, draw.orientation);
  const orientationTag = draw.orientation === "reversed" ? " (reversed)" : "";
  return `${frame} ${draw.card.name}${orientationTag}. ${line}`;
}

function openerFor(count: number): string {
  if (count <= 1) return "Alright, hon. Let's see what's on the map.";
  if (count === 3) return "Three cards, three mile markers. Let's drive it front to back.";
  if (count === 10)
    return "Big spread. Settle in — this is the whole route, not just the next exit.";
  return `${count} cards on the dash. Let's take 'em in order.`;
}

const SIGN_OFF =
  "That's what's coming through the static from here, hon. Rest of the drive's on you.";

function interpretSpread(draws: CardDraw[]): string {
  if (draws.length === 0) {
    return "Deck's shuffled and nothing's turned over yet. Pull a card, hon.";
  }
  const lines = [openerFor(draws.length), "", ...draws.map((draw) => interpretCard(draw)), "", SIGN_OFF];
  return lines.join("\n");
}

export const ruthCalloway: ReaderPersona = {
  id: ID,
  name: NAME,
  tagline: TAGLINE,
  backstory: BACKSTORY,
  voiceGuide: VOICE_GUIDE,
  interpretCard,
  interpretSpread,
};

export default ruthCalloway;
