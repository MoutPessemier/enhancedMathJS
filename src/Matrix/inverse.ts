import { getDimensions, multiplyMatrix } from '../Helpers/index';

import cofactorMatrix from './cofactor';
import determinant from './determinant';
import transpose from './transpose';

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
	// TODO: Clean this up
	const adjointMatrix = transpose<number>(cofactor) as number[][];

	return multiplyMatrix(adjointMatrix, 1 / det);
};

export default matrixInverse;
