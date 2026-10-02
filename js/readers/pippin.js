/**
 * Pippin — the cat on the table
 *
 * A round tuxedo cat who lives on the green velvet tarot table and does not
 * use human words. Every card is read in sounds and in what the cat does:
 * a head-butt is a blessing, a card batted off the table is a warning. A
 * reversal is a startled, offended or sideways cat.
 */

import { composeReading, quoteQuestion } from "./compose.js";
import { CARD_INTERPRETATIONS } from "./pippin-lines.js";

export const PIPPIN_PROFILE = {
  id: "pippin",
  name: "Pippin",
  title: "Tuxedo cat, no words",
  shortName: "Pippin",

  shortBio: "A round tuxedo cat who lives on the tarot table and does not use words. The reading is the sound, and what the cat does to the card.",
  greeting: "Mrrrrp? [sniffs your hand, then sits on the deck]",

  bio: "A round tuxedo cat with four white socks who lives on the tarot table. Pippin does not use words. The reading is the sound, and what the cat does to the card.",

  philosophy: "mrrrrp? ... ek-ek-ek-ek ... PURRRRRRRR.",

  voice:
    "Entirely cat noises, with what the cat does in square brackets. Upright cards get purrs, chirps, pounces and cheek-scenting. Reversals get crab-hops, sneezes, a bristled tail, or a disapproving silence followed by grooming a hind leg.",
};

/** Every position the app can deal, keyed by the role on js/spreads.js. */
export const POSITION_FRAMES = {
  core: "Mrrrrp? [sniffs card intently, then pats it twice with a white front paw]:",
  past: "Mrooo-o-o... [looks back over shoulder, tail flicking low against the rug]:",
  present: "Prrrt! [steps directly onto the center card, sitting down firmly on your knuckles]:",
  future: "Ek-ek-ek-ek! [stares unblinking at the ceiling corner with whiskers vibrating]:",
  center_base: "PURRRRR-chunk-PURRRRR [presses warm wet nose directly against your cheek]:",
  center_cross: "HISSSSSS-k-k-k! [ears flatten instantly into airplane mode, spine arched high]:",
  below: "Mmrrph... [burrows nose deep under the corner of the velvet cloth, dead weight]:",
  left: "Chirp! [grooms left shoulder thoughtfully, then bites back toenail with a sharp click]:",
  above: "ME-E-E-OWWW! [stands on hind legs and stretches front paws all the way up the wall]:",
  right: "Mew? [ears swivel forward like radar dishes, tail tip giving two sharp twitches]:",
  staff_1: "Mrrrgh... [stares into your eyes while slowly pushing a pen toward the table edge]:",
  staff_2: "YOWWWW-whine [head darts left and right as heavy footsteps pass in the hallway]:",
  staff_3: "Mrrp... prrr... hiss? [saucer pupils dilate until eyes are pure black voids]:",
  staff_4: "Prrr-rowww! [spins three circles, curls into a tight cinnamon bun, and tucks nose under tail]:",
  situation: "Mrow. [sits squarely in the middle of the cloth and looks at you until you look back]:",
  obstacle: "Mrrrow-OW! [sits down in front of the closed door and stares at the handle]:",
  advice: "Prrrp. Prrrp. [taps your hand twice, firmly, then taps the card]:",
  mind: "K-k-k-k... [eyes track something across the ceiling that is not there]:",
  body: "Mrrr-uff. [stretches front legs out long, then flops sideways with full weight on your arm]:",
  spirit: "Prrrrrrrr. [closes both eyes slowly, opens them, and holds your gaze]:"
};

function getCardLines(card, isReversed) {
  const entry = CARD_INTERPRETATIONS[card.id];
  if (!entry) {
    throw new Error(`Pippin will not look at ${card.id}.`);
  }
  return isReversed ? entry.reversed : entry.upright;
}

// What Pippin does goes in [square brackets]; the app sets it in italics.
const OPENERS = {
  question: {
    1: (q) => `Mrrp? [tilts head at ${quoteQuestion(q)} and blinks once, slowly] Mrrrrp? [hops onto the table, circles your wrist twice, and butts a warm forehead into your palm]`,
    3: (q) => `Mrrp? [tilts head at ${quoteQuestion(q)} and blinks once, slowly] Chirp! Prrr-rrt! [kneads the green velvet cloth three times with both paws, then sits down firmly]`,
    10: (q) => `Mrrp? [tilts head at ${quoteQuestion(q)} and blinks once, slowly] MEOW-purrrr-chunk! [ten cards spread out; eyes widen into huge black saucers, tail swishing]`
  },
  blank: {
    1: "Mrrrrp? [hops onto the table, circles your wrist twice, and butts a warm forehead into your palm]",
    3: "Chirp! Prrr-rrt! [kneads the green velvet cloth three times with both paws, then sits down firmly]",
    10: "MEOW-purrrr-chunk! [ten cards spread out; eyes widen into huge black saucers, tail swishing]"
  }
};

const ELEMENTAL_NOTES = {
  Fire: "Mrrrow-wow-wow! [tears down the hallway and back twice, skids, tail straight up]",
  Water: "Prrrr... mew. [dips one paw in the water glass, watches the drops fall, drinks from the paw]",
  Air: "Ek-ek-ek-ek! [chatters at the window, jaw trembling, does not move a single paw]",
  Earth: "Mrrp. [walks to the bowl, checks it, sits down beside it, and waits]",
  Spirit: "Mrrrrr-OW. [stands very still with whiskers forward and every hair lifted]",
  mixed: "Mrrp? [sniffs each card in turn and settles on none of them]"
};

const ADVICE = {
  none: "PURRRRRRRR [rolls onto back, all four white socks in the air, and lets you see the belly]",
  some: "Mrrp. Prrt. [pats the upright cards, then looks at a reversed one and looks back at you]",
  most: "Hiss-snort! [backs up three steps with tail bristled, then sits down and washes one paw very slowly]"
};

const SIGN_OFF = "PURRRRRRRRRRRRRRRRRRRRRR [head-butts the cards, steps directly onto your keyboard, and falls asleep across your hand]";

const CLOSERS = {
  wands: () => SIGN_OFF,
  cups: () => SIGN_OFF,
  swords: () => SIGN_OFF,
  pentacles: () => SIGN_OFF,
  major: () => SIGN_OFF
};

/** Everything this reader says, for compose.js to assemble. */
export const VOICE = {
  profile: PIPPIN_PROFILE,
  frames: POSITION_FRAMES,
  line: getCardLines,
  openers: OPENERS,
  suitNotes: ELEMENTAL_NOTES,
  advice: ADVICE,
  closers: CLOSERS,
  closerOne: () => SIGN_OFF
};

export const Pippin = {
  ...PIPPIN_PROFILE,

  interpret(spreadData) {
    return composeReading(VOICE, spreadData);
  }
};

export default Pippin;
