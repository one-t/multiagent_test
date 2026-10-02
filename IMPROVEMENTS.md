# Improvements — Astralis

The task list from the review of commit `eeb6580`, brought up to date. Most of it is done; what is left is at the top.

**Priority.** P1: wrong, broken, or embarrassing. P2: real friction. P3: polish.

---

## Still open

| ID | P | What | Why it is open |
|---|---|---|---|
| R-03 | P1 | Morwenna's 156 card lines describe the Rider–Waite picture, not what the card means. | Writing job. In `text-brief/` (M-1). |
| R-06 | P2 | Openers, advice and closers exist in one version each, and five readers share one template for them. | Writing job (A-1, A-2). The app now accepts several variants of any fixed line and picks one per deal. |
| R-09 | P3 | Barnaby: keyword lists, and 60 lines that open with a phrase and no subject. | Writing job (B-1, B-2). |
| — | P2 | One-card closers and weight lines for Sable and Cal are clean placeholders. | Writing job (S-1, S-2, C-1). |
| B-01 | P1 | Feline Mystica has cards with no painting, which show a plain frame. | Waiting on the paintings. |
| B-05 | P2 | The link-preview image tag uses a relative path, which most previewers ignore. | Needs the site's address. |
| S-02 | P2 | Feline Mystica's full-size pictures are about 900KB each (Household: 378KB). The card dialog loads one per card. | Best done once, when the deck is finished. |
| S-03 | P3 | The repository carries about 90MB of card art in three sizes. | A decision: keep the full-size originals in the repo, or store them elsewhere. |

The writing jobs are specified in `text-brief/00-brief.md`, with each reader's present text beside it. `node tools/text-brief.mjs` rewrites that folder from the code.

Not started, carried over from earlier lists:

- Card of the day; compare two readers on the same cards; offline use.
- The candle idea (strike a match to begin, flame follows the pointer, blow it out to finish) and "a card drawn for you" (send someone a face-down card).

---

## Done

**Interface wording (W-01 to W-25).** All applied. No headline when there is no question; "Click a card to turn it over" ("Tap" on touch screens); "Dealt 3 cards."; "Your unfinished reading was put away." with "Undo"; "Now read by Lyle Pasternak."; "Deck: Feline Mystica."; link options "Include it" / "Leave it out"; the sound button shows its state; "Layout", "Deal", "Turn all"; card dialog chips are labelled ("Element: Air", "Planet: Uranus", "Traditional title: …").

**Readers.**

- R-01: Sable and Cal carry an "Explicit" label in the reader list and on the reading. They stay in the list, last.
- R-02: Morwenna no longer contradicts her own card. Her position lines are lead-ins that give no verdict, and a test holds every reader to that.
- R-04: Pippin is a joke on purpose and stays as written. His actions are in `[brackets]`, shown in italics.
- R-05: with one card, a reader says an opening, the card, and a closing written for one card. Summary, suit note and advice are for three cards or more.
- R-07, R-08: one pattern for titles; a two-sentence `shortBio` for each reader, no truncation.
- R-10: Lyle scores spreads only.
- New: every built-in reader is assembled by `js/readers/compose.js`, so the order is the same for all eight: opening, then each card (lead-in, the card's name, its line, its sign-off set apart), then summary, suits, advice, closing. Things a reader does go in `[square brackets]` and are shown in italics. The reader's greeting fills the panel before a card is turned (L-03).

**Spread text (T-01 to T-04).** "The matter", "What you want", "Where this is heading.", comment fixed.

**Broken.**

- B-02: titles use the plain heading face; the display face is kept for the brand.
- B-03: a painted Feline Mystica card fills its frame and carries its name once; numerals read correctly.
- B-04: README rewritten.

**Layout (L-01 to L-06).** The reading sits beside the cards from 900px wide. The Celtic Cross is sized to fit the screen under the set-up bar. The set-up bar folds to one line once a card is turned. Deck picker tiles are card-sized. The deck name wraps on a phone.

**Weight.** S-01: reader portraits load as 192px copies (6–10KB each, from 200–350KB).

**Repository.**

- H-01: `readers-panel/` and the `src/` prototype are deleted. `src/art/cat-deck/` stays; `build_svg_art.js` reads it.
- H-02: `js/readers/index.js` is the only reader list; the app and the tests read it.
- H-03: `UX_FLAWS.md` and `TEXT_SUGGESTIONS.md` deleted.
- H-04: the browser walk-through is `tests/browser/`, run with `npm run test:browser`.
- H-05: `tests/generated-files.test.js` fails if `js/cards.js` or `js/svg-art.js` is not what its build script writes (`node build_cards_data.js --check`, `node build_svg_art.js --check`).
