import * as basics from '../methods/basics';
import verbs, { wrongVerbs } from './verbs';

const {
  compose,
  join,
  arrLast,
  arrInit,
  push,
  reverse,
  getVowelsArr,
  strEndsWith,
  strStarsWith,
  ...stringsMethods
} = basics;

Object.keys(stringsMethods).forEach((functionName) => {
  describe(`>>> ${functionName} <<<`, () => {
    verbs.forEach((verb) => {
      test(`${functionName}(${verb}) with CORRECT inputs`, () => {
        expect(stringsMethods[functionName](verb)).toMatchSnapshot();
      });
    });

    wrongVerbs.forEach((verb) => {
      test(`${functionName}(${verb}) with WRONG inputs`, () => {
        expect(stringsMethods[functionName](verb)).toMatchSnapshot();
      });
    });
  });
});
