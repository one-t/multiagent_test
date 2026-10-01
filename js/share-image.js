/**
 * Save a finished reading as one picture: the question, the spread laid out
 * as it was on the altar, and a legend of which card sat in which seat.
 *
 * `spreadLayout` and `wrapText` are plain maths so they can be tested without
 * a browser. `renderReadingImage` needs a DOM (canvas, Image, fetch).
 */

const CARD_RATIO = 1.6; // plates are 300 x 480
const IMAGE_WIDTH = 1600;
const MARGIN = 90;

/**
 * Where each card sits, in pixels, for a spread of `count` cards.
 * Returns the block size and one slot per card: centre x/y and rotation in degrees.
 */
export function spreadLayout(spreadId, count) {
  if (spreadId === 'celtic_cross' && count === 10) {
    const w = 190;
    const h = w * CARD_RATIO;
    const gap = 26;
    const stepX = h / 2 + w / 2 + gap; // the crossing card lies sideways over the centre
    const stepY = h + gap;
    const crossWidth = 2 * stepX + w;
    const staffGap = 110;
    const staffStep = h + 16;
    const height = 4 * h + 3 * 16;
    const cx = w / 2 + stepX;
    const cy = height / 2;
    const staffX = crossWidth + staffGap + w / 2;
    const staffBottom = height - h / 2;
    return {
      cardWidth: w,
      cardHeight: h,
      width: crossWidth + staffGap + w,
      height,
      slots: [
        { x: cx, y: cy, rotate: 0 }, // 1 heart
        { x: cx, y: cy, rotate: 90 }, // 2 crossing
        { x: cx, y: cy + stepY, rotate: 0 }, // 3 root
        { x: cx - stepX, y: cy, rotate: 0 }, // 4 past
        { x: cx, y: cy - stepY, rotate: 0 }, // 5 crown
        { x: cx + stepX, y: cy, rotate: 0 }, // 6 near future
        { x: staffX, y: staffBottom, rotate: 0 }, // 7 self, at the foot of the staff
        { x: staffX, y: staffBottom - staffStep, rotate: 0 },
        { x: staffX, y: staffBottom - 2 * staffStep, rotate: 0 },
        { x: staffX, y: staffBottom - 3 * staffStep, rotate: 0 } // 10 outcome
      ]
    };
  }

  // A single card, or a row
  const w = count === 1 ? 420 : Math.min(380, Math.floor((IMAGE_WIDTH - 2 * MARGIN - (count - 1) * 44) / count));
  const h = w * CARD_RATIO;
  const gap = 44;
  const slots = [];
  for (let i = 0; i < count; i++) {
    slots.push({ x: w / 2 + i * (w + gap), y: h / 2, rotate: 0 });
  }
  return { cardWidth: w, cardHeight: h, width: count * w + (count - 1) * gap, height: h, slots };
}

/**
 * Break text into lines no wider than maxWidth.
 * @param {string} text
 * @param {number} maxWidth
 * @param {(text: string) => number} measure Width of a string in the current font
 * @param {number} [maxLines]
 */
export function wrapText(text, maxWidth, measure, maxLines = Infinity) {
  const words = String(text || '').split(/\s+/).filter(Boolean);
  const lines = [];
  let line = '';

  for (const word of words) {
    const candidate = line ? `${line} ${word}` : word;
    if (measure(candidate) <= maxWidth || !line) {
      line = candidate;
    } else {
      lines.push(line);
      line = word;
    }
  }
  if (line) lines.push(line);

  if (lines.length > maxLines) {
    const kept = lines.slice(0, maxLines);
    let last = kept[maxLines - 1];
    while (last && measure(`${last}…`) > maxWidth) last = last.slice(0, -1).trimEnd();
    kept[maxLines - 1] = `${last}…`;
    return kept;
  }
  return lines;
}

// ---------------------------------------------------------------- browser only

const dataUrlCache = new Map();

function blobToDataUrl(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(blob);
  });
}

async function toDataUrl(url) {
  if (!dataUrlCache.has(url)) {
    dataUrlCache.set(url, fetch(url).then(response => {
      if (!response.ok) throw new Error(`Could not load ${url}`);
      return response.blob();
    }).then(blobToDataUrl));
  }
  return dataUrlCache.get(url);
}

