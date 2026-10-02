# Astralis

A single-page tarot app in plain HTML, CSS, and JavaScript modules, with no build step and no dependencies.

Draw one card, three cards, or a ten-card Celtic Cross from a 78-card deck. Turn the cards over one at a time and a reader interprets each one in its position. Finished readings are kept in the browser's history, can be shared as a link, copied as text, or saved as a picture.

![Astralis](screenshot.png)

## Running it

```bash
npm start
```

Then open <http://127.0.0.1:5173>. The server is `server.js`, a small static file server; set `PORT` to use a different port.

```bash
npm test              # unit tests, Node's built-in runner (tests/*.test.js)
npm run test:browser  # walks through the app in headless Edge or Chrome (tests/browser/)
```

The browser run starts its own server on a spare port. It needs a Chromium-based browser; set `BROWSER_PATH` if it cannot find one.

## What is in it

- **Three spreads.** One card, three cards with a choice of layout (past/present/future, situation/obstacle/advice, mind/body/spirit), and the Celtic Cross. Position names, descriptions, and roles live in `js/spreads.js`.
- **Two decks.** Household Arcana (painted portraits of the house cats, all 78 cards) and Feline Mystica (painted cats; the cards not yet painted show a plain frame).
- **Readers.** Each is a character with a line for every card, upright and reversed, a lead-in for every position, and their own way of opening and closing. Two are sexually explicit and are labelled "Explicit" in the reader list and on the reading. The list is `js/readers/index.js`.
- **Custom readers.** The Readers drawer has a code editor with a worked example. Paste a reader object and it is added until the page is reloaded.
- **Reversals** can be included or not; the setting applies from the next deal.
- **History and links.** A finished reading is saved on the device and in the address bar. Copy link reopens the same cards, in the same positions, with the same reader. The link carries the question only if you choose to include it.
- **Card browser.** All 78 cards, searchable by name or keyword, with upright and reversed meanings.
- Sound effects and an optional background sound are synthesized with the Web Audio API.

## Where things live

```
index.html              The page
css/styles.css          All styling
js/app.js               Application controller: state, dealing, reading panel, dialogs
js/overlays.js          Dialogs and drawers: stacking, focus, radio groups
js/spreads.js           Spread and position copy (names, descriptions, roles)
js/cards.js             GENERATED card data; edit build_cards_data.js instead
js/svg-art.js           GENERATED card art for the Feline Mystica deck; edit src/art and run build_svg_art.js
js/household-deck.js    Household Arcana renderer
js/assets.js            Which size of each picture to load
js/reader-interface.js  Reader registry and the suit/major tally helper
js/readers/index.js     The list of built-in readers, in display order
js/readers/compose.js   How every built-in reader's reading is put together
js/readers/             One file per reader; *-lines.js files hold the per-card text
js/history.js           Reading records, browser history, link encoding
js/reading-text.js      A reading as plain text, for copying
js/share-image.js       Save a reading as a picture
js/shuffle.js           Fisher-Yates shuffle with optional reversals
js/sound.js             Web Audio sound effects
js/sound-control.js     The sound button
js/candlelight.js       Background canvas animation
assets/                 Card paintings (three sizes each), reader portraits, fonts
src/art/cat-deck/       Source drawings read by build_svg_art.js
build_cards_data.js     Source of js/cards.js  (node build_cards_data.js)
build_svg_art.js        Source of js/svg-art.js (node build_svg_art.js)
tools/text-brief.mjs    Writes text-brief/, a brief for rewriting reader text
server.js               Static file server for local use
tests/                  Unit tests; tests/browser/ is the browser walk-through
```

## How a reader's text is put together

A built-in reader supplies words; `js/readers/compose.js` decides the order and the rules, which are the same for everyone:

| Part | When | Where it comes from |
|---|---|---|
| Greeting | Before the first card is turned | `greeting` on the reader |
| Opening | Once a card is turned | `openers`, by number of cards and whether a question was typed |
| Each card | As it is turned | The lead-in for the position (`frames`), the card's name, the card's line, and its sign-off set apart |
| Summary | Every card turned, three or more | `weight`: how heavy the spread is |
| Suits | Three or more | `suitNotes`, beside the counts |
| Advice | Three or more | `advice`, by how many cards are reversed |
| Closing | Last | `closers` by the suit of the last card; `closerOne` for a single card |

Any fixed line may be an array of ways to say it. The deal picks which, so the same deal always reads the same.

Anything a reader does, as opposed to says, goes in `[square brackets]` and is shown in italics.

`node tools/text-brief.mjs` writes `text-brief/`: the changes wanted to the readers' text, with the text as it stands, for handing to a writer.

## Adding a reader

A reader is an object with an `id`, a `name`, and an `interpret(spreadData)` method. Optional fields shown in the interface are `title` (one line under the name), `shortBio` (two sentences, in the reader list), `greeting` (said before the first card is turned), `philosophy` (quoted in the Readers drawer), `portrait` (an image path), and `explicit` (labels the reader in the list and on the reading).

```js
export const MyReader = {
  id: "my_reader",
  name: "My Reader",
  title: "One line under the name",
  shortBio: "Shown in the reader list.",
  greeting: "Said before the first card is turned.",

  interpret({ spread, cards, question }) {
    // spread:   { id, name, positions }
    // cards:    [{ card, isReversed, position }], one per position, in order
    // question: what the user typed, possibly empty
    return {
      readerId: this.id,
      readerName: this.name,
      readerTitle: this.title,
      opening: "Shown above the cards as soon as one is turned.",
      summary: "Shown once every card is turned. May be empty.",
      elementalInsight: "One sentence on the balance of suits. The app shows the counts itself.",
      cardReadings: cards.map(({ card, isReversed, position }) => ({
        positionIndex: position.index,
        positionName: position.name,
        cardName: card.name,
        isReversed,
        reflection: "What this card means in this position."
        // Or the parts, which the app lays out: lead, body, signatureLabel, signature
      })),
      actionableAdvice: "Shown under the heading Advice. May be empty.",
      closingBenediction: "Shown last, with no heading."
    };
  }
};
```

Key frames on `position.role`, not on the position name; the roles are listed in `js/spreads.js` and do not change when the copy does. `ReaderRegistry.analyzeElements(cards)` returns the suit and major counts and a `dominant` group, or `null` when nothing leads.

To ship a reader with the app, write its words as a `VOICE` (see any file in `js/readers/`), have `interpret` return `composeReading(VOICE, spreadData)`, and add it to `js/readers/index.js`. The app and the tests both read that list. To try one without editing code, open Readers and use Add a custom reader.

## Changing card text

Edit `build_cards_data.js` and run `node build_cards_data.js`. Each card has an `element`, a `ruler` (majors only), an `esotericTitle`, one or two sentences for upright and reversed, and lower-case keywords. The readers do not quote this text; it is shown in the card dialog and the card browser, and it is the fallback when a reader fails.
