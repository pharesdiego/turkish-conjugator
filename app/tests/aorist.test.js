var assert = require('assert');

const {
  Aorist
} = require('./../tenses/all')
// ç ı ğ ş ö ü
describe('Aorist Positive', function(){

  describe('Must conjugate properly IRREGULAR VERBS', function(){
    // These verbs are: almak, bilmek, bulmak, durmak, gelmek, görmek, kalmak, olmak, ölmek, sanmak, vermek, vurmak, varmak
    // There are thirteen irregular single syllable verbs in the Simple Present which do not take the regular tense sign -ar -er.
    it('Every IRREGULAR VERB', function(){
      assert.deepEqual(Aorist('almak'), ['alırım','alırsın','alır','alırız','alırsınız','alırlar'])
      assert.deepEqual(Aorist('bilmek'), ['bilirim','bilirsin','bilir','biliriz','bilirsiniz','bilirler'])
      assert.deepEqual(Aorist('bulmak'), ['bulurum','bulursun','bulur','buluruz','bulursunuz','bulurlar'])
      assert.deepEqual(Aorist('durmak'), ['dururum','durursun','durur','dururuz','durursunuz','dururlar'])
      assert.deepEqual(Aorist('gelmek'), ['gelirim','gelirsin','gelir','geliriz','gelirsiniz','gelirler'])
      assert.deepEqual(Aorist('görmek'), ['görürüm','görürsün','görür','görürüz','görürsünüz','görürler'])
      assert.deepEqual(Aorist('kalmak'), ['kalırım','kalırsın','kalır','kalırız','kalırsınız','kalırlar'])
      assert.deepEqual(Aorist('olmak'), [ 'olurum', 'olursun', 'olur', 'oluruz', 'olursunuz', 'olurlar' ])
      assert.deepEqual(Aorist('ölmek'), ['ölürüm','ölürsün','ölür','ölürüz','ölürsünüz','ölürler'])
      assert.deepEqual(Aorist('sanmak'), ['sanırım','sanırsın','sanır','sanırız','sanırsınız','sanırlar'])
      assert.deepEqual(Aorist('vermek'), ['veririm','verirsin','verir','veririz','verirsiniz','verirler'])
      assert.deepEqual(Aorist('vurmak'), ['vururum','vurursun','vurur','vururuz','vurursunuz','vururlar'])
      assert.deepEqual(Aorist('varmak'), ['varırım','varırsın','varır','varırız','varırsınız','varırlar'])
    })
  })
  
  describe('Must conjugate properly REGULAR VERBS', function(){

    it('One syllable verbs', function(){
      // For verbs of one syllable which end in a consonant the positive tense sign is -ar or -er
      assert.deepEqual(Aorist('sevmek'), ['severim','seversin','sever','severiz','seversiniz','severler'])
      assert.deepEqual(Aorist('yemek'), ['yerim','yersin','yer','yeriz','yersiniz','yerler'])
      assert.deepEqual(Aorist('yapmak'), ['yaparım','yaparsın','yapar','yaparız','yaparsınız','yaparlar'])
      assert.deepEqual(Aorist('atmak'), ['atarım','atarsın','atar','atarız','atarsınız','atarlar'])
      assert.deepEqual(Aorist('kokmak'), ['kokarım','kokarsın','kokar','kokarız','kokarsınız','kokarlar'])
    })
    
    it('Two syllable verbs', function(){
      // For verbs consisting of more than one syllable the tense sign is ‑ir ‑ır ‑ür ‑ur.
      assert.deepEqual(Aorist('ağlamak'), ['ağlarım', 'ağlarsın', 'ağlar', 'ağlarız', 'ağlarsınız', 'ağlarlar'])
      assert.deepEqual(Aorist('yürümek'), ['yürürüm','yürürsün','yürür','yürürüz','yürürsünüz','yürürler'])
      assert.deepEqual(Aorist('çalışmak'), ['çalışırım','çalışırsın','çalışır','çalışırız','çalışırsınız','çalışırlar'])
      assert.deepEqual(Aorist('istemek'), ['isterim','istersin','ister','isteriz','istersiniz','isterler'])
      assert.deepEqual(Aorist('konuşmak'), ['konuşurum','konuşursun','konuşur','konuşuruz','konuşursunuz','konuşurlar'])
      assert.deepEqual(Aorist('kapatmak'), ['kapatırım','kapatırsın','kapatır','kapatırız','kapatırsınız','kapatırlar'])
      assert.deepEqual(Aorist('anlatmak'), ['anlatırım','anlatırsın','anlatır','anlatırız','anlatırsınız','anlatırlar'])
    })

    it('Three syllable verbs', function(){
      assert.deepEqual(
        Aorist('değiştirmek'),
        ['değiştiririm','değiştirirsin','değiştirir','değiştiririz','değiştirirsiniz','değiştirirler']
      )

      assert.deepEqual(
        Aorist('sinirlenmek'),
        ['sinirlenirim', 'sinirlenirsin', 'sinirlenir', 'sinirleniriz', 'sinirlenirsiniz', 'sinirlenirler']
      )
    })

    it('Composed verbs', function(){
      assert.deepEqual(Aorist('affetmek'), ['affederim', 'affedersin', 'affeder', 'affederiz', 'affedersiniz', 'affederler'])
    })

    it('Composed verbs with spaces in between', function(){
      assert.deepEqual(
        Aorist('devam etmek'),
        ['devam ederim', 'devam edersin', 'devam eder', 'devam ederiz', 'devam edersiniz', 'devam ederler']
      )
      assert.deepEqual(
        Aorist('yemin etmek'),
        ['yemin ederim', 'yemin edersin', 'yemin eder', 'yemin ederiz', 'yemin edersiniz', 'yemin ederler']
      )
    })
  
  })
})



