//Exercise 1: The Sum of a Range
console.log("Exercise 1: The Sum of a Range");
function increaseNumber(start, end) {
  let array = [];
  for (let i = start; i <= end; i++) {
    array.push(i);
  }
  return array;
}

function sumElementOfArray(array) {
  let sum = 0;
  for (var x of array) {
    sum += x;
  }
  return sum;
}

function increaseNumber2(start, end, step) {
  let array = [];
  if (!step) {
    step = 1;
  }
  if (start < end) {
    for (let i = start; i <= end; i += step) {
      array.push(i);
    }
  } else {
    for (let i = start; i >= end; i += step) {
      array.push(i);
    }
  }
  return array;
}

console.log(increaseNumber(1, 10));
console.log(sumElementOfArray(increaseNumber(1, 10)));
console.log(increaseNumber2(5, 1, -2));

//Exercise 2: Reversing an Array
console.log("Exercise 2: Reversing an Array");
let array = [1,2,3,4,5];
function reverseArray(array) {
  let newArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}

console.log(reverseArray(array));

//Exercise 3: A List
console.log("Exercise 3: A List");
function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = { value: array[i], rest: list };
  }
  return list;
}

function listToArray(list) {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

function prepend(element, list) {
  return { value: element, rest: list };
}

function nth(list, n) {
  if (!list) {
    return undefined;
  } else if (n === 0) {
    return list.value;
  } else {
    return nth(list.rest, n - 1);
  }
}

function recursiveNth(list, n, current = 0) {
  if (!list) {
    return undefined;
  } else if (current === n) {
    return list.value;
  } else {
    return recursiveNth(list.rest, n, current + 1);
  }
}

let myList = arrayToList([1, 2, 3]);
console.log(myList);
// Output: { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }

let myArray = listToArray(myList);
console.log(myArray);
// Output: [1, 2, 3]

let newList = prepend(0, myList);
console.log(newList);
// Output: { value: 0, rest: { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } } }

console.log(nth(myList, 1));
// Output: 2

console.log(recursiveNth(myList, 2));
// Output: 3
