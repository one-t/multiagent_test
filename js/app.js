/**
 * ASTRALIS TAROT — Main Application Controller
 * Handles deck shuffling, spreads, 3D card flips, SVG rendering,
 * Web Audio sound triggers, reader plug-in execution, and compendium browsing.
 */

import { TAROT_DECK, getCardById } from './cards.js';
import { renderCardFaceSvg, renderCardBackSvg } from './svg-art.js';
import { SPREADS, getSpread } from './spreads.js';
import { registry } from './reader-interface.js';
import { sound } from './sound.js';
import { CandlelightSystem } from './candlelight.js';

// Built-in Reader Plugins
import { MysticSeer } from './readers/mystic-seer.js';
import { ShadowOracle } from './readers/shadow-oracle.js';
import { PragmaticAlchemist } from './readers/pragmatic-alchemist.js';
import { CosmicAstrologer } from './readers/cosmic-astrologer.js';

// -------------------------------------------------------------
// APP STATE
// -------------------------------------------------------------
const state = {
  currentSpreadId: 'single',
  threeCardTheme: 'past_present_future',
  allowReversals: true,
  userQuery: '',
  drawnCards: [], // Array of { card, isReversed, position, isFlipped }
  activeModalCard: null,
  isModalReversed: false
};

// Register default readers
registry.register(MysticSeer);
registry.register(ShadowOracle);
registry.register(PragmaticAlchemist);
registry.register(CosmicAstrologer);

// -------------------------------------------------------------
// DOM ELEMENTS
// -------------------------------------------------------------
const elements = {
  // Ambiance & Sound
  candleCanvas: document.getElementById('candleCanvas'),
  ambianceToggleBtn: document.getElementById('ambianceToggleBtn'),
  muteToggleBtn: document.getElementById('muteToggleBtn'),

  // Header
  compendiumBtn: document.getElementById('compendiumBtn'),
  readersPanelBtn: document.getElementById('readersPanelBtn'),
  activeReaderAvatar: document.getElementById('activeReaderAvatar'),
  activeReaderName: document.getElementById('activeReaderName'),

  // Spread config
  spreadTabBtns: document.querySelectorAll('.spread-tab-btn[data-spread]'),
  threeCardThemeBox: document.getElementById('threeCardThemeBox'),
  threeCardThemeSelect: document.getElementById('threeCardThemeSelect'),
  queryInput: document.getElementById('queryInput'),
  reversalsToggle: document.getElementById('reversalsToggle'),
  shuffleDealBtn: document.getElementById('shuffleDealBtn'),
  revealAllBtn: document.getElementById('revealAllBtn'),

  // Altar Stage
  stageSpreadTitle: document.getElementById('stageSpreadTitle'),
  stageSpreadDesc: document.getElementById('stageSpreadDesc'),
  cardsLayoutContainer: document.getElementById('cardsLayoutContainer'),
  readingSection: document.getElementById('readingSection'),

  // Readers Drawer
  readersDrawerBackdrop: document.getElementById('readersDrawerBackdrop'),
  closeReadersDrawer: document.getElementById('closeReadersDrawer'),
  drawerTabs: document.querySelectorAll('.drawer-tab'),
  tabActiveReaders: document.getElementById('tabActiveReaders'),
  tabPluginDev: document.getElementById('tabPluginDev'),
  readersList: document.getElementById('readersList'),
  customPluginCode: document.getElementById('customPluginCode'),
  resetPluginTemplateBtn: document.getElementById('resetPluginTemplateBtn'),
  registerCustomReaderBtn: document.getElementById('registerCustomReaderBtn'),
  pluginStatusMsg: document.getElementById('pluginStatusMsg'),

  // Card Inspection Modal
  cardModalBackdrop: document.getElementById('cardModalBackdrop'),
  closeCardModal: document.getElementById('closeCardModal'),
  modalCardStage: document.getElementById('modalCardStage'),
  modalToggleOrientationBtn: document.getElementById('modalToggleOrientationBtn'),
  modalCardName: document.getElementById('modalCardName'),
  modalEsotericTitle: document.getElementById('modalEsotericTitle'),
  modalArcanaBadge: document.getElementById('modalArcanaBadge'),
  modalElementBadge: document.getElementById('modalElementBadge'),
  modalOrientationBadge: document.getElementById('modalOrientationBadge'),
  modalKeywords: document.getElementById('modalKeywords'),
  modalMeaningUpright: document.getElementById('modalMeaningUpright'),
  modalMeaningReversed: document.getElementById('modalMeaningReversed'),
  modalSymbols: document.getElementById('modalSymbols'),

  // Compendium Modal
  compendiumModalBackdrop: document.getElementById('compendiumModalBackdrop'),
  closeCompendiumModal: document.getElementById('closeCompendiumModal'),
  compendiumSearchInput: document.getElementById('compendiumSearchInput'),
  compendiumFilters: document.querySelectorAll('.compendium-filters button'),
  compendiumGrid: document.getElementById('compendiumGrid')
};

