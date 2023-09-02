//
// This is only a SKELETON file for the 'Matching Brackets' exercise. It's been provided as a
// convenience to get you started writing code faster.
// []{}()

export const isPaired = (string) => {
  string = string.replace(/[^{}\[\]\(\)]/g, '');

  for (let len = -1; len !== string.length;) {
    len = string.length;
    string = string.replace(/\{\}|\[\]|\(\)/g, '');
  }

  return string.length === 0;
};
