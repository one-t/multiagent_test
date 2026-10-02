/**
 * Writes text-brief/: a brief for rewriting the readers' text, with the text
 * as it stands. The prose is tools/text-brief.template.md; this fills in the
 * parts that come from the code, so the brief cannot drift from the app.
 *
 *   node tools/text-brief.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { TAROT_DECK } from '../js/cards.js';
import { SPREADS, getPositions, getSpread } from '../js/spreads.js';
import { READERS } from '../js/readers/index.js';
import { splitSignature } from '../js/readers/compose.js';
import { CARD_INTERPRETATIONS as MORWENNA_LINES } from '../js/readers/morwenna-lines.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const out = path.join(root, 'text-brief');

/** id -> the module that exports the reader's VOICE, and the name of its file in the brief. */
const MODULES = {
  sable_moreau: 'sable-moreau',
  cal_navarro: 'cal-navarro',
  morwenna_ravenscroft: 'morwenna',
  barnaby: 'barnaby',
  cassian_vetch: 'cassian-vetch',
  lyle_pasternak: 'lyle-pasternak',
  ruth_calloway: 'ruth-calloway',
  pippin: 'pippin'
};
const IN_THE_JOB = Object.keys(MODULES).filter(id => id !== 'pippin');

const voices = {};
for (const [id, file] of Object.entries(MODULES)) {
  voices[id] = (await import(`../js/readers/${file}.js`)).VOICE;
}
const short = id => READERS.find(reader => reader.id === id).shortName || READERS.find(reader => reader.id === id).name;

// ------------------------------------------------------------------ the text, flattened

/** A fixed line as written, with {question} and {name} where the app fills them in. */
function shown(entry, placeholder) {
  return typeof entry === 'function' ? entry(placeholder) : entry;
}

/** Every fixed line of a reader as [slot, text]. */
function fixedLines(voice) {
  const lines = [];
  const walk = (value, slot, placeholder) => {
    if (value == null) return;
    if (Array.isArray(value)) value.forEach((item, i) => walk(item, `${slot}[${i + 1}]`, placeholder));
    else if (typeof value === 'string' || typeof value === 'function') lines.push([slot, shown(value, placeholder)]);
    else for (const [key, item] of Object.entries(value)) walk(item, `${slot}.${key}`, placeholder);
  };
  walk(voice.frames, 'frames');
  walk(voice.openers, 'openers', '{question}');
  walk(voice.weight, 'weight');
  walk(voice.suitNotes, 'suitNotes');
  walk(voice.advice, 'advice');
  walk(voice.closers, 'closers', '{name}');
  walk(voice.closerOne, 'closerOne', '{name}');
  return lines;
}

/** Every card line of a reader as { card, side, body, signature }. */
function cardLines(voice) {
  return TAROT_DECK.flatMap(card => [false, true].map(isReversed => {
    const { body, signature } = splitSignature(voice.line(card, isReversed), voice.signatureTag);
    return { card, side: isReversed ? 'reversed' : 'upright', body, signature };
  }));
}

