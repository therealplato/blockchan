var _ = require('underscore');

function Rule(config){
  _.extend(this, config);
}

Rule.prototype.validateInputs = function(){
  // Save reference to the arguments object:
  var vArgs = arguments;
  // Iterate through input validation sets looking for a matching argument signature:
  var matches = _.filter(this.inputs, function(input){
    if(input.length === vArgs.length){
      for(var i=0; i<input.length; i++){
        var invokedType = typeof vArgs[i];
        var expectedType = input[i];
        if(invokedType !== expectedType){
          // Expected one type, got another
          return false;
        }
      }
      // We made it past the length check and every input type check
      return true;
    } else {
      return false;
    }
  });
  return matches.length > 0;
};

Rule.prototype.evaluate = function(){
  console.log('rule.evaluate:', JSON.stringify(arguments, null, 2));
  var valid = this.validateInputs.apply(this, arguments);
  if(!valid){
    throw new Error('Inputs not applicable to the code for this rule')
  }
  if(!typeof this.code === 'function'){
    throw new Error('Cannot evaluate this rule without code')
  }
  return this.code.apply(this, arguments);
};
module.exports = Rule;