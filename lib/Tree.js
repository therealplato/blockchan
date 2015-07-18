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

module.exports = Tree;
