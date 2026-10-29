/**
 * What each card means for a kind of question.
 * Edit the files in js/inquiry/. This module only gathers them.
 * The lines describe the card, not a picture from any one deck.
 */

import { MAJOR_LINES } from "./inquiry/majors.js";
import { WANDS_LINES } from "./inquiry/wands.js";
import { CUPS_LINES } from "./inquiry/cups.js";
import { SWORDS_LINES } from "./inquiry/swords.js";
import { PENTACLES_LINES } from "./inquiry/pentacles.js";

export const LINES = {
  ...MAJOR_LINES,
  ...WANDS_LINES,
  ...CUPS_LINES,
  ...SWORDS_LINES,
  ...PENTACLES_LINES
};
