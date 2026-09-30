// Script to build js/svg-art.js with complete original SVG artwork for all 78 tarot cards plus card back.
const fs = require('fs');
const path = require('path');

const svgArtScript = `/**
 * Original SVG Tarot Artwork Engine
 * Draws original vector art for all 78 tarot card faces and the card back.
 * No copies of any existing deck — bespoke symbolic, sacred-geometry, and esoteric motifs.
 */

// Common SVG helpers
function escapeXml(unsafe) {
  return unsafe.replace(/[<>&'"]/g, c => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\\'': return '&apos;';
      case '"': return '&quot;';
    }
  });
}

/**
 * Universal Card Back SVG
 * Fully symmetrical, reversible sacred geometry with celestial motifs and gold filigree.
 */
export function renderCardBackSvg(width = 300, height = 480) {
  return \`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 480" width="\${width}" height="\${height}" class="tarot-card-svg tarot-back">
    <defs>
      <linearGradient id="backBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0a0a14" />
        <stop offset="50%" stop-color="#14142b" />
        <stop offset="100%" stop-color="#06060c" />
      </linearGradient>
      <linearGradient id="goldFiligree" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#ffd56b" />
        <stop offset="50%" stop-color="#d4af37" />
        <stop offset="100%" stop-color="#9a7b1c" />
      </linearGradient>
      <radialGradient id="eyeGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#ffd700" stop-opacity="0.9" />
        <stop offset="40%" stop-color="#ff9900" stop-opacity="0.4" />
        <stop offset="100%" stop-color="#14142b" stop-opacity="0" />
      </radialGradient>
      <pattern id="sacredGrid" width="24" height="24" patternUnits="userSpaceOnUse">
        <circle cx="12" cy="12" r="1" fill="#d4af37" opacity="0.25" />
        <path d="M 0 12 L 24 12 M 12 0 L 12 24" stroke="#d4af37" stroke-width="0.3" opacity="0.12" />
        <polygon points="12,2 22,12 12,22 2,12" fill="none" stroke="#d4af37" stroke-width="0.25" opacity="0.1" />
      </pattern>
    </defs>

    <!-- Base Card Stock -->
    <rect width="300" height="480" rx="16" fill="url(#backBgGrad)" />
    <rect x="6" y="6" width="288" height="468" rx="12" fill="url(#sacredGrid)" />

    <!-- Ornate Borders -->
    <rect x="12" y="12" width="276" height="456" rx="10" fill="none" stroke="url(#goldFiligree)" stroke-width="1.8" />
    <rect x="18" y="18" width="264" height="444" rx="8" fill="none" stroke="#d4af37" stroke-dasharray="3, 3" stroke-width="0.8" opacity="0.7" />
    <rect x="24" y="24" width="252" height="432" rx="6" fill="none" stroke="url(#goldFiligree)" stroke-width="0.75" opacity="0.5" />

    <!-- Corner Filigree Ornaments -->
    <g stroke="url(#goldFiligree)" fill="none" stroke-width="1.2">
      <!-- Top Left -->
      <path d="M 16 38 C 24 38 38 24 38 16 M 16 48 C 32 48 48 32 48 16 M 22 22 L 32 32" />
      <circle cx="28" cy="28" r="2.5" fill="#ffd56b" />
      <!-- Top Right -->
      <path d="M 284 38 C 276 38 262 24 262 16 M 284 48 C 268 48 252 32 252 16 M 278 22 L 268 32" />
      <circle cx="272" cy="28" r="2.5" fill="#ffd56b" />
      <!-- Bottom Left -->
      <path d="M 16 442 C 24 442 38 456 38 464 M 16 432 C 32 432 48 448 48 464 M 22 458 L 32 448" />
      <circle cx="28" cy="452" r="2.5" fill="#ffd56b" />
      <!-- Bottom Right -->
      <path d="M 284 442 C 276 442 262 456 262 464 M 284 432 C 268 432 252 448 252 464 M 278 458 L 268 448" />
      <circle cx="272" cy="452" r="2.5" fill="#ffd56b" />
    </g>

    <!-- Top & Bottom Symmetrical Moon Phase Bars -->
    <g fill="#ffd56b" opacity="0.85">
      <!-- Top Moons -->
      <path d="M 110 50 A 10 10 0 1 0 110 70 A 7 10 0 0 1 110 50" /> <!-- Crescent -->
      <circle cx="150" cy="60" r="10" fill="url(#goldFiligree)" /> <!-- Full Moon -->
      <path d="M 190 50 A 10 10 0 1 1 190 70 A 7 10 0 0 0 190 50" /> <!-- Crescent -->
      <!-- Bottom Moons (Mirrored) -->
      <path d="M 110 410 A 10 10 0 1 0 110 430 A 7 10 0 0 1 110 410" />
      <circle cx="150" cy="420" r="10" fill="url(#goldFiligree)" />
      <path d="M 190 410 A 10 10 0 1 1 190 430 A 7 10 0 0 0 190 410" />
    </g>

    <!-- Central Mandalas and Mystic Eye (Reversible Center) -->
    <g transform="translate(150, 240)">
      <circle cx="0" cy="0" r="110" fill="none" stroke="url(#goldFiligree)" stroke-width="0.8" opacity="0.4" />
      <circle cx="0" cy="0" r="95" fill="none" stroke="#d4af37" stroke-dasharray="4, 4" stroke-width="0.6" opacity="0.6" />
      <circle cx="0" cy="0" r="80" fill="none" stroke="url(#goldFiligree)" stroke-width="1.2" opacity="0.8" />
      <circle cx="0" cy="0" r="50" fill="url(#eyeGlow)" />

      <!-- Concentric 8-pointed Stars -->
      <g stroke="url(#goldFiligree)" fill="none" stroke-width="1">
        <polygon points="0,-80 56,-56 80,0 56,56 0,80 -56,56 -80,0 -56,-56" opacity="0.5" />
        <polygon points="0,-80 18,-24 74,-24 30,12 46,68 0,34 -46,68 -30,12 -74,-24 -18,-24" fill="#ffd56b" fill-opacity="0.12" stroke-width="1.2" />
        <polygon points="0,-60 14,-18 56,-18 22,9 35,51 0,26 -35,51 -22,9 -56,-18 -14,-18" fill="none" stroke="#e0b84c" stroke-width="0.8" />
      </g>

      <!-- Center Mystic Eye -->
      <ellipse cx="0" cy="0" rx="32" ry="18" fill="#14142b" stroke="url(#goldFiligree)" stroke-width="1.6" />
      <circle cx="0" cy="0" r="13" fill="#06060c" stroke="#ffd56b" stroke-width="1" />
      <circle cx="0" cy="0" r="6" fill="#ffd700" />
      <circle cx="-2" cy="-2" r="2" fill="#ffffff" />
      <!-- Star rays from pupil -->
      <path d="M 0 -24 L 0 -18 M 0 18 L 0 24 M -36 0 L -32 0 M 32 0 L 36 0" stroke="url(#goldFiligree)" stroke-width="1.2" />
    </g>
  </svg>\`;
}

/**
 * Base Card Template Generator
 * Wraps card illustration in deep dark atmospheric cardstock, ornate filigree frame,
 * header title banner, esoteric title, element badge, and Roman numeral.
 */
function createCardFrame(card, artworkSvg) {
  const isMajor = card.arcana === "major";
  const numText = card.number || "";
  const nameText = card.name || "";
  const esotericTitle = card.esotericTitle || "";
  const element = card.element || "";

  // Element color themes
  let themeGradStart = "#181424";
  let themeGradMid = "#100d18";
  let themeGradEnd = "#07050a";
  let accentColor = "#d4af37";
  let accentSecondary = "#ffe599";

  if (card.suit === "wands" || element.includes("Fire")) {
    themeGradStart = "#2e0f0a";
    themeGradMid = "#1b0806";
    themeGradEnd = "#090202";
    accentColor = "#e67e22";
    accentSecondary = "#f39c12";
  } else if (card.suit === "cups" || element.includes("Water")) {
    themeGradStart = "#0c1d2e";
    themeGradMid = "#07121e";
    themeGradEnd = "#03080d";
    accentColor = "#3498db";
    accentSecondary = "#5dade2";
  } else if (card.suit === "swords" || element.includes("Air")) {
    themeGradStart = "#1b192e";
    themeGradMid = "#100f1c";
    themeGradEnd = "#08070e";
    accentColor = "#9b59b6";
    accentSecondary = "#bb8fce";
  } else if (card.suit === "pentacles" || element.includes("Earth")) {
    themeGradStart = "#11261a";
    themeGradMid = "#0b1810";
    themeGradEnd = "#040b07";
    accentColor = "#27ae60";
    accentSecondary = "#52be80";
  }

  return \`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 480" width="300" height="480" class="tarot-card-svg tarot-front" data-id="\${card.id}">
    <defs>
      <linearGradient id="bgGrad_\${card.id}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="\${themeGradStart}" />
        <stop offset="50%" stop-color="\${themeGradMid}" />
        <stop offset="100%" stop-color="\${themeGradEnd}" />
      </linearGradient>
      <linearGradient id="goldLine_\${card.id}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#ffd56b" />
        <stop offset="50%" stop-color="#d4af37" />
        <stop offset="100%" stop-color="#8a6d1c" />
      </linearGradient>
      <radialGradient id="centerAura_\${card.id}" cx="50%" cy="45%" r="48%">
        <stop offset="0%" stop-color="\${accentSecondary}" stop-opacity="0.18" />
        <stop offset="60%" stop-color="\${accentColor}" stop-opacity="0.06" />
        <stop offset="100%" stop-color="#000000" stop-opacity="0" />
      </radialGradient>
      <clipPath id="artClip_\${card.id}">
        <rect x="22" y="60" width="256" height="340" rx="8" />
      </clipPath>
    </defs>

    <!-- Card Background -->
    <rect width="300" height="480" rx="16" fill="url(#bgGrad_\${card.id})" stroke="#050505" stroke-width="1.5" />
    <rect x="6" y="6" width="288" height="468" rx="12" fill="none" stroke="url(#goldLine_\${card.id})" stroke-width="1.2" opacity="0.85" />
    <rect x="12" y="12" width="276" height="456" rx="9" fill="none" stroke="#ffd56b" stroke-dasharray="2, 4" stroke-width="0.6" opacity="0.5" />

    <!-- Corner Ornaments -->
    <g stroke="url(#goldLine_\${card.id})" fill="none" stroke-width="1">
      <path d="M 12 30 C 18 30 26 22 26 12" />
      <path d="M 288 30 C 282 30 274 22 274 12" />
      <path d="M 12 450 C 18 450 26 458 26 468" />
      <path d="M 288 450 C 282 450 274 458 274 468" />
      <circle cx="20" cy="20" r="1.5" fill="#ffd56b" />
      <circle cx="280" cy="20" r="1.5" fill="#ffd56b" />
      <circle cx="20" cy="460" r="1.5" fill="#ffd56b" />
      <circle cx="280" cy="460" r="1.5" fill="#ffd56b" />
    </g>

    <!-- Header: Roman Numeral & Arcana Banner -->
    <g transform="translate(150, 36)" text-anchor="middle">
      <rect x="-85" y="-18" width="170" height="24" rx="4" fill="#0d0a14" stroke="url(#goldLine_\${card.id})" stroke-width="0.8" opacity="0.9" />
      <text y="-2" font-family="'Cinzel Decorative', 'Cinzel', 'Georgia', serif" font-size="13" font-weight="700" fill="#ffd56b" letter-spacing="2.5">
        \${escapeXml(numText)}
      </text>
    </g>

    <!-- Artwork Viewport -->
    <g>
      <!-- Art Frame Background & Aura Glow -->
      <rect x="22" y="60" width="256" height="340" rx="8" fill="#090810" stroke="url(#goldLine_\${card.id})" stroke-width="1.2" />
      <rect x="22" y="60" width="256" height="340" rx="8" fill="url(#centerAura_\${card.id})" />

      <!-- Clipped Illustration Canvas -->
      <g clip-path="url(#artClip_\${card.id})">
        \${artworkSvg}
      </g>

      <!-- Inner Art Frame Filigree -->
      <rect x="26" y="64" width="248" height="332" rx="6" fill="none" stroke="#d4af37" stroke-dasharray="3, 3" stroke-width="0.5" opacity="0.4" />
    </g>

    <!-- Footer: Card Name & Esoteric Title -->
    <g transform="translate(150, 428)" text-anchor="middle">
      <!-- Title Plate -->
      <rect x="-120" y="-16" width="240" height="30" rx="5" fill="#0a0812" stroke="url(#goldLine_\${card.id})" stroke-width="1" />
      <text y="4" font-family="'Cinzel', 'Georgia', serif" font-size="11.5" font-weight="700" fill="#fdf2d0" letter-spacing="1.2">
        \${escapeXml(nameText.toUpperCase())}
      </text>
      <!-- Sub-label -->
      <text y="28" font-family="'Cormorant Garamond', 'Georgia', serif" font-size="9" font-style="italic" fill="#c4aa6a" letter-spacing="0.8">
        \${escapeXml(esotericTitle)}
      </text>
    </g>
  </svg>\`;
}

// -------------------------------------------------------------
// MAJOR ARCANA ORIGINAL VECTOR ARTWORKS (22 bespoke illustrations)
// -------------------------------------------------------------
const majorArtworks = {
  // 0: The Fool
  maj_00: \`
    <g transform="translate(150, 230)">
      <!-- Cliff Crag -->
      <path d="M -130 170 L -40 30 L -20 30 L -10 170 Z" fill="#1b172b" stroke="#ffd56b" stroke-width="0.8" />
      <!-- Starry Cosmic Precipice Void -->
      <circle cx="40" cy="-60" r="1.5" fill="#fff" /><circle cx="70" cy="-100" r="2" fill="#ffd56b" />
      <circle cx="-80" cy="-80" r="1.2" fill="#fff" /><circle cx="90" cy="10" r="1" fill="#fff" />
      <!-- Solar Spiral Portal -->
      <path d="M 40 -60 Q 60 -40 80 -70 T 110 -50" fill="none" stroke="#ffd56b" stroke-width="1" stroke-dasharray="2,2" opacity="0.6" />
      <circle cx="40" cy="-60" r="45" fill="none" stroke="#ffd56b" stroke-width="0.5" opacity="0.3" />
      <!-- The Wanderer Silhouette -->
      <path d="M -30 25 L -20 -30 L -15 -50 Q -10 -58 -20 -60 Q -30 -58 -25 -50 L -20 -30" fill="none" stroke="#f5c760" stroke-width="3" stroke-linecap="round" />
      <circle cx="-18" cy="-58" r="7" fill="#ffd56b" />
      <!-- Pilgrim Staff & Cosmic Satchel -->
      <line x1="-35" y1="25" x2="-2" y2="-90" stroke="#d4af37" stroke-width="1.8" />
      <circle cx="-8" cy="-75" r="9" fill="#e67e22" stroke="#ffd56b" stroke-width="1" />
      <!-- Daring Step Forward into Abyss -->
      <path d="M -20 -30 L 10 0 L 18 10" stroke="#f5c760" stroke-width="2.5" stroke-linecap="round" />
      <path d="M -20 -30 L -28 5 L -35 25" stroke="#f5c760" stroke-width="2.5" stroke-linecap="round" />
      <!-- White Butterfly / Star Guiding the Step -->
      <path d="M 28 -5 Q 35 -15 42 -5 Q 35 5 28 -5 Z" fill="#ffffff" opacity="0.9" />
      <path d="M 28 -5 Q 21 -15 14 -5 Q 21 5 28 -5 Z" fill="#ffffff" opacity="0.9" />
      <circle cx="28" cy="-5" r="1.5" fill="#ffd700" />
      <!-- Rose in hand -->
      <circle cx="-25" cy="-35" r="4" fill="#ffffff" stroke="#ffd56b" stroke-width="0.8" />
    </g>
  \`,

  // 1: The Magician
  maj_01: \`
    <g transform="translate(150, 230)">
      <!-- Golden Lemniscate (Infinity) -->
      <path d="M -28 -95 C -45 -95 -45 -75 -28 -75 C -10 -75 10 -95 28 -95 C 45 -95 45 -75 28 -75 C 10 -75 -10 -95 -28 -95 Z" fill="none" stroke="#ffd56b" stroke-width="2.2" />
      <circle cx="0" cy="-85" r="3" fill="#ffd700" />
      <!-- Magus Head and Robe -->
      <circle cx="0" cy="-55" r="11" fill="#f5c760" />
      <path d="M -15 -40 L 15 -40 L 25 30 L -25 30 Z" fill="#9b2323" stroke="#ffd56b" stroke-width="1.2" />
      <!-- Right Arm Pointing Up (Golden Wand) -->
      <path d="M 12 -35 L 35 -65 L 40 -90" stroke="#f5c760" stroke-width="2.5" stroke-linecap="round" fill="none" />
      <polygon points="40,-105 38,-90 42,-90" fill="#ffd700" />
      <circle cx="40" cy="-105" r="3" fill="#ffffff" />
      <!-- Left Arm Pointing Down (Athame) -->
      <path d="M -12 -35 L -35 -10 L -40 20" stroke="#f5c760" stroke-width="2.5" stroke-linecap="round" fill="none" />
      <polygon points="-40,32 -38,20 -42,20" fill="#90e0ef" stroke="#ffd56b" stroke-width="0.5" />
      <!-- Altar Table of Four Elements -->
      <polygon points="-65,70 65,70 50,115 -50,115" fill="#1b1424" stroke="#ffd56b" stroke-width="1.2" />
      <!-- 4 Elemental Tools on Altar -->
      <!-- Wand -->
      <line x1="-40" y1="65" x2="-20" y2="65" stroke="#e67e22" stroke-width="2.5" />
      <!-- Cup -->
      <path d="M -10 68 Q -5 68 -5 60 L -15 60 Q -15 68 -10 68 Z M -10 68 L -10 71 M -14 71 L -6 71" stroke="#3498db" stroke-width="1.2" fill="#3498db" />
      <!-- Sword -->
      <line x1="8" y1="58" x2="8" y2="72" stroke="#b8c0ff" stroke-width="1.5" />
      <line x1="5" y1="62" x2="11" y2="62" stroke="#d4af37" stroke-width="1" />
      <!-- Pentacle Coin -->
      <circle cx="35" cy="65" r="6" fill="#27ae60" stroke="#ffd56b" stroke-width="1" />
      <!-- Ouroboros Serpent around altar -->
      <circle cx="0" cy="135" r="16" fill="none" stroke="#27ae60" stroke-width="2" stroke-dasharray="3, 1" />
    </g>
  \`,

  // 2: The High Priestess
  maj_02: \`
    <g transform="translate(150, 230)">
      <!-- Twin Pillars: Boaz (Dark) and Jachin (Light) -->
      <!-- Pillar B (Left - Black/Shadow) -->
      <rect x="-85" y="-120" width="24" height="250" fill="#0d0b14" stroke="#ffd56b" stroke-width="1" />
      <rect x="-90" y="-130" width="34" height="10" fill="#1a1528" stroke="#ffd56b" stroke-width="0.8" />
      <text x="-73" y="-30" font-family="'Cinzel', serif" font-size="16" font-weight="700" fill="#8877a0" text-anchor="middle">B</text>
      <!-- Pillar J (Right - White/Gold) -->
      <rect x="61" y="-120" width="24" height="250" fill="#ede8d0" stroke="#ffd56b" stroke-width="1" />
      <rect x="56" y="-130" width="34" height="10" fill="#fdfaf0" stroke="#ffd56b" stroke-width="0.8" />
      <text x="73" y="-30" font-family="'Cinzel', serif" font-size="16" font-weight="700" fill="#9e8432" text-anchor="middle">J</text>
      <!-- Pomegranate Tapestry Veil -->
      <path d="M -60 -115 L 60 -115 L 60 70 L -60 70 Z" fill="#140e20" stroke="#d4af37" stroke-width="0.6" stroke-dasharray="2, 4" />
      <circle cx="-30" cy="-60" r="4" fill="#a01a35" /><circle cx="30" cy="-60" r="4" fill="#a01a35" />
      <circle cx="0" cy="-20" r="5" fill="#a01a35" />
      <!-- Seated Priestess Figure -->
      <path d="M -25 90 L -18 -30 L 18 -30 L 25 90 Z" fill="#253550" stroke="#5dade2" stroke-width="1" />
      <circle cx="0" cy="-50" r="10" fill="#f5e6cc" />
      <!-- Horned Isis Moon Crown -->
      <path d="M -16 -68 C -10 -58 0 -58 0 -58 C 0 -58 10 -58 16 -68 C 12 -60 0 -60 -16 -68 Z" fill="#ffd700" stroke="#ffd56b" stroke-width="0.8" />
      <circle cx="0" cy="-64" r="5" fill="#ffffff" stroke="#ffd700" stroke-width="1" />
      <!-- Sacred TORA Scroll in lap -->
      <rect x="-18" y="20" width="36" height="14" rx="2" fill="#fdf4dc" stroke="#9a7b1c" stroke-width="1" />
      <text x="0" y="31" font-family="'Cinzel', serif" font-size="8" font-weight="700" fill="#4a3710" text-anchor="middle">TORA</text>
      <!-- Lunar Crescent at feet -->
      <path d="M -25 110 C 0 125 0 125 25 110 C 15 130 -15 130 -25 110 Z" fill="#ffd56b" />
    </g>
  \`,

  // 3: The Empress
  maj_03: \`
    <g transform="translate(150, 230)">
      <!-- Lush Forest & Flowing River Waterfall -->
      <path d="M -110 160 Q -30 90 0 160 Q 30 90 110 160 Z" fill="#1b4332" />
      <path d="M -10 60 Q 15 100 0 160 Q -25 100 -10 60 Z" fill="#5dade2" opacity="0.8" />
      <!-- Golden Sheaves of Wheat -->
      <path d="M -85 140 Q -80 90 -95 70 M -75 140 Q -70 95 -75 75 M -65 140 Q -60 100 -55 80" stroke="#ffd56b" stroke-width="2" fill="none" />
      <path d="M 85 140 Q 80 90 95 70 M 75 140 Q 70 95 75 75 M 65 140 Q 60 100 55 80" stroke="#ffd56b" stroke-width="2" fill="none" />
      <!-- Enthroned Empress -->
      <path d="M -35 80 L -20 -35 L 20 -35 L 35 80 Z" fill="#78281f" stroke="#ffd56b" stroke-width="1.2" />
      <circle cx="0" cy="-55" r="12" fill="#fae5d3" />
      <!-- Diadem of Twelve Stars Arc -->
      <g fill="#ffd700">
        <circle cx="-25" cy="-80" r="2.2" /><circle cx="-16" cy="-88" r="2.2" /><circle cx="-6" cy="-92" r="2.2" />
        <circle cx="6" cy="-92" r="2.2" /><circle cx="16" cy="-88" r="2.2" /><circle cx="25" cy="-80" r="2.2" />
      </g>
      <!-- Scepter of Dominion in Hand -->
      <line x1="18" y1="-30" x2="35" y2="-65" stroke="#ffd700" stroke-width="2" />
      <circle cx="37" cy="-68" r="4" fill="#ffd700" />
      <!-- Heart-Shaped Venus Shield at side -->
      <path d="M -50 40 C -65 20 -40 10 -50 35 C -60 10 -35 20 -50 40 Z" fill="#c0392b" stroke="#ffd56b" stroke-width="1.2" transform="scale(1.2) translate(10,-10)" />
      <!-- Venus Symbol -->
      <circle cx="-42" cy="45" r="5" fill="none" stroke="#ffd700" stroke-width="1.2" />
      <line x1="-42" y1="50" x2="-42" y2="58" stroke="#ffd700" stroke-width="1.2" />
      <line x1="-46" y1="54" x2="-38" y2="54" stroke="#ffd700" stroke-width="1.2" />
    </g>
  \`,

  // 4: The Emperor
  maj_04: \`
    <g transform="translate(150, 230)">
      <!-- Rugged Crimson Mountain Peaks -->
      <polygon points="-110,60 -60,-40 -10,60" fill="#4a1515" stroke="#78281f" stroke-width="1" />
      <polygon points="10,60 60,-50 110,60" fill="#5c1d1d" stroke="#78281f" stroke-width="1" />
      <polygon points="-40,60 0,-70 40,60" fill="#380d0d" stroke="#78281f" stroke-width="1" />
      <!-- Cubic Stone Throne carved with Ram Heads -->
      <rect x="-55" y="-50" width="110" height="180" fill="#211f24" stroke="#ffd56b" stroke-width="1.5" />
      <!-- Ram Heads on Armrests -->
      <circle cx="-48" cy="-40" r="8" fill="#d4af37" /><circle cx="48" cy="-40" r="8" fill="#d4af37" />
      <!-- Enthroned Sovereign Monarch -->
      <path d="M -30 110 L -22 -10 L 22 -10 L 30 110 Z" fill="#900c3f" stroke="#ffd56b" stroke-width="1.2" />
      <!-- Long White Patriarchal Beard -->
      <path d="M -8 -15 Q 0 25 8 -15 Z" fill="#eaeded" stroke="#d5dbdb" stroke-width="0.8" />
      <circle cx="0" cy="-30" r="10" fill="#f5cba7" />
      <!-- Imperial Crown -->
      <polygon points="-12,-40 -8,-52 0,-44 8,-52 12,-40" fill="#ffd700" stroke="#d4af37" stroke-width="1" />
      <!-- Ankh Scepter of Life in Right Hand -->
      <g transform="translate(35, 10)">
        <circle cx="0" cy="-12" r="5" fill="none" stroke="#ffd700" stroke-width="2" />
        <line x1="0" y1="-7" x2="0" y2="25" stroke="#ffd700" stroke-width="2" />
        <line x1="-7" y1="0" x2="7" y2="0" stroke="#ffd700" stroke-width="2" />
      </g>
      <!-- Orb of Sovereign Dominion in Left Hand -->
      <circle cx="-35" cy="20" r="7" fill="#ffd700" stroke="#b7950b" stroke-width="1" />
      <line x1="-35" y1="13" x2="-35" y2="10" stroke="#ffd700" stroke-width="1.5" />
    </g>
  \`,

  // 5: The Hierophant
  maj_05: \`
    <g transform="translate(150, 230)">
      <!-- Temple Sanctuary Pillars -->
      <rect x="-85" y="-120" width="18" height="240" fill="#2c2836" stroke="#ffd56b" stroke-width="0.8" />
      <rect x="67" y="-120" width="18" height="240" fill="#2c2836" stroke="#ffd56b" stroke-width="0.8" />
      <!-- Seated Hierophant Figure in Sacramental Vestments -->
      <path d="M -30 100 L -18 -20 L 18 -20 L 30 100 Z" fill="#881122" stroke="#ffd56b" stroke-width="1.2" />
      <!-- Triple Papal Cross Staff (Left Hand) -->
      <g transform="translate(-40, -10)">
        <line x1="0" y1="-70" x2="0" y2="90" stroke="#ffd700" stroke-width="2" />
        <line x1="-14" y1="-55" x2="14" y2="-55" stroke="#ffd700" stroke-width="2" />
        <line x1="-10" y1="-45" x2="10" y2="-45" stroke="#ffd700" stroke-width="2" />
        <line x1="-6" y1="-35" x2="6" y2="-35" stroke="#ffd700" stroke-width="2" />
      </g>
      <!-- Right Hand in Sacred Benediction -->
      <circle cx="28" cy="-15" r="4" fill="#fae5d3" />
      <!-- Triple Tiara -->
      <g transform="translate(0, -60)">
        <ellipse cx="0" cy="0" rx="14" ry="4" fill="#ffd700" stroke="#b7950b" stroke-width="1" />
        <ellipse cx="0" cy="-8" rx="11" ry="3.5" fill="#ffd700" stroke="#b7950b" stroke-width="1" />
        <ellipse cx="0" cy="-16" rx="8" ry="3" fill="#ffd700" stroke="#b7950b" stroke-width="1" />
        <polygon points="0,-24 -3,-18 3,-18" fill="#ffd700" />
      </g>
      <circle cx="0" cy="-40" r="10" fill="#fae5d3" />
      <!-- Crossed Keys of Peter / Solomon at Dais -->
      <g transform="translate(0, 115)">
        <line x1="-20" y1="-15" x2="20" y2="15" stroke="#ffd700" stroke-width="2.5" />
        <line x1="-20" y1="15" x2="20" y2="-15" stroke="#ffd700" stroke-width="2.5" />
        <circle cx="-20" cy="-15" r="4" fill="none" stroke="#ffd700" stroke-width="2" />
        <circle cx="20" cy="-15" r="4" fill="none" stroke="#ffd700" stroke-width="2" />
      </g>
      <!-- Twin Kneeling Acolytes -->
      <circle cx="-50" cy="90" r="6" fill="#f5cba7" /><path d="M -60 120 L -50 96 L -40 120 Z" fill="#2980b9" />
      <circle cx="50" cy="90" r="6" fill="#f5cba7" /><path d="M 40 120 L 50 96 L 60 120 Z" fill="#27ae60" />
    </g>
  \`,

  // 6: The Lovers
  maj_06: \`
    <g transform="translate(150, 230)">
      <!-- Radiant Golden Sun of Raphael -->
      <circle cx="0" cy="-90" r="28" fill="#f39c12" stroke="#ffd56b" stroke-width="1.5" />
      <g stroke="#ffd56b" stroke-width="1.2">
        <line x1="0" y1="-125" x2="0" y2="-118" /><line x1="28" y1="-118" x2="22" y2="-112" />
        <line x1="-28" y1="-118" x2="-22" y2="-112" /><line x1="38" y1="-90" x2="30" y2="-90" />
        <line x1="-38" y1="-90" x2="-30" y2="-90" />
      </g>
      <!-- Winged Angel Raphael with Outstretched Arms -->
      <path d="M -65 -60 Q -30 -100 0 -65 Q 30 -100 65 -60 Q 20 -45 0 -45 Q -20 -45 -65 -60 Z" fill="#9b59b6" stroke="#ffd56b" stroke-width="1" />
      <circle cx="0" cy="-60" r="8" fill="#f5cba7" />
      <!-- Two Figures (Feminine & Masculine) -->
      <!-- Woman under Tree of Knowledge with Serpent -->
      <g transform="translate(-45, 60)">
        <path d="M -20 -60 Q -30 -20 -20 20" stroke="#27ae60" stroke-width="4" fill="none" />
        <!-- Coiled Serpent -->
        <path d="M -20 -40 Q -15 -35 -20 -30 Q -25 -25 -20 -20" stroke="#f1c40f" stroke-width="2" fill="none" />
        <circle cx="10" cy="-30" r="7" fill="#fbeee6" />
        <path d="M 5 -20 L 15 -20 L 20 40 L 0 40 Z" fill="#fdedec" stroke="#ffd56b" stroke-width="0.8" />
      </g>
      <!-- Man under Tree of Life (12 flames) -->
      <g transform="translate(45, 60)">
        <line x1="20" y1="-50" x2="20" y2="20" stroke="#784212" stroke-width="3" />
        <circle cx="20" cy="-55" r="4" fill="#e74c3c" /><circle cx="15" cy="-45" r="3" fill="#e67e22" /><circle cx="25" cy="-38" r="3" fill="#f39c12" />
        <circle cx="-10" cy="-30" r="7" fill="#fbeee6" />
        <path d="M -15 -20 L -5 -20 L 0 40 L -20 40 Z" fill="#ebedef" stroke="#ffd56b" stroke-width="0.8" />
      </g>
      <!-- Mountain Peak of Spiritual Ascent between them -->
      <polygon points="-25,120 0,55 25,120" fill="#6c3483" stroke="#ffd56b" stroke-width="0.8" />
    </g>
  \`,

  // 7: The Chariot
  maj_07: \`
    <g transform="translate(150, 230)">
      <!-- Star-Studded Canopy -->
      <path d="M -60 -100 L 60 -100 L 50 -70 L -50 -70 Z" fill="#1b2631" stroke="#ffd56b" stroke-width="1.2" />
      <circle cx="-30" cy="-85" r="1.5" fill="#ffd700" /><circle cx="0" cy="-85" r="2" fill="#ffd700" /><circle cx="30" cy="-85" r="1.5" fill="#ffd700" />
      <!-- Armored Charioteer -->
      <circle cx="0" cy="-50" r="9" fill="#f5cba7" />
      <polygon points="-8,-60 0,-68 8,-60 0,-57" fill="#ffd700" /> <!-- Star Crown -->
      <!-- Cuirass Armor with Moon Epaulets -->
      <path d="M -16 -40 L 16 -40 L 20 0 L -20 0 Z" fill="#d4ac0d" stroke="#ffd56b" stroke-width="1" />
      <circle cx="-18" cy="-38" r="4" fill="#f4d03f" /><circle cx="18" cy="-38" r="4" fill="#f4d03f" />
      <line x1="18" y1="-20" x2="35" y2="-50" stroke="#ffd700" stroke-width="2" /> <!-- Wand of Will -->
      <!-- The Cubic Stone Chariot with Winged Sun Disk -->
      <rect x="-55" y="0" width="110" height="75" fill="#2c3e50" stroke="#ffd56b" stroke-width="1.5" />
      <!-- Winged Sun Shield -->
      <circle cx="0" cy="35" r="8" fill="#e74c3c" stroke="#ffd700" stroke-width="1" />
      <path d="M -25 35 Q -10 25 0 35 Q 10 25 25 35" stroke="#ffd700" stroke-width="1.5" fill="none" />
      <!-- Twin Sphinxes (Black Shadow & White Solar) -->
      <!-- Black Sphinx (Left) -->
      <path d="M -65 75 Q -50 90 -45 125 L -80 125 Z" fill="#0b0a10" stroke="#ffd56b" stroke-width="1" />
      <circle cx="-55" cy="85" r="6" fill="#17202a" stroke="#ffd56b" stroke-width="0.8" />
      <!-- White Sphinx (Right) -->
      <path d="M 65 75 Q 50 90 45 125 L 80 125 Z" fill="#f4f6f7" stroke="#ffd56b" stroke-width="1" />
      <circle cx="55" cy="85" r="6" fill="#eaecee" stroke="#ffd56b" stroke-width="0.8" />
    </g>
  \`,

  // 8: Strength
  maj_08: \`
    <g transform="translate(150, 230)">
      <!-- Radiant Infinity Halo -->
      <path d="M -24 -90 C -38 -90 -38 -72 -24 -72 C -8 -72 8 -90 24 -90 C 38 -90 38 -72 24 -72 C 8 -72 -8 -90 -24 -90 Z" fill="none" stroke="#ffd56b" stroke-width="2" />
      <!-- The Serene Maiden -->
      <circle cx="-15" cy="-55" r="9" fill="#fae5d3" />
      <path d="M -25 -45 L -5 -45 L 5 45 L -35 45 Z" fill="#fdfefe" stroke="#ffd56b" stroke-width="1" />
      <!-- Garland of Wild Roses around Maiden and Lion -->
      <path d="M -30 -30 Q 10 0 35 25" stroke="#27ae60" stroke-width="2" fill="none" />
      <circle cx="-10" cy="-15" r="3.5" fill="#e74c3c" /><circle cx="10" cy="5" r="3.5" fill="#e74c3c" /><circle cx="28" cy="20" r="3.5" fill="#e74c3c" />
      <!-- The Golden Celestial Lion -->
      <g transform="translate(25, 40)">
        <!-- Lion Head & Mane -->
        <ellipse cx="0" cy="0" rx="26" ry="24" fill="#b9770e" stroke="#ffd56b" stroke-width="1" />
        <ellipse cx="0" cy="5" rx="16" ry="14" fill="#d68910" />
        <!-- Lion Muzzle being gently closed by Maiden's hand -->
        <ellipse cx="-8" cy="8" rx="7" ry="5" fill="#f5b041" />
        <ellipse cx="2" cy="8" rx="7" ry="5" fill="#f5b041" />
        <polygon points="-3,5 -6,2 0,2" fill="#784212" />
        <!-- Maiden's Hand gently caressing Lion's Jaw -->
        <path d="M -22 -10 Q -10 -5 -3 5" stroke="#fae5d3" stroke-width="2.5" stroke-linecap="round" fill="none" />
      </g>
    </g>
  \`,

  // 9: The Hermit
  maj_09: \`
    <g transform="translate(150, 230)">
      <!-- Icy Mountain Pinnacle Crag -->
      <polygon points="-80,150 0,60 80,150" fill="#1b2631" stroke="#5dade2" stroke-width="0.8" />
      <polygon points="-20,60 0,25 20,60" fill="#2c3e50" />
      <!-- Cloaked Hermit in Deep Gray Robe -->
      <path d="M -25 70 L -12 -30 L 15 -30 L 25 70 Z" fill="#2b2d42" stroke="#8d99ae" stroke-width="1" />
      <!-- Deep Monk Cowl Hood -->
      <path d="M -15 -30 C -15 -55 12 -55 15 -30 Z" fill="#1f202e" stroke="#ffd56b" stroke-width="0.8" />
      <path d="M -5 -30 Q 0 -10 5 -30" fill="#eaeded" /> <!-- Beard -->
      <!-- Upraised Hexagonal Lantern of Truth (Left Hand) -->
      <g transform="translate(36, -30)">
        <line x1="-15" y1="0" x2="0" y2="-20" stroke="#f5cba7" stroke-width="2" />
        <polygon points="-12,-20 12,-20 8,15 -8,15" fill="#fef9e7" stroke="#ffd700" stroke-width="1.2" />
        <!-- Radiant Six-Pointed Star of Hermes inside -->
        <polygon points="0,-12 8,2 -8,2" fill="#f39c12" />
        <polygon points="0,6 8,-8 -8,-8" fill="#f39c12" />
        <!-- Lantern Rays -->
        <circle cx="0" cy="-3" r="28" fill="none" stroke="#ffd56b" stroke-width="0.5" stroke-dasharray="3, 3" opacity="0.6" />
      </g>
      <!-- Pilgrim Staff of Long Journey (Right Hand) -->
      <line x1="-28" y1="-25" x2="-35" y2="120" stroke="#784212" stroke-width="2.5" />
    </g>
  \`,

  // 10: Wheel of Fortune
  maj_10: \`
    <g transform="translate(150, 230)">
      <!-- The Grand Eight-Spoked Cosmic Wheel -->
      <circle cx="0" cy="0" r="68" fill="#151324" stroke="#ffd56b" stroke-width="2.2" />
      <circle cx="0" cy="0" r="48" fill="none" stroke="#d4af37" stroke-dasharray="4, 4" stroke-width="1" />
      <circle cx="0" cy="0" r="18" fill="#0d0a14" stroke="#ffd56b" stroke-width="1.8" />
      <!-- Eight Spikes/Spokes -->
      <g stroke="#ffd700" stroke-width="1.5">
        <line x1="0" y1="-68" x2="0" y2="68" />
        <line x1="-68" y1="0" x2="68" y2="0" />
        <line x1="-48" y1="-48" x2="48" y2="48" />
        <line x1="-48" y1="48" x2="48" y2="-48" />
      </g>
      <!-- Mystic Glyphs (T-A-R-O) -->
      <text x="0" y="-52" font-family="'Cinzel', serif" font-size="10" font-weight="700" fill="#ffd56b" text-anchor="middle">T</text>
      <text x="56" y="4" font-family="'Cinzel', serif" font-size="10" font-weight="700" fill="#ffd56b" text-anchor="middle">A</text>
      <text x="0" y="60" font-family="'Cinzel', serif" font-size="10" font-weight="700" fill="#ffd56b" text-anchor="middle">R</text>
      <text x="-56" y="4" font-family="'Cinzel', serif" font-size="10" font-weight="700" fill="#ffd56b" text-anchor="middle">O</text>
      <!-- Golden Sphinx of Equilibrium at Apex -->
      <g transform="translate(0, -82)">
        <polygon points="-16,10 16,10 0,-15" fill="#f4d03f" stroke="#b7950b" stroke-width="1" />
        <line x1="8" y1="-12" x2="22" y2="-18" stroke="#ffd56b" stroke-width="1.5" /> <!-- Sword -->
      </g>
      <!-- Ascending Anubis (Right) & Descending Serpent Typhon (Left) -->
      <path d="M 68 30 Q 85 10 75 -20" stroke="#e67e22" stroke-width="3" fill="none" />
      <path d="M -68 -20 Q -85 10 -75 40" stroke="#27ae60" stroke-width="3" fill="none" />
    </g>
  \`,

  // 11: Justice
  maj_11: \`
    <g transform="translate(150, 230)">
      <!-- Stone Throne between Twin Pillars of Rectitude -->
      <rect x="-80" y="-110" width="16" height="230" fill="#2c2c34" stroke="#ffd56b" stroke-width="0.8" />
      <rect x="64" y="-110" width="16" height="230" fill="#2c2c34" stroke="#ffd56b" stroke-width="0.8" />
      <!-- Enthroned Sovereign Figure of Truth -->
      <path d="M -28 90 L -16 -20 L 16 -20 L 28 90 Z" fill="#922b21" stroke="#ffd56b" stroke-width="1.2" />
      <circle cx="0" cy="-45" r="10" fill="#fae5d3" />
      <!-- Golden Crown with Square Jewel -->
      <polygon points="-12,-55 -8,-65 0,-58 8,-65 12,-55" fill="#ffd700" stroke="#b7950b" stroke-width="1" />
      <rect x="-3" y="-53" width="6" height="6" fill="#2980b9" />
      <!-- Double-Edged Upright Broadsword (Right Hand) -->
      <g transform="translate(42, -15)">
        <line x1="0" y1="-65" x2="0" y2="30" stroke="#d5dbdb" stroke-width="2.5" />
        <line x1="-10" y1="12" x2="10" y2="12" stroke="#ffd700" stroke-width="2" />
        <circle cx="0" cy="30" r="3" fill="#ffd700" />
      </g>
      <!-- Golden Balanced Scales of Equity (Left Hand) -->
      <g transform="translate(-42, -5)">
        <line x1="-22" y1="-10" x2="22" y2="-10" stroke="#ffd700" stroke-width="1.8" />
        <!-- Left Pan -->
        <line x1="-18" y1="-10" x2="-22" y2="15" stroke="#ffd56b" stroke-width="0.8" />
        <line x1="-18" y1="-10" x2="-14" y2="15" stroke="#ffd56b" stroke-width="0.8" />
        <path d="M -26 15 Q -18 22 -10 15 Z" fill="#ffd700" />
        <!-- Right Pan -->
        <line x1="18" y1="-10" x2="14" y2="15" stroke="#ffd56b" stroke-width="0.8" />
        <line x1="18" y1="-10" x2="22" y2="15" stroke="#ffd56b" stroke-width="0.8" />
        <path d="M 10 15 Q 18 22 26 15 Z" fill="#ffd700" />
      </g>
    </g>
  \`,

  // 12: The Hanged Man
  maj_12: \`
    <g transform="translate(150, 230)">
      <!-- Living Tau Tree Cross -->
      <line x1="-80" y1="-110" x2="80" y2="-110" stroke="#5d4037" stroke-width="8" stroke-linecap="round" />
      <line x1="0" y1="-110" x2="0" y2="-130" stroke="#5d4037" stroke-width="8" />
      <!-- Sprouting Green Leaves on Dead Wood -->
      <circle cx="-50" cy="-118" r="3" fill="#27ae60" /><circle cx="50" cy="-118" r="3" fill="#27ae60" />
      <!-- Golden Tether from Right Ankle -->
      <line x1="0" y1="-110" x2="0" y2="-60" stroke="#ffd700" stroke-width="2.5" />
      <!-- Suspended Figure (Inverted) -->
      <!-- Legs forming number 4 -->
      <line x1="0" y1="-60" x2="0" y2="-10" stroke="#3498db" stroke-width="4" stroke-linecap="round" />
      <line x1="0" y1="-25" x2="25" y2="-25" stroke="#3498db" stroke-width="4" stroke-linecap="round" />
      <line x1="25" y1="-25" x2="0" y2="0" stroke="#3498db" stroke-width="4" stroke-linecap="round" />
      <!-- Torso in Crimson Vestment -->
      <path d="M -12 0 L 12 0 L 15 45 L -15 45 Z" fill="#e74c3c" stroke="#ffd56b" stroke-width="1" />
      <!-- Folded Arms forming Triangle behind back -->
      <path d="M -12 10 L -25 25 L 0 35 L 25 25 L 12 10" fill="none" stroke="#fae5d3" stroke-width="2.5" />
      <!-- Peaceful Face with Radiant Luminous Golden Halo -->
      <circle cx="0" cy="62" r="28" fill="none" stroke="#ffd56b" stroke-width="1.5" stroke-dasharray="2, 2" />
      <circle cx="0" cy="62" r="20" fill="#f9e79f" opacity="0.3" />
      <circle cx="0" cy="60" r="9" fill="#fae5d3" />
    </g>
  \`,

  // 13: Death
  maj_13: \`
    <g transform="translate(150, 230)">
      <!-- Twin Stone Towers framing rising Solar Dawn in Horizon -->
      <rect x="-85" y="20" width="20" height="70" fill="#17202a" stroke="#ffd56b" stroke-width="0.8" />
      <rect x="65" y="20" width="20" height="70" fill="#17202a" stroke="#ffd56b" stroke-width="0.8" />
      <circle cx="0" cy="60" r="16" fill="#f39c12" opacity="0.8" />
      <!-- Skeletal Harvester in Obsidian Armor -->
      <ellipse cx="0" cy="-35" r="11" fill="#eaeded" stroke="#17202a" stroke-width="1.2" /> <!-- Skull -->
      <circle cx="-4" cy="-36" r="2" fill="#000" /><circle cx="4" cy="-36" r="2" fill="#000" />
      <!-- Obsidian Breastplate -->
      <path d="M -18 -20 L 18 -20 L 22 45 L -22 45 Z" fill="#1b122c" stroke="#ffd56b" stroke-width="1.2" />
      <!-- Gleaming Crescent Scythe -->
      <line x1="-40" y1="90" x2="35" y2="-80" stroke="#784212" stroke-width="3" />
      <path d="M 35 -80 Q 75 -95 65 -60 Q 45 -70 35 -80 Z" fill="#d5dbdb" stroke="#ffd56b" stroke-width="1" />
      <!-- Mysterious Black Banner with Mystic Five-Petaled White Rose -->
      <g transform="translate(-45, -75)">
        <polygon points="0,0 55,-10 45,35 0,25" fill="#0c0914" stroke="#ffd56b" stroke-width="1" />
        <!-- Five-Petaled Rose -->
        <circle cx="26" cy="12" r="5" fill="#ffffff" stroke="#ffd700" stroke-width="0.8" />
        <circle cx="26" cy="12" r="2" fill="#ffd700" />
      </g>
    </g>
  \`,

  // 14: Temperance
  maj_14: \`
    <g transform="translate(150, 230)">
      <!-- Twin Elements: One Foot in Sacred Pool, One on Lush Earth -->
      <path d="M -100 130 Q -40 100 0 130 L -100 150 Z" fill="#27ae60" />
      <path d="M 0 130 Q 60 100 100 130 L 100 150 L 0 150 Z" fill="#2980b9" />
      <!-- Winged Angelic Being (Michael) -->
      <!-- Red/Gold Feathered Angel Wings -->
      <path d="M -85 -60 Q -35 -110 0 -40 Q 35 -110 85 -60 Q 30 -10 0 -10 Q -30 -10 -85 -60 Z" fill="#c0392b" stroke="#ffd56b" stroke-width="1.2" />
      <circle cx="0" cy="-55" r="10" fill="#fae5d3" />
      <!-- Solar Triangle upon the robe -->
      <path d="M -20 -40 L 20 -40 L 25 110 L -25 110 Z" fill="#fdfefe" stroke="#ffd56b" stroke-width="1" />
      <polygon points="0,-25 -8,-12 8,-12" fill="none" stroke="#f39c12" stroke-width="1.5" />
      <!-- Two Golden Chalices with Liquid Light Pouring Between -->
      <g transform="translate(-25, 0)">
        <polygon points="-8,-5 8,-5 5,10 -5,10" fill="#ffd700" stroke="#b7950b" stroke-width="1" />
      </g>
      <g transform="translate(25, 25)">
        <polygon points="-8,-5 8,-5 5,10 -5,10" fill="#ffd700" stroke="#b7950b" stroke-width="1" />
      </g>
      <!-- Continuous Stream of Liquid Light -->
      <path d="M -22 5 Q 0 12 25 22" stroke="#5dade2" stroke-width="3" fill="none" stroke-linecap="round" />
      <path d="M -22 5 Q 0 12 25 22" stroke="#ffffff" stroke-width="1" fill="none" stroke-linecap="round" />
    </g>
  \`,

  // 15: The Devil
  maj_15: \`
    <g transform="translate(150, 230)">
      <!-- Stone Cubic Pedestal with Iron Ring -->
      <rect x="-40" y="55" width="80" height="75" fill="#1c1924" stroke="#ffd56b" stroke-width="1.2" />
      <circle cx="0" cy="75" r="8" fill="none" stroke="#ffd700" stroke-width="2" />
      <!-- Loose Chains Leading to Captives -->
      <path d="M 0 75 Q -30 90 -45 115" stroke="#7f8c8d" stroke-width="1.8" fill="none" stroke-dasharray="2, 2" />
      <path d="M 0 75 Q 30 90 45 115" stroke="#7f8c8d" stroke-width="1.8" fill="none" stroke-dasharray="2, 2" />
      <!-- Horned Sovereign Entity (Baphomet Archetype) -->
      <!-- Bat Wings -->
      <path d="M -80 -40 Q -40 -90 -10 -40 L -40 -10 Z" fill="#2c1d2e" stroke="#e74c3c" stroke-width="1" />
      <path d="M 80 -40 Q 40 -90 10 -40 L 40 -10 Z" fill="#2c1d2e" stroke="#e74c3c" stroke-width="1" />
      <!-- Inverted Pentagram upon Brow -->
      <polygon points="0,-72 4,-62 14,-62 6,-56 9,-46 0,-52 -9,-46 -6,-56 -14,-62 -4,-62" fill="none" stroke="#ffd700" stroke-width="0.8" />
      <!-- Horns -->
      <path d="M -10 -65 Q -25 -85 -35 -75" stroke="#f39c12" stroke-width="3" fill="none" />
      <path d="M 10 -65 Q 25 -85 35 -75" stroke="#f39c12" stroke-width="3" fill="none" />
      <circle cx="0" cy="-45" r="11" fill="#4a235a" stroke="#ffd56b" stroke-width="1" />
      <!-- Torch of Ignorance Pointing Downward -->
      <line x1="28" y1="-10" x2="42" y2="25" stroke="#784212" stroke-width="2.5" />
      <path d="M 42 25 Q 46 35 40 38 Q 36 32 42 25 Z" fill="#e74c3c" />
    </g>
  \`,

  // 16: The Tower
  maj_16: \`
    <g transform="translate(150, 230)">
      <!-- Jagged Lightning Bolt of Illumination -->
      <polygon points="35,-125 15,-60 28,-55 -8,5 4,0 -20,60 -5,55 -30,110" fill="#ffd700" stroke="#f39c12" stroke-width="1.5" />
      <!-- The Tall Monolithic Stone Citadel -->
      <polygon points="-40,140 -25,-60 25,-60 40,140" fill="#1c2833" stroke="#ffd56b" stroke-width="1.5" />
      <!-- Shattered Crown Blown off the Top -->
      <polygon points="-28,-60 -20,-85 0,-70 20,-85 28,-60" fill="#f4d03f" stroke="#b7950b" stroke-width="1.2" transform="rotate(-25, 0, -70) translate(20, -15)" />
      <!-- Fire Erupting from Windows -->
      <ellipse cx="-10" cy="-20" rx="6" ry="12" fill="#e74c3c" stroke="#f39c12" stroke-width="1" />
      <ellipse cx="10" cy="20" rx="6" ry="12" fill="#e74c3c" stroke="#f39c12" stroke-width="1" />
      <ellipse cx="-12" cy="60" rx="6" ry="12" fill="#e74c3c" stroke="#f39c12" stroke-width="1" />
      <!-- Golden Sparks / Falling Yods of Grace -->
      <circle cx="-55" cy="-30" r="2" fill="#ffd700" /><circle cx="-65" cy="10" r="2.5" fill="#ffd700" />
      <circle cx="55" cy="-20" r="2" fill="#ffd700" /><circle cx="65" cy="40" r="2.5" fill="#ffd700" />
    </g>
  \`,

  // 17: The Star
  maj_17: \`
    <g transform="translate(150, 230)">
      <!-- Great Eight-Pointed Guiding Star of Hope -->
      <g transform="translate(0, -75)">
        <polygon points="0,-35 7,-9 33,-9 12,6 20,31 0,16 -20,31 -12,6 -33,-9 -7,-9" fill="#fdfefe" stroke="#ffd700" stroke-width="1" />
        <circle cx="0" cy="0" r="6" fill="#f4d03f" />
      </g>
      <!-- Seven Lesser Constellation Stars -->
      <circle cx="-60" cy="-90" r="2.5" fill="#ffd700" /><circle cx="-75" cy="-55" r="2.5" fill="#ffd700" />
      <circle cx="-45" cy="-40" r="2.5" fill="#ffd700" /><circle cx="60" cy="-90" r="2.5" fill="#ffd700" />
      <circle cx="75" cy="-55" r="2.5" fill="#ffd700" /><circle cx="45" cy="-40" r="2.5" fill="#ffd700" />
      <circle cx="0" cy="-20" r="2.5" fill="#ffd700" />
      <!-- Sacred Pool & Verdant Earth -->
      <path d="M -100 90 Q 0 60 100 90 L 100 150 L -100 150 Z" fill="#1b4f72" />
      <!-- Kneeling Maiden pouring two Urns of Living Water -->
      <circle cx="-5" cy="0" r="8" fill="#fae5d3" />
      <path d="M -12 10 L 2 10 L 8 60 L -18 60 Z" fill="#ebf5fb" stroke="#ffd56b" stroke-width="0.8" />
      <!-- Left Urn onto Earth -->
      <polygon points="-35,25 -20,25 -24,40 -31,40" fill="#f39c12" stroke="#ffd700" stroke-width="1" />
      <path d="M -28 40 Q -45 55 -55 85" stroke="#5dade2" stroke-width="2" fill="none" />
      <!-- Right Urn into Sacred Pool -->
      <polygon points="20,35 35,35 31,50 24,50" fill="#f39c12" stroke="#ffd700" stroke-width="1" />
      <path d="M 28 50 Q 35 70 30 100" stroke="#5dade2" stroke-width="2.5" fill="none" />
      <!-- Sacred Ibis Bird in Acacia Branch -->
      <circle cx="75" cy="30" r="3" fill="#ffffff" /><path d="M 75 30 L 85 33" stroke="#e67e22" stroke-width="1" />
    </g>
  \`,

  // 18: The Moon
  maj_18: \`
    <g transform="translate(150, 230)">
      <!-- The Radiant Moon with Contemplative Profile -->
      <circle cx="0" cy="-70" r="30" fill="#fcf3cf" stroke="#ffd56b" stroke-width="1.5" />
      <!-- Moon Rays & Dew Drops -->
      <g stroke="#f39c12" stroke-width="1.2">
        <line x1="0" y1="-110" x2="0" y2="-102" /><line x1="30" y1="-100" x2="24" y2="-94" />
        <line x1="-30" y1="-100" x2="-24" y2="-94" /><line x1="40" y1="-70" x2="32" y2="-70" />
        <line x1="-40" y1="-70" x2="-32" y2="-70" />
      </g>
      <!-- Twin Stone Watchtowers -->
      <rect x="-85" y="-15" width="22" height="90" fill="#1b2631" stroke="#ffd56b" stroke-width="1" />
      <polygon points="-90,-15 -85,-28 -74,-28 -74,-15 -63,-15 -63,-15" fill="#2c3e50" stroke="#ffd56b" stroke-width="0.8" />
      <rect x="63" y="-15" width="22" height="90" fill="#1b2631" stroke="#ffd56b" stroke-width="1" />
      <polygon points="58,-15 63,-28 74,-28 74,-15 85,-15 85,-15" fill="#2c3e50" stroke="#ffd56b" stroke-width="0.8" />
      <!-- Winding Path through Rolling Hills into the Mountains -->
      <path d="M 0 130 Q 30 80 0 40 Q -25 10 0 -20" stroke="#f4d03f" stroke-width="3" fill="none" stroke-dasharray="3, 3" />
      <!-- Howling Wolf & Dog -->
      <path d="M -45 50 L -35 25 L -30 35 L -25 50 Z" fill="#7f8c8d" /> <!-- Wolf -->
      <path d="M 45 50 L 35 25 L 30 35 L 25 50 Z" fill="#d35400" /> <!-- Dog -->
      <!-- Primeval Pool & Emerging Crayfish -->
      <ellipse cx="0" cy="135" rx="75" ry="25" fill="#0e6251" stroke="#5dade2" stroke-width="1" />
      <circle cx="0" cy="130" r="7" fill="#c0392b" stroke="#e74c3c" stroke-width="1" />
    </g>
  \`,

  // 19: The Sun
  maj_19: \`
    <g transform="translate(150, 230)">
      <!-- Giant Smiling Radiant Sun -->
      <circle cx="0" cy="-55" r="38" fill="#f39c12" stroke="#ffd56b" stroke-width="2" />
      <!-- Alternating Straight and Wavy Solar Rays -->
      <g stroke="#f1c40f" stroke-width="2">
        <line x1="0" y1="-105" x2="0" y2="-95" /><line x1="38" y1="-93" x2="31" y2="-86" />
        <line x1="-38" y1="-93" x2="-31" y2="-86" /><line x1="50" y1="-55" x2="40" y2="-55" />
        <line x1="-50" y1="-55" x2="-40" y2="-55" /><line x1="38" y1="-17" x2="31" y2="-24" />
        <line x1="-38" y1="-17" x2="-31" y2="-24" />
      </g>
      <!-- Sun Face Features -->
      <path d="M -15 -62 Q -10 -68 -5 -62 M 5 -62 Q 10 -68 15 -62" stroke="#78281f" stroke-width="1.5" fill="none" />
      <path d="M -12 -45 Q 0 -35 12 -45" stroke="#78281f" stroke-width="1.8" fill="none" />
      <!-- Wall of Sunflowers -->
      <rect x="-85" y="65" width="170" height="25" fill="#784212" stroke="#ffd56b" stroke-width="0.8" />
      <circle cx="-50" cy="55" r="8" fill="#f4d03f" /><circle cx="-50" cy="55" r="4" fill="#6e2c00" />
      <circle cx="0" cy="50" r="10" fill="#f4d03f" /><circle cx="0" cy="50" r="5" fill="#6e2c00" />
      <circle cx="50" cy="55" r="8" fill="#f4d03f" /><circle cx="50" cy="55" r="4" fill="#6e2c00" />
      <!-- Innocent Child Rider on White Steed with Crimson Banner -->
      <circle cx="0" cy="105" r="8" fill="#fae5d3" />
      <polygon points="12,85 45,75 35,115 12,105" fill="#c0392b" stroke="#ffd700" stroke-width="1" />
    </g>
  \`,

  // 20: Judgement
  maj_20: \`
    <g transform="translate(150, 230)">
      <!-- Swirling Celestial Clouds of Gabriel -->
      <path d="M -90 -100 Q 0 -130 90 -100 Q 50 -70 0 -80 Q -50 -70 -90 -100 Z" fill="#ebf5fb" opacity="0.8" />
      <!-- Archangel Gabriel with Great Golden Horn -->
      <circle cx="0" cy="-65" r="12" fill="#fae5d3" />
      <!-- Heraldic Trumpet pointing downward -->
      <polygon points="0,-60 12,0 8,0 0,-55" fill="#ffd700" stroke="#b7950b" stroke-width="1" />
      <!-- Heraldic Banner with Red Cross -->
      <rect x="10" y="-30" width="30" height="25" fill="#ffffff" stroke="#c0392b" stroke-width="1" />
      <line x1="25" y1="-30" x2="25" y2="-5" stroke="#c0392b" stroke-width="3" />
      <line x1="10" y1="-17" x2="40" y2="-17" stroke="#c0392b" stroke-width="3" />
      <!-- Sound Rays / Waves of Rebirth -->
      <path d="M 0 5 Q -30 25 -50 60 M 0 5 Q 30 25 50 60" stroke="#f39c12" stroke-width="1.5" stroke-dasharray="3, 3" fill="none" />
      <!-- Open Tombs with Awakened Figures Reaching Upward -->
      <g transform="translate(0, 110)">
        <!-- Center Child -->
        <rect x="-14" y="0" width="28" height="20" fill="#34495e" stroke="#ffd56b" stroke-width="0.8" />
        <circle cx="0" cy="-12" r="5" fill="#fae5d3" />
        <path d="M -6 -10 L -12 -22 M 6 -10 L 12 -22" stroke="#fae5d3" stroke-width="1.8" />
        <!-- Left Figure -->
        <rect x="-65" y="5" width="28" height="20" fill="#34495e" stroke="#ffd56b" stroke-width="0.8" />
        <circle cx="-51" cy="-7" r="5" fill="#fae5d3" />
        <path d="M -57 -5 L -63 -17 M -45 -5 L -39 -17" stroke="#fae5d3" stroke-width="1.8" />
        <!-- Right Figure -->
        <rect x="37" y="5" width="28" height="20" fill="#34495e" stroke="#ffd56b" stroke-width="0.8" />
        <circle cx="51" cy="-7" r="5" fill="#fae5d3" />
        <path d="M 45 -5 L 39 -17 M 57 -5 L 63 -17" stroke="#fae5d3" stroke-width="1.8" />
      </g>
    </g>
  \`,

  // 21: The World
  maj_21: \`
    <g transform="translate(150, 230)">
      <!-- Oval Laurel Wreath of Cosmic Eternity -->
      <ellipse cx="0" cy="0" rx="65" ry="95" fill="none" stroke="#27ae60" stroke-width="8" />
      <ellipse cx="0" cy="0" rx="65" ry="95" fill="none" stroke="#2ecc71" stroke-width="2" stroke-dasharray="4, 4" />
      <!-- Red Ribbons of Infinity Binding the Wreath (Top & Bottom) -->
      <path d="M -15 -95 C -5 -105 5 -105 15 -95 C 5 -85 -5 -85 -15 -95 Z" fill="#e74c3c" stroke="#ffd56b" stroke-width="1" />
      <path d="M -15 95 C -5 85 5 85 15 95 C 5 105 -5 105 -15 95 Z" fill="#e74c3c" stroke="#ffd56b" stroke-width="1" />
      <!-- The Cosmic Dancer within the Portal -->
      <circle cx="0" cy="-45" r="9" fill="#fae5d3" />
      <path d="M -8 -35 L 8 -35 L 12 15 L -12 15 Z" fill="#9b59b6" stroke="#ffd56b" stroke-width="0.8" />
      <!-- Legs Crossed in Dancing Posture -->
      <line x1="0" y1="15" x2="0" y2="55" stroke="#fae5d3" stroke-width="3" stroke-linecap="round" />
      <line x1="0" y1="30" x2="20" y2="40" stroke="#fae5d3" stroke-width="3" stroke-linecap="round" />
      <!-- Twin Golden Wands of Manifestation -->
      <line x1="-28" y1="-60" x2="-20" y2="10" stroke="#ffd700" stroke-width="2" />
      <line x1="28" y1="-60" x2="20" y2="10" stroke="#ffd700" stroke-width="2" />
      <circle cx="-28" cy="-60" r="2.5" fill="#ffd700" /><circle cx="28" cy="-60" r="2.5" fill="#ffd700" />
      <!-- Four Corner Celestial Tetramorphs -->
      <circle cx="-85" cy="-115" r="6" fill="#f5cba7" /> <!-- Human Angel (Top-Left) -->
      <polygon points="85,-125 92,-115 78,-115" fill="#d5dbdb" /> <!-- Eagle (Top-Right) -->
      <circle cx="-85" cy="115" r="7" fill="#d68910" /> <!-- Lion (Bottom-Left) -->
      <circle cx="85" cy="115" r="7" fill="#784212" /> <!-- Bull / Ox (Bottom-Right) -->
    </g>
  \`
};

// -------------------------------------------------------------
// MINOR ARCANA SVG ARTWORK GENERATOR (Pips and Courts)
// -------------------------------------------------------------

/**
 * Renders the suit emblem SVG fragment
 */
function getSuitEmblem(suit, size = 24) {
  switch (suit) {
    case 'wands':
      return \`<g transform="scale(\${size/24})">
        <!-- Sprouting Flame Wand -->
        <line x1="12" y1="2" x2="12" y2="22" stroke="#e67e22" stroke-width="2.5" stroke-linecap="round" />
        <path d="M 12 3 Q 16 0 14 -3 Q 10 -2 12 3 Z" fill="#f39c12" />
        <path d="M 12 8 Q 18 6 16 11 Q 12 10 12 8 Z" fill="#27ae60" />
        <path d="M 12 15 Q 6 13 8 18 Q 12 17 12 15 Z" fill="#27ae60" />
        <circle cx="12" cy="2" r="2" fill="#ffd700" />
      </g>\`;
    case 'cups':
      return \`<g transform="scale(\${size/24})">
        <!-- Sacred Chalice -->
        <path d="M 5 6 Q 5 16 12 16 Q 19 16 19 6 Z" fill="#2980b9" stroke="#5dade2" stroke-width="1.2" />
        <line x1="12" y1="16" x2="12" y2="21" stroke="#ffd700" stroke-width="2" />
        <line x1="8" y1="21" x2="16" y2="21" stroke="#ffd700" stroke-width="2" stroke-linecap="round" />
        <circle cx="12" cy="10" r="2.5" fill="#ffd700" />
      </g>\`;
    case 'swords':
      return \`<g transform="scale(\${size/24})">
        <!-- Broadsword -->
        <line x1="12" y1="2" x2="12" y2="22" stroke="#d5dbdb" stroke-width="2" stroke-linecap="round" />
        <polygon points="12,0 9,5 15,5" fill="#ffffff" />
        <line x1="6" y1="16" x2="18" y2="16" stroke="#ffd700" stroke-width="2" stroke-linecap="round" />
        <circle cx="12" cy="21" r="2" fill="#ffd700" />
      </g>\`;
    case 'pentacles':
      return \`<g transform="scale(\${size/24})">
        <!-- Golden Talisman Coin -->
        <circle cx="12" cy="12" r="10" fill="#27ae60" stroke="#ffd700" stroke-width="1.5" />
        <polygon points="12,4 14.5,9.5 20,9.5 15.5,13 17,18.5 12,15 7,18.5 8.5,13 4,9.5 9.5,9.5" fill="#f1c40f" stroke="#b7950b" stroke-width="0.5" />
      </g>\`;
    default:
      return \`<circle cx="12" cy="12" r="8" fill="#ffd700" />\`;
  }
}

/**
 * Generate unique artwork for every Pip card (Ace through 10)
 */
function renderPipCardArt(card) {
  const num = card.num;
  const suit = card.suit;

  // Ace has a majestic singular divine emergence scene
  if (num === 1) {
    let aceScene = '';
    if (suit === 'wands') {
      aceScene = \`
        <g transform="translate(150, 230)">
          <!-- Divine Cloud Hand reaching forth -->
          <path d="M -90 60 Q -30 40 0 45" stroke="#eaecee" stroke-width="16" stroke-linecap="round" fill="none" opacity="0.7" />
          <!-- Blazing Staff with Living Leaves and Yods -->
          <line x1="0" y1="-80" x2="0" y2="80" stroke="#784212" stroke-width="8" stroke-linecap="round" />
          <path d="M 0 -80 Q 20 -110 0 -130 Q -20 -110 0 -80" fill="#e74c3c" stroke="#ffd700" stroke-width="1.5" />
          <!-- Sprouting Leaves -->
          <path d="M 0 -40 Q 25 -50 20 -25 Q 5 -30 0 -40" fill="#27ae60" stroke="#ffd56b" stroke-width="1" />
          <path d="M 0 10 Q -25 0 -20 25 Q -5 20 0 10" fill="#27ae60" stroke="#ffd56b" stroke-width="1" />
          <!-- Radiant Golden Rays & Sparks -->
          <circle cx="0" cy="-30" r="70" fill="none" stroke="#ffd56b" stroke-width="0.6" stroke-dasharray="3, 3" />
        </g>
      \`;
    } else if (suit === 'cups') {
      aceScene = \`
        <g transform="translate(150, 230)">
          <!-- Celestial Dove descending with Host -->
          <circle cx="0" cy="-80" r="10" fill="#ffffff" />
          <polygon points="0,-80 -18,-95 -10,-80" fill="#ffffff" /><polygon points="0,-80 18,-95 10,-80" fill="#ffffff" />
          <!-- Great Holy Grail Chalice -->
          <path d="M -35 -30 Q -35 30 0 35 Q 35 30 35 -30 Z" fill="#2980b9" stroke="#ffd700" stroke-width="2" />
          <line x1="0" y1="35" x2="0" y2="70" stroke="#ffd700" stroke-width="6" />
          <ellipse cx="0" cy="70" rx="30" ry="10" fill="#ffd700" />
          <!-- Five Streams of Living Water Overflowing into Lotus Pond -->
          <path d="M -30 -20 Q -60 10 -40 100" stroke="#5dade2" stroke-width="2" fill="none" />
          <path d="M -15 -25 Q -25 20 -15 100" stroke="#5dade2" stroke-width="2.5" fill="none" />
          <path d="M 0 -25 Q 0 20 0 100" stroke="#ffffff" stroke-width="3" fill="none" />
          <path d="M 15 -25 Q 25 20 15 100" stroke="#5dade2" stroke-width="2.5" fill="none" />
          <path d="M 30 -20 Q 60 10 40 100" stroke="#5dade2" stroke-width="2" fill="none" />
          <!-- Water Lilies on Calm Lake -->
          <ellipse cx="0" cy="115" rx="70" ry="18" fill="#1b4f72" />
          <circle cx="-25" cy="115" r="5" fill="#f1948a" /><circle cx="25" cy="115" r="5" fill="#f1948a" />
        </g>
      \`;
    } else if (suit === 'swords') {
      aceScene = \`
        <g transform="translate(150, 230)">
          <!-- Radiant Upright Sword of Divine Truth -->
          <line x1="0" y1="-100" x2="0" y2="70" stroke="#eaeded" stroke-width="5" stroke-linecap="round" />
          <polygon points="0,-125 -6,-100 6,-100" fill="#ffffff" />
          <line x1="-25" y1="35" x2="25" y2="35" stroke="#ffd700" stroke-width="4" stroke-linecap="round" />
          <circle cx="0" cy="70" r="6" fill="#ffd700" />
          <!-- Crown of Victory Pierced by Sword -->
          <polygon points="-24,-70 -16,-90 0,-78 16,-90 24,-70" fill="#ffd700" stroke="#b7950b" stroke-width="1.2" />
          <!-- Woven Olive & Palm Branches of Peace and Honor -->
          <path d="M -25 -60 Q -40 -30 -15 0" stroke="#27ae60" stroke-width="2" fill="none" />
          <path d="M 25 -60 Q 40 -30 15 0" stroke="#27ae60" stroke-width="2" fill="none" />
          <!-- Storm Clouds clearing away -->
          <path d="M -80 -80 Q -40 -110 0 -90 Q 40 -110 80 -80" stroke="#85929e" stroke-width="2" fill="none" stroke-dasharray="3, 3" />
        </g>
      \`;
    } else if (suit === 'pentacles') {
      aceScene = \`
        <g transform="translate(150, 230)">
          <!-- Divine Hand cradling Giant Golden Pentacle -->
          <circle cx="0" cy="-25" r="50" fill="#1b4d3e" stroke="#ffd700" stroke-width="3" />
          <!-- Golden Pentagram Geometry -->
          <polygon points="0,-68 13,-28 50,-28 20, -5 32,32 0,9 -32,32 -20,-5 -50,-28 -13,-28" fill="#f1c40f" stroke="#b7950b" stroke-width="1" />
          <circle cx="0" cy="-25" r="18" fill="none" stroke="#ffd56b" stroke-width="1.2" />
          <!-- Lush Archway of Roses and Lilies -->
          <path d="M -70 120 Q -80 30 0 10 Q 80 30 70 120" stroke="#27ae60" stroke-width="4" fill="none" />
          <circle cx="-50" cy="40" r="5" fill="#e74c3c" /><circle cx="50" cy="40" r="5" fill="#e74c3c" />
          <circle cx="0" cy="12" r="6" fill="#ffffff" />
        </g>
      \`;
    }
    return aceScene;
  }

  // Cards 2 through 10: Specific geometric layouts plus distinct symbolic scenes!
  // Layout coordinates for 2 to 10 tokens
  const layouts = {
    2: [ [0, -55], [0, 55] ],
    3: [ [0, -65], [-45, 45], [45, 45] ],
    4: [ [-45, -55], [45, -55], [-45, 55], [45, 55] ],
    5: [ [-50, -60], [50, -60], [0, 0], [-50, 60], [50, 60] ],
    6: [ [-45, -65], [45, -65], [-45, 0], [45, 0], [-45, 65], [45, 65] ],
    7: [ [-45, -70], [45, -70], [-45, -15], [0, -40], [45, -15], [-45, 55], [45, 55] ],
    8: [ [-48, -75], [48, -75], [-48, -25], [48, -25], [-48, 25], [48, 25], [-48, 75], [48, 75] ],
    9: [ [-50, -75], [0, -75], [50, -75], [-50, 0], [0, 0], [50, 0], [-50, 75], [0, 75], [50, 75] ],
    10: [ [-50, -80], [50, -80], [-50, -35], [50, -35], [-50, 15], [50, 15], [-50, 65], [50, 65], [0, -60], [0, 40] ]
  };

  const coords = layouts[num] || [ [0, 0] ];

  // Iconic storytelling touches for specific minor arcana
  let backgroundMotif = '';

  // 3 of Swords: Pierced Heart
  if (suit === 'swords' && num === 3) {
    backgroundMotif = \`
      <path d="M 0 -15 C -35 -55 -70 5 0 50 C 70 5 35 -55 0 -15 Z" fill="#922b21" stroke="#e74c3c" stroke-width="1.5" />
      <!-- Rain clouds -->
      <path d="M -70 -70 Q 0 -95 70 -70" stroke="#7f8c8d" stroke-width="3" fill="none" stroke-dasharray="2, 4" />
    \`;
  }
  // 5 of Cups: Spilled Cups
  else if (suit === 'cups' && num === 5) {
    backgroundMotif = \`
      <path d="M -60 70 Q -40 90 -20 70" stroke="#922b21" stroke-width="4" fill="none" opacity="0.7" />
      <path d="M -80 120 L 80 120" stroke="#7f8c8d" stroke-width="1" />
    \`;
  }
  // 7 of Cups: Clouds of Vision
  else if (suit === 'cups' && num === 7) {
    backgroundMotif = \`
      <path d="M -80 90 Q 0 40 80 90" fill="#2c3e50" opacity="0.4" />
      <path d="M -60 -40 Q 0 -80 60 -40" fill="#34495e" opacity="0.3" />
    \`;
  }
  // 10 of Swords: Horizon Dawn behind fallen
  else if (suit === 'swords' && num === 10) {
    backgroundMotif = \`
      <rect x="-100" y="80" width="200" height="40" fill="#17202a" />
      <path d="M -100 80 Q 0 50 100 80" stroke="#f39c12" stroke-width="3" fill="none" />
    \`;
  }
  // 4 of Wands: Canopy of Celebration
  else if (suit === 'wands' && num === 4) {
    backgroundMotif = \`
      <path d="M -50 -55 Q 0 -75 50 -55" stroke="#27ae60" stroke-width="3" fill="none" />
      <circle cx="-25" cy="-62" r="3" fill="#e74c3c" /><circle cx="25" cy="-62" r="3" fill="#e74c3c" />
    \`;
  }
  // 8 of Wands: Flying Staves across Sky
  else if (suit === 'wands' && num === 8) {
    backgroundMotif = \`
      <line x1="-70" y1="-90" x2="70" y2="40" stroke="#f39c12" stroke-width="0.8" stroke-dasharray="3, 3" />
      <line x1="-70" y1="-60" x2="70" y2="70" stroke="#f39c12" stroke-width="0.8" stroke-dasharray="3, 3" />
    \`;
  }

  const emblems = coords.map(([x, y]) => {
    return \`<g transform="translate(\${x}, \${y})">\${getSuitEmblem(suit, 32)}</g>\`;
  }).join('');

  return \`
    <g transform="translate(150, 230)">
      <!-- Sacred Geometry Center Grid -->
      <circle cx="0" cy="0" r="75" fill="none" stroke="#d4af37" stroke-width="0.5" opacity="0.25" />
      \${backgroundMotif}
      \${emblems}
    </g>
  \`;
}

/**
 * Generate unique artwork for Court cards (Page, Knight, Queen, King)
 */
function renderCourtCardArt(card) {
  const rank = card.rank;
  const suit = card.suit;

  let robeColor = '#8e44ad';
  let bannerColor = '#e74c3c';
  if (suit === 'wands') { robeColor = '#b03a2e'; bannerColor = '#e67e22'; }
  if (suit === 'cups') { robeColor = '#1f618d'; bannerColor = '#5dade2'; }
  if (suit === 'swords') { robeColor = '#283747'; bannerColor = '#af7ac5'; }
  if (suit === 'pentacles') { robeColor = '#196f3d'; bannerColor = '#f1c40f'; }

  // 1. PAGE (The Youthful Messenger / Seeker)
  if (rank === 'page') {
    return \`
      <g transform="translate(150, 230)">
        <!-- Rolling Landscape / Horizon -->
        <path d="M -100 110 Q 0 80 100 110 L 100 150 L -100 150 Z" fill="#1b2631" />
        <!-- Youthful Standing Silhouette -->
        <circle cx="0" cy="-45" r="9" fill="#fae5d3" />
        <!-- Feathered Cap of Inspiration -->
        <path d="M -8 -50 Q 0 -62 8 -50" fill="\${bannerColor}" stroke="#ffd56b" stroke-width="0.8" />
        <path d="M 4 -58 Q 20 -75 25 -60" stroke="#f4d03f" stroke-width="2" fill="none" />
        <!-- Tunic & Leggings -->
        <path d="M -12 -35 L 12 -35 L 15 25 L -15 25 Z" fill="\${robeColor}" stroke="#ffd56b" stroke-width="1" />
        <line x1="-6" y1="25" x2="-8" y2="85" stroke="#fae5d3" stroke-width="3" stroke-linecap="round" />
        <line x1="6" y1="25" x2="8" y2="85" stroke="#fae5d3" stroke-width="3" stroke-linecap="round" />
        <!-- Contemplating the Held Suit Relic -->
        <g transform="translate(25, -20)">
          \${getSuitEmblem(suit, 34)}
        </g>
      </g>
    \`;
  }

  // 2. KNIGHT (The Armored Champion on Quest)
  if (rank === 'knight') {
    return \`
      <g transform="translate(150, 230)">
        <!-- Steed Profile Silhouette -->
        <path d="M -60 70 Q -20 10 30 30 Q 60 10 40 70 Z" fill="#2c3e50" stroke="#ffd56b" stroke-width="1" />
        <!-- Reins & Bridle -->
        <line x1="20" y1="30" x2="-10" y2="10" stroke="#f39c12" stroke-width="1.5" />
        <!-- Armored Knight Silhouette -->
        <circle cx="-5" cy="-45" r="8" fill="#d5dbdb" />
        <!-- Plumed Helmet -->
        <polygon points="-5,-52 10,-68 -2,-50" fill="\${bannerColor}" />
        <!-- Steel Armor Cuirass -->
        <path d="M -14 -35 L 10 -35 L 8 15 L -16 15 Z" fill="#85929e" stroke="#ffd56b" stroke-width="1.2" />
        <!-- Dynamic Suit Lance / Weapon Charge -->
        <g transform="translate(25, -55) rotate(25)">
          \${getSuitEmblem(suit, 38)}
        </g>
      </g>
    \`;
  }

  // 3. QUEEN (The Enthroned Sovereign of Intuition & Essence)
  if (rank === 'queen') {
    return \`
      <g transform="translate(150, 230)">
        <!-- Stone Throne carved with Suit Totem -->
        <rect x="-45" y="-60" width="90" height="170" fill="#212f3d" stroke="#ffd56b" stroke-width="1.2" />
        <!-- Queen Robes & Veil -->
        <path d="M -22 -15 L 22 -15 L 30 85 L -30 85 Z" fill="\${robeColor}" stroke="#ffd56b" stroke-width="1.2" />
        <circle cx="0" cy="-40" r="9" fill="#fae5d3" />
        <!-- Regal Crown of the Sovereign -->
        <polygon points="-12,-48 -7,-60 0,-52 7,-60 12,-48" fill="#ffd700" stroke="#b7950b" stroke-width="1" />
        <!-- Queen Holding the Sacred Emblem -->
        <g transform="translate(0, 15)">
          \${getSuitEmblem(suit, 38)}
        </g>
      </g>
    \`;
  }

  // 4. KING (The Master of Power & Realm Authority)
  if (rank === 'king') {
    return \`
      <g transform="translate(150, 230)">
        <!-- Mighty High-Backed Throne of Stone -->
        <polygon points="-55,110 -40,-80 40,-80 55,110" fill="#17202a" stroke="#ffd56b" stroke-width="1.5" />
        <!-- Imperial Cloak with Fur Mantle -->
        <path d="M -28 -15 L 28 -15 L 35 90 L -35 90 Z" fill="\${robeColor}" stroke="#ffd56b" stroke-width="1.5" />
        <circle cx="0" cy="-45" r="10" fill="#fae5d3" />
        <!-- Golden Imperial Crown with Jewels -->
        <polygon points="-14,-55 -8,-70 0,-60 8,-70 14,-55" fill="#ffd700" stroke="#b7950b" stroke-width="1.2" />
        <circle cx="0" cy="-60" r="2.5" fill="#e74c3c" />
        <!-- Sovereign Scepter & Suit Token -->
        <line x1="-30" y1="10" x2="-30" y2="-60" stroke="#ffd700" stroke-width="2.5" />
        <circle cx="-30" cy="-60" r="4" fill="#ffd700" />
        <g transform="translate(20, 0)">
          \${getSuitEmblem(suit, 36)}
        </g>
      </g>
    \`;
  }

  return '';
}

/**
 * Master Card Face Render Function
 * Takes any card object from TAROT_DECK and produces a full SVG element string.
 */
export function renderCardFaceSvg(card) {
  if (!card) return '';

  let artworkSvg = '';

  if (card.arcana === 'major') {
    artworkSvg = majorArtworks[card.id] || \`<text x="150" y="230" fill="#ffd56b" text-anchor="middle">\${card.name}</text>\`;
  } else {
    // Minor Arcana
    if (['page', 'knight', 'queen', 'king'].includes(card.rank)) {
      artworkSvg = renderCourtCardArt(card);
    } else {
      artworkSvg = renderPipCardArt(card);
    }
  }

  return createCardFrame(card, artworkSvg);
}
`;

fs.writeFileSync(path.join(__dirname, 'js', 'svg-art.js'), svgArtScript, 'utf8');
console.log('Successfully generated js/svg-art.js!');
