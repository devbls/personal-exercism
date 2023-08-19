//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (raindrops) => {
  let result = '';
  
  if (raindrops % 3 === 0) {
    result += 'Pling';
  } 
  
  if (raindrops % 5 === 0) {
    result += 'Plang';
  }
  
  if (raindrops % 7 === 0) {
    result += 'Plong';
  }
  
  if (raindrops % 3 !== 0 && raindrops % 5 !== 0 && raindrops % 7 !== 0) {
    result += raindrops;
  }

  return result;
};
