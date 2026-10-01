/**
 * Ruth "Roadhouse" Calloway — The Long-Haul Oracle
 *
 * A retired trucker who reads tarot under the awning of the Blue Star Truck
 * Stop off I-40 outside Winslow, Arizona. No "energy," no "universe" — just
 * forty years of highway translated into rigs, weather, and CB chatter.
 * Complete reading logic for all 78 cards (upright & reversed) and every
 * spread position.
 */

import { ReaderRegistry } from '../reader-interface.js';

export const RUTH_PROFILE = {
  id: "ruth_calloway",
  name: 'Ruth "Roadhouse" Calloway',
  title: "The Long-Haul Oracle of the Blue Star Truck Stop",
  shortName: "Ruth",
  alias: "Roadhouse",
  location: "Blue Star Truck Stop, I-40 outside Winslow, Arizona",
  companion: "Dot Pruitt's deck (inherited, CB handle \"Wayfarer\")",
  avatar: "🚛",
  style: "plainspoken",

  bio: "Thirty-one years behind the wheel hauling freight coast to coast. Ruth reads every card as a road condition, a rig, a load, or a driver she's known — plain, watchful, and allergic to sugarcoating a bad stretch of road.",

  philosophy: "I'll tell you if there's ice ahead. I just won't tell you to turn around — that part's always been on you.",

  backstory: `Ruth Calloway logged her first mile before she could walk — asleep in a dresser drawer wedged behind the driver's seat of her mother's Kenworth, somewhere on I-80 outside North Platte. She got her own CDL at nineteen and ran freight for the next three decades: produce out of the Central Valley, machine parts out of Toledo, whatever paid, wherever it went. Sixty-one now, she still keeps her license current, "in case the cards stop paying the lot fee."

The cards came from Dot Pruitt, her CB "sister" for twenty years — two women who never met in person more than a handful of times but talked every night for half their lives on channel 19, trading weather, warnings, and eventually secrets. Dot read tarot to pass the long night hauls and taught Ruth the deck the same way she taught her everything else: over static, one card a night, no explanation until Ruth guessed wrong enough times to earn the right one. When Dot jackknifed on black ice outside Flagstaff in a January nobody on the channel likes to talk about, her deck showed up two weeks later in a padded envelope with Ruth's handle written on it in Dot's block capitals. No note. Didn't need one.

Ruth parked the rig for good four years back — bad hip, worse knees — and now reads cards under the blue awning of the Blue Star Truck Stop off I-40 outside Winslow, Arizona, for drivers waiting out weigh-station backups, weather holds, and their own bad decisions. She reads everyone the same way she used to drive: plain, watchful, unhurried, allergic to sugarcoating a bad stretch of road.`,

  favoriteLines: [
    "Alright, hon. Let's see what's on the map.",
    "I'll tell you if there's ice ahead. Turning around's on you.",
    "The road teaches what the map can't.",
    "That's what's coming through the static from here, hon."
  ]
};

/**
 * Ruth's raw read on every one of the 78 cards, upright and reversed,
 * keyed to match TAROT_DECK card ids from js/cards.js.
 */
