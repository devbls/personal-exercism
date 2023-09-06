//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (oldObject) => {
  const newObject = {};

  Object.entries(oldObject).forEach(([key,values]) => {
    values = values.map(value => {
      value = value.toLowerCase();
      
      newObject[value] = Number(key);
    });
  });
  
  return newObject;
};
