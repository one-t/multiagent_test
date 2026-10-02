/**
 * The built-in readers, in the order the reader list shows them.
 * This is the only list: the app registers exactly these, and the tests
 * check exactly these.
 */
import { CassianVetch } from './cassian-vetch.js';
import { RuthCalloway } from './ruth-calloway.js';
import { LylePasternak } from './lyle-pasternak.js';
import { morwennaReader } from './morwenna.js';
import { Barnaby } from './barnaby.js';
import { Pippin } from './pippin.js';
import { SableMoreau } from './sable-moreau.js';
import { CalNavarro } from './cal-navarro.js';

export const READERS = [
  CassianVetch,
  RuthCalloway,
  LylePasternak,
  morwennaReader,
  Barnaby,
  Pippin,
  // The two explicit readers come last and carry a label in the list
  SableMoreau,
  CalNavarro
];

/** Who reads when nobody has been chosen. */
export const DEFAULT_READER_ID = CassianVetch.id;

export function getReaderById(id) {
  return READERS.find(reader => reader.id === id) || READERS[0];
}
