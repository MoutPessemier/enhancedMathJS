/**
 * Calculates the discriminator of a second degree equation
 * @param {number} a The coefficient of x^2
 * @param {number} b The coefficient of x
 * @param {number} c The constant
 * @returns {number} The discriminator
 */
const discriminator = (a: number, b: number, c: number) => {
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
  const D = discriminator(a, b, c);
  if (D < 0) return [];
  if (D === 0) return [-b / (2 * a)];
  return [(-b + Math.sqrt(D)) / (2 * a), (-b - Math.sqrt(D)) / (2 * a)];
};

export default discriminator;
