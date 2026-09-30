/**
 * Tarot Spreads Definition Module
 * Supports 1-Card, 3-Card (with sub-themes), and full 10-Card Celtic Cross spreads.
 */

export const SPREADS = {
  single: {
    id: "single",
    name: "Single Card — The Oracle's Light",
    cardCount: 1,
    description: "A focused reading for immediate clarity, daily guidance, or answering a specific question directly.",
    positions: [
      {
        index: 0,
        name: "The Guiding Light",
        subtitle: "Core Essence & Focal Guidance",
        description: "The primary energy, message, or thematic lesson that currently surrounds your query.",
        role: "core",
        gridArea: "center"
      }
    ]
  },

  three_card: {
    id: "three_card",
    name: "Three Cards — Triptych of Time",
    cardCount: 3,
    description: "The classic triad reading illustrating progression, causation, and emergent outcome.",
    subThemes: [
      { id: "past_present_future", label: "Past / Present / Future" },
      { id: "situation_obstacle_advice", label: "Situation / Obstacle / Advice" },
      { id: "mind_body_spirit", label: "Mind / Body / Spirit" }
    ],
    positions: [
      {
        index: 0,
        name: "The Past / Origin",
        subtitle: "Foundations & Root Causes",
        description: "Past experiences, karmic conditioning, and foundational influences that shaped where you stand now.",
        role: "past",
        gridArea: "left"
      },
      {
        index: 1,
        name: "The Present / Nexus",
        subtitle: "Current Crossroads",
        description: "The active vortex of energy, your present state of mind, and the immediate dynamics at play.",
        role: "present",
        gridArea: "center"
      },
      {
        index: 2,
        name: "The Future / Horizon",
        subtitle: "Unfolding Trajectory",
        description: "Where this energy naturally flows if conditions remain uninterrupted; your potential destination.",
        role: "future",
        gridArea: "right"
      }
    ]
  },

  celtic_cross: {
    id: "celtic_cross",
    name: "The Celtic Cross — Sacred Ten",
    cardCount: 10,
    description: "The revered ten-card divination mandala revealing the subconscious root, crowning conscious will, surrounding forces, and ultimate outcome.",
    positions: [
      {
        index: 0,
        name: "1. The Heart of the Matter",
        subtitle: "Present Situation",
        description: "The central theme, atmosphere, or core inquiry governing the seeker's current moment.",
        role: "center_base",
        slot: "cross-center"
      },
      {
        index: 1,
        name: "2. The Crossing Force",
        subtitle: "The Challenge / Catalyst",
        description: "What crosses you for good or ill; the immediate tension, test, or catalyst shaping the dilemma.",
        role: "center_cross",
        slot: "cross-crossing",
        isCrossing: true
      },
      {
        index: 2,
        name: "3. The Foundation / Root",
        subtitle: "Subconscious Undercurrents",
        description: "The deep bedrock, suppressed truths, or distant ancestral/past causes buried beneath awareness.",
        role: "below",
        slot: "cross-bottom"
      },
      {
        index: 3,
        name: "4. The Passing Past",
        subtitle: "Departing Influences",
        description: "Energies, events, or mindsets that have just receded or are actively waning from power.",
        role: "left",
        slot: "cross-left"
      },
      {
        index: 4,
        name: "5. The Crowning Mind",
        subtitle: "Conscious Aspirations",
        description: "What sits above; your conscious ideals, highest hopes, or deliberate mental intentions.",
        role: "above",
        slot: "cross-top"
      },
      {
        index: 5,
        name: "6. The Near Horizon",
        subtitle: "Imminent Future",
        description: "The incoming wave; events and psychological states approaching in the near term.",
        role: "right",
        slot: "cross-right"
      },
      {
        index: 6,
        name: "7. The Seeker's Self",
        subtitle: "Internal Stance",
        description: "Your attitude, self-perception, emotional posture, and personal power in this situation.",
        role: "staff_1",
        slot: "staff-1"
      },
      {
        index: 7,
        name: "8. The External Realm",
        subtitle: "Environment & Others",
        description: "External energies, companions, opposition, workplace atmosphere, and social expectations.",
        role: "staff_2",
        slot: "staff-2"
      },
      {
        index: 8,
        name: "9. Hopes & Fears",
        subtitle: "The Secret Threshold",
        description: "Your deepest secret yearnings inextricably intertwined with what you most dread.",
        role: "staff_3",
        slot: "staff-3"
      },
      {
        index: 9,
        name: "10. The Ultimate Outcome",
        subtitle: "Synthesis & Culmination",
        description: "The grand resolution; the harmonic synthesis of all previous nine cards when integrated.",
        role: "staff_4",
        slot: "staff-4"
      }
    ]
  }
};

export function getSpread(spreadId) {
  return SPREADS[spreadId] || SPREADS.single;
}
