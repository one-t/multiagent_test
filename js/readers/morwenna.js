/**
 * Madame Morwenna Ravenscroft — Tarot Reader Persona Module
 * 
 * "The Widow of the Seventh Bell & Keeper of the Cobbled Vaults"
 * 
 * Complete reading logic, distinct gothic voice, and bespoke interpretations
 * for every card (all 78 Major and Minor Arcana, upright & reversed) and every position.
 */

export const MORWENNA_PROFILE = {
  id: "morwenna_ravenscroft",
  name: "Madame Morwenna Ravenscroft",
  title: "The Widow of the Seventh Bell",
  shortName: "Madame Morwenna",
  bio: "Once the toast of Edinburgh's spiritualist salons, she now reads beneath the Old Town with tallow candles and a one-eyed rook named Malachi. She does not sugarcoat a harsh card.",
  philosophy: "The cards simply report the weather of your soul; whether you carry an umbrella is your affair.",
  alias: "The Widow of the Seventh Bell",
  location: "Mary King's Close Subterranean Vaults, Edinburgh",
  familiar: "Malachi (a one-eyed rook with an uncanny nose for human pretense)",
  
  backstory: `Beneath the rain-slicked cobblestones of Old Town Edinburgh, past the boarded alleys sealed during the Great Plague of 1645, stands an iron-banded oak door bearing the insignia of an unwound water clock. Beyond it sits Madame Morwenna Ravenscroft.

Once the toast of high-society spiritualists in the late 1880s, Morwenna abruptly shuttered her fashionable New Town salon after an obsidian scrying mirror shattered during an unpredicted eclipse. She retreated beneath the city into the stone-ribbed vaults, surrounding herself with tallow candles of wild mountain thyme, jars of wormwood and black salt, rows of soot-blackened ledgers containing generations of unconfessed secrets, and Malachi—her cantankerous, one-eyed rook.

Morwenna does not treat the tarot as a parlor game of sweet reassurances or romantic fortune-telling. To her, every deck of seventy-eight cards is an anatomical autopsy of the human spirit. She views each pasteboard card as a rib bone in the cage that protects what you refuse to admit to yourself. With a biting wit, a poet's cadence, and an unshakeable compassion for those who dare look reality in the eye, Morwenna reads the cards to illuminate the path through the fog—not by pretending the cliff isn't there, but by handing you a sturdy staff and daring you to step forward.`,

  voice: {
    archetype: "Gothic Esoteric / Piercingly Observant / Sardonic Compassion",
    cadence: "Measured, theatrical, rich with sensory metaphors of wax, rain, cold iron, peat, and bone.",
    tone: "Intimate yet authoritative; never sugarcoats harsh cards, never trivializes joy, treats reversals as internal alchemy.",
    favoriteProverbs: [
      "The pasteboards do not coddle, darling. Shall we see where the skin is thin?",
      "Draw close to the brazier; don't mind Malachi, he only snaps at untruths.",
      "Grief is a tunnel, not a mausoleum. Keep walking.",
      "The cards simply report the weather of your soul; whether you carry an umbrella is your affair."
    ]
  },

  theme: {
    primaryColor: "#2d132c", // Deep plum
    secondaryColor: "#1b061d", // Velvet night
    accentColor: "#d4af37", // Antique gold
    highlightColor: "#90e0ef", // Ghostly ice blue
    textColor: "#f4ede2", // Aged parchment
    cardBorderColor: "#7a2850"
  },

  avatarSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
  <defs>
    <radialGradient id="morwennaBg" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#2d132c" />
      <stop offset="70%" stop-color="#190a18" />
      <stop offset="100%" stop-color="#0a030a" />
    </radialGradient>
    <linearGradient id="morwennaGold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f3d082" />
      <stop offset="50%" stop-color="#d4af37" />
      <stop offset="100%" stop-color="#997b19" />
    </linearGradient>
    <linearGradient id="morwennaPlum" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#4a154b" />
      <stop offset="100%" stop-color="#210722" />
    </linearGradient>
  </defs>
  <!-- Background Circle -->
  <circle cx="60" cy="60" r="58" fill="url(#morwennaBg)" stroke="url(#morwennaGold)" stroke-width="2.5" />
  <circle cx="60" cy="60" r="54" fill="none" stroke="#d4af37" stroke-dasharray="2,3" stroke-width="0.8" opacity="0.6" />
  
  <!-- Velvet Hood & Shoulders -->
  <path d="M 20 115 C 20 90, 32 75, 42 70 C 44 80, 52 86, 60 86 C 68 86, 76 80, 78 70 C 88 75, 100 90, 100 115 Z" fill="url(#morwennaPlum)" stroke="#110412" stroke-width="1.5" />
  <!-- Velvet Hood Arch -->
  <path d="M 32 68 C 30 35, 45 18, 60 18 C 75 18, 90 35, 88 68 C 84 50, 75 32, 60 32 C 45 32, 36 50, 32 68 Z" fill="#1b061d" />
  
  <!-- Face Contour -->
  <path d="M 44 50 C 44 65, 52 74, 60 74 C 68 74, 76 65, 76 50 C 76 42, 68 40, 60 40 C 52 40, 44 42, 44 50 Z" fill="#e8d8c8" />
  
  <!-- Shadow Veil & High Collar -->
  <path d="M 40 46 C 48 38, 72 38, 80 46 C 75 68, 45 68, 40 46 Z" fill="#1f0923" opacity="0.45" />
  <!-- Eyes with Piercing Gaze -->
  <ellipse cx="52" cy="52" rx="3.5" ry="1.8" fill="#1a0b1c" />
  <circle cx="52" cy="52" r="1" fill="#90e0ef" />
  <ellipse cx="68" cy="52" rx="3.5" ry="1.8" fill="#1a0b1c" />
  <circle cx="68" cy="52" r="1" fill="#90e0ef" />
  <!-- Dark Lips -->
  <path d="M 56 65 Q 60 67 64 65 Q 60 69 56 65 Z" fill="#4e1628" />

  <!-- Victorian Lace Choker & Seventh Bell Pendant -->
  <path d="M 50 75 Q 60 78 70 75" stroke="#110412" stroke-width="3" fill="none" />
  <circle cx="60" cy="80" r="3" fill="url(#morwennaGold)" />
  <path d="M 58 83 L 62 83 L 63 86 L 57 86 Z" fill="url(#morwennaGold)" />
  
  <!-- Malachi the Rook perched on left shoulder -->
  <path d="M 22 75 C 20 62, 28 55, 33 58 C 36 60, 37 66, 35 76 C 30 78, 24 78, 22 75 Z" fill="#0d0d11" stroke="#000" stroke-width="0.8" />
  <path d="M 33 58 L 40 60 L 34 62 Z" fill="#8c7851" />
  <circle cx="31" cy="59" r="1.2" fill="#d4af37" />
  
  <!-- Subtle Constellation Arc -->
  <circle cx="30" cy="30" r="1" fill="#f3d082" opacity="0.8" />
  <circle cx="90" cy="32" r="1" fill="#f3d082" opacity="0.8" />
  <circle cx="45" cy="22" r="0.8" fill="#f3d082" opacity="0.6" />
  <circle cx="75" cy="24" r="0.8" fill="#f3d082" opacity="0.6" />
</svg>`
};

export const CARD_INTERPRETATIONS = {
  "maj_00": {
    "name": "The Fool",
    "upright": "Look at him—tiptoeing along the precipice with his heart in his hand and daylight in his marrow. The Fool does not leap because he is reckless; he leaps because the ground behind him has turned to ash. Step forward, seeker. The universe builds the bridge the moment your heel leaves the cliff edge.",
    "reversed": "Ah, the Fool stumbling backwards in terror, or lunging blindfolded into a ravine out of sheer petulance. You are either clinging to a cage because the door feels too wide, or sprinting without checking if there is water in the well. Open your eyes before your collarbone pays the price.",
    "aphorism": "Grace and disaster share the same stepping stone; intention decides which foot you plant.",
    "sensoryNote": "The sharp scent of crushed mountain thyme and a sudden gust that extinguishes every candle at once."
  },
  "maj_01": {
    "name": "The Magician",
    "upright": "Four tools upon the velvet cloth: wood, water, iron, and gold. You sit here asking if you have what it takes, yet your workbench is already crowded with miracles waiting for hands. What you call lack is merely hesitation in disguise. Speak your decree into the quiet; the aether is listening.",
    "reversed": "A parlor illusionist playing three-card monte with his own soul. Clever tongues, glittering promises, and nothing in the cupboard. Beware where your eloquence outpaces your integrity, or where you allow another's silver rhetoric to blind you to the dagger up their sleeve.",
    "aphorism": "A spell without consequence is only theater; do not summon what you cannot command.",
    "sensoryNote": "Ozone crackling above copper wiring and the scent of burnt brimstone on silk."
  },
  "maj_02": {
    "name": "The High Priestess",
    "upright": "Hush. Malachi has ceased his squawking, and so should you. The Priestess sits between the dark pillar and the pale, keeping secrets older than your lineage. What you seek is not written in ink; it is beating in the hush beneath your ribs. Do not ask for advice when your blood already gave you the answer three midnights ago.",
    "reversed": "You are suffocating your intuition beneath a mound of cold logic and parlor gossip. Why do you pretend not to hear the knock at the cellar door? Silence is not empty, darling; it is pregnant with what you are avoiding.",
    "aphorism": "The truth never shouts; she simply waits until your clamor runs out of breath.",
    "sensoryNote": "Cold marble drenched in river water and crushed pomegranate seeds."
  },
  "maj_03": {
    "name": "The Empress",
    "upright": "A velvet gown heavy with wheat and honey. The Empress does not scrape or bargain; she blooms where she sits because she remembers the earth belongs to the tender. Nourishment is arriving—in your craft, your flesh, or your home. Stop treating rest like a stolen misdemeanor.",
    "reversed": "Smothering soil or withered branches. Either you are pouring yourself into broken jars until your well runs dry, or you have grown vain, demanding adoration without tending the hearth. You cannot harvest what you refuse to water.",
    "aphorism": "The soil cares nothing for your hurried anxieties; fruit ripens only when it is done.",
    "sensoryNote": "Overripe figs, damp black loam, and warm beeswax melted on pine."
  },
  "maj_04": {
    "name": "The Emperor",
    "upright": "Cold granite, carved armrests, and a gaze that measures kingdoms. The Emperor demands order where you have tolerated chaos. Build your boundary, lock the gate, and stop apologizing for possessing authority over your own estate. Sovereignty is not tyranny; it is stewardship.",
    "reversed": "A brittle tyrant screaming at shadows, or a ruler who has let the moat fill with mud. Rigidity has calcified into cruelty, or spineless surrender has invited thieves into the throne room. Reclaim your spine before someone else commands your knees.",
    "aphorism": "A castle without stone walls is just a monument to wishful thinking.",
    "sensoryNote": "Chipped stone, dried cedar smoke, and the heavy thud of an iron signet ring."
  },
  "maj_05": {
    "name": "The Hierophant",
    "upright": "The smell of ancient hymnals and gilded keystones. The Hierophant stands at the threshold of tradition and lineage. There are rules carved into the stone that survived ten thousand storms. Learn the catechism, seek the master, or find sanctuary in shared ritual. You need not invent the wheel in the dark.",
    "reversed": "Dogma turned to rot. The temple elders are counting tithes while the chapel ceiling leaks. Break the stained glass if it keeps out the sky, seeker. Orthodoxy has ceased serving the divine and now serves only the warden.",
    "aphorism": "Tradition is carrying the fire, not worshiping the cold ashes.",
    "sensoryNote": "Frankincense drifting over damp stone flags and yellowed parchment."
  },
  "maj_06": {
    "name": "The Lovers",
    "upright": "Twin fires dancing on a single wick. This is not merely romance; it is the holy terror of choosing who you become when another's mirror is held before your face. A covenant of values beckons. What you pledge yourself to here will stitch itself into your fate for seven seasons.",
    "reversed": "Discord in the bedchamber and treason in the heart. A choice made to appease fear rather than honor. You are either loving a ghost of your own invention or betraying your truest marrow to avoid dining alone.",
    "aphorism": "Love is an altar, not a bargaining counter; place nothing there you intend to snatch back.",
    "sensoryNote": "Sweet almond blossom tainted with the bitter edge of bruised nightshade."
  },
  "maj_07": {
    "name": "The Chariot",
    "upright": "Black steed and white steed, snarling in their harness, but your hands hold the reins. The Chariot does not wait for smooth roads; it cuts its own rut through the bog. Iron focus, unrelenting momentum. Fix your eyes upon the gate and drive hard.",
    "reversed": "The wheels have sheared off in the mud, or the horses are dragging you through the thorns by your boots. Aggression without discipline is only a louder kind of suicide. Pull back on the bit before the carriage rolls.",
    "aphorism": "Momentum without steering is merely an accident in a hurry.",
    "sensoryNote": "Sweating horsehair, sparks struck from flint, and the metallic bite of cold iron bits."
  },
  "maj_08": {
    "name": "Strength",
    "upright": "Not the club of Hercules, but the soft, unyielding palm pressed against the beast's velvet jaw. The lion roars, and the maiden smiles. You will conquer this storm not by fury, but by quiet endurance, patience, and a compassion so stubborn it shames violence.",
    "reversed": "Raw fury gnashing its teeth, or self-doubt whimpering in the shadows. You are either letting your lower impulses drive the carriage, or cowering before a challenge that would yield if you simply stood upright and breathed.",
    "aphorism": "The hand that soothes the predator holds far more power than the blade that slays it.",
    "sensoryNote": "Warm fur, sun-warmed field grass, and honey mixed with elderflower."
  },
  "maj_09": {
    "name": "The Hermit",
    "upright": "A solitary lantern swinging in the mountain gale. Step away from the salon, querent. The chatter of the crowd is polluting your judgment. Go up the winding stairs into your own solitude; the lantern you carry only illuminates one step at a time, but one step is all you are asked to walk.",
    "reversed": "Solitude curdled into sour isolation, or cowardice masquerading as wisdom. You have hidden in your cave for so long that your eyes water at daylight. It is time to bring the lantern down the mountain before you freeze in your own righteousness.",
    "aphorism": "The lamp was given to light the road, not to inspect your own navel forever.",
    "sensoryNote": "Cold mountain pine, tallow smoke, and the rustle of coarse wool against snow."
  },
  "maj_10": {
    "name": "Wheel of Fortune",
    "upright": "The great brass wheel turns, whether the beggar weeps or the king feasts. A sudden turn of destiny is at hand. What was low rises; what was triumphant descends. Do not cling to the rim where the dizziness lives—move inward to the still axle.",
    "reversed": "A run of ill luck or the frantic attempt to jam a stick into the spinning gears. Misfortune is not personal vengeance from the stars; it is simply the wheel descending. Endure the dip; the ascent is forged in how gracefully you weather the trough.",
    "aphorism": "The wheel cares nothing for your title; it turns because turning is its nature.",
    "sensoryNote": "Creaking oak spokes, gear grease, and the cold snap of an unexpected autumn wind."
  },
  "maj_11": {
    "name": "Justice",
    "upright": "The double-edged sword poised above the brass pans. No tears, no excuses, no theatrics. Truth cuts cleanly through sentimentality. You will receive exactly what you have sown, down to the last ounce of barley. Settle your debts, speak without embroidery, and stand tall before the scales.",
    "reversed": "Biased arbitration, rationalized dishonesties, or fleeing from consequences. You may fool the magistrate in the wig, darling, but the cosmic ledgers do not misplace an entry. Confess the deficit before the bailiff arrives.",
    "aphorism": "The scale does not negotiate; it simply reports the weight of your choices.",
    "sensoryNote": "Polished brass, cold steel, and dried sage burning in an iron brazier."
  },
  "maj_12": {
    "name": "The Hanged Man",
    "upright": "Suspended by the ankle from the living tree, yet a halo gleams around his brow. Surrender your frantic thrashing. When every door is locked, stop kicking the oak—turn your vision upside down. What looks like defeat to the crowd is your quiet initiation into wisdom.",
    "reversed": "Martyrdom performed for an audience, or stubborn stalling disguised as patience. You are dangling there complaining of the headache while holding the rope yourself. Cut the cord and stand on your feet.",
    "aphorism": "Surrender is not giving up; it is giving over what you never truly controlled.",
    "sensoryNote": "Green willow bark, stagnant river mist, and the slow drip of cave water."
  },
  "maj_13": {
    "name": "Death",
    "upright": "Do not flinch. Malachi bows his head for this one. Death is the black plow that turns the exhausted field so spring can breathe. What is dying in your life has already ceased its pulse; stop trying to perform CPR on a corpse. Lay it in the crypt, weep your tears, and clear the room for what must be born.",
    "reversed": "Clinging with fingernails to what has already turned to formaldehyde. Decaying habits, dead partnerships, lingering specters. Holding on will not resurrect the dead; it will only poison the living.",
    "aphorism": "The scythe is merciful; it cuts down only what has finished its season.",
    "sensoryNote": "Dried chrysanthemums, turned earth, damp limestone, and the chill of cellar stones."
  },
  "maj_14": {
    "name": "Temperance",
    "upright": "The winged angel pouring water and fire between two golden urns without spilling a droplet. Alchemy of the middle way. You must blend the opposites within your breast—the fury and the mercy, the ambition and the patience. Moderation is not blandness; it is mastery of the brew.",
    "reversed": "Volatility, excess, and fractured harmony. You are swinging between starvation and gluttony, silence and screams. The mixture is curdling because your fire is too hot and your patience too thin. Step away from the crucible.",
    "aphorism": "The finest medicine becomes a lethal poison when measured with a trembling hand.",
    "sensoryNote": "Sweet iris water, heated copper, and morning dew upon wild mint."
  },
  "maj_15": {
    "name": "The Devil",
    "upright": "Horns in the shadows and iron chains hanging loosely around the neck. Notice the links, seeker—they are wide enough to slip right over your ears whenever you choose. The Devil thrives on your willing enslavement to appetite, fear, or golden cages. Name your poison before it names you.",
    "reversed": "The chain slips from the collarbones. You are waking from the stupor, blinking in the gray light, realizing the monster was just a shadow cast by your own unresolved hunger. Break the talisman and walk out of the cellar.",
    "aphorism": "The heaviest chains are always the ones we forge out of our own secret appetites.",
    "sensoryNote": "Stale sulfur, sweat on velvet, spoiled wine, and cold iron chains."
  },
  "maj_16": {
    "name": "The Tower",
    "upright": "A flash of white lightning through the stained glass! The crown tumbles, the masonry splits, and the illusions come crashing down. Yes, it stings; yes, the dust will choke you. But that fortress was built on a foundation of lies, darling. Rejoice that the roof is gone—now you can see the stars again.",
    "reversed": "A delayed disaster or narrowly escaping a catastrophe only to rebuild the same fragile wall. Do not try to shore up crumbling mortar with wishful thinking. Let the rotten timber fall before it crushes your children.",
    "aphorism": "Lightning strikes only the tallest arrogance; humility walks through the courtyard untouched.",
    "sensoryNote": "Ozone, scorched plaster, pulverized mortar, and the smell of rain after lightning."
  },
  "maj_17": {
    "name": "The Star",
    "upright": "Ah, pour the tea and let out the long breath you have held for three seasons. The Star rises over the scorched earth. Hope, pure and unsullied, returns to the marrow. The spring water flows freely; your dignity is restored. Trust the quiet blessing that is settling over your shoulders.",
    "reversed": "Despair, cynicism, and throwing dirt into your own well. Because you were burned once, you claim the stars are dead. Bitterness is the armor of the terrified. Lay down your cynicism; the heavens have not abandoned you.",
    "aphorism": "Even the darkest midnight is merely the canvas upon which the stars sharpen their light.",
    "sensoryNote": "Cool night air, pure spring water running over mossy stones, and star jasmine."
  },
  "maj_18": {
    "name": "The Moon",
    "upright": "The wild dog howling at the pond while the crayfish crawls from the mud. Illusions, mirages, nightmares, and subconscious tides. Not everything is as it appears in this silver twilight. Do not sign contracts or swear oaths while the moon is drowning in the fog; walk slowly and test every stone with your staff.",
    "reversed": "The fog begins to thin under the dawn. Truths once obscured in murky waters surface. Deceptions are unmasked, and the phantom terror shrinks back to its true size: just an old coat hanging on a nail.",
    "aphorism": "In moonlight, even a thistle casts the shadow of a spear; wait for the sun before you raise your shield.",
    "sensoryNote": "Damp bog water, wet wolfhound coat, nightshade blossoms, and rotting cedar."
  },
  "maj_19": {
    "name": "The Sun",
    "upright": "Radiant, golden, unapologetic triumph! The child upon the white horse under sunflowers taller than a man. Warmth fills every cold corner of your life. Success, vitality, clarity, and unashamed joy. Stand in the open square and let the light wash away every cobweb.",
    "reversed": "A veiled sun or overconfidence bordering on sunstroke. You are either having trouble accepting genuine happiness because you expect the other shoe to drop, or you are behaving with insufferable arrogance. Temper your glare with warmth.",
    "aphorism": "The sun never asks permission to shine; it simply warms everything brave enough to look up.",
    "sensoryNote": "Warm sun-drenched stone, wild sunflowers, sweet honey, and golden amber."
  },
  "maj_20": {
    "name": "Judgement",
    "upright": "The silver trumpet sounds over the open graves! Stand up and shed your shroud, seeker. You are being summoned to your true vocation, your reckoning, your rebirth. Forgive the old sins, leave the cemetery behind, and answer the bell. This is your absolution.",
    "reversed": "Self-recrimination, guilt, and ducking back into the coffin because the trumpet is too loud. You are holding court against yourself and acting as corrupt judge and weeping prisoner. Pardon yourself and step into the daylight.",
    "aphorism": "The trumpet sounds to awaken you, not to condemn you; why do you keep polishing your guilt?",
    "sensoryNote": "The piercing vibration of a brass horn, fresh morning air, and clean linen."
  },
  "maj_21": {
    "name": "The World",
    "upright": "The circle is complete. Four guardians at the four corners, and the dancer in the laurel wreath. An entire epoch of your life has reached fulfillment, harmony, and mastery. Savor this wholeness; you have walked the full circle and arrived back at your true name.",
    "reversed": "An unfinished symphony. You are at the ninety-ninth step and sitting on the stair complaining of fatigue. Tie up the loose ribbons, close the book, and finish what you started before starting a new chapter.",
    "aphorism": "Completion is the doorway where endings and beginnings clasp hands in silence.",
    "sensoryNote": "Sweet laurel leaves, myrrh resin, crushed sea salt, and a victorious ringing bell."
  },
  "wands_ace": {
    "name": "Ace of Wands",
    "upright": "A dry branch bursting into wild flame! Raw creative voltage, an itch in the blood, an urgent inspiration that refuses to be ignored. Seize the brand while the embers are hungry; your will is a match struck in the dark.",
    "reversed": "A smothered ember or a spark blown into dry chaff. Delays, false starts, or creative energy turning inward into irritability and spite. Do not force the flame with bellows; give it dry kindling first.",
    "aphorism": "A single spark can burn down a kingdom or light the hearth for winter; tend the fire with intention.",
    "sensoryNote": "Resinous cedar snapping in sudden flame and hot wind."
  },
  "wands_2": {
    "name": "Two of Wands",
    "upright": "Standing on the battlements with the brass globe in your palm, looking out over the harbor. You have established your foundation; now the world beyond beckons. Will you stay in the safe fortress, or charter the ship into uncharted seas?",
    "reversed": "Fear of leaving the harbor, or restless daydreams that distract you from the work at hand. You are pacing the parapet until the stone is worn smooth. Make the decision, or the tides will make it for you.",
    "aphorism": "Planning is the map; courage is the ship. Neither reaches the shore without the other.",
    "sensoryNote": "Polished brass, sea breeze carrying woodsmoke, and cold stone ramparts."
  },
  "wands_3": {
    "name": "Three of Wands",
    "upright": "Your ships are returning, their sails swelling on the horizon. The seeds you planted with sweat and silence are bearing cargo. Expand your vision; what you built is solid enough to support greater ambition.",
    "reversed": "Shipwrecks at sea, or delays at port. Your expectations were premature or your supply lines neglected. Patience, seeker; do not curse the ocean because the cargo takes time to unload.",
    "aphorism": "The merchant who paces the dock cannot hasten the wind; cultivate patience while the tide turns.",
    "sensoryNote": "Tarred hemp rope, brine on timber, and the distant call of harbor bells."
  },
  "wands_4": {
    "name": "Four of Wands",
    "upright": "Garlands of ivy and roses strung between four carved wooden bower posts. Homecoming, celebratory hearths, community shelter, and a sacred milestone achieved. Rest your boots by the fire and drink with those who love you.",
    "reversed": "Domestic friction, a spoiled feast, or feeling like an alien in your own parlor. Tension under the rafters. Clean the hearth and mend the quiet grudges before inviting guests to table.",
    "aphorism": "A home is not built of timber and mortar, but of the peace welcomed across the threshold.",
    "sensoryNote": "Roasting chestnuts, fresh apple cider, and dried lavender hung from oak beams."
  },
  "wands_5": {
    "name": "Five of Wands",
    "upright": "Five youths flailing staves in chaotic scrimmage. Rivalry, noisy competition, cross-purposes, and testing of mettle. It looks worse than it is—this is friction to sharpen your blade, not warfare to take your head.",
    "reversed": "Avoiding necessary confrontation until resentment festers into sabotage, or exhaustion from useless squabbling. Walk away from the brawl; not every contest deserves your sweat.",
    "aphorism": "When five people shout at once, only the wind hears the argument.",
    "sensoryNote": "Sweat, splintered ash wood, and kicked-up summer dust."
  },
  "wands_6": {
    "name": "Six of Wands",
    "upright": "Laurel wreath on the staff and cheers along the cobbled street! Recognition, public triumph, and validation for battles fought in secret. Take your victory lap, but keep your horse humble.",
    "reversed": "Fall from grace, hollow applause, or betrayal by those who carried your banners yesterday. Do not hitch your self-worth to the fickle cheers of the town square.",
    "aphorism": "The same crowd that scatters palms before your horse will gladly sweep up your ashes tomorrow.",
    "sensoryNote": "Crushed laurel leaves, cheering crowds, and the smell of clean parade banners."
  },
  "wands_7": {
    "name": "Seven of Wands",
    "upright": "Standing on high ground with six staves lunging up from the ravine below. You are outnumbered, but you hold the vantage point. Dig your heels in, swing wide, and do not cede an inch of your hard-won ground.",
    "reversed": "Exhaustion, crumbling resolve, or defending a hill that is no longer worth dying upon. Pick your battles wisely, darling; holding every barricade is how soldiers bleed to death.",
    "aphorism": "Courage is not the absence of fear, but the refusal to yield high ground to loud shadows.",
    "sensoryNote": "Adrenaline, dry pine needles under heavy boots, and cold mountain wind."
  },
  "wands_8": {
    "name": "Eight of Wands",
    "upright": "Eight arrows whistling through the azure sky! Swift news, rapid developments, lightning-fast messages, and events gathering unstoppable speed. Clear your desk and sharpen your quill; the post arrives at a gallop.",
    "reversed": "Misdirected arrows, panic, delays in communication, or acting in frantic haste without aiming. Slow down before you skewer your own foot.",
    "aphorism": "An arrow loosed in panic strikes only regret; steady your breath before releasing the string.",
    "sensoryNote": "The sharp hum of bowstrings, rushing wind, and ozone."
  },
  "wands_9": {
    "name": "Nine of Wands",
    "upright": "The wounded sentinel leaning on his staff, bandaged brow and vigilant eye. You have taken blows, and you are tired to the bone—yet you remain standing. One final perimeter check. You are stronger than your scars.",
    "reversed": "Paranoia, defensive exhaustion, and treating every knock on the door like a battering ram. You are guarding ruins against ghosts. Lower your guard enough to let someone bring you a bowl of broth.",
    "aphorism": "Scars are proof that you healed, not orders to spend eternity in the watchtower.",
    "sensoryNote": "Linen bandages, witch hazel, old iron, and rain hitting a stone battlement."
  },
  "wands_10": {
    "name": "Ten of Wands",
    "upright": "Carrying ten heavy bundled logs uphill, back bent nearly double until you cannot see the roof of your own cottage. You took on everyone's burdens because you thought no one else could carry them. Drop four logs right here on the road, or you will collapse on your doorstep.",
    "reversed": "The load has collapsed into the ditch, or you are finally learning the holy art of saying 'No.' Refusing to carry other people's luggage is not abandonment; it is survival.",
    "aphorism": "A martyr is just someone who mistook exhaustion for nobility.",
    "sensoryNote": "Crushed wet pine bark, strained cordage, and the dull ache of bruised collarbones."
  },
  "wands_page": {
    "name": "Page of Wands",
    "upright": "A bright-eyed messenger in a feathered cap, leaning over a blossoming staff with news of adventure. A creative idea arrives, bursting with playful audacity. Say yes to the quest; the road wants you.",
    "reversed": "Petulance, temper tantrums, loud boasts followed by immediate retreat, or bad news. A spoiled spark that scorches the rug and runs away.",
    "aphorism": "Curiosity is the divine spark that turns everyday stones into catalysts.",
    "sensoryNote": "Fresh wild mint, newly sanded wood, and bird feathers."
  },
  "wands_knight": {
    "name": "Knight of Wands",
    "upright": "A stallion rearing on fire-rimmed hooves! Bold, charismatic, daring, and brimming with passionate urgency. He sweeps in to conquer the world before dusk. Charge forth with everything you possess.",
    "reversed": "Reckless arrogance, volatile temper, leaving behind a trail of broken promises and half-built fires. All heat and no follow-through. Don't be a wildfire that burns its own camp.",
    "aphorism": "A gallop is magnificent until you realize you rode off without the saddle.",
    "sensoryNote": "Hot iron horseshoes, desert sand, and flared nostrils."
  },
  "wands_queen": {
    "name": "Queen of Wands",
    "upright": "A sunflower in one hand, a black cat purring at her throne. Warm, magnetic, fiercely self-possessed, and radiant as a midsummer hearth. She walks into a room and the darkness quietly excuses itself. Command your light.",
    "reversed": "Jealousy, drama, demanding the spotlight through theatrical hysterics, or insecurity disguised as bullying. When the queen doubts her crown, she sets fire to the parlor.",
    "aphorism": "True warmth draws people close; intimidation merely keeps them from running away in front of you.",
    "sensoryNote": "Sunflowers, warm cinnamon bark, and sleek feline fur."
  },
  "wands_king": {
    "name": "King of Wands",
    "upright": "A throne carved with salamanders and lions. A master visionary, leader of men, capable of turning an abstract dream into an empire of stone and fire. Lead by example; your conviction is infectious.",
    "reversed": "An overbearing autocrat barking orders, unable to brook advice, blinded by his own hubris. Tyranny is just weakness dressed in an iron mantle.",
    "aphorism": "A sovereign leads by inspiring devotion, never by demanding obedience with a torch.",
    "sensoryNote": "Burning frankincense, polished oak, and spiced mead."
  },
  "cups_ace": {
    "name": "Ace of Cups",
    "upright": "A golden chalice overflowing with five streams of living water into a pond of water lilies. Love, spiritual renewal, emotional awakening, and healing so deep it fills your parched throat. Open your chest; the vessel is full.",
    "reversed": "An overturned cup spilling vintage wine into the mud. Blocked emotions, repressed grief, self-pity, or an empty heart running on fumes. Forgive yourself so the cup can be refilled.",
    "aphorism": "The heart was created to be an open spring, not a fortified reservoir.",
    "sensoryNote": "Fresh river water, white water lily blossoms, and damp moss."
  },
  "cups_2": {
    "name": "Two of Cups",
    "upright": "Two seekers raising their cups beneath the winged caduceus and the red lion's head. Mutual soul recognition, harmonious partnership, vows exchanged in quiet sincerity. Where two drink together with honor, the water turns to wine.",
    "reversed": "Misalignment, fractured trust, codependency, or resentment bubbling beneath polite smiles. Look at what is unspoken across the dinner table before the cups shatter.",
    "aphorism": "True communion is two souls drinking from the same truth, not two thirsty ghosts haunting each other.",
    "sensoryNote": "Wild rosewater, freshly poured red wine, and warm skin."
  },
  "cups_3": {
    "name": "Three of Cups",
    "upright": "Three maidens dancing in a circle, raising cups garlanded with grapes. Joyful sisterhood, camaraderie, celebration, and shared laughter that lifts the heaviest gloom. Call your kindred; celebrate the living.",
    "reversed": "Cliques, malicious gossip, overindulgence, or feeling like the outsider looking through the frosted tavern window. Cleanse your circle of fair-weather flatterers.",
    "aphorism": "Shared joy doubles in size; shared grief divides in half. Choose your drinking companions well.",
    "sensoryNote": "Ripe concord grapes, sweet cider, and the sound of tambourines."
  },
  "cups_4": {
    "name": "Four of Cups",
    "upright": "Sitting beneath the elder tree with arms folded, scowling at three cups on the moss while a cloud-hand offers a fourth. Boredom, apathy, and sulking over what is lacking while ignoring the miracle hovering at your elbow. Look up, you sulking child.",
    "reversed": "Breaking out of the funk! Waking from emotional stagnation, blinking at the sunlight, and finally reaching out to take the cup that was offered all along.",
    "aphorism": "The universe can hand you a cup of nectar, but she will not force you to uncross your arms.",
    "sensoryNote": "Stagnant marsh pond, fallen brown leaves, and cold damp wool."
  },
  "cups_5": {
    "name": "Five of Cups",
    "upright": "A cloaked mourner staring at three spilled cups of red wine soaking into the mud, oblivious to the two full cups standing upright behind his back. Grief is real, seeker—mourn your losses, but do not make a tomb out of your life. Turn around; there is still wine to drink.",
    "reversed": "Acceptance, wiping the tears, turning around to find the two remaining cups, and crossing the stone bridge toward home. Grief has finished its carving work; healing begins.",
    "aphorism": "Weep for the wine in the dirt, yes—but do not freeze to death when the cellar still holds two bottles.",
    "sensoryNote": "Spilled vinegar, soggy black wool, and cold river pebbles."
  },
  "cups_6": {
    "name": "Six of Cups",
    "upright": "A child in a pointed hood offering a cup of white blossoms to a younger companion in an ancient garden. Sweet nostalgia, childhood memories, innocent generosity, and reunions with old souls. Touch your roots with tenderness.",
    "reversed": "Living in the sepia-toned past, clinging to childhood grievances, or romanticizing an old love that was actually toxic. The past is an old photograph, darling; you cannot sleep in it.",
    "aphorism": "Nostalgia is a lovely perfume, but a terrible diet.",
    "sensoryNote": "Sweet pea flowers, yellowed lace, dried marigolds, and childhood almond cookies."
  },
  "cups_7": {
    "name": "Seven of Cups",
    "upright": "Seven cups floating in phantom clouds, containing jewels, serpents, castles, skulls, and laurel wreaths. Fantasies, illusions, wishful thinking, and too many seductive options. Choose one, or reality will dissolve your vapor castles.",
    "reversed": "The clouds evaporate; illusions shatter into cold daylight. Clarity returns. You finally see which cup holds genuine water and which holds painted poison. Time for sober choice.",
    "aphorism": "A thousand daydreams will not bake a single loaf of bread.",
    "sensoryNote": "Sweet opium smoke, iridescent soap bubbles, and decaying fruit."
  },
  "cups_8": {
    "name": "Eight of Cups",
    "upright": "A cloaked figure with a walking staff turning his back on eight neatly stacked golden cups, walking into the jagged midnight mountains. It was good once, but it is no longer enough. The quiet bravery of leaving behind what is comfortable to seek what is true.",
    "reversed": "Clinging to an emotionally bankrupt situation out of fear of the dark path. Drifting back to a drained well because you fear walking into the hills alone. Leave now.",
    "aphorism": "Sometimes the most heroic thing a soul can do is quietly pack its boots and walk away.",
    "sensoryNote": "Night mist, damp mountain rocks, decaying leaves, and the silence of an abandoned camp."
  },
  "cups_9": {
    "name": "Nine of Cups",
    "upright": "A well-fed gentleman sitting comfortably with arms crossed, nine golden cups gleaming in an arch behind him. The 'Wish Card.' Emotional satisfaction, luxury, contentment, and wishes granted. Pour the best vintage; you earned this feast.",
    "reversed": "Smug complacency, self-indulgence, greed, or getting exactly what you wished for only to discover it tastes hollow on the tongue. Be careful what you wish for.",
    "aphorism": "Satisfaction of the belly is easy; satisfaction of the soul requires a cleaner mirror.",
    "sensoryNote": "Rich roasted meats, mulled blackberry wine, and velvet upholstery."
  },
  "cups_10": {
    "name": "Ten of Cups",
    "upright": "A rainbow of ten cups arched over a green meadow, parents clasping hands while children dance. Enduring emotional fulfillment, domestic harmony, soul peace, and the blessed quiet of feeling completely at home in your life.",
    "reversed": "Fractured domestic tranquility, unspoken estrangement, living up to a picture-perfect facade while the foundation rots. Drop the pretense and speak truth at the dinner table.",
    "aphorism": "Harmony is not the absence of discord; it is the commitment to tune the strings again each morning.",
    "sensoryNote": "Rain-washed clover, sweet honeysuckle, and warm hearth bread."
  },
  "cups_page": {
    "name": "Page of Cups",
    "upright": "A gentle youth holding a golden cup, surprised by a blue fish popping its head out to speak to him! An unexpected intuitive message, poetic inspiration, emotional vulnerability, and delightful innocence. Trust the fish's whisper.",
    "reversed": "Emotional immaturity, sulking, escaping into melodrama, or creative insecurity. Stop playing the fragile victim whenever reality requires a sturdy response.",
    "aphorism": "Listen when the mystery speaks, even if it arrives in the mouth of an impossible fish.",
    "sensoryNote": "Briny ocean spray, blue lotus blossoms, and damp velvet."
  },
  "cups_knight": {
    "name": "Knight of Cups",
    "upright": "A romantic cavalier on a pacing white steed, holding forth a cup like a holy grail. The poet, the dreamer, the lover arriving with proposals, artistic quests, and deep affection. Open your heart to beauty.",
    "reversed": "A moody charmer who promises the moon and disappears before dawn. Passive-aggressive sulking, unrealistic romantic fantasies, or manipulation wrapped in silk verses. Beware sweet talk without substance.",
    "aphorism": "Poetry is intoxicating, but make sure the knight knows how to shovel snow when winter arrives.",
    "sensoryNote": "White lilies, perfumed leather, and quiet river shallows."
  },
  "cups_queen": {
    "name": "Queen of Cups",
    "upright": "A crowned queen upon a sea-throne, contemplating an ornate closed chalice. Deep psychic intuition, oceanic empathy, emotional maturity, and the sacred ability to hold space for suffering without drowning in it. Listen to your dreams.",
    "reversed": "Emotional flooding, smothering martyrdom, codependency, or turning your intuition into paranoid weaponization. Step out of the stormy sea and dry your skirts on solid rock.",
    "aphorism": "Empathy is an open doorway, not a flood that drowns your own home.",
    "sensoryNote": "Sea salt, crushed pearls, dried mugwort, and ambergris."
  },
  "cups_king": {
    "name": "King of Cups",
    "upright": "A sovereign upon a stone throne floating upon churning waves, calm and undisturbed. Emotional mastery, balance between wisdom and feeling, compassion anchored in quiet strength. You can sail any sea when your heart is steady.",
    "reversed": "Emotional manipulation, passive-aggressive tyranny, repressed bitterness, or drowning sorrows in the bottle. A tyrant of moods whose stormy temperament keeps the household walking on eggshells.",
    "aphorism": "The true king does not calm the sea by screaming at waves; he calms the sea within his own chest.",
    "sensoryNote": "Aged cedar, deep ocean water, frankincense, and weathered ship timbers."
  },
  "swords_ace": {
    "name": "Ace of Swords",
    "upright": "A single double-edged blade crowned with olive and palm, thrusting upward through the clouds! Piercing clarity, breakthrough of intellect, uncompromising truth, and the severance of deceit. The fog has parted; see with surgical honesty.",
    "reversed": "Cruel words, distorted logic, confusion, or a sharp intellect used to mutilate rather than heal. A blade wielded in haste cuts the thumb of the one who drew it.",
    "aphorism": "Truth is a scalpel: in master hands it heals; in careless hands it only draws blood.",
    "sensoryNote": "Cold steel, sharp winter frost, ozone, and clean white mint."
  },
  "swords_2": {
    "name": "Two of Swords",
    "upright": "A blindfolded woman sitting before the sea, holding two crossed swords across her chest. A stalemate of the intellect. You are deliberately refusing to look at the facts because choosing one means grieving the other. Take off the blindfold; ignorance is not peace.",
    "reversed": "The blindfold falls away. Overwhelming truths demand reckoning. The stalemate breaks, often through force or sudden exposure. Face the decision you postponed.",
    "aphorism": "Sitting between two blades does not protect your heart; it merely prolongs the tension.",
    "sensoryNote": "Cold sea wind, limestone dust, and the clink of balanced blades."
  },
  "swords_3": {
    "name": "Three of Swords",
    "upright": "Three silver blades piercing a crimson heart beneath a weeping storm cloud. Sorrow, betrayal, heartbreak, and harsh truth that cuts to the bone. Weep your rain, seeker; do not repress the ache. Sorrow is the chisel that hollows space for deeper wisdom.",
    "reversed": "Healing from grief, forgiving an old betrayal, removing the daggers one by one, or holding on to ancient pain like a bitter rosary. Let the wound close; stop picking at the stitches.",
    "aphorism": "The heart does not break to destroy you; it breaks open so your compassion can breathe.",
    "sensoryNote": "Cold rain on wet slate, the copper tang of blood, and crushed rue."
  },
  "swords_4": {
    "name": "Four of Swords",
    "upright": "A knight in effigy carved upon a stone tomb, hands in prayer, three swords above and one beneath him. Sanctuary, quiet convalescence, mental retreat, and holy pause. Lay down your arms; you cannot fight this battle with an exhausted brain.",
    "reversed": "Forced awakening from rest, restlessness, returning to the fray before your wounds are knit, or burnout reaching critical mass. Stay in the chapel until your mind is clear.",
    "aphorism": "Rest is not surrender; it is the quiet sharpening of the sword before the final gate.",
    "sensoryNote": "Damp chapel stone, cool beeswax, old hymnal paper, and quiet silence."
  },
  "swords_5": {
    "name": "Five of Swords",
    "upright": "A sneering victor clutching three swords while two vanquished figures weep in the distance. A hollow victory. You may have won the argument, but look what you slaughtered to do it: trust, dignity, and love. Walk away before your spoils turn to venom.",
    "reversed": "Ending pointless disputes, laying down grievances, recognizing the futility of vengeance, or facing the bitter aftermath of betrayal. Swallow your pride and seek reconciliation.",
    "aphorism": "Winning an argument at the cost of a loved one's dignity is just defeat wearing a crown.",
    "sensoryNote": "Cold biting gale, sour sweat, and the sharp taste of bile."
  },
  "swords_6": {
    "name": "Six of Swords",
    "upright": "A ferryman poling a boat across smooth water toward distant hills, carrying a sorrowful mother and child, with six swords planted in the hull. A journey away from turbulent waters toward calm shores. The baggage is heavy, but the worst is behind you.",
    "reversed": "Rough passage, unresolved baggage dragging the boat down, or running back to the very storm you fled. Do not rock the skiff while the ferryman is steering you to safety.",
    "aphorism": "You cannot reach the quiet shore while desperately clutching the wreckage of the ship you left.",
    "sensoryNote": "Damp river mist, wet ash oar, and the gentle lapping of calm water."
  },
  "swords_7": {
    "name": "Seven of Swords",
    "upright": "A rogue tiptoeing away from the camp with five swords under his arm, glancing back at the two remaining. Strategy, cunning, stealth, evasion, or deception. Are you taking what is rightfully yours, or slinking away like a thief in the night? Watch your back.",
    "reversed": "Confession, conscience awakening, being caught red-handed, or returning what was stolen. The scheme has collapsed; face the council with what dignity remains.",
    "aphorism": "A victory won by theft requires a lifetime of checking over your shoulder.",
    "sensoryNote": "Tiptoeing on frozen gravel, stolen steel, and cold breath in the dark."
  },
  "swords_8": {
    "name": "Eight of Swords",
    "upright": "A woman bound in cord and blindfolded, surrounded by a cage of eight swords stuck in the mud—yet the path behind her is clear. Mental imprisonment, learned helplessness, and self-imposed victimhood. Shake your shoulders, darling; the ropes are loose and the gate is wide open.",
    "reversed": "Slashing the bindings! Stepping out of the mental prison, taking off the blindfold, and realizing the cage had no bars—only beliefs. Freedom begins with a single step out of the mud.",
    "aphorism": "The most impenetrable prison in the world is the one you built out of your own assumptions.",
    "sensoryNote": "Wet clay mud, hemp rope, thistle scratches, and a cold morning breeze."
  },
  "swords_9": {
    "name": "Nine of Swords",
    "upright": "Sitting upright in bed at three in the morning, face buried in trembling hands, with nine heavy swords hanging on the wall above. The nightmare hour. Guilt, despair, anguish, and insomnia. Ninety percent of the terror you are nursing exists only in the theater of your mind. Turn on the lamp.",
    "reversed": "The night breaks. Waking from the nightmare, seeking help, releasing shame, and discovering the monster in the closet was just a coat on a hanger. Dawn is coming.",
    "aphorism": "Midnight worries are cruel counterfeiters; they print debts that daylight never demands.",
    "sensoryNote": "Sweat-soaked linen, cold tea, ticking clock, and the heavy oppression of 3 AM."
  },
  "swords_10": {
    "name": "Ten of Swords",
    "upright": "Lying face down on the shore with ten black swords in the back, while a golden streak of dawn breaks across the dark sea. The absolute, unmitigated end. You cannot be killed twice, seeker. The betrayal is done, the worst has happened, and your suffering has peaked. Now: stand up into the sunrise.",
    "reversed": "Resurrection! Pulling the blades from your spine, breathing in clean air, and surviving what was meant to destroy you. The ordeal is over; rebuild your life from bedrock.",
    "aphorism": "When ten swords are in your back, take comfort: there is no room left for an eleventh.",
    "sensoryNote": "Cold sea sand, sharp iron, extinguished candles, and the crisp bite of dawn air."
  },
  "swords_page": {
    "name": "Page of Swords",
    "upright": "A spirited youth standing on windy crags, blade brandished high, looking over his shoulder with vigilant eyes. Inquisitive intellect, curiosity, truth-seeking, and fresh mental agility. Question everything, but do not mistake gossip for investigation.",
    "reversed": "Spiteful tongue, paranoia, snooping, Internet slander, and malicious cynicism. All bark and no backbone; wielding intellectual cruelty to mask cowardice.",
    "aphorism": "Curiosity seeks the key; cynicism merely kicks the lock until the door splinters.",
    "sensoryNote": "Gusting autumn wind, dry leaves clattering on pavement, and the ping of drawn steel."
  },
  "swords_knight": {
    "name": "Knight of Swords",
    "upright": "Riding at breakneck gallop into storm clouds, sword held straight ahead, horse charging without hesitation! Furious intellect, direct action, rapid communication, and tearing down falsehoods. Drive straight to the point.",
    "reversed": "Tactless brutality, recklessness, bulldozing feelings with cold intellectual arrogance, leaving casualties in the wake of an argument. Smart enough to win, foolish enough to alienate all allies.",
    "aphorism": "A razor-sharp mind without a compassionate heart is merely a meat cleaver on a rampage.",
    "sensoryNote": "Wind whipped through armor, storm clouds, and the bite of hail."
  },
  "swords_queen": {
    "name": "Queen of Swords",
    "upright": "Crowned in butterflies and sitting on a marble throne, her sword raised vertically, her left hand beckoning truth. She has known grief, and she has wept her oceans, but her mind is clear as diamond. She will give you the truth without sweetening, but with absolute justice.",
    "reversed": "Cold, bitter, merciless, wielding sarcasm like a bludgeon, cutting off intimacy because of unhealed wounds. A heart encased in permafrost.",
    "aphorism": "Clarity does not require cruelty; the highest intellect is always anchored in quiet dignity.",
    "sensoryNote": "Crisp mountain air, diamond dust, cut glass, and dried white roses."
  },
  "swords_king": {
    "name": "King of Swords",
    "upright": "The magistrate upon the high judgment seat, holding the upright sword of reason and law. Supreme intellectual authority, ethical clarity, objective analysis, and command of truth. Measure your choices by principle, not whim.",
    "reversed": "Tyrannical intellect, corruption of justice, cold manipulation, using law to oppress rather than liberate. A mind without a soul is a terrifying judge.",
    "aphorism": "Knowledge speaks with authority; wisdom listens with discernment before passing decree.",
    "sensoryNote": "Polished mahogany, legal parchment, sealing wax, and cold steel."
  },
  "pentacles_ace": {
    "name": "Ace of Pentacles",
    "upright": "A divine hand emerging from the clouds, offering a heavy golden pentacle above a garden of lilies and an arch of white roses. Tangible opportunity, material gift, physical vitality, new financial seed, and grounded prosperity. Plant it in fertile soil.",
    "reversed": "A squandered investment, missed financial opportunity, greed, or pouring money into sand. Look closely at the fine print before signing deeds.",
    "aphorism": "A golden coin is only heavy metal until you plant it in good soil.",
    "sensoryNote": "Rich dark potting loam, cold heavy gold, and blooming white lilies."
  },
  "pentacles_2": {
    "name": "Two of Pentacles",
    "upright": "A nimble youth juggling two golden disks within a green lemniscate, dancing gracefully as high-masted ships ride the tossing waves behind him. Juggling priorities, financial flexibility, adaptable balance, and riding the ebb and flow with a smile.",
    "reversed": "Dropping the plates! Overextended finances, chaotic schedule, debt spiraling, or playing with fire. Simplify your ledger before the carnival collapses.",
    "aphorism": "Balance is not standing like a statue; it is dancing with the wind without losing your center.",
    "sensoryNote": "Ocean spray, polished brass coins jingling, and salt air."
  },
  "pentacles_3": {
    "name": "Three of Pentacles",
    "upright": "The master stonemason carving the cathedral arch while the architect and monk review the blueprints. Collaboration, master craftsmanship, recognized skill, and building something enduring with trusted allies. Take pride in your trade.",
    "reversed": "Ego clashes on the job site, shoddy workmanship, lack of communication, or working with amateurs who cut corners. Do not put your signature on cracked masonry.",
    "aphorism": "A cathedral rises not from one man's hammer, but from three men sharing one blueprint.",
    "sensoryNote": "Chiseled limestone dust, beeswax candles in a stone crypt, and fresh drafting ink."
  },
  "pentacles_4": {
    "name": "Four of Pentacles",
    "upright": "Sitting hunched on a stone block, clutching one pentacle to his chest, two under his soles, and balancing one upon his crown. Greed, hoarding, fear of loss, emotional stinginess, and erecting iron bars around your wealth. You are not protecting your gold, darling; your gold is imprisoning you.",
    "reversed": "Loosening the death grip! Letting money flow, releasing scarcity fears, charitable generosity, or conversely, reckless financial hemorrhage. Open your palms.",
    "aphorism": "A clenched fist can neither lose what it holds nor receive what is offered.",
    "sensoryNote": "Cold iron lockboxes, stale vault air, and tarnished copper coins."
  },
  "pentacles_5": {
    "name": "Five of Pentacles",
    "upright": "Two shivering beggars limping through deep snow past the glowing stained glass window of a warm sanctuary. Poverty, hardship, physical illness, isolation, and feeling cast out into the cold. But look up: the church door is unlocked, seeker. Ask for shelter.",
    "reversed": "Recovery from financial ruin, warmth returning to the hearth, finding work, medical healing, and stepping inside from the blizzard. The winter is breaking.",
    "aphorism": "The bitterest cold is not the winter storm outside, but the conviction that you are unworthy of the hearth.",
    "sensoryNote": "Freezing snow on bare skin, wet crutches, and the faint smell of church incense through glass."
  },
  "pentacles_6": {
    "name": "Six of Pentacles",
    "upright": "A wealthy merchant weighing coins on a balanced scale, giving generously to the kneeling needy. Generosity, charity, fair distribution of resources, reciprocal aid, and cosmic karmic balance. Give without condescension; receive without shame.",
    "reversed": "Strings attached to gifts, debt traps, patronizing charity, or extortion. Beware the benefactor who demands your soul in exchange for your bread.",
    "aphorism": "True charity leaves the recipient's dignity intact; anything less is merely a bribe to vanity.",
    "sensoryNote": "Velvet purse, clinking silver coins, and dry bread."
  },
  "pentacles_7": {
    "name": "Seven of Pentacles",
    "upright": "A farmer leaning heavily on his hoe, contemplating seven golden disks growing on the vine. Assessment, patience, long-term investment, and the quiet realization that growth takes time. You have worked hard; let the vine do its quiet work.",
    "reversed": "Impatience, abandoned crops, or working tirelessly on a field that will never yield wheat. If the vine is barren, stop watering the dead roots.",
    "aphorism": "You cannot hurry the ripening of the vine by pulling on the leaves.",
    "sensoryNote": "Turned compost, green tomato leaves, and sweat on a wooden hoe handle."
  },
  "pentacles_8": {
    "name": "Eight of Pentacles",
    "upright": "A blacksmith hammering detail into the eighth pentacle, with seven already completed and hung upon the post. Diligent apprenticeship, painstaking craft, honing technique, and devotion to mastery. Lose yourself in the beauty of doing the work properly.",
    "reversed": "Monotonous drudgery, cutting corners, lack of passion, or perfectionism paralyzing production. Work done without pride is only slow decay.",
    "aphorism": "Mastery is simply a thousand ordinary days remembered with devotion.",
    "sensoryNote": "Wood shavings, hot steel shavings, oil on whetstones, and steady hammer blows."
  },
  "pentacles_9": {
    "name": "Nine of Pentacles",
    "upright": "A noblewoman in a gilded gown strolling through her lush vineyard, a hooded falcon resting serenely on her gloved wrist. Self-sufficiency, refined luxury, solitary elegance, financial independence, and enjoying the fruits of your own labor without needing a patron.",
    "reversed": "Superficial vanity, living beyond your means, golden handcuffs, or loneliness at the center of the estate. All the silk in France will not keep a hollow heart warm.",
    "aphorism": "True luxury is the quiet freedom to say 'I am content with what my own hands have tended.'",
    "sensoryNote": "Sun-ripened green grapes, heavy silk brocade, and soft bird feathers."
  },
  "pentacles_10": {
    "name": "Ten of Pentacles",
    "upright": "An elder patriarch in an embroidered coat petting hounds beneath the stone archway of his estate, with children and grandchildren prospering around him. Generational legacy, ancestral inheritance, enduring stability, and roots that anchor ten generations. Honor the bloodline.",
    "reversed": "Family feud over wills, crumbling estate, financial betrayal among kin, or clinging to obsolete family expectations. Do not let ancestral debts mortgage your children's joy.",
    "aphorism": "A true legacy is not what you leave in the vault, but what you planted in the character of those who follow.",
    "sensoryNote": "Old family silver, dry lavender in linen closets, and warm hound fur."
  },
  "pentacles_page": {
    "name": "Page of Pentacles",
    "upright": "A studious youth standing in a blooming pasture, reverently holding a golden coin aloft as though studying the mystery of seeds. A student of the earth, financial apprenticeship, practical curiosity, and grounded ambition. Study the foundation well.",
    "reversed": "Procrastination, lack of follow-through, squandered talents, or materialistic obsession without the willingness to study. All talk of riches, no sweat in the garden.",
    "aphorism": "Every oak tree began as a nut that held its ground.",
    "sensoryNote": "Fresh clover, moist black dirt, and newly minted copper."
  },
  "pentacles_knight": {
    "name": "Knight of Pentacles",
    "upright": "A sturdy knight upon a heavy plow-horse, stationary in the plowed field, contemplating a single golden disk. The most dependable worker in the deck. Methodical, unyielding, tenacious, and utterly reliable. Keep your head down and finish the furrow.",
    "reversed": "Stubborn obstinacy, mind-numbing boredom, penny-pinching, or becoming a beast of burden out of fear of change. Don't be so stubborn that you plow the road.",
    "aphorism": "The tortoise does not mock the hare; he simply arrives at the finish line and goes to sleep.",
    "sensoryNote": "Damp horse blankets, plowed loam, and heavy leather harness."
  },
  "pentacles_queen": {
    "name": "Queen of Pentacles",
    "upright": "A benevolent queen seated on a throne carved with cherubs and goats, cradling a golden pentacle in her lap while a wild hare leaps at her feet. Earth mother, practical wisdom, abundant hospitality, financial savvy, and creating sanctuary where body and soul flourish.",
    "reversed": "Smothering materialism, neglecting self-care while feeding everyone else, social climbing, or hoarding pantry jars while the spirit starves. Feed your own bones first, darling.",
    "aphorism": "A warm kitchen and an honest ledger do more to heal the soul than a thousand cathedral prayers.",
    "sensoryNote": "Freshly baked sourdough, damp garden soil, dried thyme, and wool flannel."
  },
  "pentacles_king": {
    "name": "King of Pentacles",
    "upright": "A sovereign upon a throne overflowing with carved bulls, grapevines, and golden coins, velvet robe trailing in the grass. The master of the material realm: business acumen, generosity, steady security, and turning whatever he touches into gold. Rule your domain with grounded generosity.",
    "reversed": "Greed, corruption, stubborn materialism, judging human worth solely by bank balance, or financial collapse through reckless speculation. A miser dies in a room full of gold and leaves nothing behind but envy.",
    "aphorism": "Wealth is a tool to build shelter and freedom; worship it, and it becomes a tomb.",
    "sensoryNote": "Aged whiskey, fine Cuban tobacco, heavy velvet, and polished gold ingots."
  }
};

export const POSITION_LENSES = {
  heart: {
    id: "heart",
    name: "The Heart of the Matter",
    alias: "The Central Stake",
    prompt: "This is the raw nerve of your inquiry. Strip away the peripheral chatter; here lies the marrow of what brought you to my table.",
    contextualize: (card, isRev) => isRev
      ? `At the dead center of your circumstance, ${card.name} appears upside-down. You are battling an internal blockage or refusing to acknowledge the root distortion right under your nose.`
      : `At the beating heart of your situation, ${card.name} stands upright and unequivocal. This is the primary current moving through your days; center your attention here.`
  },
  crossing: {
    id: "crossing",
    name: "The Crossing / The Challenge",
    alias: "The Thorn in the Sandal",
    prompt: "Here is the obstacle, the friction, the sandpaper against your skin. It may look like an enemy, but it is the grindstone sent to sharpen you.",
    contextualize: (card, isRev) => isRev
      ? `Crossing your path as a thorn, ${card.name} in reversal shows that the greatest obstacle is self-generated friction—an unhealed reflex or stubborn avoidance compounding the problem.`
      : `Crossing your path, ${card.name} presents the active challenge you must negotiate. Do not attempt to detour around it; the only way out is straight through.`
  },
  foundation: {
    id: "foundation",
    name: "The Foundation / The Root",
    alias: "Where the Water Table Lies",
    prompt: "What lies deep in the cellar floor, beneath memory and pride. The buried cause that feeds the tree above.",
    contextualize: (card, isRev) => isRev
      ? `Deep in the subterranean roots of this matter, ${card.name} in reversal reveals an unresolved wound or distorted belief planted long ago that still poisons the harvest.`
      : `Anchoring the entire structure, ${card.name} upright provides the sturdy soil from which this dilemma grew. Look to your foundational values to find your balance.`
  },
  past: {
    id: "past",
    name: "The Past / Receding Influence",
    alias: "The Footsteps in the Mud",
    prompt: "The tide that is pulling out. The season that just closed its account in your ledger.",
    contextualize: (card, isRev) => isRev
      ? `In the receding shadows of your past, ${card.name} reversed indicates an old story you have not fully laid to rest. Stop dragging the dead weight through the door.`
      : `In your recent wake, ${card.name} upright shows the experience that delivered you to this threshold. Honor its lesson, but release your grip on what is already behind you.`
  },
  crown: {
    id: "crown",
    name: "The Crown / Conscious Goal",
    alias: "The Highest Gargoyle",
    prompt: "What you aspire to in the light of day. What your conscious intellect claims it desires.",
    contextualize: (card, isRev) => isRev
      ? `Crowning your aspirations, ${card.name} reversed suggests your conscious goal is clouded by unrealistic expectations, ego defensiveness, or pursuing a prize you don't actually want.`
      : `Crowning your situation, ${card.name} upright illuminates your highest potential outcome and conscious ideal. Aim your arrows directly toward this standard.`
  },
  future: {
    id: "future",
    name: "The Near Future / Approaching Tide",
    alias: "The Knock at the Shutter",
    prompt: "The next guest climbing the stairs. What is taking shape in the damp air right around the bend.",
    contextualize: (card, isRev) => isRev
      ? `Approaching on the immediate horizon, ${card.name} reversed warns of an impending hitch or friction if you continue along your present trajectory. Adjust your gait before you trip.`
      : `Climbing the front steps of your near future, ${card.name} upright promises an emerging energy that will demand your active engagement. Prepare your tools.`
  },
  self: {
    id: "self",
    name: "The Self / Your Stance",
    alias: "The Mirror in the Dim Corner",
    prompt: "How you are showing up in this theater. The mask, the posture, and the true temperature of your blood.",
    contextualize: (card, isRev) => isRev
      ? `In the mirror of your internal self, ${card.name} reversed exposes where you are self-sabotaging, acting out of insecurity, or projecting your own shadows onto others.`
      : `Reflected in the glass of your inner self, ${card.name} upright reveals your genuine disposition and personal authority in this matter. Stand tall in this energy.`
  },
  environment: {
    id: "environment",
    name: "The Environment / External Influences",
    alias: "The Whispers in the Alley",
    prompt: "The weather outside your window: family, rivals, market forces, and the expectations of the town.",
    contextualize: (card, isRev) => isRev
      ? `In the world around you, ${card.name} reversed indicates miscommunication, hostility, or chaotic external pressures undermining your efforts. Lock your shutters.`
      : `In your immediate environment, ${card.name} upright highlights allies, social currents, or external resources ready to support your endeavor if you invite them in.`
  },
  hopes_fears: {
    id: "hopes_fears",
    name: "Hopes and Fears",
    alias: "The Raven on the Lintel",
    prompt: "The secret appetite and the secret dread. In the human heart, they are often carved on opposite sides of the same copper coin.",
    contextualize: (card, isRev) => isRev
      ? `In the shadowed alcove of your hopes and fears, ${card.name} reversed reveals a deep-seated trepidation of failure—or an even deeper terror of true success and exposure.`
      : `Hovering between your prayers and your anxieties, ${card.name} upright shows precisely what your spirit yearns for, even while your knees tremble at the cost.`
  },
  outcome: {
    id: "outcome",
    name: "The Outcome / The Culmination",
    alias: "The Seventh Bell",
    prompt: "Where the road runs out into the sea. The final tally when all accounts are settled.",
    contextualize: (card, isRev) => isRev
      ? `When the Seventh Bell tolls for the outcome, ${card.name} reversed warns that unless you heed the preceding counsel, the matter will resolve in stagnation, delay, or an uneasy compromise.`
      : `When the Seventh Bell chimes the final outcome, ${card.name} upright rings with decisive culmination. This is the harvest of your choices; walk forward to claim it with clean hands.`
  },
  situation: {
    id: "situation",
    name: "The Situation",
    alias: "The Ground Underfoot",
    prompt: "Where you stand at this exact hour.",
    contextualize: (card, isRev) => isRev
      ? `In the present layout of your situation, ${card.name} reversed points to confusion or stalled momentum that must be cleared first.`
      : `Defining your current situation, ${card.name} upright sets the scene with absolute clarity. This is your stage.`
  },
  obstacle: {
    id: "obstacle",
    name: "The Obstacle",
    alias: "The Briar Patch",
    prompt: "What impedes your forward progress.",
    contextualize: (card, isRev) => isRev
      ? `As an obstacle, ${card.name} reversed indicates your own internal resistance or refusal to accept an uncomfortable truth.`
      : `Standing directly in your path, ${card.name} upright demands skill, courage, and focused strategy to overcome.`
  },
  advice: {
    id: "advice",
    name: "The Advice",
    alias: "The Crow's Whisper",
    prompt: "What Malachi and I bid you to do.",
    contextualize: (card, isRev) => isRev
      ? `For your medicine, ${card.name} reversed counsels you to cease forcing matters, let go of rigidity, and look inward to resolve what is crooked.`
      : `As your direct prescription, ${card.name} upright commands you to embody this card's highest virtues without apology or delay.`
  },
  mind: {
    id: "mind",
    name: "The Mind / Intellectual Sphere",
    alias: "The Upper Chamber",
    prompt: "The chatter of thoughts, philosophies, and strategies.",
    contextualize: (card, isRev) => isRev
      ? `In the chamber of your thoughts, ${card.name} reversed shows racing anxieties, cognitive distortions, or obsessive overthinking.`
      : `In the upper room of your intellect, ${card.name} upright bestows clarity, insight, and strategic vision.`
  },
  body: {
    id: "body",
    name: "The Body / Physical Manifestation",
    alias: "The Clay Vessel",
    prompt: "The flesh, the coins, the physical roof above your bed.",
    contextualize: (card, isRev) => isRev
      ? `In your physical vessel and material affairs, ${card.name} reversed signals depleted vitality, physical neglect, or financial friction.`
      : `In your tangible world, ${card.name} upright manifests as concrete health, bodily grounding, and material reality.`
  },
  spirit: {
    id: "spirit",
    name: "The Spirit / Divine Will",
    alias: "The Eternal Spark",
    prompt: "What the soul came here to learn.",
    contextualize: (card, isRev) => isRev
      ? `In your spiritual alignment, ${card.name} reversed shows a temporary disconnection from your deeper compass or existential fatigue.`
      : `In the sacred sanctum of your spirit, ${card.name} upright burns with divine purpose and transcendent wisdom.`
  },
  single: {
    id: "single",
    name: "Single Draw / Oracle",
    alias: "The Sole Lantern",
    prompt: "A single lightning bolt to illuminate your present sky.",
    contextualize: (card, isRev) => isRev
      ? `As a singular oracle, ${card.name} reversed turns its gaze inward into your shadows, calling for reflection and recalibration.`
      : `As your sole compass point today, ${card.name} upright delivers an unambiguous directive from the unseen.`
  }
};

