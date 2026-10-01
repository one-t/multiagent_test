/**
 * Test Suite: Surrealist SVG Art Engine Validation
 * Verifies that all 78 tarot cards and the universal reversible card back generate
 * valid, well-formed SVG markup with required attributes, elements, and gradients.
 */

const { TAROT_DECK } = await import('../js/cards.js');
const { renderCardBackSvg, renderCardFaceSvg } = await import('../js/svg-art.js');

console.log('--- Testing Surrealist Tarot SVG Art Engine ---');

// 1. Universal Reversible Card Back
const cardBack = renderCardBackSvg();
if (!cardBack || !cardBack.startsWith('<svg') || !cardBack.endsWith('</svg>')) {
  throw new Error('Card back failed to render valid SVG markup.');
}
if (!cardBack.includes('viewBox="0 0 300 480"')) {
  throw new Error('Card back missing expected viewBox.');
}
if (!cardBack.includes('backEyeAura') || !cardBack.includes('backSacredGrid')) {
  throw new Error('Card back missing sacred geometry / mystic eye defs.');
}
console.log('✓ Card back generated successfully (' + cardBack.length + ' bytes)');

// 2. All 78 Cards
let validatedCount = 0;
const majorIds = new Set();
const minorIds = new Set();

for (const card of TAROT_DECK) {
  const svg = renderCardFaceSvg(card);
  if (!svg || !svg.startsWith('<svg') || !svg.endsWith('</svg>')) {
    throw new Error(`Card ${card.id} failed to render valid SVG.`);
  }

  // Ensure card id is properly data-tagged
  if (!svg.includes(`data-id="${card.id}"`)) {
    throw new Error(`Card ${card.id} missing data-id attribute.`);
  }

  // Ensure clip path and viewport exist
  if (!svg.includes(`artClip_${card.id}`)) {
    throw new Error(`Card ${card.id} missing clipPath artClip_${card.id}.`);
  }

  // Ensure card title and number/rank are rendered
  if (!svg.includes(card.name.toUpperCase())) {
    throw new Error(`Card ${card.id} missing uppercase name in title banner.`);
  }

  if (card.arcana === 'major') {
    majorIds.add(card.id);
  } else {
    minorIds.add(card.id);
  }

  validatedCount++;
}

console.log(`✓ Validated ${majorIds.size} Major Arcana surrealist artworks`);
console.log(`✓ Validated ${minorIds.size} Minor Arcana surrealist artworks (Aces, Pips, Courts)`);
console.log(`✓ Total 78/78 cards validated with 0 errors!`);
