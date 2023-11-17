import { describe, test, expect } from 'vitest';

import {
	isSquareMatrix,
	getHighestRowLength,
	generateIdentityMatrix,
	generateZeroMatrix,
	swapCol,
	swapElement,
	swapRow,
	multiplyMatrix,
	multiplyRow,
	multiplyCol,
	rank,
	// calculateCofactorMatrix
} from '../Helpers';

describe('Helper functions', () => {
	test('square matrix should return true', () => {
		const matrix = [
			[1, 2],
			[3, 4],
		];
		const result = isSquareMatrix(matrix);
		expect(result).toBeTruthy();
	});

	test('not square matrix should return false', () => {
		const matrix = [
			[1, 2, 3],
			[2, 4, 6],
		];
		const result = isSquareMatrix(matrix);
		expect(result).toBeFalsy();
	});

	test('highest number of elements in a row should be 4', () => {
		const matrix = [[1, 2], [1, 2, 3], [1, 2, 3, 4], [0]];
		const result = getHighestRowLength(matrix);
		expect(result).toEqual(4);
	});

	test('highest number of elements in a row should be 4 when two rows have the same amount of elements', () => {
		const matrix = [[1, 2], [1, 2, 3, 4], [1, 2, 3, 4], [0]];
		const result = getHighestRowLength(matrix);
		expect(result).toEqual(4);
	});

	test('highest number of elements in a row should be 0 for an empty array', () => {
		const matrix = [[]];
		const result = getHighestRowLength(matrix);
		expect(result).toEqual(0);
	});

	test('should return undefined for negative values - Identity', () => {
		const result = generateIdentityMatrix(-7);
		expect(result).toBeUndefined();
	});

	test('should return undefined for fraction values - Identity', () => {
		const result = generateIdentityMatrix(7 / 10);
		expect(result).toBeUndefined();
	});

	test('should return undefined for non numeric values - Identity', () => {
		//@ts-expect-error - Testing for non numerical values
		const result = generateIdentityMatrix('hello');
		expect(result).toBeUndefined();
	});

	test('should return a 1x1 matrix for n = 1 - Identity', () => {
		const result = generateIdentityMatrix(1);
		expect(result).toEqual([[1]]);
	});

	test('should return a 5x5 matrix for n = 5 - Identity', () => {
		const result = generateIdentityMatrix(5);
		expect(result).toEqual([
			[1, 0, 0, 0, 0],
			[0, 1, 0, 0, 0],
			[0, 0, 1, 0, 0],
			[0, 0, 0, 1, 0],
			[0, 0, 0, 0, 1],
		]);
	});

	test('should return undefined for negative values - Zero', () => {
		const result = generateZeroMatrix(-7);
		expect(result).toBeUndefined();
	});

	test('should return undefined for fraction values - Zero', () => {
		const result = generateZeroMatrix(7 / 10);
		expect(result).toBeUndefined();
	});

	test('should return undefined for non numeric values - Zero', () => {
		//@ts-expect-error - Testing for non numerical values
		const result = generateZeroMatrix('hello');
		expect(result).toBeUndefined();
	});

	test('should return a 1x1 matrix for n = 1 - Zero', () => {
		const result = generateZeroMatrix(1);
		expect(result).toEqual([[0]]);
	});

	test('should return a 5x5 matrix for n = 5 - Zero', () => {
		const result = generateZeroMatrix(5);
		expect(result).toEqual([
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0],
		]);
	});

	test('should return undefined for a row higher than the dimension of the matrix', () => {
		const matrix = [
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9],
		];
		let result = swapRow(matrix, 1, 4);
		expect(result).toBeUndefined();
		result = swapRow(matrix, 4, 1);
		expect(result).toBeUndefined();
		result = swapRow(matrix, -4, 1);
		expect(result).toBeUndefined();
		result = swapRow(matrix, 1, -2);
		expect(result).toBeUndefined();
	});

	test('should return undefined for a non numeric values', () => {
		const matrix = [
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9],
		];
		//@ts-expect-error - Testing for non numerical values
		let result = swapRow(matrix, 'A', 2);
		expect(result).toBeUndefined();
		//@ts-expect-error - Testing for non numerical values
		result = swapRow(matrix, 2, 'A');
		expect(result).toBeUndefined();
	});

	test('should return undefined for a column higher than the dimension of the matrix', () => {
		const matrix = [
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9],
		];
		let result = swapCol(matrix, 1, 4);
		expect(result).toBeUndefined();
		result = swapCol(matrix, 4, 1);
		expect(result).toBeUndefined();
	});

	test('should return undefined for a non numeric values', () => {
		const matrix = [
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9],
		];
		//@ts-expect-error - Testing for non numerical values
		let result = swapCol(matrix, 'A', 2);
		expect(result).toBeUndefined();
		//@ts-expect-error - Testing for non numerical values
		result = swapCol(matrix, 2, 'A');
		expect(result).toBeUndefined();
	});

	test('should return undefined for a row and a column higher than the dimension of the matrix', () => {
		const matrix = [
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9],
		];
		let result = swapElement(matrix, 1, 2, 3, 5);
		expect(result).toBeUndefined();
		result = swapElement(matrix, 1, 2, 5, 3);
		expect(result).toBeUndefined();
		result = swapElement(matrix, 1, 4, 3, 3);
		expect(result).toBeUndefined();
		result = swapElement(matrix, 4, 2, 3, 3);
		expect(result).toBeUndefined();
		result = swapElement(matrix, 4, 2, 3, 5);
		expect(result).toBeUndefined();
		//@ts-expect-error - Testing for non numerical values
		result = swapElement(matrix, 'a', 2, 2, 0);
		expect(result).toBeUndefined();
		//@ts-expect-error - Testing for non numerical values
		result = swapElement(matrix, 1, 'a', 1, 0);
		expect(result).toBeUndefined();
		//@ts-expect-error - Testing for non numerical values
		result = swapElement(matrix, 1, 2, 'a', 0);
		expect(result).toBeUndefined();
		//@ts-expect-error - Testing for non numerical values
		result = swapElement(matrix, 0, 2, 0, 'a');
		expect(result).toBeUndefined();
	});

	test('should swap 2 rows', () => {
		const matrix = [
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9],
		];
		const result = swapRow(matrix, 1, 2);
		expect(result).toEqual([
			[1, 2, 3],
			[7, 8, 9],
			[4, 5, 6],
		]);
	});

	test('should swap 2 columns', () => {
		const matrix = [
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9],
		];
		const result = swapCol(matrix, 0, 1);
		expect(result).toEqual([
			[2, 1, 3],
			[5, 4, 6],
			[8, 7, 9],
		]);
	});

	test('should swap 2 elements', () => {
		const matrix = [
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9],
		];
		const result = swapElement(matrix, 0, 1, 1, 2);
		expect(result).toEqual([
			[1, 6, 3],
			[4, 5, 2],
			[7, 8, 9],
		]);
	});

	test('should return undefined for non numeric values (matrix)', () => {
		const matrix = [
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9],
		];
		//@ts-expect-error - Testing for non numerical values
		const result = multiplyMatrix(matrix, 'abc');
		expect(result).toBeUndefined();
	});

	test('should multiply the whole matrix with 2', () => {
		const matrix = [
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9],
		];
		const result = multiplyMatrix(matrix, 2);
		expect(result).toEqual([
			[2, 4, 6],
			[8, 10, 12],
			[14, 16, 18],
		]);
	});

	test('should return undefined for non numeric values (row)', () => {
		const matrix = [
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9],
		];
		//@ts-expect-error - Testing for non numerical values
		const result = multiplyRow(matrix, 'abc');
		expect(result).toBeUndefined();
	});

	test('should multiply row 1 with 2', () => {
		const matrix = [
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9],
		];
		const result = multiplyRow(matrix, 1, 2);
		expect(result).toEqual([
			[1, 2, 3],
			[8, 10, 12],
			[7, 8, 9],
		]);
	});

	test('should return undefined for non numeric values (col)', () => {
		const matrix = [
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9],
		];
		//@ts-expect-error - Testing for non numerical values
		const result = multiplyCol(matrix, 'abc');
		expect(result).toBeUndefined();
	});

	test('should multiply col 1 with 2', () => {
		const matrix = [
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9],
		];
		const result = multiplyCol(matrix, 1, 2);
		expect(result).toEqual([
			[1, 4, 3],
			[4, 10, 6],
			[7, 16, 9],
		]);
	});

	test('should return 2 for 2x2 with no 0 rows', () => {
		const matrix = [
			[1, 2],
			[4, 5],
		];
		const result = rank(matrix);
		expect(result).toBe(2);
	});

	test('should return 2 for 3x2 with 1 0 row', () => {
		const matrix = [
			[1, 2],
			[4, 5],
			[0, 0],
		];
		const result = rank(matrix);
		expect(result).toBe(2);
	});

	test('should return 2 for 3x2 with 1 0 row on a different row', () => {
		const matrix = [
			[1, 2],
			[0, 0],
			[4, 5],
		];
		const result = rank(matrix);
		expect(result).toBe(2);
	});

	// test('should return cofactor of matrix', () => {
	//   const matrix = [
	//     [2, 3, 5],
	//     [0, 7, 2],
	//     [1, 3, 2]
	//   ];
	//   const result = calculateCofactorMatrix(matrix);
	//   expect(result).toEqual([
	//     [8, 2, -7],
	//     [9, -1, -3],
	//     [-29, -4, 14]
	//   ]);
	// });
});
