const {
	push,
	strInit
} = require('./../methods/basics');

const {

	isLastLetterOfRootAVowel,
	arrayOfPersonalSuffixes,
	get4WayHarmonyByRootOf,
	generateResult,
	getProperties

} = require('./../methods/turkish');


// LAST CHECK 3 1 2018
const PastContinuous = (verb, DEFAULT = getProperties(verb)) => {

	// if it's two or MORE Words verb then we get the first part (like haskell: init part)
	// this has an space but it's not longer necessary
	let firstPart = (DEFAULT.isAuxiliaryComposedVerb) ? DEFAULT.initComposedVerb : (DEFAULT.isComposed && DEFAULT.isAuxiliaryComposedVerbInNegativeForm) ? DEFAULT.initComposedVerbInNegativeForm : (DEFAULT.isAuxiliaryComposedVerbInNegativeForm) ? DEFAULT.initComposedVerbInNegativeForm : (DEFAULT.isComposed) ? DEFAULT.initPart : '';
	// and change the default for getting the properties of the real verb, so the last part that is usually "etmek"
	DEFAULT = (DEFAULT.isAuxiliaryComposedVerb) ? getProperties(DEFAULT.auxiliaryVerb) : (DEFAULT.isComposed && DEFAULT.isAuxiliaryComposedVerbInNegativeForm) ? getProperties(DEFAULT.auxiliaryVerbInNegativeForm) : (DEFAULT.isAuxiliaryComposedVerbInNegativeForm) ? getProperties(DEFAULT.auxiliaryVerbInNegativeForm) : (DEFAULT.isComposed) ? getProperties(DEFAULT.lastPart) : DEFAULT;


	let root = (isLastLetterOfRootAVowel(verb)) ? strInit(DEFAULT.root) + DEFAULT.harmony4way : DEFAULT.root;


	let gerundSuffix = (isLastLetterOfRootAVowel(verb)) ? 'yor' : `${get4WayHarmonyByRootOf(root)}yor`;
		
	// The suffix (-lardu, (du is from Past Suffix, but it's always 'dı' because of vowel harmony)) is  
	// an special case in the Past Continuous 

	let larOrLer = `lardı`;

	let personalSuffixes = push(arrayOfPersonalSuffixes.II('du', 'u'), larOrLer);

	return generateResult(personalSuffixes, firstPart, root, gerundSuffix);

}

module.exports = PastContinuous;