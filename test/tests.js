var assert = chai.assert;
describe("ch.filters - Tests", function() {
  beforeEach(module('ch.filters'));
  
   console.log("jQuery Version", $().jquery);
   it('Tests debug.print filter', inject(function($filter) {
     var filter = $filter('debug.print');
     assert(filter('test') == 'test');
   }));


   it('Tests boolean.YesNo filter', inject(function($filter, $rootScope, $compile) {
    var filter = $filter('boolean.YesNo');
    assert.equal(filter(null),'No');
    assert.equal(filter(),'No');
    assert.equal(filter(false),'No');
    assert.equal(filter(true),'Yes');

    var $scope = $rootScope.$new();
    var elem = $compile('<div>{{ MyBoolean | boolean.YesNo }}</div>')($scope);
    $scope.$digest();
    assert.equal($(elem).text(),'No');
    ($scope.MyBoolean = false) && $scope.$digest();
    assert.equal($(elem).text(),'No');
    ($scope.MyBoolean = true) && $scope.$digest();
    assert.equal($(elem).text(),'Yes');
   }));

   it('Tests string.format filter', inject(function($filter) {
     var filter = $filter('string.format');
     assert.equal(filter('Hello {0}. What are you been doing this {1}?', 'Sam', 'Sunday') , 'Hello Sam. What are you been doing this Sunday?');
   }));

});

