const {
	push
} = require('./../methods/basics');

const {

	arrayOfPersonalSuffixes,
	generateResult,
	getProperties

} = require('./../methods/turkish');

const MisPast = (verb, DEFAULT = getProperties(verb)) => {
	// root + miş + Personal Suffix I

	let misSuffix = (DEFAULT.isNegative) ? `zm${DEFAULT.harmony4way}ş` : `m${DEFAULT.harmony4way}ş`;

	let larOrLer = `l${DEFAULT.harmony2way}r`;

	let personalSuffixes = push(arrayOfPersonalSuffixes.I(DEFAULT.harmony4way), larOrLer);

	return generateResult(personalSuffixes, DEFAULT.originalRoot, misSuffix);

} 

module.exports = MisPast;