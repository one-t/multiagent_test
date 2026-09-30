import type { Orientation } from "../../types";

export interface CardVoiceLines {
  upright: string;
  reversed: string;
}

/**
 * Ruth's raw read on every one of the 78 cards, upright and reversed.
 * Keyed to match CardId.key from src/cards. This is the card's meaning in
 * her own words, independent of where it falls in a spread — position
 * framing is layered on separately in positions.ts.
 */
export const INTERPRETATIONS: Record<string, CardVoiceLines> = {
  // ---------------------------------------------------------------- MAJOR
  "major-0": {
    upright:
      "Rookie in the driver's seat, full tank, no route planned — and somehow that's the play. Pull out, hon. The road teaches what the map can't.",
    reversed:
      "You're idling in the lot scared to merge. Or worse, you pulled out without checking your mirrors. Either way, quit stalling or slow down — pick one.",
  },
  "major-1": {
    upright:
      "Every gauge reads full — fuel, oil, brakes, you. You've got everything in this cab to make the haul. Turn the key.",
    reversed:
      "Lot of chrome, no diesel. You're talking a big rig and driving a wagon. Check what's actually under the hood before you promise the load.",
  },
  "major-2": {
    upright:
      "Radio's off, engine's off, and you still know something's coming three exits early. Trust the quiet. Don't reach for the CB just yet.",
    reversed:
      "You've been running on gut alone with your eyes closed. Time to open 'em — some of that quiet was you avoiding the gauges.",
  },
  "major-3": {
    upright:
      "Diner's open, coffee's hot, somebody left the porch light on for you. This is the leg of the haul where you're fed and it shows.",
    reversed:
      "Fridge in the cab's empty and you've been skipping meals to make time. Feed yourself, hon, before you run this rig into the ground.",
  },
  "major-4": {
    upright:
      "Logbook's clean, load's strapped tight, nobody's crossing the yellow line on your watch. Good. Somebody's got to run a tight rig.",
    reversed:
      "You've started weighing the cargo just to feel like you're in charge. That's not command, that's control for its own sake. Ease off.",
  },
  "major-5": {
    upright:
      "Follow the DOT manual on this one — the old rules are old for a reason. This ain't the run to freelance the route.",
    reversed:
      "The manual's outdated and you know it. Fine to break from the convoy, just don't pretend you're not doing it.",
  },
  "major-6": {
    upright:
      "Two rigs, one route, and for once neither of you is fighting the wheel. That's rare on this highway. Hold onto it.",
    reversed:
      "You're hauling two loads in opposite directions and calling it one trip. Pick a lane before you jackknife somebody's heart, including yours.",
  },
  "major-7": {
    upright:
      "Both trailers tracking straight, engine roaring, nothing arguing with the wheel. You're not driving this rig — you're commanding it. Floor it.",
    reversed:
      "Brakes pulling left, cargo shifting right, and you're steering with your knees. Sort the rig before you fight the road.",
  },
  "major-8": {
    upright:
      "Not the horsepower that gets you up the grade — it's the patience. Ease the throttle. Gentle hands move the heaviest loads.",
    reversed:
      "You're gunning the engine to prove something to a hill that doesn't care. Let up. Brute force burns the clutch, not the mountain.",
  },
  "major-9": {
    upright:
      "Pull off at the empty rest area, cut the engine, let the map light be the only thing on. Some routes you find alone.",
    reversed:
      "You've been parked so long the battery's dead. There's solitude, and then there's just hiding from the on-ramp. Get back out there.",
  },
  "major-10": {
    upright:
      "Road's turning under you whether you touch the wheel or not. Some legs you drive, some legs you ride. This one's a ride.",
    reversed:
      "Feels like every wheel's spinning and you're going nowhere. It'll turn again — it always does — but yeah, this stretch stinks.",
  },
  "major-11": {
    upright:
      "DOT's got the scale out and for once you're exactly at weight. What you loaded is what you'll answer for. Fair's fair.",
    reversed:
      "Somebody's thumb's on the scale, maybe yours. Before you cry foul, check your own manifest first.",
  },
  "major-12": {
    upright:
      "Jackknifed on the shoulder, going nowhere, and somehow that's exactly where you needed to stop. Let the view teach you something.",
    reversed:
      "You've been stuck on that shoulder too long calling it patience. That's a stall, hon, not a lesson. Call the tow.",
  },
  "major-13": {
    upright:
      "This route's closed. Not detoured — closed. Turn the rig around, find the new highway, and don't grieve the on-ramp you can't use anymore.",
    reversed:
      "You're idling at the barricade refusing to reroute. The old road's gone. Sitting there won't reopen it.",
  },
  "major-14": {
    upright:
      "Half a tank of diesel, half a tank of biofuel, and somehow she's running smooth. Mix your loads careful and it all moves.",
    reversed:
      "You topped off with the wrong fuel trying to save ten minutes. Now she's sputtering. Slow down and do the blend right.",
  },
  "major-15": {
    upright:
      "Logbook's cooked, you're running on bennies and bad coffee, and you've convinced yourself this is just how truckers live. It ain't. Pull over.",
    reversed:
      "You finally see the chain you welded to your own bumper. Good. Now actually cut it — seeing it isn't the same as driving free.",
  },
  "major-16": {
    upright:
      "Trailer just came unhitched doing seventy. Ugly, loud, and there's no un-ringing that bell. But hon, that rig needed inspecting anyway.",
    reversed:
      "You've felt the hitch rattling for miles and kept driving hoping it'd hold. It won't. Pull over before the road makes you.",
  },
  "major-17": {
    upright:
      "Clear night, no traffic, every star out like the highway's giving you a gift. Breathe. You're gonna make it to the next town.",
    reversed:
      "Clouds over your stars tonight and the doubt's loud. They're still up there. Keep driving toward where you last saw 'em.",
  },
  "major-18": {
    upright:
      "Fog thick enough you're driving by feel and taillights alone. Don't trust every shape you see out there. Go slow, trust the yellow line.",
    reversed:
      "Fog's lifting. Whatever had you spooked on the last stretch is turning out smaller in the daylight. Keep your foot steady.",
  },
  "major-19": {
    upright:
      "Top down, open road, radio playing the good station clean through three counties. This is the haul you tell stories about.",
    reversed:
      "Sun's out but you're driving with the visor down anyway. Let yourself have the good day. It's actually good.",
  },
  "major-20": {
    upright:
      "Dispatch is calling you back in — time to look at every mile you've logged and decide what kind of driver you're gonna be from here.",
    reversed:
      "You keep hearing the call and hitting snooze. Fine, but the logbook doesn't lie and it's still sitting there waiting on you.",
  },
  "major-21": {
    upright:
      "Last mile marker, gate's open, and every load you hauled to get here finally makes sense stacked end to end. Pull in. You made the run.",
    reversed:
      "So close to the gate and you keep finding reasons to circle the lot. Finish the last mile. It's right there.",
  },

  // ---------------------------------------------------------------- WANDS
  "wands-ace": {
    upright:
      "New engine, first turn of the key, and she catches on the first try. That spark's real — don't talk yourself out of starting.",
    reversed:
      "Key's turning, engine's flooding. The want to go is there, the go isn't, yet. Give it a beat before you flood it worse.",
  },
  "wands-2": {
    upright:
      "Standing by the rig with two routes on the map, one hand on each. Pick, hon — both go somewhere good.",
    reversed:
      "You've had both routes circled for six months and haven't left the lot. A plan you never drive isn't a plan.",
  },
  "wands-3": {
    upright:
      "First three rigs of your convoy already over the horizon, doing fine without you fretting. Watch 'em go and trust the plan you set.",
    reversed:
      "Convoy scattered, nobody answering the CB, and you're not sure the plan was ever solid. Check in before you assume the worst.",
  },
  "wands-4": {
    upright:
      "String of lights over the truck stop, somebody's grilling, the whole lot's celebrating a haul well run. Pull in and let 'em toast you.",
    reversed:
      "Party's happening without you 'cause you didn't call ahead. Foundations first, hon — you can still get there, just ring somebody.",
  },
  "wands-5": {
    upright:
      "Five rigs, one pump, everybody honking. Loud, dumb, nobody's really mad. Sometimes the scrap's just how the lot blows off steam.",
    reversed:
      "The honking's turned into something meaner. Somebody needs to back their rig up before this fuel-pump spat turns into a real wreck.",
  },
  "wands-6": {
    upright:
      "Rolling back into the yard with the load delivered early and the whole crew clapping you in. Take the win, hon, you earned the applause.",
    reversed:
      "You made the run and nobody noticed, least of all you. Don't let a quiet homecoming talk you out of what you actually pulled off.",
  },
  "wands-7": {
    upright:
      "Every merge lane's trying to cut in front of your rig and you're holding the line anyway. Good. Hold it. You're not wrong to.",
    reversed:
      "You've been fighting every merge so long you forgot which ones actually matter. Pick your battles or you'll run out of horn.",
  },
  "wands-8": {
    upright:
      "Green lights clean through, no weigh stations, no weather — this leg's just fast. Don't overthink it, just drive while it's open.",
    reversed:
      "Everything that could hold you at the border did. Frustrating, sure, but check your paperwork before you blame the road.",
  },
  "wands-9": {
    upright:
      "Bruised up, running on the last thermos of coffee, but the rig's still pointed the right direction. One more mile marker, hon. You've got it.",
    reversed:
      "You're so braced for the next hit you can't see the road's actually clear right now. Put the guard down a little.",
  },
  "wands-10": {
    upright:
      "Hauling three trailers' worth of cargo when the rig's only rated for one, and too stubborn to call for a second truck. Drop something.",
    reversed:
      "You finally unhitched a trailer you'd been dragging for years. Feel that? That's the rig actually able to breathe again.",
  },
  "wands-page": {
    upright:
      "Kid in the yard revving an engine that isn't even running yet, just for the sound of it. That fire's good — point it somewhere.",
    reversed:
      "All engine noise, no miles logged. Somebody's gotta actually pull onto the highway eventually.",
  },
  "wands-knight": {
    upright:
      "Gunning it down the on-ramp without checking the merge, top speed, bad idea, having the time of his life. Fun to watch, exhausting to ride with.",
    reversed:
      "Same driver, out of gas on the shoulder 'cause he never checks the tank before he floors it. Talk's cheap, hon, miles ain't.",
  },
  "wands-queen": {
    upright:
      "Runs her rig, her route, and half the truck stop's morale, all before her second coffee. Watch her and take notes.",
    reversed:
      "That same fire, turned mean 'cause somebody questioned her route. She knows better than to burn the whole lot down over pride.",
  },
  "wands-king": {
    upright:
      "Built the trucking company from one busted rig. Doesn't raise his voice on the CB — doesn't have to. That's real command.",
    reversed:
      "Same king, but now he's just yelling at dispatch to feel powerful. The company he built doesn't need the noise.",
  },

  // ----------------------------------------------------------------- CUPS
  "cups-ace": {
    upright:
      "Thermos overflowing before you even asked for coffee. Something good's filling up in you that you didn't order — let it.",
    reversed:
      "Thermos's got a crack in it and you keep pouring anyway. Feelings are leaking out faster than you're topping up. Fix the seal.",
  },
  "cups-2": {
    upright:
      "Two rigs idling side by side at the rest stop, drivers trading thermoses like it's the most natural thing in the world. That's a match, hon.",
    reversed:
      "Used to trade coffee, now you're parked at opposite ends of the lot. Something soured — worth asking what, before you just drive off.",
  },
  "cups-3": {
    upright:
      "Whole convoy pulled into the same diner, laughing loud enough to annoy the other tables. Let 'em be annoyed. This is what the run's for.",
    reversed:
      "Three drivers, one thermos, and somebody's getting left out of the toast. Watch who you're not inviting to the table.",
  },
  "cups-4": {
    upright:
      "Parked in the shade, somebody offering you a fresh load and you can't even look up from your phone. Notice what's being offered, hon.",
    reversed:
      "You finally looked up. Good — there's actually something worth pulling over for, if you'll take it.",
  },
  "cups-5": {
    upright:
      "Staring at the spilled thermos on the asphalt so hard you haven't noticed the two you didn't spill sitting right behind you.",
    reversed:
      "You finally turned around and saw what's still standing. Pick the cups back up. Grieve the spill, then drive on.",
  },
  "cups-6": {
    upright:
      "Old diner, same booth you sat in as a rookie, same waitress who still remembers your order. Sweet stretch of road, this one.",
    reversed:
      "You're trying to drive the old route on an old map. Roads change, hon. Visit the memory, don't move back into it.",
  },
  "cups-7": {
    upright:
      "Every exit sign promising a different dream haul, and you're too dazzled by the billboards to pick a lane. Pick one. They're not all real.",
    reversed:
      "Fog's cleared off the billboards and you can finally see which load's actually worth hauling. Good. Now go get it.",
  },
  "cups-8": {
    upright:
      "Walking away from a rig that still runs fine 'cause it's not taking you where you need to go anymore. That's not quitting. That's routing.",
    reversed:
      "You've been circling back to that same rig for months, scared to really leave. Either get back in or walk for good.",
  },
  "cups-9": {
    upright:
      "Feet up on the dash, thermos full, playlist just right — the satisfied kind of parked. Enjoy it, you built this stretch of comfort.",
    reversed:
      "Looks satisfied from the outside, feels hollow from the cab. Check if you're actually full or just look full.",
  },
  "cups-10": {
    upright:
      "Whole family waving from the porch light when the rig finally pulls in for good. This is the haul all the other hauls were for.",
    reversed:
      "House looks like the postcard but nobody inside's talking to each other. Fix what's happening past the porch light.",
  },
  "cups-page": {
    upright:
      "Kid found a turtle in the truck stop fountain and is more excited about it than any load he's ever hauled. Stay that open, hon.",
    reversed:
      "Same kid, but he's taking every bump in the road way too personal. Feelings are information, not verdicts.",
  },
  "cups-knight": {
    upright:
      "Rolls in offering to haul your heart to the coast, slow and scenic, CB playing love songs the whole way. Charming. Check he's actually got a route planned.",
    reversed:
      "All scenic-route talk, flakes on the pickup time. Sweet words don't deliver the load, hon.",
  },
  "cups-queen": {
    upright:
      "Reads the whole truck stop's mood before anybody says a word, and still gets her own rig home safe every night. Rare gift, that.",
    reversed:
      "She's been carrying everybody else's weather and forgot to check her own gauges. Even she needs a rest stop.",
  },
  "cups-king": {
    upright:
      "Storm's hitting the whole convoy and he's the one still steady on the CB, calm voice, steady hands. That's the captain you want in bad weather.",
    reversed:
      "Same king, but he's white-knuckling the wheel pretending the storm isn't getting to him. It's fine to radio for help.",
  },

  // --------------------------------------------------------------- SWORDS
  "swords-ace": {
    upright:
      "One clean mile marker cutting straight through the fog — sudden, sharp, unmistakable. You know what's true now. Drive toward it.",
    reversed:
      "Thought you saw the marker clear, but the fog swallowed it again. Don't commit to the route till you actually see the sign.",
  },
  "swords-2": {
    upright:
      "Two roads, blindfold on, hands frozen on the wheel refusing to pick either. At some point, hon, you gotta peek.",
    reversed:
      "Blindfold's slipping whether you want it to or not. The choice you've been dodging is about to make itself.",
  },
  "swords-3": {
    upright:
      "Windshield cracked clean through and there's no driving around what that view does to you. Feel it. Then get the glass replaced.",
    reversed:
      "Crack's old, you've just been driving with the cardboard taped over it. Time to actually fix the windshield instead of ignoring the view.",
  },
  "swords-4": {
    upright:
      "Rig's parked, CB's off, you're actually resting instead of just stopped. Good. The road'll still be there when you wake up.",
    reversed:
      "You've rested so long the engine's cold and you're scared to turn the key again. Enough. Ease back onto the highway.",
  },
  "swords-5": {
    upright:
      "Won the argument at the weigh station, lost every driver who used to wave at you passing through. Was the win worth the empty CB channel?",
    reversed:
      "Starting to see the empty channel for what it cost you. Good. Reach out before pride parks you alone for good.",
  },
  "swords-6": {
    upright:
      "Rough water behind, calmer water ahead, and the rig's slowly, quietly making it across. Not glamorous. Still real progress. Keep going.",
    reversed:
      "Stuck mid-crossing, engine sputtering, scared to commit to either shore. Pick a direction — staying in the current's worse.",
  },
  "swords-7": {
    upright:
      "Somebody's siphoning diesel out the back tank while you're up front checking the map. Or maybe that somebody's you. Check both.",
    reversed:
      "The siphoning's been caught. Good. Own up to your tank or call out who's been dipping in yours — either way, stop pretending you don't notice.",
  },
  "swords-8": {
    upright:
      "Rig's not actually locked, you just stopped checking the door handle. The road out's right there. Try the handle.",
    reversed:
      "You tried the handle. It opened. Feels terrifying, walk through it anyway.",
  },
  "swords-9": {
    upright:
      "Wide awake at 3 a.m. in the cab convinced every noise outside is trouble. Most of it's just the wind, hon. Not all of it. But most.",
    reversed:
      "Sun's coming up and the 3 a.m. fears are looking smaller already. Let the daylight do its job.",
  },
  "swords-10": {
    upright:
      "Rig's totaled on the shoulder, about as bad as a breakdown gets. Also — nowhere to go but towed off and rebuilt. Bottom's the bottom.",
    reversed:
      "Tow truck's already here. You survived the wreck. Don't keep describing the crash like it's still happening.",
  },
  "swords-page": {
    upright:
      "Kid's got the CB in one hand asking every driver on the channel too many sharp questions. Good instincts. Read the room before you broadcast 'em all.",
    reversed:
      "Same kid, blurting every half-formed thought over open channel. Let it marinate before you key the mic.",
  },
  "swords-knight": {
    upright:
      "Doing ninety with a theory and no radar detector, dead certain he's right. Might be. Slow down enough to check the mirrors, too.",
    reversed:
      "Same knight, ran the rig into the ditch proving a point nobody asked him to prove. Certainty's not the same as correct.",
  },
  "swords-queen": {
    upright:
      "Seen every excuse a driver's tried on her and doesn't blink at a single one. Cold read, dead accurate. Respect the woman.",
    reversed:
      "That same clear sight, turned into a blade she's swinging at everybody in reach. The truth doesn't have to cut this deep.",
  },
  "swords-king": {
    upright:
      "Runs dispatch on logic alone, fair to a fault, doesn't play favorites on the schedule board. You know exactly where you stand with him.",
    reversed:
      "Same king, but the logic's gone cold and mean, rules for the sake of rules. Fair doesn't mean heartless.",
  },

  // ------------------------------------------------------------ PENTACLES
  "pentacles-ace": {
    upright:
      "First paycheck from the new contract, still warm from the printer. Plant it somewhere it'll grow instead of blowing it at the first truck stop.",
    reversed:
      "Contract looked golden on paper, fine print's a mess. Read the whole thing before you sign for the load.",
  },
  "pentacles-2": {
    upright:
      "Juggling two routes, two schedules, one thermos, and somehow still laughing about it at the wheel. You're handling more than you think.",
    reversed:
      "Juggling's turned into dropping. Two routes is one too many this week. Park one load till the other's delivered.",
  },
  "pentacles-3": {
    upright:
      "Mechanic, dispatcher, and driver all bent over the same busted transmission, actually working together for once. Good crew. Stick with 'em.",
    reversed:
      "Everybody under that hood with a different opinion and nobody listening. Get one plan before you touch the engine again.",
  },
  "pentacles-4": {
    upright:
      "White-knuckling the steering wheel over a paycheck that's not even being threatened. Loosen the grip a little, hon. It's not going anywhere.",
    reversed:
      "Finally let go of the wheel enough to spend on something that matters. Good — that grip was costing you more than the money was worth.",
  },
  "pentacles-5": {
    upright:
      "Broke down in the snow outside a truck stop with the lights on and heat going, too proud to walk in and ask. Walk in.",
    reversed:
      "You walked in. Somebody poured you coffee and didn't charge you. Let yourself be helped, hon, that's not charity, that's just the road.",
  },
  "pentacles-6": {
    upright:
      "Passing the jumper cables to the rig stuck behind the pump, no strings on it. Good driver. That favor comes back around eventually.",
    reversed:
      "Check whether that favor's actually free or if somebody's counting it. Charity with a ledger attached isn't charity.",
  },
  "pentacles-7": {
    upright:
      "Leaned against the rig, watching the odometer, wondering if this route's actually paying off or just eating miles. Fair question. Sit with it a beat longer.",
    reversed:
      "You've been staring at that odometer so long you haven't noticed the route already answered the question. Move on it.",
  },
  "pentacles-8": {
    upright:
      "Third year running the same route and she still checks every strap twice. That's not obsession, that's craft. Keep at it.",
    reversed:
      "Straps checked on autopilot, mind somewhere else entirely. Care about the work again or somebody's cargo's gonna shift.",
  },
  "pentacles-9": {
    upright:
      "Own rig, own route, own hours, coffee exactly how you like it, nobody's schedule but yours. You built this. Sit in it a minute.",
    reversed:
      "Got the rig, got the route, forgot to actually enjoy either 'cause you're already worried about the next haul. It's allowed to be good right now.",
  },
  "pentacles-10": {
    upright:
      "Three generations of drivers at the same table, same truck stop, passing down the same dog-eared road atlas. That's the whole point of the haul, hon.",
    reversed:
      "Family business, but nobody agrees who inherits the good route. Sort the will before the whole thing jackknifes.",
  },
  "pentacles-page": {
    upright:
      "Kid's got a paper route planned out to the mile before she's even got her license. Let her. That kind of careful pays off.",
    reversed:
      "All planning, no driving. At some point the kid's gotta actually pull out of the driveway.",
  },
  "pentacles-knight": {
    upright:
      "Doing exactly the speed limit, exactly the scheduled route, exactly on time, every single day. Boring to ride with. Never once lets you down.",
    reversed:
      "Same knight, so stuck on the routine he missed the detour sign that would've saved an hour. Rules are a tool, not a religion.",
  },
  "pentacles-queen": {
    upright:
      "Runs the truck stop diner, the fuel pumps, and somehow still notices if your kid's coat's too thin. Practical and warm, both at once.",
    reversed:
      "She's been running the diner, the pumps, and everybody's business but her own health. Feed yourself too, hon.",
  },
  "pentacles-king": {
    upright:
      "Built the whole depot from a single rig thirty years back and still checks the oil himself. That's what real wealth looks like — steady, earned, unshowy.",
    reversed:
      "Same king, but now it's all about the size of the depot and not the drivers running it. Don't let the empire eat the point of it.",
  },
};

export function getCardLine(cardKey: string, orientation: Orientation): string {
  const entry = INTERPRETATIONS[cardKey];
  if (!entry) {
    throw new Error(`Ruth doesn't recognize a card with key "${cardKey}".`);
  }
  return entry[orientation];
}
