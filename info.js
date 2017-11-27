#!/usr/bin/env node
require('fs').readFile('./info.json', (_err, buf) => {
  process.stdout.write(buf);
});
