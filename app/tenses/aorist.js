const {
	push,
	lastLetter,
	firstLetter,
	isVowel,
	strInit
} = require('./../methods/basics');

const {

	isLastLetterOfRootAVowel,
	arrayOfPersonalSuffixes,
	get4WayHarmonyOf,
	get2WayHarmonyByRootOf,
	generateResult,
	getProperties,
	getLastVowel,
	lookIn4Ways,
	lookIn2Ways

} = require('./../methods/turkish');

// lAST CHECK 3 1 2018
const Aorist = (verb, DEFAULT = getProperties(verb)) => {

	// AORIST IS THE HARDER CONJUGATION IN TURKISH

	// if it's two or MORE Words verb then we get the first part (like haskell: init part)
	// this has an space but it's not longer necessary
	let firstPart = (DEFAULT.isAuxiliaryComposedVerb) ? DEFAULT.initComposedVerb : (DEFAULT.isComposed && DEFAULT.isAuxiliaryComposedVerbInNegativeForm) ? DEFAULT.initComposedVerbInNegativeForm : (DEFAULT.isAuxiliaryComposedVerbInNegativeForm) ? DEFAULT.initComposedVerbInNegativeForm : (DEFAULT.isComposed) ? DEFAULT.initPart : '';
	// and change the default for getting the properties of the real verb, so the last part that is usually "etmek"
	DEFAULT = (DEFAULT.isAuxiliaryComposedVerb) ? getProperties(DEFAULT.auxiliaryVerb) : (DEFAULT.isComposed && DEFAULT.isAuxiliaryComposedVerbInNegativeForm) ? getProperties(DEFAULT.auxiliaryVerbInNegativeForm) : (DEFAULT.isAuxiliaryComposedVerbInNegativeForm) ? getProperties(DEFAULT.auxiliaryVerbInNegativeForm) : (DEFAULT.isComposed) ? getProperties(DEFAULT.lastPart) : DEFAULT;
	
	// harmonyRoot is like a default value if the conditions in aoristSuffix aren't enough
	let harmonyRoot = `${get4WayHarmonyOf(verb)}r`;

	// <>>>< N E E D  T O  E X P L A I N  A L L  T H E S E  C O N D I T I O N S>>><<<>>
	// Maybe this could be a function (in other module) with a lot of IF for easy reading 
	let aoristSuffix = isLastLetterOfRootAVowel(verb) ? 'r' : (DEFAULT.vowelsLength >= 2) ? harmonyRoot : (DEFAULT.vowelsLength == 1 && /[ae]/i.test(DEFAULT.verbVowels) && /[lnr]/i.test(lastLetter(DEFAULT.root))) ? harmonyRoot : (/[ie]/.test(DEFAULT.verbVowels) && lastLetter(DEFAULT.root) != 'l') ? 'er' : (DEFAULT.verbVowels == 'i') ? 'ir' : (DEFAULT.verbVowels == 'a') ? 'ar' : (DEFAULT.verbVowels == 'ü') ? 'er' : (DEFAULT.verbVowels == 'ı') ? 'ar' : (DEFAULT.verbVowels == 'o' && lastLetter(DEFAULT.root) != 'r') ? 'ur' : (DEFAULT.isSingleSyllableVerb && DEFAULT.verbSuffix == 'mek' && DEFAULT.verbVowels != 'ö') ? 'er' : (DEFAULT.isSingleSyllableVerb && DEFAULT.verbVowels == 'u' && lastLetter(DEFAULT.root) != 'y') ? 'ur' : (DEFAULT.isSingleSyllableVerb && DEFAULT.verbVowels == 'ö') ? 'ür' : (DEFAULT.isSingleSyllableVerb && DEFAULT.verbVowels == 'ü') ? 'ür' : 'ar';


	// RECHECKS. Aorist time is really complicated and we need to recheck the root harmony
	// We are recheking by the aorist suffix, so if it's "-er"
	// recheck4Harmony will be "i"
	// recheck2Harmony will be "e"
	// if aoristSuffix is "-r" then we use the default values because there aren't problems
	let recheck4Harmony = (aoristSuffix == 'r') ? DEFAULT.harmony4way : lookIn4Ways(getLastVowel(aoristSuffix));

	let recheck2Harmony = (aoristSuffix == 'r') ? DEFAULT.harmony2way : lookIn2Ways(getLastVowel(aoristSuffix));


	let larOrLer = `l${recheck2Harmony}r`;

	let personalSuffixes = push(arrayOfPersonalSuffixes.I(recheck4Harmony), larOrLer);

	// If it's negative... 
	let root = DEFAULT.positiveRoot + DEFAULT.negativeSuffix;

	let larOrLerN = `zl${DEFAULT.harmony2way}r`;

	let personalSuffixesN = push(arrayOfPersonalSuffixes.IN(DEFAULT.harmony4way), larOrLerN);

	return (DEFAULT.isNegative) ? generateResult(personalSuffixesN, firstPart, root) : generateResult(personalSuffixes, firstPart, DEFAULT.root, aoristSuffix);
}
 
// TEST VERBS
// console.log(Aorist('ölmek'))
// console.log(Aorist('yapmak'))
// console.log(Aorist('olmak'))
// console.log(Aorist('gitmek'))
// console.log(Aorist('gelmek'))
// console.log(Aorist('istemek'))
// console.log(Aorist('affetmek'))
// console.log(Aorist('bulmak'))
// console.log(Aorist('görmek'))
// console.log(Aorist('düşünmek'))
// console.log(Aorist('öğrenmek'))
// console.log(Aorist('aramak'))
// console.log(Aorist('sormak'))

// console.log(Aorist('yürümek'))
// console.log(Aorist('çalışmak'))
// console.log(Aorist('dışlamak'))
// console.log(Aorist('sanmak'))
// console.log(Aorist('giymek'))
// console.log(Aorist('yapılmak'))
// console.log(Aorist('duymak'))

// console.log(Aorist('tanımak'))
// console.log(Aorist('yemek'))
// console.log(Aorist('içmek'))
// console.log(Aorist('paylaşmak'))
// console.log(Aorist('konuşmak'))
// console.log(Aorist('yazmak'))
// console.log(Aorist('sıkılmak'))
// console.log(Aorist('anlamak'))
// console.log(Aorist('özlemek'))
// console.log(Aorist('sevmek'))
// console.log(Aorist('bilmek'))
// console.log(Aorist('cevaplamak'))
// console.log(Aorist('çıkmak'))


/*	{
		twoWays: ['aıou', 'eiöü']
	}

module.exports.mutation = 
[
	{
		// FOR AORIST TENSE
		from: ['p', 't', 'k', 'ç'],
		to: ['b', 'd', 'ğ', 'c']
	},
	{
		// FOR PAST TENSE (IF WE MATCH ANY OF THESE CONSONANTS THEN WE NEED TO MUTATE OR "-D" TO "-T"
		from: ['p', 't', 'k', 'ç', 's', 'ş', 'h']
	}
];

*/




module.exports = Aorist;