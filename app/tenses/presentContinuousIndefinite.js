const {
	push,
	strInit,
	getFirstPart,
	getLastPart
} = require('./../methods/basics');

const {

	isLastLetterOfRootAVowel,
	arrayOfPersonalSuffixes,
	get4WayHarmonyByRootOf,
	generateResult,
	getProperties

} = require('./../methods/turkish');


const PresentContinuousIndefinite = (verb, DEFAULT = getProperties(verb)) => {

	// if it's two words verb then we get the first part
	let firstPart = (DEFAULT.isTwoWordsVerb) ? `${getFirstPart(DEFAULT.verb)[0]} ` : '';
	// and change the default for getting the properties of the real verb, so the last part that is usually "etmek"
	DEFAULT = (DEFAULT.isTwoWordsVerb) ? getProperties(getLastPart(DEFAULT.verb)[0]) : DEFAULT;

	// this use the root + gerund suffix +  -muş- + Personal Suffix I
	// for 3th person plural we use the suffix (-larmış)
	let root = (isLastLetterOfRootAVowel(verb)) ? strInit(DEFAULT.root) + DEFAULT.harmony4way : DEFAULT.root;

	let gerundSuffix = (isLastLetterOfRootAVowel(verb)) ? 'yor' : `${get4WayHarmonyByRootOf(root)}yor`;

	let larOrLer = 'larmış';

	let personalSuffixes = arrayOfPersonalSuffixes.I('u').map((item) => `muş${item}`);

	return generateResult(push(personalSuffixes, larOrLer), firstPart, root, gerundSuffix);

}


module.exports = PresentContinuousIndefinite;