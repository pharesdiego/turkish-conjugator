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
  getProperties,
  lookIn4Ways,
} from '../methods/turkish';

// LAST CHECK 24 5 2018
const PresentContinuousIndefinite = (props: VerbProperties) => {
  // this use the root + gerund suffix +  -muş- + Personal Suffix I
  // for 3th person plural we use the suffix (-larmış)

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

  let larOrLer = 'muşlar';

  // We create the array of personal suffix and after we add the Indefinite Suffix "muş"
  let personalSuffixes = arrayOfPersonalSuffixes
    .I('u')
    .map((item) => `muş${item}`);

  // We push here the new Array of personal suffix and the larOrLer
  return generateResult({
    personalSuffixes: push(personalSuffixes, larOrLer),
    firstPart: props.firstPart,
    verbRoot: root,
    tenseSuffix: gerundSuffix,
  });
};

export default PresentContinuousIndefinite;
