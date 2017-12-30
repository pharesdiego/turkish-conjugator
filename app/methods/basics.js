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

const getLastPart = _(splitWords, reverse);

const getFirstPart = _(splitWords);

const empty = (thing) => (thing.length == 0) ? true : false;

const strEndsWith = string => (...letters) => !empty(letters.filter((letter) => string.endsWith(letter)));

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
	getLastPart,
	getFirstPart,
	empty,
	strEndsWith
}