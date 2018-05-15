const {
	push,
	strInit,
	lastLetter,
	isVowel,
	getLastVowel,
	length
} = require('./../methods/basics');

const {
	arrayOfPersonalSuffixes,
	generateResult,
	getProperties,
	lookIn4Ways
} = require('./../methods/turkish');


// LAST CHECK 15 5 2018
const Gerund = (verb, DEFAULT = getProperties(verb)) => {

	// if the verb is composed in any way, we'll get its firstPart by removing that verb that compose it. Example: Affetmek -> Aff || Yardım etmek -> Yardım
	let firstPart = DEFAULT.isAuxiliaryComposedVerb ? DEFAULT.initComposedVerb : DEFAULT.isAuxiliaryComposedVerbInNegativeForm ? DEFAULT.initComposedVerbInNegativeForm : DEFAULT.isComposed ? DEFAULT.initPart : '';

	DEFAULT = DEFAULT.isAuxiliaryComposedVerb ? getProperties(DEFAULT.auxiliaryVerb) : DEFAULT.isAuxiliaryComposedVerbInNegativeForm ? getProperties(DEFAULT.auxiliaryVerbInNegativeForm) : DEFAULT.isComposed ? getProperties(DEFAULT.lastPart) : DEFAULT;

	let root = DEFAULT.isNegative || isVowel(lastLetter(DEFAULT.root)) ? strInit(DEFAULT.root) : DEFAULT.root;

	// gerundSuffix could be iyor, ıyor, üyor, uyor
	// because of ROOT being just a letter sometimes, like when the verb is 'yemek'
	// it's just 'y', so we check if the root length is === 1, it means we need
	// to use the DEFAULT.root that will have the necessary vowel for
	// lookIn4Ways
	let gerundSuffix = lookIn4Ways(getLastVowel( length(root) === 1 ? DEFAULT.root : root )) + 'yor';

	let larOrLer = 'lar';

	let personalSuffixes = push(arrayOfPersonalSuffixes.I('u'), larOrLer);

	return generateResult({
		personalSuffixes,
		firstPart,
		verbRoot: root,
		tenseSuffix: gerundSuffix
	});

}

module.exports = Gerund;