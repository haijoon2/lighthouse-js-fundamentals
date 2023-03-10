
const isEven = function (num) {
  return num % 2 === 0;
};

// instead of writing like below (4 lines)//
const tenIsEven = isEven(10);
const elevenIsEven = isEven(11);

console.log(tenIsEven);
console.log(elevenIsEven);

// we can simplify above 4 lines like this
console.log(isEven(10));
console.log(isEven(11));