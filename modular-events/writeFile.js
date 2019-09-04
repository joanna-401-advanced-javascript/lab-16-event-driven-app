'use strict';

const fsExtra = require('fs-extra');
const events = require('./events');
require('./logger');


function writeFile(file, newText){
  return fsExtra.writeFile(file, newText)
    .then(() => {
      events.emit('save log', 'Success!');
      console.log(`${file} saved`);
    })
    .catch(error => events.emit('error', error));
}

module.exports = writeFile;