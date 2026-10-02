/**
 * Cal Navarro — The nightstand reader
 *
 * Thirty-eight. He used to perform in explicit films and left because the
 * moans were blocked like traffic. He reads from a walk-up, cards beside
 * the bed, and he says what he wants. The want is the reading. People sit
 * down on purpose. Stop means stop.
 */

import { composeReading, quoteQuestion } from "./compose.js";
import { CARD_INTERPRETATIONS } from "./cal-lines.js";

export const CAL_PROFILE = {
  id: "cal_navarro",
  name: "Cal Navarro",
  title: "Ex-performer, greedy on purpose",
  shortName: "Cal",
  alias: "Come Up",
  location: "A walk-up with the cards beside the bed",
  avatar: "🫦",
  style: "explicit",
  explicit: true, // sexually explicit in every reading; the app labels him

  shortBio: "He quit adult film when they faked the come in the edit, and he reads in a walk-up with the deck on the nightstand. Every card ends with what he wants done to him, or with his mouth.",
  greeting: "Sit on the bed. I want you. The card says where, and stop means stop.",

  bio: "Thirty-eight. He left explicit film when the come was faked in the edit and the moan was laid on after. He reads beside the bed and says what he wants, because the want is the reading.",

  philosophy: "I want you, and the card knows where.",

  backstory: `Cal Navarro is thirty-eight. He spent his late twenties performing in explicit films where the pleasure was scheduled and the sound was fixed in post. He left when a director told him to moan over a take in which nobody had actually come. He kept a tarot deck from a lover who said he was already doing readings, he was just using his mouth instead of the pictures.

He reads in the walk-up. The cards live beside the bed. He is greedy, specific, and a little shameless, and he still tells the truth about the card rather than using it as an excuse to grab. A reversal is the same hunger with the nerve dropped. The people who sit down came there to be wanted out loud. Stop means stop. He charges like a decent dinner, and he does not charge someone who is clearly spending their last courage on being honest.

Regulars call him Come Up, which is both the invitation and the joke. He answers to it.`,

  voice:
    "Second person, present tense, already in the room. He says what he wants done to him and what he wants to do. He never says the universe, a spirit guide, a twin flame, vibrational anything, your journey, as above so below, or that everything happens for a reason. Every card ends with a Want.",

  favoriteLines: [
    "Sit on the bed. I want you. The card says where, and stop means stop.",
    "I will tell you what I want. The card has to survive that.",
    "Stop means stop. The rest of this I mean.",
    "Keep the want if you keep only one."
  ]
};

/** Every position the app can deal, keyed by the role on js/spreads.js. */
export const POSITION_FRAMES = {
  core: "The card in front of us, and the exact place it puts my mouth:",
  past: "The sex you already had, still on you from the way you sat:",
  present: "Right now, in this room, with me looking at your mouth:",
  future: "What I would do next if you stayed:",
  center_base: "The center of it, where I would put my mouth and not rush:",
  center_cross: "The thing lying across your want, which I still want you through:",
  below: "What this grew out of, some earlier night your body remembers:",
  left: "What you just did, and I am jealous of whoever got it:",
  above: "The thing you are reaching for, which I want under your hand:",
  right: "What is coming toward you, met with my hands already busy:",
  staff_1: "The way you are sitting in it, which I would like to bend:",
  staff_2: "Everyone else around this, and the one I would steal you from:",
  staff_3: "What you hope I do to you, and what you are afraid you will beg for:",
  staff_4: "How this ends if you let me finish the way the card points:",
  situation: "The situation, which is you already hot and calling it a question:",
  obstacle: "What is in the way of me getting my mouth on the truth:",
  advice: "What I would do if you asked, and you are asking:",
  mind: "The thought I would like to fuck out of you, kindly and not:",
  body: "Your body in the chair, doing more honest work than your sentence:",
  spirit: "The underneath want, the one I would follow with my tongue:"
};

function getCardLines(card, isReversed) {
  const entry = CARD_INTERPRETATIONS[card.id];
  if (!entry) {
    throw new Error(`Cal does not keep ${card.id} beside the bed.`);
  }
  return isReversed ? entry.reversed : entry.upright;
}

