import fibonacci from '../fibonacci';

describe('Fibonnaci', () => {
  test('should return 1 for 0', () => {
    const f = fibonacci(0);
    expect(f).toBe(1);
  });
  test('should return 1 for 1', () => {
    const f = fibonacci(1);
    expect(f).toBe(1);
  });
  test('should return 8 for 5', () => {
    const f = fibonacci(5);
    expect(f).toBe(8);
  });
  test('should return 89 for 10', () => {
    const f = fibonacci(10);
    expect(f).toBe(89);
  });
  test('should return undefined for negative values', () => {
    const f = fibonacci(-10);
    expect(f).toBe(undefined);
  });
  test('should return undefined for non numeric values', () => {
    // This test is purely for javascript users who can't read docs and still want to try and facorialize a string
    //@ts-ignore
    const f = fibonacci('5');
    expect(f).toBe(undefined);
  });

  test('should return undefined for fractional values', () => {
    const f = fibonacci(1 / 4);
    expect(f).toBe(undefined);
  });
});
