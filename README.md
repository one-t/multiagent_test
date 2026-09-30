# ASTRALIS TAROT — The Candlelit Altar

A single-page esoteric tarot divination web application built with plain HTML, CSS, and modern JavaScript modules.

![Astralis Tarot](screenshot.png)

## Highlights

- **Complete 78-Card Deck**: Every single Major Arcana (22 cards) and Minor Arcana (56 cards across Wands, Cups, Swords, and Pentacles) is modeled with complete upright and reversed interpretations, elemental associations, keywords, and traditional esoteric titles.
- **Original Vector SVG Deck Art**: All 78 card faces and the universal reversible card back are drawn as original scalable vector artwork (`viewBox="0 0 300 480"`), featuring sacred geometry, elemental gradients, and custom iconography—free of copyrighted deck copies.
- **Divination Spreads**:
  - **1-Card Oracle**: Quick daily meditation or direct question guidance.
  - **3-Card Triptych**: With selectable thematic frameworks:
    - *Past / Present / Future*
    - *Situation / Obstacle / Advice*
    - *Mind / Body / Spirit*
  - **10-Card Celtic Cross**: The revered sacred mandala with central base card, perpendicular crossing challenge card, root subconscious, receding past, crowning conscious, imminent future, and the 4-card staff column (Self, Environment, Hopes & Fears, Ultimate Outcome).
- **3D Card Flip Animations**: CSS 3D transforms (`preserve-3d`, `rotateY`, and `rotateZ` for inverted cards) with hover levitation and golden edge luster.
- **Dark Candlelit Altar Atmosphere**: Living ambient HTML5 canvas overlay with organic candle flame flickering, radial light diffusion, floating golden motes/embers, and subtle interactive illumination.
- **Zero-Dependency Web Audio Synthesizer**: Synthesizes card swooshes, paper turning snaps, 528Hz singing bowl chimes, and ambient candle flame crackle + mystical drones directly in code.
- **"Readers" Panel with Plug-in Interface**:
  - Modular plug-in contract where any JavaScript module can implement an `interpret(spreadData)` method.
  - 4 built-in readers with distinct voices and philosophical lenses:
    - **Madame Vivienne** (*The Mystic Seer*): Mythic archetypes, cosmic currents, poetic prophecy.
    - **Corvus Thorne** (*The Shadow Oracle*): Jungian shadow analysis, defense mechanisms, raw honesty.
    - **Dr. Aurelius** (*The Pragmatic Alchemist*): Strategic leverage, actionable execution, decision theory.
    - **Celeste Nova** (*The Cosmic Astrologer*): Elemental triplicities, planetary rulers, celestial transits.
  - **Live Plug-in Developer**: In-app code editor enabling seekers to write, validate, and register custom reader plugins in real time!
- **Card Inspection Modal & Compendium**: High-resolution view of any card with orientation toggle, full meanings, and an interactive 78-card searchable compendium.

## Architecture

```
multiagent_test/
├── index.html              # Single-page altar application
├── css/
│   └── styles.css          # Dark candlelit aesthetic, 3D flip mechanics, responsive layout
├── js/
│   ├── cards.js            # Complete 78-card dataset with upright & reversed meanings
│   ├── svg-art.js          # Vector artwork renderer for all 78 cards & symmetrical back
│   ├── spreads.js          # Spread definitions (1-Card, 3-Card, Celtic Cross)
│   ├── sound.js            # Web Audio API sound synthesizer
│   ├── candlelight.js      # Procedural candlelight flicker & ember canvas system
│   ├── reader-interface.js # Reader plug-in registry and elemental analyzer
│   ├── app.js              # Application state and event controller
│   └── readers/
│       ├── mystic-seer.js         # Madame Vivienne
│       ├── shadow-oracle.js       # Corvus Thorne
│       ├── pragmatic-alchemist.js # Dr. Aurelius
│       └── cosmic-astrologer.js   # Celeste Nova
├── build_cards_data.js     # Generator script for 78 cards dataset
├── build_svg_art.js        # Generator script for vector SVG deck artwork
├── server.js               # Lightweight local static server for preview & development
└── package.json
```

## Plug-in Interface Contract

Any JavaScript object conforming to the following structure can be registered into the `ReaderRegistry`:

```javascript
export const MyReaderPlugin = {
  id: "unique_reader_id",
  name: "Reader Name",
  title: "Epithet / Subtitle",
  avatar: "🔮", // or SVG / emoji icon
  style: "mystic" | "psychological" | "practical" | "astrological" | "custom",
  bio: "Reader biography...",
  philosophy: "Reading ethos...",

  interpret(spreadData) {
    const { spread, cards, question } = spreadData;
    // spread: Spread object with id, name, description, positions
    // cards: Array of { card, isReversed, position, isFlipped }
    // question: seeker's input inquiry string

    return {
      readerId: this.id,
      readerName: this.name,
      readerTitle: this.title,
      summary: "High-level synthesis of the reading...",
      elementalInsight: "Analysis of Fire, Water, Air, and Earth distribution...",
      cardReadings: [
        {
          positionIndex: 0,
          positionName: "Position Name",
          cardName: "Card Name",
          orientation: "Upright" | "Reversed",
          reflection: "Specific interpretation for this card in this position..."
        }
      ],
      actionableAdvice: "Concrete practice or recommendation...",
      closingBenediction: "Parting blessing or wisdom..."
    };
  }
};
```

## Running Locally

Run with Node.js:

```bash
node server.js
```

Open `http://localhost:8080` in any modern web browser.
