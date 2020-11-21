import combination from '../Probability/combination';

describe('Combination', () => {
  test('should return 1 for a 1C1', () => {
    const result = combination(1, 1);
    expect(result).toBe(1);
  });

  test('should return 6 for a 4C2', () => {
    const result = combination(4, 2);
    expect(result).toBe(6);
  });

  test('should return 1287 for a 13C5', () => {
    const result = combination(13, 5);
    expect(result).toBe(1287);
  });

  test('should return undefined for fractional values', () => {
    // This test is purely for javascript users who can't read docs and still want to try and calculate a combination involving a string
    //@ts-ignore
    let result = combination(13 / 4, 5);
    expect(result).toBe(undefined);
    //@ts-ignore
    result = combination(13, 5 / 4);
    expect(result).toBe(undefined);
    //@ts-ignore
    result = combination(13 / 4, 5 / 4);
    expect(result).toBe(undefined);
  });

  test('should return undefined for non numerical values', () => {
    //@ts-ignore
    let result = combination('13', 5);
    expect(result).toBe(undefined);
    //@ts-ignore
    result = combination(13, '5');
    expect(result).toBe(undefined);
    //@ts-ignore
    result = combination('13', '5');
    expect(result).toBe(undefined);
  });

  test('should return undefined for n < r values', () => {
    const result = combination(1, 5);
    expect(result).toBe(undefined);
  });

  test('should return undefined for n < 0 values', () => {
    const result = combination(-7, 5);
    expect(result).toBe(undefined);
  });

  test('should return undefined for r < 0 values', () => {
    const result = combination(7, -5);
    expect(result).toBe(undefined);
  });
});
