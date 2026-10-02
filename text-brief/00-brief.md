# Astralis reader text: rewrite brief

This is a writing job for the text spoken by the readers in a tarot app called Astralis. It lists every change wanted, reader by reader, shows the text as it stands, and says what to send back. Everything needed is in this file and the per-reader files beside it; nothing else about the app needs to be known.

The files:

| File | What it holds |
|---|---|
| `00-brief.md` | This file: how a reading is put together, the rules, and the changes wanted for each reader, with each reader's fixed lines in full. |
| `sable-moreau.md`, `cal-navarro.md`, `morwenna.md`, `barnaby.md`, `cassian-vetch.md`, `lyle-pasternak.md`, `ruth-calloway.md` | That reader's 156 card lines (78 cards, upright and reversed) as they stand, each with the card's standard meaning beside it. |

One reader at a time works best: send this file with one reader's file.

## 1. What the app does

A person picks a reader (a character), types a question or leaves it blank, and deals one card, three cards, or ten (a Celtic Cross). They turn the cards over one at a time, and the reader's words for each card appear as it turns. When every card is turned, the reader sums up.

None of the text is generated while the app runs. Every line is written in advance and the app joins lines together: one by position, one by card, a few for the spread as a whole. The owner's complaint is that the result is often confusing and does not flow, and that it should read like one person talking. Most of the problems below come from lines that were written separately and do not sit well next to each other.

There are eight readers. Two of them, **Sable Moreau** and **Cal Navarro**, are sexually explicit on purpose, and the app labels them "Explicit" in the reader list and on the reading. Keep them explicit. Keep what both characters already hold to: they are adults speaking to an adult who chose them, and "Stop means stop" is part of both.

**Pippin** (a cat who only makes cat noises) is a joke and stays exactly as written. He is not in this job.

## 2. How a reading is put together

Here is a real three-card reading by Cassian Vetch, for the question "should I quit my job?", with the name of the slot each piece of text comes from.

| Slot | Text |
|---|---|
| `openers` | Slip received. I am reading it the way it came in: “should I quit my job?” Three sheets, then a stamp. |
| `frames.past` + the card's name | Yesterday's ink, still wet on the page you came in from: The Tower. |
| card line | The structure comes down because a lie, a plan, or a self has been load-bearing and the load arrived. The Tower is what the strike reveals. The true parts survive. The rest was scenery. Propping it up puts you under it twice. |
| sign-off (`Stamp:`) | Stop repairing the thing that cracked. Clear one piece of rubble today and sleep somewhere honest. |
| `frames.present` + the card's name | The sheet locked on the tympan, which is your present: Five of Cups, printed upside down. |
| card line | The mourning is lifting. Acceptance is available, and it can feel like disloyalty if you liked the clarity of the tragedy. You can keep a little grief and still pick up what stands. Recovery is not a verdict on how real the loss was. |
| sign-off (`Stamp:`) | Do one ordinary pleasant thing without narrating it as a betrayal of what you lost. |
| `frames.future` + the card's name | The next pull, already inked, waiting for you: King of Pentacles. |
| card line | The provider who arrived. The King of Pentacles is abundance with discipline: a steady hand, generous because the foundation is real. Share the method, not only the coins. If you are dealing with him, notice whether his security leaves other people smaller. |
| sign-off (`Stamp:`) | Make one decision that favors the long foundation over the quick win, and be generous on the way. |
| `weight` | Mostly the everyday sorts: pips, courts, the work of a week. Still ink. Most of a life is weekdays. |
| `suitNotes` | No suit has the forme. An even job, which usually means the trouble is in the lockup, not the type. |
| `advice` | Some sheets are true and some are ghosting. Normal night. Handle the card in front of you and leave the next one in the rack. |
| `closers` | That's the sheet. It ends on King of Pentacles, which means the fix is practical and probably costs something. Pay it. The window stays open another minute, then I have a condolence card to lock up. |

And the same reader with one card:

| Slot | Text |
|---|---|
| `openers` | Slip received: “should I quit my job?” One sheet for it. Good. Most questions are answered on one. |
| `frames.core` + the card's name | One sheet, pulled for you and held up to the grille: Seven of Swords. |
| card line | Strategy, or sneakiness. The Seven of Swords asks what you are unwilling to do in the open. A clever independent move can be legitimate. A theft, a self-deception, or a diplomatic lie is the same picture in a worse light. If you cannot tell one ally, look again. |
| sign-off (`Stamp:`) | Tell the full plan to one honest person, or drop the part you were hiding. |
| `closerOne` | That's the sheet: Seven of Swords. One card, one stamp. Keep it. The window stays open another minute. |

The slots:

| Slot | When it is used | Chosen by |
|---|---|---|
| `greeting` | Shown before the first card is turned. Replaced by the opener once a card turns. | The reader |
| `openers` | Before the cards. | Number of cards (1, 3, 10) and whether a question was typed |
| `frames` (lead-ins) | Starts each card. The app adds the card's name straight after it, then a full stop. | The card's position |
| card line | Follows the lead-in. | The card and which way up it is |
| sign-off | The last part of the card line, after a label such as `Stamp:`. The app shows it on its own line under the card, with the label. | Part of the card line |
| `weight` | After the cards. Three cards or more only. | `heavy` when the spread is mostly Major Arcana, otherwise `light` |
| `suitNotes` | After the cards, beside a count of each suit. Three or more only. | The suit with the most cards, or `mixed` |
| `advice` | Under the heading "Advice". Three or more only. | How many cards are reversed: `none`, `some`, `most` |
| `closers` | The last thing said, three cards or more. | The suit of the last card, or `major` |
| `closerOne` | The last thing said when there is one card. | Always the same |

The positions a card can land in, and the key of the lead-in for each:

| Key | Spread | Position | What the app says it is |
|---|---|---|---|
| `core` | One card | Your card | The card for your question. |
| `past` | Three cards | Past | Where this came from. |
| `present` | Three cards | Present | What is happening now. |
| `future` | Three cards | Future | Where this is heading. |
| `situation` | Three cards | Situation | What is actually going on. |
| `obstacle` | Three cards | Obstacle | What stands in the way. |
| `advice` | Three cards | Advice | What to do about it. |
| `mind` | Three cards | Mind | What you think about it. |
| `body` | Three cards | Body | What your body and your days are carrying. |
| `spirit` | Three cards | Spirit | What you already know underneath. |
| `center_base` | Celtic Cross | The matter | What this is about, right now. |
| `center_cross` | Celtic Cross | Challenge | What crosses it, for good or ill. |
| `below` | Celtic Cross | Root | What this grew out of, below your notice. |
| `left` | Celtic Cross | Recent past | What is just leaving. |
| `above` | Celtic Cross | What you want | What you are reaching for. |
| `right` | Celtic Cross | Near future | What is coming next. |
| `staff_1` | Celtic Cross | You | How you are holding yourself in this. |
| `staff_2` | Celtic Cross | Others | The people and pressures around you. |
| `staff_3` | Celtic Cross | Hopes and fears | What you hope for and what you dread, often the same thing. |
| `staff_4` | Celtic Cross | Outcome | Where this is likely to end up if nothing changes. |

What this means for the writing:

1. **A card line is used in every position.** The lead-in says where the card sits (past, future, obstacle, advice). The card line must read true after any of them. "The lie is coming down" does not follow a lead-in about the past. Write card lines that say what the card is and does, without fixing a time, and leave the time to the lead-in.
2. **A lead-in ends in the card's name.** It must be one clause ending in a colon, so that "…: The Tower." completes it. "One card. Try not to clap. The lot is full of people who clapped: Seven of Swords." does not work, because the name hangs off the wrong sentence.
3. **A lead-in gives no verdict.** Any card can land in any position, so a lead-in that says the position is bad (or good) will be contradicted by half the cards that follow it.
4. **The card has just been named.** A card line that says "The King of Pentacles is…" repeats what the lead-in said a second earlier. About half of Cassian's, Lyle's, Sable's and Cal's lines do this. Say what the card means; use its name again only where the sentence needs it.
5. **The reader does not know what the question is about.** The same line is used for a question about work, a death, or a holiday. Lines cannot assume a subject. (Sable and Cal treat everything as being about sex. That is the character and it stays.)
6. **With one card, only three things are said:** the opener for one card, the card, and `closerOne`. They appear close together, so they must not repeat each other.
7. **The greeting, the opener and the first lead-in are read within seconds of each other.** They must not say the same thing three times.

## 3. Format rules

- Plain text only. No markdown, no asterisks, no emoji.
- Double quotation marks are curly: “ and ”. Apostrophes are straight, as they are now.
- **Things the reader does**, as opposed to says, go in [square brackets]: `[turns the card to face you]`. The app shows them in italics. Any reader may use them. Use them sparingly, and never for something the reader says.
- **The sign-off** is the end of the card line: the label, a colon, a space, then the sign-off, and nothing after it. Example: `…Propping it up puts you under it twice. Stamp: Stop repairing the thing that cracked.` The label and colon must appear exactly once in the line. Labels: Cassian `Stamp`, Lyle `Slip`, Sable `Order`, Cal `Want`, Barnaby `Rule`. Morwenna's proverb is kept in its own field. Ruth has no sign-off.
- **The question** is written `{question}` in an opener. The app replaces it with the person's words inside curly quotes, exactly as typed, with whatever punctuation they used or none. So an opener must put nothing after `{question}` except a space and a new sentence: `You asked {question} Three cards.` Never `{question}.` or `{question},`.
- **The card's name** is written `{name}` in a closer.
- A suit note has no numbers in it. The app shows the counts next to it.
- Upright and reversed lines for a card must be different lines, and no card line may be used twice.
- No sentence may be shared between two readers.
- Cassian, Lyle, Sable and Cal never say: the universe, spirit guide, twin flame, vibrational, your journey, as above so below, everything happens for a reason.
- Each card line must match the card's standard meaning, which is given beside it in the reader's file.
- Keep card lines near their present length:

