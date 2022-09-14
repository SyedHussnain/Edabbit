// In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:

// chickens = 2 legs
// cows = 4 legs
// pigs = 4 legs
// The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.

function countLegs(chick, pig, cow) {
  return chick * 2 + pig * 4 + cow * 4;
}

console.log("Total Legs of Animals = " + countLegs(15, 7, 10));

function checkBoolean(a, b) {
  return "Answer is = " + (a == true && b == true);
}
console.log(checkBoolean(true, false));

function isSameNum(a, b) {
  return a == b;
}

console.log("Number is Same = " + isSameNum(15, 9));

function teamPoints(win, draw, loss) {
  return win * 3 + draw + loss * 0;
}
console.log("Total Point of the Team = " + teamPoints(9, 2, 4));

function hrMinToSec(hr, min) {
  return hr * 3600 + min * 60;
}
console.log("Time in Seconds = " + hrMinToSec(1, 20));

function equalToSeven(num) {
  return num === 7;
}
console.log("Number is equal to seven = " + equalToSeven(7));

function checkEquality(a, b) {
  return typeof a === typeof b;
}

console.log(
  "Data Type of Both Parameters are equal = " + checkEquality("Hellow", "0")
);

function profitableGamble(prob, prize, pay) {
  return prob * prize > pay;
}
console.log("Profitable Gamble  = " + profitableGamble(0.9, 3, 2));

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

let arr1 = arr.filter((i) => {
  if (i % 2 == 0) {
    return true;
  }
});
console.log(typeof arr1);

// Rest or Collection Opertator
// ...a parameter are unknnown
//
// let num = [00,20,30]
// let res = sum(...num);
// // Speard Opreator
// function sum(a, b, c){
//     return a + b + c;
// }

// of loop for (let items of b)

// merge c.push()

// a.concat(b)

// let c  =[...a,...b]

function has_bugs(buggy_code) {
  if (buggy_code) {
    return "sad days";
  } else {
    return "it's a good day";
  }
}

console.log(has_bugs(true));

let arrwFunc = (numberOne) => numberOne;
console.log("Outpt of Arrow Function =     " + arrwFunc(5));

function greeting(name) {
  if (name == "Hussnain") {
    return "Hello, my Love!";
  }
  return "Hello, " + name + "!";
}
console.log(greeting("Hussnain"));

// Two Makes Ten
function twoMakesTen(m, n) {
  return m === 10 || n === 10 || m + n === 10;
}
console.log(twoMakesTen(5, 5));

function maxNum(n1, n2) {
  if (n1 > n2) {
    return n1;
  } else {
    return n2;
  }
}

console.log(maxNum(10, 5));

// Pair Mangement
// return as an Array
function makePair(o, p) {
  return [o, p];
}
console.log(makePair(10, 20));

// Compare Strings by count of Characters

function comp(b, x) {
  if (typeof b === "string" && typeof x === "string") {
    if (b.length === x.length) {
      return "Both Strings are Equal";
    } else {
      return "Both Strings are not Equal";
    }
  } else {
    return "Please Enter a Valid String";
  }
}
console.log(comp("Helo", 9));

// let ppp = "Hussnain";
// let yyy = "Ali";
// console.log(typeof ppp === "string");
// console.log(ppp.length);

function isEmpty(x) {
  return x === "";
}
console.log("Empty = " + isEmpty(" "));

function divisibleByFive(num) {
  return num / 5 === 0;
}
console.log("This number is Divisible by Five = " + divisibleByFive(99));

function divisibleByHundred(num1) {
  return num1 / 100 === 0;
}

console.log("This Number is Multiple of 100 = " + divisibleByHundred(50000000));

// function lenght(charrr) {
//   return lenght.charrr;
// }

// console.log("Lenght of the given Value" + length("Heloooww"));

function strToInt(x) {
  return +x;
}

console.log("String is Converted in to Number = " + typeof strToInt("151"));

function fullName(a, b) {
  return a + " " + b;
}

console.log("Your FullName is = " + fullName("Hussnian", "Ali"));

// Evaluate an Equation

function calculator1(m) {
  return eval(m);
}
console.log("Answer of String Expression = " + calculator1("5+9+2-1"));

function equation(n) {
  return eval(n);
}
console.log(
  "Answer is Evaluated with eval() Function = " + equation(11 - 2 + 8 * 9)
);

// Upvotes vs Downvotes
function getVoteCount(x) {
  return x.upvote + x.downvote;
}
console.log(
  "object passed as parameter and do sum = " +
    getVoteCount({ upvote: 13, downvote: 0 })
);

// Learn Lodash: _.drop, Drop the First Elements of an Array
// Lodash is a library which include via Cdn link
function dropFirstElement(arr, val = 1) {
  return _.drop(arr, val);
}
console.log(
  "Dropped First Element of an array = " +
    dropFirstElement([9, 8, 7, 5, 6, 2, 13, 45, 5, 6, 55, 2])
);

// Drop first Element with Splice

function drop1(arr) {
  return arr.splice(1);
}

console.log(
  "Removing first Element of an Array = " + drop1([100, 2, 3, 5, 4, 9, 8, 11])
);

// Reuturn Negative
function returnNegative(d) {
  return -d;
}
console.log("Return a Negative Value = " + returnNegative(55));

// Reverse an Array
function reverseArray(n) {
  return n.reverse();
}
console.log(
  "It will return reverse of that Array = " +
    reverseArray([8, 9, 5, 1, 2, 36, 4, 2, 5])
);

