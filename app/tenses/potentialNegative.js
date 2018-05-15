const {
	push,
	lastLetter,
	isVowel,
	length,
	strInit
} = require('./../methods/basics');

const {
	arrayOfPersonalSuffixes,
	generateResult,
	getProperties
} = require('./../methods/turkish');

// LAST CHECK 15 5 2018
// CANNOT, CAN'T
const PotentialNegative = (verb, DEFAULT = getProperties(verb)) => {

	// if the verb is composed in any way, we'll get its firstPart by removing that verb that compose it. Example: Affetmek -> Aff || Yardım etmek -> Yardım
	let firstPart = DEFAULT.isAuxiliaryComposedVerb ? DEFAULT.initComposedVerb : DEFAULT.isAuxiliaryComposedVerbInNegativeForm ? DEFAULT.initComposedVerbInNegativeForm : DEFAULT.isComposed ? DEFAULT.initPart : '';

	DEFAULT = DEFAULT.isAuxiliaryComposedVerb ? getProperties(DEFAULT.auxiliaryVerb) : DEFAULT.isAuxiliaryComposedVerbInNegativeForm ? getProperties(DEFAULT.auxiliaryVerbInNegativeForm) : DEFAULT.isComposed ? getProperties(DEFAULT.lastPart) : DEFAULT;


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

	let root = lastLetter(DEFAULT.root) === 'e' && length(DEFAULT.root) === 2 ? strInit(DEFAULT.root) + 'i' : DEFAULT.root;

	let negativeConstruction = root + (isVowel(lastLetter(DEFAULT.root)) ? 'y' : '') + DEFAULT.harmony2way + DEFAULT.negativeSuffix;
	
	let personalSuffixes = arrayOfPersonalSuffixes.IN(
		DEFAULT.verbSuffix === 'mak' ? 'ı' : 'i'
	);

	let larOrLer = 'zl' + DEFAULT.harmony2way + 'r';

	return generateResult({
		personalSuffixes: push(personalSuffixes, larOrLer),
		firstPart,
		verbRoot: negativeConstruction
	})

}

module.exports = PotentialNegative;