/**
 * Normalizes any spread position into one of Morwenna's contextual lenses
 */
export function normalizePosition(positionName) {
  if (!positionName) return POSITION_LENSES.single;
  const lower = String(positionName).toLowerCase().trim();
  
  if (lower.includes("heart") || lower.includes("center") || lower.includes("now") || (lower.includes("present") && !lower.includes("past"))) {
    return POSITION_LENSES.heart;
  }
  if (lower.includes("cross") || lower.includes("challenge") || lower.includes("obstacle") || lower.includes("block") || lower.includes("problem")) {
    return POSITION_LENSES.crossing;
  }
  if (lower.includes("foundation") || lower.includes("root") || lower.includes("subconscious") || lower.includes("basis") || lower.includes("underlying")) {
    return POSITION_LENSES.foundation;
  }
  if (lower.includes("past") || lower.includes("history") || lower.includes("behind") || lower.includes("recent")) {
    return POSITION_LENSES.past;
  }
  if (lower.includes("crown") || lower.includes("goal") || lower.includes("conscious") || lower.includes("aspiration") || lower.includes("highest")) {
    return POSITION_LENSES.crown;
  }
  if (lower.includes("future") || lower.includes("ahead") || lower.includes("horizon") || lower.includes("next")) {
    return POSITION_LENSES.future;
  }
  if (lower.includes("self") || lower.includes("querent") || lower.includes("you") || lower.includes("stance") || lower.includes("attitude")) {
    return POSITION_LENSES.self;
  }
  if (lower.includes("environment") || lower.includes("others") || lower.includes("external") || lower.includes("world") || lower.includes("house")) {
    return POSITION_LENSES.environment;
  }
  if (lower.includes("hope") || lower.includes("fear") || lower.includes("secret") || lower.includes("dread")) {
    return POSITION_LENSES.hopes_fears;
  }
  if (lower.includes("outcome") || lower.includes("culmination") || lower.includes("result") || lower.includes("final") || lower.includes("seventh")) {
    return POSITION_LENSES.outcome;
  }
  if (lower.includes("mind") || lower.includes("thought") || lower.includes("intellect")) {
    return POSITION_LENSES.mind;
  }
  if (lower.includes("body") || lower.includes("physical") || lower.includes("health") || lower.includes("vessel")) {
    return POSITION_LENSES.body;
  }
  if (lower.includes("spirit") || lower.includes("soul") || lower.includes("divine")) {
    return POSITION_LENSES.spirit;
  }
  if (lower.includes("advice") || lower.includes("guidance") || lower.includes("counsel") || lower.includes("action")) {
    return POSITION_LENSES.advice;
  }
  if (lower.includes("situation") || lower.includes("state")) {
    return POSITION_LENSES.situation;
  }
  
  // Dynamic fallback for custom positions
  return {
    id: lower.replace(/\s+/g, '_'),
    name: positionName,
    alias: `The Seat of ${positionName}`,
    prompt: `In the specific station of ${positionName}, the cards reveal their targeted influence.`,
    contextualize: (card, isRev) => isRev
      ? `In the station of ${positionName}, ${card.name} reversed indicates resistance, obscured motives, or a need to realign your inner orientation before proceeding.`
      : `In the station of ${positionName}, ${card.name} upright commands primary focus, infusing this aspect of your query with its pure archetype.`
  };
}

