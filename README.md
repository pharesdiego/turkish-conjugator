# turkish-conjugator [![npm version](https://img.shields.io/npm/v/turkish-conjugator.svg?style=flat)](https://www.npmjs.com/package/turkish-conjugator)
**The first Turkish conjugator without wrong conjugations!**

## Getting Started

**Install:** 

`npm i turkish-conjugator`

or

`yarn add turkish-conjugator`

**Use in your project:**

`const Turkish = require('turkish-conjugator')`

**But since you're a cool guy you'll use:**

`import Turkish from 'turkish-conjugator'`

**Also avaliable as a script tag:**

`<script src='https://unpkg.com/turkish-conjugator/dist/web.bundle.js'></script>`

# Methods

### `Turkish.it(verb: string)`

*Arguments:*

**verb**: A valid Turkish verb in its positive form like: gelmek, izin vermek, istemek, yaşamak...

*Returns:*

This method **returns an array of objects** with the following structure:
```
[
  {
    title: string,
    conjugation: {
      positive: array,
      negative: array
    }
  },
  ...
]
```
*[Here you can see a full example of the output for Turkish.it('gelmek')](http://www.mocky.io/v2/5c969a972f00002b002397e2)*

These are the supported tenses so far:

Aorist, Gerund (Present Continuous), Future, Simple Past, Miş Past, Past Continuous, Present Indefinite, Gerund Indefinite, 
Future Indefinite, Potential.

### `Turkish.isTurkishVerb(verb: string)`

*Arguments:*

**verb**: A Turkish verb in any form like: gelmek, izin vermek, istememek, yaşamamak...

*Returns:*

This method returns a **valid verb or an empty string** if the passed verb is not a valid Turkish verb.

- If the passed verb does not follow every Turkish rule about verbs and their structure then it will return an empty string.

- If it follows every rule and has a valid structure:

  - If the given string is a Turkish verb in its negative form (like *gelmemek*), it will return the given verb in its positive form (*gelmemek -> gelmek*).

  - If the given verb is in its positive form this same verb will be returned.

*Examples:*

`Turkish.isTurkishVerb('gelmek') // 'gelmek'`

`Turkish.isTurkishVerb('gelmemek') // 'gelmek'`

`Turkish.isTurkishVerb('GelMemEK') // 'gelmek'`

`Turkish.isTurkishVerb('xmek') // ''`

`Turkish.isTurkishVerb('gelmekk') // ''`

At [Konjüsh](https://pharesdiego.github.io/konjush/) this method's output is used as input for `Turkush.it` in this way:
```
const isTurkishVerb = Conjugate.verify.isTurkishVerb('gelmek');
if(isTurkishVerb) {
  Conjugate.it(isTurkishVerb);
} else {
  // Show up an invalid Turkish verb message.
}
```
