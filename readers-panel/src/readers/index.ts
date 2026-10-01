import type { ReaderPersona } from "../types";
import { cassianVetch } from "./cassianVetch";
import { morwennaRavenscroft } from "./morwennaRavenscroft";
import { ruthCalloway } from "./ruthCalloway";

/** Registry of every reader available in the panel, keyed by persona id. */
export const READERS: Record<string, ReaderPersona> = {
  [ruthCalloway.id]: ruthCalloway,
  [morwennaRavenscroft.id]: morwennaRavenscroft,
  [cassianVetch.id]: cassianVetch,
};

export function listReaders(): ReaderPersona[] {
  return Object.values(READERS);
}

export function getReader(id: string): ReaderPersona {
  const reader = READERS[id];
  if (!reader) {
    throw new Error(`No reader registered with id "${id}".`);
  }
  return reader;
}

export { ruthCalloway } from "./ruthCalloway";
export { morwennaRavenscroft } from "./morwennaRavenscroft";
export { cassianVetch } from "./cassianVetch";
