/**
 * Test Suite: Feline Mystica Masterpiece Illustrated Tarot Art Engine
 * Validates:
 * 1. Reversible Feline Mystica Card Back (with tarot-back-feline and defs compatibility)
 * 2. All 59 AI-generated raster masterpiece cards load properly
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
  'the_hierophant.jpg',
  'the_lovers.jpg',
  'the_chariot.jpg',
  'strength.jpg',
  'the_hermit.jpg',
  'the_wheel_of_fortune.jpg',
  'justice.jpg',
  'the_hanged_man.jpg',
  'death.jpg',
  'temperance.jpg',
  'the_devil.jpg',
  'the_tower.jpg',
  'the_star.jpg',
  'the_moon.jpg',
  'the_sun.jpg',
  'judgement.jpg',
  'the_world.jpg',
  'ace_of_wands.jpg',
  'ace_of_cups.jpg',
  'ace_of_swords.jpg',
  'ace_of_pentacles.jpg',
  'king_of_wands.jpg',
  'queen_of_wands.jpg',
  'knight_of_wands.jpg',
  'page_of_wands.jpg',
  'king_of_cups.jpg',
  'queen_of_cups.jpg',
  'knight_of_cups.jpg',
  'page_of_cups.jpg',
  'king_of_swords.jpg',
  'queen_of_swords.jpg',
  'knight_of_swords.jpg',
  'page_of_swords.jpg',
  'king_of_pentacles.jpg',
  'queen_of_pentacles.jpg',
  'knight_of_pentacles.jpg',
  'page_of_pentacles.jpg',
  'two_of_wands.jpg',
  'three_of_wands.jpg',
  'four_of_wands.jpg',
  'five_of_wands.jpg',
  'six_of_wands.jpg',
  'seven_of_wands.jpg',
  'eight_of_wands.jpg',
  'nine_of_wands.jpg',
  'ten_of_wands.jpg',
  'two_of_cups.jpg',
  'three_of_cups.jpg',
  'four_of_cups.jpg',
  'five_of_cups.jpg',
  'six_of_cups.jpg',
  'seven_of_cups.jpg',
  'eight_of_cups.jpg',
  'nine_of_cups.jpg',
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
  assert.ok(backSvg.includes('<svg'), 'Back must be an SVG');
  assert.ok(backSvg.includes('card_back.jpg'), 'Back must reference card_back.jpg');
  assert.ok(backSvg.includes('tarot-back-feline'), 'Back must retain tarot-back-feline class for CSS compatibility');
});

test('All 78 cards render successfully in feline_mystica theme', () => {
  setDeckTheme('feline_mystica');

  let rasterCount = 0;
  for (const card of TAROT_DECK) {
    const svg = renderCardFaceSvg(card);
    assert.ok(svg.includes('<svg'), `Card ${card.id} must return valid SVG`);
    assert.ok(svg.includes('viewBox="0 0 300 480"'), `Card ${card.id} must have 300x480 viewBox`);
    assert.ok(svg.includes('tarot-mystica-theme'), `Card ${card.id} must have mystica theme class`);
    assert.ok(svg.includes(`<title>${card.name}</title>`), `Card ${card.id} must be titled with the card name`);
    if (!svg.includes('/assets/feline-mystica/')) assert.ok(svg.includes(card.name.toUpperCase()), `Card ${card.id} must display card name`);

    if (svg.includes('/assets/feline-mystica/')) {
      rasterCount++;
    }
  }

  assert.strictEqual(rasterCount, 59, 'All 59 raster cards (22 Major, 16 Court, 4 Aces, 9 Wands pips, 8 Cups pips) must render AI raster artwork');
});
