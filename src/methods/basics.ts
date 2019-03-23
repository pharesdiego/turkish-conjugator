import { reduce, filter } from './utils';

/**
 * This function is used to compose functions
 * @param {function} fns - a bunch of functions to compose
 * @returns {any} - the composition's result
 */
const compose = <T extends {}>(...fns) => (arg): T =>
  reduce(fns, (ref, fn) => fn(ref), arg);

const length = <T extends {}>(s: string | T[]): number => s.length;

const split = (s: string, separetor: string = ''): string[] =>
  s.split(separetor);

const splitWords = (s: string): string[] => split(s, ' ');

const join = <T extends {}>(arr: T[], separetor: string = ''): string =>
  arr.join(separetor);

const push = <T extends {}>(arr: T[], ...items: any): any[] => [
  ...arr,
  ...items,
];

const lowerCase = (str: string): string => str.toLowerCase();

const reverse = <T extends {}>(arr: T[]): T[] => arr.reverse();

const reverseStr = compose<string>(
  split,
  reverse,
  join
);

const lastLetter = (str: string): string => str.slice(-1);

const firstLetter = (str: string): string => str[0] || '';

/**
 * Gives the string wihout the 'Tail'
 * @param {string} str
 * @returns {string}
 */
const strInit = (str: string): string => str.slice(0, -1);

const isVowel = (str: string): boolean => /[aeiıouöüI]/gi.test(str);

/**
 *
 * @param {array} arr
 * @returns {array} - an array containing every vowel found in the given array or an empty array if any was found
 */
const getVowelsArr = (arr: string[]): string[] => filter(arr, isVowel);

/**
 * Get every vowel from a given string
 * @param {string}
 * @returns {string} - this string contains every vowel found in the given string
 */
const getVowelsStr = compose<string>(
  split,
  getVowelsArr,
  join
);

/**
 * @description returns the last FOUND vowel in a string
 * @param {string} str
 * @return {string}
 */
const getLastVowel = (str: string): string => getVowelsStr(str).slice(-1);

/**
 * @description returns if the THING is empty
 * @param {any} thing
 * @returns {bool}
 */
const empty = (thing: any): boolean => thing.length === 0;

const strEndsWith = (str: string) => (...substrs: string[]) =>
  substrs.some((substr) => str.endsWith(substr));

const strStarsWith = (str: string) => (...substrs: string[]) =>
  substrs.some((substr) => str.startsWith(substr));

const arrInit = <T extends {}>(arr: T[]): T[] => arr.slice(0, -1);

const arrLast = <T extends {}>(arr: T[]): T[] => arr.slice(-1);

const addRightSpace = (arr: string[]): string => join(arr, ' ') + ' ';

/**
 * @description used to get the init part of a Composed verb (init like Haskell). A Composed verb could have 2+ words
 * And we just need the Init Part without the 'Tail'. In this case the Init Part is defined as
 * 'every word except for the last one'.
 * So in the case of: 'Yardım etmek' this function will returns: 'Yardım ';
 * Note: one space is added to each word
 * @param {string} - a string containing 1+ words
 * @returns {string} - init part of a string
 */
const getStrInit = compose<string>(
  splitWords,
  arrInit,
  addRightSpace
);

const getStrLast = compose<string>(
  splitWords,
  arrLast,
  join
);

export {
  compose,
  length,
  split,
  splitWords,
  join,
  arrLast,
  arrInit,
  push,
  lowerCase,
  reverse,
  reverseStr,
  lastLetter,
  firstLetter,
  strInit,
  isVowel,
  getVowelsArr,
  getVowelsStr,
  empty,
  strEndsWith,
  strStarsWith,
  getStrInit,
  getStrLast,
  getLastVowel,
};