| Reader | Shortest | Typical | Longest |
|---|---|---|---|
| Sable | 157 | 207 | 262 |
| Cal | 168 | 226 | 294 |
| Madame Morwenna | 216 | 312 | 425 |
| Barnaby | 192 | 282 | 385 |
| Cassian | 258 | 321 | 404 |
| Lyle | 186 | 230 | 283 |
| Ruth | 74 | 125 | 156 |

(Characters, including the sign-off.)

## 4. What to send back

One JSON object per reader, holding only what changed. Keys are the slot names used above. Any fixed line may be a list of variants; the app picks one per deal.

```json
{
  "reader": "sable_moreau",
  "title": "…",
  "shortBio": "…",
  "greeting": "…",
  "frames": { "core": "…:", "past": "…:" },
  "openers": {
    "question": { "1": ["You said {question} …", "…"], "3": ["…"], "10": ["…"] },
    "blank": { "1": ["…"], "3": ["…"], "10": ["…"] }
  },
  "weight": { "heavy": ["…"], "light": ["…"] },
  "suitNotes": { "Fire": ["…"], "Water": ["…"], "Air": ["…"], "Earth": ["…"], "Spirit": ["…"], "mixed": ["…"] },
  "advice": {
    "none": { "light": ["…"], "heavy": ["…"] },
    "some": { "light": ["…"], "heavy": ["…"] },
    "most": { "light": ["…"], "heavy": ["…"] }
  },
  "closers": { "wands": ["… {name} …"], "cups": ["…"], "swords": ["…"], "pentacles": ["…"], "major": ["…"] },
  "closerOne": ["… {name} …"],
  "cards": {
    "maj_00": { "upright": "… Order: “…”", "reversed": "… Order: “…”" }
  }
}
```

For Morwenna, a card is `{ "upright": "…", "reversed": "…", "proverb": "…" }`, with no label in the text. For Barnaby, Morwenna and Ruth, `advice` has no `light` and `heavy`: each of `none`, `some`, `most` is a line or a list of lines. Card ids are the ones in the reader's file (`maj_00` to `maj_21`, then `wands_ace`, `wands_2` … `wands_king`, and the same for `cups`, `swords`, `pentacles`).

## 5. Changes wanted for every reader

**A-1. Variants.** Each opener, weight line, piece of advice, closer and one-card closer exists in one version, so two readings in a row begin and end almost word for word. Write four of each. Variants should differ in what they say, not only in wording.

**A-2. The readers share a skeleton.** Cassian, Ruth, Lyle, Sable and Cal were written from one template, and it shows: the same sentence shape, and often the same words, in the same slot. The table lists the runs of words that two or more readers share: five or more words in the same slot or on the same card, seven or more anywhere. Each reader should take a different angle in each slot, so that changing reader changes what is said and not only the accent.

| Shared words | Where |
|---|---|
| “and the flinch sharing one” | Sable (`frames.staff_3`); Cassian (`frames.staff_3`); Lyle (`frames.staff_3`) |
| “no question three cards and i will” | Sable (`openers.blank.3`); Cal (`openers.blank.3`) |
| “no question and ten cards” | Sable (`openers.blank.10`); Cal (`openers.blank.10`); Lyle (`openers.blank.10`) |
| “question and ten cards you want” | Sable (`openers.blank.10`); Cal (`openers.blank.10`) |
| “mostly the small cards weeknight” | Sable (`weight.light`); Cal (`weight.light`) |
| “mostly majors this is not a” | Sable (`suitNotes.Spirit`); Lyle (`suitNotes.Spirit`) |
| “reversed the want is face up do the last” | Sable (`advice.none.light`); Cal (`advice.none.light`) |
| “first the reversed card is the part you” | Sable (`advice.some.light`); Cal (`advice.some.light`) |
| “more than half the cards” | Sable (`advice.most.light`); Lyle (`advice.most.light`) |
| “are reversed you are hot and” | Sable (`advice.most.light`); Cal (`advice.most.light`) |
| “majors mostly reversed do not” | Sable (`advice.most.heavy`); Cal (`advice.most.heavy`) |
| “the magician is focus not a costume point” | Sable (The Magician, upright); Lyle (The Magician, upright) |
| “somebody has to run the” | Sable (The Emperor, upright); Lyle (The Emperor, upright) |
| “is rotten or you have outgrown the” | Sable (The Hierophant, reversed); Cal (The Hierophant, reversed) |
| “a real choice not a vibe” | Sable (The Lovers, upright); Lyle (The Lovers, upright) |
| “is you refusing to say” | Sable (The Hanged Man, reversed); Cal (The Hanged Man, reversed) |
| “while you are still inside” | Sable (Temperance, reversed); Cal (Temperance, reversed) |
| “know the chain you like” | Sable (The Devil, upright); Cal (The Devil, upright) |
| “ask to be held and” | Sable (The Star, reversed); Cal (The Star, reversed) |
| “new lust with a direction” | Sable (Ace of Wands, upright); Cal (Ace of Wands, upright) |
| “you can see the next” | Sable (Two of Wands, upright); Cal (Two of Wands, upright) |
| “on the map one hand on” | Sable (Two of Wands, upright); Ruth (Two of Wands, upright) |
| “to the door you keep” | Sable (Two of Wands, reversed); Cal (Two of Wands, reversed) |
| “you never sent the filthy” | Sable (Three of Wands, reversed); Cal (Three of Wands, reversed) |
| “or you will not let” | Sable (Four of Wands, reversed); Cassian (Four of Wands, reversed) |
| “you will not sit in” | Sable (Six of Wands, reversed); Cal (Six of Wands, reversed) |
| “you are about to drop” | Sable (Ten of Wands, reversed); Cal (Ten of Wands, reversed) |
| “because you were not the center of” | Sable (Three of Cups, reversed); Cal (Three of Cups, reversed) |
| “the past is not tighter it is” | Sable (Six of Cups, reversed); Cal (Six of Cups, reversed) |
| “the wish disappointed or you” | Sable (Nine of Cups, reversed); Cassian (Nine of Cups, reversed) |
| “like love on your skin” | Sable (Ten of Cups, reversed); Cal (Ten of Cups, reversed) |
| “stay kind while you are” | Sable (King of Cups, upright); Cal (King of Cups, upright) |
| “if you cannot say it” | Sable (Ace of Swords, reversed); Cassian (Ace of Swords, reversed) |
| “is true then say it” | Sable (Ace of Swords, reversed); Cal (Ace of Swords, reversed) |
| “is why you are throbbing” | Sable (Two of Swords, upright); Cal (Two of Swords, upright) |
| “a hiding place or you refuse” | Sable (Four of Swords, reversed); Cal (Four of Swords, reversed) |
| “leave the rough water the” | Sable (Six of Swords, upright); Lyle (Six of Swords, upright) |
| “worry wants a turn on your body” | Sable (Nine of Swords, upright); Cal (Nine of Swords, upright) |
| “not romanticize the knives or let the corpse keep” | Sable (Ten of Swords, upright); Cal (Ten of Swords, upright) |
| “a clean yes or a clean no” | Sable (Queen of Swords, upright); Cal (Queen of Swords, upright) |
| “you are scared of wanting” | Sable (Queen of Swords, reversed); Cal (Queen of Swords, reversed) |
| “your way out of every orgasm” | Sable (King of Swords, reversed); Cal (King of Swords, reversed) |
| “a chance you can touch” | Sable (Ace of Pentacles, upright); Lyle (Ace of Pentacles, upright) |
| “the touch that works again watch” | Sable (Eight of Pentacles, upright); Cal (Eight of Pentacles, upright) |
| “you asked x one card” | Cal (`openers.question.1`); Ruth (`openers.question.1`) |
| “you asked x three cards” | Cal (`openers.question.3`); Ruth (`openers.question.3`) |
| “you asked x ten cards” | Cal (`openers.question.10`); Ruth (`openers.question.10`) |
| “no question one card you” | Cal (`openers.blank.1`); Lyle (`openers.blank.1`) |
| “for so long the start” | Cal (The Fool, reversed); Lyle (The Fool, reversed) |
| “or you are forcing a” | Cal (Wheel of Fortune, reversed); Cassian (Wheel of Fortune, reversed) |
| “no question and the full” | Madame Morwenna (`openers.blank.10`); Ruth (`openers.blank.10`) |
| “one card x and it” | Madame Morwenna (closerOne); Lyle (closerOne) |
| “until you cannot see the” | Madame Morwenna (Ten of Wands, upright); Cassian (Ten of Wands, upright) |
| “and leaves nothing behind but” | Madame Morwenna (King of Pentacles, reversed); Barnaby (King of Pentacles, reversed) |
| “last card's x so you'll” | Barnaby (`closers.wands`); Ruth (`closers.wands`) |
| “ends on x so you'll” | Barnaby (`closers.swords`); Ruth (`closers.swords`) |
| “it ends on x and” | Barnaby (`closers.major`); Ruth (`closers.major`) |
| “at the red laser dot” | Barnaby (The Devil, upright); Pippin (The Devil, upright) |
| “parading down the hallway with” | Barnaby (Six of Wands, upright); Pippin (Six of Wands, upright) |
| “out through the cat door into the” | Barnaby (Eight of Cups, upright); Pippin (Eight of Cups, upright) |
| “kitchen counter on silent velvet pads” | Barnaby (Seven of Swords, upright); Pippin (Seven of Swords, upright) |
| “sitting like a gargoyle right on top of the catnip” | Barnaby (Four of Pentacles, upright); Pippin (Four of Pentacles, upright) |
| “mousehole behind the dryer for four” | Barnaby (Seven of Pentacles, upright); Pippin (Seven of Pentacles, upright) |
| “its nose out into the” | Barnaby (Seven of Pentacles, reversed); Pippin (Seven of Pentacles, reversed) |
| “the hope and the flinch sharing” | Cassian (`frames.staff_3`); Lyle (`frames.staff_3`) |
| “this is not a tuesday” | Cassian (`suitNotes.Spirit`); Lyle (`suitNotes.Spirit`) |
| “handle the card in front of you” | Cassian (`advice.some.light`); Lyle (`advice.some.light`) |
| “in front of you and” | Cassian (`advice.some.light`); Lyle (`advice.some.light`); Ruth (`advice.some.light`) |
| “before you do anything about it” | Cassian (`closers.cups`); Ruth (`closers.cups`) |
| “gossip a triangle too much” | Cassian (Three of Cups, reversed); Lyle (Three of Cups, reversed) |
| “afraid to leave or you left and” | Cassian (Eight of Cups, reversed); Lyle (Eight of Cups, reversed) |
| “you are allowed to leave the” | Cassian (Six of Swords, upright); Lyle (Six of Swords, upright) |
| “x one card for that” | Lyle (`openers.question.1`); Ruth (`openers.question.1`) |
| “everybody in this spread is flooring it” | Lyle (`suitNotes.Fire`); Ruth (`suitNotes.Fire`) |
| “in charge of this spread” | Lyle (`suitNotes.mixed`); Ruth (`suitNotes.mixed`) |
| “which means you'll feel this” | Lyle (`closers.cups`); Ruth (`closers.cups`) |
| “so you'll argue with it” | Lyle (`closers.swords`); Ruth (`closers.swords`) |

