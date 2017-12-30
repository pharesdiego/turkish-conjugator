const {
	push,
	getFirstPart,
	getLastPart
} = require('./../methods/basics');

const {

	arrayOfPersonalSuffixes,
	generateResult,
	getProperties

} = require('./../methods/turkish');

const MisPast = (verb, DEFAULT = getProperties(verb)) => {

	// if it's two words verb then we get the first part
	let firstPart = (DEFAULT.isTwoWordsVerb) ? `${getFirstPart(DEFAULT.verb)[0]} ` : '';
	// and change the default for getting the properties of the real verb, so the last part that is usually "etmek"
	DEFAULT = (DEFAULT.isTwoWordsVerb) ? getProperties(getLastPart(DEFAULT.verb)[0]) : DEFAULT;

	// root + miş + Personal Suffix I

	let misSuffix = (DEFAULT.isNegative) ? `zm${DEFAULT.harmony4way}ş` : `m${DEFAULT.harmony4way}ş`;

	let larOrLer = `l${DEFAULT.harmony2way}r`;

	let personalSuffixes = push(arrayOfPersonalSuffixes.I(DEFAULT.harmony4way), larOrLer);

	return generateResult(personalSuffixes, firstPart, DEFAULT.originalRoot, misSuffix);

} 

module.exports = MisPast;