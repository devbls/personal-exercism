// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

const WEEK_DAYS = 7;

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let birdCount = 0;
  
  for (let i = 0; i < birdsPerDay.length; i++) {
    birdCount += birdsPerDay[i];
  }

  return birdCount;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  let birdCount = 0;
  
  for (let i = 0; i < birdsPerDay.length; i++) {
    if (i >= WEEK_DAYS * week - 7 && i <= WEEK_DAYS * week - 1) {
      birdCount += birdsPerDay[i];
    }
  }

  return birdCount;
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i += 2) {
    birdsPerDay[i] += 1;
  }

  return birdsPerDay;
}
