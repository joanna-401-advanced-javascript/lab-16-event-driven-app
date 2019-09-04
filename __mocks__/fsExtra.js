'use strict';

const readFile = (file, callback) => {
  if (file.match(/bad/i)) {
    callback('Invalid file');
  } else {
    callback(new Buffer('File Contents'));
  }
};

//
// exports.readFile = (file, cb) => {
//   if( file.match(/bad/i) ) {
//     cb('Invalid File');
//   }
//   else {
//     cb(undefined, new Buffer('File Contents'));
//   }
// };

module.exports = {readFile};