//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (value) => {
  if (value === 0) return [];
  if (value === 1) return [[1]];

  let result = [];

  for (let row = 1; row <= value; row++) {
    let arr = [];

    for (let col = 0; col < row; col++) {
      if (col === 0 || col === row - 1) {
        arr.push(1);
      } else {
        arr.push((result[row-2][col-1] + result[row-2][col]));
      }
    }
    
    result.push(arr);
  }

  return result;
};
