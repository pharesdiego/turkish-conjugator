import { VerbProperties } from '../interfaces';
import { mutation } from '../rules';
import { push, lastLetter } from '../methods/basics';
import { arrayOfPersonalSuffixes, generateResult } from './../methods/turkish';

const SimplePast = (props: VerbProperties) => {
  // We need to mutate the pastRoot from 'p', 't', 'k', 'ç', 's', 'ş', 'h' to 't'
  let root = mutation[0].from.includes(lastLetter(props.originalRoot))
    ? props.originalRoot + 't'
    : props.root + 'd';
  // this creates larOrLer like: iler, ular... for third person plural
  let larOrLer = props.harmony4way + 'l' + props.harmony2way + 'r';

  let personalSuffixes = push(
    arrayOfPersonalSuffixes.II(props.harmony4way),
    larOrLer
  );

  return generateResult({
    personalSuffixes,
    firstPart: props.firstPart,
    verbRoot: root,
  });
};

export default SimplePast;