// -------------------------------------------------------------
// INITIALIZATION
// -------------------------------------------------------------
window.addEventListener('DOMContentLoaded', () => {
  // Start ambient candlelight
  new CandlelightSystem('candleCanvas');

  // Set up listeners
  setupSpreadControls();
  setupAudioControls();
  setupReadersConclave();
  setupInspectionModal();
  setupCompendium();

  // Initial Deal
  dealSpread();
});

// -------------------------------------------------------------
// SPREAD SETUP & SHUFFLING
// -------------------------------------------------------------
function setupSpreadControls() {
  // Spread Selector Tabs
  elements.spreadTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      elements.spreadTabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.currentSpreadId = btn.dataset.spread;

      // Show/hide 3-card subtheme options
      if (state.currentSpreadId === 'three_card') {
        elements.threeCardThemeBox.style.display = 'flex';
      } else {
        elements.threeCardThemeBox.style.display = 'none';
      }

      dealSpread();
    });
  });

  // 3-Card Theme Select
  elements.threeCardThemeSelect.addEventListener('change', (e) => {
    state.threeCardTheme = e.target.value;
    updateSpreadHeader();
    dealSpread();
  });

  // Reversals Toggle
  elements.reversalsToggle.addEventListener('change', (e) => {
    state.allowReversals = e.target.checked;
  });

  // Query Input
  elements.queryInput.addEventListener('input', (e) => {
    state.userQuery = e.target.value;
  });

  // Shuffle & Deal
  elements.shuffleDealBtn.addEventListener('click', () => {
    dealSpread();
  });

  // Reveal All
  elements.revealAllBtn.addEventListener('click', () => {
    revealAllCards();
  });
}

function updateSpreadHeader() {
  const spread = getSpread(state.currentSpreadId);
  if (state.currentSpreadId === 'three_card') {
    const themeLabel = elements.threeCardThemeSelect.options[elements.threeCardThemeSelect.selectedIndex].text;
    elements.stageSpreadTitle.textContent = `3 Cards — ${themeLabel}`;
  } else {
    elements.stageSpreadTitle.textContent = spread.name;
  }
  elements.stageSpreadDesc.textContent = spread.description;
}

/**
 * Perform a true Fisher-Yates shuffle on the 78 tarot cards,
 * deal the spread, and place them face-down on the altar.
 */
function dealSpread() {
  sound.playSwoosh();
  updateSpreadHeader();

  // Hide existing reading
  elements.readingSection.style.display = 'none';

  const spread = getSpread(state.currentSpreadId);
  const positions = getPositionsForCurrentSpread();

  // Shuffle deck
  const deck = [...TAROT_DECK];
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }

  // Draw cards
  state.drawnCards = positions.map((pos, idx) => {
    const card = deck[idx];
    const isReversed = state.allowReversals ? Math.random() < 0.38 : false;
    return {
      card,
      isReversed,
      position: pos,
      isFlipped: false
    };
  });

  renderCardsOnAltar();
}

