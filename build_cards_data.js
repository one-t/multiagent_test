// Generator script for js/cards.js containing complete data for all 78 tarot cards
const fs = require('fs');
const path = require('path');

const majorArcanaData = [
  {
    num: 0,
    roman: "0",
    name: "The Fool",
    element: "Air",
    esotericTitle: "The Spirit of Aether",
    symbols: ["Cosmic Precipice", "Golden Feather", "Solar Spiral", "White Butterfly"],
    upright: "A call to step into the unknown with pure trust and an open heart. The Fool signals beginnings that defy conventional logic, inviting you to take a daring leap of faith into infinite possibility.",
    reversed: "A warning against careless impulsiveness or, conversely, paralyzing fear that prevents you from taking a necessary step. Check your footing before you leap, but do not let caution become a cage.",
    kwUp: ["New Beginnings", "Innocence", "Leap of Faith", "Spontaneity", "Pure Potential"],
    kwRev: ["Recklessness", "Fear of the Unknown", "Naivety", "Hesitation", "Carelessness"]
  },
  {
    num: 1,
    roman: "I",
    name: "The Magician",
    element: "Air / Mercury",
    esotericTitle: "The Magus of Power",
    symbols: ["Lemniscate (Infinity)", "Ouroboros", "Four Hallows (Wand, Cup, Sword, Coin)", "Upright Athame"],
    upright: "The convergence of will and creation. As above, so below: you have all four elements and tools required to manifest your intent into material reality. Channel focused concentration.",
    reversed: "Misdirection, trickery, untapped potential, or the manipulation of creative force. Look closely at whether illusions are clouding the true intent or if your gifts are being squandered.",
    kwUp: ["Manifestation", "Willpower", "Resourcefulness", "Creation", "Focused Action"],
    kwRev: ["Manipulation", "Untapped Power", "Deception", "Scattered Focus", "Illusion"]
  },
  {
    num: 2,
    roman: "II",
    name: "The High Priestess",
    element: "Water / Moon",
    esotericTitle: "Priestess of the Silver Star",
    symbols: ["Twin Pillars of Duality (Boaz & Jachin)", "Veil of Pomegranates", "Horned Lunar Crown", "Sacred Scroll"],
    upright: "Guardian of the subconscious sanctuary. She bids you to sit in quiet contemplation, trusting your innate intuition and the silent mysteries whispered beyond the veil of physical perception.",
    reversed: "Suppressed intuition, hidden agendas, superficiality, or secrets eating away at clarity. You are ignoring your inner knowing in favor of external noise.",
    kwUp: ["Intuition", "Sacred Mystery", "Subconscious", "Divine Feminine", "Inner Knowing"],
    kwRev: ["Ignored Instinct", "Secrets", "Superficiality", "Emotional Detachment", "Hidden Motives"]
  },
  {
    num: 3,
    roman: "III",
    name: "The Empress",
    element: "Earth / Venus",
    esotericTitle: "Daughter of the Mighty Ones",
    symbols: ["Crown of Twelve Stars", "Shield of Venus", "Golden Wheat Sheaf", "Flowing River of Life"],
    upright: "Abundant harvest, sensual vitality, and motherly creation. The Empress breathes life into projects, creative endeavors, and relationships through nurturing warmth and lush fertility.",
    reversed: "Creative drought, over-dependence, smothering possessiveness, or neglect of your physical and emotional well-being. Tend to your own garden before attempting to harvest.",
    kwUp: ["Abundance", "Fertility", "Creativity", "Nurturing", "Sensual Grace"],
    kwRev: ["Creative Block", "Depletion", "Smothering", "Neglect", "Over-indulgence"]
  },
  {
    num: 4,
    roman: "IV",
    name: "The Emperor",
    element: "Fire / Aries",
    esotericTitle: "Sun of the Morning, Chief Among the Mighty",
    symbols: ["Carved Ram Stone Throne", "Orb of Dominion", "Ankh Scepter", "Granite Peaks"],
    upright: "Sovereignty, disciplined architecture, and benevolent authority. The Emperor provides the structural scaffold, boundaries, and strategic fortitude necessary for lasting order.",
    reversed: "Tyranny, rigidity, abuse of power, or conversely, a lack of self-discipline and structural chaos. Examine whether firmness has hardened into brittle stubbornness.",
    kwUp: ["Authority", "Structure", "Stability", "Discipline", "Strategic Leadership"],
    kwRev: ["Tyranny", "Rigidity", "Chaos", "Micromanagement", "Loss of Control"]
  },
  {
    num: 5,
    roman: "V",
    name: "The Hierophant",
    element: "Earth / Taurus",
    esotericTitle: "Magus of the Eternal Gods",
    symbols: ["Triple Papal Tiara", "Cross of Three Bars", "Crossed Golden Keys", "Twin Acolytes"],
    upright: "Spiritual lineage, sacred tradition, mentorship, and collective wisdom. Seeking guidance through established pathways of knowledge, structured study, and shared moral truth.",
    reversed: "Blind dogma, hollow orthodoxy, rebellious awakening, or breaking away from oppressive institutional belief systems to discover your autonomous truth.",
    kwUp: ["Tradition", "Spiritual Mentorship", "Wisdom", "Institutions", "Sacred Truth"],
    kwRev: ["Dogmatism", "Rebellion", "Unconventional Paths", "Hypocrisy", "Blind Conformity"]
  },
  {
    num: 6,
    roman: "VI",
    name: "The Lovers",
    element: "Air / Gemini",
    esotericTitle: "The Children of the Voice Divine",
    symbols: ["Winged Seraph of Grace", "Tree of Life and Tree of Knowledge", "Entwined Serpent", "Alchemical Union"],
    upright: "Profound soul alignment, sacred union, and core value decisions. Beyond romantic passion, this card mirrors the harmonious reconciliation of your own opposing internal dualities.",
    reversed: "Disharmony, misaligned values, moral compromise, or self-sabotaging conflict. A divided heart cannot walk two divergent paths at once.",
    kwUp: ["Sacred Union", "Harmony", "Values Alignment", "Deep Connection", "Choice"],
    kwRev: ["Disharmony", "Misalignment", "Moral Conflict", "Indecision", "Severed Bonds"]
  },
  {
    num: 7,
    roman: "VII",
    name: "The Chariot",
    element: "Water / Cancer",
    esotericTitle: "Child of the Powers of the Waters",
    symbols: ["Star-Spangled Canopy", "Twin Sphinxes (Light & Shadow)", "Wand of Will", "Armor of Sunlight"],
    upright: "Mastery of opposing currents through unwavering focus and willpower. Victory won through determination, self-discipline, and steering opposing impulses toward a singular triumph.",
    reversed: "Loss of direction, runaway aggression, feeling dragged off course by warring passions, or arrogance leading to a sudden crash. Reign in the steeds before continuing.",
    kwUp: ["Determination", "Willpower", "Victory", "Discipline", "Triumph Over Adversity"],
    kwRev: ["Loss of Control", "Aggression", "Obstacles", "Aimlessness", "Ego Crash"]
  },
  {
    num: 8,
    roman: "VIII",
    name: "Strength",
    element: "Fire / Leo",
    esotericTitle: "Daughter of the Flaming Sword",
    symbols: ["Gentle Hand Taming Lion", "Infinity Lemniscate", "Woven Rose Garland", "Serene Radiance"],
    upright: "Courage without cruelty; fortitude rooted in compassion and emotional endurance. Taming raw primordial instinct through gentle patience, quiet inner grace, and moral resilience.",
    reversed: "Self-doubt, explosive temper, raw vulnerability masquerading as cowardice, or being consumed by primal fear. Remember that genuine force does not shout.",
    kwUp: ["Inner Strength", "Compassion", "Patience", "Courage", "Gentle Mastery"],
    kwRev: ["Self-Doubt", "Raw Aggression", "Impatience", "Weakness of Will", "Burnout"]
  },
  {
    num: 9,
    roman: "IX",
    name: "The Hermit",
    element: "Earth / Virgo",
    esotericTitle: "Magus of the Voice of Light",
    symbols: ["Six-Pointed Star Lantern", "Pilgrim Staff of Pine", "Frozen Mountain Crag", "Cowl of Solitude"],
    upright: "Soul-searching in sacred solitude. Stepping away from societal clamor to illuminate your own path with the lantern of hard-won introspection and contemplative truth.",
    reversed: "Harmful isolation, bitter loneliness, antisocial withdrawal, or fear of looking inward. Alternatively, obstinate refusal to accept wisdom from genuine guides.",
    kwUp: ["Introspection", "Solitude", "Inner Guidance", "Spiritual Quest", "Discernment"],
    kwRev: ["Isolation", "Loneliness", "Rejection of Wisdom", "Paranoia", "Lost in the Dark"]
  },
  {
    num: 10,
    roman: "X",
    name: "Wheel of Fortune",
    element: "Fire / Jupiter",
    esotericTitle: "Lord of the Forces of Life",
    symbols: ["Cosmic Turning Wheel", "Four Living Creatures", "Sphinx of Balance", "Ascending/Descending Serpents"],
    upright: "The cyclical rotation of destiny, karmic shifts, and sudden pivots of fortune. A reminder that no condition is static: welcome the rising crest of transformation with adaptable grace.",
    reversed: "A stroke of misfortune, resistance to inevitability, feeling trapped in repeating generational or karmic cycles. Yield to the turn rather than clinging to the spokes.",
    kwUp: ["Cycles of Destiny", "Karmic Shift", "Good Fortune", "Inevitable Change", "Serendipity"],
    kwRev: ["Misfortune", "Resistance to Change", "Karmic Stagnation", "Bad Timing", "Disruption"]
  },
  {
    num: 11,
    roman: "XI",
    name: "Justice",
    element: "Air / Libra",
    esotericTitle: "Daughter of the Lords of Truth",
    symbols: ["Double-Edged Upright Sword", "Golden Scales of Equity", "Veil of Rectitude", "Stone Dais"],
    upright: "Equitable balance, karmic cause and effect, objective clarity, and absolute integrity. What has been sown will now be weighed and reaped under impartial universal law.",
    reversed: "Dishonesty, unfair treatment, bias, avoiding accountability, or harsh self-condemnation. The truth will eventually reveal itself regardless of evasive maneuvers.",
    kwUp: ["Truth", "Fairness", "Cause & Effect", "Integrity", "Accountability"],
    kwRev: ["Injustice", "Bias", "Dishonesty", "Evading Truth", "Legal/Moral Conflict"]
  },
  {
    num: 12,
    roman: "XII",
    name: "The Hanged Man",
    element: "Water / Neptune",
    esotericTitle: "Spirit of the Mighty Waters",
    symbols: ["Living Tau Cross", "Luminous Golden Halo", "Crossed Ankle Suspension", "Calm Expression"],
    upright: "Willing surrender, radical shift in perspective, and sacred pause. By releasing the desperate impulse to force an outcome, enlightenment emerges from stillness and sacrifice.",
    reversed: "Stubborn resistance, martyrdom for useless causes, prolonged indecision, or stagnation masquerading as patience. Letting go is different from languishing.",
    kwUp: ["Surrender", "New Perspective", "Sacred Pause", "Spiritual Awakening", "Releasing Control"],
    kwRev: ["Martyrdom", "Stagnation", "Futile Resistance", "Indecision", "Delays"]
  },
  {
    num: 13,
    roman: "XIII",
    name: "Death",
    element: "Water / Scorpio",
    esotericTitle: "Child of the Great Transformers",
    symbols: ["Mystic Five-Petaled Rose", "Obsidian Scythe", "Eclipsed Solar Dawn", "Fallen Crown"],
    upright: "Profound transformation, inevitable endings, and the fertile composting of the obsolete. Clear the decayed underbrush so that genuine renewal can sprout from the fertile ground.",
    reversed: "Fear of change, desperately clinging to dying relationships or habits, dragging out unavoidable endings, stagnation rooted in grief.",
    kwUp: ["Transformation", "Endings & Beginnings", "Shedding Old Skin", "Inevitable Transition", "Liberation"],
    kwRev: ["Clinging to Past", "Fear of Transformation", "Stagnant Rot", "Prolonged Endings", "Resistance"]
  },
  {
    num: 14,
    roman: "XIV",
    name: "Temperance",
    element: "Fire / Sagittarius",
    esotericTitle: "Daughter of the Reconcilers",
    symbols: ["Twin Golden Urns", "Continuous Light Stream", "Dual Footing (Earth & Water)", "Solar Iris on Brow"],
    upright: "Alchemical synthesis, supreme balance, patience, and moderation. Blending opposing elements into a unified, harmonious elixir. Finding healing tranquility in middle ground.",
    reversed: "Imbalance, excess, clashing extremes, impatience, or trying to force incompatible elements into a toxic cocktail. Restore equilibrium before continuing.",
    kwUp: ["Alchemy", "Moderation", "Divine Harmony", "Patience", "Integration"],
    kwRev: ["Imbalance", "Excess", "Discord", "Impatience", "Extremism"]
  },
  {
    num: 15,
    roman: "XV",
    name: "The Devil",
    element: "Earth / Capricorn",
    esotericTitle: "Lord of the Gates of Matter",
    symbols: ["Inverted Pentagram", "Stone Pedestal with Iron Ring", "Loosely Chained Captives", "Torch of Ignorance"],
    upright: "Shadow bonds, materialism, obsessive attachments, and self-imposed illusions of helplessness. Notice that the chains around the neck are loose enough to be lifted off at will.",
    reversed: "Breaking free of toxicity, releasing limiting addictions, reclaiming autonomy from oppressive dogmas, opening eyes to self-imposed captivity.",
    kwUp: ["Shadow Self", "Materialism", "Addiction/Attachment", "Illusion of Trap", "Primal Desires"],
    kwRev: ["Liberation", "Overcoming Addiction", "Awakening", "Reclaiming Power", "Breaking Chains"]
  },
  {
    num: 16,
    roman: "XVI",
    name: "The Tower",
    element: "Fire / Mars",
    esotericTitle: "Lord of the Hosts of the Mighty",
    symbols: ["Lightning Bolt of Revelation", "Crumbling Crown of Citadel", "Flames from Windows", "Falling Figures"],
    upright: "Cataclysmic breakthrough, shattering of illusions, sudden revelation, and the collapse of brittle structures built on false premises. Humbling yet completely liberating.",
    reversed: "Disaster narrowly averted, denial in the face of inevitable collapse, fear of suffering necessary disruption, clinging to a cracking foundation.",
    kwUp: ["Sudden Upheaval", "Shattered Illusions", "Breakthrough", "Liberation", "Radical Truth"],
    kwRev: ["Disaster Averted", "Denial", "Fear of Collapse", "Prolonging the Inevitable", "Internal Ruin"]
  },
  {
    num: 17,
    roman: "XVII",
    name: "The Star",
    element: "Air / Aquarius",
    esotericTitle: "Daughter of the Firmament",
    symbols: ["Eight-Pointed Guiding Star", "Seven Lesser Constellations", "Twin Urns Pouring Waters", "Sacred Ibis"],
    upright: "Renewed hope, celestial inspiration, serene faith, and profound spiritual healing. After the storm of the Tower, the night sky opens to reveal your eternal north star.",
    reversed: "Hopelessness, despair, lack of faith in your own gifts, cynicism, feeling disconnected from spiritual nourishment. Look up; the stars have not vanished.",
    kwUp: ["Hope", "Inspiration", "Serenity", "Divine Guidance", "Spiritual Renewal"],
    kwRev: ["Despair", "Disillusionment", "Cynicism", "Lack of Faith", "Discouragement"]
  },
  {
    num: 18,
    roman: "XVIII",
    name: "The Moon",
    element: "Water / Pisces",
    esotericTitle: "Ruler of Flux and Reflux",
    symbols: ["Crying Lunar Face", "Twin Watchtowers", "Howling Wolf & Dog", "Emerging Primeval Crab"],
    upright: "The realm of illusions, deep dreams, irrational fears, and primeval subconscious tides. Not all is as it seems in the moonlight; let intuition guide you past phantom terrors.",
    reversed: "Clearing of psychic fog, unveiling deception, release from paranoid fears, awakening from an unsettling nightmare into grounded reality.",
    kwUp: ["Illusion", "Subconscious Depths", "Intuition", "Dreams & Phantoms", "Uncertainty"],
    kwRev: ["Lifting Fog", "Truth Revealed", "Overcoming Fear", "Clarity", "Release of Anxiety"]
  },
  {
    num: 19,
    roman: "XIX",
    name: "The Sun",
    element: "Fire / Sun",
    esotericTitle: "Lord of the Fire of the World",
    symbols: ["Radiant Smiling Sun", "Four Blooming Sunflowers", "Joyful Innocent Rider", "Crimson Banner"],
    upright: "Radiant joy, vitality, crystalline clarity, warmth, and unclouded success. Every shadow dissipates under the solar brilliance of pure authenticity and celebratory vigor.",
    reversed: "Temporary clouds obscuring the light, muted enthusiasm, unrealistic optimism, or sunburn from overexposure. The sun is still shining behind the mist.",
    kwUp: ["Joy", "Vitality", "Success", "Warmth & Clarity", "Celebration"],
    kwRev: ["Temporary Cloudiness", "Muted Joy", "Unrealistic Expectations", "Burnout", "Delayed Success"]
  },
  {
    num: 20,
    roman: "XX",
    name: "Judgement",
    element: "Fire / Pluto",
    esotericTitle: "The Spirit of the Primal Fire",
    symbols: ["Archangel Gabriel's Trumpet", "Cross-Emblazoned Herald Banner", "Rising Awakened Souls", "Glacial Peaks"],
    upright: "Resurrection, answering the higher calling, reckoning, and ultimate spiritual rebirth. Forgiving past missteps and stepping forward fully into your authentic cosmic vocation.",
    reversed: "Harsh self-reproach, ignoring the unmistakable summons to evolve, fear of being judged, holding onto outdated guilt that paralyzes rebirth.",
    kwUp: ["Rebirth", "Higher Calling", "Awakening", "Forgiveness", "Karmic Absolution"],
    kwRev: ["Self-Doubt", "Harsh Judgement", "Ignoring the Call", "Guilt & Shame", "Hesitation"]
  },
  {
    num: 21,
    roman: "XXI",
    name: "The World",
    element: "Earth / Saturn",
    esotericTitle: "The Great One of the Night of Time",
    symbols: ["Laurel Wreath of Eternity", "Cosmic Dancer with Twin Wands", "Four Tetramorphs", "Golden Ribbons"],
    upright: "Wholeness, completion, triumphant cycle fulfillment, and cosmic integration. You have traveled the full circle of the arcana; step into celebration and universal harmony.",
    reversed: "Incomplete closure, shortcuts taken that leave unfinished business, feeling delayed at the final threshold, inability to celebrate accomplishments.",
    kwUp: ["Completion", "Wholeness", "Integration", "Triumph", "Cosmic Harmony"],
    kwRev: ["Lack of Closure", "Unfinished Business", "Delays at Finish", "Emptiness", "Shortcuts Taken"]
  }
];

