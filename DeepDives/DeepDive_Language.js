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