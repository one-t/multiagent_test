/**
 * Universal Card Back SVG
 * Fully symmetrical, reversible sacred geometry with celestial motifs,
 * mystic all-seeing eye, revolving moon phases, and gold filigree.
 */
export function renderCardBackSvg(width = 300, height = 480) {
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
