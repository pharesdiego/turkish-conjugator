var assert = require('assert');

const { PastContinuous } = require('./../tenses/all');

describe('Past Continuous Positive', function() {
  it('Positive', function() {
    assert.deepEqual(PastContinuous('gelmek'), [
      'geliyordum',
      'geliyordun',
      'geliyordu',
      'geliyorduk',
      'geliyordunuz',
      'geliyordular'
    ]);
    assert.deepEqual(PastContinuous('uyumak'), [
      'uyuyordum',
      'uyuyordun',
      'uyuyordu',
      'uyuyorduk',
      'uyuyordunuz',
      'uyuyordular'
    ]);
    assert.deepEqual(PastContinuous('demek'), [
      'diyordum',
      'diyordun',
      'diyordu',
      'diyorduk',
      'diyordunuz',
      'diyordular'
    ]);
    assert.deepEqual(PastContinuous('sanmak'), [
      'sanıyordum',
      'sanıyordun',
      'sanıyordu',
      'sanıyorduk',
      'sanıyordunuz',
      'sanıyordular'
    ]);
  });
});

describe('Past Continuous Negative', function() {
  it('Negative', function() {
    assert.deepEqual(PastContinuous('gelmemek'), [
      'gelmiyordum',
      'gelmiyordun',
      'gelmiyordu',
      'gelmiyorduk',
      'gelmiyordunuz',
      'gelmiyordular'
    ]);
    assert.deepEqual(PastContinuous('uyumamak'), [
      'uyumuyordum',
      'uyumuyordun',
      'uyumuyordu',
      'uyumuyorduk',
      'uyumuyordunuz',
      'uyumuyordular'
    ]);
    assert.deepEqual(PastContinuous('dememek'), [
      'demiyordum',
      'demiyordun',
      'demiyordu',
      'demiyorduk',
      'demiyordunuz',
      'demiyordular'
    ]);
    assert.deepEqual(PastContinuous('sanmamak'), [
      'sanmıyordum',
      'sanmıyordun',
      'sanmıyordu',
      'sanmıyorduk',
      'sanmıyordunuz',
      'sanmıyordular'
    ]);
  });
});