/**
 * Greets the seeker in Morwenna's distinct voice
 */
export function getGreeting(seekerName = "wanderer", timeOfDay = "evening") {
  const greetings = [
    `Draw close to the brazier, ${seekerName}. The rain is dripping through the cobblestone vaults tonight, and Malachi has already ruffled his feathers three times. Let us see what the silence has been trying to tell you.`,
    `Sit, ${seekerName}. Blow out the street lamp outside your mind; here in the cellar, we speak only in tallow and truth. What question keeps your marrow awake while the rest of the city sleeps?`,
    `Ah, ${seekerName}. You bring the chill of the outside wind with you. Take a seat upon the velvet stool. The cards are already warm to the touch, and they do not have the patience for polite pretenses today.`,
    `Come in, ${seekerName}, and shut the heavy oak door behind you. Malachi, hush! Forgive him; he senses when someone arrives carrying heavy invisible luggage. Lay your burdens on the table.`
  ];
  return greetings[Math.floor(Math.random() * greetings.length)];
}

/**
 * Main interpretation function: Interprets any card in any position
 * 
 * @param {string|object} card - Card object from js/cards.js or card id (e.g. "maj_16", "wands_ace")
 * @param {string} positionName - Name or identifier of the position (e.g. "Heart", "Past", "Advice")
 * @param {boolean} isReversed - Whether the card is drawn reversed
 * @param {object} spreadContext - Optional spread metadata (e.g. spreadType, siblingCards)
 */
