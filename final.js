const {

	Aorist,
	Gerund,
	Future,
	SimplePast,
	MisPast,
	PastContinuous,
	PresentIndefinite,
	PresentContinuousIndefinite,
	FutureIndefinite,
	PotentialNegative,
	PotentialPositive

} = require('./app/tenses/all');


const {
	hasMinLength,
	isVerb,
	isNegativeVerb,
	convertToNegative,
	convertToPositive,
	isAlphabeticallyValid,
	gotAccepted,
} = require('./app/methods/verbVerification');

const {
	whiteSpaces
} = require('./app/methods/turkish');


const ALL = (verb, verbN = convertToNegative(verb)) => [
	{
		tense: 'aorist',
		title: 'Aorist',
		conjugation: {
			positive: Aorist(verb),
			negative: Aorist(verbN)
		}
	},
	{
		tense: 'gerund',
		title: 'Gerund',
		conjugation: {
			positive: Gerund(verb),
			negative: Gerund(verbN)
		}
	},
	{
		tense: 'future',
		title: 'Future',
		conjugation: {
			positive: Future(verb),
			negative: Future(verbN)
		}
	},
	{
		tense: 'simple-past',
		title: 'Simple Past',
		conjugation: {
			positive: SimplePast(verb),
			negative: SimplePast(verbN)
		}
	},
	{
		tense: 'mis-past',
		title: 'Miş Past',
		conjugation: {
			positive: MisPast(verb),
			negative: MisPast(verbN)
		}
	},
	{
		tense: 'past-continuous',
		title: 'Past Continuous',
		conjugation: {
			positive: PastContinuous(verb),
			negative: PastContinuous(verbN)
		}
	},
	{
		tense: 'present-indefinite',
		title: 'Present Indefinite',
		conjugation: {
			positive: PresentIndefinite(verb),
			negative: PresentIndefinite(verbN)
		}
	},
	{
		tense: 'present-continuous-indefinite',
		title: 'Gerund Indefinite',
		conjugation: {
			positive: PresentContinuousIndefinite(verb),
			negative: PresentContinuousIndefinite(verbN)
		}
	},
	{
		tense: 'future-indefinite',
		title: 'Future Indefinite',
		conjugation: {
			positive: FutureIndefinite(verb),
			negative: FutureIndefinite(verbN)
		}
	},
	{
		tense: 'potential',
		title: 'Potential',
		conjugation: {
			positive: PotentialPositive(verb),
			negative: PotentialNegative(verb)
		}
	}
];

console.log(JSON.stringify(ALL('gelmek'), null, 2))

const Conjugate = {

	it: verb => ALL(verb),

	verify: {
		hasMinLength,
		isVerb,
		isNegativeVerb,
		isAlphabeticallyValid,
		whiteSpaces,
		gotAccepted
	},

	utils: {
		convertToPositive,
		convertToNegative,
	}
}

module.exports = Conjugate;