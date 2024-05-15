import { describe, test, expect } from 'vitest';

import inverse from '../Matrix/inverse';

describe('Matrix Inverse', () => {
	test('should return undefined for non-square matrix', () => {
		const matrix = [
			[1, 2],
			[3, 4],
			[5, 6],
		];
		const result = inverse(matrix);
		expect(result).toBeUndefined();
	});

	test('should return identity matrix for identity matrix input', () => {
		const matrix = [
			[1, 0],
			[0, 1],
		];
		const result = inverse(matrix);
		expect(result).toEqual(matrix);
	});

	test('should return inverse for 2x2 matrix', () => {
		const matrix = [
			[4, 7],
			[2, 6],
		];
		const expectedInverse = [
			[0.6, -0.7],
			[-0.2, 0.4],
		];
		const result = inverse(matrix);
		expect(result).toEqual(expectedInverse);
	});

	test('should return inverse for 3x3 matrix', () => {
		const matrix = [
			[3, 0, 2],
			[2, 0, -2],
			[0, 1, 1],
		];
		const expectedInverse = [
			[0.2, 0.2, 0],
			[-0.2, 0.3, 1],
			[0.2, -0.3, 0],
		];
		const result = inverse(matrix);
		expect(result).toEqual(expectedInverse);
	});

	test('should return undefined for singular matrix (det = 0)', () => {
		const matrix = [
			[2, 4],
			[1, 2],
		];
		const result = inverse(matrix);
		expect(result).toBeUndefined();
	});
});
