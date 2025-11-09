const argv1 = process.argv.slice(2);

if (argv1[0] !== undefined) console.log(`${argv1[0]}`);
else console.log("No argument");
