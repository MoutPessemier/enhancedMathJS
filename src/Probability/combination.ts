import factorial from '../factorial';

// TODO: above a certain threshold, it's not accurate anymore --> find a way to make it accurate ???BIGINT???
/**
 * Calculates the probability of a combination with a population of n and a sample size r
 * @param {number} n The size of the population
 * @param {number} r The sample size
 * @returns {number} The amount of possible combinations
 */
const combination = (n: number, r: number): number | undefined => {
  if (0 <= r && r <= n) {
    if (factorial(n) && factorial(r) && factorial(n - r)) return factorial(n)! / (factorial(r)! * factorial(n - r)!);
    return undefined;
  }
  return undefined;
};

export default combination;
