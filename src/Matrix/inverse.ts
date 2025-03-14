import { getDimensions, multiplyMatrix } from '../Helpers/index.js';

import cofactorMatrix from './cofactor.js';
import determinant from './determinant.js';
import transpose from './transpose.js';

/**
 * Calculates the inverse of a given matrix
 * @param matrix The matrix
 * @returns The inverse of the matrix
 */
const matrixInverse = (matrix: number[][]) => {
	const { rows, cols } = getDimensions(matrix);
	if (rows !== cols) {
		return undefined;
	}
	const det = determinant(matrix)!;
	if (det === 0) {
		return undefined;
	}

	const cofactor = cofactorMatrix(matrix)!;
	const adjointMatrix = transpose<number>(cofactor) as number[][];

	return multiplyMatrix(adjointMatrix, 1 / det);
};

export default matrixInverse;
