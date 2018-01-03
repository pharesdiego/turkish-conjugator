module.exports.harmony = 
[
	{
		fourWays: ['aı', 'ou', 'ei', 'öü']
	},
	{
		twoWays: ['aıou', 'eiöü']
	}
]

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

// We prevent these verbs to mutate its final consonant, it can't be "yabarım" but "yaparım" (so we prevent the mutation from "p" to "b")
// notMutableVerbs with more than one syllable in the root
module.exports.notMutableVerbs = 
[

	'bırakmak',
	'anlatmak'
]


module.exports.mutableVerbs = [
	'etmek',
	'gitmek',
	'ditmek',
	'tatmak',
	'yetmek',
]

module.exports.alphabet =
[
	'a','b','c','ç','d','e','f','g','ğ','h','ı','i','j','k','l','m','n','o','ö','p','r','s','ş','t','u','ü','v','y','z', ' '
]
