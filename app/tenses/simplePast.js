const {
	push,
	lastLetter
} = require('./../methods/basics');

const {

	arrayOfPersonalSuffixes,
	generateResult,
	getProperties,
	doWeNeedToMutate

} = require('./../methods/turkish');

const {
	mutation
} = require('./../rules');

// LAST CHECK 17 5 2018
const SimplePast = (verb, DEFAULT = getProperties(verb)) => {

	// if the verb is composed in any way, we'll get its firstPart by removing that verb that compose it. Example: Affetmek -> Aff || Yardım etmek -> Yardım
	let firstPart = DEFAULT.isAuxiliaryComposedVerb ? DEFAULT.initComposedVerb : DEFAULT.isAuxiliaryComposedVerbInNegativeForm ? DEFAULT.initComposedVerbInNegativeForm : DEFAULT.isComposed ? DEFAULT.initPart : '';

	DEFAULT = DEFAULT.isAuxiliaryComposedVerb ? getProperties(DEFAULT.auxiliaryVerb) : DEFAULT.isAuxiliaryComposedVerbInNegativeForm ? getProperties(DEFAULT.auxiliaryVerbInNegativeForm) : DEFAULT.isComposed ? getProperties(DEFAULT.lastPart) : DEFAULT;

	// We need to mutate the pastRoot from 'p', 't', 'k', 'ç', 's', 'ş', 'h' to 't'
	let root = mutation[0].from.includes(lastLetter(DEFAULT.originalRoot)) ? DEFAULT.originalRoot + 't' : DEFAULT.root + 'd';
	// this creates larOrLer like: iler, ular... for third person plural
	let larOrLer = DEFAULT.harmony4way + 'l' + DEFAULT.harmony2way + 'r';

	let personalSuffixes = push(arrayOfPersonalSuffixes.II(DEFAULT.harmony4way), larOrLer);

	return generateResult({
		personalSuffixes,
		firstPart,
		verbRoot: root
	})
}

module.exports = SimplePast;