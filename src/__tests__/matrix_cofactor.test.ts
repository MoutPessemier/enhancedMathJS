import { test, describe, expect } from 'vitest';

import cofactorMatrix from '../Matrix/cofactor';

describe('Matrix Co-factor', () => {
	test('should return correct cofactor matrix for 2x2 matrix', () => {
		const matrix = [
			[1, 2],
			[3, 4],
		];
		const expected = [
			[4, -3],
			[-2, 1],
		];
		const result = cofactorMatrix(matrix);
		expect(result).toEqual(expected);
	});

	test('should return correct cofactor matrix for 3x3 matrix', () => {
		const matrix = [
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9],
		];
		const expected = [
			[-3, 6, -3],
			[6, -12, 6],
			[-3, 6, -3],
		];
		const result = cofactorMatrix(matrix);
		expect(result).toEqual(expected);
	});

	test('should return correct cofactor matrix for 4x4 matrix', () => {
		const matrix = [
			[1, 2, 3, 4],
			[5, 6, 7, 8],
			[9, 10, 11, 12],
			[13, 14, 15, 16],
		];
		const expected = [
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0],
		];
		const result = cofactorMatrix(matrix);
		expect(result).toEqual(expected);
	});
	test('should return correct cofactor matrix for 4x4 matrix', () => {
		const matrix = [
			[1, 2, 3, 23],
			[4, 5, 6, 1],
			[7, 8, 9, 15],
			[34, 65, 22, 34],
		];
		const expected = [
			[3689, -1384, -1269, -222],
			[7346, -2704, -4050, 444],
			[-6391, 2792, 1971, -222],
			[108, -216, 108, 0],
		];
		const result = cofactorMatrix(matrix);
		expect(result).toEqual(expected);
	});

	test('should return undefined when input matrix is not square', () => {
		const matrix = [
			[1, 2, 3],
			[4, 5, 6],
		];
		const result = cofactorMatrix(matrix);
		expect(result).toBeUndefined();
	});
});
