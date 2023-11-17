import { describe, test, expect } from 'vitest';

import permutation from '../Probability/permutation';

describe('Combination', () => {
	test('should return 1 for a 1P1', () => {
		const result = permutation(1, 1);
		expect(result!.toString()).toEqual('1');
	});
	test('should return 6 for a 4P2', () => {
		const result = permutation(4, 2);
		expect(result!.toString()).toBe('12');
	});
	test('should return 1287 for a 13P5', () => {
		const result = permutation(13, 5);
		expect(result!.toString()).toBe('154440');
	});

	test('should return 5.958926632e+297 for 1000P100', () => {
		const result = permutation(1000, 100);
		expect(result!.toString()).toBe(
			'5.95892663224047815548938905794613272259827958877728886661342802772009186683433955755640695378339333719179233738434379713752718056270760115108242845588773913815298360369599360278012466523534803278729799013739832748069096540992996966433424063138701083330909627243306046980096e+297',
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
