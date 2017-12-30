const {
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
	empty,
	strEndsWith
} = require('./basics');

const {
	harmony,
	mutation,
	notMutableVerbs,
	mutableVerbs,
	alphabet,
	auxiliaryComposedVerbs
} = require('./../obj');



const verbRoot = str => str.slice(0, -3);

const negativeVerbRoot = str => str.slice(0, -5);

const isMutable = arr => letter => arr.reduce((ref, elem, index) => (elem == letter) ? ref = index : ref, -1);

const mutate = index => mutation[0].to[index];

const isLastLetterOfRootAVowel = _(verbRoot, lastLetter, isVowel);

const lookForHarmonyIn = arr => str => (arr.filter(harmony => harmony.includes(str)));

const arrayOfPersonalSuffixes = {
	I: (i, z = '') => [`${i}m`, `${z}s${i}n`, `${z}`, `${i}z`, `${z}s${i}n${i}z`],
	II: (i, e = i) => [`${i}m`, `${i}n`, `${i}`, `${i}k`, `${i}n${e}z`],
	IN: (i, y) => [`m`, `zs${i}n`, `z`, `y${i}z`, `zs${i}n${i}z`]
}

const vowelsQuantity = _(verbRoot, getVowelsStr, length);

const isSingleSyllableVerb = verb => (vowelsQuantity(verb) == 1) ? true : false;

// Make Babel issue on Github
// const getFirstVowel = str => (lastVowel = str.match(/[aeiıouöü]/gi)) ? lastVowel[0] : false;

const getFirstVowel = str => (str.match(/[aeiıouöü]/gi)) ? str.match(/[aeiıouöü]/gi)[0] : false;

const getLastVowel = _(reverseStr, getFirstVowel);

const lookIn4Ways = _(lookForHarmonyIn(harmony[0].fourWays), join, lastLetter);

const lookIn2Ways = _(lookForHarmonyIn(harmony[1].twoWays), join, firstLetter);

const get4WayHarmonyOf = _(verbRoot, getLastVowel, lookIn4Ways);

const get2WayHarmonyOf = _(verbRoot, getLastVowel, lookIn2Ways);

const get4WayHarmonyByRootOf = _(getLastVowel, lookIn4Ways);

const get2WayHarmonyByRootOf = _(firstLetter, lookIn2Ways);

const doWeNeedToMutate = arr => _(verbRoot, lastLetter, isMutable(arr));

const isOnMutableList = str => mutableVerbs.includes(str) ? true : false;

const validMutableSingleSyllableVerb = verb => (isOnMutableList(verb) && isSingleSyllableVerb(verb)) ? true : false; 

const generateResult = (arr, firstPart, verbRoot, timeSuffix = '') => arr.map(suffix => `${firstPart + verbRoot + timeSuffix + suffix}`);


// VERIFY
const hasMinLength = (str, l) => (str.length >= l) ? true : false;

const isVerb = verb => strEndsWith(verb)('mek', 'mak');

const isNegativeVerb = verb => strEndsWith(verb)('memek', 'mamak');

const convertToPositive = (verb) => { let i = get2WayHarmonyOf(verb); return verb.replace(`m${i}m${i}k`, `m${i}k`) };

const convertToNegative = (verb) => { let i = get2WayHarmonyOf(verb); return verb.replace(`m${i}k`, `m${i}m${i}k`) };

const isAlphabeticallyValid = arr => empty(arr.filter(item => !alphabet.includes(item)));

const gotAccepted = verb => {

	verb = lowerCase(verb);
	
	if(hasMinLength(verb, 5) && isAlphabeticallyValid(split(verb))){

		if(isNegativeVerb(verb) && hasMinLength(verb, 7)) return convertToPositive(verb);

		if(isVerb(verb)) return verb;

	}

	return false;

}

const whiteSpaces = str => (str.match(/\s/g)) ? str.match(/\s/g).length : false;

// Conjugations, Times

// Root property explained:
// IF IT INCLUDES THE VERB ON notMutableVerbs then we negate it and return false, so like: "don't mutate"
// IF IT'S NOT A SINGLE SYLLABLE VERB AND THE OTHERS CONDITIONS ARE TRUE THEN WE MUTATE

const getProperties = verb => ({

	verb: lowerCase(verb),

	root: (doWeNeedToMutate(mutation[0].from)(verb) >= 0 && !notMutableVerbs.includes(verb) && validMutableSingleSyllableVerb(verb)) ? strInit(verbRoot(verb)) + mutate(doWeNeedToMutate(mutation[0].from)(verb)) : verbRoot(verb),

	originalRoot: verbRoot(verb),

	verbSuffix: verb.slice(-3),

	vowelsLength: vowelsQuantity(verb),

	verbVowels: getVowelsStr(verbRoot(verb)),

	harmony4way: get4WayHarmonyOf(verb),

	harmony2way: get2WayHarmonyOf(verb),

	negativeSuffix: `m${get2WayHarmonyOf(verb)}`,

	isNegative: isNegativeVerb(verb),

	isEtmekComposed: (strEndsWith(verb)(' etmek') && !whiteSpaces(verb)) ? true : false,

	positiveRoot: (isNegativeVerb(verb)) ? negativeVerbRoot(verb) : '',

	isTwoWordsVerb: (whiteSpaces(verb)) ? true : false,

	isSingleSyllableVerb: isSingleSyllableVerb(verb),

	isAuxiliaryComposedVerb: (auxiliaryComposedVerbs.includes(verb)) ? true : false

});

module.exports = {

	verbRoot,
	negativeVerbRoot,
	isMutable,
	mutate,
	isLastLetterOfRootAVowel,
	lookForHarmonyIn,
	arrayOfPersonalSuffixes,
	vowelsQuantity,
	getFirstVowel,
	getLastVowel,
	lookIn4Ways,
	lookIn2Ways,
	get4WayHarmonyOf,
	get2WayHarmonyOf,
	get4WayHarmonyByRootOf,
	get2WayHarmonyByRootOf,
	doWeNeedToMutate,
	generateResult,
	hasMinLength,
	isVerb,
	isNegativeVerb,
	convertToNegative,
	convertToPositive,
	isAlphabeticallyValid,
	gotAccepted,
	getProperties,
	whiteSpaces

}