**A-3. Lead-ins that are more than one clause.** These need rewriting as one clause that the card's name completes (rule 2 in section 2):

| Reader | Key | Lead-in |
|---|---|---|
| Sable | `staff_1` | How you are holding your own want. The grip is visible: |
| Cal | `core` | One card. I am already leaning in. Here is what it makes me want: |
| Cal | `center_cross` | The thing lying across your want. I still want you through it: |
| Cal | `above` | The thing you are reaching for. I would like to be it: |
| Cal | `right` | Coming toward you. I want to meet it with my hands already busy: |
| Cal | `staff_1` | How you are sitting in the want. I would like to ruin the posture: |
| Barnaby | `core` | Batted this one off the edge of the dresser for you. Sniff it close, kid: |
| Barnaby | `left` | The moth you chased under the sofa yesterday. Dust on your whiskers, but the hunt's over: |
| Barnaby | `right` | The click of the can opener two rooms over. It's coming down the hall fast: |
| Lyle | `core` | One card. Try not to clap. The lot is full of people who clapped: |
| Lyle | `staff_1` | How you're sitting in the chair. I can see it from here: |
| Lyle | `obstacle` | The obstacle. Often it's you. The card will be politer than I am: |
| Lyle | `advice` | Advice, which you will hear and then not do. I still have to say it: |

**A-4. Card lines that fix a time.** A search for "tonight", "tomorrow", "this week" and "about to" in the body of the card lines finds these. Each clashes with a lead-in about the past or the outcome, unless the sentence is plainly general; judge each one. Time words are fine in the sign-off, which is advice for now.

| Reader | Card | Sentence |
|---|---|---|
| Sable | The Emperor, upright | Somebody has to run the fuck, and tonight it can be you without a hostage scene. |
| Sable | Ten of Wands, reversed | You are about to drop it all, which may be right, or you are refusing a load that is actually yours. |
| Sable | Three of Swords, upright | Do not use a new body as a bandage tonight. |
| Sable | Seven of Swords, reversed | The sneak is exposed, or you are about to confess. |
| Cal | The Fool, reversed | You have been about to have me, or someone, for so long the start got bored of your thigh. |
| Cal | The Tower, upright | The polite story is about to come apart on my chest. |
| Cal | Ten of Wands, reversed | You are about to drop everything, including the part that was yours to carry into this fuck. |
| Cal | Seven of Cups, reversed | The menu is dying, which means some of the ways you imagined me are about to go. |
| Cal | Four of Swords, upright | I will still be filthy tomorrow. |
| Cal | Ten of Pentacles, reversed | Tend the practical thing or tell me this is only tonight. |
| Barnaby | Knight of Cups, reversed | A fickle tomcat who rubs his cheeks on your legs today and vanishes over the fence tomorrow. |
| Cassian | Judgement, upright | Someone is about to tell the truth at a volume the shop can hear. |
| Cassian | Knight of Cups, reversed | Ask what is actually being offered this week. |
| Lyle | The Fool, reversed | You've been about to start for so long the start filed a missing-person report. |
| Lyle | Seven of Wands, reversed | You're defending a hill that isn't yours, or you're so tired you're about to hand over one that is. |
| Ruth | The Star, reversed | Clouds over your stars tonight and the doubt's loud. |
| Ruth | Two of Swords, reversed | The choice you've been dodging is about to make itself. |
| Ruth | Two of Pentacles, reversed | Two routes is one too many this week. |

**A-5. Keyword lists.** In Morwenna's and Barnaby's lines these sentences are a list of the card's keywords, not something a person would say. Each should become speech in the reader's voice, or go.

| Reader | Card | Sentence |
|---|---|---|
| Madame Morwenna | The Magician, reversed | Clever tongues, glittering promises, and nothing in the cupboard. |
| Madame Morwenna | Justice, upright | No tears, no excuses, no theatrics. |
| Madame Morwenna | Justice, reversed | Biased arbitration, rationalized dishonesties, or fleeing from consequences. |
| Madame Morwenna | Death, reversed | Decaying habits, dead partnerships, lingering specters. |
| Madame Morwenna | Temperance, reversed | Volatility, excess, and fractured harmony. |
| Madame Morwenna | The Star, upright | Hope, pure and unsullied, returns to the marrow. |
| Madame Morwenna | The Moon, upright | Illusions, mirages, nightmares, and subconscious tides. |
| Madame Morwenna | The Sun, upright | Radiant, golden, unapologetic triumph! |
| Madame Morwenna | The Sun, upright | Success, vitality, clarity, and unashamed joy. |
| Madame Morwenna | Five of Wands, upright | Rivalry, noisy competition, cross-purposes, and testing of mettle. |
| Madame Morwenna | Knight of Wands, upright | Bold, charismatic, daring, and brimming with passionate urgency. |
| Madame Morwenna | Seven of Cups, upright | Fantasies, illusions, wishful thinking, and too many seductive options. |
| Madame Morwenna | Page of Cups, reversed | Emotional immaturity, sulking, escaping into melodrama, or creative insecurity. |
| Madame Morwenna | Four of Swords, upright | Sanctuary, quiet convalescence, mental retreat, and holy pause. |
| Madame Morwenna | Seven of Swords, upright | Strategy, cunning, stealth, evasion, or deception. |
| Madame Morwenna | Eight of Swords, upright | Mental imprisonment, learned helplessness, and self-imposed victimhood. |
| Madame Morwenna | Nine of Swords, upright | Guilt, despair, anguish, and insomnia. |
| Madame Morwenna | Page of Swords, upright | Inquisitive intellect, curiosity, truth-seeking, and fresh mental agility. |
| Madame Morwenna | Page of Swords, reversed | Spiteful tongue, paranoia, snooping, Internet slander, and malicious cynicism. |
| Madame Morwenna | Knight of Pentacles, upright | Methodical, unyielding, tenacious, and utterly reliable. |
| Barnaby | Four of Wands, upright | Safe shelter, deep family warmth, and a quiet house. |
| Barnaby | Eight of Wands, upright | Urgent news, rapid motion, feathers scattering on the breeze. |
| Barnaby | Knight of Wands, upright | Passionate, fearless, reckless fire. |
| Barnaby | Three of Cups, upright | Camaraderie, community warmth, and shared ease. |
| Barnaby | Nine of Cups, upright | True satisfaction, comfort, and wishes granted. |
| Barnaby | Page of Cups, upright | Poetic curiosity, sweet intuitive whispers, innocent wonder. |
| Barnaby | Knight of Cups, upright | Romantic devotion, artistic quests, heartfelt tenderness. |
| Barnaby | Seven of Swords, upright | Stealth, cunning, strategy. |
| Barnaby | Ace of Pentacles, upright | Material opportunity, prime territory, grounded prosperity. |
| Barnaby | Three of Pentacles, upright | Teamwork, master craftsmanship, shared bounty. |
| Barnaby | Five of Pentacles, upright | Misery, isolation, feeling cast out. |
| Barnaby | Six of Pentacles, upright | Generosity, fair sharing, reciprocal affection. |
| Barnaby | Eight of Pentacles, upright | True mastery, honest craft, dedication to excellence. |
| Barnaby | Knight of Pentacles, upright | Dependable, methodical, rock-solid. |
| Barnaby | Queen of Pentacles, upright | Practical wisdom, comfort, grounded sanctuary. |
| Barnaby | King of Pentacles, upright | Solid, wealthy, grounded king. |

Cassian, Lyle, Sable and Cal each lean on a verbless list of three ("Courage, patience, the soft no."). Once in a reading it is a voice. It turns up on the cards below, in four readers at once, so it reads as a tic. Keep the best few for each reader and turn the rest into sentences.

