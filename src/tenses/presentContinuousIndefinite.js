const {
	push,
	strInit,
	isVowel,
	lastLetter,
	getLastVowel,
	length
} = require('./../methods/basics');

const {

	arrayOfPersonalSuffixes,
	generateResult,
	getProperties,
	lookIn4Ways

} = require('./../methods/turkish');

// LAST CHECK 24 5 2018
const PresentContinuousIndefinite = (verb, DEFAULT = getProperties(verb)) => {

	// if the verb is composed in any way, we'll get its firstPart by removing that verb that compose it. Example: Affetmek -> Aff || Yardım etmek -> Yardım
	let firstPart = DEFAULT.isAuxiliaryComposedVerb ? DEFAULT.initComposedVerb : DEFAULT.isAuxiliaryComposedVerbInNegativeForm ? DEFAULT.initComposedVerbInNegativeForm : DEFAULT.isComposed ? DEFAULT.initPart : '';

	DEFAULT = DEFAULT.isAuxiliaryComposedVerb ? getProperties(DEFAULT.auxiliaryVerb) : DEFAULT.isAuxiliaryComposedVerbInNegativeForm ? getProperties(DEFAULT.auxiliaryVerbInNegativeForm) : DEFAULT.isComposed ? getProperties(DEFAULT.lastPart) : DEFAULT;

	// this use the root + gerund suffix +  -muş- + Personal Suffix I
	// for 3th person plural we use the suffix (-larmış)

	let root = DEFAULT.isNegative || isVowel(lastLetter(DEFAULT.root)) ? strInit(DEFAULT.root) : DEFAULT.root;

	// gerundSuffix could be iyor, ıyor, üyor, uyor
	// because of ROOT being just a letter sometimes, like when the verb is 'yemek'
	// it's just 'y', so we check if the root length is === 1, it means we need
	// to use the DEFAULT.root that will have the necessary vowel for
	// lookIn4Ways
	let gerundSuffix = lookIn4Ways(getLastVowel( length(root) === 1 ? DEFAULT.root : root )) + 'yor';


	let larOrLer = 'muşlar';

	// We create the array of personal suffix and after we add the Indefinite Suffix "muş"
	let personalSuffixes = arrayOfPersonalSuffixes.I('u').map((item) => `muş${item}`);

	// We push here the new Array of personal suffix and the larOrLer
	return generateResult({
		personalSuffixes: push(personalSuffixes, larOrLer),
		firstPart,
		verbRoot: root,
		tenseSuffix: gerundSuffix
	});
}

module.exports = PresentContinuousIndefinite;