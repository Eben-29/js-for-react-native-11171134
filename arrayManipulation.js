// arrayManipulation.js

function processArray(array) {
    return array.map(num => {
      if (num % 2 === 0) {
        return num * num; // Square even numbers
      } else {
        return num * 3;   // Triple odd numbers
      }
    });
  }
  

// example
let exampleArray = [1, 2, 3, 4, 5];
let outArray = processArray(exampleArray);

console.log(outArray); // Output: [3, 4, 9, 16, 15]


// task 2
function formatArrayStrings(strings, numbers) {
  if (strings.length !== numbers.length) {
      throw new Error('The length of the strings array must match the length of the numbers array.');
  }

  return strings.map((str, index) => {
      let num = numbers[index];
      if (num % 2 === 0) {
          return str.toUpperCase(); // Capitalize the entire string if the number is even
      } else {
          return str.toLowerCase(); // Convert the string to lowercase if the number is odd
      }
  });
}
// example
let numbers = [1, 2, 3, 4, 5];
let strings = ["Watermelon", "Banana", "Cherry", "Pineapple", "Apple"];

let processedNumbers = processArray(numbers);
console.log('Processed Numbers:', processedNumbers); 

let formattedStrings = formatArrayStrings(strings, processedNumbers);
console.log('Formatted Strings:', formattedStrings);