const suits = [
  {
    id: "wands",
    name: "Wands",
    element: "Fire",
    domain: "Passion, Inspiration, Willpower, Action, Creativity",
    emblem: "Staff / Flame / Salamander",
    colors: ["#ff7700", "#ff3300", "#ffe600", "#3a0d0d"]
  },
  {
    id: "cups",
    name: "Cups",
    element: "Water",
    domain: "Emotions, Love, Intuition, Relationships, Healing",
    emblem: "Chalice / Ocean Wave / Lotus",
    colors: ["#00b4d8", "#0077b6", "#90e0ef", "#03045e"]
  },
  {
    id: "swords",
    name: "Swords",
    element: "Air",
    domain: "Intellect, Truth, Conflict, Clarity, Communication",
    emblem: "Blade / Wind Gale / Winged Falcon",
    colors: ["#b8c0ff", "#7209b7", "#4cc9f0", "#181829"]
  },
  {
    id: "pentacles",
    name: "Pentacles",
    element: "Earth",
    domain: "Material World, Wealth, Craft, Body, Nature",
    emblem: "Golden Talisman / Pentagram / Vine",
    colors: ["#52b788", "#2d6a4f", "#e9c46a", "#1b4332"]
  }
];

const minorRankData = [
  {
    rank: "ace",
    num: 1,
    label: "Ace",
    roman: "A",
    wands: {
      title: "Root of the Powers of Fire",
      up: "A sudden spark of inspiration, creative urge, or ambitious new venture bursting with primal fire.",
      rev: "Flickering delays, lack of direction, creative block, or misdirected kinetic passion.",
      kwUp: ["Inspiration", "Creative Spark", "Potential", "Bold Initiative"],
      kwRev: ["Hesitation", "Burnout", "Lack of Energy", "Creative Blocks"]
    },
    cups: {
      title: "Root of the Powers of Water",
      up: "An overflowing fountain of pure emotion, intuitive opening, unconditional love, and spiritual communion.",
      rev: "Emotional suppression, feeling drained, creative drought, or blocked romantic receptivity.",
      kwUp: ["Love", "Compassion", "Emotional Awakening", "Spiritual Flow"],
      kwRev: ["Emotional Drain", "Blocked Feelings", "Vulnerability Fear", "Heartache"]
    },
    swords: {
      title: "Root of the Powers of Air",
      up: "A breakthrough of sharp mental clarity, piercing truth, triumph of intellect over confusion.",
      rev: "Clouded perception, cruelty disguised as honesty, misinformation, or analysis paralysis.",
      kwUp: ["Mental Clarity", "Piercing Truth", "Breakthrough", "Justice"],
      kwRev: ["Confusion", "Hostility", "Miscommunication", "Brutal Judgment"]
    },
    pentacles: {
      title: "Root of the Powers of Earth",
      up: "A tangible seed of material opportunity, financial prosperity, career prospect, or bodily vitality.",
      rev: "Missed financial opportunity, poor foundation, greed, or delay in material results.",
      kwUp: ["Opportunity", "Prosperity", "New Foundation", "Tangible Wealth"],
      kwRev: ["Lost Opportunity", "Financial Instability", "Poor Planning", "Scarcity Mindset"]
    }
  },
  {
    rank: "2",
    num: 2,
    label: "Two",
    roman: "II",
    wands: {
      title: "Lord of Dominion",
      up: "Future planning, holding the world in your hands, gazing toward horizons beyond present borders.",
      rev: "Fear of stepping into the unknown, small-mindedness, travel delays, or lack of long-term vision.",
      kwUp: ["Planning", "Future Horizons", "Ambition", "Discovery"],
      kwRev: ["Fear of Unknown", "Playing It Safe", "Bad Timing", "Disorientation"]
    },
    cups: {
      title: "Lord of Love",
      up: "Mutual attraction, soul connection, balanced partnership, and heartfelt mutual respect.",
      rev: "Imbalance in giving, communication breakdown, codependency, or fractured rapport.",
      kwUp: ["Partnership", "Mutual Respect", "Harmony", "Soul Connection"],
      kwRev: ["Misalignment", "Broken Trust", "Codependency", "Disconnection"]
    },
    swords: {
      title: "Lord of Peace Restored",
      up: "A delicate stalemate, blindfolded weighing of difficult choices, needing internal stillness to decide.",
      rev: "Information overload, agonizing avoidance of decision, truth forcing its way through denial.",
      kwUp: ["Stalemate", "Difficult Choice", "Truce", "Quiet Deliberation"],
      kwRev: ["Avoidance", "Overload", "False Truce", "Indecision Exposed"]
    },
    pentacles: {
      title: "Lord of Harmonious Change",
      up: "Masterful juggling of dual priorities, financial fluidity, adaptability amidst shifting tides.",
      rev: "Dropping plates, overwhelming financial juggling, overextension, and impending chaotic collapse.",
      kwUp: ["Adaptability", "Balance", "Resourcefulness", "Flexibility"],
      kwRev: ["Overwhelmed", "Disorganization", "Financial Stress", "Dropped Balls"]
    }
  },
  {
    rank: "3",
    num: 3,
    label: "Three",
    roman: "III",
    wands: {
      title: "Lord of Established Strength",
      up: "Ships coming into harbor; expansion, overseas enterprise, seeing first fruits of earlier foresight.",
      rev: "Return on investment delayed, thwarted travel, feeling stranded, setbacks to visionary plans.",
      kwUp: ["Expansion", "Foresight", "Overseas Enterprise", "Progress"],
      kwRev: ["Delays", "Frustration", "Bottlenecks", "Unrealized Vision"]
    },
    cups: {
      title: "Lord of Abundance",
      up: "Joyful celebration with soul community, toasts of gratitude, sisterhood/brotherhood, shared festive delight.",
      rev: "Gossip, excluded feelings, hedonistic over-indulgence, party burnout, or superficial camaraderie.",
      kwUp: ["Celebration", "Community", "Friendship", "Gathering Joy"],
      kwRev: ["Overindulgence", "Gossip", "Isolation", "Superficial Friends"]
    },
    swords: {
      title: "Lord of Sorrow",
      up: "Piercing heartbreak, sorrowful revelations, necessary surgical grief that clears festering pain.",
      rev: "Releasing deep grief, healing from betrayal, moving beyond historical wounds, forgiveness.",
      kwUp: ["Heartbreak", "Grief", "Sorrowful Truth", "Emotional Release"],
      kwRev: ["Healing Heart", "Forgiveness", "Moving Beyond Grief", "Reconciliation"]
    },
    pentacles: {
      title: "Lord of Material Works",
      up: "Master craftsmanship, collaborative teamwork, meticulous dedication, elevated artistic reputation.",
      rev: "Poor workmanship, friction among colleagues, lack of discipline, apathy in tradecraft.",
      kwUp: ["Craftsmanship", "Collaboration", "Mastery", "Appreciation"],
      kwRev: ["Friction", "Shoddy Work", "Disregard for Quality", "Lack of Skill"]
    }
  },
  {
    rank: "4",
    num: 4,
    label: "Four",
    roman: "IV",
    wands: {
      title: "Lord of Perfected Work",
      up: "Homecoming, joyous wedding or milestone festival, sanctified hearth, harmonious foundations.",
      rev: "Transient instability, canceled family reunions, feeling unwelcome, tension beneath celebrations.",
      kwUp: ["Homecoming", "Celebration", "Community Sanctity", "Harmony"],
      kwRev: ["Transient Instability", "Family Tension", "Delayed Return", "Insecurity"]
    },
    cups: {
      title: "Lord of Blended Pleasure",
      up: "Apathy, contemplation, arms crossed under the tree ignoring the golden cup offered by unseen hands.",
      rev: "Snapping out of melancholy, renewed enthusiasm, noticing missed opportunities, gratitude return.",
      kwUp: ["Apathy", "Contemplation", "Introspection", "Discontent"],
      kwRev: ["Renewed Interest", "Seizing Opportunity", "Awakening from Slump", "Gratitude"]
    },
    swords: {
      title: "Lord of Rest from Strife",
      up: "Sacred sanctuary, voluntary retreat, peaceful mental recuperation, laying down weapons to heal.",
      rev: "Burnout forced by refusal to rest, awakening from recuperation, returning to battlefield too early.",
      kwUp: ["Rest", "Sanctuary", "Recuperation", "Peaceful Contemplation"],
      kwRev: ["Burnout", "Restlessness", "Forced Exile", "Premature Return"]
    },
    pentacles: {
      title: "Lord of Earthly Power",
      up: "Preservation of wealth, tight security, cautious fiscal boundaries, safeguarding hard-won capital.",
      rev: "Miserliness, greedy hoarding, fear-based scarcity hoarding, financial paranoia restricting life flow.",
      kwUp: ["Security", "Preservation", "Financial Boundaries", "Frugality"],
      kwRev: ["Greed", "Miserliness", "Scarcity Trap", "Material Obsession"]
    }
  },
  {
    rank: "5",
    num: 5,
    label: "Five",
    roman: "V",
    wands: {
      title: "Lord of Strife",
      up: "Spirited competition, sparring match of egos, divergent opinions, friction stimulating growth.",
      rev: "Escalating hostility, fatigue from constant bickering, finding common ground or avoiding petty fights.",
      kwUp: ["Competition", "Sparring", "Creative Friction", "Ego Clash"],
      kwRev: ["Petty Bickering", "Exhaustion", "Conflict Avoidance", "Reaching Accord"]
    },
    cups: {
      title: "Lord of Loss in Pleasure",
      up: "Mourning three spilled cups in a dark cloak, blinded to the two full cups standing upright behind you.",
      rev: "Turning around to see what remains, emotional recovery, forgiveness, letting go of unchangeable past.",
      kwUp: ["Grief & Regret", "Mourning Loss", "Spilled Dreams", "Focus on Loss"],
      kwRev: ["Acceptance", "Emotional Recovery", "Seeing Hope", "Gratitude for What Remains"]
    },
    swords: {
      title: "Lord of Defeat",
      up: "Pyrrhic victory; hollow win attained through cutthroat tactics, leaving allies defeated and bitter.",
      rev: "Laying down bitter vendettas, walking away from toxic arguments, reconciling past humiliation.",
      kwUp: ["Pyrrhic Victory", "Cutthroat Ego", "Hollow Triumph", "Hostility"],
      kwRev: ["Forgiveness", "Walking Away", "Healing Resentment", "Remorse"]
    },
    pentacles: {
      title: "Lord of Material Trouble",
      up: "Trudging in snow past illuminated stained-glass sanctuary; temporary hardship, feeling left out in cold.",
      rev: "Recovery from financial crisis, finding shelter, asking for support, warmth returning after hardship.",
      kwUp: ["Hardship", "Isolation", "Financial Strain", "Feeling Left Out"],
      kwRev: ["Shelter Found", "Financial Recovery", "Rebuilding Security", "Accepting Help"]
    }
  },
  {
    rank: "6",
    num: 6,
    label: "Six",
    roman: "VI",
    wands: {
      title: "Lord of Victory",
      up: "Triumphant procession, laurel wreath of public acclaim, recognition, pride in validated achievement.",
      rev: "Ego arrogance, hollow applause, fall from favor, private disappointment behind public smile.",
      kwUp: ["Victory", "Public Acclaim", "Honor", "Pride & Recognition"],
      kwRev: ["Ego Inflated", "Fall from Grace", "Hollow Praise", "Loss of Status"]
    },
    cups: {
      title: "Lord of Pleasure",
      up: "Nostalgic sweetness, childhood memories, innocent generosity, meeting old soul kin from years past.",
      rev: "Clinging to rose-tinted childhood, living in the past, refusing to mature into adult autonomy.",
      kwUp: ["Nostalgia", "Sweet Memories", "Childlike Joy", "Innocent Giving"],
      kwRev: ["Stuck in the Past", "Immaturity", "Rose-Tinted Delusion", "Moving On"]
    },
    swords: {
      title: "Lord of Earned Success",
      up: "Ferried across choppy waters toward tranquil shores; smooth passage, leaving turbulence behind.",
      rev: "Baggage dragging down the boat, running back into storm, inability to leave old dysfunction behind.",
      kwUp: ["Transition", "Tranquil Shores", "Mental Relief", "Leaving Strife Behind"],
      kwRev: ["Emotional Baggage", "Relapsing into Turmoil", "Delayed Journey", "Resistance to Moving"]
    },
    pentacles: {
      title: "Lord of Material Success",
      up: "Generous patronage, fair distribution of resources, balanced scales of giving and gracious receiving.",
      rev: "Strings attached to charity, condescending philanthropy, abuse of debtor-creditor leverage.",
      kwUp: ["Generosity", "Charity", "Fair Balance", "Patronage"],
      kwRev: ["Strings Attached", "Power Dynamic Abuse", "Inequity", "Debtor Guilt"]
    }
  },
  {
    rank: "7",
    num: 7,
    label: "Seven",
    roman: "VII",
    wands: {
      title: "Lord of Valour",
      up: "Standing your ground on high ground against overwhelming odds; fierce moral resolve and courage.",
      rev: "Exhausted defensiveness, paranoia, giving up vantage point, succumbing to collective peer pressure.",
      kwUp: ["Moral Fortitude", "Defending Position", "High Ground", "Courage Under Fire"],
      kwRev: ["Overwhelmed", "Exhaustion", "Giving In", "Paranoid Guard"]
    },
    cups: {
      title: "Lord of Illusionary Success",
      up: "Floating castles in the clouds, glittering daydreams, temptation of alluring possibilities requiring discernment.",
      rev: "Shattered illusions, cutting through fantasy, making concrete choices, grounding desires in reality.",
      kwUp: ["Daydreams", "Multiple Choices", "Fantasy & Allure", "Wishful Thinking"],
      kwRev: ["Clarity of Choice", "Shattered Illusions", "Grounded Reality", "Decisive Action"]
    },
    swords: {
      title: "Lord of Unstable Effort",
      up: "Stealth, clever strategy, sneaking away with the swords, solo tactics, keeping cards close to chest.",
      rev: "Caught in deception, confession, conscience asserting itself, coming clean, ineffective covert plots.",
      kwUp: ["Stealth", "Strategy", "Tactical Cunning", "Discretion"],
      kwRev: ["Caught Out", "Deception Exposed", "Conscience Awakening", "Confession"]
    },
    pentacles: {
      title: "Lord of Success Unfulfilled",
      up: "Leaning on hoe contemplating harvest vines; patience, long-term assessment, waiting for seeds to ripen.",
      rev: "Impatience, abandoned investments, disillusionment with rate of return, wasted effort.",
      kwUp: ["Patience", "Harvest Assessment", "Long-term Investment", "Perseverance"],
      kwRev: ["Impatience", "Wasted Labor", "Premature Abandonment", "Disappointment"]
    }
  },
  {
    rank: "8",
    num: 8,
    label: "Eight",
    roman: "VIII",
    wands: {
      title: "Lord of Swiftness",
      up: "Eight flying arrows slicing through the sky; rapid progress, swift communications, sudden momentum.",
      rev: "Chaotic delay, scrambled messages, haste resulting in mistakes, stalled flight, panic.",
      kwUp: ["Rapid Momentum", "Swift Messages", "Sudden Progress", "Aligned Action"],
      kwRev: ["Delays", "Chaotic Haste", "Miscommunicated News", "Frustrated Velocity"]
    },
    cups: {
      title: "Lord of Abandoned Success",
      up: "Turning back on eight stacked chalices to climb the rocky path into mountains; walking away from what no longer feeds the soul.",
      rev: "Fear of departure, clinging to hollow security, endlessly returning to unfulfilling situations.",
      kwUp: ["Walking Away", "Deeper Meaning", "Spiritual Pilgrimage", "Soul Quest"],
      kwRev: ["Fear of Leaving", "Aimless Wandering", "Clinging to Hollow Comfort", "Avoidance"]
    },
    swords: {
      title: "Lord of Shortened Force",
      up: "Blindfolded and loosely bound by swords planted in mud; mental entrapment, victim mentality, self-imposed prison.",
      rev: "Removing the blindfold, recognizing freedom was always accessible, stepping out of limiting beliefs.",
      kwUp: ["Self-Imposed Trap", "Limiting Beliefs", "Mental Cage", "Victim Stance"],
      kwRev: ["Liberation", "Removed Blindfold", "Newfound Freedom", "Overcoming Helplessness"]
    },
    pentacles: {
      title: "Lord of Prudence",
      up: "Dedicated apprentice diligently hammering coin after coin; dedication to craft, repetitive mastery, pride in work.",
      rev: "Perfectionism, tedious burnout, cutting corners, lack of passion for repetitive chores.",
      kwUp: ["Apprenticeship", "Mastery of Craft", "Dedication", "Diligence"],
      kwRev: ["Perfectionism", "Tedious Burnout", "Shoddy Craft", "Uninspired Drudgery"]
    }
  },
  {
    rank: "9",
    num: 9,
    label: "Nine",
    roman: "IX",
    wands: {
      title: "Lord of Great Strength",
      up: "Bandaged warrior leaning on protective staff; bruised but resilient, guarding final line of defense.",
      rev: "Paranoid hypervigilance, defensive exhaustion, stubborn refusal to accept that danger has passed.",
      kwUp: ["Resilience", "Grit", "Final Stand", "Defensive Fortitude"],
      kwRev: ["Exhaustion", "Hypervigilance", "Paranoia", "Defensive Walls Too High"]
    },
    cups: {
      title: "Lord of Material Happiness",
      up: "The 'Wish Card'; hearty contentment, smug satisfaction, banquet of personal emotional and sensory fulfillment.",
      rev: "Smug complacency, shallow materialism, over-indulgence leaving an internal spiritual void.",
      kwUp: ["Wishes Fulfilled", "Satisfaction", "Emotional Contentment", "Pleasure"],
      kwRev: ["Smugness", "Greed", "Superficial Comfort", "Underlying Emptiness"]
    },
    swords: {
      title: "Lord of Despair and Cruelty",
      up: "Waking up in midnight darkness with hands clutching face; nocturnal anxiety, nightmare loops, catastrophic thoughts.",
      rev: "Morning dawn breaking over nightmares, learning to quiet racing mind, seeking comfort and therapeutic clarity.",
      kwUp: ["Nighttime Anguish", "Anxiety Spirals", "Catastrophizing", "Guilt & Dread"],
      kwRev: ["Relief at Dawn", "Coping with Anxiety", "Finding Solace", "Releasing Catastrophic Fears"]
    },
    pentacles: {
      title: "Lord of Material Gain",
      up: "Graceful lady in lush vineyard with hooded falcon; dignified self-reliance, refined luxury, enjoying fruits of labor.",
      rev: "Superficial display, gilded cage, isolation behind wealth, feeling dependent on someone else's resources.",
      kwUp: ["Self-Reliance", "Refined Luxury", "Solitary Grace", "Fruitful Independence"],
      kwRev: ["Gilded Cage", "Superficial Vanity", "Material Dependency", "Loneliness in Luxury"]
    }
  },
  {
    rank: "10",
    num: 10,
    label: "Ten",
    roman: "X",
    wands: {
      title: "Lord of Oppression",
      up: "Trudging up hill bearing ten heavy bundles; crushing responsibility, overburdened shoulders, near finish line.",
      rev: "Collapsing under burden, delegating tasks, shedding unnecessary baggage, refusing martyrdom.",
      kwUp: ["Heavy Burden", "Overcommitment", "Shouldering Responsibility", "Near the Top"],
      kwRev: ["Delegation", "Collapse", "Dropping the Load", "Refusing Martyrdom"]
    },
    cups: {
      title: "Lord of Perfected Success",
      up: "Rainbow of ten chalices overarching happy family and verdant home; lasting emotional bliss, idyllic communal love.",
      rev: "Domestic friction, shattered family ideals, unrealistic fantasy of perfection, emotional alienation.",
      kwUp: ["Lasting Bliss", "Family Harmony", "Communal Love", "Rainbow of Fulfillment"],
      kwRev: ["Domestic Discord", "Shattered Ideal", "Alienation", "False Harmony"]
    },
    swords: {
      title: "Lord of Ruin",
      up: "Figure lying face-down pierced by ten swords as dawn breaks on the distant horizon; rock bottom, complete ending, nowhere to go but up.",
      rev: "Surviving the worst, beginning of recovery from trauma, rising from ashes, lingering victim wounds.",
      kwUp: ["Rock Bottom", "Absolute Ending", "Inevitable Dawn", "Betrayal Over"],
      kwRev: ["Rising from Ashes", "Recovery from Trauma", "Worst is Over", "Regaining Life"]
    },
    pentacles: {
      title: "Lord of Wealth",
      up: "Generational patriarch surrounded by family, dogs, and ancestral estate; lasting legacy, enduring security, heritage.",
      rev: "Family inheritance disputes, crumbling ancestral estate, conservative stagnation, financial legacy burdens.",
      kwUp: ["Generational Legacy", "Enduring Wealth", "Ancestral Heritage", "Family Prosperity"],
      kwRev: ["Family Inheritance Feud", "Crumbling Heritage", "Legacy Burden", "Financial Mismanagement"]
    }
  },
  {
    rank: "page",
    num: 11,
    label: "Page",
    roman: "P",
    wands: {
      title: "Princess of the Shining Flame",
      up: "Enthusiastic explorer holding blooming staff, bubbling with playful creative sparks and thirst for adventure.",
      rev: "Procrastination, flighty attention span, boastful promises without follow-through, tantrums.",
      kwUp: ["Creative Spark", "Enthusiasm", "Curiosity", "Playful Adventure"],
      kwRev: ["Flightiness", "Procrastination", "Empty Promises", "Impatience"]
    },
    cups: {
      title: "Princess of the Waters",
      up: "Dreamy youth gazing tenderly at a whimsical fish peering out of the cup; poetic intuition and tender emotion.",
      rev: "Emotional immaturity, drama, moodiness, escapism into childish fantasies, hypersensitivity.",
      kwUp: ["Intuitive Messenger", "Poetic Dreamer", "Tender Heart", "Whimsical Surprise"],
      kwRev: ["Emotional Fragility", "Mood Swings", "Escapist Fantasies", "Childish Drama"]
    },
    swords: {
      title: "Princess of the Rushing Winds",
      up: "Agile youth standing on craggy knoll with sword raised, sharp wind blowing, vigilant and hungry for truth.",
      rev: "Spiteful gossip, petty paranoia, abrasive communication, weaponizing secret information.",
      kwUp: ["Curiosity for Truth", "Mental Agility", "Vigilance", "Inquisitive Mind"],
      kwRev: ["Malicious Gossip", "Defensiveness", "Petty Bickering", "Abrasive Words"]
    },
    pentacles: {
      title: "Princess of the Echoing Hills",
      up: "Earnest student cradling a glowing gold coin, immersed in nature, eager to learn practical skills.",
      rev: "Lack of focus, financial irresponsibility, neglecting studies, laziness, failure to materialize dreams.",
      kwUp: ["Practical Student", "Grounded Ambition", "Eagerness to Learn", "Fostering Seeds"],
      kwRev: ["Lack of Progress", "Procrastination", "Financial Naivety", "Wasted Potential"]
    }
  },
  {
    rank: "knight",
    num: 12,
    label: "Knight",
    roman: "Kn",
    wands: {
      title: "Lord of the Flame and Lightning",
      up: "Fiery charger galloping through desert sands; fearless audacity, passionate haste, dynamic champion of causes.",
      rev: "Reckless arrogance, volatile temper, hot-headed burnouts, impatience leaving wreckage behind.",
      kwUp: ["Audacity", "Fiery Passion", "Chivalric Charge", "High Energy"],
      kwRev: ["Reckless Haste", "Hot-Headed Aggression", "Impulsiveness", "Burnout"]
    },
    cups: {
      title: "Lord of the Waves and Waters",
      up: "Romantic knight riding silver horse across quiet creek, offering golden cup with heartfelt courtly devotion.",
      rev: "Fickle romanticism, manipulative charm, unrealistic prince charming illusions, mood-driven unreliability.",
      kwUp: ["Romantic Chivalry", "Heartfelt Quest", "Poetic Vision", "Diplomacy"],
      kwRev: ["Fickle Heart", "Manipulative Charm", "Disappointment", "Passive Aggression"]
    },
    swords: {
      title: "Lord of the Wind and Breezes",
      up: "Furious knight charging headlong through gale-force winds with drawn broadsword; lightning intellect and relentless drive.",
      rev: "Sarcastic ruthlessness, bulldozing feelings, charging into battle without strategy, intellectual tyranny.",
      kwUp: ["Direct Action", "Fast-Paced Intellect", "Fearless Drive", "Sharp Truth"],
      kwRev: ["Ruthless Tactlessness", "Bulldozing", "Reckless Arguments", "Impulsive Strike"]
    },
    pentacles: {
      title: "Lord of the Wide and Fertile Land",
      up: "Patient knight on heavy draught horse in plowed field; unwavering reliability, methodical endurance, duty.",
      rev: "Stubborn rigidity, obsessive workaholism, mundane tunnel-vision, resistance to necessary change.",
      kwUp: ["Methodical Reliability", "Endurance", "Duty & Honor", "Patience"],
      kwRev: ["Stubborn Inertia", "Workaholism", "Tunnel Vision", "Boring Rigidity"]
    }
  },
  {
    rank: "queen",
    num: 13,
    label: "Queen",
    roman: "Q",
    wands: {
      title: "Queen of the Thrones of Flame",
      up: "Radiant sovereign with black cat at feet, holding sunflower and wand; magnetic charisma, infectious warmth, self-assurance.",
      rev: "Jealous fury, domineering drama, demanding constant spotlight, manipulative insecurity.",
      kwUp: ["Magnetic Charisma", "Fierce Warmth", "Confidence", "Radiant Leadership"],
      kwRev: ["Jealousy", "Domineering Drama", "Insecurity", "Demanding Centerstage"]
    },
    cups: {
      title: "Queen of the Thrones of Water",
      up: "Empathetic mystic queen contemplating ornate closed cup on ocean shore; psychic depths, compassionate listening, emotional serenity.",
      rev: "Codependent absorption, emotional manipulation, victim playing, drowned in psychic distress.",
      kwUp: ["Empathy", "Psychic Depth", "Unconditional Compassion", "Emotional Wisdom"],
      kwRev: ["Codependency", "Emotional Manipulation", "Martyr Complex", "Overwhelmed by Feelings"]
    },
    swords: {
      title: "Queen of the Thrones of Air",
      up: "Sharp-eyed queen holding upright blade with outstretched hand amidst clearing clouds; piercing intellect, boundaries, unbiased truth.",
      rev: "Ice-cold bitterness, unforgiving vindictiveness, caustic tongue, emotional fortress of loneliness.",
      kwUp: ["Unbiased Truth", "Clear Boundaries", "Sovereign Intellect", "Direct Insight"],
      kwRev: ["Cold Bitterness", "Cruel Sarcasm", "Vindictiveness", "Unforgiving Isolation"]
    },
    pentacles: {
      title: "Queen of the Thrones of Earth",
      up: "Nurturing matriarch nestled in fertile forest with rabbit at feet; earthy abundance, hospitality, sensual groundedness.",
      rev: "Materialistic vanity, smothering home life, neglect of internal spirit in pursuit of worldly status.",
      kwUp: ["Earthy Nurturance", "Abundant Hospitality", "Practical Wisdom", "Sanctuary"],
      kwRev: ["Materialistic Vanity", "Smothering Care", "Status Obsession", "Disconnected from Earth"]
    }
  },
  {
    rank: "king",
    num: 14,
    label: "King",
    roman: "K",
    wands: {
      title: "Lord of the Flame and Lightning",
      up: "Visionary leader enthroned with lion and salamander motifs; inspirational visionary, bold trailblazer, entrepreneurial authority.",
      rev: "Dictatorial entitlement, ruthless impatience, overbearing arrogance, setting impossible expectations for others.",
      kwUp: ["Visionary Leader", "Trailblazer", "Inspirational Authority", "Bold Courage"],
      kwRev: ["Dictatorial Ego", "Unrealistic Expectations", "Ruthless Temper", "Overbearing Control"]
    },
    cups: {
      title: "Prince of the Chariot of the Waters",
      up: "Master of emotional seas seated on throne floating upon rolling waves; serene calm amidst turbulent tempests, compassionate wisdom.",
      rev: "Suppressed rage, passive-aggressive mood swings, cold emotional withdrawal, manipulative deceit.",
      kwUp: ["Emotional Mastery", "Compassionate Sovereign", "Calm in the Storm", "Wisdom"],
      kwRev: ["Emotional Volatility", "Cold Withdrawal", "Passive Aggression", "Deceit"]
    },
    swords: {
      title: "Prince of the Chariot of the Winds",
      up: "Judicial sovereign with upright gleaming blade; supreme intellectual mastery, ethical truth, disciplined logic.",
      rev: "Tyrannical intellect, weaponized cruelty, rigid cynicism, dogmatic authoritarianism devoid of heart.",
      kwUp: ["Supreme Intellect", "Ethical Authority", "Impartial Truth", "Strategic Mastery"],
      kwRev: ["Weaponized Cruelty", "Intellectual Tyranny", "Rigid Dogma", "Callous Coldness"]
    },
    pentacles: {
      title: "Lord of the Wide and Fertile Land",
      up: "Prosperous lord seated in grape-rich stone castle with bull heads carved in relief; enterprise mastery, steady abundance, generative security.",
      rev: "Greedy miser, corrupt enterprise, stubborn resistance to ethical reform, valuing money over souls.",
      kwUp: ["Generative Abundance", "Business Mastery", "Steadfast Security", "Material Sovereignty"],
      kwRev: ["Greed & Corruption", "Stubborn Materialism", "Compromised Ethics", "Financial Domination"]
    }
  }
];

