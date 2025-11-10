const argv6 = process.argv.slice(2)[0];

if (!isFinite(argv6)) return console.log("Missing size");
if (argv6 < 0) return;
else
  for (let i = 0; i < argv6; i++) {
    console.log("X".repeat(argv6));
  }
