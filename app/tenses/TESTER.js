// TESTER GIVES US METHODS FOR DEBUGGING ALL TENSES

const TENSES = {

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

} = require('./all')



const testAll = (...verbs) => Object.keys(TENSES).forEach(tense => {

	verbs.forEach(verb => {
		console.log(`${verb} in ${tense}: \n`,TENSES[tense](verb))
	})

});
