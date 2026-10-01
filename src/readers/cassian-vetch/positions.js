/** The Night Window: seven seats, each with its own way of bending a card. */

export const spread = {
  id: "night-window",
  name: "The Night Window",
  blurb: "Seven sheets. The question, the truth, the plate on top of it, the margin, the wet past, the next pull, and the receipt.",
  positions: [
    {
      id: "slip",
      name: "The Slip",
      order: 1,
      seat: "The question as it arrived under the grille",
      anchor: "under the grille",
      blurb: "What you actually asked, including the decoration.",
    },
    {
      id: "plate",
      name: "The Plate",
      order: 2,
      seat: "The sheet locked in the press",
      anchor: "on the tympan",
      blurb: "What is true right now, whether it matches the question or not.",
    },
    {
      id: "misregistration",
      name: "The Misregistration",
      order: 3,
      seat: "The plate printing over the truth",
      anchor: "over the true impression",
      blurb: "The force sitting on top of the facts.",
    },
    {
      id: "gutter",
      name: "The Gutter",
      order: 4,
      seat: "The margin you do not bill",
      anchor: "in the gutter",
      blurb: "What you drop into the unbilled edge and hope will not invoice you.",
    },
    {
      id: "yesterday",
      name: "Yesterday's Ink",
      order: 5,
      seat: "What is still offsetting onto today",
      anchor: "still offsetting",
      blurb: "The past that has not dried. It is still transferring.",
    },
    {
      id: "next",
      name: "The Next Sheet",
      order: 6,
      seat: "What the press will pull next",
      anchor: "the next pull",
      blurb: "What is already inked and about to meet you.",
    },
    {
      id: "receipt",
      name: "The Receipt",
      order: 7,
      seat: "What you will have paid if nothing is reset",
      anchor: "on the receipt",
      blurb: "The outcome while the forme stays locked as it is.",
    },
  ],
};

const composers = {
  slip(face) {
    return `You slid this under the grille as if it were the whole question. The picture on the paper is ${face.tell}. ${face.line} The stake hiding inside the wording is ${face.stake}. Answer only the slip and you will have answered what you wrote, which is sometimes smaller than what you meant.`;
  },
  plate(face) {
    return `Locked on the tympan, the sheet in the press shows ${face.tell}. ${face.line} The stake in the present tense is ${face.stake}. This is the job on the stone in front of you. Every other seat is commentary.`;
  },
  misregistration(face) {
    return `A second plate is printing over the true impression. The ghost image is ${face.tell}. ${face.line} The stake, if you leave the plates stacked, is ${face.stake}. Lift this one and the sheet underneath gets a chance to speak.`;
  },
  gutter(face) {
    return `This fell in the gutter, the margin you do not bill. Down there it looks like ${face.tell}. ${face.line} The stake you are already paying off the books is ${face.stake}. That is why your totals refuse to match your days.`;
  },
  yesterday(face) {
    return `Yesterday's ink is still offsetting onto the page you are trying to call blank. The mark it leaves is ${face.tell}. ${face.line} The stake already charged is ${face.stake}. Dry does not mean gone. The mark transfers until you slip something honest between it and today.`;
  },
  next(face) {
    return `Ink is already on the next pull. Before you meet a plan, you will meet ${face.tell}. ${face.line} The stake to carry into the next pull is ${face.stake}.`;
  },
  receipt(face) {
    return `If you leave the press as it is, the line item on the receipt is ${face.tell}. ${face.line} The stake written on the receipt is ${face.stake}. A receipt describes a lock. It is not the lock itself. The stamp is the edit you can still make.`;
  },
};

export function compose(position, face) {
  const speak = composers[position.id];
  if (!speak) throw new Error(`No interpretation logic for the seat ${position.id}.`);
  return speak(face);
}

export function openSheet(question) {
  const slip = question.trim();
  if (!slip) {
    return "No slip. That is allowed. People do this when the question is sitting in their mouth and they would rather I pull it off the sheet myself. I will. Do not tell me afterward that I answered the wrong one.";
  }
  return `Slip received. I am reading it the way it came in, decorations included: “${slip}”. If that sentence flinches, the flinch is part of the copy. I set what you wrote.`;
}

export function closeSheet(entries) {
  const byId = Object.fromEntries(entries.map((entry) => [entry.positionId, entry]));
  return `You came in under ${byId.slip.cardName} and, if the press is left alone, you leave with ${byId.receipt.cardName}. The sheet on the stone is ${byId.plate.cardName}. The plate sitting on top of it is ${byId.misregistration.cardName}. Keep the receipt's stamp if you keep only one. The others are how you reach it while the ink can still be moved. The window stays open another minute. Then I have a condolence card to lock up.`;
}
