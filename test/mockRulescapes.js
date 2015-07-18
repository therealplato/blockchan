var async = require('async');
function Rulescape(config){
  this.config = config || {};
  this.rules = [];
};

Rulescape.prototype.evaluate = function(input, callback){
  async.map(this.rules, function(rule, done){
    rule.evaluate(input, done);
  },
  function(err, results){
    callback(err, results);
  })
}

Rulescape.prototype.hasRule = function(rule){
  return this.rules.indexOf(rule) !== -1
}

Rulescape.prototype.addRule = function(rule){
  if(this.rules.indexOf(rule) === -1){
    this.rules.push(rule);
  }
}

Rulescape.prototype.list = function(){
  return this.rules.map(function(rule){
    return JSON.stringify(rule, null, 2)
  })
}

module.exports = Rulescape;