const sentences = text => text.split(/(?<=[.!?…])\s+/).filter(Boolean);
const words = text => text.toLowerCase().replace(/[^a-z' {}]+/g, ' ').split(/\s+/).filter(Boolean);
const where = ({ card, side }) => `${card.name}, ${side}`;

// ------------------------------------------------------------------ sections

function table(head, rows) {
  return [`| ${head.join(' | ')} |`, `|${head.map(() => '---').join('|')}|`, ...rows.map(row => `| ${row.join(' | ')} |`)].join('\n');
}

function example(spreadId, themeId, picks) {
  const voice = voices.cassian_vetch;
  const reader = READERS.find(item => item.id === 'cassian_vetch');
  const positions = getPositions(spreadId, themeId);
  const reading = reader.interpret({
    spread: getSpread(spreadId),
    question: 'should I quit my job?',
    cards: picks.map(([id, isReversed], i) => ({ card: TAROT_DECK.find(card => card.id === id), isReversed, position: positions[i] }))
  });
  const rows = [['`openers`', reading.opening]];
  reading.cardReadings.forEach((item, i) => {
    rows.push([`\`frames.${positions[i].role}\` + the card's name`, item.lead]);
    rows.push(['card line', item.body]);
    rows.push([`sign-off (\`${voice.signatureTag}:\`)`, item.signature]);
  });
  if (reading.summary) rows.push(['`weight`', reading.summary]);
  if (reading.elementalInsight) rows.push(['`suitNotes`', reading.elementalInsight]);
  if (reading.actionableAdvice) rows.push(['`advice`', reading.actionableAdvice]);
  rows.push([reading.cardReadings.length > 1 ? '`closers`' : '`closerOne`', reading.closingBenediction]);
  return table(['Slot', 'Text'], rows);
}

function positions() {
  const rows = [];
  const add = (spread, list) => list.forEach(position => rows.push([`\`${position.role}\``, spread, position.name, position.description]));
  add('One card', SPREADS.single.positions);
  for (const theme of SPREADS.three_card.subThemes) add('Three cards', theme.positions);
  add('Celtic Cross', SPREADS.celtic_cross.positions);
  return table(['Key', 'Spread', 'Position', 'What the app says it is'], rows);
}

function lengths() {
  const rows = IN_THE_JOB.map(id => {
    const sizes = TAROT_DECK.flatMap(card => [false, true].map(isReversed => voices[id].line(card, isReversed).length)).sort((a, b) => a - b);
    return [short(id), sizes[0], sizes[Math.floor(sizes.length / 2)], sizes[sizes.length - 1]];
  });
  return table(['Reader', 'Shortest', 'Typical', 'Longest'], rows) + '\n\n(Characters, including the sign-off.)';
}

/**
 * Runs of words that two or more readers share: five or more in the same slot
 * or on the same card, seven or more anywhere. Shorter runs in unrelated
 * places are ordinary English ("you do not have to").
 */
function shared() {
  const N = 5;
  const CARD_WORDS = new Set(['the', 'of', 'is', 'a', 'x', ...TAROT_DECK.flatMap(card => words(card.name))]);
  const grams = new Map(); // gram -> Map(reader -> slot)
  const texts = Object.fromEntries(Object.keys(MODULES).map(id => [id, [
    ...fixedLines(voices[id]).map(([slot, text]) => [slot, text.replace(/\{(name|question)\}/g, 'x')]),
    ...cardLines(voices[id]).map(line => [where(line), line.body + ' ' + line.signature])
  ]]));
  for (const [id, list] of Object.entries(texts)) {
    for (const [slot, text] of list) {
      const w = words(text);
      for (let i = 0; i + N <= w.length; i++) {
        const gram = w.slice(i, i + N).join(' ');
        if (!grams.has(gram)) grams.set(gram, new Map());
        if (!grams.get(gram).has(id)) grams.get(gram).set(id, slot);
      }
    }
  }
  // Join overlapping grams that the same readers share in the same places
  const runs = new Map(); // place key -> { phrase words, places }
  for (const [gram, places] of grams) {
    if (places.size < 2) continue;
    const key = [...places].map(([id, slot]) => `${id}:${slot}`).sort().join('|');
    const run = runs.get(key);
    const w = gram.split(' ');
    if (run && run.words.slice(-(N - 1)).join(' ') === w.slice(0, N - 1).join(' ')) run.words.push(w[N - 1]);
    else if (!run) runs.set(key, { words: w, places });
  }
  const rows = [...runs.values()]
    .filter(run => run.words.filter(word => !CARD_WORDS.has(word)).length >= 3) // "the six of wands is" is rule 4, not a shared line
    .filter(run => IN_THE_JOB.some(id => run.places.has(id)))
    .filter(run => run.words.length >= 7 || new Set(run.places.values()).size === 1)
    .map(run => [`“${run.words.join(' ')}”`, [...run.places].map(([id, slot]) => `${short(id)} (${slot.startsWith('frames') || slot.includes('.') ? `\`${slot}\`` : slot})`).join('; ')]);
  return table(['Shared words', 'Where'], rows);
}

function multiLeadIns() {
  const rows = [];
  for (const id of IN_THE_JOB) {
    for (const [key, text] of Object.entries(voices[id].frames)) {
      if (/[.!?] /.test(text)) rows.push([short(id), `\`${key}\``, text]);
    }
  }
  return table(['Reader', 'Key', 'Lead-in'], rows);
}

const TIME = /\b(tonight|tomorrow|this week|next week|about to|last night)\b/i;
function timeBound() {
  const rows = [];
  for (const id of IN_THE_JOB) {
    for (const line of cardLines(voices[id])) {
      const hit = sentences(line.body).find(sentence => TIME.test(sentence));
      if (hit) rows.push([short(id), where(line), hit]);
    }
  }
  return table(['Reader', 'Card', 'Sentence'], rows);
}

function isKeywordList(sentence) {
  const count = sentence.split(/\s+/).length;
  return count <= 9 && (sentence.match(/,/g) || []).length >= 2 && !/\b(you|your|you're|i|it|is|are|was|don't|do|does|kid|hon)\b/i.test(sentence);
}
function keywordLists(ids) {
  const rows = [];
  for (const id of ids) {
    for (const line of cardLines(voices[id])) {
      for (const sentence of sentences(line.body).filter(isKeywordList)) rows.push([short(id), where(line), sentence]);
    }
  }
  return table(['Reader', 'Card', 'Sentence'], rows);
}

