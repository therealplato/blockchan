var Storage = require('./lib/storage.js')();
// Blockchan 0.1.0
module.exports = function(opts){
  var BC = {};
  BC.seed = function(seed){
    if(seed){
      return Trees.find(seed);
    } else {
      return Trees.grow('blockchan');
    }
  };
  return BC;
}

function Leaf(content, parent){
  this.seed = parent.seed;
  this.content = content;
}

function Trees(){
  var OneTree = function(config){
    this.seed = config.seed;
    this.getter = Storage.memoryAdapter.getter;
    this.setter = Storage.memoryAdapter.setter;
    return this;
  }
  OneTree.prototype.bud = function(content){
    this.grow(new Leaf(content, this));
  }
  OneTree.prototype.grow = function(leaf){

  }
  OneTree.prototype.data = function(adapter){
    this.setter = adapter.setter;
    this.getter = adapter.getter;
  }

  var Trees = {};
  Trees.grow = function(seed){
    return new OneTree({seed: seed});
  }

  Trees.find = function(seed){

  }
}