/**
 * Build Script: Unified Tarot SVG Art Engine
 * Assembles Surrealist Deck, Feline Familiars Alt Deck, and Feline Mystica Illustrated Deck into js/svg-art.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function buildSvgArt() {
  console.log('Compiling Multi-Deck Tarot Art Engines (Surrealist, Feline Familiars & Feline Mystica)...');

  const srcDir = path.join(__dirname, 'src', 'art');
  const catDir = path.join(srcDir, 'cat-deck');

  // Surrealist Art Source Files
  const emblemsSrc = fs.readFileSync(path.join(srcDir, 'emblems.js'), 'utf8');
  const cardBackSrc = fs.readFileSync(path.join(srcDir, 'card-back.js'), 'utf8');
  const cardFrameSrc = fs.readFileSync(path.join(srcDir, 'card-frame.js'), 'utf8');
  const majorArcanaSrc = fs.readFileSync(path.join(srcDir, 'major-arcana.js'), 'utf8');
  const minorArcanaSrc = fs.readFileSync(path.join(srcDir, 'minor-arcana.js'), 'utf8');

  // Feline Familiars Source Files
  const catEmblemsSrc = fs.readFileSync(path.join(catDir, 'cat-emblems.js'), 'utf8');
  const catBackSrc = fs.readFileSync(path.join(catDir, 'cat-back.js'), 'utf8');
  const catFrameSrc = fs.readFileSync(path.join(catDir, 'cat-frame.js'), 'utf8');
  const catMajorSrc = fs.readFileSync(path.join(catDir, 'cat-major-arcana.js'), 'utf8');
  const catMinorSrc = fs.readFileSync(path.join(catDir, 'cat-minor-arcana.js'), 'utf8');

  // Strip exports & internal imports for single-bundle packaging
  const cleanEmblems = emblemsSrc.replace(/export\s+/g, '');
  const cleanCardBack = cardBackSrc.replace(/export\s+function\s+renderCardBackSvg/, 'function _renderCardBackSvg');
  const cleanCardFrame = cardFrameSrc.replace(/export\s+/g, '');
  const cleanMajor = majorArcanaSrc.replace(/export\s+/g, '');
  const cleanMinor = minorArcanaSrc
    .replace(/import\s+[^;]+;/g, '')
    .replace(/export\s+/g, '');

  const cleanCatEmblems = catEmblemsSrc.replace(/export\s+/g, '');
  const cleanCatBack = catBackSrc.replace(/export\s+function\s+renderCatCardBackSvg/, 'function _renderCatCardBackSvg');
  const cleanCatFrame = catFrameSrc
    .replace(/import\s+[^;]+;/g, '')
    .replace(/export\s+/g, '');
  const cleanCatMajor = catMajorSrc
    .replace(/import\s+[^;]+;/g, '')
    .replace(/export\s+/g, '');
  const cleanCatMinor = catMinorSrc
    .replace(/import\s+[^;]+;/g, '')
    .replace(/export\s+/g, '');

  const bundledScript = `/**
 * Multi-Deck Tarot Art Engine (Generated)
 * Includes:
 * 1. Classic Surrealist Altar Tarot (78 cards + Reversible Celestial Back)
 * 2. Feline Familiars Alt Deck (78 cards + Reversible Feline Back)
 * 3. Feline Mystica Alt Deck (Masterpiece Illustrated Deck referencing real cat photos)
 */

// ============================================================
// PART 1: SURREALIST TAROT ENGINE
// ============================================================

// --- SUIT EMBLEMS ---
${cleanEmblems}

// --- CARD FRAME & THEMES ---
${cleanCardFrame}

// --- 22 MAJOR ARCANA MASTERPIECES ---
${cleanMajor}

// --- MINOR ARCANA ENGINE (ACES, PIPS, COURTS) ---
${cleanMinor}

// --- CARD BACK GENERATOR ---
${cleanCardBack}

function _renderSurrealistCardFaceSvg(card) {
  if (!card) return '';

  let customDefs = '';
  let artworkSvg = '';

  if (card.arcana === 'major') {
    const art = MAJOR_ARCANA_ART[card.id];
    if (art) {
      customDefs = art.defs || '';
      artworkSvg = art.svg || '';
    } else {
      artworkSvg = '<circle cx="150" cy="230" r="40" fill="#ffd700" />';
    }
  } else if (card.rank === 'ace') {
    const art = renderAceCardArt(card);
    customDefs = art.defs || '';
    artworkSvg = art.svg || '';
  } else if (['page', 'knight', 'queen', 'king'].includes(card.rank)) {
    const art = renderCourtCardArt(card);
    customDefs = art.defs || '';
    artworkSvg = art.svg || '';
  } else {
    const art = renderPipCardArt(card);
    customDefs = art.defs || '';
    artworkSvg = art.svg || '';
  }

  return createCardFrame(card, artworkSvg, customDefs);
}

// ============================================================
// PART 2: FELINE FAMILIARS ALT DECK ENGINE
// ============================================================

// --- FELINE EMBLEMS & ARTIFACTS ---
${cleanCatEmblems}

// --- FELINE CARD FRAME ---
${cleanCatFrame}

// --- FELINE 22 MAJOR ARCANA ---
${cleanCatMajor}

// --- FELINE MINOR ARCANA ENGINE ---
${cleanCatMinor}