function fragments(id) {
  return cardLines(voices[id]).filter(line => /^[A-Z][a-z]+ing\b/.test(line.body));
}

function profile(id) {
  const reader = READERS.find(item => item.id === id);
  return [
    `- **Title** (under the name): ${reader.title}`,
    `- **Short bio** (reader list): ${reader.shortBio}`,
    `- **Greeting** (before the first card is turned): ${reader.greeting}`,
    `- **Voice:** ${reader.voice}`,
    reader.philosophy ? `- **Motto:** ${reader.philosophy}` : '',
    `- **Sign-off label:** ${voices[id].signatureTag || 'none'}`,
    `- **Card lines:** \`${MODULES[id]}.md\``
  ].filter(Boolean).join('\n');
}

function fixed(id) {
  const lines = fixedLines(voices[id]);
  const group = (title, prefix) => {
    const rows = lines.filter(([slot]) => slot.startsWith(prefix)).map(([slot, text]) => [`\`${slot.slice(prefix.length).replace(/^\./, '') || prefix}\``, text]);
    return rows.length ? `**${title}**\n\n${table(['Key', 'Now'], rows)}` : '';
  };
  return [
    '### Fixed lines as they stand',
    group('Lead-ins (`frames`)', 'frames'),
    group('Openers (`openers`)', 'openers'),
    group('Weight (`weight`)', 'weight') || '**Weight:** none. One may be added: `weight.heavy` and `weight.light`.',
    group('Suit notes (`suitNotes`)', 'suitNotes'),
    group('Advice (`advice`)', 'advice'),
    group('Closers (`closers`)', 'closers'),
    group('One-card closer (`closerOne`)', 'closerOne')
  ].filter(Boolean).join('\n\n');
}

function cardFile(id) {
  const reader = READERS.find(item => item.id === id);
  const voice = voices[id];
  const tag = voice.signatureTag;
  const parts = [
    `# ${reader.name}: card lines as they stand`,
    `${TAROT_DECK.length} cards, upright and reversed. "Means" is the card's standard meaning in the app, which every reader's line must agree with. ${tag && id !== 'morwenna_ravenscroft' ? `Each line ends with its sign-off after \`${tag}:\`.` : id === 'morwenna_ravenscroft' ? 'Each card has one proverb, used both ways up.' : 'Ruth has no sign-off.'} The rules and the changes wanted are in \`00-brief.md\`.`
  ];
  for (const card of TAROT_DECK) {
    const block = [
      `## ${card.name} (\`${card.id}\`)`,
      `- Means, upright: ${card.meaningUpright} (${card.keywordsUpright.join(', ')})`,
      `- Means, reversed: ${card.meaningReversed} (${card.keywordsReversed.join(', ')})`,
      ''
    ];
    if (id === 'morwenna_ravenscroft') {
      const entry = MORWENNA_LINES[card.id];
      block.push(`**upright:** ${entry.upright}`, '', `**reversed:** ${entry.reversed}`, '', `**proverb:** ${entry.proverb}`);
    } else {
      block.push(`**upright:** ${voice.line(card, false)}`, '', `**reversed:** ${voice.line(card, true)}`);
    }
    parts.push(block.join('\n'));
  }
  return parts.join('\n\n') + '\n';
}

// ------------------------------------------------------------------ write

const THREE = [['maj_16', false], ['cups_5', true], ['pentacles_king', false]];
const fills = {
  example: () => example('three_card', 'past_present_future', THREE),
  exampleOne: () => example('single', undefined, [['swords_7', false]]),
  positions,
  lengths,
  shared,
  multiLeadIns,
  timeBound,
  keywordLists: () => keywordLists(['morwenna_ravenscroft', 'barnaby']),
  tripletLists: () => keywordLists(['cassian_vetch', 'lyle_pasternak', 'sable_moreau', 'cal_navarro']),
  barnabyFragments: () => fragments('barnaby').map(where).join('; ') + '.',
  barnabyFragmentCount: () => String(fragments('barnaby').length)
};

const template = fs.readFileSync(path.join(root, 'tools', 'text-brief.template.md'), 'utf8');
const brief = template.replace(/\{\{([\w:]+)\}\}/g, (match, key) => {
  const [kind, id] = key.split(':');
  if (kind === 'profile') return profile(id);
  if (kind === 'fixed') return fixed(id);
  if (!fills[key]) throw new Error(`Nothing fills ${match}`);
  return fills[key]();
});

fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });
fs.writeFileSync(path.join(out, '00-brief.md'), brief);
for (const id of IN_THE_JOB) fs.writeFileSync(path.join(out, `${MODULES[id]}.md`), cardFile(id));

for (const file of fs.readdirSync(out)) {
  console.log(`${file}  ${Math.round(fs.statSync(path.join(out, file)).size / 1024)} KB`);
}
