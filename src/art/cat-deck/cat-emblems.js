/**
 * Feline Familiars Tarot: Shared Cat Art Emblems & Silhouette Components
 * Vector definitions for the 4 beloved felines:
 * 1. The Buff Ginger Tabby (Mighty Lion of Wands & Strength)
 * 2. The Smoky Persian Sage & Sheriff (Philosopher of Swords & Justice)
 * 3. The Void Twins / Night (Mystic Shadows of Cups & The Moon)
 * 4. The Mardi Gras Bicolor Chonk (Sovereign of Pentacles & The Empress)
 */

export const CAT_EMBLEMS = {
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
