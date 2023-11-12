/**
 * Calculates the intersection points with the x-axis to a certain precision. The smaller the accuracy, the higher the precision.
 * @param a Left outer value of interval
 * @param b Right outer value of interval
 * @param accuracy How close the solution has te be to the real solution
 * @param f Function. e.g. 3x^3+5x^2+3x+5
 * @returns the value of x where f(a) = f(b) with the given approximation
 */
const bisection = (a: number, b: number, accuracy: number, f: (c: number) => number): number | null => {
	let l: number, r: number, x: number;
	l = a;
	r = b;
	x = (l + r) / 2;
	while (Math.abs(l - r) > accuracy) {
		if (Math.sign(f(x)) !== Math.sign(f(l))) {
			r = x;
			x = (l + r) / 2;
		} else if (Math.sign(f(x)) !== Math.sign(f(r))) {
			l = x;
			x = (l + r) / 2;
		} else {
			// no intersections found
			return null;
		}
	}
	return x;
};

export default bisection;
