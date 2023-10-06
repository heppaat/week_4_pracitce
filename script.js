const arr = [1, 2, 3, 4, 5];

/* function returnDouble(number) {
  return number * 2;
}

for (let i = 0; i < arr.length; i++) {
  console.log(returnDouble(arr[i]));
} */
arr.forEach(logDouble);

function logDouble(number) {
  console.log(number * 2);
}

/* arr.forEach(function (element) {
  console.log(element * 2);
}); */
