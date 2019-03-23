import { VerbProperties } from '../../interfaces';
import { push, strInit, isVowel, lastLetter } from '../../methods/basics';
import { arrayOfPersonalSuffixes, generateResult } from '../../methods/turkish';

// LAST CHECK 15 5 2018
const PotentialPositive = (props: VerbProperties) => {
  let firstPart = props.firstPart;

  let root =
    lastLetter(props.root) === 'e' && props.vowelsLength === 1
      ? strInit(props.root) + 'i'
      : props.root;

  // gel + (y)ebil + ir + im
  // root + (ebil|abil) + aorist + Personal Suffixes I
  // yapabilirim, olabilirim, söyleyebilirim (!!söyle yebil er im)

  let abilitySuffix =
    (isVowel(lastLetter(root)) ? 'y' : '') + props.harmony2way + 'bil';

  let aoristSuffix = 'ir';

  let larOrLer = 'ler';

  let personalSuffixes = arrayOfPersonalSuffixes.I('i');

  return generateResult({
    personalSuffixes: push(personalSuffixes, larOrLer),
    firstPart,
    verbRoot: root + abilitySuffix,
    tenseSuffix: aoristSuffix,
  });
};

export default PotentialPositive;
