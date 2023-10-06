function myFunc() {
  console.log("this is my function");
}

/* myFunc(); */

function greetMe(name) {
  console.log(`hello ${name}!`);
}

/* greetMe("lajos"); */

/* function addTwoNumbers(a, b) {
  let sum = a + b;
  console.log(`The sum of two numbers (${a} + ${b}) is: ${sum}`);
  return sum;
}

let resultOfaddTwoNumbers = addTwoNumbers(5, 16);
console.log(`the result of resultOfAddToNumbers is: ${resultOfaddTwoNumbers}`);
 */

function cbExample() {
  console.log("I am a callback function");
}

function funcExample(name, callback) {
  console.log(`hello ${name}`);
  callback();
}

funcExample("Pali", cbExample);
