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

   it('Tests string.html2string filter', inject(function($filter) {
     var filter = $filter('string.html2string');
     assert.equal(filter('Hello <br/>. How are you?') , 'Hello . How are you?');
   }));

   it('Tests string.shorten filter', inject(function($filter) {
     var filter = $filter('string.shorten');
     assert.equal(filter('', 3) , '');
     assert.equal(filter('', 1) , '');
     assert.equal(filter(null, 1) , '');
     assert.equal(filter(undefined, 1) , '');
     assert.equal(filter('Hello', 20) , 'Hello');
     assert.equal(filter('Hello', 5) , 'Hello');
     assert.equal(filter('Hello', 3) , 'Hel');
     assert.equal(filter('A long story cut into short', 12) , 'A long story...');
   }));

   it('Tests string.lowercase filter', inject(function($filter) {
     var filter = $filter('string.lowercase');
     assert.equal(filter('') , '');
     assert.equal(filter(null) , '');
     assert.equal(filter(undefined) , '');
     assert.equal(filter('Hello') , 'hello');
     assert.equal(filter('HeLLo') , 'hello');
     assert.equal(filter('HeLLo ##453$$') , 'hello ##453$$');
     assert.equal(filter('A Long Story - 1943') , 'a long story - 1943');
     assert.equal(filter('1943') , '1943');
   }));

   it('Tests string.uppercase filter', inject(function($filter) {
     var filter = $filter('string.uppercase');
     assert.equal(filter('') , '');
     assert.equal(filter(null) , '');
     assert.equal(filter(undefined) , '');
     assert.equal(filter('Hello') , 'HELLO');
     assert.equal(filter('HeLLo') , 'HELLO');
     assert.equal(filter('HeLLo ##453$$') , 'HELLO ##453$$');
     assert.equal(filter('A Long Story - 1943') , 'A LONG STORY - 1943');
     assert.equal(filter('1943') , '1943');
   }));

    it.skip('Tests string.camelcase filter', inject(function($filter) {
     var filter = $filter('string.camelcase');
     assert.equal(filter('') , '');
     assert.equal(filter(null) , '');
     assert.equal(filter(undefined) , '');
     assert.equal(filter('Hello') , 'Hello');
     assert.equal(filter('HeLLo') , 'Hello');
     assert.equal(filter('HeLLo ##453$$') , 'Hello ##453$$');
     assert.equal(filter('A Long Story - 1943') , 'A Long Story - 1943');
     assert.equal(filter('a long story - 1943') , 'A Long Story - 1943');
     assert.equal(filter('1943') , '1943');
   }));
});

