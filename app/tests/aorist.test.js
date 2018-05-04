var assert = require('assert');

const TENSES = {
  Aorist,
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
    // These verbs are: almamak, bilmemek, bulmamak, durmamak, gelmemek, görmemek, kalmamak, olmamak, ölmemek, sanmamak, vermemek, vurmamak, varmamak
    // There are thirteen irregular single syllable verbs in the Simple Present which do not take the regular tense sign -ar -er.
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
      // For verbs of one syllable which end in a consonant the positive tense sign is -ar or -er
      assert.deepEqual(Aorist('sevmemek'), ['severim','seversin','sever','severiz','seversiniz','severler'])
      assert.deepEqual(Aorist('yememek'), ['yerim','yersin','yer','yeriz','yersiniz','yerler'])
      assert.deepEqual(Aorist('yapmamak'), ['yaparım','yaparsın','yapar','yaparız','yaparsınız','yaparlar'])
      assert.deepEqual(Aorist('atmamak'), ['atarım','atarsın','atar','atarız','atarsınız','atarlar'])
      assert.deepEqual(Aorist('kokmamak'), ['kokarım','kokarsın','kokar','kokarız','kokarsınız','kokarlar'])
    })
    
    it('Two syllable verbs', function(){
      // For verbs consisting of more than one syllable the tense sign is ‑ir ‑ır ‑ür ‑ur.
      assert.deepEqual(Aorist('ağlamamak'), ['ağlarım', 'ağlarsın', 'ağlar', 'ağlarız', 'ağlarsınız', 'ağlarlar'])
      assert.deepEqual(Aorist('yürümemek'), ['yürürüm','yürürsün','yürür','yürürüz','yürürsünüz','yürürler'])
      assert.deepEqual(Aorist('çalışmamak'), ['çalışırım','çalışırsın','çalışır','çalışırız','çalışırsınız','çalışırlar'])
      assert.deepEqual(Aorist('istememek'), ['isterim','istersin','ister','isteriz','istersiniz','isterler'])
      assert.deepEqual(Aorist('konuşmamak'), ['konuşurum','konuşursun','konuşur','konuşuruz','konuşursunuz','konuşurlar'])
      assert.deepEqual(Aorist('kapatmamak'), ['kapatırım','kapatırsın','kapatır','kapatırız','kapatırsınız','kapatırlar'])
      assert.deepEqual(Aorist('anlatmamak'), ['anlatırım','anlatırsın','anlatır','anlatırız','anlatırsınız','anlatırlar'])
    })

    it('Three syllable verbs', function(){
      assert.deepEqual(
        Aorist('değiştirmemek'),
        ['değiştiririm','değiştirirsin','değiştirir','değiştiririz','değiştirirsiniz','değiştirirler']
      )

      assert.deepEqual(
        Aorist('sinirlenmemek'),
        ['sinirlenirim', 'sinirlenirsin', 'sinirlenir', 'sinirleniriz', 'sinirlenirsiniz', 'sinirlenirler']
      )
    })

    it('Composed verbs', function(){
      assert.deepEqual(Aorist('affetmemek'), ['affederim', 'affedersin', 'affeder', 'affederiz', 'affedersiniz', 'affederler'])
    })

    it('Composed verbs with spaces in between', function(){
      assert.deepEqual(
        Aorist('devam etmemek'),
        ['devam ederim', 'devam edersin', 'devam eder', 'devam ederiz', 'devam edersiniz', 'devam ederler']
      )
      assert.deepEqual(
        Aorist('yemin etmemek'),
        ['yemin ederim', 'yemin edersin', 'yemin eder', 'yemin ederiz', 'yemin edersiniz', 'yemin ederler']
      )
    })
  
  })
})