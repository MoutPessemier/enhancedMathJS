import { describe, test, expect } from 'vitest';

import stemleafplot from '../Probability/stemleafplot.js';

describe('Stem and Leaf plot', () => {
	test('data should be presented correctly in stem and leaf plot', () => {
		const data = [22, 7, 19, 16, 102, 78];
		const result = stemleafplot(data);
		expect(result).toMatch(`0|7
1|69
2|2
7|8
10|2
`);
	});

	test('data only < 10', () => {
		const data = [0, 2, 1, 9, 9, 0, 7, 4, 2, 2, 8, 8, 8, 9];
		const result = stemleafplot(data);
		expect(result).toMatch('0|00122247888999');
	});
});
