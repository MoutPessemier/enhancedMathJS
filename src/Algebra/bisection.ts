/**
 * Calculates the intersection points with the x-axis to a certain precision. The smaller the accuracy, the higher the precision.
 * @param a Left outer value of interval
 * @param b Right outer value of interval
 * @param accuracy How close the solution has te be to the real solution
 * @param f Function. e.g. 3x^3+5x^2+3x+5
 * @returns the value of x where f(a) = f(b) with the given approximation
 */
const bisection = (a: number, b: number, accuracy: number, f: (c: number) => number): number | null => {
	let left: number, right: number, x: number;
	left = a;
	right = b;
	x = (left + right) / 2;
	while (Math.abs(left - right) > accuracy) {
		if (Math.sign(f(x)) !== Math.sign(f(left))) {
			right = x;
			x = (left + right) / 2;
		} else if (Math.sign(f(x)) !== Math.sign(f(right))) {
			left = x;
			x = (left + right) / 2;
		} else {
			// no intersections found
			return null;
		}
	}
	return x;
};

export default bisection;
