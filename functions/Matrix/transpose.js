/**
 * Returns the transpose of a matrix
 * @param {[[]]} matrix A 2d array
 * @returns {[[]]} The transpose of the matrix
 */
const transpose = (matrix) => {
  return matrix[0].map((col, c) => matrix.map((row, r) => matrix[r][c]));
};

module.exports = transpose;
