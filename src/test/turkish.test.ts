import * as turkish from '../methods/turkish';
import verbs from './verbs';

const {
  arrayOfPersonalSuffixes,
  lookIn2Ways,
  lookIn4Ways,
  generateResult,
  ...rest
} = turkish;

Object.keys(rest).forEach((functionName) => {
  describe(`>>> ${functionName} <<<`, () => {
    verbs.forEach((verb) => {
      test(`${functionName}(${verb})`, () => {
        expect(rest[functionName](verb)).toMatchSnapshot();
      });
    });
  });
});
