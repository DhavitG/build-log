/*
class Rectangle {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  area() {
    const area = this.width * this.height;
    return area;
  }

  paint() {
    console.log(`Painting with color ${this.color}`);
  }
}

const rect = new Rectangle(2, 4, "red");
const area = rect.area();
rect.paint();
console.log(area);

const map = new Map();
map.set("name", "Dhavit");
console.log(map.get("name"));
*/

// function main() {
//   console.log("3 seconds have passed");
// }

// setTimeout(main, 3000);

// function setTimeoutPromisified(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// function main() {
//   console.log("3 seconds have passed");
// }

// setTimeoutPromisified(3000).then(main);

///////////////////////
// CALLBACK HELL
// setTimeout(function () {
//   console.log("hi");

//   setTimeout(function () {
//     console.log("hello");

//     setTimeout(function () {
//       console.log("hello there");
//     }, 5000);
//   }, 3000);
// }, 1000);

/*
function random(resolve) {
  setTimeout(resolve, 1000);
}

let p = new Promise(random);
console.log(p);

function callback() {
  console.log("Promise succeeded");
}
p.then(callback);
*/

function afterTime(message, time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(message);
      resolve();
    }, time);
  });
}

afterTime("hi", 1000)
  .then(() => afterTime("hello", 3000))
  .then(() => afterTime("hello there", 5000));

const fs = require("fs");

function readTheFile(finalVal) {
  fs.readFile("../a.txt", "utf-8", function (err, data) {
    finalVal(data);
  });
}

function readFile() {
  return new Promise(readTheFile);
}

let p = readFile();

function callback(contents) {
  console.log(contents);
}

p.then(callback);