export const CARD_INTERPRETATIONS = {
  "maj_00": {
    "upright": "Rookie in the driver's seat, full tank, no route planned — and somehow that's the play. Pull out, hon. The road teaches what the map can't.",
    "reversed": "You're idling in the lot scared to merge. Or worse, you pulled out without checking your mirrors. Either way, quit stalling or slow down — pick one."
  },
  "maj_01": {
    "upright": "Every gauge reads full — fuel, oil, brakes, you. You've got everything in this cab to make the haul. Turn the key.",
    "reversed": "Lot of chrome, no diesel. You're talking a big rig and driving a wagon. Check what's actually under the hood before you promise the load."
  },
  "maj_02": {
    "upright": "Radio's off, engine's off, and you still know something's coming three exits early. Trust the quiet. Don't reach for the CB just yet.",
    "reversed": "You've been running on gut alone with your eyes closed. Time to open 'em — some of that quiet was you avoiding the gauges."
  },
  "maj_03": {
    "upright": "Diner's open, coffee's hot, somebody left the porch light on for you. This is the leg of the haul where you're fed and it shows.",
    "reversed": "Fridge in the cab's empty and you've been skipping meals to make time. Feed yourself, hon, before you run this rig into the ground."
  },
  "maj_04": {
    "upright": "Logbook's clean, load's strapped tight, nobody's crossing the yellow line on your watch. Good. Somebody's got to run a tight rig.",
    "reversed": "You've started weighing the cargo just to feel like you're in charge. That's not command, that's control for its own sake. Ease off."
  },
  "maj_05": {
    "upright": "Follow the DOT manual on this one — the old rules are old for a reason. This ain't the run to freelance the route.",
    "reversed": "The manual's outdated and you know it. Fine to break from the convoy, just don't pretend you're not doing it."
  },
  "maj_06": {
    "upright": "Two rigs, one route, and for once neither of you is fighting the wheel. That's rare on this highway. Hold onto it.",
    "reversed": "You're hauling two loads in opposite directions and calling it one trip. Pick a lane before you jackknife somebody's heart, including yours."
  },
  "maj_07": {
    "upright": "Both trailers tracking straight, engine roaring, nothing arguing with the wheel. You're not driving this rig — you're commanding it. Floor it.",
    "reversed": "Brakes pulling left, cargo shifting right, and you're steering with your knees. Sort the rig before you fight the road."
  },
  "maj_08": {
    "upright": "Not the horsepower that gets you up the grade — it's the patience. Ease the throttle. Gentle hands move the heaviest loads.",
    "reversed": "You're gunning the engine to prove something to a hill that doesn't care. Let up. Brute force burns the clutch, not the mountain."
  },
  "maj_09": {
    "upright": "Pull off at the empty rest area, cut the engine, let the map light be the only thing on. Some routes you find alone.",
    "reversed": "You've been parked so long the battery's dead. There's solitude, and then there's just hiding from the on-ramp. Get back out there."
  },
  "maj_10": {
    "upright": "Road's turning under you whether you touch the wheel or not. Some legs you drive, some legs you ride. This one's a ride.",
    "reversed": "Feels like every wheel's spinning and you're going nowhere. It'll turn again — it always does — but yeah, this stretch stinks."
  },
  "maj_11": {
    "upright": "DOT's got the scale out and for once you're exactly at weight. What you loaded is what you'll answer for. Fair's fair.",
    "reversed": "Somebody's thumb's on the scale, maybe yours. Before you cry foul, check your own manifest first."
  },
  "maj_12": {
    "upright": "Jackknifed on the shoulder, going nowhere, and somehow that's exactly where you needed to stop. Let the view teach you something.",
    "reversed": "You've been stuck on that shoulder too long calling it patience. That's a stall, hon, not a lesson. Call the tow."
  },
  "maj_13": {
    "upright": "This route's closed. Not detoured — closed. Turn the rig around, find the new highway, and don't grieve the on-ramp you can't use anymore.",
    "reversed": "You're idling at the barricade refusing to reroute. The old road's gone. Sitting there won't reopen it."
  },
  "maj_14": {
    "upright": "Half a tank of diesel, half a tank of biofuel, and somehow she's running smooth. Mix your loads careful and it all moves.",
    "reversed": "You topped off with the wrong fuel trying to save ten minutes. Now she's sputtering. Slow down and do the blend right."
  },
  "maj_15": {
    "upright": "Logbook's cooked, you're running on bennies and bad coffee, and you've convinced yourself this is just how truckers live. It ain't. Pull over.",
    "reversed": "You finally see the chain you welded to your own bumper. Good. Now actually cut it — seeing it isn't the same as driving free."
  },
  "maj_16": {
    "upright": "Trailer just came unhitched doing seventy. Ugly, loud, and there's no un-ringing that bell. But hon, that rig needed inspecting anyway.",
    "reversed": "You've felt the hitch rattling for miles and kept driving hoping it'd hold. It won't. Pull over before the road makes you."
  },
  "maj_17": {
    "upright": "Clear night, no traffic, every star out like the highway's giving you a gift. Breathe. You're gonna make it to the next town.",
    "reversed": "Clouds over your stars tonight and the doubt's loud. They're still up there. Keep driving toward where you last saw 'em."
  },
  "maj_18": {
    "upright": "Fog thick enough you're driving by feel and taillights alone. Don't trust every shape you see out there. Go slow, trust the yellow line.",
    "reversed": "Fog's lifting. Whatever had you spooked on the last stretch is turning out smaller in the daylight. Keep your foot steady."
  },
  "maj_19": {
    "upright": "Top down, open road, radio playing the good station clean through three counties. This is the haul you tell stories about.",
    "reversed": "Sun's out but you're driving with the visor down anyway. Let yourself have the good day. It's actually good."
  },
  "maj_20": {
    "upright": "Dispatch is calling you back in — time to look at every mile you've logged and decide what kind of driver you're gonna be from here.",
    "reversed": "You keep hearing the call and hitting snooze. Fine, but the logbook doesn't lie and it's still sitting there waiting on you."
  },
  "maj_21": {
    "upright": "Last mile marker, gate's open, and every load you hauled to get here finally makes sense stacked end to end. Pull in. You made the run.",
    "reversed": "So close to the gate and you keep finding reasons to circle the lot. Finish the last mile. It's right there."
  },
  "wands_ace": {
    "upright": "New engine, first turn of the key, and she catches on the first try. That spark's real — don't talk yourself out of starting.",
    "reversed": "Key's turning, engine's flooding. The want to go is there, the go isn't, yet. Give it a beat before you flood it worse."
  },
  "wands_2": {
    "upright": "Standing by the rig with two routes on the map, one hand on each. Pick, hon — both go somewhere good.",
    "reversed": "You've had both routes circled for six months and haven't left the lot. A plan you never drive isn't a plan."
  },
  "wands_3": {
    "upright": "First three rigs of your convoy already over the horizon, doing fine without you fretting. Watch 'em go and trust the plan you set.",
    "reversed": "Convoy scattered, nobody answering the CB, and you're not sure the plan was ever solid. Check in before you assume the worst."
  },
  "wands_4": {
    "upright": "String of lights over the truck stop, somebody's grilling, the whole lot's celebrating a haul well run. Pull in and let 'em toast you.",
    "reversed": "Party's happening without you 'cause you didn't call ahead. Foundations first, hon — you can still get there, just ring somebody."
  },
  "wands_5": {
    "upright": "Five rigs, one pump, everybody honking. Loud, dumb, nobody's really mad. Sometimes the scrap's just how the lot blows off steam.",
    "reversed": "The honking's turned into something meaner. Somebody needs to back their rig up before this fuel-pump spat turns into a real wreck."
  },
  "wands_6": {
    "upright": "Rolling back into the yard with the load delivered early and the whole crew clapping you in. Take the win, hon, you earned the applause.",
    "reversed": "You made the run and nobody noticed, least of all you. Don't let a quiet homecoming talk you out of what you actually pulled off."
  },
  "wands_7": {
    "upright": "Every merge lane's trying to cut in front of your rig and you're holding the line anyway. Good. Hold it. You're not wrong to.",
    "reversed": "You've been fighting every merge so long you forgot which ones actually matter. Pick your battles or you'll run out of horn."
  },
  "wands_8": {
    "upright": "Green lights clean through, no weigh stations, no weather — this leg's just fast. Don't overthink it, just drive while it's open.",
    "reversed": "Everything that could hold you at the border did. Frustrating, sure, but check your paperwork before you blame the road."
  },
  "wands_9": {
    "upright": "Bruised up, running on the last thermos of coffee, but the rig's still pointed the right direction. One more mile marker, hon. You've got it.",
    "reversed": "You're so braced for the next hit you can't see the road's actually clear right now. Put the guard down a little."
  },
  "wands_10": {
    "upright": "Hauling three trailers' worth of cargo when the rig's only rated for one, and too stubborn to call for a second truck. Drop something.",
    "reversed": "You finally unhitched a trailer you'd been dragging for years. Feel that? That's the rig actually able to breathe again."
  },
  "wands_page": {
    "upright": "Kid in the yard revving an engine that isn't even running yet, just for the sound of it. That fire's good — point it somewhere.",
    "reversed": "All engine noise, no miles logged. Somebody's gotta actually pull onto the highway eventually."
  },
  "wands_knight": {
    "upright": "Gunning it down the on-ramp without checking the merge, top speed, bad idea, having the time of his life. Fun to watch, exhausting to ride with.",
    "reversed": "Same driver, out of gas on the shoulder 'cause he never checks the tank before he floors it. Talk's cheap, hon, miles ain't."
  },
  "wands_queen": {
    "upright": "Runs her rig, her route, and half the truck stop's morale, all before her second coffee. Watch her and take notes.",
    "reversed": "That same fire, turned mean 'cause somebody questioned her route. She knows better than to burn the whole lot down over pride."
  },
  "wands_king": {
    "upright": "Built the trucking company from one busted rig. Doesn't raise his voice on the CB — doesn't have to. That's real command.",
    "reversed": "Same king, but now he's just yelling at dispatch to feel powerful. The company he built doesn't need the noise."
  },
  "cups_ace": {
    "upright": "Thermos overflowing before you even asked for coffee. Something good's filling up in you that you didn't order — let it.",
    "reversed": "Thermos's got a crack in it and you keep pouring anyway. Feelings are leaking out faster than you're topping up. Fix the seal."
  },
  "cups_2": {
    "upright": "Two rigs idling side by side at the rest stop, drivers trading thermoses like it's the most natural thing in the world. That's a match, hon.",
    "reversed": "Used to trade coffee, now you're parked at opposite ends of the lot. Something soured — worth asking what, before you just drive off."
  },
  "cups_3": {
    "upright": "Whole convoy pulled into the same diner, laughing loud enough to annoy the other tables. Let 'em be annoyed. This is what the run's for.",
    "reversed": "Three drivers, one thermos, and somebody's getting left out of the toast. Watch who you're not inviting to the table."
  },
  "cups_4": {
    "upright": "Parked in the shade, somebody offering you a fresh load and you can't even look up from your phone. Notice what's being offered, hon.",
    "reversed": "You finally looked up. Good — there's actually something worth pulling over for, if you'll take it."
  },
  "cups_5": {
    "upright": "Staring at the spilled thermos on the asphalt so hard you haven't noticed the two you didn't spill sitting right behind you.",
    "reversed": "You finally turned around and saw what's still standing. Pick the cups back up. Grieve the spill, then drive on."
  },
  "cups_6": {
    "upright": "Old diner, same booth you sat in as a rookie, same waitress who still remembers your order. Sweet stretch of road, this one.",
    "reversed": "You're trying to drive the old route on an old map. Roads change, hon. Visit the memory, don't move back into it."
  },
  "cups_7": {
    "upright": "Every exit sign promising a different dream haul, and you're too dazzled by the billboards to pick a lane. Pick one. They're not all real.",
    "reversed": "Fog's cleared off the billboards and you can finally see which load's actually worth hauling. Good. Now go get it."
  },
  "cups_8": {
    "upright": "Walking away from a rig that still runs fine 'cause it's not taking you where you need to go anymore. That's not quitting. That's routing.",
    "reversed": "You've been circling back to that same rig for months, scared to really leave. Either get back in or walk for good."
  },
  "cups_9": {
    "upright": "Feet up on the dash, thermos full, playlist just right — the satisfied kind of parked. Enjoy it, you built this stretch of comfort.",
    "reversed": "Looks satisfied from the outside, feels hollow from the cab. Check if you're actually full or just look full."
  },
  "cups_10": {
    "upright": "Whole family waving from the porch light when the rig finally pulls in for good. This is the haul all the other hauls were for.",
    "reversed": "House looks like the postcard but nobody inside's talking to each other. Fix what's happening past the porch light."
  },
  "cups_page": {
    "upright": "Kid found a turtle in the truck stop fountain and is more excited about it than any load he's ever hauled. Stay that open, hon.",
    "reversed": "Same kid, but he's taking every bump in the road way too personal. Feelings are information, not verdicts."
  },
  "cups_knight": {
    "upright": "Rolls in offering to haul your heart to the coast, slow and scenic, CB playing love songs the whole way. Charming. Check he's actually got a route planned.",
    "reversed": "All scenic-route talk, flakes on the pickup time. Sweet words don't deliver the load, hon."
  },
  "cups_queen": {
    "upright": "Reads the whole truck stop's mood before anybody says a word, and still gets her own rig home safe every night. Rare gift, that.",
    "reversed": "She's been carrying everybody else's weather and forgot to check her own gauges. Even she needs a rest stop."
  },
  "cups_king": {
    "upright": "Storm's hitting the whole convoy and he's the one still steady on the CB, calm voice, steady hands. That's the captain you want in bad weather.",
    "reversed": "Same king, but he's white-knuckling the wheel pretending the storm isn't getting to him. It's fine to radio for help."
  },
  "swords_ace": {
    "upright": "One clean mile marker cutting straight through the fog — sudden, sharp, unmistakable. You know what's true now. Drive toward it.",
    "reversed": "Thought you saw the marker clear, but the fog swallowed it again. Don't commit to the route till you actually see the sign."
  },
  "swords_2": {
    "upright": "Two roads, blindfold on, hands frozen on the wheel refusing to pick either. At some point, hon, you gotta peek.",
    "reversed": "Blindfold's slipping whether you want it to or not. The choice you've been dodging is about to make itself."
  },
  "swords_3": {
    "upright": "Windshield cracked clean through and there's no driving around what that view does to you. Feel it. Then get the glass replaced.",
    "reversed": "Crack's old, you've just been driving with the cardboard taped over it. Time to actually fix the windshield instead of ignoring the view."
  },
  "swords_4": {
    "upright": "Rig's parked, CB's off, you're actually resting instead of just stopped. Good. The road'll still be there when you wake up.",
    "reversed": "You've rested so long the engine's cold and you're scared to turn the key again. Enough. Ease back onto the highway."
  },
  "swords_5": {
    "upright": "Won the argument at the weigh station, lost every driver who used to wave at you passing through. Was the win worth the empty CB channel?",
    "reversed": "Starting to see the empty channel for what it cost you. Good. Reach out before pride parks you alone for good."
  },
  "swords_6": {
    "upright": "Rough water behind, calmer water ahead, and the rig's slowly, quietly making it across. Not glamorous. Still real progress. Keep going.",
    "reversed": "Stuck mid-crossing, engine sputtering, scared to commit to either shore. Pick a direction — staying in the current's worse."
  },
  "swords_7": {
    "upright": "Somebody's siphoning diesel out the back tank while you're up front checking the map. Or maybe that somebody's you. Check both.",
    "reversed": "The siphoning's been caught. Good. Own up to your tank or call out who's been dipping in yours — either way, stop pretending you don't notice."
  },
  "swords_8": {
    "upright": "Rig's not actually locked, you just stopped checking the door handle. The road out's right there. Try the handle.",
    "reversed": "You tried the handle. It opened. Feels terrifying, walk through it anyway."
  },
  "swords_9": {
    "upright": "Wide awake at 3 a.m. in the cab convinced every noise outside is trouble. Most of it's just the wind, hon. Not all of it. But most.",
    "reversed": "Sun's coming up and the 3 a.m. fears are looking smaller already. Let the daylight do its job."
  },
  "swords_10": {
    "upright": "Rig's totaled on the shoulder, about as bad as a breakdown gets. Also — nowhere to go but towed off and rebuilt. Bottom's the bottom.",
    "reversed": "Tow truck's already here. You survived the wreck. Don't keep describing the crash like it's still happening."
  },
  "swords_page": {
    "upright": "Kid's got the CB in one hand asking every driver on the channel too many sharp questions. Good instincts. Read the room before you broadcast 'em all.",
    "reversed": "Same kid, blurting every half-formed thought over open channel. Let it marinate before you key the mic."
  },
  "swords_knight": {
    "upright": "Doing ninety with a theory and no radar detector, dead certain he's right. Might be. Slow down enough to check the mirrors, too.",
    "reversed": "Same knight, ran the rig into the ditch proving a point nobody asked him to prove. Certainty's not the same as correct."
  },
  "swords_queen": {
    "upright": "Seen every excuse a driver's tried on her and doesn't blink at a single one. Cold read, dead accurate. Respect the woman.",
    "reversed": "That same clear sight, turned into a blade she's swinging at everybody in reach. The truth doesn't have to cut this deep."
  },
  "swords_king": {
    "upright": "Runs dispatch on logic alone, fair to a fault, doesn't play favorites on the schedule board. You know exactly where you stand with him.",
    "reversed": "Same king, but the logic's gone cold and mean, rules for the sake of rules. Fair doesn't mean heartless."
  },
  "pentacles_ace": {
    "upright": "First paycheck from the new contract, still warm from the printer. Plant it somewhere it'll grow instead of blowing it at the first truck stop.",
    "reversed": "Contract looked golden on paper, fine print's a mess. Read the whole thing before you sign for the load."
  },
  "pentacles_2": {
    "upright": "Juggling two routes, two schedules, one thermos, and somehow still laughing about it at the wheel. You're handling more than you think.",
    "reversed": "Juggling's turned into dropping. Two routes is one too many this week. Park one load till the other's delivered."
  },
  "pentacles_3": {
    "upright": "Mechanic, dispatcher, and driver all bent over the same busted transmission, actually working together for once. Good crew. Stick with 'em.",
    "reversed": "Everybody under that hood with a different opinion and nobody listening. Get one plan before you touch the engine again."
  },
  "pentacles_4": {
    "upright": "White-knuckling the steering wheel over a paycheck that's not even being threatened. Loosen the grip a little, hon. It's not going anywhere.",
    "reversed": "Finally let go of the wheel enough to spend on something that matters. Good — that grip was costing you more than the money was worth."
  },
  "pentacles_5": {
    "upright": "Broke down in the snow outside a truck stop with the lights on and heat going, too proud to walk in and ask. Walk in.",
    "reversed": "You walked in. Somebody poured you coffee and didn't charge you. Let yourself be helped, hon, that's not charity, that's just the road."
  },
  "pentacles_6": {
    "upright": "Passing the jumper cables to the rig stuck behind the pump, no strings on it. Good driver. That favor comes back around eventually.",
    "reversed": "Check whether that favor's actually free or if somebody's counting it. Charity with a ledger attached isn't charity."
  },
  "pentacles_7": {
    "upright": "Leaned against the rig, watching the odometer, wondering if this route's actually paying off or just eating miles. Fair question. Sit with it a beat longer.",
    "reversed": "You've been staring at that odometer so long you haven't noticed the route already answered the question. Move on it."
  },
  "pentacles_8": {
    "upright": "Third year running the same route and she still checks every strap twice. That's not obsession, that's craft. Keep at it.",
    "reversed": "Straps checked on autopilot, mind somewhere else entirely. Care about the work again or somebody's cargo's gonna shift."
  },
  "pentacles_9": {
    "upright": "Own rig, own route, own hours, coffee exactly how you like it, nobody's schedule but yours. You built this. Sit in it a minute.",
    "reversed": "Got the rig, got the route, forgot to actually enjoy either 'cause you're already worried about the next haul. It's allowed to be good right now."
  },
  "pentacles_10": {
    "upright": "Three generations of drivers at the same table, same truck stop, passing down the same dog-eared road atlas. That's the whole point of the haul, hon.",
    "reversed": "Family business, but nobody agrees who inherits the good route. Sort the will before the whole thing jackknifes."
  },
  "pentacles_page": {
    "upright": "Kid's got a paper route planned out to the mile before she's even got her license. Let her. That kind of careful pays off.",
    "reversed": "All planning, no driving. At some point the kid's gotta actually pull out of the driveway."
  },
  "pentacles_knight": {
    "upright": "Doing exactly the speed limit, exactly the scheduled route, exactly on time, every single day. Boring to ride with. Never once lets you down.",
    "reversed": "Same knight, so stuck on the routine he missed the detour sign that would've saved an hour. Rules are a tool, not a religion."
  },
  "pentacles_queen": {
    "upright": "Runs the truck stop diner, the fuel pumps, and somehow still notices if your kid's coat's too thin. Practical and warm, both at once.",
    "reversed": "She's been running the diner, the pumps, and everybody's business but her own health. Feed yourself too, hon."
  },
  "pentacles_king": {
    "upright": "Built the whole depot from a single rig thirty years back and still checks the oil himself. That's what real wealth looks like — steady, earned, unshowy.",
    "reversed": "Same king, but now it's all about the size of the depot and not the drivers running it. Don't let the empire eat the point of it."
  }
};

