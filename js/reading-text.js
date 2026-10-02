/**
 * A reading as plain text, for the clipboard. No markup of any kind: it is
 * pasted into message apps and emails that would show the symbols literally.
 */

/**
 * @param {object} reading
 * @param {string} reading.readerName
 * @param {string} reading.spreadLabel
 * @param {string} [reading.dateLabel]
 * @param {string} [reading.question]
 * @param {string} [reading.opening] What the reader says before the cards
 * @param {Array<{position: string, cardName: string, isReversed: boolean, text: string}>} reading.cards
 * @param {string} [reading.summary]
 * @param {string} [reading.advice]
 * @param {string} [reading.closing]
 * @returns {string}
 */
export function formatReadingText(reading) {
  const clean = value => String(value || '').replace(/\s+/g, ' ').trim();
  const numbered = reading.cards.length > 1;
  const blocks = [];

  const heading = [reading.readerName ? `Tarot reading by ${clean(reading.readerName)}` : 'Tarot reading'];
  const about = [clean(reading.spreadLabel), clean(reading.dateLabel)].filter(Boolean).join(', ');
  if (about) heading.push(about);
  blocks.push(heading.join('\n'));

  const question = clean(reading.question);
  if (question) blocks.push(`Question: ${question}`);
  const opening = clean(reading.opening);
  if (opening) blocks.push(opening);

  reading.cards.forEach((card, index) => {
    const title = `${numbered ? `${index + 1}. ` : ''}${clean(card.position)}: ${clean(card.cardName)}${card.isReversed ? ' (reversed)' : ''}`;
    const text = clean(card.text);
    blocks.push(text ? `${title}\n${text}` : title);
  });

  const summary = clean(reading.summary);
  if (summary) blocks.push(`Summary\n${summary}`);
  const advice = clean(reading.advice);
  if (advice) blocks.push(`Advice\n${advice}`);
  const closing = clean(reading.closing);
  if (closing) blocks.push(closing);

  return blocks.join('\n\n');
}
