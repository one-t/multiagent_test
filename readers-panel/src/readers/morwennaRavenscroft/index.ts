import type { CardDraw, ReaderPersona } from "../../types";
import { ID, NAME, TAGLINE, BACKSTORY, VOICE_GUIDE } from "./persona";
import { getCardLine } from "./interpretations";
import { getPositionFrame } from "./positions";

function interpretCard(draw: CardDraw): string {
  const frame = getPositionFrame(draw.position);
  const line = getCardLine(draw.card.key, draw.orientation);
  const orientationTag = draw.orientation === "reversed" ? " (reversed)" : "";
  return `${frame} ${draw.card.name}${orientationTag}. "${line}"`;
}

function openerFor(count: number): string {
  if (count <= 1) {
    return "Draw close to the brazier, seeker. The cellar air is cold, but the pasteboard is already warm. Let us hear what the silence has to say.";
  }
  if (count === 3) {
    return "Three cards upon the velvet cloth: root, stem, and bloom. Don't mind Malachi — he only snaps at pretense. Let us examine the thread.";
  }
  if (count === 10) {
    return "The complete anatomy of your dilemma laid bare upon the stones. Ten stations, from the Central Stake to the Seventh Bell. Keep your spine straight; we do not look away from the mirror.";
  }
  return `${count} cards spread across the constellation mat. Let us trace the ink before it dries.`;
}

const SIGN_OFF =
  "The Seventh Bell has tolled, seeker. Salt your threshold tonight, drink your bitter tea, and remember: the cards report the weather, but you are the one holding the staff.";

function interpretSpread(draws: CardDraw[]): string {
  if (draws.length === 0) {
    return "The velvet mat remains bare. Shuffle the pasteboards and invite the mystery to speak.";
  }
  const lines = [
    openerFor(draws.length),
    "",
    ...draws.map((draw) => interpretCard(draw)),
    "",
    SIGN_OFF,
  ];
  return lines.join("\n");
}

export const morwennaRavenscroft: ReaderPersona = {
  id: ID,
  name: NAME,
  tagline: TAGLINE,
  backstory: BACKSTORY,
  voiceGuide: VOICE_GUIDE,
  interpretCard,
  interpretSpread,
};

export default morwennaRavenscroft;
