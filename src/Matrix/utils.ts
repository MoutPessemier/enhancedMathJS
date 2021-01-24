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

/**
 * Swaps 2 rows.
 * @param matrix The matrix
 * @param r1 First row
 * @param r2 Second row
 */
export const swapRow = (matrix: Array<any[]>, r1: number, r2: number) => {
  if (matrix.length <= r1 || r1 < 0 || matrix.length <= r2 || r2 < 0 || !isNumber(r1) || !isNumber(r2))
    return undefined;
  const tempRow = matrix[r1];
  matrix[r1] = matrix[r2];
  matrix[r2] = tempRow;
  return matrix;
};

/**
 * Swaps two columns
 * @param matrix The matrix
 * @param c1 First column
 * @param c2 Second column
 */

export const swapCol = (matrix: Array<any[]>, c1: number, c2: number) => {
  if (matrix[0].length <= c1 || c1 < 0 || matrix[0].length <= c2 || c2 < 0 || !isNumber(c1) || !isNumber(c2))
    return undefined;
  let element;
  for (let i = 0; i < matrix.length; i++) {
    element = matrix[i][c1];
    matrix[i][c1] = matrix[i][c2];
    matrix[i][c2] = element;
  }
  return matrix;
};

/**
 * Swaps 2 elements in an array
 * @param matrix The matrix
 * @param r1 The first element's row index
 * @param c1 The first element's column index
 * @param r2 The second element's row index
 * @param c2 The second element's column index
 */
export const swapElement = (matrix: Array<any[]>, r1: number, c1: number, r2: number, c2: number) => {
  if (
    matrix.length <= r1 ||
    matrix.length <= r2 ||
    matrix[0].length <= c1 ||
    matrix[0].length <= c2 ||
    r1 < 0 ||
    r2 < 0 ||
    c1 < 0 ||
    c2 < 0 ||
    !isNumber(r1) ||
    !isNumber(r2) ||
    !isNumber(c1) ||
    !isNumber(c2)
  )
    return undefined;
  const element = matrix[r1][c1];
  matrix[r1][c1] = matrix[r2][c2];
  matrix[r2][c2] = element;
  return matrix;
};

/**
 * Multiplies the whole matrix with lambda λX
 * @param matrix The matrix
 * @param λ The number with which you want to multiply the matrix
 */
export const multiplyMatrix = (matrix: Array<any[]>, λ: number) => {
  if (!isNumber(λ)) return undefined;
  return matrix.map(row => row.map(element => element * λ));
};

/**
 * Multiplies a single row of the matrix with λ
 * @param matrix The matrix
 * @param row The row which you want to multiply
 * @param λ The number with which you want to multiply the row
 */
export const multiplyRow = (matrix: Array<number[]>, row: number, λ: number) => {
  if (matrix.length <= row || !isNumber(λ)) return undefined;
  matrix[row] = matrix[row].map(v => v * λ);
  return matrix;
};

/**
 * Multiplies a single column of the matrix with λ
 * @param matrix The matrix
 * @param col The column which you want to multiply
 * @param λ The number with which you want to multiply the column
 */
export const multiplyCol = (matrix: Array<number[]>, col: number, λ: number) => {
  if (matrix[0].length <= col || !isNumber(λ)) return undefined;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (j === col) matrix[i][j] *= λ;
    }
  }
  return matrix;
};

/**
 * Counts the amount of non 0 rows and subtracts it from the amount of rows in the matrix
 * @param matrix The matrix
 */
export const rank = (matrix: Array<number[]>) => {
  const trueVector = matrix.map(row => row.every(e => e === 0));
  return matrix.length - trueVector.filter(Boolean).length;
};
