/**
 * Fair tarot shuffle.
 *
 * Fisher–Yates draws each of the n! deck orders with equal probability.
 * When reversals are allowed, each card is reversed independently with
 * probability 1/2. The input deck is not mutated.
 *
 * @param {readonly object[]} deck
 * @param {{ allowReversals?: boolean, random?: () => number }} [options]
 * @returns {Array<{ card: object, isReversed: boolean }>}
 */
export function shuffleDeck(deck, options = {}) {
  const random = options.random ?? Math.random;
  const allowReversals = options.allowReversals !== false;

  const order = deck.slice();
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    const swapped = order[i];
    order[i] = order[j];
    order[j] = swapped;
  }

  const shuffled = new Array(order.length);
  for (let i = 0; i < order.length; i++) {
    shuffled[i] = {
      card: order[i],
      isReversed: allowReversals && random() < 0.5,
    };
  }
  return shuffled;
}
