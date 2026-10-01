/**
 * Multi-Deck Tarot Art Engine (Generated)
 * Includes:
 * 1. Classic Surrealist Altar Tarot (78 cards + Reversible Celestial Back)
 * 2. Feline Familiars Alt Deck (78 cards + Reversible Feline Back)
 * 3. Feline Mystica Alt Deck (Masterpiece Illustrated Deck referencing real cat photos)
 */

// ============================================================
// PART 1: SURREALIST TAROT ENGINE
// ============================================================

// --- SUIT EMBLEMS ---
/**
 * Surrealist Suit Emblems
 * Rich vector emblems with gradients, depth, highlights, and esoteric filigree.
 */

function getSuitEmblem(suit, size = 32, idPrefix = 'emb') {
  const scale = size / 32;
  switch (suit) {
    case 'wands':
      return `
        <g transform="scale(${scale})">
          <defs>
            <linearGradient id="${idPrefix}_wand_wood" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#a0522d" />
              <stop offset="50%" stop-color="#6e2c00" />
              <stop offset="100%" stop-color="#3e1704" />
            </linearGradient>
            <linearGradient id="${idPrefix}_wand_flame" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stop-color="#d35400" />
              <stop offset="40%" stop-color="#e67e22" />
              <stop offset="75%" stop-color="#f39c12" />
              <stop offset="100%" stop-color="#fff5cc" />
            </linearGradient>
          </defs>
          <!-- Wand Staff with Wood Texture -->
          <line x1="16" y1="2" x2="16" y2="30" stroke="url(#${idPrefix}_wand_wood)" stroke-width="3" stroke-linecap="round" />
          <line x1="15" y1="4" x2="15" y2="28" stroke="#d4af37" stroke-width="0.8" opacity="0.7" />
          <!-- Living Golden Flame Tip -->
          <path d="M 16 3 Q 22 -3 18 -9 Q 14 -12 16 -16 Q 10 -10 13 -4 Q 10 -1 16 3 Z" fill="url(#${idPrefix}_wand_flame)" />
          <path d="M 16 1 Q 19 -4 16 -8 Q 14 -4 16 1 Z" fill="#ffffff" opacity="0.8" />
          <!-- Living Emerald Sprouts & Leaves -->
          <path d="M 16 9 C 22 7 24 13 18 14 C 16 13 16 10 16 9 Z" fill="#2ecc71" stroke="#27ae60" stroke-width="0.5" />
          <path d="M 16 18 C 10 16 8 22 14 23 C 16 22 16 19 16 18 Z" fill="#2ecc71" stroke="#27ae60" stroke-width="0.5" />
          <!-- Golden Bands & Floating Embers -->
          <line x1="13" y1="12" x2="19" y2="12" stroke="#ffd700" stroke-width="1.2" />
          <line x1="13" y1="20" x2="19" y2="20" stroke="#ffd700" stroke-width="1.2" />
          <circle cx="10" cy="-6" r="1.5" fill="#f39c12" />
          <circle cx="22" cy="-2" r="1" fill="#f1c40f" />
        </g>
      `;

    case 'cups':
      return `
        <g transform="scale(${scale})">
          <defs>
            <linearGradient id="${idPrefix}_cup_gold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#fff0a0" />
              <stop offset="35%" stop-color="#ffd700" />
              <stop offset="70%" stop-color="#c69500" />
              <stop offset="100%" stop-color="#7a5c00" />
            </linearGradient>
            <linearGradient id="${idPrefix}_cup_water" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#a2d2ff" />
              <stop offset="50%" stop-color="#00b4d8" />
              <stop offset="100%" stop-color="#0077b6" />
            </linearGradient>
          </defs>
          <!-- Chalice Base & Stem -->
          <ellipse cx="16" cy="28" rx="10" ry="2.5" fill="url(#${idPrefix}_cup_gold)" stroke="#5c4500" stroke-width="0.6" />
          <line x1="16" y1="21" x2="16" y2="28" stroke="url(#${idPrefix}_cup_gold)" stroke-width="3.5" />
          <circle cx="16" cy="23" r="2.8" fill="url(#${idPrefix}_cup_gold)" />
          <!-- Chalice Bowl -->
          <path d="M 6 8 C 6 21 12 21 16 21 C 20 21 26 21 26 8 C 21 10 11 10 6 8 Z" fill="url(#${idPrefix}_cup_gold)" stroke="#5c4500" stroke-width="0.8" />
          <!-- Inner Liquid Nectar -->
          <ellipse cx="16" cy="8" rx="9" ry="3.5" fill="url(#${idPrefix}_cup_water)" />
          <!-- Overflowing Droplets / Pearl -->
          <circle cx="16" cy="8" r="2" fill="#ffffff" opacity="0.9" />
          <path d="M 16 3 C 14 5 18 5 16 3 Z" fill="#a2d2ff" />
          <circle cx="16" cy="0" r="1.2" fill="#ffffff" />
          <!-- Ruby Cabochon Inset on Bowl -->
          <circle cx="16" cy="14" r="2.5" fill="#e74c3c" stroke="#ffd700" stroke-width="0.6" />
        </g>
      `;

    case 'swords':
      return `
        <g transform="scale(${scale})">
          <defs>
            <linearGradient id="${idPrefix}_sw_blade" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#d5dbdb" />
              <stop offset="45%" stop-color="#ffffff" />
              <stop offset="55%" stop-color="#95a5a6" />
              <stop offset="100%" stop-color="#7f8c8d" />
            </linearGradient>
            <linearGradient id="${idPrefix}_sw_gold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#ffeaa7" />
              <stop offset="50%" stop-color="#d4af37" />
              <stop offset="100%" stop-color="#7a5c00" />
            </linearGradient>
          </defs>
          <!-- Steel Blade -->
          <path d="M 16 -6 L 19 22 L 16 22 L 13 22 Z" fill="url(#${idPrefix}_sw_blade)" stroke="#34495e" stroke-width="0.5" />
          <line x1="16" y1="-5" x2="16" y2="22" stroke="#2c3e50" stroke-width="0.8" />
          <!-- Crossguard Wings -->
          <path d="M 8 22 C 12 21 14 23 16 23 C 18 23 20 21 24 22 C 22 24 10 24 8 22 Z" fill="url(#${idPrefix}_sw_gold)" stroke="#5c4500" stroke-width="0.6" />
          <!-- Hilt Grip -->
          <line x1="16" y1="23" x2="16" y2="28" stroke="#1b2631" stroke-width="2.5" stroke-linecap="round" />
          <line x1="16" y1="24" x2="16" y2="27" stroke="#ffd700" stroke-width="0.6" />
          <!-- Pommel Gem -->
          <circle cx="16" cy="30" r="2.5" fill="#9b59b6" stroke="url(#${idPrefix}_sw_gold)" stroke-width="0.8" />
          <!-- Glint Star on Tip -->
          <path d="M 16 -8 L 17 -6 L 19 -6 L 17 -5 L 16 -3 L 15 -5 L 13 -6 L 15 -6 Z" fill="#ffffff" opacity="0.85" />
        </g>
      `;

    case 'pentacles':
      return `
        <g transform="scale(${scale})">
          <defs>
            <radialGradient id="${idPrefix}_pent_disc" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#2d6a4f" />
              <stop offset="70%" stop-color="#1b4332" />
              <stop offset="100%" stop-color="#081c15" />
            </radialGradient>
            <linearGradient id="${idPrefix}_pent_gold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#fff3b0" />
              <stop offset="50%" stop-color="#ffd700" />
              <stop offset="100%" stop-color="#b78727" />
            </linearGradient>
          </defs>
          <!-- Outer Coin Rim -->
          <circle cx="16" cy="16" r="14" fill="url(#${idPrefix}_pent_disc)" stroke="url(#${idPrefix}_pent_gold)" stroke-width="1.8" />
          <circle cx="16" cy="16" r="12" fill="none" stroke="#ffd700" stroke-dasharray="1.5, 1.5" stroke-width="0.6" />
          <!-- Golden 5-Pointed Star Pentagram -->
          <polygon points="16,5 19.5,12 27,12 21,16.5 23.5,23.5 16,19 8.5,23.5 11,16.5 5,12 12.5,12" fill="url(#${idPrefix}_pent_gold)" stroke="#7a5c00" stroke-width="0.5" />
          <circle cx="16" cy="16" r="3.2" fill="none" stroke="#ffffff" stroke-width="0.7" opacity="0.9" />
          <circle cx="16" cy="16" r="1.2" fill="#ffd700" />
        </g>
      `;

    default:
      return `<circle cx="16" cy="16" r="12" fill="#ffd700" />`;
  }
}


// --- CARD FRAME & THEMES ---
/**
 * Base Card Frame Generator
 * Wraps card illustration in deep atmospheric cardstock, ornate metallic filigree frame,
 * header title banner, esoteric title, element badge, and Roman numeral.
 */

function escapeXml(unsafe) {
  if (!unsafe) return '';
  return String(unsafe).replace(/[<>&'"]/g, c => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
    }
  });
}

