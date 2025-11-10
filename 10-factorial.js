const argv7 = +process.argv.slice(2)[0];

function factorial(n) {
  if (isNaN(n)) return 1;

  if (n === 0) return 1;

  return n * factorial(n - 1);
}

console.log(factorial(argv7));
