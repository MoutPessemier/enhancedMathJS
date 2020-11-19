import factorial from '../factorial';

/**
 * Calculates the probability of a permutation with a population of n and a sample size r
 * @param n The total population
 * @param r The sample size
 */
const permutation = (n: number, r: number): number => {
  return factorial(n) / factorial(n - r);
};

export default permutation;
