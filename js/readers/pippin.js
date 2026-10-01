/**
 * Pippin — the cat on the table
 *
 * A round tuxedo cat who lives on the green velvet tarot table and does not
 * use human words. Every card is read in sounds and in what the cat does:
 * a head-butt is a blessing, a card batted off the table is a warning. A
 * reversal is a startled, offended or sideways cat.
 */

import { ReaderRegistry } from "../reader-interface.js";
import { CARD_INTERPRETATIONS } from "./pippin-lines.js";

export const PIPPIN_PROFILE = {
  id: "pippin",
  name: "Pippin",
  title: "The cat on the table",
  shortName: "Pippin",
  alias: "Pippin",
  location: "The green velvet tarot table",
  avatar: "🐈‍⬛",
  style: "feline",

  bio: "A round tuxedo cat with four white socks who lives on the tarot table. Pippin does not use words. The reading is the sound, and what the cat does to the card.",

  philosophy: "mrrrrp? ... ek-ek-ek-ek ... PURRRRRRRR.",

  backstory: `Pippin is a round tuxedo cat with white whiskers, four white socks, and large saucer eyes who lives on the green velvet tarot table.

Pippin does not speak English, Scottish, Latin, or Greek. Human words are clumsy, heavy boxes that cannot fit under the radiator and make far too much useless noise. Instead, Pippin communicates through feline vocalization and body language: inquisitive trills, high-frequency chittering at flies on the window pane, sudden outraged yowls, drowsy purr-clicks, and the razor-sharp hiss-spit of impending doom.

Every card's temperature, urgency, danger, and joy comes through in pitch, timing, ear-swivels, pupil dilation, and tactical swatting. If Pippin head-butts the card, you're blessed; if Pippin baps it off the table and stares into the baseboard, you'd better check your life choices.`,

  voice:
    "Entirely cat noises, with what the cat does in square brackets. Upright cards get purrs, chirps, pounces and cheek-scenting. Reversals get crab-hops, sneezes, a bristled tail, or a disapproving silence followed by grooming a hind leg.",

  favoriteLines: [
    "Mrrrrp?",
    "Ek-ek-ek-ek!",
    "PURRRRRRRRRRRR"
  ]
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

function getPositionFrame(position) {
  return POSITION_FRAMES[position?.role] || POSITION_FRAMES.core;
}

function getCardLines(card, isReversed) {
  const entry = CARD_INTERPRETATIONS[card.id];
  if (!entry) {
    throw new Error(`Pippin will not look at ${card.id}.`);
  }
  return isReversed ? entry.reversed : entry.upright;
}

const OPENERS = {
  1: "Mrrrrp? [hops onto the green baize table, circles your wrist twice, and butts warm forehead into your palm].",
  3: "Chirp! Prrr-rrt! [kneads the green velvet cloth three times with both paws, then sits down firmly].",
  10: "MEOW-purrrr-chunk! [ten cards spread out; eyes widen into huge black saucers, tail swishing with intense feline concentration]."
};

const ELEMENTAL_NOTES = {
  Fire: "Mrrrow-wow-wow! [tears down the hallway and back twice, skids, tail straight up]. Mostly Wands.",
  Water: "Prrrr... mew. [dips one paw in the water glass, watches the drops fall, drinks from the paw]. Mostly Cups.",
  Air: "Ek-ek-ek-ek! [chatters at the window, jaw trembling, does not move a single paw]. Mostly Swords.",
  Earth: "Mrrp. [walks to the bowl, checks it, sits down beside it, and waits]. Mostly Pentacles.",
  Spirit: "Mrrrrr-OW. [stands very still with whiskers forward and every hair lifted]. Mostly Major Arcana.",
  mixed: "Mrrp? [sniffs each card in turn and settles on none of them]. No one suit leads."
};

const ADVICE = {
  none: "PURRRRRRRR [rolls onto back, all four white socks in the air, and lets you see the belly]. Every card upright.",
  some: "Mrrp. Prrt. [pats the upright cards, then looks at a reversed one and looks back at you]. Start with the one being stared at.",
  most: "Hiss-snort! [backs up three steps with tail bristled, then sits down and washes one paw very slowly]. Most cards reversed: slow down first."
};

const SIGN_OFF = "PURRRRRRRRRRRRRRRRRRRRRR [head-butts the cards, steps directly onto your keyboard, and falls asleep across your hand].";

function sizeKey(total) {
  if (total >= 10) return 10;
  if (total >= 3) return 3;
  return 1;
}

export const Pippin = {
  ...PIPPIN_PROFILE,

  interpret(spreadData) {
    const { cards, question } = spreadData;
    const { dominant } = ReaderRegistry.analyzeElements(cards);
    const total = cards.length;
    const reversedCount = cards.filter((item) => item.isReversed).length;

    const cardReadings = cards.map(({ card, isReversed, position }) => {
      const keywords = isReversed ? card.keywordsReversed : card.keywordsUpright;
      return {
        positionIndex: position.index,
        positionName: position.name,
        cardId: card.id,
        cardName: card.name,
        cardElement: card.element,
        isReversed,
        orientation: isReversed ? "Reversed" : "Upright",
        focalKeyword: (keywords && keywords[0]) || "",
        reflection: `${getPositionFrame(position)} ${card.name}${isReversed ? " (reversed)" : ""}. ${getCardLines(card, isReversed)}`
      };
    });

    const asked = question && question.trim()
      ? `Mrrp? [tilts head at “${question.trim()}” and blinks once, slowly].`
      : "Mrrp. [no question; sits down anyway].";
    const summary = `${asked} ${OPENERS[sizeKey(total)]}`;
    const elementalInsight = ELEMENTAL_NOTES[dominant] || ELEMENTAL_NOTES.mixed;
    const bucket = reversedCount === 0 ? "none" : reversedCount / total > 0.5 ? "most" : "some";

    return {
      readerId: this.id,
      readerName: this.name,
      readerTitle: this.title,
      summary,
      elementalInsight,
      cardReadings,
      actionableAdvice: ADVICE[bucket],
      closingBenediction: SIGN_OFF
    };
  }
};

export default Pippin;
