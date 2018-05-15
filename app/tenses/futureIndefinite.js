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

// LAST CHECK 4 1 2018
const FutureIndefinite = (verb, DEFAULT = getProperties(verb)) => {

	// if the verb is composed in any way, we'll get its firstPart by removing that verb that compose it. Example: Affetmek -> Aff || Yardım etmek -> Yardım
	let firstPart = DEFAULT.isAuxiliaryComposedVerb ? DEFAULT.initComposedVerb : DEFAULT.isAuxiliaryComposedVerbInNegativeForm ? DEFAULT.initComposedVerbInNegativeForm : DEFAULT.isComposed ? DEFAULT.initPart : '';

	DEFAULT = DEFAULT.isAuxiliaryComposedVerb ? getProperties(DEFAULT.auxiliaryVerb) : DEFAULT.isAuxiliaryComposedVerbInNegativeForm ? getProperties(DEFAULT.auxiliaryVerbInNegativeForm) : DEFAULT.isComposed ? getProperties(DEFAULT.lastPart) : DEFAULT;

	// this use: verb root + future suffix + -miş- OR -mış- + Personal Suffix I
	// Try with gelmek and yapmak for -(y)ecek and -(y)acak
	// for 3th person plural we use the suffix (-larmış) or (-lermiş)

	let root = ( isVowel(lastLetter(DEFAULT.root)) ? 'y' : '' ) + DEFAULT.root;
	console.log(root)
	// the final K or ğ is added later because it's more use to add than mutate a letter
	let futureSuffix = DEFAULT.harmony2way + 'c' + DEFAULT.harmony2way;

	// we need to know which suffix is maked on "futureSuffix" for making the harmony
	// if it's "ece" then the harmony is "i"
	// if it's "aca" then the harmony is "ı"
	// in this case we add the "k" at the final immediatly because we already know that the next thing will be the "m" of "miş"
	let harmonyByFutureSuffix = futureSuffix === 'ecek' ? 'i' : 'ı';


	// let larOrLer = `l${DEFAULT.harmony2way}rm${harmonyByFutureSuffix}ş`;
	let larOrLer = 'l' + DEFAULT.harmony2way + 'rm' + harmonyByFutureSuffix + 'ş';

	let personalSuffixes = arrayOfPersonalSuffixes.I(harmonyByFutureSuffix)
																												.map(suffix => 'm' + harmonyByFutureSuffix + 'ş' + suffix);

	return generateResult({
		personalSuffixes: push(personalSuffixes, larOrLer),
		firstPart,
		verbRoot: root,
		tenseSuffix: futureSuffix
	})
}

console.log(FutureIndefinite('yemek'))

module.exports = FutureIndefinite;