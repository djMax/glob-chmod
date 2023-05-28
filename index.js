#!/usr/bin/env node
const fs = require('fs');
const glob = require('glob');

const mode = process.argv[2];
const globs = process.argv.slice(3);

for (let i = 0; i < globs.length; i++) {
  const files = glob.sync(globs[i]);
  for (let j = 0; j < files.length; j++) {
    fs.chmodSync(files[j], mode);
  }
}
