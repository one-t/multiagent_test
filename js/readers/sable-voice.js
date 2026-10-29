/**
 * Sable Moreau's order for each kind of question.
 * The card guide stays. These lines are added under it when she is selected.
 * Edit the files in sable-voice/. This module only gathers them.
 */

import { SABLE_MAJOR } from "./sable-voice/majors.js";
import { SABLE_WANDS } from "./sable-voice/wands.js";
import { SABLE_CUPS } from "./sable-voice/cups.js";
import { SABLE_SWORDS } from "./sable-voice/swords.js";
import { SABLE_PENTACLES } from "./sable-voice/pentacles.js";

export const SABLE_ORDERS = {
  ...SABLE_MAJOR,
  ...SABLE_WANDS,
  ...SABLE_CUPS,
  ...SABLE_SWORDS,
  ...SABLE_PENTACLES
};

/** Said once, with the reading, not on every card. */
export function sableVoiceNote(inquiryId) {
  const which = inquiryId === "general"
    ? "Sable adds an order under each subject."
    : "Sable adds an order for this subject.";
  return `${which} Stop means stop.`;
}

export function sableOrders(cardId, isReversed) {
  const entry = SABLE_ORDERS[cardId];
  if (!entry) return null;
  return isReversed ? entry.r : entry.u;
}

function reflectionWithVoice(item, lead, others) {
  const lines = [];
  if (item.about) lines.push(item.about);
  if (item.keywords && item.keywords.length) lines.push(`Keywords: ${item.keywords.join(" · ")}`);
  if (item.general) lines.push(item.general);
  const categories = lead ? [lead] : others;
  for (const line of categories) {
    lines.push(`${line.label}: ${line.text}`);
    if (line.voice) lines.push(`Sable: ${line.voice}`);
  }
  return lines.join("\n");
}

/**
 * Put her order on every category line. The clean sentences stay where they are.
 * @param {object} reading A guide reading from composeGuide
 */
export function applySableVoice(reading) {
  if (!reading || !reading.guide) return reading;
  const cardReadings = (reading.cardReadings || []).map(item => {
    const orders = sableOrders(item.cardId, item.isReversed);
    if (!orders) return item;
    const stamp = line => {
      if (!line) return line;
      const voice = orders[line.id];
      return voice ? { ...line, voice } : line;
    };
    const lead = stamp(item.lead);
    const others = (item.others || []).map(stamp);
    return {
      ...item,
      lead,
      others,
      reflection: reflectionWithVoice(item, lead, others)
    };
  });
  return { ...reading, voiceName: "Sable", voiceNote: sableVoiceNote(reading.inquiryId), cardReadings };
}