describe('Aorist Negative', function(){

  describe('Must conjugate properly IRREGULAR VERBS', function(){
    it('Every IRREGULAR VERB', function(){
      
      assert.deepEqual(Aorist('bulmamak'), ['bulmam','bulmazsın','bulmaz','bulmayız','bulmazsınız','bulmazlar'])
      assert.deepEqual(Aorist('durmamak'), ['durmam','durmazsın','durmaz','durmayız','durmazsınız','durmazlar'])
      assert.deepEqual(Aorist('kalmamak'), ['kalmam','kalmazsın','kalmaz','kalmayız','kalmazsınız','kalmazlar'])
      assert.deepEqual(Aorist('sanmamak'), ['sanmam','sanmazsın','sanmaz','sanmayız','sanmazsınız','sanmazlar'])
      assert.deepEqual(Aorist('vurmamak'), ['vurmam','vurmazsın','vurmaz','vurmayız','vurmazsınız','vurmazlar'])
      assert.deepEqual(Aorist('varmamak'), ['varmam','varmazsın','varmaz','varmayız','varmazsınız','varmazlar'])
      assert.deepEqual(Aorist('olmamak'), ['olmam', 'olmazsın', 'olmaz', 'olmayız', 'olmazsınız', 'olmazlar' ])
      assert.deepEqual(Aorist('almamak'), ['almam','almazsın','almaz','almayız','almazsınız','almazlar'])
      
      assert.deepEqual(Aorist('bilmemek'), ['bilmem','bilmezsin','bilmez','bilmeyiz','bilmezsiniz','bilmezler'])
      assert.deepEqual(Aorist('gelmemek'), ['gelmem','gelmezsin','gelmez','gelmeyiz','gelmezsiniz','gelmezler'])
      assert.deepEqual(Aorist('görmemek'), ['görmem','görmezsin','görmez','görmeyiz','görmezsiniz','görmezler'])
      assert.deepEqual(Aorist('vermemek'), ['vermem','vermezsin','vermez','vermeyiz','vermezsiniz','vermezler'])
      assert.deepEqual(Aorist('ölmemek'), ['ölmem','ölmezsin','ölmez','ölmeyiz','ölmezsiniz','ölmezler'])
    })
  })
  
  describe('Must conjugate properly REGULAR VERBS', function(){

    it('One syllable verbs', function(){
      assert.deepEqual(Aorist('sevmemek'), ['sevmem','sevmezsin','sevmez','sevmeyiz','sevmezsiniz','sevmezler'])
      assert.deepEqual(Aorist('yememek'), ['yemem','yemezsin','yemez','yemeyiz','yemezsiniz','yemezler'])

      assert.deepEqual(Aorist('atmamak'), ['atmam','atmazsın','atmaz','atmayız','atmazsınız','atmazlar'])
      assert.deepEqual(Aorist('kokmamak'), ['kokmam','kokmazsın','kokmaz','kokmayız','kokmazsınız','kokmazlar'])
      assert.deepEqual(Aorist('yapmamak'), ['yapmam','yapmazsın','yapmaz','yapmayız','yapmazsınız','yapmazlar'])
    })
    
    it('Two syllable verbs', function(){
      assert.deepEqual(Aorist('çalışmamak'), ['çalışmam','çalışmazsın','çalışmaz','çalışmayız','çalışmazsınız','çalışmazlar'])
      assert.deepEqual(Aorist('konuşmamak'), ['konuşmam','konuşmazsın','konuşmaz','konuşmayız','konuşmazsınız','konuşmazlar'])
      assert.deepEqual(Aorist('kapatmamak'), ['kapatmam','kapatmazsın','kapatmaz','kapatmayız','kapatmazsınız','kapatmazlar'])
      assert.deepEqual(Aorist('anlatmamak'), ['anlatmam','anlatmazsın','anlatmaz','anlatmayız','anlatmazsınız','anlatmazlar'])
      assert.deepEqual(Aorist('ağlamamak'), ['ağlamam', 'ağlamazsın', 'ağlamaz', 'ağlamayız', 'ağlamazsınız', 'ağlamazlar'])
      
      assert.deepEqual(Aorist('yürümemek'), ['yürümem','yürümezsin','yürümez','yürümeyiz','yürümezsiniz','yürümezler'])
      assert.deepEqual(Aorist('istememek'), ['istemem','istemezsin','istemez','istemeyiz','istemezsiniz','istemezler'])
    })

    it('Three syllable verbs', function(){
      assert.deepEqual(
        Aorist('değiştirmemek'),
        ['değiştirmem','değiştirmezsin','değiştirmez','değiştirmeyiz','değiştirmezsiniz','değiştirmezler']
      )

      assert.deepEqual(
        Aorist('sinirlenmemek'),
        ['sinirlenmem', 'sinirlenmezsin', 'sinirlenmez', 'sinirlenmeyiz', 'sinirlenmezsiniz', 'sinirlenmezler']
      )
    })

    it('Composed verbs', function(){
      assert.deepEqual(Aorist('affetmemek'), ['affetmem', 'affetmezsin', 'affetmez', 'affetmeyiz', 'affetmezsiniz', 'affetmezler'])
    })

    it('Composed verbs with spaces in between', function(){
      assert.deepEqual(
        Aorist('devam etmemek'),
        ['devam etmem', 'devam etmezsin', 'devam etmez', 'devam etmeyiz', 'devam etmezsiniz', 'devam etmezler']
      )
      assert.deepEqual(
        Aorist('yemin etmemek'),
        ['yemin etmem', 'yemin etmezsin', 'yemin etmez', 'yemin etmeyiz', 'yemin etmezsiniz', 'yemin etmezler']
      )
    })
  
  })
})