const OPENERS = {
  question: {
    1: [
      (q) => `${quoteQuestion(q)} One picture for that. I want the answer in the voice you use with a hand already down your waistband.`,
      (q) => `${quoteQuestion(q)} Say it again like you are already on my cock or working your cunt against my mouth.`,
      (q) => `${quoteQuestion(q)} I heard the cleaned-up version. Give me the one that would get you in trouble if the neighbor heard.`,
      (q) => `${quoteQuestion(q)} A single card. I want to taste the question. I do not want a seminar about it.`
    ],
    3: [
      (q) => `${quoteQuestion(q)} Three cards. I want each answer off your mouth before you edit the fluids out for company.`,
      (q) => `${quoteQuestion(q)} Three pictures. I want the messy answer, the one that would stain a sheet.`,
      (q) => `${quoteQuestion(q)} Give me three. I will tell you what I want done with each, and you can refuse any of them out loud.`,
      (q) => `${quoteQuestion(q)} Three cards is enough for me to get specific about your mouth and mean the specifics.`
    ],
    10: [
      (q) => `${quoteQuestion(q)} Ten cards. A whole night. I am not rushing my mouth, and I am not rushing the ask.`,
      (q) => `${quoteQuestion(q)} You wanted the long version. I will be greedy in detail. One word from you and I stop.`,
      (q) => `${quoteQuestion(q)} Ten pictures. Take the blanket if you are cold. I want time to say the filthy parts slowly, against skin.`,
      (q) => `${quoteQuestion(q)} The full cross. I will not shrink what I want into something you could tell a friend with a straight face.`
    ]
  },
  blank: {
    1: [
      "Nothing written. You came to be looked at until it showed on you. I am looking, and I want a particular thing.",
      "No question on the nightstand. Sit. I can work from the set of your mouth and the hitch in your breath.",
      "You brought silence. I will put a want on the card. Take it, or leave it, but do not simper at it.",
      "Empty ask. You wanted my attention on your body. It is there. Do not spend it on a shy little performance."
    ],
    3: [
      "Three cards and an empty question. I will still find where you are hot, and I will say what I want done about it.",
      "You sat down without a sentence. Three pictures. I want the one that makes you throb, named out loud, in my room.",
      "No ask from you. I will read three and tell you which I want in my mouth. You can veto. You cannot hint.",
      "Silence, and three cards. That is a person hoping I will be the one who says the nasty part. I will. I like the job."
    ],
    10: [
      "Ten cards, and you gave me no sentence. You want to be studied until you leak. I have the night and a filthy attention span.",
      "The whole cross, nothing typed. I will supply the wants. You supply the yes, or the stop. Both are allowed. Fog is not.",
      "A long layout and a shut mouth. I like that. It means I get to be specific about holes and hands for a while.",
      "Nothing asked. Ten pictures. Lie back if you want the pillow. I am going to be greedy about the details and the pace."
    ]
  }
};

const ELEMENTAL_NOTES = {
  Fire: [
    "Wands have the room. Heat and hurry. I want it before either of us gets clever and loses the erection or the nerve.",
    "Fire is ahead. I want the fast version, your hands decisive, my mouth already open for whatever you are.",
    "The wands are loud. Impatience makes me stupid in a way I like, if you aim it at my body and not at a speech about chemistry.",
    "Mostly fire. I want to be rushed, a little roughly, and then I want the second time, when you are less proud of yourself."
  ],
  Water: [
    "Cups are in the bed. I want the tender filth, the kind where I can feel it in my chest and still be nasty with my mouth.",
    "Water is ahead. Feeling is going to get on my skin. I want that. I do not want a performance of being sensitive.",
    "The cups lead. Kiss me through whatever this is. If your eyes get wet I will not flinch, unless you use the tears to hide.",
    "Water everywhere. I want to be wanted softly and fucked on a specific spot. Both. I am greedy and I am not ashamed of the combination."
  ],
  Air: [
    "Swords are over-talking the amount of skin in this room. The argument is cockblocking me, and I resent it personally.",
    "Air is ahead. I want one true sentence and then a mouth on me. The rest of the analysis can wait in the hall with its clothes on.",
    "The blades have the spread. Anxiety, a sharp no, a strategy. Give me the no if you need it. Do not give me a debate while I am hard.",
    "Mostly air, which means you may try to win. I do not want to be won. I want to be had, after the true sentence, with the thinking dropped."
  ],
  Earth: [
    "Pentacles. Bodies, money, the slow craft of a fuck. I want the practical version, still obscene, repeated until my thighs trust it.",
    "Earth is ahead. I get off on competence. Pay for the time if time costs, learn the stroke, keep the door locked against the hallway.",
    "Coins everywhere. This want has a cost. I will name mine, including where I want to come. Name yours before anyone is embarrassed and bare.",
    "Mostly earth. I want the unglamorous fuck, the one that works on a tired night, done with your full attention on the face I am making."
  ],
  Spirit: [
    "The trumps lead. I want the whole night, not a polite excerpt you could describe to a friend without getting wet or hard again.",
    "Majors in the majority. Something in your life climbed into the bed with us. I still want you. I do not want to be your symbol or your omen.",
    "Big cards. I will take the serious want seriously, which includes where I want to come and whether you are staying after the mess.",
    "The great arcana showed up in the walk-up. I want the long, true version. No camera. No one fixing the sound after I make it."
  ],
  mixed: [
    "No suit is winning. I want you anyway. Nothing is directing us, so I will, unless you take my wrists and direct me yourself.",
    "An even split across the cloth. I want to pick a sequence with my mouth: heat, then feeling, then the practical filthy thing that takes an hour.",
    "Nothing owns the layout. That leaves me greedy and unassigned. Give me one part of you. I will be disgustingly thorough with it.",
    "The suits refuse to elect anyone. I want you under that confusion, not instead of it. We can be messy if we are also specific."
  ]
};

