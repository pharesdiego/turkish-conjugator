const {
	push,
	lastLetter,
	firstLetter,
	isVowel,
	getLastPart,
	getFirstPart,
	strInit
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

	// AORIST IS THE HARDER CONJUGATION IN TURKISH

	// if it's two words verb then we get the first part
	let firstPart = (DEFAULT.isTwoWordsVerb) ? `${getFirstPart(DEFAULT.verb)[0]} ` : '';
	// and change the default for getting the properties of the real verb, so the last part that is usually "etmek"
	DEFAULT = (DEFAULT.isTwoWordsVerb) ? getProperties(getLastPart(DEFAULT.verb)[0]) : DEFAULT;

	// harmonyRoot is like a default value if the conditions in aoristSuffix aren't enough
	let harmonyRoot = `${get4WayHarmonyOf(verb)}r`;

	// <>>>< N E E D  T O  E X P L A I N  A L L  T H E S E  C O N D I T I O N S>>><<<>>
	// Maybe this could be a function (in other module) with a lot of IF for easy reading 
	// OLD: let aoristSuffix = isLastLetterOfRootAVowel(verb) ? 'r' : (DEFAULT.vowelsLength >= 2) ? harmonyRoot : (DEFAULT.vowelsLength == 1 && /[ae]/i.test(DEFAULT.verbVowels) && /[lnr]/i.test(lastLetter(DEFAULT.root))) ? harmonyRoot : (/[ie]/.test(DEFAULT.verbVowels) && lastLetter(DEFAULT.root) != 'l') ? 'er' : (DEFAULT.verbVowels == 'i') ? 'ir' : (DEFAULT.verbVowels == 'a') ? 'ar' : (DEFAULT.verbVowels == 'ü') ? 'er' : (DEFAULT.verbVowels == 'ı') ? 'ar' : harmonyRoot;
	let aoristSuffix = isLastLetterOfRootAVowel(verb) ? 'r' : (DEFAULT.vowelsLength >= 2) ? harmonyRoot : (DEFAULT.vowelsLength == 1 && /[ae]/i.test(DEFAULT.verbVowels) && /[lnr]/i.test(lastLetter(DEFAULT.root))) ? harmonyRoot : (/[ie]/.test(DEFAULT.verbVowels) && lastLetter(DEFAULT.root) != 'l') ? 'er' : (DEFAULT.verbVowels == 'i') ? 'ir' : (DEFAULT.verbVowels == 'a') ? 'ar' : (DEFAULT.verbVowels == 'ü') ? 'er' : (DEFAULT.verbVowels == 'ı') ? 'ar' : (DEFAULT.verbVowels == 'o') ? 'ur' : (DEFAULT.isSingleSyllableVerb && DEFAULT.verbSuffix == 'mek') ? 'er' : 'ar';

	// To change aoristSuffix value isn't very function paradigm but,
	// believe me, we won't use it anymore :)

	// if it's single syllable verb then the suffix could be "ar" or "er". 
	// if the root is "mak" it's gonna be "ar", else it's not then "er"
	// But we need to take care that the verb don't finish with a vowel LOL
	// aoristSuffix = isLastLetterOfRootAVowel(verb) ? 'r' : (DEFAULT.isSingleSyllableVerb && DEFAULT.verbSuffix == 'mek') ? 'er' : 'ar';

	// If it's etmekComposed then the aoristSuffix will always be "-er"
	aoristSuffix = (DEFAULT.isEtmekComposed) ? 'er' : aoristSuffix;

	// if it's axiliary composed verb (without spaces)

	aoristSuffix = (DEFAULT.isAuxiliaryComposedVerb) ? 'er' : aoristSuffix;

	DEFAULT.root = (DEFAULT.isAuxiliaryComposedVerb) ? strInit(DEFAULT.root) + 'd' : DEFAULT.root;

	// RECHECKS. Aorist time is really complicated and we need to recheck the root harmony
	// We are recheking by the aorist suffix, so if it's "-er"
	// recheck4Harmony will be "i"
	// recheck2Harmony will be "e"
	// if aoristSuffix is "-r" then we use the default values because there aren't problems
	let recheck4Harmony = (aoristSuffix == 'r') ? DEFAULT.harmony4way : lookIn4Ways(getLastVowel(aoristSuffix));

	let recheck2Harmony = (aoristSuffix == 'r') ? DEFAULT.harmony2way : lookIn2Ways(getLastVowel(aoristSuffix));


	let larOrLer = `l${recheck2Harmony}r`;

	let personalSuffixes = push(arrayOfPersonalSuffixes.I(recheck4Harmony), larOrLer);

	// If it's negative... 
	let root = DEFAULT.positiveRoot + DEFAULT.negativeSuffix;

	let larOrLerN = `zl${DEFAULT.harmony2way}r`;

	let personalSuffixesN = push(arrayOfPersonalSuffixes.IN(DEFAULT.harmony4way), larOrLerN);

	return (DEFAULT.isNegative) ? generateResult(personalSuffixesN, firstPart, root) : generateResult(personalSuffixes, firstPart, DEFAULT.root, aoristSuffix);
}

module.exports = Aorist;