import { getDimensions } from '../Helpers/index.js';

/**
 * Calculates the matrix product of 2 matrices
 * @param A Matrix a
 * @param B Matrix b
 */
const matrix_product = (A: number[][], B: number[][]) => {
	const dimsA = getDimensions(A);
	const dimsB = getDimensions(B);
	if (dimsA.cols !== dimsB.rows) {
		return undefined;
	}
	const result = new Array<number[]>(dimsA.rows);
	for (let i = 0; i < dimsA.rows; i++) {
		result[i] = new Array<number>(dimsB.cols);
		for (let j = 0; j < dimsB.cols; j++) {
			result[i][j] = 0;
			for (let k = 0; k < dimsA.cols; k++) {
				result[i][j] += A[i][k] * B[k][j];
			}
		}
	}
	return result;
};

export default matrix_product;
