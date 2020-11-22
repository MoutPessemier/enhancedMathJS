import { isNumber, isFraction } from '../Helpers/index';

/**
 * Generates an identity matrix of size n
 * @param n The size of the identity matrix
 */
export const generateIdentityMatrix = (n: number) => {
  if (n < 0 || !isNumber(n) || isFraction(n)) return undefined;
  const result = new Array(n);
  for (let i = 0; i < n; i++) {
    result[i] = new Array(n).fill(0);
    result[i][i] = 1;
  }
  return result;
};

/**
 * Generates a 0 matrix the size of n
 * @param n The size of the 0 matrix
 */
export const generateZeroMatrix = (n: number) => {
  if (n < 0 || !isNumber(n) || isFraction(n)) return undefined;
  const result = new Array(n);
  for (let i = 0; i < n; i++) {
    result[i] = new Array(n).fill(0);
  }
  return result;
};
