const {
	push,
	firstLetter,
	isVowel,
	getFirstPart,
	getLastPart,
	strInit
} = require('./../methods/basics');

const {

	isLastLetterOfRootAVowel,
	arrayOfPersonalSuffixes,
	generateResult,
	getProperties

} = require('./../methods/turkish');

const Future = (verb, DEFAULT = getProperties(verb)) => {

	// if it's two words verb then we get the first part
	let firstPart = (DEFAULT.isTwoWordsVerb) ? `${getFirstPart(DEFAULT.verb)[0]} ` : '';
	// and change the default for getting the properties of the real verb, so the last part that is usually "etmek"
	DEFAULT = (DEFAULT.isTwoWordsVerb) ? getProperties(getLastPart(DEFAULT.verb)[0]) : DEFAULT;

	let root = (isLastLetterOfRootAVowel(verb)) ? DEFAULT.root + 'y' : DEFAULT.root;

	//if it's auxiliary composed (so if it uses etmek) then we need to mutate the final t to d 
	root = (DEFAULT.isAuxiliaryComposedVerb) ? strInit(root) + 'd' : root;

	// the final K or ğ is added later because it's more use to add than mutate a letter
	let futureSuffix = `${DEFAULT.harmony2way}c${DEFAULT.harmony2way}`;

	let larOrLer = `l${DEFAULT.harmony2way}r`;

	let personalSuffixes = push(arrayOfPersonalSuffixes.I(DEFAULT.harmony4way), larOrLer);

	let addMutatedLetter = personalSuffixes.map(item => isVowel(firstLetter(item)) ? `ğ${item}` : `k${item}`);

	return generateResult(addMutatedLetter, firstPart, root, futureSuffix);

}

module.exports = Future;