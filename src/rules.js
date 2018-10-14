module.exports.harmony = {
  fourWays: ['aı', 'ou', 'ei', 'öü'],
  twoWays: ['ıoua', 'iöüe']
};

module.exports.mutation = [
  {
    // FOR PAST TENSE (IF WE MATCH ANY OF THESE CONSONANTS THEN WE NEED TO MUTATE OR "-D" TO "-T"
    from: ['p', 't', 'k', 'ç', 's', 'ş', 'h']
  }
];

// There are five verb stems soften their final -t to -d when adding a vowel suffix.
module.exports.mutableVerbs = ['etmek', 'gitmek', 'ditmek', 'tatmak', 'gütmek'];

module.exports.alphabet = [
  'a',
  'b',
  'c',
  'ç',
  'd',
  'e',
  'f',
  'g',
  'ğ',
  'h',
  'ı',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'ö',
  'p',
  'r',
  's',
  'ş',
  't',
  'u',
  'ü',
  'v',
  'y',
  'z',
  ' '
];

module.exports.exceptions = [
  'almak',
  'bilmek',
  'bulmak',
  'durmak',
  'gelmek',
  'görmek',
  'kalmak',
  'olmak',
  'ölmek',
  'sanmak',
  'vermek',
  'varmak',
  'vurmak',
  'denmek'
];
// Etmek isn't a composition of göz
// so we avoid to turn 't' into a 'd'
module.exports.compositionExceptions = [
  'gözetmek',
  'esnetmek',
  'gülümsetmek',
  'ilerletmek',
  'izletmek',
  'ağlatmak'
];
