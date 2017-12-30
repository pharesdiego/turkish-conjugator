const {
	push,
	lastLetter,
	getFirstPart,
	getLastPart
} = require('./../methods/basics');

const {

	isLastLetterOfRootAVowel,
	arrayOfPersonalSuffixes,
	get4WayHarmonyOf,
	generateResult,
	getProperties

} = require('./../methods/turkish');

const PresentIndefinite = (verb, DEFAULT = getProperties(verb)) => {

	// if it's two words verb then we get the first part
	let firstPart = (DEFAULT.isTwoWordsVerb) ? `${getFirstPart(DEFAULT.verb)[0]} ` : '';
	// and change the default for getting the properties of the real verb, so the last part that is usually "etmek"
	DEFAULT = (DEFAULT.isTwoWordsVerb) ? getProperties(getLastPart(DEFAULT.verb)[0]) : DEFAULT;

	// Gelirmişler -> It seems they (will) come. (Parece que vienen/vendrán)
	// This use: verb root + aorist suffix + -miş- -mış- -müş- -muş + Personal Suffix I
	// for 3th person plural we use the suffix muş + lar/miş + ler... etc

	// harmonyRoot is like a default value if the conditions in aoristSuffix aren't enough
	let harmonyRoot = `${get4WayHarmonyOf(verb)}r`;

	let aoristSuffix = isLastLetterOfRootAVowel(verb) ? 'r' : (DEFAULT.vowelsLength >= 2) ? harmonyRoot : (DEFAULT.vowelsLength == 1 && /[ae]/i.test(DEFAULT.verbVowels) && /[lnr]/i.test(lastLetter(DEFAULT.root))) ? harmonyRoot : (/[ie]/.test(DEFAULT.verbVowels) && lastLetter(DEFAULT.root) != 'l') ? 'er' : (DEFAULT.verbVowels == 'i') ? 'ir' : (DEFAULT.verbVowels == 'a') ? 'ar' : harmonyRoot;

	let larOrLer = `m${DEFAULT.harmony4way}şl${DEFAULT.harmony2way}r`;

	let personalSuffixes = arrayOfPersonalSuffixes.I(DEFAULT.harmony4way).map((item) => `m${DEFAULT.harmony4way}ş${item}`);

	return generateResult(push(personalSuffixes, larOrLer), firstPart, DEFAULT.root, aoristSuffix);

}

module.exports = PresentIndefinite;