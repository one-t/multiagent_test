/**
 * Sable Moreau — The bed reader
 *
 * Thirty-four. She used to write the spoken parts for a phone-sex line and
 * quit when the script said giggle where the truth was say what you want.
 * She reads upstairs after the bar closes. People come to the bed on purpose.
 * A card is an order: one explicit thing to do, tied to what the picture means.
 */

import { composeReading, quoteQuestion } from "./compose.js";
import { CARD_INTERPRETATIONS } from "./sable-lines.js";

export const SABLE_PROFILE = {
  id: "sable_moreau",
  name: "Sable Moreau",
  title: "Orders from an unmade bed",
  shortName: "Sable",
  alias: "Upstairs",
  location: "The room above the bar, after last call",
  avatar: "💋",
  style: "explicit",
  explicit: true, // sexually explicit in every reading; the app labels her

  shortBio: "She wrote phone-sex copy until a boss circled cunt and wrote softer, so she quit and took the deck upstairs. She reads in the bed after last call, and every card ends as an order.",
  greeting: "Shoes off on the landing. I did not come up here to hear the cleaner version.",

  bio: "Thirty-four. She quit a phone-sex line when the script told her to giggle instead of say cunt, cock, and the true verb. She reads in bed, after the bar closes, and every card ends as an order.",

  philosophy: "Say the filthy part out loud.",

  backstory: `Sable Moreau is thirty-four. For six years she wrote and spoke the dirty copy for a phone line that wanted moans in the places where a true sentence would have done more. She quit the night a supervisor circled the word cunt and wrote softer. She kept the deck a regular had sent her as a joke and started reading it upstairs, in the bed, for people who already knew why they had climbed the stairs.

She does not do fate. She does the picture and then the act the picture is being polite about. A reversal is the same want with the nerve gone missing. She is explicit the way a competent lover is explicit: she names the body, the pace, the fluids, and the thing you are avoiding. Stop means stop. The people in the bed came there on purpose.

Regulars call her Upstairs. She answers if you are already honest. She charges what the bar charges for a good bottle, and she waives it when someone is spending the last of their nerve on the truth instead of on a performance.`,

  voice:
    "Second person, present tense, in the bed. She gives orders. She names the act. She never says the universe, a spirit guide, a twin flame, vibrational anything, your journey, as above so below, or that everything happens for a reason. Every card ends with an Order.",

  favoriteLines: [
    "Shoes off on the landing. I did not come up here to hear the cleaner version.",
    "I will say the filthy part. You will stop translating it into something nicer.",
    "Stop means stop. Everything else I say, I mean.",
    "Keep the order if you keep only one."
  ]
};

/** Every position the app can deal, keyed by the role on js/spreads.js. */
export const POSITION_FRAMES = {
  core: "One card, said the way you would say it with your clothes off:",
  past: "What you already let someone do, still on your mouth:",
  present: "Right now, while you pretend this is about anything but want:",
  future: "Where your body goes if you stop negotiating with it:",
  center_base: "The thing you actually want, under the polite sentence:",
  center_cross: "What is crossing your legs and calling itself a problem:",
  below: "Under the question, the old fuck you keep returning to:",
  left: "What just happened, still slick, still yours:",
  above: "The fuck you are aiming at and refusing to ask for:",
  right: "What is about to get its hands on you:",
  staff_1: "The grip you have on your own want, visible from the bed:",
  staff_2: "The other people in this, and what they do to your attention:",
  staff_3: "The hunger you hope I will order, and the flinch beside it:",
  staff_4: "Where you end up if you come the way you always come:",
  situation: "The situation, which is hornier than the story you told:",
  obstacle: "What is keeping you from the fuck you already described:",
  advice: "What to do with your mouth if you stop performing shy:",
  mind: "The filthy thought you keep editing into something nicer:",
  body: "Your body, which already voted and is waiting on your manners:",
  spirit: "The part of you that wants it without a speech:"
};

function getCardLines(card, isReversed) {
  const entry = CARD_INTERPRETATIONS[card.id];
  if (!entry) {
    throw new Error(`Sable does not keep ${card.id} under the sheet.`);
  }
  return isReversed ? entry.reversed : entry.upright;
}

