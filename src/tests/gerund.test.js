var assert = require('assert');
const TENSES = ({ Gerund } = require('./../tenses/all'));

describe('Gerund', function() {
  describe('Must conjugate properly IRREGULAR VERBS', function() {
    // These verbs are: almak, bilmek, bulmak, durmak, gelmek, görmek, kalmak, olmak, ölmek, sanmak, vermek, vurmak, varmak
    // iyor, uyor, üyor, ıyor
    it('Every IRREGULAR VERB', function() {
      assert.deepEqual(Gerund('bilmek'), [
        'biliyorum',
        'biliyorsun',
        'biliyor',
        'biliyoruz',
        'biliyorsunuz',
        'biliyorlar'
      ]);
      assert.deepEqual(Gerund('bulmak'), [
        'buluyorum',
        'buluyorsun',
        'buluyor',
        'buluyoruz',
        'buluyorsunuz',
        'buluyorlar'
      ]);
      assert.deepEqual(Gerund('durmak'), [
        'duruyorum',
        'duruyorsun',
        'duruyor',
        'duruyoruz',
        'duruyorsunuz',
        'duruyorlar'
      ]);
      assert.deepEqual(Gerund('gelmek'), [
        'geliyorum',
        'geliyorsun',
        'geliyor',
        'geliyoruz',
        'geliyorsunuz',
        'geliyorlar'
      ]);
      assert.deepEqual(Gerund('görmek'), [
        'görüyorum',
        'görüyorsun',
        'görüyor',
        'görüyoruz',
        'görüyorsunuz',
        'görüyorlar'
      ]);
      assert.deepEqual(Gerund('kalmak'), [
        'kalıyorum',
        'kalıyorsun',
        'kalıyor',
        'kalıyoruz',
        'kalıyorsunuz',
        'kalıyorlar'
      ]);
      assert.deepEqual(Gerund('sanmak'), [
        'sanıyorum',
        'sanıyorsun',
        'sanıyor',
        'sanıyoruz',
        'sanıyorsunuz',
        'sanıyorlar'
      ]);
      assert.deepEqual(Gerund('vermek'), [
        'veriyorum',
        'veriyorsun',
        'veriyor',
        'veriyoruz',
        'veriyorsunuz',
        'veriyorlar'
      ]);
      assert.deepEqual(Gerund('vurmak'), [
        'vuruyorum',
        'vuruyorsun',
        'vuruyor',
        'vuruyoruz',
        'vuruyorsunuz',
        'vuruyorlar'
      ]);
      assert.deepEqual(Gerund('varmak'), [
        'varıyorum',
        'varıyorsun',
        'varıyor',
        'varıyoruz',
        'varıyorsunuz',
        'varıyorlar'
      ]);
      assert.deepEqual(Gerund('olmak'), [
        'oluyorum',
        'oluyorsun',
        'oluyor',
        'oluyoruz',
        'oluyorsunuz',
        'oluyorlar'
      ]);
      assert.deepEqual(Gerund('almak'), [
        'alıyorum',
        'alıyorsun',
        'alıyor',
        'alıyoruz',
        'alıyorsunuz',
        'alıyorlar'
      ]);
      assert.deepEqual(Gerund('ölmek'), [
        'ölüyorum',
        'ölüyorsun',
        'ölüyor',
        'ölüyoruz',
        'ölüyorsunuz',
        'ölüyorlar'
      ]);
    });
  });

  describe('Must conjugate properly REGULAR VERBS', function() {
    it('One syllable verbs', function() {
      assert.deepEqual(Gerund('yemek'), [
        'yiyorum',
        'yiyorsun',
        'yiyor',
        'yiyoruz',
        'yiyorsunuz',
        'yiyorlar'
      ]);
      assert.deepEqual(Gerund('atmak'), [
        'atıyorum',
        'atıyorsun',
        'atıyor',
        'atıyoruz',
        'atıyorsunuz',
        'atıyorlar'
      ]);
      assert.deepEqual(Gerund('yapmak'), [
        'yapıyorum',
        'yapıyorsun',
        'yapıyor',
        'yapıyoruz',
        'yapıyorsunuz',
        'yapıyorlar'
      ]);
      assert.deepEqual(Gerund('sevmek'), [
        'seviyorum',
        'seviyorsun',
        'seviyor',
        'seviyoruz',
        'seviyorsunuz',
        'seviyorlar'
      ]);
    });

    it('Two syllable verbs', function() {
      assert.deepEqual(Gerund('yürümek'), [
        'yürüyorum',
        'yürüyorsun',
        'yürüyor',
        'yürüyoruz',
        'yürüyorsunuz',
        'yürüyorlar'
      ]);
      assert.deepEqual(Gerund('istemek'), [
        'istiyorum',
        'istiyorsun',
        'istiyor',
        'istiyoruz',
        'istiyorsunuz',
        'istiyorlar'
      ]);
      assert.deepEqual(Gerund('ağlamak'), [
        'ağlıyorum',
        'ağlıyorsun',
        'ağlıyor',
        'ağlıyoruz',
        'ağlıyorsunuz',
        'ağlıyorlar'
      ]);
      assert.deepEqual(Gerund('konuşmak'), [
        'konuşuyorum',
        'konuşuyorsun',
        'konuşuyor',
        'konuşuyoruz',
        'konuşuyorsunuz',
        'konuşuyorlar'
      ]);
      assert.deepEqual(Gerund('çalışmak'), [
        'çalışıyorum',
        'çalışıyorsun',
        'çalışıyor',
        'çalışıyoruz',
        'çalışıyorsunuz',
        'çalışıyorlar'
      ]);
      assert.deepEqual(Gerund('kapatmak'), [
        'kapatıyorum',
        'kapatıyorsun',
        'kapatıyor',
        'kapatıyoruz',
        'kapatıyorsunuz',
        'kapatıyorlar'
      ]);
    });

    it('Three syllable verbs', function() {
      assert.deepEqual(Gerund('değiştirmek'), [
        'değiştiriyorum',
        'değiştiriyorsun',
        'değiştiriyor',
        'değiştiriyoruz',
        'değiştiriyorsunuz',
        'değiştiriyorlar'
      ]);

      assert.deepEqual(Gerund('sinirlenmek'), [
        'sinirleniyorum',
        'sinirleniyorsun',
        'sinirleniyor',
        'sinirleniyoruz',
        'sinirleniyorsunuz',
        'sinirleniyorlar'
      ]);
    });

    it('Composed verbs', function() {
      assert.deepEqual(Gerund('affetmek'), [
        'affediyorum',
        'affediyorsun',
        'affediyor',
        'affediyoruz',
        'affediyorsunuz',
        'affediyorlar'
      ]);
    });

    it('Composed verbs with spaces in between', function() {
      assert.deepEqual(Gerund('devam etmek'), [
        'devam ediyorum',
        'devam ediyorsun',
        'devam ediyor',
        'devam ediyoruz',
        'devam ediyorsunuz',
        'devam ediyorlar'
      ]);
      assert.deepEqual(Gerund('yemin etmek'), [
        'yemin ediyorum',
        'yemin ediyorsun',
        'yemin ediyor',
        'yemin ediyoruz',
        'yemin ediyorsunuz',
        'yemin ediyorlar'
      ]);
    });
  });
});

