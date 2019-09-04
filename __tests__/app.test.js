// 'use strict';
//
// const readFile = require('../modular-events/readFile');
// const convertUppercase = require('../modular-events/uppercase');
// const writeFile = require('../modular-events/writeFile');
// require('../modular-events/logger');
//
// const fsExtra = require('../__mocks__/fsExtra');
// jest.mock('../__mocks__/fsExtra');
//
// // const mock = require('mock-fs');
//
// // beforeEach(function() {
// //   let file = mock({
// //     'fake.txt': 'file contents'
// //   });
// // });
// //
// // afterEach(mock.restore);
// let file = 'test';
//
// describe('Test event handlers', () => {
//   test('It can read a file', () => {
//     fsExtra.readFile(file);
//
//     return readFile(file)
//       .then(data => {
//         expect(data).toEqual('test string');
//       })
//       .catch(console.log);
//   });
//
//   // mock.restore();
// });