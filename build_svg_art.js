/**
 * Build Script: Feline Mystica SVG Art Engine
 * Assembles Feline Mystica Illustrated Deck (and line-art fallbacks) into js/svg-art.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function buildSvgArt() {
  console.log('Compiling Feline Mystica Tarot Art Engine...');

  const srcDir = path.join(__dirname, 'src', 'art');
  const catDir = path.join(srcDir, 'cat-deck');

  // Feline Emblems and Fallback Art Source Files
  const catEmblemsSrc = fs.readFileSync(path.join(catDir, 'cat-emblems.js'), 'utf8');
  const catMajorSrc = fs.readFileSync(path.join(catDir, 'cat-major-arcana.js'), 'utf8');
  const catMinorSrc = fs.readFileSync(path.join(catDir, 'cat-minor-arcana.js'), 'utf8');

  // Strip exports & internal imports for single-bundle packaging
  const cleanCatEmblems = catEmblemsSrc.replace(/export\s+/g, '');
  const cleanCatMajor = catMajorSrc
    .replace(/import\s+[^;]+;/g, '')
    .replace(/export\s+/g, '');
  const cleanCatMinor = catMinorSrc
    .replace(/import\s+[^;]+;/g, '')
    .replace(/export\s+/g, '');

  const parts = [];

  parts.push(`/**
 * Feline Mystica Tarot Art Engine (Generated)
 * Masterpiece Illustrated Deck referencing real cat photos, with line-art fallbacks
 */

