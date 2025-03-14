import { isNumber, isFraction } from './Helpers/index.js';

/**
 * Calculates the factorial of n
 * @param {number} n The amount
 * @returns {number} The factorial of n
 */
const factorial = (n: number) => {
	if (n < 0 || !isNumber(n) || isFraction(n)) return undefined;
	if (n === 0 || n === 1) return BigInt(1);
	let result = BigInt(1);
	for (let i = n; i > 0; i--) {
		result *= BigInt(i);
	}
	return result.valueOf();
};

export default factorial;
