import { generateIdentityMatrix, generateZeroMatrix } from '../Matrix/utils';
describe('Matrix Utilities', () => {
  test('should return undefined for nagative values - Identity', () => {
    const result = generateIdentityMatrix(-7);
    expect(result).toBeUndefined();
  });

  test('should return undefined for fraction values - Identity', () => {
    const result = generateIdentityMatrix(7 / 10);
    expect(result).toBeUndefined();
  });

  test('should return undefined for non numeric values - Identity', () => {
    //@ts-ignore
    const result = generateIdentityMatrix('hello');
    expect(result).toBeUndefined();
  });

  test('should return a 1x1 matrix for n = 1 - Identity', () => {
    const result = generateIdentityMatrix(1);
    expect(result).toEqual(expect.arrayContaining([[1]]));
  });

  test('should return a 5x5 matrix for n = 5 - Identity', () => {
    const result = generateIdentityMatrix(5);
    expect(result).toEqual(
      expect.arrayContaining([[1, 0, 0, 0, 0], [0, 1, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1]])
    );
  });

  test('should return undefined for nagative values - Zero', () => {
    const result = generateZeroMatrix(-7);
    expect(result).toBeUndefined();
  });

  test('should return undefined for fraction values - Zero', () => {
    const result = generateZeroMatrix(7 / 10);
    expect(result).toBeUndefined();
  });

  test('should return undefined for non numeric values - Zero', () => {
    //@ts-ignore
    const result = generateZeroMatrix('hello');
    expect(result).toBeUndefined();
  });

  test('should return a 1x1 matrix for n = 1 - Zero', () => {
    const result = generateZeroMatrix(1);
    expect(result).toEqual(expect.arrayContaining([[0]]));
  });

  test('should return a 5x5 matrix for n = 5 - Zero', () => {
    const result = generateZeroMatrix(5);
    expect(result).toEqual(
      expect.arrayContaining([[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]])
    );
  });
});
