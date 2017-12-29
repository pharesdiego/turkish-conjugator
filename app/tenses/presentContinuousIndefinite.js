const {
	push,
	strInit
} = require('./../methods/basics');

const {

	isLastLetterOfRootAVowel,
	arrayOfPersonalSuffixes,
	get4WayHarmonyByRootOf,
	generateResult,
	getProperties

} = require('./../methods/turkish');


const PresentContinuousIndefinite = (verb, DEFAULT = getProperties(verb)) => {

	// this use the root + gerund suffix +  -muş- + Personal Suffix I
	// for 3th person plural we use the suffix (-larmış)
	let root = (isLastLetterOfRootAVowel(verb)) ? strInit(DEFAULT.root) + DEFAULT.harmony4way : DEFAULT.root;

	let gerundSuffix = (isLastLetterOfRootAVowel(verb)) ? 'yor' : `${get4WayHarmonyByRootOf(root)}yor`;

	let larOrLer = 'larmış';

	let personalSuffixes = arrayOfPersonalSuffixes.I('u').map((item) => `muş${item}`);

	return generateResult(push(personalSuffixes, larOrLer), root, gerundSuffix);

}


module.exports = PresentContinuousIndefinite;