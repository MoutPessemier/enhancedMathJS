import { describe, test, expect } from 'vitest';

import fibonacci from '../fibonacci';

describe('Fibonacci', () => {
	test('should return 1 for 0', () => {
		const f = fibonacci(0);
		expect(f).toBe(1n);
	});

	test('should return 1 for 1', () => {
		const f = fibonacci(1);
		expect(f).toBe(1n);
	});

	test('should return 8 for 5', () => {
		const f = fibonacci(5);
		expect(f).toBe(8n);
	});

	test('should return 89 for 10', () => {
		const f = fibonacci(10);
		expect(f).toBe(89n);
	});

	test('should return 4.539736941653079e+41 for 200', () => {
		const f = fibonacci(200);
		expect(f).toBe(453973694165307953197296969697410619233826n);
	});

	test('should return undefined for negative values', () => {
		const f = fibonacci(-10);
		expect(f).toBe(undefined);
	});

	test('should return undefined for non numeric values', () => {
		// This test is purely for javascript users who can't read docs and still want to try and calucalte fibonnaci of a string
		//@ts-expect-error - Testing for non numerical values
		const f = fibonacci('5');
		expect(f).toBe(undefined);
	});

	test('should return undefined for fractional values', () => {
		const f = fibonacci(1 / 4);
		expect(f).toBe(undefined);
	});
});
