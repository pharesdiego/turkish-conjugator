var assert = require('assert');

const {
  Future
} = require('./../tenses/all')
// ç ı ğ ş ö ü
describe('Future Positive', function(){

  describe('Must conjugate properly IRREGULAR VERBS', function(){
    it('Every IRREGULAR VERB', function(){
      assert.deepEqual(Future('almak'), ['alacağım','alacaksın','alacak','alacağız','alacaksınız','alacaklar'])
      assert.deepEqual(Future('olmak'), [ 'olacağım', 'olacaksın', 'olacak', 'olacağız', 'olacaksınız', 'olacaklar' ])
      assert.deepEqual(Future('bulmak'), ['bulacağım','bulacaksın','bulacak','bulacağız','bulacaksınız','bulacaklar'])

      assert.deepEqual(Future('ölmek'), ['öleceğim','öleceksin','ölecek','öleceğiz','öleceksiniz','ölecekler'])
      assert.deepEqual(Future('bilmek'), ['bileceğim','bileceksin','bilecek','bileceğiz','bileceksiniz','bilecekler'])
      assert.deepEqual(Future('gelmek'), ['geleceğim','geleceksin','gelecek','geleceğiz','geleceksiniz','gelecekler'])
      assert.deepEqual(Future('görmek'), ['göreceğim','göreceksin','görecek','göreceğiz','göreceksiniz','görecekler'])
    })
  })
  
  describe('Must conjugate properly REGULAR VERBS', function(){

    it('One syllable verbs', function(){
      assert.deepEqual(Future('yemek'), ['yiyeceğim','yiyeceksin','yiyecek','yiyeceğiz','yiyeceksiniz','yiyecekler'])
      assert.deepEqual(Future('sevmek'), ['seveceğim','seveceksin','sevecek','seveceğiz','seveceksiniz','sevecekler'])

      assert.deepEqual(Future('atmak'), ['atacağım','atacaksın','atacak','atacağız','atacaksınız','atacaklar'])
      assert.deepEqual(Future('kokmak'), ['kokacağım','kokacaksın','kokacak','kokacağız','kokacaksınız','kokacaklar'])
      assert.deepEqual(Future('yapmak'), ['yapacağım','yapacaksın','yapacak','yapacağız','yapacaksınız','yapacaklar'])
    })
    
    it('Two syllable verbs', function(){
      assert.deepEqual(Future('yürümek'), ['yürüyeceğim','yürüyeceksin','yürüyecek','yürüyeceğiz','yürüyeceksiniz','yürüyecekler'])
      assert.deepEqual(Future('istemek'), ['isteyeceğim','isteyeceksin','isteyecek','isteyeceğiz','isteyeceksiniz','isteyecekler'])

      assert.deepEqual(Future('ağlamak'), ['ağlayacağım','ağlayacaksın','ağlayacak','ağlayacağız','ağlayacaksınız','ağlayacaklar'])
      assert.deepEqual(Future('çalışmak'), ['çalışacağım','çalışacaksın','çalışacak','çalışacağız','çalışacaksınız','çalışacaklar'])
      assert.deepEqual(Future('konuşmak'), ['konuşacağım','konuşacaksın','konuşacak','konuşacağız','konuşacaksınız','konuşacaklar'])
      assert.deepEqual(Future('kapatmak'), ['kapatacağım','kapatacaksın','kapatacak','kapatacağız','kapatacaksınız','kapatacaklar'])
      assert.deepEqual(Future('anlatmak'), ['anlatacağım','anlatacaksın','anlatacak','anlatacağız','anlatacaksınız','anlatacaklar'])
    })

    it('Three syllable verbs', function(){
      assert.deepEqual(
        Future('değiştirmek'),
        ['değiştireceğim','değiştireceksin','değiştirecek','değiştireceğiz','değiştireceksiniz','değiştirecekler']
      )

      assert.deepEqual(
        Future('sinirlenmek'),
        ['sinirleneceğim', 'sinirleneceksin', 'sinirlenecek', 'sinirleneceğiz', 'sinirleneceksiniz', 'sinirlenecekler']
      )
    })

    it('Composed verbs', function(){
      assert.deepEqual(Future('affetmek'), ['affedeceğim', 'affedeceksin', 'affedecek', 'affedeceğiz', 'affedeceksiniz', 'affedecekler'])
    })

    it('Composed verbs with spaces in between', function(){
      assert.deepEqual(
        Future('devam etmek'),
        ['devam edeceğim', 'devam edeceksin', 'devam edecek', 'devam edeceğiz', 'devam edeceksiniz', 'devam edecekler']
      )
      assert.deepEqual(
        Future('yemin etmek'),
        ['yemin edeceğim', 'yemin edeceksin', 'yemin edecek', 'yemin edeceğiz', 'yemin edeceksiniz', 'yemin edecekler']
      )
    })
  
  })
})



