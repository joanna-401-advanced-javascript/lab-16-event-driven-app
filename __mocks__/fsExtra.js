'use strict';

const readFile = (file) => {
  return new Buffer('test string');
};

// EXAMPLE FROM LAB 3
// exports.readFile = (file, cb) => {
//   if( file.match(/bad/i) ) {
//     cb('Invalid File');
//   }
//   else {
//     cb(undefined, new Buffer('File Contents'));
//   }
// };

module.exports = {readFile};