export function interpretCard(card, positionName = "Single Draw", isReversed = false, spreadContext = {}) {
  const cardId = typeof card === 'string' ? card : (card?.id || 'maj_00');
  const cardData = CARD_INTERPRETATIONS[cardId] || {
    name: card?.name || "The Unknown Mystery",
    upright: "A card of veiled power whose secrets stir beneath the surface of the waters. Walk with quiet step.",
    reversed: "Distortion in the aether. A hidden obstruction blocks the channel; pause and clear your vision.",
    aphorism: "Every mystery yields when approached with clean hands and steady breath.",
    sensoryNote: "The faint rustle of dry leaves and cold candle wax."
  };

  const positionLens = normalizePosition(positionName);
  const positionalSynthesis = positionLens.contextualize(cardData, isReversed);
  const monologue = isReversed ? cardData.reversed : cardData.upright;

  return {
    readerId: MORWENNA_PROFILE.id,
    readerName: MORWENNA_PROFILE.name,
    cardId: cardId,
    cardName: cardData.name,
    isReversed: !!isReversed,
    orientationLabel: isReversed ? "Reversed (Shadow / Inward Current)" : "Upright (Manifest / Active Current)",
    positionName: positionName,
    positionAlias: positionLens.alias,
    positionPrompt: positionLens.prompt,
    
    // Morwenna's Distinct Spoken Reading
    interpretation: monologue,
    positionalSynthesis: positionalSynthesis,
    
    // Bespoke In-Character Pillars
    aphorism: cardData.aphorism,
    sensoryNote: cardData.sensoryNote,
    crowWhisper: isReversed 
      ? `Malachi caws: "You are defending a wall with no stones left. Drop the grievance before it drops you."`
      : `Malachi nods his black beak: "Clean action, seeker. Strike the flint while the kindling is dry."`,

    // Complete Combined Speech for Reader Display
    formattedReading: `"${monologue}"\n\n*Regarding ${positionLens.alias}*: ${positionalSynthesis}\n\n— *${cardData.aphorism}*`
  };
}

