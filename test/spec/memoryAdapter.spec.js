console.log('memoryAdapter.spec.js')
describe('memoryAdapter.js', function(){
  var ma;
  it('requires', function(){
    function tryRequire(){
      ma = require('../../lib/memoryAdapter.js');
    }
    expect(tryRequire).not.toThrow();
  })

  it('has getter and setter functions', function(){
    expect(typeof ma.getter).toBe('function');
    expect(typeof ma.setter).toBe('function');
  })
})