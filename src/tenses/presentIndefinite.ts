import { VerbProperties } from '../interfaces';
import { exceptions } from '../rules';
import { push, lastLetter, isVowel, length } from '../methods/basics';
import {
  arrayOfPersonalSuffixes,
  generateResult,
  getProperties,
} from '../methods/turkish';

const PresentIndefinite = (props: VerbProperties) => {
  // Gelirmişler -> It seems they (will) come. (Parece que vienen)
  // This use: verb root + aorist suffix + -miş- -mış- -müş- -muş + Personal Suffix I
  // for 3th person plural we use the suffix muş + lar/miş + ler... etc

  let aoristSuffix = isVowel(lastLetter(props.root))
    ? 'r'
    : exceptions.includes(props.verb) || length(props.root) > 3
    ? props.harmony4way + 'r'
    : props.harmony2way + 'r';

  let larOrLer =
    'm' + props.harmony4way + 'ş' + ('l' + props.harmony2way + 'r');

  let personalSuffixes = arrayOfPersonalSuffixes
    .I(props.harmony4way)
    .map((suffix) => 'm' + props.harmony4way + 'ş' + suffix);

  return generateResult({
    personalSuffixes: push(personalSuffixes, larOrLer),
    firstPart: props.firstPart,
    verbRoot: props.root,
    tenseSuffix: props.isNegative ? 'z' : aoristSuffix,
  });
};

export default PresentIndefinite;
