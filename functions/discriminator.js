const discriminator = (a, b, c) => {
  return Math.pow(b, 2) - 4 * a * c;
};

const intersection_points = (a, b, c) => {
  const D = discriminator(a, b, c);
  if (D < 0) return [];
  if (D === 0) return [-b / (2 * a)];
  if (D > 0)
    return [(-b + Math.sqrt(D)) / (2 * a), (-b - Math.sqrt(D)) / (2 * a)];
};

module.exports = { discriminator, intersection_points };
