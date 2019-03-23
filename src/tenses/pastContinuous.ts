import { VerbProperties } from '../interfaces';
import {
  push,
  strInit,
  isVowel,
  lastLetter,
  getLastVowel,
  length,
} from '../methods/basics';
import {
  arrayOfPersonalSuffixes,
  generateResult,
  lookIn4Ways,
} from './../methods/turkish';

// LAST CHECK 24 5 2018
const PastContinuous = (props: VerbProperties) => {
  // if the verb is composed in any way, we'll get its firstPart by removing that verb that compose it. Example: Affetmek -> Aff || Yardım etmek -> Yardım
  let firstPart = props.firstPart;

  let root =
    props.isNegative || isVowel(lastLetter(props.root))
      ? strInit(props.root)
      : props.root;

  let gerundSuffix =
    lookIn4Ways(getLastVowel(length(root) === 1 ? props.root : root)) + 'yor';

  // The suffix (-lardu, (du is from Past Suffix, but it's always 'dı' because of vowel harmony)) is
  // an special case in the Past Continuous

  let larOrLer = `dular`;

  let personalSuffixes = push(arrayOfPersonalSuffixes.II('du', 'u'), larOrLer);

  return generateResult({
    personalSuffixes,
    firstPart,
    verbRoot: root,
    tenseSuffix: gerundSuffix,
  });
};

export default PastContinuous;
