import { isNumber, isFraction } from './Helpers/index';

/**
 * Calculates the value of the row of Fibonnaci
 * @param {number} index The position of the number in the row of Fibonnaci
 * @returns {number} The value of the row of Fibonnaci
 */
const fibonacci = (index: number): number | undefined => {
  if (index < 0 || isNumber(index) || isFraction(index)) return undefined;
  if (index < 2) return 1;
  let temp = 0;
  let a = 1;
  let b = 0;
  while (index >= 0) {
    temp = a;
    a = a + b;
    b = temp;
    index--;
  }
  return b;
};

export default fibonacci;
