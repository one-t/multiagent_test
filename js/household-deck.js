/**
 * Household Arcana — painted plates of the house cats, one per card, in
 * assets/household. Titles, numerals, and pip counts are drawn here so they
 * stay exact. The photographs the plates were painted from are not part of
 * the repository and are never loaded by the app.
 */

const PLATES = {
  maj_00: "/assets/household/maj_00.jpg",
  maj_01: "/assets/household/maj_01.jpg",
  maj_02: "/assets/household/maj_02.jpg",
  maj_03: "/assets/household/maj_03.jpg",
  maj_04: "/assets/household/maj_04.jpg",
  maj_05: "/assets/household/maj_05.jpg",
  maj_06: "/assets/household/maj_06.jpg",
  maj_07: "/assets/household/maj_07.jpg",
  maj_08: "/assets/household/maj_08.jpg",
  maj_09: "/assets/household/maj_09.jpg",
  maj_10: "/assets/household/maj_10.jpg",
  maj_11: "/assets/household/maj_11.jpg",
  maj_12: "/assets/household/maj_12.jpg",
  maj_13: "/assets/household/maj_13.jpg",
  maj_14: "/assets/household/maj_14.jpg",
  maj_15: "/assets/household/maj_15.jpg",
  maj_16: "/assets/household/maj_16.jpg",
  maj_17: "/assets/household/maj_17.jpg",
  maj_18: "/assets/household/maj_18.jpg",
  maj_19: "/assets/household/maj_19.jpg",
  maj_20: "/assets/household/maj_20.jpg",
  maj_21: "/assets/household/maj_21.jpg"
};

const MINOR_RANKS = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "page", "knight", "queen", "king"];
for (const suit of ["wands", "cups", "swords", "pentacles"]) {
  for (const rank of MINOR_RANKS) {
    const id = `${suit}_${rank}`;
    PLATES[id] = `/assets/household/${id}.jpg`;
  }
}

const MAJOR_ROMAN = [
  "0", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X",
  "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII", "XIX", "XX", "XXI"
];

const RANKS = {
  ace: { pips: 1, index: "A" },
  2: { pips: 2, index: "II" },
  3: { pips: 3, index: "III" },
  4: { pips: 4, index: "IV" },
  5: { pips: 5, index: "V" },
  6: { pips: 6, index: "VI" },
  7: { pips: 7, index: "VII" },
  8: { pips: 8, index: "VIII" },
  9: { pips: 9, index: "IX" },
  10: { pips: 10, index: "X" },
  page: { pips: 0, index: "P" },
  knight: { pips: 0, index: "Kn" },
  queen: { pips: 0, index: "Q" },
  king: { pips: 0, index: "K" }
};

const MAT = {
  wands: "#3a1c0e",
  cups: "#101c2e",
  swords: "#1a1e2c",
  pentacles: "#2a2214",
  major: "#160f0c"
};

// Committed copy of the portrait on the card back.
const BACK_PORTRAIT = "/assets/household/back-portrait.jpg";

let clipSeq = 0;

