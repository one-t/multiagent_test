/**
 * 22 Major Arcana Surrealist Masterpiece Vector Artworks
 * Inspired by Salvador Dalí, René Magritte, Giorgio de Chirico, and Remedios Varo.
 * Bespoke sacred geometry, dreamscapes, metaphysical perspective, and luminous gradients.
 */

export const MAJOR_ARCANA_ART = {
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