function getPositionsForCurrentSpread() {
  const spread = getSpread(state.currentSpreadId);
  if (state.currentSpreadId !== 'three_card') {
    return spread.positions;
  }

  // Customise 3-card position labels based on selected subtheme
  if (state.threeCardTheme === 'situation_obstacle_advice') {
    return [
      { index: 0, name: "1. The Situation", subtitle: "Current Context", description: "The overarching reality and circumstance." },
      { index: 1, name: "2. The Obstacle", subtitle: "Core Challenge", description: "The friction or barrier to overcome." },
      { index: 2, name: "3. The Advice", subtitle: "Recommended Action", description: "The optimal strategy and mindful posture." }
    ];
  } else if (state.threeCardTheme === 'mind_body_spirit') {
    return [
      { index: 0, name: "1. Mind", subtitle: "Intellect & Thoughts", description: "Mental focus, beliefs, and conscious perceptions." },
      { index: 1, name: "2. Body", subtitle: "Physical & Material", description: "Somatic energy, health, work, and tangible life." },
      { index: 2, name: "3. Spirit", subtitle: "Higher Purpose", description: "Soul calling, intuition, and cosmic alignment." }
    ];
  }
  return spread.positions; // default Past/Present/Future
}

// -------------------------------------------------------------
// RENDER SPREAD ON ALTAR CANVAS
// -------------------------------------------------------------
function renderCardsOnAltar() {
  const container = elements.cardsLayoutContainer;
  container.className = `cards-layout-container layout-${state.currentSpreadId}`;
  container.innerHTML = '';

  const backSvg = renderCardBackSvg(300, 480);

  if (state.currentSpreadId === 'single' || state.currentSpreadId === 'three_card') {
    state.drawnCards.forEach((item, idx) => {
      const cell = createCardCell(item, idx, backSvg);
      container.appendChild(cell);
    });
  } else if (state.currentSpreadId === 'celtic_cross') {
    // Celtic cross architecture:
    // Left: 3x3 Arena with center card & rotated crossing card
    // Right: Vertical Staff column (cards 7-10)

    const arena = document.createElement('div');
    arena.className = 'cc-cross-arena';

    const staff = document.createElement('div');
    staff.className = 'cc-staff-column';

    state.drawnCards.forEach((item, idx) => {
      const cell = createCardCell(item, idx, backSvg);

      // Card 0: Center Base
      if (idx === 0) {
        cell.className = 'card-cell cc-slot-center';
        arena.appendChild(cell);
      }
      // Card 1: Crossing Card (placed into center slot on top of Card 0)
      else if (idx === 1) {
        const centerSlot = arena.querySelector('.cc-slot-center');
        const cardWrapper = cell.querySelector('.card-wrapper');
        cardWrapper.classList.add('crossing-card');
        centerSlot.appendChild(cardWrapper);
      }
      // Card 2: Below / Root
      else if (idx === 2) {
        cell.className = 'card-cell cc-slot-bottom';
        arena.appendChild(cell);
      }
      // Card 3: Left / Past
      else if (idx === 3) {
        cell.className = 'card-cell cc-slot-left';
        arena.appendChild(cell);
      }
      // Card 4: Top / Above
      else if (idx === 4) {
        cell.className = 'card-cell cc-slot-top';
        arena.appendChild(cell);
      }
      // Card 5: Right / Near Future
      else if (idx === 5) {
        cell.className = 'card-cell cc-slot-right';
        arena.appendChild(cell);
      }
      // Cards 6-9: Staff Column (Cards 7, 8, 9, 10)
      else {
        cell.className = 'card-cell';
        staff.appendChild(cell);
      }
    });

    container.appendChild(arena);
    container.appendChild(staff);
  }
}

