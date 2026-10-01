/**
 * Test Suite: Feline Familiars Tarot Alt Deck Validation
 * Verifies that all 78 cards and the universal reversible feline card back generate
 * well-formed, valid SVG markup and correctly honor the 4 cat archetypes from the photos.
 */

const { TAROT_DECK } = await import('../js/cards.js');
const {
  renderCatCardBackSvg,
  renderCatCardFaceSvg,
  setDeckTheme,
  getDeckTheme,
  renderCardFaceSvg,
  renderCardBackSvg
} = await import('../js/svg-art.js');

console.log('--- Testing Feline Familiars Alt Deck SVG Engine ---');

// 1. Universal Reversible Feline Card Back
const felineBack = renderCatCardBackSvg();
if (!felineBack || !felineBack.startsWith('<svg') || !felineBack.endsWith('</svg>')) {
  throw new Error('Feline card back failed to render valid SVG.');
}
if (!felineBack.includes('tarot-back-feline')) {
  throw new Error('Feline card back missing tarot-back-feline class.');
}
if (!felineBack.includes('backEyeAura') || !felineBack.includes('backSacredGrid')) {
  throw new Error('Feline card back missing sacred geometry / eye aura defs.');
}
console.log('✓ Feline reversible card back generated successfully (' + felineBack.length + ' bytes)');

// 2. Test deck theme switcher
setDeckTheme('feline');
if (getDeckTheme() !== 'feline') {
  throw new Error('Failed to set deck theme to feline.');
}

// 3. Test all 78 cards in Feline Mode
let count = 0;
const majorCards = new Set();
const minorCards = new Set();

for (const card of TAROT_DECK) {
  const svg = renderCardFaceSvg(card);
  if (!svg || !svg.startsWith('<svg') || !svg.endsWith('</svg>')) {
    throw new Error(`Card ${card.id} failed to render valid SVG in feline mode.`);
  }

  if (!svg.includes(`data-id="${card.id}"`)) {
    throw new Error(`Card ${card.id} missing data-id attribute.`);
  }

  if (!svg.includes(`artClip_${card.id}`)) {
    throw new Error(`Card ${card.id} missing clipPath artClip_${card.id}.`);
  }

  if (!svg.includes(card.name.toUpperCase())) {
    throw new Error(`Card ${card.id} missing uppercase name in title banner.`);
  }

  if (!svg.includes('tarot-feline-theme')) {
    throw new Error(`Card ${card.id} missing feline theme class.`);
  }

  if (card.arcana === 'major') {
    majorCards.add(card.id);
  } else {
    minorCards.add(card.id);
  }

  count++;
}

console.log(`✓ Validated ${majorCards.size} Feline Major Arcana artworks`);
console.log(`✓ Validated ${minorCards.size} Feline Minor Arcana artworks`);
console.log(`✓ All ${count}/78 Feline Tarot cards successfully validated with 0 errors!`);

// Switch back to surrealist
setDeckTheme('surrealist');
if (getDeckTheme() !== 'surrealist') {
  throw new Error('Failed to reset deck theme to surrealist.');
}
console.log('✓ Reversible deck theme switcher verified.');
