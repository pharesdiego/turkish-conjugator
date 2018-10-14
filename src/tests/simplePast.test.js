var assert = require('assert');

const { SimplePast } = require('./../tenses/all');
// ç ı ğ ş ö ü
describe('SimplePast Positive', function() {
  describe('Must conjugate properly IRREGULAR VERBS', function() {
    // These verbs are: almak, bilmek, bulmak, durmak, gelmek, görmek, kalmak, olmak, ölmek, sanmak, vermek, vurmak, varmak
    // There are thirteen irregular single syllable verbs in the Simple Present which do not take the regular tense sign -ar -er.
    it('Every IRREGULAR VERB', function() {
      assert.deepEqual(SimplePast('almak'), [
        'aldım',
        'aldın',
        'aldı',
        'aldık',
        'aldınız',
        'aldılar'
      ]);
      assert.deepEqual(SimplePast('bilmek'), [
        'bildim',
        'bildin',
        'bildi',
        'bildik',
        'bildiniz',
        'bildiler'
      ]);
    });
  });

  describe('Must conjugate properly REGULAR VERBS', function() {
    it('One syllable verbs', function() {
      // For verbs of one syllable which end in a consonant the positive tense sign is -ar or -er
      assert.deepEqual(SimplePast('sevmek'), [
        'sevdim',
        'sevdin',
        'sevdi',
        'sevdik',
        'sevdiniz',
        'sevdiler'
      ]);
      assert.deepEqual(SimplePast('kokmak'), [
        'koktum',
        'koktun',
        'koktu',
        'koktuk',
        'koktunuz',
        'koktular'
      ]);
      assert.deepEqual(SimplePast('gitmek'), [
        'gittim',
        'gittin',
        'gitti',
        'gittik',
        'gittiniz',
        'gittiler'
      ]);
    });

    it('Two syllable verbs', function() {
      // For verbs consisting of more than one syllable the tense sign is ‑ir ‑ır ‑ür ‑ur.
      assert.deepEqual(SimplePast('ağlamak'), [
        'ağladım',
        'ağladın',
        'ağladı',
        'ağladık',
        'ağladınız',
        'ağladılar'
      ]);
      assert.deepEqual(SimplePast('anlatmak'), [
        'anlattım',
        'anlattın',
        'anlattı',
        'anlattık',
        'anlattınız',
        'anlattılar'
      ]);
    });

    it('Three syllable verbs', function() {
      assert.deepEqual(SimplePast('değiştirmek'), [
        'değiştirdim',
        'değiştirdin',
        'değiştirdi',
        'değiştirdik',
        'değiştirdiniz',
        'değiştirdiler'
      ]);
    });

    it('Composed verbs', function() {
      assert.deepEqual(SimplePast('affetmek'), [
        'affettim',
        'affettin',
        'affetti',
        'affettik',
        'affettiniz',
        'affettiler'
      ]);
    });

    it('Composed verbs with spaces in between', function() {
      assert.deepEqual(SimplePast('devam etmek'), [
        'devam ettim',
        'devam ettin',
        'devam etti',
        'devam ettik',
        'devam ettiniz',
        'devam ettiler'
      ]);
    });
  });
});

describe('SimplePast Negative', function() {
  describe('Must conjugate properly IRREGULAR VERBS', function() {
    it('Every IRREGULAR VERB', function() {
      assert.deepEqual(SimplePast('bulmamak'), [
        'bulmadım',
        'bulmadın',
        'bulmadı',
        'bulmadık',
        'bulmadınız',
        'bulmadılar'
      ]);
      assert.deepEqual(SimplePast('ölmemek'), [
        'ölmedim',
        'ölmedin',
        'ölmedi',
        'ölmedik',
        'ölmediniz',
        'ölmediler'
      ]);
    });
  });

  describe('Must conjugate properly REGULAR VERBS', function() {
    it('One syllable verbs', function() {
      assert.deepEqual(SimplePast('sevmemek'), [
        'sevmedim',
        'sevmedin',
        'sevmedi',
        'sevmedik',
        'sevmediniz',
        'sevmediler'
      ]);
      assert.deepEqual(SimplePast('yapmamak'), [
        'yapmadım',
        'yapmadın',
        'yapmadı',
        'yapmadık',
        'yapmadınız',
        'yapmadılar'
      ]);
    });

    it('Two syllable verbs', function() {
      assert.deepEqual(SimplePast('konuşmamak'), [
        'konuşmadım',
        'konuşmadın',
        'konuşmadı',
        'konuşmadık',
        'konuşmadınız',
        'konuşmadılar'
      ]);
      assert.deepEqual(SimplePast('istememek'), [
        'istemedim',
        'istemedin',
        'istemedi',
        'istemedik',
        'istemediniz',
        'istemediler'
      ]);
    });

    it('Three syllable verbs', function() {
      assert.deepEqual(SimplePast('sinirlenmemek'), [
        'sinirlenmedim',
        'sinirlenmedin',
        'sinirlenmedi',
        'sinirlenmedik',
        'sinirlenmediniz',
        'sinirlenmediler'
      ]);
    });

    it('Composed verbs', function() {
      assert.deepEqual(SimplePast('affetmemek'), [
        'affetmedim',
        'affetmedin',
        'affetmedi',
        'affetmedik',
        'affetmediniz',
        'affetmediler'
      ]);
    });

    it('Composed verbs with spaces in between', function() {
      assert.deepEqual(SimplePast('yemin etmemek'), [
        'yemin etmedim',
        'yemin etmedin',
        'yemin etmedi',
        'yemin etmedik',
        'yemin etmediniz',
        'yemin etmediler'
      ]);
    });
  });
});
