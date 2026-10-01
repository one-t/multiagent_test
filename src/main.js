import { deckById } from "./deck.js";
import { readers } from "./readers/registry.js";

const panel = document.querySelector("#readers-panel");
const form = document.querySelector("#slip-form");
const question = document.querySelector("#question");
const spread = document.querySelector("#spread");
const reading = document.querySelector("#reading");
const clear = document.querySelector("#clear");

const state = {
  reader: readers[0],
  sheet: null,
  selected: readers[0].spread.positions[0].id,
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  state.sheet = state.reader.read(question.value);
  state.selected = state.reader.spread.positions[0].id;
  clear.disabled = false;
  renderSpread();
  renderReading();
  if (window.matchMedia("(max-width: 980px)").matches) {
    spread.scrollIntoView({ behavior: motion(), block: "start" });
  }
});

clear.addEventListener("click", () => {
  state.sheet = null;
  state.selected = state.reader.spread.positions[0].id;
  question.value = "";
  clear.disabled = true;
  renderSpread();
  renderReading();
  question.focus();
});

for (const button of document.querySelectorAll("[data-sample]")) {
  button.addEventListener("click", () => {
    question.value = button.dataset.sample ?? "";
    question.focus();
  });
}

document.addEventListener("keydown", (event) => {
  if (event.target instanceof HTMLTextAreaElement || event.target instanceof HTMLInputElement) return;
  const positions = state.reader.spread.positions;
  const index = Math.max(0, positions.findIndex((position) => position.id === state.selected));
  if (event.key === "ArrowRight" || event.key === "ArrowDown") {
    event.preventDefault();
    select(positions[(index + 1) % positions.length].id);
  } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
    event.preventDefault();
    select(positions[(index - 1 + positions.length) % positions.length].id);
  }
});

renderAll();

function renderAll() {
  renderPanel();
  renderSpread();
  renderReading();
}

function renderPanel() {
  panel.replaceChildren();
  const heading = el("div", "panel-head");
  heading.append(el("h2", "panel-title", "Readers"));
  heading.append(el("p", "panel-count", readers.length === 1 ? "1 on duty" : `${readers.length} on duty`));
  panel.append(heading);

  const list = el("div", "reader-list");
  for (const reader of readers) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "reader";
    const onDuty = reader.id === state.reader.id;
    button.classList.toggle("is-on-duty", onDuty);
    button.setAttribute("aria-pressed", onDuty ? "true" : "false");

    const frame = el("span", "portrait-frame");
    const image = document.createElement("img");
    image.src = reader.portrait;
    image.alt = `${reader.name}, ${reader.title}`;
    const monogram = el("span", "monogram", reader.monogram);
    monogram.hidden = true;
    image.addEventListener("error", () => {
      image.remove();
      monogram.hidden = false;
    });
    frame.append(image, monogram);

    const identity = el("span", "ident");
    identity.append(el("span", "eyebrow", onDuty ? "On duty" : "Off the window"));
    identity.append(el("span", "reader-name", reader.name));
    identity.append(el("span", "reader-title", reader.title));
    button.append(frame, identity);
    button.addEventListener("click", () => chooseReader(reader.id));
    list.append(button);
  }
  panel.append(list);

  const reader = state.reader;
  const dossier = document.createElement("details");
  dossier.className = "dossier";
  if (window.matchMedia("(min-width: 981px)").matches) dossier.open = true;
  dossier.append(el("summary", null, "The clerk, the voice, the seats"));
  dossier.append(el("p", "epithet", reader.epithet));
  dossier.append(el("p", "meta", reader.shop));
  dossier.append(el("p", "meta", reader.rate));
  for (const paragraph of reader.backstory) dossier.append(el("p", "backstory", paragraph));

  const voice = el("section", "voice");
  voice.append(el("h3", null, "Voice"));
  voice.append(el("p", "voice-summary", reader.voice.summary));
  const diction = el("ul", "diction");
  for (const word of reader.voice.diction) diction.append(el("li", null, word));
  voice.append(diction);
  voice.append(el("blockquote", "sample", reader.voice.sample));
  voice.append(el("p", "house", reader.houseStyle));
  dossier.append(voice);

  const seats = el("section", "seats");
  seats.append(el("h3", null, reader.spread.name));
  seats.append(el("p", "voice-summary", reader.spread.blurb));
  const listOfSeats = el("ol", "seat-list");
  for (const position of reader.spread.positions) {
    const item = el("li");
    item.append(el("strong", null, position.name));
    item.append(document.createTextNode(` ${position.blurb}`));
    listOfSeats.append(item);
  }
  seats.append(listOfSeats);
  dossier.append(seats);
  panel.append(dossier);
}

