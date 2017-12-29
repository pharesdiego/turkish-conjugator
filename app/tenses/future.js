const {
	push,
	firstLetter,
	isVowel
} = require('./../methods/basics');

const {

	isLastLetterOfRootAVowel,
	arrayOfPersonalSuffixes,
	generateResult,
	getProperties

} = require('./../methods/turkish');

const Future = (verb, DEFAULT = getProperties(verb)) => {

	let root = (isLastLetterOfRootAVowel(verb)) ? DEFAULT.root + 'y' : DEFAULT.root;

	// the final K or ğ is added later because it's more use to add than mutate a letter
	let futureSuffix = `${DEFAULT.harmony2way}c${DEFAULT.harmony2way}`;

	let larOrLer = `l${DEFAULT.harmony2way}r`;

	let personalSuffixes = push(arrayOfPersonalSuffixes.I(DEFAULT.harmony4way), larOrLer);

	let addMutatedLetter = personalSuffixes.map(item => isVowel(firstLetter(item)) ? `ğ${item}` : `k${item}`);

	return generateResult(addMutatedLetter, root, futureSuffix);

}

module.exports = Future;