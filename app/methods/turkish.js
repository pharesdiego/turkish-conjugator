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
	strEndsWith,
	getStrLast,
	getStrInit
} = require('./basics');

const {
	harmony,
	mutation,
	notMutableVerbs,
	mutableVerbs,
	alphabet
} = require('./../obj');



const verbRoot = str => str.slice(0, -3);

const negativeVerbRoot = str => str.slice(0, -5);

const isMutable = arr => letter => arr.reduce((ref, elem, index) => (elem == letter) ? ref = index : ref, -1);

const mutate = index => mutation[0].to[index];

const lookForHarmonyIn = arr => str => (arr.filter(harmony => harmony.includes(str)));

// I = first type: im, sin, (i), iz, siniz (lar or ler is added later)
// II = second type: im, in, (i), ik, siniz (lar or ler is added later)
// IN = first type negative: m, zsin, z, yiz, zsiniz (lar or ler is added later. The -z is not added in first person singular and first person plurar)
const arrayOfPersonalSuffixes = {
	I: (i, z = '') => [`${i}m`, `${z}s${i}n`, `${z}`, `${i}z`, `${z}s${i}n${i}z`],
	II: (i, e = i) => [`${i}m`, `${i}n`, `${i}`, `${i}k`, `${i}n${e}z`],
	IN: (i, y) => [`m`, `zs${i}n`, `z`, `y${i}z`, `zs${i}n${i}z`]
}

const vowelsQuantity = _(verbRoot, getVowelsStr, length);

const isSingleSyllableVerb = verb => (vowelsQuantity(verb) == 1) ? true : false;

// Make Babel issue on Github
// const getFirstVowel = str => (lastVowel = str.match(/[aeiıouöü]/gi)) ? lastVowel[0] : false;

const getFirstVowel = str => (/[aeiıouöü]/gi.test(str)) ? str.match(/[aeiıouöü]/gi)[0] : false;

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


// Sometimes when there isn't a composed verb (so the verb doesn't have spaces) the first part will be empty
// personalSuffixes is an array like im, sin, , iz, siniz, lar/ler
// the tenseSuffix is one of the suffix of: aorist, gerund,  future, etc...
	// it's optional because in negative forms the personalSuffixes may have the tenseSuffix on it
const generateResult = 
	(
		personalSuffixes, 
		firstPart, 
		verbRoot, 
		tenseSuffix = ''

	) => personalSuffixes.map(suffix => `${firstPart + verbRoot + tenseSuffix + suffix}`);


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

const whiteSpaces = str => (/\s/g.test(str)) ? str.match(/\s/g).length : false;

// kılmak is supported with the natural algorithm, so we don't need to put it here
var regGet = /(geçmek|etmek|yapmak|eylemek|olmak|vermek|kalmak|edilmek|demek|dilemek|gelmek|bulunmak|söylemek|durmak)$/;
var regIs = /^[a-zşüıöğç\s?]{2,}(geçmek|etmek|yapmak|eylemek|olmak|vermek|kalmak|edilmek|demek|dilemek|gelmek|bulunmak|söylemek|durmak)$/;

var regGetNeg = /(geçmemek|etmemek|yapmamak|eylememek|olmamak|vermemek|kalmamak|edilmemek|dememek|dilememek|gelmemek|bulunmamak|söylememek|durmamak)$/;
var regIsNeg = /^[a-zşüıöğç\s?]{2,}(geçmemek|etmemek|yapmamak|eylememek|olmamak|vermemek|kalmamak|edilmemek|dememek|dilememek|gelmemek|bulunmamak|söylememek|durmamak)$/;


const isAuxiliaryComposedVerb = str => regIs.test(str);

const getAuxiliaryComposedVerb = str => regGet.test(str) ? str.match(regGet)[0] : false;

const getInitOfComposedVerb = str => str.replace(regGet, '');


const isAuxiliaryComposedVerbInNegativeForm = str => regIsNeg.test(str);

const getAuxiliaryComposedVerbInNegativeForm = str => regGetNeg.test(str) ? str.match(regGetNeg)[0] : false;

const getInitOfComposedVerbInNegativeForm = str => str.replace(regGetNeg, '');



// Conjugations, Times

// Root property explained:
// IF IT INCLUDES THE VERB ON notMutableVerbs then we negate it and return false, so like: "don't mutate"
// IF IT'S NOT A SINGLE SYLLABLE VERB AND THE OTHERS CONDITIONS ARE TRUE THEN WE MUTATE


const getProperties = verb => ({

	verb: verb,

	root: (doWeNeedToMutate(mutation[0].from)(verb) >= 0 && !notMutableVerbs.includes(verb) && validMutableSingleSyllableVerb(verb)) ? strInit(verbRoot(verb)) + mutate(doWeNeedToMutate(mutation[0].from)(verb)) : verbRoot(verb),

	originalRoot: verbRoot(verb),

	verbSuffix: verb.slice(-3),

	vowelsLength: vowelsQuantity(verb),

	verbVowels: getVowelsStr(verbRoot(verb)),

	harmony4way: get4WayHarmonyOf(verb),

	harmony2way: get2WayHarmonyOf(verb),

	negativeSuffix: `m${get2WayHarmonyOf(verb)}`,

	positiveRoot: (isNegativeVerb(verb)) ? negativeVerbRoot(verb) : '',

	isNegative: isNegativeVerb(verb),

	isSingleSyllableVerb: isSingleSyllableVerb(verb),

	isComposed: (whiteSpaces(verb)) ? true : false,

	initPart: (whiteSpaces(verb)) ? getStrInit(verb) : '',

	lastPart: (whiteSpaces(verb)) ? getStrLast(verb) : '',

	isAuxiliaryComposedVerb: (isAuxiliaryComposedVerb(verb)),

	auxiliaryVerb: getAuxiliaryComposedVerb(verb),

	initComposedVerb: (isAuxiliaryComposedVerb(verb)) ? getInitOfComposedVerb(verb) : false,


	isAuxiliaryComposedVerbInNegativeForm: isAuxiliaryComposedVerbInNegativeForm(verb),

	auxiliaryVerbInNegativeForm: getAuxiliaryComposedVerbInNegativeForm(verb),

	initComposedVerbInNegativeForm: (isAuxiliaryComposedVerbInNegativeForm(verb)) ? getInitOfComposedVerbInNegativeForm(verb) : false,


});



module.exports = {

	verbRoot,
	negativeVerbRoot,
	isMutable,
	mutate,
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