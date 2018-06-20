const {
  strEndsWith,
  lowerCase,
  getVowelsStr,
  arrLast,
  arrInit,
  join,
  _
} = require('./basics')

const {
  alphabet
} = require('./../rules')

const hasMinLength = (str, l) => str.length >= l;

const isVerb = verb => strEndsWith(verb)('mek', 'mak');

const isNegativeVerb = verb => strEndsWith(verb)('memek', 'mamak');

const convertToPositive = verb => verb.replace(/\w{5}$/, m => m[0] + m[1] + 'k');

const convertToNegative = verb => verb.replace(/\w{3}$/, m => m[0] + m[1] + m[0] + m[1] +'k');

const isAlphabeticallyValid = str => str.split('').every(letter => alphabet.includes(letter));

const splitSpace = str => str.split(' ');

const isComposed = str => str.split(' ').length > 1;

const splitSpaceGetArrInitAndStrVowels = _(splitSpace, arrInit, join, getVowelsStr);

const isTurkishVerb = verb => {

  verb = lowerCase(verb);
  
	if(hasMinLength(verb, 5)){

    if(isComposed(verb) ? splitSpaceGetArrInitAndStrVowels(verb).length > 1 : true){

      if(isAlphabeticallyValid(verb)){

        if(hasMinLength(arrLast(verb.split(' '))[0], 5)){
          
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