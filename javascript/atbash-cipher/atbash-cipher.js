//
// This is only a SKELETON file for the 'Atbash Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
const ALPHABET_BACKWARDS = 'zyxwvutsrqponmlkjihgfedcba';

export const encode = (text) => {
  const textToArray = text.toLowerCase().replace(/\s+/g, '').replace(/[^\w\s]/gi, '').split('');

  const encodedString = textToArray.map((letter) => {
    const letterIndexOnCipher = ALPHABET.indexOf(letter);

    if (!(ALPHABET_BACKWARDS[letterIndexOnCipher])) {
      return letter;
    } else {
      return ALPHABET_BACKWARDS[letterIndexOnCipher];
    }
  }).join('');
    
  return encodedString.replace(new RegExp('(.{5})(?!$)', 'g'), '$1 ');
};

export const decode = (text) => {
  const textToArray = text.replace(/\s+/g, '').split('');
  
  const decodedString = textToArray.map((letter) => {
    const letterIndexOnCipher = ALPHABET_BACKWARDS.indexOf(letter);

    if (!(ALPHABET[letterIndexOnCipher])) {
      return letter;
    } else {
      return ALPHABET[letterIndexOnCipher];
    }
  }).join('');

  return decodedString;
};
