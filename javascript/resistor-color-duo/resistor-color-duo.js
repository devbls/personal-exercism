//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (givenColors) => {
  const colors = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white']

  return Number(`${colors.indexOf(givenColors[0])}${colors.indexOf(givenColors[1])}`)
};
