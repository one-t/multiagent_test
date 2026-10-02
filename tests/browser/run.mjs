/**
 * Walks through the app in a real browser and checks what a person would see.
 * Run with `npm run test:browser`. Screenshots go to the system temp folder
 * (astralis-shots) and their paths are printed at the end.
 */
import { launch } from './driver.mjs';
import { encodeRecord } from '../../js/history.js';

const results = [];
function check(name, ok, detail = '') {
  results.push({ name, ok: Boolean(ok), detail });
  if (!ok) console.log(`  FAIL  ${name}${detail ? `  ->  ${typeof detail === 'string' ? detail : JSON.stringify(detail)}` : ''}`);
}

const { page, url, close } = await launch();
const shots = [];
const shot = async (name, options) => shots.push(await page.shot(name, options));

/** A snapshot of the things most checks look at. */
const look = () => page.eval(`(() => {
  const text = s => { const e = document.querySelector(s); return e && !e.hidden && e.offsetParent !== null ? e.innerText.trim() : null; };
  const box = s => { const e = document.querySelector(s); if (!e) return null; const r = e.getBoundingClientRect(); return { left: Math.round(r.left), top: Math.round(r.top), right: Math.round(r.right), bottom: Math.round(r.bottom), width: Math.round(r.width), height: Math.round(r.height) }; };
  const active = document.activeElement;
  return {
    status: document.getElementById('statusLine').innerText.replace(/\\n/g, ' | ').trim(),
    live: document.getElementById('liveStatus').textContent,
    hint: document.getElementById('spreadHint').textContent,
    cards: document.querySelectorAll('.card-wrapper').length,
    turned: document.querySelectorAll('.card-wrapper.flipped').length,
    tilts: [...document.querySelectorAll('.card-wrapper')].map(w => w.style.getPropertyValue('--tilt')).join(','),
    spread: document.querySelector('.spread-tab-btn[aria-checked="true"]').textContent,
    title: text('.question-title:not(.sr-only)'),
    opening: text('#readingOpening'),
    reader: text('.reader-name'),
    explicit: text('.reading-header .explicit-tag'),
    date: text('#readingDate'),
    actions: text('#readingActions') !== null,
    summary: text('.summary-text'),
    legend: text('.suit-legend'),
    advice: text('.conclusion-block h3'),
    closing: text('.closing-words'),
    firstProse: text('.entry-prose'),
    firstSign: text('.entry-signature'),
    notice: text('.reading-notice'),
    setupFull: !document.getElementById('setupFull').hidden,
    setupCompact: text('#setupCompactText'),
    hash: location.hash,
    focus: active ? (active.id || active.className || active.tagName) : null,
    inert: document.getElementById('appRoot').inert,
    docWidth: document.documentElement.scrollWidth,
    viewWidth: innerWidth,
    header: box('.site-header'),
    setup: box('.setup'),
    panel: box('#readingSection'),
    spreadBox: box('#cardsLayoutContainer'),
    firstCard: box('.card-wrapper')
  };
})()`);

