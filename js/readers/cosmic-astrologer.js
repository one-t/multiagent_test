/**
 * Celeste Nova — The Cosmic Astrologer
 * Reads the cards through celestial correspondences, planetary decans, zodiacal archetypes, and cosmic alignments.
 */

import { ReaderRegistry } from '../reader-interface.js';

export const CosmicAstrologer = {
  id: "cosmic_astrologer",
  name: "Celeste Nova",
  title: "The Cosmic Astrologer & Stargazer",
  avatar: "✨",
  style: "astrological",
  bio: "Celeste maps tarot cards to their traditional astrological rulers, celestial decans, and cosmic transits, uncovering the planetary geometry guiding your trajectory.",
  philosophy: "The micro mirrors the macro; as the stars traverse their cosmic houses, the archetypes dance within your personal constellation.",

  interpret(spreadData) {
    const { spread, cards, question } = spreadData;
    const { counts, dominant } = ReaderRegistry.analyzeElements(cards);

    const cardReadings = cards.map(({ card, isReversed, position }) => {
      const orientation = isReversed ? "Retrograde Current" : "Direct Transit";
      const aspect = isReversed ? "Hard Square / Opposition" : "Harmonious Trine / Conjunction";

      return {
        positionIndex: position.index,
        positionName: position.name,
        positionSubtitle: position.subtitle,
        cardId: card.id,
        cardName: card.name,
        cardElement: card.element,
        isReversed,
        orientation,
        focalKeyword: card.esotericTitle || card.name,
        reflection: `House [${position.name}]: Governed by ${card.name} (${orientation} — ${aspect}). Resonating with ${card.element}. ${isReversed ? card.meaningReversed : card.meaningUpright} Esoteric vibration: "${card.esotericTitle}".`
      };
    });

    const queryContext = question && question.trim() 
      ? `Stellar Charting for inquiry: "${question.trim()}":` 
      : "Celestial Transit Assessment of the Current Field:";

    const summary = `${queryContext} The predominant planetary signature centers on the ${dominant} triplicity (Fire: ${counts.Fire}, Water: ${counts.Water}, Air: ${counts.Air}, Earth: ${counts.Earth}). Planetary retrogrades and alignments emphasize timing, patience, and aligning with larger astrological cycles.`;

    const elementalInsight = `Triplicity Resonance: ${dominant}. ${
      dominant === 'Fire' ? 'Solar and Martian fire surges. Watch for spontaneous combustion; channel energy into deliberate creative burns.' :
      dominant === 'Water' ? 'Lunar and Neptunian tides swell. Lucid dreams, heightened psychic receptivity, and emotional cleansing dominate the chart.' :
      dominant === 'Air' ? 'Mercurial and Uranian winds blow fresh mental currents. Sudden intellectual epiphanies and communication breakthroughs.' :
      dominant === 'Earth' ? 'Saturnian and Venusian grounding. Concrete material anchors, patience with physical time, and steady accretion of resources.' :
      'Aetheric quintessence transcending the zodiacal wheel.'
    }`;

    const actionableAdvice = "Track the current moon phase tonight; align your rituals with whether the lunar cycle is waxing (growth) or waning (release).";

    const closingBenediction = "May the cosmic geometries align in your favor, and may the North Star remain forever clear in your heart.";

    return {
      readerId: this.id,
      readerName: this.name,
      readerTitle: this.title,
      summary,
      elementalInsight,
      cardReadings,
      actionableAdvice,
      closingBenediction
    };
  }
};
