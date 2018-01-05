const {
	push,
	lastLetter,
	isVowel
} = require('./../methods/basics');
const {
	strInit
} = require('./../methods/basics');

const {
	arrayOfPersonalSuffixes,
	generateResult,
	getProperties

} = require('./../methods/turkish');

// LAST CHECK 4 1 2018
// CANNOT, CAN'T
const PotentialNegative = (verb, DEFAULT = getProperties(verb)) => {

	// if it's two or MORE Words verb then we get the first part (like haskell: init part)
	// this has an space but it's not longer necessary
	let firstPart = (DEFAULT.isAuxiliaryComposedVerb) ? DEFAULT.initComposedVerb : (DEFAULT.isComposed && DEFAULT.isAuxiliaryComposedVerbInNegativeForm) ? DEFAULT.initComposedVerbInNegativeForm : (DEFAULT.isAuxiliaryComposedVerbInNegativeForm) ? DEFAULT.initComposedVerbInNegativeForm : (DEFAULT.isComposed) ? DEFAULT.initPart : '';
	// and change the default for getting the properties of the real verb, so the last part that is usually "etmek"
	DEFAULT = (DEFAULT.isAuxiliaryComposedVerb) ? getProperties(DEFAULT.auxiliaryVerb) : (DEFAULT.isComposed && DEFAULT.isAuxiliaryComposedVerbInNegativeForm) ? getProperties(DEFAULT.auxiliaryVerbInNegativeForm) : (DEFAULT.isAuxiliaryComposedVerbInNegativeForm) ? getProperties(DEFAULT.auxiliaryVerbInNegativeForm) : (DEFAULT.isComposed) ? getProperties(DEFAULT.lastPart) : DEFAULT;


	// the description of this tense is:
		// a negative verb to which we need to put the cannot suffix between the root and the negative in infitive (mamak/memek)
			// so a verb like yazmamak becomes -> yaz a mamak
			// or verb like beklememek becomes -> bekle ye memek


	// what I did: 

	// for first we take the root of the verb, let's take yazmak as an example
		// the root of yazmak is "yaz"

	// in the middle of this pattern we ask if the lastLetter isVowel (if last letter is a vowel)
		// if it's a vowel then we add the buffer letter "y"
		// else we add the second way of harmony, that could be "a" or "e"

	// at the final we add the negativeSuffix, that is dedused by adding the second harmony to a "m"
		// the result could be "ma" or "me"




	let root = DEFAULT.root + (isVowel(lastLetter(DEFAULT.root)) ? `y${DEFAULT.harmony2way}` : DEFAULT.harmony2way)  + DEFAULT.negativeSuffix;


	let personalSuffixes = arrayOfPersonalSuffixes.IN(DEFAULT.harmony4way);


	let larOrLer = `zl${DEFAULT.harmony2way}r`;

	return generateResult(push(personalSuffixes, larOrLer), firstPart, root);

}

module.exports = PotentialNegative;
