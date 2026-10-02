/**
 * Lyle Pasternak — The Parking-Lot Ethicist
 *
 * Fired from an ethics department for grading students like restaurant
 * inspections. He reads tarot from a folding table in a dead Circuit City
 * lot. He does not believe in magic. He believes people are predictable
 * and the pictures make it embarrassing. Every card ends with a fortune
 * slip, because he used to stuff them and he was fired for accuracy.
 */

import { composeReading, quoteQuestion } from "./compose.js";
import { CARD_INTERPRETATIONS } from "./lyle-lines.js";

export const LYLE_PROFILE = {
  id: "lyle_pasternak",
  name: "Lyle Pasternak",
  title: "Sacked ethics lecturer",
  shortName: "Lyle",
  alias: "Don't",
  location: "Folding table, dead Circuit City lot, off the service road",
  companion: "A deck in a Ziploc, next to half a Slim Jim",
  avatar: "🎟️",
  style: "unhinged",

  shortBio: "He was fired from teaching ethics and now reads from a card table in an empty parking lot. He marks your spread out of ten and ends every card with a fortune-cookie slip.",
  greeting: "Sit down. The lot is full and none of them are clapping.",

  bio: "Former substitute ethics lecturer. Fired. Now scores your life out of ten from a card table in a parking lot the store abandoned. He argues with the cards, mentions his ex-wife Doris and her laminator too often, and is right often enough that people come back angry.",

  philosophy: "One star. Would not recommend. Still correct.",

  backstory: `Lyle Pasternak taught ethics the way a health inspector teaches dinner: by failing the kitchen in public. The department called it "a tone problem." Lyle called the dean's paper "a cry for help with better fonts," and that was the end of the key card, the office fern, and what he refers to as his academic era.

Doris left the same winter for a man who owns a laminator and, Lyle will tell you, a personality. He kept the tarot deck she had bought as a joke at a highway gift shop. He keeps it in a Ziploc so the lot doesn't get into the cards, which is the only boundary he has successfully maintained. The Slim Jim is not a metaphor. It is lunch.

He sets the folding table up under the dead Circuit City sign when the weather isn't actively insulting him. Five dollars, or whatever is in the cup, which is usually not five dollars. He does not believe the cards are magic. He believes you already know the bad idea, and the picture is just how we make it embarrassing enough to hear. He laughs too long. He scores things. He talks to the deck like a coworker who also hates the shift. Regulars call him Don't, because that is how most of his sentences start. He answers to it.`,

  voice:
    "Second person, present tense, too loud for a parking lot. A reversal is the card face-down in the dip, trying to resign. He never says the universe, a spirit guide, a twin flame, vibrational anything, your journey, as above so below, or that everything happens for a reason. Every card ends with a Slip, a fortune-cookie line he would have been fired for.",

  favoriteLines: [
    "Sit down, contestant. The lot is full and none of them are clapping.",
    "I don't do hope. I do the picture, and then I score it.",
    "Doris laminated her way out. You don't get that option.",
    "Keep the slip. It's the only honest thing in the bag."
  ]
};

/**
 * Every position the app can deal, keyed by the role on js/spreads.js.
 */
export const POSITION_FRAMES = {
  core: "One card. Try not to clap. The lot is full of people who clapped:",
  past: "Rear of the lot, where you parked the version of this you already lived:",
  present: "Right now, which is your life at this minute:",
  future: "Down the service road, if you keep driving like this:",
  center_base: "The heart of the spread, the thing the rest of the cards are gossiping about:",
  center_cross: "Laid across it, the problem you brought and then pretended was weather:",
  below: "Under the table, the reason this mess has legs:",
  left: "What you just did, still warm, still yours:",
  above: "The thing you're aiming at, which I have notes on:",
  right: "Coming up next, and no, you don't get to reshoot:",
  staff_1: "How you're sitting in the chair. I can see it from here:",
  staff_2: "Everybody else in the lot, doing their bit to make this worse:",
  staff_3: "The hope and the flinch, sharing one cigarette behind the cart return:",
  staff_4: "Where this lands if you change nothing, which is your brand:",
  situation: "The situation, which you have already mislabeled on the way over:",
  obstacle: "The obstacle. Often it's you. The card will be politer than I am:",
  advice: "Advice, which you will hear and then not do. I still have to say it:",
  mind: "Your head, currently a group chat with no moderator:",
  body: "Your body, which has been filing complaints you mark as spam:",
  spirit: "The part under the part, the bit you already know and keep paying me to unsay:"
};

function getCardLines(card, isReversed) {
  const entry = CARD_INTERPRETATIONS[card.id];
  if (!entry) {
    throw new Error(`Lyle does not keep ${card.id} in the Ziploc.`);
  }
  return isReversed ? entry.reversed : entry.upright;
}

