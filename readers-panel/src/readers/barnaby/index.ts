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
    return "Hop up on the radiator, kid. Floor's cold, but the iron is hot. Let's see what you dragged in under your whiskers.";
  }
  if (count === 3) {
    return "Three cards knocked off the table. Past fence, present porch, future alley. Tuck your paws in and listen to your elders.";
  }
  if (count === 10) {
    return "The whole nine yards of territory laid out on the rug. Ten stations from the raw chest-purr to the final sunbeam. Keep your tail still and don't twitch your whiskers till I'm done.";
  }
  return `${count} cards spread across the wool blanket. Let's sniff 'em in order, nose to tail.`;
}

const SIGN_OFF =
  "That's the layout, kid. Wash your face, keep your claws sharp, and remember: you're a cat. Act like it.";

function interpretSpread(draws: CardDraw[]): string {
  if (draws.length === 0) {
    return "Blanket's empty and the bowl's dry. Hop up here and turn over a card, kid.";
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

export const barnaby: ReaderPersona = {
  id: ID,
  name: NAME,
  tagline: TAGLINE,
  backstory: BACKSTORY,
  voiceGuide: VOICE_GUIDE,
  interpretCard,
  interpretSpread,
};

export default barnaby;
