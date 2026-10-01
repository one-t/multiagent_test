/**
 * Application controller: dealing and turning cards, the reading panel,
 * readers, the card browser, history and shareable links.
 */

import { TAROT_DECK, getCardById } from './cards.js';
import { shuffleDeck } from './shuffle.js';
import { renderCardFaceSvg as renderSvgFace, renderCardBackSvg as renderSvgBack, setDeckTheme } from './svg-art.js';
import { renderHouseholdFace, renderHouseholdBack } from './household-deck.js';
import { SPREADS, getSpread, getPositions, getThreeCardTheme, getSpreadDescription, DEFAULT_THREE_CARD_THEME } from './spreads.js';
import {
  HISTORY_LIMIT, makeRecord, encodeRecord, decodeRecord, validateRecord, resolveCards,
  upsertRecord, removeRecord, loadHistory, saveHistory
} from './history.js';
import { renderReadingImage, downloadBlob, shareBlob, readingFileName } from './share-image.js';
import { formatReadingText } from './reading-text.js';
import { registry, ReaderRegistry } from './reader-interface.js';
import { sound } from './sound.js';
import { setupSoundControl, normaliseSoundState } from './sound-control.js';
import { CandlelightSystem } from './candlelight.js';
import { assetUrl, localiseAssets, useMidPlates, useThumbs } from './assets.js';
import { openOverlay, closeOverlay, isOverlayOpen, setupOverlays, wireRadioGroup, syncRadioGroup } from './overlays.js';

// Built-in readers
import { RuthCalloway } from './readers/ruth-calloway.js';
import { CassianVetch } from './readers/cassian-vetch.js';
import { LylePasternak } from './readers/lyle-pasternak.js';
import { SableMoreau } from './readers/sable-moreau.js';
import { CalNavarro } from './readers/cal-navarro.js';

// -------------------------------------------------------------
// APP STATE
// -------------------------------------------------------------
const SETTINGS_KEY = 'astralis.settings.v1';
const DRAFT_KEY = 'astralis.draft.v1';
const DECK_THEMES = ['household', 'feline_mystica'];
const SPREAD_IDS = ['single', 'three_card', 'celtic_cross'];
const QUESTION_LIMIT = 280;

/** What is on the table and on screen right now. */
const state = {
  currentSpreadId: 'single',
  threeCardTheme: DEFAULT_THREE_CARD_THEME,
  allowReversals: true,
  userQuery: '',
  drawnCards: [], // Array of { card, isReversed, position, isFlipped, tilt }
  reading: null, // Cached interpretation for the cards on the table
  completedAt: null, // When the last card of this reading was turned
  restored: null, // { at, readerId, readerMissing } while a reopened reading is on the table
  undo: null, // The unfinished reading the last deal replaced, while it can still be brought back
  dealId: 0, // Goes up with every deal, so a delayed turn never lands on a newer spread
  deckTheme: 'household' // 'household' | 'feline_mystica'
};

/**
 * What the person has chosen for themselves, and all that is saved between
 * visits. Opening someone's link or an old reading changes `state`, never this.
 */
const prefs = {
  deckTheme: 'household',
  spread: 'single',
  threeCardTheme: DEFAULT_THREE_CARD_THEME,
  allowReversals: true,
  readerId: CassianVetch.id,
  sound: 'off'
};

/** The card dialog shows one card out of a list it can step through. */
const modal = {
  list: [], // Array of { card, isReversed, spreadIndex }
  pos: 0,
  shownReversed: false,
  fromSpread: false
};

// Register default readers
registry.register(RuthCalloway);
registry.register(CassianVetch);
registry.register(LylePasternak);
registry.register(SableMoreau);
registry.register(CalNavarro);
const BUILT_IN_READER_IDS = new Set(registry.getAll().map(reader => reader.id));

// -------------------------------------------------------------
// DOM ELEMENTS
// -------------------------------------------------------------
const byId = id => document.getElementById(id);

