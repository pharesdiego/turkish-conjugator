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

// LAST CHECK 10 5 2018
const Future = (verb, DEFAULT = getProperties(verb)) => {

	// if the verb is composed in any way, we'll get its firstPart by removing that verb that compose it. Example: Affetmek -> Aff || Yardım etmek -> Yardım
	let firstPart = DEFAULT.isAuxiliaryComposedVerb ? DEFAULT.initComposedVerb : DEFAULT.isAuxiliaryComposedVerbInNegativeForm ? DEFAULT.initComposedVerbInNegativeForm : DEFAULT.isComposed ? DEFAULT.initPart : '';

	DEFAULT = DEFAULT.isAuxiliaryComposedVerb ? getProperties(DEFAULT.auxiliaryVerb) : DEFAULT.isAuxiliaryComposedVerbInNegativeForm ? getProperties(DEFAULT.auxiliaryVerbInNegativeForm) : DEFAULT.isComposed ? getProperties(DEFAULT.lastPart) : DEFAULT;

	// if the last letter is of the root is a vowel we add the buffer "y" that's part of the future suffix:
		// the future suffix is (y)ecek (y)acak
	let root = isVowel(lastLetter(DEFAULT.root)) ? DEFAULT.root + 'y' : DEFAULT.root;


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

		//addMutatedLetter, firstPart, root, futureSuffix
	return generateResult({
		personalSuffixes: addMutatedLetter,
		firstPart,
		verbRoot: root,
		tenseSuffix: futureSuffix
	});

}

console.log(Future('affetmek'))

module.exports = Future;