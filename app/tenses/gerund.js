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
	getProperties,
	getFirstVowel,
	lookIn4Ways

} = require('./../methods/turkish');


const Gerund = (verb, DEFAULT = getProperties(verb)) => {

	// if it's two words verb then we get the first part
	let firstPart = (DEFAULT.isTwoWordsVerb) ? `${getFirstPart(DEFAULT.verb)[0]} ` : '';
	// and change the default for getting the properties of the real verb, so the last part that is usually "etmek"
	DEFAULT = (DEFAULT.isTwoWordsVerb) ? getProperties(getLastPart(DEFAULT.verb)[0]) : DEFAULT;

	let root = (isLastLetterOfRootAVowel(DEFAULT.verb) && DEFAULT.vowelsLength == 1) ? strInit(DEFAULT.root) + DEFAULT.harmony4way : (!isLastLetterOfRootAVowel(DEFAULT.verb) && DEFAULT.vowelsLength >= 1) ? DEFAULT.root : strInit(DEFAULT.root) + lookIn4Ways(getFirstVowel(DEFAULT.verb));

	//if it's auxiliary composed (so if it uses etmek) then we need to mutate the final t to d 
	root = (DEFAULT.isAuxiliaryComposedVerb) ? strInit(root) + 'd' : root;

	// we have a "bug" (nothing really big) with auxiliary composed verbs in negative form that begins with:
	// an "a". They are just 10 and I don't know why I should make more complex the algorithm so i make this dumb but enough thing:
	// the error is that it's giving an "ı" (in the final) as harmony for "etmek" instead of "i". Then:
	// hAlletmet -> halletmıyorum instead of  halletmiyorum
	root = (DEFAULT.isAuxiliaryComposedVerbInNegativeForm) ? strInit(root) + 'i' : root;


	let gerundSuffix = (isLastLetterOfRootAVowel(DEFAULT.verb)) ? 'yor' : `${get4WayHarmonyByRootOf(root)}yor`;


	let larOrLer = 'lar';

	let personalSuffixes = push(arrayOfPersonalSuffixes.I('u'), larOrLer);

	return generateResult(personalSuffixes, firstPart, root, gerundSuffix); 

}

module.exports = Gerund;