const elements = {
  appRoot: byId('appRoot'),
  skipLink: document.querySelector('.skip-link'),

  // Header
  deckPickerBtn: byId('deckPickerBtn'),
  deckPickerName: byId('deckPickerName'),
  readerPickerBtn: byId('readerPickerBtn'),
  activeReaderAvatar: byId('activeReaderAvatar'),
  activeReaderName: byId('activeReaderName'),
  historyBtn: byId('historyBtn'),
  compendiumBtn: byId('compendiumBtn'),
  soundBtn: byId('soundBtn'),

  // Set-up bar
  queryInput: byId('queryInput'),
  queryClearBtn: byId('queryClearBtn'),
  queryNote: byId('queryNote'),
  queryCount: byId('queryCount'),
  spreadTabs: byId('spreadTabs'),
  threeCardThemeBox: byId('threeCardThemeBox'),
  threeCardThemeSelect: byId('threeCardThemeSelect'),
  reversalsToggle: byId('reversalsToggle'),
  shuffleDealBtn: byId('shuffleDealBtn'),
  revealAllBtn: byId('revealAllBtn'),
  stageSpreadDesc: byId('stageSpreadDesc'),

  // Status
  statusLine: byId('statusLine'),
  statusText: byId('statusText'),
  statusActionBtn: byId('statusActionBtn'),
  liveStatus: byId('liveStatus'),

  // Stage
  spreadColumn: byId('spread'),
  stageSpreadTitle: byId('stageSpreadTitle'),
  cardsLayoutContainer: byId('cardsLayoutContainer'),
  spreadHint: byId('spreadHint'),
  readingSection: byId('readingSection'),

  // Readers drawer
  readersDrawerBackdrop: byId('readersDrawerBackdrop'),
  closeReadersDrawer: byId('closeReadersDrawer'),
  readersList: byId('readersList'),
  customPluginCode: byId('customPluginCode'),
  resetPluginTemplateBtn: byId('resetPluginTemplateBtn'),
  registerCustomReaderBtn: byId('registerCustomReaderBtn'),
  pluginStatusMsg: byId('pluginStatusMsg'),

  // Card dialog
  cardModalBackdrop: byId('cardModalBackdrop'),
  closeCardModal: byId('closeCardModal'),
  modalCardStage: byId('modalCardStage'),
  modalToggleOrientationBtn: byId('modalToggleOrientationBtn'),
  modalPrevBtn: byId('modalPrevBtn'),
  modalNextBtn: byId('modalNextBtn'),
  modalStep: byId('modalStep'),
  modalCardName: byId('modalCardName'),
  modalEsotericTitle: byId('modalEsotericTitle'),
  modalArcanaBadge: byId('modalArcanaBadge'),
  modalElementBadge: byId('modalElementBadge'),
  modalRulerBadge: byId('modalRulerBadge'),
  modalOrientationBadge: byId('modalOrientationBadge'),
  modalInReading: byId('modalInReading'),
  modalPositionName: byId('modalPositionName'),
  modalPositionDesc: byId('modalPositionDesc'),
  modalReflection: byId('modalReflection'),
  modalUprightSection: byId('modalUprightSection'),
  modalReversedSection: byId('modalReversedSection'),
  modalUprightFlag: byId('modalUprightFlag'),
  modalReversedFlag: byId('modalReversedFlag'),
  modalMeaningUpright: byId('modalMeaningUpright'),
  modalMeaningReversed: byId('modalMeaningReversed'),
  modalKeywordsUpright: byId('modalKeywordsUpright'),
  modalKeywordsReversed: byId('modalKeywordsReversed'),

  // All cards
  compendiumModalBackdrop: byId('compendiumModalBackdrop'),
  closeCompendiumModal: byId('closeCompendiumModal'),
  compendiumSearchInput: byId('compendiumSearchInput'),
  compendiumFilters: byId('compendiumFilters'),
  compendiumCount: byId('compendiumCount'),
  compendiumGrid: byId('compendiumGrid'),

  // Deck picker
  deckModalBackdrop: byId('deckModalBackdrop'),
  closeDeckModal: byId('closeDeckModal'),
  deckGrid: byId('deckGrid'),

  // History
  historyModalBackdrop: byId('historyModalBackdrop'),
  closeHistoryModal: byId('closeHistoryModal'),
  historyList: byId('historyList'),
  historyNote: byId('historyNote'),
  clearHistoryBtn: byId('clearHistoryBtn')
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

function button(className, text) {
  const node = el('button', className, text);
  node.type = 'button';
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

/** For screen readers only. Anything a sighted person also needs goes through showStatus. */
function announce(message) {
  elements.liveStatus.textContent = message;
}

let statusAction = null;

/**
 * The visible line under the set-up bar: what just happened, in words, with at
 * most one thing to do about it.
 * @param {string} text
 * @param {{ action?: { label: string, run: () => void }, problem?: boolean }} [options]
 */
function showStatus(text, { action = null, problem = false } = {}) {
  elements.statusText.textContent = text;
  elements.statusLine.classList.toggle('is-problem', problem);
  statusAction = action ? action.run : null;
  elements.statusActionBtn.hidden = !action;
  elements.statusActionBtn.textContent = action ? action.label : '';
}

function clearStatus() {
  showStatus('');
}

function cardCountLabel(count) {
  return count === 1 ? 'One card' : `${count} cards`;
}

function anyCardTurned() {
  return state.drawnCards.some(item => item.isFlipped);
}

function isReadingComplete() {
  return state.drawnCards.length > 0 && state.drawnCards.every(item => item.isFlipped);
}

function hasUnfinishedReading() {
  return anyCardTurned() && !isReadingComplete();
}

function randomTilt() {
  return `${(Math.random() * 3 - 1.5).toFixed(2)}deg`;
}

function formatDateTime(at) {
  return new Date(at).toLocaleString(undefined, { dateStyle: 'medium', timeStyle: 'short' });
}

// -------------------------------------------------------------
// SETTINGS
// -------------------------------------------------------------
function browserStorage() {
  try {
    return window.localStorage;
  } catch (err) {
    return null;
  }
}

/** Private browsing and a full disk both look like storage until something is written. */
function storageWorks() {
  const storage = browserStorage();
  if (!storage) return false;
  try {
    storage.setItem('astralis.probe', '1');
    storage.removeItem('astralis.probe');
    return true;
  } catch (err) {
    return false;
  }
}

function loadSettings() {
  try {
    return JSON.parse(browserStorage().getItem(SETTINGS_KEY)) || {};
  } catch (err) {
    return {};
  }
}

function saveSettings() {
  try {
    browserStorage().setItem(SETTINGS_KEY, JSON.stringify(prefs));
  } catch (err) {
    // Storage can be unavailable (private mode). Settings just won't persist.
  }
}

function applySavedSettings() {
  const saved = loadSettings();

  if (DECK_THEMES.includes(saved.deckTheme)) prefs.deckTheme = saved.deckTheme;
  if (SPREAD_IDS.includes(saved.spread)) prefs.spread = saved.spread;
  if (typeof saved.threeCardTheme === 'string') prefs.threeCardTheme = getThreeCardTheme(saved.threeCardTheme).id;
  if (typeof saved.allowReversals === 'boolean') prefs.allowReversals = saved.allowReversals;
  prefs.sound = normaliseSoundState(saved.sound); // off unless the person turned it on

  // Cassian is the default reader unless the user chose someone else.
  if (saved.readerId && registry.get(saved.readerId)) prefs.readerId = saved.readerId;
  registry.setActive(prefs.readerId);

  state.deckTheme = prefs.deckTheme;
  state.currentSpreadId = prefs.spread;
  state.threeCardTheme = prefs.threeCardTheme;
  state.allowReversals = prefs.allowReversals;
}

// -------------------------------------------------------------
// INITIALIZATION
// -------------------------------------------------------------
function initApp() {
  // Background candlelight
  if (!prefersReducedMotion()) new CandlelightSystem('candleCanvas');

  applySavedSettings();

  setupOverlays({ root: elements.appRoot, onArrow: handleOverlayArrow });
  setupStatusLine();
  setupPictureFallback();
  setupSkipLink();
  setDeckThemeState(state.deckTheme);
  setupSpreadControls();
  setupQuestionField();
  setupSound();
  setupReadersDrawer();
  setupCardDialog();
  setupCompendium();
  setupDeckPicker();
  setupHistory();

  // A shared link opens that reading; a reading interrupted by a reload comes back; otherwise deal.
  if (!restoreFromLocation() && !restoreDraft()) dealSpread({ silent: true });
  window.addEventListener('hashchange', () => restoreFromLocation());
}

// initApp is started at the bottom of the file, once every constant above it exists.

function setupStatusLine() {
  elements.statusActionBtn.addEventListener('click', () => {
    if (statusAction) statusAction();
  });
}

/** If a smaller copy of a plate is missing, load the full-size one in its place. */
function setupPictureFallback() {
  document.addEventListener('error', (event) => {
    const target = event.target;
    if (!(target instanceof SVGImageElement)) return;
    const href = target.getAttribute('href') || '';
    if (/\/(mid|thumb)\/[^/]+$/.test(href)) target.setAttribute('href', href.replace(/\/(mid|thumb)\/([^/]+)$/, '/$2'));
  }, true);
}

function setupSkipLink() {
  // Handled here so the jump does not overwrite the reading link in the address bar
  elements.skipLink.addEventListener('click', (event) => {
    event.preventDefault();
    const firstCard = elements.cardsLayoutContainer.querySelector('.card-wrapper');
    (firstCard || elements.spreadColumn).focus();
  });
}

function setupSound() {
  setupSoundControl(elements.soundBtn, {
    initial: prefs.sound,
    onChange: (next) => {
      prefs.sound = next;
      saveSettings();
    }
  });
}

// -------------------------------------------------------------
// DECK THEME
// -------------------------------------------------------------
/** A card face as SVG, with its pictures pointed at this app's assets folder. */
function renderActiveFace(card, theme = state.deckTheme) {
  return localiseAssets(theme === 'household' ? renderHouseholdFace(card) : renderSvgFace(card, theme));
}

/** Cards on the table load 640px plates; the full-size ones are kept for the card dialog. */
function renderMidFace(card, theme = state.deckTheme) {
  return useMidPlates(renderActiveFace(card, theme));
}

/** Small renders (reading thumbnails, the card browser, the deck picker) load the downsized plates. */
function renderThumbFace(card, theme = state.deckTheme) {
  return useThumbs(renderActiveFace(card, theme));
}

function renderActiveBack(width = 300, height = 480, theme = state.deckTheme) {
  return localiseAssets(theme === 'household' ? renderHouseholdBack(width, height) : renderSvgBack(width, height, theme));
}

/** Point every renderer and control at a deck, without redrawing anything. */
function setDeckThemeState(theme) {
  state.deckTheme = theme;
  if (theme !== 'household') setDeckTheme(theme);
  elements.deckPickerName.textContent = deckInfo(theme).name;
}

/** Redraw everything that shows a card. The cards keep their place and their tilt. */
function redrawForDeck() {
  if (state.drawnCards.length > 0) {
    renderSpread({ animate: false });
    renderReadingPanel();
  }
  if (isOverlayOpen(elements.cardModalBackdrop)) renderModalCard();
  if (isOverlayOpen(elements.compendiumModalBackdrop)) renderCompendiumCards();
}

/** The person picks a deck. */
function chooseDeck(theme) {
  if (!DECK_THEMES.includes(theme)) return;
  prefs.deckTheme = theme;
  saveSettings();
  if (theme === state.deckTheme) return;

  setDeckThemeState(theme);
  redrawForDeck();
  commitReading();
  saveDraft();
  showStatus(`Deck changed to ${deckInfo(theme).name}. The same cards are on the table.`);
}

// -------------------------------------------------------------
// SPREAD SET-UP
// -------------------------------------------------------------
/** Make the spread tabs and the three-card frame match state. */
function syncSpreadControls() {
  syncRadioGroup(elements.spreadTabs, tab => tab.dataset.spread === state.currentSpreadId);
  state.threeCardTheme = getThreeCardTheme(state.threeCardTheme).id;
  elements.threeCardThemeSelect.value = state.threeCardTheme;
  elements.threeCardThemeBox.hidden = state.currentSpreadId !== 'three_card';
  elements.reversalsToggle.checked = state.allowReversals;
}

/** The three-card frames come from the spread data, so the copy lives in one place. */
function populateThemeSelect() {
  const select = elements.threeCardThemeSelect;
  select.replaceChildren();
  SPREADS.three_card.subThemes.forEach(theme => {
    const option = document.createElement('option');
    option.value = theme.id;
    option.textContent = theme.label;
    select.appendChild(option);
  });
}

function setupSpreadControls() {
  populateThemeSelect();
  syncSpreadControls();

  // Choosing the spread that is already on the table does nothing
  wireRadioGroup(elements.spreadTabs, (tab) => {
    const spreadId = tab.dataset.spread;
    if (spreadId === state.currentSpreadId) return;
    dealSpread({
      before: () => {
        state.currentSpreadId = spreadId;
        prefs.spread = spreadId;
        saveSettings();
      }
    });
  });

  elements.threeCardThemeSelect.addEventListener('change', (e) => {
    const themeId = getThreeCardTheme(e.target.value).id;
    dealSpread({
      before: () => {
        state.threeCardTheme = themeId;
        prefs.threeCardTheme = themeId;
        saveSettings();
      }
    });
  });

  // Reversals apply to a deal. With nothing turned yet, deal again so the choice shows at once.
  elements.reversalsToggle.addEventListener('change', (e) => {
    state.allowReversals = e.target.checked;
    prefs.allowReversals = state.allowReversals;
    saveSettings();
    const choice = state.allowReversals ? 'Reversed cards are included' : 'Reversed cards are left out';
    if (anyCardTurned()) {
      showStatus(`${choice} from the next deal. The cards on the table stay as they are.`);
    } else {
      dealSpread({ note: `${choice}.` });
    }
  });

  elements.shuffleDealBtn.addEventListener('click', () => dealSpread());
  elements.revealAllBtn.addEventListener('click', () => revealAllCards());
}

/** "One card", "Three cards · Past, present, future", "Celtic Cross". Used everywhere the spread is named. */
function spreadLabel(spreadId, themeId) {
  const spread = getSpread(spreadId);
  if (spreadId === 'three_card') return `${spread.name} · ${getThreeCardTheme(themeId).label}`;
  return spread.name;
}

function currentSpreadTitle() {
  return spreadLabel(state.currentSpreadId, state.threeCardTheme);
}

function updateSpreadHeader() {
  elements.stageSpreadTitle.textContent = currentSpreadTitle();
  elements.stageSpreadDesc.textContent = getSpreadDescription(state.currentSpreadId, state.threeCardTheme);
}

/** Once a card has been turned there is a reading on the table, and dealing again replaces it. */
function syncDealButton() {
  elements.shuffleDealBtn.textContent = anyCardTurned() ? 'Deal again' : 'Shuffle and deal';
  // Nothing left to turn: the button goes, so it is never a control that does nothing
  elements.revealAllBtn.hidden = isReadingComplete();
}

/** One line under the cards saying what selecting a card will do. */
function updateSpreadHint() {
  const count = state.drawnCards.length;
  let hint;
  if (isReadingComplete()) {
    hint = count === 1 ? 'Select the card to see it large, with its meanings.' : 'Select any card to see it large, with its meanings.';
  } else if (anyCardTurned()) {
    hint = 'Select a face-down card to turn it over, or a turned card to see it large.';
  } else {
    hint = count === 1 ? 'Select the card to turn it over.' : 'Select a card to turn it over. Any order will do.';
  }
  elements.spreadHint.textContent = hint;
}

function getPositionsForCurrentSpread() {
  return getPositions(state.currentSpreadId, state.threeCardTheme);
}

/** Everything needed to put the table back exactly as it is. */
function snapshotTable() {
  return {
    currentSpreadId: state.currentSpreadId,
    threeCardTheme: state.threeCardTheme,
    userQuery: state.reading ? state.reading.question : state.userQuery,
    drawnCards: state.drawnCards,
    reading: state.reading,
    completedAt: state.completedAt,
    restored: state.restored,
    deckTheme: state.deckTheme,
    readerId: registry.getActive() ? registry.getActive().id : null
  };
}

/** Bring back the unfinished reading the last deal replaced. */
function undoDeal() {
  const saved = state.undo;
  if (!saved) return;

  state.undo = null;
  state.dealId++;
  state.currentSpreadId = saved.currentSpreadId;
  state.threeCardTheme = saved.threeCardTheme;
  state.userQuery = saved.userQuery;
  state.drawnCards = saved.drawnCards;
  state.reading = saved.reading;
  state.completedAt = saved.completedAt;
  state.restored = saved.restored;
  if (saved.deckTheme !== state.deckTheme) setDeckThemeState(saved.deckTheme);
  if (saved.readerId) registry.setActive(saved.readerId);
  elements.queryInput.value = saved.userQuery;

  syncSpreadControls();
  updateSpreadHeader();
  renderSpread({ animate: false });
  renderReadingPanel();
  syncQuestionField();
  updateSpreadHint();
  saveDraft();
  showStatus('Your reading is back on the table.');
}

/**
 * Fisher-Yates shuffle of the 78 cards, deal the spread, and lay the cards face down.
 *
 * @param {object} [options]
 * @param {boolean} [options.silent] No sound and no status line (the deal on page load)
 * @param {() => void} [options.before] A change of spread or frame to apply before dealing
 * @param {string} [options.note] Said in the status line before the deal itself
 */
function dealSpread({ silent = false, before = null, note = '' } = {}) {
  // A partly turned spread is not in History yet, so it is kept until the person moves on
  const undo = hasUnfinishedReading() ? snapshotTable() : null;
  const wasRestored = Boolean(state.restored);
  if (before) before();

  // A reopened reading borrowed its deck and reader. A fresh deal goes back to the person's own.
  const returned = [];
  if (wasRestored) {
    if (state.deckTheme !== prefs.deckTheme) {
      setDeckThemeState(prefs.deckTheme);
      returned.push(deckInfo(prefs.deckTheme).name);
    }
    const active = registry.getActive();
    if (active && active.id !== prefs.readerId && registry.setActive(prefs.readerId)) {
      returned.push(registry.getActive().name);
    }
  }

  if (!silent) sound.playSwoosh();
  state.dealId++;
  state.userQuery = elements.queryInput.value;
  syncSpreadControls();
  updateSpreadHeader();

  const positions = getPositionsForCurrentSpread();
  const deck = shuffleDeck(TAROT_DECK, { allowReversals: state.allowReversals });

  state.drawnCards = positions.map((position, idx) => ({
    card: deck[idx].card,
    isReversed: deck[idx].isReversed,
    position,
    isFlipped: false,
    tilt: randomTilt()
  }));
  state.reading = null;
  state.completedAt = null;
  state.restored = null;
  state.undo = undo;
  clearReadingLink();
  clearDraft();

  renderSpread({ animate: true });
  renderReadingPanel();
  syncQuestionField();
  updateSpreadHint();

  if (silent) {
    clearStatus();
    return;
  }
  const parts = [note, `${cardCountLabel(state.drawnCards.length)} dealt face down.`];
  if (returned.length) parts.push(`Back to your own ${returned.join(' and ')}.`);
  if (undo) {
    parts.push('The reading you had started was set aside.');
    showStatus(parts.filter(Boolean).join(' '), { action: { label: 'Bring it back', run: undoDeal } });
  } else {
    showStatus(parts.filter(Boolean).join(' '));
  }
}

// -------------------------------------------------------------
// THE QUESTION
// -------------------------------------------------------------
let pasteWasCut = false;

function setupQuestionField() {
  const input = elements.queryInput;

  input.addEventListener('input', () => {
    state.userQuery = input.value;
    // Until a card is turned, the reading has not started: keep the title in step with the question.
    if (!anyCardTurned()) {
      state.reading = null;
      updateQuestionTitle();
    }
    syncQuestionField();
  });

  // The field holds 280 characters. A longer paste is cut, and says so.
  input.addEventListener('paste', (event) => {
    const pasted = event.clipboardData ? event.clipboardData.getData('text') : '';
    const selected = (input.selectionEnd || 0) - (input.selectionStart || 0);
    pasteWasCut = input.value.length - selected + pasted.length > QUESTION_LIMIT;
  });

  input.addEventListener('keydown', (event) => {
    // Enter while composing (Japanese, Chinese, Korean input) confirms the text, nothing more
    if (event.key !== 'Enter' || event.isComposing || event.keyCode === 229) return;
    event.preventDefault();

    if (anyCardTurned()) {
      // A new question for cards already being read means a new deal
      if (input.value.trim() !== readingQuestion()) dealSpread();
      return;
    }
    // The cards are already down and waiting: go to them
    const firstCard = elements.cardsLayoutContainer.querySelector('.card-wrapper');
    if (firstCard) firstCard.focus();
    showStatus(input.value.trim() ? 'Question set. Turn a card over to begin.' : 'Turn a card over to begin.');
  });

  elements.queryClearBtn.addEventListener('click', () => {
    input.value = '';
    input.dispatchEvent(new Event('input', { bubbles: true }));
    input.focus();
  });
}

/** The clear button, the character count, and the note shown when the box no longer matches the reading. */
function syncQuestionField() {
  const value = elements.queryInput.value;
  elements.queryClearBtn.hidden = value.length === 0;

  const count = elements.queryCount;
  count.hidden = value.length < QUESTION_LIMIT - 80;
  count.textContent = `${value.length} of ${QUESTION_LIMIT} characters`;
  count.classList.toggle('is-full', value.length >= QUESTION_LIMIT);

  const note = elements.queryNote;
  note.replaceChildren();
  const differs = anyCardTurned() && value.trim() !== readingQuestion();
  if (differs) {
    const earlier = readingQuestion();
    note.append(earlier ? 'The cards on the table are being read for your earlier question. ' : 'The cards on the table are being read without a question. ');
    const again = button('link-btn', 'Deal again for this question');
    again.addEventListener('click', () => dealSpread());
    note.appendChild(again);
  } else if (pasteWasCut && value.length >= QUESTION_LIMIT) {
    note.textContent = `The pasted text was longer than ${QUESTION_LIMIT} characters and has been cut.`;
  }
  if (value.length < QUESTION_LIMIT) pasteWasCut = false;
  note.hidden = note.childNodes.length === 0;
}

// -------------------------------------------------------------
// RENDER THE SPREAD
// -------------------------------------------------------------
function renderSpread({ animate = false } = {}) {
  const container = elements.cardsLayoutContainer;
  container.className = `cards-layout-container layout-${state.currentSpreadId}`;
  container.replaceChildren();
  elements.readingSection.parentElement.dataset.spread = state.currentSpreadId;

  const backSvg = useMidPlates(renderActiveBack(300, 480));

  if (state.currentSpreadId === 'celtic_cross') {
    // A 3x3 cross, with the second card laid across the first, and a staff of four beside it
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
        // Cards 7-10: the staff
        staff.appendChild(cell);
      }
    });

    container.appendChild(arena);
    container.appendChild(staff);
  } else {
    state.drawnCards.forEach((item, idx) => {
      container.appendChild(createCardCell(item, idx, backSvg));
    });
  }

  if (!animate) return;
  if (prefersReducedMotion()) {
    // No cards flying in, but a new deal must still look like something happened
    container.classList.add('just-dealt');
    container.addEventListener('animationend', () => container.classList.remove('just-dealt'), { once: true });
  } else {
    playDealAnimation(container);
  }
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

