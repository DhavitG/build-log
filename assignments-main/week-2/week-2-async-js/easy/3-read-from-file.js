const fs = require("fs");

text = fs.readFile("../../../../a.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log(data);
});

// setTimeout(() => {
//   console.log("This simulates an expensive asynchronous task");
// }, 3000);

// console.log("Started file read and async operation...");

// Expensive operation: Calculate a very large Fibonacci number
function expensiveOperation(n) {
  if (n <= 1) return n;
  return expensiveOperation(n - 1) + expensiveOperation(n - 2);
}

console.time("Expensive Operation");
const result = expensiveOperation(40); // This is computationally expensive
console.timeEnd("Expensive Operation");

console.log("Result of expensive operation:", result);
