"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pippin = exports.barnaby = exports.calNavarro = exports.sableMoreau = exports.lylePasternak = exports.cassianVetch = exports.morwennaRavenscroft = exports.ruthCalloway = exports.READERS = void 0;
exports.listReaders = listReaders;
exports.getReader = getReader;
const calNavarro_1 = require("./calNavarro");
const cassianVetch_1 = require("./cassianVetch");
const lylePasternak_1 = require("./lylePasternak");
const morwennaRavenscroft_1 = require("./morwennaRavenscroft");
const ruthCalloway_1 = require("./ruthCalloway");
const sableMoreau_1 = require("./sableMoreau");
const barnaby_1 = require("./barnaby");
const pippin_1 = require("./pippin");
/** Registry of every reader available in the panel, keyed by persona id. */
exports.READERS = {
    [ruthCalloway_1.ruthCalloway.id]: ruthCalloway_1.ruthCalloway,
    [morwennaRavenscroft_1.morwennaRavenscroft.id]: morwennaRavenscroft_1.morwennaRavenscroft,
    [cassianVetch_1.cassianVetch.id]: cassianVetch_1.cassianVetch,
    [lylePasternak_1.lylePasternak.id]: lylePasternak_1.lylePasternak,
    [sableMoreau_1.sableMoreau.id]: sableMoreau_1.sableMoreau,
    [calNavarro_1.calNavarro.id]: calNavarro_1.calNavarro,
    [barnaby_1.barnaby.id]: barnaby_1.barnaby,
    [pippin_1.pippin.id]: pippin_1.pippin,
};
function listReaders() {
    return Object.values(exports.READERS);
}
function getReader(id) {
    const reader = exports.READERS[id];
    if (!reader) {
        throw new Error(`No reader registered with id "${id}".`);
    }
    return reader;
}
var ruthCalloway_2 = require("./ruthCalloway");
Object.defineProperty(exports, "ruthCalloway", { enumerable: true, get: function () { return ruthCalloway_2.ruthCalloway; } });
var morwennaRavenscroft_2 = require("./morwennaRavenscroft");
Object.defineProperty(exports, "morwennaRavenscroft", { enumerable: true, get: function () { return morwennaRavenscroft_2.morwennaRavenscroft; } });
var cassianVetch_2 = require("./cassianVetch");
Object.defineProperty(exports, "cassianVetch", { enumerable: true, get: function () { return cassianVetch_2.cassianVetch; } });
var lylePasternak_2 = require("./lylePasternak");
Object.defineProperty(exports, "lylePasternak", { enumerable: true, get: function () { return lylePasternak_2.lylePasternak; } });
var sableMoreau_2 = require("./sableMoreau");
Object.defineProperty(exports, "sableMoreau", { enumerable: true, get: function () { return sableMoreau_2.sableMoreau; } });
var calNavarro_2 = require("./calNavarro");
Object.defineProperty(exports, "calNavarro", { enumerable: true, get: function () { return calNavarro_2.calNavarro; } });
var barnaby_2 = require("./barnaby");
Object.defineProperty(exports, "barnaby", { enumerable: true, get: function () { return barnaby_2.barnaby; } });
var pippin_2 = require("./pippin");
Object.defineProperty(exports, "pippin", { enumerable: true, get: function () { return pippin_2.pippin; } });
