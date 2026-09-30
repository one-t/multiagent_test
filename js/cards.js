/**
 * Complete 78-Card Tarot Deck Dataset
 * All 22 Major Arcana + 56 Minor Arcana across Wands, Cups, Swords, and Pentacles.
 * Rich upright and reversed meanings, esoteric titles, elemental associations, and symbolic keys.
 */

export const SUITS = [
  {
    "id": "wands",
    "name": "Wands",
    "element": "Fire",
    "domain": "Passion, Inspiration, Willpower, Action, Creativity",
    "emblem": "Staff / Flame / Salamander",
    "colors": [
      "#ff7700",
      "#ff3300",
      "#ffe600",
      "#3a0d0d"
    ]
  },
  {
    "id": "cups",
    "name": "Cups",
    "element": "Water",
    "domain": "Emotions, Love, Intuition, Relationships, Healing",
    "emblem": "Chalice / Ocean Wave / Lotus",
    "colors": [
      "#00b4d8",
      "#0077b6",
      "#90e0ef",
      "#03045e"
    ]
  },
  {
    "id": "swords",
    "name": "Swords",
    "element": "Air",
    "domain": "Intellect, Truth, Conflict, Clarity, Communication",
    "emblem": "Blade / Wind Gale / Winged Falcon",
    "colors": [
      "#b8c0ff",
      "#7209b7",
      "#4cc9f0",
      "#181829"
    ]
  },
  {
    "id": "pentacles",
    "name": "Pentacles",
    "element": "Earth",
    "domain": "Material World, Wealth, Craft, Body, Nature",
    "emblem": "Golden Talisman / Pentagram / Vine",
    "colors": [
      "#52b788",
      "#2d6a4f",
      "#e9c46a",
      "#1b4332"
    ]
  }
];

