import { VerbProperties } from '../interfaces';
import { push, strInit, isVowel, lastLetter } from '../methods/basics';
import { arrayOfPersonalSuffixes, generateResult } from '../methods/turkish';

// LAST CHECK 24 5 2018
const FutureIndefinite = (props: VerbProperties) => {
  let firstPart = props.firstPart;

  // this use: verb root + future suffix + -miş- OR -mış- + Personal Suffix I
  // Try with gelmek and yapmak for -(y)ecek and -(y)acak
  let root =
    lastLetter(props.root) === 'e' && props.vowelsLength === 1
      ? strInit(props.root) + 'i'
      : props.root;

  let rootConstruction = root + (isVowel(lastLetter(props.root)) ? 'y' : '');

  let futureSuffix = props.harmony2way + 'c' + props.harmony2way + 'k';

  // we need to know which suffix is on "futureSuffix" for making the harmony
  // if it's "ece" then the harmony is "i"
  // if it's "aca" then the harmony is "ı"
  let harmonyByFutureSuffix = futureSuffix === 'ecek' ? 'i' : 'ı';

  let larOrLer =
    'm' + harmonyByFutureSuffix + 'ş' + ('l' + props.harmony2way + 'r');

  let personalSuffixes = arrayOfPersonalSuffixes
    .I(harmonyByFutureSuffix)
    .map((suffix) => 'm' + harmonyByFutureSuffix + 'ş' + suffix);

  return generateResult({
    personalSuffixes: push(personalSuffixes, larOrLer),
    firstPart,
    verbRoot: rootConstruction,
    tenseSuffix: futureSuffix,
  });
};

export default FutureIndefinite;
