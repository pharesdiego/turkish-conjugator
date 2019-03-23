import { getProperties } from './src/methods/turkish';
import * as Tenses from './src/tenses';
import {
  convertToNegative,
  isAlphabeticallyValid,
  isTurkishVerb,
} from './src/methods/verbVerification';

const getConjugations = (verb) => {
  const props = getProperties(verb);
  const negativeProps = getProperties(convertToNegative(verb));
  return Object.keys(Tenses).map((Tense) => {
    const title = Tense.replace(/[A-Z]/g, ' $&').trim();
    return {
      title: title === 'Mis Past' ? 'Miş Past' : title,
      conjugation: {
        positive: Tenses[Tense](props),
        negative: Tenses[Tense](
          Tense === 'Potential' ? props : negativeProps,
          true
        ),
      },
    };
  });
};

const Turkish = {
  it: (verb) => getConjugations(verb.toLowerCase()),
  isAlphabeticallyValid,
  isTurkishVerb,
};

export default Turkish;