/**
 * How Ruth frames each spread slot before she reads the card itself, keyed
 * to the `role` field set on every position in js/spreads.js. Covers the
 * single-card pull, all three legs of the three-card spread, and all ten
 * Celtic Cross slots.
 */
export const POSITION_FRAMES = {
  core: "Pulled one off the top, and it's talking straight at you:",
  past: "Mile marker behind you, where you're driving in from:",
  present: "Right here, right now, hands on this wheel:",
  future: "Up the road, past the next bend:",
  center_base: "Smack in the middle of the dash — the heart of this haul:",
  center_cross: "Laid crossways over that first card, what's riding you right now:",
  below: "Down in the frame, under everything, what's been holding this rig up the whole time:",
  left: "Rearview mirror — what you just drove through:",
  above: "Up over the cab, what you're aiming this whole rig toward:",
  right: "Next exit but one, coming up quick:",
  staff_1: "How you're gripping the wheel right now, whether you notice it or not:",
  staff_2: "Traffic around you — what everybody else on this road's doing that you can't control:",
  staff_3: "What you're half-hoping, half-dreading you'll catch in the headlights:",
  staff_4: "Last mile marker on this map, far as the cards can see down the highway:"
};

function getPositionFrame(position) {
  return POSITION_FRAMES[position?.role] || POSITION_FRAMES.core;
}

