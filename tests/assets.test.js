/**
 * Picture references follow the app wherever it is served from.
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { TAROT_DECK } from '../js/cards.js';
import { renderHouseholdFace, renderHouseholdBack } from '../js/household-deck.js';
import { renderCardFaceSvg, renderCardBackSvg } from '../js/svg-art.js';
import { ASSET_BASE, assetUrl, localiseAssets, useMidPlates, useThumbs } from '../js/assets.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const BASE = 'https://example.org/tarot/assets/';

function hrefs(svg) {
  return [...svg.matchAll(/href="([^"]+\.(?:jpe?g|png|webp))"/gi)].map(match => match[1]);
}

test('the assets folder is found beside the app, not at the site root', () => {
  assert.ok(ASSET_BASE.endsWith('/assets/'));
  assert.equal(assetUrl('/readers/cassian_vetch.jpg'), `${ASSET_BASE}readers/cassian_vetch.jpg`);
});

test('no picture reference is left pointing at the site root, in any deck', () => {
  const renders = [];
  for (const card of TAROT_DECK) {
    renders.push(renderHouseholdFace(card));
    for (const theme of ['surrealist', 'feline', 'feline_mystica']) renders.push(renderCardFaceSvg(card, theme));
  }
  renders.push(renderHouseholdBack());
  for (const theme of ['surrealist', 'feline', 'feline_mystica']) renders.push(renderCardBackSvg(300, 480, theme));

  let pictures = 0;
  for (const svg of renders) {
    for (const href of hrefs(localiseAssets(svg, BASE))) {
      pictures++;
      assert.ok(href.startsWith(BASE), href);
    }
  }
  assert.ok(pictures >= 78, `only ${pictures} pictures were checked`);
});

test('the smaller copies exist for every plate the decks use', () => {
  const seen = new Set();
  for (const card of TAROT_DECK) {
    for (const svg of [renderHouseholdFace(card), renderCardFaceSvg(card, 'feline_mystica')]) {
      const local = localiseAssets(svg, BASE);
      for (const sized of [useMidPlates(local, BASE), useThumbs(local, BASE)]) {
        for (const href of hrefs(sized)) seen.add(href);
      }
    }
  }
  for (const back of [renderHouseholdBack(), renderCardBackSvg(300, 480, 'feline_mystica')]) {
    const local = localiseAssets(back, BASE);
    for (const href of [...hrefs(useMidPlates(local, BASE)), ...hrefs(useThumbs(local, BASE))]) seen.add(href);
  }

  assert.ok(seen.size > 150, `only ${seen.size} files were checked`);
  for (const href of seen) {
    assert.match(href, /\/(mid|thumb)\//, href);
    const file = path.join(root, 'assets', decodeURI(href.slice(BASE.length)));
    assert.ok(fs.existsSync(file), `missing ${path.relative(root, file)}`);
  }
});
