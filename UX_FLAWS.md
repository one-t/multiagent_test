# UX flaws — Astralis Tarot

Audit of the app served from `index.html` (`js/app.js`, `css/styles.css`, `js/readers/*`, `js/spreads.js`, `js/cards.js`). Copy problems are in `TEXT_SUGGESTIONS.md`; this file only mentions wording where it causes a functional problem.

**How this was checked**

- Read in full: `index.html`, `js/app.js`, `css/styles.css`, `js/spreads.js`, `js/reader-interface.js`, all seven registered readers.
- Run: every reader's `interpret()` in Node against the same three cards; contrast ratios computed from the CSS tokens; `node --test` (34 pass).
- Measured once in a live page at 1280×800 (element boxes, rendered text).
- **Not done:** screenshots failed, so nothing here was confirmed by eye. Items marked **[confirm in browser]** are derived from the CSS alone. Phone numbers are computed from the CSS formulas, not observed on a device.

**Severity**

- **P0** — the app shows something wrong, loses the user's work, or a control is visibly broken.
- **P1** — real friction, an accessibility failure, or a state the user cannot understand.
- **P2** — polish and consistency.

Each item is independent unless it says otherwise. Line numbers are as of commit `e99041a` plus the uncommitted `js/app.js` change.

---

## 1. Wrong or misleading output

**UX-001 · P0 · Suit tally counts Major Arcana as suit cards**
`ReaderRegistry.analyzeElements` (`js/reader-interface.js:95`) buckets every card by `card.element`. Every major has an element ("Fire / Mars", "Air", …), so The Tower is counted as Fire. Cassian and Lyle then print the Fire count as "Wands" (`cassian-vetch.js:145`, `lyle-pasternak.js:146`): The Tower + Five of Cups + King of Pentacles reads "Wands 1 · Cups 1 · Swords 0 · Pentacles 1" with no wand on the table.
Fix: tally suits and majors separately; label by what was counted.

**UX-002 · P0 · The "Spirit / Majors" bucket can never be reached**
Same function: because all 22 majors carry an element, `counts.Spirit` is always 0. Dead as a result: the Spirit bar segment (`app.js:899`), "· Majors N" (Cassian, Lyle), "· Wildcard N" (Ruth), and every reader's default elemental line.
Fix: follows from UX-001; then confirm each of those paths renders.

**UX-003 · P0 · A tie is reported as a dominant element**
`dominant` is the first key of a sort, so 1/1/0/1 yields "Fire". Readers then assert it: "a lot of throttle and not much patience", "the shop is running hot", "The prevailing essence is steeped in Fire energy".
Fix: return no dominant on a tie (and for spreads under three cards); readers need a neutral line for that case.

**UX-004 · P0 · Three-card description is wrong for two of the three frames**
`updateSpreadHeader` (`app.js:406`) always shows the spread's description, "The classic triad reading illustrating progression, causation, and emergent outcome", including under Situation / Obstacle / Advice and Mind / Body / Spirit. Observed live.
Fix: one description per frame, or none.

**UX-005 · P0 · Ruth reads every card of two frames with the single-card opener**
The Situation/Obstacle/Advice and Mind/Body/Spirit positions are built inline in `getPositionsForCurrentSpread` (`app.js:453`) without a `role`. Ruth's `getPositionFrame` looks up `role` only, so all three cards open with "Pulled one off the top, and it's talking straight at you:". Cassian and Lyle work only because they string-match the position name.
Fix: move those positions into `js/spreads.js` with roles (`subThemes` is already declared there and unused); give Ruth the six frames; delete the name-matching fallbacks.

**UX-006 · P0 · The orientation chip is reader-written and stops saying whether the card is reversed**
`fillEntry` (`app.js:854`) prints `data.orientation`: "Upright, unfortunately", "Active Leverage Point", "Friction / Bottleneck", "Retrograde Current", "Slipped plate", "Face-down in the dip", "Reversed (Internalized Block)". The card modal says "Reversed" for the same card.
Fix: the chip is always "Upright" or "Reversed", from `item.isReversed`. Reader flavour belongs in the prose.