/**
 * Create a single 3D Card Cell DOM element
 */
function createCardCell(item, idx, backSvg) {
  const cell = document.createElement('div');
  cell.className = 'card-cell';

  // Position label tag
  const posTag = document.createElement('div');
  posTag.className = 'position-tag';
  posTag.textContent = item.position.name;
  posTag.title = item.position.description;
  cell.appendChild(posTag);

  // Card 3D wrapper
  const wrapper = document.createElement('div');
  wrapper.className = `card-wrapper ${item.isReversed ? 'reversed' : ''}`;
  wrapper.dataset.index = idx;

  const inner = document.createElement('div');
  inner.className = 'card-inner';

  // Front face (card art)
  const frontFace = document.createElement('div');
  frontFace.className = 'card-face card-face-front';
  frontFace.innerHTML = renderCardFaceSvg(item.card);

  // Shimmer
  const shimmer = document.createElement('div');
  shimmer.className = 'card-shimmer';
  frontFace.appendChild(shimmer);

  // If reversed, add tiny ribbon indicator
  if (item.isReversed) {
    const revRibbon = document.createElement('div');
    revRibbon.className = 'reversed-ribbon';
    revRibbon.textContent = 'Reversed';
    frontFace.appendChild(revRibbon);
  }

  // Back face (mystic filigree)
  const backFace = document.createElement('div');
  backFace.className = 'card-face card-face-back';
  backFace.innerHTML = backSvg;

  inner.appendChild(frontFace);
  inner.appendChild(backFace);
  wrapper.appendChild(inner);

  // Click handler: flip or inspect
  wrapper.addEventListener('click', (e) => {
    e.stopPropagation();
    handleCardClick(idx, wrapper);
  });

  cell.appendChild(wrapper);
  return cell;
}

/**
 * Handle individual card click:
 * If face-down, flip it with animation and sound.
 * If already face-up, open the inspection modal.
 */
function handleCardClick(idx, wrapper) {
  const item = state.drawnCards[idx];
  if (!item) return;

  if (!item.isFlipped) {
    // Flip card
    sound.playFlip();
    item.isFlipped = true;
    wrapper.classList.add('flipped');

    checkAndTriggerReading();
  } else {
    // Open inspection modal
    openCardInspection(item.card, item.isReversed);
  }
}

/**
 * Reveal all cards sequentially with staggered animation
 */
function revealAllCards() {
  const unflipped = state.drawnCards
    .map((item, idx) => ({ item, idx }))
    .filter(({ item }) => !item.isFlipped);

  if (unflipped.length === 0) return;

  unflipped.forEach(({ item, idx }, i) => {
    setTimeout(() => {
      item.isFlipped = true;
      const wrapper = document.querySelector(`.card-wrapper[data-index="${idx}"]`);
      if (wrapper) {
        sound.playFlip();
        wrapper.classList.add('flipped');
      }
      if (i === unflipped.length - 1) {
        setTimeout(() => checkAndTriggerReading(), 400);
      }
    }, i * 160);
  });
}

function checkAndTriggerReading() {
  const allFlipped = state.drawnCards.every(c => c.isFlipped);
  if (allFlipped) {
    sound.playChime(528); // 528Hz Solfeggio frequency chime
    generateAndDisplayReading();
  }
}

// -------------------------------------------------------------
// READING GENERATION & DISPLAY
// -------------------------------------------------------------
function generateAndDisplayReading() {
  const activeReader = registry.getActive();
  if (!activeReader) return;

  const spreadData = {
    spread: getSpread(state.currentSpreadId),
    cards: state.drawnCards,
    question: state.userQuery
  };

  const reading = registry.interpret(spreadData);

  renderReadingScroll(reading, activeReader);
}

