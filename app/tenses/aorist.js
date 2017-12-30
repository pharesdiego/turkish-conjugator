const {
	push,
	lastLetter,
	firstLetter,
	isVowel,
	getLastPart,
	getFirstPart
} = require('./../methods/basics');

const {

	isLastLetterOfRootAVowel,
	arrayOfPersonalSuffixes,
	get4WayHarmonyOf,
	get2WayHarmonyByRootOf,
	generateResult,
	getProperties,
	getLastVowel,
	lookIn4Ways,
	lookIn2Ways

} = require('./../methods/turkish');

const Aorist = (verb, DEFAULT = getProperties(verb)) => {

	// if it's two words verb then we get the first part
	let firstPart = (DEFAULT.isTwoWordsVerb) ? `${getFirstPart(DEFAULT.verb)[0]} ` : '';
	// and change the default for getting the properties of the real verb, so the last part that is usually "etmek"
	DEFAULT = (DEFAULT.isTwoWordsVerb) ? getProperties(getLastPart(DEFAULT.verb)[0]) : DEFAULT;

	// harmonyRoot is like a default value if the conditions in aoristSuffix aren't enough
	let harmonyRoot = `${get4WayHarmonyOf(verb)}r`;

	let aoristSuffix = isLastLetterOfRootAVowel(verb) ? 'r' : (DEFAULT.vowelsLength >= 2) ? harmonyRoot : (DEFAULT.vowelsLength == 1 && /[ae]/i.test(DEFAULT.verbVowels) && /[lnr]/i.test(lastLetter(DEFAULT.root))) ? harmonyRoot : (/[ie]/.test(DEFAULT.verbVowels) && lastLetter(DEFAULT.root) != 'l') ? 'er' : (DEFAULT.verbVowels == 'i') ? 'ir' : (DEFAULT.verbVowels == 'a') ? 'ar' : (DEFAULT.verbVowels == 'ü') ? 'er' : harmonyRoot;

	// RECHECKS. Aorist time is really complicated and we need to recheck the root harmony
	// We are recheking by the aorist suffix, so if it's "-er"
	// recheck4Harmony will be "i"
	// recheck2Harmony will be "e"
	// if aoristSuffix is "-r" then we use the default values because there aren't problems
	let recheck4Harmony = (aoristSuffix == 'r') ? DEFAULT.harmony4way : lookIn4Ways(getLastVowel(aoristSuffix));

	let recheck2Harmony = (aoristSuffix == 'r') ? DEFAULT.harmony2way : lookIn2Ways(getLastVowel(aoristSuffix));


	// let larOrLer = (isVowel(firstLetter(aoristSuffix))) ? `l${get2WayHarmonyByRootOf(aoristSuffix)}r` : `l${DEFAULT.harmony2way}r`;
	let larOrLer = `l${recheck2Harmony}r`;
	let personalSuffixes = push(arrayOfPersonalSuffixes.I(recheck4Harmony), larOrLer);

	// If it's negative... 
	let root = DEFAULT.positiveRoot + DEFAULT.negativeSuffix;

	let larOrLerN = `zl${DEFAULT.harmony2way}r`;

	let personalSuffixesN = push(arrayOfPersonalSuffixes.IN(DEFAULT.harmony4way), larOrLerN);

	return (DEFAULT.isNegative) ? generateResult(personalSuffixesN, firstPart, root) : generateResult(personalSuffixes, firstPart, DEFAULT.root, aoristSuffix);
}


module.exports = Aorist;
