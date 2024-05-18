// arrayManipulation.js

function newArray(array) {
    return array.map(num => {
      if (num % 2 === 0) {
        return num * num; // Square even numbers
      } else {
        return num * 3;   // Triple odd numbers
      }
    });
  }
  


let exampleArray = [1, 2, 3, 4, 5];
let outArray = newArray(exampleArray);

console.log(outArray); // Output: [3, 4, 9, 16, 15]