const OPENERS = {
  question: {
    1: [
      (q) => `You said ${quoteQuestion(q)} One card. I heard the part you kept your hand over.`,
      (q) => `You said ${quoteQuestion(q)} I am not translating that into something you could repeat with your knickers on.`,
      (q) => `You said ${quoteQuestion(q)} Put the filthy noun back in. Then we look at the card.`,
      (q) => `You said ${quoteQuestion(q)} One picture. I will read the wet version, not the one for your mother.`
    ],
    3: [
      (q) => `You said ${quoteQuestion(q)} Three cards. I am going to be ruder than the question and more specific about the hole.`,
      (q) => `You said ${quoteQuestion(q)} Three cards on the sheet. Keep your knees apart while I talk.`,
      (q) => `You said ${quoteQuestion(q)} I will take that apart until the want is naked and a little mortifying.`,
      (q) => `You said ${quoteQuestion(q)} Three orders, if you can stay honest that long. We will see where you clench.`
    ],
    10: [
      (q) => `You said ${quoteQuestion(q)} Ten cards is a long time to pretend you climbed up here for advice.`,
      (q) => `You said ${quoteQuestion(q)} Ten pictures. Get comfortable. I am going to name what your mouth keeps swallowing.`,
      (q) => `You said ${quoteQuestion(q)} A whole cross. I get to be thorough, and you do not get to finish early and call it done.`,
      (q) => `You said ${quoteQuestion(q)} Stay. Ten cards is long enough for me to find the act you are ashamed of wanting.`
    ]
  },
  blank: {
    1: [
      "No question. Good. Your cunt or your cock already asked, and it was filthier than anything you would have typed.",
      "Nothing on the slip. Sit on the sheet. I can read a clench from here.",
      "You brought no sentence. Open your mouth anyway. The card can be the ask, and I will make it rude.",
      "No question, which means you wanted to be told. I tell people what to do with their hands. That is the work."
    ],
    3: [
      "Three cards and no question. I will find where you are slick or hard, and I will not be delicate about the finding.",
      "You climbed up with nothing typed. Three pictures. I am putting an order on each one, including the one you hope I skip.",
      "Silence instead of a question. Bold, or cowardly. Three cards will show me which, and where you want a mouth.",
      "No sentence from you. I will use three cards and the set of your thighs. Uncross them."
    ],
    10: [
      "Ten cards, and you typed nothing. You want to be looked at until you squirm. Sit where the lamp hits your mouth.",
      "A full cross and an empty question. Good. I have time to be obscene in detail, fluids included.",
      "You brought the long layout and no ask. That is someone who wants to be undressed slowly and told the nasty truth.",
      "Nothing written. Ten pictures. Shoes off. This is the version where I do not rush the filthy part or let you."
    ]
  }
};

const ELEMENTAL_NOTES = {
  Fire: [
    "Wands have the bed. Heat, will, and someone who is going to shove it in before the sentence is finished.",
    "The fire suit is loud in here. Hunger with no patience. I will set the pace before you scorch a perfectly good fuck.",
    "Wands own the cloth. Cockiness, and a match already struck. Aim it at a body. An argument does not have a clit.",
    "Fire everywhere. This spread wants speed. Speed is fine if your hands know the spot. If they do not, you wait for my order."
  ],
  Water: [
    "Cups are running this fuck. Feeling will get in the bed with the fluids, which is either intimacy or a mess you refuse to name.",
    "Cups have the majority. Somebody is going to cry and come close together, and you will not mock either in my bed.",
    "Water has the sheet. The want is tender and filthy at once. Do not pick one so you can stay respectable.",
    "The cups outnumber the rest. This is soak, not spark. Let it be wet in both senses or get off my sheet."
  ],
  Air: [
    "Swords are talking over the body, and the body is pissed off and still horny. Shut the argument up long enough to fuck.",
    "Swords have the room. Too much mind for the amount of skin. The cleverness is cockblocking you, and I am bored of it.",
    "Air has the layout. You will want to win a point. The point will not get anyone off. Say the true sentence, then use your mouth for something wetter.",
    "The blades are in charge. Anxiety, strategy, a sharp no. A sharp no is sexier than a foggy yes. Then do the yes like you mean the hole."
  ],
  Earth: [
    "Pentacles have the bed. Skin, money, work, the hunger you can pay for. It is still a hunger. Do not spiritualize a hard-on that wants a room and an hour.",
    "Earth is leading. Practical filth: the lock, the rent, the hand that knows the job. I respect that more than a speech about passion.",
    "Coins everywhere. This fuck has a cost and a craft. Pay for the room if you must. Then stay long enough to get good at their body.",
    "Pentacles own the cloth. Bodies as fact, not metaphor. Sweat, sore hips, a calendar. The practical order is the obscene one."
  ],
  Spirit: [
    "The trumps are in the bed. This is not a quick one behind the bar. The big pictures change how you fuck, and they are rude about the time it takes.",
    "Majors out in front. I will not call it fate. These are the cards that rearrange a sex life. Treat them like a long night, not a joke you tell downstairs.",
    "The great arcana took the cloth. Whatever you climbed up here for, it is larger than a position. Stay for the part that scares you into honesty.",
    "Big cards, the ones whose names you already flinch at. I am not making them dainty. They get the same filth as a plain blowjob, only kept."
  ],
  mixed: [
    "No suit is directing. The want is real and the scene has no one on top yet. Someone has to say where the mouth goes. That can be you. Until then it is me.",
    "Even mix. Heat, feeling, argument, and the rent, all trying to fuck at once. Name a director before it turns into a pile of limbs.",
    "Nothing owns the sheet. That can be freedom or a sloppy mess. I will give the orders until a suit earns them.",
    "The suits are split. Your body is not. Start with the card that made you throb and let the others wait with their clothes on."
  ]
};

