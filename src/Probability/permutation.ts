import BigNumber from 'bignumber.js';

import factorial from '../factorial';

/**
 * Calculates the probability of a permutation with a population of n and a sample size r
 * @param n The total population
 * @param r The sample size
 */
const permutation = (n: number, r: number): BigNumber | undefined => {
	if (0 > r || r > n) {
		return undefined;
	}
	if (!factorial(n) || !factorial(r) || !factorial(n - r)) {
		return undefined;
	}
	return new BigNumber(factorial(n)!.dividedBy(factorial(n - r)!));
};

export default permutation;