function renderReadingScroll(reading, reader) {
  const section = elements.readingSection;
  section.style.display = 'block';

  // Scroll smoothly into view
  setTimeout(() => {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 200);

  const cardItemsHtml = reading.cardReadings.map(entry => {
    const cardObj = getCardById(entry.cardId);
    const thumbSvg = renderCardFaceSvg(cardObj);

    return `
      <div class="card-reading-entry">
        <div class="entry-thumb ${entry.isReversed ? 'reversed' : ''}" data-card-id="${entry.cardId}" data-reversed="${entry.isReversed}" title="Click to view full card">
          ${thumbSvg}
        </div>
        <div class="entry-body">
          <div class="entry-header">
            <div>
              <span class="entry-pos-title">${entry.positionName}</span>
              ${entry.positionSubtitle ? `<span style="font-size:0.8rem; color:var(--text-dim); margin-left:6px;">(${entry.positionSubtitle})</span>` : ''}
            </div>
            <div>
              <span class="entry-card-title">${entry.cardName}</span>
              <span class="entry-orientation ${entry.isReversed ? 'reversed' : ''}">${entry.orientation}</span>
            </div>
          </div>
          <p class="entry-prose">${entry.reflection}</p>
        </div>
      </div>
    `;
  }).join('');

  section.innerHTML = `
    <div class="reading-header">
      <div class="reader-badge-header">
        <div class="reader-avatar-circle">${reader.avatar || '✦'}</div>
        <div class="reader-header-info">
          <h2>${reading.readerName}</h2>
          <p class="reader-subtitle">${reading.readerTitle}</p>
        </div>
      </div>
      <div class="reading-actions">
        <button id="copyReadingBtn" class="btn btn-ghost" title="Copy reading as markdown to clipboard">
          📋 Copy
        </button>
        <button id="switchReaderFromReadingBtn" class="btn btn-gold" title="Get interpretation from another reader">
          🔮 Change Reader
        </button>
      </div>
    </div>

    <div class="reading-summary-box">
      <p class="summary-text">"${reading.summary}"</p>
      <div class="elemental-bar">
        <span>Elemental Balance:</span>
        <span class="dominant-element-pill">${reading.elementalInsight}</span>
      </div>
    </div>

    <div class="reading-cards-grid">
      ${cardItemsHtml}
    </div>

    <div class="reading-conclusion">
      <div class="conclusion-block">
        <h4>Actionable Counsel</h4>
        <p>${reading.actionableAdvice}</p>
      </div>
      <div class="conclusion-block">
        <h4>Closing Benediction</h4>
        <p style="font-style: italic;">"${reading.closingBenediction}"</p>
      </div>
    </div>
  `;

  // Bind actions
  document.getElementById('copyReadingBtn').addEventListener('click', () => {
    copyReadingToClipboard(reading);
  });

  document.getElementById('switchReaderFromReadingBtn').addEventListener('click', () => {
    openReadersDrawer();
  });

  // Thumbnail inspection clicks
  section.querySelectorAll('.entry-thumb').forEach(thumb => {
    thumb.addEventListener('click', () => {
      const card = getCardById(thumb.dataset.cardId);
      const isRev = thumb.dataset.reversed === 'true';
      if (card) openCardInspection(card, isRev);
    });
  });
}

function copyReadingToClipboard(reading) {
  const text = `# Tarot Reading by ${reading.readerName} (${reading.readerTitle})

**Summary:** ${reading.summary}

**Elemental Insight:** ${reading.elementalInsight}

## Cards:
${reading.cardReadings.map(c => `### ${c.positionName}: ${c.cardName} (${c.orientation})
${c.reflection}
`).join('\n')}

**Actionable Counsel:** ${reading.actionableAdvice}

*${reading.closingBenediction}*
`;

  navigator.clipboard.writeText(text).then(() => {
    const btn = document.getElementById('copyReadingBtn');
    const orig = btn.innerHTML;
    btn.innerHTML = '✓ Copied!';
    setTimeout(() => { btn.innerHTML = orig; }, 2000);
  }).catch(err => {
    console.error("Clipboard error:", err);
  });
}

// -------------------------------------------------------------
// READERS CONCLAVE & PLUG-IN MANAGER
// -------------------------------------------------------------
function setupReadersConclave() {
  elements.readersPanelBtn.addEventListener('click', openReadersDrawer);
  elements.closeReadersDrawer.addEventListener('click', closeReadersDrawer);
  elements.readersDrawerBackdrop.addEventListener('click', (e) => {
    if (e.target === elements.readersDrawerBackdrop) closeReadersDrawer();
  });

  // Drawer Tabs
  elements.drawerTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      elements.drawerTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      if (tab.dataset.tab === 'active-readers') {
        elements.tabActiveReaders.style.display = 'block';
        elements.tabPluginDev.style.display = 'none';
      } else {
        elements.tabActiveReaders.style.display = 'none';
        elements.tabPluginDev.style.display = 'block';
      }
    });
  });

  // Populate Default Plugin Template in Dev Tab
  populatePluginTemplate();
  elements.resetPluginTemplateBtn.addEventListener('click', populatePluginTemplate);

  // Register Custom Reader Button
  elements.registerCustomReaderBtn.addEventListener('click', handleRegisterCustomReader);

  // Subscribe to registry updates
  registry.subscribe((readers, active) => {
    updateReadersListUI(readers, active);
    if (active) {
      elements.activeReaderAvatar.textContent = active.avatar || '✦';
      elements.activeReaderName.textContent = active.name;
    }
  });

  // Initial UI sync
  updateReadersListUI(registry.getAll(), registry.getActive());
}

