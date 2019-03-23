const harmony = {
  fourWays: ['aı', 'ou', 'ei', 'öü'],
  twoWays: ['ıoua', 'iöüe'],
};

const mutation = [
  {
    // FOR PAST TENSE (IF WE MATCH ANY OF THESE CONSONANTS THEN WE NEED TO MUTATE OR "-D" TO "-T"
    from: ['p', 't', 'k', 'ç', 's', 'ş', 'h'],
  },
];

// There are five verb stems soften their final -t to -d when adding a vowel suffix.
const mutableVerbs = ['etmek', 'gitmek', 'ditmek', 'tatmak', 'gütmek'];

const alphabet = 'abcçdefgğhıijklmnoöprsştuüvyz '.split('');

const exceptions = [
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
  'denmek',
];
// Etmek isn't a composition of göz
// so we avoid to turn 't' into a 'd'
const compositionExceptions = [
  'gözetmek',
  'esnetmek',
  'gülümsetmek',
  'ilerletmek',
  'izletmek',
  'ağlatmak',
];

export {
  harmony,
  mutation,
  mutableVerbs,
  alphabet,
  exceptions,
  compositionExceptions,
};
