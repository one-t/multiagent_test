import { deck } from "../../../deck.js";
import { cups } from "./cups.js";
import { major } from "./major.js";
import { pentacles } from "./pentacles.js";
import { swords } from "./swords.js";
import { wands } from "./wands.js";

export const dossiers = {
  ...major,
  ...wands,
  ...cups,
  ...swords,
  ...pentacles,
};

const FIELDS = ["tell", "line", "stake", "stamp"];

export function assertDossiers(cards = deck) {
  const problems = [];
  const extras = new Set(Object.keys(dossiers));

  for (const card of cards) {
    extras.delete(card.id);
    const dossier = dossiers[card.id];
    if (!dossier) {
      problems.push(`missing ${card.id}`);
      continue;
    }
    for (const side of ["upright", "reversed"]) {
      const entry = dossier[side];
      if (!entry) {
        problems.push(`missing ${card.id}.${side}`);
        continue;
      }
      for (const field of FIELDS) {
        if (typeof entry[field] !== "string" || entry[field].trim().length < 8) {
          problems.push(`thin ${card.id}.${side}.${field}`);
        }
      }
    }
  }

  for (const extra of extras) problems.push(`extra ${extra}`);
  if (problems.length > 0) {
    throw new Error(`Cassian's card case is wrong:\n${problems.join("\n")}`);
  }
}

assertDossiers();
