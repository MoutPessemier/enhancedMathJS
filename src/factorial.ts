import BigNumber from 'bignumber.js';
import { isNumber, isFraction } from './Helpers/index';

/**
 * Calculates the factorial of n recursively
 * @param {number} n The amount
 * @returns {number} The factorial of n
 */
const factorial = (n: number): BigNumber | undefined => {
  if (n < 0 || !isNumber(n) || isFraction(n)) return undefined;
  if (n === 0 || n === 1) return new BigNumber(1);
  let result = new BigNumber(1);
  for (let i = n; i > 0; i--) {
    result = result.multipliedBy(i);
  }
  return result;
};

export default factorial;
