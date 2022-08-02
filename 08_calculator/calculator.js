const add = function(a , b) {
	const sum = a + b;
  return sum;
};

const subtract = function(a, b) {
	const difference = a - b;
  return difference;
};

const sum = function(...args) {
	const total = [].reduce((a, b) => a + b, 0);
  return total;
};

const multiply = function(...args) {
  const product = [].reduce((a, b) => a * b, 1);
  return product;
};

const power = function(a, b) {
	const answer = Math.pow(a,b);
  return answer;
};

const factorial = function(num) {
	let runningTotal = 0

  if (num === 0) { return 1;}
  else {
    for (i = num; i> 0; i--) {
      toAdd = i * (num - 1);
      return runningTotal += toAdd;
    }
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
