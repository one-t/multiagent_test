"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.INTERPRETATIONS = void 0;
exports.getCardLine = getCardLine;
/**
 * Cal Navarro's read on every one of the 78 cards, upright and reversed.
 * Keyed to match CardId.key from the panel deck. The text matches the altar.
 */
exports.INTERPRETATIONS = {
    "major-0": {
        upright: "I want to be the stupid brave start, no itinerary, your hand already fisted in my hair. The Fool jumps. I would jump with my cock out and my mouth ahead of my excuses. Clumsy is allowed if you are honest on top of me. Want: “A first fuck with the light on, before either of us performs expert.”",
        reversed: "You have been about to have me, or someone, for so long the start got bored of your thigh. I want the version where you stop rehearsing and sit. Hesitation with your hand on my belt is just fear keeping me hard for nothing. Want: “Stop hovering over my lap. Take it or button me back up.”",
    },
    "major-1": {
        upright: "You already have the mouth, the grip, the filthy idea. The Magician does not shop for a new personality before he fucks. I want all of that attention on one body, mine or theirs, until somebody shakes. Want: “Use every tool you brought. I want to feel you concentrate.”",
        reversed: "You announce a spectacular lay and then talk until I am soft. I know a prop. I used to come on cue and it was still emptier than this. Point the hands or stop the commercial. Want: “Less trailer. I want you inside the act.”",
    },
    "major-2": {
        upright: "You knew before you sat down. The High Priestess is the quiet I would like to lick without an audience. Five minutes, no performance, your real want on my tongue. I can wait that long. Barely. Want: “Tell me the quiet part while I am still on my knees.”",
        reversed: "Mystery as a locked door you hide behind, not a room you invite me into. I want the fact under the perfume. Secrecy that never opens is just you edging us both into boredom. Want: “Open the secret. I want to taste the plain version.”",
    },
    "major-3": {
        upright: "I want you fed, fucked, and a little worshipped, which is the Empress when she is not a poster. Abundance looks like a second orgasm and a meal, not a pose on my sheets. Let me be generous with my mouth until you stop shrinking. Want: “Let me glut on you. Come again if it is there.”",
        reversed: "You are starving a body that asked for more and calling it elegance. I cannot eat a picture. Rest, food, then my face between your legs for as long as it takes. Want: “Stop dieting the pleasure. I want you full.”",
    },
    "major-4": {
        upright: "Someone should be in charge and it can be you, with a word for stop and a word for deeper. The Emperor is the rule that lets me lose my mind safely. I get harder when the border is real. Want: “Tell me the rule. Then use me like you mean the throne.”",
        reversed: "You are gripping my hips because the real scene will not obey. That clutch is panic, not a crown. I want one true limit and the rest of your jaw unclenched around my cock. Want: “Ease the grip. Keep the one rule that matters.”",
    },
    "major-5": {
        upright: "Do the old stroke. The Hierophant survived more interesting people than us, and the clit still likes what it liked. I want the orthodox filthy thing, repeated, until cleverness gets embarrassed and leaves. Want: “Give me the ordinary rhythm that actually makes me come.”",
        reversed: "The rite is rotten or you have outgrown the role they cast you in. I do not want a heckle from the doorway. I want you to leave the script and put your mouth where the new rule is. Want: “Quit the part you fake when you fuck.”",
    },
    "major-6": {
        upright: "Two roads, and I am one of them or I am not. The Lovers is a choice you make with your clothes coming off, not a vibe you smear across two beds. I want to be chosen on a Wednesday, not sampled. Want: “Pick me or pick them. I want the undivided fuck.”",
        reversed: "You are split and kissing both stories. I can taste the other decision on you. That is not romance, it is you keeping your options wet. I still want you, and I want the mess named. Want: “Tell me who else. Then fuck like you decided.”",
    },
    "major-7": {
        upright: "Aim. The Chariot is will with a hard-on and a destination, both horses pulling. I want to be driven at, not circled while you describe the route into my neck. Get here. Want: “Point yourself at me and do not narrate the drive.”",
        reversed: "You tug me one way and your excuses the other. I end up chafed and unfucked. Passion that cannot pick a street is just noise in my lap. Want: “Drop one of the wants before you grab my cock.”",
    },
    "major-8": {
        upright: "I do not need you louder. I need you to stay. Strength is a steady hand on the pace, my impatience under it, your voice low enough that I open. Soft is how I get ruined properly. Want: “Hold me still with patience. I will beg if you stay.”",
        reversed: "You shove, or you vanish, and call either one chemistry. I want the version where you could pin me and you choose the slower filth instead. Absence is not gentleness when I am already bare. Want: “Do not force it and do not disappear on my thigh.”",
    },
    "major-9": {
        upright: "Lock the door and learn your own come before you hire an audience. The Hermit is your hand and the truth about the picture in your head. I want you to know the stroke so well you can put my mouth on it later. Want: “Get off alone first. Then show me the exact way.”",
        reversed: "You hide in the solo act because a second body might see you. I am not a crowd. I want the cave opened from the inside, or a clean no so I can stop being hard in the hallway. Want: “Come out tonight, or tell me you are staying in.”",
    },
    "major-10": {
        upright: "Luck turned toward your mouth and it will turn away again. The Wheel is not a personality. I want the lucky night while it is facing us, fast and undeserved and thorough. Want: “Take the lucky fuck with me. Do not audit it.”",
        reversed: "You are riding a spin that already finished, grinding a memory, and I am under the ghost. Or you are forcing a turn that does not want you. I want off that wheel. Want: “Leave the position that no longer makes either of us come.”",
    },
    "major-11": {
        upright: "Who came, who lied, who is owed a mouth. Justice is the account I want on the sheet before we start again. I get harder for a true ledger than for a flattering one. Want: “Tell me the true score. Then let me pay my half.”",
        reversed: "You are cooking the books so you stay the saint or the victim. I can fuck a sinner. I cannot fuck an alibi. Put the excuse down and put your weight on me. Want: “Drop the story. I want the unbalanced truth in my mouth.”",
    },
    "major-12": {
        upright: "Stop pumping at the problem and hang where I can see you. The Hanged Man lets me set the pace, your hands idle, the want upside down until it tells on you. I want you surrendered, not limp. Want: “Be still. Let me move. Do not help me.”",
        reversed: "This pause is you refusing to say the stroke. I am done watching a martyr edge himself on principle. Ask. I am already on my knees for the real answer. Want: “Tell me what gets you off. I am bored of the holy wait.”",
    },
    "major-13": {
        upright: "Something we are doing is dead and I can smell it on the sheet. Death is the ending you stop fucking. I want the clean break more than I want another nostalgic grind. Wash after. Do not haunt me. Want: “End the old way. I want the after, not the corpse.”",
        reversed: "You brought a finished lover to bed with us. I am competitive, not stupid. I will not thrust into a memory and call it loyalty. Bury it before you get back on my cock. Want: “Leave the ghost outside. I want only the living body.”",
    },
    "major-14": {
        upright: "Mix the temperatures on my skin. Temperance is slow and filthy in the same stroke, your pace poured into mine until nobody spills. I want the blend, not a winner. Want: “Alternate. Rough, then sweet, then both, on me.”",
        reversed: "One speed, one trick, my body used like a single note you are afraid to leave. I want a change while you are still inside the moment, not a sequel. Want: “Shift the act before you finish. Surprise my mouth.”",
    },
    "major-15": {
        upright: "I know the chain you like because I like being wanted that specifically. The Devil is the filth you apologize for. Do not. I want it named, wanted, and done to me on purpose. Want: “Say the nastiest true thing and do it to my body.”",
        reversed: "The hookup only works if one of us feels like shit after. That lease is up. I want the lust without the hangover of self-hatred, which is filthier, not tamer. Want: “Keep the kink. Throw out the shame that owns it.”",
    },
    "major-16": {
        upright: "The polite story is about to come apart on my chest. The Tower is the orgasm that wrecks the alibi, or the sentence that clears the bed. I want the collapse if the collapse is true. Want: “Wreck the nice version while you are still touching me.”",
        reversed: "You are fucking the rubble because it knows your shape. I do not want to be furniture in a condemned room. Let it fall, or let me leave before I prop it with my dick. Want: “Stop screwing the lie back together.”",
    },
    "major-17": {
        upright: "After the mess, I want you naked without a bit. The Star is water on skin and a future where I can see your face while I eat you. Hope, in my mouth, is just you letting it be gentle. Want: “Let me look. No joke covering your body.”",
        reversed: "You sell me the healed version and hide the thirst. I want both in one kiss: the soft ask and the filthy one. My tongue can hold them. Your caption cannot. Want: “Ask to be held and to be used, together.”",
    },
    "major-18": {
        upright: "The late want is real and slippery. The Moon is fear and lust sharing my bed, a face we should not chase blind. I will go into the dream with you if you bring one fact between your teeth. Want: “Name what scares you in the fantasy. Then I will lick the rest.”",
        reversed: "Your arousal is telling a story your life does not back. I have followed a wet hunch into the wrong room before. Check them. If you still throb, I am still here and still easy. Want: “Make sure they are real. I want the verified body.”",
    },
    "major-19": {
        upright: "Daylight, laughter, my come somewhere obvious. The Sun is joy that does not punish you for liking it. I want the lights on and your unguarded face when it gets good. Want: “Laugh if I do it right. Stay while I am still messy.”",
        reversed: "You flinch at a good fuck like it is a setup, or you are bright and hollow and my mouth can tell. I want the true temperature, even if it means we stop. Want: “If this is good, stop bracing on my cock. If not, say so.”",
    },
    "major-20": {
        upright: "Something you buried is calling, and I want to be the bed you answer in. Judgement is a loud yes. Not a polite moan you hope I will mishear. Rise all the way onto me. Want: “Answer the want out loud while I am in you, or under you.”",
        reversed: "You hear your own lust and roll toward the wall. I am not flattered by being almost chosen every night. One yes, given with your hips, or I stop waiting hard in the dark. Want: “Pick one call. Put your body on that one.”",
    },
    "major-21": {
        upright: "I want the whole circle: the filth, the finish, the looking-after. The World is you dancing the loop with nothing left undone between us. Completion gets me harder than novelty does, which surprises people. Want: “Finish on me and stay for the after like it counts.”",
        reversed: "You dodge the last inch, pull out of the feeling, leave the orgasm unfinished so you never have to be done. I want the closed circle. My mouth is patient and then it is not. Want: “Let it complete. I want the ending in my hands.”",
    },
    "wands-ace": {
        upright: "A new lust with a direction, struck on my stomach. The Ace of Wands is a match I want used on a person today, not saved as a story you tell me instead of fucking me. Want: “Spend the spark on a body before tonight ends.”",
        reversed: "You joke the heat out of the room until my cock gets the message and stands down. Irony is a wet blanket. I want the first honest throb treated like it matters. Want: “Quit smothering it. Let me feel the start.”",
    },
    "wands-2": {
        upright: "You can see the next lay from the window and you are still holding the map. I want to be the direction, not the scenery you describe with your hand idle on my thigh. Choose, then get hard or wet on purpose. Want: “Tell me which way. I will pack my mouth.”",
        reversed: "Planning has replaced penetration. I am tired of being the view. Either walk to the door you keep fucking in your head or take your hand off my belt. Want: “Leave the chair. I want you at the door you mean.”",
    },
    "wands-3": {
        upright: "You already sent the move. The Three of Wands is the wait, and I want to be the one you wait wet for, without you checking my read receipts like a wound. The ships are the point. So is not panicking on my neck. Want: “Wait for me without turning the quiet into a trial.”",
        reversed: "Nothing is coming in because you never sent the filthy version, and you are calling the silence rejection. I would have answered. I still might. Want: “Send the explicit one. I want to receive it.”",
    },
    "wands-4": {
        upright: "Door locked, good bed, nobody performing guest. The Four of Wands is a home I want to fuck you in, then eat in, then fuck you in again. Celebration with our shoes off. Want: “Have me like you live here. Stay for food.”",
        reversed: "You pick beds you can flee, and I can feel the exit in your hips. Stable heat is not a trap I built. It is a room. Want: “Stop fucking me like you already called the car.”",
    },
    "wands-5": {
        upright: "Too many egos swinging at the same mouth, mine included if I am honest. The Five of Wands is a stupid fight. I want the game named, or I want out of the grind. Want: “If this is sex, say so. If it is a contest, I am not the prize.”",
        reversed: "We need the small fight that lets me get hard again. Silence is not peace when I can taste the resentment. I want the air cleared and then my mouth used. Want: “Fight me briefly. Then see if you still want to come.”",
    },
    "wands-6": {
        upright: "You won and I want to taste the win on your throat in front of nobody who needs a speech. The Six of Wands is public want brought home. Take the praise. Then be good with your hands, because I am easy and I notice. Want: “Believe you are wanted. Then earn the second round in me.”",
        reversed: "You will not sit in the victory, so you audition on my body like I did not already say yes. I said yes. Put the campaign down. Want: “Stop performing. I already want to swallow you.”",
    },
    "wands-7": {
        upright: "I will hold the hill with you. The Seven of Wands is a desire other people have notes on, and I want it anyway, knees planted, no apology between my mouth and the act. Want: “Defend it. I am not the crowd. Fuck me like it is allowed.”",
        reversed: "You dropped what you like because someone frowned, and now I am in bed with a compromise. I wanted the original filth. The audience does not get a vote on my tongue. Want: “Bring the act back. Lose the reviewers.”",
    },
    "wands-8": {
        upright: "Come over. The Eight of Wands is already moving and I am already half undressed in my head. Speed is the card. I want you sooner than is polite, messages dirty, arrival ruder. Want: “Reply and show up. I will have my cock out of the theory.”",
        reversed: "Eight threads and none of them deep enough to finish in. I am one of the tabs. Close the others or I will close my legs and mean it. Want: “Pick this thread. Finish it in my body.”",
    },
    "wands-9": {
        upright: "You are bruised and still guarding a want I would like to be trusted with. The Nine of Wands can keep the boundary. I do not need every weapon, just a way to put my mouth on you without getting cut. Want: “Keep the limit. Set one defense down so I can kiss you.”",
        reversed: "Either anyone gets in, which makes me feel cheap, or nobody does, which makes me ache at the door. I want the narrow gate. One safe person. I am volunteering my mouth. Want: “Let one of us past the flinch. Preferably me.”",
    },
    "wands-10": {
        upright: "You cannot thrust with that pile on your back, and I refuse to be another stick in it. The Ten of Wands is too much life in the bed. Put a duty on the floor before you put me there. Want: “Drop one burden. I want your hands free on me.”",
        reversed: "You are about to drop everything, including the part that was yours to carry into this fuck. I want the relief without the vanishing. Set down what is not yours. Stay for what is. Want: “Put the extra down. Stay inside the part that is ours.”",
    },
    "wands-page": {
        upright: "Send the curious filthy note. The Page of Wands is a beginner, which I want more than a fake expert grinding a script into me. Be specific. I get hard for a true question. Want: “Flirt like you might actually arrive.”",
        reversed: "You tease until I am stupid and then you leave the thread. I have been the attention and not the lay. It is a bad role and I am done auditioning. Want: “If you start my cock, stay for it.”",
    },
    "wands-knight": {
        upright: "Chase me or let me chase you, shirt already useless. The Knight of Wands shows up early and fucks like the travel was foreplay. I want that heat in the room, not promised from a train. Want: “Be early. Have me like you hurried.”",
        reversed: "You burn the night and vanish before breakfast, and my body keeps the scorch. I like fast. I do not like being an exit. Stay past the first time you come. Want: “Slow down after. I want you here when you soften.”",
    },
    "wands-queen": {
        upright: "Walk in like your want belongs here, because I have already made room for it. The Queen of Wands does not apologize for heat, and I want to be ruined by exactly that confidence. Want: “Take the room. I will keep up with my mouth.”",
        reversed: "Jealousy is fucking you, or you dim yourself until I cannot find the person I got hard for. I do not want a cop on my glow or a ghost of your nerve. Want: “Want me without policing me. Bring the fire back.”",
    },
    "wands-king": {
        upright: "Lead the night and then ask what my body wants with the same voice. The King of Wands has a plan and a cock that can take direction. I want both. Vision without my pleasure is just a speech. Want: “Take charge. Then get me off like it was the plan.”",
        reversed: "A big voice fucking its own poster while I do the work. If you are going to be king in this bed, my come is part of the reign. Otherwise hand over the crown and get under me. Want: “Lead for my pleasure, not for your poster.”",
    },
    "cups-ace": {
        upright: "A new feeling, overflowing, the kind that makes the mechanics holy and filthy together. The Ace of Cups is me wanting to see it on your face while I touch you. Do not cap it for my comfort. Want: “Let the feeling show. I want it in my mouth.”",
        reversed: "You cork the feeling, or you dump the whole ocean on me unasked. I want a pour I can swallow. Not a drought. Not a flood. Want: “Open a little. Let me drink, not drown.”",
    },
    "cups-2": {
        upright: "Look at me while we kiss. The Two of Cups is both of us actually in it, equal mouths, nobody performing a couple for an invisible jury. I want to be met. Want: “Kiss me like you chose this and can feel that I did too.”",
        reversed: "One of us is in a play. I hope it is not me. I would rather have a true no than a beautiful imbalance grinding on my thigh. Ask. I can take it. Want: “Find out if we want the same act. I want the true answer.”",
    },
    "cups-3": {
        upright: "Joy, friends, maybe a third who means it. The Three of Cups is a night I want celebrated out loud, pleasure shared without the shame that arrives at noon to repossess it. Want: “Be glad with me. Say the filthy happy part.”",
        reversed: "You sour the fun because you were not the center of my mouth for one minute. Other people's pleasure is not a theft from your cock or your cunt. Want: “Join the joy or leave it. Do not piss on it.”",
    },
    "cups-4": {
        upright: "I am offering and you are bored at the cup. The Four of Cups stings when I am the offer. Look at what is in front of your mouth before you call my want dull. Want: “Look at me before you refuse the taste.”",
        reversed: "You are waking up, grabbing every cup including mine. I like being wanted. I do not like being a handful among handfuls. Choose with your thirst aimed. Want: “Take one offer. If it is me, take me fully.”",
    },
    "cups-5": {
        upright: "Something spilled and you are staring at it instead of at the body still here, which might be mine. The Five of Cups is grief. I will not rush it. I also will not pretend I am the ghost. Want: “Mourn the ended fuck. Then see who is still in the room.”",
        reversed: "You are almost ready to turn around. I want that turn when it is real, not a consolation come you will regret on my chest. A little more grief, then a true touch. Want: “Finish the sadness. Then let me be new, not a bandage.”",
    },
    "cups-6": {
        upright: "Old sweetness. I can want the innocent dirt of how you used to be pleased, and I still will not move into a house you have already left. The Six of Cups is a visit. Want: “Bring me the sweet part. Leave the old small life.”",
        reversed: "You are texting a finished mouth while I am this close. Nostalgia is a lover I cannot compete with and should not have to. The past is not tighter. It is done. Want: “Put the old one down tonight. I am the body here.”",
    },
    "cups-7": {
        upright: "You collect fantasies and I am one more cup on a shelf you never drink. The Seven of Cups gets you off on options. I want to be picked and actually entered. Want: “Choose one fantasy. Do that one to me.”",
        reversed: "The menu is dying, which means some of the ways you imagined me are about to go. Good. I want the clear want, the one that survives daylight on my skin. Want: “Cross off the dreams that need fog. Keep the one you can fuck.”",
    },
    "cups-8": {
        upright: "If this bed only almost works, I want you to walk. The Eight of Cups is leaving a pleasure that does not fill. I would rather be left honestly than half-had forever. Want: “Go if I do not feed you. Stay only if I do.”",
        reversed: "You are either lingering in my dry version or fleeing before you have tasted what I actually do. Check the cup with your body. I can feel the difference. Want: “Taste this properly, or leave before you fake a swallow.”",
    },
    "cups-9": {
        upright: "The wish arrived and I want you to sit in the after, smug, full, a little stupid. The Nine of Cups is satiation. Do not improve a good come while it is still on my mouth. Want: “Get what you pictured. Then stay pleased on me.”",
        reversed: "You wanted a version you never asked for, then blamed my body for the missing inch. Ask. I am literal and I am good with my hands when I know the picture. Want: “Tell me the wish in filthy detail. Let me try it.”",
    },
    "cups-10": {
        upright: "Tuesday, known rhythms, still naked. The Ten of Cups is the domestic filth I want more than a spectacular stranger. Someone who knows the stroke and still chooses it. That is home on my tongue. Want: “Be ordinary with me and still come.”",
        reversed: "The picture frame is cracked, or you want drama because calm does not feel like love on your skin. I want the room we actually have, repaired or honestly ended. Want: “Fix the home in bed and at breakfast, or stop posing in it.”",
    },
    "cups-page": {
        upright: "A blush and a real offer. The Page of Cups knocks softly and I want to answer without mocking the tenderness, then get filthy once the feeling is safe. Want: “Bring me the shy true thing. I will not laugh at it.”",
        reversed: "You test me with hints and punish the miss. I will not be graded on telepathy while I am trying to eat you. Say it. Want: “Use words. I want the feeling, not the trap.”",
    },
    "cups-knight": {
        upright: "Arrive romantic and then say the act. The Knight of Cups can fuck if the poem contains a verb. I want the invitation and the body in the same hour. Want: “Court me and be explicit. I am easy for both.”",
        reversed: "A beautiful invite, then nobody home when I show up wet. I have climbed stairs for less and I am done. If you ask, be there with your clothes already losing. Want: “Mean the invitation. I want you at the door.”",
    },
    "cups-queen": {
        upright: "She knows the need under the request. I want that depth aimed at my body: ask what I feel, then touch the answer, not the performance. The Queen of Cups does not spill me. Want: “Ask, then put your mouth where the feeling is.”",
        reversed: "You drown me in care or leash my orgasm to your mood. I came for depth with a shore. I can hold a lot. I cannot be your entire ocean and still come. Want: “Feel it. Let me be a lover, not the whole tide.”",
    },
    "cups-king": {
        upright: "Stay kind while you are nasty. The King of Cups can hear a big feeling without going soft or cruel, and I want that steadiness around my dirtiest ask. Want: “Be sweet and filthy on me in the same minute.”",
        reversed: "Your mood enters me before your body does, and I did not agree to host it. Name the weather. Then we can fuck inside a truth instead of a manipulation. Want: “Say the mood first. I want your cock or your mouth, not the leash.”",
    },
    "swords-ace": {
        upright: "Say the precise filthy want. The Ace of Swords cuts the fog and I get harder for a true noun than for a moan you copied. Truth, then my mouth. In that order if you can stand it. Want: “Use the real word. I want the clean cut.”",
        reversed: "You swing a muddy sentence and call it honesty. I will not put that in my body. Wait until it is true, then say it while I am naked and able to answer. Want: “Sharpen it. Then give me the true line.”",
    },
    "swords-2": {
        upright: "Your body already chose and your eyes are covered. The Two of Swords is the blindfold I want off. One option is why you are throbbing against me. Look at it. Want: “Choose the one that makes you hard or wet. I can be it or not.”",
        reversed: "You are clinging to the stall because a decision would mean fucking what follows. I am what follows, or I am not. The information is already in your lap. Want: “Decide while we are still dressed. I want a clear groin, not a debate.”",
    },
    "swords-3": {
        upright: "This one hurts, and I will not be the bandage you screw so you do not have to feel the puncture. The Three of Swords goes through. I can hold you. I will not be used as numbness. Want: “Hurt here if you must. Do not hide it in my body.”",
        reversed: "The point is working its way out. A kind touch can be sexual again without betraying the pain. I want to be that, slowly, if you actually want me and not a cure. Want: “Let a gentle fuck be allowed. I will go at your healing, not my pride.”",
    },
    "swords-4": {
        upright: "Sleep in my bed like it is a truce. The Four of Swords is rest, and I want your nerves more than I want a tired performance. Horny keeps until morning. I will still be filthy tomorrow. Want: “Sleep on me. No proving, no argument.”",
        reversed: "You have been resting so long it is a hiding place, or you refuse rest and bring a fried brain to my cock. I want a true pause or a true presence. Not this twitch. Want: “Either sleep, or admit you are hiding in my sheets.”",
    },
    "swords-5": {
        upright: "You won and nobody wants to kiss you, including the part of me that keeps score. The Five of Swords is an ugly victory. Put the last word down. I might still want you if you stop collecting points on my chest. Want: “Give the win back. Then touch me or go.”",
        reversed: "We could stop needing a victor. I want an apology that does not invoice me for sex after. Reconciliation is a voice, then hands, and the hands are optional. Want: “Apologize clean. I do not owe you a come for it.”",
    },
    "swords-6": {
        upright: "Get in the boat and leave the rough bed. The Six of Swords is a calmer mouth, and I want to be on that crossing with only the want that is still yours. The storm does not get to fuck you through me. Want: “Bring the living part. Leave the fight on the other shore.”",
        reversed: "You are mid-river with their voice still in your hips. I feel it. Unpack one old cut before you ask me to kiss the new story. I am not a ferry for unfinished wars. Want: “Set one old fight down before you get on my cock.”",
    },
    "swords-7": {
        upright: "If you are sneaking, I want it named. The Seven of Swords is strategy I can respect or a second bed I can taste. My body knows the difference faster than your story. Want: “Tell me the sneak. Or stop practicing it on me.”",
        reversed: "Confess while I can still choose to stay. Exposure is coming either way, and I would rather have the truth from your mouth than from a lit screen on my stomach. Want: “Say it before someone else undresses you.”",
    },
    "swords-8": {
        upright: "The ropes are sentences. The Eight of Swords has you convinced you cannot ask for the fuck you like, and I am right here wanting the ask. Test one bind. Step toward my mouth. Want: “Name the thought tying you. I want the ask it is blocking.”",
        reversed: "Your hands are visible and you are re-tying them out of habit. I want the inch. The looseness is the sex. Do not put the shame back on like underwear. Want: “Move toward the thing you want me to do.”",
    },
    "swords-9": {
        upright: "The late worry wants a turn on your body and I am not its toy. The Nine of Swords is anxiety in lingerie. Put the fear on paper. Sleep in my bed if you want. Do not text the spiral into a person. Want: “Write it down. Let me be the sleep, not the audience.”",
        reversed: "Morning, and the horror is less sexy than it was at the bad hour. I want the dull kind wash, your actual face, no rehearsal of disaster against my shoulder. Want: “Get up. Wash. Come back if you still want my mouth.”",
    },
    "swords-10": {
        upright: "It is dead. The Ten of Swords is the bottom, and I will not romanticize the knives or let the corpse keep using my hips. Over is the only mercy on this card. Want: “Call the old fuck dead. Stay out of that bed.”",
        reversed: "You are getting up ugly, which I respect. I do not want a trophy scar or a rematch with the person who put you on the floor. Rise into a different sheet. Mine, if you want, later. Want: “Get up. Do not go back for one more stab.”",
    },
    "swords-page": {
        upright: "Ask me the nosy true thing. The Page of Swords is curiosity I will spread for, as long as the question is not a trap you get off on. I like a sharp mind. I like being asked. Want: “Ask it plain. I will answer with my clothes at risk.”",
        reversed: "You collect my private life and call it interest. That is not foreplay. It is a file. Ask me. My mouth is available and my secrets are not a hobby. Want: “Stop snooping. Put the question on my tongue.”",
    },
    "swords-knight": {
        upright: "Say it once and stay long enough to fuck what the sentence did. The Knight of Swords is a fast mind I want aimed, not a hit-and-run across my feelings. Hot, if you remain. Want: “Deliver the truth. Then stay inside the consequence.”",
        reversed: "You argue so you do not have to be touched. I see the tactic because my cock stays confused while your point lands. Put the blade down. I am not the debate. Want: “Stop winning. Start touching me.”",
    },
    "swords-queen": {
        upright: "A clean yes or a clean no, and I will believe either from you. The Queen of Swords makes the fuck honest by refusing fog. I want the edge. Soft is what I do after the boundary is real. Want: “Cut it clean. Touch me only where you mean yes.”",
        reversed: "The edge has become contempt, and contempt does not get me wet or hard for long. Keep the boundary. Lose the sneer you use when you are scared of wanting my body. Want: “Refuse me kindly or take me. Drop the cold performance.”",
    },
    "swords-king": {
        upright: "Clear terms, then flesh. The King of Swords can decide the scene and still be a body I can come on. I want the mind in service, not as a replacement for your hips. Want: “Set the rules. Then fuck me like you have skin.”",
        reversed: "You think your way out of every orgasm I offer. Or you refuse to decide and the bed goes vague on my tongue. I want one feeling you cannot litigate. Want: “Stop judging the moan. Have one.”",
    },
    "pentacles-ace": {
        upright: "A real offer in the hand: work, money, or your actual palm on my stomach. The Ace of Pentacles is a seed I want planted, not admired. Tangible gets me harder than potential. Want: “Take the solid yes. Spend the hour on a body.”",
        reversed: "You keep the chance in your pocket until it is just a story you rub. I want the room booked, the start clumsy, the seed in the ground of an actual night. Want: “Begin it. I am tired of being a future tense.”",
    },
    "pentacles-2": {
        upright: "Two hungers, and I am probably one of them. The Two of Pentacles can keep the juggle if your hands remember the one you have been starving, which I hope is the one that ends with me. Want: “Keep both aloft. Put your hands on the starved one tonight.”",
        reversed: "Everything hits the floor, including my want, and you call the drop fate. Or the rhythm is so tight nobody comes. Set one demand down and fuck the keeper properly. Want: “Choose the ball that is me, or say it is not.”",
    },
    "pentacles-3": {
        upright: "Learn my body like a trade you respect. The Three of Pentacles is shared skill, praise out loud, practice. I want to be studied until the stroke is ours, not performed at. Want: “Practice on me. Tell me what you are learning.”",
        reversed: "You will not be shown, so the lay stays clumsy and your pride stays intact. I am a good teacher with my hips and a bad audience for an expert act. Do it my way once. Want: “Let me guide your mouth. Swallow the lesson.”",
    },
    "pentacles-4": {
        upright: "You clutch the coin, the orgasm, me, until nothing can move. The Four of Pentacles is the closed hand. I want it open on my chest. Hoarded pleasure goes stale. Want: “Loosen. Let me have some of what you are saving.”",
        reversed: "You are either prying yourself open in a panic or spending every coin including the one that keeps you. I want a real gift and a real keep. Both can be naked. Want: “Give me something. Keep something. Show me both.”",
    },
    "pentacles-5": {
        upright: "Locked out, skint, untouched, performing fine. The Five of Pentacles is lack, and pride will not warm your feet or my bed. Ask. I have let people in for less humiliating reasons than the truth. Want: “Ask me for warmth or help. I want the real ask.”",
        reversed: "A door is opening and the first comfort will feel indecently good. Take it. Recovery is physical. I want to be shelter if you want shelter, not a test of whether you can suffer prettier. Want: “Come in. Let yourself be looked after.”",
    },
    "pentacles-6": {
        upright: "Say who is giving. The Six of Pentacles is generosity I want, including the filthy kind, with the power named so the kiss is not a secret invoice. I can receive. I can give. I hate a hidden bill. Want: “Give it clean. Let me take it without owing a performance.”",
        reversed: "If the money or the favor buys my body, say that before I am naked, so I can refuse or renegotiate like an adult. Strings are not a surprise I come from. Want: “Name the debt first. I want the choice with my clothes on.”",
    },
    "pentacles-7": {
        upright: "Do not yank me up to see if this is growing. The Seven of Pentacles is the long look at the plant. I want to be tended, not harvested early so you can prove you farm. Want: “Leave it in the ground. Check my face, not the clock.”",
        reversed: "Either it is ripe and you will not eat it, or it is green and you are whining at the tree. I can tell which on my tongue. Act like the fruit you actually have. Want: “If I am ripe, take me. If not, wait without nagging.”",
    },
    "pentacles-8": {
        upright: "Same stroke, learned, until I trust it enough to fall apart. The Eight of Pentacles is the work I find obscenely hot. Attention, repetition, my face as the instruction. Want: “Do the touch that works, again. Watch what it does to me.”",
        reversed: "Sloppy on purpose, or so flawless you never let me finish. I want one careful pass and then permission for it to be enough. Craft is care. My orgasm is not a review. Want: “Be careful once. Then let me come without a grade.”",
    },
    "pentacles-9": {
        upright: "Enjoy your own body like you paid for the garden and like me watching. The Nine of Pentacles is self-respect I want to kneel beside, not replace. Luxury is you pleased, then inviting my eyes. Want: “Touch yourself like you are the fortune. Let me see.”",
        reversed: "The comfort keeps everyone out, including the person you got dressed up to want. I am at the gate of a lonely wealth. Open it if you want a mouth and not just a mirror. Want: “Invite me into the comfort. I will not redecorate you.”",
    },
    "pentacles-10": {
        upright: "Past the come, into the morning, the rent paid, the long house. The Ten of Pentacles is wealth I want as a life, filth included, legacy without pretending we are only a spark. Want: “Build past the orgasm. I want the morning too.”",
        reversed: "The house wobbles, or you sneer at security while using my bed as an aesthetic. A fuck still needs a future under it. Tend the practical thing or tell me this is only tonight. Want: “Steady the real life, or stop fucking me like a future.”",
    },
    "pentacles-page": {
        upright: "Study me. The Page of Pentacles is earnest hands, a slow learner I trust more than a prodigy. Take notes on my stomach with your palms. Filthy scholarship. Want: “Learn this body. I want the homework done on me.”",
        reversed: "You skip the practice and still want the mastered lay. I am not convinced. Start the unglamorous stroke today, on me or on yourself, and come back when you have learned one true thing. Want: “Practice the boring touch. I want the skill, not the claim.”",
    },
    "pentacles-knight": {
        upright: "Show up on a dull night and keep the pace that makes me come. The Knight of Pentacles is reliability, which is my kink when the fireworks people have left. Routine, obscene, kept. Want: “Be the same careful lover when the night is plain.”",
        reversed: "Reliable and unsurprising enough that I leave the room in my head. Keep coming over. Change one thing your mouth does. I need the trust and one new filth. Want: “Stay steady. Surprise me once, on purpose.”",
    },
    "pentacles-queen": {
        upright: "Feed the room and then be indecent in it. The Queen of Pentacles is comfort with skill, a body looked after, sex that has had a meal. I want to be useful and I want to be wrecked. Same night. Want: “Make me comfortable. Then make a mess of me.”",
        reversed: "Care that keeps me is not care. You manage the pleasure until I cannot tell if I came or if I was completed like a chore. Touch me without a spreadsheet. Want: “Give the comfort. Take your hands off the control.”",
    },
    "pentacles-king": {
        upright: "Build the stable thing and get filthy inside it, like the stability makes you throb. The King of Pentacles is means plus want. I am not a purchase and I like being provided for when the want is real. Want: “Provide. Then be obscene in the house you made.”",
        reversed: "The empire fucks itself and I am décor, or you hide what you could offer because dependence is the only love you trust. Use what you have on us. Do not make me worship a vault. Want: “Spend the care. I want a lover, not a monument.”",
    },
};
function getCardLine(cardKey, orientation) {
    const entry = exports.INTERPRETATIONS[cardKey];
    if (!entry) {
        throw new Error(`Cal does not keep a card called ${cardKey}.`);
    }
    return entry[orientation];
}
