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


const SimplePast = (verb, DEFAULT = getProperties(verb)) => {

	// if it's two words verb then we get the first part
	let firstPart = (DEFAULT.isTwoWordsVerb) ? `${getFirstPart(DEFAULT.verb)[0]} ` : '';
	// and change the default for getting the properties of the real verb, so the last part that is usually "etmek"
	DEFAULT = (DEFAULT.isTwoWordsVerb) ? getProperties(getLastPart(DEFAULT.verb)[0]) : DEFAULT;

	// We need to mutate the pastRoot from 'p', 't', 'k', 'ç', 's', 'ş', 'h' to 't'

	let root = (doWeNeedToMutate(mutation[1].from)(verb) >= 0) ? DEFAULT.originalRoot + 't' : DEFAULT.root + 'd';

	let larOrLer = `${DEFAULT.harmony4way}l${DEFAULT.harmony2way}r`;

	let personalSuffixes = push(arrayOfPersonalSuffixes.II(DEFAULT.harmony4way), larOrLer);

	return generateResult(personalSuffixes, firstPart, root);
}

module.exports = SimplePast;