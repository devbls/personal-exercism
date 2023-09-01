//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (dna) => {  
  if (!dna) {
    return '';
  } else {
    let dnaList = dna.split('');
    
    const rna = dnaList.map(value => {
      switch (value) {
        case 'G':
          return 'C';
        case 'C':
          return 'G';
        case 'T':
          return 'A';
        case 'A':
          return 'U';
      }
    });

    return rna.join('');
  }
};
