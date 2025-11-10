const argv6 = process.argv.slice(2);

if (!isFinite(argv6[0])) return console.log("Missing size");
if (argv6[0] < 0) return;
for (const arg of argv6) {
  console.log("X".repeat(arg));
  console.log("X".repeat(arg));
}
