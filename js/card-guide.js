/**
 * The reading the app shows: what a card is, a few keywords, the usual
 * meaning, and a line for each kind of question.
 *
 * Built-in readers no longer supply this text. A custom reader still can.
 */

import { ReaderRegistry } from "./reader-interface.js";
import { LINES } from "./inquiry-lines.js";

export const INQUIRIES = [
  { id: "general", label: "General", as: "the card on its own", hint: "Keywords, the usual meaning, and every kind of question" },
  { id: "love", label: "Love", as: "love", hint: "Romance, friendship, and family" },
  { id: "work", label: "Work", as: "work", hint: "A job, a project, or a vocation" },
  { id: "money", label: "Money", as: "money", hint: "Money, home, and resources" },
  { id: "choice", label: "A decision", as: "a decision", hint: "A choice you are weighing" },
  { id: "inner", label: "Inner life", as: "inner life", hint: "Mood, meaning, and what you already know" }
];

const CATEGORY_IDS = ["love", "work", "money", "choice", "inner"];

export const INQUIRY_IDS = INQUIRIES.map(item => item.id);

export function isInquiryId(id) {
  return INQUIRY_IDS.includes(id);
}

export function getInquiry(id) {
  return INQUIRIES.find(item => item.id === id) || INQUIRIES[0];
}

// Counted only against each other. "Should I" is a decision when no subject wins.
const DOMAIN_RULES = [
  ["money", /\b(money|cash|rent|debt|debts|salary|wage|paycheck|afford|mortgage|invest|investment|savings|bills?|broke|income|finances?|financial)\b/gi],
  ["love", /\b(love|lover|relationship|partner|dating|marriage|married|marry|boyfriend|girlfriend|husband|wife|crush|romance|romantic|family|friend|friends|breakup|divorce)\b/gi],
  ["work", /\b(job|jobs|work|working|career|boss|promotion|quit|quitting|office|business|project|colleague|coworker|hired|fired|profession|resume)\b/gi],
  ["inner", /\b(anxious|anxiety|depressed|depression|purpose|spiritual|lonely|loneliness|grief|afraid|mood)\b/gi]
];

const CHOICE_RULE = /\b(should i|whether|decide|decision|choose|choice)\b/i;

/** The inquiry a question is probably about, or "general" when it is mixed or blank. */
export function guessInquiry(text) {
  const source = String(text || "");
  const scores = DOMAIN_RULES.map(([id, pattern]) => {
    const found = source.match(pattern);
    return [id, found ? found.length : 0];
  });
  const best = Math.max(...scores.map(([, count]) => count));
  if (best > 0) {
    const winners = scores.filter(([, count]) => count === best);
    if (winners.length === 1) return winners[0][0];
    return "general";
  }
  if (CHOICE_RULE.test(source)) return "choice";
  return "general";
}

export const WAITING_LINE = "Turn a card over for its keywords, its usual meaning, and how that meaning changes for love, work, money, a decision, or inner life.";

/** Said once a card is turned. The question, when there is one, is quoted and nothing is glued to the closing quote. */
export function openingLine(question, inquiryId) {
  const inquiry = getInquiry(inquiryId);
  const asked = String(question || "").trim();
  const body = inquiry.id === "general"
    ? "Each card gives a few keywords, its usual meaning, and a line for love, work, money, a decision, and inner life."
    : `Each card gives a few keywords, its usual meaning, and what that means for ${inquiry.as}. The other kinds of question are listed under it.`;
  return asked ? `“${asked}” ${body}` : body;
}

function categoriesFor(side) {
  return CATEGORY_IDS.map(id => ({ id, label: getInquiry(id).label, text: side[id] }));
}

function cardBlock({ about, keywords, general, categories }) {
  const lines = [];
  if (about) lines.push(about);
  if (keywords.length) lines.push(`Keywords: ${keywords.join(" · ")}`);
  if (general) lines.push(general);
  for (const item of categories) lines.push(`${item.label}: ${item.text}`);
  return lines.join("\n");
}

/**
 * @param {object} card A deck card
 * @param {boolean} isReversed
 * @param {string} [inquiryId]
 * @returns {{about: string, keywords: string[], general: string, lead: object|null, others: object[], reflection: string}|null}
 */
