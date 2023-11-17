import { describe, test, expect } from 'vitest';

import bisection from '../Algebra/bisection';

describe('bisection', () => {
	test('should return 0 as intersection point for f(x) = x', () => {
		const result = bisection(-10, 10, 0.001, (x: number) => x);
		expect(result).toBeCloseTo(0, 3);
	});

	test('should return 1 as intersection point for f(x) = x^3 - x^2 + 2', () => {
		const result = bisection(-200, 300, 0.001, (x: number) => x * x * x - x * x + 2);
		expect(result).toBeCloseTo(-1, 3);
	});

	test('should return 1 as intersection point for f(x) = x^2 - 1', () => {
		let result = bisection(-2, 0, 0.001, (x: number) => x * x - 1);
		expect(result).toBeCloseTo(-1, 3);
		result = bisection(0, 2, 0.001, (x: number) => x * x - 1);
		expect(result).toBeCloseTo(1, 3);
	});

	test('constant function should return null', () => {
		const result = bisection(-10, 10, 0.01, () => 4);
		expect(result).toBeNull();
	});
});
