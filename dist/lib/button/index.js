;(function(t, n) {
  'object' === typeof exports && 'object' === typeof module
    ? (module.exports = n(require('vue')))
    : 'function' === typeof define && define.amd
    ? define(['vue'], n)
    : 'object' === typeof exports
    ? (exports['button'] = n(require('vue')))
    : ((t['axe'] = t['axe'] || {}), (t['axe']['button'] = n(t['Vue'])))
})(window, function(t) {
  return (function(t) {
    var n = {}
    function e(r) {
      if (n[r]) return n[r].exports
      var o = (n[r] = { i: r, l: !1, exports: {} })
      return t[r].call(o.exports, o, o.exports, e), (o.l = !0), o.exports
    }
    return (
      (e.m = t),
      (e.c = n),
      (e.d = function(t, n, r) {
        e.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: r })
      }),
      (e.r = function(t) {
        'undefined' !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(t, '__esModule', { value: !0 })
      }),
      (e.t = function(t, n) {
        if ((1 & n && (t = e(t)), 8 & n)) return t
        if (4 & n && 'object' === typeof t && t && t.__esModule) return t
        var r = Object.create(null)
        if (
          (e.r(r),
          Object.defineProperty(r, 'default', { enumerable: !0, value: t }),
          2 & n && 'string' != typeof t)
        )
          for (var o in t)
            e.d(
              r,
              o,
              function(n) {
                return t[n]
              }.bind(null, o)
            )
        return r
      }),
      (e.n = function(t) {
        var n =
          t && t.__esModule
            ? function() {
                return t['default']
              }
            : function() {
                return t
              }
        return e.d(n, 'a', n), n
      }),
      (e.o = function(t, n) {
        return Object.prototype.hasOwnProperty.call(t, n)
      }),
      (e.p = '/'),
      e((e.s = '8b09'))
    )
  })({
    '00ee': function(t, n, e) {
      var r = e('b622'),
        o = r('toStringTag'),
        c = {}
      ;(c[o] = 'z'), (t.exports = '[object z]' === String(c))
    },
    '0366': function(t, n, e) {
      var r = e('1c0b')
      t.exports = function(t, n, e) {
        if ((r(t), void 0 === n)) return t
        switch (e) {
          case 0:
            return function() {
              return t.call(n)
            }
          case 1:
            return function(e) {
              return t.call(n, e)
            }
          case 2:
            return function(e, r) {
              return t.call(n, e, r)
            }
          case 3:
            return function(e, r, o) {
              return t.call(n, e, r, o)
            }
        }
        return function() {
          return t.apply(n, arguments)
        }
      }
    },
    '06cf': function(t, n, e) {
      var r = e('83ab'),
        o = e('d1e7'),
        c = e('5c6c'),
        i = e('fc6a'),
        u = e('c04e'),
        a = e('5135'),
        f = e('0cfb'),
        s = Object.getOwnPropertyDescriptor
      n.f = r
        ? s
        : function(t, n) {
            if (((t = i(t)), (n = u(n, !0)), f))
              try {
                return s(t, n)
              } catch (e) {}
            if (a(t, n)) return c(!o.f.call(t, n), t[n])
          }
    },
    '0cfb': function(t, n, e) {
      var r = e('83ab'),
        o = e('d039'),
        c = e('cc12')
      t.exports =
        !r &&
        !o(function() {
          return (
            7 !=
            Object.defineProperty(c('div'), 'a', {
              get: function() {
                return 7
              }
            }).a
          )
        })
    },
    '19aa': function(t, n) {
      t.exports = function(t, n, e) {
        if (!(t instanceof n))
          throw TypeError('Incorrect ' + (e ? e + ' ' : '') + 'invocation')
        return t
      }
    },
    '1be4': function(t, n, e) {
      var r = e('d066')
      t.exports = r('document', 'documentElement')
    },
    '1c0b': function(t, n) {
      t.exports = function(t) {
        if ('function' != typeof t)
          throw TypeError(String(t) + ' is not a function')
        return t
      }
    },
    '1c7e': function(t, n, e) {
      var r = e('b622'),
        o = r('iterator'),
        c = !1
      try {
        var i = 0,
          u = {
            next: function() {
              return { done: !!i++ }
            },
            return: function() {
              c = !0
            }
          }
        ;(u[o] = function() {
          return this
        }),
          Array.from(u, function() {
            throw 2
          })
      } catch (a) {}
      t.exports = function(t, n) {
        if (!n && !c) return !1
        var e = !1
        try {
          var r = {}
          ;(r[o] = function() {
            return {
              next: function() {
                return { done: (e = !0) }
              }
            }
          }),
            t(r)
        } catch (a) {}
        return e
      }
    },
    '1cdc': function(t, n, e) {
      var r = e('342f')
      t.exports = /(iphone|ipod|ipad).*applewebkit/i.test(r)
    },
    '1d80': function(t, n) {
      t.exports = function(t) {
        if (void 0 == t) throw TypeError("Can't call method on " + t)
        return t
      }
    },
    2266: function(t, n, e) {
      var r = e('825a'),
        o = e('e95a'),
        c = e('50c4'),
        i = e('0366'),
        u = e('35a1'),
        a = e('2a62'),
        f = function(t, n) {
          ;(this.stopped = t), (this.result = n)
        }
      t.exports = function(t, n, e) {
        var s,
          l,
          p,
          d,
          v,
          b,
          y,
          h = e && e.that,
          g = !(!e || !e.AS_ENTRIES),
          x = !(!e || !e.IS_ITERATOR),
          m = !(!e || !e.INTERRUPTED),
          j = i(n, h, 1 + g + m),
          w = function(t) {
            return s && a(s), new f(!0, t)
          },
          O = function(t) {
            return g
              ? (r(t), m ? j(t[0], t[1], w) : j(t[0], t[1]))
              : m
              ? j(t, w)
              : j(t)
          }
        if (x) s = t
        else {
          if (((l = u(t)), 'function' != typeof l))
            throw TypeError('Target is not iterable')
          if (o(l)) {
            for (p = 0, d = c(t.length); d > p; p++)
              if (((v = O(t[p])), v && v instanceof f)) return v
            return new f(!1)
          }
          s = l.call(t)
        }
        b = s.next
        while (!(y = b.call(s)).done) {
          try {
            v = O(y.value)
          } catch (S) {
            throw (a(s), S)
          }
          if ('object' == typeof v && v && v instanceof f) return v
        }
        return new f(!1)
      }
    },
    '23cb': function(t, n, e) {
      var r = e('a691'),
        o = Math.max,
        c = Math.min
      t.exports = function(t, n) {
        var e = r(t)
        return e < 0 ? o(e + n, 0) : c(e, n)
      }
    },
    '23e7': function(t, n, e) {
      var r = e('da84'),
        o = e('06cf').f,
        c = e('9112'),
        i = e('6eeb'),
        u = e('ce4e'),
        a = e('e893'),
        f = e('94ca')
      t.exports = function(t, n) {
        var e,
          s,
          l,
          p,
          d,
          v,
          b = t.target,
          y = t.global,
          h = t.stat
        if (((s = y ? r : h ? r[b] || u(b, {}) : (r[b] || {}).prototype), s))
          for (l in n) {
            if (
              ((d = n[l]),
              t.noTargetGet ? ((v = o(s, l)), (p = v && v.value)) : (p = s[l]),
              (e = f(y ? l : b + (h ? '.' : '#') + l, t.forced)),
              !e && void 0 !== p)
            ) {
              if (typeof d === typeof p) continue
              a(d, p)
            }
            ;(t.sham || (p && p.sham)) && c(d, 'sham', !0), i(s, l, d, t)
          }
      }
    },
    '241c': function(t, n, e) {
      var r = e('ca84'),
        o = e('7839'),
        c = o.concat('length', 'prototype')
      n.f =
        Object.getOwnPropertyNames ||
        function(t) {
          return r(t, c)
        }
    },
    2626: function(t, n, e) {
      'use strict'
      var r = e('d066'),
        o = e('9bf2'),
        c = e('b622'),
        i = e('83ab'),
        u = c('species')
      t.exports = function(t) {
        var n = r(t),
          e = o.f
        i &&
          n &&
          !n[u] &&
          e(n, u, {
            configurable: !0,
            get: function() {
              return this
            }
          })
      }
    },
    '2a62': function(t, n, e) {
      var r = e('825a')
      t.exports = function(t) {
        var n = t['return']
        if (void 0 !== n) return r(n.call(t)).value
      }
    },
    '2cf4': function(t, n, e) {
      var r,
        o,
        c,
        i = e('da84'),
        u = e('d039'),
        a = e('0366'),
        f = e('1be4'),
        s = e('cc12'),
        l = e('1cdc'),
        p = e('605d'),
        d = i.location,
        v = i.setImmediate,
        b = i.clearImmediate,
        y = i.process,
        h = i.MessageChannel,
        g = i.Dispatch,
        x = 0,
        m = {},
        j = 'onreadystatechange',
        w = function(t) {
          if (m.hasOwnProperty(t)) {
            var n = m[t]
            delete m[t], n()
          }
        },
        O = function(t) {
          return function() {
            w(t)
          }
        },
        S = function(t) {
          w(t.data)
        },
        P = function(t) {
          i.postMessage(t + '', d.protocol + '//' + d.host)
        }
      ;(v && b) ||
        ((v = function(t) {
          var n = [],
            e = 1
          while (arguments.length > e) n.push(arguments[e++])
          return (
            (m[++x] = function() {
              ;('function' == typeof t ? t : Function(t)).apply(void 0, n)
            }),
            r(x),
            x
          )
        }),
        (b = function(t) {
          delete m[t]
        }),
        p
          ? (r = function(t) {
              y.nextTick(O(t))
            })
          : g && g.now
          ? (r = function(t) {
              g.now(O(t))
            })
          : h && !l
          ? ((o = new h()),
            (c = o.port2),
            (o.port1.onmessage = S),
            (r = a(c.postMessage, c, 1)))
          : i.addEventListener &&
            'function' == typeof postMessage &&
            !i.importScripts &&
            d &&
            'file:' !== d.protocol &&
            !u(P)
          ? ((r = P), i.addEventListener('message', S, !1))
          : (r =
              j in s('script')
                ? function(t) {
                    f.appendChild(s('script'))[j] = function() {
                      f.removeChild(this), w(t)
                    }
                  }
                : function(t) {
                    setTimeout(O(t), 0)
                  })),
        (t.exports = { set: v, clear: b })
    },
    '2d00': function(t, n, e) {
      var r,
        o,
        c = e('da84'),
        i = e('342f'),
        u = c.process,
        a = u && u.versions,
        f = a && a.v8
      f
        ? ((r = f.split('.')), (o = r[0] + r[1]))
        : i &&
          ((r = i.match(/Edge\/(\d+)/)),
          (!r || r[1] >= 74) &&
            ((r = i.match(/Chrome\/(\d+)/)), r && (o = r[1]))),
        (t.exports = o && +o)
    },
    '342f': function(t, n, e) {
      var r = e('d066')
      t.exports = r('navigator', 'userAgent') || ''
    },
    '35a1': function(t, n, e) {
      var r = e('f5df'),
        o = e('3f8c'),
        c = e('b622'),
        i = c('iterator')
      t.exports = function(t) {
        if (void 0 != t) return t[i] || t['@@iterator'] || o[r(t)]
      }
    },
    '37e8': function(t, n, e) {
      var r = e('83ab'),
        o = e('9bf2'),
        c = e('825a'),
        i = e('df75')
      t.exports = r
        ? Object.defineProperties
        : function(t, n) {
            c(t)
            var e,
              r = i(n),
              u = r.length,
              a = 0
            while (u > a) o.f(t, (e = r[a++]), n[e])
            return t
          }
    },
    '3bbe': function(t, n, e) {
      var r = e('861d')
      t.exports = function(t) {
        if (!r(t) && null !== t)
          throw TypeError("Can't set " + String(t) + ' as a prototype')
        return t
      }
    },
    '3f8c': function(t, n) {
      t.exports = {}
    },
    '428f': function(t, n, e) {
      var r = e('da84')
      t.exports = r
    },
    '44ad': function(t, n, e) {
      var r = e('d039'),
        o = e('c6b6'),
        c = ''.split
      t.exports = r(function() {
        return !Object('z').propertyIsEnumerable(0)
      })
        ? function(t) {
            return 'String' == o(t) ? c.call(t, '') : Object(t)
          }
        : Object
    },
    '44d2': function(t, n, e) {
      var r = e('b622'),
        o = e('7c73'),
        c = e('9bf2'),
        i = r('unscopables'),
        u = Array.prototype
      void 0 == u[i] && c.f(u, i, { configurable: !0, value: o(null) }),
        (t.exports = function(t) {
          u[i][t] = !0
        })
    },
    '44de': function(t, n, e) {
      var r = e('da84')
      t.exports = function(t, n) {
        var e = r.console
        e && e.error && (1 === arguments.length ? e.error(t) : e.error(t, n))
      }
    },
    4840: function(t, n, e) {
      var r = e('825a'),
        o = e('1c0b'),
        c = e('b622'),
        i = c('species')
      t.exports = function(t, n) {
        var e,
          c = r(t).constructor
        return void 0 === c || void 0 == (e = r(c)[i]) ? n : o(e)
      }
    },
    4930: function(t, n, e) {
      var r = e('d039')
      t.exports =
        !!Object.getOwnPropertySymbols &&
        !r(function() {
          return !String(Symbol())
        })
    },
    '4d64': function(t, n, e) {
      var r = e('fc6a'),
        o = e('50c4'),
        c = e('23cb'),
        i = function(t) {
          return function(n, e, i) {
            var u,
              a = r(n),
              f = o(a.length),
              s = c(i, f)
            if (t && e != e) {
              while (f > s) if (((u = a[s++]), u != u)) return !0
            } else
              for (; f > s; s++)
                if ((t || s in a) && a[s] === e) return t || s || 0
            return !t && -1
          }
        }
      t.exports = { includes: i(!0), indexOf: i(!1) }
    },
    '50c4': function(t, n, e) {
      var r = e('a691'),
        o = Math.min
      t.exports = function(t) {
        return t > 0 ? o(r(t), 9007199254740991) : 0
      }
    },
    5135: function(t, n) {
      var e = {}.hasOwnProperty
      t.exports = function(t, n) {
        return e.call(t, n)
      }
    },
    5692: function(t, n, e) {
      var r = e('c430'),
        o = e('c6cd')
      ;(t.exports = function(t, n) {
        return o[t] || (o[t] = void 0 !== n ? n : {})
      })('versions', []).push({
        version: '3.7.0',
        mode: r ? 'pure' : 'global',
        copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
      })
    },
    '56ef': function(t, n, e) {
      var r = e('d066'),
        o = e('241c'),
        c = e('7418'),
        i = e('825a')
      t.exports =
        r('Reflect', 'ownKeys') ||
        function(t) {
          var n = o.f(i(t)),
            e = c.f
          return e ? n.concat(e(t)) : n
        }
    },
    '5c6c': function(t, n) {
      t.exports = function(t, n) {
        return {
          enumerable: !(1 & t),
          configurable: !(2 & t),
          writable: !(4 & t),
          value: n
        }
      }
    },
    '605d': function(t, n, e) {
      var r = e('c6b6'),
        o = e('da84')
      t.exports = 'process' == r(o.process)
    },
    '60da': function(t, n, e) {
      'use strict'
      var r = e('83ab'),
        o = e('d039'),
        c = e('df75'),
        i = e('7418'),
        u = e('d1e7'),
        a = e('7b0b'),
        f = e('44ad'),
        s = Object.assign,
        l = Object.defineProperty
      t.exports =
        !s ||
        o(function() {
          if (
            r &&
            1 !==
              s(
                { b: 1 },
                s(
                  l({}, 'a', {
                    enumerable: !0,
                    get: function() {
                      l(this, 'b', { value: 3, enumerable: !1 })
                    }
                  }),
                  { b: 2 }
                )
              ).b
          )
            return !0
          var t = {},
            n = {},
            e = Symbol(),
            o = 'abcdefghijklmnopqrst'
          return (
            (t[e] = 7),
            o.split('').forEach(function(t) {
              n[t] = t
            }),
            7 != s({}, t)[e] || c(s({}, n)).join('') != o
          )
        })
          ? function(t, n) {
              var e = a(t),
                o = arguments.length,
                s = 1,
                l = i.f,
                p = u.f
              while (o > s) {
                var d,
                  v = f(arguments[s++]),
                  b = l ? c(v).concat(l(v)) : c(v),
                  y = b.length,
                  h = 0
                while (y > h)
                  (d = b[h++]), (r && !p.call(v, d)) || (e[d] = v[d])
              }
              return e
            }
          : s
    },
    '69f3': function(t, n, e) {
      var r,
        o,
        c,
        i = e('7f9a'),
        u = e('da84'),
        a = e('861d'),
        f = e('9112'),
        s = e('5135'),
        l = e('c6cd'),
        p = e('f772'),
        d = e('d012'),
        v = u.WeakMap,
        b = function(t) {
          return c(t) ? o(t) : r(t, {})
        },
        y = function(t) {
          return function(n) {
            var e
            if (!a(n) || (e = o(n)).type !== t)
              throw TypeError('Incompatible receiver, ' + t + ' required')
            return e
          }
        }
      if (i) {
        var h = l.state || (l.state = new v()),
          g = h.get,
          x = h.has,
          m = h.set
        ;(r = function(t, n) {
          return (n.facade = t), m.call(h, t, n), n
        }),
          (o = function(t) {
            return g.call(h, t) || {}
          }),
          (c = function(t) {
            return x.call(h, t)
          })
      } else {
        var j = p('state')
        ;(d[j] = !0),
          (r = function(t, n) {
            return (n.facade = t), f(t, j, n), n
          }),
          (o = function(t) {
            return s(t, j) ? t[j] : {}
          }),
          (c = function(t) {
            return s(t, j)
          })
      }
      t.exports = { set: r, get: o, has: c, enforce: b, getterFor: y }
    },
    '6eeb': function(t, n, e) {
      var r = e('da84'),
        o = e('9112'),
        c = e('5135'),
        i = e('ce4e'),
        u = e('8925'),
        a = e('69f3'),
        f = a.get,
        s = a.enforce,
        l = String(String).split('String')
      ;(t.exports = function(t, n, e, u) {
        var a,
          f = !!u && !!u.unsafe,
          p = !!u && !!u.enumerable,
          d = !!u && !!u.noTargetGet
        'function' == typeof e &&
          ('string' != typeof n || c(e, 'name') || o(e, 'name', n),
          (a = s(e)),
          a.source || (a.source = l.join('string' == typeof n ? n : ''))),
          t !== r
            ? (f ? !d && t[n] && (p = !0) : delete t[n],
              p ? (t[n] = e) : o(t, n, e))
            : p
            ? (t[n] = e)
            : i(n, e)
      })(Function.prototype, 'toString', function() {
        return ('function' == typeof this && f(this).source) || u(this)
      })
    },
    7418: function(t, n) {
      n.f = Object.getOwnPropertySymbols
    },
    7839: function(t, n) {
      t.exports = [
        'constructor',
        'hasOwnProperty',
        'isPrototypeOf',
        'propertyIsEnumerable',
        'toLocaleString',
        'toString',
        'valueOf'
      ]
    },
    '7b0b': function(t, n, e) {
      var r = e('1d80')
      t.exports = function(t) {
        return Object(r(t))
      }
    },
    '7c73': function(t, n, e) {
      var r,
        o = e('825a'),
        c = e('37e8'),
        i = e('7839'),
        u = e('d012'),
        a = e('1be4'),
        f = e('cc12'),
        s = e('f772'),
        l = '>',
        p = '<',
        d = 'prototype',
        v = 'script',
        b = s('IE_PROTO'),
        y = function() {},
        h = function(t) {
          return p + v + l + t + p + '/' + v + l
        },
        g = function(t) {
          t.write(h('')), t.close()
          var n = t.parentWindow.Object
          return (t = null), n
        },
        x = function() {
          var t,
            n = f('iframe'),
            e = 'java' + v + ':'
          return (
            (n.style.display = 'none'),
            a.appendChild(n),
            (n.src = String(e)),
            (t = n.contentWindow.document),
            t.open(),
            t.write(h('document.F=Object')),
            t.close(),
            t.F
          )
        },
        m = function() {
          try {
            r = document.domain && new ActiveXObject('htmlfile')
          } catch (n) {}
          m = r ? g(r) : x()
          var t = i.length
          while (t--) delete m[d][i[t]]
          return m()
        }
      ;(u[b] = !0),
        (t.exports =
          Object.create ||
          function(t, n) {
            var e
            return (
              null !== t
                ? ((y[d] = o(t)), (e = new y()), (y[d] = null), (e[b] = t))
                : (e = m()),
              void 0 === n ? e : c(e, n)
            )
          })
    },
    '7dd0': function(t, n, e) {
      'use strict'
      var r = e('23e7'),
        o = e('9ed3'),
        c = e('e163'),
        i = e('d2bb'),
        u = e('d44e'),
        a = e('9112'),
        f = e('6eeb'),
        s = e('b622'),
        l = e('c430'),
        p = e('3f8c'),
        d = e('ae93'),
        v = d.IteratorPrototype,
        b = d.BUGGY_SAFARI_ITERATORS,
        y = s('iterator'),
        h = 'keys',
        g = 'values',
        x = 'entries',
        m = function() {
          return this
        }
      t.exports = function(t, n, e, s, d, j, w) {
        o(e, n, s)
        var O,
          S,
          P,
          E = function(t) {
            if (t === d && I) return I
            if (!b && t in _) return _[t]
            switch (t) {
              case h:
                return function() {
                  return new e(this, t)
                }
              case g:
                return function() {
                  return new e(this, t)
                }
              case x:
                return function() {
                  return new e(this, t)
                }
            }
            return function() {
              return new e(this)
            }
          },
          T = n + ' Iterator',
          k = !1,
          _ = t.prototype,
          A = _[y] || _['@@iterator'] || (d && _[d]),
          I = (!b && A) || E(d),
          M = ('Array' == n && _.entries) || A
        if (
          (M &&
            ((O = c(M.call(new t()))),
            v !== Object.prototype &&
              O.next &&
              (l ||
                c(O) === v ||
                (i ? i(O, v) : 'function' != typeof O[y] && a(O, y, m)),
              u(O, T, !0, !0),
              l && (p[T] = m))),
          d == g &&
            A &&
            A.name !== g &&
            ((k = !0),
            (I = function() {
              return A.call(this)
            })),
          (l && !w) || _[y] === I || a(_, y, I),
          (p[n] = I),
          d)
        )
          if (((S = { values: E(g), keys: j ? I : E(h), entries: E(x) }), w))
            for (P in S) (b || k || !(P in _)) && f(_, P, S[P])
          else r({ target: n, proto: !0, forced: b || k }, S)
        return S
      }
    },
    '7f9a': function(t, n, e) {
      var r = e('da84'),
        o = e('8925'),
        c = r.WeakMap
      t.exports = 'function' === typeof c && /native code/.test(o(c))
    },
    '825a': function(t, n, e) {
      var r = e('861d')
      t.exports = function(t) {
        if (!r(t)) throw TypeError(String(t) + ' is not an object')
        return t
      }
    },
    '83ab': function(t, n, e) {
      var r = e('d039')
      t.exports = !r(function() {
        return (
          7 !=
          Object.defineProperty({}, 1, {
            get: function() {
              return 7
            }
          })[1]
        )
      })
    },
    '861d': function(t, n) {
      t.exports = function(t) {
        return 'object' === typeof t ? null !== t : 'function' === typeof t
      }
    },
    8925: function(t, n, e) {
      var r = e('c6cd'),
        o = Function.toString
      'function' != typeof r.inspectSource &&
        (r.inspectSource = function(t) {
          return o.call(t)
        }),
        (t.exports = r.inspectSource)
    },
    '8b09': function(t, n, e) {
      'use strict'
      e.r(n)
      e('b0c0'), e('e260'), e('e6cf'), e('cca6'), e('a79d')
      var r = e('8bbf'),
        o = { key: 1, class: 'icon axe-icon-loading' },
        c = { key: 2 }
      function i(t, n, e, i, u, a) {
        return (
          Object(r['openBlock'])(),
          Object(r['createBlock'])(
            'button',
            { class: i.classify, disabled: e.disabled || e.loading },
            [
              e.icon && !e.loading
                ? (Object(r['openBlock'])(),
                  Object(r['createBlock'])(
                    'i',
                    { key: 0, class: ['icon', e.icon] },
                    null,
                    2
                  ))
                : Object(r['createCommentVNode'])('', !0),
              !e.icon && e.loading
                ? (Object(r['openBlock'])(), Object(r['createBlock'])('i', o))
                : Object(r['createCommentVNode'])('', !0),
              t.$slots.default
                ? (Object(r['openBlock'])(),
                  Object(r['createBlock'])('span', c, [
                    Object(r['renderSlot'])(t.$slots, 'default')
                  ]))
                : Object(r['createCommentVNode'])('', !0)
            ],
            10,
            ['disabled']
          )
        )
      }
      e('caad'), e('a15b')
      var u = ['default', 'primary', 'success', 'info', 'warning', 'danger'],
        a = ['left', 'right'],
        f = {
          name: 'AxeButton',
          props: {
            type: {
              type: String,
              default: 'default',
              validator: function(t) {
                if (!u.includes(t))
                  throw Error(
                    '类型“type”参数值错误，值只能是' +
                      u.join('、') +
                      '中的一种。'
                  )
                return !0
              }
            },
            icon: String,
            loading: Boolean,
            position: {
              type: String,
              default: 'left',
              require: !1,
              validator: function(t) {
                if (!a.includes(t))
                  throw Error(
                    '\n            类型“position”参数值错误，值只能是\n            '.concat(
                      a.join('、'),
                      '\n            中的一种。\n          '
                    )
                  )
              }
            },
            disabled: Boolean
          },
          setup: function(t) {
            var n = Object(r['computed'])(function() {
              return [
                'axe-button',
                'axe-button-'.concat(t.type),
                t.icon && 'axe-button-'.concat(t.position)
              ]
            })
            return { classify: n }
          }
        }
      f.render = i
      var s = f
      e('eff0')
      s.install = function(t) {
        t.component(s.name, s)
      }
      n['default'] = s
    },
    '8bbf': function(n, e) {
      n.exports = t
    },
    '90e3': function(t, n) {
      var e = 0,
        r = Math.random()
      t.exports = function(t) {
        return (
          'Symbol(' +
          String(void 0 === t ? '' : t) +
          ')_' +
          (++e + r).toString(36)
        )
      }
    },
    9112: function(t, n, e) {
      var r = e('83ab'),
        o = e('9bf2'),
        c = e('5c6c')
      t.exports = r
        ? function(t, n, e) {
            return o.f(t, n, c(1, e))
          }
        : function(t, n, e) {
            return (t[n] = e), t
          }
    },
    '94ca': function(t, n, e) {
      var r = e('d039'),
        o = /#|\.prototype\./,
        c = function(t, n) {
          var e = u[i(t)]
          return e == f || (e != a && ('function' == typeof n ? r(n) : !!n))
        },
        i = (c.normalize = function(t) {
          return String(t)
            .replace(o, '.')
            .toLowerCase()
        }),
        u = (c.data = {}),
        a = (c.NATIVE = 'N'),
        f = (c.POLYFILL = 'P')
      t.exports = c
    },
    '9bf2': function(t, n, e) {
      var r = e('83ab'),
        o = e('0cfb'),
        c = e('825a'),
        i = e('c04e'),
        u = Object.defineProperty
      n.f = r
        ? u
        : function(t, n, e) {
            if ((c(t), (n = i(n, !0)), c(e), o))
              try {
                return u(t, n, e)
              } catch (r) {}
            if ('get' in e || 'set' in e)
              throw TypeError('Accessors not supported')
            return 'value' in e && (t[n] = e.value), t
          }
    },
    '9ed3': function(t, n, e) {
      'use strict'
      var r = e('ae93').IteratorPrototype,
        o = e('7c73'),
        c = e('5c6c'),
        i = e('d44e'),
        u = e('3f8c'),
        a = function() {
          return this
        }
      t.exports = function(t, n, e) {
        var f = n + ' Iterator'
        return (
          (t.prototype = o(r, { next: c(1, e) })),
          i(t, f, !1, !0),
          (u[f] = a),
          t
        )
      }
    },
    a15b: function(t, n, e) {
      'use strict'
      var r = e('23e7'),
        o = e('44ad'),
        c = e('fc6a'),
        i = e('a640'),
        u = [].join,
        a = o != Object,
        f = i('join', ',')
      r(
        { target: 'Array', proto: !0, forced: a || !f },
        {
          join: function(t) {
            return u.call(c(this), void 0 === t ? ',' : t)
          }
        }
      )
    },
    a640: function(t, n, e) {
      'use strict'
      var r = e('d039')
      t.exports = function(t, n) {
        var e = [][t]
        return (
          !!e &&
          r(function() {
            e.call(
              null,
              n ||
                function() {
                  throw 1
                },
              1
            )
          })
        )
      }
    },
    a691: function(t, n) {
      var e = Math.ceil,
        r = Math.floor
      t.exports = function(t) {
        return isNaN((t = +t)) ? 0 : (t > 0 ? r : e)(t)
      }
    },
    a79d: function(t, n, e) {
      'use strict'
      var r = e('23e7'),
        o = e('c430'),
        c = e('fea9'),
        i = e('d039'),
        u = e('d066'),
        a = e('4840'),
        f = e('cdf9'),
        s = e('6eeb'),
        l =
          !!c &&
          i(function() {
            c.prototype['finally'].call({ then: function() {} }, function() {})
          })
      r(
        { target: 'Promise', proto: !0, real: !0, forced: l },
        {
          finally: function(t) {
            var n = a(this, u('Promise')),
              e = 'function' == typeof t
            return this.then(
              e
                ? function(e) {
                    return f(n, t()).then(function() {
                      return e
                    })
                  }
                : t,
              e
                ? function(e) {
                    return f(n, t()).then(function() {
                      throw e
                    })
                  }
                : t
            )
          }
        }
      ),
        o ||
          'function' != typeof c ||
          c.prototype['finally'] ||
          s(c.prototype, 'finally', u('Promise').prototype['finally'])
    },
    ae40: function(t, n, e) {
      var r = e('83ab'),
        o = e('d039'),
        c = e('5135'),
        i = Object.defineProperty,
        u = {},
        a = function(t) {
          throw t
        }
      t.exports = function(t, n) {
        if (c(u, t)) return u[t]
        n || (n = {})
        var e = [][t],
          f = !!c(n, 'ACCESSORS') && n.ACCESSORS,
          s = c(n, 0) ? n[0] : a,
          l = c(n, 1) ? n[1] : void 0
        return (u[t] =
          !!e &&
          !o(function() {
            if (f && !r) return !0
            var t = { length: -1 }
            f ? i(t, 1, { enumerable: !0, get: a }) : (t[1] = 1),
              e.call(t, s, l)
          }))
      }
    },
    ae93: function(t, n, e) {
      'use strict'
      var r,
        o,
        c,
        i = e('e163'),
        u = e('9112'),
        a = e('5135'),
        f = e('b622'),
        s = e('c430'),
        l = f('iterator'),
        p = !1,
        d = function() {
          return this
        }
      ;[].keys &&
        ((c = [].keys()),
        'next' in c
          ? ((o = i(i(c))), o !== Object.prototype && (r = o))
          : (p = !0)),
        void 0 == r && (r = {}),
        s || a(r, l) || u(r, l, d),
        (t.exports = { IteratorPrototype: r, BUGGY_SAFARI_ITERATORS: p })
    },
    b0c0: function(t, n, e) {
      var r = e('83ab'),
        o = e('9bf2').f,
        c = Function.prototype,
        i = c.toString,
        u = /^\s*function ([^ (]*)/,
        a = 'name'
      r &&
        !(a in c) &&
        o(c, a, {
          configurable: !0,
          get: function() {
            try {
              return i.call(this).match(u)[1]
            } catch (t) {
              return ''
            }
          }
        })
    },
    b575: function(t, n, e) {
      var r,
        o,
        c,
        i,
        u,
        a,
        f,
        s,
        l = e('da84'),
        p = e('06cf').f,
        d = e('2cf4').set,
        v = e('1cdc'),
        b = e('605d'),
        y = l.MutationObserver || l.WebKitMutationObserver,
        h = l.document,
        g = l.process,
        x = l.Promise,
        m = p(l, 'queueMicrotask'),
        j = m && m.value
      j ||
        ((r = function() {
          var t, n
          b && (t = g.domain) && t.exit()
          while (o) {
            ;(n = o.fn), (o = o.next)
            try {
              n()
            } catch (e) {
              throw (o ? i() : (c = void 0), e)
            }
          }
          ;(c = void 0), t && t.enter()
        }),
        !v && !b && y && h
          ? ((u = !0),
            (a = h.createTextNode('')),
            new y(r).observe(a, { characterData: !0 }),
            (i = function() {
              a.data = u = !u
            }))
          : x && x.resolve
          ? ((f = x.resolve(void 0)),
            (s = f.then),
            (i = function() {
              s.call(f, r)
            }))
          : (i = b
              ? function() {
                  g.nextTick(r)
                }
              : function() {
                  d.call(l, r)
                })),
        (t.exports =
          j ||
          function(t) {
            var n = { fn: t, next: void 0 }
            c && (c.next = n), o || ((o = n), i()), (c = n)
          })
    },
    b622: function(t, n, e) {
      var r = e('da84'),
        o = e('5692'),
        c = e('5135'),
        i = e('90e3'),
        u = e('4930'),
        a = e('fdbf'),
        f = o('wks'),
        s = r.Symbol,
        l = a ? s : (s && s.withoutSetter) || i
      t.exports = function(t) {
        return (
          c(f, t) || (u && c(s, t) ? (f[t] = s[t]) : (f[t] = l('Symbol.' + t))),
          f[t]
        )
      }
    },
    c04e: function(t, n, e) {
      var r = e('861d')
      t.exports = function(t, n) {
        if (!r(t)) return t
        var e, o
        if (n && 'function' == typeof (e = t.toString) && !r((o = e.call(t))))
          return o
        if ('function' == typeof (e = t.valueOf) && !r((o = e.call(t))))
          return o
        if (!n && 'function' == typeof (e = t.toString) && !r((o = e.call(t))))
          return o
        throw TypeError("Can't convert object to primitive value")
      }
    },
    c430: function(t, n) {
      t.exports = !1
    },
    c6b6: function(t, n) {
      var e = {}.toString
      t.exports = function(t) {
        return e.call(t).slice(8, -1)
      }
    },
    c6cd: function(t, n, e) {
      var r = e('da84'),
        o = e('ce4e'),
        c = '__core-js_shared__',
        i = r[c] || o(c, {})
      t.exports = i
    },
    c8ba: function(t, n) {
      var e
      e = (function() {
        return this
      })()
      try {
        e = e || new Function('return this')()
      } catch (r) {
        'object' === typeof window && (e = window)
      }
      t.exports = e
    },
    ca84: function(t, n, e) {
      var r = e('5135'),
        o = e('fc6a'),
        c = e('4d64').indexOf,
        i = e('d012')
      t.exports = function(t, n) {
        var e,
          u = o(t),
          a = 0,
          f = []
        for (e in u) !r(i, e) && r(u, e) && f.push(e)
        while (n.length > a) r(u, (e = n[a++])) && (~c(f, e) || f.push(e))
        return f
      }
    },
    caad: function(t, n, e) {
      'use strict'
      var r = e('23e7'),
        o = e('4d64').includes,
        c = e('44d2'),
        i = e('ae40'),
        u = i('indexOf', { ACCESSORS: !0, 1: 0 })
      r(
        { target: 'Array', proto: !0, forced: !u },
        {
          includes: function(t) {
            return o(this, t, arguments.length > 1 ? arguments[1] : void 0)
          }
        }
      ),
        c('includes')
    },
    cc12: function(t, n, e) {
      var r = e('da84'),
        o = e('861d'),
        c = r.document,
        i = o(c) && o(c.createElement)
      t.exports = function(t) {
        return i ? c.createElement(t) : {}
      }
    },
    cca6: function(t, n, e) {
      var r = e('23e7'),
        o = e('60da')
      r(
        { target: 'Object', stat: !0, forced: Object.assign !== o },
        { assign: o }
      )
    },
    cdf9: function(t, n, e) {
      var r = e('825a'),
        o = e('861d'),
        c = e('f069')
      t.exports = function(t, n) {
        if ((r(t), o(n) && n.constructor === t)) return n
        var e = c.f(t),
          i = e.resolve
        return i(n), e.promise
      }
    },
    ce4e: function(t, n, e) {
      var r = e('da84'),
        o = e('9112')
      t.exports = function(t, n) {
        try {
          o(r, t, n)
        } catch (e) {
          r[t] = n
        }
        return n
      }
    },
    d012: function(t, n) {
      t.exports = {}
    },
    d039: function(t, n) {
      t.exports = function(t) {
        try {
          return !!t()
        } catch (n) {
          return !0
        }
      }
    },
    d066: function(t, n, e) {
      var r = e('428f'),
        o = e('da84'),
        c = function(t) {
          return 'function' == typeof t ? t : void 0
        }
      t.exports = function(t, n) {
        return arguments.length < 2
          ? c(r[t]) || c(o[t])
          : (r[t] && r[t][n]) || (o[t] && o[t][n])
      }
    },
    d1e7: function(t, n, e) {
      'use strict'
      var r = {}.propertyIsEnumerable,
        o = Object.getOwnPropertyDescriptor,
        c = o && !r.call({ 1: 2 }, 1)
      n.f = c
        ? function(t) {
            var n = o(this, t)
            return !!n && n.enumerable
          }
        : r
    },
    d2bb: function(t, n, e) {
      var r = e('825a'),
        o = e('3bbe')
      t.exports =
        Object.setPrototypeOf ||
        ('__proto__' in {}
          ? (function() {
              var t,
                n = !1,
                e = {}
              try {
                ;(t = Object.getOwnPropertyDescriptor(
                  Object.prototype,
                  '__proto__'
                ).set),
                  t.call(e, []),
                  (n = e instanceof Array)
              } catch (c) {}
              return function(e, c) {
                return r(e), o(c), n ? t.call(e, c) : (e.__proto__ = c), e
              }
            })()
          : void 0)
    },
    d44e: function(t, n, e) {
      var r = e('9bf2').f,
        o = e('5135'),
        c = e('b622'),
        i = c('toStringTag')
      t.exports = function(t, n, e) {
        t &&
          !o((t = e ? t : t.prototype), i) &&
          r(t, i, { configurable: !0, value: n })
      }
    },
    da84: function(t, n, e) {
      ;(function(n) {
        var e = function(t) {
          return t && t.Math == Math && t
        }
        t.exports =
          e('object' == typeof globalThis && globalThis) ||
          e('object' == typeof window && window) ||
          e('object' == typeof self && self) ||
          e('object' == typeof n && n) ||
          (function() {
            return this
          })() ||
          Function('return this')()
      }.call(this, e('c8ba')))
    },
    df75: function(t, n, e) {
      var r = e('ca84'),
        o = e('7839')
      t.exports =
        Object.keys ||
        function(t) {
          return r(t, o)
        }
    },
    e163: function(t, n, e) {
      var r = e('5135'),
        o = e('7b0b'),
        c = e('f772'),
        i = e('e177'),
        u = c('IE_PROTO'),
        a = Object.prototype
      t.exports = i
        ? Object.getPrototypeOf
        : function(t) {
            return (
              (t = o(t)),
              r(t, u)
                ? t[u]
                : 'function' == typeof t.constructor &&
                  t instanceof t.constructor
                ? t.constructor.prototype
                : t instanceof Object
                ? a
                : null
            )
          }
    },
    e177: function(t, n, e) {
      var r = e('d039')
      t.exports = !r(function() {
        function t() {}
        return (
          (t.prototype.constructor = null),
          Object.getPrototypeOf(new t()) !== t.prototype
        )
      })
    },
    e260: function(t, n, e) {
      'use strict'
      var r = e('fc6a'),
        o = e('44d2'),
        c = e('3f8c'),
        i = e('69f3'),
        u = e('7dd0'),
        a = 'Array Iterator',
        f = i.set,
        s = i.getterFor(a)
      ;(t.exports = u(
        Array,
        'Array',
        function(t, n) {
          f(this, { type: a, target: r(t), index: 0, kind: n })
        },
        function() {
          var t = s(this),
            n = t.target,
            e = t.kind,
            r = t.index++
          return !n || r >= n.length
            ? ((t.target = void 0), { value: void 0, done: !0 })
            : 'keys' == e
            ? { value: r, done: !1 }
            : 'values' == e
            ? { value: n[r], done: !1 }
            : { value: [r, n[r]], done: !1 }
        },
        'values'
      )),
        (c.Arguments = c.Array),
        o('keys'),
        o('values'),
        o('entries')
    },
    e2cc: function(t, n, e) {
      var r = e('6eeb')
      t.exports = function(t, n, e) {
        for (var o in n) r(t, o, n[o], e)
        return t
      }
    },
    e667: function(t, n) {
      t.exports = function(t) {
        try {
          return { error: !1, value: t() }
        } catch (n) {
          return { error: !0, value: n }
        }
      }
    },
    e6cf: function(t, n, e) {
      'use strict'
      var r,
        o,
        c,
        i,
        u = e('23e7'),
        a = e('c430'),
        f = e('da84'),
        s = e('d066'),
        l = e('fea9'),
        p = e('6eeb'),
        d = e('e2cc'),
        v = e('d44e'),
        b = e('2626'),
        y = e('861d'),
        h = e('1c0b'),
        g = e('19aa'),
        x = e('8925'),
        m = e('2266'),
        j = e('1c7e'),
        w = e('4840'),
        O = e('2cf4').set,
        S = e('b575'),
        P = e('cdf9'),
        E = e('44de'),
        T = e('f069'),
        k = e('e667'),
        _ = e('69f3'),
        A = e('94ca'),
        I = e('b622'),
        M = e('605d'),
        R = e('2d00'),
        C = I('species'),
        B = 'Promise',
        F = _.get,
        N = _.set,
        D = _.getterFor(B),
        L = l,
        q = f.TypeError,
        G = f.document,
        z = f.process,
        U = s('fetch'),
        V = T.f,
        W = V,
        Y = !!(G && G.createEvent && f.dispatchEvent),
        K = 'function' == typeof PromiseRejectionEvent,
        $ = 'unhandledrejection',
        H = 'rejectionhandled',
        X = 0,
        J = 1,
        Q = 2,
        Z = 1,
        tt = 2,
        nt = A(B, function() {
          var t = x(L) !== String(L)
          if (!t) {
            if (66 === R) return !0
            if (!M && !K) return !0
          }
          if (a && !L.prototype['finally']) return !0
          if (R >= 51 && /native code/.test(L)) return !1
          var n = L.resolve(1),
            e = function(t) {
              t(
                function() {},
                function() {}
              )
            },
            r = (n.constructor = {})
          return (r[C] = e), !(n.then(function() {}) instanceof e)
        }),
        et =
          nt ||
          !j(function(t) {
            L.all(t)['catch'](function() {})
          }),
        rt = function(t) {
          var n
          return !(!y(t) || 'function' != typeof (n = t.then)) && n
        },
        ot = function(t, n) {
          if (!t.notified) {
            t.notified = !0
            var e = t.reactions
            S(function() {
              var r = t.value,
                o = t.state == J,
                c = 0
              while (e.length > c) {
                var i,
                  u,
                  a,
                  f = e[c++],
                  s = o ? f.ok : f.fail,
                  l = f.resolve,
                  p = f.reject,
                  d = f.domain
                try {
                  s
                    ? (o || (t.rejection === tt && at(t), (t.rejection = Z)),
                      !0 === s
                        ? (i = r)
                        : (d && d.enter(),
                          (i = s(r)),
                          d && (d.exit(), (a = !0))),
                      i === f.promise
                        ? p(q('Promise-chain cycle'))
                        : (u = rt(i))
                        ? u.call(i, l, p)
                        : l(i))
                    : p(r)
                } catch (v) {
                  d && !a && d.exit(), p(v)
                }
              }
              ;(t.reactions = []), (t.notified = !1), n && !t.rejection && it(t)
            })
          }
        },
        ct = function(t, n, e) {
          var r, o
          Y
            ? ((r = G.createEvent('Event')),
              (r.promise = n),
              (r.reason = e),
              r.initEvent(t, !1, !0),
              f.dispatchEvent(r))
            : (r = { promise: n, reason: e }),
            !K && (o = f['on' + t])
              ? o(r)
              : t === $ && E('Unhandled promise rejection', e)
        },
        it = function(t) {
          O.call(f, function() {
            var n,
              e = t.facade,
              r = t.value,
              o = ut(t)
            if (
              o &&
              ((n = k(function() {
                M ? z.emit('unhandledRejection', r, e) : ct($, e, r)
              })),
              (t.rejection = M || ut(t) ? tt : Z),
              n.error)
            )
              throw n.value
          })
        },
        ut = function(t) {
          return t.rejection !== Z && !t.parent
        },
        at = function(t) {
          O.call(f, function() {
            var n = t.facade
            M ? z.emit('rejectionHandled', n) : ct(H, n, t.value)
          })
        },
        ft = function(t, n, e) {
          return function(r) {
            t(n, r, e)
          }
        },
        st = function(t, n, e) {
          t.done ||
            ((t.done = !0),
            e && (t = e),
            (t.value = n),
            (t.state = Q),
            ot(t, !0))
        },
        lt = function(t, n, e) {
          if (!t.done) {
            ;(t.done = !0), e && (t = e)
            try {
              if (t.facade === n) throw q("Promise can't be resolved itself")
              var r = rt(n)
              r
                ? S(function() {
                    var e = { done: !1 }
                    try {
                      r.call(n, ft(lt, e, t), ft(st, e, t))
                    } catch (o) {
                      st(e, o, t)
                    }
                  })
                : ((t.value = n), (t.state = J), ot(t, !1))
            } catch (o) {
              st({ done: !1 }, o, t)
            }
          }
        }
      nt &&
        ((L = function(t) {
          g(this, L, B), h(t), r.call(this)
          var n = F(this)
          try {
            t(ft(lt, n), ft(st, n))
          } catch (e) {
            st(n, e)
          }
        }),
        (r = function(t) {
          N(this, {
            type: B,
            done: !1,
            notified: !1,
            parent: !1,
            reactions: [],
            rejection: !1,
            state: X,
            value: void 0
          })
        }),
        (r.prototype = d(L.prototype, {
          then: function(t, n) {
            var e = D(this),
              r = V(w(this, L))
            return (
              (r.ok = 'function' != typeof t || t),
              (r.fail = 'function' == typeof n && n),
              (r.domain = M ? z.domain : void 0),
              (e.parent = !0),
              e.reactions.push(r),
              e.state != X && ot(e, !1),
              r.promise
            )
          },
          catch: function(t) {
            return this.then(void 0, t)
          }
        })),
        (o = function() {
          var t = new r(),
            n = F(t)
          ;(this.promise = t),
            (this.resolve = ft(lt, n)),
            (this.reject = ft(st, n))
        }),
        (T.f = V = function(t) {
          return t === L || t === c ? new o(t) : W(t)
        }),
        a ||
          'function' != typeof l ||
          ((i = l.prototype.then),
          p(
            l.prototype,
            'then',
            function(t, n) {
              var e = this
              return new L(function(t, n) {
                i.call(e, t, n)
              }).then(t, n)
            },
            { unsafe: !0 }
          ),
          'function' == typeof U &&
            u(
              { global: !0, enumerable: !0, forced: !0 },
              {
                fetch: function(t) {
                  return P(L, U.apply(f, arguments))
                }
              }
            ))),
        u({ global: !0, wrap: !0, forced: nt }, { Promise: L }),
        v(L, B, !1, !0),
        b(B),
        (c = s(B)),
        u(
          { target: B, stat: !0, forced: nt },
          {
            reject: function(t) {
              var n = V(this)
              return n.reject.call(void 0, t), n.promise
            }
          }
        ),
        u(
          { target: B, stat: !0, forced: a || nt },
          {
            resolve: function(t) {
              return P(a && this === c ? L : this, t)
            }
          }
        ),
        u(
          { target: B, stat: !0, forced: et },
          {
            all: function(t) {
              var n = this,
                e = V(n),
                r = e.resolve,
                o = e.reject,
                c = k(function() {
                  var e = h(n.resolve),
                    c = [],
                    i = 0,
                    u = 1
                  m(t, function(t) {
                    var a = i++,
                      f = !1
                    c.push(void 0),
                      u++,
                      e.call(n, t).then(function(t) {
                        f || ((f = !0), (c[a] = t), --u || r(c))
                      }, o)
                  }),
                    --u || r(c)
                })
              return c.error && o(c.value), e.promise
            },
            race: function(t) {
              var n = this,
                e = V(n),
                r = e.reject,
                o = k(function() {
                  var o = h(n.resolve)
                  m(t, function(t) {
                    o.call(n, t).then(e.resolve, r)
                  })
                })
              return o.error && r(o.value), e.promise
            }
          }
        )
    },
    e893: function(t, n, e) {
      var r = e('5135'),
        o = e('56ef'),
        c = e('06cf'),
        i = e('9bf2')
      t.exports = function(t, n) {
        for (var e = o(n), u = i.f, a = c.f, f = 0; f < e.length; f++) {
          var s = e[f]
          r(t, s) || u(t, s, a(n, s))
        }
      }
    },
    e95a: function(t, n, e) {
      var r = e('b622'),
        o = e('3f8c'),
        c = r('iterator'),
        i = Array.prototype
      t.exports = function(t) {
        return void 0 !== t && (o.Array === t || i[c] === t)
      }
    },
    eff0: function(t, n, e) {},
    f069: function(t, n, e) {
      'use strict'
      var r = e('1c0b'),
        o = function(t) {
          var n, e
          ;(this.promise = new t(function(t, r) {
            if (void 0 !== n || void 0 !== e)
              throw TypeError('Bad Promise constructor')
            ;(n = t), (e = r)
          })),
            (this.resolve = r(n)),
            (this.reject = r(e))
        }
      t.exports.f = function(t) {
        return new o(t)
      }
    },
    f5df: function(t, n, e) {
      var r = e('00ee'),
        o = e('c6b6'),
        c = e('b622'),
        i = c('toStringTag'),
        u =
          'Arguments' ==
          o(
            (function() {
              return arguments
            })()
          ),
        a = function(t, n) {
          try {
            return t[n]
          } catch (e) {}
        }
      t.exports = r
        ? o
        : function(t) {
            var n, e, r
            return void 0 === t
              ? 'Undefined'
              : null === t
              ? 'Null'
              : 'string' == typeof (e = a((n = Object(t)), i))
              ? e
              : u
              ? o(n)
              : 'Object' == (r = o(n)) && 'function' == typeof n.callee
              ? 'Arguments'
              : r
          }
    },
    f772: function(t, n, e) {
      var r = e('5692'),
        o = e('90e3'),
        c = r('keys')
      t.exports = function(t) {
        return c[t] || (c[t] = o(t))
      }
    },
    fc6a: function(t, n, e) {
      var r = e('44ad'),
        o = e('1d80')
      t.exports = function(t) {
        return r(o(t))
      }
    },
    fdbf: function(t, n, e) {
      var r = e('4930')
      t.exports = r && !Symbol.sham && 'symbol' == typeof Symbol.iterator
    },
    fea9: function(t, n, e) {
      var r = e('da84')
      t.exports = r.Promise
    }
  })['default']
})
//# sourceMappingURL=index.js.map
