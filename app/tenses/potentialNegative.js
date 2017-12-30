const {
	push,
	getFirstPart,
	getLastPart
} = require('./../methods/basics');
const {
	strInit
} = require('./../methods/basics');

const {
	arrayOfPersonalSuffixes,
	generateResult,
	getProperties,
	isLastLetterOfRootAVowel

} = require('./../methods/turkish');

// CANNOT, CAN'T
const PotentialNegative = (verb, DEFAULT = getProperties(verb)) => {

	// if it's two words verb then we get the first part
	let firstPart = (DEFAULT.isTwoWordsVerb) ? `${getFirstPart(DEFAULT.verb)[0]} ` : '';
	// and change the default for getting the properties of the real verb, so the last part that is usually "etmek"
	DEFAULT = (DEFAULT.isTwoWordsVerb) ? getProperties(getLastPart(DEFAULT.verb)[0]) : DEFAULT;


	// unlike others tenses, here we first mutate and later use this mutation
	let root = (DEFAULT.isAuxiliaryComposedVerb) ? strInit(DEFAULT.root) + 'd' : DEFAULT.root;

	//SUFFIX (y)a (y)e
	// bak + (y)a + ma + m Personal Suffix IN
	/*
	Just add -ma or -me to the verb's root 

	Gitmemek - no ir, to not go
	Gelmemek - 

	When we conjugate we need to use mez/maz (the z drops in the first singular and first plural person) 
	and use the first type of to be suffixes: 
	tipo I: (i)m, s(i)n, (-dir), (y)iz, s(i)n(i)z, (-dir)ler/lar
	*/


	root = root + (isLastLetterOfRootAVowel(verb) ? `y${DEFAULT.harmony2way}` : DEFAULT.harmony2way)  + DEFAULT.negativeSuffix;
	//if it's auxiliary composed (so if it uses etmek) then we need to mutate the final t to d 

	let personalSuffixes = arrayOfPersonalSuffixes.IN(DEFAULT.harmony4way);

	let larOrLer = `zl${DEFAULT.harmony2way}r`;

	return generateResult(push(personalSuffixes, larOrLer), firstPart, root);

}

module.exports = PotentialNegative;

//halledemem