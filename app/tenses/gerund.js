const {
	push,
	strInit,
	firstLetter,
	lastLetter,
	isVowel,
	isConsonant,
	getLastVowel,
	length
} = require('./../methods/basics');

const {
	arrayOfPersonalSuffixes,
	generateResult,
	getProperties,
	getFirstVowel,
	lookIn4Ways

} = require('./../methods/turkish');


// lAST CHECK 4 1 2018
const Gerund = (verb, DEFAULT = getProperties(verb)) => {

	// if the verb is composed in any way, we'll get its firstPart by removing that verb that compose it. Example: Affetmek -> Aff || Yardım etmek -> Yardım
	let firstPart = DEFAULT.isAuxiliaryComposedVerb ? DEFAULT.initComposedVerb : DEFAULT.isAuxiliaryComposedVerbInNegativeForm ? DEFAULT.initComposedVerbInNegativeForm : DEFAULT.isComposed ? DEFAULT.initPart : '';
	
	DEFAULT = DEFAULT.isAuxiliaryComposedVerb ? getProperties(DEFAULT.auxiliaryVerb) : DEFAULT.isAuxiliaryComposedVerbInNegativeForm ? getProperties(DEFAULT.auxiliaryVerbInNegativeForm) : DEFAULT.isComposed ? getProperties(DEFAULT.lastPart) : DEFAULT;

	let root = DEFAULT.isNegative || isVowel(lastLetter(DEFAULT.root)) ? strInit(DEFAULT.root) : DEFAULT.root;

	//	gerundSuffix can be iyor, ıyor, üyor, uyor
	let gerundSuffix = length(root) > 1 ? lookIn4Ways(getLastVowel(root)) + 'yor' : lookIn4Ways(getLastVowel(DEFAULT.root)) + 'yor';

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