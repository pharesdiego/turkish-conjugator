const Aorist = require('./aorist'),
			Gerund = require('./gerund'),
			Future = require('./future'),
			SimplePast = require('./simplePast'),
			MisPast = require('./misPast'),
			PastContinuous = require('./pastContinuous'),
			PresentIndefinite = require('./presentIndefinite'),
			PresentContinuousIndefinite = require('./presentContinuousIndefinite'),
			FutureIndefinite = require('./futureIndefinite'),
			PotentialNegative = require('./potentialNegative'),
			PotentialPositive = require('./potentialPositive');

console.log(Aorist('olmamak'));
console.log(Gerund('olmamak'))

console.log(Aorist('kaybolmamak'))
console.log(Gerund('kaybolmamak'))

module.exports = {

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

}
