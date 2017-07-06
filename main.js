// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.

function max(x, y) {
  if (x == y) {
    return x;
  } else if (x > y) {
    return x;
  } else if (x < y) {
    return y;
  } else {
    return undefined;
  }
}
console.log("1. ");
console.log("1 or 2? " + max(1, 2));
console.log("2 0r 1? " + max(2, 1));
console.log("1 or 1?!" + max(1, 1));

// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.

function maxOfThree(x, y, z) {
  if ((x == y) && (x == z)) {
    return x;
  } else if (x > y) {
    if (x > z) {
      return x;
    } else {
      return z;
    }
  } else if (y > z) {
    return y;
  } else {
    return z;
  }
}
console.log("2. ");
console.log("1, 2, 3? " + maxOfThree(1, 2, 3));
console.log("42, 7, 9? " + maxOfThree(42, 7, 9));

// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(char) {
  var vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  for (var i = 0; i < vowel.length; i++) {
    if (char == vowel[i]) {
      return true;
    }
  }
  return false;
}

console.log("3. ");
console.log("A = " + isVowel("A"));
console.log("B = " + isVowel('B'));
console.log("u = " + isVowel('u'));


// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.
function sum(x, y) {
  return x + y;
}

console.log("4. ");
console.log("1 + 1 = " + sum(1, 1));
console.log("1 + 25 = " + sum(1, 25));
console.log("32 + 12 = " + sum(32, 12));

// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.
function avg(x, y, z) {
  let average = (x + y + z) / 3;
  return average;
}

console.log("5. ");
console.log("avg of 1, 1, 1 = " + avg(1, 1, 1));
console.log("avg of 12, 6, 0 = " + avg(12, 6, 0));
console.log("avg of 5, 10, 15 = " + avg(5, 10, 15));

// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.
function getLength(str) {
  return str.length;
}

console.log("6. ");
console.log("string is " + getLength("string") + " characters long");
console.log("doohickie is " + getLength("doohickie") + " characters long");
console.log("foo is " + getLength("foo") + " characters long");


// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.
function greaterThan(x, y) {
  if (x > y) {
    return true;
  } else {
    return false;
  }
}

console.log("7. ");
console.log("1 > 2? " + max(1, 2));
console.log("2 > 1? " + max(2, 1));
console.log("1 > 1?!" + max(1, 1));

// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.

function greet(name) {
  return "Hello, " + name;
}

console.log("8. ");
console.log(greet("Doug"));
console.log(greet("Lexie"));
console.log(greet("Kaitlin"));

// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.

function madlib(companyName, productName, targetAudience, problem, how) {

  return "My company, " + companyName + ", is developing " + productName + " to help " + targetAudience + " with " + problem + " by utilizing " + how + ".";
}
// My company, __(insert name of company)__, is developing __(a defined offering)__ to help __(a defined audience)__ __(solve a problem)__ with __(secret sauce)__.

console.log("9. ");
console.log(madlib("Hotdogs-R-Us", "pickled peanuts", "the NRA", "unstopping the toilet", "neural nets")); // These were from the people downstairs
console.log(madlib("The Iron Yard", "duct tape", "baby boomers who don't trust banks", "world hunger", "Virtual Reality")); // These were from the instructors
console.log(madlib("Hiptel", "a semicolon launcher", "a class", "a lack of empathy", "a handheld mixer")); // These are from the people that went upstairs
