/**
 * js/cards.js and js/svg-art.js are written by build scripts. A hand edit to
 * either would be lost the next time its script runs, so this fails when a
 * file is not what its script would write.
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

for (const [script, file] of [['build_cards_data.js', 'js/cards.js'], ['build_svg_art.js', 'js/svg-art.js']]) {
  test(`${file} is what ${script} writes`, () => {
    const run = spawnSync(process.execPath, [script, '--check'], { cwd: root, encoding: 'utf8' });
    assert.equal(run.status, 0, `${run.stdout}${run.stderr}\nEdit ${script} (or its sources) and run: node ${script}`);
  });
}
