import type { CardDraw, ReaderPersona } from "../../types";
import { getCardLine } from "./interpretations";
import { BACKSTORY, ID, NAME, TAGLINE, VOICE_GUIDE } from "./persona";
import { getPositionFrame } from "./positions";

function interpretCard(draw: CardDraw): string {
  const frame = getPositionFrame(draw.position);
  const line = getCardLine(draw.card.key, draw.orientation);
  const orientationTag = draw.orientation === "reversed" ? ", printed upside down" : "";
  return `${frame} ${draw.card.name}${orientationTag}. ${line}`;
}

function openerFor(count: number): string {
  if (count <= 1) {
    return "Window's open. One sheet. I'll read it the way it came off the press.";
  }
  if (count === 3) {
    return "Three sheets. Where you were, where the ink is wet, and where this is headed if nobody resets the lockup.";
  }
  if (count === 10) {
    return "The whole forme. Ten seats, from the heart of the sheet to the receipt. Stay with me. I don't skip the ugly ones.";
  }
  return `${count} sheets on the stone. I'll take them in the order they were locked.`;
}

const SIGN_OFF =
  "That's the sheet. Keep the stamp on the last card if you keep only one. The window stays open another minute, then I have a condolence card to lock up.";

function interpretSpread(draws: CardDraw[]): string {
  if (draws.length === 0) {
    return "Nothing on the tympan yet. Slide a slip under the grille, or leave it blank and I'll pull the sheet you are already holding.";
  }
  const lines = [openerFor(draws.length), "", ...draws.map((draw) => interpretCard(draw)), "", SIGN_OFF];
  return lines.join("\n");
}

export const cassianVetch: ReaderPersona = {
  id: ID,
  name: NAME,
  tagline: TAGLINE,
  backstory: BACKSTORY,
  voiceGuide: VOICE_GUIDE,
  interpretCard,
  interpretSpread,
};

export default cassianVetch;
