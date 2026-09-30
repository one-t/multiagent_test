/**
 * Reader Plugin Interface & Manager
 * Provides a formal plugin specification for tarot readers.
 * Each reader is a JS module that takes the spread data and returns a structured reading.
 */

export class ReaderRegistry {
  constructor() {
    this.readers = new Map();
    this.activeReaderId = null;
    this.listeners = new Set();
  }

  /**
   * Register a new reader plugin conforming to the TarotReader interface
   * @param {Object} reader - Reader plugin object
   */
  register(reader) {
    if (!reader || typeof reader !== 'object') {
      throw new Error("Reader plugin must be an object.");
    }
    if (!reader.id || typeof reader.id !== 'string') {
      throw new Error("Reader plugin requires a unique string 'id'.");
    }
    if (!reader.name || typeof reader.name !== 'string') {
      throw new Error("Reader plugin requires a string 'name'.");
    }
    if (typeof reader.interpret !== 'function') {
      throw new Error(`Reader '${reader.name}' must implement an 'interpret(spreadData)' method.`);
    }

    this.readers.set(reader.id, reader);
    if (!this.activeReaderId) {
      this.activeReaderId = reader.id;
    }
    this.notify();
    return this;
  }

  get(id) {
    return this.readers.get(id);
  }

  getAll() {
    return Array.from(this.readers.values());
  }

  getActive() {
    return this.readers.get(this.activeReaderId) || this.getAll()[0];
  }

  setActive(id) {
    if (this.readers.has(id)) {
      this.activeReaderId = id;
      this.notify();
      return true;
    }
    return false;
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  notify() {
    for (const listener of this.listeners) {
      try {
        listener(this.getAll(), this.getActive());
      } catch (err) {
        console.error("ReaderRegistry listener error:", err);
      }
    }
  }

  /**
   * Executes the active (or specified) reader's interpretation on the spread
   * @param {Object} spreadData
   * @param {string} [readerId]
   * @returns {Object} Structured reading output
   */
  interpret(spreadData, readerId = null) {
    const reader = readerId ? this.get(readerId) : this.getActive();
    if (!reader) {
      throw new Error("No active reader registered.");
    }
    return reader.interpret(spreadData);
  }

  /**
   * Helper utility for readers: calculates elemental distribution
   * @param {Array} cards
   */
  static analyzeElements(drawnCards) {
    const counts = { Fire: 0, Water: 0, Air: 0, Earth: 0, Spirit: 0 };
    let total = drawnCards.length;

    drawnCards.forEach(({ card }) => {
      const el = card.element || "";
      if (el.includes("Fire") || card.suit === "wands") counts.Fire++;
      else if (el.includes("Water") || card.suit === "cups") counts.Water++;
      else if (el.includes("Air") || card.suit === "swords") counts.Air++;
      else if (el.includes("Earth") || card.suit === "pentacles") counts.Earth++;
      else counts.Spirit++;
    });

    const dominant = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
    return { counts, total, dominant };
  }
}

export const registry = new ReaderRegistry();
