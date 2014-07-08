[![Build Status](https://travis-ci.org/sumitchawla/angularjs-filters.svg?branch=master)](https://travis-ci.org/sumitchawla/angularjs-filters) [![Dependency Status](https://david-dm.org/sumitchawla/angularjs-filters.png)](https://david-dm.org/sumitchawla/angularjs-filters) [![devDependency Status](https://david-dm.org/sumitchawla/angularjs-filters/dev-status.png)](https://david-dm.org/sumitchawla/angularjs-filters#info=devDependencies)

angularjs-filters
=================

A library of common AngularJS filters.


### String Filters
<table>
  <tr>
   <th>Filter</th>
   <th>Usage</th>
   <th>Result</i></th>
  </tr>
  <tr>
   <td><i><b>string.format</b></i></td>
   <td><i>'Hello {0}. What are you been doing this {1}?' | string.format : 'Sam' : 'evening'</i></td>
   <td><i>Hello Sam. What are you been doing this evening?</i></td>
  </tr>
  <tr>
   <td><i><b>string.html2string</b></i></td>
   <td><i>'Hello &lt;br/&gt;. How are you?}?' | string.html2string</i></td>
   <td><i>Hello . How are you?</i></td>
  </tr>
  <tr>
   <td><i><b>string.shorten</b></i></td>
   <td><i>'A long story cut into short' | string.shorten : 12 </i></td>
   <td><i>A long story...</i></td>
  </tr>
  <tr>
   <td><i><b>string.camelcase</b></i></td>
   <td><i>'A long story cut into short' | string.camelcase</i></td>
   <td><i>A Long Story Cut Into Short</i></td>
  </tr>
  <tr>
   <td><i><b>string.lowercase</b></i></td>
   <td><i>'Convert to LOWERCASE' | string.lowercase</i></td>
   <td><i>convert to lowercase</i></td>
  </tr>
  <tr>
   <td><i><b>string.uppercase</b></i></td>
   <td><i>'uppercase all' | string.uppercase</i></td>
   <td><i>UPPERCASE ALL</i></td>
  </tr>
</table>
