var assert = require('assert');

const {
  PotentialNegative
} = require('./../tenses/all')

describe('Potential Negative', function(){
  it('Should replace first vowel when verb is too small', function(){
    assert.deepEqual(PotentialNegative('demek'), ['diyemem', 'diyemezsin', 'diyemez', 'diyemeyiz', 'diyemezsiniz', 'diyemezler'])
    assert.deepEqual(PotentialNegative('yemek'), ['yiyemem', 'yiyemezsin', 'yiyemez', 'yiyemeyiz', 'yiyemezsiniz', 'yiyemezler'])
  })

  it('Normal conjugation -mek', function(){
    assert.deepEqual(
      PotentialNegative('denemek'),
      ['deneyemem', 'deneyemezsin', 'deneyemez', 'deneyemeyiz', 'deneyemezsiniz', 'deneyemezler']
    )
  })

  it('Normal conjugation -mak', function(){
    assert.deepEqual(
      PotentialNegative('almak'),
      ['alamam', 'alamazsın', 'alamaz', 'alamayız', 'alamazsınız', 'alamazlar']
    )

    assert.deepEqual(
      PotentialNegative('uyumak'),
      ['uyuyamam', 'uyuyamazsın', 'uyuyamaz', 'uyuyamayız', 'uyuyamazsınız', 'uyuyamazlar']
    )

    assert.deepEqual(
      PotentialNegative('sormak'),
      ['soramam', 'soramazsın', 'soramaz', 'soramayız', 'soramazsınız', 'soramazlar']
    )
  })
})