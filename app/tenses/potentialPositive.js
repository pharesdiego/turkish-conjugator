const {
	push,
	getFirstPart,
	getLastPart
} = require('./../methods/basics');

const {
	isLastLetterOfRootAVowel,
	arrayOfPersonalSuffixes,
	generateResult,
	getProperties

} = require('./../methods/turkish');


// CAN 
const PotentialPositive = (verb, DEFAULT = getProperties(verb)) => {

	// if it's two words verb then we get the first part
	let firstPart = (DEFAULT.isTwoWordsVerb) ? `${getFirstPart(DEFAULT.verb)[0]} ` : '';
	// and change the default for getting the properties of the real verb, so the last part that is usually "etmek"
	DEFAULT = (DEFAULT.isTwoWordsVerb) ? getProperties(getLastPart(DEFAULT.verb)[0]) : DEFAULT;

	//gel + (y)ebil + ir + im
	// root + (ebil|abil) + aorist + Personal Suffixes I
	// yapabilirim, olabilirim, söyleyebilirim (!!söyle yebil er im)

	let abilitySuffix = (isLastLetterOfRootAVowel(verb)) ? `y${DEFAULT.harmony2way}bil` : `${DEFAULT.harmony2way}bil`;

	let aoristSuffix = 'ir';

	let larOrLer = 'ler';

	let personalSuffixes = arrayOfPersonalSuffixes.I('i');

	return generateResult(push(personalSuffixes, larOrLer), firstPart, DEFAULT.root + abilitySuffix, aoristSuffix);
	

}

module.exports = PotentialPositive;