function seatLabel(item, idx) {
  const number = positionNumber(idx);
  return `${number ? `${number}. ` : ''}${item.position.name}`;
}

function cardAriaLabel(item, idx) {
  const seat = seatLabel(item, idx);
  if (!item.isFlipped) return `${seat}, face down. Press to turn over.`;
  return `${seat}: ${item.card.name}${item.isReversed ? ', reversed' : ''}. Press to open details.`;
}

/** One position: its label, and the card as a two-sided object that turns over. */
function createCardCell(item, idx, backSvg) {
  const cell = el('div', 'card-cell');

  const posTag = el('div', 'position-tag');
  posTag.dataset.tagIndex = idx;
  // The number and the name are one run of text, so a long name wraps under its number
  const label = el('span', 'pos-label');
  const number = positionNumber(idx);
  if (number) label.appendChild(el('span', 'pos-num', String(number)));
  label.appendChild(el('span', 'pos-name', item.position.name));
  posTag.appendChild(label);
  if (item.isReversed) {
    // Said in words once the card is face up; a narrow label gets the short form
    const rev = el('span', 'pos-rev');
    rev.appendChild(el('span', 'pos-rev-long', 'Reversed'));
    const short = el('span', 'pos-rev-short', 'Rev.');
    short.setAttribute('aria-hidden', 'true');
    rev.appendChild(short);
    posTag.appendChild(rev);
    posTag.classList.toggle('show-rev', item.isFlipped);
  }
  cell.appendChild(posTag);

  const wrapper = el('div', `card-wrapper ${item.isReversed ? 'reversed' : ''} ${item.isFlipped ? 'flipped' : ''}`);
  wrapper.dataset.index = idx;
  wrapper.tabIndex = 0;
  wrapper.setAttribute('role', 'button');
  wrapper.setAttribute('aria-label', cardAriaLabel(item, idx));
  // The tilt belongs to the card, so redrawing the table does not shuffle the angles
  wrapper.style.setProperty('--tilt', item.tilt || '0deg');

  const inner = el('div', 'card-inner');

  const frontFace = el('div', 'card-face card-face-front');
  frontFace.innerHTML = renderMidFace(item.card);
  frontFace.appendChild(el('div', 'card-shimmer'));

  const backFace = el('div', 'card-face card-face-back');
  backFace.innerHTML = backSvg;

  inner.appendChild(frontFace);
  inner.appendChild(backFace);
  wrapper.appendChild(inner);

  // Click / keyboard: turn over, or open the details
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

/** A face-down card turns over. A face-up card opens its details. */
function handleCardClick(idx) {
  const item = state.drawnCards[idx];
  if (!item) return;

  if (!item.isFlipped) {
    flipCard(idx, { scroll: true });
  } else {
    openSpreadCard(idx);
  }
}

/**
 * Turn one card face up and bring its part of the reading in with it.
 * @param {number} idx
 * @param {{ scroll?: boolean, quiet?: boolean }} [options] `quiet` is for turning several at once:
 *   no sound and no announcement per card, the caller gives one summary.
 */
function flipCard(idx, { scroll = false, quiet = false } = {}) {
  const item = state.drawnCards[idx];
  if (!item || item.isFlipped) return;

  if (!quiet) sound.playFlip();
  item.isFlipped = true;

  // The person has moved on with these cards: the line about the deal has done its job,
  // and the reading set aside by that deal is let go
  state.undo = null;
  clearStatus();

  const wrapper = wrapperFor(idx);
  if (wrapper) {
    wrapper.classList.add('flipped');
    wrapper.setAttribute('aria-label', cardAriaLabel(item, idx));
  }
  const tag = elements.cardsLayoutContainer.querySelector(`.position-tag[data-tag-index="${idx}"]`);
  if (tag) tag.classList.add('show-rev');

  revealEntry(idx, { scroll });
  updateReadingNotice();
  updateQuestionTitle();
  syncDealButton();
  syncQuestionField();
  updateSpreadHint();

  const turned = `${item.position.name}: ${item.card.name}${item.isReversed ? ', reversed' : ''}.`;
  if (isReadingComplete()) {
    sound.playChime(528);
    revealSynthesis();
    commitReading();
    if (!quiet) announce(`${turned} All cards are turned. The full reading is ready.`);
  } else {
    if (!quiet) announce(turned);
    saveDraft();
  }
}

/** Turn every remaining card, one after another. */
function revealAllCards() {
  const unflipped = state.drawnCards
    .map((item, idx) => ({ item, idx }))
    .filter(({ item }) => !item.isFlipped);

  if (unflipped.length === 0) return;

  const dealId = state.dealId;
  const step = prefersReducedMotion() ? 0 : 160;
  sound.playFlip(); // one sound for the run, not one per card
  unflipped.forEach(({ idx }, i) => {
    setTimeout(() => {
      if (state.dealId !== dealId) return; // the table was dealt again in the meantime
      flipCard(idx, { quiet: true });
      if (i !== unflipped.length - 1) return;

      // One summary, where a card-by-card account would talk over itself
      const count = state.drawnCards.length;
      announce(count === 1 ? 'The card is turned. The reading is ready.' : `All ${count} cards are turned. The full reading is ready.`);
      if (!isSideBySide()) {
        // Stacked layout: the reading sits below the spread, so bring it into view.
        setTimeout(() => {
          elements.readingSection.scrollIntoView({ behavior: scrollBehavior(), block: 'start' });
        }, 500);
      }
    }, i * step);
  });
}

// -------------------------------------------------------------
// THE READING
// -------------------------------------------------------------
/**
 * Interpret the cards on the table once, the first time one is turned.
 * A reader that throws, or returns something unusable, is replaced by the
 * cards' own meanings, and the panel says so.
 */
function ensureReading() {
  if (state.reading) return state.reading;

  const reader = registry.getActive();
  const spreadData = {
    spread: { ...getSpread(state.currentSpreadId), positions: getPositionsForCurrentSpread() },
    cards: state.drawnCards,
    question: state.userQuery
  };

  let result = null;
  let failure = '';
  try {
    result = reader ? registry.interpret(spreadData) : null;
    if (!ReaderRegistry.isUsableReading(result, state.drawnCards.length)) {
      failure = 'it did not return a reading for every card';
      result = null;
    }
  } catch (err) {
    console.error('The reader could not read these cards:', err);
    failure = err && err.message ? err.message : String(err);
  }
  if (!result) result = ReaderRegistry.plainReading(spreadData, reader || {});

  state.reading = {
    ...result,
    readerName: result.readerName || (reader ? reader.name : ''),
    question: state.userQuery.trim(),
    failure
  };
  return state.reading;
}

function readingQuestion() {
  if (state.reading) return state.reading.question;
  return state.userQuery.trim();
}

/**
 * The question heads the reading. Without one, the heading is there for
 * screen readers only until a card is turned; then it says "Open reading".
 */
function updateQuestionTitle() {
  const title = elements.readingSection.querySelector('.question-title');
  if (!title) return;
  const question = readingQuestion();
  const started = anyCardTurned();
  title.textContent = question ? `“${question}”` : (started ? 'Open reading' : 'Reading');
  title.classList.toggle('sr-only', !question && !started);
  title.classList.toggle('is-long', question.length > 90 && question.length <= 180);
  title.classList.toggle('is-very-long', question.length > 180);
}

/** Draw the whole reading panel from state: header, question, one row per position, and the synthesis. */
function renderReadingPanel() {
  const section = elements.readingSection;
  const reader = registry.getActive();
  const complete = isReadingComplete();
  if (anyCardTurned()) ensureReading();

  section.replaceChildren();

  // Who is reading
  const header = el('div', 'reading-header');
  const badge = el('div', 'reader-badge');
  const avatar = el('div', 'reader-avatar-circle');
  avatar.setAttribute('aria-hidden', 'true');
  fillAvatar(avatar, reader);
  badge.appendChild(avatar);
  const info = el('div', 'reader-header-info');
  info.appendChild(el('p', 'reader-name', reader ? reader.name : 'Reader'));
  if (reader && reader.title) info.appendChild(el('p', 'reader-subtitle', reader.title));
  badge.appendChild(info);
  header.appendChild(badge);

  const switchBtn = button('btn btn-ghost', 'Change reader');
  switchBtn.id = 'changeReaderBtn';
  switchBtn.setAttribute('aria-haspopup', 'dialog');
  switchBtn.addEventListener('click', openReadersDrawer);
  header.appendChild(switchBtn);
  section.appendChild(header);

  const noticeSlot = el('div', 'reading-notice-slot');
  noticeSlot.id = 'readingNoticeSlot';
  section.appendChild(noticeSlot);
  updateReadingNotice();

  // The question is the title of the reading
  const questionBox = el('div', 'reading-question');
  questionBox.appendChild(el('p', 'reading-eyebrow', currentSpreadTitle()));
  questionBox.appendChild(el('h2', 'question-title'));
  const date = el('p', 'reading-date');
  date.id = 'readingDate';
  questionBox.appendChild(date);
  section.appendChild(questionBox);
  updateQuestionTitle();
  updateReadingDate();

  // Copy, link, picture: only once there is a whole reading to keep
  const actions = buildReadingActions();
  actions.hidden = !complete;
  section.appendChild(actions);

  // One row per position
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
  synthesis.hidden = !complete;
  if (complete) fillSynthesis(synthesis);
  section.appendChild(synthesis);

  syncDealButton();
}

/** Anything about this reading the person should know before reading it. */
function readingNotice() {
  const reading = state.reading;
  const reader = registry.getActive();

  if (reading && reading.failure) {
    const name = reader ? reader.name : 'The reader';
    return el('p', 'reading-notice is-problem',
      `${name} could not read these cards (${reading.failure}). What follows is each card's own meaning. Choose another reader to have them read.`);
  }
  if (state.restored && state.restored.readerMissing) {
    return el('p', 'reading-notice',
      `This reading was first read by a reader that is not available here, so ${reader ? reader.name : 'another reader'} is reading the same cards.`);
  }
  return null;
}

/** The reader is first asked when a card is turned, so the notice is checked again then. */
function updateReadingNotice() {
  const slot = document.getElementById('readingNoticeSlot');
  if (!slot) return;
  const notice = readingNotice();
  if (notice) slot.replaceChildren(notice);
  else slot.replaceChildren();
}

/** When the reading was finished, and whether it has been reopened. */
function updateReadingDate() {
  const date = document.getElementById('readingDate');
  if (!date) return;
  const show = isReadingComplete() && state.completedAt;
  date.hidden = !show;
  if (!show) return;
  const when = formatDateTime(state.completedAt);
  date.textContent = state.restored ? `Reopened. First read ${when}.` : `Read ${when}.`;
}

function buildReadingActions() {
  const actions = el('div', 'reading-actions');
  actions.id = 'readingActions';

  const copyBtn = button('btn btn-ghost', 'Copy text');
  copyBtn.id = 'copyReadingBtn';
  copyBtn.title = 'Copy the reading as plain text';
  copyBtn.addEventListener('click', () => copyReadingToClipboard());

  const linkBtn = button('btn btn-ghost', 'Copy link');
  linkBtn.id = 'copyLinkBtn';
  linkBtn.title = 'Copy a link that reopens this reading';
  linkBtn.setAttribute('aria-expanded', 'false');
  linkBtn.setAttribute('aria-controls', 'linkOptions');
  linkBtn.addEventListener('click', () => onCopyLinkPressed());

  const imageBtn = button('btn btn-ghost', 'Save image');
  imageBtn.id = 'saveImageBtn';
  imageBtn.title = 'Save the spread as a picture';
  imageBtn.addEventListener('click', () => saveReadingImage());

  const status = el('span', 'reading-actions-status');
  status.id = 'readingActionsStatus';
  status.setAttribute('role', 'status');

  // A link can carry the question. The person decides, each time.
  const options = el('div', 'link-options');
  options.id = 'linkOptions';
  options.hidden = true;
  options.appendChild(el('p', null, 'The link holds the cards, the deck and the reader. It can also hold your question, which anyone with the link could then read.'));
  const withQuestion = button('btn btn-ghost', 'Copy with my question');
  withQuestion.addEventListener('click', () => copyReadingLink({ includeQuestion: true }));
  const withoutQuestion = button('btn btn-ghost', 'Copy without my question');
  withoutQuestion.addEventListener('click', () => copyReadingLink({ includeQuestion: false }));
  options.append(withQuestion, withoutQuestion);

  actions.append(copyBtn, linkBtn, imageBtn, status, options);
  return actions;
}

/** Feedback for Copy / Link / Save sits beside the buttons, so their labels never change width. */
function setActionStatus(text, { problem = false } = {}) {
  const status = document.getElementById('readingActionsStatus');
  if (!status) return;
  status.textContent = text;
  status.classList.toggle('is-problem', problem);
}

/** Fill one row: a face-down placeholder before the turn, the card and its reading after. */
function fillEntry(entry, idx) {
  const item = state.drawnCards[idx];
  const number = positionNumber(idx);
  entry.replaceChildren();
  entry.classList.toggle('is-waiting', !item.isFlipped);

  if (!item.isFlipped) {
    // Says what this position is about. The card itself is the control that turns it.
    const waiting = el('div', 'entry-waiting');
    if (number) waiting.appendChild(el('span', 'entry-num', String(number)));
    const text = el('span', 'entry-waiting-text');
    text.appendChild(el('span', 'entry-pos-title', item.position.name));
    if (item.position.description) text.appendChild(el('span', 'entry-pos-desc', item.position.description));
    waiting.appendChild(text);
    waiting.appendChild(el('span', 'entry-face-down', 'Face down'));
    entry.appendChild(waiting);
    return;
  }

  const reading = ensureReading();
  const data = (reading && reading.cardReadings && reading.cardReadings[idx]) || {};

  const thumb = button(`entry-thumb ${item.isReversed ? 'reversed' : ''}`);
  thumb.setAttribute('aria-label', `Open ${item.card.name}`);
  thumb.innerHTML = renderThumbFace(item.card);
  thumb.addEventListener('click', () => openSpreadCard(idx));
  entry.appendChild(thumb);

  const body = el('div', 'entry-body');
  const head = el('div', 'entry-header');
  const seat = el('div', 'entry-seat');
  if (number) seat.appendChild(el('span', 'entry-num', String(number)));
  seat.appendChild(el('span', 'entry-pos-title', item.position.name));
  head.appendChild(seat);

  // The chip always says which way up the card is. Reader flavour belongs in the prose.
  const drawn = el('h3', 'entry-drawn');
  drawn.appendChild(el('span', 'entry-card-title', item.card.name));
  drawn.appendChild(el('span', `entry-orientation ${item.isReversed ? 'reversed' : ''}`, orientationLabel(item)));
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
  const actions = document.getElementById('readingActions');
  if (actions) actions.hidden = false;
}

const TALLY_GROUPS = [
  { id: 'wands', label: 'Wands' },
  { id: 'cups', label: 'Cups' },
  { id: 'swords', label: 'Swords' },
  { id: 'pentacles', label: 'Pentacles' },
  { id: 'majors', label: 'Major Arcana' }
];

/** How the spread divides between the suits and the majors: a bar to scale, and the numbers under it. */
function buildSuitTally() {
  const { suits, majors } = ReaderRegistry.analyzeElements(state.drawnCards);
  const parts = TALLY_GROUPS
    .map(group => ({ ...group, count: group.id === 'majors' ? majors : suits[group.id] }))
    .filter(group => group.count > 0);

  const tally = el('div', 'suit-tally');
  const bar = el('div', 'suit-bar');
  bar.setAttribute('aria-hidden', 'true');
  const legend = el('ul', 'suit-legend');
  legend.setAttribute('aria-label', 'Cards by suit');

  parts.forEach(part => {
    const segment = el('span', `suit-segment suit-${part.id}`);
    segment.style.flexGrow = String(part.count);
    bar.appendChild(segment);

    const item = el('li');
    const dot = el('span', `suit-dot suit-${part.id}`);
    dot.setAttribute('aria-hidden', 'true');
    item.append(dot, `${part.label} ${part.count}`);
    legend.appendChild(item);
  });

  tally.append(bar, legend);
  return tally;
}

function fillSynthesis(synthesis) {
  const reading = ensureReading();
  if (!reading) return;
  synthesis.replaceChildren();

  const summary = el('div', 'reading-summary-box');
  if (reading.summary) summary.appendChild(el('p', 'summary-text', reading.summary));

  // A tally of one card says nothing. Show the balance only when there is one.
  // The numbers are the app's; the reader adds a sentence about them.
  if (state.drawnCards.length >= 3) {
    summary.appendChild(buildSuitTally());
    if (reading.elementalInsight) summary.appendChild(el('p', 'elemental-note', reading.elementalInsight));
  }
  if (summary.childNodes.length) synthesis.appendChild(summary);

  const conclusion = el('div', 'reading-conclusion');
  if (reading.actionableAdvice) {
    const advice = el('div', 'conclusion-block');
    advice.appendChild(el('h3', null, 'Advice'));
    advice.appendChild(el('p', null, reading.actionableAdvice));
    conclusion.appendChild(advice);
  }
  if (reading.closingBenediction) {
    const closing = el('div', 'conclusion-block');
    closing.appendChild(el('p', 'closing-words', reading.closingBenediction));
    conclusion.appendChild(closing);
  }
  if (conclusion.childNodes.length) synthesis.appendChild(conclusion);
}

/** A different reader reads the same cards. Focus stays where it was. */
function refreshReading() {
  const active = document.activeElement;
  const focusId = active && elements.readingSection.contains(active) ? active.id : '';

  state.reading = null;
  renderReadingPanel();
  commitReading();
  saveDraft();

  if (focusId) {
    const again = document.getElementById(focusId);
    if (again) again.focus({ preventScroll: true });
  }
}

function orientationLabel(item) {
  return item.isReversed ? 'Reversed' : 'Upright';
}

/** The reading as plain text: no markup, since it is pasted into places that do not render any. */
function readingAsText() {
  const reading = ensureReading();
  if (!reading) return '';

  return formatReadingText({
    readerName: reading.readerName,
    spreadLabel: currentSpreadTitle(),
    dateLabel: state.completedAt ? new Date(state.completedAt).toLocaleDateString(undefined, { dateStyle: 'long' }) : '',
    question: reading.question,
    cards: state.drawnCards.map((item, idx) => ({
      position: item.position.name,
      cardName: item.card.name,
      isReversed: item.isReversed,
      text: (reading.cardReadings[idx] || {}).reflection || ''
    })),
    summary: reading.summary,
    advice: reading.actionableAdvice,
    closing: reading.closingBenediction
  });
}

/**
 * Put text on the clipboard. Tries the modern way, then the old one, which
 * also works where the page is not served securely.
 * @returns {Promise<boolean>}
 */
async function copyText(text) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch (err) {
    // Permission refused or the document lost focus: fall through to the older way
  }

  const previous = document.activeElement;
  const area = document.createElement('textarea');
  area.value = text;
  area.setAttribute('readonly', '');
  area.style.position = 'fixed';
  area.style.top = '0';
  area.style.opacity = '0';
  // Inside whatever currently has the keyboard, so an open dialog does not block it
  const host = (previous && previous.closest('[role="dialog"]')) || document.body;
  host.appendChild(area);
  area.select();
  let copied = false;
  try {
    copied = document.execCommand('copy');
  } catch (err) {
    copied = false;
  }
  area.remove();
  if (previous && typeof previous.focus === 'function') previous.focus({ preventScroll: true });
  return copied;
}

