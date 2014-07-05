
describe("ch.filters - Tests", function() {
  beforeEach(module('ch.filters'));
  
  it('Tests debug.print filter', inject(function($filter) {
    var filter = $filter('debug.print');
    assert.equal(filter('test'),'test');
  }));
});

