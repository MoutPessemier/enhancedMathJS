import { fillEmptyRows, getHighestRowLength } from '../Helpers';

/**
 * Returns the transposed matrix
 * @param {Array<any[]>} matrix A 2d array
 * @returns {Array<any[]>} The transposed matrix
 */
const transpose = (matrix: Array<any[]>): Array<any[]> => {
  const rowlength = getHighestRowLength(matrix);
  const filledMatrix = fillEmptyRows(matrix, rowlength, null);
  return filledMatrix[0].map((_, colIndex) => filledMatrix.map(row => row[colIndex]));
};

export default transpose;
