const {
	push,
	strInit,
	isVowel,
	lastLetter
} = require('./../methods/basics');

const {
	arrayOfPersonalSuffixes,
	generateResult,
	getProperties

} = require('./../methods/turkish');

// LAST CHECK 3 1 2018
// CAN 
const PotentialPositive = (verb, DEFAULT = getProperties(verb)) => {

	// if it's two or MORE Words verb then we get the first part (like haskell: init part)
	// this has an space but it's not longer necessary
	let firstPart = (DEFAULT.isAuxiliaryComposedVerb) ? DEFAULT.initComposedVerb : (DEFAULT.isComposed && DEFAULT.isAuxiliaryComposedVerbInNegativeForm) ? DEFAULT.initComposedVerbInNegativeForm : (DEFAULT.isAuxiliaryComposedVerbInNegativeForm) ? DEFAULT.initComposedVerbInNegativeForm : (DEFAULT.isComposed) ? DEFAULT.initPart : '';
	// and change the default for getting the properties of the real verb, so the last part that is usually "etmek"
	DEFAULT = (DEFAULT.isAuxiliaryComposedVerb) ? getProperties(DEFAULT.auxiliaryVerb) : (DEFAULT.isComposed && DEFAULT.isAuxiliaryComposedVerbInNegativeForm) ? getProperties(DEFAULT.auxiliaryVerbInNegativeForm) : (DEFAULT.isAuxiliaryComposedVerbInNegativeForm) ? getProperties(DEFAULT.auxiliaryVerbInNegativeForm) : (DEFAULT.isComposed) ? getProperties(DEFAULT.lastPart) : DEFAULT;

	//gel + (y)ebil + ir + im
	// root + (ebil|abil) + aorist + Personal Suffixes I
	// yapabilirim, olabilirim, söyleyebilirim (!!söyle yebil er im)

	let abilitySuffix = isVowel(lastLetter(DEFAULT.root)) ? `y${DEFAULT.harmony2way}bil` : `${DEFAULT.harmony2way}bil`;

	let aoristSuffix = 'ir';

	let larOrLer = 'ler';

	let personalSuffixes = arrayOfPersonalSuffixes.I('i');

	return generateResult(push(personalSuffixes, larOrLer), firstPart, DEFAULT.root + abilitySuffix, aoristSuffix);

}

module.exports = PotentialPositive;