/**
 * Cassian Vetch — The Night Clerk
 *
 * Keeps the after-hours window at Vetch & Daughter, a letterpress shop the
 * city forgot to demolish. He reads every card as a sheet on the stone:
 * registration, gutter, receipt. A reversal is a slipped plate, not a curse.
 * Complete reading logic for all 78 cards and every seat the panel can deal.
 */

import { ReaderRegistry } from "../reader-interface.js";
import { CARD_INTERPRETATIONS } from "./cassian-lines.js";

export const CASSIAN_PROFILE = {
  id: "cassian_vetch",
  name: "Cassian Vetch",
  title: "The Night Clerk of Vetch & Daughter",
  shortName: "Cassian",
  alias: "The Night Clerk",
  location: "The after-hours window, Vetch & Daughter",
  avatar: "🪟",
  style: "letterpress",

  bio: "Cassian keeps the night window at his mother's letterpress shop, the one the city rezoned and then forgot to demolish. Adele Vetch kept a tarot deck in the drawer with the damaged type and called it a proofing tool: people bring copy they have already lied to, and the cards show the lie without an argument. When she died she left the window unlocked and a note on the tympan — the stacks already know, the cards just refuse to file it. He reads after midnight, at condolence-card rates, and he ends every seat with a stamp: one thing small enough to do before morning.",

  philosophy: "He stamps the sentence you were avoiding.",

  backstory: `Cassian Vetch keeps the night window at Vetch & Daughter, a letterpress shop the city rezoned out of existence and then forgot to demolish. His mother, Adele Vetch, printed wedding suites, radical pamphlets, and funeral cards on the same Vandercook. She kept a tarot deck in the drawer with the damaged type: letters that still printed, just not where a careful customer would want them. She called the deck a proofing tool. People, she said, bring copy they have already lied to. The cards are how you see the lie without arguing.

When Adele died she left the night window unlocked and a note on the tympan: The stacks already know. The cards just refuse to file it. Cassian was twenty-six, a compositor by trade, and allergic to the word oracle. He stayed because the questions kept arriving on torn slips, and because a misregistered life bothered him the way a misregistered page does.

He reads after midnight. He charges what the old price list charged for a condolence card, and he waives it when someone is clearly spending their last bus fare on the truth. No guides, no crystals, a bad knee from the stone. He remembers the question. He forgets the name unless you print it clearly. Regulars call him the Night Clerk. He answers to that.`,

  voice:
    "Second person, present tense, across a brass grille. He names a card the way a compositor names a sort of type. A reversal is the same picture with the registration off. He never says the universe, a journey, or a spirit guide. Every seat ends with a stamp.",

  favoriteLines: [
    "Window's open. I'm Cassian.",
    "I sell registration. If the picture is ugly we say it is ugly.",
    "A receipt describes a lock. It is not the lock.",
    "Keep the stamp if you keep only one.",
  ],
};

/**
 * Every seat the altar can deal, keyed by the `role` on js/spreads.js,
 * plus the three-card themes the app renames at runtime (those positions
 * arrive without a role). Same card, different seat, different sentence.
 */
