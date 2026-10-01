/**
 * Base Card Frame Generator
 * Wraps card illustration in deep atmospheric cardstock, ornate metallic filigree frame,
 * header title banner, esoteric title, element badge, and Roman numeral.
 */

export function escapeXml(unsafe) {
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

export function createCardFrame(card, artworkSvg, customDefs = '') {
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