// --- FELINE CARD BACK GENERATOR ---
${cleanCatBack}

function _renderCatCardFaceSvg(card) {
  if (!card) return '';

  let customDefs = '';
  let artworkSvg = '';

  if (card.arcana === 'major') {
    const art = CAT_MAJOR_ARCANA_ART[card.id];
    if (art) {
      customDefs = art.defs || '';
      artworkSvg = art.svg || '';
    } else {
      artworkSvg = '<circle cx="150" cy="230" r="40" fill="#ffd700" />';
    }
  } else if (card.rank === 'ace') {
    const art = renderCatAceCardArt(card);
    customDefs = art.defs || '';
    artworkSvg = art.svg || '';
  } else if (['page', 'knight', 'queen', 'king'].includes(card.rank)) {
    const art = renderCatCourtCardArt(card);
    customDefs = art.defs || '';
    artworkSvg = art.svg || '';
  } else {
    const art = renderCatPipCardArt(card);
    customDefs = art.defs || '';
    artworkSvg = art.svg || '';
  }

  return createCatCardFrame(card, artworkSvg, customDefs);
}

// ============================================================
// PART 3: FELINE MYSTICA (MASTERPIECE ILLUSTRATED DECK)
// ============================================================

const FELINE_MYSTICA_IMAGES = {
  'maj_00': 'the_fool.jpg',
  'maj_01': 'the_magician.jpg',
  'maj_02': 'the_high_priestess.jpg',
  'maj_03': 'the_empress.jpg',
  'maj_04': 'the_emperor.jpg',
  'maj_06': 'the_lovers.jpg',
  'maj_08': 'strength.jpg',
  'maj_09': 'the_hermit.jpg',
  'maj_11': 'justice.jpg',
  'maj_12': 'the_hanged_man.jpg',
  'maj_18': 'the_moon.jpg',
  'maj_19': 'the_sun.jpg'
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
  const imgName = FELINE_MYSTICA_IMAGES[card.id];
  if (!imgName) {
    return _renderCatCardFaceSvg(card);
  }
  const cid = card.id;
  const nameUpper = card.name.toUpperCase();

  return \`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 480" class="tarot-card-svg tarot-feline-theme tarot-mystica-theme" data-id="\${cid}">
  <defs>
    <clipPath id="artClip_\${cid}">
      <rect x="0" y="0" width="300" height="480" rx="16" ry="16" />
    </clipPath>
  </defs>
  <g clip-path="url(#artClip_\${cid})">
    <image href="/assets/feline-mystica/\${imgName}" x="0" y="0" width="300" height="480" preserveAspectRatio="xMidYMid slice" />
    <rect x="25" y="442" width="250" height="24" rx="6" fill="#0d0914" fill-opacity="0.88" stroke="#d4af37" stroke-width="1.2" />
    <text x="150" y="458" font-family="'Cinzel Decorative', 'Cinzel', serif" font-size="11" font-weight="700" fill="#fdf6d8" text-anchor="middle" letter-spacing="2">\${nameUpper}</text>
  </g>
</svg>\`;
}

// ============================================================
// DECK THEME STATE & PUBLIC API
// ============================================================

let currentDeckTheme = 'surrealist'; // 'surrealist' | 'feline' | 'feline_mystica'

export function setDeckTheme(theme) {
  if (theme === 'feline_mystica' || theme === 'mystica' || theme === 'illustrated') {
    currentDeckTheme = 'feline_mystica';
  } else if (theme === 'feline' || theme === 'cats') {
    currentDeckTheme = 'feline';
  } else {
    currentDeckTheme = 'surrealist';
  }
}

export function getDeckTheme() {
  return currentDeckTheme;
}

export function renderCardBackSvg(width = 300, height = 480, theme = currentDeckTheme) {
  if (theme === 'feline_mystica' || theme === 'mystica' || theme === 'illustrated') {
    return _renderFelineMysticaCardBackSvg(width, height);
  }
  if (theme === 'feline' || theme === 'cats') {
    return _renderCatCardBackSvg(width, height);
  }
  return _renderCardBackSvg(width, height);
}

export function renderCardFaceSvg(card, theme = currentDeckTheme) {
  if (!card) return '';
  if (theme === 'feline_mystica' || theme === 'mystica' || theme === 'illustrated') {
    return _renderFelineMysticaCardFaceSvg(card);
  }
  if (theme === 'feline' || theme === 'cats') {
    return _renderCatCardFaceSvg(card);
  }
  return _renderSurrealistCardFaceSvg(card);
}

// Explicit themed helpers
export const renderSurrealistCardFaceSvg = _renderSurrealistCardFaceSvg;
export const renderSurrealistCardBackSvg = _renderCardBackSvg;
export const renderCatCardFaceSvg = _renderCatCardFaceSvg;
export const renderCatCardBackSvg = _renderCatCardBackSvg;
export const renderFelineMysticaCardFaceSvg = _renderFelineMysticaCardFaceSvg;
export const renderFelineMysticaCardBackSvg = _renderFelineMysticaCardBackSvg;
`;

  const outPath = path.join(__dirname, 'js', 'svg-art.js');
  fs.writeFileSync(outPath, bundledScript, 'utf8');
  console.log('Successfully generated ' + outPath + ' (' + (bundledScript.length / 1024).toFixed(1) + ' KB)');
}

buildSvgArt().catch(console.error);
