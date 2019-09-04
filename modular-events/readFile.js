'use strict';

const fsExtra = require('fs-extra');
const events = require('./events');
require('./logger');

function readFile(file){
  return fsExtra.readFile(file)
    .then(data => {
      events.emit('read log', data);
      events.emit('convert', file, data);
    })
    .catch(error => events.emit('error', error));
}

module.exports = readFile;