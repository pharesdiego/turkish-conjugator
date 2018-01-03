const _ = (...fns) => arg => fns.reduce((ref, fn) => fn(ref), arg);

const length = str => str.length;

const split = str => str.split('');

const splitWords = str => str.split(' ');

const join = arr => arr.join('');

const push = (arr, ...items) => [...arr, ...items];

const lowerCase = string => string.toLowerCase();

const reverse = arr => arr.reverse();

const reverseStr = _(split, reverse, join);

const lastLetter = str => str.slice(-1);

const firstLetter = str => str.slice(0,1);

const strInit = str => str.slice(0,-1);

const isVowel = str => (/[aeiıouöü]/gi.test(str)) ? true : false;

const getVowelsArr = arr => arr.filter(isVowel);

const getVowelsStr = _(split, getVowelsArr, join);

const empty = (thing) => (thing.length == 0) ? true : false;

const strEndsWith = string => (...letters) => !empty(letters.filter((letter) => string.endsWith(letter)));

const strStarsWith = string => (...letters) => !empty(letters.filter((letter) => string.startsWith(letter)));

const arrInit = arr => arr.slice(0, -1);

const arrLast = arr => arr.slice(-1);

const addRightSpace = arr => arr.map(item => item += ' ');

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
	getStrLast
}