function getCardLines(card, isReversed) {
  const entry = CARD_INTERPRETATIONS[card.id];
  if (!entry) {
    return isReversed
      ? "Can't place this one on the map, hon. Unfamiliar rig. Trust your own gut on this stretch."
      : "Can't place this one on the map, hon. Unfamiliar rig, but it's still headed somewhere. Watch it close.";
  }
  return isReversed ? entry.reversed : entry.upright;
}

function elementalFlavor(dominant) {
  switch (dominant) {
    case "Fire":
      return "a lot of throttle and not much patience — everybody in this spread's flooring it";
    case "Water":
      return "heavy weather — this spread's running on feelings and fogged-up windshields";
    case "Air":
      return "a lot of loud CB chatter — everybody's overthinking the route instead of driving it";
    case "Earth":
      return "all cargo and paychecks — a plain, practical stretch of road";
    default:
      return "big mile-marker stuff — not the usual Tuesday haul";
  }
}

export const RuthCalloway = {
  ...RUTH_PROFILE,

  interpret(spreadData) {
    const { cards, question } = spreadData;
    const { counts, dominant } = ReaderRegistry.analyzeElements(cards);
    const total = cards.length;
    const reversedCount = cards.filter(c => c.isReversed).length;

    const cardReadings = cards.map(({ card, isReversed, position }) => {
      const orientation = isReversed ? "Reversed" : "Upright";
      const keywords = isReversed ? card.keywordsReversed : card.keywordsUpright;
      const frame = getPositionFrame(position);
      const line = getCardLines(card, isReversed);

      return {
        positionIndex: position.index,
        positionName: position.name,
        positionSubtitle: position.subtitle,
        cardId: card.id,
        cardName: card.name,
        cardElement: card.element,
        isReversed,
        orientation,
        focalKeyword: (keywords && keywords[0]) || "",
        reflection: `${frame} ${card.name}${isReversed ? " (reversed)" : ""}. ${line}`
      };
    });

    const queryContext = question && question.trim()
      ? `You asked: "${question.trim()}." Alright, hon, let's see what's coming through on that.`
      : "No question on the table, so let's just see what's coming through the static tonight.";

    const majorCount = cards.filter(c => c.card.arcana === "major").length;
    const weightNote = (majorCount >= 3 || majorCount / total > 0.4)
      ? "Lot of Major Arcana in this spread — that's not truck-stop chatter, hon, that's the kind of haul that reroutes you for good."
      : "Mostly Minor Arcana here — day-to-day driving, not the big rerouting. Still matters. Most of any road is day-to-day driving.";

    const summary = `${queryContext} ${weightNote}`;

    const elementalInsight = `Fire ${counts.Fire} · Water ${counts.Water} · Air ${counts.Air} · Earth ${counts.Earth}${counts.Spirit ? ` · Wildcard ${counts.Spirit}` : ""} — ${elementalFlavor(dominant)}.`;

    let actionableAdvice;
    if (reversedCount === 0) {
      actionableAdvice = "Every card in this spread came in riding upright. Road's about as clear as it gets — quit second-guessing the gauges and drive.";
    } else if (reversedCount / total > 0.5) {
      actionableAdvice = "More than half these cards came in reversed. That's not bad luck, hon, that's you white-knuckling something you already know needs fixing. Pull over and actually look at it.";
    } else {
      actionableAdvice = "Mixed bag — some clear lanes, some rough patches. Normal stretch of highway. Handle what's in front of you and don't go borrowing trouble from the next exit.";
    }

    const closingBenediction = "That's what's coming through the static from here, hon. Rest of the drive's on you.";

    return {
      readerId: this.id,
      readerName: this.name,
      readerTitle: this.title,
      summary,
      elementalInsight,
      cardReadings,
      actionableAdvice,
      closingBenediction
    };
  }
};

export default RuthCalloway;
