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
]).filter("string.lowercase", [ function() {
  return function(str){
      return (str || '').toLowerCase();
    }
  }
]).filter("string.uppercase", [ function() {
  return function(str){
      return (str || '').toUpperCase();
    }
  }
]).filter("string.camelcase", [ function(){
 return function(str){
    return (str || '').toLowerCase().replace(/(\s.|^.)/g, function(match, group) {
        return group ? group.toUpperCase() : '';
    });
  } 
 }                
]).filter("string.trim", [ function(){
 return function(str){
    return (str || '').replace(/(^\s*|\s*$)/g, function(match, group) {
        return '';
    });
  } 
 }                
]).filter("string.trimstart", [ function(){
 return function(str){
   return (str || '').replace(/(^\s*)/g, function(match, group) {
        return '';
    });
  } 
 }                
]).filter("string.trimend", [ function(){
 return function(str){
    return (str || '').replace(/(\s*$)/g, function(match, group) {
        return '';
    });  
  } 
 }                
]).filter("string.replace", [ function(){
 return function(str, pattern, replacement){
    try {
      return (str || '').replace(pattern,replacement);  
    } catch(e) {
      console.error("error in string.replace", e);
      return (str || '');
    }     
  } 
 }                
]).filter("math.max", [ function(){
 return function(arr){
    if (!arr) return arr;
    return Math.max.apply(null, arr);  
  } 
 }                
]).filter("math.min", [ function(){
 return function(arr){
    if (!arr) return arr;
    return Math.min.apply(null, arr);   
  } 
 }                
]).filter("array.join", [ function(){
 return function(arr,seperator){
    if (!arr) return arr;
    return arr.join(seperator || ',');   
  } 
 }                
]).filter("array.reverse", [ function(){
 return function(arr){
    if (!arr) return arr;
    return arr.reverse();   
  } 
 }                
]);