/**
 * Synthesizes an entire spread of drawn cards into a holistic, overarching reading
 * 
 * @param {Array<{card: object|string, position: string, isReversed: boolean}>} drawnCards
 * @param {string} spreadType - e.g. "celtic_cross", "three_card", "past_present_future"
 */
export function synthesizeSpread(drawnCards = [], spreadType = "spread") {
  if (!drawnCards || drawnCards.length === 0) {
    return {
      title: "The Silent Vault",
      summary: "The table remains bare. Shuffle the pasteboards and invite the mystery to speak.",
      dominantElement: "None",
      reversalRatio: 0
    };
  }

  const interpretations = drawnCards.map(item => 
    interpretCard(item.card, item.position, item.isReversed)
  );

  const total = drawnCards.length;
  const reversals = drawnCards.filter(c => c.isReversed).length;
  const reversalRatio = reversals / total;

  // Elemental & Arcana analysis
  let majorCount = 0;
  let wandsCount = 0;
  let cupsCount = 0;
  let swordsCount = 0;
  let pentaclesCount = 0;

  drawnCards.forEach(c => {
    const id = typeof c.card === 'string' ? c.card : (c.card?.id || '');
    if (id.startsWith('maj_')) majorCount++;
    else if (id.startsWith('wands_')) wandsCount++;
    else if (id.startsWith('cups_')) cupsCount++;
    else if (id.startsWith('swords_')) swordsCount++;
    else if (id.startsWith('pentacles_')) pentaclesCount++;
  });

  let elementalNote = "";
  if (majorCount >= 3 || majorCount / total > 0.4) {
    elementalNote = "The Major Arcana dominate this layout. These are not trivial, day-to-day squabbles; the tectonic plates of your destiny are grinding against one another. Pay sacred attention.";
  } else if (swordsCount > total / 2) {
    elementalNote = "The air is thick with blades and wind. You are locked in the upper chambers of analysis, grief, or strategic warfare. Put down your mental dissecting knife before you carve away your peace.";
  } else if (cupsCount > total / 2) {
    elementalNote = "The tide is high, and the cellar floor is wet with memory. Emotional waters run deep here; do not mistake feeling deeply for helplessness.";
  } else if (wandsCount > total / 2) {
    elementalNote = "A bonfire roars in the hearth. Ambition, urgency, and creative restlessness are consuming your kindling. Channel the blaze into craft before it consumes your domestic peace.";
  } else if (pentaclesCount > total / 2) {
    elementalNote = "Cold stones, heavy coins, and patient vines. The material reality demands your sober stewardship. Build for ten winters hence, not for tomorrow morning.";
  } else {
    elementalNote = "The four elemental streams intermingle on the cloth: fire tests water, while steel cultivates stone. Balance is your task.";
  }

  let reversalNote = "";
  if (reversalRatio > 0.6) {
    reversalNote = "A heavy canopy of reversals hangs over this spread. The outer world is merely the echo chamber; the true friction, doubt, and resistance live entirely within your own breast. Time for an honest inventory in the dark.";
  } else if (reversalRatio === 0) {
    reversalNote = "Every card faces the sky upright! The currents are flowing without dam or obstruction into physical reality. Step forward; the road is clear.";
  } else {
    reversalNote = "A dance of shadows and light. Where the cards stand upright, you have momentum; where they tilt reversed, you are asked to pause and adjust your compass.";
  }

  // Overarching Morwenna Synthesis Narrative
  const cardNames = interpretations.map(i => `${i.cardName} (${i.positionAlias})`).join(", ");
  
  const synthesisNarrative = `"Look at the cloth, seeker. We have laid out ${total} cards: ${cardNames}.

${elementalNote}

${reversalNote}

Here is the thread that stitches these cards together: What you began in ${interpretations[0]?.cardName || 'the first card'} was never meant to be a leisurely promenade. It has brought you face-to-face with your own capacity for transformation. Malachi has ceased his fidgeting and is staring at the final station: ${interpretations[interpretations.length - 1]?.cardName || 'the culmination'}. 

Do not ask me if the future is set in iron. The future is wet clay; these cards merely show the shape your hands have been pressing into it. If you like the pot you are throwing on the wheel, keep your foot steady on the pedal. If not—smash the clay and begin again with clean water.

Salt your threshold tonight, drink your bitter tea, and remember who you were before fear convinced you to shrink."`;

  return {
    readerId: MORWENNA_PROFILE.id,
    readerName: MORWENNA_PROFILE.name,
    spreadType: spreadType,
    cardCount: total,
    reversalCount: reversals,
    reversalPercentage: Math.round(reversalRatio * 100),
    majorArcanaCount: majorCount,
    suitDistribution: {
      wands: wandsCount,
      cups: cupsCount,
      swords: swordsCount,
      pentacles: pentaclesCount
    },
    elementalCommentary: elementalNote,
    reversalCommentary: reversalNote,
    overallSynthesis: synthesisNarrative,
    cardInterpretations: interpretations,
    partingChime: "The Seventh Bell has tolled; the cards return to their velvet sleep."
  };
}

