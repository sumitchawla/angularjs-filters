angular.module("ch.filters",[])
.filter("debug.print", [ function() {
  return function(str){
      console.log("ch.filters.debug.print", str);
      return str;
    }
  }
])
/***  Boolean Filters *****/
.filter("boolean.YesNo", [ function() {
  return function(b){
      return b === true? 'Yes' : 'No';
    }
  }
])
/***  String Filters *****/
.filter("string.format", [ function() {
  return function(str){
      if (!str || arguments.length <=1 ) return str;
      var args = arguments;
      for (var i = 1; i < arguments.length; i++) {       
        var reg = new RegExp("\\{" + (i - 1) + "\\}", "gm");             
        str = str.replace(reg, arguments[i]);
      }
      return str;
    }
  }
]).filter("string.html2string", [ function() {
  return function(str){
      if (!str) return str;
      return $('<div/>').html(str).text();
    }
  }
]).filter("string.shorten", [ function() {
  return function(str,length){
      if (!str || !length || str.length <= length) return (str || '');
      return  str.substr(0, length) + (length <= 3 ? '' : '...');
    }
  }
]);