// Movie Theatre Admittance
function acceptIntoMovies(age, isSupervised) {
  return age >= 15 && isSupervised == true;
}
console.log("Permission Granted = " + acceptIntoMovies(15, true));

// Help fix all the bugs in the function incrementItems! It is intended to add 1 to every element in the array!
function addOneInAllElements(temp) {
  let newArr = [];
  for (let items of temp) {
    newArr.push(items + 1);
  }
  return newArr;
}
// "Add one in All elements" +
let ysas = addOneInAllElements([1, 2, 3, 4, 5, 6, 7, 8]);
console.log(ysas);

//  Object Destructuring
let student = {
  name1: "Hussnain",
  degree: "Msc Computer Science",
  university: "University of Agriculture",
  subjects: ["Assembly Language", "Networking", "Artificial intelligence"],
  timeTable: {
    morning: "Assembly language",
    noon: "Networking",
    evening: "Aritficial intelligence",
  },
};

let { degree } = student;
console.log("Name destructure = " + degree);
// Desi Method
let { subjects } = student;
console.log(subjects[2]);

let {
  timeTable: { noon },
} = student;
console.log("Nested object destructing = " + noon);

function showname({ name1 }) {
  return name1;
}
console.log("Name access with object desrtucting = " + showname(student));

let array = [
  {
    city: "Rome",
    country: "Italy",
  },
  {
    city: "Moscow",
    country: "Russia",
  },
  {
    city: "Islamabad",
    country: "pakistan",
  },
];

// let city1 = prompt("Enter a city = ");
// let data = array.filter((hi) => hi.city === city1);
// console.log(data);

// let torr = [10, 20, 30, 40, 50];
// for (let item in torr) {
//   console.log(torr[item]);
// }

// Fix the Bug: Simple Array Manipulation
function incrementItems(dd) {
  let newArrrr = [];
  for (let item in dd) {
    newArrrr.push(dd[item] + 1);
  }
  return newArrrr;
}

console.log(incrementItems([10, 11, 21, 31]));

function shouldServeDrinks(a, b) {
  return a >= 18 && b === true;
}

console.log("Drink Served = " + shouldServeDrinks(18, true));

let firstName = "Hussnain";
let lastName = "Ali";
console.log(`My Name ${firstName} ${lastName}.`);

// Arrow Functions
areSame = (a, b) => a + b;
console.log(areSame(4, 5));

// Using Ternary Operators
let marks = 90;
let isNice;
isNice = marks > 50 ? "Nice" : "NotNice";
console.log(isNice);

// Minimal IV: if-else if-else Inferno

// function checkk(go) {
//   if (go < 0) return "LessThenZero";
//   elseif(go === 0) return "Equal to Zero";
// }

let student1 = [
  {
    name1: "Awais",
    degree: "Msc Computer Science",
    university: "University of Agriculture",
    subjects: ["Alogrithm", "C#", "c++"],
    timeTable: {
      morning: "Assembly language",
      noon: "Networking",
      evening: "Aritficial intelligence",
    },
  },
  {
    name1: "Hussnain",
    degree: "Msc Computer Science",
    university: "University of Agriculture",
    subjects: ["Networking", "Alogrithm", "Artificial intelligence"],
    timeTable: {
      morning: "Assembly language",
      noon: "Networking",
      evening: "Aritficial intelligence",
    },
  },
];
let array5 = [];
student1.forEach((data) => {
  let res = array5.includes(data.subjects);
  if (res) {
    array5.push(...data.subjects);
  }
});
console.log(array5);

function oddOrEven(a) {
  let y = a.length;
  return y % 2 === 0;
}

console.log(oddOrEven("apples"));

// Century Crisis

// function futurePeople() {
//   return
// }

// console.log(futurePeople(256, 2));

// Array Destructing
arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];
console.log(arr[1]);

function calculateExponent(x, y) {
  return Math.pow(x, y);
}
console.log(calculateExponent(5, 2));

function inchesToFeet(y) {
  return y / 12;
}
console.log(inchesToFeet(324));

function howManyWalls(x, y, z) {
  return x / (y * z);
}

console.log("Walls can Paint = " + howManyWalls(100, 4, 5));

function getLastItem(x) {
  return x.pop();
}

console.log(getLastItem([1, 2, 3]));

function leapYearFunction(x) {
  return x % 4 === 0;
}
console.log(leapYearFunction(2020));

let ara11 = [200, 100, 10, 20, 30, 40, 50, 60, 70, 80, 90];

function getmax(x) {
  let max = 200;
  // Here we set max first Element of an Array
  for (let item of x) {
    if (item > max) {
      max = item;
    }
  }
  return max;
}
console.log("Maximum Number = " + getmax(ara11));

// Get Maximum Number with skip First element of Array
function getMaxSkipFirst(x) {
  let max = 100;
  // Here we set max as a first index of an array because we skip zero index
  for (let item of x.splice(1)) {
    if (item > max) {
      max = item;
    }
  }
  return max;
}
console.log("Get Maximum with skip First Element = " + getMaxSkipFirst(ara11));

// Get Minimum Number with skip First element of Array
function getMin(x) {
  let min = 100;
  // Here we set minimum as a index1 of the array coz we skip index zero
  for (let item of x) {
    if (item < min) {
      min = item;
    }
  }
  return min;
}
console.log("Minimum Number = " + getMin(ara11));
