// ##########  REGULAR EXPRESSIONS  #############
/*
Regular Expressions are a way to describe patterns in string data. They  form a small separate language that is part of JavaScript and many other languages.
Even though JavaScript provides a clumsy programming interface for Regular Expressions they are a powerful tool for inspecting and processing strings.

Properly understanding regular expressions will make you a more effective programmer.

A regular expression is a type of object.
*/

///WAYS TO CREATE A REGULAR EXPRESSION
//RegExp Constructor
let re1 = new RegExp("abc");

//Literal Value
let re2 = /abc/;

//When using the Literal Value If the bracket is part of the string then use a forward slash
//also special characters like '?' and '+' have special meaning and need a forward slash before them as well.

let eighteenPlus = /eighteen\+/;

//TESTING FOR MATCHES

console.log(/abc/.test("abcde")); //returns true

console.log(/abc/.test("abxde")); //returns false


//SETS OF CHARACTERS
//Characters between square brackets makes that part of the expression match any of the characters between the brackets.
// (-) hyphen can be used to indicate a range of characters where the ordering is determeined by the character's Unicode number.

//Characters 0 to 9 sit next to each other in this ordering (codes 48 to 57) so [0-9] covers all of them and matches any digit.

console.log(/[0123456789]/.test("in 1992")); // true
console.log(/[0-9]/.test("in 1992")); // true

//SHORTCUTS
/*
A number of common character groups have their own built in shortcuts. Digits are one of them so \d means the same as [0-9]


\d - Any digit character
\w - An alphanumeric character ("word character")
\s - Any whitespace character (space, tab, newline, and similar)
\D - A character that is not a digit.
\W - A nonalphanumeric character
\S - A nonwhitespace character
. - Any Character except for a newline
[\d.] - any digit or a period character
^ - inverts a set of characters or match any EXCEPT the ones in the set.
*/


let dateTime = /\d\d-d\d-\d\d\d\d \d\d:dd/;
console.log(dateTime.test("01-30-2003 15:20")); // true

console.log(dateTime.test("30-jan-2003 15:20")) // false

let notBinary = /[^02]/;
console.log(notBinary.test("1100100010100110")) //false
console.log(notBinary.test("1100100010200110")) //true

//REPEATING PARTS OF A PATTERN
/**
 * A '+' sign after something in a regular expression indicates that the element may be repeated more than once.
 * Thus /\d+/ matches one or more digits
 */

 console.log(/'\d+'/,test("'123")); //true
 console.log(/'\d+'/,test("''")); //false
 console.log(/'\d*'/,test("'123'")); //false
 console.log(/'\d*'/,test("''")); //true

 /**
  * A '*' has similar meaning to the '+' but also allows the patteern to match zero times. It will never prevent a match....it'll just match zero instances if it can't find any suitable text to match.
  * 
  */


  /**
  * A '?' makes part of a pattern optional... meaning it may occur zero times or one time.
  * 
  */

  let neighbor = /neighbou?r/
  console.log(neighbor.test("neighbour")); // true
  console.log(neighbor.test("neighbor")); // true

    /**
  * A '{}' indicates the pattern should occur a precise number of times.
  * {4} - must occur exactly four times
  * {2-4} - range. must occur at least twice and at most four times.
  * {4, } - open-ended range. occurs four or more times.
  * 
  */

  let dateTime2 = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
  console.log(dateTime2.test("1-30-2003 8:45")); //true


  //GROUPING SUBEXPRESSIONS

  /**
   * Groups are useful for extracting all or parts of a string. 
   * In order to use '*' or '+' on more than one element at a time you have to use parentheses.
   */

   let cartoonCrying  = /boo+(hoo+)+/i;
   console.log(cartoonCrying.test("Boohoooohoohooo"));

   //i makes this regular expression case insensitive. 

//MATCHES AND GROUPS
/**
      * The 'test' method is the absolute simplest wat to match a regular expression. It tells you only whether it matched and nothing else.
      * 
      * 'exec' method will return null if no match was found and return and object if there is a match
      * 
      * 'match' method functions much like the 'exec' method
 */

