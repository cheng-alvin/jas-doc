#! /bin/node

// TODO revise and do it properly

// argv 2 is considered base dir
// File extension to look for
const extension = '.md';

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

      if (entry.isDirectory()) {
        walk(fullPath);
      } else if (entry.isFile() && path.extname(entry.name) === normalizedExt) {
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