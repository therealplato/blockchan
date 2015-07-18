var _ = require('underscore');
// memory adapter
var data = {
  'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855': {
    hash: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
    parent: null,
    content: '',
  }
};
//var dataFlat = [];

module.exports = {
  getChildren: function(config, callback){
    // Walk data object
    data[config.leaf.hash]
  },
  removeLeaf: function(leaf, callback){
    dataFlat = _reject(dataFlat, function(leaf2){
      leaf2.hash === leaf.hash
    })
  },
  writeLeaf: function(leaf, callback){
    var current = data[config.hash];
    if(current){
      var iToRemove = indexOf(current));
      var left = dataFlat.slice(0, iToRemove);
      var right = dataFlat.slice(iToRemove+1);
      dataFlat = left.concat(right);
    }
    data[config.hash] = undefined;
  }
}