async function copyReadingToClipboard() {
  const text = readingAsText();
  if (!text) return;
  if (await copyText(text)) {
    setActionStatus('Reading copied as text.');
  } else {
    setActionStatus("Couldn't copy. Select the reading and copy it by hand.", { problem: true });
  }
}

// -------------------------------------------------------------
// READERS DRAWER AND CUSTOM READERS
// -------------------------------------------------------------
function setupReadersDrawer() {
  elements.readerPickerBtn.addEventListener('click', openReadersDrawer);
  elements.closeReadersDrawer.addEventListener('click', closeReadersDrawer);
  elements.readersDrawerBackdrop.addEventListener('click', (e) => {
    if (e.target === elements.readersDrawerBackdrop) closeReadersDrawer();
  });

  wireRadioGroup(elements.readersList, card => chooseReader(card.dataset.readerId));

  // The custom reader box starts with a worked example
  populatePluginTemplate();
  elements.resetPluginTemplateBtn.addEventListener('click', () => {
    populatePluginTemplate();
    setPluginStatus('The example is back.');
  });
  elements.registerCustomReaderBtn.addEventListener('click', handleRegisterCustomReader);

  registry.subscribe((readers, active) => {
    updateReadersListUI(readers, active);
    syncActiveReaderChip(active);
  });

  updateReadersListUI(registry.getAll(), registry.getActive());
  syncActiveReaderChip(registry.getActive());
}

