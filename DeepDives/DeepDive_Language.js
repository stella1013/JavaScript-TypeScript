//https://blog.bitsrc.io/understanding-design-patterns-in-javascript-13345223f2dd

/*
NULL vs UNDEFINED
- UNDEFINED means a variable has been declared but has not yet been assigned a value.
- NULL is an assignment value. It can be assigned to a variable as a representation of no value.

undefined and null are two distinct types: 
- UNDEFINED is a TYPE itself (undefined)
- NULL is an OBJECT.
Unassigned variables are initialized by JavaScript with a default value of UNDEFINED. 
JavaScript NEVER sets a value to NULL. That must be done programmatically.
*/

/*
NULL vs UNDEFINED
*/

//Loop Through String. If Order Matters
for (var i = 0; i < str.length; i++) {
    alert(str.charAt(i));
  }

  //Loop Through String. If Doesn't Matter
  var i = str.length;
  while (i--) {
    alert(str.charAt(i));
  }

  // ##########  DATE CLASS #############
/**
 * JavaScript has a standard class for representing dates or rather points in time.
 * Month numbers start at 0.
 * Day numbers start at 1.
 */

 console.log(new Date());
 // // → Mon Nov 13 2017 16:19:11 GMT+0100 (CET)


 /**
  * You can also create an object for a specific time.
  */
 console.log(new Date(2009, 11, 9));
 // → Wed Dec 09 2009 00:00:00 GMT+0100 (CET)
 console.log(new Date(2009, 11, 9, 12, 59, 59, 999)); //new Date(year, month, date, hours, minutes, seconds, ms)
 // → Wed Dec 09 2009 12:59:59 GMT+0100 (CET)

 /*
 * Time stams are stored as milliseconds since the start of 1970 in the UTC time zone.. This follows the convention set by  UNIX time. 
 Negative numbers can be used for times before 1970.

 getTime() on a date object returns this number.
 */

console.log(new Date(2013, 11, 19).getTime());
// → 1387407600000
console.log(new Date(1387407600000));
// → Thu Dec 19 2013 00:00:00 GMT+0100 (CET)