function createCardFrame(card, artworkSvg, customDefs = '') {
  const numText = card.number || '';
  const nameText = card.name || '';
  const esotericTitle = card.esotericTitle || '';
  const element = card.element || '';

  // Element theme styling
  let themeGradStart = '#140f26';
  let themeGradMid = '#0c0817';
  let themeGradEnd = '#040308';
  let accentColor = '#d4af37';
  let accentSecondary = '#ffe599';

  if (card.suit === 'wands' || element.includes('Fire')) {
    themeGradStart = '#2b0c05';
    themeGradMid = '#170603';
    themeGradEnd = '#060201';
    accentColor = '#e67e22';
    accentSecondary = '#f39c12';
  } else if (card.suit === 'cups' || element.includes('Water')) {
    themeGradStart = '#0a1d30';
    themeGradMid = '#05111c';
    themeGradEnd = '#02060a';
    accentColor = '#3498db';
    accentSecondary = '#5dade2';
  } else if (card.suit === 'swords' || element.includes('Air')) {
    themeGradStart = '#1a1630';
    themeGradMid = '#0f0d1c';
    themeGradEnd = '#05040a';
    accentColor = '#9b59b6';
    accentSecondary = '#bb8fce';
  } else if (card.suit === 'pentacles' || element.includes('Earth')) {
    themeGradStart = '#0e2617';
    themeGradMid = '#08170e';
    themeGradEnd = '#030805';
    accentColor = '#27ae60';
    accentSecondary = '#52be80';
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 480" width="300" height="480" class="tarot-card-svg tarot-front" data-id="${card.id}">
    <defs>
      <!-- Base Cardstock & Gold Gradients -->
      <linearGradient id="bgGrad_${card.id}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${themeGradStart}" />
        <stop offset="50%" stop-color="${themeGradMid}" />
        <stop offset="100%" stop-color="${themeGradEnd}" />
      </linearGradient>
      <linearGradient id="goldLine_${card.id}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#fff0aa" />
        <stop offset="35%" stop-color="#ffd56b" />
        <stop offset="70%" stop-color="#d4af37" />
        <stop offset="100%" stop-color="#8a6d1c" />
      </linearGradient>
      <radialGradient id="centerAura_${card.id}" cx="50%" cy="45%" r="50%">
        <stop offset="0%" stop-color="${accentSecondary}" stop-opacity="0.22" />
        <stop offset="50%" stop-color="${accentColor}" stop-opacity="0.08" />
        <stop offset="100%" stop-color="#000000" stop-opacity="0" />
      </radialGradient>
      <clipPath id="artClip_${card.id}">
        <rect x="22" y="60" width="256" height="340" rx="8" />
      </clipPath>

      <!-- Injected Card-Specific Defs -->
      ${customDefs}
    </defs>

    <!-- Base Card Stock -->
    <rect width="300" height="480" rx="16" fill="url(#bgGrad_${card.id})" stroke="#020204" stroke-width="2" />
    <rect x="6" y="6" width="288" height="468" rx="12" fill="none" stroke="url(#goldLine_${card.id})" stroke-width="1.3" opacity="0.9" />
    <rect x="12" y="12" width="276" height="456" rx="9" fill="none" stroke="#ffd56b" stroke-dasharray="2.5, 4" stroke-width="0.75" opacity="0.55" />

    <!-- Corner Filigree Ornaments -->
    <g stroke="url(#goldLine_${card.id})" fill="none" stroke-width="1.1">
      <path d="M 12 32 C 20 32 30 22 30 12" />
      <path d="M 288 32 C 280 32 270 22 270 12" />
      <path d="M 12 448 C 20 448 30 458 30 468" />
      <path d="M 288 448 C 280 448 270 458 270 468" />
      <circle cx="21" cy="21" r="2" fill="#ffd56b" />
      <circle cx="279" cy="21" r="2" fill="#ffd56b" />
      <circle cx="21" cy="459" r="2" fill="#ffd56b" />
      <circle cx="279" cy="459" r="2" fill="#ffd56b" />
    </g>

    <!-- Header: Roman Numeral & Arcana Banner -->
    <g transform="translate(150, 36)" text-anchor="middle">
      <rect x="-85" y="-18" width="170" height="24" rx="4" fill="#0d0a17" stroke="url(#goldLine_${card.id})" stroke-width="0.9" opacity="0.95" />
      <line x1="-80" y1="-6" x2="-60" y2="-6" stroke="url(#goldLine_${card.id})" stroke-width="0.8" />
      <line x1="60" y1="-6" x2="80" y2="-6" stroke="url(#goldLine_${card.id})" stroke-width="0.8" />
      <circle cx="-55" cy="-6" r="1.5" fill="#ffd56b" />
      <circle cx="55" cy="-6" r="1.5" fill="#ffd56b" />
      <text y="-1" font-family="'Cinzel Decorative', 'Cinzel', 'Georgia', serif" font-size="13" font-weight="700" fill="#ffd700" letter-spacing="2.5">
        ${escapeXml(numText)}
      </text>
    </g>

    <!-- Artwork Viewport -->
    <g>
      <!-- Art Frame Background -->
      <rect x="22" y="60" width="256" height="340" rx="8" fill="#06050b" stroke="url(#goldLine_${card.id})" stroke-width="1.3" />

      <!-- Clipped Illustration Canvas -->
      <g clip-path="url(#artClip_${card.id})">
        ${artworkSvg}
      </g>

      <!-- Inner Art Frame Filigree & Aura -->
      <rect x="22" y="60" width="256" height="340" rx="8" fill="url(#centerAura_${card.id})" pointer-events="none" />
      <rect x="26" y="64" width="248" height="332" rx="6" fill="none" stroke="#d4af37" stroke-dasharray="3, 3" stroke-width="0.6" opacity="0.45" pointer-events="none" />
    </g>

    <!-- Footer: Card Name & Esoteric Title -->
    <g transform="translate(150, 428)" text-anchor="middle">
      <!-- Title Plate -->
      <rect x="-120" y="-17" width="240" height="32" rx="5" fill="#0b0816" stroke="url(#goldLine_${card.id})" stroke-width="1.1" />
      <line x1="-115" y1="-1" x2="-95" y2="-1" stroke="url(#goldLine_${card.id})" stroke-width="0.8" />
      <line x1="95" y1="-1" x2="115" y2="-1" stroke="url(#goldLine_${card.id})" stroke-width="0.8" />
      <text y="3" font-family="'Cinzel', 'Georgia', serif" font-size="12" font-weight="700" fill="#fef6dc" letter-spacing="1.4">
        ${escapeXml(nameText.toUpperCase())}
      </text>
      <!-- Esoteric Sub-label -->
      <text y="28" font-family="'Cormorant Garamond', 'Georgia', serif" font-size="9" font-style="italic" fill="#c9b072" letter-spacing="0.9">
        ${escapeXml(esotericTitle)}
      </text>
    </g>
  </svg>`;
}


// --- 22 MAJOR ARCANA MASTERPIECES ---
/**
 * 22 Major Arcana Surrealist Masterpiece Vector Artworks
 * Inspired by Salvador Dalí, René Magritte, Giorgio de Chirico, and Remedios Varo.
 * Bespoke sacred geometry, dreamscapes, metaphysical perspective, and luminous gradients.
 */

const MAJOR_ARCANA_ART = {
  // 0: The Fool (The Cosmic Leap)
  maj_00: {
    defs: `
      <linearGradient id="foolSky" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#050210" />
        <stop offset="40%" stop-color="#1d0b38" />
        <stop offset="70%" stop-color="#541348" />
        <stop offset="100%" stop-color="#df621a" />
      </linearGradient>
      <linearGradient id="foolGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#fff8db" />
        <stop offset="50%" stop-color="#ffd56b" />
        <stop offset="100%" stop-color="#b8860b" />
      </linearGradient>
      <radialGradient id="foolPortal" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#ffd700" stop-opacity="0.9" />
        <stop offset="35%" stop-color="#ff7b00" stop-opacity="0.5" />
        <stop offset="70%" stop-color="#7209b7" stop-opacity="0.3" />
        <stop offset="100%" stop-color="#000000" stop-opacity="0" />
      </radialGradient>
    `,
    svg: `
      <g transform="translate(150, 230)">
        <!-- Surreal Twilight Cosmic Sky -->
        <rect x="-128" y="-170" width="256" height="340" fill="url(#foolSky)" />

        <!-- Starfield & Twin Moons -->
        <circle cx="50" cy="-120" r="1.5" fill="#ffffff" /><circle cx="95" cy="-80" r="2" fill="#ffd700" />
        <circle cx="-80" cy="-140" r="1.2" fill="#ffffff" /><circle cx="-100" cy="-60" r="1.5" fill="#ffffff" />
        <circle cx="65" cy="-110" r="14" fill="none" stroke="url(#foolGold)" stroke-width="1.2" opacity="0.8" />
        <circle cx="60" cy="-110" r="11" fill="url(#foolPortal)" />
        <path d="M -80 -100 A 10 10 0 1 0 -80 -80 A 7 10 0 0 1 -80 -100" fill="#ffffff" opacity="0.6" />

        <!-- Distant Mountain Spires -->
        <polygon points="-128,-10 -60,-55 0,-10 60,-65 128,-5 128,40 -128,40" fill="#180728" opacity="0.75" />

        <!-- Metaphysical Checkerboard Precipice (Floating Island) -->
        <polygon points="-128,40 -20,40 -45,170 -128,170" fill="#0d091a" stroke="url(#foolGold)" stroke-width="1" />
        <g stroke="url(#foolGold)" stroke-width="0.6" opacity="0.5">
          <line x1="-128" y1="70" x2="-26" y2="52" /><line x1="-128" y1="105" x2="-33" y2="75" /><line x1="-128" y1="140" x2="-40" y2="120" />
          <line x1="-95" y1="40" x2="-105" y2="170" /><line x1="-65" y1="40" x2="-75" y2="170" /><line x1="-35" y1="40" x2="-55" y2="170" />
        </g>

        <!-- Melting Golden Clock Draped over Cliff Edge -->
        <path d="M -35 32 C -22 30 -15 38 -15 50 C -15 65 -28 72 -28 85 C -28 92 -20 95 -18 100 C -24 102 -32 95 -32 85 C -32 68 -20 62 -22 50 C -25 40 -35 38 -35 32 Z" fill="#ffd700" stroke="#b78727" stroke-width="1.2" />
        <circle cx="-20" cy="55" r="5" fill="#fff9db" /><line x1="-20" y1="55" x2="-18" y2="52" stroke="#4a3710" stroke-width="1" />

        <!-- The Wanderer Silhouette (Stepping into the Cosmic Void) -->
        <g transform="translate(-5, 0)">
          <!-- Legs in mid-stride over open abyss -->
          <path d="M -25 25 L -20 -10 L 15 15 L 28 28" stroke="url(#foolGold)" stroke-width="3" stroke-linecap="round" fill="none" />
          <path d="M -20 -10 L -35 15 L -45 38" stroke="url(#foolGold)" stroke-width="3" stroke-linecap="round" fill="none" />
          <!-- Torso & Golden Constellation Robe -->
          <path d="M -22 -12 L 0 -10 L 5 -55 L -18 -55 Z" fill="#1b1236" stroke="url(#foolGold)" stroke-width="1.3" />
          <circle cx="-10" cy="-35" r="1.5" fill="#ffffff" /><circle cx="-5" cy="-25" r="1.5" fill="#ffd700" /><line x1="-10" y1="-35" x2="-5" y2="-25" stroke="#ffffff" stroke-width="0.5" />
          <!-- Head with Laurel Wreath -->
          <circle cx="-6" cy="-68" r="9" fill="url(#foolGold)" />
          <path d="M -15 -74 Q -6 -82 3 -74" stroke="#2ecc71" stroke-width="1.5" fill="none" />
          <!-- Raised Hand with Glowing White Rose -->
          <path d="M -8 -45 L -28 -55" stroke="url(#foolGold)" stroke-width="2.2" stroke-linecap="round" />
          <circle cx="-32" cy="-57" r="5" fill="#ffffff" stroke="url(#foolGold)" stroke-width="0.8" />
          <!-- Pilgrim Staff & Floating Cosmic Bindle (Glass Sphere Nebula) -->
          <line x1="-38" y1="35" x2="22" y2="-85" stroke="url(#foolGold)" stroke-width="2" />
          <circle cx="20" cy="-80" r="12" fill="url(#foolPortal)" stroke="url(#foolGold)" stroke-width="1" />
          <circle cx="20" cy="-80" r="6" fill="#ffd56b" opacity="0.6" />
        </g>

        <!-- White Origami Butterfly of Light Guiding the Step -->
        <g transform="translate(48, 10)">
          <polygon points="0,0 14,-14 6,-2" fill="#ffffff" stroke="#ffd700" stroke-width="0.8" />
          <polygon points="0,0 12,10 5,2" fill="#fdfefe" stroke="#ffd700" stroke-width="0.8" />
          <polygon points="0,0 -8,-8 -3,-1" fill="#f4f6f7" stroke="#ffd700" stroke-width="0.6" />
          <circle cx="0" cy="0" r="1.8" fill="#ffd700" />
        </g>

        <!-- Spiral Stardust Abyss below foot -->
        <path d="M 25 35 Q 45 45 40 70 Q 30 100 0 110 Q -40 120 -30 150" fill="none" stroke="url(#foolGold)" stroke-width="1" stroke-dasharray="2, 3" opacity="0.6" />
      </g>
    `
  },

  // 1: The Magician (The Alchemist of Dimensions)
  maj_01: {
    defs: `
      <linearGradient id="magSky" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#0a031a" />
        <stop offset="45%" stop-color="#240c4a" />
        <stop offset="75%" stop-color="#5e1b6d" />
        <stop offset="100%" stop-color="#0d041e" />
      </linearGradient>
      <linearGradient id="magLemn" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#ffd700" />
        <stop offset="50%" stop-color="#ffffff" />
        <stop offset="100%" stop-color="#ff9900" />
      </linearGradient>
      <radialGradient id="magAura" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#00ffff" stop-opacity="0.8" />
        <stop offset="50%" stop-color="#7209b7" stop-opacity="0.3" />
        <stop offset="100%" stop-color="#000000" stop-opacity="0" />
      </radialGradient>
    `,
    svg: `
      <g transform="translate(150, 230)">
        <!-- Temple Background -->
        <rect x="-128" y="-170" width="256" height="340" fill="url(#magSky)" />

        <!-- Floating Metaphysical Classical Pillars -->
        <g opacity="0.4" stroke="#ffd56b" stroke-width="0.8">
          <rect x="-105" y="-140" width="16" height="180" fill="#140b29" />
          <rect x="89" y="-140" width="16" height="180" fill="#140b29" />
          <line x1="-110" y1="-140" x2="-84" y2="-140" stroke-width="2" />
          <line x1="84" y1="-140" x2="110" y2="-140" stroke-width="2" />
        </g>

        <!-- Liquid Golden Lemniscate of Infinity (3D twisting ribbon) -->
        <g transform="translate(0, -95)">
          <path d="M -36 0 C -55 -25 -55 25 -36 0 C -18 -25 18 25 36 0 C 55 -25 55 25 36 0 C 18 -25 -18 25 -36 0 Z" fill="none" stroke="url(#magLemn)" stroke-width="3.5" stroke-linecap="round" />
          <circle cx="0" cy="0" r="4" fill="#ffffff" />
          <circle cx="0" cy="0" r="18" fill="url(#magAura)" />
        </g>

        <!-- Magus Figure (Mirrored Golden Visage) -->
        <g>
          <!-- Crimson and Gold Mantle -->
          <path d="M -20 -40 C -30 -10 -40 20 -28 45 L 28 45 C 40 20 30 -10 20 -40 Z" fill="#7a142c" stroke="#ffd700" stroke-width="1.3" />
          <path d="M -12 -40 L 0 45 L 12 -40 Z" fill="#ffffff" opacity="0.9" />
          <!-- Head / Golden Mirrored Mask -->
          <ellipse cx="0" cy="-56" r="11" fill="#ffd700" stroke="#fff" stroke-width="0.8" />
          <line x1="-6" y1="-56" x2="6" y2="-56" stroke="#240c4a" stroke-width="1" />
          <!-- Right Arm Pointing Up (Golden Crystal Wand channeling celestial lightning) -->
          <path d="M 16 -38 L 42 -70 L 48 -102" stroke="#ffd700" stroke-width="3" stroke-linecap="round" fill="none" />
          <polygon points="48,-118 43,-102 53,-102" fill="#ffffff" stroke="#00ffff" stroke-width="0.8" />
          <path d="M 48 -118 Q 55 -135 65 -130 M 48 -118 Q 40 -138 35 -145" stroke="#00ffff" stroke-width="1" fill="none" />
          <!-- Left Arm Pointing Down (Athame of Silver toward the deep) -->
          <path d="M -16 -38 L -40 -10 L -46 22" stroke="#ffd700" stroke-width="3" stroke-linecap="round" fill="none" />
          <polygon points="-46,38 -43,22 -49,22" fill="#d5dbdb" stroke="#ffd700" stroke-width="0.8" />
        </g>

        <!-- Floating Levitating Altar Slab (Obsidian & Gold) -->
        <polygon points="-75,65 75,65 55,100 -55,100" fill="#0f091c" stroke="#ffd700" stroke-width="1.5" />
        <line x1="-55" y1="100" x2="-75" y2="65" stroke="#ffd700" stroke-width="1" />
        <line x1="55" y1="100" x2="75" y2="65" stroke="#ffd700" stroke-width="1" />

        <!-- 4 Transforming Elemental Relics on Altar -->
        <!-- Wand: Living Briar with fire and flowers -->
        <line x1="-52" y1="60" x2="-30" y2="60" stroke="#a0522d" stroke-width="3" stroke-linecap="round" />
        <circle cx="-52" cy="58" r="2.5" fill="#2ecc71" /><circle cx="-30" cy="58" r="3.5" fill="#e67e22" />
        <!-- Cup: Chalice spilling starlight river -->
        <path d="M -12 63 Q -7 63 -7 54 L -17 54 Q -17 63 -12 63 Z" fill="#ffd700" stroke="#c69500" stroke-width="0.8" />
        <path d="M -12 63 L -12 68 M -16 68 L -8 68" stroke="#ffd700" stroke-width="1.2" />
        <path d="M -9 54 Q 0 58 0 75 Q 0 95 -10 110" stroke="#00ffff" stroke-width="1.5" fill="none" opacity="0.8" />
        <!-- Sword: Crystal rapier piercing cloud -->
        <line x1="12" y1="50" x2="12" y2="67" stroke="#e0e6ed" stroke-width="2" />
        <line x1="8" y1="62" x2="16" y2="62" stroke="#ffd700" stroke-width="1.2" />
        <!-- Pentacle: Revolving Golden Astrolabe -->
        <circle cx="42" cy="60" r="9" fill="#1b4332" stroke="#ffd700" stroke-width="1.2" />
        <polygon points="42,52 44.5,57.5 50,57.5 45.5,61 47,66.5 42,63 37,66.5 38.5,61 34,57.5 39.5,57.5" fill="#ffd700" />

        <!-- Ouroboros Serpent of Emerald Light Encircling the Void Below -->
        <circle cx="0" cy="132" r="24" fill="none" stroke="#27ae60" stroke-width="3" stroke-dasharray="4, 1.5" />
        <circle cx="24" cy="132" r="3.5" fill="#f1c40f" />
        <circle cx="24" cy="132" r="1.5" fill="#e74c3c" />
      </g>
    `
  },

  // 2: The High Priestess (Priestess of the Silver Star)
  maj_02: {
    defs: `
      <linearGradient id="priesSky" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#020814" />
        <stop offset="50%" stop-color="#0b1e36" />
        <stop offset="100%" stop-color="#1b3b5f" />
      </linearGradient>
      <radialGradient id="priesMoonGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#ffffff" stop-opacity="0.9" />
        <stop offset="40%" stop-color="#90e0ef" stop-opacity="0.4" />
        <stop offset="100%" stop-color="#000000" stop-opacity="0" />
      </radialGradient>
      <linearGradient id="boazCol" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#040308" />
        <stop offset="60%" stop-color="#171226" />
        <stop offset="100%" stop-color="#07050d" />
      </linearGradient>
      <linearGradient id="jachinCol" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#fdfbf7" />
        <stop offset="60%" stop-color="#ede4c8" />
        <stop offset="100%" stop-color="#c9b88c" />
      </linearGradient>
    `,
    svg: `
      <g transform="translate(150, 230)">
        <rect x="-128" y="-170" width="256" height="340" fill="url(#priesSky)" />

        <!-- Twin Metaphysical Monolithic Pillars -->
        <!-- Boaz (Dark/Constellation) -->
        <rect x="-105" y="-150" width="28" height="280" fill="url(#boazCol)" stroke="#6c5b7b" stroke-width="0.8" />
        <rect x="-110" y="-158" width="38" height="10" fill="#1b1236" stroke="#ffd700" stroke-width="0.8" />
        <circle cx="-91" cy="-110" r="1.5" fill="#fff" /><circle cx="-85" cy="-80" r="1.2" fill="#fff" /><line x1="-91" y1="-110" x2="-85" y2="-80" stroke="#fff" stroke-width="0.3" opacity="0.6" />
        <text x="-91" y="-30" font-family="'Cinzel', serif" font-size="18" font-weight="700" fill="#a390c4" text-anchor="middle">B</text>

        <!-- Jachin (Light/Solar) -->
        <rect x="77" y="-150" width="28" height="280" fill="url(#jachinCol)" stroke="#ffd700" stroke-width="0.8" />
        <rect x="72" y="-158" width="38" height="10" fill="#fff8e7" stroke="#ffd700" stroke-width="0.8" />
        <text x="91" y="-30" font-family="'Cinzel', serif" font-size="18" font-weight="700" fill="#6d5822" text-anchor="middle">J</text>

        <!-- Tapestry Veil of Stars & Sliced Pomegranates Weeping Ruby Light -->
        <path d="M -77 -145 L 77 -145 L 77,55 L -77,55 Z" fill="#090d1f" stroke="#d4af37" stroke-dasharray="2, 4" stroke-width="0.8" />
        <g fill="#920c24" stroke="#ffd700" stroke-width="0.8">
          <!-- Weeping Pomegranates with jewel seeds -->
          <circle cx="-42" cy="-90" r="8" /><circle cx="-42" cy="-90" r="4" fill="#ffd700" />
          <circle cx="42" cy="-90" r="8" /><circle cx="42" cy="-90" r="4" fill="#ffd700" />
          <circle cx="-30" cy="-20" r="9" /><circle cx="30" cy="-20" r="9" />
          <circle cx="0" cy="-60" r="11" /><circle cx="0" cy="-60" r="5" fill="#ffd700" />
        </g>

        <!-- Enthroned High Priestess Figure -->
        <g>
          <!-- Sapphire Robe Cascading into Pool of Water -->
          <path d="M -30 65 L -22 -20 L 22 -20 L 30 65 C 50 85 70 120 70 145 L -70 145 C -70 120 -50 85 -30 65 Z" fill="#16294a" stroke="#00ffff" stroke-width="0.8" />
          <!-- Flowing Water Ripples at Hem -->
          <ellipse cx="0" cy="142" rx="85" ry="18" fill="#0c192e" stroke="#5dade2" stroke-width="1.2" />
          <ellipse cx="0" cy="142" rx="55" ry="10" fill="none" stroke="#90e0ef" stroke-width="0.6" stroke-dasharray="3, 3" />
          <!-- Horned Isis Lunar Crown with Full Moon Globe -->
          <circle cx="0" cy="-70" r="22" fill="url(#priesMoonGlow)" />
          <path d="M -20 -62 C -12 -45 0 -45 0 -45 C 0 -45 12 -45 20 -62 C 14 -50 0 -50 -20 -62 Z" fill="#ffd700" stroke="#fff" stroke-width="1" />
          <circle cx="0" cy="-70" r="7" fill="#ffffff" stroke="#ffd700" stroke-width="1" />
          <!-- Serene Veiled Face -->
          <circle cx="0" cy="-44" r="11" fill="#fdf2e9" />
          <path d="M -11 -46 C -6 -35 6 -35 11 -46" stroke="#5dade2" stroke-width="1.2" fill="none" />
          <!-- Sacred Floating TORA Scroll -->
          <g transform="translate(0, 20)">
            <rect x="-24" y="-8" width="48" height="18" rx="3" fill="#fdf8e6" stroke="#9a7b1c" stroke-width="1.2" />
            <text x="0" y="5" font-family="'Cinzel', serif" font-size="9" font-weight="700" fill="#4a3710" text-anchor="middle" letter-spacing="1">TORA</text>
          </g>
          <!-- Silver Crescent Moon at Base of Throne -->
          <path d="M -22 108 C 0 126 0 126 22 108 C 12 130 -12 130 -22 108 Z" fill="#e0f7fa" stroke="#ffd700" stroke-width="1" />
        </g>
      </g>
    `
  },

  // 3: The Empress (Mistress of Living Dreams)
  maj_03: {
    defs: `
      <linearGradient id="empSky" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#14061a" />
        <stop offset="40%" stop-color="#4d164d" />
        <stop offset="70%" stop-color="#a8325a" />
        <stop offset="100%" stop-color="#f4a261" />
      </linearGradient>
      <linearGradient id="empRiver" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#e0f7fa" />
        <stop offset="50%" stop-color="#26c6da" />
        <stop offset="100%" stop-color="#00695c" />
      </linearGradient>
    `,
    svg: `
      <g transform="translate(150, 230)">
        <rect x="-128" y="-170" width="256" height="340" fill="url(#empSky)" />

        <!-- Twin Suns on Dawn Horizon -->
        <circle cx="50" cy="-70" r="22" fill="#ffd700" opacity="0.85" />
        <circle cx="85" cy="-80" r="14" fill="#f4a261" opacity="0.6" />

        <!-- Golden Wheat Hills & Verdant Forest -->
        <path d="M -128,10 Q -60,-30 20,10 Q 80,-20 128,5 L 128,170 L -128,170 Z" fill="#2d6a4f" />
        <path d="M -128,60 Q -50,20 40,60 Q 90,40 128,65 L 128,170 L -128,170 Z" fill="#d4a373" />

        <!-- River of Molten Liquid Silver & Turquoise flowing from her gown -->
        <path d="M -6 50 Q 20 80 -10 115 Q 25 145 0 170 L 30 170 Q 55 145 20 115 Q 40 80 14 50 Z" fill="url(#empRiver)" stroke="#ffffff" stroke-width="0.8" />

        <!-- Golden Wheat Sheaves swaying on borders -->
        <g stroke="#ffd700" stroke-width="1.8" fill="none">
          <path d="M -95 130 Q -90 80 -105 60 M -85 130 Q -80 85 -85 65 M -75 130 Q -70 90 -65 70" />
          <path d="M 95 130 Q 90 80 105 60 M 85 130 Q 80 85 85 65 M 75 130 Q 70 90 65 70" />
        </g>

        <!-- Enthroned Empress on Living Moss Throne -->
        <g>
          <!-- Velvet Robe patterned with Pomegranates -->
          <path d="M -35 85 L -22 -30 L 22 -30 L 35 85 Z" fill="#800f2f" stroke="#ffd700" stroke-width="1.2" />
          <circle cx="0" cy="-52" r="11" fill="#fbeee6" />
          <!-- Crown of Twelve Orbiting 8-Pointed Golden Stars -->
          <g fill="#ffd700" stroke="#fff" stroke-width="0.5">
            <circle cx="-32" cy="-75" r="2.5" /><circle cx="-22" cy="-84" r="2.8" /><circle cx="-10" cy="-90" r="3" />
            <circle cx="0" cy="-92" r="3.2" /><circle cx="10" cy="-90" r="3" /><circle cx="22" cy="-84" r="2.8" /><circle cx="32" cy="-75" r="2.5" />
          </g>
          <!-- Lotus Scepter in Hand -->
          <line x1="20" y1="-25" x2="42" y2="-65" stroke="#ffd700" stroke-width="2.2" stroke-linecap="round" />
          <path d="M 42 -65 Q 46 -75 42 -80 Q 38 -75 42 -65 Z" fill="#ffd700" />
          <!-- Heart-Shaped Shield of Venus with Climbing Wild Roses -->
          <g transform="translate(-45, 50)">
            <path d="M 0 0 C -20 -20 0 -40 0 -20 C 0 -40 20 -20 0 0 Z" fill="#c9184a" stroke="#ffd700" stroke-width="1.5" transform="scale(1.3) translate(0, 10)" />
            <!-- Venus Symbol -->
            <circle cx="0" cy="-5" r="5" fill="none" stroke="#ffffff" stroke-width="1.3" />
            <line x1="0" y1="0" x2="0" y2="8" stroke="#ffffff" stroke-width="1.3" />
            <line x1="-4" y1="4" x2="4" y2="4" stroke="#ffffff" stroke-width="1.3" />
          </g>
        </g>
      </g>
    `
  },

  // 4: The Emperor (Architect of Order)
  maj_04: {
    defs: `
      <linearGradient id="empColSky" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#190305" />
        <stop offset="50%" stop-color="#4d0f14" />
        <stop offset="85%" stop-color="#991b1b" />
        <stop offset="100%" stop-color="#f97316" />
      </linearGradient>
      <linearGradient id="stoneRam" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#3d1418" />
        <stop offset="50%" stop-color="#1f090b" />
        <stop offset="100%" stop-color="#0a0304" />
      </linearGradient>
    `,
    svg: `
      <g transform="translate(150, 230)">
        <rect x="-128" y="-170" width="256" height="340" fill="url(#empColSky)" />

        <!-- Sharp Martian Basalt & Crimson Crags -->
        <polygon points="-128,40 -70,-30 0,35 60,-40 128,30 128,170 -128,170" fill="#2b0a0d" />
        <polygon points="-100,50 -40,-10 20,50" fill="#521217" opacity="0.8" />
        <polygon points="10,50 70,-20 128,50" fill="#781d24" opacity="0.7" />

        <!-- Colossal Cubic Basalt Throne with Spiraling Ram Horns -->
        <rect x="-60" y="-55" width="120" height="200" fill="url(#stoneRam)" stroke="#ffd700" stroke-width="1.5" />
        <!-- Sculpted Golden Ram Horns on Armrests -->
        <g stroke="#ffd700" stroke-width="2.5" fill="none">
          <path d="M -55 -40 C -75 -40 -80 -20 -60 -15 C -45 -10 -55 -25 -52 -25" />
          <path d="M 55 -40 C 75 -40 80 -20 60 -15 C 45 -10 55 -25 52 -25" />
        </g>
        <circle cx="-55" cy="-28" r="4" fill="#ffd700" /><circle cx="55" cy="-28" r="4" fill="#ffd700" />

        <!-- Enthroned Sovereign Monarch -->
        <g>
          <!-- Polished Bronze Cuirass & Imperial Crimson Robes -->
          <path d="M -30 115 L -22 -15 L 22 -15 L 30 115 Z" fill="#6a040f" stroke="#ffd700" stroke-width="1.3" />
          <rect x="-16" y="-15" width="32" height="45" rx="3" fill="#b08968" stroke="#ffd700" stroke-width="1" />
          <!-- Head with Geometric Silver Beard & Faceted Crown -->
          <circle cx="0" cy="-35" r="10" fill="#fde2e4" />
          <path d="M -8 -20 Q 0 15 8 -20 Z" fill="#e2eafc" stroke="#b6ccfe" stroke-width="0.8" />
          <polygon points="-14,-46 -8,-60 0,-52 8,-60 14,-46" fill="#ffd700" stroke="#b78727" stroke-width="1" />

          <!-- Ankh Scepter of Solar Fire in Right Hand -->
          <g transform="translate(38, 5)">
            <circle cx="0" cy="-14" r="6" fill="none" stroke="#ffd700" stroke-width="2.2" />
            <line x1="0" y1="-8" x2="0" y2="35" stroke="#ffd700" stroke-width="2.5" />
            <line x1="-8" y1="0" x2="8" y2="0" stroke="#ffd700" stroke-width="2.5" />
            <circle cx="0" cy="-14" r="2.5" fill="#f97316" />
          </g>

          <!-- Glass Orb Enclosing Miniature Planetary System in Left Hand -->
          <g transform="translate(-38, 15)">
            <circle cx="0" cy="0" r="11" fill="#0d1b2a" stroke="#ffd700" stroke-width="1.2" />
            <ellipse cx="0" cy="0" rx="9" ry="3" fill="none" stroke="#00b4d8" stroke-width="0.8" />
            <circle cx="0" cy="0" r="3" fill="#f4a261" />
            <circle cx="5" cy="-2" r="1" fill="#ffffff" />
          </g>
        </g>
      </g>
    `
  },

  // 5: The Hierophant (Bridge of Sacred Mysteries)
  maj_05: {
    defs: `
      <linearGradient id="hieroSky" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#0a0514" />
        <stop offset="50%" stop-color="#210d33" />
        <stop offset="100%" stop-color="#5c1d39" />
      </linearGradient>
    `,
    svg: `
      <g transform="translate(150, 230)">
        <rect x="-128" y="-170" width="256" height="340" fill="url(#hieroSky)" />

        <!-- Floating Gothic Cathedral Arches hovering without walls -->
        <g stroke="#ffd700" stroke-width="1.2" fill="none" opacity="0.6">
          <path d="M -90 120 L -90 -40 Q -90 -120 0 -150 Q 90 -120 90 -40 L 90 120" />
          <path d="M -65 120 L -65 -30 Q -65 -90 0 -115 Q 65 -90 65 -30 L 65 120" />
          <circle cx="0" cy="-115" r="16" stroke-dasharray="2, 3" />
        </g>

        <!-- The Hierophant on Elevated Ivory Dais -->
        <g>
          <!-- Papal Vestments of Crimson & Gold -->
          <path d="M -30 95 L -20 -20 L 20 -20 L 30 95 Z" fill="#6f1d1b" stroke="#ffd700" stroke-width="1.3" />
          <!-- Pallium with 3 Golden Crosses -->
          <path d="M -7 -20 L -7 50 L 0 60 L 7 50 L 7 -20 Z" fill="#fdfbf7" stroke="#ffd700" stroke-width="0.8" />
          <line x1="-4" y1="-5" x2="4" y2="-5" stroke="#6f1d1b" stroke-width="1.5" />
          <line x1="-4" y1="15" x2="4" y2="15" stroke="#6f1d1b" stroke-width="1.5" />
          <line x1="-4" y1="35" x2="4" y2="35" stroke="#6f1d1b" stroke-width="1.5" />

          <!-- Triple Levitating Golden Tiara (Sacred Geometry Rings) -->
          <g transform="translate(0, -68)">
            <ellipse cx="0" cy="0" rx="16" ry="4.5" fill="#ffd700" stroke="#b78727" stroke-width="1" />
            <ellipse cx="0" cy="-9" rx="13" ry="3.8" fill="#ffd700" stroke="#b78727" stroke-width="1" />
            <ellipse cx="0" cy="-18" rx="9" ry="3" fill="#ffd700" stroke="#b78727" stroke-width="1" />
            <polygon points="0,-27 -3,-21 3,-21" fill="#fff" />
          </g>
          <circle cx="0" cy="-44" r="10" fill="#fde2e4" />

          <!-- Right Hand: Esoteric Blessing Channeling 3 Golden Light Rays -->
          <circle cx="28" cy="-18" r="4.5" fill="#fde2e4" />
          <path d="M 28 -18 L 65 -60 M 28 -18 L 80 -40 M 28 -18 L 85 -15" stroke="#ffd700" stroke-width="1.2" stroke-dasharray="2, 2" />

          <!-- Left Hand: Triple-Cross Scepter -->
          <g transform="translate(-40, -10)">
            <line x1="0" y1="-75" x2="0" y2="95" stroke="#ffd700" stroke-width="2.5" />
            <line x1="-16" y1="-60" x2="16" y2="-60" stroke="#ffd700" stroke-width="2.5" />
            <line x1="-11" y1="-48" x2="11" y2="-48" stroke="#ffd700" stroke-width="2" />
            <line x1="-7" y1="-38" x2="7" y2="-38" stroke="#ffd700" stroke-width="1.5" />
          </g>
        </g>

        <!-- Floating Crossed Antique Skeleton Keys of Gold & Silver -->
        <g transform="translate(0, 115)">
          <line x1="-22" y1="-16" x2="22" y2="16" stroke="#ffd700" stroke-width="3" stroke-linecap="round" />
          <circle cx="-22" cy="-16" r="5" fill="none" stroke="#ffd700" stroke-width="2.5" />
          <line x1="16" y1="12" x2="22" y2="6" stroke="#ffd700" stroke-width="2" />

          <line x1="-22" y1="16" x2="22" y2="-16" stroke="#e0e6ed" stroke-width="3" stroke-linecap="round" />
          <circle cx="-22" cy="16" r="5" fill="none" stroke="#e0e6ed" stroke-width="2.5" />
          <line x1="16" y1="-12" x2="22" y2="-6" stroke="#e0e6ed" stroke-width="2" />
        </g>

        <!-- Twin Kneeling Acolytes with Mirror Faces -->
        <ellipse cx="-52" cy="110" rx="9" ry="12" fill="#0077b6" />
        <circle cx="-52" cy="94" r="6" fill="#e0e6ed" stroke="#ffd700" stroke-width="1" />
        <ellipse cx="52" cy="110" rx="9" ry="12" fill="#2d6a4f" />
        <circle cx="52" cy="94" r="6" fill="#e0e6ed" stroke="#ffd700" stroke-width="1" />
      </g>
    `
  },

  // 6: The Lovers (Alchemy of Duality)
  maj_06: {
    defs: `
      <linearGradient id="lovSky" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#12041a" />
        <stop offset="40%" stop-color="#4a154b" />
        <stop offset="70%" stop-color="#802a5c" />
        <stop offset="100%" stop-color="#f39c12" />
      </linearGradient>
      <radialGradient id="lovEclipse" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#12041a" />
        <stop offset="60%" stop-color="#12041a" />
        <stop offset="80%" stop-color="#ffd700" />
        <stop offset="100%" stop-color="#f39c12" stop-opacity="0" />
      </radialGradient>
    `,
    svg: `
      <g transform="translate(150, 230)">
        <rect x="-128" y="-170" width="256" height="340" fill="url(#lovSky)" />

        <!-- Great Solar Eclipse overhead -->
        <circle cx="0" cy="-95" r="32" fill="url(#lovEclipse)" />
        <circle cx="0" cy="-95" r="24" fill="#0d0417" stroke="#ffd700" stroke-width="1.8" />
        <!-- Corona Rays -->
        <g stroke="#ffd700" stroke-width="1" opacity="0.7">
          <line x1="0" y1="-132" x2="0" y2="-124" /><line x1="28" y1="-123" x2="22" y2="-117" />
          <line x1="-28" y1="-123" x2="-22" y2="-117" /><line x1="37" y1="-95" x2="29" y2="-95" />
          <line x1="-37" y1="-95" x2="-29" y2="-95" />
        </g>

        <!-- Colossal Wings of Archangel Raphael (Peacock Nebulae) -->
        <path d="M -85 -55 Q -40 -105 0 -65 Q 40 -105 85 -55 Q 30 -35 0 -35 Q -30 -35 -85 -55 Z" fill="#6a0dad" stroke="#ffd700" stroke-width="1.3" opacity="0.9" />
        <circle cx="-45" cy="-60" r="4" fill="#00ffff" /><circle cx="45" cy="-60" r="4" fill="#00ffff" />
        <circle cx="0" cy="-62" r="9" fill="#fde2e4" />

        <!-- Spiral Red Mountain Peak of Spiritual Ascent between them -->
        <polygon points="-30,120 0,35 30,120" fill="#9d0208" stroke="#ffd700" stroke-width="1" />
        <path d="M -15 110 Q 0 80 15 50" stroke="#ffd700" stroke-width="1.2" fill="none" stroke-dasharray="2, 2" />

        <!-- Woman under Tree of Knowledge (Starry Serpent & Glowing Fruit) -->
        <g transform="translate(-50, 50)">
          <!-- Tree of Knowledge with Emerald Serpent -->
          <path d="M -20 -60 Q -32 -20 -20 30" stroke="#1b4332" stroke-width="5" fill="none" />
          <circle cx="-25" cy="-45" r="4.5" fill="#e74c3c" /><circle cx="-12" cy="-30" r="4.5" fill="#e74c3c" />
          <!-- Coiled Starry Serpent -->
          <path d="M -20 -45 Q -12 -38 -20 -30 Q -28 -22 -20 -15" stroke="#2ec4b6" stroke-width="2.5" fill="none" />
          <!-- Feminine Figure -->
          <circle cx="12" cy="-25" r="7.5" fill="#fde2e4" />
          <path d="M 6 -15 L 18 -15 L 22 45 L 2 45 Z" fill="#fdfbf7" stroke="#ffd700" stroke-width="0.8" />
        </g>

        <!-- Man under Tree of Life (12 Branches of Solar Flame) -->
        <g transform="translate(50, 50)">
          <!-- Tree of Life with 12 Flames -->
          <line x1="20" y1="-55" x2="20" y2="30" stroke="#7f4f24" stroke-width="4" />
          <circle cx="20" cy="-60" r="4" fill="#ffd700" /><circle cx="12" cy="-48" r="3.5" fill="#ff9f1c" />
          <circle cx="28" cy="-48" r="3.5" fill="#ff9f1c" /><circle cx="15" cy="-35" r="3" fill="#e74c3c" />
          <!-- Masculine Figure -->
          <circle cx="-12" cy="-25" r="7.5" fill="#fde2e4" />
          <path d="M -18 -15 L -6 -15 L -2 45 L -22 45 Z" fill="#e0e1dd" stroke="#ffd700" stroke-width="0.8" />
        </g>

        <!-- Floating Radiant Heart Portal in Sky -->
        <path d="M 0 -22 C -8 -32 0 -42 0 -30 C 0 -42 8 -32 0 -22 Z" fill="#e63946" stroke="#ffd700" stroke-width="1.2" transform="scale(1.2)" />
      </g>
    `
  },

  // 7: The Chariot (Victor of Dual Wills)
  maj_07: {
    defs: `
      <linearGradient id="chariotSky" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#020817" />
        <stop offset="50%" stop-color="#092147" />
        <stop offset="100%" stop-color="#1e4d8c" />
      </linearGradient>
    `,
    svg: `
      <g transform="translate(150, 230)">
        <rect x="-128" y="-170" width="256" height="340" fill="url(#chariotSky)" />

        <!-- Starry Canopy Floating Without Pillars -->
        <path d="M -70 -120 L 70 -120 L 58 -80 L -58 -80 Z" fill="#03071e" stroke="#ffd700" stroke-width="1.4" />
        <circle cx="-35" cy="-100" r="2" fill="#ffd700" /><circle cx="0" cy="-100" r="2.5" fill="#fff" /><circle cx="35" cy="-100" r="2" fill="#ffd700" />
        <line x1="-35" y1="-100" x2="0" y2="-100" stroke="#ffd700" stroke-width="0.5" /><line x1="0" y1="-100" x2="35" y2="-100" stroke="#ffd700" stroke-width="0.5" />

        <!-- The Armored Charioteer -->
        <g>
          <circle cx="0" cy="-55" r="10" fill="#fde2e4" />
          <!-- Star-Crowned Helmet -->
          <polygon points="-9,-66 0,-76 9,-66 0,-63" fill="#ffd700" stroke="#b78727" stroke-width="0.8" />
          <!-- Golden Plate Armor with Crescent Moon Epaulets -->
          <path d="M -18 -44 L 18 -44 L 22 5 L -22 5 Z" fill="#c69500" stroke="#ffd700" stroke-width="1.3" />
          <path d="M -24 -42 C -18 -36 -18 -48 -24 -42 Z" fill="#ffffff" />
          <path d="M 24 -42 C 18 -36 18 -48 24 -42 Z" fill="#ffffff" />
          <!-- Wand of Starlight Will in Hand -->
          <line x1="20" y1="-25" x2="42" y2="-65" stroke="#ffd700" stroke-width="2.5" />
          <circle cx="42" cy="-65" r="3.5" fill="#00ffff" />
        </g>

        <!-- Levitating Cubic Stone Chariot (Lapis Lazuli & Gold) -->
        <rect x="-60" y="5" width="120" height="75" rx="3" fill="#0d1b2a" stroke="#ffd700" stroke-width="1.8" />
        <!-- Winged Solar Disc Shield -->
        <circle cx="0" cy="42" r="10" fill="#e63946" stroke="#ffd700" stroke-width="1.2" />
        <path d="M -30 42 Q -15 30 0 42 Q 15 30 30 42" stroke="#ffd700" stroke-width="2" fill="none" />

        <!-- Spinning Golden Gyroscopic Rings beneath the Chariot -->
        <ellipse cx="0" cy="85" rx="45" ry="12" fill="none" stroke="#ffd700" stroke-width="1.5" stroke-dasharray="6, 3" />
        <ellipse cx="0" cy="85" rx="25" ry="7" fill="none" stroke="#00ffff" stroke-width="1" />

        <!-- Twin Resting Surrealist Sphinxes on Mirrored Water -->
        <!-- Black Sphinx (Left - Shadow) -->
        <g transform="translate(-45, 95)">
          <path d="M -25 25 Q -10 0 10 10 L 15 45 L -35 45 Z" fill="#000814" stroke="#ffd700" stroke-width="1" />
          <circle cx="-12" cy="12" r="8" fill="#050505" stroke="#ffd700" stroke-width="0.8" />
          <circle cx="-10" cy="12" r="2" fill="#e63946" /> <!-- Glowing Ruby Eye -->
        </g>
        <!-- White Sphinx (Right - Solar) -->
        <g transform="translate(45, 95)">
          <path d="M 25 25 Q 10 0 -10 10 L -15 45 L 35 45 Z" fill="#fdfbf7" stroke="#ffd700" stroke-width="1" />
          <circle cx="12" cy="12" r="8" fill="#ede8d0" stroke="#ffd700" stroke-width="0.8" />
          <circle cx="10" cy="12" r="2" fill="#00b4d8" /> <!-- Glowing Cyan Eye -->
        </g>
      </g>
    `
  },

  // 8: Strength (The Gentle Conquest)
  maj_08: {
    defs: `
      <linearGradient id="strSky" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#190326" />
        <stop offset="45%" stop-color="#4a0e4e" />
        <stop offset="80%" stop-color="#9333ea" />
        <stop offset="100%" stop-color="#f59e0b" />
      </linearGradient>
      <linearGradient id="lionMane" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#fffbeb" />
        <stop offset="40%" stop-color="#f59e0b" />
        <stop offset="80%" stop-color="#d97706" />
        <stop offset="100%" stop-color="#78350f" />
      </linearGradient>
    `,
    svg: `
      <g transform="translate(150, 230)">
        <rect x="-128" y="-170" width="256" height="340" fill="url(#strSky)" />

        <!-- Violet Dusk Dunes & Floating Geometric Stones -->
        <path d="M -128,70 Q -40,30 50,75 Q 90,60 128,80 L 128,170 L -128,170 Z" fill="#2e1065" />
        <polygon points="75,20 85,10 95,22 85,32" fill="#f59e0b" opacity="0.6" stroke="#ffd700" stroke-width="0.8" />

        <!-- Blooming Rose Lemniscate (Infinity Halo) -->
        <g transform="translate(0, -95)">
          <path d="M -30 0 C -48 -20 -48 20 -30 0 C -15 -20 15 20 30 0 C 48 -20 48 20 30 0 C 15 -20 -15 20 -30 0 Z" fill="none" stroke="#ffd700" stroke-width="2.5" />
          <!-- Wild Rose Blooms along the infinity loop -->
          <circle cx="-30" cy="0" r="4" fill="#e11d48" /><circle cx="30" cy="0" r="4" fill="#e11d48" />
          <circle cx="0" cy="0" r="5" fill="#f43f5e" /><circle cx="0" cy="0" r="2" fill="#ffd700" />
        </g>

        <!-- Serene Maiden in White Starlight -->
        <g transform="translate(-25, 0)">
          <circle cx="0" cy="-56" r="10.5" fill="#fde2e4" />
          <!-- Garland of Wild Crimson Roses on her hair -->
          <path d="M -8 -62 Q 0 -68 8 -62" stroke="#e11d48" stroke-width="2" fill="none" />
          <!-- White Starlight Gown -->
          <path d="M -15 -44 L 15 -44 L 25 70 L -25 70 Z" fill="#fdfbf7" stroke="#ffd700" stroke-width="1.2" />
          <!-- Arms gently closing / caressing the Lion's jaw -->
          <path d="M 8 -30 L 32 -10 L 45 0" stroke="#fde2e4" stroke-width="3" stroke-linecap="round" fill="none" />
          <path d="M 0 -30 L 25 -5 L 42 12" stroke="#fde2e4" stroke-width="3" stroke-linecap="round" fill="none" />
        </g>

        <!-- Celestial Solar Lion (Body of Sunbeams & Stardust) -->
        <g transform="translate(30, 20)">
          <!-- Lion Body & Hindquarters -->
          <path d="M -10 -20 Q 30 -40 60 -10 Q 75 10 70 70 L 0 70 Z" fill="url(#lionMane)" stroke="#ffd700" stroke-width="1.5" />
          <!-- Majestic Solar Mane Flares -->
          <g fill="#f59e0b" stroke="#ffd700" stroke-width="0.8">
            <polygon points="-12,-20 -25,-35 -15,-40" />
            <polygon points="-10,-35 5,-52 0,-38" />
            <polygon points="5,-45 25,-58 18,-42" />
            <polygon points="20,-48 45,-55 35,-38" />
          </g>
          <!-- Lion Head & Open Adoring Maw -->
          <circle cx="-10" cy="-10" r="16" fill="url(#lionMane)" />
          <path d="M -22 -15 Q -10 -15 -6 -5 Q -10 5 -22 2 Z" fill="#78350f" />
          <circle cx="-14" cy="-14" r="2.5" fill="#ffd700" />
          <!-- Adoring Pink Tongue gently licking her hand -->
          <path d="M -12 -5 Q -18 -3 -16 2 Z" fill="#fb7185" />
        </g>

        <!-- Floating Rose Petals turning into Rubies -->
        <circle cx="-55" cy="20" r="3.5" fill="#e11d48" stroke="#ffd700" stroke-width="0.6" />
        <circle cx="-40" cy="50" r="2.8" fill="#e11d48" />
        <circle cx="15" cy="-20" r="3.2" fill="#ffd700" />
      </g>
    `
  },

  // 9: The Hermit (Solitary Beacon of Eternity)
  maj_09: {
    defs: `
      <linearGradient id="hermSky" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#02040a" />
        <stop offset="50%" stop-color="#081026" />
        <stop offset="100%" stop-color="#14213d" />
      </linearGradient>
      <linearGradient id="hermBeam" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#ffffff" stop-opacity="0.9" />
        <stop offset="40%" stop-color="#ffd700" stop-opacity="0.5" />
        <stop offset="100%" stop-color="#e5a93c" stop-opacity="0" />
      </linearGradient>
    `,
    svg: `
      <g transform="translate(150, 230)">
        <rect x="-128" y="-170" width="256" height="340" fill="url(#hermSky)" />

        <!-- Deep Space Cosmic Constellations -->
        <circle cx="-80" cy="-130" r="1.5" fill="#fff" /><circle cx="-40" cy="-150" r="2" fill="#ffd700" />
        <circle cx="70" cy="-140" r="1.5" fill="#fff" /><circle cx="95" cy="-110" r="1.8" fill="#ffd700" />

        <!-- Needle-Sharp Icy Peak Piercing Sea of Clouds -->
        <polygon points="0,-10 -65,170 65,170" fill="#091324" stroke="#48cae4" stroke-width="0.8" />
        <!-- Cloud Inversion Stratum below Peak -->
        <path d="M -128,80 Q -60,60 0,75 Q 60,60 128,80 L 128,140 Q 60,110 0,125 Q -60,110 -128,140 Z" fill="#1e293b" opacity="0.75" />

        <!-- Golden Lantern of Solomon Held High (Sharp Geometric Light Beam) -->
        <g transform="translate(32, -80)">
          <!-- Lantern Body -->
          <rect x="-10" y="-15" width="20" height="30" rx="3" fill="#0b0818" stroke="#ffd700" stroke-width="1.5" />
          <polygon points="0,-22 -12,-15 12,-15" fill="#ffd700" />
          <!-- 6-Pointed Star of Solomon inside Lantern -->
          <polygon points="0,-8 7,4 -7,4" fill="#ffffff" />
          <polygon points="0,6 -7,-6 7,-6" fill="#ffffff" />
          <circle cx="0" cy="0" r="2" fill="#ffd700" />
          <!-- Geometric Pyramid Light Beam Cutting Through the Mist -->
          <polygon points="0,15 -70,230 70,230" fill="url(#hermBeam)" />
        </g>

        <!-- The Hooded Elder / Hermit Figure -->
        <g>
          <!-- Deep Midnight Cloak merging with the Starfield -->
          <path d="M -25 -40 L 0 -55 L 25 -40 L 30 110 L -30 110 Z" fill="#0f172a" stroke="#ffd700" stroke-width="1.2" />
          <!-- Hood & Flowing Silver Patriarchal Beard -->
          <path d="M -12 -58 C -18 -75 0 -80 0 -80 C 0 -80 18 -75 12 -58 Z" fill="#1e293b" stroke="#ffd700" stroke-width="1" />
          <path d="M -7 -52 Q 0 -15 7 -52 Z" fill="#f8fafc" stroke="#cbd5e1" stroke-width="0.8" />
          <!-- Raised Right Arm holding Lantern -->
          <path d="M 12 -40 L 28 -60 L 32 -75" stroke="#ffd700" stroke-width="2.5" stroke-linecap="round" fill="none" />
          <!-- Left Arm holding Ouroboros Headed Staff -->
          <line x1="-28" y1="-70" x2="-28" y2="110" stroke="#ffd700" stroke-width="2.5" />
          <circle cx="-28" cy="-70" r="6" fill="none" stroke="#ffd700" stroke-width="1.5" />
          <circle cx="-28" cy="-70" r="2" fill="#38bdf8" />
        </g>

        <!-- Luminous Winding Labyrinth Path visible in the clouds below -->
        <path d="M -45 135 Q 0 120 40 140 Q 20 160 -25 155 Q -10 170 30 168" stroke="#ffd700" stroke-width="1.2" fill="none" stroke-dasharray="2, 3" opacity="0.8" />
      </g>
    `
  },

  // 10: Wheel of Fortune (Cosmic Clockwork of Destiny)
  maj_10: {
    defs: `
      <linearGradient id="wheelVortex" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#050212" />
        <stop offset="50%" stop-color="#21083b" />
        <stop offset="100%" stop-color="#0a192f" />
      </linearGradient>
      <linearGradient id="wheelGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#fff8db" />
        <stop offset="50%" stop-color="#ffd700" />
        <stop offset="100%" stop-color="#b8860b" />
      </linearGradient>
    `,
    svg: `
      <g transform="translate(150, 230)">
        <rect x="-128" y="-170" width="256" height="340" fill="url(#wheelVortex)" />

        <!-- Swirling Cosmic Spiral Vortex -->
        <g stroke="#ffd700" stroke-width="0.6" fill="none" opacity="0.4">
          <path d="M 0 0 C 30 -60 100 -50 90 20 C 80 90 -20 100 -60 60 C -100 20 -80 -70 -20 -90" />
          <path d="M 0 0 C -30 60 -100 50 -90 -20 C -80 -90 20 -100 60 -60 C 100 -20 80 70 20 90" />
        </g>

        <!-- Monumental Celestial Astrolabe & Clockwork Wheel -->
        <g>
          <!-- Outer Bronze & Gold Wheel Rim -->
          <circle cx="0" cy="0" r="70" fill="#0d081f" stroke="url(#wheelGold)" stroke-width="4" />
          <circle cx="0" cy="0" r="56" fill="none" stroke="url(#wheelGold)" stroke-width="1.5" stroke-dasharray="4, 3" />
          <circle cx="0" cy="0" r="42" fill="#170c36" stroke="url(#wheelGold)" stroke-width="1.8" />
          <circle cx="0" cy="0" r="14" fill="#ffd700" stroke="#fff" stroke-width="1.2" />

          <!-- 8 Radial Astrolabe Spokes -->
          <g stroke="url(#wheelGold)" stroke-width="1.5">
            <line x1="0" y1="-70" x2="0" y2="70" />
            <line x1="-70" y1="0" x2="70" y2="0" />
            <line x1="-49" y1="-49" x2="49" y2="49" />
            <line x1="-49" y1="49" x2="49" y2="-49" />
          </g>

          <!-- T-A-R-O Letters & Hebrew Sigils on Outer Rim -->
          <text x="0" y="-58" font-family="'Cinzel', serif" font-size="9" font-weight="700" fill="#ffd700" text-anchor="middle">T</text>
          <text x="58" y="3" font-family="'Cinzel', serif" font-size="9" font-weight="700" fill="#ffd700" text-anchor="middle">A</text>
          <text x="0" y="65" font-family="'Cinzel', serif" font-size="9" font-weight="700" fill="#ffd700" text-anchor="middle">R</text>
          <text x="-58" y="3" font-family="'Cinzel', serif" font-size="9" font-weight="700" fill="#ffd700" text-anchor="middle">O</text>

          <!-- Alchemical Sigils inside wheel -->
          <circle cx="0" cy="-28" r="3" fill="#00ffff" /> <!-- Mercury -->
          <polygon points="28,0 24,-5 24,5" fill="#f97316" /> <!-- Sulfur -->
          <circle cx="0" cy="28" r="3" fill="#2ecc71" /> <!-- Salt -->
          <polygon points="-28,0 -24,-5 -24,5" fill="#3b82f6" /> <!-- Water -->
        </g>

        <!-- Golden Winged Sphinx perched at Apex (holding sword of light) -->
        <g transform="translate(0, -78)">
          <path d="M -15 0 Q 0 -22 15 0 Z" fill="#ffd700" stroke="#b78727" stroke-width="1" />
          <circle cx="0" cy="-18" r="7" fill="#ffd700" />
          <!-- Blue Nemes Headcloth -->
          <path d="M -7 -20 L 7 -20 L 9 -10 L -9 -10 Z" fill="#1e3a8a" />
          <!-- Diamond Sword of Light -->
          <line x1="8" y1="-28" x2="8" y2="5" stroke="#ffffff" stroke-width="2" />
          <line x1="4" y1="-5" x2="12" y2="-5" stroke="#ffd700" stroke-width="1.2" />
        </g>

        <!-- Hermanubis (Jackal Guide of Light) ascending right -->
        <g transform="translate(72, 20)">
          <path d="M 0 -25 Q 15 -10 10 25 L 0 25 Z" fill="#d97706" stroke="#ffd700" stroke-width="1" />
          <!-- Jackal Head -->
          <polygon points="0,-25 -8,-38 0,-32" fill="#d97706" />
          <circle cx="-2" cy="-28" r="1.5" fill="#ffffff" />
        </g>

        <!-- Typhon (Serpentine Dragon of Shadow) descending left -->
        <g transform="translate(-72, 20)">
          <path d="M 0 -25 Q -15 0 0 25 Q -10 40 5 45" stroke="#e11d48" stroke-width="3" fill="none" />
          <circle cx="0" cy="-25" r="4" fill="#e11d48" />
        </g>

        <!-- Four Cherubic Watchers in Clouds (Angel, Eagle, Lion, Bull) -->
        <circle cx="-100" cy="-140" r="8" fill="#e2e8f0" stroke="#ffd700" stroke-width="0.8" /> <!-- Human Angel -->
        <polygon points="95,-150 105,-138 85,-138" fill="#94a3b8" stroke="#ffd700" stroke-width="0.8" /> <!-- Eagle -->
        <circle cx="-100" cy="140" r="9" fill="#f59e0b" stroke="#ffd700" stroke-width="0.8" /> <!-- Lion -->
        <circle cx="100" cy="140" r="9" fill="#78350f" stroke="#ffd700" stroke-width="0.8" /> <!-- Bull -->
      </g>
    `
  },

  // 11: Justice (Scales of Cosmic Equilibrium)
  maj_11: {
    defs: `
      <linearGradient id="justSky" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#080e1c" />
        <stop offset="50%" stop-color="#192841" />
        <stop offset="100%" stop-color="#2d4a77" />
      </linearGradient>
      <linearGradient id="justPrism" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#ffffff" />
        <stop offset="25%" stop-color="#00ffff" />
        <stop offset="50%" stop-color="#ffd700" />
        <stop offset="75%" stop-color="#ff00ff" />
        <stop offset="100%" stop-color="#ffffff" />
      </linearGradient>
    `,
    svg: `
      <g transform="translate(150, 230)">
        <rect x="-128" y="-170" width="256" height="340" fill="url(#justSky)" />

        <!-- Floating Quartz Columns -->
        <rect x="-105" y="-150" width="22" height="280" fill="#1e293b" opacity="0.6" stroke="#ffd700" stroke-width="0.8" />
        <rect x="83" y="-150" width="22" height="280" fill="#1e293b" opacity="0.6" stroke="#ffd700" stroke-width="0.8" />

        <!-- Radiant Sacred Geometry Mandala behind Throne -->
        <circle cx="0" cy="-30" r="65" fill="none" stroke="#ffd700" stroke-width="0.8" stroke-dasharray="3, 3" opacity="0.7" />
        <polygon points="0,-95 46,-49 65,0 46,49 0,95 -46,49 -65,0 -46,-49" fill="none" stroke="#ffd700" stroke-width="0.6" opacity="0.4" />

        <!-- Seated Figure of Justice -->
        <g>
          <!-- Crimson and Violet Robes of Equilibrium -->
          <path d="M -30 110 L -20 -15 L 20 -15 L 30 110 Z" fill="#701a75" stroke="#ffd700" stroke-width="1.3" />
          <circle cx="0" cy="-40" r="11" fill="#fde2e4" />
          <!-- Translucent Golden Veil of Cosmic Vision (Blindfold) -->
          <rect x="-11" y="-44" width="22" height="7" fill="#ffd700" opacity="0.85" />
          <!-- Crown of Three Turrets -->
          <polygon points="-12,-51 -10,-60 -5,-54 0,-62 5,-54 10,-60 12,-51" fill="#ffd700" stroke="#b78727" stroke-width="0.8" />

          <!-- Upright Double-Edged Crystal Broadsword (Right Hand) splitting light -->
          <g transform="translate(38, -25)">
            <line x1="0" y1="-85" x2="0" y2="40" stroke="url(#justPrism)" stroke-width="3" stroke-linecap="round" />
            <line x1="-12" y1="18" x2="12" y2="18" stroke="#ffd700" stroke-width="2.5" />
            <circle cx="0" cy="40" r="3.5" fill="#ffd700" />
            <!-- Rainbow Light Refraction Rays -->
            <path d="M 0 -85 L 18 -110 M 0 -85 L 30 -95 M 0 -85 L 35 -75" stroke="#00ffff" stroke-width="1" stroke-dasharray="2, 2" />
          </g>

          <!-- Golden Balance Scale in Perfect Equilibrium (Left Hand) -->
          <g transform="translate(-40, -10)">
            <!-- Fulcrum & Beam -->
            <line x1="-30" y1="0" x2="30" y2="0" stroke="#ffd700" stroke-width="2" />
            <circle cx="0" cy="0" r="3" fill="#ffd700" />
            <line x1="0" y1="0" x2="0" y2="-20" stroke="#ffd700" stroke-width="1.5" />
            <!-- Left Pan (Feather of Ma'at) -->
            <line x1="-25" y1="0" x2="-32" y2="25" stroke="#ffd700" stroke-width="0.8" />
            <line x1="-25" y1="0" x2="-18" y2="25" stroke="#ffd700" stroke-width="0.8" />
            <path d="M -34 25 Q -25 32 -16 25 Z" fill="#ffd700" />
            <!-- Iridescent Feather -->
            <path d="M -25 24 Q -28 12 -23 5 Q -21 12 -25 24 Z" fill="#06b6d4" stroke="#fff" stroke-width="0.5" />
            <!-- Right Pan (Blazing Miniature Star) -->
            <line x1="25" y1="0" x2="18" y2="25" stroke="#ffd700" stroke-width="0.8" />
            <line x1="25" y1="0" x2="32" y2="25" stroke="#ffd700" stroke-width="0.8" />
            <path d="M 16 25 Q 25 32 34 25 Z" fill="#ffd700" />
            <!-- Blazing Star -->
            <circle cx="25" cy="18" r="4.5" fill="#f59e0b" stroke="#ffffff" stroke-width="0.8" />
          </g>
        </g>
      </g>
    `
  },

  // 12: The Hanged Man (Transcendent Surrender)
  maj_12: {
    defs: `
      <linearGradient id="hangSky" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#020d1a" />
        <stop offset="45%" stop-color="#06283d" />
        <stop offset="75%" stop-color="#1363df" />
        <stop offset="100%" stop-color="#050a14" />
      </linearGradient>
      <radialGradient id="hangNimbus" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#ffffff" stop-opacity="1" />
        <stop offset="35%" stop-color="#ffd700" stop-opacity="0.8" />
        <stop offset="70%" stop-color="#ff7b00" stop-opacity="0.3" />
        <stop offset="100%" stop-color="#000000" stop-opacity="0" />
      </radialGradient>
    `,
    svg: `
      <g transform="translate(150, 230)">
        <rect x="-128" y="-170" width="256" height="340" fill="url(#hangSky)" />

        <!-- Inverted Celestial Deep Sea with Rising Water Droplets -->
        <circle cx="-60" cy="120" r="2" fill="#38bdf8" /><circle cx="50" cy="100" r="1.5" fill="#38bdf8" />
        <circle cx="-30" cy="50" r="2.5" fill="#ffffff" opacity="0.8" /><circle cx="70" cy="30" r="2" fill="#ffffff" />
        <path d="M -80 140 Q 0 110 80 140" stroke="#38bdf8" stroke-width="1" fill="none" opacity="0.4" />

        <!-- The Living World Tree (Tau-Cross sprouting leaves and golden fruit) -->
        <g stroke="#ffd700" stroke-width="1.2">
          <!-- Horizontal Crossbar -->
          <rect x="-95" y="-140" width="190" height="20" rx="4" fill="#38220f" stroke="#ffd700" stroke-width="1.5" />
          <!-- Vertical Trunk -->
          <rect x="-12" y="-140" width="24" height="290" fill="#38220f" stroke="#ffd700" stroke-width="1.5" />
          <!-- Living Emerald Leaves & Golden Fruit Sprouting -->
          <path d="M -60 -140 Q -50 -160 -40 -140" fill="#22c55e" />
          <path d="M 40 -140 Q 50 -160 60 -140" fill="#22c55e" />
          <circle cx="-50" cy="-150" r="3.5" fill="#ffd700" /><circle cx="50" cy="-150" r="3.5" fill="#ffd700" />
        </g>

        <!-- Suspended Figure (Inverted by right ankle, calm serenity) -->
        <g transform="translate(0, -20)">
          <!-- Golden Binding Cord -->
          <line x1="0" y1="-120" x2="0" y2="-75" stroke="#ffd700" stroke-width="2.5" stroke-dasharray="3, 2" />

          <!-- Legs: Free left leg crossed behind right in the sacred number '4' -->
          <line x1="0" y1="-75" x2="0" y2="-20" stroke="#fde2e4" stroke-width="4" stroke-linecap="round" />
          <line x1="0" y1="-45" x2="-25" y2="-45" stroke="#fde2e4" stroke-width="4" stroke-linecap="round" />
          <line x1="-25" y1="-45" x2="0" y2="-20" stroke="#fde2e4" stroke-width="4" stroke-linecap="round" />

          <!-- Tunic (Blue) & Trousers (Crimson) -->
          <path d="M -12 -20 L 12 -20 L 16 35 L -16 35 Z" fill="#2563eb" stroke="#ffd700" stroke-width="1" />
          <!-- Arms peacefully folded behind back in triangle shape -->
          <polygon points="-16,0 -30,25 0,25" fill="none" stroke="#fde2e4" stroke-width="3" stroke-linecap="round" />
          <polygon points="16,0 30,25 0,25" fill="none" stroke="#fde2e4" stroke-width="3" stroke-linecap="round" />

          <!-- Head with Blinding Solar Enlightenment Nimbus -->
          <circle cx="0" cy="55" r="36" fill="url(#hangNimbus)" />
          <circle cx="0" cy="55" r="11" fill="#fde2e4" stroke="#ffd700" stroke-width="0.8" />
          <!-- Serene, blissful smile of liberation -->
          <path d="M -4 58 Q 0 62 4 58" stroke="#1e293b" stroke-width="1" fill="none" />
        </g>
      </g>
    `
  },

  // 13: Death (Metamorphosis of Eternity)
  maj_13: {
    defs: `
      <linearGradient id="deathSky" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#040208" />
        <stop offset="45%" stop-color="#1a0b26" />
        <stop offset="75%" stop-color="#4a0e2e" />
        <stop offset="100%" stop-color="#ff7b00" />
      </linearGradient>
      <radialGradient id="dawnSun" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#ffffff" />
        <stop offset="40%" stop-color="#ffd700" />
        <stop offset="75%" stop-color="#ff5400" />
        <stop offset="100%" stop-color="#ff5400" stop-opacity="0" />
      </radialGradient>
    `,
    svg: `
      <g transform="translate(150, 230)">
        <rect x="-128" y="-170" width="256" height="340" fill="url(#deathSky)" />

        <!-- Twin Gateway Towers on Horizon with Rising Immortal Golden Dawn -->
        <rect x="-85" y="-50" width="18" height="90" fill="#0a0512" stroke="#ffd700" stroke-width="0.8" />
        <rect x="67" y="-50" width="18" height="90" fill="#0a0512" stroke="#ffd700" stroke-width="0.8" />
        <!-- Radiant Rising Sun between Towers -->
        <circle cx="0" cy="-20" r="28" fill="url(#dawnSun)" />
        <g stroke="#ffd700" stroke-width="1" opacity="0.8">
          <line x1="0" y1="-55" x2="0" y2="-45" /><line x1="25" y1="-45" x2="18" y2="-38" />
          <line x1="-25" y1="-45" x2="-18" y2="-38" />
        </g>

        <!-- Winding River Styx of Liquid Starlight -->
        <path d="M -128,80 Q -30,30 0,35 Q 40,40 128,15 L 128,170 L -128,170 Z" fill="#090a14" />
        <path d="M -80,50 Q 0,40 60,60" stroke="#38bdf8" stroke-width="1.5" fill="none" opacity="0.6" />

        <!-- Skeletal Knight in Obsidian Armor upon Pale Celestial Steed -->
        <g transform="translate(-10, 10)">
          <!-- Pale Steed of Mist and Starlight -->
          <path d="M -50 70 Q -20 10 30 25 Q 55 5 45 65 Z" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.2" />
          <circle cx="45" cy="20" r="3" fill="#00ffff" /> <!-- Cyan Eye -->
          <!-- Armored Skeletal Knight -->
          <path d="M -15 -35 L 12 -35 L 10 15 L -16 15 Z" fill="#0f172a" stroke="#ffd700" stroke-width="1.3" />
          <!-- Skull Visage in Steel Helmet -->
          <circle cx="-4" cy="-45" r="9" fill="#f1f5f9" stroke="#0f172a" stroke-width="1" />
          <circle cx="-6" cy="-45" r="1.8" fill="#000" /><circle cx="-1" cy="-45" r="1.8" fill="#000" />
          <!-- Standard with Mystic White Rose (5 Petals of Rebirth) -->
          <line x1="15" y1="20" x2="15" y2="-95" stroke="#ffd700" stroke-width="2.5" />
          <rect x="15" y="-95" width="45" height="35" fill="#020617" stroke="#ffd700" stroke-width="1" />
          <!-- White Rose -->
          <circle cx="37" cy="-78" r="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="0.8" />
          <circle cx="37" cy="-78" r="3" fill="#ffd700" />
        </g>

        <!-- Fallen King's Golden Crown in Sand & Fresh White Lotus Opening -->
        <g transform="translate(-65, 125)">
          <polygon points="-12,0 -8,-10 0,-4 8,-10 12,0" fill="#ffd700" stroke="#b45309" stroke-width="1" />
          <circle cx="0" cy="-2" r="1.5" fill="#e11d48" />
        </g>
        <g transform="translate(65, 125)">
          <!-- White Lotus -->
          <path d="M 0 0 C -8 -15 8 -15 0 0 Z" fill="#ffffff" stroke="#38bdf8" stroke-width="0.8" />
          <path d="M -4 0 C -14 -10 0 -10 -4 0 Z" fill="#ffffff" />
          <path d="M 4 0 C 14 -10 0 -10 4 0 Z" fill="#ffffff" />
          <circle cx="0" cy="-2" r="2" fill="#ffd700" />
        </g>
      </g>
    `
  },

  // 14: Temperance (Synthesis of Elements)
  maj_14: {
    defs: `
      <linearGradient id="tempSky" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#061224" />
        <stop offset="45%" stop-color="#163860" />
        <stop offset="75%" stop-color="#3b82f6" />
        <stop offset="100%" stop-color="#fef08a" />
      </linearGradient>
      <linearGradient id="tempStream" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#ffd700" />
        <stop offset="50%" stop-color="#ffffff" />
        <stop offset="100%" stop-color="#38bdf8" />
      </linearGradient>
    `,
    svg: `
      <g transform="translate(150, 230)">
        <rect x="-128" y="-170" width="256" height="340" fill="url(#tempSky)" />

        <!-- Winding Golden Mountain Path leading to Radiant Crown in Clouds -->
        <path d="M -15,100 Q 40,50 10,0 Q -20,-40 15,-80 Q 25,-100 20,-115" stroke="#fde047" stroke-width="2" fill="none" stroke-dasharray="3, 3" />
        <!-- Floating Golden Crown over distant peaks -->
        <g transform="translate(20, -118)">
          <polygon points="-8,0 -6,-8 0,-4 6,-8 8,0" fill="#ffd700" stroke="#fff" stroke-width="0.8" />
          <circle cx="0" cy="-12" r="14" fill="#ffd700" opacity="0.3" />
        </g>

        <!-- Colossal Wings of Angel (Lapis Lazuli & Ruby Flame Feathers) -->
        <path d="M -85 -35 Q -40 -100 0 -45 Q 40 -100 85 -35 Q 25 -20 0 -20 Q -25 -20 -85 -35 Z" fill="#1e40af" stroke="#ffd700" stroke-width="1.3" />
        <path d="M -65 -30 Q -30 -70 0 -35 Q 30 -70 65 -30" stroke="#f43f5e" stroke-width="2" fill="none" />

        <!-- Celestial Angel of Synthesis -->
        <g>
          <!-- White Gown with Square and Flaming Triangle -->
          <path d="M -22 -15 L 22 -15 L 30 105 L -30 105 Z" fill="#f8fafc" stroke="#ffd700" stroke-width="1.2" />
          <rect x="-8" y="0" width="16" height="16" fill="none" stroke="#0284c7" stroke-width="1.2" />
          <polygon points="0,2 6,14 -6,14" fill="#f97316" />
          <!-- Head with Solar Disc on Brow -->
          <circle cx="0" cy="-42" r="11" fill="#fde2e4" />
          <circle cx="0" cy="-48" r="4" fill="#ffd700" stroke="#fff" stroke-width="0.8" />

          <!-- Gravity-Defying Unbroken Arc of Liquid Light between Chalices -->
          <!-- Upper Chalice (Right Hand) -->
          <g transform="translate(35, -20)">
            <path d="M -8 -10 L 8 -10 L 5 8 L -5 8 Z" fill="#ffd700" stroke="#b45309" stroke-width="1" />
            <circle cx="0" cy="-10" r="4" fill="#38bdf8" />
          </g>
          <!-- Lower Chalice (Left Hand) -->
          <g transform="translate(-35, 25)">
            <path d="M -8 -10 L 8 -10 L 5 8 L -5 8 Z" fill="#ffd700" stroke="#b45309" stroke-width="1" />
            <circle cx="0" cy="-10" r="4" fill="#ffd700" />
          </g>
          <!-- The Impossible Fluid Stream -->
          <path d="M 35 -20 Q 0 0 -35 25" stroke="url(#tempStream)" stroke-width="3.5" fill="none" stroke-linecap="round" />
          <circle cx="0" cy="2" r="3" fill="#ffffff" />
        </g>

        <!-- One Foot on Fertile Earth (with purple irises), One Foot in Crystal Spring -->
        <g transform="translate(0, 105)">
          <!-- Earth & Irises (Left) -->
          <path d="M -80 0 L 0 0 L 0 45 L -80 45 Z" fill="#15803d" />
          <circle cx="-40" cy="10" r="4" fill="#9333ea" /><circle cx="-55" cy="18" r="4" fill="#9333ea" />
          <circle cx="-15" cy="5" r="4" fill="#fde2e4" /> <!-- Foot on earth -->

          <!-- Crystal Pool (Right) -->
          <path d="M 0 0 L 80 0 L 80 45 L 0 45 Z" fill="#0284c7" />
          <ellipse cx="40" cy="15" rx="35" ry="12" fill="#38bdf8" opacity="0.6" />
          <circle cx="15" cy="8" r="4" fill="#fde2e4" /> <!-- Foot in water -->
        </g>
      </g>
    `
  },

  // 15: The Devil (Illusion of Bondage)
  maj_15: {
    defs: `
      <linearGradient id="devSky" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#0a0202" />
        <stop offset="45%" stop-color="#240505" />
        <stop offset="80%" stop-color="#540808" />
        <stop offset="100%" stop-color="#140202" />
      </linearGradient>
    `,
    svg: `
      <g transform="translate(150, 230)">
        <rect x="-128" y="-170" width="256" height="340" fill="url(#devSky)" />

        <!-- Cavern of Smoldering Embers & Obsidian Stalactites -->
        <polygon points="-128,-170 -100,-100 -70,-170" fill="#1a0404" />
        <polygon points="128,-170 100,-110 70,-170" fill="#1a0404" />
        <circle cx="-80" cy="30" r="1.5" fill="#f97316" /><circle cx="70" cy="-20" r="2" fill="#ef4444" />

        <!-- Cubic Altar of Dark Basalt with Iron Ring -->
        <rect x="-45" y="45" width="90" height="95" fill="#171717" stroke="#ffd700" stroke-width="1.3" />
        <circle cx="0" cy="75" r="9" fill="none" stroke="#ffd700" stroke-width="2.5" />

        <!-- Winged Baphomet Chimera Perched on Altar -->
        <g>
          <!-- Great Bat / Chimera Wings -->
          <path d="M -85 -60 Q -40 -120 0 -70 Q 40 -120 85 -60 Q 30 -30 0 -45 Q -30 -30 -85 -60 Z" fill="#262626" stroke="#b91c1c" stroke-width="1.2" />
          <!-- Torso of Bronze & Shadow -->
          <path d="M -22 -40 L 22 -40 L 28 45 L -28 45 Z" fill="#2d0606" stroke="#ffd700" stroke-width="1.2" />
          <!-- Goat Head with Sweeping Ram Horns -->
          <circle cx="0" cy="-56" r="12" fill="#1c1917" />
          <!-- Upright Torch between Horns & Inverted Pentagram on Brow -->
          <path d="M -8 -68 C -25 -85 -35 -70 -25 -60" stroke="#ffd700" stroke-width="2.5" fill="none" />
          <path d="M 8 -68 C 25 -85 35 -70 25 -60" stroke="#ffd700" stroke-width="2.5" fill="none" />
          <!-- Inverted Pentagram -->
          <polygon points="0,-52 3,-44 9,-44 4,-40 6,-33 0,-37 -6,-33 -4,-40 -9,-44 -3,-44" fill="#ef4444" />
          <!-- Torch of False Light -->
          <rect x="-2" y="-85" width="4" height="15" fill="#ffd700" />
          <path d="M 0 -85 Q 5 -100 0 -110 Q -5 -100 0 -85 Z" fill="#22c55e" />

          <!-- Right Hand in Inverted Benediction; Left Hand with Downward Torch -->
          <path d="M 18 -35 L 38 -55 L 45 -45" stroke="#ffd700" stroke-width="2.5" fill="none" />
          <line x1="-18" y1="-25" x2="-45" y2="15" stroke="#ffd700" stroke-width="2.5" />
          <circle cx="-45" cy="18" r="4" fill="#f97316" />
        </g>

        <!-- Two Horned Captives with Ridiculously Loose Neck Chains (Bondage is Illusion) -->
        <g transform="translate(-50, 85)">
          <circle cx="0" cy="-15" r="7" fill="#fde2e4" />
          <path d="M -6 -8 L 6 -8 L 10 35 L -10 35 Z" fill="#450a0a" />
          <!-- Huge Loose Golden Chain Loop around Neck (Can easily slip off) -->
          <ellipse cx="0" cy="-5" rx="14" ry="6" fill="none" stroke="#ffd700" stroke-width="1.8" />
          <line x1="14" y1="-5" x2="50" y2="-10" stroke="#ffd700" stroke-width="1.2" stroke-dasharray="3, 2" />
        </g>
        <g transform="translate(50, 85)">
          <circle cx="0" cy="-15" r="7" fill="#fde2e4" />
          <path d="M -6 -8 L 6 -8 L 10 35 L -10 35 Z" fill="#450a0a" />
          <ellipse cx="0" cy="-5" rx="14" ry="6" fill="none" stroke="#ffd700" stroke-width="1.8" />
          <line x1="-14" y1="-5" x2="-50" y2="-10" stroke="#ffd700" stroke-width="1.2" stroke-dasharray="3, 2" />
        </g>
      </g>
    `
  },

  // 16: The Tower (Shattering of False Constructs)
  maj_16: {
    defs: `
      <linearGradient id="towSky" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#020108" />
        <stop offset="45%" stop-color="#180424" />
        <stop offset="80%" stop-color="#3c0942" />
        <stop offset="100%" stop-color="#07020d" />
      </linearGradient>
    `,
    svg: `
      <g transform="translate(150, 230)">
        <rect x="-128" y="-170" width="256" height="340" fill="url(#towSky)" />

        <!-- Tempestuous Ocean Waves at Solitary Crag -->
        <polygon points="-128,110 -60,95 0,115 65,95 128,110 128,170 -128,170" fill="#0b132b" />
        <polygon points="-45,95 0,55 45,95" fill="#1c2541" stroke="#ffd700" stroke-width="0.8" />

        <!-- Jagged Zigzag Cosmic Lightning Bolt -->
        <polygon points="35,-170 5,-100 20,-95 -10,-35 8,-30 -15,25 0,15 -25,75" fill="#ffffff" stroke="#ffd700" stroke-width="1.5" />

        <!-- Monolithic Stone Tower -->
        <g>
          <polygon points="-35,65 -22,-95 22,-95 35,65" fill="#1e1b2e" stroke="#ffd700" stroke-width="1.5" />
          <!-- Three Illuminated Windows pouring Flames & Starlight -->
          <rect x="-6" y="-70" width="12" height="16" rx="2" fill="#ff5400" stroke="#ffd700" stroke-width="0.8" />
          <rect x="-16" y="-30" width="10" height="15" rx="2" fill="#ff5400" stroke="#ffd700" stroke-width="0.8" />
          <rect x="6" y="-30" width="10" height="15" rx="2" fill="#ff5400" stroke="#ffd700" stroke-width="0.8" />

          <!-- Golden Crown Shattered from Tower Top into Fiery Shards -->
          <g transform="translate(12, -115) rotate(25)">
            <polygon points="-16,0 -12,-15 -4,-6 4,-16 12,-6 16,-15 16,0" fill="#ffd700" stroke="#b45309" stroke-width="1" />
            <circle cx="8" cy="-8" r="2" fill="#ffffff" />
          </g>
          <!-- Cascading Sparks & Golden Yods (22 Divine Sparks) -->
          <circle cx="-40" cy="-80" r="2.5" fill="#ffd700" /><circle cx="-60" cy="-40" r="2" fill="#ffd700" />
          <circle cx="45" cy="-70" r="2" fill="#ffd700" /><circle cx="65" cy="-30" r="2.5" fill="#ffd700" />
          <circle cx="-50" cy="10" r="2" fill="#ffd700" /><circle cx="55" cy="20" r="2" fill="#ffd700" />
        </g>

        <!-- Two Figures Falling in Weightless Dreamlike Grace (Awakening) -->
        <g transform="translate(-55, -20) rotate(-35)">
          <circle cx="0" cy="-12" r="6" fill="#fde2e4" />
          <path d="M -5 -6 L 5 -6 L 8 20 L -8 20 Z" fill="#9333ea" stroke="#ffd700" stroke-width="0.8" />
          <line x1="-5" y1="0" x2="-16" y2="-10" stroke="#fde2e4" stroke-width="2" />
          <line x1="5" y1="0" x2="16" y2="-10" stroke="#fde2e4" stroke-width="2" />
        </g>
        <g transform="translate(55, 30) rotate(45)">
          <circle cx="0" cy="-12" r="6" fill="#fde2e4" />
          <path d="M -5 -6 L 5 -6 L 8 20 L -8 20 Z" fill="#0284c7" stroke="#ffd700" stroke-width="0.8" />
          <line x1="-5" y1="0" x2="-14" y2="-8" stroke="#fde2e4" stroke-width="2" />
          <line x1="5" y1="0" x2="14" y2="-8" stroke="#fde2e4" stroke-width="2" />
        </g>
      </g>
    `
  },

  // 17: The Star (Wellspring of Infinite Hope)
  maj_17: {
    defs: `
      <linearGradient id="starSky" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#020817" />
        <stop offset="50%" stop-color="#06283d" />
        <stop offset="85%" stop-color="#0e4f66" />
        <stop offset="100%" stop-color="#0284c7" />
      </linearGradient>
      <radialGradient id="greatStarGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#ffffff" />
        <stop offset="35%" stop-color="#ffd700" />
        <stop offset="70%" stop-color="#38bdf8" stop-opacity="0.4" />
        <stop offset="100%" stop-color="#000000" stop-opacity="0" />
      </radialGradient>
    `,
    svg: `
      <g transform="translate(150, 230)">
        <rect x="-128" y="-170" width="256" height="340" fill="url(#starSky)" />

        <!-- Colossal Radiant 8-Pointed Golden Star & 7 Crystalline Stars -->
        <g transform="translate(0, -95)">
          <circle cx="0" cy="0" r="38" fill="url(#greatStarGlow)" />
          <!-- 8-Pointed Star of Hope -->
          <polygon points="0,-42 7,-10 42,0 7,10 0,42 -7,10 -42,0 -7,-10" fill="#ffd700" stroke="#ffffff" stroke-width="1.2" />
          <polygon points="0,-42 7,-10 42,0 7,10 0,42 -7,10 -42,0 -7,-10" fill="#ffffff" opacity="0.6" transform="rotate(45)" />
          <circle cx="0" cy="0" r="4" fill="#ffffff" />
          <!-- 7 Surrounding Smaller Stars -->
          <circle cx="-65" cy="-35" r="2.5" fill="#ffffff" /><circle cx="65" cy="-35" r="2.5" fill="#ffffff" />
          <circle cx="-85" cy="15" r="2" fill="#ffd700" /><circle cx="85" cy="15" r="2" fill="#ffd700" />
          <circle cx="-40" cy="40" r="2" fill="#ffffff" /><circle cx="40" cy="40" r="2" fill="#ffffff" />
          <circle cx="0" cy="55" r="2.5" fill="#ffd700" />
        </g>

        <!-- Sacred Acacia Tree with Golden Ibis Bird of Thoth -->
        <g transform="translate(85, 30)">
          <path d="M 0 50 Q -15 0 10 -40 Q 25 -30 20 50" fill="#1b4332" />
          <circle cx="10" cy="-42" r="16" fill="#2d6a4f" opacity="0.8" />
          <!-- Golden Ibis Bird -->
          <circle cx="12" cy="-48" r="4.5" fill="#ffd700" />
          <path d="M 12 -48 Q 20 -44 26 -40" stroke="#ffd700" stroke-width="1.2" fill="none" />
        </g>

        <!-- Serene Celestial Maiden Kneeling beside Mirror Pool -->
        <g transform="translate(-15, 35)">
          <!-- Maiden Figure -->
          <circle cx="0" cy="-25" r="10" fill="#fde2e4" />
          <path d="M -8 -15 L 8 -15 L 14 45 L -14 45 Z" fill="#fdfbf7" stroke="#ffd700" stroke-width="0.8" />

          <!-- Two Golden Urns pouring Living Starlight -->
          <!-- Right Urn: Pouring into clear pool creating golden ripples -->
          <g transform="translate(25, 0)">
            <ellipse cx="0" cy="0" rx="8" ry="12" fill="#ffd700" stroke="#b45309" stroke-width="1" />
            <path d="M 0 10 Q 15 30 15 50" stroke="#38bdf8" stroke-width="2.5" fill="none" />
          </g>
          <!-- Left Urn: Pouring on dry earth branching into 5 rivulets -->
          <g transform="translate(-25, 0)">
            <ellipse cx="0" cy="0" rx="8" ry="12" fill="#ffd700" stroke="#b45309" stroke-width="1" />
            <path d="M 0 10 Q -20 30 -35 50" stroke="#38bdf8" stroke-width="2" fill="none" />
            <path d="M -10 25 Q -15 35 -12 50" stroke="#38bdf8" stroke-width="1.2" fill="none" />
          </g>
        </g>

        <!-- Mirror Pool with Concentric Golden Ripples -->
        <ellipse cx="20" cy="125" rx="75" ry="22" fill="#0c4a6e" stroke="#38bdf8" stroke-width="1.2" />
        <ellipse cx="20" cy="125" rx="50" ry="14" fill="none" stroke="#ffd700" stroke-width="0.8" opacity="0.8" />
        <ellipse cx="20" cy="125" rx="25" ry="7" fill="none" stroke="#ffffff" stroke-width="0.6" opacity="0.6" />
      </g>
    `
  },

  // 18: The Moon (Realm of Subconscious Dreams)
  maj_18: {
    defs: `
      <linearGradient id="moonSky" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#02040d" />
        <stop offset="50%" stop-color="#09142e" />
        <stop offset="85%" stop-color="#192854" />
        <stop offset="100%" stop-color="#070c1d" />
      </linearGradient>
    `,
    svg: `
      <g transform="translate(150, 230)">
        <rect x="-128" y="-170" width="256" height="340" fill="url(#moonSky)" />

        <!-- Colossal Full Moon with Weeping Human Profile Face -->
        <g transform="translate(0, -85)">
          <circle cx="0" cy="0" r="42" fill="#ffd700" opacity="0.9" />
          <circle cx="0" cy="0" r="38" fill="#fffbeb" />
          <!-- Serene Profile Face embedded inside the Moon -->
          <path d="M -8 -22 Q -4 -12 -12 -5 Q 0 0 -8 8 Q 0 16 -12 25" stroke="#92400e" stroke-width="1.5" fill="none" />
          <circle cx="-16" cy="-8" r="2.5" fill="#92400e" />
          <!-- Enclosing Crescent Ring -->
          <path d="M -30 -30 A 42 42 0 1 0 -30 30 A 35 42 0 0 1 -30 -30" fill="#ffd700" />
          <!-- Golden Dew Drops / Yods Shedding into Landscape -->
          <circle cx="-25" cy="48" r="2.2" fill="#ffd700" /><circle cx="0" cy="55" r="2.8" fill="#ffd700" />
          <circle cx="25" cy="48" r="2.2" fill="#ffd700" /><circle cx="-12" cy="62" r="1.8" fill="#ffd700" />
        </g>

        <!-- Twin Sentinel Watchtowers guarding Unknown Mountains -->
        <polygon points="-128,40 -60,10 0,45 60,10 128,40 128,170 -128,170" fill="#0f172a" />
        <rect x="-95" y="0" width="22" height="75" fill="#1e293b" stroke="#ffd700" stroke-width="1" />
        <rect x="73" y="0" width="22" height="75" fill="#1e293b" stroke="#ffd700" stroke-width="1" />

        <!-- Two Howling Wolves (One Dark, One White) -->
        <g transform="translate(-48, 65)">
          <!-- Dark Wolf -->
          <path d="M -15 25 L 0 0 L 8 10 L 0 25 Z" fill="#020617" stroke="#ffd700" stroke-width="0.8" />
          <polygon points="0,0 -8,-15 -3,-5" fill="#020617" />
        </g>
        <g transform="translate(48, 65)">
          <!-- White Wolf -->
          <path d="M 15 25 L 0 0 L -8 10 L 0 25 Z" fill="#f8fafc" stroke="#ffd700" stroke-width="0.8" />
          <polygon points="0,0 8,-15 3,-5" fill="#f8fafc" />
        </g>

        <!-- Winding Silver Path leading from Obsidian Pool into Mountains -->
        <path d="M 0 170 Q 20 130 -15 100 Q 15 70 0 45" stroke="#e2e8f0" stroke-width="3" fill="none" />

        <!-- Primordial Golden Crayfish Emerging from the Depths -->
        <g transform="translate(0, 138)">
          <!-- Obsidian Pool -->
          <ellipse cx="0" cy="15" rx="55" ry="14" fill="#030712" stroke="#38bdf8" stroke-width="1" />
          <!-- Crayfish Shell & Claws -->
          <ellipse cx="0" cy="0" rx="8" ry="14" fill="#ffd700" stroke="#b45309" stroke-width="1" />
          <!-- Claws reaching onto path -->
          <path d="M -8 -5 Q -22 -15 -16 -25" stroke="#ffd700" stroke-width="2" fill="none" />
          <path d="M 8 -5 Q 22 -15 16 -25" stroke="#ffd700" stroke-width="2" fill="none" />
        </g>
      </g>
    `
  },

  // 19: The Sun (Radiance of Pure Awakening)
  maj_19: {
    defs: `
      <linearGradient id="sunSky" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#0284c7" />
        <stop offset="50%" stop-color="#38bdf8" />
        <stop offset="100%" stop-color="#fde047" />
      </linearGradient>
      <radialGradient id="solarFace" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#ffffff" />
        <stop offset="45%" stop-color="#fef08a" />
        <stop offset="85%" stop-color="#f59e0b" />
        <stop offset="100%" stop-color="#d97706" />
      </radialGradient>
    `,
    svg: `
      <g transform="translate(150, 230)">
        <rect x="-128" y="-170" width="256" height="340" fill="url(#sunSky)" />

        <!-- Colossal Benevolent Smiling Sun with 24 Rays -->
        <g transform="translate(0, -75)">
          <circle cx="0" cy="0" r="42" fill="url(#solarFace)" stroke="#ffd700" stroke-width="2" />
          <!-- Benevolent Smiling Visage -->
          <path d="M -12 8 Q 0 18 12 8" stroke="#78350f" stroke-width="2" fill="none" stroke-linecap="round" />
          <circle cx="-12" cy="-6" r="3" fill="#78350f" /><circle cx="12" cy="-6" r="3" fill="#78350f" />
          <!-- 24 Alternating Straight & Wavy Rays -->
          <g stroke="#f59e0b" stroke-width="2.5" fill="none">
            <line x1="0" y1="-44" x2="0" y2="-65" /><line x1="0" y1="44" x2="0" y2="65" />
            <line x1="-44" y1="0" x2="-65" y2="0" /><line x1="44" y1="0" x2="65" y2="0" />
            <path d="M 31 -31 Q 48 -40 45 -55" /><path d="M -31 -31 Q -48 -40 -45 -55" />
            <path d="M 31 31 Q 48 40 45 55" /><path d="M -31 31 Q -48 40 -45 55" />
          </g>
        </g>

        <!-- Grey Stone Garden Wall draped with Giant Surreal Sunflowers -->
        <rect x="-128" y="55" width="256" height="30" fill="#475569" stroke="#ffd700" stroke-width="1.2" />
        <!-- Sunflowers with Fibonacci Spiral Eyes -->
        <g transform="translate(-75, 45)">
          <circle cx="0" cy="0" r="14" fill="#f59e0b" stroke="#78350f" stroke-width="1" />
          <circle cx="0" cy="0" r="6" fill="#451a03" />
        </g>
        <g transform="translate(0, 40)">
          <circle cx="0" cy="0" r="16" fill="#f59e0b" stroke="#78350f" stroke-width="1" />
          <circle cx="0" cy="0" r="7" fill="#451a03" />
        </g>
        <g transform="translate(75, 45)">
          <circle cx="0" cy="0" r="14" fill="#f59e0b" stroke="#78350f" stroke-width="1" />
          <circle cx="0" cy="0" r="6" fill="#451a03" />
        </g>

        <!-- Innocent Joyful Child on White Steed with Undulating Scarlet Banner -->
        <g transform="translate(0, 95)">
          <!-- Pure White Steed -->
          <ellipse cx="0" cy="25" rx="42" ry="18" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1" />
          <!-- Joyous Child with Flower Crown -->
          <circle cx="0" cy="-5" r="9" fill="#fde2e4" />
          <path d="M -6 -10 Q 0 -15 6 -10" stroke="#22c55e" stroke-width="2" fill="none" />
          <!-- Flowing Scarlet Banner of Life -->
          <path d="M 8 -5 Q 40 -20 60 5 Q 75 -15 95 0" stroke="#dc2626" stroke-width="8" fill="none" stroke-linecap="round" />
        </g>
      </g>
    `
  },

  // 20: Judgement (Great Awakening of Souls)
  maj_20: {
    defs: `
      <linearGradient id="judgeSky" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#1e1035" />
        <stop offset="45%" stop-color="#4c1d95" />
        <stop offset="75%" stop-color="#db2777" />
        <stop offset="100%" stop-color="#fde047" />
      </linearGradient>
    `,
    svg: `
      <g transform="translate(150, 230)">
        <rect x="-128" y="-170" width="256" height="340" fill="url(#judgeSky)" />

        <!-- Incandescent Parting Clouds -->
        <path d="M -128,-60 Q -50,-120 0,-80 Q 50,-120 128,-60 L 128,-170 L -128,-170 Z" fill="#fdf4ff" opacity="0.85" />

        <!-- Archangel Gabriel with Mother-of-Pearl Wings -->
        <g transform="translate(0, -90)">
          <!-- Wings -->
          <path d="M -75 -20 Q -40 -60 0 -25 Q 40 -60 75 -20 Q 20 -5 0 -5 Q -20 -5 -75 -20 Z" fill="#fdf2f8" stroke="#ffd700" stroke-width="1.2" />
          <circle cx="0" cy="-28" r="11" fill="#fde2e4" />

          <!-- Golden Herald's Trumpet pointing downward -->
          <polygon points="0,-22 18,25 10,25 0,-18" fill="#ffd700" stroke="#b45309" stroke-width="1" />
          <!-- Banner with Red Solar Cross -->
          <rect x="12" y="-5" width="26" height="22" fill="#ffffff" stroke="#b91c1c" stroke-width="1" />
          <line x1="25" y1="-5" x2="25" y2="17" stroke="#b91c1c" stroke-width="3" />
          <line x1="12" y1="6" x2="38" y2="6" stroke="#b91c1c" stroke-width="3" />

          <!-- Visible Golden Harmonic Sound Waves Radiating Downward -->
          <path d="M 14 30 Q -10 50 -30 90 M 14 30 Q 30 50 50 90" stroke="#ffd700" stroke-width="1.8" fill="none" stroke-dasharray="3, 3" />
          <path d="M 14 30 Q -20 70 -50 130 M 14 30 Q 40 70 70 130" stroke="#ffd700" stroke-width="1.5" fill="none" stroke-dasharray="4, 3" opacity="0.7" />
        </g>

        <!-- Calm Sea with Open Marble Sarcophagi -->
        <rect x="-128" y="90" width="256" height="80" fill="#0f172a" />

        <!-- Awakened Souls Rising in Ecstatic Liberation -->
        <!-- Center Child -->
        <g transform="translate(0, 105)">
          <rect x="-14" y="0" width="28" height="22" fill="#334155" stroke="#ffd700" stroke-width="0.8" />
          <circle cx="0" cy="-14" r="6" fill="#fde2e4" />
          <path d="M -8 -10 L -15 -25 M 8 -10 L 15 -25" stroke="#fde2e4" stroke-width="2.5" stroke-linecap="round" />
        </g>
        <!-- Left Figure (Mother) -->
        <g transform="translate(-60, 110)">
          <rect x="-14" y="0" width="28" height="22" fill="#334155" stroke="#ffd700" stroke-width="0.8" />
          <circle cx="0" cy="-15" r="6.5" fill="#fde2e4" />
          <path d="M -8 -12 L -18 -28 M 8 -12 L 18 -28" stroke="#fde2e4" stroke-width="2.5" stroke-linecap="round" />
        </g>
        <!-- Right Figure (Father) -->
        <g transform="translate(60, 110)">
          <rect x="-14" y="0" width="28" height="22" fill="#334155" stroke="#ffd700" stroke-width="0.8" />
          <circle cx="0" cy="-15" r="6.5" fill="#fde2e4" />
          <path d="M -8 -12 L -18 -28 M 8 -12 L 18 -28" stroke="#fde2e4" stroke-width="2.5" stroke-linecap="round" />
        </g>
      </g>
    `
  },

  // 21: The World (Dance of Cosmic Completion)
  maj_21: {
    defs: `
      <linearGradient id="worldGalaxy" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#03000a" />
        <stop offset="35%" stop-color="#0f0524" />
        <stop offset="70%" stop-color="#1f0947" />
        <stop offset="100%" stop-color="#040f26" />
      </linearGradient>
    `,
    svg: `
      <g transform="translate(150, 230)">
        <rect x="-128" y="-170" width="256" height="340" fill="url(#worldGalaxy)" />

        <!-- Rotating Spiral Galaxy Vortex -->
        <g stroke="#38bdf8" stroke-width="0.8" fill="none" opacity="0.5">
          <path d="M 0 0 C 40 -80 120 -60 110 30 C 100 120 -30 130 -80 80 C -130 30 -100 -90 -30 -110" />
          <path d="M 0 0 C -40 80 -120 60 -110 -30 C -100 -120 30 -130 80 -80 C 130 -30 100 90 30 110" />
        </g>

        <!-- Colossal Elliptical Laurel Wreath bound by Scarlet Infinity Ribbons -->
        <ellipse cx="0" cy="0" rx="72" ry="102" fill="none" stroke="#15803d" stroke-width="9" />
        <ellipse cx="0" cy="0" rx="72" ry="102" fill="none" stroke="#4ade80" stroke-width="2.2" stroke-dasharray="5, 5" />
        <!-- Scarlet Ribbons at Top & Bottom knotted into Lemniscates -->
        <path d="M -16 -102 C -6 -112 6 -112 16 -102 C 6 -92 -6 -92 -16 -102 Z" fill="#dc2626" stroke="#ffd700" stroke-width="1.2" />
        <path d="M -16 102 C -6 92 6 92 16 102 C 6 112 -6 112 -16 102 Z" fill="#dc2626" stroke="#ffd700" stroke-width="1.2" />

        <!-- The Cosmic Dancer floating weightlessly -->
        <g>
          <!-- Swirling Purple Silk Sash -->
          <path d="M -18 -40 Q 30 -10 10 30 Q -25 60 5 80" stroke="#9333ea" stroke-width="6" fill="none" stroke-linecap="round" />
          <!-- Dancer Head & Torso -->
          <circle cx="0" cy="-45" r="9.5" fill="#fde2e4" />
          <path d="M -10 -35 L 10 -35 L 12 15 L -12 15 Z" fill="#fdfbf7" stroke="#ffd700" stroke-width="0.8" />
          <!-- Crossed Dancing Legs -->
          <line x1="0" y1="15" x2="0" y2="55" stroke="#fde2e4" stroke-width="3.5" stroke-linecap="round" />
          <line x1="0" y1="30" x2="22" y2="40" stroke="#fde2e4" stroke-width="3.5" stroke-linecap="round" />
          <!-- Twin Golden Wands of Creation in Hands -->
          <line x1="-32" y1="-65" x2="-22" y2="10" stroke="#ffd700" stroke-width="2.2" />
          <circle cx="-32" cy="-65" r="3" fill="#ffd700" />
          <line x1="32" y1="-65" x2="22" y2="10" stroke="#ffd700" stroke-width="2.2" />
          <circle cx="32" cy="-65" r="3" fill="#ffd700" />
        </g>

        <!-- Four Cherubic Cosmic Guardians in Nebula Clouds (Angel, Eagle, Lion, Bull) -->
        <circle cx="-95" cy="-125" r="7.5" fill="#f8fafc" stroke="#ffd700" stroke-width="0.8" /> <!-- Human Angel -->
        <polygon points="95,-135 105,-122 85,-122" fill="#94a3b8" stroke="#ffd700" stroke-width="0.8" /> <!-- Eagle -->
        <circle cx="-95" cy="125" r="8.5" fill="#f59e0b" stroke="#ffd700" stroke-width="0.8" /> <!-- Lion -->
        <circle cx="95" cy="125" r="8.5" fill="#78350f" stroke="#ffd700" stroke-width="0.8" /> <!-- Bull -->
      </g>
    `
  }
};


// --- MINOR ARCANA ENGINE (ACES, PIPS, COURTS) ---
/**
 * Minor Arcana Surrealist Art Engine
 * Aces, Pips (2-10 with iconic surrealist motifs), and Courts (Page, Knight, Queen, King).
 */



// Color themes per suit
const SUIT_THEMES = {
  wands: {
    skyTop: '#1f0704', skyMid: '#5c1308', skyBottom: '#d9531e',
    ground: '#2b0c05', line: '#ffd700', aura: '#f59e0b'
  },
  cups: {
    skyTop: '#020b17', skyMid: '#0a2540', skyBottom: '#1976d2',
    ground: '#061727', line: '#90e0ef', aura: '#00b4d8'
  },
  swords: {
    skyTop: '#0f0a1c', skyMid: '#241a3e', skyBottom: '#5c4d7d',
    ground: '#130d24', line: '#e0e1dd', aura: '#9d4edd'
  },
  pentacles: {
    skyTop: '#05140b', skyMid: '#13391e', skyBottom: '#2d6a4f',
    ground: '#091c10', line: '#ffd700', aura: '#52b788'
  }
};

/**
 * 4 Monumental Aces - Divine Gateway Scenes
 */
function renderAceCardArt(card) {
  const s = SUIT_THEMES[card.suit] || SUIT_THEMES.wands;
  const suit = card.suit;

  if (suit === 'wands') {
    return {
      defs: `
        <linearGradient id="aceWandsSky" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#1c0502" />
          <stop offset="45%" stop-color="#6e1405" />
          <stop offset="80%" stop-color="#ea580c" />
          <stop offset="100%" stop-color="#fde047" />
        </linearGradient>
      `,
      svg: `
        <g transform="translate(150, 230)">
          <rect x="-128" y="-170" width="256" height="340" fill="url(#aceWandsSky)" />
          <!-- Solar Flares & Desert Pinnacles -->
          <polygon points="-128,80 -50,40 10,75 80,45 128,70 128,170 -128,170" fill="#2d0a04" />
          <!-- Divine Celestial Hand emerging from Dimensional Portal -->
          <g transform="translate(0, -10)">
            <ellipse cx="-45" cy="0" rx="35" ry="55" fill="#fde047" opacity="0.35" />
            <path d="M -85 0 Q -50 -10 -25 0" stroke="#fde2e4" stroke-width="14" stroke-linecap="round" fill="none" />
            <!-- Colossal Living Wand of Fire -->
            <line x1="-12" y1="-105" x2="-12" y2="105" stroke="#78350f" stroke-width="8" stroke-linecap="round" />
            <line x1="-15" y1="-100" x2="-15" y2="100" stroke="#ffd700" stroke-width="2" />
            <!-- Living Green Shoots & Golden Flames -->
            <path d="M -12 -80 Q -32 -95 -25 -70 Q -12 -75 -12 -80 Z" fill="#22c55e" />
            <path d="M -12 -40 Q 8 -55 5 -30 Q -12 -35 -12 -40 Z" fill="#22c55e" />
            <path d="M -12 20 Q -30 5 -25 30 Q -12 25 -12 20 Z" fill="#22c55e" />
            <!-- Blazing Flame Crown -->
            <path d="M -12 -105 Q 0 -135 -12 -150 Q -24 -135 -12 -105 Z" fill="#f97316" />
            <path d="M -12 -108 Q -6 -128 -12 -140 Q -18 -128 -12 -108 Z" fill="#fde047" />
            <circle cx="15" cy="-80" r="2.5" fill="#fde047" /><circle cx="-35" cy="-60" r="3" fill="#f97316" />
          </g>
        </g>
      `
    };
  }

  if (suit === 'cups') {
    return {
      defs: `
        <linearGradient id="aceCupsSky" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#020d1c" />
          <stop offset="50%" stop-color="#0a2a4a" />
          <stop offset="85%" stop-color="#0284c7" />
          <stop offset="100%" stop-color="#bae6fd" />
        </linearGradient>
      `,
      svg: `
        <g transform="translate(150, 230)">
          <rect x="-128" y="-170" width="256" height="340" fill="url(#aceCupsSky)" />
          <!-- Ethereal Lotus Pond with Golden Concentric Ripples -->
          <ellipse cx="0" cy="115" rx="110" ry="32" fill="#031b33" stroke="#38bdf8" stroke-width="1.2" />
          <ellipse cx="0" cy="115" rx="75" ry="20" fill="none" stroke="#ffd700" stroke-width="0.8" opacity="0.8" />
          <ellipse cx="0" cy="115" rx="40" ry="10" fill="none" stroke="#ffffff" stroke-width="0.6" opacity="0.6" />
          <!-- Blooming Water Lilies -->
          <circle cx="-65" cy="115" r="7" fill="#f472b6" /><circle cx="65" cy="115" r="7" fill="#f472b6" />

          <!-- Monumental Holy Grail / Golden Chalice -->
          <g transform="translate(0, 5)">
            <!-- Descending Celestial Dove with Communion Wafer -->
            <g transform="translate(0, -95)">
              <circle cx="0" cy="-6" r="6" fill="#ffffff" />
              <path d="M 0 0 Q -25 -15 -10 -30 Q 0 -15 0 0 Z" fill="#ffffff" />
              <path d="M 0 0 Q 25 -15 10 -30 Q 0 -15 0 0 Z" fill="#ffffff" />
              <!-- Golden Wafer in beak -->
              <circle cx="0" cy="5" r="4.5" fill="#ffd700" stroke="#fff" stroke-width="0.8" />
              <line x1="-2" y1="5" x2="2" y2="5" stroke="#b45309" stroke-width="1" />
            </g>
            <!-- Golden Chalice Stem & Bowl -->
            <ellipse cx="0" cy="55" rx="28" ry="8" fill="#ffd700" stroke="#b45309" stroke-width="1.2" />
            <line x1="0" y1="20" x2="0" y2="55" stroke="#ffd700" stroke-width="8" />
            <path d="M -35 -25 C -35 20 -15 20 0 20 C 15 20 35 20 35 -25 Z" fill="#ffd700" stroke="#b45309" stroke-width="1.8" />
            <ellipse cx="0" cy="-25" rx="35" ry="12" fill="#38bdf8" stroke="#ffd700" stroke-width="1.5" />
            <!-- 5 Streams of Living Starlight Overflowing -->
            <path d="M -28 -22 Q -45 10 -40 70" stroke="#e0f2fe" stroke-width="2.5" fill="none" />
            <path d="M -14 -18 Q -20 20 -15 80" stroke="#e0f2fe" stroke-width="2" fill="none" />
            <path d="M 0 -15 Q 0 30 0 85" stroke="#ffffff" stroke-width="2.8" fill="none" />
            <path d="M 14 -18 Q 20 20 15 80" stroke="#e0f2fe" stroke-width="2" fill="none" />
            <path d="M 28 -22 Q 45 10 40 70" stroke="#e0f2fe" stroke-width="2.5" fill="none" />
          </g>
        </g>
      `
    };
  }

  if (suit === 'swords') {
    return {
      defs: `
        <linearGradient id="aceSwordsSky" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#0a0517" />
          <stop offset="45%" stop-color="#1f1638" />
          <stop offset="80%" stop-color="#473b68" />
          <stop offset="100%" stop-color="#93c5fd" />
        </linearGradient>
      `,
      svg: `
        <g transform="translate(150, 230)">
          <rect x="-128" y="-170" width="256" height="340" fill="url(#aceSwordsSky)" />
          <!-- High Alpine Crags Piercing Cloud Bank -->
          <polygon points="-128,80 -60,30 0,65 70,25 128,80 128,170 -128,170" fill="#1e1b2e" />

          <!-- Swirling Wind Vortex Rings -->
          <ellipse cx="0" cy="-30" rx="90" ry="25" fill="none" stroke="#e2e8f0" stroke-width="1.2" stroke-dasharray="8, 6" opacity="0.6" />
          <ellipse cx="0" cy="15" rx="65" ry="18" fill="none" stroke="#c084fc" stroke-width="1" stroke-dasharray="6, 4" opacity="0.5" />

          <!-- Celestial Divine Hand emerging from Cloud holding the Sword -->
          <g transform="translate(0, 20)">
            <!-- Upright Double-Edged Silver Broadsword -->
            <path d="M 0 -165 L 10 40 L 0 45 L -10 40 Z" fill="#e2e8f0" stroke="#1e293b" stroke-width="1.2" />
            <line x1="0" y1="-160" x2="0" y2="40" stroke="#94a3b8" stroke-width="1.5" />
            <!-- Golden Winged Crossguard & Ruby Pommel -->
            <path d="M -30 40 Q 0 35 30 40 Q 20 48 0 46 Q -20 48 -30 40 Z" fill="#ffd700" stroke="#b45309" stroke-width="1" />
            <line x1="0" y1="46" x2="0" y2="70" stroke="#1e293b" stroke-width="5" />
            <circle cx="0" cy="74" r="5.5" fill="#e11d48" stroke="#ffd700" stroke-width="1" />

            <!-- Imperial Golden Crown Pierced at Tip of Blade -->
            <g transform="translate(0, -115)">
              <polygon points="-24,0 -18,-18 -6,-6 6,-18 18,-6 24,-18 24,0" fill="#ffd700" stroke="#b45309" stroke-width="1.2" />
              <!-- Floating Olive and Palm Fronds of Peace & Victory -->
              <path d="M -24 -5 Q -45 -20 -35 -40" stroke="#22c55e" stroke-width="2.5" fill="none" />
              <path d="M 24 -5 Q 45 -20 35 -40" stroke="#22c55e" stroke-width="2.5" fill="none" />
            </g>
          </g>
        </g>
      `
    };
  }

  // Ace of Pentacles
  return {
    defs: `
      <linearGradient id="acePentSky" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#021408" />
        <stop offset="45%" stop-color="#0e3a1b" />
        <stop offset="80%" stop-color="#1e6b35" />
        <stop offset="100%" stop-color="#fde047" />
      </linearGradient>
    `,
    svg: `
      <g transform="translate(150, 230)">
        <rect x="-128" y="-170" width="256" height="340" fill="url(#acePentSky)" />
        <!-- Walled Mystic Rose Garden & Distant Mountains -->
        <polygon points="-128,20 -50,-20 30,10 90,-25 128,15 128,170 -128,170" fill="#14532d" />
        <!-- Walled Garden Labyrinth with Stone Archway & Climbing Red Roses -->
        <rect x="-90" y="70" width="180" height="75" rx="4" fill="#3f3f46" stroke="#ffd700" stroke-width="1.2" />
        <path d="M -30 145 L -30 100 Q 0 75 30 100 L 30 145 Z" fill="#14532d" stroke="#ffd700" stroke-width="1.2" />
        <!-- Red Roses on Archway -->
        <circle cx="-30" cy="85" r="4" fill="#e11d48" /><circle cx="0" cy="72" r="4.5" fill="#e11d48" /><circle cx="30" cy="85" r="4" fill="#e11d48" />

        <!-- Colossal Golden Coin Talisman Hovering in Sky -->
        <g transform="translate(0, -40)">
          <!-- Celestial Radiant Aura -->
          <circle cx="0" cy="0" r="65" fill="#ffd700" opacity="0.25" />
          <!-- Outer Gold Coin & Beaded Rim -->
          <circle cx="0" cy="0" r="48" fill="#14532d" stroke="#ffd700" stroke-width="4.5" />
          <circle cx="0" cy="0" r="42" fill="none" stroke="#ffd700" stroke-dasharray="3, 3" stroke-width="1.2" />
          <!-- 5-Pointed Star Pentagram -->
          <polygon points="0,-32 9.5,-10 32,-10 14.5,3.5 21,25 0,12 -21,25 -14.5,3.5 -32,-10 -9.5,-10" fill="#ffd700" stroke="#78350f" stroke-width="1.2" />
          <circle cx="0" cy="0" r="9" fill="none" stroke="#ffffff" stroke-width="1.5" />
          <circle cx="0" cy="0" r="3.5" fill="#ffd700" />
        </g>
      </g>
    `
  };
}

/**
 * 16 Court Cards (Page, Knight, Queen, King)
 */
function renderCourtCardArt(card) {
  const suit = card.suit;
  const rank = card.rank;
  const s = SUIT_THEMES[suit] || SUIT_THEMES.wands;

  const defs = `
    <linearGradient id="courtSky_${card.id}" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="${s.skyTop}" />
      <stop offset="60%" stop-color="${s.skyMid}" />
      <stop offset="100%" stop-color="${s.skyBottom}" />
    </linearGradient>
  `;

  // PAGE: Dreamer youth contemplating a floating suit relic
  if (rank === 'page') {
    return {
      defs,
      svg: `
        <g transform="translate(150, 230)">
          <rect x="-128" y="-170" width="256" height="340" fill="url(#courtSky_${card.id})" />
          <!-- Rolling Landscape -->
          <path d="M -128,60 Q -40,30 40,65 Q 90,45 128,70 L 128,170 L -128,170 Z" fill="${s.ground}" />

          <!-- Floating Large Suit Relic with Elemental Halo -->
          <g transform="translate(45, -40)">
            <circle cx="0" cy="0" r="36" fill="${s.aura}" opacity="0.3" />
            <g transform="translate(-16, -16)">
              ${getSuitEmblem(suit, 32, `page_${card.id}`)}
            </g>
          </g>

          <!-- Dreamer Page Figure -->
          <g transform="translate(-30, 20)">
            <!-- Feathered Turban / Cap -->
            <circle cx="0" cy="-56" r="10" fill="#fde2e4" />
            <path d="M -8 -64 Q 0 -72 8 -64" stroke="#ffd700" stroke-width="2.5" fill="none" />
            <path d="M 6 -68 Q 20 -85 30 -75" stroke="#e11d48" stroke-width="2" fill="none" />
            <!-- Tunic with Embroidered Hem -->
            <path d="M -14 -44 L 14 -44 L 20 40 L -20 40 Z" fill="#1e293b" stroke="#ffd700" stroke-width="1.2" />
            <line x1="-8" y1="40" x2="-8" y2="85" stroke="#fde2e4" stroke-width="3" />
            <line x1="8" y1="40" x2="8" y2="85" stroke="#fde2e4" stroke-width="3" />
            <!-- Outstretched Contemplative Hand -->
            <path d="M 8 -30 L 35 -20 L 50 -35" stroke="#fde2e4" stroke-width="2.5" stroke-linecap="round" fill="none" />
          </g>
        </g>
      `
    };
  }

  // KNIGHT: Dynamic armored champion on elemental steed
  if (rank === 'knight') {
    return {
      defs,
      svg: `
        <g transform="translate(150, 230)">
          <rect x="-128" y="-170" width="256" height="340" fill="url(#courtSky_${card.id})" />
          <path d="M -128,80 Q 0,40 128,75 L 128,170 L -128,170 Z" fill="${s.ground}" />

          <!-- Charging Elemental Steed & Armored Knight -->
          <g transform="translate(-15, 20)">
            <!-- Steed Body -->
            <ellipse cx="20" cy="20" rx="55" ry="25" fill="#f8fafc" stroke="#64748b" stroke-width="1.5" />
            <circle cx="65" cy="5" r="12" fill="#f8fafc" stroke="#64748b" stroke-width="1.2" />
            <!-- Flowing Mane / Elemental Trail -->
            <path d="M 30 0 Q 55 -25 75 0" stroke="${s.aura}" stroke-width="4" fill="none" />
            <!-- Armored Knight Torso & Helmet -->
            <path d="M -5 -25 L 20 -25 L 15 15 L -10 15 Z" fill="#334155" stroke="#ffd700" stroke-width="1.3" />
            <circle cx="8" cy="-38" r="9" fill="#94a3b8" stroke="#ffd700" stroke-width="1" />
            <polygon points="8,-48 18,-62 6,-54" fill="#e11d48" /> <!-- Helmet Plume -->
            <!-- Raised Suit Weapon / Relic in Hand -->
            <g transform="translate(38, -60)">
              <g transform="translate(-16, -16)">
                ${getSuitEmblem(suit, 32, `knt_${card.id}`)}
              </g>
            </g>
          </g>
        </g>
      `
    };
  }

  // QUEEN: Enthroned sovereign whose gown merges into elemental realms
  if (rank === 'queen') {
    return {
      defs,
      svg: `
        <g transform="translate(150, 230)">
          <rect x="-128" y="-170" width="256" height="340" fill="url(#courtSky_${card.id})" />
          <!-- Throne on Metaphysical Dais -->
          <rect x="-55" y="-50" width="110" height="190" fill="#18181b" stroke="#ffd700" stroke-width="1.5" />
          <path d="M -55 -50 Q 0 -85 55 -50" stroke="#ffd700" stroke-width="2" fill="none" />

          <!-- Enthroned Queen Figure -->
          <g>
            <!-- Gown Merging into Element -->
            <path d="M -25 -25 L 25 -25 L 45 105 L -45 105 Z" fill="#581c87" stroke="#ffd700" stroke-width="1.2" />
            <circle cx="0" cy="-45" r="10" fill="#fde2e4" />
            <!-- Queen Crown with Gems -->
            <polygon points="-12,-55 -8,-68 0,-60 8,-68 12,-55" fill="#ffd700" stroke="#b45309" stroke-width="1" />
            <circle cx="0" cy="-58" r="2" fill="${s.aura}" />
            <!-- Holding Sovereign Relic on Lap -->
            <g transform="translate(0, 10)">
              <g transform="translate(-16, -16)">
                ${getSuitEmblem(suit, 32, `qn_${card.id}`)}
              </g>
            </g>
          </g>
        </g>
      `
    };
  }

  // KING: Imperial monarch on stone throne with elemental scepter & crown
  return {
    defs,
    svg: `
      <g transform="translate(150, 230)">
        <rect x="-128" y="-170" width="256" height="340" fill="url(#courtSky_${card.id})" />
        <!-- Colossal Imperial Throne -->
        <rect x="-60" y="-60" width="120" height="200" fill="#09090b" stroke="#ffd700" stroke-width="1.8" />
        <polygon points="-60,-60 0,-95 60,-60" fill="#18181b" stroke="#ffd700" stroke-width="1.5" />

        <!-- Enthroned King Figure -->
        <g>
          <!-- Royal Cloak & Plate -->
          <path d="M -30 -30 L 30 -30 L 40 100 L -40 100 Z" fill="#1e1b4b" stroke="#ffd700" stroke-width="1.4" />
          <rect x="-16" y="-30" width="32" height="40" fill="#713f12" stroke="#ffd700" stroke-width="1" />
          <!-- Head with Golden Beard & High Crown -->
          <circle cx="0" cy="-48" r="10.5" fill="#fde2e4" />
          <path d="M -8 -40 Q 0 -15 8 -40 Z" fill="#d4d4d8" />
          <polygon points="-14,-58 -10,-74 -2,-64 0,-76 2,-64 10,-74 14,-58" fill="#ffd700" stroke="#b45309" stroke-width="1" />
          <!-- Scepter Relic in Right Hand -->
          <g transform="translate(42, -10)">
            <line x1="0" y1="-50" x2="0" y2="60" stroke="#ffd700" stroke-width="3" />
            <g transform="translate(-16, -65)">
              ${getSuitEmblem(suit, 32, `kg_${card.id}`)}
            </g>
          </g>
        </g>
      </g>
    `
  };
}

/**
 * 36 Pip Cards (2 to 10 of each suit)
 * Includes bespoke surrealist art for iconic cards (3 of Swords, 10 of Swords, 5 of Cups, 7 of Cups, etc.)
 */
function renderPipCardArt(card) {
  const suit = card.suit;
  const num = parseInt(card.rank, 10) || 2;
  const s = SUIT_THEMES[suit] || SUIT_THEMES.wands;

  const defs = `
    <linearGradient id="pipSky_${card.id}" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="${s.skyTop}" />
      <stop offset="55%" stop-color="${s.skyMid}" />
      <stop offset="100%" stop-color="${s.skyBottom}" />
    </linearGradient>
  `;

  // BESPOKE ICONIC CARDS:

  // 3 OF SWORDS: Pierced Bleeding Heart under Storm Clouds
  if (suit === 'swords' && num === 3) {
    return {
      defs,
      svg: `
        <g transform="translate(150, 230)">
          <rect x="-128" y="-170" width="256" height="340" fill="#090514" />
          <!-- Dark Storm Clouds & Driving Rain -->
          <g stroke="#94a3b8" stroke-width="0.8" opacity="0.5">
            <line x1="-80" y1="-140" x2="-60" y2="140" /><line x1="-30" y1="-140" x2="-10" y2="140" />
            <line x1="20" y1="-140" x2="40" y2="140" /><line x1="70" y1="-140" x2="90" y2="140" />
          </g>
          <path d="M -110 -110 Q -60 -150 0 -120 Q 60 -150 110 -110" fill="#1e1b2e" />

          <!-- Pierced Crimson Heart -->
          <g transform="translate(0, 5)">
            <path d="M 0 35 C -50 -10 -40 -60 0 -35 C 40 -60 50 -10 0 35 Z" fill="#991b1b" stroke="#ffd700" stroke-width="2" />
            <!-- Blood Droplets -->
            <circle cx="0" cy="45" r="3" fill="#e11d48" /><circle cx="0" cy="58" r="2.2" fill="#e11d48" />

            <!-- Three Piercing Swords -->
            <!-- Center Sword -->
            <line x1="0" y1="-110" x2="0" y2="85" stroke="#e2e8f0" stroke-width="3.5" />
            <line x1="-12" y1="-85" x2="12" y2="-85" stroke="#ffd700" stroke-width="2" />
            <!-- Left Sword Diagonally Piercing -->
            <line x1="-65" y1="-95" x2="45" y2="65" stroke="#e2e8f0" stroke-width="3" />
            <!-- Right Sword Diagonally Piercing -->
            <line x1="65" y1="-95" x2="-45" y2="65" stroke="#e2e8f0" stroke-width="3" />
          </g>
        </g>
      `
    };
  }

  // 10 OF SWORDS: 10 Swords plunged into ground at Dark Beach Dawn
  if (suit === 'swords' && num === 10) {
    return {
      defs,
      svg: `
        <g transform="translate(150, 230)">
          <!-- Black Sky into Golden Dawn Horizon -->
          <rect x="-128" y="-170" width="256" height="240" fill="#030206" />
          <rect x="-128" y="70" width="256" height="100" fill="#f59e0b" />
          <path d="M -128,70 Q 0,40 128,70 L 128,95 L -128,95 Z" fill="#fde047" opacity="0.6" />
          <rect x="-128" y="95" width="256" height="75" fill="#090a0f" /> <!-- Dark Shore -->

          <!-- 10 Upright Swords plunged into the earth -->
          <g>
            ${[-90, -70, -50, -30, -10, 10, 30, 50, 70, 90].map((x, i) => `
              <g transform="translate(${x}, 50)">
                <line x1="0" y1="-120" x2="0" y2="45" stroke="#e2e8f0" stroke-width="2.5" />
                <line x1="-7" y1="-100" x2="7" y2="-100" stroke="#ffd700" stroke-width="1.5" />
                <circle cx="0" cy="-122" r="2.5" fill="#ffd700" />
              </g>
            `).join('')}
          </g>
        </g>
      `
    };
  }

  // 5 OF CUPS: 3 Spilled Cups & 2 Upright Cups on Stone Bridge
  if (suit === 'cups' && num === 5) {
    return {
      defs,
      svg: `
        <g transform="translate(150, 230)">
          <rect x="-128" y="-170" width="256" height="340" fill="url(#pipSky_${card.id})" />
          <!-- Winding River & Grey Stone Bridge -->
          <path d="M -128,40 Q 0,70 128,30 L 128,170 L -128,170 Z" fill="#07203d" />
          <rect x="-128" y="85" width="256" height="25" fill="#334155" stroke="#ffd700" stroke-width="1" />

          <!-- Cloaked Mourning Silhouette gazing at 3 fallen cups -->
          <g transform="translate(-40, 45)">
            <path d="M -16 -40 L 16 -40 L 22 40 L -22 40 Z" fill="#090d16" stroke="#ffd700" stroke-width="1" />
            <circle cx="0" cy="-48" r="8" fill="#1e293b" />
          </g>

          <!-- 3 Spilled Cups with flowing crimson wine -->
          <g transform="translate(-15, 95) rotate(70)">
            <ellipse cx="0" cy="0" rx="8" ry="12" fill="#ffd700" />
            <path d="M 0 10 Q 15 25 35 25" stroke="#991b1b" stroke-width="2.5" fill="none" />
          </g>
          <g transform="translate(15, 110) rotate(85)">
            <ellipse cx="0" cy="0" rx="8" ry="12" fill="#ffd700" />
          </g>
          <g transform="translate(-35, 115) rotate(60)">
            <ellipse cx="0" cy="0" rx="8" ry="12" fill="#ffd700" />
          </g>

          <!-- 2 Full Upright Glowing Golden Chalices standing behind -->
          <g transform="translate(50, 45)">
            <ellipse cx="0" cy="0" rx="10" ry="15" fill="#ffd700" stroke="#fff" stroke-width="1" />
            <circle cx="0" cy="-10" r="4" fill="#38bdf8" />
          </g>
          <g transform="translate(80, 50)">
            <ellipse cx="0" cy="0" rx="10" ry="15" fill="#ffd700" stroke="#fff" stroke-width="1" />
            <circle cx="0" cy="-10" r="4" fill="#38bdf8" />
          </g>
        </g>
      `
    };
  }

  // 7 OF CUPS: 7 Floating Dream Vision Clouds
  if (suit === 'cups' && num === 7) {
    return {
      defs,
      svg: `
        <g transform="translate(150, 230)">
          <rect x="-128" y="-170" width="256" height="340" fill="url(#pipSky_${card.id})" />

          <!-- Dark Silhouette of Seeker in foreground -->
          <g transform="translate(0, 115)">
            <path d="M -25 55 L -15 0 L 15 0 L 25 55 Z" fill="#020617" stroke="#ffd700" stroke-width="1" />
            <circle cx="0" cy="-10" r="10" fill="#020617" />
          </g>

          <!-- 7 Floating Clouds with Surrealist Visions -->
          ${[
            { x: -75, y: -110, icon: 'crown' },
            { x: 0, y: -125, icon: 'castle' },
            { x: 75, y: -110, icon: 'jewel' },
            { x: -80, y: -45, icon: 'wreath' },
            { x: 0, y: -55, icon: 'serpent' },
            { x: 80, y: -45, icon: 'dragon' },
            { x: 0, y: 15, icon: 'star' }
          ].map((c, i) => `
            <g transform="translate(${c.x}, ${c.y})">
              <!-- Cloud -->
              <ellipse cx="0" cy="15" rx="30" ry="14" fill="#1e293b" stroke="#38bdf8" stroke-width="0.8" opacity="0.8" />
              <!-- Chalice holding vision -->
              <path d="M -8 10 L 8 10 L 5 24 L -5 24 Z" fill="#ffd700" />
              <!-- Floating Dream Icon -->
              <circle cx="0" cy="0" r="9" fill="#ffd700" opacity="0.85" />
              <circle cx="0" cy="0" r="4" fill="#ffffff" />
            </g>
          `).join('')}
        </g>
      `
    };
  }

  // 8 OF WANDS: 8 Fiery Staves Flying across Open Sky
  if (suit === 'wands' && num === 8) {
    return {
      defs,
      svg: `
        <g transform="translate(150, 230)">
          <rect x="-128" y="-170" width="256" height="340" fill="url(#pipSky_${card.id})" />
          <!-- Rolling Green River Valley -->
          <path d="M -128,100 Q 0,60 128,90 L 128,170 L -128,170 Z" fill="#14532d" />
          <path d="M -128,130 Q 0,110 128,135" stroke="#38bdf8" stroke-width="8" fill="none" />

          <!-- 8 Fiery Staves Flying Swiftly through the Sky like Golden Arrows -->
          <g stroke-linecap="round">
            ${[
              { x: -85, y: -115 }, { x: -60, y: -80 }, { x: -35, y: -45 }, { x: -10, y: -10 },
              { x: 10, y: -90 }, { x: 35, y: -55 }, { x: 60, y: -20 }, { x: 85, y: 15 }
            ].map((st, i) => `
              <g transform="translate(${st.x}, ${st.y}) rotate(32)">
                <line x1="-35" y1="0" x2="35" y2="0" stroke="#ffd700" stroke-width="3.5" />
                <path d="M 35 0 L 25 -4 L 25 4 Z" fill="#f97316" />
                <!-- Green Sprout Leaf -->
                <circle cx="0" cy="-4" r="2.5" fill="#22c55e" />
              </g>
            `).join('')}
          </g>
        </g>
      `
    };
  }

  // 2 OF PENTACLES: Juggler with Infinite Green Lemniscate on Ocean Waves
  if (suit === 'pentacles' && num === 2) {
    return {
      defs,
      svg: `
        <g transform="translate(150, 230)">
          <rect x="-128" y="-170" width="256" height="340" fill="url(#pipSky_${card.id})" />
          <!-- Tossing Stormy Ocean Waves -->
          <path d="M -128,70 Q -60,50 0,70 Q 60,90 128,70 L 128,170 L -128,170 Z" fill="#0f766e" />
          <!-- Ships Tossing on Waves -->
          <polygon points="-80,60 -65,60 -72,45" fill="#ffd700" />
          <polygon points="70,65 85,65 78,50" fill="#ffd700" />

          <!-- The Dancing Juggler -->
          <g transform="translate(0, 20)">
            <circle cx="0" cy="-45" r="9" fill="#fde2e4" />
            <polygon points="-5,-52 0,-65 5,-52" fill="#e11d48" /> <!-- Pointed Cap -->
            <path d="M -10 -35 L 10 -35 L 15 35 L -15 35 Z" fill="#1e293b" stroke="#ffd700" stroke-width="1" />
            <!-- Dancing Crossed Legs -->
            <line x1="-8" y1="35" x2="-18" y2="75" stroke="#fde2e4" stroke-width="3" />
            <line x1="8" y1="35" x2="18" y2="65" stroke="#fde2e4" stroke-width="3" />

            <!-- Green Ribbon Lemniscate of Infinity holding 2 Golden Pentacles -->
            <path d="M -38 -15 C -65 -45 -65 15 -38 -15 C -15 -45 15 15 38 -15 C 65 -45 65 15 38 -15 C 15 -45 -15 15 -38 -15 Z" fill="none" stroke="#22c55e" stroke-width="4.5" />

            <!-- Two Golden Coins inside the loops -->
            <g transform="translate(-42, -15)">
              <circle cx="0" cy="0" r="14" fill="#14532d" stroke="#ffd700" stroke-width="2" />
              <polygon points="0,-10 3,-3 10,-3 4,1 6,8 0,4 -6,8 -4,1 -10,-3 -3,-3" fill="#ffd700" />
            </g>
            <g transform="translate(42, -15)">
              <circle cx="0" cy="0" r="14" fill="#14532d" stroke="#ffd700" stroke-width="2" />
              <polygon points="0,-10 3,-3 10,-3 4,1 6,8 0,4 -6,8 -4,1 -10,-3 -3,-3" fill="#ffd700" />
            </g>
          </g>
        </g>
      `
    };
  }

  // GENERAL GEOMETRIC SURREALIST LAYOUT FOR ALL OTHER PIPS:
  // Dynamically arranges `num` emblems in harmonic sacred geometry patterns across surrealist horizon.
  const emblemPositions = [];
  if (num === 2) {
    emblemPositions.push({ x: 0, y: -65 }, { x: 0, y: 65 });
  } else if (num === 3) {
    emblemPositions.push({ x: 0, y: -75 }, { x: -45, y: 45 }, { x: 45, y: 45 });
  } else if (num === 4) {
    emblemPositions.push({ x: -45, y: -65 }, { x: 45, y: -65 }, { x: -45, y: 65 }, { x: 45, y: 65 });
  } else if (num === 5) {
    emblemPositions.push({ x: -45, y: -70 }, { x: 45, y: -70 }, { x: 0, y: 0 }, { x: -45, y: 70 }, { x: 45, y: 70 });
  } else if (num === 6) {
    emblemPositions.push(
      { x: -45, y: -75 }, { x: 45, y: -75 },
      { x: -45, y: 0 }, { x: 45, y: 0 },
      { x: -45, y: 75 }, { x: 45, y: 75 }
    );
  } else if (num === 7) {
    emblemPositions.push(
      { x: -45, y: -80 }, { x: 45, y: -80 },
      { x: 0, y: -40 },
      { x: -45, y: 10 }, { x: 45, y: 10 },
      { x: -45, y: 80 }, { x: 45, y: 80 }
    );
  } else if (num === 8) {
    emblemPositions.push(
      { x: -45, y: -85 }, { x: 45, y: -85 },
      { x: -45, y: -30 }, { x: 45, y: -30 },
      { x: -45, y: 30 }, { x: 45, y: 30 },
      { x: -45, y: 85 }, { x: 45, y: 85 }
    );
  } else if (num === 9) {
    emblemPositions.push(
      { x: -50, y: -85 }, { x: 50, y: -85 },
      { x: -50, y: -30 }, { x: 50, y: -30 },
      { x: 0, y: 0 },
      { x: -50, y: 30 }, { x: 50, y: 30 },
      { x: -50, y: 85 }, { x: 50, y: 85 }
    );
  } else if (num === 10) {
    emblemPositions.push(
      { x: -50, y: -90 }, { x: 50, y: -90 },
      { x: -25, y: -45 }, { x: 25, y: -45 },
      { x: -50, y: 0 }, { x: 50, y: 0 },
      { x: -25, y: 45 }, { x: 25, y: 45 },
      { x: -50, y: 90 }, { x: 50, y: 90 }
    );
  }

  return {
    defs,
    svg: `
      <g transform="translate(150, 230)">
        <rect x="-128" y="-170" width="256" height="340" fill="url(#pipSky_${card.id})" />

        <!-- Surrealist Metaphysical Horizon & Perspective Floor Grid -->
        <polygon points="-128,45 128,45 128,170 -128,170" fill="${s.ground}" />
        <g stroke="${s.line}" stroke-width="0.5" opacity="0.25">
          <line x1="-128" y1="80" x2="128" y2="80" /><line x1="-128" y1="120" x2="128" y2="120" /><line x1="-128" y1="155" x2="128" y2="155" />
          <line x1="0" y1="45" x2="-100" y2="170" /><line x1="0" y1="45" x2="0" y2="170" /><line x1="0" y1="45" x2="100" y2="170" />
        </g>

        <!-- Sacred Geometry Concentric Rings Connecting the Relics -->
        <circle cx="0" cy="0" r="95" fill="none" stroke="${s.line}" stroke-width="0.8" stroke-dasharray="3, 3" opacity="0.35" />
        <circle cx="0" cy="0" r="55" fill="none" stroke="${s.line}" stroke-width="0.6" opacity="0.25" />

        <!-- Rendered Suit Emblems in Harmonic Sacred Geometry Alignment -->
        ${emblemPositions.map((pos, i) => `
          <g transform="translate(${pos.x}, ${pos.y})">
            <!-- Subtle Elemental Aura Glow -->
            <circle cx="0" cy="0" r="22" fill="${s.aura}" opacity="0.18" />
            <g transform="translate(-16, -16)">
              ${getSuitEmblem(suit, 32, `pip_${card.id}_${i}`)}
            </g>
          </g>
        `).join('')}
      </g>
    `
  };
}


// --- CARD BACK GENERATOR ---
/**
 * Universal Card Back SVG
 * Fully symmetrical, reversible sacred geometry with celestial motifs,
 * mystic all-seeing eye, revolving moon phases, and gold filigree.
 */
function _renderCardBackSvg(width = 300, height = 480) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 480" width="${width}" height="${height}" class="tarot-card-svg tarot-back">
    <defs>
      <linearGradient id="backBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#070612" />
        <stop offset="35%" stop-color="#14112e" />
        <stop offset="65%" stop-color="#1d133b" />
        <stop offset="100%" stop-color="#05040d" />
      </linearGradient>
      <linearGradient id="backGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#fff5cc" />
        <stop offset="30%" stop-color="#ffd56b" />
        <stop offset="70%" stop-color="#d4af37" />
        <stop offset="100%" stop-color="#8a6d1c" />
      </linearGradient>
      <radialGradient id="backEyeAura" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#ffd700" stop-opacity="0.95" />
        <stop offset="30%" stop-color="#ff9f1c" stop-opacity="0.5" />
        <stop offset="70%" stop-color="#7209b7" stop-opacity="0.2" />
        <stop offset="100%" stop-color="#000000" stop-opacity="0" />
      </radialGradient>
      <radialGradient id="backCornerGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#ffd56b" stop-opacity="0.4" />
        <stop offset="100%" stop-color="#000000" stop-opacity="0" />
      </radialGradient>
      <pattern id="backSacredGrid" width="30" height="30" patternUnits="userSpaceOnUse">
        <circle cx="15" cy="15" r="1.2" fill="#d4af37" opacity="0.3" />
        <path d="M 0 15 L 30 15 M 15 0 L 15 30" stroke="#d4af37" stroke-width="0.35" opacity="0.15" />
        <polygon points="15,3 27,15 15,27 3,15" fill="none" stroke="#d4af37" stroke-width="0.35" opacity="0.12" />
      </pattern>
    </defs>

    <!-- Base Card Stock -->
    <rect width="300" height="480" rx="16" fill="url(#backBgGrad)" stroke="#020205" stroke-width="2" />
    <rect x="6" y="6" width="288" height="468" rx="12" fill="url(#backSacredGrid)" />

    <!-- Ornate Borders -->
    <rect x="12" y="12" width="276" height="456" rx="10" fill="none" stroke="url(#backGold)" stroke-width="2" />
    <rect x="18" y="18" width="264" height="444" rx="8" fill="none" stroke="#ffd700" stroke-dasharray="3, 3" stroke-width="0.8" opacity="0.75" />
    <rect x="24" y="24" width="252" height="432" rx="6" fill="none" stroke="url(#backGold)" stroke-width="0.75" opacity="0.5" />

    <!-- Corner Filigree Flourishes -->
    <g stroke="url(#backGold)" fill="none" stroke-width="1.2">
      <!-- Top Left -->
      <path d="M 16 42 C 26 42 42 26 42 16 M 16 54 C 36 54 54 36 54 16 M 22 22 L 36 36" />
      <circle cx="30" cy="30" r="3" fill="#ffd56b" />
      <path d="M 24 30 Q 30 24 36 30 Q 30 36 24 30 Z" fill="#ffd700" opacity="0.6" />
      <!-- Top Right -->
      <path d="M 284 42 C 274 42 258 26 258 16 M 284 54 C 264 54 246 36 246 16 M 278 22 L 264 36" />
      <circle cx="270" cy="30" r="3" fill="#ffd56b" />
      <path d="M 276 30 Q 270 24 264 30 Q 270 36 276 30 Z" fill="#ffd700" opacity="0.6" />
      <!-- Bottom Left -->
      <path d="M 16 438 C 26 438 42 454 42 464 M 16 426 C 36 426 54 444 54 464 M 22 458 L 36 444" />
      <circle cx="30" cy="450" r="3" fill="#ffd56b" />
      <path d="M 24 450 Q 30 444 36 450 Q 30 456 24 450 Z" fill="#ffd700" opacity="0.6" />
      <!-- Bottom Right -->
      <path d="M 284 438 C 274 438 258 454 258 464 M 284 426 C 264 426 246 444 246 464 M 278 458 L 264 444" />
      <circle cx="270" cy="450" r="3" fill="#ffd56b" />
      <path d="M 276 450 Q 270 444 264 450 Q 270 456 276 450 Z" fill="#ffd700" opacity="0.6" />
    </g>

    <!-- Top & Bottom Reversible Moon Phases -->
    <g fill="url(#backGold)">
      <!-- Top Crescent - Full - Crescent -->
      <path d="M 100 50 A 11 11 0 1 0 100 72 A 8 11 0 0 1 100 50" />
      <circle cx="150" cy="61" r="11" />
      <circle cx="150" cy="61" r="9" fill="#14112e" />
      <circle cx="150" cy="61" r="6" fill="url(#backGold)" />
      <path d="M 200 50 A 11 11 0 1 1 200 72 A 8 11 0 0 0 200 50" />
      <!-- Connecting filigree -->
      <line x1="60" y1="61" x2="88" y2="61" stroke="url(#backGold)" stroke-width="1" />
      <line x1="212" y1="61" x2="240" y2="61" stroke="url(#backGold)" stroke-width="1" />

      <!-- Bottom Reversible Moons -->
      <path d="M 100 408 A 11 11 0 1 0 100 430 A 8 11 0 0 1 100 408" />
      <circle cx="150" cy="419" r="11" />
      <circle cx="150" cy="419" r="9" fill="#14112e" />
      <circle cx="150" cy="419" r="6" fill="url(#backGold)" />
      <path d="M 200 408 A 11 11 0 1 1 200 430 A 8 11 0 0 0 200 408" />
      <!-- Connecting filigree -->
      <line x1="60" y1="419" x2="88" y2="419" stroke="url(#backGold)" stroke-width="1" />
      <line x1="212" y1="419" x2="240" y2="419" stroke="url(#backGold)" stroke-width="1" />
    </g>

    <!-- Central Symmetrical Mandala & Reversible Mystic Eye -->
    <g transform="translate(150, 240)">
      <!-- Outer Geometric Rings -->
      <circle cx="0" cy="0" r="115" fill="none" stroke="url(#backGold)" stroke-width="0.8" opacity="0.4" />
      <circle cx="0" cy="0" r="102" fill="none" stroke="#ffd700" stroke-dasharray="4, 4" stroke-width="0.7" opacity="0.6" />
      <circle cx="0" cy="0" r="88" fill="none" stroke="url(#backGold)" stroke-width="1.5" opacity="0.85" />
      <circle cx="0" cy="0" r="58" fill="url(#backEyeAura)" />

      <!-- Concentric 12-Ray Solar Wheel -->
      <g stroke="url(#backGold)" stroke-width="0.8" opacity="0.6">
        <line x1="0" y1="-88" x2="0" y2="88" />
        <line x1="-88" y1="0" x2="88" y2="0" />
        <line x1="-62" y1="-62" x2="62" y2="62" />
        <line x1="-62" y1="62" x2="62" y2="-62" />
      </g>

      <!-- 8-Pointed Star of Ishtar -->
      <polygon points="0,-88 62,-62 88,0 62,62 0,88 -62,62 -88,0 -62,-62" fill="none" stroke="url(#backGold)" stroke-width="1" opacity="0.5" />
      <polygon points="0,-88 20,-26 82,-26 33,13 51,75 0,38 -51,75 -33,13 -82,-26 -20,-26" fill="url(#backGold)" fill-opacity="0.15" stroke="url(#backGold)" stroke-width="1.4" />

      <!-- Center Mystic Eye (Symmetrical Double-Pupil Reversible Eye) -->
      <ellipse cx="0" cy="0" rx="36" ry="20" fill="#0b0818" stroke="url(#backGold)" stroke-width="1.8" />
      <!-- Iris & Pupil -->
      <circle cx="0" cy="0" r="14" fill="#1b1238" stroke="#ffd56b" stroke-width="1.2" />
      <circle cx="0" cy="0" r="7" fill="#ffd700" />
      <circle cx="0" cy="0" r="3.5" fill="#05040a" />
      <circle cx="-2.5" cy="-2.5" r="2" fill="#ffffff" />
      <!-- Radiating Starlight Rays from Eye -->
      <path d="M 0 -28 L 0 -22 M 0 22 L 0 28 M -42 0 L -36 0 M 36 0 L 42 0 M -20 -15 L -16 -12 M 20 -15 L 16 -12 M -20 15 L -16 12 M 20 15 L 16 12" stroke="url(#backGold)" stroke-width="1.2" stroke-linecap="round" />
    </g>
  </svg>`;
}


function _renderSurrealistCardFaceSvg(card) {
  if (!card) return '';

  let customDefs = '';
  let artworkSvg = '';

  if (card.arcana === 'major') {
    const art = MAJOR_ARCANA_ART[card.id];
    if (art) {
      customDefs = art.defs || '';
      artworkSvg = art.svg || '';
    } else {
      artworkSvg = '<circle cx="150" cy="230" r="40" fill="#ffd700" />';
    }
  } else if (card.rank === 'ace') {
    const art = renderAceCardArt(card);
    customDefs = art.defs || '';
    artworkSvg = art.svg || '';
  } else if (['page', 'knight', 'queen', 'king'].includes(card.rank)) {
    const art = renderCourtCardArt(card);
    customDefs = art.defs || '';
    artworkSvg = art.svg || '';
  } else {
    const art = renderPipCardArt(card);
    customDefs = art.defs || '';
    artworkSvg = art.svg || '';
  }

  return createCardFrame(card, artworkSvg, customDefs);
}

// ============================================================
// PART 2: FELINE FAMILIARS ALT DECK ENGINE
// ============================================================

// --- FELINE EMBLEMS & ARTIFACTS ---
/**
 * Feline Familiars Tarot: Shared Cat Art Emblems & Silhouette Components
 * Vector definitions for the 4 beloved felines:
 * 1. The Buff Ginger Tabby (Mighty Lion of Wands & Strength)
 * 2. The Smoky Persian Sage & Sheriff (Philosopher of Swords & Justice)
 * 3. The Void Twins / Night (Mystic Shadows of Cups & The Moon)
 * 4. The Mardi Gras Bicolor Chonk (Sovereign of Pentacles & The Empress)
 */

const CAT_EMBLEMS = {
  // Cute Cat Paw Print
  paw: (cx = 0, cy = 0, r = 10, fill = '#ffd700', opacity = 1) => `
    <g transform="translate(${cx}, ${cy})" opacity="${opacity}">
      <!-- Main Metacarpal Pad -->
      <path d="M ${-r * 0.8} ${r * 0.2} C ${-r * 0.9} ${r * 0.9}, ${-r * 0.4} ${r * 1.1}, 0 ${r * 0.9} C ${r * 0.4} ${r * 1.1}, ${r * 0.9} ${r * 0.9}, ${r * 0.8} ${r * 0.2} C ${r * 0.7} ${-r * 0.5}, ${-r * 0.7} ${-r * 0.5}, ${-r * 0.8} ${r * 0.2} Z" fill="${fill}" />
      <!-- 4 Toe Beans -->
      <ellipse cx="${-r * 0.75}" cy="${-r * 0.65}" rx="${r * 0.28}" ry="${r * 0.38}" transform="rotate(-25, ${-r * 0.75}, ${-r * 0.65})" fill="${fill}" />
      <ellipse cx="${-r * 0.28}" cy="${-r * 0.95}" rx="${r * 0.28}" ry="${r * 0.4}" transform="rotate(-8, ${-r * 0.28}, ${-r * 0.95})" fill="${fill}" />
      <ellipse cx="${r * 0.28}" cy="${-r * 0.95}" rx="${r * 0.28}" ry="${r * 0.4}" transform="rotate(8, ${r * 0.28}, ${-r * 0.95})" fill="${fill}" />
      <ellipse cx="${r * 0.75}" cy="${-r * 0.65}" rx="${r * 0.28}" ry="${r * 0.38}" transform="rotate(25, ${r * 0.75}, ${-r * 0.65})" fill="${fill}" />
    </g>
  `,

  // Sheriff Cowboy Hat (from IMG_4988)
  sheriffHat: (x = 0, y = 0, s = 1) => `
    <g transform="translate(${x}, ${y}) scale(${s})">
      <!-- Hat Brim curled at edges -->
      <path d="M -50 0 C -45 -14 -20 -4 0 -4 C 20 -4 45 -14 50 0 C 45 10 20 8 0 8 C -20 8 -45 10 -50 0 Z" fill="#6d4c41" stroke="#3e2723" stroke-width="1.5" />
      <!-- Hat Crown Creased in Center -->
      <path d="M -24 -3 C -26 -22 -18 -32 0 -26 C 18 -32 26 -22 24 -3 Z" fill="#795548" stroke="#3e2723" stroke-width="1.5" />
      <!-- Leather Band -->
      <path d="M -24 -3 Q 0 0 24 -3 L 24 -7 Q 0 -4 -24 -7 Z" fill="#4e342e" />
      <!-- Golden 5-Point Sheriff Star Badge -->
      <polygon points="0,-18 2.5,-12 8,-12 3.5,-8 5.5,-2 0,-5 -5.5,-2 -3.5,-8 -8,-12 -2.5,-12" fill="#ffd700" stroke="#b8860b" stroke-width="0.75" />
    </g>
  `,

  // Muscular Orange Novelty Arms (from IMG_3541)
  buffArms: (x = 0, y = 0, s = 1) => `
    <g transform="translate(${x}, ${y}) scale(${s})">
      <!-- Connecting yoke behind neck -->
      <path d="M -35 -15 C -20 -25 20 -25 35 -15" fill="none" stroke="#e65100" stroke-width="6" stroke-linecap="round" />
      <!-- Left Muscular Arm & Flexed Bicep -->
      <g>
        <path d="M -30 -15 C -45 -15 -62 -5 -60 15 C -58 28 -48 30 -42 22 C -38 16 -38 8 -30 2" fill="#ff9800" stroke="#e65100" stroke-width="2" />
        <!-- Bicep peak muscle contour -->
        <path d="M -56 5 C -52 -4 -42 -2 -42 8" fill="#ffa726" />
        <!-- Forearm & Clenched Fist -->
        <circle cx="-42" cy="18" r="8" fill="#ffb74d" stroke="#e65100" stroke-width="1.5" />
        <path d="M -46 15 Q -42 12 -38 15" stroke="#e65100" stroke-width="1.2" fill="none" />
      </g>
      <!-- Right Muscular Arm & Flexed Bicep -->
      <g>
        <path d="M 30 -15 C 45 -15 62 -5 60 15 C 58 28 48 30 42 22 C 38 16 38 8 30 2" fill="#ff9800" stroke="#e65100" stroke-width="2" />
        <!-- Bicep peak muscle contour -->
        <path d="M 56 5 C 52 -4 42 -2 42 8" fill="#ffa726" />
        <!-- Forearm & Clenched Fist -->
        <circle cx="42" cy="18" r="8" fill="#ffb74d" stroke="#e65100" stroke-width="1.5" />
        <path d="M 38 15 Q 42 12 46 15" stroke="#e65100" stroke-width="1.2" fill="none" />
      </g>
    </g>
  `,

  // Mardi Gras Bead Necklaces (from PXL_20260220)
  mardiGrasBeads: (cx = 0, cy = 0, rx = 40, ry = 25) => {
    const beadColors = ['#9c27b0', '#2e7d32', '#ffd700']; // Purple, Green, Gold
    const numBeads = 24;
    let beads = '';
    for (let i = 0; i < numBeads; i++) {
      const angle = (Math.PI * i) / (numBeads - 1);
      const bx = cx - Math.cos(angle) * rx;
      const by = cy + Math.sin(angle) * ry;
      const color = beadColors[i % beadColors.length];
      beads += `<circle cx="${bx.toFixed(1)}" cy="${by.toFixed(1)}" r="3" fill="${color}" stroke="#ffffff" stroke-width="0.5" />`;
    }
    return `<g>${beads}</g>`;
  },

  // Pink Bow Tie with Teal Paw Charm (from IMG_9826 and IMG_9787)
  bowTieWithTag: (x = 0, y = 0, s = 1) => `
    <g transform="translate(${x}, ${y}) scale(${s})">
      <!-- Left bow wing -->
      <polygon points="0,0 -16,-10 -18,10" fill="#e91e63" stroke="#ad1457" stroke-width="1" />
      <!-- Right bow wing -->
      <polygon points="0,0 16,-10 18,10" fill="#e91e63" stroke="#ad1457" stroke-width="1" />
      <!-- Center knot -->
      <circle cx="0" cy="0" r="4.5" fill="#f06292" stroke="#ad1457" stroke-width="1" />
      <!-- Hanging Ring & Teal Tag ("NIGHT") -->
      <line x1="0" y1="4" x2="0" y2="9" stroke="#ffd700" stroke-width="1.2" />
      <circle cx="0" cy="15" r="7" fill="#00b4d8" stroke="#ffd700" stroke-width="1" />
      <path d="M -3 15 L 0 12 L 3 15 L 0 17 Z" fill="#ffd700" />
    </g>
  `,

  // Amazon / Brown Cardboard Box (from IMG_3119)
  cardboardBox: (x = 0, y = 0, w = 90, h = 60) => `
    <g transform="translate(${x}, ${y})">
      <!-- Main box body -->
      <polygon points="${-w/2},${-h/2} ${w/2},${-h/2} ${w/2 - 6},${h/2} ${-w/2 + 6},${h/2}" fill="#c68a4c" stroke="#8d5b28" stroke-width="1.8" />
      <!-- Front seam & flap folds -->
      <line x1="0" y1="${-h/2}" x2="0" y2="${h/2}" stroke="#8d5b28" stroke-width="1.2" stroke-dasharray="3,3" />
      <!-- Open top flap shadows -->
      <polygon points="${-w/2},${-h/2} ${-w/2 - 12},${-h/2 - 16} ${-w/2 + 20},${-h/2 - 12} ${-w/2 + 10},${-h/2}" fill="#d79e5e" stroke="#8d5b28" stroke-width="1" />
      <polygon points="${w/2},${-h/2} ${w/2 + 12},${-h/2 - 16} ${w/2 - 20},${-h/2 - 12} ${w/2 - 10},${-h/2}" fill="#d79e5e" stroke="#8d5b28" stroke-width="1" />
      <!-- Barcode / Box Stamp -->
      <rect x="${-w/2 + 16}" y="${h/2 - 20}" width="22" height="12" fill="#f5ede0" stroke="#8d5b28" stroke-width="0.8" />
      <line x1="${-w/2 + 20}" y1="${h/2 - 18}" x2="${-w/2 + 20}" y2="${h/2 - 10}" stroke="#000" stroke-width="1.5" />
      <line x1="${-w/2 + 24}" y1="${h/2 - 18}" x2="${-w/2 + 24}" y2="${h/2 - 10}" stroke="#000" stroke-width="1" />
      <line x1="${-w/2 + 28}" y1="${h/2 - 18}" x2="${-w/2 + 28}" y2="${h/2 - 10}" stroke="#000" stroke-width="2" />
      <line x1="${-w/2 + 33}" y1="${h/2 - 18}" x2="${-w/2 + 33}" y2="${h/2 - 10}" stroke="#000" stroke-width="1" />
      <!-- Smile arrow / symbol -->
      <path d="M ${w/2 - 32} ${h/2 - 14} Q ${w/2 - 20} ${h/2 - 8} ${w/2 - 12} ${h/2 - 15}" fill="none" stroke="#2c3e50" stroke-width="2" stroke-linecap="round" />
      <polygon points="${w/2 - 10},${h/2 - 17} ${w/2 - 10},${h/2 - 11} ${w/2 - 14},${h/2 - 13}" fill="#2c3e50" />
    </g>
  `,

  // Poisson Frais Drum Tub (from IMG_0378)
  poissonFraisTub: (x = 0, y = 0, w = 110, h = 65) => `
    <g transform="translate(${x}, ${y})">
      <!-- Wooden Barrel Drum Body -->
      <path d="M ${-w/2} ${-h/4} C ${-w/2 - 8} ${h/6}, ${-w/2 - 5} ${h/2}, ${-w/2 + 10} ${h/2} L ${w/2 - 10} ${h/2} C ${w/2 + 5} ${h/2}, ${w/2 + 8} ${h/6}, ${w/2} ${-h/4} Z" fill="#b08968" stroke="#6f4e37" stroke-width="2" />
      <!-- Steel Hoops -->
      <path d="M ${-w/2 - 3} 0 C 0 5 0 5 ${w/2 + 3} 0" fill="none" stroke="#4a4e69" stroke-width="3" />
      <path d="M ${-w/2 + 5} ${h/3} C 0 ${h/3 + 5} 0 ${h/3 + 5} ${w/2 - 5} ${h/3}" fill="none" stroke="#4a4e69" stroke-width="3" />
      <!-- Stenciled POISSON FRAIS label -->
      <rect x="-42" y="${-h/12}" width="84" height="18" rx="3" fill="#eddcd2" stroke="#6f4e37" stroke-width="0.8" opacity="0.9" />
      <text x="0" y="${-h/12 + 13}" font-family="'Cinzel', 'Georgia', serif" font-size="8.5" font-weight="700" fill="#22223b" letter-spacing="1.2" text-anchor="middle">POISSON FRAIS</text>
      <!-- Tiny Fish Icon -->
      <path d="M -32 ${-h/12 + 9} Q -27 ${-h/12 + 6} -22 ${-h/12 + 9} Q -27 ${-h/12 + 12} -32 ${-h/12 + 9} Z M -32 ${-h/12 + 9} L -36 ${-h/12 + 6} L -36 ${-h/12 + 12} Z" fill="#6f4e37" />
    </g>
  `
};


// --- FELINE CARD FRAME ---
/**
 * Feline Familiars Card Frame Generator
 * Wraps card illustrations in a bespoke midnight-velvet feline cardstock,
 * featuring golden cat ear filigree, corner paw prints, whisker accents,
 * Roman numerals, and title plates.
 */



function createCatCardFrame(card, artworkSvg, customDefs = '') {
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


// --- FELINE 22 MAJOR ARCANA ---
/**
 * Feline Familiars Tarot: 22 Major Arcana Masterpiece Vector Artworks
 * Faithfully celebrating the 4 real cats from the reference photos:
 * 1. The Buff Ginger Floof (Strength, The Emperor, The Sun, The Fool)
 * 2. The Smoky Persian Sheriff & Sage (Justice, The Hermit, The Hierophant, The Star)
 * 3. The Sleek Void Twins / Night (The Magician, The Lovers, The Moon, Death, Judgement)
 * 4. The Mardi Gras Bicolor Chonk (The Empress, The Hanged Man, Wheel of Fortune)
 */



const CAT_MAJOR_ARCANA_ART = {
  // 0: The Fool (The Bath Survivor / The Brave Step)
  maj_00: {
    defs: `
      <linearGradient id="cf_foolSky" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#0b132b" /><stop offset="50%" stop-color="#1c2541" /><stop offset="100%" stop-color="#3a506b" />
      </linearGradient>
      <radialGradient id="cf_bubbleGrad" cx="30%" cy="30%" r="70%">
        <stop offset="0%" stop-color="#ffffff" stop-opacity="0.9" />
        <stop offset="50%" stop-color="#a8dadc" stop-opacity="0.6" />
        <stop offset="100%" stop-color="#457b9d" stop-opacity="0.3" />
      </radialGradient>
    `,
    svg: `
      <g transform="translate(150, 230)">
        <rect x="-128" y="-170" width="256" height="340" fill="url(#cf_foolSky)" />
        <!-- Floating iridescent soap bubbles (cosmic spheres) -->
        <circle cx="-60" cy="-100" r="18" fill="url(#cf_bubbleGrad)" stroke="#fff" stroke-width="0.8" />
        <circle cx="70" cy="-120" r="24" fill="url(#cf_bubbleGrad)" stroke="#fff" stroke-width="0.8" />
        <circle cx="20" cy="-70" r="12" fill="url(#cf_bubbleGrad)" stroke="#fff" stroke-width="0.6" />
        <circle cx="-85" cy="-40" r="8" fill="url(#cf_bubbleGrad)" stroke="#fff" stroke-width="0.5" />
        <!-- Bathtub rim ledge precipice -->
        <path d="M -128 60 Q 0 80 128 60 L 128 170 L -128 170 Z" fill="#243447" stroke="#ffd700" stroke-width="1.5" />
        <!-- Sparkling water ripples -->
        <ellipse cx="0" cy="110" rx="90" ry="20" fill="none" stroke="#48cae4" stroke-width="1.5" stroke-dasharray="5,5" />
        
        <!-- Scruffy Wet Orange Tabby Walking Forward (IMG_9918) -->
        <g transform="translate(0, 30)">
          <!-- Legs walking with grit -->
          <line x1="-25" y1="10" x2="-28" y2="40" stroke="#d35400" stroke-width="5" stroke-linecap="round" />
          <line x1="-10" y1="10" x2="-5" y2="38" stroke="#e67e22" stroke-width="5" stroke-linecap="round" />
          <line x1="10" y1="10" x2="8" y2="42" stroke="#d35400" stroke-width="5" stroke-linecap="round" />
          <line x1="25" y1="10" x2="30" y2="38" stroke="#e67e22" stroke-width="5" stroke-linecap="round" />
          <!-- Scruffy wet orange body -->
          <ellipse cx="0" cy="5" rx="36" ry="22" fill="#e67e22" stroke="#ba4a00" stroke-width="1.8" />
          <!-- Spiky wet fur tufts -->
          <path d="M -30 -10 L -36 -18 L -24 -14 L -20 -24 L -10 -16 L 0 -25 L 12 -16 L 24 -24 L 28 -14 L 38 -18 L 30 -10 Z" fill="#d35400" />
          <!-- Tail held high with dripping droplet -->
          <path d="M 30 0 Q 55 -20 48 -45 Q 45 -55 40 -50" fill="none" stroke="#e67e22" stroke-width="4.5" stroke-linecap="round" />
          <circle cx="40" cy="-35" r="2.5" fill="#48cae4" />
          <!-- Head facing forward -->
          <circle cx="-25" cy="-12" rx="20" ry="18" fill="#f39c12" stroke="#ba4a00" stroke-width="1.5" />
          <!-- Scruffy triangular ears -->
          <polygon points="-40,-20 -44,-36 -28,-26" fill="#e67e22" stroke="#ba4a00" stroke-width="1.2" />
          <polygon points="-22,-26 -12,-38 -10,-20" fill="#e67e22" stroke="#ba4a00" stroke-width="1.2" />
          <!-- Wide determined golden eyes -->
          <circle cx="-32" cy="-14" r="4.5" fill="#ffd700" stroke="#000" stroke-width="1" />
          <ellipse cx="-32" cy="-14" rx="1.5" ry="3.5" fill="#000" />
          <circle cx="-18" cy="-14" r="4.5" fill="#ffd700" stroke="#000" stroke-width="1" />
          <ellipse cx="-18" cy="-14" rx="1.5" ry="3.5" fill="#000" />
          <!-- Pink nose & wet white chin -->
          <polygon points="-26,-7 -24,-4 -28,-4" fill="#ff8da1" />
          <!-- Determined bristling whiskers -->
          <g stroke="#ffffff" stroke-width="1.2" opacity="0.9">
            <line x1="-30" y1="-5" x2="-50" y2="-8" /><line x1="-30" y1="-3" x2="-52" y2="2" /><line x1="-30" y1="-1" x2="-48" y2="10" />
            <line x1="-20" y1="-5" x2="-2" y2="-8" /><line x1="-20" y1="-3" x2="2" y2="2" /><line x1="-20" y1="-1" x2="-4" y2="10" />
          </g>
        </g>
      </g>
    `
  },

  // I: The Magician (The Sacred Nose Boop / The Hallows)
  maj_01: {
    defs: `
      <radialGradient id="cf_boopGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#ffffff" stop-opacity="1" />
        <stop offset="40%" stop-color="#ffd700" stop-opacity="0.8" />
        <stop offset="100%" stop-color="#e91e63" stop-opacity="0" />
      </radialGradient>
      <linearGradient id="cf_magDesk" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#2c1a4d" /><stop offset="100%" stop-color="#120824" />
      </linearGradient>
    `,
    svg: `
      <g transform="translate(150, 230)">
        <!-- Sacred Alter Table -->
        <polygon points="-128,70 128,70 110,170 -110,170" fill="url(#cf_magDesk)" stroke="#ffd700" stroke-width="1.5" />
        <!-- Golden Infinity Lemniscate -->
        <g transform="translate(0, -110)">
          <path d="M 0 0 C -22 -22 -44 0 -22 22 C 0 0 22 22 44 0 C 22 -22 0 0 0 0 Z" fill="none" stroke="#ffd700" stroke-width="3" />
          <circle cx="0" cy="0" r="3" fill="#fff" />
        </g>

        <!-- Sleek Black Cat (IMG_9826) Sitting Upright -->
        <g transform="translate(0, 10)">
          <!-- Black body silhouette with velvet sheen -->
          <path d="M -40 60 C -45 10 -25 -25 0 -25 C 25 -25 45 10 40 60 Z" fill="#111119" stroke="#33334d" stroke-width="1.5" />
          <!-- Head -->
          <circle cx="0" cy="-45" r="28" fill="#14141e" stroke="#222233" stroke-width="1.5" />
          <!-- Tall sleek ears -->
          <polygon points="-22,-58 -28,-86 -6,-68" fill="#0f0f18" stroke="#3d3d5c" stroke-width="1.2" />
          <polygon points="-20,-60 -25,-80 -10,-68" fill="#ff8da1" opacity="0.6" />
          <polygon points="22,-58 28,-86 6,-68" fill="#0f0f18" stroke="#3d3d5c" stroke-width="1.2" />
          <polygon points="20,-60 25,-80 10,-68" fill="#ff8da1" opacity="0.6" />
          <!-- Big inquisitive yellow-green glowing eyes -->
          <ellipse cx="-11" cy="-48" rx="6" ry="8" fill="#76c893" stroke="#ffd700" stroke-width="1" />
          <ellipse cx="-11" cy="-48" rx="2" ry="7" fill="#05050a" />
          <ellipse cx="11" cy="-48" rx="6" ry="8" fill="#76c893" stroke="#ffd700" stroke-width="1" />
          <ellipse cx="11" cy="-48" rx="2" ry="7" fill="#05050a" />
          <!-- Pink Bowtie with Teal Tag ("NIGHT") -->
          ${CAT_EMBLEMS.bowTieWithTag(0, -15, 1)}

          <!-- Pink Nose receiving the Divine Boop -->
          <polygon points="0,-36 -3,-39 3,-39" fill="#ff80ab" />
          <!-- Whiskers -->
          <g stroke="#ffffff" stroke-width="1.2" opacity="0.95">
            <line x1="-8" y1="-37" x2="-35" y2="-42" /><line x1="-8" y1="-35" x2="-38" y2="-34" /><line x1="-8" y1="-33" x2="-34" y2="-26" />
            <line x1="8" y1="-37" x2="35" y2="-42" /><line x1="8" y1="-35" x2="38" y2="-34" /><line x1="8" y1="-33" x2="34" y2="-26" />
          </g>

          <!-- Divine Booping Human Finger from Above -->
          <g transform="translate(0, -68)">
            <path d="M -5 -60 L -5 22 C -5 32 5 32 5 22 L 5 -60 Z" fill="#f8c291" stroke="#e17055" stroke-width="1.5" />
            <circle cx="0" cy="28" r="16" fill="url(#cf_boopGlow)" />
            <circle cx="0" cy="28" r="4" fill="#ffffff" />
          </g>
        </g>

        <!-- The 4 Feline Hallows on the Altar Table -->
        <!-- Wand: Feather Wand Teaser -->
        <g transform="translate(-75, 105) rotate(-25)">
          <line x1="0" y1="20" x2="0" y2="-25" stroke="#ffd700" stroke-width="2" />
          <path d="M 0 -25 C -8 -35 0 -45 0 -48 C 0 -45 8 -35 0 -25" fill="#e74c3c" />
        </g>
        <!-- Cup: Fresh Milk Dish with Gold Rim -->
        <g transform="translate(-25, 115)">
          <ellipse cx="0" cy="0" rx="16" ry="7" fill="#ffffff" stroke="#ffd700" stroke-width="1.5" />
          <ellipse cx="0" cy="-2" rx="12" ry="4" fill="#e0f7fa" />
        </g>
        <!-- Sword: Silver Fishbone / Razor Athame -->
        <g transform="translate(25, 115) rotate(20)">
          <line x1="0" y1="15" x2="0" y2="-25" stroke="#dcdde1" stroke-width="2.5" />
          <line x1="-8" y1="5" x2="8" y2="5" stroke="#ffd700" stroke-width="2" />
        </g>
        <!-- Pentacle: Golden Gourmet Tuna Feast Can -->
        <g transform="translate(75, 115)">
          <ellipse cx="0" cy="5" rx="15" ry="7" fill="#d4af37" stroke="#996515" stroke-width="1.5" />
          <ellipse cx="0" cy="-2" rx="15" ry="7" fill="#ffd700" stroke="#996515" stroke-width="1.5" />
          <circle cx="0" cy="-2" r="3" fill="#fff" />
        </g>
      </g>
    `
  },

  // II: The High Priestess (The Midnight Seer & Whispering Familiar)
  maj_02: {
    defs: `
      <linearGradient id="cf_hpSky" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#020914" /><stop offset="60%" stop-color="#0b1b36" /><stop offset="100%" stop-color="#142c54" />
      </linearGradient>
    `,
    svg: `
      <g transform="translate(150, 230)">
        <rect x="-128" y="-170" width="256" height="340" fill="url(#cf_hpSky)" />
        <!-- Twin Sisal Scratching Towers: Boaz (Dark) & Jachin (Light) -->
        <rect x="-115" y="-130" width="30" height="270" rx="4" fill="#1b1c2b" stroke="#3d405b" stroke-width="1.5" />
        <rect x="85" y="-130" width="30" height="270" rx="4" fill="#e0e1dd" stroke="#778da9" stroke-width="1.5" />
        <!-- Sisal winding textures -->
        <g stroke="#3d405b" stroke-width="1" opacity="0.6">
          <line x1="-115" y1="-100" x2="-85" y2="-90" /><line x1="-115" y1="-60" x2="-85" y2="-50" /><line x1="-115" y1="-20" x2="-85" y2="-10" /><line x1="-115" y1="20" x2="-85" y2="30" />
        </g>
        <g stroke="#778da9" stroke-width="1" opacity="0.6">
          <line x1="85" y1="-100" x2="115" y2="-90" /><line x1="85" y1="-60" x2="115" y2="-50" /><line x1="85" y1="-20" x2="115" y2="-10" /><line x1="85" y1="20" x2="115" y2="30" />
        </g>
        <!-- Sacred Letters B & J -->
        <text x="-100" y="-105" font-family="'Cinzel', serif" font-size="16" font-weight="700" fill="#778da9" text-anchor="middle">B</text>
        <text x="100" y="-105" font-family="'Cinzel', serif" font-size="16" font-weight="700" fill="#1b1c2b" text-anchor="middle">J</text>

        <!-- Starry Veil with Pomegranates & Catnip Sprigs -->
        <path d="M -85 -100 Q 0 -80 85 -100 L 85 90 Q 0 110 -85 90 Z" fill="#0d1b2a" opacity="0.85" stroke="#ffd700" stroke-width="0.8" />
        <circle cx="-40" cy="-30" r="4" fill="#e63946" /><circle cx="40" cy="-30" r="4" fill="#e63946" /><circle cx="0" cy="-50" r="4" fill="#e63946" />

        <!-- Sleek Black Cat (IMG_3818 / IMG_9787) Seated Majestically -->
        <g transform="translate(0, 40)">
          <!-- Golden Crescent Moon under paws -->
          <path d="M -45 50 A 25 25 0 0 0 45 50 A 35 25 0 0 1 -45 50 Z" fill="#ffd700" stroke="#fff" stroke-width="1" />
          <!-- Black feline body -->
          <path d="M -30 45 C -35 5 -18 -30 0 -30 C 18 -30 35 5 30 45 Z" fill="#0a0a12" stroke="#222" stroke-width="1.5" />
          <!-- Head -->
          <circle cx="0" cy="-45" r="24" fill="#0c0c16" stroke="#1f1f2e" stroke-width="1.2" />
          <!-- Ears -->
          <polygon points="-18,-55 -24,-76 -6,-64" fill="#0a0a12" stroke="#ffd700" stroke-width="0.8" />
          <polygon points="18,-55 24,-76 6,-64" fill="#0a0a12" stroke="#ffd700" stroke-width="0.8" />
          <!-- Huge Glowing Jade Emerald Eyes -->
          <ellipse cx="-9" cy="-46" rx="6" ry="8" fill="#2ec4b6" stroke="#cbf3f0" stroke-width="1.2" />
          <ellipse cx="-9" cy="-46" rx="2" ry="7" fill="#011627" />
          <ellipse cx="9" cy="-46" rx="6" ry="8" fill="#2ec4b6" stroke="#cbf3f0" stroke-width="1.2" />
          <ellipse cx="9" cy="-46" rx="2" ry="7" fill="#011627" />
          <!-- Whispering scroll / paw -->
          <circle cx="0" cy="-36" r="2" fill="#ff99c8" />
          <!-- Luminous Whiskers -->
          <line x1="-8" y1="-36" x2="-35" y2="-40" stroke="#fff" stroke-width="1" />
          <line x1="-8" y1="-34" x2="-36" y2="-32" stroke="#fff" stroke-width="1" />
          <line x1="8" y1="-36" x2="35" y2="-40" stroke="#fff" stroke-width="1" />
          <line x1="8" y1="-34" x2="36" y2="-32" stroke="#fff" stroke-width="1" />
        </g>
      </g>
    `
  },

  // III: The Empress (The Mardi Gras Bicolor Sovereign)
  maj_03: {
    defs: `
      <linearGradient id="cf_empGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#14361e" /><stop offset="60%" stop-color="#081c0e" /><stop offset="100%" stop-color="#020804" />
      </linearGradient>
    `,
    svg: `
      <g transform="translate(150, 230)">
        <rect x="-128" y="-170" width="256" height="340" fill="url(#cf_empGrad)" />
        <!-- Lush Catnip Meadow & Golden Wheat -->
        <path d="M -128 70 Q 0 40 128 70 L 128 170 L -128 170 Z" fill="#1b4332" stroke="#40916c" stroke-width="1.5" />
        <!-- Plush Velvet Royal Cushion -->
        <ellipse cx="0" cy="95" rx="90" ry="32" fill="#5c007a" stroke="#ffd700" stroke-width="2" />
        <!-- Golden tassels on cushion -->
        <circle cx="-85" cy="100" r="5" fill="#ffd700" /><circle cx="85" cy="100" r="5" fill="#ffd700" />

        <!-- Bicolor Grey-and-White Cat (PXL_20260220) Seated Like Royalty -->
        <g transform="translate(0, 20)">
          <!-- Grey body with fluffy white bib -->
          <path d="M -45 60 C -50 0 -25 -25 0 -25 C 25 -25 50 0 45 60 Z" fill="#6c757d" stroke="#495057" stroke-width="1.5" />
          <!-- White Chest/Bib -->
          <path d="M -20 10 C -25 35 -15 60 0 60 C 15 60 25 35 20 10 C 15 -10 -15 -10 -20 10 Z" fill="#f8f9fa" />
          <!-- Crossed White Paws in Front -->
          <ellipse cx="-12" cy="62" rx="14" ry="8" fill="#ffffff" stroke="#ced4da" stroke-width="1" />
          <ellipse cx="14" cy="64" rx="14" ry="8" fill="#ffffff" stroke="#ced4da" stroke-width="1" />
          <!-- Head: Grey cheeks with White Blaze down muzzle -->
          <circle cx="0" cy="-35" r="26" fill="#6c757d" stroke="#495057" stroke-width="1.5" />
          <!-- White Blaze on Face -->
          <path d="M -8 -30 L 0 -50 L 8 -30 L 14 -18 L -14 -18 Z" fill="#ffffff" />
          <!-- Ears -->
          <polygon points="-20,-48 -26,-72 -6,-58" fill="#6c757d" stroke="#495057" stroke-width="1.2" />
          <polygon points="-18,-50 -22,-66 -10,-58" fill="#ffb4a2" />
          <polygon points="20,-48 26,-72 6,-58" fill="#6c757d" stroke="#495057" stroke-width="1.2" />
          <polygon points="18,-50 22,-66 10,-58" fill="#ffb4a2" />
          <!-- Serene Pale-Green / Golden Eyes -->
          <ellipse cx="-11" cy="-36" rx="5.5" ry="7" fill="#a7c957" stroke="#386641" stroke-width="1" />
          <ellipse cx="-11" cy="-36" rx="2" ry="6" fill="#000" />
          <ellipse cx="11" cy="-36" rx="5.5" ry="7" fill="#a7c957" stroke="#386641" stroke-width="1" />
          <ellipse cx="11" cy="-36" rx="2" ry="6" fill="#000" />
          <!-- Cute Pink Nose -->
          <polygon points="0,-24 -3.5,-28 3.5,-28" fill="#ff758f" />
          
          <!-- Glorious Mardi Gras Bead Necklaces Draped Around Neck (Purple, Green, Gold) -->
          ${CAT_EMBLEMS.mardiGrasBeads(0, -6, 38, 22)}
          ${CAT_EMBLEMS.mardiGrasBeads(0, 4, 34, 20)}
          ${CAT_EMBLEMS.mardiGrasBeads(0, 14, 30, 18)}

          <!-- Whiskers -->
          <line x1="-8" y1="-24" x2="-35" y2="-28" stroke="#ffffff" stroke-width="1.2" />
          <line x1="-8" y1="-22" x2="-38" y2="-20" stroke="#ffffff" stroke-width="1.2" />
          <line x1="8" y1="-24" x2="35" y2="-28" stroke="#ffffff" stroke-width="1.2" />
          <line x1="8" y1="-22" x2="38" y2="-20" stroke="#ffffff" stroke-width="1.2" />
        </g>
      </g>
    `
  },

  // IV: The Emperor (The Sovereign of Poisson Frais)
  maj_04: {
    defs: `
      <linearGradient id="cf_empRed" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#3d0c02" /><stop offset="60%" stop-color="#1f0601" /><stop offset="100%" stop-color="#080200" />
      </linearGradient>
    `,
    svg: `
      <g transform="translate(150, 230)">
        <rect x="-128" y="-170" width="256" height="340" fill="url(#cf_empRed)" />
        <!-- Stone Ramparts & Red Velvet Canopy -->
        <polygon points="-128,-170 128,-170 110,-100 -110,-100" fill="#800f2f" stroke="#ffd700" stroke-width="1.5" />

        <!-- Fluffy Orange Cat in POISSON FRAIS Drum (IMG_0378 / PXL_20260706) -->
        <g transform="translate(0, 20)">
          <!-- Poisson Frais Barrel Tub Throne -->
          ${CAT_EMBLEMS.poissonFraisTub(0, 60, 120, 70)}

          <!-- Fluffy Ginger Cat Sitting Inside Drum -->
          <!-- Fluffy Ginger Body -->
          <ellipse cx="0" cy="15" rx="42" ry="32" fill="#e67e22" stroke="#ba4a00" stroke-width="2" />
          <!-- Huge Fluffy White/Cream Bib -->
          <path d="M -22 0 C -25 25 -10 38 0 38 C 10 38 25 25 22 0 Z" fill="#ffeedd" />
          <!-- Head -->
          <circle cx="0" cy="-25" r="28" fill="#f39c12" stroke="#ba4a00" stroke-width="1.8" />
          <!-- Fluffy cheek tufts -->
          <polygon points="-28,-25 -42,-18 -30,-10" fill="#f39c12" />
          <polygon points="28,-25 42,-18 30,-10" fill="#f39c12" />
          <!-- Ears with Golden Crown -->
          <polygon points="-22,-42 -28,-65 -8,-52" fill="#e67e22" stroke="#ba4a00" stroke-width="1.2" />
          <polygon points="22,-42 28,-65 8,-52" fill="#e67e22" stroke="#ba4a00" stroke-width="1.2" />
          <!-- Tiny Sovereign Crown between ears -->
          <polygon points="-14,-48 -14,-62 -7,-54 0,-66 7,-54 14,-62 14,-48" fill="#ffd700" stroke="#b8860b" stroke-width="1.2" />
          <circle cx="0" cy="-66" r="2" fill="#e74c3c" />
          <!-- Resolute Amber Eyes -->
          <ellipse cx="-11" cy="-26" rx="5.5" ry="7" fill="#f7b731" stroke="#000" stroke-width="1" />
          <ellipse cx="-11" cy="-26" rx="2" ry="6" fill="#000" />
          <ellipse cx="11" cy="-26" rx="5.5" ry="7" fill="#f7b731" stroke="#000" stroke-width="1" />
          <ellipse cx="11" cy="-26" rx="2" ry="6" fill="#000" />
          <!-- Pink Nose & Whiskers -->
          <polygon points="0,-16 -3,-20 3,-20" fill="#ff758f" />
          <line x1="-8" y1="-16" x2="-38" y2="-20" stroke="#ffffff" stroke-width="1.4" />
          <line x1="-8" y1="-14" x2="-40" y2="-12" stroke="#ffffff" stroke-width="1.4" />
          <line x1="8" y1="-16" x2="38" y2="-20" stroke="#ffffff" stroke-width="1.4" />
          <line x1="8" y1="-14" x2="40" y2="-12" stroke="#ffffff" stroke-width="1.4" />

          <!-- Golden Fish Scepter held in paw -->
          <g transform="translate(48, 15) rotate(-15)">
            <line x1="0" y1="30" x2="0" y2="-30" stroke="#ffd700" stroke-width="3" />
            <!-- Fish fin scepter top -->
            <ellipse cx="0" cy="-35" rx="10" ry="6" fill="#ffd700" stroke="#b8860b" stroke-width="1.2" />
            <polygon points="10,-35 18,-42 18,-28" fill="#ffd700" />
          </g>
        </g>
      </g>
    `
  },

  // V: The Hierophant (The Smoky Persian Sage)
  maj_05: {
    defs: `
      <linearGradient id="cf_hieroSky" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#141124" /><stop offset="60%" stop-color="#241e3d" /><stop offset="100%" stop-color="#0a0812" />
      </linearGradient>
    `,
    svg: `
      <g transform="translate(150, 230)">
        <rect x="-128" y="-170" width="256" height="340" fill="url(#cf_hieroSky)" />
        <!-- Cathedral Pillars & Stained Glass Rosette -->
        <circle cx="0" cy="-90" r="35" fill="none" stroke="#ffd700" stroke-width="1.5" />
        <circle cx="0" cy="-90" r="28" fill="#4a154b" opacity="0.6" />

        <!-- Smoky Flat-Faced Persian Sage (IMG_20160112) -->
        <g transform="translate(0, 15)">
          <!-- Voluminous Smoky Grey Robes / Fur -->
          <path d="M -55 75 C -65 15 -35 -20 0 -20 C 35 -20 65 15 55 75 Z" fill="#495057" stroke="#343a40" stroke-width="2" />
          <!-- Golden Hierophantic Pallium / Stole -->
          <path d="M -22 0 L -18 75 L -8 75 L -12 0 Z" fill="#ffd700" stroke="#b8860b" stroke-width="1" />
          <path d="M 22 0 L 18 75 L 8 75 L 12 0 Z" fill="#ffd700" stroke="#b8860b" stroke-width="1" />
          <!-- Head: Iconic Round Flat Persian Face -->
          <circle cx="0" cy="-30" r="34" fill="#6c757d" stroke="#343a40" stroke-width="2" />
          <!-- Fluffy Persian Cheeks & Chin Fur -->
          <ellipse cx="0" cy="-18" rx="28" ry="16" fill="#adb5bd" opacity="0.6" />
          <!-- Triple Papal Mitre / Crown -->
          <polygon points="-16,-55 -18,-95 0,-105 18,-95 16,-55" fill="#f8f9fa" stroke="#ffd700" stroke-width="1.8" />
          <line x1="-17" y1="-80" x2="17" y2="-80" stroke="#ffd700" stroke-width="2" />
          <line x1="-16" y1="-65" x2="16" y2="-65" stroke="#ffd700" stroke-width="2" />
          <!-- Giant Golden-Copper Amber Eyes with Wise Expression -->
          <circle cx="-13" cy="-30" r="7.5" fill="#f39c12" stroke="#000" stroke-width="1.2" />
          <circle cx="-13" cy="-30" r="3" fill="#000" />
          <circle cx="13" cy="-30" r="7.5" fill="#f39c12" stroke="#000" stroke-width="1.2" />
          <circle cx="13" cy="-30" r="3" fill="#000" />
          <!-- Flat Persian Nose (high between eyes) -->
          <ellipse cx="0" cy="-28" rx="4" ry="3" fill="#343a40" />
          <path d="M -3 -25 Q 0 -22 3 -25" stroke="#212529" stroke-width="1.2" fill="none" />
          <!-- Serious, contemplative whiskers -->
          <line x1="-15" y1="-24" x2="-45" y2="-26" stroke="#ffffff" stroke-width="1.2" />
          <line x1="-15" y1="-21" x2="-48" y2="-18" stroke="#ffffff" stroke-width="1.2" />
          <line x1="15" y1="-24" x2="45" y2="-26" stroke="#ffffff" stroke-width="1.2" />
          <line x1="15" y1="-21" x2="48" y2="-18" stroke="#ffffff" stroke-width="1.2" />

          <!-- Raised Paw of Benediction -->
          <ellipse cx="28" cy="15" rx="10" ry="7" fill="#adb5bd" stroke="#ffd700" stroke-width="1.2" />
        </g>

        <!-- Two Devotee Mice Kneeling at the Steps -->
        <g transform="translate(-40, 140) scale(0.8)">
          <ellipse cx="0" cy="0" rx="8" ry="6" fill="#8d99ae" />
          <circle cx="-6" cy="-4" r="3" fill="#ffb4a2" />
        </g>
        <g transform="translate(40, 140) scale(0.8)">
          <ellipse cx="0" cy="0" rx="8" ry="6" fill="#8d99ae" />
          <circle cx="6" cy="-4" r="3" fill="#ffb4a2" />
        </g>
      </g>
    `
  },

  // VI: The Lovers (The Yin-Yang Slumber of the Void Twins)
  maj_06: {
    defs: `
      <radialGradient id="cf_loverAura" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#ffb703" stop-opacity="0.8" />
        <stop offset="60%" stop-color="#fb8500" stop-opacity="0.3" />
        <stop offset="100%" stop-color="#023047" stop-opacity="0" />
      </radialGradient>
    `,
    svg: `
      <g transform="translate(150, 230)">
        <!-- Floral Quilt Pattern Background (IMG_0260) -->
        <rect x="-128" y="-170" width="256" height="340" fill="#1d152b" />
        <!-- Floating Angelic Feline Wings Above -->
        <g transform="translate(0, -95)">
          <circle cx="0" cy="0" r="30" fill="url(#cf_loverAura)" />
          <!-- Angelic Golden Cat Head -->
          <circle cx="0" cy="-5" r="14" fill="#ffd700" stroke="#fff" stroke-width="1" />
          <polygon points="-10,-14 -12,-25 -4,-18" fill="#ffd700" />
          <polygon points="10,-14 12,-25 4,-18" fill="#ffd700" />
          <!-- Feathered Wings -->
          <path d="M -15 -5 C -45 -35 -85 -20 -95 10 C -75 5 -45 15 -15 5 Z" fill="#ffe599" opacity="0.85" />
          <path d="M 15 -5 C 45 -35 85 -20 95 10 C 75 5 45 15 15 5 Z" fill="#ffe599" opacity="0.85" />
        </g>

        <!-- Sacred Yin-Yang Sleeping Black Cats (IMG_0260) -->
        <g transform="translate(0, 35)">
          <!-- Outer Celestial Wreath of Roses & Catnip -->
          <circle cx="0" cy="0" r="82" fill="none" stroke="#ffd700" stroke-width="1.8" />
          <circle cx="0" cy="0" r="76" fill="#0b0814" stroke="#ff758f" stroke-dasharray="3,4" stroke-width="1" />

          <!-- Cat 1 (Top / Curved Clockwise) -->
          <path d="M 0 0 C -40 0 -70 -25 -70 -50 C -70 -72 -42 -75 0 -75 C 40 -75 70 -45 70 -15 C 70 20 40 0 0 0 Z" fill="#14141e" stroke="#ffd700" stroke-width="1.2" />
          <polygon points="-50,-68 -44,-82 -36,-70" fill="#14141e" stroke="#ffd700" stroke-width="0.8" />
          <polygon points="-30,-72 -24,-84 -18,-72" fill="#14141e" stroke="#ffd700" stroke-width="0.8" />
          <!-- Cat 1 sleeping eye slit & whiskers -->
          <path d="M -35 -45 Q -28 -40 -20 -45" stroke="#76c893" stroke-width="1.5" fill="none" />
          <!-- Pink Bowtie -->
          <polygon points="15,-40 25,-46 25,-34" fill="#e91e63" />
          <polygon points="15,-40 5,-46 5,-34" fill="#e91e63" />

          <!-- Cat 2 (Bottom / 180-deg Interlocked Counter-Clockwise) -->
          <g transform="rotate(180)">
            <path d="M 0 0 C -40 0 -70 -25 -70 -50 C -70 -72 -42 -75 0 -75 C 40 -75 70 -45 70 -15 C 70 20 40 0 0 0 Z" fill="#1a1a26" stroke="#ffd700" stroke-width="1.2" />
            <polygon points="-50,-68 -44,-82 -36,-70" fill="#1a1a26" stroke="#ffd700" stroke-width="0.8" />
            <polygon points="-30,-72 -24,-84 -18,-72" fill="#1a1a26" stroke="#ffd700" stroke-width="0.8" />
            <path d="M -35 -45 Q -28 -40 -20 -45" stroke="#76c893" stroke-width="1.5" fill="none" />
          </g>

          <!-- Golden Sparkle at Center Nexus -->
          <circle cx="0" cy="0" r="6" fill="#ffd700" />
          <circle cx="0" cy="0" r="2" fill="#fff" />
        </g>
      </g>
    `
  },

  // VII: The Chariot (The Stealth Prowl & Cardboard Carriage)
  maj_07: {
    defs: `
      <linearGradient id="cf_chariotSky" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#0a192f" /><stop offset="60%" stop-color="#172a45" /><stop offset="100%" stop-color="#203a43" />
      </linearGradient>
    `,
    svg: `
      <g transform="translate(150, 230)">
        <rect x="-128" y="-170" width="256" height="340" fill="url(#cf_chariotSky)" />
        <!-- Hardwood Floor Roadway with Golden Perspective Lines -->
        <polygon points="-128,80 128,80 128,170 -128,170" fill="#3d2612" stroke="#ffd700" stroke-width="1" />
        <line x1="0" y1="80" x2="-80" y2="170" stroke="#5c3d1e" stroke-width="2" />
        <line x1="0" y1="80" x2="80" y2="170" stroke="#5c3d1e" stroke-width="2" />

        <!-- Enchanted Cardboard Chariot with Yarn Spoke Wheels -->
        <g transform="translate(0, 50)">
          <!-- Heavy Delivery Box Chariot -->
          ${CAT_EMBLEMS.cardboardBox(0, -10, 110, 50)}
          <!-- Twin Yarn Wheels -->
          <circle cx="-50" cy="20" r="18" fill="#e63946" stroke="#ffd700" stroke-width="1.8" />
          <circle cx="50" cy="20" r="457b9d" stroke="#ffd700" stroke-width="1.8" />

          <!-- Sleek Black Cat (PXL_20260724) Prowling at the Helm -->
          <g transform="translate(0, -45)">
            <!-- Low stealth body -->
            <path d="M -35 25 C -45 5 -20 -15 0 -15 C 20 -15 45 5 35 25 Z" fill="#0f0f18" stroke="#333" stroke-width="1.5" />
            <!-- Head low, predator stare -->
            <circle cx="0" cy="-22" r="20" fill="#141420" stroke="#222" stroke-width="1.2" />
            <polygon points="-15,-30 -20,-48 -6,-38" fill="#0f0f18" />
            <polygon points="15,-30 20,-48 6,-38" fill="#0f0f18" />
            <!-- Piercing yellow-green eyes -->
            <ellipse cx="-8" cy="-22" rx="4.5" ry="6" fill="#76c893" />
            <ellipse cx="-8" cy="-22" rx="1.5" ry="5.5" fill="#000" />
            <ellipse cx="8" cy="-22" rx="4.5" ry="6" fill="#76c893" />
            <ellipse cx="8" cy="-22" rx="1.5" ry="5.5" fill="#000" />
            <!-- White whiskers & red collar -->
            <path d="M -10 -8 Q 0 -5 10 -8" stroke="#e63946" stroke-width="2.5" fill="none" />
            <line x1="-8" y1="-20" x2="-30" y2="-24" stroke="#fff" stroke-width="1.2" />
            <line x1="8" y1="-20" x2="30" y2="-24" stroke="#fff" stroke-width="1.2" />
          </g>
        </g>
      </g>
    `
  },

  // VIII: Strength (THE ICONIC BUFF GINGER TABBY WITH MUSCLE ARMS!)
  maj_08: {
    defs: `
      <linearGradient id="cf_strGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#3d1802" /><stop offset="50%" stop-color="#5c2404" /><stop offset="100%" stop-color="#1a0a01" />
      </linearGradient>
      <radialGradient id="cf_strHalo" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#ffd700" stop-opacity="0.9" />
        <stop offset="50%" stop-color="#ff7b00" stop-opacity="0.4" />
        <stop offset="100%" stop-color="#000000" stop-opacity="0" />
      </radialGradient>
    `,
    svg: `
      <g transform="translate(150, 230)">
        <rect x="-128" y="-170" width="256" height="340" fill="url(#cf_strGrad)" />
        <!-- Radiant Golden Aura of Gentle Power -->
        <circle cx="0" cy="-30" r="85" fill="url(#cf_strHalo)" />

        <!-- Golden Lemniscate of Infinite Strength -->
        <g transform="translate(0, -115)">
          <path d="M 0 0 C -20 -20 -40 0 -20 20 C 0 0 20 20 40 0 C 20 -20 0 0 0 0 Z" fill="none" stroke="#ffd700" stroke-width="3" />
          <circle cx="0" cy="0" r="3" fill="#fff" />
        </g>

        <!-- THE LEGENDARY FLUFFY ORANGE TABBY WITH BUFF ARMS (IMG_3541) -->
        <g transform="translate(0, 15)">
          <!-- Fluffy Ginger Cat Body Seated -->
          <ellipse cx="0" cy="45" rx="42" ry="38" fill="#e67e22" stroke="#ba4a00" stroke-width="2" />
          <!-- Creamy fluffy chest bib -->
          <path d="M -22 15 C -25 45 -10 65 0 65 C 10 65 25 45 22 15 Z" fill="#ffecd2" />
          <!-- Head -->
          <circle cx="0" cy="-20" r="30" fill="#f39c12" stroke="#ba4a00" stroke-width="1.8" />
          <!-- Orange Tabby Forehead M & Stripes -->
          <path d="M -12 -38 L -6 -28 L 0 -36 L 6 -28 L 12 -38" fill="none" stroke="#d35400" stroke-width="2" stroke-linecap="round" />
          <!-- Ears -->
          <polygon points="-24,-38 -30,-62 -10,-48" fill="#e67e22" stroke="#ba4a00" stroke-width="1.2" />
          <polygon points="-22,-40 -26,-56 -12,-48" fill="#ffb4a2" />
          <polygon points="24,-38 30,-62 10,-48" fill="#e67e22" stroke="#ba4a00" stroke-width="1.2" />
          <polygon points="22,-40 26,-56 12,-48" fill="#ffb4a2" />
          <!-- Calm, Confident Amber Eyes -->
          <ellipse cx="-11" cy="-22" rx="5.5" ry="7" fill="#ffd700" stroke="#000" stroke-width="1" />
          <ellipse cx="-11" cy="-22" rx="2" ry="6" fill="#000" />
          <ellipse cx="11" cy="-22" rx="5.5" ry="7" fill="#ffd700" stroke="#000" stroke-width="1" />
          <ellipse cx="11" cy="-22" rx="2" ry="6" fill="#000" />
          <!-- Content pink nose & gentle smile -->
          <polygon points="0,-12 -3,-16 3,-16" fill="#ff758f" />
          <path d="M -4 -8 Q 0 -5 4 -8" stroke="#ba4a00" stroke-width="1.4" fill="none" />
          <!-- Majestic whiskers -->
          <line x1="-8" y1="-12" x2="-42" y2="-16" stroke="#ffffff" stroke-width="1.5" />
          <line x1="-8" y1="-9" x2="-45" y2="-8" stroke="#ffffff" stroke-width="1.5" />
          <line x1="8" y1="-12" x2="42" y2="-16" stroke="#ffffff" stroke-width="1.5" />
          <line x1="8" y1="-9" x2="45" y2="-8" stroke="#ffffff" stroke-width="1.5" />

          <!-- THE ICONIC BUFF MUSCULAR NOVELTY ARMS (FLEXING ON SIDES!) -->
          ${CAT_EMBLEMS.buffArms(0, 0, 1.25)}

          <!-- Gentle Purring Little Mouse sitting peacefully on the right paw -->
          <g transform="translate(48, 65) scale(0.9)">
            <ellipse cx="0" cy="0" rx="10" ry="7" fill="#bdc3c7" stroke="#7f8c8d" stroke-width="1" />
            <circle cx="8" cy="-3" r="3.5" fill="#ffb4a2" />
            <path d="M -10 2 Q -18 8 -22 0" stroke="#bdc3c7" stroke-width="1.5" fill="none" />
            <circle cx="5" cy="-2" r="1" fill="#000" />
          </g>
        </g>
      </g>
    `
  },

  // IX: The Hermit (The Sage in the Cardboard Box)
  maj_09: {
    defs: `
      <radialGradient id="cf_hermitLight" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#ffffff" stop-opacity="1" />
        <stop offset="35%" stop-color="#ffd700" stop-opacity="0.8" />
        <stop offset="70%" stop-color="#ff9f1c" stop-opacity="0.3" />
        <stop offset="100%" stop-color="#000000" stop-opacity="0" />
      </radialGradient>
    `,
    svg: `
      <g transform="translate(150, 230)">
        <!-- Midnight Starfield Sky -->
        <rect x="-128" y="-170" width="256" height="340" fill="#050814" />
        <!-- Distant constellations -->
        <circle cx="-80" cy="-120" r="1.5" fill="#fff" /><circle cx="-50" cy="-140" r="1.2" fill="#fff" /><circle cx="60" cy="-130" r="1.5" fill="#ffd700" />
        <!-- Snowy solitary peak -->
        <polygon points="-128,100 0,60 128,100 128,170 -128,170" fill="#1b263b" stroke="#415a77" stroke-width="1.5" />

        <!-- Smoky Persian Sitting in Cardboard Box (IMG_3119) -->
        <g transform="translate(0, 45)">
          <!-- The Brown Cardboard Amazon Box -->
          ${CAT_EMBLEMS.cardboardBox(0, 20, 115, 65)}

          <!-- Fluffy Smoky Persian Peeking Out -->
          <ellipse cx="0" cy="-5" rx="38" ry="26" fill="#6c757d" stroke="#495057" stroke-width="1.5" />
          <!-- Head: Round Flat Face Looking Upward with Wonder -->
          <circle cx="0" cy="-28" r="28" fill="#adb5bd" stroke="#495057" stroke-width="1.8" />
          <!-- Persian Ears -->
          <polygon points="-20,-45 -25,-62 -8,-52" fill="#6c757d" />
          <polygon points="20,-45 25,-62 8,-52" fill="#6c757d" />
          <!-- Enormous Wide Golden Amber Eyes Gazing Upwards -->
          <circle cx="-11" cy="-30" r="8" fill="#f39c12" stroke="#000" stroke-width="1.2" />
          <circle cx="-11" cy="-33" r="3.5" fill="#000" />
          <circle cx="11" cy="-30" r="8" fill="#f39c12" stroke="#000" stroke-width="1.2" />
          <circle cx="11" cy="-33" r="3.5" fill="#000" />
          <!-- Cute flat button nose -->
          <ellipse cx="0" cy="-24" rx="3.5" ry="2.5" fill="#343a40" />

          <!-- The Hermit's Glowing Lantern Raised High -->
          <g transform="translate(-48, -45)">
            <line x1="20" y1="20" x2="0" y2="-20" stroke="#ffd700" stroke-width="2.5" />
            <!-- Lantern frame -->
            <polygon points="-12,-20 12,-20 8,-5 12,12 -12,12 -8,-5" fill="#14141e" stroke="#ffd700" stroke-width="1.5" />
            <circle cx="0" cy="-4" r="25" fill="url(#cf_hermitLight)" />
            <!-- 6-Point Star of Truth inside -->
            <polygon points="0,-12 3,-4 10,-4 5,2 7,9 0,5 -7,9 -5,2 -10,-4 -3,-4" fill="#ffffff" />
          </g>
        </g>
      </g>
    `
  },

  // X: Wheel of Fortune (The Buddha-Sitting Chonky Bicolor)
  maj_10: {
    defs: `
      <radialGradient id="cf_wheelAura" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#ffd700" stop-opacity="0.8" />
        <stop offset="60%" stop-color="#d4af37" stop-opacity="0.2" />
        <stop offset="100%" stop-color="#000" stop-opacity="0" />
      </radialGradient>
    `,
    svg: `
      <g transform="translate(150, 230)">
        <rect x="-128" y="-170" width="256" height="340" fill="#0a0f1d" />
        <!-- Great Spinning Wheel of Fortune -->
        <g transform="translate(0, 40)">
          <circle cx="0" cy="0" r="85" fill="url(#cf_wheelAura)" opacity="0.3" />
          <circle cx="0" cy="0" r="75" fill="#1b263b" stroke="#ffd700" stroke-width="2" />
          <circle cx="0" cy="0" r="60" fill="none" stroke="#ffd700" stroke-dasharray="4,4" stroke-width="1.2" />
          <!-- 4 Spokes with the 4 Feline Fates: Tuna, Laser, Catnip, Mouse -->
          <line x1="0" y1="-75" x2="0" y2="75" stroke="#ffd700" stroke-width="2" />
          <line x1="-75" y1="0" x2="75" y2="0" stroke="#ffd700" stroke-width="2" />
          <!-- Spoke 1 (Top): Golden Tuna Can -->
          <circle cx="0" cy="-62" r="7" fill="#ffd700" />
          <!-- Spoke 2 (Right): Red Laser Dot -->
          <circle cx="62" cy="0" r="6" fill="#e63946" stroke="#fff" stroke-width="1" />
          <!-- Spoke 3 (Bottom): Catnip Leaf -->
          <circle cx="0" cy="62" r="7" fill="#2a9d8f" />
          <!-- Spoke 4 (Left): Windup Mouse -->
          <circle cx="-62" cy="0" r="7" fill="#f4a261" />
        </g>

        <!-- The Round Bicolor Cat in the Human/Buddha Slump Pose (IMG_4933) -->
        <g transform="translate(0, -25)">
          <!-- Massive Round Chonky White & Grey Belly resting on floor -->
          <ellipse cx="0" cy="25" rx="42" ry="34" fill="#f8f9fa" stroke="#495057" stroke-width="1.8" />
          <path d="M -42 20 C -45 -10 -25 -25 0 -25 C 25 -25 45 -10 42 20 Z" fill="#6c757d" />
          <path d="M -20 -10 C -25 15 -15 35 0 35 C 15 35 25 15 20 -10 Z" fill="#ffffff" />
          <!-- Splayed back legs in the slump -->
          <ellipse cx="-35" cy="42" rx="14" ry="9" fill="#f8f9fa" stroke="#ced4da" stroke-width="1.2" />
          <ellipse cx="35" cy="42" rx="14" ry="9" fill="#f8f9fa" stroke="#ced4da" stroke-width="1.2" />
          <!-- Cute front paws resting on the round belly -->
          <circle cx="-12" cy="24" r="6" fill="#ffffff" stroke="#ced4da" stroke-width="1" />
          <circle cx="12" cy="24" r="6" fill="#ffffff" stroke="#ced4da" stroke-width="1" />
          <!-- Head tilted in deadpan philosophical contemplation -->
          <circle cx="0" cy="-32" r="24" fill="#6c757d" stroke="#495057" stroke-width="1.5" />
          <path d="M -6 -28 L 0 -45 L 6 -28 L 10 -18 L -10 -18 Z" fill="#ffffff" />
          <polygon points="-16,-46 -22,-64 -6,-52" fill="#6c757d" />
          <polygon points="16,-46 22,-64 6,-52" fill="#6c757d" />
          <!-- Calm unbothered eyes -->
          <ellipse cx="-9" cy="-32" rx="5" ry="6" fill="#a7c957" />
          <ellipse cx="-9" cy="-32" rx="1.8" ry="5" fill="#000" />
          <ellipse cx="9" cy="-32" rx="5" ry="6" fill="#a7c957" />
          <ellipse cx="9" cy="-32" rx="1.8" ry="5" fill="#000" />
          <polygon points="0,-22 -3,-25 3,-25" fill="#ff758f" />
        </g>
      </g>
    `
  },

  // XI: Justice (The Smoky Persian Sheriff with Cowboy Hat & Star)
  maj_11: {
    defs: `
      <linearGradient id="cf_justSky" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#1f182e" /><stop offset="60%" stop-color="#2d2244" /><stop offset="100%" stop-color="#0e0a17" />
      </linearGradient>
    `,
    svg: `
      <g transform="translate(150, 230)">
        <rect x="-128" y="-170" width="256" height="340" fill="url(#cf_justSky)" />
        <!-- Courthouse Oak Table (IMG_4988) -->
        <polygon points="-128,75 128,75 115,170 -115,170" fill="#4e342e" stroke="#8d6e63" stroke-width="2" />
        <!-- Table wood grain highlight -->
        <line x1="-120" y1="95" x2="120" y2="95" stroke="#6d4c41" stroke-width="2" />

        <!-- Upright Silver Rapier of Truth -->
        <g transform="translate(65, 0)">
          <line x1="0" y1="80" x2="0" y2="-90" stroke="#e0e1dd" stroke-width="3" />
          <polygon points="0,-105 -5,-90 5,-90" fill="#ffd700" />
          <line x1="-12" y1="50" x2="12" y2="50" stroke="#ffd700" stroke-width="2.5" />
        </g>

        <!-- Balanced Golden Scales (Treat vs Feather) -->
        <g transform="translate(-65, -20)">
          <line x1="0" y1="-30" x2="0" y2="40" stroke="#ffd700" stroke-width="2" />
          <line x1="-35" y1="-25" x2="35" y2="-25" stroke="#ffd700" stroke-width="2" />
          <!-- Left Pan: Crunchy Cat Treat -->
          <path d="M -35 -25 L -45 5 L -25 5 Z" fill="none" stroke="#ffd700" stroke-width="1" />
          <circle cx="-35" cy="5" r="4" fill="#a0522d" />
          <!-- Right Pan: Floating Feather -->
          <path d="M 35 -25 L 25 5 L 45 5 Z" fill="none" stroke="#ffd700" stroke-width="1" />
          <path d="M 35 3 Q 32 6 35 9 Q 38 6 35 3" fill="#ffffff" />
        </g>

        <!-- SHERIFF SMOKEY (IMG_4988): Flat-faced Persian in Cowboy Hat -->
        <g transform="translate(0, 10)">
          <!-- Magnificent Grey Floof Body -->
          <ellipse cx="0" cy="40" rx="44" ry="32" fill="#6c757d" stroke="#343a40" stroke-width="2" />
          <!-- Head: Round Flat Face -->
          <circle cx="0" cy="-15" r="32" fill="#adb5bd" stroke="#495057" stroke-width="2" />
          <!-- Grumpy / Stoic Golden Eyes -->
          <circle cx="-12" cy="-14" r="7.5" fill="#f39c12" stroke="#000" stroke-width="1.2" />
          <circle cx="-12" cy="-14" r="3" fill="#000" />
          <circle cx="12" cy="-14" r="7.5" fill="#f39c12" stroke="#000" stroke-width="1.2" />
          <circle cx="12" cy="-14" r="3" fill="#000" />
          <!-- Flat Persian Nose & Stern Mouth -->
          <ellipse cx="0" cy="-10" rx="3.5" ry="2.5" fill="#343a40" />
          <line x1="-6" y1="-5" x2="6" y2="-5" stroke="#212529" stroke-width="1.5" />
          <!-- Whiskers -->
          <line x1="-15" y1="-8" x2="-45" y2="-12" stroke="#ffffff" stroke-width="1.2" />
          <line x1="-15" y1="-5" x2="-48" y2="-4" stroke="#ffffff" stroke-width="1.2" />
          <line x1="15" y1="-8" x2="45" y2="-12" stroke="#ffffff" stroke-width="1.2" />
          <line x1="15" y1="-5" x2="48" y2="-4" stroke="#ffffff" stroke-width="1.2" />

          <!-- THE BROWN SHERIFF COWBOY HAT WITH STAR BADGE (IMG_4988) -->
          ${CAT_EMBLEMS.sheriffHat(0, -42, 1.15)}
        </g>
      </g>
    `
  },

  // XII: The Hanged Man (The Supreme Belly-Up Enlightenment)
  maj_12: {
    defs: `
      <radialGradient id="cf_bellyAura" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#ffffff" stop-opacity="0.9" />
        <stop offset="50%" stop-color="#ffd700" stop-opacity="0.4" />
        <stop offset="100%" stop-color="#000000" stop-opacity="0" />
      </radialGradient>
    `,
    svg: `
      <g transform="translate(150, 230)">
        <rect x="-128" y="-170" width="256" height="340" fill="#0f1924" />
        <!-- Living Wooden Beam with Green Leaves -->
        <rect x="-90" y="-140" width="180" height="14" rx="4" fill="#603813" stroke="#ffd700" stroke-width="1" />
        <circle cx="-50" cy="-133" r="5" fill="#2d6a4f" /><circle cx="50" cy="-133" r="5" fill="#2d6a4f" />
        <!-- Golden thread suspending cat in midair -->
        <line x1="0" y1="-140" x2="0" y2="-70" stroke="#ffd700" stroke-width="2" />

        <!-- THE UPSIDE-DOWN BELLY SPRAWL (PXL_20260926) -->
        <g transform="translate(0, 20)">
          <!-- Inverted Cat Body (Belly Exposed to Heaven) -->
          <ellipse cx="0" cy="-10" rx="38" ry="46" fill="#f8f9fa" stroke="#ced4da" stroke-width="2" />
          <!-- Grey Back & Hip Markings framing white tummy -->
          <path d="M -38 -20 C -45 10 -35 30 -20 35 L -35 -20 Z" fill="#6c757d" />
          <path d="M 38 -20 C 45 10 35 30 20 35 L 35 -20 Z" fill="#6c757d" />
          <!-- 4 Curled Ecstatic Paws in Mid-Air -->
          <ellipse cx="-28" cy="-55" rx="10" ry="7" fill="#ffffff" stroke="#ced4da" stroke-width="1.2" />
          <ellipse cx="28" cy="-55" rx="10" ry="7" fill="#ffffff" stroke="#ced4da" stroke-width="1.2" />
          <ellipse cx="-24" cy="35" rx="10" ry="7" fill="#ffffff" stroke="#ced4da" stroke-width="1.2" />
          <ellipse cx="24" cy="35" rx="10" ry="7" fill="#ffffff" stroke="#ced4da" stroke-width="1.2" />

          <!-- Head (Inverted at bottom of card) -->
          <g transform="translate(0, 60)">
            <!-- Golden Halo of Blissful Enlightenment around head -->
            <circle cx="0" cy="0" r="32" fill="url(#cf_bellyAura)" />
            <circle cx="0" cy="0" r="22" fill="#6c757d" stroke="#495057" stroke-width="1.5" />
            <path d="M -6 -10 L 0 10 L 6 -10 Z" fill="#ffffff" />
            <!-- Blissfully closed squinting eyes -->
            <path d="M -12 2 Q -8 -2 -4 2" stroke="#212529" stroke-width="1.5" fill="none" />
            <path d="M 4 2 Q 8 -2 12 2" stroke="#212529" stroke-width="1.5" fill="none" />
            <!-- Pink Nose upside down -->
            <polygon points="0,8 -3,5 3,5" fill="#ff758f" />
          </g>
        </g>
      </g>
    `
  },

  // XIII: Death / Rebirth (The Mighty Yawn & Shedding of Old Fur)
  maj_13: {
    defs: `
      <linearGradient id="cf_deathDawn" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#05010a" /><stop offset="60%" stop-color="#2c0c30" /><stop offset="100%" stop-color="#f77f00" />
      </linearGradient>
    `,
    svg: `
      <g transform="translate(150, 230)">
        <rect x="-128" y="-170" width="256" height="340" fill="url(#cf_deathDawn)" />
        <!-- Rising Golden Dawn between the two boundary towers -->
        <circle cx="0" cy="80" r="45" fill="#ffd700" opacity="0.85" />
        <rect x="-120" y="20" width="24" height="150" fill="#1b1226" />
        <rect x="96" y="20" width="24" height="150" fill="#1b1226" />

        <!-- Mystical White Rose of Life Standard -->
        <g transform="translate(-75, -80)">
          <line x1="0" y1="0" x2="0" y2="140" stroke="#ffd700" stroke-width="2" />
          <circle cx="0" cy="0" r="14" fill="#ffffff" stroke="#ffd700" stroke-width="1.5" />
          <polygon points="0,-10 3,-3 10,-3 4,2 7,9 0,5 -7,9 -4,2 -10,-3 -3,-3" fill="#ffd700" />
        </g>

        <!-- THE MIGHTY FANGED YAWN / ROAR (IMG_20260405 & PXL_20260923) -->
        <g transform="translate(15, 20)">
          <!-- Sleek Black Cat Body -->
          <path d="M -40 70 C -45 20 -20 -10 5 -10 C 30 -10 50 20 45 70 Z" fill="#111119" stroke="#333" stroke-width="1.8" />
          <!-- Head tilted back in dramatic wide yawn -->
          <circle cx="0" cy="-35" r="28" fill="#141420" stroke="#222" stroke-width="1.5" />
          <polygon points="-20,-50 -26,-74 -6,-60" fill="#111119" />
          <polygon points="20,-50 26,-74 6,-60" fill="#111119" />
          <!-- WIDE OPEN MOUTH (The Feline Lion Roar!) -->
          <ellipse cx="0" cy="-30" rx="14" ry="18" fill="#b71c1c" stroke="#ff5252" stroke-width="1" />
          <!-- Curved Pink Tongue -->
          <path d="M -6 -24 Q 0 -16 6 -24 Q 0 -28 -6 -24" fill="#ff758f" />
          <!-- Sharp White Fangs (Top & Bottom Canines) -->
          <polygon points="-9,-44 -6,-32 -4,-44" fill="#ffffff" />
          <polygon points="9,-44 6,-32 4,-44" fill="#ffffff" />
          <polygon points="-7,-16 -5,-24 -3,-16" fill="#ffffff" />
          <polygon points="7,-16 5,-24 3,-16" fill="#ffffff" />
          <!-- Squinted Fierce Eyes -->
          <path d="M -16 -46 L -6 -42" stroke="#76c893" stroke-width="2.5" />
          <path d="M 16 -46 L 6 -42" stroke="#76c893" stroke-width="2.5" />
          <!-- Dapper Pink Bowtie -->
          ${CAT_EMBLEMS.bowTieWithTag(0, 0, 1)}
        </g>
      </g>
    `
  },

  // XIV: Temperance (The Harmony of Milk and Water)
  maj_14: {
    defs: `
      <linearGradient id="cf_tempSky" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#192a56" /><stop offset="60%" stop-color="#273c75" /><stop offset="100%" stop-color="#40739e" />
      </linearGradient>
    `,
    svg: `
      <g transform="translate(150, 230)">
        <rect x="-128" y="-170" width="256" height="340" fill="url(#cf_tempSky)" />
        <!-- Iris Rainbow Arching Across Heaven -->
        <path d="M -100 -50 A 100 80 0 0 1 100 -50" fill="none" stroke="#fbc531" stroke-width="3" opacity="0.6" />
        <path d="M -96 -46 A 96 76 0 0 1 96 -46" fill="none" stroke="#4cd137" stroke-width="3" opacity="0.6" />

        <!-- Stream of Warm Milk Flowing Between Two Golden Chalices -->
        <g transform="translate(0, -10)">
          <!-- Top Chalice -->
          <g transform="translate(-40, -40)">
            <ellipse cx="0" cy="0" rx="16" ry="8" fill="#ffd700" stroke="#b8860b" stroke-width="1.5" />
            <path d="M -14 0 C -14 20 14 20 14 0 Z" fill="#ffd700" />
          </g>
          <!-- Bottom Chalice -->
          <g transform="translate(40, 50)">
            <ellipse cx="0" cy="0" rx="16" ry="8" fill="#ffd700" stroke="#b8860b" stroke-width="1.5" />
            <path d="M -14 0 C -14 20 14 20 14 0 Z" fill="#ffd700" />
          </g>
          <!-- Continuous Arc of Radiant White Milk -->
          <path d="M -30 -35 Q 0 0 35 48" fill="none" stroke="#ffffff" stroke-width="4.5" stroke-linecap="round" />
          <path d="M -30 -35 Q 0 0 35 48" fill="none" stroke="#f5f6fa" stroke-width="2" />
        </g>

        <!-- Two Companions Guiding the Flow (Ginger Tabby & Bicolor Cat) -->
        <g transform="translate(-55, 30) scale(0.85)">
          <circle cx="0" cy="0" r="22" fill="#f39c12" stroke="#ba4a00" stroke-width="1.5" />
          <polygon points="-12,-16 -16,-32 -4,-24" fill="#e67e22" />
          <polygon points="12,-16 16,-32 4,-24" fill="#e67e22" />
          <circle cx="-6" cy="-2" r="3" fill="#ffd700" /><circle cx="6" cy="-2" r="3" fill="#ffd700" />
        </g>
        <g transform="translate(55, -20) scale(0.85)">
          <circle cx="0" cy="0" r="22" fill="#6c757d" stroke="#495057" stroke-width="1.5" />
          <polygon points="-12,-16 -16,-32 -4,-24" fill="#6c757d" />
          <polygon points="12,-16 16,-32 4,-24" fill="#6c757d" />
          <circle cx="-6" cy="-2" r="3" fill="#a7c957" /><circle cx="6" cy="-2" r="3" fill="#a7c957" />
        </g>
      </g>
    `
  },

  // XV: The Devil (The Tangled Yarn & The Sunbeam Trap)
  maj_15: {
    defs: `
      <radialGradient id="cf_devGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#ff0055" stop-opacity="0.8" />
        <stop offset="60%" stop-color="#6a040f" stop-opacity="0.3" />
        <stop offset="100%" stop-color="#000000" stop-opacity="0" />
      </radialGradient>
    `,
    svg: `
      <g transform="translate(150, 230)">
        <rect x="-128" y="-170" width="256" height="340" fill="#0d0208" />
        <!-- Glowing Red Altar Block -->
        <rect x="-60" y="60" width="120" height="90" fill="#1b000b" stroke="#ff0055" stroke-width="1.5" />

        <!-- Giant Tangled Yarn Ball Demon with Glowing Cat Ears -->
        <g transform="translate(0, -30)">
          <circle cx="0" cy="0" r="60" fill="url(#cf_devGlow)" />
          <circle cx="0" cy="0" r="45" fill="#370617" stroke="#e63946" stroke-width="2" />
          <!-- Tangled Yarn Loops (The Material Trap!) -->
          <path d="M -30 -20 Q 20 40 40 -10 Q -10 -40 -30 20 Q 30 10 0 -35" fill="none" stroke="#ff758f" stroke-width="2.5" />
          <!-- Piercing Yellow Glowing Cat Eyes in the Shadows -->
          <circle cx="-16" cy="-5" r="7" fill="#ffd700" stroke="#000" stroke-width="1" />
          <circle cx="16" cy="-5" r="7" fill="#ffd700" stroke="#000" stroke-width="1" />
          <!-- Horn-like Cat Ears -->
          <polygon points="-25,-35 -38,-70 -12,-50" fill="#6a040f" stroke="#ff0055" stroke-width="1.5" />
          <polygon points="25,-35 38,-70 12,-50" fill="#6a040f" stroke="#ff0055" stroke-width="1.5" />
        </g>

        <!-- Two Captive Cats held by loose ribbons they could easily slip out of -->
        <g transform="translate(-40, 85) scale(0.7)">
          <ellipse cx="0" cy="0" rx="18" ry="12" fill="#14141e" />
          <circle cx="-10" cy="-6" r="3" fill="#76c893" />
          <!-- Loose red ribbon -->
          <path d="M 0 -12 Q 25 -20 40 -60" fill="none" stroke="#e63946" stroke-width="1.5" stroke-dasharray="3,2" />
        </g>
        <g transform="translate(40, 85) scale(0.7)">
          <ellipse cx="0" cy="0" rx="18" ry="12" fill="#f8f9fa" />
          <circle cx="10" cy="-6" r="3" fill="#a7c957" />
          <path d="M 0 -12 Q -25 -20 -40 -60" fill="none" stroke="#e63946" stroke-width="1.5" stroke-dasharray="3,2" />
        </g>
      </g>
    `
  },

  // XVI: The Tower (The Toppling Cat Tree & Tumbling Glass)
  maj_16: {
    defs: `
      <linearGradient id="cf_towStorm" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#03071e" /><stop offset="60%" stop-color="#370617" /><stop offset="100%" stop-color="#6a040f" />
      </linearGradient>
    `,
    svg: `
      <g transform="translate(150, 230)">
        <rect x="-128" y="-170" width="256" height="340" fill="url(#cf_towStorm)" />
        <!-- Jagged Golden Lightning Strike -->
        <polygon points="20,-170 30,-100 10,-95 35,-30 15,-25 45,50 30,55 55,120 35,50 50,45 25,-25 40,-30 15,-95 35,-100" fill="#ffd700" stroke="#fff" stroke-width="1" />

        <!-- The Towering 3-Tier Cat Condo Leaning & Toppling -->
        <g transform="translate(-15, 20) rotate(-12)">
          <!-- Base pole -->
          <rect x="-15" y="30" width="30" height="90" fill="#c68a4c" stroke="#8d5b28" stroke-width="2" />
          <!-- Middle Platform -->
          <rect x="-45" y="15" width="90" height="15" rx="3" fill="#e9ecef" stroke="#8d5b28" stroke-width="1.5" />
          <!-- Top Condo House knocked off -->
          <g transform="translate(0, -40) rotate(15)">
            <rect x="-35" y="-25" width="70" height="50" rx="6" fill="#6c757d" stroke="#ffd700" stroke-width="2" />
            <circle cx="0" cy="0" r="14" fill="#212529" />
          </g>
          <!-- A Water Glass Tumbling off the edge (Water splashing!) -->
          <g transform="translate(50, 10) rotate(45)">
            <rect x="-6" y="-12" width="12" height="24" rx="2" fill="none" stroke="#48cae4" stroke-width="1.5" />
            <circle cx="15" cy="-5" r="3" fill="#48cae4" /><circle cx="20" cy="10" r="2.5" fill="#48cae4" />
          </g>
        </g>

        <!-- Sleek Black Cat Vaulting Clear into Mid-Air (Graceful Landing!) -->
        <g transform="translate(45, -50) rotate(-20)">
          <!-- Aerodynamic leap silhouette -->
          <path d="M -30 10 Q 0 -15 30 -5 Q 10 15 -30 10 Z" fill="#141420" stroke="#333" stroke-width="1.5" />
          <!-- Extended paws -->
          <line x1="25" y1="-5" x2="42" y2="-12" stroke="#141420" stroke-width="3" stroke-linecap="round" />
          <line x1="-25" y1="10" x2="-45" y2="18" stroke="#141420" stroke-width="3" stroke-linecap="round" />
          <!-- Tail streaming -->
          <path d="M -25 8 Q -45 0 -50 -15" fill="none" stroke="#141420" stroke-width="3" />
        </g>
      </g>
    `
  },

  // XVII: The Star (The Persian Gazing at Constellations)
  maj_17: {
    defs: `
      <radialGradient id="cf_starLight" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#ffffff" stop-opacity="1" />
        <stop offset="30%" stop-color="#ffd700" stop-opacity="0.8" />
        <stop offset="70%" stop-color="#00b4d8" stop-opacity="0.3" />
        <stop offset="100%" stop-color="#000000" stop-opacity="0" />
      </radialGradient>
    `,
    svg: `
      <g transform="translate(150, 230)">
        <rect x="-128" y="-170" width="256" height="340" fill="#03045e" />
        <!-- The Great 8-Pointed Golden Star -->
        <g transform="translate(0, -95)">
          <circle cx="0" cy="0" r="35" fill="url(#cf_starLight)" />
          <polygon points="0,-35 6,-10 35,0 6,10 0,35 -6,10 -35,0 -6,-10" fill="#ffd700" stroke="#fff" stroke-width="1" />
          <circle cx="0" cy="0" r="5" fill="#fff" />
        </g>
        <!-- Seven Surrounding Companion Stars -->
        <circle cx="-80" cy="-120" r="4" fill="#ffd700" /><circle cx="-50" cy="-70" r="3.5" fill="#ffd700" /><circle cx="-90" cy="-40" r="3.5" fill="#ffd700" />
        <circle cx="80" cy="-120" r="4" fill="#ffd700" /><circle cx="50" cy="-70" r="3.5" fill="#ffd700" /><circle cx="90" cy="-40" r="3.5" fill="#ffd700" />
        <circle cx="0" cy="-35" r="4" fill="#ffd700" />

        <!-- Crystalline Pool of Water with Starlight Ripples -->
        <ellipse cx="0" cy="110" rx="100" ry="25" fill="#0077b6" stroke="#90e0ef" stroke-width="1.5" />

        <!-- Smoky Persian Dipping Paw into Water (IMG_3119 / IMG_0990) -->
        <g transform="translate(0, 35)">
          <!-- Majestic Grey Cloud of Fur -->
          <ellipse cx="0" cy="15" rx="46" ry="32" fill="#6c757d" stroke="#495057" stroke-width="1.8" />
          <!-- Head tilted upwards with glowing amber eyes -->
          <circle cx="0" cy="-18" r="28" fill="#adb5bd" stroke="#495057" stroke-width="1.5" />
          <!-- Wide Golden Eyes filled with Starlight -->
          <circle cx="-11" cy="-20" r="7.5" fill="#ffd700" stroke="#000" stroke-width="1.2" />
          <circle cx="-11" cy="-22" r="3" fill="#000" />
          <circle cx="-9" cy="-23" r="1.5" fill="#fff" />
          <circle cx="11" cy="-20" r="7.5" fill="#ffd700" stroke="#000" stroke-width="1.2" />
          <circle cx="11" cy="-22" r="3" fill="#000" />
          <circle cx="13" cy="-23" r="1.5" fill="#fff" />
          <!-- Front paw gracefully dipping into the starlit pool -->
          <path d="M 22 25 Q 35 45 35 65" stroke="#adb5bd" stroke-width="6" stroke-linecap="round" fill="none" />
          <!-- Water ripple from paw touch -->
          <ellipse cx="35" cy="65" rx="14" ry="5" fill="none" stroke="#caf0f8" stroke-width="1.5" />
        </g>
      </g>
    `
  },

  // XVIII: The Moon (The Two Black Cats at the Screen Door)
  maj_18: {
    defs: `
      <radialGradient id="cf_moonGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#ffffff" stop-opacity="1" />
        <stop offset="40%" stop-color="#e0e1dd" stop-opacity="0.9" />
        <stop offset="70%" stop-color="#778da9" stop-opacity="0.4" />
        <stop offset="100%" stop-color="#000000" stop-opacity="0" />
      </radialGradient>
    `,
    svg: `
      <g transform="translate(150, 230)">
        <rect x="-128" y="-170" width="256" height="340" fill="#0b091a" />
        <!-- Giant Luminous Moon in Heaven -->
        <g transform="translate(0, -90)">
          <circle cx="0" cy="0" r="50" fill="url(#cf_moonGlow)" />
          <!-- Crescent Face within Moon -->
          <path d="M -20 -35 A 40 40 0 0 0 25 35 A 42 42 0 0 1 -20 -35 Z" fill="#ffd700" opacity="0.6" />
        </g>

        <!-- Screen Door Frame & Wire Grid Texture (IMG_5988) -->
        <rect x="-115" y="-150" width="230" height="300" fill="none" stroke="#2b2d42" stroke-width="6" />
        <g stroke="#ffffff" stroke-width="0.3" opacity="0.15">
          <line x1="-115" y1="-100" x2="115" y2="-100" /><line x1="-115" y1="-50" x2="115" y2="-50" /><line x1="-115" y1="0" x2="115" y2="0" /><line x1="-115" y1="50" x2="115" y2="50" /><line x1="-115" y1="100" x2="115" y2="100" />
          <line x1="-80" y1="-150" x2="-80" y2="150" /><line x1="-40" y1="-150" x2="-40" y2="150" /><line x1="0" y1="-150" x2="0" y2="150" /><line x1="40" y1="-150" x2="40" y2="150" /><line x1="80" y1="-150" x2="80" y2="150" />
        </g>

        <!-- THE TWO BLACK CATS SITTING SIDE-BY-SIDE (IMG_5988) -->
        <!-- Left Black Cat Silhouette -->
        <g transform="translate(-35, 60)">
          <path d="M -22 60 C -26 15 -14 -15 0 -15 C 14 -15 26 15 22 60 Z" fill="#080811" stroke="#2b2d42" stroke-width="1.2" />
          <circle cx="0" cy="-28" r="18" fill="#080811" />
          <polygon points="-12,-38 -16,-54 -4,-44" fill="#080811" />
          <polygon points="12,-38 16,-54 4,-44" fill="#080811" />
          <!-- Tail wrapped around right cat -->
          <path d="M 15 50 Q 35 60 45 50" fill="none" stroke="#080811" stroke-width="4.5" stroke-linecap="round" />
        </g>
        <!-- Right Black Cat Silhouette -->
        <g transform="translate(35, 60)">
          <path d="M -22 60 C -26 15 -14 -15 0 -15 C 14 -15 26 15 22 60 Z" fill="#0c0c17" stroke="#2b2d42" stroke-width="1.2" />
          <circle cx="0" cy="-28" r="18" fill="#0c0c17" />
          <polygon points="-12,-38 -16,-54 -4,-44" fill="#0c0c17" />
          <polygon points="12,-38 16,-54 4,-44" fill="#0c0c17" />
          <!-- Pink collar -->
          <path d="M -8 -15 Q 0 -12 8 -15" stroke="#e91e63" stroke-width="2" fill="none" />
        </g>
      </g>
    `
  },

  // XIX: The Sun (The Radiant Ginger Lion in the Sunbeam)
  maj_19: {
    defs: `
      <radialGradient id="cf_sunRays" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#fffb00" stop-opacity="1" />
        <stop offset="35%" stop-color="#ff9900" stop-opacity="0.8" />
        <stop offset="70%" stop-color="#ff5500" stop-opacity="0.3" />
        <stop offset="100%" stop-color="#000000" stop-opacity="0" />
      </radialGradient>
    `,
    svg: `
      <g transform="translate(150, 230)">
        <rect x="-128" y="-170" width="256" height="340" fill="#2d0b00" />
        <!-- Radiant Golden Smiling Sun with Solar Flares -->
        <g transform="translate(0, -90)">
          <circle cx="0" cy="0" r="55" fill="url(#cf_sunRays)" />
          <circle cx="0" cy="0" r="32" fill="#ffd700" stroke="#ff9900" stroke-width="2" />
          <!-- Solar Rays -->
          <g stroke="#ffd700" stroke-width="2">
            <line x1="0" y1="-42" x2="0" y2="-55" /><line x1="0" y1="42" x2="0" y2="55" />
            <line x1="-42" y1="0" x2="-55" y2="0" /><line x1="42" y1="0" x2="55" y2="0" />
            <line x1="-30" y1="-30" x2="-40" y2="-40" /><line x1="30" y1="30" x2="40" y2="40" />
            <line x1="30" y1="-30" x2="40" y2="-40" /><line x1="-30" y1="30" x2="-40" y2="40" />
          </g>
        </g>

        <!-- Square Patch of Sunlight on Wooden Floor (The Ultimate Cat Spot!) -->
        <polygon points="-80,40 80,40 110,150 -110,150" fill="#fff3b0" opacity="0.6" stroke="#ffd700" stroke-width="1.5" />

        <!-- Fluffy Ginger Cat (PXL_20260706) Basking in Splendor -->
        <g transform="translate(0, 65)">
          <!-- Fluffy Marmalade Body Lounging -->
          <ellipse cx="0" cy="0" rx="48" ry="28" fill="#e67e22" stroke="#ba4a00" stroke-width="2" />
          <path d="M -30 -15 C -40 10 -20 20 0 20 C 20 20 40 10 30 -15 Z" fill="#f39c12" />
          <!-- Head tilted in warm sun ecstasy -->
          <circle cx="0" cy="-22" r="24" fill="#f39c12" stroke="#ba4a00" stroke-width="1.5" />
          <polygon points="-16,-34 -20,-50 -6,-40" fill="#e67e22" />
          <polygon points="16,-34 20,-50 6,-40" fill="#e67e22" />
          <!-- Blissfully closed sunbeam eyes -->
          <path d="M -12 -22 Q -8 -26 -4 -22" stroke="#ba4a00" stroke-width="2" fill="none" />
          <path d="M 4 -22 Q 8 -26 12 -22" stroke="#ba4a00" stroke-width="2" fill="none" />
          <!-- Golden Sunflowers in Foreground -->
          <g transform="translate(-75, 40) scale(0.65)">
            <circle cx="0" cy="0" r="10" fill="#78350f" />
            <circle cx="0" cy="-14" r="5" fill="#f59e0b" /><circle cx="14" cy="0" r="5" fill="#f59e0b" /><circle cx="0" cy="14" r="5" fill="#f59e0b" /><circle cx="-14" cy="0" r="5" fill="#f59e0b" />
          </g>
          <g transform="translate(75, 40) scale(0.65)">
            <circle cx="0" cy="0" r="10" fill="#78350f" />
            <circle cx="0" cy="-14" r="5" fill="#f59e0b" /><circle cx="14" cy="0" r="5" fill="#f59e0b" /><circle cx="0" cy="14" r="5" fill="#f59e0b" /><circle cx="-14" cy="0" r="5" fill="#f59e0b" />
          </g>
        </g>
      </g>
    `
  },

  // XX: Judgement (The 3 AM Call of the Wild Meow)
  maj_20: {
    defs: `
      <radialGradient id="cf_judgeAura" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#ffffff" stop-opacity="1" />
        <stop offset="40%" stop-color="#e2e8f0" stop-opacity="0.8" />
        <stop offset="70%" stop-color="#64748b" stop-opacity="0.3" />
        <stop offset="100%" stop-color="#000" stop-opacity="0" />
      </radialGradient>
    `,
    svg: `
      <g transform="translate(150, 230)">
        <rect x="-128" y="-170" width="256" height="340" fill="#0f172a" />
        <!-- Cosmic Trumpet Meow Waves of Awakening -->
        <g transform="translate(0, -95)">
          <circle cx="0" cy="0" r="40" fill="url(#cf_judgeAura)" opacity="0.6" />
          <path d="M -80 0 Q 0 -30 80 0" stroke="#ffd700" stroke-width="1.8" fill="none" />
          <path d="M -60 15 Q 0 -15 60 15" stroke="#ffd700" stroke-width="1.4" fill="none" />
          <path d="M -40 30 Q 0 0 40 30" stroke="#ffd700" stroke-width="1.2" fill="none" />
        </g>

        <!-- THE SLEEK BLACK CAT VOCALIZING WITH FANGS (PXL_20260923) -->
        <g transform="translate(0, 15)">
          <!-- Black Cat Body standing resolute -->
          <path d="M -30 65 C -35 15 -15 -20 0 -20 C 15 -20 35 15 30 65 Z" fill="#090910" stroke="#334155" stroke-width="1.5" />
          <!-- Head thrown back in sacred vocalization -->
          <circle cx="0" cy="-35" r="26" fill="#0f172a" stroke="#1e293b" stroke-width="1.2" />
          <!-- Ears pinned back slightly in the meow -->
          <polygon points="-16,-46 -26,-66 -8,-54" fill="#090910" />
          <polygon points="16,-46 26,-66 8,-54" fill="#090910" />
          <!-- Open Mouth with Fangs -->
          <ellipse cx="0" cy="-30" rx="10" ry="14" fill="#991b1b" />
          <polygon points="-6,-38 -4,-28 -2,-38" fill="#fff" />
          <polygon points="6,-38 4,-28 2,-38" fill="#fff" />
          <!-- Vibrating Whiskers -->
          <line x1="-8" y1="-32" x2="-35" y2="-36" stroke="#fff" stroke-width="1.2" />
          <line x1="8" y1="-32" x2="35" y2="-36" stroke="#fff" stroke-width="1.2" />
        </g>

        <!-- Joyful Cats Popping Heads Out of Delivery Boxes in Rebirth -->
        <g transform="translate(-65, 110) scale(0.65)">
          ${CAT_EMBLEMS.cardboardBox(0, 0, 75, 45)}
          <circle cx="0" cy="-22" r="14" fill="#f39c12" />
          <circle cx="-5" cy="-24" r="2" fill="#000" /><circle cx="5" cy="-24" r="2" fill="#000" />
        </g>
        <g transform="translate(65, 110) scale(0.65)">
          ${CAT_EMBLEMS.cardboardBox(0, 0, 75, 45)}
          <circle cx="0" cy="-22" r="14" fill="#6c757d" />
          <circle cx="-5" cy="-24" r="2" fill="#000" /><circle cx="5" cy="-24" r="2" fill="#000" />
        </g>
      </g>
    `
  },

  // XXI: The World (The Cosmic Persian Cloud & The Four Feline Guardians)
  maj_21: {
    defs: `
      <radialGradient id="cf_worldAura" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#ffd700" stop-opacity="0.9" />
        <stop offset="50%" stop-color="#a855f7" stop-opacity="0.4" />
        <stop offset="100%" stop-color="#000000" stop-opacity="0" />
      </radialGradient>
    `,
    svg: `
      <g transform="translate(150, 230)">
        <rect x="-128" y="-170" width="256" height="340" fill="#0b0819" />
        <!-- Golden Celestial Laurel Wreath (Ouroboros) -->
        <circle cx="0" cy="0" r="76" fill="url(#cf_worldAura)" opacity="0.3" />
        <circle cx="0" cy="0" r="72" fill="none" stroke="#ffd700" stroke-width="2.5" />
        <circle cx="0" cy="0" r="66" fill="none" stroke="#ffd700" stroke-dasharray="3,3" stroke-width="1" />

        <!-- THE GREAT SMOKY PERSIAN CLOUD FLOATING IN THE CENTER (IMG_0990) -->
        <g transform="translate(0, 5)">
          <!-- Enormous Round Mountain of Grey Fur -->
          <circle cx="0" cy="0" r="42" fill="#6c757d" stroke="#adb5bd" stroke-width="1.8" />
          <ellipse cx="0" cy="15" rx="36" ry="22" fill="#adb5bd" opacity="0.5" />
          <!-- Head: Serene Persian Face -->
          <circle cx="0" cy="-15" r="26" fill="#adb5bd" stroke="#495057" stroke-width="1.5" />
          <polygon points="-16,-32 -20,-48 -6,-38" fill="#6c757d" />
          <polygon points="16,-32 20,-48 6,-38" fill="#6c757d" />
          <!-- Majestic Glowing Amber Eyes of Completion -->
          <circle cx="-10" cy="-16" r="6.5" fill="#f39c12" stroke="#000" stroke-width="1" />
          <circle cx="-10" cy="-16" r="2.5" fill="#000" />
          <circle cx="10" cy="-16" r="6.5" fill="#f39c12" stroke="#000" stroke-width="1" />
          <circle cx="10" cy="-16" r="2.5" fill="#000" />
          <ellipse cx="0" cy="-11" rx="3" ry="2" fill="#343a40" />
        </g>

        <!-- THE FOUR FELINE GUARDIANS IN THE FOUR CORNERS -->
        <!-- Top-Left: The Buff Ginger Tabby (Fire / Wands) -->
        <g transform="translate(-105, -145) scale(0.6)">
          <circle cx="0" cy="0" r="22" fill="#e67e22" stroke="#ffd700" stroke-width="1.5" />
          <polygon points="-10,-15 -14,-28 -4,-22" fill="#e67e22" />
          <polygon points="10,-15 14,-28 4,-22" fill="#e67e22" />
          <circle cx="-6" cy="-2" r="3" fill="#ffd700" /><circle cx="6" cy="-2" r="3" fill="#ffd700" />
        </g>
        <!-- Top-Right: Sheriff Smokey Persian (Air / Swords) -->
        <g transform="translate(105, -145) scale(0.6)">
          <circle cx="0" cy="0" r="22" fill="#6c757d" stroke="#ffd700" stroke-width="1.5" />
          ${CAT_EMBLEMS.sheriffHat(0, -18, 0.7)}
          <circle cx="-6" cy="-2" r="3" fill="#ffd700" /><circle cx="6" cy="-2" r="3" fill="#ffd700" />
        </g>
        <!-- Bottom-Left: The Sleek Void Cat (Water / Cups) -->
        <g transform="translate(-105, 145) scale(0.6)">
          <circle cx="0" cy="0" r="22" fill="#111119" stroke="#ffd700" stroke-width="1.5" />
          <polygon points="-10,-15 -14,-28 -4,-22" fill="#111119" />
          <polygon points="10,-15 14,-28 4,-22" fill="#111119" />
          <circle cx="-6" cy="-2" r="3" fill="#76c893" /><circle cx="6" cy="-2" r="3" fill="#76c893" />
        </g>
        <!-- Bottom-Right: The Mardi Gras Bicolor Chonk (Earth / Pentacles) -->
        <g transform="translate(105, 145) scale(0.6)">
          <circle cx="0" cy="0" r="22" fill="#f8f9fa" stroke="#ffd700" stroke-width="1.5" />
          <path d="M -8 -8 L 0 -18 L 8 -8 Z" fill="#6c757d" />
          <circle cx="-6" cy="-2" r="3" fill="#a7c957" /><circle cx="6" cy="-2" r="3" fill="#a7c957" />
          <circle cx="0" cy="12" r="2" fill="#9c27b0" /><circle cx="6" cy="12" r="2" fill="#ffd700" />
        </g>
      </g>
    `
  }
};


// --- FELINE MINOR ARCANA ENGINE ---
/**
 * Feline Familiars Tarot: Minor Arcana Vector Art Engine
 * Comprehensive artwork for all 56 Minor Arcana cards:
 * - 4 Monumental Feline Aces
 * - 16 Bespoke Feline Court Cards (Pages, Knights, Queens, Kings)
 * - 36 Expressive Feline Pip Cards (Twos through Tens)
 */



/**
 * 4 Monumental Feline Aces
 */
function renderCatAceCardArt(card) {
  const suit = card.suit;

  if (suit === 'wands') {
    // Ace of Wands: Ginger Tabby Paw Batting a Flaming Comet Yarn Wand
    return {
      defs: `
        <radialGradient id="cf_aceWandsGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#fffb00" stop-opacity="0.9" />
          <stop offset="40%" stop-color="#ff6600" stop-opacity="0.6" />
          <stop offset="100%" stop-color="#000000" stop-opacity="0" />
        </radialGradient>
      `,
      svg: `
        <g transform="translate(150, 230)">
          <!-- Fiery Background Burst -->
          <circle cx="0" cy="-20" r="85" fill="url(#cf_aceWandsGlow)" />
          <!-- Flaming Wand / Feather Teaser -->
          <line x1="0" y1="80" x2="0" y2="-60" stroke="#ffd700" stroke-width="4" stroke-linecap="round" />
          <circle cx="0" cy="-70" r="18" fill="#e65100" stroke="#ffd700" stroke-width="2" />
          <!-- Blazing Flame Plumes -->
          <path d="M 0 -88 C -18 -110 0 -130 0 -140 C 0 -130 18 -110 0 -88 Z" fill="#ffeb3b" />
          <path d="M -8 -80 C -25 -95 -12 -115 -10 -120 C -5 -110 -2 -95 -8 -80 Z" fill="#ff9800" />
          <path d="M 8 -80 C 25 -95 12 -115 10 -120 C 5 -110 2 -95 8 -80 Z" fill="#ff9800" />
          <!-- Fluffy Ginger Paw Batting the Wand -->
          <g transform="translate(45, -30) rotate(-40)">
            <ellipse cx="0" cy="0" rx="20" ry="14" fill="#e67e22" stroke="#ba4a00" stroke-width="1.5" />
            <circle cx="-10" cy="-10" r="4" fill="#f39c12" /><circle cx="0" cy="-12" r="4" fill="#f39c12" /><circle cx="10" cy="-10" r="4" fill="#f39c12" />
          </g>
        </g>
      `
    };
  }

  if (suit === 'cups') {
    // Ace of Cups: Sleek Black Paw Dipping into Goblet of Moonlit Milk with Goldfish
    return {
      defs: `
        <radialGradient id="cf_aceCupsGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#48cae4" stop-opacity="0.8" />
          <stop offset="60%" stop-color="#0077b6" stop-opacity="0.3" />
          <stop offset="100%" stop-color="#000" stop-opacity="0" />
        </radialGradient>
      `,
      svg: `
        <g transform="translate(150, 230)">
          <circle cx="0" cy="0" r="85" fill="url(#cf_aceCupsGlow)" />
          <!-- Ornate Golden Chalice -->
          <g transform="translate(0, 30)">
            <ellipse cx="0" cy="70" rx="35" ry="12" fill="#ffd700" stroke="#b8860b" stroke-width="2" />
            <line x1="0" y1="20" x2="0" y2="70" stroke="#ffd700" stroke-width="6" />
            <path d="M -45 0 C -45 50 45 50 45 0 Z" fill="#ffd700" stroke="#b8860b" stroke-width="2" />
            <!-- Milk / Water surface with ripples -->
            <ellipse cx="0" cy="0" rx="45" ry="16" fill="#e0f7fa" stroke="#b8860b" stroke-width="2" />
            <!-- Little Golden Fish swimming inside -->
            <path d="M -15 -2 Q 0 -8 15 -2 Q 0 4 -15 -2 Z" fill="#ff7700" />
            <polygon points="15,-2 22,-8 22,4" fill="#ff7700" />
          </g>
          <!-- Sleek Velvet Black Paw dipping gently from above -->
          <g transform="translate(0, -40)">
            <rect x="-8" y="-60" width="16" height="60" rx="8" fill="#14141e" stroke="#333" stroke-width="1.2" />
            <ellipse cx="0" cy="0" rx="14" ry="10" fill="#14141e" stroke="#333" stroke-width="1.2" />
            <circle cx="0" cy="18" r="3" fill="#e0f7fa" />
          </g>
          <!-- Five Streams of Living Water Spilling from the Chalice -->
          <path d="M -35 40 Q -60 70 -50 110" fill="none" stroke="#90e0ef" stroke-width="2" opacity="0.8" />
          <path d="M 35 40 Q 60 70 50 110" fill="none" stroke="#90e0ef" stroke-width="2" opacity="0.8" />
        </g>
      `
    };
  }

  if (suit === 'swords') {
    // Ace of Swords: Upright Rapier Piercing Clouds Crowned with Sheriff Smokey's Hat & Badge!
    return {
      defs: `
        <radialGradient id="cf_aceSwordsGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="0.9" />
          <stop offset="40%" stop-color="#b8c0ff" stop-opacity="0.5" />
          <stop offset="100%" stop-color="#000" stop-opacity="0" />
        </radialGradient>
      `,
      svg: `
        <g transform="translate(150, 230)">
          <circle cx="0" cy="-30" r="85" fill="url(#cf_aceSwordsGlow)" />
          <!-- Whirling Air Gale / Clouds -->
          <path d="M -80 30 Q -40 10 0 30 Q 40 50 80 30" fill="none" stroke="#b8c0ff" stroke-width="2" opacity="0.6" />
          <path d="M -70 60 Q 0 40 70 60" fill="none" stroke="#b8c0ff" stroke-width="2" opacity="0.6" />
          <!-- Upright Silver Blade of Mental Clarity -->
          <line x1="0" y1="100" x2="0" y2="-90" stroke="#ffffff" stroke-width="4" stroke-linecap="round" />
          <line x1="0" y1="100" x2="0" y2="-90" stroke="#dcdde1" stroke-width="2" />
          <polygon points="0,-105 -7,-90 7,-90" fill="#ffffff" />
          <!-- Golden Hilt & Pommel -->
          <line x1="-25" y1="70" x2="25" y2="70" stroke="#ffd700" stroke-width="3.5" />
          <circle cx="0" cy="105" r="6" fill="#ffd700" />
          <!-- SHERIFF SMOKEY'S COWBOY HAT CROWNING THE BLADE (IMG_4988) -->
          ${CAT_EMBLEMS.sheriffHat(0, -95, 1.1)}
        </g>
      `
    };
  }

  // Ace of Pentacles: Golden Royal Tuna Feast Can Encircled by Mardi Gras Beads
  return {
    defs: `
      <radialGradient id="cf_acePentGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#ffd700" stop-opacity="0.9" />
        <stop offset="50%" stop-color="#2a9d8f" stop-opacity="0.4" />
        <stop offset="100%" stop-color="#000" stop-opacity="0" />
      </radialGradient>
    `,
    svg: `
      <g transform="translate(150, 230)">
        <circle cx="0" cy="0" r="90" fill="url(#cf_acePentGlow)" />
        <!-- Golden Gourmet Feast Can -->
        <g transform="translate(0, 5)">
          <ellipse cx="0" cy="25" rx="55" ry="24" fill="#b8860b" stroke="#ffd700" stroke-width="2" />
          <rect x="-55" y="-15" width="110" height="40" fill="#d4af37" stroke="#ffd700" stroke-width="2" />
          <ellipse cx="0" cy="-15" rx="55" ry="24" fill="#ffeaa7" stroke="#ffd700" stroke-width="2" />
          <!-- Central Coin Seal: Golden Cat Silhouette -->
          <circle cx="0" cy="-15" r="18" fill="#ffd700" stroke="#b8860b" stroke-width="1.2" />
          <path d="M -8 -12 C -8 -6 8 -6 8 -12 C 8 -18 -8 -18 -8 -12 Z" fill="#603813" />
          <polygon points="-6,-18 -8,-24 -3,-20" fill="#603813" />
          <polygon points="6,-18 8,-24 3,-20" fill="#603813" />
        </g>
        <!-- Magnificent Mardi Gras Bead Necklace Garland (IMG_PXL_20260220) -->
        ${CAT_EMBLEMS.mardiGrasBeads(0, -10, 68, 42)}
        ${CAT_EMBLEMS.mardiGrasBeads(0, 15, 62, 38)}
      </g>
    `
  };
}

/**
 * 16 Bespoke Feline Court Cards
 */
function renderCatCourtCardArt(card) {
  const { rank, suit } = card;

  // WANDS: Suit of the Buff Ginger Tabby
  if (suit === 'wands') {
    if (rank === 'page') {
      // Scruffy Wet Ginger Kitten (IMG_9918)
      return {
        svg: `
          <g transform="translate(150, 230)">
            <ellipse cx="0" cy="50" rx="35" ry="24" fill="#e67e22" stroke="#ba4a00" stroke-width="1.8" />
            <circle cx="0" cy="15" r="22" fill="#f39c12" stroke="#ba4a00" stroke-width="1.5" />
            <polygon points="-14,4 -18,-12 -6,-4" fill="#e67e22" />
            <polygon points="14,4 18,-12 6,-4" fill="#e67e22" />
            <circle cx="-7" cy="14" r="4" fill="#ffd700" /><circle cx="-7" cy="14" r="1.5" fill="#000" />
            <circle cx="7" cy="14" r="4" fill="#ffd700" /><circle cx="7" cy="14" r="1.5" fill="#000" />
            <line x1="-25" y1="18" x2="25" y2="-75" stroke="#ffd700" stroke-width="3" stroke-linecap="round" />
            <circle cx="28" cy="-80" r="10" fill="#ff7700" stroke="#ffeb3b" stroke-width="2" />
          </g>
        `
      };
    }
    if (rank === 'knight') {
      // Buff Muscle Arms Ginger Knight (IMG_3541)
      return {
        svg: `
          <g transform="translate(150, 230)">
            <ellipse cx="0" cy="40" rx="38" ry="30" fill="#e67e22" stroke="#ba4a00" stroke-width="2" />
            <circle cx="0" cy="-10" r="26" fill="#f39c12" stroke="#ba4a00" stroke-width="1.8" />
            <polygon points="-18,-24 -24,-46 -8,-34" fill="#e67e22" />
            <polygon points="18,-24 24,-46 8,-34" fill="#e67e22" />
            <circle cx="-9" cy="-12" r="5" fill="#ffd700" /><circle cx="9" cy="-12" r="5" fill="#ffd700" />
            ${CAT_EMBLEMS.buffArms(0, 10, 1.15)}
          </g>
        `
      };
    }
    if (rank === 'queen') {
      // Radiant Ginger Lioness Queen on Sofa (PXL_20260706)
      return {
        svg: `
          <g transform="translate(150, 230)">
            <ellipse cx="0" cy="45" rx="44" ry="32" fill="#e67e22" stroke="#ba4a00" stroke-width="2" />
            <path d="M -20 20 C -25 45 -10 60 0 60 C 10 60 25 45 20 20 Z" fill="#ffecd2" />
            <circle cx="0" cy="-15" r="28" fill="#f39c12" stroke="#ba4a00" stroke-width="1.8" />
            <polygon points="-10,-38 -12,-55 -4,-45 0,-58 4,-45 12,-55 10,-38" fill="#ffd700" />
            <circle cx="-10" cy="-16" r="5.5" fill="#ffd700" /><circle cx="10" cy="-16" r="5.5" fill="#ffd700" />
          </g>
        `
      };
    }
    // King of Wands: Sovereign in the Poisson Frais Tub (IMG_0378)
    return {
      svg: `
        <g transform="translate(150, 230)">
          ${CAT_EMBLEMS.poissonFraisTub(0, 50, 115, 65)}
          <circle cx="0" cy="-15" r="28" fill="#f39c12" stroke="#ba4a00" stroke-width="1.8" />
          <polygon points="-14,-38 -14,-56 -7,-48 0,-60 7,-48 14,-56 14,-38" fill="#ffd700" />
          <circle cx="-10" cy="-16" r="5.5" fill="#ffd700" /><circle cx="10" cy="-16" r="5.5" fill="#ffd700" />
        </g>
      `
    };
  }

  // CUPS: Suit of the Sleek Void Cats
  if (suit === 'cups') {
    if (rank === 'page') {
      // Nose-Booped Black Cat Page (IMG_9826)
      return {
        svg: `
          <g transform="translate(150, 230)">
            <ellipse cx="0" cy="50" rx="30" ry="22" fill="#14141e" stroke="#333" stroke-width="1.5" />
            <circle cx="0" cy="10" r="24" fill="#14141e" stroke="#222" stroke-width="1.2" />
            <polygon points="-14,-4 -18,-24 -6,-14" fill="#14141e" />
            <polygon points="14,-4 18,-24 6,-14" fill="#14141e" />
            <ellipse cx="-8" cy="8" rx="5" ry="6" fill="#76c893" /><ellipse cx="8" cy="8" rx="5" ry="6" fill="#76c893" />
            ${CAT_EMBLEMS.bowTieWithTag(0, 32, 0.85)}
            <ellipse cx="45" cy="15" rx="14" ry="7" fill="#ffd700" stroke="#b8860b" stroke-width="1.2" />
          </g>
        `
      };
    }
    if (rank === 'knight') {
      // Stealth Shadow Stalker Knight (PXL_20260724)
      return {
        svg: `
          <g transform="translate(150, 230)">
            <path d="M -40 40 Q 0 10 40 30 Q 15 60 -40 40 Z" fill="#111119" stroke="#333" stroke-width="1.5" />
            <circle cx="-25" cy="15" r="20" fill="#141420" />
            <ellipse cx="-30" cy="14" rx="4.5" ry="6" fill="#76c893" /><ellipse cx="-18" cy="14" rx="4.5" ry="6" fill="#76c893" />
            <g transform="translate(30, 0)">
              <ellipse cx="0" cy="0" rx="16" ry="8" fill="#ffd700" stroke="#b8860b" stroke-width="1.5" />
            </g>
          </g>
        `
      };
    }
    if (rank === 'queen') {
      // Emerald-Eyed Queen with Floral Bow (IMG_9787)
      return {
        svg: `
          <g transform="translate(150, 230)">
            <ellipse cx="0" cy="45" rx="38" ry="28" fill="#14141e" stroke="#333" stroke-width="1.5" />
            <circle cx="0" cy="-15" r="26" fill="#141420" stroke="#222" stroke-width="1.2" />
            <polygon points="-8,-36 -12,-52 -4,-42 0,-55 4,-42 12,-52 8,-36" fill="#ffd700" />
            <ellipse cx="-10" cy="-15" rx="6" ry="8" fill="#2ec4b6" /><ellipse cx="10" cy="-15" rx="6" ry="8" fill="#2ec4b6" />
            ${CAT_EMBLEMS.bowTieWithTag(0, 12, 1)}
          </g>
        `
      };
    }
    // King of Cups: Sovereign Black Cat with Teal "NIGHT" Tag (IMG_3818)
    return {
      svg: `
        <g transform="translate(150, 230)">
          <path d="M -35 60 C -40 10 -20 -20 0 -20 C 20 -20 40 10 35 60 Z" fill="#111119" stroke="#333" stroke-width="1.8" />
          <circle cx="0" cy="-35" r="28" fill="#141420" stroke="#222" stroke-width="1.5" />
          <polygon points="-12,-58 -14,-75 -7,-68 0,-80 7,-68 14,-75 12,-58" fill="#ffd700" />
          <ellipse cx="-11" cy="-36" rx="6.5" ry="8.5" fill="#76c893" /><ellipse cx="11" cy="-36" rx="6.5" ry="8.5" fill="#76c893" />
          ${CAT_EMBLEMS.bowTieWithTag(0, -6, 1.15)}
        </g>
      `
    };
  }

  // SWORDS: Suit of the Smoky Persian Sheriff & Sage
  if (suit === 'swords') {
    if (rank === 'page') {
      // Persian in Cardboard Delivery Box (IMG_3119)
      return {
        svg: `
          <g transform="translate(150, 230)">
            ${CAT_EMBLEMS.cardboardBox(0, 45, 95, 55)}
            <circle cx="0" cy="5" r="24" fill="#adb5bd" stroke="#495057" stroke-width="1.5" />
            <circle cx="-9" cy="4" r="6" fill="#f39c12" /><circle cx="9" cy="4" r="6" fill="#f39c12" />
            <line x1="40" y1="20" x2="40" y2="-60" stroke="#dcdde1" stroke-width="2.5" />
          </g>
        `
      };
    }
    if (rank === 'knight') {
      // 3 AM Zoomies Whirlwind Cloud Knight
      return {
        svg: `
          <g transform="translate(150, 230)">
            <ellipse cx="0" cy="30" rx="46" ry="24" fill="#6c757d" stroke="#adb5bd" stroke-width="1.8" />
            <circle cx="-20" cy="10" r="22" fill="#adb5bd" stroke="#495057" stroke-width="1.5" />
            <circle cx="-26" cy="9" r="6" fill="#f39c12" /><circle cx="-12" cy="9" r="6" fill="#f39c12" />
            <line x1="-30" y1="0" x2="45" y2="-55" stroke="#ffffff" stroke-width="3" />
          </g>
        `
      };
    }
    if (rank === 'queen') {
      // Majestic Cloud Queen (IMG_20160112 / IMG_0990)
      return {
        svg: `
          <g transform="translate(150, 230)">
            <circle cx="0" cy="40" r="44" fill="#6c757d" stroke="#adb5bd" stroke-width="1.8" />
            <circle cx="0" cy="-10" r="30" fill="#adb5bd" stroke="#495057" stroke-width="1.5" />
            <polygon points="-10,-35 -12,-52 -4,-42 0,-55 4,-42 12,-52 8,-35" fill="#ffd700" />
            <circle cx="-12" cy="-10" r="7" fill="#f39c12" /><circle cx="12" cy="-10" r="7" fill="#f39c12" />
            <line x1="45" y1="40" x2="45" y2="-60" stroke="#dcdde1" stroke-width="2.5" />
          </g>
        `
      };
    }
    // King of Swords: Sheriff Smokey in Cowboy Hat (IMG_4988)
    return {
      svg: `
        <g transform="translate(150, 230)">
          <ellipse cx="0" cy="45" rx="44" ry="32" fill="#6c757d" stroke="#343a40" stroke-width="2" />
          <circle cx="0" cy="-10" r="30" fill="#adb5bd" stroke="#495057" stroke-width="2" />
          <circle cx="-12" cy="-10" r="7.5" fill="#f39c12" /><circle cx="12" cy="-10" r="7.5" fill="#f39c12" />
          ${CAT_EMBLEMS.sheriffHat(0, -36, 1.15)}
          <line x1="50" y1="50" x2="50" y2="-50" stroke="#dcdde1" stroke-width="3" />
        </g>
      `
    };
  }

  // PENTACLES: Suit of the Mardi Gras Bicolor Chonk
  if (rank === 'page') {
    // Sweet Chirping Conversationalist Kitten (PXL_20260817)
    return {
      svg: `
        <g transform="translate(150, 230)">
          <ellipse cx="0" cy="50" rx="32" ry="24" fill="#f8f9fa" stroke="#495057" stroke-width="1.5" />
          <circle cx="0" cy="15" r="22" fill="#6c757d" stroke="#495057" stroke-width="1.5" />
          <path d="M -6 18 L 0 5 L 6 18 Z" fill="#ffffff" />
          <circle cx="-8" cy="14" r="4.5" fill="#a7c957" /><circle cx="8" cy="14" r="4.5" fill="#a7c957" />
          <polygon points="0,22 -3,19 3,19" fill="#ff758f" />
          <circle cx="35" cy="35" r="14" fill="#ffd700" stroke="#b8860b" stroke-width="1.2" />
        </g>
      `
    };
  }
  if (rank === 'knight') {
    // Sprint to the Kibble Bowl Knight
    return {
      svg: `
        <g transform="translate(150, 230)">
          <ellipse cx="0" cy="30" rx="42" ry="26" fill="#f8f9fa" stroke="#495057" stroke-width="1.8" />
          <circle cx="-25" cy="15" r="20" fill="#6c757d" />
          <circle cx="35" cy="10" r="16" fill="#ffd700" stroke="#b8860b" stroke-width="1.5" />
        </g>
      `
    };
  }
  if (rank === 'queen') {
    // Bead-Draped Empress Queen (PXL_20260220)
    return {
      svg: `
        <g transform="translate(150, 230)">
          <ellipse cx="0" cy="45" rx="42" ry="32" fill="#f8f9fa" stroke="#495057" stroke-width="1.8" />
          <circle cx="0" cy="-15" r="26" fill="#6c757d" stroke="#495057" stroke-width="1.5" />
          <polygon points="-8,-36 -12,-52 -4,-42 0,-55 4,-42 12,-52 8,-36" fill="#ffd700" />
          <circle cx="-10" cy="-16" r="5.5" fill="#a7c957" /><circle cx="10" cy="-16" r="5.5" fill="#a7c957" />
          ${CAT_EMBLEMS.mardiGrasBeads(0, 10, 32, 20)}
        </g>
      `
    };
  }
  // King of Pentacles: Sphinx on the Office Chair (IMG_20260715)
  return {
    svg: `
      <g transform="translate(150, 230)">
        <ellipse cx="0" cy="50" rx="45" ry="30" fill="#f8f9fa" stroke="#495057" stroke-width="1.8" />
        <ellipse cx="-15" cy="65" rx="14" ry="8" fill="#ffffff" stroke="#ced4da" stroke-width="1" />
        <ellipse cx="15" cy="65" rx="14" ry="8" fill="#ffffff" stroke="#ced4da" stroke-width="1" />
        <circle cx="0" cy="-10" r="28" fill="#6c757d" stroke="#495057" stroke-width="1.5" />
        <polygon points="-12,-34 -14,-50 -7,-42 0,-54 7,-42 14,-50 12,-34" fill="#ffd700" />
        <circle cx="-11" cy="-11" r="5.5" fill="#a7c957" /><circle cx="11" cy="-11" r="5.5" fill="#a7c957" />
        <circle cx="45" cy="15" r="16" fill="#ffd700" stroke="#b8860b" stroke-width="1.5" />
      </g>
    `
  };
}

/**
 * 36 Expressive Feline Pip Cards (Twos through Tens)
 */
function renderCatPipCardArt(card) {
  const { rank, suit } = card;
  const rankValues = { two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10 };
  const count = rankValues[rank] || 2;

  // Custom emblem generator based on feline suit
  let emblemFill = '#ffd700';
  let emblemFn;

  if (suit === 'wands') {
    // Fiery mouse/wand teaser
    emblemFill = '#ff6600';
    emblemFn = (cx, cy) => `
      <g transform="translate(${cx}, ${cy}) scale(0.7)">
        <line x1="0" y1="22" x2="0" y2="-22" stroke="#ffaa00" stroke-width="2.5" stroke-linecap="round" />
        <circle cx="0" cy="-22" r="8" fill="#ff4500" stroke="#ffd700" stroke-width="1.2" />
      </g>
    `;
  } else if (suit === 'cups') {
    // Water/Milk bowl
    emblemFill = '#00b4d8';
    emblemFn = (cx, cy) => `
      <g transform="translate(${cx}, ${cy}) scale(0.65)">
        <ellipse cx="0" cy="5" rx="16" ry="8" fill="#0077b6" stroke="#48cae4" stroke-width="1.5" />
        <path d="M -16 5 C -16 22 16 22 16 5 Z" fill="#0077b6" stroke="#48cae4" stroke-width="1.5" />
        <ellipse cx="0" cy="5" rx="12" ry="5" fill="#caf0f8" />
      </g>
    `;
  } else if (suit === 'swords') {
    // Silver Fishbone Blade / Feather
    emblemFill = '#b8c0ff';
    emblemFn = (cx, cy) => `
      <g transform="translate(${cx}, ${cy}) scale(0.7)">
        <line x1="0" y1="24" x2="0" y2="-24" stroke="#e0e1dd" stroke-width="2.5" stroke-linecap="round" />
        <polygon points="0,-28 -5,-20 5,-20" fill="#ffffff" />
        <line x1="-10" y1="12" x2="10" y2="12" stroke="#ffd700" stroke-width="2" />
      </g>
    `;
  } else {
    // Golden Tuna Can Pentacle
    emblemFill = '#ffd700';
    emblemFn = (cx, cy) => `
      <g transform="translate(${cx}, ${cy}) scale(0.65)">
        <circle cx="0" cy="0" r="16" fill="#ffd700" stroke="#b8860b" stroke-width="1.8" />
        <circle cx="0" cy="0" r="11" fill="none" stroke="#b8860b" stroke-dasharray="2,2" stroke-width="1" />
        ${CAT_EMBLEMS.paw(0, 0, 4, '#b8860b', 0.9)}
      </g>
    `;
  }

  // Pre-calculated geometric positions for pip layouts
  const layouts = {
    2: [{ x: 0, y: -65 }, { x: 0, y: 65 }],
    3: [{ x: 0, y: -75 }, { x: 0, y: 0 }, { x: 0, y: 75 }],
    4: [{ x: -45, y: -65 }, { x: 45, y: -65 }, { x: -45, y: 65 }, { x: 45, y: 65 }],
    5: [{ x: -45, y: -70 }, { x: 45, y: -70 }, { x: 0, y: 0 }, { x: -45, y: 70 }, { x: 45, y: 70 }],
    6: [{ x: -45, y: -75 }, { x: 45, y: -75 }, { x: -45, y: 0 }, { x: 45, y: 0 }, { x: -45, y: 75 }, { x: 45, y: 75 }],
    7: [{ x: -45, y: -80 }, { x: 45, y: -80 }, { x: 0, y: -30 }, { x: -45, y: 20 }, { x: 45, y: 20 }, { x: -45, y: 80 }, { x: 45, y: 80 }],
    8: [{ x: -45, y: -80 }, { x: 45, y: -80 }, { x: -45, y: -25 }, { x: 45, y: -25 }, { x: -45, y: 30 }, { x: 45, y: 30 }, { x: -45, y: 85 }, { x: 45, y: 85 }],
    9: [{ x: -45, y: -85 }, { x: 45, y: -85 }, { x: -45, y: -30 }, { x: 45, y: -30 }, { x: 0, y: 0 }, { x: -45, y: 30 }, { x: 45, y: 30 }, { x: -45, y: 85 }, { x: 45, y: 85 }],
    10: [{ x: -45, y: -85 }, { x: 45, y: -85 }, { x: 0, y: -55 }, { x: -45, y: -25 }, { x: 45, y: -25 }, { x: -45, y: 35 }, { x: 45, y: 35 }, { x: 0, y: 65 }, { x: -45, y: 95 }, { x: 45, y: 95 }]
  };

  const coords = layouts[count] || layouts[2];
  const pipsSvg = coords.map(pt => emblemFn(pt.x, pt.y)).join('');

  return {
    defs: `
      <radialGradient id="cf_pipGlow_${card.id}" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="${emblemFill}" stop-opacity="0.3" />
        <stop offset="70%" stop-color="#000000" stop-opacity="0" />
      </radialGradient>
    `,
    svg: `
      <g transform="translate(150, 230)">
        <!-- Center Glow & Geometric Mandala Wireframe -->
        <circle cx="0" cy="0" r="80" fill="url(#cf_pipGlow_${card.id})" />
        <circle cx="0" cy="0" r="65" fill="none" stroke="#ffd700" stroke-width="0.8" stroke-dasharray="3,3" opacity="0.4" />
        <!-- Pips -->
        ${pipsSvg}
      </g>
    `
  };
}


// --- FELINE CARD BACK GENERATOR ---
/**
 * Feline Familiars Tarot: Universal Reversible Card Back
 * 180-degree rotationally symmetric design featuring the sacred Yin-Yang sleeping cats,
 * celestial yarn mandala, crescent moons, and constellation paw prints.
 */

function _renderCatCardBackSvg(width = 300, height = 480) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 480" width="${width}" height="${height}" class="tarot-card-svg tarot-back tarot-back-feline">
    <defs>
      <!-- Deep Velvet Night Sky Gradient -->
      <linearGradient id="catBackBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#190e2e" />
        <stop offset="50%" stop-color="#0e071c" />
        <stop offset="100%" stop-color="#04020a" />
      </linearGradient>

      <!-- Shimmering Gold Filament Gradients -->
      <linearGradient id="catBackGoldLine" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#fff5cc" />
        <stop offset="30%" stop-color="#ffd56b" />
        <stop offset="70%" stop-color="#d4af37" />
        <stop offset="100%" stop-color="#8c6d1d" />
      </linearGradient>

      <radialGradient id="backEyeAura" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#ffd56b" stop-opacity="0.85" />
        <stop offset="35%" stop-color="#e67e22" stop-opacity="0.45" />
        <stop offset="70%" stop-color="#8e44ad" stop-opacity="0.2" />
        <stop offset="100%" stop-color="#000000" stop-opacity="0" />
      </radialGradient>

      <!-- Pattern Grid for Sacred Geometry -->
      <pattern id="backSacredGrid" width="20" height="20" patternUnits="userSpaceOnUse">
        <circle cx="10" cy="10" r="0.75" fill="#d4af37" opacity="0.3" />
        <line x1="0" y1="10" x2="20" y2="10" stroke="#d4af37" stroke-width="0.3" opacity="0.15" />
        <line x1="10" y1="0" x2="10" y2="20" stroke="#d4af37" stroke-width="0.3" opacity="0.15" />
      </pattern>
    </defs>

    <!-- Card Base & Outer Border -->
    <rect width="300" height="480" rx="16" fill="url(#catBackBgGrad)" stroke="#000000" stroke-width="2" />
    <rect x="6" y="6" width="288" height="468" rx="12" fill="none" stroke="url(#catBackGoldLine)" stroke-width="1.4" opacity="0.9" />
    <rect x="12" y="12" width="276" height="456" rx="8" fill="none" stroke="#ffd700" stroke-dasharray="3, 4" stroke-width="0.8" opacity="0.5" />
    <rect x="18" y="18" width="264" height="444" rx="6" fill="url(#backSacredGrid)" opacity="0.45" />

    <!-- Corner Filigree & Golden Paw Prints -->
    <g stroke="url(#catBackGoldLine)" fill="none" stroke-width="1.1">
      <path d="M 12 36 C 24 36 36 24 36 12" />
      <path d="M 288 36 C 276 36 264 24 264 12" />
      <path d="M 12 444 C 24 444 36 456 36 468" />
      <path d="M 288 444 C 276 444 264 456 264 468" />
      <!-- Paw prints in the four corners -->
      <g transform="translate(25, 25) scale(0.65)" fill="#ffd56b">
        <path d="M -8 2 C -9 9, -4 11, 0 9 C 4 11, 9 9, 8 2 C 7 -5, -7 -5, -8 2 Z" />
        <circle cx="-6" cy="-6" r="2.5" /><circle cx="-2" cy="-9" r="2.5" /><circle cx="2" cy="-9" r="2.5" /><circle cx="6" cy="-6" r="2.5" />
      </g>
      <g transform="translate(275, 25) scale(0.65)" fill="#ffd56b">
        <path d="M -8 2 C -9 9, -4 11, 0 9 C 4 11, 9 9, 8 2 C 7 -5, -7 -5, -8 2 Z" />
        <circle cx="-6" cy="-6" r="2.5" /><circle cx="-2" cy="-9" r="2.5" /><circle cx="2" cy="-9" r="2.5" /><circle cx="6" cy="-6" r="2.5" />
      </g>
      <g transform="translate(25, 455) scale(0.65)" fill="#ffd56b">
        <path d="M -8 2 C -9 9, -4 11, 0 9 C 4 11, 9 9, 8 2 C 7 -5, -7 -5, -8 2 Z" />
        <circle cx="-6" cy="-6" r="2.5" /><circle cx="-2" cy="-9" r="2.5" /><circle cx="2" cy="-9" r="2.5" /><circle cx="6" cy="-6" r="2.5" />
      </g>
      <g transform="translate(275, 455) scale(0.65)" fill="#ffd56b">
        <path d="M -8 2 C -9 9, -4 11, 0 9 C 4 11, 9 9, 8 2 C 7 -5, -7 -5, -8 2 Z" />
        <circle cx="-6" cy="-6" r="2.5" /><circle cx="-2" cy="-9" r="2.5" /><circle cx="2" cy="-9" r="2.5" /><circle cx="6" cy="-6" r="2.5" />
      </g>
    </g>

    <!-- Top & Bottom Reversible Crescent Moons with Cat Ears -->
    <g transform="translate(150, 90)">
      <circle cx="0" cy="0" r="32" fill="none" stroke="url(#catBackGoldLine)" stroke-width="1.2" />
      <path d="M -22 0 A 22 22 0 1 0 22 0 A 15 22 0 0 1 -22 0 Z" fill="#ffd700" opacity="0.85" />
      <!-- Cat ears silhouette on moon -->
      <polygon points="-8,-12 -4,-22 0,-14" fill="#ffd700" />
      <polygon points="0,-14 4,-22 8,-12" fill="#ffd700" />
      <circle cx="0" cy="0" r="5" fill="#fff" opacity="0.9" />
    </g>
    <g transform="translate(150, 390) rotate(180)">
      <circle cx="0" cy="0" r="32" fill="none" stroke="url(#catBackGoldLine)" stroke-width="1.2" />
      <path d="M -22 0 A 22 22 0 1 0 22 0 A 15 22 0 0 1 -22 0 Z" fill="#ffd700" opacity="0.85" />
      <!-- Cat ears silhouette on moon -->
      <polygon points="-8,-12 -4,-22 0,-14" fill="#ffd700" />
      <polygon points="0,-14 4,-22 8,-12" fill="#ffd700" />
      <circle cx="0" cy="0" r="5" fill="#fff" opacity="0.9" />
    </g>

    <!-- Center Reversible Sacred Feline Mandala -->
    <g transform="translate(150, 240)">
      <!-- Outer Radiating Aura -->
      <circle cx="0" cy="0" r="85" fill="url(#backEyeAura)" opacity="0.4" />
      <!-- Concentric Celestial Rings -->
      <circle cx="0" cy="0" r="76" fill="none" stroke="url(#catBackGoldLine)" stroke-width="1.5" />
      <circle cx="0" cy="0" r="68" fill="none" stroke="#ffd700" stroke-dasharray="2, 4" stroke-width="1" opacity="0.7" />
      <circle cx="0" cy="0" r="52" fill="#0c071a" stroke="url(#catBackGoldLine)" stroke-width="1.8" />

      <!-- Twelve Radiating Whisker Rays -->
      <g stroke="url(#catBackGoldLine)" stroke-width="0.8" opacity="0.6">
        <line x1="0" y1="-76" x2="0" y2="-52" />
        <line x1="0" y1="76" x2="0" y2="52" />
        <line x1="-76" y1="0" x2="-52" y2="0" />
        <line x1="76" y1="0" x2="52" y2="0" />
        <line x1="-54" y1="-54" x2="-37" y2="-37" />
        <line x1="54" y1="-54" x2="37" y2="-37" />
        <line x1="-54" y1="54" x2="-37" y2="37" />
        <line x1="54" y1="54" x2="37" y2="37" />
      </g>

      <!-- Sacred Yin-Yang Sleeping Cats (180-deg Rotational Symmetry) -->
      <!-- Top Cat: Golden Moonlight Sleeping Silhouette -->
      <path d="M 0 0 C -25 0 -45 -18 -45 -34 C -45 -48 -28 -50 0 -50 C 26 -50 45 -30 45 -10 C 45 15 25 0 0 0 Z" fill="#ffd700" opacity="0.9" />
      <circle cx="-18" cy="-30" r="4" fill="#0e071c" />
      <polygon points="-30,-44 -24,-52 -20,-44" fill="#ffd700" stroke="#b8860b" stroke-width="0.8" />
      <polygon points="-16,-46 -10,-53 -8,-44" fill="#ffd700" stroke="#b8860b" stroke-width="0.8" />

      <!-- Bottom Cat: Midnight Void Sleeping Silhouette (180-deg rotated) -->
      <g transform="rotate(180)">
        <path d="M 0 0 C -25 0 -45 -18 -45 -34 C -45 -48 -28 -50 0 -50 C 26 -50 45 -30 45 -10 C 45 15 25 0 0 0 Z" fill="#1b1429" stroke="url(#catBackGoldLine)" stroke-width="1.2" />
        <circle cx="-18" cy="-30" r="4" fill="#ffd700" />
        <polygon points="-30,-44 -24,-52 -20,-44" fill="#1b1429" stroke="#ffd700" stroke-width="0.8" />
        <polygon points="-16,-46 -10,-53 -8,-44" fill="#1b1429" stroke="#ffd700" stroke-width="0.8" />
      </g>

      <!-- Golden Yarn Center Knot with Celestial Star -->
      <circle cx="0" cy="0" r="10" fill="#090514" stroke="#ffd700" stroke-width="1.5" />
      <polygon points="0,-7 2,-2 7,0 2,2 0,7 -2,2 -7,0 -2,-2" fill="#fff" />
    </g>
  </svg>`;
}


function _renderCatCardFaceSvg(card) {
  if (!card) return '';

  let customDefs = '';
  let artworkSvg = '';

  if (card.arcana === 'major') {
    const art = CAT_MAJOR_ARCANA_ART[card.id];
    if (art) {
      customDefs = art.defs || '';
      artworkSvg = art.svg || '';
    } else {
      artworkSvg = '<circle cx="150" cy="230" r="40" fill="#ffd700" />';
    }
  } else if (card.rank === 'ace') {
    const art = renderCatAceCardArt(card);
    customDefs = art.defs || '';
    artworkSvg = art.svg || '';
  } else if (['page', 'knight', 'queen', 'king'].includes(card.rank)) {
    const art = renderCatCourtCardArt(card);
    customDefs = art.defs || '';
    artworkSvg = art.svg || '';
  } else {
    const art = renderCatPipCardArt(card);
    customDefs = art.defs || '';
    artworkSvg = art.svg || '';
  }

  return createCatCardFrame(card, artworkSvg, customDefs);
}

// ============================================================
// PART 3: FELINE MYSTICA (MASTERPIECE ILLUSTRATED DECK)
// ============================================================

const FELINE_MYSTICA_IMAGES = {
  'maj_00': 'the_fool.jpg',
  'maj_01': 'the_magician.jpg',
  'maj_02': 'the_high_priestess.jpg',
  'maj_03': 'the_empress.jpg',
  'maj_04': 'the_emperor.jpg',
  'maj_06': 'the_lovers.jpg',
  'maj_08': 'strength.jpg',
  'maj_09': 'the_hermit.jpg',
  'maj_11': 'justice.jpg',
  'maj_12': 'the_hanged_man.jpg',
  'maj_18': 'the_moon.jpg',
  'maj_19': 'the_sun.jpg'
};

function _renderFelineMysticaCardBackSvg(width = 300, height = 480) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 480" width="${width}" height="${height}" class="tarot-card-svg tarot-back-feline tarot-back-mystica">
  <defs>
    <radialGradient id="backEyeAura" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#ffd700" stop-opacity="0.8" />
      <stop offset="100%" stop-color="#d4af37" stop-opacity="0" />
    </radialGradient>
    <pattern id="backSacredGrid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 40 M 0 0 L 40 40" fill="none" stroke="#d4af37" stroke-width="0.3" stroke-opacity="0.25" />
    </pattern>
    <clipPath id="backClip_mystica">
      <rect x="0" y="0" width="300" height="480" rx="16" ry="16" />
    </clipPath>
  </defs>
  <g clip-path="url(#backClip_mystica)">
    <image href="/assets/feline-mystica/card_back.jpg" x="0" y="0" width="300" height="480" preserveAspectRatio="xMidYMid slice" />
  </g>
</svg>`;
}

function _renderFelineMysticaCardFaceSvg(card) {
  if (!card) return '';
  const cid = card.id;
  const nameUpper = card.name.toUpperCase();
  const numText = card.number || '';
  const esotericTitle = card.esotericTitle || '';
  const imgName = FELINE_MYSTICA_IMAGES[cid];

  let artContent = '';
  let customDefs = '';

  if (imgName) {
    artContent = `<image href="/assets/feline-mystica/${imgName}" x="12" y="42" width="276" height="382" preserveAspectRatio="xMidYMid slice" />`;
  } else if (card.arcana === 'major') {
    const art = CAT_MAJOR_ARCANA_ART[cid];
    if (art) {
      customDefs = art.defs || '';
      artContent = `<rect x="12" y="42" width="276" height="382" fill="#0d091a" />
        <radialGradient id="mysticaGlow_${cid}" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#2a164d" stop-opacity="0.9" />
          <stop offset="100%" stop-color="#080512" stop-opacity="0.95" />
        </radialGradient>
        <rect x="12" y="42" width="276" height="382" fill="url(#mysticaGlow_${cid})" />
        ${art.svg || ''}`;
    }
  } else if (card.rank === 'ace') {
    const art = renderCatAceCardArt(card);
    customDefs = art.defs || '';
    artContent = `<rect x="12" y="42" width="276" height="382" fill="#0d091a" />${art.svg || ''}`;
  } else if (['page', 'knight', 'queen', 'king'].includes(card.rank)) {
    const art = renderCatCourtCardArt(card);
    customDefs = art.defs || '';
    artContent = `<rect x="12" y="42" width="276" height="382" fill="#0d091a" />${art.svg || ''}`;
  } else {
    const art = renderCatPipCardArt(card);
    customDefs = art.defs || '';
    artContent = `<rect x="12" y="42" width="276" height="382" fill="#0d091a" />${art.svg || ''}`;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 480" width="300" height="480" class="tarot-card-svg tarot-front tarot-feline-theme tarot-mystica-theme" data-id="${cid}">
  <defs>
    <linearGradient id="mysticaStockGrad_${cid}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#181126" />
      <stop offset="50%" stop-color="#0e0a17" />
      <stop offset="100%" stop-color="#050308" />
    </linearGradient>
    <linearGradient id="mysticaGoldGrad_${cid}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fff8db" />
      <stop offset="30%" stop-color="#ffd56b" />
      <stop offset="70%" stop-color="#d4af37" />
      <stop offset="100%" stop-color="#8a6d1c" />
    </linearGradient>
    <clipPath id="artClip_${cid}">
      <rect x="12" y="42" width="276" height="382" rx="10" />
    </clipPath>
    ${customDefs}
  </defs>
  <rect width="300" height="480" rx="16" fill="url(#mysticaStockGrad_${cid})" stroke="#020104" stroke-width="2" />
  <rect x="6" y="6" width="288" height="468" rx="12" fill="none" stroke="url(#mysticaGoldGrad_${cid})" stroke-width="1.3" opacity="0.95" />
  <rect x="10" y="10" width="280" height="460" rx="9" fill="none" stroke="#ffd56b" stroke-dasharray="3, 4" stroke-width="0.7" opacity="0.45" />
  ${CAT_EMBLEMS.paw(19, 19, 4.5, '#ffd56b', 0.8)}
  ${CAT_EMBLEMS.paw(281, 19, 4.5, '#ffd56b', 0.8)}
  ${CAT_EMBLEMS.paw(19, 461, 4.5, '#ffd56b', 0.8)}
  ${CAT_EMBLEMS.paw(281, 461, 4.5, '#ffd56b', 0.8)}
  <g id="mysticaHeader_${cid}">
    <rect x="90" y="12" width="120" height="22" rx="4" fill="#0d0914" fill-opacity="0.9" stroke="url(#mysticaGoldGrad_${cid})" stroke-width="0.9" />
    <text x="150" y="27" font-family="'Cinzel Decorative', 'Cinzel', serif" font-size="11" font-weight="700" fill="#ffd700" text-anchor="middle" letter-spacing="2.5">${numText || '✦'}</text>
  </g>
  <g clip-path="url(#artClip_${cid})">
    ${artContent}
  </g>
  <rect x="12" y="42" width="276" height="382" rx="10" fill="none" stroke="url(#mysticaGoldGrad_${cid})" stroke-width="1.1" opacity="0.85" />
  <g id="mysticaFooter_${cid}">
    <rect x="16" y="428" width="268" height="40" rx="6" fill="#0b0813" fill-opacity="0.94" stroke="url(#mysticaGoldGrad_${cid})" stroke-width="1.2" />
    <text x="150" y="446" font-family="'Cinzel Decorative', 'Cinzel', serif" font-size="11" font-weight="700" fill="#fdf6d8" text-anchor="middle" letter-spacing="2">${nameUpper}</text>
    <text x="150" y="459" font-family="'Cinzel', serif" font-size="7.5" font-weight="400" fill="#d4af37" text-anchor="middle" letter-spacing="1.2">${esotericTitle ? esotericTitle.toUpperCase() : ''}</text>
  </g>
</svg>`;
}

// ============================================================
// DECK THEME STATE & PUBLIC API
// ============================================================

let currentDeckTheme = 'surrealist'; // 'surrealist' | 'feline' | 'feline_mystica'

export function setDeckTheme(theme) {
  if (theme === 'feline_mystica' || theme === 'mystica' || theme === 'illustrated') {
    currentDeckTheme = 'feline_mystica';
  } else if (theme === 'feline' || theme === 'cats') {
    currentDeckTheme = 'feline';
  } else {
    currentDeckTheme = 'surrealist';
  }
}

export function getDeckTheme() {
  return currentDeckTheme;
}

export function renderCardBackSvg(width = 300, height = 480, theme = currentDeckTheme) {
  if (theme === 'feline_mystica' || theme === 'mystica' || theme === 'illustrated') {
    return _renderFelineMysticaCardBackSvg(width, height);
  }
  if (theme === 'feline' || theme === 'cats') {
    return _renderCatCardBackSvg(width, height);
  }
  return _renderCardBackSvg(width, height);
}

export function renderCardFaceSvg(card, theme = currentDeckTheme) {
  if (!card) return '';
  if (theme === 'feline_mystica' || theme === 'mystica' || theme === 'illustrated') {
    return _renderFelineMysticaCardFaceSvg(card);
  }
  if (theme === 'feline' || theme === 'cats') {
    return _renderCatCardFaceSvg(card);
  }
  return _renderSurrealistCardFaceSvg(card);
}

// Explicit themed helpers
export const renderSurrealistCardFaceSvg = _renderSurrealistCardFaceSvg;
export const renderSurrealistCardBackSvg = _renderCardBackSvg;
export const renderCatCardFaceSvg = _renderCatCardFaceSvg;
export const renderCatCardBackSvg = _renderCatCardBackSvg;
export const renderFelineMysticaCardFaceSvg = _renderFelineMysticaCardFaceSvg;
export const renderFelineMysticaCardBackSvg = _renderFelineMysticaCardBackSvg;
