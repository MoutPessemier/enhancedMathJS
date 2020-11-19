const factorial = require("../factorial");

// TODO: above a certain threshold, it's not accurate anymore --> find a way to make it accurate
const combination = (n, r) => {
  return factorial(n) / (factorial(r) * factorial(n - r));
};

module.exports = combination;
