/**
 * Test Suite: Feline Mystica Masterpiece Illustrated Tarot Art Engine
 * Validates:
 * 1. Reversible Feline Mystica Card Back (with tarot-back-feline and defs compatibility)
 * 2. All 12 AI-generated raster masterpiece cards load properly with valid SVGs
 * 3. All 78 cards in the deck render valid SVGs in feline_mystica theme without errors
 */

import { test } from 'node:test';
import assert from 'node:assert';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { TAROT_DECK } from '../js/cards.js';
import {
  setDeckTheme,
  getDeckTheme,
  renderCardFaceSvg,
  renderCardBackSvg,
  renderFelineMysticaCardFaceSvg,
  renderFelineMysticaCardBackSvg
} from '../js/svg-art.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const EXPECTED_MYSTICA_FILES = [
  'the_fool.jpg',
  'the_magician.jpg',
  'the_high_priestess.jpg',
  'the_empress.jpg',
  'the_emperor.jpg',
  'the_lovers.jpg',
  'strength.jpg',
  'the_hermit.jpg',
  'justice.jpg',
  'the_hanged_man.jpg',
  'the_moon.jpg',
  'the_sun.jpg',
  'card_back.jpg'
];

test('Feline Mystica assets exist on disk', () => {
  const assetDir = path.join(rootDir, 'assets', 'feline-mystica');
  assert.ok(fs.existsSync(assetDir), 'assets/feline-mystica directory must exist');

  for (const filename of EXPECTED_MYSTICA_FILES) {
    const filePath = path.join(assetDir, filename);
    assert.ok(fs.existsSync(filePath), `Asset ${filename} must exist`);
    const stats = fs.statSync(filePath);
    assert.ok(stats.size > 50000, `Asset ${filename} must be substantial image file (${stats.size} bytes)`);
  }
});

test('Feline Mystica Card Back generation', () => {
  setDeckTheme('feline_mystica');
  assert.strictEqual(getDeckTheme(), 'feline_mystica');

  const backSvg = renderCardBackSvg(300, 480);
  assert.ok(backSvg, 'Card back SVG must not be empty');
  assert.ok(backSvg.includes('viewBox="0 0 300 480"'), 'Card back must have standard viewBox');
  assert.ok(backSvg.includes('tarot-back-feline'), 'Card back must retain tarot-back-feline class for test/glow compatibility');
  assert.ok(backSvg.includes('backEyeAura'), 'Card back must define backEyeAura');
  assert.ok(backSvg.includes('backSacredGrid'), 'Card back must define backSacredGrid');
  assert.ok(backSvg.includes('card_back.jpg'), 'Card back must reference card_back.jpg');
});

test('All 78 cards render successfully in feline_mystica theme', () => {
  setDeckTheme('feline_mystica');
  assert.strictEqual(TAROT_DECK.length, 78, 'Deck must contain 78 cards');

  let rasterCardCount = 0;
  for (const card of TAROT_DECK) {
    const svg = renderCardFaceSvg(card);
    assert.ok(svg, `Card ${card.id} must produce SVG`);
    assert.ok(svg.includes('viewBox="0 0 300 480"'), `Card ${card.id} must have viewBox="0 0 300 480"`);
    assert.ok(svg.includes(`data-id="${card.id}"`), `Card ${card.id} must have data-id`);
    assert.ok(svg.includes(`artClip_${card.id}`), `Card ${card.id} must have clipPath`);
    assert.ok(svg.includes(card.name.toUpperCase()), `Card ${card.id} must display name in uppercase`);

    if (svg.includes('/assets/feline-mystica/')) {
      rasterCardCount++;
    }
  }

  assert.strictEqual(rasterCardCount, 12, 'Must have exactly 12 raster masterpiece cards embedded');
});

console.log('--- Testing Feline Mystica Engine ---');
