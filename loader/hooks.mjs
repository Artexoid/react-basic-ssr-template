import { transformSync } from 'esbuild';
import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';

/**
 * @param {string} url - The URL of the resource to load, can be a local file or a remote URL.
 * @param {object} context - The context in which the load function is called.
 * @param {function} nextLoad - The function to call if the URL does not start with 'https://' or 'http://'.
 * @returns {Promise}
*/
export async function load(url, context, nextLoad) {
  if (url.endsWith('.jsx')) {
    const path = fileURLToPath(url);
    let source = (await readFile(path, 'utf-8')).toString();

    if (!/import\s*(\*\s+as)?\s*React/.test(source)) {
      source = `import React from 'react';\n${source}`;
    }
    const { code } = transformSync(source.toString(), { loader: 'jsx', format: 'esm' });

    return {
      format: 'module',
      source: code,
      shortCircuit: true,
    };
  }
  return nextLoad(url, context);
}