function syncActiveReaderChip(active) {
  if (!active) return;
  fillAvatar(elements.activeReaderAvatar, active);
  elements.activeReaderName.textContent = active.shortName || active.name;
}

function openReadersDrawer() {
  const current = elements.readersList.querySelector('[aria-checked="true"]');
  openOverlay(elements.readersDrawerBackdrop, closeReadersDrawer, current || elements.closeReadersDrawer);
  if (current) current.scrollIntoView({ block: 'nearest' });
}

function closeReadersDrawer() {
  closeOverlay(elements.readersDrawerBackdrop);
}

/** The person picks a reader: the same cards are read again in the new voice. */
function chooseReader(readerId) {
  const reader = registry.get(readerId);
  if (!reader) return;

  const changed = !registry.getActive() || registry.getActive().id !== readerId;
  registry.setActive(readerId);
  prefs.readerId = BUILT_IN_READER_IDS.has(readerId) ? readerId : prefs.readerId; // a custom reader is gone after a reload
  saveSettings();
  if (state.restored) state.restored.readerMissing = false;
  closeReadersDrawer();
  if (!changed) return;

  refreshReading();
  if (isReadingComplete()) {
    showStatus(`${reader.name} is now reading these cards. History keeps this reading under ${reader.name}.`);
  } else if (anyCardTurned()) {
    showStatus(`${reader.name} is now reading these cards.`);
  } else {
    showStatus(`${reader.name} will read these cards.`);
  }
}

/** A list reads better when every entry is about the same length: the first sentence or two of the bio. */
function shortBio(reader, limit = 170) {
  if (reader.shortBio) return reader.shortBio;
  const text = String(reader.bio || '').trim();
  const sentences = text.match(/[^.!?]+[.!?]+(?:\s+|$)/g) || [text];
  let out = '';
  for (const sentence of sentences) {
    if (out && (out + sentence).length > limit) break;
    out += sentence;
  }
  return out.trim();
}

function updateReadersListUI(readers, active) {
  const container = elements.readersList;
  container.replaceChildren();

  readers.forEach(reader => {
    const isActive = Boolean(active && active.id === reader.id);
    const card = button('reader-card');
    card.setAttribute('role', 'radio');
    card.dataset.readerId = reader.id;

    const top = el('span', 'reader-card-top');
    const avatar = el('span', 'reader-card-avatar');
    avatar.setAttribute('aria-hidden', 'true');
    fillAvatar(avatar, reader);
    top.appendChild(avatar);
    const meta = el('span', 'reader-card-meta');
    meta.appendChild(el('span', 'reader-card-name', reader.name));
    if (reader.title) meta.appendChild(el('span', 'reader-style-tag', reader.title));
    top.appendChild(meta);
    // Said in words, not only shown by the gold outline
    if (isActive) top.appendChild(el('span', 'reader-card-current', 'Reading now'));
    card.appendChild(top);

    const bio = shortBio(reader);
    if (bio) card.appendChild(el('span', 'reader-card-bio', bio));
    if (reader.philosophy) card.appendChild(el('span', 'reader-card-philosophy', `“${reader.philosophy}”`));

    container.appendChild(card);
  });

  syncRadioGroup(container, card => Boolean(active && card.dataset.readerId === active.id));
}

