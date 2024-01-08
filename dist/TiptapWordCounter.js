"use strict";

var _excluded = ["start"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e226) { throw _e226; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e227) { didErr = true; err = _e227; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(fn) { try { return Function.toString.call(fn).indexOf("[native code]") !== -1; } catch (e) { return typeof fn === "function"; } }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
(function () {
  var t = {
      6981: function _(t, e, n) {
        "use strict";

        n(1983);
        var r,
          o = (r = n(115)) && r.__esModule ? r : {
            default: r
          };
        o.default._babelPolyfill && "undefined" != typeof console && console.warn && console.warn("@babel/polyfill is loaded more than once on this page. This is probably not desirable/intended and may have consequences if different versions of the polyfills are applied sequentially. If you do need to load the polyfill more than once, use @babel/polyfill/noConflict instead to bypass the warning."), o.default._babelPolyfill = !0;
      },
      1983: function _(t, e, n) {
        "use strict";

        n(6266), n(990), n(911), n(4160), n(6197), n(6728), n(4039), n(3568), n(8051), n(8250), n(5434), n(4952), n(6337), n(5666);
      },
      6266: function _(t, e, n) {
        n(5767), n(8132), n(8388), n(7470), n(4882), n(1520), n(7476), n(9622), n(9375), n(3533), n(4672), n(4157), n(5095), n(9892), n(5115), n(9176), n(8838), n(6253), n(9730), n(6059), n(8377), n(1084), n(4299), n(1246), n(726), n(1901), n(5972), n(3403), n(2516), n(9371), n(6479), n(1736), n(1889), n(5177), n(6943), n(6503), n(6786), n(932), n(7526), n(1591), n(9073), n(347), n(579), n(4669), n(7710), n(5789), n(3514), n(9978), n(8472), n(6946), n(5068), n(413), n(191), n(8306), n(4564), n(9115), n(9539), n(6620), n(2850), n(823), n(7732), n(856), n(703), n(1539), n(5292), n(6629), n(3694), n(7648), n(7795), n(4531), n(3605), n(6780), n(9937), n(511), n(1822), n(9977), n(1031), n(6331), n(1560), n(774), n(522), n(8295), n(7842), n(110), n(75), n(4336), n(1802), n(8837), n(6773), n(5745), n(3057), n(3750), n(3369), n(9564), n(2e3), n(8977), n(2310), n(4899), n(1842), n(6997), n(3946), n(8269), n(6108), n(6774), n(1466), n(9357), n(6142), n(1876), n(851), n(8416), n(8184), n(147), n(9192), n(142), n(1786), n(5368), n(6964), n(2152), n(4821), n(9103), n(1303), n(3318), n(162), n(3834), n(1572), n(2139), n(685), n(5535), n(7347), n(3049), n(6633), n(8989), n(8270), n(4510), n(3984), n(5769), n(55), n(6014), t.exports = n(5645);
      },
      911: function _(t, e, n) {
        n(1268), t.exports = n(5645).Array.flatMap;
      },
      990: function _(t, e, n) {
        n(2773), t.exports = n(5645).Array.includes;
      },
      5434: function _(t, e, n) {
        n(3276), t.exports = n(5645).Object.entries;
      },
      8051: function _(t, e, n) {
        n(8351), t.exports = n(5645).Object.getOwnPropertyDescriptors;
      },
      8250: function _(t, e, n) {
        n(6409), t.exports = n(5645).Object.values;
      },
      4952: function _(t, e, n) {
        "use strict";

        n(851), n(9865), t.exports = n(5645).Promise.finally;
      },
      6197: function _(t, e, n) {
        n(2770), t.exports = n(5645).String.padEnd;
      },
      4160: function _(t, e, n) {
        n(1784), t.exports = n(5645).String.padStart;
      },
      4039: function _(t, e, n) {
        n(4325), t.exports = n(5645).String.trimRight;
      },
      6728: function _(t, e, n) {
        n(5869), t.exports = n(5645).String.trimLeft;
      },
      3568: function _(t, e, n) {
        n(9665), t.exports = n(8787).f("asyncIterator");
      },
      115: function _(t, e, n) {
        n(4579), t.exports = n(1327).global;
      },
      5663: function _(t) {
        t.exports = function (t) {
          if ("function" != typeof t) throw TypeError(t + " is not a function!");
          return t;
        };
      },
      2159: function _(t, e, n) {
        var r = n(6727);
        t.exports = function (t) {
          if (!r(t)) throw TypeError(t + " is not an object!");
          return t;
        };
      },
      1327: function _(t) {
        var e = t.exports = {
          version: "2.6.12"
        };
        "number" == typeof __e && (__e = e);
      },
      9216: function _(t, e, n) {
        var r = n(5663);
        t.exports = function (t, e, n) {
          if (r(t), void 0 === e) return t;
          switch (n) {
            case 1:
              return function (n) {
                return t.call(e, n);
              };
            case 2:
              return function (n, r) {
                return t.call(e, n, r);
              };
            case 3:
              return function (n, r, o) {
                return t.call(e, n, r, o);
              };
          }
          return function () {
            return t.apply(e, arguments);
          };
        };
      },
      9666: function _(t, e, n) {
        t.exports = !n(7929)(function () {
          return 7 != Object.defineProperty({}, "a", {
            get: function get() {
              return 7;
            }
          }).a;
        });
      },
      7467: function _(t, e, n) {
        var r = n(6727),
          o = n(3938).document,
          i = r(o) && r(o.createElement);
        t.exports = function (t) {
          return i ? o.createElement(t) : {};
        };
      },
      3856: function _(t, e, n) {
        var r = n(3938),
          o = n(1327),
          i = n(9216),
          s = n(1818),
          a = n(7069),
          l = "prototype",
          c = function c(t, e, n) {
            var u,
              h,
              d,
              p = t & c.F,
              f = t & c.G,
              m = t & c.S,
              g = t & c.P,
              y = t & c.B,
              v = t & c.W,
              b = f ? o : o[e] || (o[e] = {}),
              w = b[l],
              x = f ? r : m ? r[e] : (r[e] || {})[l];
            for (u in f && (n = e), n) (h = !p && x && void 0 !== x[u]) && a(b, u) || (d = h ? x[u] : n[u], b[u] = f && "function" != typeof x[u] ? n[u] : y && h ? i(d, r) : v && x[u] == d ? function (t) {
              var e = function e(_e2, n, r) {
                if (this instanceof t) {
                  switch (arguments.length) {
                    case 0:
                      return new t();
                    case 1:
                      return new t(_e2);
                    case 2:
                      return new t(_e2, n);
                  }
                  return new t(_e2, n, r);
                }
                return t.apply(this, arguments);
              };
              return e[l] = t[l], e;
            }(d) : g && "function" == typeof d ? i(Function.call, d) : d, g && ((b.virtual || (b.virtual = {}))[u] = d, t & c.R && w && !w[u] && s(w, u, d)));
          };
        c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, t.exports = c;
      },
      7929: function _(t) {
        t.exports = function (t) {
          try {
            return !!t();
          } catch (t) {
            return !0;
          }
        };
      },
      3938: function _(t) {
        var e = t.exports = void 0 !== e.window && e.window.Math == Math ? e.window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = e);
      },
      7069: function _(t) {
        var e = {}.hasOwnProperty;
        t.exports = function (t, n) {
          return e.call(t, n);
        };
      },
      1818: function _(t, e, n) {
        var r = n(4743),
          o = n(3101);
        t.exports = n(9666) ? function (t, e, n) {
          return r.f(t, e, o(1, n));
        } : function (t, e, n) {
          return t[e] = n, t;
        };
      },
      3758: function _(t, e, n) {
        t.exports = !n(9666) && !n(7929)(function () {
          return 7 != Object.defineProperty(n(7467)("div"), "a", {
            get: function get() {
              return 7;
            }
          }).a;
        });
      },
      6727: function _(t) {
        t.exports = function (t) {
          return "object" == _typeof(t) ? null !== t : "function" == typeof t;
        };
      },
      4743: function _(t, e, n) {
        var r = n(2159),
          o = n(3758),
          i = n(3206),
          s = Object.defineProperty;
        e.f = n(9666) ? Object.defineProperty : function (t, e, n) {
          if (r(t), e = i(e, !0), r(n), o) try {
            return s(t, e, n);
          } catch (t) {}
          if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
          return "value" in n && (t[e] = n.value), t;
        };
      },
      3101: function _(t) {
        t.exports = function (t, e) {
          return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: e
          };
        };
      },
      3206: function _(t, e, n) {
        var r = n(6727);
        t.exports = function (t, e) {
          if (!r(t)) return t;
          var n, o;
          if (e && "function" == typeof (n = t.toString) && !r(o = n.call(t))) return o;
          if ("function" == typeof (n = t.valueOf) && !r(o = n.call(t))) return o;
          if (!e && "function" == typeof (n = t.toString) && !r(o = n.call(t))) return o;
          throw TypeError("Can't convert object to primitive value");
        };
      },
      4579: function _(t, e, n) {
        var r = n(3856);
        r(r.G, {
          global: n(3938)
        });
      },
      4963: function _(t) {
        t.exports = function (t) {
          if ("function" != typeof t) throw TypeError(t + " is not a function!");
          return t;
        };
      },
      3365: function _(t, e, n) {
        var r = n(2032);
        t.exports = function (t, e) {
          if ("number" != typeof t && "Number" != r(t)) throw TypeError(e);
          return +t;
        };
      },
      7722: function _(t, e, n) {
        var r = n(6314)("unscopables"),
          o = Array.prototype;
        null == o[r] && n(7728)(o, r, {}), t.exports = function (t) {
          o[r][t] = !0;
        };
      },
      6793: function _(t, e, n) {
        "use strict";

        var r = n(4496)(!0);
        t.exports = function (t, e, n) {
          return e + (n ? r(t, e).length : 1);
        };
      },
      3328: function _(t) {
        t.exports = function (t, e, n, r) {
          if (!(t instanceof e) || void 0 !== r && r in t) throw TypeError(n + ": incorrect invocation!");
          return t;
        };
      },
      7007: function _(t, e, n) {
        var r = n(5286);
        t.exports = function (t) {
          if (!r(t)) throw TypeError(t + " is not an object!");
          return t;
        };
      },
      5216: function _(t, e, n) {
        "use strict";

        var r = n(508),
          o = n(2337),
          i = n(875);
        t.exports = [].copyWithin || function (t, e) {
          var n = r(this),
            s = i(n.length),
            a = o(t, s),
            l = o(e, s),
            c = arguments.length > 2 ? arguments[2] : void 0,
            u = Math.min((void 0 === c ? s : o(c, s)) - l, s - a),
            h = 1;
          for (l < a && a < l + u && (h = -1, l += u - 1, a += u - 1); u-- > 0;) l in n ? n[a] = n[l] : delete n[a], a += h, l += h;
          return n;
        };
      },
      6852: function _(t, e, n) {
        "use strict";

        var r = n(508),
          o = n(2337),
          i = n(875);
        t.exports = function (t) {
          for (var e = r(this), n = i(e.length), s = arguments.length, a = o(s > 1 ? arguments[1] : void 0, n), l = s > 2 ? arguments[2] : void 0, c = void 0 === l ? n : o(l, n); c > a;) e[a++] = t;
          return e;
        };
      },
      9315: function _(t, e, n) {
        var r = n(2110),
          o = n(875),
          i = n(2337);
        t.exports = function (t) {
          return function (e, n, s) {
            var a,
              l = r(e),
              c = o(l.length),
              u = i(s, c);
            if (t && n != n) {
              for (; c > u;) if ((a = l[u++]) != a) return !0;
            } else for (; c > u; u++) if ((t || u in l) && l[u] === n) return t || u || 0;
            return !t && -1;
          };
        };
      },
      50: function _(t, e, n) {
        var r = n(741),
          o = n(9797),
          i = n(508),
          s = n(875),
          a = n(6886);
        t.exports = function (t, e) {
          var n = 1 == t,
            l = 2 == t,
            c = 3 == t,
            u = 4 == t,
            h = 6 == t,
            d = 5 == t || h,
            p = e || a;
          return function (e, a, f) {
            for (var m, g, y = i(e), v = o(y), b = r(a, f, 3), w = s(v.length), x = 0, k = n ? p(e, w) : l ? p(e, 0) : void 0; w > x; x++) if ((d || x in v) && (g = b(m = v[x], x, y), t)) if (n) k[x] = g;else if (g) switch (t) {
              case 3:
                return !0;
              case 5:
                return m;
              case 6:
                return x;
              case 2:
                k.push(m);
            } else if (u) return !1;
            return h ? -1 : c || u ? u : k;
          };
        };
      },
      7628: function _(t, e, n) {
        var r = n(4963),
          o = n(508),
          i = n(9797),
          s = n(875);
        t.exports = function (t, e, n, a, l) {
          r(e);
          var c = o(t),
            u = i(c),
            h = s(c.length),
            d = l ? h - 1 : 0,
            p = l ? -1 : 1;
          if (n < 2) for (;;) {
            if (d in u) {
              a = u[d], d += p;
              break;
            }
            if (d += p, l ? d < 0 : h <= d) throw TypeError("Reduce of empty array with no initial value");
          }
          for (; l ? d >= 0 : h > d; d += p) d in u && (a = e(a, u[d], d, c));
          return a;
        };
      },
      2736: function _(t, e, n) {
        var r = n(5286),
          o = n(4302),
          i = n(6314)("species");
        t.exports = function (t) {
          var e;
          return o(t) && ("function" != typeof (e = t.constructor) || e !== Array && !o(e.prototype) || (e = void 0), r(e) && null === (e = e[i]) && (e = void 0)), void 0 === e ? Array : e;
        };
      },
      6886: function _(t, e, n) {
        var r = n(2736);
        t.exports = function (t, e) {
          return new (r(t))(e);
        };
      },
      4398: function _(t, e, n) {
        "use strict";

        var r = n(4963),
          o = n(5286),
          i = n(7242),
          s = [].slice,
          a = {};
        t.exports = Function.bind || function (t) {
          var e = r(this),
            n = s.call(arguments, 1),
            l = function l() {
              var r = n.concat(s.call(arguments));
              return this instanceof l ? function (t, e, n) {
                if (!(e in a)) {
                  for (var r = [], o = 0; o < e; o++) r[o] = "a[" + o + "]";
                  a[e] = Function("F,a", "return new F(" + r.join(",") + ")");
                }
                return a[e](t, n);
              }(e, r.length, r) : i(e, r, t);
            };
          return o(e.prototype) && (l.prototype = e.prototype), l;
        };
      },
      1488: function _(t, e, n) {
        var r = n(2032),
          o = n(6314)("toStringTag"),
          i = "Arguments" == r(function () {
            return arguments;
          }());
        t.exports = function (t) {
          var e, n, s;
          return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (n = function (t, e) {
            try {
              return t[e];
            } catch (t) {}
          }(e = Object(t), o)) ? n : i ? r(e) : "Object" == (s = r(e)) && "function" == typeof e.callee ? "Arguments" : s;
        };
      },
      2032: function _(t) {
        var e = {}.toString;
        t.exports = function (t) {
          return e.call(t).slice(8, -1);
        };
      },
      9824: function _(t, e, n) {
        "use strict";

        var r = n(9275).f,
          o = n(2503),
          i = n(4408),
          s = n(741),
          a = n(3328),
          l = n(3531),
          c = n(2923),
          u = n(5436),
          h = n(2974),
          d = n(7057),
          p = n(4728).fastKey,
          f = n(1616),
          m = d ? "_s" : "size",
          g = function g(t, e) {
            var n,
              r = p(e);
            if ("F" !== r) return t._i[r];
            for (n = t._f; n; n = n.n) if (n.k == e) return n;
          };
        t.exports = {
          getConstructor: function getConstructor(t, e, n, c) {
            var u = t(function (t, r) {
              a(t, u, e, "_i"), t._t = e, t._i = o(null), t._f = void 0, t._l = void 0, t[m] = 0, null != r && l(r, n, t[c], t);
            });
            return i(u.prototype, {
              clear: function clear() {
                for (var t = f(this, e), n = t._i, r = t._f; r; r = r.n) r.r = !0, r.p && (r.p = r.p.n = void 0), delete n[r.i];
                t._f = t._l = void 0, t[m] = 0;
              },
              delete: function _delete(t) {
                var n = f(this, e),
                  r = g(n, t);
                if (r) {
                  var o = r.n,
                    i = r.p;
                  delete n._i[r.i], r.r = !0, i && (i.n = o), o && (o.p = i), n._f == r && (n._f = o), n._l == r && (n._l = i), n[m]--;
                }
                return !!r;
              },
              forEach: function forEach(t) {
                f(this, e);
                for (var n, r = s(t, arguments.length > 1 ? arguments[1] : void 0, 3); n = n ? n.n : this._f;) for (r(n.v, n.k, this); n && n.r;) n = n.p;
              },
              has: function has(t) {
                return !!g(f(this, e), t);
              }
            }), d && r(u.prototype, "size", {
              get: function get() {
                return f(this, e)[m];
              }
            }), u;
          },
          def: function def(t, e, n) {
            var r,
              o,
              i = g(t, e);
            return i ? i.v = n : (t._l = i = {
              i: o = p(e, !0),
              k: e,
              v: n,
              p: r = t._l,
              n: void 0,
              r: !1
            }, t._f || (t._f = i), r && (r.n = i), t[m]++, "F" !== o && (t._i[o] = i)), t;
          },
          getEntry: g,
          setStrong: function setStrong(t, e, n) {
            c(t, e, function (t, n) {
              this._t = f(t, e), this._k = n, this._l = void 0;
            }, function () {
              for (var t = this, e = t._k, n = t._l; n && n.r;) n = n.p;
              return t._t && (t._l = n = n ? n.n : t._t._f) ? u(0, "keys" == e ? n.k : "values" == e ? n.v : [n.k, n.v]) : (t._t = void 0, u(1));
            }, n ? "entries" : "values", !n, !0), h(e);
          }
        };
      },
      3657: function _(t, e, n) {
        "use strict";

        var r = n(4408),
          o = n(4728).getWeak,
          i = n(7007),
          s = n(5286),
          a = n(3328),
          l = n(3531),
          c = n(50),
          u = n(9181),
          h = n(1616),
          d = c(5),
          p = c(6),
          f = 0,
          m = function m(t) {
            return t._l || (t._l = new g());
          },
          g = function g() {
            this.a = [];
          },
          y = function y(t, e) {
            return d(t.a, function (t) {
              return t[0] === e;
            });
          };
        g.prototype = {
          get: function get(t) {
            var e = y(this, t);
            if (e) return e[1];
          },
          has: function has(t) {
            return !!y(this, t);
          },
          set: function set(t, e) {
            var n = y(this, t);
            n ? n[1] = e : this.a.push([t, e]);
          },
          delete: function _delete(t) {
            var e = p(this.a, function (e) {
              return e[0] === t;
            });
            return ~e && this.a.splice(e, 1), !!~e;
          }
        }, t.exports = {
          getConstructor: function getConstructor(t, e, n, i) {
            var c = t(function (t, r) {
              a(t, c, e, "_i"), t._t = e, t._i = f++, t._l = void 0, null != r && l(r, n, t[i], t);
            });
            return r(c.prototype, {
              delete: function _delete(t) {
                if (!s(t)) return !1;
                var n = o(t);
                return !0 === n ? m(h(this, e)).delete(t) : n && u(n, this._i) && delete n[this._i];
              },
              has: function has(t) {
                if (!s(t)) return !1;
                var n = o(t);
                return !0 === n ? m(h(this, e)).has(t) : n && u(n, this._i);
              }
            }), c;
          },
          def: function def(t, e, n) {
            var r = o(i(e), !0);
            return !0 === r ? m(t).set(e, n) : r[t._i] = n, t;
          },
          ufstore: m
        };
      },
      5795: function _(t, e, n) {
        "use strict";

        var r = n(3816),
          o = n(2985),
          i = n(7234),
          s = n(4408),
          a = n(4728),
          l = n(3531),
          c = n(3328),
          u = n(5286),
          h = n(4253),
          d = n(7462),
          p = n(2943),
          f = n(266);
        t.exports = function (t, e, n, m, g, y) {
          var v = r[t],
            b = v,
            w = g ? "set" : "add",
            x = b && b.prototype,
            k = {},
            S = function S(t) {
              var e = x[t];
              i(x, t, "delete" == t || "has" == t ? function (t) {
                return !(y && !u(t)) && e.call(this, 0 === t ? 0 : t);
              } : "get" == t ? function (t) {
                return y && !u(t) ? void 0 : e.call(this, 0 === t ? 0 : t);
              } : "add" == t ? function (t) {
                return e.call(this, 0 === t ? 0 : t), this;
              } : function (t, n) {
                return e.call(this, 0 === t ? 0 : t, n), this;
              });
            };
          if ("function" == typeof b && (y || x.forEach && !h(function () {
            new b().entries().next();
          }))) {
            var M = new b(),
              O = M[w](y ? {} : -0, 1) != M,
              T = h(function () {
                M.has(1);
              }),
              C = d(function (t) {
                new b(t);
              }),
              E = !y && h(function () {
                for (var t = new b(), e = 5; e--;) t[w](e, e);
                return !t.has(-0);
              });
            C || ((b = e(function (e, n) {
              c(e, b, t);
              var r = f(new v(), e, b);
              return null != n && l(n, g, r[w], r), r;
            })).prototype = x, x.constructor = b), (T || E) && (S("delete"), S("has"), g && S("get")), (E || O) && S(w), y && x.clear && delete x.clear;
          } else b = m.getConstructor(e, t, g, w), s(b.prototype, n), a.NEED = !0;
          return p(b, t), k[t] = b, o(o.G + o.W + o.F * (b != v), k), y || m.setStrong(b, t, g), b;
        };
      },
      5645: function _(t) {
        var e = t.exports = {
          version: "2.6.12"
        };
        "number" == typeof __e && (__e = e);
      },
      2811: function _(t, e, n) {
        "use strict";

        var r = n(9275),
          o = n(681);
        t.exports = function (t, e, n) {
          e in t ? r.f(t, e, o(0, n)) : t[e] = n;
        };
      },
      741: function _(t, e, n) {
        var r = n(4963);
        t.exports = function (t, e, n) {
          if (r(t), void 0 === e) return t;
          switch (n) {
            case 1:
              return function (n) {
                return t.call(e, n);
              };
            case 2:
              return function (n, r) {
                return t.call(e, n, r);
              };
            case 3:
              return function (n, r, o) {
                return t.call(e, n, r, o);
              };
          }
          return function () {
            return t.apply(e, arguments);
          };
        };
      },
      3537: function _(t, e, n) {
        "use strict";

        var r = n(4253),
          o = Date.prototype.getTime,
          i = Date.prototype.toISOString,
          s = function s(t) {
            return t > 9 ? t : "0" + t;
          };
        t.exports = r(function () {
          return "0385-07-25T07:06:39.999Z" != i.call(new Date(-50000000000001));
        }) || !r(function () {
          i.call(new Date(NaN));
        }) ? function () {
          if (!isFinite(o.call(this))) throw RangeError("Invalid time value");
          var t = this,
            e = t.getUTCFullYear(),
            n = t.getUTCMilliseconds(),
            r = e < 0 ? "-" : e > 9999 ? "+" : "";
          return r + ("00000" + Math.abs(e)).slice(r ? -6 : -4) + "-" + s(t.getUTCMonth() + 1) + "-" + s(t.getUTCDate()) + "T" + s(t.getUTCHours()) + ":" + s(t.getUTCMinutes()) + ":" + s(t.getUTCSeconds()) + "." + (n > 99 ? n : "0" + s(n)) + "Z";
        } : i;
      },
      870: function _(t, e, n) {
        "use strict";

        var r = n(7007),
          o = n(1689),
          i = "number";
        t.exports = function (t) {
          if ("string" !== t && t !== i && "default" !== t) throw TypeError("Incorrect hint");
          return o(r(this), t != i);
        };
      },
      1355: function _(t) {
        t.exports = function (t) {
          if (null == t) throw TypeError("Can't call method on  " + t);
          return t;
        };
      },
      7057: function _(t, e, n) {
        t.exports = !n(4253)(function () {
          return 7 != Object.defineProperty({}, "a", {
            get: function get() {
              return 7;
            }
          }).a;
        });
      },
      2457: function _(t, e, n) {
        var r = n(5286),
          o = n(3816).document,
          i = r(o) && r(o.createElement);
        t.exports = function (t) {
          return i ? o.createElement(t) : {};
        };
      },
      4430: function _(t) {
        t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
      },
      5541: function _(t, e, n) {
        var r = n(7184),
          o = n(4548),
          i = n(4682);
        t.exports = function (t) {
          var e = r(t),
            n = o.f;
          if (n) for (var s, a = n(t), l = i.f, c = 0; a.length > c;) l.call(t, s = a[c++]) && e.push(s);
          return e;
        };
      },
      2985: function _(t, e, n) {
        var r = n(3816),
          o = n(5645),
          i = n(7728),
          s = n(7234),
          a = n(741),
          l = "prototype",
          c = function c(t, e, n) {
            var u,
              h,
              d,
              p,
              f = t & c.F,
              m = t & c.G,
              g = t & c.S,
              y = t & c.P,
              v = t & c.B,
              b = m ? r : g ? r[e] || (r[e] = {}) : (r[e] || {})[l],
              w = m ? o : o[e] || (o[e] = {}),
              x = w[l] || (w[l] = {});
            for (u in m && (n = e), n) d = ((h = !f && b && void 0 !== b[u]) ? b : n)[u], p = v && h ? a(d, r) : y && "function" == typeof d ? a(Function.call, d) : d, b && s(b, u, d, t & c.U), w[u] != d && i(w, u, p), y && x[u] != d && (x[u] = d);
          };
        r.core = o, c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, t.exports = c;
      },
      8852: function _(t, e, n) {
        var r = n(6314)("match");
        t.exports = function (t) {
          var e = /./;
          try {
            "/./"[t](e);
          } catch (n) {
            try {
              return e[r] = !1, !"/./"[t](e);
            } catch (t) {}
          }
          return !0;
        };
      },
      4253: function _(t) {
        t.exports = function (t) {
          try {
            return !!t();
          } catch (t) {
            return !0;
          }
        };
      },
      8082: function _(t, e, n) {
        "use strict";

        n(8269);
        var r = n(7234),
          o = n(7728),
          i = n(4253),
          s = n(1355),
          a = n(6314),
          l = n(1165),
          c = a("species"),
          u = !i(function () {
            var t = /./;
            return t.exec = function () {
              var t = [];
              return t.groups = {
                a: "7"
              }, t;
            }, "7" !== "".replace(t, "$<a>");
          }),
          h = function () {
            var t = /(?:)/,
              e = t.exec;
            t.exec = function () {
              return e.apply(this, arguments);
            };
            var n = "ab".split(t);
            return 2 === n.length && "a" === n[0] && "b" === n[1];
          }();
        t.exports = function (t, e, n) {
          var d = a(t),
            p = !i(function () {
              var e = {};
              return e[d] = function () {
                return 7;
              }, 7 != ""[t](e);
            }),
            f = p ? !i(function () {
              var e = !1,
                n = /a/;
              return n.exec = function () {
                return e = !0, null;
              }, "split" === t && (n.constructor = {}, n.constructor[c] = function () {
                return n;
              }), n[d](""), !e;
            }) : void 0;
          if (!p || !f || "replace" === t && !u || "split" === t && !h) {
            var m = /./[d],
              g = n(s, d, ""[t], function (t, e, n, r, o) {
                return e.exec === l ? p && !o ? {
                  done: !0,
                  value: m.call(e, n, r)
                } : {
                  done: !0,
                  value: t.call(n, e, r)
                } : {
                  done: !1
                };
              }),
              y = g[0],
              v = g[1];
            r(String.prototype, t, y), o(RegExp.prototype, d, 2 == e ? function (t, e) {
              return v.call(t, this, e);
            } : function (t) {
              return v.call(t, this);
            });
          }
        };
      },
      3218: function _(t, e, n) {
        "use strict";

        var r = n(7007);
        t.exports = function () {
          var t = r(this),
            e = "";
          return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.unicode && (e += "u"), t.sticky && (e += "y"), e;
        };
      },
      3325: function _(t, e, n) {
        "use strict";

        var r = n(4302),
          o = n(5286),
          i = n(875),
          s = n(741),
          a = n(6314)("isConcatSpreadable");
        t.exports = function t(e, n, l, c, u, h, d, p) {
          for (var f, m, g = u, y = 0, v = !!d && s(d, p, 3); y < c;) {
            if (y in l) {
              if (f = v ? v(l[y], y, n) : l[y], m = !1, o(f) && (m = void 0 !== (m = f[a]) ? !!m : r(f)), m && h > 0) g = t(e, n, f, i(f.length), g, h - 1) - 1;else {
                if (g >= 9007199254740991) throw TypeError();
                e[g] = f;
              }
              g++;
            }
            y++;
          }
          return g;
        };
      },
      3531: function _(t, e, n) {
        var r = n(741),
          o = n(8851),
          i = n(6555),
          s = n(7007),
          a = n(875),
          l = n(9002),
          c = {},
          u = {},
          h = t.exports = function (t, e, n, h, d) {
            var p,
              f,
              m,
              g,
              y = d ? function () {
                return t;
              } : l(t),
              v = r(n, h, e ? 2 : 1),
              b = 0;
            if ("function" != typeof y) throw TypeError(t + " is not iterable!");
            if (i(y)) {
              for (p = a(t.length); p > b; b++) if ((g = e ? v(s(f = t[b])[0], f[1]) : v(t[b])) === c || g === u) return g;
            } else for (m = y.call(t); !(f = m.next()).done;) if ((g = o(m, v, f.value, e)) === c || g === u) return g;
          };
        h.BREAK = c, h.RETURN = u;
      },
      18: function _(t, e, n) {
        t.exports = n(3825)("native-function-to-string", Function.toString);
      },
      3816: function _(t) {
        var e = t.exports = void 0 !== e.window && e.window.Math == Math ? e.window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = e);
      },
      9181: function _(t) {
        var e = {}.hasOwnProperty;
        t.exports = function (t, n) {
          return e.call(t, n);
        };
      },
      7728: function _(t, e, n) {
        var r = n(9275),
          o = n(681);
        t.exports = n(7057) ? function (t, e, n) {
          return r.f(t, e, o(1, n));
        } : function (t, e, n) {
          return t[e] = n, t;
        };
      },
      639: function _(t, e, n) {
        var r = n(3816).document;
        t.exports = r && r.documentElement;
      },
      1734: function _(t, e, n) {
        t.exports = !n(7057) && !n(4253)(function () {
          return 7 != Object.defineProperty(n(2457)("div"), "a", {
            get: function get() {
              return 7;
            }
          }).a;
        });
      },
      266: function _(t, e, n) {
        var r = n(5286),
          o = n(7375).set;
        t.exports = function (t, e, n) {
          var i,
            s = e.constructor;
          return s !== n && "function" == typeof s && (i = s.prototype) !== n.prototype && r(i) && o && o(t, i), t;
        };
      },
      7242: function _(t) {
        t.exports = function (t, e, n) {
          var r = void 0 === n;
          switch (e.length) {
            case 0:
              return r ? t() : t.call(n);
            case 1:
              return r ? t(e[0]) : t.call(n, e[0]);
            case 2:
              return r ? t(e[0], e[1]) : t.call(n, e[0], e[1]);
            case 3:
              return r ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);
            case 4:
              return r ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3]);
          }
          return t.apply(n, e);
        };
      },
      9797: function _(t, e, n) {
        var r = n(2032);
        t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
          return "String" == r(t) ? t.split("") : Object(t);
        };
      },
      6555: function _(t, e, n) {
        var r = n(2803),
          o = n(6314)("iterator"),
          i = Array.prototype;
        t.exports = function (t) {
          return void 0 !== t && (r.Array === t || i[o] === t);
        };
      },
      4302: function _(t, e, n) {
        var r = n(2032);
        t.exports = Array.isArray || function (t) {
          return "Array" == r(t);
        };
      },
      8367: function _(t, e, n) {
        var r = n(5286),
          o = Math.floor;
        t.exports = function (t) {
          return !r(t) && isFinite(t) && o(t) === t;
        };
      },
      5286: function _(t) {
        t.exports = function (t) {
          return "object" == _typeof(t) ? null !== t : "function" == typeof t;
        };
      },
      5364: function _(t, e, n) {
        var r = n(5286),
          o = n(2032),
          i = n(6314)("match");
        t.exports = function (t) {
          var e;
          return r(t) && (void 0 !== (e = t[i]) ? !!e : "RegExp" == o(t));
        };
      },
      8851: function _(t, e, n) {
        var r = n(7007);
        t.exports = function (t, e, n, o) {
          try {
            return o ? e(r(n)[0], n[1]) : e(n);
          } catch (e) {
            var i = t.return;
            throw void 0 !== i && r(i.call(t)), e;
          }
        };
      },
      9988: function _(t, e, n) {
        "use strict";

        var r = n(2503),
          o = n(681),
          i = n(2943),
          s = {};
        n(7728)(s, n(6314)("iterator"), function () {
          return this;
        }), t.exports = function (t, e, n) {
          t.prototype = r(s, {
            next: o(1, n)
          }), i(t, e + " Iterator");
        };
      },
      2923: function _(t, e, n) {
        "use strict";

        var r = n(4461),
          o = n(2985),
          i = n(7234),
          s = n(7728),
          a = n(2803),
          l = n(9988),
          c = n(2943),
          u = n(468),
          h = n(6314)("iterator"),
          d = !([].keys && "next" in [].keys()),
          p = "keys",
          f = "values",
          m = function m() {
            return this;
          };
        t.exports = function (t, e, n, g, y, v, b) {
          l(n, e, g);
          var w,
            x,
            k,
            S = function S(t) {
              if (!d && t in C) return C[t];
              switch (t) {
                case p:
                case f:
                  return function () {
                    return new n(this, t);
                  };
              }
              return function () {
                return new n(this, t);
              };
            },
            M = e + " Iterator",
            O = y == f,
            T = !1,
            C = t.prototype,
            E = C[h] || C["@@iterator"] || y && C[y],
            A = E || S(y),
            N = y ? O ? S("entries") : A : void 0,
            D = "Array" == e && C.entries || E;
          if (D && (k = u(D.call(new t()))) !== Object.prototype && k.next && (c(k, M, !0), r || "function" == typeof k[h] || s(k, h, m)), O && E && E.name !== f && (T = !0, A = function A() {
            return E.call(this);
          }), r && !b || !d && !T && C[h] || s(C, h, A), a[e] = A, a[M] = m, y) if (w = {
            values: O ? A : S(f),
            keys: v ? A : S(p),
            entries: N
          }, b) for (x in w) x in C || i(C, x, w[x]);else o(o.P + o.F * (d || T), e, w);
          return w;
        };
      },
      7462: function _(t, e, n) {
        var r = n(6314)("iterator"),
          o = !1;
        try {
          var i = [7][r]();
          i.return = function () {
            o = !0;
          }, Array.from(i, function () {
            throw 2;
          });
        } catch (t) {}
        t.exports = function (t, e) {
          if (!e && !o) return !1;
          var n = !1;
          try {
            var i = [7],
              s = i[r]();
            s.next = function () {
              return {
                done: n = !0
              };
            }, i[r] = function () {
              return s;
            }, t(i);
          } catch (t) {}
          return n;
        };
      },
      5436: function _(t) {
        t.exports = function (t, e) {
          return {
            value: e,
            done: !!t
          };
        };
      },
      2803: function _(t) {
        t.exports = {};
      },
      4461: function _(t) {
        t.exports = !1;
      },
      3086: function _(t) {
        var e = Math.expm1;
        t.exports = !e || e(10) > 22025.465794806718 || e(10) < 22025.465794806718 || -2e-17 != e(-2e-17) ? function (t) {
          return 0 == (t = +t) ? t : t > -1e-6 && t < 1e-6 ? t + t * t / 2 : Math.exp(t) - 1;
        } : e;
      },
      4934: function _(t, e, n) {
        var r = n(1801),
          o = Math.pow,
          i = o(2, -52),
          s = o(2, -23),
          a = o(2, 127) * (2 - s),
          l = o(2, -126);
        t.exports = Math.fround || function (t) {
          var e,
            n,
            o = Math.abs(t),
            c = r(t);
          return o < l ? c * (o / l / s + 1 / i - 1 / i) * l * s : (n = (e = (1 + s / i) * o) - (e - o)) > a || n != n ? c * (1 / 0) : c * n;
        };
      },
      6206: function _(t) {
        t.exports = Math.log1p || function (t) {
          return (t = +t) > -1e-8 && t < 1e-8 ? t - t * t / 2 : Math.log(1 + t);
        };
      },
      1801: function _(t) {
        t.exports = Math.sign || function (t) {
          return 0 == (t = +t) || t != t ? t : t < 0 ? -1 : 1;
        };
      },
      4728: function _(t, e, n) {
        var r = n(3953)("meta"),
          o = n(5286),
          i = n(9181),
          s = n(9275).f,
          a = 0,
          l = Object.isExtensible || function () {
            return !0;
          },
          c = !n(4253)(function () {
            return l(Object.preventExtensions({}));
          }),
          u = function u(t) {
            s(t, r, {
              value: {
                i: "O" + ++a,
                w: {}
              }
            });
          },
          h = t.exports = {
            KEY: r,
            NEED: !1,
            fastKey: function fastKey(t, e) {
              if (!o(t)) return "symbol" == _typeof(t) ? t : ("string" == typeof t ? "S" : "P") + t;
              if (!i(t, r)) {
                if (!l(t)) return "F";
                if (!e) return "E";
                u(t);
              }
              return t[r].i;
            },
            getWeak: function getWeak(t, e) {
              if (!i(t, r)) {
                if (!l(t)) return !0;
                if (!e) return !1;
                u(t);
              }
              return t[r].w;
            },
            onFreeze: function onFreeze(t) {
              return c && h.NEED && l(t) && !i(t, r) && u(t), t;
            }
          };
      },
      4351: function _(t, e, n) {
        var r = n(3816),
          o = n(4193).set,
          i = r.MutationObserver || r.WebKitMutationObserver,
          s = r.process,
          a = r.Promise,
          l = "process" == n(2032)(s);
        t.exports = function () {
          var t,
            e,
            n,
            c = function c() {
              var r, o;
              for (l && (r = s.domain) && r.exit(); t;) {
                o = t.fn, t = t.next;
                try {
                  o();
                } catch (r) {
                  throw t ? n() : e = void 0, r;
                }
              }
              e = void 0, r && r.enter();
            };
          if (l) n = function n() {
            s.nextTick(c);
          };else if (!i || r.navigator && r.navigator.standalone) {
            if (a && a.resolve) {
              var u = a.resolve(void 0);
              n = function n() {
                u.then(c);
              };
            } else n = function n() {
              o.call(r, c);
            };
          } else {
            var h = !0,
              d = r.document.createTextNode("");
            new i(c).observe(d, {
              characterData: !0
            }), n = function n() {
              d.data = h = !h;
            };
          }
          return function (r) {
            var o = {
              fn: r,
              next: void 0
            };
            e && (e.next = o), t || (t = o, n()), e = o;
          };
        };
      },
      3499: function _(t, e, n) {
        "use strict";

        var r = n(4963);
        function o(t) {
          var e, n;
          this.promise = new t(function (t, r) {
            if (void 0 !== e || void 0 !== n) throw TypeError("Bad Promise constructor");
            e = t, n = r;
          }), this.resolve = r(e), this.reject = r(n);
        }
        t.exports.f = function (t) {
          return new o(t);
        };
      },
      5345: function _(t, e, n) {
        "use strict";

        var r = n(7057),
          o = n(7184),
          i = n(4548),
          s = n(4682),
          a = n(508),
          l = n(9797),
          c = Object.assign;
        t.exports = !c || n(4253)(function () {
          var t = {},
            e = {},
            n = Symbol(),
            r = "abcdefghijklmnopqrst";
          return t[n] = 7, r.split("").forEach(function (t) {
            e[t] = t;
          }), 7 != c({}, t)[n] || Object.keys(c({}, e)).join("") != r;
        }) ? function (t, e) {
          for (var n = a(t), c = arguments.length, u = 1, h = i.f, d = s.f; c > u;) for (var p, f = l(arguments[u++]), m = h ? o(f).concat(h(f)) : o(f), g = m.length, y = 0; g > y;) p = m[y++], r && !d.call(f, p) || (n[p] = f[p]);
          return n;
        } : c;
      },
      2503: function _(t, e, n) {
        var r = n(7007),
          o = n(5588),
          i = n(4430),
          s = n(9335)("IE_PROTO"),
          a = function a() {},
          l = "prototype",
          _c2 = function c() {
            var t,
              e = n(2457)("iframe"),
              r = i.length;
            for (e.style.display = "none", n(639).appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), _c2 = t.F; r--;) delete _c2[l][i[r]];
            return _c2();
          };
        t.exports = Object.create || function (t, e) {
          var n;
          return null !== t ? (a[l] = r(t), n = new a(), a[l] = null, n[s] = t) : n = _c2(), void 0 === e ? n : o(n, e);
        };
      },
      9275: function _(t, e, n) {
        var r = n(7007),
          o = n(1734),
          i = n(1689),
          s = Object.defineProperty;
        e.f = n(7057) ? Object.defineProperty : function (t, e, n) {
          if (r(t), e = i(e, !0), r(n), o) try {
            return s(t, e, n);
          } catch (t) {}
          if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
          return "value" in n && (t[e] = n.value), t;
        };
      },
      5588: function _(t, e, n) {
        var r = n(9275),
          o = n(7007),
          i = n(7184);
        t.exports = n(7057) ? Object.defineProperties : function (t, e) {
          o(t);
          for (var n, s = i(e), a = s.length, l = 0; a > l;) r.f(t, n = s[l++], e[n]);
          return t;
        };
      },
      8693: function _(t, e, n) {
        var r = n(4682),
          o = n(681),
          i = n(2110),
          s = n(1689),
          a = n(9181),
          l = n(1734),
          c = Object.getOwnPropertyDescriptor;
        e.f = n(7057) ? c : function (t, e) {
          if (t = i(t), e = s(e, !0), l) try {
            return c(t, e);
          } catch (t) {}
          if (a(t, e)) return o(!r.f.call(t, e), t[e]);
        };
      },
      9327: function _(t, e, n) {
        var r = n(2110),
          o = n(616).f,
          i = {}.toString,
          s = "object" == _typeof(global.window) && global.window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(global.window) : [];
        t.exports.f = function (t) {
          return s && "[object Window]" == i.call(t) ? function (t) {
            try {
              return o(t);
            } catch (t) {
              return s.slice();
            }
          }(t) : o(r(t));
        };
      },
      616: function _(t, e, n) {
        var r = n(189),
          o = n(4430).concat("length", "prototype");
        e.f = Object.getOwnPropertyNames || function (t) {
          return r(t, o);
        };
      },
      4548: function _(t, e) {
        e.f = Object.getOwnPropertySymbols;
      },
      468: function _(t, e, n) {
        var r = n(9181),
          o = n(508),
          i = n(9335)("IE_PROTO"),
          s = Object.prototype;
        t.exports = Object.getPrototypeOf || function (t) {
          return t = o(t), r(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? s : null;
        };
      },
      189: function _(t, e, n) {
        var r = n(9181),
          o = n(2110),
          i = n(9315)(!1),
          s = n(9335)("IE_PROTO");
        t.exports = function (t, e) {
          var n,
            a = o(t),
            l = 0,
            c = [];
          for (n in a) n != s && r(a, n) && c.push(n);
          for (; e.length > l;) r(a, n = e[l++]) && (~i(c, n) || c.push(n));
          return c;
        };
      },
      7184: function _(t, e, n) {
        var r = n(189),
          o = n(4430);
        t.exports = Object.keys || function (t) {
          return r(t, o);
        };
      },
      4682: function _(t, e) {
        e.f = {}.propertyIsEnumerable;
      },
      3160: function _(t, e, n) {
        var r = n(2985),
          o = n(5645),
          i = n(4253);
        t.exports = function (t, e) {
          var n = (o.Object || {})[t] || Object[t],
            s = {};
          s[t] = e(n), r(r.S + r.F * i(function () {
            n(1);
          }), "Object", s);
        };
      },
      1131: function _(t, e, n) {
        var r = n(7057),
          o = n(7184),
          i = n(2110),
          s = n(4682).f;
        t.exports = function (t) {
          return function (e) {
            for (var n, a = i(e), l = o(a), c = l.length, u = 0, h = []; c > u;) n = l[u++], r && !s.call(a, n) || h.push(t ? [n, a[n]] : a[n]);
            return h;
          };
        };
      },
      7643: function _(t, e, n) {
        var r = n(616),
          o = n(4548),
          i = n(7007),
          s = n(3816).Reflect;
        t.exports = s && s.ownKeys || function (t) {
          var e = r.f(i(t)),
            n = o.f;
          return n ? e.concat(n(t)) : e;
        };
      },
      7743: function _(t, e, n) {
        var r = n(3816).parseFloat,
          o = n(9599).trim;
        t.exports = 1 / r(n(4644) + "-0") != -1 / 0 ? function (t) {
          var e = o(String(t), 3),
            n = r(e);
          return 0 === n && "-" == e.charAt(0) ? -0 : n;
        } : r;
      },
      5960: function _(t, e, n) {
        var r = n(3816).parseInt,
          o = n(9599).trim,
          i = n(4644),
          s = /^[-+]?0[xX]/;
        t.exports = 8 !== r(i + "08") || 22 !== r(i + "0x16") ? function (t, e) {
          var n = o(String(t), 3);
          return r(n, e >>> 0 || (s.test(n) ? 16 : 10));
        } : r;
      },
      188: function _(t) {
        t.exports = function (t) {
          try {
            return {
              e: !1,
              v: t()
            };
          } catch (t) {
            return {
              e: !0,
              v: t
            };
          }
        };
      },
      94: function _(t, e, n) {
        var r = n(7007),
          o = n(5286),
          i = n(3499);
        t.exports = function (t, e) {
          if (r(t), o(e) && e.constructor === t) return e;
          var n = i.f(t);
          return (0, n.resolve)(e), n.promise;
        };
      },
      681: function _(t) {
        t.exports = function (t, e) {
          return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: e
          };
        };
      },
      4408: function _(t, e, n) {
        var r = n(7234);
        t.exports = function (t, e, n) {
          for (var o in e) r(t, o, e[o], n);
          return t;
        };
      },
      7234: function _(t, e, n) {
        var r = n(3816),
          o = n(7728),
          i = n(9181),
          s = n(3953)("src"),
          a = n(18),
          l = "toString",
          c = ("" + a).split(l);
        n(5645).inspectSource = function (t) {
          return a.call(t);
        }, (t.exports = function (t, e, n, a) {
          var l = "function" == typeof n;
          l && (i(n, "name") || o(n, "name", e)), t[e] !== n && (l && (i(n, s) || o(n, s, t[e] ? "" + t[e] : c.join(String(e)))), t === r ? t[e] = n : a ? t[e] ? t[e] = n : o(t, e, n) : (delete t[e], o(t, e, n)));
        })(Function.prototype, l, function () {
          return "function" == typeof this && this[s] || a.call(this);
        });
      },
      7787: function _(t, e, n) {
        "use strict";

        var r = n(1488),
          o = RegExp.prototype.exec;
        t.exports = function (t, e) {
          var n = t.exec;
          if ("function" == typeof n) {
            var i = n.call(t, e);
            if ("object" != _typeof(i)) throw new TypeError("RegExp exec method returned something other than an Object or null");
            return i;
          }
          if ("RegExp" !== r(t)) throw new TypeError("RegExp#exec called on incompatible receiver");
          return o.call(t, e);
        };
      },
      1165: function _(t, e, n) {
        "use strict";

        var r,
          o,
          i = n(3218),
          s = RegExp.prototype.exec,
          a = String.prototype.replace,
          l = s,
          c = "lastIndex",
          u = (r = /a/, o = /b*/g, s.call(r, "a"), s.call(o, "a"), 0 !== r[c] || 0 !== o[c]),
          h = void 0 !== /()??/.exec("")[1];
        (u || h) && (l = function l(t) {
          var e,
            n,
            r,
            o,
            l = this;
          return h && (n = new RegExp("^" + l.source + "$(?!\\s)", i.call(l))), u && (e = l[c]), r = s.call(l, t), u && r && (l[c] = l.global ? r.index + r[0].length : e), h && r && r.length > 1 && a.call(r[0], n, function () {
            for (o = 1; o < arguments.length - 2; o++) void 0 === arguments[o] && (r[o] = void 0);
          }), r;
        }), t.exports = l;
      },
      7195: function _(t) {
        t.exports = Object.is || function (t, e) {
          return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e;
        };
      },
      7375: function _(t, e, n) {
        var r = n(5286),
          o = n(7007),
          i = function i(t, e) {
            if (o(t), !r(e) && null !== e) throw TypeError(e + ": can't set as prototype!");
          };
        t.exports = {
          set: Object.setPrototypeOf || ("__proto__" in {} ? function (t, e, r) {
            try {
              (r = n(741)(Function.call, n(8693).f(Object.prototype, "__proto__").set, 2))(t, []), e = !(t instanceof Array);
            } catch (t) {
              e = !0;
            }
            return function (t, n) {
              return i(t, n), e ? t.__proto__ = n : r(t, n), t;
            };
          }({}, !1) : void 0),
          check: i
        };
      },
      2974: function _(t, e, n) {
        "use strict";

        var r = n(3816),
          o = n(9275),
          i = n(7057),
          s = n(6314)("species");
        t.exports = function (t) {
          var e = r[t];
          i && e && !e[s] && o.f(e, s, {
            configurable: !0,
            get: function get() {
              return this;
            }
          });
        };
      },
      2943: function _(t, e, n) {
        var r = n(9275).f,
          o = n(9181),
          i = n(6314)("toStringTag");
        t.exports = function (t, e, n) {
          t && !o(t = n ? t : t.prototype, i) && r(t, i, {
            configurable: !0,
            value: e
          });
        };
      },
      9335: function _(t, e, n) {
        var r = n(3825)("keys"),
          o = n(3953);
        t.exports = function (t) {
          return r[t] || (r[t] = o(t));
        };
      },
      3825: function _(t, e, n) {
        var r = n(5645),
          o = n(3816),
          i = "__core-js_shared__",
          s = o[i] || (o[i] = {});
        (t.exports = function (t, e) {
          return s[t] || (s[t] = void 0 !== e ? e : {});
        })("versions", []).push({
          version: r.version,
          mode: n(4461) ? "pure" : "global",
          copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
        });
      },
      8364: function _(t, e, n) {
        var r = n(7007),
          o = n(4963),
          i = n(6314)("species");
        t.exports = function (t, e) {
          var n,
            s = r(t).constructor;
          return void 0 === s || null == (n = r(s)[i]) ? e : o(n);
        };
      },
      7717: function _(t, e, n) {
        "use strict";

        var r = n(4253);
        t.exports = function (t, e) {
          return !!t && r(function () {
            e ? t.call(null, function () {}, 1) : t.call(null);
          });
        };
      },
      4496: function _(t, e, n) {
        var r = n(1467),
          o = n(1355);
        t.exports = function (t) {
          return function (e, n) {
            var i,
              s,
              a = String(o(e)),
              l = r(n),
              c = a.length;
            return l < 0 || l >= c ? t ? "" : void 0 : (i = a.charCodeAt(l)) < 55296 || i > 56319 || l + 1 === c || (s = a.charCodeAt(l + 1)) < 56320 || s > 57343 ? t ? a.charAt(l) : i : t ? a.slice(l, l + 2) : s - 56320 + (i - 55296 << 10) + 65536;
          };
        };
      },
      2094: function _(t, e, n) {
        var r = n(5364),
          o = n(1355);
        t.exports = function (t, e, n) {
          if (r(e)) throw TypeError("String#" + n + " doesn't accept regex!");
          return String(o(t));
        };
      },
      9395: function _(t, e, n) {
        var r = n(2985),
          o = n(4253),
          i = n(1355),
          s = /"/g,
          a = function a(t, e, n, r) {
            var o = String(i(t)),
              a = "<" + e;
            return "" !== n && (a += " " + n + '="' + String(r).replace(s, "&quot;") + '"'), a + ">" + o + "</" + e + ">";
          };
        t.exports = function (t, e) {
          var n = {};
          n[t] = e(a), r(r.P + r.F * o(function () {
            var e = ""[t]('"');
            return e !== e.toLowerCase() || e.split('"').length > 3;
          }), "String", n);
        };
      },
      5442: function _(t, e, n) {
        var r = n(875),
          o = n(8595),
          i = n(1355);
        t.exports = function (t, e, n, s) {
          var a = String(i(t)),
            l = a.length,
            c = void 0 === n ? " " : String(n),
            u = r(e);
          if (u <= l || "" == c) return a;
          var h = u - l,
            d = o.call(c, Math.ceil(h / c.length));
          return d.length > h && (d = d.slice(0, h)), s ? d + a : a + d;
        };
      },
      8595: function _(t, e, n) {
        "use strict";

        var r = n(1467),
          o = n(1355);
        t.exports = function (t) {
          var e = String(o(this)),
            n = "",
            i = r(t);
          if (i < 0 || i == 1 / 0) throw RangeError("Count can't be negative");
          for (; i > 0; (i >>>= 1) && (e += e)) 1 & i && (n += e);
          return n;
        };
      },
      9599: function _(t, e, n) {
        var r = n(2985),
          o = n(1355),
          i = n(4253),
          s = n(4644),
          a = "[" + s + "]",
          l = RegExp("^" + a + a + "*"),
          c = RegExp(a + a + "*$"),
          u = function u(t, e, n) {
            var o = {},
              a = i(function () {
                return !!s[t]() || "​" != "​"[t]();
              }),
              l = o[t] = a ? e(h) : s[t];
            n && (o[n] = l), r(r.P + r.F * a, "String", o);
          },
          h = u.trim = function (t, e) {
            return t = String(o(t)), 1 & e && (t = t.replace(l, "")), 2 & e && (t = t.replace(c, "")), t;
          };
        t.exports = u;
      },
      4644: function _(t) {
        t.exports = "\t\n\x0B\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";
      },
      4193: function _(t, e, n) {
        var r,
          o,
          i,
          s = n(741),
          a = n(7242),
          l = n(639),
          c = n(2457),
          u = n(3816),
          h = u.process,
          d = u.setImmediate,
          p = u.clearImmediate,
          f = u.MessageChannel,
          m = u.Dispatch,
          g = 0,
          y = {},
          v = "onreadystatechange",
          b = function b() {
            var t = +this;
            if (y.hasOwnProperty(t)) {
              var e = y[t];
              delete y[t], e();
            }
          },
          w = function w(t) {
            b.call(t.data);
          };
        d && p || (d = function d(t) {
          for (var e = [], n = 1; arguments.length > n;) e.push(arguments[n++]);
          return y[++g] = function () {
            a("function" == typeof t ? t : Function(t), e);
          }, r(g), g;
        }, p = function p(t) {
          delete y[t];
        }, "process" == n(2032)(h) ? r = function r(t) {
          h.nextTick(s(b, t, 1));
        } : m && m.now ? r = function r(t) {
          m.now(s(b, t, 1));
        } : f ? (i = (o = new f()).port2, o.port1.onmessage = w, r = s(i.postMessage, i, 1)) : u.addEventListener && "function" == typeof postMessage && !u.importScripts ? (r = function r(t) {
          u.postMessage(t + "", "*");
        }, u.addEventListener("message", w, !1)) : r = v in c("script") ? function (t) {
          l.appendChild(c("script"))[v] = function () {
            l.removeChild(this), b.call(t);
          };
        } : function (t) {
          setTimeout(s(b, t, 1), 0);
        }), t.exports = {
          set: d,
          clear: p
        };
      },
      2337: function _(t, e, n) {
        var r = n(1467),
          o = Math.max,
          i = Math.min;
        t.exports = function (t, e) {
          return (t = r(t)) < 0 ? o(t + e, 0) : i(t, e);
        };
      },
      4843: function _(t, e, n) {
        var r = n(1467),
          o = n(875);
        t.exports = function (t) {
          if (void 0 === t) return 0;
          var e = r(t),
            n = o(e);
          if (e !== n) throw RangeError("Wrong length!");
          return n;
        };
      },
      1467: function _(t) {
        var e = Math.ceil,
          n = Math.floor;
        t.exports = function (t) {
          return isNaN(t = +t) ? 0 : (t > 0 ? n : e)(t);
        };
      },
      2110: function _(t, e, n) {
        var r = n(9797),
          o = n(1355);
        t.exports = function (t) {
          return r(o(t));
        };
      },
      875: function _(t, e, n) {
        var r = n(1467),
          o = Math.min;
        t.exports = function (t) {
          return t > 0 ? o(r(t), 9007199254740991) : 0;
        };
      },
      508: function _(t, e, n) {
        var r = n(1355);
        t.exports = function (t) {
          return Object(r(t));
        };
      },
      1689: function _(t, e, n) {
        var r = n(5286);
        t.exports = function (t, e) {
          if (!r(t)) return t;
          var n, o;
          if (e && "function" == typeof (n = t.toString) && !r(o = n.call(t))) return o;
          if ("function" == typeof (n = t.valueOf) && !r(o = n.call(t))) return o;
          if (!e && "function" == typeof (n = t.toString) && !r(o = n.call(t))) return o;
          throw TypeError("Can't convert object to primitive value");
        };
      },
      8440: function _(t, e, n) {
        "use strict";

        if (n(7057)) {
          var r = n(4461),
            o = n(3816),
            i = n(4253),
            s = n(2985),
            a = n(9383),
            l = n(1125),
            c = n(741),
            u = n(3328),
            h = n(681),
            d = n(7728),
            p = n(4408),
            f = n(1467),
            m = n(875),
            g = n(4843),
            y = n(2337),
            v = n(1689),
            b = n(9181),
            w = n(1488),
            x = n(5286),
            k = n(508),
            S = n(6555),
            M = n(2503),
            O = n(468),
            T = n(616).f,
            C = n(9002),
            E = n(3953),
            A = n(6314),
            N = n(50),
            D = n(9315),
            R = n(8364),
            I = n(6997),
            P = n(2803),
            L = n(7462),
            F = n(2974),
            B = n(6852),
            z = n(5216),
            j = n(9275),
            $ = n(8693),
            _ = j.f,
            H = $.f,
            V = o.RangeError,
            W = o.TypeError,
            K = o.Uint8Array,
            q = "ArrayBuffer",
            J = "Shared" + q,
            U = "BYTES_PER_ELEMENT",
            G = "prototype",
            Y = Array[G],
            X = l.ArrayBuffer,
            Q = l.DataView,
            Z = N(0),
            tt = N(2),
            et = N(3),
            nt = N(4),
            rt = N(5),
            ot = N(6),
            it = D(!0),
            st = D(!1),
            at = I.values,
            lt = I.keys,
            ct = I.entries,
            ut = Y.lastIndexOf,
            ht = Y.reduce,
            dt = Y.reduceRight,
            pt = Y.join,
            ft = Y.sort,
            mt = Y.slice,
            gt = Y.toString,
            yt = Y.toLocaleString,
            vt = A("iterator"),
            bt = A("toStringTag"),
            wt = E("typed_constructor"),
            xt = E("def_constructor"),
            kt = a.CONSTR,
            St = a.TYPED,
            Mt = a.VIEW,
            Ot = "Wrong length!",
            Tt = N(1, function (t, e) {
              return Dt(R(t, t[xt]), e);
            }),
            Ct = i(function () {
              return 1 === new K(new Uint16Array([1]).buffer)[0];
            }),
            Et = !!K && !!K[G].set && i(function () {
              new K(1).set({});
            }),
            At = function At(t, e) {
              var n = f(t);
              if (n < 0 || n % e) throw V("Wrong offset!");
              return n;
            },
            Nt = function Nt(t) {
              if (x(t) && St in t) return t;
              throw W(t + " is not a typed array!");
            },
            Dt = function Dt(t, e) {
              if (!x(t) || !(wt in t)) throw W("It is not a typed array constructor!");
              return new t(e);
            },
            Rt = function Rt(t, e) {
              return It(R(t, t[xt]), e);
            },
            It = function It(t, e) {
              for (var n = 0, r = e.length, o = Dt(t, r); r > n;) o[n] = e[n++];
              return o;
            },
            Pt = function Pt(t, e, n) {
              _(t, e, {
                get: function get() {
                  return this._d[n];
                }
              });
            },
            Lt = function Lt(t) {
              var e,
                n,
                r,
                o,
                i,
                s,
                a = k(t),
                l = arguments.length,
                u = l > 1 ? arguments[1] : void 0,
                h = void 0 !== u,
                d = C(a);
              if (null != d && !S(d)) {
                for (s = d.call(a), r = [], e = 0; !(i = s.next()).done; e++) r.push(i.value);
                a = r;
              }
              for (h && l > 2 && (u = c(u, arguments[2], 2)), e = 0, n = m(a.length), o = Dt(this, n); n > e; e++) o[e] = h ? u(a[e], e) : a[e];
              return o;
            },
            Ft = function Ft() {
              for (var t = 0, e = arguments.length, n = Dt(this, e); e > t;) n[t] = arguments[t++];
              return n;
            },
            Bt = !!K && i(function () {
              yt.call(new K(1));
            }),
            zt = function zt() {
              return yt.apply(Bt ? mt.call(Nt(this)) : Nt(this), arguments);
            },
            jt = {
              copyWithin: function copyWithin(t, e) {
                return z.call(Nt(this), t, e, arguments.length > 2 ? arguments[2] : void 0);
              },
              every: function every(t) {
                return nt(Nt(this), t, arguments.length > 1 ? arguments[1] : void 0);
              },
              fill: function fill(t) {
                return B.apply(Nt(this), arguments);
              },
              filter: function filter(t) {
                return Rt(this, tt(Nt(this), t, arguments.length > 1 ? arguments[1] : void 0));
              },
              find: function find(t) {
                return rt(Nt(this), t, arguments.length > 1 ? arguments[1] : void 0);
              },
              findIndex: function findIndex(t) {
                return ot(Nt(this), t, arguments.length > 1 ? arguments[1] : void 0);
              },
              forEach: function forEach(t) {
                Z(Nt(this), t, arguments.length > 1 ? arguments[1] : void 0);
              },
              indexOf: function indexOf(t) {
                return st(Nt(this), t, arguments.length > 1 ? arguments[1] : void 0);
              },
              includes: function includes(t) {
                return it(Nt(this), t, arguments.length > 1 ? arguments[1] : void 0);
              },
              join: function join(t) {
                return pt.apply(Nt(this), arguments);
              },
              lastIndexOf: function lastIndexOf(t) {
                return ut.apply(Nt(this), arguments);
              },
              map: function map(t) {
                return Tt(Nt(this), t, arguments.length > 1 ? arguments[1] : void 0);
              },
              reduce: function reduce(t) {
                return ht.apply(Nt(this), arguments);
              },
              reduceRight: function reduceRight(t) {
                return dt.apply(Nt(this), arguments);
              },
              reverse: function reverse() {
                for (var t, e = this, n = Nt(e).length, r = Math.floor(n / 2), o = 0; o < r;) t = e[o], e[o++] = e[--n], e[n] = t;
                return e;
              },
              some: function some(t) {
                return et(Nt(this), t, arguments.length > 1 ? arguments[1] : void 0);
              },
              sort: function sort(t) {
                return ft.call(Nt(this), t);
              },
              subarray: function subarray(t, e) {
                var n = Nt(this),
                  r = n.length,
                  o = y(t, r);
                return new (R(n, n[xt]))(n.buffer, n.byteOffset + o * n.BYTES_PER_ELEMENT, m((void 0 === e ? r : y(e, r)) - o));
              }
            },
            $t = function $t(t, e) {
              return Rt(this, mt.call(Nt(this), t, e));
            },
            _t = function _t(t) {
              Nt(this);
              var e = At(arguments[1], 1),
                n = this.length,
                r = k(t),
                o = m(r.length),
                i = 0;
              if (o + e > n) throw V(Ot);
              for (; i < o;) this[e + i] = r[i++];
            },
            Ht = {
              entries: function entries() {
                return ct.call(Nt(this));
              },
              keys: function keys() {
                return lt.call(Nt(this));
              },
              values: function values() {
                return at.call(Nt(this));
              }
            },
            Vt = function Vt(t, e) {
              return x(t) && t[St] && "symbol" != _typeof(e) && e in t && String(+e) == String(e);
            },
            Wt = function Wt(t, e) {
              return Vt(t, e = v(e, !0)) ? h(2, t[e]) : H(t, e);
            },
            Kt = function Kt(t, e, n) {
              return !(Vt(t, e = v(e, !0)) && x(n) && b(n, "value")) || b(n, "get") || b(n, "set") || n.configurable || b(n, "writable") && !n.writable || b(n, "enumerable") && !n.enumerable ? _(t, e, n) : (t[e] = n.value, t);
            };
          kt || ($.f = Wt, j.f = Kt), s(s.S + s.F * !kt, "Object", {
            getOwnPropertyDescriptor: Wt,
            defineProperty: Kt
          }), i(function () {
            gt.call({});
          }) && (gt = yt = function yt() {
            return pt.call(this);
          });
          var qt = p({}, jt);
          p(qt, Ht), d(qt, vt, Ht.values), p(qt, {
            slice: $t,
            set: _t,
            constructor: function constructor() {},
            toString: gt,
            toLocaleString: zt
          }), Pt(qt, "buffer", "b"), Pt(qt, "byteOffset", "o"), Pt(qt, "byteLength", "l"), Pt(qt, "length", "e"), _(qt, bt, {
            get: function get() {
              return this[St];
            }
          }), t.exports = function (t, e, n, l) {
            var c = t + ((l = !!l) ? "Clamped" : "") + "Array",
              h = "get" + t,
              p = "set" + t,
              f = o[c],
              y = f || {},
              v = f && O(f),
              b = !f || !a.ABV,
              k = {},
              S = f && f[G],
              C = function C(t, n) {
                _(t, n, {
                  get: function get() {
                    return function (t, n) {
                      var r = t._d;
                      return r.v[h](n * e + r.o, Ct);
                    }(this, n);
                  },
                  set: function set(t) {
                    return function (t, n, r) {
                      var o = t._d;
                      l && (r = (r = Math.round(r)) < 0 ? 0 : r > 255 ? 255 : 255 & r), o.v[p](n * e + o.o, r, Ct);
                    }(this, n, t);
                  },
                  enumerable: !0
                });
              };
            b ? (f = n(function (t, n, r, o) {
              u(t, f, c, "_d");
              var i,
                s,
                a,
                l,
                h = 0,
                p = 0;
              if (x(n)) {
                if (!(n instanceof X || (l = w(n)) == q || l == J)) return St in n ? It(f, n) : Lt.call(f, n);
                i = n, p = At(r, e);
                var y = n.byteLength;
                if (void 0 === o) {
                  if (y % e) throw V(Ot);
                  if ((s = y - p) < 0) throw V(Ot);
                } else if ((s = m(o) * e) + p > y) throw V(Ot);
                a = s / e;
              } else a = g(n), i = new X(s = a * e);
              for (d(t, "_d", {
                b: i,
                o: p,
                l: s,
                e: a,
                v: new Q(i)
              }); h < a;) C(t, h++);
            }), S = f[G] = M(qt), d(S, "constructor", f)) : i(function () {
              f(1);
            }) && i(function () {
              new f(-1);
            }) && L(function (t) {
              new f(), new f(null), new f(1.5), new f(t);
            }, !0) || (f = n(function (t, n, r, o) {
              var i;
              return u(t, f, c), x(n) ? n instanceof X || (i = w(n)) == q || i == J ? void 0 !== o ? new y(n, At(r, e), o) : void 0 !== r ? new y(n, At(r, e)) : new y(n) : St in n ? It(f, n) : Lt.call(f, n) : new y(g(n));
            }), Z(v !== Function.prototype ? T(y).concat(T(v)) : T(y), function (t) {
              t in f || d(f, t, y[t]);
            }), f[G] = S, r || (S.constructor = f));
            var E = S[vt],
              A = !!E && ("values" == E.name || null == E.name),
              N = Ht.values;
            d(f, wt, !0), d(S, St, c), d(S, Mt, !0), d(S, xt, f), (l ? new f(1)[bt] == c : bt in S) || _(S, bt, {
              get: function get() {
                return c;
              }
            }), k[c] = f, s(s.G + s.W + s.F * (f != y), k), s(s.S, c, {
              BYTES_PER_ELEMENT: e
            }), s(s.S + s.F * i(function () {
              y.of.call(f, 1);
            }), c, {
              from: Lt,
              of: Ft
            }), U in S || d(S, U, e), s(s.P, c, jt), F(c), s(s.P + s.F * Et, c, {
              set: _t
            }), s(s.P + s.F * !A, c, Ht), r || S.toString == gt || (S.toString = gt), s(s.P + s.F * i(function () {
              new f(1).slice();
            }), c, {
              slice: $t
            }), s(s.P + s.F * (i(function () {
              return [1, 2].toLocaleString() != new f([1, 2]).toLocaleString();
            }) || !i(function () {
              S.toLocaleString.call([1, 2]);
            })), c, {
              toLocaleString: zt
            }), P[c] = A ? E : N, r || A || d(S, vt, N);
          };
        } else t.exports = function () {};
      },
      1125: function _(t, e, n) {
        "use strict";

        var r = n(3816),
          o = n(7057),
          i = n(4461),
          s = n(9383),
          a = n(7728),
          l = n(4408),
          c = n(4253),
          u = n(3328),
          h = n(1467),
          d = n(875),
          p = n(4843),
          f = n(616).f,
          m = n(9275).f,
          g = n(6852),
          y = n(2943),
          v = "ArrayBuffer",
          b = "DataView",
          w = "prototype",
          x = "Wrong index!",
          _k2 = r[v],
          _S = r[b],
          M = r.Math,
          O = r.RangeError,
          T = r.Infinity,
          C = _k2,
          E = M.abs,
          A = M.pow,
          N = M.floor,
          D = M.log,
          R = M.LN2,
          I = "buffer",
          P = "byteLength",
          L = "byteOffset",
          F = o ? "_b" : I,
          B = o ? "_l" : P,
          z = o ? "_o" : L;
        function j(t, e, n) {
          var r,
            o,
            i,
            s = new Array(n),
            a = 8 * n - e - 1,
            l = (1 << a) - 1,
            c = l >> 1,
            u = 23 === e ? A(2, -24) - A(2, -77) : 0,
            h = 0,
            d = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
          for ((t = E(t)) != t || t === T ? (o = t != t ? 1 : 0, r = l) : (r = N(D(t) / R), t * (i = A(2, -r)) < 1 && (r--, i *= 2), (t += r + c >= 1 ? u / i : u * A(2, 1 - c)) * i >= 2 && (r++, i /= 2), r + c >= l ? (o = 0, r = l) : r + c >= 1 ? (o = (t * i - 1) * A(2, e), r += c) : (o = t * A(2, c - 1) * A(2, e), r = 0)); e >= 8; s[h++] = 255 & o, o /= 256, e -= 8);
          for (r = r << e | o, a += e; a > 0; s[h++] = 255 & r, r /= 256, a -= 8);
          return s[--h] |= 128 * d, s;
        }
        function $(t, e, n) {
          var r,
            o = 8 * n - e - 1,
            i = (1 << o) - 1,
            s = i >> 1,
            a = o - 7,
            l = n - 1,
            c = t[l--],
            u = 127 & c;
          for (c >>= 7; a > 0; u = 256 * u + t[l], l--, a -= 8);
          for (r = u & (1 << -a) - 1, u >>= -a, a += e; a > 0; r = 256 * r + t[l], l--, a -= 8);
          if (0 === u) u = 1 - s;else {
            if (u === i) return r ? NaN : c ? -T : T;
            r += A(2, e), u -= s;
          }
          return (c ? -1 : 1) * r * A(2, u - e);
        }
        function _(t) {
          return t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0];
        }
        function H(t) {
          return [255 & t];
        }
        function V(t) {
          return [255 & t, t >> 8 & 255];
        }
        function W(t) {
          return [255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255];
        }
        function K(t) {
          return j(t, 52, 8);
        }
        function q(t) {
          return j(t, 23, 4);
        }
        function J(t, e, n) {
          m(t[w], e, {
            get: function get() {
              return this[n];
            }
          });
        }
        function U(t, e, n, r) {
          var o = p(+n);
          if (o + e > t[B]) throw O(x);
          var i = t[F]._b,
            s = o + t[z],
            a = i.slice(s, s + e);
          return r ? a : a.reverse();
        }
        function G(t, e, n, r, o, i) {
          var s = p(+n);
          if (s + e > t[B]) throw O(x);
          for (var a = t[F]._b, l = s + t[z], c = r(+o), u = 0; u < e; u++) a[l + u] = c[i ? u : e - u - 1];
        }
        if (s.ABV) {
          if (!c(function () {
            _k2(1);
          }) || !c(function () {
            new _k2(-1);
          }) || c(function () {
            return new _k2(), new _k2(1.5), new _k2(NaN), _k2.name != v;
          })) {
            for (var Y, X = (_k2 = function k(t) {
                return u(this, _k2), new C(p(t));
              })[w] = C[w], Q = f(C), Z = 0; Q.length > Z;) (Y = Q[Z++]) in _k2 || a(_k2, Y, C[Y]);
            i || (X.constructor = _k2);
          }
          var tt = new _S(new _k2(2)),
            et = _S[w].setInt8;
          tt.setInt8(0, 2147483648), tt.setInt8(1, 2147483649), !tt.getInt8(0) && tt.getInt8(1) || l(_S[w], {
            setInt8: function setInt8(t, e) {
              et.call(this, t, e << 24 >> 24);
            },
            setUint8: function setUint8(t, e) {
              et.call(this, t, e << 24 >> 24);
            }
          }, !0);
        } else _k2 = function _k(t) {
          u(this, _k2, v);
          var e = p(t);
          this._b = g.call(new Array(e), 0), this[B] = e;
        }, _S = function S(t, e, n) {
          u(this, _S, b), u(t, _k2, b);
          var r = t[B],
            o = h(e);
          if (o < 0 || o > r) throw O("Wrong offset!");
          if (o + (n = void 0 === n ? r - o : d(n)) > r) throw O("Wrong length!");
          this[F] = t, this[z] = o, this[B] = n;
        }, o && (J(_k2, P, "_l"), J(_S, I, "_b"), J(_S, P, "_l"), J(_S, L, "_o")), l(_S[w], {
          getInt8: function getInt8(t) {
            return U(this, 1, t)[0] << 24 >> 24;
          },
          getUint8: function getUint8(t) {
            return U(this, 1, t)[0];
          },
          getInt16: function getInt16(t) {
            var e = U(this, 2, t, arguments[1]);
            return (e[1] << 8 | e[0]) << 16 >> 16;
          },
          getUint16: function getUint16(t) {
            var e = U(this, 2, t, arguments[1]);
            return e[1] << 8 | e[0];
          },
          getInt32: function getInt32(t) {
            return _(U(this, 4, t, arguments[1]));
          },
          getUint32: function getUint32(t) {
            return _(U(this, 4, t, arguments[1])) >>> 0;
          },
          getFloat32: function getFloat32(t) {
            return $(U(this, 4, t, arguments[1]), 23, 4);
          },
          getFloat64: function getFloat64(t) {
            return $(U(this, 8, t, arguments[1]), 52, 8);
          },
          setInt8: function setInt8(t, e) {
            G(this, 1, t, H, e);
          },
          setUint8: function setUint8(t, e) {
            G(this, 1, t, H, e);
          },
          setInt16: function setInt16(t, e) {
            G(this, 2, t, V, e, arguments[2]);
          },
          setUint16: function setUint16(t, e) {
            G(this, 2, t, V, e, arguments[2]);
          },
          setInt32: function setInt32(t, e) {
            G(this, 4, t, W, e, arguments[2]);
          },
          setUint32: function setUint32(t, e) {
            G(this, 4, t, W, e, arguments[2]);
          },
          setFloat32: function setFloat32(t, e) {
            G(this, 4, t, q, e, arguments[2]);
          },
          setFloat64: function setFloat64(t, e) {
            G(this, 8, t, K, e, arguments[2]);
          }
        });
        y(_k2, v), y(_S, b), a(_S[w], s.VIEW, !0), e[v] = _k2, e[b] = _S;
      },
      9383: function _(t, e, n) {
        for (var r, o = n(3816), i = n(7728), s = n(3953), a = s("typed_array"), l = s("view"), c = !(!o.ArrayBuffer || !o.DataView), u = c, h = 0, d = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(","); h < 9;) (r = o[d[h++]]) ? (i(r.prototype, a, !0), i(r.prototype, l, !0)) : u = !1;
        t.exports = {
          ABV: c,
          CONSTR: u,
          TYPED: a,
          VIEW: l
        };
      },
      3953: function _(t) {
        var e = 0,
          n = Math.random();
        t.exports = function (t) {
          return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++e + n).toString(36));
        };
      },
      575: function _(t, e, n) {
        var r = n(3816).navigator;
        t.exports = r && r.userAgent || "";
      },
      1616: function _(t, e, n) {
        var r = n(5286);
        t.exports = function (t, e) {
          if (!r(t) || t._t !== e) throw TypeError("Incompatible receiver, " + e + " required!");
          return t;
        };
      },
      6074: function _(t, e, n) {
        var r = n(3816),
          o = n(5645),
          i = n(4461),
          s = n(8787),
          a = n(9275).f;
        t.exports = function (t) {
          var e = o.Symbol || (o.Symbol = i ? {} : r.Symbol || {});
          "_" == t.charAt(0) || t in e || a(e, t, {
            value: s.f(t)
          });
        };
      },
      8787: function _(t, e, n) {
        e.f = n(6314);
      },
      6314: function _(t, e, n) {
        var r = n(3825)("wks"),
          o = n(3953),
          i = n(3816).Symbol,
          s = "function" == typeof i;
        (t.exports = function (t) {
          return r[t] || (r[t] = s && i[t] || (s ? i : o)("Symbol." + t));
        }).store = r;
      },
      9002: function _(t, e, n) {
        var r = n(1488),
          o = n(6314)("iterator"),
          i = n(2803);
        t.exports = n(5645).getIteratorMethod = function (t) {
          if (null != t) return t[o] || t["@@iterator"] || i[r(t)];
        };
      },
      2e3: function _(t, e, n) {
        var r = n(2985);
        r(r.P, "Array", {
          copyWithin: n(5216)
        }), n(7722)("copyWithin");
      },
      5745: function _(t, e, n) {
        "use strict";

        var r = n(2985),
          o = n(50)(4);
        r(r.P + r.F * !n(7717)([].every, !0), "Array", {
          every: function every(t) {
            return o(this, t, arguments[1]);
          }
        });
      },
      8977: function _(t, e, n) {
        var r = n(2985);
        r(r.P, "Array", {
          fill: n(6852)
        }), n(7722)("fill");
      },
      8837: function _(t, e, n) {
        "use strict";

        var r = n(2985),
          o = n(50)(2);
        r(r.P + r.F * !n(7717)([].filter, !0), "Array", {
          filter: function filter(t) {
            return o(this, t, arguments[1]);
          }
        });
      },
      4899: function _(t, e, n) {
        "use strict";

        var r = n(2985),
          o = n(50)(6),
          i = "findIndex",
          s = !0;
        i in [] && Array(1)[i](function () {
          s = !1;
        }), r(r.P + r.F * s, "Array", {
          findIndex: function findIndex(t) {
            return o(this, t, arguments.length > 1 ? arguments[1] : void 0);
          }
        }), n(7722)(i);
      },
      2310: function _(t, e, n) {
        "use strict";

        var r = n(2985),
          o = n(50)(5),
          i = "find",
          s = !0;
        i in [] && Array(1)[i](function () {
          s = !1;
        }), r(r.P + r.F * s, "Array", {
          find: function find(t) {
            return o(this, t, arguments.length > 1 ? arguments[1] : void 0);
          }
        }), n(7722)(i);
      },
      4336: function _(t, e, n) {
        "use strict";

        var r = n(2985),
          o = n(50)(0),
          i = n(7717)([].forEach, !0);
        r(r.P + r.F * !i, "Array", {
          forEach: function forEach(t) {
            return o(this, t, arguments[1]);
          }
        });
      },
      522: function _(t, e, n) {
        "use strict";

        var r = n(741),
          o = n(2985),
          i = n(508),
          s = n(8851),
          a = n(6555),
          l = n(875),
          c = n(2811),
          u = n(9002);
        o(o.S + o.F * !n(7462)(function (t) {
          Array.from(t);
        }), "Array", {
          from: function from(t) {
            var e,
              n,
              o,
              h,
              d = i(t),
              p = "function" == typeof this ? this : Array,
              f = arguments.length,
              m = f > 1 ? arguments[1] : void 0,
              g = void 0 !== m,
              y = 0,
              v = u(d);
            if (g && (m = r(m, f > 2 ? arguments[2] : void 0, 2)), null == v || p == Array && a(v)) for (n = new p(e = l(d.length)); e > y; y++) c(n, y, g ? m(d[y], y) : d[y]);else for (h = v.call(d), n = new p(); !(o = h.next()).done; y++) c(n, y, g ? s(h, m, [o.value, y], !0) : o.value);
            return n.length = y, n;
          }
        });
      },
      3369: function _(t, e, n) {
        "use strict";

        var r = n(2985),
          o = n(9315)(!1),
          i = [].indexOf,
          s = !!i && 1 / [1].indexOf(1, -0) < 0;
        r(r.P + r.F * (s || !n(7717)(i)), "Array", {
          indexOf: function indexOf(t) {
            return s ? i.apply(this, arguments) || 0 : o(this, t, arguments[1]);
          }
        });
      },
      774: function _(t, e, n) {
        var r = n(2985);
        r(r.S, "Array", {
          isArray: n(4302)
        });
      },
      6997: function _(t, e, n) {
        "use strict";

        var r = n(7722),
          o = n(5436),
          i = n(2803),
          s = n(2110);
        t.exports = n(2923)(Array, "Array", function (t, e) {
          this._t = s(t), this._i = 0, this._k = e;
        }, function () {
          var t = this._t,
            e = this._k,
            n = this._i++;
          return !t || n >= t.length ? (this._t = void 0, o(1)) : o(0, "keys" == e ? n : "values" == e ? t[n] : [n, t[n]]);
        }, "values"), i.Arguments = i.Array, r("keys"), r("values"), r("entries");
      },
      7842: function _(t, e, n) {
        "use strict";

        var r = n(2985),
          o = n(2110),
          i = [].join;
        r(r.P + r.F * (n(9797) != Object || !n(7717)(i)), "Array", {
          join: function join(t) {
            return i.call(o(this), void 0 === t ? "," : t);
          }
        });
      },
      9564: function _(t, e, n) {
        "use strict";

        var r = n(2985),
          o = n(2110),
          i = n(1467),
          s = n(875),
          a = [].lastIndexOf,
          l = !!a && 1 / [1].lastIndexOf(1, -0) < 0;
        r(r.P + r.F * (l || !n(7717)(a)), "Array", {
          lastIndexOf: function lastIndexOf(t) {
            if (l) return a.apply(this, arguments) || 0;
            var e = o(this),
              n = s(e.length),
              r = n - 1;
            for (arguments.length > 1 && (r = Math.min(r, i(arguments[1]))), r < 0 && (r = n + r); r >= 0; r--) if (r in e && e[r] === t) return r || 0;
            return -1;
          }
        });
      },
      1802: function _(t, e, n) {
        "use strict";

        var r = n(2985),
          o = n(50)(1);
        r(r.P + r.F * !n(7717)([].map, !0), "Array", {
          map: function map(t) {
            return o(this, t, arguments[1]);
          }
        });
      },
      8295: function _(t, e, n) {
        "use strict";

        var r = n(2985),
          o = n(2811);
        r(r.S + r.F * n(4253)(function () {
          function t() {}
          return !(Array.of.call(t) instanceof t);
        }), "Array", {
          of: function of() {
            for (var t = 0, e = arguments.length, n = new ("function" == typeof this ? this : Array)(e); e > t;) o(n, t, arguments[t++]);
            return n.length = e, n;
          }
        });
      },
      3750: function _(t, e, n) {
        "use strict";

        var r = n(2985),
          o = n(7628);
        r(r.P + r.F * !n(7717)([].reduceRight, !0), "Array", {
          reduceRight: function reduceRight(t) {
            return o(this, t, arguments.length, arguments[1], !0);
          }
        });
      },
      3057: function _(t, e, n) {
        "use strict";

        var r = n(2985),
          o = n(7628);
        r(r.P + r.F * !n(7717)([].reduce, !0), "Array", {
          reduce: function reduce(t) {
            return o(this, t, arguments.length, arguments[1], !1);
          }
        });
      },
      110: function _(t, e, n) {
        "use strict";

        var r = n(2985),
          o = n(639),
          i = n(2032),
          s = n(2337),
          a = n(875),
          l = [].slice;
        r(r.P + r.F * n(4253)(function () {
          o && l.call(o);
        }), "Array", {
          slice: function slice(t, e) {
            var n = a(this.length),
              r = i(this);
            if (e = void 0 === e ? n : e, "Array" == r) return l.call(this, t, e);
            for (var o = s(t, n), c = s(e, n), u = a(c - o), h = new Array(u), d = 0; d < u; d++) h[d] = "String" == r ? this.charAt(o + d) : this[o + d];
            return h;
          }
        });
      },
      6773: function _(t, e, n) {
        "use strict";

        var r = n(2985),
          o = n(50)(3);
        r(r.P + r.F * !n(7717)([].some, !0), "Array", {
          some: function some(t) {
            return o(this, t, arguments[1]);
          }
        });
      },
      75: function _(t, e, n) {
        "use strict";

        var r = n(2985),
          o = n(4963),
          i = n(508),
          s = n(4253),
          a = [].sort,
          l = [1, 2, 3];
        r(r.P + r.F * (s(function () {
          l.sort(void 0);
        }) || !s(function () {
          l.sort(null);
        }) || !n(7717)(a)), "Array", {
          sort: function sort(t) {
            return void 0 === t ? a.call(i(this)) : a.call(i(this), o(t));
          }
        });
      },
      1842: function _(t, e, n) {
        n(2974)("Array");
      },
      1822: function _(t, e, n) {
        var r = n(2985);
        r(r.S, "Date", {
          now: function now() {
            return new Date().getTime();
          }
        });
      },
      1031: function _(t, e, n) {
        var r = n(2985),
          o = n(3537);
        r(r.P + r.F * (Date.prototype.toISOString !== o), "Date", {
          toISOString: o
        });
      },
      9977: function _(t, e, n) {
        "use strict";

        var r = n(2985),
          o = n(508),
          i = n(1689);
        r(r.P + r.F * n(4253)(function () {
          return null !== new Date(NaN).toJSON() || 1 !== Date.prototype.toJSON.call({
            toISOString: function toISOString() {
              return 1;
            }
          });
        }), "Date", {
          toJSON: function toJSON(t) {
            var e = o(this),
              n = i(e);
            return "number" != typeof n || isFinite(n) ? e.toISOString() : null;
          }
        });
      },
      1560: function _(t, e, n) {
        var r = n(6314)("toPrimitive"),
          o = Date.prototype;
        r in o || n(7728)(o, r, n(870));
      },
      6331: function _(t, e, n) {
        var r = Date.prototype,
          o = "Invalid Date",
          i = "toString",
          s = r[i],
          a = r.getTime;
        new Date(NaN) + "" != o && n(7234)(r, i, function () {
          var t = a.call(this);
          return t == t ? s.call(this) : o;
        });
      },
      9730: function _(t, e, n) {
        var r = n(2985);
        r(r.P, "Function", {
          bind: n(4398)
        });
      },
      8377: function _(t, e, n) {
        "use strict";

        var r = n(5286),
          o = n(468),
          i = n(6314)("hasInstance"),
          s = Function.prototype;
        i in s || n(9275).f(s, i, {
          value: function value(t) {
            if ("function" != typeof this || !r(t)) return !1;
            if (!r(this.prototype)) return t instanceof this;
            for (; t = o(t);) if (this.prototype === t) return !0;
            return !1;
          }
        });
      },
      6059: function _(t, e, n) {
        var r = n(9275).f,
          o = Function.prototype,
          i = /^\s*function ([^ (]*)/,
          s = "name";
        s in o || n(7057) && r(o, s, {
          configurable: !0,
          get: function get() {
            try {
              return ("" + this).match(i)[1];
            } catch (t) {
              return "";
            }
          }
        });
      },
      8416: function _(t, e, n) {
        "use strict";

        var r = n(9824),
          o = n(1616),
          i = "Map";
        t.exports = n(5795)(i, function (t) {
          return function () {
            return t(this, arguments.length > 0 ? arguments[0] : void 0);
          };
        }, {
          get: function get(t) {
            var e = r.getEntry(o(this, i), t);
            return e && e.v;
          },
          set: function set(t, e) {
            return r.def(o(this, i), 0 === t ? 0 : t, e);
          }
        }, r, !0);
      },
      6503: function _(t, e, n) {
        var r = n(2985),
          o = n(6206),
          i = Math.sqrt,
          s = Math.acosh;
        r(r.S + r.F * !(s && 710 == Math.floor(s(Number.MAX_VALUE)) && s(1 / 0) == 1 / 0), "Math", {
          acosh: function acosh(t) {
            return (t = +t) < 1 ? NaN : t > 94906265.62425156 ? Math.log(t) + Math.LN2 : o(t - 1 + i(t - 1) * i(t + 1));
          }
        });
      },
      6786: function _(t, e, n) {
        var r = n(2985),
          o = Math.asinh;
        r(r.S + r.F * !(o && 1 / o(0) > 0), "Math", {
          asinh: function t(e) {
            return isFinite(e = +e) && 0 != e ? e < 0 ? -t(-e) : Math.log(e + Math.sqrt(e * e + 1)) : e;
          }
        });
      },
      932: function _(t, e, n) {
        var r = n(2985),
          o = Math.atanh;
        r(r.S + r.F * !(o && 1 / o(-0) < 0), "Math", {
          atanh: function atanh(t) {
            return 0 == (t = +t) ? t : Math.log((1 + t) / (1 - t)) / 2;
          }
        });
      },
      7526: function _(t, e, n) {
        var r = n(2985),
          o = n(1801);
        r(r.S, "Math", {
          cbrt: function cbrt(t) {
            return o(t = +t) * Math.pow(Math.abs(t), 1 / 3);
          }
        });
      },
      1591: function _(t, e, n) {
        var r = n(2985);
        r(r.S, "Math", {
          clz32: function clz32(t) {
            return (t >>>= 0) ? 31 - Math.floor(Math.log(t + .5) * Math.LOG2E) : 32;
          }
        });
      },
      9073: function _(t, e, n) {
        var r = n(2985),
          o = Math.exp;
        r(r.S, "Math", {
          cosh: function cosh(t) {
            return (o(t = +t) + o(-t)) / 2;
          }
        });
      },
      347: function _(t, e, n) {
        var r = n(2985),
          o = n(3086);
        r(r.S + r.F * (o != Math.expm1), "Math", {
          expm1: o
        });
      },
      579: function _(t, e, n) {
        var r = n(2985);
        r(r.S, "Math", {
          fround: n(4934)
        });
      },
      4669: function _(t, e, n) {
        var r = n(2985),
          o = Math.abs;
        r(r.S, "Math", {
          hypot: function hypot(t, e) {
            for (var n, r, i = 0, s = 0, a = arguments.length, l = 0; s < a;) l < (n = o(arguments[s++])) ? (i = i * (r = l / n) * r + 1, l = n) : i += n > 0 ? (r = n / l) * r : n;
            return l === 1 / 0 ? 1 / 0 : l * Math.sqrt(i);
          }
        });
      },
      7710: function _(t, e, n) {
        var r = n(2985),
          o = Math.imul;
        r(r.S + r.F * n(4253)(function () {
          return -5 != o(4294967295, 5) || 2 != o.length;
        }), "Math", {
          imul: function imul(t, e) {
            var n = 65535,
              r = +t,
              o = +e,
              i = n & r,
              s = n & o;
            return 0 | i * s + ((n & r >>> 16) * s + i * (n & o >>> 16) << 16 >>> 0);
          }
        });
      },
      5789: function _(t, e, n) {
        var r = n(2985);
        r(r.S, "Math", {
          log10: function log10(t) {
            return Math.log(t) * Math.LOG10E;
          }
        });
      },
      3514: function _(t, e, n) {
        var r = n(2985);
        r(r.S, "Math", {
          log1p: n(6206)
        });
      },
      9978: function _(t, e, n) {
        var r = n(2985);
        r(r.S, "Math", {
          log2: function log2(t) {
            return Math.log(t) / Math.LN2;
          }
        });
      },
      8472: function _(t, e, n) {
        var r = n(2985);
        r(r.S, "Math", {
          sign: n(1801)
        });
      },
      6946: function _(t, e, n) {
        var r = n(2985),
          o = n(3086),
          i = Math.exp;
        r(r.S + r.F * n(4253)(function () {
          return -2e-17 != !Math.sinh(-2e-17);
        }), "Math", {
          sinh: function sinh(t) {
            return Math.abs(t = +t) < 1 ? (o(t) - o(-t)) / 2 : (i(t - 1) - i(-t - 1)) * (Math.E / 2);
          }
        });
      },
      5068: function _(t, e, n) {
        var r = n(2985),
          o = n(3086),
          i = Math.exp;
        r(r.S, "Math", {
          tanh: function tanh(t) {
            var e = o(t = +t),
              n = o(-t);
            return e == 1 / 0 ? 1 : n == 1 / 0 ? -1 : (e - n) / (i(t) + i(-t));
          }
        });
      },
      413: function _(t, e, n) {
        var r = n(2985);
        r(r.S, "Math", {
          trunc: function trunc(t) {
            return (t > 0 ? Math.floor : Math.ceil)(t);
          }
        });
      },
      1246: function _(t, e, n) {
        "use strict";

        var r = n(3816),
          o = n(9181),
          i = n(2032),
          s = n(266),
          a = n(1689),
          l = n(4253),
          c = n(616).f,
          u = n(8693).f,
          h = n(9275).f,
          d = n(9599).trim,
          p = "Number",
          _f = r[p],
          m = _f,
          g = _f.prototype,
          y = i(n(2503)(g)) == p,
          v = ("trim" in String.prototype),
          b = function b(t) {
            var e = a(t, !1);
            if ("string" == typeof e && e.length > 2) {
              var n,
                r,
                o,
                i = (e = v ? e.trim() : d(e, 3)).charCodeAt(0);
              if (43 === i || 45 === i) {
                if (88 === (n = e.charCodeAt(2)) || 120 === n) return NaN;
              } else if (48 === i) {
                switch (e.charCodeAt(1)) {
                  case 66:
                  case 98:
                    r = 2, o = 49;
                    break;
                  case 79:
                  case 111:
                    r = 8, o = 55;
                    break;
                  default:
                    return +e;
                }
                for (var s, l = e.slice(2), c = 0, u = l.length; c < u; c++) if ((s = l.charCodeAt(c)) < 48 || s > o) return NaN;
                return parseInt(l, r);
              }
            }
            return +e;
          };
        if (!_f(" 0o1") || !_f("0b1") || _f("+0x1")) {
          _f = function f(t) {
            var e = arguments.length < 1 ? 0 : t,
              n = this;
            return n instanceof _f && (y ? l(function () {
              g.valueOf.call(n);
            }) : i(n) != p) ? s(new m(b(e)), n, _f) : b(e);
          };
          for (var w, x = n(7057) ? c(m) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), k = 0; x.length > k; k++) o(m, w = x[k]) && !o(_f, w) && h(_f, w, u(m, w));
          _f.prototype = g, g.constructor = _f, n(7234)(r, p, _f);
        }
      },
      5972: function _(t, e, n) {
        var r = n(2985);
        r(r.S, "Number", {
          EPSILON: Math.pow(2, -52)
        });
      },
      3403: function _(t, e, n) {
        var r = n(2985),
          o = n(3816).isFinite;
        r(r.S, "Number", {
          isFinite: function isFinite(t) {
            return "number" == typeof t && o(t);
          }
        });
      },
      2516: function _(t, e, n) {
        var r = n(2985);
        r(r.S, "Number", {
          isInteger: n(8367)
        });
      },
      9371: function _(t, e, n) {
        var r = n(2985);
        r(r.S, "Number", {
          isNaN: function isNaN(t) {
            return t != t;
          }
        });
      },
      6479: function _(t, e, n) {
        var r = n(2985),
          o = n(8367),
          i = Math.abs;
        r(r.S, "Number", {
          isSafeInteger: function isSafeInteger(t) {
            return o(t) && i(t) <= 9007199254740991;
          }
        });
      },
      1736: function _(t, e, n) {
        var r = n(2985);
        r(r.S, "Number", {
          MAX_SAFE_INTEGER: 9007199254740991
        });
      },
      1889: function _(t, e, n) {
        var r = n(2985);
        r(r.S, "Number", {
          MIN_SAFE_INTEGER: -9007199254740991
        });
      },
      5177: function _(t, e, n) {
        var r = n(2985),
          o = n(7743);
        r(r.S + r.F * (Number.parseFloat != o), "Number", {
          parseFloat: o
        });
      },
      6943: function _(t, e, n) {
        var r = n(2985),
          o = n(5960);
        r(r.S + r.F * (Number.parseInt != o), "Number", {
          parseInt: o
        });
      },
      726: function _(t, e, n) {
        "use strict";

        var r = n(2985),
          o = n(1467),
          i = n(3365),
          s = n(8595),
          a = 1..toFixed,
          l = Math.floor,
          c = [0, 0, 0, 0, 0, 0],
          u = "Number.toFixed: incorrect invocation!",
          h = "0",
          d = function d(t, e) {
            for (var n = -1, r = e; ++n < 6;) r += t * c[n], c[n] = r % 1e7, r = l(r / 1e7);
          },
          p = function p(t) {
            for (var e = 6, n = 0; --e >= 0;) n += c[e], c[e] = l(n / t), n = n % t * 1e7;
          },
          f = function f() {
            for (var t = 6, e = ""; --t >= 0;) if ("" !== e || 0 === t || 0 !== c[t]) {
              var n = String(c[t]);
              e = "" === e ? n : e + s.call(h, 7 - n.length) + n;
            }
            return e;
          },
          m = function m(t, e, n) {
            return 0 === e ? n : e % 2 == 1 ? m(t, e - 1, n * t) : m(t * t, e / 2, n);
          };
        r(r.P + r.F * (!!a && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== 0xde0b6b3a7640080.toFixed(0)) || !n(4253)(function () {
          a.call({});
        })), "Number", {
          toFixed: function toFixed(t) {
            var e,
              n,
              r,
              a,
              l = i(this, u),
              c = o(t),
              g = "",
              y = h;
            if (c < 0 || c > 20) throw RangeError(u);
            if (l != l) return "NaN";
            if (l <= -1e21 || l >= 1e21) return String(l);
            if (l < 0 && (g = "-", l = -l), l > 1e-21) if (e = function (t) {
              for (var e = 0, n = t; n >= 4096;) e += 12, n /= 4096;
              for (; n >= 2;) e += 1, n /= 2;
              return e;
            }(l * m(2, 69, 1)) - 69, n = e < 0 ? l * m(2, -e, 1) : l / m(2, e, 1), n *= 4503599627370496, (e = 52 - e) > 0) {
              for (d(0, n), r = c; r >= 7;) d(1e7, 0), r -= 7;
              for (d(m(10, r, 1), 0), r = e - 1; r >= 23;) p(1 << 23), r -= 23;
              p(1 << r), d(1, 1), p(2), y = f();
            } else d(0, n), d(1 << -e, 0), y = f() + s.call(h, c);
            return c > 0 ? g + ((a = y.length) <= c ? "0." + s.call(h, c - a) + y : y.slice(0, a - c) + "." + y.slice(a - c)) : g + y;
          }
        });
      },
      1901: function _(t, e, n) {
        "use strict";

        var r = n(2985),
          o = n(4253),
          i = n(3365),
          s = 1..toPrecision;
        r(r.P + r.F * (o(function () {
          return "1" !== s.call(1, void 0);
        }) || !o(function () {
          s.call({});
        })), "Number", {
          toPrecision: function toPrecision(t) {
            var e = i(this, "Number#toPrecision: incorrect invocation!");
            return void 0 === t ? s.call(e) : s.call(e, t);
          }
        });
      },
      5115: function _(t, e, n) {
        var r = n(2985);
        r(r.S + r.F, "Object", {
          assign: n(5345)
        });
      },
      8132: function _(t, e, n) {
        var r = n(2985);
        r(r.S, "Object", {
          create: n(2503)
        });
      },
      7470: function _(t, e, n) {
        var r = n(2985);
        r(r.S + r.F * !n(7057), "Object", {
          defineProperties: n(5588)
        });
      },
      8388: function _(t, e, n) {
        var r = n(2985);
        r(r.S + r.F * !n(7057), "Object", {
          defineProperty: n(9275).f
        });
      },
      9375: function _(t, e, n) {
        var r = n(5286),
          o = n(4728).onFreeze;
        n(3160)("freeze", function (t) {
          return function (e) {
            return t && r(e) ? t(o(e)) : e;
          };
        });
      },
      4882: function _(t, e, n) {
        var r = n(2110),
          o = n(8693).f;
        n(3160)("getOwnPropertyDescriptor", function () {
          return function (t, e) {
            return o(r(t), e);
          };
        });
      },
      9622: function _(t, e, n) {
        n(3160)("getOwnPropertyNames", function () {
          return n(9327).f;
        });
      },
      1520: function _(t, e, n) {
        var r = n(508),
          o = n(468);
        n(3160)("getPrototypeOf", function () {
          return function (t) {
            return o(r(t));
          };
        });
      },
      9892: function _(t, e, n) {
        var r = n(5286);
        n(3160)("isExtensible", function (t) {
          return function (e) {
            return !!r(e) && (!t || t(e));
          };
        });
      },
      4157: function _(t, e, n) {
        var r = n(5286);
        n(3160)("isFrozen", function (t) {
          return function (e) {
            return !r(e) || !!t && t(e);
          };
        });
      },
      5095: function _(t, e, n) {
        var r = n(5286);
        n(3160)("isSealed", function (t) {
          return function (e) {
            return !r(e) || !!t && t(e);
          };
        });
      },
      9176: function _(t, e, n) {
        var r = n(2985);
        r(r.S, "Object", {
          is: n(7195)
        });
      },
      7476: function _(t, e, n) {
        var r = n(508),
          o = n(7184);
        n(3160)("keys", function () {
          return function (t) {
            return o(r(t));
          };
        });
      },
      4672: function _(t, e, n) {
        var r = n(5286),
          o = n(4728).onFreeze;
        n(3160)("preventExtensions", function (t) {
          return function (e) {
            return t && r(e) ? t(o(e)) : e;
          };
        });
      },
      3533: function _(t, e, n) {
        var r = n(5286),
          o = n(4728).onFreeze;
        n(3160)("seal", function (t) {
          return function (e) {
            return t && r(e) ? t(o(e)) : e;
          };
        });
      },
      8838: function _(t, e, n) {
        var r = n(2985);
        r(r.S, "Object", {
          setPrototypeOf: n(7375).set
        });
      },
      6253: function _(t, e, n) {
        "use strict";

        var r = n(1488),
          o = {};
        o[n(6314)("toStringTag")] = "z", o + "" != "[object z]" && n(7234)(Object.prototype, "toString", function () {
          return "[object " + r(this) + "]";
        }, !0);
      },
      4299: function _(t, e, n) {
        var r = n(2985),
          o = n(7743);
        r(r.G + r.F * (parseFloat != o), {
          parseFloat: o
        });
      },
      1084: function _(t, e, n) {
        var r = n(2985),
          o = n(5960);
        r(r.G + r.F * (parseInt != o), {
          parseInt: o
        });
      },
      851: function _(t, e, n) {
        "use strict";

        var r,
          o,
          i,
          s,
          a = n(4461),
          l = n(3816),
          c = n(741),
          u = n(1488),
          h = n(2985),
          d = n(5286),
          p = n(4963),
          f = n(3328),
          m = n(3531),
          g = n(8364),
          y = n(4193).set,
          v = n(4351)(),
          b = n(3499),
          w = n(188),
          x = n(575),
          k = n(94),
          S = "Promise",
          M = l.TypeError,
          O = l.process,
          T = O && O.versions,
          C = T && T.v8 || "",
          _E = l[S],
          A = "process" == u(O),
          N = function N() {},
          D = o = b.f,
          R = !!function () {
            try {
              var t = _E.resolve(1),
                e = (t.constructor = {})[n(6314)("species")] = function (t) {
                  t(N, N);
                };
              return (A || "function" == typeof PromiseRejectionEvent) && t.then(N) instanceof e && 0 !== C.indexOf("6.6") && -1 === x.indexOf("Chrome/66");
            } catch (t) {}
          }(),
          I = function I(t) {
            var e;
            return !(!d(t) || "function" != typeof (e = t.then)) && e;
          },
          P = function P(t, e) {
            if (!t._n) {
              t._n = !0;
              var n = t._c;
              v(function () {
                for (var r = t._v, o = 1 == t._s, i = 0, s = function s(e) {
                    var n,
                      i,
                      s,
                      a = o ? e.ok : e.fail,
                      l = e.resolve,
                      c = e.reject,
                      u = e.domain;
                    try {
                      a ? (o || (2 == t._h && B(t), t._h = 1), !0 === a ? n = r : (u && u.enter(), n = a(r), u && (u.exit(), s = !0)), n === e.promise ? c(M("Promise-chain cycle")) : (i = I(n)) ? i.call(n, l, c) : l(n)) : c(r);
                    } catch (t) {
                      u && !s && u.exit(), c(t);
                    }
                  }; n.length > i;) s(n[i++]);
                t._c = [], t._n = !1, e && !t._h && L(t);
              });
            }
          },
          L = function L(t) {
            y.call(l, function () {
              var e,
                n,
                r,
                o = t._v,
                i = F(t);
              if (i && (e = w(function () {
                A ? O.emit("unhandledRejection", o, t) : (n = l.onunhandledrejection) ? n({
                  promise: t,
                  reason: o
                }) : (r = l.console) && r.error && r.error("Unhandled promise rejection", o);
              }), t._h = A || F(t) ? 2 : 1), t._a = void 0, i && e.e) throw e.v;
            });
          },
          F = function F(t) {
            return 1 !== t._h && 0 === (t._a || t._c).length;
          },
          B = function B(t) {
            y.call(l, function () {
              var e;
              A ? O.emit("rejectionHandled", t) : (e = l.onrejectionhandled) && e({
                promise: t,
                reason: t._v
              });
            });
          },
          z = function z(t) {
            var e = this;
            e._d || (e._d = !0, (e = e._w || e)._v = t, e._s = 2, e._a || (e._a = e._c.slice()), P(e, !0));
          },
          j = function j(t) {
            var e,
              n = this;
            if (!n._d) {
              n._d = !0, n = n._w || n;
              try {
                if (n === t) throw M("Promise can't be resolved itself");
                (e = I(t)) ? v(function () {
                  var r = {
                    _w: n,
                    _d: !1
                  };
                  try {
                    e.call(t, c(j, r, 1), c(z, r, 1));
                  } catch (t) {
                    z.call(r, t);
                  }
                }) : (n._v = t, n._s = 1, P(n, !1));
              } catch (t) {
                z.call({
                  _w: n,
                  _d: !1
                }, t);
              }
            }
          };
        R || (_E = function E(t) {
          f(this, _E, S, "_h"), p(t), r.call(this);
          try {
            t(c(j, this, 1), c(z, this, 1));
          } catch (t) {
            z.call(this, t);
          }
        }, (r = function r(t) {
          this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1;
        }).prototype = n(4408)(_E.prototype, {
          then: function then(t, e) {
            var n = D(g(this, _E));
            return n.ok = "function" != typeof t || t, n.fail = "function" == typeof e && e, n.domain = A ? O.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && P(this, !1), n.promise;
          },
          catch: function _catch(t) {
            return this.then(void 0, t);
          }
        }), i = function i() {
          var t = new r();
          this.promise = t, this.resolve = c(j, t, 1), this.reject = c(z, t, 1);
        }, b.f = D = function D(t) {
          return t === _E || t === s ? new i(t) : o(t);
        }), h(h.G + h.W + h.F * !R, {
          Promise: _E
        }), n(2943)(_E, S), n(2974)(S), s = n(5645)[S], h(h.S + h.F * !R, S, {
          reject: function reject(t) {
            var e = D(this);
            return (0, e.reject)(t), e.promise;
          }
        }), h(h.S + h.F * (a || !R), S, {
          resolve: function resolve(t) {
            return k(a && this === s ? _E : this, t);
          }
        }), h(h.S + h.F * !(R && n(7462)(function (t) {
          _E.all(t).catch(N);
        })), S, {
          all: function all(t) {
            var e = this,
              n = D(e),
              r = n.resolve,
              o = n.reject,
              i = w(function () {
                var n = [],
                  i = 0,
                  s = 1;
                m(t, !1, function (t) {
                  var a = i++,
                    l = !1;
                  n.push(void 0), s++, e.resolve(t).then(function (t) {
                    l || (l = !0, n[a] = t, --s || r(n));
                  }, o);
                }), --s || r(n);
              });
            return i.e && o(i.v), n.promise;
          },
          race: function race(t) {
            var e = this,
              n = D(e),
              r = n.reject,
              o = w(function () {
                m(t, !1, function (t) {
                  e.resolve(t).then(n.resolve, r);
                });
              });
            return o.e && r(o.v), n.promise;
          }
        });
      },
      1572: function _(t, e, n) {
        var r = n(2985),
          o = n(4963),
          i = n(7007),
          s = (n(3816).Reflect || {}).apply,
          a = Function.apply;
        r(r.S + r.F * !n(4253)(function () {
          s(function () {});
        }), "Reflect", {
          apply: function apply(t, e, n) {
            var r = o(t),
              l = i(n);
            return s ? s(r, e, l) : a.call(r, e, l);
          }
        });
      },
      2139: function _(t, e, n) {
        var r = n(2985),
          o = n(2503),
          i = n(4963),
          s = n(7007),
          a = n(5286),
          l = n(4253),
          c = n(4398),
          u = (n(3816).Reflect || {}).construct,
          h = l(function () {
            function t() {}
            return !(u(function () {}, [], t) instanceof t);
          }),
          d = !l(function () {
            u(function () {});
          });
        r(r.S + r.F * (h || d), "Reflect", {
          construct: function construct(t, e) {
            i(t), s(e);
            var n = arguments.length < 3 ? t : i(arguments[2]);
            if (d && !h) return u(t, e, n);
            if (t == n) {
              switch (e.length) {
                case 0:
                  return new t();
                case 1:
                  return new t(e[0]);
                case 2:
                  return new t(e[0], e[1]);
                case 3:
                  return new t(e[0], e[1], e[2]);
                case 4:
                  return new t(e[0], e[1], e[2], e[3]);
              }
              var r = [null];
              return r.push.apply(r, e), new (c.apply(t, r))();
            }
            var l = n.prototype,
              p = o(a(l) ? l : Object.prototype),
              f = Function.apply.call(t, p, e);
            return a(f) ? f : p;
          }
        });
      },
      685: function _(t, e, n) {
        var r = n(9275),
          o = n(2985),
          i = n(7007),
          s = n(1689);
        o(o.S + o.F * n(4253)(function () {
          Reflect.defineProperty(r.f({}, 1, {
            value: 1
          }), 1, {
            value: 2
          });
        }), "Reflect", {
          defineProperty: function defineProperty(t, e, n) {
            i(t), e = s(e, !0), i(n);
            try {
              return r.f(t, e, n), !0;
            } catch (t) {
              return !1;
            }
          }
        });
      },
      5535: function _(t, e, n) {
        var r = n(2985),
          o = n(8693).f,
          i = n(7007);
        r(r.S, "Reflect", {
          deleteProperty: function deleteProperty(t, e) {
            var n = o(i(t), e);
            return !(n && !n.configurable) && delete t[e];
          }
        });
      },
      7347: function _(t, e, n) {
        "use strict";

        var r = n(2985),
          o = n(7007),
          i = function i(t) {
            this._t = o(t), this._i = 0;
            var e,
              n = this._k = [];
            for (e in t) n.push(e);
          };
        n(9988)(i, "Object", function () {
          var t,
            e = this,
            n = e._k;
          do {
            if (e._i >= n.length) return {
              value: void 0,
              done: !0
            };
          } while (!((t = n[e._i++]) in e._t));
          return {
            value: t,
            done: !1
          };
        }), r(r.S, "Reflect", {
          enumerate: function enumerate(t) {
            return new i(t);
          }
        });
      },
      6633: function _(t, e, n) {
        var r = n(8693),
          o = n(2985),
          i = n(7007);
        o(o.S, "Reflect", {
          getOwnPropertyDescriptor: function getOwnPropertyDescriptor(t, e) {
            return r.f(i(t), e);
          }
        });
      },
      8989: function _(t, e, n) {
        var r = n(2985),
          o = n(468),
          i = n(7007);
        r(r.S, "Reflect", {
          getPrototypeOf: function getPrototypeOf(t) {
            return o(i(t));
          }
        });
      },
      3049: function _(t, e, n) {
        var r = n(8693),
          o = n(468),
          i = n(9181),
          s = n(2985),
          a = n(5286),
          l = n(7007);
        s(s.S, "Reflect", {
          get: function t(e, n) {
            var s,
              c,
              u = arguments.length < 3 ? e : arguments[2];
            return l(e) === u ? e[n] : (s = r.f(e, n)) ? i(s, "value") ? s.value : void 0 !== s.get ? s.get.call(u) : void 0 : a(c = o(e)) ? t(c, n, u) : void 0;
          }
        });
      },
      8270: function _(t, e, n) {
        var r = n(2985);
        r(r.S, "Reflect", {
          has: function has(t, e) {
            return e in t;
          }
        });
      },
      4510: function _(t, e, n) {
        var r = n(2985),
          o = n(7007),
          i = Object.isExtensible;
        r(r.S, "Reflect", {
          isExtensible: function isExtensible(t) {
            return o(t), !i || i(t);
          }
        });
      },
      3984: function _(t, e, n) {
        var r = n(2985);
        r(r.S, "Reflect", {
          ownKeys: n(7643)
        });
      },
      5769: function _(t, e, n) {
        var r = n(2985),
          o = n(7007),
          i = Object.preventExtensions;
        r(r.S, "Reflect", {
          preventExtensions: function preventExtensions(t) {
            o(t);
            try {
              return i && i(t), !0;
            } catch (t) {
              return !1;
            }
          }
        });
      },
      6014: function _(t, e, n) {
        var r = n(2985),
          o = n(7375);
        o && r(r.S, "Reflect", {
          setPrototypeOf: function setPrototypeOf(t, e) {
            o.check(t, e);
            try {
              return o.set(t, e), !0;
            } catch (t) {
              return !1;
            }
          }
        });
      },
      55: function _(t, e, n) {
        var r = n(9275),
          o = n(8693),
          i = n(468),
          s = n(9181),
          a = n(2985),
          l = n(681),
          c = n(7007),
          u = n(5286);
        a(a.S, "Reflect", {
          set: function t(e, n, a) {
            var h,
              d,
              p = arguments.length < 4 ? e : arguments[3],
              f = o.f(c(e), n);
            if (!f) {
              if (u(d = i(e))) return t(d, n, a, p);
              f = l(0);
            }
            if (s(f, "value")) {
              if (!1 === f.writable || !u(p)) return !1;
              if (h = o.f(p, n)) {
                if (h.get || h.set || !1 === h.writable) return !1;
                h.value = a, r.f(p, n, h);
              } else r.f(p, n, l(0, a));
              return !0;
            }
            return void 0 !== f.set && (f.set.call(p, a), !0);
          }
        });
      },
      3946: function _(t, e, n) {
        var r = n(3816),
          o = n(266),
          i = n(9275).f,
          s = n(616).f,
          a = n(5364),
          l = n(3218),
          _c3 = r.RegExp,
          u = _c3,
          h = _c3.prototype,
          d = /a/g,
          p = /a/g,
          f = new _c3(d) !== d;
        if (n(7057) && (!f || n(4253)(function () {
          return p[n(6314)("match")] = !1, _c3(d) != d || _c3(p) == p || "/a/i" != _c3(d, "i");
        }))) {
          _c3 = function c(t, e) {
            var n = this instanceof _c3,
              r = a(t),
              i = void 0 === e;
            return !n && r && t.constructor === _c3 && i ? t : o(f ? new u(r && !i ? t.source : t, e) : u((r = t instanceof _c3) ? t.source : t, r && i ? l.call(t) : e), n ? this : h, _c3);
          };
          for (var m = function m(t) {
              (t in _c3) || i(_c3, t, {
                configurable: !0,
                get: function get() {
                  return u[t];
                },
                set: function set(e) {
                  u[t] = e;
                }
              });
            }, g = s(u), y = 0; g.length > y;) m(g[y++]);
          h.constructor = _c3, _c3.prototype = h, n(7234)(r, "RegExp", _c3);
        }
        n(2974)("RegExp");
      },
      8269: function _(t, e, n) {
        "use strict";

        var r = n(1165);
        n(2985)({
          target: "RegExp",
          proto: !0,
          forced: r !== /./.exec
        }, {
          exec: r
        });
      },
      6774: function _(t, e, n) {
        n(7057) && "g" != /./g.flags && n(9275).f(RegExp.prototype, "flags", {
          configurable: !0,
          get: n(3218)
        });
      },
      1466: function _(t, e, n) {
        "use strict";

        var r = n(7007),
          o = n(875),
          i = n(6793),
          s = n(7787);
        n(8082)("match", 1, function (t, e, n, a) {
          return [function (n) {
            var r = t(this),
              o = null == n ? void 0 : n[e];
            return void 0 !== o ? o.call(n, r) : new RegExp(n)[e](String(r));
          }, function (t) {
            var e = a(n, t, this);
            if (e.done) return e.value;
            var l = r(t),
              c = String(this);
            if (!l.global) return s(l, c);
            var u = l.unicode;
            l.lastIndex = 0;
            for (var h, d = [], p = 0; null !== (h = s(l, c));) {
              var f = String(h[0]);
              d[p] = f, "" === f && (l.lastIndex = i(c, o(l.lastIndex), u)), p++;
            }
            return 0 === p ? null : d;
          }];
        });
      },
      9357: function _(t, e, n) {
        "use strict";

        var r = n(7007),
          o = n(508),
          i = n(875),
          s = n(1467),
          a = n(6793),
          l = n(7787),
          c = Math.max,
          u = Math.min,
          h = Math.floor,
          d = /\$([$&`']|\d\d?|<[^>]*>)/g,
          p = /\$([$&`']|\d\d?)/g;
        n(8082)("replace", 2, function (t, e, n, f) {
          return [function (r, o) {
            var i = t(this),
              s = null == r ? void 0 : r[e];
            return void 0 !== s ? s.call(r, i, o) : n.call(String(i), r, o);
          }, function (t, e) {
            var o = f(n, t, this, e);
            if (o.done) return o.value;
            var h = r(t),
              d = String(this),
              p = "function" == typeof e;
            p || (e = String(e));
            var g = h.global;
            if (g) {
              var y = h.unicode;
              h.lastIndex = 0;
            }
            for (var v = [];;) {
              var b = l(h, d);
              if (null === b) break;
              if (v.push(b), !g) break;
              "" === String(b[0]) && (h.lastIndex = a(d, i(h.lastIndex), y));
            }
            for (var w, x = "", k = 0, S = 0; S < v.length; S++) {
              b = v[S];
              for (var M = String(b[0]), O = c(u(s(b.index), d.length), 0), T = [], C = 1; C < b.length; C++) T.push(void 0 === (w = b[C]) ? w : String(w));
              var E = b.groups;
              if (p) {
                var A = [M].concat(T, O, d);
                void 0 !== E && A.push(E);
                var N = String(e.apply(void 0, A));
              } else N = m(M, d, O, T, E, e);
              O >= k && (x += d.slice(k, O) + N, k = O + M.length);
            }
            return x + d.slice(k);
          }];
          function m(t, e, r, i, s, a) {
            var l = r + t.length,
              c = i.length,
              u = p;
            return void 0 !== s && (s = o(s), u = d), n.call(a, u, function (n, o) {
              var a;
              switch (o.charAt(0)) {
                case "$":
                  return "$";
                case "&":
                  return t;
                case "`":
                  return e.slice(0, r);
                case "'":
                  return e.slice(l);
                case "<":
                  a = s[o.slice(1, -1)];
                  break;
                default:
                  var u = +o;
                  if (0 === u) return n;
                  if (u > c) {
                    var d = h(u / 10);
                    return 0 === d ? n : d <= c ? void 0 === i[d - 1] ? o.charAt(1) : i[d - 1] + o.charAt(1) : n;
                  }
                  a = i[u - 1];
              }
              return void 0 === a ? "" : a;
            });
          }
        });
      },
      6142: function _(t, e, n) {
        "use strict";

        var r = n(7007),
          o = n(7195),
          i = n(7787);
        n(8082)("search", 1, function (t, e, n, s) {
          return [function (n) {
            var r = t(this),
              o = null == n ? void 0 : n[e];
            return void 0 !== o ? o.call(n, r) : new RegExp(n)[e](String(r));
          }, function (t) {
            var e = s(n, t, this);
            if (e.done) return e.value;
            var a = r(t),
              l = String(this),
              c = a.lastIndex;
            o(c, 0) || (a.lastIndex = 0);
            var u = i(a, l);
            return o(a.lastIndex, c) || (a.lastIndex = c), null === u ? -1 : u.index;
          }];
        });
      },
      1876: function _(t, e, n) {
        "use strict";

        var r = n(5364),
          o = n(7007),
          i = n(8364),
          s = n(6793),
          a = n(875),
          l = n(7787),
          c = n(1165),
          u = n(4253),
          h = Math.min,
          d = [].push,
          p = "split",
          f = "length",
          m = "lastIndex",
          g = 4294967295,
          y = !u(function () {
            RegExp(g, "y");
          });
        n(8082)("split", 2, function (t, e, n, u) {
          var v;
          return v = "c" == "abbc"[p](/(b)*/)[1] || 4 != "test"[p](/(?:)/, -1)[f] || 2 != "ab"[p](/(?:ab)*/)[f] || 4 != "."[p](/(.?)(.?)/)[f] || "."[p](/()()/)[f] > 1 || ""[p](/.?/)[f] ? function (t, e) {
            var o = String(this);
            if (void 0 === t && 0 === e) return [];
            if (!r(t)) return n.call(o, t, e);
            for (var i, s, a, l = [], u = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""), h = 0, p = void 0 === e ? g : e >>> 0, y = new RegExp(t.source, u + "g"); (i = c.call(y, o)) && !((s = y[m]) > h && (l.push(o.slice(h, i.index)), i[f] > 1 && i.index < o[f] && d.apply(l, i.slice(1)), a = i[0][f], h = s, l[f] >= p));) y[m] === i.index && y[m]++;
            return h === o[f] ? !a && y.test("") || l.push("") : l.push(o.slice(h)), l[f] > p ? l.slice(0, p) : l;
          } : "0"[p](void 0, 0)[f] ? function (t, e) {
            return void 0 === t && 0 === e ? [] : n.call(this, t, e);
          } : n, [function (n, r) {
            var o = t(this),
              i = null == n ? void 0 : n[e];
            return void 0 !== i ? i.call(n, o, r) : v.call(String(o), n, r);
          }, function (t, e) {
            var r = u(v, t, this, e, v !== n);
            if (r.done) return r.value;
            var c = o(t),
              d = String(this),
              p = i(c, RegExp),
              f = c.unicode,
              m = (c.ignoreCase ? "i" : "") + (c.multiline ? "m" : "") + (c.unicode ? "u" : "") + (y ? "y" : "g"),
              b = new p(y ? c : "^(?:" + c.source + ")", m),
              w = void 0 === e ? g : e >>> 0;
            if (0 === w) return [];
            if (0 === d.length) return null === l(b, d) ? [d] : [];
            for (var x = 0, k = 0, S = []; k < d.length;) {
              b.lastIndex = y ? k : 0;
              var M,
                O = l(b, y ? d : d.slice(k));
              if (null === O || (M = h(a(b.lastIndex + (y ? 0 : k)), d.length)) === x) k = s(d, k, f);else {
                if (S.push(d.slice(x, k)), S.length === w) return S;
                for (var T = 1; T <= O.length - 1; T++) if (S.push(O[T]), S.length === w) return S;
                k = x = M;
              }
            }
            return S.push(d.slice(x)), S;
          }];
        });
      },
      6108: function _(t, e, n) {
        "use strict";

        n(6774);
        var r = n(7007),
          o = n(3218),
          i = n(7057),
          s = "toString",
          a = /./[s],
          l = function l(t) {
            n(7234)(RegExp.prototype, s, t, !0);
          };
        n(4253)(function () {
          return "/a/b" != a.call({
            source: "a",
            flags: "b"
          });
        }) ? l(function () {
          var t = r(this);
          return "/".concat(t.source, "/", "flags" in t ? t.flags : !i && t instanceof RegExp ? o.call(t) : void 0);
        }) : a.name != s && l(function () {
          return a.call(this);
        });
      },
      8184: function _(t, e, n) {
        "use strict";

        var r = n(9824),
          o = n(1616);
        t.exports = n(5795)("Set", function (t) {
          return function () {
            return t(this, arguments.length > 0 ? arguments[0] : void 0);
          };
        }, {
          add: function add(t) {
            return r.def(o(this, "Set"), t = 0 === t ? 0 : t, t);
          }
        }, r);
      },
      856: function _(t, e, n) {
        "use strict";

        n(9395)("anchor", function (t) {
          return function (e) {
            return t(this, "a", "name", e);
          };
        });
      },
      703: function _(t, e, n) {
        "use strict";

        n(9395)("big", function (t) {
          return function () {
            return t(this, "big", "", "");
          };
        });
      },
      1539: function _(t, e, n) {
        "use strict";

        n(9395)("blink", function (t) {
          return function () {
            return t(this, "blink", "", "");
          };
        });
      },
      5292: function _(t, e, n) {
        "use strict";

        n(9395)("bold", function (t) {
          return function () {
            return t(this, "b", "", "");
          };
        });
      },
      9539: function _(t, e, n) {
        "use strict";

        var r = n(2985),
          o = n(4496)(!1);
        r(r.P, "String", {
          codePointAt: function codePointAt(t) {
            return o(this, t);
          }
        });
      },
      6620: function _(t, e, n) {
        "use strict";

        var r = n(2985),
          o = n(875),
          i = n(2094),
          s = "endsWith",
          a = ""[s];
        r(r.P + r.F * n(8852)(s), "String", {
          endsWith: function endsWith(t) {
            var e = i(this, t, s),
              n = arguments.length > 1 ? arguments[1] : void 0,
              r = o(e.length),
              l = void 0 === n ? r : Math.min(o(n), r),
              c = String(t);
            return a ? a.call(e, c, l) : e.slice(l - c.length, l) === c;
          }
        });
      },
      6629: function _(t, e, n) {
        "use strict";

        n(9395)("fixed", function (t) {
          return function () {
            return t(this, "tt", "", "");
          };
        });
      },
      3694: function _(t, e, n) {
        "use strict";

        n(9395)("fontcolor", function (t) {
          return function (e) {
            return t(this, "font", "color", e);
          };
        });
      },
      7648: function _(t, e, n) {
        "use strict";

        n(9395)("fontsize", function (t) {
          return function (e) {
            return t(this, "font", "size", e);
          };
        });
      },
      191: function _(t, e, n) {
        var r = n(2985),
          o = n(2337),
          i = String.fromCharCode,
          s = String.fromCodePoint;
        r(r.S + r.F * (!!s && 1 != s.length), "String", {
          fromCodePoint: function fromCodePoint(t) {
            for (var e, n = [], r = arguments.length, s = 0; r > s;) {
              if (e = +arguments[s++], o(e, 1114111) !== e) throw RangeError(e + " is not a valid code point");
              n.push(e < 65536 ? i(e) : i(55296 + ((e -= 65536) >> 10), e % 1024 + 56320));
            }
            return n.join("");
          }
        });
      },
      2850: function _(t, e, n) {
        "use strict";

        var r = n(2985),
          o = n(2094),
          i = "includes";
        r(r.P + r.F * n(8852)(i), "String", {
          includes: function includes(t) {
            return !!~o(this, t, i).indexOf(t, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
      },
      7795: function _(t, e, n) {
        "use strict";

        n(9395)("italics", function (t) {
          return function () {
            return t(this, "i", "", "");
          };
        });
      },
      9115: function _(t, e, n) {
        "use strict";

        var r = n(4496)(!0);
        n(2923)(String, "String", function (t) {
          this._t = String(t), this._i = 0;
        }, function () {
          var t,
            e = this._t,
            n = this._i;
          return n >= e.length ? {
            value: void 0,
            done: !0
          } : (t = r(e, n), this._i += t.length, {
            value: t,
            done: !1
          });
        });
      },
      4531: function _(t, e, n) {
        "use strict";

        n(9395)("link", function (t) {
          return function (e) {
            return t(this, "a", "href", e);
          };
        });
      },
      8306: function _(t, e, n) {
        var r = n(2985),
          o = n(2110),
          i = n(875);
        r(r.S, "String", {
          raw: function raw(t) {
            for (var e = o(t.raw), n = i(e.length), r = arguments.length, s = [], a = 0; n > a;) s.push(String(e[a++])), a < r && s.push(String(arguments[a]));
            return s.join("");
          }
        });
      },
      823: function _(t, e, n) {
        var r = n(2985);
        r(r.P, "String", {
          repeat: n(8595)
        });
      },
      3605: function _(t, e, n) {
        "use strict";

        n(9395)("small", function (t) {
          return function () {
            return t(this, "small", "", "");
          };
        });
      },
      7732: function _(t, e, n) {
        "use strict";

        var r = n(2985),
          o = n(875),
          i = n(2094),
          s = "startsWith",
          a = ""[s];
        r(r.P + r.F * n(8852)(s), "String", {
          startsWith: function startsWith(t) {
            var e = i(this, t, s),
              n = o(Math.min(arguments.length > 1 ? arguments[1] : void 0, e.length)),
              r = String(t);
            return a ? a.call(e, r, n) : e.slice(n, n + r.length) === r;
          }
        });
      },
      6780: function _(t, e, n) {
        "use strict";

        n(9395)("strike", function (t) {
          return function () {
            return t(this, "strike", "", "");
          };
        });
      },
      9937: function _(t, e, n) {
        "use strict";

        n(9395)("sub", function (t) {
          return function () {
            return t(this, "sub", "", "");
          };
        });
      },
      511: function _(t, e, n) {
        "use strict";

        n(9395)("sup", function (t) {
          return function () {
            return t(this, "sup", "", "");
          };
        });
      },
      4564: function _(t, e, n) {
        "use strict";

        n(9599)("trim", function (t) {
          return function () {
            return t(this, 3);
          };
        });
      },
      5767: function _(t, e, n) {
        "use strict";

        var r = n(3816),
          o = n(9181),
          i = n(7057),
          s = n(2985),
          a = n(7234),
          l = n(4728).KEY,
          c = n(4253),
          u = n(3825),
          h = n(2943),
          d = n(3953),
          p = n(6314),
          f = n(8787),
          m = n(6074),
          g = n(5541),
          y = n(4302),
          v = n(7007),
          b = n(5286),
          w = n(508),
          x = n(2110),
          k = n(1689),
          S = n(681),
          M = n(2503),
          O = n(9327),
          T = n(8693),
          C = n(4548),
          E = n(9275),
          A = n(7184),
          N = T.f,
          D = E.f,
          R = O.f,
          _I = r.Symbol,
          P = r.JSON,
          L = P && P.stringify,
          F = "prototype",
          B = p("_hidden"),
          z = p("toPrimitive"),
          j = {}.propertyIsEnumerable,
          $ = u("symbol-registry"),
          _ = u("symbols"),
          H = u("op-symbols"),
          V = Object[F],
          W = "function" == typeof _I && !!C.f,
          K = r.QObject,
          q = !K || !K[F] || !K[F].findChild,
          J = i && c(function () {
            return 7 != M(D({}, "a", {
              get: function get() {
                return D(this, "a", {
                  value: 7
                }).a;
              }
            })).a;
          }) ? function (t, e, n) {
            var r = N(V, e);
            r && delete V[e], D(t, e, n), r && t !== V && D(V, e, r);
          } : D,
          U = function U(t) {
            var e = _[t] = M(_I[F]);
            return e._k = t, e;
          },
          G = W && "symbol" == _typeof(_I.iterator) ? function (t) {
            return "symbol" == _typeof(t);
          } : function (t) {
            return t instanceof _I;
          },
          Y = function Y(t, e, n) {
            return t === V && Y(H, e, n), v(t), e = k(e, !0), v(n), o(_, e) ? (n.enumerable ? (o(t, B) && t[B][e] && (t[B][e] = !1), n = M(n, {
              enumerable: S(0, !1)
            })) : (o(t, B) || D(t, B, S(1, {})), t[B][e] = !0), J(t, e, n)) : D(t, e, n);
          },
          X = function X(t, e) {
            v(t);
            for (var n, r = g(e = x(e)), o = 0, i = r.length; i > o;) Y(t, n = r[o++], e[n]);
            return t;
          },
          Q = function Q(t) {
            var e = j.call(this, t = k(t, !0));
            return !(this === V && o(_, t) && !o(H, t)) && (!(e || !o(this, t) || !o(_, t) || o(this, B) && this[B][t]) || e);
          },
          Z = function Z(t, e) {
            if (t = x(t), e = k(e, !0), t !== V || !o(_, e) || o(H, e)) {
              var n = N(t, e);
              return !n || !o(_, e) || o(t, B) && t[B][e] || (n.enumerable = !0), n;
            }
          },
          tt = function tt(t) {
            for (var e, n = R(x(t)), r = [], i = 0; n.length > i;) o(_, e = n[i++]) || e == B || e == l || r.push(e);
            return r;
          },
          et = function et(t) {
            for (var e, n = t === V, r = R(n ? H : x(t)), i = [], s = 0; r.length > s;) !o(_, e = r[s++]) || n && !o(V, e) || i.push(_[e]);
            return i;
          };
        W || (a((_I = function I() {
          if (this instanceof _I) throw TypeError("Symbol is not a constructor!");
          var t = d(arguments.length > 0 ? arguments[0] : void 0),
            e = function e(n) {
              this === V && e.call(H, n), o(this, B) && o(this[B], t) && (this[B][t] = !1), J(this, t, S(1, n));
            };
          return i && q && J(V, t, {
            configurable: !0,
            set: e
          }), U(t);
        })[F], "toString", function () {
          return this._k;
        }), T.f = Z, E.f = Y, n(616).f = O.f = tt, n(4682).f = Q, C.f = et, i && !n(4461) && a(V, "propertyIsEnumerable", Q, !0), f.f = function (t) {
          return U(p(t));
        }), s(s.G + s.W + s.F * !W, {
          Symbol: _I
        });
        for (var nt = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), rt = 0; nt.length > rt;) p(nt[rt++]);
        for (var ot = A(p.store), it = 0; ot.length > it;) m(ot[it++]);
        s(s.S + s.F * !W, "Symbol", {
          for: function _for(t) {
            return o($, t += "") ? $[t] : $[t] = _I(t);
          },
          keyFor: function keyFor(t) {
            if (!G(t)) throw TypeError(t + " is not a symbol!");
            for (var e in $) if ($[e] === t) return e;
          },
          useSetter: function useSetter() {
            q = !0;
          },
          useSimple: function useSimple() {
            q = !1;
          }
        }), s(s.S + s.F * !W, "Object", {
          create: function create(t, e) {
            return void 0 === e ? M(t) : X(M(t), e);
          },
          defineProperty: Y,
          defineProperties: X,
          getOwnPropertyDescriptor: Z,
          getOwnPropertyNames: tt,
          getOwnPropertySymbols: et
        });
        var st = c(function () {
          C.f(1);
        });
        s(s.S + s.F * st, "Object", {
          getOwnPropertySymbols: function getOwnPropertySymbols(t) {
            return C.f(w(t));
          }
        }), P && s(s.S + s.F * (!W || c(function () {
          var t = _I();
          return "[null]" != L([t]) || "{}" != L({
            a: t
          }) || "{}" != L(Object(t));
        })), "JSON", {
          stringify: function stringify(t) {
            for (var e, n, r = [t], o = 1; arguments.length > o;) r.push(arguments[o++]);
            if (n = e = r[1], (b(e) || void 0 !== t) && !G(t)) return y(e) || (e = function e(t, _e3) {
              if ("function" == typeof n && (_e3 = n.call(this, t, _e3)), !G(_e3)) return _e3;
            }), r[1] = e, L.apply(P, r);
          }
        }), _I[F][z] || n(7728)(_I[F], z, _I[F].valueOf), h(_I, "Symbol"), h(Math, "Math", !0), h(r.JSON, "JSON", !0);
      },
      142: function _(t, e, n) {
        "use strict";

        var r = n(2985),
          o = n(9383),
          i = n(1125),
          s = n(7007),
          a = n(2337),
          l = n(875),
          c = n(5286),
          u = n(3816).ArrayBuffer,
          h = n(8364),
          d = i.ArrayBuffer,
          p = i.DataView,
          f = o.ABV && u.isView,
          m = d.prototype.slice,
          g = o.VIEW,
          y = "ArrayBuffer";
        r(r.G + r.W + r.F * (u !== d), {
          ArrayBuffer: d
        }), r(r.S + r.F * !o.CONSTR, y, {
          isView: function isView(t) {
            return f && f(t) || c(t) && g in t;
          }
        }), r(r.P + r.U + r.F * n(4253)(function () {
          return !new d(2).slice(1, void 0).byteLength;
        }), y, {
          slice: function slice(t, e) {
            if (void 0 !== m && void 0 === e) return m.call(s(this), t);
            for (var n = s(this).byteLength, r = a(t, n), o = a(void 0 === e ? n : e, n), i = new (h(this, d))(l(o - r)), c = new p(this), u = new p(i), f = 0; r < o;) u.setUint8(f++, c.getUint8(r++));
            return i;
          }
        }), n(2974)(y);
      },
      1786: function _(t, e, n) {
        var r = n(2985);
        r(r.G + r.W + r.F * !n(9383).ABV, {
          DataView: n(1125).DataView
        });
      },
      162: function _(t, e, n) {
        n(8440)("Float32", 4, function (t) {
          return function (e, n, r) {
            return t(this, e, n, r);
          };
        });
      },
      3834: function _(t, e, n) {
        n(8440)("Float64", 8, function (t) {
          return function (e, n, r) {
            return t(this, e, n, r);
          };
        });
      },
      4821: function _(t, e, n) {
        n(8440)("Int16", 2, function (t) {
          return function (e, n, r) {
            return t(this, e, n, r);
          };
        });
      },
      1303: function _(t, e, n) {
        n(8440)("Int32", 4, function (t) {
          return function (e, n, r) {
            return t(this, e, n, r);
          };
        });
      },
      5368: function _(t, e, n) {
        n(8440)("Int8", 1, function (t) {
          return function (e, n, r) {
            return t(this, e, n, r);
          };
        });
      },
      9103: function _(t, e, n) {
        n(8440)("Uint16", 2, function (t) {
          return function (e, n, r) {
            return t(this, e, n, r);
          };
        });
      },
      3318: function _(t, e, n) {
        n(8440)("Uint32", 4, function (t) {
          return function (e, n, r) {
            return t(this, e, n, r);
          };
        });
      },
      6964: function _(t, e, n) {
        n(8440)("Uint8", 1, function (t) {
          return function (e, n, r) {
            return t(this, e, n, r);
          };
        });
      },
      2152: function _(t, e, n) {
        n(8440)("Uint8", 1, function (t) {
          return function (e, n, r) {
            return t(this, e, n, r);
          };
        }, !0);
      },
      147: function _(t, e, n) {
        "use strict";

        var r,
          o = n(3816),
          i = n(50)(0),
          s = n(7234),
          a = n(4728),
          l = n(5345),
          c = n(3657),
          u = n(5286),
          h = n(1616),
          d = n(1616),
          p = !o.ActiveXObject && "ActiveXObject" in o,
          f = "WeakMap",
          m = a.getWeak,
          g = Object.isExtensible,
          y = c.ufstore,
          v = function v(t) {
            return function () {
              return t(this, arguments.length > 0 ? arguments[0] : void 0);
            };
          },
          b = {
            get: function get(t) {
              if (u(t)) {
                var e = m(t);
                return !0 === e ? y(h(this, f)).get(t) : e ? e[this._i] : void 0;
              }
            },
            set: function set(t, e) {
              return c.def(h(this, f), t, e);
            }
          },
          w = t.exports = n(5795)(f, v, b, c, !0, !0);
        d && p && (l((r = c.getConstructor(v, f)).prototype, b), a.NEED = !0, i(["delete", "has", "get", "set"], function (t) {
          var e = w.prototype,
            n = e[t];
          s(e, t, function (e, o) {
            if (u(e) && !g(e)) {
              this._f || (this._f = new r());
              var i = this._f[t](e, o);
              return "set" == t ? this : i;
            }
            return n.call(this, e, o);
          });
        }));
      },
      9192: function _(t, e, n) {
        "use strict";

        var r = n(3657),
          o = n(1616),
          i = "WeakSet";
        n(5795)(i, function (t) {
          return function () {
            return t(this, arguments.length > 0 ? arguments[0] : void 0);
          };
        }, {
          add: function add(t) {
            return r.def(o(this, i), t, !0);
          }
        }, r, !1, !0);
      },
      1268: function _(t, e, n) {
        "use strict";

        var r = n(2985),
          o = n(3325),
          i = n(508),
          s = n(875),
          a = n(4963),
          l = n(6886);
        r(r.P, "Array", {
          flatMap: function flatMap(t) {
            var e,
              n,
              r = i(this);
            return a(t), e = s(r.length), n = l(r, 0), o(n, r, r, e, 0, 1, t, arguments[1]), n;
          }
        }), n(7722)("flatMap");
      },
      2773: function _(t, e, n) {
        "use strict";

        var r = n(2985),
          o = n(9315)(!0);
        r(r.P, "Array", {
          includes: function includes(t) {
            return o(this, t, arguments.length > 1 ? arguments[1] : void 0);
          }
        }), n(7722)("includes");
      },
      3276: function _(t, e, n) {
        var r = n(2985),
          o = n(1131)(!0);
        r(r.S, "Object", {
          entries: function entries(t) {
            return o(t);
          }
        });
      },
      8351: function _(t, e, n) {
        var r = n(2985),
          o = n(7643),
          i = n(2110),
          s = n(8693),
          a = n(2811);
        r(r.S, "Object", {
          getOwnPropertyDescriptors: function getOwnPropertyDescriptors(t) {
            for (var e, n, r = i(t), l = s.f, c = o(r), u = {}, h = 0; c.length > h;) void 0 !== (n = l(r, e = c[h++])) && a(u, e, n);
            return u;
          }
        });
      },
      6409: function _(t, e, n) {
        var r = n(2985),
          o = n(1131)(!1);
        r(r.S, "Object", {
          values: function values(t) {
            return o(t);
          }
        });
      },
      9865: function _(t, e, n) {
        "use strict";

        var r = n(2985),
          o = n(5645),
          i = n(3816),
          s = n(8364),
          a = n(94);
        r(r.P + r.R, "Promise", {
          finally: function _finally(t) {
            var e = s(this, o.Promise || i.Promise),
              n = "function" == typeof t;
            return this.then(n ? function (n) {
              return a(e, t()).then(function () {
                return n;
              });
            } : t, n ? function (n) {
              return a(e, t()).then(function () {
                throw n;
              });
            } : t);
          }
        });
      },
      2770: function _(t, e, n) {
        "use strict";

        var r = n(2985),
          o = n(5442),
          i = n(575),
          s = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);
        r(r.P + r.F * s, "String", {
          padEnd: function padEnd(t) {
            return o(this, t, arguments.length > 1 ? arguments[1] : void 0, !1);
          }
        });
      },
      1784: function _(t, e, n) {
        "use strict";

        var r = n(2985),
          o = n(5442),
          i = n(575),
          s = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);
        r(r.P + r.F * s, "String", {
          padStart: function padStart(t) {
            return o(this, t, arguments.length > 1 ? arguments[1] : void 0, !0);
          }
        });
      },
      5869: function _(t, e, n) {
        "use strict";

        n(9599)("trimLeft", function (t) {
          return function () {
            return t(this, 1);
          };
        }, "trimStart");
      },
      4325: function _(t, e, n) {
        "use strict";

        n(9599)("trimRight", function (t) {
          return function () {
            return t(this, 2);
          };
        }, "trimEnd");
      },
      9665: function _(t, e, n) {
        n(6074)("asyncIterator");
      },
      1181: function _(t, e, n) {
        for (var r = n(6997), o = n(7184), i = n(7234), s = n(3816), a = n(7728), l = n(2803), c = n(6314), u = c("iterator"), h = c("toStringTag"), d = l.Array, p = {
            CSSRuleList: !0,
            CSSStyleDeclaration: !1,
            CSSValueList: !1,
            ClientRectList: !1,
            DOMRectList: !1,
            DOMStringList: !1,
            DOMTokenList: !0,
            DataTransferItemList: !1,
            FileList: !1,
            HTMLAllCollection: !1,
            HTMLCollection: !1,
            HTMLFormElement: !1,
            HTMLSelectElement: !1,
            MediaList: !0,
            MimeTypeArray: !1,
            NamedNodeMap: !1,
            NodeList: !0,
            PaintRequestList: !1,
            Plugin: !1,
            PluginArray: !1,
            SVGLengthList: !1,
            SVGNumberList: !1,
            SVGPathSegList: !1,
            SVGPointList: !1,
            SVGStringList: !1,
            SVGTransformList: !1,
            SourceBufferList: !1,
            StyleSheetList: !0,
            TextTrackCueList: !1,
            TextTrackList: !1,
            TouchList: !1
          }, f = o(p), m = 0; m < f.length; m++) {
          var g,
            y = f[m],
            v = p[y],
            b = s[y],
            w = b && b.prototype;
          if (w && (w[u] || a(w, u, d), w[h] || a(w, h, y), l[y] = d, v)) for (g in r) w[g] || i(w, g, r[g], !0);
        }
      },
      4633: function _(t, e, n) {
        var r = n(2985),
          o = n(4193);
        r(r.G + r.B, {
          setImmediate: o.set,
          clearImmediate: o.clear
        });
      },
      2564: function _(t, e, n) {
        var r = n(3816),
          o = n(2985),
          i = n(575),
          s = [].slice,
          a = /MSIE .\./.test(i),
          l = function l(t) {
            return function (e, n) {
              var r = arguments.length > 2,
                o = !!r && s.call(arguments, 2);
              return t(r ? function () {
                ("function" == typeof e ? e : Function(e)).apply(this, o);
              } : e, n);
            };
          };
        o(o.G + o.B + o.F * a, {
          setTimeout: l(r.setTimeout),
          setInterval: l(r.setInterval)
        });
      },
      6337: function _(t, e, n) {
        n(2564), n(4633), n(1181), t.exports = n(5645);
      },
      5666: function _(t) {
        var e = function (t) {
          "use strict";

          var e,
            n = Object.prototype,
            r = n.hasOwnProperty,
            o = Object.defineProperty || function (t, e, n) {
              t[e] = n.value;
            },
            i = "function" == typeof Symbol ? Symbol : {},
            s = i.iterator || "@@iterator",
            a = i.asyncIterator || "@@asyncIterator",
            l = i.toStringTag || "@@toStringTag";
          function c(t, e, n) {
            return Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }), t[e];
          }
          try {
            c({}, "");
          } catch (t) {
            c = function c(t, e, n) {
              return t[e] = n;
            };
          }
          function u(t, e, n, r) {
            var i = e && e.prototype instanceof y ? e : y,
              s = Object.create(i.prototype),
              a = new N(r || []);
            return o(s, "_invoke", {
              value: T(t, n, a)
            }), s;
          }
          function h(t, e, n) {
            try {
              return {
                type: "normal",
                arg: t.call(e, n)
              };
            } catch (t) {
              return {
                type: "throw",
                arg: t
              };
            }
          }
          t.wrap = u;
          var d = "suspendedStart",
            p = "suspendedYield",
            f = "executing",
            m = "completed",
            g = {};
          function y() {}
          function v() {}
          function b() {}
          var w = {};
          c(w, s, function () {
            return this;
          });
          var x = Object.getPrototypeOf,
            k = x && x(x(D([])));
          k && k !== n && r.call(k, s) && (w = k);
          var S = b.prototype = y.prototype = Object.create(w);
          function M(t) {
            ["next", "throw", "return"].forEach(function (e) {
              c(t, e, function (t) {
                return this._invoke(e, t);
              });
            });
          }
          function O(t, e) {
            function n(o, i, s, a) {
              var l = h(t[o], t, i);
              if ("throw" !== l.type) {
                var c = l.arg,
                  u = c.value;
                return u && "object" == _typeof(u) && r.call(u, "__await") ? e.resolve(u.__await).then(function (t) {
                  n("next", t, s, a);
                }, function (t) {
                  n("throw", t, s, a);
                }) : e.resolve(u).then(function (t) {
                  c.value = t, s(c);
                }, function (t) {
                  return n("throw", t, s, a);
                });
              }
              a(l.arg);
            }
            var i;
            o(this, "_invoke", {
              value: function value(t, r) {
                function o() {
                  return new e(function (e, o) {
                    n(t, r, e, o);
                  });
                }
                return i = i ? i.then(o, o) : o();
              }
            });
          }
          function T(t, e, n) {
            var r = d;
            return function (o, i) {
              if (r === f) throw new Error("Generator is already running");
              if (r === m) {
                if ("throw" === o) throw i;
                return R();
              }
              for (n.method = o, n.arg = i;;) {
                var s = n.delegate;
                if (s) {
                  var a = C(s, n);
                  if (a) {
                    if (a === g) continue;
                    return a;
                  }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
                  if (r === d) throw r = m, n.arg;
                  n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                r = f;
                var l = h(t, e, n);
                if ("normal" === l.type) {
                  if (r = n.done ? m : p, l.arg === g) continue;
                  return {
                    value: l.arg,
                    done: n.done
                  };
                }
                "throw" === l.type && (r = m, n.method = "throw", n.arg = l.arg);
              }
            };
          }
          function C(t, n) {
            var r = n.method,
              o = t.iterator[r];
            if (o === e) return n.delegate = null, "throw" === r && t.iterator.return && (n.method = "return", n.arg = e, C(t, n), "throw" === n.method) || "return" !== r && (n.method = "throw", n.arg = new TypeError("The iterator does not provide a '" + r + "' method")), g;
            var i = h(o, t.iterator, n.arg);
            if ("throw" === i.type) return n.method = "throw", n.arg = i.arg, n.delegate = null, g;
            var s = i.arg;
            return s ? s.done ? (n[t.resultName] = s.value, n.next = t.nextLoc, "return" !== n.method && (n.method = "next", n.arg = e), n.delegate = null, g) : s : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, g);
          }
          function E(t) {
            var e = {
              tryLoc: t[0]
            };
            1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
          }
          function A(t) {
            var e = t.completion || {};
            e.type = "normal", delete e.arg, t.completion = e;
          }
          function N(t) {
            this.tryEntries = [{
              tryLoc: "root"
            }], t.forEach(E, this), this.reset(!0);
          }
          function D(t) {
            if (t) {
              var n = t[s];
              if (n) return n.call(t);
              if ("function" == typeof t.next) return t;
              if (!isNaN(t.length)) {
                var o = -1,
                  i = function n() {
                    for (; ++o < t.length;) if (r.call(t, o)) return n.value = t[o], n.done = !1, n;
                    return n.value = e, n.done = !0, n;
                  };
                return i.next = i;
              }
            }
            return {
              next: R
            };
          }
          function R() {
            return {
              value: e,
              done: !0
            };
          }
          return v.prototype = b, o(S, "constructor", {
            value: b,
            configurable: !0
          }), o(b, "constructor", {
            value: v,
            configurable: !0
          }), v.displayName = c(b, l, "GeneratorFunction"), t.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return !!e && (e === v || "GeneratorFunction" === (e.displayName || e.name));
          }, t.mark = function (t) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(t, b) : (t.__proto__ = b, c(t, l, "GeneratorFunction")), t.prototype = Object.create(S), t;
          }, t.awrap = function (t) {
            return {
              __await: t
            };
          }, M(O.prototype), c(O.prototype, a, function () {
            return this;
          }), t.AsyncIterator = O, t.async = function (e, n, r, o, i) {
            void 0 === i && (i = Promise);
            var s = new O(u(e, n, r, o), i);
            return t.isGeneratorFunction(n) ? s : s.next().then(function (t) {
              return t.done ? t.value : s.next();
            });
          }, M(S), c(S, l, "Generator"), c(S, s, function () {
            return this;
          }), c(S, "toString", function () {
            return "[object Generator]";
          }), t.keys = function (t) {
            var e = Object(t),
              n = [];
            for (var r in e) n.push(r);
            return n.reverse(), function t() {
              for (; n.length;) {
                var r = n.pop();
                if (r in e) return t.value = r, t.done = !1, t;
              }
              return t.done = !0, t;
            };
          }, t.values = D, N.prototype = {
            constructor: N,
            reset: function reset(t) {
              if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(A), !t) for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e);
            },
            stop: function stop() {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function dispatchException(t) {
              if (this.done) throw t;
              var n = this;
              function o(r, o) {
                return a.type = "throw", a.arg = t, n.next = r, o && (n.method = "next", n.arg = e), !!o;
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var s = this.tryEntries[i],
                  a = s.completion;
                if ("root" === s.tryLoc) return o("end");
                if (s.tryLoc <= this.prev) {
                  var l = r.call(s, "catchLoc"),
                    c = r.call(s, "finallyLoc");
                  if (l && c) {
                    if (this.prev < s.catchLoc) return o(s.catchLoc, !0);
                    if (this.prev < s.finallyLoc) return o(s.finallyLoc);
                  } else if (l) {
                    if (this.prev < s.catchLoc) return o(s.catchLoc, !0);
                  } else {
                    if (!c) throw new Error("try statement without catch or finally");
                    if (this.prev < s.finallyLoc) return o(s.finallyLoc);
                  }
                }
              }
            },
            abrupt: function abrupt(t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                  var i = o;
                  break;
                }
              }
              i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
              var s = i ? i.completion : {};
              return s.type = t, s.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, g) : this.complete(s);
            },
            complete: function complete(t, e) {
              if ("throw" === t.type) throw t.arg;
              return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), g;
            },
            finish: function finish(t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), A(n), g;
              }
            },
            catch: function _catch(t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var o = r.arg;
                    A(n);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function delegateYield(t, n, r) {
              return this.delegate = {
                iterator: D(t),
                resultName: n,
                nextLoc: r
              }, "next" === this.method && (this.arg = e), g;
            }
          }, t;
        }(t.exports);
        try {
          regeneratorRuntime = e;
        } catch (t) {
          "object" == (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) ? globalThis.regeneratorRuntime = e : Function("r", "regeneratorRuntime = r")(e);
        }
      }
    },
    e = {};
  function n(r) {
    var o = e[r];
    if (void 0 !== o) return o.exports;
    var i = e[r] = {
      exports: {}
    };
    return t[r](i, i.exports, n), i.exports;
  }
  (function () {
    "use strict";

    function t(t) {
      this.content = t;
    }
    n(6981), t.prototype = {
      constructor: t,
      find: function find(t) {
        for (var e = 0; e < this.content.length; e += 2) if (this.content[e] === t) return e;
        return -1;
      },
      get: function get(t) {
        var e = this.find(t);
        return -1 == e ? void 0 : this.content[e + 1];
      },
      update: function update(e, n, r) {
        var o = r && r != e ? this.remove(r) : this,
          i = o.find(e),
          s = o.content.slice();
        return -1 == i ? s.push(r || e, n) : (s[i + 1] = n, r && (s[i] = r)), new t(s);
      },
      remove: function remove(e) {
        var n = this.find(e);
        if (-1 == n) return this;
        var r = this.content.slice();
        return r.splice(n, 2), new t(r);
      },
      addToStart: function addToStart(e, n) {
        return new t([e, n].concat(this.remove(e).content));
      },
      addToEnd: function addToEnd(e, n) {
        var r = this.remove(e).content.slice();
        return r.push(e, n), new t(r);
      },
      addBefore: function addBefore(e, n, r) {
        var o = this.remove(n),
          i = o.content.slice(),
          s = o.find(e);
        return i.splice(-1 == s ? i.length : s, 0, n, r), new t(i);
      },
      forEach: function forEach(t) {
        for (var e = 0; e < this.content.length; e += 2) t(this.content[e], this.content[e + 1]);
      },
      prepend: function prepend(e) {
        return (e = t.from(e)).size ? new t(e.content.concat(this.subtract(e).content)) : this;
      },
      append: function append(e) {
        return (e = t.from(e)).size ? new t(this.subtract(e).content.concat(e.content)) : this;
      },
      subtract: function subtract(e) {
        var n = this;
        e = t.from(e);
        for (var r = 0; r < e.content.length; r += 2) n = n.remove(e.content[r]);
        return n;
      },
      toObject: function toObject() {
        var t = {};
        return this.forEach(function (e, n) {
          t[e] = n;
        }), t;
      },
      get size() {
        return this.content.length >> 1;
      }
    }, t.from = function (e) {
      if (e instanceof t) return e;
      var n = [];
      if (e) for (var r in e) n.push(r, e[r]);
      return new t(n);
    };
    var e = t;
    function r(t, e, n) {
      for (var _o2 = 0;; _o2++) {
        if (_o2 == t.childCount || _o2 == e.childCount) return t.childCount == e.childCount ? null : n;
        var _i2 = t.child(_o2),
          _s2 = e.child(_o2);
        if (_i2 != _s2) {
          if (!_i2.sameMarkup(_s2)) return n;
          if (_i2.isText && _i2.text != _s2.text) {
            for (var _t2 = 0; _i2.text[_t2] == _s2.text[_t2]; _t2++) n++;
            return n;
          }
          if (_i2.content.size || _s2.content.size) {
            var _t3 = r(_i2.content, _s2.content, n + 1);
            if (null != _t3) return _t3;
          }
          n += _i2.nodeSize;
        } else n += _i2.nodeSize;
      }
    }
    function o(t, e, n, r) {
      for (var _i3 = t.childCount, _s3 = e.childCount;;) {
        if (0 == _i3 || 0 == _s3) return _i3 == _s3 ? null : {
          a: n,
          b: r
        };
        var _a2 = t.child(--_i3),
          _l2 = e.child(--_s3),
          _c4 = _a2.nodeSize;
        if (_a2 != _l2) {
          if (!_a2.sameMarkup(_l2)) return {
            a: n,
            b: r
          };
          if (_a2.isText && _a2.text != _l2.text) {
            var _t4 = 0,
              _e4 = Math.min(_a2.text.length, _l2.text.length);
            for (; _t4 < _e4 && _a2.text[_a2.text.length - _t4 - 1] == _l2.text[_l2.text.length - _t4 - 1];) _t4++, n--, r--;
            return {
              a: n,
              b: r
            };
          }
          if (_a2.content.size || _l2.content.size) {
            var _t5 = o(_a2.content, _l2.content, n - 1, r - 1);
            if (_t5) return _t5;
          }
          n -= _c4, r -= _c4;
        } else n -= _c4, r -= _c4;
      }
    }
    var i = /*#__PURE__*/function () {
      function i(t, e) {
        _classCallCheck(this, i);
        if (this.content = t, this.size = e || 0, null == e) for (var _e5 = 0; _e5 < t.length; _e5++) this.size += t[_e5].nodeSize;
      }
      _createClass(i, [{
        key: "nodesBetween",
        value: function nodesBetween(t, e, n) {
          var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
          var o = arguments.length > 4 ? arguments[4] : undefined;
          for (var _i7 = 0, _s4 = 0; _s4 < e; _i7++) {
            var _a3 = this.content[_i7],
              _l3 = _s4 + _a3.nodeSize;
            if (_l3 > t && !1 !== n(_a3, r + _s4, o || null, _i7) && _a3.content.size) {
              var _o3 = _s4 + 1;
              _a3.nodesBetween(Math.max(0, t - _o3), Math.min(_a3.content.size, e - _o3), n, r + _o3);
            }
            _s4 = _l3;
          }
        }
      }, {
        key: "descendants",
        value: function descendants(t) {
          this.nodesBetween(0, this.size, t);
        }
      }, {
        key: "textBetween",
        value: function textBetween(t, e, n, r) {
          var o = "",
            _i5 = !0;
          return this.nodesBetween(t, e, function (s, a) {
            var l = s.isText ? s.text.slice(Math.max(t, a) - a, e - a) : s.isLeaf ? r ? "function" == typeof r ? r(s) : r : s.type.spec.leafText ? s.type.spec.leafText(s) : "" : "";
            s.isBlock && (s.isLeaf && l || s.isTextblock) && n && (_i5 ? _i5 = !1 : o += n), o += l;
          }, 0), o;
        }
      }, {
        key: "append",
        value: function append(t) {
          if (!t.size) return this;
          if (!this.size) return t;
          var e = this.lastChild,
            n = t.firstChild,
            r = this.content.slice(),
            o = 0;
          for (e.isText && e.sameMarkup(n) && (r[r.length - 1] = e.withText(e.text + n.text), o = 1); o < t.content.length; o++) r.push(t.content[o]);
          return new i(r, this.size + t.size);
        }
      }, {
        key: "cut",
        value: function cut(t) {
          var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.size;
          if (0 == t && e == this.size) return this;
          var n = [],
            r = 0;
          if (e > t) for (var _o4 = 0, _i8 = 0; _i8 < e; _o4++) {
            var _s5 = this.content[_o4],
              _a4 = _i8 + _s5.nodeSize;
            _a4 > t && ((_i8 < t || _a4 > e) && (_s5 = _s5.isText ? _s5.cut(Math.max(0, t - _i8), Math.min(_s5.text.length, e - _i8)) : _s5.cut(Math.max(0, t - _i8 - 1), Math.min(_s5.content.size, e - _i8 - 1))), n.push(_s5), r += _s5.nodeSize), _i8 = _a4;
          }
          return new i(n, r);
        }
      }, {
        key: "cutByIndex",
        value: function cutByIndex(t, e) {
          return t == e ? i.empty : 0 == t && e == this.content.length ? this : new i(this.content.slice(t, e));
        }
      }, {
        key: "replaceChild",
        value: function replaceChild(t, e) {
          var n = this.content[t];
          if (n == e) return this;
          var r = this.content.slice(),
            o = this.size + e.nodeSize - n.nodeSize;
          return r[t] = e, new i(r, o);
        }
      }, {
        key: "addToStart",
        value: function addToStart(t) {
          return new i([t].concat(this.content), this.size + t.nodeSize);
        }
      }, {
        key: "addToEnd",
        value: function addToEnd(t) {
          return new i(this.content.concat(t), this.size + t.nodeSize);
        }
      }, {
        key: "eq",
        value: function eq(t) {
          if (this.content.length != t.content.length) return !1;
          for (var _e6 = 0; _e6 < this.content.length; _e6++) if (!this.content[_e6].eq(t.content[_e6])) return !1;
          return !0;
        }
      }, {
        key: "firstChild",
        get: function get() {
          return this.content.length ? this.content[0] : null;
        }
      }, {
        key: "lastChild",
        get: function get() {
          return this.content.length ? this.content[this.content.length - 1] : null;
        }
      }, {
        key: "childCount",
        get: function get() {
          return this.content.length;
        }
      }, {
        key: "child",
        value: function child(t) {
          var e = this.content[t];
          if (!e) throw new RangeError("Index " + t + " out of range for " + this);
          return e;
        }
      }, {
        key: "maybeChild",
        value: function maybeChild(t) {
          return this.content[t] || null;
        }
      }, {
        key: "forEach",
        value: function forEach(t) {
          for (var _e7 = 0, _n2 = 0; _e7 < this.content.length; _e7++) {
            var _r2 = this.content[_e7];
            t(_r2, _n2, _e7), _n2 += _r2.nodeSize;
          }
        }
      }, {
        key: "findDiffStart",
        value: function findDiffStart(t) {
          var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          return r(this, t, e);
        }
      }, {
        key: "findDiffEnd",
        value: function findDiffEnd(t) {
          var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.size;
          var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : t.size;
          return o(this, t, e, n);
        }
      }, {
        key: "findIndex",
        value: function findIndex(t) {
          var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
          if (0 == t) return a(0, t);
          if (t == this.size) return a(this.content.length, t);
          if (t > this.size || t < 0) throw new RangeError("Position ".concat(t, " outside of fragment (").concat(this, ")"));
          for (var _n3 = 0, _r3 = 0;; _n3++) {
            var _o5 = _r3 + this.child(_n3).nodeSize;
            if (_o5 >= t) return _o5 == t || e > 0 ? a(_n3 + 1, _o5) : a(_n3, _r3);
            _r3 = _o5;
          }
        }
      }, {
        key: "toString",
        value: function toString() {
          return "<" + this.toStringInner() + ">";
        }
      }, {
        key: "toStringInner",
        value: function toStringInner() {
          return this.content.join(", ");
        }
      }, {
        key: "toJSON",
        value: function toJSON() {
          return this.content.length ? this.content.map(function (t) {
            return t.toJSON();
          }) : null;
        }
      }], [{
        key: "fromJSON",
        value: function fromJSON(t, e) {
          if (!e) return i.empty;
          if (!Array.isArray(e)) throw new RangeError("Invalid input for Fragment.fromJSON");
          return new i(e.map(t.nodeFromJSON));
        }
      }, {
        key: "fromArray",
        value: function fromArray(t) {
          if (!t.length) return i.empty;
          var e,
            n = 0;
          for (var _r4 = 0; _r4 < t.length; _r4++) {
            var _o6 = t[_r4];
            n += _o6.nodeSize, _r4 && _o6.isText && t[_r4 - 1].sameMarkup(_o6) ? (e || (e = t.slice(0, _r4)), e[e.length - 1] = _o6.withText(e[e.length - 1].text + _o6.text)) : e && e.push(_o6);
          }
          return new i(e || t, n);
        }
      }, {
        key: "from",
        value: function from(t) {
          if (!t) return i.empty;
          if (t instanceof i) return t;
          if (Array.isArray(t)) return this.fromArray(t);
          if (t.attrs) return new i([t], t.nodeSize);
          throw new RangeError("Can not convert " + t + " to a Fragment" + (t.nodesBetween ? " (looks like multiple versions of prosemirror-model were loaded)" : ""));
        }
      }]);
      return i;
    }();
    i.empty = new i([], 0);
    var s = {
      index: 0,
      offset: 0
    };
    function a(t, e) {
      return s.index = t, s.offset = e, s;
    }
    function l(t, e) {
      if (t === e) return !0;
      if (!t || "object" != _typeof(t) || !e || "object" != _typeof(e)) return !1;
      var n = Array.isArray(t);
      if (Array.isArray(e) != n) return !1;
      if (n) {
        if (t.length != e.length) return !1;
        for (var _n4 = 0; _n4 < t.length; _n4++) if (!l(t[_n4], e[_n4])) return !1;
      } else {
        for (var _n5 in t) if (!(_n5 in e) || !l(t[_n5], e[_n5])) return !1;
        for (var _n6 in e) if (!(_n6 in t)) return !1;
      }
      return !0;
    }
    var c = /*#__PURE__*/function () {
      function c(t, e) {
        _classCallCheck(this, c);
        this.type = t, this.attrs = e;
      }
      _createClass(c, [{
        key: "addToSet",
        value: function addToSet(t) {
          var e,
            n = !1;
          for (var _r5 = 0; _r5 < t.length; _r5++) {
            var _o7 = t[_r5];
            if (this.eq(_o7)) return t;
            if (this.type.excludes(_o7.type)) e || (e = t.slice(0, _r5));else {
              if (_o7.type.excludes(this.type)) return t;
              !n && _o7.type.rank > this.type.rank && (e || (e = t.slice(0, _r5)), e.push(this), n = !0), e && e.push(_o7);
            }
          }
          return e || (e = t.slice()), n || e.push(this), e;
        }
      }, {
        key: "removeFromSet",
        value: function removeFromSet(t) {
          for (var _e8 = 0; _e8 < t.length; _e8++) if (this.eq(t[_e8])) return t.slice(0, _e8).concat(t.slice(_e8 + 1));
          return t;
        }
      }, {
        key: "isInSet",
        value: function isInSet(t) {
          for (var _e9 = 0; _e9 < t.length; _e9++) if (this.eq(t[_e9])) return !0;
          return !1;
        }
      }, {
        key: "eq",
        value: function eq(t) {
          return this == t || this.type == t.type && l(this.attrs, t.attrs);
        }
      }, {
        key: "toJSON",
        value: function toJSON() {
          var t = {
            type: this.type.name
          };
          for (var _e10 in this.attrs) {
            t.attrs = this.attrs;
            break;
          }
          return t;
        }
      }], [{
        key: "fromJSON",
        value: function fromJSON(t, e) {
          if (!e) throw new RangeError("Invalid input for Mark.fromJSON");
          var n = t.marks[e.type];
          if (!n) throw new RangeError("There is no mark type ".concat(e.type, " in this schema"));
          return n.create(e.attrs);
        }
      }, {
        key: "sameSet",
        value: function sameSet(t, e) {
          if (t == e) return !0;
          if (t.length != e.length) return !1;
          for (var _n7 = 0; _n7 < t.length; _n7++) if (!t[_n7].eq(e[_n7])) return !1;
          return !0;
        }
      }, {
        key: "setFrom",
        value: function setFrom(t) {
          if (!t || Array.isArray(t) && 0 == t.length) return c.none;
          if (t instanceof c) return [t];
          var e = t.slice();
          return e.sort(function (t, e) {
            return t.type.rank - e.type.rank;
          }), e;
        }
      }]);
      return c;
    }();
    c.none = [];
    var u = /*#__PURE__*/function (_Error) {
      _inherits(u, _Error);
      function u() {
        _classCallCheck(this, u);
        return _callSuper(this, u, arguments);
      }
      return _createClass(u);
    }( /*#__PURE__*/_wrapNativeSuper(Error));
    var h = /*#__PURE__*/function () {
      function h(t, e, n) {
        _classCallCheck(this, h);
        this.content = t, this.openStart = e, this.openEnd = n;
      }
      _createClass(h, [{
        key: "size",
        get: function get() {
          return this.content.size - this.openStart - this.openEnd;
        }
      }, {
        key: "insertAt",
        value: function insertAt(t, e) {
          var n = p(this.content, t + this.openStart, e);
          return n && new h(n, this.openStart, this.openEnd);
        }
      }, {
        key: "removeBetween",
        value: function removeBetween(t, e) {
          return new h(d(this.content, t + this.openStart, e + this.openStart), this.openStart, this.openEnd);
        }
      }, {
        key: "eq",
        value: function eq(t) {
          return this.content.eq(t.content) && this.openStart == t.openStart && this.openEnd == t.openEnd;
        }
      }, {
        key: "toString",
        value: function toString() {
          return this.content + "(" + this.openStart + "," + this.openEnd + ")";
        }
      }, {
        key: "toJSON",
        value: function toJSON() {
          if (!this.content.size) return null;
          var t = {
            content: this.content.toJSON()
          };
          return this.openStart > 0 && (t.openStart = this.openStart), this.openEnd > 0 && (t.openEnd = this.openEnd), t;
        }
      }], [{
        key: "fromJSON",
        value: function fromJSON(t, e) {
          if (!e) return h.empty;
          var n = e.openStart || 0,
            r = e.openEnd || 0;
          if ("number" != typeof n || "number" != typeof r) throw new RangeError("Invalid input for Slice.fromJSON");
          return new h(i.fromJSON(t, e.content), n, r);
        }
      }, {
        key: "maxOpen",
        value: function maxOpen(t) {
          var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
          var n = 0,
            r = 0;
          for (var _r6 = t.firstChild; _r6 && !_r6.isLeaf && (e || !_r6.type.spec.isolating); _r6 = _r6.firstChild) n++;
          for (var _n8 = t.lastChild; _n8 && !_n8.isLeaf && (e || !_n8.type.spec.isolating); _n8 = _n8.lastChild) r++;
          return new h(t, n, r);
        }
      }]);
      return h;
    }();
    function d(t, e, n) {
      var _t$findIndex = t.findIndex(e),
        r = _t$findIndex.index,
        o = _t$findIndex.offset,
        i = t.maybeChild(r),
        _t$findIndex2 = t.findIndex(n),
        s = _t$findIndex2.index,
        a = _t$findIndex2.offset;
      if (o == e || i.isText) {
        if (a != n && !t.child(s).isText) throw new RangeError("Removing non-flat range");
        return t.cut(0, e).append(t.cut(n));
      }
      if (r != s) throw new RangeError("Removing non-flat range");
      return t.replaceChild(r, i.copy(d(i.content, e - o - 1, n - o - 1)));
    }
    function p(t, e, n, r) {
      var _t$findIndex3 = t.findIndex(e),
        o = _t$findIndex3.index,
        i = _t$findIndex3.offset,
        s = t.maybeChild(o);
      if (i == e || s.isText) return r && !r.canReplace(o, o, n) ? null : t.cut(0, e).append(n).append(t.cut(e));
      var a = p(s.content, e - i - 1, n);
      return a && t.replaceChild(o, s.copy(a));
    }
    function f(t, e, n) {
      if (n.openStart > t.depth) throw new u("Inserted content deeper than insertion position");
      if (t.depth - n.openStart != e.depth - n.openEnd) throw new u("Inconsistent open depths");
      return m(t, e, n, 0);
    }
    function m(t, e, n, r) {
      var o = t.index(r),
        s = t.node(r);
      if (o == e.index(r) && r < t.depth - n.openStart) {
        var _i9 = m(t, e, n, r + 1);
        return s.copy(s.content.replaceChild(o, _i9));
      }
      if (n.content.size) {
        if (n.openStart || n.openEnd || t.depth != r || e.depth != r) {
          var _ref = function (t, e) {
              var n = e.depth - t.openStart,
                r = e.node(n).copy(t.content);
              for (var _t6 = n - 1; _t6 >= 0; _t6--) r = e.node(_t6).copy(i.from(r));
              return {
                start: r.resolveNoCache(t.openStart + n),
                end: r.resolveNoCache(r.content.size - t.openEnd - n)
              };
            }(n, t),
            _o8 = _ref.start,
            _a5 = _ref.end;
          return w(s, x(t, _o8, _a5, e, r));
        }
        {
          var _r7 = t.parent,
            _o9 = _r7.content;
          return w(_r7, _o9.cut(0, t.parentOffset).append(n.content).append(_o9.cut(e.parentOffset)));
        }
      }
      return w(s, k(t, e, r));
    }
    function g(t, e) {
      if (!e.type.compatibleContent(t.type)) throw new u("Cannot join " + e.type.name + " onto " + t.type.name);
    }
    function y(t, e, n) {
      var r = t.node(n);
      return g(r, e.node(n)), r;
    }
    function v(t, e) {
      var n = e.length - 1;
      n >= 0 && t.isText && t.sameMarkup(e[n]) ? e[n] = t.withText(e[n].text + t.text) : e.push(t);
    }
    function b(t, e, n, r) {
      var o = (e || t).node(n),
        i = 0,
        s = e ? e.index(n) : o.childCount;
      t && (i = t.index(n), t.depth > n ? i++ : t.textOffset && (v(t.nodeAfter, r), i++));
      for (var _t7 = i; _t7 < s; _t7++) v(o.child(_t7), r);
      e && e.depth == n && e.textOffset && v(e.nodeBefore, r);
    }
    function w(t, e) {
      return t.type.checkContent(e), t.copy(e);
    }
    function x(t, e, n, r, o) {
      var s = t.depth > o && y(t, e, o + 1),
        a = r.depth > o && y(n, r, o + 1),
        l = [];
      return b(null, t, o, l), s && a && e.index(o) == n.index(o) ? (g(s, a), v(w(s, x(t, e, n, r, o + 1)), l)) : (s && v(w(s, k(t, e, o + 1)), l), b(e, n, o, l), a && v(w(a, k(n, r, o + 1)), l)), b(r, null, o, l), new i(l);
    }
    function k(t, e, n) {
      var r = [];
      return b(null, t, n, r), t.depth > n && v(w(y(t, e, n + 1), k(t, e, n + 1)), r), b(e, null, n, r), new i(r);
    }
    h.empty = new h(i.empty, 0, 0);
    var S = /*#__PURE__*/function () {
      function S(t, e, n) {
        _classCallCheck(this, S);
        this.pos = t, this.path = e, this.parentOffset = n, this.depth = e.length / 3 - 1;
      }
      _createClass(S, [{
        key: "resolveDepth",
        value: function resolveDepth(t) {
          return null == t ? this.depth : t < 0 ? this.depth + t : t;
        }
      }, {
        key: "parent",
        get: function get() {
          return this.node(this.depth);
        }
      }, {
        key: "doc",
        get: function get() {
          return this.node(0);
        }
      }, {
        key: "node",
        value: function node(t) {
          return this.path[3 * this.resolveDepth(t)];
        }
      }, {
        key: "index",
        value: function index(t) {
          return this.path[3 * this.resolveDepth(t) + 1];
        }
      }, {
        key: "indexAfter",
        value: function indexAfter(t) {
          return t = this.resolveDepth(t), this.index(t) + (t != this.depth || this.textOffset ? 1 : 0);
        }
      }, {
        key: "start",
        value: function start(t) {
          return 0 == (t = this.resolveDepth(t)) ? 0 : this.path[3 * t - 1] + 1;
        }
      }, {
        key: "end",
        value: function end(t) {
          return t = this.resolveDepth(t), this.start(t) + this.node(t).content.size;
        }
      }, {
        key: "before",
        value: function before(t) {
          if (!(t = this.resolveDepth(t))) throw new RangeError("There is no position before the top-level node");
          return t == this.depth + 1 ? this.pos : this.path[3 * t - 1];
        }
      }, {
        key: "after",
        value: function after(t) {
          if (!(t = this.resolveDepth(t))) throw new RangeError("There is no position after the top-level node");
          return t == this.depth + 1 ? this.pos : this.path[3 * t - 1] + this.path[3 * t].nodeSize;
        }
      }, {
        key: "textOffset",
        get: function get() {
          return this.pos - this.path[this.path.length - 1];
        }
      }, {
        key: "nodeAfter",
        get: function get() {
          var t = this.parent,
            e = this.index(this.depth);
          if (e == t.childCount) return null;
          var n = this.pos - this.path[this.path.length - 1],
            r = t.child(e);
          return n ? t.child(e).cut(n) : r;
        }
      }, {
        key: "nodeBefore",
        get: function get() {
          var t = this.index(this.depth),
            e = this.pos - this.path[this.path.length - 1];
          return e ? this.parent.child(t).cut(0, e) : 0 == t ? null : this.parent.child(t - 1);
        }
      }, {
        key: "posAtIndex",
        value: function posAtIndex(t, e) {
          e = this.resolveDepth(e);
          var n = this.path[3 * e],
            r = 0 == e ? 0 : this.path[3 * e - 1] + 1;
          for (var _e11 = 0; _e11 < t; _e11++) r += n.child(_e11).nodeSize;
          return r;
        }
      }, {
        key: "marks",
        value: function marks() {
          var t = this.parent,
            e = this.index();
          if (0 == t.content.size) return c.none;
          if (this.textOffset) return t.child(e).marks;
          var n = t.maybeChild(e - 1),
            r = t.maybeChild(e);
          if (!n) {
            var _t8 = n;
            n = r, r = _t8;
          }
          var o = n.marks;
          for (var i = 0; i < o.length; i++) !1 !== o[i].type.spec.inclusive || r && o[i].isInSet(r.marks) || (o = o[i--].removeFromSet(o));
          return o;
        }
      }, {
        key: "marksAcross",
        value: function marksAcross(t) {
          var e = this.parent.maybeChild(this.index());
          if (!e || !e.isInline) return null;
          var n = e.marks,
            r = t.parent.maybeChild(t.index());
          for (var o = 0; o < n.length; o++) !1 !== n[o].type.spec.inclusive || r && n[o].isInSet(r.marks) || (n = n[o--].removeFromSet(n));
          return n;
        }
      }, {
        key: "sharedDepth",
        value: function sharedDepth(t) {
          for (var _e12 = this.depth; _e12 > 0; _e12--) if (this.start(_e12) <= t && this.end(_e12) >= t) return _e12;
          return 0;
        }
      }, {
        key: "blockRange",
        value: function blockRange() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this;
          var e = arguments.length > 1 ? arguments[1] : undefined;
          if (t.pos < this.pos) return t.blockRange(this);
          for (var _n9 = this.depth - (this.parent.inlineContent || this.pos == t.pos ? 1 : 0); _n9 >= 0; _n9--) if (t.pos <= this.end(_n9) && (!e || e(this.node(_n9)))) return new C(this, t, _n9);
          return null;
        }
      }, {
        key: "sameParent",
        value: function sameParent(t) {
          return this.pos - this.parentOffset == t.pos - t.parentOffset;
        }
      }, {
        key: "max",
        value: function max(t) {
          return t.pos > this.pos ? t : this;
        }
      }, {
        key: "min",
        value: function min(t) {
          return t.pos < this.pos ? t : this;
        }
      }, {
        key: "toString",
        value: function toString() {
          var t = "";
          for (var _e13 = 1; _e13 <= this.depth; _e13++) t += (t ? "/" : "") + this.node(_e13).type.name + "_" + this.index(_e13 - 1);
          return t + ":" + this.parentOffset;
        }
      }], [{
        key: "resolve",
        value: function resolve(t, e) {
          if (!(e >= 0 && e <= t.content.size)) throw new RangeError("Position " + e + " out of range");
          var n = [],
            r = 0,
            o = e;
          for (var _e14 = t;;) {
            var _e14$content$findInde = _e14.content.findIndex(o),
              _t9 = _e14$content$findInde.index,
              _i10 = _e14$content$findInde.offset,
              _s6 = o - _i10;
            if (n.push(_e14, _t9, r + _i10), !_s6) break;
            if (_e14 = _e14.child(_t9), _e14.isText) break;
            o = _s6 - 1, r += _i10 + 1;
          }
          return new S(e, n, o);
        }
      }, {
        key: "resolveCached",
        value: function resolveCached(t, e) {
          for (var _n10 = 0; _n10 < M.length; _n10++) {
            var _r8 = M[_n10];
            if (_r8.pos == e && _r8.doc == t) return _r8;
          }
          var n = M[O] = S.resolve(t, e);
          return O = (O + 1) % T, n;
        }
      }]);
      return S;
    }();
    var M = [],
      O = 0,
      T = 12;
    var C = /*#__PURE__*/function () {
      function C(t, e, n) {
        _classCallCheck(this, C);
        this.$from = t, this.$to = e, this.depth = n;
      }
      _createClass(C, [{
        key: "start",
        get: function get() {
          return this.$from.before(this.depth + 1);
        }
      }, {
        key: "end",
        get: function get() {
          return this.$to.after(this.depth + 1);
        }
      }, {
        key: "parent",
        get: function get() {
          return this.$from.node(this.depth);
        }
      }, {
        key: "startIndex",
        get: function get() {
          return this.$from.index(this.depth);
        }
      }, {
        key: "endIndex",
        get: function get() {
          return this.$to.indexAfter(this.depth);
        }
      }]);
      return C;
    }();
    var E = Object.create(null);
    var A = /*#__PURE__*/function () {
      function A(t, e, n) {
        var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : c.none;
        _classCallCheck(this, A);
        this.type = t, this.attrs = e, this.marks = r, this.content = n || i.empty;
      }
      _createClass(A, [{
        key: "nodeSize",
        get: function get() {
          return this.isLeaf ? 1 : 2 + this.content.size;
        }
      }, {
        key: "childCount",
        get: function get() {
          return this.content.childCount;
        }
      }, {
        key: "child",
        value: function child(t) {
          return this.content.child(t);
        }
      }, {
        key: "maybeChild",
        value: function maybeChild(t) {
          return this.content.maybeChild(t);
        }
      }, {
        key: "forEach",
        value: function forEach(t) {
          this.content.forEach(t);
        }
      }, {
        key: "nodesBetween",
        value: function nodesBetween(t, e, n) {
          var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
          this.content.nodesBetween(t, e, n, r, this);
        }
      }, {
        key: "descendants",
        value: function descendants(t) {
          this.nodesBetween(0, this.content.size, t);
        }
      }, {
        key: "textContent",
        get: function get() {
          return this.isLeaf && this.type.spec.leafText ? this.type.spec.leafText(this) : this.textBetween(0, this.content.size, "");
        }
      }, {
        key: "textBetween",
        value: function textBetween(t, e, n, r) {
          return this.content.textBetween(t, e, n, r);
        }
      }, {
        key: "firstChild",
        get: function get() {
          return this.content.firstChild;
        }
      }, {
        key: "lastChild",
        get: function get() {
          return this.content.lastChild;
        }
      }, {
        key: "eq",
        value: function eq(t) {
          return this == t || this.sameMarkup(t) && this.content.eq(t.content);
        }
      }, {
        key: "sameMarkup",
        value: function sameMarkup(t) {
          return this.hasMarkup(t.type, t.attrs, t.marks);
        }
      }, {
        key: "hasMarkup",
        value: function hasMarkup(t, e, n) {
          return this.type == t && l(this.attrs, e || t.defaultAttrs || E) && c.sameSet(this.marks, n || c.none);
        }
      }, {
        key: "copy",
        value: function copy() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          return t == this.content ? this : new A(this.type, this.attrs, t, this.marks);
        }
      }, {
        key: "mark",
        value: function mark(t) {
          return t == this.marks ? this : new A(this.type, this.attrs, this.content, t);
        }
      }, {
        key: "cut",
        value: function cut(t) {
          var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.content.size;
          return 0 == t && e == this.content.size ? this : this.copy(this.content.cut(t, e));
        }
      }, {
        key: "slice",
        value: function slice(t) {
          var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.content.size;
          var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
          if (t == e) return h.empty;
          var r = this.resolve(t),
            o = this.resolve(e),
            i = n ? 0 : r.sharedDepth(e),
            s = r.start(i),
            a = r.node(i).content.cut(r.pos - s, o.pos - s);
          return new h(a, r.depth - i, o.depth - i);
        }
      }, {
        key: "replace",
        value: function replace(t, e, n) {
          return f(this.resolve(t), this.resolve(e), n);
        }
      }, {
        key: "nodeAt",
        value: function nodeAt(t) {
          for (var _e15 = this;;) {
            var _e15$content$findInde = _e15.content.findIndex(t),
              _n11 = _e15$content$findInde.index,
              _r9 = _e15$content$findInde.offset;
            if (_e15 = _e15.maybeChild(_n11), !_e15) return null;
            if (_r9 == t || _e15.isText) return _e15;
            t -= _r9 + 1;
          }
        }
      }, {
        key: "childAfter",
        value: function childAfter(t) {
          var _this$content$findInd = this.content.findIndex(t),
            e = _this$content$findInd.index,
            n = _this$content$findInd.offset;
          return {
            node: this.content.maybeChild(e),
            index: e,
            offset: n
          };
        }
      }, {
        key: "childBefore",
        value: function childBefore(t) {
          if (0 == t) return {
            node: null,
            index: 0,
            offset: 0
          };
          var _this$content$findInd2 = this.content.findIndex(t),
            e = _this$content$findInd2.index,
            n = _this$content$findInd2.offset;
          if (n < t) return {
            node: this.content.child(e),
            index: e,
            offset: n
          };
          var r = this.content.child(e - 1);
          return {
            node: r,
            index: e - 1,
            offset: n - r.nodeSize
          };
        }
      }, {
        key: "resolve",
        value: function resolve(t) {
          return S.resolveCached(this, t);
        }
      }, {
        key: "resolveNoCache",
        value: function resolveNoCache(t) {
          return S.resolve(this, t);
        }
      }, {
        key: "rangeHasMark",
        value: function rangeHasMark(t, e, n) {
          var r = !1;
          return e > t && this.nodesBetween(t, e, function (t) {
            return n.isInSet(t.marks) && (r = !0), !r;
          }), r;
        }
      }, {
        key: "isBlock",
        get: function get() {
          return this.type.isBlock;
        }
      }, {
        key: "isTextblock",
        get: function get() {
          return this.type.isTextblock;
        }
      }, {
        key: "inlineContent",
        get: function get() {
          return this.type.inlineContent;
        }
      }, {
        key: "isInline",
        get: function get() {
          return this.type.isInline;
        }
      }, {
        key: "isText",
        get: function get() {
          return this.type.isText;
        }
      }, {
        key: "isLeaf",
        get: function get() {
          return this.type.isLeaf;
        }
      }, {
        key: "isAtom",
        get: function get() {
          return this.type.isAtom;
        }
      }, {
        key: "toString",
        value: function toString() {
          if (this.type.spec.toDebugString) return this.type.spec.toDebugString(this);
          var t = this.type.name;
          return this.content.size && (t += "(" + this.content.toStringInner() + ")"), D(this.marks, t);
        }
      }, {
        key: "contentMatchAt",
        value: function contentMatchAt(t) {
          var e = this.type.contentMatch.matchFragment(this.content, 0, t);
          if (!e) throw new Error("Called contentMatchAt on a node with invalid content");
          return e;
        }
      }, {
        key: "canReplace",
        value: function canReplace(t, e) {
          var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : i.empty;
          var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
          var o = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : n.childCount;
          var s = this.contentMatchAt(t).matchFragment(n, r, o),
            a = s && s.matchFragment(this.content, e);
          if (!a || !a.validEnd) return !1;
          for (var _t10 = r; _t10 < o; _t10++) if (!this.type.allowsMarks(n.child(_t10).marks)) return !1;
          return !0;
        }
      }, {
        key: "canReplaceWith",
        value: function canReplaceWith(t, e, n, r) {
          if (r && !this.type.allowsMarks(r)) return !1;
          var o = this.contentMatchAt(t).matchType(n),
            i = o && o.matchFragment(this.content, e);
          return !!i && i.validEnd;
        }
      }, {
        key: "canAppend",
        value: function canAppend(t) {
          return t.content.size ? this.canReplace(this.childCount, this.childCount, t.content) : this.type.compatibleContent(t.type);
        }
      }, {
        key: "check",
        value: function check() {
          this.type.checkContent(this.content);
          var t = c.none;
          for (var _e16 = 0; _e16 < this.marks.length; _e16++) t = this.marks[_e16].addToSet(t);
          if (!c.sameSet(t, this.marks)) throw new RangeError("Invalid collection of marks for node ".concat(this.type.name, ": ").concat(this.marks.map(function (t) {
            return t.type.name;
          })));
          this.content.forEach(function (t) {
            return t.check();
          });
        }
      }, {
        key: "toJSON",
        value: function toJSON() {
          var t = {
            type: this.type.name
          };
          for (var _e17 in this.attrs) {
            t.attrs = this.attrs;
            break;
          }
          return this.content.size && (t.content = this.content.toJSON()), this.marks.length && (t.marks = this.marks.map(function (t) {
            return t.toJSON();
          })), t;
        }
      }], [{
        key: "fromJSON",
        value: function fromJSON(t, e) {
          if (!e) throw new RangeError("Invalid input for Node.fromJSON");
          var n = null;
          if (e.marks) {
            if (!Array.isArray(e.marks)) throw new RangeError("Invalid mark data for Node.fromJSON");
            n = e.marks.map(t.markFromJSON);
          }
          if ("text" == e.type) {
            if ("string" != typeof e.text) throw new RangeError("Invalid text node in JSON");
            return t.text(e.text, n);
          }
          var r = i.fromJSON(t, e.content);
          return t.nodeType(e.type).create(e.attrs, r, n);
        }
      }]);
      return A;
    }();
    A.prototype.text = void 0;
    var N = /*#__PURE__*/function (_A) {
      _inherits(N, _A);
      function N(t, e, n, r) {
        var _this;
        _classCallCheck(this, N);
        if (_this = _callSuper(this, N, [t, e, null, r]), !n) throw new RangeError("Empty text nodes are not allowed");
        _this.text = n;
        return _possibleConstructorReturn(_this);
      }
      _createClass(N, [{
        key: "toString",
        value: function toString() {
          return this.type.spec.toDebugString ? this.type.spec.toDebugString(this) : D(this.marks, JSON.stringify(this.text));
        }
      }, {
        key: "textContent",
        get: function get() {
          return this.text;
        }
      }, {
        key: "textBetween",
        value: function textBetween(t, e) {
          return this.text.slice(t, e);
        }
      }, {
        key: "nodeSize",
        get: function get() {
          return this.text.length;
        }
      }, {
        key: "mark",
        value: function mark(t) {
          return t == this.marks ? this : new N(this.type, this.attrs, this.text, t);
        }
      }, {
        key: "withText",
        value: function withText(t) {
          return t == this.text ? this : new N(this.type, this.attrs, t, this.marks);
        }
      }, {
        key: "cut",
        value: function cut() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.text.length;
          return 0 == t && e == this.text.length ? this : this.withText(this.text.slice(t, e));
        }
      }, {
        key: "eq",
        value: function eq(t) {
          return this.sameMarkup(t) && this.text == t.text;
        }
      }, {
        key: "toJSON",
        value: function toJSON() {
          var t = _get(_getPrototypeOf(N.prototype), "toJSON", this).call(this);
          return t.text = this.text, t;
        }
      }]);
      return N;
    }(A);
    function D(t, e) {
      for (var _n12 = t.length - 1; _n12 >= 0; _n12--) e = t[_n12].type.name + "(" + e + ")";
      return e;
    }
    var R = /*#__PURE__*/function () {
      function R(t) {
        _classCallCheck(this, R);
        this.validEnd = t, this.next = [], this.wrapCache = [];
      }
      _createClass(R, [{
        key: "matchType",
        value: function matchType(t) {
          for (var _e18 = 0; _e18 < this.next.length; _e18++) if (this.next[_e18].type == t) return this.next[_e18].next;
          return null;
        }
      }, {
        key: "matchFragment",
        value: function matchFragment(t) {
          var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : t.childCount;
          var r = this;
          for (var _o10 = e; r && _o10 < n; _o10++) r = r.matchType(t.child(_o10).type);
          return r;
        }
      }, {
        key: "inlineContent",
        get: function get() {
          return 0 != this.next.length && this.next[0].type.isInline;
        }
      }, {
        key: "defaultType",
        get: function get() {
          for (var _t11 = 0; _t11 < this.next.length; _t11++) {
            var _e19 = this.next[_t11].type;
            if (!_e19.isText && !_e19.hasRequiredAttrs()) return _e19;
          }
          return null;
        }
      }, {
        key: "compatible",
        value: function compatible(t) {
          for (var _e20 = 0; _e20 < this.next.length; _e20++) for (var _n13 = 0; _n13 < t.next.length; _n13++) if (this.next[_e20].type == t.next[_n13].type) return !0;
          return !1;
        }
      }, {
        key: "fillBefore",
        value: function fillBefore(t) {
          var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
          var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
          var r = [this];
          return function o(s, a) {
            var l = s.matchFragment(t, n);
            if (l && (!e || l.validEnd)) return i.from(a.map(function (t) {
              return t.createAndFill();
            }));
            for (var _t12 = 0; _t12 < s.next.length; _t12++) {
              var _s$next$_t = s.next[_t12],
                _e21 = _s$next$_t.type,
                _n14 = _s$next$_t.next;
              if (!_e21.isText && !_e21.hasRequiredAttrs() && -1 == r.indexOf(_n14)) {
                r.push(_n14);
                var _t13 = o(_n14, a.concat(_e21));
                if (_t13) return _t13;
              }
            }
            return null;
          }(this, []);
        }
      }, {
        key: "findWrapping",
        value: function findWrapping(t) {
          for (var _e22 = 0; _e22 < this.wrapCache.length; _e22 += 2) if (this.wrapCache[_e22] == t) return this.wrapCache[_e22 + 1];
          var e = this.computeWrapping(t);
          return this.wrapCache.push(t, e), e;
        }
      }, {
        key: "computeWrapping",
        value: function computeWrapping(t) {
          var e = Object.create(null),
            n = [{
              match: this,
              type: null,
              via: null
            }];
          for (; n.length;) {
            var _r10 = n.shift(),
              _o11 = _r10.match;
            if (_o11.matchType(t)) {
              var _t14 = [];
              for (var _e23 = _r10; _e23.type; _e23 = _e23.via) _t14.push(_e23.type);
              return _t14.reverse();
            }
            for (var _t15 = 0; _t15 < _o11.next.length; _t15++) {
              var _o11$next$_t = _o11.next[_t15],
                _i11 = _o11$next$_t.type,
                _s7 = _o11$next$_t.next;
              _i11.isLeaf || _i11.hasRequiredAttrs() || _i11.name in e || _r10.type && !_s7.validEnd || (n.push({
                match: _i11.contentMatch,
                type: _i11,
                via: _r10
              }), e[_i11.name] = !0);
            }
          }
          return null;
        }
      }, {
        key: "edgeCount",
        get: function get() {
          return this.next.length;
        }
      }, {
        key: "edge",
        value: function edge(t) {
          if (t >= this.next.length) throw new RangeError("There's no ".concat(t, "th edge in this content match"));
          return this.next[t];
        }
      }, {
        key: "toString",
        value: function toString() {
          var t = [];
          return function e(n) {
            t.push(n);
            for (var _r11 = 0; _r11 < n.next.length; _r11++) -1 == t.indexOf(n.next[_r11].next) && e(n.next[_r11].next);
          }(this), t.map(function (e, n) {
            var r = n + (e.validEnd ? "*" : " ") + " ";
            for (var _n15 = 0; _n15 < e.next.length; _n15++) r += (_n15 ? ", " : "") + e.next[_n15].type.name + "->" + t.indexOf(e.next[_n15].next);
            return r;
          }).join("\n");
        }
      }], [{
        key: "parse",
        value: function parse(t, e) {
          var n = new I(t, e);
          if (null == n.next) return R.empty;
          var r = P(n);
          n.next && n.err("Unexpected trailing text");
          var o = function (t) {
            var e = Object.create(null);
            return function n(r) {
              var o = [];
              r.forEach(function (e) {
                t[e].forEach(function (_ref2) {
                  var e = _ref2.term,
                    n = _ref2.to;
                  if (!e) return;
                  var r;
                  for (var _t16 = 0; _t16 < o.length; _t16++) o[_t16][0] == e && (r = o[_t16][1]);
                  $(t, n).forEach(function (t) {
                    r || o.push([e, r = []]), -1 == r.indexOf(t) && r.push(t);
                  });
                });
              });
              var i = e[r.join(",")] = new R(r.indexOf(t.length - 1) > -1);
              for (var _t17 = 0; _t17 < o.length; _t17++) {
                var _r12 = o[_t17][1].sort(j);
                i.next.push({
                  type: o[_t17][0],
                  next: e[_r12.join(",")] || n(_r12)
                });
              }
              return i;
            }($(t, 0));
          }(function (t) {
            var e = [[]];
            return o(function t(e, i) {
              if ("choice" == e.type) return e.exprs.reduce(function (e, n) {
                return e.concat(t(n, i));
              }, []);
              if ("seq" != e.type) {
                if ("star" == e.type) {
                  var _s8 = n();
                  return r(i, _s8), o(t(e.expr, _s8), _s8), [r(_s8)];
                }
                if ("plus" == e.type) {
                  var _s9 = n();
                  return o(t(e.expr, i), _s9), o(t(e.expr, _s9), _s9), [r(_s9)];
                }
                if ("opt" == e.type) return [r(i)].concat(t(e.expr, i));
                if ("range" == e.type) {
                  var _s10 = i;
                  for (var _r13 = 0; _r13 < e.min; _r13++) {
                    var _r14 = n();
                    o(t(e.expr, _s10), _r14), _s10 = _r14;
                  }
                  if (-1 == e.max) o(t(e.expr, _s10), _s10);else for (var _i12 = e.min; _i12 < e.max; _i12++) {
                    var _i13 = n();
                    r(_s10, _i13), o(t(e.expr, _s10), _i13), _s10 = _i13;
                  }
                  return [r(_s10)];
                }
                if ("name" == e.type) return [r(i, void 0, e.value)];
                throw new Error("Unknown expr type");
              }
              for (var _r15 = 0;; _r15++) {
                var _s11 = t(e.exprs[_r15], i);
                if (_r15 == e.exprs.length - 1) return _s11;
                o(_s11, i = n());
              }
            }(t, 0), n()), e;
            function n() {
              return e.push([]) - 1;
            }
            function r(t, n, r) {
              var o = {
                term: r,
                to: n
              };
              return e[t].push(o), o;
            }
            function o(t, e) {
              t.forEach(function (t) {
                return t.to = e;
              });
            }
          }(r));
          return function (t, e) {
            for (var _n16 = 0, _r16 = [t]; _n16 < _r16.length; _n16++) {
              var _t18 = _r16[_n16],
                _o12 = !_t18.validEnd,
                _i14 = [];
              for (var _e24 = 0; _e24 < _t18.next.length; _e24++) {
                var _t18$next$_e = _t18.next[_e24],
                  _n17 = _t18$next$_e.type,
                  _s12 = _t18$next$_e.next;
                _i14.push(_n17.name), !_o12 || _n17.isText || _n17.hasRequiredAttrs() || (_o12 = !1), -1 == _r16.indexOf(_s12) && _r16.push(_s12);
              }
              _o12 && e.err("Only non-generatable nodes (" + _i14.join(", ") + ") in a required position (see https://prosemirror.net/docs/guide/#generatable)");
            }
          }(o, n), o;
        }
      }]);
      return R;
    }();
    R.empty = new R(!0);
    var I = /*#__PURE__*/function () {
      function I(t, e) {
        _classCallCheck(this, I);
        this.string = t, this.nodeTypes = e, this.inline = null, this.pos = 0, this.tokens = t.split(/\s*(?=\b|\W|$)/), "" == this.tokens[this.tokens.length - 1] && this.tokens.pop(), "" == this.tokens[0] && this.tokens.shift();
      }
      _createClass(I, [{
        key: "next",
        get: function get() {
          return this.tokens[this.pos];
        }
      }, {
        key: "eat",
        value: function eat(t) {
          return this.next == t && (this.pos++ || !0);
        }
      }, {
        key: "err",
        value: function err(t) {
          throw new SyntaxError(t + " (in content expression '" + this.string + "')");
        }
      }]);
      return I;
    }();
    function P(t) {
      var e = [];
      do {
        e.push(L(t));
      } while (t.eat("|"));
      return 1 == e.length ? e[0] : {
        type: "choice",
        exprs: e
      };
    }
    function L(t) {
      var e = [];
      do {
        e.push(F(t));
      } while (t.next && ")" != t.next && "|" != t.next);
      return 1 == e.length ? e[0] : {
        type: "seq",
        exprs: e
      };
    }
    function F(t) {
      var e = function (t) {
        if (t.eat("(")) {
          var _e25 = P(t);
          return t.eat(")") || t.err("Missing closing paren"), _e25;
        }
        if (!/\W/.test(t.next)) {
          var _e26 = function (t, e) {
            var n = t.nodeTypes,
              r = n[e];
            if (r) return [r];
            var o = [];
            for (var _t19 in n) {
              var _r17 = n[_t19];
              _r17.groups.indexOf(e) > -1 && o.push(_r17);
            }
            return 0 == o.length && t.err("No node type or group '" + e + "' found"), o;
          }(t, t.next).map(function (e) {
            return null == t.inline ? t.inline = e.isInline : t.inline != e.isInline && t.err("Mixing inline and block content"), {
              type: "name",
              value: e
            };
          });
          return t.pos++, 1 == _e26.length ? _e26[0] : {
            type: "choice",
            exprs: _e26
          };
        }
        t.err("Unexpected token '" + t.next + "'");
      }(t);
      for (;;) if (t.eat("+")) e = {
        type: "plus",
        expr: e
      };else if (t.eat("*")) e = {
        type: "star",
        expr: e
      };else if (t.eat("?")) e = {
        type: "opt",
        expr: e
      };else {
        if (!t.eat("{")) break;
        e = z(t, e);
      }
      return e;
    }
    function B(t) {
      /\D/.test(t.next) && t.err("Expected number, got '" + t.next + "'");
      var e = Number(t.next);
      return t.pos++, e;
    }
    function z(t, e) {
      var n = B(t),
        r = n;
      return t.eat(",") && (r = "}" != t.next ? B(t) : -1), t.eat("}") || t.err("Unclosed braced range"), {
        type: "range",
        min: n,
        max: r,
        expr: e
      };
    }
    function j(t, e) {
      return e - t;
    }
    function $(t, e) {
      var n = [];
      return function e(r) {
        var o = t[r];
        if (1 == o.length && !o[0].term) return e(o[0].to);
        n.push(r);
        for (var _t20 = 0; _t20 < o.length; _t20++) {
          var _o$_t = o[_t20],
            _r18 = _o$_t.term,
            _i15 = _o$_t.to;
          _r18 || -1 != n.indexOf(_i15) || e(_i15);
        }
      }(e), n.sort(j);
    }
    function _(t) {
      var e = Object.create(null);
      for (var _n18 in t) {
        var _r19 = t[_n18];
        if (!_r19.hasDefault) return null;
        e[_n18] = _r19.default;
      }
      return e;
    }
    function H(t, e) {
      var n = Object.create(null);
      for (var _r20 in t) {
        var _o13 = e && e[_r20];
        if (void 0 === _o13) {
          var _e27 = t[_r20];
          if (!_e27.hasDefault) throw new RangeError("No value supplied for attribute " + _r20);
          _o13 = _e27.default;
        }
        n[_r20] = _o13;
      }
      return n;
    }
    function V(t) {
      var e = Object.create(null);
      if (t) for (var _n19 in t) e[_n19] = new K(t[_n19]);
      return e;
    }
    var W = /*#__PURE__*/function () {
      function W(t, e, n) {
        _classCallCheck(this, W);
        this.name = t, this.schema = e, this.spec = n, this.markSet = null, this.groups = n.group ? n.group.split(" ") : [], this.attrs = V(n.attrs), this.defaultAttrs = _(this.attrs), this.contentMatch = null, this.inlineContent = null, this.isBlock = !(n.inline || "text" == t), this.isText = "text" == t;
      }
      _createClass(W, [{
        key: "isInline",
        get: function get() {
          return !this.isBlock;
        }
      }, {
        key: "isTextblock",
        get: function get() {
          return this.isBlock && this.inlineContent;
        }
      }, {
        key: "isLeaf",
        get: function get() {
          return this.contentMatch == R.empty;
        }
      }, {
        key: "isAtom",
        get: function get() {
          return this.isLeaf || !!this.spec.atom;
        }
      }, {
        key: "whitespace",
        get: function get() {
          return this.spec.whitespace || (this.spec.code ? "pre" : "normal");
        }
      }, {
        key: "hasRequiredAttrs",
        value: function hasRequiredAttrs() {
          for (var _t21 in this.attrs) if (this.attrs[_t21].isRequired) return !0;
          return !1;
        }
      }, {
        key: "compatibleContent",
        value: function compatibleContent(t) {
          return this == t || this.contentMatch.compatible(t.contentMatch);
        }
      }, {
        key: "computeAttrs",
        value: function computeAttrs(t) {
          return !t && this.defaultAttrs ? this.defaultAttrs : H(this.attrs, t);
        }
      }, {
        key: "create",
        value: function create() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          var e = arguments.length > 1 ? arguments[1] : undefined;
          var n = arguments.length > 2 ? arguments[2] : undefined;
          if (this.isText) throw new Error("NodeType.create can't construct text nodes");
          return new A(this, this.computeAttrs(t), i.from(e), c.setFrom(n));
        }
      }, {
        key: "createChecked",
        value: function createChecked() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          var e = arguments.length > 1 ? arguments[1] : undefined;
          var n = arguments.length > 2 ? arguments[2] : undefined;
          return e = i.from(e), this.checkContent(e), new A(this, this.computeAttrs(t), e, c.setFrom(n));
        }
      }, {
        key: "createAndFill",
        value: function createAndFill() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          var e = arguments.length > 1 ? arguments[1] : undefined;
          var n = arguments.length > 2 ? arguments[2] : undefined;
          if (t = this.computeAttrs(t), (e = i.from(e)).size) {
            var _t22 = this.contentMatch.fillBefore(e);
            if (!_t22) return null;
            e = _t22.append(e);
          }
          var r = this.contentMatch.matchFragment(e),
            o = r && r.fillBefore(i.empty, !0);
          return o ? new A(this, t, e.append(o), c.setFrom(n)) : null;
        }
      }, {
        key: "validContent",
        value: function validContent(t) {
          var e = this.contentMatch.matchFragment(t);
          if (!e || !e.validEnd) return !1;
          for (var _e28 = 0; _e28 < t.childCount; _e28++) if (!this.allowsMarks(t.child(_e28).marks)) return !1;
          return !0;
        }
      }, {
        key: "checkContent",
        value: function checkContent(t) {
          if (!this.validContent(t)) throw new RangeError("Invalid content for node ".concat(this.name, ": ").concat(t.toString().slice(0, 50)));
        }
      }, {
        key: "allowsMarkType",
        value: function allowsMarkType(t) {
          return null == this.markSet || this.markSet.indexOf(t) > -1;
        }
      }, {
        key: "allowsMarks",
        value: function allowsMarks(t) {
          if (null == this.markSet) return !0;
          for (var _e29 = 0; _e29 < t.length; _e29++) if (!this.allowsMarkType(t[_e29].type)) return !1;
          return !0;
        }
      }, {
        key: "allowedMarks",
        value: function allowedMarks(t) {
          if (null == this.markSet) return t;
          var e;
          for (var _n20 = 0; _n20 < t.length; _n20++) this.allowsMarkType(t[_n20].type) ? e && e.push(t[_n20]) : e || (e = t.slice(0, _n20));
          return e ? e.length ? e : c.none : t;
        }
      }], [{
        key: "compile",
        value: function compile(t, e) {
          var n = Object.create(null);
          t.forEach(function (t, r) {
            return n[t] = new W(t, e, r);
          });
          var r = e.spec.topNode || "doc";
          if (!n[r]) throw new RangeError("Schema is missing its top node type ('" + r + "')");
          if (!n.text) throw new RangeError("Every schema needs a 'text' type");
          for (var _t23 in n.text.attrs) throw new RangeError("The text node type should not have attributes");
          return n;
        }
      }]);
      return W;
    }();
    var K = /*#__PURE__*/function () {
      function K(t) {
        _classCallCheck(this, K);
        this.hasDefault = Object.prototype.hasOwnProperty.call(t, "default"), this.default = t.default;
      }
      _createClass(K, [{
        key: "isRequired",
        get: function get() {
          return !this.hasDefault;
        }
      }]);
      return K;
    }();
    var q = /*#__PURE__*/function () {
      function q(t, e, n, r) {
        _classCallCheck(this, q);
        this.name = t, this.rank = e, this.schema = n, this.spec = r, this.attrs = V(r.attrs), this.excluded = null;
        var o = _(this.attrs);
        this.instance = o ? new c(this, o) : null;
      }
      _createClass(q, [{
        key: "create",
        value: function create() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          return !t && this.instance ? this.instance : new c(this, H(this.attrs, t));
        }
      }, {
        key: "removeFromSet",
        value: function removeFromSet(t) {
          for (var e = 0; e < t.length; e++) t[e].type == this && (t = t.slice(0, e).concat(t.slice(e + 1)), e--);
          return t;
        }
      }, {
        key: "isInSet",
        value: function isInSet(t) {
          for (var _e30 = 0; _e30 < t.length; _e30++) if (t[_e30].type == this) return t[_e30];
        }
      }, {
        key: "excludes",
        value: function excludes(t) {
          return this.excluded.indexOf(t) > -1;
        }
      }], [{
        key: "compile",
        value: function compile(t, e) {
          var n = Object.create(null),
            r = 0;
          return t.forEach(function (t, o) {
            return n[t] = new q(t, r++, e, o);
          }), n;
        }
      }]);
      return q;
    }();
    var J = /*#__PURE__*/function () {
      function J(t) {
        _classCallCheck(this, J);
        this.cached = Object.create(null);
        var n = this.spec = {};
        for (var _e31 in t) n[_e31] = t[_e31];
        n.nodes = e.from(t.nodes), n.marks = e.from(t.marks || {}), this.nodes = W.compile(this.spec.nodes, this), this.marks = q.compile(this.spec.marks, this);
        var r = Object.create(null);
        for (var _t24 in this.nodes) {
          if (_t24 in this.marks) throw new RangeError(_t24 + " can not be both a node and a mark");
          var _e32 = this.nodes[_t24],
            _n21 = _e32.spec.content || "",
            _o14 = _e32.spec.marks;
          _e32.contentMatch = r[_n21] || (r[_n21] = R.parse(_n21, this.nodes)), _e32.inlineContent = _e32.contentMatch.inlineContent, _e32.markSet = "_" == _o14 ? null : _o14 ? U(this, _o14.split(" ")) : "" != _o14 && _e32.inlineContent ? null : [];
        }
        for (var _t25 in this.marks) {
          var _e33 = this.marks[_t25],
            _n22 = _e33.spec.excludes;
          _e33.excluded = null == _n22 ? [_e33] : "" == _n22 ? [] : U(this, _n22.split(" "));
        }
        this.nodeFromJSON = this.nodeFromJSON.bind(this), this.markFromJSON = this.markFromJSON.bind(this), this.topNodeType = this.nodes[this.spec.topNode || "doc"], this.cached.wrappings = Object.create(null);
      }
      _createClass(J, [{
        key: "node",
        value: function node(t) {
          var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          var n = arguments.length > 2 ? arguments[2] : undefined;
          var r = arguments.length > 3 ? arguments[3] : undefined;
          if ("string" == typeof t) t = this.nodeType(t);else {
            if (!(t instanceof W)) throw new RangeError("Invalid node type: " + t);
            if (t.schema != this) throw new RangeError("Node type from different schema used (" + t.name + ")");
          }
          return t.createChecked(e, n, r);
        }
      }, {
        key: "text",
        value: function text(t, e) {
          var n = this.nodes.text;
          return new N(n, n.defaultAttrs, t, c.setFrom(e));
        }
      }, {
        key: "mark",
        value: function mark(t, e) {
          return "string" == typeof t && (t = this.marks[t]), t.create(e);
        }
      }, {
        key: "nodeFromJSON",
        value: function nodeFromJSON(t) {
          return A.fromJSON(this, t);
        }
      }, {
        key: "markFromJSON",
        value: function markFromJSON(t) {
          return c.fromJSON(this, t);
        }
      }, {
        key: "nodeType",
        value: function nodeType(t) {
          var e = this.nodes[t];
          if (!e) throw new RangeError("Unknown node type: " + t);
          return e;
        }
      }]);
      return J;
    }();
    function U(t, e) {
      var n = [];
      for (var _r21 = 0; _r21 < e.length; _r21++) {
        var _o15 = e[_r21],
          _i16 = t.marks[_o15],
          _s13 = _i16;
        if (_i16) n.push(_i16);else for (var _e34 in t.marks) {
          var _r22 = t.marks[_e34];
          ("_" == _o15 || _r22.spec.group && _r22.spec.group.split(" ").indexOf(_o15) > -1) && n.push(_s13 = _r22);
        }
        if (!_s13) throw new SyntaxError("Unknown mark type: '" + e[_r21] + "'");
      }
      return n;
    }
    var G = /*#__PURE__*/function () {
      function G(t, e) {
        var _this2 = this;
        _classCallCheck(this, G);
        this.schema = t, this.rules = e, this.tags = [], this.styles = [], e.forEach(function (t) {
          t.tag ? _this2.tags.push(t) : t.style && _this2.styles.push(t);
        }), this.normalizeLists = !this.tags.some(function (e) {
          if (!/^(ul|ol)\b/.test(e.tag) || !e.node) return !1;
          var n = t.nodes[e.node];
          return n.contentMatch.matchType(n);
        });
      }
      _createClass(G, [{
        key: "parse",
        value: function parse(t) {
          var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var n = new et(this, e, !1);
          return n.addAll(t, e.from, e.to), n.finish();
        }
      }, {
        key: "parseSlice",
        value: function parseSlice(t) {
          var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var n = new et(this, e, !0);
          return n.addAll(t, e.from, e.to), h.maxOpen(n.finish());
        }
      }, {
        key: "matchTag",
        value: function matchTag(t, e, n) {
          for (var _r23 = n ? this.tags.indexOf(n) + 1 : 0; _r23 < this.tags.length; _r23++) {
            var _n23 = this.tags[_r23];
            if (nt(t, _n23.tag) && (void 0 === _n23.namespace || t.namespaceURI == _n23.namespace) && (!_n23.context || e.matchesContext(_n23.context))) {
              if (_n23.getAttrs) {
                var _e35 = _n23.getAttrs(t);
                if (!1 === _e35) continue;
                _n23.attrs = _e35 || void 0;
              }
              return _n23;
            }
          }
        }
      }, {
        key: "matchStyle",
        value: function matchStyle(t, e, n, r) {
          for (var _o16 = r ? this.styles.indexOf(r) + 1 : 0; _o16 < this.styles.length; _o16++) {
            var _r24 = this.styles[_o16],
              _i17 = _r24.style;
            if (!(0 != _i17.indexOf(t) || _r24.context && !n.matchesContext(_r24.context) || _i17.length > t.length && (61 != _i17.charCodeAt(t.length) || _i17.slice(t.length + 1) != e))) {
              if (_r24.getAttrs) {
                var _t26 = _r24.getAttrs(e);
                if (!1 === _t26) continue;
                _r24.attrs = _t26 || void 0;
              }
              return _r24;
            }
          }
        }
      }], [{
        key: "schemaRules",
        value: function schemaRules(t) {
          var e = [];
          function n(t) {
            var n = null == t.priority ? 50 : t.priority,
              r = 0;
            for (; r < e.length; r++) {
              var _t27 = e[r];
              if ((null == _t27.priority ? 50 : _t27.priority) < n) break;
            }
            e.splice(r, 0, t);
          }
          var _loop = function _loop(_e36) {
            var r = t.marks[_e36].spec.parseDOM;
            r && r.forEach(function (t) {
              n(t = rt(t)), t.mark || t.ignore || t.clearMark || (t.mark = _e36);
            });
          };
          for (var _e36 in t.marks) {
            _loop(_e36);
          }
          var _loop2 = function _loop2(_e37) {
            var r = t.nodes[_e37].spec.parseDOM;
            r && r.forEach(function (t) {
              n(t = rt(t)), t.node || t.ignore || t.mark || (t.node = _e37);
            });
          };
          for (var _e37 in t.nodes) {
            _loop2(_e37);
          }
          return e;
        }
      }, {
        key: "fromSchema",
        value: function fromSchema(t) {
          return t.cached.domParser || (t.cached.domParser = new G(t, G.schemaRules(t)));
        }
      }]);
      return G;
    }();
    var Y = {
        address: !0,
        article: !0,
        aside: !0,
        blockquote: !0,
        canvas: !0,
        dd: !0,
        div: !0,
        dl: !0,
        fieldset: !0,
        figcaption: !0,
        figure: !0,
        footer: !0,
        form: !0,
        h1: !0,
        h2: !0,
        h3: !0,
        h4: !0,
        h5: !0,
        h6: !0,
        header: !0,
        hgroup: !0,
        hr: !0,
        li: !0,
        noscript: !0,
        ol: !0,
        output: !0,
        p: !0,
        pre: !0,
        section: !0,
        table: !0,
        tfoot: !0,
        ul: !0
      },
      X = {
        head: !0,
        noscript: !0,
        object: !0,
        script: !0,
        style: !0,
        title: !0
      },
      Q = {
        ol: !0,
        ul: !0
      };
    function Z(t, e, n) {
      return null != e ? (e ? 1 : 0) | ("full" === e ? 2 : 0) : t && "pre" == t.whitespace ? 3 : -5 & n;
    }
    var tt = /*#__PURE__*/function () {
      function tt(t, e, n, r, o, i, s) {
        _classCallCheck(this, tt);
        this.type = t, this.attrs = e, this.marks = n, this.pendingMarks = r, this.solid = o, this.options = s, this.content = [], this.activeMarks = c.none, this.stashMarks = [], this.match = i || (4 & s ? null : t.contentMatch);
      }
      _createClass(tt, [{
        key: "findWrapping",
        value: function findWrapping(t) {
          if (!this.match) {
            if (!this.type) return [];
            var _e38 = this.type.contentMatch.fillBefore(i.from(t));
            if (!_e38) {
              var _e39,
                _n24 = this.type.contentMatch;
              return (_e39 = _n24.findWrapping(t.type)) ? (this.match = _n24, _e39) : null;
            }
            this.match = this.type.contentMatch.matchFragment(_e38);
          }
          return this.match.findWrapping(t.type);
        }
      }, {
        key: "finish",
        value: function finish(t) {
          if (!(1 & this.options)) {
            var _t28,
              _e40 = this.content[this.content.length - 1];
            if (_e40 && _e40.isText && (_t28 = /[ \t\r\n\u000c]+$/.exec(_e40.text))) {
              var _n25 = _e40;
              _e40.text.length == _t28[0].length ? this.content.pop() : this.content[this.content.length - 1] = _n25.withText(_n25.text.slice(0, _n25.text.length - _t28[0].length));
            }
          }
          var e = i.from(this.content);
          return !t && this.match && (e = e.append(this.match.fillBefore(i.empty, !0))), this.type ? this.type.create(this.attrs, e, this.marks) : e;
        }
      }, {
        key: "popFromStashMark",
        value: function popFromStashMark(t) {
          for (var _e41 = this.stashMarks.length - 1; _e41 >= 0; _e41--) if (t.eq(this.stashMarks[_e41])) return this.stashMarks.splice(_e41, 1)[0];
        }
      }, {
        key: "applyPending",
        value: function applyPending(t) {
          for (var _e42 = 0, _n26 = this.pendingMarks; _e42 < _n26.length; _e42++) {
            var _r25 = _n26[_e42];
            (this.type ? this.type.allowsMarkType(_r25.type) : ot(_r25.type, t)) && !_r25.isInSet(this.activeMarks) && (this.activeMarks = _r25.addToSet(this.activeMarks), this.pendingMarks = _r25.removeFromSet(this.pendingMarks));
          }
        }
      }, {
        key: "inlineContext",
        value: function inlineContext(t) {
          return this.type ? this.type.inlineContent : this.content.length ? this.content[0].isInline : t.parentNode && !Y.hasOwnProperty(t.parentNode.nodeName.toLowerCase());
        }
      }]);
      return tt;
    }();
    var et = /*#__PURE__*/function () {
      function et(t, e, n) {
        _classCallCheck(this, et);
        this.parser = t, this.options = e, this.isOpen = n, this.open = 0;
        var r,
          o = e.topNode,
          i = Z(null, e.preserveWhitespace, 0) | (n ? 4 : 0);
        r = o ? new tt(o.type, o.attrs, c.none, c.none, !0, e.topMatch || o.type.contentMatch, i) : new tt(n ? null : t.schema.topNodeType, null, c.none, c.none, !0, null, i), this.nodes = [r], this.find = e.findPositions, this.needsBlock = !1;
      }
      _createClass(et, [{
        key: "top",
        get: function get() {
          return this.nodes[this.open];
        }
      }, {
        key: "addDOM",
        value: function addDOM(t) {
          3 == t.nodeType ? this.addTextNode(t) : 1 == t.nodeType && this.addElement(t);
        }
      }, {
        key: "withStyleRules",
        value: function withStyleRules(t, e) {
          var n = t.getAttribute("style");
          if (!n) return e();
          var r = this.readStyles(function (t) {
            var e,
              n = /\s*([\w-]+)\s*:\s*([^;]+)/g,
              r = [];
            for (; e = n.exec(t);) r.push(e[1], e[2].trim());
            return r;
          }(n));
          if (!r) return;
          var _r26 = _slicedToArray(r, 2),
            o = _r26[0],
            i = _r26[1],
            s = this.top;
          for (var _t29 = 0; _t29 < i.length; _t29++) this.removePendingMark(i[_t29], s);
          for (var _t30 = 0; _t30 < o.length; _t30++) this.addPendingMark(o[_t30]);
          e();
          for (var _t31 = 0; _t31 < o.length; _t31++) this.removePendingMark(o[_t31], s);
          for (var _t32 = 0; _t32 < i.length; _t32++) this.addPendingMark(i[_t32]);
        }
      }, {
        key: "addTextNode",
        value: function addTextNode(t) {
          var e = t.nodeValue,
            n = this.top;
          if (2 & n.options || n.inlineContext(t) || /[^ \t\r\n\u000c]/.test(e)) {
            if (1 & n.options) e = 2 & n.options ? e.replace(/\r\n?/g, "\n") : e.replace(/\r?\n|\r/g, " ");else if (e = e.replace(/[ \t\r\n\u000c]+/g, " "), /^[ \t\r\n\u000c]/.test(e) && this.open == this.nodes.length - 1) {
              var _r27 = n.content[n.content.length - 1],
                _o17 = t.previousSibling;
              (!_r27 || _o17 && "BR" == _o17.nodeName || _r27.isText && /[ \t\r\n\u000c]$/.test(_r27.text)) && (e = e.slice(1));
            }
            e && this.insertNode(this.parser.schema.text(e)), this.findInText(t);
          } else this.findInside(t);
        }
      }, {
        key: "addElement",
        value: function addElement(t, e) {
          var _this3 = this;
          var n,
            r = t.nodeName.toLowerCase();
          Q.hasOwnProperty(r) && this.parser.normalizeLists && function (t) {
            for (var _e43 = t.firstChild, _n27 = null; _e43; _e43 = _e43.nextSibling) {
              var _t33 = 1 == _e43.nodeType ? _e43.nodeName.toLowerCase() : null;
              _t33 && Q.hasOwnProperty(_t33) && _n27 ? (_n27.appendChild(_e43), _e43 = _n27) : "li" == _t33 ? _n27 = _e43 : _t33 && (_n27 = null);
            }
          }(t);
          var o = this.options.ruleFromNode && this.options.ruleFromNode(t) || (n = this.parser.matchTag(t, this, e));
          if (o ? o.ignore : X.hasOwnProperty(r)) this.findInside(t), this.ignoreFallback(t);else if (!o || o.skip || o.closeParent) {
            o && o.closeParent ? this.open = Math.max(0, this.open - 1) : o && o.skip.nodeType && (t = o.skip);
            var _e44,
              _n28 = this.top,
              _i18 = this.needsBlock;
            if (Y.hasOwnProperty(r)) _n28.content.length && _n28.content[0].isInline && this.open && (this.open--, _n28 = this.top), _e44 = !0, _n28.type || (this.needsBlock = !0);else if (!t.firstChild) return void this.leafFallback(t);
            o && o.skip ? this.addAll(t) : this.withStyleRules(t, function () {
              return _this3.addAll(t);
            }), _e44 && this.sync(_n28), this.needsBlock = _i18;
          } else this.withStyleRules(t, function () {
            _this3.addElementByRule(t, o, !1 === o.consuming ? n : void 0);
          });
        }
      }, {
        key: "leafFallback",
        value: function leafFallback(t) {
          "BR" == t.nodeName && this.top.type && this.top.type.inlineContent && this.addTextNode(t.ownerDocument.createTextNode("\n"));
        }
      }, {
        key: "ignoreFallback",
        value: function ignoreFallback(t) {
          "BR" != t.nodeName || this.top.type && this.top.type.inlineContent || this.findPlace(this.parser.schema.text("-"));
        }
      }, {
        key: "readStyles",
        value: function readStyles(t) {
          var _this4 = this;
          var e = c.none,
            n = c.none;
          for (var _r28 = 0; _r28 < t.length; _r28 += 2) {
            var _loop3 = function _loop3(_o19) {
                var i = _this4.parser.matchStyle(t[_r28], t[_r28 + 1], _this4, _o19);
                if (!i) {
                  _o18 = _o19;
                  return 0;
                } // break
                if (i.ignore) return {
                  v: null
                };
                if (i.clearMark ? _this4.top.pendingMarks.concat(_this4.top.activeMarks).forEach(function (t) {
                  i.clearMark(t) && (n = t.addToSet(n));
                }) : e = _this4.parser.schema.marks[i.mark].create(i.attrs).addToSet(e), !1 !== i.consuming) {
                  _o18 = _o19;
                  return 0;
                } // break
                _o19 = i;
                _o18 = _o19;
              },
              _ret;
            for (var _o18;;) {
              _ret = _loop3(_o18);
              if (_ret === 0) break;
              if (_ret) return _ret.v;
            }
          }
          return [e, n];
        }
      }, {
        key: "addElementByRule",
        value: function addElementByRule(t, e, n) {
          var _this5 = this;
          var r, o, i;
          e.node ? (o = this.parser.schema.nodes[e.node], o.isLeaf ? this.insertNode(o.create(e.attrs)) || this.leafFallback(t) : r = this.enter(o, e.attrs || null, e.preserveWhitespace)) : (i = this.parser.schema.marks[e.mark].create(e.attrs), this.addPendingMark(i));
          var s = this.top;
          if (o && o.isLeaf) this.findInside(t);else if (n) this.addElement(t, n);else if (e.getContent) this.findInside(t), e.getContent(t, this.parser.schema).forEach(function (t) {
            return _this5.insertNode(t);
          });else {
            var _n29 = t;
            "string" == typeof e.contentElement ? _n29 = t.querySelector(e.contentElement) : "function" == typeof e.contentElement ? _n29 = e.contentElement(t) : e.contentElement && (_n29 = e.contentElement), this.findAround(t, _n29, !0), this.addAll(_n29);
          }
          r && this.sync(s) && this.open--, i && this.removePendingMark(i, s);
        }
      }, {
        key: "addAll",
        value: function addAll(t, e, n) {
          var r = e || 0;
          for (var _o20 = e ? t.childNodes[e] : t.firstChild, _i19 = null == n ? null : t.childNodes[n]; _o20 != _i19; _o20 = _o20.nextSibling, ++r) this.findAtPoint(t, r), this.addDOM(_o20);
          this.findAtPoint(t, r);
        }
      }, {
        key: "findPlace",
        value: function findPlace(t) {
          var e, n;
          for (var _r29 = this.open; _r29 >= 0; _r29--) {
            var _o21 = this.nodes[_r29],
              _i20 = _o21.findWrapping(t);
            if (_i20 && (!e || e.length > _i20.length) && (e = _i20, n = _o21, !_i20.length)) break;
            if (_o21.solid) break;
          }
          if (!e) return !1;
          this.sync(n);
          for (var _t34 = 0; _t34 < e.length; _t34++) this.enterInner(e[_t34], null, !1);
          return !0;
        }
      }, {
        key: "insertNode",
        value: function insertNode(t) {
          if (t.isInline && this.needsBlock && !this.top.type) {
            var _t35 = this.textblockFromContext();
            _t35 && this.enterInner(_t35);
          }
          if (this.findPlace(t)) {
            this.closeExtra();
            var _e45 = this.top;
            _e45.applyPending(t.type), _e45.match && (_e45.match = _e45.match.matchType(t.type));
            var _n30 = _e45.activeMarks;
            for (var _r30 = 0; _r30 < t.marks.length; _r30++) _e45.type && !_e45.type.allowsMarkType(t.marks[_r30].type) || (_n30 = t.marks[_r30].addToSet(_n30));
            return _e45.content.push(t.mark(_n30)), !0;
          }
          return !1;
        }
      }, {
        key: "enter",
        value: function enter(t, e, n) {
          var r = this.findPlace(t.create(e));
          return r && this.enterInner(t, e, !0, n), r;
        }
      }, {
        key: "enterInner",
        value: function enterInner(t) {
          var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
          var r = arguments.length > 3 ? arguments[3] : undefined;
          this.closeExtra();
          var o = this.top;
          o.applyPending(t), o.match = o.match && o.match.matchType(t);
          var i = Z(t, r, o.options);
          4 & o.options && 0 == o.content.length && (i |= 4), this.nodes.push(new tt(t, e, o.activeMarks, o.pendingMarks, n, null, i)), this.open++;
        }
      }, {
        key: "closeExtra",
        value: function closeExtra() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
          var e = this.nodes.length - 1;
          if (e > this.open) {
            for (; e > this.open; e--) this.nodes[e - 1].content.push(this.nodes[e].finish(t));
            this.nodes.length = this.open + 1;
          }
        }
      }, {
        key: "finish",
        value: function finish() {
          return this.open = 0, this.closeExtra(this.isOpen), this.nodes[0].finish(this.isOpen || this.options.topOpen);
        }
      }, {
        key: "sync",
        value: function sync(t) {
          for (var _e46 = this.open; _e46 >= 0; _e46--) if (this.nodes[_e46] == t) return this.open = _e46, !0;
          return !1;
        }
      }, {
        key: "currentPos",
        get: function get() {
          this.closeExtra();
          var t = 0;
          for (var _e47 = this.open; _e47 >= 0; _e47--) {
            var _n31 = this.nodes[_e47].content;
            for (var _e48 = _n31.length - 1; _e48 >= 0; _e48--) t += _n31[_e48].nodeSize;
            _e47 && t++;
          }
          return t;
        }
      }, {
        key: "findAtPoint",
        value: function findAtPoint(t, e) {
          if (this.find) for (var _n32 = 0; _n32 < this.find.length; _n32++) this.find[_n32].node == t && this.find[_n32].offset == e && (this.find[_n32].pos = this.currentPos);
        }
      }, {
        key: "findInside",
        value: function findInside(t) {
          if (this.find) for (var _e49 = 0; _e49 < this.find.length; _e49++) null == this.find[_e49].pos && 1 == t.nodeType && t.contains(this.find[_e49].node) && (this.find[_e49].pos = this.currentPos);
        }
      }, {
        key: "findAround",
        value: function findAround(t, e, n) {
          if (t != e && this.find) for (var _r31 = 0; _r31 < this.find.length; _r31++) null == this.find[_r31].pos && 1 == t.nodeType && t.contains(this.find[_r31].node) && e.compareDocumentPosition(this.find[_r31].node) & (n ? 2 : 4) && (this.find[_r31].pos = this.currentPos);
        }
      }, {
        key: "findInText",
        value: function findInText(t) {
          if (this.find) for (var _e50 = 0; _e50 < this.find.length; _e50++) this.find[_e50].node == t && (this.find[_e50].pos = this.currentPos - (t.nodeValue.length - this.find[_e50].offset));
        }
      }, {
        key: "matchesContext",
        value: function matchesContext(t) {
          var _this6 = this;
          if (t.indexOf("|") > -1) return t.split(/\s*\|\s*/).some(this.matchesContext, this);
          var e = t.split("/"),
            n = this.options.context,
            r = !(this.isOpen || n && n.parent.type != this.nodes[0].type),
            o = -(n ? n.depth + 1 : 0) + (r ? 0 : 1),
            i = function i(t, s) {
              for (; t >= 0; t--) {
                var _a6 = e[t];
                if ("" == _a6) {
                  if (t == e.length - 1 || 0 == t) continue;
                  for (; s >= o; s--) if (i(t - 1, s)) return !0;
                  return !1;
                }
                {
                  var _t36 = s > 0 || 0 == s && r ? _this6.nodes[s].type : n && s >= o ? n.node(s - o).type : null;
                  if (!_t36 || _t36.name != _a6 && -1 == _t36.groups.indexOf(_a6)) return !1;
                  s--;
                }
              }
              return !0;
            };
          return i(e.length - 1, this.open);
        }
      }, {
        key: "textblockFromContext",
        value: function textblockFromContext() {
          var t = this.options.context;
          if (t) for (var _e51 = t.depth; _e51 >= 0; _e51--) {
            var _n33 = t.node(_e51).contentMatchAt(t.indexAfter(_e51)).defaultType;
            if (_n33 && _n33.isTextblock && _n33.defaultAttrs) return _n33;
          }
          for (var _t37 in this.parser.schema.nodes) {
            var _e52 = this.parser.schema.nodes[_t37];
            if (_e52.isTextblock && _e52.defaultAttrs) return _e52;
          }
        }
      }, {
        key: "addPendingMark",
        value: function addPendingMark(t) {
          var e = function (t, e) {
            for (var _n34 = 0; _n34 < e.length; _n34++) if (t.eq(e[_n34])) return e[_n34];
          }(t, this.top.pendingMarks);
          e && this.top.stashMarks.push(e), this.top.pendingMarks = t.addToSet(this.top.pendingMarks);
        }
      }, {
        key: "removePendingMark",
        value: function removePendingMark(t, e) {
          for (var _n35 = this.open; _n35 >= 0; _n35--) {
            var _r32 = this.nodes[_n35];
            if (_r32.pendingMarks.lastIndexOf(t) > -1) _r32.pendingMarks = t.removeFromSet(_r32.pendingMarks);else {
              _r32.activeMarks = t.removeFromSet(_r32.activeMarks);
              var _e53 = _r32.popFromStashMark(t);
              _e53 && _r32.type && _r32.type.allowsMarkType(_e53.type) && (_r32.activeMarks = _e53.addToSet(_r32.activeMarks));
            }
            if (_r32 == e) break;
          }
        }
      }]);
      return et;
    }();
    function nt(t, e) {
      return (t.matches || t.msMatchesSelector || t.webkitMatchesSelector || t.mozMatchesSelector).call(t, e);
    }
    function rt(t) {
      var e = {};
      for (var _n36 in t) e[_n36] = t[_n36];
      return e;
    }
    function ot(t, e) {
      var n = e.schema.nodes;
      var _loop4 = function _loop4() {
          var o = n[_r33];
          if (!o.allowsMarkType(t)) return 0; // continue
          var i = [],
            s = function s(t) {
              i.push(t);
              for (var _n37 = 0; _n37 < t.edgeCount; _n37++) {
                var _t$edge = t.edge(_n37),
                  _r34 = _t$edge.type,
                  _o22 = _t$edge.next;
                if (_r34 == e) return !0;
                if (i.indexOf(_o22) < 0 && s(_o22)) return !0;
              }
            };
          if (s(o.contentMatch)) return {
            v: !0
          };
        },
        _ret2;
      for (var _r33 in n) {
        _ret2 = _loop4();
        if (_ret2 === 0) continue;
        if (_ret2) return _ret2.v;
      }
    }
    var it = /*#__PURE__*/function () {
      function it(t, e) {
        _classCallCheck(this, it);
        this.nodes = t, this.marks = e;
      }
      _createClass(it, [{
        key: "serializeFragment",
        value: function serializeFragment(t) {
          var _this7 = this;
          var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var n = arguments.length > 2 ? arguments[2] : undefined;
          n || (n = at(e).createDocumentFragment());
          var r = n,
            o = [];
          return t.forEach(function (t) {
            if (o.length || t.marks.length) {
              var _n38 = 0,
                _i21 = 0;
              for (; _n38 < o.length && _i21 < t.marks.length;) {
                var _e54 = t.marks[_i21];
                if (_this7.marks[_e54.type.name]) {
                  if (!_e54.eq(o[_n38][0]) || !1 === _e54.type.spec.spanning) break;
                  _n38++, _i21++;
                } else _i21++;
              }
              for (; _n38 < o.length;) r = o.pop()[1];
              for (; _i21 < t.marks.length;) {
                var _n39 = t.marks[_i21++],
                  _s14 = _this7.serializeMark(_n39, t.isInline, e);
                _s14 && (o.push([_n39, r]), r.appendChild(_s14.dom), r = _s14.contentDOM || _s14.dom);
              }
            }
            r.appendChild(_this7.serializeNodeInner(t, e));
          }), n;
        }
      }, {
        key: "serializeNodeInner",
        value: function serializeNodeInner(t, e) {
          var _it$renderSpec = it.renderSpec(at(e), this.nodes[t.type.name](t)),
            n = _it$renderSpec.dom,
            r = _it$renderSpec.contentDOM;
          if (r) {
            if (t.isLeaf) throw new RangeError("Content hole not allowed in a leaf node spec");
            this.serializeFragment(t.content, e, r);
          }
          return n;
        }
      }, {
        key: "serializeNode",
        value: function serializeNode(t) {
          var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var n = this.serializeNodeInner(t, e);
          for (var _r35 = t.marks.length - 1; _r35 >= 0; _r35--) {
            var _o23 = this.serializeMark(t.marks[_r35], t.isInline, e);
            _o23 && ((_o23.contentDOM || _o23.dom).appendChild(n), n = _o23.dom);
          }
          return n;
        }
      }, {
        key: "serializeMark",
        value: function serializeMark(t, e) {
          var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          var r = this.marks[t.type.name];
          return r && it.renderSpec(at(n), r(t, e));
        }
      }], [{
        key: "renderSpec",
        value: function renderSpec(t, e) {
          var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
          if ("string" == typeof e) return {
            dom: t.createTextNode(e)
          };
          if (null != e.nodeType) return {
            dom: e
          };
          if (e.dom && null != e.dom.nodeType) return e;
          var r,
            o = e[0],
            i = o.indexOf(" ");
          i > 0 && (n = o.slice(0, i), o = o.slice(i + 1));
          var s = n ? t.createElementNS(n, o) : t.createElement(o),
            a = e[1],
            l = 1;
          if (a && "object" == _typeof(a) && null == a.nodeType && !Array.isArray(a)) {
            l = 2;
            for (var _t38 in a) if (null != a[_t38]) {
              var _e55 = _t38.indexOf(" ");
              _e55 > 0 ? s.setAttributeNS(_t38.slice(0, _e55), _t38.slice(_e55 + 1), a[_t38]) : s.setAttribute(_t38, a[_t38]);
            }
          }
          for (var _o24 = l; _o24 < e.length; _o24++) {
            var _i22 = e[_o24];
            if (0 === _i22) {
              if (_o24 < e.length - 1 || _o24 > l) throw new RangeError("Content hole must be the only child of its parent node");
              return {
                dom: s,
                contentDOM: s
              };
            }
            {
              var _it$renderSpec2 = it.renderSpec(t, _i22, n),
                _e56 = _it$renderSpec2.dom,
                _o25 = _it$renderSpec2.contentDOM;
              if (s.appendChild(_e56), _o25) {
                if (r) throw new RangeError("Multiple content holes");
                r = _o25;
              }
            }
          }
          return {
            dom: s,
            contentDOM: r
          };
        }
      }, {
        key: "fromSchema",
        value: function fromSchema(t) {
          return t.cached.domSerializer || (t.cached.domSerializer = new it(this.nodesFromSchema(t), this.marksFromSchema(t)));
        }
      }, {
        key: "nodesFromSchema",
        value: function nodesFromSchema(t) {
          var e = st(t.nodes);
          return e.text || (e.text = function (t) {
            return t.text;
          }), e;
        }
      }, {
        key: "marksFromSchema",
        value: function marksFromSchema(t) {
          return st(t.marks);
        }
      }]);
      return it;
    }();
    function st(t) {
      var e = {};
      for (var _n40 in t) {
        var _r36 = t[_n40].spec.toDOM;
        _r36 && (e[_n40] = _r36);
      }
      return e;
    }
    function at(t) {
      return t.document || global.window.document;
    }
    var lt = Math.pow(2, 16);
    function ct(t) {
      return 65535 & t;
    }
    var ut = /*#__PURE__*/function () {
      function ut(t, e, n) {
        _classCallCheck(this, ut);
        this.pos = t, this.delInfo = e, this.recover = n;
      }
      _createClass(ut, [{
        key: "deleted",
        get: function get() {
          return (8 & this.delInfo) > 0;
        }
      }, {
        key: "deletedBefore",
        get: function get() {
          return (5 & this.delInfo) > 0;
        }
      }, {
        key: "deletedAfter",
        get: function get() {
          return (6 & this.delInfo) > 0;
        }
      }, {
        key: "deletedAcross",
        get: function get() {
          return (4 & this.delInfo) > 0;
        }
      }]);
      return ut;
    }();
    var ht = /*#__PURE__*/function () {
      function ht(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
        _classCallCheck(this, ht);
        if (this.ranges = t, this.inverted = e, !t.length && ht.empty) return ht.empty;
      }
      _createClass(ht, [{
        key: "recover",
        value: function recover(t) {
          var e = 0,
            n = ct(t);
          if (!this.inverted) for (var _t39 = 0; _t39 < n; _t39++) e += this.ranges[3 * _t39 + 2] - this.ranges[3 * _t39 + 1];
          return this.ranges[3 * n] + e + function (t) {
            return (t - (65535 & t)) / lt;
          }(t);
        }
      }, {
        key: "mapResult",
        value: function mapResult(t) {
          var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
          return this._map(t, e, !1);
        }
      }, {
        key: "map",
        value: function map(t) {
          var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
          return this._map(t, e, !0);
        }
      }, {
        key: "_map",
        value: function _map(t, e, n) {
          var r = 0,
            o = this.inverted ? 2 : 1,
            i = this.inverted ? 1 : 2;
          for (var _s15 = 0; _s15 < this.ranges.length; _s15 += 3) {
            var _a7 = this.ranges[_s15] - (this.inverted ? r : 0);
            if (_a7 > t) break;
            var _l4 = this.ranges[_s15 + o],
              _c5 = this.ranges[_s15 + i],
              _u = _a7 + _l4;
            if (t <= _u) {
              var _o26 = _a7 + r + ((_l4 ? t == _a7 ? -1 : t == _u ? 1 : e : e) < 0 ? 0 : _c5);
              if (n) return _o26;
              var _i23 = t == _a7 ? 2 : t == _u ? 1 : 4;
              return (e < 0 ? t != _a7 : t != _u) && (_i23 |= 8), new ut(_o26, _i23, t == (e < 0 ? _a7 : _u) ? null : _s15 / 3 + (t - _a7) * lt);
            }
            r += _c5 - _l4;
          }
          return n ? t + r : new ut(t + r, 0, null);
        }
      }, {
        key: "touches",
        value: function touches(t, e) {
          var n = 0,
            r = ct(e),
            o = this.inverted ? 2 : 1,
            i = this.inverted ? 1 : 2;
          for (var _e57 = 0; _e57 < this.ranges.length; _e57 += 3) {
            var _s16 = this.ranges[_e57] - (this.inverted ? n : 0);
            if (_s16 > t) break;
            var _a8 = this.ranges[_e57 + o];
            if (t <= _s16 + _a8 && _e57 == 3 * r) return !0;
            n += this.ranges[_e57 + i] - _a8;
          }
          return !1;
        }
      }, {
        key: "forEach",
        value: function forEach(t) {
          var e = this.inverted ? 2 : 1,
            n = this.inverted ? 1 : 2;
          for (var _r37 = 0, _o27 = 0; _r37 < this.ranges.length; _r37 += 3) {
            var _i24 = this.ranges[_r37],
              _s17 = _i24 - (this.inverted ? _o27 : 0),
              _a9 = _i24 + (this.inverted ? 0 : _o27),
              _l5 = this.ranges[_r37 + e],
              _c6 = this.ranges[_r37 + n];
            t(_s17, _s17 + _l5, _a9, _a9 + _c6), _o27 += _c6 - _l5;
          }
        }
      }, {
        key: "invert",
        value: function invert() {
          return new ht(this.ranges, !this.inverted);
        }
      }, {
        key: "toString",
        value: function toString() {
          return (this.inverted ? "-" : "") + JSON.stringify(this.ranges);
        }
      }], [{
        key: "offset",
        value: function offset(t) {
          return 0 == t ? ht.empty : new ht(t < 0 ? [0, -t, 0] : [0, 0, t]);
        }
      }]);
      return ht;
    }();
    ht.empty = new ht([]);
    var dt = /*#__PURE__*/function () {
      function dt() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var e = arguments.length > 1 ? arguments[1] : undefined;
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : t.length;
        _classCallCheck(this, dt);
        this.maps = t, this.mirror = e, this.from = n, this.to = r;
      }
      _createClass(dt, [{
        key: "slice",
        value: function slice() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.maps.length;
          return new dt(this.maps, this.mirror, t, e);
        }
      }, {
        key: "copy",
        value: function copy() {
          return new dt(this.maps.slice(), this.mirror && this.mirror.slice(), this.from, this.to);
        }
      }, {
        key: "appendMap",
        value: function appendMap(t, e) {
          this.to = this.maps.push(t), null != e && this.setMirror(this.maps.length - 1, e);
        }
      }, {
        key: "appendMapping",
        value: function appendMapping(t) {
          for (var _e58 = 0, _n41 = this.maps.length; _e58 < t.maps.length; _e58++) {
            var _r38 = t.getMirror(_e58);
            this.appendMap(t.maps[_e58], null != _r38 && _r38 < _e58 ? _n41 + _r38 : void 0);
          }
        }
      }, {
        key: "getMirror",
        value: function getMirror(t) {
          if (this.mirror) for (var _e59 = 0; _e59 < this.mirror.length; _e59++) if (this.mirror[_e59] == t) return this.mirror[_e59 + (_e59 % 2 ? -1 : 1)];
        }
      }, {
        key: "setMirror",
        value: function setMirror(t, e) {
          this.mirror || (this.mirror = []), this.mirror.push(t, e);
        }
      }, {
        key: "appendMappingInverted",
        value: function appendMappingInverted(t) {
          for (var _e60 = t.maps.length - 1, _n42 = this.maps.length + t.maps.length; _e60 >= 0; _e60--) {
            var _r39 = t.getMirror(_e60);
            this.appendMap(t.maps[_e60].invert(), null != _r39 && _r39 > _e60 ? _n42 - _r39 - 1 : void 0);
          }
        }
      }, {
        key: "invert",
        value: function invert() {
          var t = new dt();
          return t.appendMappingInverted(this), t;
        }
      }, {
        key: "map",
        value: function map(t) {
          var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
          if (this.mirror) return this._map(t, e, !0);
          for (var _n43 = this.from; _n43 < this.to; _n43++) t = this.maps[_n43].map(t, e);
          return t;
        }
      }, {
        key: "mapResult",
        value: function mapResult(t) {
          var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
          return this._map(t, e, !1);
        }
      }, {
        key: "_map",
        value: function _map(t, e, n) {
          var r = 0;
          for (var _n44 = this.from; _n44 < this.to; _n44++) {
            var _o28 = this.maps[_n44].mapResult(t, e);
            if (null != _o28.recover) {
              var _e61 = this.getMirror(_n44);
              if (null != _e61 && _e61 > _n44 && _e61 < this.to) {
                _n44 = _e61, t = this.maps[_e61].recover(_o28.recover);
                continue;
              }
            }
            r |= _o28.delInfo, t = _o28.pos;
          }
          return n ? t : new ut(t, r, null);
        }
      }]);
      return dt;
    }();
    var pt = Object.create(null);
    var ft = /*#__PURE__*/function () {
      function ft() {
        _classCallCheck(this, ft);
      }
      _createClass(ft, [{
        key: "getMap",
        value: function getMap() {
          return ht.empty;
        }
      }, {
        key: "merge",
        value: function merge(t) {
          return null;
        }
      }], [{
        key: "fromJSON",
        value: function fromJSON(t, e) {
          if (!e || !e.stepType) throw new RangeError("Invalid input for Step.fromJSON");
          var n = pt[e.stepType];
          if (!n) throw new RangeError("No step type ".concat(e.stepType, " defined"));
          return n.fromJSON(t, e);
        }
      }, {
        key: "jsonID",
        value: function jsonID(t, e) {
          if (t in pt) throw new RangeError("Duplicate use of step JSON ID " + t);
          return pt[t] = e, e.prototype.jsonID = t, e;
        }
      }]);
      return ft;
    }();
    var mt = /*#__PURE__*/function () {
      function mt(t, e) {
        _classCallCheck(this, mt);
        this.doc = t, this.failed = e;
      }
      _createClass(mt, null, [{
        key: "ok",
        value: function ok(t) {
          return new mt(t, null);
        }
      }, {
        key: "fail",
        value: function fail(t) {
          return new mt(null, t);
        }
      }, {
        key: "fromReplace",
        value: function fromReplace(t, e, n, r) {
          try {
            return mt.ok(t.replace(e, n, r));
          } catch (t) {
            if (t instanceof u) return mt.fail(t.message);
            throw t;
          }
        }
      }]);
      return mt;
    }();
    function gt(t, e, n) {
      var r = [];
      for (var _o29 = 0; _o29 < t.childCount; _o29++) {
        var _i25 = t.child(_o29);
        _i25.content.size && (_i25 = _i25.copy(gt(_i25.content, e, _i25))), _i25.isInline && (_i25 = e(_i25, n, _o29)), r.push(_i25);
      }
      return i.fromArray(r);
    }
    var yt = /*#__PURE__*/function (_ft) {
      _inherits(yt, _ft);
      function yt(t, e, n) {
        var _this8;
        _classCallCheck(this, yt);
        _this8 = _callSuper(this, yt), _this8.from = t, _this8.to = e, _this8.mark = n;
        return _this8;
      }
      _createClass(yt, [{
        key: "apply",
        value: function apply(t) {
          var _this9 = this;
          var e = t.slice(this.from, this.to),
            n = t.resolve(this.from),
            r = n.node(n.sharedDepth(this.to)),
            o = new h(gt(e.content, function (t, e) {
              return t.isAtom && e.type.allowsMarkType(_this9.mark.type) ? t.mark(_this9.mark.addToSet(t.marks)) : t;
            }, r), e.openStart, e.openEnd);
          return mt.fromReplace(t, this.from, this.to, o);
        }
      }, {
        key: "invert",
        value: function invert() {
          return new vt(this.from, this.to, this.mark);
        }
      }, {
        key: "map",
        value: function map(t) {
          var e = t.mapResult(this.from, 1),
            n = t.mapResult(this.to, -1);
          return e.deleted && n.deleted || e.pos >= n.pos ? null : new yt(e.pos, n.pos, this.mark);
        }
      }, {
        key: "merge",
        value: function merge(t) {
          return t instanceof yt && t.mark.eq(this.mark) && this.from <= t.to && this.to >= t.from ? new yt(Math.min(this.from, t.from), Math.max(this.to, t.to), this.mark) : null;
        }
      }, {
        key: "toJSON",
        value: function toJSON() {
          return {
            stepType: "addMark",
            mark: this.mark.toJSON(),
            from: this.from,
            to: this.to
          };
        }
      }], [{
        key: "fromJSON",
        value: function fromJSON(t, e) {
          if ("number" != typeof e.from || "number" != typeof e.to) throw new RangeError("Invalid input for AddMarkStep.fromJSON");
          return new yt(e.from, e.to, t.markFromJSON(e.mark));
        }
      }]);
      return yt;
    }(ft);
    ft.jsonID("addMark", yt);
    var vt = /*#__PURE__*/function (_ft2) {
      _inherits(vt, _ft2);
      function vt(t, e, n) {
        var _this10;
        _classCallCheck(this, vt);
        _this10 = _callSuper(this, vt), _this10.from = t, _this10.to = e, _this10.mark = n;
        return _this10;
      }
      _createClass(vt, [{
        key: "apply",
        value: function apply(t) {
          var _this11 = this;
          var e = t.slice(this.from, this.to),
            n = new h(gt(e.content, function (t) {
              return t.mark(_this11.mark.removeFromSet(t.marks));
            }, t), e.openStart, e.openEnd);
          return mt.fromReplace(t, this.from, this.to, n);
        }
      }, {
        key: "invert",
        value: function invert() {
          return new yt(this.from, this.to, this.mark);
        }
      }, {
        key: "map",
        value: function map(t) {
          var e = t.mapResult(this.from, 1),
            n = t.mapResult(this.to, -1);
          return e.deleted && n.deleted || e.pos >= n.pos ? null : new vt(e.pos, n.pos, this.mark);
        }
      }, {
        key: "merge",
        value: function merge(t) {
          return t instanceof vt && t.mark.eq(this.mark) && this.from <= t.to && this.to >= t.from ? new vt(Math.min(this.from, t.from), Math.max(this.to, t.to), this.mark) : null;
        }
      }, {
        key: "toJSON",
        value: function toJSON() {
          return {
            stepType: "removeMark",
            mark: this.mark.toJSON(),
            from: this.from,
            to: this.to
          };
        }
      }], [{
        key: "fromJSON",
        value: function fromJSON(t, e) {
          if ("number" != typeof e.from || "number" != typeof e.to) throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");
          return new vt(e.from, e.to, t.markFromJSON(e.mark));
        }
      }]);
      return vt;
    }(ft);
    ft.jsonID("removeMark", vt);
    var bt = /*#__PURE__*/function (_ft3) {
      _inherits(bt, _ft3);
      function bt(t, e) {
        var _this12;
        _classCallCheck(this, bt);
        _this12 = _callSuper(this, bt), _this12.pos = t, _this12.mark = e;
        return _this12;
      }
      _createClass(bt, [{
        key: "apply",
        value: function apply(t) {
          var e = t.nodeAt(this.pos);
          if (!e) return mt.fail("No node at mark step's position");
          var n = e.type.create(e.attrs, null, this.mark.addToSet(e.marks));
          return mt.fromReplace(t, this.pos, this.pos + 1, new h(i.from(n), 0, e.isLeaf ? 0 : 1));
        }
      }, {
        key: "invert",
        value: function invert(t) {
          var e = t.nodeAt(this.pos);
          if (e) {
            var _t40 = this.mark.addToSet(e.marks);
            if (_t40.length == e.marks.length) {
              for (var _n45 = 0; _n45 < e.marks.length; _n45++) if (!e.marks[_n45].isInSet(_t40)) return new bt(this.pos, e.marks[_n45]);
              return new bt(this.pos, this.mark);
            }
          }
          return new wt(this.pos, this.mark);
        }
      }, {
        key: "map",
        value: function map(t) {
          var e = t.mapResult(this.pos, 1);
          return e.deletedAfter ? null : new bt(e.pos, this.mark);
        }
      }, {
        key: "toJSON",
        value: function toJSON() {
          return {
            stepType: "addNodeMark",
            pos: this.pos,
            mark: this.mark.toJSON()
          };
        }
      }], [{
        key: "fromJSON",
        value: function fromJSON(t, e) {
          if ("number" != typeof e.pos) throw new RangeError("Invalid input for AddNodeMarkStep.fromJSON");
          return new bt(e.pos, t.markFromJSON(e.mark));
        }
      }]);
      return bt;
    }(ft);
    ft.jsonID("addNodeMark", bt);
    var wt = /*#__PURE__*/function (_ft4) {
      _inherits(wt, _ft4);
      function wt(t, e) {
        var _this13;
        _classCallCheck(this, wt);
        _this13 = _callSuper(this, wt), _this13.pos = t, _this13.mark = e;
        return _this13;
      }
      _createClass(wt, [{
        key: "apply",
        value: function apply(t) {
          var e = t.nodeAt(this.pos);
          if (!e) return mt.fail("No node at mark step's position");
          var n = e.type.create(e.attrs, null, this.mark.removeFromSet(e.marks));
          return mt.fromReplace(t, this.pos, this.pos + 1, new h(i.from(n), 0, e.isLeaf ? 0 : 1));
        }
      }, {
        key: "invert",
        value: function invert(t) {
          var e = t.nodeAt(this.pos);
          return e && this.mark.isInSet(e.marks) ? new bt(this.pos, this.mark) : this;
        }
      }, {
        key: "map",
        value: function map(t) {
          var e = t.mapResult(this.pos, 1);
          return e.deletedAfter ? null : new wt(e.pos, this.mark);
        }
      }, {
        key: "toJSON",
        value: function toJSON() {
          return {
            stepType: "removeNodeMark",
            pos: this.pos,
            mark: this.mark.toJSON()
          };
        }
      }], [{
        key: "fromJSON",
        value: function fromJSON(t, e) {
          if ("number" != typeof e.pos) throw new RangeError("Invalid input for RemoveNodeMarkStep.fromJSON");
          return new wt(e.pos, t.markFromJSON(e.mark));
        }
      }]);
      return wt;
    }(ft);
    ft.jsonID("removeNodeMark", wt);
    var xt = /*#__PURE__*/function (_ft5) {
      _inherits(xt, _ft5);
      function xt(t, e, n) {
        var _this14;
        var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
        _classCallCheck(this, xt);
        _this14 = _callSuper(this, xt), _this14.from = t, _this14.to = e, _this14.slice = n, _this14.structure = r;
        return _this14;
      }
      _createClass(xt, [{
        key: "apply",
        value: function apply(t) {
          return this.structure && St(t, this.from, this.to) ? mt.fail("Structure replace would overwrite content") : mt.fromReplace(t, this.from, this.to, this.slice);
        }
      }, {
        key: "getMap",
        value: function getMap() {
          return new ht([this.from, this.to - this.from, this.slice.size]);
        }
      }, {
        key: "invert",
        value: function invert(t) {
          return new xt(this.from, this.from + this.slice.size, t.slice(this.from, this.to));
        }
      }, {
        key: "map",
        value: function map(t) {
          var e = t.mapResult(this.from, 1),
            n = t.mapResult(this.to, -1);
          return e.deletedAcross && n.deletedAcross ? null : new xt(e.pos, Math.max(e.pos, n.pos), this.slice);
        }
      }, {
        key: "merge",
        value: function merge(t) {
          if (!(t instanceof xt) || t.structure || this.structure) return null;
          if (this.from + this.slice.size != t.from || this.slice.openEnd || t.slice.openStart) {
            if (t.to != this.from || this.slice.openStart || t.slice.openEnd) return null;
            {
              var _e62 = this.slice.size + t.slice.size == 0 ? h.empty : new h(t.slice.content.append(this.slice.content), t.slice.openStart, this.slice.openEnd);
              return new xt(t.from, this.to, _e62, this.structure);
            }
          }
          {
            var _e63 = this.slice.size + t.slice.size == 0 ? h.empty : new h(this.slice.content.append(t.slice.content), this.slice.openStart, t.slice.openEnd);
            return new xt(this.from, this.to + (t.to - t.from), _e63, this.structure);
          }
        }
      }, {
        key: "toJSON",
        value: function toJSON() {
          var t = {
            stepType: "replace",
            from: this.from,
            to: this.to
          };
          return this.slice.size && (t.slice = this.slice.toJSON()), this.structure && (t.structure = !0), t;
        }
      }], [{
        key: "fromJSON",
        value: function fromJSON(t, e) {
          if ("number" != typeof e.from || "number" != typeof e.to) throw new RangeError("Invalid input for ReplaceStep.fromJSON");
          return new xt(e.from, e.to, h.fromJSON(t, e.slice), !!e.structure);
        }
      }]);
      return xt;
    }(ft);
    ft.jsonID("replace", xt);
    var kt = /*#__PURE__*/function (_ft6) {
      _inherits(kt, _ft6);
      function kt(t, e, n, r, o, i) {
        var _this15;
        var s = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : !1;
        _classCallCheck(this, kt);
        _this15 = _callSuper(this, kt), _this15.from = t, _this15.to = e, _this15.gapFrom = n, _this15.gapTo = r, _this15.slice = o, _this15.insert = i, _this15.structure = s;
        return _this15;
      }
      _createClass(kt, [{
        key: "apply",
        value: function apply(t) {
          if (this.structure && (St(t, this.from, this.gapFrom) || St(t, this.gapTo, this.to))) return mt.fail("Structure gap-replace would overwrite content");
          var e = t.slice(this.gapFrom, this.gapTo);
          if (e.openStart || e.openEnd) return mt.fail("Gap is not a flat range");
          var n = this.slice.insertAt(this.insert, e.content);
          return n ? mt.fromReplace(t, this.from, this.to, n) : mt.fail("Content does not fit in gap");
        }
      }, {
        key: "getMap",
        value: function getMap() {
          return new ht([this.from, this.gapFrom - this.from, this.insert, this.gapTo, this.to - this.gapTo, this.slice.size - this.insert]);
        }
      }, {
        key: "invert",
        value: function invert(t) {
          var e = this.gapTo - this.gapFrom;
          return new kt(this.from, this.from + this.slice.size + e, this.from + this.insert, this.from + this.insert + e, t.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from), this.gapFrom - this.from, this.structure);
        }
      }, {
        key: "map",
        value: function map(t) {
          var e = t.mapResult(this.from, 1),
            n = t.mapResult(this.to, -1),
            r = t.map(this.gapFrom, -1),
            o = t.map(this.gapTo, 1);
          return e.deletedAcross && n.deletedAcross || r < e.pos || o > n.pos ? null : new kt(e.pos, n.pos, r, o, this.slice, this.insert, this.structure);
        }
      }, {
        key: "toJSON",
        value: function toJSON() {
          var t = {
            stepType: "replaceAround",
            from: this.from,
            to: this.to,
            gapFrom: this.gapFrom,
            gapTo: this.gapTo,
            insert: this.insert
          };
          return this.slice.size && (t.slice = this.slice.toJSON()), this.structure && (t.structure = !0), t;
        }
      }], [{
        key: "fromJSON",
        value: function fromJSON(t, e) {
          if ("number" != typeof e.from || "number" != typeof e.to || "number" != typeof e.gapFrom || "number" != typeof e.gapTo || "number" != typeof e.insert) throw new RangeError("Invalid input for ReplaceAroundStep.fromJSON");
          return new kt(e.from, e.to, e.gapFrom, e.gapTo, h.fromJSON(t, e.slice), e.insert, !!e.structure);
        }
      }]);
      return kt;
    }(ft);
    function St(t, e, n) {
      var r = t.resolve(e),
        o = n - e,
        i = r.depth;
      for (; o > 0 && i > 0 && r.indexAfter(i) == r.node(i).childCount;) i--, o--;
      if (o > 0) {
        var _t41 = r.node(i).maybeChild(r.indexAfter(i));
        for (; o > 0;) {
          if (!_t41 || _t41.isLeaf) return !0;
          _t41 = _t41.firstChild, o--;
        }
      }
      return !1;
    }
    function Mt(t, e, n) {
      return (0 == e || t.canReplace(e, t.childCount)) && (n == t.childCount || t.canReplace(0, n));
    }
    function Ot(t) {
      var e = t.parent.content.cutByIndex(t.startIndex, t.endIndex);
      for (var _n46 = t.depth;; --_n46) {
        var _r40 = t.$from.node(_n46),
          _o30 = t.$from.index(_n46),
          _i26 = t.$to.indexAfter(_n46);
        if (_n46 < t.depth && _r40.canReplace(_o30, _i26, e)) return _n46;
        if (0 == _n46 || _r40.type.spec.isolating || !Mt(_r40, _o30, _i26)) break;
      }
      return null;
    }
    function Tt(t, e) {
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : t;
      var o = function (t, e) {
          var n = t.parent,
            r = t.startIndex,
            o = t.endIndex,
            i = n.contentMatchAt(r).findWrapping(e);
          if (!i) return null;
          var s = i.length ? i[0] : e;
          return n.canReplaceWith(r, o, s) ? i : null;
        }(t, e),
        i = o && function (t, e) {
          var n = t.parent,
            r = t.startIndex,
            o = t.endIndex,
            i = n.child(r),
            s = e.contentMatch.findWrapping(i.type);
          if (!s) return null;
          var a = (s.length ? s[s.length - 1] : e).contentMatch;
          for (var _t42 = r; a && _t42 < o; _t42++) a = a.matchType(n.child(_t42).type);
          return a && a.validEnd ? s : null;
        }(r, e);
      return i ? o.map(Ct).concat({
        type: e,
        attrs: n
      }).concat(i.map(Ct)) : null;
    }
    function Ct(t) {
      return {
        type: t,
        attrs: null
      };
    }
    function Et(t, e) {
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var r = arguments.length > 3 ? arguments[3] : undefined;
      var o = t.resolve(e),
        i = o.depth - n,
        s = r && r[r.length - 1] || o.parent;
      if (i < 0 || o.parent.type.spec.isolating || !o.parent.canReplace(o.index(), o.parent.childCount) || !s.type.validContent(o.parent.content.cutByIndex(o.index(), o.parent.childCount))) return !1;
      for (var _t43 = o.depth - 1, _e64 = n - 2; _t43 > i; _t43--, _e64--) {
        var _n47 = o.node(_t43),
          _i27 = o.index(_t43);
        if (_n47.type.spec.isolating) return !1;
        var _s18 = _n47.content.cutByIndex(_i27, _n47.childCount),
          _a10 = r && r[_e64 + 1];
        _a10 && (_s18 = _s18.replaceChild(0, _a10.type.create(_a10.attrs)));
        var _l6 = r && r[_e64] || _n47;
        if (!_n47.canReplace(_i27 + 1, _n47.childCount) || !_l6.type.validContent(_s18)) return !1;
      }
      var a = o.indexAfter(i),
        l = r && r[0];
      return o.node(i).canReplaceWith(a, a, l ? l.type : o.node(i + 1).type);
    }
    function At(t, e) {
      var n = t.resolve(e),
        r = n.index();
      return Nt(n.nodeBefore, n.nodeAfter) && n.parent.canReplace(r, r + 1);
    }
    function Nt(t, e) {
      return !(!t || !e || t.isLeaf || !t.canAppend(e));
    }
    function Dt(t, e) {
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;
      var r = t.resolve(e);
      for (var _t44 = r.depth;; _t44--) {
        var _o31 = void 0,
          _i28 = void 0,
          _s19 = r.index(_t44);
        if (_t44 == r.depth ? (_o31 = r.nodeBefore, _i28 = r.nodeAfter) : n > 0 ? (_o31 = r.node(_t44 + 1), _s19++, _i28 = r.node(_t44).maybeChild(_s19)) : (_o31 = r.node(_t44).maybeChild(_s19 - 1), _i28 = r.node(_t44 + 1)), _o31 && !_o31.isTextblock && Nt(_o31, _i28) && r.node(_t44).canReplace(_s19, _s19 + 1)) return e;
        if (0 == _t44) break;
        e = n < 0 ? r.before(_t44) : r.after(_t44);
      }
    }
    function Rt(t, e, n) {
      var r = t.resolve(e);
      if (!n.content.size) return e;
      var o = n.content;
      for (var _t45 = 0; _t45 < n.openStart; _t45++) o = o.firstChild.content;
      for (var _t46 = 1; _t46 <= (0 == n.openStart && n.size ? 2 : 1); _t46++) for (var _e65 = r.depth; _e65 >= 0; _e65--) {
        var _n48 = _e65 == r.depth ? 0 : r.pos <= (r.start(_e65 + 1) + r.end(_e65 + 1)) / 2 ? -1 : 1,
          _i29 = r.index(_e65) + (_n48 > 0 ? 1 : 0),
          _s20 = r.node(_e65),
          _a11 = !1;
        if (1 == _t46) _a11 = _s20.canReplace(_i29, _i29, o);else {
          var _t47 = _s20.contentMatchAt(_i29).findWrapping(o.firstChild.type);
          _a11 = _t47 && _s20.canReplaceWith(_i29, _i29, _t47[0]);
        }
        if (_a11) return 0 == _n48 ? r.pos : _n48 < 0 ? r.before(_e65 + 1) : r.after(_e65 + 1);
      }
      return null;
    }
    function It(t, e) {
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : e;
      var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : h.empty;
      if (e == n && !r.size) return null;
      var o = t.resolve(e),
        i = t.resolve(n);
      return Pt(o, i, r) ? new xt(e, n, r) : new Lt(o, i, r).fit();
    }
    function Pt(t, e, n) {
      return !n.openStart && !n.openEnd && t.start() == e.start() && t.parent.canReplace(t.index(), e.index(), n.content);
    }
    ft.jsonID("replaceAround", kt);
    var Lt = /*#__PURE__*/function () {
      function Lt(t, e, n) {
        _classCallCheck(this, Lt);
        this.$from = t, this.$to = e, this.unplaced = n, this.frontier = [], this.placed = i.empty;
        for (var _e66 = 0; _e66 <= t.depth; _e66++) {
          var _n49 = t.node(_e66);
          this.frontier.push({
            type: _n49.type,
            match: _n49.contentMatchAt(t.indexAfter(_e66))
          });
        }
        for (var _e67 = t.depth; _e67 > 0; _e67--) this.placed = i.from(t.node(_e67).copy(this.placed));
      }
      _createClass(Lt, [{
        key: "depth",
        get: function get() {
          return this.frontier.length - 1;
        }
      }, {
        key: "fit",
        value: function fit() {
          for (; this.unplaced.size;) {
            var _t48 = this.findFittable();
            _t48 ? this.placeNodes(_t48) : this.openMore() || this.dropNode();
          }
          var t = this.mustMoveInline(),
            e = this.placed.size - this.depth - this.$from.depth,
            n = this.$from,
            r = this.close(t < 0 ? this.$to : n.doc.resolve(t));
          if (!r) return null;
          var o = this.placed,
            i = n.depth,
            s = r.depth;
          for (; i && s && 1 == o.childCount;) o = o.firstChild.content, i--, s--;
          var a = new h(o, i, s);
          return t > -1 ? new kt(n.pos, t, this.$to.pos, this.$to.end(), a, e) : a.size || n.pos != this.$to.pos ? new xt(n.pos, r.pos, a) : null;
        }
      }, {
        key: "findFittable",
        value: function findFittable() {
          var t = this.unplaced.openStart;
          for (var _e68 = this.unplaced.content, _n50 = 0, _r41 = this.unplaced.openEnd; _n50 < t; _n50++) {
            var _o32 = _e68.firstChild;
            if (_e68.childCount > 1 && (_r41 = 0), _o32.type.spec.isolating && _r41 <= _n50) {
              t = _n50;
              break;
            }
            _e68 = _o32.content;
          }
          for (var _e69 = 1; _e69 <= 2; _e69++) for (var _n51 = 1 == _e69 ? t : this.unplaced.openStart; _n51 >= 0; _n51--) {
            var _t49 = void 0,
              _r42 = null;
            _n51 ? (_r42 = zt(this.unplaced.content, _n51 - 1).firstChild, _t49 = _r42.content) : _t49 = this.unplaced.content;
            var _o33 = _t49.firstChild;
            for (var _t50 = this.depth; _t50 >= 0; _t50--) {
              var _s21 = void 0,
                _this$frontier$_t = this.frontier[_t50],
                _a12 = _this$frontier$_t.type,
                _l7 = _this$frontier$_t.match,
                _c7 = null;
              if (1 == _e69 && (_o33 ? _l7.matchType(_o33.type) || (_c7 = _l7.fillBefore(i.from(_o33), !1)) : _r42 && _a12.compatibleContent(_r42.type))) return {
                sliceDepth: _n51,
                frontierDepth: _t50,
                parent: _r42,
                inject: _c7
              };
              if (2 == _e69 && _o33 && (_s21 = _l7.findWrapping(_o33.type))) return {
                sliceDepth: _n51,
                frontierDepth: _t50,
                parent: _r42,
                wrap: _s21
              };
              if (_r42 && _l7.matchType(_r42.type)) break;
            }
          }
        }
      }, {
        key: "openMore",
        value: function openMore() {
          var _this$unplaced = this.unplaced,
            t = _this$unplaced.content,
            e = _this$unplaced.openStart,
            n = _this$unplaced.openEnd,
            r = zt(t, e);
          return !(!r.childCount || r.firstChild.isLeaf || (this.unplaced = new h(t, e + 1, Math.max(n, r.size + e >= t.size - n ? e + 1 : 0)), 0));
        }
      }, {
        key: "dropNode",
        value: function dropNode() {
          var _this$unplaced2 = this.unplaced,
            t = _this$unplaced2.content,
            e = _this$unplaced2.openStart,
            n = _this$unplaced2.openEnd,
            r = zt(t, e);
          if (r.childCount <= 1 && e > 0) {
            var _o34 = t.size - e <= e + r.size;
            this.unplaced = new h(Ft(t, e - 1, 1), e - 1, _o34 ? e - 1 : n);
          } else this.unplaced = new h(Ft(t, e, 1), e, n);
        }
      }, {
        key: "placeNodes",
        value: function placeNodes(_ref3) {
          var t = _ref3.sliceDepth,
            e = _ref3.frontierDepth,
            n = _ref3.parent,
            r = _ref3.inject,
            o = _ref3.wrap;
          for (; this.depth > e;) this.closeFrontierNode();
          if (o) for (var _t51 = 0; _t51 < o.length; _t51++) this.openFrontierNode(o[_t51]);
          var s = this.unplaced,
            a = n ? n.content : s.content,
            l = s.openStart - t,
            c = 0,
            u = [],
            _this$frontier$e = this.frontier[e],
            d = _this$frontier$e.match,
            p = _this$frontier$e.type;
          if (r) {
            for (var _t52 = 0; _t52 < r.childCount; _t52++) u.push(r.child(_t52));
            d = d.matchFragment(r);
          }
          var f = a.size + t - (s.content.size - s.openEnd);
          for (; c < a.childCount;) {
            var _t53 = a.child(c),
              _e70 = d.matchType(_t53.type);
            if (!_e70) break;
            c++, (c > 1 || 0 == l || _t53.content.size) && (d = _e70, u.push(jt(_t53.mark(p.allowedMarks(_t53.marks)), 1 == c ? l : 0, c == a.childCount ? f : -1)));
          }
          var m = c == a.childCount;
          m || (f = -1), this.placed = Bt(this.placed, e, i.from(u)), this.frontier[e].match = d, m && f < 0 && n && n.type == this.frontier[this.depth].type && this.frontier.length > 1 && this.closeFrontierNode();
          for (var _t54 = 0, _e71 = a; _t54 < f; _t54++) {
            var _t55 = _e71.lastChild;
            this.frontier.push({
              type: _t55.type,
              match: _t55.contentMatchAt(_t55.childCount)
            }), _e71 = _t55.content;
          }
          this.unplaced = m ? 0 == t ? h.empty : new h(Ft(s.content, t - 1, 1), t - 1, f < 0 ? s.openEnd : t - 1) : new h(Ft(s.content, t, c), s.openStart, s.openEnd);
        }
      }, {
        key: "mustMoveInline",
        value: function mustMoveInline() {
          if (!this.$to.parent.isTextblock) return -1;
          var t,
            e = this.frontier[this.depth];
          if (!e.type.isTextblock || !$t(this.$to, this.$to.depth, e.type, e.match, !1) || this.$to.depth == this.depth && (t = this.findCloseLevel(this.$to)) && t.depth == this.depth) return -1;
          var n = this.$to.depth,
            r = this.$to.after(n);
          for (; n > 1 && r == this.$to.end(--n);) ++r;
          return r;
        }
      }, {
        key: "findCloseLevel",
        value: function findCloseLevel(t) {
          t: for (var _e72 = Math.min(this.depth, t.depth); _e72 >= 0; _e72--) {
            var _this$frontier$_e = this.frontier[_e72],
              _n52 = _this$frontier$_e.match,
              _r43 = _this$frontier$_e.type,
              _o35 = _e72 < t.depth && t.end(_e72 + 1) == t.pos + (t.depth - (_e72 + 1)),
              _i30 = $t(t, _e72, _r43, _n52, _o35);
            if (_i30) {
              for (var _n53 = _e72 - 1; _n53 >= 0; _n53--) {
                var _this$frontier$_n = this.frontier[_n53],
                  _e73 = _this$frontier$_n.match,
                  _r44 = _this$frontier$_n.type,
                  _o36 = $t(t, _n53, _r44, _e73, !0);
                if (!_o36 || _o36.childCount) continue t;
              }
              return {
                depth: _e72,
                fit: _i30,
                move: _o35 ? t.doc.resolve(t.after(_e72 + 1)) : t
              };
            }
          }
        }
      }, {
        key: "close",
        value: function close(t) {
          var e = this.findCloseLevel(t);
          if (!e) return null;
          for (; this.depth > e.depth;) this.closeFrontierNode();
          e.fit.childCount && (this.placed = Bt(this.placed, e.depth, e.fit)), t = e.move;
          for (var _n54 = e.depth + 1; _n54 <= t.depth; _n54++) {
            var _e74 = t.node(_n54),
              _r45 = _e74.type.contentMatch.fillBefore(_e74.content, !0, t.index(_n54));
            this.openFrontierNode(_e74.type, _e74.attrs, _r45);
          }
          return t;
        }
      }, {
        key: "openFrontierNode",
        value: function openFrontierNode(t) {
          var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          var n = arguments.length > 2 ? arguments[2] : undefined;
          var r = this.frontier[this.depth];
          r.match = r.match.matchType(t), this.placed = Bt(this.placed, this.depth, i.from(t.create(e, n))), this.frontier.push({
            type: t,
            match: t.contentMatch
          });
        }
      }, {
        key: "closeFrontierNode",
        value: function closeFrontierNode() {
          var t = this.frontier.pop().match.fillBefore(i.empty, !0);
          t.childCount && (this.placed = Bt(this.placed, this.frontier.length, t));
        }
      }]);
      return Lt;
    }();
    function Ft(t, e, n) {
      return 0 == e ? t.cutByIndex(n, t.childCount) : t.replaceChild(0, t.firstChild.copy(Ft(t.firstChild.content, e - 1, n)));
    }
    function Bt(t, e, n) {
      return 0 == e ? t.append(n) : t.replaceChild(t.childCount - 1, t.lastChild.copy(Bt(t.lastChild.content, e - 1, n)));
    }
    function zt(t, e) {
      for (var _n55 = 0; _n55 < e; _n55++) t = t.firstChild.content;
      return t;
    }
    function jt(t, e, n) {
      if (e <= 0) return t;
      var r = t.content;
      return e > 1 && (r = r.replaceChild(0, jt(r.firstChild, e - 1, 1 == r.childCount ? n - 1 : 0))), e > 0 && (r = t.type.contentMatch.fillBefore(r).append(r), n <= 0 && (r = r.append(t.type.contentMatch.matchFragment(r).fillBefore(i.empty, !0)))), t.copy(r);
    }
    function $t(t, e, n, r, o) {
      var i = t.node(e),
        s = o ? t.indexAfter(e) : t.index(e);
      if (s == i.childCount && !n.compatibleContent(i.type)) return null;
      var a = r.fillBefore(i.content, !0, s);
      return a && !function (t, e, n) {
        for (var _r46 = n; _r46 < e.childCount; _r46++) if (!t.allowsMarks(e.child(_r46).marks)) return !0;
        return !1;
      }(n, i.content, s) ? a : null;
    }
    function _t(t, e, n, r, o) {
      if (e < n) {
        var _o37 = t.firstChild;
        t = t.replaceChild(0, _o37.copy(_t(_o37.content, e + 1, n, r, _o37)));
      }
      if (e > r) {
        var _e75 = o.contentMatchAt(0),
          _n56 = _e75.fillBefore(t).append(t);
        t = _n56.append(_e75.matchFragment(_n56).fillBefore(i.empty, !0));
      }
      return t;
    }
    function Ht(t, e) {
      var n = [];
      for (var _r47 = Math.min(t.depth, e.depth); _r47 >= 0; _r47--) {
        var _o38 = t.start(_r47);
        if (_o38 < t.pos - (t.depth - _r47) || e.end(_r47) > e.pos + (e.depth - _r47) || t.node(_r47).type.spec.isolating || e.node(_r47).type.spec.isolating) break;
        (_o38 == e.start(_r47) || _r47 == t.depth && _r47 == e.depth && t.parent.inlineContent && e.parent.inlineContent && _r47 && e.start(_r47 - 1) == _o38 - 1) && n.push(_r47);
      }
      return n;
    }
    var Vt = /*#__PURE__*/function (_ft7) {
      _inherits(Vt, _ft7);
      function Vt(t, e, n) {
        var _this16;
        _classCallCheck(this, Vt);
        _this16 = _callSuper(this, Vt), _this16.pos = t, _this16.attr = e, _this16.value = n;
        return _this16;
      }
      _createClass(Vt, [{
        key: "apply",
        value: function apply(t) {
          var e = t.nodeAt(this.pos);
          if (!e) return mt.fail("No node at attribute step's position");
          var n = Object.create(null);
          for (var _t56 in e.attrs) n[_t56] = e.attrs[_t56];
          n[this.attr] = this.value;
          var r = e.type.create(n, null, e.marks);
          return mt.fromReplace(t, this.pos, this.pos + 1, new h(i.from(r), 0, e.isLeaf ? 0 : 1));
        }
      }, {
        key: "getMap",
        value: function getMap() {
          return ht.empty;
        }
      }, {
        key: "invert",
        value: function invert(t) {
          return new Vt(this.pos, this.attr, t.nodeAt(this.pos).attrs[this.attr]);
        }
      }, {
        key: "map",
        value: function map(t) {
          var e = t.mapResult(this.pos, 1);
          return e.deletedAfter ? null : new Vt(e.pos, this.attr, this.value);
        }
      }, {
        key: "toJSON",
        value: function toJSON() {
          return {
            stepType: "attr",
            pos: this.pos,
            attr: this.attr,
            value: this.value
          };
        }
      }], [{
        key: "fromJSON",
        value: function fromJSON(t, e) {
          if ("number" != typeof e.pos || "string" != typeof e.attr) throw new RangeError("Invalid input for AttrStep.fromJSON");
          return new Vt(e.pos, e.attr, e.value);
        }
      }]);
      return Vt;
    }(ft);
    ft.jsonID("attr", Vt);
    var Wt = /*#__PURE__*/function (_ft8) {
      _inherits(Wt, _ft8);
      function Wt(t, e) {
        var _this17;
        _classCallCheck(this, Wt);
        _this17 = _callSuper(this, Wt), _this17.attr = t, _this17.value = e;
        return _this17;
      }
      _createClass(Wt, [{
        key: "apply",
        value: function apply(t) {
          var e = Object.create(null);
          for (var _n57 in t.attrs) e[_n57] = t.attrs[_n57];
          e[this.attr] = this.value;
          var n = t.type.create(e, t.content, t.marks);
          return mt.ok(n);
        }
      }, {
        key: "getMap",
        value: function getMap() {
          return ht.empty;
        }
      }, {
        key: "invert",
        value: function invert(t) {
          return new Wt(this.attr, t.attrs[this.attr]);
        }
      }, {
        key: "map",
        value: function map(t) {
          return this;
        }
      }, {
        key: "toJSON",
        value: function toJSON() {
          return {
            stepType: "docAttr",
            attr: this.attr,
            value: this.value
          };
        }
      }], [{
        key: "fromJSON",
        value: function fromJSON(t, e) {
          if ("string" != typeof e.attr) throw new RangeError("Invalid input for DocAttrStep.fromJSON");
          return new Wt(e.attr, e.value);
        }
      }]);
      return Wt;
    }(ft);
    ft.jsonID("docAttr", Wt);
    var Kt = /*#__PURE__*/function (_Error2) {
      _inherits(Kt, _Error2);
      function Kt() {
        _classCallCheck(this, Kt);
        return _callSuper(this, Kt, arguments);
      }
      return _createClass(Kt);
    }( /*#__PURE__*/_wrapNativeSuper(Error));
    Kt = function t(e) {
      var n = Error.call(this, e);
      return n.__proto__ = t.prototype, n;
    }, (Kt.prototype = Object.create(Error.prototype)).constructor = Kt, Kt.prototype.name = "TransformError";
    var qt = /*#__PURE__*/function () {
      function qt(t) {
        _classCallCheck(this, qt);
        this.doc = t, this.steps = [], this.docs = [], this.mapping = new dt();
      }
      _createClass(qt, [{
        key: "before",
        get: function get() {
          return this.docs.length ? this.docs[0] : this.doc;
        }
      }, {
        key: "step",
        value: function step(t) {
          var e = this.maybeStep(t);
          if (e.failed) throw new Kt(e.failed);
          return this;
        }
      }, {
        key: "maybeStep",
        value: function maybeStep(t) {
          var e = t.apply(this.doc);
          return e.failed || this.addStep(t, e.doc), e;
        }
      }, {
        key: "docChanged",
        get: function get() {
          return this.steps.length > 0;
        }
      }, {
        key: "addStep",
        value: function addStep(t, e) {
          this.docs.push(this.doc), this.steps.push(t), this.mapping.appendMap(t.getMap()), this.doc = e;
        }
      }, {
        key: "replace",
        value: function replace(t) {
          var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : t;
          var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : h.empty;
          var r = It(this.doc, t, e, n);
          return r && this.step(r), this;
        }
      }, {
        key: "replaceWith",
        value: function replaceWith(t, e, n) {
          return this.replace(t, e, new h(i.from(n), 0, 0));
        }
      }, {
        key: "delete",
        value: function _delete(t, e) {
          return this.replace(t, e, h.empty);
        }
      }, {
        key: "insert",
        value: function insert(t, e) {
          return this.replaceWith(t, t, e);
        }
      }, {
        key: "replaceRange",
        value: function replaceRange(t, e, n) {
          return function (t, e, n, r) {
            if (!r.size) return t.deleteRange(e, n);
            var o = t.doc.resolve(e),
              i = t.doc.resolve(n);
            if (Pt(o, i, r)) return t.step(new xt(e, n, r));
            var s = Ht(o, t.doc.resolve(n));
            0 == s[s.length - 1] && s.pop();
            var a = -(o.depth + 1);
            s.unshift(a);
            for (var _t57 = o.depth, _e76 = o.pos - 1; _t57 > 0; _t57--, _e76--) {
              var _n58 = o.node(_t57).type.spec;
              if (_n58.defining || _n58.definingAsContext || _n58.isolating) break;
              s.indexOf(_t57) > -1 ? a = _t57 : o.before(_t57) == _e76 && s.splice(1, 0, -_t57);
            }
            var l = s.indexOf(a),
              c = [],
              u = r.openStart;
            for (var _t58 = r.content, _e77 = 0;; _e77++) {
              var _n59 = _t58.firstChild;
              if (c.push(_n59), _e77 == r.openStart) break;
              _t58 = _n59.content;
            }
            for (var _t59 = u - 1; _t59 >= 0; _t59--) {
              var _e78 = c[_t59],
                _n60 = (d = _e78.type).spec.defining || d.spec.definingForContent;
              if (_n60 && !_e78.sameMarkup(o.node(Math.abs(a) - 1))) u = _t59;else if (_n60 || !_e78.type.isTextblock) break;
            }
            var d;
            for (var _e79 = r.openStart; _e79 >= 0; _e79--) {
              var _a13 = (_e79 + u + 1) % (r.openStart + 1),
                _d = c[_a13];
              if (_d) for (var _e80 = 0; _e80 < s.length; _e80++) {
                var _c8 = s[(_e80 + l) % s.length],
                  _u2 = !0;
                _c8 < 0 && (_u2 = !1, _c8 = -_c8);
                var _p = o.node(_c8 - 1),
                  _f2 = o.index(_c8 - 1);
                if (_p.canReplaceWith(_f2, _f2, _d.type, _d.marks)) return t.replace(o.before(_c8), _u2 ? i.after(_c8) : n, new h(_t(r.content, 0, r.openStart, _a13), _a13, r.openEnd));
              }
            }
            var p = t.steps.length;
            for (var _a14 = s.length - 1; _a14 >= 0 && (t.replace(e, n, r), !(t.steps.length > p)); _a14--) {
              var _t60 = s[_a14];
              _t60 < 0 || (e = o.before(_t60), n = i.after(_t60));
            }
          }(this, t, e, n), this;
        }
      }, {
        key: "replaceRangeWith",
        value: function replaceRangeWith(t, e, n) {
          return function (t, e, n, r) {
            if (!r.isInline && e == n && t.doc.resolve(e).parent.content.size) {
              var _o39 = function (t, e, n) {
                var r = t.resolve(e);
                if (r.parent.canReplaceWith(r.index(), r.index(), n)) return e;
                if (0 == r.parentOffset) for (var _t61 = r.depth - 1; _t61 >= 0; _t61--) {
                  var _e81 = r.index(_t61);
                  if (r.node(_t61).canReplaceWith(_e81, _e81, n)) return r.before(_t61 + 1);
                  if (_e81 > 0) return null;
                }
                if (r.parentOffset == r.parent.content.size) for (var _t62 = r.depth - 1; _t62 >= 0; _t62--) {
                  var _e82 = r.indexAfter(_t62);
                  if (r.node(_t62).canReplaceWith(_e82, _e82, n)) return r.after(_t62 + 1);
                  if (_e82 < r.node(_t62).childCount) return null;
                }
                return null;
              }(t.doc, e, r.type);
              null != _o39 && (e = n = _o39);
            }
            t.replaceRange(e, n, new h(i.from(r), 0, 0));
          }(this, t, e, n), this;
        }
      }, {
        key: "deleteRange",
        value: function deleteRange(t, e) {
          return function (t, e, n) {
            var r = t.doc.resolve(e),
              o = t.doc.resolve(n),
              i = Ht(r, o);
            for (var _e83 = 0; _e83 < i.length; _e83++) {
              var _n61 = i[_e83],
                _s22 = _e83 == i.length - 1;
              if (_s22 && 0 == _n61 || r.node(_n61).type.contentMatch.validEnd) return t.delete(r.start(_n61), o.end(_n61));
              if (_n61 > 0 && (_s22 || r.node(_n61 - 1).canReplace(r.index(_n61 - 1), o.indexAfter(_n61 - 1)))) return t.delete(r.before(_n61), o.after(_n61));
            }
            for (var _i31 = 1; _i31 <= r.depth && _i31 <= o.depth; _i31++) if (e - r.start(_i31) == r.depth - _i31 && n > r.end(_i31) && o.end(_i31) - n != o.depth - _i31) return t.delete(r.before(_i31), n);
            t.delete(e, n);
          }(this, t, e), this;
        }
      }, {
        key: "lift",
        value: function lift(t, e) {
          return function (t, e, n) {
            var r = e.$from,
              o = e.$to,
              s = e.depth,
              a = r.before(s + 1),
              l = o.after(s + 1),
              c = a,
              u = l,
              d = i.empty,
              p = 0;
            for (var _t63 = s, _e84 = !1; _t63 > n; _t63--) _e84 || r.index(_t63) > 0 ? (_e84 = !0, d = i.from(r.node(_t63).copy(d)), p++) : c--;
            var f = i.empty,
              m = 0;
            for (var _t64 = s, _e85 = !1; _t64 > n; _t64--) _e85 || o.after(_t64 + 1) < o.end(_t64) ? (_e85 = !0, f = i.from(o.node(_t64).copy(f)), m++) : u++;
            t.step(new kt(c, u, a, l, new h(d.append(f), p, m), d.size - p, !0));
          }(this, t, e), this;
        }
      }, {
        key: "join",
        value: function join(t) {
          var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
          return function (t, e, n) {
            var r = new xt(e - n, e + n, h.empty, !0);
            t.step(r);
          }(this, t, e), this;
        }
      }, {
        key: "wrap",
        value: function wrap(t, e) {
          return function (t, e, n) {
            var r = i.empty;
            for (var _t65 = n.length - 1; _t65 >= 0; _t65--) {
              if (r.size) {
                var _e86 = n[_t65].type.contentMatch.matchFragment(r);
                if (!_e86 || !_e86.validEnd) throw new RangeError("Wrapper type given to Transform.wrap does not form valid content of its parent wrapper");
              }
              r = i.from(n[_t65].type.create(n[_t65].attrs, r));
            }
            var o = e.start,
              s = e.end;
            t.step(new kt(o, s, o, s, new h(r, 0, 0), n.length, !0));
          }(this, t, e), this;
        }
      }, {
        key: "setBlockType",
        value: function setBlockType(t) {
          var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : t;
          var n = arguments.length > 2 ? arguments[2] : undefined;
          var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
          return function (t, e, n, r, o) {
            if (!r.isTextblock) throw new RangeError("Type given to setBlockType should be a textblock");
            var s = t.steps.length;
            t.doc.nodesBetween(e, n, function (e, n) {
              if (e.isTextblock && !e.hasMarkup(r, o) && function (t, e, n) {
                var r = t.resolve(e),
                  o = r.index();
                return r.parent.canReplaceWith(o, o + 1, n);
              }(t.doc, t.mapping.slice(s).map(n), r)) {
                t.clearIncompatible(t.mapping.slice(s).map(n, 1), r);
                var _a15 = t.mapping.slice(s),
                  _l8 = _a15.map(n, 1),
                  _c9 = _a15.map(n + e.nodeSize, 1);
                return t.step(new kt(_l8, _c9, _l8 + 1, _c9 - 1, new h(i.from(r.create(o, null, e.marks)), 0, 0), 1, !0)), !1;
              }
            });
          }(this, t, e, n, r), this;
        }
      }, {
        key: "setNodeMarkup",
        value: function setNodeMarkup(t, e) {
          var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
          var r = arguments.length > 3 ? arguments[3] : undefined;
          return function (t, e, n, r, o) {
            var s = t.doc.nodeAt(e);
            if (!s) throw new RangeError("No node at given position");
            n || (n = s.type);
            var a = n.create(r, null, o || s.marks);
            if (s.isLeaf) return t.replaceWith(e, e + s.nodeSize, a);
            if (!n.validContent(s.content)) throw new RangeError("Invalid content for node type " + n.name);
            t.step(new kt(e, e + s.nodeSize, e + 1, e + s.nodeSize - 1, new h(i.from(a), 0, 0), 1, !0));
          }(this, t, e, n, r), this;
        }
      }, {
        key: "setNodeAttribute",
        value: function setNodeAttribute(t, e, n) {
          return this.step(new Vt(t, e, n)), this;
        }
      }, {
        key: "setDocAttribute",
        value: function setDocAttribute(t, e) {
          return this.step(new Wt(t, e)), this;
        }
      }, {
        key: "addNodeMark",
        value: function addNodeMark(t, e) {
          return this.step(new bt(t, e)), this;
        }
      }, {
        key: "removeNodeMark",
        value: function removeNodeMark(t, e) {
          if (!(e instanceof c)) {
            var _n62 = this.doc.nodeAt(t);
            if (!_n62) throw new RangeError("No node at position " + t);
            if (!(e = e.isInSet(_n62.marks))) return this;
          }
          return this.step(new wt(t, e)), this;
        }
      }, {
        key: "split",
        value: function split(t) {
          var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
          var n = arguments.length > 2 ? arguments[2] : undefined;
          return function (t, e) {
            var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
            var r = arguments.length > 3 ? arguments[3] : undefined;
            var o = t.doc.resolve(e),
              s = i.empty,
              a = i.empty;
            for (var _t66 = o.depth, _e87 = o.depth - n, _l9 = n - 1; _t66 > _e87; _t66--, _l9--) {
              s = i.from(o.node(_t66).copy(s));
              var _e88 = r && r[_l9];
              a = i.from(_e88 ? _e88.type.create(_e88.attrs, a) : o.node(_t66).copy(a));
            }
            t.step(new xt(e, e, new h(s.append(a), n, n), !0));
          }(this, t, e, n), this;
        }
      }, {
        key: "addMark",
        value: function addMark(t, e, n) {
          return function (t, e, n, r) {
            var o,
              i,
              s = [],
              a = [];
            t.doc.nodesBetween(e, n, function (t, l, c) {
              if (!t.isInline) return;
              var u = t.marks;
              if (!r.isInSet(u) && c.type.allowsMarkType(r.type)) {
                var _c10 = Math.max(l, e),
                  _h = Math.min(l + t.nodeSize, n),
                  _d2 = r.addToSet(u);
                for (var _t67 = 0; _t67 < u.length; _t67++) u[_t67].isInSet(_d2) || (o && o.to == _c10 && o.mark.eq(u[_t67]) ? o.to = _h : s.push(o = new vt(_c10, _h, u[_t67])));
                i && i.to == _c10 ? i.to = _h : a.push(i = new yt(_c10, _h, r));
              }
            }), s.forEach(function (e) {
              return t.step(e);
            }), a.forEach(function (e) {
              return t.step(e);
            });
          }(this, t, e, n), this;
        }
      }, {
        key: "removeMark",
        value: function removeMark(t, e, n) {
          return function (t, e, n, r) {
            var o = [],
              i = 0;
            t.doc.nodesBetween(e, n, function (t, s) {
              if (!t.isInline) return;
              i++;
              var a = null;
              if (r instanceof q) {
                var _e89,
                  _n63 = t.marks;
                for (; _e89 = r.isInSet(_n63);) (a || (a = [])).push(_e89), _n63 = _e89.removeFromSet(_n63);
              } else r ? r.isInSet(t.marks) && (a = [r]) : a = t.marks;
              if (a && a.length) {
                var _r48 = Math.min(s + t.nodeSize, n);
                for (var _t68 = 0; _t68 < a.length; _t68++) {
                  var _n64 = void 0,
                    _l10 = a[_t68];
                  for (var _t69 = 0; _t69 < o.length; _t69++) {
                    var _e90 = o[_t69];
                    _e90.step == i - 1 && _l10.eq(o[_t69].style) && (_n64 = _e90);
                  }
                  _n64 ? (_n64.to = _r48, _n64.step = i) : o.push({
                    style: _l10,
                    from: Math.max(s, e),
                    to: _r48,
                    step: i
                  });
                }
              }
            }), o.forEach(function (e) {
              return t.step(new vt(e.from, e.to, e.style));
            });
          }(this, t, e, n), this;
        }
      }, {
        key: "clearIncompatible",
        value: function clearIncompatible(t, e, n) {
          return function (t, e, n) {
            var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : n.contentMatch;
            var o = t.doc.nodeAt(e),
              s = [],
              a = e + 1;
            for (var _e91 = 0; _e91 < o.childCount; _e91++) {
              var _l11 = o.child(_e91),
                _c11 = a + _l11.nodeSize,
                _u3 = r.matchType(_l11.type);
              if (_u3) {
                r = _u3;
                for (var _e92 = 0; _e92 < _l11.marks.length; _e92++) n.allowsMarkType(_l11.marks[_e92].type) || t.step(new vt(a, _c11, _l11.marks[_e92]));
                if (_l11.isText && !n.spec.code) {
                  var _t70 = void 0,
                    _e93 = void 0,
                    _r49 = /\r?\n|\r/g;
                  for (; _t70 = _r49.exec(_l11.text);) _e93 || (_e93 = new h(i.from(n.schema.text(" ", n.allowedMarks(_l11.marks))), 0, 0)), s.push(new xt(a + _t70.index, a + _t70.index + _t70[0].length, _e93));
                }
              } else s.push(new xt(a, _c11, h.empty));
              a = _c11;
            }
            if (!r.validEnd) {
              var _e94 = r.fillBefore(i.empty, !0);
              t.replace(a, a, new h(_e94, 0, 0));
            }
            for (var _e95 = s.length - 1; _e95 >= 0; _e95--) t.step(s[_e95]);
          }(this, t, e, n), this;
        }
      }]);
      return qt;
    }();
    var Jt = Object.create(null);
    var Ut = /*#__PURE__*/function () {
      function Ut(t, e, n) {
        _classCallCheck(this, Ut);
        this.$anchor = t, this.$head = e, this.ranges = n || [new Gt(t.min(e), t.max(e))];
      }
      _createClass(Ut, [{
        key: "anchor",
        get: function get() {
          return this.$anchor.pos;
        }
      }, {
        key: "head",
        get: function get() {
          return this.$head.pos;
        }
      }, {
        key: "from",
        get: function get() {
          return this.$from.pos;
        }
      }, {
        key: "to",
        get: function get() {
          return this.$to.pos;
        }
      }, {
        key: "$from",
        get: function get() {
          return this.ranges[0].$from;
        }
      }, {
        key: "$to",
        get: function get() {
          return this.ranges[0].$to;
        }
      }, {
        key: "empty",
        get: function get() {
          var t = this.ranges;
          for (var _e96 = 0; _e96 < t.length; _e96++) if (t[_e96].$from.pos != t[_e96].$to.pos) return !1;
          return !0;
        }
      }, {
        key: "content",
        value: function content() {
          return this.$from.doc.slice(this.from, this.to, !0);
        }
      }, {
        key: "replace",
        value: function replace(t) {
          var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : h.empty;
          var n = e.content.lastChild,
            r = null;
          for (var _t71 = 0; _t71 < e.openEnd; _t71++) r = n, n = n.lastChild;
          var o = t.steps.length,
            i = this.ranges;
          for (var _s23 = 0; _s23 < i.length; _s23++) {
            var _i$_s = i[_s23],
              _a16 = _i$_s.$from,
              _l12 = _i$_s.$to,
              _c12 = t.mapping.slice(o);
            t.replaceRange(_c12.map(_a16.pos), _c12.map(_l12.pos), _s23 ? h.empty : e), 0 == _s23 && ie(t, o, (n ? n.isInline : r && r.isTextblock) ? -1 : 1);
          }
        }
      }, {
        key: "replaceWith",
        value: function replaceWith(t, e) {
          var n = t.steps.length,
            r = this.ranges;
          for (var _o40 = 0; _o40 < r.length; _o40++) {
            var _r$_o = r[_o40],
              _i32 = _r$_o.$from,
              _s24 = _r$_o.$to,
              _a17 = t.mapping.slice(n),
              _l13 = _a17.map(_i32.pos),
              _c13 = _a17.map(_s24.pos);
            _o40 ? t.deleteRange(_l13, _c13) : (t.replaceRangeWith(_l13, _c13, e), ie(t, n, e.isInline ? -1 : 1));
          }
        }
      }, {
        key: "getBookmark",
        value: function getBookmark() {
          return Qt.between(this.$anchor, this.$head).getBookmark();
        }
      }], [{
        key: "findFrom",
        value: function findFrom(t, e) {
          var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
          var r = t.parent.inlineContent ? new Qt(t) : oe(t.node(0), t.parent, t.pos, t.index(), e, n);
          if (r) return r;
          for (var _r50 = t.depth - 1; _r50 >= 0; _r50--) {
            var _o41 = e < 0 ? oe(t.node(0), t.node(_r50), t.before(_r50 + 1), t.index(_r50), e, n) : oe(t.node(0), t.node(_r50), t.after(_r50 + 1), t.index(_r50) + 1, e, n);
            if (_o41) return _o41;
          }
          return null;
        }
      }, {
        key: "near",
        value: function near(t) {
          var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
          return this.findFrom(t, e) || this.findFrom(t, -e) || new ne(t.node(0));
        }
      }, {
        key: "atStart",
        value: function atStart(t) {
          return oe(t, t, 0, 0, 1) || new ne(t);
        }
      }, {
        key: "atEnd",
        value: function atEnd(t) {
          return oe(t, t, t.content.size, t.childCount, -1) || new ne(t);
        }
      }, {
        key: "fromJSON",
        value: function fromJSON(t, e) {
          if (!e || !e.type) throw new RangeError("Invalid input for Selection.fromJSON");
          var n = Jt[e.type];
          if (!n) throw new RangeError("No selection type ".concat(e.type, " defined"));
          return n.fromJSON(t, e);
        }
      }, {
        key: "jsonID",
        value: function jsonID(t, e) {
          if (t in Jt) throw new RangeError("Duplicate use of selection JSON ID " + t);
          return Jt[t] = e, e.prototype.jsonID = t, e;
        }
      }]);
      return Ut;
    }();
    Ut.prototype.visible = !0;
    var Gt = /*#__PURE__*/_createClass(function Gt(t, e) {
      _classCallCheck(this, Gt);
      this.$from = t, this.$to = e;
    });
    var Yt = !1;
    function Xt(t) {
      Yt || t.parent.inlineContent || (Yt = !0, console.warn("TextSelection endpoint not pointing into a node with inline content (" + t.parent.type.name + ")"));
    }
    var Qt = /*#__PURE__*/function (_Ut) {
      _inherits(Qt, _Ut);
      function Qt(t) {
        var _this18;
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : t;
        _classCallCheck(this, Qt);
        Xt(t), Xt(e), _this18 = _callSuper(this, Qt, [t, e]);
        return _this18;
      }
      _createClass(Qt, [{
        key: "$cursor",
        get: function get() {
          return this.$anchor.pos == this.$head.pos ? this.$head : null;
        }
      }, {
        key: "map",
        value: function map(t, e) {
          var n = t.resolve(e.map(this.head));
          if (!n.parent.inlineContent) return Ut.near(n);
          var r = t.resolve(e.map(this.anchor));
          return new Qt(r.parent.inlineContent ? r : n, n);
        }
      }, {
        key: "replace",
        value: function replace(t) {
          var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : h.empty;
          if (_get(_getPrototypeOf(Qt.prototype), "replace", this).call(this, t, e), e == h.empty) {
            var _e97 = this.$from.marksAcross(this.$to);
            _e97 && t.ensureMarks(_e97);
          }
        }
      }, {
        key: "eq",
        value: function eq(t) {
          return t instanceof Qt && t.anchor == this.anchor && t.head == this.head;
        }
      }, {
        key: "getBookmark",
        value: function getBookmark() {
          return new Zt(this.anchor, this.head);
        }
      }, {
        key: "toJSON",
        value: function toJSON() {
          return {
            type: "text",
            anchor: this.anchor,
            head: this.head
          };
        }
      }], [{
        key: "fromJSON",
        value: function fromJSON(t, e) {
          if ("number" != typeof e.anchor || "number" != typeof e.head) throw new RangeError("Invalid input for TextSelection.fromJSON");
          return new Qt(t.resolve(e.anchor), t.resolve(e.head));
        }
      }, {
        key: "create",
        value: function create(t, e) {
          var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : e;
          var r = t.resolve(e);
          return new this(r, n == e ? r : t.resolve(n));
        }
      }, {
        key: "between",
        value: function between(t, e, n) {
          var r = t.pos - e.pos;
          if (n && !r || (n = r >= 0 ? 1 : -1), !e.parent.inlineContent) {
            var _t72 = Ut.findFrom(e, n, !0) || Ut.findFrom(e, -n, !0);
            if (!_t72) return Ut.near(e, n);
            e = _t72.$head;
          }
          return t.parent.inlineContent || (0 == r || (t = (Ut.findFrom(t, -n, !0) || Ut.findFrom(t, n, !0)).$anchor).pos < e.pos != r < 0) && (t = e), new Qt(t, e);
        }
      }]);
      return Qt;
    }(Ut);
    Ut.jsonID("text", Qt);
    var Zt = /*#__PURE__*/function () {
      function Zt(t, e) {
        _classCallCheck(this, Zt);
        this.anchor = t, this.head = e;
      }
      _createClass(Zt, [{
        key: "map",
        value: function map(t) {
          return new Zt(t.map(this.anchor), t.map(this.head));
        }
      }, {
        key: "resolve",
        value: function resolve(t) {
          return Qt.between(t.resolve(this.anchor), t.resolve(this.head));
        }
      }]);
      return Zt;
    }();
    var te = /*#__PURE__*/function (_Ut2) {
      _inherits(te, _Ut2);
      function te(t) {
        var _this19;
        _classCallCheck(this, te);
        var e = t.nodeAfter,
          n = t.node(0).resolve(t.pos + e.nodeSize);
        _this19 = _callSuper(this, te, [t, n]), _this19.node = e;
        return _this19;
      }
      _createClass(te, [{
        key: "map",
        value: function map(t, e) {
          var _e$mapResult = e.mapResult(this.anchor),
            n = _e$mapResult.deleted,
            r = _e$mapResult.pos,
            o = t.resolve(r);
          return n ? Ut.near(o) : new te(o);
        }
      }, {
        key: "content",
        value: function content() {
          return new h(i.from(this.node), 0, 0);
        }
      }, {
        key: "eq",
        value: function eq(t) {
          return t instanceof te && t.anchor == this.anchor;
        }
      }, {
        key: "toJSON",
        value: function toJSON() {
          return {
            type: "node",
            anchor: this.anchor
          };
        }
      }, {
        key: "getBookmark",
        value: function getBookmark() {
          return new ee(this.anchor);
        }
      }], [{
        key: "fromJSON",
        value: function fromJSON(t, e) {
          if ("number" != typeof e.anchor) throw new RangeError("Invalid input for NodeSelection.fromJSON");
          return new te(t.resolve(e.anchor));
        }
      }, {
        key: "create",
        value: function create(t, e) {
          return new te(t.resolve(e));
        }
      }, {
        key: "isSelectable",
        value: function isSelectable(t) {
          return !t.isText && !1 !== t.type.spec.selectable;
        }
      }]);
      return te;
    }(Ut);
    te.prototype.visible = !1, Ut.jsonID("node", te);
    var ee = /*#__PURE__*/function () {
      function ee(t) {
        _classCallCheck(this, ee);
        this.anchor = t;
      }
      _createClass(ee, [{
        key: "map",
        value: function map(t) {
          var _t$mapResult = t.mapResult(this.anchor),
            e = _t$mapResult.deleted,
            n = _t$mapResult.pos;
          return e ? new Zt(n, n) : new ee(n);
        }
      }, {
        key: "resolve",
        value: function resolve(t) {
          var e = t.resolve(this.anchor),
            n = e.nodeAfter;
          return n && te.isSelectable(n) ? new te(e) : Ut.near(e);
        }
      }]);
      return ee;
    }();
    var ne = /*#__PURE__*/function (_Ut3) {
      _inherits(ne, _Ut3);
      function ne(t) {
        _classCallCheck(this, ne);
        return _callSuper(this, ne, [t.resolve(0), t.resolve(t.content.size)]);
      }
      _createClass(ne, [{
        key: "replace",
        value: function replace(t) {
          var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : h.empty;
          if (e == h.empty) {
            t.delete(0, t.doc.content.size);
            var _e98 = Ut.atStart(t.doc);
            _e98.eq(t.selection) || t.setSelection(_e98);
          } else _get(_getPrototypeOf(ne.prototype), "replace", this).call(this, t, e);
        }
      }, {
        key: "toJSON",
        value: function toJSON() {
          return {
            type: "all"
          };
        }
      }, {
        key: "map",
        value: function map(t) {
          return new ne(t);
        }
      }, {
        key: "eq",
        value: function eq(t) {
          return t instanceof ne;
        }
      }, {
        key: "getBookmark",
        value: function getBookmark() {
          return re;
        }
      }], [{
        key: "fromJSON",
        value: function fromJSON(t) {
          return new ne(t);
        }
      }]);
      return ne;
    }(Ut);
    Ut.jsonID("all", ne);
    var re = {
      map: function map() {
        return this;
      },
      resolve: function resolve(t) {
        return new ne(t);
      }
    };
    function oe(t, e, n, r, o) {
      var i = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : !1;
      if (e.inlineContent) return Qt.create(t, n);
      for (var _s25 = r - (o > 0 ? 0 : 1); o > 0 ? _s25 < e.childCount : _s25 >= 0; _s25 += o) {
        var _r51 = e.child(_s25);
        if (_r51.isAtom) {
          if (!i && te.isSelectable(_r51)) return te.create(t, n - (o < 0 ? _r51.nodeSize : 0));
        } else {
          var _e99 = oe(t, _r51, n + o, o < 0 ? _r51.childCount : 0, o, i);
          if (_e99) return _e99;
        }
        n += _r51.nodeSize * o;
      }
      return null;
    }
    function ie(t, e, n) {
      var r = t.steps.length - 1;
      if (r < e) return;
      var o,
        i = t.steps[r];
      (i instanceof xt || i instanceof kt) && (t.mapping.maps[r].forEach(function (t, e, n, r) {
        null == o && (o = r);
      }), t.setSelection(Ut.near(t.doc.resolve(o), n)));
    }
    var se = /*#__PURE__*/function (_qt) {
      _inherits(se, _qt);
      function se(t) {
        var _this20;
        _classCallCheck(this, se);
        _this20 = _callSuper(this, se, [t.doc]), _this20.curSelectionFor = 0, _this20.updated = 0, _this20.meta = Object.create(null), _this20.time = Date.now(), _this20.curSelection = t.selection, _this20.storedMarks = t.storedMarks;
        return _this20;
      }
      _createClass(se, [{
        key: "selection",
        get: function get() {
          return this.curSelectionFor < this.steps.length && (this.curSelection = this.curSelection.map(this.doc, this.mapping.slice(this.curSelectionFor)), this.curSelectionFor = this.steps.length), this.curSelection;
        }
      }, {
        key: "setSelection",
        value: function setSelection(t) {
          if (t.$from.doc != this.doc) throw new RangeError("Selection passed to setSelection must point at the current document");
          return this.curSelection = t, this.curSelectionFor = this.steps.length, this.updated = -3 & (1 | this.updated), this.storedMarks = null, this;
        }
      }, {
        key: "selectionSet",
        get: function get() {
          return (1 & this.updated) > 0;
        }
      }, {
        key: "setStoredMarks",
        value: function setStoredMarks(t) {
          return this.storedMarks = t, this.updated |= 2, this;
        }
      }, {
        key: "ensureMarks",
        value: function ensureMarks(t) {
          return c.sameSet(this.storedMarks || this.selection.$from.marks(), t) || this.setStoredMarks(t), this;
        }
      }, {
        key: "addStoredMark",
        value: function addStoredMark(t) {
          return this.ensureMarks(t.addToSet(this.storedMarks || this.selection.$head.marks()));
        }
      }, {
        key: "removeStoredMark",
        value: function removeStoredMark(t) {
          return this.ensureMarks(t.removeFromSet(this.storedMarks || this.selection.$head.marks()));
        }
      }, {
        key: "storedMarksSet",
        get: function get() {
          return (2 & this.updated) > 0;
        }
      }, {
        key: "addStep",
        value: function addStep(t, e) {
          _get(_getPrototypeOf(se.prototype), "addStep", this).call(this, t, e), this.updated = -3 & this.updated, this.storedMarks = null;
        }
      }, {
        key: "setTime",
        value: function setTime(t) {
          return this.time = t, this;
        }
      }, {
        key: "replaceSelection",
        value: function replaceSelection(t) {
          return this.selection.replace(this, t), this;
        }
      }, {
        key: "replaceSelectionWith",
        value: function replaceSelectionWith(t) {
          var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
          var n = this.selection;
          return e && (t = t.mark(this.storedMarks || (n.empty ? n.$from.marks() : n.$from.marksAcross(n.$to) || c.none))), n.replaceWith(this, t), this;
        }
      }, {
        key: "deleteSelection",
        value: function deleteSelection() {
          return this.selection.replace(this), this;
        }
      }, {
        key: "insertText",
        value: function insertText(t, e, n) {
          var r = this.doc.type.schema;
          if (null == e) return t ? this.replaceSelectionWith(r.text(t), !0) : this.deleteSelection();
          {
            if (null == n && (n = e), n = null == n ? e : n, !t) return this.deleteRange(e, n);
            var _o42 = this.storedMarks;
            if (!_o42) {
              var _t73 = this.doc.resolve(e);
              _o42 = n == e ? _t73.marks() : _t73.marksAcross(this.doc.resolve(n));
            }
            return this.replaceRangeWith(e, n, r.text(t, _o42)), this.selection.empty || this.setSelection(Ut.near(this.selection.$to)), this;
          }
        }
      }, {
        key: "setMeta",
        value: function setMeta(t, e) {
          return this.meta["string" == typeof t ? t : t.key] = e, this;
        }
      }, {
        key: "getMeta",
        value: function getMeta(t) {
          return this.meta["string" == typeof t ? t : t.key];
        }
      }, {
        key: "isGeneric",
        get: function get() {
          for (var _t74 in this.meta) return !1;
          return !0;
        }
      }, {
        key: "scrollIntoView",
        value: function scrollIntoView() {
          return this.updated |= 4, this;
        }
      }, {
        key: "scrolledIntoView",
        get: function get() {
          return (4 & this.updated) > 0;
        }
      }]);
      return se;
    }(qt);
    function ae(t, e) {
      return e && t ? t.bind(e) : t;
    }
    var le = /*#__PURE__*/_createClass(function le(t, e, n) {
      _classCallCheck(this, le);
      this.name = t, this.init = ae(e.init, n), this.apply = ae(e.apply, n);
    });
    var ce = [new le("doc", {
      init: function init(t) {
        return t.doc || t.schema.topNodeType.createAndFill();
      },
      apply: function apply(t) {
        return t.doc;
      }
    }), new le("selection", {
      init: function init(t, e) {
        return t.selection || Ut.atStart(e.doc);
      },
      apply: function apply(t) {
        return t.selection;
      }
    }), new le("storedMarks", {
      init: function init(t) {
        return t.storedMarks || null;
      },
      apply: function apply(t, e, n, r) {
        return r.selection.$cursor ? t.storedMarks : null;
      }
    }), new le("scrollToSelection", {
      init: function init() {
        return 0;
      },
      apply: function apply(t, e) {
        return t.scrolledIntoView ? e + 1 : e;
      }
    })];
    var ue = /*#__PURE__*/_createClass(function ue(t, e) {
      var _this21 = this;
      _classCallCheck(this, ue);
      this.schema = t, this.plugins = [], this.pluginsByKey = Object.create(null), this.fields = ce.slice(), e && e.forEach(function (t) {
        if (_this21.pluginsByKey[t.key]) throw new RangeError("Adding different instances of a keyed plugin (" + t.key + ")");
        _this21.plugins.push(t), _this21.pluginsByKey[t.key] = t, t.spec.state && _this21.fields.push(new le(t.key, t.spec.state, t));
      });
    });
    var he = /*#__PURE__*/function () {
      function he(t) {
        _classCallCheck(this, he);
        this.config = t;
      }
      _createClass(he, [{
        key: "schema",
        get: function get() {
          return this.config.schema;
        }
      }, {
        key: "plugins",
        get: function get() {
          return this.config.plugins;
        }
      }, {
        key: "apply",
        value: function apply(t) {
          return this.applyTransaction(t).state;
        }
      }, {
        key: "filterTransaction",
        value: function filterTransaction(t) {
          var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
          for (var _n65 = 0; _n65 < this.config.plugins.length; _n65++) if (_n65 != e) {
            var _e100 = this.config.plugins[_n65];
            if (_e100.spec.filterTransaction && !_e100.spec.filterTransaction.call(_e100, t, this)) return !1;
          }
          return !0;
        }
      }, {
        key: "applyTransaction",
        value: function applyTransaction(t) {
          if (!this.filterTransaction(t)) return {
            state: this,
            transactions: []
          };
          var e = [t],
            n = this.applyInner(t),
            r = null;
          for (;;) {
            var _o43 = !1;
            for (var _i33 = 0; _i33 < this.config.plugins.length; _i33++) {
              var _s26 = this.config.plugins[_i33];
              if (_s26.spec.appendTransaction) {
                var _a18 = r ? r[_i33].n : 0,
                  _l14 = r ? r[_i33].state : this,
                  _c14 = _a18 < e.length && _s26.spec.appendTransaction.call(_s26, _a18 ? e.slice(_a18) : e, _l14, n);
                if (_c14 && n.filterTransaction(_c14, _i33)) {
                  if (_c14.setMeta("appendedTransaction", t), !r) {
                    r = [];
                    for (var _t75 = 0; _t75 < this.config.plugins.length; _t75++) r.push(_t75 < _i33 ? {
                      state: n,
                      n: e.length
                    } : {
                      state: this,
                      n: 0
                    });
                  }
                  e.push(_c14), n = n.applyInner(_c14), _o43 = !0;
                }
                r && (r[_i33] = {
                  state: n,
                  n: e.length
                });
              }
            }
            if (!_o43) return {
              state: n,
              transactions: e
            };
          }
        }
      }, {
        key: "applyInner",
        value: function applyInner(t) {
          if (!t.before.eq(this.doc)) throw new RangeError("Applying a mismatched transaction");
          var e = new he(this.config),
            n = this.config.fields;
          for (var _r52 = 0; _r52 < n.length; _r52++) {
            var _o44 = n[_r52];
            e[_o44.name] = _o44.apply(t, this[_o44.name], this, e);
          }
          return e;
        }
      }, {
        key: "tr",
        get: function get() {
          return new se(this);
        }
      }, {
        key: "reconfigure",
        value: function reconfigure(t) {
          var e = new ue(this.schema, t.plugins),
            n = e.fields,
            r = new he(e);
          for (var _e101 = 0; _e101 < n.length; _e101++) {
            var _o45 = n[_e101].name;
            r[_o45] = this.hasOwnProperty(_o45) ? this[_o45] : n[_e101].init(t, r);
          }
          return r;
        }
      }, {
        key: "toJSON",
        value: function toJSON(t) {
          var e = {
            doc: this.doc.toJSON(),
            selection: this.selection.toJSON()
          };
          if (this.storedMarks && (e.storedMarks = this.storedMarks.map(function (t) {
            return t.toJSON();
          })), t && "object" == _typeof(t)) for (var _n66 in t) {
            if ("doc" == _n66 || "selection" == _n66) throw new RangeError("The JSON fields `doc` and `selection` are reserved");
            var _r53 = t[_n66],
              _o46 = _r53.spec.state;
            _o46 && _o46.toJSON && (e[_n66] = _o46.toJSON.call(_r53, this[_r53.key]));
          }
          return e;
        }
      }], [{
        key: "create",
        value: function create(t) {
          var e = new ue(t.doc ? t.doc.type.schema : t.schema, t.plugins),
            n = new he(e);
          for (var _r54 = 0; _r54 < e.fields.length; _r54++) n[e.fields[_r54].name] = e.fields[_r54].init(t, n);
          return n;
        }
      }, {
        key: "fromJSON",
        value: function fromJSON(t, e, n) {
          if (!e) throw new RangeError("Invalid input for EditorState.fromJSON");
          if (!t.schema) throw new RangeError("Required config field 'schema' missing");
          var r = new ue(t.schema, t.plugins),
            o = new he(r);
          return r.fields.forEach(function (r) {
            if ("doc" == r.name) o.doc = A.fromJSON(t.schema, e.doc);else if ("selection" == r.name) o.selection = Ut.fromJSON(o.doc, e.selection);else if ("storedMarks" == r.name) e.storedMarks && (o.storedMarks = e.storedMarks.map(t.schema.markFromJSON));else {
              if (n) for (var _i34 in n) {
                var _s27 = n[_i34],
                  _a19 = _s27.spec.state;
                if (_s27.key == r.name && _a19 && _a19.fromJSON && Object.prototype.hasOwnProperty.call(e, _i34)) return void (o[r.name] = _a19.fromJSON.call(_s27, t, e[_i34], o));
              }
              o[r.name] = r.init(t, o);
            }
          }), o;
        }
      }]);
      return he;
    }();
    function de(t, e, n) {
      for (var _r55 in t) {
        var _o47 = t[_r55];
        _o47 instanceof Function ? _o47 = _o47.bind(e) : "handleDOMEvents" == _r55 && (_o47 = de(_o47, e, {})), n[_r55] = _o47;
      }
      return n;
    }
    var pe = /*#__PURE__*/function () {
      function pe(t) {
        _classCallCheck(this, pe);
        this.spec = t, this.props = {}, t.props && de(t.props, this, this.props), this.key = t.key ? t.key.key : me("plugin");
      }
      _createClass(pe, [{
        key: "getState",
        value: function getState(t) {
          return t[this.key];
        }
      }]);
      return pe;
    }();
    var fe = Object.create(null);
    function me(t) {
      return t in fe ? t + "$" + ++fe[t] : (fe[t] = 0, t + "$");
    }
    var ge = /*#__PURE__*/function () {
      function ge() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "key";
        _classCallCheck(this, ge);
        this.key = me(t);
      }
      _createClass(ge, [{
        key: "get",
        value: function get(t) {
          return t.config.pluginsByKey[this.key];
        }
      }, {
        key: "getState",
        value: function getState(t) {
          return t[this.key];
        }
      }]);
      return ge;
    }();
    var ye = function ye(t) {
        for (var e = 0;; e++) if (!(t = t.previousSibling)) return e;
      },
      ve = function ve(t) {
        var e = t.assignedSlot || t.parentNode;
        return e && 11 == e.nodeType ? e.host : e;
      };
    var be = null;
    var we = function we(t, e, n) {
        var r = be || (be = global.document.createRange());
        return r.setEnd(t, null == n ? t.nodeValue.length : n), r.setStart(t, e || 0), r;
      },
      xe = function xe(t, e, n, r) {
        return n && (Se(t, e, n, r, -1) || Se(t, e, n, r, 1));
      },
      ke = /^(img|br|input|textarea|hr)$/i;
    function Se(t, e, n, r, o) {
      for (;;) {
        if (t == n && e == r) return !0;
        if (e == (o < 0 ? 0 : Me(t))) {
          var _n67 = t.parentNode;
          if (!_n67 || 1 != _n67.nodeType || Oe(t) || ke.test(t.nodeName) || "false" == t.contentEditable) return !1;
          e = ye(t) + (o < 0 ? 0 : 1), t = _n67;
        } else {
          if (1 != t.nodeType) return !1;
          if ("false" == (t = t.childNodes[e + (o < 0 ? -1 : 0)]).contentEditable) return !1;
          e = o < 0 ? Me(t) : 0;
        }
      }
    }
    function Me(t) {
      return 3 == t.nodeType ? t.nodeValue.length : t.childNodes.length;
    }
    function Oe(t) {
      var e;
      for (var _n68 = t; _n68 && !(e = _n68.pmViewDesc); _n68 = _n68.parentNode);
      return e && e.node && e.node.isBlock && (e.dom == t || e.contentDOM == t);
    }
    var Te = function Te(t) {
      return t.focusNode && xe(t.focusNode, t.focusOffset, t.anchorNode, t.anchorOffset);
    };
    function Ce(t, e) {
      var n = global.document.createEvent("Event");
      return n.initEvent("keydown", !0, !0), n.keyCode = t, n.key = n.code = e, n;
    }
    var Ee = void 0 !== global.navigator ? global.navigator : null,
      Ae = void 0 !== global.document ? global.document : null,
      Ne = Ee && Ee.userAgent || "",
      De = /Edge\/(\d+)/.exec(Ne),
      Re = /MSIE \d/.exec(Ne),
      Ie = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(Ne),
      Pe = !!(Re || Ie || De),
      Le = Re ? global.document.documentMode : Ie ? +Ie[1] : De ? +De[1] : 0,
      Fe = !Pe && /gecko\/(\d+)/i.test(Ne);
    Fe && (/Firefox\/(\d+)/.exec(Ne) || [0, 0])[1];
    var Be = !Pe && /Chrome\/(\d+)/.exec(Ne),
      ze = !!Be,
      je = Be ? +Be[1] : 0,
      $e = !Pe && !!Ee && /Apple Computer/.test(Ee.vendor),
      _e = $e && (/Mobile\/\w+/.test(Ne) || !!Ee && Ee.maxTouchPoints > 2),
      He = _e || !!Ee && /Mac/.test(Ee.platform),
      Ve = !!Ee && /Win/.test(Ee.platform),
      We = /Android \d/.test(Ne),
      Ke = !!Ae && "webkitFontSmoothing" in Ae.documentElement.style,
      qe = Ke ? +(/\bAppleWebKit\/(\d+)/.exec(global.navigator.userAgent) || [0, 0])[1] : 0;
    function Je(t) {
      return {
        left: 0,
        right: t.documentElement.clientWidth,
        top: 0,
        bottom: t.documentElement.clientHeight
      };
    }
    function Ue(t, e) {
      return "number" == typeof t ? t : t[e];
    }
    function Ge(t) {
      var e = t.getBoundingClientRect(),
        n = e.width / t.offsetWidth || 1,
        r = e.height / t.offsetHeight || 1;
      return {
        left: e.left,
        right: e.left + t.clientWidth * n,
        top: e.top,
        bottom: e.top + t.clientHeight * r
      };
    }
    function Ye(t, e, n) {
      var r = t.someProp("scrollThreshold") || 0,
        o = t.someProp("scrollMargin") || 5,
        i = t.dom.ownerDocument;
      for (var _s28 = n || t.dom; _s28; _s28 = ve(_s28)) {
        if (1 != _s28.nodeType) continue;
        var _t76 = _s28,
          _n69 = _t76 == i.body,
          _a20 = _n69 ? Je(i) : Ge(_t76),
          _l15 = 0,
          _c15 = 0;
        if (e.top < _a20.top + Ue(r, "top") ? _c15 = -(_a20.top - e.top + Ue(o, "top")) : e.bottom > _a20.bottom - Ue(r, "bottom") && (_c15 = e.bottom - e.top > _a20.bottom - _a20.top ? e.top + Ue(o, "top") - _a20.top : e.bottom - _a20.bottom + Ue(o, "bottom")), e.left < _a20.left + Ue(r, "left") ? _l15 = -(_a20.left - e.left + Ue(o, "left")) : e.right > _a20.right - Ue(r, "right") && (_l15 = e.right - _a20.right + Ue(o, "right")), _l15 || _c15) if (_n69) i.defaultView.scrollBy(_l15, _c15);else {
          var _n70 = _t76.scrollLeft,
            _r56 = _t76.scrollTop;
          _c15 && (_t76.scrollTop += _c15), _l15 && (_t76.scrollLeft += _l15);
          var _o48 = _t76.scrollLeft - _n70,
            _i35 = _t76.scrollTop - _r56;
          e = {
            left: e.left - _o48,
            top: e.top - _i35,
            right: e.right - _o48,
            bottom: e.bottom - _i35
          };
        }
        if (_n69 || /^(fixed|sticky)$/.test(getComputedStyle(_s28).position)) break;
      }
    }
    function Xe(t) {
      var e = [],
        n = t.ownerDocument;
      for (var _r57 = t; _r57 && (e.push({
        dom: _r57,
        top: _r57.scrollTop,
        left: _r57.scrollLeft
      }), t != n); _r57 = ve(_r57));
      return e;
    }
    function Qe(t, e) {
      for (var _n71 = 0; _n71 < t.length; _n71++) {
        var _t$_n = t[_n71],
          _r58 = _t$_n.dom,
          _o49 = _t$_n.top,
          _i36 = _t$_n.left;
        _r58.scrollTop != _o49 + e && (_r58.scrollTop = _o49 + e), _r58.scrollLeft != _i36 && (_r58.scrollLeft = _i36);
      }
    }
    var Ze = null;
    function tn(t, e) {
      var n,
        r,
        o,
        i,
        s = 2e8,
        a = 0,
        l = e.top,
        c = e.top;
      for (var _u4 = t.firstChild, _h2 = 0; _u4; _u4 = _u4.nextSibling, _h2++) {
        var _t77 = void 0;
        if (1 == _u4.nodeType) _t77 = _u4.getClientRects();else {
          if (3 != _u4.nodeType) continue;
          _t77 = we(_u4).getClientRects();
        }
        for (var _d3 = 0; _d3 < _t77.length; _d3++) {
          var _p2 = _t77[_d3];
          if (_p2.top <= l && _p2.bottom >= c) {
            l = Math.max(_p2.bottom, l), c = Math.min(_p2.top, c);
            var _t78 = _p2.left > e.left ? _p2.left - e.left : _p2.right < e.left ? e.left - _p2.right : 0;
            if (_t78 < s) {
              n = _u4, s = _t78, r = _t78 && 3 == n.nodeType ? {
                left: _p2.right < e.left ? _p2.right : _p2.left,
                top: e.top
              } : e, 1 == _u4.nodeType && _t78 && (a = _h2 + (e.left >= (_p2.left + _p2.right) / 2 ? 1 : 0));
              continue;
            }
          } else _p2.top > e.top && !o && _p2.left <= e.left && _p2.right >= e.left && (o = _u4, i = {
            left: Math.max(_p2.left, Math.min(_p2.right, e.left)),
            top: _p2.top
          });
          !n && (e.left >= _p2.right && e.top >= _p2.top || e.left >= _p2.left && e.top >= _p2.bottom) && (a = _h2 + 1);
        }
      }
      return !n && o && (n = o, r = i, s = 0), n && 3 == n.nodeType ? function (t, e) {
        var n = t.nodeValue.length,
          r = global.document.createRange();
        for (var _o50 = 0; _o50 < n; _o50++) {
          r.setEnd(t, _o50 + 1), r.setStart(t, _o50);
          var _n72 = sn(r, 1);
          if (_n72.top != _n72.bottom && en(e, _n72)) return {
            node: t,
            offset: _o50 + (e.left >= (_n72.left + _n72.right) / 2 ? 1 : 0)
          };
        }
        return {
          node: t,
          offset: 0
        };
      }(n, r) : !n || s && 1 == n.nodeType ? {
        node: t,
        offset: a
      } : tn(n, r);
    }
    function en(t, e) {
      return t.left >= e.left - 1 && t.left <= e.right + 1 && t.top >= e.top - 1 && t.top <= e.bottom + 1;
    }
    function nn(t, e, n) {
      var r = t.childNodes.length;
      if (r && n.top < n.bottom) for (var _o51 = Math.max(0, Math.min(r - 1, Math.floor(r * (e.top - n.top) / (n.bottom - n.top)) - 2)), _i37 = _o51;;) {
        var _n73 = t.childNodes[_i37];
        if (1 == _n73.nodeType) {
          var _t79 = _n73.getClientRects();
          for (var _r59 = 0; _r59 < _t79.length; _r59++) {
            var _o52 = _t79[_r59];
            if (en(e, _o52)) return nn(_n73, e, _o52);
          }
        }
        if ((_i37 = (_i37 + 1) % r) == _o51) break;
      }
      return t;
    }
    function rn(t, e) {
      var _i38;
      var n,
        r = t.dom.ownerDocument,
        o = 0,
        i = function (t, e, n) {
          if (t.caretPositionFromPoint) try {
            var _r60 = t.caretPositionFromPoint(e, n);
            if (_r60) return {
              node: _r60.offsetNode,
              offset: _r60.offset
            };
          } catch (t) {}
          if (t.caretRangeFromPoint) {
            var _r61 = t.caretRangeFromPoint(e, n);
            if (_r61) return {
              node: _r61.startContainer,
              offset: _r61.startOffset
            };
          }
        }(r, e.left, e.top);
      i && (_i38 = i, n = _i38.node, o = _i38.offset, _i38);
      var s,
        a = (t.root.elementFromPoint ? t.root : r).elementFromPoint(e.left, e.top);
      if (!a || !t.dom.contains(1 != a.nodeType ? a.parentNode : a)) {
        var _n74 = t.dom.getBoundingClientRect();
        if (!en(e, _n74)) return null;
        if (a = nn(t.dom, e, _n74), !a) return null;
      }
      if ($e) for (var _t80 = a; n && _t80; _t80 = ve(_t80)) _t80.draggable && (n = void 0);
      if (a = function (t, e) {
        var n = t.parentNode;
        return n && /^li$/i.test(n.nodeName) && e.left < t.getBoundingClientRect().left ? n : t;
      }(a, e), n) {
        if (Fe && 1 == n.nodeType && (o = Math.min(o, n.childNodes.length), o < n.childNodes.length)) {
          var _t81,
            _r62 = n.childNodes[o];
          "IMG" == _r62.nodeName && (_t81 = _r62.getBoundingClientRect()).right <= e.left && _t81.bottom > e.top && o++;
        }
        var _r63;
        Ke && o && 1 == n.nodeType && 1 == (_r63 = n.childNodes[o - 1]).nodeType && "false" == _r63.contentEditable && _r63.getBoundingClientRect().top >= e.top && o--, n == t.dom && o == n.childNodes.length - 1 && 1 == n.lastChild.nodeType && e.top > n.lastChild.getBoundingClientRect().bottom ? s = t.state.doc.content.size : 0 != o && 1 == n.nodeType && "BR" == n.childNodes[o - 1].nodeName || (s = function (t, e, n, r) {
          var o = -1;
          for (var _n75 = e, _i39 = !1; _n75 != t.dom;) {
            var _e102 = t.docView.nearestDesc(_n75, !0);
            if (!_e102) return null;
            if (1 == _e102.dom.nodeType && (_e102.node.isBlock && _e102.parent && !_i39 || !_e102.contentDOM)) {
              var _t82 = _e102.dom.getBoundingClientRect();
              if (_e102.node.isBlock && _e102.parent && !_i39 && (_i39 = !0, _t82.left > r.left || _t82.top > r.top ? o = _e102.posBefore : (_t82.right < r.left || _t82.bottom < r.top) && (o = _e102.posAfter)), !_e102.contentDOM && o < 0 && !_e102.node.isText) return (_e102.node.isBlock ? r.top < (_t82.top + _t82.bottom) / 2 : r.left < (_t82.left + _t82.right) / 2) ? _e102.posBefore : _e102.posAfter;
            }
            _n75 = _e102.dom.parentNode;
          }
          return o > -1 ? o : t.docView.posFromDOM(e, n, -1);
        }(t, n, o, e));
      }
      null == s && (s = function (t, e, n) {
        var _tn = tn(e, n),
          r = _tn.node,
          o = _tn.offset,
          i = -1;
        if (1 == r.nodeType && !r.firstChild) {
          var _t83 = r.getBoundingClientRect();
          i = _t83.left != _t83.right && n.left > (_t83.left + _t83.right) / 2 ? 1 : -1;
        }
        return t.docView.posFromDOM(r, o, i);
      }(t, a, e));
      var l = t.docView.nearestDesc(a, !0);
      return {
        pos: s,
        inside: l ? l.posAtStart - l.border : -1
      };
    }
    function on(t) {
      return t.top < t.bottom || t.left < t.right;
    }
    function sn(t, e) {
      var n = t.getClientRects();
      if (n.length) {
        var _t84 = n[e < 0 ? 0 : n.length - 1];
        if (on(_t84)) return _t84;
      }
      return Array.prototype.find.call(n, on) || t.getBoundingClientRect();
    }
    var an = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
    function ln(t, e, n) {
      var _t$docView$domFromPos = t.docView.domFromPos(e, n < 0 ? -1 : 1),
        r = _t$docView$domFromPos.node,
        o = _t$docView$domFromPos.offset,
        i = _t$docView$domFromPos.atom,
        s = Ke || Fe;
      if (3 == r.nodeType) {
        if (!s || !an.test(r.nodeValue) && (n < 0 ? o : o != r.nodeValue.length)) {
          var _t85 = o,
            _e103 = o,
            _i40 = n < 0 ? 1 : -1;
          return n < 0 && !o ? (_e103++, _i40 = -1) : n >= 0 && o == r.nodeValue.length ? (_t85--, _i40 = 1) : n < 0 ? _t85-- : _e103++, cn(sn(we(r, _t85, _e103), _i40), _i40 < 0);
        }
        {
          var _t86 = sn(we(r, o, o), n);
          if (Fe && o && /\s/.test(r.nodeValue[o - 1]) && o < r.nodeValue.length) {
            var _e104 = sn(we(r, o - 1, o - 1), -1);
            if (_e104.top == _t86.top) {
              var _n76 = sn(we(r, o, o + 1), -1);
              if (_n76.top != _t86.top) return cn(_n76, _n76.left < _e104.left);
            }
          }
          return _t86;
        }
      }
      if (!t.state.doc.resolve(e - (i || 0)).parent.inlineContent) {
        if (null == i && o && (n < 0 || o == Me(r))) {
          var _t87 = r.childNodes[o - 1];
          if (1 == _t87.nodeType) return un(_t87.getBoundingClientRect(), !1);
        }
        if (null == i && o < Me(r)) {
          var _t88 = r.childNodes[o];
          if (1 == _t88.nodeType) return un(_t88.getBoundingClientRect(), !0);
        }
        return un(r.getBoundingClientRect(), n >= 0);
      }
      if (null == i && o && (n < 0 || o == Me(r))) {
        var _t89 = r.childNodes[o - 1],
          _e105 = 3 == _t89.nodeType ? we(_t89, Me(_t89) - (s ? 0 : 1)) : 1 != _t89.nodeType || "BR" == _t89.nodeName && _t89.nextSibling ? null : _t89;
        if (_e105) return cn(sn(_e105, 1), !1);
      }
      if (null == i && o < Me(r)) {
        var _t90 = r.childNodes[o];
        for (; _t90.pmViewDesc && _t90.pmViewDesc.ignoreForCoords;) _t90 = _t90.nextSibling;
        var _e106 = _t90 ? 3 == _t90.nodeType ? we(_t90, 0, s ? 0 : 1) : 1 == _t90.nodeType ? _t90 : null : null;
        if (_e106) return cn(sn(_e106, -1), !0);
      }
      return cn(sn(3 == r.nodeType ? we(r) : r, -n), n >= 0);
    }
    function cn(t, e) {
      if (0 == t.width) return t;
      var n = e ? t.left : t.right;
      return {
        top: t.top,
        bottom: t.bottom,
        left: n,
        right: n
      };
    }
    function un(t, e) {
      if (0 == t.height) return t;
      var n = e ? t.top : t.bottom;
      return {
        top: n,
        bottom: n,
        left: t.left,
        right: t.right
      };
    }
    function hn(t, e, n) {
      var r = t.state,
        o = t.root.activeElement;
      r != e && t.updateState(e), o != t.dom && t.focus();
      try {
        return n();
      } finally {
        r != e && t.updateState(r), o != t.dom && o && o.focus();
      }
    }
    var dn = /[\u0590-\u08ac]/;
    var pn = null,
      fn = null,
      mn = !1;
    var gn = /*#__PURE__*/function () {
      function gn(t, e, n, r) {
        _classCallCheck(this, gn);
        this.parent = t, this.children = e, this.dom = n, this.contentDOM = r, this.dirty = 0, n.pmViewDesc = this;
      }
      _createClass(gn, [{
        key: "matchesWidget",
        value: function matchesWidget(t) {
          return !1;
        }
      }, {
        key: "matchesMark",
        value: function matchesMark(t) {
          return !1;
        }
      }, {
        key: "matchesNode",
        value: function matchesNode(t, e, n) {
          return !1;
        }
      }, {
        key: "matchesHack",
        value: function matchesHack(t) {
          return !1;
        }
      }, {
        key: "parseRule",
        value: function parseRule() {
          return null;
        }
      }, {
        key: "stopEvent",
        value: function stopEvent(t) {
          return !1;
        }
      }, {
        key: "size",
        get: function get() {
          var t = 0;
          for (var _e107 = 0; _e107 < this.children.length; _e107++) t += this.children[_e107].size;
          return t;
        }
      }, {
        key: "border",
        get: function get() {
          return 0;
        }
      }, {
        key: "destroy",
        value: function destroy() {
          this.parent = void 0, this.dom.pmViewDesc == this && (this.dom.pmViewDesc = void 0);
          for (var _t91 = 0; _t91 < this.children.length; _t91++) this.children[_t91].destroy();
        }
      }, {
        key: "posBeforeChild",
        value: function posBeforeChild(t) {
          for (var _e108 = 0, _n77 = this.posAtStart;; _e108++) {
            var _r64 = this.children[_e108];
            if (_r64 == t) return _n77;
            _n77 += _r64.size;
          }
        }
      }, {
        key: "posBefore",
        get: function get() {
          return this.parent.posBeforeChild(this);
        }
      }, {
        key: "posAtStart",
        get: function get() {
          return this.parent ? this.parent.posBeforeChild(this) + this.border : 0;
        }
      }, {
        key: "posAfter",
        get: function get() {
          return this.posBefore + this.size;
        }
      }, {
        key: "posAtEnd",
        get: function get() {
          return this.posAtStart + this.size - 2 * this.border;
        }
      }, {
        key: "localPosFromDOM",
        value: function localPosFromDOM(t, e, n) {
          if (this.contentDOM && this.contentDOM.contains(1 == t.nodeType ? t : t.parentNode)) {
            if (n < 0) {
              var _n78, _r65;
              if (t == this.contentDOM) _n78 = t.childNodes[e - 1];else {
                for (; t.parentNode != this.contentDOM;) t = t.parentNode;
                _n78 = t.previousSibling;
              }
              for (; _n78 && (!(_r65 = _n78.pmViewDesc) || _r65.parent != this);) _n78 = _n78.previousSibling;
              return _n78 ? this.posBeforeChild(_r65) + _r65.size : this.posAtStart;
            }
            {
              var _n79, _r66;
              if (t == this.contentDOM) _n79 = t.childNodes[e];else {
                for (; t.parentNode != this.contentDOM;) t = t.parentNode;
                _n79 = t.nextSibling;
              }
              for (; _n79 && (!(_r66 = _n79.pmViewDesc) || _r66.parent != this);) _n79 = _n79.nextSibling;
              return _n79 ? this.posBeforeChild(_r66) : this.posAtEnd;
            }
          }
          var r;
          if (t == this.dom && this.contentDOM) r = e > ye(this.contentDOM);else if (this.contentDOM && this.contentDOM != this.dom && this.dom.contains(this.contentDOM)) r = 2 & t.compareDocumentPosition(this.contentDOM);else if (this.dom.firstChild) {
            if (0 == e) for (var _e109 = t;; _e109 = _e109.parentNode) {
              if (_e109 == this.dom) {
                r = !1;
                break;
              }
              if (_e109.previousSibling) break;
            }
            if (null == r && e == t.childNodes.length) for (var _e110 = t;; _e110 = _e110.parentNode) {
              if (_e110 == this.dom) {
                r = !0;
                break;
              }
              if (_e110.nextSibling) break;
            }
          }
          return (null == r ? n > 0 : r) ? this.posAtEnd : this.posAtStart;
        }
      }, {
        key: "nearestDesc",
        value: function nearestDesc(t) {
          var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
          for (var _n80 = !0, _r67 = t; _r67; _r67 = _r67.parentNode) {
            var _o53 = void 0,
              _i41 = this.getDesc(_r67);
            if (_i41 && (!e || _i41.node)) {
              if (!_n80 || !(_o53 = _i41.nodeDOM) || (1 == _o53.nodeType ? _o53.contains(1 == t.nodeType ? t : t.parentNode) : _o53 == t)) return _i41;
              _n80 = !1;
            }
          }
        }
      }, {
        key: "getDesc",
        value: function getDesc(t) {
          var e = t.pmViewDesc;
          for (var _t92 = e; _t92; _t92 = _t92.parent) if (_t92 == this) return e;
        }
      }, {
        key: "posFromDOM",
        value: function posFromDOM(t, e, n) {
          for (var _r68 = t; _r68; _r68 = _r68.parentNode) {
            var _o54 = this.getDesc(_r68);
            if (_o54) return _o54.localPosFromDOM(t, e, n);
          }
          return -1;
        }
      }, {
        key: "descAt",
        value: function descAt(t) {
          for (var _e111 = 0, _n81 = 0; _e111 < this.children.length; _e111++) {
            var _r69 = this.children[_e111],
              _o55 = _n81 + _r69.size;
            if (_n81 == t && _o55 != _n81) {
              for (; !_r69.border && _r69.children.length;) _r69 = _r69.children[0];
              return _r69;
            }
            if (t < _o55) return _r69.descAt(t - _n81 - _r69.border);
            _n81 = _o55;
          }
        }
      }, {
        key: "domFromPos",
        value: function domFromPos(t, e) {
          if (!this.contentDOM) return {
            node: this.dom,
            offset: 0,
            atom: t + 1
          };
          var n = 0,
            r = 0;
          for (var _e112 = 0; n < this.children.length; n++) {
            var _o56 = this.children[n],
              _i42 = _e112 + _o56.size;
            if (_i42 > t || _o56 instanceof Sn) {
              r = t - _e112;
              break;
            }
            _e112 = _i42;
          }
          if (r) return this.children[n].domFromPos(r - this.children[n].border, e);
          for (var _t93; n && !(_t93 = this.children[n - 1]).size && _t93 instanceof yn && _t93.side >= 0; n--);
          if (e <= 0) {
            var _t94,
              _r70 = !0;
            for (; _t94 = n ? this.children[n - 1] : null, _t94 && _t94.dom.parentNode != this.contentDOM; n--, _r70 = !1);
            return _t94 && e && _r70 && !_t94.border && !_t94.domAtom ? _t94.domFromPos(_t94.size, e) : {
              node: this.contentDOM,
              offset: _t94 ? ye(_t94.dom) + 1 : 0
            };
          }
          {
            var _t95,
              _r71 = !0;
            for (; _t95 = n < this.children.length ? this.children[n] : null, _t95 && _t95.dom.parentNode != this.contentDOM; n++, _r71 = !1);
            return _t95 && _r71 && !_t95.border && !_t95.domAtom ? _t95.domFromPos(0, e) : {
              node: this.contentDOM,
              offset: _t95 ? ye(_t95.dom) : this.contentDOM.childNodes.length
            };
          }
        }
      }, {
        key: "parseRange",
        value: function parseRange(t, e) {
          var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
          if (0 == this.children.length) return {
            node: this.contentDOM,
            from: t,
            to: e,
            fromOffset: 0,
            toOffset: this.contentDOM.childNodes.length
          };
          var r = -1,
            o = -1;
          for (var _i43 = n, _s29 = 0;; _s29++) {
            var _n82 = this.children[_s29],
              _a21 = _i43 + _n82.size;
            if (-1 == r && t <= _a21) {
              var _o57 = _i43 + _n82.border;
              if (t >= _o57 && e <= _a21 - _n82.border && _n82.node && _n82.contentDOM && this.contentDOM.contains(_n82.contentDOM)) return _n82.parseRange(t, e, _o57);
              t = _i43;
              for (var _e113 = _s29; _e113 > 0; _e113--) {
                var _n83 = this.children[_e113 - 1];
                if (_n83.size && _n83.dom.parentNode == this.contentDOM && !_n83.emptyChildAt(1)) {
                  r = ye(_n83.dom) + 1;
                  break;
                }
                t -= _n83.size;
              }
              -1 == r && (r = 0);
            }
            if (r > -1 && (_a21 > e || _s29 == this.children.length - 1)) {
              e = _a21;
              for (var _t96 = _s29 + 1; _t96 < this.children.length; _t96++) {
                var _n84 = this.children[_t96];
                if (_n84.size && _n84.dom.parentNode == this.contentDOM && !_n84.emptyChildAt(-1)) {
                  o = ye(_n84.dom);
                  break;
                }
                e += _n84.size;
              }
              -1 == o && (o = this.contentDOM.childNodes.length);
              break;
            }
            _i43 = _a21;
          }
          return {
            node: this.contentDOM,
            from: t,
            to: e,
            fromOffset: r,
            toOffset: o
          };
        }
      }, {
        key: "emptyChildAt",
        value: function emptyChildAt(t) {
          if (this.border || !this.contentDOM || !this.children.length) return !1;
          var e = this.children[t < 0 ? 0 : this.children.length - 1];
          return 0 == e.size || e.emptyChildAt(t);
        }
      }, {
        key: "domAfterPos",
        value: function domAfterPos(t) {
          var _this$domFromPos = this.domFromPos(t, 0),
            e = _this$domFromPos.node,
            n = _this$domFromPos.offset;
          if (1 != e.nodeType || n == e.childNodes.length) throw new RangeError("No node after pos " + t);
          return e.childNodes[n];
        }
      }, {
        key: "setSelection",
        value: function setSelection(t, e, n) {
          var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
          var o = Math.min(t, e),
            i = Math.max(t, e);
          for (var _s30 = 0, _a22 = 0; _s30 < this.children.length; _s30++) {
            var _l16 = this.children[_s30],
              _c16 = _a22 + _l16.size;
            if (o > _a22 && i < _c16) return _l16.setSelection(t - _a22 - _l16.border, e - _a22 - _l16.border, n, r);
            _a22 = _c16;
          }
          var s = this.domFromPos(t, t ? -1 : 1),
            a = e == t ? s : this.domFromPos(e, e ? -1 : 1),
            l = n.getSelection(),
            c = !1;
          if ((Fe || $e) && t == e) {
            var _s31 = s,
              _t97 = _s31.node,
              _e114 = _s31.offset;
            if (3 == _t97.nodeType) {
              if (c = !(!_e114 || "\n" != _t97.nodeValue[_e114 - 1]), c && _e114 == _t97.nodeValue.length) for (var _e115, _n85 = _t97; _n85; _n85 = _n85.parentNode) {
                if (_e115 = _n85.nextSibling) {
                  "BR" == _e115.nodeName && (s = a = {
                    node: _e115.parentNode,
                    offset: ye(_e115) + 1
                  });
                  break;
                }
                var _t98 = _n85.pmViewDesc;
                if (_t98 && _t98.node && _t98.node.isBlock) break;
              }
            } else {
              var _n86 = _t97.childNodes[_e114 - 1];
              c = _n86 && ("BR" == _n86.nodeName || "false" == _n86.contentEditable);
            }
          }
          if (Fe && l.focusNode && l.focusNode != a.node && 1 == l.focusNode.nodeType) {
            var _t99 = l.focusNode.childNodes[l.focusOffset];
            _t99 && "false" == _t99.contentEditable && (r = !0);
          }
          if (!(r || c && $e) && xe(s.node, s.offset, l.anchorNode, l.anchorOffset) && xe(a.node, a.offset, l.focusNode, l.focusOffset)) return;
          var u = !1;
          if ((l.extend || t == e) && !c) {
            l.collapse(s.node, s.offset);
            try {
              t != e && l.extend(a.node, a.offset), u = !0;
            } catch (t) {}
          }
          if (!u) {
            if (t > e) {
              var _t100 = s;
              s = a, a = _t100;
            }
            var _n87 = global.document.createRange();
            _n87.setEnd(a.node, a.offset), _n87.setStart(s.node, s.offset), l.removeAllRanges(), l.addRange(_n87);
          }
        }
      }, {
        key: "ignoreMutation",
        value: function ignoreMutation(t) {
          return !this.contentDOM && "selection" != t.type;
        }
      }, {
        key: "contentLost",
        get: function get() {
          return this.contentDOM && this.contentDOM != this.dom && !this.dom.contains(this.contentDOM);
        }
      }, {
        key: "markDirty",
        value: function markDirty(t, e) {
          for (var _n88 = 0, _r72 = 0; _r72 < this.children.length; _r72++) {
            var _o58 = this.children[_r72],
              _i44 = _n88 + _o58.size;
            if (_n88 == _i44 ? t <= _i44 && e >= _n88 : t < _i44 && e > _n88) {
              var _r73 = _n88 + _o58.border,
                _s32 = _i44 - _o58.border;
              if (t >= _r73 && e <= _s32) return this.dirty = t == _n88 || e == _i44 ? 2 : 1, void (t != _r73 || e != _s32 || !_o58.contentLost && _o58.dom.parentNode == this.contentDOM ? _o58.markDirty(t - _r73, e - _r73) : _o58.dirty = 3);
              _o58.dirty = _o58.dom != _o58.contentDOM || _o58.dom.parentNode != this.contentDOM || _o58.children.length ? 3 : 2;
            }
            _n88 = _i44;
          }
          this.dirty = 2;
        }
      }, {
        key: "markParentsDirty",
        value: function markParentsDirty() {
          var t = 1;
          for (var _e116 = this.parent; _e116; _e116 = _e116.parent, t++) {
            var _n89 = 1 == t ? 2 : 1;
            _e116.dirty < _n89 && (_e116.dirty = _n89);
          }
        }
      }, {
        key: "domAtom",
        get: function get() {
          return !1;
        }
      }, {
        key: "ignoreForCoords",
        get: function get() {
          return !1;
        }
      }]);
      return gn;
    }();
    var yn = /*#__PURE__*/function (_gn) {
      _inherits(yn, _gn);
      function yn(t, e, n, r) {
        var _this22;
        _classCallCheck(this, yn);
        var o,
          i = e.type.toDOM;
        if ("function" == typeof i && (i = i(n, function () {
          return o ? o.parent ? o.parent.posBeforeChild(o) : void 0 : r;
        })), !e.type.spec.raw) {
          if (1 != i.nodeType) {
            var _t101 = global.document.createElement("span");
            _t101.appendChild(i), i = _t101;
          }
          i.contentEditable = "false", i.classList.add("ProseMirror-widget");
        }
        _this22 = _callSuper(this, yn, [t, [], i, null]), _this22.widget = e, _this22.widget = e, o = _assertThisInitialized(_this22);
        return _this22;
      }
      _createClass(yn, [{
        key: "matchesWidget",
        value: function matchesWidget(t) {
          return 0 == this.dirty && t.type.eq(this.widget.type);
        }
      }, {
        key: "parseRule",
        value: function parseRule() {
          return {
            ignore: !0
          };
        }
      }, {
        key: "stopEvent",
        value: function stopEvent(t) {
          var e = this.widget.spec.stopEvent;
          return !!e && e(t);
        }
      }, {
        key: "ignoreMutation",
        value: function ignoreMutation(t) {
          return "selection" != t.type || this.widget.spec.ignoreSelection;
        }
      }, {
        key: "destroy",
        value: function destroy() {
          this.widget.type.destroy(this.dom), _get(_getPrototypeOf(yn.prototype), "destroy", this).call(this);
        }
      }, {
        key: "domAtom",
        get: function get() {
          return !0;
        }
      }, {
        key: "side",
        get: function get() {
          return this.widget.type.side;
        }
      }]);
      return yn;
    }(gn);
    var vn = /*#__PURE__*/function (_gn2) {
      _inherits(vn, _gn2);
      function vn(t, e, n, r) {
        var _this23;
        _classCallCheck(this, vn);
        _this23 = _callSuper(this, vn, [t, [], e, null]), _this23.textDOM = n, _this23.text = r;
        return _this23;
      }
      _createClass(vn, [{
        key: "size",
        get: function get() {
          return this.text.length;
        }
      }, {
        key: "localPosFromDOM",
        value: function localPosFromDOM(t, e) {
          return t != this.textDOM ? this.posAtStart + (e ? this.size : 0) : this.posAtStart + e;
        }
      }, {
        key: "domFromPos",
        value: function domFromPos(t) {
          return {
            node: this.textDOM,
            offset: t
          };
        }
      }, {
        key: "ignoreMutation",
        value: function ignoreMutation(t) {
          return "characterData" === t.type && t.target.nodeValue == t.oldValue;
        }
      }]);
      return vn;
    }(gn);
    var bn = /*#__PURE__*/function (_gn3) {
      _inherits(bn, _gn3);
      function bn(t, e, n, r) {
        var _this24;
        _classCallCheck(this, bn);
        _this24 = _callSuper(this, bn, [t, [], n, r]), _this24.mark = e;
        return _this24;
      }
      _createClass(bn, [{
        key: "parseRule",
        value: function parseRule() {
          return 3 & this.dirty || this.mark.type.spec.reparseInView ? null : {
            mark: this.mark.type.name,
            attrs: this.mark.attrs,
            contentElement: this.contentDOM
          };
        }
      }, {
        key: "matchesMark",
        value: function matchesMark(t) {
          return 3 != this.dirty && this.mark.eq(t);
        }
      }, {
        key: "markDirty",
        value: function markDirty(t, e) {
          if (_get(_getPrototypeOf(bn.prototype), "markDirty", this).call(this, t, e), 0 != this.dirty) {
            var _t102 = this.parent;
            for (; !_t102.node;) _t102 = _t102.parent;
            _t102.dirty < this.dirty && (_t102.dirty = this.dirty), this.dirty = 0;
          }
        }
      }, {
        key: "slice",
        value: function slice(t, e, n) {
          var r = bn.create(this.parent, this.mark, !0, n),
            o = this.children,
            i = this.size;
          e < i && (o = Fn(o, e, i, n)), t > 0 && (o = Fn(o, 0, t, n));
          for (var _t103 = 0; _t103 < o.length; _t103++) o[_t103].parent = r;
          return r.children = o, r;
        }
      }], [{
        key: "create",
        value: function create(t, e, n, r) {
          var o = r.nodeViews[e.type.name],
            i = o && o(e, r, n);
          return i && i.dom || (i = it.renderSpec(global.document, e.type.spec.toDOM(e, n))), new bn(t, e, i.dom, i.contentDOM || i.dom);
        }
      }]);
      return bn;
    }(gn);
    var wn = /*#__PURE__*/function (_gn4) {
      _inherits(wn, _gn4);
      function wn(t, e, n, r, o, i, s, a, l) {
        var _this25;
        _classCallCheck(this, wn);
        _this25 = _callSuper(this, wn, [t, [], o, i]), _this25.node = e, _this25.outerDeco = n, _this25.innerDeco = r, _this25.nodeDOM = s;
        return _this25;
      }
      _createClass(wn, [{
        key: "parseRule",
        value: function parseRule() {
          var _this26 = this;
          if (this.node.type.spec.reparseInView) return null;
          var t = {
            node: this.node.type.name,
            attrs: this.node.attrs
          };
          if ("pre" == this.node.type.whitespace && (t.preserveWhitespace = "full"), this.contentDOM) {
            if (this.contentLost) {
              for (var _e117 = this.children.length - 1; _e117 >= 0; _e117--) {
                var _n90 = this.children[_e117];
                if (this.dom.contains(_n90.dom.parentNode)) {
                  t.contentElement = _n90.dom.parentNode;
                  break;
                }
              }
              t.contentElement || (t.getContent = function () {
                return i.empty;
              });
            } else t.contentElement = this.contentDOM;
          } else t.getContent = function () {
            return _this26.node.content;
          };
          return t;
        }
      }, {
        key: "matchesNode",
        value: function matchesNode(t, e, n) {
          return 0 == this.dirty && t.eq(this.node) && Rn(e, this.outerDeco) && n.eq(this.innerDeco);
        }
      }, {
        key: "size",
        get: function get() {
          return this.node.nodeSize;
        }
      }, {
        key: "border",
        get: function get() {
          return this.node.isLeaf ? 0 : 1;
        }
      }, {
        key: "updateChildren",
        value: function updateChildren(t, e) {
          var _this27 = this;
          var n = this.node.inlineContent,
            r = e,
            o = t.composing ? this.localCompositionInfo(t, e) : null,
            i = o && o.pos > -1 ? o : null,
            s = o && o.pos < 0,
            a = new Pn(this, i && i.node, t);
          !function (t, e, n, r) {
            var o = e.locals(t),
              i = 0;
            if (0 == o.length) {
              for (var _n91 = 0; _n91 < t.childCount; _n91++) {
                var _s33 = t.child(_n91);
                r(_s33, o, e.forChild(i, _s33), _n91), i += _s33.nodeSize;
              }
              return;
            }
            var s = 0,
              a = [],
              l = null;
            for (var _c17 = 0;;) {
              var _u5 = void 0,
                _h3 = void 0,
                _d4 = void 0,
                _p3 = void 0;
              for (; s < o.length && o[s].to == i;) {
                var _t104 = o[s++];
                _t104.widget && (_u5 ? (_h3 || (_h3 = [_u5])).push(_t104) : _u5 = _t104);
              }
              if (_u5) if (_h3) {
                _h3.sort(Ln);
                for (var _t105 = 0; _t105 < _h3.length; _t105++) n(_h3[_t105], _c17, !!l);
              } else n(_u5, _c17, !!l);
              if (l) _p3 = -1, _d4 = l, l = null;else {
                if (!(_c17 < t.childCount)) break;
                _p3 = _c17, _d4 = t.child(_c17++);
              }
              for (var _t106 = 0; _t106 < a.length; _t106++) a[_t106].to <= i && a.splice(_t106--, 1);
              for (; s < o.length && o[s].from <= i && o[s].to > i;) a.push(o[s++]);
              var _f3 = i + _d4.nodeSize;
              if (_d4.isText) {
                var _t107 = _f3;
                s < o.length && o[s].from < _t107 && (_t107 = o[s].from);
                for (var _e118 = 0; _e118 < a.length; _e118++) a[_e118].to < _t107 && (_t107 = a[_e118].to);
                _t107 < _f3 && (l = _d4.cut(_t107 - i), _d4 = _d4.cut(0, _t107 - i), _f3 = _t107, _p3 = -1);
              } else for (; s < o.length && o[s].to < _f3;) s++;
              r(_d4, _d4.isInline && !_d4.isLeaf ? a.filter(function (t) {
                return !t.inline;
              }) : a.slice(), e.forChild(i, _d4), _p3), i = _f3;
            }
          }(this.node, this.innerDeco, function (e, o, i) {
            e.spec.marks ? a.syncToMarks(e.spec.marks, n, t) : e.type.side >= 0 && !i && a.syncToMarks(o == _this27.node.childCount ? c.none : _this27.node.child(o).marks, n, t), a.placeWidget(e, t, r);
          }, function (e, i, l, c) {
            var u;
            a.syncToMarks(e.marks, n, t), a.findNodeMatch(e, i, l, c) || s && t.state.selection.from > r && t.state.selection.to < r + e.nodeSize && (u = a.findIndexWithChild(o.node)) > -1 && a.updateNodeAt(e, i, l, u, t) || a.updateNextNode(e, i, l, t, c, r) || a.addNode(e, i, l, t, r), r += e.nodeSize;
          }), a.syncToMarks([], n, t), this.node.isTextblock && a.addTextblockHacks(), a.destroyRest(), (a.changed || 2 == this.dirty) && (i && this.protectLocalComposition(t, i), On(this.contentDOM, this.children, t), _e && function (t) {
            if ("UL" == t.nodeName || "OL" == t.nodeName) {
              var _e119 = t.style.cssText;
              t.style.cssText = _e119 + "; list-style: square !important", global.window.getComputedStyle(t).listStyle, t.style.cssText = _e119;
            }
          }(this.dom));
        }
      }, {
        key: "localCompositionInfo",
        value: function localCompositionInfo(t, e) {
          var _t$state$selection = t.state.selection,
            n = _t$state$selection.from,
            r = _t$state$selection.to;
          if (!(t.state.selection instanceof Qt) || n < e || r > e + this.node.content.size) return null;
          var o = t.domSelectionRange(),
            i = function (t, e) {
              for (;;) {
                if (3 == t.nodeType) return t;
                if (1 == t.nodeType && e > 0) {
                  if (t.childNodes.length > e && 3 == t.childNodes[e].nodeType) return t.childNodes[e];
                  e = Me(t = t.childNodes[e - 1]);
                } else {
                  if (!(1 == t.nodeType && e < t.childNodes.length)) return null;
                  t = t.childNodes[e], e = 0;
                }
              }
            }(o.focusNode, o.focusOffset);
          if (!i || !this.dom.contains(i.parentNode)) return null;
          if (this.node.inlineContent) {
            var _t108 = i.nodeValue,
              _o59 = function (t, e, n, r) {
                for (var _o60 = 0, _i45 = 0; _o60 < t.childCount && _i45 <= r;) {
                  var _s34 = t.child(_o60++),
                    _a23 = _i45;
                  if (_i45 += _s34.nodeSize, !_s34.isText) continue;
                  var _l17 = _s34.text;
                  for (; _o60 < t.childCount;) {
                    var _e120 = t.child(_o60++);
                    if (_i45 += _e120.nodeSize, !_e120.isText) break;
                    _l17 += _e120.text;
                  }
                  if (_i45 >= n) {
                    if (_i45 >= r && _l17.slice(r - e.length - _a23, r - _a23) == e) return r - e.length;
                    var _t109 = _a23 < r ? _l17.lastIndexOf(e, r - _a23 - 1) : -1;
                    if (_t109 >= 0 && _t109 + e.length + _a23 >= n) return _a23 + _t109;
                    if (n == r && _l17.length >= r + e.length - _a23 && _l17.slice(r - _a23, r - _a23 + e.length) == e) return r;
                  }
                }
                return -1;
              }(this.node.content, _t108, n - e, r - e);
            return _o59 < 0 ? null : {
              node: i,
              pos: _o59,
              text: _t108
            };
          }
          return {
            node: i,
            pos: -1,
            text: ""
          };
        }
      }, {
        key: "protectLocalComposition",
        value: function protectLocalComposition(t, _ref4) {
          var e = _ref4.node,
            n = _ref4.pos,
            r = _ref4.text;
          if (this.getDesc(e)) return;
          var o = e;
          for (; o.parentNode != this.contentDOM; o = o.parentNode) {
            for (; o.previousSibling;) o.parentNode.removeChild(o.previousSibling);
            for (; o.nextSibling;) o.parentNode.removeChild(o.nextSibling);
            o.pmViewDesc && (o.pmViewDesc = void 0);
          }
          var i = new vn(this, o, e, r);
          t.input.compositionNodes.push(i), this.children = Fn(this.children, n, n + r.length, t, i);
        }
      }, {
        key: "update",
        value: function update(t, e, n, r) {
          return !(3 == this.dirty || !t.sameMarkup(this.node) || (this.updateInner(t, e, n, r), 0));
        }
      }, {
        key: "updateInner",
        value: function updateInner(t, e, n, r) {
          this.updateOuterDeco(e), this.node = t, this.innerDeco = n, this.contentDOM && this.updateChildren(r, this.posAtStart), this.dirty = 0;
        }
      }, {
        key: "updateOuterDeco",
        value: function updateOuterDeco(t) {
          if (Rn(t, this.outerDeco)) return;
          var e = 1 != this.nodeDOM.nodeType,
            n = this.dom;
          this.dom = An(this.dom, this.nodeDOM, En(this.outerDeco, this.node, e), En(t, this.node, e)), this.dom != n && (n.pmViewDesc = void 0, this.dom.pmViewDesc = this), this.outerDeco = t;
        }
      }, {
        key: "selectNode",
        value: function selectNode() {
          1 == this.nodeDOM.nodeType && this.nodeDOM.classList.add("ProseMirror-selectednode"), !this.contentDOM && this.node.type.spec.draggable || (this.dom.draggable = !0);
        }
      }, {
        key: "deselectNode",
        value: function deselectNode() {
          1 == this.nodeDOM.nodeType && this.nodeDOM.classList.remove("ProseMirror-selectednode"), !this.contentDOM && this.node.type.spec.draggable || this.dom.removeAttribute("draggable");
        }
      }, {
        key: "domAtom",
        get: function get() {
          return this.node.isAtom;
        }
      }], [{
        key: "create",
        value: function create(t, e, n, r, o, i) {
          var _it$renderSpec3;
          var s,
            a = o.nodeViews[e.type.name],
            l = a && a(e, o, function () {
              return s ? s.parent ? s.parent.posBeforeChild(s) : void 0 : i;
            }, n, r),
            c = l && l.dom,
            u = l && l.contentDOM;
          if (e.isText) {
            if (c) {
              if (3 != c.nodeType) throw new RangeError("Text must be rendered as a DOM text node");
            } else c = global.document.createTextNode(e.text);
          } else c || (_it$renderSpec3 = it.renderSpec(global.document, e.type.spec.toDOM(e)), c = _it$renderSpec3.dom, u = _it$renderSpec3.contentDOM, _it$renderSpec3);
          u || e.isText || "BR" == c.nodeName || (c.hasAttribute("contenteditable") || (c.contentEditable = "false"), e.type.spec.draggable && (c.draggable = !0));
          var h = c;
          return c = Dn(c, n, e), l ? s = new Mn(t, e, n, r, c, u || null, h, l, o, i + 1) : e.isText ? new kn(t, e, n, r, c, h, o) : new wn(t, e, n, r, c, u || null, h, o, i + 1);
        }
      }]);
      return wn;
    }(gn);
    function xn(t, e, n, r, o) {
      Dn(r, e, t);
      var i = new wn(void 0, t, e, n, r, r, r, o, 0);
      return i.contentDOM && i.updateChildren(o, 0), i;
    }
    var kn = /*#__PURE__*/function (_wn) {
      _inherits(kn, _wn);
      function kn(t, e, n, r, o, i, s) {
        _classCallCheck(this, kn);
        return _callSuper(this, kn, [t, e, n, r, o, null, i, s, 0]);
      }
      _createClass(kn, [{
        key: "parseRule",
        value: function parseRule() {
          var t = this.nodeDOM.parentNode;
          for (; t && t != this.dom && !t.pmIsDeco;) t = t.parentNode;
          return {
            skip: t || !0
          };
        }
      }, {
        key: "update",
        value: function update(t, e, n, r) {
          return !(3 == this.dirty || 0 != this.dirty && !this.inParent() || !t.sameMarkup(this.node) || (this.updateOuterDeco(e), 0 == this.dirty && t.text == this.node.text || t.text == this.nodeDOM.nodeValue || (this.nodeDOM.nodeValue = t.text, r.trackWrites == this.nodeDOM && (r.trackWrites = null)), this.node = t, this.dirty = 0, 0));
        }
      }, {
        key: "inParent",
        value: function inParent() {
          var t = this.parent.contentDOM;
          for (var _e121 = this.nodeDOM; _e121; _e121 = _e121.parentNode) if (_e121 == t) return !0;
          return !1;
        }
      }, {
        key: "domFromPos",
        value: function domFromPos(t) {
          return {
            node: this.nodeDOM,
            offset: t
          };
        }
      }, {
        key: "localPosFromDOM",
        value: function localPosFromDOM(t, e, n) {
          return t == this.nodeDOM ? this.posAtStart + Math.min(e, this.node.text.length) : _get(_getPrototypeOf(kn.prototype), "localPosFromDOM", this).call(this, t, e, n);
        }
      }, {
        key: "ignoreMutation",
        value: function ignoreMutation(t) {
          return "characterData" != t.type && "selection" != t.type;
        }
      }, {
        key: "slice",
        value: function slice(t, e, n) {
          var r = this.node.cut(t, e),
            o = global.document.createTextNode(r.text);
          return new kn(this.parent, r, this.outerDeco, this.innerDeco, o, o, n);
        }
      }, {
        key: "markDirty",
        value: function markDirty(t, e) {
          _get(_getPrototypeOf(kn.prototype), "markDirty", this).call(this, t, e), this.dom == this.nodeDOM || 0 != t && e != this.nodeDOM.nodeValue.length || (this.dirty = 3);
        }
      }, {
        key: "domAtom",
        get: function get() {
          return !1;
        }
      }]);
      return kn;
    }(wn);
    var Sn = /*#__PURE__*/function (_gn5) {
      _inherits(Sn, _gn5);
      function Sn() {
        _classCallCheck(this, Sn);
        return _callSuper(this, Sn, arguments);
      }
      _createClass(Sn, [{
        key: "parseRule",
        value: function parseRule() {
          return {
            ignore: !0
          };
        }
      }, {
        key: "matchesHack",
        value: function matchesHack(t) {
          return 0 == this.dirty && this.dom.nodeName == t;
        }
      }, {
        key: "domAtom",
        get: function get() {
          return !0;
        }
      }, {
        key: "ignoreForCoords",
        get: function get() {
          return "IMG" == this.dom.nodeName;
        }
      }]);
      return Sn;
    }(gn);
    var Mn = /*#__PURE__*/function (_wn2) {
      _inherits(Mn, _wn2);
      function Mn(t, e, n, r, o, i, s, a, l, c) {
        var _this28;
        _classCallCheck(this, Mn);
        _this28 = _callSuper(this, Mn, [t, e, n, r, o, i, s, l, c]), _this28.spec = a;
        return _this28;
      }
      _createClass(Mn, [{
        key: "update",
        value: function update(t, e, n, r) {
          if (3 == this.dirty) return !1;
          if (this.spec.update) {
            var _o61 = this.spec.update(t, e, n);
            return _o61 && this.updateInner(t, e, n, r), _o61;
          }
          return !(!this.contentDOM && !t.isLeaf) && _get(_getPrototypeOf(Mn.prototype), "update", this).call(this, t, e, n, r);
        }
      }, {
        key: "selectNode",
        value: function selectNode() {
          this.spec.selectNode ? this.spec.selectNode() : _get(_getPrototypeOf(Mn.prototype), "selectNode", this).call(this);
        }
      }, {
        key: "deselectNode",
        value: function deselectNode() {
          this.spec.deselectNode ? this.spec.deselectNode() : _get(_getPrototypeOf(Mn.prototype), "deselectNode", this).call(this);
        }
      }, {
        key: "setSelection",
        value: function setSelection(t, e, n, r) {
          this.spec.setSelection ? this.spec.setSelection(t, e, n) : _get(_getPrototypeOf(Mn.prototype), "setSelection", this).call(this, t, e, n, r);
        }
      }, {
        key: "destroy",
        value: function destroy() {
          this.spec.destroy && this.spec.destroy(), _get(_getPrototypeOf(Mn.prototype), "destroy", this).call(this);
        }
      }, {
        key: "stopEvent",
        value: function stopEvent(t) {
          return !!this.spec.stopEvent && this.spec.stopEvent(t);
        }
      }, {
        key: "ignoreMutation",
        value: function ignoreMutation(t) {
          return this.spec.ignoreMutation ? this.spec.ignoreMutation(t) : _get(_getPrototypeOf(Mn.prototype), "ignoreMutation", this).call(this, t);
        }
      }]);
      return Mn;
    }(wn);
    function On(t, e, n) {
      var r = t.firstChild,
        o = !1;
      for (var _i46 = 0; _i46 < e.length; _i46++) {
        var _s35 = e[_i46],
          _a24 = _s35.dom;
        if (_a24.parentNode == t) {
          for (; _a24 != r;) r = In(r), o = !0;
          r = r.nextSibling;
        } else o = !0, t.insertBefore(_a24, r);
        if (_s35 instanceof bn) {
          var _e122 = r ? r.previousSibling : t.lastChild;
          On(_s35.contentDOM, _s35.children, n), r = _e122 ? _e122.nextSibling : t.firstChild;
        }
      }
      for (; r;) r = In(r), o = !0;
      o && n.trackWrites == t && (n.trackWrites = null);
    }
    var Tn = function Tn(t) {
      t && (this.nodeName = t);
    };
    Tn.prototype = Object.create(null);
    var Cn = [new Tn()];
    function En(t, e, n) {
      if (0 == t.length) return Cn;
      var r = n ? Cn[0] : new Tn(),
        o = [r];
      for (var _i47 = 0; _i47 < t.length; _i47++) {
        var _s36 = t[_i47].type.attrs;
        if (_s36) {
          _s36.nodeName && o.push(r = new Tn(_s36.nodeName));
          for (var _t110 in _s36) {
            var _i48 = _s36[_t110];
            null != _i48 && (n && 1 == o.length && o.push(r = new Tn(e.isInline ? "span" : "div")), "class" == _t110 ? r.class = (r.class ? r.class + " " : "") + _i48 : "style" == _t110 ? r.style = (r.style ? r.style + ";" : "") + _i48 : "nodeName" != _t110 && (r[_t110] = _i48));
          }
        }
      }
      return o;
    }
    function An(t, e, n, r) {
      if (n == Cn && r == Cn) return e;
      var o = e;
      for (var _e123 = 0; _e123 < r.length; _e123++) {
        var _i49 = r[_e123],
          _s37 = n[_e123];
        if (_e123) {
          var _e124 = void 0;
          _s37 && _s37.nodeName == _i49.nodeName && o != t && (_e124 = o.parentNode) && _e124.nodeName.toLowerCase() == _i49.nodeName || (_e124 = global.document.createElement(_i49.nodeName), _e124.pmIsDeco = !0, _e124.appendChild(o), _s37 = Cn[0]), o = _e124;
        }
        Nn(o, _s37 || Cn[0], _i49);
      }
      return o;
    }
    function Nn(t, e, n) {
      for (var _r74 in e) "class" == _r74 || "style" == _r74 || "nodeName" == _r74 || _r74 in n || t.removeAttribute(_r74);
      for (var _r75 in n) "class" != _r75 && "style" != _r75 && "nodeName" != _r75 && n[_r75] != e[_r75] && t.setAttribute(_r75, n[_r75]);
      if (e.class != n.class) {
        var _r76 = e.class ? e.class.split(" ").filter(Boolean) : [],
          _o62 = n.class ? n.class.split(" ").filter(Boolean) : [];
        for (var _e125 = 0; _e125 < _r76.length; _e125++) -1 == _o62.indexOf(_r76[_e125]) && t.classList.remove(_r76[_e125]);
        for (var _e126 = 0; _e126 < _o62.length; _e126++) -1 == _r76.indexOf(_o62[_e126]) && t.classList.add(_o62[_e126]);
        0 == t.classList.length && t.removeAttribute("class");
      }
      if (e.style != n.style) {
        if (e.style) {
          var _n92,
            _r77 = /\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g;
          for (; _n92 = _r77.exec(e.style);) t.style.removeProperty(_n92[1]);
        }
        n.style && (t.style.cssText += n.style);
      }
    }
    function Dn(t, e, n) {
      return An(t, t, Cn, En(e, n, 1 != t.nodeType));
    }
    function Rn(t, e) {
      if (t.length != e.length) return !1;
      for (var _n93 = 0; _n93 < t.length; _n93++) if (!t[_n93].type.eq(e[_n93].type)) return !1;
      return !0;
    }
    function In(t) {
      var e = t.nextSibling;
      return t.parentNode.removeChild(t), e;
    }
    var Pn = /*#__PURE__*/function () {
      function Pn(t, e, n) {
        _classCallCheck(this, Pn);
        this.lock = e, this.view = n, this.index = 0, this.stack = [], this.changed = !1, this.top = t, this.preMatch = function (t, e) {
          var n = e,
            r = n.children.length,
            o = t.childCount,
            i = new Map(),
            s = [];
          t: for (; o > 0;) {
            var _a25 = void 0;
            for (;;) if (r) {
              var _t111 = n.children[r - 1];
              if (!(_t111 instanceof bn)) {
                _a25 = _t111, r--;
                break;
              }
              n = _t111, r = _t111.children.length;
            } else {
              if (n == e) break t;
              r = n.parent.children.indexOf(n), n = n.parent;
            }
            var _l18 = _a25.node;
            if (_l18) {
              if (_l18 != t.child(o - 1)) break;
              --o, i.set(_a25, o), s.push(_a25);
            }
          }
          return {
            index: o,
            matched: i,
            matches: s.reverse()
          };
        }(t.node.content, t);
      }
      _createClass(Pn, [{
        key: "destroyBetween",
        value: function destroyBetween(t, e) {
          if (t != e) {
            for (var _n94 = t; _n94 < e; _n94++) this.top.children[_n94].destroy();
            this.top.children.splice(t, e - t), this.changed = !0;
          }
        }
      }, {
        key: "destroyRest",
        value: function destroyRest() {
          this.destroyBetween(this.index, this.top.children.length);
        }
      }, {
        key: "syncToMarks",
        value: function syncToMarks(t, e, n) {
          var r = 0,
            o = this.stack.length >> 1,
            i = Math.min(o, t.length);
          for (; r < i && (r == o - 1 ? this.top : this.stack[r + 1 << 1]).matchesMark(t[r]) && !1 !== t[r].type.spec.spanning;) r++;
          for (; r < o;) this.destroyRest(), this.top.dirty = 0, this.index = this.stack.pop(), this.top = this.stack.pop(), o--;
          for (; o < t.length;) {
            this.stack.push(this.top, this.index + 1);
            var _r78 = -1;
            for (var _e127 = this.index; _e127 < Math.min(this.index + 3, this.top.children.length); _e127++) {
              var _n95 = this.top.children[_e127];
              if (_n95.matchesMark(t[o]) && !this.isLocked(_n95.dom)) {
                _r78 = _e127;
                break;
              }
            }
            if (_r78 > -1) _r78 > this.index && (this.changed = !0, this.destroyBetween(this.index, _r78)), this.top = this.top.children[this.index];else {
              var _r79 = bn.create(this.top, t[o], e, n);
              this.top.children.splice(this.index, 0, _r79), this.top = _r79, this.changed = !0;
            }
            this.index = 0, o++;
          }
        }
      }, {
        key: "findNodeMatch",
        value: function findNodeMatch(t, e, n, r) {
          var o,
            i = -1;
          if (r >= this.preMatch.index && (o = this.preMatch.matches[r - this.preMatch.index]).parent == this.top && o.matchesNode(t, e, n)) i = this.top.children.indexOf(o, this.index);else for (var _r80 = this.index, _o63 = Math.min(this.top.children.length, _r80 + 5); _r80 < _o63; _r80++) {
            var _o64 = this.top.children[_r80];
            if (_o64.matchesNode(t, e, n) && !this.preMatch.matched.has(_o64)) {
              i = _r80;
              break;
            }
          }
          return !(i < 0 || (this.destroyBetween(this.index, i), this.index++, 0));
        }
      }, {
        key: "updateNodeAt",
        value: function updateNodeAt(t, e, n, r, o) {
          var i = this.top.children[r];
          return 3 == i.dirty && i.dom == i.contentDOM && (i.dirty = 2), !!i.update(t, e, n, o) && (this.destroyBetween(this.index, r), this.index++, !0);
        }
      }, {
        key: "findIndexWithChild",
        value: function findIndexWithChild(t) {
          for (;;) {
            var _e128 = t.parentNode;
            if (!_e128) return -1;
            if (_e128 == this.top.contentDOM) {
              var _e129 = t.pmViewDesc;
              if (_e129) for (var _t112 = this.index; _t112 < this.top.children.length; _t112++) if (this.top.children[_t112] == _e129) return _t112;
              return -1;
            }
            t = _e128;
          }
        }
      }, {
        key: "updateNextNode",
        value: function updateNextNode(t, e, n, r, o, i) {
          for (var _s38 = this.index; _s38 < this.top.children.length; _s38++) {
            var _a26 = this.top.children[_s38];
            if (_a26 instanceof wn) {
              var _l19 = this.preMatch.matched.get(_a26);
              if (null != _l19 && _l19 != o) return !1;
              var _c18 = void 0,
                _u6 = _a26.dom,
                _h4 = this.isLocked(_u6) && !(t.isText && _a26.node && _a26.node.isText && _a26.nodeDOM.nodeValue == t.text && 3 != _a26.dirty && Rn(e, _a26.outerDeco));
              if (!_h4 && _a26.update(t, e, n, r)) return this.destroyBetween(this.index, _s38), _a26.dom != _u6 && (this.changed = !0), this.index++, !0;
              if (!_h4 && (_c18 = this.recreateWrapper(_a26, t, e, n, r, i))) return this.top.children[this.index] = _c18, _c18.contentDOM && (_c18.dirty = 2, _c18.updateChildren(r, i + 1), _c18.dirty = 0), this.changed = !0, this.index++, !0;
              break;
            }
          }
          return !1;
        }
      }, {
        key: "recreateWrapper",
        value: function recreateWrapper(t, e, n, r, o, i) {
          if (t.dirty || e.isAtom || !t.children.length || !t.node.content.eq(e.content)) return null;
          var s = wn.create(this.top, e, n, r, o, i);
          if (s.contentDOM) {
            s.children = t.children, t.children = [];
            var _iterator = _createForOfIteratorHelper(s.children),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var _t113 = _step.value;
                _t113.parent = s;
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
          return t.destroy(), s;
        }
      }, {
        key: "addNode",
        value: function addNode(t, e, n, r, o) {
          var i = wn.create(this.top, t, e, n, r, o);
          i.contentDOM && i.updateChildren(r, o + 1), this.top.children.splice(this.index++, 0, i), this.changed = !0;
        }
      }, {
        key: "placeWidget",
        value: function placeWidget(t, e, n) {
          var r = this.index < this.top.children.length ? this.top.children[this.index] : null;
          if (!r || !r.matchesWidget(t) || t != r.widget && r.widget.type.toDOM.parentNode) {
            var _r81 = new yn(this.top, t, e, n);
            this.top.children.splice(this.index++, 0, _r81), this.changed = !0;
          } else this.index++;
        }
      }, {
        key: "addTextblockHacks",
        value: function addTextblockHacks() {
          var t = this.top.children[this.index - 1],
            e = this.top;
          for (; t instanceof bn;) e = t, t = e.children[e.children.length - 1];
          (!t || !(t instanceof kn) || /\n$/.test(t.node.text) || this.view.requiresGeckoHackNode && /\s$/.test(t.node.text)) && (($e || ze) && t && "false" == t.dom.contentEditable && this.addHackNode("IMG", e), this.addHackNode("BR", this.top));
        }
      }, {
        key: "addHackNode",
        value: function addHackNode(t, e) {
          if (e == this.top && this.index < e.children.length && e.children[this.index].matchesHack(t)) this.index++;else {
            var _n96 = global.document.createElement(t);
            "IMG" == t && (_n96.className = "ProseMirror-separator", _n96.alt = ""), "BR" == t && (_n96.className = "ProseMirror-trailingBreak");
            var _r82 = new Sn(this.top, [], _n96, null);
            e != this.top ? e.children.push(_r82) : e.children.splice(this.index++, 0, _r82), this.changed = !0;
          }
        }
      }, {
        key: "isLocked",
        value: function isLocked(t) {
          return this.lock && (t == this.lock || 1 == t.nodeType && t.contains(this.lock.parentNode));
        }
      }]);
      return Pn;
    }();
    function Ln(t, e) {
      return t.type.side - e.type.side;
    }
    function Fn(t, e, n, r, o) {
      var i = [];
      for (var _s39 = 0, _a27 = 0; _s39 < t.length; _s39++) {
        var _l20 = t[_s39],
          _c19 = _a27,
          _u7 = _a27 += _l20.size;
        _c19 >= n || _u7 <= e ? i.push(_l20) : (_c19 < e && i.push(_l20.slice(0, e - _c19, r)), o && (i.push(o), o = void 0), _u7 > n && i.push(_l20.slice(n - _c19, _l20.size, r)));
      }
      return i;
    }
    function Bn(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var n = t.domSelectionRange(),
        r = t.state.doc;
      if (!n.focusNode) return null;
      var o = t.docView.nearestDesc(n.focusNode),
        i = o && 0 == o.size,
        s = t.docView.posFromDOM(n.focusNode, n.focusOffset, 1);
      if (s < 0) return null;
      var a,
        l,
        c = r.resolve(s);
      if (Te(n)) {
        for (a = c; o && !o.node;) o = o.parent;
        var _t114 = o.node;
        if (o && _t114.isAtom && te.isSelectable(_t114) && o.parent && (!_t114.isInline || !function (t, e, n) {
          for (var _r83 = 0 == e, _o65 = e == Me(t); _r83 || _o65;) {
            if (t == n) return !0;
            var _e130 = ye(t);
            if (!(t = t.parentNode)) return !1;
            _r83 = _r83 && 0 == _e130, _o65 = _o65 && _e130 == Me(t);
          }
        }(n.focusNode, n.focusOffset, o.dom))) {
          var _t115 = o.posBefore;
          l = new te(s == _t115 ? c : r.resolve(_t115));
        }
      } else {
        var _e131 = t.docView.posFromDOM(n.anchorNode, n.anchorOffset, 1);
        if (_e131 < 0) return null;
        a = r.resolve(_e131);
      }
      return l || (l = qn(t, a, c, "pointer" == e || t.state.selection.head < c.pos && !i ? 1 : -1)), l;
    }
    function zn(t) {
      return t.editable ? t.hasFocus() : Un(t) && global.document.activeElement && global.document.activeElement.contains(t.dom);
    }
    function jn(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
      var n = t.state.selection;
      if (Wn(t, n), zn(t)) {
        if (!e && t.input.mouseDown && t.input.mouseDown.allowDefault && ze) {
          var _e132 = t.domSelectionRange(),
            _n97 = t.domObserver.currentSelection;
          if (_e132.anchorNode && _n97.anchorNode && xe(_e132.anchorNode, _e132.anchorOffset, _n97.anchorNode, _n97.anchorOffset)) return t.input.mouseDown.delayedSelectionSync = !0, void t.domObserver.setCurSelection();
        }
        if (t.domObserver.disconnectSelection(), t.cursorWrapper) !function (t) {
          var e = t.domSelection(),
            n = global.document.createRange(),
            r = t.cursorWrapper.dom,
            o = "IMG" == r.nodeName;
          o ? n.setEnd(r.parentNode, ye(r) + 1) : n.setEnd(r, 0), n.collapse(!1), e.removeAllRanges(), e.addRange(n), !o && !t.state.selection.visible && Pe && Le <= 11 && (r.disabled = !0, r.disabled = !1);
        }(t);else {
          var _r84,
            _o66,
            _i50 = n.anchor,
            _s40 = n.head;
          !$n || n instanceof Qt || (n.$from.parent.inlineContent || (_r84 = _n(t, n.from)), n.empty || n.$from.parent.inlineContent || (_o66 = _n(t, n.to))), t.docView.setSelection(_i50, _s40, t.root, e), $n && (_r84 && Vn(_r84), _o66 && Vn(_o66)), n.visible ? t.dom.classList.remove("ProseMirror-hideselection") : (t.dom.classList.add("ProseMirror-hideselection"), "onselectionchange" in global.document && function (t) {
            var e = t.dom.ownerDocument;
            e.removeEventListener("selectionchange", t.input.hideSelectionGuard);
            var n = t.domSelectionRange(),
              r = n.anchorNode,
              o = n.anchorOffset;
            e.addEventListener("selectionchange", t.input.hideSelectionGuard = function () {
              n.anchorNode == r && n.anchorOffset == o || (e.removeEventListener("selectionchange", t.input.hideSelectionGuard), setTimeout(function () {
                zn(t) && !t.state.selection.visible || t.dom.classList.remove("ProseMirror-hideselection");
              }, 20));
            });
          }(t));
        }
        t.domObserver.setCurSelection(), t.domObserver.connectSelection();
      }
    }
    var $n = $e || ze && je < 63;
    function _n(t, e) {
      var _t$docView$domFromPos2 = t.docView.domFromPos(e, 0),
        n = _t$docView$domFromPos2.node,
        r = _t$docView$domFromPos2.offset,
        o = r < n.childNodes.length ? n.childNodes[r] : null,
        i = r ? n.childNodes[r - 1] : null;
      if ($e && o && "false" == o.contentEditable) return Hn(o);
      if (!(o && "false" != o.contentEditable || i && "false" != i.contentEditable)) {
        if (o) return Hn(o);
        if (i) return Hn(i);
      }
    }
    function Hn(t) {
      return t.contentEditable = "true", $e && t.draggable && (t.draggable = !1, t.wasDraggable = !0), t;
    }
    function Vn(t) {
      t.contentEditable = "false", t.wasDraggable && (t.draggable = !0, t.wasDraggable = null);
    }
    function Wn(t, e) {
      if (e instanceof te) {
        var _n98 = t.docView.descAt(e.from);
        _n98 != t.lastSelectedViewDesc && (Kn(t), _n98 && _n98.selectNode(), t.lastSelectedViewDesc = _n98);
      } else Kn(t);
    }
    function Kn(t) {
      t.lastSelectedViewDesc && (t.lastSelectedViewDesc.parent && t.lastSelectedViewDesc.deselectNode(), t.lastSelectedViewDesc = void 0);
    }
    function qn(t, e, n, r) {
      return t.someProp("createSelectionBetween", function (r) {
        return r(t, e, n);
      }) || Qt.between(e, n, r);
    }
    function Jn(t) {
      return !(t.editable && !t.hasFocus()) && Un(t);
    }
    function Un(t) {
      var e = t.domSelectionRange();
      if (!e.anchorNode) return !1;
      try {
        return t.dom.contains(3 == e.anchorNode.nodeType ? e.anchorNode.parentNode : e.anchorNode) && (t.editable || t.dom.contains(3 == e.focusNode.nodeType ? e.focusNode.parentNode : e.focusNode));
      } catch (t) {
        return !1;
      }
    }
    function Gn(t, e) {
      var _t$selection = t.selection,
        n = _t$selection.$anchor,
        r = _t$selection.$head,
        o = e > 0 ? n.max(r) : n.min(r),
        i = o.parent.inlineContent ? o.depth ? t.doc.resolve(e > 0 ? o.after() : o.before()) : null : o;
      return i && Ut.findFrom(i, e);
    }
    function Yn(t, e) {
      return t.dispatch(t.state.tr.setSelection(e).scrollIntoView()), !0;
    }
    function Xn(t, e, n) {
      var r = t.state.selection;
      if (!(r instanceof Qt)) {
        if (r instanceof te && r.node.isInline) return Yn(t, new Qt(e > 0 ? r.$to : r.$from));
        {
          var _n99 = Gn(t.state, e);
          return !!_n99 && Yn(t, _n99);
        }
      }
      if (n.indexOf("s") > -1) {
        var _n100 = r.$head,
          _o67 = _n100.textOffset ? null : e < 0 ? _n100.nodeBefore : _n100.nodeAfter;
        if (!_o67 || _o67.isText || !_o67.isLeaf) return !1;
        var _i51 = t.state.doc.resolve(_n100.pos + _o67.nodeSize * (e < 0 ? -1 : 1));
        return Yn(t, new Qt(r.$anchor, _i51));
      }
      if (!r.empty) return !1;
      if (t.endOfTextblock(e > 0 ? "forward" : "backward")) {
        var _n101 = Gn(t.state, e);
        return !!(_n101 && _n101 instanceof te) && Yn(t, _n101);
      }
      if (!(He && n.indexOf("m") > -1)) {
        var _n102,
          _o68 = r.$head,
          _i52 = _o68.textOffset ? null : e < 0 ? _o68.nodeBefore : _o68.nodeAfter;
        if (!_i52 || _i52.isText) return !1;
        var _s41 = e < 0 ? _o68.pos - _i52.nodeSize : _o68.pos;
        return !!(_i52.isAtom || (_n102 = t.docView.descAt(_s41)) && !_n102.contentDOM) && (te.isSelectable(_i52) ? Yn(t, new te(e < 0 ? t.state.doc.resolve(_o68.pos - _i52.nodeSize) : _o68)) : !!Ke && Yn(t, new Qt(t.state.doc.resolve(e < 0 ? _s41 : _s41 + _i52.nodeSize))));
      }
    }
    function Qn(t) {
      return 3 == t.nodeType ? t.nodeValue.length : t.childNodes.length;
    }
    function Zn(t, e) {
      var n = t.pmViewDesc;
      return n && 0 == n.size && (e < 0 || t.nextSibling || "BR" != t.nodeName);
    }
    function tr(t, e) {
      return e < 0 ? function (t) {
        var e = t.domSelectionRange(),
          n = e.focusNode,
          r = e.focusOffset;
        if (!n) return;
        var o,
          i,
          s = !1;
        for (Fe && 1 == n.nodeType && r < Qn(n) && Zn(n.childNodes[r], -1) && (s = !0);;) if (r > 0) {
          if (1 != n.nodeType) break;
          {
            var _t116 = n.childNodes[r - 1];
            if (Zn(_t116, -1)) o = n, i = --r;else {
              if (3 != _t116.nodeType) break;
              n = _t116, r = n.nodeValue.length;
            }
          }
        } else {
          if (er(n)) break;
          {
            var _e133 = n.previousSibling;
            for (; _e133 && Zn(_e133, -1);) o = n.parentNode, i = ye(_e133), _e133 = _e133.previousSibling;
            if (_e133) n = _e133, r = Qn(n);else {
              if (n = n.parentNode, n == t.dom) break;
              r = 0;
            }
          }
        }
        s ? nr(t, n, r) : o && nr(t, o, i);
      }(t) : function (t) {
        var e = t.domSelectionRange(),
          n = e.focusNode,
          r = e.focusOffset;
        if (!n) return;
        var o,
          i,
          s = Qn(n);
        for (;;) if (r < s) {
          if (1 != n.nodeType) break;
          if (!Zn(n.childNodes[r], 1)) break;
          o = n, i = ++r;
        } else {
          if (er(n)) break;
          {
            var _e134 = n.nextSibling;
            for (; _e134 && Zn(_e134, 1);) o = _e134.parentNode, i = ye(_e134) + 1, _e134 = _e134.nextSibling;
            if (_e134) n = _e134, r = 0, s = Qn(n);else {
              if (n = n.parentNode, n == t.dom) break;
              r = s = 0;
            }
          }
        }
        o && nr(t, o, i);
      }(t);
    }
    function er(t) {
      var e = t.pmViewDesc;
      return e && e.node && e.node.isBlock;
    }
    function nr(t, e, n) {
      if (3 != e.nodeType) {
        var _t117, _r85;
        (_r85 = function (t, e) {
          for (; t && e == t.childNodes.length && !Oe(t);) e = ye(t) + 1, t = t.parentNode;
          for (; t && e < t.childNodes.length;) {
            var _n103 = t.childNodes[e];
            if (3 == _n103.nodeType) return _n103;
            if (1 == _n103.nodeType && "false" == _n103.contentEditable) break;
            t = _n103, e = 0;
          }
        }(e, n)) ? (e = _r85, n = 0) : (_t117 = function (t, e) {
          for (; t && !e && !Oe(t);) e = ye(t), t = t.parentNode;
          for (; t && e;) {
            var _n104 = t.childNodes[e - 1];
            if (3 == _n104.nodeType) return _n104;
            if (1 == _n104.nodeType && "false" == _n104.contentEditable) break;
            e = (t = _n104).childNodes.length;
          }
        }(e, n)) && (e = _t117, n = _t117.nodeValue.length);
      }
      var r = t.domSelection();
      if (Te(r)) {
        var _t118 = global.document.createRange();
        _t118.setEnd(e, n), _t118.setStart(e, n), r.removeAllRanges(), r.addRange(_t118);
      } else r.extend && r.extend(e, n);
      t.domObserver.setCurSelection();
      var o = t.state;
      setTimeout(function () {
        t.state == o && jn(t);
      }, 50);
    }
    function rr(t, e) {
      var n = t.state.doc.resolve(e);
      if (!ze && !Ve && n.parent.inlineContent) {
        var _r86 = t.coordsAtPos(e);
        if (e > n.start()) {
          var _n105 = t.coordsAtPos(e - 1),
            _o69 = (_n105.top + _n105.bottom) / 2;
          if (_o69 > _r86.top && _o69 < _r86.bottom && Math.abs(_n105.left - _r86.left) > 1) return _n105.left < _r86.left ? "ltr" : "rtl";
        }
        if (e < n.end()) {
          var _n106 = t.coordsAtPos(e + 1),
            _o70 = (_n106.top + _n106.bottom) / 2;
          if (_o70 > _r86.top && _o70 < _r86.bottom && Math.abs(_n106.left - _r86.left) > 1) return _n106.left > _r86.left ? "ltr" : "rtl";
        }
      }
      return "rtl" == getComputedStyle(t.dom).direction ? "rtl" : "ltr";
    }
    function or(t, e, n) {
      var r = t.state.selection;
      if (r instanceof Qt && !r.empty || n.indexOf("s") > -1) return !1;
      if (He && n.indexOf("m") > -1) return !1;
      var o = r.$from,
        i = r.$to;
      if (!o.parent.inlineContent || t.endOfTextblock(e < 0 ? "up" : "down")) {
        var _n107 = Gn(t.state, e);
        if (_n107 && _n107 instanceof te) return Yn(t, _n107);
      }
      if (!o.parent.inlineContent) {
        var _n108 = e < 0 ? o : i,
          _s42 = r instanceof ne ? Ut.near(_n108, e) : Ut.findFrom(_n108, e);
        return !!_s42 && Yn(t, _s42);
      }
      return !1;
    }
    function ir(t, e) {
      if (!(t.state.selection instanceof Qt)) return !0;
      var _t$state$selection2 = t.state.selection,
        n = _t$state$selection2.$head,
        r = _t$state$selection2.$anchor,
        o = _t$state$selection2.empty;
      if (!n.sameParent(r)) return !0;
      if (!o) return !1;
      if (t.endOfTextblock(e > 0 ? "forward" : "backward")) return !0;
      var i = !n.textOffset && (e < 0 ? n.nodeBefore : n.nodeAfter);
      if (i && !i.isText) {
        var _r87 = t.state.tr;
        return e < 0 ? _r87.delete(n.pos - i.nodeSize, n.pos) : _r87.delete(n.pos, n.pos + i.nodeSize), t.dispatch(_r87), !0;
      }
      return !1;
    }
    function sr(t, e, n) {
      t.domObserver.stop(), e.contentEditable = n, t.domObserver.start();
    }
    function ar(t, e) {
      t.someProp("transformCopied", function (n) {
        e = n(e, t);
      });
      var n = [],
        _e135 = e,
        r = _e135.content,
        o = _e135.openStart,
        i = _e135.openEnd;
      for (; o > 1 && i > 1 && 1 == r.childCount && 1 == r.firstChild.childCount;) {
        o--, i--;
        var _t119 = r.firstChild;
        n.push(_t119.type.name, _t119.attrs != _t119.type.defaultAttrs ? _t119.attrs : null), r = _t119.content;
      }
      var s = t.someProp("clipboardSerializer") || it.fromSchema(t.state.schema),
        a = yr(),
        l = a.createElement("div");
      l.appendChild(s.serializeFragment(r, {
        document: a
      }));
      var c,
        u = l.firstChild,
        h = 0;
      for (; u && 1 == u.nodeType && (c = mr[u.nodeName.toLowerCase()]);) {
        for (var _t120 = c.length - 1; _t120 >= 0; _t120--) {
          var _e136 = a.createElement(c[_t120]);
          for (; l.firstChild;) _e136.appendChild(l.firstChild);
          l.appendChild(_e136), h++;
        }
        u = l.firstChild;
      }
      return u && 1 == u.nodeType && u.setAttribute("data-pm-slice", "".concat(o, " ").concat(i).concat(h ? " -".concat(h) : "", " ").concat(JSON.stringify(n))), {
        dom: l,
        text: t.someProp("clipboardTextSerializer", function (n) {
          return n(e, t);
        }) || e.content.textBetween(0, e.content.size, "\n\n")
      };
    }
    function lr(t, e, n, r, o) {
      var s,
        a,
        l = o.parent.type.spec.code;
      if (!n && !e) return null;
      var c = e && (r || l || !n);
      if (c) {
        if (t.someProp("transformPastedText", function (n) {
          e = n(e, l || r, t);
        }), l) return e ? new h(i.from(t.state.schema.text(e.replace(/\r\n?/g, "\n"))), 0, 0) : h.empty;
        var _n109 = t.someProp("clipboardTextParser", function (n) {
          return n(e, o, r, t);
        });
        if (_n109) a = _n109;else {
          var _n110 = o.marks(),
            _r88 = t.state.schema,
            _i53 = it.fromSchema(_r88);
          s = global.document.createElement("div"), e.split(/(?:\r\n?|\n)+/).forEach(function (t) {
            var e = s.appendChild(global.document.createElement("p"));
            t && e.appendChild(_i53.serializeNode(_r88.text(t, _n110)));
          });
        }
      } else t.someProp("transformPastedHTML", function (e) {
        n = e(n, t);
      }), s = function (t) {
        var e = /^(\s*<meta [^>]*>)*/.exec(t);
        e && (t = t.slice(e[0].length));
        var n,
          r = yr().createElement("div"),
          o = /<([a-z][^>\s]+)/i.exec(t);
        if ((n = o && mr[o[1].toLowerCase()]) && (t = n.map(function (t) {
          return "<" + t + ">";
        }).join("") + t + n.map(function (t) {
          return "</" + t + ">";
        }).reverse().join("")), r.innerHTML = t, n) for (var _t121 = 0; _t121 < n.length; _t121++) r = r.querySelector(n[_t121]) || r;
        return r;
      }(n), Ke && function (t) {
        var e = t.querySelectorAll(ze ? "span:not([class]):not([style])" : "span.Apple-converted-space");
        for (var _n111 = 0; _n111 < e.length; _n111++) {
          var _r89 = e[_n111];
          1 == _r89.childNodes.length && " " == _r89.textContent && _r89.parentNode && _r89.parentNode.replaceChild(t.ownerDocument.createTextNode(" "), _r89);
        }
      }(s);
      var u = s && s.querySelector("[data-pm-slice]"),
        d = u && /^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(u.getAttribute("data-pm-slice") || "");
      if (d && d[3]) for (var _t122 = +d[3]; _t122 > 0; _t122--) {
        var _t123 = s.firstChild;
        for (; _t123 && 1 != _t123.nodeType;) _t123 = _t123.nextSibling;
        if (!_t123) break;
        s = _t123;
      }
      if (!a) {
        var _e137 = t.someProp("clipboardParser") || t.someProp("domParser") || G.fromSchema(t.state.schema);
        a = _e137.parseSlice(s, {
          preserveWhitespace: !(!c && !d),
          context: o,
          ruleFromNode: function ruleFromNode(t) {
            return "BR" != t.nodeName || t.nextSibling || !t.parentNode || cr.test(t.parentNode.nodeName) ? null : {
              ignore: !0
            };
          }
        });
      }
      if (d) a = function (t, e) {
        if (!t.size) return t;
        var n,
          r = t.content.firstChild.type.schema;
        try {
          n = JSON.parse(e);
        } catch (e) {
          return t;
        }
        var o = t.content,
          s = t.openStart,
          a = t.openEnd;
        for (var _t124 = n.length - 2; _t124 >= 0; _t124 -= 2) {
          var _e138 = r.nodes[n[_t124]];
          if (!_e138 || _e138.hasRequiredAttrs()) break;
          o = i.from(_e138.create(n[_t124 + 1], o)), s++, a++;
        }
        return new h(o, s, a);
      }(fr(a, +d[1], +d[2]), d[4]);else if (a = h.maxOpen(function (t, e) {
        if (t.childCount < 2) return t;
        var _loop5 = function _loop5() {
            var r,
              o = e.node(_n112).contentMatchAt(e.index(_n112)),
              s = [];
            if (t.forEach(function (t) {
              if (!s) return;
              var e,
                n = o.findWrapping(t.type);
              if (!n) return s = null;
              if (e = s.length && r.length && hr(n, r, t, s[s.length - 1], 0)) s[s.length - 1] = e;else {
                s.length && (s[s.length - 1] = dr(s[s.length - 1], r.length));
                var _e139 = ur(t, n);
                s.push(_e139), o = o.matchType(_e139.type), r = n;
              }
            }), s) return {
              v: i.from(s)
            };
          },
          _ret3;
        for (var _n112 = e.depth; _n112 >= 0; _n112--) {
          _ret3 = _loop5();
          if (_ret3) return _ret3.v;
        }
        return t;
      }(a.content, o), !0), a.openStart || a.openEnd) {
        var _t125 = 0,
          _e140 = 0;
        for (var _e141 = a.content.firstChild; _t125 < a.openStart && !_e141.type.spec.isolating; _t125++, _e141 = _e141.firstChild);
        for (var _t126 = a.content.lastChild; _e140 < a.openEnd && !_t126.type.spec.isolating; _e140++, _t126 = _t126.lastChild);
        a = fr(a, _t125, _e140);
      }
      return t.someProp("transformPasted", function (e) {
        a = e(a, t);
      }), a;
    }
    var cr = /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
    function ur(t, e) {
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      for (var _r90 = e.length - 1; _r90 >= n; _r90--) t = e[_r90].create(null, i.from(t));
      return t;
    }
    function hr(t, e, n, r, o) {
      if (o < t.length && o < e.length && t[o] == e[o]) {
        var _s43 = hr(t, e, n, r.lastChild, o + 1);
        if (_s43) return r.copy(r.content.replaceChild(r.childCount - 1, _s43));
        if (r.contentMatchAt(r.childCount).matchType(o == t.length - 1 ? n.type : t[o + 1])) return r.copy(r.content.append(i.from(ur(n, t, o + 1))));
      }
    }
    function dr(t, e) {
      if (0 == e) return t;
      var n = t.content.replaceChild(t.childCount - 1, dr(t.lastChild, e - 1)),
        r = t.contentMatchAt(t.childCount).fillBefore(i.empty, !0);
      return t.copy(n.append(r));
    }
    function pr(t, e, n, r, o, s) {
      var a = e < 0 ? t.firstChild : t.lastChild,
        l = a.content;
      return t.childCount > 1 && (s = 0), o < r - 1 && (l = pr(l, e, n, r, o + 1, s)), o >= n && (l = e < 0 ? a.contentMatchAt(0).fillBefore(l, s <= o).append(l) : l.append(a.contentMatchAt(a.childCount).fillBefore(i.empty, !0))), t.replaceChild(e < 0 ? 0 : t.childCount - 1, a.copy(l));
    }
    function fr(t, e, n) {
      return e < t.openStart && (t = new h(pr(t.content, -1, e, t.openStart, 0, t.openEnd), e, t.openEnd)), n < t.openEnd && (t = new h(pr(t.content, 1, n, t.openEnd, 0, 0), t.openStart, n)), t;
    }
    var mr = {
      thead: ["table"],
      tbody: ["table"],
      tfoot: ["table"],
      caption: ["table"],
      colgroup: ["table"],
      col: ["table", "colgroup"],
      tr: ["table", "tbody"],
      td: ["table", "tbody", "tr"],
      th: ["table", "tbody", "tr"]
    };
    var gr = null;
    function yr() {
      return gr || (gr = global.document.implementation.createHTMLDocument("title"));
    }
    var vr = {},
      br = {},
      wr = {
        touchstart: !0,
        touchmove: !0
      };
    var xr = /*#__PURE__*/_createClass(function xr() {
      _classCallCheck(this, xr);
      this.shiftKey = !1, this.mouseDown = null, this.lastKeyCode = null, this.lastKeyCodeTime = 0, this.lastClick = {
        time: 0,
        x: 0,
        y: 0,
        type: ""
      }, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastIOSEnter = 0, this.lastIOSEnterFallbackTimeout = -1, this.lastFocus = 0, this.lastTouch = 0, this.lastAndroidDelete = 0, this.composing = !1, this.composingTimeout = -1, this.compositionNodes = [], this.compositionEndedAt = -2e8, this.compositionID = 1, this.compositionPendingChanges = 0, this.domChangeCount = 0, this.eventHandlers = Object.create(null), this.hideSelectionGuard = null;
    });
    function kr(t, e) {
      t.input.lastSelectionOrigin = e, t.input.lastSelectionTime = Date.now();
    }
    function Sr(t) {
      t.someProp("handleDOMEvents", function (e) {
        for (var _n113 in e) t.input.eventHandlers[_n113] || t.dom.addEventListener(_n113, t.input.eventHandlers[_n113] = function (e) {
          return Mr(t, e);
        });
      });
    }
    function Mr(t, e) {
      return t.someProp("handleDOMEvents", function (n) {
        var r = n[e.type];
        return !!r && (r(t, e) || e.defaultPrevented);
      });
    }
    function Or(t, e) {
      if (!e.bubbles) return !0;
      if (e.defaultPrevented) return !1;
      for (var _n114 = e.target; _n114 != t.dom; _n114 = _n114.parentNode) if (!_n114 || 11 == _n114.nodeType || _n114.pmViewDesc && _n114.pmViewDesc.stopEvent(e)) return !1;
      return !0;
    }
    function Tr(t) {
      return {
        left: t.clientX,
        top: t.clientY
      };
    }
    function Cr(t, e, n, r, o) {
      if (-1 == r) return !1;
      var i = t.state.doc.resolve(r);
      var _loop6 = function _loop6(_r91) {
          if (t.someProp(e, function (e) {
            return _r91 > i.depth ? e(t, n, i.nodeAfter, i.before(_r91), o, !0) : e(t, n, i.node(_r91), i.before(_r91), o, !1);
          })) return {
            v: !0
          };
        },
        _ret4;
      for (var _r91 = i.depth + 1; _r91 > 0; _r91--) {
        _ret4 = _loop6(_r91);
        if (_ret4) return _ret4.v;
      }
      return !1;
    }
    function Er(t, e, n) {
      t.focused || t.focus();
      var r = t.state.tr.setSelection(e);
      "pointer" == n && r.setMeta("pointer", !0), t.dispatch(r);
    }
    function Ar(t, e, n, r) {
      return Cr(t, "handleDoubleClickOn", e, n, r) || t.someProp("handleDoubleClick", function (n) {
        return n(t, e, r);
      });
    }
    function Nr(t, e, n, r) {
      return Cr(t, "handleTripleClickOn", e, n, r) || t.someProp("handleTripleClick", function (n) {
        return n(t, e, r);
      }) || function (t, e, n) {
        if (0 != n.button) return !1;
        var r = t.state.doc;
        if (-1 == e) return !!r.inlineContent && (Er(t, Qt.create(r, 0, r.content.size), "pointer"), !0);
        var o = r.resolve(e);
        for (var _e142 = o.depth + 1; _e142 > 0; _e142--) {
          var _n115 = _e142 > o.depth ? o.nodeAfter : o.node(_e142),
            _i54 = o.before(_e142);
          if (_n115.inlineContent) Er(t, Qt.create(r, _i54 + 1, _i54 + 1 + _n115.content.size), "pointer");else {
            if (!te.isSelectable(_n115)) continue;
            Er(t, te.create(r, _i54), "pointer");
          }
          return !0;
        }
      }(t, n, r);
    }
    function Dr(t) {
      return zr(t);
    }
    br.keydown = function (t, e) {
      var n = e;
      if (t.input.shiftKey = 16 == n.keyCode || n.shiftKey, !Pr(t, n) && (t.input.lastKeyCode = n.keyCode, t.input.lastKeyCodeTime = Date.now(), !We || !ze || 13 != n.keyCode)) if (229 != n.keyCode && t.domObserver.forceFlush(), !_e || 13 != n.keyCode || n.ctrlKey || n.altKey || n.metaKey) t.someProp("handleKeyDown", function (e) {
        return e(t, n);
      }) || function (t, e) {
        var n = e.keyCode,
          r = function (t) {
            var e = "";
            return t.ctrlKey && (e += "c"), t.metaKey && (e += "m"), t.altKey && (e += "a"), t.shiftKey && (e += "s"), e;
          }(e);
        if (8 == n || He && 72 == n && "c" == r) return ir(t, -1) || tr(t, -1);
        if (46 == n && !e.shiftKey || He && 68 == n && "c" == r) return ir(t, 1) || tr(t, 1);
        if (13 == n || 27 == n) return !0;
        if (37 == n || He && 66 == n && "c" == r) {
          var _e143 = 37 == n ? "ltr" == rr(t, t.state.selection.from) ? -1 : 1 : -1;
          return Xn(t, _e143, r) || tr(t, _e143);
        }
        if (39 == n || He && 70 == n && "c" == r) {
          var _e144 = 39 == n ? "ltr" == rr(t, t.state.selection.from) ? 1 : -1 : 1;
          return Xn(t, _e144, r) || tr(t, _e144);
        }
        return 38 == n || He && 80 == n && "c" == r ? or(t, -1, r) || tr(t, -1) : 40 == n || He && 78 == n && "c" == r ? function (t) {
          if (!$e || t.state.selection.$head.parentOffset > 0) return !1;
          var _t$domSelectionRange = t.domSelectionRange(),
            e = _t$domSelectionRange.focusNode,
            n = _t$domSelectionRange.focusOffset;
          if (e && 1 == e.nodeType && 0 == n && e.firstChild && "false" == e.firstChild.contentEditable) {
            var _n116 = e.firstChild;
            sr(t, _n116, "true"), setTimeout(function () {
              return sr(t, _n116, "false");
            }, 20);
          }
          return !1;
        }(t) || or(t, 1, r) || tr(t, 1) : r == (He ? "m" : "c") && (66 == n || 73 == n || 89 == n || 90 == n);
      }(t, n) ? n.preventDefault() : kr(t, "key");else {
        var _e145 = Date.now();
        t.input.lastIOSEnter = _e145, t.input.lastIOSEnterFallbackTimeout = setTimeout(function () {
          t.input.lastIOSEnter == _e145 && (t.someProp("handleKeyDown", function (e) {
            return e(t, Ce(13, "Enter"));
          }), t.input.lastIOSEnter = 0);
        }, 200);
      }
    }, br.keyup = function (t, e) {
      16 == e.keyCode && (t.input.shiftKey = !1);
    }, br.keypress = function (t, e) {
      var n = e;
      if (Pr(t, n) || !n.charCode || n.ctrlKey && !n.altKey || He && n.metaKey) return;
      if (t.someProp("handleKeyPress", function (e) {
        return e(t, n);
      })) return void n.preventDefault();
      var r = t.state.selection;
      if (!(r instanceof Qt && r.$from.sameParent(r.$to))) {
        var _e146 = String.fromCharCode(n.charCode);
        /[\r\n]/.test(_e146) || t.someProp("handleTextInput", function (n) {
          return n(t, r.$from.pos, r.$to.pos, _e146);
        }) || t.dispatch(t.state.tr.insertText(_e146).scrollIntoView()), n.preventDefault();
      }
    };
    var Rr = He ? "metaKey" : "ctrlKey";
    vr.mousedown = function (t, e) {
      var n = e;
      t.input.shiftKey = n.shiftKey;
      var r = Dr(t),
        o = Date.now(),
        i = "singleClick";
      o - t.input.lastClick.time < 500 && function (t, e) {
        var n = e.x - t.clientX,
          r = e.y - t.clientY;
        return n * n + r * r < 100;
      }(n, t.input.lastClick) && !n[Rr] && ("singleClick" == t.input.lastClick.type ? i = "doubleClick" : "doubleClick" == t.input.lastClick.type && (i = "tripleClick")), t.input.lastClick = {
        time: o,
        x: n.clientX,
        y: n.clientY,
        type: i
      };
      var s = t.posAtCoords(Tr(n));
      s && ("singleClick" == i ? (t.input.mouseDown && t.input.mouseDown.done(), t.input.mouseDown = new Ir(t, s, n, !!r)) : ("doubleClick" == i ? Ar : Nr)(t, s.pos, s.inside, n) ? n.preventDefault() : kr(t, "pointer"));
    };
    var Ir = /*#__PURE__*/function () {
      function Ir(t, e, n, r) {
        var _this29 = this;
        _classCallCheck(this, Ir);
        var o, i;
        if (this.view = t, this.pos = e, this.event = n, this.flushed = r, this.delayedSelectionSync = !1, this.mightDrag = null, this.startDoc = t.state.doc, this.selectNode = !!n[Rr], this.allowDefault = n.shiftKey, e.inside > -1) o = t.state.doc.nodeAt(e.inside), i = e.inside;else {
          var _n117 = t.state.doc.resolve(e.pos);
          o = _n117.parent, i = _n117.depth ? _n117.before() : 0;
        }
        var s = r ? null : n.target,
          a = s ? t.docView.nearestDesc(s, !0) : null;
        this.target = a ? a.dom : null;
        var l = t.state.selection;
        (0 == n.button && o.type.spec.draggable && !1 !== o.type.spec.selectable || l instanceof te && l.from <= i && l.to > i) && (this.mightDrag = {
          node: o,
          pos: i,
          addAttr: !(!this.target || this.target.draggable),
          setUneditable: !(!this.target || !Fe || this.target.hasAttribute("contentEditable"))
        }), this.target && this.mightDrag && (this.mightDrag.addAttr || this.mightDrag.setUneditable) && (this.view.domObserver.stop(), this.mightDrag.addAttr && (this.target.draggable = !0), this.mightDrag.setUneditable && setTimeout(function () {
          _this29.view.input.mouseDown == _this29 && _this29.target.setAttribute("contentEditable", "false");
        }, 20), this.view.domObserver.start()), t.root.addEventListener("mouseup", this.up = this.up.bind(this)), t.root.addEventListener("mousemove", this.move = this.move.bind(this)), kr(t, "pointer");
      }
      _createClass(Ir, [{
        key: "done",
        value: function done() {
          var _this30 = this;
          this.view.root.removeEventListener("mouseup", this.up), this.view.root.removeEventListener("mousemove", this.move), this.mightDrag && this.target && (this.view.domObserver.stop(), this.mightDrag.addAttr && this.target.removeAttribute("draggable"), this.mightDrag.setUneditable && this.target.removeAttribute("contentEditable"), this.view.domObserver.start()), this.delayedSelectionSync && setTimeout(function () {
            return jn(_this30.view);
          }), this.view.input.mouseDown = null;
        }
      }, {
        key: "up",
        value: function up(t) {
          if (this.done(), !this.view.dom.contains(t.target)) return;
          var e = this.pos;
          this.view.state.doc != this.startDoc && (e = this.view.posAtCoords(Tr(t))), this.updateAllowDefault(t), this.allowDefault || !e ? kr(this.view, "pointer") : function (t, e, n, r, o) {
            return Cr(t, "handleClickOn", e, n, r) || t.someProp("handleClick", function (n) {
              return n(t, e, r);
            }) || (o ? function (t, e) {
              if (-1 == e) return !1;
              var n,
                r,
                o = t.state.selection;
              o instanceof te && (n = o.node);
              var i = t.state.doc.resolve(e);
              for (var _t127 = i.depth + 1; _t127 > 0; _t127--) {
                var _e147 = _t127 > i.depth ? i.nodeAfter : i.node(_t127);
                if (te.isSelectable(_e147)) {
                  r = n && o.$from.depth > 0 && _t127 >= o.$from.depth && i.before(o.$from.depth + 1) == o.$from.pos ? i.before(o.$from.depth) : i.before(_t127);
                  break;
                }
              }
              return null != r && (Er(t, te.create(t.state.doc, r), "pointer"), !0);
            }(t, n) : function (t, e) {
              if (-1 == e) return !1;
              var n = t.state.doc.resolve(e),
                r = n.nodeAfter;
              return !!(r && r.isAtom && te.isSelectable(r)) && (Er(t, new te(n), "pointer"), !0);
            }(t, n));
          }(this.view, e.pos, e.inside, t, this.selectNode) ? t.preventDefault() : 0 == t.button && (this.flushed || $e && this.mightDrag && !this.mightDrag.node.isAtom || ze && !this.view.state.selection.visible && Math.min(Math.abs(e.pos - this.view.state.selection.from), Math.abs(e.pos - this.view.state.selection.to)) <= 2) ? (Er(this.view, Ut.near(this.view.state.doc.resolve(e.pos)), "pointer"), t.preventDefault()) : kr(this.view, "pointer");
        }
      }, {
        key: "move",
        value: function move(t) {
          this.updateAllowDefault(t), kr(this.view, "pointer"), 0 == t.buttons && this.done();
        }
      }, {
        key: "updateAllowDefault",
        value: function updateAllowDefault(t) {
          !this.allowDefault && (Math.abs(this.event.x - t.clientX) > 4 || Math.abs(this.event.y - t.clientY) > 4) && (this.allowDefault = !0);
        }
      }]);
      return Ir;
    }();
    function Pr(t, e) {
      return !!t.composing || !!($e && Math.abs(e.timeStamp - t.input.compositionEndedAt) < 500) && (t.input.compositionEndedAt = -2e8, !0);
    }
    vr.touchstart = function (t) {
      t.input.lastTouch = Date.now(), Dr(t), kr(t, "pointer");
    }, vr.touchmove = function (t) {
      t.input.lastTouch = Date.now(), kr(t, "pointer");
    }, vr.contextmenu = function (t) {
      return Dr(t);
    };
    var Lr = We ? 5e3 : -1;
    function Fr(t, e) {
      clearTimeout(t.input.composingTimeout), e > -1 && (t.input.composingTimeout = setTimeout(function () {
        return zr(t);
      }, e));
    }
    function Br(t) {
      for (t.composing && (t.input.composing = !1, t.input.compositionEndedAt = function () {
        var t = global.document.createEvent("Event");
        return t.initEvent("event", !0, !0), t.timeStamp;
      }()); t.input.compositionNodes.length > 0;) t.input.compositionNodes.pop().markParentsDirty();
    }
    function zr(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
      if (!(We && t.domObserver.flushingSoon >= 0)) {
        if (t.domObserver.forceFlush(), Br(t), e || t.docView && t.docView.dirty) {
          var _e148 = Bn(t);
          return _e148 && !_e148.eq(t.state.selection) ? t.dispatch(t.state.tr.setSelection(_e148)) : t.updateState(t.state), !0;
        }
        return !1;
      }
    }
    br.compositionstart = br.compositionupdate = function (t) {
      if (!t.composing) {
        t.domObserver.flush();
        var _e149 = t.state,
          _n118 = _e149.selection.$from;
        if (_e149.selection.empty && (_e149.storedMarks || !_n118.textOffset && _n118.parentOffset && _n118.nodeBefore.marks.some(function (t) {
          return !1 === t.type.spec.inclusive;
        }))) t.markCursor = t.state.storedMarks || _n118.marks(), zr(t, !0), t.markCursor = null;else if (zr(t), Fe && _e149.selection.empty && _n118.parentOffset && !_n118.textOffset && _n118.nodeBefore.marks.length) {
          var _e150 = t.domSelectionRange();
          for (var _n119 = _e150.focusNode, _r92 = _e150.focusOffset; _n119 && 1 == _n119.nodeType && 0 != _r92;) {
            var _e151 = _r92 < 0 ? _n119.lastChild : _n119.childNodes[_r92 - 1];
            if (!_e151) break;
            if (3 == _e151.nodeType) {
              t.domSelection().collapse(_e151, _e151.nodeValue.length);
              break;
            }
            _n119 = _e151, _r92 = -1;
          }
        }
        t.input.composing = !0;
      }
      Fr(t, Lr);
    }, br.compositionend = function (t, e) {
      t.composing && (t.input.composing = !1, t.input.compositionEndedAt = e.timeStamp, t.input.compositionPendingChanges = t.domObserver.pendingRecords().length ? t.input.compositionID : 0, t.input.compositionPendingChanges && Promise.resolve().then(function () {
        return t.domObserver.flush();
      }), t.input.compositionID++, Fr(t, 20));
    };
    var jr = Pe && Le < 15 || _e && qe < 604;
    function $r(t, e, n, r, o) {
      var i = lr(t, e, n, r, t.state.selection.$from);
      if (t.someProp("handlePaste", function (e) {
        return e(t, o, i || h.empty);
      })) return !0;
      if (!i) return !1;
      var s = function (t) {
          return 0 == t.openStart && 0 == t.openEnd && 1 == t.content.childCount ? t.content.firstChild : null;
        }(i),
        a = s ? t.state.tr.replaceSelectionWith(s, r) : t.state.tr.replaceSelection(i);
      return t.dispatch(a.scrollIntoView().setMeta("paste", !0).setMeta("uiEvent", "paste")), !0;
    }
    function _r(t) {
      var e = t.getData("text/plain") || t.getData("Text");
      if (e) return e;
      var n = t.getData("text/uri-list");
      return n ? n.replace(/\r?\n/g, " ") : "";
    }
    vr.copy = br.cut = function (t, e) {
      var n = e,
        r = t.state.selection,
        o = "cut" == n.type;
      if (r.empty) return;
      var i = jr ? null : n.clipboardData,
        s = r.content(),
        _ar = ar(t, s),
        a = _ar.dom,
        l = _ar.text;
      i ? (n.preventDefault(), i.clearData(), i.setData("text/html", a.innerHTML), i.setData("text/plain", l)) : function (t, e) {
        if (!t.dom.parentNode) return;
        var n = t.dom.parentNode.appendChild(global.document.createElement("div"));
        n.appendChild(e), n.style.cssText = "position: fixed; left: -10000px; top: 10px";
        var r = getSelection(),
          o = global.document.createRange();
        o.selectNodeContents(e), t.dom.blur(), r.removeAllRanges(), r.addRange(o), setTimeout(function () {
          n.parentNode && n.parentNode.removeChild(n), t.focus();
        }, 50);
      }(t, a), o && t.dispatch(t.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent", "cut"));
    }, br.paste = function (t, e) {
      var n = e;
      if (t.composing && !We) return;
      var r = jr ? null : n.clipboardData,
        o = t.input.shiftKey && 45 != t.input.lastKeyCode;
      r && $r(t, _r(r), r.getData("text/html"), o, n) ? n.preventDefault() : function (t, e) {
        if (!t.dom.parentNode) return;
        var n = t.input.shiftKey || t.state.selection.$from.parent.type.spec.code,
          r = t.dom.parentNode.appendChild(global.document.createElement(n ? "textarea" : "div"));
        n || (r.contentEditable = "true"), r.style.cssText = "position: fixed; left: -10000px; top: 10px", r.focus();
        var o = t.input.shiftKey && 45 != t.input.lastKeyCode;
        setTimeout(function () {
          t.focus(), r.parentNode && r.parentNode.removeChild(r), n ? $r(t, r.value, null, o, e) : $r(t, r.textContent, r.innerHTML, o, e);
        }, 50);
      }(t, n);
    };
    var Hr = /*#__PURE__*/_createClass(function Hr(t, e, n) {
      _classCallCheck(this, Hr);
      this.slice = t, this.move = e, this.node = n;
    });
    var Vr = He ? "altKey" : "ctrlKey";
    vr.dragstart = function (t, e) {
      var n = e,
        r = t.input.mouseDown;
      if (r && r.done(), !n.dataTransfer) return;
      var o,
        i = t.state.selection,
        s = i.empty ? null : t.posAtCoords(Tr(n));
      if (s && s.pos >= i.from && s.pos <= (i instanceof te ? i.to - 1 : i.to)) ;else if (r && r.mightDrag) o = te.create(t.state.doc, r.mightDrag.pos);else if (n.target && 1 == n.target.nodeType) {
        var _e152 = t.docView.nearestDesc(n.target, !0);
        _e152 && _e152.node.type.spec.draggable && _e152 != t.docView && (o = te.create(t.state.doc, _e152.posBefore));
      }
      var a = (o || t.state.selection).content(),
        _ar2 = ar(t, a),
        l = _ar2.dom,
        c = _ar2.text;
      n.dataTransfer.clearData(), n.dataTransfer.setData(jr ? "Text" : "text/html", l.innerHTML), n.dataTransfer.effectAllowed = "copyMove", jr || n.dataTransfer.setData("text/plain", c), t.dragging = new Hr(a, !n[Vr], o);
    }, vr.dragend = function (t) {
      var e = t.dragging;
      global.window.setTimeout(function () {
        t.dragging == e && (t.dragging = null);
      }, 50);
    }, br.dragover = br.dragenter = function (t, e) {
      return e.preventDefault();
    }, br.drop = function (t, e) {
      var n = e,
        r = t.dragging;
      if (t.dragging = null, !n.dataTransfer) return;
      var o = t.posAtCoords(Tr(n));
      if (!o) return;
      var i = t.state.doc.resolve(o.pos),
        s = r && r.slice;
      s ? t.someProp("transformPasted", function (e) {
        s = e(s, t);
      }) : s = lr(t, _r(n.dataTransfer), jr ? null : n.dataTransfer.getData("text/html"), !1, i);
      var a = !(!r || n[Vr]);
      if (t.someProp("handleDrop", function (e) {
        return e(t, n, s || h.empty, a);
      })) return void n.preventDefault();
      if (!s) return;
      n.preventDefault();
      var l = s ? Rt(t.state.doc, i.pos, s) : i.pos;
      null == l && (l = i.pos);
      var c = t.state.tr;
      if (a) {
        var _t128 = r.node;
        _t128 ? _t128.replace(c) : c.deleteSelection();
      }
      var u = c.mapping.map(l),
        d = 0 == s.openStart && 0 == s.openEnd && 1 == s.content.childCount,
        p = c.doc;
      if (d ? c.replaceRangeWith(u, u, s.content.firstChild) : c.replaceRange(u, u, s), c.doc.eq(p)) return;
      var f = c.doc.resolve(u);
      if (d && te.isSelectable(s.content.firstChild) && f.nodeAfter && f.nodeAfter.sameMarkup(s.content.firstChild)) c.setSelection(new te(f));else {
        var _e153 = c.mapping.map(l);
        c.mapping.maps[c.mapping.maps.length - 1].forEach(function (t, n, r, o) {
          return _e153 = o;
        }), c.setSelection(qn(t, f, c.doc.resolve(_e153)));
      }
      t.focus(), t.dispatch(c.setMeta("uiEvent", "drop"));
    }, vr.focus = function (t) {
      t.input.lastFocus = Date.now(), t.focused || (t.domObserver.stop(), t.dom.classList.add("ProseMirror-focused"), t.domObserver.start(), t.focused = !0, setTimeout(function () {
        t.docView && t.hasFocus() && !t.domObserver.currentSelection.eq(t.domSelectionRange()) && jn(t);
      }, 20));
    }, vr.blur = function (t, e) {
      var n = e;
      t.focused && (t.domObserver.stop(), t.dom.classList.remove("ProseMirror-focused"), t.domObserver.start(), n.relatedTarget && t.dom.contains(n.relatedTarget) && t.domObserver.currentSelection.clear(), t.focused = !1);
    }, vr.beforeinput = function (t, e) {
      if (ze && We && "deleteContentBackward" == e.inputType) {
        t.domObserver.flushSoon();
        var _e154 = t.input.domChangeCount;
        setTimeout(function () {
          if (t.input.domChangeCount != _e154) return;
          if (t.dom.blur(), t.focus(), t.someProp("handleKeyDown", function (e) {
            return e(t, Ce(8, "Backspace"));
          })) return;
          var n = t.state.selection.$cursor;
          n && n.pos > 0 && t.dispatch(t.state.tr.delete(n.pos - 1, n.pos).scrollIntoView());
        }, 50);
      }
    };
    for (var _t129 in br) vr[_t129] = br[_t129];
    function Wr(t, e) {
      if (t == e) return !0;
      for (var _n120 in t) if (t[_n120] !== e[_n120]) return !1;
      for (var _n121 in e) if (!(_n121 in t)) return !1;
      return !0;
    }
    var Kr = /*#__PURE__*/function () {
      function Kr(t, e) {
        _classCallCheck(this, Kr);
        this.toDOM = t, this.spec = e || Yr, this.side = this.spec.side || 0;
      }
      _createClass(Kr, [{
        key: "map",
        value: function map(t, e, n, r) {
          var _t$mapResult2 = t.mapResult(e.from + r, this.side < 0 ? -1 : 1),
            o = _t$mapResult2.pos,
            i = _t$mapResult2.deleted;
          return i ? null : new Ur(o - n, o - n, this);
        }
      }, {
        key: "valid",
        value: function valid() {
          return !0;
        }
      }, {
        key: "eq",
        value: function eq(t) {
          return this == t || t instanceof Kr && (this.spec.key && this.spec.key == t.spec.key || this.toDOM == t.toDOM && Wr(this.spec, t.spec));
        }
      }, {
        key: "destroy",
        value: function destroy(t) {
          this.spec.destroy && this.spec.destroy(t);
        }
      }]);
      return Kr;
    }();
    var qr = /*#__PURE__*/function () {
      function qr(t, e) {
        _classCallCheck(this, qr);
        this.attrs = t, this.spec = e || Yr;
      }
      _createClass(qr, [{
        key: "map",
        value: function map(t, e, n, r) {
          var o = t.map(e.from + r, this.spec.inclusiveStart ? -1 : 1) - n,
            i = t.map(e.to + r, this.spec.inclusiveEnd ? 1 : -1) - n;
          return o >= i ? null : new Ur(o, i, this);
        }
      }, {
        key: "valid",
        value: function valid(t, e) {
          return e.from < e.to;
        }
      }, {
        key: "eq",
        value: function eq(t) {
          return this == t || t instanceof qr && Wr(this.attrs, t.attrs) && Wr(this.spec, t.spec);
        }
      }, {
        key: "destroy",
        value: function destroy() {}
      }], [{
        key: "is",
        value: function is(t) {
          return t.type instanceof qr;
        }
      }]);
      return qr;
    }();
    var Jr = /*#__PURE__*/function () {
      function Jr(t, e) {
        _classCallCheck(this, Jr);
        this.attrs = t, this.spec = e || Yr;
      }
      _createClass(Jr, [{
        key: "map",
        value: function map(t, e, n, r) {
          var o = t.mapResult(e.from + r, 1);
          if (o.deleted) return null;
          var i = t.mapResult(e.to + r, -1);
          return i.deleted || i.pos <= o.pos ? null : new Ur(o.pos - n, i.pos - n, this);
        }
      }, {
        key: "valid",
        value: function valid(t, e) {
          var n,
            _t$content$findIndex = t.content.findIndex(e.from),
            r = _t$content$findIndex.index,
            o = _t$content$findIndex.offset;
          return o == e.from && !(n = t.child(r)).isText && o + n.nodeSize == e.to;
        }
      }, {
        key: "eq",
        value: function eq(t) {
          return this == t || t instanceof Jr && Wr(this.attrs, t.attrs) && Wr(this.spec, t.spec);
        }
      }, {
        key: "destroy",
        value: function destroy() {}
      }]);
      return Jr;
    }();
    var Ur = /*#__PURE__*/function () {
      function Ur(t, e, n) {
        _classCallCheck(this, Ur);
        this.from = t, this.to = e, this.type = n;
      }
      _createClass(Ur, [{
        key: "copy",
        value: function copy(t, e) {
          return new Ur(t, e, this.type);
        }
      }, {
        key: "eq",
        value: function eq(t) {
          var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          return this.type.eq(t.type) && this.from + e == t.from && this.to + e == t.to;
        }
      }, {
        key: "map",
        value: function map(t, e, n) {
          return this.type.map(t, this, e, n);
        }
      }, {
        key: "spec",
        get: function get() {
          return this.type.spec;
        }
      }, {
        key: "inline",
        get: function get() {
          return this.type instanceof qr;
        }
      }, {
        key: "widget",
        get: function get() {
          return this.type instanceof Kr;
        }
      }], [{
        key: "widget",
        value: function widget(t, e, n) {
          return new Ur(t, t, new Kr(e, n));
        }
      }, {
        key: "inline",
        value: function inline(t, e, n, r) {
          return new Ur(t, e, new qr(n, r));
        }
      }, {
        key: "node",
        value: function node(t, e, n, r) {
          return new Ur(t, e, new Jr(n, r));
        }
      }]);
      return Ur;
    }();
    var Gr = [],
      Yr = {};
    var Xr = /*#__PURE__*/function () {
      function Xr(t, e) {
        _classCallCheck(this, Xr);
        this.local = t.length ? t : Gr, this.children = e.length ? e : Gr;
      }
      _createClass(Xr, [{
        key: "find",
        value: function find(t, e, n) {
          var r = [];
          return this.findInner(null == t ? 0 : t, null == e ? 1e9 : e, r, 0, n), r;
        }
      }, {
        key: "findInner",
        value: function findInner(t, e, n, r, o) {
          for (var _i55 = 0; _i55 < this.local.length; _i55++) {
            var _s44 = this.local[_i55];
            _s44.from <= e && _s44.to >= t && (!o || o(_s44.spec)) && n.push(_s44.copy(_s44.from + r, _s44.to + r));
          }
          for (var _i56 = 0; _i56 < this.children.length; _i56 += 3) if (this.children[_i56] < e && this.children[_i56 + 1] > t) {
            var _s45 = this.children[_i56] + 1;
            this.children[_i56 + 2].findInner(t - _s45, e - _s45, n, r + _s45, o);
          }
        }
      }, {
        key: "map",
        value: function map(t, e, n) {
          return this == Qr || 0 == t.maps.length ? this : this.mapInner(t, e, 0, 0, n || Yr);
        }
      }, {
        key: "mapInner",
        value: function mapInner(t, e, n, r, o) {
          var i;
          for (var _s46 = 0; _s46 < this.local.length; _s46++) {
            var _a28 = this.local[_s46].map(t, n, r);
            _a28 && _a28.type.valid(e, _a28) ? (i || (i = [])).push(_a28) : o.onRemove && o.onRemove(this.local[_s46].spec);
          }
          return this.children.length ? function (t, e, n, r, o, i, s) {
            var a = t.slice();
            var _loop7 = function _loop7(_e156) {
              var r = 0;
              n.maps[_t130].forEach(function (t, n, o, i) {
                var s = i - o - (n - t);
                for (var _o71 = 0; _o71 < a.length; _o71 += 3) {
                  var _i58 = a[_o71 + 1];
                  if (_i58 < 0 || t > _i58 + _e156 - r) continue;
                  var _l22 = a[_o71] + _e156 - r;
                  n >= _l22 ? a[_o71 + 1] = t <= _l22 ? -2 : -1 : t >= _e156 && s && (a[_o71] += s, a[_o71 + 1] += s);
                }
                r += s;
              }), _e156 = n.maps[_t130].map(_e156, -1);
              _e155 = _e156;
            };
            for (var _t130 = 0, _e155 = i; _t130 < n.maps.length; _t130++) {
              _loop7(_e155);
            }
            var l = !1;
            for (var _e157 = 0; _e157 < a.length; _e157 += 3) if (a[_e157 + 1] < 0) {
              if (-2 == a[_e157 + 1]) {
                l = !0, a[_e157 + 1] = -1;
                continue;
              }
              var _c20 = n.map(t[_e157] + i),
                _u8 = _c20 - o;
              if (_u8 < 0 || _u8 >= r.content.size) {
                l = !0;
                continue;
              }
              var _h5 = n.map(t[_e157 + 1] + i, -1) - o,
                _r$content$findIndex = r.content.findIndex(_u8),
                _d5 = _r$content$findIndex.index,
                _p4 = _r$content$findIndex.offset,
                _f4 = r.maybeChild(_d5);
              if (_f4 && _p4 == _u8 && _p4 + _f4.nodeSize == _h5) {
                var _r93 = a[_e157 + 2].mapInner(n, _f4, _c20 + 1, t[_e157] + i + 1, s);
                _r93 != Qr ? (a[_e157] = _u8, a[_e157 + 1] = _h5, a[_e157 + 2] = _r93) : (a[_e157 + 1] = -2, l = !0);
              } else l = !0;
            }
            if (l) {
              var _l21 = function (t, e, n, r, o, i, s) {
                  function a(t, e) {
                    for (var _i57 = 0; _i57 < t.local.length; _i57++) {
                      var _a29 = t.local[_i57].map(r, o, e);
                      _a29 ? n.push(_a29) : s.onRemove && s.onRemove(t.local[_i57].spec);
                    }
                    for (var _n122 = 0; _n122 < t.children.length; _n122 += 3) a(t.children[_n122 + 2], t.children[_n122] + e + 1);
                  }
                  for (var _n123 = 0; _n123 < t.length; _n123 += 3) -1 == t[_n123 + 1] && a(t[_n123 + 2], e[_n123] + i + 1);
                  return n;
                }(a, t, e, n, o, i, s),
                _c21 = ro(_l21, r, 0, s);
              e = _c21.local;
              for (var _t131 = 0; _t131 < a.length; _t131 += 3) a[_t131 + 1] < 0 && (a.splice(_t131, 3), _t131 -= 3);
              for (var _t132 = 0, _e158 = 0; _t132 < _c21.children.length; _t132 += 3) {
                var _n124 = _c21.children[_t132];
                for (; _e158 < a.length && a[_e158] < _n124;) _e158 += 3;
                a.splice(_e158, 0, _c21.children[_t132], _c21.children[_t132 + 1], _c21.children[_t132 + 2]);
              }
            }
            return new Xr(e.sort(oo), a);
          }(this.children, i || [], t, e, n, r, o) : i ? new Xr(i.sort(oo), Gr) : Qr;
        }
      }, {
        key: "add",
        value: function add(t, e) {
          return e.length ? this == Qr ? Xr.create(t, e) : this.addInner(t, e, 0) : this;
        }
      }, {
        key: "addInner",
        value: function addInner(t, e, n) {
          var _this31 = this;
          var r,
            o = 0;
          t.forEach(function (t, i) {
            var s,
              a = i + n;
            if (s = eo(e, t, a)) {
              for (r || (r = _this31.children.slice()); o < r.length && r[o] < i;) o += 3;
              r[o] == i ? r[o + 2] = r[o + 2].addInner(t, s, a + 1) : r.splice(o, 0, i, i + t.nodeSize, ro(s, t, a + 1, Yr)), o += 3;
            }
          });
          var i = to(o ? no(e) : e, -n);
          for (var _e159 = 0; _e159 < i.length; _e159++) i[_e159].type.valid(t, i[_e159]) || i.splice(_e159--, 1);
          return new Xr(i.length ? this.local.concat(i).sort(oo) : this.local, r || this.children);
        }
      }, {
        key: "remove",
        value: function remove(t) {
          return 0 == t.length || this == Qr ? this : this.removeInner(t, 0);
        }
      }, {
        key: "removeInner",
        value: function removeInner(t, e) {
          var n = this.children,
            r = this.local;
          for (var _r94 = 0; _r94 < n.length; _r94 += 3) {
            var _o72 = void 0,
              _i59 = n[_r94] + e,
              _s47 = n[_r94 + 1] + e;
            for (var _e160, _n125 = 0; _n125 < t.length; _n125++) (_e160 = t[_n125]) && _e160.from > _i59 && _e160.to < _s47 && (t[_n125] = null, (_o72 || (_o72 = [])).push(_e160));
            if (!_o72) continue;
            n == this.children && (n = this.children.slice());
            var _a30 = n[_r94 + 2].removeInner(_o72, _i59 + 1);
            _a30 != Qr ? n[_r94 + 2] = _a30 : (n.splice(_r94, 3), _r94 -= 3);
          }
          if (r.length) for (var _n126, _o73 = 0; _o73 < t.length; _o73++) if (_n126 = t[_o73]) for (var _t133 = 0; _t133 < r.length; _t133++) r[_t133].eq(_n126, e) && (r == this.local && (r = this.local.slice()), r.splice(_t133--, 1));
          return n == this.children && r == this.local ? this : r.length || n.length ? new Xr(r, n) : Qr;
        }
      }, {
        key: "forChild",
        value: function forChild(t, e) {
          if (this == Qr) return this;
          if (e.isLeaf) return Xr.empty;
          var n, r;
          for (var _e161 = 0; _e161 < this.children.length; _e161 += 3) if (this.children[_e161] >= t) {
            this.children[_e161] == t && (n = this.children[_e161 + 2]);
            break;
          }
          var o = t + 1,
            i = o + e.content.size;
          for (var _t134 = 0; _t134 < this.local.length; _t134++) {
            var _e162 = this.local[_t134];
            if (_e162.from < i && _e162.to > o && _e162.type instanceof qr) {
              var _t135 = Math.max(o, _e162.from) - o,
                _n127 = Math.min(i, _e162.to) - o;
              _t135 < _n127 && (r || (r = [])).push(_e162.copy(_t135, _n127));
            }
          }
          if (r) {
            var _t136 = new Xr(r.sort(oo), Gr);
            return n ? new Zr([_t136, n]) : _t136;
          }
          return n || Qr;
        }
      }, {
        key: "eq",
        value: function eq(t) {
          if (this == t) return !0;
          if (!(t instanceof Xr) || this.local.length != t.local.length || this.children.length != t.children.length) return !1;
          for (var _e163 = 0; _e163 < this.local.length; _e163++) if (!this.local[_e163].eq(t.local[_e163])) return !1;
          for (var _e164 = 0; _e164 < this.children.length; _e164 += 3) if (this.children[_e164] != t.children[_e164] || this.children[_e164 + 1] != t.children[_e164 + 1] || !this.children[_e164 + 2].eq(t.children[_e164 + 2])) return !1;
          return !0;
        }
      }, {
        key: "locals",
        value: function locals(t) {
          return io(this.localsInner(t));
        }
      }, {
        key: "localsInner",
        value: function localsInner(t) {
          if (this == Qr) return Gr;
          if (t.inlineContent || !this.local.some(qr.is)) return this.local;
          var e = [];
          for (var _t137 = 0; _t137 < this.local.length; _t137++) this.local[_t137].type instanceof qr || e.push(this.local[_t137]);
          return e;
        }
      }], [{
        key: "create",
        value: function create(t, e) {
          return e.length ? ro(e, t, 0, Yr) : Qr;
        }
      }]);
      return Xr;
    }();
    Xr.empty = new Xr([], []), Xr.removeOverlap = io;
    var Qr = Xr.empty;
    var Zr = /*#__PURE__*/function () {
      function Zr(t) {
        _classCallCheck(this, Zr);
        this.members = t;
      }
      _createClass(Zr, [{
        key: "map",
        value: function map(t, e) {
          var n = this.members.map(function (n) {
            return n.map(t, e, Yr);
          });
          return Zr.from(n);
        }
      }, {
        key: "forChild",
        value: function forChild(t, e) {
          if (e.isLeaf) return Xr.empty;
          var n = [];
          for (var _r95 = 0; _r95 < this.members.length; _r95++) {
            var _o74 = this.members[_r95].forChild(t, e);
            _o74 != Qr && (_o74 instanceof Zr ? n = n.concat(_o74.members) : n.push(_o74));
          }
          return Zr.from(n);
        }
      }, {
        key: "eq",
        value: function eq(t) {
          if (!(t instanceof Zr) || t.members.length != this.members.length) return !1;
          for (var _e165 = 0; _e165 < this.members.length; _e165++) if (!this.members[_e165].eq(t.members[_e165])) return !1;
          return !0;
        }
      }, {
        key: "locals",
        value: function locals(t) {
          var e,
            n = !0;
          for (var _r96 = 0; _r96 < this.members.length; _r96++) {
            var _o75 = this.members[_r96].localsInner(t);
            if (_o75.length) if (e) {
              n && (e = e.slice(), n = !1);
              for (var _t138 = 0; _t138 < _o75.length; _t138++) e.push(_o75[_t138]);
            } else e = _o75;
          }
          return e ? io(n ? e : e.sort(oo)) : Gr;
        }
      }], [{
        key: "from",
        value: function from(t) {
          switch (t.length) {
            case 0:
              return Qr;
            case 1:
              return t[0];
            default:
              return new Zr(t.every(function (t) {
                return t instanceof Xr;
              }) ? t : t.reduce(function (t, e) {
                return t.concat(e instanceof Xr ? e : e.members);
              }, []));
          }
        }
      }]);
      return Zr;
    }();
    function to(t, e) {
      if (!e || !t.length) return t;
      var n = [];
      for (var _r97 = 0; _r97 < t.length; _r97++) {
        var _o76 = t[_r97];
        n.push(new Ur(_o76.from + e, _o76.to + e, _o76.type));
      }
      return n;
    }
    function eo(t, e, n) {
      if (e.isLeaf) return null;
      var r = n + e.nodeSize,
        o = null;
      for (var _e166, _i60 = 0; _i60 < t.length; _i60++) (_e166 = t[_i60]) && _e166.from > n && _e166.to < r && ((o || (o = [])).push(_e166), t[_i60] = null);
      return o;
    }
    function no(t) {
      var e = [];
      for (var _n128 = 0; _n128 < t.length; _n128++) null != t[_n128] && e.push(t[_n128]);
      return e;
    }
    function ro(t, e, n, r) {
      var o = [],
        i = !1;
      e.forEach(function (e, s) {
        var a = eo(t, e, s + n);
        if (a) {
          i = !0;
          var _t139 = ro(a, e, n + s + 1, r);
          _t139 != Qr && o.push(s, s + e.nodeSize, _t139);
        }
      });
      var s = to(i ? no(t) : t, -n).sort(oo);
      for (var _t140 = 0; _t140 < s.length; _t140++) s[_t140].type.valid(e, s[_t140]) || (r.onRemove && r.onRemove(s[_t140].spec), s.splice(_t140--, 1));
      return s.length || o.length ? new Xr(s, o) : Qr;
    }
    function oo(t, e) {
      return t.from - e.from || t.to - e.to;
    }
    function io(t) {
      var e = t;
      for (var _n129 = 0; _n129 < e.length - 1; _n129++) {
        var _r98 = e[_n129];
        if (_r98.from != _r98.to) for (var _o77 = _n129 + 1; _o77 < e.length; _o77++) {
          var _i61 = e[_o77];
          if (_i61.from != _r98.from) {
            _i61.from < _r98.to && (e == t && (e = t.slice()), e[_n129] = _r98.copy(_r98.from, _i61.from), so(e, _o77, _r98.copy(_i61.from, _r98.to)));
            break;
          }
          _i61.to != _r98.to && (e == t && (e = t.slice()), e[_o77] = _i61.copy(_i61.from, _r98.to), so(e, _o77 + 1, _i61.copy(_r98.to, _i61.to)));
        }
      }
      return e;
    }
    function so(t, e, n) {
      for (; e < t.length && oo(n, t[e]) > 0;) e++;
      t.splice(e, 0, n);
    }
    function ao(t) {
      var e = [];
      return t.someProp("decorations", function (n) {
        var r = n(t.state);
        r && r != Qr && e.push(r);
      }), t.cursorWrapper && e.push(Xr.create(t.state.doc, [t.cursorWrapper.deco])), Zr.from(e);
    }
    var lo = {
        childList: !0,
        characterData: !0,
        characterDataOldValue: !0,
        attributes: !0,
        attributeOldValue: !0,
        subtree: !0
      },
      co = Pe && Le <= 11;
    var uo = /*#__PURE__*/function () {
      function uo() {
        _classCallCheck(this, uo);
        this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0;
      }
      _createClass(uo, [{
        key: "set",
        value: function set(t) {
          this.anchorNode = t.anchorNode, this.anchorOffset = t.anchorOffset, this.focusNode = t.focusNode, this.focusOffset = t.focusOffset;
        }
      }, {
        key: "clear",
        value: function clear() {
          this.anchorNode = this.focusNode = null;
        }
      }, {
        key: "eq",
        value: function eq(t) {
          return t.anchorNode == this.anchorNode && t.anchorOffset == this.anchorOffset && t.focusNode == this.focusNode && t.focusOffset == this.focusOffset;
        }
      }]);
      return uo;
    }();
    var ho = /*#__PURE__*/function () {
      function ho(t, e) {
        var _this32 = this;
        _classCallCheck(this, ho);
        this.view = t, this.handleDOMChange = e, this.queue = [], this.flushingSoon = -1, this.observer = null, this.currentSelection = new uo(), this.onCharData = null, this.suppressingSelectionUpdates = !1, this.observer = global.window.MutationObserver && new global.window.MutationObserver(function (t) {
          for (var _e167 = 0; _e167 < t.length; _e167++) _this32.queue.push(t[_e167]);
          Pe && Le <= 11 && t.some(function (t) {
            return "childList" == t.type && t.removedNodes.length || "characterData" == t.type && t.oldValue.length > t.target.nodeValue.length;
          }) ? _this32.flushSoon() : _this32.flush();
        }), co && (this.onCharData = function (t) {
          _this32.queue.push({
            target: t.target,
            type: "characterData",
            oldValue: t.prevValue
          }), _this32.flushSoon();
        }), this.onSelectionChange = this.onSelectionChange.bind(this);
      }
      _createClass(ho, [{
        key: "flushSoon",
        value: function flushSoon() {
          var _this33 = this;
          this.flushingSoon < 0 && (this.flushingSoon = global.window.setTimeout(function () {
            _this33.flushingSoon = -1, _this33.flush();
          }, 20));
        }
      }, {
        key: "forceFlush",
        value: function forceFlush() {
          this.flushingSoon > -1 && (global.window.clearTimeout(this.flushingSoon), this.flushingSoon = -1, this.flush());
        }
      }, {
        key: "start",
        value: function start() {
          this.observer && (this.observer.takeRecords(), this.observer.observe(this.view.dom, lo)), this.onCharData && this.view.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.connectSelection();
        }
      }, {
        key: "stop",
        value: function stop() {
          var _this34 = this;
          if (this.observer) {
            var _t141 = this.observer.takeRecords();
            if (_t141.length) {
              for (var _e168 = 0; _e168 < _t141.length; _e168++) this.queue.push(_t141[_e168]);
              global.window.setTimeout(function () {
                return _this34.flush();
              }, 20);
            }
            this.observer.disconnect();
          }
          this.onCharData && this.view.dom.removeEventListener("DOMCharacterDataModified", this.onCharData), this.disconnectSelection();
        }
      }, {
        key: "connectSelection",
        value: function connectSelection() {
          this.view.dom.ownerDocument.addEventListener("selectionchange", this.onSelectionChange);
        }
      }, {
        key: "disconnectSelection",
        value: function disconnectSelection() {
          this.view.dom.ownerDocument.removeEventListener("selectionchange", this.onSelectionChange);
        }
      }, {
        key: "suppressSelectionUpdates",
        value: function suppressSelectionUpdates() {
          var _this35 = this;
          this.suppressingSelectionUpdates = !0, setTimeout(function () {
            return _this35.suppressingSelectionUpdates = !1;
          }, 50);
        }
      }, {
        key: "onSelectionChange",
        value: function onSelectionChange() {
          if (Jn(this.view)) {
            if (this.suppressingSelectionUpdates) return jn(this.view);
            if (Pe && Le <= 11 && !this.view.state.selection.empty) {
              var _t142 = this.view.domSelectionRange();
              if (_t142.focusNode && xe(_t142.focusNode, _t142.focusOffset, _t142.anchorNode, _t142.anchorOffset)) return this.flushSoon();
            }
            this.flush();
          }
        }
      }, {
        key: "setCurSelection",
        value: function setCurSelection() {
          this.currentSelection.set(this.view.domSelectionRange());
        }
      }, {
        key: "ignoreSelectionChange",
        value: function ignoreSelectionChange(t) {
          if (!t.focusNode) return !0;
          var e,
            n = new Set();
          for (var _e169 = t.focusNode; _e169; _e169 = ve(_e169)) n.add(_e169);
          for (var _r99 = t.anchorNode; _r99; _r99 = ve(_r99)) if (n.has(_r99)) {
            e = _r99;
            break;
          }
          var r = e && this.view.docView.nearestDesc(e);
          return r && r.ignoreMutation({
            type: "selection",
            target: 3 == e.nodeType ? e.parentNode : e
          }) ? (this.setCurSelection(), !0) : void 0;
        }
      }, {
        key: "pendingRecords",
        value: function pendingRecords() {
          if (this.observer) {
            var _iterator2 = _createForOfIteratorHelper(this.observer.takeRecords()),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var _t143 = _step2.value;
                this.queue.push(_t143);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
          return this.queue;
        }
      }, {
        key: "flush",
        value: function flush() {
          var t = this.view;
          if (!t.docView || this.flushingSoon > -1) return;
          var e = this.pendingRecords();
          e.length && (this.queue = []);
          var n = t.domSelectionRange(),
            r = !this.suppressingSelectionUpdates && !this.currentSelection.eq(n) && Jn(t) && !this.ignoreSelectionChange(n),
            o = -1,
            i = -1,
            s = !1,
            a = [];
          if (t.editable) for (var _t144 = 0; _t144 < e.length; _t144++) {
            var _n130 = this.registerMutation(e[_t144], a);
            _n130 && (o = o < 0 ? _n130.from : Math.min(_n130.from, o), i = i < 0 ? _n130.to : Math.max(_n130.to, i), _n130.typeOver && (s = !0));
          }
          if (Fe && a.length > 1) {
            var _t145 = a.filter(function (t) {
              return "BR" == t.nodeName;
            });
            if (2 == _t145.length) {
              var _e170 = _t145[0],
                _n131 = _t145[1];
              _e170.parentNode && _e170.parentNode.parentNode == _n131.parentNode ? _n131.remove() : _e170.remove();
            }
          }
          var l = null;
          o < 0 && r && t.input.lastFocus > Date.now() - 200 && Math.max(t.input.lastTouch, t.input.lastClick.time) < Date.now() - 300 && Te(n) && (l = Bn(t)) && l.eq(Ut.near(t.state.doc.resolve(0), 1)) ? (t.input.lastFocus = 0, jn(t), this.currentSelection.set(n), t.scrollToSelection()) : (o > -1 || r) && (o > -1 && (t.docView.markDirty(o, i), function (t) {
            if (!po.has(t) && (po.set(t, null), -1 !== ["normal", "nowrap", "pre-line"].indexOf(getComputedStyle(t.dom).whiteSpace))) {
              if (t.requiresGeckoHackNode = Fe, fo) return;
              console.warn("ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package."), fo = !0;
            }
          }(t)), this.handleDOMChange(o, i, s, a), t.docView && t.docView.dirty ? t.updateState(t.state) : this.currentSelection.eq(n) || jn(t), this.currentSelection.set(n));
        }
      }, {
        key: "registerMutation",
        value: function registerMutation(t, e) {
          if (e.indexOf(t.target) > -1) return null;
          var n = this.view.docView.nearestDesc(t.target);
          if ("attributes" == t.type && (n == this.view.docView || "contenteditable" == t.attributeName || "style" == t.attributeName && !t.oldValue && !t.target.getAttribute("style"))) return null;
          if (!n || n.ignoreMutation(t)) return null;
          if ("childList" == t.type) {
            for (var _n132 = 0; _n132 < t.addedNodes.length; _n132++) e.push(t.addedNodes[_n132]);
            if (n.contentDOM && n.contentDOM != n.dom && !n.contentDOM.contains(t.target)) return {
              from: n.posBefore,
              to: n.posAfter
            };
            var _r100 = t.previousSibling,
              _o78 = t.nextSibling;
            if (Pe && Le <= 11 && t.addedNodes.length) for (var _e171 = 0; _e171 < t.addedNodes.length; _e171++) {
              var _t$addedNodes$_e = t.addedNodes[_e171],
                _n133 = _t$addedNodes$_e.previousSibling,
                _i62 = _t$addedNodes$_e.nextSibling;
              (!_n133 || Array.prototype.indexOf.call(t.addedNodes, _n133) < 0) && (_r100 = _n133), (!_i62 || Array.prototype.indexOf.call(t.addedNodes, _i62) < 0) && (_o78 = _i62);
            }
            var _i63 = _r100 && _r100.parentNode == t.target ? ye(_r100) + 1 : 0,
              _s48 = n.localPosFromDOM(t.target, _i63, -1),
              _a31 = _o78 && _o78.parentNode == t.target ? ye(_o78) : t.target.childNodes.length;
            return {
              from: _s48,
              to: n.localPosFromDOM(t.target, _a31, 1)
            };
          }
          return "attributes" == t.type ? {
            from: n.posAtStart - n.border,
            to: n.posAtEnd + n.border
          } : {
            from: n.posAtStart,
            to: n.posAtEnd,
            typeOver: t.target.nodeValue == t.oldValue
          };
        }
      }]);
      return ho;
    }();
    var po = new WeakMap(),
      fo = !1;
    function mo(t) {
      var e = t.pmViewDesc;
      if (e) return e.parseRule();
      if ("BR" == t.nodeName && t.parentNode) {
        if ($e && /^(ul|ol)$/i.test(t.parentNode.nodeName)) {
          var _t146 = global.document.createElement("div");
          return _t146.appendChild(global.document.createElement("li")), {
            skip: _t146
          };
        }
        if (t.parentNode.lastChild == t || $e && /^(tr|table)$/i.test(t.parentNode.nodeName)) return {
          ignore: !0
        };
      } else if ("IMG" == t.nodeName && t.getAttribute("mark-placeholder")) return {
        ignore: !0
      };
      return null;
    }
    var go = /^(a|abbr|acronym|b|bd[io]|big|br|button|cite|code|data(list)?|del|dfn|em|i|ins|kbd|label|map|mark|meter|output|q|ruby|s|samp|small|span|strong|su[bp]|time|u|tt|var)$/i;
    function yo(t, e, n) {
      return Math.max(n.anchor, n.head) > e.content.size ? null : qn(t, e.resolve(n.anchor), e.resolve(n.head));
    }
    function vo(t, e, n) {
      var r = t.depth,
        o = e ? t.end() : t.pos;
      for (; r > 0 && (e || t.indexAfter(r) == t.node(r).childCount);) r--, o++, e = !1;
      if (n) {
        var _e172 = t.node(r).maybeChild(t.indexAfter(r));
        for (; _e172 && !_e172.isLeaf;) _e172 = _e172.firstChild, o++;
      }
      return o;
    }
    function bo(t) {
      if (2 != t.length) return !1;
      var e = t.charCodeAt(0),
        n = t.charCodeAt(1);
      return e >= 56320 && e <= 57343 && n >= 55296 && n <= 56319;
    }
    var wo = /*#__PURE__*/function () {
      function wo(t, e) {
        var _this36 = this;
        _classCallCheck(this, wo);
        this._root = null, this.focused = !1, this.trackWrites = null, this.mounted = !1, this.markCursor = null, this.cursorWrapper = null, this.lastSelectedViewDesc = void 0, this.input = new xr(), this.prevDirectPlugins = [], this.pluginViews = [], this.requiresGeckoHackNode = !1, this.dragging = null, this._props = e, this.state = e.state, this.directPlugins = e.plugins || [], this.directPlugins.forEach(Oo), this.dispatch = this.dispatch.bind(this), this.dom = t && t.mount || global.document.createElement("div"), t && (t.appendChild ? t.appendChild(this.dom) : "function" == typeof t ? t(this.dom) : t.mount && (this.mounted = !0)), this.editable = So(this), ko(this), this.nodeViews = Mo(this), this.docView = xn(this.state.doc, xo(this), ao(this), this.dom, this), this.domObserver = new ho(this, function (t, e, n, r) {
          return function (t, e, n, r, o) {
            var s = t.input.compositionPendingChanges || (t.composing ? t.input.compositionID : 0);
            if (t.input.compositionPendingChanges = 0, e < 0) {
              var _e173 = t.input.lastSelectionTime > Date.now() - 50 ? t.input.lastSelectionOrigin : null,
                _n134 = Bn(t, _e173);
              if (_n134 && !t.state.selection.eq(_n134)) {
                if (ze && We && 13 === t.input.lastKeyCode && Date.now() - 100 < t.input.lastKeyCodeTime && t.someProp("handleKeyDown", function (e) {
                  return e(t, Ce(13, "Enter"));
                })) return;
                var _r101 = t.state.tr.setSelection(_n134);
                "pointer" == _e173 ? _r101.setMeta("pointer", !0) : "key" == _e173 && _r101.scrollIntoView(), s && _r101.setMeta("composition", s), t.dispatch(_r101);
              }
              return;
            }
            var a = t.state.doc.resolve(e),
              l = a.sharedDepth(n);
            e = a.before(l + 1), n = t.state.doc.resolve(n).after(l + 1);
            var c,
              u,
              h = t.state.selection,
              d = function (t, e, n) {
                var r,
                  _t$docView$parseRange = t.docView.parseRange(e, n),
                  o = _t$docView$parseRange.node,
                  i = _t$docView$parseRange.fromOffset,
                  s = _t$docView$parseRange.toOffset,
                  a = _t$docView$parseRange.from,
                  l = _t$docView$parseRange.to,
                  c = t.domSelectionRange(),
                  u = c.anchorNode;
                if (u && t.dom.contains(1 == u.nodeType ? u : u.parentNode) && (r = [{
                  node: u,
                  offset: c.anchorOffset
                }], Te(c) || r.push({
                  node: c.focusNode,
                  offset: c.focusOffset
                })), ze && 8 === t.input.lastKeyCode) for (var _t147 = s; _t147 > i; _t147--) {
                  var _e174 = o.childNodes[_t147 - 1],
                    _n135 = _e174.pmViewDesc;
                  if ("BR" == _e174.nodeName && !_n135) {
                    s = _t147;
                    break;
                  }
                  if (!_n135 || _n135.size) break;
                }
                var h = t.state.doc,
                  d = t.someProp("domParser") || G.fromSchema(t.state.schema),
                  p = h.resolve(a),
                  f = null,
                  m = d.parse(o, {
                    topNode: p.parent,
                    topMatch: p.parent.contentMatchAt(p.index()),
                    topOpen: !0,
                    from: i,
                    to: s,
                    preserveWhitespace: "pre" != p.parent.type.whitespace || "full",
                    findPositions: r,
                    ruleFromNode: mo,
                    context: p
                  });
                if (r && null != r[0].pos) {
                  var _t148 = r[0].pos,
                    _e175 = r[1] && r[1].pos;
                  null == _e175 && (_e175 = _t148), f = {
                    anchor: _t148 + a,
                    head: _e175 + a
                  };
                }
                return {
                  doc: m,
                  sel: f,
                  from: a,
                  to: l
                };
              }(t, e, n),
              p = t.state.doc,
              f = p.slice(d.from, d.to);
            8 === t.input.lastKeyCode && Date.now() - 100 < t.input.lastKeyCodeTime ? (c = t.state.selection.to, u = "end") : (c = t.state.selection.from, u = "start"), t.input.lastKeyCode = null;
            var m = function (t, e, n, r, o) {
              var i = t.findDiffStart(e, n);
              if (null == i) return null;
              var _t$findDiffEnd = t.findDiffEnd(e, n + t.size, n + e.size),
                s = _t$findDiffEnd.a,
                a = _t$findDiffEnd.b;
              if ("end" == o && (r -= s + Math.max(0, i - Math.min(s, a)) - i), s < i && t.size < e.size) {
                var _t149 = r <= i && r >= s ? i - r : 0;
                i -= _t149, i && i < e.size && bo(e.textBetween(i - 1, i + 1)) && (i += _t149 ? 1 : -1), a = i + (a - s), s = i;
              } else if (a < i) {
                var _e176 = r <= i && r >= a ? i - r : 0;
                i -= _e176, i && i < t.size && bo(t.textBetween(i - 1, i + 1)) && (i += _e176 ? 1 : -1), s = i + (s - a), a = i;
              }
              return {
                start: i,
                endA: s,
                endB: a
              };
            }(f.content, d.doc.content, d.from, c, u);
            if ((_e && t.input.lastIOSEnter > Date.now() - 225 || We) && o.some(function (t) {
              return 1 == t.nodeType && !go.test(t.nodeName);
            }) && (!m || m.endA >= m.endB) && t.someProp("handleKeyDown", function (e) {
              return e(t, Ce(13, "Enter"));
            })) return void (t.input.lastIOSEnter = 0);
            if (!m) {
              if (!(r && h instanceof Qt && !h.empty && h.$head.sameParent(h.$anchor)) || t.composing || d.sel && d.sel.anchor != d.sel.head) {
                if (d.sel) {
                  var _e177 = yo(t, t.state.doc, d.sel);
                  if (_e177 && !_e177.eq(t.state.selection)) {
                    var _n136 = t.state.tr.setSelection(_e177);
                    s && _n136.setMeta("composition", s), t.dispatch(_n136);
                  }
                }
                return;
              }
              m = {
                start: h.from,
                endA: h.to,
                endB: h.to
              };
            }
            if (ze && t.cursorWrapper && d.sel && d.sel.anchor == t.cursorWrapper.deco.from && d.sel.head == d.sel.anchor) {
              var _t150 = m.endB - m.start;
              d.sel = {
                anchor: d.sel.anchor + _t150,
                head: d.sel.anchor + _t150
              };
            }
            t.input.domChangeCount++, t.state.selection.from < t.state.selection.to && m.start == m.endB && t.state.selection instanceof Qt && (m.start > t.state.selection.from && m.start <= t.state.selection.from + 2 && t.state.selection.from >= d.from ? m.start = t.state.selection.from : m.endA < t.state.selection.to && m.endA >= t.state.selection.to - 2 && t.state.selection.to <= d.to && (m.endB += t.state.selection.to - m.endA, m.endA = t.state.selection.to)), Pe && Le <= 11 && m.endB == m.start + 1 && m.endA == m.start && m.start > d.from && "  " == d.doc.textBetween(m.start - d.from - 1, m.start - d.from + 1) && (m.start--, m.endA--, m.endB--);
            var g,
              y = d.doc.resolveNoCache(m.start - d.from),
              v = d.doc.resolveNoCache(m.endB - d.from),
              b = p.resolve(m.start),
              w = y.sameParent(v) && y.parent.inlineContent && b.end() >= m.endA;
            if ((_e && t.input.lastIOSEnter > Date.now() - 225 && (!w || o.some(function (t) {
              return "DIV" == t.nodeName || "P" == t.nodeName;
            })) || !w && y.pos < d.doc.content.size && !y.sameParent(v) && (g = Ut.findFrom(d.doc.resolve(y.pos + 1), 1, !0)) && g.head == v.pos) && t.someProp("handleKeyDown", function (e) {
              return e(t, Ce(13, "Enter"));
            })) return void (t.input.lastIOSEnter = 0);
            if (t.state.selection.anchor > m.start && function (t, e, n, r, o) {
              if (!r.parent.isTextblock || n - e <= o.pos - r.pos || vo(r, !0, !1) < o.pos) return !1;
              var i = t.resolve(e);
              if (i.parentOffset < i.parent.content.size || !i.parent.isTextblock) return !1;
              var s = t.resolve(vo(i, !0, !0));
              return !(!s.parent.isTextblock || s.pos > n || vo(s, !0, !1) < n) && r.parent.content.cut(r.parentOffset).eq(s.parent.content);
            }(p, m.start, m.endA, y, v) && t.someProp("handleKeyDown", function (e) {
              return e(t, Ce(8, "Backspace"));
            })) return void (We && ze && t.domObserver.suppressSelectionUpdates());
            ze && We && m.endB == m.start && (t.input.lastAndroidDelete = Date.now()), We && !w && y.start() != v.start() && 0 == v.parentOffset && y.depth == v.depth && d.sel && d.sel.anchor == d.sel.head && d.sel.head == m.endA && (m.endB -= 2, v = d.doc.resolveNoCache(m.endB - d.from), setTimeout(function () {
              t.someProp("handleKeyDown", function (e) {
                return e(t, Ce(13, "Enter"));
              });
            }, 20));
            var x,
              k,
              S,
              M = m.start,
              O = m.endA;
            if (w) if (y.pos == v.pos) Pe && Le <= 11 && 0 == y.parentOffset && (t.domObserver.suppressSelectionUpdates(), setTimeout(function () {
              return jn(t);
            }, 20)), x = t.state.tr.delete(M, O), k = p.resolve(m.start).marksAcross(p.resolve(m.endA));else if (m.endA == m.endB && (S = function (t, e) {
              var n,
                r,
                o,
                s = t.firstChild.marks,
                a = e.firstChild.marks,
                l = s,
                c = a;
              for (var _t151 = 0; _t151 < a.length; _t151++) l = a[_t151].removeFromSet(l);
              for (var _t152 = 0; _t152 < s.length; _t152++) c = s[_t152].removeFromSet(c);
              if (1 == l.length && 0 == c.length) r = l[0], n = "add", o = function o(t) {
                return t.mark(r.addToSet(t.marks));
              };else {
                if (0 != l.length || 1 != c.length) return null;
                r = c[0], n = "remove", o = function o(t) {
                  return t.mark(r.removeFromSet(t.marks));
                };
              }
              var u = [];
              for (var _t153 = 0; _t153 < e.childCount; _t153++) u.push(o(e.child(_t153)));
              if (i.from(u).eq(t)) return {
                mark: r,
                type: n
              };
            }(y.parent.content.cut(y.parentOffset, v.parentOffset), b.parent.content.cut(b.parentOffset, m.endA - b.start())))) x = t.state.tr, "add" == S.type ? x.addMark(M, O, S.mark) : x.removeMark(M, O, S.mark);else if (y.parent.child(y.index()).isText && y.index() == v.index() - (v.textOffset ? 0 : 1)) {
              var _e178 = y.parent.textBetween(y.parentOffset, v.parentOffset);
              if (t.someProp("handleTextInput", function (n) {
                return n(t, M, O, _e178);
              })) return;
              x = t.state.tr.insertText(_e178, M, O);
            }
            if (x || (x = t.state.tr.replace(M, O, d.doc.slice(m.start - d.from, m.endB - d.from))), d.sel) {
              var _e179 = yo(t, x.doc, d.sel);
              _e179 && !(ze && We && t.composing && _e179.empty && (m.start != m.endB || t.input.lastAndroidDelete < Date.now() - 100) && (_e179.head == M || _e179.head == x.mapping.map(O) - 1) || Pe && _e179.empty && _e179.head == M) && x.setSelection(_e179);
            }
            k && x.ensureMarks(k), s && x.setMeta("composition", s), t.dispatch(x.scrollIntoView());
          }(_this36, t, e, n, r);
        }), this.domObserver.start(), function (t) {
          var _loop8 = function _loop8() {
            var n = vr[_e180];
            t.dom.addEventListener(_e180, t.input.eventHandlers[_e180] = function (e) {
              !Or(t, e) || Mr(t, e) || !t.editable && e.type in br || n(t, e);
            }, wr[_e180] ? {
              passive: !0
            } : void 0);
          };
          for (var _e180 in vr) {
            _loop8();
          }
          $e && t.dom.addEventListener("input", function () {
            return null;
          }), Sr(t);
        }(this), this.updatePluginViews();
      }
      _createClass(wo, [{
        key: "composing",
        get: function get() {
          return this.input.composing;
        }
      }, {
        key: "props",
        get: function get() {
          if (this._props.state != this.state) {
            var _t154 = this._props;
            this._props = {};
            for (var _e181 in _t154) this._props[_e181] = _t154[_e181];
            this._props.state = this.state;
          }
          return this._props;
        }
      }, {
        key: "update",
        value: function update(t) {
          t.handleDOMEvents != this._props.handleDOMEvents && Sr(this);
          var e = this._props;
          this._props = t, t.plugins && (t.plugins.forEach(Oo), this.directPlugins = t.plugins), this.updateStateInner(t.state, e);
        }
      }, {
        key: "setProps",
        value: function setProps(t) {
          var e = {};
          for (var _t155 in this._props) e[_t155] = this._props[_t155];
          e.state = this.state;
          for (var _n137 in t) e[_n137] = t[_n137];
          this.update(e);
        }
      }, {
        key: "updateState",
        value: function updateState(t) {
          this.updateStateInner(t, this._props);
        }
      }, {
        key: "updateStateInner",
        value: function updateStateInner(t, e) {
          var n;
          var r = this.state,
            o = !1,
            i = !1;
          t.storedMarks && this.composing && (Br(this), i = !0), this.state = t;
          var s = r.plugins != t.plugins || this._props.plugins != e.plugins;
          if (s || this._props.plugins != e.plugins || this._props.nodeViews != e.nodeViews) {
            var _t156 = Mo(this);
            (function (t, e) {
              var n = 0,
                r = 0;
              for (var _r102 in t) {
                if (t[_r102] != e[_r102]) return !0;
                n++;
              }
              for (var _t157 in e) r++;
              return n != r;
            })(_t156, this.nodeViews) && (this.nodeViews = _t156, o = !0);
          }
          (s || e.handleDOMEvents != this._props.handleDOMEvents) && Sr(this), this.editable = So(this), ko(this);
          var a = ao(this),
            l = xo(this),
            c = r.plugins == t.plugins || r.doc.eq(t.doc) ? t.scrollToSelection > r.scrollToSelection ? "to selection" : "preserve" : "reset",
            u = o || !this.docView.matchesNode(t.doc, l, a);
          !u && t.selection.eq(r.selection) || (i = !0);
          var h = "preserve" == c && i && null == this.dom.style.overflowAnchor && function (t) {
            var e,
              n,
              r = t.dom.getBoundingClientRect(),
              o = Math.max(0, r.top);
            for (var _i64 = (r.left + r.right) / 2, _s49 = o + 1; _s49 < Math.min(global.innerHeight, r.bottom); _s49 += 5) {
              var _r103 = t.root.elementFromPoint(_i64, _s49);
              if (!_r103 || _r103 == t.dom || !t.dom.contains(_r103)) continue;
              var _a32 = _r103.getBoundingClientRect();
              if (_a32.top >= o - 20) {
                e = _r103, n = _a32.top;
                break;
              }
            }
            return {
              refDOM: e,
              refTop: n,
              stack: Xe(t.dom)
            };
          }(this);
          if (i) {
            this.domObserver.stop();
            var _e182 = u && (Pe || ze) && !this.composing && !r.selection.empty && !t.selection.empty && function (t, e) {
              var n = Math.min(t.$anchor.sharedDepth(t.head), e.$anchor.sharedDepth(e.head));
              return t.$anchor.start(n) != e.$anchor.start(n);
            }(r.selection, t.selection);
            if (u) {
              var _n138 = ze ? this.trackWrites = this.domSelectionRange().focusNode : null;
              !o && this.docView.update(t.doc, l, a, this) || (this.docView.updateOuterDeco([]), this.docView.destroy(), this.docView = xn(t.doc, l, a, this.dom, this)), _n138 && !this.trackWrites && (_e182 = !0);
            }
            _e182 || !(this.input.mouseDown && this.domObserver.currentSelection.eq(this.domSelectionRange()) && function (t) {
              var e = t.docView.domFromPos(t.state.selection.anchor, 0),
                n = t.domSelectionRange();
              return xe(e.node, e.offset, n.anchorNode, n.anchorOffset);
            }(this)) ? jn(this, _e182) : (Wn(this, t.selection), this.domObserver.setCurSelection()), this.domObserver.start();
          }
          this.updatePluginViews(r), (null === (n = this.dragging) || void 0 === n ? void 0 : n.node) && !r.doc.eq(t.doc) && this.updateDraggedNode(this.dragging, r), "reset" == c ? this.dom.scrollTop = 0 : "to selection" == c ? this.scrollToSelection() : h && function (_ref5) {
            var t = _ref5.refDOM,
              e = _ref5.refTop,
              n = _ref5.stack;
            var r = t ? t.getBoundingClientRect().top : 0;
            Qe(n, 0 == r ? 0 : r - e);
          }(h);
        }
      }, {
        key: "scrollToSelection",
        value: function scrollToSelection() {
          var _this37 = this;
          var t = this.domSelectionRange().focusNode;
          if (this.someProp("handleScrollToSelection", function (t) {
            return t(_this37);
          })) ;else if (this.state.selection instanceof te) {
            var _e183 = this.docView.domAfterPos(this.state.selection.from);
            1 == _e183.nodeType && Ye(this, _e183.getBoundingClientRect(), t);
          } else Ye(this, this.coordsAtPos(this.state.selection.head, 1), t);
        }
      }, {
        key: "destroyPluginViews",
        value: function destroyPluginViews() {
          var t;
          for (; t = this.pluginViews.pop();) t.destroy && t.destroy();
        }
      }, {
        key: "updatePluginViews",
        value: function updatePluginViews(t) {
          if (t && t.plugins == this.state.plugins && this.directPlugins == this.prevDirectPlugins) for (var _e184 = 0; _e184 < this.pluginViews.length; _e184++) {
            var _n139 = this.pluginViews[_e184];
            _n139.update && _n139.update(this, t);
          } else {
            this.prevDirectPlugins = this.directPlugins, this.destroyPluginViews();
            for (var _t158 = 0; _t158 < this.directPlugins.length; _t158++) {
              var _e185 = this.directPlugins[_t158];
              _e185.spec.view && this.pluginViews.push(_e185.spec.view(this));
            }
            for (var _t159 = 0; _t159 < this.state.plugins.length; _t159++) {
              var _e186 = this.state.plugins[_t159];
              _e186.spec.view && this.pluginViews.push(_e186.spec.view(this));
            }
          }
        }
      }, {
        key: "updateDraggedNode",
        value: function updateDraggedNode(t, e) {
          var n = t.node,
            r = -1;
          if (this.state.doc.nodeAt(n.from) == n.node) r = n.from;else {
            var _t160 = n.from + (this.state.doc.content.size - e.doc.content.size);
            (_t160 > 0 && this.state.doc.nodeAt(_t160)) == n.node && (r = _t160);
          }
          this.dragging = new Hr(t.slice, t.move, r < 0 ? void 0 : te.create(this.state.doc, r));
        }
      }, {
        key: "someProp",
        value: function someProp(t, e) {
          var n,
            r = this._props && this._props[t];
          if (null != r && (n = e ? e(r) : r)) return n;
          for (var _r104 = 0; _r104 < this.directPlugins.length; _r104++) {
            var _o79 = this.directPlugins[_r104].props[t];
            if (null != _o79 && (n = e ? e(_o79) : _o79)) return n;
          }
          var o = this.state.plugins;
          if (o) for (var _r105 = 0; _r105 < o.length; _r105++) {
            var _i65 = o[_r105].props[t];
            if (null != _i65 && (n = e ? e(_i65) : _i65)) return n;
          }
        }
      }, {
        key: "hasFocus",
        value: function hasFocus() {
          if (Pe) {
            var _t161 = this.root.activeElement;
            if (_t161 == this.dom) return !0;
            if (!_t161 || !this.dom.contains(_t161)) return !1;
            for (; _t161 && this.dom != _t161 && this.dom.contains(_t161);) {
              if ("false" == _t161.contentEditable) return !1;
              _t161 = _t161.parentElement;
            }
            return !0;
          }
          return this.root.activeElement == this.dom;
        }
      }, {
        key: "focus",
        value: function focus() {
          this.domObserver.stop(), this.editable && function (t) {
            if (t.setActive) return t.setActive();
            if (Ze) return t.focus(Ze);
            var e = Xe(t);
            t.focus(null == Ze ? {
              get preventScroll() {
                return Ze = {
                  preventScroll: !0
                }, !0;
              }
            } : void 0), Ze || (Ze = !1, Qe(e, 0));
          }(this.dom), jn(this), this.domObserver.start();
        }
      }, {
        key: "root",
        get: function get() {
          var _this38 = this;
          var t = this._root;
          if (null == t) {
            var _loop9 = function _loop9(_t162) {
                if (9 == _t162.nodeType || 11 == _t162.nodeType && _t162.host) return {
                  v: (_t162.getSelection || (Object.getPrototypeOf(_t162).getSelection = function () {
                    return _t162.ownerDocument.getSelection();
                  }), _this38._root = _t162)
                };
              },
              _ret5;
            for (var _t162 = this.dom.parentNode; _t162; _t162 = _t162.parentNode) {
              _ret5 = _loop9(_t162);
              if (_ret5) return _ret5.v;
            }
          }
          return t || global.document;
        }
      }, {
        key: "updateRoot",
        value: function updateRoot() {
          this._root = null;
        }
      }, {
        key: "posAtCoords",
        value: function posAtCoords(t) {
          return rn(this, t);
        }
      }, {
        key: "coordsAtPos",
        value: function coordsAtPos(t) {
          var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
          return ln(this, t, e);
        }
      }, {
        key: "domAtPos",
        value: function domAtPos(t) {
          var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          return this.docView.domFromPos(t, e);
        }
      }, {
        key: "nodeDOM",
        value: function nodeDOM(t) {
          var e = this.docView.descAt(t);
          return e ? e.nodeDOM : null;
        }
      }, {
        key: "posAtDOM",
        value: function posAtDOM(t, e) {
          var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;
          var r = this.docView.posFromDOM(t, e, n);
          if (null == r) throw new RangeError("DOM position not inside the editor");
          return r;
        }
      }, {
        key: "endOfTextblock",
        value: function endOfTextblock(t, e) {
          return function (t, e, n) {
            return pn == e && fn == n ? mn : (pn = e, fn = n, mn = "up" == n || "down" == n ? function (t, e, n) {
              var r = e.selection,
                o = "up" == n ? r.$from : r.$to;
              return hn(t, e, function () {
                var _t$docView$domFromPos3 = t.docView.domFromPos(o.pos, "up" == n ? -1 : 1),
                  e = _t$docView$domFromPos3.node;
                for (;;) {
                  var _n140 = t.docView.nearestDesc(e, !0);
                  if (!_n140) break;
                  if (_n140.node.isBlock) {
                    e = _n140.contentDOM || _n140.dom;
                    break;
                  }
                  e = _n140.dom.parentNode;
                }
                var r = ln(t, o.pos, 1);
                for (var _t163 = e.firstChild; _t163; _t163 = _t163.nextSibling) {
                  var _e187 = void 0;
                  if (1 == _t163.nodeType) _e187 = _t163.getClientRects();else {
                    if (3 != _t163.nodeType) continue;
                    _e187 = we(_t163, 0, _t163.nodeValue.length).getClientRects();
                  }
                  for (var _t164 = 0; _t164 < _e187.length; _t164++) {
                    var _o80 = _e187[_t164];
                    if (_o80.bottom > _o80.top + 1 && ("up" == n ? r.top - _o80.top > 2 * (_o80.bottom - r.top) : _o80.bottom - r.bottom > 2 * (r.bottom - _o80.top))) return !1;
                  }
                }
                return !0;
              });
            }(t, e, n) : function (t, e, n) {
              var r = e.selection.$head;
              if (!r.parent.isTextblock) return !1;
              var o = r.parentOffset,
                i = !o,
                s = o == r.parent.content.size,
                a = t.domSelection();
              return dn.test(r.parent.textContent) && a.modify ? hn(t, e, function () {
                var _t$domSelectionRange2 = t.domSelectionRange(),
                  e = _t$domSelectionRange2.focusNode,
                  o = _t$domSelectionRange2.focusOffset,
                  i = _t$domSelectionRange2.anchorNode,
                  s = _t$domSelectionRange2.anchorOffset,
                  l = a.caretBidiLevel;
                a.modify("move", n, "character");
                var c = r.depth ? t.docView.domAfterPos(r.before()) : t.dom,
                  _t$domSelectionRange3 = t.domSelectionRange(),
                  u = _t$domSelectionRange3.focusNode,
                  h = _t$domSelectionRange3.focusOffset,
                  d = u && !c.contains(1 == u.nodeType ? u : u.parentNode) || e == u && o == h;
                try {
                  a.collapse(i, s), e && (e != i || o != s) && a.extend && a.extend(e, o);
                } catch (t) {}
                return null != l && (a.caretBidiLevel = l), d;
              }) : "left" == n || "backward" == n ? i : s;
            }(t, e, n));
          }(this, e || this.state, t);
        }
      }, {
        key: "pasteHTML",
        value: function pasteHTML(t, e) {
          return $r(this, "", t, !1, e || new global.ClipboardEvent("paste"));
        }
      }, {
        key: "pasteText",
        value: function pasteText(t, e) {
          return $r(this, t, null, !0, e || new global.ClipboardEvent("paste"));
        }
      }, {
        key: "destroy",
        value: function destroy() {
          this.docView && (function (t) {
            t.domObserver.stop();
            for (var _e188 in t.input.eventHandlers) t.dom.removeEventListener(_e188, t.input.eventHandlers[_e188]);
            clearTimeout(t.input.composingTimeout), clearTimeout(t.input.lastIOSEnterFallbackTimeout);
          }(this), this.destroyPluginViews(), this.mounted ? (this.docView.update(this.state.doc, [], ao(this), this), this.dom.textContent = "") : this.dom.parentNode && this.dom.parentNode.removeChild(this.dom), this.docView.destroy(), this.docView = null);
        }
      }, {
        key: "isDestroyed",
        get: function get() {
          return null == this.docView;
        }
      }, {
        key: "dispatchEvent",
        value: function dispatchEvent(t) {
          return function (t, e) {
            Mr(t, e) || !vr[e.type] || !t.editable && e.type in br || vr[e.type](t, e);
          }(this, t);
        }
      }, {
        key: "dispatch",
        value: function dispatch(t) {
          var e = this._props.dispatchTransaction;
          e ? e.call(this, t) : this.updateState(this.state.apply(t));
        }
      }, {
        key: "domSelectionRange",
        value: function domSelectionRange() {
          return $e && 11 === this.root.nodeType && function (t) {
            var e = t.activeElement;
            for (; e && e.shadowRoot;) e = e.shadowRoot.activeElement;
            return e;
          }(this.dom.ownerDocument) == this.dom ? function (t, _ref6) {
            var e;
            function n(t) {
              t.preventDefault(), t.stopImmediatePropagation(), e = t.getTargetRanges()[0];
            }
            t.dom.addEventListener("beforeinput", n, !0), global.document.execCommand("indent"), t.dom.removeEventListener("beforeinput", n, !0);
            var r = e.startContainer,
              o = e.startOffset,
              i = e.endContainer,
              s = e.endOffset,
              a = t.domAtPos(t.state.selection.anchor);
            return xe(a.node, a.offset, i, s) && (_ref6 = [i, s, r, o], r = _ref6[0], o = _ref6[1], i = _ref6[2], s = _ref6[3], _ref6), {
              anchorNode: r,
              anchorOffset: o,
              focusNode: i,
              focusOffset: s
            };
          }(this) : this.domSelection();
        }
      }, {
        key: "domSelection",
        value: function domSelection() {
          return this.root.getSelection();
        }
      }]);
      return wo;
    }();
    function xo(t) {
      var e = Object.create(null);
      return e.class = "ProseMirror", e.contenteditable = String(t.editable), t.someProp("attributes", function (n) {
        if ("function" == typeof n && (n = n(t.state)), n) for (var _t165 in n) "class" == _t165 ? e.class += " " + n[_t165] : "style" == _t165 ? e.style = (e.style ? e.style + ";" : "") + n[_t165] : e[_t165] || "contenteditable" == _t165 || "nodeName" == _t165 || (e[_t165] = String(n[_t165]));
      }), e.translate || (e.translate = "no"), [Ur.node(0, t.state.doc.content.size, e)];
    }
    function ko(t) {
      if (t.markCursor) {
        var _e189 = global.document.createElement("img");
        _e189.className = "ProseMirror-separator", _e189.setAttribute("mark-placeholder", "true"), _e189.setAttribute("alt", ""), t.cursorWrapper = {
          dom: _e189,
          deco: Ur.widget(t.state.selection.head, _e189, {
            raw: !0,
            marks: t.markCursor
          })
        };
      } else t.cursorWrapper = null;
    }
    function So(t) {
      return !t.someProp("editable", function (e) {
        return !1 === e(t.state);
      });
    }
    function Mo(t) {
      var e = Object.create(null);
      function n(t) {
        for (var _n141 in t) Object.prototype.hasOwnProperty.call(e, _n141) || (e[_n141] = t[_n141]);
      }
      return t.someProp("nodeViews", n), t.someProp("markViews", n), e;
    }
    function Oo(t) {
      if (t.spec.state || t.spec.filterTransaction || t.spec.appendTransaction) throw new RangeError("Plugins passed directly to the view must not have a state component");
    }
    for (var To = {
        8: "Backspace",
        9: "Tab",
        10: "Enter",
        12: "NumLock",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        44: "PrintScreen",
        45: "Insert",
        46: "Delete",
        59: ";",
        61: "=",
        91: "Meta",
        92: "Meta",
        106: "*",
        107: "+",
        108: ",",
        109: "-",
        110: ".",
        111: "/",
        144: "NumLock",
        145: "ScrollLock",
        160: "Shift",
        161: "Shift",
        162: "Control",
        163: "Control",
        164: "Alt",
        165: "Alt",
        173: "-",
        186: ";",
        187: "=",
        188: ",",
        189: "-",
        190: ".",
        191: "/",
        192: "`",
        219: "[",
        220: "\\",
        221: "]",
        222: "'"
      }, Co = {
        48: ")",
        49: "!",
        50: "@",
        51: "#",
        52: "$",
        53: "%",
        54: "^",
        55: "&",
        56: "*",
        57: "(",
        59: ":",
        61: "+",
        173: "_",
        186: ":",
        187: "+",
        188: "<",
        189: "_",
        190: ">",
        191: "?",
        192: "~",
        219: "{",
        220: "|",
        221: "}",
        222: '"'
      }, Eo = void 0 !== global.navigator && /Mac/.test(global.navigator.platform), Ao = void 0 !== global.navigator && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(global.navigator.userAgent), No = 0; No < 10; No++) To[48 + No] = To[96 + No] = String(No);
    for (No = 1; No <= 24; No++) To[No + 111] = "F" + No;
    for (No = 65; No <= 90; No++) To[No] = String.fromCharCode(No + 32), Co[No] = String.fromCharCode(No);
    for (var Do in To) Co.hasOwnProperty(Do) || (Co[Do] = To[Do]);
    var Ro = void 0 !== global.navigator && /Mac|iP(hone|[oa]d)/.test(global.navigator.platform);
    function Io(t) {
      var e,
        n,
        r,
        o,
        i = t.split(/-(?!$)/),
        s = i[i.length - 1];
      "Space" == s && (s = " ");
      for (var _t166 = 0; _t166 < i.length - 1; _t166++) {
        var _s50 = i[_t166];
        if (/^(cmd|meta|m)$/i.test(_s50)) o = !0;else if (/^a(lt)?$/i.test(_s50)) e = !0;else if (/^(c|ctrl|control)$/i.test(_s50)) n = !0;else if (/^s(hift)?$/i.test(_s50)) r = !0;else {
          if (!/^mod$/i.test(_s50)) throw new Error("Unrecognized modifier name: " + _s50);
          Ro ? o = !0 : n = !0;
        }
      }
      return e && (s = "Alt-" + s), n && (s = "Ctrl-" + s), o && (s = "Meta-" + s), r && (s = "Shift-" + s), s;
    }
    function Po(t, e) {
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
      return e.altKey && (t = "Alt-" + t), e.ctrlKey && (t = "Ctrl-" + t), e.metaKey && (t = "Meta-" + t), n && e.shiftKey && (t = "Shift-" + t), t;
    }
    function Lo(t) {
      var e = function (t) {
        var e = Object.create(null);
        for (var _n142 in t) e[Io(_n142)] = t[_n142];
        return e;
      }(t);
      return function (t, n) {
        var r,
          o = function (t) {
            var e = !(Eo && t.metaKey && t.shiftKey && !t.ctrlKey && !t.altKey || Ao && t.shiftKey && t.key && 1 == t.key.length || "Unidentified" == t.key) && t.key || (t.shiftKey ? Co : To)[t.keyCode] || t.key || "Unidentified";
            return "Esc" == e && (e = "Escape"), "Del" == e && (e = "Delete"), "Left" == e && (e = "ArrowLeft"), "Up" == e && (e = "ArrowUp"), "Right" == e && (e = "ArrowRight"), "Down" == e && (e = "ArrowDown"), e;
          }(n),
          i = e[Po(o, n)];
        if (i && i(t.state, t.dispatch, t)) return !0;
        if (1 == o.length && " " != o) {
          if (n.shiftKey) {
            var _r106 = e[Po(o, n, !1)];
            if (_r106 && _r106(t.state, t.dispatch, t)) return !0;
          }
          if ((n.shiftKey || n.altKey || n.metaKey || o.charCodeAt(0) > 127) && (r = To[n.keyCode]) && r != o) {
            var _o81 = e[Po(r, n)];
            if (_o81 && _o81(t.state, t.dispatch, t)) return !0;
          }
        }
        return !1;
      };
    }
    var Fo = function Fo(t, e) {
      return !t.selection.empty && (e && e(t.tr.deleteSelection().scrollIntoView()), !0);
    };
    var Bo = function Bo(t, e, n) {
      var r = function (t, e) {
        var n = t.selection.$cursor;
        return !n || (e ? !e.endOfTextblock("backward", t) : n.parentOffset > 0) ? null : n;
      }(t, n);
      if (!r) return !1;
      var o = $o(r);
      if (!o) {
        var _n143 = r.blockRange(),
          _o82 = _n143 && Ot(_n143);
        return null != _o82 && (e && e(t.tr.lift(_n143, _o82).scrollIntoView()), !0);
      }
      var i = o.nodeBefore;
      if (!i.type.spec.isolating && Yo(t, o, e)) return !0;
      if (0 == r.parent.content.size && (zo(i, "end") || te.isSelectable(i))) {
        var _n144 = It(t.doc, r.before(), r.after(), h.empty);
        if (_n144 && _n144.slice.size < _n144.to - _n144.from) {
          if (e) {
            var _r107 = t.tr.step(_n144);
            _r107.setSelection(zo(i, "end") ? Ut.findFrom(_r107.doc.resolve(_r107.mapping.map(o.pos, -1)), -1) : te.create(_r107.doc, o.pos - i.nodeSize)), e(_r107.scrollIntoView());
          }
          return !0;
        }
      }
      return !(!i.isAtom || o.depth != r.depth - 1 || (e && e(t.tr.delete(o.pos - i.nodeSize, o.pos).scrollIntoView()), 0));
    };
    function zo(t, e) {
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
      for (var _r108 = t; _r108; _r108 = "start" == e ? _r108.firstChild : _r108.lastChild) {
        if (_r108.isTextblock) return !0;
        if (n && 1 != _r108.childCount) return !1;
      }
      return !1;
    }
    var jo = function jo(t, e, n) {
      var _t$selection2 = t.selection,
        r = _t$selection2.$head,
        o = _t$selection2.empty,
        i = r;
      if (!o) return !1;
      if (r.parent.isTextblock) {
        if (n ? !n.endOfTextblock("backward", t) : r.parentOffset > 0) return !1;
        i = $o(r);
      }
      var s = i && i.nodeBefore;
      return !(!s || !te.isSelectable(s) || (e && e(t.tr.setSelection(te.create(t.doc, i.pos - s.nodeSize)).scrollIntoView()), 0));
    };
    function $o(t) {
      if (!t.parent.type.spec.isolating) for (var _e190 = t.depth - 1; _e190 >= 0; _e190--) {
        if (t.index(_e190) > 0) return t.doc.resolve(t.before(_e190 + 1));
        if (t.node(_e190).type.spec.isolating) break;
      }
      return null;
    }
    var _o = function _o(t, e, n) {
        var r = function (t, e) {
          var n = t.selection.$cursor;
          return !n || (e ? !e.endOfTextblock("forward", t) : n.parentOffset < n.parent.content.size) ? null : n;
        }(t, n);
        if (!r) return !1;
        var o = Vo(r);
        if (!o) return !1;
        var i = o.nodeAfter;
        if (Yo(t, o, e)) return !0;
        if (0 == r.parent.content.size && (zo(i, "start") || te.isSelectable(i))) {
          var _n145 = It(t.doc, r.before(), r.after(), h.empty);
          if (_n145 && _n145.slice.size < _n145.to - _n145.from) {
            if (e) {
              var _r109 = t.tr.step(_n145);
              _r109.setSelection(zo(i, "start") ? Ut.findFrom(_r109.doc.resolve(_r109.mapping.map(o.pos)), 1) : te.create(_r109.doc, _r109.mapping.map(o.pos))), e(_r109.scrollIntoView());
            }
            return !0;
          }
        }
        return !(!i.isAtom || o.depth != r.depth - 1 || (e && e(t.tr.delete(o.pos, o.pos + i.nodeSize).scrollIntoView()), 0));
      },
      Ho = function Ho(t, e, n) {
        var _t$selection3 = t.selection,
          r = _t$selection3.$head,
          o = _t$selection3.empty,
          i = r;
        if (!o) return !1;
        if (r.parent.isTextblock) {
          if (n ? !n.endOfTextblock("forward", t) : r.parentOffset < r.parent.content.size) return !1;
          i = Vo(r);
        }
        var s = i && i.nodeAfter;
        return !(!s || !te.isSelectable(s) || (e && e(t.tr.setSelection(te.create(t.doc, i.pos)).scrollIntoView()), 0));
      };
    function Vo(t) {
      if (!t.parent.type.spec.isolating) for (var _e191 = t.depth - 1; _e191 >= 0; _e191--) {
        var _n146 = t.node(_e191);
        if (t.index(_e191) + 1 < _n146.childCount) return t.doc.resolve(t.after(_e191 + 1));
        if (_n146.type.spec.isolating) break;
      }
      return null;
    }
    var Wo = function Wo(t, e) {
      var _t$selection4 = t.selection,
        n = _t$selection4.$head,
        r = _t$selection4.$anchor;
      return !(!n.parent.type.spec.code || !n.sameParent(r) || (e && e(t.tr.insertText("\n").scrollIntoView()), 0));
    };
    function Ko(t) {
      for (var _e192 = 0; _e192 < t.edgeCount; _e192++) {
        var _t$edge2 = t.edge(_e192),
          _n147 = _t$edge2.type;
        if (_n147.isTextblock && !_n147.hasRequiredAttrs()) return _n147;
      }
      return null;
    }
    var qo = function qo(t, e) {
        var _t$selection5 = t.selection,
          n = _t$selection5.$head,
          r = _t$selection5.$anchor;
        if (!n.parent.type.spec.code || !n.sameParent(r)) return !1;
        var o = n.node(-1),
          i = n.indexAfter(-1),
          s = Ko(o.contentMatchAt(i));
        if (!s || !o.canReplaceWith(i, i, s)) return !1;
        if (e) {
          var _r110 = n.after(),
            _o83 = t.tr.replaceWith(_r110, _r110, s.createAndFill());
          _o83.setSelection(Ut.near(_o83.doc.resolve(_r110), 1)), e(_o83.scrollIntoView());
        }
        return !0;
      },
      Jo = function Jo(t, e) {
        var n = t.selection,
          r = n.$from,
          o = n.$to;
        if (n instanceof ne || r.parent.inlineContent || o.parent.inlineContent) return !1;
        var i = Ko(o.parent.contentMatchAt(o.indexAfter()));
        if (!i || !i.isTextblock) return !1;
        if (e) {
          var _n148 = (!r.parentOffset && o.index() < o.parent.childCount ? r : o).pos,
            _s51 = t.tr.insert(_n148, i.createAndFill());
          _s51.setSelection(Qt.create(_s51.doc, _n148 + 1)), e(_s51.scrollIntoView());
        }
        return !0;
      },
      Uo = function Uo(t, e) {
        var n = t.selection.$cursor;
        if (!n || n.parent.content.size) return !1;
        if (n.depth > 1 && n.after() != n.end(-1)) {
          var _r111 = n.before();
          if (Et(t.doc, _r111)) return e && e(t.tr.split(_r111).scrollIntoView()), !0;
        }
        var r = n.blockRange(),
          o = r && Ot(r);
        return null != o && (e && e(t.tr.lift(r, o).scrollIntoView()), !0);
      };
    var Go;
    function Yo(t, e, n) {
      var r,
        o,
        s = e.nodeBefore,
        a = e.nodeAfter;
      if (s.type.spec.isolating || a.type.spec.isolating) return !1;
      if (function (t, e, n) {
        var r = e.nodeBefore,
          o = e.nodeAfter,
          i = e.index();
        return !(!(r && o && r.type.compatibleContent(o.type)) || (!r.content.size && e.parent.canReplace(i - 1, i) ? (n && n(t.tr.delete(e.pos - r.nodeSize, e.pos).scrollIntoView()), 0) : !e.parent.canReplace(i, i + 1) || !o.isTextblock && !At(t.doc, e.pos) || (n && n(t.tr.clearIncompatible(e.pos, r.type, r.contentMatchAt(r.childCount)).join(e.pos).scrollIntoView()), 0)));
      }(t, e, n)) return !0;
      var l = e.parent.canReplace(e.index(), e.index() + 1);
      if (l && (r = (o = s.contentMatchAt(s.childCount)).findWrapping(a.type)) && o.matchType(r[0] || a.type).validEnd) {
        if (n) {
          var _o84 = e.pos + a.nodeSize,
            _l23 = i.empty;
          for (var _t167 = r.length - 1; _t167 >= 0; _t167--) _l23 = i.from(r[_t167].create(null, _l23));
          _l23 = i.from(s.copy(_l23));
          var _c22 = t.tr.step(new kt(e.pos - 1, _o84, e.pos, _o84, new h(_l23, 1, 0), r.length, !0)),
            _u9 = _o84 + 2 * r.length;
          At(_c22.doc, _u9) && _c22.join(_u9), n(_c22.scrollIntoView());
        }
        return !0;
      }
      var c = Ut.findFrom(e, 1),
        u = c && c.$from.blockRange(c.$to),
        d = u && Ot(u);
      if (null != d && d >= e.depth) return n && n(t.tr.lift(u, d).scrollIntoView()), !0;
      if (l && zo(a, "start", !0) && zo(s, "end")) {
        var _r112 = s,
          _o85 = [];
        for (; _o85.push(_r112), !_r112.isTextblock;) _r112 = _r112.lastChild;
        var _l24 = a,
          _c23 = 1;
        for (; !_l24.isTextblock; _l24 = _l24.firstChild) _c23++;
        if (_r112.canReplace(_r112.childCount, _r112.childCount, _l24.content)) {
          if (n) {
            var _r113 = i.empty;
            for (var _t168 = _o85.length - 1; _t168 >= 0; _t168--) _r113 = i.from(_o85[_t168].copy(_r113));
            n(t.tr.step(new kt(e.pos - _o85.length, e.pos + a.nodeSize, e.pos + _c23, e.pos + a.nodeSize - _c23, new h(_r113, _o85.length, 0), 0, !0)).scrollIntoView());
          }
          return !0;
        }
      }
      return !1;
    }
    function Xo(t) {
      return function (e, n) {
        var r = e.selection,
          o = t < 0 ? r.$from : r.$to,
          i = o.depth;
        for (; o.node(i).isInline;) {
          if (!i) return !1;
          i--;
        }
        return !!o.node(i).isTextblock && (n && n(e.tr.setSelection(Qt.create(e.doc, t < 0 ? o.start(i) : o.end(i)))), !0);
      };
    }
    var Qo = Xo(-1),
      Zo = Xo(1);
    function ti(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      return function (n, r) {
        var o = !1;
        for (var _r114 = 0; _r114 < n.selection.ranges.length && !o; _r114++) {
          var _n$selection$ranges$_ = n.selection.ranges[_r114],
            _i66 = _n$selection$ranges$_.$from.pos,
            _s52 = _n$selection$ranges$_.$to.pos;
          n.doc.nodesBetween(_i66, _s52, function (r, i) {
            if (o) return !1;
            if (r.isTextblock && !r.hasMarkup(t, e)) if (r.type == t) o = !0;else {
              var _e193 = n.doc.resolve(i),
                _r115 = _e193.index();
              o = _e193.parent.canReplaceWith(_r115, _r115 + 1, t);
            }
          });
        }
        if (!o) return !1;
        if (r) {
          var _o86 = n.tr;
          for (var _r116 = 0; _r116 < n.selection.ranges.length; _r116++) {
            var _n$selection$ranges$_2 = n.selection.ranges[_r116],
              _i67 = _n$selection$ranges$_2.$from.pos,
              _s53 = _n$selection$ranges$_2.$to.pos;
            _o86.setBlockType(_i67, _s53, t, e);
          }
          r(_o86.scrollIntoView());
        }
        return !0;
      };
    }
    function ei() {
      for (var _len = arguments.length, t = new Array(_len), _key = 0; _key < _len; _key++) {
        t[_key] = arguments[_key];
      }
      return function (e, n, r) {
        for (var _o87 = 0; _o87 < t.length; _o87++) if (t[_o87](e, n, r)) return !0;
        return !1;
      };
    }
    var ni = ei(Fo, Bo, jo),
      ri = ei(Fo, _o, Ho);
    var oi = {
        Enter: ei(Wo, Jo, Uo, function (t, e) {
          var _t$selection6 = t.selection,
            n = _t$selection6.$from,
            r = _t$selection6.$to;
          if (t.selection instanceof te && t.selection.node.isBlock) return !(!n.parentOffset || !Et(t.doc, n.pos) || (e && e(t.tr.split(n.pos).scrollIntoView()), 0));
          if (!n.parent.isBlock) return !1;
          if (e) {
            var _o88 = r.parentOffset == r.parent.content.size,
              _i68 = t.tr;
            (t.selection instanceof Qt || t.selection instanceof ne) && _i68.deleteSelection();
            var _s54 = 0 == n.depth ? null : Ko(n.node(-1).contentMatchAt(n.indexAfter(-1))),
              _a33 = Go ? [Go] : _o88 && _s54 ? [{
                type: _s54
              }] : void 0,
              _l25 = Et(_i68.doc, _i68.mapping.map(n.pos), 1, _a33);
            if (_a33 || _l25 || !Et(_i68.doc, _i68.mapping.map(n.pos), 1, _s54 ? [{
              type: _s54
            }] : void 0) || (_s54 && (_a33 = [{
              type: _s54
            }]), _l25 = !0), _l25 && (_i68.split(_i68.mapping.map(n.pos), 1, _a33), !_o88 && !n.parentOffset && n.parent.type != _s54)) {
              var _t169 = _i68.mapping.map(n.before()),
                _e194 = _i68.doc.resolve(_t169);
              _s54 && n.node(-1).canReplaceWith(_e194.index(), _e194.index() + 1, _s54) && _i68.setNodeMarkup(_i68.mapping.map(n.before()), _s54);
            }
            e(_i68.scrollIntoView());
          }
          return !0;
        }),
        "Mod-Enter": qo,
        Backspace: ni,
        "Mod-Backspace": ni,
        "Shift-Backspace": ni,
        Delete: ri,
        "Mod-Delete": ri,
        "Mod-a": function ModA(t, e) {
          return e && e(t.tr.setSelection(new ne(t.doc))), !0;
        }
      },
      ii = {
        "Ctrl-h": oi.Backspace,
        "Alt-Backspace": oi["Mod-Backspace"],
        "Ctrl-d": oi.Delete,
        "Ctrl-Alt-Backspace": oi["Mod-Delete"],
        "Alt-Delete": oi["Mod-Delete"],
        "Alt-d": oi["Mod-Delete"],
        "Ctrl-a": Qo,
        "Ctrl-e": Zo
      };
    for (var _t170 in oi) ii[_t170] = oi[_t170];
    function si(t) {
      var e = t.state,
        n = t.transaction;
      var r = n.selection,
        o = n.doc,
        i = n.storedMarks;
      return _objectSpread(_objectSpread({}, e), {}, {
        apply: e.apply.bind(e),
        applyTransaction: e.applyTransaction.bind(e),
        filterTransaction: e.filterTransaction,
        plugins: e.plugins,
        schema: e.schema,
        reconfigure: e.reconfigure.bind(e),
        toJSON: e.toJSON.bind(e),
        get storedMarks() {
          return i;
        },
        get selection() {
          return r;
        },
        get doc() {
          return o;
        },
        get tr() {
          return r = n.selection, o = n.doc, i = n.storedMarks, n;
        }
      });
    }
    void 0 !== global.navigator ? /Mac|iP(hone|[oa]d)/.test(global.navigator.platform) : "undefined" != typeof os && os.platform && os.platform();
    var ai = /*#__PURE__*/function () {
      function ai(t) {
        _classCallCheck(this, ai);
        this.editor = t.editor, this.rawCommands = this.editor.extensionManager.commands, this.customState = t.state;
      }
      _createClass(ai, [{
        key: "hasCustomState",
        get: function get() {
          return !!this.customState;
        }
      }, {
        key: "state",
        get: function get() {
          return this.customState || this.editor.state;
        }
      }, {
        key: "commands",
        get: function get() {
          var _this39 = this;
          var t = this.rawCommands,
            e = this.editor,
            n = this.state,
            r = e.view,
            o = n.tr,
            i = this.buildProps(o);
          return Object.fromEntries(Object.entries(t).map(function (_ref7) {
            var _ref8 = _slicedToArray(_ref7, 2),
              t = _ref8[0],
              e = _ref8[1];
            return [t, function () {
              var n = e.apply(void 0, arguments)(i);
              return o.getMeta("preventDispatch") || _this39.hasCustomState || r.dispatch(o), n;
            }];
          }));
        }
      }, {
        key: "chain",
        get: function get() {
          var _this40 = this;
          return function () {
            return _this40.createChain();
          };
        }
      }, {
        key: "can",
        get: function get() {
          var _this41 = this;
          return function () {
            return _this41.createCan();
          };
        }
      }, {
        key: "createChain",
        value: function createChain(t) {
          var _this42 = this;
          var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
          var n = this.rawCommands,
            r = this.editor,
            o = this.state,
            i = r.view,
            s = [],
            a = !!t,
            l = t || o.tr,
            c = _objectSpread(_objectSpread({}, Object.fromEntries(Object.entries(n).map(function (_ref9) {
              var _ref10 = _slicedToArray(_ref9, 2),
                t = _ref10[0],
                n = _ref10[1];
              return [t, function () {
                var r = _this42.buildProps(l, e),
                  o = n.apply(void 0, arguments)(r);
                return s.push(o), c;
              }];
            }))), {}, {
              run: function run() {
                return a || !e || l.getMeta("preventDispatch") || _this42.hasCustomState || i.dispatch(l), s.every(function (t) {
                  return !0 === t;
                });
              }
            });
          return c;
        }
      }, {
        key: "createCan",
        value: function createCan(t) {
          var _this43 = this;
          var e = this.rawCommands,
            n = this.state,
            r = t || n.tr,
            o = this.buildProps(r, !1);
          return _objectSpread(_objectSpread({}, Object.fromEntries(Object.entries(e).map(function (_ref11) {
            var _ref12 = _slicedToArray(_ref11, 2),
              t = _ref12[0],
              e = _ref12[1];
            return [t, function () {
              return e.apply(void 0, arguments)(_objectSpread(_objectSpread({}, o), {}, {
                dispatch: void 0
              }));
            }];
          }))), {}, {
            chain: function chain() {
              return _this43.createChain(r, !1);
            }
          });
        }
      }, {
        key: "buildProps",
        value: function buildProps(t) {
          var _this44 = this;
          var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
          var n = this.rawCommands,
            r = this.editor,
            o = this.state,
            i = r.view,
            s = {
              tr: t,
              editor: r,
              view: i,
              state: si({
                state: o,
                transaction: t
              }),
              dispatch: e ? function () {} : void 0,
              chain: function chain() {
                return _this44.createChain(t, e);
              },
              can: function can() {
                return _this44.createCan(t);
              },
              get commands() {
                return Object.fromEntries(Object.entries(n).map(function (_ref13) {
                  var _ref14 = _slicedToArray(_ref13, 2),
                    t = _ref14[0],
                    e = _ref14[1];
                  return [t, function () {
                    return e.apply(void 0, arguments)(s);
                  }];
                }));
              }
            };
          return s;
        }
      }]);
      return ai;
    }();
    var li = /*#__PURE__*/function () {
      function li() {
        _classCallCheck(this, li);
        this.callbacks = {};
      }
      _createClass(li, [{
        key: "on",
        value: function on(t, e) {
          return this.callbacks[t] || (this.callbacks[t] = []), this.callbacks[t].push(e), this;
        }
      }, {
        key: "emit",
        value: function emit(t) {
          var _this45 = this;
          for (var _len2 = arguments.length, e = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            e[_key2 - 1] = arguments[_key2];
          }
          var n = this.callbacks[t];
          return n && n.forEach(function (t) {
            return t.apply(_this45, e);
          }), this;
        }
      }, {
        key: "off",
        value: function off(t, e) {
          var n = this.callbacks[t];
          return n && (e ? this.callbacks[t] = n.filter(function (t) {
            return t !== e;
          }) : delete this.callbacks[t]), this;
        }
      }, {
        key: "removeAllListeners",
        value: function removeAllListeners() {
          this.callbacks = {};
        }
      }]);
      return li;
    }();
    function ci(t, e, n) {
      return void 0 === t.config[e] && t.parent ? ci(t.parent, e, n) : "function" == typeof t.config[e] ? t.config[e].bind(_objectSpread(_objectSpread({}, n), {}, {
        parent: t.parent ? ci(t.parent, e, n) : null
      })) : t.config[e];
    }
    function ui(t) {
      return {
        baseExtensions: t.filter(function (t) {
          return "extension" === t.type;
        }),
        nodeExtensions: t.filter(function (t) {
          return "node" === t.type;
        }),
        markExtensions: t.filter(function (t) {
          return "mark" === t.type;
        })
      };
    }
    function hi(t) {
      var e = [],
        _ui = ui(t),
        n = _ui.nodeExtensions,
        r = _ui.markExtensions,
        o = [].concat(_toConsumableArray(n), _toConsumableArray(r)),
        i = {
          default: null,
          rendered: !0,
          renderHTML: null,
          parseHTML: null,
          keepOnSplit: !0,
          isRequired: !1
        };
      return t.forEach(function (t) {
        var n = ci(t, "addGlobalAttributes", {
          name: t.name,
          options: t.options,
          storage: t.storage
        });
        n && n().forEach(function (t) {
          t.types.forEach(function (n) {
            Object.entries(t.attributes).forEach(function (_ref15) {
              var _ref16 = _slicedToArray(_ref15, 2),
                t = _ref16[0],
                r = _ref16[1];
              e.push({
                type: n,
                name: t,
                attribute: _objectSpread(_objectSpread({}, i), r)
              });
            });
          });
        });
      }), o.forEach(function (t) {
        var n = {
            name: t.name,
            options: t.options,
            storage: t.storage
          },
          r = ci(t, "addAttributes", n);
        if (!r) return;
        var o = r();
        Object.entries(o).forEach(function (_ref17) {
          var _ref18 = _slicedToArray(_ref17, 2),
            n = _ref18[0],
            r = _ref18[1];
          var o = _objectSpread(_objectSpread({}, i), r);
          "function" == typeof (null == o ? void 0 : o.default) && (o.default = o.default()), (null == o ? void 0 : o.isRequired) && void 0 === (null == o ? void 0 : o.default) && delete o.default, e.push({
            type: t.name,
            name: n,
            attribute: o
          });
        });
      }), e;
    }
    function di(t, e) {
      if ("string" == typeof t) {
        if (!e.nodes[t]) throw Error("There is no node type named '".concat(t, "'. Maybe you forgot to add the extension?"));
        return e.nodes[t];
      }
      return t;
    }
    function pi() {
      for (var _len3 = arguments.length, t = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        t[_key3] = arguments[_key3];
      }
      return t.filter(function (t) {
        return !!t;
      }).reduce(function (t, e) {
        var n = _objectSpread({}, t);
        return Object.entries(e).forEach(function (_ref19) {
          var _ref20 = _slicedToArray(_ref19, 2),
            t = _ref20[0],
            e = _ref20[1];
          if (n[t]) {
            if ("class" === t) {
              var _r117 = e ? e.split(" ") : [],
                _o89 = n[t] ? n[t].split(" ") : [],
                _i69 = _r117.filter(function (t) {
                  return !_o89.includes(t);
                });
              n[t] = [].concat(_toConsumableArray(_o89), _toConsumableArray(_i69)).join(" ");
            } else n[t] = "style" === t ? [n[t], e].join("; ") : e;
          } else n[t] = e;
        }), n;
      }, {});
    }
    function fi(t, e) {
      return e.filter(function (t) {
        return t.attribute.rendered;
      }).map(function (e) {
        return e.attribute.renderHTML ? e.attribute.renderHTML(t.attrs) || {} : _defineProperty({}, e.name, t.attrs[e.name]);
      }).reduce(function (t, e) {
        return pi(t, e);
      }, {});
    }
    function mi(t) {
      return "function" == typeof t;
    }
    function gi(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : void 0;
      for (var _len4 = arguments.length, n = new Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
        n[_key4 - 2] = arguments[_key4];
      }
      return mi(t) ? e ? t.bind(e).apply(void 0, n) : t.apply(void 0, n) : t;
    }
    function yi(t, e) {
      return t.style ? t : _objectSpread(_objectSpread({}, t), {}, {
        getAttrs: function getAttrs(n) {
          var r = t.getAttrs ? t.getAttrs(n) : t.attrs;
          if (!1 === r) return !1;
          var o = e.reduce(function (t, e) {
            var r = e.attribute.parseHTML ? e.attribute.parseHTML(n) : function (t) {
              return "string" != typeof t ? t : t.match(/^[+-]?(?:\d*\.)?\d+$/) ? Number(t) : "true" === t || "false" !== t && t;
            }(n.getAttribute(e.name));
            return null == r ? t : _objectSpread(_objectSpread({}, t), {}, _defineProperty({}, e.name, r));
          }, {});
          return _objectSpread(_objectSpread({}, r), o);
        }
      });
    }
    function vi(t) {
      return Object.fromEntries(Object.entries(t).filter(function (_ref22) {
        var _ref23 = _slicedToArray(_ref22, 2),
          t = _ref23[0],
          e = _ref23[1];
        return ("attrs" !== t || !function () {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          return 0 === Object.keys(t).length && t.constructor === Object;
        }(e)) && null != e;
      }));
    }
    function bi(t, e) {
      return e.nodes[t] || e.marks[t] || null;
    }
    function wi(t, e) {
      return Array.isArray(e) ? e.some(function (e) {
        return ("string" == typeof e ? e : e.name) === t.name;
      }) : e;
    }
    var xi = function xi(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
      var n = "";
      var r = t.parentOffset;
      return t.parent.nodesBetween(Math.max(0, r - e), r, function (t, e, o, i) {
        var s, a;
        var l = (null === (a = (s = t.type.spec).toText) || void 0 === a ? void 0 : a.call(s, {
          node: t,
          pos: e,
          parent: o,
          index: i
        })) || t.textContent || "%leaf%";
        n += l.slice(0, Math.max(0, r - e));
      }), n;
    };
    function ki(t) {
      return "[object RegExp]" === Object.prototype.toString.call(t);
    }
    var Si = /*#__PURE__*/_createClass(function Si(t) {
      _classCallCheck(this, Si);
      this.find = t.find, this.handler = t.handler;
    });
    var Mi = function Mi(t, e) {
      if (ki(e)) return e.exec(t);
      var n = e(t);
      if (!n) return null;
      var r = [n.text];
      return r.index = n.index, r.input = t, r.data = n.data, n.replaceWith && (n.text.includes(n.replaceWith) || console.warn('[tiptap warn]: "inputRuleMatch.replaceWith" must be part of "inputRuleMatch.text".'), r.push(n.replaceWith)), r;
    };
    function Oi(t) {
      var e;
      var n = t.editor,
        r = t.from,
        o = t.to,
        i = t.text,
        s = t.rules,
        a = t.plugin,
        l = n.view;
      if (l.composing) return !1;
      var c = l.state.doc.resolve(r);
      if (c.parent.type.spec.code || (null === (e = c.nodeBefore || c.nodeAfter) || void 0 === e ? void 0 : e.marks.find(function (t) {
        return t.type.spec.code;
      }))) return !1;
      var u = !1;
      var h = xi(c) + i;
      return s.forEach(function (t) {
        if (u) return;
        var e = Mi(h, t.find);
        if (!e) return;
        var s = l.state.tr,
          c = si({
            state: l.state,
            transaction: s
          }),
          d = {
            from: r - (e[0].length - i.length),
            to: o
          },
          _ai = new ai({
            editor: n,
            state: c
          }),
          p = _ai.commands,
          f = _ai.chain,
          m = _ai.can;
        null !== t.handler({
          state: c,
          range: d,
          match: e,
          commands: p,
          chain: f,
          can: m
        }) && s.steps.length && (s.setMeta(a, {
          transform: s,
          from: r,
          to: o,
          text: i
        }), l.dispatch(s), u = !0);
      }), u;
    }
    function Ti(t) {
      var e = t.editor,
        n = t.rules,
        r = new pe({
          state: {
            init: function init() {
              return null;
            },
            apply: function apply(t, e) {
              return t.getMeta(r) || (t.selectionSet || t.docChanged ? null : e);
            }
          },
          props: {
            handleTextInput: function handleTextInput(t, o, i, s) {
              return Oi({
                editor: e,
                from: o,
                to: i,
                text: s,
                rules: n,
                plugin: r
              });
            },
            handleDOMEvents: {
              compositionend: function compositionend(t) {
                return setTimeout(function () {
                  var o = t.state.selection.$cursor;
                  o && Oi({
                    editor: e,
                    from: o.pos,
                    to: o.pos,
                    text: "",
                    rules: n,
                    plugin: r
                  });
                }), !1;
              }
            },
            handleKeyDown: function handleKeyDown(t, o) {
              if ("Enter" !== o.key) return !1;
              var i = t.state.selection.$cursor;
              return !!i && Oi({
                editor: e,
                from: i.pos,
                to: i.pos,
                text: "\n",
                rules: n,
                plugin: r
              });
            }
          },
          isInputRules: !0
        });
      return r;
    }
    var Ci = /*#__PURE__*/_createClass(function Ci(t) {
      _classCallCheck(this, Ci);
      this.find = t.find, this.handler = t.handler;
    });
    function Ei(t) {
      var e = t.editor,
        n = t.rules;
      var r = null,
        o = !1,
        i = !1,
        s = new global.ClipboardEvent("paste"),
        a = new global.DragEvent("drop");
      var l = n.map(function (t) {
        return new pe({
          view: function view(t) {
            var e = function e(_e195) {
              var n;
              r = (null === (n = t.dom.parentElement) || void 0 === n ? void 0 : n.contains(_e195.target)) ? t.dom.parentElement : null;
            };
            return global.window.addEventListener("dragstart", e), {
              destroy: function destroy() {
                global.window.removeEventListener("dragstart", e);
              }
            };
          },
          props: {
            handleDOMEvents: {
              drop: function drop(t, e) {
                return i = r === t.dom.parentElement, a = e, !1;
              },
              paste: function paste(t, e) {
                var n;
                var r = null === (n = e.clipboardData) || void 0 === n ? void 0 : n.getData("text/html");
                return s = e, o = !!(null == r ? void 0 : r.includes("data-pm-slice")), !1;
              }
            }
          },
          appendTransaction: function appendTransaction(n, r, l) {
            var c = n[0],
              u = "paste" === c.getMeta("uiEvent") && !o,
              h = "drop" === c.getMeta("uiEvent") && !i;
            if (!u && !h) return;
            var d = r.doc.content.findDiffStart(l.doc.content),
              p = r.doc.content.findDiffEnd(l.doc.content);
            if ("number" != typeof d || !p || d === p.b) return;
            var f = l.tr,
              m = si({
                state: l,
                transaction: f
              }),
              g = function (t) {
                var e = t.editor,
                  n = t.state,
                  r = t.from,
                  o = t.to,
                  i = t.rule,
                  s = t.pasteEvent,
                  a = t.dropEvent,
                  _ai2 = new ai({
                    editor: e,
                    state: n
                  }),
                  l = _ai2.commands,
                  c = _ai2.chain,
                  u = _ai2.can,
                  h = [];
                return n.doc.nodesBetween(r, o, function (t, e) {
                  if (!t.isTextblock || t.type.spec.code) return;
                  var d = Math.max(r, e),
                    p = Math.min(o, e + t.content.size);
                  (function (t, e, n) {
                    if (ki(e)) return _toConsumableArray(t.matchAll(e));
                    var r = e(t, n);
                    return r ? r.map(function (e) {
                      var n = [e.text];
                      return n.index = e.index, n.input = t, n.data = e.data, e.replaceWith && (e.text.includes(e.replaceWith) || console.warn('[tiptap warn]: "pasteRuleMatch.replaceWith" must be part of "pasteRuleMatch.text".'), n.push(e.replaceWith)), n;
                    }) : [];
                  })(t.textBetween(d - e, p - e, void 0, "￼"), i.find, s).forEach(function (t) {
                    if (void 0 === t.index) return;
                    var e = d + t.index + 1,
                      r = e + t[0].length,
                      o = {
                        from: n.tr.mapping.map(e),
                        to: n.tr.mapping.map(r)
                      },
                      p = i.handler({
                        state: n,
                        range: o,
                        match: t,
                        commands: l,
                        chain: c,
                        can: u,
                        pasteEvent: s,
                        dropEvent: a
                      });
                    h.push(p);
                  });
                }), h.every(function (t) {
                  return null !== t;
                });
              }({
                editor: e,
                state: m,
                from: Math.max(d - 1, 0),
                to: p.b - 1,
                rule: t,
                pasteEvent: s,
                dropEvent: a
              });
            return g && f.steps.length ? (a = new global.DragEvent("drop"), s = new global.ClipboardEvent("paste"), f) : void 0;
          }
        });
      });
      return l;
    }
    var Ai = /*#__PURE__*/function () {
      function Ai(t, e) {
        var _this46 = this;
        _classCallCheck(this, Ai);
        this.splittableMarks = [], this.editor = e, this.extensions = Ai.resolve(t), this.schema = function (t, e) {
          var n;
          var r = hi(t),
            _ui2 = ui(t),
            o = _ui2.nodeExtensions,
            i = _ui2.markExtensions,
            s = null === (n = o.find(function (t) {
              return ci(t, "topNode");
            })) || void 0 === n ? void 0 : n.name,
            a = Object.fromEntries(o.map(function (n) {
              var o = r.filter(function (t) {
                  return t.type === n.name;
                }),
                i = {
                  name: n.name,
                  options: n.options,
                  storage: n.storage,
                  editor: e
                },
                s = vi(_objectSpread(_objectSpread({}, t.reduce(function (t, e) {
                  var r = ci(e, "extendNodeSchema", i);
                  return _objectSpread(_objectSpread({}, t), r ? r(n) : {});
                }, {})), {}, {
                  content: gi(ci(n, "content", i)),
                  marks: gi(ci(n, "marks", i)),
                  group: gi(ci(n, "group", i)),
                  inline: gi(ci(n, "inline", i)),
                  atom: gi(ci(n, "atom", i)),
                  selectable: gi(ci(n, "selectable", i)),
                  draggable: gi(ci(n, "draggable", i)),
                  code: gi(ci(n, "code", i)),
                  defining: gi(ci(n, "defining", i)),
                  isolating: gi(ci(n, "isolating", i)),
                  attrs: Object.fromEntries(o.map(function (t) {
                    var e;
                    return [t.name, {
                      default: null === (e = null == t ? void 0 : t.attribute) || void 0 === e ? void 0 : e.default
                    }];
                  }))
                })),
                a = gi(ci(n, "parseHTML", i));
              a && (s.parseDOM = a.map(function (t) {
                return yi(t, o);
              }));
              var l = ci(n, "renderHTML", i);
              l && (s.toDOM = function (t) {
                return l({
                  node: t,
                  HTMLAttributes: fi(t, o)
                });
              });
              var c = ci(n, "renderText", i);
              return c && (s.toText = c), [n.name, s];
            })),
            l = Object.fromEntries(i.map(function (n) {
              var o = r.filter(function (t) {
                  return t.type === n.name;
                }),
                i = {
                  name: n.name,
                  options: n.options,
                  storage: n.storage,
                  editor: e
                },
                s = vi(_objectSpread(_objectSpread({}, t.reduce(function (t, e) {
                  var r = ci(e, "extendMarkSchema", i);
                  return _objectSpread(_objectSpread({}, t), r ? r(n) : {});
                }, {})), {}, {
                  inclusive: gi(ci(n, "inclusive", i)),
                  excludes: gi(ci(n, "excludes", i)),
                  group: gi(ci(n, "group", i)),
                  spanning: gi(ci(n, "spanning", i)),
                  code: gi(ci(n, "code", i)),
                  attrs: Object.fromEntries(o.map(function (t) {
                    var e;
                    return [t.name, {
                      default: null === (e = null == t ? void 0 : t.attribute) || void 0 === e ? void 0 : e.default
                    }];
                  }))
                })),
                a = gi(ci(n, "parseHTML", i));
              a && (s.parseDOM = a.map(function (t) {
                return yi(t, o);
              }));
              var l = ci(n, "renderHTML", i);
              return l && (s.toDOM = function (t) {
                return l({
                  mark: t,
                  HTMLAttributes: fi(t, o)
                });
              }), [n.name, s];
            }));
          return new J({
            topNode: s,
            nodes: a,
            marks: l
          });
        }(this.extensions, e), this.extensions.forEach(function (t) {
          var e;
          _this46.editor.extensionStorage[t.name] = t.storage;
          var n = {
            name: t.name,
            options: t.options,
            storage: t.storage,
            editor: _this46.editor,
            type: bi(t.name, _this46.schema)
          };
          "mark" === t.type && (null === (e = gi(ci(t, "keepOnSplit", n))) || void 0 === e || e) && _this46.splittableMarks.push(t.name);
          var r = ci(t, "onBeforeCreate", n);
          r && _this46.editor.on("beforeCreate", r);
          var o = ci(t, "onCreate", n);
          o && _this46.editor.on("create", o);
          var i = ci(t, "onUpdate", n);
          i && _this46.editor.on("update", i);
          var s = ci(t, "onSelectionUpdate", n);
          s && _this46.editor.on("selectionUpdate", s);
          var a = ci(t, "onTransaction", n);
          a && _this46.editor.on("transaction", a);
          var l = ci(t, "onFocus", n);
          l && _this46.editor.on("focus", l);
          var c = ci(t, "onBlur", n);
          c && _this46.editor.on("blur", c);
          var u = ci(t, "onDestroy", n);
          u && _this46.editor.on("destroy", u);
        });
      }
      _createClass(Ai, [{
        key: "commands",
        get: function get() {
          var _this47 = this;
          return this.extensions.reduce(function (t, e) {
            var n = ci(e, "addCommands", {
              name: e.name,
              options: e.options,
              storage: e.storage,
              editor: _this47.editor,
              type: bi(e.name, _this47.schema)
            });
            return n ? _objectSpread(_objectSpread({}, t), n()) : t;
          }, {});
        }
      }, {
        key: "plugins",
        get: function get() {
          var _this48 = this;
          var t = this.editor,
            e = Ai.sort(_toConsumableArray(this.extensions).reverse()),
            n = [],
            r = [],
            o = e.map(function (e) {
              var o = {
                  name: e.name,
                  options: e.options,
                  storage: e.storage,
                  editor: t,
                  type: bi(e.name, _this48.schema)
                },
                i = [],
                s = ci(e, "addKeyboardShortcuts", o);
              var a = {};
              if ("mark" === e.type && e.config.exitable && (a.ArrowRight = function () {
                return xs.handleExit({
                  editor: t,
                  mark: e
                });
              }), s) {
                var _e196 = Object.fromEntries(Object.entries(s()).map(function (_ref24) {
                  var _ref25 = _slicedToArray(_ref24, 2),
                    e = _ref25[0],
                    n = _ref25[1];
                  return [e, function () {
                    return n({
                      editor: t
                    });
                  }];
                }));
                a = _objectSpread(_objectSpread({}, a), _e196);
              }
              var l = new pe({
                props: {
                  handleKeyDown: Lo(a)
                }
              });
              i.push(l);
              var c = ci(e, "addInputRules", o);
              wi(e, t.options.enableInputRules) && c && n.push.apply(n, _toConsumableArray(c()));
              var u = ci(e, "addPasteRules", o);
              wi(e, t.options.enablePasteRules) && u && r.push.apply(r, _toConsumableArray(u()));
              var h = ci(e, "addProseMirrorPlugins", o);
              if (h) {
                var _t171 = h();
                i.push.apply(i, _toConsumableArray(_t171));
              }
              return i;
            }).flat();
          return [Ti({
            editor: t,
            rules: n
          })].concat(_toConsumableArray(Ei({
            editor: t,
            rules: r
          })), _toConsumableArray(o));
        }
      }, {
        key: "attributes",
        get: function get() {
          return hi(this.extensions);
        }
      }, {
        key: "nodeViews",
        get: function get() {
          var _this49 = this;
          var t = this.editor,
            _ui3 = ui(this.extensions),
            e = _ui3.nodeExtensions;
          return Object.fromEntries(e.filter(function (t) {
            return !!ci(t, "addNodeView");
          }).map(function (e) {
            var n = _this49.attributes.filter(function (t) {
                return t.type === e.name;
              }),
              r = {
                name: e.name,
                options: e.options,
                storage: e.storage,
                editor: t,
                type: di(e.name, _this49.schema)
              },
              o = ci(e, "addNodeView", r);
            return o ? [e.name, function (r, i, s, a) {
              var l = fi(r, n);
              return o()({
                editor: t,
                node: r,
                getPos: s,
                decorations: a,
                HTMLAttributes: l,
                extension: e
              });
            }] : [];
          }));
        }
      }], [{
        key: "resolve",
        value: function resolve(t) {
          var e = Ai.sort(Ai.flatten(t)),
            n = function (t) {
              var e = t.filter(function (e, n) {
                return t.indexOf(e) !== n;
              });
              return _toConsumableArray(new Set(e));
            }(e.map(function (t) {
              return t.name;
            }));
          return n.length && console.warn("[tiptap warn]: Duplicate extension names found: [".concat(n.map(function (t) {
            return "'".concat(t, "'");
          }).join(", "), "]. This can lead to issues.")), e;
        }
      }, {
        key: "flatten",
        value: function flatten(t) {
          var _this50 = this;
          return t.map(function (t) {
            var e = ci(t, "addExtensions", {
              name: t.name,
              options: t.options,
              storage: t.storage
            });
            return e ? [t].concat(_toConsumableArray(_this50.flatten(e()))) : t;
          }).flat(10);
        }
      }, {
        key: "sort",
        value: function sort(t) {
          return t.sort(function (t, e) {
            var n = ci(t, "priority") || 100,
              r = ci(e, "priority") || 100;
            return n > r ? -1 : n < r ? 1 : 0;
          });
        }
      }]);
      return Ai;
    }();
    function Ni(t) {
      return "Object" === function (t) {
        return Object.prototype.toString.call(t).slice(8, -1);
      }(t) && t.constructor === Object && Object.getPrototypeOf(t) === Object.prototype;
    }
    function Di(t, e) {
      var n = _objectSpread({}, t);
      return Ni(t) && Ni(e) && Object.keys(e).forEach(function (r) {
        Ni(e[r]) ? r in t ? n[r] = Di(t[r], e[r]) : Object.assign(n, _defineProperty({}, r, e[r])) : Object.assign(n, _defineProperty({}, r, e[r]));
      }), n;
    }
    var Ri = /*#__PURE__*/function () {
      function Ri() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck(this, Ri);
        this.type = "extension", this.name = "extension", this.parent = null, this.child = null, this.config = {
          name: this.name,
          defaultOptions: {}
        }, this.config = _objectSpread(_objectSpread({}, this.config), t), this.name = this.config.name, t.defaultOptions && console.warn("[tiptap warn]: BREAKING CHANGE: \"defaultOptions\" is deprecated. Please use \"addOptions\" instead. Found in extension: \"".concat(this.name, "\".")), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = gi(ci(this, "addOptions", {
          name: this.name
        }))), this.storage = gi(ci(this, "addStorage", {
          name: this.name,
          options: this.options
        })) || {};
      }
      _createClass(Ri, [{
        key: "configure",
        value: function configure() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var e = this.extend();
          return e.options = Di(this.options, t), e.storage = gi(ci(e, "addStorage", {
            name: e.name,
            options: e.options
          })), e;
        }
      }, {
        key: "extend",
        value: function extend() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var e = new Ri(t);
          return e.parent = this, this.child = e, e.name = t.name ? t.name : e.parent.name, t.defaultOptions && console.warn("[tiptap warn]: BREAKING CHANGE: \"defaultOptions\" is deprecated. Please use \"addOptions\" instead. Found in extension: \"".concat(e.name, "\".")), e.options = gi(ci(e, "addOptions", {
            name: e.name
          })), e.storage = gi(ci(e, "addStorage", {
            name: e.name,
            options: e.options
          })), e;
        }
      }], [{
        key: "create",
        value: function create() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          return new Ri(t);
        }
      }]);
      return Ri;
    }();
    function Ii(t, e, n) {
      var r = e.from,
        o = e.to,
        _ref26 = n || {},
        _ref26$blockSeparator = _ref26.blockSeparator,
        i = _ref26$blockSeparator === void 0 ? "\n\n" : _ref26$blockSeparator,
        _ref26$textSerializer = _ref26.textSerializers,
        s = _ref26$textSerializer === void 0 ? {} : _ref26$textSerializer;
      var a = "",
        l = !0;
      return t.nodesBetween(r, o, function (t, n, c, u) {
        var h;
        var d = null == s ? void 0 : s[t.type.name];
        d ? (t.isBlock && !l && (a += i, l = !0), c && (a += d({
          node: t,
          pos: n,
          parent: c,
          index: u,
          range: e
        }))) : t.isText ? (a += null === (h = null == t ? void 0 : t.text) || void 0 === h ? void 0 : h.slice(Math.max(r, n) - n, o - n), l = !1) : t.isBlock && !l && (a += i, l = !0);
      }), a;
    }
    function Pi(t) {
      return Object.fromEntries(Object.entries(t.nodes).filter(function (_ref27) {
        var _ref28 = _slicedToArray(_ref27, 2),
          t = _ref28[1];
        return t.spec.toText;
      }).map(function (_ref29) {
        var _ref30 = _slicedToArray(_ref29, 2),
          t = _ref30[0],
          e = _ref30[1];
        return [t, e.spec.toText];
      }));
    }
    var Li = Ri.create({
      name: "clipboardTextSerializer",
      addProseMirrorPlugins: function addProseMirrorPlugins() {
        var _this51 = this;
        return [new pe({
          key: new ge("clipboardTextSerializer"),
          props: {
            clipboardTextSerializer: function clipboardTextSerializer() {
              var t = _this51.editor,
                e = t.state,
                n = t.schema,
                r = e.doc,
                o = e.selection,
                i = o.ranges;
              return Ii(r, {
                from: Math.min.apply(Math, _toConsumableArray(i.map(function (t) {
                  return t.$from.pos;
                }))),
                to: Math.max.apply(Math, _toConsumableArray(i.map(function (t) {
                  return t.$to.pos;
                })))
              }, {
                textSerializers: Pi(n)
              });
            }
          }
        })];
      }
    });
    function Fi(t, e) {
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
        strict: !0
      };
      var r = Object.keys(e);
      return !r.length || r.every(function (r) {
        return n.strict ? e[r] === t[r] : ki(e[r]) ? e[r].test(t[r]) : e[r] === t[r];
      });
    }
    function Bi(t, e) {
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return t.find(function (t) {
        return t.type === e && Fi(t.attrs, n);
      });
    }
    function zi(t, e) {
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return !!Bi(t, e, n);
    }
    function ji(t, e) {
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      if (!t || !e) return;
      var r = t.parent.childAfter(t.parentOffset);
      if (t.parentOffset === r.offset && 0 !== r.offset && (r = t.parent.childBefore(t.parentOffset)), !r.node) return;
      var o = Bi(_toConsumableArray(r.node.marks), e, n);
      if (!o) return;
      var i = r.index,
        s = t.start() + r.offset,
        a = i + 1,
        l = s + r.node.nodeSize;
      for (Bi(_toConsumableArray(r.node.marks), e, n); i > 0 && o.isInSet(t.parent.child(i - 1).marks);) i -= 1, s -= t.parent.child(i).nodeSize;
      for (; a < t.parent.childCount && zi(_toConsumableArray(t.parent.child(a).marks), e, n);) l += t.parent.child(a).nodeSize, a += 1;
      return {
        from: s,
        to: l
      };
    }
    function $i(t, e) {
      if ("string" == typeof t) {
        if (!e.marks[t]) throw Error("There is no mark type named '".concat(t, "'. Maybe you forgot to add the extension?"));
        return e.marks[t];
      }
      return t;
    }
    function _i(t) {
      return t instanceof Qt;
    }
    function Hi() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      return Math.min(Math.max(t, e), n);
    }
    function Vi(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      if (!e) return null;
      var n = Ut.atStart(t),
        r = Ut.atEnd(t);
      if ("start" === e || !0 === e) return n;
      if ("end" === e) return r;
      var o = n.from,
        i = r.to;
      return "all" === e ? Qt.create(t, Hi(0, o, i), Hi(t.content.size, o, i)) : Qt.create(t, Hi(e, o, i), Hi(e, o, i));
    }
    function Wi() {
      return ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(global.navigator.platform) || global.navigator.userAgent.includes("Mac") && "ontouchend" in global.document;
    }
    function Ki(t) {
      var e = "<body>".concat(t, "</body>");
      return new global.window.DOMParser().parseFromString(e, "text/html").body;
    }
    function qi(t, e, n) {
      if (n = _objectSpread({
        slice: !0,
        parseOptions: {}
      }, n), "object" == _typeof(t) && null !== t) try {
        return Array.isArray(t) && t.length > 0 ? i.fromArray(t.map(function (t) {
          return e.nodeFromJSON(t);
        })) : e.nodeFromJSON(t);
      } catch (r) {
        return console.warn("[tiptap warn]: Invalid content.", "Passed value:", t, "Error:", r), qi("", e, n);
      }
      if ("string" == typeof t) {
        var _r118 = G.fromSchema(e);
        return n.slice ? _r118.parseSlice(Ki(t), n.parseOptions).content : _r118.parse(Ki(t), n.parseOptions);
      }
      return qi("", e, n);
    }
    function Ji() {
      return void 0 !== global.navigator && /Mac/.test(global.navigator.platform);
    }
    function Ui(t, e) {
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var _t$selection7 = t.selection,
        r = _t$selection7.from,
        o = _t$selection7.to,
        i = _t$selection7.empty,
        s = e ? di(e, t.schema) : null,
        a = [];
      t.doc.nodesBetween(r, o, function (t, e) {
        if (t.isText) return;
        var n = Math.max(r, e),
          i = Math.min(o, e + t.nodeSize);
        a.push({
          node: t,
          from: n,
          to: i
        });
      });
      var l = o - r,
        c = a.filter(function (t) {
          return !s || s.name === t.node.type.name;
        }).filter(function (t) {
          return Fi(t.node.attrs, n, {
            strict: !1
          });
        });
      return i ? !!c.length : c.reduce(function (t, e) {
        return t + e.to - e.from;
      }, 0) >= l;
    }
    function Gi(t, e) {
      return e.nodes[t] ? "node" : e.marks[t] ? "mark" : null;
    }
    function Yi(t, e) {
      var n = "string" == typeof e ? [e] : e;
      return Object.keys(t).reduce(function (e, r) {
        return n.includes(r) || (e[r] = t[r]), e;
      }, {});
    }
    function Xi(t, e) {
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return qi(t, e, {
        slice: !1,
        parseOptions: n
      });
    }
    function Qi(t, e) {
      var n = $i(e, t.schema),
        _t$selection8 = t.selection,
        r = _t$selection8.from,
        o = _t$selection8.to,
        i = _t$selection8.empty,
        s = [];
      i ? (t.storedMarks && s.push.apply(s, _toConsumableArray(t.storedMarks)), s.push.apply(s, _toConsumableArray(t.selection.$head.marks()))) : t.doc.nodesBetween(r, o, function (t) {
        s.push.apply(s, _toConsumableArray(t.marks));
      });
      var a = s.find(function (t) {
        return t.type.name === n.name;
      });
      return a ? _objectSpread({}, a.attrs) : {};
    }
    function Zi(t) {
      return function (e) {
        return function (t, e) {
          for (var _n149 = t.depth; _n149 > 0; _n149 -= 1) {
            var _r119 = t.node(_n149);
            if (e(_r119)) return {
              pos: _n149 > 0 ? t.before(_n149) : 0,
              start: t.start(_n149),
              depth: _n149,
              node: _r119
            };
          }
        }(e.$from, t);
      };
    }
    function ts(t, e) {
      var n = Gi("string" == typeof e ? e : e.name, t.schema);
      return "node" === n ? function (t, e) {
        var n = di(e, t.schema),
          _t$selection9 = t.selection,
          r = _t$selection9.from,
          o = _t$selection9.to,
          i = [];
        t.doc.nodesBetween(r, o, function (t) {
          i.push(t);
        });
        var s = i.reverse().find(function (t) {
          return t.type.name === n.name;
        });
        return s ? _objectSpread({}, s.attrs) : {};
      }(t, e) : "mark" === n ? Qi(t, e) : {};
    }
    function es(t, e, n) {
      var r = [];
      return t === e ? n.resolve(t).marks().forEach(function (e) {
        var o = ji(n.resolve(t - 1), e.type);
        o && r.push(_objectSpread({
          mark: e
        }, o));
      }) : n.nodesBetween(t, e, function (t, e) {
        t && void 0 !== t.nodeSize && r.push.apply(r, _toConsumableArray(t.marks.map(function (n) {
          return {
            from: e,
            to: e + t.nodeSize,
            mark: n
          };
        })));
      }), r;
    }
    function ns(t, e, n) {
      return Object.fromEntries(Object.entries(n).filter(function (_ref31) {
        var _ref32 = _slicedToArray(_ref31, 1),
          n = _ref32[0];
        var r = t.find(function (t) {
          return t.type === e && t.name === n;
        });
        return !!r && r.attribute.keepOnSplit;
      }));
    }
    function rs(t, e) {
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var _t$selection10 = t.selection,
        r = _t$selection10.empty,
        o = _t$selection10.ranges,
        i = e ? $i(e, t.schema) : null;
      if (r) return !!(t.storedMarks || t.selection.$from.marks()).filter(function (t) {
        return !i || i.name === t.type.name;
      }).find(function (t) {
        return Fi(t.attrs, n, {
          strict: !1
        });
      });
      var s = 0;
      var a = [];
      if (o.forEach(function (_ref33) {
        var e = _ref33.$from,
          n = _ref33.$to;
        var r = e.pos,
          o = n.pos;
        t.doc.nodesBetween(r, o, function (t, e) {
          if (!t.isText && !t.marks.length) return;
          var n = Math.max(r, e),
            i = Math.min(o, e + t.nodeSize);
          s += i - n, a.push.apply(a, _toConsumableArray(t.marks.map(function (t) {
            return {
              mark: t,
              from: n,
              to: i
            };
          })));
        });
      }), 0 === s) return !1;
      var l = a.filter(function (t) {
          return !i || i.name === t.mark.type.name;
        }).filter(function (t) {
          return Fi(t.mark.attrs, n, {
            strict: !1
          });
        }).reduce(function (t, e) {
          return t + e.to - e.from;
        }, 0),
        c = a.filter(function (t) {
          return !i || t.mark.type !== i && t.mark.type.excludes(i);
        }).reduce(function (t, e) {
          return t + e.to - e.from;
        }, 0);
      return (l > 0 ? l + c : l) >= s;
    }
    function is(t, e) {
      var _ui4 = ui(e),
        n = _ui4.nodeExtensions,
        r = n.find(function (e) {
          return e.name === t;
        });
      if (!r) return !1;
      var o = gi(ci(r, "group", {
        name: r.name,
        options: r.options,
        storage: r.storage
      }));
      return "string" == typeof o && o.split(" ").includes("list");
    }
    function ss(t, e) {
      var n = t.storedMarks || t.selection.$to.parentOffset && t.selection.$from.marks();
      if (n) {
        var _r120 = n.filter(function (t) {
          return null == e ? void 0 : e.includes(t.type.name);
        });
        t.tr.ensureMarks(_r120);
      }
    }
    var as = function as(t, e) {
        var n = Zi(function (t) {
          return t.type === e;
        })(t.selection);
        if (!n) return !0;
        var r = t.doc.resolve(Math.max(0, n.pos - 1)).before(n.depth);
        if (void 0 === r) return !0;
        var o = t.doc.nodeAt(r);
        return n.node.type !== (null == o ? void 0 : o.type) || !At(t.doc, n.pos) || (t.join(n.pos), !0);
      },
      ls = function ls(t, e) {
        var n = Zi(function (t) {
          return t.type === e;
        })(t.selection);
        if (!n) return !0;
        var r = t.doc.resolve(n.start).after(n.depth);
        if (void 0 === r) return !0;
        var o = t.doc.nodeAt(r);
        return n.node.type !== (null == o ? void 0 : o.type) || !At(t.doc, r) || (t.join(r), !0);
      };
    var cs = Object.freeze({
      __proto__: null,
      blur: function blur() {
        return function (_ref34) {
          var t = _ref34.editor,
            e = _ref34.view;
          return requestAnimationFrame(function () {
            var n;
            t.isDestroyed || (e.dom.blur(), null === (n = null === global.window || void 0 === global.window ? void 0 : global.window.getSelection()) || void 0 === n || n.removeAllRanges());
          }), !0;
        };
      },
      clearContent: function clearContent() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
        return function (_ref35) {
          var e = _ref35.commands;
          return e.setContent("", t);
        };
      },
      clearNodes: function clearNodes() {
        return function (_ref36) {
          var t = _ref36.state,
            e = _ref36.tr,
            n = _ref36.dispatch;
          var r = e.selection,
            o = r.ranges;
          return !n || (o.forEach(function (_ref37) {
            var n = _ref37.$from,
              r = _ref37.$to;
            t.doc.nodesBetween(n.pos, r.pos, function (t, n) {
              if (t.type.isText) return;
              var r = e.doc,
                o = e.mapping,
                i = r.resolve(o.map(n)),
                s = r.resolve(o.map(n + t.nodeSize)),
                a = i.blockRange(s);
              if (!a) return;
              var l = Ot(a);
              if (t.type.isTextblock) {
                var _i$parent$contentMatc = i.parent.contentMatchAt(i.index()),
                  _t172 = _i$parent$contentMatc.defaultType;
                e.setNodeMarkup(a.start, _t172);
              }
              (l || 0 === l) && e.lift(a, l);
            });
          }), !0);
        };
      },
      command: function command(t) {
        return function (e) {
          return t(e);
        };
      },
      createParagraphNear: function createParagraphNear() {
        return function (_ref38) {
          var t = _ref38.state,
            e = _ref38.dispatch;
          return Jo(t, e);
        };
      },
      cut: function cut(t, e) {
        return function (_ref39) {
          var n = _ref39.editor,
            r = _ref39.tr;
          var o = n.state,
            i = o.doc.slice(t.from, t.to);
          r.deleteRange(t.from, t.to);
          var s = r.mapping.map(e);
          return r.insert(s, i.content), r.setSelection(new Qt(r.doc.resolve(s - 1))), !0;
        };
      },
      deleteCurrentNode: function deleteCurrentNode() {
        return function (_ref40) {
          var t = _ref40.tr,
            e = _ref40.dispatch;
          var n = t.selection,
            r = n.$anchor.node();
          if (r.content.size > 0) return !1;
          var o = t.selection.$anchor;
          for (var _n150 = o.depth; _n150 > 0; _n150 -= 1) if (o.node(_n150).type === r.type) {
            if (e) {
              var _e197 = o.before(_n150),
                _r121 = o.after(_n150);
              t.delete(_e197, _r121).scrollIntoView();
            }
            return !0;
          }
          return !1;
        };
      },
      deleteNode: function deleteNode(t) {
        return function (_ref41) {
          var e = _ref41.tr,
            n = _ref41.state,
            r = _ref41.dispatch;
          var o = di(t, n.schema),
            i = e.selection.$anchor;
          for (var _t173 = i.depth; _t173 > 0; _t173 -= 1) if (i.node(_t173).type === o) {
            if (r) {
              var _n151 = i.before(_t173),
                _r122 = i.after(_t173);
              e.delete(_n151, _r122).scrollIntoView();
            }
            return !0;
          }
          return !1;
        };
      },
      deleteRange: function deleteRange(t) {
        return function (_ref42) {
          var e = _ref42.tr,
            n = _ref42.dispatch;
          var r = t.from,
            o = t.to;
          return n && e.delete(r, o), !0;
        };
      },
      deleteSelection: function deleteSelection() {
        return function (_ref43) {
          var t = _ref43.state,
            e = _ref43.dispatch;
          return Fo(t, e);
        };
      },
      enter: function enter() {
        return function (_ref44) {
          var t = _ref44.commands;
          return t.keyboardShortcut("Enter");
        };
      },
      exitCode: function exitCode() {
        return function (_ref45) {
          var t = _ref45.state,
            e = _ref45.dispatch;
          return qo(t, e);
        };
      },
      extendMarkRange: function extendMarkRange(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return function (_ref46) {
          var n = _ref46.tr,
            r = _ref46.state,
            o = _ref46.dispatch;
          var i = $i(t, r.schema),
            s = n.doc,
            a = n.selection,
            l = a.$from,
            c = a.from,
            u = a.to;
          if (o) {
            var _t174 = ji(l, i, e);
            if (_t174 && _t174.from <= c && _t174.to >= u) {
              var _e198 = Qt.create(s, _t174.from, _t174.to);
              n.setSelection(_e198);
            }
          }
          return !0;
        };
      },
      first: function first(t) {
        return function (e) {
          var n = "function" == typeof t ? t(e) : t;
          for (var _t175 = 0; _t175 < n.length; _t175 += 1) if (n[_t175](e)) return !0;
          return !1;
        };
      },
      focus: function focus() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return function (_ref47) {
          var n = _ref47.editor,
            r = _ref47.view,
            o = _ref47.tr,
            i = _ref47.dispatch;
          e = _objectSpread({
            scrollIntoView: !0
          }, e);
          var s = function s() {
            Wi() && r.dom.focus(), requestAnimationFrame(function () {
              n.isDestroyed || (r.focus(), (null == e ? void 0 : e.scrollIntoView) && n.commands.scrollIntoView());
            });
          };
          if (r.hasFocus() && null === t || !1 === t) return !0;
          if (i && null === t && !_i(n.state.selection)) return s(), !0;
          var a = Vi(o.doc, t) || n.state.selection,
            l = n.state.selection.eq(a);
          return i && (l || o.setSelection(a), l && o.storedMarks && o.setStoredMarks(o.storedMarks), s()), !0;
        };
      },
      forEach: function forEach(t, e) {
        return function (n) {
          return t.every(function (t, r) {
            return e(t, _objectSpread(_objectSpread({}, n), {}, {
              index: r
            }));
          });
        };
      },
      insertContent: function insertContent(t, e) {
        return function (_ref48) {
          var n = _ref48.tr,
            r = _ref48.commands;
          return r.insertContentAt({
            from: n.selection.from,
            to: n.selection.to
          }, t, e);
        };
      },
      insertContentAt: function insertContentAt(t, e, n) {
        return function (_ref49) {
          var r = _ref49.tr,
            o = _ref49.dispatch,
            i = _ref49.editor;
          if (o) {
            n = _objectSpread({
              parseOptions: {},
              updateSelection: !0
            }, n);
            var _o90 = qi(e, i.schema, {
              parseOptions: _objectSpread({
                preserveWhitespace: "full"
              }, n.parseOptions)
            });
            if ("<>" === _o90.toString()) return !0;
            var _ref50 = "number" == typeof t ? {
                from: t,
                to: t
              } : {
                from: t.from,
                to: t.to
              },
              _s55 = _ref50.from,
              _a34 = _ref50.to,
              _l26 = !0,
              _c24 = !0;
            if ((_o90.toString().startsWith("<") ? _o90 : [_o90]).forEach(function (t) {
              t.check(), _l26 = !!_l26 && t.isText && 0 === t.marks.length, _c24 = !!_c24 && t.isBlock;
            }), _s55 === _a34 && _c24) {
              var _r$doc$resolve = r.doc.resolve(_s55),
                _t176 = _r$doc$resolve.parent;
              _t176.isTextblock && !_t176.type.spec.code && !_t176.childCount && (_s55 -= 1, _a34 += 1);
            }
            _l26 ? Array.isArray(e) ? r.insertText(e.map(function (t) {
              return t.text || "";
            }).join(""), _s55, _a34) : "object" == _typeof(e) && e && e.text ? r.insertText(e.text, _s55, _a34) : r.insertText(e, _s55, _a34) : r.replaceWith(_s55, _a34, _o90), n.updateSelection && function (t, e, n) {
              var r = t.steps.length - 1;
              if (r < e) return;
              var o = t.steps[r];
              if (!(o instanceof xt || o instanceof kt)) return;
              var i = t.mapping.maps[r];
              var s = 0;
              i.forEach(function (t, e, n, r) {
                0 === s && (s = r);
              }), t.setSelection(Ut.near(t.doc.resolve(s), -1));
            }(r, r.steps.length - 1);
          }
          return !0;
        };
      },
      joinUp: function joinUp() {
        return function (_ref51) {
          var t = _ref51.state,
            e = _ref51.dispatch;
          return function (t, e) {
            var n,
              r = t.selection,
              o = r instanceof te;
            if (o) {
              if (r.node.isTextblock || !At(t.doc, r.from)) return !1;
              n = r.from;
            } else if (n = Dt(t.doc, r.from, -1), null == n) return !1;
            if (e) {
              var _r123 = t.tr.join(n);
              o && _r123.setSelection(te.create(_r123.doc, n - t.doc.resolve(n).nodeBefore.nodeSize)), e(_r123.scrollIntoView());
            }
            return !0;
          }(t, e);
        };
      },
      joinDown: function joinDown() {
        return function (_ref52) {
          var t = _ref52.state,
            e = _ref52.dispatch;
          return function (t, e) {
            var n,
              r = t.selection;
            if (r instanceof te) {
              if (r.node.isTextblock || !At(t.doc, r.to)) return !1;
              n = r.to;
            } else if (n = Dt(t.doc, r.to, 1), null == n) return !1;
            return e && e(t.tr.join(n).scrollIntoView()), !0;
          }(t, e);
        };
      },
      joinBackward: function joinBackward() {
        return function (_ref53) {
          var t = _ref53.state,
            e = _ref53.dispatch;
          return Bo(t, e);
        };
      },
      joinForward: function joinForward() {
        return function (_ref54) {
          var t = _ref54.state,
            e = _ref54.dispatch;
          return _o(t, e);
        };
      },
      joinItemBackward: function joinItemBackward() {
        return function (_ref55) {
          var t = _ref55.tr,
            e = _ref55.state,
            n = _ref55.dispatch;
          try {
            var _r124 = Dt(e.doc, e.selection.$from.pos, -1);
            return null != _r124 && (t.join(_r124, 2), n && n(t), !0);
          } catch (_unused) {
            return !1;
          }
        };
      },
      joinItemForward: function joinItemForward() {
        return function (_ref56) {
          var t = _ref56.state,
            e = _ref56.dispatch,
            n = _ref56.tr;
          try {
            var _r125 = Dt(t.doc, t.selection.$from.pos, 1);
            return null != _r125 && (n.join(_r125, 2), e && e(n), !0);
          } catch (t) {
            return !1;
          }
        };
      },
      keyboardShortcut: function keyboardShortcut(t) {
        return function (_ref57) {
          var e = _ref57.editor,
            n = _ref57.view,
            r = _ref57.tr,
            o = _ref57.dispatch;
          var i = function (t) {
              var e = t.split(/-(?!$)/);
              var n,
                r,
                o,
                i,
                s = e[e.length - 1];
              "Space" === s && (s = " ");
              for (var _t177 = 0; _t177 < e.length - 1; _t177 += 1) {
                var _s56 = e[_t177];
                if (/^(cmd|meta|m)$/i.test(_s56)) i = !0;else if (/^a(lt)?$/i.test(_s56)) n = !0;else if (/^(c|ctrl|control)$/i.test(_s56)) r = !0;else if (/^s(hift)?$/i.test(_s56)) o = !0;else {
                  if (!/^mod$/i.test(_s56)) throw new Error("Unrecognized modifier name: ".concat(_s56));
                  Wi() || Ji() ? i = !0 : r = !0;
                }
              }
              return n && (s = "Alt-".concat(s)), r && (s = "Ctrl-".concat(s)), i && (s = "Meta-".concat(s)), o && (s = "Shift-".concat(s)), s;
            }(t).split(/-(?!$)/),
            s = i.find(function (t) {
              return !["Alt", "Ctrl", "Meta", "Shift"].includes(t);
            }),
            a = new KeyboardEvent("keydown", {
              key: "Space" === s ? " " : s,
              altKey: i.includes("Alt"),
              ctrlKey: i.includes("Ctrl"),
              metaKey: i.includes("Meta"),
              shiftKey: i.includes("Shift"),
              bubbles: !0,
              cancelable: !0
            }),
            l = e.captureTransaction(function () {
              n.someProp("handleKeyDown", function (t) {
                return t(n, a);
              });
            });
          return null == l || l.steps.forEach(function (t) {
            var e = t.map(r.mapping);
            e && o && r.maybeStep(e);
          }), !0;
        };
      },
      lift: function lift(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return function (_ref58) {
          var n = _ref58.state,
            r = _ref58.dispatch;
          return !!Ui(n, di(t, n.schema), e) && function (t, e) {
            var _t$selection11 = t.selection,
              n = _t$selection11.$from,
              r = _t$selection11.$to,
              o = n.blockRange(r),
              i = o && Ot(o);
            return null != i && (e && e(t.tr.lift(o, i).scrollIntoView()), !0);
          }(n, r);
        };
      },
      liftEmptyBlock: function liftEmptyBlock() {
        return function (_ref59) {
          var t = _ref59.state,
            e = _ref59.dispatch;
          return Uo(t, e);
        };
      },
      liftListItem: function liftListItem(t) {
        return function (_ref60) {
          var e = _ref60.state,
            n = _ref60.dispatch;
          return (r = di(t, e.schema), function (t, e) {
            var _t$selection12 = t.selection,
              n = _t$selection12.$from,
              o = _t$selection12.$to,
              s = n.blockRange(o, function (t) {
                return t.childCount > 0 && t.firstChild.type == r;
              });
            return !!s && (!e || (n.node(s.depth - 1).type == r ? function (t, e, n, r) {
              var o = t.tr,
                s = r.end,
                a = r.$to.end(r.depth);
              s < a && (o.step(new kt(s - 1, a, s, a, new h(i.from(n.create(null, r.parent.copy())), 1, 0), 1, !0)), r = new C(o.doc.resolve(r.$from.pos), o.doc.resolve(a), r.depth));
              var l = Ot(r);
              if (null == l) return !1;
              o.lift(r, l);
              var c = o.mapping.map(s, -1) - 1;
              return At(o.doc, c) && o.join(c), e(o.scrollIntoView()), !0;
            }(t, e, r, s) : function (t, e, n) {
              var r = t.tr,
                o = n.parent;
              for (var _t178 = n.end, _e199 = n.endIndex - 1, _i70 = n.startIndex; _e199 > _i70; _e199--) _t178 -= o.child(_e199).nodeSize, r.delete(_t178 - 1, _t178 + 1);
              var s = r.doc.resolve(n.start),
                a = s.nodeAfter;
              if (r.mapping.map(n.end) != n.start + s.nodeAfter.nodeSize) return !1;
              var l = 0 == n.startIndex,
                c = n.endIndex == o.childCount,
                u = s.node(-1),
                d = s.index(-1);
              if (!u.canReplace(d + (l ? 0 : 1), d + 1, a.content.append(c ? i.empty : i.from(o)))) return !1;
              var p = s.pos,
                f = p + a.nodeSize;
              return r.step(new kt(p - (l ? 1 : 0), f + (c ? 1 : 0), p + 1, f - 1, new h((l ? i.empty : i.from(o.copy(i.empty))).append(c ? i.empty : i.from(o.copy(i.empty))), l ? 0 : 1, c ? 0 : 1), l ? 0 : 1)), e(r.scrollIntoView()), !0;
            }(t, e, s)));
          })(e, n);
          var r;
        };
      },
      newlineInCode: function newlineInCode() {
        return function (_ref61) {
          var t = _ref61.state,
            e = _ref61.dispatch;
          return Wo(t, e);
        };
      },
      resetAttributes: function resetAttributes(t, e) {
        return function (_ref62) {
          var n = _ref62.tr,
            r = _ref62.state,
            o = _ref62.dispatch;
          var i = null,
            s = null;
          var a = Gi("string" == typeof t ? t : t.name, r.schema);
          return !!a && ("node" === a && (i = di(t, r.schema)), "mark" === a && (s = $i(t, r.schema)), o && n.selection.ranges.forEach(function (t) {
            r.doc.nodesBetween(t.$from.pos, t.$to.pos, function (t, r) {
              i && i === t.type && n.setNodeMarkup(r, void 0, Yi(t.attrs, e)), s && t.marks.length && t.marks.forEach(function (o) {
                s === o.type && n.addMark(r, r + t.nodeSize, s.create(Yi(o.attrs, e)));
              });
            });
          }), !0);
        };
      },
      scrollIntoView: function scrollIntoView() {
        return function (_ref63) {
          var t = _ref63.tr,
            e = _ref63.dispatch;
          return e && t.scrollIntoView(), !0;
        };
      },
      selectAll: function selectAll() {
        return function (_ref64) {
          var t = _ref64.tr,
            e = _ref64.commands;
          return e.setTextSelection({
            from: 0,
            to: t.doc.content.size
          });
        };
      },
      selectNodeBackward: function selectNodeBackward() {
        return function (_ref65) {
          var t = _ref65.state,
            e = _ref65.dispatch;
          return jo(t, e);
        };
      },
      selectNodeForward: function selectNodeForward() {
        return function (_ref66) {
          var t = _ref66.state,
            e = _ref66.dispatch;
          return Ho(t, e);
        };
      },
      selectParentNode: function selectParentNode() {
        return function (_ref67) {
          var t = _ref67.state,
            e = _ref67.dispatch;
          return function (t, e) {
            var n,
              _t$selection13 = t.selection,
              r = _t$selection13.$from,
              o = _t$selection13.to,
              i = r.sharedDepth(o);
            return 0 != i && (n = r.before(i), e && e(t.tr.setSelection(te.create(t.doc, n))), !0);
          }(t, e);
        };
      },
      selectTextblockEnd: function selectTextblockEnd() {
        return function (_ref68) {
          var t = _ref68.state,
            e = _ref68.dispatch;
          return Zo(t, e);
        };
      },
      selectTextblockStart: function selectTextblockStart() {
        return function (_ref69) {
          var t = _ref69.state,
            e = _ref69.dispatch;
          return Qo(t, e);
        };
      },
      setContent: function setContent(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        return function (_ref70) {
          var r = _ref70.tr,
            o = _ref70.editor,
            i = _ref70.dispatch;
          var s = r.doc,
            a = Xi(t, o.schema, n);
          return i && r.replaceWith(0, s.content.size, a).setMeta("preventUpdate", !e), !0;
        };
      },
      setMark: function setMark(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return function (_ref71) {
          var n = _ref71.tr,
            r = _ref71.state,
            o = _ref71.dispatch;
          var i = n.selection,
            s = i.empty,
            a = i.ranges,
            l = $i(t, r.schema);
          if (o) if (s) {
            var _t179 = Qi(r, l);
            n.addStoredMark(l.create(_objectSpread(_objectSpread({}, _t179), e)));
          } else a.forEach(function (t) {
            var o = t.$from.pos,
              i = t.$to.pos;
            r.doc.nodesBetween(o, i, function (t, r) {
              var s = Math.max(r, o),
                a = Math.min(r + t.nodeSize, i);
              t.marks.find(function (t) {
                return t.type === l;
              }) ? t.marks.forEach(function (t) {
                l === t.type && n.addMark(s, a, l.create(_objectSpread(_objectSpread({}, t.attrs), e)));
              }) : n.addMark(s, a, l.create(e));
            });
          });
          return function (t, e, n) {
            var r;
            var o = e.selection;
            var i = null;
            if (_i(o) && (i = o.$cursor), i) {
              var _e200 = null !== (r = t.storedMarks) && void 0 !== r ? r : i.marks();
              return !!n.isInSet(_e200) || !_e200.some(function (t) {
                return t.type.excludes(n);
              });
            }
            var s = o.ranges;
            return s.some(function (_ref72) {
              var e = _ref72.$from,
                r = _ref72.$to;
              var o = 0 === e.depth && t.doc.inlineContent && t.doc.type.allowsMarkType(n);
              return t.doc.nodesBetween(e.pos, r.pos, function (t, e, r) {
                if (o) return !1;
                if (t.isInline) {
                  var _e201 = !r || r.type.allowsMarkType(n),
                    _i71 = !!n.isInSet(t.marks) || !t.marks.some(function (t) {
                      return t.type.excludes(n);
                    });
                  o = _e201 && _i71;
                }
                return !o;
              }), o;
            });
          }(r, n, l);
        };
      },
      setMeta: function setMeta(t, e) {
        return function (_ref73) {
          var n = _ref73.tr;
          return n.setMeta(t, e), !0;
        };
      },
      setNode: function setNode(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return function (_ref74) {
          var n = _ref74.state,
            r = _ref74.dispatch,
            o = _ref74.chain;
          var i = di(t, n.schema);
          return i.isTextblock ? o().command(function (_ref75) {
            var t = _ref75.commands;
            return !!ti(i, e)(n) || t.clearNodes();
          }).command(function (_ref76) {
            var t = _ref76.state;
            return ti(i, e)(t, r);
          }).run() : (console.warn('[tiptap warn]: Currently "setNode()" only supports text block nodes.'), !1);
        };
      },
      setNodeSelection: function setNodeSelection(t) {
        return function (_ref77) {
          var e = _ref77.tr,
            n = _ref77.dispatch;
          if (n) {
            var _n152 = e.doc,
              _r126 = Hi(t, 0, _n152.content.size),
              _o91 = te.create(_n152, _r126);
            e.setSelection(_o91);
          }
          return !0;
        };
      },
      setTextSelection: function setTextSelection(t) {
        return function (_ref78) {
          var e = _ref78.tr,
            n = _ref78.dispatch;
          if (n) {
            var _n153 = e.doc,
              _ref79 = "number" == typeof t ? {
                from: t,
                to: t
              } : t,
              _r127 = _ref79.from,
              _o92 = _ref79.to,
              _i72 = Qt.atStart(_n153).from,
              _s57 = Qt.atEnd(_n153).to,
              _a35 = Hi(_r127, _i72, _s57),
              _l27 = Hi(_o92, _i72, _s57),
              _c25 = Qt.create(_n153, _a35, _l27);
            e.setSelection(_c25);
          }
          return !0;
        };
      },
      sinkListItem: function sinkListItem(t) {
        return function (_ref80) {
          var e = _ref80.state,
            n = _ref80.dispatch;
          var r = di(t, e.schema);
          return (o = r, function (t, e) {
            var _t$selection14 = t.selection,
              n = _t$selection14.$from,
              r = _t$selection14.$to,
              s = n.blockRange(r, function (t) {
                return t.childCount > 0 && t.firstChild.type == o;
              });
            if (!s) return !1;
            var a = s.startIndex;
            if (0 == a) return !1;
            var l = s.parent,
              c = l.child(a - 1);
            if (c.type != o) return !1;
            if (e) {
              var _n154 = c.lastChild && c.lastChild.type == l.type,
                _r128 = i.from(_n154 ? o.create() : null),
                _a36 = new h(i.from(o.create(null, i.from(l.type.create(null, _r128)))), _n154 ? 3 : 1, 0),
                _u10 = s.start,
                _d6 = s.end;
              e(t.tr.step(new kt(_u10 - (_n154 ? 3 : 1), _d6, _u10, _d6, _a36, 1, !0)).scrollIntoView());
            }
            return !0;
          })(e, n);
          var o;
        };
      },
      splitBlock: function splitBlock() {
        var _ref81 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref81$keepMarks = _ref81.keepMarks,
          t = _ref81$keepMarks === void 0 ? !0 : _ref81$keepMarks;
        return function (_ref82) {
          var e = _ref82.tr,
            n = _ref82.state,
            r = _ref82.dispatch,
            o = _ref82.editor;
          var i = e.selection,
            s = e.doc,
            a = i.$from,
            l = i.$to,
            c = ns(o.extensionManager.attributes, a.node().type.name, a.node().attrs);
          if (i instanceof te && i.node.isBlock) return !(!a.parentOffset || !Et(s, a.pos) || (r && (t && ss(n, o.extensionManager.splittableMarks), e.split(a.pos).scrollIntoView()), 0));
          if (!a.parent.isBlock) return !1;
          if (r) {
            var _r129 = l.parentOffset === l.parent.content.size;
            i instanceof Qt && e.deleteSelection();
            var _s58 = 0 === a.depth ? void 0 : function (t) {
              for (var _e202 = 0; _e202 < t.edgeCount; _e202 += 1) {
                var _t$edge3 = t.edge(_e202),
                  _n155 = _t$edge3.type;
                if (_n155.isTextblock && !_n155.hasRequiredAttrs()) return _n155;
              }
              return null;
            }(a.node(-1).contentMatchAt(a.indexAfter(-1)));
            var _u11 = _r129 && _s58 ? [{
                type: _s58,
                attrs: c
              }] : void 0,
              _h6 = Et(e.doc, e.mapping.map(a.pos), 1, _u11);
            if (_u11 || _h6 || !Et(e.doc, e.mapping.map(a.pos), 1, _s58 ? [{
              type: _s58
            }] : void 0) || (_h6 = !0, _u11 = _s58 ? [{
              type: _s58,
              attrs: c
            }] : void 0), _h6 && (e.split(e.mapping.map(a.pos), 1, _u11), _s58 && !_r129 && !a.parentOffset && a.parent.type !== _s58)) {
              var _t180 = e.mapping.map(a.before()),
                _n156 = e.doc.resolve(_t180);
              a.node(-1).canReplaceWith(_n156.index(), _n156.index() + 1, _s58) && e.setNodeMarkup(e.mapping.map(a.before()), _s58);
            }
            t && ss(n, o.extensionManager.splittableMarks), e.scrollIntoView();
          }
          return !0;
        };
      },
      splitListItem: function splitListItem(t) {
        return function (_ref83) {
          var e = _ref83.tr,
            n = _ref83.state,
            r = _ref83.dispatch,
            o = _ref83.editor;
          var s;
          var a = di(t, n.schema),
            _n$selection = n.selection,
            l = _n$selection.$from,
            c = _n$selection.$to,
            u = n.selection.node;
          if (u && u.isBlock || l.depth < 2 || !l.sameParent(c)) return !1;
          var d = l.node(-1);
          if (d.type !== a) return !1;
          var p = o.extensionManager.attributes;
          if (0 === l.parent.content.size && l.node(-1).childCount === l.indexAfter(-1)) {
            if (2 === l.depth || l.node(-3).type !== a || l.index(-2) !== l.node(-2).childCount - 1) return !1;
            if (r) {
              var _t181 = i.empty;
              var _n157 = l.index(-1) ? 1 : l.index(-2) ? 2 : 3;
              for (var _e203 = l.depth - _n157; _e203 >= l.depth - 3; _e203 -= 1) _t181 = i.from(l.node(_e203).copy(_t181));
              var _r130 = l.indexAfter(-1) < l.node(-2).childCount ? 1 : l.indexAfter(-2) < l.node(-3).childCount ? 2 : 3,
                _o93 = ns(p, l.node().type.name, l.node().attrs),
                _c26 = (null === (s = a.contentMatch.defaultType) || void 0 === s ? void 0 : s.createAndFill(_o93)) || void 0;
              _t181 = _t181.append(i.from(a.createAndFill(null, _c26) || void 0));
              var _u12 = l.before(l.depth - (_n157 - 1));
              e.replace(_u12, l.after(-_r130), new h(_t181, 4 - _n157, 0));
              var _d7 = -1;
              e.doc.nodesBetween(_u12, e.doc.content.size, function (t, e) {
                if (_d7 > -1) return !1;
                t.isTextblock && 0 === t.content.size && (_d7 = e + 1);
              }), _d7 > -1 && e.setSelection(Qt.near(e.doc.resolve(_d7))), e.scrollIntoView();
            }
            return !0;
          }
          var f = c.pos === l.end() ? d.contentMatchAt(0).defaultType : null,
            m = ns(p, d.type.name, d.attrs),
            g = ns(p, l.node().type.name, l.node().attrs);
          e.delete(l.pos, c.pos);
          var y = f ? [{
            type: a,
            attrs: m
          }, {
            type: f,
            attrs: g
          }] : [{
            type: a,
            attrs: m
          }];
          if (!Et(e.doc, l.pos, 2)) return !1;
          if (r) {
            var _t182 = n.selection,
              _i73 = n.storedMarks,
              _s59 = o.extensionManager.splittableMarks,
              _a37 = _i73 || _t182.$to.parentOffset && _t182.$from.marks();
            if (e.split(l.pos, 2, y).scrollIntoView(), !_a37 || !r) return !0;
            var _c27 = _a37.filter(function (t) {
              return _s59.includes(t.type.name);
            });
            e.ensureMarks(_c27);
          }
          return !0;
        };
      },
      toggleList: function toggleList(t, e, n) {
        var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
        return function (_ref84) {
          var o = _ref84.editor,
            i = _ref84.tr,
            s = _ref84.state,
            a = _ref84.dispatch,
            l = _ref84.chain,
            c = _ref84.commands,
            u = _ref84.can;
          var _o$extensionManager = o.extensionManager,
            h = _o$extensionManager.extensions,
            d = _o$extensionManager.splittableMarks,
            p = di(t, s.schema),
            f = di(e, s.schema),
            m = s.selection,
            g = s.storedMarks,
            y = m.$from,
            v = m.$to,
            b = y.blockRange(v),
            w = g || m.$to.parentOffset && m.$from.marks();
          if (!b) return !1;
          var x = Zi(function (t) {
            return is(t.type.name, h);
          })(m);
          if (b.depth >= 1 && x && b.depth - x.depth <= 1) {
            if (x.node.type === p) return c.liftListItem(f);
            if (is(x.node.type.name, h) && p.validContent(x.node.content) && a) return l().command(function () {
              return i.setNodeMarkup(x.pos, p), !0;
            }).command(function () {
              return as(i, p);
            }).command(function () {
              return ls(i, p);
            }).run();
          }
          return n && w && a ? l().command(function () {
            var t = u().wrapInList(p, r),
              e = w.filter(function (t) {
                return d.includes(t.type.name);
              });
            return i.ensureMarks(e), !!t || c.clearNodes();
          }).wrapInList(p, r).command(function () {
            return as(i, p);
          }).command(function () {
            return ls(i, p);
          }).run() : l().command(function () {
            return !!u().wrapInList(p, r) || c.clearNodes();
          }).wrapInList(p, r).command(function () {
            return as(i, p);
          }).command(function () {
            return ls(i, p);
          }).run();
        };
      },
      toggleMark: function toggleMark(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        return function (_ref85) {
          var r = _ref85.state,
            o = _ref85.commands;
          var _n$extendEmptyMarkRan = n.extendEmptyMarkRange,
            i = _n$extendEmptyMarkRan === void 0 ? !1 : _n$extendEmptyMarkRan,
            s = $i(t, r.schema);
          return rs(r, s, e) ? o.unsetMark(s, {
            extendEmptyMarkRange: i
          }) : o.setMark(s, e);
        };
      },
      toggleNode: function toggleNode(t, e) {
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        return function (_ref86) {
          var r = _ref86.state,
            o = _ref86.commands;
          var i = di(t, r.schema),
            s = di(e, r.schema);
          return Ui(r, i, n) ? o.setNode(s) : o.setNode(i, n);
        };
      },
      toggleWrap: function toggleWrap(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return function (_ref87) {
          var n = _ref87.state,
            r = _ref87.commands;
          var o = di(t, n.schema);
          return Ui(n, o, e) ? r.lift(o) : r.wrapIn(o, e);
        };
      },
      undoInputRule: function undoInputRule() {
        return function (_ref88) {
          var t = _ref88.state,
            e = _ref88.dispatch;
          var n = t.plugins;
          for (var _r131 = 0; _r131 < n.length; _r131 += 1) {
            var _o94 = n[_r131];
            var _i74 = void 0;
            if (_o94.spec.isInputRules && (_i74 = _o94.getState(t))) {
              if (e) {
                var _e204 = t.tr,
                  _n158 = _i74.transform;
                for (var _t183 = _n158.steps.length - 1; _t183 >= 0; _t183 -= 1) _e204.step(_n158.steps[_t183].invert(_n158.docs[_t183]));
                if (_i74.text) {
                  var _n159 = _e204.doc.resolve(_i74.from).marks();
                  _e204.replaceWith(_i74.from, _i74.to, t.schema.text(_i74.text, _n159));
                } else _e204.delete(_i74.from, _i74.to);
              }
              return !0;
            }
          }
          return !1;
        };
      },
      unsetAllMarks: function unsetAllMarks() {
        return function (_ref89) {
          var t = _ref89.tr,
            e = _ref89.dispatch;
          var n = t.selection,
            r = n.empty,
            o = n.ranges;
          return r || e && o.forEach(function (e) {
            t.removeMark(e.$from.pos, e.$to.pos);
          }), !0;
        };
      },
      unsetMark: function unsetMark(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return function (_ref90) {
          var n = _ref90.tr,
            r = _ref90.state,
            o = _ref90.dispatch;
          var i;
          var _e$extendEmptyMarkRan = e.extendEmptyMarkRange,
            s = _e$extendEmptyMarkRan === void 0 ? !1 : _e$extendEmptyMarkRan,
            a = n.selection,
            l = $i(t, r.schema),
            c = a.$from,
            u = a.empty,
            h = a.ranges;
          if (!o) return !0;
          if (u && s) {
            var _t184 = a.from,
              _e205 = a.to;
            var _r132 = null === (i = c.marks().find(function (t) {
                return t.type === l;
              })) || void 0 === i ? void 0 : i.attrs,
              _o95 = ji(c, l, _r132);
            _o95 && (_t184 = _o95.from, _e205 = _o95.to), n.removeMark(_t184, _e205, l);
          } else h.forEach(function (t) {
            n.removeMark(t.$from.pos, t.$to.pos, l);
          });
          return n.removeStoredMark(l), !0;
        };
      },
      updateAttributes: function updateAttributes(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return function (_ref91) {
          var n = _ref91.tr,
            r = _ref91.state,
            o = _ref91.dispatch;
          var i = null,
            s = null;
          var a = Gi("string" == typeof t ? t : t.name, r.schema);
          return !!a && ("node" === a && (i = di(t, r.schema)), "mark" === a && (s = $i(t, r.schema)), o && n.selection.ranges.forEach(function (t) {
            var o = t.$from.pos,
              a = t.$to.pos;
            r.doc.nodesBetween(o, a, function (t, r) {
              i && i === t.type && n.setNodeMarkup(r, void 0, _objectSpread(_objectSpread({}, t.attrs), e)), s && t.marks.length && t.marks.forEach(function (i) {
                if (s === i.type) {
                  var _l28 = Math.max(r, o),
                    _c28 = Math.min(r + t.nodeSize, a);
                  n.addMark(_l28, _c28, s.create(_objectSpread(_objectSpread({}, i.attrs), e)));
                }
              });
            });
          }), !0);
        };
      },
      wrapIn: function wrapIn(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return function (_ref92) {
          var n = _ref92.state,
            r = _ref92.dispatch;
          return function (t) {
            var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            return function (n, r) {
              var _n$selection2 = n.selection,
                o = _n$selection2.$from,
                i = _n$selection2.$to,
                s = o.blockRange(i),
                a = s && Tt(s, t, e);
              return !!a && (r && r(n.tr.wrap(s, a).scrollIntoView()), !0);
            };
          }(di(t, n.schema), e)(n, r);
        };
      },
      wrapInList: function wrapInList(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return function (_ref93) {
          var n = _ref93.state,
            r = _ref93.dispatch;
          return function (t) {
            var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            return function (n, r) {
              var _n$selection3 = n.selection,
                o = _n$selection3.$from,
                s = _n$selection3.$to,
                a = o.blockRange(s),
                l = !1,
                c = a;
              if (!a) return !1;
              if (a.depth >= 2 && o.node(a.depth - 1).type.compatibleContent(t) && 0 == a.startIndex) {
                if (0 == o.index(a.depth - 1)) return !1;
                var _t185 = n.doc.resolve(a.start - 2);
                c = new C(_t185, _t185, a.depth), a.endIndex < a.parent.childCount && (a = new C(o, n.doc.resolve(s.end(a.depth)), a.depth)), l = !0;
              }
              var u = Tt(c, t, e, a);
              return !!u && (r && r(function (t, e, n, r, o) {
                var s = i.empty;
                for (var _t186 = n.length - 1; _t186 >= 0; _t186--) s = i.from(n[_t186].type.create(n[_t186].attrs, s));
                t.step(new kt(e.start - (r ? 2 : 0), e.end, e.start, e.end, new h(s, 0, 0), n.length, !0));
                var a = 0;
                for (var _t187 = 0; _t187 < n.length; _t187++) n[_t187].type == o && (a = _t187 + 1);
                var l = n.length - a,
                  c = e.start + n.length - (r ? 2 : 0),
                  u = e.parent;
                for (var _n160 = e.startIndex, _r133 = e.endIndex, _o96 = !0; _n160 < _r133; _n160++, _o96 = !1) !_o96 && Et(t.doc, c, l) && (t.split(c, l), c += 2 * l), c += u.child(_n160).nodeSize;
                return t;
              }(n.tr, a, u, l, t).scrollIntoView()), !0);
            };
          }(di(t, n.schema), e)(n, r);
        };
      }
    });
    var us = Ri.create({
        name: "commands",
        addCommands: function addCommands() {
          return _objectSpread({}, cs);
        }
      }),
      hs = Ri.create({
        name: "editable",
        addProseMirrorPlugins: function addProseMirrorPlugins() {
          var _this52 = this;
          return [new pe({
            key: new ge("editable"),
            props: {
              editable: function editable() {
                return _this52.editor.options.editable;
              }
            }
          })];
        }
      }),
      ds = Ri.create({
        name: "focusEvents",
        addProseMirrorPlugins: function addProseMirrorPlugins() {
          var t = this.editor;
          return [new pe({
            key: new ge("focusEvents"),
            props: {
              handleDOMEvents: {
                focus: function focus(e, n) {
                  t.isFocused = !0;
                  var r = t.state.tr.setMeta("focus", {
                    event: n
                  }).setMeta("addToHistory", !1);
                  return e.dispatch(r), !1;
                },
                blur: function blur(e, n) {
                  t.isFocused = !1;
                  var r = t.state.tr.setMeta("blur", {
                    event: n
                  }).setMeta("addToHistory", !1);
                  return e.dispatch(r), !1;
                }
              }
            }
          })];
        }
      }),
      ps = Ri.create({
        name: "keymap",
        addKeyboardShortcuts: function addKeyboardShortcuts() {
          var _this53 = this;
          var t = function t() {
              return _this53.editor.commands.first(function (_ref94) {
                var t = _ref94.commands;
                return [function () {
                  return t.undoInputRule();
                }, function () {
                  return t.command(function (_ref95) {
                    var e = _ref95.tr;
                    var n = e.selection,
                      r = e.doc,
                      o = n.empty,
                      i = n.$anchor,
                      s = i.pos,
                      a = i.parent,
                      l = i.parent.isTextblock ? e.doc.resolve(s - 1) : i,
                      c = l.parent.type.spec.isolating,
                      u = i.pos - i.parentOffset,
                      h = c && 1 === l.parent.childCount ? u === i.pos : Ut.atStart(r).from === s;
                    return !(!(o && h && a.type.isTextblock) || a.textContent.length) && t.clearNodes();
                  });
                }, function () {
                  return t.deleteSelection();
                }, function () {
                  return t.joinBackward();
                }, function () {
                  return t.selectNodeBackward();
                }];
              });
            },
            e = function e() {
              return _this53.editor.commands.first(function (_ref96) {
                var t = _ref96.commands;
                return [function () {
                  return t.deleteSelection();
                }, function () {
                  return t.deleteCurrentNode();
                }, function () {
                  return t.joinForward();
                }, function () {
                  return t.selectNodeForward();
                }];
              });
            },
            n = {
              Enter: function Enter() {
                return _this53.editor.commands.first(function (_ref97) {
                  var t = _ref97.commands;
                  return [function () {
                    return t.newlineInCode();
                  }, function () {
                    return t.createParagraphNear();
                  }, function () {
                    return t.liftEmptyBlock();
                  }, function () {
                    return t.splitBlock();
                  }];
                });
              },
              "Mod-Enter": function ModEnter() {
                return _this53.editor.commands.exitCode();
              },
              Backspace: t,
              "Mod-Backspace": t,
              "Shift-Backspace": t,
              Delete: e,
              "Mod-Delete": e,
              "Mod-a": function ModA() {
                return _this53.editor.commands.selectAll();
              }
            },
            r = _objectSpread({}, n),
            o = _objectSpread(_objectSpread({}, n), {}, {
              "Ctrl-h": t,
              "Alt-Backspace": t,
              "Ctrl-d": e,
              "Ctrl-Alt-Backspace": e,
              "Alt-Delete": e,
              "Alt-d": e,
              "Ctrl-a": function CtrlA() {
                return _this53.editor.commands.selectTextblockStart();
              },
              "Ctrl-e": function CtrlE() {
                return _this53.editor.commands.selectTextblockEnd();
              }
            });
          return Wi() || Ji() ? o : r;
        },
        addProseMirrorPlugins: function addProseMirrorPlugins() {
          var _this54 = this;
          return [new pe({
            key: new ge("clearDocument"),
            appendTransaction: function appendTransaction(t, e, n) {
              if (!t.some(function (t) {
                return t.docChanged;
              }) || e.doc.eq(n.doc)) return;
              var _e$selection = e.selection,
                r = _e$selection.empty,
                o = _e$selection.from,
                i = _e$selection.to,
                s = Ut.atStart(e.doc).from,
                a = Ut.atEnd(e.doc).to;
              if (r || o !== s || i !== a) return;
              if (0 !== n.doc.textBetween(0, n.doc.content.size, " ", " ").length) return;
              var l = n.tr,
                c = si({
                  state: n,
                  transaction: l
                }),
                _ai3 = new ai({
                  editor: _this54.editor,
                  state: c
                }),
                u = _ai3.commands;
              return u.clearNodes(), l.steps.length ? l : void 0;
            }
          })];
        }
      }),
      fs = Ri.create({
        name: "tabindex",
        addProseMirrorPlugins: function addProseMirrorPlugins() {
          return [new pe({
            key: new ge("tabindex"),
            props: {
              attributes: this.editor.isEditable ? {
                tabindex: "0"
              } : {}
            }
          })];
        }
      });
    var ms = Object.freeze({
      __proto__: null,
      ClipboardTextSerializer: Li,
      Commands: us,
      Editable: hs,
      FocusEvents: ds,
      Keymap: ps,
      Tabindex: fs
    });
    var gs = /*#__PURE__*/function (_li) {
      _inherits(gs, _li);
      function gs() {
        var _this55;
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck(this, gs);
        _this55 = _callSuper(this, gs), _this55.isFocused = !1, _this55.extensionStorage = {}, _this55.options = {
          element: global.document.createElement("div"),
          content: "",
          injectCSS: !0,
          injectNonce: void 0,
          extensions: [],
          autofocus: !1,
          editable: !0,
          editorProps: {},
          parseOptions: {},
          enableInputRules: !0,
          enablePasteRules: !0,
          enableCoreExtensions: !0,
          onBeforeCreate: function onBeforeCreate() {
            return null;
          },
          onCreate: function onCreate() {
            return null;
          },
          onUpdate: function onUpdate() {
            return null;
          },
          onSelectionUpdate: function onSelectionUpdate() {
            return null;
          },
          onTransaction: function onTransaction() {
            return null;
          },
          onFocus: function onFocus() {
            return null;
          },
          onBlur: function onBlur() {
            return null;
          },
          onDestroy: function onDestroy() {
            return null;
          }
        }, _this55.isCapturingTransaction = !1, _this55.capturedTransaction = null, _this55.setOptions(t), _this55.createExtensionManager(), _this55.createCommandManager(), _this55.createSchema(), _this55.on("beforeCreate", _this55.options.onBeforeCreate), _this55.emit("beforeCreate", {
          editor: _assertThisInitialized(_this55)
        }), _this55.createView(), _this55.injectCSS(), _this55.on("create", _this55.options.onCreate), _this55.on("update", _this55.options.onUpdate), _this55.on("selectionUpdate", _this55.options.onSelectionUpdate), _this55.on("transaction", _this55.options.onTransaction), _this55.on("focus", _this55.options.onFocus), _this55.on("blur", _this55.options.onBlur), _this55.on("destroy", _this55.options.onDestroy), global.window.setTimeout(function () {
          _this55.isDestroyed || (_this55.commands.focus(_this55.options.autofocus), _this55.emit("create", {
            editor: _assertThisInitialized(_this55)
          }));
        }, 0);
        return _this55;
      }
      _createClass(gs, [{
        key: "storage",
        get: function get() {
          return this.extensionStorage;
        }
      }, {
        key: "commands",
        get: function get() {
          return this.commandManager.commands;
        }
      }, {
        key: "chain",
        value: function chain() {
          return this.commandManager.chain();
        }
      }, {
        key: "can",
        value: function can() {
          return this.commandManager.can();
        }
      }, {
        key: "injectCSS",
        value: function injectCSS() {
          this.options.injectCSS && global.document && (this.css = function (t, e, n) {
            var r = global.document.querySelector("style[data-tiptap-style]");
            if (null !== r) return r;
            var o = global.document.createElement("style");
            return e && o.setAttribute("nonce", e), o.setAttribute("data-tiptap-style", ""), o.innerHTML = '.ProseMirror {\n  position: relative;\n}\n\n.ProseMirror {\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  white-space: break-spaces;\n  -webkit-font-variant-ligatures: none;\n  font-variant-ligatures: none;\n  font-feature-settings: "liga" 0; /* the above doesn\'t seem to work in Edge */\n}\n\n.ProseMirror [contenteditable="false"] {\n  white-space: normal;\n}\n\n.ProseMirror [contenteditable="false"] [contenteditable="true"] {\n  white-space: pre-wrap;\n}\n\n.ProseMirror pre {\n  white-space: pre-wrap;\n}\n\nimg.ProseMirror-separator {\n  display: inline !important;\n  border: none !important;\n  margin: 0 !important;\n  width: 1px !important;\n  height: 1px !important;\n}\n\n.ProseMirror-gapcursor {\n  display: none;\n  pointer-events: none;\n  position: absolute;\n  margin: 0;\n}\n\n.ProseMirror-gapcursor:after {\n  content: "";\n  display: block;\n  position: absolute;\n  top: -2px;\n  width: 20px;\n  border-top: 1px solid black;\n  animation: ProseMirror-cursor-blink 1.1s steps(2, start) infinite;\n}\n\n@keyframes ProseMirror-cursor-blink {\n  to {\n    visibility: hidden;\n  }\n}\n\n.ProseMirror-hideselection *::selection {\n  background: transparent;\n}\n\n.ProseMirror-hideselection *::-moz-selection {\n  background: transparent;\n}\n\n.ProseMirror-hideselection * {\n  caret-color: transparent;\n}\n\n.ProseMirror-focused .ProseMirror-gapcursor {\n  display: block;\n}\n\n.tippy-box[data-animation=fade][data-state=hidden] {\n  opacity: 0\n}', global.document.getElementsByTagName("head")[0].appendChild(o), o;
          }(0, this.options.injectNonce));
        }
      }, {
        key: "setOptions",
        value: function setOptions() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          this.options = _objectSpread(_objectSpread({}, this.options), t), this.view && this.state && !this.isDestroyed && (this.options.editorProps && this.view.setProps(this.options.editorProps), this.view.updateState(this.state));
        }
      }, {
        key: "setEditable",
        value: function setEditable(t) {
          var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
          this.setOptions({
            editable: t
          }), e && this.emit("update", {
            editor: this,
            transaction: this.state.tr
          });
        }
      }, {
        key: "isEditable",
        get: function get() {
          return this.options.editable && this.view && this.view.editable;
        }
      }, {
        key: "state",
        get: function get() {
          return this.view.state;
        }
      }, {
        key: "registerPlugin",
        value: function registerPlugin(t, e) {
          var n = mi(e) ? e(t, _toConsumableArray(this.state.plugins)) : [].concat(_toConsumableArray(this.state.plugins), [t]),
            r = this.state.reconfigure({
              plugins: n
            });
          this.view.updateState(r);
        }
      }, {
        key: "unregisterPlugin",
        value: function unregisterPlugin(t) {
          if (this.isDestroyed) return;
          var e = "string" == typeof t ? "".concat(t, "$") : t.key,
            n = this.state.reconfigure({
              plugins: this.state.plugins.filter(function (t) {
                return !t.key.startsWith(e);
              })
            });
          this.view.updateState(n);
        }
      }, {
        key: "createExtensionManager",
        value: function createExtensionManager() {
          var t = [].concat(_toConsumableArray(this.options.enableCoreExtensions ? Object.values(ms) : []), _toConsumableArray(this.options.extensions)).filter(function (t) {
            return ["extension", "node", "mark"].includes(null == t ? void 0 : t.type);
          });
          this.extensionManager = new Ai(t, this);
        }
      }, {
        key: "createCommandManager",
        value: function createCommandManager() {
          this.commandManager = new ai({
            editor: this
          });
        }
      }, {
        key: "createSchema",
        value: function createSchema() {
          this.schema = this.extensionManager.schema;
        }
      }, {
        key: "createView",
        value: function createView() {
          var t = Xi(this.options.content, this.schema, this.options.parseOptions),
            e = Vi(t, this.options.autofocus);
          this.view = new wo(this.options.element, _objectSpread(_objectSpread({}, this.options.editorProps), {}, {
            dispatchTransaction: this.dispatchTransaction.bind(this),
            state: he.create({
              doc: t,
              selection: e || void 0
            })
          }));
          var n = this.state.reconfigure({
            plugins: this.extensionManager.plugins
          });
          this.view.updateState(n), this.createNodeViews(), this.prependClass(), this.view.dom.editor = this;
        }
      }, {
        key: "createNodeViews",
        value: function createNodeViews() {
          this.view.setProps({
            nodeViews: this.extensionManager.nodeViews
          });
        }
      }, {
        key: "prependClass",
        value: function prependClass() {
          this.view.dom.className = "tiptap ".concat(this.view.dom.className);
        }
      }, {
        key: "captureTransaction",
        value: function captureTransaction(t) {
          this.isCapturingTransaction = !0, t(), this.isCapturingTransaction = !1;
          var e = this.capturedTransaction;
          return this.capturedTransaction = null, e;
        }
      }, {
        key: "dispatchTransaction",
        value: function dispatchTransaction(t) {
          var _this56 = this;
          if (this.view.isDestroyed) return;
          if (this.isCapturingTransaction) return this.capturedTransaction ? void t.steps.forEach(function (t) {
            var e;
            return null === (e = _this56.capturedTransaction) || void 0 === e ? void 0 : e.step(t);
          }) : void (this.capturedTransaction = t);
          var e = this.state.apply(t),
            n = !this.state.selection.eq(e.selection);
          this.view.updateState(e), this.emit("transaction", {
            editor: this,
            transaction: t
          }), n && this.emit("selectionUpdate", {
            editor: this,
            transaction: t
          });
          var r = t.getMeta("focus"),
            o = t.getMeta("blur");
          r && this.emit("focus", {
            editor: this,
            event: r.event,
            transaction: t
          }), o && this.emit("blur", {
            editor: this,
            event: o.event,
            transaction: t
          }), t.docChanged && !t.getMeta("preventUpdate") && this.emit("update", {
            editor: this,
            transaction: t
          });
        }
      }, {
        key: "getAttributes",
        value: function getAttributes(t) {
          return ts(this.state, t);
        }
      }, {
        key: "isActive",
        value: function isActive(t, e) {
          var n = "string" == typeof t ? t : null,
            r = "string" == typeof t ? e : t;
          return function (t, e) {
            var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            if (!e) return Ui(t, null, n) || rs(t, null, n);
            var r = Gi(e, t.schema);
            return "node" === r ? Ui(t, e, n) : "mark" === r && rs(t, e, n);
          }(this.state, n, r);
        }
      }, {
        key: "getJSON",
        value: function getJSON() {
          return this.state.doc.toJSON();
        }
      }, {
        key: "getHTML",
        value: function getHTML() {
          return function (t, e) {
            var n = it.fromSchema(e).serializeFragment(t),
              r = global.document.implementation.createHTMLDocument().createElement("div");
            return r.appendChild(n), r.innerHTML;
          }(this.state.doc.content, this.schema);
        }
      }, {
        key: "getText",
        value: function getText(t) {
          var _ref98 = t || {},
            _ref98$blockSeparator = _ref98.blockSeparator,
            e = _ref98$blockSeparator === void 0 ? "\n\n" : _ref98$blockSeparator,
            _ref98$textSerializer = _ref98.textSerializers,
            n = _ref98$textSerializer === void 0 ? {} : _ref98$textSerializer;
          return function (t, e) {
            return Ii(t, {
              from: 0,
              to: t.content.size
            }, e);
          }(this.state.doc, {
            blockSeparator: e,
            textSerializers: _objectSpread(_objectSpread({}, Pi(this.schema)), n)
          });
        }
      }, {
        key: "isEmpty",
        get: function get() {
          return function (t) {
            var e;
            var n = null === (e = t.type.createAndFill()) || void 0 === e ? void 0 : e.toJSON(),
              r = t.toJSON();
            return JSON.stringify(n) === JSON.stringify(r);
          }(this.state.doc);
        }
      }, {
        key: "getCharacterCount",
        value: function getCharacterCount() {
          return console.warn('[tiptap warn]: "editor.getCharacterCount()" is deprecated. Please use "editor.storage.characterCount.characters()" instead.'), this.state.doc.content.size - 2;
        }
      }, {
        key: "destroy",
        value: function destroy() {
          this.emit("destroy"), this.view && this.view.destroy(), this.removeAllListeners();
        }
      }, {
        key: "isDestroyed",
        get: function get() {
          var t;
          return !(null === (t = this.view) || void 0 === t ? void 0 : t.docView);
        }
      }]);
      return gs;
    }(li);
    function ys(t) {
      return new Si({
        find: t.find,
        handler: function handler(_ref99) {
          var e = _ref99.state,
            n = _ref99.range,
            r = _ref99.match;
          var o = gi(t.getAttributes, void 0, r);
          if (!1 === o || null === o) return null;
          var i = e.tr,
            s = r[r.length - 1],
            a = r[0];
          if (s) {
            var _r134 = a.search(/\S/),
              _l29 = n.from + a.indexOf(s),
              _c29 = _l29 + s.length;
            if (es(n.from, n.to, e.doc).filter(function (e) {
              return e.mark.type.excluded.find(function (n) {
                return n === t.type && n !== e.mark.type;
              });
            }).filter(function (t) {
              return t.to > _l29;
            }).length) return null;
            _c29 < n.to && i.delete(_c29, n.to), _l29 > n.from && i.delete(n.from + _r134, _l29);
            var _u13 = n.from + _r134 + s.length;
            i.addMark(n.from + _r134, _u13, t.type.create(o || {})), i.removeStoredMark(t.type);
          }
        }
      });
    }
    function vs(t) {
      return new Si({
        find: t.find,
        handler: function handler(_ref100) {
          var e = _ref100.state,
            n = _ref100.range,
            r = _ref100.match;
          var o = gi(t.getAttributes, void 0, r) || {},
            i = e.tr,
            s = n.from;
          var a = n.to;
          var l = t.type.create(o);
          if (r[1]) {
            var _t188 = s + r[0].lastIndexOf(r[1]);
            _t188 > a ? _t188 = a : a = _t188 + r[1].length;
            var _e206 = r[0][r[0].length - 1];
            i.insertText(_e206, s + r[0].length - 1), i.replaceWith(_t188, a, l);
          } else r[0] && i.insert(s - 1, t.type.create(o)).delete(i.mapping.map(s), i.mapping.map(a));
          i.scrollIntoView();
        }
      });
    }
    function bs(t) {
      return new Si({
        find: t.find,
        handler: function handler(_ref101) {
          var e = _ref101.state,
            n = _ref101.range,
            r = _ref101.match;
          var o = e.doc.resolve(n.from),
            i = gi(t.getAttributes, void 0, r) || {};
          if (!o.node(-1).canReplaceWith(o.index(-1), o.indexAfter(-1), t.type)) return null;
          e.tr.delete(n.from, n.to).setBlockType(n.from, n.from, t.type, i);
        }
      });
    }
    function ws(t) {
      return new Si({
        find: t.find,
        handler: function handler(_ref102) {
          var e = _ref102.state,
            n = _ref102.range,
            r = _ref102.match,
            o = _ref102.chain;
          var i = gi(t.getAttributes, void 0, r) || {},
            s = e.tr.delete(n.from, n.to),
            a = s.doc.resolve(n.from).blockRange(),
            l = a && Tt(a, t.type, i);
          if (!l) return null;
          if (s.wrap(a, l), t.keepMarks && t.editor) {
            var _n161 = e.selection,
              _r135 = e.storedMarks,
              _o97 = t.editor.extensionManager.splittableMarks,
              _i75 = _r135 || _n161.$to.parentOffset && _n161.$from.marks();
            if (_i75) {
              var _t189 = _i75.filter(function (t) {
                return _o97.includes(t.type.name);
              });
              s.ensureMarks(_t189);
            }
          }
          if (t.keepAttributes) {
            var _e207 = "bulletList" === t.type.name || "orderedList" === t.type.name ? "listItem" : "taskList";
            o().updateAttributes(_e207, i).run();
          }
          var c = s.doc.resolve(n.from - 1).nodeBefore;
          c && c.type === t.type && At(s.doc, n.from - 1) && (!t.joinPredicate || t.joinPredicate(r, c)) && s.join(n.from - 1);
        }
      });
    }
    var xs = /*#__PURE__*/function () {
      function xs() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck(this, xs);
        this.type = "mark", this.name = "mark", this.parent = null, this.child = null, this.config = {
          name: this.name,
          defaultOptions: {}
        }, this.config = _objectSpread(_objectSpread({}, this.config), t), this.name = this.config.name, t.defaultOptions && console.warn("[tiptap warn]: BREAKING CHANGE: \"defaultOptions\" is deprecated. Please use \"addOptions\" instead. Found in extension: \"".concat(this.name, "\".")), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = gi(ci(this, "addOptions", {
          name: this.name
        }))), this.storage = gi(ci(this, "addStorage", {
          name: this.name,
          options: this.options
        })) || {};
      }
      _createClass(xs, [{
        key: "configure",
        value: function configure() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var e = this.extend();
          return e.options = Di(this.options, t), e.storage = gi(ci(e, "addStorage", {
            name: e.name,
            options: e.options
          })), e;
        }
      }, {
        key: "extend",
        value: function extend() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var e = new xs(t);
          return e.parent = this, this.child = e, e.name = t.name ? t.name : e.parent.name, t.defaultOptions && console.warn("[tiptap warn]: BREAKING CHANGE: \"defaultOptions\" is deprecated. Please use \"addOptions\" instead. Found in extension: \"".concat(e.name, "\".")), e.options = gi(ci(e, "addOptions", {
            name: e.name
          })), e.storage = gi(ci(e, "addStorage", {
            name: e.name,
            options: e.options
          })), e;
        }
      }], [{
        key: "create",
        value: function create() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          return new xs(t);
        }
      }, {
        key: "handleExit",
        value: function handleExit(_ref103) {
          var t = _ref103.editor,
            e = _ref103.mark;
          var n = t.state.tr,
            r = t.state.selection.$from;
          if (r.pos === r.end()) {
            var _o98 = r.marks();
            if (!_o98.find(function (t) {
              return (null == t ? void 0 : t.type.name) === e.name;
            })) return !1;
            var _i76 = _o98.find(function (t) {
              return (null == t ? void 0 : t.type.name) === e.name;
            });
            return _i76 && n.removeStoredMark(_i76), n.insertText(" ", r.pos), t.view.dispatch(n), !0;
          }
          return !1;
        }
      }]);
      return xs;
    }();
    var ks = /*#__PURE__*/function () {
      function ks() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck(this, ks);
        this.type = "node", this.name = "node", this.parent = null, this.child = null, this.config = {
          name: this.name,
          defaultOptions: {}
        }, this.config = _objectSpread(_objectSpread({}, this.config), t), this.name = this.config.name, t.defaultOptions && console.warn("[tiptap warn]: BREAKING CHANGE: \"defaultOptions\" is deprecated. Please use \"addOptions\" instead. Found in extension: \"".concat(this.name, "\".")), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = gi(ci(this, "addOptions", {
          name: this.name
        }))), this.storage = gi(ci(this, "addStorage", {
          name: this.name,
          options: this.options
        })) || {};
      }
      _createClass(ks, [{
        key: "configure",
        value: function configure() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var e = this.extend();
          return e.options = Di(this.options, t), e.storage = gi(ci(e, "addStorage", {
            name: e.name,
            options: e.options
          })), e;
        }
      }, {
        key: "extend",
        value: function extend() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var e = new ks(t);
          return e.parent = this, this.child = e, e.name = t.name ? t.name : e.parent.name, t.defaultOptions && console.warn("[tiptap warn]: BREAKING CHANGE: \"defaultOptions\" is deprecated. Please use \"addOptions\" instead. Found in extension: \"".concat(e.name, "\".")), e.options = gi(ci(e, "addOptions", {
            name: e.name
          })), e.storage = gi(ci(e, "addStorage", {
            name: e.name,
            options: e.options
          })), e;
        }
      }], [{
        key: "create",
        value: function create() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          return new ks(t);
        }
      }]);
      return ks;
    }();
    function Ss(t) {
      return new Ci({
        find: t.find,
        handler: function handler(_ref104) {
          var e = _ref104.state,
            n = _ref104.range,
            r = _ref104.match,
            o = _ref104.pasteEvent;
          var i = gi(t.getAttributes, void 0, r, o);
          if (!1 === i || null === i) return null;
          var s = e.tr,
            a = r[r.length - 1],
            l = r[0];
          var c = n.to;
          if (a) {
            var _r136 = l.search(/\S/),
              _o99 = n.from + l.indexOf(a),
              _u14 = _o99 + a.length;
            if (es(n.from, n.to, e.doc).filter(function (e) {
              return e.mark.type.excluded.find(function (n) {
                return n === t.type && n !== e.mark.type;
              });
            }).filter(function (t) {
              return t.to > _o99;
            }).length) return null;
            _u14 < n.to && s.delete(_u14, n.to), _o99 > n.from && s.delete(n.from + _r136, _o99), c = n.from + _r136 + a.length, s.addMark(n.from + _r136, c, t.type.create(i || {})), s.removeStoredMark(t.type);
          }
        }
      });
    }
    var Ms = /(?:^|\s)((?:==)((?:[^~=]+))(?:==))$/,
      Os = /(?:^|\s)((?:==)((?:[^~=]+))(?:==))/g,
      Ts = xs.create({
        name: "highlight",
        addOptions: function addOptions() {
          return {
            multicolor: !1,
            HTMLAttributes: {}
          };
        },
        addAttributes: function addAttributes() {
          return this.options.multicolor ? {
            color: {
              default: null,
              parseHTML: function parseHTML(t) {
                return t.getAttribute("data-color") || t.style.backgroundColor;
              },
              renderHTML: function renderHTML(t) {
                return t.color ? {
                  "data-color": t.color,
                  style: "background-color: ".concat(t.color, "; color: inherit")
                } : {};
              }
            }
          } : {};
        },
        parseHTML: function parseHTML() {
          return [{
            tag: "mark"
          }];
        },
        renderHTML: function renderHTML(_ref105) {
          var t = _ref105.HTMLAttributes;
          return ["mark", pi(this.options.HTMLAttributes, t), 0];
        },
        addCommands: function addCommands() {
          var _this57 = this;
          return {
            setHighlight: function setHighlight(t) {
              return function (_ref106) {
                var e = _ref106.commands;
                return e.setMark(_this57.name, t);
              };
            },
            toggleHighlight: function toggleHighlight(t) {
              return function (_ref107) {
                var e = _ref107.commands;
                return e.toggleMark(_this57.name, t);
              };
            },
            unsetHighlight: function unsetHighlight() {
              return function (_ref108) {
                var t = _ref108.commands;
                return t.unsetMark(_this57.name);
              };
            }
          };
        },
        addKeyboardShortcuts: function addKeyboardShortcuts() {
          var _this58 = this;
          return {
            "Mod-Shift-h": function ModShiftH() {
              return _this58.editor.commands.toggleHighlight();
            }
          };
        },
        addInputRules: function addInputRules() {
          return [ys({
            find: Ms,
            type: this.type
          })];
        },
        addPasteRules: function addPasteRules() {
          return [Ss({
            find: Os,
            type: this.type
          })];
        }
      }),
      Cs = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4vianca6w0s2x0a2z0ure5ba0by2idu3namex3narepublic11d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2ntley5rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0cast4mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dabur3d1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3nlop4pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2o0dyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0ardian6cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6logistics9properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3ncaster6d0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2psy3ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rckmsd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2tura4vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9dnavy5lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0america6xi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0stone5umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0a1b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp2w2ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2olterskluwer11odside6rk0s2ld3w2s1tc1f3xbox3erox4finity6ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2",
      Es = "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2",
      As = function As(t, e) {
        for (var _n162 in e) t[_n162] = e[_n162];
        return t;
      },
      Ns = "numeric",
      Ds = "ascii",
      Rs = "alpha",
      Is = "asciinumeric",
      Ps = "alphanumeric",
      Ls = "domain",
      Fs = "emoji",
      Bs = "scheme",
      zs = "slashscheme",
      js = "whitespace";
    function $s(t, e) {
      return t in e || (e[t] = []), e[t];
    }
    function _s(t, e, n) {
      e[Ns] && (e[Is] = !0, e[Ps] = !0), e[Ds] && (e[Is] = !0, e[Rs] = !0), e[Is] && (e[Ps] = !0), e[Rs] && (e[Ps] = !0), e[Ps] && (e[Ls] = !0), e[Fs] && (e[Ls] = !0);
      for (var _r137 in e) {
        var _e208 = $s(_r137, n);
        _e208.indexOf(t) < 0 && _e208.push(t);
      }
    }
    function Hs(t) {
      void 0 === t && (t = null), this.j = {}, this.jr = [], this.jd = null, this.t = t;
    }
    Hs.groups = {}, Hs.prototype = {
      accepts: function accepts() {
        return !!this.t;
      },
      go: function go(t) {
        var e = this,
          n = e.j[t];
        if (n) return n;
        for (var _n163 = 0; _n163 < e.jr.length; _n163++) {
          var _r138 = e.jr[_n163][0],
            _o100 = e.jr[_n163][1];
          if (_o100 && _r138.test(t)) return _o100;
        }
        return e.jd;
      },
      has: function has(t, e) {
        return void 0 === e && (e = !1), e ? t in this.j : !!this.go(t);
      },
      ta: function ta(t, e, n, r) {
        for (var _o101 = 0; _o101 < t.length; _o101++) this.tt(t[_o101], e, n, r);
      },
      tr: function tr(t, e, n, r) {
        var o;
        return r = r || Hs.groups, e && e.j ? o = e : (o = new Hs(e), n && r && _s(e, n, r)), this.jr.push([t, o]), o;
      },
      ts: function ts(t, e, n, r) {
        var o = this;
        var i = t.length;
        if (!i) return o;
        for (var _e209 = 0; _e209 < i - 1; _e209++) o = o.tt(t[_e209]);
        return o.tt(t[i - 1], e, n, r);
      },
      tt: function tt(t, e, n, r) {
        r = r || Hs.groups;
        var o = this;
        if (e && e.j) return o.j[t] = e, e;
        var i = e;
        var s,
          a = o.go(t);
        if (a ? (s = new Hs(), As(s.j, a.j), s.jr.push.apply(s.jr, a.jr), s.jd = a.jd, s.t = a.t) : s = new Hs(), i) {
          if (r) if (s.t && "string" == typeof s.t) {
            var _t190 = As(function (t, e) {
              var n = {};
              for (var _r139 in e) e[_r139].indexOf(t) >= 0 && (n[_r139] = !0);
              return n;
            }(s.t, r), n);
            _s(i, _t190, r);
          } else n && _s(i, n, r);
          s.t = i;
        }
        return o.j[t] = s, s;
      }
    };
    var Vs = function Vs(t, e, n, r, o) {
        return t.ta(e, n, r, o);
      },
      Ws = function Ws(t, e, n, r, o) {
        return t.tr(e, n, r, o);
      },
      Ks = function Ks(t, e, n, r, o) {
        return t.ts(e, n, r, o);
      },
      qs = function qs(t, e, n, r, o) {
        return t.tt(e, n, r, o);
      },
      Js = "WORD",
      Us = "UWORD",
      Gs = "LOCALHOST",
      Ys = "TLD",
      Xs = "UTLD",
      Qs = "SCHEME",
      Zs = "SLASH_SCHEME",
      ta = "NUM",
      ea = "WS",
      na = "NL",
      ra = "OPENBRACE",
      oa = "CLOSEBRACE",
      ia = "OPENBRACKET",
      sa = "CLOSEBRACKET",
      aa = "OPENPAREN",
      la = "CLOSEPAREN",
      ca = "OPENANGLEBRACKET",
      ua = "CLOSEANGLEBRACKET",
      ha = "FULLWIDTHLEFTPAREN",
      da = "FULLWIDTHRIGHTPAREN",
      pa = "LEFTCORNERBRACKET",
      fa = "RIGHTCORNERBRACKET",
      ma = "LEFTWHITECORNERBRACKET",
      ga = "RIGHTWHITECORNERBRACKET",
      ya = "FULLWIDTHLESSTHAN",
      va = "FULLWIDTHGREATERTHAN",
      ba = "AMPERSAND",
      wa = "APOSTROPHE",
      xa = "ASTERISK",
      ka = "AT",
      Sa = "BACKSLASH",
      Ma = "BACKTICK",
      Oa = "CARET",
      Ta = "COLON",
      Ca = "COMMA",
      Ea = "DOLLAR",
      Aa = "DOT",
      Na = "EQUALS",
      Da = "EXCLAMATION",
      Ra = "HYPHEN",
      Ia = "PERCENT",
      Pa = "PIPE",
      La = "PLUS",
      Fa = "POUND",
      Ba = "QUERY",
      za = "QUOTE",
      ja = "SEMI",
      $a = "SLASH",
      _a = "TILDE",
      Ha = "UNDERSCORE",
      Va = "EMOJI",
      Wa = "SYM";
    var Ka = Object.freeze({
      __proto__: null,
      WORD: Js,
      UWORD: Us,
      LOCALHOST: Gs,
      TLD: Ys,
      UTLD: Xs,
      SCHEME: Qs,
      SLASH_SCHEME: Zs,
      NUM: ta,
      WS: ea,
      NL: na,
      OPENBRACE: ra,
      CLOSEBRACE: oa,
      OPENBRACKET: ia,
      CLOSEBRACKET: sa,
      OPENPAREN: aa,
      CLOSEPAREN: la,
      OPENANGLEBRACKET: ca,
      CLOSEANGLEBRACKET: ua,
      FULLWIDTHLEFTPAREN: ha,
      FULLWIDTHRIGHTPAREN: da,
      LEFTCORNERBRACKET: pa,
      RIGHTCORNERBRACKET: fa,
      LEFTWHITECORNERBRACKET: ma,
      RIGHTWHITECORNERBRACKET: ga,
      FULLWIDTHLESSTHAN: ya,
      FULLWIDTHGREATERTHAN: va,
      AMPERSAND: ba,
      APOSTROPHE: wa,
      ASTERISK: xa,
      AT: ka,
      BACKSLASH: Sa,
      BACKTICK: Ma,
      CARET: Oa,
      COLON: Ta,
      COMMA: Ca,
      DOLLAR: Ea,
      DOT: Aa,
      EQUALS: Na,
      EXCLAMATION: Da,
      HYPHEN: Ra,
      PERCENT: Ia,
      PIPE: Pa,
      PLUS: La,
      POUND: Fa,
      QUERY: Ba,
      QUOTE: za,
      SEMI: ja,
      SLASH: $a,
      TILDE: _a,
      UNDERSCORE: Ha,
      EMOJI: Va,
      SYM: Wa
    });
    var qa = /[a-z]/,
      Ja = /(?:[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])/,
      Ua = /(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5-\uDED7\uDEDC-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDDFF\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8])/,
      Ga = /\d/,
      Ya = /\s/,
      Xa = "\n",
      Qa = "️",
      Za = "‍";
    var tl = null,
      el = null;
    function nl(t, e, n, r, o) {
      var i;
      var s = e.length;
      for (var _n164 = 0; _n164 < s - 1; _n164++) {
        var _s60 = e[_n164];
        t.j[_s60] ? i = t.j[_s60] : (i = new Hs(r), i.jr = o.slice(), t.j[_s60] = i), t = i;
      }
      return i = new Hs(n), i.jr = o.slice(), t.j[e[s - 1]] = i, i;
    }
    function rl(t) {
      var e = [],
        n = [];
      var r = 0;
      for (; r < t.length;) {
        var _o102 = 0;
        for (; "0123456789".indexOf(t[r + _o102]) >= 0;) _o102++;
        if (_o102 > 0) {
          e.push(n.join(""));
          for (var _e210 = parseInt(t.substring(r, r + _o102), 10); _e210 > 0; _e210--) n.pop();
          r += _o102;
        } else n.push(t[r]), r++;
      }
      return e;
    }
    var ol = {
      defaultProtocol: "http",
      events: null,
      format: sl,
      formatHref: sl,
      nl2br: !1,
      tagName: "a",
      target: null,
      rel: null,
      validate: !0,
      truncate: 1 / 0,
      className: null,
      attributes: null,
      ignoreTags: [],
      render: null
    };
    function il(t, e) {
      void 0 === e && (e = null);
      var n = As({}, ol);
      t && (n = As(n, t instanceof il ? t.o : t));
      var r = n.ignoreTags,
        o = [];
      for (var _t191 = 0; _t191 < r.length; _t191++) o.push(r[_t191].toUpperCase());
      this.o = n, e && (this.defaultRender = e), this.ignoreTags = o;
    }
    function sl(t) {
      return t;
    }
    function al(t, e) {
      this.t = "token", this.v = t, this.tk = e;
    }
    function ll(t, e) {
      var n = /*#__PURE__*/function (_al) {
        _inherits(n, _al);
        function n(e, _n165) {
          var _this59;
          _classCallCheck(this, n);
          _this59 = _callSuper(this, n, [e, _n165]), _this59.t = t;
          return _this59;
        }
        return _createClass(n);
      }(al);
      for (var _t192 in e) n.prototype[_t192] = e[_t192];
      return n.t = t, n;
    }
    il.prototype = {
      o: ol,
      ignoreTags: [],
      defaultRender: function defaultRender(t) {
        return t;
      },
      check: function check(t) {
        return this.get("validate", t.toString(), t);
      },
      get: function get(t, e, n) {
        var r = null != e;
        var o = this.o[t];
        return o ? ("object" == _typeof(o) ? (o = n.t in o ? o[n.t] : ol[t], "function" == typeof o && r && (o = o(e, n))) : "function" == typeof o && r && (o = o(e, n.t, n)), o) : o;
      },
      getObj: function getObj(t, e, n) {
        var r = this.o[t];
        return "function" == typeof r && null != e && (r = r(e, n.t, n)), r;
      },
      render: function render(t) {
        var e = t.render(this);
        return (this.get("render", null, t) || this.defaultRender)(e, t.t, t);
      }
    }, al.prototype = {
      isLink: !1,
      toString: function toString() {
        return this.v;
      },
      toHref: function toHref(t) {
        return this.toString();
      },
      toFormattedString: function toFormattedString(t) {
        var e = this.toString(),
          n = t.get("truncate", e, this),
          r = t.get("format", e, this);
        return n && r.length > n ? r.substring(0, n) + "…" : r;
      },
      toFormattedHref: function toFormattedHref(t) {
        return t.get("formatHref", this.toHref(t.get("defaultProtocol")), this);
      },
      startIndex: function startIndex() {
        return this.tk[0].s;
      },
      endIndex: function endIndex() {
        return this.tk[this.tk.length - 1].e;
      },
      toObject: function toObject(t) {
        return void 0 === t && (t = ol.defaultProtocol), {
          type: this.t,
          value: this.toString(),
          isLink: this.isLink,
          href: this.toHref(t),
          start: this.startIndex(),
          end: this.endIndex()
        };
      },
      toFormattedObject: function toFormattedObject(t) {
        return {
          type: this.t,
          value: this.toFormattedString(t),
          isLink: this.isLink,
          href: this.toFormattedHref(t),
          start: this.startIndex(),
          end: this.endIndex()
        };
      },
      validate: function validate(t) {
        return t.get("validate", this.toString(), this);
      },
      render: function render(t) {
        var e = this,
          n = this.toHref(t.get("defaultProtocol")),
          r = t.get("formatHref", n, this),
          o = t.get("tagName", n, e),
          i = this.toFormattedString(t),
          s = {},
          a = t.get("className", n, e),
          l = t.get("target", n, e),
          c = t.get("rel", n, e),
          u = t.getObj("attributes", n, e),
          h = t.getObj("events", n, e);
        return s.href = r, a && (s.class = a), l && (s.target = l), c && (s.rel = c), u && As(s, u), {
          tagName: o,
          attributes: s,
          content: i,
          eventListeners: h
        };
      }
    };
    var cl = ll("email", {
        isLink: !0,
        toHref: function toHref() {
          return "mailto:" + this.toString();
        }
      }),
      ul = ll("text"),
      hl = ll("nl"),
      dl = ll("url", {
        isLink: !0,
        toHref: function toHref(t) {
          return void 0 === t && (t = ol.defaultProtocol), this.hasProtocol() ? this.v : "".concat(t, "://").concat(this.v);
        },
        hasProtocol: function hasProtocol() {
          var t = this.tk;
          return t.length >= 2 && t[0].t !== Gs && t[1].t === Ta;
        }
      }),
      pl = function pl(t) {
        return new Hs(t);
      };
    function fl(t, e, n) {
      var r = n[0].s,
        o = n[n.length - 1].e;
      return new t(e.slice(r, o), n);
    }
    var ml = "undefined" != typeof console && console && console.warn || function () {},
      gl = {
        scanner: null,
        parser: null,
        tokenQueue: [],
        pluginQueue: [],
        customSchemes: [],
        initialized: !1
      };
    function yl(t, e) {
      if (void 0 === e && (e = !1), gl.initialized && ml("linkifyjs: already initialized - will not register custom scheme \"".concat(t, "\" until manual call of linkify.init(). Register all schemes and plugins before invoking linkify the first time.")), !/^[0-9a-z]+(-[0-9a-z]+)*$/.test(t)) throw new Error('linkifyjs: incorrect scheme format.\n1. Must only contain digits, lowercase ASCII letters or "-"\n2. Cannot start or end with "-"\n3. "-" cannot repeat');
      gl.customSchemes.push([t, e]);
    }
    function vl(t) {
      return gl.initialized || function () {
        gl.scanner = function (t) {
          void 0 === t && (t = []);
          var e = {};
          Hs.groups = e;
          var n = new Hs();
          null == tl && (tl = rl(Cs)), null == el && (el = rl(Es)), qs(n, "'", wa), qs(n, "{", ra), qs(n, "}", oa), qs(n, "[", ia), qs(n, "]", sa), qs(n, "(", aa), qs(n, ")", la), qs(n, "<", ca), qs(n, ">", ua), qs(n, "（", ha), qs(n, "）", da), qs(n, "「", pa), qs(n, "」", fa), qs(n, "『", ma), qs(n, "』", ga), qs(n, "＜", ya), qs(n, "＞", va), qs(n, "&", ba), qs(n, "*", xa), qs(n, "@", ka), qs(n, "`", Ma), qs(n, "^", Oa), qs(n, ":", Ta), qs(n, ",", Ca), qs(n, "$", Ea), qs(n, ".", Aa), qs(n, "=", Na), qs(n, "!", Da), qs(n, "-", Ra), qs(n, "%", Ia), qs(n, "|", Pa), qs(n, "+", La), qs(n, "#", Fa), qs(n, "?", Ba), qs(n, '"', za), qs(n, "/", $a), qs(n, ";", ja), qs(n, "~", _a), qs(n, "_", Ha), qs(n, "\\", Sa);
          var r = Ws(n, Ga, ta, _defineProperty({}, Ns, !0));
          Ws(r, Ga, r);
          var o = Ws(n, qa, Js, _defineProperty({}, Ds, !0));
          Ws(o, qa, o);
          var i = Ws(n, Ja, Us, _defineProperty({}, Rs, !0));
          Ws(i, qa), Ws(i, Ja, i);
          var s = Ws(n, Ya, ea, _defineProperty({}, js, !0));
          qs(n, Xa, na, _defineProperty({}, js, !0)), qs(s, Xa), Ws(s, Ya, s);
          var a = Ws(n, Ua, Va, _defineProperty({}, Fs, !0));
          Ws(a, Ua, a), qs(a, Qa, a);
          var l = qs(a, Za);
          Ws(l, Ua, a);
          var c = [[qa, o]],
            u = [[qa, null], [Ja, i]];
          for (var _t193 = 0; _t193 < tl.length; _t193++) nl(n, tl[_t193], Ys, Js, c);
          for (var _t194 = 0; _t194 < el.length; _t194++) nl(n, el[_t194], Xs, Us, u);
          _s(Ys, {
            tld: !0,
            ascii: !0
          }, e), _s(Xs, {
            utld: !0,
            alpha: !0
          }, e), nl(n, "file", Qs, Js, c), nl(n, "mailto", Qs, Js, c), nl(n, "http", Zs, Js, c), nl(n, "https", Zs, Js, c), nl(n, "ftp", Zs, Js, c), nl(n, "ftps", Zs, Js, c), _s(Qs, {
            scheme: !0,
            ascii: !0
          }, e), _s(Zs, {
            slashscheme: !0,
            ascii: !0
          }, e), t = t.sort(function (t, e) {
            return t[0] > e[0] ? 1 : -1;
          });
          for (var _e211 = 0; _e211 < t.length; _e211++) {
            var _r140 = t[_e211][0],
              _o103 = t[_e211][1] ? _defineProperty({}, Bs, !0) : _defineProperty({}, zs, !0);
            _r140.indexOf("-") >= 0 ? _o103[Ls] = !0 : qa.test(_r140) ? Ga.test(_r140) ? _o103[Is] = !0 : _o103[Ds] = !0 : _o103[Ns] = !0, Ks(n, _r140, _r140, _o103);
          }
          return Ks(n, "localhost", Gs, {
            ascii: !0
          }), n.jd = new Hs(Wa), {
            start: n,
            tokens: As({
              groups: e
            }, Ka)
          };
        }(gl.customSchemes);
        for (var _t195 = 0; _t195 < gl.tokenQueue.length; _t195++) gl.tokenQueue[_t195][1]({
          scanner: gl.scanner
        });
        gl.parser = function (t) {
          var e = t.groups;
          var n = e.domain.concat([ba, xa, ka, Sa, Ma, Oa, Ea, Na, Ra, ta, Ia, Pa, La, Fa, $a, Wa, _a, Ha]),
            r = [wa, Ta, Ca, Aa, Da, Ba, za, ja, ca, ua, ra, oa, sa, ia, aa, la, ha, da, pa, fa, ma, ga, ya, va],
            o = [ba, wa, xa, Sa, Ma, Oa, Ea, Na, Ra, ra, oa, Ia, Pa, La, Fa, Ba, $a, Wa, _a, Ha],
            i = pl(),
            s = qs(i, _a);
          Vs(s, o, s), Vs(s, e.domain, s);
          var a = pl(),
            l = pl(),
            c = pl();
          Vs(i, e.domain, a), Vs(i, e.scheme, l), Vs(i, e.slashscheme, c), Vs(a, o, s), Vs(a, e.domain, a);
          var u = qs(a, ka);
          qs(s, ka, u), qs(l, ka, u), qs(c, ka, u);
          var h = qs(s, Aa);
          Vs(h, o, s), Vs(h, e.domain, s);
          var d = pl();
          Vs(u, e.domain, d), Vs(d, e.domain, d);
          var p = qs(d, Aa);
          Vs(p, e.domain, d);
          var f = pl(cl);
          Vs(p, e.tld, f), Vs(p, e.utld, f), qs(u, Gs, f);
          var m = qs(d, Ra);
          Vs(m, e.domain, d), Vs(f, e.domain, d), qs(f, Aa, p), qs(f, Ra, m);
          var g = qs(f, Ta);
          Vs(g, e.numeric, cl);
          var y = qs(a, Ra),
            v = qs(a, Aa);
          Vs(y, e.domain, a), Vs(v, o, s), Vs(v, e.domain, a);
          var b = pl(dl);
          Vs(v, e.tld, b), Vs(v, e.utld, b), Vs(b, e.domain, a), Vs(b, o, s), qs(b, Aa, v), qs(b, Ra, y), qs(b, ka, u);
          var w = qs(b, Ta),
            x = pl(dl);
          Vs(w, e.numeric, x);
          var k = pl(dl),
            S = pl();
          Vs(k, n, k), Vs(k, r, S), Vs(S, n, k), Vs(S, r, S), qs(b, $a, k), qs(x, $a, k);
          var M = qs(l, Ta),
            O = qs(c, Ta),
            T = qs(O, $a),
            C = qs(T, $a);
          Vs(l, e.domain, a), qs(l, Aa, v), qs(l, Ra, y), Vs(c, e.domain, a), qs(c, Aa, v), qs(c, Ra, y), Vs(M, e.domain, k), qs(M, $a, k), Vs(C, e.domain, k), Vs(C, n, k), qs(C, $a, k);
          var E = [[ra, oa], [ia, sa], [aa, la], [ca, ua], [ha, da], [pa, fa], [ma, ga], [ya, va]];
          for (var _t196 = 0; _t196 < E.length; _t196++) {
            var _E$_t = _slicedToArray(E[_t196], 2),
              _e212 = _E$_t[0],
              _o104 = _E$_t[1],
              _i77 = qs(k, _e212);
            qs(S, _e212, _i77), qs(_i77, _o104, k);
            var _s61 = pl(dl);
            Vs(_i77, n, _s61);
            var _a38 = pl();
            Vs(_i77, r), Vs(_s61, n, _s61), Vs(_s61, r, _a38), Vs(_a38, n, _s61), Vs(_a38, r, _a38), qs(_s61, _o104, k), qs(_a38, _o104, k);
          }
          return qs(i, Gs, b), qs(i, na, hl), {
            start: i,
            tokens: Ka
          };
        }(gl.scanner.tokens);
        for (var _t197 = 0; _t197 < gl.pluginQueue.length; _t197++) gl.pluginQueue[_t197][1]({
          scanner: gl.scanner,
          parser: gl.parser
        });
        gl.initialized = !0;
      }(), function (t, e, n) {
        var r = n.length,
          o = 0,
          i = [],
          s = [];
        for (; o < r;) {
          var _a39 = t,
            _l30 = null,
            _c30 = null,
            _u15 = 0,
            _h7 = null,
            _d8 = -1;
          for (; o < r && !(_l30 = _a39.go(n[o].t));) s.push(n[o++]);
          for (; o < r && (_c30 = _l30 || _a39.go(n[o].t));) _l30 = null, _a39 = _c30, _a39.accepts() ? (_d8 = 0, _h7 = _a39) : _d8 >= 0 && _d8++, o++, _u15++;
          if (_d8 < 0) o -= _u15, o < r && (s.push(n[o]), o++);else {
            s.length > 0 && (i.push(fl(ul, e, s)), s = []), o -= _d8, _u15 -= _d8;
            var _t198 = _h7.t,
              _r141 = n.slice(o - _u15, o);
            i.push(fl(_t198, e, _r141));
          }
        }
        return s.length > 0 && i.push(fl(ul, e, s)), i;
      }(gl.parser.start, t, function (t, e) {
        var n = function (t) {
            var e = [],
              n = t.length;
            var r = 0;
            for (; r < n;) {
              var _o105 = void 0,
                _i78 = t.charCodeAt(r),
                _s62 = _i78 < 55296 || _i78 > 56319 || r + 1 === n || (_o105 = t.charCodeAt(r + 1)) < 56320 || _o105 > 57343 ? t[r] : t.slice(r, r + 2);
              e.push(_s62), r += _s62.length;
            }
            return e;
          }(e.replace(/[A-Z]/g, function (t) {
            return t.toLowerCase();
          })),
          r = n.length,
          o = [];
        var i = 0,
          s = 0;
        for (; s < r;) {
          var _a40 = t,
            _l31 = null,
            _c31 = 0,
            _u16 = null,
            _h8 = -1,
            _d9 = -1;
          for (; s < r && (_l31 = _a40.go(n[s]));) _a40 = _l31, _a40.accepts() ? (_h8 = 0, _d9 = 0, _u16 = _a40) : _h8 >= 0 && (_h8 += n[s].length, _d9++), _c31 += n[s].length, i += n[s].length, s++;
          i -= _h8, s -= _d9, _c31 -= _h8, o.push({
            t: _u16.t,
            v: e.slice(i - _c31, i),
            s: i - _c31,
            e: i
          });
        }
        return o;
      }(gl.scanner.start, t));
    }
    function bl(t, e, n) {
      if (void 0 === e && (e = null), void 0 === n && (n = null), e && "object" == _typeof(e)) {
        if (n) throw Error("linkifyjs: Invalid link type ".concat(e, "; must be a string"));
        n = e, e = null;
      }
      var r = new il(n),
        o = vl(t),
        i = [];
      for (var _t199 = 0; _t199 < o.length; _t199++) {
        var _n166 = o[_t199];
        !_n166.isLink || e && _n166.t !== e || !r.check(_n166) || i.push(_n166.toFormattedObject(r));
      }
      return i;
    }
    function wl(t) {
      return new pe({
        key: new ge("autolink"),
        appendTransaction: function appendTransaction(e, n, r) {
          var o = e.some(function (t) {
              return t.docChanged;
            }) && !n.doc.eq(r.doc),
            i = e.some(function (t) {
              return t.getMeta("preventAutolink");
            });
          if (!o || i) return;
          var s = r.tr,
            a = function (t, e) {
              var n = new qt(t);
              return e.forEach(function (t) {
                t.steps.forEach(function (t) {
                  n.step(t);
                });
              }), n;
            }(n.doc, _toConsumableArray(e)),
            l = function (t) {
              var e = t.mapping,
                n = t.steps,
                r = [];
              return e.maps.forEach(function (t, o) {
                var i = [];
                if (t.ranges.length) t.forEach(function (t, e) {
                  i.push({
                    from: t,
                    to: e
                  });
                });else {
                  var _n$o = n[o],
                    _t200 = _n$o.from,
                    _e213 = _n$o.to;
                  if (void 0 === _t200 || void 0 === _e213) return;
                  i.push({
                    from: _t200,
                    to: _e213
                  });
                }
                i.forEach(function (_ref111) {
                  var t = _ref111.from,
                    n = _ref111.to;
                  var i = e.slice(o).map(t, -1),
                    s = e.slice(o).map(n),
                    a = e.invert().map(i, -1),
                    l = e.invert().map(s);
                  r.push({
                    oldRange: {
                      from: a,
                      to: l
                    },
                    newRange: {
                      from: i,
                      to: s
                    }
                  });
                });
              }), function (t) {
                var e = function (t) {
                  var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : JSON.stringify;
                  var n = {};
                  return t.filter(function (t) {
                    var r = e(t);
                    return !Object.prototype.hasOwnProperty.call(n, r) && (n[r] = !0);
                  });
                }(t);
                return 1 === e.length ? e : e.filter(function (t, n) {
                  var r = e.filter(function (t, e) {
                    return e !== n;
                  });
                  return !r.some(function (e) {
                    return t.oldRange.from >= e.oldRange.from && t.oldRange.to <= e.oldRange.to && t.newRange.from >= e.newRange.from && t.newRange.to <= e.newRange.to;
                  });
                });
              }(r);
            }(a);
          return l.forEach(function (_ref112) {
            var e = _ref112.newRange;
            var n = function (t, e, n) {
              var r = [];
              return t.nodesBetween(e.from, e.to, function (t, e) {
                (function (t) {
                  return t.isTextblock;
                })(t) && r.push({
                  node: t,
                  pos: e
                });
              }), r;
            }(r.doc, e);
            var o, i;
            if (n.length > 1 ? (o = n[0], i = r.doc.textBetween(o.pos, o.pos + o.node.nodeSize, void 0, " ")) : n.length && r.doc.textBetween(e.from, e.to, " ", " ").endsWith(" ") && (o = n[0], i = r.doc.textBetween(o.pos, e.to, void 0, " ")), o && i) {
              var _e214 = i.split(" ").filter(function (t) {
                return "" !== t;
              });
              if (_e214.length <= 0) return !1;
              var _n167 = _e214[_e214.length - 1],
                _a41 = o.pos + i.lastIndexOf(_n167);
              if (!_n167) return !1;
              bl(_n167).filter(function (t) {
                return t.isLink;
              }).map(function (t) {
                return _objectSpread(_objectSpread({}, t), {}, {
                  from: _a41 + t.start + 1,
                  to: _a41 + t.end + 1
                });
              }).filter(function (t) {
                return !r.schema.marks.code || !r.doc.rangeHasMark(t.from, t.to, r.schema.marks.code);
              }).filter(function (e) {
                return !t.validate || t.validate(e.value);
              }).forEach(function (e) {
                es(e.from, e.to, r.doc).some(function (e) {
                  return e.mark.type === t.type;
                }) || s.addMark(e.from, e.to, t.type.create({
                  href: e.href
                }));
              });
            }
          }), s.steps.length ? s : void 0;
        }
      });
    }
    var xl = xs.create({
        name: "link",
        priority: 1e3,
        keepOnSplit: !1,
        onCreate: function onCreate() {
          this.options.protocols.forEach(function (t) {
            "string" != typeof t ? yl(t.scheme, t.optionalSlashes) : yl(t);
          });
        },
        onDestroy: function onDestroy() {
          Hs.groups = {}, gl.scanner = null, gl.parser = null, gl.tokenQueue = [], gl.pluginQueue = [], gl.customSchemes = [], gl.initialized = !1;
        },
        inclusive: function inclusive() {
          return this.options.autolink;
        },
        addOptions: function addOptions() {
          return {
            openOnClick: !0,
            linkOnPaste: !0,
            autolink: !0,
            protocols: [],
            HTMLAttributes: {
              target: "_blank",
              rel: "noopener noreferrer nofollow",
              class: null
            },
            validate: void 0
          };
        },
        addAttributes: function addAttributes() {
          return {
            href: {
              default: null
            },
            target: {
              default: this.options.HTMLAttributes.target
            },
            rel: {
              default: this.options.HTMLAttributes.rel
            },
            class: {
              default: this.options.HTMLAttributes.class
            }
          };
        },
        parseHTML: function parseHTML() {
          return [{
            tag: 'a[href]:not([href *= "javascript:" i])'
          }];
        },
        renderHTML: function renderHTML(_ref113) {
          var t = _ref113.HTMLAttributes;
          var e;
          return (null === (e = t.href) || void 0 === e ? void 0 : e.startsWith("javascript:")) ? ["a", pi(this.options.HTMLAttributes, _objectSpread(_objectSpread({}, t), {}, {
            href: ""
          })), 0] : ["a", pi(this.options.HTMLAttributes, t), 0];
        },
        addCommands: function addCommands() {
          var _this60 = this;
          return {
            setLink: function setLink(t) {
              return function (_ref114) {
                var e = _ref114.chain;
                return e().setMark(_this60.name, t).setMeta("preventAutolink", !0).run();
              };
            },
            toggleLink: function toggleLink(t) {
              return function (_ref115) {
                var e = _ref115.chain;
                return e().toggleMark(_this60.name, t, {
                  extendEmptyMarkRange: !0
                }).setMeta("preventAutolink", !0).run();
              };
            },
            unsetLink: function unsetLink() {
              return function (_ref116) {
                var t = _ref116.chain;
                return t().unsetMark(_this60.name, {
                  extendEmptyMarkRange: !0
                }).setMeta("preventAutolink", !0).run();
              };
            }
          };
        },
        addPasteRules: function addPasteRules() {
          return [Ss({
            find: function find(t, e) {
              var n;
              var r = null === (n = null == e ? void 0 : e.clipboardData) || void 0 === n ? void 0 : n.getData("text/html"),
                o = [];
              if (r) {
                var _t201 = new DOMParser().parseFromString(r, "text/html"),
                  _e215 = _t201.querySelectorAll("a");
                _e215.length && _toConsumableArray(_e215).forEach(function (e) {
                  return o.push({
                    text: e.innerText,
                    data: {
                      href: e.getAttribute("href")
                    },
                    index: _t201.body.innerText.indexOf(e.innerText) + e.innerText.length
                  });
                });
              }
              if (t) {
                var _e216 = bl(t).filter(function (t) {
                  return t.isLink;
                });
                _e216.length && _e216.forEach(function (t) {
                  return o.push({
                    text: t.value,
                    data: {
                      href: t.href
                    },
                    index: t.start
                  });
                });
              }
              return o;
            },
            type: this.type,
            getAttributes: function getAttributes(t) {
              var e;
              return {
                href: null === (e = t.data) || void 0 === e ? void 0 : e.href
              };
            }
          })];
        },
        addProseMirrorPlugins: function addProseMirrorPlugins() {
          var t = [];
          return this.options.autolink && t.push(wl({
            type: this.type,
            validate: this.options.validate
          })), this.options.openOnClick && t.push((e = {
            type: this.type
          }, new pe({
            key: new ge("handleClickLink"),
            props: {
              handleClick: function handleClick(t, n, r) {
                var o, i;
                if (0 !== r.button) return !1;
                if ("A" !== r.target.nodeName) return !1;
                var s = ts(t.state, e.type.name),
                  a = r.target,
                  l = null !== (o = null == a ? void 0 : a.href) && void 0 !== o ? o : s.href,
                  c = null !== (i = null == a ? void 0 : a.target) && void 0 !== i ? i : s.target;
                return !(!a || !l || (t.editable && global.window.open(l, c), 0));
              }
            }
          }))), this.options.linkOnPaste && t.push(function (t) {
            return new pe({
              key: new ge("handlePasteLink"),
              props: {
                handlePaste: function handlePaste(e, n, r) {
                  var o = e.state,
                    i = o.selection,
                    s = i.empty;
                  if (s) return !1;
                  var a = "";
                  r.content.forEach(function (t) {
                    a += t.textContent;
                  });
                  var l = bl(a).find(function (t) {
                    return t.isLink && t.value === a;
                  });
                  return !(!a || !l || (t.editor.commands.setMark(t.type, {
                    href: l.href
                  }), 0));
                }
              }
            });
          }({
            editor: this.editor,
            type: this.type
          })), t;
          var e;
        }
      }),
      kl = /(?:^|\s)(!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\))$/,
      Sl = ks.create({
        name: "image",
        addOptions: function addOptions() {
          return {
            inline: !1,
            allowBase64: !1,
            HTMLAttributes: {}
          };
        },
        inline: function inline() {
          return this.options.inline;
        },
        group: function group() {
          return this.options.inline ? "inline" : "block";
        },
        draggable: !0,
        addAttributes: function addAttributes() {
          return {
            src: {
              default: null
            },
            alt: {
              default: null
            },
            title: {
              default: null
            }
          };
        },
        parseHTML: function parseHTML() {
          return [{
            tag: this.options.allowBase64 ? "img[src]" : 'img[src]:not([src^="data:"])'
          }];
        },
        renderHTML: function renderHTML(_ref117) {
          var t = _ref117.HTMLAttributes;
          return ["img", pi(this.options.HTMLAttributes, t)];
        },
        addCommands: function addCommands() {
          var _this61 = this;
          return {
            setImage: function setImage(t) {
              return function (_ref118) {
                var e = _ref118.commands;
                return e.insertContent({
                  type: _this61.name,
                  attrs: t
                });
              };
            }
          };
        },
        addInputRules: function addInputRules() {
          return [vs({
            find: kl,
            type: this.type,
            getAttributes: function getAttributes(t) {
              var _t202 = _slicedToArray(t, 5),
                e = _t202[2],
                n = _t202[3],
                r = _t202[4];
              return {
                src: n,
                alt: e,
                title: r
              };
            }
          })];
        }
      }),
      Ml = xs.create({
        name: "subscript",
        addOptions: function addOptions() {
          return {
            HTMLAttributes: {}
          };
        },
        parseHTML: function parseHTML() {
          return [{
            tag: "sub"
          }, {
            style: "vertical-align",
            getAttrs: function getAttrs(t) {
              return "sub" === t && null;
            }
          }];
        },
        renderHTML: function renderHTML(_ref119) {
          var t = _ref119.HTMLAttributes;
          return ["sub", pi(this.options.HTMLAttributes, t), 0];
        },
        addCommands: function addCommands() {
          var _this62 = this;
          return {
            setSubscript: function setSubscript() {
              return function (_ref120) {
                var t = _ref120.commands;
                return t.setMark(_this62.name);
              };
            },
            toggleSubscript: function toggleSubscript() {
              return function (_ref121) {
                var t = _ref121.commands;
                return t.toggleMark(_this62.name);
              };
            },
            unsetSubscript: function unsetSubscript() {
              return function (_ref122) {
                var t = _ref122.commands;
                return t.unsetMark(_this62.name);
              };
            }
          };
        },
        addKeyboardShortcuts: function addKeyboardShortcuts() {
          var _this63 = this;
          return {
            "Mod-,": function Mod() {
              return _this63.editor.commands.toggleSubscript();
            }
          };
        }
      }),
      Ol = xs.create({
        name: "superscript",
        addOptions: function addOptions() {
          return {
            HTMLAttributes: {}
          };
        },
        parseHTML: function parseHTML() {
          return [{
            tag: "sup"
          }, {
            style: "vertical-align",
            getAttrs: function getAttrs(t) {
              return "super" === t && null;
            }
          }];
        },
        renderHTML: function renderHTML(_ref123) {
          var t = _ref123.HTMLAttributes;
          return ["sup", pi(this.options.HTMLAttributes, t), 0];
        },
        addCommands: function addCommands() {
          var _this64 = this;
          return {
            setSuperscript: function setSuperscript() {
              return function (_ref124) {
                var t = _ref124.commands;
                return t.setMark(_this64.name);
              };
            },
            toggleSuperscript: function toggleSuperscript() {
              return function (_ref125) {
                var t = _ref125.commands;
                return t.toggleMark(_this64.name);
              };
            },
            unsetSuperscript: function unsetSuperscript() {
              return function (_ref126) {
                var t = _ref126.commands;
                return t.unsetMark(_this64.name);
              };
            }
          };
        },
        addKeyboardShortcuts: function addKeyboardShortcuts() {
          var _this65 = this;
          return {
            "Mod-.": function Mod() {
              return _this65.editor.commands.toggleSuperscript();
            }
          };
        }
      }),
      Tl = xs.create({
        name: "textStyle",
        addOptions: function addOptions() {
          return {
            HTMLAttributes: {}
          };
        },
        parseHTML: function parseHTML() {
          return [{
            tag: "span",
            getAttrs: function getAttrs(t) {
              return !!t.hasAttribute("style") && {};
            }
          }];
        },
        renderHTML: function renderHTML(_ref127) {
          var t = _ref127.HTMLAttributes;
          return ["span", pi(this.options.HTMLAttributes, t), 0];
        },
        addCommands: function addCommands() {
          var _this66 = this;
          return {
            removeEmptyTextStyle: function removeEmptyTextStyle() {
              return function (_ref128) {
                var t = _ref128.state,
                  e = _ref128.commands;
                var n = Qi(t, _this66.type);
                return !!Object.entries(n).some(function (_ref129) {
                  var _ref130 = _slicedToArray(_ref129, 2),
                    t = _ref130[1];
                  return !!t;
                }) || e.unsetMark(_this66.name);
              };
            }
          };
        }
      }),
      Cl = xs.create({
        name: "underline",
        addOptions: function addOptions() {
          return {
            HTMLAttributes: {}
          };
        },
        parseHTML: function parseHTML() {
          return [{
            tag: "u"
          }, {
            style: "text-decoration",
            consuming: !1,
            getAttrs: function getAttrs(t) {
              return !!t.includes("underline") && {};
            }
          }];
        },
        renderHTML: function renderHTML(_ref131) {
          var t = _ref131.HTMLAttributes;
          return ["u", pi(this.options.HTMLAttributes, t), 0];
        },
        addCommands: function addCommands() {
          var _this67 = this;
          return {
            setUnderline: function setUnderline() {
              return function (_ref132) {
                var t = _ref132.commands;
                return t.setMark(_this67.name);
              };
            },
            toggleUnderline: function toggleUnderline() {
              return function (_ref133) {
                var t = _ref133.commands;
                return t.toggleMark(_this67.name);
              };
            },
            unsetUnderline: function unsetUnderline() {
              return function (_ref134) {
                var t = _ref134.commands;
                return t.unsetMark(_this67.name);
              };
            }
          };
        },
        addKeyboardShortcuts: function addKeyboardShortcuts() {
          var _this68 = this;
          return {
            "Mod-u": function ModU() {
              return _this68.editor.commands.toggleUnderline();
            },
            "Mod-U": function ModU() {
              return _this68.editor.commands.toggleUnderline();
            }
          };
        }
      }),
      El = /^\s*>\s$/,
      Al = ks.create({
        name: "blockquote",
        addOptions: function addOptions() {
          return {
            HTMLAttributes: {}
          };
        },
        content: "block+",
        group: "block",
        defining: !0,
        parseHTML: function parseHTML() {
          return [{
            tag: "blockquote"
          }];
        },
        renderHTML: function renderHTML(_ref135) {
          var t = _ref135.HTMLAttributes;
          return ["blockquote", pi(this.options.HTMLAttributes, t), 0];
        },
        addCommands: function addCommands() {
          var _this69 = this;
          return {
            setBlockquote: function setBlockquote() {
              return function (_ref136) {
                var t = _ref136.commands;
                return t.wrapIn(_this69.name);
              };
            },
            toggleBlockquote: function toggleBlockquote() {
              return function (_ref137) {
                var t = _ref137.commands;
                return t.toggleWrap(_this69.name);
              };
            },
            unsetBlockquote: function unsetBlockquote() {
              return function (_ref138) {
                var t = _ref138.commands;
                return t.lift(_this69.name);
              };
            }
          };
        },
        addKeyboardShortcuts: function addKeyboardShortcuts() {
          var _this70 = this;
          return {
            "Mod-Shift-b": function ModShiftB() {
              return _this70.editor.commands.toggleBlockquote();
            }
          };
        },
        addInputRules: function addInputRules() {
          return [ws({
            find: El,
            type: this.type
          })];
        }
      }),
      Nl = /(?:^|\s)((?:\*\*)((?:[^*]+))(?:\*\*))$/,
      Dl = /(?:^|\s)((?:\*\*)((?:[^*]+))(?:\*\*))/g,
      Rl = /(?:^|\s)((?:__)((?:[^__]+))(?:__))$/,
      Il = /(?:^|\s)((?:__)((?:[^__]+))(?:__))/g,
      Pl = xs.create({
        name: "bold",
        addOptions: function addOptions() {
          return {
            HTMLAttributes: {}
          };
        },
        parseHTML: function parseHTML() {
          return [{
            tag: "strong"
          }, {
            tag: "b",
            getAttrs: function getAttrs(t) {
              return "normal" !== t.style.fontWeight && null;
            }
          }, {
            style: "font-weight",
            getAttrs: function getAttrs(t) {
              return /^(bold(er)?|[5-9]\d{2,})$/.test(t) && null;
            }
          }];
        },
        renderHTML: function renderHTML(_ref139) {
          var t = _ref139.HTMLAttributes;
          return ["strong", pi(this.options.HTMLAttributes, t), 0];
        },
        addCommands: function addCommands() {
          var _this71 = this;
          return {
            setBold: function setBold() {
              return function (_ref140) {
                var t = _ref140.commands;
                return t.setMark(_this71.name);
              };
            },
            toggleBold: function toggleBold() {
              return function (_ref141) {
                var t = _ref141.commands;
                return t.toggleMark(_this71.name);
              };
            },
            unsetBold: function unsetBold() {
              return function (_ref142) {
                var t = _ref142.commands;
                return t.unsetMark(_this71.name);
              };
            }
          };
        },
        addKeyboardShortcuts: function addKeyboardShortcuts() {
          var _this72 = this;
          return {
            "Mod-b": function ModB() {
              return _this72.editor.commands.toggleBold();
            },
            "Mod-B": function ModB() {
              return _this72.editor.commands.toggleBold();
            }
          };
        },
        addInputRules: function addInputRules() {
          return [ys({
            find: Nl,
            type: this.type
          }), ys({
            find: Rl,
            type: this.type
          })];
        },
        addPasteRules: function addPasteRules() {
          return [Ss({
            find: Dl,
            type: this.type
          }), Ss({
            find: Il,
            type: this.type
          })];
        }
      }),
      Ll = ks.create({
        name: "listItem",
        addOptions: function addOptions() {
          return {
            HTMLAttributes: {},
            bulletListTypeName: "bulletList",
            orderedListTypeName: "orderedList"
          };
        },
        content: "paragraph block*",
        defining: !0,
        parseHTML: function parseHTML() {
          return [{
            tag: "li"
          }];
        },
        renderHTML: function renderHTML(_ref143) {
          var t = _ref143.HTMLAttributes;
          return ["li", pi(this.options.HTMLAttributes, t), 0];
        },
        addKeyboardShortcuts: function addKeyboardShortcuts() {
          var _this73 = this;
          return {
            Enter: function Enter() {
              return _this73.editor.commands.splitListItem(_this73.name);
            },
            Tab: function Tab() {
              return _this73.editor.commands.sinkListItem(_this73.name);
            },
            "Shift-Tab": function ShiftTab() {
              return _this73.editor.commands.liftListItem(_this73.name);
            }
          };
        }
      }),
      Fl = xs.create({
        name: "textStyle",
        addOptions: function addOptions() {
          return {
            HTMLAttributes: {}
          };
        },
        parseHTML: function parseHTML() {
          return [{
            tag: "span",
            getAttrs: function getAttrs(t) {
              return !!t.hasAttribute("style") && {};
            }
          }];
        },
        renderHTML: function renderHTML(_ref144) {
          var t = _ref144.HTMLAttributes;
          return ["span", pi(this.options.HTMLAttributes, t), 0];
        },
        addCommands: function addCommands() {
          var _this74 = this;
          return {
            removeEmptyTextStyle: function removeEmptyTextStyle() {
              return function (_ref145) {
                var t = _ref145.state,
                  e = _ref145.commands;
                var n = Qi(t, _this74.type);
                return !!Object.entries(n).some(function (_ref146) {
                  var _ref147 = _slicedToArray(_ref146, 2),
                    t = _ref147[1];
                  return !!t;
                }) || e.unsetMark(_this74.name);
              };
            }
          };
        }
      }),
      Bl = /^\s*([-+*])\s$/,
      zl = ks.create({
        name: "bulletList",
        addOptions: function addOptions() {
          return {
            itemTypeName: "listItem",
            HTMLAttributes: {},
            keepMarks: !1,
            keepAttributes: !1
          };
        },
        group: "block list",
        content: function content() {
          return "".concat(this.options.itemTypeName, "+");
        },
        parseHTML: function parseHTML() {
          return [{
            tag: "ul"
          }];
        },
        renderHTML: function renderHTML(_ref148) {
          var t = _ref148.HTMLAttributes;
          return ["ul", pi(this.options.HTMLAttributes, t), 0];
        },
        addCommands: function addCommands() {
          var _this75 = this;
          return {
            toggleBulletList: function toggleBulletList() {
              return function (_ref149) {
                var t = _ref149.commands,
                  e = _ref149.chain;
                return _this75.options.keepAttributes ? e().toggleList(_this75.name, _this75.options.itemTypeName, _this75.options.keepMarks).updateAttributes(Ll.name, _this75.editor.getAttributes(Fl.name)).run() : t.toggleList(_this75.name, _this75.options.itemTypeName, _this75.options.keepMarks);
              };
            }
          };
        },
        addKeyboardShortcuts: function addKeyboardShortcuts() {
          var _this76 = this;
          return {
            "Mod-Shift-8": function ModShift8() {
              return _this76.editor.commands.toggleBulletList();
            }
          };
        },
        addInputRules: function addInputRules() {
          var _this77 = this;
          var t = ws({
            find: Bl,
            type: this.type
          });
          return (this.options.keepMarks || this.options.keepAttributes) && (t = ws({
            find: Bl,
            type: this.type,
            keepMarks: this.options.keepMarks,
            keepAttributes: this.options.keepAttributes,
            getAttributes: function getAttributes() {
              return _this77.editor.getAttributes(Fl.name);
            },
            editor: this.editor
          })), [t];
        }
      }),
      jl = /(?:^|\s)((?:`)((?:[^`]+))(?:`))$/,
      $l = /(?:^|\s)((?:`)((?:[^`]+))(?:`))/g,
      _l = xs.create({
        name: "code",
        addOptions: function addOptions() {
          return {
            HTMLAttributes: {}
          };
        },
        excludes: "_",
        code: !0,
        exitable: !0,
        parseHTML: function parseHTML() {
          return [{
            tag: "code"
          }];
        },
        renderHTML: function renderHTML(_ref150) {
          var t = _ref150.HTMLAttributes;
          return ["code", pi(this.options.HTMLAttributes, t), 0];
        },
        addCommands: function addCommands() {
          var _this78 = this;
          return {
            setCode: function setCode() {
              return function (_ref151) {
                var t = _ref151.commands;
                return t.setMark(_this78.name);
              };
            },
            toggleCode: function toggleCode() {
              return function (_ref152) {
                var t = _ref152.commands;
                return t.toggleMark(_this78.name);
              };
            },
            unsetCode: function unsetCode() {
              return function (_ref153) {
                var t = _ref153.commands;
                return t.unsetMark(_this78.name);
              };
            }
          };
        },
        addKeyboardShortcuts: function addKeyboardShortcuts() {
          var _this79 = this;
          return {
            "Mod-e": function ModE() {
              return _this79.editor.commands.toggleCode();
            }
          };
        },
        addInputRules: function addInputRules() {
          return [ys({
            find: jl,
            type: this.type
          })];
        },
        addPasteRules: function addPasteRules() {
          return [Ss({
            find: $l,
            type: this.type
          })];
        }
      }),
      Hl = /^```([a-z]+)?[\s\n]$/,
      Vl = /^~~~([a-z]+)?[\s\n]$/,
      Wl = ks.create({
        name: "codeBlock",
        addOptions: function addOptions() {
          return {
            languageClassPrefix: "language-",
            exitOnTripleEnter: !0,
            exitOnArrowDown: !0,
            HTMLAttributes: {}
          };
        },
        content: "text*",
        marks: "",
        group: "block",
        code: !0,
        defining: !0,
        addAttributes: function addAttributes() {
          var _this80 = this;
          return {
            language: {
              default: null,
              parseHTML: function parseHTML(t) {
                var e;
                var n = _this80.options.languageClassPrefix;
                return _toConsumableArray((null === (e = t.firstElementChild) || void 0 === e ? void 0 : e.classList) || []).filter(function (t) {
                  return t.startsWith(n);
                }).map(function (t) {
                  return t.replace(n, "");
                })[0] || null;
              },
              rendered: !1
            }
          };
        },
        parseHTML: function parseHTML() {
          return [{
            tag: "pre",
            preserveWhitespace: "full"
          }];
        },
        renderHTML: function renderHTML(_ref154) {
          var t = _ref154.node,
            e = _ref154.HTMLAttributes;
          return ["pre", pi(this.options.HTMLAttributes, e), ["code", {
            class: t.attrs.language ? this.options.languageClassPrefix + t.attrs.language : null
          }, 0]];
        },
        addCommands: function addCommands() {
          var _this81 = this;
          return {
            setCodeBlock: function setCodeBlock(t) {
              return function (_ref155) {
                var e = _ref155.commands;
                return e.setNode(_this81.name, t);
              };
            },
            toggleCodeBlock: function toggleCodeBlock(t) {
              return function (_ref156) {
                var e = _ref156.commands;
                return e.toggleNode(_this81.name, "paragraph", t);
              };
            }
          };
        },
        addKeyboardShortcuts: function addKeyboardShortcuts() {
          var _this82 = this;
          return {
            "Mod-Alt-c": function ModAltC() {
              return _this82.editor.commands.toggleCodeBlock();
            },
            Backspace: function Backspace() {
              var _this82$editor$state$ = _this82.editor.state.selection,
                t = _this82$editor$state$.empty,
                e = _this82$editor$state$.$anchor,
                n = 1 === e.pos;
              return !(!t || e.parent.type.name !== _this82.name) && !(!n && e.parent.textContent.length) && _this82.editor.commands.clearNodes();
            },
            Enter: function Enter(_ref157) {
              var t = _ref157.editor;
              if (!_this82.options.exitOnTripleEnter) return !1;
              var e = t.state,
                n = e.selection,
                r = n.$from,
                o = n.empty;
              if (!o || r.parent.type !== _this82.type) return !1;
              var i = r.parentOffset === r.parent.nodeSize - 2,
                s = r.parent.textContent.endsWith("\n\n");
              return !(!i || !s) && t.chain().command(function (_ref158) {
                var t = _ref158.tr;
                return t.delete(r.pos - 2, r.pos), !0;
              }).exitCode().run();
            },
            ArrowDown: function ArrowDown(_ref159) {
              var t = _ref159.editor;
              if (!_this82.options.exitOnArrowDown) return !1;
              var e = t.state,
                n = e.selection,
                r = e.doc,
                o = n.$from,
                i = n.empty;
              if (!i || o.parent.type !== _this82.type) return !1;
              if (o.parentOffset !== o.parent.nodeSize - 2) return !1;
              var s = o.after();
              return void 0 !== s && !r.nodeAt(s) && t.commands.exitCode();
            }
          };
        },
        addInputRules: function addInputRules() {
          return [bs({
            find: Hl,
            type: this.type,
            getAttributes: function getAttributes(t) {
              return {
                language: t[1]
              };
            }
          }), bs({
            find: Vl,
            type: this.type,
            getAttributes: function getAttributes(t) {
              return {
                language: t[1]
              };
            }
          })];
        },
        addProseMirrorPlugins: function addProseMirrorPlugins() {
          var _this83 = this;
          return [new pe({
            key: new ge("codeBlockVSCodeHandler"),
            props: {
              handlePaste: function handlePaste(t, e) {
                if (!e.clipboardData) return !1;
                if (_this83.editor.isActive(_this83.type.name)) return !1;
                var n = e.clipboardData.getData("text/plain"),
                  r = e.clipboardData.getData("vscode-editor-data"),
                  o = r ? JSON.parse(r) : void 0,
                  i = null == o ? void 0 : o.mode;
                if (!n || !i) return !1;
                var s = t.state.tr;
                return s.replaceSelectionWith(_this83.type.create({
                  language: i
                })), s.setSelection(Qt.near(s.doc.resolve(Math.max(0, s.selection.from - 2)))), s.insertText(n.replace(/\r\n?/g, "\n")), s.setMeta("paste", !0), t.dispatch(s), !0;
              }
            }
          })];
        }
      }),
      Kl = ks.create({
        name: "doc",
        topNode: !0,
        content: "block+"
      });
    function ql() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return new pe({
        view: function view(e) {
          return new Jl(e, t);
        }
      });
    }
    var Jl = /*#__PURE__*/function () {
      function Jl(t, e) {
        var _this84 = this;
        _classCallCheck(this, Jl);
        var n;
        this.editorView = t, this.cursorPos = null, this.element = null, this.timeout = -1, this.width = null !== (n = e.width) && void 0 !== n ? n : 1, this.color = !1 === e.color ? void 0 : e.color || "black", this.class = e.class, this.handlers = ["dragover", "dragend", "drop", "dragleave"].map(function (e) {
          var n = function n(t) {
            _this84[e](t);
          };
          return t.dom.addEventListener(e, n), {
            name: e,
            handler: n
          };
        });
      }
      _createClass(Jl, [{
        key: "destroy",
        value: function destroy() {
          var _this85 = this;
          this.handlers.forEach(function (_ref160) {
            var t = _ref160.name,
              e = _ref160.handler;
            return _this85.editorView.dom.removeEventListener(t, e);
          });
        }
      }, {
        key: "update",
        value: function update(t, e) {
          null != this.cursorPos && e.doc != t.state.doc && (this.cursorPos > t.state.doc.content.size ? this.setCursor(null) : this.updateOverlay());
        }
      }, {
        key: "setCursor",
        value: function setCursor(t) {
          t != this.cursorPos && (this.cursorPos = t, null == t ? (this.element.parentNode.removeChild(this.element), this.element = null) : this.updateOverlay());
        }
      }, {
        key: "updateOverlay",
        value: function updateOverlay() {
          var t,
            e = this.editorView.state.doc.resolve(this.cursorPos),
            n = !e.parent.inlineContent;
          if (n) {
            var _n168 = e.nodeBefore,
              _r142 = e.nodeAfter;
            if (_n168 || _r142) {
              var _e217 = this.editorView.nodeDOM(this.cursorPos - (_n168 ? _n168.nodeSize : 0));
              if (_e217) {
                var _o106 = _e217.getBoundingClientRect(),
                  _i79 = _n168 ? _o106.bottom : _o106.top;
                _n168 && _r142 && (_i79 = (_i79 + this.editorView.nodeDOM(this.cursorPos).getBoundingClientRect().top) / 2), t = {
                  left: _o106.left,
                  right: _o106.right,
                  top: _i79 - this.width / 2,
                  bottom: _i79 + this.width / 2
                };
              }
            }
          }
          if (!t) {
            var _e218 = this.editorView.coordsAtPos(this.cursorPos);
            t = {
              left: _e218.left - this.width / 2,
              right: _e218.left + this.width / 2,
              top: _e218.top,
              bottom: _e218.bottom
            };
          }
          var r,
            o,
            i = this.editorView.dom.offsetParent;
          if (this.element || (this.element = i.appendChild(global.document.createElement("div")), this.class && (this.element.className = this.class), this.element.style.cssText = "position: absolute; z-index: 50; pointer-events: none;", this.color && (this.element.style.backgroundColor = this.color)), this.element.classList.toggle("prosemirror-dropcursor-block", n), this.element.classList.toggle("prosemirror-dropcursor-inline", !n), !i || i == global.document.body && "static" == getComputedStyle(i).position) r = -pageXOffset, o = -pageYOffset;else {
            var _t203 = i.getBoundingClientRect();
            r = _t203.left - i.scrollLeft, o = _t203.top - i.scrollTop;
          }
          this.element.style.left = t.left - r + "px", this.element.style.top = t.top - o + "px", this.element.style.width = t.right - t.left + "px", this.element.style.height = t.bottom - t.top + "px";
        }
      }, {
        key: "scheduleRemoval",
        value: function scheduleRemoval(t) {
          var _this86 = this;
          clearTimeout(this.timeout), this.timeout = setTimeout(function () {
            return _this86.setCursor(null);
          }, t);
        }
      }, {
        key: "dragover",
        value: function dragover(t) {
          if (!this.editorView.editable) return;
          var e = this.editorView.posAtCoords({
              left: t.clientX,
              top: t.clientY
            }),
            n = e && e.inside >= 0 && this.editorView.state.doc.nodeAt(e.inside),
            r = n && n.type.spec.disableDropCursor,
            o = "function" == typeof r ? r(this.editorView, e, t) : r;
          if (e && !o) {
            var _t204 = e.pos;
            if (this.editorView.dragging && this.editorView.dragging.slice) {
              var _e219 = Rt(this.editorView.state.doc, _t204, this.editorView.dragging.slice);
              null != _e219 && (_t204 = _e219);
            }
            this.setCursor(_t204), this.scheduleRemoval(5e3);
          }
        }
      }, {
        key: "dragend",
        value: function dragend() {
          this.scheduleRemoval(20);
        }
      }, {
        key: "drop",
        value: function drop() {
          this.scheduleRemoval(20);
        }
      }, {
        key: "dragleave",
        value: function dragleave(t) {
          t.target != this.editorView.dom && this.editorView.dom.contains(t.relatedTarget) || this.setCursor(null);
        }
      }]);
      return Jl;
    }();
    var Ul = Ri.create({
      name: "dropCursor",
      addOptions: function addOptions() {
        return {
          color: "currentColor",
          width: 1,
          class: void 0
        };
      },
      addProseMirrorPlugins: function addProseMirrorPlugins() {
        return [ql(this.options)];
      }
    });
    var Gl = /*#__PURE__*/function (_Ut4) {
      _inherits(Gl, _Ut4);
      function Gl(t) {
        _classCallCheck(this, Gl);
        return _callSuper(this, Gl, [t, t]);
      }
      _createClass(Gl, [{
        key: "map",
        value: function map(t, e) {
          var n = t.resolve(e.map(this.head));
          return Gl.valid(n) ? new Gl(n) : Ut.near(n);
        }
      }, {
        key: "content",
        value: function content() {
          return h.empty;
        }
      }, {
        key: "eq",
        value: function eq(t) {
          return t instanceof Gl && t.head == this.head;
        }
      }, {
        key: "toJSON",
        value: function toJSON() {
          return {
            type: "gapcursor",
            pos: this.head
          };
        }
      }, {
        key: "getBookmark",
        value: function getBookmark() {
          return new Yl(this.anchor);
        }
      }], [{
        key: "fromJSON",
        value: function fromJSON(t, e) {
          if ("number" != typeof e.pos) throw new RangeError("Invalid input for GapCursor.fromJSON");
          return new Gl(t.resolve(e.pos));
        }
      }, {
        key: "valid",
        value: function valid(t) {
          var e = t.parent;
          if (e.isTextblock || !function (t) {
            for (var _e220 = t.depth; _e220 >= 0; _e220--) {
              var _n169 = t.index(_e220),
                _r143 = t.node(_e220);
              if (0 != _n169) for (var _t205 = _r143.child(_n169 - 1);; _t205 = _t205.lastChild) {
                if (0 == _t205.childCount && !_t205.inlineContent || _t205.isAtom || _t205.type.spec.isolating) return !0;
                if (_t205.inlineContent) return !1;
              } else if (_r143.type.spec.isolating) return !0;
            }
            return !0;
          }(t) || !function (t) {
            for (var _e221 = t.depth; _e221 >= 0; _e221--) {
              var _n170 = t.indexAfter(_e221),
                _r144 = t.node(_e221);
              if (_n170 != _r144.childCount) for (var _t206 = _r144.child(_n170);; _t206 = _t206.firstChild) {
                if (0 == _t206.childCount && !_t206.inlineContent || _t206.isAtom || _t206.type.spec.isolating) return !0;
                if (_t206.inlineContent) return !1;
              } else if (_r144.type.spec.isolating) return !0;
            }
            return !0;
          }(t)) return !1;
          var n = e.type.spec.allowGapCursor;
          if (null != n) return n;
          var r = e.contentMatchAt(t.index()).defaultType;
          return r && r.isTextblock;
        }
      }, {
        key: "findGapCursorFrom",
        value: function findGapCursorFrom(t, e) {
          var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
          t: for (;;) {
            if (!n && Gl.valid(t)) return t;
            var _r145 = t.pos,
              _o107 = null;
            for (var _n171 = t.depth;; _n171--) {
              var _i80 = t.node(_n171);
              if (e > 0 ? t.indexAfter(_n171) < _i80.childCount : t.index(_n171) > 0) {
                _o107 = _i80.child(e > 0 ? t.indexAfter(_n171) : t.index(_n171) - 1);
                break;
              }
              if (0 == _n171) return null;
              _r145 += e;
              var _s63 = t.doc.resolve(_r145);
              if (Gl.valid(_s63)) return _s63;
            }
            for (;;) {
              var _i81 = e > 0 ? _o107.firstChild : _o107.lastChild;
              if (!_i81) {
                if (_o107.isAtom && !_o107.isText && !te.isSelectable(_o107)) {
                  t = t.doc.resolve(_r145 + _o107.nodeSize * e), n = !1;
                  continue t;
                }
                break;
              }
              _o107 = _i81, _r145 += e;
              var _s64 = t.doc.resolve(_r145);
              if (Gl.valid(_s64)) return _s64;
            }
            return null;
          }
        }
      }]);
      return Gl;
    }(Ut);
    Gl.prototype.visible = !1, Gl.findFrom = Gl.findGapCursorFrom, Ut.jsonID("gapcursor", Gl);
    var Yl = /*#__PURE__*/function () {
      function Yl(t) {
        _classCallCheck(this, Yl);
        this.pos = t;
      }
      _createClass(Yl, [{
        key: "map",
        value: function map(t) {
          return new Yl(t.map(this.pos));
        }
      }, {
        key: "resolve",
        value: function resolve(t) {
          var e = t.resolve(this.pos);
          return Gl.valid(e) ? new Gl(e) : Ut.near(e);
        }
      }]);
      return Yl;
    }();
    var Xl = Lo({
      ArrowLeft: Ql("horiz", -1),
      ArrowRight: Ql("horiz", 1),
      ArrowUp: Ql("vert", -1),
      ArrowDown: Ql("vert", 1)
    });
    function Ql(t, e) {
      var n = "vert" == t ? e > 0 ? "down" : "up" : e > 0 ? "right" : "left";
      return function (t, r, o) {
        var i = t.selection,
          s = e > 0 ? i.$to : i.$from,
          a = i.empty;
        if (i instanceof Qt) {
          if (!o.endOfTextblock(n) || 0 == s.depth) return !1;
          a = !1, s = t.doc.resolve(e > 0 ? s.after() : s.before());
        }
        var l = Gl.findGapCursorFrom(s, e, a);
        return !!l && (r && r(t.tr.setSelection(new Gl(l))), !0);
      };
    }
    function Zl(t, e, n) {
      if (!t || !t.editable) return !1;
      var r = t.state.doc.resolve(e);
      if (!Gl.valid(r)) return !1;
      var o = t.posAtCoords({
        left: n.clientX,
        top: n.clientY
      });
      return !(o && o.inside > -1 && te.isSelectable(t.state.doc.nodeAt(o.inside)) || (t.dispatch(t.state.tr.setSelection(new Gl(r))), 0));
    }
    function tc(t, e) {
      if ("insertCompositionText" != e.inputType || !(t.state.selection instanceof Gl)) return !1;
      var n = t.state.selection.$from,
        r = n.parent.contentMatchAt(n.index()).findWrapping(t.state.schema.nodes.text);
      if (!r) return !1;
      var o = i.empty;
      for (var _t207 = r.length - 1; _t207 >= 0; _t207--) o = i.from(r[_t207].createAndFill(null, o));
      var s = t.state.tr.replace(n.pos, n.pos, new h(o, 0, 0));
      return s.setSelection(Qt.near(s.doc.resolve(n.pos + 1))), t.dispatch(s), !1;
    }
    function ec(t) {
      if (!(t.selection instanceof Gl)) return null;
      var e = global.document.createElement("div");
      return e.className = "ProseMirror-gapcursor", Xr.create(t.doc, [Ur.widget(t.selection.head, e, {
        key: "gapcursor"
      })]);
    }
    var nc = Ri.create({
        name: "gapCursor",
        addProseMirrorPlugins: function addProseMirrorPlugins() {
          return [new pe({
            props: {
              decorations: ec,
              createSelectionBetween: function createSelectionBetween(t, e, n) {
                return e.pos == n.pos && Gl.valid(n) ? new Gl(n) : null;
              },
              handleClick: Zl,
              handleKeyDown: Xl,
              handleDOMEvents: {
                beforeinput: tc
              }
            }
          })];
        },
        extendNodeSchema: function extendNodeSchema(t) {
          var e;
          return {
            allowGapCursor: null !== (e = gi(ci(t, "allowGapCursor", {
              name: t.name,
              options: t.options,
              storage: t.storage
            }))) && void 0 !== e ? e : null
          };
        }
      }),
      rc = ks.create({
        name: "hardBreak",
        addOptions: function addOptions() {
          return {
            keepMarks: !0,
            HTMLAttributes: {}
          };
        },
        inline: !0,
        group: "inline",
        selectable: !1,
        parseHTML: function parseHTML() {
          return [{
            tag: "br"
          }];
        },
        renderHTML: function renderHTML(_ref161) {
          var t = _ref161.HTMLAttributes;
          return ["br", pi(this.options.HTMLAttributes, t)];
        },
        renderText: function renderText() {
          return "\n";
        },
        addCommands: function addCommands() {
          var _this87 = this;
          return {
            setHardBreak: function setHardBreak() {
              return function (_ref162) {
                var t = _ref162.commands,
                  e = _ref162.chain,
                  n = _ref162.state,
                  r = _ref162.editor;
                return t.first([function () {
                  return t.exitCode();
                }, function () {
                  return t.command(function () {
                    var t = n.selection,
                      o = n.storedMarks;
                    if (t.$from.parent.type.spec.isolating) return !1;
                    var i = _this87.options.keepMarks,
                      s = r.extensionManager.splittableMarks,
                      a = o || t.$to.parentOffset && t.$from.marks();
                    return e().insertContent({
                      type: _this87.name
                    }).command(function (_ref163) {
                      var t = _ref163.tr,
                        e = _ref163.dispatch;
                      if (e && a && i) {
                        var _e222 = a.filter(function (t) {
                          return s.includes(t.type.name);
                        });
                        t.ensureMarks(_e222);
                      }
                      return !0;
                    }).run();
                  });
                }]);
              };
            }
          };
        },
        addKeyboardShortcuts: function addKeyboardShortcuts() {
          var _this88 = this;
          return {
            "Mod-Enter": function ModEnter() {
              return _this88.editor.commands.setHardBreak();
            },
            "Shift-Enter": function ShiftEnter() {
              return _this88.editor.commands.setHardBreak();
            }
          };
        }
      }),
      oc = ks.create({
        name: "heading",
        addOptions: function addOptions() {
          return {
            levels: [1, 2, 3, 4, 5, 6],
            HTMLAttributes: {}
          };
        },
        content: "inline*",
        group: "block",
        defining: !0,
        addAttributes: function addAttributes() {
          return {
            level: {
              default: 1,
              rendered: !1
            }
          };
        },
        parseHTML: function parseHTML() {
          return this.options.levels.map(function (t) {
            return {
              tag: "h".concat(t),
              attrs: {
                level: t
              }
            };
          });
        },
        renderHTML: function renderHTML(_ref164) {
          var t = _ref164.node,
            e = _ref164.HTMLAttributes;
          return ["h".concat(this.options.levels.includes(t.attrs.level) ? t.attrs.level : this.options.levels[0]), pi(this.options.HTMLAttributes, e), 0];
        },
        addCommands: function addCommands() {
          var _this89 = this;
          return {
            setHeading: function setHeading(t) {
              return function (_ref165) {
                var e = _ref165.commands;
                return !!_this89.options.levels.includes(t.level) && e.setNode(_this89.name, t);
              };
            },
            toggleHeading: function toggleHeading(t) {
              return function (_ref166) {
                var e = _ref166.commands;
                return !!_this89.options.levels.includes(t.level) && e.toggleNode(_this89.name, "paragraph", t);
              };
            }
          };
        },
        addKeyboardShortcuts: function addKeyboardShortcuts() {
          var _this90 = this;
          return this.options.levels.reduce(function (t, e) {
            return _objectSpread(_objectSpread({}, t), {}, _defineProperty({}, "Mod-Alt-".concat(e), function ModAlt() {
              return _this90.editor.commands.toggleHeading({
                level: e
              });
            }));
          }, {});
        },
        addInputRules: function addInputRules() {
          var _this91 = this;
          return this.options.levels.map(function (t) {
            return bs({
              find: new RegExp("^(#{1,".concat(t, "})\\s$")),
              type: _this91.type,
              getAttributes: {
                level: t
              }
            });
          });
        }
      });
    var ic = 200,
      sc = function sc() {};
    sc.prototype.append = function (t) {
      return t.length ? (t = sc.from(t), !this.length && t || t.length < ic && this.leafAppend(t) || this.length < ic && t.leafPrepend(this) || this.appendInner(t)) : this;
    }, sc.prototype.prepend = function (t) {
      return t.length ? sc.from(t).append(this) : this;
    }, sc.prototype.appendInner = function (t) {
      return new lc(this, t);
    }, sc.prototype.slice = function (t, e) {
      return void 0 === t && (t = 0), void 0 === e && (e = this.length), t >= e ? sc.empty : this.sliceInner(Math.max(0, t), Math.min(this.length, e));
    }, sc.prototype.get = function (t) {
      if (!(t < 0 || t >= this.length)) return this.getInner(t);
    }, sc.prototype.forEach = function (t, e, n) {
      void 0 === e && (e = 0), void 0 === n && (n = this.length), e <= n ? this.forEachInner(t, e, n, 0) : this.forEachInvertedInner(t, e, n, 0);
    }, sc.prototype.map = function (t, e, n) {
      void 0 === e && (e = 0), void 0 === n && (n = this.length);
      var r = [];
      return this.forEach(function (e, n) {
        return r.push(t(e, n));
      }, e, n), r;
    }, sc.from = function (t) {
      return t instanceof sc ? t : t && t.length ? new ac(t) : sc.empty;
    };
    var ac = function (t) {
      function e(e) {
        t.call(this), this.values = e;
      }
      t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
      var n = {
        length: {
          configurable: !0
        },
        depth: {
          configurable: !0
        }
      };
      return e.prototype.flatten = function () {
        return this.values;
      }, e.prototype.sliceInner = function (t, n) {
        return 0 == t && n == this.length ? this : new e(this.values.slice(t, n));
      }, e.prototype.getInner = function (t) {
        return this.values[t];
      }, e.prototype.forEachInner = function (t, e, n, r) {
        for (var o = e; o < n; o++) if (!1 === t(this.values[o], r + o)) return !1;
      }, e.prototype.forEachInvertedInner = function (t, e, n, r) {
        for (var o = e - 1; o >= n; o--) if (!1 === t(this.values[o], r + o)) return !1;
      }, e.prototype.leafAppend = function (t) {
        if (this.length + t.length <= ic) return new e(this.values.concat(t.flatten()));
      }, e.prototype.leafPrepend = function (t) {
        if (this.length + t.length <= ic) return new e(t.flatten().concat(this.values));
      }, n.length.get = function () {
        return this.values.length;
      }, n.depth.get = function () {
        return 0;
      }, Object.defineProperties(e.prototype, n), e;
    }(sc);
    sc.empty = new ac([]);
    var lc = function (t) {
      function e(e, n) {
        t.call(this), this.left = e, this.right = n, this.length = e.length + n.length, this.depth = Math.max(e.depth, n.depth) + 1;
      }
      return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.flatten = function () {
        return this.left.flatten().concat(this.right.flatten());
      }, e.prototype.getInner = function (t) {
        return t < this.left.length ? this.left.get(t) : this.right.get(t - this.left.length);
      }, e.prototype.forEachInner = function (t, e, n, r) {
        var o = this.left.length;
        return !(e < o && !1 === this.left.forEachInner(t, e, Math.min(n, o), r)) && !(n > o && !1 === this.right.forEachInner(t, Math.max(e - o, 0), Math.min(this.length, n) - o, r + o)) && void 0;
      }, e.prototype.forEachInvertedInner = function (t, e, n, r) {
        var o = this.left.length;
        return !(e > o && !1 === this.right.forEachInvertedInner(t, e - o, Math.max(n, o) - o, r + o)) && !(n < o && !1 === this.left.forEachInvertedInner(t, Math.min(e, o), n, r)) && void 0;
      }, e.prototype.sliceInner = function (t, e) {
        if (0 == t && e == this.length) return this;
        var n = this.left.length;
        return e <= n ? this.left.slice(t, e) : t >= n ? this.right.slice(t - n, e - n) : this.left.slice(t, n).append(this.right.slice(0, e - n));
      }, e.prototype.leafAppend = function (t) {
        var n = this.right.leafAppend(t);
        if (n) return new e(this.left, n);
      }, e.prototype.leafPrepend = function (t) {
        var n = this.left.leafPrepend(t);
        if (n) return new e(n, this.right);
      }, e.prototype.appendInner = function (t) {
        return this.left.depth >= Math.max(this.right.depth, t.depth) + 1 ? new e(this.left, new e(this.right, t)) : new e(this, t);
      }, e;
    }(sc);
    var cc = sc;
    var uc = /*#__PURE__*/function () {
      function uc(t, e) {
        _classCallCheck(this, uc);
        this.items = t, this.eventCount = e;
      }
      _createClass(uc, [{
        key: "popEvent",
        value: function popEvent(t, e) {
          var _this92 = this;
          if (0 == this.eventCount) return null;
          var n,
            r,
            o = this.items.length;
          for (;; o--) if (this.items.get(o - 1).selection) {
            --o;
            break;
          }
          e && (n = this.remapping(o, this.items.length), r = n.maps.length);
          var i,
            s,
            a = t.tr,
            l = [],
            c = [];
          return this.items.forEach(function (t, e) {
            if (!t.step) return n || (n = _this92.remapping(o, e + 1), r = n.maps.length), r--, void c.push(t);
            if (n) {
              c.push(new hc(t.map));
              var _e223,
                _o108 = t.step.map(n.slice(r));
              _o108 && a.maybeStep(_o108).doc && (_e223 = a.mapping.maps[a.mapping.maps.length - 1], l.push(new hc(_e223, void 0, void 0, l.length + c.length))), r--, _e223 && n.appendMap(_e223, r);
            } else a.maybeStep(t.step);
            return t.selection ? (i = n ? t.selection.map(n.slice(r)) : t.selection, s = new uc(_this92.items.slice(0, o).append(c.reverse().concat(l)), _this92.eventCount - 1), !1) : void 0;
          }, this.items.length, 0), {
            remaining: s,
            transform: a,
            selection: i
          };
        }
      }, {
        key: "addTransform",
        value: function addTransform(t, e, n, r) {
          var o = [],
            i = this.eventCount,
            s = this.items,
            a = !r && s.length ? s.get(s.length - 1) : null;
          for (var _n172 = 0; _n172 < t.steps.length; _n172++) {
            var _l32 = void 0,
              _c32 = t.steps[_n172].invert(t.docs[_n172]),
              _u17 = new hc(t.mapping.maps[_n172], _c32, e);
            (_l32 = a && a.merge(_u17)) && (_u17 = _l32, _n172 ? o.pop() : s = s.slice(0, s.length - 1)), o.push(_u17), e && (i++, e = void 0), r || (a = _u17);
          }
          var l = i - n.depth;
          return l > pc && (s = function (t, e) {
            var n;
            return t.forEach(function (t, r) {
              if (t.selection && 0 == e--) return n = r, !1;
            }), t.slice(n);
          }(s, l), i -= l), new uc(s.append(o), i);
        }
      }, {
        key: "remapping",
        value: function remapping(t, e) {
          var n = new dt();
          return this.items.forEach(function (e, r) {
            var o = null != e.mirrorOffset && r - e.mirrorOffset >= t ? n.maps.length - e.mirrorOffset : void 0;
            n.appendMap(e.map, o);
          }, t, e), n;
        }
      }, {
        key: "addMaps",
        value: function addMaps(t) {
          return 0 == this.eventCount ? this : new uc(this.items.append(t.map(function (t) {
            return new hc(t);
          })), this.eventCount);
        }
      }, {
        key: "rebased",
        value: function rebased(t, e) {
          if (!this.eventCount) return this;
          var n = [],
            r = Math.max(0, this.items.length - e),
            o = t.mapping,
            i = t.steps.length,
            s = this.eventCount;
          this.items.forEach(function (t) {
            t.selection && s--;
          }, r);
          var a = e;
          this.items.forEach(function (e) {
            var r = o.getMirror(--a);
            if (null == r) return;
            i = Math.min(i, r);
            var l = o.maps[r];
            if (e.step) {
              var _i82 = t.steps[r].invert(t.docs[r]),
                _c33 = e.selection && e.selection.map(o.slice(a + 1, r));
              _c33 && s++, n.push(new hc(l, _i82, _c33));
            } else n.push(new hc(l));
          }, r);
          var l = [];
          for (var _t208 = e; _t208 < i; _t208++) l.push(new hc(o.maps[_t208]));
          var c = this.items.slice(0, r).append(l).append(n),
            u = new uc(c, s);
          return u.emptyItemCount() > 500 && (u = u.compress(this.items.length - n.length)), u;
        }
      }, {
        key: "emptyItemCount",
        value: function emptyItemCount() {
          var t = 0;
          return this.items.forEach(function (e) {
            e.step || t++;
          }), t;
        }
      }, {
        key: "compress",
        value: function compress() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.items.length;
          var e = this.remapping(0, t),
            n = e.maps.length,
            r = [],
            o = 0;
          return this.items.forEach(function (i, s) {
            if (s >= t) r.push(i), i.selection && o++;else if (i.step) {
              var _t209 = i.step.map(e.slice(n)),
                _s65 = _t209 && _t209.getMap();
              if (n--, _s65 && e.appendMap(_s65, n), _t209) {
                var _a42 = i.selection && i.selection.map(e.slice(n));
                _a42 && o++;
                var _l33,
                  _c34 = new hc(_s65.invert(), _t209, _a42),
                  _u18 = r.length - 1;
                (_l33 = r.length && r[_u18].merge(_c34)) ? r[_u18] = _l33 : r.push(_c34);
              }
            } else i.map && n--;
          }, this.items.length, 0), new uc(cc.from(r.reverse()), o);
        }
      }]);
      return uc;
    }();
    uc.empty = new uc(cc.empty, 0);
    var hc = /*#__PURE__*/function () {
      function hc(t, e, n, r) {
        _classCallCheck(this, hc);
        this.map = t, this.step = e, this.selection = n, this.mirrorOffset = r;
      }
      _createClass(hc, [{
        key: "merge",
        value: function merge(t) {
          if (this.step && t.step && !t.selection) {
            var _e224 = t.step.merge(this.step);
            if (_e224) return new hc(_e224.getMap().invert(), _e224, this.selection);
          }
        }
      }]);
      return hc;
    }();
    var dc = /*#__PURE__*/_createClass(function dc(t, e, n, r, o) {
      _classCallCheck(this, dc);
      this.done = t, this.undone = e, this.prevRanges = n, this.prevTime = r, this.prevComposition = o;
    });
    var pc = 20;
    function fc(t) {
      var e = [];
      return t.forEach(function (t, n, r, o) {
        return e.push(r, o);
      }), e;
    }
    function mc(t, e) {
      if (!t) return null;
      var n = [];
      for (var _r146 = 0; _r146 < t.length; _r146 += 2) {
        var _o109 = e.map(t[_r146], 1),
          _i83 = e.map(t[_r146 + 1], -1);
        _o109 <= _i83 && n.push(_o109, _i83);
      }
      return n;
    }
    function gc(t, e, n, r) {
      var o = bc(e),
        i = wc.get(e).spec.config,
        s = (r ? t.undone : t.done).popEvent(e, o);
      if (!s) return;
      var a = s.selection.resolve(s.transform.doc),
        l = (r ? t.done : t.undone).addTransform(s.transform, e.selection.getBookmark(), i, o),
        c = new dc(r ? l : s.remaining, r ? s.remaining : l, null, 0, -1);
      n(s.transform.setSelection(a).setMeta(wc, {
        redo: r,
        historyState: c
      }).scrollIntoView());
    }
    var yc = !1,
      vc = null;
    function bc(t) {
      var e = t.plugins;
      if (vc != e) {
        yc = !1, vc = e;
        for (var _t210 = 0; _t210 < e.length; _t210++) if (e[_t210].spec.historyPreserveItems) {
          yc = !0;
          break;
        }
      }
      return yc;
    }
    var wc = new ge("history"),
      xc = new ge("closeHistory");
    function kc() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return t = {
        depth: t.depth || 100,
        newGroupDelay: t.newGroupDelay || 500
      }, new pe({
        key: wc,
        state: {
          init: function init() {
            return new dc(uc.empty, uc.empty, null, 0, -1);
          },
          apply: function apply(e, n, r) {
            return function (t, e, n, r) {
              var o,
                i = n.getMeta(wc);
              if (i) return i.historyState;
              n.getMeta(xc) && (t = new dc(t.done, t.undone, null, 0, -1));
              var s = n.getMeta("appendedTransaction");
              if (0 == n.steps.length) return t;
              if (s && s.getMeta(wc)) return s.getMeta(wc).redo ? new dc(t.done.addTransform(n, void 0, r, bc(e)), t.undone, fc(n.mapping.maps[n.steps.length - 1]), t.prevTime, t.prevComposition) : new dc(t.done, t.undone.addTransform(n, void 0, r, bc(e)), null, t.prevTime, t.prevComposition);
              if (!1 === n.getMeta("addToHistory") || s && !1 === s.getMeta("addToHistory")) return (o = n.getMeta("rebased")) ? new dc(t.done.rebased(n, o), t.undone.rebased(n, o), mc(t.prevRanges, n.mapping), t.prevTime, t.prevComposition) : new dc(t.done.addMaps(n.mapping.maps), t.undone.addMaps(n.mapping.maps), mc(t.prevRanges, n.mapping), t.prevTime, t.prevComposition);
              {
                var _o110 = n.getMeta("composition"),
                  _i84 = 0 == t.prevTime || !s && t.prevComposition != _o110 && (t.prevTime < (n.time || 0) - r.newGroupDelay || !function (t, e) {
                    if (!e) return !1;
                    if (!t.docChanged) return !0;
                    var n = !1;
                    return t.mapping.maps[0].forEach(function (t, r) {
                      for (var _o111 = 0; _o111 < e.length; _o111 += 2) t <= e[_o111 + 1] && r >= e[_o111] && (n = !0);
                    }), n;
                  }(n, t.prevRanges)),
                  _a43 = s ? mc(t.prevRanges, n.mapping) : fc(n.mapping.maps[n.steps.length - 1]);
                return new dc(t.done.addTransform(n, _i84 ? e.selection.getBookmark() : void 0, r, bc(e)), uc.empty, _a43, n.time, null == _o110 ? t.prevComposition : _o110);
              }
            }(n, r, e, t);
          }
        },
        config: t,
        props: {
          handleDOMEvents: {
            beforeinput: function beforeinput(t, e) {
              var n = e.inputType,
                r = "historyUndo" == n ? Sc : "historyRedo" == n ? Mc : null;
              return !!r && (e.preventDefault(), r(t.state, t.dispatch));
            }
          }
        }
      });
    }
    var Sc = function Sc(t, e) {
        var n = wc.getState(t);
        return !(!n || 0 == n.done.eventCount || (e && gc(n, t, e, !1), 0));
      },
      Mc = function Mc(t, e) {
        var n = wc.getState(t);
        return !(!n || 0 == n.undone.eventCount || (e && gc(n, t, e, !0), 0));
      },
      Oc = Ri.create({
        name: "history",
        addOptions: function addOptions() {
          return {
            depth: 100,
            newGroupDelay: 500
          };
        },
        addCommands: function addCommands() {
          return {
            undo: function undo() {
              return function (_ref167) {
                var t = _ref167.state,
                  e = _ref167.dispatch;
                return Sc(t, e);
              };
            },
            redo: function redo() {
              return function (_ref168) {
                var t = _ref168.state,
                  e = _ref168.dispatch;
                return Mc(t, e);
              };
            }
          };
        },
        addProseMirrorPlugins: function addProseMirrorPlugins() {
          return [kc(this.options)];
        },
        addKeyboardShortcuts: function addKeyboardShortcuts() {
          var _this93 = this;
          return {
            "Mod-z": function ModZ() {
              return _this93.editor.commands.undo();
            },
            "Mod-Z": function ModZ() {
              return _this93.editor.commands.undo();
            },
            "Mod-y": function ModY() {
              return _this93.editor.commands.redo();
            },
            "Mod-Y": function ModY() {
              return _this93.editor.commands.redo();
            },
            "Shift-Mod-z": function ShiftModZ() {
              return _this93.editor.commands.redo();
            },
            "Shift-Mod-Z": function ShiftModZ() {
              return _this93.editor.commands.redo();
            },
            "Mod-я": function ModЯ() {
              return _this93.editor.commands.undo();
            },
            "Shift-Mod-я": function ShiftModЯ() {
              return _this93.editor.commands.redo();
            }
          };
        }
      }),
      Tc = ks.create({
        name: "horizontalRule",
        addOptions: function addOptions() {
          return {
            HTMLAttributes: {}
          };
        },
        group: "block",
        parseHTML: function parseHTML() {
          return [{
            tag: "hr"
          }];
        },
        renderHTML: function renderHTML(_ref169) {
          var t = _ref169.HTMLAttributes;
          return ["hr", pi(this.options.HTMLAttributes, t)];
        },
        addCommands: function addCommands() {
          var _this94 = this;
          return {
            setHorizontalRule: function setHorizontalRule() {
              return function (_ref170) {
                var t = _ref170.chain,
                  e = _ref170.state;
                var n = e.selection.$to,
                  r = t();
                return 0 === n.parentOffset ? r.insertContentAt(Math.max(n.pos - 2, 0), {
                  type: _this94.name
                }) : r.insertContent({
                  type: _this94.name
                }), r.command(function (_ref171) {
                  var t = _ref171.tr,
                    e = _ref171.dispatch;
                  var n;
                  if (e) {
                    var _e225 = t.selection.$to,
                      _r147 = _e225.end();
                    if (_e225.nodeAfter) _e225.nodeAfter.isTextblock ? t.setSelection(Qt.create(t.doc, _e225.pos + 1)) : _e225.nodeAfter.isBlock ? t.setSelection(te.create(t.doc, _e225.pos)) : t.setSelection(Qt.create(t.doc, _e225.pos));else {
                      var _o112 = null === (n = _e225.parent.type.contentMatch.defaultType) || void 0 === n ? void 0 : n.create();
                      _o112 && (t.insert(_r147, _o112), t.setSelection(Qt.create(t.doc, _r147 + 1)));
                    }
                    t.scrollIntoView();
                  }
                  return !0;
                }).run();
              };
            }
          };
        },
        addInputRules: function addInputRules() {
          return [vs({
            find: /^(?:---|—-|___\s|\*\*\*\s)$/,
            type: this.type
          })];
        }
      }),
      Cc = /(?:^|\s)((?:\*)((?:[^*]+))(?:\*))$/,
      Ec = /(?:^|\s)((?:\*)((?:[^*]+))(?:\*))/g,
      Ac = /(?:^|\s)((?:_)((?:[^_]+))(?:_))$/,
      Nc = /(?:^|\s)((?:_)((?:[^_]+))(?:_))/g,
      Dc = xs.create({
        name: "italic",
        addOptions: function addOptions() {
          return {
            HTMLAttributes: {}
          };
        },
        parseHTML: function parseHTML() {
          return [{
            tag: "em"
          }, {
            tag: "i",
            getAttrs: function getAttrs(t) {
              return "normal" !== t.style.fontStyle && null;
            }
          }, {
            style: "font-style=italic"
          }];
        },
        renderHTML: function renderHTML(_ref172) {
          var t = _ref172.HTMLAttributes;
          return ["em", pi(this.options.HTMLAttributes, t), 0];
        },
        addCommands: function addCommands() {
          var _this95 = this;
          return {
            setItalic: function setItalic() {
              return function (_ref173) {
                var t = _ref173.commands;
                return t.setMark(_this95.name);
              };
            },
            toggleItalic: function toggleItalic() {
              return function (_ref174) {
                var t = _ref174.commands;
                return t.toggleMark(_this95.name);
              };
            },
            unsetItalic: function unsetItalic() {
              return function (_ref175) {
                var t = _ref175.commands;
                return t.unsetMark(_this95.name);
              };
            }
          };
        },
        addKeyboardShortcuts: function addKeyboardShortcuts() {
          var _this96 = this;
          return {
            "Mod-i": function ModI() {
              return _this96.editor.commands.toggleItalic();
            },
            "Mod-I": function ModI() {
              return _this96.editor.commands.toggleItalic();
            }
          };
        },
        addInputRules: function addInputRules() {
          return [ys({
            find: Cc,
            type: this.type
          }), ys({
            find: Ac,
            type: this.type
          })];
        },
        addPasteRules: function addPasteRules() {
          return [Ss({
            find: Ec,
            type: this.type
          }), Ss({
            find: Nc,
            type: this.type
          })];
        }
      }),
      Rc = ks.create({
        name: "listItem",
        addOptions: function addOptions() {
          return {
            HTMLAttributes: {},
            bulletListTypeName: "bulletList",
            orderedListTypeName: "orderedList"
          };
        },
        content: "paragraph block*",
        defining: !0,
        parseHTML: function parseHTML() {
          return [{
            tag: "li"
          }];
        },
        renderHTML: function renderHTML(_ref176) {
          var t = _ref176.HTMLAttributes;
          return ["li", pi(this.options.HTMLAttributes, t), 0];
        },
        addKeyboardShortcuts: function addKeyboardShortcuts() {
          var _this97 = this;
          return {
            Enter: function Enter() {
              return _this97.editor.commands.splitListItem(_this97.name);
            },
            Tab: function Tab() {
              return _this97.editor.commands.sinkListItem(_this97.name);
            },
            "Shift-Tab": function ShiftTab() {
              return _this97.editor.commands.liftListItem(_this97.name);
            }
          };
        }
      }),
      Ic = ks.create({
        name: "listItem",
        addOptions: function addOptions() {
          return {
            HTMLAttributes: {},
            bulletListTypeName: "bulletList",
            orderedListTypeName: "orderedList"
          };
        },
        content: "paragraph block*",
        defining: !0,
        parseHTML: function parseHTML() {
          return [{
            tag: "li"
          }];
        },
        renderHTML: function renderHTML(_ref177) {
          var t = _ref177.HTMLAttributes;
          return ["li", pi(this.options.HTMLAttributes, t), 0];
        },
        addKeyboardShortcuts: function addKeyboardShortcuts() {
          var _this98 = this;
          return {
            Enter: function Enter() {
              return _this98.editor.commands.splitListItem(_this98.name);
            },
            Tab: function Tab() {
              return _this98.editor.commands.sinkListItem(_this98.name);
            },
            "Shift-Tab": function ShiftTab() {
              return _this98.editor.commands.liftListItem(_this98.name);
            }
          };
        }
      }),
      Pc = xs.create({
        name: "textStyle",
        addOptions: function addOptions() {
          return {
            HTMLAttributes: {}
          };
        },
        parseHTML: function parseHTML() {
          return [{
            tag: "span",
            getAttrs: function getAttrs(t) {
              return !!t.hasAttribute("style") && {};
            }
          }];
        },
        renderHTML: function renderHTML(_ref178) {
          var t = _ref178.HTMLAttributes;
          return ["span", pi(this.options.HTMLAttributes, t), 0];
        },
        addCommands: function addCommands() {
          var _this99 = this;
          return {
            removeEmptyTextStyle: function removeEmptyTextStyle() {
              return function (_ref179) {
                var t = _ref179.state,
                  e = _ref179.commands;
                var n = Qi(t, _this99.type);
                return !!Object.entries(n).some(function (_ref180) {
                  var _ref181 = _slicedToArray(_ref180, 2),
                    t = _ref181[1];
                  return !!t;
                }) || e.unsetMark(_this99.name);
              };
            }
          };
        }
      }),
      Lc = /^(\d+)\.\s$/,
      Fc = ks.create({
        name: "orderedList",
        addOptions: function addOptions() {
          return {
            itemTypeName: "listItem",
            HTMLAttributes: {},
            keepMarks: !1,
            keepAttributes: !1
          };
        },
        group: "block list",
        content: function content() {
          return "".concat(this.options.itemTypeName, "+");
        },
        addAttributes: function addAttributes() {
          return {
            start: {
              default: 1,
              parseHTML: function parseHTML(t) {
                return t.hasAttribute("start") ? parseInt(t.getAttribute("start") || "", 10) : 1;
              }
            }
          };
        },
        parseHTML: function parseHTML() {
          return [{
            tag: "ol"
          }];
        },
        renderHTML: function renderHTML(_ref182) {
          var t = _ref182.HTMLAttributes;
          var e = t.start,
            n = _objectWithoutProperties(t, _excluded);
          return 1 === e ? ["ol", pi(this.options.HTMLAttributes, n), 0] : ["ol", pi(this.options.HTMLAttributes, t), 0];
        },
        addCommands: function addCommands() {
          var _this100 = this;
          return {
            toggleOrderedList: function toggleOrderedList() {
              return function (_ref183) {
                var t = _ref183.commands,
                  e = _ref183.chain;
                return _this100.options.keepAttributes ? e().toggleList(_this100.name, _this100.options.itemTypeName, _this100.options.keepMarks).updateAttributes(Ic.name, _this100.editor.getAttributes(Pc.name)).run() : t.toggleList(_this100.name, _this100.options.itemTypeName, _this100.options.keepMarks);
              };
            }
          };
        },
        addKeyboardShortcuts: function addKeyboardShortcuts() {
          var _this101 = this;
          return {
            "Mod-Shift-7": function ModShift7() {
              return _this101.editor.commands.toggleOrderedList();
            }
          };
        },
        addInputRules: function addInputRules() {
          var _this102 = this;
          var t = ws({
            find: Lc,
            type: this.type,
            getAttributes: function getAttributes(t) {
              return {
                start: +t[1]
              };
            },
            joinPredicate: function joinPredicate(t, e) {
              return e.childCount + e.attrs.start === +t[1];
            }
          });
          return (this.options.keepMarks || this.options.keepAttributes) && (t = ws({
            find: Lc,
            type: this.type,
            keepMarks: this.options.keepMarks,
            keepAttributes: this.options.keepAttributes,
            getAttributes: function getAttributes(t) {
              return _objectSpread({
                start: +t[1]
              }, _this102.editor.getAttributes(Pc.name));
            },
            joinPredicate: function joinPredicate(t, e) {
              return e.childCount + e.attrs.start === +t[1];
            },
            editor: this.editor
          })), [t];
        }
      }),
      Bc = ks.create({
        name: "paragraph",
        priority: 1e3,
        addOptions: function addOptions() {
          return {
            HTMLAttributes: {}
          };
        },
        group: "block",
        content: "inline*",
        parseHTML: function parseHTML() {
          return [{
            tag: "p"
          }];
        },
        renderHTML: function renderHTML(_ref184) {
          var t = _ref184.HTMLAttributes;
          return ["p", pi(this.options.HTMLAttributes, t), 0];
        },
        addCommands: function addCommands() {
          var _this103 = this;
          return {
            setParagraph: function setParagraph() {
              return function (_ref185) {
                var t = _ref185.commands;
                return t.setNode(_this103.name);
              };
            }
          };
        },
        addKeyboardShortcuts: function addKeyboardShortcuts() {
          var _this104 = this;
          return {
            "Mod-Alt-0": function ModAlt0() {
              return _this104.editor.commands.setParagraph();
            }
          };
        }
      }),
      zc = /(?:^|\s)((?:~~)((?:[^~]+))(?:~~))$/,
      jc = /(?:^|\s)((?:~~)((?:[^~]+))(?:~~))/g,
      $c = xs.create({
        name: "strike",
        addOptions: function addOptions() {
          return {
            HTMLAttributes: {}
          };
        },
        parseHTML: function parseHTML() {
          return [{
            tag: "s"
          }, {
            tag: "del"
          }, {
            tag: "strike"
          }, {
            style: "text-decoration",
            consuming: !1,
            getAttrs: function getAttrs(t) {
              return !!t.includes("line-through") && {};
            }
          }];
        },
        renderHTML: function renderHTML(_ref186) {
          var t = _ref186.HTMLAttributes;
          return ["s", pi(this.options.HTMLAttributes, t), 0];
        },
        addCommands: function addCommands() {
          var _this105 = this;
          return {
            setStrike: function setStrike() {
              return function (_ref187) {
                var t = _ref187.commands;
                return t.setMark(_this105.name);
              };
            },
            toggleStrike: function toggleStrike() {
              return function (_ref188) {
                var t = _ref188.commands;
                return t.toggleMark(_this105.name);
              };
            },
            unsetStrike: function unsetStrike() {
              return function (_ref189) {
                var t = _ref189.commands;
                return t.unsetMark(_this105.name);
              };
            }
          };
        },
        addKeyboardShortcuts: function addKeyboardShortcuts() {
          var _this106 = this;
          var t = {};
          return Ji() ? t["Mod-Shift-s"] = function () {
            return _this106.editor.commands.toggleStrike();
          } : t["Ctrl-Shift-s"] = function () {
            return _this106.editor.commands.toggleStrike();
          }, t;
        },
        addInputRules: function addInputRules() {
          return [ys({
            find: zc,
            type: this.type
          })];
        },
        addPasteRules: function addPasteRules() {
          return [Ss({
            find: jc,
            type: this.type
          })];
        }
      }),
      _c = ks.create({
        name: "text",
        group: "inline"
      }),
      Hc = Ri.create({
        name: "starterKit",
        addExtensions: function addExtensions() {
          var t, e, n, r, o, i, s, a, l, c, u, h, d, p, f, m, g, y;
          var v = [];
          return !1 !== this.options.blockquote && v.push(Al.configure(null === (t = this.options) || void 0 === t ? void 0 : t.blockquote)), !1 !== this.options.bold && v.push(Pl.configure(null === (e = this.options) || void 0 === e ? void 0 : e.bold)), !1 !== this.options.bulletList && v.push(zl.configure(null === (n = this.options) || void 0 === n ? void 0 : n.bulletList)), !1 !== this.options.code && v.push(_l.configure(null === (r = this.options) || void 0 === r ? void 0 : r.code)), !1 !== this.options.codeBlock && v.push(Wl.configure(null === (o = this.options) || void 0 === o ? void 0 : o.codeBlock)), !1 !== this.options.document && v.push(Kl.configure(null === (i = this.options) || void 0 === i ? void 0 : i.document)), !1 !== this.options.dropcursor && v.push(Ul.configure(null === (s = this.options) || void 0 === s ? void 0 : s.dropcursor)), !1 !== this.options.gapcursor && v.push(nc.configure(null === (a = this.options) || void 0 === a ? void 0 : a.gapcursor)), !1 !== this.options.hardBreak && v.push(rc.configure(null === (l = this.options) || void 0 === l ? void 0 : l.hardBreak)), !1 !== this.options.heading && v.push(oc.configure(null === (c = this.options) || void 0 === c ? void 0 : c.heading)), !1 !== this.options.history && v.push(Oc.configure(null === (u = this.options) || void 0 === u ? void 0 : u.history)), !1 !== this.options.horizontalRule && v.push(Tc.configure(null === (h = this.options) || void 0 === h ? void 0 : h.horizontalRule)), !1 !== this.options.italic && v.push(Dc.configure(null === (d = this.options) || void 0 === d ? void 0 : d.italic)), !1 !== this.options.listItem && v.push(Rc.configure(null === (p = this.options) || void 0 === p ? void 0 : p.listItem)), !1 !== this.options.orderedList && v.push(Fc.configure(null === (f = this.options) || void 0 === f ? void 0 : f.orderedList)), !1 !== this.options.paragraph && v.push(Bc.configure(null === (m = this.options) || void 0 === m ? void 0 : m.paragraph)), !1 !== this.options.strike && v.push($c.configure(null === (g = this.options) || void 0 === g ? void 0 : g.strike)), !1 !== this.options.text && v.push(_c.configure(null === (y = this.options) || void 0 === y ? void 0 : y.text)), v;
        }
      }),
      Vc = [Hc, Sl, xl, Cl, Ts, Ml, Ol, Tl, Ri.create({
        name: "characterCount",
        addOptions: function addOptions() {
          return {
            limit: null,
            mode: "textSize"
          };
        },
        addStorage: function addStorage() {
          return {
            characters: function characters() {
              return 0;
            },
            words: function words() {
              return 0;
            }
          };
        },
        onBeforeCreate: function onBeforeCreate() {
          var _this107 = this;
          this.storage.characters = function (t) {
            var e = (null == t ? void 0 : t.node) || _this107.editor.state.doc;
            return "textSize" === ((null == t ? void 0 : t.mode) || _this107.options.mode) ? e.textBetween(0, e.content.size, void 0, " ").length : e.nodeSize;
          }, this.storage.words = function (t) {
            var e = (null == t ? void 0 : t.node) || _this107.editor.state.doc;
            return e.textBetween(0, e.content.size, " ", " ").split(" ").filter(function (t) {
              return "" !== t;
            }).length;
          };
        },
        addProseMirrorPlugins: function addProseMirrorPlugins() {
          var _this108 = this;
          return [new pe({
            key: new ge("characterCount"),
            filterTransaction: function filterTransaction(t, e) {
              var n = _this108.options.limit;
              if (!t.docChanged || 0 === n || null == n) return !0;
              var r = _this108.storage.characters({
                  node: e.doc
                }),
                o = _this108.storage.characters({
                  node: t.doc
                });
              if (o <= n) return !0;
              if (r > n && o > n && o <= r) return !0;
              if (r > n && o > n && o > r) return !1;
              if (!t.getMeta("paste")) return !1;
              var i = t.selection.$head.pos,
                s = i - (o - n),
                a = i;
              return t.deleteRange(s, a), !(_this108.storage.characters({
                node: t.doc
              }) > n);
            }
          })];
        }
      }), xs.create({
        name: "bibleReference",
        renderHTML: function renderHTML() {
          return ["span"];
        }
      }), xs.create({
        name: "resourceReference",
        renderHTML: function renderHTML() {
          return ["span"];
        }
      })],
      Wc = {
        appendChild: function appendChild() {},
        style: {},
        getBoundingClientRect: function getBoundingClientRect() {
          return {};
        },
        setAttribute: function setAttribute() {},
        insertBefore: function insertBefore() {},
        querySelector: function querySelector() {},
        addEventListener: function addEventListener() {},
        removeEventListener: function removeEventListener() {},
        classList: {
          add: function add() {}
        }
      },
      Kc = {
        querySelector: function querySelector() {},
        createTextNode: function createTextNode() {
          return _objectSpread({}, Wc);
        },
        createElement: function createElement() {
          return _objectSpread(_objectSpread({}, Wc), {}, {
            ownerDocument: _objectSpread({}, Wc)
          });
        }
      },
      qc = {
        parseFromString: function parseFromString() {
          return {
            body: {}
          };
        }
      },
      Jc = {
        DOMParser: function DOMParser() {
          return qc;
        },
        addEventListener: function addEventListener() {},
        removeEventListener: function removeEventListener() {},
        setTimeout: function setTimeout() {}
      };
    global.DragEvent = /*#__PURE__*/function () {
      function _class() {
        _classCallCheck(this, _class);
      }
      return _createClass(_class);
    }(), global.navigator = {
      userAgent: ""
    }, global.document = Kc, global.ClipboardEvent = /*#__PURE__*/function () {
      function _class2() {
        _classCallCheck(this, _class2);
      }
      return _createClass(_class2);
    }(), global.innerHeight = 0, global.window = Jc, global.getWordCountFromListOfTiptaps = function (t) {
      var e = new gs({
        extensions: Vc
      });
      return JSON.parse(t).reduce(function (t, n) {
        return n.tiptap ? (e.commands.setContent(n.tiptap), t + e.storage.characterCount.words()) : t;
      }, 0);
    };
  })();
})();
