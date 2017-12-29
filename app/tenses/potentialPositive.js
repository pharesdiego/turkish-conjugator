const {
	push
} = require('./../methods/basics');

const {
	isLastLetterOfRootAVowel,
	arrayOfPersonalSuffixes,
	generateResult,
	getProperties

} = require('./../methods/turkish');


// CAN 
const PotentialPositive = (verb, DEFAULT = getProperties(verb)) => {

	//gel + (y)ebil + ir + im
	// root + (ebil|abil) + aorist + Personal Suffixes I
	// yapabilirim, olabilirim, söyleyebilirim (!!söyle yebil er im)

	let abilitySuffix = (isLastLetterOfRootAVowel(verb)) ? `y${DEFAULT.harmony2way}bil` : `${DEFAULT.harmony2way}bil`;

	let aoristSuffix = 'ir';

	let larOrLer = 'ler';

	let personalSuffixes = arrayOfPersonalSuffixes.I('i');

	return generateResult(push(personalSuffixes, larOrLer), DEFAULT.root + abilitySuffix, aoristSuffix);
	

}

module.exports = PotentialPositive;