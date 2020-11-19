import permutation from '../Probability/permutation';

describe('Combination', () => {
  test('should return 1 for a 1P1', () => {
    const result = permutation(1, 1);
    expect(result).toBe(1);
  });

  test('should return 6 for a 4P2', () => {
    const result = permutation(4, 2);
    expect(result).toBe(12);
  });

  test('should return 1287 for a 13CP', () => {
    const result = permutation(13, 5);
    expect(result).toBe(154440);
  });
});
