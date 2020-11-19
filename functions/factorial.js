/**
 * Calculates the factorial of n recursively
 * @param {number} n The amount
 * @returns {number} The factorial of n
 */
const factorial = (n) => {
  if (n < 0) return -1;
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
};

module.exports = factorial;
