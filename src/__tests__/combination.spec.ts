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

  test('should return 27593523553342842144 for a 72C26', () => {
    const result = combination(72, 26);
    expect(result).toBe(27593523553342842144);
  });
});