**UX-007 · P0 · Madame Vivienne says "The Minor Arcana dominate your reading" when the only card is a Major**
`mystic-seer.js:50` uses `majorCount >= 2`. A single-card Tower, or one major in three, gets the minor-arcana sentence.
Fix: proportional threshold, as the three later readers already do (or remove the reader; see TXT-030).

**UX-008 · P0 · Elemental information is rendered twice, with different labels**
`fillSynthesis` draws a bar ("Fire 1 · Water 1 · Earth 1") and directly beneath prints the reader's `elementalInsight`, which repeats the counts as "Wands 1 · Cups 1 …" or "(Fire: 1, Water: 1, Air: 0, Earth: 1)".
Fix: the app owns the numbers; the reader contributes one sentence with no counts.

**UX-009 · P0 · "Traditional imagery" is filler for 56 of 78 cards**
No minor card has `symbols`, so the modal falls back to "Sacred geometric alignments, esoteric seals, elemental suit emblems" (`app.js:1239`). For majors, the list describes the Surrealist deck's own art ("Cosmic Precipice, Golden Feather, Solar Spiral, White Butterfly"), not traditional imagery, and is shown under every deck including the cat photographs.
Fix: hide the section when there is nothing true to say; if kept, write real symbols and label them accurately.

**UX-010 · P0 · Feline Mystica blurb is factually stale**
`DECK_INFO` (`app.js:1689`): "Painted major arcana. Twelve plates so far". `assets/feline-mystica/` holds 39 painted faces, 17 of them minors (aces, kings, queens, knights, Page of Wands).
Fix: derive the count from the image map, or stop quoting one.

**UX-011 · P1 · One reading can mix painted plates and line drawings**
Feline Mystica falls back to drawn faces for the cards it lacks, so a spread shows two unrelated art styles side by side.
Fix: label the deck as incomplete in the picker, or keep it out of the picker until it is whole.

**UX-012 · P1 · Lyle's score is the same joke with a hidden ceiling**
`Math.max(1, 6 - reversedCount)` "out of 10": it can never exceed 6, depends only on reversal count, and is wrapped in the identical sentence every reading.
Fix: see TXT-044.

**UX-013 · P1 · A reopened reading may silently be read by someone else**
`restoreRecord` (`app.js:1554`): an unknown reader id "leaves the current one". Custom readers are never persisted, so their saved readings reopen in a different voice with no notice.
Fix: show "Originally read by X — not available" in the panel.

---

## 2. Losing or freezing the user's work

**UX-020 · P0 · Four controls destroy the current reading without warning**
Spread tabs, the frame select, Enter in the question box, and "Shuffle & deal" all call `dealSpread()` immediately. A partly turned spread is gone with no undo and is not in History (only completed readings are saved).
Fix: confirm, or offer undo, whenever at least one card is turned and the reading is incomplete.

**UX-021 · P1 · Clicking the already-selected spread tab re-deals**
The tab handler does not check whether the spread changed (`app.js:337`).

**UX-022 · P0 · Editing the question after the first card is turned does nothing, silently**
The `input` handler (`app.js:368`) only applies while no card is turned. After that the box shows the new text while the title, the reading, Copy, the link and History keep the old question.
Fix: lock the field with an explanation once a reading has started, or offer "Deal again with this question".

**UX-023 · P1 · "Allow reversals" has no visible effect when toggled**
It applies to the next deal only. Untick it, turn a card already on the table, and it can still be reversed.
Fix: re-deal if nothing is turned yet; otherwise say it applies from the next deal.

**UX-024 · P1 · Opening a shared link or a History item changes the user's own settings**
`restoreRecord` switches spread, frame, deck and reader. Nothing is saved at that moment, but the next `saveSettings()` call persists the borrowed choices.
Fix: view a restored reading without touching preferences, or restore them on the next deal.

