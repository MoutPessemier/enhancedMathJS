import { describe, test, expect } from 'vitest';

import combination from '../Probability/combination';

describe('Combination', () => {
	test('should return 1 for a 1C1', () => {
		const result = combination(1, 1);
		expect(result!.toString()).toBe('1');
	});

	test('should return 6 for a 4C2', () => {
		const result = combination(4, 2);
		expect(result!.toString()).toBe('6');
	});

	test('should return 1287 for a 13C5', () => {
		const result = combination(13, 5);
		expect(result!.toString()).toBe('1287');
	});

	test('should return 2.709909177e+58 for 200C89', () => {
		const result = combination(200, 89);
		expect(result!.toString()).toBe('2.7099091778516175766475545995162244775768017861168866192e+58');
	});

	test('should return undefined for fractional values', () => {
		// This test is purely for javascript users who can't read docs and still want to try and calculate a combination involving a fraction
		let result = combination(13 / 4, 5);
		expect(result).toBe(undefined);

		result = combination(13, 5 / 4);
		expect(result).toBe(undefined);

		result = combination(13 / 4, 5 / 4);
		expect(result).toBe(undefined);
	});

	test('should return undefined for non numerical values', () => {
		// This test is purely for javascript users who can't read docs and still want to try and calculate a combination involving a string
		//@ts-expect-error - Testing for non numerical values
		let result = combination('13', 5);
		expect(result).toBe(undefined);
		//@ts-expect-error - Testing for non numerical values
		result = combination(13, '5');
		expect(result).toBe(undefined);
		//@ts-expect-error - Testing for non numerical values
		result = combination('13', '5');
		expect(result).toBe(undefined);
	});

	test('should return undefined for n < r values', () => {
		const result = combination(1, 5);
		expect(result).toBe(undefined);
	});

	test('should return undefined for n < 0 values', () => {
		const result = combination(-7, 5);
		expect(result).toBe(undefined);
	});

	test('should return undefined for r < 0 values', () => {
		const result = combination(7, -5);
		expect(result).toBe(undefined);
	});
});
