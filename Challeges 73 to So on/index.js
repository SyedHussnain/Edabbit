// Challenge No.73
// String and Number Conversions

// You need to create two functions to substitute toString() and parseInt();
// A function called intToString() that converts integers into strings
// & a function called stringToInt() that converts strings into integers.

// Main Point (substitute)

// Use of parseInt

let strToNumber = "50";
console.log(
  "TypeOf Variable strToNumber = " + typeof strToNumber + " = " + strToNumber
);

let ab = parseInt(strToNumber);
console.log("TypeOf Variable ab = " + typeof ab + " = " + ab);

// use of toString

let abc = 50;
console.log("Type of the Variable abc = " + typeof abc + " = " + abc);
let xyz = abc.toString();
console.log("Type of the Variable xyz = " + typeof xyz + " = " + xyz);

// Now we Create our own Custom Function parseInt
function parseInt1(x) {
  return "" + x;
}
let mm = parseInt1(50);
console.log("TypeOf the Argument Passed in Num = " + typeof mm + " = " + mm);

//Now we Create our own custom Function toString
function toString1(y) {
  return +y;
}
let nn = toString1("50");
console.log("TypeOf the Argument Passed in String = " + typeof nn + " = " + nn);
