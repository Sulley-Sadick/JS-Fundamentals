// Function with no arguments
const noArguments = function () {
  console.log("No argument");
};

noArguments();

// Function with one arguments
const oneArguments = function (arg) {
  console.log("Arguments found");
  console.log(
    `This is the arguments being passed as a value to this function: ${arg}`
  );
};

oneArguments("One arguments");

// Function with three arguments
const arr = ["Mon", "Tue", "Wed"];
const threeArguments = function (...days) {
  console.log("Arguments found");

  // looping over the arr array
  arr.forEach((day, index) =>
    console.log(
      `We have ${days.length} serious days of every week, day ${
        index + 1
      }: ${day}`
    )
  );
};

threeArguments(...arr);
