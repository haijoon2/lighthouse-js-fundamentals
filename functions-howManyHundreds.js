const howManyHundreds = function (num) {
  const divided = num / 100;
  return parseInt(divided);
};

console.log(howManyHundreds(4567))
console.log(howManyHundreds(454567))
console.log(howManyHundreds(1564567))