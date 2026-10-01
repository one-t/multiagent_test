/**
 * Feline Familiars Tarot: Minor Arcana Vector Art Engine
 * Comprehensive artwork for all 56 Minor Arcana cards:
 * - 4 Monumental Feline Aces
 * - 16 Bespoke Feline Court Cards (Pages, Knights, Queens, Kings)
 * - 36 Expressive Feline Pip Cards (Twos through Tens)
 */

import { CAT_EMBLEMS } from './cat-emblems.js';

/**
 * 4 Monumental Feline Aces
 */
export function renderCatAceCardArt(card) {
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
export function renderCatCourtCardArt(card) {
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
export function renderCatPipCardArt(card) {
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
