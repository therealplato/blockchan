// Blockchan 0.1.0
var Tree = require('./lib/Tree.js');
var Leaf = require('./lib/Leaf.js');
var BC = {};
module.exports = BC;

BC.grow = function(seed){
  if(seed){
    return Trees.grow(seed);
  } else {
    return Trees.grow('blockchan');
  }
};

var Trees = {};
Trees.grow = function(seed){
  var result = new Tree({seed: seed});
  return result;
}

Trees.find = function(seed){

}