import { VerbProperties } from '../interfaces';
import { exceptions } from './../rules';
import { push, lastLetter, isVowel, length } from '../methods/basics';
import {
  arrayOfPersonalSuffixes,
  generateResult,
  getLastVowel,
  lookIn4Ways,
  lookIn2Ways,
} from './../methods/turkish';

const Aorist = (props: VerbProperties) => {
  let firstPart = props.firstPart;
  let aoristSuffix = isVowel(lastLetter(props.root))
    ? 'r'
    : exceptions.includes(props.verb) || length(props.root) > 3
    ? props.harmony4way + 'r'
    : props.harmony2way + 'r';
  // RECHECKS. Aorist time is really complicated and we need to recheck the root harmony
  // We are recheking by the aorist suffix, so if it's "-er"
  // recheck4Harmony will be "i"
  // recheck2Harmony will be "e"
  // if aoristSuffix is "-r" then we use the props values because there aren't problems
  let recheck4Harmony =
    aoristSuffix === 'r'
      ? props.harmony4way
      : lookIn4Ways(getLastVowel(aoristSuffix));

  let recheck2Harmony =
    aoristSuffix === 'r'
      ? props.harmony2way
      : lookIn2Ways(getLastVowel(aoristSuffix));

  let larOrLer = 'l' + recheck2Harmony + 'r';

  let personalSuffixes = push(
    arrayOfPersonalSuffixes.I(recheck4Harmony),
    larOrLer
  );

  // If it's negative...
  let negativeRoot = props.positiveRoot + props.negativeSuffix;

  let larOrLerNegative = 'zl' + props.harmony2way + 'r';

  let personalSuffixesN = push(
    arrayOfPersonalSuffixes.IN(props.harmony4way),
    larOrLerNegative
  );

  return props.isNegative
    ? generateResult({
        personalSuffixes: personalSuffixesN,
        verbRoot: negativeRoot,
        firstPart,
      })
    : generateResult({
        personalSuffixes,
        firstPart,
        verbRoot: props.root,
        tenseSuffix: aoristSuffix,
      });
};

export default Aorist;
