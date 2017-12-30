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


const PastContinuous = (verb, DEFAULT = getProperties(verb)) => {

	// if it's two words verb then we get the first part
	let firstPart = (DEFAULT.isTwoWordsVerb) ? `${getFirstPart(DEFAULT.verb)[0]} ` : '';
	// and change the default for getting the properties of the real verb, so the last part that is usually "etmek"
	DEFAULT = (DEFAULT.isTwoWordsVerb) ? getProperties(getLastPart(DEFAULT.verb)[0]) : DEFAULT;

	let root = (isLastLetterOfRootAVowel(verb)) ? strInit(DEFAULT.root) + DEFAULT.harmony4way : DEFAULT.root;

	//if it's auxiliary composed (so if it uses etmek) then we need to mutate the final t to d 
	root = (DEFAULT.isAuxiliaryComposedVerb) ? strInit(root) + 'd' : root;

	let gerundSuffix = (isLastLetterOfRootAVowel(verb)) ? 'yor' : `${get4WayHarmonyByRootOf(root)}yor`;
		
	// The suffix (-lardu, (du is from Past Suffix, but it's always 'dı' because of vowel harmony)) is  
	// an special case in the Past Continuous 

	let larOrLer = `lardı`;

	let personalSuffixes = push(arrayOfPersonalSuffixes.II('du', 'u'), larOrLer);

	return generateResult(personalSuffixes, firstPart, root, gerundSuffix);

}

module.exports = PastContinuous;