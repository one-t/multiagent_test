# Readers Panel

A registry of tarot reader personas. Each reader implements the
`ReaderPersona` interface (`src/types.ts`): a name, backstory, voice guide,
and interpretation logic for every one of the 78 cards across every
position in the standard single-card, three-card, and Celtic Cross
spreads.

## Readers

### Ruth "Roadhouse" Calloway (`src/readers/ruthCalloway`)

A retired long-haul trucker who reads cards under the awning of a truck
stop off I-40. She reads every card as a road condition, a rig, a load,
or a driver she's known — no "energy," no "universe," just the highway.
See `persona.ts` for her backstory and voice rules.

- `interpretations.ts` — her reading, upright and reversed, for all 78 cards.
- `positions.ts` — how she frames each of the 14 spread positions
  (single pull, past/present/future, and all ten Celtic Cross slots).
- `index.ts` — wires the two together into the `ReaderPersona` contract.

## Usage

```ts
import { ruthCalloway } from "./src/readers/ruthCalloway";
import { CARD_BY_KEY } from "./src/cards";

const draw = {
  card: CARD_BY_KEY["major-16"], // The Tower
  orientation: "reversed" as const,
  position: "single" as const,
};

console.log(ruthCalloway.interpretCard(draw));
```

## Adding another reader

1. Create `src/readers/<newReader>/` with `persona.ts`, `interpretations.ts`
   (one `{ upright, reversed }` entry per card key in `src/cards`), and
   `positions.ts` (one frame per `SpreadPosition`).
2. Export a `ReaderPersona` from its `index.ts`.
3. Register it in `src/readers/index.ts`.

## Scripts

- `npm run build` — type-check and compile to `dist/`.
- `npm run demo` — print a single pull, a three-card spread, and a full
  Celtic Cross from Ruth.
