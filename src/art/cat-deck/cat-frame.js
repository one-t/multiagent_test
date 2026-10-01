/**
 * Feline Familiars Card Frame Generator
 * Wraps card illustrations in a bespoke midnight-velvet feline cardstock,
 * featuring golden cat ear filigree, corner paw prints, whisker accents,
 * Roman numerals, and title plates.
 */

import { CAT_EMBLEMS } from './cat-emblems.js';

export function createCatCardFrame(card, artworkSvg, customDefs = '') {
  const numText = card.number || '';
  const nameText = card.name || '';
  const esotericTitle = card.esotericTitle || '';
  const element = card.element || '';

  // Elemental Color Grading tailored to feline domains
  let bgDark = '#090714';
  let bgMid = '#130d24';
  let bgLight = '#1e1438';
  let accentGold = '#ffd700';
  let borderGlow = '#d4af37';

  if (card.suit === 'wands' || element.includes('Fire')) {
    // Suit of the Buff Ginger Tabby (Warm fiery amber)
    bgDark = '#140602';
    bgMid = '#260d05';
    bgLight = '#3d1608';
    accentGold = '#ffaa00';
    borderGlow = '#e67e22';
  } else if (card.suit === 'cups' || element.includes('Water')) {
    // Suit of the Sleek Void Cats (Deep oceanic midnight emerald)
    bgDark = '#020b14';
    bgMid = '#051829';
    bgLight = '#0a2742';
    accentGold = '#48cae4';
    borderGlow = '#0077b6';
  } else if (card.suit === 'swords' || element.includes('Air')) {
    // Suit of the Smoky Persian Sheriff (Mystic slate lavender)
    bgDark = '#0e0b17';
    bgMid = '#1a162b';
    bgLight = '#292345';
    accentGold = '#d8b4e2';
    borderGlow = '#9b59b6';
  } else if (card.suit === 'pentacles' || element.includes('Earth')) {
    // Suit of the Mardi Gras Bicolor Chonk (Lush catnip jade & gold)
    bgDark = '#05140b';
    bgMid = '#0a2615';
    bgLight = '#123d22';
    accentGold = '#52b788';
    borderGlow = '#2e7d32';
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 480" width="300" height="480" class="tarot-card-svg tarot-front tarot-feline-theme" data-id="${card.id}">
    <defs>
      <!-- Feline Cardstock Gradient -->
      <linearGradient id="catBgGrad_${card.id}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${bgLight}" />
        <stop offset="50%" stop-color="${bgMid}" />
        <stop offset="100%" stop-color="${bgDark}" />
      </linearGradient>

      <!-- Shimmering Gold Line Gradient -->
      <linearGradient id="catGoldLine_${card.id}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#fff8db" />
        <stop offset="35%" stop-color="#ffd56b" />
        <stop offset="70%" stop-color="#d4af37" />
        <stop offset="100%" stop-color="#8a6d1c" />
      </linearGradient>

      <!-- Inner Aura Gradient -->
      <radialGradient id="catCenterAura_${card.id}" cx="50%" cy="45%" r="50%">
        <stop offset="0%" stop-color="${accentGold}" stop-opacity="0.18" />
        <stop offset="60%" stop-color="${borderGlow}" stop-opacity="0.06" />
        <stop offset="100%" stop-color="#000000" stop-opacity="0" />
      </radialGradient>

      <clipPath id="artClip_${card.id}">
        <rect x="22" y="60" width="256" height="340" rx="8" />
      </clipPath>

      <!-- Injected Card-Specific Defs -->
      ${customDefs}
    </defs>

    <!-- Base Card Stock -->
    <rect width="300" height="480" rx="16" fill="url(#catBgGrad_${card.id})" stroke="#020204" stroke-width="2" />
    <rect x="6" y="6" width="288" height="468" rx="12" fill="none" stroke="url(#catGoldLine_${card.id})" stroke-width="1.3" opacity="0.9" />
    <rect x="12" y="12" width="276" height="456" rx="9" fill="none" stroke="#ffd56b" stroke-dasharray="2.5, 4" stroke-width="0.75" opacity="0.5" />

    <!-- Corner Feline Paw Prints -->
    ${CAT_EMBLEMS.paw(21, 21, 5, '#ffd56b', 0.85)}
    ${CAT_EMBLEMS.paw(279, 21, 5, '#ffd56b', 0.85)}
    ${CAT_EMBLEMS.paw(21, 459, 5, '#ffd56b', 0.85)}
    ${CAT_EMBLEMS.paw(279, 459, 5, '#ffd56b', 0.85)}

    <!-- Corner Filigree Ornaments -->
    <g stroke="url(#catGoldLine_${card.id})" fill="none" stroke-width="1.1">
      <path d="M 12 32 C 20 32 30 22 30 12" />
      <path d="M 288 32 C 280 32 270 22 270 12" />
      <path d="M 12 448 C 20 448 30 458 30 468" />
      <path d="M 288 448 C 280 448 270 458 270 468" />
    </g>

    <!-- Header: Roman Numeral & Feline Ears Banner -->
    <g transform="translate(150, 36)" text-anchor="middle">
      <rect x="-85" y="-18" width="170" height="24" rx="4" fill="#0d0a17" stroke="url(#catGoldLine_${card.id})" stroke-width="0.9" opacity="0.95" />
      <!-- Cat ears on banner -->
      <polygon points="-75,-18 -68,-26 -61,-18" fill="#0d0a17" stroke="url(#catGoldLine_${card.id})" stroke-width="0.9" />
      <polygon points="61,-18 68,-26 75,-18" fill="#0d0a17" stroke="url(#catGoldLine_${card.id})" stroke-width="0.9" />
      <!-- Whiskers accents -->
      <line x1="-50" y1="-6" x2="-25" y2="-6" stroke="url(#catGoldLine_${card.id})" stroke-width="0.8" />
      <line x1="25" y1="-6" x2="50" y2="-6" stroke="url(#catGoldLine_${card.id})" stroke-width="0.8" />
      <circle cx="-55" cy="-6" r="1.5" fill="#ffd56b" />
      <circle cx="55" cy="-6" r="1.5" fill="#ffd56b" />
      <text y="-1" font-family="'Cinzel Decorative', 'Cinzel', 'Georgia', serif" font-size="13" font-weight="700" fill="#ffd700" letter-spacing="2.5">
        ${escapeXml(numText)}
      </text>
    </g>

    <!-- Artwork Viewport -->
    <g>
      <!-- Art Frame Background -->
      <rect x="22" y="60" width="256" height="340" rx="8" fill="#05040a" stroke="url(#catGoldLine_${card.id})" stroke-width="1.3" />

      <!-- Clipped Illustration Canvas -->
      <g clip-path="url(#artClip_${card.id})">
        ${artworkSvg}
      </g>

      <!-- Inner Art Frame Aura -->
      <rect x="22" y="60" width="256" height="340" rx="8" fill="url(#catCenterAura_${card.id})" pointer-events="none" />
      <rect x="26" y="64" width="248" height="332" rx="6" fill="none" stroke="#d4af37" stroke-dasharray="3, 3" stroke-width="0.6" opacity="0.45" pointer-events="none" />
    </g>

    <!-- Footer: Card Name & Esoteric Title -->
    <g transform="translate(150, 428)" text-anchor="middle">
      <rect x="-120" y="-17" width="240" height="32" rx="5" fill="#0b0816" stroke="url(#catGoldLine_${card.id})" stroke-width="1.1" />
      <!-- Whisker line ornaments -->
      <line x1="-115" y1="-1" x2="-95" y2="-1" stroke="url(#catGoldLine_${card.id})" stroke-width="0.8" />
      <line x1="95" y1="-1" x2="115" y2="-1" stroke="url(#catGoldLine_${card.id})" stroke-width="0.8" />
      <!-- Tiny Fishbone center badge -->
      <circle cx="-90" cy="-1" r="1.2" fill="#ffd56b" />
      <circle cx="90" cy="-1" r="1.2" fill="#ffd56b" />
      <text y="3" font-family="'Cinzel', 'Georgia', serif" font-size="12" font-weight="700" fill="#fef6dc" letter-spacing="1.4">
        ${escapeXml(nameText.toUpperCase())}
      </text>
      <text y="28" font-family="'Cormorant Garamond', 'Georgia', serif" font-size="9" font-style="italic" fill="#c9b072" letter-spacing="0.9">
        ${escapeXml(esotericTitle)}
      </text>
    </g>
  </svg>`;
}
