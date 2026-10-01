/**
 * Household Arcana: every card depicts a cat from cat-inspo, either as the
 * source photograph or as a painted plate made from those photographs.
 * Pip counts are exact.
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { TAROT_DECK } from '../js/cards.js';
import { renderHouseholdFace, renderHouseholdBack } from '../js/household-deck.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const inspoDir = path.join(root, 'src', 'art', 'cat-deck', 'cat-inspo');
// The source photographs are kept out of git, so a fresh clone has no cat-inspo directory.
const inspoNames = new Set(fs.existsSync(inspoDir) ? fs.readdirSync(inspoDir) : []);

const PIP_COUNTS = {
  ace: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10,
  page: 0, knight: 0, queen: 0, king: 0
};

function imagePaths(svg) {
  const found = [...svg.matchAll(/\shref="([^"]+)"/g)]
    .map((match) => match[1])
    .filter((href) => /\.(jpe?g|png)$/i.test(href));
  return [...new Set(found)];
}

test('all 78 household cards show a directory cat and the right pip count', () => {
  assert.equal(TAROT_DECK.length, 78);
  for (const card of TAROT_DECK) {
    const svg = renderHouseholdFace(card);
    assert.ok(svg.startsWith('<svg') && svg.endsWith('</svg>'), card.id);
    assert.match(svg, new RegExp(`>${card.name}<`), card.id);
    const imgs = imagePaths(svg);
    assert.equal(imgs.length, 1, `${card.id} should carry one portrait`);
    const rel = decodeURI(imgs[0]).replace(/^\//, '');
    const abs = path.join(root, rel);
    assert.ok(fs.existsSync(abs), `${card.id} missing ${rel}`);
    const base = path.basename(abs);
    const fromInspo = inspoNames.has(base);
    const painted = rel.startsWith('assets/household/') && base === `${card.id}.jpg`;
    assert.ok(fromInspo || painted, `${card.id} portrait is not a household cat: ${rel}`);

    if (card.arcana === 'minor') {
      const rank = card.id.split('_')[1];
      const expected = PIP_COUNTS[rank];
      const found = (svg.match(/class="hh-pip"/g) || []).length;
      assert.equal(found, expected, `${card.id} pips`);
    } else {
      assert.equal((svg.match(/class="hh-pip"/g) || []).length, 0, card.id);
    }
  }
});

test('numbered cups and the cups courts each keep their own plate', () => {
  const ace = TAROT_DECK.find((card) => card.id === 'cups_ace');
  const queen = TAROT_DECK.find((card) => card.id === 'cups_queen');
  assert.match(imagePaths(renderHouseholdFace(ace))[0], /\/assets\/household\/cups_ace\.jpg$/);
  assert.match(imagePaths(renderHouseholdFace(queen))[0], /\/assets\/household\/cups_queen\.jpg$/);

  const cupsPips = TAROT_DECK.filter((card) => card.id.startsWith('cups_') && !/page|knight|queen|king/.test(card.id));
  assert.equal(cupsPips.length, 10);
  for (const card of cupsPips) {
    assert.match(imagePaths(renderHouseholdFace(card))[0], new RegExp(`/assets/household/${card.id}\\.jpg$`), card.id);
  }
});

test('household back medallion is the committed copy of the persian portrait', () => {
  const svg = renderHouseholdBack();
  assert.match(svg, /tarot-household-back/);
  const imgs = imagePaths(svg);
  assert.equal(imgs.length, 1);
  const rel = decodeURI(imgs[0]).replace(/^\//, '');
  assert.equal(rel, 'assets/household/back-portrait.jpg');
  assert.ok(fs.existsSync(path.join(root, rel)), `missing ${rel}`);
});
