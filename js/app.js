/**
 * ASTRALIS TAROT — Main Application Controller
 * Handles deck shuffling, spreads, 3D card flips, SVG rendering,
 * Web Audio sound triggers, reader plug-in execution, and compendium browsing.
 */

import { TAROT_DECK, getCardById } from './cards.js';
import { shuffleDeck } from './shuffle.js';
import { renderCardFaceSvg as renderSvgFace, renderCardBackSvg as renderSvgBack, setDeckTheme } from './svg-art.js';
import { renderHouseholdFace, renderHouseholdBack } from './household-deck.js';
import { getSpread } from './spreads.js';
import { makeRecord, encodeRecord, decodeRecord, resolveCards, upsertRecord, removeRecord, loadHistory, saveHistory } from './history.js';
import { registry, ReaderRegistry } from './reader-interface.js';
import { sound } from './sound.js';
import { CandlelightSystem } from './candlelight.js';

// Built-in Reader Plugins
import { MysticSeer } from './readers/mystic-seer.js';
import { ShadowOracle } from './readers/shadow-oracle.js';
import { PragmaticAlchemist } from './readers/pragmatic-alchemist.js';
import { CosmicAstrologer } from './readers/cosmic-astrologer.js';
import { RuthCalloway } from './readers/ruth-calloway.js';
import { CassianVetch } from './readers/cassian-vetch.js';
import { LylePasternak } from './readers/lyle-pasternak.js';

// -------------------------------------------------------------
// APP STATE
// -------------------------------------------------------------
const SETTINGS_KEY = 'astralis.settings.v1';
const DECK_THEMES = ['household', 'surrealist', 'feline', 'feline_mystica'];
const SPREAD_IDS = ['single', 'three_card', 'celtic_cross'];

const state = {
  currentSpreadId: 'single',
  threeCardTheme: 'past_present_future',
  allowReversals: true,
  userQuery: '',
  drawnCards: [], // Array of { card, isReversed, position, isFlipped }
  reading: null, // Cached interpretation for the cards on the altar
  completedAt: null, // When the last card of this reading was turned
  activeModalCard: null,
  isModalReversed: false,
  modalIndex: null, // Index into drawnCards when the modal was opened from the spread
  isMuted: false,
  deckTheme: 'household' // 'surrealist' | 'feline' | 'feline_mystica' | 'household'
};

// Register default readers
registry.register(MysticSeer);
registry.register(ShadowOracle);
registry.register(PragmaticAlchemist);
registry.register(CosmicAstrologer);
registry.register(RuthCalloway);
registry.register(CassianVetch);
registry.register(LylePasternak);

// -------------------------------------------------------------
// DOM ELEMENTS
// -------------------------------------------------------------
const elements = {
  // Ambiance & Sound
  candleCanvas: document.getElementById('candleCanvas'),
  ambianceToggleBtn: document.getElementById('ambianceToggleBtn'),
  muteToggleBtn: document.getElementById('muteToggleBtn'),

  // Header & Deck Selection
  deckThemeSelect: document.getElementById('deckThemeSelect'),
  deckPickerBtn: document.getElementById('deckPickerBtn'),
  deckPickerName: document.getElementById('deckPickerName'),
  deckModalBackdrop: document.getElementById('deckModalBackdrop'),
  closeDeckModal: document.getElementById('closeDeckModal'),
  deckGrid: document.getElementById('deckGrid'),
  historyBtn: document.getElementById('historyBtn'),
  historyModalBackdrop: document.getElementById('historyModalBackdrop'),
  closeHistoryModal: document.getElementById('closeHistoryModal'),
  historyList: document.getElementById('historyList'),
  clearHistoryBtn: document.getElementById('clearHistoryBtn'),
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
  liveStatus: document.getElementById('liveStatus'),

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
  modalPrevBtn: document.getElementById('modalPrevBtn'),
  modalNextBtn: document.getElementById('modalNextBtn'),
  modalCardName: document.getElementById('modalCardName'),
  modalEsotericTitle: document.getElementById('modalEsotericTitle'),
  modalArcanaBadge: document.getElementById('modalArcanaBadge'),
  modalElementBadge: document.getElementById('modalElementBadge'),
  modalOrientationBadge: document.getElementById('modalOrientationBadge'),
  modalInReading: document.getElementById('modalInReading'),
  modalPositionName: document.getElementById('modalPositionName'),
  modalReflection: document.getElementById('modalReflection'),
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
// SMALL HELPERS
// -------------------------------------------------------------
/** Build an element. Text always goes in as text, never as markup. */
function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
}

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function isSideBySide() {
  return window.matchMedia('(min-width: 1100px)').matches;
}

function scrollBehavior() {
  return prefersReducedMotion() ? 'auto' : 'smooth';
}

function announce(message) {
  if (elements.liveStatus) elements.liveStatus.textContent = message;
}

/** Spread data numbers some position names ("1. The Heart of the Matter"). The UI numbers them itself. */
function stripNumber(name) {
  return String(name || '').replace(/^\d+\.\s*/, '');
}

function loadSettings() {
  try {
    return JSON.parse(localStorage.getItem(SETTINGS_KEY)) || {};
  } catch (err) {
    return {};
  }
}

function saveSettings() {
  try {
    const active = registry.getActive();
    localStorage.setItem(SETTINGS_KEY, JSON.stringify({
      deckTheme: state.deckTheme,
      spread: state.currentSpreadId,
      threeCardTheme: state.threeCardTheme,
      allowReversals: state.allowReversals,
      readerId: active ? active.id : null,
      muted: state.isMuted
    }));
  } catch (err) {
    // Storage can be unavailable (private mode). Settings just won't persist.
  }
}

function applySavedSettings() {
  const saved = loadSettings();

  if (DECK_THEMES.includes(saved.deckTheme)) state.deckTheme = saved.deckTheme;
  if (SPREAD_IDS.includes(saved.spread)) state.currentSpreadId = saved.spread;
  if (typeof saved.threeCardTheme === 'string') state.threeCardTheme = saved.threeCardTheme;
  if (typeof saved.allowReversals === 'boolean') state.allowReversals = saved.allowReversals;
  state.isMuted = saved.muted === true;

  // Cassian is the house reader unless the seeker chose someone else.
  if (!saved.readerId || !registry.setActive(saved.readerId)) {
    registry.setActive(CassianVetch.id);
  }
}

// -------------------------------------------------------------
// INITIALIZATION
// -------------------------------------------------------------
function initApp() {
  // Start ambient candlelight
  if (!prefersReducedMotion()) new CandlelightSystem('candleCanvas');

  applySavedSettings();

  // Set up listeners
  setupDeckControls();
  setupSpreadControls();
  setupAudioControls();
  setupReadersConclave();
  setupInspectionModal();
  setupCompendium();
  setupDeckPicker();
  setupHistory();
  setupOverlayKeys();

  // A shared link opens that reading; otherwise deal a fresh spread
  if (!restoreFromLocation()) dealSpread({ silent: true });
  window.addEventListener('hashchange', () => restoreFromLocation());
}

