var assert = require('assert');

const { FutureIndefinite } = require('./../tenses/all');

describe('Future Indefinite Positive', function() {
  it('Should conjugate properly -mak', function() {
    assert.deepEqual(FutureIndefinite('korkmak'), [
      'korkacakmışım',
      'korkacakmışsın',
      'korkacakmış',
      'korkacakmışız',
      'korkacakmışsınız',
      'korkacakmışlar'
    ]);
  });

  it('Should conjugate properly -mek', function() {
    assert.deepEqual(FutureIndefinite('gelmek'), [
      'gelecekmişim',
      'gelecekmişsin',
      'gelecekmiş',
      'gelecekmişiz',
      'gelecekmişsiniz',
      'gelecekmişler'
    ]);

    assert.deepEqual(FutureIndefinite('yemek'), [
      'yiyecekmişim',
      'yiyecekmişsin',
      'yiyecekmiş',
      'yiyecekmişiz',
      'yiyecekmişsiniz',
      'yiyecekmişler'
    ]);
  });
});

describe('Future Indefinite Negative', function() {
  it('Should conjugate properly -mak', function() {
    assert.deepEqual(FutureIndefinite('korkmamak'), [
      'korkmayacakmışım',
      'korkmayacakmışsın',
      'korkmayacakmış',
      'korkmayacakmışız',
      'korkmayacakmışsınız',
      'korkmayacakmışlar'
    ]);
  });

  it('Should conjugate properly -mek', function() {
    assert.deepEqual(FutureIndefinite('gelmemek'), [
      'gelmeyecekmişim',
      'gelmeyecekmişsin',
      'gelmeyecekmiş',
      'gelmeyecekmişiz',
      'gelmeyecekmişsiniz',
      'gelmeyecekmişler'
    ]);

    assert.deepEqual(FutureIndefinite('yememek'), [
      'yemeyecekmişim',
      'yemeyecekmişsin',
      'yemeyecekmiş',
      'yemeyecekmişiz',
      'yemeyecekmişsiniz',
      'yemeyecekmişler'
    ]);
  });
});