describe('Gerund Negative', function() {
  describe('Must conjugate properly IRREGULAR VERBS', function() {
    // These verbs are: almamak, bilmemek, bulmamak, durmamak, gelmemek, görmemek, kalmamak, olmamak, ölmemek, sanmamak, vermemek, vurmamak, varmamak
    // iyor, uyor, üyor, ıyor
    it('Every IRREGULAR VERB', function() {
      assert.deepEqual(Gerund('bilmemek'), [
        'bilmiyorum',
        'bilmiyorsun',
        'bilmiyor',
        'bilmiyoruz',
        'bilmiyorsunuz',
        'bilmiyorlar'
      ]);
      assert.deepEqual(Gerund('bulmamak'), [
        'bulmuyorum',
        'bulmuyorsun',
        'bulmuyor',
        'bulmuyoruz',
        'bulmuyorsunuz',
        'bulmuyorlar'
      ]);
      assert.deepEqual(Gerund('durmamak'), [
        'durmuyorum',
        'durmuyorsun',
        'durmuyor',
        'durmuyoruz',
        'durmuyorsunuz',
        'durmuyorlar'
      ]);
      assert.deepEqual(Gerund('gelmemek'), [
        'gelmiyorum',
        'gelmiyorsun',
        'gelmiyor',
        'gelmiyoruz',
        'gelmiyorsunuz',
        'gelmiyorlar'
      ]);
      assert.deepEqual(Gerund('görmemek'), [
        'görmüyorum',
        'görmüyorsun',
        'görmüyor',
        'görmüyoruz',
        'görmüyorsunuz',
        'görmüyorlar'
      ]);
      assert.deepEqual(Gerund('kalmamak'), [
        'kalmıyorum',
        'kalmıyorsun',
        'kalmıyor',
        'kalmıyoruz',
        'kalmıyorsunuz',
        'kalmıyorlar'
      ]);
      assert.deepEqual(Gerund('sanmamak'), [
        'sanmıyorum',
        'sanmıyorsun',
        'sanmıyor',
        'sanmıyoruz',
        'sanmıyorsunuz',
        'sanmıyorlar'
      ]);
      assert.deepEqual(Gerund('vermemek'), [
        'vermiyorum',
        'vermiyorsun',
        'vermiyor',
        'vermiyoruz',
        'vermiyorsunuz',
        'vermiyorlar'
      ]);
      assert.deepEqual(Gerund('vurmamak'), [
        'vurmuyorum',
        'vurmuyorsun',
        'vurmuyor',
        'vurmuyoruz',
        'vurmuyorsunuz',
        'vurmuyorlar'
      ]);
      assert.deepEqual(Gerund('varmamak'), [
        'varmıyorum',
        'varmıyorsun',
        'varmıyor',
        'varmıyoruz',
        'varmıyorsunuz',
        'varmıyorlar'
      ]);
      assert.deepEqual(Gerund('almamak'), [
        'almıyorum',
        'almıyorsun',
        'almıyor',
        'almıyoruz',
        'almıyorsunuz',
        'almıyorlar'
      ]);
      assert.deepEqual(Gerund('ölmemek'), [
        'ölmüyorum',
        'ölmüyorsun',
        'ölmüyor',
        'ölmüyoruz',
        'ölmüyorsunuz',
        'ölmüyorlar'
      ]);
      assert.deepEqual(Gerund('olmamak'), [
        'olmuyorum',
        'olmuyorsun',
        'olmuyor',
        'olmuyoruz',
        'olmuyorsunuz',
        'olmuyorlar'
      ]);
    });
  });

  describe('Must conjugate properly REGULAR VERBS', function() {
    it('One syllable verbs', function() {
      assert.deepEqual(Gerund('yememek'), [
        'yemiyorum',
        'yemiyorsun',
        'yemiyor',
        'yemiyoruz',
        'yemiyorsunuz',
        'yemiyorlar'
      ]);
      assert.deepEqual(Gerund('atmamak'), [
        'atmıyorum',
        'atmıyorsun',
        'atmıyor',
        'atmıyoruz',
        'atmıyorsunuz',
        'atmıyorlar'
      ]);
      assert.deepEqual(Gerund('yapmamak'), [
        'yapmıyorum',
        'yapmıyorsun',
        'yapmıyor',
        'yapmıyoruz',
        'yapmıyorsunuz',
        'yapmıyorlar'
      ]);
      assert.deepEqual(Gerund('sevmemek'), [
        'sevmiyorum',
        'sevmiyorsun',
        'sevmiyor',
        'sevmiyoruz',
        'sevmiyorsunuz',
        'sevmiyorlar'
      ]);
    });

    it('Two syllable verbs', function() {
      assert.deepEqual(Gerund('yürümemek'), [
        'yürümüyorum',
        'yürümüyorsun',
        'yürümüyor',
        'yürümüyoruz',
        'yürümüyorsunuz',
        'yürümüyorlar'
      ]);
      assert.deepEqual(Gerund('istememek'), [
        'istemiyorum',
        'istemiyorsun',
        'istemiyor',
        'istemiyoruz',
        'istemiyorsunuz',
        'istemiyorlar'
      ]);
      assert.deepEqual(Gerund('ağlamamak'), [
        'ağlamıyorum',
        'ağlamıyorsun',
        'ağlamıyor',
        'ağlamıyoruz',
        'ağlamıyorsunuz',
        'ağlamıyorlar'
      ]);
      assert.deepEqual(Gerund('konuşmamak'), [
        'konuşmuyorum',
        'konuşmuyorsun',
        'konuşmuyor',
        'konuşmuyoruz',
        'konuşmuyorsunuz',
        'konuşmuyorlar'
      ]);
      assert.deepEqual(Gerund('çalışmamak'), [
        'çalışmıyorum',
        'çalışmıyorsun',
        'çalışmıyor',
        'çalışmıyoruz',
        'çalışmıyorsunuz',
        'çalışmıyorlar'
      ]);
      assert.deepEqual(Gerund('kapatmamak'), [
        'kapatmıyorum',
        'kapatmıyorsun',
        'kapatmıyor',
        'kapatmıyoruz',
        'kapatmıyorsunuz',
        'kapatmıyorlar'
      ]);
    });

    it('Three syllable verbs', function() {
      assert.deepEqual(Gerund('değiştirmemek'), [
        'değiştirmiyorum',
        'değiştirmiyorsun',
        'değiştirmiyor',
        'değiştirmiyoruz',
        'değiştirmiyorsunuz',
        'değiştirmiyorlar'
      ]);

      assert.deepEqual(Gerund('sinirlenmemek'), [
        'sinirlenmiyorum',
        'sinirlenmiyorsun',
        'sinirlenmiyor',
        'sinirlenmiyoruz',
        'sinirlenmiyorsunuz',
        'sinirlenmiyorlar'
      ]);
    });

    it('Composed verbs', function() {
      assert.deepEqual(Gerund('affetmemek'), [
        'affetmiyorum',
        'affetmiyorsun',
        'affetmiyor',
        'affetmiyoruz',
        'affetmiyorsunuz',
        'affetmiyorlar'
      ]);
    });

    it('Composed verbs with spaces in between', function() {
      assert.deepEqual(Gerund('devam etmemek'), [
        'devam etmiyorum',
        'devam etmiyorsun',
        'devam etmiyor',
        'devam etmiyoruz',
        'devam etmiyorsunuz',
        'devam etmiyorlar'
      ]);
      assert.deepEqual(Gerund('yemin etmemek'), [
        'yemin etmiyorum',
        'yemin etmiyorsun',
        'yemin etmiyor',
        'yemin etmiyoruz',
        'yemin etmiyorsunuz',
        'yemin etmiyorlar'
      ]);
    });
  });
});