// initApp is started at the bottom of the file, once every constant above it exists.

// -------------------------------------------------------------
// DECK THEME CONTROLS
// -------------------------------------------------------------
function renderActiveFace(card, theme = state.deckTheme) {
  if (theme === 'household') return renderHouseholdFace(card);
  return renderSvgFace(card, theme);
}

/** Painted decks keep downsized copies of their plates for small renders. */
function useThumbs(svg) {
  return svg
    .replaceAll('/assets/household/', '/assets/household/thumb/')
    .replaceAll('/assets/feline-mystica/', '/assets/feline-mystica/thumb/');
}

/** Small renders (reading thumbnails, compendium, deck picker) load the downsized plates. */
function renderThumbFace(card, theme = state.deckTheme) {
  return useThumbs(renderActiveFace(card, theme));
}

function renderActiveBack(width = 300, height = 480, theme = state.deckTheme) {
  if (theme === 'household') return renderHouseholdBack(width, height);
  return renderSvgBack(width, height, theme);
}

function setupDeckControls() {
  if (!elements.deckThemeSelect) return;

  setDeckThemeState(state.deckTheme);

  elements.deckThemeSelect.addEventListener('change', (e) => {
    applyDeckTheme(e.target.value);
  });
}

/** Point every renderer and control at a deck, without redrawing anything. */
function setDeckThemeState(theme) {
  state.deckTheme = theme;
  if (theme !== 'household') setDeckTheme(theme);
  elements.deckThemeSelect.value = theme;
  if (elements.deckPickerName) elements.deckPickerName.textContent = DECK_INFO[theme] ? DECK_INFO[theme].name : theme;
}

/** Switch decks and redraw everything that shows a card. */
function applyDeckTheme(theme) {
  if (!DECK_THEMES.includes(theme)) return;
  setDeckThemeState(theme);
  saveSettings();

  sound.playSwoosh();

  // Re-render currently drawn cards on altar
  if (state.drawnCards && state.drawnCards.length > 0) {
    renderCardsOnAltar({ animate: false });
    renderReadingPanel();
    commitReading();
  }

  // Re-render inspection modal if open
  if (state.activeModalCard && elements.cardModalBackdrop.classList.contains('open')) {
    elements.modalCardStage.innerHTML = renderActiveFace(state.activeModalCard);
  }

  // Re-render compendium grid if open
  if (elements.compendiumModalBackdrop.classList.contains('open')) {
    renderCompendiumCards(activeCompendiumFilter(), elements.compendiumSearchInput.value);
  }
}

// -------------------------------------------------------------
// SPREAD SETUP & SHUFFLING
// -------------------------------------------------------------
/** Make the spread tabs and the three-card frame match state. */
function syncSpreadControls() {
  elements.spreadTabBtns.forEach(btn => {
    const isActive = btn.dataset.spread === state.currentSpreadId;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  });
  elements.threeCardThemeSelect.value = state.threeCardTheme;
  state.threeCardTheme = elements.threeCardThemeSelect.value || 'past_present_future';
  elements.threeCardThemeSelect.value = state.threeCardTheme;
  elements.threeCardThemeBox.style.display = state.currentSpreadId === 'three_card' ? 'flex' : 'none';
}

function setupSpreadControls() {
  // Restore saved choices into the controls
  syncSpreadControls();
  elements.reversalsToggle.checked = state.allowReversals;

  // Spread Selector Tabs
  elements.spreadTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      elements.spreadTabBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
      state.currentSpreadId = btn.dataset.spread;

      // Show/hide 3-card subtheme options
      elements.threeCardThemeBox.style.display = state.currentSpreadId === 'three_card' ? 'flex' : 'none';

      saveSettings();
      dealSpread();
    });
  });

  // 3-Card Theme Select
  elements.threeCardThemeSelect.addEventListener('change', (e) => {
    state.threeCardTheme = e.target.value;
    saveSettings();
    dealSpread();
  });

  // Reversals Toggle
  elements.reversalsToggle.addEventListener('change', (e) => {
    state.allowReversals = e.target.checked;
    saveSettings();
  });

  // Query Input
  elements.queryInput.addEventListener('input', (e) => {
    state.userQuery = e.target.value;
    // Until a card is turned, the reading has not started: keep the title in step with the question.
    if (!state.drawnCards.some(item => item.isFlipped)) {
      state.reading = null;
      updateQuestionTitle();
    }
  });

  // Enter in the question box deals a fresh spread for that question
  elements.queryInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      dealSpread();
    }
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

function currentSpreadTitle() {
  const spread = getSpread(state.currentSpreadId);
  if (state.currentSpreadId === 'three_card') {
    const select = elements.threeCardThemeSelect;
    const themeLabel = select.options[select.selectedIndex] ? select.options[select.selectedIndex].text : '';
    return `3 Cards — ${themeLabel}`;
  }
  return spread.name;
}

function updateSpreadHeader() {
  const spread = getSpread(state.currentSpreadId);
  elements.stageSpreadTitle.textContent = currentSpreadTitle();
  elements.stageSpreadDesc.textContent = spread.description;
}

/**
 * Perform a true Fisher-Yates shuffle on the 78 tarot cards,
 * deal the spread, and place them face-down on the altar.
 */
