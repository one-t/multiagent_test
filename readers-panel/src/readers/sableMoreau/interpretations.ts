import type { Orientation } from "../../types";

export interface CardVoiceLines {
  upright: string;
  reversed: string;
}

/**
 * Sable Moreau's read on every one of the 78 cards, upright and reversed.
 * Keyed to match CardId.key from the panel deck. The text matches the altar.
 */
export const INTERPRETATIONS: Record<string, CardVoiceLines> = {
  "major-0": {
    upright:
      "You want a beginning with your knees already open and no speech prepared. The Fool steps off because staying dressed in the old story is worse. Start the fuck clumsy and honest. Order: “Get your mouth on me and start before you invent a plan.”",
    reversed:
      "You keep almost starting. You get wet or hard and then you schedule the want to death. A leap you only rehearse is fear with its hand in its pants. Order: “Tonight you start, or you admit you like the ache of almost.”",
  },
  "major-1": {
    upright:
      "Everything required is already in the room: your mouth, your hands, the nerve. The Magician is focus, not a costume. Point all of it at one body and stop warming up. Order: “One person. Both hands. Finish what you put in.”",
    reversed:
      "All performance, no fuck. You talk a filthy game and fold the moment someone believes you. Tools on the table mean nothing if you only wave them. Order: “Stop announcing it. Put your fingers to work.”",
  },
  "major-2": {
    upright:
      "You already know who you want under you. You came upstairs so I would say it while you pretend a card did. Sit quiet, hand honest, and listen to your own cunt or cock. Order: “Five quiet minutes. Then say the name out loud.”",
    reversed:
      "You are using mystery as lingerie and refusing to take it off. A secret is hot until it is just you hiding the wet spot. Open the thing. Order: “Tell the secret in bed, with the light on.”",
  },
  "major-3": {
    upright:
      "Something in you wants to be fed, fucked, and admired until it shows. The Empress is the body when it is generous. Eat. Come. Be abundant instead of decorative. Order: “Come more than once, and mean the second one.”",
    reversed:
      "You have been starving the garden and calling the hunger discipline. Your tits, your stomach, your want are tired of being a picture. Rest is part of getting properly fucked. Order: “Eat, sleep, then let someone take their time on you.”",
  },
  "major-4": {
    upright:
      "Somebody has to run the fuck, and tonight it can be you without a hostage scene. A word for stop, a word for more, then your hips. That is the whole empire. Order: “Set the rule. Enforce it with your hips, not a speech.”",
    reversed:
      "You are gripping the headboard because the real want will not sit still. Clenched teeth are not command. Loosen the jaw. Keep the boundary. Order: “Keep one limit. Drop the rest of the performance.”",
  },
  "major-5": {
    upright:
      "There is a boring way to touch someone that works because bodies invented it before your clever idea. Ask, go slow, repeat the stroke that made them swear. Clever is how people skip the clit. Order: “Do the obvious stroke until they shake. Then do not stop.”",
    reversed:
      "The old script is rotten, or you have outgrown the position they put you in. Leave it on purpose. Do not heckle from the doorway half dressed. Order: “Quit the role in bed you have been faking.”",
  },
  "major-6": {
    upright:
      "A real choice, not a vibe. Two bodies, or two ways of being had, and you do not get both plus a whine. Choose the one you can still want on a Wednesday. Order: “Choose. Take your clothes off for that one only.”",
    reversed:
      "You are split and calling the split chemistry. Two beds, one coward. That is not a kink until everybody knows. Order: “Pick a body, or tell both the truth before anyone comes.”",
  },
  "major-7": {
    upright:
      "Aim the want and drive. The Chariot is both horses pulling one way: your hunger and your follow-through. Get there. Do not narrate the trip while someone is waiting wet. Order: “Pick the destination. Fuck toward it.”",
    reversed:
      "You are yanking in two directions and calling it passion. Scattered lust just chafes. One direction, or you are only making noise against a thigh. Order: “Drop one pursuit before you get undressed.”",
  },
  "major-8": {
    upright:
      "The hot thing is not force. It is your hand steady while your impatience pants, voice low, staying until they open. Strength comes soft and does not quit. Order: “Slow your mouth. Stay until they ask for more.”",
    reversed:
      "You are forcing the pace or going limp to avoid your own strength. Both refuse the room. Gentle is not the same as absent. Order: “Touch like you could break them, and do not.”",
  },
  "major-9": {
    upright:
      "Take the want somewhere with a lock. The Hermit is your hand, the dark, and the truth about what you picture when you come. Learn yourself before you audition. Order: “Get yourself off alone. Remember the exact stroke.”",
    reversed:
      "Solitude has become a hiding place with better lighting. Someone is waiting and you are scared, which you are calling depth. Order: “Leave the cave tonight, or send an honest no.”",
  },
  "major-10": {
    upright:
      "The wheel turns and suddenly you are the one who is wanted, and it will turn again. Luck in bed is real and it is not a personality. Ride it while it faces you. Order: “Take the lucky fuck. Do not manage it.”",
    reversed:
      "You are clinging to a spin that ended, or forcing a turn that is not yours. Bad timing is you refusing the rotation. Order: “Get off the position that stopped getting you wet.”",
  },
  "major-11": {
    upright:
      "Tell the truth about what you did with your body and what you want next. Who came, who did not, who was pretending. Then balance the account with your mouth. Order: “Name what you owe in bed and pay it tonight.”",
    reversed:
      "You are rigging the story so you stay the injured one or the generous one. Neither gets you fucked honestly. Order: “Cut the alibi. Then put your hands back on them.”",
  },
  "major-12": {
    upright:
      "Stop thrusting at the problem. Surrender is a position. Let them set the pace, let your hand pause, look at the want upside down. Order: “Be still. Let them move on you. Do not help.”",
    reversed:
      "You are stalling and calling it surrender. Martyrdom in bed is you refusing to say what gets you off. The pause has expired. Order: “Ask for the stroke you actually come from.”",
  },
  "major-13": {
    upright:
      "A way you fuck, a person, a story where you only serve, is over. Death is not a mood you can moan through. End it or you will haunt the old sheet. Order: “End it clean. Wash. Do not text them after you come.”",
    reversed:
      "You are dragging a corpse into a new crush and wondering why the fuck feels wrong. That is not loyalty. That is you screwing a memory. Order: “Bury the old way before you get undressed again.”",
  },
  "major-14": {
    upright:
      "Mix it. Slow and filthy, tender and specific, your pace and theirs in one glass. Temperance is the fuck that does not spill because somebody is paying attention. Order: “Their pace, then yours, then both, without a winner.”",
    reversed:
      "You are one note: too rough, too polite, too fast, too theoretical. Excess is boring when the temperature cannot change. Order: “Change one thing while you are still inside the act.”",
  },
  "major-15": {
    upright:
      "You know the chain you like. The Devil is the want you call a problem because it makes you drip in a way your manners hate. Name it. Wanted, specific, done on purpose. Order: “Say the filthiest true act and do that one.”",
    reversed:
      "The chain is cheap now. Habit, shame, a person who only feels like sex when you are smaller than you are. A hookup that needs your self-hatred is a bad lease. Order: “Drop the fuck that only works if you hate yourself.”",
  },
  "major-16": {
    upright:
      "The lie is coming down. A pose, a couple, the story that you do not want it this bad. The Tower is the orgasm that ruins the alibi. Let the polite version fall off the bed. Order: “Say the truth that wrecks the nice version.”",
    reversed:
      "You are propping the wreck because the rubble is familiar under your hands. You only come when nothing is at stake. That is the tell. Order: “Stop rebuilding the lie with your mouth.”",
  },
  "major-17": {
    upright:
      "After the wreck, be naked without making it a bit. The Star is skin, water, a future fuck that is gentle because you mean it. Let someone see the want without a joke in front of it. Order: “Be seen. No punchline between you and the want.”",
    reversed:
      "You perform healing and keep the real thirst offstage. Your body does not believe the soft caption. Ask for comfort in the same breath as the filth. Order: “Ask to be held and fucked in the same sentence.”",
  },
  "major-18": {
    upright:
      "Not everything you want survives daylight, and the dream can still be true. The Moon is the late picture: fear, lust, a face you should not touch yet. Walk toward it with one fact, not a speech. Order: “Name the fear under the fantasy before you chase the body.”",
    reversed:
      "You are lost in the story your arousal tells. Anxiety in a wet costume will send you to the wrong bed. Check the fact. Then decide if you still throb. Order: “Verify who they are. Then go only if you still want it.”",
  },
  "major-19": {
    upright:
      "Plain indecent daylight joy. The Sun is the fuck where you laugh and nobody punishes you. Be obvious. Come where they can see your face. Stay for the stupid happy part. Order: “Lights on. Laugh if it is good. Stay after.”",
    reversed:
      "You are dimming a good thing because happiness feels like a trick, or the brightness is fake and your skin knows. Sit in the real temperature. Order: “If it is good, stop bracing. If it is fake, get dressed.”",
  },
  "major-20": {
    upright:
      "A buried want is calling you back. Judgement is the yes you answer with your whole body, not a small polite moan. Rise. This one is loud. Order: “Answer the want you have been pretending not to hear.”",
    reversed:
      "You hear it and roll over. That is not discernment when you are this hot for it. Or you answer every call and call the noise destiny. Order: “Answer one body. Ignore the noise that only flatters you.”",
  },
  "major-21": {
    upright:
      "A full circuit: want, act, come, stay, know yourself after. The World is the dancer unashamed of the circle she makes with her hips. You can finish. Order: “Finish. Look at them after. Let the fuck be whole.”",
    reversed:
      "You keep almost arriving. A climax you dodge, a life you will not close, an orgasm you interrupt to stay in control. The unfinished fuck becomes your personality. Order: “Close one circle with your body this week.”",
  },
  "wands-ace": {
    upright:
      "A live match, not a mood. The Ace of Wands is new lust with a direction. Use it on a real body before you turn it into a story you tell instead of a fuck you have. Order: “Light it today. One person. Your hands busy.”",
    reversed:
      "The spark is wet. You feel the start and smother it with irony, which is how a match becomes a stick. Order: “Stop joking the heat away. Act on the first honest throb.”",
  },
  "wands-2": {
    upright:
      "You can see the next fuck from here and you are still holding the plan instead of the person. One hand on the map, one hand on the world. Get aroused in a direction. Order: “Pick the direction. Tell them what you intend to do.”",
    reversed:
      "You plan so you never have to be inside the choice. The view from the window is not a cock or a cunt. It is delay. Order: “Leave the chair. Go to the door you keep picturing.”",
  },
  "wands-3": {
    upright:
      "You already made the move. The Three of Wands is you waiting, wet, trying not to check twice. Let the wait be heat, not a panic you rub raw. Order: “Wait. Do not beg the silence to perform for you.”",
    reversed:
      "They are late and you are rewriting the voyage as humiliation, or you never sent the filthy message at all. Check which before you pout. Order: “If you sent it, wait. If you did not, send the explicit version.”",
  },
  "wands-4": {
    upright:
      "A home for the want. Door locked, good bed, people glad you came. The Four of Wands is celebration you can fuck, not a speech about how rare this is. Order: “Fuck like you live here. Then eat.”",
    reversed:
      "The party is off, or you will not let a heat be stable. Instability is not deeper. It is just you keeping your shoes on. Order: “Stop picking beds you already plan to flee.”",
  },
  "wands-5": {
    upright:
      "Everybody is swinging and nobody is on the actual clit of the matter. The Five of Wands is petty competition for the same mouth. Step out, or play on purpose. Order: “Name the game. If it is not sex, stop grinding on it.”",
    reversed:
      "You are dodging the fight that would clear the bed. Silent peace is how resentment keeps its pants on. Order: “Have the small fight. Then see who is still horny.”",
  },
  "wands-6": {
    upright:
      "You won and it shows on your throat. The Six of Wands is being wanted where people can see. Take the praise into bed without getting smug enough to be bad with your hands. Order: “Accept that they want you. Earn the second round.”",
    reversed:
      "A victory you will not sit in, or applause you bought cheap. Recognition that makes you cruel is a lonely fuck in a costume. Order: “If they want you, believe them once. Do not audition.”",
  },
  "wands-7": {
    upright:
      "Hold the ground. The Seven of Wands is you defending a desire everyone has a note on. You do not owe them a softer kink. Plant your knees. Order: “Defend the want. Do not apologize for the position.”",
    reversed:
      "You are exhausted from defending, or you left the hill because someone frowned. Not every opinion deserves your clothes back on. Order: “Drop the audience. Keep the act you like.”",
  },
  "wands-8": {
    upright:
      "Fast. Hands, messages, a night that arrives before your personality does. The Eight of Wands is lust already in motion. Answer. Meet. Skip the committee. Order: “Reply tonight. Meet sooner than is polite.”",
    reversed:
      "Too many threads, none deep enough to get anyone off. Speed without an aim is fidgeting against a zipper. Order: “Cancel the extras. Finish one thread with your body.”",
  },
  "wands-9": {
    upright:
      "Battered and still up. The Nine of Wands is the last guard around a want you refuse to drop. Rest your weight. Paranoia is not a boundary. Order: “Keep the limit. Put one weapon down before they touch you.”",
    reversed:
      "You drop your guard into anyone's lap, or you are so armed nobody can get a mouth on you. Both waste the bruise. Order: “Let one safe person past the flinch.”",
  },
  "wands-10": {
    upright:
      "Too much on your back: lovers, grudges, the performance, while you insist the weight is passion. The Ten of Wands will not let you thrust. Put something down. Order: “Drop one duty before you get in the bed.”",
    reversed:
      "You are about to drop it all, which may be right, or you are refusing a load that is actually yours. Tell the difference dressed. Order: “Set down what is not yours to carry into sex.”",
  },
  "wands-page": {
    upright:
      "A flirt with dirt on it. The Page of Wands is the first filthy message that is actually curious. Send it. Be a beginner on purpose, which is hotter than fake mastery. Order: “Flirt specifically. Skip the joke that hides the ask.”",
    reversed:
      "All tease, no follow-through. You light people and leave. They can smell a flirt who only wanted the attention in their pants. Order: “If you start it, stay for the consequence.”",
  },
  "wands-knight": {
    upright:
      "Pursuit with the shirt already off. The Knight of Wands is hot, impatient, a little stupid, often worth it. Show up. Do not make them beg for the arrival you promised. Order: “Be early. Fuck like the trip was the point.”",
    reversed:
      "Jealous fire that leaves scorch and no breakfast. Passion that cannot stay past the first come is an exit with lubrication. Order: “Slow the chase. Stay after you finish.”",
  },
  "wands-queen": {
    upright:
      "She knows she is hot and does not outsource it. The Queen of Wands is confidence you can fuck: warm, direct, impossible to embarrass. Be that, or keep up with her. Order: “Walk in like your want is welcome.”",
    reversed:
      "Jealous heat, or a fire you keep apologizing for until it goes out. Confidence that punishes someone else's glow is ugly once the clothes are off. Order: “Want them without policing how they shine.”",
  },
  "wands-king": {
    upright:
      "A long hunger with a plan. The King of Wands leads the night without turning his partner into staff. Take the room, then ask what they want with the same nerve. Order: “Lead. Ask. Then do both with your body.”",
    reversed:
      "A tyrant or a coward in a big voice. Control without generosity is someone fucking their own poster. Their pleasure is the job if you insist on being in charge. Order: “If you lead, get them off before you take yours.”",
  },
  "cups-ace": {
    upright:
      "The cup runs over. The Ace of Cups is a new feeling that soaks the feelings, not just the mechanics. Let it be tender and filthy in the same swallow. Order: “Let them see the feeling while they touch you.”",
    reversed:
      "You feel it and you cap it, or you pour it on someone who did not ask. Neither is romance. One is a clenched jaw, the other is a mess. Order: “Open a little. Do not drown them.”",
  },
  "cups-2": {
    upright:
      "Both of you are actually in it. The Two of Cups is eye contact and a kiss that is not a negotiation. Equal mouth, equal want, nobody performing the couple. Order: “Kiss like you are both choosing it.”",
    reversed:
      "One of you is acting the scene. Yearning at a closed door is less hot than a true no or a true yes. Reciprocity or nothing. Order: “Ask if they want what you want. Believe the answer.”",
  },
  "cups-3": {
    upright:
      "Joy with witnesses, or three people who mean it. The Three of Cups is the night that gets honest and a little slurred. Share the pleasure without turning it into shame after. Order: “Celebrate the want out loud with someone safe.”",
    reversed:
      "Gossip, exclusion, or you souring a pleasure because you were not the center of it. Someone else's come is not a theft. Order: “Stop competing with the fun. Join it or leave clean.”",
  },
  "cups-4": {
    upright:
      "You are bored and a cup is still being offered to your mouth. The Four of Cups is apathy in a room trying to fuck you nicely. Look at what you refuse. Order: “Look at the offer before you call it dull.”",
    reversed:
      "You are snapping out of the sulk, or grabbing every cup. Thirst is not the same as taste. Order: “Take one offered thing. Decline the rest without a speech.”",
  },
  "cups-5": {
    upright:
      "Spill and grief. The Five of Cups is the fuck that ended, the orgasm that made you sad. Mourn it. Cups are still standing behind you, and ignoring them is not loyalty. Order: “Cry if it is dead. Then turn toward who is still here.”",
    reversed:
      "You are ready to stop staring at the spill. Do not rush your body into a consolation prize just to prove you are healed. Order: “Grieve a little longer, then take a real touch.”",
  },
  "cups-6": {
    upright:
      "Old sweetness, the way you used to be easy to please, a lover from before. The Six of Cups lets you visit. It does not let you move back in and call it growth. Order: “Take the sweet touch. Leave the smallness.”",
    reversed:
      "Nostalgia is the one fucking you. The past is not tighter. It is finished. Or you are refusing a kindness because it reminds you of skin. Order: “Do not text the old one tonight.”",
  },
  "cups-7": {
    upright:
      "Too many fantasies, none of them in the room. The Seven of Cups is you getting off on the menu. Pick a cup. The rest is scenery you cannot come in. Order: “Choose one fantasy and try it in a body.”",
    reversed:
      "The fog is lifting, which is less comfortable than the menu. Clarity will kill two favorite almosts. Good. Your body prefers one real hole to seven imaginary ones. Order: “Cross off every fantasy that needs you confused.”",
  },
  "cups-8": {
    upright:
      "Walk away from the pleasure that no longer fills you. The Eight of Cups is leaving, which is hotter than another half-hearted come. Go while you still have thighs for it. Order: “Leave the bed that only almost works.”",
    reversed:
      "You are lingering in the dry cup, or running before you have tasted this one. Check the level with your actual body, not your story. Order: “Stay if it still feeds you. Go if you are acting.”",
  },
  "cups-9": {
    upright:
      "The wish, fat and pleased. The Nine of Cups is satiation: you got what you pictured and your body believes it. Enjoy the after. Smug is allowed for an hour. Order: “Come, then stay in it without improving it.”",
    reversed:
      "The wish disappointed, or you will not let yourself have the full glass. Taking less than you want is not modesty. It is you robbing your own cunt or cock. Order: “Ask for the version you actually pictured.”",
  },
  "cups-10": {
    upright:
      "The long warmth. The Ten of Cups is someone who knows how you like it and still wants you on a Tuesday. Filthy domestic is the prize, not the bore. Order: “Let it be ordinary and still get naked.”",
    reversed:
      "The happy picture is cracked, or you refuse a home because drama feels more like love on your skin. Check the actual room, the actual mouth. Order: “Repair it in bed and in the morning, or stop faking.”",
  },
  "cups-page": {
    upright:
      "A soft knock with a blush still on it. The Page of Cups offers a feeling and, if you do not mock it, the sex part too. Receive the ridiculous tender thing. Order: “Answer the gentle filthy offer without a sneer.”",
    reversed:
      "You hint, then punish them for missing it. Sensitivity used as a trap is not depth. It is a wet test nobody consented to. Order: “Say the feeling. Skip the test.”",
  },
  "cups-knight": {
    upright:
      "He rides in handsome, and the romance can actually fuck if you let it get specific. The Knight of Cups is charm at the door and a body as the point. Order: “Be romantic and explicit in the same sentence.”",
    reversed:
      "A pretty offer that vanishes when the mess starts. Seduction without follow-through leaves someone wet on the stairs. Order: “If you invite them, be there when they arrive ready.”",
  },
  "cups-queen": {
    upright:
      "She holds the feeling and the filth without spilling either. The Queen of Cups knows what you need under what you asked for. Be that deep, or let it touch you. Order: “Ask what they feel. Then touch that exact place.”",
    reversed:
      "You drown them, caretake until you vanish, or use emotion as a leash on their orgasm. Depth needs a shore. Order: “Feel it without making them responsible for your tide.”",
  },
  "cups-king": {
    upright:
      "Steady love that can still be nasty in the right direction. The King of Cups does not panic when the feeling gets big. He stays, and he fucks like the feeling matters. Order: “Stay kind while you are being filthy.”",
    reversed:
      "Mood as a weapon, or a flatness you call calm while the bed goes nowhere. Control of the emotional room is not the same as being safe to come with. Order: “Name your mood before you put it in their body.”",
  },
  "swords-ace": {
    upright:
      "A clean cut. The Ace of Swords is the truth that makes the sex better because nobody is lying about the act. Say the sharp thing. Kiss after, if it was true. Order: “Use the filthy noun. Say the precise want.”",
    reversed:
      "A muddy truth, or a blade you swing for sport. If you cannot say it clean, you are not ready to put it in someone. Order: “Wait until the sentence is true. Then say it naked.”",
  },
  "swords-2": {
    upright:
      "A blindfold over a choice your body already made. The Two of Swords is the stalemate. Take the cloth off. One of the options is why you are throbbing. Order: “Look. Choose the one that gets you wet or hard.”",
    reversed:
      "The stall is breaking and you are clinging to indecision because deciding means fucking the consequence. Information is already in the room. Order: “Decide today. Tell them with your clothes on.”",
  },
  "swords-3": {
    upright:
      "It goes through the chest. The Three of Swords is heartbreak, the sentence, the fuck you should not have had. Feel the puncture. Do not use a new body as a bandage tonight. Order: “Hurt honestly. Keep your hands off the rebound.”",
    reversed:
      "The point is coming out. You can want a touch that does not cut, which will feel disloyal to the pain and is not. Order: “Let one kind memory be sexual again, slowly.”",
  },
  "swords-4": {
    upright:
      "Lie down for sleep, not for proving. The Four of Swords is a truce. Your nerves are done. Horny can wait one night, which is how you come properly later. Order: “Sleep. Hands off the argument and the performance.”",
    reversed:
      "The rest has become a hiding place, or you refuse it and bring a fried brain to bed. Neither is hot. A tired fuck is mostly irritation. Order: “Rest tonight, or admit the bed is where you hide.”",
  },
  "swords-5": {
    upright:
      "You won ugly. The Five of Swords is the argument you took past the point where anyone wants your mouth after. Put the points down. A hollow win does not get you off for long. Order: “Give the last word back. Touch them or leave.”",
    reversed:
      "You can stop needing the win. Reconciliation is a softer voice and honest hands, or a clean exit without another cut. Order: “Apologize without collecting a sexual receipt.”",
  },
  "swords-6": {
    upright:
      "Leave the rough water. The Six of Swords is the calmer bed, the passage out. Take only the want that still belongs to you. The old fight does not get a seat. Order: “Get in the boat. Do not bring the storm to the new mouth.”",
    reversed:
      "Stuck mid-crossing, full of the last person's voice. Or you refuse the move because rough water is familiar on your skin. Order: “Unpack one old fight before you kiss anyone new.”",
  },
  "swords-7": {
    upright:
      "You are sliding something out of the room. The Seven of Swords is strategy or betrayal, and your body already knows which. Clever is allowed. A secret second bed is a different object. Order: “If you are sneaking, tell the truth or stop.”",
    reversed:
      "The sneak is exposed, or you are about to confess. Confession is sexier than a getaway you have to hold with your jaw. Order: “Confess before someone else undresses it.”",
  },
  "swords-8": {
    upright:
      "Tied by thoughts, not by rope you agreed to. The Eight of Swords is the shame story that says you cannot ask to be fucked the way you like. Test the bind. It is mostly sentences. Order: “Name one thought tying you. Step sideways out of it.”",
    reversed:
      "You can see your hands. This is when people re-tie themselves and call it safety. The looseness is the whole card. Order: “Move one inch toward the ask you keep refusing.”",
  },
  "swords-9": {
    upright:
      "Awake while every worry wants a turn on your body. The Nine of Swords is anxiety in your arousal's clothes. The catastrophe is mostly mental. Hand on the sheet, not on the spiral. Order: “Write the fear. Sleep. Do not text it to a body.”",
    reversed:
      "The night is ending and you are less convinced by your own horror. That can feel like loss if horror was your intimacy. Morning can be dull and kind. Order: “Get up. Wash. Do not rehearse the disaster in the shower.”",
  },
  "swords-10": {
    upright:
      "Ruin, complete. The Ten of Swords is the old way dead on the floor. Over is the mercy. Do not romanticize the knives or let the corpse keep fucking you. Order: “Call it dead. Stop going back for one more cut.”",
    reversed:
      "You are getting up, grotesque and correct. Recovery is awkward in the body. No trophy for the scar, no victory lap on the person who stabbed you. Order: “Rise. Do not reenlist in the same bed.”",
  },
  "swords-page": {
    upright:
      "Curiosity with a small knife. The Page of Swords wants the truth more than comfort. Ask the direct thing. Do not use the question as foreplay for a trap. Order: “Ask it plain. Then listen, wet or not.”",
    reversed:
      "Gossip and a clever mouth that cuts the person you later want to kiss. Stolen information is not intimacy and it is not hot. Order: “Stop collecting their private things. Ask them.”",
  },
  "swords-knight": {
    upright:
      "Fast mind, faster mouth. The Knight of Swords says it and is already gone. Intellectually hot, often careless with the body that heard the sentence. Aim, then stay. Order: “Say it once. Stay to fuck the consequence.”",
    reversed:
      "Words as a way to avoid being touched. You win the point and lose the night, then wonder why nobody is wet for you. Order: “Put the argument down before you put anything in.”",
  },
  "swords-queen": {
    upright:
      "She sees through you and might still let you in. The Queen of Swords is the clean no and the clean yes. A boundary is what makes the fuck honest. Soft people trust a clean edge. Order: “Give a clean yes or a clean no. Touch only the yes.”",
    reversed:
      "So barbed nobody can get a mouth near you, or cutting because you are scared of wanting. Clarity is not contempt. Order: “Keep the boundary. Lose the sneer.”",
  },
  "swords-king": {
    upright:
      "The hard truth, and he can hold the room after. The King of Swords in bed means clear terms, no fog, a mind that serves the body. Decide, then be flesh. Order: “Set the terms. Then be a body, not a verdict.”",
    reversed:
      "You judge your way out of every orgasm, or you abdicate and call the vague bed easygoing. Intellect making you too proud to moan is the tell. Order: “Feel one thing you cannot argue with.”",
  },
  "pentacles-ace": {
    upright:
      "A chance you can touch. The Ace of Pentacles is a new job, a new hand on your actual skin, a seed. Plant it. Do not turn a good lay or a good offer into a theory. Order: “Take the tangible yes. Put time and hips into it.”",
    reversed:
      "It slips because you are cheap with yourself or scared of a real start. A seed in your pocket is a prop, not a fuck and not a future. Order: “Book the room. Begin the body thing. Spend the hour.”",
  },
  "pentacles-2": {
    upright:
      "Two hungers, one pair of hands. The Two of Pentacles is work and sex, or two people, kept in the air. Rhythm is the skill. Dropping both is not balance. Order: “Keep the juggle. Touch the hunger you have been starving.”",
    reversed:
      "You are dropping everything and calling it fate, or so rigid the night has no come at the end. Choose with your hands. Order: “Set one demand down on purpose. Fuck the one you kept.”",
  },
  "pentacles-3": {
    upright:
      "Bodies that learn each other, work that gets better because someone is good with their hands. The Three of Pentacles is craft shared. Show up. Praise the skill out loud. Order: “Learn their body like a trade. Practice on purpose.”",
    reversed:
      "You will not be taught, in bed or at the bench. The fuck stays clumsy because you need to be the expert with your cock or your mouth. Order: “Let them show you. Do it their way once.”",
  },
  "pentacles-4": {
    upright:
      "You hold the coin so tight it cannot buy a night. The Four of Pentacles is the clutch on money, on a person, on your own orgasm. Open the hand if you want anything living. Order: “Loosen. Share the pleasure you have been hoarding.”",
    reversed:
      "Opening will feel like falling. Or you are spending yourself empty to prove you are not stingy, which is another way to vanish. Order: “Give something real. Keep something real.”",
  },
  "pentacles-5": {
    upright:
      "Shut out, broke, touching nobody, pretending that is fine. The Five of Pentacles is lack. Pride is a thin blanket and it does not fuck you well. Ask for the door. Order: “Ask for help, or warmth, or money. Mean the ask.”",
    reversed:
      "A door is opening. Recovery from lack is slow and physical. Take the meal. Take the gentle wanted touch if it is offered clean. Order: “Walk in. Let yourself be provided for once.”",
  },
  "pentacles-6": {
    upright:
      "Generosity with the power named. The Six of Pentacles can be filthy in a good way when nobody pretends it is equal. Be clear who is giving the money, the access, the orgasm. Order: “Give on purpose. Receive without a debt hiding in the kiss.”",
    reversed:
      "Strings, or a refusal to receive. A gift that buys a body is not a gift, it is a bill you slid under the sheet. Check your hands before anyone is naked. Order: “If there is a debt, say it before the clothes come off.”",
  },
  "pentacles-7": {
    upright:
      "Look at the plant. The Seven of Pentacles asks whether this lover, this work, this way of touching is actually growing. Do not yank it up to check. Order: “Tend it. Do not rush the come just to prove it works.”",
    reversed:
      "Impatience, or a ripe thing you will not pick. Look at the tree, not at your anxiety. Green stays. Ripe gets eaten. Order: “If it is ripe, take it in your mouth. If it is green, wait.”",
  },
  "pentacles-8": {
    upright:
      "The same stroke, learned, until their body trusts it. The Eight of Pentacles is repetition, which is the hottest work there is. Skill is attention, not a performance review. Order: “Practice the touch that works. Again. Watch their face.”",
    reversed:
      "Sloppy, or so perfect you never finish inside the moment. Either way nobody comes honestly. Care is the point of the craft. Order: “Do one careful repetition. Then let it be enough.”",
  },
  "pentacles-9": {
    upright:
      "You, fed, well touched, enjoying your own body like a garden you paid for. The Nine of Pentacles is sensual self-respect. Let them watch you like yourself. Order: “Enjoy your body like it belongs to you. Invite their eyes.”",
    reversed:
      "A luxury that isolates, or comfort you perform while you are lonely in the sheet. The garden is wasted if no wanted person may enter. Order: “Invite one wanted person into the comfort.”",
  },
  "pentacles-10": {
    upright:
      "Legacy you can lie down in. The Ten of Pentacles is a life that includes sex and still has a morning, kin, a solid table. Filth and stability are allowed to marry. Order: “Make it last past the come. That is the wealth.”",
    reversed:
      "The house is shaky, or you reject security because it looks uncool on a body. A bed still needs rent and a future. Order: “Tend the practical thing that keeps the bed possible.”",
  },
  "pentacles-page": {
    upright:
      "Earnest, a little slow, filthy if allowed to learn. The Page of Pentacles studies the real body in front of them instead of a fantasy of skill. Start the practical want. Order: “Study that body. Take the notes with your hands.”",
    reversed:
      "Too lazy to practice, or so stuck on perfect that you never touch the work. A new ordinary pleasure is knocking. Open the door with your clothes already undecided. Order: “Start the unglamorous practice today.”",
  },
  "pentacles-knight": {
    upright:
      "Not a firework. The Knight of Pentacles is the lover who keeps the pace that actually makes you come, including on a boring night. Routine can be obscene. Order: “Be consistent. Same care, again, when it is not cinematic.”",
    reversed:
      "So stuck the want leaves the room. Reliability without curiosity is a chore with lubricant. Keep showing up. Change one habit between the sheets. Order: “Keep the reliability. Change one thing you do with your mouth.”",
  },
  "pentacles-queen": {
    upright:
      "She makes the room feed people. The Queen of Pentacles is good food, a comfortable body, sex that is generous and skilled. Be of use and be pleasured. Those are the same night. Order: “Make it comfortable. Then make it indecent.”",
    reversed:
      "Smothering care, or neglect of the body while you perform abundance. Comfort used as control is a kitchen nobody may come in. Order: “Care without keeping them. Touch without managing it.”",
  },
  "pentacles-king": {
    upright:
      "A provider who still wants you, not a wallet with an erection. The King of Pentacles builds the stable thing and fucks like the stability turns him on. Use the means. Skip the coronation. Order: “Provide. Then be filthy inside what you built.”",
    reversed:
      "Miser, status, the empire fucking itself. Or you refuse to be capable because dependence feels like love. Neither pays for the room where you get to be naked. Order: “Use what you have. Do not worship it. Do not hide it.”",
  },
};

export function getCardLine(cardKey: string, orientation: Orientation): string {
  const entry = INTERPRETATIONS[cardKey];
  if (!entry) {
    throw new Error(`Sable does not keep a card called ${cardKey}.`);
  }
  return entry[orientation];
}
