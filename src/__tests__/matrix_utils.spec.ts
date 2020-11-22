import { generateIdentityMatrix } from '../Matrix/utils';
describe('Matrix Utilities', () => {
  test('should return undefined for nagative values', () => {
    const result = generateIdentityMatrix(-7);
    expect(result).toBeUndefined();
  });

  test('should return undefined for fraction values', () => {
    const result = generateIdentityMatrix(7 / 10);
    expect(result).toBeUndefined();
  });

  test('should return undefined for non numeric values', () => {
    //@ts-ignore
    const result = generateIdentityMatrix('hello');
    expect(result).toBeUndefined();
  });

  test('should return a 1x1 matrix for n = 1', () => {
    const result = generateIdentityMatrix(1);
    expect(result).toEqual(expect.arrayContaining([[1]]));
  });

  test('should return a 5x5 matrix for n = 5', () => {
    const result = generateIdentityMatrix(5);
    expect(result).toEqual(
      expect.arrayContaining([[1, 0, 0, 0, 0], [0, 1, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1]])
    );
  });
});