const ADVICE = {
  none: {
    light: [
      "Nothing turned over. I want the last thing I asked, done before you sand the slime off it for company.",
      "All upright. The hunger is obvious, including mine. Meet it with your hands. A cleaner synonym is an insult at this point.",
      "No reversals. I am not going to be coy about what I want from your mouth. Give me that. Sweet can come after, if we are still awake.",
      "Everything facing us. I want the plain act, the one you would be slightly mortified to describe and very glad to finish on me."
    ],
    heavy: [
      "Upright, and thick with majors. Stay. I want the whole night, including the stretch where you throb and feel painfully obvious.",
      "Nothing flipped, and the trumps are thick in it. Do not skip the card that drops your stomach. That is the one I want in my hands and against my tongue.",
      "The big cards came in straight. I want stamina and a noise you cannot perform. I have moaned on cue for a camera. I can hear a fake from the pillow.",
      "Heavy and upright. I want to be used for the whole plot of it, not a polite scene you can abandon when your nerve gets decent."
    ]
  },
  some: {
    light: [
      "A few cards turned. Ordinary night in this room. Take the upright want in your hands first. The turned one is where you perform for me instead of feel me.",
      "Mixed facing. I want the clear act while the nerve is cheap. We can get to the flinch after I have come once and stopped showing off.",
      "Some of them flipped. I still want you. Start where the picture is plain, and do not use the murky card as a reason to keep your trousers on.",
      "A few reversals, nothing operatic. I want the straightforward filth before we negotiate the complicated filth. My mouth is available for both."
    ],
    heavy: [
      "Big pictures, some of them turned. Start where your nerve failed. That is the come you keep parking, and I am tired of waiting beside the parking.",
      "Majors, and a few on their backs. I want the reversed one first. It is the place you will not look at me while you do it.",
      "Heavy, partly flipped. I want the difficult want, the one that makes you feel seen and a bit disgusting, before the easy grind.",
      "The big furniture moved and some of it fell. I want us to start in the wreck, with my hands on you, not in the card that flatters your posture."
    ]
  },
  most: {
    light: [
      "Most of them turned. You want it, and you keep parking me in the hallway with my cock or my mouth out. Choose one act and let us both finish.",
      "Reversals have the majority. I want a decision more than I want another almost against my thigh. Put me in your mouth or button me up and go.",
      "The cloth is largely on its back. I am still willing, and I want one completed thing. I do not want a guided tour of your hesitations.",
      "Too many flips for a simple grind. I want the smallest true act, done all the way, sweat on my chest included, no essay after."
    ],
    heavy: [
      "Majors, mostly on their backs. Do not blow up a life in my sheets. I want one small true thing, completed, and then I want you to sleep on the wet side.",
      "The big cards flipped. I have detonated a life for a fuck, and the fuck was not worth the smoke. I want one honest act and the door locked.",
      "Heavy reversals. I want you to change nothing enormous. Use your hand, tell me the truth, come if it is actually there, and leave the marriage or the job for daylight.",
      "The trumps are upside down. I want the night smaller than your panic. One filthy kindness, finished on my body. Then water, and sleep, and no speeches."
    ]
  }
};

