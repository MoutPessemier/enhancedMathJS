import { isNumber } from '../Helpers';

/**
 * Calculates the discriminator of a second degree equation
 * @param {number} a The coefficient of x^2
 * @param {number} b The coefficient of x
 * @param {number} c The constant
 * @returns {number} The discriminator
 */
const discriminator = (a: number, b: number, c: number) => {
	if (!isNumber(a) || !isNumber(b) || !isNumber(c)) return undefined;
	return Math.pow(b, 2) - 4 * a * c;
};

/**
 * Calculates the intersection points of a second degree equation
 * @param {number} a The coefficient of x^2
 * @param {number} b The coefficient of x
 * @param {number} c The constant
 * @returns {[]} The intersection points
 */
export const intersection_points = (a: number, b: number, c: number) => {
	if (a !== 0) {
		const D = discriminator(a, b, c);
		if (typeof D !== 'undefined') {
			if (D < 0) return [];
			if (D === 0) {
				return [-b / (2 * a)];
			}
			return [(-b + Math.sqrt(D)) / (2 * a), (-b - Math.sqrt(D)) / (2 * a)];
		}
	}
	return undefined;
};

export default discriminator;
