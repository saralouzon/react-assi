// Task 2: Calculate Total and Average
function calculateSumAndAverage(numbers) {
    const total = numbers.reduce((sum, num) => sum + num, 0); // Adds all numbers
    const average = total / numbers.length; // Finds the average
    return { total, average };
}

// Example:
const numbers = [10, 20, 30];
console.log(calculateSumAndAverage(numbers)); // Output: { total: 60, average: 20 }
// Task 3: Remove Duplicates
function removeDuplicates(array) {
    return [...new Set(array)]; // Uses Set to keep only unique values
}

// Example:
const items = ["apple", "banana", "apple", "orange"];
console.log(removeDuplicates(items)); // Output: ["apple", "banana", "orange"]