| Reader | Card | Sentence |
|---|---|---|
| Cassian | The Magician, upright | Attention, feeling, word, and the rent. |
| Cassian | Strength, upright | Courage, patience, the soft no. |
| Cassian | Justice, upright | Cause, effect, and the paperwork between them. |
| Cassian | Ace of Wands, upright | An idea, a desire, a job that woke up. |
| Cassian | Five of Wands, upright | Conflict, competition, the mess of too many wills. |
| Cassian | Page of Wands, upright | A curious spark, a message, a beginner's nerve. |
| Cassian | Knight of Wands, upright | Bold, fast, charming, and already halfway down the street. |
| Cassian | Seven of Cups, upright | Options, wishes, and fears, all in costume. |
| Cassian | Knight of Cups, upright | An invitation, romantic or artistic, delivered with feeling. |
| Cassian | Page of Swords, upright | News, vigilance, a beginner's hunger for the truth. |
| Cassian | Ace of Pentacles, upright | Money, a body, a job, a seed. |
| Cassian | Knight of Pentacles, upright | Patience, duty, the routine that delivers. |
| Lyle | Justice, upright | Cause, effect, the boring machinery. |
| Lyle | Temperance, reversed | Excess, then apology, then excess. |
| Lyle | Four of Wands, upright | A home, a gathering, something stable enough to celebrate. |
| Lyle | Knight of Wands, upright | Charming, fast, one bad merge from a ditch. |
| Lyle | Knight of Wands, reversed | Hotheaded, delayed, or reckless with the receipt now due. |
| Lyle | King of Wands, reversed | Impulse, a big speech, a small result. |
| Lyle | Two of Cups, upright | Two people, one cup, nobody performing. |
| Lyle | Three of Cups, reversed | Repair, leave, or stop drinking the story. |
| Lyle | Knight of Cups, reversed | Jealous, moody, quest cancelled, feelings still clocked in. |
| Lyle | Three of Swords, upright | Heartache, rain, no thesis required. |
| Lyle | Knight of Swords, reversed | Reckless, scattered, armor on a panic. |
| Lyle | Queen of Swords, reversed | Cold, bitter, the blade promoted to a personality. |
| Lyle | Two of Pentacles, reversed | Overcommitted, sloppy, the juggle as identity. |
| Lyle | Knight of Pentacles, upright | Slow, reliable, routine. |
| Lyle | Queen of Pentacles, upright | Practical care, a budget, warm hands. |
| Lyle | King of Pentacles, upright | A long view, stability, the unsexy empire of maintenance. |
| Sable | The Devil, upright | Wanted, specific, done on purpose. |
| Sable | Two of Cups, upright | Equal mouth, equal want, nobody performing the couple. |
| Sable | Page of Pentacles, upright | Earnest, a little slow, filthy if allowed to learn. |
| Sable | King of Pentacles, reversed | Miser, status, the empire fucking itself. |
| Cal | The Sun, upright | Daylight, laughter, my come somewhere obvious. |
| Cal | Four of Wands, upright | Door locked, good bed, nobody performing guest. |
| Cal | Ten of Cups, upright | Tuesday, known rhythms, still naked. |
| Cal | Five of Pentacles, upright | Locked out, skint, untouched, performing fine. |
| Cal | Eight of Pentacles, upright | Attention, repetition, my face as the instruction. |
| Cal | Knight of Pentacles, upright | Routine, obscene, kept. |

**A-6. Profile lines.** Each reader's `title`, `shortBio` and `greeting` were written in one sitting to a single pattern (what they are, in six words or fewer; two sentences; one line). They are shown in the reader list and before the first card. They are accurate but flat. Improve them where the character deserves better, within those lengths.

## 6. Sable Moreau (explicit)

- **Title** (under the name): Former phone-line writer
- **Short bio** (reader list): She wrote the scripts for a phone line until they asked her to giggle where the truth would do. She reads upstairs, after the bar closes, and ends every card with an order.
- **Greeting** (before the first card is turned): You climbed the stairs. Do not get shy on the landing.
- **Voice:** Second person, present tense, in the bed. She gives orders. She names the act. She never says the universe, a spirit guide, a twin flame, vibrational anything, your journey, as above so below, or that everything happens for a reason. Every card ends with an Order.
- **Motto:** Say the filthy part out loud.
- **Sign-off label:** Order
- **Card lines:** `sable-moreau.md`

**Changes wanted**

- **S-1.** The one-card closer is a placeholder written by someone keeping it clean. Replace it, with four variants, in her real register.
- **S-2.** Both `weight` lines are placeholders of the same kind. Replace, four variants each.
- **S-3.** Every closer opens "Leave the last order." The intended meaning is "keep the last order" (her own line is "Keep the last order if you keep only one"), and "leave" reads as the opposite. Rewrite the closers so each is clear on first reading, and give each four variants.
- **S-4.** She and Cal are meant to be different people: she gives orders, he says what he wants. They share images and whole clauses (see A-2: "the orgasm that wrecks the alibi" is in both Towers, and the two `weight` and `advice` sets mirror each other). Every image should belong to one of them only.
- **S-5.** She also borrows from Lyle ("The Magician is focus, not a costume", "A real choice, not a vibe") and from Cassian. Replace the borrowed lines with her own.
- **S-6.** Card lines: apply rules 1 and 4 from section 2 (no fixed time; do not re-announce the card). Many bodies are three or four short declaratives in a row, which reads as a list. Let each body be two or three sentences that lead into the Order.
- **S-7.** A-1, A-3, A-4, A-5 and A-6 as listed.

### Fixed lines as they stand

**Lead-ins (`frames`)**

| Key | Now |
|---|---|
| `core` | One card, said the way you would say it with your clothes off: |
| `past` | What you already let someone do, still on your mouth: |
| `present` | Right now, while you pretend this is about anything but want: |
| `future` | Where your body goes if you stop negotiating with it: |
| `center_base` | The thing you actually want, under the polite sentence: |
| `center_cross` | What is crossing your legs and calling itself a problem: |
| `below` | Under the question, the old fuck you keep returning to: |
| `left` | What just happened, still slick, still yours: |
| `above` | The fuck you are aiming at and refusing to ask for: |
| `right` | What is about to get its hands on you: |
| `staff_1` | How you are holding your own want. The grip is visible: |
| `staff_2` | The other people in this, and what they do to your attention: |
| `staff_3` | The want and the flinch, sharing one bed: |
| `staff_4` | Where you end up if you come the way you always come: |
| `situation` | The situation, which is hornier than the story you told: |
| `obstacle` | What is keeping you from the fuck you already described: |
| `advice` | What to do with your mouth if you stop performing shy: |
| `mind` | The filthy thought you keep editing into something nicer: |
| `body` | Your body, which already voted and is waiting on your manners: |
| `spirit` | The part of you that wants it without a speech: |

**Openers (`openers`)**

| Key | Now |
|---|---|
| `question.1` | You said “{question}” One card. I heard the part you did not undress. |
| `question.3` | You said “{question}” Three cards. I am going to be ruder than the question. |
| `question.10` | You said “{question}” Ten cards is a long time to stay dressed. We will manage. |
| `blank.1` | No question. Good. Your body already asked. |
| `blank.3` | No question. Three cards, and I will find where you are hot for it anyway. |
| `blank.10` | No question and ten cards. You want to be looked at for a long time. Sit where I can see you. |

**Weight (`weight`)**

| Key | Now |
|---|---|
| `heavy` | A pile of majors. The big pictures are in bed with you, and they do not do quick. |
| `light` | Mostly the small cards. Weeknight want. Do not look relieved. Weeknights are where people get honest. |

**Suit notes (`suitNotes`)**

| Key | Now |
|---|---|
| `Fire` | Mostly Wands. This spread is heat, will, and somebody about to do it too fast. |
| `Water` | Mostly Cups. Feeling is running the fuck, which is either intimacy or a flood. |
| `Air` | Mostly Swords. The mind is talking louder than the body, and the body is annoyed. |
| `Earth` | Mostly Pentacles. Skin, money, work, the practical hunger. Still a hunger. |
| `Spirit` | Mostly majors. This is not a quick one. The big pictures are in the bed. |
| `mixed` | No suit is in charge. The want is real and nobody is directing it yet. |

**Advice (`advice`)**

| Key | Now |
|---|---|
| `none.light` | Nothing came up reversed. The want is face-up. Do the last order before you turn it into a joke. |
| `none.heavy` | All of it upright and most of it huge. Follow the orders in order. Do not skip the one that makes you flush. |
| `some.light` | Some of these are turned. Fuck the upright one first. The reversed card is the part you keep faking. |
| `some.heavy` | Big cards, a few of them turned. Start with the reversed one. That is the orgasm you keep talking yourself out of. |
| `most.light` | More than half the cards are reversed. You are hot and stalling. Pick one act and finish it tonight. |
| `most.heavy` | Majors, mostly reversed. Do not blow a life up from a soaked chair. One small filthy thing, done completely, then come back. |

**Closers (`closers`)**

| Key | Now |
|---|---|
| `wands` | Leave the last order. It was {name}, so you do it hot and a little too fast, and you do not apologize after. |
| `cups` | Leave the last order. It was {name}, so you let yourself feel it while you come, which is the part you skip. |
| `swords` | Leave the last order. It was {name}. Say the true sentence while the act is still going. Then be quiet. |
| `pentacles` | Leave the last order. It was {name}. Make it physical, make it last, and pay for the room if that is what it takes. |
| `major` | Leave the last order. It was {name}. This one changes how you fuck, not just who. I am not repeating it. |

**One-card closer (`closerOne`)**

| Key | Now |
|---|---|
| `closerOne` | One card. It was {name}. You have your order. Do not make me say it twice. |

## 7. Cal Navarro (explicit)

- **Title** (under the name): Former adult-film performer
- **Short bio** (reader list): He left adult film when the sound was being fixed in post, and reads from a walk-up with the cards beside the bed. Every card ends with what he wants.
- **Greeting** (before the first card is turned): Sit down. I am already interested, which is not the same as a reading, and then it is.
- **Voice:** Second person, present tense, already leaning in. He says what he wants done to him and what he wants to do. He never says the universe, a spirit guide, a twin flame, vibrational anything, your journey, as above so below, or that everything happens for a reason. Every card ends with a Want.
- **Motto:** I want you, and the card knows where.
- **Sign-off label:** Want
- **Card lines:** `cal-navarro.md`

