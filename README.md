[![Build Status](https://travis-ci.org/sumitchawla/angularjs-filters.svg?branch=master)](https://travis-ci.org/sumitchawla/angularjs-filters) [![Dependency Status](https://david-dm.org/sumitchawla/angularjs-filters.png)](https://david-dm.org/sumitchawla/angularjs-filters) [![devDependency Status](https://david-dm.org/sumitchawla/angularjs-filters/dev-status.png)](https://david-dm.org/sumitchawla/angularjs-filters#info=devDependencies)

angularjs-filters
=================

A library of common AngularJS filters. Each filter is individually tested for various inputs.  The module can be used by using the filter.js in your browser includes, or by using npm module ( with browserify).

### Installation
    bower install angularjs-filters

### String Filters
<table>
  <tr>
   <th>Filter</th>
   <th>Usage</th>
   <th>Result</i></th>
  </tr>
  <tr>
   <td><i><b>format</b></i></td>
   <td><i>'Hello {0}. What are you been doing this {1}?' | string.format : 'Sam' : 'evening'</i></td>
   <td><i>Hello Sam. What are you been doing this evening?</i></td>
  </tr>
  <tr>
   <td><i><b>html2string</b></i></td>
   <td><i>'Hello &lt;br/&gt;. How are you?' | string.html2string</i></td>
   <td><i>Hello . How are you?</i></td>
  </tr>
  <tr>
   <td><i><b>shorten</b></i></td>
   <td><i>'A long story cut into short' | string.shorten : 12 </i></td>
   <td><i>A long story...</i></td>
  </tr>
  <tr>
   <td><i><b>replace</b><br/> String Replace. Pattern can be a string or regex </i></td>
   <td>
      <i>'Hello Mr How are you doing' | string.replace : 'Mr': 'Sir'</i><br/>
      <i>"hello help"| string.replace:"he[a-z]{2}":"Yell"</i>
   </td>
   <td>
    <i>Hello Sir How are you doing</i><br/>
    <i>Yello Yell</i>
  </td>
  </tr>
  <tr>
   <td><i><b>camelcase</b></i></td>
   <td><i>'A long story cut into short' | string.camelcase</i></td>
   <td><i>A Long Story Cut Into Short</i></td>
  </tr>
  <tr>
   <td><i><b>lowercase</b></i></td>
   <td><i>'Convert to LOWERCASE' | string.lowercase</i></td>
   <td><i>convert to lowercase</i></td>
  </tr>
  <tr>
   <td><i><b>uppercase</b></i></td>
   <td><i>'uppercase all' | string.uppercase</i></td>
   <td><i>UPPERCASE ALL</i></td>
  </tr>
  <tr>
   <td><i><b>trim, trimstart, trimend</b><br/> String Trim Functions </i></td>
   <td><i>' Hello Mr. ' | string.trim</i></td>
   <td><i>Hello Mr.</i></td>
  </tr>
</table>

### Array Filters
<table>
  <tr>
   <th>Filter</th>
   <th>Usage</th>
   <th>Result</i></th>
  </tr>
  <tr>
   <td><i><b>join</b></i></td>
   <td><i>['Hello','Mr.','How','Are','You?'] | array.join : '-'</i></td>
   <td><i>Hello-Mr.-How-Are-You?</i></td>
  </tr>
 <tr>
   <td><i><b>reverse</b></i></td>
   <td><i>ng-repeat='["Banana", "Orange", "Apple", "Mango"] | array.reverse'</i></td>
   <td><i>"Mango","Apple","Orange", "Banana"</i></td>
 </tr>
</table>

### Math Filters
<table>
  <tr>
   <th>Filter</th>
   <th>Usage</th>
   <th>Result</i></th>
  </tr>
  <tr>
   <td><i><b>max</b></i></td>
   <td><i>[8, 1, 2, 3, 7] | math.max</i></td>
   <td><i>8</i></td>
  </tr>
  <tr>
   <td><i><b>min</b></i></td>
   <td><i>[8, 1, 2, 3, 7] | math.min</i></td>
   <td><i>1</i></td>
  </tr>
</table>

### Boolean Filters
<table>
  <tr>
   <th>Filter</th>
   <th>Usage</th>
   <th>Result</i></th>
  </tr>
  <tr>
   <td><i><b>YesNo</b><br/>Converts boolean value to Yes/No</i></td>
   <td><i>A == B | binary.YesNo</i></td>
   <td><i>Yes/No?</i></td>
  </tr>
</table>

### Debug Filters
<table>
  <tr>
   <th>Filter</th>
   <th>Usage</th>
   <th>Result</i></th>
  </tr>
  <tr>
   <td><i><b>print</b><br/>Debug prints the bound value</i></td>
   <td><i>'MyValue' | debug.print</i></td>
   <td><i>MyValue</i></td>
  </tr>
</table>

### Unit Testing
Each of the filter is covered by Unit Test extensively.  If you find any input unhandelled, please let me know. Run the unit tests using following commands:
 ```
 npm run karma 
 npm run karma2
```


### Contributions
Please feel free to add your contributions to set of filters.