function populatePluginTemplate() {
  elements.customPluginCode.value = `// A reader is an object with an id, a name, and an interpret() method.
// This code runs as a function body and must return that object.
return {
  id: "example_reader",               // required: unique string. Adding the same id again replaces that reader.
  name: "Example Reader",             // required: shown in the header and the reading
  title: "A plain reading",           // optional: one line under the name
  bio: "Reads each card from its own meaning, in a sentence or two.", // optional

  // Receives { spread, cards, question }.
  //   spread:   { id, name, positions }
  //   cards:    [{ card, isReversed, position }], one per position, in order
  //   question: the text the user typed, possibly empty
  interpret(spreadData) {
    const { cards, question } = spreadData;

    // One entry per card, in the same order as cards. Only reflection is shown.
    const cardReadings = cards.map(({ card, isReversed, position }) => ({
      positionIndex: position.index,
      positionName: position.name,
      cardName: card.name,
      isReversed,
      reflection: \`\${position.name}: \${card.name}\${isReversed ? ", reversed" : ""}. \${isReversed ? card.meaningReversed : card.meaningUpright}\`
    }));

    return {
      readerId: this.id,
      readerName: this.name,
      readerTitle: this.title,
      // Shown once every card is turned. Each may be an empty string.
      summary: question ? \`Your question was “\${question}”\` : "Open reading.",
      elementalInsight: "",      // one sentence about the balance of suits; the app shows the counts
      cardReadings,
      actionableAdvice: "Read the reversed cards first.",
      closingBenediction: "That is the reading."
    };
  }
};`;
}

function setPluginStatus(text, kind = '') {
  const status = elements.pluginStatusMsg;
  status.textContent = text;
  status.classList.toggle('is-ok', kind === 'ok');
  status.classList.toggle('is-problem', kind === 'problem');
}

/**
 * Add the reader the code returns to the list. It is not switched to: the
 * person chooses it like any other reader, so nothing on the table changes
 * until they ask for it.
 */
function handleRegisterCustomReader() {
  const code = elements.customPluginCode.value;

  try {
    const factory = new Function(code);
    const customReader = factory();

    if (!customReader || typeof customReader !== 'object') {
      throw new Error('the code must return an object.');
    }
    if (BUILT_IN_READER_IDS.has(customReader.id)) {
      throw new Error(`the id "${customReader.id}" belongs to a built-in reader. Use another id.`);
    }

    const replacing = Boolean(registry.get(customReader.id));
    registry.register(customReader);
    setPluginStatus(
      `${replacing ? 'Updated' : 'Added'} ${customReader.name}. Choose them in the list above to have them read. They will be gone when the page is reloaded.`,
      'ok'
    );
  } catch (err) {
    setPluginStatus(`That code didn't return a reader: ${err.message}`, 'problem');
  }
}

// -------------------------------------------------------------
// CARD DIALOG
// -------------------------------------------------------------
function setupCardDialog() {
  elements.closeCardModal.addEventListener('click', closeCardDialog);
  elements.cardModalBackdrop.addEventListener('click', (e) => {
    if (e.target === elements.cardModalBackdrop) closeCardDialog();
  });

  elements.modalToggleOrientationBtn.addEventListener('click', () => {
    modal.shownReversed = !modal.shownReversed;
    updateModalOrientationUI();
  });

  elements.modalPrevBtn.addEventListener('click', () => stepModal(-1));
  elements.modalNextBtn.addEventListener('click', () => stepModal(1));
}

/** The arrow keys step through the cards while the card dialog is on top. */
function handleOverlayArrow(backdrop, direction) {
  if (backdrop !== elements.cardModalBackdrop || modal.list.length < 2) return false;
  stepModal(direction);
  return true;
}

/** Open a card from the spread: the dialog steps through the cards that are face up. */
function openSpreadCard(idx) {
  const list = state.drawnCards
    .map((item, spreadIndex) => ({ card: item.card, isReversed: item.isReversed, spreadIndex, isFlipped: item.isFlipped }))
    .filter(entry => entry.isFlipped);
  const pos = list.findIndex(entry => entry.spreadIndex === idx);
  if (pos < 0) return;
  openCardDialog(list, pos, { fromSpread: true });
}

/**
 * @param {Array<{card: object, isReversed: boolean, spreadIndex: number|null}>} list What prev / next step through
 * @param {number} pos Which one to show first
 * @param {{ fromSpread?: boolean }} [options]
 */
function openCardDialog(list, pos, { fromSpread = false } = {}) {
  modal.list = list;
  modal.pos = pos;
  modal.fromSpread = fromSpread;
  renderModalCard();
  openOverlay(elements.cardModalBackdrop, closeCardDialog, elements.closeCardModal);
}

/** Fill the dialog for the current card. Focus is left wherever it is. */
function renderModalCard() {
  const entry = modal.list[modal.pos];
  if (!entry) return;
  const { card, spreadIndex } = entry;
  modal.shownReversed = entry.isReversed;

  // A smaller copy is already in the browser from the table or the grid; it shows at once,
  // and the full-size picture is laid over it as it arrives.
  const full = renderActiveFace(card);
  if (full.includes('<image')) {
    const under = modal.fromSpread ? renderMidFace(card) : renderThumbFace(card);
    elements.modalCardStage.innerHTML = `<div class="plate-layer">${under}</div><div class="plate-layer">${full}</div>`;
  } else {
    elements.modalCardStage.innerHTML = full;
  }

  elements.modalCardName.textContent = card.name;
  elements.modalEsotericTitle.textContent = card.esotericTitle || '';
  elements.modalEsotericTitle.hidden = !card.esotericTitle;
  elements.modalArcanaBadge.textContent = card.arcana === 'major' ? 'Major Arcana' : `Minor Arcana · ${card.suitName || card.suit}`;
  // Older card data kept the ruler in the element field ("Fire / Mars"); show them as two chips either way.
  const [element, ruler] = String(card.element || '').split(/\s*\/\s*/);
  elements.modalElementBadge.textContent = element || '';
  elements.modalElementBadge.hidden = !element;
  elements.modalRulerBadge.textContent = card.ruler || ruler || '';
  elements.modalRulerBadge.hidden = !(card.ruler || ruler);

  elements.modalMeaningUpright.textContent = card.meaningUpright || '';
  elements.modalMeaningReversed.textContent = card.meaningReversed || '';
  elements.modalKeywordsUpright.textContent = (card.keywordsUpright || []).join(' · ');
  elements.modalKeywordsReversed.textContent = (card.keywordsReversed || []).join(' · ');

  // When the card came from the spread, lead with what it means in this position.
  const item = spreadIndex != null ? state.drawnCards[spreadIndex] : null;
  const data = item && state.reading && state.reading.cardReadings ? state.reading.cardReadings[spreadIndex] : null;
  elements.modalInReading.hidden = !data;
  if (data) {
    elements.modalPositionName.textContent = `${seatLabel(item, spreadIndex)} · ${state.reading.readerName}`;
    elements.modalPositionDesc.textContent = item.position.description || '';
    elements.modalPositionDesc.hidden = !item.position.description;
    elements.modalReflection.textContent = data.reflection || '';
  }

  // The step buttons keep their place even with nothing to step to, so the middle button never moves
  const canStep = modal.list.length > 1;
  for (const btn of [elements.modalPrevBtn, elements.modalNextBtn]) {
    btn.disabled = !canStep;
    btn.classList.toggle('is-idle', !canStep);
  }
  const partial = modal.fromSpread && modal.list.length < state.drawnCards.length;
  elements.modalStep.textContent = canStep
    ? `${modal.pos + 1} of ${modal.list.length} ${partial ? 'turned cards' : 'cards'} · the arrow keys also step`
    : '';

  updateModalOrientationUI();
}

/** Move to the previous / next card in the list, wrapping at the ends. */
function stepModal(direction) {
  const total = modal.list.length;
  if (total < 2) return;
  modal.pos = (modal.pos + direction + total) % total;
  renderModalCard();
}

/** Which way up the picture is shown, and which meaning that puts forward. */
function updateModalOrientationUI() {
  const entry = modal.list[modal.pos];
  if (!entry) return;
  const shown = modal.shownReversed;

  elements.modalCardStage.classList.toggle('reversed', shown);
  elements.modalToggleOrientationBtn.textContent = shown ? 'Show upright' : 'Show reversed';

  // From the spread the chip says how the card was drawn, and does not change with the picture
  const chipReversed = modal.fromSpread ? entry.isReversed : shown;
  elements.modalOrientationBadge.classList.toggle('is-reversed', chipReversed);
  elements.modalOrientationBadge.textContent = modal.fromSpread
    ? (entry.isReversed ? 'Drawn reversed' : 'Drawn upright')
    : (shown ? 'Reversed' : 'Upright');

  elements.modalUprightSection.classList.toggle('is-shown', !shown);
  elements.modalReversedSection.classList.toggle('is-shown', shown);
  elements.modalUprightFlag.textContent = modal.fromSpread && !entry.isReversed ? 'as drawn' : '';
  elements.modalReversedFlag.textContent = modal.fromSpread && entry.isReversed ? 'as drawn' : '';
}

function closeCardDialog() {
  closeOverlay(elements.cardModalBackdrop);
  modal.list = [];
  modal.pos = 0;
}

// -------------------------------------------------------------
// ALL CARDS
// -------------------------------------------------------------
let compendiumObserver = null;
let compendiumFilter = 'all';

function setupCompendium() {
  elements.compendiumBtn.addEventListener('click', openCompendium);
  elements.closeCompendiumModal.addEventListener('click', closeCompendium);
  elements.compendiumModalBackdrop.addEventListener('click', (e) => {
    if (e.target === elements.compendiumModalBackdrop) closeCompendium();
  });

  elements.compendiumFilters.addEventListener('click', (e) => {
    const chip = e.target instanceof Element ? e.target.closest('.filter-chip') : null;
    if (!chip) return;
    compendiumFilter = chip.dataset.filter;
    renderCompendiumCards();
  });

  elements.compendiumSearchInput.addEventListener('input', () => renderCompendiumCards());
}

