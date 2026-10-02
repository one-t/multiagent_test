/**
 * Spread definitions: one card, three cards (three frames), and the ten-card Celtic Cross.
 *
 * Every position carries a `role`. Readers key their position frames on it, so a
 * renamed or re-ordered position must keep its role. Descriptions are shown in
 * the reading list while a card is face down, and in the card dialog.
 */

const PAST_PRESENT_FUTURE = [
  { index: 0, name: "Past", description: "Where this came from.", role: "past", gridArea: "left" },
  { index: 1, name: "Present", description: "What is happening now.", role: "present", gridArea: "center" },
  { index: 2, name: "Future", description: "Where this is heading.", role: "future", gridArea: "right" }
];

export const SPREADS = {
  single: {
    id: "single",
    name: "One card",
    cardCount: 1,
    description: "One card for a direct question, or for the day ahead.",
    positions: [
      {
        index: 0,
        name: "Your card",
        description: "The card for your question.",
        role: "core",
        gridArea: "center"
      }
    ]
  },

  three_card: {
    id: "three_card",
    name: "Three cards",
    cardCount: 3,
    description: "Three cards: where this came from, where it stands, and where it is heading.",
    subThemes: [
      {
        id: "past_present_future",
        label: "Past, present, future",
        description: "Three cards: where this came from, where it stands, and where it is heading.",
        positions: PAST_PRESENT_FUTURE
      },
      {
        id: "situation_obstacle_advice",
        label: "Situation, obstacle, advice",
        description: "Three cards: what is going on, what stands in the way, and what to do about it.",
        positions: [
          { index: 0, name: "Situation", description: "What is actually going on.", role: "situation", gridArea: "left" },
          { index: 1, name: "Obstacle", description: "What stands in the way.", role: "obstacle", gridArea: "center" },
          { index: 2, name: "Advice", description: "What to do about it.", role: "advice", gridArea: "right" }
        ]
      },
      {
        id: "mind_body_spirit",
        label: "Mind, body, spirit",
        description: "Three cards: what you think, what your body is carrying, and what you already know underneath.",
        positions: [
          { index: 0, name: "Mind", description: "What you think about it.", role: "mind", gridArea: "left" },
          { index: 1, name: "Body", description: "What your body and your days are carrying.", role: "body", gridArea: "center" },
          { index: 2, name: "Spirit", description: "What you already know underneath.", role: "spirit", gridArea: "right" }
        ]
      }
    ],
    positions: PAST_PRESENT_FUTURE
  },

  celtic_cross: {
    id: "celtic_cross",
    name: "Celtic Cross",
    cardCount: 10,
    description: "Ten cards: the situation, what crosses it, what lies behind and ahead, and where it leads.",
    positions: [
      { index: 0, name: "The matter", description: "What this is about, right now.", role: "center_base", slot: "cross-center" },
      { index: 1, name: "Challenge", description: "What crosses it, for good or ill.", role: "center_cross", slot: "cross-crossing", isCrossing: true },
      { index: 2, name: "Root", description: "What this grew out of, below your notice.", role: "below", slot: "cross-bottom" },
      { index: 3, name: "Recent past", description: "What is just leaving.", role: "left", slot: "cross-left" },
      { index: 4, name: "What you want", description: "What you are reaching for.", role: "above", slot: "cross-top" },
      { index: 5, name: "Near future", description: "What is coming next.", role: "right", slot: "cross-right" },
      { index: 6, name: "You", description: "How you are holding yourself in this.", role: "staff_1", slot: "staff-1" },
      { index: 7, name: "Others", description: "The people and pressures around you.", role: "staff_2", slot: "staff-2" },
      { index: 8, name: "Hopes and fears", description: "What you hope for and what you dread, often the same thing.", role: "staff_3", slot: "staff-3" },
      { index: 9, name: "Outcome", description: "Where this is likely to end up if nothing changes.", role: "staff_4", slot: "staff-4" }
    ]
  }
};

export const DEFAULT_THREE_CARD_THEME = "past_present_future";

export function getSpread(spreadId) {
  return SPREADS[spreadId] || SPREADS.single;
}

/** The three-card frame with this id, or the default frame. */
export function getThreeCardTheme(themeId) {
  const themes = SPREADS.three_card.subThemes;
  return themes.find(theme => theme.id === themeId) || themes[0];
}

/** The positions dealt for a spread, taking the three-card frame into account. */
export function getPositions(spreadId, themeId) {
  if (spreadId === "three_card") return getThreeCardTheme(themeId).positions;
  return getSpread(spreadId).positions;
}

/** What the spread header says: one short sentence, specific to the frame for three cards. */
export function getSpreadDescription(spreadId, themeId) {
  if (spreadId === "three_card") return getThreeCardTheme(themeId).description;
  return getSpread(spreadId).description;
}
