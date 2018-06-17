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

// LAST CHECK 15 5 2018
const PotentialPositive = (verb, DEFAULT = getProperties(verb)) => {

	// if the verb is composed in any way, we'll get its firstPart by removing that verb that compose it. Example: Affetmek -> Aff || Yardım etmek -> Yardım
	let firstPart = DEFAULT.isAuxiliaryComposedVerb ? DEFAULT.initComposedVerb : DEFAULT.isAuxiliaryComposedVerbInNegativeForm ? DEFAULT.initComposedVerbInNegativeForm : DEFAULT.isComposed ? DEFAULT.initPart : '';

	DEFAULT = DEFAULT.isAuxiliaryComposedVerb ? getProperties(DEFAULT.auxiliaryVerb) : DEFAULT.isAuxiliaryComposedVerbInNegativeForm ? getProperties(DEFAULT.auxiliaryVerbInNegativeForm) : DEFAULT.isComposed ? getProperties(DEFAULT.lastPart) : DEFAULT;

	let root = lastLetter(DEFAULT.root) === 'e' && DEFAULT.vowelsLength === 1 ? strInit(DEFAULT.root) + 'i' : DEFAULT.root;

	// gel + (y)ebil + ir + im
	// root + (ebil|abil) + aorist + Personal Suffixes I
	// yapabilirim, olabilirim, söyleyebilirim (!!söyle yebil er im)

	let abilitySuffix = ( isVowel(lastLetter(root)) ? 'y' : '' ) + DEFAULT.harmony2way + 'bil';

	let aoristSuffix = 'ir';

	let larOrLer = 'ler';

	let personalSuffixes = arrayOfPersonalSuffixes.I('i');

	return generateResult({
		personalSuffixes: push(personalSuffixes, larOrLer),
		firstPart,
		verbRoot: root + abilitySuffix,
		tenseSuffix: aoristSuffix
	})
}

module.exports = PotentialPositive;