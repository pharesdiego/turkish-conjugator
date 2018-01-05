const {
	push,
	strInit,
	isVowel,
	lastLetter,
	getLastVowel
} = require('./../methods/basics');

const {

	arrayOfPersonalSuffixes,
	generateResult,
	getProperties,
	lookIn4Ways

} = require('./../methods/turkish');

// LAST CHECK 4 1 2018
const PresentContinuousIndefinite = (verb, DEFAULT = getProperties(verb)) => {

	// if it's two or MORE Words verb then we get the first part (like haskell: init part)
	// this has an space but it's not longer necessary
	let firstPart = (DEFAULT.isAuxiliaryComposedVerb) ? DEFAULT.initComposedVerb : (DEFAULT.isComposed && DEFAULT.isAuxiliaryComposedVerbInNegativeForm) ? DEFAULT.initComposedVerbInNegativeForm : (DEFAULT.isAuxiliaryComposedVerbInNegativeForm) ? DEFAULT.initComposedVerbInNegativeForm : (DEFAULT.isComposed) ? DEFAULT.initPart : '';
	// and change the default for getting the properties of the real verb, so the last part that is usually "etmek"
	DEFAULT = (DEFAULT.isAuxiliaryComposedVerb) ? getProperties(DEFAULT.auxiliaryVerb) : (DEFAULT.isComposed && DEFAULT.isAuxiliaryComposedVerbInNegativeForm) ? getProperties(DEFAULT.auxiliaryVerbInNegativeForm) : (DEFAULT.isAuxiliaryComposedVerbInNegativeForm) ? getProperties(DEFAULT.auxiliaryVerbInNegativeForm) : (DEFAULT.isComposed) ? getProperties(DEFAULT.lastPart) : DEFAULT;

	// this use the root + gerund suffix +  -muş- + Personal Suffix I
	// for 3th person plural we use the suffix (-larmış)

	let root = (DEFAULT.isNegative || isVowel(lastLetter(DEFAULT.root))) ? strInit(DEFAULT.root) : DEFAULT.root;

	//	gerundSuffix can be iyor,ıyor, üyor, uyor
	let gerundSuffix = lookIn4Ways(getLastVowel(root)) + 'yor';


	let larOrLer = 'larmış';

	// We create the array of personal suffix and after we add the Indefinite Suffix "muş"
	let personalSuffixes = arrayOfPersonalSuffixes.I('u').map((item) => `muş${item}`);

	// We push here the new Array of personal suffix and the larOrLer
	return generateResult(push(personalSuffixes, larOrLer), firstPart, root, gerundSuffix);

}

module.exports = PresentContinuousIndefinite;