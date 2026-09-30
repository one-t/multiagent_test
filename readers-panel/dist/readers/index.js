"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.morwennaRavenscroft = exports.ruthCalloway = exports.READERS = void 0;
exports.listReaders = listReaders;
exports.getReader = getReader;
const ruthCalloway_1 = require("./ruthCalloway");
const morwennaRavenscroft_1 = require("./morwennaRavenscroft");
/** Registry of every reader available in the panel, keyed by persona id. */
exports.READERS = {
    [ruthCalloway_1.ruthCalloway.id]: ruthCalloway_1.ruthCalloway,
    [morwennaRavenscroft_1.morwennaRavenscroft.id]: morwennaRavenscroft_1.morwennaRavenscroft,
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
