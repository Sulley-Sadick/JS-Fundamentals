const argv5 = process.argv.slice(2);

if (isNaN(argv5[0])) console.log("Missing number of occurrences");
if (argv5[0] < 0) return;
else console.log(`C is fun\n`.repeat(argv5[0]));
