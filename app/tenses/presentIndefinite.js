const {
	push,
	lastLetter,
	getFirstPart,
	getLastPart,
	strInit,
	isVowel,
	length
} = require('./../methods/basics');

const {

	arrayOfPersonalSuffixes,
	get4WayHarmonyOf,
	generateResult,
	getProperties,
	lookIn4Ways,
	lookIn2Ways,
	getLastVowel

} = require('./../methods/turkish');

const {
	exceptions
} = require('./../obj');


// LAST CHECK 4 1 2018
const PresentIndefinite = (verb, DEFAULT = getProperties(verb)) => {

	// if it's two or MORE Words verb then we get the first part (like haskell: init part)
	// this has an space but it's not longer necessary
	let firstPart = (DEFAULT.isAuxiliaryComposedVerb) ? DEFAULT.initComposedVerb : (DEFAULT.isComposed && DEFAULT.isAuxiliaryComposedVerbInNegativeForm) ? DEFAULT.initComposedVerbInNegativeForm : (DEFAULT.isAuxiliaryComposedVerbInNegativeForm) ? DEFAULT.initComposedVerbInNegativeForm : (DEFAULT.isComposed) ? DEFAULT.initPart : '';
	// and change the default for getting the properties of the real verb, so the last part that is usually "etmek"
	DEFAULT = (DEFAULT.isAuxiliaryComposedVerb) ? getProperties(DEFAULT.auxiliaryVerb) : (DEFAULT.isComposed && DEFAULT.isAuxiliaryComposedVerbInNegativeForm) ? getProperties(DEFAULT.auxiliaryVerbInNegativeForm) : (DEFAULT.isAuxiliaryComposedVerbInNegativeForm) ? getProperties(DEFAULT.auxiliaryVerbInNegativeForm) : (DEFAULT.isComposed) ? getProperties(DEFAULT.lastPart) : DEFAULT;
	
	// Gelirmişler -> It seems they (will) come. (Parece que vienen/vendrán)
	// This use: verb root + aorist suffix + -miş- -mış- -müş- -muş + Personal Suffix I
	// for 3th person plural we use the suffix muş + lar/miş + ler... etc

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

	let larOrLer = `m${recheck4Harmony}şl${recheck2Harmony}r`;

	let personalSuffixes = arrayOfPersonalSuffixes.I(recheck4Harmony).map((item) => `m${recheck4Harmony}ş${item}`);

	return generateResult(push(personalSuffixes, larOrLer), firstPart, DEFAULT.root, aoristSuffix);

}

module.exports = PresentIndefinite;