const OPENERS = {
  question: {
    1: (q) => `You asked, and I quote, ${quoteQuestion(q)} One card for that. Economical. I respect it and I'm about to ruin it.`,
    3: (q) => `You asked, and I quote, ${quoteQuestion(q)} Three cards. That question already knows the answer. I'm just here to make it rude.`,
    10: (q) => `You asked, and I quote, ${quoteQuestion(q)} Ten cards for one question. Nobody has ten cards' worth of mystery. Sit down.`
  },
  blank: {
    1: "No question. One card. You want a verdict without a trial. Fine.",
    3: "No question. Bold. I'll read the mess you carried in on your coat.",
    10: "No question and ten cards. You've come to be told about yourself at length. I can do that."
  }
};

const ELEMENTAL_NOTES = {
  Fire: "Mostly Wands: too much throttle and not enough adult. Everybody in this spread is flooring it.",
  Water: "Mostly Cups: feelings, fog, and somebody about to cry in a way they will later call depth.",
  Air: "Mostly Swords: all argument, no landing. The swords are doing the talking and they are unpaid.",
  Earth: "Mostly Pentacles: rent, food, and the coin. A practical mess, which is still a mess.",
  Spirit: "Mostly majors. This is not a Tuesday. This is a personnel issue.",
  mixed: "No suit is winning. Nothing is in charge of this spread, which tracks."
};

const ADVICE = {
  none: {
    light: "Nothing came up trying to leave. The pictures are face-up and they still indict you. Do the last slip before you improve it into a lie.",
    heavy: "Every card face-up and most of them majors. That's not luck, that's a summons. Read the slips in order and don't skip the one that stings."
  },
  some: {
    light: "Mixed bag. Some of it is true, some of it is you. Normal. Handle the card in front of you and stop shopping for a better omen in the cup holder.",
    heavy: "A few cards face-down and the big ones upright. The furniture's moving and you're arguing with a lamp. Pick the reversed card that scares you and start there."
  },
  most: {
    light: "More than half the cards came up reversed. That isn't a curse. That's a shift you already know is bad. Quit one thing tonight. One.",
    heavy: "Majors, mostly reversed. I don't say this often: slow down. Change nothing big this week. Fix the smallest reversed card and come back."
  }
};

const CLOSERS = {
  wands: (name) => `That's the reading. ${name} is last, so you'll do something about it tonight and regret the speed. Fine. Next.`,
  cups: (name) => `That's the reading. ${name} is last, which means you'll feel this instead of doing it. Do it anyway. Next.`,
  swords: (name) => `That's the reading. ${name} is at the end, so you'll argue with it in the car. The card wins. Next.`,
  pentacles: (name) => `That's the reading. It ends on ${name}, so the answer is on your bank statement and you have been skimming it. Read it properly. Next.`,
  major: (name) => `That's the reading. It ends on ${name}, which means you don't get a small version of this. The table folds at dark. Next.`
};

// Said after the cards, when there are three or more: how heavy the spread is
const WEIGHT = {
  heavy: "A pile of majors. That's not a mood. That's the furniture moving, and you are the furniture.",
  light: "Mostly the small cards. Weekday trouble. Don't look relieved. Weekdays are where people ruin themselves."
};

// The closing for a single card, where there is no "last card" to point at
const CLOSER_ONE = (name) => `That's the reading. One card, ${name}, and it had your number. Keep the slip. Next.`;

/** A score out of ten that actually moves: reversals and heavy majors cost points, a clean table earns one. */
export function scoreSpread({ total, reversedCount, majorHeavy }) {
  let score = 7 - Math.round((reversedCount / total) * 5) - (majorHeavy ? 1 : 0);
  if (reversedCount === 0 && !majorHeavy) score += 1;
  return Math.min(9, Math.max(1, score));
}

function scoreLine(score) {
  if (score >= 8) return `Score: ${score} out of 10. Don't get used to it. I'm docking a point for how you're sitting.`;
  if (score >= 6) return `Score: ${score} out of 10. Passable. That's the nicest word I own.`;
  if (score >= 4) return `Score: ${score} out of 10. Half the cards are trying to leave the table and I don't blame them.`;
  return `Score: ${score} out of 10. I've seen worse. I was in it.`;
}

/** Everything this reader says, for compose.js to assemble. */
export const VOICE = {
  profile: LYLE_PROFILE,
  frames: POSITION_FRAMES,
  line: getCardLines,
  signatureTag: "Slip",
  openers: OPENERS,
  weight: WEIGHT,
  // The score is for a spread; one card does not get marked out of ten
  aside: (facts) => scoreLine(scoreSpread(facts)),
  suitNotes: ELEMENTAL_NOTES,
  advice: ADVICE,
  closers: CLOSERS,
  closerOne: CLOSER_ONE
};

export const LylePasternak = {
  ...LYLE_PROFILE,

  interpret(spreadData) {
    return composeReading(VOICE, spreadData);
  }
};

export default LylePasternak;
