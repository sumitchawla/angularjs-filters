angular.module("ch.filters",[])
.filter("debug.print", [ function() {
  return function(str){
      console.log("ch.filters.debug.print", str);
      return str;
    }
  }
]);
