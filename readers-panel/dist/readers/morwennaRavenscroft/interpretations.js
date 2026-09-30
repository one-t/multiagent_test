"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.INTERPRETATIONS = void 0;
exports.getCardLine = getCardLine;
/**
 * Madame Morwenna's bespoke readings for all 78 tarot cards, upright and reversed.
 * Keyed by CardId.key to match src/cards.
 */
exports.INTERPRETATIONS = {
    "major-0": {
        "upright": "Look at him—tiptoeing along the precipice with his heart in his hand and daylight in his marrow. The Fool does not leap because he is reckless; he leaps because the ground behind him has turned to ash. Step forward, seeker. The universe builds the bridge the moment your heel leaves the cliff edge.",
        "reversed": "Ah, the Fool stumbling backwards in terror, or lunging blindfolded into a ravine out of sheer petulance. You are either clinging to a cage because the door feels too wide, or sprinting without checking if there is water in the well. Open your eyes before your collarbone pays the price."
    },
    "major-1": {
        "upright": "Four tools upon the velvet cloth: wood, water, iron, and gold. You sit here asking if you have what it takes, yet your workbench is already crowded with miracles waiting for hands. What you call lack is merely hesitation in disguise. Speak your decree into the quiet; the aether is listening.",
        "reversed": "A parlor illusionist playing three-card monte with his own soul. Clever tongues, glittering promises, and nothing in the cupboard. Beware where your eloquence outpaces your integrity, or where you allow another's silver rhetoric to blind you to the dagger up their sleeve."
    },
    "major-2": {
        "upright": "Hush. Malachi has ceased his squawking, and so should you. The Priestess sits between the dark pillar and the pale, keeping secrets older than your lineage. What you seek is not written in ink; it is beating in the hush beneath your ribs. Do not ask for advice when your blood already gave you the answer three midnights ago.",
        "reversed": "You are suffocating your intuition beneath a mound of cold logic and parlor gossip. Why do you pretend not to hear the knock at the cellar door? Silence is not empty, darling; it is pregnant with what you are avoiding."
    },
    "major-3": {
        "upright": "A velvet gown heavy with wheat and honey. The Empress does not scrape or bargain; she blooms where she sits because she remembers the earth belongs to the tender. Nourishment is arriving—in your craft, your flesh, or your home. Stop treating rest like a stolen misdemeanor.",
        "reversed": "Smothering soil or withered branches. Either you are pouring yourself into broken jars until your well runs dry, or you have grown vain, demanding adoration without tending the hearth. You cannot harvest what you refuse to water."
    },
    "major-4": {
        "upright": "Cold granite, carved armrests, and a gaze that measures kingdoms. The Emperor demands order where you have tolerated chaos. Build your boundary, lock the gate, and stop apologizing for possessing authority over your own estate. Sovereignty is not tyranny; it is stewardship.",
        "reversed": "A brittle tyrant screaming at shadows, or a ruler who has let the moat fill with mud. Rigidity has calcified into cruelty, or spineless surrender has invited thieves into the throne room. Reclaim your spine before someone else commands your knees."
    },
    "major-5": {
        "upright": "The smell of ancient hymnals and gilded keystones. The Hierophant stands at the threshold of tradition and lineage. There are rules carved into the stone that survived ten thousand storms. Learn the catechism, seek the master, or find sanctuary in shared ritual. You need not invent the wheel in the dark.",
        "reversed": "Dogma turned to rot. The temple elders are counting tithes while the chapel ceiling leaks. Break the stained glass if it keeps out the sky, seeker. Orthodoxy has ceased serving the divine and now serves only the warden."
    },
    "major-6": {
        "upright": "Twin fires dancing on a single wick. This is not merely romance; it is the holy terror of choosing who you become when another's mirror is held before your face. A covenant of values beckons. What you pledge yourself to here will stitch itself into your fate for seven seasons.",
        "reversed": "Discord in the bedchamber and treason in the heart. A choice made to appease fear rather than honor. You are either loving a ghost of your own invention or betraying your truest marrow to avoid dining alone."
    },
    "major-7": {
        "upright": "Black steed and white steed, snarling in their harness, but your hands hold the reins. The Chariot does not wait for smooth roads; it cuts its own rut through the bog. Iron focus, unrelenting momentum. Fix your eyes upon the gate and drive hard.",
        "reversed": "The wheels have sheared off in the mud, or the horses are dragging you through the thorns by your boots. Aggression without discipline is only a louder kind of suicide. Pull back on the bit before the carriage rolls."
    },
    "major-8": {
        "upright": "Not the club of Hercules, but the soft, unyielding palm pressed against the beast's velvet jaw. The lion roars, and the maiden smiles. You will conquer this storm not by fury, but by quiet endurance, patience, and a compassion so stubborn it shames violence.",
        "reversed": "Raw fury gnashing its teeth, or self-doubt whimpering in the shadows. You are either letting your lower impulses drive the carriage, or cowering before a challenge that would yield if you simply stood upright and breathed."
    },
    "major-9": {
        "upright": "A solitary lantern swinging in the mountain gale. Step away from the salon, querent. The chatter of the crowd is polluting your judgment. Go up the winding stairs into your own solitude; the lantern you carry only illuminates one step at a time, but one step is all you are asked to walk.",
        "reversed": "Solitude curdled into sour isolation, or cowardice masquerading as wisdom. You have hidden in your cave for so long that your eyes water at daylight. It is time to bring the lantern down the mountain before you freeze in your own righteousness."
    },
    "major-10": {
        "upright": "The great brass wheel turns, whether the beggar weeps or the king feasts. A sudden turn of destiny is at hand. What was low rises; what was triumphant descends. Do not cling to the rim where the dizziness lives—move inward to the still axle.",
        "reversed": "A run of ill luck or the frantic attempt to jam a stick into the spinning gears. Misfortune is not personal vengeance from the stars; it is simply the wheel descending. Endure the dip; the ascent is forged in how gracefully you weather the trough."
    },
    "major-11": {
        "upright": "The double-edged sword poised above the brass pans. No tears, no excuses, no theatrics. Truth cuts cleanly through sentimentality. You will receive exactly what you have sown, down to the last ounce of barley. Settle your debts, speak without embroidery, and stand tall before the scales.",
        "reversed": "Biased arbitration, rationalized dishonesties, or fleeing from consequences. You may fool the magistrate in the wig, darling, but the cosmic ledgers do not misplace an entry. Confess the deficit before the bailiff arrives."
    },
    "major-12": {
        "upright": "Suspended by the ankle from the living tree, yet a halo gleams around his brow. Surrender your frantic thrashing. When every door is locked, stop kicking the oak—turn your vision upside down. What looks like defeat to the crowd is your quiet initiation into wisdom.",
        "reversed": "Martyrdom performed for an audience, or stubborn stalling disguised as patience. You are dangling there complaining of the headache while holding the rope yourself. Cut the cord and stand on your feet."
    },
    "major-13": {
        "upright": "Do not flinch. Malachi bows his head for this one. Death is the black plow that turns the exhausted field so spring can breathe. What is dying in your life has already ceased its pulse; stop trying to perform CPR on a corpse. Lay it in the crypt, weep your tears, and clear the room for what must be born.",
        "reversed": "Clinging with fingernails to what has already turned to formaldehyde. Decaying habits, dead partnerships, lingering specters. Holding on will not resurrect the dead; it will only poison the living."
    },
    "major-14": {
        "upright": "The winged angel pouring water and fire between two golden urns without spilling a droplet. Alchemy of the middle way. You must blend the opposites within your breast—the fury and the mercy, the ambition and the patience. Moderation is not blandness; it is mastery of the brew.",
        "reversed": "Volatility, excess, and fractured harmony. You are swinging between starvation and gluttony, silence and screams. The mixture is curdling because your fire is too hot and your patience too thin. Step away from the crucible."
    },
    "major-15": {
        "upright": "Horns in the shadows and iron chains hanging loosely around the neck. Notice the links, seeker—they are wide enough to slip right over your ears whenever you choose. The Devil thrives on your willing enslavement to appetite, fear, or golden cages. Name your poison before it names you.",
        "reversed": "The chain slips from the collarbones. You are waking from the stupor, blinking in the gray light, realizing the monster was just a shadow cast by your own unresolved hunger. Break the talisman and walk out of the cellar."
    },
    "major-16": {
        "upright": "A flash of white lightning through the stained glass! The crown tumbles, the masonry splits, and the illusions come crashing down. Yes, it stings; yes, the dust will choke you. But that fortress was built on a foundation of lies, darling. Rejoice that the roof is gone—now you can see the stars again.",
        "reversed": "A delayed disaster or narrowly escaping a catastrophe only to rebuild the same fragile wall. Do not try to shore up crumbling mortar with wishful thinking. Let the rotten timber fall before it crushes your children."
    },
    "major-17": {
        "upright": "Ah, pour the tea and let out the long breath you have held for three seasons. The Star rises over the scorched earth. Hope, pure and unsullied, returns to the marrow. The spring water flows freely; your dignity is restored. Trust the quiet blessing that is settling over your shoulders.",
        "reversed": "Despair, cynicism, and throwing dirt into your own well. Because you were burned once, you claim the stars are dead. Bitterness is the armor of the terrified. Lay down your cynicism; the heavens have not abandoned you."
    },
    "major-18": {
        "upright": "The wild dog howling at the pond while the crayfish crawls from the mud. Illusions, mirages, nightmares, and subconscious tides. Not everything is as it appears in this silver twilight. Do not sign contracts or swear oaths while the moon is drowning in the fog; walk slowly and test every stone with your staff.",
        "reversed": "The fog begins to thin under the dawn. Truths once obscured in murky waters surface. Deceptions are unmasked, and the phantom terror shrinks back to its true size: just an old coat hanging on a nail."
    },
    "major-19": {
        "upright": "Radiant, golden, unapologetic triumph! The child upon the white horse under sunflowers taller than a man. Warmth fills every cold corner of your life. Success, vitality, clarity, and unashamed joy. Stand in the open square and let the light wash away every cobweb.",
        "reversed": "A veiled sun or overconfidence bordering on sunstroke. You are either having trouble accepting genuine happiness because you expect the other shoe to drop, or you are behaving with insufferable arrogance. Temper your glare with warmth."
    },
    "major-20": {
        "upright": "The silver trumpet sounds over the open graves! Stand up and shed your shroud, seeker. You are being summoned to your true vocation, your reckoning, your rebirth. Forgive the old sins, leave the cemetery behind, and answer the bell. This is your absolution.",
        "reversed": "Self-recrimination, guilt, and ducking back into the coffin because the trumpet is too loud. You are holding court against yourself and acting as corrupt judge and weeping prisoner. Pardon yourself and step into the daylight."
    },
    "major-21": {
        "upright": "The circle is complete. Four guardians at the four corners, and the dancer in the laurel wreath. An entire epoch of your life has reached fulfillment, harmony, and mastery. Savor this wholeness; you have walked the full circle and arrived back at your true name.",
        "reversed": "An unfinished symphony. You are at the ninety-ninth step and sitting on the stair complaining of fatigue. Tie up the loose ribbons, close the book, and finish what you started before starting a new chapter."
    },
    "wands-ace": {
        "upright": "A dry branch bursting into wild flame! Raw creative voltage, an itch in the blood, an urgent inspiration that refuses to be ignored. Seize the brand while the embers are hungry; your will is a match struck in the dark.",
        "reversed": "A smothered ember or a spark blown into dry chaff. Delays, false starts, or creative energy turning inward into irritability and spite. Do not force the flame with bellows; give it dry kindling first."
    },
    "wands-2": {
        "upright": "Standing on the battlements with the brass globe in your palm, looking out over the harbor. You have established your foundation; now the world beyond beckons. Will you stay in the safe fortress, or charter the ship into uncharted seas?",
        "reversed": "Fear of leaving the harbor, or restless daydreams that distract you from the work at hand. You are pacing the parapet until the stone is worn smooth. Make the decision, or the tides will make it for you."
    },
    "wands-3": {
        "upright": "Your ships are returning, their sails swelling on the horizon. The seeds you planted with sweat and silence are bearing cargo. Expand your vision; what you built is solid enough to support greater ambition.",
        "reversed": "Shipwrecks at sea, or delays at port. Your expectations were premature or your supply lines neglected. Patience, seeker; do not curse the ocean because the cargo takes time to unload."
    },
    "wands-4": {
        "upright": "Garlands of ivy and roses strung between four carved wooden bower posts. Homecoming, celebratory hearths, community shelter, and a sacred milestone achieved. Rest your boots by the fire and drink with those who love you.",
        "reversed": "Domestic friction, a spoiled feast, or feeling like an alien in your own parlor. Tension under the rafters. Clean the hearth and mend the quiet grudges before inviting guests to table."
    },
    "wands-5": {
        "upright": "Five youths flailing staves in chaotic scrimmage. Rivalry, noisy competition, cross-purposes, and testing of mettle. It looks worse than it is—this is friction to sharpen your blade, not warfare to take your head.",
        "reversed": "Avoiding necessary confrontation until resentment festers into sabotage, or exhaustion from useless squabbling. Walk away from the brawl; not every contest deserves your sweat."
    },
    "wands-6": {
        "upright": "Laurel wreath on the staff and cheers along the cobbled street! Recognition, public triumph, and validation for battles fought in secret. Take your victory lap, but keep your horse humble.",
        "reversed": "Fall from grace, hollow applause, or betrayal by those who carried your banners yesterday. Do not hitch your self-worth to the fickle cheers of the town square."
    },
    "wands-7": {
        "upright": "Standing on high ground with six staves lunging up from the ravine below. You are outnumbered, but you hold the vantage point. Dig your heels in, swing wide, and do not cede an inch of your hard-won ground.",
        "reversed": "Exhaustion, crumbling resolve, or defending a hill that is no longer worth dying upon. Pick your battles wisely, darling; holding every barricade is how soldiers bleed to death."
    },
    "wands-8": {
        "upright": "Eight arrows whistling through the azure sky! Swift news, rapid developments, lightning-fast messages, and events gathering unstoppable speed. Clear your desk and sharpen your quill; the post arrives at a gallop.",
        "reversed": "Misdirected arrows, panic, delays in communication, or acting in frantic haste without aiming. Slow down before you skewer your own foot."
    },
    "wands-9": {
        "upright": "The wounded sentinel leaning on his staff, bandaged brow and vigilant eye. You have taken blows, and you are tired to the bone—yet you remain standing. One final perimeter check. You are stronger than your scars.",
        "reversed": "Paranoia, defensive exhaustion, and treating every knock on the door like a battering ram. You are guarding ruins against ghosts. Lower your guard enough to let someone bring you a bowl of broth."
    },
    "wands-10": {
        "upright": "Carrying ten heavy bundled logs uphill, back bent nearly double until you cannot see the roof of your own cottage. You took on everyone's burdens because you thought no one else could carry them. Drop four logs right here on the road, or you will collapse on your doorstep.",
        "reversed": "The load has collapsed into the ditch, or you are finally learning the holy art of saying 'No.' Refusing to carry other people's luggage is not abandonment; it is survival."
    },
    "wands-page": {
        "upright": "A bright-eyed messenger in a feathered cap, leaning over a blossoming staff with news of adventure. A creative idea arrives, bursting with playful audacity. Say yes to the quest; the road wants you.",
        "reversed": "Petulance, temper tantrums, loud boasts followed by immediate retreat, or bad news. A spoiled spark that scorches the rug and runs away."
    },
    "wands-knight": {
        "upright": "A stallion rearing on fire-rimmed hooves! Bold, charismatic, daring, and brimming with passionate urgency. He sweeps in to conquer the world before dusk. Charge forth with everything you possess.",
        "reversed": "Reckless arrogance, volatile temper, leaving behind a trail of broken promises and half-built fires. All heat and no follow-through. Don't be a wildfire that burns its own camp."
    },
    "wands-queen": {
        "upright": "A sunflower in one hand, a black cat purring at her throne. Warm, magnetic, fiercely self-possessed, and radiant as a midsummer hearth. She walks into a room and the darkness quietly excuses itself. Command your light.",
        "reversed": "Jealousy, drama, demanding the spotlight through theatrical hysterics, or insecurity disguised as bullying. When the queen doubts her crown, she sets fire to the parlor."
    },
    "wands-king": {
        "upright": "A throne carved with salamanders and lions. A master visionary, leader of men, capable of turning an abstract dream into an empire of stone and fire. Lead by example; your conviction is infectious.",
        "reversed": "An overbearing autocrat barking orders, unable to brook advice, blinded by his own hubris. Tyranny is just weakness dressed in an iron mantle."
    },
    "cups-ace": {
        "upright": "A golden chalice overflowing with five streams of living water into a pond of water lilies. Love, spiritual renewal, emotional awakening, and healing so deep it fills your parched throat. Open your chest; the vessel is full.",
        "reversed": "An overturned cup spilling vintage wine into the mud. Blocked emotions, repressed grief, self-pity, or an empty heart running on fumes. Forgive yourself so the cup can be refilled."
    },
    "cups-2": {
        "upright": "Two seekers raising their cups beneath the winged caduceus and the red lion's head. Mutual soul recognition, harmonious partnership, vows exchanged in quiet sincerity. Where two drink together with honor, the water turns to wine.",
        "reversed": "Misalignment, fractured trust, codependency, or resentment bubbling beneath polite smiles. Look at what is unspoken across the dinner table before the cups shatter."
    },
    "cups-3": {
        "upright": "Three maidens dancing in a circle, raising cups garlanded with grapes. Joyful sisterhood, camaraderie, celebration, and shared laughter that lifts the heaviest gloom. Call your kindred; celebrate the living.",
        "reversed": "Cliques, malicious gossip, overindulgence, or feeling like the outsider looking through the frosted tavern window. Cleanse your circle of fair-weather flatterers."
    },
    "cups-4": {
        "upright": "Sitting beneath the elder tree with arms folded, scowling at three cups on the moss while a cloud-hand offers a fourth. Boredom, apathy, and sulking over what is lacking while ignoring the miracle hovering at your elbow. Look up, you sulking child.",
        "reversed": "Breaking out of the funk! Waking from emotional stagnation, blinking at the sunlight, and finally reaching out to take the cup that was offered all along."
    },
    "cups-5": {
        "upright": "A cloaked mourner staring at three spilled cups of red wine soaking into the mud, oblivious to the two full cups standing upright behind his back. Grief is real, seeker—mourn your losses, but do not make a tomb out of your life. Turn around; there is still wine to drink.",
        "reversed": "Acceptance, wiping the tears, turning around to find the two remaining cups, and crossing the stone bridge toward home. Grief has finished its carving work; healing begins."
    },
    "cups-6": {
        "upright": "A child in a pointed hood offering a cup of white blossoms to a younger companion in an ancient garden. Sweet nostalgia, childhood memories, innocent generosity, and reunions with old souls. Touch your roots with tenderness.",
        "reversed": "Living in the sepia-toned past, clinging to childhood grievances, or romanticizing an old love that was actually toxic. The past is an old photograph, darling; you cannot sleep in it."
    },
    "cups-7": {
        "upright": "Seven cups floating in phantom clouds, containing jewels, serpents, castles, skulls, and laurel wreaths. Fantasies, illusions, wishful thinking, and too many seductive options. Choose one, or reality will dissolve your vapor castles.",
        "reversed": "The clouds evaporate; illusions shatter into cold daylight. Clarity returns. You finally see which cup holds genuine water and which holds painted poison. Time for sober choice."
    },
    "cups-8": {
        "upright": "A cloaked figure with a walking staff turning his back on eight neatly stacked golden cups, walking into the jagged midnight mountains. It was good once, but it is no longer enough. The quiet bravery of leaving behind what is comfortable to seek what is true.",
        "reversed": "Clinging to an emotionally bankrupt situation out of fear of the dark path. Drifting back to a drained well because you fear walking into the hills alone. Leave now."
    },
    "cups-9": {
        "upright": "A well-fed gentleman sitting comfortably with arms crossed, nine golden cups gleaming in an arch behind him. The 'Wish Card.' Emotional satisfaction, luxury, contentment, and wishes granted. Pour the best vintage; you earned this feast.",
        "reversed": "Smug complacency, self-indulgence, greed, or getting exactly what you wished for only to discover it tastes hollow on the tongue. Be careful what you wish for."
    },
    "cups-10": {
        "upright": "A rainbow of ten cups arched over a green meadow, parents clasping hands while children dance. Enduring emotional fulfillment, domestic harmony, soul peace, and the blessed quiet of feeling completely at home in your life.",
        "reversed": "Fractured domestic tranquility, unspoken estrangement, living up to a picture-perfect facade while the foundation rots. Drop the pretense and speak truth at the dinner table."
    },
    "cups-page": {
        "upright": "A gentle youth holding a golden cup, surprised by a blue fish popping its head out to speak to him! An unexpected intuitive message, poetic inspiration, emotional vulnerability, and delightful innocence. Trust the fish's whisper.",
        "reversed": "Emotional immaturity, sulking, escaping into melodrama, or creative insecurity. Stop playing the fragile victim whenever reality requires a sturdy response."
    },
    "cups-knight": {
        "upright": "A romantic cavalier on a pacing white steed, holding forth a cup like a holy grail. The poet, the dreamer, the lover arriving with proposals, artistic quests, and deep affection. Open your heart to beauty.",
        "reversed": "A moody charmer who promises the moon and disappears before dawn. Passive-aggressive sulking, unrealistic romantic fantasies, or manipulation wrapped in silk verses. Beware sweet talk without substance."
    },
    "cups-queen": {
        "upright": "A crowned queen upon a sea-throne, contemplating an ornate closed chalice. Deep psychic intuition, oceanic empathy, emotional maturity, and the sacred ability to hold space for suffering without drowning in it. Listen to your dreams.",
        "reversed": "Emotional flooding, smothering martyrdom, codependency, or turning your intuition into paranoid weaponization. Step out of the stormy sea and dry your skirts on solid rock."
    },
    "cups-king": {
        "upright": "A sovereign upon a stone throne floating upon churning waves, calm and undisturbed. Emotional mastery, balance between wisdom and feeling, compassion anchored in quiet strength. You can sail any sea when your heart is steady.",
        "reversed": "Emotional manipulation, passive-aggressive tyranny, repressed bitterness, or drowning sorrows in the bottle. A tyrant of moods whose stormy temperament keeps the household walking on eggshells."
    },
    "swords-ace": {
        "upright": "A single double-edged blade crowned with olive and palm, thrusting upward through the clouds! Piercing clarity, breakthrough of intellect, uncompromising truth, and the severance of deceit. The fog has parted; see with surgical honesty.",
        "reversed": "Cruel words, distorted logic, confusion, or a sharp intellect used to mutilate rather than heal. A blade wielded in haste cuts the thumb of the one who drew it."
    },
    "swords-2": {
        "upright": "A blindfolded woman sitting before the sea, holding two crossed swords across her chest. A stalemate of the intellect. You are deliberately refusing to look at the facts because choosing one means grieving the other. Take off the blindfold; ignorance is not peace.",
        "reversed": "The blindfold falls away. Overwhelming truths demand reckoning. The stalemate breaks, often through force or sudden exposure. Face the decision you postponed."
    },
    "swords-3": {
        "upright": "Three silver blades piercing a crimson heart beneath a weeping storm cloud. Sorrow, betrayal, heartbreak, and harsh truth that cuts to the bone. Weep your rain, seeker; do not repress the ache. Sorrow is the chisel that hollows space for deeper wisdom.",
        "reversed": "Healing from grief, forgiving an old betrayal, removing the daggers one by one, or holding on to ancient pain like a bitter rosary. Let the wound close; stop picking at the stitches."
    },
    "swords-4": {
        "upright": "A knight in effigy carved upon a stone tomb, hands in prayer, three swords above and one beneath him. Sanctuary, quiet convalescence, mental retreat, and holy pause. Lay down your arms; you cannot fight this battle with an exhausted brain.",
        "reversed": "Forced awakening from rest, restlessness, returning to the fray before your wounds are knit, or burnout reaching critical mass. Stay in the chapel until your mind is clear."
    },
    "swords-5": {
        "upright": "A sneering victor clutching three swords while two vanquished figures weep in the distance. A hollow victory. You may have won the argument, but look what you slaughtered to do it: trust, dignity, and love. Walk away before your spoils turn to venom.",
        "reversed": "Ending pointless disputes, laying down grievances, recognizing the futility of vengeance, or facing the bitter aftermath of betrayal. Swallow your pride and seek reconciliation."
    },
    "swords-6": {
        "upright": "A ferryman poling a boat across smooth water toward distant hills, carrying a sorrowful mother and child, with six swords planted in the hull. A journey away from turbulent waters toward calm shores. The baggage is heavy, but the worst is behind you.",
        "reversed": "Rough passage, unresolved baggage dragging the boat down, or running back to the very storm you fled. Do not rock the skiff while the ferryman is steering you to safety."
    },
    "swords-7": {
        "upright": "A rogue tiptoeing away from the camp with five swords under his arm, glancing back at the two remaining. Strategy, cunning, stealth, evasion, or deception. Are you taking what is rightfully yours, or slinking away like a thief in the night? Watch your back.",
        "reversed": "Confession, conscience awakening, being caught red-handed, or returning what was stolen. The scheme has collapsed; face the council with what dignity remains."
    },
    "swords-8": {
        "upright": "A woman bound in cord and blindfolded, surrounded by a cage of eight swords stuck in the mud—yet the path behind her is clear. Mental imprisonment, learned helplessness, and self-imposed victimhood. Shake your shoulders, darling; the ropes are loose and the gate is wide open.",
        "reversed": "Slashing the bindings! Stepping out of the mental prison, taking off the blindfold, and realizing the cage had no bars—only beliefs. Freedom begins with a single step out of the mud."
    },
    "swords-9": {
        "upright": "Sitting upright in bed at three in the morning, face buried in trembling hands, with nine heavy swords hanging on the wall above. The nightmare hour. Guilt, despair, anguish, and insomnia. Ninety percent of the terror you are nursing exists only in the theater of your mind. Turn on the lamp.",
        "reversed": "The night breaks. Waking from the nightmare, seeking help, releasing shame, and discovering the monster in the closet was just a coat on a hanger. Dawn is coming."
    },
    "swords-10": {
        "upright": "Lying face down on the shore with ten black swords in the back, while a golden streak of dawn breaks across the dark sea. The absolute, unmitigated end. You cannot be killed twice, seeker. The betrayal is done, the worst has happened, and your suffering has peaked. Now: stand up into the sunrise.",
        "reversed": "Resurrection! Pulling the blades from your spine, breathing in clean air, and surviving what was meant to destroy you. The ordeal is over; rebuild your life from bedrock."
    },
    "swords-page": {
        "upright": "A spirited youth standing on windy crags, blade brandished high, looking over his shoulder with vigilant eyes. Inquisitive intellect, curiosity, truth-seeking, and fresh mental agility. Question everything, but do not mistake gossip for investigation.",
        "reversed": "Spiteful tongue, paranoia, snooping, Internet slander, and malicious cynicism. All bark and no backbone; wielding intellectual cruelty to mask cowardice."
    },
    "swords-knight": {
        "upright": "Riding at breakneck gallop into storm clouds, sword held straight ahead, horse charging without hesitation! Furious intellect, direct action, rapid communication, and tearing down falsehoods. Drive straight to the point.",
        "reversed": "Tactless brutality, recklessness, bulldozing feelings with cold intellectual arrogance, leaving casualties in the wake of an argument. Smart enough to win, foolish enough to alienate all allies."
    },
    "swords-queen": {
        "upright": "Crowned in butterflies and sitting on a marble throne, her sword raised vertically, her left hand beckoning truth. She has known grief, and she has wept her oceans, but her mind is clear as diamond. She will give you the truth without sweetening, but with absolute justice.",
        "reversed": "Cold, bitter, merciless, wielding sarcasm like a bludgeon, cutting off intimacy because of unhealed wounds. A heart encased in permafrost."
    },
    "swords-king": {
        "upright": "The magistrate upon the high judgment seat, holding the upright sword of reason and law. Supreme intellectual authority, ethical clarity, objective analysis, and command of truth. Measure your choices by principle, not whim.",
        "reversed": "Tyrannical intellect, corruption of justice, cold manipulation, using law to oppress rather than liberate. A mind without a soul is a terrifying judge."
    },
    "pentacles-ace": {
        "upright": "A divine hand emerging from the clouds, offering a heavy golden pentacle above a garden of lilies and an arch of white roses. Tangible opportunity, material gift, physical vitality, new financial seed, and grounded prosperity. Plant it in fertile soil.",
        "reversed": "A squandered investment, missed financial opportunity, greed, or pouring money into sand. Look closely at the fine print before signing deeds."
    },
    "pentacles-2": {
        "upright": "A nimble youth juggling two golden disks within a green lemniscate, dancing gracefully as high-masted ships ride the tossing waves behind him. Juggling priorities, financial flexibility, adaptable balance, and riding the ebb and flow with a smile.",
        "reversed": "Dropping the plates! Overextended finances, chaotic schedule, debt spiraling, or playing with fire. Simplify your ledger before the carnival collapses."
    },
    "pentacles-3": {
        "upright": "The master stonemason carving the cathedral arch while the architect and monk review the blueprints. Collaboration, master craftsmanship, recognized skill, and building something enduring with trusted allies. Take pride in your trade.",
        "reversed": "Ego clashes on the job site, shoddy workmanship, lack of communication, or working with amateurs who cut corners. Do not put your signature on cracked masonry."
    },
    "pentacles-4": {
        "upright": "Sitting hunched on a stone block, clutching one pentacle to his chest, two under his soles, and balancing one upon his crown. Greed, hoarding, fear of loss, emotional stinginess, and erecting iron bars around your wealth. You are not protecting your gold, darling; your gold is imprisoning you.",
        "reversed": "Loosening the death grip! Letting money flow, releasing scarcity fears, charitable generosity, or conversely, reckless financial hemorrhage. Open your palms."
    },
    "pentacles-5": {
        "upright": "Two shivering beggars limping through deep snow past the glowing stained glass window of a warm sanctuary. Poverty, hardship, physical illness, isolation, and feeling cast out into the cold. But look up: the church door is unlocked, seeker. Ask for shelter.",
        "reversed": "Recovery from financial ruin, warmth returning to the hearth, finding work, medical healing, and stepping inside from the blizzard. The winter is breaking."
    },
    "pentacles-6": {
        "upright": "A wealthy merchant weighing coins on a balanced scale, giving generously to the kneeling needy. Generosity, charity, fair distribution of resources, reciprocal aid, and cosmic karmic balance. Give without condescension; receive without shame.",
        "reversed": "Strings attached to gifts, debt traps, patronizing charity, or extortion. Beware the benefactor who demands your soul in exchange for your bread."
    },
    "pentacles-7": {
        "upright": "A farmer leaning heavily on his hoe, contemplating seven golden disks growing on the vine. Assessment, patience, long-term investment, and the quiet realization that growth takes time. You have worked hard; let the vine do its quiet work.",
        "reversed": "Impatience, abandoned crops, or working tirelessly on a field that will never yield wheat. If the vine is barren, stop watering the dead roots."
    },
    "pentacles-8": {
        "upright": "A blacksmith hammering detail into the eighth pentacle, with seven already completed and hung upon the post. Diligent apprenticeship, painstaking craft, honing technique, and devotion to mastery. Lose yourself in the beauty of doing the work properly.",
        "reversed": "Monotonous drudgery, cutting corners, lack of passion, or perfectionism paralyzing production. Work done without pride is only slow decay."
    },
    "pentacles-9": {
        "upright": "A noblewoman in a gilded gown strolling through her lush vineyard, a hooded falcon resting serenely on her gloved wrist. Self-sufficiency, refined luxury, solitary elegance, financial independence, and enjoying the fruits of your own labor without needing a patron.",
        "reversed": "Superficial vanity, living beyond your means, golden handcuffs, or loneliness at the center of the estate. All the silk in France will not keep a hollow heart warm."
    },
    "pentacles-10": {
        "upright": "An elder patriarch in an embroidered coat petting hounds beneath the stone archway of his estate, with children and grandchildren prospering around him. Generational legacy, ancestral inheritance, enduring stability, and roots that anchor ten generations. Honor the bloodline.",
        "reversed": "Family feud over wills, crumbling estate, financial betrayal among kin, or clinging to obsolete family expectations. Do not let ancestral debts mortgage your children's joy."
    },
    "pentacles-page": {
        "upright": "A studious youth standing in a blooming pasture, reverently holding a golden coin aloft as though studying the mystery of seeds. A student of the earth, financial apprenticeship, practical curiosity, and grounded ambition. Study the foundation well.",
        "reversed": "Procrastination, lack of follow-through, squandered talents, or materialistic obsession without the willingness to study. All talk of riches, no sweat in the garden."
    },
    "pentacles-knight": {
        "upright": "A sturdy knight upon a heavy plow-horse, stationary in the plowed field, contemplating a single golden disk. The most dependable worker in the deck. Methodical, unyielding, tenacious, and utterly reliable. Keep your head down and finish the furrow.",
        "reversed": "Stubborn obstinacy, mind-numbing boredom, penny-pinching, or becoming a beast of burden out of fear of change. Don't be so stubborn that you plow the road."
    },
    "pentacles-queen": {
        "upright": "A benevolent queen seated on a throne carved with cherubs and goats, cradling a golden pentacle in her lap while a wild hare leaps at her feet. Earth mother, practical wisdom, abundant hospitality, financial savvy, and creating sanctuary where body and soul flourish.",
        "reversed": "Smothering materialism, neglecting self-care while feeding everyone else, social climbing, or hoarding pantry jars while the spirit starves. Feed your own bones first, darling."
    },
    "pentacles-king": {
        "upright": "A sovereign upon a throne overflowing with carved bulls, grapevines, and golden coins, velvet robe trailing in the grass. The master of the material realm: business acumen, generosity, steady security, and turning whatever he touches into gold. Rule your domain with grounded generosity.",
        "reversed": "Greed, corruption, stubborn materialism, judging human worth solely by bank balance, or financial collapse through reckless speculation. A miser dies in a room full of gold and leaves nothing behind but envy."
    }
};
function getCardLine(key, orientation) {
    const card = exports.INTERPRETATIONS[key];
    if (!card) {
        return orientation === "reversed"
            ? "Distortion in the aether. A hidden obstruction clouds the channel; pause and clear your vision."
            : "A card of veiled power whose currents stir beneath the surface. Walk with quiet steps.";
    }
    return card[orientation];
}
