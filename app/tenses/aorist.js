const {
	push,
	lastLetter,
	firstLetter,
	isVowel,
	strInit,
	length
} = require('./../methods/basics');

const {

	arrayOfPersonalSuffixes,
	get4WayHarmonyOf,
	generateResult,
	getProperties,
	getLastVowel,
	lookIn4Ways,
	lookIn2Ways

} = require('./../methods/turkish');

const {
	exceptions
} = require('./../obj');

// lAST CHECK 3 1 2018
const Aorist = (verb, DEFAULT = getProperties(verb)) => {

	// AORIST IS THE HARDER CONJUGATION IN TURKISH
	console.log(DEFAULT)
	// if it's two or MORE Words verb then we get the first part (like haskell: init part)
	// this has an space but it's not longer necessary
	let firstPart = (DEFAULT.isAuxiliaryComposedVerb) ? DEFAULT.initComposedVerb : (DEFAULT.isComposed && DEFAULT.isAuxiliaryComposedVerbInNegativeForm) ? DEFAULT.initComposedVerbInNegativeForm : (DEFAULT.isAuxiliaryComposedVerbInNegativeForm) ? DEFAULT.initComposedVerbInNegativeForm : (DEFAULT.isComposed) ? DEFAULT.initPart : '';
	// and change the default for getting the properties of the real verb, so the last part that is usually "etmek"
	DEFAULT = (DEFAULT.isAuxiliaryComposedVerb) ? getProperties(DEFAULT.auxiliaryVerb) : (DEFAULT.isComposed && DEFAULT.isAuxiliaryComposedVerbInNegativeForm) ? getProperties(DEFAULT.auxiliaryVerbInNegativeForm) : (DEFAULT.isAuxiliaryComposedVerbInNegativeForm) ? getProperties(DEFAULT.auxiliaryVerbInNegativeForm) : (DEFAULT.isComposed) ? getProperties(DEFAULT.lastPart) : DEFAULT;
	
	// harmonyRoot is like a default value if the conditions in aoristSuffix aren't enough
	let harmonyRoot = `${get4WayHarmonyOf(verb)}r`;

	let aoristSuffix = isVowel(lastLetter(DEFAULT.root)) ? 'r' : (length(DEFAULT.root) <= 3 && !exceptions.includes(DEFAULT.verb)) ? `${DEFAULT.harmony2way}r` : `${DEFAULT.harmony4way}r`;
	
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
	let negativeRoot = DEFAULT.positiveRoot + DEFAULT.negativeSuffix;

	let larOrLerN = `zl${DEFAULT.harmony2way}r`;

	let personalSuffixesN = push(arrayOfPersonalSuffixes.IN(DEFAULT.harmony4way), larOrLerN);

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
console.log(Aorist('bilmek'))

module.exports = Aorist;