function dealSpread({ silent = false } = {}) {
  if (!silent) sound.playSwoosh();
  updateSpreadHeader();

  const positions = getPositionsForCurrentSpread();

  // Shuffle deck
  const deck = shuffleDeck(TAROT_DECK, { allowReversals: state.allowReversals });

  // Draw cards
  state.drawnCards = positions.map((pos, idx) => {
    const drawn = deck[idx];
    return {
      card: drawn.card,
      isReversed: drawn.isReversed,
      position: { ...pos, name: stripNumber(pos.name) },
      isFlipped: false
    };
  });
  state.reading = null;
  state.completedAt = null;
  clearReadingLink();

  renderCardsOnAltar({ animate: true });
  renderReadingPanel();

  const count = state.drawnCards.length;
  announce(`${count === 1 ? 'One card' : `${count} cards`} dealt face down.`);
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
function renderCardsOnAltar({ animate = false } = {}) {
  const container = elements.cardsLayoutContainer;
  container.className = `cards-layout-container layout-${state.currentSpreadId}`;
  container.innerHTML = '';
  elements.readingSection.parentElement.dataset.spread = state.currentSpreadId;

  const backSvg = renderActiveBack(300, 480);

  if (state.currentSpreadId === 'single' || state.currentSpreadId === 'three_card') {
    state.drawnCards.forEach((item, idx) => {
      container.appendChild(createCardCell(item, idx, backSvg));
    });
  } else if (state.currentSpreadId === 'celtic_cross') {
    // Celtic cross architecture:
    // Left: 3x3 Arena with center card & rotated crossing card
    // Right: Vertical Staff column (cards 7-10)

    const arena = el('div', 'cc-cross-arena');
    const staff = el('div', 'cc-staff-column');
    const slotClasses = { 2: 'cc-slot-bottom', 3: 'cc-slot-left', 4: 'cc-slot-top', 5: 'cc-slot-right' };
    let centerCell = null;
    let centerSlot = null;

    state.drawnCards.forEach((item, idx) => {
      const cell = createCardCell(item, idx, backSvg);

      if (idx === 0) {
        // Card 1: centre base. Its wrapper lives in a fixed-size slot so the crossing card can sit on top.
        centerCell = cell;
        cell.classList.add('cc-center-cell');
        centerSlot = el('div', 'cc-slot-center');
        centerSlot.appendChild(cell.querySelector('.card-wrapper'));
        cell.appendChild(centerSlot);
        arena.appendChild(cell);
      } else if (idx === 1) {
        // Card 2: crossing card, laid across card 1, with its own label underneath.
        const wrapper = cell.querySelector('.card-wrapper');
        const tag = cell.querySelector('.position-tag');
        wrapper.classList.add('crossing-card');
        tag.classList.add('crossing-tag');
        centerSlot.appendChild(wrapper);
        centerCell.appendChild(tag);
      } else if (slotClasses[idx]) {
        cell.classList.add(slotClasses[idx]);
        arena.appendChild(cell);
      } else {
        // Cards 7-10: staff column
        staff.appendChild(cell);
      }
    });

    container.appendChild(arena);
    container.appendChild(staff);
  }

  if (animate && !prefersReducedMotion()) playDealAnimation(container);
}

/** Slide each card out from a point above the spread, one after another. */
function playDealAnimation(container) {
  const box = container.getBoundingClientRect();
  const originX = box.left + box.width / 2;
  const originY = box.top - 60;

  container.querySelectorAll('.card-wrapper').forEach(wrapper => {
    const rect = wrapper.getBoundingClientRect();
    wrapper.style.setProperty('--deal-x', `${Math.round(originX - (rect.left + rect.width / 2))}px`);
    wrapper.style.setProperty('--deal-y', `${Math.round(originY - (rect.top + rect.height / 2))}px`);
    wrapper.style.setProperty('--deal-i', wrapper.dataset.index);
    wrapper.classList.add('dealing');
    wrapper.addEventListener('animationend', () => wrapper.classList.remove('dealing'), { once: true });
  });
}

function positionNumber(idx) {
  return state.drawnCards.length > 1 ? idx + 1 : null;
}

function cardAriaLabel(item, idx) {
  const number = positionNumber(idx);
  const seat = `${number ? `${number}. ` : ''}${item.position.name}`;
  if (!item.isFlipped) return `${seat}: face down. Turn over.`;
  return `${seat}: ${item.card.name}${item.isReversed ? ', reversed' : ''}. Open details.`;
}

/**
 * Create a single 3D Card Cell DOM element
 */
function createCardCell(item, idx, backSvg) {
  const cell = el('div', 'card-cell');

  // Position label tag
  const posTag = el('div', 'position-tag');
  posTag.dataset.tagIndex = idx;
  posTag.title = item.position.description || '';
  const number = positionNumber(idx);
  if (number) posTag.appendChild(el('span', 'pos-num', String(number)));
  // Tags sit over narrow cards, so they drop the leading article
  posTag.appendChild(el('span', 'pos-name', item.position.name.replace(/^The\s+/, '')));
  if (item.isReversed) {
    const rev = el('span', 'pos-rev', '↻');
    rev.title = 'Reversed';
    rev.setAttribute('aria-label', 'Reversed');
    posTag.appendChild(rev);
    posTag.classList.toggle('show-rev', item.isFlipped);
  }
  cell.appendChild(posTag);

  // Card 3D wrapper
  const wrapper = el('div', `card-wrapper ${item.isReversed ? 'reversed' : ''} ${item.isFlipped ? 'flipped' : ''}`);
  wrapper.dataset.index = idx;
  wrapper.tabIndex = 0;
  wrapper.setAttribute('role', 'button');
  wrapper.setAttribute('aria-label', cardAriaLabel(item, idx));
  wrapper.style.setProperty('--tilt', `${(Math.random() * 3 - 1.5).toFixed(2)}deg`);

  const inner = el('div', 'card-inner');

  // Front face (card art)
  const frontFace = el('div', 'card-face card-face-front');
  frontFace.innerHTML = renderActiveFace(item.card);
  frontFace.appendChild(el('div', 'card-shimmer'));

  // Back face (mystic filigree)
  const backFace = el('div', 'card-face card-face-back');
  backFace.innerHTML = backSvg;

  inner.appendChild(frontFace);
  inner.appendChild(backFace);
  wrapper.appendChild(inner);

  // Click / keyboard: flip or inspect
  wrapper.addEventListener('click', (e) => {
    e.stopPropagation();
    handleCardClick(idx);
  });
  wrapper.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleCardClick(idx);
    }
  });

  // Tie the card to its paragraph in the reading
  wrapper.addEventListener('mouseenter', () => setLinked(idx, true));
  wrapper.addEventListener('mouseleave', () => setLinked(idx, false));
  wrapper.addEventListener('focus', () => setLinked(idx, true));
  wrapper.addEventListener('blur', () => setLinked(idx, false));

  cell.appendChild(wrapper);
  return cell;
}

function wrapperFor(idx) {
  return elements.cardsLayoutContainer.querySelector(`.card-wrapper[data-index="${idx}"]`);
}

function entryFor(idx) {
  return elements.readingSection.querySelector(`.card-reading-entry[data-index="${idx}"]`);
}

function setLinked(idx, on) {
  const wrapper = wrapperFor(idx);
  const entry = entryFor(idx);
  if (wrapper) wrapper.classList.toggle('is-linked', on);
  if (entry) entry.classList.toggle('is-linked', on);
}

/**
 * Handle individual card click:
 * If face-down, flip it with animation and sound.
 * If already face-up, open the inspection modal.
 */
function handleCardClick(idx) {
  const item = state.drawnCards[idx];
  if (!item) return;

  if (!item.isFlipped) {
    flipCard(idx, { scroll: true });
  } else {
    openCardInspection(item.card, item.isReversed, idx);
  }
}