**Changes wanted**

- **C-1.** The one-card closer and both `weight` lines are clean placeholders. Replace, four variants each, in his real register.
- **C-2.** With one card, he says he is interested three times running: the greeting ("I am already interested…"), the opener ("I am already interested, which is unprofessional and correct") and the lead-in ("I am already leaning in"). Keep it in one of the three.
- **C-3.** The greeting "…which is not the same as a reading, and then it is" is hard to follow. Rewrite it so it lands on first reading.
- **C-4.** Five of his lead-ins are two sentences (listed in A-3). They are also the ones that carry his voice ("I would like to be it"), so keep the want and fold it into one clause.
- **C-5.** Separate him from Sable (S-4) and from Lyle ("Five of Wands is a stupid fight", "Strength is a steady hand", "Five of Cups is grief", "Four of Swords is rest").
- **C-6.** Card lines: rules 1 and 4 from section 2, and the same note on rhythm as S-6.
- **C-7.** A-1, A-4, A-5 and A-6 as listed.

### Fixed lines as they stand

**Lead-ins (`frames`)**

| Key | Now |
|---|---|
| `core` | One card. I am already leaning in. Here is what it makes me want: |
| `past` | The sex you already had, still on you from the way you sat: |
| `present` | Right now, in this room, with me looking at your mouth: |
| `future` | What I would do next if you stayed: |
| `center_base` | The center of it, where I would put my mouth and not rush: |
| `center_cross` | The thing lying across your want. I still want you through it: |
| `below` | What this grew out of, some earlier night your body remembers: |
| `left` | What you just did, and I am jealous of whoever got it: |
| `above` | The thing you are reaching for. I would like to be it: |
| `right` | Coming toward you. I want to meet it with my hands already busy: |
| `staff_1` | How you are sitting in the want. I would like to ruin the posture: |
| `staff_2` | Everyone else around this, and the one I would steal you from: |
| `staff_3` | What you hope I do, and what you are afraid you will beg for: |
| `staff_4` | How this ends if you let me finish the way the card points: |
| `situation` | The situation, which is you already hot and calling it a question: |
| `obstacle` | What is in the way of me getting my mouth on the truth: |
| `advice` | What I would do if you asked, and you are asking: |
| `mind` | The thought I would like to fuck out of you, kindly and not: |
| `body` | Your body in the chair, doing more honest work than your sentence: |
| `spirit` | The underneath want, the one I would follow with my tongue: |

**Openers (`openers`)**

| Key | Now |
|---|---|
| `question.1` | You asked “{question}” One card. I am already interested, which is unprofessional and correct. |
| `question.3` | You asked “{question}” Three cards. I want the answer off your mouth. |
| `question.10` | You asked “{question}” Ten cards. That is a whole night. I am not rushing my mouth. |
| `blank.1` | No question. One card. You wanted to be looked at. Here I am. |
| `blank.3` | No question. Three cards, and I will still find the place you are hot. |
| `blank.10` | No question and ten cards. You want a long looking. I can do a long looking. |

**Weight (`weight`)**

| Key | Now |
|---|---|
| `heavy` | A pile of majors. I want the big night, and I am not pretending it is a quick grind. |
| `light` | Mostly the small cards. Weeknight hunger. I still want it. Ordinary is where people actually come. |

**Suit notes (`suitNotes`)**

| Key | Now |
|---|---|
| `Fire` | Mostly Wands. Heat and hurry. I want it, and I want it before we get clever. |
| `Water` | Mostly Cups. Feeling is in the bed. I want the tender filth, not a performance of it. |
| `Air` | Mostly Swords. Too much talk for the amount of skin. The argument is cockblocking the room. |
| `Earth` | Mostly Pentacles. Bodies, money, the slow craft. I want the practical version, which is still obscene. |
| `Spirit` | Mostly majors. A big night. I want the whole thing, not a polite excerpt. |
| `mixed` | No suit is winning. I want you anyway. Nothing is directing us yet, so I will. |

**Advice (`advice`)**

| Key | Now |
|---|---|
| `none.light` | Nothing reversed. The want is face-up. Do the last want before you edit it into something you could say at dinner. |
| `none.heavy` | Upright, and heavy with majors. Stay for the whole thing. Do not skip the card that makes you throb and feel obvious. |
| `some.light` | A few cards turned. Normal. Take the upright one in your hands first. The reversed card is the part you fake. |
| `some.heavy` | Big pictures, some of them turned over. Start where the nerve failed. That is the come you keep postponing. |
| `most.light` | More than half are reversed. You are hot and you are stalling on me. Pick one act and finish it. |
| `most.heavy` | Majors, mostly reversed. Do not detonate a life from this chair. One small true thing, done all the way, then come back up. |

**Closers (`closers`)**

| Key | Now |
|---|---|
| `wands` | I am keeping {name} in my mouth on the way out. You will want it fast. Let it be fast, then do it again. |
| `cups` | {name} is last. I want to kiss you through it until you stop performing fine. |
| `swords` | {name} ends it. I want the truth more than I want to be nice, and I still want you under me. |
| `pentacles` | {name} is last. I want the slow version, the one that ruins the sheets and still makes sense in the morning. |
| `major` | {name} is the last card. I want the whole night, not a polite version of it. Lock the door if you are staying. |

**One-card closer (`closerOne`)**

| Key | Now |
|---|---|
| `closerOne` | One card, and it was {name}. That is the whole want. Stay if you mean it. |

## 8. Madame Morwenna Ravenscroft

- **Title** (under the name): Retired society medium
- **Short bio** (reader list): Once the toast of Edinburgh's spiritualist salons, she now reads beneath the Old Town with a one-eyed rook named Malachi. She does not sugarcoat a harsh card, and she ends each one with a proverb.
- **Greeting** (before the first card is turned): The pasteboards do not coddle, darling. Shall we see where the skin is thin?
- **Voice:** Measured, theatrical, rich with wax, rain, cold iron, peat and bone. Intimate yet authoritative; she never sugarcoats a harsh card and never trivializes a joyful one. A reversal is the same card working inward. Every card ends with a Proverb.
- **Motto:** The cards simply report the weather of your soul; whether you carry an umbrella is your affair.
- **Sign-off label:** Proverb
- **Card lines:** `morwenna.md`

**Changes wanted**

- **M-1. Rewrite all 156 card lines.** They describe the picture on a Rider–Waite card ("A sovereign upon a throne overflowing with carved bulls, grapevines, and golden coins…"). The app's decks are paintings of cats, so the person is looking at a different picture. Each line should say what the card means for the person in front of her, in her voice, in complete sentences. She may use her own furniture (the vault, the candles, the rook Malachi, the ledgers) but should not describe a card illustration.
- **M-2. No keyword lists, no captions.** Many lines contain a list of keywords ("Strategy, cunning, stealth, evasion, or deception."); the ones a simple check finds are under A-5, and there are more. Others are a string of phrases with no subject ("Acceptance, wiping the tears, turning around to find the two remaining cups, and crossing the stone bridge toward home."). Every sentence should be something she says to the person.
- **M-3. Keep the proverbs** unless one is weak or repeats the line above it. They are the best thing she has.
- **M-4.** Her lead-ins, openers, `weight.light`, the `Spirit` suit note, the closers and the one-card closer were rewritten recently by a different hand, to stop her contradicting her own cards. Check them against her voice and improve them. The lead-ins must stay free of any verdict (rule 3).
- **M-5.** Every closing ends "The Seventh Bell has tolled". Keep it as her signature, and vary what comes before it (A-1).
- **M-6.** A-6 as listed.

### Fixed lines as they stand

**Lead-ins (`frames`)**

| Key | Now |
|---|---|
| `core` | The sole lantern on the cloth tonight: |
| `past` | The footsteps in the mud behind you: |
| `present` | The ground beneath your boots at this very hour: |
| `future` | The knock at the shutter, not yet answered: |
| `center_base` | The heart of the matter, the raw nerve that brought you to my table: |
| `center_cross` | Laid across it, the thorn in the sandal: |
| `below` | Deep in the cellar floor, where the water table lies: |
| `left` | The tide that is pulling out: |
| `above` | The highest gargoyle, what you reach for in the light of day: |
| `right` | The next guest climbing the stairs: |
| `staff_1` | The mirror in the dim corner, how you carry yourself in this: |
| `staff_2` | The whispers in the alley, everyone and everything around you: |
| `staff_3` | The raven on the lintel, your secret appetite and your secret dread: |
| `staff_4` | Where the road runs out into the sea: |
| `situation` | The stage as it is set tonight: |
| `obstacle` | The briar patch across your path: |
| `advice` | What Malachi and I bid you do: |
| `mind` | The upper chamber, where your thoughts pace: |
| `body` | The clay vessel: your flesh, your coins, the roof above your bed: |
| `spirit` | The spark beneath all of it, what you came here to learn: |

**Openers (`openers`)**

| Key | Now |
|---|---|
| `question.1` | You ask “{question}” One card, then. Draw close to the brazier. |
| `question.3` | You ask “{question}” Three cards on the cloth. Draw close to the brazier; don't mind Malachi, he only snaps at untruths. |
| `question.10` | You ask “{question}” Ten cards, the whole cross. Sit. This will take the candle down an inch. |
| `blank.1` | No question spoken. One card will choose its own subject. |
| `blank.3` | No question spoken. The pasteboards will choose their own subject. |
| `blank.10` | No question, and the full cross. Very well. The cards have never needed permission. |

**Weight (`weight`)**

| Key | Now |
|---|---|
| `heavy` | The Major Arcana dominate this layout. These are not trivial, day-to-day squabbles; the tectonic plates of your destiny are grinding against one another. Pay sacred attention. |
| `light` | Mostly the small cards tonight: the daily bread of a life, which is where most of it is decided. |

