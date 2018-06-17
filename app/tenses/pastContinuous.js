const {
	push,
	strInit,
	isVowel,
	lastLetter,
	getLastVowel,
	length
} = require('./../methods/basics');

const {
	arrayOfPersonalSuffixes,
	generateResult,
	getProperties,
	lookIn4Ways
} = require('./../methods/turkish');


// LAST CHECK 24 5 2018
const PastContinuous = (verb, DEFAULT = getProperties(verb)) => {

	// if the verb is composed in any way, we'll get its firstPart by removing that verb that compose it. Example: Affetmek -> Aff || Yardım etmek -> Yardım
	let firstPart = DEFAULT.isAuxiliaryComposedVerb ? DEFAULT.initComposedVerb : DEFAULT.isAuxiliaryComposedVerbInNegativeForm ? DEFAULT.initComposedVerbInNegativeForm : DEFAULT.isComposed ? DEFAULT.initPart : '';

	DEFAULT = DEFAULT.isAuxiliaryComposedVerb ? getProperties(DEFAULT.auxiliaryVerb) : DEFAULT.isAuxiliaryComposedVerbInNegativeForm ? getProperties(DEFAULT.auxiliaryVerbInNegativeForm) : DEFAULT.isComposed ? getProperties(DEFAULT.lastPart) : DEFAULT;

	let root = DEFAULT.isNegative || isVowel(lastLetter(DEFAULT.root)) ? strInit(DEFAULT.root) : DEFAULT.root;

	let gerundSuffix = lookIn4Ways(getLastVowel( length(root) === 1 ? DEFAULT.root : root )) + 'yor';
		
	// The suffix (-lardu, (du is from Past Suffix, but it's always 'dı' because of vowel harmony)) is  
	// an special case in the Past Continuous 

	let larOrLer = `dular`;

	let personalSuffixes = push(arrayOfPersonalSuffixes.II('du', 'u'), larOrLer);

	return generateResult({
		personalSuffixes,
		firstPart,
		verbRoot: root,
		tenseSuffix: gerundSuffix
	});

}

module.exports = PastContinuous;