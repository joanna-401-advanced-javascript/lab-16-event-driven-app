'use strict';

const events = require('./events');

events.on('read log', payload => log('read log', payload.toString()));
events.on('uppercase log', payload => log('uppercase log', payload.toString()));
events.on('save log', payload => log('save log', payload));

events.on('error', error =>  console.error(error));

function log(event, payload){
  let time = new Date();
  console.log({event, time, payload});
}
