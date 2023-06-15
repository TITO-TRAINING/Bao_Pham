//Exercise 1: Flattening
const arrays = [
  [1, 2],
  [3, 4],
  [5, 6],
];

const flattenedArray = arrays.reduce((accumulator, currentArray) => {
  return accumulator.concat(currentArray);
}, []);

console.log(flattenedArray);


//Exercise 2: Your Own Loop
function loop(value, testFunc, updateFunc, bodyFunc) {
  while (testFunc(value)) {
    bodyFunc(value);
    value = updateFunc(value);
  }
}

loop(
  0,
  (value) => value < 5,
  (value) => value + 1,
  (value) => {
    console.log(value);
  }
);