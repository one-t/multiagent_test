import type { ReaderPersona } from "../types";
import { ruthCalloway } from "./ruthCalloway";
import { morwennaRavenscroft } from "./morwennaRavenscroft";

/** Registry of every reader available in the panel, keyed by persona id. */
export const READERS: Record<string, ReaderPersona> = {
  [ruthCalloway.id]: ruthCalloway,
  [morwennaRavenscroft.id]: morwennaRavenscroft,
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
