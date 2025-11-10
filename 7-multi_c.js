const argv5 = +process.argv[2];

//  argv5 is NaN, log the following message to the console
if (isNaN(argv5)) console.log("Missing number of occurrences");
// argv5 < 0, return
if (argv5 < 0) return;
// else loop over the argv5 value
else for (let i = 0; i < argv5; i++) console.log("C is fun");
