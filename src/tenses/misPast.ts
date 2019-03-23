import { VerbProperties } from '../interfaces';
import { push } from '../methods/basics';
import { arrayOfPersonalSuffixes, generateResult } from './../methods/turkish';

// LAST CHECK 15 5 2018
const MisPast = (props: VerbProperties) => {
  // if the verb is composed in any way, we'll get its firstPart by removing that verb that compose it. Example: Affetmek -> Aff || Yardım etmek -> Yardım
  let firstPart = props.firstPart;

  let misSuffix = 'm' + props.harmony4way + 'ş';

  let larOrLer = 'l' + props.harmony2way + 'r';

  let personalSuffixes = push(
    arrayOfPersonalSuffixes.I(props.harmony4way),
    larOrLer
  );

  return generateResult({
    personalSuffixes,
    firstPart,
    verbRoot: props.originalRoot,
    tenseSuffix: misSuffix,
  });
};

export default MisPast;
