'use strict';

var __chunk_1 = require('./chunk-ca3a1cbb.js');

function fn () {
  console.log('lib1 fn');
}

function fn$1 () {
  fn();
  console.log('dep3 fn');
}

class Main2 {
  constructor () {
    fn$1();
    __chunk_1.fn();
  }
}

module.exports = Main2;
//# sourceMappingURL=main2.js.map
