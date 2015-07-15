   
function executeTests () {

   it('Tests print filter', inject(function($filter) {
     var filter = $filter('print');
     assert(filter('test') == 'test');
   }));


   it('Tests YesNo filter', inject(function($filter, $rootScope, $compile) {
    var filter = $filter('YesNo');
    assert.equal(filter(null),'No');
    assert.equal(filter(),'No');
    assert.equal(filter(false),'No');
    assert.equal(filter(true),'Yes');

    var $scope = $rootScope.$new();
    var elem = $compile('<div>{{ MyBoolean | YesNo }}</div>')($scope);
    $scope.$digest();
    assert.equal($(elem).text(),'No');
    ($scope.MyBoolean = false) && $scope.$digest();
    assert.equal($(elem).text(),'No');
    ($scope.MyBoolean = true) && $scope.$digest();
    assert.equal($(elem).text(),'Yes');
   }));

   it('Tests format filter', inject(function($filter) {
     var filter = $filter('format');
     assert.equal(filter('Hello {0}. What are you been doing this {1}?', 'Sam', 'Sunday') , 'Hello Sam. What are you been doing this Sunday?');
   }));

   it('Tests html2string filter', inject(function($filter) {
     var filter = $filter('html2string');
     assert.equal(filter('Hello <br/>. How are you?') , 'Hello . How are you?');
   }));

   it('Tests shorten filter', inject(function($filter) {
     var filter = $filter('shorten');
     assert.equal(filter('', 3) , '');
     assert.equal(filter('', 1) , '');
     assert.equal(filter(null, 1) , '');
     assert.equal(filter(undefined, 1) , '');
     assert.equal(filter('Hello', 20) , 'Hello');
     assert.equal(filter('Hello', 5) , 'Hello');
     assert.equal(filter('Hello', 3) , 'Hel');
     assert.equal(filter('A long story cut into short', 12) , 'A long story...');
   }));

   it('Tests lowercase filter', inject(function($filter) {
     var filter = $filter('lowercase');
     assert.equal(filter('') , '');
     assert.equal(filter(null) , '');
     assert.equal(filter(undefined) , '');
     assert.equal(filter('Hello') , 'hello');
     assert.equal(filter('HeLLo') , 'hello');
     assert.equal(filter('HeLLo ##453$$') , 'hello ##453$$');
     assert.equal(filter('A Long Story - 1943') , 'a long story - 1943');
     assert.equal(filter('1943') , '1943');
   }));

   it('Tests uppercase filter', inject(function($filter) {
     var filter = $filter('uppercase');
     assert.equal(filter('') , '');
     assert.equal(filter(null) , '');
     assert.equal(filter(undefined) , '');
     assert.equal(filter('Hello') , 'HELLO');
     assert.equal(filter('HeLLo') , 'HELLO');
     assert.equal(filter('HeLLo ##453$$') , 'HELLO ##453$$');
     assert.equal(filter('A Long Story - 1943') , 'A LONG STORY - 1943');
     assert.equal(filter('1943') , '1943');
   }));

    it('Tests camelcase filter', inject(function($filter) {
     var filter = $filter('camelcase');
     assert.equal(filter('') , '');
     assert.equal(filter(null) , '');
     assert.equal(filter(undefined) , '');
     assert.equal(filter('Hello') , 'Hello');
     assert.equal(filter('HeLLo') , 'Hello');
     assert.equal(filter(' HeLLo') , ' Hello');
     assert.equal(filter(' HeLLo ') , ' Hello ');
     assert.equal(filter('HeLLo ##453$$') , 'Hello ##453$$');
     assert.equal(filter('A Long Story - 1943') , 'A Long Story - 1943');
     assert.equal(filter('A Long Story - 1943') , 'A Long Story - 1943');
     assert.equal(filter(' a long story - 1943') , ' A Long Story - 1943');
     assert.equal(filter('foo-bar') , 'Foo-bar');
     assert.equal(filter('-foo-bar') , '-foo-bar');
     assert.equal(filter('1943') , '1943');
   }));

   it('Tests trim filter', inject(function($filter) {
     var filter = $filter('trim');
     assert.equal(filter('') , '');
     assert.equal(filter(null) , '');
     assert.equal(filter(undefined) , '');
     assert.equal(filter('Hello') , 'Hello');
     assert.equal(filter(' Hello') , 'Hello');
     assert.equal(filter('  Hello') , 'Hello');
     assert.equal(filter('Hello ') , 'Hello');
     assert.equal(filter('Hello  ') , 'Hello');
     assert.equal(filter(' Hello ') , 'Hello');
     assert.equal(filter('  Hello  ') , 'Hello');
     assert.equal(filter('a long story - 1943') , 'a long story - 1943');
     assert.equal(filter(' a long story - 1943') , 'a long story - 1943');
     assert.equal(filter('a long story - 1943 ') , 'a long story - 1943');
   }));
 

    it('Tests trimstart filter', inject(function($filter) {
     var filter = $filter('trimstart');
     assert.equal(filter('') , '');
     assert.equal(filter(null) , '');
     assert.equal(filter(undefined) , '');
     assert.equal(filter('Hello') , 'Hello');
     assert.equal(filter(' Hello') , 'Hello');
     assert.equal(filter('  Hello') , 'Hello');
     assert.equal(filter('Hello ') , 'Hello ');
     assert.equal(filter('Hello  ') , 'Hello  ');
     assert.equal(filter(' Hello ') , 'Hello ');
     assert.equal(filter('  Hello  ') , 'Hello  ');
     assert.equal(filter('a long story - 1943') , 'a long story - 1943');
     assert.equal(filter(' a long story - 1943') , 'a long story - 1943');
     assert.equal(filter('a long story - 1943 ') , 'a long story - 1943 ');
   }));

   it('Tests trimend filter', inject(function($filter) {
     var filter = $filter('trimend');
     assert.equal(filter('') , '');
     assert.equal(filter(null) , '');
     assert.equal(filter(undefined) , '');
     assert.equal(filter('Hello') , 'Hello');
     assert.equal(filter(' Hello') , ' Hello');
     assert.equal(filter('  Hello') , '  Hello');
     assert.equal(filter('Hello ') , 'Hello');
     assert.equal(filter('Hello  ') , 'Hello');
     assert.equal(filter(' Hello ') , ' Hello');
     assert.equal(filter('  Hello  ') , '  Hello');
     assert.equal(filter('a long story - 1943') , 'a long story - 1943');
     assert.equal(filter(' a long story - 1943') , ' a long story - 1943');
     assert.equal(filter('a long story - 1943 ') , 'a long story - 1943');
   }));

   it('Tests replace filter', inject(function($rootScope,$filter, $compile) {
     var filter = $filter('replace');
     //assert.equal(filter('') , '');
     //assert.equal(filter(null) , '');
     //assert.equal(filter(undefined) , '');
	 assert.equal(filter('Hello', 'Hello', 'Yes') , 'Yes');
	 assert.equal(filter('9.7', '\\.', ',') , '9,7');
	 assert.equal(filter(9.7, '\\.', ',') , '9,7');
     assert.equal(filter('Hello Mr How are you doing', 'Mr', 'Mr.') , 'Hello Mr. How are you doing');
     //Regex replacements
     assert.equal(filter('Hello Mr How are you doing', 'H', 'Y') , 'Yello Mr Yow are you doing');
     assert.equal(filter('Hello', "\\s",'Mr') , 'Hello');
     assert.equal(filter('a long story - 1943',"[0-9]", '2') , 'a long story - 2222');
     assert.equal(filter('a long story - 1943',"[0-9]", '2', false) , 'a long story - 2943');

     //Test regex using compile	
     var $scope = $rootScope.$new();
     var elem = $compile('<div>{{ "a long story - 1943" | replace:"[0-9]":"2" }}</div>')($scope);
     $scope.$digest();
     assert.equal($(elem).text(),'a long story - 2222');
     elem = $compile('<div>{{ "Some Mandatory caption" | replace:"Man[a-z]*":"" }}</div>')($scope);
     $scope.$digest();
     assert.equal($(elem).text(),'Some  caption');
     elem = $compile('<div>{{ "Hello How Hello How" | replace:"Hello":"" }}</div>')($scope);
     $scope.$digest();
     assert.equal($(elem).text(),' How  How');
     elem = $compile('<div>{{ "Hello How Hello How" | replace:"Hello":"":false }}</div>')($scope);
     $scope.$digest();
     assert.equal($(elem).text(),' How Hello How');
     elem = $compile('<div>{{"hello help"| replace:"he[a-z]{2}":"Yell" }}</div>')($scope);
     $scope.$digest();
     assert.equal($(elem).text(),'Yello Yell');
   }));

   it('Tests max filter', inject(function($filter) {
     var filter = $filter('max');
     assert.equal(filter('') , '');
     assert.equal(filter(null) , null);
     assert.equal(filter(undefined) , undefined);
     assert.equal(filter([1, 2, 3, 4]) , 4);
     assert.equal(filter([1, 2,1, 4, 3, 4]) , 4);
     assert.equal(filter([1, 2, -5 , 6, 3, 4]) , 6);
     assert.equal(filter([8, 1, 2, 3, 7]) , 8);
   }));

  it('Tests min filter', inject(function($filter) {
     var filter = $filter('min');
     assert.equal(filter('') , '');
     assert.equal(filter(null) , null);
     assert.equal(filter(undefined) , undefined);
     assert.equal(filter([1, 2, 3, 4]) , 1);
     assert.equal(filter([1, 2,1, 4, 3, 4]) , 1);
     assert.equal(filter([1, 2, -5 , 6, 3, 4]) , -5);
     assert.equal(filter([8, 1, 2, 3, 7]) , 1);
     assert.equal(filter([8, 1, 0, 2, 3, 7]) , 0);
     assert.equal(filter([8, 1, 0, 2, 3, 7, -1]) , -1);
   }));

  it('Tests join filter', inject(function($filter) {
     var filter = $filter('join');
     assert.equal(filter('') , '');
     assert.equal(filter(null) , null);
     assert.equal(filter(undefined) , undefined);
     assert.equal(filter([1, 2, 3, 4]) , '1,2,3,4');
     assert.equal(filter(["Banana", "Orange", "Apple", "Mango"]) , 'Banana,Orange,Apple,Mango');
   }));

   it('Tests reverse filter', inject(function($filter) {
     var filter = $filter('reverse');
     assert.equal(filter('') , '');
     assert.equal(filter(null) , null);
     assert.equal(filter(undefined) , undefined);
     assert.deepEqual(filter([1, 2, 3, 4]), [4, 3, 2, 1]);
     assert.deepEqual(filter(["Banana", "Orange", "Apple", "Mango"]) , [  "Mango","Apple","Orange", "Banana"]);
   }));
}
