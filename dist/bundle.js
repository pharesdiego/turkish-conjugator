window.Conjugate = (function(e) {
  function r(i) {
    if (t[i]) return t[i].exports;
    var o = (t[i] = { i: i, l: !1, exports: {} });
    return e[i].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
  }
  var t = {};
  return (
    (r.m = e),
    (r.c = t),
    (r.d = function(e, t, i) {
      r.o(e, t) ||
        Object.defineProperty(e, t, {
          configurable: !1,
          enumerable: !0,
          get: i
        });
    }),
    (r.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return r.d(t, 'a', t), t;
    }),
    (r.o = function(e, r) {
      return Object.prototype.hasOwnProperty.call(e, r);
    }),
    (r.p = ''),
    r((r.s = 5))
  );
})([
  function(e, r, t) {
    'use strict';
    function i(e) {
      if (Array.isArray(e)) {
        for (var r = 0, t = Array(e.length); r < e.length; r++) t[r] = e[r];
        return t;
      }
      return Array.from(e);
    }
    var o = t(3),
      n = o.map,
      a = o.reduce,
      s = o.filter,
      u = function() {
        for (var e = arguments.length, r = Array(e), t = 0; t < e; t++)
          r[t] = arguments[t];
        return function(e) {
          return a(
            r,
            function(e, r) {
              return r(e);
            },
            e
          );
        };
      },
      l = function(e) {
        return e.length;
      },
      m = function(e) {
        return e.split('');
      },
      f = function(e) {
        return e.split(' ');
      },
      p = function(e) {
        return e.join('');
      },
      v = function(e) {
        for (
          var r = arguments.length, t = Array(r > 1 ? r - 1 : 0), o = 1;
          o < r;
          o++
        )
          t[o - 1] = arguments[o];
        return [].concat(i(e), t);
      },
      y = function(e) {
        return e.toLowerCase();
      },
      c = function(e) {
        return e.reverse();
      },
      g = u(m, c, p),
      d = function(e) {
        return e.slice(-1);
      },
      b = function(e) {
        return e[0] || '';
      },
      x = function(e) {
        return e.slice(0, -1);
      },
      V = function(e) {
        return /[aeiıouöüI]/gi.test(e);
      },
      k = function(e) {
        return s(e, V);
      },
      h = u(m, k, p),
      C = function(e) {
        return h(e).slice(-1);
      },
      I = function(e) {
        return 0 === e.length;
      },
      P = function(e) {
        return function() {
          for (var r = arguments.length, t = Array(r), i = 0; i < r; i++)
            t[i] = arguments[i];
          return t.some(function(r) {
            return e.endsWith(r);
          });
        };
      },
      w = function(e) {
        return function() {
          for (var r = arguments.length, t = Array(r), i = 0; i < r; i++)
            t[i] = arguments[i];
          return t.some(function(r) {
            return e.startsWith(r);
          });
        };
      },
      N = function(e) {
        return e.slice(0, -1);
      },
      A = function(e) {
        return e.slice(-1);
      },
      S = function(e) {
        return n(e, function(e) {
          return (e += ' ');
        });
      },
      F = u(f, N, S, p),
      L = u(f, A, p);
    e.exports = {
      _: u,
      length: l,
      split: m,
      splitWords: f,
      join: p,
      arrLast: A,
      arrInit: N,
      push: v,
      lowerCase: y,
      reverse: c,
      reverseStr: g,
      lastLetter: d,
      firstLetter: b,
      strInit: x,
      isVowel: V,
      getVowelsArr: k,
      getVowelsStr: h,
      empty: I,
      strEndsWith: P,
      strStarsWith: w,
      getStrInit: F,
      getStrLast: L,
      getLastVowel: C
    };
  },
  function(e, r, t) {
    'use strict';
    var i = t(3),
      o = i.map,
      n = t(0),
      a = n._,
      s = n.length,
      u = n.reverseStr,
      l = n.getVowelsStr,
      m = n.getStrLast,
      f = n.getStrInit,
      p = t(2),
      v = p.harmony,
      y = p.mutableVerbs,
      c = p.compositionExceptions,
      g = t(4),
      d = g.isNegativeVerb,
      b = function(e) {
        return e.slice(0, -3);
      },
      x = function(e) {
        return e.slice(0, -5);
      },
      V = {
        I: function(e) {
          var r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '';
          return [
            e + 'm',
            r + 's' + e + 'n',
            '' + r,
            e + 'z',
            r + 's' + e + 'n' + e + 'z'
          ];
        },
        II: function(e) {
          return [
            e + 'm',
            e + 'n',
            '' + e,
            e + 'k',
            e +
              'n' +
              (arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : e) +
              'z'
          ];
        },
        IN: function(e) {
          return [
            'm',
            'zs' + e + 'n',
            'z',
            'y' + e + 'z',
            'zs' + e + 'n' + e + 'z'
          ];
        }
      },
      k = a(b, l, s),
      h = function(e) {
        return 1 === k(e);
      },
      C = function(e) {
        return (e.match(/[aeiıouöü]/i) || [!1])[0];
      },
      I = a(u, C),
      P = {
        '4 way harmony': function(e) {
          return v.fourWays
            .find(function(r) {
              return r.includes(e);
            })
            .slice(-1);
        },
        '2 way harmony': function(e) {
          return v.twoWays
            .find(function(r) {
              return r.includes(e);
            })
            .slice(-1);
        }
      },
      w = P['4 way harmony'],
      N = P['2 way harmony'],
      A = a(b, I, w),
      S = a(b, I, N),
      F = function(e) {
        var r = e.personalSuffixes,
          t = e.firstPart,
          i = e.verbRoot,
          n = e.tenseSuffix,
          a = void 0 === n ? '' : n;
        return o(r, function(e) {
          return t + i + a + e;
        });
      },
      L = function(e) {
        return e.split(' ').length > 1;
      },
      R = /(geçmek|etmek|yapmak|eylemek|olmak|vermek|kalmak|edilmek|demek|dilemek|gelmek|bulunmak|söylemek|durmak)$/,
      W = /^[a-zşüıöğç\s?]{2,}(geçmek|etmek|yapmak|eylemek|olmak|vermek|kalmak|edilmek|demek|dilemek|gelmek|bulunmak|söylemek|durmak)$/,
      j = /(geçmemek|etmemek|yapmamak|eylememek|olmamak|vermemek|kalmamak|edilmemek|dememek|dilememek|gelmemek|bulunmamak|söylememek|durmamak)$/,
      O = /^[a-zşüıöğç\s?]{2,}(geçmemek|etmemek|yapmamak|eylememek|olmamak|vermemek|kalmamak|edilmemek|dememek|dilememek|gelmemek|bulunmamak|söylememek|durmamak)$/,
      z = function(e) {
        return W.test(e);
      },
      T = function(e) {
        return O.test(e);
      },
      $ = function(e) {
        return (e.match(R) || [!1])[0];
      },
      M = function(e) {
        return (e.match(j) || [!1])[0];
      },
      _ = function(e) {
        return e.replace(R, '');
      },
      E = function(e) {
        return e.replace(j, '');
      },
      G = function(e) {
        return {
          verb: e,
          root: y.includes(e) ? b(e).replace('t', 'd') : b(e),
          originalRoot: b(e),
          verbSuffix: e.slice(-3),
          vowelsLength: k(e),
          verbVowels: l(b(e)),
          harmony4way: A(e),
          harmony2way: S(e),
          negativeSuffix: 'm' + S(e),
          positiveRoot: d(e) && x(e),
          isNegative: d(e),
          isSingleSyllableVerb: h(e),
          isComposed: Boolean(L(e)),
          initPart: Boolean(L(e)) && f(e),
          lastPart: Boolean(L(e)) && m(e),
          isAuxiliaryComposedVerb: z(e) && !c.includes(e),
          auxiliaryVerb: $(e),
          initComposedVerb: z(e) && _(e),
          isAuxiliaryComposedVerbInNegativeForm: T(e),
          auxiliaryVerbInNegativeForm: M(e),
          initComposedVerbInNegativeForm: T(e) && E(e)
        };
      };
    e.exports = {
      verbRoot: b,
      getPositiveVerbRootFromNegativeVerb: x,
      arrayOfPersonalSuffixes: V,
      vowelsQuantity: k,
      getFirstVowel: C,
      getLastVowel: I,
      lookIn4Ways: w,
      lookIn2Ways: N,
      get4WayHarmonyOf: A,
      get2WayHarmonyOf: S,
      generateResult: F,
      getProperties: G,
      whiteSpaces: L
    };
  },
  function(e, r, t) {
    'use strict';
    (e.exports.harmony = {
      fourWays: ['aı', 'ou', 'ei', 'öü'],
      twoWays: ['ıoua', 'iöüe']
    }),
      (e.exports.mutation = [{ from: ['p', 't', 'k', 'ç', 's', 'ş', 'h'] }]),
      (e.exports.mutableVerbs = [
        'etmek',
        'gitmek',
        'ditmek',
        'tatmak',
        'gütmek'
      ]),
      (e.exports.alphabet = [
        'a',
        'b',
        'c',
        'ç',
        'd',
        'e',
        'f',
        'g',
        'ğ',
        'h',
        'ı',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'ö',
        'p',
        'r',
        's',
        'ş',
        't',
        'u',
        'ü',
        'v',
        'y',
        'z',
        ' '
      ]),
      (e.exports.exceptions = [
        'almak',
        'bilmek',
        'bulmak',
        'durmak',
        'gelmek',
        'görmek',
        'kalmak',
        'olmak',
        'ölmek',
        'sanmak',
        'vermek',
        'varmak',
        'vurmak',
        'denmek'
      ]),
      (e.exports.compositionExceptions = [
        'gözetmek',
        'esnetmek',
        'gülümsetmek',
        'ilerletmek',
        'izletmek',
        'ağlatmak'
      ]);
  },
  function(e, r, t) {
    'use strict';
    var i = function(e, r) {
        for (var t = -1, i = null == e ? 0 : e.length, o = Array(i); ++t < i; )
          o[t] = r(e[t], t, e);
        return o;
      },
      o = function(e, r) {
        for (
          var t = -1, i = null == e ? 0 : e.length, o = 0, n = [];
          ++t < i;

        ) {
          var a = e[t];
          r(a, t, e) && (n[o++] = a);
        }
        return n;
      },
      n = function(e, r, t, i) {
        var o = -1,
          n = null == e ? 0 : e.length;
        for (i && n && (t = e[++o]); ++o < n; ) t = r(t, e[o], o, e);
        return t;
      };
    e.exports = { map: i, filter: o, reduce: n };
  },
  function(e, r, t) {
    'use strict';
    var i = t(0),
      o = i.strEndsWith,
      n = i.lowerCase,
      a = i.getVowelsStr,
      s = i.arrInit,
      u = i.join,
      l = i._,
      m = t(2),
      f = m.alphabet,
      p = function(e, r) {
        return e.length >= r;
      },
      v = function(e) {
        return o(e.toLowerCase())('mek', 'mak');
      },
      y = function(e) {
        return o(e.toLowerCase())('memek', 'mamak');
      },
      c = function(e) {
        return e.toLowerCase().replace(/\w{5}$/, function(e) {
          return e[0] + e[1] + 'k';
        });
      },
      g = function(e) {
        return e.toLowerCase().replace(/\w{3}$/, function(e) {
          return e[0] + e[1] + e[0] + e[1] + 'k';
        });
      },
      d = function(e) {
        return e
          .toLowerCase()
          .split('')
          .every(function(e) {
            return f.includes(e);
          });
      },
      b = function(e) {
        return e.split(' ');
      },
      x = function(e) {
        return b(e).length > 1;
      },
      V = l(b, s, u, a),
      k = function(e) {
        if (
          ((e = n(e)),
          p(e, 5) &&
            (x(e) ? V(e) : a(e)).length > 1 &&
            d(e) &&
            b(e).every(function(e) {
              return p(e, 3);
            }))
        ) {
          if (/\bm(e|a)k?m(e|a)k\b/.test(e)) return !1;
          if (y(e) && p(e, 7)) return c(e);
          if (v(e)) return e;
        }
        return !1;
      };
    e.exports = {
      hasMinLength: p,
      isVerb: v,
      isNegativeVerb: y,
      convertToNegative: g,
      convertToPositive: c,
      isAlphabeticallyValid: d,
      isTurkishVerb: k
    };
  },
  function(e, r, t) {
    'use strict';
    var i = t(6),
      o = i.Aorist,
      n = i.Gerund,
      a = i.Future,
      s = i.SimplePast,
      u = i.MisPast,
      l = i.PastContinuous,
      m = i.PresentIndefinite,
      f = i.PresentContinuousIndefinite,
      p = i.FutureIndefinite,
      v = i.PotentialNegative,
      y = i.PotentialPositive,
      c = t(4),
      g = c.isVerb,
      d = c.isNegativeVerb,
      b = c.convertToNegative,
      x = c.convertToPositive,
      V = c.isAlphabeticallyValid,
      k = c.isTurkishVerb,
      h = function(e) {
        var r =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b(e);
        return [
          {
            tense: 'aorist',
            title: 'Aorist',
            conjugation: { positive: o(e), negative: o(r) }
          },
          {
            tense: 'gerund',
            title: 'Gerund',
            conjugation: { positive: n(e), negative: n(r) }
          },
          {
            tense: 'future',
            title: 'Future',
            conjugation: { positive: a(e), negative: a(r) }
          },
          {
            tense: 'simple-past',
            title: 'Simple Past',
            conjugation: { positive: s(e), negative: s(r) }
          },
          {
            tense: 'mis-past',
            title: 'Miş Past',
            conjugation: { positive: u(e), negative: u(r) }
          },
          {
            tense: 'past-continuous',
            title: 'Past Continuous',
            conjugation: { positive: l(e), negative: l(r) }
          },
          {
            tense: 'present-indefinite',
            title: 'Present Indefinite',
            conjugation: { positive: m(e), negative: m(r) }
          },
          {
            tense: 'present-continuous-indefinite',
            title: 'Gerund Indefinite',
            conjugation: { positive: f(e), negative: f(r) }
          },
          {
            tense: 'future-indefinite',
            title: 'Future Indefinite',
            conjugation: { positive: p(e), negative: p(r) }
          },
          {
            tense: 'potential',
            title: 'Potential',
            conjugation: { positive: y(e), negative: v(e) }
          }
        ];
      },
      C = {
        it: function(e) {
          return h(e.toLowerCase());
        },
        verify: {
          isVerb: g,
          isNegativeVerb: d,
          isAlphabeticallyValid: V,
          isTurkishVerb: k
        },
        utils: { convertToPositive: x, convertToNegative: b }
      };
    e.exports = C;
  },
  function(e, r, t) {
    'use strict';
    var i = t(7),
      o = t(8),
      n = t(9),
      a = t(10),
      s = t(11),
      u = t(12),
      l = t(13),
      m = t(14),
      f = t(15),
      p = t(16),
      v = t(17);
    e.exports = {
      Aorist: i,
      Gerund: o,
      Future: n,
      SimplePast: a,
      MisPast: s,
      PastContinuous: u,
      PresentIndefinite: l,
      PresentContinuousIndefinite: m,
      FutureIndefinite: f,
      PotentialNegative: p,
      PotentialPositive: v
    };
  },
  function(e, r, t) {
    'use strict';
    var i = t(0),
      o = i.push,
      n = i.lastLetter,
      a = i.isVowel,
      s = i.length,
      u = t(1),
      l = u.arrayOfPersonalSuffixes,
      m = u.generateResult,
      f = u.getProperties,
      p = u.getLastVowel,
      v = u.lookIn4Ways,
      y = u.lookIn2Ways,
      c = t(2),
      g = c.exceptions,
      d = function(e) {
        var r =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : f(e),
          t = r.isAuxiliaryComposedVerb
            ? r.initComposedVerb
            : r.isAuxiliaryComposedVerbInNegativeForm
              ? r.initComposedVerbInNegativeForm
              : r.isComposed
                ? r.initPart
                : '';
        r = r.isAuxiliaryComposedVerb
          ? f(r.auxiliaryVerb)
          : r.isAuxiliaryComposedVerbInNegativeForm
            ? f(r.auxiliaryVerbInNegativeForm)
            : r.isComposed
              ? f(r.lastPart)
              : r;
        var i = a(n(r.root))
            ? 'r'
            : g.includes(r.verb) || s(r.root) > 3
              ? r.harmony4way + 'r'
              : r.harmony2way + 'r',
          u = 'r' === i ? r.harmony4way : v(p(i)),
          c = 'r' === i ? r.harmony2way : y(p(i)),
          d = 'l' + c + 'r',
          b = o(l.I(u), d),
          x = r.positiveRoot + r.negativeSuffix,
          V = 'zl' + r.harmony2way + 'r',
          k = o(l.IN(r.harmony4way), V);
        return m(
          r.isNegative
            ? { personalSuffixes: k, verbRoot: x, firstPart: t }
            : {
                personalSuffixes: b,
                firstPart: t,
                verbRoot: r.root,
                tenseSuffix: i
              }
        );
      };
    e.exports = d;
  },
  function(e, r, t) {
    'use strict';
    var i = t(0),
      o = i.push,
      n = i.strInit,
      a = i.lastLetter,
      s = i.isVowel,
      u = i.getLastVowel,
      l = i.length,
      m = t(1),
      f = m.arrayOfPersonalSuffixes,
      p = m.generateResult,
      v = m.getProperties,
      y = m.lookIn4Ways,
      c = function(e) {
        var r =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : v(e),
          t = r.isAuxiliaryComposedVerb
            ? r.initComposedVerb
            : r.isAuxiliaryComposedVerbInNegativeForm
              ? r.initComposedVerbInNegativeForm
              : r.isComposed
                ? r.initPart
                : '';
        r = r.isAuxiliaryComposedVerb
          ? v(r.auxiliaryVerb)
          : r.isAuxiliaryComposedVerbInNegativeForm
            ? v(r.auxiliaryVerbInNegativeForm)
            : r.isComposed
              ? v(r.lastPart)
              : r;
        var i = r.isNegative || s(a(r.root)) ? n(r.root) : r.root,
          m = y(u(1 === l(i) ? r.root : i)) + 'yor',
          c = o(f.I('u'), 'lar');
        return p({
          personalSuffixes: c,
          firstPart: t,
          verbRoot: i,
          tenseSuffix: m
        });
      };
    e.exports = c;
  },
  function(e, r, t) {
    'use strict';
    var i = t(0),
      o = i.push,
      n = i.firstLetter,
      a = i.isVowel,
      s = i.lastLetter,
      u = i.strInit,
      l = t(1),
      m = l.arrayOfPersonalSuffixes,
      f = l.generateResult,
      p = l.getProperties,
      v = function(e) {
        var r =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : p(e),
          t = r.isAuxiliaryComposedVerb
            ? r.initComposedVerb
            : r.isAuxiliaryComposedVerbInNegativeForm
              ? r.initComposedVerbInNegativeForm
              : r.isComposed
                ? r.initPart
                : '';
        r = r.isAuxiliaryComposedVerb
          ? p(r.auxiliaryVerb)
          : r.isAuxiliaryComposedVerbInNegativeForm
            ? p(r.auxiliaryVerbInNegativeForm)
            : r.isComposed
              ? p(r.lastPart)
              : r;
        var i =
          'e' === s(r.root) && 1 === r.vowelsLength ? u(r.root) + 'i' : r.root;
        i = a(s(i)) ? i + 'y' : i;
        var l = r.harmony2way + 'c' + r.harmony2way,
          v = 'ece' === l ? 'i' : 'ı',
          y = 'l' + r.harmony2way + 'r',
          c = o(m.I(v), y),
          g = c.map(function(e) {
            return (a(n(e)) ? 'ğ' : 'k') + e;
          });
        return f({
          personalSuffixes: g,
          firstPart: t,
          verbRoot: i,
          tenseSuffix: l
        });
      };
    e.exports = v;
  },
  function(e, r, t) {
    'use strict';
    var i = t(0),
      o = i.push,
      n = i.lastLetter,
      a = t(1),
      s = a.arrayOfPersonalSuffixes,
      u = a.generateResult,
      l = a.getProperties,
      m = t(2),
      f = m.mutation,
      p = function(e) {
        var r =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : l(e),
          t = r.isAuxiliaryComposedVerb
            ? r.initComposedVerb
            : r.isAuxiliaryComposedVerbInNegativeForm
              ? r.initComposedVerbInNegativeForm
              : r.isComposed
                ? r.initPart
                : '';
        r = r.isAuxiliaryComposedVerb
          ? l(r.auxiliaryVerb)
          : r.isAuxiliaryComposedVerbInNegativeForm
            ? l(r.auxiliaryVerbInNegativeForm)
            : r.isComposed
              ? l(r.lastPart)
              : r;
        var i = f[0].from.includes(n(r.originalRoot))
            ? r.originalRoot + 't'
            : r.root + 'd',
          a = r.harmony4way + 'l' + r.harmony2way + 'r',
          m = o(s.II(r.harmony4way), a);
        return u({ personalSuffixes: m, firstPart: t, verbRoot: i });
      };
    e.exports = p;
  },
  function(e, r, t) {
    'use strict';
    var i = t(0),
      o = i.push,
      n = t(1),
      a = n.arrayOfPersonalSuffixes,
      s = n.generateResult,
      u = n.getProperties,
      l = function(e) {
        var r =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : u(e),
          t = r.isAuxiliaryComposedVerb
            ? r.initComposedVerb
            : r.isAuxiliaryComposedVerbInNegativeForm
              ? r.initComposedVerbInNegativeForm
              : r.isComposed
                ? r.initPart
                : '';
        r = r.isAuxiliaryComposedVerb
          ? u(r.auxiliaryVerb)
          : r.isAuxiliaryComposedVerbInNegativeForm
            ? u(r.auxiliaryVerbInNegativeForm)
            : r.isComposed
              ? u(r.lastPart)
              : r;
        var i = 'm' + r.harmony4way + 'ş',
          n = 'l' + r.harmony2way + 'r',
          l = o(a.I(r.harmony4way), n);
        return s({
          personalSuffixes: l,
          firstPart: t,
          verbRoot: r.originalRoot,
          tenseSuffix: i
        });
      };
    e.exports = l;
  },
  function(e, r, t) {
    'use strict';
    var i = t(0),
      o = i.push,
      n = i.strInit,
      a = i.isVowel,
      s = i.lastLetter,
      u = i.getLastVowel,
      l = i.length,
      m = t(1),
      f = m.arrayOfPersonalSuffixes,
      p = m.generateResult,
      v = m.getProperties,
      y = m.lookIn4Ways,
      c = function(e) {
        var r =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : v(e),
          t = r.isAuxiliaryComposedVerb
            ? r.initComposedVerb
            : r.isAuxiliaryComposedVerbInNegativeForm
              ? r.initComposedVerbInNegativeForm
              : r.isComposed
                ? r.initPart
                : '';
        r = r.isAuxiliaryComposedVerb
          ? v(r.auxiliaryVerb)
          : r.isAuxiliaryComposedVerbInNegativeForm
            ? v(r.auxiliaryVerbInNegativeForm)
            : r.isComposed
              ? v(r.lastPart)
              : r;
        var i = r.isNegative || a(s(r.root)) ? n(r.root) : r.root,
          m = y(u(1 === l(i) ? r.root : i)) + 'yor',
          c = o(f.II('du', 'u'), 'dular');
        return p({
          personalSuffixes: c,
          firstPart: t,
          verbRoot: i,
          tenseSuffix: m
        });
      };
    e.exports = c;
  },
  function(e, r, t) {
    'use strict';
    var i = t(0),
      o = i.push,
      n = i.lastLetter,
      a = i.isVowel,
      s = i.length,
      u = t(1),
      l = u.arrayOfPersonalSuffixes,
      m = u.generateResult,
      f = u.getProperties,
      p = t(2),
      v = p.exceptions,
      y = function(e) {
        var r =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : f(e),
          t = r.isAuxiliaryComposedVerb
            ? r.initComposedVerb
            : r.isAuxiliaryComposedVerbInNegativeForm
              ? r.initComposedVerbInNegativeForm
              : r.isComposed
                ? r.initPart
                : '';
        r = r.isAuxiliaryComposedVerb
          ? f(r.auxiliaryVerb)
          : r.isAuxiliaryComposedVerbInNegativeForm
            ? f(r.auxiliaryVerbInNegativeForm)
            : r.isComposed
              ? f(r.lastPart)
              : r;
        var i = a(n(r.root))
            ? 'r'
            : v.includes(r.verb) || s(r.root) > 3
              ? r.harmony4way + 'r'
              : r.harmony2way + 'r',
          u = 'm' + r.harmony4way + 'şl' + r.harmony2way + 'r',
          p = l.I(r.harmony4way).map(function(e) {
            return 'm' + r.harmony4way + 'ş' + e;
          });
        return m({
          personalSuffixes: o(p, u),
          firstPart: t,
          verbRoot: r.root,
          tenseSuffix: r.isNegative ? 'z' : i
        });
      };
    e.exports = y;
  },
  function(e, r, t) {
    'use strict';
    var i = t(0),
      o = i.push,
      n = i.strInit,
      a = i.isVowel,
      s = i.lastLetter,
      u = i.getLastVowel,
      l = i.length,
      m = t(1),
      f = m.arrayOfPersonalSuffixes,
      p = m.generateResult,
      v = m.getProperties,
      y = m.lookIn4Ways,
      c = function(e) {
        var r =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : v(e),
          t = r.isAuxiliaryComposedVerb
            ? r.initComposedVerb
            : r.isAuxiliaryComposedVerbInNegativeForm
              ? r.initComposedVerbInNegativeForm
              : r.isComposed
                ? r.initPart
                : '';
        r = r.isAuxiliaryComposedVerb
          ? v(r.auxiliaryVerb)
          : r.isAuxiliaryComposedVerbInNegativeForm
            ? v(r.auxiliaryVerbInNegativeForm)
            : r.isComposed
              ? v(r.lastPart)
              : r;
        var i = r.isNegative || a(s(r.root)) ? n(r.root) : r.root,
          m = y(u(1 === l(i) ? r.root : i)) + 'yor',
          c = f.I('u').map(function(e) {
            return 'muş' + e;
          });
        return p({
          personalSuffixes: o(c, 'muşlar'),
          firstPart: t,
          verbRoot: i,
          tenseSuffix: m
        });
      };
    e.exports = c;
  },
  function(e, r, t) {
    'use strict';
    var i = t(0),
      o = i.push,
      n = i.strInit,
      a = i.isVowel,
      s = i.lastLetter,
      u = t(1),
      l = u.arrayOfPersonalSuffixes,
      m = u.generateResult,
      f = u.getProperties,
      p = function(e) {
        var r =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : f(e),
          t = r.isAuxiliaryComposedVerb
            ? r.initComposedVerb
            : r.isAuxiliaryComposedVerbInNegativeForm
              ? r.initComposedVerbInNegativeForm
              : r.isComposed
                ? r.initPart
                : '';
        r = r.isAuxiliaryComposedVerb
          ? f(r.auxiliaryVerb)
          : r.isAuxiliaryComposedVerbInNegativeForm
            ? f(r.auxiliaryVerbInNegativeForm)
            : r.isComposed
              ? f(r.lastPart)
              : r;
        var i =
            'e' === s(r.root) && 1 === r.vowelsLength
              ? n(r.root) + 'i'
              : r.root,
          u = i + (a(s(r.root)) ? 'y' : ''),
          p = r.harmony2way + 'c' + r.harmony2way + 'k',
          v = 'ecek' === p ? 'i' : 'ı',
          y = 'm' + v + 'şl' + r.harmony2way + 'r',
          c = l.I(v).map(function(e) {
            return 'm' + v + 'ş' + e;
          });
        return m({
          personalSuffixes: o(c, y),
          firstPart: t,
          verbRoot: u,
          tenseSuffix: p
        });
      };
    e.exports = p;
  },
  function(e, r, t) {
    'use strict';
    var i = t(0),
      o = i.push,
      n = i.lastLetter,
      a = i.isVowel,
      s = i.length,
      u = i.strInit,
      l = t(1),
      m = l.arrayOfPersonalSuffixes,
      f = l.generateResult,
      p = l.getProperties,
      v = function(e) {
        var r =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : p(e),
          t = r.isAuxiliaryComposedVerb
            ? r.initComposedVerb
            : r.isAuxiliaryComposedVerbInNegativeForm
              ? r.initComposedVerbInNegativeForm
              : r.isComposed
                ? r.initPart
                : '';
        r = r.isAuxiliaryComposedVerb
          ? p(r.auxiliaryVerb)
          : r.isAuxiliaryComposedVerbInNegativeForm
            ? p(r.auxiliaryVerbInNegativeForm)
            : r.isComposed
              ? p(r.lastPart)
              : r;
        var i = 'e' === n(r.root) && 2 === s(r.root) ? u(r.root) + 'i' : r.root,
          l = i + (a(n(r.root)) ? 'y' : '') + r.harmony2way + r.negativeSuffix,
          v = m.IN('mak' === r.verbSuffix ? 'ı' : 'i'),
          y = 'zl' + r.harmony2way + 'r';
        return f({ personalSuffixes: o(v, y), firstPart: t, verbRoot: l });
      };
    e.exports = v;
  },
  function(e, r, t) {
    'use strict';
    var i = t(0),
      o = i.push,
      n = i.strInit,
      a = i.isVowel,
      s = i.lastLetter,
      u = t(1),
      l = u.arrayOfPersonalSuffixes,
      m = u.generateResult,
      f = u.getProperties,
      p = function(e) {
        var r =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : f(e),
          t = r.isAuxiliaryComposedVerb
            ? r.initComposedVerb
            : r.isAuxiliaryComposedVerbInNegativeForm
              ? r.initComposedVerbInNegativeForm
              : r.isComposed
                ? r.initPart
                : '';
        r = r.isAuxiliaryComposedVerb
          ? f(r.auxiliaryVerb)
          : r.isAuxiliaryComposedVerbInNegativeForm
            ? f(r.auxiliaryVerbInNegativeForm)
            : r.isComposed
              ? f(r.lastPart)
              : r;
        var i =
            'e' === s(r.root) && 1 === r.vowelsLength
              ? n(r.root) + 'i'
              : r.root,
          u = (a(s(i)) ? 'y' : '') + r.harmony2way + 'bil',
          p = l.I('i');
        return m({
          personalSuffixes: o(p, 'ler'),
          firstPart: t,
          verbRoot: i + u,
          tenseSuffix: 'ir'
        });
      };
    e.exports = p;
  }
]);
