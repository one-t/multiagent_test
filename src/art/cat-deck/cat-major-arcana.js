/**
 * Feline Familiars Tarot: 22 Major Arcana Masterpiece Vector Artworks
 * Faithfully celebrating the 4 real cats from the reference photos:
 * 1. The Buff Ginger Floof (Strength, The Emperor, The Sun, The Fool)
 * 2. The Smoky Persian Sheriff & Sage (Justice, The Hermit, The Hierophant, The Star)
 * 3. The Sleek Void Twins / Night (The Magician, The Lovers, The Moon, Death, Judgement)
 * 4. The Mardi Gras Bicolor Chonk (The Empress, The Hanged Man, Wheel of Fortune)
 */

import { CAT_EMBLEMS } from './cat-emblems.js';

export const CAT_MAJOR_ARCANA_ART = {
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
