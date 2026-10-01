/**
 * Readers Panel Registry
 * Exports all available reader personas for the tarot panel.
 */
import morwennaReader, { MORWENNA_PROFILE } from './morwenna.js';
import cassianReader, { CASSIAN_PROFILE } from './cassian-vetch.js';

export const READERS = [
  morwennaReader,
  cassianReader,
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
  MORWENNA_PROFILE,
  CASSIAN_PROFILE,
};
