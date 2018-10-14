const { push, lastLetter, isVowel, length } = require('./../methods/basics');

const {
  arrayOfPersonalSuffixes,
  generateResult,
  getProperties
} = require('./../methods/turkish');

const { exceptions } = require('./../rules');

// LAST CHECK 15 5 2018
const PresentIndefinite = (verb, DEFAULT = getProperties(verb)) => {
  // if the verb is composed in any way, we'll get its firstPart by removing that verb that compose it. Example: Affetmek -> Aff || Yardım etmek -> Yardım
  let firstPart = DEFAULT.isAuxiliaryComposedVerb
    ? DEFAULT.initComposedVerb
    : DEFAULT.isAuxiliaryComposedVerbInNegativeForm
      ? DEFAULT.initComposedVerbInNegativeForm
      : DEFAULT.isComposed
        ? DEFAULT.initPart
        : '';

  DEFAULT = DEFAULT.isAuxiliaryComposedVerb
    ? getProperties(DEFAULT.auxiliaryVerb)
    : DEFAULT.isAuxiliaryComposedVerbInNegativeForm
      ? getProperties(DEFAULT.auxiliaryVerbInNegativeForm)
      : DEFAULT.isComposed
        ? getProperties(DEFAULT.lastPart)
        : DEFAULT;

  // Gelirmişler -> It seems they (will) come. (Parece que vienen)
  // This use: verb root + aorist suffix + -miş- -mış- -müş- -muş + Personal Suffix I
  // for 3th person plural we use the suffix muş + lar/miş + ler... etc

  let aoristSuffix = isVowel(lastLetter(DEFAULT.root))
    ? 'r'
    : exceptions.includes(DEFAULT.verb) || length(DEFAULT.root) > 3
      ? DEFAULT.harmony4way + 'r'
      : DEFAULT.harmony2way + 'r';

  let larOrLer =
    'm' + DEFAULT.harmony4way + 'ş' + ('l' + DEFAULT.harmony2way + 'r');

  let personalSuffixes = arrayOfPersonalSuffixes
    .I(DEFAULT.harmony4way)
    .map((suffix) => 'm' + DEFAULT.harmony4way + 'ş' + suffix);

  return generateResult({
    personalSuffixes: push(personalSuffixes, larOrLer),
    firstPart,
    verbRoot: DEFAULT.root,
    tenseSuffix: DEFAULT.isNegative ? 'z' : aoristSuffix
  });
};

module.exports = PresentIndefinite;