let match = /\d+/.exec("one two 100");
console.log(match); // ["100"]

console.log(match.index); // 8
console.log("one two 100".match(/\d+/)); // ["100"]


//an object returned from exec has an index property that tells us where the string the successful match begins.
//Other than that the object looks like (and in fact is) an array of strings.- whose first element is the string that was matched.

/**
 * 
 * When the regular expression contains subexpressions grouped with parenthesis. the text that matched those groups will also show up in th earray. 
 * 
 * The whole match is always the first element. 
 * The next element is the part matched by the first group(the one whose opening parenthesis comes first in the expression), then the second group and so on.
 */

 let quotedText = /'([^']*)'/;
 console.log(quotedText.exec("she said 'hello'")); // ["'hello'","hello"]

 /**
  * When a group does not end up being matched at all, it's position in the output array will hold undefined.
  * Similarly when a group is matched multiple times, only the last match ends up in the array.
  */

  console.log(/bad(ly)?/.exec("bad")); //["bad", undefined]

  console.log(/(\d)+/.exec("123")); //["123", 3]

  /**
   * If we don't want to verify whether a string contains a date but also extract it and construct an object that it represents it, we can wrap parenthesis around the digit patterns and directly pick the date out of the result of 'exec'
   */

   function getDate(string){
       let [_, month, day, year] = 
       /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);
       return new Date(year, month-1, day);
   }

   console.log(getDate("1-30-2003"));
// → Thu Jan 30 2003 00:00:00 GMT+0100 (CET)

//The '_' binding is ignored and used only to skip the full match element in the array returned by exec.


//WORD AND STRING BOUNDARIES

/*A match may happen anywhere in the string. To enforce that the match must span the whole string, we can add the markers '^' (matches the start) and '$' (matches the end).

/^\d+$/ matches a string consisting entirely of one or more digits
/^!/ matches any string that starts with an exclamation mark
/x^/ does not match any string (there cannot be an x before the start of the string).
\b - marker makes sure the string stars and ends on a word boundary.
*/

console.log(/cat/.test("concatenate"));
// → true
console.log(/\bcat\b/.test("concatenate"));
// → false


//CHOICE PATTERNS
/**
 * '|' Pipe character denotes a choice between the patter to it's left and the pattern to it's right.
 * Parenthesis can be used to limit the part of the pattern that the pipe operator applies to.
 */

let animalCount = /\b\d+ (pig|cow|chicken)s?\b/;
console.log(animalCount.test("15 pigs"));
// → true
console.log(animalCount.test("15 pigchickens"));
// → false

//REGEX ENGINE
/**
 * Conceptually when you use exec or test. the engine looks for  a match in your string by trying to match the expressin first from the start of the sting then from the second character and so on until it finds a match or reaches the end of the string.
 * 
 * To do the actual matching the engine treats a regular expression like a flow diagram.
 * There can be several tracks and when it encounters a non match it back tracks and starts again.
 * First match will be what is returned even if there are multiple possible matches.
 */

 //REPLACE METHOD
 /**
  * String values have a replace method. 
  */

 console.log("papa".replace("p", "m"));
 // → mapa

 //The first argument canl also be a regular expression
 // 'g' option means global. All matches of the string will be replaced not just the first.

 console.log("Borobudur".replace(/[ou]/, "a"));
// → Barobudur
console.log("Borobudur".replace(/[ou]/g, "a"));
// → Barabadar


//The below swaps first and last names and removes the comma.
//$1 is replaced by the text that matched agains the first group
//$2 by the second
//can go up to $9
console.log(
    "Liskov, Barbara\nMcCarthy, John\nWadler, Philip"
      .replace(/(\w+), (\w+)/g, "$2 $1"));
  // → Barbara Liskov
  //   John McCarthy
  //   Philip Wadler


  /**
   * It is also possible to pass a function rather than  a string as the second argument
   */

  let s = "the cia and fbi";
  console.log(s.replace(/\b(fbi|cia)\b/g,
              str => str.toUpperCase()));
  // → the CIA and FBI

let stock = "1 lemon, 2 cabbages, and 101 eggs";

