"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let x = 1;
console.log(x);
function greet(name) {
    console.log("Hello " + name);
}
greet("Dhavit");
function sum(a, b) {
    return a + b;
}
console.log(sum(2, 3));
function isLegal(age) {
    return age >= 18 ? true : false;
}
console.log(isLegal(19));
function delayFunc(fn) {
    setTimeout(fn, 1000);
}
let result = delayFunc(() => {
    // console.log("Hello world");
    return 2;
});
console.log(result);
//# sourceMappingURL=index.js.map