function openReadersDrawer() {
  elements.readersDrawerBackdrop.classList.add('open');
}

function closeReadersDrawer() {
  elements.readersDrawerBackdrop.classList.remove('open');
}

function updateReadersListUI(readers, active) {
  const container = elements.readersList;
  container.innerHTML = '';

  readers.forEach(reader => {
    const card = document.createElement('div');
    card.className = `reader-card ${active && active.id === reader.id ? 'selected' : ''}`;

    card.innerHTML = `
      <div class="reader-card-top">
        <div class="reader-card-avatar">${reader.avatar || '🔮'}</div>
        <div class="reader-card-meta">
          <h4>${reader.name}</h4>
          <span class="reader-style-tag">${reader.title}</span>
        </div>
      </div>
      <p class="reader-card-bio">${reader.bio || ''}</p>
      ${reader.philosophy ? `<p class="reader-card-philosophy">"${reader.philosophy}"</p>` : ''}
    `;

    card.addEventListener('click', () => {
      registry.setActive(reader.id);
      closeReadersDrawer();
      // If reading is currently visible, re-render immediately with the new reader!
      if (elements.readingSection.style.display === 'block') {
        generateAndDisplayReading();
      }
    });

    container.appendChild(card);
  });
}

function populatePluginTemplate() {
  elements.customPluginCode.value = `// Custom Reader Plugin Interface Example
return {
  id: "custom_oracle_" + Date.now(),
  name: "Seraphina the Dreamwalker",
  title: "Weaver of Astral Visions",
  avatar: "🪶",
  style: "visionary",
  bio: "Listens to the lucidity of dreams and subconscious totems.",
  philosophy: "Every card is a doorway into an unremembered dream.",

  interpret(spreadData) {
    const { spread, cards, question } = spreadData;
    
    const cardReadings = cards.map(({ card, isReversed, position }) => ({
      positionIndex: position.index,
      positionName: position.name,
      positionSubtitle: position.subtitle,
      cardId: card.id,
      cardName: card.name,
      cardElement: card.element,
      isReversed,
      orientation: isReversed ? "Reversed Dream" : "Luminous Dream",
      focalKeyword: card.keywordsUpright[0] || "",
      reflection: \`In \${position.name}, \${card.name} (\${isReversed ? 'Reversed' : 'Upright'}) whispers: \${isReversed ? card.meaningReversed : card.meaningUpright}\`
    }));

    return {
      readerId: this.id,
      readerName: this.name,
      readerTitle: this.title,
      summary: "The astral waters are calm yet luminous with potent intuitive shifts.",
      elementalInsight: "Dream Elemental Current: Deep Water & Ethereal Air.",
      cardReadings,
      actionableAdvice: "Record the dreams that greet you before dawn breaks.",
      closingBenediction: "May your dreamscapes bear the fruit of revelation."
    };
  }
};`;
}

