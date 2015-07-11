var fs = require('fs');
module.exports = function(){
  var Storage = {};
  Storage.memoryAdapter = require('./memoryAdapter.js');
  return Storage;
}