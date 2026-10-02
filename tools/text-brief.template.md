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

{{example}}

And the same reader with one card:

{{exampleOne}}

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

{{positions}}

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

{{lengths}}

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

{{shared}}

**A-3. Lead-ins that are more than one clause.** These need rewriting as one clause that the card's name completes (rule 2 in section 2):

{{multiLeadIns}}

**A-4. Card lines that fix a time.** A search for "tonight", "tomorrow", "this week" and "about to" in the body of the card lines finds these. Each clashes with a lead-in about the past or the outcome, unless the sentence is plainly general; judge each one. Time words are fine in the sign-off, which is advice for now.

{{timeBound}}

**A-5. Keyword lists.** In Morwenna's and Barnaby's lines these sentences are a list of the card's keywords, not something a person would say. Each should become speech in the reader's voice, or go.

{{keywordLists}}

Cassian, Lyle, Sable and Cal each lean on a verbless list of three ("Courage, patience, the soft no."). Once in a reading it is a voice. It turns up on the cards below, in four readers at once, so it reads as a tic. Keep the best few for each reader and turn the rest into sentences.

{{tripletLists}}

**A-6. Profile lines.** Each reader's `title`, `shortBio` and `greeting` were written in one sitting to a single pattern (what they are, in six words or fewer; two sentences; one line). They are shown in the reader list and before the first card. They are accurate but flat. Improve them where the character deserves better, within those lengths.

## 6. Sable Moreau (explicit)

{{profile:sable_moreau}}

**Changes wanted**

- **S-1.** The one-card closer is a placeholder written by someone keeping it clean. Replace it, with four variants, in her real register.
- **S-2.** Both `weight` lines are placeholders of the same kind. Replace, four variants each.
- **S-3.** Every closer opens "Leave the last order." The intended meaning is "keep the last order" (her own line is "Keep the last order if you keep only one"), and "leave" reads as the opposite. Rewrite the closers so each is clear on first reading, and give each four variants.
- **S-4.** She and Cal are meant to be different people: she gives orders, he says what he wants. They share images and whole clauses (see A-2: "the orgasm that wrecks the alibi" is in both Towers, and the two `weight` and `advice` sets mirror each other). Every image should belong to one of them only.
- **S-5.** She also borrows from Lyle ("The Magician is focus, not a costume", "A real choice, not a vibe") and from Cassian. Replace the borrowed lines with her own.
- **S-6.** Card lines: apply rules 1 and 4 from section 2 (no fixed time; do not re-announce the card). Many bodies are three or four short declaratives in a row, which reads as a list. Let each body be two or three sentences that lead into the Order.
- **S-7.** A-1, A-3, A-4, A-5 and A-6 as listed.

{{fixed:sable_moreau}}

## 7. Cal Navarro (explicit)

{{profile:cal_navarro}}

**Changes wanted**

- **C-1.** The one-card closer and both `weight` lines are clean placeholders. Replace, four variants each, in his real register.
- **C-2.** With one card, he says he is interested three times running: the greeting ("I am already interested…"), the opener ("I am already interested, which is unprofessional and correct") and the lead-in ("I am already leaning in"). Keep it in one of the three.
- **C-3.** The greeting "…which is not the same as a reading, and then it is" is hard to follow. Rewrite it so it lands on first reading.
- **C-4.** Five of his lead-ins are two sentences (listed in A-3). They are also the ones that carry his voice ("I would like to be it"), so keep the want and fold it into one clause.
- **C-5.** Separate him from Sable (S-4) and from Lyle ("Five of Wands is a stupid fight", "Strength is a steady hand", "Five of Cups is grief", "Four of Swords is rest").
- **C-6.** Card lines: rules 1 and 4 from section 2, and the same note on rhythm as S-6.
- **C-7.** A-1, A-4, A-5 and A-6 as listed.

{{fixed:cal_navarro}}

## 8. Madame Morwenna Ravenscroft

{{profile:morwenna_ravenscroft}}

**Changes wanted**

