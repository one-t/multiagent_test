/**
 * How every built-in reader's reading is put together.
 *
 * A reader supplies its own words (position lead-ins, a line per card, openers,
 * closers and so on). This module decides the order and the rules that are the
 * same for everyone, so a fix to the shape of a reading is made once:
 *
 *   opening    said before the cards: the greeting and the question
 *   each card  a lead-in for the position, the card's line, and the reader's
 *              sign-off for that card (a Stamp, a Slip, a Rule...) set apart
 *   summary    said after the cards: how heavy the spread is. Three cards or more.
 *   suits      one sentence on the balance of suits. The app shows the counts.
 *   advice     what to do with the spread as a whole. Three cards or more;
 *              with one card, the card's own sign-off is the advice.
 *   closing    the last word, written for one card or for several
 *
 * Stage directions go in [square brackets]. The app sets them in italics so
 * they read as what the reader does, not what the reader says.
 *
 * Any of the fixed lines (an opener, a weight line, a suit note, a piece of
 * advice, a closer) may be an array of ways to say it. The deal picks which,
 * so two readings in a row do not end alike, and a reading reopened from
 * history says what it said the first time.
 */

import { ReaderRegistry } from "../reader-interface.js";

/** The user's words, quoted as they came. Nothing is added after the closing quote. */
export function quoteQuestion(question) {
  return `“${String(question).trim()}”`;
}

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

/** "…body text. Stamp: do the thing." becomes the body and the sign-off, separately. */
export function splitSignature(line, tag) {
  if (!tag) return { body: line, signature: "" };
  const marker = `${tag}: `;
  const at = line.lastIndexOf(marker);
  if (at < 0) return { body: line, signature: "" };
  return { body: line.slice(0, at).trim(), signature: line.slice(at + marker.length).trim() };
}

/** A number that is the same every time the same cards are dealt the same way up. */
function dealSeed(cards) {
  let hash = 2166136261;
  for (const { card, isReversed } of cards) {
    for (const char of `${card.id}${isReversed ? "r" : "u"}`) {
      hash = Math.imul(hash ^ char.charCodeAt(0), 16777619);
    }
  }
  return hash >>> 0;
}

/** One entry, or one of several ways of saying it. `slot` keeps the fixed lines from all picking the same variant. */
function choose(entry, seed, slot) {
  if (!Array.isArray(entry)) return entry;
  return entry[(seed >>> (slot * 3)) % entry.length];
}

/** A fixed line may be one entry or a light / heavy pair (heavy: the spread is mostly Major Arcana). */
function pick(entry, majorHeavy) {
  if (entry && typeof entry === "object" && !Array.isArray(entry)) return entry[majorHeavy ? "heavy" : "light"];
  return entry || "";
}

/**
 * @param {object} voice The reader's words
 * @param {{id: string, name: string, title: string}} voice.profile
 * @param {Record<string, string>} voice.frames Lead-in per position role; `core` is the fallback
 * @param {(card: object, isReversed: boolean) => string} voice.line The reader's line for a card
 * @param {string} [voice.reversedMark] Follows the card's name when it is reversed. Default " (reversed)".
 * @param {string} [voice.signatureTag] The label that starts the sign-off inside a card line, e.g. "Stamp"
 * @param {{question: Record<number, (q: string) => string>, blank: Record<number, string>}} voice.openers Keyed 1, 3, 10
 * @param {{heavy: string, light: string}} [voice.weight] Said after the cards, three or more
 * @param {(facts: object) => string} [voice.aside] One more sentence after the weight line (Lyle's score)
 * @param {Record<string, string>} voice.suitNotes Keyed Fire, Water, Air, Earth, Spirit, mixed
 * @param {Record<string, string | {light: string, heavy: string}>} voice.advice Keyed none, some, most (how many are reversed)
 * @param {Record<string, (name: string) => string>} voice.closers Keyed by the last card: wands, cups, swords, pentacles, major
 * @param {(name: string) => string} voice.closerOne The closing for a single card
 * @param {{cards: Array, question: string}} spreadData
 */
export function composeReading(voice, spreadData) {
  const { cards, question } = spreadData;
  const { dominant } = ReaderRegistry.analyzeElements(cards);
  const total = cards.length;
  const reversedCount = cards.filter(item => item.isReversed).length;
  const majorCount = cards.filter(item => item.card.arcana === "major").length;
  const majorHeavy = majorCount >= 3 || majorCount / total > 0.4;
  const several = total >= 3;
  const reversedMark = voice.reversedMark ?? " (reversed)";

  const cardReadings = cards.map(({ card, isReversed, position }) => {
    const keywords = isReversed ? card.keywordsReversed : card.keywordsUpright;
    const frame = voice.frames[position?.role] || voice.frames.core;
    const line = voice.line(card, isReversed);
    const { body, signature } = splitSignature(line, voice.signatureTag);
    const lead = `${frame} ${card.name}${isReversed ? reversedMark : ""}.`;

    return {
      positionIndex: position.index,
      positionName: position.name,
      cardId: card.id,
      cardName: card.name,
      cardElement: card.element,
      isReversed,
      orientation: isReversed ? "Reversed" : "Upright",
      focalKeyword: (keywords && keywords[0]) || "",
      // The parts, for the app to lay out; and the whole thing as one string
      lead,
      body,
      signatureLabel: signature ? voice.signatureTag : "",
      signature,
      reflection: `${lead} ${line}`
    };
  });

  const size = sizeKey(total);
  const asked = question && question.trim();
  const seed = dealSeed(cards);
  const opening = asked ? choose(voice.openers.question[size], seed, 0)(asked) : choose(voice.openers.blank[size], seed, 0);

  // Lines about the spread as a whole need a spread
  const facts = { total, reversedCount, majorCount, majorHeavy };
  const summary = several
    ? [voice.weight ? choose(voice.weight[majorHeavy ? "heavy" : "light"], seed, 1) : "", voice.aside ? voice.aside(facts) : ""].filter(Boolean).join(" ")
    : "";
  const elementalInsight = several ? choose(voice.suitNotes[dominant] || voice.suitNotes.mixed, seed, 2) : "";
  const bucket = reversedCount === 0 ? "none" : reversedCount / total > 0.5 ? "most" : "some";
  const actionableAdvice = several ? choose(pick(voice.advice[bucket], majorHeavy), seed, 3) || "" : "";

  const last = cards[cards.length - 1];
  const lastName = last ? last.card.name : "the card";
  const closingBenediction = choose(several ? voice.closers[lastCardKey(cards)] : voice.closerOne, seed, 4)(lastName);

  return {
    readerId: voice.profile.id,
    readerName: voice.profile.name,
    readerTitle: voice.profile.title,
    opening,
    summary,
    elementalInsight,
    cardReadings,
    actionableAdvice,
    closingBenediction
  };
}
