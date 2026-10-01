/** What the readers panel expects from a clerk module. */

const REQUIRED = [
  "id",
  "name",
  "title",
  "epithet",
  "backstory",
  "voice",
  "greeting",
  "spread",
  "interpret",
  "read",
];

export function loadReader(reader) {
  for (const key of REQUIRED) {
    if (reader[key] == null || reader[key] === "") {
      throw new Error(`Reader module is missing ${key}.`);
    }
  }

  if (!Array.isArray(reader.backstory) || reader.backstory.length === 0) {
    throw new Error(`${reader.id} has no backstory.`);
  }

  if (typeof reader.voice.summary !== "string" || !Array.isArray(reader.voice.refuses)) {
    throw new Error(`${reader.id} has an incomplete voice.`);
  }

  if (!reader.spread?.id || !Array.isArray(reader.spread.positions) || reader.spread.positions.length === 0) {
    throw new Error(`${reader.id} brought no spread.`);
  }

  const seats = new Set();
  for (const position of reader.spread.positions) {
    if (!position.id || !position.name || !position.seat || !position.anchor) {
      throw new Error(`${reader.id} has a position without id, name, seat, and anchor.`);
    }
    if (seats.has(position.id)) throw new Error(`${reader.id} repeats the seat ${position.id}.`);
    seats.add(position.id);
  }

  return reader;
}
