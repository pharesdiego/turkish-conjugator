var assert = require('assert');

const {
  Future
} = require('./../tenses/all')
// ç ı ğ ş ö ü
describe('Future Positive', function(){

  describe('Must conjugate properly IRREGULAR VERBS', function(){
    it('Every IRREGULAR VERB', function(){
      // acağım eceğim
      // acağız eceğiz
      // acaksınız eceksiniz
      // acaklar ecekler
      assert.deepEqual(Future('almak'), ['alacağım','alacaksın','alacak','alacaksınız','alacağız','alacaklar'])
      assert.deepEqual(Future('olmak'), [ 'olacağım', 'olacaksın', 'olacak', 'olacaksınız', 'olacağız', 'olacaklar' ])
      assert.deepEqual(Future('bulmak'), ['bulacağım','bulacaksın','bulacak','bulacaksınız','bulacağız','bulacaklar'])

      assert.deepEqual(Future('ölmek'), ['öleceğim','öleceksin','ölecek','öleceğiz','öleceksiniz','ölecekler'])
      assert.deepEqual(Future('bilmek'), ['bileceğim','bileceksin','bilecek','bileceğiz','bileceksiniz','bilecekler'])
      assert.deepEqual(Future('gelmek'), ['geleceğim','geleceksin','gelecek','geleceğiz','geleceksiniz','gelecekler'])
      assert.deepEqual(Future('görmek'), ['göreceğim','göreceksin','görecek','göreceğiz','göreceksiniz','görecekler'])
    })
  })
  
  describe('Must conjugate properly REGULAR VERBS', function(){

    it('One syllable verbs', function(){
      // For verbs of one syllable which end in a consonant the positive tense sign is -ar or -er
      assert.deepEqual(Future('yemek'), ['yiyeceğim','yiyeceksin','yiyecek','yiyeceğiz','yiyeceksiniz','yiyecekler'])
      assert.deepEqual(Future('sevmek'), ['seveceğim','seveceksin','sevecek','seveceğiz','seveceksiniz','sevecekler'])

      assert.deepEqual(Future('atmak'), ['atacağım','atacaksın','atacak','atacağız','atacaksınız','atacaklar'])
      assert.deepEqual(Future('kokmak'), ['kokacağım','kokacaksın','kokacak','kokacağız','kokacaksınız','kokacaklar'])
      assert.deepEqual(Future('yapmak'), ['yapacağım','yapacaksın','yapacak','yapacağız','yapacaksınız','yapacaklar'])
    })
    
    it('Two syllable verbs', function(){
      // For verbs consisting of more than one syllable the tense sign is ‑ir ‑ır ‑ür ‑ur.
      assert.deepEqual(Future('yürümek'), ['yürüyeceğim','yürüyeceksin','yürüyecek','yürüyeceğiz','yürüyeceksiniz','yürüyecekler'])
      assert.deepEqual(Future('istemek'), ['isteyeceğim','isteyeceksin','istecek','isteyeceğiz','isteyeceksiniz','isteyecekler'])

      assert.deepEqual(Future('ağlamak'), ['ağlayacağım','ağlayacaksın','ağlayacak','ağlacağız','ağlayacaksınız','ağlayacaklar'])
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



// describe('Future Negative', function(){

//   describe('Must conjugate properly IRREGULAR VERBS', function(){
//     it('Every IRREGULAR VERB', function(){
      
//       assert.deepEqual(Future('almak'), ['alırım','alırsın','alır','alırız','alırsınız','alırlar'])
//       assert.deepEqual(Future('bilmek'), ['bilirim','bilirsin','bilir','biliriz','bilirsiniz','bilirler'])
//       assert.deepEqual(Future('bulmak'), ['bulurum','bulursun','bulur','buluruz','bulursunuz','bulurlar'])
//       assert.deepEqual(Future('gelmek'), ['gelirim','gelirsin','gelir','geliriz','gelirsiniz','gelirler'])
//       assert.deepEqual(Future('görmek'), ['görürüm','görürsün','görür','görürüz','görürsünüz','görürler'])
//       assert.deepEqual(Future('olmak'), [ 'olurum', 'olursun', 'olur', 'oluruz', 'olursunuz', 'olurlar' ])
//       assert.deepEqual(Future('ölmek'), ['ölürüm','ölürsün','ölür','ölürüz','ölürsünüz','ölürler'])
//     })
//   })
  
//   describe('Must conjugate properly REGULAR VERBS', function(){

//     it('One syllable verbs', function(){
//       assert.deepEqual(Future('sevmemek'), ['sevmem','sevmezsin','sevmez','sevmeyiz','sevmezsiniz','sevmezler'])
//       assert.deepEqual(Future('yememek'), ['yemem','yemezsin','yemez','yemeyiz','yemezsiniz','yemezler'])

//       assert.deepEqual(Future('atmamak'), ['atmam','atmazsın','atmaz','atmayız','atmazsınız','atmazlar'])
//       assert.deepEqual(Future('kokmamak'), ['kokmam','kokmazsın','kokmaz','kokmayız','kokmazsınız','kokmazlar'])
//       assert.deepEqual(Future('yapmamak'), ['yapmam','yapmazsın','yapmaz','yapmayız','yapmazsınız','yapmazlar'])
//     })
    
//     it('Two syllable verbs', function(){
//       assert.deepEqual(Future('çalışmamak'), ['çalışmam','çalışmazsın','çalışmaz','çalışmayız','çalışmazsınız','çalışmazlar'])
//       assert.deepEqual(Future('konuşmamak'), ['konuşmam','konuşmazsın','konuşmaz','konuşmayız','konuşmazsınız','konuşmazlar'])
//       assert.deepEqual(Future('kapatmamak'), ['kapatmam','kapatmazsın','kapatmaz','kapatmayız','kapatmazsınız','kapatmazlar'])
//       assert.deepEqual(Future('anlatmamak'), ['anlatmam','anlatmazsın','anlatmaz','anlatmayız','anlatmazsınız','anlatmazlar'])
//       assert.deepEqual(Future('ağlamamak'), ['ağlamam', 'ağlamazsın', 'ağlamaz', 'ağlamayız', 'ağlamazsınız', 'ağlamazlar'])
      
//       assert.deepEqual(Future('yürümemek'), ['yürümem','yürümezsin','yürümez','yürümeyiz','yürümezsiniz','yürümezler'])
//       assert.deepEqual(Future('istememek'), ['istemem','istemezsin','istemez','istemeyiz','istemezsiniz','istemezler'])
//     })

//     it('Three syllable verbs', function(){
//       assert.deepEqual(
//         Future('değiştirmemek'),
//         ['değiştirmem','değiştirmezsin','değiştirmez','değiştirmeyiz','değiştirmezsiniz','değiştirmezler']
//       )

//       assert.deepEqual(
//         Future('sinirlenmemek'),
//         ['sinirlenmem', 'sinirlenmezsin', 'sinirlenmez', 'sinirlenmeyiz', 'sinirlenmezsiniz', 'sinirlenmezler']
//       )
//     })

//     it('Composed verbs', function(){
//       assert.deepEqual(Future('affetmemek'), ['affetmem', 'affetmezsin', 'affetmez', 'affetmeyiz', 'affetmezsiniz', 'affetmezler'])
//     })

//     it('Composed verbs with spaces in between', function(){
//       assert.deepEqual(
//         Future('devam etmemek'),
//         ['devam etmem', 'devam etmezsin', 'devam etmez', 'devam etmeyiz', 'devam etmezsiniz', 'devam etmezler']
//       )
//       assert.deepEqual(
//         Future('yemin etmemek'),
//         ['yemin etmem', 'yemin etmezsin', 'yemin etmez', 'yemin etmeyiz', 'yemin etmezsiniz', 'yemin etmezler']
//       )
//     })
  
//   })
// })