/**
 * Source of js/cards.js. Edit the data here, then run:
 *
 *   node build_cards_data.js
 *
 * js/cards.js is generated and is overwritten by this script. Do not edit it by hand.
 *
 * Every card has: name, arcana, suit, element, ruler (majors only), an esoteric
 * title, one or two plain sentences for upright and reversed, and lower-case
 * keywords. Meanings describe what the card means, not what a particular deck
 * paints on it, because the decks in this app paint very different pictures.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const majorArcanaData = [
  {
    num: 0, roman: "0", name: "The Fool", element: "Air", ruler: "Uranus",
    esotericTitle: "The Spirit of Aether",
    upright: "A beginning that asks for trust rather than a plan. Step into the unknown with an open mind, and travel light.",
    reversed: "Either you are leaping without looking, or you are too afraid to take a step you need to take. Check your footing, then go.",
    kwUp: ["new beginnings", "innocence", "a leap of faith", "spontaneity", "potential"],
    kwRev: ["recklessness", "fear of the unknown", "naivety", "hesitation", "carelessness"]
  },
  {
    num: 1, roman: "I", name: "The Magician", element: "Air", ruler: "Mercury",
    esotericTitle: "The Magus of Power",
    upright: "You have the tools and the will to make something real. Focus your attention and act.",
    reversed: "Skill without direction, or talent spent on appearances and tricks. Check whether you are deceiving others or yourself.",
    kwUp: ["manifestation", "willpower", "resourcefulness", "skill", "focused action"],
    kwRev: ["manipulation", "untapped potential", "deception", "scattered focus", "illusion"]
  },
  {
    num: 2, roman: "II", name: "The High Priestess", element: "Water", ruler: "Moon",
    esotericTitle: "Priestess of the Silver Star",
    upright: "Trust what you already know but have not said aloud. Sit with the question instead of asking the room.",
    reversed: "You are ignoring your intuition, keeping secrets, or settling for surface answers. Listen to what you have been drowning out.",
    kwUp: ["intuition", "mystery", "the subconscious", "inner knowing", "stillness"],
    kwRev: ["ignored instinct", "secrets", "superficiality", "detachment", "hidden motives"]
  },
  {
    num: 3, roman: "III", name: "The Empress", element: "Earth", ruler: "Venus",
    esotericTitle: "Daughter of the Mighty Ones",
    upright: "Growth, nurture, and abundance. Feed what you are growing, whether a project, a relationship, or yourself, and let it ripen.",
    reversed: "Creative block, dependence, smothering, or neglect of your own needs. Tend your own garden first.",
    kwUp: ["abundance", "fertility", "creativity", "nurturing", "pleasure"],
    kwRev: ["creative block", "depletion", "smothering", "neglect", "overindulgence"]
  },
  {
    num: 4, roman: "IV", name: "The Emperor", element: "Fire", ruler: "Aries",
    esotericTitle: "Sun of the Morning, Chief Among the Mighty",
    upright: "Structure, authority, and discipline. Set the rules and boundaries that let the work stand up.",
    reversed: "Control has become rigid or tyrannical, or there is no structure at all. Ask whether firmness has become stubbornness.",
    kwUp: ["authority", "structure", "stability", "discipline", "leadership"],
    kwRev: ["tyranny", "rigidity", "chaos", "micromanagement", "loss of control"]
  },
  {
    num: 5, roman: "V", name: "The Hierophant", element: "Earth", ruler: "Taurus",
    esotericTitle: "Magus of the Eternal Gods",
    upright: "Tradition, teaching, and shared belief. Learn the way this has been done before you decide to do it differently.",
    reversed: "Dogma, hypocrisy, or rebellion against rules that no longer fit. Question the form, but do not reject it out of spite.",
    kwUp: ["tradition", "mentorship", "wisdom", "institutions", "shared belief"],
    kwRev: ["dogma", "rebellion", "unconventional paths", "hypocrisy", "conformity"]
  },
  {
    num: 6, roman: "VI", name: "The Lovers", element: "Air", ruler: "Gemini",
    esotericTitle: "The Children of the Voice Divine",
    upright: "A union, or a choice about what you value. Choose what you can live with, not only what you feel.",
    reversed: "Misaligned values, a divided heart, or a choice you keep refusing to make. You cannot walk two roads at once.",
    kwUp: ["union", "harmony", "shared values", "connection", "choice"],
    kwRev: ["disharmony", "misalignment", "conflict", "indecision", "broken bonds"]
  },
  {
    num: 7, roman: "VII", name: "The Chariot", element: "Water", ruler: "Cancer",
    esotericTitle: "Child of the Powers of the Waters",
    upright: "Victory through will and focus. Hold the opposing pulls together and steer.",
    reversed: "Loss of direction, aggression, or force without a goal. Fix what is steering before you push harder.",
    kwUp: ["determination", "willpower", "victory", "control", "focus"],
    kwRev: ["loss of control", "aggression", "obstacles", "aimlessness", "a hard stop"]
  },
  {
    num: 8, roman: "VIII", name: "Strength", element: "Fire", ruler: "Leo",
    esotericTitle: "Daughter of the Flaming Sword",
    upright: "Courage that does not need to shout. Meet what is fierce in you or around you with patience and a steady hand.",
    reversed: "Self-doubt, temper, or fear you are trying to force down. Real strength is quiet; find it again.",
    kwUp: ["inner strength", "compassion", "patience", "courage", "calm"],
    kwRev: ["self-doubt", "aggression", "impatience", "weakness", "burnout"]
  },
  {
    num: 9, roman: "IX", name: "The Hermit", element: "Earth", ruler: "Virgo",
    esotericTitle: "Magus of the Voice of Light",
    upright: "Solitude and reflection. Step away from the noise to find your own answer.",
    reversed: "Isolation, loneliness, or refusing the quiet because it would tell you something. Come back far enough to be reached, or go far enough to hear yourself.",
    kwUp: ["introspection", "solitude", "guidance", "searching", "discernment"],
    kwRev: ["isolation", "loneliness", "withdrawal", "paranoia", "feeling lost"]
  },
  {
    num: 10, roman: "X", name: "Wheel of Fortune", element: "Fire", ruler: "Jupiter",
    esotericTitle: "Lord of the Forces of Life",
    upright: "A turn of fortune, a change of season. Something stuck is moving; ride it rather than resisting it.",
    reversed: "Bad luck, resistance to change, or a cycle you keep repeating. You cannot wind the wheel back; work with where it is.",
    kwUp: ["cycles", "change", "good fortune", "turning points", "luck"],
    kwRev: ["misfortune", "resistance to change", "stagnation", "bad timing", "disruption"]
  },
  {
    num: 11, roman: "XI", name: "Justice", element: "Air", ruler: "Libra",
    esotericTitle: "Daughter of the Lords of Truth",
    upright: "Cause and effect, fairness, and accountability. What was done will be weighed; be honest about your part.",
    reversed: "Unfairness, bias, dishonesty, or avoiding responsibility. Check whose thumb is on the scale.",
    kwUp: ["truth", "fairness", "cause and effect", "integrity", "accountability"],
    kwRev: ["injustice", "bias", "dishonesty", "evasion", "conflict"]
  },
  {
    num: 12, roman: "XII", name: "The Hanged Man", element: "Water", ruler: "Neptune",
    esotericTitle: "Spirit of the Mighty Waters",
    upright: "A pause, a surrender, a new angle. Stop forcing the outcome and let the view change.",
    reversed: "Stalling, martyrdom, or resistance disguised as patience. Letting go is not the same as doing nothing.",
    kwUp: ["surrender", "new perspective", "pause", "letting go", "suspension"],
    kwRev: ["martyrdom", "stagnation", "resistance", "indecision", "delay"]
  },
  {
    num: 13, roman: "XIII", name: "Death", element: "Water", ruler: "Scorpio",
    esotericTitle: "Child of the Great Transformers",
    upright: "An ending that makes room. Let what is finished be finished so something else can begin.",
    reversed: "Fear of change, clinging to what is already over, or an ending dragged out past its time. Let it end.",
    kwUp: ["transformation", "endings", "release", "transition", "renewal"],
    kwRev: ["clinging to the past", "fear of change", "stagnation", "prolonged endings", "resistance"]
  },
  {
    num: 14, roman: "XIV", name: "Temperance", element: "Fire", ruler: "Sagittarius",
    esotericTitle: "Daughter of the Reconcilers",
    upright: "Balance, patience, and moderation. Blend the opposites rather than choosing one.",
    reversed: "Excess, imbalance, or forcing together things that do not mix. Restore the middle before you continue.",
    kwUp: ["balance", "moderation", "patience", "harmony", "integration"],
    kwRev: ["imbalance", "excess", "discord", "impatience", "extremes"]
  },
  {
    num: 15, roman: "XV", name: "The Devil", element: "Earth", ruler: "Capricorn",
    esotericTitle: "Lord of the Gates of Matter",
    upright: "Attachment, compulsion, and the feeling of being trapped. The chains are looser than they look.",
    reversed: "Breaking free of a habit, a bond, or a belief that held you. Seeing the chain is the first step; lifting it is the second.",
    kwUp: ["attachment", "materialism", "compulsion", "feeling trapped", "temptation"],
    kwRev: ["liberation", "breaking free", "awakening", "reclaiming power", "release"]
  },
  {
    num: 16, roman: "XVI", name: "The Tower", element: "Fire", ruler: "Mars",
    esotericTitle: "Lord of the Hosts of the Mighty",
    upright: "Sudden upheaval that brings down what was built on a false footing. It is painful, and it clears the ground.",
    reversed: "Disaster averted, or disaster denied: the structure is cracking and you are not looking. Face the fault before it faces you.",
    kwUp: ["upheaval", "revelation", "collapse", "breakthrough", "hard truth"],
    kwRev: ["disaster averted", "denial", "fear of change", "delaying the inevitable", "a slow collapse"]
  },
  {
    num: 17, roman: "XVII", name: "The Star", element: "Air", ruler: "Aquarius",
    esotericTitle: "Daughter of the Firmament",
    upright: "Hope, healing, and renewed faith after a hard stretch. Look up; the way is clearer than it was.",
    reversed: "Despair, cynicism, or lost faith in your own gifts. The stars have not gone; you have stopped looking for them.",
    kwUp: ["hope", "inspiration", "serenity", "healing", "faith"],
    kwRev: ["despair", "disillusionment", "cynicism", "lost faith", "discouragement"]
  },
  {
    num: 18, roman: "XVIII", name: "The Moon", element: "Water", ruler: "Pisces",
    esotericTitle: "Ruler of Flux and Reflux",
    upright: "Illusion, fear, and the pull of the subconscious. Not everything is what it seems; move slowly and trust your instincts.",
    reversed: "The fog is lifting and the fears are shrinking. What frightened you is smaller in daylight.",
    kwUp: ["illusion", "intuition", "fear", "dreams", "uncertainty"],
    kwRev: ["clarity", "truth revealed", "fear released", "understanding", "calm"]
  },
  {
    num: 19, roman: "XIX", name: "The Sun", element: "Fire", ruler: "Sun",
    esotericTitle: "Lord of the Fire of the World",
    upright: "Joy, vitality, and success in plain sight. Enjoy a good day for what it is.",
    reversed: "A clouded or muted joy, unrealistic optimism, or burnout from too much of a good thing. The sun is still there behind the mist.",
    kwUp: ["joy", "vitality", "success", "clarity", "warmth"],
    kwRev: ["clouded joy", "muted enthusiasm", "unrealistic expectations", "burnout", "delay"]
  },
  {
    num: 20, roman: "XX", name: "Judgement", element: "Fire", ruler: "Pluto",
    esotericTitle: "The Spirit of the Primal Fire",
    upright: "A reckoning and a calling. Take stock of what you have done and answer the summons to change.",
    reversed: "Harsh self-judgment, ignoring the call, or guilt that keeps you from moving. Forgive what needs forgiving and get up.",
    kwUp: ["reckoning", "awakening", "a calling", "forgiveness", "renewal"],
    kwRev: ["self-doubt", "harsh judgment", "ignoring the call", "guilt", "hesitation"]
  },
  {
    num: 21, roman: "XXI", name: "The World", element: "Earth", ruler: "Saturn",
    esotericTitle: "The Great One of the Night of Time",
    upright: "Completion and wholeness. A cycle has finished; celebrate it before the next one begins.",
    reversed: "Unfinished business, shortcuts, or a delay at the final step. Finish the last mile.",
    kwUp: ["completion", "wholeness", "achievement", "integration", "fulfillment"],
    kwRev: ["incompleteness", "unfinished business", "delay", "emptiness", "shortcuts"]
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
    rank: "ace", num: 1, label: "Ace", roman: "A",
    wands: {
      title: "Root of the Powers of Fire",
      up: "A new idea, project, or desire has real energy behind it. Start while the spark is hot rather than waiting to feel ready.",
      rev: "You want to begin but cannot find the push, or the push keeps getting spent on the wrong thing. Wait for the real spark, then act on it quickly.",
      kwUp: ["inspiration", "a creative spark", "potential", "initiative"],
      kwRev: ["hesitation", "burnout", "low energy", "creative block"]
    },
    cups: {
      title: "Root of the Powers of Water",
      up: "Feeling opens up: new love, compassion, a creative or spiritual beginning. Let yourself receive it rather than analyzing it.",
      rev: "Feelings are blocked, drained, or being held back out of fear. Notice what you are refusing to feel, and why.",
      kwUp: ["love", "compassion", "emotional opening", "new feeling"],
      kwRev: ["emotional drain", "blocked feelings", "fear of vulnerability", "heartache"]
    },
    swords: {
      title: "Root of the Powers of Air",
      up: "A breakthrough in clarity: the truth is suddenly plain. Act on what you now see.",
      rev: "Thinking is clouded, or the truth is being used as a weapon. Wait for clarity before you cut.",
      kwUp: ["clarity", "truth", "breakthrough", "a decision"],
      kwRev: ["confusion", "hostility", "miscommunication", "harsh judgment"]
    },
    pentacles: {
      title: "Root of the Powers of Earth",
      up: "A tangible opportunity: money, work, health, or a new foundation. Plant it where it can grow.",
      rev: "A missed opportunity, poor planning, or a chance that looks better than it is. Read the fine print before you commit.",
      kwUp: ["opportunity", "prosperity", "a new foundation", "security"],
      kwRev: ["a lost opportunity", "financial instability", "poor planning", "scarcity"]
    }
  },
  {
    rank: "2", num: 2, label: "Two", roman: "II",
    wands: {
      title: "Lord of Dominion",
      up: "You have done well enough to want more, and you are weighing where to go next. Plan the longer route and commit to one direction.",
      rev: "You are afraid to leave what you know, so the plan stays a plan. Either go, or admit you have chosen to stay.",
      kwUp: ["planning", "ambition", "a decision", "the long view"],
      kwRev: ["fear of the unknown", "playing it safe", "bad timing", "indecision"]
    },
    cups: {
      title: "Lord of Love",
      up: "A real connection, met halfway: partnership, attraction, or mutual respect. Give and receive in equal measure.",
      rev: "The balance in a relationship is off, and one side is giving or withholding too much. Name the imbalance before it becomes distance.",
      kwUp: ["partnership", "mutual respect", "harmony", "connection"],
      kwRev: ["imbalance", "broken trust", "codependency", "disconnection"]
    },
    swords: {
      title: "Lord of Peace Restored",
      up: "A stalemate between two choices, and you are avoiding looking at either. Decide, even without certainty.",
      rev: "The information is overwhelming, or a truth is forcing its way through a denial. The decision is about to make itself if you do not.",
      kwUp: ["stalemate", "a hard choice", "truce", "deliberation"],
      kwRev: ["avoidance", "overload", "a false truce", "indecision exposed"]
    },
    pentacles: {
      title: "Lord of Harmonious Change",
      up: "You are juggling priorities and keeping it all in the air. Stay flexible, but notice what is being neglected.",
      rev: "The juggling has become dropping; you are overextended and something is about to give. Set one thing down.",
      kwUp: ["adaptability", "balance", "resourcefulness", "flexibility"],
      kwRev: ["overextension", "disorganization", "financial stress", "dropped commitments"]
    }
  },
  {
    rank: "3", num: 3, label: "Three", roman: "III",
    wands: {
      title: "Lord of Established Strength",
      up: "What you set in motion is starting to come back to you. Expect progress, news from a distance, and room to expand.",
      rev: "Results are slower than you expected and the plan looks shakier than it did. Check what is actually in motion before you assume it has failed.",
      kwUp: ["expansion", "foresight", "progress", "first results"],
      kwRev: ["delays", "frustration", "obstacles", "an unrealized plan"]
    },
    cups: {
      title: "Lord of Abundance",
      up: "Friends, celebration, and shared joy. Gather the people you love and mark the moment.",
      rev: "A circle of friends feels strained, exclusive, or exhausted by too much of a good thing. Step back from gossip and overindulgence.",
      kwUp: ["celebration", "community", "friendship", "shared joy"],
      kwRev: ["overindulgence", "gossip", "exclusion", "shallow friendship"]
    },
    swords: {
      title: "Lord of Sorrow",
      up: "Heartbreak, painful truth, or grief that cuts clean. Feel it fully; it heals cleaner for being felt.",
      rev: "You are releasing old pain, forgiving, or finally healing a wound you have carried. Let it close.",
      kwUp: ["heartbreak", "grief", "painful truth", "release"],
      kwRev: ["healing", "forgiveness", "moving on", "reconciliation"]
    },
    pentacles: {
      title: "Lord of Material Works",
      up: "Skilled work and good collaboration. Your craft is valued; keep learning and keep building with others.",
      rev: "Poor workmanship, friction on the team, or no shared plan. Agree on the approach before you continue.",
      kwUp: ["craftsmanship", "collaboration", "skill", "recognition"],
      kwRev: ["friction", "shoddy work", "carelessness", "lack of skill"]
    }
  },
  {
    rank: "4", num: 4, label: "Four", roman: "IV",
    wands: {
      title: "Lord of Perfected Work",
      up: "Something is worth celebrating: a homecoming, a milestone, a place that finally feels settled. Enjoy it with the people who helped.",
      rev: "Home, or the group you count on, feels unsettled, or a celebration has tension under it. Repair the foundation before you plan the party.",
      kwUp: ["homecoming", "celebration", "community", "stability"],
      kwRev: ["instability", "family tension", "a delayed return", "insecurity"]
    },
    cups: {
      title: "Lord of Blended Pleasure",
      up: "You are bored or discontented, and an offer is sitting in front of you unnoticed. Look up from what is wrong and see what is being offered.",
      rev: "You are coming out of a slump and ready to engage again. Take the opportunity you overlooked before.",
      kwUp: ["apathy", "contemplation", "discontent", "a missed offer"],
      kwRev: ["renewed interest", "seizing an opportunity", "waking up", "gratitude"]
    },
    swords: {
      title: "Lord of Rest from Strife",
      up: "Rest, retreat, and recovery. Step back from the fight to recuperate.",
      rev: "Rest has gone on too long, or you are refusing the rest you need. Either get back up or let yourself stop.",
      kwUp: ["rest", "retreat", "recovery", "quiet"],
      kwRev: ["burnout", "restlessness", "forced withdrawal", "returning too soon"]
    },
    pentacles: {
      title: "Lord of Earthly Power",
      up: "Holding on tight to money, control, or security. Stability is good; gripping it so hard you cannot move is not.",
      rev: "You are loosening your grip, spending more freely, or letting go of control. Make sure it is release and not recklessness.",
      kwUp: ["security", "control", "saving", "holding on"],
      kwRev: ["greed", "miserliness", "letting go", "material obsession"]
    }
  },
  {
    rank: "5", num: 5, label: "Five", roman: "V",
    wands: {
      title: "Lord of Strife",
      up: "Competing wants, voices, or egos are pulling in different directions. Treat the friction as a workout rather than a war, and look for the useful idea in the noise.",
      rev: "The squabbling has either worn everyone out or is about to turn genuinely hostile. Step back from a fight that no longer has a point.",
      kwUp: ["competition", "disagreement", "friction", "clashing egos"],
      kwRev: ["petty bickering", "exhaustion", "avoiding conflict", "finding agreement"]
    },
    cups: {
      title: "Lord of Loss in Pleasure",
      up: "Grief and regret over what has been lost. Mourn it, and then notice what is still standing behind you.",
      rev: "You are starting to accept the loss and see what remains. Recovery and forgiveness are within reach.",
      kwUp: ["grief", "regret", "loss", "disappointment"],
      kwRev: ["acceptance", "recovery", "hope", "gratitude for what remains"]
    },
    swords: {
      title: "Lord of Defeat",
      up: "A win that costs more than it is worth: conflict, hostility, and a hollow victory. Ask whether being right was worth what it cost.",
      rev: "You are ready to walk away from a pointless fight, or to make amends after one. Take the exit.",
      kwUp: ["a hollow victory", "conflict", "hostility", "winning at a cost"],
      kwRev: ["forgiveness", "walking away", "healing resentment", "remorse"]
    },
    pentacles: {
      title: "Lord of Material Trouble",
      up: "Hardship, worry, and feeling left out in the cold. Help is closer than it looks if you will ask for it.",
      rev: "Recovery is beginning: shelter, support, and a return to steadier ground. Accept the help.",
      kwUp: ["hardship", "isolation", "financial strain", "feeling left out"],
      kwRev: ["shelter", "financial recovery", "rebuilding", "accepting help"]
    }
  },
  {
    rank: "6", num: 6, label: "Six", roman: "VI",
    wands: {
      title: "Lord of Victory",
      up: "You have earned a win and other people can see it. Accept the recognition without apologizing for it.",
      rev: "Recognition is late, missing, or hollow, and pride may be covering a private disappointment. Measure the win by what you did, not by the applause.",
      kwUp: ["victory", "recognition", "confidence", "pride"],
      kwRev: ["inflated ego", "a fall from favor", "hollow praise", "lost standing"]
    },
    cups: {
      title: "Lord of Pleasure",
      up: "Nostalgia, old friends, and the comfort of childhood memories. Let the past be sweet without moving back into it.",
      rev: "You are living in the past or refusing to grow up. Visit the memory and then come back to the present.",
      kwUp: ["nostalgia", "memories", "innocence", "kindness"],
      kwRev: ["stuck in the past", "immaturity", "rose-tinted memory", "moving on"]
    },
    swords: {
      title: "Lord of Earned Success",
      up: "A transition from rough water to calmer. Progress is quiet, but it is real; keep going.",
      rev: "You are stuck in transition, carrying baggage you cannot leave behind, or heading back into the storm. Commit to the far shore.",
      kwUp: ["transition", "calmer water", "relief", "moving on"],
      kwRev: ["baggage", "relapse", "a delayed move", "resistance to change"]
    },
    pentacles: {
      title: "Lord of Material Success",
      up: "Generosity flowing fairly, whether you are giving or receiving. Share without keeping score.",
      rev: "Charity with strings attached, or a power imbalance in who gives and who owes. Check what the generosity is really buying.",
      kwUp: ["generosity", "charity", "fairness", "support"],
      kwRev: ["strings attached", "power imbalance", "inequity", "debt"]
    }
  },
  {
    rank: "7", num: 7, label: "Seven", roman: "VII",
    wands: {
      title: "Lord of Valour",
      up: "You hold a position others are challenging, and you are right to defend it. Stand your ground, but pick the battles that matter.",
      rev: "Defending everything has exhausted you, and some of what you are guarding is not worth the fight. Lower the guard where you can and rest.",
      kwUp: ["standing your ground", "conviction", "defense", "courage under pressure"],
      kwRev: ["feeling overwhelmed", "exhaustion", "giving in", "defensiveness"]
    },
    cups: {
      title: "Lord of Illusionary Success",
      up: "Too many options, and some of them are only fantasies. Look hard at what each one really offers before you choose.",
      rev: "The daydreams are clearing and one real choice is coming into focus. Commit to it.",
      kwUp: ["daydreams", "too many options", "fantasy", "wishful thinking"],
      kwRev: ["clarity", "a clear choice", "realism", "decisive action"]
    },
    swords: {
      title: "Lord of Unstable Effort",
      up: "Strategy, stealth, or getting away with something. Cleverness has its place, but check whether you are deceiving others or yourself.",
      rev: "Deception is being exposed, or your conscience is catching up with you. Come clean before you are caught out.",
      kwUp: ["strategy", "stealth", "cunning", "discretion"],
      kwRev: ["getting caught", "exposed deception", "conscience", "confession"]
    },
    pentacles: {
      title: "Lord of Success Unfulfilled",
      up: "You have worked hard and are waiting for the harvest. Assess what is growing and be patient with what is not ready.",
      rev: "Impatience or disappointment with a slow return. Decide whether to keep investing or redirect your effort.",
      kwUp: ["patience", "assessment", "long-term effort", "perseverance"],
      kwRev: ["impatience", "wasted effort", "giving up early", "disappointment"]
    }
  },
  {
    rank: "8", num: 8, label: "Eight", roman: "VIII",
    wands: {
      title: "Lord of Swiftness",
      up: "Things are moving fast and in your favor. Expect quick news and quick progress, and keep your attention on the direction rather than the speed.",
      rev: "Delays, crossed messages, and haste are scrambling what should have been quick. Slow down enough to read what is actually in front of you.",
      kwUp: ["momentum", "quick news", "fast progress", "alignment"],
      kwRev: ["delays", "haste", "crossed messages", "frustration"]
    },
    cups: {
      title: "Lord of Abandoned Success",
      up: "You are leaving something that no longer satisfies you, even though it still looks fine from outside. The walk away is the point.",
      rev: "You are afraid to leave, or drifting without deciding, and you keep returning to what does not feed you. Either go or recommit.",
      kwUp: ["walking away", "searching for meaning", "a departure", "letting go"],
      kwRev: ["fear of leaving", "drifting", "clinging to comfort", "avoidance"]
    },
    swords: {
      title: "Lord of Shortened Force",
      up: "You feel trapped by thoughts and beliefs rather than real walls. The restriction is self-imposed, and the way out is in sight.",
      rev: "You are starting to see that you were never really bound. Step out of the limiting belief.",
      kwUp: ["feeling trapped", "limiting beliefs", "self-restriction", "helplessness"],
      kwRev: ["liberation", "new perspective", "freedom", "taking control"]
    },
    pentacles: {
      title: "Lord of Prudence",
      up: "Apprenticeship and craft: show up, do the work, and improve a little every day. Mastery comes through repetition.",
      rev: "Perfectionism or tedium has drained the care out of the work. Reconnect with why you do it, or change what you do.",
      kwUp: ["apprenticeship", "craft", "dedication", "diligence"],
      kwRev: ["perfectionism", "tedium", "cutting corners", "uninspired work"]
    }
  },
  {
    rank: "9", num: 9, label: "Nine", roman: "IX",
    wands: {
      title: "Lord of Great Strength",
      up: "You are tired and bruised but still standing, and the end is closer than it feels. Hold the line a little longer.",
      rev: "You are braced for a blow that may never come, and the vigilance is costing more than the danger would. Let the guard down where it is safe to.",
      kwUp: ["resilience", "persistence", "a last stand", "endurance"],
      kwRev: ["exhaustion", "hypervigilance", "paranoia", "walls too high"]
    },
    cups: {
      title: "Lord of Material Happiness",
      up: "Contentment and wishes fulfilled. Enjoy what you have built without hunting for the catch.",
      rev: "The satisfaction is shallow or smug, and something underneath still feels empty. Ask whether you are full or just comfortable.",
      kwUp: ["wishes fulfilled", "satisfaction", "contentment", "pleasure"],
      kwRev: ["smugness", "greed", "shallow comfort", "emptiness"]
    },
    swords: {
      title: "Lord of Despair and Cruelty",
      up: "Anxiety, sleepless nights, and catastrophic thinking. Most of the fears are larger in the dark than in daylight.",
      rev: "The nightmare is easing and you are learning to quiet your mind. Seek support and let the fears shrink.",
      kwUp: ["anxiety", "sleeplessness", "catastrophizing", "dread"],
      kwRev: ["relief", "coping", "finding support", "letting fear go"]
    },
    pentacles: {
      title: "Lord of Material Gain",
      up: "Self-sufficiency and earned comfort. Enjoy the independence you built.",
      rev: "The security looks better than it feels, or it depends on someone else more than you admit. Be honest about the numbers and about the loneliness.",
      kwUp: ["self-reliance", "comfort", "independence", "earned reward"],
      kwRev: ["a gilded cage", "vanity", "dependence", "loneliness in comfort"]
    }
  },
  {
    rank: "10", num: 10, label: "Ten", roman: "X",
    wands: {
      title: "Lord of Oppression",
      up: "You are carrying more than your share, and you are close to the finish. Set something down, or ask for help before you drop all of it.",
      rev: "You are either buckling under the load or finally putting some of it down. Delegate what you can and stop treating exhaustion as a virtue.",
      kwUp: ["burden", "overcommitment", "responsibility", "nearly there"],
      kwRev: ["delegation", "collapse", "dropping the load", "refusing martyrdom"]
    },
    cups: {
      title: "Lord of Perfected Success",
      up: "Lasting happiness in family, home, and community. This is the harmony the other cards were working toward.",
      rev: "Home life is strained, or the picture of perfection does not match what is going on inside it. Fix what is really happening rather than the image.",
      kwUp: ["lasting happiness", "family harmony", "community", "fulfillment"],
      kwRev: ["domestic discord", "a shattered ideal", "alienation", "false harmony"]
    },
    swords: {
      title: "Lord of Ruin",
      up: "Rock bottom: an ending that is painful but complete. There is nothing further to lose, and the dawn is already behind you.",
      rev: "You are surviving the worst and beginning to recover. Stop reliving the wound and let yourself rise.",
      kwUp: ["rock bottom", "a complete ending", "painful truth", "a new dawn"],
      kwRev: ["recovery", "survival", "the worst is over", "rising again"]
    },
    pentacles: {
      title: "Lord of Wealth",
      up: "Lasting wealth, family, and legacy. Build something that outlives the moment, or let yourself belong to what already does.",
      rev: "Family or financial trouble, an inheritance dispute, or a tradition that has become a burden. Have the practical conversation.",
      kwUp: ["legacy", "lasting wealth", "family", "security"],
      kwRev: ["family dispute", "a crumbling legacy", "financial burden", "mismanagement"]
    }
  },
  {
    rank: "page", num: 11, label: "Page", roman: "P",
    wands: {
      title: "Princess of the Shining Flame",
      up: "A new enthusiasm wants your attention: a message, a hobby, a bold idea. Follow it with curiosity and see where it points.",
      rev: "Enthusiasm is scattered or all talk, and nothing is being finished. Pick one spark and give it a week of real attention.",
      kwUp: ["enthusiasm", "curiosity", "a new idea", "adventure"],
      kwRev: ["flightiness", "procrastination", "empty promises", "impatience"]
    },
    cups: {
      title: "Princess of the Waters",
      up: "An intuitive message, a creative impulse, or a tender surprise. Stay open and curious about what you feel.",
      rev: "Emotional immaturity, moodiness, or escape into fantasy. Feelings are information, not verdicts.",
      kwUp: ["intuition", "creativity", "tenderness", "a surprise"],
      kwRev: ["fragility", "mood swings", "escapism", "drama"]
    },
    swords: {
      title: "Princess of the Rushing Winds",
      up: "Curiosity, sharp questions, and a hunger for truth. Stay alert, and think before you speak.",
      rev: "Gossip, defensiveness, or words used carelessly. Let a thought settle before you broadcast it.",
      kwUp: ["curiosity", "mental agility", "vigilance", "questions"],
      kwRev: ["gossip", "defensiveness", "careless words", "pettiness"]
    },
    pentacles: {
      title: "Princess of the Echoing Hills",
      up: "A practical beginning: studying, saving, learning a skill. Ambition here is quiet and steady.",
      rev: "Procrastination, or plans without any practice behind them. Start the unglamorous lesson.",
      kwUp: ["study", "practical ambition", "eagerness to learn", "a first step"],
      kwRev: ["procrastination", "lack of progress", "financial naivety", "wasted potential"]
    }
  },
  {
    rank: "knight", num: 12, label: "Knight", roman: "Kn",
    wands: {
      title: "Lord of the Flame and Lightning",
      up: "Act boldly and move fast; this is a card of charge, passion, and daring. Just check the direction before you floor it.",
      rev: "Recklessness, temper, or impatience is leaving wreckage behind. Slow down and ask what you are actually chasing.",
      kwUp: ["boldness", "passion", "action", "energy"],
      kwRev: ["recklessness", "temper", "impulsiveness", "burnout"]
    },
    cups: {
      title: "Lord of the Waves and Waters",
      up: "A romantic offer, an idealistic quest, or a charming messenger. Follow the heart, but check that there is a plan behind the charm.",
      rev: "Charm without follow-through, moodiness, or manipulation dressed up as romance. Judge by actions, not promises.",
      kwUp: ["romance", "idealism", "charm", "an invitation"],
      kwRev: ["fickleness", "manipulation", "disappointment", "moodiness"]
    },
    swords: {
      title: "Lord of the Wind and Breezes",
      up: "Fast, direct, and certain. Charge toward the truth, but check your mirrors; speed is not accuracy.",
      rev: "Ruthlessness, tactlessness, or arguments picked for their own sake. Certainty is not the same as being right.",
      kwUp: ["directness", "quick thinking", "drive", "candor"],
      kwRev: ["ruthlessness", "tactlessness", "reckless argument", "impulsiveness"]
    },
    pentacles: {
      title: "Lord of the Wide and Fertile Land",
      up: "Reliable, patient, methodical progress. It is not glamorous, but it arrives on time.",
      rev: "Stubbornness, workaholism, or a routine that has stopped leading anywhere. Change the part that is only habit.",
      kwUp: ["reliability", "endurance", "duty", "patience"],
      kwRev: ["stubbornness", "workaholism", "tunnel vision", "rigidity"]
    }
  },
  {
    rank: "queen", num: 13, label: "Queen", roman: "Q",
    wands: {
      title: "Queen of the Thrones of Flame",
      up: "Confidence, warmth, and energy that draws people in. Lead by being yourself and lift others as you go.",
      rev: "The warmth has turned demanding or jealous, or confidence has slipped into insecurity. Ask for what you need instead of performing that you need nothing.",
      kwUp: ["confidence", "warmth", "charisma", "leadership"],
      kwRev: ["jealousy", "drama", "insecurity", "demanding attention"]
    },
    cups: {
      title: "Queen of the Thrones of Water",
      up: "Deep empathy and emotional wisdom. Listen to your intuition and offer compassion without losing yourself in other people's feelings.",
      rev: "Absorbing everyone's emotions has left you drained or codependent. Tend your own feelings before you carry anyone else's.",
      kwUp: ["empathy", "intuition", "compassion", "emotional wisdom"],
      kwRev: ["codependency", "emotional manipulation", "martyrdom", "feeling overwhelmed"]
    },
    swords: {
      title: "Queen of the Thrones of Air",
      up: "Clear sight and honest boundaries. Say the true thing plainly and expect the same from others.",
      rev: "Clarity has turned cold, bitter, or cruel. The truth does not have to cut this deep.",
      kwUp: ["honesty", "clear boundaries", "independence", "insight"],
      kwRev: ["coldness", "cruel sarcasm", "bitterness", "isolation"]
    },
    pentacles: {
      title: "Queen of the Thrones of Earth",
      up: "Practical care: a home that works, money handled well, warmth you can feel. Provide it, and keep some for yourself.",
      rev: "Caring for everyone has left you depleted, or security has become anxious control. Tend your own needs too.",
      kwUp: ["practical care", "hospitality", "common sense", "comfort"],
      kwRev: ["self-neglect", "smothering", "status obsession", "anxiety about security"]
    }
  },
  {
    rank: "king", num: 14, label: "King", roman: "K",
    wands: {
      title: "Lord of the Flame and Lightning",
      up: "Lead with vision and nerve; you can see the whole picture and inspire others to build it. Delegate the details and keep your eye on the direction.",
      rev: "Vision has tipped into impatience, arrogance, or impossible demands on other people. Ask for less than everything and listen more than you speak.",
      kwUp: ["vision", "leadership", "boldness", "inspiration"],
      kwRev: ["arrogance", "impossible expectations", "temper", "domineering"]
    },
    cups: {
      title: "Prince of the Chariot of the Waters",
      up: "Calm in emotional storms: compassion balanced with control. Lead with steadiness and help others find theirs.",
      rev: "Feelings are being suppressed, manipulated, or vented sideways. Say what you feel directly instead of managing everyone around it.",
      kwUp: ["emotional balance", "compassion", "calm", "wisdom"],
      kwRev: ["volatility", "cold withdrawal", "passive aggression", "deceit"]
    },
    swords: {
      title: "Prince of the Chariot of the Winds",
      up: "Authority built on logic, fairness, and discipline. Decide on the evidence and hold to your principles.",
      rev: "Intellect used as a weapon: rigid, cynical, or tyrannical. Fairness without compassion is not fairness.",
      kwUp: ["intellect", "authority", "impartiality", "strategy"],
      kwRev: ["cruelty", "tyranny", "rigid thinking", "coldness"]
    },
    pentacles: {
      title: "Lord of the Wide and Fertile Land",
      up: "Steady abundance built with discipline. Share the method, not just the money.",
      rev: "Greed, rigidity, or neglect of the material side of life. Fix the foundation before the floor gives way.",
      kwUp: ["abundance", "discipline", "security", "generosity"],
      kwRev: ["greed", "stubbornness", "corruption", "neglect"]
    }
  }
];

const cards = [];

majorArcanaData.forEach(item => {
  cards.push({
    id: `maj_${String(item.num).padStart(2, "0")}`,
    num: item.num,
    name: item.name,
    number: item.roman,
    arcana: "major",
    suit: null,
    element: item.element,
    ruler: item.ruler,
    esotericTitle: item.esotericTitle,
    meaningUpright: item.upright,
    meaningReversed: item.reversed,
    keywordsUpright: item.kwUp,
    keywordsReversed: item.kwRev
  });
});

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
      ruler: null,
      esotericTitle: suitInfo.title,
      meaningUpright: suitInfo.up,
      meaningReversed: suitInfo.rev,
      keywordsUpright: suitInfo.kwUp,
      keywordsReversed: suitInfo.kwRev
    });
  });
});

const fileContent = `/**
 * The 78-card deck: 22 Major Arcana and 56 Minor Arcana across Wands, Cups, Swords, and Pentacles.
 *
 * GENERATED by build_cards_data.js. Do not edit this file; edit the generator and run
 * \`node build_cards_data.js\`.
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

// node build_cards_data.js --check: change nothing, and fail if js/cards.js is not what this would write
const outPath = path.join(__dirname, "js", "cards.js");
if (process.argv.includes("--check")) {
  const same = fs.readFileSync(outPath, "utf8").replace(/\r\n/g, "\n") === fileContent.replace(/\r\n/g, "\n");
  console.log(same ? "js/cards.js is up to date." : "js/cards.js differs from what build_cards_data.js would write.");
  process.exit(same ? 0 : 1);
}
fs.writeFileSync(outPath, fileContent, "utf8");
console.log(`Wrote js/cards.js with ${cards.length} cards.`);
