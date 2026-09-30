/**
 * Madame Vivienne — The Mystic Seer
 * Archetypal, poetic, and spiritual divination focused on cosmic synchronicity and soul wisdom.
 */

import { ReaderRegistry } from '../reader-interface.js';

export const MysticSeer = {
  id: "mystic_seer",
  name: "Madame Vivienne",
  title: "The Mystic Seer & High Oracle",
  avatar: "🔮",
  style: "mystic",
  bio: "Inheritor of the Bohemian candlelit lineages, Vivienne reads the cards as living mirrors of the eternal astral currents, weaving poetic prophecy and timeless archetypal counsel.",
  philosophy: "The cards do not dictate a locked fate; they illuminate the hidden celestial river upon which your soul is currently sailing.",

  interpret(spreadData) {
    const { spread, cards, question } = spreadData;
    const { counts, dominant } = ReaderRegistry.analyzeElements(cards);

    const cardReadings = cards.map(({ card, isReversed, position }) => {
      const orientation = isReversed ? "Reversed" : "Upright";
      const meaning = isReversed ? card.meaningReversed : card.meaningUpright;
      const keywords = isReversed ? card.keywordsReversed : card.keywordsUpright;
      const keyFocus = keywords[0] || "";

      let poeticReflection = "";
      if (card.arcana === "major") {
        poeticReflection = `The archetypal veil parts for ${card.name} (${orientation}). This is not mere mundane circumstance, but a profound spiritual milestone. In the realm of ${position.name}, ${meaning} Listen closely to the whisper of ${keyFocus.toLowerCase()}.`;
      } else {
        poeticReflection = `${card.name} (${orientation}) emerges in the sanctuary of ${position.name}. With the elemental pulse of ${card.element}, ${meaning} The thread of destiny emphasizes ${keywords.slice(0, 3).join(", ")}.`;
      }

      return {
        positionIndex: position.index,
        positionName: position.name,
        positionSubtitle: position.subtitle,
        cardId: card.id,
        cardName: card.name,
        cardElement: card.element,
        isReversed,
        orientation,
        focalKeyword: keyFocus,
        reflection: poeticReflection
      };
    });

    // Synthesize the spread summary
    const majorCount = cards.filter(c => c.card.arcana === "major").length;
    let weightNote = majorCount >= 2 
      ? "Several Major Arcana illuminate your spread, signaling that great cosmic forces and deep karmic initiations are at work." 
      : "The Minor Arcana dominate your reading, showing that everyday choices, tangible actions, and emotional habits hold the key.";

    const queryContext = question && question.trim() 
      ? `Regarding your inquiry: "${question.trim()}", the oracle perceives:` 
      : "The sacred sphere reveals the current spiritual tide:";

    const summary = `${queryContext} The prevailing essence is steeped in ${dominant} energy. ${weightNote} The tapestry of cards beckons you to harmonize your internal compass with the unfolding mystery.`;

    const elementalInsight = `Dominant Element: ${dominant}. (Fire: ${counts.Fire}, Water: ${counts.Water}, Air: ${counts.Air}, Earth: ${counts.Earth}). ${
      dominant === 'Fire' ? 'Fiery passion, creative inspiration, and sudden action ignite this crossroad.' :
      dominant === 'Water' ? 'Deep emotional tides, intuitive currents, and relational healing seek expression.' :
      dominant === 'Air' ? 'Mental clarity, sharp discernment, and truth-telling are urgently required.' :
      dominant === 'Earth' ? 'Grounded perseverance, bodily care, and practical manifestation will stabilize your path.' :
      'Spiritual forces transcend the elemental realm.'
    }`;

    const actionableAdvice = `Light a single candle, breathe in the still incense of introspection, and surrender the desire to control every wave. Honor ${cards[0].card.name}'s lesson before taking another step.`;

    const closingBenediction = "May the silver light of the stars guide your footsteps through shadow and sunrise alike. Blessed be your journey.";

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
