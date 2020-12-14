import factorial from '../factorial';
import { isNumber, isFraction } from '../Helpers/index';

/**
 * Calculates the probability of a permutation with a population of n and a sample size r
 * @param n The total population
 * @param r The sample size
 */
const permutation = (n: number, r: number): number | undefined => {
  if (0 <= r && r <= n) {
    if (factorial(n) && factorial(r) && factorial(n - r)) return factorial(n)! / factorial(n - r)!;
  }
  return undefined;
};

export default permutation;
