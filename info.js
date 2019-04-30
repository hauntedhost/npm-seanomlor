#!/usr/bin/env node
require('fs').readFile(`${__dirname}/info.json`, (_err, buf) => {
  process.stdout.write(buf);
});
