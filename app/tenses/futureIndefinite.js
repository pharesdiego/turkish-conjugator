const {
	push,
	strInit,
	isVowel,
	lastLetter
} = require('./../methods/basics');

const {

	isLastLetterOfRootAVowel,
	arrayOfPersonalSuffixes,
	generateResult,
	getProperties

} = require('./../methods/turkish');

// LAST CHECK 24 5 2018
const FutureIndefinite = (verb, DEFAULT = getProperties(verb)) => {

		// if the verb is composed in any way, we'll get its firstPart by removing that verb that compose it. Example: Affetmek -> Aff || Yardım etmek -> Yardım
		let firstPart = DEFAULT.isAuxiliaryComposedVerb ? DEFAULT.initComposedVerb : DEFAULT.isAuxiliaryComposedVerbInNegativeForm ? DEFAULT.initComposedVerbInNegativeForm : DEFAULT.isComposed ? DEFAULT.initPart : '';

		DEFAULT = DEFAULT.isAuxiliaryComposedVerb ? getProperties(DEFAULT.auxiliaryVerb) : DEFAULT.isAuxiliaryComposedVerbInNegativeForm ? getProperties(DEFAULT.auxiliaryVerbInNegativeForm) : DEFAULT.isComposed ? getProperties(DEFAULT.lastPart) : DEFAULT;

	// this use: verb root + future suffix + -miş- OR -mış- + Personal Suffix I
	// Try with gelmek and yapmak for -(y)ecek and -(y)acak
	let root = lastLetter(DEFAULT.root) === 'e' && DEFAULT.vowelsLength === 1 ? strInit(DEFAULT.root) + 'i' : DEFAULT.root;

	let rootConstruction = root + ( isVowel(lastLetter(DEFAULT.root)) ? 'y' : '' );

	let futureSuffix = DEFAULT.harmony2way + 'c' + DEFAULT.harmony2way + 'k';

	// we need to know which suffix is on "futureSuffix" for making the harmony
	// if it's "ece" then the harmony is "i"
	// if it's "aca" then the harmony is "ı"
	let harmonyByFutureSuffix = futureSuffix === 'ecek' ? 'i' : 'ı';

	let larOrLer = ('m' + harmonyByFutureSuffix + 'ş') + ('l' + DEFAULT.harmony2way + 'r');

	let personalSuffixes = arrayOfPersonalSuffixes.I(harmonyByFutureSuffix)
																												.map(suffix => 'm' + harmonyByFutureSuffix + 'ş' + suffix);

	return generateResult({
		personalSuffixes: push(personalSuffixes, larOrLer),
		firstPart,
		verbRoot: rootConstruction,
		tenseSuffix: futureSuffix
	})
}

module.exports = FutureIndefinite;