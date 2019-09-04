'use strict';

const fsExtra = require('fs-extra');
const events = require('./events');
require('./logger');

/**
 * Handles reading the file
 * @param file
 * @returns {Promise<T>}
 */
function readFile(file){
  return fsExtra.readFile(file)
    .then(data => {
      events.emit('read log', data.toString());
      events.emit('convert', file, data);
    })
    .catch(error => events.emit('error', error));
}

module.exports = readFile;