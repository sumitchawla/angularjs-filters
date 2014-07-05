var assert = chai.assert;
describe("ch.filters - Tests", function() {
  beforeEach(module('ch.filters'));
  
  it('Tests debug.print filter', inject(function($filter) {
    var filter = $filter('debug.print');
    assert(filter('test') == 'test');
  }));
});

