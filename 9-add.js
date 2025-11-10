const addArgv = process.argv.slice(2);

function add(a, b) {
  // the plus(+) operator convert a string into a number
  console.log(+a + +b);
}

// (...) is called the spread operator, it is used to unpack array elements into separate values
add(...addArgv);
