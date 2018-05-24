var assert = require('assert');

const {
  PresentIndefinite
} = require('./../tenses/all')

describe('Present Indefinite Positive', function(){
  it('Positive', function(){
    assert.deepEqual(
      PresentIndefinite('gelmek'),
      ['gelirmişim', 'gelirmişsin', 'gelirmiş', 'gelirmişiz', 'gelirmişsiniz', 'gelirmişler']
    )
    assert.deepEqual(
      PresentIndefinite('uyumak'),
      ['uyurmuşum', 'uyurmuşsun', 'uyurmuş', 'uyurmuşuz', 'uyurmuşsunuz', 'uyurmuşlar']
    )
  })
})

describe('Present Indefinite Negative', function(){
  it('Negative', function(){
    assert.deepEqual(
      PresentIndefinite('gelmemek'),
      ['gelmezmişim', 'gelmezmişsin', 'gelmezmiş', 'gelmezmişiz', 'gelmezmişsiniz', 'gelmezmişler']
    )
    assert.deepEqual(
      PresentIndefinite('uyumamak'),
      ['uyumazmışım', 'uyumazmışsın', 'uyumazmış', 'uyumazmışız', 'uyumazmışsınız', 'uyumazmışlar']
    )
  })
})