export const POSITION_FRAMES = {
  core: "One sheet, pulled for you and held up to the grille:",
  past: "Yesterday's ink, still wet on the page you came in from:",
  present: "The sheet locked on the tympan, which is your present:",
  future: "The next pull, already inked, waiting for you:",
  center_base: "The heart of the forme, the sheet this whole job locks around you:",
  center_cross: "A second plate, printing over the true impression you actually set:",
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

function getPositionFrame(position) {
  if (position?.role && POSITION_FRAMES[position.role]) return POSITION_FRAMES[position.role];
  const name = String(position?.name || "").toLowerCase();
  if (name.includes("situation")) return POSITION_FRAMES.situation;
  if (name.includes("obstacle")) return POSITION_FRAMES.obstacle;
  if (name.includes("advice")) return POSITION_FRAMES.advice;
  if (name.includes("mind")) return POSITION_FRAMES.mind;
  if (name.includes("body")) return POSITION_FRAMES.body;
  if (name.includes("spirit")) return POSITION_FRAMES.spirit;
  return POSITION_FRAMES.core;
}

function getCardLines(card, isReversed) {
  const entry = CARD_INTERPRETATIONS[card.id];
  if (!entry) {
    throw new Error(`Cassian does not keep ${card.id} in the case.`);
  }
  return isReversed ? entry.reversed : entry.upright;
}

function elementalFlavor(dominant) {
  switch (dominant) {
    case "Fire":
      return "the shop is running hot — will, work, and somebody flooring the press";
    case "Water":
      return "the river under the street is up — this sheet is mostly feeling";
    case "Air":
      return "too many proofs and not enough locked type — the argument is doing the printing";
    case "Earth":
      return "rent, bread, and the bench — a practical job, which is still a job";
    default:
      return "major plates in the chase — this is not a Tuesday wedding suite";
  }
}

export const CassianVetch = {
  ...CASSIAN_PROFILE,

  interpret(spreadData) {
    const { cards, question } = spreadData;
    const { counts, dominant } = ReaderRegistry.analyzeElements(cards);
    const total = cards.length;
    const reversedCount = cards.filter((item) => item.isReversed).length;

    const cardReadings = cards.map(({ card, isReversed, position }) => {
      const keywords = isReversed ? card.keywordsReversed : card.keywordsUpright;
      const frame = getPositionFrame(position);
      const line = getCardLines(card, isReversed);
      return {
        positionIndex: position.index,
        positionName: position.name,
        positionSubtitle: position.subtitle,
        cardId: card.id,
        cardName: card.name,
        cardElement: card.element,
        isReversed,
        orientation: isReversed ? "Slipped plate" : "Upright",
        focalKeyword: (keywords && keywords[0]) || "",
        reflection: `${frame} ${card.name}${isReversed ? ", printed upside down" : ""}. ${line}`,
      };
    });

    const queryContext =
      question && question.trim()
        ? `Slip received. I am reading it the way it came in: "${question.trim()}".`
        : "No slip. That is allowed. I'll pull the sheet you are already holding.";

    const majorCount = cards.filter((item) => item.card.arcana === "major").length;
    const weightNote =
      majorCount >= 3 || majorCount / total > 0.4
        ? "A lot of major plates in this forme. That is not a small job. It will move the furniture."
        : "Mostly the everyday sorts — pips, courts, the work of a week. Still ink. Most of a life is weekdays.";

    const summary = `${queryContext} ${weightNote}`;
    const elementalInsight = `Wands ${counts.Fire} · Cups ${counts.Water} · Swords ${counts.Air} · Pentacles ${counts.Earth}${
      counts.Spirit ? ` · Majors ${counts.Spirit}` : ""
    } — ${elementalFlavor(dominant)}.`;

    let actionableAdvice;
    if (reversedCount === 0) {
      actionableAdvice =
        "Nothing slipped. The registration is clean. Do the stamp on the last card before you start improving the sentence.";
    } else if (reversedCount / total > 0.5) {
      actionableAdvice =
        "More than half the plates slipped. That is not a haunting. That is a lockup you already know is wrong. Lift one plate tonight.";
    } else {
      actionableAdvice =
        "Some sheets are true and some are ghosting. Normal night. Handle the seat in front of you and leave the next one in the rack.";
    }

    const closingBenediction =
      "That's the sheet. Keep the stamp on the last card if you keep only one. The window stays open another minute, then I have a condolence card to lock up.";

    return {
      readerId: this.id,
      readerName: this.name,
      readerTitle: this.title,
      summary,
      elementalInsight,
      cardReadings,
      actionableAdvice,
      closingBenediction,
    };
  },
};

export default CassianVetch;
