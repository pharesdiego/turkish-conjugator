const {
  strEndsWith,
  lowerCase,
  getVowelsStr,
  arrInit,
  join,
  _
} = require('./basics')

const {
  alphabet
} = require('./../rules')

const hasMinLength = (str, l) => str.length >= l;

const isVerb = verb => strEndsWith(verb.toLowerCase())('mek', 'mak');

const isNegativeVerb = verb => strEndsWith(verb.toLowerCase())('memek', 'mamak');

const convertToPositive = verb => verb.toLowerCase().replace(/\w{5}$/, m => m[0] + m[1] + 'k');

const convertToNegative = verb => verb.toLowerCase().replace(/\w{3}$/, m => m[0] + m[1] + m[0] + m[1] +'k');

const isAlphabeticallyValid = str => str.toLowerCase().split('').every(letter => alphabet.includes(letter));

const splitSpace = str => str.split(' ');

const isComposed = str => splitSpace(str).length > 1;

const getVowelsFromInitOfComposedVerb = _(splitSpace, arrInit, join, getVowelsStr);

const isTurkishVerb = verb => {

  verb = lowerCase(verb);

	if(hasMinLength(verb, 5)){

    if((isComposed(verb) ? getVowelsFromInitOfComposedVerb(verb) : getVowelsStr(verb)).length > 1){

      if(isAlphabeticallyValid(verb)){

        if(splitSpace(verb).every(str => hasMinLength(str, 3))){
          
          // match strings like: memek, mamak, mamek, memak, mekmek...
          if(/\bm(e|a)k?m(e|a)k\b/.test(verb)) return false;
  
          if(isNegativeVerb(verb) && hasMinLength(verb, 7)) return convertToPositive(verb);
    
          if(isVerb(verb)) return verb;
        }

      }

    }

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
  isTurkishVerb
}