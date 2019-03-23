import { VerbProperties } from '../interfaces';
import {
  push,
  strInit,
  lastLetter,
  isVowel,
  getLastVowel,
  length,
} from '../methods/basics';
import {
  arrayOfPersonalSuffixes,
  generateResult,
  lookIn4Ways,
} from '../methods/turkish';

// LAST CHECK 15 5 2018
const Gerund = (props: VerbProperties) => {
  // if the verb is composed in any way, we'll get its firstPart by removing that verb that compose it. Example: Affetmek -> Aff || Yardım etmek -> Yardım
  let firstPart = props.firstPart;

  let root =
    props.isNegative || isVowel(lastLetter(props.root))
      ? strInit(props.root)
      : props.root;

  // gerundSuffix could be iyor, ıyor, üyor, uyor
  // because of ROOT being just a letter sometimes, like when the verb is 'yemek'
  // it's just 'y', so we check if the root length is === 1, it means we need
  // to use the props.root that will have the necessary vowel for
  // lookIn4Ways
  let gerundSuffix =
    lookIn4Ways(getLastVowel(length(root) === 1 ? props.root : root)) + 'yor';

  let larOrLer = 'lar';

  let personalSuffixes = push(arrayOfPersonalSuffixes.I('u'), larOrLer);

  return generateResult({
    personalSuffixes,
    firstPart,
    verbRoot: root,
    tenseSuffix: gerundSuffix,
  });
};

export default Gerund;