function chooseReader(id) {
  const reader = readers.find((item) => item.id === id);
  if (!reader || reader.id === state.reader.id) return;
  state.reader = reader;
  state.sheet = null;
  state.selected = reader.spread.positions[0].id;
  clear.disabled = true;
  renderAll();
}

function renderSpread() {
  spread.replaceChildren();
  const grid = el("div", "spread");
  grid.setAttribute("role", "group");
  grid.setAttribute("aria-label", state.reader.spread.name);

  for (const position of state.reader.spread.positions) {
    const entry = state.sheet?.entries.find((item) => item.positionId === position.id) ?? null;
    const button = document.createElement("button");
    button.type = "button";
    button.className = "sheet";
    button.dataset.position = position.id;
    const selected = position.id === state.selected;
    button.classList.toggle("is-selected", selected);
    button.setAttribute("aria-pressed", selected ? "true" : "false");
    button.append(el("span", "seat-kicker", `${position.order}  ${position.name}`));

    if (!entry) {
      button.append(el("span", "blank-name", "Blank sheet"));
      button.append(el("span", "blank-seat", position.seat));
    } else {
      const card = deckById.get(entry.cardId);
      const face = el("span", `card-face suit-${card.suit ?? "major"}${entry.reversed ? " is-slipped" : ""}`);
      face.append(el("span", "numeral", card.numeral));
      const naming = el("span", "naming");
      naming.append(el("span", "card-name", card.name));
      naming.append(el("span", "arcana", card.suit ? card.suit : "Major arcana"));
      face.append(naming);
      if (entry.reversed) face.append(el("span", "slipped", "Slipped plate"));
      button.append(face);
    }

    button.addEventListener("click", () => select(position.id));
    grid.append(button);
  }

  spread.append(grid);
}

function renderReading() {
  reading.replaceChildren();
  if (!state.sheet) {
    reading.append(el("p", "greeting", state.reader.greeting));
    const position = state.reader.spread.positions.find((item) => item.id === state.selected);
    const note = el("section", "idle-seat");
    note.append(el("p", "eyebrow", `${state.reader.name} · seat ${position.order}`));
    note.append(el("h2", null, position.name));
    note.append(el("p", "idle-seat-line", position.seat));
    note.append(el("p", null, position.blurb));
    note.append(el("p", "idle-cue", "Pull the window and a card will be locked in this seat."));
    reading.append(note);
    return;
  }

  reading.append(el("p", "opening", state.sheet.opening));
  const count = state.sheet.entries.length;

  for (const entry of state.sheet.entries) {
    const position = state.reader.spread.positions.find((item) => item.id === entry.positionId);
    const section = el("section", "seat-reading");
    section.id = `seat-${entry.positionId}`;
    section.dataset.position = entry.positionId;
    section.classList.toggle("is-selected", entry.positionId === state.selected);
    section.append(el("p", "eyebrow", `${position.order} of ${count} · ${position.seat}`));
    section.append(el("h2", null, entry.headline));

    const marker = " Stamp: ";
    const cut = entry.body.lastIndexOf(marker);
    const prose = cut === -1 ? entry.body : entry.body.slice(0, cut);
    section.append(el("p", "body", prose));

    const stamp = el("p", "stamp");
    stamp.append(el("span", "stamp-label", "Stamp"));
    stamp.append(document.createTextNode(entry.stamp));
    section.append(stamp);
    section.addEventListener("click", () => select(entry.positionId, false));
    reading.append(section);
  }

  reading.append(el("p", "closing", state.sheet.closing));
}

function select(positionId, scroll = true) {
  state.selected = positionId;
  for (const button of spread.querySelectorAll(".sheet")) {
    const on = button.dataset.position === positionId;
    button.classList.toggle("is-selected", on);
    button.setAttribute("aria-pressed", on ? "true" : "false");
  }

  if (!state.sheet) {
    renderReading();
    return;
  }

  for (const section of reading.querySelectorAll(".seat-reading")) {
    section.classList.toggle("is-selected", section.dataset.position === positionId);
  }
  if (!scroll) return;
  document.getElementById(`seat-${positionId}`)?.scrollIntoView({ behavior: motion(), block: "nearest" });
}

function motion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
}

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
}