**UX-025 · P1 · The question travels in the link and the address bar, undisclosed**
`commitReading` writes `#r=…` (which encodes the question) into the URL as soon as the last card is turned. Copying the address bar or pressing "Copy link" shares the question. The tooltip says only "Copy a link that reopens this reading".
Fix: state that the link includes the question; offer a link without it.

**UX-026 · P1 · Deleting a History entry is instant and irreversible**
The × removes the record with no confirmation and no undo, sitting 0px from the row's open target.

**UX-027 · P1 · "Clear all" stays armed indefinitely**
After the first press it reads "Press again to clear all" until the list is re-rendered. No timeout, no disarm on blur, and the label change is not announced.

**UX-028 · P2 · History silently drops readings past 50**
`HISTORY_LIMIT = 50` (`history.js:12`). Nothing tells the user.

**UX-029 · P1 · Storage failures are silent while the UI promises persistence**
In private mode or with storage full, nothing is saved, yet History's empty state says readings are "kept here, on this device".

**UX-030 · P1 · A reload mid-reading discards it**
Only completed readings are restorable. Refreshing with seven of ten cards turned starts over.

**UX-031 · P2 · Changing reader on a reopened reading overwrites the saved reader**
`recordId` is time + cards, so a past reading's reader is replaced silently.

---

## 3. Flow and information architecture

**UX-040 · P1 · There is no stated first step**
The page loads with cards already dealt face down, a question box in the header, and "Shuffle & deal" / "Reveal & read" below the header. Whether the question binds at deal or at first turn is not said (it binds at first turn). The question field and the buttons that act on it are in different regions.
Fix: put question, spread and the primary action in one group, in the order they are used.

**UX-041 · P1 · Enter in the question box re-deals but reveals nothing**
The user asks a question and receives a new set of face-down cards identical in appearance to the previous set.

**UX-042 · P1 · With reduced motion, "Shuffle & deal" produces no visible change**
The deal animation is skipped; face-down cards are replaced by identical face-down cards. Only a screen-reader announcement confirms it.
Fix: a visible status line.

**UX-043 · P1 · "Reveal & read" stays enabled when there is nothing left to reveal**
`revealAllCards` returns early; the button does nothing.

**UX-044 · P1 · Every card can be turned from two places**
Each face-down card has a matching "Turn over" row in the reading panel. On desktop these sit side by side and do the same thing.
Fix: keep one. If the rows stay, they are placeholders, not buttons.

**UX-045 · P1 · A card is one target with two behaviours and no hint for either**
Face down: turn. Face up: open details. The only instructions are in `aria-label`. Nothing visible says a face-up card opens anything.

**UX-046 · P1 · The reading panel's primary button is "Change reader"**
Order is Copy, Copy link, Save image, then a gold "Change reader". The least frequent action has the strongest emphasis.

**UX-047 · P1 · Three disabled buttons with no reason given**
Before the last card is turned, Copy / Copy link / Save image are disabled. `.btn:disabled { pointer-events: none }` also kills their tooltips.
Fix: hide them until they apply, or explain.

**UX-048 · P1 · "No question asked" is displayed as the reading's headline before the user has done anything**
It is the largest text in the panel (`clamp(1.5rem, 2.4vw, 2.1rem)`) on first load.
Fix: show nothing, or a neutral label, until a reading starts.

**UX-049 · P1 · Three reader affordances, one of them dead**
Header "Readers" button, a header chip with avatar and name that looks clickable and is not, and "Change reader" in the panel. On phones the chip is hidden, so the header shows no current reader at all.
Fix: make the chip the control and drop the separate button.

**UX-050 · P1 · The spread name appears twice within one screen**
Stage title and the panel eyebrow print the same string ("3 Cards — Situation / Obstacle / Advice").

**UX-051 · P1 · A developer tool sits beside reader selection**
The drawer's second tab is a bare code textarea that runs `new Function(code)` with two buttons and no explanation.
Fix: move it behind an "Advanced" disclosure or out of the product.

**UX-052 · P1 · Registering the template repeatedly adds duplicate readers**
The template id is `"custom_oracle_" + Date.now()`, so every press adds another "Seraphina the Dreamwalker".

