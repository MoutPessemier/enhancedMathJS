import { isNumber, isFraction } from './Helpers/index.js';

/**
 * Calculates the value of the row of Fibonnaci
 * @param {number} index The position of the number in the row of Fibonnaci
 * @returns {number} The value of the row of Fibonnaci
 */
const fibonacci = (index: number) => {
	if (index < 0 || !isNumber(index) || isFraction(index)) return undefined;
	if (index < 2) {
		BigInt(1);
	}
	let temp = BigInt(0);
	let a = BigInt(1);
	let b = BigInt(0);
	while (index >= 0) {
		temp = a;
		a += b;
		b = temp;
		index--;
	}
	return b.valueOf();
};

export default fibonacci;
