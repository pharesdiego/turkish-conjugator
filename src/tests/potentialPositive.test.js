var assert = require('assert');

const { PotentialPositive } = require('./../tenses/all');

describe('Potential Positive', function() {
  it('Should replace first vowel when verb is too small', function() {
    assert.deepEqual(PotentialPositive('demek'), [
      'diyebilirim',
      'diyebilirsin',
      'diyebilir',
      'diyebiliriz',
      'diyebilirsiniz',
      'diyebilirler'
    ]);
  });

  it('Normal conjugation -ebil', function() {
    assert.deepEqual(PotentialPositive('denemek'), [
      'deneyebilirim',
      'deneyebilirsin',
      'deneyebilir',
      'deneyebiliriz',
      'deneyebilirsiniz',
      'deneyebilirler'
    ]);
  });

  it('Normal conjugation -abil', function() {
    assert.deepEqual(PotentialPositive('almak'), [
      'alabilirim',
      'alabilirsin',
      'alabilir',
      'alabiliriz',
      'alabilirsiniz',
      'alabilirler'
    ]);

    assert.deepEqual(PotentialPositive('sormak'), [
      'sorabilirim',
      'sorabilirsin',
      'sorabilir',
      'sorabiliriz',
      'sorabilirsiniz',
      'sorabilirler'
    ]);
  });
});
