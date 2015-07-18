
describe('blockchan', function(){
  var blockchan;
  it('requires, returning an object', function(){
    function tryRequire(){
      blockchan = require('../../index.js');
    }
    expect(tryRequire).not.toThrow();
    expect(typeof blockchan).toBe('object');
  })
})