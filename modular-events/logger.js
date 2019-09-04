'use strict';
/**
 * APIServerModule
 * @module modular-events/logger
 */

const events = require('./events');

events.on('read log', payload => log('read log', payload));
events.on('uppercase log', payload => log('uppercase log', payload));
events.on('save log', payload => log('save log', payload));

events.on('error', error =>  console.error(error));

/**
 * This logs the event, time of event, and payload
 * @param event
 * @param payload
 */
function log(event, payload){
  let time = new Date();
  console.log({event, time, payload});
}
