import discriminator, { intersection_points } from '../discriminator';

describe('Discriminator', () => {
  test('should calculate the correct discriminator', () => {
    let d = discriminator(1, 1, -6);
    expect(d).toBe(25);
    d = discriminator(1, -9, 20);
    expect(d).toBe(1);
    d = discriminator(-1, 1, 4);
    expect(d).toBe(17);
  });

  test('should return an empty array if D < 0', () => {
    let d = discriminator(1, 1, 1);
    expect(d).toBe(-3);
    const intersect = intersection_points(1, 1, 1);
    expect(intersect).toHaveLength(0);
  });
  test('should return an array with one element if D = 0', () => {
    let d = discriminator(1, 2, 1);
    expect(d).toBe(0);
    const intersect = intersection_points(1, 2, 1);
    expect(intersect).toHaveLength(1);
  });
  test('should return an array with two elements if D > 0', () => {
    let d = discriminator(1, 1, -6);
    expect(d).toBe(25);
    const intersect = intersection_points(1, 1, -6);
    expect(intersect).toHaveLength(2);
  });

  test('should return the correct answer -b/2a when D = 0', () => {
    const intersect = intersection_points(1, 2, 1);
    expect(intersect[0]).toBe(-1);
  });
  test('should return the correct answers -b+sqrt(D)/2a and -b-sqrt(D)/2a', () => {
    const intersect = intersection_points(1, 1, -6);
    expect(intersect[0]).toBe(2);
    expect(intersect[1]).toBe(-3);
  });
});