**UX-053 · P1 · Registering a reader re-reads the current spread without asking**
After 1.2 s the tab switches, the status message is wiped, and the reading is replaced. Custom readers also vanish on reload with no warning.

**UX-054 · P1 · A reader that throws leaves a turned card with an empty row**
Cassian and Lyle throw on an unknown card id; custom readers can throw anything. `flipCard` marks the card turned, then `fillEntry` → `ensureReading` throws uncaught.
Fix: catch in `ensureReading` and show a visible fallback.

**UX-055 · P1 · A registered reader is missing**
`js/readers/morwenna.js` (1,104 lines) is never registered in `app.js`; `js/readers/index.js` is imported by tests only. Either she belongs in the drawer or the file is dead.

**UX-056 · P2 · Reader avatars are inconsistent**
Cassian has a portrait; the other six get two-letter monograms. The `avatar` emoji on each reader is ignored.

**UX-057 · P2 · Reader cards vary wildly in size**
Bios run from about 30 words to about 100 (Cassian), so the list is uneven and the default reader's card fills most of a phone screen.

**UX-058 · P2 · The selected reader is marked by colour only, and is not scrolled into view**

**UX-059 · P2 · The reading shows no date**
A reopened reading looks identical to a new one; "Reading from … reopened" goes to screen readers only.

**UX-060 · P2 · Compendium remembers its search and filter between openings**
Reopening shows a filtered grid with no cue that a filter is active (and see UX-070).

**UX-061 · P2 · Compendium search ignores meanings**
It matches name, element, keywords and esoteric title only. No result count.

**UX-062 · P2 · No paging between cards from the compendium**
Prev/next exist in the card modal but are hidden unless it was opened from the spread.

**UX-063 · P2 · Deck picker and reader drawer commit on a single tap and close**
No preview, no confirm. Acceptable only if switching is instant and reversible; changing reader rewrites the reading.

---

## 4. Controls that are broken or ambiguous

**UX-070 · P0 · Compendium filter buttons have no styles at all [confirm in browser]**
`index.html:171–176`. The stylesheet has a rule for `.compendium-filters` (the flex row) and none for its buttons, and there is no global button reset, so they render as browser-default grey buttons inside a dark gold modal. `.active` has no rule either: the selected filter is indistinguishable.
Fix: style as chips; expose state with `aria-pressed` or a radiogroup.

**UX-071 · P0 · Drawer tabs keep the browser's default button background and border [confirm in browser]**
`.drawer-tab` (`styles.css:1003`) sets colour, padding and a bottom border but never `background` or `border`, so the inactive tab is a default grey button with `--text-dim` text.

**UX-072 · P1 · The compendium heading is unstyled [confirm in browser]**
`<h2>The case</h2>` has no matching rule (only `.deck-modal h2` and `.history-modal h2` exist), so it falls back to the body sans font at default size.

**UX-073 · P1 · The ambiance button lies when sound is muted**
`sound.toggleAmbiance()` returns `true` even though `startAmbiance()` exits early when muted (`sound.js:160–172`). The button lights up and says "Candle ambiance: playing" in silence. Muting stops the ambiance but leaves the button lit; unmuting does not restart it.

**UX-074 · P1 · Two sound controls with no stated relationship**
☀ (ambient audio) and ♫ (mute). Mute is persisted, ambiance is not. Nothing says mute overrides ambiance.
Fix: one sound control with clear states.

**UX-075 · P1 · A sun glyph stands for candle audio**
☀ toggles an audio drone; it reads as brightness or theme.

**UX-076 · P1 · The mute button's semantics are inverted**
`aria-label="Sound"` with `aria-pressed="true"` meaning on; tooltip gives state ("Sound on") not the action. The muted state is shown by 55% opacity and a strikethrough on a glyph.

**UX-077 · P1 · Sound is on by default**
Deal swoosh, flip sound and a 528 Hz chime play on first interaction with no warning and no volume control. "Reveal & read" on a Celtic Cross plays ten flips in 1.6 s plus the chime. Changing deck also plays a swoosh.

