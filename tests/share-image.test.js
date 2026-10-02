/**
 * Save-as-image: the layout maths and text wrapping. The drawing itself needs a browser.
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import { spreadLayout, wrapText, readingFileName, embedFont } from '../js/share-image.js';

const IMAGE_WIDTH = 1600;
const MARGIN = 90;

function box(slot, layout) {
  const lying = slot.rotate % 180 !== 0;
  const w = lying ? layout.cardHeight : layout.cardWidth;
  const h = lying ? layout.cardWidth : layout.cardHeight;
  return { left: slot.x - w / 2, right: slot.x + w / 2, top: slot.y - h / 2, bottom: slot.y + h / 2 };
}

function overlaps(a, b) {
  return a.left < b.right && b.left < a.right && a.top < b.bottom && b.top < a.bottom;
}

test('every spread fits the picture and keeps the plate ratio', () => {
  for (const [spreadId, count] of [['single', 1], ['three_card', 3], ['celtic_cross', 10]]) {
    const layout = spreadLayout(spreadId, count);
    assert.equal(layout.slots.length, count, spreadId);
    assert.ok(Math.abs(layout.cardHeight / layout.cardWidth - 1.6) < 1e-9, `${spreadId} ratio`);
    assert.ok(layout.width <= IMAGE_WIDTH - 2 * MARGIN, `${spreadId} is ${layout.width} wide`);
    for (const slot of layout.slots) {
      const b = box(slot, layout);
      assert.ok(b.left >= -0.5 && b.right <= layout.width + 0.5, `${spreadId} card leaves the block sideways`);
      assert.ok(b.top >= -0.5 && b.bottom <= layout.height + 0.5, `${spreadId} card leaves the block vertically`);
    }
  }
});

test('row spreads do not overlap', () => {
  const layout = spreadLayout('three_card', 3);
  const boxes = layout.slots.map(slot => box(slot, layout));
  assert.equal(overlaps(boxes[0], boxes[1]), false);
  assert.equal(overlaps(boxes[1], boxes[2]), false);
});

test('the celtic cross is a cross with a staff: only the crossing card overlaps anything', () => {
  const layout = spreadLayout('celtic_cross', 10);
  const boxes = layout.slots.map(slot => box(slot, layout));
  const [heart, crossing, root, past, crown, near, ...staff] = layout.slots;

  assert.equal(crossing.rotate, 90);
  assert.deepEqual([crossing.x, crossing.y], [heart.x, heart.y], 'crossing card lies on the heart');
  assert.ok(past.x < heart.x && near.x > heart.x && past.y === heart.y && near.y === heart.y);
  assert.ok(crown.y < heart.y && root.y > heart.y && crown.x === heart.x && root.x === heart.x);

  // Staff: one column to the right, seat 7 at the foot, seat 10 at the top
  assert.equal(new Set(staff.map(slot => slot.x)).size, 1);
  assert.ok(staff[0].x > near.x);
  assert.ok(staff[0].y > staff[1].y && staff[1].y > staff[2].y && staff[2].y > staff[3].y);

  for (let a = 0; a < boxes.length; a++) {
    for (let b = a + 1; b < boxes.length; b++) {
      const expected = a === 0 && b === 1;
      assert.equal(overlaps(boxes[a], boxes[b]), expected, `seats ${a + 1} and ${b + 1}`);
    }
  }
});

test('text wraps to the width and cuts long text with an ellipsis', () => {
  const measure = text => text.length * 10; // every character 10px wide

  assert.deepEqual(wrapText('one two three four', 90, measure), ['one two', 'three', 'four']);
  assert.deepEqual(wrapText('', 90, measure), []);
  assert.deepEqual(wrapText('short', 500, measure), ['short']);

  const cut = wrapText('one two three four five six seven', 90, measure, 2);
  assert.equal(cut.length, 2);
  assert.ok(cut[1].endsWith('…'));
  assert.ok(cut.every(line => measure(line) <= 90));

  // A single word wider than the line is kept whole, not dropped
  assert.deepEqual(wrapText('antidisestablishmentarianism', 90, measure), ['antidisestablishmentarianism']);
});

test('two readings saved on the same day get different file names', () => {
  const morning = readingFileName(new Date(2026, 9, 1, 9, 5));
  const afternoon = readingFileName(new Date(2026, 9, 1, 14, 30));
  assert.equal(morning, 'astralis-reading-2026-10-01-0905.jpg');
  assert.equal(afternoon, 'astralis-reading-2026-10-01-1430.jpg');
  assert.notEqual(morning, afternoon);
});

test('a card drawn into the picture carries the font its lettering uses', () => {
  const svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 480"><text font-family="Cinzel, Georgia, serif">The Star</text></svg>';
  const out = embedFont(svg, 'Cinzel', 'data:font/woff2;base64,AAAA');
  assert.match(out, /^<svg [^>]*><style>@font-face \{ font-family: 'Cinzel'; font-weight: 400 900; src: url\(data:font\/woff2;base64,AAAA\) format\('woff2'\); \}<\/style><text/);
  // A card that does not use the font is left as it is
  const plain = '<svg viewBox="0 0 300 480"><text font-family="Georgia">X</text></svg>';
  assert.equal(embedFont(plain, 'Cinzel', 'data:font/woff2;base64,AAAA'), plain);
});
