const {
  strEndsWith
} = require('./basics')

// const {
//   get2WayHarmonyOf
// } = require('./turkish')

const {
  alphabet
} = require('./../rules')

const hasMinLength = (str, l) => str.length >= l;

const isVerb = verb => strEndsWith(verb)('mek', 'mak');

const isNegativeVerb = verb => strEndsWith(verb)('memek', 'mamak');

const convertToPositive = verb => verb.replace(/\w{5}$/, m => m[0] + m[1] + 'k');

const convertToNegative = verb => verb.replace(/\w{3}$/, m => m[0] + m[1] + m[0] + m[1] +'k');

const isAlphabeticallyValid = arr => arr.every(letter => alphabet.includes(letter));

const gotAccepted = verb => {

	verb = lowerCase(verb);
	
	if(hasMinLength(verb, 5) && isAlphabeticallyValid(split(verb))){

		if(isNegativeVerb(verb) && hasMinLength(verb, 7)) return convertToPositive(verb);

		if(isVerb(verb)) return verb;

	}

	return false;

}

module.exports = {
  hasMinLength,
  isVerb,
  isNegativeVerb,
  convertToNegative,
  convertToPositive,
  isAlphabeticallyValid,
  gotAccepted
}