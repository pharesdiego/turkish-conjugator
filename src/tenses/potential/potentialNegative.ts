import { VerbProperties } from '../../interfaces';
import {
  push,
  lastLetter,
  isVowel,
  length,
  strInit,
} from '../../methods/basics';
import {
  arrayOfPersonalSuffixes,
  generateResult,
  getProperties,
} from '../../methods/turkish';

// LAST CHECK 15 5 2018
const PotentialNegative = (props: VerbProperties) => {
  // if the verb is composed in any way, we'll get its firstPart by removing that verb that compose it. Example: Affetmek -> Aff || Yardım etmek -> Yardım
  let firstPart = props.firstPart;

  // the description of this tense is:
  // a negative verb to which we need to put the cannot suffix between the root and the negative in infitive (mamak/memek)
  // so a verb like yazmamak becomes -> yaz a mamak
  // or verb like beklememek becomes -> bekle ye memek

  // what I did:

  // for first we take the root of the verb, let's take yazmak as an example
  // the root of yazmak is "yaz"

  // in the middle of this pattern we ask if the lastLetter isVowel (if last letter is a vowel)
  // if it's a vowel then we add the buffer letter "y"
  // else we add the second way of harmony, that could be "a" or "e"

  // at the final we add the negativeSuffix, that is dedused by adding the second harmony to a "m"
  // the result could be "ma" or "me"

  let root =
    lastLetter(props.root) === 'e' && length(props.root) === 2
      ? strInit(props.root) + 'i'
      : props.root;

  let negativeConstruction =
    root +
    (isVowel(lastLetter(props.root)) ? 'y' : '') +
    props.harmony2way +
    props.negativeSuffix;

  let personalSuffixes = arrayOfPersonalSuffixes.IN(
    props.verbSuffix === 'mak' ? 'ı' : 'i'
  );

  let larOrLer = 'zl' + props.harmony2way + 'r';

  return generateResult({
    personalSuffixes: push(personalSuffixes, larOrLer),
    firstPart,
    verbRoot: negativeConstruction,
  });
};

export default PotentialNegative;
