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


const ALL = (verb, verbN = convertToNegative(verb)) => 
(
	{
		aorist:{
			positive: Aorist(verb),
			negative: Aorist(verbN)
		},
		gerund:{
			positive: Gerund(verb),
			negative: Gerund(verbN)
		},
		future:{
			positive: Future(verb),
			negative: Future(verbN)
		},
		simplePast:{
			positive: SimplePast(verb),
			negative: SimplePast(verbN)
		},
		misPast:{
			positive: MisPast(verb),
			negative: MisPast(verbN)
		},
		pastContinuous:{
			positive: PastContinuous(verb),
			negative: PastContinuous(verbN)
		},
		presentIndefinite:{
			positive: PresentIndefinite(verb),
			negative: PresentIndefinite(verbN)
		},
		gerundIndefinite:{
			positive: PresentContinuousIndefinite(verb),
			negative: PresentContinuousIndefinite(verbN)
		},
		futureIndefinite:{
			positive: FutureIndefinite(verb),
			negative: FutureIndefinite(verbN)
		},
		potential:{
			positive: PotentialPositive(verb),
			negative: PotentialNegative(verb)
		}
	}
)

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