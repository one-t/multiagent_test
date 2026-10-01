/**
 * The copied reading is plain text: nothing a message app would show as stray symbols.
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import { formatReadingText } from '../js/reading-text.js';

const sample = {
  readerName: 'Cassian Vetch',
  spreadLabel: 'Three cards · Past / Present / Future',
  dateLabel: '1 October 2026',
  question: 'should I quit my job?',
  cards: [
    { position: 'Past', cardName: 'The Tower', isReversed: false, text: 'First card text.' },
    { position: 'Present', cardName: 'Five of Cups', isReversed: true, text: 'Second card\n text.' },
    { position: 'Future', cardName: 'King of Pentacles', isReversed: false, text: 'Third card text.' }
  ],
  summary: 'The summary.',
  advice: 'The advice.',
  closing: 'The closing.'
};

test('the copied reading has no markdown in it', () => {
  const text = formatReadingText(sample);
  assert.equal(/[#*_`]/.test(text), false, text);
  assert.equal(/^\s*[-=]{3,}\s*$/m.test(text), false);
});

test('it carries the reader, the question, each card with its position, and the ending', () => {
  const text = formatReadingText(sample);
  const lines = text.split('\n');
  assert.equal(lines[0], 'Tarot reading by Cassian Vetch');
  assert.equal(lines[1], 'Three cards · Past / Present / Future, 1 October 2026');
  assert.ok(text.includes('Question: should I quit my job?'));
  assert.ok(text.includes('1. Past: The Tower\nFirst card text.'));
  assert.ok(text.includes('2. Present: Five of Cups (reversed)\nSecond card text.'));
  assert.ok(text.includes('Summary\nThe summary.'));
  assert.ok(text.includes('Advice\nThe advice.'));
  assert.ok(text.endsWith('The closing.'));
});

test('a single card is not numbered and empty parts are left out', () => {
  const text = formatReadingText({
    readerName: '',
    spreadLabel: 'One card',
    question: '   ',
    cards: [{ position: 'Your card', cardName: 'The Star', isReversed: false, text: '' }],
    summary: '',
    advice: '',
    closing: ''
  });
  assert.equal(text, 'Tarot reading\nOne card\n\nYour card: The Star');
});
