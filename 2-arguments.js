const { argv } = require("node:process");

argv.forEach((arg) => {
  if (argv.length === 0) console.log("No argument");
  if (argv.length === 1) console.log("Argument found");
  else console.log("Arguments found");
});
