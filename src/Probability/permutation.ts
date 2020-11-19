import factorial from '../factorial';

const permutation = (n: number, r: number): number => {
  return factorial(n) / factorial(n - r);
};

export default permutation;
