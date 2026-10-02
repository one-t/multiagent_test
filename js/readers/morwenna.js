/**
 * Madame Morwenna Ravenscroft — the widow of the Seventh Bell
 *
 * A Victorian medium who left the salons and reads beneath Edinburgh's Old
 * Town, with tallow candles and a one-eyed rook named Malachi. Measured,
 * theatrical, and not inclined to coddle. Every card ends with a Proverb.
 */

import { composeReading, quoteQuestion } from "./compose.js";
import { CARD_INTERPRETATIONS } from "./morwenna-lines.js";

export const MORWENNA_PROFILE = {
  id: "morwenna_ravenscroft",
  name: "Madame Morwenna Ravenscroft",
  title: "Retired society medium",
  shortName: "Madame Morwenna",

  bio: "Once the toast of Edinburgh's spiritualist salons, she now reads beneath the Old Town with tallow candles and a one-eyed rook named Malachi. She does not sugarcoat a harsh card.",
  shortBio: "Once the toast of Edinburgh's spiritualist salons, she now reads beneath the Old Town with a one-eyed rook named Malachi. She does not sugarcoat a harsh card, and she ends each one with a proverb.",
  greeting: "The pasteboards do not coddle, darling. Shall we see where the skin is thin?",

  philosophy: "The cards simply report the weather of your soul; whether you carry an umbrella is your affair.",

  voice:
    "Measured, theatrical, rich with wax, rain, cold iron, peat and bone. Intimate yet authoritative; she never sugarcoats a harsh card and never trivializes a joyful one. A reversal is the same card working inward. Every card ends with a Proverb.",
};

/**
 * Every position the app can deal, keyed by the role on js/spreads.js.
 * A lead-in names the position and leaves the verdict to the card: it must
 * read true whether the card that follows is welcome or not.
 */
export const POSITION_FRAMES = {
  core: "The sole lantern on the cloth tonight:",
  past: "The footsteps in the mud behind you:",
  present: "The ground beneath your boots at this very hour:",
  future: "The knock at the shutter, not yet answered:",
  center_base: "The heart of the matter, the raw nerve that brought you to my table:",
  center_cross: "Laid across it, the thorn in the sandal:",
  below: "Deep in the cellar floor, where the water table lies:",
  left: "The tide that is pulling out:",
  above: "The highest gargoyle, what you reach for in the light of day:",
  right: "The next guest climbing the stairs:",
  staff_1: "The mirror in the dim corner, how you carry yourself in this:",
  staff_2: "The whispers in the alley, everyone and everything around you:",
  staff_3: "The raven on the lintel, your secret appetite and your secret dread:",
  staff_4: "Where the road runs out into the sea:",
  situation: "The stage as it is set tonight:",
  obstacle: "The briar patch across your path:",
  advice: "What Malachi and I bid you do:",
  mind: "The upper chamber, where your thoughts pace:",
  body: "The clay vessel: your flesh, your coins, the roof above your bed:",
  spirit: "The spark beneath all of it, what you came here to learn:"
};

/** Her line for the card, with its proverb last so it can be set apart. */
function getCardLines(card, isReversed) {
  const entry = CARD_INTERPRETATIONS[card.id];
  if (!entry) {
    throw new Error(`Morwenna has no page in the ledger for ${card.id}.`);
  }
  return `${isReversed ? entry.reversed : entry.upright} Proverb: ${entry.proverb}`;
}

const OPENERS = {
  question: {
    1: (q) => `You ask ${quoteQuestion(q)} One card, then. Draw close to the brazier.`,
    3: (q) => `You ask ${quoteQuestion(q)} Three cards on the cloth. Draw close to the brazier; don't mind Malachi, he only snaps at untruths.`,
    10: (q) => `You ask ${quoteQuestion(q)} Ten cards, the whole cross. Sit. This will take the candle down an inch.`
  },
  blank: {
    1: "No question spoken. One card will choose its own subject.",
    3: "No question spoken. The pasteboards will choose their own subject.",
    10: "No question, and the full cross. Very well. The cards have never needed permission."
  }
};

const WEIGHT = {
  heavy: "The Major Arcana dominate this layout. These are not trivial, day-to-day squabbles; the tectonic plates of your destiny are grinding against one another. Pay sacred attention.",
  light: "Mostly the small cards tonight: the daily bread of a life, which is where most of it is decided."
};

const ELEMENTAL_NOTES = {
  Fire: "A bonfire roars in the hearth. Ambition, urgency, and creative restlessness are consuming your kindling. Channel the blaze into craft before it consumes your domestic peace.",
  Water: "The tide is high, and the cellar floor is wet with memory. Emotional waters run deep here; do not mistake feeling deeply for helplessness.",
  Air: "The air is thick with blades and wind. You are locked in the upper chambers of analysis, grief, or strategic warfare. Put down your mental dissecting knife before you carve away your peace.",
  Earth: "Cold stones, heavy coins, and patient vines. The material reality demands your sober stewardship. Build for ten winters hence, not for tomorrow morning.",
  Spirit: "The trumps lead the cloth. Whatever this is, darling, it is not small.",
  mixed: "The four elemental streams intermingle on the cloth: fire tests water, while steel cultivates stone. Balance is your task."
};

const ADVICE = {
  none: "Every card faces the sky upright! The currents are flowing without dam or obstruction into physical reality. Step forward; the road is clear.",
  some: "A dance of shadows and light. Where the cards stand upright, you have momentum; where they tilt reversed, you are asked to pause and adjust your compass.",
  most: "A heavy canopy of reversals hangs over this spread. The outer world is merely the echo chamber; the true friction, doubt, and resistance live entirely within your own breast. Time for an honest inventory in the dark."
};

const CLOSERS = {
  wands: (name) => `The cloth ends on ${name}. Bank the fire before you sleep; it will still be there at dawn. The Seventh Bell has tolled.`,
  cups: (name) => `The cloth ends on ${name}. Drink your bitter tea and let the feeling pass through you, not set up house. The Seventh Bell has tolled.`,
  swords: (name) => `The cloth ends on ${name}. Put the knife down for the night; the thought will keep. The Seventh Bell has tolled.`,
  pentacles: (name) => `The cloth ends on ${name}. Salt your threshold and count what you actually have. The Seventh Bell has tolled.`,
  major: (name) => `The cloth ends on ${name}. Remember who you were before fear convinced you to shrink. The Seventh Bell has tolled; the cards return to their velvet sleep.`
};

const CLOSER_ONE = (name) => `One card, ${name}, and it has said its piece. The Seventh Bell has tolled; the cards return to their velvet sleep.`;

/** Everything this reader says, for compose.js to assemble. */
export const VOICE = {
  profile: MORWENNA_PROFILE,
  frames: POSITION_FRAMES,
  line: getCardLines,
  reversedMark: ", reversed",
  signatureTag: "Proverb",
  openers: OPENERS,
  weight: WEIGHT,
  suitNotes: ELEMENTAL_NOTES,
  advice: ADVICE,
  closers: CLOSERS,
  closerOne: CLOSER_ONE
};

export const morwennaReader = {
  ...MORWENNA_PROFILE,

  interpret(spreadData) {
    return composeReading(VOICE, spreadData);
  }
};

export { CARD_INTERPRETATIONS };
export default morwennaReader;
