import BigNumber from 'bignumber.js';
import { isNumber, isFraction } from './Helpers/index';

/**
 * Calculates the value of the row of Fibonnaci
 * @param {number} index The position of the number in the row of Fibonnaci
 * @returns {number} The value of the row of Fibonnaci
 */
const fibonacci = (index: number): BigNumber | undefined => {
	if (index < 0 || !isNumber(index) || isFraction(index)) return undefined;
	if (index < 2) new BigNumber(1);
	let temp = new BigNumber(0);
	let a = new BigNumber(1);
	let b = new BigNumber(0);
	while (index >= 0) {
		temp = a;
		a = a.plus(b);
		b = temp;
		index--;
	}
	return b;
};

export default fibonacci;
