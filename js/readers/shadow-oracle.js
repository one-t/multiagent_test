/**
 * Corvus Thorne — The Shadow Oracle
 * Jungian psychological analysis, unmasking defense mechanisms, shadow integration, and raw honesty.
 */

import { ReaderRegistry } from '../reader-interface.js';

export const ShadowOracle = {
  id: "shadow_oracle",
  name: "Corvus Thorne",
  title: "The Shadow Oracle & Jungian Inquisitor",
  avatar: "🌑",
  style: "psychological",
  bio: "Corvus strips away flattering illusions to expose the unvarnished subconscious motives, denied truths, and hidden gold buried within your personal underworld.",
  philosophy: "Until you make the unconscious conscious, it will direct your life and you will call it fate.",

  interpret(spreadData) {
    const { spread, cards, question } = spreadData;
    const { counts, dominant } = ReaderRegistry.analyzeElements(cards);

    const reversedCount = cards.filter(c => c.isReversed).length;

    const cardReadings = cards.map(({ card, isReversed, position }) => {
      const orientation = isReversed ? "Reversed (Internalized Block)" : "Upright (Expressed Dynamic)";
      const keywords = isReversed ? card.keywordsReversed : card.keywordsUpright;
      const shadowCore = isReversed 
        ? `Here lies an unintegrated repression. ${card.name} reversed indicates where you may be projecting fear, avoiding accountability, or running from ${keywords[0].toLowerCase()}.`
        : `Even upright, ${card.name} demands scrutiny. The ego may identify too strongly with this posture. Are you hiding behind ${keywords[0].toLowerCase()} as a defense?`;

      return {
        positionIndex: position.index,
        positionName: position.name,
        positionSubtitle: position.subtitle,
        cardId: card.id,
        cardName: card.name,
        cardElement: card.element,
        isReversed,
        orientation,
        focalKeyword: keywords[0] || "",
        reflection: `Position [${position.name}]: ${shadowCore} Notice how this intersects with: "${isReversed ? card.meaningReversed : card.meaningUpright}"`
      };
    });

    const queryContext = question && question.trim() 
      ? `Dissecting the inquiry: "${question.trim()}":` 
      : "Examining the psychological architecture of this spread:";

    const summary = `${queryContext} You have ${reversedCount} reversed card(s) and a primary elemental tension in ${dominant}. The shadow never attacks to destroy; it agitates to demand recognition. Stop pretending the discomfort is caused entirely by outside actors.`;

    const elementalInsight = `Shadow Elemental Diagnosis (${dominant}): ${
      dominant === 'Fire' ? 'Volatile impulsive reactivity masking deep vulnerability or fear of inadequacy.' :
      dominant === 'Water' ? 'Submerged resentment, emotional guilt, or subconscious victim narratives.' :
      dominant === 'Air' ? 'Obsessive intellectual rationalization and cynicism keeping feelings at arm’s length.' :
      dominant === 'Earth' ? 'Rigid fear of loss, hoarding security, or somatic exhaustion born from hyper-control.' :
      'Deep existential questioning and dissociation from visceral presence.'
    }`;

    const actionableAdvice = "Perform a direct shadow audit: write down what you resent most in the people around you right now, then identify where you secretly harbor that exact same trait within yourself.";

    const closingBenediction = "Descend without trembling into your own depths; the dragon guards the pearl of your true sovereignty.";

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
