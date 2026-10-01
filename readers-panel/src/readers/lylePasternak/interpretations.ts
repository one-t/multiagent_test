import type { Orientation } from "../../types";

export interface CardVoiceLines {
  upright: string;
  reversed: string;
}

/**
 * Lyle's raw read on every one of the 78 cards, upright and reversed.
 * Keyed to match CardId.key from the panel deck. Position framing is
 * layered on separately in positions.ts. Text matches js/readers/lyle-lines.js.
 */
export const INTERPRETATIONS: Record<string, CardVoiceLines> = {
  "major-0": {
    upright:
      "You want a fresh start and you packed nothing, which is either courage or the last disaster with the receipt thrown out. The Fool steps off the curb because the curb hurt his feelings. Do it if you mean it. Don't narrate it to me. Slip: \"A new beginning is available. So is gravity.\"",
    reversed:
      "You've been about to start for so long the start filed a missing-person report. Or you leap so you never have to read the landing. Both are cowardice in different shoes. Slip: \"Hesitation is not a personality. Neither is a cliff.\"",
  },
  "major-1": {
    upright:
      "Every tool you need is already on the folding table and you're still shopping for a personality. The Magician is focus, not a costume. Point the hands at the actual job and stop warming up. Slip: \"You already own the tools. This is the humiliating part.\"",
    reversed:
      "All patter, no trick. You're announcing a life you have not started, which is a commercial for a store that sells fog. I used to teach ethics. I know a prop when it talks. Slip: \"Talk is a prop. Props do not pay rent.\"",
  },
  "major-2": {
    upright:
      "You already know. You sat down so I'd say it in a nasty voice and you could pretend a stranger told you. The High Priestess is the quiet you keep polling the group chat to avoid. Five minutes. No audience. Slip: \"The answer arrived last week. You marked it unread.\"",
    reversed:
      "You've mistaken secrecy for depth. Some of that silence is you hiding the gauge from yourself. Open the book you keep performing mystery about. Doris used to do this. Doris owns a laminator now. Slip: \"Intuition is not an excuse to skip the facts.\"",
  },
  "major-3": {
    upright:
      "Something is growing and it wants food, time, and you to stop calling neglect an aesthetic. The Empress is care that shows up as a result. Feed the thing. Feed yourself, if we're going to be disgusting about it. Slip: \"Growth is available. It invoices.\"",
    reversed:
      "The garden is tired because you harvest pep talks out of it and put nothing back. Rest is not a moral failure. Starving the work and calling it devotion is how people become cautionary. Slip: \"You cannot pour from an empty cup. You can, however, make a mess.\"",
  },
  "major-4": {
    upright:
      "Somebody has to run the place, and for once that somebody might be you without it becoming a hostage situation. The Emperor is rules, borders, a calendar. Thrilling. Do them anyway. Slip: \"Order is not oppression. Your chaos is not a brand.\"",
    reversed:
      "You've started controlling the silverware because the actual problem won't sit still. That's not command. That's a man alphabetizing his panic in a parking lot. I would know. Slip: \"A tight grip is not the same as a plan.\"",
  },
  "major-5": {
    upright:
      "There is a boring correct way and you hate it because you didn't invent it in the shower. The Hierophant survived people more interesting than you. Do the orthodox thing. The clever version already caught fire once. Slip: \"The old rule is old because the clever version caught fire.\"",
    reversed:
      "The institution is rotten, or you've outgrown the pew. Fine. Leave on purpose. Don't heckle from the doorway and call it a philosophy. I heckled. They took my key card. Slip: \"Rebellion is a plan or it's a mood. Pick.\"",
  },
  "major-6": {
    upright:
      "A real choice, not a vibe. The Lovers is two roads, and you don't get to marry both and then cry about the commute. Choose the one you can stand on a Tuesday. Slip: \"A choice is coming. So is the person you keep blaming.\"",
    reversed:
      "You're split, and you're calling the split romance. Misalignment is two calendars and a coward, not a sign from the ceiling tiles of this dead Circuit City. Slip: \"You cannot have both. You are trying. It's ugly.\"",
  },
  "major-7": {
    upright:
      "Will, aimed. The Chariot is not passion. Passion is how you rear-end a Honda. This is two horses and a driver who means the direction. Drive. Slip: \"Victory is available to people who steer.\"",
    reversed:
      "The horses disagree and you're standing in the cart yelling about momentum. Sit down. Fix the split in you before you collect a medal for the crash. Slip: \"Direction first. Speed is how you arrive at the wrong place faster.\"",
  },
  "major-8": {
    upright:
      "The loud thing in you does not need a bigger stick. Strength is a steady hand, humiliatingly patient. Soft works. I hate that it works. It works. Slip: \"The beast quiets for nerve, not for volume.\"",
    reversed:
      "You're either bullying the fear or letting it drive. Both are the same failure in different jackets. Put the performance down before the beast files a complaint. Slip: \"Force is what you use when you've run out of skill.\"",
  },
  "major-9": {
    upright:
      "Turn the porch light off and be alone on purpose. Not as a bit. The Hermit is the answer that isn't in another person's mouth. I charge extra to say what you already heard in the shower. Slip: \"Solitude is on offer. You will try to ruin it with a podcast.\"",
    reversed:
      "You've been in the cave so long the cave pays your taxes. That's not wisdom. That's hiding with better lighting. Come out. The lot is ugly and educational. Slip: \"Withdrawal has a smell. You have reached it.\"",
  },
  "major-10": {
    upright:
      "The Wheel turns and you are not the axle, which wounds you, I can tell. Something is changing that you didn't schedule. Ride it. Skip the manifesto. Slip: \"Luck changes. So does your story about why.\"",
    reversed:
      "You're stuck in a spin and narrating it as a grand design. It's a bad week with extra philosophy. Get off the ride when the door opens. I will not clap. Slip: \"A rut is a wheel that forgot it was supposed to go somewhere.\"",
  },
  "major-11": {
    upright:
      "Cause, effect, the boring machinery. Justice says what you did is what you get. If the scale is fair today, stand on it without haggling. I failed this class. You don't have to. Slip: \"The bill matches the order. Pay it or admit you wanted a different meal.\"",
    reversed:
      "Somebody's thumb is on the scale. Check yours first. You're very quick to audit everyone but the guy in the chair, and that guy is you. Slip: \"Unfairness exists. So does the part you did.\"",
  },
  "major-12": {
    upright:
      "Stop. The Hanged Man is a view, and your thrashing is ugly cardio. Surrender is a tactic, not a personality transplant. Hang there until the picture changes. Then get a coffee. Slip: \"Pause. The struggle is the least interesting thing about you today.\"",
    reversed:
      "You've been waiting for a sign so long the sign left with the night shift. That's stalling with better posters. Cut the rope or climb. Pick a verb. Slip: \"Martyrdom is not a strategy. It's a hobby.\"",
  },
  "major-13": {
    upright:
      "It's over. Not a beautiful chapter, not a rebrand. Death is a door closing while you introduce yourself to the empty room. Leave. Mourn on the walk to the car. Slip: \"An ending is here. Clap or don't. The door does not care.\"",
    reversed:
      "You're hugging a corpse and calling it loyalty. The change already happened. You're late to your own funeral, which is a little on the nose even for this table. Slip: \"Let it die. You are not the hero of its afterlife.\"",
  },
  "major-14": {
    upright:
      "Mix it. Temperance is the middle, where this stops being a scene and starts being a life. Not all of one feeling. Boring. Effective. I have a Slim Jim and a thesis about this. Slip: \"Balance is available. It will not photograph well.\"",
    reversed:
      "You're oscillating so hard the cups are seasick. Excess, then apology, then excess. That's a metronome with a drinking problem, not a soul. Slip: \"Moderation is the advice you came here to ignore.\"",
  },
  "major-15": {
    upright:
      "The Devil's chain is loose. You could lift it off. You like the view from the hook. Name the habit, the person, the story you keep. Until then it's a leash you decorated. Slip: \"A bondage of your own making is still bondage. Cute collar, though.\"",
    reversed:
      "You see the chain. Congratulations, that's the free sample of leaving. Seeing it is not leaving. Leave, or stop announcing your awareness like a resignation. Slip: \"Awareness without an exit is just a better seat in the trap.\"",
  },
  "major-16": {
    upright:
      "The Tower was rotten and now it's loud about it. Lightning, rubble, your little story on fire. Good. It was a bad building. Don't rebuild it with the same bricks and a new font. Slip: \"Collapse is on the schedule. You will call it a surprise.\"",
    reversed:
      "You've felt the crack and you're painting over it. The tower falls slower when you pretend, then it falls on a Tuesday you needed. Get out before the masonry files the paperwork. Slip: \"A crack ignored becomes a personality. Then a bill.\"",
  },
  "major-17": {
    upright:
      "After the fire, the Star is a little clean water and a sky that isn't mocking you. Hope, the unfashionable kind. Take it. Don't turn it into a brand by Thursday. Slip: \"A quiet mercy is available. Try not to monetize it.\"",
    reversed:
      "Faith is leaking and you're staring at the puddle like it owes you rent. The well isn't gone. You stopped carrying the jug because carrying is work. Slip: \"Hope didn't leave. You set it down and then blamed the night.\"",
  },
  "major-18": {
    upright:
      "The Moon is fog, bad eyesight, and a story your fear wrote because it was bored. Not every shape is a wolf. Not every shape is a dog. Go slow. Don't sign what your imagination drafted at 2 a.m. Slip: \"Confusion is present. So is your talent for casting it.\"",
    reversed:
      "The fog is thinning and you almost miss it, because clarity means you have to do the thing. The fear was a hobby. The facts are a job. Clock in. Slip: \"The nightmare shrinks in daylight. Bring daylight.\"",
  },
  "major-19": {
    upright:
      "The Sun is actually good and I hate this for both of us. Warmth, a clear win, a day that isn't a parable. Take it without waiting for the invoice to ruin the bit. Slip: \"Joy is here. You will try to cross-examine it.\"",
    reversed:
      "The sun is out and you brought a blindfold and a speech about how happiness is naive. It isn't naive. You're superstitious about feeling fine. Sit in it. Slip: \"A good day is not a trap. Sit in it, coward.\"",
  },
  "major-20": {
    upright:
      "Judgement is a summons, not a mood. Look at the whole record and decide what you're going to be from here without the speech. Answer. The snooze button is not a moral position. Slip: \"You are being called. The snooze button is not a moral position.\"",
    reversed:
      "You hear the call and you perform not-hearing. The reckoning doesn't need your RSVP. It already has your name from the last time you ducked it in the faculty lot. Slip: \"A second chance is knocking. You are pretending it's the neighbor.\"",
  },
  "major-21": {
    upright:
      "The World is a cycle done. Not almost. Not once you fix your personality. Done. Stand in it for one minute before you invent the next crisis to feel alive. Slip: \"Completion is available. You will ask what it costs to undo it.\"",
    reversed:
      "You're one inch from finished and you started a new project so you wouldn't have to feel the ending. That's not ambition. That's an allergy to arrival. I have it too. Don't copy me. Slip: \"The finish line is visible. You are tying your shoes for the fourth time.\"",
  },
  "wands-ace": {
    upright:
      "A spark that isn't a mood. The Ace of Wands is one live match. Use it on the thing today, before you laminate it into a mood board. Doris laminates. You don't have to. Slip: \"A beginning with heat is in your hand. Don't pocket it.\"",
    reversed:
      "The match is damp. You want the feeling of starting more than the start. Dry it out or admit you're collecting unused potential like baseball cards. Slip: \"The spark fizzled. Blowing on it and yelling is not a plan.\"",
  },
  "wands-2": {
    upright:
      "The world in your hands, a door behind you, and you still want a committee. Two of Wands: pick a horizon. The other one will survive without your indecision. Slip: \"A choice of roads. Both go somewhere. Neither is later.\"",
    reversed:
      "Plans, from a man who owns maps and fears doors. You've been considering so long the consideration got tenure. I recognize the smell from the department. Slip: \"Planning is not walking. You have noticed. You have not moved.\"",
  },
  "wands-3": {
    upright:
      "You sent the ships. Three of Wands says wait without clawing the paint off the dock. Trust the thing you already launched. Hovering is not leadership. It's itch. Slip: \"Your work is out there. Hovering will not make it sail faster.\"",
    reversed:
      "The ships are late, or they were never as seaworthy as the speech. Check the plan before you write the tragedy. I have heard the tragedy. It's drafty. Slip: \"Delays are here. So is the part of the plan you faked.\"",
  },
  "wands-4": {
    upright:
      "A home, a gathering, something stable enough to celebrate. Four of Wands. Go to the party. You built a corner of peace and you're in the doorway critiquing the napkins. Slip: \"A welcome is on offer. Try arriving.\"",
    reversed:
      "The foundation's cracked, or you're skipping the party you actually need. Company isn't a weakness. Isolation isn't depth. It's just quieter self-regard. Slip: \"The house is fine. You are the one who won't come inside.\"",
  },
  "wands-5": {
    upright:
      "Five of Wands is a stupid fight with sticks. Nobody's dying. Friction, showing off, the lot of you bored. Play, then put the sticks down before somebody loses an eye and a point. Slip: \"Conflict ahead. Most of it is sport. Don't marry it.\"",
    reversed:
      "The sport turned mean, or you're dodging every scrap including the one you should have. Reconcile, or fight the real fight. The muddle is the only guaranteed loser. Slip: \"The brawl is over or it got ugly. Either way, stop posing.\"",
  },
  "wands-6": {
    upright:
      "You won. Publicly. Six of Wands. Try to take the applause without explaining why you don't deserve it. You did the thing. Ride in. I'll allow a small smile. Don't get used to me. Slip: \"Victory is coming. You will attempt to give it back.\"",
    reversed:
      "The win happened and nobody clapped, or the applause is for a version of you that cheated the meter. A quiet return doesn't erase the miles. A cheap victory doesn't get to be your biography. Slip: \"Recognition is late. The work still counts. The fraud, if any, also counts.\"",
  },
  "wands-7": {
    upright:
      "Higher ground, and they are coming. Seven of Wands: hold it. You are not wrong just because the lot is loud. I've held worse hills for worse reasons. This one might be yours. Slip: \"You will be outnumbered. Being right is still allowed.\"",
    reversed:
      "You're defending a hill that isn't yours, or you're so tired you're about to hand over one that is. Check which before you make a speech. Speeches are how hills change owners. Slip: \"Exhaustion is not the same as being wrong. Neither is stubbornness.\"",
  },
  "wands-8": {
    upright:
      "Eight of Wands: news, speed, things already in the air. Don't overthink a clear stretch. Move while it's open. Analysis is how you miss the bus and then review the bus. Slip: \"It will happen fast. Try to be awake for it.\"",
    reversed:
      "Delays, arrows in the ditch, a message that hit the wrong person. Before you sue the sky, check whether you addressed it to your own ego. Slip: \"Slowdown. Some of it is weather. Some of it is you.\"",
  },
  "wands-9": {
    upright:
      "Battered and still standing. Nine of Wands is not health. It is the gate, one more watch, then sleep. You're allowed to be tired and still not abandon the post. Slip: \"You are worn out and not done. Both can be true. Irritating.\"",
    reversed:
      "Paranoia in the uniform of vigilance. The war you're braced for is over, or it was never at this door. Put one weapon down. The Ziploc can hold it. Slip: \"You are defending a room that is already empty.\"",
  },
  "wands-10": {
    upright:
      "Too much. You know it. Ten of Wands is a brag and an injury sharing a spine. Drop something before your back files a formal complaint with me, and I side with the back. Slip: \"The load is too heavy. This is not a compliment.\"",
    reversed:
      "You put something down. Finally. Feel that, and don't immediately adopt a new tragedy to stay familiar. Familiar pain is not a pet. Stop feeding it. Slip: \"Relief is available. You may not recognize it. It's the light feeling.\"",
  },
  "wands-page": {
    upright:
      "A kid with a spark and no mileage. The Page of Wands is enthusiasm with a message attached. Point it. Don't set fire to the curtains and call that a calling. Slip: \"A new appetite is here. Give it a job or it will eat the furniture.\"",
    reversed:
      "All announcement, no miles. Restless, a spark that wants an audience more than a road. Do one small real thing or stop talking. I will time you. Slip: \"The enthusiasm is fake today. Or early. Either way, no parade.\"",
  },
  "wands-knight": {
    upright:
      "The Knight of Wands charges. Charming, fast, one bad merge from a ditch. If this is you, enjoy the speed and check the fuel. If someone is charging at you, don't marry the dust cloud. Slip: \"Action, immediate. Wisdom, optional. Pack both.\"",
    reversed:
      "The charge stalled. Hotheaded, delayed, or reckless with the receipt now due. Passion without follow-through is noise that used to own a horse. Slip: \"The rush burned out. What remains is the mess. Clean it.\"",
  },
  "wands-queen": {
    upright:
      "The Queen of Wands runs the room without setting it on fire, which is the advanced class. Warm authority. Be that, or go find her and stop arguing with her for sport. Slip: \"Confidence that doesn't need a scene. You could try it.\"",
    reversed:
      "The warmth curdled. Jealous, domineering, or so insecure the fire is eating the house it was meant to heat. Put the crown down for an hour. The house will thank you in writing. Slip: \"Your heat is scorching the people who came to sit by it.\"",
  },
  "wands-king": {
    upright:
      "The King of Wands is vision with a calendar. The rare creature who can want a thing and also build the thing. Lead, if that's you. If it isn't, stop cosplaying him in meetings. Slip: \"A leader is in the picture. Check whether it's you or the story you tell.\"",
    reversed:
      "The king as a bully, or a vision that never leaves the bar. Impulse, a big speech, a small result. Sit down. The lot has enough monarchs and one working trash can. Slip: \"High standards are not an excuse to be a fire in a small room.\"",
  },
  "cups-ace": {
    upright:
      "A feeling showed up that you didn't order. The Ace of Cups is the fill. Let it. Don't immediately ask what it costs and whether it will embarrass you at Thanksgiving. Slip: \"An opening in the heart. You will try to negotiate it.\"",
    reversed:
      "The cup is cracked and you keep pouring, then you call the puddle depth. Repair the vessel or stop performing the pour for me. I have seen puddles. Slip: \"The feeling won't stay. The cup is the problem, not the thirst.\"",
  },
  "cups-2": {
    upright:
      "Two of Cups is a real mutual thing. Two people, one cup, nobody performing. If it's here, don't sabotage it to protect your brand as the lonely intellectual. That brand is a shed. Slip: \"A connection is on offer. Try not to audit it to death.\"",
    reversed:
      "The bond is off. Breakup, imbalance, or a partnership that's a hostage photo with better lighting. Name it. Don't call imbalance chemistry. Chemistry is what melts the table. Slip: \"The toast is over. One of you is still holding the glass.\"",
  },
  "cups-3": {
    upright:
      "Three of Cups: friends, a toast, the unfashionable fact that other people can improve a day. Go. You are not above a plastic cup in a parking lot. I do this professionally. Slip: \"Company is available. Your bit about being misunderstood can wait.\"",
    reversed:
      "The party soured. Gossip, a triangle, too much punch, or you're outside a friendship you actually want. Repair, leave, or stop drinking the story. Slip: \"The group chat turned. You are either in it or the subject. Check.\"",
  },
  "cups-4": {
    upright:
      "Four of Cups: three on the ground, one offered, and you're staring at your shoes like they're a school of thought. Apathy. Take the cup or admit you like refusing. Refusal is your hobby. Slip: \"An offer is in the air. You are busy being unimpressed.\"",
    reversed:
      "You looked up. The sulk is ending. Take the offered thing before you write another essay about numbness. The essay does not want you. The cup might. Slip: \"The sulk is lifting. Don't renew it out of habit.\"",
  },
  "cups-5": {
    upright:
      "Five of Cups is grief, and you're staring at the spill while two cups stand behind you like unpaid interns. Mourn. Then turn around. Both. In that order. Not forever on step one. Slip: \"Loss is here. So are two cups you refuse to count.\"",
    reversed:
      "You're starting to turn, or you've furnished the puddle and called it a home. Acceptance is movement. The spill is not a personality, even if it has your cheekbones. Slip: \"The mourning can end. You may have to allow that.\"",
  },
  "cups-6": {
    upright:
      "Six of Cups: the past, being kind for once. A memory, a small gesture, sweetness that isn't a trap. Take it. Don't move back into the year to keep the feeling. Slip: \"Nostalgia is visiting. It is not a forwarding address.\"",
    reversed:
      "Stuck in a year that ended, or refusing a simple kindness because it isn't complicated enough for your brand. Let the old scene go, or grow up inside it. Slip: \"The past called. You do not have to move back in.\"",
  },
  "cups-7": {
    upright:
      "Seven of Cups: too many shiny maybes. Pick one real cup. The rest are decorations your fear hung so you wouldn't have to choose and then be seen choosing. Slip: \"Options everywhere. Most of them are not real. You know which.\"",
    reversed:
      "The illusion is thinning, which is good news you will experience as loss. Choose. If you don't, you'll still be calling confusion a practice when the lot is a crater. Slip: \"The fantasy lost its job. Decision is the replacement.\"",
  },
  "cups-8": {
    upright:
      "Eight of Cups: walk away. The stack isn't feeding you. Leaving is the card. Don't give a speech on the path. The moon does not require closing remarks. Slip: \"You already know it's time to go. The moon is just lighting the path.\"",
    reversed:
      "You're afraid to leave, or you left and keep checking the pile from the ridge. Finish the departure or go back on purpose. Hovering is the worst cup in the set. Slip: \"The exit is right there. So is your talent for one last look.\"",
  },
  "cups-9": {
    upright:
      "Nine of Cups: the wish, granted, a little smug, sitting there. Enjoy the hour. You are allowed to be satisfied without inventing a flaw so you stay interesting at dinner. Slip: \"Contentment is here. You will pick at it like a scab.\"",
    reversed:
      "Smug without the goods, or a wish that arrived hollow and slightly warm. The indulgence didn't fix the thing. Get up from the table. The chair remembers you too well. Slip: \"The feast was a picture. Your stomach noticed.\"",
  },
  "cups-10": {
    upright:
      "Ten of Cups is happiness with other people in it. Home, the corny rainbow, the stuff that turns out to be the point. If it's offered, don't ironic it to death. Irony is not a roof. Slip: \"A shared joy. You may survive it.\"",
    reversed:
      "The family picture is cracked. Values that don't share a house, a happy ending with a leak. Don't perform the rainbow. Fix the house or stop posing under it. Slip: \"The happy ending has a leak. Look under the rainbow.\"",
  },
  "cups-page": {
    upright:
      "The Page of Cups is a message from the soft part of you. A feeling just starting, a little artistic, a little naive. Follow it one step. Don't marry it on the landing. Slip: \"A tender idea arrived. Don't crush it to look seasoned.\"",
    reversed:
      "Moody, childish, news you don't want delivered in a cup. The page is sulking. You might be the page. One honest feeling, out loud, then we are done with the weather report. Slip: \"The mood is not a muse. It's a mess with a cup.\"",
  },
  "cups-knight": {
    upright:
      "The Knight of Cups rides in with a cup and a speech. Charming. Check whether a person is under the gesture or whether the gesture is the whole product. I have bought the gesture. It spoiled. Slip: \"A romantic offer. Read the fine print, then the face.\"",
    reversed:
      "Jealous, moody, quest cancelled, feelings still clocked in. If this is you, stable the horse. If it's someone else, don't wait in the rain like a lamppost with a crush. Slip: \"The romance stalled. The mood did not. Unfortunate.\"",
  },
  "cups-queen": {
    upright:
      "The Queen of Cups can sit with a feeling without making it everybody's second job. That's the skill. Be her, or sit near her and be quiet for once in your theatrical life. Slip: \"Depth is available. It does not require an audience.\"",
    reversed:
      "Drowning, martyred, or so boundary-less the cup is a municipal flood. Feel the feeling. Do not appoint it mayor. I have met this mayor. The town left. Slip: \"You are not the feeling. Stop letting it run the house.\"",
  },
  "cups-king": {
    upright:
      "The King of Cups can want, grieve, and still steer. Feeling, governed. If you have that steadiness, use it on the actual problem. If you don't, stop mocking it as boring. Boring floats. Slip: \"Calm water. You could learn the stroke.\"",
    reversed:
      "Manipulation in a sensitive voice, or a coldness he calls control. The cup is a prop. Put it down before somebody thanks you for the abuse. Slip: \"Moodiness is not depth. Control is not care.\"",
  },
  "swords-ace": {
    upright:
      "The Ace of Swords is one clear thought. Use it. Cut the knot. Do not describe the knot to a committee until the committee becomes the knot. I have been the committee. Slip: \"Clarity is in the blade. Swing once. Then stop talking.\"",
    reversed:
      "Confusion, or a sharp idea used as a toy, or the truth delayed until it's useless at the meeting. The sword is here. Your hand is doing tricks for applause. Slip: \"The point is dulled by your commentary.\"",
  },
  "swords-2": {
    upright:
      "Two of Swords: blindfold, crossed blades, a decision you refuse to call a decision. Take the cloth off. The sea has been behind you the entire pose. Slip: \"You already know which way. The blindfold is theater.\"",
    reversed:
      "The stall is breaking. Facts are coming, or you're too overloaded to hold the statue. Choose before the tide chooses and sends you the minutes. Slip: \"The truce is over. Decide, or it decides for you.\"",
  },
  "swords-3": {
    upright:
      "Three of Swords hurts because the thing was real. Heartache, rain, no thesis required. Grieve. Don't workshop the grief into a personal brand by Friday. Slip: \"It hurts. That is the whole message. You may stop adding chapters.\"",
    reversed:
      "The grief is easing, or you're picking the wound so you still have a plot. Recovery is allowed. So is the pain. Don't live in the rehearsal. Slip: \"The wound can close. You have to take your hand off it.\"",
  },
  "swords-4": {
    upright:
      "Four of Swords is rest. Actual rest. Not the kind where you answer mail with your eyes closed and call it balance. Lie down. The blades can hang on the wall without supervision. Slip: \"Sleep is the strategy. Heroics are how you stay stupid.\"",
    reversed:
      "Restless, or a rest that turned into hiding in the chapel because the chapel doesn't ask follow-ups. Get up. The cot is not a career. Slip: \"The bed has done its job. So has the excuse.\"",
  },
  "swords-5": {
    upright:
      "Five of Swords: you won ugly. Blades on the ground, people leaving, you smirking like that's a school of ethics. A hollow win is still hollow. Decide if you want the company of the smirk. Slip: \"Victory, technical. Friendship, deceased. Your call.\"",
    reversed:
      "The grudge is ready to be set down, or you're still touring the ugly win like a relic. Reconcile or release. The smirk expires. I checked the date. Slip: \"The fight can end. Your reputation for it does not have to.\"",
  },
  "swords-6": {
    upright:
      "Six of Swords is a boat away from the mess. Not fixed. Moving. Go. Don't pack the entire argument in the stern and then complain about the draft. Slip: \"You are allowed to leave the rough water. The boat is boring. Take it.\"",
    reversed:
      "Stuck mid-crossing. You won't leave and you won't dock. The baggage bought a ticket. Throw one thing overboard. I suggest the speech. Slip: \"The move is stalled because you brought the problem as luggage.\"",
  },
  "swords-7": {
    upright:
      "Seven of Swords: you're sneaking off with the blades. Strategy or theft, and you already know which. If it's clever, be gone. If it's betrayal, don't call it boundaries. I grade that paper an F. Slip: \"A sly exit is available. So is the chance you're the villain.\"",
    reversed:
      "The sneak failed, or you're tired of your own con and the limp is showing. Come back with the swords or confess. The act has a smell even the Slim Jim notices. Slip: \"The getaway stumbled. Try the truth. It's lighter.\"",
  },
  "swords-8": {
    upright:
      "Eight of Swords: trapped, mostly by a story you wrote and then believed like a memo. The bonds are loose. Look down. You can step out. The fear would prefer a longer lease. Slip: \"The cage is an opinion. Step out. It's embarrassing how easy.\"",
    reversed:
      "The trap is opening. Restrictions lifting, or you've identified with the prison so hard the door offends you. Take the door. Leave the costume. Slip: \"You can leave. The panic is not a lock.\"",
  },
  "swords-9": {
    upright:
      "Nine of Swords is you, awake, manufacturing catastrophes in bulk. The blades are thoughts. Most are fan fiction with your face on the victim. Put the mind down. It is freelancing against you. Slip: \"The worry is loud. It is also mostly fiction. Sleep anyway.\"",
    reversed:
      "The nightmare is cracking, or you're hugging the anxiety because the anxiety knows your name. A kinder morning is allowed. So is calling an actual human instead of the ceiling. Slip: \"The dark is thinning. Don't renew the subscription.\"",
  },
  "swords-10": {
    upright:
      "Ten of Swords is ruin, and the card is not subtle, and neither am I. It's over in the worst way. There is a dawn in the corner that is not a punchline. Survive the picture. Don't add a monologue. Slip: \"Rock bottom sends its regards. The dawn is small and real.\"",
    reversed:
      "You can survive it. That's the reversed card: getting up, or the last twitch of a disaster you won't release because it's your best material. The swords are not a mattress. Slip: \"It can be survived. You have to stop narrating the corpse.\"",
  },
  "swords-page": {
    upright:
      "The Page of Swords is a new idea with an edge. Curious. Ask the question. Don't poke people to feel clever. Clever is cheap in this lot. I sell it by the insult. Slip: \"Curiosity with an edge. Use the question, not the wound.\"",
    reversed:
      "Gossip, a half-baked notion, words as little knives you're proud of. All talk. If this is you, sheathe it until you know something that survives daylight. Slip: \"The news is sloppy. So is the impulse to repeat it.\"",
  },
  "swords-knight": {
    upright:
      "The Knight of Swords thinks fast and talks faster, and he charges like speed were evidence. Useful in a fire. A catastrophe as a lifestyle. Aim, then go. In that order, genius. Slip: \"Intellect at a gallop. Check you're charging the right army.\"",
    reversed:
      "Reckless, scattered, armor on a panic. A sharp mind with no aim cuts the nearest thing, which is usually you, then your friends, then the group text. Dismount. Slip: \"The charge is out of control. Dismount before the speech.\"",
  },
  "swords-queen": {
    upright:
      "The Queen of Swords can say the true thing without turning it into a blood sport. Clear, boundaried, a little sad, which is what clarity costs. Be her when you open your mouth. Slip: \"A clean truth is available. Deliver it without the extra cut.\"",
    reversed:
      "Cold, bitter, the blade promoted to a personality. Honest became cruel around the third winter. You're not insightful. You're lonely and sharp, and people can tell. Slip: \"The truth does not require a victim. Put the extra blade away.\"",
  },
  "swords-king": {
    upright:
      "The King of Swords decides with a mind, not a mood. Ethics, a standard, a ruling you could show someone without blushing. If you can do that today, do it. Certainty is not the same animal. Slip: \"A fair judgment is possible. It will not feel like a victory lap.\"",
    reversed:
      "Tyranny of the intellect. He wins the argument, loses the room, and calls that principle. A well-read bully is still a bully. I have the degree. It didn't help. Slip: \"Being right is not a license. You have been using it as one.\"",
  },
  "pentacles-ace": {
    upright:
      "The Ace of Pentacles is a real coin in a real doorway. A chance you can touch. Take it. Plant it. Show up Monday. Do not workshop the coin until it leaves with someone less precious. Slip: \"An opportunity you can touch. Grab it before you workshop it.\"",
    reversed:
      "Delayed, or you fumbled a solid offer because it wasn't cinematic enough. Look at the ground. The chance may still be in the gravel by the cart return. Slip: \"The chance slipped. Some of that was your hands.\"",
  },
  "pentacles-2": {
    upright:
      "Two of Pentacles: you can keep two real priorities in the air if you stop adding a third so you feel alive. Adapt. Don't drop the rent for the dream or the dream for the bit. Slip: \"Balance, practical. You can do two things. Not six.\"",
    reversed:
      "You dropped one and you're calling it a philosophy of flow. Overcommitted, sloppy, the juggle as identity. Put a coin down on purpose before both hit your face. Slip: \"Too many balls. The ground is undefeated.\"",
  },
  "pentacles-3": {
    upright:
      "Three of Pentacles: you are good at a thing and other people can see the work. Collaboration, craft, a nod you didn't have to extort. Let them nod. Do the next competent hour. Slip: \"Your work is good. Accept the nod without a speech.\"",
    reversed:
      "Mediocre effort, no teamwork, or your skill is being spent and the credit is walking out in someone else's coat. Demand the name on the work or stop doing unpaid mastery. Slip: \"The work is sloppy or the credit is stolen. Find out which.\"",
  },
  "pentacles-4": {
    upright:
      "Four of Pentacles is a man hugging coins like they might love him back. Security is fine. The clutch is fear with a vault door. You can be safe and still unclench one finger. Slip: \"You are safe. You are also squeezing. Relax one finger.\"",
    reversed:
      "The grip loosens. Generosity, or a control you needed to lose. Let one coin go. The identity will survive the terrible feeling of not clutching. I promise. I lie less about this. Slip: \"Letting go of the coin will not kill you. The clutching might.\"",
  },
  "pentacles-5": {
    upright:
      "Five of Pentacles: out in the snow, and the window is lit, and you won't walk toward it because help would ruin the tragedy. Pride is expensive. The door is embarrassing and real. Use it. Slip: \"You are out in the weather. The door is lit. Use it.\"",
    reversed:
      "The worst is easing, or you're so married to the struggle you'd rather freeze than knock. Recovery is slow and unphotographic. Knock. I'll wait. I'm already outside. Slip: \"The cold can break. You have to walk toward the light, not narrate it.\"",
  },
  "pentacles-6": {
    upright:
      "Six of Pentacles is give and take that isn't a power play. A gift you should take without writing a constitution, or a gift you should give without an audience. Pick a side that isn't a performance. Slip: \"Help is moving. Be on a side of it that isn't a performance.\"",
    reversed:
      "Strings on the money. Debt in a kind voice, or you refusing help so you can stay the martyr with the good posture. Somebody is keeping score. Often it's you, with a little notebook. Slip: \"The gift has a hook. Or your pride does. Inspect both.\"",
  },
  "pentacles-7": {
    upright:
      "Seven of Pentacles: the harvest isn't ready and you're staring like impatience were fertilizer. Assess. Don't quit. Don't pick it green and then blame the plant. Slip: \"The results are not in. Staring harder is not farming.\"",
    reversed:
      "Impatient, or watering a dead project because the hours feel like a debt the plant owes you. Look at the fruit, not the timesheet. If it isn't growing, the nobility is fake. Slip: \"If it's not growing, stop calling the wait noble.\"",
  },
  "pentacles-8": {
    upright:
      "Eight of Pentacles is reps. The next coin. Mastery is a pile of ordinary afternoons, which I know offends your sense of plot. Sit at the bench. The miracle is closed today. Slip: \"Skill is available. It costs repetition. You wanted a miracle.\"",
    reversed:
      "Corner-cutting, or perfectionism that finishes nothing, which is laziness in a nicer coat. The workbench is a mirror. Sit down or admit you like the idea of skill more than the calluses. Slip: \"The craft is sloppy. Ambition does not sand it.\"",
  },
  "pentacles-9": {
    upright:
      "Nine of Pentacles: comfort you built. The vineyard is yours. Enjoy the hour without apologizing, and without staffing the gate against everyone who isn't you. A falcon is a pet, not a moat. Slip: \"You earned a good hour. Sit in it. Don't staff it with guards.\"",
    reversed:
      "The luxury is hollow, or the route to it looks worse in daylight than it did on the invoice. A fine room and a bad sleep is not the win you described to me. Slip: \"The gains feel thin. Check what you paid that isn't money.\"",
  },
  "pentacles-10": {
    upright:
      "Ten of Pentacles is a household that lasts. Wealth that includes other people, which is the part you keep editing out. If you're building it, build it. If you're posing, the dog already knows. Slip: \"Something lasting is possible. It includes people. Awkward.\"",
    reversed:
      "The inheritance is rotten. Family money, family mess, a tradition that eats the children and calls it continuity. Don't romanticize the estate. Fix the will or leave it. Slip: \"The family fortune has a smell. You are allowed to notice.\"",
  },
  "pentacles-page": {
    upright:
      "The Page of Pentacles has a coin and a plan and the decency to still be a student. Study the practical thing. Ambition with some humility left on it. Be that for a month. Slip: \"A practical dream. Study it. Don't just wear the boots.\"",
    reversed:
      "The student who will not practice. Lazy, or so in love with the perfect plan he never enrolls. Pick a small real task. Do it badly. Do it again. That's the whole education. Slip: \"The ambition is unfunded by effort. Classic.\"",
  },
  "pentacles-knight": {
    upright:
      "The Knight of Pentacles is the least sexy horse in the deck and the one that arrives. Slow, reliable, routine. If this is the week, keep the pace and stop apologizing for not being a comet. Slip: \"Steady work wins. You will be bored. Do it anyway.\"",
    reversed:
      "The plod turned into a coffin with a route. Stubborn, perfectionist, a grind that forgot why it started. Change one thing. The field will not die of a varied Tuesday. Slip: \"The plod turned into a rut. The horse is fine. You are not.\"",
  },
  "pentacles-queen": {
    upright:
      "The Queen of Pentacles makes the garden feed actual people. Practical care, a budget, warm hands. Useful and kind, which is harder than being either and tweeting about it. Slip: \"Comfort you can use. Offer it or take it. No speech.\"",
    reversed:
      "Smothering, or neglecting the real house while performing abundance for guests. She counts everyone's portion, including the emotional ones. Ease off. The plants can tell. Slip: \"Care became control. The garden can feel it.\"",
  },
  "pentacles-king": {
    upright:
      "The King of Pentacles built it and still checks the walls. A long view, stability, the unsexy empire of maintenance. If you have the means, use them without a coronation. If you don't, stop sneering at the man who does. Slip: \"Security, earned. Maintain it. Don't worship it.\"",
    reversed:
      "Miser, status machine, the empire bigger than the reason it existed. The fortune owns the man. That's a demotion with better upholstery. I have seen the upholstery. It sheds. Slip: \"The fortune owns the man. Embarrassing, and common.\"",
  },
};

export function getCardLine(cardKey: string, orientation: Orientation): string {
  const entry = INTERPRETATIONS[cardKey];
  if (!entry) {
    throw new Error(`Lyle doesn't recognize a card with key "${cardKey}".`);
  }
  return entry[orientation];
}
