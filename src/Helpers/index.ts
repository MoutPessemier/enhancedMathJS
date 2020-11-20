/**
 * Check if the parameter is of type number
 * @param a Any input
 */
export const isNumber = (a: any): boolean => {
  return typeof a === 'number';
};

// see https://stackoverflow.com/questions/3885817/how-do-i-check-that-a-number-is-float-or-integer/20779354#20779354
/**
 * Check if the parameter is a fractional value
 * @param a The number a
 */
export const isFraction = (a: number): boolean => {
  return Number(a) === a && a % 1 !== 0;
};
