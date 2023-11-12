import { describe, test, expect } from 'vitest';
import factorial from '../factorial';

describe('Factorial', () => {
	test('should return 1 for 0', () => {
		const f = factorial(0);
		expect(f!.toString()).toBe('1');
	});

	test('should return 1 for 1', () => {
		const f = factorial(1);
		expect(f!.toString()).toBe('1');
	});

	test('should return 120 for 5', () => {
		const f = factorial(5);
		expect(f!.toString()).toBe('120');
	});

	test('should return 2432902008176640000 for 20', () => {
		const f = factorial(20);
		expect(f!.toString()).toBe('2432902008176640000');
	});

	test('should return 7.257416e306 for 20', () => {
		const f = factorial(170);
		expect(f!.toString()).toBe(
			'7.2574156153079989673967282111292631147169916812964513765435777989005618434017061578523507492426174595114909912378385207766660225654427530253289007732075109024004302800582956039666125996582571043985582942575689663134396122625710949468067112055688804571933402126614528e+306',
		);
	});

	test('should return undefined for negative values', () => {
		const f = factorial(-10);
		expect(f).toBe(undefined);
	});

	test('should return undefined for non numeric values', () => {
		// This test is purely for javascript users who can't read docs and still want to try and factorize a string
		//@ts-expect-error - Testing for non numerical values
		const f = factorial('a');
		expect(f).toBe(undefined);
	});

	test('should return undefined for fractional values', () => {
		const f = factorial(1 / 4);
		expect(f).toBe(undefined);
	});
});
