const {
	push,
	strInit
} = require('./../methods/basics');

const {
	isLastLetterOfRootAVowel,
	arrayOfPersonalSuffixes,
	get4WayHarmonyByRootOf,
	generateResult,
	getProperties,
	getFirstVowel,
	lookIn4Ways

} = require('./../methods/turkish');


const Gerund = (verb, DEFAULT = getProperties(verb)) => {

	let root = (isLastLetterOfRootAVowel(DEFAULT.verb) && DEFAULT.vowelsLength == 1) ? strInit(DEFAULT.root) + DEFAULT.harmony4way : (!isLastLetterOfRootAVowel(DEFAULT.verb) && DEFAULT.vowelsLength >= 1) ? DEFAULT.root : strInit(DEFAULT.root) + lookIn4Ways(getFirstVowel(DEFAULT.verb));

	let gerundSuffix = (isLastLetterOfRootAVowel(DEFAULT.verb)) ? 'yor' : `${get4WayHarmonyByRootOf(root)}yor`;

	let larOrLer = 'lar';

	let personalSuffixes = push(arrayOfPersonalSuffixes.I('u'), larOrLer);

	return generateResult(personalSuffixes, root, gerundSuffix); 

}

module.exports = Gerund;