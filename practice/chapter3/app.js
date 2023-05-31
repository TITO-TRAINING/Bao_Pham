//Exercise 1
let prepareValues = (a, b) => {
    console.log(Math.min(a, b));
}

prepareValues(3, 5);

//Exercise 2
console.log("==========================");
let isEven = (number) => {
    if (number < 0) {
        return "The value is not valid!";
    } else if (number === 0) {
        return true;
    } else if (number === 1) {
        return false;
    } else {
        return isEven(number - 2);
    }
}

console.log(isEven(-1))

//Exercise 3
console.log("==========================");
let countBs = (string) => {
    let count = 0;
    for (var B of string) {
        if (B === "B") {
            count++;
        }
    }
    return count;
}

let countChar = (string, character) => {
    let count = 0;
    for (var char of string) {
        if (char === character) {
            count++;
        }
    }
    return count;
}

console.log(countBs("BBBNN"))
console.log(countChar("BBBNN", "P"))