const ADVICE = {
  none: {
    light: [
      "Nothing came up reversed. The want is naked on the cloth. Do the order that made you flush before you turn it into a joke for the bar.",
      "Every card face-up. You do not get to claim you misread your own crotch. Obey the sharpest order while you are still wet or hard.",
      "Upright, the lot of them. Stop negotiating with a body that already voted. The order you want to skip is the one I mean.",
      "No reversals. That is not permission to be coy. Follow them as they landed, including the one that names the hole."
    ],
    heavy: [
      "Upright, and most of it huge. Follow the orders in the order they landed. Do not skip the one that makes your face do something honest.",
      "All face-up and heavy with the big cards. This is a long obedience, not a single trick. Start at the first flush and do not edit the act.",
      "The trumps came in straight. The night is large and it is telling the truth. Take the order that scares you and finish it before the charming one.",
      "Clean and heavy. Do not turn a major into a metaphor so you can avoid the act. The act is the reading. Fluids count as comprehension."
    ]
  },
  some: {
    light: [
      "Some of these are turned. Fuck the upright one first. The reversed picture is the performance you keep selling as a preference.",
      "A few cards on their backs. Ordinary. Do the face-up order with your hands before you psychoanalyze the turned one into safety.",
      "Mixed orientation. The upright card is the yes. The reversed card is where you fake the moan. Start with the yes if you are shaky. Do not skip the fake.",
      "Not all of them are looking at you. Put the one that is into your body. The turned card waits until you stop performing shy with your knees together."
    ],
    heavy: [
      "Big cards, a few of them turned. Start with the reversed one. That is the orgasm you keep replacing with a nicer sentence.",
      "The trumps are here and some of them flipped. The flipped one is the filthy thing you call a problem. Do a small piece of it until you mean it.",
      "Heavy, and not all upright. The turned major is the position you avoid because you come too hard from it and then have to be a person. Begin there.",
      "A few of the big pictures are upside down. Put your mouth on the reversed order and stay until your voice breaks. Skip the philosophy."
    ]
  },
  most: {
    light: [
      "More than half of them flipped. You are soaked or hard and you are stalling. Pick one act and finish it before you leave this room.",
      "Reversals have the majority. That is heat with the nerve dropped out of it. One order, done all the way, beats a speech about why you cannot.",
      "Most of the small cards came in turned. You want it and you are arranging not to have it. Stop arranging. Use your hand if nobody else is in the bed.",
      "The cloth is mostly on its back. Desire, plus the retreat. Choose the order you can actually survive and complete it. Leave the rest for a braver night."
    ],
    heavy: [
      "The big cards, and most of them reversed. Do not detonate your life from a soaked chair. One small filthy thing, done completely, then come back upstairs.",
      "Majors on their backs. The impulse will be to blow up a marriage, a job, a body. Do not. Obey the smallest order in the room and wash your hands after.",
      "Heavy and reversed. This is not the night you rewrite your whole way of fucking. It is the night you do one true act and stop performing the catastrophe.",
      "The trumps flipped. I have watched people ruin a good lay by turning it into a destiny. Do the order that fits in an hour. Then sleep in the wet spot you earned."
    ]
  }
};

