// Function with no arguments
const args = function (...days) {
  if (days.length === 0) {
    console.log("No argument");
  } else if (days.length === 1) {
    console.log("Argument found");
  }
};
// args();
args(1);