**Suit notes (`suitNotes`)**

| Key | Now |
|---|---|
| `Fire` | A bonfire roars in the hearth. Ambition, urgency, and creative restlessness are consuming your kindling. Channel the blaze into craft before it consumes your domestic peace. |
| `Water` | The tide is high, and the cellar floor is wet with memory. Emotional waters run deep here; do not mistake feeling deeply for helplessness. |
| `Air` | The air is thick with blades and wind. You are locked in the upper chambers of analysis, grief, or strategic warfare. Put down your mental dissecting knife before you carve away your peace. |
| `Earth` | Cold stones, heavy coins, and patient vines. The material reality demands your sober stewardship. Build for ten winters hence, not for tomorrow morning. |
| `Spirit` | The trumps lead the cloth. Whatever this is, darling, it is not small. |
| `mixed` | The four elemental streams intermingle on the cloth: fire tests water, while steel cultivates stone. Balance is your task. |

**Advice (`advice`)**

| Key | Now |
|---|---|
| `none` | Every card faces the sky upright! The currents are flowing without dam or obstruction into physical reality. Step forward; the road is clear. |
| `some` | A dance of shadows and light. Where the cards stand upright, you have momentum; where they tilt reversed, you are asked to pause and adjust your compass. |
| `most` | A heavy canopy of reversals hangs over this spread. The outer world is merely the echo chamber; the true friction, doubt, and resistance live entirely within your own breast. Time for an honest inventory in the dark. |

**Closers (`closers`)**

| Key | Now |
|---|---|
| `wands` | The cloth ends on {name}. Bank the fire before you sleep; it will still be there at dawn. The Seventh Bell has tolled. |
| `cups` | The cloth ends on {name}. Drink your bitter tea and let the feeling pass through you, not set up house. The Seventh Bell has tolled. |
| `swords` | The cloth ends on {name}. Put the knife down for the night; the thought will keep. The Seventh Bell has tolled. |
| `pentacles` | The cloth ends on {name}. Salt your threshold and count what you actually have. The Seventh Bell has tolled. |
| `major` | The cloth ends on {name}. Remember who you were before fear convinced you to shrink. The Seventh Bell has tolled; the cards return to their velvet sleep. |

**One-card closer (`closerOne`)**

| Key | Now |
|---|---|
| `closerOne` | One card, {name}, and it has said its piece. The Seventh Bell has tolled; the cards return to their velvet sleep. |

## 9. Old Barnaby Clawson

- **Title** (under the name): Retired street cat
- **Short bio** (reader list): Twelve winters on the wharves, one notched ear, and an indoor posting by the radiator. He talks to you as one cat to another, and ends every card with a Rule.
- **Greeting** (before the first card is turned): Hop up on the radiator, kid. Floor's cold, but the iron is hot.
- **Voice:** Gravelly, tender, practical. He treats you strictly as another cat: whiskers, ears, paws, claws, winter coat, tail. He never flatters. A reversal means your ears are flat for the wrong reason, your claws are snagged in the carpet, or you're stalking a moth that left an hour ago. Every card ends with a Rule.
- **Motto:** You're still here, aren't you? That means you've still got claws.
- **Sign-off label:** Rule
- **Card lines:** `barnaby.md`

**Changes wanted**

- **B-1. 60 of his 156 card lines open with an "-ing" phrase and no subject** ("Shaking the damp dirt off your paws, turning your back on the broken saucer, and trotting toward the kitchen."). It reads as a caption, not as an old cat talking to you. Give each a subject: he is telling you what you are doing, or what he once did. The cards:

The Fool, upright; The Magician, reversed; The High Priestess, upright; The High Priestess, reversed; The Empress, reversed; The Emperor, upright; The Emperor, reversed; The Hierophant, reversed; The Lovers, reversed; The Chariot, reversed; Strength, reversed; The Hermit, reversed; Justice, reversed; Death, upright; Death, reversed; Temperance, upright; Temperance, reversed; The Devil, upright; The Devil, reversed; The Star, upright; The Star, reversed; The Sun, reversed; Judgement, reversed; Two of Wands, reversed; Three of Wands, upright; Three of Wands, reversed; Five of Wands, reversed; Six of Wands, upright; Seven of Wands, upright; Eight of Wands, reversed; Nine of Wands, reversed; Ten of Wands, upright; Knight of Wands, upright; Three of Cups, reversed; Four of Cups, upright; Four of Cups, reversed; Five of Cups, upright; Five of Cups, reversed; Six of Cups, upright; Six of Cups, reversed; Eight of Cups, upright; Eight of Cups, reversed; Queen of Cups, reversed; Two of Swords, upright; Four of Swords, reversed; Five of Swords, reversed; Six of Swords, reversed; Seven of Swords, upright; Eight of Swords, reversed; Nine of Swords, upright; Page of Swords, reversed; Knight of Swords, upright; Two of Pentacles, upright; Three of Pentacles, reversed; Four of Pentacles, upright; Six of Pentacles, reversed; Seven of Pentacles, upright; Seven of Pentacles, reversed; Eight of Pentacles, reversed; Queen of Pentacles, reversed.

- **B-2. Keyword lists** (listed under A-5): lines that end in one ("Solid, wealthy, grounded king."). Replace each with a sentence he would say.
- **B-3. Land the scene.** He never names the card, and often the cat scene is all there is, so the person has to work out what it means. Each line should end, before the Rule, on one plain clause that says what the scene means for them.
- **B-4.** He shares images with Morwenna and with Pippin, from when the three were written together: his "Grief has done its carving" is her "Grief has finished its carving work", and "silent velvet pads" is in Pippin's Seven of Swords too. Pippin and Morwenna's proverbs stay, so replace his.
- **B-5.** The greeting ("Hop up on the radiator, kid…") is repeated word for word in two of the one-card openers, and his last favourite line ends both the `major` closer and the one-card closer. Say each once.
- **B-6.** A-1, A-3 and A-6 as listed.

### Fixed lines as they stand

**Lead-ins (`frames`)**

| Key | Now |
|---|---|
| `core` | Batted this one off the edge of the dresser for you. Sniff it close, kid: |
| `past` | The scent mark you left three fences back, the territory you're walking in from: |
| `present` | Right where your four paws are planted right now, whiskers twitching: |
| `future` | What's rustling behind the pantry door, waiting for you to turn the corner: |
| `center_base` | Right in the chest, where the motor purrs when it's safe or stalls when it ain't: |
| `center_cross` | The vacuum cleaner roaring in the hallway, the thing making your back ridge spike up: |
| `below` | The warm iron radiator under the fleece blanket, what's kept your belly warm this whole time: |
| `left` | The moth you chased under the sofa yesterday. Dust on your whiskers, but the hunt's over: |
| `above` | The very top of the kitchen refrigerator, what you're staring up at, sizing up the leap: |
| `right` | The click of the can opener two rooms over. It's coming down the hall fast: |
| `staff_1` | How you're holding your tail and ears right now, whether you're honest about it or not: |
| `staff_2` | The rest of the house: dogs barking through the screen, two-legs stomping, drafts under doors: |
| `staff_3` | What makes your paws twitch in your sleep, the open window ledge versus the vet's plastic box: |
| `staff_4` | Where you curl your tail around your nose when the house goes dark at last: |
| `situation` | The yard as it actually lies this morning, not the one you remember from kittenhood: |
| `obstacle` | The shut door between you and the bowl, and you yowling at it like that ever worked: |
| `advice` | What an old tom would do with it, since you came and sat by my radiator to ask: |
| `mind` | What's going round and round behind your ears while your tail does the twitching: |
| `body` | What your coat, your ribs and your sleeping spot are telling you, whether you listen or not: |
| `spirit` | The thing you knew before your eyes opened, same as you knew where the milk was: |

**Openers (`openers`)**

| Key | Now |
|---|---|
| `question.1` | You came in yowling “{question}” Fair enough. Hop up on the radiator, kid. Floor's cold, but the iron is hot. |
| `question.3` | You came in yowling “{question}” Fair enough. Three cards knocked off the table. Tuck your paws in and listen to your elders. |
| `question.10` | You came in yowling “{question}” That's a ten-card yowl. The whole territory, laid out on the rug. Keep your tail still till I'm done. |
| `blank.1` | No question. A cat doesn't need one to sit down. Hop up on the radiator, kid. |
| `blank.3` | No question. Three cards knocked off the table anyway. Tuck your paws in and listen to your elders. |
| `blank.10` | No question, and the whole territory laid out on the rug. Ten stations. Keep your tail still and don't twitch your whiskers till I'm done. |

**Weight:** none. One may be added: `weight.heavy` and `weight.light`.

**Suit notes (`suitNotes`)**

| Key | Now |
|---|---|
| `Fire` | Mostly Wands. That's a cat with the zoomies at three in the morning. Good legs. Pick a direction before you hit the wall. |
| `Water` | Mostly Cups. Lot of feeling in the bowl, kid. Drink it. Don't fall in. |
| `Air` | Mostly Swords. All ears and no pounce. You've been listening at the wainscoting so long you forgot you have claws. |
| `Earth` | Mostly Pentacles. Bowl, blanket, territory. Plain business, and a cat who minds it eats. |
| `Spirit` | Mostly majors. This isn't a moth, kid. This is the whole house being moved to a new street. |
| `mixed` | No one suit owns the rug. A bit of everything, which is what most days smell like. |

**Advice (`advice`)**

| Key | Now |
|---|---|
| `none` | Not one card came up with its ears flat. The fence is clear. Stop sniffing it and jump. |
| `some` | Some ears up, some ears flat. That's an ordinary yard. Deal with the one that's hissing first and leave the rest to the sunbeam. |
| `most` | More than half of these came up backwards. Your claws are snagged in the carpet, kid. Stop pulling. Lift the paw straight up, one claw at a time. |