try {
  // ------------------------------------------------------------ first load
  await page.goto();
  let s = await look();
  check('the page loads without errors', page.problems.length === 0, page.problems);
  check('one card is dealt face down', s.cards === 1 && s.turned === 0);
  check('the header is one row', s.header.height <= 80, s.header);
  check('nothing scrolls sideways', s.docWidth <= s.viewWidth, s);
  check('the reader greets you before a card is turned', s.opening && s.opening.includes("Window's open"), s.opening);
  check('the hint says what a click does', s.hint === 'Click the card to turn it over.', s.hint);
  check('there is no headline without a question', s.title === null, s.title);
  check('titles use the plain heading face', await page.eval(`getComputedStyle(document.getElementById('deckModalTitle')).fontFamily.replace(/["']/g, '').startsWith('Cinzel,')`));
  check('every reader has a small portrait', await page.eval(`fetch(document.querySelector('#activeReaderAvatar img').src).then(r => r.ok && Number(r.headers.get('content-length')) < 20000)`));
  await shot('01-first-load');

  // ------------------------------------------------------------ the question
  const before = s.tilts;
  await page.click('#queryInput');
  await page.type('should I quit my job?');
  await page.key('Enter');
  s = await look();
  check('Enter in the question box does not re-deal', s.tilts === before);
  check('Enter moves on to the card', String(s.focus).includes('card-wrapper'), s.focus);
  check('the question becomes the headline', s.title === '“should I quit my job?”', s.title);

  // ------------------------------------------------------------ choosing a spread by keyboard
  await page.eval(`document.querySelector('.spread-tab-btn[aria-checked="true"]').focus()`);
  await page.key('ArrowRight');
  s = await look();
  check('an arrow key moves between spreads without dealing', s.cards === 1 && s.spread === 'One card');
  await page.key('Enter');
  await page.wait(1300);
  s = await look();
  check('Enter chooses the spread', s.cards === 3 && s.spread === 'Three cards', s.status);
  check('a deal is reported in words', s.status === 'Dealt 3 cards.', s.status);
  const dealt = s.tilts;
  await page.click('[data-spread="three_card"]');
  await page.wait(300);
  check('choosing the spread already on the table does nothing', (await look()).tilts === dealt);

  // ------------------------------------------------------------ turning a card
  await page.eval(`document.querySelector('.card-wrapper[data-index="0"]').focus()`);
  await page.key('Enter');
  await page.wait(1000);
  s = await look();
  check('a card turns from the keyboard', s.turned === 1);
  check('the opening comes before the cards and quotes the question', s.opening && s.opening.includes('“should I quit my job?”'), s.opening);
  check('the card has its text and its sign-off on a separate line', s.firstProse && s.firstSign && s.firstSign.startsWith('Stamp'), s.firstSign);
  check('the sign-off is not repeated in the text', s.firstProse && !s.firstProse.includes('Stamp:'), s.firstProse);
  check('the set-up bar folds away once a card is turned', !s.setupFull && s.setupCompact && s.setupCompact.includes('Three cards'), s.setupCompact);
  check('the line about the deal is gone', s.status === '', s.status);
  await shot('02-one-card-turned');

  // ------------------------------------------------------------ changing the question mid-reading
  await page.click('#setupExpandBtn');
  await page.type(' really?');
  const note = await page.eval(`document.getElementById('queryNote').innerText`);
  check('editing the question mid-reading says the cards were dealt for the earlier one', note.includes('These cards were dealt for your earlier question.'), note);
  await page.eval(`(() => { const i = document.getElementById('queryInput'); i.value = 'should I quit my job?'; i.dispatchEvent(new Event('input', { bubbles: true })); })()`);
  await page.click('#setupCollapseBtn');

  // ------------------------------------------------------------ dealing over an unfinished reading
  await page.click('#setupExpandBtn');
  await page.click('[data-spread="celtic_cross"]');
  await page.wait(1800);
  s = await look();
  check('dealing over an unfinished reading offers Undo', s.cards === 10 && s.status.includes('Your unfinished reading was put away.') && s.status.includes('Undo'), s.status);
  check('a spread taller than the screen is scrolled into view', s.spreadBox.top < 120, s.spreadBox);
  await shot('03-celtic-face-down');
  await page.click('#statusActionBtn');
  await page.wait(600);
  s = await look();
  check('Undo brings the reading back', s.cards === 3 && s.turned === 1 && s.spread === 'Three cards', s.status);

  // ------------------------------------------------------------ a reload mid-reading
  await page.reload();
  s = await look();
  check('a reload keeps an unfinished reading', s.cards === 3 && s.turned === 1 && s.status === 'Your unfinished reading is back.', s.status);

  // ------------------------------------------------------------ finishing
  await page.click('#setupTurnAllBtn');
  await page.wait(2200);
  s = await look();
  check('Turn all finishes the reading', s.turned === 3);
  check('one announcement covers the bulk turn', s.live === 'All 3 cards are turned. The full reading is ready.', s.live);
  check('after the cards: a comment on the spread, the suit counts, advice and a closing', s.summary && s.legend && s.advice === 'Advice' && s.closing, s);
  check('the comment after the cards does not repeat the question', s.summary && !s.summary.includes('quit my job'), s.summary);
  check('the date is shown plainly', s.date && !/^Read /.test(s.date), s.date);
  check('copy, link and image appear once the reading is complete', s.actions);
  check('the address bar holds the reading but not the question', s.hash.startsWith('#r=') && !(await page.eval(`atob(location.hash.slice(3).replace(/-/g, '+').replace(/_/g, '/')).includes('quit')`)));
  check('the hint changes to a closer look', s.hint === 'Click a card for a closer look.', s.hint);
  await page.eval('window.scrollTo(0, 0)');
  await shot('04-three-cards-complete', { full: true });

  // ------------------------------------------------------------ copy and link
  await page.eval(`window.__copied = null; navigator.clipboard.writeText = async (text) => { window.__copied = text; }`);
  await page.click('#copyReadingBtn');
  await page.wait(200);
  let copied = await page.eval('window.__copied');
  check('copied text is plain and carries the opening', copied && !/[#*_`]/.test(copied) && copied.includes('Slip received'), copied && copied.slice(0, 200));
  await page.click('#copyLinkBtn');
  await page.wait(200);
  check('Copy link asks about the question', await page.eval(`!document.getElementById('linkOptions').hidden && document.getElementById('linkOptions').innerText.includes('Include your question in the link?')`));
  await page.click('#linkOptions button:nth-of-type(2)');
  await page.wait(200);
  copied = await page.eval('window.__copied');
  check('a link without the question really has none', copied && !atob(copied.split('#r=')[1].replace(/-/g, '+').replace(/_/g, '/')).includes('quit'));

  // ------------------------------------------------------------ the card dialog
  await page.click('.card-wrapper[data-index="1"]');
  await page.wait(700);
  let dialog = await page.eval(`({ step: document.getElementById('modalStep').textContent, chip: document.getElementById('modalOrientationBadge').textContent, name: document.getElementById('modalCardName').textContent, reading: document.getElementById('modalReflection').innerText, chips: [...document.querySelectorAll('.modal-badges .badge-tag')].filter(c => !c.hidden).map(c => c.textContent), sub: document.getElementById('modalEsotericTitle').textContent })`);
  s = await look();
  check('the card dialog opens over an inert page', s.inert && s.focus === 'closeCardModal', s.focus);
  check('the dialog says where the card sits in the list', dialog.step === '2 of 3', dialog.step);
  check('the dialog says how the card lies in your reading', /in your reading$/.test(dialog.chip), dialog.chip);
  check('element and planet or sign are labelled', dialog.chips.some(c => c.startsWith('Element: ')), dialog.chips);
  check('the old title is labelled as one', dialog.sub.startsWith('Traditional title: '), dialog.sub);
  check('the dialog shows the reading for this position', dialog.reading.length > 40);
  await page.eval(`document.getElementById('modalNextBtn').focus()`);
  await page.key('ArrowRight');
  const stepped = await page.eval(`({ step: document.getElementById('modalStep').textContent, name: document.getElementById('modalCardName').textContent, focus: document.activeElement.id })`);
  check('an arrow key steps to the next card and focus stays put', stepped.step === '3 of 3' && stepped.name !== dialog.name && stepped.focus === 'modalNextBtn', stepped);
  await shot('05-card-dialog');
  await page.key('Escape');
  await page.wait(300);
  check('Escape closes the dialog and gives the page back', !(await look()).inert);

  // ------------------------------------------------------------ readers
  await page.click('#readerPickerBtn');
  await page.wait(600);
  const list = await page.eval(`[...document.querySelectorAll('#readersList [role=radio]')].map(r => ({ name: r.querySelector('.reader-card-name').textContent, title: r.querySelector('.reader-style-tag').textContent, explicit: Boolean(r.querySelector('.explicit-tag')), portrait: Boolean(r.querySelector('img') && r.querySelector('img').naturalWidth), bio: r.querySelector('.reader-card-bio').textContent.length }))`);
  check('eight readers, each with a portrait', list.length === 8 && list.every(r => r.portrait), list);
  check('only Sable and Cal are labelled Explicit', list.filter(r => r.explicit).map(r => r.name).join() === 'Sable Moreau,Cal Navarro', list.filter(r => r.explicit));
  check('reader bios are a similar length', Math.max(...list.map(r => r.bio)) - Math.min(...list.map(r => r.bio)) < 90, list.map(r => r.bio));
  await shot('06-readers');
  await page.eval(`document.querySelector('[data-reader-id="pippin"]').click()`);
  await page.wait(500);
  s = await look();
  check('changing reader is said in a few words', s.status === 'Now read by Pippin.', s.status);
  const actions = await page.eval(`({ count: document.querySelectorAll('#readingSection em.reader-action').length, italic: getComputedStyle(document.querySelector('.entry-prose em.reader-action')).fontStyle, brackets: document.getElementById('readingSection').innerText.includes('[') })`);
  check("what Pippin does is in italics, without the brackets", actions.count > 5 && actions.italic === 'italic' && !actions.brackets, actions);
  await page.eval('window.scrollTo(0, 0)');
  await shot('07-pippin');
  await page.click('#changeReaderBtn');
  await page.wait(500);
  await page.eval(`document.querySelector('[data-reader-id="sable_moreau"]').click()`);
  await page.wait(500);
  s = await look();
  check('an explicit reader is labelled in the reading', s.explicit === 'Explicit', s.explicit);
  check('focus stays on Change reader after choosing', s.focus === 'changeReaderBtn', s.focus);
  await page.click('#changeReaderBtn');
  await page.wait(500);
  await page.eval(`document.querySelector('[data-reader-id="morwenna_ravenscroft"]').click()`);
  await page.wait(500);
  s = await look();
  check('Morwenna names the card and ends with a proverb', s.firstProse && s.firstSign && s.firstSign.startsWith('Proverb') && !/blockage|root distortion/.test(s.firstProse), s.firstSign);
  await page.click('#changeReaderBtn');
  await page.wait(500);
  await page.eval(`document.querySelector('[data-reader-id="cassian_vetch"]').click()`);
  await page.wait(400);

  // ------------------------------------------------------------ all cards
  await page.click('#compendiumBtn');
  await page.wait(800);
  await page.type('grief');
  await page.wait(300);
  const found = await page.eval(`({ count: document.getElementById('compendiumCount').textContent, tiles: document.querySelectorAll('.compendium-card-item').length })`);
  check('searching all cards looks in the meanings and says how many matched', found.tiles > 0 && found.count === `${found.tiles} of 78 cards`, found);
  await page.click('.compendium-card-item');
  await page.wait(600);
  check('a card opened from All cards sits on top of it', await page.eval(`document.getElementById('cardModalBackdrop').contains(document.elementFromPoint(innerWidth / 2, innerHeight / 2))`));
  await page.key('Escape');
  await page.key('Escape');
  await page.wait(300);

  // ------------------------------------------------------------ decks
  const tilts = (await look()).tilts;
  await page.click('#deckPickerBtn');
  await page.wait(700);
  await shot('08-decks');
  await page.eval(`document.querySelector('.deck-tile[data-deck="feline_mystica"]').click()`);
  await page.wait(600);
  s = await look();
  check('changing deck keeps the cards where they lie', s.tilts === tilts && s.status === 'Deck: Feline Mystica.', s.status);
  await page.click('#deckPickerBtn');
  await page.wait(500);
  await page.eval(`document.querySelector('.deck-tile[data-deck="household"]').click()`);
  await page.wait(500);

  // ------------------------------------------------------------ history
  await page.click('#historyBtn');
  await page.wait(500);
  let history = await page.eval(`({ rows: document.querySelectorAll('.history-item').length, note: document.getElementById('historyNote').textContent })`);
  check('the finished reading is in History, with a note on what is kept', history.rows === 1 && history.note === 'Keeps your last 50 readings, on this device only.', history);
  await page.click('.history-delete');
  await page.wait(200);
  check('deleting a reading leaves an Undo in its place, with focus on it', await page.eval(`document.activeElement.textContent === 'Undo' && document.querySelectorAll('.history-item').length === 0`));
  await page.key('Enter');
  await page.wait(200);
  check('Undo puts the reading back', await page.eval(`document.querySelectorAll('.history-item').length === 1`));
  await page.key('Escape');

  // ------------------------------------------------------------ reopening
  await page.reload();
  s = await look();
  check('a reload reopens the finished reading, with its question', s.turned === 3 && s.title === '“should I quit my job?”' && s.status.startsWith('Reopened your reading from'), s.status);
  check('a reopened reading is dated', s.date && s.date.startsWith('From '), s.date);

  // ------------------------------------------------------------ one card
  await page.click('#setupExpandBtn');
  await page.click('[data-spread="single"]');
  await page.wait(1400);
  await page.click('.card-wrapper');
  await page.wait(1400);
  s = await look();
  check('a single card gets no spread-wide lines: no tally, no advice, only a closing', s.legend === null && s.advice === null && s.summary === null && s.closing, s);
  check('the single-card closing does not talk about a last card', s.closing && !/last card|ends on/i.test(s.closing), s.closing);
  await shot('09-one-card-complete');

  // ------------------------------------------------------------ a reader that fails
  await page.click('#readerPickerBtn');
  await page.wait(400);
  await page.eval(`document.getElementById('customReaderBox').open = true; document.getElementById('customPluginCode').value = 'return { id: "boom", name: "Boom", interpret() { throw new Error("no cards today"); } };'`);
  await page.click('#registerCustomReaderBtn');
  await page.wait(200);
  check('adding a custom reader does not switch to it', (await page.eval(`document.querySelector('.reader-name').textContent`)) === 'Cassian Vetch');
  await page.eval(`document.querySelector('[data-reader-id="boom"]').click()`);
  await page.wait(500);
  s = await look();
  check('a reader that fails is replaced by the card meanings, with a notice', s.notice && s.notice.includes('Boom could not read these cards') && s.firstProse && s.firstProse.length > 20, s.notice);
  page.problems.length = 0; // the failure above is logged to the console on purpose
  await page.click('#changeReaderBtn');
  await page.wait(400);
  await page.eval(`document.querySelector('[data-reader-id="cassian_vetch"]').click()`);
  await page.wait(400);

  // ------------------------------------------------------------ storage that refuses
  await page.eval(`Storage.prototype.setItem = function () { throw new DOMException('full', 'QuotaExceededError'); }`);
  await page.click('#setupDealAgainBtn');
  await page.wait(1300);
  await page.click('.card-wrapper');
  await page.wait(1300);
  s = await look();
  check('a reading that cannot be saved says so', s.status.startsWith("Couldn't save this reading."), s.status);
  await page.goto();

  // ------------------------------------------------------------ the question as typed
  await page.eval(`localStorage.clear(); sessionStorage.clear(); localStorage.setItem('astralis.settings.v1', JSON.stringify({ spread: 'single' })); true`);
  await page.goto();
  await page.click('#queryInput');
  await page.type('should I [really] quit?');
  await page.click('.card-wrapper');
  await page.wait(900);
  const opening = await page.eval(`(() => { const o = document.getElementById('readingOpening'); return { text: o.textContent, italic: [...o.querySelectorAll('em')].map(e => e.textContent) }; })()`);
  check('square brackets in a question are shown as typed', opening.text.includes('“should I [really] quit?”') && opening.italic.length === 0, opening);

  // ------------------------------------------------------------ a link from someone else
  const link = (fields) => `#r=${encodeRecord({ spread: 'single', theme: '', deck: 'household', q: '', at: 1700000000000, cards: [[5, 0]], ...fields })}`;
  await page.eval(`localStorage.clear(); sessionStorage.clear(); true`);
  await page.goto(`${url}${link({ reader: 'lyle_pasternak', deck: 'feline_mystica', q: 'from a friend' })}`);
  s = await look();
  const kept = await page.eval(`JSON.parse(localStorage.getItem('astralis.history.v1') || '[]').length`);
  check('a link from someone else is called a shared reading', s.status.startsWith('Opened a shared reading from'), s.status);
  check('a shared reading is not put in your History', kept === 0, kept);
  check('a shared reading shows its question and its reader', s.title === '“from a friend”' && s.reader === 'Lyle Pasternak', s);
  await page.reload();
  s = await look();
  check('a reload keeps the shared reading, question and all', s.title === '“from a friend”' && s.status.startsWith('Opened a shared reading'), s);

  await page.goto(`${url}${link({ reader: 'nobody', deck: 'nope', at: 1700000000001, cards: [[6, 1]] })}`);
  s = await look();
  check('a link naming a reader that is not here is read by your own reader', s.reader === 'Cassian Vetch' && /Cassian Vetch is reading/.test(s.notice || ''), s);
  check('a link naming a deck that is not here uses your own deck', (await page.eval(`document.getElementById('deckPickerName').textContent`)) === 'Household Arcana');

  // ------------------------------------------------------------ a link opened mid-reading
  await page.eval(`localStorage.clear(); sessionStorage.clear(); localStorage.setItem('astralis.settings.v1', JSON.stringify({ spread: 'three_card' })); true`);
  await page.goto(url);
  await page.click('.card-wrapper');
  await page.wait(900);
  await page.eval(`location.hash = ${JSON.stringify(link({ reader: 'ruth_calloway', at: 1700000000002 }))}; true`);
  await page.wait(900);
  s = await look();
  check('opening a link mid-reading puts the unfinished reading away, with Undo', s.cards === 1 && s.status.includes('Your unfinished reading was put away.') && s.status.includes('Undo'), s.status);
  await page.click('#statusActionBtn');
  await page.wait(600);
  s = await look();
  check('Undo brings the unfinished reading back, and the link leaves the address bar', s.cards === 3 && s.turned === 1 && s.hash === '', s);

  // ------------------------------------------------------------ widths
  const celtic = async () => {
    await page.eval(`document.getElementById('setupFull').hidden && document.getElementById('setupExpandBtn').click()`);
    await page.click('[data-spread="celtic_cross"]');
    await page.wait(1800);
    await page.eval(`(document.getElementById('revealAllBtn').offsetParent ? document.getElementById('revealAllBtn') : document.getElementById('setupTurnAllBtn')).click()`);
    await page.wait(3400);
    await page.eval('window.scrollTo(0, 0)');
    await page.wait(300);
    return page.eval(`(() => {
      const box = e => { const r = e.getBoundingClientRect(); return { left: r.left, right: r.right, top: r.top + scrollY, bottom: r.bottom + scrollY, width: r.width, height: r.height }; };
      return {
        docWidth: document.documentElement.scrollWidth, viewWidth: innerWidth, viewHeight: innerHeight,
        arena: box(document.querySelector('.cc-cross-arena')), staff: box(document.querySelector('.cc-staff-column')),
        spread: box(document.getElementById('cardsLayoutContainer')), panel: box(document.getElementById('readingSection')),
        card: box(document.querySelector('.card-wrapper')),
        tiny: [...document.querySelectorAll('body *')].filter(e => e.offsetParent && e.children.length === 0 && e.textContent.trim() && parseFloat(getComputedStyle(e).fontSize) < 12 && !e.closest('svg')).map(e => e.className + ':' + getComputedStyle(e).fontSize)
      };
    })()`);
  };

  await page.size(1280, 800);
  let wide = await celtic();
  check('1280x800: reading beside the Celtic Cross, which fits one screen once at the top', wide.panel.left > wide.spread.right - 2 && wide.spread.height <= wide.viewHeight, wide);
  await shot('10-celtic-1280');

  await page.size(1024, 768);
  wide = await celtic();
  check('1024x768: the reading sits beside the Celtic Cross, not below it', wide.panel.left > wide.spread.right - 2 && wide.panel.top < 500, wide);
  check('1024x768: the whole cross fits one screen', wide.spread.height <= wide.viewHeight, wide.spread);
  check('1024x768: the reading keeps a usable width', wide.panel.width >= 380, wide.panel.width);
  check('1024x768: nothing scrolls sideways', wide.docWidth <= wide.viewWidth, wide);
  await shot('11-celtic-1024');

  await page.size(820, 1180);
  wide = await celtic();
  check('820x1180: the cross is above the reading and its three rows fit one screen', wide.panel.top > wide.spread.top && wide.arena.height <= wide.viewHeight, wide.arena);
  check('820x1180: nothing scrolls sideways', wide.docWidth <= wide.viewWidth, wide);
  await shot('12-celtic-tablet');

  await page.size(375, 740, { touch: true });
  await page.goto();
  wide = await celtic();
  s = await look();
  check('phone: nothing scrolls sideways', wide.docWidth <= wide.viewWidth, wide);
  check('phone: no text under 12px', wide.tiny.length === 0, wide.tiny);
  check('phone: the hint says Tap', s.hint.startsWith('Tap '), s.hint);
  check('phone: the header is compact', s.header.height <= 135, s.header);
  check('phone: the folded set-up bar is short', s.setup.height <= 130, s.setup);
  const small = await page.eval(`[...document.querySelectorAll('#appRoot button, #appRoot select, #appRoot input:not([type=checkbox])')].filter(e => e.offsetParent && !/entry-thumb/.test(e.className)).map(e => { const r = e.getBoundingClientRect(); return { n: e.id || e.className, w: Math.round(r.width), h: Math.round(r.height) }; }).filter(x => x.w < 44 || x.h < 44)`);
  check('phone: every control is at least 44px', small.length === 0, small);
  await shot('13-phone-celtic');
  await page.eval(`document.getElementById('setupExpandBtn').click()`);
  await page.click('[data-spread="three_card"]');
  await page.wait(1300);
  await shot('14-phone-three-face-down');
  check('phone: three cards are in view after a deal', (await look()).firstCard.top < 400);

  check('no errors were logged along the way', page.problems.length === 0, page.problems);
} catch (err) {
  check('the walk-through ran to the end', false, err.stack || String(err));
} finally {
  await close();
}

const failed = results.filter(result => !result.ok);
console.log(`\n${results.length - failed.length} of ${results.length} checks passed.`);
console.log(`Screenshots: ${shots.join('\n             ')}`);
process.exit(failed.length ? 1 : 0);
