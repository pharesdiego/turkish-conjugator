const {
	push
} = require('./../methods/basics');

const {
	arrayOfPersonalSuffixes,
	generateResult,
	getProperties

} = require('./../methods/turkish');


// CANNOT, CAN'T
const PotentialNegative = (verb, DEFAULT = getProperties(verb)) => {
	// bak + a + ma + m Personal Suffix IN
	/*
	Just add -ma or -me to the verb's root 

	Gitmemek - no ir, to not go
	Gelmemek - 

	When we conjugate we need to use mez/maz (the z drops in the first singular and first plural person) 
	and use the first type of to be suffixes: 
	tipo I: (i)m, s(i)n, (-dir), (y)iz, s(i)n(i)z, (-dir)ler/lar
	*/

	let root = DEFAULT.root + DEFAULT.harmony2way + DEFAULT.negativeSuffix;

	let personalSuffixes = arrayOfPersonalSuffixes.IN(DEFAULT.harmony4way);

	let larOrLer = `zl${DEFAULT.harmony2way}r`;

	return generateResult(push(personalSuffixes, larOrLer), root);


}

module.exports = PotentialNegative;

