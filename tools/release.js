'use strict';

import * as fs from 'fs';

const packageFile = JSON.parse(fs.readFileSync('package.json', {encoding: 'utf-8'}));
packageFile['module'] = 'commonjs';
packageFile['main'] = 'jsonpatcherproxy.js';
fs.writeFileSync('commonjs/package.json', JSON.stringify(packageFile));
fs.copyFileSync('index.d.ts', 'commonjs/index.d.ts');
fs.copyFileSync('README.md', 'commonjs/README.md');
