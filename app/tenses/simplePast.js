const {
	push,
	getLastPart,
	getFirstPart
} = require('./../methods/basics');

const {

	arrayOfPersonalSuffixes,
	generateResult,
	getProperties,
	doWeNeedToMutate

} = require('./../methods/turkish');

const {
	mutation
} = require('./../obj');

// LAST CHECK 1 1 2018
const SimplePast = (verb, DEFAULT = getProperties(verb)) => {

	// if it's two or MORE Words verb then we get the first part (like haskell: init part)
	// this has an space but it's not longer necessary
	let firstPart = (DEFAULT.isAuxiliaryComposedVerb) ? DEFAULT.initComposedVerb : (DEFAULT.isComposed && DEFAULT.isAuxiliaryComposedVerbInNegativeForm) ? DEFAULT.initComposedVerbInNegativeForm : (DEFAULT.isAuxiliaryComposedVerbInNegativeForm) ? DEFAULT.initComposedVerbInNegativeForm : '';
	// and change the default for getting the properties of the real verb, so the last part that is usually "etmek"
	DEFAULT = (DEFAULT.isAuxiliaryComposedVerb) ? getProperties(DEFAULT.auxiliaryVerb) : (DEFAULT.isComposed && DEFAULT.isAuxiliaryComposedVerbInNegativeForm) ? getProperties(DEFAULT.auxiliaryVerbInNegativeForm) : (DEFAULT.isAuxiliaryComposedVerbInNegativeForm) ? getProperties(DEFAULT.auxiliaryVerbInNegativeForm) : DEFAULT;

	// We need to mutate the pastRoot from 'p', 't', 'k', 'ç', 's', 'ş', 'h' to 't'

	let root = (doWeNeedToMutate(mutation[1].from)(verb) >= 0) ? DEFAULT.originalRoot + 't' : DEFAULT.root + 'd';

	let larOrLer = `${DEFAULT.harmony4way}l${DEFAULT.harmony2way}r`;

	let personalSuffixes = push(arrayOfPersonalSuffixes.II(DEFAULT.harmony4way), larOrLer);

	return generateResult(personalSuffixes, firstPart, root);
}


module.exports = SimplePast;