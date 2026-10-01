/** Fisher-Yates a deck and deal one card to each seat. `random` returns values in [0, 1). */

export function draw(spread, cards, random = Math.random, reversalRate = 0) {
  if (cards.length < spread.positions.length) {
    throw new Error(`Need ${spread.positions.length} cards and only have ${cards.length}.`);
  }

  const pool = cards.slice();
  for (let index = pool.length - 1; index > 0; index -= 1) {
    const swap = Math.floor(random() * (index + 1));
    [pool[index], pool[swap]] = [pool[swap], pool[index]];
  }

  return spread.positions.map((position, index) => ({
    position,
    card: pool[index],
    reversed: random() < reversalRate,
  }));
}