describe('Future Negative', function(){

  describe('Must conjugate properly IRREGULAR VERBS', function(){
    it('Every IRREGULAR VERB', function(){
      assert.deepEqual(Future('almamak'), ['almayacağım','almayacaksın','almayacak','almayacağız','almayacaksınız','almayacaklar'])
      assert.deepEqual(Future('olmamak'), [ 'olmayacağım', 'olmayacaksın', 'olmayacak', 'olmayacağız', 'olmayacaksınız', 'olmayacaklar' ])
      assert.deepEqual(Future('bulmamak'), ['bulmayacağım','bulmayacaksın','bulmayacak','bulmayacağız','bulmayacaksınız','bulmayacaklar'])

      assert.deepEqual(Future('ölmemek'), ['ölmeyeceğim','ölmeyeceksin','ölmeyecek','ölmeyeceğiz','ölmeyeceksiniz','ölmeyecekler'])
      assert.deepEqual(Future('bilmemek'), ['bilmeyeceğim','bilmeyeceksin','bilmeyecek','bilmeyeceğiz','bilmeyeceksiniz','bilmeyecekler'])
      assert.deepEqual(Future('gelmemek'), ['gelmeyeceğim','gelmeyeceksin','gelmeyecek','gelmeyeceğiz','gelmeyeceksiniz','gelmeyecekler'])
      assert.deepEqual(Future('görmemek'), ['görmeyeceğim','görmeyeceksin','görmeyecek','görmeyeceğiz','görmeyeceksiniz','görmeyecekler'])
    })
  })
  
  describe('Must conjugate properly REGULAR VERBS', function(){

    it('One syllable verbs', function(){
      assert.deepEqual(Future('yememek'), ['yemeyeceğim','yemeyeceksin','yemeyecek','yemeyeceğiz','yemeyeceksiniz','yemeyecekler'])
      assert.deepEqual(Future('sevmemek'), ['sevmeyeceğim','sevmeyeceksin','sevmeyecek','sevmeyeceğiz','sevmeyeceksiniz','sevmeyecekler'])

      assert.deepEqual(Future('atmamak'), ['atmayacağım','atmayacaksın','atmayacak','atmayacağız','atmayacaksınız','atmayacaklar'])
      assert.deepEqual(Future('kokmamak'), ['kokmayacağım','kokmayacaksın','kokmayacak','kokmayacağız','kokmayacaksınız','kokmayacaklar'])
      assert.deepEqual(Future('yapmamak'), ['yapmayacağım','yapmayacaksın','yapmayacak','yapmayacağız','yapmayacaksınız','yapmayacaklar'])
    })
    
    it('Two syllable verbs', function(){
      assert.deepEqual(Future('yürümemek'), ['yürümeyeceğim','yürümeyeceksin','yürümeyecek','yürümeyeceğiz','yürümeyeceksiniz','yürümeyecekler'])
      assert.deepEqual(Future('istememek'), ['istemeyeceğim','istemeyeceksin','istemeyecek','istemeyeceğiz','istemeyeceksiniz','istemeyecekler'])
      assert.deepEqual(Future('çalışmamak'), ['çalışmayacağım','çalışmayacaksın','çalışmayacak','çalışmayacağız','çalışmayacaksınız','çalışmayacaklar'])
      assert.deepEqual(Future('konuşmamak'), ['konuşmayacağım','konuşmayacaksın','konuşmayacak','konuşmayacağız','konuşmayacaksınız','konuşmayacaklar'])
      assert.deepEqual(Future('kapatmamak'), ['kapatmayacağım','kapatmayacaksın','kapatmayacak','kapatmayacağız','kapatmayacaksınız','kapatmayacaklar'])
      assert.deepEqual(Future('anlatmamak'), ['anlatmayacağım','anlatmayacaksın','anlatmayacak','anlatmayacağız','anlatmayacaksınız','anlatmayacaklar'])
    })

    it('Three syllable verbs', function(){
      assert.deepEqual(
        Future('değiştirmemek'),
        ['değiştirmeyeceğim','değiştirmeyeceksin','değiştirmeyecek','değiştirmeyeceğiz','değiştirmeyeceksiniz','değiştirmeyecekler']
      )

      assert.deepEqual(
        Future('sinirlenmemek'),
        ['sinirlenmeyeceğim', 'sinirlenmeyeceksin', 'sinirlenmeyecek', 'sinirlenmeyeceğiz', 'sinirlenmeyeceksiniz', 'sinirlenmeyecekler']
      )
    })

    it('Composed verbs', function(){
      assert.deepEqual(Future('affetmemek'), ['affetmeyeceğim', 'affetmeyeceksin', 'affetmeyecek', 'affetmeyeceğiz', 'affetmeyeceksiniz', 'affetmeyecekler'])
    })

    it('Composed verbs with spaces in between', function(){
      assert.deepEqual(
        Future('devam etmemek'),
        ['devam etmeyeceğim', 'devam etmeyeceksin', 'devam etmeyecek', 'devam etmeyeceğiz', 'devam etmeyeceksiniz', 'devam etmeyecekler']
      )
      assert.deepEqual(
        Future('yemin etmemek'),
        ['yemin etmeyeceğim', 'yemin etmeyeceksin', 'yemin etmeyecek', 'yemin etmeyeceğiz', 'yemin etmeyeceksiniz', 'yemin etmeyecekler']
      )
    })
  
  })
})