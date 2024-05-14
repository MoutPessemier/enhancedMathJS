import { getDimensions, getMatrixMinor } from '../Helpers/index';

/**
 * Recursively calculate the determinant of a matrix, making use of the minor matrix
 * @param matrix The matrix
 * @returns The determinant of the matrix
 */
const determinant = (matrix: number[][]) => {
	const { rows, cols } = getDimensions(matrix);
	if (rows !== cols) {
		return undefined;
	}

	if (rows === 1) {
		return matrix[0][0];
	}

	if (rows === 2) {
		return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
	} else {
		let det = 0;
		for (let i = 0; i < matrix.length; i++) {
			const sign = Math.pow(-1, i);
			const factor = matrix[0][i];
			const minorMatrix = getMatrixMinor(matrix, 0, i);
			det += sign * factor * determinant(minorMatrix!)!;
		}

		return det;
	}
};

export default determinant;
