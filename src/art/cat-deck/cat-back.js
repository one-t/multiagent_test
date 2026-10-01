/**
 * Feline Familiars Tarot: Universal Reversible Card Back
 * 180-degree rotationally symmetric design featuring the sacred Yin-Yang sleeping cats,
 * celestial yarn mandala, crescent moons, and constellation paw prints.
 */

export function renderCatCardBackSvg(width = 300, height = 480) {
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