**UX-078 · P1 · Copy fails silently, and can throw**
Both clipboard calls only `console.error` on rejection. Where `navigator.clipboard` is undefined (insecure origin), the call throws synchronously outside the promise. Success ("Copied") is not announced.
Fix: fallback copy, visible failure text, live announcement.

**UX-079 · P1 · "Copy" puts Markdown on the clipboard**
`#`, `##`, `**…**`, `*…*`. Pasted into a message app it shows literal symbols.
Fix: plain text by default.

**UX-080 · P1 · "Turn the plate" changes less than it implies**
It rotates the image and swaps keywords. Upright and Reversed meanings are both always shown, neither emphasised. When the card came from the spread, the "in this reading" block keeps the drawn orientation's text while the chip shows the opposite.
Fix: emphasise the meaning for the shown orientation; mark the drawn orientation as such.

**UX-081 · P1 · Prev/next in the card modal move keyboard focus to the Close button**
`stepModal` → `openCardInspection` → `openOverlay(…, closeCardModal)` refocuses every step. A keyboard user tabs back to "next" each time. Arrow keys work but are undocumented.

**UX-082 · P2 · No position indicator in the card modal**
Stepping wraps around with no "3 of 10".

**UX-083 · P2 · Hiding prev/next shifts "Turn the plate"**
The button's position changes depending on how the modal was opened.

**UX-084 · P2 · Button labels change width while giving feedback**
"Copy" → "Copied", "Copy link" → "Link copied", "Save image" → "Drawing…" → "Could not save" reflow the action row.

**UX-085 · P2 · Reversal marker is a bare "↻"**
Hover-only `title="Reversed"`; no text on touch.

**UX-086 · P2 · Position descriptions are hover-only**
`posTag.title` is the only place they appear; unreachable by touch or keyboard.

**UX-087 · P2 · The question field has no visible label, no counter and no clear control**
`aria-label` only; placeholder as label; `maxlength="280"` truncates pastes silently.

**UX-088 · P2 · Enter during IME composition deals a spread**
The keydown handler does not check `e.isComposing`.

**UX-089 · P2 · "Save image" has no share path on phones**
It triggers a blob download; no `navigator.share`. Same-day readings share one filename (`astralis-reading-YYYY-MM-DD.jpg`).

**UX-090 · P2 · A hidden duplicate deck control is still in the DOM**
`<select id="deckThemeSelect">` inside `<div hidden>` exists only so code can set its value.

**UX-091 · P2 · Card tilt re-rolls on every re-render**
`--tilt` is `Math.random()` in `createCardCell`; switching deck makes every card on the table jump to a new angle.

---

## 5. Accessibility

**UX-100 · P1 · Keyboard focus is destroyed after turning a card from the reading list**
`fillEntry` replaces the "Turn over" button the user just pressed. Focus falls to `<body>`.
Fix: move focus to the entry's new card button.

**UX-101 · P1 · Focus is lost after choosing a reader via "Change reader"**
Focus is restored to that button, then `refreshReading` rebuilds the panel and removes it.

**UX-102 · P1 · Focus jumps to Close after deleting a History entry**
`app.js:1674`. It should go to the next entry.

**UX-103 · P1 · `--text-dim` fails contrast for small text**
`#7f7461` is 4.39:1 on `--bg-deep` and 4.11:1 on `--bg-panel`. It is used at 0.72–0.82rem for position subtitles, History meta, reader titles, the "Frame" label, the placeholder, inactive drawer tabs, the close ×, and "No question asked". Requirement is 4.5:1.

**UX-104 · P1 · Disabled buttons sit at 40% opacity**
Unreadable on the dark panel.

**UX-105 · P1 · Text below 12px in uppercase letter-spaced Cinzel**
Position tags 0.64–0.70rem, position numbers 0.68rem, compendium names 0.72rem, element segments 0.72rem, "In use" 0.72rem, spread eyebrow 0.74rem.
Fix: 12px floor; reconsider all-caps at these sizes.