/** Always opens on the whole deck: a search left over from last time would hide cards without saying so. */
function openCompendium() {
  compendiumFilter = 'all';
  elements.compendiumSearchInput.value = '';
  openOverlay(elements.compendiumModalBackdrop, closeCompendium, elements.compendiumSearchInput);
  renderCompendiumCards();
}

function closeCompendium() {
  closeOverlay(elements.compendiumModalBackdrop);
}

function compendiumMatches() {
  let cards = TAROT_DECK;
  if (compendiumFilter === 'major') {
    cards = cards.filter(card => card.arcana === 'major');
  } else if (['wands', 'cups', 'swords', 'pentacles'].includes(compendiumFilter)) {
    cards = cards.filter(card => card.suit === compendiumFilter);
  }

  const query = elements.compendiumSearchInput.value.toLowerCase().trim();
  if (!query) return cards;
  return cards.filter(card => [
    card.name, card.element, card.ruler, card.esotericTitle, card.meaningUpright, card.meaningReversed,
    ...(card.keywordsUpright || []), ...(card.keywordsReversed || [])
  ].some(text => text && String(text).toLowerCase().includes(query)));
}

function renderCompendiumCards() {
  const container = elements.compendiumGrid;
  container.replaceChildren();
  if (compendiumObserver) compendiumObserver.disconnect();

  elements.compendiumFilters.querySelectorAll('.filter-chip').forEach(chip => {
    chip.setAttribute('aria-pressed', chip.dataset.filter === compendiumFilter ? 'true' : 'false');
  });

  const cards = compendiumMatches();
  const query = elements.compendiumSearchInput.value.trim();
  elements.compendiumCount.textContent = cards.length === TAROT_DECK.length
    ? `All ${TAROT_DECK.length} cards`
    : `${cards.length} of ${TAROT_DECK.length} cards`;

  if (cards.length === 0) {
    container.appendChild(el('p', 'compendium-empty', query ? `No card matches “${query}”.` : 'No cards in this group.'));
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

  // The card dialog steps through exactly the cards listed here
  const list = cards.map(card => ({ card, isReversed: false, spreadIndex: null }));

  cards.forEach((card, pos) => {
    const item = button('compendium-card-item');
    const thumb = el('span', 'compendium-card-thumb');
    thumb.dataset.cardId = card.id;
    item.appendChild(thumb);
    item.appendChild(el('span', 'compendium-card-name', card.name));
    item.addEventListener('click', () => openCardDialog(list, pos));

    container.appendChild(item);
    compendiumObserver.observe(thumb);
  });
}

// -------------------------------------------------------------
// READER AVATARS: a portrait where one exists, a monogram otherwise
// -------------------------------------------------------------
const READER_PORTRAITS = {
  cassian_vetch: assetUrl('readers/cassian_vetch.jpg'),
  ruth_calloway: assetUrl('readers/ruth_calloway.jpg'),
  lyle_pasternak: assetUrl('readers/lyle_pasternak.jpg'),
  cal_navarro: assetUrl('readers/cal_navarro.jpg'),
  sable_moreau: assetUrl('readers/sable_moreau.jpg'),
  morwenna_ravenscroft: assetUrl('readers/morwenna_ravenscroft.jpg'),
  barnaby: assetUrl('readers/barnaby.jpg'),
  pippin: assetUrl('readers/pippin.jpg')
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
// HISTORY, LINKS AND THE UNFINISHED READING
// -------------------------------------------------------------
function readHistory() {
  const storage = browserStorage();
  return storage ? loadHistory(storage, TAROT_DECK.length) : [];
}

/** @returns {boolean} Whether the list was actually written. */
function writeHistory(list) {
  const storage = browserStorage();
  return Boolean(storage) && saveHistory(storage, list);
}

function currentRecord() {
  const active = registry.getActive();
  // A reopened reading whose reader is missing here keeps the reader it was saved with
  const readerId = state.restored && state.restored.readerMissing
    ? state.restored.readerId
    : (active ? active.id : '');
  return makeRecord({
    spreadId: state.currentSpreadId,
    threeCardTheme: state.threeCardTheme,
    readerId,
    deckTheme: state.deckTheme,
    question: readingQuestion(),
    drawnCards: state.drawnCards,
    deck: TAROT_DECK,
    at: state.completedAt || Date.now()
  });
}

/** The address of this page with a reading in it. */
function readingLink(record, { includeQuestion }) {
  const encoded = encodeRecord(includeQuestion ? record : { ...record, q: '' });
  return `${window.location.origin}${window.location.pathname}${window.location.search}#r=${encoded}`;
}

/**
 * Keep a finished reading: in this browser's history, and in the address bar
 * so a reload brings it back. The address never carries the question; that
 * only goes into a link the person asks for.
 */
function commitReading() {
  if (!isReadingComplete()) return;
  if (!state.completedAt) state.completedAt = Date.now();
  updateReadingDate();
  clearDraft();

  const record = currentRecord();
  if (!writeHistory(upsertRecord(readHistory(), record))) {
    showStatus('This reading could not be saved to History: the browser is not letting this page store anything (private browsing, or storage is full).', { problem: true });
  }
  try {
    window.history.replaceState(null, '', `#r=${encodeRecord({ ...record, q: '' })}`);
  } catch (err) {
    // Some embedded pages may not change their address. The reading is still on screen.
  }
}

function clearReadingLink() {
  if (!window.location.hash) return;
  try {
    window.history.replaceState(null, '', window.location.pathname + window.location.search);
  } catch (err) {
    // See commitReading
  }
}

function closeLinkOptions() {
  const options = document.getElementById('linkOptions');
  const linkBtn = document.getElementById('copyLinkBtn');
  if (options) options.hidden = true;
  if (linkBtn) linkBtn.setAttribute('aria-expanded', 'false');
}

/** With a question, the person is asked whether the link should carry it. Without one, the link is just copied. */
function onCopyLinkPressed() {
  if (!isReadingComplete()) return;
  if (!readingQuestion()) {
    copyReadingLink({ includeQuestion: false });
    return;
  }
  const options = document.getElementById('linkOptions');
  const linkBtn = document.getElementById('copyLinkBtn');
  const opening = options.hidden;
  options.hidden = !opening;
  linkBtn.setAttribute('aria-expanded', opening ? 'true' : 'false');
  if (opening) options.querySelector('button').focus();
}

async function copyReadingLink({ includeQuestion }) {
  if (!isReadingComplete()) return;
  const hadQuestion = Boolean(readingQuestion());
  const copied = await copyText(readingLink(currentRecord(), { includeQuestion }));
  closeLinkOptions();
  const linkBtn = document.getElementById('copyLinkBtn');
  if (linkBtn) linkBtn.focus({ preventScroll: true });

  if (!copied) {
    setActionStatus("Couldn't copy the link.", { problem: true });
  } else if (!hadQuestion) {
    setActionStatus('Link copied.');
  } else {
    setActionStatus(includeQuestion ? 'Link copied, with your question in it.' : 'Link copied, without your question.');
  }
}

/** What the picture of this reading needs: the cards as drawn, their positions, and the heading. */
function readingImageData() {
  const reader = registry.getActive();
  return {
    spreadId: state.currentSpreadId,
    spreadLabel: currentSpreadTitle(),
    question: readingQuestion(),
    readerName: reader ? reader.name : '',
    dateLabel: new Date(state.completedAt || Date.now()).toLocaleDateString(undefined, { dateStyle: 'long' }),
    cards: state.drawnCards.map(item => ({
      svg: renderMidFace(item.card),
      isReversed: item.isReversed,
      position: item.position.name,
      cardName: item.card.name
    }))
  };
}

async function saveReadingImage() {
  if (!isReadingComplete()) return;
  const btn = document.getElementById('saveImageBtn');
  if (btn) btn.disabled = true;
  setActionStatus('Saving the image…');

  try {
    const blob = await renderReadingImage(readingImageData());
    const filename = readingFileName(state.completedAt || Date.now());
    // On a phone the share sheet is where a picture goes; elsewhere it is a download
    const onTouch = window.matchMedia('(pointer: coarse)').matches;
    const outcome = onTouch ? await shareBlob(blob, filename, 'Astralis reading') : 'unsupported';
    if (outcome === 'unsupported') {
      downloadBlob(blob, filename);
      setActionStatus(`Image saved as ${filename}.`);
    } else {
      setActionStatus(outcome === 'shared' ? 'Image shared.' : '');
    }
  } catch (err) {
    console.error('Could not draw the reading:', err);
    setActionStatus("Couldn't save the image. Try again.", { problem: true });
  } finally {
    const current = document.getElementById('saveImageBtn');
    if (current) current.disabled = false;
  }
}

/**
 * Lay a saved reading back out: same positions, same cards.
 *
 * The deck and reader it was saved with are used for viewing it. They are not
 * written to the person's own settings.
 *
 * @param {object} record
 * @param {{ flipped?: boolean[]|null }} [options] Which cards were face up, for an unfinished reading;
 *   a finished one comes back with every card turned.
 */
function restoreRecord(record, { flipped = null } = {}) {
  const unfinished = Array.isArray(flipped);

  state.undo = null;
  state.dealId++;
  state.currentSpreadId = record.spread;
  if (record.spread === 'three_card' && record.theme) state.threeCardTheme = record.theme;
  syncSpreadControls();

  if (DECK_THEMES.includes(record.deck)) setDeckThemeState(record.deck);
  const readerFound = record.reader ? registry.setActive(record.reader) : true;

  state.userQuery = record.q;
  elements.queryInput.value = record.q;

  const positions = getPositionsForCurrentSpread();
  state.drawnCards = resolveCards(record, TAROT_DECK).map((drawn, idx) => ({
    card: drawn.card,
    isReversed: drawn.isReversed,
    position: positions[idx],
    isFlipped: unfinished ? Boolean(flipped[idx]) : true,
    tilt: randomTilt()
  }));
  state.reading = null;
  state.completedAt = unfinished ? null : record.at;
  state.restored = unfinished ? null : { at: record.at, readerId: record.reader, readerMissing: !readerFound };

  updateSpreadHeader();
  renderSpread({ animate: false });
  renderReadingPanel();
  syncQuestionField();
  updateSpreadHint();

  // The status comes first: saving may have something more important to say
  if (unfinished) {
    showStatus('Your unfinished reading is back on the table.');
    saveDraft();
  } else {
    showStatus(`Reading from ${formatDateTime(record.at)} reopened.`);
    commitReading();
  }
}

/** Open the reading named in the address bar, if there is one. */
function restoreFromLocation() {
  const match = /^#r=([A-Za-z0-9_-]+)$/.exec(window.location.hash);
  if (!match) return false;
  let record = decodeRecord(match[1], TAROT_DECK.length);
  if (!record) {
    clearReadingLink();
    return false;
  }
  // The address bar never carries the question. If this is one of the person's
  // own readings, the question is in their History.
  if (!record.q) {
    const own = readHistory().find(item => item.id === record.id);
    if (own && own.q) record = { ...record, q: own.q };
  }
  restoreRecord(record);
  return true;
}

function sessionStore() {
  try {
    return window.sessionStorage;
  } catch (err) {
    return null;
  }
}

/** A partly turned spread is remembered for this tab, so a reload does not throw it away. */
function saveDraft() {
  const store = sessionStore();
  if (!store) return;
  try {
    if (!hasUnfinishedReading()) {
      store.removeItem(DRAFT_KEY);
      return;
    }
    store.setItem(DRAFT_KEY, JSON.stringify({
      record: currentRecord(),
      flipped: state.drawnCards.map(item => (item.isFlipped ? 1 : 0))
    }));
  } catch (err) {
    // Nothing to do: the reading simply will not survive a reload
  }
}

function clearDraft() {
  const store = sessionStore();
  if (!store) return;
  try {
    store.removeItem(DRAFT_KEY);
  } catch (err) {
    // See saveDraft
  }
}

function restoreDraft() {
  const store = sessionStore();
  if (!store) return false;
  try {
    const saved = JSON.parse(store.getItem(DRAFT_KEY));
    if (!saved) return false;
    const record = validateRecord(saved.record, TAROT_DECK.length);
    const flipped = Array.isArray(saved.flipped) ? saved.flipped.map(Boolean) : [];
    if (!record || flipped.length !== record.cards.length || !flipped.some(Boolean) || flipped.every(Boolean)) {
      store.removeItem(DRAFT_KEY);
      return false;
    }
    restoreRecord(record, { flipped });
    return true;
  } catch (err) {
    return false;
  }
}

function recordSpreadLabel(record) {
  return spreadLabel(record.spread, record.theme);
}

let clearArmTimer = null;

function disarmClearAll() {
  clearTimeout(clearArmTimer);
  elements.clearHistoryBtn.dataset.armed = 'false';
  elements.clearHistoryBtn.textContent = 'Clear all';
}

function setupHistory() {
  elements.historyBtn.addEventListener('click', openHistory);
  elements.closeHistoryModal.addEventListener('click', closeHistory);
  elements.historyModalBackdrop.addEventListener('click', (e) => {
    if (e.target === elements.historyModalBackdrop) closeHistory();
  });

  // Clearing everything takes two presses. The second must follow soon after, and from the same button.
  elements.clearHistoryBtn.addEventListener('click', () => {
    if (elements.clearHistoryBtn.dataset.armed !== 'true') {
      elements.clearHistoryBtn.dataset.armed = 'true';
      elements.clearHistoryBtn.textContent = 'Press again to delete every reading';
      announce('Press again to delete every reading.');
      clearArmTimer = setTimeout(disarmClearAll, 6000);
      return;
    }
    const cleared = readHistory();
    writeHistory([]);
    renderHistoryList();

    // Even this can be taken back, until the dialog is closed
    const row = el('li', 'history-undo');
    row.append(`${cleared.length === 1 ? 'One reading' : `${cleared.length} readings`} deleted. `);
    const undo = button('link-btn', 'Undo');
    undo.addEventListener('click', () => {
      writeHistory(cleared);
      renderHistoryList();
      const first = elements.historyList.querySelector('.history-open');
      (first || elements.closeHistoryModal).focus({ preventScroll: true });
      announce('The readings are back.');
    });
    row.appendChild(undo);
    elements.historyList.prepend(row);
    undo.focus({ preventScroll: true });
    announce('Every reading deleted. Undo is available.');
  });
  elements.clearHistoryBtn.addEventListener('blur', disarmClearAll);
}

function openHistory() {
  renderHistoryList();
  openOverlay(elements.historyModalBackdrop, closeHistory, elements.closeHistoryModal);
}

function closeHistory() {
  closeOverlay(elements.historyModalBackdrop);
}

function historyRow(record) {
  const row = el('li', 'history-item');

  const open = button('history-open');
  open.appendChild(el('span', 'history-date', formatDateTime(record.at)));
  const question = el('span', 'history-question', record.q ? `“${record.q}”` : 'Open reading');
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

  const remove = button('history-delete', '×');
  remove.setAttribute('aria-label', `Delete the reading from ${formatDateTime(record.at)}`);
  remove.addEventListener('click', () => deleteHistoryRow(row, record));
  row.appendChild(remove);

  return row;
}

/** Deleting leaves a line in the reading's place with an Undo, so a slip is not a loss. */
function deleteHistoryRow(row, record) {
  writeHistory(removeRecord(readHistory(), record.id));

  const gone = el('li', 'history-undo');
  gone.append(`Deleted the reading from ${formatDateTime(record.at)}. `);
  const undo = button('link-btn', 'Undo');
  undo.addEventListener('click', () => {
    writeHistory(upsertRecord(readHistory(), record));
    const restored = historyRow(record);
    gone.replaceWith(restored);
    restored.querySelector('.history-open').focus({ preventScroll: true });
    syncHistoryChrome();
    announce('The reading is back.');
  });
  gone.appendChild(undo);
  row.replaceWith(gone);
  undo.focus({ preventScroll: true });
  syncHistoryChrome();
  announce('Reading deleted. Undo is available.');
}

/** The Clear all button and the note under the list, which says how much is kept and where. */
function syncHistoryChrome() {
  const count = readHistory().length;
  disarmClearAll();
  elements.clearHistoryBtn.hidden = count === 0;

  const note = elements.historyNote;
  if (!storageWorks()) {
    note.textContent = 'This browser is not letting the page store anything (private browsing, or storage is full), so readings are not being kept.';
    note.classList.add('is-problem');
  } else {
    note.textContent = `The ${HISTORY_LIMIT} most recent readings are kept, on this device only. Older ones drop off the end.`;
    note.classList.remove('is-problem');
  }
  note.hidden = count === 0 && storageWorks();
}

function renderHistoryList() {
  const container = elements.historyList;
  const records = readHistory();
  container.replaceChildren();

  if (records.length === 0) {
    container.appendChild(el('li', 'history-empty', 'No readings yet. Turn every card in a spread and the reading is kept here, on this device.'));
  } else {
    records.forEach(record => container.appendChild(historyRow(record)));
  }
  syncHistoryChrome();
}

// -------------------------------------------------------------
// DECK PICKER
// -------------------------------------------------------------
const DECK_INFO = {
  household: { name: 'Household Arcana', blurb: 'The house cats, photographed and painted. All 78 cards.' },
  feline_mystica: { name: 'Feline Mystica', blurb: '' } // written from what has actually been painted
};
const DECK_SAMPLE_CARD = 'maj_08'; // Strength has a face in every deck

/** How many Feline Mystica cards have a painted plate today, counted from the deck itself. */
function felineMysticaPainted() {
  return TAROT_DECK.filter(card => renderSvgFace(card, 'feline_mystica').includes('/assets/feline-mystica/')).length;
}

function deckInfo(theme) {
  const info = DECK_INFO[theme] || { name: theme, blurb: '' };
  if (theme !== 'feline_mystica') return { ...info, partial: '' };

  const total = TAROT_DECK.length;
  const painted = felineMysticaPainted();
  if (painted >= total) return { ...info, blurb: `Painted cats on every card. All ${total} cards.`, partial: '' };
  return {
    ...info,
    blurb: `Painted cats on ${painted} of the ${total} cards so far. The other ${total - painted} use line drawings, so a spread can mix the two.`,
    partial: `${painted} of ${total} painted`
  };
}

function setupDeckPicker() {
  elements.deckPickerBtn.addEventListener('click', openDeckPicker);
  elements.closeDeckModal.addEventListener('click', closeDeckPicker);
  elements.deckModalBackdrop.addEventListener('click', (e) => {
    if (e.target === elements.deckModalBackdrop) closeDeckPicker();
  });

  wireRadioGroup(elements.deckGrid, (tile) => {
    closeDeckPicker();
    chooseDeck(tile.dataset.deck);
  });
}

function openDeckPicker() {
  renderDeckGrid();
  const current = elements.deckGrid.querySelector('[aria-checked="true"]');
  openOverlay(elements.deckModalBackdrop, closeDeckPicker, current || elements.closeDeckModal);
}

function closeDeckPicker() {
  closeOverlay(elements.deckModalBackdrop);
}

function renderDeckGrid() {
  const container = elements.deckGrid;
  const sample = getCardById(DECK_SAMPLE_CARD);
  container.replaceChildren();

  DECK_THEMES.forEach(theme => {
    const info = deckInfo(theme);
    const isCurrent = theme === state.deckTheme;

    const tile = button('deck-tile');
    tile.setAttribute('role', 'radio');
    tile.dataset.deck = theme;

    const art = el('span', 'deck-tile-art');
    art.setAttribute('aria-hidden', 'true');
    const back = el('span', 'deck-tile-card deck-tile-back');
    back.innerHTML = useThumbs(renderActiveBack(300, 480, theme));
    const face = el('span', 'deck-tile-card deck-tile-face');
    face.innerHTML = renderThumbFace(sample, theme);
    art.append(back, face);
    tile.appendChild(art);

    const text = el('span', 'deck-tile-text');
    text.appendChild(el('span', 'deck-tile-name', info.name));
    text.appendChild(el('span', 'deck-tile-blurb', info.blurb));
    const tags = el('span', 'deck-tile-tags');
    if (isCurrent) tags.appendChild(el('span', 'deck-tile-current', 'In use'));
    if (info.partial) tags.appendChild(el('span', 'deck-tile-partial', info.partial));
    if (tags.childNodes.length) text.appendChild(tags);
    tile.appendChild(text);

    container.appendChild(tile);
  });

  syncRadioGroup(container, tile => tile.dataset.deck === state.deckTheme);
}

// -------------------------------------------------------------
// START
// -------------------------------------------------------------
if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
