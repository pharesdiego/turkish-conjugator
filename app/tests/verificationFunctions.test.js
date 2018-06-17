const assert = require('assert');

const {
  hasMinLength,
  isVerb,
  isNegativeVerb,
  convertToNegative,
  convertToPositive,
  isAlphabeticallyValid,
  isTurkishVerb
} = require('./../methods/verbVerification');

describe('Functions for verifyng verbs', function(){
  it('every function must pass', function(){
    assert.equal(hasMinLength('phares', 5), true);
    assert.equal(hasMinLength('phares', 7), false);

    assert.equal(isVerb('gelmek'), true);
    assert.equal(isVerb('gelme'), false);

    assert.equal(isNegativeVerb('gelmemek'), true)
    assert.equal(isNegativeVerb('gelmeme'), false)

    assert.equal(convertToNegative('gelmek'), 'gelmemek')
    assert.equal(convertToPositive('gelmemek'), 'gelmek')

    assert.equal(isAlphabeticallyValid('gelmek'), true)
    assert.equal(isAlphabeticallyValid('gelmex'), false)

    assert.equal(isTurkishVerb('gelmek'), 'gelmek')
    assert.equal(isTurkishVerb('gitmek'), 'gitmek')
    assert.equal(isTurkishVerb('gelmemek'), 'gelmek')
    assert.equal(isTurkishVerb('değiştirmek'), 'değiştirmek')
    assert.equal(isTurkishVerb('memek'), false)
    assert.equal(isTurkishVerb('mamek'), false)
    assert.equal(isTurkishVerb('makmek'), false)
    assert.equal(isTurkishVerb('gelmemex'), false)
    assert.equal(isTurkishVerb('mmqweqasdmek'), false)
    assert.equal(isTurkishVerb('ek'), false)
    assert.equal(isTurkishVerb('$$mek'), false)
    assert.equal(isTurkishVerb('mek'), false)
    assert.equal(isTurkishVerb('qwdasdee'), false)
  });
});