module.exports.harmony = {
	fourWays: ['aı', 'ou', 'ei', 'öü'],
	twoWays: ['ıoua', 'iöüe']
}

module.exports.mutation = 
[
	{
		// FOR AORIST TENSE
		'p': 'b',
		't': 'd',
		'k': 'ğ',
		'ç': 'c',
		from: ['p', 't', 'k', 'ç'],
		to: ['b', 'd', 'ğ', 'c']
	},
	{
		// FOR PAST TENSE (IF WE MATCH ANY OF THESE CONSONANTS THEN WE NEED TO MUTATE OR "-D" TO "-T"
		from: ['p', 't', 'k', 'ç', 's', 'ş', 'h']
	}
];
// inmutable terminations: ak, at, et, ok 
// yakmak, takmak, akmak, bakmak, kakmak, çakmak 
// kapatmak, açıklatmak, çatmak, adatmak, satmak, aldatmak, anlatmak, atmak
// kapatırım ---+
// satarım ---+
// kokmak -> kokarım
// sokmak ->  sokarım
// anlatırım
module.exports.notMutableVerbs = 
[

]

// There are five verb stems soften their final -t to -d when adding a vowel suffix.
module.exports.mutableVerbs = [
	'etmek',
	'gitmek',
	'ditmek',
	'tatmak',
	'gütmek'
]

module.exports.alphabet =
[
	'a','b','c','ç','d','e','f','g','ğ','h','ı','i','j','k','l','m','n','o','ö','p','r','s','ş','t','u','ü','v','y','z', ' '
]

module.exports.exceptions = [
	'almak',
	'bilmek',
	'bulmak',
	'durmak',
	'gelmek',
	'görmek',
	'kalmak',
	'olmak',
	'ölmek',
	'sanmak',
	'vermek',
	'varmak',
	'vurmak'
]
