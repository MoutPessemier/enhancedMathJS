const fibonacci = (upper) => {
  if (upper < 2) return 1;
  else return fibonacci(upper - 1) + fibonacci(upper - 2);
};

module.exports = fibonacci;
