/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  let p = new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, n * 1000);
  });
  return p;
}

// let p = new Promise(wait);

// function soNotN() {
//   console.log("Promise succeeded");
// }

// p.then(soNotN);

module.exports = wait;
