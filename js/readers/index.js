/**
 * Readers Panel Registry
 * Exports all available reader personas for the tarot panel.
 */
import morwennaReader, { MORWENNA_PROFILE } from './morwenna.js';
import cassianReader, { CASSIAN_PROFILE } from './cassian-vetch.js';
import lyleReader, { LYLE_PROFILE } from './lyle-pasternak.js';
import sableReader, { SABLE_PROFILE } from './sable-moreau.js';
import calReader, { CAL_PROFILE } from './cal-navarro.js';
import barnabyReader, { BARNABY_PROFILE } from './barnaby.js';
import pippinReader, { PIPPIN_PROFILE } from './pippin.js';

export const READERS = [
  morwennaReader,
  cassianReader,
  lyleReader,
  sableReader,
  calReader,
  barnabyReader,
  pippinReader,
];

export function getReaderById(id) {
  return READERS.find(r => r.id === id) || READERS[0];
}

export function getAllReaders() {
  return READERS;
}

export default {
  READERS,
  getReaderById,
  getAllReaders,
  morwenna: morwennaReader,
  cassian: cassianReader,
  lyle: lyleReader,
  sable: sableReader,
  cal: calReader,
  barnaby: barnabyReader,
  pippin: pippinReader,
  MORWENNA_PROFILE,
  CASSIAN_PROFILE,
  LYLE_PROFILE,
  SABLE_PROFILE,
  CAL_PROFILE,
  BARNABY_PROFILE,
  PIPPIN_PROFILE,
};