export function describeCard(card, isReversed, inquiryId = "general") {
  const entry = card && LINES[card.id];
  if (!entry) return null;
  const side = isReversed ? entry.r : entry.u;
  const inquiry = getInquiry(inquiryId);
  const keywords = (isReversed ? card.keywordsReversed : card.keywordsUpright) || [];
  const general = (isReversed ? card.meaningReversed : card.meaningUpright) || "";
  const categories = categoriesFor(side);
  const lead = inquiry.id === "general" ? null : categories.find(item => item.id === inquiry.id) || null;
  const others = lead ? categories.filter(item => item.id !== lead.id) : categories;
  return {
    about: entry.about,
    keywords,
    general,
    lead,
    others,
    reflection: cardBlock({ about: entry.about, keywords, general, categories })
  };
}

/** About-line and category lines, for the card search. */
export function guideSearchText(card) {
  const entry = card && LINES[card.id];
  if (!entry) return "";
  return [entry.about, ...CATEGORY_IDS.flatMap(id => [entry.u[id], entry.r[id]])].join("\n");
}

const ELEMENT_NOTES = {
  Fire: "Wands are the largest group. Will, desire, and the need to act are doing most of the work.",
  Water: "Cups are the largest group. Feeling, trust, and what people want from each other are doing most of the work.",
  Air: "Swords are the largest group. This turns on a thought, a conversation, or a conflict that needs a clear sentence.",
  Earth: "Pentacles are the largest group. Money, work, the shape of the week, and what you can touch are the point.",
  Spirit: "Major arcana outnumber every suit. The situation is in a larger change, not only a local problem.",
  mixed: "No suit outnumbers the others. More than one part of life is in this at once."
};

/**
 * A reading in the same shape the app already draws, plus the parts of a card guide.
 * @param {{cards: Array, question?: string}} spreadData
 * @param {string} inquiryId
 */
export function composeGuide(spreadData, inquiryId) {
  const cards = (spreadData && spreadData.cards) || [];
  const question = (spreadData && spreadData.question) || "";
  const inquiry = getInquiry(inquiryId);
  const total = cards.length;
  const several = total >= 3;
  const reversedCount = cards.filter(item => item.isReversed).length;
  const majorCount = cards.filter(item => item.card.arcana === "major").length;
  const majorHeavy = total > 0 && (majorCount >= 3 || majorCount / total > 0.4);
  const { dominant } = ReaderRegistry.analyzeElements(cards);

  const cardReadings = cards.map(({ card, isReversed, position }) => {
    const described = describeCard(card, isReversed, inquiry.id);
    const keywords = described ? described.keywords : [];
    return {
      positionIndex: position ? position.index : 0,
      positionName: position ? position.name : "",
      cardId: card.id,
      cardName: card.name,
      cardElement: card.element,
      isReversed,
      orientation: isReversed ? "Reversed" : "Upright",
      focalKeyword: keywords[0] || "",
      about: described ? described.about : "",
      keywords,
      general: described ? described.general : "",
      lead: described ? described.lead : null,
      others: described ? described.others : [],
      reflection: described ? described.reflection : ""
    };
  });

  const bucket = reversedCount === 0 ? "none" : reversedCount / total > 0.5 ? "most" : "some";
  const advice = {
    none: "Nothing is reversed. Read the cards in the order they were dealt.",
    some: "Read a reversed card as the part that is stuck, delayed, or turned inward. An upright card is the part that is available.",
    most: "More than half the cards are reversed. Something is blocked or aimed the wrong way, and the first job is to see where."
  };

  return {
    guide: true,
    inquiryId: inquiry.id,
    inquiryLabel: inquiry.label,
    opening: openingLine(question, inquiry.id),
    summary: several
      ? (majorHeavy
        ? "Most of these cards are major arcana. The question is larger than one errand or one week."
        : "Most of these cards are the everyday sort. This can be worked in ordinary steps.")
      : "",
    elementalInsight: several ? (ELEMENT_NOTES[dominant] || ELEMENT_NOTES.mixed) : "",
    cardReadings,
    actionableAdvice: several ? advice[bucket] : "",
    closingBenediction: several
      ? "These are the usual meanings of the cards, applied to the question. They are a way to think about it, not a prediction."
      : "One card is enough for a direct question. Use the line for the kind of question you chose. The others are there if the question is a different kind."
  };
}
