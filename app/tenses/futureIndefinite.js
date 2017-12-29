const {
	push
} = require('./../methods/basics');

const {

	isLastLetterOfRootAVowel,
	arrayOfPersonalSuffixes,
	generateResult,
	getProperties

} = require('./../methods/turkish');

const FutureIndefinite = (verb, DEFAULT = getProperties(verb)) => {

	// this use: verb root + future suffix + -miş- OR -mış- + Personal Suffix I
	// Try with gelmek and yapmak for -(y)ecek and -(y)acak
	// for 3th person plural we use the suffix (-larmış) or (-lermiş)

	let root = (isLastLetterOfRootAVowel(verb)) ? DEFAULT.root + 'y' : DEFAULT.root;

	// the final K or ğ is added later because it's more use to add than mutate a letter
	let futureSuffix = `${DEFAULT.harmony2way}c${DEFAULT.harmony2way}k`;

	let larOrLer = `l${DEFAULT.harmony2way}rm${DEFAULT.harmony4way}ş`;

	let personalSuffixes = arrayOfPersonalSuffixes.I(DEFAULT.harmony4way).map((item) => `m${DEFAULT.harmony4way}ş${item}`);

	return generateResult(push(personalSuffixes, larOrLer), root, futureSuffix);

}

module.exports = FutureIndefinite;