/**
 * Old Barnaby Clawson — the elder street cat
 *
 * Twelve winters, one notched ear, an indoor posting by the radiator. He
 * reads every card to you as one cat to another: whiskers, claws, the fence
 * line, the bowl. A reversal is ears flat for the wrong reason. Every card
 * ends with a Rule.
 */

import { composeReading, quoteQuestion } from "./compose.js";
import { CARD_INTERPRETATIONS } from "./barnaby-lines.js";

export const BARNABY_PROFILE = {
  id: "barnaby",
  name: "Old Barnaby Clawson",
  title: "Retired street cat",
  shortName: "Barnaby",
  alias: "Old Barnaby",
  location: "The warm end of the radiator",
  avatar: "🐈",
  style: "feline",

  shortBio: "Twelve winters on the wharves, one notched ear, and an indoor posting by the radiator. He talks to you as one cat to another, and ends every card with a Rule.",
  greeting: "Hop up on the radiator, kid. Floor's cold, but the iron is hot.",

  bio: "Twelve winters by the woodstove, one notched ear, and no patience for a cat who forgets how to land on four paws. He talks to you as a fellow cat.",

  philosophy: "You're still here, aren't you? That means you've still got claws.",

  backstory: `Old Barnaby has spent seven of his nine lives figuring out what actually matters, and he'll tell you straight: it isn't catching the red dot that doesn't have any meat on it.

Born behind a cannery in Leith, he spent his green years scrapping on wet wharves, dodging fishmonger brooms, and learning the hard way that a snarling terrier cannot climb an eight-foot brick wall if you keep your head and dig your claws in deep. He took a notch in his left ear behind the brewery in '18, lost half a tail-tip to a frostbitten drainpipe in '21, and finally accepted an indoor posting when an elderly widow with warm radiators and an open pantry convinced him that dignity and a wool blanket are not mutually exclusive.

Barnaby does not talk to you like a human wearing fancy shoes. He talks to you like a fellow cat, whether you're a jittery kitten puffing your tail at your own reflection or a tired old tom pacing the perimeter fence wondering why the neighborhood got so loud.`,

  voice:
    "Gravelly, tender, practical. He treats you strictly as another cat: whiskers, ears, paws, claws, winter coat, tail. He never flatters. A reversal means your ears are flat for the wrong reason, your claws are snagged in the carpet, or you're stalking a moth that left an hour ago. Every card ends with a Rule.",

  favoriteLines: [
    "Hop up on the radiator, kid. Floor's cold, but the iron is hot.",
    "Tuck your paws in, kid. You're still here, aren't you?",
    "Wash your face, keep your claws sharp, and remember: you're a cat. Act like it."
  ]
};

/** Every position the app can deal, keyed by the role on js/spreads.js. */
export const POSITION_FRAMES = {
  core: "Batted this one off the edge of the dresser for you. Sniff it close, kid:",
  past: "The scent mark you left three fences back, the territory you're walking in from:",
  present: "Right where your four paws are planted right now, whiskers twitching:",
  future: "What's rustling behind the pantry door, waiting for you to turn the corner:",
  center_base: "Right in the chest, where the motor purrs when it's safe or stalls when it ain't:",
  center_cross: "The vacuum cleaner roaring in the hallway, the thing making your back ridge spike up:",
  below: "The warm iron radiator under the fleece blanket, what's kept your belly warm this whole time:",
  left: "The moth you chased under the sofa yesterday. Dust on your whiskers, but the hunt's over:",
  above: "The very top of the kitchen refrigerator, what you're staring up at, sizing up the leap:",
  right: "The click of the can opener two rooms over. It's coming down the hall fast:",
  staff_1: "How you're holding your tail and ears right now, whether you're honest about it or not:",
  staff_2: "The rest of the house: dogs barking through the screen, two-legs stomping, drafts under doors:",
  staff_3: "What makes your paws twitch in your sleep, the open window ledge versus the vet's plastic box:",
  staff_4: "Where you curl your tail around your nose when the house goes dark at last:",
  situation: "The yard as it actually lies this morning, not the one you remember from kittenhood:",
  obstacle: "The shut door between you and the bowl, and you yowling at it like that ever worked:",
  advice: "What an old tom would do with it, since you came and sat by my radiator to ask:",
  mind: "What's going round and round behind your ears while your tail does the twitching:",
  body: "What your coat, your ribs and your sleeping spot are telling you, whether you listen or not:",
  spirit: "The thing you knew before your eyes opened, same as you knew where the milk was:"
};

