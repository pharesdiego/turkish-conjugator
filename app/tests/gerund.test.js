var assert = require('assert');
const TENSES = {
  Gerund,
} = require('./../tenses/all')

describe('Gerund', function(){

  describe('Must conjugate properly IRREGULAR VERBS', function(){
    // These verbs are: almak, bilmek, bulmak, durmak, gelmek, görmek, kalmak, olmak, ölmek, sanmak, vermek, vurmak, varmak
    it('Every IRREGULAR VERB', function(){
      assert.deepEqual(Gerund('bilmek'), ['biliyorum','biliyorsun','biliyor','biliyoruz','biliyorsunuz','biliyorlar'])
      assert.deepEqual(Gerund('bulmak'), ['buluyorum','buluyorsun','buluyor','buluyoruz','buluyorsunuz','buluyorlar'])
      assert.deepEqual(Gerund('durmak'), ['duruyorum','duruyorsun','duruyor','duruyoruz','duruyorsunuz','duruyorlar'])
      assert.deepEqual(Gerund('gelmek'), ['geliyorum','geliyorsun','geliyor','geliyoruz','geliyorsunuz','geliyorlar'])
      assert.deepEqual(Gerund('görmek'), ['görüyorum','görüyorsun','görüyor','görüyoruz','görüyorsunuz','görüyorlar'])
      assert.deepEqual(Gerund('kalmak'), ['kalıyorum','kalıyorsun','kalıyor','kalıyoruz','kalıyorsunuz','kalıyorlar'])
      assert.deepEqual(Gerund('sanmak'), ['sanıyorum','sanıyorsun','sanıyor','sanıyoruz','sanıyorsunuz','sanıyorlar'])
      assert.deepEqual(Gerund('vermek'), ['veriyorum','veriyorsun','veriyor','veriyoruz','veriyorsunuz','veriyorlar'])
      assert.deepEqual(Gerund('vurmak'), ['vuruyorum','vuruyorsun','vuruyor','vuruyoruz','vuruyorsunuz','vuruyorlar'])
      assert.deepEqual(Gerund('varmak'), ['varıyorum','varıyorsun','varıyor','varıyoruz','varıyorsunuz','varıyorlar'])
      assert.deepEqual(Gerund('olmak'), [ 'oluyorum', 'oluyorsun', 'oluyor', 'oluyoruz', 'oluyorsunuz', 'oluyorlar' ])
      assert.deepEqual(Gerund('almak'), ['alıyorum','alıyorsun','alıyor','alıyoruz','alıyorsunuz','alıyorlar'])
      assert.deepEqual(Gerund('ölmek'), ['ölüyorum','ölüyorsun','ölüyor','ölüyoruz','ölüyorsunuz','ölüyorlar'])
    })
  })
  
  describe('Must conjugate properly REGULAR VERBS', function(){

    it('One syllable verbs', function(){
      assert.deepEqual(Gerund('yemek'), ['yiyorum','yiyorsun','yiyor','yiyoruz','yiyorsunuz','yiyorlar'])
      assert.deepEqual(Gerund('atmak'), ['atıyorum','atıyorsun','atıyor','atıyoruz','atıyorsunuz','atıyorlar'])
      assert.deepEqual(Gerund('yapmak'), ['yapıyorum','yapıyorsun','yapıyor','yapıyor','yapıyorsunuz','yapıyorlar'])
      assert.deepEqual(Gerund('sevmek'), ['seviyorum','seviyorsun','seviyor','seviyoruz','seviyorsunuz','seviyorlar'])
    })
    
    it('Two syllable verbs', function(){
      assert.deepEqual(Gerund('yürümek'), ['yürüyorum','yürüyorsun','yürüyor','yürüyoruz','yürüyorsunuz','yürüyorlar'])
      assert.deepEqual(Gerund('istemek'), ['istiyorum','istiyorsun','istiyor','istiyoruz','istiyorsunuz','istiyorlar'])
      assert.deepEqual(Gerund('ağlamak'), ['ağlıyorum', 'ağlıyorsun', 'ağlıyor', 'ağlıyoruz', 'ağlıyorsunuz', 'ağlıyorlar'])
      assert.deepEqual(Gerund('konuşmak'), ['konuşuyorum','konuşuyorsun','konuşuyor','konuşuyoruz','konuşuyorsunuz','konuşuyorlar'])
      assert.deepEqual(Gerund('çalışmak'), ['çalışıyorum','çalışıyorsun','çalışıyor','çalışıyoruz','çalışıyorsunuz','çalışıyorlar'])
      assert.deepEqual(Gerund('kapatmak'), ['kapatıyorum','kapatıyorsun','kapatıyor','kapatıyoruz','kapatıyorsunuz','kapatıyorlar'])
    })

    it('Three syllable verbs', function(){
      assert.deepEqual(
        Gerund('değiştirmek'),
        ['değiştiriyorum','değiştiriyorsun','değiştiriyor','değiştiriyoruz','değiştiriyorsunuz','değiştiriyorlar']
      )

      assert.deepEqual(
        Gerund('sinirlenmek'),
        ['sinirleniyorum', 'sinirleniyorsun', 'sinirleniyor', 'sinirleniyoruz', 'sinirleniyorsunuz', 'sinirleniyorlar']
      )
    })

    it('Composed verbs', function(){
      assert.deepEqual(
        Gerund('affetmek'),
        ['affediyorum', 'affediyorsun', 'affediyor', 'affediyoruz', 'affediyorsunuz', 'affediyorlar']
      )
    })

    it('Composed verbs with spaces in between', function(){
      assert.deepEqual(
        Gerund('devam etmek'),
        ['devam ediyorum', 'devam ediyorsun', 'devam ediyor', 'devam ediyoruz', 'devam ediyorsunuz', 'devam ediyorlar']
      )
      assert.deepEqual(
        Gerund('yemin etmek'),
        ['yemin ediyorum', 'yemin ediyorsun', 'yemin ediyor', 'yemin ediyoruz', 'yemin ediyorsunuz', 'yemin ediyorlar']
      )
    })
  
  })
})