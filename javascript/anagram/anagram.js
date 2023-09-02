//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (word, possibleAnagrams) => {
  word = word.toLowerCase();
  
  return possibleAnagrams.filter(possibleWord => {
    possibleWord = possibleWord.toLowerCase();

    if (word !== possibleWord) {
      const letterCount = possibleWord.split('').reduce((acc, letter) => {
        if (word.includes(letter.toLowerCase()) && possibleWord.length === word.length) acc++;
  
        return acc;
      }, 0);
  
      if (
        letterCount === word.length && 
        possibleWord.split('').sort().join('') === word.split('').sort().join('')) {
        return word;
      }
    }
  });
};