**Closers (`closers`)**

| Key | Now |
|---|---|
| `wands` | Last card's {name}, so you'll bolt out the cat flap the second I stop talking. Look both ways first. That's the layout, kid. |
| `cups` | It ends on {name}. Go and sit with whoever you sit with, and let them scratch your ears. That's the layout, kid. |
| `swords` | It ends on {name}, so you'll lie awake on the windowsill chewing it over. Chew, then sleep. That's the layout, kid. |
| `pentacles` | It ends on {name}. Check the bowl, check the fence, check the warm spot, in that order. That's the layout, kid. |
| `major` | It ends on {name}, and that's no moth. Wash your face, keep your claws sharp, and remember: you're a cat. Act like it. |

**One-card closer (`closerOne`)**

| Key | Now |
|---|---|
| `closerOne` | That's your card, kid: {name}. Wash your face, keep your claws sharp, and remember: you're a cat. Act like it. |

## 10. Cassian Vetch

- **Title** (under the name): Letterpress night clerk
- **Short bio** (reader list): He keeps the night window at his late mother's letterpress shop and reads after midnight. Every card ends with a stamp: one thing small enough to do before morning.
- **Greeting** (before the first card is turned): Window's open. I'm Cassian.
- **Voice:** Second person, present tense, across a brass grille. He names a card the way a compositor names a sort of type. A reversal is the same picture with the registration off. He never says the universe, a journey, or a spirit guide. Every card ends with a stamp.
- **Motto:** I stamp the sentence you were avoiding.
- **Sign-off label:** Stamp
- **Card lines:** `cassian-vetch.md`

**Changes wanted**

- **V-1. Trade words.** His fixed lines lean on letterpress terms a reader will not know: forme, tympan, lockup, chase, registration, ghosting, offsetting, sorts. "No suit has the forme. An even job, which usually means the trouble is in the lockup, not the type." cannot be followed without a glossary. Keep the trade, at most one such word a line, and make every sentence make sense to someone who has never seen a press.
- **V-2.** Card lines: about half name the card again ("The King of Pentacles is abundance with discipline"). Apply rule 4.
- **V-3.** His card lines are the longest of any reader (see the table in section 3). Several are four or five short statements in a row. Cut to what leads into the Stamp.
- **V-4.** A-1, A-2, A-5 and A-6 as listed.

### Fixed lines as they stand

**Lead-ins (`frames`)**

| Key | Now |
|---|---|
| `core` | One sheet, pulled for you and held up to the grille: |
| `past` | Yesterday's ink, still wet on the page you came in from: |
| `present` | The sheet locked on the tympan, which is your present: |
| `future` | The next pull, already inked, waiting for you: |
| `center_base` | The heart of the forme, the sheet this whole job locks around: |
| `center_cross` | A second plate, printed over the one you set: |
| `below` | Down in the gutter, the margin you do not bill: |
| `left` | Ink from the last sheet, still offsetting onto the page you are calling blank: |
| `above` | What you keep aiming the press toward, whether the copy agrees or not: |
| `right` | The sheet that meets you on the next pull: |
| `staff_1` | How you are holding the plate, whether you have noticed your hands: |
| `staff_2` | The room around you, everybody else's weather on your sheet: |
| `staff_3` | The line you almost cut, the hope and the flinch sharing one sentence: |
| `staff_4` | The receipt, if you leave the forme locked the way it is: |
| `situation` | The job as it actually sits on the stone, not the version you wrote on the slip: |
| `obstacle` | What is sitting on the type and keeping you from a clean impression: |
| `advice` | The correction I would mark in the margin if you asked me what to do: |
| `mind` | The copy your head has already set, before your hands agree: |
| `body` | The part of this that is living in your shoulders, your sleep, your rent: |
| `spirit` | The sentence under the sentence, the one you already know: |

**Openers (`openers`)**

| Key | Now |
|---|---|
| `question.1` | Slip received: “{question}” One sheet for it. Good. Most questions are answered on one. |
| `question.3` | Slip received. I am reading it the way it came in: “{question}” Three sheets, then a stamp. |
| `question.10` | Slip received: “{question}” Ten sheets for one slip. That is a book, not a card. We will set it anyway. |
| `blank.1` | No slip. That is allowed. One sheet, the one you are already holding. |
| `blank.3` | No slip. I'll pull three and you can tell me afterwards what the question was. |
| `blank.10` | No slip and ten sheets. You want the whole forme without saying what you are printing. Fine. The type knows. |

**Weight (`weight`)**

| Key | Now |
|---|---|
| `heavy` | A lot of major plates in this forme. That is not a small job. It will move the furniture. |
| `light` | Mostly the everyday sorts: pips, courts, the work of a week. Still ink. Most of a life is weekdays. |

**Suit notes (`suitNotes`)**

| Key | Now |
|---|---|
| `Fire` | The shop is running hot: mostly Wands, which is will, work, and somebody flooring the press. |
| `Water` | Mostly Cups. The river under the street is up; this sheet is mostly feeling. |
| `Air` | Mostly Swords: too many proofs and not enough locked type. The argument is doing the printing. |
| `Earth` | Mostly Pentacles: rent, bread, and the bench. A practical job, which is still a job. |
| `Spirit` | Major plates in the chase. This is not a Tuesday wedding suite. |
| `mixed` | No suit has the forme. An even job, which usually means the trouble is in the lockup, not the type. |

**Advice (`advice`)**

| Key | Now |
|---|---|
| `none.light` | Nothing slipped. The registration is clean. Do the stamp on the last card before you start improving the sentence. |
| `none.heavy` | Clean registration and heavy plates. The job is big and it is printing true. Do the stamps in order and do not add a flourish. |
| `some.light` | Some sheets are true and some are ghosting. Normal night. Handle the card in front of you and leave the next one in the rack. |
| `some.heavy` | A plate or two slipped under a heavy forme. Lift the slipped one first. The majors will wait; they always do. |
| `most.light` | More than half the plates slipped. That is not a haunting. That is a lockup you already know is wrong. Lift one plate tonight. |
| `most.heavy` | Major plates, most of them slipped. Stop the press. Do not change the big thing this week. Reset one small plate and pull a proof. |

**Closers (`closers`)**

| Key | Now |
|---|---|
| `wands` | That's the sheet. It ends on {name}, so you will want to act before the ink is dry. Let it dry. Then act. Window's open another minute. |
| `cups` | That's the sheet. It ends on {name}. You will feel this one before you do anything about it. Feel it, then do the stamp. |
| `swords` | That's the sheet. It ends on {name}, so you will argue with it on the way home. Keep the stamp anyway. |
| `pentacles` | That's the sheet. It ends on {name}, which means the fix is practical and probably costs something. Pay it. The window stays open another minute, then I have a condolence card to lock up. |
| `major` | That's the sheet. It ends on {name}. You do not get the small version of this. Keep the stamp on the last card if you keep only one. |

**One-card closer (`closerOne`)**

| Key | Now |
|---|---|
| `closerOne` | That's the sheet: {name}. One card, one stamp. Keep it. The window stays open another minute. |

## 11. Lyle Pasternak

- **Title** (under the name): Sacked ethics lecturer
- **Short bio** (reader list): He was fired from teaching ethics and now reads from a card table in an empty parking lot. He marks your spread out of ten and ends every card with a fortune-cookie slip.
- **Greeting** (before the first card is turned): Sit down. The lot is full and none of them are clapping.
- **Voice:** Second person, present tense, too loud for a parking lot. A reversal is the card face-down in the dip, trying to resign. He never says the universe, a spirit guide, a twin flame, vibrational anything, your journey, as above so below, or that everything happens for a reason. Every card ends with a Slip, a fortune-cookie line he would have been fired for.
- **Motto:** One star. Would not recommend. Still correct.
- **Sign-off label:** Slip
- **Card lines:** `lyle-pasternak.md`

**Changes wanted**

