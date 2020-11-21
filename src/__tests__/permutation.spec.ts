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

  test('should return undefined for fractional values', () => {
    //@ts-ignore
    let result = permutation(13 / 4, 5);
    expect(result).toBe(undefined);
    //@ts-ignore
    result = permutation(13, 5 / 4);
    expect(result).toBe(undefined);
    //@ts-ignore
    result = permutation(13 / 4, 5 / 4);
    expect(result).toBe(undefined);
  });

  test('should return undefined for non numerical values', () => {
    // This test is purely for javascript users who can't read docs and still want to try and calculate a permutation involving a string
    //@ts-ignore
    let result = permutation('13', 5);
    expect(result).toBe(undefined);
    //@ts-ignore
    result = permutation(13, '5');
    expect(result).toBe(undefined);
    //@ts-ignore
    result = permutation('13', '5');
    expect(result).toBe(undefined);
  });

  test('should return undefined for n < r values', () => {
    const result = permutation(1, 5);
    expect(result).toBe(undefined);
  });

  test('should return undefined for n < 0 values', () => {
    const result = permutation(-7, 5);
    expect(result).toBe(undefined);
  });

  test('should return undefined for r < 0 values', () => {
    const result = permutation(7, -5);
    expect(result).toBe(undefined);
  });
});
