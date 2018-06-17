const {
	push,
	lastLetter,
	isVowel,
	length
} = require('./../methods/basics');

const {
	arrayOfPersonalSuffixes,
	generateResult,
	getProperties,
	getLastVowel,
	lookIn4Ways,
	lookIn2Ways

} = require('./../methods/turkish');

const {
	exceptions
} = require('./../rules');

// lAST CHECK 3 5 2018
const Aorist = (verb, DEFAULT = getProperties(verb)) => {
	// if the verb is composed in any way, we'll get its firstPart by removing that verb that compose it. Example: Affetmek -> Aff || Yardım etmek -> Yardım
	let firstPart = DEFAULT.isAuxiliaryComposedVerb ? DEFAULT.initComposedVerb : DEFAULT.isAuxiliaryComposedVerbInNegativeForm ? DEFAULT.initComposedVerbInNegativeForm : DEFAULT.isComposed ? DEFAULT.initPart : '';

	DEFAULT = DEFAULT.isAuxiliaryComposedVerb ? getProperties(DEFAULT.auxiliaryVerb) : DEFAULT.isAuxiliaryComposedVerbInNegativeForm ? getProperties(DEFAULT.auxiliaryVerbInNegativeForm) : DEFAULT.isComposed ? getProperties(DEFAULT.lastPart) : DEFAULT;

	let aoristSuffix = isVowel(lastLetter(DEFAULT.root)) ? 'r' : exceptions.includes(DEFAULT.verb) || length(DEFAULT.root) > 3 ? DEFAULT.harmony4way + 'r' : DEFAULT.harmony2way + 'r';
	// RECHECKS. Aorist time is really complicated and we need to recheck the root harmony
	// We are recheking by the aorist suffix, so if it's "-er"
	// recheck4Harmony will be "i"
	// recheck2Harmony will be "e"
	// if aoristSuffix is "-r" then we use the default values because there aren't problems
	let recheck4Harmony = aoristSuffix === 'r' ? DEFAULT.harmony4way : lookIn4Ways(getLastVowel(aoristSuffix));

	let recheck2Harmony = aoristSuffix === 'r' ? DEFAULT.harmony2way : lookIn2Ways(getLastVowel(aoristSuffix));

	let larOrLer = 'l' + recheck2Harmony + 'r';

	let personalSuffixes = push(arrayOfPersonalSuffixes.I(recheck4Harmony), larOrLer);

	// If it's negative... 
	let negativeRoot = DEFAULT.positiveRoot + DEFAULT.negativeSuffix;

	let larOrLerNegative = 'zl' + DEFAULT.harmony2way + 'r'

	let personalSuffixesN = push(arrayOfPersonalSuffixes.IN(DEFAULT.harmony4way), larOrLerNegative);

	return (DEFAULT.isNegative) ?
		generateResult({
			personalSuffixes: personalSuffixesN,
			verbRoot: negativeRoot,
			firstPart
		}) 	
		: 
		generateResult({
			personalSuffixes,
			firstPart,
			verbRoot: DEFAULT.root,
			tenseSuffix: aoristSuffix
		});
}
module.exports = Aorist;