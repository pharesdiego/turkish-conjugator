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


const PastContinuous = (verb, DEFAULT = getProperties(verb)) => {

	let root = (isLastLetterOfRootAVowel(verb)) ? strInit(DEFAULT.root) + DEFAULT.harmony4way : DEFAULT.root;

	let gerundSuffix = (isLastLetterOfRootAVowel(verb)) ? 'yor' : `${get4WayHarmonyByRootOf(root)}yor`;
		
	// The suffix (-lardu, (du is from Past Suffix, but it's always 'dı' because of vowel harmony)) is  
	// an special case in the Past Continuous 

	let larOrLer = `lardı`;

	let personalSuffixes = push(arrayOfPersonalSuffixes.II('du', 'u'), larOrLer);

	return generateResult(personalSuffixes, root, gerundSuffix);

}

module.exports = PastContinuous;