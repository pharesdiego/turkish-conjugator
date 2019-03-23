import { VerbProperties } from '../interfaces';
import {
  push,
  firstLetter,
  isVowel,
  lastLetter,
  strInit,
} from '../methods/basics';

import { arrayOfPersonalSuffixes, generateResult } from '../methods/turkish';

const Future = (props: VerbProperties) => {
  let firstPart = props.firstPart;
  let root =
    lastLetter(props.root) === 'e' && props.vowelsLength === 1
      ? strInit(props.root) + 'i'
      : props.root;

  // add buffer letter if neccesary
  root = isVowel(lastLetter(root)) ? root + 'y' : root;

  // the final k or ğ is added later because it's more easy to add than mutate a letter
  // this creates either 'ece' or 'aca'
  let futureSuffix = props.harmony2way + 'c' + props.harmony2way;

  // we need to know which suffix is maked on "futureSuffix" for making the harmony
  // if it's "ece" then the harmony is "i"
  // if it's "aca" then the harmony is "ı"
  let harmonyByFutureSuffix = futureSuffix === 'ece' ? 'i' : 'ı';

  let larOrLer = 'l' + props.harmony2way + 'r';

  let personalSuffixes = push(
    arrayOfPersonalSuffixes.I(harmonyByFutureSuffix),
    larOrLer
  );

  // after we get the personal suffix, we need to add ğ is the first letter is a vowel or k if it isn't
  // example: im -> ğim
  // example: sin -> ksin
  let addMutatedLetter = personalSuffixes.map(
    (suffix) => (isVowel(firstLetter(suffix)) ? 'ğ' : 'k') + suffix
  );

  return generateResult({
    personalSuffixes: addMutatedLetter,
    firstPart,
    verbRoot: root,
    tenseSuffix: futureSuffix,
  });
};

export default Future;