function esc(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function parseCardId(id) {
  if (id.startsWith("maj_")) {
    return { arcana: "major", n: Number(id.slice(4)) };
  }
  const [suit, rank] = id.split("_");
  return { arcana: "minor", suit, rank, rankInfo: RANKS[rank] };
}

function sourceFor(id) {
  // Every card has a plate. An unknown id falls back to a picture that is in
  // the repository, so a card is never a broken image.
  return PLATES[id] || BACK_PORTRAIT;
}

function titleSize(name) {
  if (name.length > 22) return 12.5;
  if (name.length > 18) return 14;
  if (name.length > 14) return 15.5;
  return 17;
}

function frameOpen(clipId, mat) {
  return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 300 480" width="300" height="480" class="tarot-card-svg tarot-front tarot-household">
  <defs>
    <clipPath id="${clipId}">
      <path d="M24 108 C24 58 276 58 276 108 L276 348 C276 378 24 378 24 348 Z"/>
    </clipPath>
    <linearGradient id="${clipId}-foil" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#f3e0a8"/>
      <stop offset="0.45" stop-color="#b8893e"/>
      <stop offset="1" stop-color="#f6e7bc"/>
    </linearGradient>
    <radialGradient id="${clipId}-vig" cx="50%" cy="40%" r="68%">
      <stop offset="52%" stop-color="#000" stop-opacity="0"/>
      <stop offset="100%" stop-color="#120c09" stop-opacity="0.78"/>
    </radialGradient>
  </defs>
  <rect width="300" height="480" rx="16" fill="${mat}"/>
  <rect x="7" y="7" width="286" height="466" rx="13" fill="none" stroke="url(#${clipId}-foil)" stroke-width="1.6"/>
  <rect x="12" y="12" width="276" height="456" rx="11" fill="none" stroke="#6e5424" stroke-width="0.6"/>`;
}

function portrait(clipId, src) {
  const safe = esc(src);
  return `
  <g clip-path="url(#${clipId})">
    <image href="${safe}" xlink:href="${safe}" x="16" y="48" width="268" height="340" preserveAspectRatio="xMidYMid slice"/>
    <rect x="16" y="48" width="268" height="340" fill="url(#${clipId}-vig)"/>
  </g>
  <path d="M24 108 C24 58 276 58 276 108 L276 348 C276 378 24 378 24 348 Z" fill="none" stroke="url(#${clipId}-foil)" stroke-width="1.25"/>`;
}

function quartet(cx, cy) {
  const colors = ["#e07a2f", "#c5bfb4", "#8ea0b8", "#d7c392"];
  return colors
    .map((color, i) => `<circle cx="${cx + (i - 1.5) * 9}" cy="${cy}" r="1.7" fill="${color}"/>`)
    .join("");
}

function indexMark(text, x, y, anchor) {
  return `<text x="${x}" y="${y}" text-anchor="${anchor}" font-family="Cinzel, Palatino, serif" font-size="13" fill="#f0d48a" letter-spacing="1.2">${esc(text)}</text>`;
}

function titleMark(name, y) {
  return `<text x="150" y="${y}" text-anchor="middle" font-family="Cinzel, Palatino, serif" font-size="${titleSize(name)}" fill="#f7ecd2" letter-spacing="0.8">${esc(name)}</text>`;
}

function majorFace(card, src) {
  const clipId = `hh${++clipSeq}`;
  const roman = MAJOR_ROMAN[Number(card.id.slice(4))] || "";
  return `${frameOpen(clipId, MAT.major)}
  ${portrait(clipId, src)}
  ${indexMark(roman, 150, 36, "middle")}
  ${titleMark(card.name, 430)}
  ${quartet(150, 450)}
</svg>`;
}

function wand(cx, cy) {
  return `<g class="hh-pip" transform="translate(${cx} ${cy})">
    <path d="M0 12 L0 -8" stroke="#e6b15a" stroke-width="1.7" stroke-linecap="round"/>
    <path d="M0 -8 C-4 -2 4 -2 0 -8" fill="#e07a2f"/>
    <circle cy="-10" r="2.1" fill="#ffd39a"/>
  </g>`;
}

function cup(cx, cy) {
  return `<g class="hh-pip" transform="translate(${cx} ${cy})">
    <path d="M-7 -8 H7 L5 2 C4 8  -4 8 -5 2 Z" fill="none" stroke="#d7e6f2" stroke-width="1.4"/>
    <path d="M-3 8 H3 L2 12 H-2 Z" fill="#d7e6f2"/>
    <path d="M-5 12 H5" stroke="#d7e6f2" stroke-width="1.3" stroke-linecap="round"/>
  </g>`;
}

function sword(cx, cy) {
  return `<g class="hh-pip" transform="translate(${cx} ${cy})">
    <path d="M0 -12 L0 6" stroke="#d5dbe8" stroke-width="1.5"/>
    <path d="M-5 6 H5" stroke="#d5dbe8" stroke-width="1.4"/>
    <path d="M0 6 L0 12" stroke="#e6b15a" stroke-width="1.6"/>
  </g>`;
}

function coin(cx, cy) {
  return `<g class="hh-pip" transform="translate(${cx} ${cy})">
    <circle r="8" fill="none" stroke="#e6c57a" stroke-width="1.4"/>
    <circle r="5" fill="none" stroke="#a8843e" stroke-width="0.7"/>
    <path d="M0 -3.2 L1.1 -0.8 L3.6 -0.6 L1.7 1.1 L2.2 3.5 L0 2.2 L-2.2 3.5 L-1.7 1.1 L-3.6 -0.6 L-1.1 -0.8 Z" fill="#e6c57a"/>
  </g>`;
}

const PIP_DRAW = { wands: wand, cups: cup, swords: sword, pentacles: coin };

function pipRow(suit, count, y) {
  if (!count) return "";
  const draw = PIP_DRAW[suit] || coin;
  const gap = count > 5 ? 28 : 34;
  const width = (count - 1) * gap;
  const start = 150 - width / 2;
  let out = "";
  for (let i = 0; i < count; i++) out += draw(start + i * gap, y);
  return out;
}

function pipFace(card, kind, src) {
  const clipId = `hh${++clipSeq}`;
  const info = kind.rankInfo || { pips: 0, index: "" };
  const top = Math.ceil(info.pips / 2);
  const bottom = info.pips - top;
  const pips = info.pips <= 5
    ? pipRow(kind.suit, info.pips, 436)
    : pipRow(kind.suit, top, 418) + pipRow(kind.suit, bottom, 452);
  return `${frameOpen(clipId, MAT[kind.suit] || MAT.major)}
  ${portrait(clipId, src)}
  ${indexMark(info.index, 28, 36, "start")}
  ${indexMark(info.index, 272, 36, "end")}
  ${titleMark(card.name, 400)}
  ${pips}
</svg>`;
}

function courtFace(card, kind, src) {
  const clipId = `hh${++clipSeq}`;
  const info = kind.rankInfo || { index: "" };
  return `${frameOpen(clipId, MAT[kind.suit] || MAT.major)}
  ${portrait(clipId, src)}
  ${indexMark(info.index, 28, 36, "start")}
  ${indexMark(info.index, 272, 36, "end")}
  ${titleMark(card.name, 424)}
  ${quartet(150, 448)}
</svg>`;
}

export function renderHouseholdFace(card) {
  const kind = parseCardId(card.id);
  const src = sourceFor(card.id);
  if (kind.arcana === "major") return majorFace(card, src);
  if (kind.rankInfo && kind.rankInfo.pips === 0) return courtFace(card, kind, src);
  return pipFace(card, kind, src);
}

export function renderHouseholdBack(width = 300, height = 480) {
  const src = esc(BACK_PORTRAIT);
  return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 300 480" width="${width}" height="${height}" class="tarot-card-svg tarot-back tarot-household-back">
  <defs>
    <radialGradient id="hh-back-glow" cx="50%" cy="46%" r="55%">
      <stop offset="0" stop-color="#3a2a18"/>
      <stop offset="1" stop-color="#100c0a"/>
    </radialGradient>
    <clipPath id="hh-back-medallion">
      <circle cx="150" cy="230" r="62"/>
    </clipPath>
    <linearGradient id="hh-back-foil" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#f3e0a8"/>
      <stop offset="0.5" stop-color="#a87a32"/>
      <stop offset="1" stop-color="#f6e7bc"/>
    </linearGradient>
  </defs>
  <rect width="300" height="480" rx="16" fill="url(#hh-back-glow)"/>
  <rect x="8" y="8" width="284" height="464" rx="12" fill="none" stroke="url(#hh-back-foil)" stroke-width="1.7"/>
  <rect x="16" y="16" width="268" height="448" rx="9" fill="none" stroke="#6e5424" stroke-width="0.7"/>
  <circle cx="150" cy="230" r="92" fill="none" stroke="#8d6a32" stroke-width="0.8"/>
  <circle cx="150" cy="230" r="78" fill="none" stroke="url(#hh-back-foil)" stroke-width="1.3"/>
  <g clip-path="url(#hh-back-medallion)">
    <image href="${src}" xlink:href="${src}" x="78" y="158" width="144" height="144" preserveAspectRatio="xMidYMid slice"/>
  </g>
  <circle cx="150" cy="230" r="62" fill="none" stroke="url(#hh-back-foil)" stroke-width="2"/>
  <path d="M150 118 L156 136 L150 132 L144 136 Z" fill="#e6c57a"/>
  <path d="M150 342 L156 324 L150 328 L144 324 Z" fill="#e6c57a"/>
  <path d="M48 230 L66 224 L62 230 L66 236 Z" fill="#e6c57a"/>
  <path d="M252 230 L234 224 L238 230 L234 236 Z" fill="#e6c57a"/>
</svg>`;
}