/** Turn one card face up and bring its part of the reading in with it. */
function flipCard(idx, { scroll = false } = {}) {
  const item = state.drawnCards[idx];
  if (!item || item.isFlipped) return;

  sound.playFlip();
  item.isFlipped = true;

  const wrapper = wrapperFor(idx);
  if (wrapper) {
    wrapper.classList.add('flipped');
    wrapper.setAttribute('aria-label', cardAriaLabel(item, idx));
  }
  const tag = elements.cardsLayoutContainer.querySelector(`.position-tag[data-tag-index="${idx}"]`);
  if (tag) tag.classList.add('show-rev');

  revealEntry(idx, { scroll });
  announce(`${item.position.name}: ${item.card.name}${item.isReversed ? ', reversed' : ''}.`);

  if (state.drawnCards.every(c => c.isFlipped)) {
    sound.playChime(528); // 528Hz Solfeggio frequency chime
    revealSynthesis();
    commitReading();
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

  const step = prefersReducedMotion() ? 0 : 160;
  unflipped.forEach(({ idx }, i) => {
    setTimeout(() => {
      flipCard(idx);
      if (i === unflipped.length - 1 && !isSideBySide()) {
        // Stacked layout: the reading sits below the spread, so bring it into view.
        setTimeout(() => {
          elements.readingSection.scrollIntoView({ behavior: scrollBehavior(), block: 'start' });
        }, 500);
      }
    }, i * step);
  });
}

// -------------------------------------------------------------
// READING GENERATION & DISPLAY
// -------------------------------------------------------------
/** Interpret the cards on the altar once, the first time one is turned. */
function ensureReading() {
  if (state.reading) return state.reading;
  if (!registry.getActive()) return null;

  state.reading = {
    ...registry.interpret({
      spread: getSpread(state.currentSpreadId),
      cards: state.drawnCards,
      question: state.userQuery
    }),
    question: state.userQuery.trim()
  };
  return state.reading;
}

function readingQuestion() {
  if (state.reading) return state.reading.question;
  return state.userQuery.trim();
}

function updateQuestionTitle() {
  const title = elements.readingSection.querySelector('.question-title');
  if (!title) return;
  const question = readingQuestion();
  title.textContent = question ? `“${question}”` : 'No question asked';
  title.classList.toggle('is-empty', !question);
}

/** Draw the whole reading panel from state: header, question, one row per seat, and the synthesis. */
function renderReadingPanel() {
  const section = elements.readingSection;
  const reader = registry.getActive();
  const anyFlipped = state.drawnCards.some(item => item.isFlipped);
  const allFlipped = state.drawnCards.length > 0 && state.drawnCards.every(item => item.isFlipped);
  if (anyFlipped) ensureReading();

  section.replaceChildren();

  // Header: who is reading, and what you can do with it
  const header = el('div', 'reading-header');
  const badge = el('div', 'reader-badge-header');
  const avatar = el('div', 'reader-avatar-circle');
  fillAvatar(avatar, reader);
  badge.appendChild(avatar);
  const info = el('div', 'reader-header-info');
  info.appendChild(el('h2', null, reader ? reader.name : 'Reader'));
  info.appendChild(el('p', 'reader-subtitle', reader ? reader.title : ''));
  badge.appendChild(info);
  header.appendChild(badge);

  const actions = el('div', 'reading-actions');
  const copyBtn = el('button', 'btn btn-ghost', 'Copy');
  copyBtn.type = 'button';
  copyBtn.id = 'copyReadingBtn';
  copyBtn.title = 'Copy the reading as text';
  copyBtn.disabled = !allFlipped;
  copyBtn.addEventListener('click', () => copyReadingToClipboard());
  const linkBtn = el('button', 'btn btn-ghost', 'Copy link');
  linkBtn.type = 'button';
  linkBtn.id = 'copyLinkBtn';
  linkBtn.title = 'Copy a link that reopens this reading';
  linkBtn.disabled = !allFlipped;
  linkBtn.addEventListener('click', () => copyReadingLink());
  const switchBtn = el('button', 'btn btn-gold', 'Change reader');
  switchBtn.type = 'button';
  switchBtn.id = 'switchReaderFromReadingBtn';
  switchBtn.addEventListener('click', openReadersDrawer);
  actions.append(copyBtn, linkBtn, switchBtn);
  header.appendChild(actions);
  section.appendChild(header);

  // The question is the title of the reading
  const questionBox = el('div', 'reading-question');
  questionBox.appendChild(el('p', 'reading-eyebrow', currentSpreadTitle()));
  questionBox.appendChild(el('h3', 'question-title'));
  section.appendChild(questionBox);
  updateQuestionTitle();

  // One row per seat
  const list = el('ol', 'reading-cards-grid');
  state.drawnCards.forEach((item, idx) => {
    const entry = el('li', 'card-reading-entry');
    entry.dataset.index = idx;
    fillEntry(entry, idx);
    entry.addEventListener('mouseenter', () => setLinked(idx, true));
    entry.addEventListener('mouseleave', () => setLinked(idx, false));
    list.appendChild(entry);
  });
  section.appendChild(list);

  // Synthesis arrives once every card is up
  const synthesis = el('div', 'reading-synthesis');
  synthesis.hidden = !allFlipped;
  if (allFlipped) fillSynthesis(synthesis);
  section.appendChild(synthesis);
}

/** Fill one row: a face-down prompt before the flip, the card and its reading after. */
function fillEntry(entry, idx) {
  const item = state.drawnCards[idx];
  const number = positionNumber(idx);
  entry.replaceChildren();
  entry.classList.toggle('is-waiting', !item.isFlipped);

  if (!item.isFlipped) {
    const waiting = el('button', 'entry-waiting');
    waiting.type = 'button';
    if (number) waiting.appendChild(el('span', 'entry-num', String(number)));
    const text = el('span', 'entry-waiting-text');
    text.appendChild(el('span', 'entry-pos-title', item.position.name));
    if (item.position.subtitle) text.appendChild(el('span', 'entry-pos-sub', item.position.subtitle));
    waiting.appendChild(text);
    waiting.appendChild(el('span', 'entry-turn', 'Turn over'));
    waiting.addEventListener('click', () => flipCard(idx));
    entry.appendChild(waiting);
    return;
  }

  const reading = ensureReading();
  const data = (reading && reading.cardReadings && reading.cardReadings[idx]) || {};

  const thumb = el('button', `entry-thumb ${item.isReversed ? 'reversed' : ''}`);
  thumb.type = 'button';
  thumb.setAttribute('aria-label', `Open ${item.card.name}`);
  thumb.innerHTML = renderThumbFace(item.card);
  thumb.addEventListener('click', () => openCardInspection(item.card, item.isReversed, idx));
  entry.appendChild(thumb);

  const body = el('div', 'entry-body');
  const head = el('div', 'entry-header');
  const seat = el('div', 'entry-seat');
  if (number) seat.appendChild(el('span', 'entry-num', String(number)));
  seat.appendChild(el('span', 'entry-pos-title', item.position.name));
  if (item.position.subtitle) seat.appendChild(el('span', 'entry-pos-sub', item.position.subtitle));
  head.appendChild(seat);

  const drawn = el('div', 'entry-drawn');
  drawn.appendChild(el('span', 'entry-card-title', item.card.name));
  drawn.appendChild(el('span', `entry-orientation ${item.isReversed ? 'reversed' : ''}`, data.orientation || (item.isReversed ? 'Reversed' : 'Upright')));
  head.appendChild(drawn);
  body.appendChild(head);
  body.appendChild(el('p', 'entry-prose', data.reflection || ''));
  entry.appendChild(body);
}

function revealEntry(idx, { scroll = false } = {}) {
  const entry = entryFor(idx);
  if (!entry) return;
  fillEntry(entry, idx);
  entry.classList.add('just-revealed');
  if (scroll && isSideBySide()) {
    entry.scrollIntoView({ behavior: scrollBehavior(), block: 'nearest' });
  }
}

function revealSynthesis() {
  const synthesis = elements.readingSection.querySelector('.reading-synthesis');
  if (!synthesis) return;
  fillSynthesis(synthesis);
  synthesis.hidden = false;
  const copyBtn = document.getElementById('copyReadingBtn');
  if (copyBtn) copyBtn.disabled = false;
  const linkBtn = document.getElementById('copyLinkBtn');
  if (linkBtn) linkBtn.disabled = false;
  announce('All cards are turned. The full reading is ready.');
}

function fillSynthesis(synthesis) {
  const reading = ensureReading();
  if (!reading) return;
  synthesis.replaceChildren();

  const summary = el('div', 'reading-summary-box');
  summary.appendChild(el('p', 'summary-text', reading.summary || ''));

  // A tally of one card says nothing. Show the balance only when there is one.
  if (state.drawnCards.length >= 3) {
    const { counts } = ReaderRegistry.analyzeElements(state.drawnCards);
    const bar = el('div', 'elemental-bar');
    bar.setAttribute('role', 'img');
    const parts = [
      ['Fire', counts.Fire], ['Water', counts.Water], ['Air', counts.Air], ['Earth', counts.Earth], ['Spirit', counts.Spirit]
    ].filter(([, count]) => count > 0);
    bar.setAttribute('aria-label', `Elemental balance: ${parts.map(([name, count]) => `${name} ${count}`).join(', ')}`);
    parts.forEach(([name, count]) => {
      const segment = el('span', `element-segment element-${name.toLowerCase()}`, `${name} ${count}`);
      segment.style.flexGrow = String(count);
      bar.appendChild(segment);
    });
    summary.appendChild(bar);
    if (reading.elementalInsight) summary.appendChild(el('p', 'elemental-note', reading.elementalInsight));
  }
  synthesis.appendChild(summary);

  const conclusion = el('div', 'reading-conclusion');
  const counsel = el('div', 'conclusion-block');
  counsel.appendChild(el('h4', null, 'Counsel'));
  counsel.appendChild(el('p', null, reading.actionableAdvice || ''));
  const closing = el('div', 'conclusion-block');
  closing.appendChild(el('h4', null, 'Closing'));
  closing.appendChild(el('p', 'closing-words', reading.closingBenediction || ''));
  conclusion.append(counsel, closing);
  synthesis.appendChild(conclusion);
}

/** A different reader reads the same cards. */
function refreshReading() {
  state.reading = null;
  renderReadingPanel();
  commitReading();
}

function copyReadingToClipboard() {
  const reading = ensureReading();
  if (!reading) return;

  const lines = [`# Tarot reading by ${reading.readerName} (${reading.readerTitle})`, ''];
  if (reading.question) lines.push(`**Question:** ${reading.question}`, '');
  lines.push(`**Spread:** ${currentSpreadTitle()}`, '');
  state.drawnCards.forEach((item, idx) => {
    const data = reading.cardReadings[idx] || {};
    const number = positionNumber(idx);
    lines.push(`## ${number ? `${number}. ` : ''}${item.position.name}: ${item.card.name} (${data.orientation || (item.isReversed ? 'Reversed' : 'Upright')})`);
    lines.push(data.reflection || '', '');
  });
  lines.push(`**Summary:** ${reading.summary}`, '');
  lines.push(`**Counsel:** ${reading.actionableAdvice}`, '');
  lines.push(`*${reading.closingBenediction}*`, '');

  navigator.clipboard.writeText(lines.join('\n')).then(() => {
    const btn = document.getElementById('copyReadingBtn');
    if (!btn) return;
    btn.textContent = 'Copied';
    setTimeout(() => { btn.textContent = 'Copy'; }, 2000);
  }).catch(err => {
    console.error("Clipboard error:", err);
  });
}

// -------------------------------------------------------------
// OVERLAYS: focus, Escape, and scroll lock shared by the drawer and modals
// -------------------------------------------------------------
const overlayStack = []; // { backdrop, opener, close }

function openOverlay(backdrop, close, focusTarget) {
  if (!backdrop.classList.contains('open')) {
    overlayStack.push({ backdrop, opener: document.activeElement, close });
  }
  backdrop.classList.add('open');
  document.documentElement.classList.add('overlay-open');
  const target = focusTarget || backdrop.querySelector('button');
  if (!target) return;
  target.focus({ preventScroll: true });
  // Controls that are still transitioning in cannot take focus yet; the dialog itself can.
  if (document.activeElement !== target) {
    const dialog = backdrop.querySelector('[role="dialog"]');
    if (dialog) {
      dialog.tabIndex = -1;
      dialog.focus({ preventScroll: true });
    }
  }
}

function closeOverlay(backdrop) {
  backdrop.classList.remove('open');
  const at = overlayStack.findIndex(entry => entry.backdrop === backdrop);
  if (at >= 0) {
    const [entry] = overlayStack.splice(at, 1);
    if (entry.opener && entry.opener !== document.body && document.contains(entry.opener)) {
      entry.opener.focus({ preventScroll: true });
    } else if (backdrop.contains(document.activeElement)) {
      document.activeElement.blur(); // never leave focus inside a closed overlay
    }
  }
  if (overlayStack.length === 0) document.documentElement.classList.remove('overlay-open');
}

function setupOverlayKeys() {
  document.addEventListener('keydown', (e) => {
    const top = overlayStack[overlayStack.length - 1];
    if (!top) return;

    if (e.key === 'Escape') {
      e.preventDefault();
      top.close();
      return;
    }

    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      const typing = e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement;
      if (top.backdrop === elements.cardModalBackdrop && !typing && state.modalIndex != null) {
        e.preventDefault();
        stepModal(e.key === 'ArrowRight' ? 1 : -1);
      }
      return;
    }

    if (e.key !== 'Tab') return;
    // Keep Tab inside the open overlay
    const focusable = Array.from(top.backdrop.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'))
      .filter(node => !node.disabled && !node.hidden && node.offsetParent !== null);
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (!top.backdrop.contains(document.activeElement)) {
      e.preventDefault();
      first.focus();
    } else if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
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
    syncActiveReaderChip(active);
  });

  // Initial UI sync
  updateReadersListUI(registry.getAll(), registry.getActive());
  syncActiveReaderChip(registry.getActive());
}

function syncActiveReaderChip(active) {
  if (!active) return;
  fillAvatar(elements.activeReaderAvatar, active);
  elements.activeReaderName.textContent = active.name;
}

function openReadersDrawer() {
  openOverlay(elements.readersDrawerBackdrop, closeReadersDrawer, elements.closeReadersDrawer);
}

function closeReadersDrawer() {
  closeOverlay(elements.readersDrawerBackdrop);
}

function updateReadersListUI(readers, active) {
  const container = elements.readersList;
  container.replaceChildren();

  readers.forEach(reader => {
    const isActive = Boolean(active && active.id === reader.id);
    const card = el('button', `reader-card ${isActive ? 'selected' : ''}`);
    card.type = 'button';
    card.setAttribute('aria-pressed', isActive ? 'true' : 'false');

    const top = el('div', 'reader-card-top');
    const avatar = el('div', 'reader-card-avatar');
    fillAvatar(avatar, reader);
    top.appendChild(avatar);
    const meta = el('div', 'reader-card-meta');
    meta.appendChild(el('h4', null, reader.name));
    meta.appendChild(el('span', 'reader-style-tag', reader.title));
    top.appendChild(meta);
    card.appendChild(top);
    card.appendChild(el('p', 'reader-card-bio', reader.bio || ''));
    if (reader.philosophy) card.appendChild(el('p', 'reader-card-philosophy', `“${reader.philosophy}”`));

    card.addEventListener('click', () => {
      registry.setActive(reader.id);
      saveSettings();
      closeReadersDrawer();
      // The same cards, read again in the new voice
      refreshReading();
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
      refreshReading();
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

  elements.modalPrevBtn.addEventListener('click', () => stepModal(-1));
  elements.modalNextBtn.addEventListener('click', () => stepModal(1));
}

/**
 * @param {object} card
 * @param {boolean} isReversed
 * @param {number|null} spreadIndex Index into the cards on the altar, when opened from the spread or the reading.
 */
function openCardInspection(card, isReversed = false, spreadIndex = null) {
  state.activeModalCard = card;
  state.isModalReversed = isReversed;
  state.modalIndex = spreadIndex;

  elements.modalCardStage.innerHTML = renderActiveFace(card);
  elements.modalCardName.textContent = card.name;
  elements.modalEsotericTitle.textContent = card.esotericTitle || '';
  elements.modalArcanaBadge.textContent = card.arcana === 'major' ? 'Major Arcana' : `${card.suitName || card.suit} • Minor Arcana`;
  elements.modalElementBadge.textContent = card.element || '';
  elements.modalElementBadge.hidden = !card.element;

  elements.modalMeaningUpright.textContent = card.meaningUpright || '';
  elements.modalMeaningReversed.textContent = card.meaningReversed || '';

  const symbols = card.symbols && card.symbols.length ? card.symbols.join(', ') : 'Sacred geometric alignments, esoteric seals, elemental suit emblems';
  elements.modalSymbols.textContent = symbols;

  // When the card came from the spread, lead with what it means in this seat.
  const item = spreadIndex != null ? state.drawnCards[spreadIndex] : null;
  const data = item && state.reading && state.reading.cardReadings ? state.reading.cardReadings[spreadIndex] : null;
  elements.modalInReading.hidden = !data;
  if (data) {
    const number = positionNumber(spreadIndex);
    elements.modalPositionName.textContent = `${number ? `${number}. ` : ''}${item.position.name} — ${state.reading.readerName}`;
    elements.modalReflection.textContent = data.reflection || '';
  }

  const flippedCount = state.drawnCards.filter(c => c.isFlipped).length;
  const canStep = spreadIndex != null && flippedCount > 1;
  elements.modalPrevBtn.hidden = !canStep;
  elements.modalNextBtn.hidden = !canStep;

  updateModalOrientationUI();
  openOverlay(elements.cardModalBackdrop, closeCardInspection, elements.closeCardModal);
}

/** Move to the previous / next face-up card in the spread. */
function stepModal(direction) {
  if (state.modalIndex == null) return;
  const total = state.drawnCards.length;
  for (let step = 1; step < total; step++) {
    const idx = (state.modalIndex + direction * step + total * step) % total;
    const item = state.drawnCards[idx];
    if (item && item.isFlipped) {
      openCardInspection(item.card, item.isReversed, idx);
      return;
    }
  }
}

function updateModalOrientationUI() {
  const card = state.activeModalCard;
  if (!card) return;

  elements.modalCardStage.classList.toggle('reversed', state.isModalReversed);
  elements.modalOrientationBadge.classList.toggle('is-reversed', state.isModalReversed);
  if (state.isModalReversed) {
    elements.modalOrientationBadge.textContent = 'Reversed';
    elements.modalKeywords.textContent = (card.keywordsReversed || []).join(' • ');
  } else {
    elements.modalOrientationBadge.textContent = 'Upright';
    elements.modalKeywords.textContent = (card.keywordsUpright || []).join(' • ');
  }
}

function closeCardInspection() {
  closeOverlay(elements.cardModalBackdrop);
  state.activeModalCard = null;
  state.modalIndex = null;
}

// -------------------------------------------------------------
// DECK COMPENDIUM BROWSER (All 78 Cards)
// -------------------------------------------------------------
let compendiumObserver = null;

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
    renderCompendiumCards(activeCompendiumFilter(), e.target.value);
  });
}

function activeCompendiumFilter() {
  const activeBtn = document.querySelector('.compendium-filters button.active');
  return activeBtn ? activeBtn.dataset.filter : 'all';
}

function openCompendium() {
  openOverlay(elements.compendiumModalBackdrop, closeCompendium, elements.compendiumSearchInput);
  renderCompendiumCards(activeCompendiumFilter(), elements.compendiumSearchInput.value);
}

function closeCompendium() {
  closeOverlay(elements.compendiumModalBackdrop);
}

function renderCompendiumCards(filter = 'all', searchQuery = '') {
  const container = elements.compendiumGrid;
  container.replaceChildren();
  if (compendiumObserver) compendiumObserver.disconnect();

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
        (c.keywordsReversed && c.keywordsReversed.some(k => k.toLowerCase().includes(q))) ||
        (c.esotericTitle && c.esotericTitle.toLowerCase().includes(q));
    });
  }

  if (filtered.length === 0) {
    const query = searchQuery.trim();
    container.appendChild(el('p', 'compendium-empty', query ? `No card matches “${query}”.` : 'No cards here.'));
    return;
  }

  // Draw each face only when its tile scrolls into view
  compendiumObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const thumb = entry.target;
      const card = getCardById(thumb.dataset.cardId);
      if (card) thumb.innerHTML = renderThumbFace(card);
      observer.unobserve(thumb);
    });
  }, { root: container, rootMargin: '200px' });

  filtered.forEach(card => {
    const item = el('button', 'compendium-card-item');
    item.type = 'button';

    const thumb = el('div', 'compendium-card-thumb');
    thumb.dataset.cardId = card.id;
    item.appendChild(thumb);
    item.appendChild(el('div', 'compendium-card-name', card.name));

    item.addEventListener('click', () => {
      openCardInspection(card, false);
    });

    container.appendChild(item);
    compendiumObserver.observe(thumb);
  });
}

