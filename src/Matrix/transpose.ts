/**
 * Returns the transpose of a matrix
 * @param {Array<any[]>} matrix A 2d array
 * @returns {Array<any[]>} The transpose of the matrix
 */
const transpose = (matrix: Array<any[]>) => {
  return matrix[0].map((col, c) => matrix.map((row, r) => matrix[r][c]));
};

export default transpose;
