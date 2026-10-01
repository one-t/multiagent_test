/**
 * Fairness of shuffleDeck over 100,000 independent shuffles.
 *
 * Position: each card is equally likely in each slot of a uniform random
 * permutation. The Pearson statistic on the card-by-position counts is
 * chi-square with (n - 1)^2 degrees of freedom.
 *
 * Reversal: each card is reversed independently with probability 1/2.
 * Per-card and per-position counts are chi-square with n degrees of freedom,
 * and the pooled count is chi-square with 1 degree of freedom.
 */
import assert from "node:assert/strict";
import { test } from "node:test";
import { TAROT_DECK } from "../js/cards.js";
import { shuffleDeck } from "../js/shuffle.js";

const SHUFFLES = 100_000;
const ALPHA = 1e-4;

test("100,000 shuffles are uniform across cards and positions, and reversals are fair coins", { timeout: 120_000 }, (t) => {
  const n = TAROT_DECK.length;
  assert.equal(n, 78, "the working deck is the 78-card tarot");

  const idIndex = new Map();
  for (let i = 0; i < n; i++) {
    assert.ok(TAROT_DECK[i].id, `card ${i} has an id`);
    assert.equal(idIndex.has(TAROT_DECK[i].id), false, `duplicate card id ${TAROT_DECK[i].id}`);
    idIndex.set(TAROT_DECK[i].id, i);
  }

  const sourceOrder = TAROT_DECK.map((card) => card.id).join("\0");
  const positionCounts = new Uint32Array(n * n);
  const reversedByCard = new Uint32Array(n);
  const reversedByPosition = new Uint32Array(n);
  let reversedTotal = 0;

  for (let trial = 0; trial < SHUFFLES; trial++) {
    const shuffled = shuffleDeck(TAROT_DECK);
    assert.equal(shuffled.length, n, `trial ${trial} did not return the full deck`);

    const seen = new Uint8Array(n);
    for (let position = 0; position < n; position++) {
      const drawn = shuffled[position];
      const cardIndex = idIndex.get(drawn.card.id);
      assert.notEqual(cardIndex, undefined, `trial ${trial} returned unknown card ${drawn.card.id}`);
      assert.equal(seen[cardIndex], 0, `trial ${trial} repeated card ${drawn.card.id}`);
      seen[cardIndex] = 1;

      positionCounts[cardIndex * n + position]++;
      if (drawn.isReversed) {
        reversedByCard[cardIndex]++;
        reversedByPosition[position]++;
        reversedTotal++;
      }
    }
  }

  assert.equal(
    TAROT_DECK.map((card) => card.id).join("\0"),
    sourceOrder,
    "shuffling must not reorder the source deck"
  );

  const expectedPosition = SHUFFLES / n;
  let positionStat = 0;
  let minCount = SHUFFLES;
  let maxCount = 0;
  for (let cell = 0; cell < positionCounts.length; cell++) {
    const observed = positionCounts[cell];
    if (observed < minCount) minCount = observed;
    if (observed > maxCount) maxCount = observed;
    const delta = observed - expectedPosition;
    positionStat += (delta * delta) / expectedPosition;
  }
  const positionDf = (n - 1) * (n - 1);
  const positionP = chiSquareSurvival(positionStat, positionDf);
  t.diagnostic(
    `positions: chi-square=${positionStat.toFixed(1)} df=${positionDf} ` +
      `p=${positionP.toExponential(3)} expected/cell=${expectedPosition.toFixed(2)} ` +
      `min=${minCount} max=${maxCount}`
  );
  assert.ok(
    positionP > ALPHA,
    `card-by-position chi-square rejects equal probability ` +
      `(stat=${positionStat.toFixed(1)}, df=${positionDf}, p=${positionP.toExponential(3)}, alpha=${ALPHA})`
  );

  const cardReversal = reversalChiSquare(reversedByCard, SHUFFLES);
  const positionReversal = reversalChiSquare(reversedByPosition, SHUFFLES);
  const trials = SHUFFLES * n;
  const expectedReversed = trials / 2;
  const pooledDelta = reversedTotal - expectedReversed;
  const pooledStat = (4 * pooledDelta * pooledDelta) / trials;
  const pooledP = chiSquareSurvival(pooledStat, 1);
  const reversedRate = reversedTotal / trials;

  t.diagnostic(
    `reversals: rate=${(reversedRate * 100).toFixed(4)}% ` +
      `pooled chi-square=${pooledStat.toFixed(2)} df=1 p=${pooledP.toExponential(3)} ` +
      `per-card chi-square=${cardReversal.stat.toFixed(1)} df=${n} p=${cardReversal.p.toExponential(3)} ` +
      `per-position chi-square=${positionReversal.stat.toFixed(1)} df=${n} p=${positionReversal.p.toExponential(3)}`
  );

  assert.ok(
    pooledP > ALPHA,
    `pooled reversals are not about 50% ` +
      `(rate=${(reversedRate * 100).toFixed(4)}%, stat=${pooledStat.toFixed(2)}, p=${pooledP.toExponential(3)})`
  );
  assert.ok(
    cardReversal.p > ALPHA,
    `some cards are not reversed about half the time ` +
      `(stat=${cardReversal.stat.toFixed(1)}, df=${n}, p=${cardReversal.p.toExponential(3)})`
  );
  assert.ok(
    positionReversal.p > ALPHA,
    `some positions are not reversed about half the time ` +
      `(stat=${positionReversal.stat.toFixed(1)}, df=${n}, p=${positionReversal.p.toExponential(3)})`
  );
});

function reversalChiSquare(counts, trialsPerBin) {
  const expected = trialsPerBin / 2;
  let stat = 0;
  for (let i = 0; i < counts.length; i++) {
    const delta = counts[i] - expected;
    stat += (2 * delta * delta) / expected;
  }
  return { stat, p: chiSquareSurvival(stat, counts.length) };
}

/**
 * Upper-tail probability P(X >= x) for X ~ chi-square(df).
 * Wilson–Hilferty cube-root normal approximation, with the Hastings rational
 * approximation for the standard normal tail.
 */
function chiSquareSurvival(x, df) {
  if (x < 0 || df <= 0) {
    throw new Error(`invalid chi-square arguments x=${x} df=${df}`);
  }
  if (x === 0) return 1;
  const h = 2 / (9 * df);
  const z = (Math.cbrt(x / df) - (1 - h)) / Math.sqrt(h);
  return normalSurvival(z);
}

function normalSurvival(z) {
  if (z < 0) return 1 - normalSurvival(-z);
  const t = 1 / (1 + 0.2316419 * z);
  const density = 0.3989422804014327 * Math.exp(-0.5 * z * z);
  const polynomial =
    t *
    (0.319381530 +
      t * (-0.356563782 + t * (1.781477937 + t * (-1.821255978 + t * 1.330274429))));
  return density * polynomial;
}
