var assert = require('assert');

const { MisPast } = require('./../tenses/all');

describe('Miş Past Positive', function() {
  it('Should properly conjugate -mek verbs', function() {
    assert.deepEqual(MisPast('yemek'), [
      'yemişim',
      'yemişsin',
      'yemiş',
      'yemişiz',
      'yemişsiniz',
      'yemişler'
    ]);
    assert.deepEqual(MisPast('denemek'), [
      'denemişim',
      'denemişsin',
      'denemiş',
      'denemişiz',
      'denemişsiniz',
      'denemişler'
    ]);
    assert.deepEqual(MisPast('görmek'), [
      'görmüşüm',
      'görmüşsün',
      'görmüş',
      'görmüşüz',
      'görmüşsünüz',
      'görmüşler'
    ]);
  });

  it('Should properly conjugate -mak verbs', function() {
    assert.deepEqual(MisPast('almak'), [
      'almışım',
      'almışsın',
      'almış',
      'almışız',
      'almışsınız',
      'almışlar'
    ]);
    assert.deepEqual(MisPast('olmak'), [
      'olmuşum',
      'olmuşsun',
      'olmuş',
      'olmuşuz',
      'olmuşsunuz',
      'olmuşlar'
    ]);
    assert.deepEqual(MisPast('korkmak'), [
      'korkmuşum',
      'korkmuşsun',
      'korkmuş',
      'korkmuşuz',
      'korkmuşsunuz',
      'korkmuşlar'
    ]);
  });
});

describe('Miş Past Negative', function() {
  it('Should properly conjugate -mek verbs', function() {
    assert.deepEqual(MisPast('yememek'), [
      'yememişim',
      'yememişsin',
      'yememiş',
      'yememişiz',
      'yememişsiniz',
      'yememişler'
    ]);
    assert.deepEqual(MisPast('denememek'), [
      'denememişim',
      'denememişsin',
      'denememiş',
      'denememişiz',
      'denememişsiniz',
      'denememişler'
    ]);
    assert.deepEqual(MisPast('görmemek'), [
      'görmemişim',
      'görmemişsin',
      'görmemiş',
      'görmemişiz',
      'görmemişsiniz',
      'görmemişler'
    ]);
  });

  it('Should properly conjugate -mak verbs', function() {
    assert.deepEqual(MisPast('almamak'), [
      'almamışım',
      'almamışsın',
      'almamış',
      'almamışız',
      'almamışsınız',
      'almamışlar'
    ]);
    assert.deepEqual(MisPast('olmamak'), [
      'olmamışım',
      'olmamışsın',
      'olmamış',
      'olmamışız',
      'olmamışsınız',
      'olmamışlar'
    ]);
    assert.deepEqual(MisPast('korkmamak'), [
      'korkmamışım',
      'korkmamışsın',
      'korkmamış',
      'korkmamışız',
      'korkmamışsınız',
      'korkmamışlar'
    ]);
  });
});