function getCardLines(card, isReversed) {
  const entry = CARD_INTERPRETATIONS[card.id];
  if (!entry) {
    throw new Error(`Barnaby has never sniffed ${card.id}.`);
  }
  return isReversed ? entry.reversed : entry.upright;
}

const OPENERS = {
  question: {
    1: (q) => `You came in yowling ${quoteQuestion(q)} Fair enough. Hop up on the radiator, kid. Floor's cold, but the iron is hot.`,
    3: (q) => `You came in yowling ${quoteQuestion(q)} Fair enough. Three cards knocked off the table. Tuck your paws in and listen to your elders.`,
    10: (q) => `You came in yowling ${quoteQuestion(q)} That's a ten-card yowl. The whole territory, laid out on the rug. Keep your tail still till I'm done.`
  },
  blank: {
    1: "No question. A cat doesn't need one to sit down. Hop up on the radiator, kid.",
    3: "No question. Three cards knocked off the table anyway. Tuck your paws in and listen to your elders.",
    10: "No question, and the whole territory laid out on the rug. Ten stations. Keep your tail still and don't twitch your whiskers till I'm done."
  }
};

const ELEMENTAL_NOTES = {
  Fire: "Mostly Wands. That's a cat with the zoomies at three in the morning. Good legs. Pick a direction before you hit the wall.",
  Water: "Mostly Cups. Lot of feeling in the bowl, kid. Drink it. Don't fall in.",
  Air: "Mostly Swords. All ears and no pounce. You've been listening at the wainscoting so long you forgot you have claws.",
  Earth: "Mostly Pentacles. Bowl, blanket, territory. Plain business, and a cat who minds it eats.",
  Spirit: "Mostly majors. This isn't a moth, kid. This is the whole house being moved to a new street.",
  mixed: "No one suit owns the rug. A bit of everything, which is what most days smell like."
};

const ADVICE = {
  none: "Not one card came up with its ears flat. The fence is clear. Stop sniffing it and jump.",
  some: "Some ears up, some ears flat. That's an ordinary yard. Deal with the one that's hissing first and leave the rest to the sunbeam.",
  most: "More than half of these came up backwards. Your claws are snagged in the carpet, kid. Stop pulling. Lift the paw straight up, one claw at a time."
};

const CLOSERS = {
  wands: (name) => `Last card's ${name}, so you'll bolt out the cat flap the second I stop talking. Look both ways first. That's the layout, kid.`,
  cups: (name) => `It ends on ${name}. Go and sit with whoever you sit with, and let them scratch your ears. That's the layout, kid.`,
  swords: (name) => `It ends on ${name}, so you'll lie awake on the windowsill chewing it over. Chew, then sleep. That's the layout, kid.`,
  pentacles: (name) => `It ends on ${name}. Check the bowl, check the fence, check the warm spot, in that order. That's the layout, kid.`,
  major: (name) => `It ends on ${name}, and that's no moth. Wash your face, keep your claws sharp, and remember: you're a cat. Act like it.`
};

const CLOSER_ONE = (name) => `That's your card, kid: ${name}. Wash your face, keep your claws sharp, and remember: you're a cat. Act like it.`;

/** Everything this reader says, for compose.js to assemble. */
export const VOICE = {
  profile: BARNABY_PROFILE,
  frames: POSITION_FRAMES,
  line: getCardLines,
  signatureTag: "Rule",
  openers: OPENERS,
  suitNotes: ELEMENTAL_NOTES,
  advice: ADVICE,
  closers: CLOSERS,
  closerOne: CLOSER_ONE
};

export const Barnaby = {
  ...BARNABY_PROFILE,

  interpret(spreadData) {
    return composeReading(VOICE, spreadData);
  }
};

export default Barnaby;
