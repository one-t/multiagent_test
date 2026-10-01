/**
 * Minor Arcana Surrealist Art Engine
 * Aces, Pips (2-10 with iconic surrealist motifs), and Courts (Page, Knight, Queen, King).
 */

import { getSuitEmblem } from './emblems.js';

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
export function renderAceCardArt(card) {
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
export function renderCourtCardArt(card) {
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
export function renderPipCardArt(card) {
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
