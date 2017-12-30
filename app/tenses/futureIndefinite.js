const {
	push,
	getFirstPart,
	getLastPart
} = require('./../methods/basics');

const {

	isLastLetterOfRootAVowel,
	arrayOfPersonalSuffixes,
	generateResult,
	getProperties

} = require('./../methods/turkish');

const FutureIndefinite = (verb, DEFAULT = getProperties(verb)) => {

	// if it's two words verb then we get the first part
	let firstPart = (DEFAULT.isTwoWordsVerb) ? `${getFirstPart(DEFAULT.verb)[0]} ` : '';
	// and change the default for getting the properties of the real verb, so the last part that is usually "etmek"
	DEFAULT = (DEFAULT.isTwoWordsVerb) ? getProperties(getLastPart(DEFAULT.verb)[0]) : DEFAULT;

	// this use: verb root + future suffix + -miş- OR -mış- + Personal Suffix I
	// Try with gelmek and yapmak for -(y)ecek and -(y)acak
	// for 3th person plural we use the suffix (-larmış) or (-lermiş)

	let root = (isLastLetterOfRootAVowel(verb)) ? DEFAULT.root + 'y' : DEFAULT.root;

	// the final K or ğ is added later because it's more use to add than mutate a letter
	let futureSuffix = `${DEFAULT.harmony2way}c${DEFAULT.harmony2way}k`;

	let larOrLer = `l${DEFAULT.harmony2way}rm${DEFAULT.harmony4way}ş`;

	let personalSuffixes = arrayOfPersonalSuffixes.I(DEFAULT.harmony4way).map((item) => `m${DEFAULT.harmony4way}ş${item}`);

	return generateResult(push(personalSuffixes, larOrLer), firstPart, root, futureSuffix);

}

module.exports = FutureIndefinite;