const CLOSERS = {
  wands: [
    (name) => `I am keeping ${name} in my mouth on the way out. You will want it fast. Let it be fast, then put me through it again before you get shy.`,
    (name) => `${name} makes me impatient in the dick and in the mouth. I want the hurried version, your hands rude, and then the second time when you are less proud.`,
    (name) => `Take ${name} as a shove. I want to be rushed until I make a sound I was never able to perform for a camera. Then I want you to stay.`,
    (name) => `${name} is heat on my stomach. I want it struck there, not discussed into ash. Fast, a little clumsy, honest about the mess.`
  ],
  cups: [
    (name) => `${name} is where I get tender and filthy in the same breath. Kiss me through it until I stop performing the face that photographs well.`,
    (name) => `I want ${name} felt on my skin, not acted at me. If your eyes get wet I still want your hand on my cock or in me.`,
    (name) => `${name} asks for feeling, and I am saying yes. I want to be loved sloppily and on a specific inch, come included, no joke after to kill it.`,
    (name) => `Keep me inside ${name}. I want the emotion to stay in the room while I finish, even if the noise I make is unbecoming.`
  ],
  swords: [
    (name) => `${name} ends on the truth. I want that more than I want to be liked, and I still want you on top of me after the sentence lands.`,
    (name) => `I want the sharp line from ${name} said against my neck, where I can feel the breath. Then fuck the consequence. Do not flee it with your trousers in your hand.`,
    (name) => `${name} cuts, and I get harder for a true noun than for a moan you copied off someone who was paid to sound like that.`,
    (name) => `Say what ${name} is insisting on, into my mouth if you have to. I can take a no. I cannot come inside a fog.`
  ],
  pentacles: [
    (name) => `${name} is the slow craft on my body. I want the version that ruins the sheets and still makes sense when we are hungry and sticky in the morning.`,
    (name) => `I want ${name} repeated until my body trusts your hands. Competence is the filth I actually fall apart for. Do not rush the job to look passionate.`,
    (name) => `${name} costs time, and I want you to spend it on my actual skin, not on the idea of being impressive in bed.`,
    (name) => `Give me ${name} as work: the door locked, the stroke learned, a glass of water after. I want to be done properly, like you respect the come.`
  ],
  major: [
    (name) => `${name} is bigger than a position I can demonstrate. I want the whole night, not a polite version I could have filmed with the sound turned off.`,
    (name) => `I will not shrink ${name} into a trick for the highlight reel. I want it to change what we do with our mouths after we leave this mattress.`,
    (name) => `${name} stays with me past the reading. Lock the door if you are staying. I want the serious fuck, noises left unedited, nobody calling cut.`,
    (name) => `What ${name} wants from my body is not small. I want you here for all of it, including the ugly grateful part after I come.`
  ]
};

const WEIGHT = {
  heavy: [
    "The trumps showed up in the walk-up. I want the long night, the one where I actually come and nobody patches the sound in an edit.",
    "Big cards beside the lamp. This is not a quick grind against the mattress. I want the version that is still on my skin when it gets light.",
    "The majors took the bed. I am not pretending this is a polite clip from a filthier life. I want the filthier life, for as long as you stay.",
    "Heavy pictures. They ask for stamina and a noise that is mine. I faked the noise for cameras. I will not fake it with your hand on me."
  ],
  light: [
    "The minor pictures, a body on an ordinary evening. I still want it. People tell the truth when nobody has booked a crew.",
    "Courts and pips. Hands, habits, the fuck you could have after a shift and still sleep. I want that one. It is ruder than the epic, because it is real.",
    "Skipping the trumps. What I want is the hunger that shows up after a shift, when nobody is mythologizing the lay. That is the one I fall apart in.",
    "A modest spread and an immodest want from me. I like that ratio. Give me the plain act done with attention and I will not beg you for fireworks."
  ]
};

const CLOSER_ONE = [
  (name) => `${name} is the whole want. Stay if you mean it, and put your hand where I asked before you start narrating.`,
  (name) => `One picture. ${name}. I want that, on that part of me, and I want you to say so before you touch it.`,
  (name) => `${name} named the act. I am not laundering it into romance. Come here and do it, or do not. Both are cleaner than a maybe.`,
  (name) => `You have ${name}. I want it in my mouth or across my chest, whichever it was rude about. Say stop and I stop. Say nothing and I will ask again.`
];

/** Everything this reader says, for compose.js to assemble. */
export const VOICE = {
  profile: CAL_PROFILE,
  frames: POSITION_FRAMES,
  line: getCardLines,
  signatureTag: "Want",
  openers: OPENERS,
  weight: WEIGHT,
  suitNotes: ELEMENTAL_NOTES,
  advice: ADVICE,
  closers: CLOSERS,
  closerOne: CLOSER_ONE
};

export const CalNavarro = {
  ...CAL_PROFILE,

  interpret(spreadData) {
    return composeReading(VOICE, spreadData);
  }
};

export default CalNavarro;
