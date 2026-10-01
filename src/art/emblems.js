/**
 * Surrealist Suit Emblems
 * Rich vector emblems with gradients, depth, highlights, and esoteric filigree.
 */

export function getSuitEmblem(suit, size = 32, idPrefix = 'emb') {
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
