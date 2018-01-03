const {
	push,
	strInit
} = require('./../methods/basics');

const {
	isLastLetterOfRootAVowel,
	arrayOfPersonalSuffixes,
	get4WayHarmonyByRootOf,
	generateResult,
	getProperties,
	getFirstVowel,
	lookIn4Ways

} = require('./../methods/turkish');


// lAST CHECK 3 1 2018
const Gerund = (verb, DEFAULT = getProperties(verb)) => {

	// if it's two or MORE Words verb then we get the first part (like haskell: init part)
	// this has an space but it's not longer necessary
	let firstPart = (DEFAULT.isAuxiliaryComposedVerb) ? DEFAULT.initComposedVerb : (DEFAULT.isComposed && DEFAULT.isAuxiliaryComposedVerbInNegativeForm) ? DEFAULT.initComposedVerbInNegativeForm : (DEFAULT.isAuxiliaryComposedVerbInNegativeForm) ? DEFAULT.initComposedVerbInNegativeForm : (DEFAULT.isComposed) ? DEFAULT.initPart : '';
	// and change the default for getting the properties of the real verb, so the last part that is usually "etmek"
	DEFAULT = (DEFAULT.isAuxiliaryComposedVerb) ? getProperties(DEFAULT.auxiliaryVerb) : (DEFAULT.isComposed && DEFAULT.isAuxiliaryComposedVerbInNegativeForm) ? getProperties(DEFAULT.auxiliaryVerbInNegativeForm) : (DEFAULT.isAuxiliaryComposedVerbInNegativeForm) ? getProperties(DEFAULT.auxiliaryVerbInNegativeForm) : (DEFAULT.isComposed) ? getProperties(DEFAULT.lastPart) : DEFAULT;


	let root = (isLastLetterOfRootAVowel(DEFAULT.verb) && DEFAULT.vowelsLength == 1) ? strInit(DEFAULT.root) + DEFAULT.harmony4way : (!isLastLetterOfRootAVowel(DEFAULT.verb) && DEFAULT.vowelsLength >= 1) ? DEFAULT.root : strInit(DEFAULT.root) + lookIn4Ways(getFirstVowel(DEFAULT.verb));


	let gerundSuffix = (isLastLetterOfRootAVowel(DEFAULT.verb)) ? 'yor' : `${get4WayHarmonyByRootOf(root)}yor`;


	let larOrLer = 'lar';

	let personalSuffixes = push(arrayOfPersonalSuffixes.I('u'), larOrLer);

	return generateResult(personalSuffixes, firstPart, root, gerundSuffix); 

}


module.exports = Gerund;