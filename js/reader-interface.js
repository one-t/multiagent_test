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
   * Executes the active reader's interpretation on the spread
   * @param {Object} spreadData
   * @returns {Object} Structured reading output
   */
  interpret(spreadData) {
    const reader = this.getActive();
    if (!reader) {
      throw new Error("No active reader registered.");
    }
    return reader.interpret(spreadData);
  }

  /**
   * Helper for readers and the app: how the spread divides between the four
   * suits and the Major Arcana.
   *
   * Majors are counted on their own, never as a suit, so a tally of "Wands 1"
   * always means a Wands card is on the table. `counts` keeps the element
   * names readers already use: Fire = Wands, Water = Cups, Air = Swords,
   * Earth = Pentacles, Spirit = Major Arcana.
   *
   * `dominant` is the group with strictly the most cards, or null when two
   * groups tie or the spread has fewer than three cards.
   *
   * @param {Array<{card: {arcana?: string, suit?: string|null}}>} drawnCards
   */
  static analyzeElements(drawnCards) {
    const suits = { wands: 0, cups: 0, swords: 0, pentacles: 0 };
    let majors = 0;
    const total = drawnCards.length;

    drawnCards.forEach(({ card }) => {
      if (card.arcana !== "major" && Object.hasOwn(suits, card.suit)) suits[card.suit]++;
      else majors++;
    });

    const counts = {
      Fire: suits.wands,
      Water: suits.cups,
      Air: suits.swords,
      Earth: suits.pentacles,
      Spirit: majors
    };

    let dominant = null;
    if (total >= 3) {
      const ranked = Object.entries(counts).sort((a, b) => b[1] - a[1]);
      if (ranked[0][1] > ranked[1][1]) dominant = ranked[0][0];
    }
    return { counts, suits, majors, total, dominant };
  }

  /**
   * A reading built from the cards' own meanings, in the shape every reader
   * returns. The app falls back to this when a reader throws or returns
   * something unusable, so a turned card never sits beside an empty row.
   *
   * @param {{cards: Array<{card: object, isReversed: boolean, position: object}>}} spreadData
   * @param {{name?: string, title?: string, id?: string}} [reader]
   */
  static plainReading(spreadData, reader = {}) {
    const cards = (spreadData && spreadData.cards) || [];
    return {
      readerId: reader.id || "",
      readerName: reader.name || "",
      readerTitle: reader.title || "",
      summary: "",
      elementalInsight: "",
      cardReadings: cards.map(({ card, isReversed, position }) => ({
        positionIndex: position ? position.index : 0,
        positionName: position ? position.name : "",
        cardId: card.id,
        cardName: card.name,
        cardElement: card.element,
        isReversed,
        orientation: isReversed ? "Reversed" : "Upright",
        focalKeyword: ((isReversed ? card.keywordsReversed : card.keywordsUpright) || [])[0] || "",
        reflection: (isReversed ? card.meaningReversed : card.meaningUpright) || ""
      })),
      actionableAdvice: "",
      closingBenediction: ""
    };
  }

  /** True when a reader's output has the parts the app draws. */
  static isUsableReading(reading, cardCount) {
    return Boolean(
      reading &&
      typeof reading === "object" &&
      Array.isArray(reading.cardReadings) &&
      reading.cardReadings.length === cardCount &&
      reading.cardReadings.every(entry => entry && typeof entry.reflection === "string")
    );
  }
}

export const registry = new ReaderRegistry();
