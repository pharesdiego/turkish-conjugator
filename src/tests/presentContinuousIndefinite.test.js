var assert = require('assert');

const {
  PresentContinuousIndefinite
} = require('./../tenses/all')

describe('Present Continuous Indefinite Positive', function(){
  it('Positive', function(){
    assert.deepEqual(
      PresentContinuousIndefinite('gelmek'),
      ['geliyormuşum', 'geliyormuşsun', 'geliyormuş', 'geliyormuşuz', 'geliyormuşsunuz', 'geliyormuşlar']
    )
    assert.deepEqual(
      PresentContinuousIndefinite('uyumak'),
      ['uyuyormuşum', 'uyuyormuşsun', 'uyuyormuş', 'uyuyormuşuz', 'uyuyormuşsunuz', 'uyuyormuşlar']
    )
  })
})

describe('Present Continuous Indefinite Negative', function(){
  it('Negative', function(){
    assert.deepEqual(
      PresentContinuousIndefinite('gelmemek'),
      ['gelmiyormuşum', 'gelmiyormuşsun', 'gelmiyormuş', 'gelmiyormuşuz', 'gelmiyormuşsunuz', 'gelmiyormuşlar']
    )
    assert.deepEqual(
      PresentContinuousIndefinite('uyumamak'),
      ['uyumuyormuşum', 'uyumuyormuşsun', 'uyumuyormuş', 'uyumuyormuşuz', 'uyumuyormuşsunuz', 'uyumuyormuşlar']
    )
  })
})