// --- FELINE EMBLEMS & ARTIFACTS ---
`);
  parts.push(cleanCatEmblems);
  parts.push(`\n// --- FELINE 22 MAJOR ARCANA FALLBACK ART ---\n`);
  parts.push(cleanCatMajor);
  parts.push(`\n// --- FELINE MINOR ARCANA ENGINE (COURTS, ACES, PIPS) ---\n`);
  parts.push(cleanCatMinor);

  parts.push(`\n// ============================================================
// FELINE MYSTICA (MASTERPIECE ILLUSTRATED DECK)
// ============================================================

const FELINE_MYSTICA_IMAGES = {
  'maj_00': 'the_fool.jpg',
  'maj_01': 'the_magician.jpg',
  'maj_02': 'the_high_priestess.jpg',
  'maj_03': 'the_empress.jpg',
  'maj_04': 'the_emperor.jpg',
  'maj_05': 'the_hierophant.jpg',
  'maj_06': 'the_lovers.jpg',
  'maj_07': 'the_chariot.jpg',
  'maj_08': 'strength.jpg',
  'maj_09': 'the_hermit.jpg',
  'maj_10': 'the_wheel_of_fortune.jpg',
  'maj_11': 'justice.jpg',
  'maj_12': 'the_hanged_man.jpg',
  'maj_13': 'death.jpg',
  'maj_14': 'temperance.jpg',
  'maj_15': 'the_devil.jpg',
  'maj_16': 'the_tower.jpg',
  'maj_17': 'the_star.jpg',
  'maj_18': 'the_moon.jpg',
  'maj_19': 'the_sun.jpg',
  'maj_20': 'judgement.jpg',
  'maj_21': 'the_world.jpg',
  'wands_ace': 'ace_of_wands.jpg',
  'cups_ace': 'ace_of_cups.jpg',
  'swords_ace': 'ace_of_swords.jpg',
  'pentacles_ace': 'ace_of_pentacles.jpg',
  'wands_king': 'king_of_wands.jpg',
  'wands_queen': 'queen_of_wands.jpg',
  'wands_knight': 'knight_of_wands.jpg',
  'wands_page': 'page_of_wands.jpg',
  'cups_king': 'king_of_cups.jpg',
  'cups_queen': 'queen_of_cups.jpg',
  'cups_knight': 'knight_of_cups.jpg',
  'swords_king': 'king_of_swords.jpg',
  'swords_queen': 'queen_of_swords.jpg',
  'swords_knight': 'knight_of_swords.jpg',
  'pentacles_king': 'king_of_pentacles.jpg',
  'pentacles_queen': 'queen_of_pentacles.jpg',
  'pentacles_knight': 'knight_of_pentacles.jpg',
  'cups_page': 'page_of_cups.jpg',
  'swords_page': 'page_of_swords.jpg',
  'pentacles_page': 'page_of_pentacles.jpg',
  'wands_2': 'two_of_wands.jpg',
  'wands_3': 'three_of_wands.jpg',
  'wands_4': 'four_of_wands.jpg',
  'wands_5': 'five_of_wands.jpg',
  'wands_6': 'six_of_wands.jpg',
  'wands_7': 'seven_of_wands.jpg',
  'wands_8': 'eight_of_wands.jpg',
  'wands_9': 'nine_of_wands.jpg',
  'wands_10': 'ten_of_wands.jpg',
  'cups_2': 'two_of_cups.jpg',
  'cups_3': 'three_of_cups.jpg',
  'cups_4': 'four_of_cups.jpg',
  'cups_5': 'five_of_cups.jpg',
  'cups_6': 'six_of_cups.jpg',
  'cups_7': 'seven_of_cups.jpg',
  'cups_8': 'eight_of_cups.jpg',
  'cups_9': 'nine_of_cups.jpg'
};

function _renderFelineMysticaCardBackSvg(width = 300, height = 480) {
  return \`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 480" width="\${width}" height="\${height}" class="tarot-card-svg tarot-back-feline tarot-back-mystica">
  <defs>
    <radialGradient id="backEyeAura" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#ffd700" stop-opacity="0.8" />
      <stop offset="100%" stop-color="#d4af37" stop-opacity="0" />
    </radialGradient>
    <pattern id="backSacredGrid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 40 M 0 0 L 40 40" fill="none" stroke="#d4af37" stroke-width="0.3" stroke-opacity="0.25" />
    </pattern>
    <clipPath id="backClip_mystica">
      <rect x="0" y="0" width="300" height="480" rx="16" ry="16" />
    </clipPath>
  </defs>
  <g clip-path="url(#backClip_mystica)">
    <image href="/assets/feline-mystica/card_back.jpg" x="0" y="0" width="300" height="480" preserveAspectRatio="xMidYMid slice" />
  </g>
</svg>\`;
}

function _renderFelineMysticaCardFaceSvg(card) {
  if (!card) return '';
  const cid = card.id;
  const nameUpper = card.name.toUpperCase();
  const numText = card.number || '';
  const esotericTitle = card.esotericTitle || '';
  const imgName = FELINE_MYSTICA_IMAGES[cid];

  let artContent = '';
  let customDefs = '';
  // A painted plate has the card's name painted into it. It runs down to the border and the
  // frame's own name plate is left off, so the name is not shown twice. (The plates are 848x1264.)
  const painted = Boolean(imgName);
  const artHeight = painted ? 426 : 382;

  if (imgName) {
    artContent = \`<image href="/assets/feline-mystica/\${imgName}" x="12" y="42" width="276" height="\${artHeight}" preserveAspectRatio="xMidYMid slice" />\`;
  } else if (card.arcana === 'major') {
    const art = CAT_MAJOR_ARCANA_ART[cid];
    if (art) {
      customDefs = art.defs || '';
      artContent = \`<rect x="12" y="42" width="276" height="382" fill="#0d091a" />
        <radialGradient id="mysticaGlow_\${cid}" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#2a164d" stop-opacity="0.9" />
          <stop offset="100%" stop-color="#080512" stop-opacity="0.95" />
        </radialGradient>
        <rect x="12" y="42" width="276" height="382" fill="url(#mysticaGlow_\${cid})" />
        \${art.svg || ''}\`;
    }
  } else if (card.rank === 'ace') {
    const art = renderCatAceCardArt(card);
    customDefs = art.defs || '';
    artContent = \`<rect x="12" y="42" width="276" height="382" fill="#0d091a" />\${art.svg || ''}\`;
  } else if (['page', 'knight', 'queen', 'king'].includes(card.rank)) {
    const art = renderCatCourtCardArt(card);
    customDefs = art.defs || '';
    artContent = \`<rect x="12" y="42" width="276" height="382" fill="#0d091a" />\${art.svg || ''}\`;
  } else {
    const art = renderCatPipCardArt(card);
    customDefs = art.defs || '';
    artContent = \`<rect x="12" y="42" width="276" height="382" fill="#0d091a" />\${art.svg || ''}\`;
  }

  return \`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 480" width="300" height="480" class="tarot-card-svg tarot-front tarot-feline-theme tarot-mystica-theme" data-id="\${cid}">
  <title>\${card.name}</title>
  <defs>
    <linearGradient id="mysticaStockGrad_\${cid}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#181126" />
      <stop offset="50%" stop-color="#0e0a17" />
      <stop offset="100%" stop-color="#050308" />
    </linearGradient>
    <linearGradient id="mysticaGoldGrad_\${cid}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fff8db" />
      <stop offset="30%" stop-color="#ffd56b" />
      <stop offset="70%" stop-color="#d4af37" />
      <stop offset="100%" stop-color="#8a6d1c" />
    </linearGradient>
    <clipPath id="artClip_\${cid}">
      <rect x="12" y="42" width="276" height="\${artHeight}" rx="10" />
    </clipPath>
    \${customDefs}
  </defs>
  <rect width="300" height="480" rx="16" fill="url(#mysticaStockGrad_\${cid})" stroke="#020104" stroke-width="2" />
  <rect x="6" y="6" width="288" height="468" rx="12" fill="none" stroke="url(#mysticaGoldGrad_\${cid})" stroke-width="1.3" opacity="0.95" />
  <rect x="10" y="10" width="280" height="460" rx="9" fill="none" stroke="#ffd56b" stroke-dasharray="3, 4" stroke-width="0.7" opacity="0.45" />
  \${CAT_EMBLEMS.paw(19, 19, 4.5, '#ffd56b', 0.8)}
  \${CAT_EMBLEMS.paw(281, 19, 4.5, '#ffd56b', 0.8)}
  \${CAT_EMBLEMS.paw(19, 461, 4.5, '#ffd56b', 0.8)}
  \${CAT_EMBLEMS.paw(281, 461, 4.5, '#ffd56b', 0.8)}
  <g id="mysticaHeader_\${cid}">
    <rect x="90" y="12" width="120" height="22" rx="4" fill="#0d0914" fill-opacity="0.9" stroke="url(#mysticaGoldGrad_\${cid})" stroke-width="0.9" />
    <text x="150" y="27" font-family="'Cinzel', Georgia, serif" font-size="11" font-weight="700" fill="#ffd700" text-anchor="middle" letter-spacing="2.5">\${numText || '✦'}</text>
  </g>
  <g clip-path="url(#artClip_\${cid})">
    \${artContent}
  </g>
  <rect x="12" y="42" width="276" height="\${artHeight}" rx="10" fill="none" stroke="url(#mysticaGoldGrad_\${cid})" stroke-width="1.1" opacity="0.85" />
  \${painted ? '' : \`<g id="mysticaFooter_\${cid}">
    <rect x="16" y="428" width="268" height="40" rx="6" fill="#0b0813" fill-opacity="0.94" stroke="url(#mysticaGoldGrad_\${cid})" stroke-width="1.2" />
    <text x="150" y="446" font-family="'Cinzel', Georgia, serif" font-size="11" font-weight="700" fill="#fdf6d8" text-anchor="middle" letter-spacing="2">\${nameUpper}</text>
    <text x="150" y="459" font-family="'Cinzel', serif" font-size="7.5" font-weight="400" fill="#d4af37" text-anchor="middle" letter-spacing="1.2">\${esotericTitle ? esotericTitle.toUpperCase() : ''}</text>
  </g>\`}
</svg>\`;
}

// ============================================================
// DECK THEME STATE & PUBLIC API
// ============================================================

let currentDeckTheme = 'feline_mystica';

export function setDeckTheme(theme) {
  currentDeckTheme = 'feline_mystica';
}

export function getDeckTheme() {
  return currentDeckTheme;
}

export function renderCardBackSvg(width = 300, height = 480, theme = currentDeckTheme) {
  return _renderFelineMysticaCardBackSvg(width, height);
}

export function renderCardFaceSvg(card, theme = currentDeckTheme) {
  if (!card) return '';
  return _renderFelineMysticaCardFaceSvg(card);
}

// Explicit themed helpers
export const renderFelineMysticaCardFaceSvg = _renderFelineMysticaCardFaceSvg;
export const renderFelineMysticaCardBackSvg = _renderFelineMysticaCardBackSvg;
`);

  const bundledScript = parts.join('');
  const outPath = path.join(__dirname, 'js', 'svg-art.js');
  // node build_svg_art.js --check: change nothing, and fail if js/svg-art.js is not what this would write
  if (process.argv.includes('--check')) {
    const same = fs.readFileSync(outPath, 'utf8').replace(/\r\n/g, '\n') === bundledScript.replace(/\r\n/g, '\n');
    console.log(same ? 'js/svg-art.js is up to date.' : 'js/svg-art.js differs from what build_svg_art.js would write.');
    process.exit(same ? 0 : 1);
  }
  fs.writeFileSync(outPath, bundledScript, 'utf8');
  console.log('Successfully generated ' + outPath + ' (' + (bundledScript.length / 1024).toFixed(1) + ' KB)');
}

buildSvgArt().catch(console.error);
