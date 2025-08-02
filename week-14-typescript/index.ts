let x: number = 1;
console.log(x);

function greet(name: string) {
  console.log("Hello " + name);
}

greet("Dhavit");

function sum(a: number, b: number): number {
  return a + b;
}

console.log(sum(2, 3));

function isLegal(age: number): boolean {
  return age >= 18 ? true : false;
}

console.log(isLegal(19));

function delayFunc(fn: () => void) {
  setTimeout(fn, 1000);
}

delayFunc(() => {
  console.log("Hello world");
});
