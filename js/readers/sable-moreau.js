/**
 * Sable Moreau — The bed reader
 *
 * Thirty-four. She used to write the spoken parts for a phone-sex line and
 * quit when the script said giggle where the truth was say what you want.
 * She reads upstairs after the bar closes. People come to the bed on purpose.
 * A card is an order: one explicit thing to do, tied to what the picture means.
 */

import { ReaderRegistry } from "../reader-interface.js";
import { CARD_INTERPRETATIONS } from "./sable-lines.js";

export const SABLE_PROFILE = {
  id: "sable_moreau",
  name: "Sable Moreau",
  title: "The bed reader",
  shortName: "Sable",
  alias: "Upstairs",
  location: "The room above the bar, after last call",
  avatar: "💋",
  style: "explicit",

  bio: "Thirty-four. She quit a phone-sex line when the script told her to giggle instead of tell the truth. She reads in bed, after the bar closes, and every card ends as an order.",

  philosophy: "Say the filthy part out loud.",

  backstory: `Sable Moreau is thirty-four. For six years she wrote and spoke the dirty copy for a phone line that wanted moans in the places where a true sentence would have done more. She quit the night a supervisor circled the word cunt and wrote softer. She kept the deck a regular had sent her as a joke and started reading it upstairs, in the bed, for people who already knew why they had climbed the stairs.

She does not do fate. She does the picture and then the act the picture is being polite about. A reversal is the same want with the nerve gone missing. She is explicit the way a competent lover is explicit: she names the body, the pace, and the thing you are avoiding. Stop means stop. The people in the bed came there on purpose.

Regulars call her Upstairs. She answers if you are already honest. She charges what the bar charges for a good bottle, and she waives it when someone is spending the last of their nerve on the truth instead of on a performance.`,

  voice:
    "Second person, present tense, in the bed. She gives orders. She names the act. She never says the universe, a spirit guide, a twin flame, vibrational anything, your journey, as above so below, or that everything happens for a reason. Every card ends with an Order.",

  favoriteLines: [
    "You climbed the stairs. Do not get shy on the landing.",
    "I will say the filthy part. You will stop translating it into something nicer.",
    "Stop means stop. Everything else I say, I mean.",
    "Keep the last order if you keep only one."
  ]
};

/** Every position the app can deal, keyed by the role on js/spreads.js. */
export const POSITION_FRAMES = {
  core: "One card, said the way you would say it with your clothes off:",
  past: "What you already let someone do, still on your mouth:",
  present: "Right now, while you pretend this is about anything but want:",
  future: "Where your body goes if you stop negotiating with it:",
  center_base: "The thing you actually want, under the polite sentence:",
  center_cross: "What is crossing your legs and calling itself a problem:",
  below: "Under the question, the old fuck you keep returning to:",
  left: "What just happened, still slick, still yours:",
  above: "The fuck you are aiming at and refusing to ask for:",
  right: "What is about to get its hands on you:",
  staff_1: "How you are holding your own want. The grip is visible:",
  staff_2: "The other people in this, and what they do to your attention:",
  staff_3: "The want and the flinch, sharing one bed:",
  staff_4: "Where you end up if you come the way you always come:",
  situation: "The situation, which is hornier than the story you told:",
  obstacle: "What is keeping you from the fuck you already described:",
  advice: "What to do with your mouth if you stop performing shy:",
  mind: "The filthy thought you keep editing into something nicer:",
  body: "Your body, which already voted and is waiting on your manners:",
  spirit: "The part of you that wants it without a speech:"
};

function getPositionFrame(position) {
  return POSITION_FRAMES[position?.role] || POSITION_FRAMES.core;
}

function getCardLines(card, isReversed) {
  const entry = CARD_INTERPRETATIONS[card.id];
  if (!entry) {
    throw new Error(`Sable does not keep ${card.id} under the sheet.`);
  }
  return isReversed ? entry.reversed : entry.upright;
}

function quote(question) {
  return `“${question.trim()}”`;
}

const OPENERS = {
  question: {
    1: (q) => `You said ${quote(q)} One card. I heard the part you did not undress.`,
    3: (q) => `You said ${quote(q)} Three cards. I am going to be ruder than the question.`,
    10: (q) => `You said ${quote(q)} Ten cards is a long time to stay dressed. We will manage.`
  },
  blank: {
    1: "No question. Good. Your body already asked.",
    3: "No question. Three cards, and I will find where you are hot for it anyway.",
    10: "No question and ten cards. You want to be looked at for a long time. Sit where I can see you."
  }
};

