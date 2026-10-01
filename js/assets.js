/**
 * Where the pictures live, worked out from where this module was loaded.
 *
 * The card renderers write picture references as "/assets/...". That only
 * works when the app is served from the root of a site. Passing their output
 * through `localiseAssets` points every reference at the assets folder beside
 * this app, so it also works under a sub-path (a project page, a folder on a
 * shared host).
 */

export const ASSET_BASE = new URL('../assets/', import.meta.url).href;

/** The URL of a file in the assets folder. */
export function assetUrl(path) {
  return ASSET_BASE + String(path).replace(/^\/+/, '');
}

/** Rewrite every "/assets/..." reference in a piece of SVG to the real location. */
export function localiseAssets(svg, base = ASSET_BASE) {
  return String(svg).replaceAll('href="/assets/', `href="${base}`);
}

const SIZED_DECKS = ['household/', 'feline-mystica/'];

function withSize(svg, folder, base) {
  let out = svg;
  for (const deck of SIZED_DECKS) {
    out = out.replaceAll(`href="${base}${deck}`, `href="${base}${deck}${folder}/`);
  }
  return out;
}

/** Cards on the table load 640px plates; the full-size ones are kept for the card dialog. */
export function useMidPlates(svg, base = ASSET_BASE) {
  return withSize(svg, 'mid', base);
}

/** Small renders (reading thumbnails, the card browser, the deck picker) load 280px plates. */
export function useThumbs(svg, base = ASSET_BASE) {
  return withSize(svg, 'thumb', base);
}
