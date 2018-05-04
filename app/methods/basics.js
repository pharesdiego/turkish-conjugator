const lodash = require('lodash');

const _ = (...fns) => arg => lodash.reduce(fns, (ref, fn) => fn(ref), arg);

const length = str => str.length;

const split = str => str.split('');

const splitWords = str => str.split(' ');

const join = arr => arr.join('');

const push = (arr, ...items) => [...arr, ...items];

const lowerCase = string => string.toLowerCase();

const reverse = arr => lodash.reverse(arr);

const reverseStr = _(split, reverse, join);

const lastLetter = str => str.slice(-1);

const firstLetter = str => str.slice(0,1);

/**
 * 
 * @param {string} str
 * @returns {string} - the string wihout the 'Tail' 
 */
const strInit = str => str.slice(0,-1);

const isVowel = str => /[aeiıouöüI]/gi.test(str)

const isConsonant = str => !isVowel(str);
/**
 * 
 * @param {array} arr
 * @returns {array} - an array containing every vowel found in the given array or an empty array if any was found
 */
const getVowelsArr = arr => lodash.filter(arr, isVowel);

/**
 * @param {string}
 * @returns {string} - this string contains every vowel found in the given string
 */
const getVowelsStr = _(split, getVowelsArr, join);

/**
 * @description returns the last FOUND vowel in a string
 * @param {string} str 
 * @return {string}
 */
const getLastVowel = str => getVowelsStr(str).slice(-1);

/**
 * @description returns if the THING is empty
 * @param {any} thing 
 * @returns {bool} 
 */
const empty = thing => thing.length === 0;

const strEndsWith = string => (...substrs) => lodash.some(substrs, substr => string.endsWith(substr))

const strStarsWith = string => (...substrs) => lodash.some(substrs, substr => string.startsWith(substr))

const arrInit = arr => arr.slice(0, -1);

const arrLast = arr => arr.slice(-1);

const addRightSpace = arr => lodash.map(arr, item => item += ' ');

/**
 * @description used to get the init part of a Composed verb (init like Haskell). A Composed verb could have 2+ words
 * And we just need the Init Part without the 'Tail'. In this case the Init Part is defined as 
 * 'every word except for the last one'.
 * So in the case of: 'Yardım etmek' this function will returns: 'Yardım '; 
 * Note: one space is added to each word
 * @param {string} - a string containing 1+ words
 * @returns {string} - init part of a string
 */
const getStrInit = _(splitWords, arrInit, addRightSpace, join);

const getStrLast = _(splitWords, arrLast, join);

module.exports = {
	_,
	length,
	split,
	splitWords,
	join,
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
	getLastVowel
}