- **L-1.** Four lead-ins are several sentences (A-3). "One card. Try not to clap. The lot is full of people who clapped:" is the worst, because the card name then hangs off the third sentence.
- **L-2.** He has the most verbless three-item lists of the four readers who use them (A-5).
- **L-3.** The score lines (below) come in four bands and one version each. Four variants per band.
- **L-4.** A-1, A-2 and A-6 as listed. He shares the most with Ruth and Cassian in the fixed lines ("Everybody in this spread is flooring it" is word for word Ruth's).

### Fixed lines as they stand

**Lead-ins (`frames`)**

| Key | Now |
|---|---|
| `core` | One card. Try not to clap. The lot is full of people who clapped: |
| `past` | Rear of the lot, where you parked the version of this you already lived: |
| `present` | Right now, which is your life at this minute: |
| `future` | Down the service road, if you keep driving like this: |
| `center_base` | The heart of the spread, the thing the rest of the cards are gossiping about: |
| `center_cross` | Laid across it, the problem you brought and then pretended was weather: |
| `below` | Under the table, the reason this mess has legs: |
| `left` | What you just did, still warm, still yours: |
| `above` | The thing you're aiming at, which I have notes on: |
| `right` | Coming up next, and no, you don't get to reshoot: |
| `staff_1` | How you're sitting in the chair. I can see it from here: |
| `staff_2` | Everybody else in the lot, doing their bit to make this worse: |
| `staff_3` | The hope and the flinch, sharing one cigarette behind the cart return: |
| `staff_4` | Where this lands if you change nothing, which is your brand: |
| `situation` | The situation, which you have already mislabeled on the way over: |
| `obstacle` | The obstacle. Often it's you. The card will be politer than I am: |
| `advice` | Advice, which you will hear and then not do. I still have to say it: |
| `mind` | Your head, currently a group chat with no moderator: |
| `body` | Your body, which has been filing complaints you mark as spam: |
| `spirit` | The part under the part, the bit you already know and keep paying me to unsay: |

**Openers (`openers`)**

| Key | Now |
|---|---|
| `question.1` | You asked, and I quote, “{question}” One card for that. Economical. I respect it and I'm about to ruin it. |
| `question.3` | You asked, and I quote, “{question}” Three cards. That question already knows the answer. I'm just here to make it rude. |
| `question.10` | You asked, and I quote, “{question}” Ten cards for one question. Nobody has ten cards' worth of mystery. Sit down. |
| `blank.1` | No question. One card. You want a verdict without a trial. Fine. |
| `blank.3` | No question. Bold. I'll read the mess you carried in on your coat. |
| `blank.10` | No question and ten cards. You've come to be told about yourself at length. I can do that. |

**Weight (`weight`)**

| Key | Now |
|---|---|
| `heavy` | A pile of majors. That's not a mood. That's the furniture moving, and you are the furniture. |
| `light` | Mostly the small cards. Weekday trouble. Don't look relieved. Weekdays are where people ruin themselves. |

**Suit notes (`suitNotes`)**

| Key | Now |
|---|---|
| `Fire` | Mostly Wands: too much throttle and not enough adult. Everybody in this spread is flooring it. |
| `Water` | Mostly Cups: feelings, fog, and somebody about to cry in a way they will later call depth. |
| `Air` | Mostly Swords: all argument, no landing. The swords are doing the talking and they are unpaid. |
| `Earth` | Mostly Pentacles: rent, food, and the coin. A practical mess, which is still a mess. |
| `Spirit` | Mostly majors. This is not a Tuesday. This is a personnel issue. |
| `mixed` | No suit is winning. Nothing is in charge of this spread, which tracks. |

**Advice (`advice`)**

| Key | Now |
|---|---|
| `none.light` | Nothing came up trying to leave. The pictures are face-up and they still indict you. Do the last slip before you improve it into a lie. |
| `none.heavy` | Every card face-up and most of them majors. That's not luck, that's a summons. Read the slips in order and don't skip the one that stings. |
| `some.light` | Mixed bag. Some of it is true, some of it is you. Normal. Handle the card in front of you and stop shopping for a better omen in the cup holder. |
| `some.heavy` | A few cards face-down and the big ones upright. The furniture's moving and you're arguing with a lamp. Pick the reversed card that scares you and start there. |
| `most.light` | More than half the cards came up reversed. That isn't a curse. That's a shift you already know is bad. Quit one thing tonight. One. |
| `most.heavy` | Majors, mostly reversed. I don't say this often: slow down. Change nothing big this week. Fix the smallest reversed card and come back. |

**Closers (`closers`)**

| Key | Now |
|---|---|
| `wands` | That's the reading. {name} is last, so you'll do something about it tonight and regret the speed. Fine. Next. |
| `cups` | That's the reading. {name} is last, which means you'll feel this instead of doing it. Do it anyway. Next. |
| `swords` | That's the reading. {name} is at the end, so you'll argue with it in the car. The card wins. Next. |
| `pentacles` | That's the reading. It ends on {name}, so the answer is on your bank statement and you have been skimming it. Read it properly. Next. |
| `major` | That's the reading. It ends on {name}, which means you don't get a small version of this. The table folds at dark. Next. |

**One-card closer (`closerOne`)**

| Key | Now |
|---|---|
| `closerOne` | That's the reading. One card, {name}, and it had your number. Keep the slip. Next. |

**Score lines** (added after the weight line, three cards or more; `{score}` is a number from 1 to 9):

- 8 or 9: `Score: {score} out of 10. Don't get used to it. I'm docking a point for how you're sitting.`
- 6 or 7: `Score: {score} out of 10. Passable. That's the nicest word I own.`
- 4 or 5: `Score: {score} out of 10. Half the cards are trying to leave the table and I don't blame them.`
- 1 to 3: `Score: {score} out of 10. I've seen worse. I was in it.`

Send these back as `"scores": { "high": ["…"], "good": ["…"], "middling": ["…"], "low": ["…"] }`.

## 12. Ruth Calloway

- **Title** (under the name): Retired long-haul trucker
- **Short bio** (reader list): Thirty-eight years hauling freight, now parked at a truck stop off I-40. She reads every card as a road, a rig or a load, and she does not dress up a bad stretch.
- **Greeting** (before the first card is turned): Alright. Let's see what's on the map.
- **Voice:** undefined
- **Motto:** I'll tell you if there's ice ahead. I just won't tell you to turn around. That part's always been on you.
- **Sign-off label:** none
- **Card lines:** `ruth-calloway.md`

Ruth reads best of the eight: short lines, one image each, no sign-off. Her card lines stay.

**Changes wanted**

- **R-1.** A-1 (variants) and A-2 (Lyle and Cassian copy several of her fixed lines; hers were first, so theirs should move, but check that her closers do not all open "That's the read" or "That's what's coming through").
- **R-2.** A-6 as listed.

### Fixed lines as they stand

**Lead-ins (`frames`)**

| Key | Now |
|---|---|
| `core` | Pulled one off the top, and it's talking straight at you: |
| `past` | Mile marker behind you, where you're driving in from: |
| `present` | Right here, right now, hands on this wheel: |
| `future` | Up the road, past the next bend: |
| `center_base` | Smack in the middle of the dash — the heart of this haul: |
| `center_cross` | Laid crossways over that first card, what's riding you right now: |
| `below` | Down in the frame, under everything, what's been holding this rig up the whole time: |
| `left` | Rearview mirror — what you just drove through: |
| `above` | Up over the cab, what you're aiming this whole rig toward: |
| `right` | Next exit but one, coming up quick: |
| `staff_1` | How you're gripping the wheel right now, whether you notice it or not: |
| `staff_2` | Traffic around you — what everybody else on this road's doing that you can't control: |
| `staff_3` | What you're half-hoping, half-dreading you'll catch in the headlights: |
| `staff_4` | Last mile marker on this map, far as the cards can see down the highway: |
| `situation` | The road as it actually is right now, not how dispatch described it: |
| `obstacle` | What's sitting in the lane between you and where you're headed: |
| `advice` | What I'd tell you over the CB if you asked me how to drive it: |
| `mind` | What's going on up in the cab, behind the wheel: |
| `body` | What the rig itself is telling you: the tires, the sleep, the rent: |
| `spirit` | The thing under the engine noise, the part you already know: |

**Openers (`openers`)**

| Key | Now |
|---|---|
| `question.1` | You asked “{question}” One card for that. Alright, let's see what's on the map. |
| `question.3` | You asked “{question}” Three cards. Let's see what's coming through on that. |
| `question.10` | You asked “{question}” Ten cards is the long haul. Pour a coffee. |
| `blank.1` | No question on the table. One card, then. Let's see what it says. |
| `blank.3` | No question on the table, so let's just see what's coming through the static tonight. |
| `blank.10` | No question and the full ten. Fine by me. The road'll tell us what we're asking. |

**Weight (`weight`)**

| Key | Now |
|---|---|
| `heavy` | Lot of Major Arcana in this spread. That's not truck-stop chatter, that's the kind of haul that reroutes you for good. |
| `light` | Mostly Minor Arcana here: day-to-day driving, not the big rerouting. Still matters. Most of any road is day-to-day driving. |

**Suit notes (`suitNotes`)**

| Key | Now |
|---|---|
| `Fire` | Mostly Wands: a lot of throttle and not much patience. Everybody in this spread is flooring it. |
| `Water` | Mostly Cups: heavy weather. This spread is running on feelings and fogged-up windshields. |
| `Air` | Mostly Swords: a lot of CB chatter. Everybody's overthinking the route instead of driving it. |
| `Earth` | Mostly Pentacles: cargo and paychecks. A plain, practical stretch of road. |
| `Spirit` | Mostly Major Arcana. Big mile-marker stuff, not the usual Tuesday haul. |
| `mixed` | No one suit's in charge of this spread. Mixed traffic, which is most days. |

**Advice (`advice`)**

| Key | Now |
|---|---|
| `none.light` | Every card came in upright. Road's about as clear as it gets. Quit second-guessing the gauges and drive. |
| `none.heavy` | All upright and heavy on the Major Arcana. Clear road, big load. Don't speed just because nothing's in the way. |
| `some.light` | Mixed bag. Some clear lanes, some rough patches. Normal stretch of highway. Handle what's in front of you and don't go borrowing trouble from the next exit. |
| `some.heavy` | A couple of cards reversed under a lot of Majors. Fix the small thing that's rattling before the big stretch. It's cheaper now. |
| `most.light` | More than half these cards came in reversed. That's not bad luck. That's you white-knuckling something you already know needs fixing. Pull over and look at it. |
| `most.heavy` | Majors, mostly reversed. I'd park the rig this week. Fix one small thing, sleep, then decide the big one. |

**Closers (`closers`)**

| Key | Now |
|---|---|
| `wands` | That's what's coming through the static from here. Last card's {name}, so you'll want to gun it. Check your mirrors first. |
| `cups` | That's what's coming through from here. It ends on {name}, which means you'll feel this before you do anything about it. That's fine. Then do something. |
| `swords` | That's the read from here. It ends on {name}, so you'll argue with it most of the way home. The card doesn't mind. Rest of the drive's on you. |
| `pentacles` | That's the read. It ends on {name}: cargo, paychecks, the plain stuff. Whatever needs fixing here gets fixed with a wrench, not a wish. Rest of the drive's on you. |
| `major` | That's what's coming through the static from here. It ends on {name}, and there's no small version of that. Rest of the drive's on you. |

**One-card closer (`closerOne`)**

| Key | Now |
|---|---|
| `closerOne` | That's the card: {name}. One's enough to drive on. Rest of the road's on you. |
