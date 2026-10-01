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
    return "*Mrrrrp?* [hops onto the green baize table, circles your wrist twice, and butts warm forehead into your palm]:";
  }
  if (count === 3) {
    return "*Chirp! Prrr-rrt!* [kneads the green velvet cloth three times with both paws, then sits down firmly]:";
  }
  if (count === 10) {
    return "*MEOW-purrrr-chunk!* [ten cards spread out; eyes widen into huge black saucers, tail swishing with intense feline concentration]:";
  }
  return `*Mrrr-rowww!* [surveys ${count} cards on the cloth, whiskers vibrating with anticipation]:`;
}

const SIGN_OFF =
  "*PURRRRRRRRRRRRRRRRRRRRRR* [head-butts the cards, steps directly onto your keyboard, and falls asleep across your hand].";

function interpretSpread(draws: CardDraw[]): string {
  if (draws.length === 0) {
    return "*Mrow?* [bats empty velvet cloth with paw, looking for something to knock onto floor].";
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

export const pippin: ReaderPersona = {
  id: ID,
  name: NAME,
  tagline: TAGLINE,
  backstory: BACKSTORY,
  voiceGuide: VOICE_GUIDE,
  interpretCard,
  interpretSpread,
};

export default pippin;
