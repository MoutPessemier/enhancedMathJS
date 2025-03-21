import { fillEmptyRows, getHighestRowLength } from '../Helpers/index.js';

/**
 * Returns the transposed matrix
 * @param {Array<any[]>} matrix A 2d array
 * @returns {Array<any[]>} The transposed matrix
 */
const transpose = <T>(matrix: T[][]) => {
	const rowLength = getHighestRowLength(matrix);
	const filledMatrix = fillEmptyRows(matrix, rowLength, null);
	return filledMatrix[0].map((_, colIndex) => filledMatrix.map((row) => row[colIndex]));
};

export default transpose;
