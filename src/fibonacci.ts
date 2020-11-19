/**
 * Calculates the value of the row of Fibonnaci
 * @param {number} index The position of the number in the row of Fibonnaci
 * @returns {number} The value of the row of Fibonnaci
 */
const fibonacci = (index: number): number => {
  if (index < 2) return 1;
  return fibonacci(index - 1) + fibonacci(index - 2);
};

export default fibonacci;
