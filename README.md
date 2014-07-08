[![Build Status](https://travis-ci.org/sumitchawla/angularjs-filters.svg?branch=master)](https://travis-ci.org/sumitchawla/angularjs-filters) [![Dependency Status](https://david-dm.org/sumitchawla/angularjs-filters.png)](https://david-dm.org/sumitchawla/angularjs-filters) [![devDependency Status](https://david-dm.org/sumitchawla/angularjs-filters/dev-status.png)](https://david-dm.org/sumitchawla/angularjs-filters#info=devDependencies)

angularjs-filters
=================

A library of common AngularJS filters.


### String Filters

 * string.format

```js
    ng-text="'Hello {0}. What are you been doing this {1}?' | string.format : 'Sam' : 'evening' " 
```
 * string.html2string
 
```js
    ng-text="'Hello <br/>. How are you?}?' | string.html2string " 
  //Returns
  Hello . How are you?
```
 * string.shorten
 
```js
    ng-text="'A long story cut into short' | string.shorten : 12 " 
  //Returns
  A long story...
```

 * string.camelcase 
    Convert the string to Camel Case
```js
    ng-text="'A long story cut into short' | string.camelcase" 
  //Returns
  A Long Story Cut Into Short
```

 * string.lowercase
 
```js
    ng-text="'Convert to LOWERCASE' | string.lowercase " 
  //Returns
  convert to lowercase
```

 * string.uppercase
 
```js
    ng-text="'uppercase all' | string.uppercase " 
  //Returns
  UPPERCASE ALL
```

<table>
  <tr>
   <td> Test Table</td>
   <td> Test Table</td>
  </tr>
</table>

