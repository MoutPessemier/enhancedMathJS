import { describe, expect, test } from 'vitest';

import determinant from '../Matrix/determinant';

describe('Matrix Determinant', () => {
	test('should return the only value in a 1x1 matrix', () => {
		const matrix = [[5]];
		const result = determinant(matrix);
		expect(result).toBe(5);
	});

	test('should return the determinant of a 2x2 matrix', () => {
		const matrix = [
			[1, 2],
			[3, 4],
		];
		const result = determinant(matrix);
		expect(result).toBe(-2);
	});

	test('should return the determinant for a 3x3 matrix', () => {
		const matrix = [
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9],
		];
		const result = determinant(matrix);
		expect(result).toBe(0);
	});

	test('should return the determinant for a 3x3 matrix', () => {
		const matrix = [
			[4, 0, 3],
			[4, 5, 2],
			[7, 1, 9],
		];
		const result = determinant(matrix);
		expect(result).toBe(79);
	});

	test('should return the determinant for a 4x4 matrix', () => {
		const matrix = [
			[2, 9, 1, 4],
			[3, 7, 3, 8],
			[6, 9, 3, 2],
			[1, 7, 9, 5],
		];
		const result = determinant(matrix);
		expect(result).toBe(-1630);
	});

	test('should return the determinant for a 4x4 matrix', () => {
		const matrix = [
			[7, 7, 9, 6, 2],
			[1, 7, 4, 8, 7],
			[6, 4, 6, 8, 9],
			[3, 2, 5, 4, 6],
			[4, 1, 2, 3, 9],
		];
		const result = determinant(matrix);
		expect(result).toBe(-2849);
	});

	test('should return undefined for a non-square matrix', () => {
		const matrix = [
			[1, 2, 3],
			[4, 5, 6],
		];

		const result = determinant(matrix);
		expect(result).toBeUndefined();
	});
});
