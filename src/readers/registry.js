import { loadReader } from "./contract.js";
import { cassianVetch } from "./cassian-vetch/index.js";

/**
 * Clerks on duty. A reader module is a person: name, life, voice,
 * and interpretation logic for every card in every seat of their spread.
 */
export const readers = [loadReader(cassianVetch)];

export function getReader(id) {
  const reader = readers.find((item) => item.id === id);
  if (!reader) throw new Error(`Nobody by the name of ${id} is on duty.`);
  return reader;
}
