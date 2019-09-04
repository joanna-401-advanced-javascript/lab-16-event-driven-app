'use strict';

const events = require('./events');
require('./logger');

function convertUppercase(file, data){
  if (data){
    let text = data.toString().toUpperCase();
    let newText = Buffer.from(text);
    events.emit('uppercase log', newText);
    events.emit('save', file, newText);
  } else {
    events.emit('error', error);
  }
}

module.exports = convertUppercase;