- **M-1. Rewrite all 156 card lines.** They describe the picture on a Rider–Waite card ("A sovereign upon a throne overflowing with carved bulls, grapevines, and golden coins…"). The app's decks are paintings of cats, so the person is looking at a different picture. Each line should say what the card means for the person in front of her, in her voice, in complete sentences. She may use her own furniture (the vault, the candles, the rook Malachi, the ledgers) but should not describe a card illustration.
- **M-2. No keyword lists, no captions.** Many lines contain a list of keywords ("Strategy, cunning, stealth, evasion, or deception."); the ones a simple check finds are under A-5, and there are more. Others are a string of phrases with no subject ("Acceptance, wiping the tears, turning around to find the two remaining cups, and crossing the stone bridge toward home."). Every sentence should be something she says to the person.
- **M-3. Keep the proverbs** unless one is weak or repeats the line above it. They are the best thing she has.
- **M-4.** Her lead-ins, openers, `weight.light`, the `Spirit` suit note, the closers and the one-card closer were rewritten recently by a different hand, to stop her contradicting her own cards. Check them against her voice and improve them. The lead-ins must stay free of any verdict (rule 3).
- **M-5.** Every closing ends "The Seventh Bell has tolled". Keep it as her signature, and vary what comes before it (A-1).
- **M-6.** A-6 as listed.

{{fixed:morwenna_ravenscroft}}

## 9. Old Barnaby Clawson

{{profile:barnaby}}

**Changes wanted**

- **B-1. {{barnabyFragmentCount}} of his 156 card lines open with an "-ing" phrase and no subject** ("Shaking the damp dirt off your paws, turning your back on the broken saucer, and trotting toward the kitchen."). It reads as a caption, not as an old cat talking to you. Give each a subject: he is telling you what you are doing, or what he once did. The cards:

{{barnabyFragments}}

- **B-2. Keyword lists** (listed under A-5): lines that end in one ("Solid, wealthy, grounded king."). Replace each with a sentence he would say.
- **B-3. Land the scene.** He never names the card, and often the cat scene is all there is, so the person has to work out what it means. Each line should end, before the Rule, on one plain clause that says what the scene means for them.
- **B-4.** He shares images with Morwenna and with Pippin, from when the three were written together: his "Grief has done its carving" is her "Grief has finished its carving work", and "silent velvet pads" is in Pippin's Seven of Swords too. Pippin and Morwenna's proverbs stay, so replace his.
- **B-5.** The greeting ("Hop up on the radiator, kid…") is repeated word for word in two of the one-card openers, and his last favourite line ends both the `major` closer and the one-card closer. Say each once.
- **B-6.** A-1, A-3 and A-6 as listed.

{{fixed:barnaby}}

## 10. Cassian Vetch

{{profile:cassian_vetch}}

**Changes wanted**

- **V-1. Trade words.** His fixed lines lean on letterpress terms a reader will not know: forme, tympan, lockup, chase, registration, ghosting, offsetting, sorts. "No suit has the forme. An even job, which usually means the trouble is in the lockup, not the type." cannot be followed without a glossary. Keep the trade, at most one such word a line, and make every sentence make sense to someone who has never seen a press.
- **V-2.** Card lines: about half name the card again ("The King of Pentacles is abundance with discipline"). Apply rule 4.
- **V-3.** His card lines are the longest of any reader (see the table in section 3). Several are four or five short statements in a row. Cut to what leads into the Stamp.
- **V-4.** A-1, A-2, A-5 and A-6 as listed.

{{fixed:cassian_vetch}}

## 11. Lyle Pasternak

{{profile:lyle_pasternak}}

**Changes wanted**

- **L-1.** Four lead-ins are several sentences (A-3). "One card. Try not to clap. The lot is full of people who clapped:" is the worst, because the card name then hangs off the third sentence.
- **L-2.** He has the most verbless three-item lists of the four readers who use them (A-5).
- **L-3.** The score lines (below) come in four bands and one version each. Four variants per band.
- **L-4.** A-1, A-2 and A-6 as listed. He shares the most with Ruth and Cassian in the fixed lines ("Everybody in this spread is flooring it" is word for word Ruth's).

{{fixed:lyle_pasternak}}

**Score lines** (added after the weight line, three cards or more; `{score}` is a number from 1 to 9):

- 8 or 9: `Score: {score} out of 10. Don't get used to it. I'm docking a point for how you're sitting.`
- 6 or 7: `Score: {score} out of 10. Passable. That's the nicest word I own.`
- 4 or 5: `Score: {score} out of 10. Half the cards are trying to leave the table and I don't blame them.`
- 1 to 3: `Score: {score} out of 10. I've seen worse. I was in it.`

Send these back as `"scores": { "high": ["…"], "good": ["…"], "middling": ["…"], "low": ["…"] }`.

## 12. Ruth Calloway

{{profile:ruth_calloway}}

Ruth reads best of the eight: short lines, one image each, no sign-off. Her card lines stay.

**Changes wanted**

- **R-1.** A-1 (variants) and A-2 (Lyle and Cassian copy several of her fixed lines; hers were first, so theirs should move, but check that her closers do not all open "That's the read" or "That's what's coming through").
- **R-2.** A-6 as listed.

{{fixed:ruth_calloway}}
