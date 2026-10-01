/**
 * Cal Navarro — The nightstand reader
 *
 * Thirty-eight. He used to perform in explicit films and left because the
 * moans were blocked like traffic. He reads from a walk-up, cards beside
 * the bed, and he says what he wants. The want is the reading. People sit
 * down on purpose. Stop means stop.
 */

import { ReaderRegistry } from "../reader-interface.js";
import { CARD_INTERPRETATIONS } from "./cal-lines.js";

export const CAL_PROFILE = {
  id: "cal_navarro",
  name: "Cal Navarro",
  title: "The nightstand reader",
  shortName: "Cal",
  alias: "Come Up",
  location: "A walk-up with the cards beside the bed",
  avatar: "🫦",
  style: "explicit",

  bio: "Thirty-eight. He left explicit film when the moans were blocked like traffic. He reads beside the bed and says what he wants, because the want is the reading.",

  philosophy: "I want you, and the card knows where.",

  backstory: `Cal Navarro is thirty-eight. He spent his late twenties performing in explicit films where the pleasure was scheduled and the sound was fixed in post. He left when a director told him to moan over a take in which nobody had actually come. He kept a tarot deck from a lover who said he was already doing readings, he was just using his mouth instead of the pictures.

He reads in the walk-up. The cards live beside the bed. He is greedy, specific, and a little shameless, and he still tells the truth about the card rather than using it as an excuse to grab. A reversal is the same hunger with the nerve dropped. The people who sit down came there to be wanted out loud. Stop means stop. He charges like a decent dinner, and he does not charge someone who is clearly spending their last courage on being honest.

Regulars call him Come Up, which is both the invitation and the joke. He answers to it.`,

  voice:
    "Second person, present tense, already leaning in. He says what he wants done to him and what he wants to do. He never says the universe, a spirit guide, a twin flame, vibrational anything, your journey, as above so below, or that everything happens for a reason. Every card ends with a Want.",

  favoriteLines: [
    "Sit down. I am already interested, which is not the same as a reading, and then it is.",
    "I will tell you what I want. The card has to survive that.",
    "Stop means stop. The rest of this I mean.",
    "Keep the last want if you keep only one."
  ]
};

/** Every position the app can deal, keyed by the role on js/spreads.js. */
export const POSITION_FRAMES = {
  core: "One card. I am already leaning in. Here is what it makes me want:",
  past: "The sex you already had, still on you from the way you sat:",
  present: "Right now, in this room, with me looking at your mouth:",
  future: "What I would do next if you stayed:",
  center_base: "The center of it, where I would put my mouth and not rush:",
  center_cross: "The thing lying across your want. I still want you through it:",
  below: "What this grew out of, some earlier night your body remembers:",
  left: "What you just did, and I am jealous of whoever got it:",
  above: "The thing you are reaching for. I would like to be it:",
  right: "Coming toward you. I want to meet it with my hands already busy:",
  staff_1: "How you are sitting in the want. I would like to ruin the posture:",
  staff_2: "Everyone else around this, and the one I would steal you from:",
  staff_3: "What you hope I do, and what you are afraid you will beg for:",
  staff_4: "How this ends if you let me finish the way the card points:",
  situation: "The situation, which is you already hot and calling it a question:",
  obstacle: "What is in the way of me getting my mouth on the truth:",
  advice: "What I would do if you asked, and you are asking:",
  mind: "The thought I would like to fuck out of you, kindly and not:",
  body: "Your body in the chair, doing more honest work than your sentence:",
  spirit: "The underneath want, the one I would follow with my tongue:"
};

function getPositionFrame(position) {
  return POSITION_FRAMES[position?.role] || POSITION_FRAMES.core;
}

function getCardLines(card, isReversed) {
  const entry = CARD_INTERPRETATIONS[card.id];
  if (!entry) {
    throw new Error(`Cal does not keep ${card.id} beside the bed.`);
  }
  return isReversed ? entry.reversed : entry.upright;
}

function quote(question) {
  return `“${question.trim()}”`;
}

const OPENERS = {
  question: {
    1: (q) => `You asked ${quote(q)} One card. I am already interested, which is unprofessional and correct.`,
    3: (q) => `You asked ${quote(q)} Three cards. I want the answer off your mouth.`,
    10: (q) => `You asked ${quote(q)} Ten cards. That is a whole night. I am not rushing my mouth.`
  },
  blank: {
    1: "No question. One card. You wanted to be looked at. Here I am.",
    3: "No question. Three cards, and I will still find the place you are hot.",
    10: "No question and ten cards. You want a long looking. I can do a long looking."
  }
};

const ELEMENTAL_NOTES = {
  Fire: "Mostly Wands. Heat and hurry. I want it, and I want it before we get clever.",
  Water: "Mostly Cups. Feeling is in the bed. I want the tender filth, not a performance of it.",
  Air: "Mostly Swords. Too much talk for the amount of skin. The argument is cockblocking the room.",
  Earth: "Mostly Pentacles. Bodies, money, the slow craft. I want the practical version, which is still obscene.",
  Spirit: "Mostly majors. A big night. I want the whole thing, not a polite excerpt.",
  mixed: "No suit is winning. I want you anyway. Nothing is directing us yet, so I will."
};

const ADVICE = {
  none: {
    light: "Nothing reversed. The want is face-up. Do the last want before you edit it into something you could say at dinner.",
    heavy: "Upright, and heavy with majors. Stay for the whole thing. Do not skip the card that makes you throb and feel obvious."
  },
  some: {
    light: "A few cards turned. Normal. Take the upright one in your hands first. The reversed card is the part you fake.",
    heavy: "Big pictures, some of them turned over. Start where the nerve failed. That is the come you keep postponing."
  },
  most: {
    light: "More than half are reversed. You are hot and you are stalling on me. Pick one act and finish it.",
    heavy: "Majors, mostly reversed. Do not detonate a life from this chair. One small true thing, done all the way, then come back up."
  }
};

const CLOSERS = {
  wands: (name) => `I am keeping ${name} in my mouth on the way out. You will want it fast. Let it be fast, then do it again.`,
  cups: (name) => `${name} is last. I want to kiss you through it until you stop performing fine.`,
  swords: (name) => `${name} ends it. I want the truth more than I want to be nice, and I still want you under me.`,
  pentacles: (name) => `${name} is last. I want the slow version, the one that ruins the sheets and still makes sense in the morning.`,
  major: (name) => `${name} is the last card. I want the whole night, not a polite version of it. Lock the door if you are staying.`
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

export const CalNavarro = {
  ...CAL_PROFILE,

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
      ? "A pile of majors. I want the big night, and I am not pretending it is a quick grind."
      : "Mostly the small cards. Weeknight hunger. I still want it. Ordinary is where people actually come.";

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

export default CalNavarro;
