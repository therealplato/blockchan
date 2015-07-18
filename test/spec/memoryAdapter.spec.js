describe('memoryAdapter.js', function(){
  var ma;
  it('requires, returning an object', function(){
    function tryRequire(){
      ma = require('../../lib/memoryAdapter.js');
    }
    expect(tryRequire).not.toThrow();
    expect(typeof ma).toBe('object');
  })

  it('has getter and setter functions', function(){
    expect(typeof ma.getter).toBe('function');
    expect(typeof ma.setter).toBe('function');
  })
})