function handleRegisterCustomReader() {
  const code = elements.customPluginCode.value;
  const status = elements.pluginStatusMsg;

  try {
    const factory = new Function(code);
    const customReader = factory();

    if (!customReader || typeof customReader !== 'object') {
      throw new Error("Code must return a Reader object.");
    }

    registry.register(customReader);
    registry.setActive(customReader.id);

    status.style.color = '#2ecc71';
    status.textContent = `✓ Successfully registered & activated: ${customReader.name}!`;

    // Switch back to readers list tab
    setTimeout(() => {
      elements.drawerTabs[0].click();
      status.textContent = '';
      if (elements.readingSection.style.display === 'block') {
        generateAndDisplayReading();
      }
    }, 1200);
  } catch (err) {
    status.style.color = '#e74c3c';
    status.textContent = `Error registering plugin: ${err.message}`;
  }
}

// -------------------------------------------------------------
// CARD INSPECTION MODAL
// -------------------------------------------------------------
function setupInspectionModal() {
  elements.closeCardModal.addEventListener('click', closeCardInspection);
  elements.cardModalBackdrop.addEventListener('click', (e) => {
    if (e.target === elements.cardModalBackdrop) closeCardInspection();
  });

  elements.modalToggleOrientationBtn.addEventListener('click', () => {
    state.isModalReversed = !state.isModalReversed;
    updateModalOrientationUI();
  });
}

function openCardInspection(card, isReversed = false) {
  state.activeModalCard = card;
  state.isModalReversed = isReversed;

  elements.modalCardStage.innerHTML = renderCardFaceSvg(card);
  elements.modalCardName.textContent = card.name;
  elements.modalEsotericTitle.textContent = card.esotericTitle || '';
  elements.modalArcanaBadge.textContent = card.arcana === 'major' ? 'Major Arcana' : `${card.suitName || card.suit} • Minor Arcana`;
  elements.modalElementBadge.textContent = card.element || '';

  elements.modalMeaningUpright.textContent = card.meaningUpright || '';
  elements.modalMeaningReversed.textContent = card.meaningReversed || '';

  const symbols = card.symbols && card.symbols.length ? card.symbols.join(', ') : 'Sacred geometric alignments, esoteric seals, elemental suit emblems';
  elements.modalSymbols.textContent = symbols;

  updateModalOrientationUI();
  elements.cardModalBackdrop.classList.add('open');
}

function updateModalOrientationUI() {
  const card = state.activeModalCard;
  if (!card) return;

  if (state.isModalReversed) {
    elements.modalCardStage.classList.add('reversed');
    elements.modalOrientationBadge.textContent = 'Reversed';
    elements.modalOrientationBadge.style.color = '#f1948a';
    elements.modalOrientationBadge.style.borderColor = 'rgba(146, 43, 33, 0.5)';
    elements.modalKeywords.textContent = (card.keywordsReversed || []).join(' • ');
  } else {
    elements.modalCardStage.classList.remove('reversed');
    elements.modalOrientationBadge.textContent = 'Upright';
    elements.modalOrientationBadge.style.color = '#ffd56b';
    elements.modalOrientationBadge.style.borderColor = 'var(--border-gold-subtle)';
    elements.modalKeywords.textContent = (card.keywordsUpright || []).join(' • ');
  }
}

