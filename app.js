'use strict';

// const fsExtra = require('fs-extra');
const events = require('./modular-events/events');
// require('./modular-events/logger');

const readFile = require('./modular-events/readFile');
const convertUppercase = require('./modular-events/uppercase');
const writeFile = require('./modular-events/writeFile');

events.on('read', readFile);
events.on('convert', convertUppercase);
events.on('save', writeFile);

let file = process.argv.slice(2).shift();
events.emit('read', file);