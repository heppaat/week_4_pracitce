/* const arr = ["egy", "ketto", "harom", "negy"];

//console.log(arr.includes("egy"));

console.log(["one", "two", "three", "four"].includes("two"));
 */

//const str = "Hello World";

//console.log(str.substring(0, 7));

/* const arr = ["one", "two", "three", "four"];
arr.push("nyolcvan", "hatvanot");
/* console.log(arr); */

//console.log(arr.pop());

const users = [
  { name: "John Doe", age: 33 },
  { name: "Kiss Pista", age: 22 },
  { name: "Nagy Erno", age: 85 },
];

/* users.forEach(function (user) {
  console.log(user.name);
}); */

/* users.forEach((user) => console.log(user.name));



users.forEach((user) => userNames.push(user.name));
console.log(userNames); */

const userNames = [];
const result = users.map(function (user) {
  return user.name;
});

console.log(result);
