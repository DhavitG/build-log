/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  lower = str.toLowerCase();
  console.log(str);

  filtered = lower
    .split("")
    .filter(
      (char) =>
        char !== " " &&
        char !== "!" &&
        char !== "." &&
        char !== "?" &&
        char !== ","
    )
    .join("");

  const reverse = filtered.split("").reverse().join("");

  return filtered === reverse;
}

module.exports = isPalindrome;
