// Blockchan 0.1.0
var Storage = require('./lib/storage.js')();
var BC = {};
module.exports = BC;

BC.grow = function(seed){
  if(seed){
    return Trees.grow(seed);
  } else {
    return Trees.grow('blockchan');
  }
};

function Leaf(config){
  this.seed = config.seed;
  this.tree = config.tree;
  this.children = [];
  this.content = content;
}

// Create a leaf replying to this one:
Leaf.prototype.bud = function(content){
  this.grow(new Leaf(content, this));
}
Leaf.prototype.children = function(){
  this.tree.adapter.getChildren()
}

var Tree = function(config){
  this.seed = config.seed;
  this.adapter = Storage.memoryAdapter;
  this.root = new Leaf({
    seed: config.seed,
    parent: '',
    tree: this,
  });
  return this;
}

// Ask the adapter for children of the root
// Recursively continue until the adapter reports no further leaves
Tree.prototype.walkGet = function(){
  var self = this;
  function loadChildren(leaf){
    return self.root.children()
  }
}

Tree.prototype.data = function(adapter){
  this.setter = adapter.setter;
  this.getter = adapter.getter;
}

var Trees = {};
Trees.grow = function(seed){
  var result = new Tree({seed: seed});
  return result;
}

Trees.find = function(seed){

}
}