import { describe, test, expect } from 'vitest';

import factorial from '../factorial';

describe('Factorial', () => {
	test('should return 1 for 0', () => {
		const f = factorial(0);
		expect(f).toBe(1n);
	});

	test('should return 1 for 1', () => {
		const f = factorial(1);
		expect(f).toBe(1n);
	});

	test('should return 120 for 5', () => {
		const f = factorial(5);
		expect(f).toBe(120n);
	});

	test('should return 2432902008176640000 for 20', () => {
		const f = factorial(20);
		expect(f).toBe(2432902008176640000n);
	});

	test('should return 7.257416e306 for 170', () => {
		const f = factorial(170);
		expect(f).toBe(
			7257415615307998967396728211129263114716991681296451376543577798900561843401706157852350749242617459511490991237838520776666022565442753025328900773207510902400430280058295603966612599658257104398558294257568966313439612262571094946806711205568880457193340212661452800000000000000000000000000000000000000000n,
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
