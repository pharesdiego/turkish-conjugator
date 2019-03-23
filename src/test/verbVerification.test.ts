import * as verbVerification from '../methods/verbVerification';
import verbs, { wrongVerbs } from './verbs';

const { hasMinLength, ...rest } = verbVerification;

Object.keys(rest).forEach((functionName) => {
  describe(`>>> ${functionName}, with CORRECT verbs <<<`, () => {
    verbs.forEach((verb) => {
      test(`${functionName}(${verb})`, () => {
        expect(rest[functionName](verb)).toMatchSnapshot();
      });
    });
  });

  describe(`>>> ${functionName}, with WRONG verbs <<<`, () => {
    wrongVerbs.forEach((verb) => {
      test(`${functionName}(${verb})`, () => {
        expect(rest[functionName](verb)).toMatchSnapshot();
      });
    });
  });
});

describe('>>> hasMinLength <<<', () => {
  verbs.forEach((verb, i) => {
    test(`hasMinLength(${verb}, ${i % 2 ? verb.length : i})`, () => {
      expect(hasMinLength(verb, i % 2 ? verb.length : i)).toMatchSnapshot();
    });
  });
});
