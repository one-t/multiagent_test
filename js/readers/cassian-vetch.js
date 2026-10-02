/**
 * Cassian Vetch — The Night Clerk
 *
 * Keeps the after-hours window at Vetch & Daughter, a letterpress shop the
 * city forgot to demolish. He reads every card as a sheet on the stone:
 * registration, gutter, receipt. A reversal is a slipped plate, not a curse.
 * Complete reading logic for all 78 cards and every position the app can deal.
 */

import { composeReading, quoteQuestion } from "./compose.js";
import { CARD_INTERPRETATIONS } from "./cassian-lines.js";

export const CASSIAN_PROFILE = {
  id: "cassian_vetch",
  name: "Cassian Vetch",
  title: "Letterpress night clerk",
  shortName: "Cassian",

  shortBio: "He keeps the night window at his late mother's letterpress shop and reads after midnight. Every card ends with a stamp: one thing small enough to do before morning.",
  greeting: "Window's open. I'm Cassian.",

  bio: "Cassian keeps the night window at Vetch and Daughter, the letterpress shop his mother ran and the city forgot to demolish. He reads after midnight, treats a reversal as a slipped plate, and ends every card with a stamp: one thing small enough to do before morning.",

  philosophy: "I stamp the sentence you were avoiding.",

  voice:
    "Second person, present tense, across a brass grille. He names a card the way a compositor names a sort of type. A reversal is the same picture with the registration off. He never says the universe, a journey, or a spirit guide. Every card ends with a stamp.",
};

/**
 * Every position the app can deal, keyed by the `role` on js/spreads.js.
 * Same card, different position, different sentence.
 */
export const POSITION_FRAMES = {
  core: "One sheet, pulled for you and held up to the grille:",
  past: "Yesterday's ink, still wet on the page you came in from:",
  present: "The sheet locked on the tympan, which is your present:",
  future: "The next pull, already inked, waiting for you:",
  center_base: "The heart of the forme, the sheet this whole job locks around:",
  center_cross: "A second plate, printed over the one you set:",
  below: "Down in the gutter, the margin you do not bill:",
  left: "Ink from the last sheet, still offsetting onto the page you are calling blank:",
  above: "What you keep aiming the press toward, whether the copy agrees or not:",
  right: "The sheet that meets you on the next pull:",
  staff_1: "How you are holding the plate, whether you have noticed your hands:",
  staff_2: "The room around you, everybody else's weather on your sheet:",
  staff_3: "The line you almost cut, the hope and the flinch sharing one sentence:",
  staff_4: "The receipt, if you leave the forme locked the way it is:",
  situation: "The job as it actually sits on the stone, not the version you wrote on the slip:",
  obstacle: "What is sitting on the type and keeping you from a clean impression:",
  advice: "The correction I would mark in the margin if you asked me what to do:",
  mind: "The copy your head has already set, before your hands agree:",
  body: "The part of this that is living in your shoulders, your sleep, your rent:",
  spirit: "The sentence under the sentence, the one you already know:",
};

function getCardLines(card, isReversed) {
  const entry = CARD_INTERPRETATIONS[card.id];
  if (!entry) {
    throw new Error(`Cassian does not keep ${card.id} in the case.`);
  }
  return isReversed ? entry.reversed : entry.upright;
}

const OPENERS = {
  question: {
    1: (q) => `Slip received: ${quoteQuestion(q)} One sheet for it. Good. Most questions are answered on one.`,
    3: (q) => `Slip received. I am reading it the way it came in: ${quoteQuestion(q)} Three sheets, then a stamp.`,
    10: (q) => `Slip received: ${quoteQuestion(q)} Ten sheets for one slip. That is a book, not a card. We will set it anyway.`,
  },
  blank: {
    1: "No slip. That is allowed. One sheet, the one you are already holding.",
    3: "No slip. I'll pull three and you can tell me afterwards what the question was.",
    10: "No slip and ten sheets. You want the whole forme without saying what you are printing. Fine. The type knows.",
  },
};

const ELEMENTAL_NOTES = {
  Fire: "The shop is running hot: mostly Wands, which is will, work, and somebody flooring the press.",
  Water: "Mostly Cups. The river under the street is up; this sheet is mostly feeling.",
  Air: "Mostly Swords: too many proofs and not enough locked type. The argument is doing the printing.",
  Earth: "Mostly Pentacles: rent, bread, and the bench. A practical job, which is still a job.",
  Spirit: "Major plates in the chase. This is not a Tuesday wedding suite.",
  mixed: "No suit has the forme. An even job, which usually means the trouble is in the lockup, not the type.",
};

const ADVICE = {
  none: {
    light: "Nothing slipped. The registration is clean. Do the stamp on the last card before you start improving the sentence.",
    heavy: "Clean registration and heavy plates. The job is big and it is printing true. Do the stamps in order and do not add a flourish.",
  },
  some: {
    light: "Some sheets are true and some are ghosting. Normal night. Handle the card in front of you and leave the next one in the rack.",
    heavy: "A plate or two slipped under a heavy forme. Lift the slipped one first. The majors will wait; they always do.",
  },
  most: {
    light: "More than half the plates slipped. That is not a haunting. That is a lockup you already know is wrong. Lift one plate tonight.",
    heavy: "Major plates, most of them slipped. Stop the press. Do not change the big thing this week. Reset one small plate and pull a proof.",
  },
};

const CLOSERS = {
  wands: (name) => `That's the sheet. It ends on ${name}, so you will want to act before the ink is dry. Let it dry. Then act. Window's open another minute.`,
  cups: (name) => `That's the sheet. It ends on ${name}. You will feel this one before you do anything about it. Feel it, then do the stamp.`,
  swords: (name) => `That's the sheet. It ends on ${name}, so you will argue with it on the way home. Keep the stamp anyway.`,
  pentacles: (name) => `That's the sheet. It ends on ${name}, which means the fix is practical and probably costs something. Pay it. The window stays open another minute, then I have a condolence card to lock up.`,
  major: (name) => `That's the sheet. It ends on ${name}. You do not get the small version of this. Keep the stamp on the last card if you keep only one.`,
};

// Said after the cards, when there are three or more: how heavy the spread is
const WEIGHT = {
  heavy: "A lot of major plates in this forme. That is not a small job. It will move the furniture.",
  light: "Mostly the everyday sorts: pips, courts, the work of a week. Still ink. Most of a life is weekdays."
};

// The closing for a single card, where there is no "last card" to point at
const CLOSER_ONE = (name) => `That's the sheet: ${name}. One card, one stamp. Keep it. The window stays open another minute.`;

/** Everything this reader says, for compose.js to assemble. */
export const VOICE = {
  profile: CASSIAN_PROFILE,
  frames: POSITION_FRAMES,
  line: getCardLines,
  reversedMark: ", printed upside down",
  signatureTag: "Stamp",
  openers: OPENERS,
  weight: WEIGHT,
  suitNotes: ELEMENTAL_NOTES,
  advice: ADVICE,
  closers: CLOSERS,
  closerOne: CLOSER_ONE
};

export const CassianVetch = {
  ...CASSIAN_PROFILE,

  interpret(spreadData) {
    return composeReading(VOICE, spreadData);
  }
};

export default CassianVetch;