const cards = [];

// 1. Add Major Arcana (22 cards)
majorArcanaData.forEach(item => {
  cards.push({
    id: `maj_${String(item.num).padStart(2, '0')}`,
    num: item.num,
    name: item.name,
    number: item.roman,
    arcana: "major",
    suit: null,
    element: item.element,
    esotericTitle: item.esotericTitle,
    symbols: item.symbols,
    meaningUpright: item.upright,
    meaningReversed: item.reversed,
    keywordsUpright: item.kwUp,
    keywordsReversed: item.kwRev
  });
});

// 2. Add Minor Arcana (56 cards)
suits.forEach(suit => {
  minorRankData.forEach(rankItem => {
    const suitInfo = rankItem[suit.id];
    cards.push({
      id: `${suit.id}_${rankItem.rank}`,
      num: rankItem.num,
      name: `${rankItem.label} of ${suit.name}`,
      number: rankItem.roman,
      rank: rankItem.rank,
      rankLabel: rankItem.label,
      arcana: "minor",
      suit: suit.id,
      suitName: suit.name,
      element: suit.element,
      esotericTitle: suitInfo.title,
      meaningUpright: suitInfo.up,
      meaningReversed: suitInfo.rev,
      keywordsUpright: suitInfo.kwUp,
      keywordsReversed: suitInfo.kwRev
    });
  });
});

const fileContent = `/**
 * Complete 78-Card Tarot Deck Dataset
 * All 22 Major Arcana + 56 Minor Arcana across Wands, Cups, Swords, and Pentacles.
 * Rich upright and reversed meanings, esoteric titles, elemental associations, and symbolic keys.
 */

export const SUITS = ${JSON.stringify(suits, null, 2)};

export const TAROT_DECK = ${JSON.stringify(cards, null, 2)};

export function getCardById(id) {
  return TAROT_DECK.find(c => c.id === id);
}

export function getCardsByArcana(arcana) {
  return TAROT_DECK.filter(c => c.arcana === arcana);
}

export function getCardsBySuit(suit) {
  return TAROT_DECK.filter(c => c.suit === suit);
}
`;

fs.writeFileSync(path.join(__dirname, 'js', 'cards.js'), fileContent, 'utf8');
console.log(`Successfully generated js/cards.js with ${cards.length} cards!`);
