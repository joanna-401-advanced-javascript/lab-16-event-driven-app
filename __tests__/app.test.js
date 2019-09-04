'use strict';

const readFile = require('../modular-events/readFile');
const convertUppercase = require('../modular-events/uppercase');
const writeFile = require('../modular-events/writeFile');
require('../modular-events/logger');

describe('Test event handlers', () => {
  test('It can read a file', () => {
    let file = 'test string';

    return readFile(file)
      .then(data => {
        expect(data).toEqual('test string');
      })
      .catch(console.log);
  });
});