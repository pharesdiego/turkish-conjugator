const {
	push,
	firstLetter,
	isVowel,
	lastLetter,
	strInit
} = require('./../methods/basics');

const {

	arrayOfPersonalSuffixes,
	generateResult,
	getProperties

} = require('./../methods/turkish');

// LAST CHECK 4 1 2018
const Future = (verb, DEFAULT = getProperties(verb)) => {

	// if it's two or MORE Words verb then we get the first part (like haskell: init part)
	// this has an space but it's not longer necessary
	let firstPart = (DEFAULT.isAuxiliaryComposedVerb) ? DEFAULT.initComposedVerb : (DEFAULT.isComposed && DEFAULT.isAuxiliaryComposedVerbInNegativeForm) ? DEFAULT.initComposedVerbInNegativeForm : (DEFAULT.isAuxiliaryComposedVerbInNegativeForm) ? DEFAULT.initComposedVerbInNegativeForm : (DEFAULT.isComposed) ? DEFAULT.initPart : '';
	// and change the default for getting the properties of the real verb, so the last part that is usually "etmek"
	DEFAULT = (DEFAULT.isAuxiliaryComposedVerb) ? getProperties(DEFAULT.auxiliaryVerb) : (DEFAULT.isComposed && DEFAULT.isAuxiliaryComposedVerbInNegativeForm) ? getProperties(DEFAULT.auxiliaryVerbInNegativeForm) : (DEFAULT.isAuxiliaryComposedVerbInNegativeForm) ? getProperties(DEFAULT.auxiliaryVerbInNegativeForm) : (DEFAULT.isComposed) ? getProperties(DEFAULT.lastPart) : DEFAULT;

	// if the last letter is of the root is a vowel we add the buffer "y" that's part of the future suffix:
		// the future suffix is (y)ecek (y)acak
	let root = (isVowel(lastLetter(DEFAULT.root))) ? DEFAULT.root + 'y' : DEFAULT.root;


	// the final k or ğ is added later because it's more easy to add than mutate a letter
	let futureSuffix = `${DEFAULT.harmony2way}c${DEFAULT.harmony2way}`;


	// we need to know which suffix is maked on "futureSuffix" for making the harmony
	// if it's "ece" then the harmony is "i"
	// if it's "aca" then the harmony is "ı"
	let harmonyByFutureSuffix = (futureSuffix == 'ece') ? 'i' : 'ı';


	let larOrLer = `l${DEFAULT.harmony2way}r`;

	let personalSuffixes = push(arrayOfPersonalSuffixes.I(harmonyByFutureSuffix), larOrLer);

	// after we get the personal suffix, we need to add ğ is the first letter is a vowel or k if it isn't
	// example: im -> ğim
	// example: sin -> ksin
	let addMutatedLetter = personalSuffixes.map(item => isVowel(firstLetter(item)) ? `ğ${item}` : `k${item}`);

	return generateResult(addMutatedLetter, firstPart, root, futureSuffix);

}


module.exports = Future;