/**
 * UI Renderer: Renders Morwenna's profile card for the Readers Panel UI
 */
export function renderReaderCardHTML() {
  return `
    <div class="reader-persona-card" data-reader-id="${MORWENNA_PROFILE.id}" style="
      background: linear-gradient(135deg, #1b061d 0%, #2d132c 100%);
      border: 1px solid #d4af37;
      border-radius: 8px;
      padding: 16px;
      color: #f4ede2;
      font-family: 'Cinzel', 'Georgia', serif;
      box-shadow: 0 4px 16px rgba(0,0,0,0.6);
      display: flex;
      flex-direction: column;
      gap: 12px;
    ">
      <div style="display: flex; gap: 14px; align-items: center;">
        <div style="width: 72px; height: 72px; flex-shrink: 0; border-radius: 50%; border: 2px solid #d4af37; overflow: hidden; box-shadow: 0 0 12px rgba(212,175,55,0.3);">
          ${MORWENNA_PROFILE.avatarSvg}
        </div>
        <div>
          <h3 style="margin: 0; color: #f3d082; font-size: 1.15rem; letter-spacing: 0.05em;">${MORWENNA_PROFILE.name}</h3>
          <div style="font-size: 0.8rem; color: #d4af37; font-style: italic; margin-top: 2px;">${MORWENNA_PROFILE.title}</div>
          <div style="font-size: 0.72rem; color: #90e0ef; margin-top: 4px; opacity: 0.85;">📍 ${MORWENNA_PROFILE.location}</div>
        </div>
      </div>
      
      <p style="margin: 0; font-size: 0.82rem; line-height: 1.45; color: #e8d8c8; font-family: 'Georgia', serif; border-top: 1px solid rgba(212,175,55,0.25); padding-top: 10px;">
        "${MORWENNA_PROFILE.voice.favoriteProverbs[0]}"
      </p>

      <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 4px;">
        <span style="font-size: 0.72rem; color: #d4af37; text-transform: uppercase; letter-spacing: 0.08em;">
          Familiar: ${MORWENNA_PROFILE.familiar.split(' ')[0]}
        </span>
        <button class="select-reader-btn" data-reader-id="${MORWENNA_PROFILE.id}" style="
          background: #4a154b;
          border: 1px solid #d4af37;
          color: #f3d082;
          padding: 6px 14px;
          border-radius: 4px;
          cursor: pointer;
          font-family: 'Cinzel', 'Georgia', serif;
          font-size: 0.75rem;
          font-weight: bold;
          letter-spacing: 0.05em;
          transition: all 0.2s ease;
        ">Consult Morwenna</button>
      </div>
    </div>
  `;
}

