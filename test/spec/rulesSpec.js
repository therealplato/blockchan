describe('rulesSpec.js', function(){
  var jsonStringRule = {
    text: "it validates as json",
    inputs: [{
      length: 1,
      "0": "string",
    }],
    code: function(){
      console.log('jsonStringRule', arguments);
      try{
        JSON.parse(arguments[0])
      } catch(e){
        return false
      };
      return true
    }
  }

  var blacklistRule = {
    text: "the second input exceeds the first input",
    inputs: [{
      length: 2,
      "0": "number",
      "1": "number",
    }],
    code: function(){
      if(isNaN(arguments[0]) || isNaN(arguments[1])){
        throw new Error('blacklistRule needs two numbers')
      }
      return arguments[1] > arguments[0];
    }
  }

  var Rule;
  it('requires', function(){
    function tryRequire(){
      Rule = require('../mockRules.js');
    }
    expect(tryRequire).not.toThrow();
  })

  var rule;
  describe('constructor', function(){
    it('constructs a rule', function(){
      function tryConstruct(){
        rule = new Rule(jsonStringRule);
      }
      expect(tryConstruct).not.toThrow();
      expect(rule.text).toMatch('json');
    })

  })
  describe('instance', function(){

    describe('.evaluate()', function(){
      it('returns false if the input fails the rule', function(){
        var result;
        function tryEvaluate(){
          result = rule.evaluate("NOT JSON")
        }
        expect(tryEvaluate).not.toThrow();
        expect(result).toBe(false);
      })

      it('returns true if the input passes the rule', function(){
        var result;
        function tryEvaluate(){
          result = rule.evaluate('{"JSON": true}')
        }
        expect(tryEvaluate).not.toThrow();
        expect(result).toBe(true);
      })

      it('throws an error if the input does not validate', function(){
        function tryEvaluate(){
          rule.evaluate()
        }
        expect(tryEvaluate).toThrow();
      })

    })

    xdescribe('.validateInputs', function(){
    })

  })

})
