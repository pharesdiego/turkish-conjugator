import { convertToNegative } from '../methods/verbVerification';

export const positives = [
  'almak',
  'gelmek',
  'bilmek',
  'görmek',
  'kalmak',
  'olmak',
  'ölmek',
  'sanmak',
  'nefret etmek',
  'sevmek',
  'yapmak',
  'atmak',
  'kokmak',
  'denmek',
  'ağlamak',
  'çalışmak',
  'istemek',
  'konuşmak',
  'değiştirmek',
  'sinirlenmek',
  'yemin etmek',
  'affetmek',
  'denmek',
  'bulmak',
  'kalmak',
  'vurmak',
  'vermek',
  'kaybetmek',
  'özlemek',
  'yazmak',
  'uyumak',
  'tutmak',
  'içmek',
  'büyümek',
  'benzemek',
  'aramak',
  'dövmek',
  'anlaşmak',
  'anlamak',
  'girmek',
  'bakmak',
  'getirmek',
  'kullanmak',
  'gitmek',
  'düşünmek',
  'anlaşmak',
  'alışmak',
  'kapatmak',
  'oynamak',
  'yenmek',
  'izlemek',
  'benzemek',
  'okumak',
  'pişmek',
];

export const negatives = positives.map((verb) => convertToNegative(verb));

const verbs = [...positives, ...negatives];

export const wrongVerbs = verbs
  .map((verb, i) => verb + String.fromCharCode(i * 100))
  .concat(
    '',
    ' ',
    '<<<',
    '>>>',
    '$',
    'memek',
    'mamak',
    'mak',
    'mek',
    'me$k',
    '$mamk',
    'WRONG',
    'VERB',
    '<<<<>>>>'
  );

export default verbs;
