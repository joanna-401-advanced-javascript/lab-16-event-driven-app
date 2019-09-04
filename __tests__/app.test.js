'use strict';

const app = require('../app');
// const events = require('../modular-events/events');
require('../modular-events/logger');

describe('Test event handlers', () => {
  test('It can read a file', () => {
    let file = 'test string';

    return app.readFile(file)
      .then(data => {
        expect(data).toEqual('test string');
      })
      .catch(console.log);
  });
});