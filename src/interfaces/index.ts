interface VerbProperties {
  __originalVerb: string;
  vowelsLength: number;
  firstPart: string;
  verb: string;
  root: string;
  initPart: string;
  lastPart: string;
  verbSuffix: string;
  verbVowels: string;
  harmony4way: string;
  harmony2way: string;
  originalRoot: string;
  positiveRoot: string;
  auxiliaryVerb: string;
  negativeSuffix: string;
  initComposedVerb: string;
  auxiliaryVerbInNegativeForm: string;
  initComposedVerbInNegativeForm: string;
  isNegative: boolean;
  isComposed: boolean;
  isSingleSyllableVerb: boolean;
  isAuxiliaryComposedVerb: boolean;
  isAuxiliaryComposedVerbInNegativeForm: boolean;
}

export { VerbProperties };
