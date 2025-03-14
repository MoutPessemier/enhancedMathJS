import { getDimensions, getMatrixMinor } from '../Helpers/index.js';

import determinant from './determinant.js';

/**
 * Calculates the co-factor matrix of a given matrix
 * @param matrix The matrix
 * @returns The co-factor matrix
 */
const cofactorMatrix = (matrix: number[][]) => {
	const { rows, cols } = getDimensions(matrix);

	if (rows !== cols) {
		return undefined;
	}

	const cofactor = new Array<number[]>();

	for (let i = 0; i < rows; i++) {
		const row = new Array<number>();
		for (let j = 0; j < cols; j++) {
			const sign = Math.pow(-1, i + j);
			const minor = getMatrixMinor(matrix, i, j);
			const det = determinant(minor!)!;
			const result = sign * det;
			// Convert -0 to 0 to ensure consistent results
			row.push(Object.is(result, -0) ? 0 : result);
		}
		cofactor.push(row);
	}

	return cofactor;
};

export default cofactorMatrix;
