/**
 * Lyle Pasternak — The Parking-Lot Ethicist
 *
 * Fired from an ethics department for grading students like restaurant
 * inspections. He reads tarot from a folding table in a dead Circuit City
 * lot. He does not believe in magic. He believes people are predictable
 * and the pictures make it embarrassing. Every seat ends with a fortune
 * slip, because he used to stuff them and he was fired for accuracy.
 */

import { ReaderRegistry } from "../reader-interface.js";
import { CARD_INTERPRETATIONS } from "./lyle-lines.js";

export const LYLE_PROFILE = {
  id: "lyle_pasternak",
  name: "Lyle Pasternak",
  title: "The Parking-Lot Ethicist",
  shortName: "Lyle",
  alias: "Don't",
  location: "Folding table, dead Circuit City lot, off the service road",
  companion: "A deck in a Ziploc, next to half a Slim Jim",
  avatar: "🎟️",
  style: "unhinged",

  bio: "Former substitute ethics lecturer. Fired. Now scores your life out of ten from a card table in a parking lot the store abandoned. He argues with the cards, mentions his ex-wife Doris and her laminator too often, and is right often enough that people come back angry.",

  philosophy: "One star. Would not recommend. Still correct.",

  backstory: `Lyle Pasternak taught ethics the way a health inspector teaches dinner: by failing the kitchen in public. The department called it "a tone problem." Lyle called the dean's paper "a cry for help with better fonts," and that was the end of the key card, the office fern, and what he refers to as his academic era.

Doris left the same winter for a man who owns a laminator and, Lyle will tell you, a personality. He kept the tarot deck she had bought as a joke at a highway gift shop. He keeps it in a Ziploc so the lot doesn't get into the cards, which is the only boundary he has successfully maintained. The Slim Jim is not a metaphor. It is lunch.

He sets the folding table up under the dead Circuit City sign when the weather isn't actively insulting him. Five dollars, or whatever is in the cup, which is usually not five dollars. He does not believe the cards are magic. He believes you already know the bad idea, and the picture is just how we make it embarrassing enough to hear. He laughs too long. He scores things. He talks to the deck like a coworker who also hates the shift. Regulars call him Don't, because that is how most of his sentences start. He answers to it.`,

  voice:
    "Second person, present tense, too loud for a parking lot. He addresses you as contestant or pal. A reversal is the card face-down in the dip, trying to resign. He never says the universe, a spirit guide, a twin flame, vibrational anything, your journey, as above so below, or that everything happens for a reason. Every seat ends with a Slip, a fortune-cookie line he would have been fired for.",

  favoriteLines: [
    "Sit down, contestant. The lot is full and none of them are clapping.",
    "I don't do hope. I do the picture, and then I score it.",
    "Doris laminated her way out. You don't get that option.",
    "Keep the slip. It's the only honest thing in the bag."
  ]
};

/**
 * Every seat the altar can deal, keyed by the role on js/spreads.js,
 * plus the three-card themes the app renames at runtime.
 */
export const POSITION_FRAMES = {
  core: "One card, contestant. Try not to clap. The lot is full of people who clapped:",
  past: "Rear of the lot, where you parked the version of this you already lived:",
  present: "Right now, under the busted Circuit City sign, which is your life at this minute:",
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
    throw new Error(`Lyle does not keep ${card.id} in the Ziploc.`);
  }
  return isReversed ? entry.reversed : entry.upright;
}

function elementalFlavor(dominant) {
  switch (dominant) {
    case "Fire":
      return "too much throttle and not enough adult. Everybody in this spread is flooring it";
    case "Water":
      return "feelings, fog, and somebody about to cry in a way they will later call depth";
    case "Air":
      return "all argument, no landing. The swords are doing the talking and they are unpaid";
    case "Earth":
      return "rent, food, and the coin. A practical mess, which is still a mess";
    default:
      return "big ugly majors. This is not a Tuesday. This is a personnel issue";
  }
}

export const LylePasternak = {
  ...LYLE_PROFILE,

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
        orientation: isReversed ? "Face-down in the dip" : "Upright, unfortunately",
        focalKeyword: (keywords && keywords[0]) || "",
        reflection: `${frame} ${card.name}${isReversed ? ", and it's trying to resign" : ""}. ${line}`
      };
    });

    const queryContext =
      question && question.trim()
        ? `You asked, and I quote, "${question.trim()}". Contestant, that question already knows the answer. I'm just here to make it rude.`
        : "No question. Bold. I'll read the mess you carried in on your coat, pal.";

    const majorCount = cards.filter((item) => item.card.arcana === "major").length;
    const weightNote =
      majorCount >= 3 || majorCount / total > 0.4
        ? "A pile of majors. That's not a mood. That's the furniture moving, and you are the furniture."
        : "Mostly the small cards. Weekday trouble. Don't look relieved. Weekdays are where people ruin themselves.";

    const summary = `${queryContext} ${weightNote}`;
    const elementalInsight = `Wands ${counts.Fire} · Cups ${counts.Water} · Swords ${counts.Air} · Pentacles ${counts.Earth}${
      counts.Spirit ? ` · Majors ${counts.Spirit}` : ""
    } — ${elementalFlavor(dominant)}. Score: I don't do scores until you stop explaining. Fine. ${Math.max(1, 6 - reversedCount)} out of 10, and I'm being generous because the Slim Jim was good.`;

    let actionableAdvice;
    if (reversedCount === 0) {
      actionableAdvice =
        "Nothing came up trying to leave. The pictures are face-up and they still indict you. Do the last slip before you improve it into a lie.";
    } else if (reversedCount / total > 0.5) {
      actionableAdvice =
        "More than half the deck is face-down in the dip. That isn't a curse. That's a shift you already know is bad. Quit one thing tonight. One.";
    } else {
      actionableAdvice =
        "Mixed bag. Some of it is true, some of it is you. Normal. Handle the seat in front of you and stop shopping for a better omen in the cup holder.";
    }

    const closingBenediction =
      "That's the reading. Keep the last slip if you keep only one. The table folds at dark, Doris has the laminator, and I am not your friend. Next.";

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

export default LylePasternak;
