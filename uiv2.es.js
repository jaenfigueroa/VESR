import * as A from "react";
import Ae, { useRef as qo, useState as Ct, useEffect as is, createElement as ss } from "react";
import Ko from "react-dom";
var _t = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function os(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Xo(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function a() {
      if (this instanceof a) {
        var n = [null];
        n.push.apply(n, arguments);
        var i = Function.bind.apply(t, n);
        return new i();
      }
      return t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else
    r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(a) {
    var n = Object.getOwnPropertyDescriptor(e, a);
    Object.defineProperty(r, a, n.get ? n : {
      enumerable: !0,
      get: function() {
        return e[a];
      }
    });
  }), r;
}
var xn = { exports: {} }, Nt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Va;
function Zo() {
  if (Va)
    return Nt;
  Va = 1;
  var e = Ae, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, n = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(o, l, c) {
    var f, v = {}, m = null, x = null;
    c !== void 0 && (m = "" + c), l.key !== void 0 && (m = "" + l.key), l.ref !== void 0 && (x = l.ref);
    for (f in l)
      a.call(l, f) && !i.hasOwnProperty(f) && (v[f] = l[f]);
    if (o && o.defaultProps)
      for (f in l = o.defaultProps, l)
        v[f] === void 0 && (v[f] = l[f]);
    return { $$typeof: t, type: o, key: m, ref: x, props: v, _owner: n.current };
  }
  return Nt.Fragment = r, Nt.jsx = s, Nt.jsxs = s, Nt;
}
var At = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ga;
function Jo() {
  return Ga || (Ga = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Ae, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), o = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), M = Symbol.iterator, h = "@@iterator";
    function p(d) {
      if (d === null || typeof d != "object")
        return null;
      var N = M && d[M] || d[h];
      return typeof N == "function" ? N : null;
    }
    var b = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function g(d) {
      {
        for (var N = arguments.length, S = new Array(N > 1 ? N - 1 : 0), F = 1; F < N; F++)
          S[F - 1] = arguments[F];
        j("error", d, S);
      }
    }
    function j(d, N, S) {
      {
        var F = b.ReactDebugCurrentFrame, ae = F.getStackAddendum();
        ae !== "" && (N += "%s", S = S.concat([ae]));
        var oe = S.map(function(re) {
          return String(re);
        });
        oe.unshift("Warning: " + N), Function.prototype.apply.call(console[d], console, oe);
      }
    }
    var w = !1, y = !1, z = !1, K = !1, T = !1, I;
    I = Symbol.for("react.module.reference");
    function Q(d) {
      return !!(typeof d == "string" || typeof d == "function" || d === a || d === i || T || d === n || d === c || d === f || K || d === x || w || y || z || typeof d == "object" && d !== null && (d.$$typeof === m || d.$$typeof === v || d.$$typeof === s || d.$$typeof === o || d.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      d.$$typeof === I || d.getModuleId !== void 0));
    }
    function W(d, N, S) {
      var F = d.displayName;
      if (F)
        return F;
      var ae = N.displayName || N.name || "";
      return ae !== "" ? S + "(" + ae + ")" : S;
    }
    function R(d) {
      return d.displayName || "Context";
    }
    function P(d) {
      if (d == null)
        return null;
      if (typeof d.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof d == "function")
        return d.displayName || d.name || null;
      if (typeof d == "string")
        return d;
      switch (d) {
        case a:
          return "Fragment";
        case r:
          return "Portal";
        case i:
          return "Profiler";
        case n:
          return "StrictMode";
        case c:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof d == "object")
        switch (d.$$typeof) {
          case o:
            var N = d;
            return R(N) + ".Consumer";
          case s:
            var S = d;
            return R(S._context) + ".Provider";
          case l:
            return W(d, d.render, "ForwardRef");
          case v:
            var F = d.displayName || null;
            return F !== null ? F : P(d.type) || "Memo";
          case m: {
            var ae = d, oe = ae._payload, re = ae._init;
            try {
              return P(re(oe));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var me = Object.assign, le = 0, de, be, xe, Pe, E, k, B;
    function G() {
    }
    G.__reactDisabledLog = !0;
    function U() {
      {
        if (le === 0) {
          de = console.log, be = console.info, xe = console.warn, Pe = console.error, E = console.group, k = console.groupCollapsed, B = console.groupEnd;
          var d = {
            configurable: !0,
            enumerable: !0,
            value: G,
            writable: !0
          };
          Object.defineProperties(console, {
            info: d,
            log: d,
            warn: d,
            error: d,
            group: d,
            groupCollapsed: d,
            groupEnd: d
          });
        }
        le++;
      }
    }
    function te() {
      {
        if (le--, le === 0) {
          var d = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: me({}, d, {
              value: de
            }),
            info: me({}, d, {
              value: be
            }),
            warn: me({}, d, {
              value: xe
            }),
            error: me({}, d, {
              value: Pe
            }),
            group: me({}, d, {
              value: E
            }),
            groupCollapsed: me({}, d, {
              value: k
            }),
            groupEnd: me({}, d, {
              value: B
            })
          });
        }
        le < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var H = b.ReactCurrentDispatcher, q;
    function X(d, N, S) {
      {
        if (q === void 0)
          try {
            throw Error();
          } catch (ae) {
            var F = ae.stack.trim().match(/\n( *(at )?)/);
            q = F && F[1] || "";
          }
        return `
` + q + d;
      }
    }
    var ne = !1, Z;
    {
      var Me = typeof WeakMap == "function" ? WeakMap : Map;
      Z = new Me();
    }
    function D(d, N) {
      if (!d || ne)
        return "";
      {
        var S = Z.get(d);
        if (S !== void 0)
          return S;
      }
      var F;
      ne = !0;
      var ae = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var oe;
      oe = H.current, H.current = null, U();
      try {
        if (N) {
          var re = function() {
            throw Error();
          };
          if (Object.defineProperty(re.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(re, []);
            } catch (Re) {
              F = Re;
            }
            Reflect.construct(d, [], re);
          } else {
            try {
              re.call();
            } catch (Re) {
              F = Re;
            }
            d.call(re.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Re) {
            F = Re;
          }
          d();
        }
      } catch (Re) {
        if (Re && F && typeof Re.stack == "string") {
          for (var ee = Re.stack.split(`
`), je = F.stack.split(`
`), ge = ee.length - 1, he = je.length - 1; ge >= 1 && he >= 0 && ee[ge] !== je[he]; )
            he--;
          for (; ge >= 1 && he >= 0; ge--, he--)
            if (ee[ge] !== je[he]) {
              if (ge !== 1 || he !== 1)
                do
                  if (ge--, he--, he < 0 || ee[ge] !== je[he]) {
                    var Oe = `
` + ee[ge].replace(" at new ", " at ");
                    return d.displayName && Oe.includes("<anonymous>") && (Oe = Oe.replace("<anonymous>", d.displayName)), typeof d == "function" && Z.set(d, Oe), Oe;
                  }
                while (ge >= 1 && he >= 0);
              break;
            }
        }
      } finally {
        ne = !1, H.current = oe, te(), Error.prepareStackTrace = ae;
      }
      var lt = d ? d.displayName || d.name : "", Wa = lt ? X(lt) : "";
      return typeof d == "function" && Z.set(d, Wa), Wa;
    }
    function Se(d, N, S) {
      return D(d, !1);
    }
    function st(d) {
      var N = d.prototype;
      return !!(N && N.isReactComponent);
    }
    function _e(d, N, S) {
      if (d == null)
        return "";
      if (typeof d == "function")
        return D(d, st(d));
      if (typeof d == "string")
        return X(d);
      switch (d) {
        case c:
          return X("Suspense");
        case f:
          return X("SuspenseList");
      }
      if (typeof d == "object")
        switch (d.$$typeof) {
          case l:
            return Se(d.render);
          case v:
            return _e(d.type, N, S);
          case m: {
            var F = d, ae = F._payload, oe = F._init;
            try {
              return _e(oe(ae), N, S);
            } catch {
            }
          }
        }
      return "";
    }
    var Zt = Object.prototype.hasOwnProperty, Da = {}, ka = b.ReactDebugCurrentFrame;
    function Jt(d) {
      if (d) {
        var N = d._owner, S = _e(d.type, d._source, N ? N.type : null);
        ka.setExtraStackFrame(S);
      } else
        ka.setExtraStackFrame(null);
    }
    function So(d, N, S, F, ae) {
      {
        var oe = Function.call.bind(Zt);
        for (var re in d)
          if (oe(d, re)) {
            var ee = void 0;
            try {
              if (typeof d[re] != "function") {
                var je = Error((F || "React class") + ": " + S + " type `" + re + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof d[re] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw je.name = "Invariant Violation", je;
              }
              ee = d[re](N, re, F, S, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ge) {
              ee = ge;
            }
            ee && !(ee instanceof Error) && (Jt(ae), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", F || "React class", S, re, typeof ee), Jt(null)), ee instanceof Error && !(ee.message in Da) && (Da[ee.message] = !0, Jt(ae), g("Failed %s type: %s", S, ee.message), Jt(null));
          }
      }
    }
    var Oo = Array.isArray;
    function Wr(d) {
      return Oo(d);
    }
    function To(d) {
      {
        var N = typeof Symbol == "function" && Symbol.toStringTag, S = N && d[Symbol.toStringTag] || d.constructor.name || "Object";
        return S;
      }
    }
    function Io(d) {
      try {
        return Ca(d), !1;
      } catch {
        return !0;
      }
    }
    function Ca(d) {
      return "" + d;
    }
    function Pa(d) {
      if (Io(d))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", To(d)), Ca(d);
    }
    var Et = b.ReactCurrentOwner, Do = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, za, La, Vr;
    Vr = {};
    function ko(d) {
      if (Zt.call(d, "ref")) {
        var N = Object.getOwnPropertyDescriptor(d, "ref").get;
        if (N && N.isReactWarning)
          return !1;
      }
      return d.ref !== void 0;
    }
    function Co(d) {
      if (Zt.call(d, "key")) {
        var N = Object.getOwnPropertyDescriptor(d, "key").get;
        if (N && N.isReactWarning)
          return !1;
      }
      return d.key !== void 0;
    }
    function Po(d, N) {
      if (typeof d.ref == "string" && Et.current && N && Et.current.stateNode !== N) {
        var S = P(Et.current.type);
        Vr[S] || (g('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', P(Et.current.type), d.ref), Vr[S] = !0);
      }
    }
    function zo(d, N) {
      {
        var S = function() {
          za || (za = !0, g("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", N));
        };
        S.isReactWarning = !0, Object.defineProperty(d, "key", {
          get: S,
          configurable: !0
        });
      }
    }
    function Lo(d, N) {
      {
        var S = function() {
          La || (La = !0, g("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", N));
        };
        S.isReactWarning = !0, Object.defineProperty(d, "ref", {
          get: S,
          configurable: !0
        });
      }
    }
    var Ro = function(d, N, S, F, ae, oe, re) {
      var ee = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: d,
        key: N,
        ref: S,
        props: re,
        // Record the component responsible for creating this element.
        _owner: oe
      };
      return ee._store = {}, Object.defineProperty(ee._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ee, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: F
      }), Object.defineProperty(ee, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ae
      }), Object.freeze && (Object.freeze(ee.props), Object.freeze(ee)), ee;
    };
    function Yo(d, N, S, F, ae) {
      {
        var oe, re = {}, ee = null, je = null;
        S !== void 0 && (Pa(S), ee = "" + S), Co(N) && (Pa(N.key), ee = "" + N.key), ko(N) && (je = N.ref, Po(N, ae));
        for (oe in N)
          Zt.call(N, oe) && !Do.hasOwnProperty(oe) && (re[oe] = N[oe]);
        if (d && d.defaultProps) {
          var ge = d.defaultProps;
          for (oe in ge)
            re[oe] === void 0 && (re[oe] = ge[oe]);
        }
        if (ee || je) {
          var he = typeof d == "function" ? d.displayName || d.name || "Unknown" : d;
          ee && zo(re, he), je && Lo(re, he);
        }
        return Ro(d, ee, je, ae, F, Et.current, re);
      }
    }
    var Gr = b.ReactCurrentOwner, Ra = b.ReactDebugCurrentFrame;
    function ot(d) {
      if (d) {
        var N = d._owner, S = _e(d.type, d._source, N ? N.type : null);
        Ra.setExtraStackFrame(S);
      } else
        Ra.setExtraStackFrame(null);
    }
    var Hr;
    Hr = !1;
    function qr(d) {
      return typeof d == "object" && d !== null && d.$$typeof === t;
    }
    function Ya() {
      {
        if (Gr.current) {
          var d = P(Gr.current.type);
          if (d)
            return `

Check the render method of \`` + d + "`.";
        }
        return "";
      }
    }
    function Qo(d) {
      {
        if (d !== void 0) {
          var N = d.fileName.replace(/^.*[\\\/]/, ""), S = d.lineNumber;
          return `

Check your code at ` + N + ":" + S + ".";
        }
        return "";
      }
    }
    var Qa = {};
    function Uo(d) {
      {
        var N = Ya();
        if (!N) {
          var S = typeof d == "string" ? d : d.displayName || d.name;
          S && (N = `

Check the top-level render call using <` + S + ">.");
        }
        return N;
      }
    }
    function Ua(d, N) {
      {
        if (!d._store || d._store.validated || d.key != null)
          return;
        d._store.validated = !0;
        var S = Uo(N);
        if (Qa[S])
          return;
        Qa[S] = !0;
        var F = "";
        d && d._owner && d._owner !== Gr.current && (F = " It was passed a child from " + P(d._owner.type) + "."), ot(d), g('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', S, F), ot(null);
      }
    }
    function Ba(d, N) {
      {
        if (typeof d != "object")
          return;
        if (Wr(d))
          for (var S = 0; S < d.length; S++) {
            var F = d[S];
            qr(F) && Ua(F, N);
          }
        else if (qr(d))
          d._store && (d._store.validated = !0);
        else if (d) {
          var ae = p(d);
          if (typeof ae == "function" && ae !== d.entries)
            for (var oe = ae.call(d), re; !(re = oe.next()).done; )
              qr(re.value) && Ua(re.value, N);
        }
      }
    }
    function Bo(d) {
      {
        var N = d.type;
        if (N == null || typeof N == "string")
          return;
        var S;
        if (typeof N == "function")
          S = N.propTypes;
        else if (typeof N == "object" && (N.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        N.$$typeof === v))
          S = N.propTypes;
        else
          return;
        if (S) {
          var F = P(N);
          So(S, d.props, "prop", F, d);
        } else if (N.PropTypes !== void 0 && !Hr) {
          Hr = !0;
          var ae = P(N);
          g("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ae || "Unknown");
        }
        typeof N.getDefaultProps == "function" && !N.getDefaultProps.isReactClassApproved && g("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Fo(d) {
      {
        for (var N = Object.keys(d.props), S = 0; S < N.length; S++) {
          var F = N[S];
          if (F !== "children" && F !== "key") {
            ot(d), g("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", F), ot(null);
            break;
          }
        }
        d.ref !== null && (ot(d), g("Invalid attribute `ref` supplied to `React.Fragment`."), ot(null));
      }
    }
    function Fa(d, N, S, F, ae, oe) {
      {
        var re = Q(d);
        if (!re) {
          var ee = "";
          (d === void 0 || typeof d == "object" && d !== null && Object.keys(d).length === 0) && (ee += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var je = Qo(ae);
          je ? ee += je : ee += Ya();
          var ge;
          d === null ? ge = "null" : Wr(d) ? ge = "array" : d !== void 0 && d.$$typeof === t ? (ge = "<" + (P(d.type) || "Unknown") + " />", ee = " Did you accidentally export a JSX literal instead of a component?") : ge = typeof d, g("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ge, ee);
        }
        var he = Yo(d, N, S, ae, oe);
        if (he == null)
          return he;
        if (re) {
          var Oe = N.children;
          if (Oe !== void 0)
            if (F)
              if (Wr(Oe)) {
                for (var lt = 0; lt < Oe.length; lt++)
                  Ba(Oe[lt], d);
                Object.freeze && Object.freeze(Oe);
              } else
                g("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ba(Oe, d);
        }
        return d === a ? Fo(he) : Bo(he), he;
      }
    }
    function Wo(d, N, S) {
      return Fa(d, N, S, !0);
    }
    function Vo(d, N, S) {
      return Fa(d, N, S, !1);
    }
    var Go = Vo, Ho = Wo;
    At.Fragment = a, At.jsx = Go, At.jsxs = Ho;
  }()), At;
}
process.env.NODE_ENV === "production" ? xn.exports = Zo() : xn.exports = Jo();
var u = xn.exports, St = {}, wt = Ko;
if (process.env.NODE_ENV === "production")
  St.createRoot = wt.createRoot, St.hydrateRoot = wt.hydrateRoot;
else {
  var $t = wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  St.createRoot = function(e, t) {
    $t.usingClientEntryPoint = !0;
    try {
      return wt.createRoot(e, t);
    } finally {
      $t.usingClientEntryPoint = !1;
    }
  }, St.hydrateRoot = function(e, t, r) {
    $t.usingClientEntryPoint = !0;
    try {
      return wt.hydrateRoot(e, t, r);
    } finally {
      $t.usingClientEntryPoint = !1;
    }
  };
}
/**
 * @remix-run/router v1.6.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Pt() {
  return Pt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Pt.apply(this, arguments);
}
var Ge;
(function(e) {
  e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE";
})(Ge || (Ge = {}));
const Ha = "popstate";
function _o(e) {
  e === void 0 && (e = {});
  function t(a, n) {
    let {
      pathname: i,
      search: s,
      hash: o
    } = a.location;
    return Mn(
      "",
      {
        pathname: i,
        search: s,
        hash: o
      },
      // state defaults to `null` because `window.history.state` does
      n.state && n.state.usr || null,
      n.state && n.state.key || "default"
    );
  }
  function r(a, n) {
    return typeof n == "string" ? n : zt(n);
  }
  return el(t, r, null, e);
}
function V(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
function ke(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {
    }
  }
}
function $o() {
  return Math.random().toString(36).substr(2, 8);
}
function qa(e, t) {
  return {
    usr: e.state,
    key: e.key,
    idx: t
  };
}
function Mn(e, t, r, a) {
  return r === void 0 && (r = null), Pt({
    pathname: typeof e == "string" ? e : e.pathname,
    search: "",
    hash: ""
  }, typeof t == "string" ? bt(t) : t, {
    state: r,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: t && t.key || a || $o()
  });
}
function zt(e) {
  let {
    pathname: t = "/",
    search: r = "",
    hash: a = ""
  } = e;
  return r && r !== "?" && (t += r.charAt(0) === "?" ? r : "?" + r), a && a !== "#" && (t += a.charAt(0) === "#" ? a : "#" + a), t;
}
function bt(e) {
  let t = {};
  if (e) {
    let r = e.indexOf("#");
    r >= 0 && (t.hash = e.substr(r), e = e.substr(0, r));
    let a = e.indexOf("?");
    a >= 0 && (t.search = e.substr(a), e = e.substr(0, a)), e && (t.pathname = e);
  }
  return t;
}
function el(e, t, r, a) {
  a === void 0 && (a = {});
  let {
    window: n = document.defaultView,
    v5Compat: i = !1
  } = a, s = n.history, o = Ge.Pop, l = null, c = f();
  c == null && (c = 0, s.replaceState(Pt({}, s.state, {
    idx: c
  }), ""));
  function f() {
    return (s.state || {
      idx: null
    }).idx;
  }
  function v() {
    o = Ge.Pop;
    let p = f(), b = p == null ? null : p - c;
    c = p, l && l({
      action: o,
      location: h.location,
      delta: b
    });
  }
  function m(p, b) {
    o = Ge.Push;
    let g = Mn(h.location, p, b);
    r && r(g, p), c = f() + 1;
    let j = qa(g, c), w = h.createHref(g);
    try {
      s.pushState(j, "", w);
    } catch (y) {
      if (y instanceof DOMException && y.name === "DataCloneError")
        throw y;
      n.location.assign(w);
    }
    i && l && l({
      action: o,
      location: h.location,
      delta: 1
    });
  }
  function x(p, b) {
    o = Ge.Replace;
    let g = Mn(h.location, p, b);
    r && r(g, p), c = f();
    let j = qa(g, c), w = h.createHref(g);
    s.replaceState(j, "", w), i && l && l({
      action: o,
      location: h.location,
      delta: 0
    });
  }
  function M(p) {
    let b = n.location.origin !== "null" ? n.location.origin : n.location.href, g = typeof p == "string" ? p : zt(p);
    return V(b, "No window.location.(origin|href) available to create URL for href: " + g), new URL(g, b);
  }
  let h = {
    get action() {
      return o;
    },
    get location() {
      return e(n, s);
    },
    listen(p) {
      if (l)
        throw new Error("A history only accepts one active listener");
      return n.addEventListener(Ha, v), l = p, () => {
        n.removeEventListener(Ha, v), l = null;
      };
    },
    createHref(p) {
      return t(n, p);
    },
    createURL: M,
    encodeLocation(p) {
      let b = M(p);
      return {
        pathname: b.pathname,
        search: b.search,
        hash: b.hash
      };
    },
    push: m,
    replace: x,
    go(p) {
      return s.go(p);
    }
  };
  return h;
}
var Ka;
(function(e) {
  e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error";
})(Ka || (Ka = {}));
function tl(e, t, r) {
  r === void 0 && (r = "/");
  let a = typeof t == "string" ? bt(t) : t, n = Lt(a.pathname || "/", r);
  if (n == null)
    return null;
  let i = ls(e);
  rl(i);
  let s = null;
  for (let o = 0; s == null && o < i.length; ++o)
    s = fl(
      i[o],
      // Incoming pathnames are generally encoded from either window.location
      // or from router.navigate, but we want to match against the unencoded
      // paths in the route definitions.  Memory router locations won't be
      // encoded here but there also shouldn't be anything to decode so this
      // should be a safe operation.  This avoids needing matchRoutes to be
      // history-aware.
      ml(n)
    );
  return s;
}
function ls(e, t, r, a) {
  t === void 0 && (t = []), r === void 0 && (r = []), a === void 0 && (a = "");
  let n = (i, s, o) => {
    let l = {
      relativePath: o === void 0 ? i.path || "" : o,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: s,
      route: i
    };
    l.relativePath.startsWith("/") && (V(l.relativePath.startsWith(a), 'Absolute route path "' + l.relativePath + '" nested under path ' + ('"' + a + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), l.relativePath = l.relativePath.slice(a.length));
    let c = Ye([a, l.relativePath]), f = r.concat(l);
    i.children && i.children.length > 0 && (V(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      i.index !== !0,
      "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + c + '".')
    ), ls(i.children, t, f, c)), !(i.path == null && !i.index) && t.push({
      path: c,
      score: ul(c, i.index),
      routesMeta: f
    });
  };
  return e.forEach((i, s) => {
    var o;
    if (i.path === "" || !((o = i.path) != null && o.includes("?")))
      n(i, s);
    else
      for (let l of us(i.path))
        n(i, s, l);
  }), t;
}
function us(e) {
  let t = e.split("/");
  if (t.length === 0)
    return [];
  let [r, ...a] = t, n = r.endsWith("?"), i = r.replace(/\?$/, "");
  if (a.length === 0)
    return n ? [i, ""] : [i];
  let s = us(a.join("/")), o = [];
  return o.push(...s.map((l) => l === "" ? i : [i, l].join("/"))), n && o.push(...s), o.map((l) => e.startsWith("/") && l === "" ? "/" : l);
}
function rl(e) {
  e.sort((t, r) => t.score !== r.score ? r.score - t.score : cl(t.routesMeta.map((a) => a.childrenIndex), r.routesMeta.map((a) => a.childrenIndex)));
}
const nl = /^:\w+$/, al = 3, il = 2, sl = 1, ol = 10, ll = -2, Xa = (e) => e === "*";
function ul(e, t) {
  let r = e.split("/"), a = r.length;
  return r.some(Xa) && (a += ll), t && (a += il), r.filter((n) => !Xa(n)).reduce((n, i) => n + (nl.test(i) ? al : i === "" ? sl : ol), a);
}
function cl(e, t) {
  return e.length === t.length && e.slice(0, -1).every((a, n) => a === t[n]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    e[e.length - 1] - t[t.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function fl(e, t) {
  let {
    routesMeta: r
  } = e, a = {}, n = "/", i = [];
  for (let s = 0; s < r.length; ++s) {
    let o = r[s], l = s === r.length - 1, c = n === "/" ? t : t.slice(n.length) || "/", f = dl({
      path: o.relativePath,
      caseSensitive: o.caseSensitive,
      end: l
    }, c);
    if (!f)
      return null;
    Object.assign(a, f.params);
    let v = o.route;
    i.push({
      // TODO: Can this as be avoided?
      params: a,
      pathname: Ye([n, f.pathname]),
      pathnameBase: yl(Ye([n, f.pathnameBase])),
      route: v
    }), f.pathnameBase !== "/" && (n = Ye([n, f.pathnameBase]));
  }
  return i;
}
function dl(e, t) {
  typeof e == "string" && (e = {
    path: e,
    caseSensitive: !1,
    end: !0
  });
  let [r, a] = vl(e.path, e.caseSensitive, e.end), n = t.match(r);
  if (!n)
    return null;
  let i = n[0], s = i.replace(/(.)\/+$/, "$1"), o = n.slice(1);
  return {
    params: a.reduce((c, f, v) => {
      if (f === "*") {
        let m = o[v] || "";
        s = i.slice(0, i.length - m.length).replace(/(.)\/+$/, "$1");
      }
      return c[f] = pl(o[v] || "", f), c;
    }, {}),
    pathname: i,
    pathnameBase: s,
    pattern: e
  };
}
function vl(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !0), ke(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
  let a = [], n = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/\/:(\w+)/g, (s, o) => (a.push(o), "/([^\\/]+)"));
  return e.endsWith("*") ? (a.push("*"), n += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? n += "\\/*$" : e !== "" && e !== "/" && (n += "(?:(?=\\/|$))"), [new RegExp(n, t ? void 0 : "i"), a];
}
function ml(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return ke(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e;
  }
}
function pl(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (r) {
    return ke(!1, 'The value for the URL param "' + t + '" will not be decoded because' + (' the string "' + e + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + r + ").")), e;
  }
}
function Lt(e, t) {
  if (t === "/")
    return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase()))
    return null;
  let r = t.endsWith("/") ? t.length - 1 : t.length, a = e.charAt(r);
  return a && a !== "/" ? null : e.slice(r) || "/";
}
function gl(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: r,
    search: a = "",
    hash: n = ""
  } = typeof e == "string" ? bt(e) : e;
  return {
    pathname: r ? r.startsWith("/") ? r : hl(r, t) : t,
    search: bl(a),
    hash: xl(n)
  };
}
function hl(e, t) {
  let r = t.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((n) => {
    n === ".." ? r.length > 1 && r.pop() : n !== "." && r.push(n);
  }), r.length > 1 ? r.join("/") : "/";
}
function Kr(e, t, r, a) {
  return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(a) + "].  Please separate it out to the ") + ("`to." + r + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function ta(e) {
  return e.filter((t, r) => r === 0 || t.route.path && t.route.path.length > 0);
}
function ra(e, t, r, a) {
  a === void 0 && (a = !1);
  let n;
  typeof e == "string" ? n = bt(e) : (n = Pt({}, e), V(!n.pathname || !n.pathname.includes("?"), Kr("?", "pathname", "search", n)), V(!n.pathname || !n.pathname.includes("#"), Kr("#", "pathname", "hash", n)), V(!n.search || !n.search.includes("#"), Kr("#", "search", "hash", n)));
  let i = e === "" || n.pathname === "", s = i ? "/" : n.pathname, o;
  if (a || s == null)
    o = r;
  else {
    let v = t.length - 1;
    if (s.startsWith("..")) {
      let m = s.split("/");
      for (; m[0] === ".."; )
        m.shift(), v -= 1;
      n.pathname = m.join("/");
    }
    o = v >= 0 ? t[v] : "/";
  }
  let l = gl(n, o), c = s && s !== "/" && s.endsWith("/"), f = (i || s === ".") && r.endsWith("/");
  return !l.pathname.endsWith("/") && (c || f) && (l.pathname += "/"), l;
}
const Ye = (e) => e.join("/").replace(/\/\/+/g, "/"), yl = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"), bl = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, xl = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function Ml(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
}
const cs = ["post", "put", "patch", "delete"];
new Set(cs);
const jl = ["get", ...cs];
new Set(jl);
/**
 * React Router v6.12.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function mr() {
  return mr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, mr.apply(this, arguments);
}
const Vt = /* @__PURE__ */ A.createContext(null);
process.env.NODE_ENV !== "production" && (Vt.displayName = "DataRouter");
const na = /* @__PURE__ */ A.createContext(null);
process.env.NODE_ENV !== "production" && (na.displayName = "DataRouterState");
const El = /* @__PURE__ */ A.createContext(null);
process.env.NODE_ENV !== "production" && (El.displayName = "Await");
const Ce = /* @__PURE__ */ A.createContext(null);
process.env.NODE_ENV !== "production" && (Ce.displayName = "Navigation");
const Gt = /* @__PURE__ */ A.createContext(null);
process.env.NODE_ENV !== "production" && (Gt.displayName = "Location");
const Le = /* @__PURE__ */ A.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
process.env.NODE_ENV !== "production" && (Le.displayName = "Route");
const aa = /* @__PURE__ */ A.createContext(null);
process.env.NODE_ENV !== "production" && (aa.displayName = "RouteError");
function Nl(e, t) {
  let {
    relative: r
  } = t === void 0 ? {} : t;
  xt() || (process.env.NODE_ENV !== "production" ? V(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  ) : V(!1));
  let {
    basename: a,
    navigator: n
  } = A.useContext(Ce), {
    hash: i,
    pathname: s,
    search: o
  } = Ir(e, {
    relative: r
  }), l = s;
  return a !== "/" && (l = s === "/" ? a : Ye([a, s])), n.createHref({
    pathname: l,
    search: o,
    hash: i
  });
}
function xt() {
  return A.useContext(Gt) != null;
}
function it() {
  return xt() || (process.env.NODE_ENV !== "production" ? V(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ) : V(!1)), A.useContext(Gt).location;
}
const fs = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function ds(e) {
  A.useContext(Ce).static || A.useLayoutEffect(e);
}
function vs() {
  let {
    isDataRoute: e
  } = A.useContext(Le);
  return e ? Yl() : Al();
}
function Al() {
  xt() || (process.env.NODE_ENV !== "production" ? V(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  ) : V(!1));
  let e = A.useContext(Vt), {
    basename: t,
    navigator: r
  } = A.useContext(Ce), {
    matches: a
  } = A.useContext(Le), {
    pathname: n
  } = it(), i = JSON.stringify(ta(a).map((l) => l.pathnameBase)), s = A.useRef(!1);
  return ds(() => {
    s.current = !0;
  }), A.useCallback(function(l, c) {
    if (c === void 0 && (c = {}), process.env.NODE_ENV !== "production" && ke(s.current, fs), !s.current)
      return;
    if (typeof l == "number") {
      r.go(l);
      return;
    }
    let f = ra(l, JSON.parse(i), n, c.relative === "path");
    e == null && t !== "/" && (f.pathname = f.pathname === "/" ? t : Ye([t, f.pathname])), (c.replace ? r.replace : r.push)(f, c.state, c);
  }, [t, r, i, n, e]);
}
function Ir(e, t) {
  let {
    relative: r
  } = t === void 0 ? {} : t, {
    matches: a
  } = A.useContext(Le), {
    pathname: n
  } = it(), i = JSON.stringify(ta(a).map((s) => s.pathnameBase));
  return A.useMemo(() => ra(e, JSON.parse(i), n, r === "path"), [e, i, n, r]);
}
function wl(e, t) {
  return Sl(e, t);
}
function Sl(e, t, r) {
  xt() || (process.env.NODE_ENV !== "production" ? V(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  ) : V(!1));
  let {
    navigator: a
  } = A.useContext(Ce), {
    matches: n
  } = A.useContext(Le), i = n[n.length - 1], s = i ? i.params : {}, o = i ? i.pathname : "/", l = i ? i.pathnameBase : "/", c = i && i.route;
  if (process.env.NODE_ENV !== "production") {
    let b = c && c.path || "";
    Ql(o, !c || b.endsWith("*"), "You rendered descendant <Routes> (or called `useRoutes()`) at " + ('"' + o + '" (under <Route path="' + b + '">) but the ') + `parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

` + ('Please change the parent <Route path="' + b + '"> to <Route ') + ('path="' + (b === "/" ? "*" : b + "/*") + '">.'));
  }
  let f = it(), v;
  if (t) {
    var m;
    let b = typeof t == "string" ? bt(t) : t;
    l === "/" || (m = b.pathname) != null && m.startsWith(l) || (process.env.NODE_ENV !== "production" ? V(!1, "When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was " + ('matched by all parent routes. The current pathname base is "' + l + '" ') + ('but pathname "' + b.pathname + '" was given in the `location` prop.')) : V(!1)), v = b;
  } else
    v = f;
  let x = v.pathname || "/", M = l === "/" ? x : x.slice(l.length) || "/", h = tl(e, {
    pathname: M
  });
  process.env.NODE_ENV !== "production" && (process.env.NODE_ENV !== "production" && ke(c || h != null, 'No routes matched location "' + v.pathname + v.search + v.hash + '" '), process.env.NODE_ENV !== "production" && ke(h == null || h[h.length - 1].route.element !== void 0 || h[h.length - 1].route.Component !== void 0, 'Matched leaf route at location "' + v.pathname + v.search + v.hash + '" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.'));
  let p = kl(h && h.map((b) => Object.assign({}, b, {
    params: Object.assign({}, s, b.params),
    pathname: Ye([
      l,
      // Re-encode pathnames that were decoded inside matchRoutes
      a.encodeLocation ? a.encodeLocation(b.pathname).pathname : b.pathname
    ]),
    pathnameBase: b.pathnameBase === "/" ? l : Ye([
      l,
      // Re-encode pathnames that were decoded inside matchRoutes
      a.encodeLocation ? a.encodeLocation(b.pathnameBase).pathname : b.pathnameBase
    ])
  })), n, r);
  return t && p ? /* @__PURE__ */ A.createElement(Gt.Provider, {
    value: {
      location: mr({
        pathname: "/",
        search: "",
        hash: "",
        state: null,
        key: "default"
      }, v),
      navigationType: Ge.Pop
    }
  }, p) : p;
}
function Ol() {
  let e = Rl(), t = Ml(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e), r = e instanceof Error ? e.stack : null, a = "rgba(200,200,200, 0.5)", n = {
    padding: "0.5rem",
    backgroundColor: a
  }, i = {
    padding: "2px 4px",
    backgroundColor: a
  }, s = null;
  return process.env.NODE_ENV !== "production" && (console.error("Error handled by React Router default ErrorBoundary:", e), s = /* @__PURE__ */ A.createElement(A.Fragment, null, /* @__PURE__ */ A.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ A.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ A.createElement("code", {
    style: i
  }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ A.createElement("code", {
    style: i
  }, "errorElement"), " prop on your route."))), /* @__PURE__ */ A.createElement(A.Fragment, null, /* @__PURE__ */ A.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ A.createElement("h3", {
    style: {
      fontStyle: "italic"
    }
  }, t), r ? /* @__PURE__ */ A.createElement("pre", {
    style: n
  }, r) : null, s);
}
const Tl = /* @__PURE__ */ A.createElement(Ol, null);
class Il extends A.Component {
  constructor(t) {
    super(t), this.state = {
      location: t.location,
      revalidation: t.revalidation,
      error: t.error
    };
  }
  static getDerivedStateFromError(t) {
    return {
      error: t
    };
  }
  static getDerivedStateFromProps(t, r) {
    return r.location !== t.location || r.revalidation !== "idle" && t.revalidation === "idle" ? {
      error: t.error,
      location: t.location,
      revalidation: t.revalidation
    } : {
      error: t.error || r.error,
      location: r.location,
      revalidation: t.revalidation || r.revalidation
    };
  }
  componentDidCatch(t, r) {
    console.error("React Router caught the following error during render", t, r);
  }
  render() {
    return this.state.error ? /* @__PURE__ */ A.createElement(Le.Provider, {
      value: this.props.routeContext
    }, /* @__PURE__ */ A.createElement(aa.Provider, {
      value: this.state.error,
      children: this.props.component
    })) : this.props.children;
  }
}
function Dl(e) {
  let {
    routeContext: t,
    match: r,
    children: a
  } = e, n = A.useContext(Vt);
  return n && n.static && n.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (n.staticContext._deepestRenderedBoundaryId = r.route.id), /* @__PURE__ */ A.createElement(Le.Provider, {
    value: t
  }, a);
}
function kl(e, t, r) {
  var a;
  if (t === void 0 && (t = []), r === void 0 && (r = null), e == null) {
    var n;
    if ((n = r) != null && n.errors)
      e = r.matches;
    else
      return null;
  }
  let i = e, s = (a = r) == null ? void 0 : a.errors;
  if (s != null) {
    let o = i.findIndex((l) => l.route.id && (s == null ? void 0 : s[l.route.id]));
    o >= 0 || (process.env.NODE_ENV !== "production" ? V(!1, "Could not find a matching route for errors on route IDs: " + Object.keys(s).join(",")) : V(!1)), i = i.slice(0, Math.min(i.length, o + 1));
  }
  return i.reduceRight((o, l, c) => {
    let f = l.route.id ? s == null ? void 0 : s[l.route.id] : null, v = null;
    r && (v = l.route.errorElement || Tl);
    let m = t.concat(i.slice(0, c + 1)), x = () => {
      let M;
      return f ? M = v : l.route.Component ? M = /* @__PURE__ */ A.createElement(l.route.Component, null) : l.route.element ? M = l.route.element : M = o, /* @__PURE__ */ A.createElement(Dl, {
        match: l,
        routeContext: {
          outlet: o,
          matches: m,
          isDataRoute: r != null
        },
        children: M
      });
    };
    return r && (l.route.ErrorBoundary || l.route.errorElement || c === 0) ? /* @__PURE__ */ A.createElement(Il, {
      location: r.location,
      revalidation: r.revalidation,
      component: v,
      error: f,
      children: x(),
      routeContext: {
        outlet: null,
        matches: m,
        isDataRoute: !0
      }
    }) : x();
  }, null);
}
var jn;
(function(e) {
  e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate";
})(jn || (jn = {}));
var pt;
(function(e) {
  e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId";
})(pt || (pt = {}));
function ia(e) {
  return e + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function Cl(e) {
  let t = A.useContext(Vt);
  return t || (process.env.NODE_ENV !== "production" ? V(!1, ia(e)) : V(!1)), t;
}
function Pl(e) {
  let t = A.useContext(na);
  return t || (process.env.NODE_ENV !== "production" ? V(!1, ia(e)) : V(!1)), t;
}
function zl(e) {
  let t = A.useContext(Le);
  return t || (process.env.NODE_ENV !== "production" ? V(!1, ia(e)) : V(!1)), t;
}
function sa(e) {
  let t = zl(e), r = t.matches[t.matches.length - 1];
  return r.route.id || (process.env.NODE_ENV !== "production" ? V(!1, e + ' can only be used on routes that contain a unique "id"') : V(!1)), r.route.id;
}
function Ll() {
  return sa(pt.UseRouteId);
}
function Rl() {
  var e;
  let t = A.useContext(aa), r = Pl(pt.UseRouteError), a = sa(pt.UseRouteError);
  return t || ((e = r.errors) == null ? void 0 : e[a]);
}
function Yl() {
  let {
    router: e
  } = Cl(jn.UseNavigateStable), t = sa(pt.UseNavigateStable), r = A.useRef(!1);
  return ds(() => {
    r.current = !0;
  }), A.useCallback(function(n, i) {
    i === void 0 && (i = {}), process.env.NODE_ENV !== "production" && ke(r.current, fs), r.current && (typeof n == "number" ? e.navigate(n) : e.navigate(n, mr({
      fromRouteId: t
    }, i)));
  }, [e, t]);
}
const Za = {};
function Ql(e, t, r) {
  !t && !Za[e] && (Za[e] = !0, process.env.NODE_ENV !== "production" && ke(!1, r));
}
function Ul(e) {
  let {
    to: t,
    replace: r,
    state: a,
    relative: n
  } = e;
  xt() || (process.env.NODE_ENV !== "production" ? V(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of
    // the router loaded. We can help them understand how to avoid that.
    "<Navigate> may be used only in the context of a <Router> component."
  ) : V(!1)), process.env.NODE_ENV !== "production" && ke(!A.useContext(Ce).static, "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");
  let {
    matches: i
  } = A.useContext(Le), {
    pathname: s
  } = it(), o = vs(), l = ra(t, ta(i).map((f) => f.pathnameBase), s, n === "path"), c = JSON.stringify(l);
  return A.useEffect(() => o(JSON.parse(c), {
    replace: r,
    state: a,
    relative: n
  }), [o, c, n, r, a]), null;
}
function Te(e) {
  process.env.NODE_ENV !== "production" ? V(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.") : V(!1);
}
function Bl(e) {
  let {
    basename: t = "/",
    children: r = null,
    location: a,
    navigationType: n = Ge.Pop,
    navigator: i,
    static: s = !1
  } = e;
  xt() && (process.env.NODE_ENV !== "production" ? V(!1, "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.") : V(!1));
  let o = t.replace(/^\/*/, "/"), l = A.useMemo(() => ({
    basename: o,
    navigator: i,
    static: s
  }), [o, i, s]);
  typeof a == "string" && (a = bt(a));
  let {
    pathname: c = "/",
    search: f = "",
    hash: v = "",
    state: m = null,
    key: x = "default"
  } = a, M = A.useMemo(() => {
    let h = Lt(c, o);
    return h == null ? null : {
      location: {
        pathname: h,
        search: f,
        hash: v,
        state: m,
        key: x
      },
      navigationType: n
    };
  }, [o, c, f, v, m, x, n]);
  return process.env.NODE_ENV !== "production" && ke(M != null, '<Router basename="' + o + '"> is not able to match the URL ' + ('"' + c + f + v + '" because it does not start with the ') + "basename, so the <Router> won't render anything."), M == null ? null : /* @__PURE__ */ A.createElement(Ce.Provider, {
    value: l
  }, /* @__PURE__ */ A.createElement(Gt.Provider, {
    children: r,
    value: M
  }));
}
function Fl(e) {
  let {
    children: t,
    location: r
  } = e;
  return wl(En(t), r);
}
var Ja;
(function(e) {
  e[e.pending = 0] = "pending", e[e.success = 1] = "success", e[e.error = 2] = "error";
})(Ja || (Ja = {}));
new Promise(() => {
});
function En(e, t) {
  t === void 0 && (t = []);
  let r = [];
  return A.Children.forEach(e, (a, n) => {
    if (!/* @__PURE__ */ A.isValidElement(a))
      return;
    let i = [...t, n];
    if (a.type === A.Fragment) {
      r.push.apply(r, En(a.props.children, i));
      return;
    }
    a.type !== Te && (process.env.NODE_ENV !== "production" ? V(!1, "[" + (typeof a.type == "string" ? a.type : a.type.name) + "] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>") : V(!1)), !a.props.index || !a.props.children || (process.env.NODE_ENV !== "production" ? V(!1, "An index route cannot have child routes.") : V(!1));
    let s = {
      id: a.props.id || i.join("-"),
      caseSensitive: a.props.caseSensitive,
      element: a.props.element,
      Component: a.props.Component,
      index: a.props.index,
      path: a.props.path,
      loader: a.props.loader,
      action: a.props.action,
      errorElement: a.props.errorElement,
      ErrorBoundary: a.props.ErrorBoundary,
      hasErrorBoundary: a.props.ErrorBoundary != null || a.props.errorElement != null,
      shouldRevalidate: a.props.shouldRevalidate,
      handle: a.props.handle,
      lazy: a.props.lazy
    };
    a.props.children && (s.children = En(a.props.children, i)), r.push(s);
  }), r;
}
/**
 * React Router DOM v6.12.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function qe() {
  return qe = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, qe.apply(this, arguments);
}
function oa(e, t) {
  if (e == null)
    return {};
  var r = {}, a = Object.keys(e), n, i;
  for (i = 0; i < a.length; i++)
    n = a[i], !(t.indexOf(n) >= 0) && (r[n] = e[n]);
  return r;
}
const fr = "get", Xr = "application/x-www-form-urlencoded";
function Dr(e) {
  return e != null && typeof e.tagName == "string";
}
function Wl(e) {
  return Dr(e) && e.tagName.toLowerCase() === "button";
}
function Vl(e) {
  return Dr(e) && e.tagName.toLowerCase() === "form";
}
function Gl(e) {
  return Dr(e) && e.tagName.toLowerCase() === "input";
}
function Hl(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function ql(e, t) {
  return e.button === 0 && // Ignore everything but left clicks
  (!t || t === "_self") && // Let browser handle "target=_blank" etc.
  !Hl(e);
}
function Kl(e, t, r) {
  let a, n = null, i, s;
  if (Vl(e)) {
    let o = t.submissionTrigger;
    if (t.action)
      n = t.action;
    else {
      let l = e.getAttribute("action");
      n = l ? Lt(l, r) : null;
    }
    a = t.method || e.getAttribute("method") || fr, i = t.encType || e.getAttribute("enctype") || Xr, s = new FormData(e), o && o.name && s.append(o.name, o.value);
  } else if (Wl(e) || Gl(e) && (e.type === "submit" || e.type === "image")) {
    let o = e.form;
    if (o == null)
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    if (t.action)
      n = t.action;
    else {
      let l = e.getAttribute("formaction") || o.getAttribute("action");
      n = l ? Lt(l, r) : null;
    }
    a = t.method || e.getAttribute("formmethod") || o.getAttribute("method") || fr, i = t.encType || e.getAttribute("formenctype") || o.getAttribute("enctype") || Xr, s = new FormData(o), e.name && s.append(e.name, e.value);
  } else {
    if (Dr(e))
      throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
    if (a = t.method || fr, n = t.action || null, i = t.encType || Xr, e instanceof FormData)
      s = e;
    else if (s = new FormData(), e instanceof URLSearchParams)
      for (let [o, l] of e)
        s.append(o, l);
    else if (e != null)
      for (let o of Object.keys(e))
        s.append(o, e[o]);
  }
  return {
    action: n,
    method: a.toLowerCase(),
    encType: i,
    formData: s
  };
}
const Xl = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset"], Zl = ["aria-current", "caseSensitive", "className", "end", "style", "to", "children"], Jl = ["reloadDocument", "replace", "method", "action", "onSubmit", "fetcherKey", "routeId", "relative", "preventScrollReset"];
function _l(e) {
  let {
    basename: t,
    children: r,
    window: a
  } = e, n = A.useRef();
  n.current == null && (n.current = _o({
    window: a,
    v5Compat: !0
  }));
  let i = n.current, [s, o] = A.useState({
    action: i.action,
    location: i.location
  }), l = A.useCallback((c) => {
    "startTransition" in A ? A.startTransition(() => o(c)) : o(c);
  }, [o]);
  return A.useLayoutEffect(() => i.listen(l), [i, l]), /* @__PURE__ */ A.createElement(Bl, {
    basename: t,
    children: r,
    location: s.location,
    navigationType: s.action,
    navigator: i
  });
}
process.env.NODE_ENV;
const $l = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", eu = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, kr = /* @__PURE__ */ A.forwardRef(function(t, r) {
  let {
    onClick: a,
    relative: n,
    reloadDocument: i,
    replace: s,
    state: o,
    target: l,
    to: c,
    preventScrollReset: f
  } = t, v = oa(t, Xl), {
    basename: m
  } = A.useContext(Ce), x, M = !1;
  if (typeof c == "string" && eu.test(c) && (x = c, $l))
    try {
      let g = new URL(window.location.href), j = c.startsWith("//") ? new URL(g.protocol + c) : new URL(c), w = Lt(j.pathname, m);
      j.origin === g.origin && w != null ? c = w + j.search + j.hash : M = !0;
    } catch {
      process.env.NODE_ENV !== "production" && ke(!1, '<Link to="' + c + '"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.');
    }
  let h = Nl(c, {
    relative: n
  }), p = au(c, {
    replace: s,
    state: o,
    target: l,
    preventScrollReset: f,
    relative: n
  });
  function b(g) {
    a && a(g), g.defaultPrevented || p(g);
  }
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    /* @__PURE__ */ A.createElement("a", qe({}, v, {
      href: x || h,
      onClick: M || i ? a : b,
      ref: r,
      target: l
    }))
  );
});
process.env.NODE_ENV !== "production" && (kr.displayName = "Link");
const Nn = /* @__PURE__ */ A.forwardRef(function(t, r) {
  let {
    "aria-current": a = "page",
    caseSensitive: n = !1,
    className: i = "",
    end: s = !1,
    style: o,
    to: l,
    children: c
  } = t, f = oa(t, Zl), v = Ir(l, {
    relative: f.relative
  }), m = it(), x = A.useContext(na), {
    navigator: M
  } = A.useContext(Ce), h = M.encodeLocation ? M.encodeLocation(v).pathname : v.pathname, p = m.pathname, b = x && x.navigation && x.navigation.location ? x.navigation.location.pathname : null;
  n || (p = p.toLowerCase(), b = b ? b.toLowerCase() : null, h = h.toLowerCase());
  let g = p === h || !s && p.startsWith(h) && p.charAt(h.length) === "/", j = b != null && (b === h || !s && b.startsWith(h) && b.charAt(h.length) === "/"), w = g ? a : void 0, y;
  typeof i == "function" ? y = i({
    isActive: g,
    isPending: j
  }) : y = [i, g ? "active" : null, j ? "pending" : null].filter(Boolean).join(" ");
  let z = typeof o == "function" ? o({
    isActive: g,
    isPending: j
  }) : o;
  return /* @__PURE__ */ A.createElement(kr, qe({}, f, {
    "aria-current": w,
    className: y,
    ref: r,
    style: z,
    to: l
  }), typeof c == "function" ? c({
    isActive: g,
    isPending: j
  }) : c);
});
process.env.NODE_ENV !== "production" && (Nn.displayName = "NavLink");
const tu = /* @__PURE__ */ A.forwardRef((e, t) => /* @__PURE__ */ A.createElement(ms, qe({}, e, {
  ref: t
})));
process.env.NODE_ENV !== "production" && (tu.displayName = "Form");
const ms = /* @__PURE__ */ A.forwardRef((e, t) => {
  let {
    reloadDocument: r,
    replace: a,
    method: n = fr,
    action: i,
    onSubmit: s,
    fetcherKey: o,
    routeId: l,
    relative: c,
    preventScrollReset: f
  } = e, v = oa(e, Jl), m = iu(o, l), x = n.toLowerCase() === "get" ? "get" : "post", M = su(i, {
    relative: c
  }), h = (p) => {
    if (s && s(p), p.defaultPrevented)
      return;
    p.preventDefault();
    let b = p.nativeEvent.submitter, g = (b == null ? void 0 : b.getAttribute("formmethod")) || n;
    m(b || p.currentTarget, {
      method: g,
      replace: a,
      relative: c,
      preventScrollReset: f
    });
  };
  return /* @__PURE__ */ A.createElement("form", qe({
    ref: t,
    method: x,
    action: M,
    onSubmit: r ? s : h
  }, v));
});
process.env.NODE_ENV !== "production" && (ms.displayName = "FormImpl");
process.env.NODE_ENV;
var An;
(function(e) {
  e.UseScrollRestoration = "useScrollRestoration", e.UseSubmitImpl = "useSubmitImpl", e.UseFetcher = "useFetcher";
})(An || (An = {}));
var _a;
(function(e) {
  e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration";
})(_a || (_a = {}));
function ru(e) {
  return e + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function nu(e) {
  let t = A.useContext(Vt);
  return t || (process.env.NODE_ENV !== "production" ? V(!1, ru(e)) : V(!1)), t;
}
function au(e, t) {
  let {
    target: r,
    replace: a,
    state: n,
    preventScrollReset: i,
    relative: s
  } = t === void 0 ? {} : t, o = vs(), l = it(), c = Ir(e, {
    relative: s
  });
  return A.useCallback((f) => {
    if (ql(f, r)) {
      f.preventDefault();
      let v = a !== void 0 ? a : zt(l) === zt(c);
      o(e, {
        replace: v,
        state: n,
        preventScrollReset: i,
        relative: s
      });
    }
  }, [l, o, c, a, n, r, e, i, s]);
}
function iu(e, t) {
  let {
    router: r
  } = nu(An.UseSubmitImpl), {
    basename: a
  } = A.useContext(Ce), n = Ll();
  return A.useCallback(function(i, s) {
    if (s === void 0 && (s = {}), typeof document > "u")
      throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");
    let {
      action: o,
      method: l,
      encType: c,
      formData: f
    } = Kl(i, s, a), v = {
      preventScrollReset: s.preventScrollReset,
      formData: f,
      formMethod: l,
      formEncType: c
    };
    e ? (t == null && (process.env.NODE_ENV !== "production" ? V(!1, "No routeId available for useFetcher()") : V(!1)), r.fetch(e, t, o, v)) : r.navigate(o, qe({}, v, {
      replace: s.replace,
      fromRouteId: n
    }));
  }, [r, a, e, t, n]);
}
function su(e, t) {
  let {
    relative: r
  } = t === void 0 ? {} : t, {
    basename: a
  } = A.useContext(Ce), n = A.useContext(Le);
  n || (process.env.NODE_ENV !== "production" ? V(!1, "useFormAction must be used inside a RouteContext") : V(!1));
  let [i] = n.matches.slice(-1), s = qe({}, Ir(e || ".", {
    relative: r
  })), o = it();
  if (e == null && (s.search = o.search, s.hash = o.hash, i.route.index)) {
    let l = new URLSearchParams(s.search);
    l.delete("index"), s.search = l.toString() ? "?" + l.toString() : "";
  }
  return (!e || e === ".") && i.route.index && (s.search = s.search ? s.search.replace(/^\?/, "?index&") : "?index"), a !== "/" && (s.pathname = s.pathname === "/" ? a : Ye([a, s.pathname])), zt(s);
}
var ps = {}, gs = {}, Cr = {}, hs = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  var t = {
    animating: !1,
    autoplaying: null,
    currentDirection: 0,
    currentLeft: null,
    currentSlide: 0,
    direction: 1,
    dragging: !1,
    edgeDragged: !1,
    initialized: !1,
    lazyLoadedList: [],
    listHeight: null,
    listWidth: null,
    scrolling: !1,
    slideCount: null,
    slideHeight: null,
    slideWidth: null,
    swipeLeft: null,
    swiped: !1,
    // used by swipeEvent. differentites between touch and swipe.
    swiping: !1,
    touchObject: {
      startX: 0,
      startY: 0,
      curX: 0,
      curY: 0
    },
    trackStyle: {},
    trackWidth: 0,
    targetSlide: 0
  }, r = t;
  e.default = r;
})(hs);
var ou = "Expected a function", $a = 0 / 0, lu = "[object Symbol]", uu = /^\s+|\s+$/g, cu = /^[-+]0x[0-9a-f]+$/i, fu = /^0b[01]+$/i, du = /^0o[0-7]+$/i, vu = parseInt, mu = typeof _t == "object" && _t && _t.Object === Object && _t, pu = typeof self == "object" && self && self.Object === Object && self, gu = mu || pu || Function("return this")(), hu = Object.prototype, yu = hu.toString, bu = Math.max, xu = Math.min, Zr = function() {
  return gu.Date.now();
};
function Mu(e, t, r) {
  var a, n, i, s, o, l, c = 0, f = !1, v = !1, m = !0;
  if (typeof e != "function")
    throw new TypeError(ou);
  t = ei(t) || 0, wn(r) && (f = !!r.leading, v = "maxWait" in r, i = v ? bu(ei(r.maxWait) || 0, t) : i, m = "trailing" in r ? !!r.trailing : m);
  function x(z) {
    var K = a, T = n;
    return a = n = void 0, c = z, s = e.apply(T, K), s;
  }
  function M(z) {
    return c = z, o = setTimeout(b, t), f ? x(z) : s;
  }
  function h(z) {
    var K = z - l, T = z - c, I = t - K;
    return v ? xu(I, i - T) : I;
  }
  function p(z) {
    var K = z - l, T = z - c;
    return l === void 0 || K >= t || K < 0 || v && T >= i;
  }
  function b() {
    var z = Zr();
    if (p(z))
      return g(z);
    o = setTimeout(b, h(z));
  }
  function g(z) {
    return o = void 0, m && a ? x(z) : (a = n = void 0, s);
  }
  function j() {
    o !== void 0 && clearTimeout(o), c = 0, a = l = n = o = void 0;
  }
  function w() {
    return o === void 0 ? s : g(Zr());
  }
  function y() {
    var z = Zr(), K = p(z);
    if (a = arguments, n = this, l = z, K) {
      if (o === void 0)
        return M(l);
      if (v)
        return o = setTimeout(b, t), x(l);
    }
    return o === void 0 && (o = setTimeout(b, t)), s;
  }
  return y.cancel = j, y.flush = w, y;
}
function wn(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function ju(e) {
  return !!e && typeof e == "object";
}
function Eu(e) {
  return typeof e == "symbol" || ju(e) && yu.call(e) == lu;
}
function ei(e) {
  if (typeof e == "number")
    return e;
  if (Eu(e))
    return $a;
  if (wn(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = wn(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(uu, "");
  var r = fu.test(e);
  return r || du.test(e) ? vu(e.slice(2), r ? 2 : 8) : cu.test(e) ? $a : +e;
}
var Nu = Mu, ys = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function r() {
      for (var a = [], n = 0; n < arguments.length; n++) {
        var i = arguments[n];
        if (i) {
          var s = typeof i;
          if (s === "string" || s === "number")
            a.push(i);
          else if (Array.isArray(i)) {
            if (i.length) {
              var o = r.apply(null, i);
              o && a.push(o);
            }
          } else if (s === "object") {
            if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]")) {
              a.push(i.toString());
              continue;
            }
            for (var l in i)
              t.call(i, l) && i[l] && a.push(l);
          }
        }
      }
      return a.join(" ");
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(ys);
var Pr = ys.exports, O = {};
Object.defineProperty(O, "__esModule", {
  value: !0
});
O.checkSpecKeys = O.checkNavigable = O.changeSlide = O.canUseDOM = O.canGoNext = void 0;
O.clamp = bs;
O.swipeStart = O.swipeMove = O.swipeEnd = O.slidesOnRight = O.slidesOnLeft = O.slideHandler = O.siblingDirection = O.safePreventDefault = O.lazyStartIndex = O.lazySlidesOnRight = O.lazySlidesOnLeft = O.lazyEndIndex = O.keyHandler = O.initializedState = O.getWidth = O.getTrackLeft = O.getTrackCSS = O.getTrackAnimateCSS = O.getTotalSlides = O.getSwipeDirection = O.getSlideCount = O.getRequiredLazySlides = O.getPreClones = O.getPostClones = O.getOnDemandLazySlides = O.getNavigableIndexes = O.getHeight = O.extractObject = void 0;
var Au = wu(Ae);
function wu(e) {
  return e && e.__esModule ? e : { default: e };
}
function ti(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), r.push.apply(r, a);
  }
  return r;
}
function fe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ti(Object(r), !0).forEach(function(a) {
      Su(e, a, r[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ti(Object(r)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
    });
  }
  return e;
}
function Su(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function bs(e, t, r) {
  return Math.max(t, Math.min(e, r));
}
var tt = function(t) {
  var r = ["onTouchStart", "onTouchMove", "onWheel"];
  r.includes(t._reactName) || t.preventDefault();
};
O.safePreventDefault = tt;
var la = function(t) {
  for (var r = [], a = ua(t), n = ca(t), i = a; i < n; i++)
    t.lazyLoadedList.indexOf(i) < 0 && r.push(i);
  return r;
};
O.getOnDemandLazySlides = la;
var Ou = function(t) {
  for (var r = [], a = ua(t), n = ca(t), i = a; i < n; i++)
    r.push(i);
  return r;
};
O.getRequiredLazySlides = Ou;
var ua = function(t) {
  return t.currentSlide - xs(t);
};
O.lazyStartIndex = ua;
var ca = function(t) {
  return t.currentSlide + Ms(t);
};
O.lazyEndIndex = ca;
var xs = function(t) {
  return t.centerMode ? Math.floor(t.slidesToShow / 2) + (parseInt(t.centerPadding) > 0 ? 1 : 0) : 0;
};
O.lazySlidesOnLeft = xs;
var Ms = function(t) {
  return t.centerMode ? Math.floor((t.slidesToShow - 1) / 2) + 1 + (parseInt(t.centerPadding) > 0 ? 1 : 0) : t.slidesToShow;
};
O.lazySlidesOnRight = Ms;
var pr = function(t) {
  return t && t.offsetWidth || 0;
};
O.getWidth = pr;
var fa = function(t) {
  return t && t.offsetHeight || 0;
};
O.getHeight = fa;
var da = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, a, n, i, s;
  return a = t.startX - t.curX, n = t.startY - t.curY, i = Math.atan2(n, a), s = Math.round(i * 180 / Math.PI), s < 0 && (s = 360 - Math.abs(s)), s <= 45 && s >= 0 || s <= 360 && s >= 315 ? "left" : s >= 135 && s <= 225 ? "right" : r === !0 ? s >= 35 && s <= 135 ? "up" : "down" : "vertical";
};
O.getSwipeDirection = da;
var va = function(t) {
  var r = !0;
  return t.infinite || (t.centerMode && t.currentSlide >= t.slideCount - 1 || t.slideCount <= t.slidesToShow || t.currentSlide >= t.slideCount - t.slidesToShow) && (r = !1), r;
};
O.canGoNext = va;
var Tu = function(t, r) {
  var a = {};
  return r.forEach(function(n) {
    return a[n] = t[n];
  }), a;
};
O.extractObject = Tu;
var Iu = function(t) {
  var r = Au.default.Children.count(t.children), a = t.listRef, n = Math.ceil(pr(a)), i = t.trackRef && t.trackRef.node, s = Math.ceil(pr(i)), o;
  if (t.vertical)
    o = n;
  else {
    var l = t.centerMode && parseInt(t.centerPadding) * 2;
    typeof t.centerPadding == "string" && t.centerPadding.slice(-1) === "%" && (l *= n / 100), o = Math.ceil((n - l) / t.slidesToShow);
  }
  var c = a && fa(a.querySelector('[data-index="0"]')), f = c * t.slidesToShow, v = t.currentSlide === void 0 ? t.initialSlide : t.currentSlide;
  t.rtl && t.currentSlide === void 0 && (v = r - 1 - t.initialSlide);
  var m = t.lazyLoadedList || [], x = la(fe(fe({}, t), {}, {
    currentSlide: v,
    lazyLoadedList: m
  }));
  m = m.concat(x);
  var M = {
    slideCount: r,
    slideWidth: o,
    listWidth: n,
    trackWidth: s,
    currentSlide: v,
    slideHeight: c,
    listHeight: f,
    lazyLoadedList: m
  };
  return t.autoplaying === null && t.autoplay && (M.autoplaying = "playing"), M;
};
O.initializedState = Iu;
var Du = function(t) {
  var r = t.waitForAnimate, a = t.animating, n = t.fade, i = t.infinite, s = t.index, o = t.slideCount, l = t.lazyLoad, c = t.currentSlide, f = t.centerMode, v = t.slidesToScroll, m = t.slidesToShow, x = t.useCSS, M = t.lazyLoadedList;
  if (r && a)
    return {};
  var h = s, p, b, g, j = {}, w = {}, y = i ? s : bs(s, 0, o - 1);
  if (n) {
    if (!i && (s < 0 || s >= o))
      return {};
    s < 0 ? h = s + o : s >= o && (h = s - o), l && M.indexOf(h) < 0 && (M = M.concat(h)), j = {
      animating: !0,
      currentSlide: h,
      lazyLoadedList: M,
      targetSlide: h
    }, w = {
      animating: !1,
      targetSlide: h
    };
  } else
    p = h, h < 0 ? (p = h + o, i ? o % v !== 0 && (p = o - o % v) : p = 0) : !va(t) && h > c ? h = p = c : f && h >= o ? (h = i ? o : o - 1, p = i ? 0 : o - 1) : h >= o && (p = h - o, i ? o % v !== 0 && (p = 0) : p = o - m), !i && h + m >= o && (p = o - m), b = Yt(fe(fe({}, t), {}, {
      slideIndex: h
    })), g = Yt(fe(fe({}, t), {}, {
      slideIndex: p
    })), i || (b === g && (h = p), b = g), l && (M = M.concat(la(fe(fe({}, t), {}, {
      currentSlide: h
    })))), x ? (j = {
      animating: !0,
      currentSlide: p,
      trackStyle: ma(fe(fe({}, t), {}, {
        left: b
      })),
      lazyLoadedList: M,
      targetSlide: y
    }, w = {
      animating: !1,
      currentSlide: p,
      trackStyle: Rt(fe(fe({}, t), {}, {
        left: g
      })),
      swipeLeft: null,
      targetSlide: y
    }) : j = {
      currentSlide: p,
      trackStyle: Rt(fe(fe({}, t), {}, {
        left: g
      })),
      lazyLoadedList: M,
      targetSlide: y
    };
  return {
    state: j,
    nextState: w
  };
};
O.slideHandler = Du;
var ku = function(t, r) {
  var a, n, i, s, o, l = t.slidesToScroll, c = t.slidesToShow, f = t.slideCount, v = t.currentSlide, m = t.targetSlide, x = t.lazyLoad, M = t.infinite;
  if (s = f % l !== 0, a = s ? 0 : (f - v) % l, r.message === "previous")
    i = a === 0 ? l : c - a, o = v - i, x && !M && (n = v - i, o = n === -1 ? f - 1 : n), M || (o = m - l);
  else if (r.message === "next")
    i = a === 0 ? l : a, o = v + i, x && !M && (o = (v + l) % f + a), M || (o = m + l);
  else if (r.message === "dots")
    o = r.index * r.slidesToScroll;
  else if (r.message === "children") {
    if (o = r.index, M) {
      var h = As(fe(fe({}, t), {}, {
        targetSlide: o
      }));
      o > r.currentSlide && h === "left" ? o = o - f : o < r.currentSlide && h === "right" && (o = o + f);
    }
  } else
    r.message === "index" && (o = Number(r.index));
  return o;
};
O.changeSlide = ku;
var Cu = function(t, r, a) {
  return t.target.tagName.match("TEXTAREA|INPUT|SELECT") || !r ? "" : t.keyCode === 37 ? a ? "next" : "previous" : t.keyCode === 39 ? a ? "previous" : "next" : "";
};
O.keyHandler = Cu;
var Pu = function(t, r, a) {
  return t.target.tagName === "IMG" && tt(t), !r || !a && t.type.indexOf("mouse") !== -1 ? "" : {
    dragging: !0,
    touchObject: {
      startX: t.touches ? t.touches[0].pageX : t.clientX,
      startY: t.touches ? t.touches[0].pageY : t.clientY,
      curX: t.touches ? t.touches[0].pageX : t.clientX,
      curY: t.touches ? t.touches[0].pageY : t.clientY
    }
  };
};
O.swipeStart = Pu;
var zu = function(t, r) {
  var a = r.scrolling, n = r.animating, i = r.vertical, s = r.swipeToSlide, o = r.verticalSwiping, l = r.rtl, c = r.currentSlide, f = r.edgeFriction, v = r.edgeDragged, m = r.onEdge, x = r.swiped, M = r.swiping, h = r.slideCount, p = r.slidesToScroll, b = r.infinite, g = r.touchObject, j = r.swipeEvent, w = r.listHeight, y = r.listWidth;
  if (!a) {
    if (n)
      return tt(t);
    i && s && o && tt(t);
    var z, K = {}, T = Yt(r);
    g.curX = t.touches ? t.touches[0].pageX : t.clientX, g.curY = t.touches ? t.touches[0].pageY : t.clientY, g.swipeLength = Math.round(Math.sqrt(Math.pow(g.curX - g.startX, 2)));
    var I = Math.round(Math.sqrt(Math.pow(g.curY - g.startY, 2)));
    if (!o && !M && I > 10)
      return {
        scrolling: !0
      };
    o && (g.swipeLength = I);
    var Q = (l ? -1 : 1) * (g.curX > g.startX ? 1 : -1);
    o && (Q = g.curY > g.startY ? 1 : -1);
    var W = Math.ceil(h / p), R = da(r.touchObject, o), P = g.swipeLength;
    return b || (c === 0 && (R === "right" || R === "down") || c + 1 >= W && (R === "left" || R === "up") || !va(r) && (R === "left" || R === "up")) && (P = g.swipeLength * f, v === !1 && m && (m(R), K.edgeDragged = !0)), !x && j && (j(R), K.swiped = !0), i ? z = T + P * (w / y) * Q : l ? z = T - P * Q : z = T + P * Q, o && (z = T + P * Q), K = fe(fe({}, K), {}, {
      touchObject: g,
      swipeLeft: z,
      trackStyle: Rt(fe(fe({}, r), {}, {
        left: z
      }))
    }), Math.abs(g.curX - g.startX) < Math.abs(g.curY - g.startY) * 0.8 || g.swipeLength > 10 && (K.swiping = !0, tt(t)), K;
  }
};
O.swipeMove = zu;
var Lu = function(t, r) {
  var a = r.dragging, n = r.swipe, i = r.touchObject, s = r.listWidth, o = r.touchThreshold, l = r.verticalSwiping, c = r.listHeight, f = r.swipeToSlide, v = r.scrolling, m = r.onSwipe, x = r.targetSlide, M = r.currentSlide, h = r.infinite;
  if (!a)
    return n && tt(t), {};
  var p = l ? c / o : s / o, b = da(i, l), g = {
    dragging: !1,
    edgeDragged: !1,
    scrolling: !1,
    swiping: !1,
    swiped: !1,
    swipeLeft: null,
    touchObject: {}
  };
  if (v || !i.swipeLength)
    return g;
  if (i.swipeLength > p) {
    tt(t), m && m(b);
    var j, w, y = h ? M : x;
    switch (b) {
      case "left":
      case "up":
        w = y + On(r), j = f ? Sn(r, w) : w, g.currentDirection = 0;
        break;
      case "right":
      case "down":
        w = y - On(r), j = f ? Sn(r, w) : w, g.currentDirection = 1;
        break;
      default:
        j = y;
    }
    g.triggerSlideHandler = j;
  } else {
    var z = Yt(r);
    g.trackStyle = ma(fe(fe({}, r), {}, {
      left: z
    }));
  }
  return g;
};
O.swipeEnd = Lu;
var js = function(t) {
  for (var r = t.infinite ? t.slideCount * 2 : t.slideCount, a = t.infinite ? t.slidesToShow * -1 : 0, n = t.infinite ? t.slidesToShow * -1 : 0, i = []; a < r; )
    i.push(a), a = n + t.slidesToScroll, n += Math.min(t.slidesToScroll, t.slidesToShow);
  return i;
};
O.getNavigableIndexes = js;
var Sn = function(t, r) {
  var a = js(t), n = 0;
  if (r > a[a.length - 1])
    r = a[a.length - 1];
  else
    for (var i in a) {
      if (r < a[i]) {
        r = n;
        break;
      }
      n = a[i];
    }
  return r;
};
O.checkNavigable = Sn;
var On = function(t) {
  var r = t.centerMode ? t.slideWidth * Math.floor(t.slidesToShow / 2) : 0;
  if (t.swipeToSlide) {
    var a, n = t.listRef, i = n.querySelectorAll && n.querySelectorAll(".slick-slide") || [];
    if (Array.from(i).every(function(l) {
      if (t.vertical) {
        if (l.offsetTop + fa(l) / 2 > t.swipeLeft * -1)
          return a = l, !1;
      } else if (l.offsetLeft - r + pr(l) / 2 > t.swipeLeft * -1)
        return a = l, !1;
      return !0;
    }), !a)
      return 0;
    var s = t.rtl === !0 ? t.slideCount - t.currentSlide : t.currentSlide, o = Math.abs(a.dataset.index - s) || 1;
    return o;
  } else
    return t.slidesToScroll;
};
O.getSlideCount = On;
var zr = function(t, r) {
  return r.reduce(function(a, n) {
    return a && t.hasOwnProperty(n);
  }, !0) ? null : console.error("Keys Missing:", t);
};
O.checkSpecKeys = zr;
var Rt = function(t) {
  zr(t, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth"]);
  var r, a, n = t.slideCount + 2 * t.slidesToShow;
  t.vertical ? a = n * t.slideHeight : r = Ns(t) * t.slideWidth;
  var i = {
    opacity: 1,
    transition: "",
    WebkitTransition: ""
  };
  if (t.useTransform) {
    var s = t.vertical ? "translate3d(0px, " + t.left + "px, 0px)" : "translate3d(" + t.left + "px, 0px, 0px)", o = t.vertical ? "translate3d(0px, " + t.left + "px, 0px)" : "translate3d(" + t.left + "px, 0px, 0px)", l = t.vertical ? "translateY(" + t.left + "px)" : "translateX(" + t.left + "px)";
    i = fe(fe({}, i), {}, {
      WebkitTransform: s,
      transform: o,
      msTransform: l
    });
  } else
    t.vertical ? i.top = t.left : i.left = t.left;
  return t.fade && (i = {
    opacity: 1
  }), r && (i.width = r), a && (i.height = a), window && !window.addEventListener && window.attachEvent && (t.vertical ? i.marginTop = t.left + "px" : i.marginLeft = t.left + "px"), i;
};
O.getTrackCSS = Rt;
var ma = function(t) {
  zr(t, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth", "speed", "cssEase"]);
  var r = Rt(t);
  return t.useTransform ? (r.WebkitTransition = "-webkit-transform " + t.speed + "ms " + t.cssEase, r.transition = "transform " + t.speed + "ms " + t.cssEase) : t.vertical ? r.transition = "top " + t.speed + "ms " + t.cssEase : r.transition = "left " + t.speed + "ms " + t.cssEase, r;
};
O.getTrackAnimateCSS = ma;
var Yt = function(t) {
  if (t.unslick)
    return 0;
  zr(t, ["slideIndex", "trackRef", "infinite", "centerMode", "slideCount", "slidesToShow", "slidesToScroll", "slideWidth", "listWidth", "variableWidth", "slideHeight"]);
  var r = t.slideIndex, a = t.trackRef, n = t.infinite, i = t.centerMode, s = t.slideCount, o = t.slidesToShow, l = t.slidesToScroll, c = t.slideWidth, f = t.listWidth, v = t.variableWidth, m = t.slideHeight, x = t.fade, M = t.vertical, h = 0, p, b, g = 0;
  if (x || t.slideCount === 1)
    return 0;
  var j = 0;
  if (n ? (j = -Tt(t), s % l !== 0 && r + l > s && (j = -(r > s ? o - (r - s) : s % l)), i && (j += parseInt(o / 2))) : (s % l !== 0 && r + l > s && (j = o - s % l), i && (j = parseInt(o / 2))), h = j * c, g = j * m, M ? p = r * m * -1 + g : p = r * c * -1 + h, v === !0) {
    var w, y = a && a.node;
    if (w = r + Tt(t), b = y && y.childNodes[w], p = b ? b.offsetLeft * -1 : 0, i === !0) {
      w = n ? r + Tt(t) : r, b = y && y.children[w], p = 0;
      for (var z = 0; z < w; z++)
        p -= y && y.children[z] && y.children[z].offsetWidth;
      p -= parseInt(t.centerPadding), p += b && (f - b.offsetWidth) / 2;
    }
  }
  return p;
};
O.getTrackLeft = Yt;
var Tt = function(t) {
  return t.unslick || !t.infinite ? 0 : t.variableWidth ? t.slideCount : t.slidesToShow + (t.centerMode ? 1 : 0);
};
O.getPreClones = Tt;
var Es = function(t) {
  return t.unslick || !t.infinite ? 0 : t.slideCount;
};
O.getPostClones = Es;
var Ns = function(t) {
  return t.slideCount === 1 ? 1 : Tt(t) + t.slideCount + Es(t);
};
O.getTotalSlides = Ns;
var As = function(t) {
  return t.targetSlide > t.currentSlide ? t.targetSlide > t.currentSlide + ws(t) ? "left" : "right" : t.targetSlide < t.currentSlide - Ss(t) ? "right" : "left";
};
O.siblingDirection = As;
var ws = function(t) {
  var r = t.slidesToShow, a = t.centerMode, n = t.rtl, i = t.centerPadding;
  if (a) {
    var s = (r - 1) / 2 + 1;
    return parseInt(i) > 0 && (s += 1), n && r % 2 === 0 && (s += 1), s;
  }
  return n ? 0 : r - 1;
};
O.slidesOnRight = ws;
var Ss = function(t) {
  var r = t.slidesToShow, a = t.centerMode, n = t.rtl, i = t.centerPadding;
  if (a) {
    var s = (r - 1) / 2 + 1;
    return parseInt(i) > 0 && (s += 1), !n && r % 2 === 0 && (s += 1), s;
  }
  return n ? r - 1 : 0;
};
O.slidesOnLeft = Ss;
var Ru = function() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
};
O.canUseDOM = Ru;
var Lr = {};
function Tn(e) {
  "@babel/helpers - typeof";
  return Tn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Tn(e);
}
Object.defineProperty(Lr, "__esModule", {
  value: !0
});
Lr.Track = void 0;
var Ve = Os(Ae), Jr = Os(Pr), _r = O;
function Os(e) {
  return e && e.__esModule ? e : { default: e };
}
function In() {
  return In = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, In.apply(this, arguments);
}
function Yu(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ri(e, t) {
  for (var r = 0; r < t.length; r++) {
    var a = t[r];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
  }
}
function Qu(e, t, r) {
  return t && ri(e.prototype, t), r && ri(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Uu(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Dn(e, t);
}
function Dn(e, t) {
  return Dn = Object.setPrototypeOf || function(a, n) {
    return a.__proto__ = n, a;
  }, Dn(e, t);
}
function Bu(e) {
  var t = Wu();
  return function() {
    var a = gr(e), n;
    if (t) {
      var i = gr(this).constructor;
      n = Reflect.construct(a, arguments, i);
    } else
      n = a.apply(this, arguments);
    return Fu(this, n);
  };
}
function Fu(e, t) {
  if (t && (Tn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return kn(e);
}
function kn(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Wu() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function gr(e) {
  return gr = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, gr(e);
}
function ni(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), r.push.apply(r, a);
  }
  return r;
}
function Ne(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ni(Object(r), !0).forEach(function(a) {
      Cn(e, a, r[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ni(Object(r)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
    });
  }
  return e;
}
function Cn(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var $r = function(t) {
  var r, a, n, i, s;
  t.rtl ? s = t.slideCount - 1 - t.index : s = t.index, n = s < 0 || s >= t.slideCount, t.centerMode ? (i = Math.floor(t.slidesToShow / 2), a = (s - t.currentSlide) % t.slideCount === 0, s > t.currentSlide - i - 1 && s <= t.currentSlide + i && (r = !0)) : r = t.currentSlide <= s && s < t.currentSlide + t.slidesToShow;
  var o;
  t.targetSlide < 0 ? o = t.targetSlide + t.slideCount : t.targetSlide >= t.slideCount ? o = t.targetSlide - t.slideCount : o = t.targetSlide;
  var l = s === o;
  return {
    "slick-slide": !0,
    "slick-active": r,
    "slick-center": a,
    "slick-cloned": n,
    "slick-current": l
    // dubious in case of RTL
  };
}, Vu = function(t) {
  var r = {};
  return (t.variableWidth === void 0 || t.variableWidth === !1) && (r.width = t.slideWidth), t.fade && (r.position = "relative", t.vertical ? r.top = -t.index * parseInt(t.slideHeight) : r.left = -t.index * parseInt(t.slideWidth), r.opacity = t.currentSlide === t.index ? 1 : 0, t.useCSS && (r.transition = "opacity " + t.speed + "ms " + t.cssEase + ", visibility " + t.speed + "ms " + t.cssEase)), r;
}, en = function(t, r) {
  return t.key || r;
}, Gu = function(t) {
  var r, a = [], n = [], i = [], s = Ve.default.Children.count(t.children), o = (0, _r.lazyStartIndex)(t), l = (0, _r.lazyEndIndex)(t);
  return Ve.default.Children.forEach(t.children, function(c, f) {
    var v, m = {
      message: "children",
      index: f,
      slidesToScroll: t.slidesToScroll,
      currentSlide: t.currentSlide
    };
    !t.lazyLoad || t.lazyLoad && t.lazyLoadedList.indexOf(f) >= 0 ? v = c : v = /* @__PURE__ */ Ve.default.createElement("div", null);
    var x = Vu(Ne(Ne({}, t), {}, {
      index: f
    })), M = v.props.className || "", h = $r(Ne(Ne({}, t), {}, {
      index: f
    }));
    if (a.push(/* @__PURE__ */ Ve.default.cloneElement(v, {
      key: "original" + en(v, f),
      "data-index": f,
      className: (0, Jr.default)(h, M),
      tabIndex: "-1",
      "aria-hidden": !h["slick-active"],
      style: Ne(Ne({
        outline: "none"
      }, v.props.style || {}), x),
      onClick: function(g) {
        v.props && v.props.onClick && v.props.onClick(g), t.focusOnSelect && t.focusOnSelect(m);
      }
    })), t.infinite && t.fade === !1) {
      var p = s - f;
      p <= (0, _r.getPreClones)(t) && s !== t.slidesToShow && (r = -p, r >= o && (v = c), h = $r(Ne(Ne({}, t), {}, {
        index: r
      })), n.push(/* @__PURE__ */ Ve.default.cloneElement(v, {
        key: "precloned" + en(v, r),
        "data-index": r,
        tabIndex: "-1",
        className: (0, Jr.default)(h, M),
        "aria-hidden": !h["slick-active"],
        style: Ne(Ne({}, v.props.style || {}), x),
        onClick: function(g) {
          v.props && v.props.onClick && v.props.onClick(g), t.focusOnSelect && t.focusOnSelect(m);
        }
      }))), s !== t.slidesToShow && (r = s + f, r < l && (v = c), h = $r(Ne(Ne({}, t), {}, {
        index: r
      })), i.push(/* @__PURE__ */ Ve.default.cloneElement(v, {
        key: "postcloned" + en(v, r),
        "data-index": r,
        tabIndex: "-1",
        className: (0, Jr.default)(h, M),
        "aria-hidden": !h["slick-active"],
        style: Ne(Ne({}, v.props.style || {}), x),
        onClick: function(g) {
          v.props && v.props.onClick && v.props.onClick(g), t.focusOnSelect && t.focusOnSelect(m);
        }
      })));
    }
  }), t.rtl ? n.concat(a, i).reverse() : n.concat(a, i);
}, Hu = /* @__PURE__ */ function(e) {
  Uu(r, e);
  var t = Bu(r);
  function r() {
    var a;
    Yu(this, r);
    for (var n = arguments.length, i = new Array(n), s = 0; s < n; s++)
      i[s] = arguments[s];
    return a = t.call.apply(t, [this].concat(i)), Cn(kn(a), "node", null), Cn(kn(a), "handleRef", function(o) {
      a.node = o;
    }), a;
  }
  return Qu(r, [{
    key: "render",
    value: function() {
      var n = Gu(this.props), i = this.props, s = i.onMouseEnter, o = i.onMouseOver, l = i.onMouseLeave, c = {
        onMouseEnter: s,
        onMouseOver: o,
        onMouseLeave: l
      };
      return /* @__PURE__ */ Ve.default.createElement("div", In({
        ref: this.handleRef,
        className: "slick-track",
        style: this.props.trackStyle
      }, c), n);
    }
  }]), r;
}(Ve.default.PureComponent);
Lr.Track = Hu;
var Rr = {};
function Pn(e) {
  "@babel/helpers - typeof";
  return Pn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Pn(e);
}
Object.defineProperty(Rr, "__esModule", {
  value: !0
});
Rr.Dots = void 0;
var er = Ts(Ae), qu = Ts(Pr), ai = O;
function Ts(e) {
  return e && e.__esModule ? e : { default: e };
}
function ii(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), r.push.apply(r, a);
  }
  return r;
}
function Ku(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ii(Object(r), !0).forEach(function(a) {
      Xu(e, a, r[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ii(Object(r)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
    });
  }
  return e;
}
function Xu(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Zu(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function si(e, t) {
  for (var r = 0; r < t.length; r++) {
    var a = t[r];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
  }
}
function Ju(e, t, r) {
  return t && si(e.prototype, t), r && si(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function _u(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && zn(e, t);
}
function zn(e, t) {
  return zn = Object.setPrototypeOf || function(a, n) {
    return a.__proto__ = n, a;
  }, zn(e, t);
}
function $u(e) {
  var t = rc();
  return function() {
    var a = hr(e), n;
    if (t) {
      var i = hr(this).constructor;
      n = Reflect.construct(a, arguments, i);
    } else
      n = a.apply(this, arguments);
    return ec(this, n);
  };
}
function ec(e, t) {
  if (t && (Pn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return tc(e);
}
function tc(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function rc() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function hr(e) {
  return hr = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, hr(e);
}
var nc = function(t) {
  var r;
  return t.infinite ? r = Math.ceil(t.slideCount / t.slidesToScroll) : r = Math.ceil((t.slideCount - t.slidesToShow) / t.slidesToScroll) + 1, r;
}, ac = /* @__PURE__ */ function(e) {
  _u(r, e);
  var t = $u(r);
  function r() {
    return Zu(this, r), t.apply(this, arguments);
  }
  return Ju(r, [{
    key: "clickHandler",
    value: function(n, i) {
      i.preventDefault(), this.props.clickHandler(n);
    }
  }, {
    key: "render",
    value: function() {
      for (var n = this.props, i = n.onMouseEnter, s = n.onMouseOver, o = n.onMouseLeave, l = n.infinite, c = n.slidesToScroll, f = n.slidesToShow, v = n.slideCount, m = n.currentSlide, x = nc({
        slideCount: v,
        slidesToScroll: c,
        slidesToShow: f,
        infinite: l
      }), M = {
        onMouseEnter: i,
        onMouseOver: s,
        onMouseLeave: o
      }, h = [], p = 0; p < x; p++) {
        var b = (p + 1) * c - 1, g = l ? b : (0, ai.clamp)(b, 0, v - 1), j = g - (c - 1), w = l ? j : (0, ai.clamp)(j, 0, v - 1), y = (0, qu.default)({
          "slick-active": l ? m >= w && m <= g : m === w
        }), z = {
          message: "dots",
          index: p,
          slidesToScroll: c,
          currentSlide: m
        }, K = this.clickHandler.bind(this, z);
        h = h.concat(/* @__PURE__ */ er.default.createElement("li", {
          key: p,
          className: y
        }, /* @__PURE__ */ er.default.cloneElement(this.props.customPaging(p), {
          onClick: K
        })));
      }
      return /* @__PURE__ */ er.default.cloneElement(this.props.appendDots(h), Ku({
        className: this.props.dotsClass
      }, M));
    }
  }]), r;
}(er.default.PureComponent);
Rr.Dots = ac;
var gt = {};
function Ln(e) {
  "@babel/helpers - typeof";
  return Ln = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ln(e);
}
Object.defineProperty(gt, "__esModule", {
  value: !0
});
gt.PrevArrow = gt.NextArrow = void 0;
var vt = Ds(Ae), Is = Ds(Pr), ic = O;
function Ds(e) {
  return e && e.__esModule ? e : { default: e };
}
function yr() {
  return yr = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, yr.apply(this, arguments);
}
function oi(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), r.push.apply(r, a);
  }
  return r;
}
function br(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? oi(Object(r), !0).forEach(function(a) {
      sc(e, a, r[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : oi(Object(r)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
    });
  }
  return e;
}
function sc(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function ks(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function li(e, t) {
  for (var r = 0; r < t.length; r++) {
    var a = t[r];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
  }
}
function Cs(e, t, r) {
  return t && li(e.prototype, t), r && li(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Ps(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Rn(e, t);
}
function Rn(e, t) {
  return Rn = Object.setPrototypeOf || function(a, n) {
    return a.__proto__ = n, a;
  }, Rn(e, t);
}
function zs(e) {
  var t = uc();
  return function() {
    var a = xr(e), n;
    if (t) {
      var i = xr(this).constructor;
      n = Reflect.construct(a, arguments, i);
    } else
      n = a.apply(this, arguments);
    return oc(this, n);
  };
}
function oc(e, t) {
  if (t && (Ln(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return lc(e);
}
function lc(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function uc() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function xr(e) {
  return xr = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, xr(e);
}
var cc = /* @__PURE__ */ function(e) {
  Ps(r, e);
  var t = zs(r);
  function r() {
    return ks(this, r), t.apply(this, arguments);
  }
  return Cs(r, [{
    key: "clickHandler",
    value: function(n, i) {
      i && i.preventDefault(), this.props.clickHandler(n, i);
    }
  }, {
    key: "render",
    value: function() {
      var n = {
        "slick-arrow": !0,
        "slick-prev": !0
      }, i = this.clickHandler.bind(this, {
        message: "previous"
      });
      !this.props.infinite && (this.props.currentSlide === 0 || this.props.slideCount <= this.props.slidesToShow) && (n["slick-disabled"] = !0, i = null);
      var s = {
        key: "0",
        "data-role": "none",
        className: (0, Is.default)(n),
        style: {
          display: "block"
        },
        onClick: i
      }, o = {
        currentSlide: this.props.currentSlide,
        slideCount: this.props.slideCount
      }, l;
      return this.props.prevArrow ? l = /* @__PURE__ */ vt.default.cloneElement(this.props.prevArrow, br(br({}, s), o)) : l = /* @__PURE__ */ vt.default.createElement("button", yr({
        key: "0",
        type: "button"
      }, s), " ", "Previous"), l;
    }
  }]), r;
}(vt.default.PureComponent);
gt.PrevArrow = cc;
var fc = /* @__PURE__ */ function(e) {
  Ps(r, e);
  var t = zs(r);
  function r() {
    return ks(this, r), t.apply(this, arguments);
  }
  return Cs(r, [{
    key: "clickHandler",
    value: function(n, i) {
      i && i.preventDefault(), this.props.clickHandler(n, i);
    }
  }, {
    key: "render",
    value: function() {
      var n = {
        "slick-arrow": !0,
        "slick-next": !0
      }, i = this.clickHandler.bind(this, {
        message: "next"
      });
      (0, ic.canGoNext)(this.props) || (n["slick-disabled"] = !0, i = null);
      var s = {
        key: "1",
        "data-role": "none",
        className: (0, Is.default)(n),
        style: {
          display: "block"
        },
        onClick: i
      }, o = {
        currentSlide: this.props.currentSlide,
        slideCount: this.props.slideCount
      }, l;
      return this.props.nextArrow ? l = /* @__PURE__ */ vt.default.cloneElement(this.props.nextArrow, br(br({}, s), o)) : l = /* @__PURE__ */ vt.default.createElement("button", yr({
        key: "1",
        type: "button"
      }, s), " ", "Next"), l;
    }
  }]), r;
}(vt.default.PureComponent);
gt.NextArrow = fc;
var Ls = function() {
  if (typeof Map < "u")
    return Map;
  function e(t, r) {
    var a = -1;
    return t.some(function(n, i) {
      return n[0] === r ? (a = i, !0) : !1;
    }), a;
  }
  return (
    /** @class */
    function() {
      function t() {
        this.__entries__ = [];
      }
      return Object.defineProperty(t.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function() {
          return this.__entries__.length;
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.get = function(r) {
        var a = e(this.__entries__, r), n = this.__entries__[a];
        return n && n[1];
      }, t.prototype.set = function(r, a) {
        var n = e(this.__entries__, r);
        ~n ? this.__entries__[n][1] = a : this.__entries__.push([r, a]);
      }, t.prototype.delete = function(r) {
        var a = this.__entries__, n = e(a, r);
        ~n && a.splice(n, 1);
      }, t.prototype.has = function(r) {
        return !!~e(this.__entries__, r);
      }, t.prototype.clear = function() {
        this.__entries__.splice(0);
      }, t.prototype.forEach = function(r, a) {
        a === void 0 && (a = null);
        for (var n = 0, i = this.__entries__; n < i.length; n++) {
          var s = i[n];
          r.call(a, s[1], s[0]);
        }
      }, t;
    }()
  );
}(), Yn = typeof window < "u" && typeof document < "u" && window.document === document, Mr = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), dc = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(Mr) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
}(), vc = 2;
function mc(e, t) {
  var r = !1, a = !1, n = 0;
  function i() {
    r && (r = !1, e()), a && o();
  }
  function s() {
    dc(i);
  }
  function o() {
    var l = Date.now();
    if (r) {
      if (l - n < vc)
        return;
      a = !0;
    } else
      r = !0, a = !1, setTimeout(s, t);
    n = l;
  }
  return o;
}
var pc = 20, gc = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], hc = typeof MutationObserver < "u", yc = (
  /** @class */
  function() {
    function e() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = mc(this.refresh.bind(this), pc);
    }
    return e.prototype.addObserver = function(t) {
      ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_();
    }, e.prototype.removeObserver = function(t) {
      var r = this.observers_, a = r.indexOf(t);
      ~a && r.splice(a, 1), !r.length && this.connected_ && this.disconnect_();
    }, e.prototype.refresh = function() {
      var t = this.updateObservers_();
      t && this.refresh();
    }, e.prototype.updateObservers_ = function() {
      var t = this.observers_.filter(function(r) {
        return r.gatherActive(), r.hasActive();
      });
      return t.forEach(function(r) {
        return r.broadcastActive();
      }), t.length > 0;
    }, e.prototype.connect_ = function() {
      !Yn || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), hc ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !Yn || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, e.prototype.onTransitionEnd_ = function(t) {
      var r = t.propertyName, a = r === void 0 ? "" : r, n = gc.some(function(i) {
        return !!~a.indexOf(i);
      });
      n && this.refresh();
    }, e.getInstance = function() {
      return this.instance_ || (this.instance_ = new e()), this.instance_;
    }, e.instance_ = null, e;
  }()
), Rs = function(e, t) {
  for (var r = 0, a = Object.keys(t); r < a.length; r++) {
    var n = a[r];
    Object.defineProperty(e, n, {
      value: t[n],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return e;
}, ht = function(e) {
  var t = e && e.ownerDocument && e.ownerDocument.defaultView;
  return t || Mr;
}, Ys = Yr(0, 0, 0, 0);
function jr(e) {
  return parseFloat(e) || 0;
}
function ui(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  return t.reduce(function(a, n) {
    var i = e["border-" + n + "-width"];
    return a + jr(i);
  }, 0);
}
function bc(e) {
  for (var t = ["top", "right", "bottom", "left"], r = {}, a = 0, n = t; a < n.length; a++) {
    var i = n[a], s = e["padding-" + i];
    r[i] = jr(s);
  }
  return r;
}
function xc(e) {
  var t = e.getBBox();
  return Yr(0, 0, t.width, t.height);
}
function Mc(e) {
  var t = e.clientWidth, r = e.clientHeight;
  if (!t && !r)
    return Ys;
  var a = ht(e).getComputedStyle(e), n = bc(a), i = n.left + n.right, s = n.top + n.bottom, o = jr(a.width), l = jr(a.height);
  if (a.boxSizing === "border-box" && (Math.round(o + i) !== t && (o -= ui(a, "left", "right") + i), Math.round(l + s) !== r && (l -= ui(a, "top", "bottom") + s)), !Ec(e)) {
    var c = Math.round(o + i) - t, f = Math.round(l + s) - r;
    Math.abs(c) !== 1 && (o -= c), Math.abs(f) !== 1 && (l -= f);
  }
  return Yr(n.left, n.top, o, l);
}
var jc = function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof ht(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof ht(e).SVGElement && typeof e.getBBox == "function";
  };
}();
function Ec(e) {
  return e === ht(e).document.documentElement;
}
function Nc(e) {
  return Yn ? jc(e) ? xc(e) : Mc(e) : Ys;
}
function Ac(e) {
  var t = e.x, r = e.y, a = e.width, n = e.height, i = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, s = Object.create(i.prototype);
  return Rs(s, {
    x: t,
    y: r,
    width: a,
    height: n,
    top: r,
    right: t + a,
    bottom: n + r,
    left: t
  }), s;
}
function Yr(e, t, r, a) {
  return { x: e, y: t, width: r, height: a };
}
var wc = (
  /** @class */
  function() {
    function e(t) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Yr(0, 0, 0, 0), this.target = t;
    }
    return e.prototype.isActive = function() {
      var t = Nc(this.target);
      return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
    }, e.prototype.broadcastRect = function() {
      var t = this.contentRect_;
      return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
    }, e;
  }()
), Sc = (
  /** @class */
  function() {
    function e(t, r) {
      var a = Ac(r);
      Rs(this, { target: t, contentRect: a });
    }
    return e;
  }()
), Oc = (
  /** @class */
  function() {
    function e(t, r, a) {
      if (this.activeObservations_ = [], this.observations_ = new Ls(), typeof t != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = t, this.controller_ = r, this.callbackCtx_ = a;
    }
    return e.prototype.observe = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof ht(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var r = this.observations_;
        r.has(t) || (r.set(t, new wc(t)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, e.prototype.unobserve = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof ht(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var r = this.observations_;
        r.has(t) && (r.delete(t), r.size || this.controller_.removeObserver(this));
      }
    }, e.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, e.prototype.gatherActive = function() {
      var t = this;
      this.clearActive(), this.observations_.forEach(function(r) {
        r.isActive() && t.activeObservations_.push(r);
      });
    }, e.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var t = this.callbackCtx_, r = this.activeObservations_.map(function(a) {
          return new Sc(a.target, a.broadcastRect());
        });
        this.callback_.call(t, r, t), this.clearActive();
      }
    }, e.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, e.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, e;
  }()
), Qs = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new Ls(), Us = (
  /** @class */
  function() {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var r = yc.getInstance(), a = new Oc(t, r, this);
      Qs.set(this, a);
    }
    return e;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(e) {
  Us.prototype[e] = function() {
    var t;
    return (t = Qs.get(this))[e].apply(t, arguments);
  };
});
var Tc = function() {
  return typeof Mr.ResizeObserver < "u" ? Mr.ResizeObserver : Us;
}();
const Ic = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Tc
}, Symbol.toStringTag, { value: "Module" })), Dc = /* @__PURE__ */ Xo(Ic);
Object.defineProperty(Cr, "__esModule", {
  value: !0
});
Cr.InnerSlider = void 0;
var Ee = Ht(Ae), kc = Ht(hs), Cc = Ht(Nu), Pc = Ht(Pr), ve = O, zc = Lr, Lc = Rr, ci = gt, Rc = Ht(Dc);
function Ht(e) {
  return e && e.__esModule ? e : { default: e };
}
function Er(e) {
  "@babel/helpers - typeof";
  return Er = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Er(e);
}
function Nr() {
  return Nr = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Nr.apply(this, arguments);
}
function Yc(e, t) {
  if (e == null)
    return {};
  var r = Qc(e, t), a, n;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++)
      a = i[n], !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]);
  }
  return r;
}
function Qc(e, t) {
  if (e == null)
    return {};
  var r = {}, a = Object.keys(e), n, i;
  for (i = 0; i < a.length; i++)
    n = a[i], !(t.indexOf(n) >= 0) && (r[n] = e[n]);
  return r;
}
function fi(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), r.push.apply(r, a);
  }
  return r;
}
function Y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? fi(Object(r), !0).forEach(function(a) {
      $(e, a, r[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : fi(Object(r)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
    });
  }
  return e;
}
function Uc(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function di(e, t) {
  for (var r = 0; r < t.length; r++) {
    var a = t[r];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
  }
}
function Bc(e, t, r) {
  return t && di(e.prototype, t), r && di(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Fc(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Qn(e, t);
}
function Qn(e, t) {
  return Qn = Object.setPrototypeOf || function(a, n) {
    return a.__proto__ = n, a;
  }, Qn(e, t);
}
function Wc(e) {
  var t = Gc();
  return function() {
    var a = Ar(e), n;
    if (t) {
      var i = Ar(this).constructor;
      n = Reflect.construct(a, arguments, i);
    } else
      n = a.apply(this, arguments);
    return Vc(this, n);
  };
}
function Vc(e, t) {
  if (t && (Er(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return _(e);
}
function _(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Gc() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Ar(e) {
  return Ar = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ar(e);
}
function $(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var Hc = /* @__PURE__ */ function(e) {
  Fc(r, e);
  var t = Wc(r);
  function r(a) {
    var n;
    Uc(this, r), n = t.call(this, a), $(_(n), "listRefHandler", function(s) {
      return n.list = s;
    }), $(_(n), "trackRefHandler", function(s) {
      return n.track = s;
    }), $(_(n), "adaptHeight", function() {
      if (n.props.adaptiveHeight && n.list) {
        var s = n.list.querySelector('[data-index="'.concat(n.state.currentSlide, '"]'));
        n.list.style.height = (0, ve.getHeight)(s) + "px";
      }
    }), $(_(n), "componentDidMount", function() {
      if (n.props.onInit && n.props.onInit(), n.props.lazyLoad) {
        var s = (0, ve.getOnDemandLazySlides)(Y(Y({}, n.props), n.state));
        s.length > 0 && (n.setState(function(l) {
          return {
            lazyLoadedList: l.lazyLoadedList.concat(s)
          };
        }), n.props.onLazyLoad && n.props.onLazyLoad(s));
      }
      var o = Y({
        listRef: n.list,
        trackRef: n.track
      }, n.props);
      n.updateState(o, !0, function() {
        n.adaptHeight(), n.props.autoplay && n.autoPlay("update");
      }), n.props.lazyLoad === "progressive" && (n.lazyLoadTimer = setInterval(n.progressiveLazyLoad, 1e3)), n.ro = new Rc.default(function() {
        n.state.animating ? (n.onWindowResized(!1), n.callbackTimers.push(setTimeout(function() {
          return n.onWindowResized();
        }, n.props.speed))) : n.onWindowResized();
      }), n.ro.observe(n.list), document.querySelectorAll && Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"), function(l) {
        l.onfocus = n.props.pauseOnFocus ? n.onSlideFocus : null, l.onblur = n.props.pauseOnFocus ? n.onSlideBlur : null;
      }), window.addEventListener ? window.addEventListener("resize", n.onWindowResized) : window.attachEvent("onresize", n.onWindowResized);
    }), $(_(n), "componentWillUnmount", function() {
      n.animationEndCallback && clearTimeout(n.animationEndCallback), n.lazyLoadTimer && clearInterval(n.lazyLoadTimer), n.callbackTimers.length && (n.callbackTimers.forEach(function(s) {
        return clearTimeout(s);
      }), n.callbackTimers = []), window.addEventListener ? window.removeEventListener("resize", n.onWindowResized) : window.detachEvent("onresize", n.onWindowResized), n.autoplayTimer && clearInterval(n.autoplayTimer), n.ro.disconnect();
    }), $(_(n), "componentDidUpdate", function(s) {
      if (n.checkImagesLoad(), n.props.onReInit && n.props.onReInit(), n.props.lazyLoad) {
        var o = (0, ve.getOnDemandLazySlides)(Y(Y({}, n.props), n.state));
        o.length > 0 && (n.setState(function(f) {
          return {
            lazyLoadedList: f.lazyLoadedList.concat(o)
          };
        }), n.props.onLazyLoad && n.props.onLazyLoad(o));
      }
      n.adaptHeight();
      var l = Y(Y({
        listRef: n.list,
        trackRef: n.track
      }, n.props), n.state), c = n.didPropsChange(s);
      c && n.updateState(l, c, function() {
        n.state.currentSlide >= Ee.default.Children.count(n.props.children) && n.changeSlide({
          message: "index",
          index: Ee.default.Children.count(n.props.children) - n.props.slidesToShow,
          currentSlide: n.state.currentSlide
        }), n.props.autoplay ? n.autoPlay("update") : n.pause("paused");
      });
    }), $(_(n), "onWindowResized", function(s) {
      n.debouncedResize && n.debouncedResize.cancel(), n.debouncedResize = (0, Cc.default)(function() {
        return n.resizeWindow(s);
      }, 50), n.debouncedResize();
    }), $(_(n), "resizeWindow", function() {
      var s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, o = !!(n.track && n.track.node);
      if (o) {
        var l = Y(Y({
          listRef: n.list,
          trackRef: n.track
        }, n.props), n.state);
        n.updateState(l, s, function() {
          n.props.autoplay ? n.autoPlay("update") : n.pause("paused");
        }), n.setState({
          animating: !1
        }), clearTimeout(n.animationEndCallback), delete n.animationEndCallback;
      }
    }), $(_(n), "updateState", function(s, o, l) {
      var c = (0, ve.initializedState)(s);
      s = Y(Y(Y({}, s), c), {}, {
        slideIndex: c.currentSlide
      });
      var f = (0, ve.getTrackLeft)(s);
      s = Y(Y({}, s), {}, {
        left: f
      });
      var v = (0, ve.getTrackCSS)(s);
      (o || Ee.default.Children.count(n.props.children) !== Ee.default.Children.count(s.children)) && (c.trackStyle = v), n.setState(c, l);
    }), $(_(n), "ssrInit", function() {
      if (n.props.variableWidth) {
        var s = 0, o = 0, l = [], c = (0, ve.getPreClones)(Y(Y(Y({}, n.props), n.state), {}, {
          slideCount: n.props.children.length
        })), f = (0, ve.getPostClones)(Y(Y(Y({}, n.props), n.state), {}, {
          slideCount: n.props.children.length
        }));
        n.props.children.forEach(function(K) {
          l.push(K.props.style.width), s += K.props.style.width;
        });
        for (var v = 0; v < c; v++)
          o += l[l.length - 1 - v], s += l[l.length - 1 - v];
        for (var m = 0; m < f; m++)
          s += l[m];
        for (var x = 0; x < n.state.currentSlide; x++)
          o += l[x];
        var M = {
          width: s + "px",
          left: -o + "px"
        };
        if (n.props.centerMode) {
          var h = "".concat(l[n.state.currentSlide], "px");
          M.left = "calc(".concat(M.left, " + (100% - ").concat(h, ") / 2 ) ");
        }
        return {
          trackStyle: M
        };
      }
      var p = Ee.default.Children.count(n.props.children), b = Y(Y(Y({}, n.props), n.state), {}, {
        slideCount: p
      }), g = (0, ve.getPreClones)(b) + (0, ve.getPostClones)(b) + p, j = 100 / n.props.slidesToShow * g, w = 100 / g, y = -w * ((0, ve.getPreClones)(b) + n.state.currentSlide) * j / 100;
      n.props.centerMode && (y += (100 - w * j / 100) / 2);
      var z = {
        width: j + "%",
        left: y + "%"
      };
      return {
        slideWidth: w + "%",
        trackStyle: z
      };
    }), $(_(n), "checkImagesLoad", function() {
      var s = n.list && n.list.querySelectorAll && n.list.querySelectorAll(".slick-slide img") || [], o = s.length, l = 0;
      Array.prototype.forEach.call(s, function(c) {
        var f = function() {
          return ++l && l >= o && n.onWindowResized();
        };
        if (!c.onclick)
          c.onclick = function() {
            return c.parentNode.focus();
          };
        else {
          var v = c.onclick;
          c.onclick = function() {
            v(), c.parentNode.focus();
          };
        }
        c.onload || (n.props.lazyLoad ? c.onload = function() {
          n.adaptHeight(), n.callbackTimers.push(setTimeout(n.onWindowResized, n.props.speed));
        } : (c.onload = f, c.onerror = function() {
          f(), n.props.onLazyLoadError && n.props.onLazyLoadError();
        }));
      });
    }), $(_(n), "progressiveLazyLoad", function() {
      for (var s = [], o = Y(Y({}, n.props), n.state), l = n.state.currentSlide; l < n.state.slideCount + (0, ve.getPostClones)(o); l++)
        if (n.state.lazyLoadedList.indexOf(l) < 0) {
          s.push(l);
          break;
        }
      for (var c = n.state.currentSlide - 1; c >= -(0, ve.getPreClones)(o); c--)
        if (n.state.lazyLoadedList.indexOf(c) < 0) {
          s.push(c);
          break;
        }
      s.length > 0 ? (n.setState(function(f) {
        return {
          lazyLoadedList: f.lazyLoadedList.concat(s)
        };
      }), n.props.onLazyLoad && n.props.onLazyLoad(s)) : n.lazyLoadTimer && (clearInterval(n.lazyLoadTimer), delete n.lazyLoadTimer);
    }), $(_(n), "slideHandler", function(s) {
      var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, l = n.props, c = l.asNavFor, f = l.beforeChange, v = l.onLazyLoad, m = l.speed, x = l.afterChange, M = n.state.currentSlide, h = (0, ve.slideHandler)(Y(Y(Y({
        index: s
      }, n.props), n.state), {}, {
        trackRef: n.track,
        useCSS: n.props.useCSS && !o
      })), p = h.state, b = h.nextState;
      if (p) {
        f && f(M, p.currentSlide);
        var g = p.lazyLoadedList.filter(function(j) {
          return n.state.lazyLoadedList.indexOf(j) < 0;
        });
        v && g.length > 0 && v(g), !n.props.waitForAnimate && n.animationEndCallback && (clearTimeout(n.animationEndCallback), x && x(M), delete n.animationEndCallback), n.setState(p, function() {
          c && n.asNavForIndex !== s && (n.asNavForIndex = s, c.innerSlider.slideHandler(s)), b && (n.animationEndCallback = setTimeout(function() {
            var j = b.animating, w = Yc(b, ["animating"]);
            n.setState(w, function() {
              n.callbackTimers.push(setTimeout(function() {
                return n.setState({
                  animating: j
                });
              }, 10)), x && x(p.currentSlide), delete n.animationEndCallback;
            });
          }, m));
        });
      }
    }), $(_(n), "changeSlide", function(s) {
      var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, l = Y(Y({}, n.props), n.state), c = (0, ve.changeSlide)(l, s);
      if (!(c !== 0 && !c) && (o === !0 ? n.slideHandler(c, o) : n.slideHandler(c), n.props.autoplay && n.autoPlay("update"), n.props.focusOnSelect)) {
        var f = n.list.querySelectorAll(".slick-current");
        f[0] && f[0].focus();
      }
    }), $(_(n), "clickHandler", function(s) {
      n.clickable === !1 && (s.stopPropagation(), s.preventDefault()), n.clickable = !0;
    }), $(_(n), "keyHandler", function(s) {
      var o = (0, ve.keyHandler)(s, n.props.accessibility, n.props.rtl);
      o !== "" && n.changeSlide({
        message: o
      });
    }), $(_(n), "selectHandler", function(s) {
      n.changeSlide(s);
    }), $(_(n), "disableBodyScroll", function() {
      var s = function(l) {
        l = l || window.event, l.preventDefault && l.preventDefault(), l.returnValue = !1;
      };
      window.ontouchmove = s;
    }), $(_(n), "enableBodyScroll", function() {
      window.ontouchmove = null;
    }), $(_(n), "swipeStart", function(s) {
      n.props.verticalSwiping && n.disableBodyScroll();
      var o = (0, ve.swipeStart)(s, n.props.swipe, n.props.draggable);
      o !== "" && n.setState(o);
    }), $(_(n), "swipeMove", function(s) {
      var o = (0, ve.swipeMove)(s, Y(Y(Y({}, n.props), n.state), {}, {
        trackRef: n.track,
        listRef: n.list,
        slideIndex: n.state.currentSlide
      }));
      o && (o.swiping && (n.clickable = !1), n.setState(o));
    }), $(_(n), "swipeEnd", function(s) {
      var o = (0, ve.swipeEnd)(s, Y(Y(Y({}, n.props), n.state), {}, {
        trackRef: n.track,
        listRef: n.list,
        slideIndex: n.state.currentSlide
      }));
      if (o) {
        var l = o.triggerSlideHandler;
        delete o.triggerSlideHandler, n.setState(o), l !== void 0 && (n.slideHandler(l), n.props.verticalSwiping && n.enableBodyScroll());
      }
    }), $(_(n), "touchEnd", function(s) {
      n.swipeEnd(s), n.clickable = !0;
    }), $(_(n), "slickPrev", function() {
      n.callbackTimers.push(setTimeout(function() {
        return n.changeSlide({
          message: "previous"
        });
      }, 0));
    }), $(_(n), "slickNext", function() {
      n.callbackTimers.push(setTimeout(function() {
        return n.changeSlide({
          message: "next"
        });
      }, 0));
    }), $(_(n), "slickGoTo", function(s) {
      var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      if (s = Number(s), isNaN(s))
        return "";
      n.callbackTimers.push(setTimeout(function() {
        return n.changeSlide({
          message: "index",
          index: s,
          currentSlide: n.state.currentSlide
        }, o);
      }, 0));
    }), $(_(n), "play", function() {
      var s;
      if (n.props.rtl)
        s = n.state.currentSlide - n.props.slidesToScroll;
      else if ((0, ve.canGoNext)(Y(Y({}, n.props), n.state)))
        s = n.state.currentSlide + n.props.slidesToScroll;
      else
        return !1;
      n.slideHandler(s);
    }), $(_(n), "autoPlay", function(s) {
      n.autoplayTimer && clearInterval(n.autoplayTimer);
      var o = n.state.autoplaying;
      if (s === "update") {
        if (o === "hovered" || o === "focused" || o === "paused")
          return;
      } else if (s === "leave") {
        if (o === "paused" || o === "focused")
          return;
      } else if (s === "blur" && (o === "paused" || o === "hovered"))
        return;
      n.autoplayTimer = setInterval(n.play, n.props.autoplaySpeed + 50), n.setState({
        autoplaying: "playing"
      });
    }), $(_(n), "pause", function(s) {
      n.autoplayTimer && (clearInterval(n.autoplayTimer), n.autoplayTimer = null);
      var o = n.state.autoplaying;
      s === "paused" ? n.setState({
        autoplaying: "paused"
      }) : s === "focused" ? (o === "hovered" || o === "playing") && n.setState({
        autoplaying: "focused"
      }) : o === "playing" && n.setState({
        autoplaying: "hovered"
      });
    }), $(_(n), "onDotsOver", function() {
      return n.props.autoplay && n.pause("hovered");
    }), $(_(n), "onDotsLeave", function() {
      return n.props.autoplay && n.state.autoplaying === "hovered" && n.autoPlay("leave");
    }), $(_(n), "onTrackOver", function() {
      return n.props.autoplay && n.pause("hovered");
    }), $(_(n), "onTrackLeave", function() {
      return n.props.autoplay && n.state.autoplaying === "hovered" && n.autoPlay("leave");
    }), $(_(n), "onSlideFocus", function() {
      return n.props.autoplay && n.pause("focused");
    }), $(_(n), "onSlideBlur", function() {
      return n.props.autoplay && n.state.autoplaying === "focused" && n.autoPlay("blur");
    }), $(_(n), "render", function() {
      var s = (0, Pc.default)("slick-slider", n.props.className, {
        "slick-vertical": n.props.vertical,
        "slick-initialized": !0
      }), o = Y(Y({}, n.props), n.state), l = (0, ve.extractObject)(o, ["fade", "cssEase", "speed", "infinite", "centerMode", "focusOnSelect", "currentSlide", "lazyLoad", "lazyLoadedList", "rtl", "slideWidth", "slideHeight", "listHeight", "vertical", "slidesToShow", "slidesToScroll", "slideCount", "trackStyle", "variableWidth", "unslick", "centerPadding", "targetSlide", "useCSS"]), c = n.props.pauseOnHover;
      l = Y(Y({}, l), {}, {
        onMouseEnter: c ? n.onTrackOver : null,
        onMouseLeave: c ? n.onTrackLeave : null,
        onMouseOver: c ? n.onTrackOver : null,
        focusOnSelect: n.props.focusOnSelect && n.clickable ? n.selectHandler : null
      });
      var f;
      if (n.props.dots === !0 && n.state.slideCount >= n.props.slidesToShow) {
        var v = (0, ve.extractObject)(o, ["dotsClass", "slideCount", "slidesToShow", "currentSlide", "slidesToScroll", "clickHandler", "children", "customPaging", "infinite", "appendDots"]), m = n.props.pauseOnDotsHover;
        v = Y(Y({}, v), {}, {
          clickHandler: n.changeSlide,
          onMouseEnter: m ? n.onDotsLeave : null,
          onMouseOver: m ? n.onDotsOver : null,
          onMouseLeave: m ? n.onDotsLeave : null
        }), f = /* @__PURE__ */ Ee.default.createElement(Lc.Dots, v);
      }
      var x, M, h = (0, ve.extractObject)(o, ["infinite", "centerMode", "currentSlide", "slideCount", "slidesToShow", "prevArrow", "nextArrow"]);
      h.clickHandler = n.changeSlide, n.props.arrows && (x = /* @__PURE__ */ Ee.default.createElement(ci.PrevArrow, h), M = /* @__PURE__ */ Ee.default.createElement(ci.NextArrow, h));
      var p = null;
      n.props.vertical && (p = {
        height: n.state.listHeight
      });
      var b = null;
      n.props.vertical === !1 ? n.props.centerMode === !0 && (b = {
        padding: "0px " + n.props.centerPadding
      }) : n.props.centerMode === !0 && (b = {
        padding: n.props.centerPadding + " 0px"
      });
      var g = Y(Y({}, p), b), j = n.props.touchMove, w = {
        className: "slick-list",
        style: g,
        onClick: n.clickHandler,
        onMouseDown: j ? n.swipeStart : null,
        onMouseMove: n.state.dragging && j ? n.swipeMove : null,
        onMouseUp: j ? n.swipeEnd : null,
        onMouseLeave: n.state.dragging && j ? n.swipeEnd : null,
        onTouchStart: j ? n.swipeStart : null,
        onTouchMove: n.state.dragging && j ? n.swipeMove : null,
        onTouchEnd: j ? n.touchEnd : null,
        onTouchCancel: n.state.dragging && j ? n.swipeEnd : null,
        onKeyDown: n.props.accessibility ? n.keyHandler : null
      }, y = {
        className: s,
        dir: "ltr",
        style: n.props.style
      };
      return n.props.unslick && (w = {
        className: "slick-list"
      }, y = {
        className: s
      }), /* @__PURE__ */ Ee.default.createElement("div", y, n.props.unslick ? "" : x, /* @__PURE__ */ Ee.default.createElement("div", Nr({
        ref: n.listRefHandler
      }, w), /* @__PURE__ */ Ee.default.createElement(zc.Track, Nr({
        ref: n.trackRefHandler
      }, l), n.props.children)), n.props.unslick ? "" : M, n.props.unslick ? "" : f);
    }), n.list = null, n.track = null, n.state = Y(Y({}, kc.default), {}, {
      currentSlide: n.props.initialSlide,
      slideCount: Ee.default.Children.count(n.props.children)
    }), n.callbackTimers = [], n.clickable = !0, n.debouncedResize = null;
    var i = n.ssrInit();
    return n.state = Y(Y({}, n.state), i), n;
  }
  return Bc(r, [{
    key: "didPropsChange",
    value: function(n) {
      for (var i = !1, s = 0, o = Object.keys(this.props); s < o.length; s++) {
        var l = o[s];
        if (!n.hasOwnProperty(l)) {
          i = !0;
          break;
        }
        if (!(Er(n[l]) === "object" || typeof n[l] == "function") && n[l] !== this.props[l]) {
          i = !0;
          break;
        }
      }
      return i || Ee.default.Children.count(this.props.children) !== Ee.default.Children.count(n.children);
    }
  }]), r;
}(Ee.default.Component);
Cr.InnerSlider = Hc;
var qc = function(e) {
  return e.replace(/[A-Z]/g, function(t) {
    return "-" + t.toLowerCase();
  }).toLowerCase();
}, Kc = qc, Xc = Kc, Zc = function(e) {
  var t = /[height|width]$/;
  return t.test(e);
}, vi = function(e) {
  var t = "", r = Object.keys(e);
  return r.forEach(function(a, n) {
    var i = e[a];
    a = Xc(a), Zc(a) && typeof i == "number" && (i = i + "px"), i === !0 ? t += a : i === !1 ? t += "not " + a : t += "(" + a + ": " + i + ")", n < r.length - 1 && (t += " and ");
  }), t;
}, Jc = function(e) {
  var t = "";
  return typeof e == "string" ? e : e instanceof Array ? (e.forEach(function(r, a) {
    t += vi(r), a < e.length - 1 && (t += ", ");
  }), t) : vi(e);
}, _c = Jc, Bs = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  var t = r(Ae);
  function r(i) {
    return i && i.__esModule ? i : { default: i };
  }
  var a = {
    accessibility: !0,
    adaptiveHeight: !1,
    afterChange: null,
    appendDots: function(s) {
      return /* @__PURE__ */ t.default.createElement("ul", {
        style: {
          display: "block"
        }
      }, s);
    },
    arrows: !0,
    autoplay: !1,
    autoplaySpeed: 3e3,
    beforeChange: null,
    centerMode: !1,
    centerPadding: "50px",
    className: "",
    cssEase: "ease",
    customPaging: function(s) {
      return /* @__PURE__ */ t.default.createElement("button", null, s + 1);
    },
    dots: !1,
    dotsClass: "slick-dots",
    draggable: !0,
    easing: "linear",
    edgeFriction: 0.35,
    fade: !1,
    focusOnSelect: !1,
    infinite: !0,
    initialSlide: 0,
    lazyLoad: null,
    nextArrow: null,
    onEdge: null,
    onInit: null,
    onLazyLoadError: null,
    onReInit: null,
    pauseOnDotsHover: !1,
    pauseOnFocus: !1,
    pauseOnHover: !0,
    prevArrow: null,
    responsive: null,
    rows: 1,
    rtl: !1,
    slide: "div",
    slidesPerRow: 1,
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 500,
    swipe: !0,
    swipeEvent: null,
    swipeToSlide: !1,
    touchMove: !0,
    touchThreshold: 5,
    useCSS: !0,
    useTransform: !0,
    variableWidth: !1,
    vertical: !1,
    waitForAnimate: !0
  }, n = a;
  e.default = n;
})(Bs);
var tn, mi;
function $c() {
  if (mi)
    return tn;
  mi = 1;
  function e(t) {
    this.options = t, !t.deferSetup && this.setup();
  }
  return e.prototype = {
    constructor: e,
    /**
     * coordinates setup of the handler
     *
     * @function
     */
    setup: function() {
      this.options.setup && this.options.setup(), this.initialised = !0;
    },
    /**
     * coordinates setup and triggering of the handler
     *
     * @function
     */
    on: function() {
      !this.initialised && this.setup(), this.options.match && this.options.match();
    },
    /**
     * coordinates the unmatch event for the handler
     *
     * @function
     */
    off: function() {
      this.options.unmatch && this.options.unmatch();
    },
    /**
     * called when a handler is to be destroyed.
     * delegates to the destroy or unmatch callbacks, depending on availability.
     *
     * @function
     */
    destroy: function() {
      this.options.destroy ? this.options.destroy() : this.off();
    },
    /**
     * determines equality by reference.
     * if object is supplied compare options, if function, compare match callback
     *
     * @function
     * @param {object || function} [target] the target for comparison
     */
    equals: function(t) {
      return this.options === t || this.options.match === t;
    }
  }, tn = e, tn;
}
var rn, pi;
function Fs() {
  if (pi)
    return rn;
  pi = 1;
  function e(a, n) {
    var i = 0, s = a.length, o;
    for (i; i < s && (o = n(a[i], i), o !== !1); i++)
      ;
  }
  function t(a) {
    return Object.prototype.toString.apply(a) === "[object Array]";
  }
  function r(a) {
    return typeof a == "function";
  }
  return rn = {
    isFunction: r,
    isArray: t,
    each: e
  }, rn;
}
var nn, gi;
function ef() {
  if (gi)
    return nn;
  gi = 1;
  var e = $c(), t = Fs().each;
  function r(a, n) {
    this.query = a, this.isUnconditional = n, this.handlers = [], this.mql = window.matchMedia(a);
    var i = this;
    this.listener = function(s) {
      i.mql = s.currentTarget || s, i.assess();
    }, this.mql.addListener(this.listener);
  }
  return r.prototype = {
    constuctor: r,
    /**
     * add a handler for this query, triggering if already active
     *
     * @param {object} handler
     * @param {function} handler.match callback for when query is activated
     * @param {function} [handler.unmatch] callback for when query is deactivated
     * @param {function} [handler.setup] callback for immediate execution when a query handler is registered
     * @param {boolean} [handler.deferSetup=false] should the setup callback be deferred until the first time the handler is matched?
     */
    addHandler: function(a) {
      var n = new e(a);
      this.handlers.push(n), this.matches() && n.on();
    },
    /**
     * removes the given handler from the collection, and calls it's destroy methods
     *
     * @param {object || function} handler the handler to remove
     */
    removeHandler: function(a) {
      var n = this.handlers;
      t(n, function(i, s) {
        if (i.equals(a))
          return i.destroy(), !n.splice(s, 1);
      });
    },
    /**
     * Determine whether the media query should be considered a match
     *
     * @return {Boolean} true if media query can be considered a match, false otherwise
     */
    matches: function() {
      return this.mql.matches || this.isUnconditional;
    },
    /**
     * Clears all handlers and unbinds events
     */
    clear: function() {
      t(this.handlers, function(a) {
        a.destroy();
      }), this.mql.removeListener(this.listener), this.handlers.length = 0;
    },
    /*
        * Assesses the query, turning on all handlers if it matches, turning them off if it doesn't match
        */
    assess: function() {
      var a = this.matches() ? "on" : "off";
      t(this.handlers, function(n) {
        n[a]();
      });
    }
  }, nn = r, nn;
}
var an, hi;
function tf() {
  if (hi)
    return an;
  hi = 1;
  var e = ef(), t = Fs(), r = t.each, a = t.isFunction, n = t.isArray;
  function i() {
    if (!window.matchMedia)
      throw new Error("matchMedia not present, legacy browsers require a polyfill");
    this.queries = {}, this.browserIsIncapable = !window.matchMedia("only all").matches;
  }
  return i.prototype = {
    constructor: i,
    /**
     * Registers a handler for the given media query
     *
     * @param {string} q the media query
     * @param {object || Array || Function} options either a single query handler object, a function, or an array of query handlers
     * @param {function} options.match fired when query matched
     * @param {function} [options.unmatch] fired when a query is no longer matched
     * @param {function} [options.setup] fired when handler first triggered
     * @param {boolean} [options.deferSetup=false] whether setup should be run immediately or deferred until query is first matched
     * @param {boolean} [shouldDegrade=false] whether this particular media query should always run on incapable browsers
     */
    register: function(s, o, l) {
      var c = this.queries, f = l && this.browserIsIncapable;
      return c[s] || (c[s] = new e(s, f)), a(o) && (o = { match: o }), n(o) || (o = [o]), r(o, function(v) {
        a(v) && (v = { match: v }), c[s].addHandler(v);
      }), this;
    },
    /**
     * unregisters a query and all it's handlers, or a specific handler for a query
     *
     * @param {string} q the media query to target
     * @param {object || function} [handler] specific handler to unregister
     */
    unregister: function(s, o) {
      var l = this.queries[s];
      return l && (o ? l.removeHandler(o) : (l.clear(), delete this.queries[s])), this;
    }
  }, an = i, an;
}
var sn, yi;
function rf() {
  if (yi)
    return sn;
  yi = 1;
  var e = tf();
  return sn = new e(), sn;
}
(function(e) {
  function t(T) {
    "@babel/helpers - typeof";
    return t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(I) {
      return typeof I;
    } : function(I) {
      return I && typeof Symbol == "function" && I.constructor === Symbol && I !== Symbol.prototype ? "symbol" : typeof I;
    }, t(T);
  }
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  var r = o(Ae), a = Cr, n = o(_c), i = o(Bs), s = O;
  function o(T) {
    return T && T.__esModule ? T : { default: T };
  }
  function l() {
    return l = Object.assign || function(T) {
      for (var I = 1; I < arguments.length; I++) {
        var Q = arguments[I];
        for (var W in Q)
          Object.prototype.hasOwnProperty.call(Q, W) && (T[W] = Q[W]);
      }
      return T;
    }, l.apply(this, arguments);
  }
  function c(T, I) {
    var Q = Object.keys(T);
    if (Object.getOwnPropertySymbols) {
      var W = Object.getOwnPropertySymbols(T);
      I && (W = W.filter(function(R) {
        return Object.getOwnPropertyDescriptor(T, R).enumerable;
      })), Q.push.apply(Q, W);
    }
    return Q;
  }
  function f(T) {
    for (var I = 1; I < arguments.length; I++) {
      var Q = arguments[I] != null ? arguments[I] : {};
      I % 2 ? c(Object(Q), !0).forEach(function(W) {
        y(T, W, Q[W]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(T, Object.getOwnPropertyDescriptors(Q)) : c(Object(Q)).forEach(function(W) {
        Object.defineProperty(T, W, Object.getOwnPropertyDescriptor(Q, W));
      });
    }
    return T;
  }
  function v(T, I) {
    if (!(T instanceof I))
      throw new TypeError("Cannot call a class as a function");
  }
  function m(T, I) {
    for (var Q = 0; Q < I.length; Q++) {
      var W = I[Q];
      W.enumerable = W.enumerable || !1, W.configurable = !0, "value" in W && (W.writable = !0), Object.defineProperty(T, W.key, W);
    }
  }
  function x(T, I, Q) {
    return I && m(T.prototype, I), Q && m(T, Q), Object.defineProperty(T, "prototype", { writable: !1 }), T;
  }
  function M(T, I) {
    if (typeof I != "function" && I !== null)
      throw new TypeError("Super expression must either be null or a function");
    T.prototype = Object.create(I && I.prototype, { constructor: { value: T, writable: !0, configurable: !0 } }), Object.defineProperty(T, "prototype", { writable: !1 }), I && h(T, I);
  }
  function h(T, I) {
    return h = Object.setPrototypeOf || function(W, R) {
      return W.__proto__ = R, W;
    }, h(T, I);
  }
  function p(T) {
    var I = j();
    return function() {
      var W = w(T), R;
      if (I) {
        var P = w(this).constructor;
        R = Reflect.construct(W, arguments, P);
      } else
        R = W.apply(this, arguments);
      return b(this, R);
    };
  }
  function b(T, I) {
    if (I && (t(I) === "object" || typeof I == "function"))
      return I;
    if (I !== void 0)
      throw new TypeError("Derived constructors may only return object or undefined");
    return g(T);
  }
  function g(T) {
    if (T === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return T;
  }
  function j() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
      return !1;
    if (typeof Proxy == "function")
      return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }
  function w(T) {
    return w = Object.setPrototypeOf ? Object.getPrototypeOf : function(Q) {
      return Q.__proto__ || Object.getPrototypeOf(Q);
    }, w(T);
  }
  function y(T, I, Q) {
    return I in T ? Object.defineProperty(T, I, { value: Q, enumerable: !0, configurable: !0, writable: !0 }) : T[I] = Q, T;
  }
  var z = (0, s.canUseDOM)() && rf(), K = /* @__PURE__ */ function(T) {
    M(Q, T);
    var I = p(Q);
    function Q(W) {
      var R;
      return v(this, Q), R = I.call(this, W), y(g(R), "innerSliderRefHandler", function(P) {
        return R.innerSlider = P;
      }), y(g(R), "slickPrev", function() {
        return R.innerSlider.slickPrev();
      }), y(g(R), "slickNext", function() {
        return R.innerSlider.slickNext();
      }), y(g(R), "slickGoTo", function(P) {
        var me = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        return R.innerSlider.slickGoTo(P, me);
      }), y(g(R), "slickPause", function() {
        return R.innerSlider.pause("paused");
      }), y(g(R), "slickPlay", function() {
        return R.innerSlider.autoPlay("play");
      }), R.state = {
        breakpoint: null
      }, R._responsiveMediaHandlers = [], R;
    }
    return x(Q, [{
      key: "media",
      value: function(R, P) {
        z.register(R, P), this._responsiveMediaHandlers.push({
          query: R,
          handler: P
        });
      }
      // handles responsive breakpoints
    }, {
      key: "componentDidMount",
      value: function() {
        var R = this;
        if (this.props.responsive) {
          var P = this.props.responsive.map(function(le) {
            return le.breakpoint;
          });
          P.sort(function(le, de) {
            return le - de;
          }), P.forEach(function(le, de) {
            var be;
            de === 0 ? be = (0, n.default)({
              minWidth: 0,
              maxWidth: le
            }) : be = (0, n.default)({
              minWidth: P[de - 1] + 1,
              maxWidth: le
            }), (0, s.canUseDOM)() && R.media(be, function() {
              R.setState({
                breakpoint: le
              });
            });
          });
          var me = (0, n.default)({
            minWidth: P.slice(-1)[0]
          });
          (0, s.canUseDOM)() && this.media(me, function() {
            R.setState({
              breakpoint: null
            });
          });
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        this._responsiveMediaHandlers.forEach(function(R) {
          z.unregister(R.query, R.handler);
        });
      }
    }, {
      key: "render",
      value: function() {
        var R = this, P, me;
        this.state.breakpoint ? (me = this.props.responsive.filter(function(U) {
          return U.breakpoint === R.state.breakpoint;
        }), P = me[0].settings === "unslick" ? "unslick" : f(f(f({}, i.default), this.props), me[0].settings)) : P = f(f({}, i.default), this.props), P.centerMode && (P.slidesToScroll > 1 && process.env.NODE_ENV !== "production" && console.warn("slidesToScroll should be equal to 1 in centerMode, you are using ".concat(P.slidesToScroll)), P.slidesToScroll = 1), P.fade && (P.slidesToShow > 1 && process.env.NODE_ENV !== "production" && console.warn("slidesToShow should be equal to 1 when fade is true, you're using ".concat(P.slidesToShow)), P.slidesToScroll > 1 && process.env.NODE_ENV !== "production" && console.warn("slidesToScroll should be equal to 1 when fade is true, you're using ".concat(P.slidesToScroll)), P.slidesToShow = 1, P.slidesToScroll = 1);
        var le = r.default.Children.toArray(this.props.children);
        le = le.filter(function(U) {
          return typeof U == "string" ? !!U.trim() : !!U;
        }), P.variableWidth && (P.rows > 1 || P.slidesPerRow > 1) && (console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"), P.variableWidth = !1);
        for (var de = [], be = null, xe = 0; xe < le.length; xe += P.rows * P.slidesPerRow) {
          for (var Pe = [], E = xe; E < xe + P.rows * P.slidesPerRow; E += P.slidesPerRow) {
            for (var k = [], B = E; B < E + P.slidesPerRow && (P.variableWidth && le[B].props.style && (be = le[B].props.style.width), !(B >= le.length)); B += 1)
              k.push(/* @__PURE__ */ r.default.cloneElement(le[B], {
                key: 100 * xe + 10 * E + B,
                tabIndex: -1,
                style: {
                  width: "".concat(100 / P.slidesPerRow, "%"),
                  display: "inline-block"
                }
              }));
            Pe.push(/* @__PURE__ */ r.default.createElement("div", {
              key: 10 * xe + E
            }, k));
          }
          P.variableWidth ? de.push(/* @__PURE__ */ r.default.createElement("div", {
            key: xe,
            style: {
              width: be
            }
          }, Pe)) : de.push(/* @__PURE__ */ r.default.createElement("div", {
            key: xe
          }, Pe));
        }
        if (P === "unslick") {
          var G = "regular slider " + (this.props.className || "");
          return /* @__PURE__ */ r.default.createElement("div", {
            className: G
          }, le);
        } else
          de.length <= P.slidesToShow && (P.unslick = !0);
        return /* @__PURE__ */ r.default.createElement(a.InnerSlider, l({
          style: this.props.style,
          ref: this.innerSliderRefHandler
        }, P), de);
      }
    }]), Q;
  }(r.default.Component);
  e.default = K;
})(gs);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  var t = r(gs);
  function r(n) {
    return n && n.__esModule ? n : { default: n };
  }
  var a = t.default;
  e.default = a;
})(ps);
const Ws = /* @__PURE__ */ os(ps);
const nf = ({ children: e }) => {
  const t = Ae.Children.toArray(e), r = {
    dots: !0,
    infinite: !0,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: !0,
    autoplaySpeed: 3e3
  };
  return /* @__PURE__ */ u.jsx("div", { className: "vers-h-hero vers-overflow-hidden", children: /* @__PURE__ */ u.jsx(Ws, { ...r, className: "vers-h-vers-h-screen vers-w-screen", children: t.map((a) => a) }) });
}, af = nf, sf = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjYiIGhlaWdodD0iMjYiIHZpZXdCb3g9IjAgMCAyNiAyNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE4Ml8yNjUpIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMyAwQzUuODIgMCAwIDUuODIgMCAxM0MwIDIwLjE4IDUuODIgMjYgMTMgMjZDMjAuMTggMjYgMjYgMjAuMTggMjYgMTNDMjYgNS44MiAyMC4xOCAwIDEzIDBaTTkuNSA4QzguNzggOCA4LjM5NiA4LjU1ODY3IDguMjUyIDguODQ1MzNDOC4wODA5MyA5LjIwNTkzIDcuOTk0NzMgOS42MDA5MiA4IDEwQzggMTAuMzk3MyA4LjA3ODY3IDEwLjgwNjcgOC4yNTIgMTEuMTU0N0M4LjM5NiAxMS40NDEzIDguNzc4NjcgMTIgOS41IDEyQzEwLjIyIDEyIDEwLjYwNCAxMS40NDEzIDEwLjc0OCAxMS4xNTQ3QzEwLjkyMTMgMTAuODA4IDExIDEwLjM5NzMgMTEgMTBDMTEgOS42MDI2NyAxMC45MjEzIDkuMTkzMzMgMTAuNzQ4IDguODQ1MzNDMTAuNjA0IDguNTU4NjcgMTAuMjIxMyA4IDkuNSA4Wk0xNS4yNTIgOC44NDUzM0MxNS4zOTYgOC41NTg2NyAxNS43Nzg3IDggMTYuNSA4QzE3LjIyIDggMTcuNjA0IDguNTU4NjcgMTcuNzQ4IDguODQ1MzNDMTcuOTIxMyA5LjE5MiAxOCA5LjYwMjY3IDE4IDEwQzE4IDEwLjM5NzMgMTcuOTIxMyAxMC44MDY3IDE3Ljc0OCAxMS4xNTQ3QzE3LjYwNCAxMS40NDEzIDE3LjIyMTMgMTIgMTYuNSAxMkMxNS43OCAxMiAxNS4zOTYgMTEuNDQxMyAxNS4yNTIgMTEuMTU0N0MxNS4wODA5IDEwLjc5NDEgMTQuOTk0NyAxMC4zOTkxIDE1IDEwQzE1IDkuNjAyNjcgMTUuMDc4NyA5LjE5MzMzIDE1LjI1MiA4Ljg0NTMzWk0xNy45NDkzIDE3Ljk0OTNDMTguMDQ3NiAxNy44NTc4IDE4LjEyNjQgMTcuNzQ3NCAxOC4xODEgMTcuNjI0N0MxOC4yMzU3IDE3LjUwMjEgMTguMjY1MSAxNy4zNjk2IDE4LjI2NzUgMTcuMjM1NEMxOC4yNjk4IDE3LjEwMTEgMTguMjQ1MSAxNi45Njc3IDE4LjE5NDggMTYuODQzMkMxOC4xNDQ1IDE2LjcxODcgMTguMDY5NyAxNi42MDU2IDE3Ljk3NDcgMTYuNTEwNkMxNy44Nzk4IDE2LjQxNTcgMTcuNzY2NiAxNi4zNDA4IDE3LjY0MjEgMTYuMjkwNUMxNy41MTc2IDE2LjI0MDIgMTcuMzg0MiAxNi4yMTU1IDE3LjI1IDE2LjIxNzlDMTcuMTE1NyAxNi4yMjAyIDE2Ljk4MzMgMTYuMjQ5NiAxNi44NjA2IDE2LjMwNDNDMTYuNzM4IDE2LjM1ODkgMTYuNjI3NiAxNi40Mzc4IDE2LjUzNiAxNi41MzZDMTYuMDcxNyAxNy4wMDA0IDE1LjUyMDQgMTcuMzY4OCAxNC45MTM3IDE3LjYyMDJDMTQuMzA3IDE3Ljg3MTYgMTMuNjU2NyAxOC4wMDA5IDEzIDE4LjAwMDlDMTIuMzQzMyAxOC4wMDA5IDExLjY5MyAxNy44NzE2IDExLjA4NjMgMTcuNjIwMkMxMC40Nzk2IDE3LjM2ODggOS45MjgzMSAxNy4wMDA0IDkuNDY0IDE2LjUzNkM5LjI3NDQzIDE2LjM1OTQgOS4wMjM3MSAxNi4yNjMyIDguNzY0NjQgMTYuMjY3OEM4LjUwNTU3IDE2LjI3MjMgOC4yNTgzOSAxNi4zNzczIDguMDc1MTcgMTYuNTYwNUM3Ljg5MTk1IDE2Ljc0MzcgNy43ODcgMTYuOTkwOSA3Ljc4MjQzIDE3LjI1QzcuNzc3ODYgMTcuNTA5IDcuODc0MDMgMTcuNzU5OCA4LjA1MDY3IDE3Ljk0OTNDOS4zNjMzOSAxOS4yNjE4IDExLjE0MzcgMTkuOTk5MiAxMyAxOS45OTkyQzE0Ljg1NjMgMTkuOTk5MiAxNi42MzY2IDE5LjI2MTggMTcuOTQ5MyAxNy45NDkzWiIgZmlsbD0id2hpdGUiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8xODJfMjY1Ij4KPHJlY3Qgd2lkdGg9IjI2IiBoZWlnaHQ9IjI2IiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=", of = {
  face: { src: sf, alt: "face Icon" }
  // facebook: { src: facebook, alt: 'Facebook Icon' },
  // twitter: { src: twitter, alt: 'Twitter Icon' },
}, lf = ({ type: e }) => {
  const { src: t, alt: r } = of[e];
  return /* @__PURE__ */ u.jsx("img", { src: t, alt: r });
}, uf = lf, cf = "vers-px-3 vers-py-2 sm:vers-p-3 vers-text-md sm:vers-text-lg vers-text-white vers-font-bold vers-flex vers-gap-2 vers-duration-500", ff = {
  primary: "vers-bg-primary hover:vers-bg-green",
  secondary: "vers-bg-tertiary hover:vers-bg-green-dark"
}, df = {
  face: /* @__PURE__ */ u.jsx(uf, { type: "face" })
}, vf = ({ color: e = "primary", text: t = "Mi Boton", showIcon: r = !1, iconType: a = "face", onClick: n }) => {
  const i = `${ff[e]} ${cf}`;
  return /* @__PURE__ */ u.jsxs("button", { className: i, onClick: n, children: [
    r && /* @__PURE__ */ u.jsx("div", { className: "vers-w-3", children: df[a] }),
    t
  ] });
}, rt = vf, mf = ({ text: e, children: t }) => /* @__PURE__ */ u.jsxs("div", { className: "vers-flex vers-flex-col vers-gap-2 md:vers-gap-4", children: [
  /* @__PURE__ */ u.jsx("h3", { className: "vers-text-2xl md:vers-text-3xl vers-uppercase vers-font-bold vers-border-solid vers-border-l-4 vers-border-primary vers-pl-1 md:vers-pl-2", children: e }),
  /* @__PURE__ */ u.jsx("div", { className: "vers-bg-xxxxgreen", children: t })
] }), Ie = mf, It = ({ children: e, img: t }) => /* @__PURE__ */ u.jsxs("section", { className: "vers-h-hero vers-flex vers-items-end md:vers-justify-end vers-relative vers-overflow-hidden", children: [
  /* @__PURE__ */ u.jsx("img", { className: "vers-w-full vers-object-cover vers-absolute vers-h-full", src: t, alt: "Imagen de chicas reunidas en circulo" }),
  /* @__PURE__ */ u.jsx("div", { className: " vers-h-full vers-w-full md:vers-w-1/2 md:vers-h-full vers-z-0 vers-justify-end vers-flex", children: e })
] }), pf = () => {
  const e = qo(null), [t, r] = Ct(0), [a, n] = Ct(0);
  return is(() => {
    const i = e.current;
    if (!i)
      return;
    const s = new ResizeObserver((o) => {
      for (const l of o) {
        const { width: c, height: f } = l.contentRect;
        r(Math.floor(c)), n(Math.floor(f));
      }
    });
    return s.observe(i), () => {
      s.unobserve(i);
    };
  }, []), /* @__PURE__ */ u.jsxs("div", { className: "vers-w- vers-flex vers-flex-col vers-bg-purplexxxxxxx-100 vers-gap-2", children: [
    /* @__PURE__ */ u.jsx("div", { className: "vers-w-full", children: /* @__PURE__ */ u.jsx("img", { className: "vers-w-full", src: "/Frame 8.png", alt: "Piezas blancas donde se lee facebook" }) }),
    /* @__PURE__ */ u.jsx("div", { className: "vers-w-full vers-h-[400px] md:vers-h-full vers-bg-light-gray vers-relative vers-max-w-[500px] vers-m-auto", children: /* @__PURE__ */ u.jsx(
      "iframe",
      {
        ref: e,
        className: "vers-border-2 vers-borde-solid versxxx-border-red vers-w-full vers-h-full vers-border-none",
        src: `xxxxxxhttps://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FVESRoficial&tabs=timeline&width=${t}&height=${a}&small_header=true&adapt_container_width=false&hide_cover=false&show_facepile=true&appId`,
        allow: "autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      }
    ) })
  ] });
}, gf = ({ children: e }) => /* @__PURE__ */ u.jsx("main", { className: "vers-px-2 vers-py-4 md:vers-px-4 md:vers-py-6 lg:vers-p-8 vers-max-w-[1300px] vers-m-auto vers-bgxxxxx-green vers-flex vers-flex-col vers-gap-3 lg:vers-gap-4", children: e }), Je = gf, hf = () => /* @__PURE__ */ u.jsxs("div", { className: "vers-grow vers-flex vers-flex-col", children: [
  /* @__PURE__ */ u.jsxs(af, { children: [
    /* @__PURE__ */ u.jsx(It, { img: "/img1.webp", children: /* @__PURE__ */ u.jsxs("div", { className: "vers-h-full vers-flex vers-flex-col vers-justify-center vers-items-center vers-gap-[50px] md:vers-gap-[120px] vers-w-full md:vers-w-[500px] vers-bg-[rgba(256,256,256,.8)] vers-p-1", children: [
      /* @__PURE__ */ u.jsxs("h2", { className: "vers-text-3xl md:vers-text-5xl vers-font-bold vers-text-primary vers-uppercase vers-text-center", children: [
        "Nuestra ",
        /* @__PURE__ */ u.jsx("br", {}),
        "familia"
      ] }),
      /* @__PURE__ */ u.jsx(rt, { text: "Más informacion" })
    ] }) }),
    /* @__PURE__ */ u.jsx(It, { img: "/img3.webp", children: /* @__PURE__ */ u.jsxs("div", { className: "vers-h-full vers-flex vers-flex-col vers-justify-center vers-items-center vers-gap-[50px] md:vers-gap-[120px] vers-w-full md:vers-w-[500px] vers-bg-[rgba(256,256,256,.8)] vers-p-1", children: [
      /* @__PURE__ */ u.jsxs("h2", { className: "vers-text-3xl md:vers-text-5xl vers-font-bold vers-text-primary vers-uppercase vers-text-center", children: [
        "Biblioteca ",
        /* @__PURE__ */ u.jsx("br", {}),
        "virtual"
      ] }),
      /* @__PURE__ */ u.jsx(kr, { to: "/biblioteca-virtual", children: /* @__PURE__ */ u.jsx(rt, { text: "Más informacion" }) })
    ] }) }),
    /* @__PURE__ */ u.jsx(It, { img: "/img2.webp", children: /* @__PURE__ */ u.jsxs("div", { className: "vers-h-full vers-flex vers-flex-col vers-justify-center vers-items-center vers-gap-[50px] md:vers-gap-[60px] vers-w-full md:vers-w-[500px] vers-bg-[rgba(256,256,256,.85)] vers-p-1", children: [
      /* @__PURE__ */ u.jsxs("h2", { className: "vers-text-3xl md:vers-text-5xl vers-font-bold vers-text-primary vers-uppercase vers-text-center", children: [
        "Quienes",
        /* @__PURE__ */ u.jsx("br", {}),
        "Somos"
      ] }),
      /* @__PURE__ */ u.jsx("p", { className: "vers-text-center vers-text-2xl vers-text-gray-dark", children: "Somos una organización juvenil multidisciplinaria con una misma meta, promover la Educación Sexual." }),
      /* @__PURE__ */ u.jsx(rt, { text: "Más informacion" })
    ] }) })
  ] }),
  /* @__PURE__ */ u.jsx(Je, { children: /* @__PURE__ */ u.jsxs("div", { className: "vers-grid vers-grid-cols-1 md:vers-grid-cols-[1.5fr,2.5fr]   vers-gap-4 lg:vers-gap-6 ", children: [
    /* @__PURE__ */ u.jsx(pf, {}),
    /* @__PURE__ */ u.jsx(Ie, { text: "Líneas temáticas", children: /* @__PURE__ */ u.jsxs("div", { className: "vers-grid vers-grid-cols-2 vers-grid-rows-2", children: [
      /* @__PURE__ */ u.jsx("img", { className: "vers-w-full", src: "/main/Frame 4.png", alt: "Reunion de mujeres" }),
      /* @__PURE__ */ u.jsx("img", { className: "vers-w-full", src: "/main/Frame 5.png", alt: "Reunion de hombres y mujeres" }),
      /* @__PURE__ */ u.jsx("img", { className: "vers-w-full", src: "/main/Frame 6.png", alt: "4 manos juntas" }),
      /* @__PURE__ */ u.jsx("img", { className: "vers-w-full", src: "/main/Frame 7.png", alt: "Paisaje de un campo con varias personas sentadas" })
    ] }) })
  ] }) })
] }), yf = () => /* @__PURE__ */ u.jsx("section", { className: "vers-grow vers-flex vers-flex-col vers-items-center vers-justify-center vers-p-2", children: /* @__PURE__ */ u.jsxs("div", { className: "vers-h-hero vers-flex vers-flex-col vers-items-center vers-justify-center vers-gap-8", children: [
  /* @__PURE__ */ u.jsxs("div", { className: "vers-text-center vers-flex vers-flex-col vers-gap-2", children: [
    /* @__PURE__ */ u.jsx("h2", { className: "vers-text-3xl sm:vers-text-5xl md:vers-text-6xl vers-font-extrabold", children: "¡Ups! Página no encontrada" }),
    /* @__PURE__ */ u.jsx("p", { className: "vers-text-xl sm:vers-text-2xl vers-text-gray", children: "La pagina a la que intenta acceder no existe o ha sido movida." })
  ] }),
  /* @__PURE__ */ u.jsx(kr, { to: "/inicio", relative: "path", children: /* @__PURE__ */ u.jsx(rt, { text: "Ir a la pagina de inicio" }) })
] }) }), bf = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOQAAABuCAYAAAA3fL8zAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAB03SURBVHgB7Z0HuGRVkcdPv3kzvJkhDCCoBB3JiqKCYUUFA4OAKKZ1FXHBAGt2FTF8Br5VWdFPRVQUxRUEUVcEBMlpSJKGLFmFx5AzDEx+75X161Nn+vbtmzq8OOf/fdW3+/bJ94Q6VXXqOhcRERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERHRIUSk5iIiKiJ2lg6hA21TveylNF2pz25vYFfadZrShgRVGrFrv9J6SsNKdyt9t1ar3eciIiI6hw7GrZXuVlqmtEJpqcjIEr2uVBqy67AYRqSB5HfFLUobuYiIiM6hg+hvUhEjqz5y8V0XEWHocxFtQQfQmnpZv0LI+mdt1UduGFbbNVxEhIsDshMsVTrHf5WCYKlRKFnh62E2LkkoYjVCHJBtQoUwCGS+pHSR/lqs12VKXFfYdwbXktaIqz7SYHWc5iIinJf6RbQJHZQPKZu5q35dx/lRxmBkIIbBtY3SH5WeVSG5uDpGTB6gxwu6vPA9SW6CQcu0ltKFbUh6ro57yIiACbtCaielbAhQ0OW9VH+j42PFWan0oNKgEqqHR/X6tK5a477SaFnQSR6ttHNhwCb2VXR1bS27TTYM1JlKqEaWK92j9Vyu/00z1rlquWjLdYwo471KS2gz8slqO73Pdma2y1/Bay57U0w8ntHamu6DrrhclGXEyvUepVe7OnchW2pSSy3YkPM625uULlb6s6Y7VJJuvX30OkN/PldpF6XtlDZXerbz+uLlVr9FSvShx5UuUTpP6VaNv8JF1BtzDaX9lE5TekSKgR7wHqWjlN5iHW+8yj1d6QSlxYllMABd5QNKyzPqcGG63PxW2ltpMCP8wa4NaPj9lW7PSOc867DJsDXL+x1K9yYDF2tucvGKgnKR13ZKl1ZLalUJaMPjxQ/mMHE0pWvXz0jHxZanlQ4lbVldLa204tOUDlT6p3SO65X2Fc82jtng1LwGlI4sKBeTBuqNrAF2DnVPpfeF3JR8F/uviuWaJsW4SFKsv35/g3SF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", xf = "data:image/png;base64,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", Mf = {
  small: "vers-w-[170px]",
  medium: "vers-w-[240px]"
}, Vs = ({ variant: e = "purple", width: t = "small" }) => /* @__PURE__ */ u.jsx("div", { className: Mf[t], children: /* @__PURE__ */ u.jsx("img", { className: "vers-w-full", src: e === "purple" ? xf : bf, alt: "lOGO de VESR" }) }), jf = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEzLjM5NyAyMC45OTY5VjEyLjgwMDlIMTYuMTYyTDE2LjU3MyA5LjU5MTkzSDEzLjM5N1Y3LjU0NzkyQzEzLjM5NyA2LjYyMTkyIDEzLjY1NSA1Ljk4NzkzIDE0Ljk4NCA1Ljk4NzkzSDE2LjY2OFYzLjEyNjkzQzE1Ljg0ODYgMy4wMzkxMiAxNS4wMjUgMi45OTY3MiAxNC4yMDEgMi45OTk5M0MxMS43NTcgMi45OTk5MyAxMC4wNzkgNC40OTE5MyAxMC4wNzkgNy4yMzA5M1Y5LjU4NTkzSDcuMzMxOTdWMTIuNzk0OUgxMC4wODVWMjAuOTk2OUgxMy4zOTdaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K", Ef = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIwLjk0NjkgOC4zMDQ5NkMyMC45MzY5IDcuNTQ3NTggMjAuNzk1MSA2Ljc5NzczIDIwLjUyNzkgNi4wODg5NkMyMC4yOTYzIDUuNDkxMTEgMTkuOTQyNSA0Ljk0ODE2IDE5LjQ4OTEgNC40OTQ3OUMxOS4wMzU4IDQuMDQxNDIgMTguNDkyOCAzLjY4NzYxIDE3Ljg5NDkgMy40NTU5NkMxNy4xOTUzIDMuMTkzMzEgMTYuNDU2MSAzLjA1MTMgMTUuNzA4OSAzLjAzNTk2QzE0Ljc0NjkgMi45OTI5NiAxNC40NDE5IDIuOTgwOTYgMTEuOTk5OSAyLjk4MDk2QzkuNTU3OTUgMi45ODA5NiA5LjI0NDk1IDIuOTgwOTYgOC4yODk5NSAzLjAzNTk2QzcuNTQzMTEgMy4wNTE0MSA2LjgwNDMgMy4xOTM0MyA2LjEwNDk1IDMuNDU1OTZDNS41MDcwMSAzLjY4NzQ1IDQuOTYzOTcgNC4wNDEyIDQuNTEwNTggNC40OTQ1OUM0LjA1NzE5IDQuOTQ3OTggMy43MDM0NCA1LjQ5MTAyIDMuNDcxOTUgNi4wODg5NkMzLjIwODc4IDYuNzg4MDkgMy4wNjcwNyA3LjUyNzA3IDMuMDUyOTUgOC4yNzM5NkMzLjAwOTk1IDkuMjM2OTYgMi45OTY5NSA5LjU0MTk2IDIuOTk2OTUgMTEuOTg0QzIuOTk2OTUgMTQuNDI2IDIuOTk2OTUgMTQuNzM4IDMuMDUyOTUgMTUuNjk0QzMuMDY3OTUgMTYuNDQyIDMuMjA4OTUgMTcuMTggMy40NzE5NSAxNy44ODFDMy43MDM4MyAxOC40Nzg3IDQuMDU3ODQgMTkuMDIxNSA0LjUxMTM4IDE5LjQ3NDdDNC45NjQ5MiAxOS45Mjc5IDUuNTA4MDEgMjAuMjgxNSA2LjEwNTk1IDIwLjUxM0M2LjgwMzM4IDIwLjc4NjIgNy41NDIzMiAyMC45MzgzIDguMjkwOTUgMjAuOTYzQzkuMjUzOTUgMjEuMDA2IDkuNTU4OTUgMjEuMDE5IDEyLjAwMDkgMjEuMDE5QzE0LjQ0MjkgMjEuMDE5IDE0Ljc1NTkgMjEuMDE5IDE1LjcxMDkgMjAuOTYzQzE2LjQ1ODEgMjAuOTQ4MiAxNy4xOTczIDIwLjgwNjYgMTcuODk2OSAyMC41NDRDMTguNDk0NiAyMC4zMTIgMTkuMDM3NSAxOS45NTgxIDE5LjQ5MDggMTkuNTA0OEMxOS45NDQxIDE5LjA1MTUgMjAuMjk4IDE4LjUwODYgMjAuNTI5OSAxNy45MTFDMjAuNzkyOSAxNy4yMTEgMjAuOTMzOSAxNi40NzMgMjAuOTQ4OSAxNS43MjRDMjAuOTkxOSAxNC43NjIgMjEuMDA0OSAxNC40NTcgMjEuMDA0OSAxMi4wMTRDMjEuMDAyOSA5LjU3MTk2IDIxLjAwMjkgOS4yNjE5NiAyMC45NDY5IDguMzA0OTZaTTExLjk5MzkgMTYuNjAyQzkuNDM5OTUgMTYuNjAyIDcuMzcwOTUgMTQuNTMzIDcuMzcwOTUgMTEuOTc5QzcuMzcwOTUgOS40MjQ5NiA5LjQzOTk1IDcuMzU1OTYgMTEuOTkzOSA3LjM1NTk2QzEzLjIyIDcuMzU1OTYgMTQuMzk1OSA3Ljg0MzAyIDE1LjI2MjkgOC43MUMxNi4xMjk5IDkuNTc2OTggMTYuNjE2OSAxMC43NTI5IDE2LjYxNjkgMTEuOTc5QzE2LjYxNjkgMTMuMjA1MSAxNi4xMjk5IDE0LjM4MDkgMTUuMjYyOSAxNS4yNDc5QzE0LjM5NTkgMTYuMTE0OSAxMy4yMiAxNi42MDIgMTEuOTkzOSAxNi42MDJaTTE2LjgwMDkgOC4yNjI5NkMxNi42NTkzIDguMjYzMDkgMTYuNTE5MSA4LjIzNTMgMTYuMzg4MyA4LjE4MTE3QzE2LjI1NzQgOC4xMjcwNCAxNi4xMzg1IDguMDQ3NjQgMTYuMDM4NCA3Ljk0NzUxQzE1LjkzODMgNy44NDczOCAxNS44NTg5IDcuNzI4NDkgMTUuODA0NyA3LjU5NzY1QzE1Ljc1MDYgNy40NjY4IDE1LjcyMjggNy4zMjY1NiAxNS43MjI5IDcuMTg0OTZDMTUuNzIyOSA3LjA0MzQ2IDE1Ljc1MDggNi45MDMzNCAxNS44MDUgNi43NzI2MkMxNS44NTkxIDYuNjQxODkgMTUuOTM4NSA2LjUyMzEgMTYuMDM4NSA2LjQyMzA1QzE2LjEzODYgNi4zMjI5OSAxNi4yNTc0IDYuMjQzNjMgMTYuMzg4MSA2LjE4OTQ4QzE2LjUxODggNi4xMzUzMyAxNi42NTg5IDYuMTA3NDYgMTYuODAwNCA2LjEwNzQ2QzE2Ljk0MTkgNi4xMDc0NiAxNy4wODIxIDYuMTM1MzMgMTcuMjEyOCA2LjE4OTQ4QzE3LjM0MzUgNi4yNDM2MyAxNy40NjIzIDYuMzIyOTkgMTcuNTYyNCA2LjQyMzA1QzE3LjY2MjQgNi41MjMxIDE3Ljc0MTggNi42NDE4OSAxNy43OTU5IDYuNzcyNjJDMTcuODUwMSA2LjkwMzM0IDE3Ljg3NzkgNy4wNDM0NiAxNy44Nzc5IDcuMTg0OTZDMTcuODc3OSA3Ljc4MDk2IDE3LjM5NTkgOC4yNjI5NiAxNi44MDA5IDguMjYyOTZaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTEuOTk0IDE0Ljk4MjFDMTMuNjUyNSAxNC45ODIxIDE0Ljk5NyAxMy42Mzc2IDE0Ljk5NyAxMS45NzkxQzE0Ljk5NyAxMC4zMjA2IDEzLjY1MjUgOC45NzYwNyAxMS45OTQgOC45NzYwN0MxMC4zMzU1IDguOTc2MDcgOC45OTA5NyAxMC4zMjA2IDguOTkwOTcgMTEuOTc5MUM4Ljk5MDk3IDEzLjYzNzYgMTAuMzM1NSAxNC45ODIxIDExLjk5NCAxNC45ODIxWiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==", Nf = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE5LjYzMyA3Ljk5NzA0QzE5LjY0NiA4LjE3MjA0IDE5LjY0NiA4LjM0NjA0IDE5LjY0NiA4LjUyMDA0QzE5LjY0NiAxMy44NDUgMTUuNTkzIDE5Ljk4MSA4LjE4NiAxOS45ODFDNS45MDQgMTkuOTgxIDMuNzg0IDE5LjMyIDIgMTguMTcyQzIuMzI0IDE4LjIwOSAyLjYzNiAxOC4yMjIgMi45NzMgMTguMjIyQzQuNzg1OTkgMTguMjI2NCA2LjU0NzY1IDE3LjYyMDIgNy45NzQgMTYuNTAxQzcuMTMzNDIgMTYuNDg1OCA2LjMxODU4IDE2LjIwODUgNS42NDMyNCAxNS43MDc4QzQuOTY3OSAxNS4yMDcxIDQuNDY1NzggMTQuNTA3OSA0LjIwNyAxMy43MDhDNC40NTYgMTMuNzQ1IDQuNzA2IDEzLjc3IDQuOTY4IDEzLjc3QzUuMzI5IDEzLjc3IDUuNjkyIDEzLjcyIDYuMDI5IDEzLjYzM0M1LjExNjc2IDEzLjQ0ODkgNC4yOTY0NyAxMi45NTQ0IDMuNzA3NjIgMTIuMjMzN0MzLjExODc2IDExLjUxMzEgMi43OTc2OSAxMC42MTA3IDIuNzk5IDkuNjgwMDRWOS42MzAwNEMzLjMzNiA5LjkyOTA0IDMuOTU5IDEwLjExNiA0LjYxOSAxMC4xNDFDNC4wNjYwOSA5Ljc3MzYzIDMuNjEyNzIgOS4yNzUwNyAzLjI5OTM0IDguNjg5ODNDMi45ODU5NiA4LjEwNDYgMi44MjIzMSA3LjQ1MDkgMi44MjMgNi43ODcwNEMyLjgyMyA2LjAzOTA0IDMuMDIyIDUuMzUzMDQgMy4zNzEgNC43NTUwNEM0LjM4MzE0IDYuMDAwMDYgNS42NDU1IDcuMDE4NiA3LjA3NjM0IDcuNzQ0N0M4LjUwNzE3IDguNDcwOCAxMC4wNzQ2IDguODg4MjYgMTEuNjc3IDguOTcwMDRDMTEuNjE1IDguNjcwMDQgMTEuNTc3IDguMzU5MDQgMTEuNTc3IDguMDQ3MDRDMTEuNTc2NyA3LjUxOCAxMS42ODA3IDYuOTk0MSAxMS44ODMxIDYuNTA1MjhDMTIuMDg1NCA2LjAxNjQ3IDEyLjM4MjEgNS41NzIzMiAxMi43NTYyIDUuMTk4MjNDMTMuMTMwMyA0LjgyNDE0IDEzLjU3NDQgNC41Mjc0NSAxNC4wNjMyIDQuMzI1MTJDMTQuNTUyMSA0LjEyMjc5IDE1LjA3NiA0LjAxODc4IDE1LjYwNSA0LjAxOTA0QzE2Ljc2NSA0LjAxOTA0IDE3LjgxMiA0LjUwNTA0IDE4LjU0OCA1LjI5MTA0QzE5LjQ0OTggNS4xMTY2NiAyMC4zMTQ1IDQuNzg3NDcgMjEuMTA0IDQuMzE4MDRDMjAuODAzNCA1LjI0ODg2IDIwLjE3MzggNi4wMzgxNSAxOS4zMzMgNi41MzgwNEMyMC4xMzI4IDYuNDQ2ODIgMjAuOTE0NCA2LjIzNjUgMjEuNjUyIDUuOTE0MDRDMjEuMTAxMSA2LjcxNzE0IDIwLjQxODUgNy40MjEzOSAxOS42MzMgNy45OTcwNFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=", Af = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEzLjM5NyAyMC45OTY5VjEyLjgwMDlIMTYuMTYyTDE2LjU3MyA5LjU5MTkzSDEzLjM5N1Y3LjU0NzkyQzEzLjM5NyA2LjYyMTkyIDEzLjY1NSA1Ljk4NzkzIDE0Ljk4NCA1Ljk4NzkzSDE2LjY2OFYzLjEyNjkzQzE1Ljg0ODYgMy4wMzkxMiAxNS4wMjUgMi45OTY3MiAxNC4yMDEgMi45OTk5M0MxMS43NTcgMi45OTk5MyAxMC4wNzkgNC40OTE5MyAxMC4wNzkgNy4yMzA5M1Y5LjU4NTkzSDcuMzMxOTdWMTIuNzk0OUgxMC4wODVWMjAuOTk2OUgxMy4zOTdaIiBmaWxsPSIjNUYyNDc1Ii8+Cjwvc3ZnPgo=", wf = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIwLjk0NjkgOC4zMDQ5NkMyMC45MzY5IDcuNTQ3NTggMjAuNzk1MSA2Ljc5NzczIDIwLjUyNzkgNi4wODg5NkMyMC4yOTYzIDUuNDkxMTEgMTkuOTQyNSA0Ljk0ODE2IDE5LjQ4OTEgNC40OTQ3OUMxOS4wMzU4IDQuMDQxNDIgMTguNDkyOCAzLjY4NzYxIDE3Ljg5NDkgMy40NTU5NkMxNy4xOTUzIDMuMTkzMzEgMTYuNDU2MSAzLjA1MTMgMTUuNzA4OSAzLjAzNTk2QzE0Ljc0NjkgMi45OTI5NiAxNC40NDE5IDIuOTgwOTYgMTEuOTk5OSAyLjk4MDk2QzkuNTU3OTUgMi45ODA5NiA5LjI0NDk1IDIuOTgwOTYgOC4yODk5NSAzLjAzNTk2QzcuNTQzMTEgMy4wNTE0MSA2LjgwNDMgMy4xOTM0MyA2LjEwNDk1IDMuNDU1OTZDNS41MDcwMSAzLjY4NzQ1IDQuOTYzOTcgNC4wNDEyIDQuNTEwNTggNC40OTQ1OUM0LjA1NzE5IDQuOTQ3OTggMy43MDM0NCA1LjQ5MTAyIDMuNDcxOTUgNi4wODg5NkMzLjIwODc4IDYuNzg4MDkgMy4wNjcwNyA3LjUyNzA3IDMuMDUyOTUgOC4yNzM5NkMzLjAwOTk1IDkuMjM2OTYgMi45OTY5NSA5LjU0MTk2IDIuOTk2OTUgMTEuOTg0QzIuOTk2OTUgMTQuNDI2IDIuOTk2OTUgMTQuNzM4IDMuMDUyOTUgMTUuNjk0QzMuMDY3OTUgMTYuNDQyIDMuMjA4OTUgMTcuMTggMy40NzE5NSAxNy44ODFDMy43MDM4MyAxOC40Nzg3IDQuMDU3ODQgMTkuMDIxNSA0LjUxMTM4IDE5LjQ3NDdDNC45NjQ5MiAxOS45Mjc5IDUuNTA4MDEgMjAuMjgxNSA2LjEwNTk1IDIwLjUxM0M2LjgwMzM4IDIwLjc4NjIgNy41NDIzMiAyMC45MzgzIDguMjkwOTUgMjAuOTYzQzkuMjUzOTUgMjEuMDA2IDkuNTU4OTUgMjEuMDE5IDEyLjAwMDkgMjEuMDE5QzE0LjQ0MjkgMjEuMDE5IDE0Ljc1NTkgMjEuMDE5IDE1LjcxMDkgMjAuOTYzQzE2LjQ1ODEgMjAuOTQ4MiAxNy4xOTczIDIwLjgwNjYgMTcuODk2OSAyMC41NDRDMTguNDk0NiAyMC4zMTIgMTkuMDM3NSAxOS45NTgxIDE5LjQ5MDggMTkuNTA0OEMxOS45NDQxIDE5LjA1MTUgMjAuMjk4IDE4LjUwODYgMjAuNTI5OSAxNy45MTFDMjAuNzkyOSAxNy4yMTEgMjAuOTMzOSAxNi40NzMgMjAuOTQ4OSAxNS43MjRDMjAuOTkxOSAxNC43NjIgMjEuMDA0OSAxNC40NTcgMjEuMDA0OSAxMi4wMTRDMjEuMDAyOSA5LjU3MTk2IDIxLjAwMjkgOS4yNjE5NiAyMC45NDY5IDguMzA0OTZaTTExLjk5MzkgMTYuNjAyQzkuNDM5OTUgMTYuNjAyIDcuMzcwOTUgMTQuNTMzIDcuMzcwOTUgMTEuOTc5QzcuMzcwOTUgOS40MjQ5NiA5LjQzOTk1IDcuMzU1OTYgMTEuOTkzOSA3LjM1NTk2QzEzLjIyIDcuMzU1OTYgMTQuMzk1OSA3Ljg0MzAyIDE1LjI2MjkgOC43MUMxNi4xMjk5IDkuNTc2OTggMTYuNjE2OSAxMC43NTI5IDE2LjYxNjkgMTEuOTc5QzE2LjYxNjkgMTMuMjA1MSAxNi4xMjk5IDE0LjM4MDkgMTUuMjYyOSAxNS4yNDc5QzE0LjM5NTkgMTYuMTE0OSAxMy4yMiAxNi42MDIgMTEuOTkzOSAxNi42MDJaTTE2LjgwMDkgOC4yNjI5NkMxNi42NTkzIDguMjYzMDkgMTYuNTE5MSA4LjIzNTMgMTYuMzg4MyA4LjE4MTE3QzE2LjI1NzQgOC4xMjcwNCAxNi4xMzg1IDguMDQ3NjQgMTYuMDM4NCA3Ljk0NzUxQzE1LjkzODMgNy44NDczOCAxNS44NTg5IDcuNzI4NDkgMTUuODA0NyA3LjU5NzY1QzE1Ljc1MDYgNy40NjY4IDE1LjcyMjggNy4zMjY1NiAxNS43MjI5IDcuMTg0OTZDMTUuNzIyOSA3LjA0MzQ2IDE1Ljc1MDggNi45MDMzNCAxNS44MDUgNi43NzI2MkMxNS44NTkxIDYuNjQxODkgMTUuOTM4NSA2LjUyMzEgMTYuMDM4NSA2LjQyMzA1QzE2LjEzODYgNi4zMjI5OSAxNi4yNTc0IDYuMjQzNjMgMTYuMzg4MSA2LjE4OTQ4QzE2LjUxODggNi4xMzUzMyAxNi42NTg5IDYuMTA3NDYgMTYuODAwNCA2LjEwNzQ2QzE2Ljk0MTkgNi4xMDc0NiAxNy4wODIxIDYuMTM1MzMgMTcuMjEyOCA2LjE4OTQ4QzE3LjM0MzUgNi4yNDM2MyAxNy40NjIzIDYuMzIyOTkgMTcuNTYyNCA2LjQyMzA1QzE3LjY2MjQgNi41MjMxIDE3Ljc0MTggNi42NDE4OSAxNy43OTU5IDYuNzcyNjJDMTcuODUwMSA2LjkwMzM0IDE3Ljg3NzkgNy4wNDM0NiAxNy44Nzc5IDcuMTg0OTZDMTcuODc3OSA3Ljc4MDk2IDE3LjM5NTkgOC4yNjI5NiAxNi44MDA5IDguMjYyOTZaIiBmaWxsPSIjNUYyNDc1Ii8+CjxwYXRoIGQ9Ik0xMS45OTQgMTQuOTgyMUMxMy42NTI1IDE0Ljk4MjEgMTQuOTk3IDEzLjYzNzYgMTQuOTk3IDExLjk3OTFDMTQuOTk3IDEwLjMyMDYgMTMuNjUyNSA4Ljk3NjA3IDExLjk5NCA4Ljk3NjA3QzEwLjMzNTUgOC45NzYwNyA4Ljk5MDk3IDEwLjMyMDYgOC45OTA5NyAxMS45NzkxQzguOTkwOTcgMTMuNjM3NiAxMC4zMzU1IDE0Ljk4MjEgMTEuOTk0IDE0Ljk4MjFaIiBmaWxsPSIjNUYyNDc1Ii8+Cjwvc3ZnPgo=", Sf = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE5LjYzMyA3Ljk5NzA0QzE5LjY0NiA4LjE3MjA0IDE5LjY0NiA4LjM0NjA0IDE5LjY0NiA4LjUyMDA0QzE5LjY0NiAxMy44NDUgMTUuNTkzIDE5Ljk4MSA4LjE4NiAxOS45ODFDNS45MDQgMTkuOTgxIDMuNzg0IDE5LjMyIDIgMTguMTcyQzIuMzI0IDE4LjIwOSAyLjYzNiAxOC4yMjIgMi45NzMgMTguMjIyQzQuNzg1OTkgMTguMjI2NCA2LjU0NzY1IDE3LjYyMDIgNy45NzQgMTYuNTAxQzcuMTMzNDIgMTYuNDg1OCA2LjMxODU4IDE2LjIwODUgNS42NDMyNCAxNS43MDc4QzQuOTY3OSAxNS4yMDcxIDQuNDY1NzggMTQuNTA3OSA0LjIwNyAxMy43MDhDNC40NTYgMTMuNzQ1IDQuNzA2IDEzLjc3IDQuOTY4IDEzLjc3QzUuMzI5IDEzLjc3IDUuNjkyIDEzLjcyIDYuMDI5IDEzLjYzM0M1LjExNjc2IDEzLjQ0ODkgNC4yOTY0NyAxMi45NTQ0IDMuNzA3NjIgMTIuMjMzN0MzLjExODc2IDExLjUxMzEgMi43OTc2OSAxMC42MTA3IDIuNzk5IDkuNjgwMDRWOS42MzAwNEMzLjMzNiA5LjkyOTA0IDMuOTU5IDEwLjExNiA0LjYxOSAxMC4xNDFDNC4wNjYwOSA5Ljc3MzYzIDMuNjEyNzIgOS4yNzUwNyAzLjI5OTM0IDguNjg5ODNDMi45ODU5NiA4LjEwNDYgMi44MjIzMSA3LjQ1MDkgMi44MjMgNi43ODcwNEMyLjgyMyA2LjAzOTA0IDMuMDIyIDUuMzUzMDQgMy4zNzEgNC43NTUwNEM0LjM4MzE0IDYuMDAwMDYgNS42NDU1IDcuMDE4NiA3LjA3NjM0IDcuNzQ0N0M4LjUwNzE3IDguNDcwOCAxMC4wNzQ2IDguODg4MjYgMTEuNjc3IDguOTcwMDRDMTEuNjE1IDguNjcwMDQgMTEuNTc3IDguMzU5MDQgMTEuNTc3IDguMDQ3MDRDMTEuNTc2NyA3LjUxOCAxMS42ODA3IDYuOTk0MSAxMS44ODMxIDYuNTA1MjhDMTIuMDg1NCA2LjAxNjQ3IDEyLjM4MjEgNS41NzIzMiAxMi43NTYyIDUuMTk4MjNDMTMuMTMwMyA0LjgyNDE0IDEzLjU3NDQgNC41Mjc0NSAxNC4wNjMyIDQuMzI1MTJDMTQuNTUyMSA0LjEyMjc5IDE1LjA3NiA0LjAxODc4IDE1LjYwNSA0LjAxOTA0QzE2Ljc2NSA0LjAxOTA0IDE3LjgxMiA0LjUwNTA0IDE4LjU0OCA1LjI5MTA0QzE5LjQ0OTggNS4xMTY2NiAyMC4zMTQ1IDQuNzg3NDcgMjEuMTA0IDQuMzE4MDRDMjAuODAzNCA1LjI0ODg2IDIwLjE3MzggNi4wMzgxNSAxOS4zMzMgNi41MzgwNEMyMC4xMzI4IDYuNDQ2ODIgMjAuOTE0NCA2LjIzNjUgMjEuNjUyIDUuOTE0MDRDMjEuMTAxMSA2LjcxNzE0IDIwLjQxODUgNy40MjEzOSAxOS42MzMgNy45OTcwNFoiIGZpbGw9IiM1RjI0NzUiLz4KPC9zdmc+Cg==", on = {
  facebook: "https://www.facebook.com/VESRoficial",
  twitter: "https://twitter.com/OficialVesr",
  instagram: "https://www.instagram.com/vesr.oficial/"
}, Of = {
  row: "vers-flex-row",
  column: "vers-flex-col"
}, ln = {
  facebook: {
    white: jf,
    purple: Af
  },
  twitter: {
    white: Nf,
    purple: Sf
  },
  instagram: {
    white: Ef,
    purple: wf
  }
}, Gs = ({ color: e = "purple", direction: t = "row" }) => /* @__PURE__ */ u.jsxs("div", { className: `vers-flex ${Of[t]} vers-gap-2`, children: [
  /* @__PURE__ */ u.jsx("a", { href: on.facebook, target: "_blank", children: /* @__PURE__ */ u.jsx("img", { className: "vers-w-4", src: ln.facebook[e], alt: "Logo de Facebook" }) }),
  /* @__PURE__ */ u.jsx("a", { href: on.instagram, target: "_blank", children: /* @__PURE__ */ u.jsx("img", { className: "vers-w-4", src: ln.instagram[e], alt: "Logo de Instagram" }) }),
  /* @__PURE__ */ u.jsx("a", { href: on.twitter, target: "_blank", children: /* @__PURE__ */ u.jsx("img", { className: "vers-w-4", src: ln.twitter[e], alt: "Logo de Twitter" }) })
] }), bi = [
  {
    name: "Inicio",
    url: "/inicio"
  },
  {
    name: "Conócenos",
    url: "/conocenos"
  },
  {
    name: "Nuestro Equipo",
    url: "/nuestro-equipo"
  },
  {
    name: "Biblioteca Virtual",
    url: "/biblioteca-virtual"
  },
  {
    name: "Proyectos",
    url: "/proyectos"
  },
  {
    name: "Contáctanos",
    url: "/contactanos"
  },
  {
    name: "Productos",
    url: "/productos"
  },
  {
    name: "Servicios",
    url: "/servicios"
  }
], xi = "vers-border-b-4 vers-border-solid vers-p-1 hover:vers-border-b-4 hover:vers-border-solid hover:vers-border-primary", Tf = () => {
  const [e, t] = Ct(window.innerWidth <= 1300), [r, a] = Ct(!1);
  is(() => {
    const i = () => {
      t(window.innerWidth <= 1300);
    };
    return window.addEventListener("resize", i), () => {
      window.removeEventListener("resize", i);
    };
  }, []);
  const n = () => a(!r);
  return /* @__PURE__ */ u.jsxs("header", { className: " vers-bg-white vers-border-b-4 vers-border-solid vers-border-primary vers-px-4 vers-flex vers-justify-between vers-items-center vers-h-header vers-relative vers-stickyxxxx vers-top-[0]xxxx vers-z-[1]", children: [
    /* @__PURE__ */ u.jsxs("div", { className: "vers-flex vers-justify-center vers-items-center vers-gap-2", children: [
      e && /* @__PURE__ */ u.jsx("div", { className: "vers-bg-xxxxxxgreen vers-w-[30px] vers-h-[50px] vers-flex vers-items-center vers-justify-center", onClick: n, children: r ? /* @__PURE__ */ u.jsx("i", { className: "fa-solid fa-xmark vers-text-4xl" }) : /* @__PURE__ */ u.jsx("i", { className: "fa-solid fa-bars vers-text-3xl" }) }),
      /* @__PURE__ */ u.jsx(Vs, { variant: "purple" })
    ] }),
    /* @__PURE__ */ u.jsxs("div", { className: "vers-flex vers-gap-3 vers-items-center", children: [
      !e && /* @__PURE__ */ u.jsx("ul", { className: "vers-flex vers-gap-1", children: bi.map((i, s) => /* @__PURE__ */ u.jsx(Nn, { to: i.url, className: ({ isActive: o }) => o ? `vers-border-primary ${xi}` : `vers-border-white ${xi}`, children: /* @__PURE__ */ u.jsx("p", { className: "vers-font-medium vers-uppercase vers-text-center ", children: i.name }) }, s)) }),
      /* @__PURE__ */ u.jsx("div", { className: "vers-hidden xsm:vers-block", children: /* @__PURE__ */ u.jsx(Gs, { color: "purple" }) })
    ] }),
    e && r && /* @__PURE__ */ u.jsx("div", { className: "vers-absolute vers-top-[6rem] vers-left-[5px] vers-bg-white vers-z-10 vers-p-2 vers-flex vers-flex-col vers-w-[250px] vers-rounded-md vers-gap-[1px] vers-border-solid vers-border-2 vers-border-purple-300", onClick: n, children: bi.map((i, s) => /* @__PURE__ */ u.jsx(Nn, { to: i.url, className: ({ isActive: o }) => o ? "vers-bg-purple-300 vers-rounded-md vers-text-white" : "vers-border-white ", children: /* @__PURE__ */ u.jsx("p", { className: " vers-p-1 hover:vers-bg-purple-300 hover:vers-text-white vers-rounded-md vers-uppercase vers-font-semibold", children: i.name }) }, s)) })
  ] });
}, If = [
  {
    title: "CONÓCENOS",
    url: "/conocenos"
  },
  {
    title: "EQUIPO",
    url: "/nuestro-equipo"
  },
  {
    title: "BIBLIOTECA VIRTUAL",
    url: "/biblioteca-virtual"
  },
  {
    title: "PROYECTOS",
    url: "/proyectos"
  },
  {
    title: "CONTÁCTANOS",
    url: "/contactanos"
  },
  {
    title: "PRODUCTOS",
    url: "/productos"
  },
  {
    title: "SERVICIOS",
    url: "/servicios"
  }
], Df = () => /* @__PURE__ */ u.jsxs("footer", { className: "vers-bg-primary vers-flex vers-flex-col vers-align-middle vers-justify-center vers-py-5 vers-px-1 md:vers-pt-8 md:vers-pb-6 vers-gap-6 md:vers-gap-8", children: [
  /* @__PURE__ */ u.jsxs("div", { className: "vers-gap-4 vers-flex vers-flex-col md:vers-flex-row md:vers-justify-evenly", children: [
    /* @__PURE__ */ u.jsx("div", { className: "vers-flex vers-flex-col vers-items-center vers-gap-1 md:vers-mt-[-1.5rem]", children: /* @__PURE__ */ u.jsx(Vs, { variant: "white", width: "medium" }) }),
    /* @__PURE__ */ u.jsxs("ul", { className: "vers-flex vers-flex-col vers-items-center vers-gap-1 md:vers-items-start", children: [
      /* @__PURE__ */ u.jsx("h2", { className: "vers-text-white vers-font-bold vers-text-xl vers-mb-1", children: "EMPRESA" }),
      If.map((e, t) => /* @__PURE__ */ u.jsx("li", { children: /* @__PURE__ */ u.jsx("a", { className: "vers-text-white hover:vers-text-light-gray", href: e.url, children: e.title }) }, t))
    ] }),
    /* @__PURE__ */ u.jsxs("div", { className: "vers-flex vers-flex-col vers-items-center vers-gap-1 ", children: [
      /* @__PURE__ */ u.jsx("h2", { className: "vers-text-white vers-font-bold vers-text-xl vers-mb-1", children: "SÍGUENOS" }),
      /* @__PURE__ */ u.jsx("ul", { className: "vers-flex vers-flex-row md:vers-flex-col vers-gap-3", children: /* @__PURE__ */ u.jsx(Gs, { color: "white", direction: "column" }) })
    ] }),
    /* @__PURE__ */ u.jsxs("ul", { className: "vers-flex vers-flex-col vers-items-center vers-gap-1 md:vers-items-start", children: [
      /* @__PURE__ */ u.jsx("h2", { className: "vers-text-white vers-font-bold vers-text-xl vers-mb-1", children: "CONTACTOS" }),
      /* @__PURE__ */ u.jsx("li", { className: "vers-text-white hover:vers-text-light-gray", children: /* @__PURE__ */ u.jsx("a", { href: "mailto:vers.oficial@gmail.com", target: "_blank", children: "vers.oficial@gmail.com" }) }),
      /* @__PURE__ */ u.jsx("li", { className: "vers-text-white hover:vers-text-light-gray", children: /* @__PURE__ */ u.jsx("a", { href: "https://api.whatsapp.com/send?phone=51931967276", target: "_blank", children: "931 967 276" }) })
    ] })
  ] }),
  /* @__PURE__ */ u.jsx("p", { className: "vers-text-white vers-text-center vers-px-2", children: "TODOS LOS DERECHOS RESERVADOS © VESR" })
] }), kf = ({ text: e }) => /* @__PURE__ */ u.jsxs("article", { className: "vers-flex vers-gap-2 vers-justify-center vers-items-center", children: [
  /* @__PURE__ */ u.jsx("div", { className: "vers-border-solid vers-border-4 vers-border-primary vers-w-[40px] vers-h-[40px] vers-flex vers-justify-center vers-items-center vers-p-2", children: /* @__PURE__ */ u.jsx("p", { className: "vers-text-2xl vers-font-bold vers-text-primary", children: "X" }) }),
  /* @__PURE__ */ u.jsx("div", { className: "vers-border-solid vers-border-4 vers-border-primary vers-p-2", children: /* @__PURE__ */ u.jsx("p", { className: "vers-font-medium", children: e }) })
] }), Cf = kf, Pf = ({ children: e }) => {
  const t = Ae.Children.toArray(e), r = {
    infinite: !0,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: !0,
    speed: 2e3,
    autoplaySpeed: 2e3,
    cssEase: "linear",
    adaptiveHeight: !0
  };
  return /* @__PURE__ */ u.jsx("div", { className: "vers-overflow-hidden vers-w-full vers-bgxxxxx-gray", children: /* @__PURE__ */ u.jsx(Ws, { ...r, className: "vers-h-vers-h-screen vers-w-screen md:vers-w-full", children: t.map((a) => a) }) });
}, zf = Pf, Lf = [
  {
    image: "/conocenos/como lo hacemos/image 5.png",
    text: "Nos capacitamos con especialistas y nos formamos para hacer sesiones educativas sobre ESI.",
    description: ""
  },
  {
    image: "/conocenos/como lo hacemos/image 7.png",
    text: "Hacemos dinámicas de casos y sesiones educativas sobre ESI para la comunidad san marquina.",
    description: ""
  },
  {
    image: "/conocenos/como lo hacemos/image 8.png",
    text: "Hacemos sesiones educativas sobre ESI para la población en general.",
    description: ""
  }
], Rf = [
  "Promover una sexualidad placentera, responsable y saludable, a través de la comunidad VESR para la humanidad.",
  "Concientizar sobre la importancia de la planificación familiar, a través de actividades y la comunidad VESR para la humanidad.",
  "Concientizar sobre la prevención de infecciones de transmisión sexual y cáncer, a través de actividades y la comunidad VESR para la humanidad.",
  "Promover una cultura de tolerancia y respeto a todas las diversidades, a través de actividades y la comunidad VESR para la humanidad.",
  "Concientizar sobre la prevención de la violencia en todos sus ámbito, a través de actividades y la comunidad VESR para la humanidad."
], Yf = [
  {
    image: "/conocenos/objetivos/Frame 16.png",
    description: ""
  },
  {
    image: "/conocenos/objetivos/Frame 17.png",
    description: ""
  },
  {
    image: "/conocenos/objetivos/Frame 18.png",
    description: ""
  },
  {
    image: "/conocenos/objetivos/Frame 16.png",
    description: ""
  },
  {
    image: "/conocenos/objetivos/Frame 17.png",
    description: ""
  },
  {
    image: "/conocenos/objetivos/Frame 18.png",
    description: ""
  }
], Qf = [
  {
    image: "/skills/skill1.webp",
    description: "3 salud y binestar"
  },
  {
    image: "/skills/skill2.webp",
    description: "4 educación de calidad"
  },
  {
    image: "/skills/skill3.webp",
    description: "5 igualdad de género"
  },
  {
    image: "/skills/skill4.webp",
    description: "10 reducción de la desigualdad"
  },
  {
    image: "/skills/skill5.webp",
    description: "16 paz, justicia e intituciones sólidas"
  },
  {
    image: "/skills/skill6.webp",
    description: "17 alianzas para lograr los objetivos"
  }
], Uf = () => /* @__PURE__ */ u.jsxs("section", { className: "vers-grow", children: [
  /* @__PURE__ */ u.jsx(It, { img: "/img4.webp", children: /* @__PURE__ */ u.jsxs("div", { className: "vers-h-full vers-flex vers-flex-col vers-justify-center vers-items-center vers-gap-[20px] md:vers-gap-[40px] vers-w-full md:vers-w-[700px] vers-bg-[#9b64a1] vers-p-6", children: [
    /* @__PURE__ */ u.jsx("h2", { className: "vers-text-3xl md:vers-text-4xl vers-font-bold vers-text-white vers-uppercase vers-text-center", children: "Quienes Somos" }),
    /* @__PURE__ */ u.jsx("p", { className: "vers-text-center vers-text-md md:vers-text-xl vers-text-gray-dark vers-text-white", children: "Somos una ORGANIZACIÓN JUVENIL multidisciplinaria reconocida por la SENAJU y miembro del CMPJ, que se desarrolla bajo los principios de la responsabilidad social, enmarcado en los objetivos de desarrollo sostenible, por medio de la Educación Sexual Responsable. Para promover el bienestar de la salud sexual y reproductiva de los derechos sexuales y reproductivos en la comunidad universitaria y población general." }),
    /* @__PURE__ */ u.jsx("div", { className: "vers-flex vers-flex-wrap vers-gap-1 vers-justify-center", children: Qf.map((e, t) => /* @__PURE__ */ u.jsx("img", { className: "vers-h-[50px] sm:vers-h-[80px]", src: e.image, alt: e.description }, t)) })
  ] }) }),
  /* @__PURE__ */ u.jsx(Je, { children: /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
    /* @__PURE__ */ u.jsxs("div", { className: "vers-flex vers-flex-col md:vers-flex-row vers-gap-3 md:vers-gap-[0] vers-bg-lightxxx-gray", children: [
      /* @__PURE__ */ u.jsx("div", { className: "vers-grow", children: /* @__PURE__ */ u.jsx(Ie, { text: "misión", children: /* @__PURE__ */ u.jsx("p", { className: "vers-bg-purple-300 vers-p-2 md:vers-p-4 vers-text-white", children: "Somos un voluntariado multidisciplinario que se desarrolla bajo los principios de la responsabilidad social enmarcado en los objetivos de desarrollo sostenible, principalmente a la promoción de la salud sexual y reproductiva por medio de la educación integral en la comunidad sanmarquina y población general." }) }) }),
      /* @__PURE__ */ u.jsx("img", { className: "vers-grow-0", src: "/conocenos/image 4.png", alt: "Dos mujeres mostrarndo el logo de VESR en sus espaldas" }),
      /* @__PURE__ */ u.jsx("div", { className: "vers-grow", children: /* @__PURE__ */ u.jsx(Ie, { text: "visión", children: /* @__PURE__ */ u.jsx("p", { className: "vers-bg-purple-300 vers-p-2 md:vers-p-4 vers-text-white", children: "Para el año 2022 consolidar una organización juvenil de voluntarios - facilitadores en educación sexual integral, desde las diferentes áreas académicas de la universidad, a nivel distrital y nacional." }) }) })
    ] }),
    /* @__PURE__ */ u.jsx(Ie, { text: "objetivos", children: /* @__PURE__ */ u.jsxs("div", { className: "vers-bg-pink-100 vers-p-2 md:vers-p-4 vers-flex vers-flex-col vers-gap-2 md:vers-gap-4 md:vers-flex-row md:vers-h-[250px] md:vers-items-center", children: [
      /* @__PURE__ */ u.jsxs("div", { className: "vers-flex vers-flex-col vers-gap-1 md:vers-gap-2", children: [
        /* @__PURE__ */ u.jsx("h2", { className: "vers-text-xl md:vers-text-3xl vers-uppercase vers-font-bold", children: "general" }),
        /* @__PURE__ */ u.jsx("p", { children: "Promoción del bienestar en la salud sexual y reproductiva a través de la comunidad VESR para la comunidad." })
      ] }),
      /* @__PURE__ */ u.jsx("div", { className: " md:vers-w-[70%] md:vers-h-[200px]", children: /* @__PURE__ */ u.jsx(zf, { children: Yf.map((e, t) => /* @__PURE__ */ u.jsx("img", { className: "vers-p-1 md:vers-p-2", src: e.image, alt: e.description }, t)) }) })
    ] }) }),
    /* @__PURE__ */ u.jsx(Ie, { text: "especificos", children: /* @__PURE__ */ u.jsx("div", { className: "vers-grid md:vers-grid-cols-2 vers-grid-rows-2 vers-gap-4 md:vers-gap-y-4 md:vers-gap-x-6", children: Rf.map((e, t) => /* @__PURE__ */ u.jsx(Cf, { text: e }, t)) }) }),
    /* @__PURE__ */ u.jsx(Ie, { text: "¿Cómo lo hacemos?", children: /* @__PURE__ */ u.jsx("div", { className: "vers-p-2 vers-flex vers-flex-col vers-gap-4 md:vers-gap-8 md:vers-grid md:vers-grid-cols-3", children: Lf.map((e, t) => /* @__PURE__ */ u.jsxs("article", { className: `vers-flex ${t % 2 ? "vers-flex-col-reverse" : "vers-flex-col"} vers-gap-4`, children: [
      /* @__PURE__ */ u.jsx("p", { className: "vers-text-justifyxxxxx vers-font-medium", children: e.text }),
      /* @__PURE__ */ u.jsx("img", { src: e.image, alt: e.description })
    ] }, t)) }) })
  ] }) })
] }), Bf = ({ name: e, position: t, image: r, age: a, degree: n }) => /* @__PURE__ */ u.jsxs("article", { className: "vers-flex vers-items-center vers-justify-center vers-grow vers-relative vers-h-full vers-w-full", children: [
  /* @__PURE__ */ u.jsxs("div", { className: "vers-p-4 sm:vers-p-4 vers-flex vers-flex-col vers-gap-2 vers-items-center vers-bg-purple-300 ", children: [
    /* @__PURE__ */ u.jsxs("div", { className: "vers-flex vers-justify-centervers-relative vers-justify-center", children: [
      /* @__PURE__ */ u.jsx("img", { className: "vers-w-[70%] sm:vers-w-[60%] vers-aspect-square vers-object-cover vers-object-center vers-rounded-full", src: r }),
      /* @__PURE__ */ u.jsx("img", { className: "vers-w-[60px] sm:vers-w-[80px] vers-absolute vers-ml-[8rem]  sm:vers-ml-[10rem] md:vers-ml-[12rem]", src: "https://res.cloudinary.com/djksz5k3c/image/upload/v1686353442/MI-NUBE/VESR/comillas_avhbe5.svg", alt: "Signos de comillas" })
    ] }),
    /* @__PURE__ */ u.jsxs("div", { className: "vers-flex vers-flex-col vers-gap-1", children: [
      /* @__PURE__ */ u.jsx("p", { className: "vers-text-2xl lg:vers-text-[1.6rem] vers-font-bold vers-text-white vers-text-center", children: e }),
      /* @__PURE__ */ u.jsx("p", { className: "vers-text-xl lg:vers-text-[1.4rem] vers-font-normal vers-text-white vers-text-center", children: t })
    ] })
  ] }),
  /* @__PURE__ */ u.jsxs("div", { className: "vers-p-2 sm:vers-p-4 vers-flex vers-flex-col vers-gap-1 vers-absolute vers-bg-blue vers-w-full vers-h-full vers-justify-center vers-items-center vers-z-[1] vers-opacity-0 hover:vers-opacity-[1]", children: [
    /* @__PURE__ */ u.jsxs("p", { className: "vers-text-2xl lg:vers-text-[1.6rem] vers-font-normal vers-text-white", children: [
      /* @__PURE__ */ u.jsx("span", { className: "vers-text-2xl md:vers-text-2xl lg:vers-text-[1.6rem] vers-font-medium", children: "Edad:" }),
      " ",
      a
    ] }),
    /* @__PURE__ */ u.jsxs("p", { className: "vers-text-xl lg:vers-text-[1.4rem] vers-font-normal vers-text-white", children: [
      /* @__PURE__ */ u.jsx("span", { className: "vers-text-xl md:vers-text-2xl lg:vers-text-[1.4rem] vers-font-medium", children: "Carrera:" }),
      " ",
      n
    ] })
  ] })
] }), Ff = Bf, pa = ({ children: e }) => /* @__PURE__ */ u.jsx("div", { className: "vers-grid xsm:vers-grid-cols-2 sm:vers-grid-cols-2 md:vers-grid-cols-3 vers-gap-2 md:vers-gap-3", children: e }), Mi = {
  name: "Andrea, Rojas Vera",
  biography: `¡Hola!
Mi nombre es Andrea Rojas Vera estudio obstetricia tengo 25 años, soy la fundadora y actual coordinadora del Voluntariado de Educación Sexual Responsable. Ver atrás y darme cuenta todo lo que con amor, trabajo en equipo y mucha pasión se ha logrado, me llena de alegría. Sin duda, hemos vivido de todo en este laborioso trayecto, pero sabemos que lo vale, no importa cuántas desveladas nos costó, porque saber en lo que se ha convertido realmente motiva. Este lindo bebé llamado VESR o cariñosamente llamado VERS sigue creciendo. Tal vez se preguntarán qué diferente tiene VESR y déjenme decirles que muchísimo. Nosotros crecimos rebeldes dispuestos a romper tabús y estereotipos. Sin miedo a la censura ni a la vergüenza porque vivir nuestra sexualidad con responsabilidad es una de las cosas más geniales que puede existir. Porque nos cansamos de la desinformación sobre las infecciones de transmisión sexual. Porque nos cansamos del acoso, abuso sexual y violencia que se propinaba aún en nuestra propia universidad, aún con reglamentos, aún cuando las personas seguían creyendo que minimizar los problemas ayudaría en algo, pues realmente callar, omitir, censurar, ignorar... no ayuda en nada. Nos cansamos de que solo creyeran que educación sexual era solo morbo. Porque realmente la sexualidad no significa coito y morbo, va más allá y la educación sexual integral que fomentamos lo demuestra de muchas maneras. Aquí en esta linda familia sabemos que hay muchos temas que tocar y no dejamos ninguno de lado, desde la prevención de infecciones de transmisión sexual hasta la diversidad sexual y de género. Porque sabemos que necesitas una familia que te escuché ,que te muestre como par ,que si no aprendiste en el colegio .Aquí gracias a nuestros aliados lo aprenderás. Formamos pares responsables de su sexualidad que sean esa semilla en cada familia ,facultad y comunidad. Podemos hacer grandes cosas si nos lo proponemos.

Qué esperas?

Se esa semilla, únete al cambio.
Se parte de nuestra familia.`
}, Wf = [
  {
    title: "Equipo directivo",
    members: [
      {
        name: "Rosa Ramales",
        position: "Gerente General",
        age: 23,
        degree: "Ing. Industrial",
        image: "https://res.cloudinary.com/djksz5k3c/image/upload/v1686179596/MI-NUBE/VESR/Captura_de_pantalla_2023-06-07_181243_1_xcr2mk.png"
      },
      {
        name: "Rosa Ramales",
        position: "Gerente General",
        age: 23,
        degree: "Ing. Industrial",
        image: "https://res.cloudinary.com/djksz5k3c/image/upload/v1686179596/MI-NUBE/VESR/Captura_de_pantalla_2023-06-07_181243_1_xcr2mk.png"
      },
      {
        name: "Rosa Ramales",
        position: "Gerente General",
        age: 23,
        degree: "Ing. Industrial",
        image: "https://res.cloudinary.com/djksz5k3c/image/upload/v1686179596/MI-NUBE/VESR/Captura_de_pantalla_2023-06-07_181243_1_xcr2mk.png"
      },
      {
        name: "Rosa Ramales",
        position: "Gerente General",
        age: 23,
        degree: "Ing. Industrial",
        image: "https://res.cloudinary.com/djksz5k3c/image/upload/v1686179596/MI-NUBE/VESR/Captura_de_pantalla_2023-06-07_181243_1_xcr2mk.png"
      },
      {
        name: "Rosa Ramales",
        position: "Gerente General",
        age: 23,
        degree: "Ing. Industrial",
        image: "https://res.cloudinary.com/djksz5k3c/image/upload/v1686179596/MI-NUBE/VESR/Captura_de_pantalla_2023-06-07_181243_1_xcr2mk.png"
      }
    ]
  },
  {
    title: "Departamento de marketing",
    members: [
      {
        name: "Rosa Ramales",
        position: "Gerente General",
        age: 23,
        degree: "Ing. Industrial",
        image: "https://res.cloudinary.com/djksz5k3c/image/upload/v1686179596/MI-NUBE/VESR/Captura_de_pantalla_2023-06-07_181243_1_xcr2mk.png"
      },
      {
        name: "Rosa Ramales",
        position: "Gerente General",
        age: 23,
        degree: "Ing. Industrial",
        image: "https://res.cloudinary.com/djksz5k3c/image/upload/v1686179596/MI-NUBE/VESR/Captura_de_pantalla_2023-06-07_181243_1_xcr2mk.png"
      },
      {
        name: "Rosa Ramales",
        position: "Gerente General",
        age: 23,
        degree: "Ing. Industrial",
        image: "https://res.cloudinary.com/djksz5k3c/image/upload/v1686179596/MI-NUBE/VESR/Captura_de_pantalla_2023-06-07_181243_1_xcr2mk.png"
      },
      {
        name: "Rosa Ramales",
        position: "Gerente General",
        age: 23,
        degree: "Ing. Industrial",
        image: "https://res.cloudinary.com/djksz5k3c/image/upload/v1686179596/MI-NUBE/VESR/Captura_de_pantalla_2023-06-07_181243_1_xcr2mk.png"
      },
      {
        name: "Rosa Ramales",
        position: "Gerente General",
        age: 23,
        degree: "Ing. Industrial",
        image: "https://res.cloudinary.com/djksz5k3c/image/upload/v1686179596/MI-NUBE/VESR/Captura_de_pantalla_2023-06-07_181243_1_xcr2mk.png"
      }
    ]
  },
  {
    title: "Departamento de gestión de proyectos",
    members: [
      {
        name: "Rosa Ramales",
        position: "Gerente General",
        age: 23,
        degree: "Ing. Industrial",
        image: "https://res.cloudinary.com/djksz5k3c/image/upload/v1686179596/MI-NUBE/VESR/Captura_de_pantalla_2023-06-07_181243_1_xcr2mk.png"
      },
      {
        name: "Rosa Ramales",
        position: "Gerente General",
        age: 23,
        degree: "Ing. Industrial",
        image: "https://res.cloudinary.com/djksz5k3c/image/upload/v1686179596/MI-NUBE/VESR/Captura_de_pantalla_2023-06-07_181243_1_xcr2mk.png"
      },
      {
        name: "Rosa Ramales",
        position: "Gerente General",
        age: 23,
        degree: "Ing. Industrial",
        image: "https://res.cloudinary.com/djksz5k3c/image/upload/v1686179596/MI-NUBE/VESR/Captura_de_pantalla_2023-06-07_181243_1_xcr2mk.png"
      },
      {
        name: "Rosa Ramales",
        position: "Gerente General",
        age: 23,
        degree: "Ing. Industrial",
        image: "https://res.cloudinary.com/djksz5k3c/image/upload/v1686179596/MI-NUBE/VESR/Captura_de_pantalla_2023-06-07_181243_1_xcr2mk.png"
      },
      {
        name: "Rosa Ramales",
        position: "Gerente General",
        age: 23,
        degree: "Ing. Industrial",
        image: "https://res.cloudinary.com/djksz5k3c/image/upload/v1686179596/MI-NUBE/VESR/Captura_de_pantalla_2023-06-07_181243_1_xcr2mk.png"
      }
    ]
  },
  {
    title: "Departamento de investigación y estadística",
    members: [
      {
        name: "Rosa Ramales",
        position: "Gerente General",
        age: 23,
        degree: "Ing. Industrial",
        image: "https://res.cloudinary.com/djksz5k3c/image/upload/v1686179596/MI-NUBE/VESR/Captura_de_pantalla_2023-06-07_181243_1_xcr2mk.png"
      },
      {
        name: "Rosa Ramales",
        position: "Gerente General",
        age: 23,
        degree: "Ing. Industrial",
        image: "https://res.cloudinary.com/djksz5k3c/image/upload/v1686179596/MI-NUBE/VESR/Captura_de_pantalla_2023-06-07_181243_1_xcr2mk.png"
      },
      {
        name: "Rosa Ramales",
        position: "Gerente General",
        age: 23,
        degree: "Ing. Industrial",
        image: "https://res.cloudinary.com/djksz5k3c/image/upload/v1686179596/MI-NUBE/VESR/Captura_de_pantalla_2023-06-07_181243_1_xcr2mk.png"
      },
      {
        name: "Rosa Ramales",
        position: "Gerente General",
        age: 23,
        degree: "Ing. Industrial",
        image: "https://res.cloudinary.com/djksz5k3c/image/upload/v1686179596/MI-NUBE/VESR/Captura_de_pantalla_2023-06-07_181243_1_xcr2mk.png"
      },
      {
        name: "Rosa Ramales",
        position: "Gerente General",
        age: 23,
        degree: "Ing. Industrial",
        image: "https://res.cloudinary.com/djksz5k3c/image/upload/v1686179596/MI-NUBE/VESR/Captura_de_pantalla_2023-06-07_181243_1_xcr2mk.png"
      }
    ]
  }
], Vf = () => /* @__PURE__ */ u.jsxs("section", { className: "vers-grow", children: [
  /* @__PURE__ */ u.jsx(It, { img: "/img5.webp", children: /* @__PURE__ */ u.jsxs("div", { className: "vers-h-full vers-flex vers-flex-col vers-justify-center vers-items-center vers-gap-[50px] md:vers-gap-[80px] vers-w-full md:vers-w-[600px]  vers-bg-[rgba(256,256,256,.85)] vers-p-5", children: [
    /* @__PURE__ */ u.jsxs("h2", { className: "vers-text-3xl sm:vers-text-4xl md:vers-text-5xl vers-font-bold vers-text-primary vers-uppercase vers-text-center", children: [
      "Nuestro ",
      /* @__PURE__ */ u.jsx("br", {}),
      "equipo"
    ] }),
    /* @__PURE__ */ u.jsx("p", { className: "vers-text-center vers-text-xl vers-text-gray-dark", children: "Nos referimos a ese grupo humano en donde se comparte buenos y malos  momentos, donde hay amor a pesar  de las discusiones.  Hablamos de ese vínculo afectivo que nunca dejaríamos de lado y que nos llena de paz." }),
    /* @__PURE__ */ u.jsxs("div", { className: "vers-flex vers-gap-2", children: [
      /* @__PURE__ */ u.jsx(rt, { text: "Algunas experiencias" }),
      /* @__PURE__ */ u.jsx(rt, { text: "Nuestros aliados" })
    ] })
  ] }) }),
  /* @__PURE__ */ u.jsx(Je, { children: /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
    /* @__PURE__ */ u.jsxs("div", { className: "vers-flex vers-flex-col sm:vers-grid sm:vers-grid-cols-[1.5fr,3fr]", children: [
      /* @__PURE__ */ u.jsx("div", { className: "vers-hidden sm:vers-inline-block", children: /* @__PURE__ */ u.jsx("img", { className: "vers-w-full", src: "/equipo/image 4 (1).png", alt: "Fotografia de Andrea, Rojas Vera" }) }),
      /* @__PURE__ */ u.jsx("div", { className: "vers-bg-purple-100 vers-p-2 sm:vers-p-4 md:vers-p-6", children: /* @__PURE__ */ u.jsx(Ie, { text: "fundadora y coordinadora", children: /* @__PURE__ */ u.jsxs("div", { className: "vers-flex vers-flex-col vers-gap-2", children: [
        /* @__PURE__ */ u.jsx("img", { className: "sm:vers-hidden", src: "/equipo/image 4 (1).png", alt: "" }),
        /* @__PURE__ */ u.jsxs("div", { className: "vers-flex vers-flex-col vers-gap-1", children: [
          /* @__PURE__ */ u.jsx("h2", { className: "vers-font-bold vers-text-xl", children: Mi.name }),
          /* @__PURE__ */ u.jsx("p", { className: "vers-font-medium md:vers-font-normal md:vers-text-xl", children: Mi.biography })
        ] })
      ] }) }) })
    ] }),
    Wf.map((e, t) => /* @__PURE__ */ u.jsx(Ie, { text: e.title, children: /* @__PURE__ */ u.jsx(pa, { children: /* @__PURE__ */ u.jsx(u.Fragment, { children: e.members.map((r, a) => /* @__PURE__ */ ss(Ff, { ...r, key: a })) }) }) }, t))
  ] }) })
] }), Gf = {
  red: "vers-bg-red",
  blue: "vers-bg-blue",
  purple: "vers-bg-purple-300"
}, Hf = ({ title: e = "Titulo", description: t = "descripcion", image: r = "", color: a = "red" }) => /* @__PURE__ */ u.jsxs("article", { className: `${Gf[a]} md:vers-grid md:vers-grid-cols-[350px,2fr] md:vers-h-[550px] vers-overflow-hidden`, children: [
  /* @__PURE__ */ u.jsxs("div", { className: "vers-p-3 sm:vers-p-2 md:vers-flex vers-flex-col vers-flex vers-gap-1 md:vers-flex-row", children: [
    /* @__PURE__ */ u.jsx("div", { className: "md:vers-w-[50px] vers-flex md:vers-justify-center md:vers-items-center ", children: /* @__PURE__ */ u.jsxs("div", { className: "md:vers-flex md:vers-gap-4 md:vers-rotate-[-90deg] md:vers-translate-y-7 md:vers-translate-x-[-.2rem]", children: [
      /* @__PURE__ */ u.jsxs("div", { className: "vers-hidden md:vers-flex vers-flex-row vers-justify-center vers-items-center vers-gap-[.6rem]", children: [
        /* @__PURE__ */ u.jsx("div", { className: "vers-w-[100px] vers-h-[2px] vers-bg-white" }),
        /* @__PURE__ */ u.jsx("div", { className: "vers-w-[12px] vers-h-[12px] vers-rounded-full vers-bg-white" })
      ] }),
      /* @__PURE__ */ u.jsx("h2", { className: "vers-inline-block vers-text-white vers-text-2xl md:vers-text-3xl vers-uppercase vers-font-bold", children: e })
    ] }) }),
    /* @__PURE__ */ u.jsx("div", { className: "sm:vers-flex sm:vers-items-end md:vers-pb-6 vers-relative md:vers-w-[255px]", children: /* @__PURE__ */ u.jsx("p", { className: "vers-text-white vers-leading-[20px] sm:vers-leading-[30px] md:vers-leading-[35px] md:vers-w-full vers-break-words", children: t }) })
  ] }),
  /* @__PURE__ */ u.jsx("div", { className: "vers-h-auto vers-overflow-hidden md:h-full vers-w-full", children: /* @__PURE__ */ u.jsx("img", { className: "vers-aspect-[2/1] md:vers-w-full md:vers-h-full md:vers-object-cover vers-bg-gray", src: r, alt: "" }) })
] }), qf = Hf, Kf = [
  {
    title: "Festividades",
    description: "Descubre mayor información sobre festividades como el día del condón, el día del sexo oral, entre otros.",
    image: "/img2.webp"
  },
  {
    title: "Trivias",
    description: "Desafía tus conocimientos con nuestras trivias, recuerdas que potenciar tus conocimientos es parte de convertirse en agente de cambio.",
    image: "/img1.webp"
  },
  {
    title: "Talleres",
    description: "Revive cada taller que realizamos en nuestra página de Facebook.",
    image: "/img3.webp"
  }
], Xf = (e) => {
  const t = ["purple", "blue", "red"];
  return t[e % t.length];
}, Zf = () => /* @__PURE__ */ u.jsx("section", { className: "vers-grow", children: /* @__PURE__ */ u.jsx(Je, { children: /* @__PURE__ */ u.jsx("div", { className: "vers-flex vers-flex-col vers-gap-4 md:vers-mt-[-2rem]", children: Kf.map((e, t) => /* @__PURE__ */ u.jsx(
  qf,
  {
    color: Xf(t),
    title: e.title,
    description: e.description,
    image: e.image
  },
  t
)) }) }) }), ut = "vers-p-1 md:vers-p-3 vers-border-solid vers-border-4 vers-border-primary vers-text-xl placeholder:vers-text-xl vers-text-black placeholder:vers-text-gray vers-font-medium vers-drop-shadow-[-5px_5px_0px_#dbbddc] md:vers-drop-shadow-[10px_10px_0px_#dbbddc]", Jf = () => {
  const [e, t] = Ct({}), r = (n) => {
    n.preventDefault(), console.log(e);
  }, a = (n) => {
    t({ ...e, [n.target.name]: n.target.value });
  };
  return /* @__PURE__ */ u.jsx("section", { className: "vers-grow vers-h-hero vers-flex", children: /* @__PURE__ */ u.jsx(Je, { children: /* @__PURE__ */ u.jsx(Ie, { text: "Cóntactanos", children: /* @__PURE__ */ u.jsxs("form", { className: "vers-grid vers-grid-cols-1 sm:vers-grid-cols-2 vers-gap-4", onSubmit: r, children: [
    /* @__PURE__ */ u.jsx(
      "input",
      {
        className: ut,
        type: "text",
        name: "name",
        pattern: "^[A-Za-z\\s]+$",
        placeholder: "Nombres",
        onChange: a,
        title: "El nombre o nombres no deben contener números ni caracteres especiales.",
        required: !0
      }
    ),
    /* @__PURE__ */ u.jsx(
      "input",
      {
        className: ut,
        type: "text",
        name: "lastName",
        placeholder: "Apellidos",
        pattern: "^[A-Za-z\\s]+$",
        onChange: a,
        title: "El apellido o apellidos no deben contener números ni caracteres especiales.",
        required: !0
      }
    ),
    /* @__PURE__ */ u.jsx(
      "input",
      {
        className: ut,
        type: "email",
        name: "email",
        placeholder: "Correo Electronico",
        onChange: a,
        pattern: "[a-z0-9._%+\\-]+@[a-z0-9.\\-]+\\.[a-z]{2,}$",
        title: "Por favor, introduce un email valido, Ejem: usuario123@gmail.com",
        required: !0
      }
    ),
    /* @__PURE__ */ u.jsx(
      "input",
      {
        className: ut,
        type: "tel",
        name: "telefono",
        placeholder: "Numero de telefono",
        onChange: a,
        pattern: "[0-9]{9}",
        title: "Por favor, introduce un número de teléfono válido de 9 dígitos, sin incluir el codigo de pais +51, Ejm: 123 456 789",
        required: !0
      }
    ),
    /* @__PURE__ */ u.jsx(
      "input",
      {
        className: `${ut} sm:vers-col-span-2`,
        type: "text",
        name: "message",
        placeholder: "Escribe tu mensaje aqui...",
        onChange: a,
        required: !0
      }
    ),
    /* @__PURE__ */ u.jsx("div", { className: "vers-flex sm:vers-col-span-2 vers-justify-end", children: /* @__PURE__ */ u.jsx(
      "input",
      {
        className: `${ut} vers-w-full sm:vers-w-auto sm:vers-px-[7rem] md:vers-px-[7rem] vers-bg-white`,
        type: "submit",
        placeholder: "Enviar"
      }
    ) })
  ] }) }) }) });
}, _f = ({ title: e, text: t, image: r }) => /* @__PURE__ */ u.jsxs("article", { className: "vers-bg-purple-500 vers-overflow-hidden vers-rounded-tr-[2.5rem] vers-rounded-bl-[2.5rem]", children: [
  /* @__PURE__ */ u.jsx("img", { className: "vers-object-cover vers-w-full vers-rounded-bl-[2.5rem] vers-aspect-square", src: r, alt: "" }),
  /* @__PURE__ */ u.jsxs("div", { className: "vers-px-4 vers-py-3 sm:vers-pt-4 sm:vers-pb-6 vers-flex vers-flex-col vers-gap-2 vers-items-center", children: [
    /* @__PURE__ */ u.jsx("h2", { className: "vers-text-xl vers-font-bold vers-text-white", children: e }),
    /* @__PURE__ */ u.jsx("p", { className: "vers-text-md vers-text-white ", children: t })
  ] })
] }), ga = ({ children: e, fondoImg: t, alt: r }) => /* @__PURE__ */ u.jsxs("div", { className: "vers-relative", children: [
  /* @__PURE__ */ u.jsx("div", { className: "vers-w-full vers-h-full vers-absolute vers-z-[-1]", children: /* @__PURE__ */ u.jsx("img", { className: "vers-w-full vers-h-full vers-absolute vers-object-cover", src: t, alt: r }) }),
  e
] }), $f = () => /* @__PURE__ */ u.jsx(ga, { fondoImg: "https://i.pinimg.com/originals/a4/4d/f3/a44df38371c4201b48b063c457363953.jpg", alt: "dos conejos cafes jusntos sobre la hierba", children: /* @__PURE__ */ u.jsx("section", { className: "vers-bg-gradient-to-r vers-from-purple-800 vers-to-transparent vers-bg-cover vers-bg-center vers-h-hero vers-flex vers-items-center vers-p-3 sm:vers-pl-8 md:vers-pl-[8rem]", children: /* @__PURE__ */ u.jsxs("div", { className: "vers-flex vers-flex-col vers-justify-center vers-items-center sm:vers-items-start vers-gap-2 sm:vers-w-[400px] vers-bg-gxxxxxreen md:vers-gap-5", children: [
  /* @__PURE__ */ u.jsx("h2", { className: "vers-text-white vers-text-center sm:vers-text-left vers-text-3xl sm:vers-text-4xl md:vers-text-7xl vers-uppercase vers-font-bold", children: "nuestros servicios" }),
  /* @__PURE__ */ u.jsx("p", { className: "vers-text-white vers-text-center sm:vers-text-xl sm:vers-text-left", children: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores omnis sit harum beatae alias corrupti, iusto possimus recusandae sunt minus." }),
  /* @__PURE__ */ u.jsx(rt, { text: "Ver Más", color: "secondary" })
] }) }) }), ed = [
  {
    title: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
    text: "Lorem ipsum dolor sit amet. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam commodi odio velit soluta ipsam, ullam numquam labore delectus laborum mollitia.",
    image: "https://images.pexels.com/photos/15632172/pexels-photo-15632172/free-photo-of-mujer-nubes-rubia-cerca.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
  },
  {
    title: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
    text: "Lorem ipsum dolor sit amet. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam commodi odio velit soluta ipsam, ullam numquam labore delectus laborum mollitia.",
    image: "https://images.pexels.com/photos/15632172/pexels-photo-15632172/free-photo-of-mujer-nubes-rubia-cerca.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
  },
  {
    title: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
    text: "Lorem ipsum dolor sit amet. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam commodi odio velit soluta ipsam, ullam numquam labore delectus laborum mollitia.",
    image: "https://images.pexels.com/photos/15632172/pexels-photo-15632172/free-photo-of-mujer-nubes-rubia-cerca.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
  },
  {
    title: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
    text: "Lorem ipsum dolor sit amet. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam commodi odio velit soluta ipsam, ullam numquam labore delectus laborum mollitia.",
    image: "https://images.pexels.com/photos/15632172/pexels-photo-15632172/free-photo-of-mujer-nubes-rubia-cerca.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
  },
  {
    title: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
    text: "Lorem ipsum dolor sit amet. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam commodi odio velit soluta ipsam, ullam numquam labore delectus laborum mollitia.",
    image: "https://images.pexels.com/photos/15632172/pexels-photo-15632172/free-photo-of-mujer-nubes-rubia-cerca.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
  },
  {
    title: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
    text: "Lorem ipsum dolor sit amet. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam commodi odio velit soluta ipsam, ullam numquam labore delectus laborum mollitia.",
    image: "https://images.pexels.com/photos/15632172/pexels-photo-15632172/free-photo-of-mujer-nubes-rubia-cerca.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
  }
], td = () => /* @__PURE__ */ u.jsxs("div", { children: [
  /* @__PURE__ */ u.jsx($f, {}),
  /* @__PURE__ */ u.jsx(Je, { children: /* @__PURE__ */ u.jsx(Ie, { text: "Servicios", children: /* @__PURE__ */ u.jsx(pa, { children: /* @__PURE__ */ u.jsx(u.Fragment, { children: ed.map((e, t) => /* @__PURE__ */ ss(_f, { ...e, key: t })) }) }) }) })
] });
function ji(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), r.push.apply(r, a);
  }
  return r;
}
function C(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ji(Object(r), !0).forEach(function(a) {
      ye(e, a, r[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ji(Object(r)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
    });
  }
  return e;
}
function wr(e) {
  "@babel/helpers - typeof";
  return wr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, wr(e);
}
function rd(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ei(e, t) {
  for (var r = 0; r < t.length; r++) {
    var a = t[r];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
  }
}
function nd(e, t, r) {
  return t && Ei(e.prototype, t), r && Ei(e, r), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function ye(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function ha(e, t) {
  return id(e) || od(e, t) || Hs(e, t) || ud();
}
function qt(e) {
  return ad(e) || sd(e) || Hs(e) || ld();
}
function ad(e) {
  if (Array.isArray(e))
    return Un(e);
}
function id(e) {
  if (Array.isArray(e))
    return e;
}
function sd(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function od(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var a = [], n = !0, i = !1, s, o;
    try {
      for (r = r.call(e); !(n = (s = r.next()).done) && (a.push(s.value), !(t && a.length === t)); n = !0)
        ;
    } catch (l) {
      i = !0, o = l;
    } finally {
      try {
        !n && r.return != null && r.return();
      } finally {
        if (i)
          throw o;
      }
    }
    return a;
  }
}
function Hs(e, t) {
  if (e) {
    if (typeof e == "string")
      return Un(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Un(e, t);
  }
}
function Un(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, a = new Array(t); r < t; r++)
    a[r] = e[r];
  return a;
}
function ld() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ud() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Ni = function() {
}, ya = {}, qs = {}, Ks = null, Xs = {
  mark: Ni,
  measure: Ni
};
try {
  typeof window < "u" && (ya = window), typeof document < "u" && (qs = document), typeof MutationObserver < "u" && (Ks = MutationObserver), typeof performance < "u" && (Xs = performance);
} catch {
}
var cd = ya.navigator || {}, Ai = cd.userAgent, wi = Ai === void 0 ? "" : Ai, Ke = ya, ce = qs, Si = Ks, tr = Xs;
Ke.document;
var Fe = !!ce.documentElement && !!ce.head && typeof ce.addEventListener == "function" && typeof ce.createElement == "function", Zs = ~wi.indexOf("MSIE") || ~wi.indexOf("Trident/"), rr, nr, ar, ir, sr, Qe = "___FONT_AWESOME___", Bn = 16, Js = "fa", _s = "svg-inline--fa", nt = "data-fa-i2svg", Fn = "data-fa-pseudo-element", fd = "data-fa-pseudo-element-pending", ba = "data-prefix", xa = "data-icon", Oi = "fontawesome-i2svg", dd = "async", vd = ["HTML", "HEAD", "STYLE", "SCRIPT"], $s = function() {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
}(), ue = "classic", pe = "sharp", Ma = [ue, pe];
function Kt(e) {
  return new Proxy(e, {
    get: function(r, a) {
      return a in r ? r[a] : r[ue];
    }
  });
}
var Qt = Kt((rr = {}, ye(rr, ue, {
  fa: "solid",
  fas: "solid",
  "fa-solid": "solid",
  far: "regular",
  "fa-regular": "regular",
  fal: "light",
  "fa-light": "light",
  fat: "thin",
  "fa-thin": "thin",
  fad: "duotone",
  "fa-duotone": "duotone",
  fab: "brands",
  "fa-brands": "brands",
  fak: "kit",
  "fa-kit": "kit"
}), ye(rr, pe, {
  fa: "solid",
  fass: "solid",
  "fa-solid": "solid",
  fasr: "regular",
  "fa-regular": "regular",
  fasl: "light",
  "fa-light": "light"
}), rr)), Ut = Kt((nr = {}, ye(nr, ue, {
  solid: "fas",
  regular: "far",
  light: "fal",
  thin: "fat",
  duotone: "fad",
  brands: "fab",
  kit: "fak"
}), ye(nr, pe, {
  solid: "fass",
  regular: "fasr",
  light: "fasl"
}), nr)), Bt = Kt((ar = {}, ye(ar, ue, {
  fab: "fa-brands",
  fad: "fa-duotone",
  fak: "fa-kit",
  fal: "fa-light",
  far: "fa-regular",
  fas: "fa-solid",
  fat: "fa-thin"
}), ye(ar, pe, {
  fass: "fa-solid",
  fasr: "fa-regular",
  fasl: "fa-light"
}), ar)), md = Kt((ir = {}, ye(ir, ue, {
  "fa-brands": "fab",
  "fa-duotone": "fad",
  "fa-kit": "fak",
  "fa-light": "fal",
  "fa-regular": "far",
  "fa-solid": "fas",
  "fa-thin": "fat"
}), ye(ir, pe, {
  "fa-solid": "fass",
  "fa-regular": "fasr",
  "fa-light": "fasl"
}), ir)), pd = /fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/, eo = "fa-layers-text", gd = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i, hd = Kt((sr = {}, ye(sr, ue, {
  900: "fas",
  400: "far",
  normal: "far",
  300: "fal",
  100: "fat"
}), ye(sr, pe, {
  900: "fass",
  400: "fasr",
  300: "fasl"
}), sr)), to = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], yd = to.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), bd = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], $e = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, Ft = /* @__PURE__ */ new Set();
Object.keys(Ut[ue]).map(Ft.add.bind(Ft));
Object.keys(Ut[pe]).map(Ft.add.bind(Ft));
var xd = [].concat(Ma, qt(Ft), ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", $e.GROUP, $e.SWAP_OPACITY, $e.PRIMARY, $e.SECONDARY]).concat(to.map(function(e) {
  return "".concat(e, "x");
})).concat(yd.map(function(e) {
  return "w-".concat(e);
})), Dt = Ke.FontAwesomeConfig || {};
function Md(e) {
  var t = ce.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function jd(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
if (ce && typeof ce.querySelector == "function") {
  var Ed = [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
  Ed.forEach(function(e) {
    var t = ha(e, 2), r = t[0], a = t[1], n = jd(Md(r));
    n != null && (Dt[a] = n);
  });
}
var ro = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: Js,
  replacementClass: _s,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: "async",
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0
};
Dt.familyPrefix && (Dt.cssPrefix = Dt.familyPrefix);
var yt = C(C({}, ro), Dt);
yt.autoReplaceSvg || (yt.observeMutations = !1);
var L = {};
Object.keys(ro).forEach(function(e) {
  Object.defineProperty(L, e, {
    enumerable: !0,
    set: function(r) {
      yt[e] = r, kt.forEach(function(a) {
        return a(L);
      });
    },
    get: function() {
      return yt[e];
    }
  });
});
Object.defineProperty(L, "familyPrefix", {
  enumerable: !0,
  set: function(t) {
    yt.cssPrefix = t, kt.forEach(function(r) {
      return r(L);
    });
  },
  get: function() {
    return yt.cssPrefix;
  }
});
Ke.FontAwesomeConfig = L;
var kt = [];
function Nd(e) {
  return kt.push(e), function() {
    kt.splice(kt.indexOf(e), 1);
  };
}
var We = Bn, ze = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function Ad(e) {
  if (!(!e || !Fe)) {
    var t = ce.createElement("style");
    t.setAttribute("type", "text/css"), t.innerHTML = e;
    for (var r = ce.head.childNodes, a = null, n = r.length - 1; n > -1; n--) {
      var i = r[n], s = (i.tagName || "").toUpperCase();
      ["STYLE", "LINK"].indexOf(s) > -1 && (a = i);
    }
    return ce.head.insertBefore(t, a), e;
  }
}
var wd = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function Wt() {
  for (var e = 12, t = ""; e-- > 0; )
    t += wd[Math.random() * 62 | 0];
  return t;
}
function Mt(e) {
  for (var t = [], r = (e || []).length >>> 0; r--; )
    t[r] = e[r];
  return t;
}
function ja(e) {
  return e.classList ? Mt(e.classList) : (e.getAttribute("class") || "").split(" ").filter(function(t) {
    return t;
  });
}
function no(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Sd(e) {
  return Object.keys(e || {}).reduce(function(t, r) {
    return t + "".concat(r, '="').concat(no(e[r]), '" ');
  }, "").trim();
}
function Qr(e) {
  return Object.keys(e || {}).reduce(function(t, r) {
    return t + "".concat(r, ": ").concat(e[r].trim(), ";");
  }, "");
}
function Ea(e) {
  return e.size !== ze.size || e.x !== ze.x || e.y !== ze.y || e.rotate !== ze.rotate || e.flipX || e.flipY;
}
function Od(e) {
  var t = e.transform, r = e.containerWidth, a = e.iconWidth, n = {
    transform: "translate(".concat(r / 2, " 256)")
  }, i = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "), s = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "), o = "rotate(".concat(t.rotate, " 0 0)"), l = {
    transform: "".concat(i, " ").concat(s, " ").concat(o)
  }, c = {
    transform: "translate(".concat(a / 2 * -1, " -256)")
  };
  return {
    outer: n,
    inner: l,
    path: c
  };
}
function Td(e) {
  var t = e.transform, r = e.width, a = r === void 0 ? Bn : r, n = e.height, i = n === void 0 ? Bn : n, s = e.startCentered, o = s === void 0 ? !1 : s, l = "";
  return o && Zs ? l += "translate(".concat(t.x / We - a / 2, "em, ").concat(t.y / We - i / 2, "em) ") : o ? l += "translate(calc(-50% + ".concat(t.x / We, "em), calc(-50% + ").concat(t.y / We, "em)) ") : l += "translate(".concat(t.x / We, "em, ").concat(t.y / We, "em) "), l += "scale(".concat(t.size / We * (t.flipX ? -1 : 1), ", ").concat(t.size / We * (t.flipY ? -1 : 1), ") "), l += "rotate(".concat(t.rotate, "deg) "), l;
}
var Id = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;
function ao() {
  var e = Js, t = _s, r = L.cssPrefix, a = L.replacementClass, n = Id;
  if (r !== e || a !== t) {
    var i = new RegExp("\\.".concat(e, "\\-"), "g"), s = new RegExp("\\--".concat(e, "\\-"), "g"), o = new RegExp("\\.".concat(t), "g");
    n = n.replace(i, ".".concat(r, "-")).replace(s, "--".concat(r, "-")).replace(o, ".".concat(a));
  }
  return n;
}
var Ti = !1;
function un() {
  L.autoAddCss && !Ti && (Ad(ao()), Ti = !0);
}
var Dd = {
  mixout: function() {
    return {
      dom: {
        css: ao,
        insertCss: un
      }
    };
  },
  hooks: function() {
    return {
      beforeDOMElementCreation: function() {
        un();
      },
      beforeI2svg: function() {
        un();
      }
    };
  }
}, Ue = Ke || {};
Ue[Qe] || (Ue[Qe] = {});
Ue[Qe].styles || (Ue[Qe].styles = {});
Ue[Qe].hooks || (Ue[Qe].hooks = {});
Ue[Qe].shims || (Ue[Qe].shims = []);
var De = Ue[Qe], io = [], kd = function e() {
  ce.removeEventListener("DOMContentLoaded", e), Sr = 1, io.map(function(t) {
    return t();
  });
}, Sr = !1;
Fe && (Sr = (ce.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(ce.readyState), Sr || ce.addEventListener("DOMContentLoaded", kd));
function Cd(e) {
  Fe && (Sr ? setTimeout(e, 0) : io.push(e));
}
function Xt(e) {
  var t = e.tag, r = e.attributes, a = r === void 0 ? {} : r, n = e.children, i = n === void 0 ? [] : n;
  return typeof e == "string" ? no(e) : "<".concat(t, " ").concat(Sd(a), ">").concat(i.map(Xt).join(""), "</").concat(t, ">");
}
function Ii(e, t, r) {
  if (e && e[t] && e[t][r])
    return {
      prefix: t,
      iconName: r,
      icon: e[t][r]
    };
}
var Pd = function(t, r) {
  return function(a, n, i, s) {
    return t.call(r, a, n, i, s);
  };
}, cn = function(t, r, a, n) {
  var i = Object.keys(t), s = i.length, o = n !== void 0 ? Pd(r, n) : r, l, c, f;
  for (a === void 0 ? (l = 1, f = t[i[0]]) : (l = 0, f = a); l < s; l++)
    c = i[l], f = o(f, t[c], c, t);
  return f;
};
function zd(e) {
  for (var t = [], r = 0, a = e.length; r < a; ) {
    var n = e.charCodeAt(r++);
    if (n >= 55296 && n <= 56319 && r < a) {
      var i = e.charCodeAt(r++);
      (i & 64512) == 56320 ? t.push(((n & 1023) << 10) + (i & 1023) + 65536) : (t.push(n), r--);
    } else
      t.push(n);
  }
  return t;
}
function Wn(e) {
  var t = zd(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function Ld(e, t) {
  var r = e.length, a = e.charCodeAt(t), n;
  return a >= 55296 && a <= 56319 && r > t + 1 && (n = e.charCodeAt(t + 1), n >= 56320 && n <= 57343) ? (a - 55296) * 1024 + n - 56320 + 65536 : a;
}
function Di(e) {
  return Object.keys(e).reduce(function(t, r) {
    var a = e[r], n = !!a.icon;
    return n ? t[a.iconName] = a.icon : t[r] = a, t;
  }, {});
}
function Vn(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = r.skipHooks, n = a === void 0 ? !1 : a, i = Di(t);
  typeof De.hooks.addPack == "function" && !n ? De.hooks.addPack(e, Di(t)) : De.styles[e] = C(C({}, De.styles[e] || {}), i), e === "fas" && Vn("fa", t);
}
var or, lr, ur, ct = De.styles, Rd = De.shims, Yd = (or = {}, ye(or, ue, Object.values(Bt[ue])), ye(or, pe, Object.values(Bt[pe])), or), Na = null, so = {}, oo = {}, lo = {}, uo = {}, co = {}, Qd = (lr = {}, ye(lr, ue, Object.keys(Qt[ue])), ye(lr, pe, Object.keys(Qt[pe])), lr);
function Ud(e) {
  return ~xd.indexOf(e);
}
function Bd(e, t) {
  var r = t.split("-"), a = r[0], n = r.slice(1).join("-");
  return a === e && n !== "" && !Ud(n) ? n : null;
}
var fo = function() {
  var t = function(i) {
    return cn(ct, function(s, o, l) {
      return s[l] = cn(o, i, {}), s;
    }, {});
  };
  so = t(function(n, i, s) {
    if (i[3] && (n[i[3]] = s), i[2]) {
      var o = i[2].filter(function(l) {
        return typeof l == "number";
      });
      o.forEach(function(l) {
        n[l.toString(16)] = s;
      });
    }
    return n;
  }), oo = t(function(n, i, s) {
    if (n[s] = s, i[2]) {
      var o = i[2].filter(function(l) {
        return typeof l == "string";
      });
      o.forEach(function(l) {
        n[l] = s;
      });
    }
    return n;
  }), co = t(function(n, i, s) {
    var o = i[2];
    return n[s] = s, o.forEach(function(l) {
      n[l] = s;
    }), n;
  });
  var r = "far" in ct || L.autoFetchSvg, a = cn(Rd, function(n, i) {
    var s = i[0], o = i[1], l = i[2];
    return o === "far" && !r && (o = "fas"), typeof s == "string" && (n.names[s] = {
      prefix: o,
      iconName: l
    }), typeof s == "number" && (n.unicodes[s.toString(16)] = {
      prefix: o,
      iconName: l
    }), n;
  }, {
    names: {},
    unicodes: {}
  });
  lo = a.names, uo = a.unicodes, Na = Ur(L.styleDefault, {
    family: L.familyDefault
  });
};
Nd(function(e) {
  Na = Ur(e.styleDefault, {
    family: L.familyDefault
  });
});
fo();
function Aa(e, t) {
  return (so[e] || {})[t];
}
function Fd(e, t) {
  return (oo[e] || {})[t];
}
function et(e, t) {
  return (co[e] || {})[t];
}
function vo(e) {
  return lo[e] || {
    prefix: null,
    iconName: null
  };
}
function Wd(e) {
  var t = uo[e], r = Aa("fas", e);
  return t || (r ? {
    prefix: "fas",
    iconName: r
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function Xe() {
  return Na;
}
var wa = function() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function Ur(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.family, a = r === void 0 ? ue : r, n = Qt[a][e], i = Ut[a][e] || Ut[a][n], s = e in De.styles ? e : null;
  return i || s || null;
}
var ki = (ur = {}, ye(ur, ue, Object.keys(Bt[ue])), ye(ur, pe, Object.keys(Bt[pe])), ur);
function Br(e) {
  var t, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = r.skipLookups, n = a === void 0 ? !1 : a, i = (t = {}, ye(t, ue, "".concat(L.cssPrefix, "-").concat(ue)), ye(t, pe, "".concat(L.cssPrefix, "-").concat(pe)), t), s = null, o = ue;
  (e.includes(i[ue]) || e.some(function(c) {
    return ki[ue].includes(c);
  })) && (o = ue), (e.includes(i[pe]) || e.some(function(c) {
    return ki[pe].includes(c);
  })) && (o = pe);
  var l = e.reduce(function(c, f) {
    var v = Bd(L.cssPrefix, f);
    if (ct[f] ? (f = Yd[o].includes(f) ? md[o][f] : f, s = f, c.prefix = f) : Qd[o].indexOf(f) > -1 ? (s = f, c.prefix = Ur(f, {
      family: o
    })) : v ? c.iconName = v : f !== L.replacementClass && f !== i[ue] && f !== i[pe] && c.rest.push(f), !n && c.prefix && c.iconName) {
      var m = s === "fa" ? vo(c.iconName) : {}, x = et(c.prefix, c.iconName);
      m.prefix && (s = null), c.iconName = m.iconName || x || c.iconName, c.prefix = m.prefix || c.prefix, c.prefix === "far" && !ct.far && ct.fas && !L.autoFetchSvg && (c.prefix = "fas");
    }
    return c;
  }, wa());
  return (e.includes("fa-brands") || e.includes("fab")) && (l.prefix = "fab"), (e.includes("fa-duotone") || e.includes("fad")) && (l.prefix = "fad"), !l.prefix && o === pe && (ct.fass || L.autoFetchSvg) && (l.prefix = "fass", l.iconName = et(l.prefix, l.iconName) || l.iconName), (l.prefix === "fa" || s === "fa") && (l.prefix = Xe() || "fas"), l;
}
var Vd = /* @__PURE__ */ function() {
  function e() {
    rd(this, e), this.definitions = {};
  }
  return nd(e, [{
    key: "add",
    value: function() {
      for (var r = this, a = arguments.length, n = new Array(a), i = 0; i < a; i++)
        n[i] = arguments[i];
      var s = n.reduce(this._pullDefinitions, {});
      Object.keys(s).forEach(function(o) {
        r.definitions[o] = C(C({}, r.definitions[o] || {}), s[o]), Vn(o, s[o]);
        var l = Bt[ue][o];
        l && Vn(l, s[o]), fo();
      });
    }
  }, {
    key: "reset",
    value: function() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function(r, a) {
      var n = a.prefix && a.iconName && a.icon ? {
        0: a
      } : a;
      return Object.keys(n).map(function(i) {
        var s = n[i], o = s.prefix, l = s.iconName, c = s.icon, f = c[2];
        r[o] || (r[o] = {}), f.length > 0 && f.forEach(function(v) {
          typeof v == "string" && (r[o][v] = c);
        }), r[o][l] = c;
      }), r;
    }
  }]), e;
}(), Ci = [], ft = {}, mt = {}, Gd = Object.keys(mt);
function Hd(e, t) {
  var r = t.mixoutsTo;
  return Ci = e, ft = {}, Object.keys(mt).forEach(function(a) {
    Gd.indexOf(a) === -1 && delete mt[a];
  }), Ci.forEach(function(a) {
    var n = a.mixout ? a.mixout() : {};
    if (Object.keys(n).forEach(function(s) {
      typeof n[s] == "function" && (r[s] = n[s]), wr(n[s]) === "object" && Object.keys(n[s]).forEach(function(o) {
        r[s] || (r[s] = {}), r[s][o] = n[s][o];
      });
    }), a.hooks) {
      var i = a.hooks();
      Object.keys(i).forEach(function(s) {
        ft[s] || (ft[s] = []), ft[s].push(i[s]);
      });
    }
    a.provides && a.provides(mt);
  }), r;
}
function Gn(e, t) {
  for (var r = arguments.length, a = new Array(r > 2 ? r - 2 : 0), n = 2; n < r; n++)
    a[n - 2] = arguments[n];
  var i = ft[e] || [];
  return i.forEach(function(s) {
    t = s.apply(null, [t].concat(a));
  }), t;
}
function at(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
    r[a - 1] = arguments[a];
  var n = ft[e] || [];
  n.forEach(function(i) {
    i.apply(null, r);
  });
}
function Be() {
  var e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return mt[e] ? mt[e].apply(null, t) : void 0;
}
function Hn(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  var t = e.iconName, r = e.prefix || Xe();
  if (t)
    return t = et(r, t) || t, Ii(mo.definitions, r, t) || Ii(De.styles, r, t);
}
var mo = new Vd(), qd = function() {
  L.autoReplaceSvg = !1, L.observeMutations = !1, at("noAuto");
}, Kd = {
  i2svg: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return Fe ? (at("beforeI2svg", t), Be("pseudoElements2svg", t), Be("i2svg", t)) : Promise.reject("Operation requires a DOM of some kind.");
  },
  watch: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = t.autoReplaceSvgRoot;
    L.autoReplaceSvg === !1 && (L.autoReplaceSvg = !0), L.observeMutations = !0, Cd(function() {
      Zd({
        autoReplaceSvgRoot: r
      }), at("watch", t);
    });
  }
}, Xd = {
  icon: function(t) {
    if (t === null)
      return null;
    if (wr(t) === "object" && t.prefix && t.iconName)
      return {
        prefix: t.prefix,
        iconName: et(t.prefix, t.iconName) || t.iconName
      };
    if (Array.isArray(t) && t.length === 2) {
      var r = t[1].indexOf("fa-") === 0 ? t[1].slice(3) : t[1], a = Ur(t[0]);
      return {
        prefix: a,
        iconName: et(a, r) || r
      };
    }
    if (typeof t == "string" && (t.indexOf("".concat(L.cssPrefix, "-")) > -1 || t.match(pd))) {
      var n = Br(t.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: n.prefix || Xe(),
        iconName: et(n.prefix, n.iconName) || n.iconName
      };
    }
    if (typeof t == "string") {
      var i = Xe();
      return {
        prefix: i,
        iconName: et(i, t) || t
      };
    }
  }
}, we = {
  noAuto: qd,
  config: L,
  dom: Kd,
  parse: Xd,
  library: mo,
  findIconDefinition: Hn,
  toHtml: Xt
}, Zd = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = t.autoReplaceSvgRoot, a = r === void 0 ? ce : r;
  (Object.keys(De.styles).length > 0 || L.autoFetchSvg) && Fe && L.autoReplaceSvg && we.dom.i2svg({
    node: a
  });
};
function Fr(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map(function(a) {
        return Xt(a);
      });
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (Fe) {
        var a = ce.createElement("div");
        return a.innerHTML = e.html, a.children;
      }
    }
  }), e;
}
function Jd(e) {
  var t = e.children, r = e.main, a = e.mask, n = e.attributes, i = e.styles, s = e.transform;
  if (Ea(s) && r.found && !a.found) {
    var o = r.width, l = r.height, c = {
      x: o / l / 2,
      y: 0.5
    };
    n.style = Qr(C(C({}, i), {}, {
      "transform-origin": "".concat(c.x + s.x / 16, "em ").concat(c.y + s.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: n,
    children: t
  }];
}
function _d(e) {
  var t = e.prefix, r = e.iconName, a = e.children, n = e.attributes, i = e.symbol, s = i === !0 ? "".concat(t, "-").concat(L.cssPrefix, "-").concat(r) : i;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: C(C({}, n), {}, {
        id: s
      }),
      children: a
    }]
  }];
}
function Sa(e) {
  var t = e.icons, r = t.main, a = t.mask, n = e.prefix, i = e.iconName, s = e.transform, o = e.symbol, l = e.title, c = e.maskId, f = e.titleId, v = e.extra, m = e.watchable, x = m === void 0 ? !1 : m, M = a.found ? a : r, h = M.width, p = M.height, b = n === "fak", g = [L.replacementClass, i ? "".concat(L.cssPrefix, "-").concat(i) : ""].filter(function(I) {
    return v.classes.indexOf(I) === -1;
  }).filter(function(I) {
    return I !== "" || !!I;
  }).concat(v.classes).join(" "), j = {
    children: [],
    attributes: C(C({}, v.attributes), {}, {
      "data-prefix": n,
      "data-icon": i,
      class: g,
      role: v.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(h, " ").concat(p)
    })
  }, w = b && !~v.classes.indexOf("fa-fw") ? {
    width: "".concat(h / p * 16 * 0.0625, "em")
  } : {};
  x && (j.attributes[nt] = ""), l && (j.children.push({
    tag: "title",
    attributes: {
      id: j.attributes["aria-labelledby"] || "title-".concat(f || Wt())
    },
    children: [l]
  }), delete j.attributes.title);
  var y = C(C({}, j), {}, {
    prefix: n,
    iconName: i,
    main: r,
    mask: a,
    maskId: c,
    transform: s,
    symbol: o,
    styles: C(C({}, w), v.styles)
  }), z = a.found && r.found ? Be("generateAbstractMask", y) || {
    children: [],
    attributes: {}
  } : Be("generateAbstractIcon", y) || {
    children: [],
    attributes: {}
  }, K = z.children, T = z.attributes;
  return y.children = K, y.attributes = T, o ? _d(y) : Jd(y);
}
function Pi(e) {
  var t = e.content, r = e.width, a = e.height, n = e.transform, i = e.title, s = e.extra, o = e.watchable, l = o === void 0 ? !1 : o, c = C(C(C({}, s.attributes), i ? {
    title: i
  } : {}), {}, {
    class: s.classes.join(" ")
  });
  l && (c[nt] = "");
  var f = C({}, s.styles);
  Ea(n) && (f.transform = Td({
    transform: n,
    startCentered: !0,
    width: r,
    height: a
  }), f["-webkit-transform"] = f.transform);
  var v = Qr(f);
  v.length > 0 && (c.style = v);
  var m = [];
  return m.push({
    tag: "span",
    attributes: c,
    children: [t]
  }), i && m.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [i]
  }), m;
}
function $d(e) {
  var t = e.content, r = e.title, a = e.extra, n = C(C(C({}, a.attributes), r ? {
    title: r
  } : {}), {}, {
    class: a.classes.join(" ")
  }), i = Qr(a.styles);
  i.length > 0 && (n.style = i);
  var s = [];
  return s.push({
    tag: "span",
    attributes: n,
    children: [t]
  }), r && s.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [r]
  }), s;
}
var fn = De.styles;
function qn(e) {
  var t = e[0], r = e[1], a = e.slice(4), n = ha(a, 1), i = n[0], s = null;
  return Array.isArray(i) ? s = {
    tag: "g",
    attributes: {
      class: "".concat(L.cssPrefix, "-").concat($e.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(L.cssPrefix, "-").concat($e.SECONDARY),
        fill: "currentColor",
        d: i[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(L.cssPrefix, "-").concat($e.PRIMARY),
        fill: "currentColor",
        d: i[1]
      }
    }]
  } : s = {
    tag: "path",
    attributes: {
      fill: "currentColor",
      d: i
    }
  }, {
    found: !0,
    width: t,
    height: r,
    icon: s
  };
}
var ev = {
  found: !1,
  width: 512,
  height: 512
};
function tv(e, t) {
  !$s && !L.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function Kn(e, t) {
  var r = t;
  return t === "fa" && L.styleDefault !== null && (t = Xe()), new Promise(function(a, n) {
    if (Be("missingIconAbstract"), r === "fa") {
      var i = vo(e) || {};
      e = i.iconName || e, t = i.prefix || t;
    }
    if (e && t && fn[t] && fn[t][e]) {
      var s = fn[t][e];
      return a(qn(s));
    }
    tv(e, t), a(C(C({}, ev), {}, {
      icon: L.showMissingIcons && e ? Be("missingIconAbstract") || {} : {}
    }));
  });
}
var zi = function() {
}, Xn = L.measurePerformance && tr && tr.mark && tr.measure ? tr : {
  mark: zi,
  measure: zi
}, Ot = 'FA "6.4.0"', rv = function(t) {
  return Xn.mark("".concat(Ot, " ").concat(t, " begins")), function() {
    return po(t);
  };
}, po = function(t) {
  Xn.mark("".concat(Ot, " ").concat(t, " ends")), Xn.measure("".concat(Ot, " ").concat(t), "".concat(Ot, " ").concat(t, " begins"), "".concat(Ot, " ").concat(t, " ends"));
}, Oa = {
  begin: rv,
  end: po
}, dr = function() {
};
function Li(e) {
  var t = e.getAttribute ? e.getAttribute(nt) : null;
  return typeof t == "string";
}
function nv(e) {
  var t = e.getAttribute ? e.getAttribute(ba) : null, r = e.getAttribute ? e.getAttribute(xa) : null;
  return t && r;
}
function av(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(L.replacementClass);
}
function iv() {
  if (L.autoReplaceSvg === !0)
    return vr.replace;
  var e = vr[L.autoReplaceSvg];
  return e || vr.replace;
}
function sv(e) {
  return ce.createElementNS("http://www.w3.org/2000/svg", e);
}
function ov(e) {
  return ce.createElement(e);
}
function go(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.ceFn, a = r === void 0 ? e.tag === "svg" ? sv : ov : r;
  if (typeof e == "string")
    return ce.createTextNode(e);
  var n = a(e.tag);
  Object.keys(e.attributes || []).forEach(function(s) {
    n.setAttribute(s, e.attributes[s]);
  });
  var i = e.children || [];
  return i.forEach(function(s) {
    n.appendChild(go(s, {
      ceFn: a
    }));
  }), n;
}
function lv(e) {
  var t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
var vr = {
  replace: function(t) {
    var r = t[0];
    if (r.parentNode)
      if (t[1].forEach(function(n) {
        r.parentNode.insertBefore(go(n), r);
      }), r.getAttribute(nt) === null && L.keepOriginalSource) {
        var a = ce.createComment(lv(r));
        r.parentNode.replaceChild(a, r);
      } else
        r.remove();
  },
  nest: function(t) {
    var r = t[0], a = t[1];
    if (~ja(r).indexOf(L.replacementClass))
      return vr.replace(t);
    var n = new RegExp("".concat(L.cssPrefix, "-.*"));
    if (delete a[0].attributes.id, a[0].attributes.class) {
      var i = a[0].attributes.class.split(" ").reduce(function(o, l) {
        return l === L.replacementClass || l.match(n) ? o.toSvg.push(l) : o.toNode.push(l), o;
      }, {
        toNode: [],
        toSvg: []
      });
      a[0].attributes.class = i.toSvg.join(" "), i.toNode.length === 0 ? r.removeAttribute("class") : r.setAttribute("class", i.toNode.join(" "));
    }
    var s = a.map(function(o) {
      return Xt(o);
    }).join(`
`);
    r.setAttribute(nt, ""), r.innerHTML = s;
  }
};
function Ri(e) {
  e();
}
function ho(e, t) {
  var r = typeof t == "function" ? t : dr;
  if (e.length === 0)
    r();
  else {
    var a = Ri;
    L.mutateApproach === dd && (a = Ke.requestAnimationFrame || Ri), a(function() {
      var n = iv(), i = Oa.begin("mutate");
      e.map(n), i(), r();
    });
  }
}
var Ta = !1;
function yo() {
  Ta = !0;
}
function Zn() {
  Ta = !1;
}
var Or = null;
function Yi(e) {
  if (Si && L.observeMutations) {
    var t = e.treeCallback, r = t === void 0 ? dr : t, a = e.nodeCallback, n = a === void 0 ? dr : a, i = e.pseudoElementsCallback, s = i === void 0 ? dr : i, o = e.observeMutationsRoot, l = o === void 0 ? ce : o;
    Or = new Si(function(c) {
      if (!Ta) {
        var f = Xe();
        Mt(c).forEach(function(v) {
          if (v.type === "childList" && v.addedNodes.length > 0 && !Li(v.addedNodes[0]) && (L.searchPseudoElements && s(v.target), r(v.target)), v.type === "attributes" && v.target.parentNode && L.searchPseudoElements && s(v.target.parentNode), v.type === "attributes" && Li(v.target) && ~bd.indexOf(v.attributeName))
            if (v.attributeName === "class" && nv(v.target)) {
              var m = Br(ja(v.target)), x = m.prefix, M = m.iconName;
              v.target.setAttribute(ba, x || f), M && v.target.setAttribute(xa, M);
            } else
              av(v.target) && n(v.target);
        });
      }
    }), Fe && Or.observe(l, {
      childList: !0,
      attributes: !0,
      characterData: !0,
      subtree: !0
    });
  }
}
function uv() {
  Or && Or.disconnect();
}
function cv(e) {
  var t = e.getAttribute("style"), r = [];
  return t && (r = t.split(";").reduce(function(a, n) {
    var i = n.split(":"), s = i[0], o = i.slice(1);
    return s && o.length > 0 && (a[s] = o.join(":").trim()), a;
  }, {})), r;
}
function fv(e) {
  var t = e.getAttribute("data-prefix"), r = e.getAttribute("data-icon"), a = e.innerText !== void 0 ? e.innerText.trim() : "", n = Br(ja(e));
  return n.prefix || (n.prefix = Xe()), t && r && (n.prefix = t, n.iconName = r), n.iconName && n.prefix || (n.prefix && a.length > 0 && (n.iconName = Fd(n.prefix, e.innerText) || Aa(n.prefix, Wn(e.innerText))), !n.iconName && L.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (n.iconName = e.firstChild.data)), n;
}
function dv(e) {
  var t = Mt(e.attributes).reduce(function(n, i) {
    return n.name !== "class" && n.name !== "style" && (n[i.name] = i.value), n;
  }, {}), r = e.getAttribute("title"), a = e.getAttribute("data-fa-title-id");
  return L.autoA11y && (r ? t["aria-labelledby"] = "".concat(L.replacementClass, "-title-").concat(a || Wt()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function vv() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: ze,
    symbol: !1,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function Qi(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  }, r = fv(e), a = r.iconName, n = r.prefix, i = r.rest, s = dv(e), o = Gn("parseNodeAttributes", {}, e), l = t.styleParser ? cv(e) : [];
  return C({
    iconName: a,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: n,
    transform: ze,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: i,
      styles: l,
      attributes: s
    }
  }, o);
}
var mv = De.styles;
function bo(e) {
  var t = L.autoReplaceSvg === "nest" ? Qi(e, {
    styleParser: !1
  }) : Qi(e);
  return ~t.extra.classes.indexOf(eo) ? Be("generateLayersText", e, t) : Be("generateSvgReplacementMutation", e, t);
}
var Ze = /* @__PURE__ */ new Set();
Ma.map(function(e) {
  Ze.add("fa-".concat(e));
});
Object.keys(Qt[ue]).map(Ze.add.bind(Ze));
Object.keys(Qt[pe]).map(Ze.add.bind(Ze));
Ze = qt(Ze);
function Ui(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!Fe)
    return Promise.resolve();
  var r = ce.documentElement.classList, a = function(v) {
    return r.add("".concat(Oi, "-").concat(v));
  }, n = function(v) {
    return r.remove("".concat(Oi, "-").concat(v));
  }, i = L.autoFetchSvg ? Ze : Ma.map(function(f) {
    return "fa-".concat(f);
  }).concat(Object.keys(mv));
  i.includes("fa") || i.push("fa");
  var s = [".".concat(eo, ":not([").concat(nt, "])")].concat(i.map(function(f) {
    return ".".concat(f, ":not([").concat(nt, "])");
  })).join(", ");
  if (s.length === 0)
    return Promise.resolve();
  var o = [];
  try {
    o = Mt(e.querySelectorAll(s));
  } catch {
  }
  if (o.length > 0)
    a("pending"), n("complete");
  else
    return Promise.resolve();
  var l = Oa.begin("onTree"), c = o.reduce(function(f, v) {
    try {
      var m = bo(v);
      m && f.push(m);
    } catch (x) {
      $s || x.name === "MissingIcon" && console.error(x);
    }
    return f;
  }, []);
  return new Promise(function(f, v) {
    Promise.all(c).then(function(m) {
      ho(m, function() {
        a("active"), a("complete"), n("pending"), typeof t == "function" && t(), l(), f();
      });
    }).catch(function(m) {
      l(), v(m);
    });
  });
}
function pv(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  bo(e).then(function(r) {
    r && ho([r], t);
  });
}
function gv(e) {
  return function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = (t || {}).icon ? t : Hn(t || {}), n = r.mask;
    return n && (n = (n || {}).icon ? n : Hn(n || {})), e(a, C(C({}, r), {}, {
      mask: n
    }));
  };
}
var hv = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = r.transform, n = a === void 0 ? ze : a, i = r.symbol, s = i === void 0 ? !1 : i, o = r.mask, l = o === void 0 ? null : o, c = r.maskId, f = c === void 0 ? null : c, v = r.title, m = v === void 0 ? null : v, x = r.titleId, M = x === void 0 ? null : x, h = r.classes, p = h === void 0 ? [] : h, b = r.attributes, g = b === void 0 ? {} : b, j = r.styles, w = j === void 0 ? {} : j;
  if (t) {
    var y = t.prefix, z = t.iconName, K = t.icon;
    return Fr(C({
      type: "icon"
    }, t), function() {
      return at("beforeDOMElementCreation", {
        iconDefinition: t,
        params: r
      }), L.autoA11y && (m ? g["aria-labelledby"] = "".concat(L.replacementClass, "-title-").concat(M || Wt()) : (g["aria-hidden"] = "true", g.focusable = "false")), Sa({
        icons: {
          main: qn(K),
          mask: l ? qn(l.icon) : {
            found: !1,
            width: null,
            height: null,
            icon: {}
          }
        },
        prefix: y,
        iconName: z,
        transform: C(C({}, ze), n),
        symbol: s,
        title: m,
        maskId: f,
        titleId: M,
        extra: {
          attributes: g,
          styles: w,
          classes: p
        }
      });
    });
  }
}, yv = {
  mixout: function() {
    return {
      icon: gv(hv)
    };
  },
  hooks: function() {
    return {
      mutationObserverCallbacks: function(r) {
        return r.treeCallback = Ui, r.nodeCallback = pv, r;
      }
    };
  },
  provides: function(t) {
    t.i2svg = function(r) {
      var a = r.node, n = a === void 0 ? ce : a, i = r.callback, s = i === void 0 ? function() {
      } : i;
      return Ui(n, s);
    }, t.generateSvgReplacementMutation = function(r, a) {
      var n = a.iconName, i = a.title, s = a.titleId, o = a.prefix, l = a.transform, c = a.symbol, f = a.mask, v = a.maskId, m = a.extra;
      return new Promise(function(x, M) {
        Promise.all([Kn(n, o), f.iconName ? Kn(f.iconName, f.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then(function(h) {
          var p = ha(h, 2), b = p[0], g = p[1];
          x([r, Sa({
            icons: {
              main: b,
              mask: g
            },
            prefix: o,
            iconName: n,
            transform: l,
            symbol: c,
            maskId: v,
            title: i,
            titleId: s,
            extra: m,
            watchable: !0
          })]);
        }).catch(M);
      });
    }, t.generateAbstractIcon = function(r) {
      var a = r.children, n = r.attributes, i = r.main, s = r.transform, o = r.styles, l = Qr(o);
      l.length > 0 && (n.style = l);
      var c;
      return Ea(s) && (c = Be("generateAbstractTransformGrouping", {
        main: i,
        transform: s,
        containerWidth: i.width,
        iconWidth: i.width
      })), a.push(c || i.icon), {
        children: a,
        attributes: n
      };
    };
  }
}, bv = {
  mixout: function() {
    return {
      layer: function(r) {
        var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = a.classes, i = n === void 0 ? [] : n;
        return Fr({
          type: "layer"
        }, function() {
          at("beforeDOMElementCreation", {
            assembler: r,
            params: a
          });
          var s = [];
          return r(function(o) {
            Array.isArray(o) ? o.map(function(l) {
              s = s.concat(l.abstract);
            }) : s = s.concat(o.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(L.cssPrefix, "-layers")].concat(qt(i)).join(" ")
            },
            children: s
          }];
        });
      }
    };
  }
}, xv = {
  mixout: function() {
    return {
      counter: function(r) {
        var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = a.title, i = n === void 0 ? null : n, s = a.classes, o = s === void 0 ? [] : s, l = a.attributes, c = l === void 0 ? {} : l, f = a.styles, v = f === void 0 ? {} : f;
        return Fr({
          type: "counter",
          content: r
        }, function() {
          return at("beforeDOMElementCreation", {
            content: r,
            params: a
          }), $d({
            content: r.toString(),
            title: i,
            extra: {
              attributes: c,
              styles: v,
              classes: ["".concat(L.cssPrefix, "-layers-counter")].concat(qt(o))
            }
          });
        });
      }
    };
  }
}, Mv = {
  mixout: function() {
    return {
      text: function(r) {
        var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = a.transform, i = n === void 0 ? ze : n, s = a.title, o = s === void 0 ? null : s, l = a.classes, c = l === void 0 ? [] : l, f = a.attributes, v = f === void 0 ? {} : f, m = a.styles, x = m === void 0 ? {} : m;
        return Fr({
          type: "text",
          content: r
        }, function() {
          return at("beforeDOMElementCreation", {
            content: r,
            params: a
          }), Pi({
            content: r,
            transform: C(C({}, ze), i),
            title: o,
            extra: {
              attributes: v,
              styles: x,
              classes: ["".concat(L.cssPrefix, "-layers-text")].concat(qt(c))
            }
          });
        });
      }
    };
  },
  provides: function(t) {
    t.generateLayersText = function(r, a) {
      var n = a.title, i = a.transform, s = a.extra, o = null, l = null;
      if (Zs) {
        var c = parseInt(getComputedStyle(r).fontSize, 10), f = r.getBoundingClientRect();
        o = f.width / c, l = f.height / c;
      }
      return L.autoA11y && !n && (s.attributes["aria-hidden"] = "true"), Promise.resolve([r, Pi({
        content: r.innerHTML,
        width: o,
        height: l,
        transform: i,
        title: n,
        extra: s,
        watchable: !0
      })]);
    };
  }
}, jv = new RegExp('"', "ug"), Bi = [1105920, 1112319];
function Ev(e) {
  var t = e.replace(jv, ""), r = Ld(t, 0), a = r >= Bi[0] && r <= Bi[1], n = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: Wn(n ? t[0] : t),
    isSecondary: a || n
  };
}
function Fi(e, t) {
  var r = "".concat(fd).concat(t.replace(":", "-"));
  return new Promise(function(a, n) {
    if (e.getAttribute(r) !== null)
      return a();
    var i = Mt(e.children), s = i.filter(function(K) {
      return K.getAttribute(Fn) === t;
    })[0], o = Ke.getComputedStyle(e, t), l = o.getPropertyValue("font-family").match(gd), c = o.getPropertyValue("font-weight"), f = o.getPropertyValue("content");
    if (s && !l)
      return e.removeChild(s), a();
    if (l && f !== "none" && f !== "") {
      var v = o.getPropertyValue("content"), m = ~["Sharp"].indexOf(l[2]) ? pe : ue, x = ~["Solid", "Regular", "Light", "Thin", "Duotone", "Brands", "Kit"].indexOf(l[2]) ? Ut[m][l[2].toLowerCase()] : hd[m][c], M = Ev(v), h = M.value, p = M.isSecondary, b = l[0].startsWith("FontAwesome"), g = Aa(x, h), j = g;
      if (b) {
        var w = Wd(h);
        w.iconName && w.prefix && (g = w.iconName, x = w.prefix);
      }
      if (g && !p && (!s || s.getAttribute(ba) !== x || s.getAttribute(xa) !== j)) {
        e.setAttribute(r, j), s && e.removeChild(s);
        var y = vv(), z = y.extra;
        z.attributes[Fn] = t, Kn(g, x).then(function(K) {
          var T = Sa(C(C({}, y), {}, {
            icons: {
              main: K,
              mask: wa()
            },
            prefix: x,
            iconName: j,
            extra: z,
            watchable: !0
          })), I = ce.createElement("svg");
          t === "::before" ? e.insertBefore(I, e.firstChild) : e.appendChild(I), I.outerHTML = T.map(function(Q) {
            return Xt(Q);
          }).join(`
`), e.removeAttribute(r), a();
        }).catch(n);
      } else
        a();
    } else
      a();
  });
}
function Nv(e) {
  return Promise.all([Fi(e, "::before"), Fi(e, "::after")]);
}
function Av(e) {
  return e.parentNode !== document.head && !~vd.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(Fn) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function Wi(e) {
  if (Fe)
    return new Promise(function(t, r) {
      var a = Mt(e.querySelectorAll("*")).filter(Av).map(Nv), n = Oa.begin("searchPseudoElements");
      yo(), Promise.all(a).then(function() {
        n(), Zn(), t();
      }).catch(function() {
        n(), Zn(), r();
      });
    });
}
var wv = {
  hooks: function() {
    return {
      mutationObserverCallbacks: function(r) {
        return r.pseudoElementsCallback = Wi, r;
      }
    };
  },
  provides: function(t) {
    t.pseudoElements2svg = function(r) {
      var a = r.node, n = a === void 0 ? ce : a;
      L.searchPseudoElements && Wi(n);
    };
  }
}, Vi = !1, Sv = {
  mixout: function() {
    return {
      dom: {
        unwatch: function() {
          yo(), Vi = !0;
        }
      }
    };
  },
  hooks: function() {
    return {
      bootstrap: function() {
        Yi(Gn("mutationObserverCallbacks", {}));
      },
      noAuto: function() {
        uv();
      },
      watch: function(r) {
        var a = r.observeMutationsRoot;
        Vi ? Zn() : Yi(Gn("mutationObserverCallbacks", {
          observeMutationsRoot: a
        }));
      }
    };
  }
}, Gi = function(t) {
  var r = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return t.toLowerCase().split(" ").reduce(function(a, n) {
    var i = n.toLowerCase().split("-"), s = i[0], o = i.slice(1).join("-");
    if (s && o === "h")
      return a.flipX = !0, a;
    if (s && o === "v")
      return a.flipY = !0, a;
    if (o = parseFloat(o), isNaN(o))
      return a;
    switch (s) {
      case "grow":
        a.size = a.size + o;
        break;
      case "shrink":
        a.size = a.size - o;
        break;
      case "left":
        a.x = a.x - o;
        break;
      case "right":
        a.x = a.x + o;
        break;
      case "up":
        a.y = a.y - o;
        break;
      case "down":
        a.y = a.y + o;
        break;
      case "rotate":
        a.rotate = a.rotate + o;
        break;
    }
    return a;
  }, r);
}, Ov = {
  mixout: function() {
    return {
      parse: {
        transform: function(r) {
          return Gi(r);
        }
      }
    };
  },
  hooks: function() {
    return {
      parseNodeAttributes: function(r, a) {
        var n = a.getAttribute("data-fa-transform");
        return n && (r.transform = Gi(n)), r;
      }
    };
  },
  provides: function(t) {
    t.generateAbstractTransformGrouping = function(r) {
      var a = r.main, n = r.transform, i = r.containerWidth, s = r.iconWidth, o = {
        transform: "translate(".concat(i / 2, " 256)")
      }, l = "translate(".concat(n.x * 32, ", ").concat(n.y * 32, ") "), c = "scale(".concat(n.size / 16 * (n.flipX ? -1 : 1), ", ").concat(n.size / 16 * (n.flipY ? -1 : 1), ") "), f = "rotate(".concat(n.rotate, " 0 0)"), v = {
        transform: "".concat(l, " ").concat(c, " ").concat(f)
      }, m = {
        transform: "translate(".concat(s / 2 * -1, " -256)")
      }, x = {
        outer: o,
        inner: v,
        path: m
      };
      return {
        tag: "g",
        attributes: C({}, x.outer),
        children: [{
          tag: "g",
          attributes: C({}, x.inner),
          children: [{
            tag: a.icon.tag,
            children: a.icon.children,
            attributes: C(C({}, a.icon.attributes), x.path)
          }]
        }]
      };
    };
  }
}, dn = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function Hi(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function Tv(e) {
  return e.tag === "g" ? e.children : [e];
}
var Iv = {
  hooks: function() {
    return {
      parseNodeAttributes: function(r, a) {
        var n = a.getAttribute("data-fa-mask"), i = n ? Br(n.split(" ").map(function(s) {
          return s.trim();
        })) : wa();
        return i.prefix || (i.prefix = Xe()), r.mask = i, r.maskId = a.getAttribute("data-fa-mask-id"), r;
      }
    };
  },
  provides: function(t) {
    t.generateAbstractMask = function(r) {
      var a = r.children, n = r.attributes, i = r.main, s = r.mask, o = r.maskId, l = r.transform, c = i.width, f = i.icon, v = s.width, m = s.icon, x = Od({
        transform: l,
        containerWidth: v,
        iconWidth: c
      }), M = {
        tag: "rect",
        attributes: C(C({}, dn), {}, {
          fill: "white"
        })
      }, h = f.children ? {
        children: f.children.map(Hi)
      } : {}, p = {
        tag: "g",
        attributes: C({}, x.inner),
        children: [Hi(C({
          tag: f.tag,
          attributes: C(C({}, f.attributes), x.path)
        }, h))]
      }, b = {
        tag: "g",
        attributes: C({}, x.outer),
        children: [p]
      }, g = "mask-".concat(o || Wt()), j = "clip-".concat(o || Wt()), w = {
        tag: "mask",
        attributes: C(C({}, dn), {}, {
          id: g,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [M, b]
      }, y = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: j
          },
          children: Tv(m)
        }, w]
      };
      return a.push(y, {
        tag: "rect",
        attributes: C({
          fill: "currentColor",
          "clip-path": "url(#".concat(j, ")"),
          mask: "url(#".concat(g, ")")
        }, dn)
      }), {
        children: a,
        attributes: n
      };
    };
  }
}, Dv = {
  provides: function(t) {
    var r = !1;
    Ke.matchMedia && (r = Ke.matchMedia("(prefers-reduced-motion: reduce)").matches), t.missingIconAbstract = function() {
      var a = [], n = {
        fill: "currentColor"
      }, i = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      a.push({
        tag: "path",
        attributes: C(C({}, n), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      var s = C(C({}, i), {}, {
        attributeName: "opacity"
      }), o = {
        tag: "circle",
        attributes: C(C({}, n), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return r || o.children.push({
        tag: "animate",
        attributes: C(C({}, i), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: C(C({}, s), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), a.push(o), a.push({
        tag: "path",
        attributes: C(C({}, n), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: r ? [] : [{
          tag: "animate",
          attributes: C(C({}, s), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), r || a.push({
        tag: "path",
        attributes: C(C({}, n), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: C(C({}, s), {}, {
            values: "0;0;1;1;0;0;"
          })
        }]
      }), {
        tag: "g",
        attributes: {
          class: "missing"
        },
        children: a
      };
    };
  }
}, kv = {
  hooks: function() {
    return {
      parseNodeAttributes: function(r, a) {
        var n = a.getAttribute("data-fa-symbol"), i = n === null ? !1 : n === "" ? !0 : n;
        return r.symbol = i, r;
      }
    };
  }
}, Cv = [Dd, yv, bv, xv, Mv, wv, Sv, Ov, Iv, Dv, kv];
Hd(Cv, {
  mixoutsTo: we
});
we.noAuto;
we.config;
we.library;
we.dom;
var Jn = we.parse;
we.findIconDefinition;
we.toHtml;
var Pv = we.icon;
we.layer;
we.text;
we.counter;
var _n = { exports: {} }, cr = { exports: {} }, ie = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qi;
function zv() {
  if (qi)
    return ie;
  qi = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, a = e ? Symbol.for("react.fragment") : 60107, n = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, o = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, v = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, M = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, b = e ? Symbol.for("react.responder") : 60118, g = e ? Symbol.for("react.scope") : 60119;
  function j(y) {
    if (typeof y == "object" && y !== null) {
      var z = y.$$typeof;
      switch (z) {
        case t:
          switch (y = y.type, y) {
            case l:
            case c:
            case a:
            case i:
            case n:
            case v:
              return y;
            default:
              switch (y = y && y.$$typeof, y) {
                case o:
                case f:
                case M:
                case x:
                case s:
                  return y;
                default:
                  return z;
              }
          }
        case r:
          return z;
      }
    }
  }
  function w(y) {
    return j(y) === c;
  }
  return ie.AsyncMode = l, ie.ConcurrentMode = c, ie.ContextConsumer = o, ie.ContextProvider = s, ie.Element = t, ie.ForwardRef = f, ie.Fragment = a, ie.Lazy = M, ie.Memo = x, ie.Portal = r, ie.Profiler = i, ie.StrictMode = n, ie.Suspense = v, ie.isAsyncMode = function(y) {
    return w(y) || j(y) === l;
  }, ie.isConcurrentMode = w, ie.isContextConsumer = function(y) {
    return j(y) === o;
  }, ie.isContextProvider = function(y) {
    return j(y) === s;
  }, ie.isElement = function(y) {
    return typeof y == "object" && y !== null && y.$$typeof === t;
  }, ie.isForwardRef = function(y) {
    return j(y) === f;
  }, ie.isFragment = function(y) {
    return j(y) === a;
  }, ie.isLazy = function(y) {
    return j(y) === M;
  }, ie.isMemo = function(y) {
    return j(y) === x;
  }, ie.isPortal = function(y) {
    return j(y) === r;
  }, ie.isProfiler = function(y) {
    return j(y) === i;
  }, ie.isStrictMode = function(y) {
    return j(y) === n;
  }, ie.isSuspense = function(y) {
    return j(y) === v;
  }, ie.isValidElementType = function(y) {
    return typeof y == "string" || typeof y == "function" || y === a || y === c || y === i || y === n || y === v || y === m || typeof y == "object" && y !== null && (y.$$typeof === M || y.$$typeof === x || y.$$typeof === s || y.$$typeof === o || y.$$typeof === f || y.$$typeof === p || y.$$typeof === b || y.$$typeof === g || y.$$typeof === h);
  }, ie.typeOf = j, ie;
}
var se = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ki;
function Lv() {
  return Ki || (Ki = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, a = e ? Symbol.for("react.fragment") : 60107, n = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, o = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, v = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, M = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, b = e ? Symbol.for("react.responder") : 60118, g = e ? Symbol.for("react.scope") : 60119;
    function j(D) {
      return typeof D == "string" || typeof D == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      D === a || D === c || D === i || D === n || D === v || D === m || typeof D == "object" && D !== null && (D.$$typeof === M || D.$$typeof === x || D.$$typeof === s || D.$$typeof === o || D.$$typeof === f || D.$$typeof === p || D.$$typeof === b || D.$$typeof === g || D.$$typeof === h);
    }
    function w(D) {
      if (typeof D == "object" && D !== null) {
        var Se = D.$$typeof;
        switch (Se) {
          case t:
            var st = D.type;
            switch (st) {
              case l:
              case c:
              case a:
              case i:
              case n:
              case v:
                return st;
              default:
                var _e = st && st.$$typeof;
                switch (_e) {
                  case o:
                  case f:
                  case M:
                  case x:
                  case s:
                    return _e;
                  default:
                    return Se;
                }
            }
          case r:
            return Se;
        }
      }
    }
    var y = l, z = c, K = o, T = s, I = t, Q = f, W = a, R = M, P = x, me = r, le = i, de = n, be = v, xe = !1;
    function Pe(D) {
      return xe || (xe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), E(D) || w(D) === l;
    }
    function E(D) {
      return w(D) === c;
    }
    function k(D) {
      return w(D) === o;
    }
    function B(D) {
      return w(D) === s;
    }
    function G(D) {
      return typeof D == "object" && D !== null && D.$$typeof === t;
    }
    function U(D) {
      return w(D) === f;
    }
    function te(D) {
      return w(D) === a;
    }
    function H(D) {
      return w(D) === M;
    }
    function q(D) {
      return w(D) === x;
    }
    function X(D) {
      return w(D) === r;
    }
    function ne(D) {
      return w(D) === i;
    }
    function Z(D) {
      return w(D) === n;
    }
    function Me(D) {
      return w(D) === v;
    }
    se.AsyncMode = y, se.ConcurrentMode = z, se.ContextConsumer = K, se.ContextProvider = T, se.Element = I, se.ForwardRef = Q, se.Fragment = W, se.Lazy = R, se.Memo = P, se.Portal = me, se.Profiler = le, se.StrictMode = de, se.Suspense = be, se.isAsyncMode = Pe, se.isConcurrentMode = E, se.isContextConsumer = k, se.isContextProvider = B, se.isElement = G, se.isForwardRef = U, se.isFragment = te, se.isLazy = H, se.isMemo = q, se.isPortal = X, se.isProfiler = ne, se.isStrictMode = Z, se.isSuspense = Me, se.isValidElementType = j, se.typeOf = w;
  }()), se;
}
var Xi;
function xo() {
  return Xi || (Xi = 1, process.env.NODE_ENV === "production" ? cr.exports = zv() : cr.exports = Lv()), cr.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var vn, Zi;
function Rv() {
  if (Zi)
    return vn;
  Zi = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function a(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function n() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var s = {}, o = 0; o < 10; o++)
        s["_" + String.fromCharCode(o)] = o;
      var l = Object.getOwnPropertyNames(s).map(function(f) {
        return s[f];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var c = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        c[f] = f;
      }), Object.keys(Object.assign({}, c)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return vn = n() ? Object.assign : function(i, s) {
    for (var o, l = a(i), c, f = 1; f < arguments.length; f++) {
      o = Object(arguments[f]);
      for (var v in o)
        t.call(o, v) && (l[v] = o[v]);
      if (e) {
        c = e(o);
        for (var m = 0; m < c.length; m++)
          r.call(o, c[m]) && (l[c[m]] = o[c[m]]);
      }
    }
    return l;
  }, vn;
}
var mn, Ji;
function Ia() {
  if (Ji)
    return mn;
  Ji = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return mn = e, mn;
}
var pn, _i;
function Mo() {
  return _i || (_i = 1, pn = Function.call.bind(Object.prototype.hasOwnProperty)), pn;
}
var gn, $i;
function Yv() {
  if ($i)
    return gn;
  $i = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Ia(), r = {}, a = Mo();
    e = function(i) {
      var s = "Warning: " + i;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function n(i, s, o, l, c) {
    if (process.env.NODE_ENV !== "production") {
      for (var f in i)
        if (a(i, f)) {
          var v;
          try {
            if (typeof i[f] != "function") {
              var m = Error(
                (l || "React class") + ": " + o + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw m.name = "Invariant Violation", m;
            }
            v = i[f](s, f, l, o, null, t);
          } catch (M) {
            v = M;
          }
          if (v && !(v instanceof Error) && e(
            (l || "React class") + ": type specification of " + o + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof v + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), v instanceof Error && !(v.message in r)) {
            r[v.message] = !0;
            var x = c ? c() : "";
            e(
              "Failed " + o + " type: " + v.message + (x ?? "")
            );
          }
        }
    }
  }
  return n.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, gn = n, gn;
}
var hn, es;
function Qv() {
  if (es)
    return hn;
  es = 1;
  var e = xo(), t = Rv(), r = Ia(), a = Mo(), n = Yv(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(o) {
    var l = "Warning: " + o;
    typeof console < "u" && console.error(l);
    try {
      throw new Error(l);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return hn = function(o, l) {
    var c = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function v(E) {
      var k = E && (c && E[c] || E[f]);
      if (typeof k == "function")
        return k;
    }
    var m = "<<anonymous>>", x = {
      array: b("array"),
      bigint: b("bigint"),
      bool: b("boolean"),
      func: b("function"),
      number: b("number"),
      object: b("object"),
      string: b("string"),
      symbol: b("symbol"),
      any: g(),
      arrayOf: j,
      element: w(),
      elementType: y(),
      instanceOf: z,
      node: Q(),
      objectOf: T,
      oneOf: K,
      oneOfType: I,
      shape: R,
      exact: P
    };
    function M(E, k) {
      return E === k ? E !== 0 || 1 / E === 1 / k : E !== E && k !== k;
    }
    function h(E, k) {
      this.message = E, this.data = k && typeof k == "object" ? k : {}, this.stack = "";
    }
    h.prototype = Error.prototype;
    function p(E) {
      if (process.env.NODE_ENV !== "production")
        var k = {}, B = 0;
      function G(te, H, q, X, ne, Z, Me) {
        if (X = X || m, Z = Z || q, Me !== r) {
          if (l) {
            var D = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw D.name = "Invariant Violation", D;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Se = X + ":" + q;
            !k[Se] && // Avoid spamming the console because they are often not actionable except for lib authors
            B < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + Z + "` prop on `" + X + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), k[Se] = !0, B++);
          }
        }
        return H[q] == null ? te ? H[q] === null ? new h("The " + ne + " `" + Z + "` is marked as required " + ("in `" + X + "`, but its value is `null`.")) : new h("The " + ne + " `" + Z + "` is marked as required in " + ("`" + X + "`, but its value is `undefined`.")) : null : E(H, q, X, ne, Z);
      }
      var U = G.bind(null, !1);
      return U.isRequired = G.bind(null, !0), U;
    }
    function b(E) {
      function k(B, G, U, te, H, q) {
        var X = B[G], ne = de(X);
        if (ne !== E) {
          var Z = be(X);
          return new h(
            "Invalid " + te + " `" + H + "` of type " + ("`" + Z + "` supplied to `" + U + "`, expected ") + ("`" + E + "`."),
            { expectedType: E }
          );
        }
        return null;
      }
      return p(k);
    }
    function g() {
      return p(s);
    }
    function j(E) {
      function k(B, G, U, te, H) {
        if (typeof E != "function")
          return new h("Property `" + H + "` of component `" + U + "` has invalid PropType notation inside arrayOf.");
        var q = B[G];
        if (!Array.isArray(q)) {
          var X = de(q);
          return new h("Invalid " + te + " `" + H + "` of type " + ("`" + X + "` supplied to `" + U + "`, expected an array."));
        }
        for (var ne = 0; ne < q.length; ne++) {
          var Z = E(q, ne, U, te, H + "[" + ne + "]", r);
          if (Z instanceof Error)
            return Z;
        }
        return null;
      }
      return p(k);
    }
    function w() {
      function E(k, B, G, U, te) {
        var H = k[B];
        if (!o(H)) {
          var q = de(H);
          return new h("Invalid " + U + " `" + te + "` of type " + ("`" + q + "` supplied to `" + G + "`, expected a single ReactElement."));
        }
        return null;
      }
      return p(E);
    }
    function y() {
      function E(k, B, G, U, te) {
        var H = k[B];
        if (!e.isValidElementType(H)) {
          var q = de(H);
          return new h("Invalid " + U + " `" + te + "` of type " + ("`" + q + "` supplied to `" + G + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return p(E);
    }
    function z(E) {
      function k(B, G, U, te, H) {
        if (!(B[G] instanceof E)) {
          var q = E.name || m, X = Pe(B[G]);
          return new h("Invalid " + te + " `" + H + "` of type " + ("`" + X + "` supplied to `" + U + "`, expected ") + ("instance of `" + q + "`."));
        }
        return null;
      }
      return p(k);
    }
    function K(E) {
      if (!Array.isArray(E))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), s;
      function k(B, G, U, te, H) {
        for (var q = B[G], X = 0; X < E.length; X++)
          if (M(q, E[X]))
            return null;
        var ne = JSON.stringify(E, function(Me, D) {
          var Se = be(D);
          return Se === "symbol" ? String(D) : D;
        });
        return new h("Invalid " + te + " `" + H + "` of value `" + String(q) + "` " + ("supplied to `" + U + "`, expected one of " + ne + "."));
      }
      return p(k);
    }
    function T(E) {
      function k(B, G, U, te, H) {
        if (typeof E != "function")
          return new h("Property `" + H + "` of component `" + U + "` has invalid PropType notation inside objectOf.");
        var q = B[G], X = de(q);
        if (X !== "object")
          return new h("Invalid " + te + " `" + H + "` of type " + ("`" + X + "` supplied to `" + U + "`, expected an object."));
        for (var ne in q)
          if (a(q, ne)) {
            var Z = E(q, ne, U, te, H + "." + ne, r);
            if (Z instanceof Error)
              return Z;
          }
        return null;
      }
      return p(k);
    }
    function I(E) {
      if (!Array.isArray(E))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var k = 0; k < E.length; k++) {
        var B = E[k];
        if (typeof B != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + xe(B) + " at index " + k + "."
          ), s;
      }
      function G(U, te, H, q, X) {
        for (var ne = [], Z = 0; Z < E.length; Z++) {
          var Me = E[Z], D = Me(U, te, H, q, X, r);
          if (D == null)
            return null;
          D.data && a(D.data, "expectedType") && ne.push(D.data.expectedType);
        }
        var Se = ne.length > 0 ? ", expected one of type [" + ne.join(", ") + "]" : "";
        return new h("Invalid " + q + " `" + X + "` supplied to " + ("`" + H + "`" + Se + "."));
      }
      return p(G);
    }
    function Q() {
      function E(k, B, G, U, te) {
        return me(k[B]) ? null : new h("Invalid " + U + " `" + te + "` supplied to " + ("`" + G + "`, expected a ReactNode."));
      }
      return p(E);
    }
    function W(E, k, B, G, U) {
      return new h(
        (E || "React class") + ": " + k + " type `" + B + "." + G + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + U + "`."
      );
    }
    function R(E) {
      function k(B, G, U, te, H) {
        var q = B[G], X = de(q);
        if (X !== "object")
          return new h("Invalid " + te + " `" + H + "` of type `" + X + "` " + ("supplied to `" + U + "`, expected `object`."));
        for (var ne in E) {
          var Z = E[ne];
          if (typeof Z != "function")
            return W(U, te, H, ne, be(Z));
          var Me = Z(q, ne, U, te, H + "." + ne, r);
          if (Me)
            return Me;
        }
        return null;
      }
      return p(k);
    }
    function P(E) {
      function k(B, G, U, te, H) {
        var q = B[G], X = de(q);
        if (X !== "object")
          return new h("Invalid " + te + " `" + H + "` of type `" + X + "` " + ("supplied to `" + U + "`, expected `object`."));
        var ne = t({}, B[G], E);
        for (var Z in ne) {
          var Me = E[Z];
          if (a(E, Z) && typeof Me != "function")
            return W(U, te, H, Z, be(Me));
          if (!Me)
            return new h(
              "Invalid " + te + " `" + H + "` key `" + Z + "` supplied to `" + U + "`.\nBad object: " + JSON.stringify(B[G], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(E), null, "  ")
            );
          var D = Me(q, Z, U, te, H + "." + Z, r);
          if (D)
            return D;
        }
        return null;
      }
      return p(k);
    }
    function me(E) {
      switch (typeof E) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !E;
        case "object":
          if (Array.isArray(E))
            return E.every(me);
          if (E === null || o(E))
            return !0;
          var k = v(E);
          if (k) {
            var B = k.call(E), G;
            if (k !== E.entries) {
              for (; !(G = B.next()).done; )
                if (!me(G.value))
                  return !1;
            } else
              for (; !(G = B.next()).done; ) {
                var U = G.value;
                if (U && !me(U[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function le(E, k) {
      return E === "symbol" ? !0 : k ? k["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && k instanceof Symbol : !1;
    }
    function de(E) {
      var k = typeof E;
      return Array.isArray(E) ? "array" : E instanceof RegExp ? "object" : le(k, E) ? "symbol" : k;
    }
    function be(E) {
      if (typeof E > "u" || E === null)
        return "" + E;
      var k = de(E);
      if (k === "object") {
        if (E instanceof Date)
          return "date";
        if (E instanceof RegExp)
          return "regexp";
      }
      return k;
    }
    function xe(E) {
      var k = be(E);
      switch (k) {
        case "array":
        case "object":
          return "an " + k;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + k;
        default:
          return k;
      }
    }
    function Pe(E) {
      return !E.constructor || !E.constructor.name ? m : E.constructor.name;
    }
    return x.checkPropTypes = n, x.resetWarningCache = n.resetWarningCache, x.PropTypes = x, x;
  }, hn;
}
var yn, ts;
function Uv() {
  if (ts)
    return yn;
  ts = 1;
  var e = Ia();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, yn = function() {
    function a(s, o, l, c, f, v) {
      if (v !== e) {
        var m = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw m.name = "Invariant Violation", m;
      }
    }
    a.isRequired = a;
    function n() {
      return a;
    }
    var i = {
      array: a,
      bigint: a,
      bool: a,
      func: a,
      number: a,
      object: a,
      string: a,
      symbol: a,
      any: a,
      arrayOf: n,
      element: a,
      elementType: a,
      instanceOf: n,
      node: a,
      objectOf: n,
      oneOf: n,
      oneOfType: n,
      shape: n,
      exact: n,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, yn;
}
if (process.env.NODE_ENV !== "production") {
  var Bv = xo(), Fv = !0;
  _n.exports = Qv()(Bv.isElement, Fv);
} else
  _n.exports = Uv()();
var Wv = _n.exports;
const J = /* @__PURE__ */ os(Wv);
function rs(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), r.push.apply(r, a);
  }
  return r;
}
function He(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? rs(Object(r), !0).forEach(function(a) {
      dt(e, a, r[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : rs(Object(r)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
    });
  }
  return e;
}
function Tr(e) {
  "@babel/helpers - typeof";
  return Tr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Tr(e);
}
function dt(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function Vv(e, t) {
  if (e == null)
    return {};
  var r = {}, a = Object.keys(e), n, i;
  for (i = 0; i < a.length; i++)
    n = a[i], !(t.indexOf(n) >= 0) && (r[n] = e[n]);
  return r;
}
function Gv(e, t) {
  if (e == null)
    return {};
  var r = Vv(e, t), a, n;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++)
      a = i[n], !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]);
  }
  return r;
}
function $n(e) {
  return Hv(e) || qv(e) || Kv(e) || Xv();
}
function Hv(e) {
  if (Array.isArray(e))
    return ea(e);
}
function qv(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function Kv(e, t) {
  if (e) {
    if (typeof e == "string")
      return ea(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return ea(e, t);
  }
}
function ea(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, a = new Array(t); r < t; r++)
    a[r] = e[r];
  return a;
}
function Xv() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Zv(e) {
  var t, r = e.beat, a = e.fade, n = e.beatFade, i = e.bounce, s = e.shake, o = e.flash, l = e.spin, c = e.spinPulse, f = e.spinReverse, v = e.pulse, m = e.fixedWidth, x = e.inverse, M = e.border, h = e.listItem, p = e.flip, b = e.size, g = e.rotation, j = e.pull, w = (t = {
    "fa-beat": r,
    "fa-fade": a,
    "fa-beat-fade": n,
    "fa-bounce": i,
    "fa-shake": s,
    "fa-flash": o,
    "fa-spin": l,
    "fa-spin-reverse": f,
    "fa-spin-pulse": c,
    "fa-pulse": v,
    "fa-fw": m,
    "fa-inverse": x,
    "fa-border": M,
    "fa-li": h,
    "fa-flip": p === !0,
    "fa-flip-horizontal": p === "horizontal" || p === "both",
    "fa-flip-vertical": p === "vertical" || p === "both"
  }, dt(t, "fa-".concat(b), typeof b < "u" && b !== null), dt(t, "fa-rotate-".concat(g), typeof g < "u" && g !== null && g !== 0), dt(t, "fa-pull-".concat(j), typeof j < "u" && j !== null), dt(t, "fa-swap-opacity", e.swapOpacity), t);
  return Object.keys(w).map(function(y) {
    return w[y] ? y : null;
  }).filter(function(y) {
    return y;
  });
}
function Jv(e) {
  return e = e - 0, e === e;
}
function jo(e) {
  return Jv(e) ? e : (e = e.replace(/[\-_\s]+(.)?/g, function(t, r) {
    return r ? r.toUpperCase() : "";
  }), e.substr(0, 1).toLowerCase() + e.substr(1));
}
var _v = ["style"];
function $v(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function em(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, r) {
    var a = r.indexOf(":"), n = jo(r.slice(0, a)), i = r.slice(a + 1).trim();
    return n.startsWith("webkit") ? t[$v(n)] = i : t[n] = i, t;
  }, {});
}
function Eo(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string")
    return t;
  var a = (t.children || []).map(function(l) {
    return Eo(e, l);
  }), n = Object.keys(t.attributes || {}).reduce(function(l, c) {
    var f = t.attributes[c];
    switch (c) {
      case "class":
        l.attrs.className = f, delete t.attributes.class;
        break;
      case "style":
        l.attrs.style = em(f);
        break;
      default:
        c.indexOf("aria-") === 0 || c.indexOf("data-") === 0 ? l.attrs[c.toLowerCase()] = f : l.attrs[jo(c)] = f;
    }
    return l;
  }, {
    attrs: {}
  }), i = r.style, s = i === void 0 ? {} : i, o = Gv(r, _v);
  return n.attrs.style = He(He({}, n.attrs.style), s), e.apply(void 0, [t.tag, He(He({}, n.attrs), o)].concat($n(a)));
}
var No = !1;
try {
  No = process.env.NODE_ENV === "production";
} catch {
}
function tm() {
  if (!No && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function ns(e) {
  if (e && Tr(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (Jn.icon)
    return Jn.icon(e);
  if (e === null)
    return null;
  if (e && Tr(e) === "object" && e.prefix && e.iconName)
    return e;
  if (Array.isArray(e) && e.length === 2)
    return {
      prefix: e[0],
      iconName: e[1]
    };
  if (typeof e == "string")
    return {
      prefix: "fas",
      iconName: e
    };
}
function bn(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? dt({}, e, t) : {};
}
var jt = /* @__PURE__ */ Ae.forwardRef(function(e, t) {
  var r = e.icon, a = e.mask, n = e.symbol, i = e.className, s = e.title, o = e.titleId, l = e.maskId, c = ns(r), f = bn("classes", [].concat($n(Zv(e)), $n(i.split(" ")))), v = bn("transform", typeof e.transform == "string" ? Jn.transform(e.transform) : e.transform), m = bn("mask", ns(a)), x = Pv(c, He(He(He(He({}, f), v), m), {}, {
    symbol: n,
    title: s,
    titleId: o,
    maskId: l
  }));
  if (!x)
    return tm("Could not find icon", c), null;
  var M = x.abstract, h = {
    ref: t
  };
  return Object.keys(e).forEach(function(p) {
    jt.defaultProps.hasOwnProperty(p) || (h[p] = e[p]);
  }), rm(M[0], h);
});
jt.displayName = "FontAwesomeIcon";
jt.propTypes = {
  beat: J.bool,
  border: J.bool,
  beatFade: J.bool,
  bounce: J.bool,
  className: J.string,
  fade: J.bool,
  flash: J.bool,
  mask: J.oneOfType([J.object, J.array, J.string]),
  maskId: J.string,
  fixedWidth: J.bool,
  inverse: J.bool,
  flip: J.oneOf([!0, !1, "horizontal", "vertical", "both"]),
  icon: J.oneOfType([J.object, J.array, J.string]),
  listItem: J.bool,
  pull: J.oneOf(["right", "left"]),
  pulse: J.bool,
  rotation: J.oneOf([0, 90, 180, 270]),
  shake: J.bool,
  size: J.oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
  spin: J.bool,
  spinPulse: J.bool,
  spinReverse: J.bool,
  symbol: J.oneOfType([J.bool, J.string]),
  title: J.string,
  titleId: J.string,
  transform: J.oneOfType([J.string, J.object]),
  swapOpacity: J.bool
};
jt.defaultProps = {
  border: !1,
  className: "",
  mask: null,
  maskId: null,
  fixedWidth: !1,
  inverse: !1,
  flip: !1,
  icon: null,
  listItem: !1,
  pull: null,
  pulse: !1,
  rotation: null,
  size: null,
  spin: !1,
  spinPulse: !1,
  spinReverse: !1,
  beat: !1,
  fade: !1,
  beatFade: !1,
  bounce: !1,
  shake: !1,
  symbol: !1,
  title: "",
  titleId: null,
  transform: null,
  swapOpacity: !1
};
var rm = Eo.bind(null, Ae.createElement), nm = {
  prefix: "fas",
  iconName: "circle-arrow-right",
  icon: [512, 512, ["arrow-circle-right"], "f0a9", "M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM281 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L136 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l182.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L393 239c9.4 9.4 9.4 24.6 0 33.9L281 385z"]
}, Ao = nm;
const am = {
  blue: "vers-bg-blue",
  purple: "vers-bg-pink-800"
}, im = ({ text: e = "Mi Boton", color: t = "blue", onClick: r }) => /* @__PURE__ */ u.jsxs("button", { className: `${am[t]} vers-text-white vers-py-[.45rem] vers-px-[.5rem] vers-rounded-full  vers-flex vers-justify-center sm:vers-justify-between vers-items-center vers-gap-4 hover:vers-scale-110 vers-transition-transform`, onClick: r, children: [
  /* @__PURE__ */ u.jsx("p", { className: "vers-font-bold vers-uppercase sm:vers-text-xl vers-pl-[3rem]", children: e }),
  /* @__PURE__ */ u.jsx(jt, { icon: Ao, className: "vers-text-4xl" })
] }), wo = im, sm = {
  normal: "sm:vers-flex-row",
  reverse: "sm:vers-flex-row-reverse"
}, om = {
  blue: "vers-text-blue",
  purple: "vers-text-pink-800"
}, lm = ({ direction: e = "normal", color: t = "blue", title: r = "Titulo", text: a = "texto de prueba para el contenido", images: n, onClick: i }) => /* @__PURE__ */ u.jsxs("article", { className: `vers-flex vers-flex-col ${sm[e]} vers-gap-2 sm:vers-gap-4 md:vers-gap-6`, children: [
  /* @__PURE__ */ u.jsx("div", { className: "md:vers-w-1/2", children: /* @__PURE__ */ u.jsxs("div", { className: "vers-grid vers-grid-cols-2 vers-grid-rows-2 vers-gap-1", children: [
    /* @__PURE__ */ u.jsx("img", { className: "vers-rounded-xl vers-aspect-square vers-object-cover", src: n[0], alt: "" }),
    /* @__PURE__ */ u.jsx("img", { className: "vers-rounded-xl vers-aspect-square vers-object-cover", src: n[1], alt: "" }),
    /* @__PURE__ */ u.jsx("img", { className: "vers-rounded-xl vers-aspect-[2/1] vers-object-cover vers-col-span-2", src: n[2], alt: "" })
  ] }) }),
  /* @__PURE__ */ u.jsxs("div", { className: "vers-bg-bxxxlue vers-flex vers-flex-col vers-gap-2 sm:vers-gap-4 md:vers-gap-6 vers-justify-center md:vers-w-1/2", children: [
    /* @__PURE__ */ u.jsxs("div", { className: " vers-flex vers-flex-col vers-px-2 vers-py-1 sm:vers-p-[0] vers-gap-2 sm:vers-gap-4 md:vers-gap-6", children: [
      /* @__PURE__ */ u.jsx("h2", { className: `${om[t]} vers-font-bold vers-text-xl sm:vers-text-3xl md:vers-text-5xl `, children: r }),
      /* @__PURE__ */ u.jsx("p", { className: "vers-text-pinkxxxx-800 vers-text-md sm:vers-text-lg md:vers-text-xl vers-text-justify ", children: a })
    ] }),
    /* @__PURE__ */ u.jsx("div", { children: /* @__PURE__ */ u.jsx(wo, { text: "visitar", color: t, onClick: i }) })
  ] })
] }), as = lm, um = () => /* @__PURE__ */ u.jsx(ga, { fondoImg: "/img1.webp", alt: "4 mujeres reunidas en circulo", children: /* @__PURE__ */ u.jsxs("section", { className: "vers-overflow-hidden vers-relative vers-h-hero vers-flex vers-justify-center vers-items-center md:vers-justify-start md:vers-items-end md:vers-pl-[8rem] md:vers-pb-[8rem] vers-bg-[rgba(256,256,256,.85)] md:vers-bg-white", children: [
  /* @__PURE__ */ u.jsx("img", { className: "vers-hidden md:vers-block vers-absolute vers-w-full vers-h-full vers-object-cover md:vers-w-[780px] md:vers-h-[780px] md:vers-rounded-[3rem] md:vers-rotate-[-40deg] md:vers-top-[-18rem] md:vers-right-[10rem]", src: "/img1.webp", alt: "" }),
  /* @__PURE__ */ u.jsxs("div", { className: "vers-z-0 vers-flex vers-flex-col vers-justify-center vers-items-center vers-max-w-[320px] vers-gap-4 xsm:vers-gap-6 md:vers-gap-4 vers-p-1 sm:vers-p-[0] md:vers-bg-[rgba(256,256,256,.9)] md:vers-p-2 md:vers-pl-3 md:vers-rounded-xl", children: [
    /* @__PURE__ */ u.jsx("h2", { className: "vers-text-pink-800 vers-text-center md:vers-text-start vers-text-3xl xsm:vers-text-4xl md:vers-text-5xl vers-uppercase vers-font-bold", children: "nuestros proyectos" }),
    /* @__PURE__ */ u.jsx("p", { className: "vers-text-pink-800 vers-text-center md:vers-text-start vers-text-xl sm:vers-text-xl xsm:vers-text-2xl", children: "Cada proyecto se realiza con la maxima energia y apoyo posible." }),
    /* @__PURE__ */ u.jsx("i", { className: "vers-text-pink-800 fa-solid fa-circle-arrow-left vers-text-5xl vers-pr-[.10rem] vers-rotate-[270deg] hover:vers-scale-125 vers-transition-transform" })
  ] })
] }) }), cm = () => /* @__PURE__ */ u.jsxs("section", { className: "vers-grow", children: [
  /* @__PURE__ */ u.jsx(um, {}),
  /* @__PURE__ */ u.jsx(Je, { children: /* @__PURE__ */ u.jsxs("div", { className: "vers-flex vers-flex-col vers-gap-4 sm:vers-gap-6 md:vers-gap-8", children: [
    /* @__PURE__ */ u.jsx(as, { direction: "normal", images: ["/img1.webp", "/img2.webp", "/img3.webp"], color: "purple", title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem laboriosam praesentium ipsa ex fuga, rem doloribus voluptas voluptates pariatur repudiandae! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt quasi distinctio voluptatem? Cumque mollitia aliquid eius inventore maiores blanditiis nostrum?" }),
    /* @__PURE__ */ u.jsx(as, { direction: "reverse", images: ["/img1.webp", "/img2.webp", "/img3.webp"], color: "blue", title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem laboriosam praesentium ipsa ex fuga, rem doloribus voluptas voluptates pariatur repudiandae! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt quasi distinctio voluptatem? Cumque mollitia aliquid eius inventore maiores blanditiis nostrum?" })
  ] }) })
] }), fm = ({ title: e = "Titulo", description: t = "Descripcion", price: r = 0, image: a = "" }) => /* @__PURE__ */ u.jsxs("article", { className: "vers-bg-purple-500 vers-overflow-hidden vers-rounded-lg vers-drop-shadow-[3px_3px_5px_#f5b4ea] vers-border-solid vers-border-2 vers-border-purple-500", children: [
  /* @__PURE__ */ u.jsx("div", { className: "vers-aspect-square vers-w-full", children: /* @__PURE__ */ u.jsx("img", { className: "vers-h-full vers-w-full vers-object-contain vers-bg-white vers-p-2", src: a, alt: "" }) }),
  /* @__PURE__ */ u.jsxs("div", { className: "vers-px-4 vers-py-3 sm:vers-pt-4 sm:vers-pb-6 vers-flex vers-flex-col vers-gap-1 sm:vers-gap-2 vers-items-center", children: [
    /* @__PURE__ */ u.jsx("h2", { className: "vers-text-lg xsm:vers-text-xl vers-font-bold vers-text-white ", children: e }),
    /* @__PURE__ */ u.jsx("p", { className: "xsm:vers-text-md vers-text-white", children: t }),
    /* @__PURE__ */ u.jsxs("div", { className: "vers-flex vers-justify-between vers-w-full vers-items-center", children: [
      /* @__PURE__ */ u.jsxs("p", { className: "vers-text-3xl vers-font-bold vers-text-white", children: [
        "$",
        r.toFixed(2)
      ] }),
      /* @__PURE__ */ u.jsx(jt, { icon: Ao, className: "vers-text-5xl vers-text-white hover:vers-scale-105 vers-transition-transform" })
    ] })
  ] })
] }), dm = fm, vm = [
  {
    title: "Precios Accesibles",
    description: "Al alcanse de todos los bolsillos.",
    icon: "/products/hero/frame-yellow.svg"
  },
  {
    title: "Máxima durabilidad",
    description: "De gran resistencia",
    icon: "/products/hero/frame-cyan.svg"
  },
  {
    title: "Mejores diseños",
    description: "Forma y funcion de manera efectiva y útil.",
    icon: "/products/hero/frame-red.svg"
  }
], mm = () => /* @__PURE__ */ u.jsxs("div", { className: "vers-bg-gradient-to-b vers-from-blue vers-to-transparent vers-bg-cover vers-bg-center vers-h-hero vers-p-4 vers-flex vers-flex-col vers-justify-center vers-items-center vers-gap-6 sm:vers-gap-8 md:vers-gap-8", children: [
  /* @__PURE__ */ u.jsxs("div", { className: "vers-max-w-[400px] sm:vers-max-w-[900px] vers-bg-grexxen vers-flex vers-flex-col vers-gap-2 sm:vers-gap-6 md:vers-gap-8 vers-items-center", children: [
    /* @__PURE__ */ u.jsx("h2", { className: "vers-text-white vers-text-center vers-text-4xl sm:vers-text-6xl md:vers-text-9xl vers-uppercase vers-font-bold", children: "Nuestros productos" }),
    /* @__PURE__ */ u.jsx("p", { className: "vers-max-w-[450px] vers-text-white vers-text-center sm:vers-text-2xl md:vers-text-2xl sm:vers-font-semibold", children: "Ofrecemos una gran variedad de productos de diferentes marcas y de la mejor calidad." }),
    /* @__PURE__ */ u.jsx(wo, { text: "COMPRAR", color: "blue" })
  ] }),
  /* @__PURE__ */ u.jsx("div", { className: "vers-flex vers-flex-col sm:vers-flex-row vers-gap-1 sm:vers-gap-2 md:vers-gap-3 ", children: vm.map((e, t) => /* @__PURE__ */ u.jsxs("article", { className: "vers-bg-white vers-rounded-xl vers-p-1 xsm:vers-p-2 md:vers-p-3 vers-w-full vers-max-w-[270px] vers-flex vers-flex-col md:vers-gap-1 vers-items-center xsm:vers-items-start hover:vers-scale-110 vers-transition-transform", children: [
    /* @__PURE__ */ u.jsxs("div", { className: "vers-flex vers-items-center vers-gap-1 md:vers-gap-[1.2rem]", children: [
      /* @__PURE__ */ u.jsx("img", { src: e.icon, className: "vers-hidden xsm:vers-block vers-w-[2rem] sm:vers-w-[3rem] md:vers-w-[3.5rem]" }),
      /* @__PURE__ */ u.jsx("p", { className: "vers-text-lg vers-font-bold vers-uppercase md:vers-text-2xl md:vers-leading-7", children: e.title })
    ] }),
    /* @__PURE__ */ u.jsx("p", { className: "xsm:vers-text-start vers-font-medi md:vers-text-xl vers-text-center", children: e.description })
  ] }, t)) })
] }), pm = [
  {
    title: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
    description: "Lorem ipsam, ullam numquam labore delectus laborum mollitia.",
    image: "https://res.cloudinary.com/djksz5k3c/image/upload/v1686180352/MI-NUBE/VESR/Frame_44_1_qzvnzi.png",
    price: 0
  },
  {
    title: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
    description: "Lorem ipsam, ullam numquam labore delectus laborum mollitia.",
    image: "https://res.cloudinary.com/djksz5k3c/image/upload/v1686180352/MI-NUBE/VESR/Frame_44_2_vv3agr.png",
    price: 0
  },
  {
    title: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
    description: "Lorem ipsam, ullam numquam labore delectus laborum mollitia.",
    image: "https://res.cloudinary.com/djksz5k3c/image/upload/v1686180352/MI-NUBE/VESR/Frame_44_3_b1wpew.png",
    price: 0
  },
  {
    title: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
    description: "Lorem ipsam, ullam numquam labore delectus laborum mollitia.",
    image: "https://res.cloudinary.com/djksz5k3c/image/upload/v1686180352/MI-NUBE/VESR/Frame_44_4_a5dywb.png",
    price: 0
  },
  {
    title: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
    description: "Lorem ipsam, ullam numquam labore delectus laborum mollitia.",
    image: "https://res.cloudinary.com/djksz5k3c/image/upload/v1686180351/MI-NUBE/VESR/Frame_44_5_ucdwbv.png",
    price: 0
  },
  {
    title: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
    description: "Lorem ipsam, ullam numquam labore delectus laborum mollitia.",
    image: "https://res.cloudinary.com/djksz5k3c/image/upload/v1686180351/MI-NUBE/VESR/Frame_44_6_ewky7r.png",
    price: 0
  }
], gm = () => /* @__PURE__ */ u.jsxs("section", { className: "vers-grow", children: [
  /* @__PURE__ */ u.jsx(ga, { fondoImg: "https://i.pinimg.com/originals/e1/78/d2/e178d2bbb7c6202ad66fc2a173331b28.jpg", alt: "montaña blanca con un lago en frente", children: /* @__PURE__ */ u.jsx(mm, {}) }),
  /* @__PURE__ */ u.jsx(Je, { children: /* @__PURE__ */ u.jsx(Ie, { text: "Productos TOP", children: /* @__PURE__ */ u.jsx(pa, { children: /* @__PURE__ */ u.jsx(u.Fragment, { children: pm.map((e, t) => /* @__PURE__ */ u.jsx(dm, { title: e.title, description: e.description, image: e.image, price: e.price }, t)) }) }) }) })
] }), hm = () => /* @__PURE__ */ u.jsxs(_l, { children: [
  /* @__PURE__ */ u.jsx(Tf, {}),
  /* @__PURE__ */ u.jsxs(Fl, { children: [
    /* @__PURE__ */ u.jsx(Te, { path: "/", element: /* @__PURE__ */ u.jsx(Ul, { to: "/inicio" }) }),
    /* @__PURE__ */ u.jsx(Te, { path: "/inicio", element: /* @__PURE__ */ u.jsx(hf, {}) }),
    /* @__PURE__ */ u.jsx(Te, { path: "/conocenos", element: /* @__PURE__ */ u.jsx(Uf, {}) }),
    /* @__PURE__ */ u.jsx(Te, { path: "/nuestro-equipo", element: /* @__PURE__ */ u.jsx(Vf, {}) }),
    /* @__PURE__ */ u.jsx(Te, { path: "/biblioteca-virtual", element: /* @__PURE__ */ u.jsx(Zf, {}) }),
    /* @__PURE__ */ u.jsx(Te, { path: "/proyectos", element: /* @__PURE__ */ u.jsx(cm, {}) }),
    /* @__PURE__ */ u.jsx(Te, { path: "/contactanos", element: /* @__PURE__ */ u.jsx(Jf, {}) }),
    /* @__PURE__ */ u.jsx(Te, { path: "/productos", element: /* @__PURE__ */ u.jsx(gm, {}) }),
    /* @__PURE__ */ u.jsx(Te, { path: "/servicios", element: /* @__PURE__ */ u.jsx(td, {}) }),
    /* @__PURE__ */ u.jsx(Te, { path: "*", element: /* @__PURE__ */ u.jsx(yf, {}) })
  ] }),
  /* @__PURE__ */ u.jsx(Df, {})
] });
function ym() {
  return /* @__PURE__ */ u.jsx("div", { className: "vers-min-h-screen vers-flex vers-flex-col", children: /* @__PURE__ */ u.jsx(hm, {}) });
}
St.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ u.jsx(Ae.StrictMode, { children: /* @__PURE__ */ u.jsx(ym, {}) })
);