**UX-106 · P1 · Single-choice groups use toggle semantics**
Spread tabs, reader cards and deck tiles are `aria-pressed` buttons. They are radio groups. The spread group has no label.

**UX-107 · P1 · Drawer tabs are not tabs**
No `tablist` / `tab` / `aria-selected` / `tabpanel`; panels toggled with inline `display`; no arrow-key movement.

**UX-108 · P1 · The page behind an open dialog is not inert**
`aria-modal` only. Tab is trapped by script, but screen-reader browse mode can still reach the page.

**UX-109 · P1 · Heading structure is incoherent**
Reader name is an `h2` beside the stage `h2`; the question is `h3`; Counsel/Closing are `h4`; the card modal jumps `h2` → `h4`; the drawer's title is an `h3`; reader names are `h4` inside buttons.

**UX-110 · P1 · One thing, three accessible names**
The button says "Compendium", the dialog is labelled "Card compendium", its heading says "The case".

**UX-111 · P1 · "Reveal & read" floods the live region**
Up to ten announcements in 1.6 s followed by "All cards are turned…". Most are dropped.
Fix: one summary announcement for bulk reveal.

**UX-112 · P1 · State changes are not announced**
Copied, link copied, clear-all armed, reader changed, deck changed, plugin registered or failed.

**UX-113 · P2 · The plugin textarea has no label; its status paragraph is not a live region**

**UX-114 · P2 · Native controls render in light mode**
No `color-scheme: dark`, so the select's option list, the checkbox, the search clear button and Firefox scrollbars are light. No `theme-color` meta.

**UX-115 · P2 · Hover lifts are not guarded for touch**
`transform` on `:hover` for cards, tiles, thumbs and buttons sticks after a tap. Wrap in `@media (hover: hover)`.

**UX-116 · P2 · Touch-target rule misses several controls**
The `pointer: coarse` block omits drawer tabs, compendium filters and the 16px checkbox itself.

**UX-117 · P2 · The brand `h1` is transparent text with a gradient clip**
Invisible in forced-colours mode; the `text-shadow` shows through the transparent glyphs.

**UX-118 · P2 · The candle canvas is not `aria-hidden`**

**UX-119 · P2 · No skip link past roughly ten header controls**

**UX-120 · P2 · On phones the Celtic Cross labels are numbers only**
`.pos-name` is hidden under 700px; names exist only in the list below.

---

## 6. Layout and visual

**UX-130 · P1 · The header takes a quarter of a laptop screen**
Measured 204px at 1280×800. Cards begin at y=383 and the three-card page already scrolls (document height 891).
Fix: one row; move spread and question out of the header.

**UX-131 · P1 · On phones the header is taller still, and information is deleted to compensate**
Under 700px the subtitle, the reader chip and the spread description are `display: none` rather than redesigned.

**UX-132 · P1 · Cards are too small to read on phones**
Three-card: `(100vw − 72px) / 3` ≈ 101px wide at 375px. Celtic Cross: `(100vw − 70px) / 4` ≈ 76px. The painted plates carry titles drawn inside the art.

**UX-133 · P1 · Reading prose has no measure**
In the single-card layout the panel grows to about 740px; Cormorant at 1.05rem runs near 100 characters per line.
Fix: cap prose at about 65ch.

**UX-134 · P1 · Counsel and Closing split into two narrow columns inside a narrow panel**
The breakpoint is the viewport (768px), not the panel, so at 1280 two ~250px columns sit inside a ~550px panel.

**UX-135 · P1 · A 280-character question renders as a wall of 2.1rem text**

**UX-136 · P1 · Nested scroll areas in the compendium**
The grid scrolls at `max-height: 60vh` inside a modal that scrolls at `90vh`.

**UX-137 · P1 · Opening any overlay shifts the page sideways**
`html.overlay-open { overflow: hidden }` removes the scrollbar; no `scrollbar-gutter`.

**UX-138 · P1 · `100vh` / `90vh` on mobile**
Page min-height, modal heights and the card-size formulas all use `vh`; they jump as browser chrome shows and hides. Use `dvh`.

