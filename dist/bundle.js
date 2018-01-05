window.Conjugate=function(e){function r(t){if(i[t])return i[t].exports;var o=i[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}var i={};return r.m=e,r.c=i,r.d=function(e,i,t){r.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:t})},r.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(i,"a",i),i},r.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},r.p="",r(r.s=3)}([function(e,r,i){"use strict";function t(e){if(Array.isArray(e)){for(var r=0,i=Array(e.length);r<e.length;r++)i[r]=e[r];return i}return Array.from(e)}var o=function(){for(var e=arguments.length,r=Array(e),i=0;i<e;i++)r[i]=arguments[i];return function(e){return r.reduce(function(e,r){return r(e)},e)}},n=function(e){return e.length},a=function(e){return e.split("")},s=function(e){return e.split(" ")},m=function(e){return e.join("")},u=function(e){for(var r=arguments.length,i=Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];return[].concat(t(e),i)},l=function(e){return e.toLowerCase()},p=function(e){return e.reverse()},y=o(a,p,m),g=function(e){return e.slice(-1)},v=function(e){return e.slice(0,1)},d=function(e){return e.slice(0,-1)},f=function(e){return!!/[aeiıouöü]/gi.test(e)},b=function(e){return e.filter(f)},c=o(a,b,m),V=function(e){return c(e).slice(-1)},C=function(e){return 0==e.length},x=function(e){return function(){for(var r=arguments.length,i=Array(r),t=0;t<r;t++)i[t]=arguments[t];return!C(i.filter(function(r){return e.endsWith(r)}))}},I=function(e){return function(){for(var r=arguments.length,i=Array(r),t=0;t<r;t++)i[t]=arguments[t];return!C(i.filter(function(r){return e.startsWith(r)}))}},N=function(e){return e.slice(0,-1)},k=function(e){return e.slice(-1)},h=function(e){return e.map(function(e){return e+=" "})},F=o(s,N,h,m),A=o(s,k,m);e.exports={_:o,length:n,split:a,splitWords:s,join:m,push:u,lowerCase:l,reverse:p,reverseStr:y,lastLetter:g,firstLetter:v,strInit:d,isVowel:f,getVowelsArr:b,getVowelsStr:c,empty:C,strEndsWith:x,strStarsWith:I,getStrInit:F,getStrLast:A,getLastVowel:V}},function(e,r,i){"use strict";var t=i(0),o=t._,n=t.length,a=t.split,s=(t.splitWords,t.join),m=(t.push,t.lowerCase),u=(t.reverse,t.reverseStr),l=t.lastLetter,p=t.firstLetter,y=t.strInit,g=(t.isVowel,t.getVowelsArr,t.getVowelsStr),v=(t.getLastPart,t.empty),d=t.strEndsWith,f=t.getStrLast,b=t.getStrInit,c=i(2),V=c.harmony,C=c.mutation,x=c.notMutableVerbs,I=c.mutableVerbs,N=c.alphabet,k=function(e){return e.slice(0,-3)},h=function(e){return e.slice(0,-5)},F=function(e){return function(r){return e.reduce(function(e,i,t){return i==r?e=t:e},-1)}},A=function(e){return C[0].to[e]},P=function(e){return function(r){return e.filter(function(e){return e.includes(r)})}},w={I:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return[e+"m",r+"s"+e+"n",""+r,e+"z",r+"s"+e+"n"+e+"z"]},II:function(e){return[e+"m",e+"n",""+e,e+"k",e+"n"+(arguments.length>1&&void 0!==arguments[1]?arguments[1]:e)+"z"]},IN:function(e,r){return["m","zs"+e+"n","z","y"+e+"z","zs"+e+"n"+e+"z"]}},L=o(k,g,n),S=function(e){return 1==L(e)},W=function(e){return!!/[aeiıouöü]/gi.test(e)&&e.match(/[aeiıouöü]/gi)[0]},O=o(u,W),R=o(P(V[0].fourWays),s,l),z=o(P(V[1].twoWays),s,p),M=o(k,O,R),H=o(k,O,z),T=o(O,R),j=o(p,z),$=function(e){return o(k,l,F(e))},_=function(e){return!!I.includes(e)},B=function(e){return!(!_(e)||!S(e))},E=function(e,r,i){var t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return e.map(function(e){return""+(r+i+t+e)})},G=function(e,r){return e.length>=r},Q=function(e){return d(e)("mek","mak")},q=function(e){return d(e)("memek","mamak")},D=function(e){var r=H(e);return e.replace("m"+r+"m"+r+"k","m"+r+"k")},J=function(e){var r=H(e);return e.replace("m"+r+"k","m"+r+"m"+r+"k")},K=function(e){return v(e.filter(function(e){return!N.includes(e)}))},U=function(e){if(e=m(e),G(e,5)&&K(a(e))){if(q(e)&&G(e,7))return D(e);if(Q(e))return e}return!1},X=function(e){return!!/\s/g.test(e)&&e.match(/\s/g).length},Y=/(geçmek|etmek|yapmak|eylemek|olmak|vermek|kalmak|edilmek|demek|dilemek|gelmek|bulunmak|söylemek|durmak)$/,Z=/^[a-zşüıöğç\s?]{2,}(geçmek|etmek|yapmak|eylemek|olmak|vermek|kalmak|edilmek|demek|dilemek|gelmek|bulunmak|söylemek|durmak)$/,ee=/(geçmemek|etmemek|yapmamak|eylememek|olmamak|vermemek|kalmamak|edilmemek|dememek|dilememek|gelmemek|bulunmamak|söylememek|durmamak)$/,re=/^[a-zşüıöğç\s?]{2,}(geçmemek|etmemek|yapmamak|eylememek|olmamak|vermemek|kalmamak|edilmemek|dememek|dilememek|gelmemek|bulunmamak|söylememek|durmamak)$/,ie=function(e){return Z.test(e)},te=function(e){return!!Y.test(e)&&e.match(Y)[0]},oe=function(e){return e.replace(Y,"")},ne=function(e){return re.test(e)},ae=function(e){return!!ee.test(e)&&e.match(ee)[0]},se=function(e){return e.replace(ee,"")},me=function(e){return{verb:e,root:$(C[0].from)(e)>=0&&!x.includes(e)&&B(e)?y(k(e))+A($(C[0].from)(e)):k(e),originalRoot:k(e),verbSuffix:e.slice(-3),vowelsLength:L(e),verbVowels:g(k(e)),harmony4way:M(e),harmony2way:H(e),negativeSuffix:"m"+H(e),positiveRoot:q(e)?h(e):"",isNegative:q(e),isSingleSyllableVerb:S(e),isComposed:!!X(e),initPart:X(e)?b(e):"",lastPart:X(e)?f(e):"",isAuxiliaryComposedVerb:ie(e),auxiliaryVerb:te(e),initComposedVerb:!!ie(e)&&oe(e),isAuxiliaryComposedVerbInNegativeForm:ne(e),auxiliaryVerbInNegativeForm:ae(e),initComposedVerbInNegativeForm:!!ne(e)&&se(e)}};e.exports={verbRoot:k,negativeVerbRoot:h,isMutable:F,mutate:A,lookForHarmonyIn:P,arrayOfPersonalSuffixes:w,vowelsQuantity:L,getFirstVowel:W,getLastVowel:O,lookIn4Ways:R,lookIn2Ways:z,get4WayHarmonyOf:M,get2WayHarmonyOf:H,get4WayHarmonyByRootOf:T,get2WayHarmonyByRootOf:j,doWeNeedToMutate:$,generateResult:E,hasMinLength:G,isVerb:Q,isNegativeVerb:q,convertToNegative:J,convertToPositive:D,isAlphabeticallyValid:K,gotAccepted:U,getProperties:me,whiteSpaces:X}},function(e,r,i){"use strict";e.exports.harmony=[{fourWays:["aı","ou","ei","öü"]},{twoWays:["aıou","eiöü"]}],e.exports.mutation=[{from:["p","t","k","ç"],to:["b","d","ğ","c"]},{from:["p","t","k","ç","s","ş","h"]}],e.exports.notMutableVerbs=["bırakmak","anlatmak"],e.exports.mutableVerbs=["etmek","gitmek","ditmek","tatmak","gütmek"],e.exports.alphabet=["a","b","c","ç","d","e","f","g","ğ","h","ı","i","j","k","l","m","n","o","ö","p","r","s","ş","t","u","ü","v","y","z"," "],e.exports.exceptions=["almak","bilmek","bulmak","durmak","gelmek","görmek","kalmak","olmak","ölmek","sanmak","vermek","varmak","vurmak"]},function(e,r,i){"use strict";var t=i(4),o=t.Aorist,n=t.Gerund,a=t.Future,s=t.SimplePast,m=t.MisPast,u=t.PastContinuous,l=t.PresentIndefinite,p=t.PresentContinuousIndefinite,y=t.FutureIndefinite,g=t.PotentialNegative,v=t.PotentialPositive,d=i(1),f=d.hasMinLength,b=d.isVerb,c=d.isNegativeVerb,V=d.convertToNegative,C=d.convertToPositive,x=d.isAlphabeticallyValid,I=d.gotAccepted,N=d.whiteSpaces,k=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:V(e);return{aorist:{positive:o(e),negative:o(r)},gerund:{positive:n(e),negative:n(r)},future:{positive:a(e),negative:a(r)},simplePast:{positive:s(e),negative:s(r)},misPast:{positive:m(e),negative:m(r)},pastContinuous:{positive:u(e),negative:u(r)},presentIndefinite:{positive:l(e),negative:l(r)},gerundIndefinite:{positive:p(e),negative:p(r)},futureIndefinite:{positive:y(e),negative:y(r)},potential:{positive:v(e),negative:g(e)}}},h={it:function(e){return k(e)},verify:function(e){return I(e)},hasMinLength:f,isVerb:b,isNegativeVerb:c,convertToPositive:C,convertToNegative:V,isAlphabeticallyValid:x,whiteSpaces:N};e.exports=h},function(e,r,i){"use strict";var t=i(5),o=i(6),n=i(7),a=i(8),s=i(9),m=i(10),u=i(11),l=i(12),p=i(13),y=i(14),g=i(15);e.exports={Aorist:t,Gerund:o,Future:n,SimplePast:a,MisPast:s,PastContinuous:m,PresentIndefinite:u,PresentContinuousIndefinite:l,FutureIndefinite:p,PotentialNegative:y,PotentialPositive:g}},function(e,r,i){"use strict";var t=i(0),o=t.push,n=t.lastLetter,a=(t.firstLetter,t.isVowel),s=(t.strInit,t.length),m=i(1),u=m.arrayOfPersonalSuffixes,l=m.get4WayHarmonyOf,p=(m.get2WayHarmonyByRootOf,m.generateResult),y=m.getProperties,g=m.getLastVowel,v=m.lookIn4Ways,d=m.lookIn2Ways,f=i(2),b=f.exceptions,c=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:y(e),i=r.isAuxiliaryComposedVerb?r.initComposedVerb:r.isComposed&&r.isAuxiliaryComposedVerbInNegativeForm?r.initComposedVerbInNegativeForm:r.isAuxiliaryComposedVerbInNegativeForm?r.initComposedVerbInNegativeForm:r.isComposed?r.initPart:"";r=r.isAuxiliaryComposedVerb?y(r.auxiliaryVerb):r.isComposed&&r.isAuxiliaryComposedVerbInNegativeForm?y(r.auxiliaryVerbInNegativeForm):r.isAuxiliaryComposedVerbInNegativeForm?y(r.auxiliaryVerbInNegativeForm):r.isComposed?y(r.lastPart):r;var t=(l(e),a(n(r.root))?"r":s(r.root)<=3&&!b.includes(r.verb)?r.harmony2way+"r":r.harmony4way+"r"),m="r"==t?r.harmony4way:v(g(t)),f="r"==t?r.harmony2way:d(g(t)),c="l"+f+"r",V=o(u.I(m),c),C=r.positiveRoot+r.negativeSuffix,x="zl"+r.harmony2way+"r",I=o(u.IN(r.harmony4way),x);return r.isNegative?p(I,i,C):p(V,i,r.root,t)};e.exports=c},function(e,r,i){"use strict";var t=i(0),o=t.push,n=t.strInit,a=(t.firstLetter,t.lastLetter),s=t.isVowel,m=(t.isConsonant,t.getLastVowel),u=i(1),l=u.arrayOfPersonalSuffixes,p=u.generateResult,y=u.getProperties,g=(u.getFirstVowel,u.lookIn4Ways),v=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:y(e),i=r.isAuxiliaryComposedVerb?r.initComposedVerb:r.isComposed&&r.isAuxiliaryComposedVerbInNegativeForm?r.initComposedVerbInNegativeForm:r.isAuxiliaryComposedVerbInNegativeForm?r.initComposedVerbInNegativeForm:r.isComposed?r.initPart:"";r=r.isAuxiliaryComposedVerb?y(r.auxiliaryVerb):r.isComposed&&r.isAuxiliaryComposedVerbInNegativeForm?y(r.auxiliaryVerbInNegativeForm):r.isAuxiliaryComposedVerbInNegativeForm?y(r.auxiliaryVerbInNegativeForm):r.isComposed?y(r.lastPart):r;var t=r.isNegative||s(a(r.root))?n(r.root):r.root,u=g(m(t))+"yor",v=o(l.I("u"),"lar");return p(v,i,t,u)};e.exports=v},function(e,r,i){"use strict";var t=i(0),o=t.push,n=t.firstLetter,a=t.isVowel,s=t.lastLetter,m=(t.strInit,i(1)),u=m.arrayOfPersonalSuffixes,l=m.generateResult,p=m.getProperties,y=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:p(e),i=r.isAuxiliaryComposedVerb?r.initComposedVerb:r.isComposed&&r.isAuxiliaryComposedVerbInNegativeForm?r.initComposedVerbInNegativeForm:r.isAuxiliaryComposedVerbInNegativeForm?r.initComposedVerbInNegativeForm:r.isComposed?r.initPart:"";r=r.isAuxiliaryComposedVerb?p(r.auxiliaryVerb):r.isComposed&&r.isAuxiliaryComposedVerbInNegativeForm?p(r.auxiliaryVerbInNegativeForm):r.isAuxiliaryComposedVerbInNegativeForm?p(r.auxiliaryVerbInNegativeForm):r.isComposed?p(r.lastPart):r;var t=a(s(r.root))?r.root+"y":r.root,m=r.harmony2way+"c"+r.harmony2way,y="ece"==m?"i":"ı",g="l"+r.harmony2way+"r",v=o(u.I(y),g),d=v.map(function(e){return a(n(e))?"ğ"+e:"k"+e});return l(d,i,t,m)};e.exports=y},function(e,r,i){"use strict";var t=i(0),o=t.push,n=(t.getLastPart,t.getFirstPart,i(1)),a=n.arrayOfPersonalSuffixes,s=n.generateResult,m=n.getProperties,u=n.doWeNeedToMutate,l=i(2),p=l.mutation,y=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m(e),i=r.isAuxiliaryComposedVerb?r.initComposedVerb:r.isComposed&&r.isAuxiliaryComposedVerbInNegativeForm?r.initComposedVerbInNegativeForm:r.isAuxiliaryComposedVerbInNegativeForm?r.initComposedVerbInNegativeForm:r.isComposed?r.initPart:"";r=r.isAuxiliaryComposedVerb?m(r.auxiliaryVerb):r.isComposed&&r.isAuxiliaryComposedVerbInNegativeForm?m(r.auxiliaryVerbInNegativeForm):r.isAuxiliaryComposedVerbInNegativeForm?m(r.auxiliaryVerbInNegativeForm):r.isComposed?m(r.lastPart):r;var t=u(p[1].from)(e)>=0?r.originalRoot+"t":r.root+"d",n=r.harmony4way+"l"+r.harmony2way+"r",l=o(a.II(r.harmony4way),n);return s(l,i,t)};e.exports=y},function(e,r,i){"use strict";var t=i(0),o=t.push,n=i(1),a=n.arrayOfPersonalSuffixes,s=n.generateResult,m=n.getProperties,u=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m(e),i=r.isAuxiliaryComposedVerb?r.initComposedVerb:r.isComposed&&r.isAuxiliaryComposedVerbInNegativeForm?r.initComposedVerbInNegativeForm:r.isAuxiliaryComposedVerbInNegativeForm?r.initComposedVerbInNegativeForm:r.isComposed?r.initPart:"";r=r.isAuxiliaryComposedVerb?m(r.auxiliaryVerb):r.isComposed&&r.isAuxiliaryComposedVerbInNegativeForm?m(r.auxiliaryVerbInNegativeForm):r.isAuxiliaryComposedVerbInNegativeForm?m(r.auxiliaryVerbInNegativeForm):r.isComposed?m(r.lastPart):r;var t=r.isNegative?"zm"+r.harmony4way+"ş":"m"+r.harmony4way+"ş",n="l"+r.harmony2way+"r",u=o(a.I(r.harmony4way),n);return s(u,i,r.originalRoot,t)};e.exports=u},function(e,r,i){"use strict";var t=i(0),o=t.push,n=t.strInit,a=t.isVowel,s=t.lastLetter,m=t.getLastVowel,u=i(1),l=u.arrayOfPersonalSuffixes,p=u.generateResult,y=u.getProperties,g=u.lookIn4Ways,v=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:y(e),i=r.isAuxiliaryComposedVerb?r.initComposedVerb:r.isComposed&&r.isAuxiliaryComposedVerbInNegativeForm?r.initComposedVerbInNegativeForm:r.isAuxiliaryComposedVerbInNegativeForm?r.initComposedVerbInNegativeForm:r.isComposed?r.initPart:"";r=r.isAuxiliaryComposedVerb?y(r.auxiliaryVerb):r.isComposed&&r.isAuxiliaryComposedVerbInNegativeForm?y(r.auxiliaryVerbInNegativeForm):r.isAuxiliaryComposedVerbInNegativeForm?y(r.auxiliaryVerbInNegativeForm):r.isComposed?y(r.lastPart):r;var t=r.isNegative||a(s(r.root))?n(r.root):r.root,u=g(m(t))+"yor",v=o(l.II("du","u"),"lardı");return p(v,i,t,u)};e.exports=v},function(e,r,i){"use strict";var t=i(0),o=t.push,n=t.lastLetter,a=(t.getFirstPart,t.getLastPart,t.strInit,t.isVowel),s=t.length,m=i(1),u=m.arrayOfPersonalSuffixes,l=m.get4WayHarmonyOf,p=m.generateResult,y=m.getProperties,g=i(2),v=g.exceptions,d=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:y(e),i=r.isAuxiliaryComposedVerb?r.initComposedVerb:r.isComposed&&r.isAuxiliaryComposedVerbInNegativeForm?r.initComposedVerbInNegativeForm:r.isAuxiliaryComposedVerbInNegativeForm?r.initComposedVerbInNegativeForm:r.isComposed?r.initPart:"";r=r.isAuxiliaryComposedVerb?y(r.auxiliaryVerb):r.isComposed&&r.isAuxiliaryComposedVerbInNegativeForm?y(r.auxiliaryVerbInNegativeForm):r.isAuxiliaryComposedVerbInNegativeForm?y(r.auxiliaryVerbInNegativeForm):r.isComposed?y(r.lastPart):r;var t=(l(e),a(n(r.root))?"r":s(r.root)<=3&&!v.includes(r.verb)?r.harmony2way+"r":r.harmony4way+"r"),m="m"+r.harmony4way+"şl"+r.harmony2way+"r",g=u.I(r.harmony4way).map(function(e){return"m"+r.harmony4way+"ş"+e});return p(o(g,m),i,r.root,t)};e.exports=d},function(e,r,i){"use strict";var t=i(0),o=t.push,n=t.strInit,a=t.isVowel,s=t.lastLetter,m=t.getLastVowel,u=i(1),l=u.arrayOfPersonalSuffixes,p=u.generateResult,y=u.getProperties,g=u.lookIn4Ways,v=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:y(e),i=r.isAuxiliaryComposedVerb?r.initComposedVerb:r.isComposed&&r.isAuxiliaryComposedVerbInNegativeForm?r.initComposedVerbInNegativeForm:r.isAuxiliaryComposedVerbInNegativeForm?r.initComposedVerbInNegativeForm:r.isComposed?r.initPart:"";r=r.isAuxiliaryComposedVerb?y(r.auxiliaryVerb):r.isComposed&&r.isAuxiliaryComposedVerbInNegativeForm?y(r.auxiliaryVerbInNegativeForm):r.isAuxiliaryComposedVerbInNegativeForm?y(r.auxiliaryVerbInNegativeForm):r.isComposed?y(r.lastPart):r;var t=r.isNegative||a(s(r.root))?n(r.root):r.root,u=g(m(t))+"yor",v=l.I("u").map(function(e){return"muş"+e});return p(o(v,"larmış"),i,t,u)};e.exports=v},function(e,r,i){"use strict";var t=i(0),o=t.push,n=(t.strInit,t.isVowel),a=t.lastLetter,s=i(1),m=(s.isLastLetterOfRootAVowel,s.arrayOfPersonalSuffixes),u=s.generateResult,l=s.getProperties,p=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l(e),i=r.isAuxiliaryComposedVerb?r.initComposedVerb:r.isComposed&&r.isAuxiliaryComposedVerbInNegativeForm?r.initComposedVerbInNegativeForm:r.isAuxiliaryComposedVerbInNegativeForm?r.initComposedVerbInNegativeForm:r.isComposed?r.initPart:"";r=r.isAuxiliaryComposedVerb?l(r.auxiliaryVerb):r.isComposed&&r.isAuxiliaryComposedVerbInNegativeForm?l(r.auxiliaryVerbInNegativeForm):r.isAuxiliaryComposedVerbInNegativeForm?l(r.auxiliaryVerbInNegativeForm):r.isComposed?l(r.lastPart):r;var t=n(a(r.root))?r.root+"y":r.root,s=r.harmony2way+"c"+r.harmony2way+"k",p="ecek"==s?"i":"ı",y="l"+r.harmony2way+"rm"+p+"ş",g=m.I(p).map(function(e){return"m"+p+"ş"+e});return u(o(g,y),i,t,s)};e.exports=p},function(e,r,i){"use strict";var t=i(0),o=t.push,n=t.lastLetter,a=t.isVowel,s=i(0),m=(s.strInit,i(1)),u=m.arrayOfPersonalSuffixes,l=m.generateResult,p=m.getProperties,y=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:p(e),i=r.isAuxiliaryComposedVerb?r.initComposedVerb:r.isComposed&&r.isAuxiliaryComposedVerbInNegativeForm?r.initComposedVerbInNegativeForm:r.isAuxiliaryComposedVerbInNegativeForm?r.initComposedVerbInNegativeForm:r.isComposed?r.initPart:"";r=r.isAuxiliaryComposedVerb?p(r.auxiliaryVerb):r.isComposed&&r.isAuxiliaryComposedVerbInNegativeForm?p(r.auxiliaryVerbInNegativeForm):r.isAuxiliaryComposedVerbInNegativeForm?p(r.auxiliaryVerbInNegativeForm):r.isComposed?p(r.lastPart):r;var t=r.root+(a(n(r.root))?"y"+r.harmony2way:r.harmony2way)+r.negativeSuffix,s=u.IN(r.harmony4way),m="zl"+r.harmony2way+"r";return l(o(s,m),i,t)};e.exports=y},function(e,r,i){"use strict";var t=i(0),o=t.push,n=(t.strInit,t.isVowel),a=t.lastLetter,s=i(1),m=s.arrayOfPersonalSuffixes,u=s.generateResult,l=s.getProperties,p=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l(e),i=r.isAuxiliaryComposedVerb?r.initComposedVerb:r.isComposed&&r.isAuxiliaryComposedVerbInNegativeForm?r.initComposedVerbInNegativeForm:r.isAuxiliaryComposedVerbInNegativeForm?r.initComposedVerbInNegativeForm:r.isComposed?r.initPart:"";r=r.isAuxiliaryComposedVerb?l(r.auxiliaryVerb):r.isComposed&&r.isAuxiliaryComposedVerbInNegativeForm?l(r.auxiliaryVerbInNegativeForm):r.isAuxiliaryComposedVerbInNegativeForm?l(r.auxiliaryVerbInNegativeForm):r.isComposed?l(r.lastPart):r;var t=n(a(r.root))?"y"+r.harmony2way+"bil":r.harmony2way+"bil",s=m.I("i");return u(o(s,"ler"),i,r.root+t,"ir")};e.exports=p}]);