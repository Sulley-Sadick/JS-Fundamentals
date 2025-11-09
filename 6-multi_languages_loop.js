const multiLanguages = ["C", "Python", "JavaScript"];

const printMessage = function (...languages) {
  languages.forEach((language, index) => console.log(`${language}`));
};

printMessage(...multiLanguages);
