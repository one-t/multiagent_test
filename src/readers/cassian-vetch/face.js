/** A card face, as Cassian keeps it: image, reading, cost, and the one action. */
export function face(tell, line, stake, stamp) {
  return { tell, line, stake, stamp };
}

export function card(upright, reversed) {
  return { upright, reversed };
}
