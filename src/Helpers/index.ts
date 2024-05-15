/**
 * Check if the parameter is of type number
 * @param a Any input
 */
export const isNumber = <T>(a: T): boolean => {
	return typeof a === 'number';
};

// see https://stackoverflow.com/questions/3885817/how-do-i-check-that-a-number-is-float-or-integer/20779354#20779354
/**
 * Check if the parameter is a fractional value
 * @param a The number a
 */
export const isFraction = (a: number) => {
	return Number(a) === a && a % 1 !== 0;
};

/**
 * Gets the dimensions of the matrix a
 * @param a A matrix (2D array)
 */
export const getDimensions = <T>(a: T[][]) => {
	const dims = { rows: 0, cols: 0 };
	dims.rows = a.length;
	dims.cols = a[0].length;
	return dims;
};

/**
 * Check if the matrix contains string values.
 * @param matrix The matrix
 */
export const containsStringValues = <T>(matrix: T[][]) => {
	const result = matrix.map((row) => row.every((e: T) => typeof e === 'string'));
	return result.includes(true);
};

/**
 * Checks if the matrix is a square one
 * @param matrix The matrix
 */
export const isSquareMatrix = <T>(matrix: T[][]) => {
	const dim = getDimensions(matrix);
	return dim.rows === dim.cols;
};

/**
 * Loops through the matrix to find the row with the most elements an returns how many elements there are
 * @param matrix The given matrix
 * @returns The amount of elements
 */
export const getHighestRowLength = <T>(matrix: T[][]) => {
	return matrix.reduce((accumulator, current) => {
		if (accumulator < current.length) {
			return current.length;
		}
		return accumulator;
	}, 0);
};

export const fillEmptyRows = <T>(matrix: T[][], rowLength: number, value: T) => {
	return matrix.map((row) => {
		// check for empty array
		if (row.length === 0) {
			return new Array<T>(rowLength).fill(value);
			// check for empty spots
		} else if (Object.values(row).length !== row.length) {
			return Array.from(row, (_, i) => {
				if (!(i in row)) return null;
				else return row[i];
			});
		}
		return row;
	});
};

/**
 * Generates an identity matrix of size n
 * @param n The size of the identity matrix
 */
export const generateIdentityMatrix = (n: number) => {
	if (n < 0 || !isNumber(n) || isFraction(n)) return undefined;
	const result = new Array<number[]>(n);
	for (let i = 0; i < n; i++) {
		result[i] = new Array<number>(n).fill(0);
		result[i][i] = 1;
	}
	return result;
};

/**
 * Generates a 0 matrix the size of n
 * @param n The size of the 0 matrix
 */
export const generateZeroMatrix = (n: number) => {
	if (n < 0 || !isNumber(n) || isFraction(n)) return undefined;
	const result = new Array<number[]>(n);
	for (let i = 0; i < n; i++) {
		result[i] = new Array<number>(n).fill(0);
	}
	return result;
};

/**
 * Swaps 2 rows.
 * @param matrix The matrix
 * @param r1 First row
 * @param r2 Second row
 */
export const swapRow = <T>(matrix: T[][], r1: number, r2: number) => {
	if (matrix.length <= r1 || r1 < 0 || matrix.length <= r2 || r2 < 0 || !isNumber(r1) || !isNumber(r2))
		return undefined;
	const tempRow = matrix[r1];
	matrix[r1] = matrix[r2];
	matrix[r2] = tempRow;
	return matrix;
};

/**
 * Swaps two columns
 * @param matrix The matrix
 * @param c1 First column
 * @param c2 Second column
 */

export const swapCol = <T>(matrix: T[][], c1: number, c2: number) => {
	if (matrix[0].length <= c1 || c1 < 0 || matrix[0].length <= c2 || c2 < 0 || !isNumber(c1) || !isNumber(c2))
		return undefined;
	let element;
	for (let i = 0; i < matrix.length; i++) {
		element = matrix[i][c1];
		matrix[i][c1] = matrix[i][c2];
		matrix[i][c2] = element;
	}
	return matrix;
};

/**
 * Swaps 2 elements in an array
 * @param matrix The matrix
 * @param r1 The first element's row index
 * @param c1 The first element's column index
 * @param r2 The second element's row index
 * @param c2 The second element's column index
 */
export const swapElement = <T>(matrix: T[][], r1: number, c1: number, r2: number, c2: number) => {
	if (
		matrix.length <= r1 ||
		matrix.length <= r2 ||
		matrix[0].length <= c1 ||
		matrix[0].length <= c2 ||
		r1 < 0 ||
		r2 < 0 ||
		c1 < 0 ||
		c2 < 0 ||
		!isNumber(r1) ||
		!isNumber(r2) ||
		!isNumber(c1) ||
		!isNumber(c2)
	)
		return undefined;
	const element = matrix[r1][c1];
	matrix[r1][c1] = matrix[r2][c2];
	matrix[r2][c2] = element;
	return matrix;
};

/**
 * Multiplies the whole matrix with lambda λX
 * @param matrix The matrix
 * @param λ The number with which you want to multiply the matrix
 * @param precision [precision = 3] The specificity to which you want to round the numbers
 */
export const multiplyMatrix = (matrix: number[][], λ: number, precision: number = 3) => {
	if (!isNumber(λ)) return undefined;
	return matrix.map((row) => row.map((element) => Number((element * λ).toPrecision(precision))));
};

/**
 * Multiplies a single row of the matrix with λ
 * @param matrix The matrix
 * @param row The row which you want to multiply
 * @param λ The number with which you want to multiply the row
 */
export const multiplyRow = (matrix: number[][], row: number, λ: number) => {
	if (matrix.length <= row || !isNumber(λ)) return undefined;
	matrix[row] = matrix[row].map((v) => v * λ);
	return matrix;
};

/**
 * Multiplies a single column of the matrix with λ
 * @param matrix The matrix
 * @param col The column which you want to multiply
 * @param λ The number with which you want to multiply the column
 */
export const multiplyCol = (matrix: number[][], col: number, λ: number) => {
	if (matrix[0].length <= col || !isNumber(λ)) return undefined;
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			if (j === col) matrix[i][j] *= λ;
		}
	}
	return matrix;
};

/**
 * Counts the amount of non 0 rows and subtracts it from the amount of rows in the matrix
 * @param matrix The matrix
 */
export const rank = (matrix: number[][]) => {
	const trueVector = matrix.map((row) => row.every((e) => e === 0));
	return matrix.length - trueVector.filter(Boolean).length;
};

/**
 * Calculates the minor of a given matrix
 * @param matrix The matrix
 * @param row The row
 * @param column The column
 */
export const getMatrixMinor = (matrix: number[][], row: number, column: number) => {
	const { rows, cols } = getDimensions(matrix);
	if (row > rows - 1 || column > cols - 1) return undefined;
	return matrix.reduce((result: number[][], current, i) => {
		if (i !== row) {
			result.push(current.filter((_, j) => j !== column));
		}
		return result;
	}, []);
};
