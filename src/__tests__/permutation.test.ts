import { describe, test, expect } from 'vitest';

import permutation from '../Probability/permutation';

describe('Combination', () => {
	test('should return 1 for a 1P1', () => {
		const result = permutation(1, 1);
		expect(result).toEqual(1n);
	});
	test('should return 6 for a 4P2', () => {
		const result = permutation(4, 2);
		expect(result).toBe(12n);
	});
	test('should return 154440 for a 13P5', () => {
		const result = permutation(13, 5);
		expect(result).toBe(154440n);
	});

	test('should return 62815650955529472000n for 100P10', () => {
		const result = permutation(1000, 100);
		expect(result).toBe(
			5958926632240478155489389057946132722598279588777288866613428027720091866834339557556406953783393337191792337384343797137527180562707601151082428455887739138152983603695993602780124665235348032787297990137398327480690965409929969664334240631387010833309096272433060469800960000000000000000000000000n,
		);
	});

	test('should return undefined for fractional values', () => {
		let result = permutation(13 / 4, 5);
		expect(result).toBe(undefined);

		result = permutation(13, 5 / 4);
		expect(result).toBe(undefined);

		result = permutation(13 / 4, 5 / 4);
		expect(result).toBe(undefined);
	});
	test('should return undefined for non numerical values', () => {
		// This test is purely for javascript users who can't read docs and still want to try and calculate a permutation involving a string
		//@ts-expect-error - This is a test to make sure that the function will not accept a string
		let result = permutation('13', 5);
		expect(result).toBe(undefined);
		//@ts-expect-error - This is a test to make sure that the function will not accept a string
		result = permutation(13, '5');
		expect(result).toBe(undefined);
		//@ts-expect-error - This is a test to make sure that the function will not accept a string
		result = permutation('13', '5');
		expect(result).toBe(undefined);
	});
	test('should return undefined for n < r values', () => {
		const result = permutation(1, 5);
		expect(result).toBe(undefined);
	});
	test('should return undefined for n < 0 values', () => {
		const result = permutation(-7, 5);
		expect(result).toBe(undefined);
	});
	test('should return undefined for r < 0 values', () => {
		const result = permutation(7, -5);
		expect(result).toBe(undefined);
	});
});