/**
 * Default reader persona export for the readers panel
 */
/** The app's positions, by role, and the lens Morwenna reads each one through. */
const ROLE_LENSES = {
  core: "single",
  past: "past",
  present: "heart",
  future: "future",
  center_base: "heart",
  center_cross: "crossing",
  below: "foundation",
  left: "past",
  above: "crown",
  right: "future",
  staff_1: "self",
  staff_2: "environment",
  staff_3: "hopes_fears",
  staff_4: "outcome",
  situation: "situation",
  obstacle: "obstacle",
  advice: "advice",
  mind: "mind",
  body: "body",
  spirit: "spirit"
};

/**
 * The reading in the shape the app draws: one reflection per card, a summary,
 * one sentence on the balance of suits, advice and a closing line.
 */
function interpret(spreadData) {
  const { cards, question } = spreadData;

  const cardReadings = cards.map(({ card, isReversed, position }) => {
    const lines = CARD_INTERPRETATIONS[card.id];
    if (!lines) throw new Error(`Morwenna has no page in the ledger for ${card.id}.`);
    const lens = POSITION_LENSES[ROLE_LENSES[position?.role]] || normalizePosition(position?.name);
    const keywords = isReversed ? card.keywordsReversed : card.keywordsUpright;
    return {
      positionIndex: position.index,
      positionName: position.name,
      cardId: card.id,
      cardName: card.name,
      cardElement: card.element,
      isReversed,
      orientation: isReversed ? "Reversed" : "Upright",
      focalKeyword: (keywords && keywords[0]) || "",
      reflection: `${isReversed ? lines.reversed : lines.upright} ${lens.contextualize(lines, isReversed)}`
    };
  });

  const synthesis = synthesizeSpread(
    cards.map(({ card, isReversed, position }) => ({ card, isReversed, position: position?.name })),
    spreadData.spread?.id
  );
  const asked = question && question.trim()
    ? `You ask “${question.trim()}” Draw close to the brazier.`
    : "No question spoken. The pasteboards will choose their own subject.";
  const last = cards[cards.length - 1];
  const lastLines = last ? CARD_INTERPRETATIONS[last.card.id] : null;

  return {
    readerId: MORWENNA_PROFILE.id,
    readerName: MORWENNA_PROFILE.name,
    readerTitle: MORWENNA_PROFILE.title,
    summary: `${asked} ${synthesis.reversalCommentary}`,
    elementalInsight: synthesis.elementalCommentary,
    cardReadings,
    actionableAdvice: lastLines
      ? `From ${last.card.name}, the last card on the cloth: ${lastLines.aphorism}`
      : "",
    closingBenediction: synthesis.partingChime
  };
}

export const morwennaReader = {
  ...MORWENNA_PROFILE,
  interpret,
  interpretCard,
  synthesizeSpread,
  getGreeting,
  normalizePosition,
  renderReaderCardHTML,
  cardInterpretations: CARD_INTERPRETATIONS,
  positionLenses: POSITION_LENSES
};

export default morwennaReader;
