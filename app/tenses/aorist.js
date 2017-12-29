const {
	push,
	lastLetter,
	firstLetter,
	isVowel
} = require('./../methods/basics');

const {

	isLastLetterOfRootAVowel,
	arrayOfPersonalSuffixes,
	get4WayHarmonyOf,
	get2WayHarmonyByRootOf,
	generateResult,
	getProperties

} = require('./../methods/turkish');

const Aorist = (verb, DEFAULT = getProperties(verb)) => {

	// harmonyRoot is like a default value if the conditions in aoristSuffix aren't enough
	let harmonyRoot = `${get4WayHarmonyOf(verb)}r`;

	let aoristSuffix = isLastLetterOfRootAVowel(verb) ? 'r' : (DEFAULT.vowelsLength >= 2) ? harmonyRoot : (DEFAULT.vowelsLength == 1 && /[ae]/i.test(DEFAULT.verbVowels) && /[lnr]/i.test(lastLetter(DEFAULT.root))) ? harmonyRoot : (/[ie]/.test(DEFAULT.verbVowels) && lastLetter(DEFAULT.root) != 'l') ? 'er' : (DEFAULT.verbVowels == 'i') ? 'ir' : (DEFAULT.verbVowels == 'a') ? 'ar' : harmonyRoot;

	let larOrLer = (isVowel(firstLetter(aoristSuffix))) ? `l${get2WayHarmonyByRootOf(aoristSuffix)}r` : `l${DEFAULT.harmony2way}r`;

	let personalSuffixes = push(arrayOfPersonalSuffixes.I(DEFAULT.harmony4way), larOrLer);

	// If it's negative... 

	let root = DEFAULT.positiveRoot + DEFAULT.negativeSuffix;

	let larOrLerN = `zl${DEFAULT.harmony2way}r`;

	let personalSuffixesN = push(arrayOfPersonalSuffixes.IN(DEFAULT.harmony4way), larOrLerN);

	return (DEFAULT.isNegative) ? generateResult(personalSuffixesN, root) : generateResult(personalSuffixes, DEFAULT.root, aoristSuffix);
}

module.exports = Aorist;