function closeCardInspection() {
  elements.cardModalBackdrop.classList.remove('open');
  state.activeModalCard = null;
}

// -------------------------------------------------------------
// DECK COMPENDIUM BROWSER (All 78 Cards)
// -------------------------------------------------------------
function setupCompendium() {
  elements.compendiumBtn.addEventListener('click', openCompendium);
  elements.closeCompendiumModal.addEventListener('click', closeCompendium);
  elements.compendiumModalBackdrop.addEventListener('click', (e) => {
    if (e.target === elements.compendiumModalBackdrop) closeCompendium();
  });

  // Filter Buttons
  elements.compendiumFilters.forEach(btn => {
    btn.addEventListener('click', () => {
      elements.compendiumFilters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderCompendiumCards(btn.dataset.filter, elements.compendiumSearchInput.value);
    });
  });

  // Search Input
  elements.compendiumSearchInput.addEventListener('input', (e) => {
    const activeFilter = document.querySelector('.compendium-filters button.active').dataset.filter;
    renderCompendiumCards(activeFilter, e.target.value);
  });
}

function openCompendium() {
  const activeFilter = document.querySelector('.compendium-filters button.active').dataset.filter;
  renderCompendiumCards(activeFilter, elements.compendiumSearchInput.value);
  elements.compendiumModalBackdrop.classList.add('open');
}

function closeCompendium() {
  elements.compendiumModalBackdrop.classList.remove('open');
}

function renderCompendiumCards(filter = 'all', searchQuery = '') {
  const container = elements.compendiumGrid;
  container.innerHTML = '';

  let filtered = TAROT_DECK;

  if (filter === 'major') {
    filtered = filtered.filter(c => c.arcana === 'major');
  } else if (['wands', 'cups', 'swords', 'pentacles'].includes(filter)) {
    filtered = filtered.filter(c => c.suit === filter);
  }

  if (searchQuery && searchQuery.trim()) {
    const q = searchQuery.toLowerCase().trim();
    filtered = filtered.filter(c => {
      return c.name.toLowerCase().includes(q) ||
        (c.element && c.element.toLowerCase().includes(q)) ||
        (c.keywordsUpright && c.keywordsUpright.some(k => k.toLowerCase().includes(q))) ||
        (c.esotericTitle && c.esotericTitle.toLowerCase().includes(q));
    });
  }

  filtered.forEach(card => {
    const item = document.createElement('div');
    item.className = 'compendium-card-item';

    item.innerHTML = `
      <div class="compendium-card-thumb">
        ${renderCardFaceSvg(card)}
      </div>
      <div class="compendium-card-name">${card.name}</div>
    `;

    item.addEventListener('click', () => {
      openCardInspection(card, false);
    });

    container.appendChild(item);
  });
}

// -------------------------------------------------------------
// AUDIO CONTROLS
// -------------------------------------------------------------
function setupAudioControls() {
  let isAmbianceOn = false;
  let isMuted = false;

  elements.ambianceToggleBtn.addEventListener('click', () => {
    isAmbianceOn = sound.toggleAmbiance();
    if (isAmbianceOn) {
      elements.ambianceToggleBtn.classList.add('active');
      elements.ambianceToggleBtn.title = "Candle Ambiance: Active (Playing)";
    } else {
      elements.ambianceToggleBtn.classList.remove('active');
      elements.ambianceToggleBtn.title = "Candle Ambiance: Off";
    }
  });

  elements.muteToggleBtn.addEventListener('click', () => {
    isMuted = !isMuted;
    sound.setMuted(isMuted);
    if (isMuted) {
      elements.muteToggleBtn.textContent = "🔇";
      elements.muteToggleBtn.title = "Audio Muted";
      elements.muteToggleBtn.classList.remove('active');
    } else {
      elements.muteToggleBtn.textContent = "🔊";
      elements.muteToggleBtn.title = "Audio Enabled";
    }
  });
}
