'use strict';

const fsExtra = require('fs-extra');
const events = require('./modular-events/events');
require('./modular-events/logger');

events.on('read', readFile);
events.on('convert', convertUppercase);
events.on('save', saveFile);

function readFile(file){
  return fsExtra.readFile(file)
    .then(data => {
      events.emit('read log', data);
      events.emit('convert', file, data);
    })
    .catch(error => events.emit('error', error));
}

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

function saveFile(file, newText){
  return fsExtra.writeFile(file, newText)
    .then(() => {
      events.emit('save log', 'success!');
      console.log(`${file} saved`);
    })
    .catch(error => events.emit('error', error));
}

let file = process.argv.slice(2).shift();
events.emit('read', file);
