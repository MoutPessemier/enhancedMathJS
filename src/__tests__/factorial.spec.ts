import factorial from '../factorial';

describe('Factorial', () => {
  test('should return 1 for 0', () => {
    const f = factorial(0);
    expect(f).toBe(1);
  });

  test('should return 1 for 1', () => {
    const f = factorial(1);
    expect(f).toBe(1);
  });

  test('should return 120 for 5', () => {
    const f = factorial(5);
    expect(f).toBe(120);
  });

  test('should return undefined for negative values', () => {
    const f = factorial(-10);
    expect(f).toBe(undefined);
  });

  test('should return undefined for non numeric values', () => {
    // This test is purely for javascript users who can't read docs and still want to try and facorialize a string
    //@ts-ignore
    const f = factorial('a');
    expect(f).toBe(undefined);
  });

  test('should return undefined for fractional values', () => {
    const f = factorial(1 / 4);
    expect(f).toBe(undefined);
  });
});
