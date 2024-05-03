import { getDimensions } from '../Helpers/index';
/**
 * Adds matrix A and B together
 * @param A Matrix A
 * @param B Matrix B
 */

const matrix_sum = (A: number[][], B: number[][]) => {
	const dimsA = getDimensions(A);
	const dimsB = getDimensions(B);
	if (dimsA.rows !== dimsB.rows || dimsA.cols !== dimsB.cols) {
		return undefined;
	}
	const sum = [];
	for (let i = 0; i < A.length; i++) {
		const row = [];
		for (let j = 0; j < A[i].length; j++) {
			row.push(A[i][j] + B[i][j]);
		}
		sum.push(row);
	}
	return sum;
};

export default matrix_sum;
