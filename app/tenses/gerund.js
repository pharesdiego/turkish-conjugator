const {
	push,
	strInit,
	firstLetter,
	lastLetter,
	isVowel,
	isConsonant,
	getLastVowel
} = require('./../methods/basics');

const {
	arrayOfPersonalSuffixes,
	generateResult,
	getProperties,
	getFirstVowel,
	lookIn4Ways

} = require('./../methods/turkish');


// lAST CHECK 4 1 2018
const Gerund = (verb, DEFAULT = getProperties(verb)) => {

	// if it's two or MORE Words verb then we get the first part (like haskell: init part)
	// this has an space but it's not longer necessary
	let firstPart = (DEFAULT.isAuxiliaryComposedVerb) ? DEFAULT.initComposedVerb : (DEFAULT.isComposed && DEFAULT.isAuxiliaryComposedVerbInNegativeForm) ? DEFAULT.initComposedVerbInNegativeForm : (DEFAULT.isAuxiliaryComposedVerbInNegativeForm) ? DEFAULT.initComposedVerbInNegativeForm : (DEFAULT.isComposed) ? DEFAULT.initPart : '';
	// and change the default for getting the properties of the real verb, so the last part that is usually "etmek"
	DEFAULT = (DEFAULT.isAuxiliaryComposedVerb) ? getProperties(DEFAULT.auxiliaryVerb) : (DEFAULT.isComposed && DEFAULT.isAuxiliaryComposedVerbInNegativeForm) ? getProperties(DEFAULT.auxiliaryVerbInNegativeForm) : (DEFAULT.isAuxiliaryComposedVerbInNegativeForm) ? getProperties(DEFAULT.auxiliaryVerbInNegativeForm) : (DEFAULT.isComposed) ? getProperties(DEFAULT.lastPart) : DEFAULT;


	let root = (DEFAULT.isNegative || isVowel(lastLetter(DEFAULT.root))) ? strInit(DEFAULT.root) : DEFAULT.root;

	//	gerundSuffix can be iyor, ıyor, üyor, uyor
	let gerundSuffix = lookIn4Ways(getLastVowel(root)) + 'yor';


	let larOrLer = 'lar';

	let personalSuffixes = push(arrayOfPersonalSuffixes.I('u'), larOrLer);

	return generateResult(personalSuffixes, firstPart, root, gerundSuffix); 

}

module.exports = Gerund;