/** An SVG drawn as an image cannot fetch its own pictures, so they are folded in as data. */
async function inlineImages(svg) {
  const urls = [...new Set([...svg.matchAll(/href="(\/[^"]+\.(?:jpe?g|png|webp))"/gi)].map(match => match[1]))];
  let out = svg;
  for (const url of urls) {
    const data = await toDataUrl(url);
    out = out.replaceAll(`href="${url}"`, `href="${data}"`);
  }
  return out;
}

async function svgToImage(svg) {
  const blobUrl = URL.createObjectURL(new Blob([await inlineImages(svg)], { type: 'image/svg+xml' }));
  try {
    const img = new Image();
    img.src = blobUrl;
    await img.decode();
    return img;
  } finally {
    // The decoded bitmap stays usable after the URL is released
    setTimeout(() => URL.revokeObjectURL(blobUrl), 0);
  }
}

const FONT_SERIF = '"Cormorant Garamond", Georgia, serif';
const FONT_HEADING = 'Cinzel, Georgia, serif';
const GOLD = '#ffd56b';
const GOLD_RICH = '#d4af37';
const TEXT = '#f5eedb';
const MUTED = '#c2b59b';

/**
 * @param {object} reading
 * @param {string} reading.spreadId
 * @param {string} reading.spreadLabel
 * @param {string} reading.question
 * @param {string} reading.readerName
 * @param {string} reading.dateLabel
 * @param {Array<{svg: string, isReversed: boolean, seat: string, cardName: string}>} reading.cards
 * @returns {Promise<Blob>} JPEG
 */
export async function renderReadingImage(reading) {
  const count = reading.cards.length;
  const layout = spreadLayout(reading.spreadId, count);
  const numbered = count > 1;

  if (document.fonts && document.fonts.load) {
    await Promise.all([
      document.fonts.load(`600 60px ${FONT_SERIF}`),
      document.fonts.load(`italic 400 30px ${FONT_SERIF}`),
      document.fonts.load(`600 24px ${FONT_HEADING}`)
    ]).catch(() => {});
  }

  const images = await Promise.all(reading.cards.map(card => svgToImage(card.svg)));

  // Measure the text first so the canvas is exactly as tall as it needs to be
  const scratch = document.createElement('canvas').getContext('2d');
  const contentWidth = IMAGE_WIDTH - 2 * MARGIN;

  scratch.font = `600 60px ${FONT_SERIF}`;
  const titleText = reading.question ? `“${reading.question}”` : reading.spreadLabel;
  const titleLines = wrapText(titleText, contentWidth, text => scratch.measureText(text).width, 3);

  const legendColumns = count > 3 ? 2 : 1;
  const legendColumnWidth = (contentWidth - (legendColumns - 1) * 60) / legendColumns;
  const legendRowHeight = 46;
  const legendRows = Math.ceil(count / legendColumns);

  const headerTop = MARGIN;
  const eyebrowHeight = 44;
  const titleHeight = titleLines.length * 70;
  const spreadTop = headerTop + eyebrowHeight + titleHeight + 70;
  const legendTop = spreadTop + layout.height + 80;
  const footerTop = legendTop + legendRows * legendRowHeight + 50;
  const height = Math.round(footerTop + 40 + MARGIN * 0.6);

  const canvas = document.createElement('canvas');
  canvas.width = IMAGE_WIDTH;
  canvas.height = height;
  const ctx = canvas.getContext('2d');

  // Altar: deep ground with a warm pool of candlelight behind the cards
  ctx.fillStyle = '#08060c';
  ctx.fillRect(0, 0, IMAGE_WIDTH, height);
  const glow = ctx.createRadialGradient(IMAGE_WIDTH / 2, spreadTop + layout.height / 2, 60, IMAGE_WIDTH / 2, spreadTop + layout.height / 2, IMAGE_WIDTH * 0.62);
  glow.addColorStop(0, 'rgba(96, 62, 28, 0.42)');
  glow.addColorStop(0.55, 'rgba(40, 24, 52, 0.26)');
  glow.addColorStop(1, 'rgba(8, 6, 12, 0)');
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, IMAGE_WIDTH, height);

  ctx.strokeStyle = 'rgba(212, 175, 55, 0.45)';
  ctx.lineWidth = 2;
  ctx.strokeRect(28, 28, IMAGE_WIDTH - 56, height - 56);

  // Header
  ctx.textBaseline = 'alphabetic';
  ctx.textAlign = 'center';
  ctx.fillStyle = GOLD_RICH;
  ctx.font = `600 24px ${FONT_HEADING}`;
  const eyebrow = [reading.question ? reading.spreadLabel : null, reading.readerName ? `Read by ${reading.readerName}` : null]
    .filter(Boolean).join('   ·   ').toUpperCase();
  drawSpaced(ctx, eyebrow, IMAGE_WIDTH / 2, headerTop + 24, 3);

  ctx.fillStyle = TEXT;
  ctx.font = `600 60px ${FONT_SERIF}`;
  titleLines.forEach((line, i) => {
    ctx.fillText(line, IMAGE_WIDTH / 2, headerTop + eyebrowHeight + 58 + i * 70);
  });

  // Cards
  const originX = (IMAGE_WIDTH - layout.width) / 2;
  layout.slots.forEach((slot, i) => {
    const card = reading.cards[i];
    const x = originX + slot.x;
    const y = spreadTop + slot.y;
    const w = layout.cardWidth;
    const h = layout.cardHeight;

    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(((slot.rotate + (card.isReversed ? 180 : 0)) * Math.PI) / 180);
    ctx.shadowColor = 'rgba(0, 0, 0, 0.75)';
    ctx.shadowBlur = 28;
    ctx.shadowOffsetY = 10;
    roundedRect(ctx, -w / 2, -h / 2, w, h, w * 0.055);
    ctx.fillStyle = '#14101e';
    ctx.fill();
    ctx.shadowColor = 'transparent';
    ctx.clip();
    ctx.drawImage(images[i], -w / 2, -h / 2, w, h);
    ctx.restore();

    if (numbered) {
      // Seat number, tucked on the card's upper-left corner as it lies
      const lying = slot.rotate % 180 !== 0;
      const bx = x - (lying ? h : w) / 2 + 4;
      const by = y - (lying ? w : h) / 2 + 4;
      drawBadge(ctx, String(i + 1), bx, by, 19);
    }
  });

  // Legend: which card sat where
  ctx.textAlign = 'left';
  reading.cards.forEach((card, i) => {
    const column = Math.floor(i / legendRows);
    const row = i % legendRows;
    const x = MARGIN + column * (legendColumnWidth + 60);
    const y = legendTop + row * legendRowHeight + 30;
    let textX = x;
    if (numbered) {
      drawBadge(ctx, String(i + 1), x + 18, y - 9, 18);
      textX = x + 52;
    }

    ctx.font = `600 22px ${FONT_HEADING}`;
    ctx.fillStyle = GOLD;
    const seat = card.seat.toUpperCase();
    const seatWidth = drawSpaced(ctx, seat, textX, y, 1.5, 'left');

    ctx.fillStyle = TEXT;
    const name = `${card.cardName}${card.isReversed ? ', reversed' : ''}`;
    const room = Math.max(x + legendColumnWidth - (textX + seatWidth + 22), 120);
    // Shrink a long name a little before resorting to cutting it
    for (const size of [30, 27, 24]) {
      ctx.font = `400 ${size}px ${FONT_SERIF}`;
      if (ctx.measureText(name).width <= room) break;
    }
    const [fitted] = wrapText(name, room, text => ctx.measureText(text).width, 1);
    ctx.fillText(fitted || name, textX + seatWidth + 22, y + 2);
  });

  // Footer
  ctx.textAlign = 'center';
  ctx.fillStyle = MUTED;
  ctx.font = `italic 400 28px ${FONT_SERIF}`;
  ctx.fillText(['Astralis', reading.dateLabel].filter(Boolean).join('  ·  '), IMAGE_WIDTH / 2, footerTop + 26);

  return new Promise((resolve, reject) => {
    canvas.toBlob(blob => (blob ? resolve(blob) : reject(new Error('Could not encode the image.'))), 'image/jpeg', 0.92);
  });
}

function roundedRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function drawBadge(ctx, label, cx, cy, radius) {
  ctx.save();
  ctx.beginPath();
  ctx.arc(cx, cy, radius, 0, Math.PI * 2);
  ctx.fillStyle = GOLD_RICH;
  ctx.shadowColor = 'rgba(0, 0, 0, 0.6)';
  ctx.shadowBlur = 8;
  ctx.fill();
  ctx.shadowColor = 'transparent';
  ctx.fillStyle = '#1a1206';
  ctx.font = `700 ${Math.round(radius * 1.05)}px Georgia, serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(label, cx, cy + 1);
  ctx.restore();
}

/** Letter-spaced text. Returns the width drawn. */
function drawSpaced(ctx, text, x, y, spacing, align = 'center') {
  const chars = [...text];
  const widths = chars.map(char => ctx.measureText(char).width);
  const total = widths.reduce((sum, width) => sum + width, 0) + spacing * Math.max(chars.length - 1, 0);
  const saved = ctx.textAlign;
  ctx.textAlign = 'left';
  let cursor = align === 'center' ? x - total / 2 : x;
  chars.forEach((char, i) => {
    ctx.fillText(char, cursor, y);
    cursor += widths[i] + spacing;
  });
  ctx.textAlign = saved;
  return total;
}

/** Hand a blob to the browser as a download. */
export function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
