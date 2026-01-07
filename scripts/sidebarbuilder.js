#! /bin/node

/**
 * A simple function for constructing the sidebar of the 'references'
 * portion of the Jas documentation. Outputs the listing of the directory
 * to the standard output, allowing it to be redirected into a file, 
 * which typically is `mkdocs.yml`
 *
 * @usage $ node sidebarbuilder.js <directory>
 * 
 * To preserve source history, Jas' documentation repository omits the 
 * actual `mkdocs.yml` file and uses a generic `config.yml` for general 
 * configuration settings, appending it with the output of this script
 * into the actual `mkdocs.yml` file.
 *
 * @license MIT
 * Copyright (c) 2026 Alvin Cheng <eventide1029@gmail.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */

const extension = `.md`;

console.log('\n  - Reference:');  // Boilerplate for sidebar

const fs = require('fs');
const path = require('path');

function findFilesWithExtension(rootDir, ext) {
  const results = [];
  const names = [];
  const normalizedExt = ext.startsWith('.') ? ext : '.' + ext;

  function walk(dir) {
    const entries = fs.readdirSync(dir, {withFileTypes: true});

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      const extName = path.extname(entry.name) === normalizedExt;

      if (entry.isDirectory())
        walk(fullPath);
      else if (entry.isFile() && extName) {
        results.push(fullPath.replace(`/${rootDir}/`, ''));
        names.push(entry.name);
      }
    }
  }

  walk(rootDir);
  return {files: results, fileNames: names};
}

const files = findFilesWithExtension(process.argv[2], extension);

for (let i = 0; i < files.files.length; i++) {
  const name = files.fileNames[i].replace(extension, '');
  const path = files.files[i];

  const content = `         - ${name}: ${path}`;
  console.log(content);
}

process.exit(0);