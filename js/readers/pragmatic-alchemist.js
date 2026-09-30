/**
 * Dr. Aurelius — The Pragmatic Alchemist
 * Strategic, grounded, action-oriented interpretation with concrete steps and cognitive frameworks.
 */

import { ReaderRegistry } from '../reader-interface.js';

export const PragmaticAlchemist = {
  id: "pragmatic_alchemist",
  name: "Dr. Aurelius",
  title: "The Pragmatic Alchemist & Strategist",
  avatar: "⚖️",
  style: "practical",
  bio: "Trained in both classical hermetics and strategic decision theory, Aurelius translates symbolic archetypes into rigorous, actionable blueprints for tangible reality.",
  philosophy: "Divination without operational execution is merely fantasy. We read the cards to build better bridges in the physical world.",

  interpret(spreadData) {
    const { spread, cards, question } = spreadData;
    const { counts, dominant } = ReaderRegistry.analyzeElements(cards);

    const cardReadings = cards.map(({ card, isReversed, position }) => {
      const orientation = isReversed ? "Friction / Bottleneck" : "Active Leverage Point";
      const keyMetric = isReversed ? card.keywordsReversed[0] : card.keywordsUpright[0];
      
      let strategicAction = "";
      if (isReversed) {
        strategicAction = `Mitigation Step: Eliminate inefficiencies caused by ${card.name} (${keyMetric}). ${card.meaningReversed} Identify the specific bottleneck and pause non-essential expenditures of energy.`;
      } else {
        strategicAction = `Capitalization Step: Leverage the momentum of ${card.name} (${keyMetric}). ${card.meaningUpright} Allocate 70% of your focus to developing this asset.`;
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
        focalKeyword: keyMetric,
        reflection: `[${position.name}]: ${strategicAction}`
      };
    });

    const queryContext = question && question.trim() 
      ? `Operational appraisal for objective: "${question.trim()}":` 
      : "Executive assessment of current strategic posture:";

    const summary = `${queryContext} The system exhibits strong ${dominant} variance. The spread highlights clear tactical leverage points alongside critical operational bottlenecks that must be resolved sequentially.`;

    const elementalInsight = `Operational Resource Allocation (${dominant}): ${
      dominant === 'Fire' ? 'High creative velocity. Prioritize rapid prototyping and assertive initiative over endless deliberation.' :
      dominant === 'Water' ? 'Relational and trust dynamics are your primary risk/opportunity factor. Align stakeholder communication.' :
      dominant === 'Air' ? 'Information architecture and clarity are decisive. Remove ambiguity, document agreements, cut superfluous meetings.' :
      dominant === 'Earth' ? 'Execution, cashflow, and bodily endurance rule. Build repeatable routines and lock in baseline reserves.' :
      'High-level visionary recalibration required.'
    }`;

    const actionableAdvice = "Define one high-impact action item within the next 24 hours that directly addresses the crossing or obstacle card, and set a hard deadline for completion.";

    const closingBenediction = "Structure is the vessel of freedom. Execute with discipline, and circumstance will align with intent.";

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