const ELEMENTAL_NOTES = {
  Fire: "Mostly Wands. This spread is heat, will, and somebody about to do it too fast.",
  Water: "Mostly Cups. Feeling is running the fuck, which is either intimacy or a flood.",
  Air: "Mostly Swords. The mind is talking louder than the body, and the body is annoyed.",
  Earth: "Mostly Pentacles. Skin, money, work, the practical hunger. Still a hunger.",
  Spirit: "Mostly majors. This is not a quick one. The big pictures are in the bed.",
  mixed: "No suit is in charge. The want is real and nobody is directing it yet."
};

const ADVICE = {
  none: {
    light: "Nothing came up reversed. The want is face-up. Do the last order before you turn it into a joke.",
    heavy: "All of it upright and most of it huge. Follow the orders in order. Do not skip the one that makes you flush."
  },
  some: {
    light: "Some of these are turned. Fuck the upright one first. The reversed card is the part you keep faking.",
    heavy: "Big cards, a few of them turned. Start with the reversed one. That is the orgasm you keep talking yourself out of."
  },
  most: {
    light: "More than half the cards are reversed. You are hot and stalling. Pick one act and finish it tonight.",
    heavy: "Majors, mostly reversed. Do not blow a life up from a soaked chair. One small filthy thing, done completely, then come back."
  }
};

const CLOSERS = {
  wands: (name) => `Leave the last order. It was ${name}, so you do it hot and a little too fast, and you do not apologize after.`,
  cups: (name) => `Leave the last order. It was ${name}, so you let yourself feel it while you come, which is the part you skip.`,
  swords: (name) => `Leave the last order. It was ${name}. Say the true sentence while the act is still going. Then be quiet.`,
  pentacles: (name) => `Leave the last order. It was ${name}. Make it physical, make it last, and pay for the room if that is what it takes.`,
  major: (name) => `Leave the last order. It was ${name}. This one changes how you fuck, not just who. I am not repeating it.`
};

function sizeKey(total) {
  if (total >= 10) return 10;
  if (total >= 3) return 3;
  return 1;
}

function lastCardKey(cards) {
  const last = cards[cards.length - 1];
  if (!last) return "major";
  return last.card.arcana === "major" ? "major" : last.card.suit || "major";
}

function closingFor(cards) {
  const last = cards[cards.length - 1];
  const name = last ? last.card.name : "the last card";
  return CLOSERS[lastCardKey(cards)](name);
}

export const SableMoreau = {
  ...SABLE_PROFILE,

  interpret(spreadData) {
    const { cards, question } = spreadData;
    const { dominant } = ReaderRegistry.analyzeElements(cards);
    const total = cards.length;
    const reversedCount = cards.filter((item) => item.isReversed).length;
    const majorCount = cards.filter((item) => item.card.arcana === "major").length;
    const majorHeavy = majorCount >= 3 || majorCount / total > 0.4;
    const size = sizeKey(total);

    const cardReadings = cards.map(({ card, isReversed, position }) => {
      const keywords = isReversed ? card.keywordsReversed : card.keywordsUpright;
      const frame = getPositionFrame(position);
      const line = getCardLines(card, isReversed);
      return {
        positionIndex: position.index,
        positionName: position.name,
        cardId: card.id,
        cardName: card.name,
        cardElement: card.element,
        isReversed,
        orientation: isReversed ? "Reversed" : "Upright",
        focalKeyword: (keywords && keywords[0]) || "",
        reflection: `${frame} ${card.name}${isReversed ? " (reversed)" : ""}. ${line}`
      };
    });

    const opener = question && question.trim() ? OPENERS.question[size](question) : OPENERS.blank[size];
    const weightNote = majorHeavy
      ? "A pile of majors. The big pictures are in bed with you, and they do not do quick."
      : "Mostly the small cards. Weeknight want. Do not look relieved. Weeknights are where people get honest.";

    const summary = `${opener} ${weightNote}`;
    const elementalInsight = ELEMENTAL_NOTES[dominant] || ELEMENTAL_NOTES.mixed;
    const bucket = reversedCount === 0 ? "none" : reversedCount / total > 0.5 ? "most" : "some";
    const actionableAdvice = ADVICE[bucket][majorHeavy ? "heavy" : "light"];
    const closingBenediction = closingFor(cards);

    return {
      readerId: this.id,
      readerName: this.name,
      readerTitle: this.title,
      summary,
      elementalInsight,
      cardReadings,
      actionableAdvice,
      closingBenediction
    };
  }
};

export default SableMoreau;