**UX-139 · P2 · The vignette darkens the corners where the brand and reader chip sit**
Inset shadows of 160px and 300px over the whole viewport.

**UX-140 · P2 · Undefined colour token**
`.deck-select-label` uses `var(--gold-muted)` (`styles.css:197`), which is never defined; the "Deck" label inherits a colour by accident.

**UX-141 · P2 · Two stylesheets stacked in one file**
Lines 1–1350 are the original rules; everything after re-declares the same selectors to override them. Breakpoints at 700, 768, 1024, 1099, 1100 and 1200 leave bands (700–768, 1024–1100) where both generations apply. Dead rules: `.reversed-ribbon`, `.dominant-element-pill`, `.entry-keywords`, `.btn-active`, `.deck-theme-select`, `@keyframes fadeIn`.
Fix: merge into one set of rules with three breakpoints.

**UX-142 · P2 · Element bar proportions are distorted**
`flex-grow` is the count but `min-width: 62px` flattens small spreads; the legend is crammed inside the bar.

**UX-143 · P2 · Compendium tiles are empty dark boxes until scrolled into view**
No placeholder state.

**UX-144 · P2 · Separator characters are mixed**
"•" in the card modal, "·" in History and the tally, "—" in titles, "/" in position names.

---

## 7. Loading, resilience, platform

**UX-150 · P1 · Fonts load through a CSS `@import`**
Render-blocking chain to Google Fonts, no `preconnect`, thirteen font files. Offline, the whole interface falls back to Georgia. "Save image" draws with whatever fonts happen to be loaded.

**UX-151 · P1 · All URLs are root-absolute**
`/css/styles.css`, `/js/app.js`, `/assets/…`. The app breaks under a sub-path (for example a GitHub Pages project site) and from `file://`.

**UX-152 · P1 · Shared links unfurl as a bare title**
No meta description, no Open Graph tags, no favicon (a 404 on every load). Link sharing is a headline feature.

**UX-153 · P1 · Nothing renders without JavaScript**
No `<noscript>`; before the script runs the header says "Reader" and "Household Arcana" regardless of saved settings.

**UX-154 · P2 · No loading state for card art**
Full plates are about 500KB; the modal and a just-turned card can be blank on a slow connection.

**UX-155 · P2 · The dev server sends `Cache-Control: no-store` for every asset**
About 80MB of plates are never cached. There is no production serving story.

**UX-156 · P2 · The default deck's fallback art points at files that are not in the repository**
`js/household-deck.js` falls back to `/src/art/cat-deck/cat-inspo/*.jpg`, which is gitignored. Any card without a painted plate is a broken image on a fresh clone. All 78 plates exist today, so this is latent.

---

## 8. Repository hygiene that will mislead the agents fixing the above

**UX-160 · P1 · `js/cards.js` and `js/svg-art.js` are generated**
`build_cards_data.js` and `build_svg_art.js` overwrite them. Edits made directly to the generated files will be lost on the next build. Decide which is the source and delete or document the other.

**UX-161 · P1 · Three parallel implementations**
`js/` is what `index.html` loads. `src/` is an older app (`src/main.js`, its own Cassian) still imported by `test/`. `readers-panel/` is a TypeScript package with `dist/` committed. Agents will edit the wrong one.

**UX-162 · P2 · Two test directories**: `test/` and `tests/`.

**UX-163 · P2 · The README describes a different app**
Four readers (there are seven), port 8080 (the server uses 5173), no mention of decks, History, links or image export, and an architecture tree that omits half of `js/`.

**UX-164 · P2 · The product has three names**
"Astralis" in the UI, `night-window` in `package.json`, "Night window listening" in the server log.

**UX-165 · P2 · Strays**: empty `scratch/`; `assets/cassian-vetch.jpg` (363KB), referenced only by the old `src/` app while the live app uses `assets/readers/cassian_vetch.jpg`; a 718KB `screenshot.png` embedded in the README (not checked against the current design).
