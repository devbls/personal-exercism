//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
// expect(age('mercury', 2134835688)).toEqual(280.88);  
//
export const EARTH_YEAR_IN_SECONDS = 31557600;
export const ORBITAL_PERIODS = {
  'mercury': 0.2408467,
  'venus': 0.61519726,
  'earth': 1,
  'mars': 1.8808158,
  'jupiter': 11.862615,
  'saturn': 29.447498,
  'uranus': 84.016846,
  'neptune': 164.79132
}

export const age = (planet, seconds) => {
  const result = seconds / (ORBITAL_PERIODS[planet] * EARTH_YEAR_IN_SECONDS);
  
  return Number(result.toFixed(2));
};
