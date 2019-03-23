import { alphabet } from './../rules';
import { hasWhiteSpaces } from './turkish';
import {
  strEndsWith,
  lowerCase,
  getVowelsStr,
  arrInit,
  join,
  compose,
  splitWords,
} from './basics';

const hasMinLength = (str: string, l: number) => str.length >= l;

const isVerb = (verb: string): boolean =>
  strEndsWith(verb.toLowerCase())('mek', 'mak');

const isNegativeVerb = (verb: string): boolean =>
  strEndsWith(verb.toLowerCase())('memek', 'mamak');

const convertToPositive = (verb: string): string =>
  verb.toLowerCase().replace(/\w{3}$/, 'k');

const convertToNegative = (verb: string): string =>
  verb.toLowerCase().replace(/(\w).$/, '$1m$1k');

/**
 * @description determines whether a string is alphabetically valid using the Turkish alphabet.
 * @param {string} str
 * Complexity: O(n^2). n^2 is a nightmare, but since the alphabet's length is only 30, using a hash table
 * in order to have a O(1) complexity is just going to over complicate this simple problem.
 */
const isAlphabeticallyValid = (str: string): boolean =>
  str
    .toLowerCase()
    .split('')
    .every((letter) => alphabet.includes(letter));

const getVowelsFromInitOfComposedVerb = compose<string>(
  splitWords,
  arrInit,
  join,
  getVowelsStr
);

const isTurkishVerb = (verb: string): string => {
  verb = lowerCase(verb);

  if (hasMinLength(verb, 5)) {
    // getting vowels from a composed verb is different from a normal verb.
    if (
      (hasWhiteSpaces(verb)
        ? getVowelsFromInitOfComposedVerb(verb)
        : getVowelsStr(verb)
      ).length > 1
    ) {
      if (isAlphabeticallyValid(verb)) {
        if (splitWords(verb).every((str) => hasMinLength(str, 3))) {
          // match strings like: memek, mamak, mamek, memak, mekmek...
          if (/^m(e|a)k?m(e|a)k$/.test(verb)) return '';

          if (isNegativeVerb(verb) && hasMinLength(verb, 7))
            return convertToPositive(verb);

          if (isVerb(verb)) return verb;
        }
      }
    }
  }
  return '';
};

export {
  hasMinLength,
  isVerb,
  isNegativeVerb,
  convertToNegative,
  convertToPositive,
  isAlphabeticallyValid,
  isTurkishVerb,
};
