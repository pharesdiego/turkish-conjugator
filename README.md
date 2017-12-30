# turkish-conjugator [![npm version](https://img.shields.io/npm/v/turkish-conjugator.svg?style=flat)](https://www.npmjs.com/package/turkish-conjugator)
**The first turkish conjugator without wrong conjugations ever made.**

## Getting Started

**Install** 

`npm install turkish-conjugator`

**Use in your project**

`const Conjugate = require('turkish-conjugator')`

# Methods

### .it

`Conjugate.it(param)` where "**param**" is a turkish verb *(like olmak, gitmek, gelmek...)*. 
This methods return a JSON Object which contains 10 tenses. This 10 tenses have two states: **positive** and **negative**.

**This 10 tenses are:**

* Aorist, Gerund (Present Continuous), Future, Simple Past, Miş Past, Past Continuous, Present Indefinite, Gerund Indefinite, 
Future Indefinite, Potential (can).

**Into the JSON Object this tenses are called:**

* aorist, gerund, future, simplePast, misPast, pastContinuous, presentIndefinite, gerundIndefinite, futureIndefinite, potential.

**Example:**

`Conjugate.it('gelmek').aorist` will return the following JSON Object:
```
{                    
  "positive": [      
    "gelirim",       
    "gelirsin",      
    "gelir",         
    "geliriz",       
    "gelirsiniz",    
    "gelirler"       
  ],                 
  "negative": [      
    "gelmem",        
    "gelmezsin",     
    "gelmez",        
    "gelmeyiz",      
    "gelmezsiniz",   
    "gelmezler"      
  ]                  
}                    
```
