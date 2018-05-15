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

	//	gerundSuffix could be iyor, ıyor, üyor, uyor
	// length(root) > 1 because if ROOT uses the function strInit in its definition with a verb like demek or yemek, the root will be only 'y' in yemek and 'd' in demek
	let gerundSuffix = lookIn4Ways(getLastVowel( length(root) > 1 ? root : DEFAULT.root )) + 'yor';

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