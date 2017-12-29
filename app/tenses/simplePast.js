const {
	push
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


const SimplePast = (verb, DEFAULT = getProperties(verb)) => {
	// We need to mutate the pastRoot from 'p', 't', 'k', 'ç', 's', 'ş', 'h' to 't'

	let root = (doWeNeedToMutate(mutation[1].from)(verb) >= 0) ? DEFAULT.originalRoot + 't' : DEFAULT.root + 'd';

	let larOrLer = `${DEFAULT.harmony4way}l${DEFAULT.harmony2way}r`;

	let personalSuffixes = push(arrayOfPersonalSuffixes.II(DEFAULT.harmony4way), larOrLer);

	return generateResult(personalSuffixes, root);
}

module.exports = SimplePast;