import { getProperties } from '../methods/turkish';
import { isNegativeVerb } from '../methods/verbVerification';
import verbs, { positives } from './verbs';
import * as Tenses from '../tenses';

const { Potential, ...rest } = Tenses;

Object.keys(rest).forEach((tenseName) => {
  describe(`>>> ${tenseName} <<<`, () => {
    verbs.forEach((verb) => {
      test(`"${verb}" (${
        isNegativeVerb(verb) ? 'negative' : 'positive'
      })`, () => {
        expect(rest[tenseName](getProperties(verb))).toMatchSnapshot();
      });
    });
  });
});

describe('>>> Potential <<<', () => {
  positives.forEach((verb) => {
    test(`"${verb}" (positive)`, () => {
      expect(Potential(getProperties(verb))).toMatchSnapshot();
    });

    test(`"${verb}" (negative)`, () => {
      expect(Potential(getProperties(verb), true)).toMatchSnapshot();
    });
  });
});
