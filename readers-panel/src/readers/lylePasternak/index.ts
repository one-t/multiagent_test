import type { CardDraw, ReaderPersona } from "../../types";
import { ID, NAME, TAGLINE, BACKSTORY, VOICE_GUIDE } from "./persona";
import { getCardLine } from "./interpretations";
import { getPositionFrame } from "./positions";

function interpretCard(draw: CardDraw): string {
  const frame = getPositionFrame(draw.position);
  const line = getCardLine(draw.card.key, draw.orientation);
  const resign = draw.orientation === "reversed" ? ", and it's trying to resign" : "";
  return `${frame} ${draw.card.name}${resign}. ${line}`;
}

function openerFor(count: number): string {
  if (count <= 1) return "Sit down, contestant. One card. I'll try to be brief, which is a lie.";
  if (count === 3) return "Three cards. Past, present, and the part where you do it again.";
  if (count === 10)
    return "Ten cards. A whole personnel file. I hope you brought a sturdier chair than this one.";
  return `${count} cards on a folding table. Let's ruin them in order.`;
}

const SIGN_OFF =
  "That's the reading. Keep the last slip if you keep only one. The table folds at dark, and I am not your friend. Next.";

function interpretSpread(draws: CardDraw[]): string {
  if (draws.length === 0) {
    return "The deck is in the Ziploc and you haven't pulled anything. Brave. Also useless. Sit down or leave the lot.";
  }
  const lines = [openerFor(draws.length), "", ...draws.map((draw) => interpretCard(draw)), "", SIGN_OFF];
  return lines.join("\n");
}

export const lylePasternak: ReaderPersona = {
  id: ID,
  name: NAME,
  tagline: TAGLINE,
  backstory: BACKSTORY,
  voiceGuide: VOICE_GUIDE,
  interpretCard,
  interpretSpread,
};

export default lylePasternak;