export const TAROT_DECK = [
  {
    "id": "maj_00",
    "num": 0,
    "name": "The Fool",
    "number": "0",
    "arcana": "major",
    "suit": null,
    "element": "Air",
    "esotericTitle": "The Spirit of Aether",
    "symbols": [
      "Cosmic Precipice",
      "Golden Feather",
      "Solar Spiral",
      "White Butterfly"
    ],
    "meaningUpright": "A call to step into the unknown with pure trust and an open heart. The Fool signals beginnings that defy conventional logic, inviting you to take a daring leap of faith into infinite possibility.",
    "meaningReversed": "A warning against careless impulsiveness or, conversely, paralyzing fear that prevents you from taking a necessary step. Check your footing before you leap, but do not let caution become a cage.",
    "keywordsUpright": [
      "New Beginnings",
      "Innocence",
      "Leap of Faith",
      "Spontaneity",
      "Pure Potential"
    ],
    "keywordsReversed": [
      "Recklessness",
      "Fear of the Unknown",
      "Naivety",
      "Hesitation",
      "Carelessness"
    ]
  },
  {
    "id": "maj_01",
    "num": 1,
    "name": "The Magician",
    "number": "I",
    "arcana": "major",
    "suit": null,
    "element": "Air / Mercury",
    "esotericTitle": "The Magus of Power",
    "symbols": [
      "Lemniscate (Infinity)",
      "Ouroboros",
      "Four Hallows (Wand, Cup, Sword, Coin)",
      "Upright Athame"
    ],
    "meaningUpright": "The convergence of will and creation. As above, so below: you have all four elements and tools required to manifest your intent into material reality. Channel focused concentration.",
    "meaningReversed": "Misdirection, trickery, untapped potential, or the manipulation of creative force. Look closely at whether illusions are clouding the true intent or if your gifts are being squandered.",
    "keywordsUpright": [
      "Manifestation",
      "Willpower",
      "Resourcefulness",
      "Creation",
      "Focused Action"
    ],
    "keywordsReversed": [
      "Manipulation",
      "Untapped Power",
      "Deception",
      "Scattered Focus",
      "Illusion"
    ]
  },
  {
    "id": "maj_02",
    "num": 2,
    "name": "The High Priestess",
    "number": "II",
    "arcana": "major",
    "suit": null,
    "element": "Water / Moon",
    "esotericTitle": "Priestess of the Silver Star",
    "symbols": [
      "Twin Pillars of Duality (Boaz & Jachin)",
      "Veil of Pomegranates",
      "Horned Lunar Crown",
      "Sacred Scroll"
    ],
    "meaningUpright": "Guardian of the subconscious sanctuary. She bids you to sit in quiet contemplation, trusting your innate intuition and the silent mysteries whispered beyond the veil of physical perception.",
    "meaningReversed": "Suppressed intuition, hidden agendas, superficiality, or secrets eating away at clarity. You are ignoring your inner knowing in favor of external noise.",
    "keywordsUpright": [
      "Intuition",
      "Sacred Mystery",
      "Subconscious",
      "Divine Feminine",
      "Inner Knowing"
    ],
    "keywordsReversed": [
      "Ignored Instinct",
      "Secrets",
      "Superficiality",
      "Emotional Detachment",
      "Hidden Motives"
    ]
  },
  {
    "id": "maj_03",
    "num": 3,
    "name": "The Empress",
    "number": "III",
    "arcana": "major",
    "suit": null,
    "element": "Earth / Venus",
    "esotericTitle": "Daughter of the Mighty Ones",
    "symbols": [
      "Crown of Twelve Stars",
      "Shield of Venus",
      "Golden Wheat Sheaf",
      "Flowing River of Life"
    ],
    "meaningUpright": "Abundant harvest, sensual vitality, and motherly creation. The Empress breathes life into projects, creative endeavors, and relationships through nurturing warmth and lush fertility.",
    "meaningReversed": "Creative drought, over-dependence, smothering possessiveness, or neglect of your physical and emotional well-being. Tend to your own garden before attempting to harvest.",
    "keywordsUpright": [
      "Abundance",
      "Fertility",
      "Creativity",
      "Nurturing",
      "Sensual Grace"
    ],
    "keywordsReversed": [
      "Creative Block",
      "Depletion",
      "Smothering",
      "Neglect",
      "Over-indulgence"
    ]
  },
  {
    "id": "maj_04",
    "num": 4,
    "name": "The Emperor",
    "number": "IV",
    "arcana": "major",
    "suit": null,
    "element": "Fire / Aries",
    "esotericTitle": "Sun of the Morning, Chief Among the Mighty",
    "symbols": [
      "Carved Ram Stone Throne",
      "Orb of Dominion",
      "Ankh Scepter",
      "Granite Peaks"
    ],
    "meaningUpright": "Sovereignty, disciplined architecture, and benevolent authority. The Emperor provides the structural scaffold, boundaries, and strategic fortitude necessary for lasting order.",
    "meaningReversed": "Tyranny, rigidity, abuse of power, or conversely, a lack of self-discipline and structural chaos. Examine whether firmness has hardened into brittle stubbornness.",
    "keywordsUpright": [
      "Authority",
      "Structure",
      "Stability",
      "Discipline",
      "Strategic Leadership"
    ],
    "keywordsReversed": [
      "Tyranny",
      "Rigidity",
      "Chaos",
      "Micromanagement",
      "Loss of Control"
    ]
  },
  {
    "id": "maj_05",
    "num": 5,
    "name": "The Hierophant",
    "number": "V",
    "arcana": "major",
    "suit": null,
    "element": "Earth / Taurus",
    "esotericTitle": "Magus of the Eternal Gods",
    "symbols": [
      "Triple Papal Tiara",
      "Cross of Three Bars",
      "Crossed Golden Keys",
      "Twin Acolytes"
    ],
    "meaningUpright": "Spiritual lineage, sacred tradition, mentorship, and collective wisdom. Seeking guidance through established pathways of knowledge, structured study, and shared moral truth.",
    "meaningReversed": "Blind dogma, hollow orthodoxy, rebellious awakening, or breaking away from oppressive institutional belief systems to discover your autonomous truth.",
    "keywordsUpright": [
      "Tradition",
      "Spiritual Mentorship",
      "Wisdom",
      "Institutions",
      "Sacred Truth"
    ],
    "keywordsReversed": [
      "Dogmatism",
      "Rebellion",
      "Unconventional Paths",
      "Hypocrisy",
      "Blind Conformity"
    ]
  },
  {
    "id": "maj_06",
    "num": 6,
    "name": "The Lovers",
    "number": "VI",
    "arcana": "major",
    "suit": null,
    "element": "Air / Gemini",
    "esotericTitle": "The Children of the Voice Divine",
    "symbols": [
      "Winged Seraph of Grace",
      "Tree of Life and Tree of Knowledge",
      "Entwined Serpent",
      "Alchemical Union"
    ],
    "meaningUpright": "Profound soul alignment, sacred union, and core value decisions. Beyond romantic passion, this card mirrors the harmonious reconciliation of your own opposing internal dualities.",
    "meaningReversed": "Disharmony, misaligned values, moral compromise, or self-sabotaging conflict. A divided heart cannot walk two divergent paths at once.",
    "keywordsUpright": [
      "Sacred Union",
      "Harmony",
      "Values Alignment",
      "Deep Connection",
      "Choice"
    ],
    "keywordsReversed": [
      "Disharmony",
      "Misalignment",
      "Moral Conflict",
      "Indecision",
      "Severed Bonds"
    ]
  },
  {
    "id": "maj_07",
    "num": 7,
    "name": "The Chariot",
    "number": "VII",
    "arcana": "major",
    "suit": null,
    "element": "Water / Cancer",
    "esotericTitle": "Child of the Powers of the Waters",
    "symbols": [
      "Star-Spangled Canopy",
      "Twin Sphinxes (Light & Shadow)",
      "Wand of Will",
      "Armor of Sunlight"
    ],
    "meaningUpright": "Mastery of opposing currents through unwavering focus and willpower. Victory won through determination, self-discipline, and steering opposing impulses toward a singular triumph.",
    "meaningReversed": "Loss of direction, runaway aggression, feeling dragged off course by warring passions, or arrogance leading to a sudden crash. Reign in the steeds before continuing.",
    "keywordsUpright": [
      "Determination",
      "Willpower",
      "Victory",
      "Discipline",
      "Triumph Over Adversity"
    ],
    "keywordsReversed": [
      "Loss of Control",
      "Aggression",
      "Obstacles",
      "Aimlessness",
      "Ego Crash"
    ]
  },
  {
    "id": "maj_08",
    "num": 8,
    "name": "Strength",
    "number": "VIII",
    "arcana": "major",
    "suit": null,
    "element": "Fire / Leo",
    "esotericTitle": "Daughter of the Flaming Sword",
    "symbols": [
      "Gentle Hand Taming Lion",
      "Infinity Lemniscate",
      "Woven Rose Garland",
      "Serene Radiance"
    ],
    "meaningUpright": "Courage without cruelty; fortitude rooted in compassion and emotional endurance. Taming raw primordial instinct through gentle patience, quiet inner grace, and moral resilience.",
    "meaningReversed": "Self-doubt, explosive temper, raw vulnerability masquerading as cowardice, or being consumed by primal fear. Remember that genuine force does not shout.",
    "keywordsUpright": [
      "Inner Strength",
      "Compassion",
      "Patience",
      "Courage",
      "Gentle Mastery"
    ],
    "keywordsReversed": [
      "Self-Doubt",
      "Raw Aggression",
      "Impatience",
      "Weakness of Will",
      "Burnout"
    ]
  },
  {
    "id": "maj_09",
    "num": 9,
    "name": "The Hermit",
    "number": "IX",
    "arcana": "major",
    "suit": null,
    "element": "Earth / Virgo",
    "esotericTitle": "Magus of the Voice of Light",
    "symbols": [
      "Six-Pointed Star Lantern",
      "Pilgrim Staff of Pine",
      "Frozen Mountain Crag",
      "Cowl of Solitude"
    ],
    "meaningUpright": "Soul-searching in sacred solitude. Stepping away from societal clamor to illuminate your own path with the lantern of hard-won introspection and contemplative truth.",
    "meaningReversed": "Harmful isolation, bitter loneliness, antisocial withdrawal, or fear of looking inward. Alternatively, obstinate refusal to accept wisdom from genuine guides.",
    "keywordsUpright": [
      "Introspection",
      "Solitude",
      "Inner Guidance",
      "Spiritual Quest",
      "Discernment"
    ],
    "keywordsReversed": [
      "Isolation",
      "Loneliness",
      "Rejection of Wisdom",
      "Paranoia",
      "Lost in the Dark"
    ]
  },
  {
    "id": "maj_10",
    "num": 10,
    "name": "Wheel of Fortune",
    "number": "X",
    "arcana": "major",
    "suit": null,
    "element": "Fire / Jupiter",
    "esotericTitle": "Lord of the Forces of Life",
    "symbols": [
      "Cosmic Turning Wheel",
      "Four Living Creatures",
      "Sphinx of Balance",
      "Ascending/Descending Serpents"
    ],
    "meaningUpright": "The cyclical rotation of destiny, karmic shifts, and sudden pivots of fortune. A reminder that no condition is static: welcome the rising crest of transformation with adaptable grace.",
    "meaningReversed": "A stroke of misfortune, resistance to inevitability, feeling trapped in repeating generational or karmic cycles. Yield to the turn rather than clinging to the spokes.",
    "keywordsUpright": [
      "Cycles of Destiny",
      "Karmic Shift",
      "Good Fortune",
      "Inevitable Change",
      "Serendipity"
    ],
    "keywordsReversed": [
      "Misfortune",
      "Resistance to Change",
      "Karmic Stagnation",
      "Bad Timing",
      "Disruption"
    ]
  },
  {
    "id": "maj_11",
    "num": 11,
    "name": "Justice",
    "number": "XI",
    "arcana": "major",
    "suit": null,
    "element": "Air / Libra",
    "esotericTitle": "Daughter of the Lords of Truth",
    "symbols": [
      "Double-Edged Upright Sword",
      "Golden Scales of Equity",
      "Veil of Rectitude",
      "Stone Dais"
    ],
    "meaningUpright": "Equitable balance, karmic cause and effect, objective clarity, and absolute integrity. What has been sown will now be weighed and reaped under impartial universal law.",
    "meaningReversed": "Dishonesty, unfair treatment, bias, avoiding accountability, or harsh self-condemnation. The truth will eventually reveal itself regardless of evasive maneuvers.",
    "keywordsUpright": [
      "Truth",
      "Fairness",
      "Cause & Effect",
      "Integrity",
      "Accountability"
    ],
    "keywordsReversed": [
      "Injustice",
      "Bias",
      "Dishonesty",
      "Evading Truth",
      "Legal/Moral Conflict"
    ]
  },
  {
    "id": "maj_12",
    "num": 12,
    "name": "The Hanged Man",
    "number": "XII",
    "arcana": "major",
    "suit": null,
    "element": "Water / Neptune",
    "esotericTitle": "Spirit of the Mighty Waters",
    "symbols": [
      "Living Tau Cross",
      "Luminous Golden Halo",
      "Crossed Ankle Suspension",
      "Calm Expression"
    ],
    "meaningUpright": "Willing surrender, radical shift in perspective, and sacred pause. By releasing the desperate impulse to force an outcome, enlightenment emerges from stillness and sacrifice.",
    "meaningReversed": "Stubborn resistance, martyrdom for useless causes, prolonged indecision, or stagnation masquerading as patience. Letting go is different from languishing.",
    "keywordsUpright": [
      "Surrender",
      "New Perspective",
      "Sacred Pause",
      "Spiritual Awakening",
      "Releasing Control"
    ],
    "keywordsReversed": [
      "Martyrdom",
      "Stagnation",
      "Futile Resistance",
      "Indecision",
      "Delays"
    ]
  },
  {
    "id": "maj_13",
    "num": 13,
    "name": "Death",
    "number": "XIII",
    "arcana": "major",
    "suit": null,
    "element": "Water / Scorpio",
    "esotericTitle": "Child of the Great Transformers",
    "symbols": [
      "Mystic Five-Petaled Rose",
      "Obsidian Scythe",
      "Eclipsed Solar Dawn",
      "Fallen Crown"
    ],
    "meaningUpright": "Profound transformation, inevitable endings, and the fertile composting of the obsolete. Clear the decayed underbrush so that genuine renewal can sprout from the fertile ground.",
    "meaningReversed": "Fear of change, desperately clinging to dying relationships or habits, dragging out unavoidable endings, stagnation rooted in grief.",
    "keywordsUpright": [
      "Transformation",
      "Endings & Beginnings",
      "Shedding Old Skin",
      "Inevitable Transition",
      "Liberation"
    ],
    "keywordsReversed": [
      "Clinging to Past",
      "Fear of Transformation",
      "Stagnant Rot",
      "Prolonged Endings",
      "Resistance"
    ]
  },
  {
    "id": "maj_14",
    "num": 14,
    "name": "Temperance",
    "number": "XIV",
    "arcana": "major",
    "suit": null,
    "element": "Fire / Sagittarius",
    "esotericTitle": "Daughter of the Reconcilers",
    "symbols": [
      "Twin Golden Urns",
      "Continuous Light Stream",
      "Dual Footing (Earth & Water)",
      "Solar Iris on Brow"
    ],
    "meaningUpright": "Alchemical synthesis, supreme balance, patience, and moderation. Blending opposing elements into a unified, harmonious elixir. Finding healing tranquility in middle ground.",
    "meaningReversed": "Imbalance, excess, clashing extremes, impatience, or trying to force incompatible elements into a toxic cocktail. Restore equilibrium before continuing.",
    "keywordsUpright": [
      "Alchemy",
      "Moderation",
      "Divine Harmony",
      "Patience",
      "Integration"
    ],
    "keywordsReversed": [
      "Imbalance",
      "Excess",
      "Discord",
      "Impatience",
      "Extremism"
    ]
  },
  {
    "id": "maj_15",
    "num": 15,
    "name": "The Devil",
    "number": "XV",
    "arcana": "major",
    "suit": null,
    "element": "Earth / Capricorn",
    "esotericTitle": "Lord of the Gates of Matter",
    "symbols": [
      "Inverted Pentagram",
      "Stone Pedestal with Iron Ring",
      "Loosely Chained Captives",
      "Torch of Ignorance"
    ],
    "meaningUpright": "Shadow bonds, materialism, obsessive attachments, and self-imposed illusions of helplessness. Notice that the chains around the neck are loose enough to be lifted off at will.",
    "meaningReversed": "Breaking free of toxicity, releasing limiting addictions, reclaiming autonomy from oppressive dogmas, opening eyes to self-imposed captivity.",
    "keywordsUpright": [
      "Shadow Self",
      "Materialism",
      "Addiction/Attachment",
      "Illusion of Trap",
      "Primal Desires"
    ],
    "keywordsReversed": [
      "Liberation",
      "Overcoming Addiction",
      "Awakening",
      "Reclaiming Power",
      "Breaking Chains"
    ]
  },
  {
    "id": "maj_16",
    "num": 16,
    "name": "The Tower",
    "number": "XVI",
    "arcana": "major",
    "suit": null,
    "element": "Fire / Mars",
    "esotericTitle": "Lord of the Hosts of the Mighty",
    "symbols": [
      "Lightning Bolt of Revelation",
      "Crumbling Crown of Citadel",
      "Flames from Windows",
      "Falling Figures"
    ],
    "meaningUpright": "Cataclysmic breakthrough, shattering of illusions, sudden revelation, and the collapse of brittle structures built on false premises. Humbling yet completely liberating.",
    "meaningReversed": "Disaster narrowly averted, denial in the face of inevitable collapse, fear of suffering necessary disruption, clinging to a cracking foundation.",
    "keywordsUpright": [
      "Sudden Upheaval",
      "Shattered Illusions",
      "Breakthrough",
      "Liberation",
      "Radical Truth"
    ],
    "keywordsReversed": [
      "Disaster Averted",
      "Denial",
      "Fear of Collapse",
      "Prolonging the Inevitable",
      "Internal Ruin"
    ]
  },
  {
    "id": "maj_17",
    "num": 17,
    "name": "The Star",
    "number": "XVII",
    "arcana": "major",
    "suit": null,
    "element": "Air / Aquarius",
    "esotericTitle": "Daughter of the Firmament",
    "symbols": [
      "Eight-Pointed Guiding Star",
      "Seven Lesser Constellations",
      "Twin Urns Pouring Waters",
      "Sacred Ibis"
    ],
    "meaningUpright": "Renewed hope, celestial inspiration, serene faith, and profound spiritual healing. After the storm of the Tower, the night sky opens to reveal your eternal north star.",
    "meaningReversed": "Hopelessness, despair, lack of faith in your own gifts, cynicism, feeling disconnected from spiritual nourishment. Look up; the stars have not vanished.",
    "keywordsUpright": [
      "Hope",
      "Inspiration",
      "Serenity",
      "Divine Guidance",
      "Spiritual Renewal"
    ],
    "keywordsReversed": [
      "Despair",
      "Disillusionment",
      "Cynicism",
      "Lack of Faith",
      "Discouragement"
    ]
  },
  {
    "id": "maj_18",
    "num": 18,
    "name": "The Moon",
    "number": "XVIII",
    "arcana": "major",
    "suit": null,
    "element": "Water / Pisces",
    "esotericTitle": "Ruler of Flux and Reflux",
    "symbols": [
      "Crying Lunar Face",
      "Twin Watchtowers",
      "Howling Wolf & Dog",
      "Emerging Primeval Crab"
    ],
    "meaningUpright": "The realm of illusions, deep dreams, irrational fears, and primeval subconscious tides. Not all is as it seems in the moonlight; let intuition guide you past phantom terrors.",
    "meaningReversed": "Clearing of psychic fog, unveiling deception, release from paranoid fears, awakening from an unsettling nightmare into grounded reality.",
    "keywordsUpright": [
      "Illusion",
      "Subconscious Depths",
      "Intuition",
      "Dreams & Phantoms",
      "Uncertainty"
    ],
    "keywordsReversed": [
      "Lifting Fog",
      "Truth Revealed",
      "Overcoming Fear",
      "Clarity",
      "Release of Anxiety"
    ]
  },
  {
    "id": "maj_19",
    "num": 19,
    "name": "The Sun",
    "number": "XIX",
    "arcana": "major",
    "suit": null,
    "element": "Fire / Sun",
    "esotericTitle": "Lord of the Fire of the World",
    "symbols": [
      "Radiant Smiling Sun",
      "Four Blooming Sunflowers",
      "Joyful Innocent Rider",
      "Crimson Banner"
    ],
    "meaningUpright": "Radiant joy, vitality, crystalline clarity, warmth, and unclouded success. Every shadow dissipates under the solar brilliance of pure authenticity and celebratory vigor.",
    "meaningReversed": "Temporary clouds obscuring the light, muted enthusiasm, unrealistic optimism, or sunburn from overexposure. The sun is still shining behind the mist.",
    "keywordsUpright": [
      "Joy",
      "Vitality",
      "Success",
      "Warmth & Clarity",
      "Celebration"
    ],
    "keywordsReversed": [
      "Temporary Cloudiness",
      "Muted Joy",
      "Unrealistic Expectations",
      "Burnout",
      "Delayed Success"
    ]
  },
  {
    "id": "maj_20",
    "num": 20,
    "name": "Judgement",
    "number": "XX",
    "arcana": "major",
    "suit": null,
    "element": "Fire / Pluto",
    "esotericTitle": "The Spirit of the Primal Fire",
    "symbols": [
      "Archangel Gabriel's Trumpet",
      "Cross-Emblazoned Herald Banner",
      "Rising Awakened Souls",
      "Glacial Peaks"
    ],
    "meaningUpright": "Resurrection, answering the higher calling, reckoning, and ultimate spiritual rebirth. Forgiving past missteps and stepping forward fully into your authentic cosmic vocation.",
    "meaningReversed": "Harsh self-reproach, ignoring the unmistakable summons to evolve, fear of being judged, holding onto outdated guilt that paralyzes rebirth.",
    "keywordsUpright": [
      "Rebirth",
      "Higher Calling",
      "Awakening",
      "Forgiveness",
      "Karmic Absolution"
    ],
    "keywordsReversed": [
      "Self-Doubt",
      "Harsh Judgement",
      "Ignoring the Call",
      "Guilt & Shame",
      "Hesitation"
    ]
  },
  {
    "id": "maj_21",
    "num": 21,
    "name": "The World",
    "number": "XXI",
    "arcana": "major",
    "suit": null,
    "element": "Earth / Saturn",
    "esotericTitle": "The Great One of the Night of Time",
    "symbols": [
      "Laurel Wreath of Eternity",
      "Cosmic Dancer with Twin Wands",
      "Four Tetramorphs",
      "Golden Ribbons"
    ],
    "meaningUpright": "Wholeness, completion, triumphant cycle fulfillment, and cosmic integration. You have traveled the full circle of the arcana; step into celebration and universal harmony.",
    "meaningReversed": "Incomplete closure, shortcuts taken that leave unfinished business, feeling delayed at the final threshold, inability to celebrate accomplishments.",
    "keywordsUpright": [
      "Completion",
      "Wholeness",
      "Integration",
      "Triumph",
      "Cosmic Harmony"
    ],
    "keywordsReversed": [
      "Lack of Closure",
      "Unfinished Business",
      "Delays at Finish",
      "Emptiness",
      "Shortcuts Taken"
    ]
  },
  {
    "id": "wands_ace",
    "num": 1,
    "name": "Ace of Wands",
    "number": "A",
    "rank": "ace",
    "rankLabel": "Ace",
    "arcana": "minor",
    "suit": "wands",
    "suitName": "Wands",
    "element": "Fire",
    "esotericTitle": "Root of the Powers of Fire",
    "meaningUpright": "A sudden spark of inspiration, creative urge, or ambitious new venture bursting with primal fire.",
    "meaningReversed": "Flickering delays, lack of direction, creative block, or misdirected kinetic passion.",
    "keywordsUpright": [
      "Inspiration",
      "Creative Spark",
      "Potential",
      "Bold Initiative"
    ],
    "keywordsReversed": [
      "Hesitation",
      "Burnout",
      "Lack of Energy",
      "Creative Blocks"
    ]
  },
  {
    "id": "wands_2",
    "num": 2,
    "name": "Two of Wands",
    "number": "II",
    "rank": "2",
    "rankLabel": "Two",
    "arcana": "minor",
    "suit": "wands",
    "suitName": "Wands",
    "element": "Fire",
    "esotericTitle": "Lord of Dominion",
    "meaningUpright": "Future planning, holding the world in your hands, gazing toward horizons beyond present borders.",
    "meaningReversed": "Fear of stepping into the unknown, small-mindedness, travel delays, or lack of long-term vision.",
    "keywordsUpright": [
      "Planning",
      "Future Horizons",
      "Ambition",
      "Discovery"
    ],
    "keywordsReversed": [
      "Fear of Unknown",
      "Playing It Safe",
      "Bad Timing",
      "Disorientation"
    ]
  },
  {
    "id": "wands_3",
    "num": 3,
    "name": "Three of Wands",
    "number": "III",
    "rank": "3",
    "rankLabel": "Three",
    "arcana": "minor",
    "suit": "wands",
    "suitName": "Wands",
    "element": "Fire",
    "esotericTitle": "Lord of Established Strength",
    "meaningUpright": "Ships coming into harbor; expansion, overseas enterprise, seeing first fruits of earlier foresight.",
    "meaningReversed": "Return on investment delayed, thwarted travel, feeling stranded, setbacks to visionary plans.",
    "keywordsUpright": [
      "Expansion",
      "Foresight",
      "Overseas Enterprise",
      "Progress"
    ],
    "keywordsReversed": [
      "Delays",
      "Frustration",
      "Bottlenecks",
      "Unrealized Vision"
    ]
  },
  {
    "id": "wands_4",
    "num": 4,
    "name": "Four of Wands",
    "number": "IV",
    "rank": "4",
    "rankLabel": "Four",
    "arcana": "minor",
    "suit": "wands",
    "suitName": "Wands",
    "element": "Fire",
    "esotericTitle": "Lord of Perfected Work",
    "meaningUpright": "Homecoming, joyous wedding or milestone festival, sanctified hearth, harmonious foundations.",
    "meaningReversed": "Transient instability, canceled family reunions, feeling unwelcome, tension beneath celebrations.",
    "keywordsUpright": [
      "Homecoming",
      "Celebration",
      "Community Sanctity",
      "Harmony"
    ],
    "keywordsReversed": [
      "Transient Instability",
      "Family Tension",
      "Delayed Return",
      "Insecurity"
    ]
  },
  {
    "id": "wands_5",
    "num": 5,
    "name": "Five of Wands",
    "number": "V",
    "rank": "5",
    "rankLabel": "Five",
    "arcana": "minor",
    "suit": "wands",
    "suitName": "Wands",
    "element": "Fire",
    "esotericTitle": "Lord of Strife",
    "meaningUpright": "Spirited competition, sparring match of egos, divergent opinions, friction stimulating growth.",
    "meaningReversed": "Escalating hostility, fatigue from constant bickering, finding common ground or avoiding petty fights.",
    "keywordsUpright": [
      "Competition",
      "Sparring",
      "Creative Friction",
      "Ego Clash"
    ],
    "keywordsReversed": [
      "Petty Bickering",
      "Exhaustion",
      "Conflict Avoidance",
      "Reaching Accord"
    ]
  },
  {
    "id": "wands_6",
    "num": 6,
    "name": "Six of Wands",
    "number": "VI",
    "rank": "6",
    "rankLabel": "Six",
    "arcana": "minor",
    "suit": "wands",
    "suitName": "Wands",
    "element": "Fire",
    "esotericTitle": "Lord of Victory",
    "meaningUpright": "Triumphant procession, laurel wreath of public acclaim, recognition, pride in validated achievement.",
    "meaningReversed": "Ego arrogance, hollow applause, fall from favor, private disappointment behind public smile.",
    "keywordsUpright": [
      "Victory",
      "Public Acclaim",
      "Honor",
      "Pride & Recognition"
    ],
    "keywordsReversed": [
      "Ego Inflated",
      "Fall from Grace",
      "Hollow Praise",
      "Loss of Status"
    ]
  },
  {
    "id": "wands_7",
    "num": 7,
    "name": "Seven of Wands",
    "number": "VII",
    "rank": "7",
    "rankLabel": "Seven",
    "arcana": "minor",
    "suit": "wands",
    "suitName": "Wands",
    "element": "Fire",
    "esotericTitle": "Lord of Valour",
    "meaningUpright": "Standing your ground on high ground against overwhelming odds; fierce moral resolve and courage.",
    "meaningReversed": "Exhausted defensiveness, paranoia, giving up vantage point, succumbing to collective peer pressure.",
    "keywordsUpright": [
      "Moral Fortitude",
      "Defending Position",
      "High Ground",
      "Courage Under Fire"
    ],
    "keywordsReversed": [
      "Overwhelmed",
      "Exhaustion",
      "Giving In",
      "Paranoid Guard"
    ]
  },
  {
    "id": "wands_8",
    "num": 8,
    "name": "Eight of Wands",
    "number": "VIII",
    "rank": "8",
    "rankLabel": "Eight",
    "arcana": "minor",
    "suit": "wands",
    "suitName": "Wands",
    "element": "Fire",
    "esotericTitle": "Lord of Swiftness",
    "meaningUpright": "Eight flying arrows slicing through the sky; rapid progress, swift communications, sudden momentum.",
    "meaningReversed": "Chaotic delay, scrambled messages, haste resulting in mistakes, stalled flight, panic.",
    "keywordsUpright": [
      "Rapid Momentum",
      "Swift Messages",
      "Sudden Progress",
      "Aligned Action"
    ],
    "keywordsReversed": [
      "Delays",
      "Chaotic Haste",
      "Miscommunicated News",
      "Frustrated Velocity"
    ]
  },
  {
    "id": "wands_9",
    "num": 9,
    "name": "Nine of Wands",
    "number": "IX",
    "rank": "9",
    "rankLabel": "Nine",
    "arcana": "minor",
    "suit": "wands",
    "suitName": "Wands",
    "element": "Fire",
    "esotericTitle": "Lord of Great Strength",
    "meaningUpright": "Bandaged warrior leaning on protective staff; bruised but resilient, guarding final line of defense.",
    "meaningReversed": "Paranoid hypervigilance, defensive exhaustion, stubborn refusal to accept that danger has passed.",
    "keywordsUpright": [
      "Resilience",
      "Grit",
      "Final Stand",
      "Defensive Fortitude"
    ],
    "keywordsReversed": [
      "Exhaustion",
      "Hypervigilance",
      "Paranoia",
      "Defensive Walls Too High"
    ]
  },
  {
    "id": "wands_10",
    "num": 10,
    "name": "Ten of Wands",
    "number": "X",
    "rank": "10",
    "rankLabel": "Ten",
    "arcana": "minor",
    "suit": "wands",
    "suitName": "Wands",
    "element": "Fire",
    "esotericTitle": "Lord of Oppression",
    "meaningUpright": "Trudging up hill bearing ten heavy bundles; crushing responsibility, overburdened shoulders, near finish line.",
    "meaningReversed": "Collapsing under burden, delegating tasks, shedding unnecessary baggage, refusing martyrdom.",
    "keywordsUpright": [
      "Heavy Burden",
      "Overcommitment",
      "Shouldering Responsibility",
      "Near the Top"
    ],
    "keywordsReversed": [
      "Delegation",
      "Collapse",
      "Dropping the Load",
      "Refusing Martyrdom"
    ]
  },
  {
    "id": "wands_page",
    "num": 11,
    "name": "Page of Wands",
    "number": "P",
    "rank": "page",
    "rankLabel": "Page",
    "arcana": "minor",
    "suit": "wands",
    "suitName": "Wands",
    "element": "Fire",
    "esotericTitle": "Princess of the Shining Flame",
    "meaningUpright": "Enthusiastic explorer holding blooming staff, bubbling with playful creative sparks and thirst for adventure.",
    "meaningReversed": "Procrastination, flighty attention span, boastful promises without follow-through, tantrums.",
    "keywordsUpright": [
      "Creative Spark",
      "Enthusiasm",
      "Curiosity",
      "Playful Adventure"
    ],
    "keywordsReversed": [
      "Flightiness",
      "Procrastination",
      "Empty Promises",
      "Impatience"
    ]
  },
  {
    "id": "wands_knight",
    "num": 12,
    "name": "Knight of Wands",
    "number": "Kn",
    "rank": "knight",
    "rankLabel": "Knight",
    "arcana": "minor",
    "suit": "wands",
    "suitName": "Wands",
    "element": "Fire",
    "esotericTitle": "Lord of the Flame and Lightning",
    "meaningUpright": "Fiery charger galloping through desert sands; fearless audacity, passionate haste, dynamic champion of causes.",
    "meaningReversed": "Reckless arrogance, volatile temper, hot-headed burnouts, impatience leaving wreckage behind.",
    "keywordsUpright": [
      "Audacity",
      "Fiery Passion",
      "Chivalric Charge",
      "High Energy"
    ],
    "keywordsReversed": [
      "Reckless Haste",
      "Hot-Headed Aggression",
      "Impulsiveness",
      "Burnout"
    ]
  },
  {
    "id": "wands_queen",
    "num": 13,
    "name": "Queen of Wands",
    "number": "Q",
    "rank": "queen",
    "rankLabel": "Queen",
    "arcana": "minor",
    "suit": "wands",
    "suitName": "Wands",
    "element": "Fire",
    "esotericTitle": "Queen of the Thrones of Flame",
    "meaningUpright": "Radiant sovereign with black cat at feet, holding sunflower and wand; magnetic charisma, infectious warmth, self-assurance.",
    "meaningReversed": "Jealous fury, domineering drama, demanding constant spotlight, manipulative insecurity.",
    "keywordsUpright": [
      "Magnetic Charisma",
      "Fierce Warmth",
      "Confidence",
      "Radiant Leadership"
    ],
    "keywordsReversed": [
      "Jealousy",
      "Domineering Drama",
      "Insecurity",
      "Demanding Centerstage"
    ]
  },
  {
    "id": "wands_king",
    "num": 14,
    "name": "King of Wands",
    "number": "K",
    "rank": "king",
    "rankLabel": "King",
    "arcana": "minor",
    "suit": "wands",
    "suitName": "Wands",
    "element": "Fire",
    "esotericTitle": "Lord of the Flame and Lightning",
    "meaningUpright": "Visionary leader enthroned with lion and salamander motifs; inspirational visionary, bold trailblazer, entrepreneurial authority.",
    "meaningReversed": "Dictatorial entitlement, ruthless impatience, overbearing arrogance, setting impossible expectations for others.",
    "keywordsUpright": [
      "Visionary Leader",
      "Trailblazer",
      "Inspirational Authority",
      "Bold Courage"
    ],
    "keywordsReversed": [
      "Dictatorial Ego",
      "Unrealistic Expectations",
      "Ruthless Temper",
      "Overbearing Control"
    ]
  },
  {
    "id": "cups_ace",
    "num": 1,
    "name": "Ace of Cups",
    "number": "A",
    "rank": "ace",
    "rankLabel": "Ace",
    "arcana": "minor",
    "suit": "cups",
    "suitName": "Cups",
    "element": "Water",
    "esotericTitle": "Root of the Powers of Water",
    "meaningUpright": "An overflowing fountain of pure emotion, intuitive opening, unconditional love, and spiritual communion.",
    "meaningReversed": "Emotional suppression, feeling drained, creative drought, or blocked romantic receptivity.",
    "keywordsUpright": [
      "Love",
      "Compassion",
      "Emotional Awakening",
      "Spiritual Flow"
    ],
    "keywordsReversed": [
      "Emotional Drain",
      "Blocked Feelings",
      "Vulnerability Fear",
      "Heartache"
    ]
  },
  {
    "id": "cups_2",
    "num": 2,
    "name": "Two of Cups",
    "number": "II",
    "rank": "2",
    "rankLabel": "Two",
    "arcana": "minor",
    "suit": "cups",
    "suitName": "Cups",
    "element": "Water",
    "esotericTitle": "Lord of Love",
    "meaningUpright": "Mutual attraction, soul connection, balanced partnership, and heartfelt mutual respect.",
    "meaningReversed": "Imbalance in giving, communication breakdown, codependency, or fractured rapport.",
    "keywordsUpright": [
      "Partnership",
      "Mutual Respect",
      "Harmony",
      "Soul Connection"
    ],
    "keywordsReversed": [
      "Misalignment",
      "Broken Trust",
      "Codependency",
      "Disconnection"
    ]
  },
  {
    "id": "cups_3",
    "num": 3,
    "name": "Three of Cups",
    "number": "III",
    "rank": "3",
    "rankLabel": "Three",
    "arcana": "minor",
    "suit": "cups",
    "suitName": "Cups",
    "element": "Water",
    "esotericTitle": "Lord of Abundance",
    "meaningUpright": "Joyful celebration with soul community, toasts of gratitude, sisterhood/brotherhood, shared festive delight.",
    "meaningReversed": "Gossip, excluded feelings, hedonistic over-indulgence, party burnout, or superficial camaraderie.",
    "keywordsUpright": [
      "Celebration",
      "Community",
      "Friendship",
      "Gathering Joy"
    ],
    "keywordsReversed": [
      "Overindulgence",
      "Gossip",
      "Isolation",
      "Superficial Friends"
    ]
  },
  {
    "id": "cups_4",
    "num": 4,
    "name": "Four of Cups",
    "number": "IV",
    "rank": "4",
    "rankLabel": "Four",
    "arcana": "minor",
    "suit": "cups",
    "suitName": "Cups",
    "element": "Water",
    "esotericTitle": "Lord of Blended Pleasure",
    "meaningUpright": "Apathy, contemplation, arms crossed under the tree ignoring the golden cup offered by unseen hands.",
    "meaningReversed": "Snapping out of melancholy, renewed enthusiasm, noticing missed opportunities, gratitude return.",
    "keywordsUpright": [
      "Apathy",
      "Contemplation",
      "Introspection",
      "Discontent"
    ],
    "keywordsReversed": [
      "Renewed Interest",
      "Seizing Opportunity",
      "Awakening from Slump",
      "Gratitude"
    ]
  },
  {
    "id": "cups_5",
    "num": 5,
    "name": "Five of Cups",
    "number": "V",
    "rank": "5",
    "rankLabel": "Five",
    "arcana": "minor",
    "suit": "cups",
    "suitName": "Cups",
    "element": "Water",
    "esotericTitle": "Lord of Loss in Pleasure",
    "meaningUpright": "Mourning three spilled cups in a dark cloak, blinded to the two full cups standing upright behind you.",
    "meaningReversed": "Turning around to see what remains, emotional recovery, forgiveness, letting go of unchangeable past.",
    "keywordsUpright": [
      "Grief & Regret",
      "Mourning Loss",
      "Spilled Dreams",
      "Focus on Loss"
    ],
    "keywordsReversed": [
      "Acceptance",
      "Emotional Recovery",
      "Seeing Hope",
      "Gratitude for What Remains"
    ]
  },
  {
    "id": "cups_6",
    "num": 6,
    "name": "Six of Cups",
    "number": "VI",
    "rank": "6",
    "rankLabel": "Six",
    "arcana": "minor",
    "suit": "cups",
    "suitName": "Cups",
    "element": "Water",
    "esotericTitle": "Lord of Pleasure",
    "meaningUpright": "Nostalgic sweetness, childhood memories, innocent generosity, meeting old soul kin from years past.",
    "meaningReversed": "Clinging to rose-tinted childhood, living in the past, refusing to mature into adult autonomy.",
    "keywordsUpright": [
      "Nostalgia",
      "Sweet Memories",
      "Childlike Joy",
      "Innocent Giving"
    ],
    "keywordsReversed": [
      "Stuck in the Past",
      "Immaturity",
      "Rose-Tinted Delusion",
      "Moving On"
    ]
  },
  {
    "id": "cups_7",
    "num": 7,
    "name": "Seven of Cups",
    "number": "VII",
    "rank": "7",
    "rankLabel": "Seven",
    "arcana": "minor",
    "suit": "cups",
    "suitName": "Cups",
    "element": "Water",
    "esotericTitle": "Lord of Illusionary Success",
    "meaningUpright": "Floating castles in the clouds, glittering daydreams, temptation of alluring possibilities requiring discernment.",
    "meaningReversed": "Shattered illusions, cutting through fantasy, making concrete choices, grounding desires in reality.",
    "keywordsUpright": [
      "Daydreams",
      "Multiple Choices",
      "Fantasy & Allure",
      "Wishful Thinking"
    ],
    "keywordsReversed": [
      "Clarity of Choice",
      "Shattered Illusions",
      "Grounded Reality",
      "Decisive Action"
    ]
  },
  {
    "id": "cups_8",
    "num": 8,
    "name": "Eight of Cups",
    "number": "VIII",
    "rank": "8",
    "rankLabel": "Eight",
    "arcana": "minor",
    "suit": "cups",
    "suitName": "Cups",
    "element": "Water",
    "esotericTitle": "Lord of Abandoned Success",
    "meaningUpright": "Turning back on eight stacked chalices to climb the rocky path into mountains; walking away from what no longer feeds the soul.",
    "meaningReversed": "Fear of departure, clinging to hollow security, endlessly returning to unfulfilling situations.",
    "keywordsUpright": [
      "Walking Away",
      "Deeper Meaning",
      "Spiritual Pilgrimage",
      "Soul Quest"
    ],
    "keywordsReversed": [
      "Fear of Leaving",
      "Aimless Wandering",
      "Clinging to Hollow Comfort",
      "Avoidance"
    ]
  },
  {
    "id": "cups_9",
    "num": 9,
    "name": "Nine of Cups",
    "number": "IX",
    "rank": "9",
    "rankLabel": "Nine",
    "arcana": "minor",
    "suit": "cups",
    "suitName": "Cups",
    "element": "Water",
    "esotericTitle": "Lord of Material Happiness",
    "meaningUpright": "The 'Wish Card'; hearty contentment, smug satisfaction, banquet of personal emotional and sensory fulfillment.",
    "meaningReversed": "Smug complacency, shallow materialism, over-indulgence leaving an internal spiritual void.",
    "keywordsUpright": [
      "Wishes Fulfilled",
      "Satisfaction",
      "Emotional Contentment",
      "Pleasure"
    ],
    "keywordsReversed": [
      "Smugness",
      "Greed",
      "Superficial Comfort",
      "Underlying Emptiness"
    ]
  },
  {
    "id": "cups_10",
    "num": 10,
    "name": "Ten of Cups",
    "number": "X",
    "rank": "10",
    "rankLabel": "Ten",
    "arcana": "minor",
    "suit": "cups",
    "suitName": "Cups",
    "element": "Water",
    "esotericTitle": "Lord of Perfected Success",
    "meaningUpright": "Rainbow of ten chalices overarching happy family and verdant home; lasting emotional bliss, idyllic communal love.",
    "meaningReversed": "Domestic friction, shattered family ideals, unrealistic fantasy of perfection, emotional alienation.",
    "keywordsUpright": [
      "Lasting Bliss",
      "Family Harmony",
      "Communal Love",
      "Rainbow of Fulfillment"
    ],
    "keywordsReversed": [
      "Domestic Discord",
      "Shattered Ideal",
      "Alienation",
      "False Harmony"
    ]
  },
  {
    "id": "cups_page",
    "num": 11,
    "name": "Page of Cups",
    "number": "P",
    "rank": "page",
    "rankLabel": "Page",
    "arcana": "minor",
    "suit": "cups",
    "suitName": "Cups",
    "element": "Water",
    "esotericTitle": "Princess of the Waters",
    "meaningUpright": "Dreamy youth gazing tenderly at a whimsical fish peering out of the cup; poetic intuition and tender emotion.",
    "meaningReversed": "Emotional immaturity, drama, moodiness, escapism into childish fantasies, hypersensitivity.",
    "keywordsUpright": [
      "Intuitive Messenger",
      "Poetic Dreamer",
      "Tender Heart",
      "Whimsical Surprise"
    ],
    "keywordsReversed": [
      "Emotional Fragility",
      "Mood Swings",
      "Escapist Fantasies",
      "Childish Drama"
    ]
  },
  {
    "id": "cups_knight",
    "num": 12,
    "name": "Knight of Cups",
    "number": "Kn",
    "rank": "knight",
    "rankLabel": "Knight",
    "arcana": "minor",
    "suit": "cups",
    "suitName": "Cups",
    "element": "Water",
    "esotericTitle": "Lord of the Waves and Waters",
    "meaningUpright": "Romantic knight riding silver horse across quiet creek, offering golden cup with heartfelt courtly devotion.",
    "meaningReversed": "Fickle romanticism, manipulative charm, unrealistic prince charming illusions, mood-driven unreliability.",
    "keywordsUpright": [
      "Romantic Chivalry",
      "Heartfelt Quest",
      "Poetic Vision",
      "Diplomacy"
    ],
    "keywordsReversed": [
      "Fickle Heart",
      "Manipulative Charm",
      "Disappointment",
      "Passive Aggression"
    ]
  },
  {
    "id": "cups_queen",
    "num": 13,
    "name": "Queen of Cups",
    "number": "Q",
    "rank": "queen",
    "rankLabel": "Queen",
    "arcana": "minor",
    "suit": "cups",
    "suitName": "Cups",
    "element": "Water",
    "esotericTitle": "Queen of the Thrones of Water",
    "meaningUpright": "Empathetic mystic queen contemplating ornate closed cup on ocean shore; psychic depths, compassionate listening, emotional serenity.",
    "meaningReversed": "Codependent absorption, emotional manipulation, victim playing, drowned in psychic distress.",
    "keywordsUpright": [
      "Empathy",
      "Psychic Depth",
      "Unconditional Compassion",
      "Emotional Wisdom"
    ],
    "keywordsReversed": [
      "Codependency",
      "Emotional Manipulation",
      "Martyr Complex",
      "Overwhelmed by Feelings"
    ]
  },
  {
    "id": "cups_king",
    "num": 14,
    "name": "King of Cups",
    "number": "K",
    "rank": "king",
    "rankLabel": "King",
    "arcana": "minor",
    "suit": "cups",
    "suitName": "Cups",
    "element": "Water",
    "esotericTitle": "Prince of the Chariot of the Waters",
    "meaningUpright": "Master of emotional seas seated on throne floating upon rolling waves; serene calm amidst turbulent tempests, compassionate wisdom.",
    "meaningReversed": "Suppressed rage, passive-aggressive mood swings, cold emotional withdrawal, manipulative deceit.",
    "keywordsUpright": [
      "Emotional Mastery",
      "Compassionate Sovereign",
      "Calm in the Storm",
      "Wisdom"
    ],
    "keywordsReversed": [
      "Emotional Volatility",
      "Cold Withdrawal",
      "Passive Aggression",
      "Deceit"
    ]
  },
  {
    "id": "swords_ace",
    "num": 1,
    "name": "Ace of Swords",
    "number": "A",
    "rank": "ace",
    "rankLabel": "Ace",
    "arcana": "minor",
    "suit": "swords",
    "suitName": "Swords",
    "element": "Air",
    "esotericTitle": "Root of the Powers of Air",
    "meaningUpright": "A breakthrough of sharp mental clarity, piercing truth, triumph of intellect over confusion.",
    "meaningReversed": "Clouded perception, cruelty disguised as honesty, misinformation, or analysis paralysis.",
    "keywordsUpright": [
      "Mental Clarity",
      "Piercing Truth",
      "Breakthrough",
      "Justice"
    ],
    "keywordsReversed": [
      "Confusion",
      "Hostility",
      "Miscommunication",
      "Brutal Judgment"
    ]
  },
  {
    "id": "swords_2",
    "num": 2,
    "name": "Two of Swords",
    "number": "II",
    "rank": "2",
    "rankLabel": "Two",
    "arcana": "minor",
    "suit": "swords",
    "suitName": "Swords",
    "element": "Air",
    "esotericTitle": "Lord of Peace Restored",
    "meaningUpright": "A delicate stalemate, blindfolded weighing of difficult choices, needing internal stillness to decide.",
    "meaningReversed": "Information overload, agonizing avoidance of decision, truth forcing its way through denial.",
    "keywordsUpright": [
      "Stalemate",
      "Difficult Choice",
      "Truce",
      "Quiet Deliberation"
    ],
    "keywordsReversed": [
      "Avoidance",
      "Overload",
      "False Truce",
      "Indecision Exposed"
    ]
  },
  {
    "id": "swords_3",
    "num": 3,
    "name": "Three of Swords",
    "number": "III",
    "rank": "3",
    "rankLabel": "Three",
    "arcana": "minor",
    "suit": "swords",
    "suitName": "Swords",
    "element": "Air",
    "esotericTitle": "Lord of Sorrow",
    "meaningUpright": "Piercing heartbreak, sorrowful revelations, necessary surgical grief that clears festering pain.",
    "meaningReversed": "Releasing deep grief, healing from betrayal, moving beyond historical wounds, forgiveness.",
    "keywordsUpright": [
      "Heartbreak",
      "Grief",
      "Sorrowful Truth",
      "Emotional Release"
    ],
    "keywordsReversed": [
      "Healing Heart",
      "Forgiveness",
      "Moving Beyond Grief",
      "Reconciliation"
    ]
  },
  {
    "id": "swords_4",
    "num": 4,
    "name": "Four of Swords",
    "number": "IV",
    "rank": "4",
    "rankLabel": "Four",
    "arcana": "minor",
    "suit": "swords",
    "suitName": "Swords",
    "element": "Air",
    "esotericTitle": "Lord of Rest from Strife",
    "meaningUpright": "Sacred sanctuary, voluntary retreat, peaceful mental recuperation, laying down weapons to heal.",
    "meaningReversed": "Burnout forced by refusal to rest, awakening from recuperation, returning to battlefield too early.",
    "keywordsUpright": [
      "Rest",
      "Sanctuary",
      "Recuperation",
      "Peaceful Contemplation"
    ],
    "keywordsReversed": [
      "Burnout",
      "Restlessness",
      "Forced Exile",
      "Premature Return"
    ]
  },
  {
    "id": "swords_5",
    "num": 5,
    "name": "Five of Swords",
    "number": "V",
    "rank": "5",
    "rankLabel": "Five",
    "arcana": "minor",
    "suit": "swords",
    "suitName": "Swords",
    "element": "Air",
    "esotericTitle": "Lord of Defeat",
    "meaningUpright": "Pyrrhic victory; hollow win attained through cutthroat tactics, leaving allies defeated and bitter.",
    "meaningReversed": "Laying down bitter vendettas, walking away from toxic arguments, reconciling past humiliation.",
    "keywordsUpright": [
      "Pyrrhic Victory",
      "Cutthroat Ego",
      "Hollow Triumph",
      "Hostility"
    ],
    "keywordsReversed": [
      "Forgiveness",
      "Walking Away",
      "Healing Resentment",
      "Remorse"
    ]
  },
  {
    "id": "swords_6",
    "num": 6,
    "name": "Six of Swords",
    "number": "VI",
    "rank": "6",
    "rankLabel": "Six",
    "arcana": "minor",
    "suit": "swords",
    "suitName": "Swords",
    "element": "Air",
    "esotericTitle": "Lord of Earned Success",
    "meaningUpright": "Ferried across choppy waters toward tranquil shores; smooth passage, leaving turbulence behind.",
    "meaningReversed": "Baggage dragging down the boat, running back into storm, inability to leave old dysfunction behind.",
    "keywordsUpright": [
      "Transition",
      "Tranquil Shores",
      "Mental Relief",
      "Leaving Strife Behind"
    ],
    "keywordsReversed": [
      "Emotional Baggage",
      "Relapsing into Turmoil",
      "Delayed Journey",
      "Resistance to Moving"
    ]
  },
  {
    "id": "swords_7",
    "num": 7,
    "name": "Seven of Swords",
    "number": "VII",
    "rank": "7",
    "rankLabel": "Seven",
    "arcana": "minor",
    "suit": "swords",
    "suitName": "Swords",
    "element": "Air",
    "esotericTitle": "Lord of Unstable Effort",
    "meaningUpright": "Stealth, clever strategy, sneaking away with the swords, solo tactics, keeping cards close to chest.",
    "meaningReversed": "Caught in deception, confession, conscience asserting itself, coming clean, ineffective covert plots.",
    "keywordsUpright": [
      "Stealth",
      "Strategy",
      "Tactical Cunning",
      "Discretion"
    ],
    "keywordsReversed": [
      "Caught Out",
      "Deception Exposed",
      "Conscience Awakening",
      "Confession"
    ]
  },
  {
    "id": "swords_8",
    "num": 8,
    "name": "Eight of Swords",
    "number": "VIII",
    "rank": "8",
    "rankLabel": "Eight",
    "arcana": "minor",
    "suit": "swords",
    "suitName": "Swords",
    "element": "Air",
    "esotericTitle": "Lord of Shortened Force",
    "meaningUpright": "Blindfolded and loosely bound by swords planted in mud; mental entrapment, victim mentality, self-imposed prison.",
    "meaningReversed": "Removing the blindfold, recognizing freedom was always accessible, stepping out of limiting beliefs.",
    "keywordsUpright": [
      "Self-Imposed Trap",
      "Limiting Beliefs",
      "Mental Cage",
      "Victim Stance"
    ],
    "keywordsReversed": [
      "Liberation",
      "Removed Blindfold",
      "Newfound Freedom",
      "Overcoming Helplessness"
    ]
  },
  {
    "id": "swords_9",
    "num": 9,
    "name": "Nine of Swords",
    "number": "IX",
    "rank": "9",
    "rankLabel": "Nine",
    "arcana": "minor",
    "suit": "swords",
    "suitName": "Swords",
    "element": "Air",
    "esotericTitle": "Lord of Despair and Cruelty",
    "meaningUpright": "Waking up in midnight darkness with hands clutching face; nocturnal anxiety, nightmare loops, catastrophic thoughts.",
    "meaningReversed": "Morning dawn breaking over nightmares, learning to quiet racing mind, seeking comfort and therapeutic clarity.",
    "keywordsUpright": [
      "Nighttime Anguish",
      "Anxiety Spirals",
      "Catastrophizing",
      "Guilt & Dread"
    ],
    "keywordsReversed": [
      "Relief at Dawn",
      "Coping with Anxiety",
      "Finding Solace",
      "Releasing Catastrophic Fears"
    ]
  },
  {
    "id": "swords_10",
    "num": 10,
    "name": "Ten of Swords",
    "number": "X",
    "rank": "10",
    "rankLabel": "Ten",
    "arcana": "minor",
    "suit": "swords",
    "suitName": "Swords",
    "element": "Air",
    "esotericTitle": "Lord of Ruin",
    "meaningUpright": "Figure lying face-down pierced by ten swords as dawn breaks on the distant horizon; rock bottom, complete ending, nowhere to go but up.",
    "meaningReversed": "Surviving the worst, beginning of recovery from trauma, rising from ashes, lingering victim wounds.",
    "keywordsUpright": [
      "Rock Bottom",
      "Absolute Ending",
      "Inevitable Dawn",
      "Betrayal Over"
    ],
    "keywordsReversed": [
      "Rising from Ashes",
      "Recovery from Trauma",
      "Worst is Over",
      "Regaining Life"
    ]
  },
  {
    "id": "swords_page",
    "num": 11,
    "name": "Page of Swords",
    "number": "P",
    "rank": "page",
    "rankLabel": "Page",
    "arcana": "minor",
    "suit": "swords",
    "suitName": "Swords",
    "element": "Air",
    "esotericTitle": "Princess of the Rushing Winds",
    "meaningUpright": "Agile youth standing on craggy knoll with sword raised, sharp wind blowing, vigilant and hungry for truth.",
    "meaningReversed": "Spiteful gossip, petty paranoia, abrasive communication, weaponizing secret information.",
    "keywordsUpright": [
      "Curiosity for Truth",
      "Mental Agility",
      "Vigilance",
      "Inquisitive Mind"
    ],
    "keywordsReversed": [
      "Malicious Gossip",
      "Defensiveness",
      "Petty Bickering",
      "Abrasive Words"
    ]
  },
  {
    "id": "swords_knight",
    "num": 12,
    "name": "Knight of Swords",
    "number": "Kn",
    "rank": "knight",
    "rankLabel": "Knight",
    "arcana": "minor",
    "suit": "swords",
    "suitName": "Swords",
    "element": "Air",
    "esotericTitle": "Lord of the Wind and Breezes",
    "meaningUpright": "Furious knight charging headlong through gale-force winds with drawn broadsword; lightning intellect and relentless drive.",
    "meaningReversed": "Sarcastic ruthlessness, bulldozing feelings, charging into battle without strategy, intellectual tyranny.",
    "keywordsUpright": [
      "Direct Action",
      "Fast-Paced Intellect",
      "Fearless Drive",
      "Sharp Truth"
    ],
    "keywordsReversed": [
      "Ruthless Tactlessness",
      "Bulldozing",
      "Reckless Arguments",
      "Impulsive Strike"
    ]
  },
  {
    "id": "swords_queen",
    "num": 13,
    "name": "Queen of Swords",
    "number": "Q",
    "rank": "queen",
    "rankLabel": "Queen",
    "arcana": "minor",
    "suit": "swords",
    "suitName": "Swords",
    "element": "Air",
    "esotericTitle": "Queen of the Thrones of Air",
    "meaningUpright": "Sharp-eyed queen holding upright blade with outstretched hand amidst clearing clouds; piercing intellect, boundaries, unbiased truth.",
    "meaningReversed": "Ice-cold bitterness, unforgiving vindictiveness, caustic tongue, emotional fortress of loneliness.",
    "keywordsUpright": [
      "Unbiased Truth",
      "Clear Boundaries",
      "Sovereign Intellect",
      "Direct Insight"
    ],
    "keywordsReversed": [
      "Cold Bitterness",
      "Cruel Sarcasm",
      "Vindictiveness",
      "Unforgiving Isolation"
    ]
  },
  {
    "id": "swords_king",
    "num": 14,
    "name": "King of Swords",
    "number": "K",
    "rank": "king",
    "rankLabel": "King",
    "arcana": "minor",
    "suit": "swords",
    "suitName": "Swords",
    "element": "Air",
    "esotericTitle": "Prince of the Chariot of the Winds",
    "meaningUpright": "Judicial sovereign with upright gleaming blade; supreme intellectual mastery, ethical truth, disciplined logic.",
    "meaningReversed": "Tyrannical intellect, weaponized cruelty, rigid cynicism, dogmatic authoritarianism devoid of heart.",
    "keywordsUpright": [
      "Supreme Intellect",
      "Ethical Authority",
      "Impartial Truth",
      "Strategic Mastery"
    ],
    "keywordsReversed": [
      "Weaponized Cruelty",
      "Intellectual Tyranny",
      "Rigid Dogma",
      "Callous Coldness"
    ]
  },
  {
    "id": "pentacles_ace",
    "num": 1,
    "name": "Ace of Pentacles",
    "number": "A",
    "rank": "ace",
    "rankLabel": "Ace",
    "arcana": "minor",
    "suit": "pentacles",
    "suitName": "Pentacles",
    "element": "Earth",
    "esotericTitle": "Root of the Powers of Earth",
    "meaningUpright": "A tangible seed of material opportunity, financial prosperity, career prospect, or bodily vitality.",
    "meaningReversed": "Missed financial opportunity, poor foundation, greed, or delay in material results.",
    "keywordsUpright": [
      "Opportunity",
      "Prosperity",
      "New Foundation",
      "Tangible Wealth"
    ],
    "keywordsReversed": [
      "Lost Opportunity",
      "Financial Instability",
      "Poor Planning",
      "Scarcity Mindset"
    ]
  },
  {
    "id": "pentacles_2",
    "num": 2,
    "name": "Two of Pentacles",
    "number": "II",
    "rank": "2",
    "rankLabel": "Two",
    "arcana": "minor",
    "suit": "pentacles",
    "suitName": "Pentacles",
    "element": "Earth",
    "esotericTitle": "Lord of Harmonious Change",
    "meaningUpright": "Masterful juggling of dual priorities, financial fluidity, adaptability amidst shifting tides.",
    "meaningReversed": "Dropping plates, overwhelming financial juggling, overextension, and impending chaotic collapse.",
    "keywordsUpright": [
      "Adaptability",
      "Balance",
      "Resourcefulness",
      "Flexibility"
    ],
    "keywordsReversed": [
      "Overwhelmed",
      "Disorganization",
      "Financial Stress",
      "Dropped Balls"
    ]
  },
  {
    "id": "pentacles_3",
    "num": 3,
    "name": "Three of Pentacles",
    "number": "III",
    "rank": "3",
    "rankLabel": "Three",
    "arcana": "minor",
    "suit": "pentacles",
    "suitName": "Pentacles",
    "element": "Earth",
    "esotericTitle": "Lord of Material Works",
    "meaningUpright": "Master craftsmanship, collaborative teamwork, meticulous dedication, elevated artistic reputation.",
    "meaningReversed": "Poor workmanship, friction among colleagues, lack of discipline, apathy in tradecraft.",
    "keywordsUpright": [
      "Craftsmanship",
      "Collaboration",
      "Mastery",
      "Appreciation"
    ],
    "keywordsReversed": [
      "Friction",
      "Shoddy Work",
      "Disregard for Quality",
      "Lack of Skill"
    ]
  },
  {
    "id": "pentacles_4",
    "num": 4,
    "name": "Four of Pentacles",
    "number": "IV",
    "rank": "4",
    "rankLabel": "Four",
    "arcana": "minor",
    "suit": "pentacles",
    "suitName": "Pentacles",
    "element": "Earth",
    "esotericTitle": "Lord of Earthly Power",
    "meaningUpright": "Preservation of wealth, tight security, cautious fiscal boundaries, safeguarding hard-won capital.",
    "meaningReversed": "Miserliness, greedy hoarding, fear-based scarcity hoarding, financial paranoia restricting life flow.",
    "keywordsUpright": [
      "Security",
      "Preservation",
      "Financial Boundaries",
      "Frugality"
    ],
    "keywordsReversed": [
      "Greed",
      "Miserliness",
      "Scarcity Trap",
      "Material Obsession"
    ]
  },
  {
    "id": "pentacles_5",
    "num": 5,
    "name": "Five of Pentacles",
    "number": "V",
    "rank": "5",
    "rankLabel": "Five",
    "arcana": "minor",
    "suit": "pentacles",
    "suitName": "Pentacles",
    "element": "Earth",
    "esotericTitle": "Lord of Material Trouble",
    "meaningUpright": "Trudging in snow past illuminated stained-glass sanctuary; temporary hardship, feeling left out in cold.",
    "meaningReversed": "Recovery from financial crisis, finding shelter, asking for support, warmth returning after hardship.",
    "keywordsUpright": [
      "Hardship",
      "Isolation",
      "Financial Strain",
      "Feeling Left Out"
    ],
    "keywordsReversed": [
      "Shelter Found",
      "Financial Recovery",
      "Rebuilding Security",
      "Accepting Help"
    ]
  },
  {
    "id": "pentacles_6",
    "num": 6,
    "name": "Six of Pentacles",
    "number": "VI",
    "rank": "6",
    "rankLabel": "Six",
    "arcana": "minor",
    "suit": "pentacles",
    "suitName": "Pentacles",
    "element": "Earth",
    "esotericTitle": "Lord of Material Success",
    "meaningUpright": "Generous patronage, fair distribution of resources, balanced scales of giving and gracious receiving.",
    "meaningReversed": "Strings attached to charity, condescending philanthropy, abuse of debtor-creditor leverage.",
    "keywordsUpright": [
      "Generosity",
      "Charity",
      "Fair Balance",
      "Patronage"
    ],
    "keywordsReversed": [
      "Strings Attached",
      "Power Dynamic Abuse",
      "Inequity",
      "Debtor Guilt"
    ]
  },
  {
    "id": "pentacles_7",
    "num": 7,
    "name": "Seven of Pentacles",
    "number": "VII",
    "rank": "7",
    "rankLabel": "Seven",
    "arcana": "minor",
    "suit": "pentacles",
    "suitName": "Pentacles",
    "element": "Earth",
    "esotericTitle": "Lord of Success Unfulfilled",
    "meaningUpright": "Leaning on hoe contemplating harvest vines; patience, long-term assessment, waiting for seeds to ripen.",
    "meaningReversed": "Impatience, abandoned investments, disillusionment with rate of return, wasted effort.",
    "keywordsUpright": [
      "Patience",
      "Harvest Assessment",
      "Long-term Investment",
      "Perseverance"
    ],
    "keywordsReversed": [
      "Impatience",
      "Wasted Labor",
      "Premature Abandonment",
      "Disappointment"
    ]
  },
  {
    "id": "pentacles_8",
    "num": 8,
    "name": "Eight of Pentacles",
    "number": "VIII",
    "rank": "8",
    "rankLabel": "Eight",
    "arcana": "minor",
    "suit": "pentacles",
    "suitName": "Pentacles",
    "element": "Earth",
    "esotericTitle": "Lord of Prudence",
    "meaningUpright": "Dedicated apprentice diligently hammering coin after coin; dedication to craft, repetitive mastery, pride in work.",
    "meaningReversed": "Perfectionism, tedious burnout, cutting corners, lack of passion for repetitive chores.",
    "keywordsUpright": [
      "Apprenticeship",
      "Mastery of Craft",
      "Dedication",
      "Diligence"
    ],
    "keywordsReversed": [
      "Perfectionism",
      "Tedious Burnout",
      "Shoddy Craft",
      "Uninspired Drudgery"
    ]
  },
  {
    "id": "pentacles_9",
    "num": 9,
    "name": "Nine of Pentacles",
    "number": "IX",
    "rank": "9",
    "rankLabel": "Nine",
    "arcana": "minor",
    "suit": "pentacles",
    "suitName": "Pentacles",
    "element": "Earth",
    "esotericTitle": "Lord of Material Gain",
    "meaningUpright": "Graceful lady in lush vineyard with hooded falcon; dignified self-reliance, refined luxury, enjoying fruits of labor.",
    "meaningReversed": "Superficial display, gilded cage, isolation behind wealth, feeling dependent on someone else's resources.",
    "keywordsUpright": [
      "Self-Reliance",
      "Refined Luxury",
      "Solitary Grace",
      "Fruitful Independence"
    ],
    "keywordsReversed": [
      "Gilded Cage",
      "Superficial Vanity",
      "Material Dependency",
      "Loneliness in Luxury"
    ]
  },
  {
    "id": "pentacles_10",
    "num": 10,
    "name": "Ten of Pentacles",
    "number": "X",
    "rank": "10",
    "rankLabel": "Ten",
    "arcana": "minor",
    "suit": "pentacles",
    "suitName": "Pentacles",
    "element": "Earth",
    "esotericTitle": "Lord of Wealth",
    "meaningUpright": "Generational patriarch surrounded by family, dogs, and ancestral estate; lasting legacy, enduring security, heritage.",
    "meaningReversed": "Family inheritance disputes, crumbling ancestral estate, conservative stagnation, financial legacy burdens.",
    "keywordsUpright": [
      "Generational Legacy",
      "Enduring Wealth",
      "Ancestral Heritage",
      "Family Prosperity"
    ],
    "keywordsReversed": [
      "Family Inheritance Feud",
      "Crumbling Heritage",
      "Legacy Burden",
      "Financial Mismanagement"
    ]
  },
  {
    "id": "pentacles_page",
    "num": 11,
    "name": "Page of Pentacles",
    "number": "P",
    "rank": "page",
    "rankLabel": "Page",
    "arcana": "minor",
    "suit": "pentacles",
    "suitName": "Pentacles",
    "element": "Earth",
    "esotericTitle": "Princess of the Echoing Hills",
    "meaningUpright": "Earnest student cradling a glowing gold coin, immersed in nature, eager to learn practical skills.",
    "meaningReversed": "Lack of focus, financial irresponsibility, neglecting studies, laziness, failure to materialize dreams.",
    "keywordsUpright": [
      "Practical Student",
      "Grounded Ambition",
      "Eagerness to Learn",
      "Fostering Seeds"
    ],
    "keywordsReversed": [
      "Lack of Progress",
      "Procrastination",
      "Financial Naivety",
      "Wasted Potential"
    ]
  },
  {
    "id": "pentacles_knight",
    "num": 12,
    "name": "Knight of Pentacles",
    "number": "Kn",
    "rank": "knight",
    "rankLabel": "Knight",
    "arcana": "minor",
    "suit": "pentacles",
    "suitName": "Pentacles",
    "element": "Earth",
    "esotericTitle": "Lord of the Wide and Fertile Land",
    "meaningUpright": "Patient knight on heavy draught horse in plowed field; unwavering reliability, methodical endurance, duty.",
    "meaningReversed": "Stubborn rigidity, obsessive workaholism, mundane tunnel-vision, resistance to necessary change.",
    "keywordsUpright": [
      "Methodical Reliability",
      "Endurance",
      "Duty & Honor",
      "Patience"
    ],
    "keywordsReversed": [
      "Stubborn Inertia",
      "Workaholism",
      "Tunnel Vision",
      "Boring Rigidity"
    ]
  },
  {
    "id": "pentacles_queen",
    "num": 13,
    "name": "Queen of Pentacles",
    "number": "Q",
    "rank": "queen",
    "rankLabel": "Queen",
    "arcana": "minor",
    "suit": "pentacles",
    "suitName": "Pentacles",
    "element": "Earth",
    "esotericTitle": "Queen of the Thrones of Earth",
    "meaningUpright": "Nurturing matriarch nestled in fertile forest with rabbit at feet; earthy abundance, hospitality, sensual groundedness.",
    "meaningReversed": "Materialistic vanity, smothering home life, neglect of internal spirit in pursuit of worldly status.",
    "keywordsUpright": [
      "Earthy Nurturance",
      "Abundant Hospitality",
      "Practical Wisdom",
      "Sanctuary"
    ],
    "keywordsReversed": [
      "Materialistic Vanity",
      "Smothering Care",
      "Status Obsession",
      "Disconnected from Earth"
    ]
  },
  {
    "id": "pentacles_king",
    "num": 14,
    "name": "King of Pentacles",
    "number": "K",
    "rank": "king",
    "rankLabel": "King",
    "arcana": "minor",
    "suit": "pentacles",
    "suitName": "Pentacles",
    "element": "Earth",
    "esotericTitle": "Lord of the Wide and Fertile Land",
    "meaningUpright": "Prosperous lord seated in grape-rich stone castle with bull heads carved in relief; enterprise mastery, steady abundance, generative security.",
    "meaningReversed": "Greedy miser, corrupt enterprise, stubborn resistance to ethical reform, valuing money over souls.",
    "keywordsUpright": [
      "Generative Abundance",
      "Business Mastery",
      "Steadfast Security",
      "Material Sovereignty"
    ],
    "keywordsReversed": [
      "Greed & Corruption",
      "Stubborn Materialism",
      "Compromised Ethics",
      "Financial Domination"
    ]
  }
];

export function getCardById(id) {
  return TAROT_DECK.find(c => c.id === id);
}

export function getCardsByArcana(arcana) {
  return TAROT_DECK.filter(c => c.arcana === arcana);
}

export function getCardsBySuit(suit) {
  return TAROT_DECK.filter(c => c.suit === suit);
}
