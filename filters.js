angular.module("ch.filters",[])
.filter("debug.print", [ function() {
  return function(str){
      console.log("ch.filters.debug.print", str);
      return str;
    }
  }
])
.filter("boolean.YesNo", [ function() {
  return function(b){
      return b === true? 'Yes' : 'No';
    }
  }
])
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
]);