const CLOSERS = {
  wands: [
    (name) => `Keep the order on ${name}. Do it hot, a little too fast, and do not apologize while you are still dripping.`,
    (name) => `${name} goes downstairs in your body. Fuck like the match is already struck, then shut up about whether it was polite.`,
    (name) => `Take ${name} with you. Speed and nerve. Come before you talk yourself gentle and put your clothes back on.`,
    (name) => `${name} is the order I want kept. The hurried filthy version. Sweat is allowed. A speech after, with your hand still shiny, is not.`
  ],
  cups: [
    (name) => `Keep what ${name} told you. Let yourself feel it while you come, which is the part you skip so you can stay in charge of your face.`,
    (name) => `${name} stays on the sheet. I want the feeling inside the fuck, not rinsed off after. Cry if it is that kind. Do not joke it into a bit.`,
    (name) => `The order from ${name} is tenderness with the fluids still honest. Feel it in your chest and in your cunt or cock at the same time.`,
    (name) => `${name} does not want a mechanical finish. Stay present while it happens. The emotion is not a side dish. It is the act.`
  ],
  swords: [
    (name) => `Keep the order on ${name}. Say the true sentence while you are still inside the act. Then be quiet and finish.`,
    (name) => `${name} is the one I will not let you argue into mush. Use the real noun with your mouth full or your hand busy.`,
    (name) => `Take ${name} seriously. The truth gets said during the fuck, not in a text once you are brave and dressed and far away.`,
    (name) => `${name} cuts. Speak the sharp thing while someone can still hear it against your skin. Then stop talking and come.`
  ],
  pentacles: [
    (name) => `Keep the order on ${name}. Make it physical, make it last, and pay for the room if that is what the fuck actually requires.`,
    (name) => `${name} is practical and still obscene. Book the time. Learn the body. Do not call a rushed grind a life you are building.`,
    (name) => `The order from ${name} costs something: money, hours, or a sore honest muscle. Pay it. Then do it again, slower, until they shake.`,
    (name) => `${name} wants the craft, not the speech. Hands, repetition, a locked door. Stay until you are actually good at that specific body.`
  ],
  major: [
    (name) => `Keep the order on ${name}. This one changes how you fuck, not only who you fuck. I am not repeating it on the landing.`,
    (name) => `${name} is not a position you try once. It is a correction to the way you come. Obey it in the next bed, not only this one.`,
    (name) => `What ${name} ordered will still be true when the bar opens. Change the act. A new costume will not save you.`,
    (name) => `${name} is the one you keep if you are only going to keep one. It rearranges the sex, which is why you will want to forget it in the shower.`
  ]
};

// Said after the cards, when there are three or more: how heavy the spread is
const WEIGHT = {
  heavy: [
    "The big cards got into the bed. This is not a quick rub and a thank-you. They change the way you come, and they take the whole night to do it.",
    "Majors, piled on the sheet with us. The fuck in front of you rearranges the room. Do not ask me for a polite little finish and a glass of water.",
    "The trumps outnumber the rest, which means your clit, your cock, and your calendar are all too small for this. Stay until the sheets confess.",
    "Heavy pictures in the bed. The kind that do not let you wipe off and call it a mood. I want the long, soaking version of every order."
  ],
  light: [
    "The everyday cards, which is how people actually fuck: on an ordinary night, with the bar still noisy under us. Do not look relieved. Ordinary is where the truth leaks out.",
    "Pips and courts, not the great disasters. Skin after work. That is when someone finally says the word they have been swallowing with their dinner.",
    "The little cards are running this. Hands, rent, a mouth on a plain night, not the end of a life. Still do the order all the way. Small is where people get honest and wet.",
    "Not the great arcana. The daily hunger. A finger, a filthy text, the way you sit after a shift. Obey it. People lie in epics and tell the truth in an unmade bed."
  ]
};

// The closing for a single card, where there is no "last card" to point at
const CLOSER_ONE = [
  (name) => `${name} is the only picture I needed. Put your hand where it already went and follow the order until you shake.`,
  (name) => `One card. ${name}. Get your fingers wet and do the order without swapping in a nicer noun.`,
  (name) => `${name} said the filthy part. Now you say it into the pillow while you finish, out loud, so I know you heard me.`,
  (name) => `You have ${name} and one order. Use your mouth, your cunt, or your fist, whichever it named, and stay until you mean the mess.`
];

/** Everything this reader says, for compose.js to assemble. */
export const VOICE = {
  profile: SABLE_PROFILE,
  frames: POSITION_FRAMES,
  line: getCardLines,
  signatureTag: "Order",
  openers: OPENERS,
  weight: WEIGHT,
  suitNotes: ELEMENTAL_NOTES,
  advice: ADVICE,
  closers: CLOSERS,
  closerOne: CLOSER_ONE
};

export const SableMoreau = {
  ...SABLE_PROFILE,

  interpret(spreadData) {
    return composeReading(VOICE, spreadData);
  }
};

export default SableMoreau;
