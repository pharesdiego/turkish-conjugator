# turkish-conjugator [![npm version](https://img.shields.io/npm/v/turkish-conjugator.svg?style=flat)](https://www.npmjs.com/package/turkish-conjugator)
**The first turkish conjugator without wrong conjugations ever made!**

## Getting Started

**Install:** 

`npm install turkish-conjugator --save`

**Use in your project:**

`const Conjugate = require('turkish-conjugator')`

**But since you're a cool guy you'll use:**

`import Conjugate from 'turkish-conjugator'`

**Also avaliable as a script tag:**

`<script src='https://unpkg.com/turkish-conjugator/dist/bundle.js'></script>`

# Methods

### Conjugate.it(verb)

*Arguments:*

**verb** ***(string)*** : A Turkish verb like: gelmek, izin vermek, istemek, yaşamak...

*Returns:*

This method **returns an array** containing objects with the following structure:
```
[
  {
    tense: string,
    title: string,
    conjugation: {
      positive: array,
      negative: array
    }
  },
  ...
]
```

There will be 10 objects and each of them will contain the tense, the title and an object containing the negative and positive conjugation of the given verb. Example using the verb *gelmek*:

```json
{
  "tense": "aorist",
  "title": "Aorist",
  "conjugation": {
    "positive": ["gelirim", "gelirsin", "gelir", "geliriz", "gelirsiniz", "gelirler"],
    "negative": ["gelmem", "gelmezsin", "gelmez", "gelmeyiz", "gelmezsiniz", "gelmezler"]
  }
}
```
[Here you can see a full example of the output.](https://www.mocky.io/v2/5b4620843200008500301b38)

These are the supported tenses:

Aorist, Gerund (Present Continuous), Future, Simple Past, Miş Past, Past Continuous, Present Indefinite, Gerund Indefinite, 
Future Indefinite, Potential.

### Conjugate.verify

This is an object containing methods to validate if a given string is a correct Turkish verb. This object contains 4 methods:

* ### .isAlphabeticallyValid(verb)

*Arguments:*

**verb** ***(string)*** : A Turkish verb like: gelmek, izin vermek, istemek, yaşamak...

*Returns:*

This method **returns a boolean** indicating whether a string is alphabetically valid according to the Turkish alphabet. If the returned value of this function is `true` it means the verb is alphabetically valid, if the returned value is `false` then it is not. *(Duuh...)*

* ### .isNegativeVerb(verb)

*Arguments:*

**verb** ***(string)*** :  A Turkish verb in its negative form like: gelmemek, izin vermemek, istememek, yaşamamak... 

*Returns:*

This method **returns a boolean** indicating whether a verb is a negative. For example: *gelmemek* returns `true` and *gelmek* returns `false`.

* ### .isVerb(verb)

*Arguments:*

**verb** ***(string)*** : A Turkish verb in any form like: gelmek, izin vermek, istememek, yaşamamak..

*Returns:*

This method **returns a boolean** indicating whether a string is a Turkish verb in its negative or positive form. For example: *gelmemek* returns `true` and *gelmek* returns `true`. Since this methods only checks if the verb/string ends with *mak, mek, mamak, or memek* a string like `xmak` will return `true`. To verify if a string is truly a Turkish verb that follows every rule use the method *.isTurkishVerb* instead.

* ### .isTurkishVerb(verb)

*Arguments:*

**verb** ***(string)*** : A Turkish verb in any form like: gelmek, izin vermek, istememek, yaşamamak...

*Returns:*

This method **returns a boolean or a string**. if the given verb is invalid and does not follow every Turkish rule about verbs and their structure then it will return `false`. if the given string is a Turkish verb in its negative form (like *gelmemek*), it will return the given verb in its positive form (*gelmemek -> gelmek*). If the given verb is in its positive form this same verb will be returned.

*Examples:*

`Conjugate.verify.isTurkishVerb('gelmek') // 'gelmek'`

`Conjugate.verify.isTurkishVerb('gelmemek') // 'gelmek'`

`Conjugate.verify.isTurkishVerb('GelMemEK') // 'gelmek'`

`Conjugate.verify.isTurkishVerb('xmek') // false`

`Conjugate.verify.isTurkishVerb('gelmekk') // false`

At [Konjüsh](https://pharesdiego.github.io/konjush/) this method is used as input for `Conjugate.it` in this way:
```
const isTurkishVerb = Conjugate.verify.isTurkishVerb('gelmek');
if(isTurkishVerb) {
  Conjugate.it(isTurkishVerb);
} else {
  // Show up an error message or wait until user types a correct Turkish verb.
}
```

### Conjugate.utils

This is an object containing methods to interact with Turkish verbs. This object contains 2 methods:

* ### .convertToNegativeVerb(verb)

*Arguments:*

**verb** ***(string)*** : A Turkish verb in its positive form like: gelmek, izin vermek, istemek, yaşamak...

*Returns:*

This method **returns a string** which will be the given verb in its negative form (*gelmek -> gelmemek*).

* ### .convertToPositiveVerb(verb)

*Arguments:*

**verb** ***(string)*** : A Turkish verb in its negative form like: gelmemek, izin vermemek, istememek, yaşamamak...

*Returns:*

This method **returns a string** which will be the given verb in its positive form (*gelmemek -> gelmek*).