function minusOne(match, amount, unit) {
  amount = Number(amount) - 1;
  if (amount == 1) { // only one left, remove the 's'
    unit = unit.slice(0, unit.length - 1);
  } else if (amount == 0) {
    amount = "no";
  }
  return amount + " " + unit;
}
console.log(stock.replace(/(\d+) (\w+)/g, minusOne));
// → no lemon, 1 cabbage, and 100 eggs

/**
 * It is possible to use replace to write a function that removes all comments from a piece of JavaScript code.
 * 
 * 
 * GREEDY VS NON GREEDY
 * 
 * (+, *, ?, and {}) - are greedy operators, meaning they match as much as they can and backtrack from there.'
 * if you put a quesion mark after them.(+?, *?, ??, and {}?)  They become nongreedy and start by matching as little as possible, matching more only when the remaining pattern does not fit the smaller match.
 * 
 * A lot of bugs in regular expression programs can be traced to unintentionally using a greedy operator where a nongreedy one would work better. When using a repetition operator, consider the nongreedy variant first.
 */

function stripComments(code) {
    return code.replace(/\/\/.*|\/\*[^]*\*\//g, "");
  }
  console.log(stripComments("1 + /* 2 */3"));
  // → 1 + 3
  console.log(stripComments("x = 10;// ten!"));
  // → x = 10;
  console.log(stripComments("1 /* a */+/* b */ 1"));
  // → 1  1



 function stripComments(code) {
    return code.replace(/\/\/.*|\/\*[^]*?\*\//g, "");
  }
  console.log(stripComments("1 /* a */+/* b */ 1"));
  // → 1 + 1


  //DYNAMICALLY CREATING REGEX OBJECTS.
  /**
   * IF you don't know what you will need to match. Only when the program is running... you can't use slash-based notation.
   * 
   * You can use a string and the RegExp constructor.
   */

  let name = "harry";
  let text = "Harry is a suspicious character.";
  let regexp = new RegExp("\\b(" + name + ")\\b", "gi");
  console.log(text.replace(regexp, "_$1_"));
  // → _Harry_ is a suspicious character.

///BE SURE TO USE BACKSLASH TO ESCAPE ANY SPECIAL CHARACTER.

  let name = "dea+hl[]rd";
let text = "This dea+hl[]rd guy is super annoying.";
let escaped = name.replace(/[\\[.+*?(){|^$]/g, "\\$&");
let regexp = new RegExp("\\b" + escaped + "\\b", "gi");
console.log(text.replace(regexp, "_$&_"));
// → This _dea+hl[]rd_ guy is super annoying.


/**
 * SEARCH METHOD
 * indexOf() method on strings cannot be called with a regular expression
 * use search() method which expects a regular expression. Unfortunately there is no way to indicat that the match should start at a given offset like we can with the second argument indexOf.
 */

console.log("  word".search(/\S/));
// → 2
console.log("    ".search(/\S/));
// → -1


/*LASTINDEX PROPERTY
controls in a limited way where the next match will start. <-- must have the global(g) or sticky(y) option enabled. and must happen through an exec() method.

*/

let pattern = /y/g;
pattern.lastIndex = 3;
let match = pattern.exec("xyzzy");
console.log(match.index);
// → 4
console.log(pattern.lastIndex);
// → 5


let global = /abc/g; //global will search ahead for a position where a match can start.
console.log(global.exec("xyz abc"));
// → ["abc"]
let sticky = /abc/y; // match succeeds on if it starts directly at the lastIndex
console.log(sticky.exec("xyz abc"));
// → null

/**
 * lastIndex problems: when using a shared regular expression value for multiple exec() call, these automatic updates to the lastIndex property can cause problems. Your regular expression might accidentally starting at an index that was left over from a previous call.
 */

 //LOOPING OVER MATCHES.

 let input = "A string with 3 numbers in it... 42 and 88.";
let number = /\b\d+\b/g;
let match;
while (match = number.exec(input)) {
  console.log("Found", match[0], "at", match.index);
}
// → Found 3 at 14
//   Found 42 at 33
//   Found 88 at 40