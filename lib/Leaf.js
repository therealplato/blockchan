
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

module.exports = Leaf;