// -------------------------------------------------------------
// READER AVATARS: a portrait where one exists, a monogram otherwise
// -------------------------------------------------------------
const READER_PORTRAITS = {
  cassian_vetch: '/assets/readers/cassian_vetch.jpg'
};

function readerInitials(name) {
  const words = String(name || '')
    .split(/\s+/)
    .filter(word => !/^["“'(]/.test(word)) // skip a quoted nickname
    .map(word => word.replace(/[^\p{L}]/gu, ''))
    .filter(Boolean);
  if (words.length === 0) return '✦';
  const first = words[0][0];
  const last = words.length > 1 ? words[words.length - 1][0] : '';
  return (first + last).toUpperCase();
}

function fillAvatar(node, reader) {
  node.replaceChildren();
  node.classList.remove('has-portrait');
  const monogram = () => {
    node.replaceChildren(el('span', 'avatar-monogram', readerInitials(reader && reader.name)));
    node.classList.remove('has-portrait');
  };

  const src = reader && (reader.portrait || READER_PORTRAITS[reader.id]);
  if (!src) {
    monogram();
    return;
  }
  const img = document.createElement('img');
  img.src = src;
  img.alt = '';
  img.addEventListener('error', monogram);
  node.appendChild(img);
  node.classList.add('has-portrait');
}

// -------------------------------------------------------------
// HISTORY & SHAREABLE LINKS
// -------------------------------------------------------------
function browserStorage() {
  try {
    return window.localStorage;
  } catch (err) {
    return null;
  }
}

function readHistory() {
  const storage = browserStorage();
  return storage ? loadHistory(storage, TAROT_DECK.length) : [];
}

function isReadingComplete() {
  return state.drawnCards.length > 0 && state.drawnCards.every(item => item.isFlipped);
}

function currentRecord() {
  const active = registry.getActive();
  return makeRecord({
    spreadId: state.currentSpreadId,
    threeCardTheme: state.threeCardTheme,
    readerId: active ? active.id : '',
    deckTheme: state.deckTheme,
    question: readingQuestion(),
    drawnCards: state.drawnCards,
    deck: TAROT_DECK,
    at: state.completedAt || Date.now()
  });
}

/** Keep a finished reading: in this browser's history and in the address bar. */
function commitReading() {
  if (!isReadingComplete()) return;
  if (!state.completedAt) state.completedAt = Date.now();

  const record = currentRecord();
  const storage = browserStorage();
  if (storage) saveHistory(storage, upsertRecord(readHistory(), record));
  window.history.replaceState(null, '', `#r=${encodeRecord(record)}`);
}

function clearReadingLink() {
  if (window.location.hash) {
    window.history.replaceState(null, '', window.location.pathname + window.location.search);
  }
}

function copyReadingLink() {
  if (!isReadingComplete()) return;
  const link = `${window.location.origin}${window.location.pathname}${window.location.search}#r=${encodeRecord(currentRecord())}`;
  navigator.clipboard.writeText(link).then(() => {
    const btn = document.getElementById('copyLinkBtn');
    if (!btn) return;
    btn.textContent = 'Link copied';
    setTimeout(() => { btn.textContent = 'Copy link'; }, 2000);
  }).catch(err => {
    console.error("Clipboard error:", err);
  });
}

/** Lay a saved reading back out: same seats, same cards, face up. */
function restoreRecord(record) {
  state.currentSpreadId = record.spread;
  if (record.spread === 'three_card' && record.theme) state.threeCardTheme = record.theme;
  syncSpreadControls();

  if (DECK_THEMES.includes(record.deck)) setDeckThemeState(record.deck);
  if (record.reader) registry.setActive(record.reader); // an unknown reader leaves the current one

  state.userQuery = record.q;
  elements.queryInput.value = record.q;

  const positions = getPositionsForCurrentSpread();
  state.drawnCards = resolveCards(record, TAROT_DECK).map((drawn, idx) => ({
    card: drawn.card,
    isReversed: drawn.isReversed,
    position: { ...positions[idx], name: stripNumber(positions[idx].name) },
    isFlipped: true
  }));
  state.reading = null;
  state.completedAt = record.at;

  updateSpreadHeader();
  renderCardsOnAltar({ animate: false });
  renderReadingPanel();
  commitReading();
  announce(`Reading from ${formatRecordDate(record)} reopened.`);
}

/** Open the reading named in the address bar, if there is one. */
function restoreFromLocation() {
  const match = /^#r=([A-Za-z0-9_-]+)$/.exec(window.location.hash);
  if (!match) return false;
  const record = decodeRecord(match[1], TAROT_DECK.length);
  if (!record) {
    clearReadingLink();
    return false;
  }
  restoreRecord(record);
  return true;
}

function formatRecordDate(record) {
  return new Date(record.at).toLocaleString(undefined, { dateStyle: 'medium', timeStyle: 'short' });
}

function recordSpreadLabel(record) {
  if (record.spread === 'single') return 'Single card';
  if (record.spread === 'celtic_cross') return 'Celtic Cross';
  const option = Array.from(elements.threeCardThemeSelect.options).find(item => item.value === record.theme);
  return `3 cards — ${option ? option.text : 'Past / Present / Future'}`;
}

function setupHistory() {
  elements.historyBtn.addEventListener('click', openHistory);
  elements.closeHistoryModal.addEventListener('click', closeHistory);
  elements.historyModalBackdrop.addEventListener('click', (e) => {
    if (e.target === elements.historyModalBackdrop) closeHistory();
  });

  // Clearing everything takes two presses
  elements.clearHistoryBtn.addEventListener('click', () => {
    if (elements.clearHistoryBtn.dataset.armed !== 'true') {
      elements.clearHistoryBtn.dataset.armed = 'true';
      elements.clearHistoryBtn.textContent = 'Press again to clear all';
      return;
    }
    const storage = browserStorage();
    if (storage) saveHistory(storage, []);
    renderHistoryList();
  });
}

function openHistory() {
  renderHistoryList();
  openOverlay(elements.historyModalBackdrop, closeHistory, elements.closeHistoryModal);
}

function closeHistory() {
  closeOverlay(elements.historyModalBackdrop);
}

function renderHistoryList() {
  const container = elements.historyList;
  const records = readHistory();
  container.replaceChildren();

  elements.clearHistoryBtn.dataset.armed = 'false';
  elements.clearHistoryBtn.textContent = 'Clear all';
  elements.clearHistoryBtn.hidden = records.length === 0;

  if (records.length === 0) {
    container.appendChild(el('li', 'history-empty', 'No readings yet. Turn every card in a spread and the reading is kept here, on this device.'));
    return;
  }

  records.forEach(record => {
    const row = el('li', 'history-item');

    const open = el('button', 'history-open');
    open.type = 'button';
    open.appendChild(el('span', 'history-date', formatRecordDate(record)));
    const question = el('span', 'history-question', record.q ? `“${record.q}”` : 'No question asked');
    question.classList.toggle('is-empty', !record.q);
    open.appendChild(question);

    const reader = registry.get(record.reader);
    open.appendChild(el('span', 'history-meta', [recordSpreadLabel(record), reader ? reader.name : null].filter(Boolean).join(' · ')));

    const names = resolveCards(record, TAROT_DECK).map(item => `${item.card.name}${item.isReversed ? ' (reversed)' : ''}`);
    const shown = names.slice(0, 3).join(' · ');
    open.appendChild(el('span', 'history-cards', names.length > 3 ? `${shown} and ${names.length - 3} more` : shown));

    open.addEventListener('click', () => {
      closeHistory();
      restoreRecord(record);
      window.scrollTo({ top: 0, behavior: scrollBehavior() });
    });
    row.appendChild(open);

    const remove = el('button', 'history-delete', '×');
    remove.type = 'button';
    remove.setAttribute('aria-label', `Delete the reading from ${formatRecordDate(record)}`);
    remove.addEventListener('click', () => {
      const storage = browserStorage();
      if (storage) saveHistory(storage, removeRecord(readHistory(), record.id));
      renderHistoryList();
      elements.closeHistoryModal.focus({ preventScroll: true });
    });
    row.appendChild(remove);

    container.appendChild(row);
  });
}

// -------------------------------------------------------------
// DECK PICKER
// -------------------------------------------------------------
const DECK_INFO = {
  household: { name: 'Household Arcana', blurb: 'Seventy-eight painted plates of the house cats.' },
  surrealist: { name: 'Surrealist Altar', blurb: 'Original vector art: sacred geometry in gold line.' },
  feline: { name: 'Feline Familiars', blurb: 'A drawn cat for every card.' },
  feline_mystica: { name: 'Feline Mystica', blurb: 'Painted major arcana. Twelve plates so far; the other cards use drawn faces.' }
};
const DECK_SAMPLE_CARD = 'maj_08'; // Strength has a face in every deck

function setupDeckPicker() {
  elements.deckPickerBtn.addEventListener('click', openDeckPicker);
  elements.closeDeckModal.addEventListener('click', closeDeckPicker);
  elements.deckModalBackdrop.addEventListener('click', (e) => {
    if (e.target === elements.deckModalBackdrop) closeDeckPicker();
  });
}

function openDeckPicker() {
  renderDeckGrid();
  openOverlay(elements.deckModalBackdrop, closeDeckPicker, elements.closeDeckModal);
}

function closeDeckPicker() {
  closeOverlay(elements.deckModalBackdrop);
}

function renderDeckGrid() {
  const container = elements.deckGrid;
  const sample = getCardById(DECK_SAMPLE_CARD);
  container.replaceChildren();

  DECK_THEMES.forEach(theme => {
    const info = DECK_INFO[theme] || { name: theme, blurb: '' };
    const isCurrent = theme === state.deckTheme;

    const tile = el('button', `deck-tile ${isCurrent ? 'selected' : ''}`);
    tile.type = 'button';
    tile.setAttribute('aria-pressed', isCurrent ? 'true' : 'false');

    const art = el('div', 'deck-tile-art');
    const back = el('div', 'deck-tile-card deck-tile-back');
    back.innerHTML = useThumbs(renderActiveBack(300, 480, theme));
    const face = el('div', 'deck-tile-card deck-tile-face');
    face.innerHTML = renderThumbFace(sample, theme);
    art.append(back, face);
    tile.appendChild(art);

    const text = el('div', 'deck-tile-text');
    text.appendChild(el('span', 'deck-tile-name', info.name));
    text.appendChild(el('span', 'deck-tile-blurb', info.blurb));
    if (isCurrent) text.appendChild(el('span', 'deck-tile-current', 'In use'));
    tile.appendChild(text);

    tile.addEventListener('click', () => {
      closeDeckPicker();
      if (theme !== state.deckTheme) applyDeckTheme(theme);
    });

    container.appendChild(tile);
  });
}

// -------------------------------------------------------------
// AUDIO CONTROLS
// -------------------------------------------------------------
function setupAudioControls() {
  let isAmbianceOn = false;

  const syncMute = () => {
    sound.setMuted(state.isMuted);
    elements.muteToggleBtn.classList.toggle('is-muted', state.isMuted);
    elements.muteToggleBtn.title = state.isMuted ? 'Sound off' : 'Sound on';
    elements.muteToggleBtn.setAttribute('aria-pressed', state.isMuted ? 'false' : 'true');
  };
  syncMute();

  elements.ambianceToggleBtn.addEventListener('click', () => {
    isAmbianceOn = sound.toggleAmbiance();
    elements.ambianceToggleBtn.classList.toggle('active', isAmbianceOn);
    elements.ambianceToggleBtn.title = isAmbianceOn ? 'Candle ambiance: playing' : 'Candle ambiance: off';
    elements.ambianceToggleBtn.setAttribute('aria-pressed', isAmbianceOn ? 'true' : 'false');
  });

  elements.muteToggleBtn.addEventListener('click', () => {
    state.isMuted = !state.isMuted;
    syncMute();
    saveSettings();
  });
}

// -------------------------------------------------------------
// START
// -------------------------------------------------------------
if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
