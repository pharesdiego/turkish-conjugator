const {
	push,
	strInit
} = require('./../methods/basics');

const {

	isLastLetterOfRootAVowel,
	arrayOfPersonalSuffixes,
	generateResult,
	getProperties

} = require('./../methods/turkish');

// LAST CHECK 3 1 2018
const FutureIndefinite = (verb, DEFAULT = getProperties(verb)) => {

	// if it's two or MORE Words verb then we get the first part (like haskell: init part)
	// this has an space but it's not longer necessary
	let firstPart = (DEFAULT.isAuxiliaryComposedVerb) ? DEFAULT.initComposedVerb : (DEFAULT.isComposed && DEFAULT.isAuxiliaryComposedVerbInNegativeForm) ? DEFAULT.initComposedVerbInNegativeForm : (DEFAULT.isAuxiliaryComposedVerbInNegativeForm) ? DEFAULT.initComposedVerbInNegativeForm : (DEFAULT.isComposed) ? DEFAULT.initPart : '';
	// and change the default for getting the properties of the real verb, so the last part that is usually "etmek"
	DEFAULT = (DEFAULT.isAuxiliaryComposedVerb) ? getProperties(DEFAULT.auxiliaryVerb) : (DEFAULT.isComposed && DEFAULT.isAuxiliaryComposedVerbInNegativeForm) ? getProperties(DEFAULT.auxiliaryVerbInNegativeForm) : (DEFAULT.isAuxiliaryComposedVerbInNegativeForm) ? getProperties(DEFAULT.auxiliaryVerbInNegativeForm) : (DEFAULT.isComposed) ? getProperties(DEFAULT.lastPart) : DEFAULT;

	// this use: verb root + future suffix + -miş- OR -mış- + Personal Suffix I
	// Try with gelmek and yapmak for -(y)ecek and -(y)acak
	// for 3th person plural we use the suffix (-larmış) or (-lermiş)

	let root = (isLastLetterOfRootAVowel(verb)) ? DEFAULT.root + 'y' : DEFAULT.root;

	// the final K or ğ is added later because it's more use to add than mutate a letter
	let futureSuffix = `${DEFAULT.harmony2way}c${DEFAULT.harmony2way}k`;

	// we need to know which suffix is maked on "futureSuffix" for making the harmony
	// if it's "ece" then the harmony is "i"
	// if it's "aca" then the harmony is "ı"
	// in this case we add the "k" at the final immediatly because we already know that the next thing will be the "m" of "miş"
	let harmonyByFutureSuffix = (futureSuffix == 'ecek') ? 'i' : 'ı';


	let larOrLer = `l${DEFAULT.harmony2way}rm${harmonyByFutureSuffix}ş`;

	let personalSuffixes = arrayOfPersonalSuffixes.I(harmonyByFutureSuffix).map((item) => `m${harmonyByFutureSuffix}ş${item}`);

	return generateResult(push(personalSuffixes, larOrLer), firstPart, root, futureSuffix);

}

module.exports = FutureIndefinite;