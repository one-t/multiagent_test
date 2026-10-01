import type { ReaderPersona } from "../types";
import { calNavarro } from "./calNavarro";
import { cassianVetch } from "./cassianVetch";
import { lylePasternak } from "./lylePasternak";
import { morwennaRavenscroft } from "./morwennaRavenscroft";
import { ruthCalloway } from "./ruthCalloway";
import { sableMoreau } from "./sableMoreau";

/** Registry of every reader available in the panel, keyed by persona id. */
export const READERS: Record<string, ReaderPersona> = {
  [ruthCalloway.id]: ruthCalloway,
  [morwennaRavenscroft.id]: morwennaRavenscroft,
  [cassianVetch.id]: cassianVetch,
  [lylePasternak.id]: lylePasternak,
  [sableMoreau.id]: sableMoreau,
  [calNavarro.id]: calNavarro,
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
export { lylePasternak } from "./lylePasternak";
export { sableMoreau } from "./sableMoreau";
export { calNavarro } from "./calNavarro";
