import type { ReaderPersona } from "../types";
/** Registry of every reader available in the panel, keyed by persona id. */
export declare const READERS: Record<string, ReaderPersona>;
export declare function listReaders(): ReaderPersona[];
export declare function getReader(id: string): ReaderPersona;
export { ruthCalloway } from "./ruthCalloway";
export { morwennaRavenscroft } from "./morwennaRavenscroft";
