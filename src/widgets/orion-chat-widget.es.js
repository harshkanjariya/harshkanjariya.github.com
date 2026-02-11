import je, { forwardRef as io, createElement as Gn, useState as tt, useRef as Wa, useEffect as Lr, useMemo as oo } from "react";
import { createRoot as Ya } from "react-dom/client";
function Lt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Yt = { exports: {} }, Ot = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jr;
function Ja() {
  if (jr) return Ot;
  jr = 1;
  var e = je, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(l, u, s) {
    var f, c = {}, d = null, p = null;
    s !== void 0 && (d = "" + s), u.key !== void 0 && (d = "" + u.key), u.ref !== void 0 && (p = u.ref);
    for (f in u) r.call(u, f) && !o.hasOwnProperty(f) && (c[f] = u[f]);
    if (l && l.defaultProps) for (f in u = l.defaultProps, u) c[f] === void 0 && (c[f] = u[f]);
    return { $$typeof: t, type: l, key: d, ref: p, props: c, _owner: i.current };
  }
  return Ot.Fragment = n, Ot.jsx = a, Ot.jsxs = a, Ot;
}
var Pt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zr;
function Ka() {
  return zr || (zr = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = je, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), l = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), s = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), m = Symbol.iterator, g = "@@iterator";
    function y(w) {
      if (w === null || typeof w != "object")
        return null;
      var P = m && w[m] || w[g];
      return typeof P == "function" ? P : null;
    }
    var x = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function T(w) {
      {
        for (var P = arguments.length, $ = new Array(P > 1 ? P - 1 : 0), te = 1; te < P; te++)
          $[te - 1] = arguments[te];
        E("error", w, $);
      }
    }
    function E(w, P, $) {
      {
        var te = x.ReactDebugCurrentFrame, he = te.getStackAddendum();
        he !== "" && (P += "%s", $ = $.concat([he]));
        var we = $.map(function(ue) {
          return String(ue);
        });
        we.unshift("Warning: " + P), Function.prototype.apply.call(console[w], console, we);
      }
    }
    var _ = !1, v = !1, k = !1, R = !1, B = !1, q;
    q = Symbol.for("react.module.reference");
    function S(w) {
      return !!(typeof w == "string" || typeof w == "function" || w === r || w === o || B || w === i || w === s || w === f || R || w === p || _ || v || k || typeof w == "object" && w !== null && (w.$$typeof === d || w.$$typeof === c || w.$$typeof === a || w.$$typeof === l || w.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      w.$$typeof === q || w.getModuleId !== void 0));
    }
    function O(w, P, $) {
      var te = w.displayName;
      if (te)
        return te;
      var he = P.displayName || P.name || "";
      return he !== "" ? $ + "(" + he + ")" : $;
    }
    function z(w) {
      return w.displayName || "Context";
    }
    function N(w) {
      if (w == null)
        return null;
      if (typeof w.tag == "number" && T("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof w == "function")
        return w.displayName || w.name || null;
      if (typeof w == "string")
        return w;
      switch (w) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case o:
          return "Profiler";
        case i:
          return "StrictMode";
        case s:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof w == "object")
        switch (w.$$typeof) {
          case l:
            var P = w;
            return z(P) + ".Consumer";
          case a:
            var $ = w;
            return z($._context) + ".Provider";
          case u:
            return O(w, w.render, "ForwardRef");
          case c:
            var te = w.displayName || null;
            return te !== null ? te : N(w.type) || "Memo";
          case d: {
            var he = w, we = he._payload, ue = he._init;
            try {
              return N(ue(we));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var L = Object.assign, U = 0, Q, se, fe, Se, h, D, Y;
    function b() {
    }
    b.__reactDisabledLog = !0;
    function H() {
      {
        if (U === 0) {
          Q = console.log, se = console.info, fe = console.warn, Se = console.error, h = console.group, D = console.groupCollapsed, Y = console.groupEnd;
          var w = {
            configurable: !0,
            enumerable: !0,
            value: b,
            writable: !0
          };
          Object.defineProperties(console, {
            info: w,
            log: w,
            warn: w,
            error: w,
            group: w,
            groupCollapsed: w,
            groupEnd: w
          });
        }
        U++;
      }
    }
    function Z() {
      {
        if (U--, U === 0) {
          var w = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: L({}, w, {
              value: Q
            }),
            info: L({}, w, {
              value: se
            }),
            warn: L({}, w, {
              value: fe
            }),
            error: L({}, w, {
              value: Se
            }),
            group: L({}, w, {
              value: h
            }),
            groupCollapsed: L({}, w, {
              value: D
            }),
            groupEnd: L({}, w, {
              value: Y
            })
          });
        }
        U < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var V = x.ReactCurrentDispatcher, X;
    function G(w, P, $) {
      {
        if (X === void 0)
          try {
            throw Error();
          } catch (he) {
            var te = he.stack.trim().match(/\n( *(at )?)/);
            X = te && te[1] || "";
          }
        return `
` + X + w;
      }
    }
    var re = !1, ee;
    {
      var Ee = typeof WeakMap == "function" ? WeakMap : Map;
      ee = new Ee();
    }
    function M(w, P) {
      if (!w || re)
        return "";
      {
        var $ = ee.get(w);
        if ($ !== void 0)
          return $;
      }
      var te;
      re = !0;
      var he = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var we;
      we = V.current, V.current = null, H();
      try {
        if (P) {
          var ue = function() {
            throw Error();
          };
          if (Object.defineProperty(ue.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ue, []);
            } catch (De) {
              te = De;
            }
            Reflect.construct(w, [], ue);
          } else {
            try {
              ue.call();
            } catch (De) {
              te = De;
            }
            w.call(ue.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (De) {
            te = De;
          }
          w();
        }
      } catch (De) {
        if (De && te && typeof De.stack == "string") {
          for (var le = De.stack.split(`
`), Fe = te.stack.split(`
`), Ce = le.length - 1, Ae = Fe.length - 1; Ce >= 1 && Ae >= 0 && le[Ce] !== Fe[Ae]; )
            Ae--;
          for (; Ce >= 1 && Ae >= 0; Ce--, Ae--)
            if (le[Ce] !== Fe[Ae]) {
              if (Ce !== 1 || Ae !== 1)
                do
                  if (Ce--, Ae--, Ae < 0 || le[Ce] !== Fe[Ae]) {
                    var Ve = `
` + le[Ce].replace(" at new ", " at ");
                    return w.displayName && Ve.includes("<anonymous>") && (Ve = Ve.replace("<anonymous>", w.displayName)), typeof w == "function" && ee.set(w, Ve), Ve;
                  }
                while (Ce >= 1 && Ae >= 0);
              break;
            }
        }
      } finally {
        re = !1, V.current = we, Z(), Error.prepareStackTrace = he;
      }
      var wt = w ? w.displayName || w.name : "", ct = wt ? G(wt) : "";
      return typeof w == "function" && ee.set(w, ct), ct;
    }
    function Oe(w, P, $) {
      return M(w, !1);
    }
    function W(w) {
      var P = w.prototype;
      return !!(P && P.isReactComponent);
    }
    function Me(w, P, $) {
      if (w == null)
        return "";
      if (typeof w == "function")
        return M(w, W(w));
      if (typeof w == "string")
        return G(w);
      switch (w) {
        case s:
          return G("Suspense");
        case f:
          return G("SuspenseList");
      }
      if (typeof w == "object")
        switch (w.$$typeof) {
          case u:
            return Oe(w.render);
          case c:
            return Me(w.type, P, $);
          case d: {
            var te = w, he = te._payload, we = te._init;
            try {
              return Me(we(he), P, $);
            } catch {
            }
          }
        }
      return "";
    }
    var Be = Object.prototype.hasOwnProperty, it = {}, At = x.ReactDebugCurrentFrame;
    function yt(w) {
      if (w) {
        var P = w._owner, $ = Me(w.type, w._source, P ? P.type : null);
        At.setExtraStackFrame($);
      } else
        At.setExtraStackFrame(null);
    }
    function qt(w, P, $, te, he) {
      {
        var we = Function.call.bind(Be);
        for (var ue in w)
          if (we(w, ue)) {
            var le = void 0;
            try {
              if (typeof w[ue] != "function") {
                var Fe = Error((te || "React class") + ": " + $ + " type `" + ue + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof w[ue] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Fe.name = "Invariant Violation", Fe;
              }
              le = w[ue](P, ue, te, $, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ce) {
              le = Ce;
            }
            le && !(le instanceof Error) && (yt(he), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", te || "React class", $, ue, typeof le), yt(null)), le instanceof Error && !(le.message in it) && (it[le.message] = !0, yt(he), T("Failed %s type: %s", $, le.message), yt(null));
          }
      }
    }
    var Ht = Array.isArray;
    function Rt(w) {
      return Ht(w);
    }
    function xn(w) {
      {
        var P = typeof Symbol == "function" && Symbol.toStringTag, $ = P && w[Symbol.toStringTag] || w.constructor.name || "Object";
        return $;
      }
    }
    function kn(w) {
      try {
        return Vt(w), !1;
      } catch {
        return !0;
      }
    }
    function Vt(w) {
      return "" + w;
    }
    function Wt(w) {
      if (kn(w))
        return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", xn(w)), Vt(w);
    }
    var A = x.ReactCurrentOwner, j = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, K, pe;
    function be(w) {
      if (Be.call(w, "ref")) {
        var P = Object.getOwnPropertyDescriptor(w, "ref").get;
        if (P && P.isReactWarning)
          return !1;
      }
      return w.ref !== void 0;
    }
    function $e(w) {
      if (Be.call(w, "key")) {
        var P = Object.getOwnPropertyDescriptor(w, "key").get;
        if (P && P.isReactWarning)
          return !1;
      }
      return w.key !== void 0;
    }
    function Qe(w, P) {
      typeof w.ref == "string" && A.current;
    }
    function Ke(w, P) {
      {
        var $ = function() {
          K || (K = !0, T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", P));
        };
        $.isReactWarning = !0, Object.defineProperty(w, "key", {
          get: $,
          configurable: !0
        });
      }
    }
    function lt(w, P) {
      {
        var $ = function() {
          pe || (pe = !0, T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", P));
        };
        $.isReactWarning = !0, Object.defineProperty(w, "ref", {
          get: $,
          configurable: !0
        });
      }
    }
    var st = function(w, P, $, te, he, we, ue) {
      var le = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: w,
        key: P,
        ref: $,
        props: ue,
        // Record the component responsible for creating this element.
        _owner: we
      };
      return le._store = {}, Object.defineProperty(le._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(le, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: te
      }), Object.defineProperty(le, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: he
      }), Object.freeze && (Object.freeze(le.props), Object.freeze(le)), le;
    };
    function ve(w, P, $, te, he) {
      {
        var we, ue = {}, le = null, Fe = null;
        $ !== void 0 && (Wt($), le = "" + $), $e(P) && (Wt(P.key), le = "" + P.key), be(P) && (Fe = P.ref, Qe(P, he));
        for (we in P)
          Be.call(P, we) && !j.hasOwnProperty(we) && (ue[we] = P[we]);
        if (w && w.defaultProps) {
          var Ce = w.defaultProps;
          for (we in Ce)
            ue[we] === void 0 && (ue[we] = Ce[we]);
        }
        if (le || Fe) {
          var Ae = typeof w == "function" ? w.displayName || w.name || "Unknown" : w;
          le && Ke(ue, Ae), Fe && lt(ue, Ae);
        }
        return st(w, le, Fe, he, te, A.current, ue);
      }
    }
    var ut = x.ReactCurrentOwner, He = x.ReactDebugCurrentFrame;
    function bt(w) {
      if (w) {
        var P = w._owner, $ = Me(w.type, w._source, P ? P.type : null);
        He.setExtraStackFrame($);
      } else
        He.setExtraStackFrame(null);
    }
    var vn;
    vn = !1;
    function Sn(w) {
      return typeof w == "object" && w !== null && w.$$typeof === t;
    }
    function Or() {
      {
        if (ut.current) {
          var w = N(ut.current.type);
          if (w)
            return `

Check the render method of \`` + w + "`.";
        }
        return "";
      }
    }
    function ja(w) {
      return "";
    }
    var Pr = {};
    function za(w) {
      {
        var P = Or();
        if (!P) {
          var $ = typeof w == "string" ? w : w.displayName || w.name;
          $ && (P = `

Check the top-level render call using <` + $ + ">.");
        }
        return P;
      }
    }
    function _r(w, P) {
      {
        if (!w._store || w._store.validated || w.key != null)
          return;
        w._store.validated = !0;
        var $ = za(P);
        if (Pr[$])
          return;
        Pr[$] = !0;
        var te = "";
        w && w._owner && w._owner !== ut.current && (te = " It was passed a child from " + N(w._owner.type) + "."), bt(w), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', $, te), bt(null);
      }
    }
    function Fr(w, P) {
      {
        if (typeof w != "object")
          return;
        if (Rt(w))
          for (var $ = 0; $ < w.length; $++) {
            var te = w[$];
            Sn(te) && _r(te, P);
          }
        else if (Sn(w))
          w._store && (w._store.validated = !0);
        else if (w) {
          var he = y(w);
          if (typeof he == "function" && he !== w.entries)
            for (var we = he.call(w), ue; !(ue = we.next()).done; )
              Sn(ue.value) && _r(ue.value, P);
        }
      }
    }
    function Na(w) {
      {
        var P = w.type;
        if (P == null || typeof P == "string")
          return;
        var $;
        if (typeof P == "function")
          $ = P.propTypes;
        else if (typeof P == "object" && (P.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        P.$$typeof === c))
          $ = P.propTypes;
        else
          return;
        if ($) {
          var te = N(P);
          qt($, w.props, "prop", te, w);
        } else if (P.PropTypes !== void 0 && !vn) {
          vn = !0;
          var he = N(P);
          T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", he || "Unknown");
        }
        typeof P.getDefaultProps == "function" && !P.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ma(w) {
      {
        for (var P = Object.keys(w.props), $ = 0; $ < P.length; $++) {
          var te = P[$];
          if (te !== "children" && te !== "key") {
            bt(w), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", te), bt(null);
            break;
          }
        }
        w.ref !== null && (bt(w), T("Invalid attribute `ref` supplied to `React.Fragment`."), bt(null));
      }
    }
    var Ir = {};
    function Dr(w, P, $, te, he, we) {
      {
        var ue = S(w);
        if (!ue) {
          var le = "";
          (w === void 0 || typeof w == "object" && w !== null && Object.keys(w).length === 0) && (le += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Fe = ja();
          Fe ? le += Fe : le += Or();
          var Ce;
          w === null ? Ce = "null" : Rt(w) ? Ce = "array" : w !== void 0 && w.$$typeof === t ? (Ce = "<" + (N(w.type) || "Unknown") + " />", le = " Did you accidentally export a JSX literal instead of a component?") : Ce = typeof w, T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ce, le);
        }
        var Ae = ve(w, P, $, he, we);
        if (Ae == null)
          return Ae;
        if (ue) {
          var Ve = P.children;
          if (Ve !== void 0)
            if (te)
              if (Rt(Ve)) {
                for (var wt = 0; wt < Ve.length; wt++)
                  Fr(Ve[wt], w);
                Object.freeze && Object.freeze(Ve);
              } else
                T("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Fr(Ve, w);
        }
        if (Be.call(P, "key")) {
          var ct = N(w), De = Object.keys(P).filter(function(Va) {
            return Va !== "key";
          }), En = De.length > 0 ? "{key: someKey, " + De.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ir[ct + En]) {
            var Ha = De.length > 0 ? "{" + De.join(": ..., ") + ": ...}" : "{}";
            T(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, En, ct, Ha, ct), Ir[ct + En] = !0;
          }
        }
        return w === r ? Ma(Ae) : Na(Ae), Ae;
      }
    }
    function Ba(w, P, $) {
      return Dr(w, P, $, !0);
    }
    function $a(w, P, $) {
      return Dr(w, P, $, !1);
    }
    var Ua = $a, qa = Ba;
    Pt.Fragment = r, Pt.jsx = Ua, Pt.jsxs = qa;
  })()), Pt;
}
var Nr;
function Xa() {
  return Nr || (Nr = 1, process.env.NODE_ENV === "production" ? Yt.exports = Ja() : Yt.exports = Ka()), Yt.exports;
}
var F = Xa();
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ga = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), ao = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Qa = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Za = io(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: i = "",
    children: o,
    iconNode: a,
    ...l
  }, u) => Gn(
    "svg",
    {
      ref: u,
      ...Qa,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: ao("lucide", i),
      ...l
    },
    [
      ...a.map(([s, f]) => Gn(s, f)),
      ...Array.isArray(o) ? o : [o]
    ]
  )
);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pr = (e, t) => {
  const n = io(
    ({ className: r, ...i }, o) => Gn(Za, {
      ref: o,
      iconNode: t,
      className: ao(`lucide-${Ga(e)}`, r),
      ...i
    })
  );
  return n.displayName = `${e}`, n;
};
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hr = pr("MessageCircle", [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }]
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const el = pr("Send", [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dr = pr("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), Mr = ["http", "https", "mailto", "tel"];
function tl(e) {
  const t = (e || "").trim(), n = t.charAt(0);
  if (n === "#" || n === "/")
    return t;
  const r = t.indexOf(":");
  if (r === -1)
    return t;
  let i = -1;
  for (; ++i < Mr.length; ) {
    const o = Mr[i];
    if (r === o.length && t.slice(0, o.length).toLowerCase() === o)
      return t;
  }
  return i = t.indexOf("?"), i !== -1 && r > i || (i = t.indexOf("#"), i !== -1 && r > i) ? t : "javascript:void(0)";
}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
var Cn, Br;
function nl() {
  return Br || (Br = 1, Cn = function(t) {
    return t != null && t.constructor != null && typeof t.constructor.isBuffer == "function" && t.constructor.isBuffer(t);
  }), Cn;
}
var rl = nl();
const lo = /* @__PURE__ */ Lt(rl);
function It(e) {
  return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? $r(e.position) : "start" in e || "end" in e ? $r(e) : "line" in e || "column" in e ? Qn(e) : "";
}
function Qn(e) {
  return Ur(e && e.line) + ":" + Ur(e && e.column);
}
function $r(e) {
  return Qn(e && e.start) + "-" + Qn(e && e.end);
}
function Ur(e) {
  return e && typeof e == "number" ? e : 1;
}
class Ye extends Error {
  /**
   * Create a message for `reason` at `place` from `origin`.
   *
   * When an error is passed in as `reason`, the `stack` is copied.
   *
   * @param {string | Error | VFileMessage} reason
   *   Reason for message, uses the stack and message of the error if given.
   *
   *   > 👉 **Note**: you should use markdown.
   * @param {Node | NodeLike | Position | Point | null | undefined} [place]
   *   Place in file where the message occurred.
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns
   *   Instance of `VFileMessage`.
   */
  // To do: next major: expose `undefined` everywhere instead of `null`.
  constructor(t, n, r) {
    const i = [null, null];
    let o = {
      // @ts-expect-error: we always follows the structure of `position`.
      start: { line: null, column: null },
      // @ts-expect-error: "
      end: { line: null, column: null }
    };
    if (super(), typeof n == "string" && (r = n, n = void 0), typeof r == "string") {
      const a = r.indexOf(":");
      a === -1 ? i[1] = r : (i[0] = r.slice(0, a), i[1] = r.slice(a + 1));
    }
    n && ("type" in n || "position" in n ? n.position && (o = n.position) : "start" in n || "end" in n ? o = n : ("line" in n || "column" in n) && (o.start = n)), this.name = It(n) || "1:1", this.message = typeof t == "object" ? t.message : t, this.stack = "", typeof t == "object" && t.stack && (this.stack = t.stack), this.reason = this.message, this.fatal, this.line = o.start.line, this.column = o.start.column, this.position = o, this.source = i[0], this.ruleId = i[1], this.file, this.actual, this.expected, this.url, this.note;
  }
}
Ye.prototype.file = "";
Ye.prototype.name = "";
Ye.prototype.reason = "";
Ye.prototype.message = "";
Ye.prototype.stack = "";
Ye.prototype.fatal = null;
Ye.prototype.column = null;
Ye.prototype.line = null;
Ye.prototype.source = null;
Ye.prototype.ruleId = null;
Ye.prototype.position = null;
const et = { basename: il, dirname: ol, extname: al, join: ll, sep: "/" };
function il(e, t) {
  if (t !== void 0 && typeof t != "string")
    throw new TypeError('"ext" argument must be a string');
  jt(e);
  let n = 0, r = -1, i = e.length, o;
  if (t === void 0 || t.length === 0 || t.length > e.length) {
    for (; i--; )
      if (e.charCodeAt(i) === 47) {
        if (o) {
          n = i + 1;
          break;
        }
      } else r < 0 && (o = !0, r = i + 1);
    return r < 0 ? "" : e.slice(n, r);
  }
  if (t === e)
    return "";
  let a = -1, l = t.length - 1;
  for (; i--; )
    if (e.charCodeAt(i) === 47) {
      if (o) {
        n = i + 1;
        break;
      }
    } else
      a < 0 && (o = !0, a = i + 1), l > -1 && (e.charCodeAt(i) === t.charCodeAt(l--) ? l < 0 && (r = i) : (l = -1, r = a));
  return n === r ? r = a : r < 0 && (r = e.length), e.slice(n, r);
}
function ol(e) {
  if (jt(e), e.length === 0)
    return ".";
  let t = -1, n = e.length, r;
  for (; --n; )
    if (e.charCodeAt(n) === 47) {
      if (r) {
        t = n;
        break;
      }
    } else r || (r = !0);
  return t < 0 ? e.charCodeAt(0) === 47 ? "/" : "." : t === 1 && e.charCodeAt(0) === 47 ? "//" : e.slice(0, t);
}
function al(e) {
  jt(e);
  let t = e.length, n = -1, r = 0, i = -1, o = 0, a;
  for (; t--; ) {
    const l = e.charCodeAt(t);
    if (l === 47) {
      if (a) {
        r = t + 1;
        break;
      }
      continue;
    }
    n < 0 && (a = !0, n = t + 1), l === 46 ? i < 0 ? i = t : o !== 1 && (o = 1) : i > -1 && (o = -1);
  }
  return i < 0 || n < 0 || // We saw a non-dot character immediately before the dot.
  o === 0 || // The (right-most) trimmed path component is exactly `..`.
  o === 1 && i === n - 1 && i === r + 1 ? "" : e.slice(i, n);
}
function ll(...e) {
  let t = -1, n;
  for (; ++t < e.length; )
    jt(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
  return n === void 0 ? "." : sl(n);
}
function sl(e) {
  jt(e);
  const t = e.charCodeAt(0) === 47;
  let n = ul(e, !t);
  return n.length === 0 && !t && (n = "."), n.length > 0 && e.charCodeAt(e.length - 1) === 47 && (n += "/"), t ? "/" + n : n;
}
function ul(e, t) {
  let n = "", r = 0, i = -1, o = 0, a = -1, l, u;
  for (; ++a <= e.length; ) {
    if (a < e.length)
      l = e.charCodeAt(a);
    else {
      if (l === 47)
        break;
      l = 47;
    }
    if (l === 47) {
      if (!(i === a - 1 || o === 1)) if (i !== a - 1 && o === 2) {
        if (n.length < 2 || r !== 2 || n.charCodeAt(n.length - 1) !== 46 || n.charCodeAt(n.length - 2) !== 46) {
          if (n.length > 2) {
            if (u = n.lastIndexOf("/"), u !== n.length - 1) {
              u < 0 ? (n = "", r = 0) : (n = n.slice(0, u), r = n.length - 1 - n.lastIndexOf("/")), i = a, o = 0;
              continue;
            }
          } else if (n.length > 0) {
            n = "", r = 0, i = a, o = 0;
            continue;
          }
        }
        t && (n = n.length > 0 ? n + "/.." : "..", r = 2);
      } else
        n.length > 0 ? n += "/" + e.slice(i + 1, a) : n = e.slice(i + 1, a), r = a - i - 1;
      i = a, o = 0;
    } else l === 46 && o > -1 ? o++ : o = -1;
  }
  return n;
}
function jt(e) {
  if (typeof e != "string")
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(e)
    );
}
const cl = { cwd: fl };
function fl() {
  return "/";
}
function Zn(e) {
  return e !== null && typeof e == "object" && // @ts-expect-error: indexable.
  e.href && // @ts-expect-error: indexable.
  e.origin;
}
function pl(e) {
  if (typeof e == "string")
    e = new URL(e);
  else if (!Zn(e)) {
    const t = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + e + "`"
    );
    throw t.code = "ERR_INVALID_ARG_TYPE", t;
  }
  if (e.protocol !== "file:") {
    const t = new TypeError("The URL must be of scheme file");
    throw t.code = "ERR_INVALID_URL_SCHEME", t;
  }
  return hl(e);
}
function hl(e) {
  if (e.hostname !== "") {
    const r = new TypeError(
      'File URL host must be "localhost" or empty on darwin'
    );
    throw r.code = "ERR_INVALID_FILE_URL_HOST", r;
  }
  const t = e.pathname;
  let n = -1;
  for (; ++n < t.length; )
    if (t.charCodeAt(n) === 37 && t.charCodeAt(n + 1) === 50) {
      const r = t.charCodeAt(n + 2);
      if (r === 70 || r === 102) {
        const i = new TypeError(
          "File URL path must not include encoded / characters"
        );
        throw i.code = "ERR_INVALID_FILE_URL_PATH", i;
      }
    }
  return decodeURIComponent(t);
}
const Tn = ["history", "path", "basename", "stem", "extname", "dirname"];
class so {
  /**
   * Create a new virtual file.
   *
   * `options` is treated as:
   *
   * *   `string` or `Buffer` — `{value: options}`
   * *   `URL` — `{path: options}`
   * *   `VFile` — shallow copies its data over to the new file
   * *   `object` — all fields are shallow copied over to the new file
   *
   * Path related fields are set in the following order (least specific to
   * most specific): `history`, `path`, `basename`, `stem`, `extname`,
   * `dirname`.
   *
   * You cannot set `dirname` or `extname` without setting either `history`,
   * `path`, `basename`, or `stem` too.
   *
   * @param {Compatible | null | undefined} [value]
   *   File value.
   * @returns
   *   New instance.
   */
  constructor(t) {
    let n;
    t ? typeof t == "string" || dl(t) ? n = { value: t } : Zn(t) ? n = { path: t } : n = t : n = {}, this.data = {}, this.messages = [], this.history = [], this.cwd = cl.cwd(), this.value, this.stored, this.result, this.map;
    let r = -1;
    for (; ++r < Tn.length; ) {
      const o = Tn[r];
      o in n && n[o] !== void 0 && n[o] !== null && (this[o] = o === "history" ? [...n[o]] : n[o]);
    }
    let i;
    for (i in n)
      Tn.includes(i) || (this[i] = n[i]);
  }
  /**
   * Get the full path (example: `'~/index.min.js'`).
   *
   * @returns {string}
   */
  get path() {
    return this.history[this.history.length - 1];
  }
  /**
   * Set the full path (example: `'~/index.min.js'`).
   *
   * Cannot be nullified.
   * You can set a file URL (a `URL` object with a `file:` protocol) which will
   * be turned into a path with `url.fileURLToPath`.
   *
   * @param {string | URL} path
   */
  set path(t) {
    Zn(t) && (t = pl(t)), Rn(t, "path"), this.path !== t && this.history.push(t);
  }
  /**
   * Get the parent path (example: `'~'`).
   */
  get dirname() {
    return typeof this.path == "string" ? et.dirname(this.path) : void 0;
  }
  /**
   * Set the parent path (example: `'~'`).
   *
   * Cannot be set if there’s no `path` yet.
   */
  set dirname(t) {
    qr(this.basename, "dirname"), this.path = et.join(t || "", this.basename);
  }
  /**
   * Get the basename (including extname) (example: `'index.min.js'`).
   */
  get basename() {
    return typeof this.path == "string" ? et.basename(this.path) : void 0;
  }
  /**
   * Set basename (including extname) (`'index.min.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   */
  set basename(t) {
    Rn(t, "basename"), An(t, "basename"), this.path = et.join(this.dirname || "", t);
  }
  /**
   * Get the extname (including dot) (example: `'.js'`).
   */
  get extname() {
    return typeof this.path == "string" ? et.extname(this.path) : void 0;
  }
  /**
   * Set the extname (including dot) (example: `'.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be set if there’s no `path` yet.
   */
  set extname(t) {
    if (An(t, "extname"), qr(this.dirname, "extname"), t) {
      if (t.charCodeAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (t.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = et.join(this.dirname, this.stem + (t || ""));
  }
  /**
   * Get the stem (basename w/o extname) (example: `'index.min'`).
   */
  get stem() {
    return typeof this.path == "string" ? et.basename(this.path, this.extname) : void 0;
  }
  /**
   * Set the stem (basename w/o extname) (example: `'index.min'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   */
  set stem(t) {
    Rn(t, "stem"), An(t, "stem"), this.path = et.join(this.dirname || "", t + (this.extname || ""));
  }
  /**
   * Serialize the file.
   *
   * @param {BufferEncoding | null | undefined} [encoding='utf8']
   *   Character encoding to understand `value` as when it’s a `Buffer`
   *   (default: `'utf8'`).
   * @returns {string}
   *   Serialized file.
   */
  toString(t) {
    return (this.value || "").toString(t || void 0);
  }
  /**
   * Create a warning message associated with the file.
   *
   * Its `fatal` is set to `false` and `file` is set to the current file path.
   * Its added to `file.messages`.
   *
   * @param {string | Error | VFileMessage} reason
   *   Reason for message, uses the stack and message of the error if given.
   * @param {Node | NodeLike | Position | Point | null | undefined} [place]
   *   Place in file where the message occurred.
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  message(t, n, r) {
    const i = new Ye(t, n, r);
    return this.path && (i.name = this.path + ":" + i.name, i.file = this.path), i.fatal = !1, this.messages.push(i), i;
  }
  /**
   * Create an info message associated with the file.
   *
   * Its `fatal` is set to `null` and `file` is set to the current file path.
   * Its added to `file.messages`.
   *
   * @param {string | Error | VFileMessage} reason
   *   Reason for message, uses the stack and message of the error if given.
   * @param {Node | NodeLike | Position | Point | null | undefined} [place]
   *   Place in file where the message occurred.
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  info(t, n, r) {
    const i = this.message(t, n, r);
    return i.fatal = null, i;
  }
  /**
   * Create a fatal error associated with the file.
   *
   * Its `fatal` is set to `true` and `file` is set to the current file path.
   * Its added to `file.messages`.
   *
   * > 👉 **Note**: a fatal error means that a file is no longer processable.
   *
   * @param {string | Error | VFileMessage} reason
   *   Reason for message, uses the stack and message of the error if given.
   * @param {Node | NodeLike | Position | Point | null | undefined} [place]
   *   Place in file where the message occurred.
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {never}
   *   Message.
   * @throws {VFileMessage}
   *   Message.
   */
  fail(t, n, r) {
    const i = this.message(t, n, r);
    throw i.fatal = !0, i;
  }
}
function An(e, t) {
  if (e && e.includes(et.sep))
    throw new Error(
      "`" + t + "` cannot be a path: did not expect `" + et.sep + "`"
    );
}
function Rn(e, t) {
  if (!e)
    throw new Error("`" + t + "` cannot be empty");
}
function qr(e, t) {
  if (!e)
    throw new Error("Setting `" + t + "` requires `path` to be set too");
}
function dl(e) {
  return lo(e);
}
function Hr(e) {
  if (e)
    throw e;
}
var On, Vr;
function ml() {
  if (Vr) return On;
  Vr = 1;
  var e = Object.prototype.hasOwnProperty, t = Object.prototype.toString, n = Object.defineProperty, r = Object.getOwnPropertyDescriptor, i = function(s) {
    return typeof Array.isArray == "function" ? Array.isArray(s) : t.call(s) === "[object Array]";
  }, o = function(s) {
    if (!s || t.call(s) !== "[object Object]")
      return !1;
    var f = e.call(s, "constructor"), c = s.constructor && s.constructor.prototype && e.call(s.constructor.prototype, "isPrototypeOf");
    if (s.constructor && !f && !c)
      return !1;
    var d;
    for (d in s)
      ;
    return typeof d > "u" || e.call(s, d);
  }, a = function(s, f) {
    n && f.name === "__proto__" ? n(s, f.name, {
      enumerable: !0,
      configurable: !0,
      value: f.newValue,
      writable: !0
    }) : s[f.name] = f.newValue;
  }, l = function(s, f) {
    if (f === "__proto__")
      if (e.call(s, f)) {
        if (r)
          return r(s, f).value;
      } else return;
    return s[f];
  };
  return On = function u() {
    var s, f, c, d, p, m, g = arguments[0], y = 1, x = arguments.length, T = !1;
    for (typeof g == "boolean" && (T = g, g = arguments[1] || {}, y = 2), (g == null || typeof g != "object" && typeof g != "function") && (g = {}); y < x; ++y)
      if (s = arguments[y], s != null)
        for (f in s)
          c = l(g, f), d = l(s, f), g !== d && (T && d && (o(d) || (p = i(d))) ? (p ? (p = !1, m = c && i(c) ? c : []) : m = c && o(c) ? c : {}, a(g, { name: f, newValue: u(T, m, d) })) : typeof d < "u" && a(g, { name: f, newValue: d }));
    return g;
  }, On;
}
var gl = ml();
const Wr = /* @__PURE__ */ Lt(gl);
function er(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function yl() {
  const e = [], t = { run: n, use: r };
  return t;
  function n(...i) {
    let o = -1;
    const a = i.pop();
    if (typeof a != "function")
      throw new TypeError("Expected function as last argument, not " + a);
    l(null, ...i);
    function l(u, ...s) {
      const f = e[++o];
      let c = -1;
      if (u) {
        a(u);
        return;
      }
      for (; ++c < i.length; )
        (s[c] === null || s[c] === void 0) && (s[c] = i[c]);
      i = s, f ? bl(f, l)(...s) : a(null, ...s);
    }
  }
  function r(i) {
    if (typeof i != "function")
      throw new TypeError(
        "Expected `middelware` to be a function, not " + i
      );
    return e.push(i), t;
  }
}
function bl(e, t) {
  let n;
  return r;
  function r(...a) {
    const l = e.length > a.length;
    let u;
    l && a.push(i);
    try {
      u = e.apply(this, a);
    } catch (s) {
      const f = (
        /** @type {Error} */
        s
      );
      if (l && n)
        throw f;
      return i(f);
    }
    l || (u && u.then && typeof u.then == "function" ? u.then(o, i) : u instanceof Error ? i(u) : o(u));
  }
  function i(a, ...l) {
    n || (n = !0, t(a, ...l));
  }
  function o(a) {
    i(null, a);
  }
}
const wl = co().freeze(), uo = {}.hasOwnProperty;
function co() {
  const e = yl(), t = [];
  let n = {}, r, i = -1;
  return o.data = a, o.Parser = void 0, o.Compiler = void 0, o.freeze = l, o.attachers = t, o.use = u, o.parse = s, o.stringify = f, o.run = c, o.runSync = d, o.process = p, o.processSync = m, o;
  function o() {
    const g = co();
    let y = -1;
    for (; ++y < t.length; )
      g.use(...t[y]);
    return g.data(Wr(!0, {}, n)), g;
  }
  function a(g, y) {
    return typeof g == "string" ? arguments.length === 2 ? (Fn("data", r), n[g] = y, o) : uo.call(n, g) && n[g] || null : g ? (Fn("data", r), n = g, o) : n;
  }
  function l() {
    if (r)
      return o;
    for (; ++i < t.length; ) {
      const [g, ...y] = t[i];
      if (y[0] === !1)
        continue;
      y[0] === !0 && (y[0] = void 0);
      const x = g.call(o, ...y);
      typeof x == "function" && e.use(x);
    }
    return r = !0, i = Number.POSITIVE_INFINITY, o;
  }
  function u(g, ...y) {
    let x;
    if (Fn("use", r), g != null) if (typeof g == "function")
      v(g, ...y);
    else if (typeof g == "object")
      Array.isArray(g) ? _(g) : E(g);
    else
      throw new TypeError("Expected usable value, not `" + g + "`");
    return x && (n.settings = Object.assign(n.settings || {}, x)), o;
    function T(k) {
      if (typeof k == "function")
        v(k);
      else if (typeof k == "object")
        if (Array.isArray(k)) {
          const [R, ...B] = k;
          v(R, ...B);
        } else
          E(k);
      else
        throw new TypeError("Expected usable value, not `" + k + "`");
    }
    function E(k) {
      _(k.plugins), k.settings && (x = Object.assign(x || {}, k.settings));
    }
    function _(k) {
      let R = -1;
      if (k != null) if (Array.isArray(k))
        for (; ++R < k.length; ) {
          const B = k[R];
          T(B);
        }
      else
        throw new TypeError("Expected a list of plugins, not `" + k + "`");
    }
    function v(k, R) {
      let B = -1, q;
      for (; ++B < t.length; )
        if (t[B][0] === k) {
          q = t[B];
          break;
        }
      q ? (er(q[1]) && er(R) && (R = Wr(!0, q[1], R)), q[1] = R) : t.push([...arguments]);
    }
  }
  function s(g) {
    o.freeze();
    const y = _t(g), x = o.Parser;
    return Pn("parse", x), Yr(x, "parse") ? new x(String(y), y).parse() : x(String(y), y);
  }
  function f(g, y) {
    o.freeze();
    const x = _t(y), T = o.Compiler;
    return _n("stringify", T), Jr(g), Yr(T, "compile") ? new T(g, x).compile() : T(g, x);
  }
  function c(g, y, x) {
    if (Jr(g), o.freeze(), !x && typeof y == "function" && (x = y, y = void 0), !x)
      return new Promise(T);
    T(null, x);
    function T(E, _) {
      e.run(g, _t(y), v);
      function v(k, R, B) {
        R = R || g, k ? _(k) : E ? E(R) : x(null, R, B);
      }
    }
  }
  function d(g, y) {
    let x, T;
    return o.run(g, y, E), Kr("runSync", "run", T), x;
    function E(_, v) {
      Hr(_), x = v, T = !0;
    }
  }
  function p(g, y) {
    if (o.freeze(), Pn("process", o.Parser), _n("process", o.Compiler), !y)
      return new Promise(x);
    x(null, y);
    function x(T, E) {
      const _ = _t(g);
      o.run(o.parse(_), _, (k, R, B) => {
        if (k || !R || !B)
          v(k);
        else {
          const q = o.stringify(R, B);
          q == null || (vl(q) ? B.value = q : B.result = q), v(k, B);
        }
      });
      function v(k, R) {
        k || !R ? E(k) : T ? T(R) : y(null, R);
      }
    }
  }
  function m(g) {
    let y;
    o.freeze(), Pn("processSync", o.Parser), _n("processSync", o.Compiler);
    const x = _t(g);
    return o.process(x, T), Kr("processSync", "process", y), x;
    function T(E) {
      y = !0, Hr(E);
    }
  }
}
function Yr(e, t) {
  return typeof e == "function" && // Prototypes do exist.
  // type-coverage:ignore-next-line
  e.prototype && // A function with keys in its prototype is probably a constructor.
  // Classes’ prototype methods are not enumerable, so we check if some value
  // exists in the prototype.
  // type-coverage:ignore-next-line
  (xl(e.prototype) || t in e.prototype);
}
function xl(e) {
  let t;
  for (t in e)
    if (uo.call(e, t))
      return !0;
  return !1;
}
function Pn(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `Parser`");
}
function _n(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `Compiler`");
}
function Fn(e, t) {
  if (t)
    throw new Error(
      "Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function Jr(e) {
  if (!er(e) || typeof e.type != "string")
    throw new TypeError("Expected node, got `" + e + "`");
}
function Kr(e, t, n) {
  if (!n)
    throw new Error(
      "`" + e + "` finished async. Use `" + t + "` instead"
    );
}
function _t(e) {
  return kl(e) ? e : new so(e);
}
function kl(e) {
  return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function vl(e) {
  return typeof e == "string" || lo(e);
}
const Sl = {};
function El(e, t) {
  const n = Sl, r = typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0, i = typeof n.includeHtml == "boolean" ? n.includeHtml : !0;
  return fo(e, r, i);
}
function fo(e, t, n) {
  if (Cl(e)) {
    if ("value" in e)
      return e.type === "html" && !n ? "" : e.value;
    if (t && "alt" in e && e.alt)
      return e.alt;
    if ("children" in e)
      return Xr(e.children, t, n);
  }
  return Array.isArray(e) ? Xr(e, t, n) : "";
}
function Xr(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; )
    r[i] = fo(e[i], t, n);
  return r.join("");
}
function Cl(e) {
  return !!(e && typeof e == "object");
}
function qe(e, t, n, r) {
  const i = e.length;
  let o = 0, a;
  if (t < 0 ? t = -t > i ? 0 : i + t : t = t > i ? i : t, n = n > 0 ? n : 0, r.length < 1e4)
    a = Array.from(r), a.unshift(t, n), e.splice(...a);
  else
    for (n && e.splice(t, n); o < r.length; )
      a = r.slice(o, o + 1e4), a.unshift(t, 0), e.splice(...a), o += 1e4, t += 1e4;
}
function We(e, t) {
  return e.length > 0 ? (qe(e, e.length, 0, t), e) : t;
}
const Gr = {}.hasOwnProperty;
function po(e) {
  const t = {};
  let n = -1;
  for (; ++n < e.length; )
    Tl(t, e[n]);
  return t;
}
function Tl(e, t) {
  let n;
  for (n in t) {
    const i = (Gr.call(e, n) ? e[n] : void 0) || (e[n] = {}), o = t[n];
    let a;
    if (o)
      for (a in o) {
        Gr.call(i, a) || (i[a] = []);
        const l = o[a];
        Al(
          // @ts-expect-error Looks like a list.
          i[a],
          Array.isArray(l) ? l : l ? [l] : []
        );
      }
  }
}
function Al(e, t) {
  let n = -1;
  const r = [];
  for (; ++n < t.length; )
    (t[n].add === "after" ? e : r).push(t[n]);
  qe(e, 0, 0, r);
}
const Rl = /[!-\/:-@\[-`\{-~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/, Ie = at(/[A-Za-z]/), _e = at(/[\dA-Za-z]/), Ol = at(/[#-'*+\--9=?A-Z^-~]/);
function ln(e) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    e !== null && (e < 32 || e === 127)
  );
}
const tr = at(/\d/), Pl = at(/[\dA-Fa-f]/), _l = at(/[!-/:-@[-`{-~]/);
function J(e) {
  return e !== null && e < -2;
}
function xe(e) {
  return e !== null && (e < 0 || e === 32);
}
function ae(e) {
  return e === -2 || e === -1 || e === 32;
}
const fn = at(Rl), dt = at(/\s/);
function at(e) {
  return t;
  function t(n) {
    return n !== null && e.test(String.fromCharCode(n));
  }
}
function ce(e, t, n, r) {
  const i = r ? r - 1 : Number.POSITIVE_INFINITY;
  let o = 0;
  return a;
  function a(u) {
    return ae(u) ? (e.enter(n), l(u)) : t(u);
  }
  function l(u) {
    return ae(u) && o++ < i ? (e.consume(u), l) : (e.exit(n), t(u));
  }
}
const Fl = {
  tokenize: Il
};
function Il(e) {
  const t = e.attempt(
    this.parser.constructs.contentInitial,
    r,
    i
  );
  let n;
  return t;
  function r(l) {
    if (l === null) {
      e.consume(l);
      return;
    }
    return e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), ce(e, t, "linePrefix");
  }
  function i(l) {
    return e.enter("paragraph"), o(l);
  }
  function o(l) {
    const u = e.enter("chunkText", {
      contentType: "text",
      previous: n
    });
    return n && (n.next = u), n = u, a(l);
  }
  function a(l) {
    if (l === null) {
      e.exit("chunkText"), e.exit("paragraph"), e.consume(l);
      return;
    }
    return J(l) ? (e.consume(l), e.exit("chunkText"), o) : (e.consume(l), a);
  }
}
const Dl = {
  tokenize: Ll
}, Qr = {
  tokenize: jl
};
function Ll(e) {
  const t = this, n = [];
  let r = 0, i, o, a;
  return l;
  function l(E) {
    if (r < n.length) {
      const _ = n[r];
      return t.containerState = _[1], e.attempt(
        _[0].continuation,
        u,
        s
      )(E);
    }
    return s(E);
  }
  function u(E) {
    if (r++, t.containerState._closeFlow) {
      t.containerState._closeFlow = void 0, i && T();
      const _ = t.events.length;
      let v = _, k;
      for (; v--; )
        if (t.events[v][0] === "exit" && t.events[v][1].type === "chunkFlow") {
          k = t.events[v][1].end;
          break;
        }
      x(r);
      let R = _;
      for (; R < t.events.length; )
        t.events[R][1].end = Object.assign({}, k), R++;
      return qe(
        t.events,
        v + 1,
        0,
        t.events.slice(_)
      ), t.events.length = R, s(E);
    }
    return l(E);
  }
  function s(E) {
    if (r === n.length) {
      if (!i)
        return d(E);
      if (i.currentConstruct && i.currentConstruct.concrete)
        return m(E);
      t.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack);
    }
    return t.containerState = {}, e.check(
      Qr,
      f,
      c
    )(E);
  }
  function f(E) {
    return i && T(), x(r), d(E);
  }
  function c(E) {
    return t.parser.lazy[t.now().line] = r !== n.length, a = t.now().offset, m(E);
  }
  function d(E) {
    return t.containerState = {}, e.attempt(
      Qr,
      p,
      m
    )(E);
  }
  function p(E) {
    return r++, n.push([t.currentConstruct, t.containerState]), d(E);
  }
  function m(E) {
    if (E === null) {
      i && T(), x(0), e.consume(E);
      return;
    }
    return i = i || t.parser.flow(t.now()), e.enter("chunkFlow", {
      contentType: "flow",
      previous: o,
      _tokenizer: i
    }), g(E);
  }
  function g(E) {
    if (E === null) {
      y(e.exit("chunkFlow"), !0), x(0), e.consume(E);
      return;
    }
    return J(E) ? (e.consume(E), y(e.exit("chunkFlow")), r = 0, t.interrupt = void 0, l) : (e.consume(E), g);
  }
  function y(E, _) {
    const v = t.sliceStream(E);
    if (_ && v.push(null), E.previous = o, o && (o.next = E), o = E, i.defineSkip(E.start), i.write(v), t.parser.lazy[E.start.line]) {
      let k = i.events.length;
      for (; k--; )
        if (
          // The token starts before the line ending…
          i.events[k][1].start.offset < a && // …and either is not ended yet…
          (!i.events[k][1].end || // …or ends after it.
          i.events[k][1].end.offset > a)
        )
          return;
      const R = t.events.length;
      let B = R, q, S;
      for (; B--; )
        if (t.events[B][0] === "exit" && t.events[B][1].type === "chunkFlow") {
          if (q) {
            S = t.events[B][1].end;
            break;
          }
          q = !0;
        }
      for (x(r), k = R; k < t.events.length; )
        t.events[k][1].end = Object.assign({}, S), k++;
      qe(
        t.events,
        B + 1,
        0,
        t.events.slice(R)
      ), t.events.length = k;
    }
  }
  function x(E) {
    let _ = n.length;
    for (; _-- > E; ) {
      const v = n[_];
      t.containerState = v[1], v[0].exit.call(t, e);
    }
    n.length = E;
  }
  function T() {
    i.write([null]), o = void 0, i = void 0, t.containerState._closeFlow = void 0;
  }
}
function jl(e, t, n) {
  return ce(
    e,
    e.attempt(this.parser.constructs.document, t, n),
    "linePrefix",
    this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
  );
}
function sn(e) {
  if (e === null || xe(e) || dt(e))
    return 1;
  if (fn(e))
    return 2;
}
function pn(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; ) {
    const o = e[i].resolveAll;
    o && !r.includes(o) && (t = o(t, n), r.push(o));
  }
  return t;
}
const nr = {
  name: "attention",
  tokenize: Nl,
  resolveAll: zl
};
function zl(e, t) {
  let n = -1, r, i, o, a, l, u, s, f;
  for (; ++n < e.length; )
    if (e[n][0] === "enter" && e[n][1].type === "attentionSequence" && e[n][1]._close) {
      for (r = n; r--; )
        if (e[r][0] === "exit" && e[r][1].type === "attentionSequence" && e[r][1]._open && // If the markers are the same:
        t.sliceSerialize(e[r][1]).charCodeAt(0) === t.sliceSerialize(e[n][1]).charCodeAt(0)) {
          if ((e[r][1]._close || e[n][1]._open) && (e[n][1].end.offset - e[n][1].start.offset) % 3 && !((e[r][1].end.offset - e[r][1].start.offset + e[n][1].end.offset - e[n][1].start.offset) % 3))
            continue;
          u = e[r][1].end.offset - e[r][1].start.offset > 1 && e[n][1].end.offset - e[n][1].start.offset > 1 ? 2 : 1;
          const c = Object.assign({}, e[r][1].end), d = Object.assign({}, e[n][1].start);
          Zr(c, -u), Zr(d, u), a = {
            type: u > 1 ? "strongSequence" : "emphasisSequence",
            start: c,
            end: Object.assign({}, e[r][1].end)
          }, l = {
            type: u > 1 ? "strongSequence" : "emphasisSequence",
            start: Object.assign({}, e[n][1].start),
            end: d
          }, o = {
            type: u > 1 ? "strongText" : "emphasisText",
            start: Object.assign({}, e[r][1].end),
            end: Object.assign({}, e[n][1].start)
          }, i = {
            type: u > 1 ? "strong" : "emphasis",
            start: Object.assign({}, a.start),
            end: Object.assign({}, l.end)
          }, e[r][1].end = Object.assign({}, a.start), e[n][1].start = Object.assign({}, l.end), s = [], e[r][1].end.offset - e[r][1].start.offset && (s = We(s, [
            ["enter", e[r][1], t],
            ["exit", e[r][1], t]
          ])), s = We(s, [
            ["enter", i, t],
            ["enter", a, t],
            ["exit", a, t],
            ["enter", o, t]
          ]), s = We(
            s,
            pn(
              t.parser.constructs.insideSpan.null,
              e.slice(r + 1, n),
              t
            )
          ), s = We(s, [
            ["exit", o, t],
            ["enter", l, t],
            ["exit", l, t],
            ["exit", i, t]
          ]), e[n][1].end.offset - e[n][1].start.offset ? (f = 2, s = We(s, [
            ["enter", e[n][1], t],
            ["exit", e[n][1], t]
          ])) : f = 0, qe(e, r - 1, n - r + 3, s), n = r + s.length - f - 2;
          break;
        }
    }
  for (n = -1; ++n < e.length; )
    e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
  return e;
}
function Nl(e, t) {
  const n = this.parser.constructs.attentionMarkers.null, r = this.previous, i = sn(r);
  let o;
  return a;
  function a(u) {
    return o = u, e.enter("attentionSequence"), l(u);
  }
  function l(u) {
    if (u === o)
      return e.consume(u), l;
    const s = e.exit("attentionSequence"), f = sn(u), c = !f || f === 2 && i || n.includes(u), d = !i || i === 2 && f || n.includes(r);
    return s._open = !!(o === 42 ? c : c && (i || !d)), s._close = !!(o === 42 ? d : d && (f || !c)), t(u);
  }
}
function Zr(e, t) {
  e.column += t, e.offset += t, e._bufferIndex += t;
}
const Ml = {
  name: "autolink",
  tokenize: Bl
};
function Bl(e, t, n) {
  let r = 0;
  return i;
  function i(p) {
    return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(p), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), o;
  }
  function o(p) {
    return Ie(p) ? (e.consume(p), a) : s(p);
  }
  function a(p) {
    return p === 43 || p === 45 || p === 46 || _e(p) ? (r = 1, l(p)) : s(p);
  }
  function l(p) {
    return p === 58 ? (e.consume(p), r = 0, u) : (p === 43 || p === 45 || p === 46 || _e(p)) && r++ < 32 ? (e.consume(p), l) : (r = 0, s(p));
  }
  function u(p) {
    return p === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(p), e.exit("autolinkMarker"), e.exit("autolink"), t) : p === null || p === 32 || p === 60 || ln(p) ? n(p) : (e.consume(p), u);
  }
  function s(p) {
    return p === 64 ? (e.consume(p), f) : Ol(p) ? (e.consume(p), s) : n(p);
  }
  function f(p) {
    return _e(p) ? c(p) : n(p);
  }
  function c(p) {
    return p === 46 ? (e.consume(p), r = 0, f) : p === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(p), e.exit("autolinkMarker"), e.exit("autolink"), t) : d(p);
  }
  function d(p) {
    if ((p === 45 || _e(p)) && r++ < 63) {
      const m = p === 45 ? d : c;
      return e.consume(p), m;
    }
    return n(p);
  }
}
const zt = {
  tokenize: $l,
  partial: !0
};
function $l(e, t, n) {
  return r;
  function r(o) {
    return ae(o) ? ce(e, i, "linePrefix")(o) : i(o);
  }
  function i(o) {
    return o === null || J(o) ? t(o) : n(o);
  }
}
const ho = {
  name: "blockQuote",
  tokenize: Ul,
  continuation: {
    tokenize: ql
  },
  exit: Hl
};
function Ul(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    if (a === 62) {
      const l = r.containerState;
      return l.open || (e.enter("blockQuote", {
        _container: !0
      }), l.open = !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(a), e.exit("blockQuoteMarker"), o;
    }
    return n(a);
  }
  function o(a) {
    return ae(a) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(a), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(a));
  }
}
function ql(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return ae(a) ? ce(
      e,
      o,
      "linePrefix",
      r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
    )(a) : o(a);
  }
  function o(a) {
    return e.attempt(ho, t, n)(a);
  }
}
function Hl(e) {
  e.exit("blockQuote");
}
const mo = {
  name: "characterEscape",
  tokenize: Vl
};
function Vl(e, t, n) {
  return r;
  function r(o) {
    return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(o), e.exit("escapeMarker"), i;
  }
  function i(o) {
    return _l(o) ? (e.enter("characterEscapeValue"), e.consume(o), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(o);
  }
}
const ei = document.createElement("i");
function mr(e) {
  const t = "&" + e + ";";
  ei.innerHTML = t;
  const n = ei.textContent;
  return (
    // @ts-expect-error: TypeScript is wrong that `textContent` on elements can
    // yield `null`.
    n.charCodeAt(n.length - 1) === 59 && e !== "semi" || n === t ? !1 : n
  );
}
const go = {
  name: "characterReference",
  tokenize: Wl
};
function Wl(e, t, n) {
  const r = this;
  let i = 0, o, a;
  return l;
  function l(c) {
    return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(c), e.exit("characterReferenceMarker"), u;
  }
  function u(c) {
    return c === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(c), e.exit("characterReferenceMarkerNumeric"), s) : (e.enter("characterReferenceValue"), o = 31, a = _e, f(c));
  }
  function s(c) {
    return c === 88 || c === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(c), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), o = 6, a = Pl, f) : (e.enter("characterReferenceValue"), o = 7, a = tr, f(c));
  }
  function f(c) {
    if (c === 59 && i) {
      const d = e.exit("characterReferenceValue");
      return a === _e && !mr(r.sliceSerialize(d)) ? n(c) : (e.enter("characterReferenceMarker"), e.consume(c), e.exit("characterReferenceMarker"), e.exit("characterReference"), t);
    }
    return a(c) && i++ < o ? (e.consume(c), f) : n(c);
  }
}
const ti = {
  tokenize: Jl,
  partial: !0
}, ni = {
  name: "codeFenced",
  tokenize: Yl,
  concrete: !0
};
function Yl(e, t, n) {
  const r = this, i = {
    tokenize: v,
    partial: !0
  };
  let o = 0, a = 0, l;
  return u;
  function u(k) {
    return s(k);
  }
  function s(k) {
    const R = r.events[r.events.length - 1];
    return o = R && R[1].type === "linePrefix" ? R[2].sliceSerialize(R[1], !0).length : 0, l = k, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), f(k);
  }
  function f(k) {
    return k === l ? (a++, e.consume(k), f) : a < 3 ? n(k) : (e.exit("codeFencedFenceSequence"), ae(k) ? ce(e, c, "whitespace")(k) : c(k));
  }
  function c(k) {
    return k === null || J(k) ? (e.exit("codeFencedFence"), r.interrupt ? t(k) : e.check(ti, g, _)(k)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
      contentType: "string"
    }), d(k));
  }
  function d(k) {
    return k === null || J(k) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), c(k)) : ae(k) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), ce(e, p, "whitespace")(k)) : k === 96 && k === l ? n(k) : (e.consume(k), d);
  }
  function p(k) {
    return k === null || J(k) ? c(k) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
      contentType: "string"
    }), m(k));
  }
  function m(k) {
    return k === null || J(k) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), c(k)) : k === 96 && k === l ? n(k) : (e.consume(k), m);
  }
  function g(k) {
    return e.attempt(i, _, y)(k);
  }
  function y(k) {
    return e.enter("lineEnding"), e.consume(k), e.exit("lineEnding"), x;
  }
  function x(k) {
    return o > 0 && ae(k) ? ce(
      e,
      T,
      "linePrefix",
      o + 1
    )(k) : T(k);
  }
  function T(k) {
    return k === null || J(k) ? e.check(ti, g, _)(k) : (e.enter("codeFlowValue"), E(k));
  }
  function E(k) {
    return k === null || J(k) ? (e.exit("codeFlowValue"), T(k)) : (e.consume(k), E);
  }
  function _(k) {
    return e.exit("codeFenced"), t(k);
  }
  function v(k, R, B) {
    let q = 0;
    return S;
    function S(U) {
      return k.enter("lineEnding"), k.consume(U), k.exit("lineEnding"), O;
    }
    function O(U) {
      return k.enter("codeFencedFence"), ae(U) ? ce(
        k,
        z,
        "linePrefix",
        r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
      )(U) : z(U);
    }
    function z(U) {
      return U === l ? (k.enter("codeFencedFenceSequence"), N(U)) : B(U);
    }
    function N(U) {
      return U === l ? (q++, k.consume(U), N) : q >= a ? (k.exit("codeFencedFenceSequence"), ae(U) ? ce(k, L, "whitespace")(U) : L(U)) : B(U);
    }
    function L(U) {
      return U === null || J(U) ? (k.exit("codeFencedFence"), R(U)) : B(U);
    }
  }
}
function Jl(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return a === null ? n(a) : (e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), o);
  }
  function o(a) {
    return r.parser.lazy[r.now().line] ? n(a) : t(a);
  }
}
const In = {
  name: "codeIndented",
  tokenize: Xl
}, Kl = {
  tokenize: Gl,
  partial: !0
};
function Xl(e, t, n) {
  const r = this;
  return i;
  function i(s) {
    return e.enter("codeIndented"), ce(e, o, "linePrefix", 5)(s);
  }
  function o(s) {
    const f = r.events[r.events.length - 1];
    return f && f[1].type === "linePrefix" && f[2].sliceSerialize(f[1], !0).length >= 4 ? a(s) : n(s);
  }
  function a(s) {
    return s === null ? u(s) : J(s) ? e.attempt(Kl, a, u)(s) : (e.enter("codeFlowValue"), l(s));
  }
  function l(s) {
    return s === null || J(s) ? (e.exit("codeFlowValue"), a(s)) : (e.consume(s), l);
  }
  function u(s) {
    return e.exit("codeIndented"), t(s);
  }
}
function Gl(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return r.parser.lazy[r.now().line] ? n(a) : J(a) ? (e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), i) : ce(e, o, "linePrefix", 5)(a);
  }
  function o(a) {
    const l = r.events[r.events.length - 1];
    return l && l[1].type === "linePrefix" && l[2].sliceSerialize(l[1], !0).length >= 4 ? t(a) : J(a) ? i(a) : n(a);
  }
}
const Ql = {
  name: "codeText",
  tokenize: ts,
  resolve: Zl,
  previous: es
};
function Zl(e) {
  let t = e.length - 4, n = 3, r, i;
  if ((e[n][1].type === "lineEnding" || e[n][1].type === "space") && (e[t][1].type === "lineEnding" || e[t][1].type === "space")) {
    for (r = n; ++r < t; )
      if (e[r][1].type === "codeTextData") {
        e[n][1].type = "codeTextPadding", e[t][1].type = "codeTextPadding", n += 2, t -= 2;
        break;
      }
  }
  for (r = n - 1, t++; ++r <= t; )
    i === void 0 ? r !== t && e[r][1].type !== "lineEnding" && (i = r) : (r === t || e[r][1].type === "lineEnding") && (e[i][1].type = "codeTextData", r !== i + 2 && (e[i][1].end = e[r - 1][1].end, e.splice(i + 2, r - i - 2), t -= r - i - 2, r = i + 2), i = void 0);
  return e;
}
function es(e) {
  return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function ts(e, t, n) {
  let r = 0, i, o;
  return a;
  function a(c) {
    return e.enter("codeText"), e.enter("codeTextSequence"), l(c);
  }
  function l(c) {
    return c === 96 ? (e.consume(c), r++, l) : (e.exit("codeTextSequence"), u(c));
  }
  function u(c) {
    return c === null ? n(c) : c === 32 ? (e.enter("space"), e.consume(c), e.exit("space"), u) : c === 96 ? (o = e.enter("codeTextSequence"), i = 0, f(c)) : J(c) ? (e.enter("lineEnding"), e.consume(c), e.exit("lineEnding"), u) : (e.enter("codeTextData"), s(c));
  }
  function s(c) {
    return c === null || c === 32 || c === 96 || J(c) ? (e.exit("codeTextData"), u(c)) : (e.consume(c), s);
  }
  function f(c) {
    return c === 96 ? (e.consume(c), i++, f) : i === r ? (e.exit("codeTextSequence"), e.exit("codeText"), t(c)) : (o.type = "codeTextData", s(c));
  }
}
function yo(e) {
  const t = {};
  let n = -1, r, i, o, a, l, u, s;
  for (; ++n < e.length; ) {
    for (; n in t; )
      n = t[n];
    if (r = e[n], n && r[1].type === "chunkFlow" && e[n - 1][1].type === "listItemPrefix" && (u = r[1]._tokenizer.events, o = 0, o < u.length && u[o][1].type === "lineEndingBlank" && (o += 2), o < u.length && u[o][1].type === "content"))
      for (; ++o < u.length && u[o][1].type !== "content"; )
        u[o][1].type === "chunkText" && (u[o][1]._isInFirstContentOfListItem = !0, o++);
    if (r[0] === "enter")
      r[1].contentType && (Object.assign(t, ns(e, n)), n = t[n], s = !0);
    else if (r[1]._container) {
      for (o = n, i = void 0; o-- && (a = e[o], a[1].type === "lineEnding" || a[1].type === "lineEndingBlank"); )
        a[0] === "enter" && (i && (e[i][1].type = "lineEndingBlank"), a[1].type = "lineEnding", i = o);
      i && (r[1].end = Object.assign({}, e[i][1].start), l = e.slice(i, n), l.unshift(r), qe(e, i, n - i + 1, l));
    }
  }
  return !s;
}
function ns(e, t) {
  const n = e[t][1], r = e[t][2];
  let i = t - 1;
  const o = [], a = n._tokenizer || r.parser[n.contentType](n.start), l = a.events, u = [], s = {};
  let f, c, d = -1, p = n, m = 0, g = 0;
  const y = [g];
  for (; p; ) {
    for (; e[++i][1] !== p; )
      ;
    o.push(i), p._tokenizer || (f = r.sliceStream(p), p.next || f.push(null), c && a.defineSkip(p.start), p._isInFirstContentOfListItem && (a._gfmTasklistFirstContentOfListItem = !0), a.write(f), p._isInFirstContentOfListItem && (a._gfmTasklistFirstContentOfListItem = void 0)), c = p, p = p.next;
  }
  for (p = n; ++d < l.length; )
    // Find a void token that includes a break.
    l[d][0] === "exit" && l[d - 1][0] === "enter" && l[d][1].type === l[d - 1][1].type && l[d][1].start.line !== l[d][1].end.line && (g = d + 1, y.push(g), p._tokenizer = void 0, p.previous = void 0, p = p.next);
  for (a.events = [], p ? (p._tokenizer = void 0, p.previous = void 0) : y.pop(), d = y.length; d--; ) {
    const x = l.slice(y[d], y[d + 1]), T = o.pop();
    u.unshift([T, T + x.length - 1]), qe(e, T, 2, x);
  }
  for (d = -1; ++d < u.length; )
    s[m + u[d][0]] = m + u[d][1], m += u[d][1] - u[d][0] - 1;
  return s;
}
const rs = {
  tokenize: as,
  resolve: os
}, is = {
  tokenize: ls,
  partial: !0
};
function os(e) {
  return yo(e), e;
}
function as(e, t) {
  let n;
  return r;
  function r(l) {
    return e.enter("content"), n = e.enter("chunkContent", {
      contentType: "content"
    }), i(l);
  }
  function i(l) {
    return l === null ? o(l) : J(l) ? e.check(
      is,
      a,
      o
    )(l) : (e.consume(l), i);
  }
  function o(l) {
    return e.exit("chunkContent"), e.exit("content"), t(l);
  }
  function a(l) {
    return e.consume(l), e.exit("chunkContent"), n.next = e.enter("chunkContent", {
      contentType: "content",
      previous: n
    }), n = n.next, i;
  }
}
function ls(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), ce(e, o, "linePrefix");
  }
  function o(a) {
    if (a === null || J(a))
      return n(a);
    const l = r.events[r.events.length - 1];
    return !r.parser.constructs.disable.null.includes("codeIndented") && l && l[1].type === "linePrefix" && l[2].sliceSerialize(l[1], !0).length >= 4 ? t(a) : e.interrupt(r.parser.constructs.flow, n, t)(a);
  }
}
function bo(e, t, n, r, i, o, a, l, u) {
  const s = u || Number.POSITIVE_INFINITY;
  let f = 0;
  return c;
  function c(x) {
    return x === 60 ? (e.enter(r), e.enter(i), e.enter(o), e.consume(x), e.exit(o), d) : x === null || x === 32 || x === 41 || ln(x) ? n(x) : (e.enter(r), e.enter(a), e.enter(l), e.enter("chunkString", {
      contentType: "string"
    }), g(x));
  }
  function d(x) {
    return x === 62 ? (e.enter(o), e.consume(x), e.exit(o), e.exit(i), e.exit(r), t) : (e.enter(l), e.enter("chunkString", {
      contentType: "string"
    }), p(x));
  }
  function p(x) {
    return x === 62 ? (e.exit("chunkString"), e.exit(l), d(x)) : x === null || x === 60 || J(x) ? n(x) : (e.consume(x), x === 92 ? m : p);
  }
  function m(x) {
    return x === 60 || x === 62 || x === 92 ? (e.consume(x), p) : p(x);
  }
  function g(x) {
    return !f && (x === null || x === 41 || xe(x)) ? (e.exit("chunkString"), e.exit(l), e.exit(a), e.exit(r), t(x)) : f < s && x === 40 ? (e.consume(x), f++, g) : x === 41 ? (e.consume(x), f--, g) : x === null || x === 32 || x === 40 || ln(x) ? n(x) : (e.consume(x), x === 92 ? y : g);
  }
  function y(x) {
    return x === 40 || x === 41 || x === 92 ? (e.consume(x), g) : g(x);
  }
}
function wo(e, t, n, r, i, o) {
  const a = this;
  let l = 0, u;
  return s;
  function s(p) {
    return e.enter(r), e.enter(i), e.consume(p), e.exit(i), e.enter(o), f;
  }
  function f(p) {
    return l > 999 || p === null || p === 91 || p === 93 && !u || // To do: remove in the future once we’ve switched from
    // `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
    // which doesn’t need this.
    // Hidden footnotes hook.
    /* c8 ignore next 3 */
    p === 94 && !l && "_hiddenFootnoteSupport" in a.parser.constructs ? n(p) : p === 93 ? (e.exit(o), e.enter(i), e.consume(p), e.exit(i), e.exit(r), t) : J(p) ? (e.enter("lineEnding"), e.consume(p), e.exit("lineEnding"), f) : (e.enter("chunkString", {
      contentType: "string"
    }), c(p));
  }
  function c(p) {
    return p === null || p === 91 || p === 93 || J(p) || l++ > 999 ? (e.exit("chunkString"), f(p)) : (e.consume(p), u || (u = !ae(p)), p === 92 ? d : c);
  }
  function d(p) {
    return p === 91 || p === 92 || p === 93 ? (e.consume(p), l++, c) : c(p);
  }
}
function xo(e, t, n, r, i, o) {
  let a;
  return l;
  function l(d) {
    return d === 34 || d === 39 || d === 40 ? (e.enter(r), e.enter(i), e.consume(d), e.exit(i), a = d === 40 ? 41 : d, u) : n(d);
  }
  function u(d) {
    return d === a ? (e.enter(i), e.consume(d), e.exit(i), e.exit(r), t) : (e.enter(o), s(d));
  }
  function s(d) {
    return d === a ? (e.exit(o), u(a)) : d === null ? n(d) : J(d) ? (e.enter("lineEnding"), e.consume(d), e.exit("lineEnding"), ce(e, s, "linePrefix")) : (e.enter("chunkString", {
      contentType: "string"
    }), f(d));
  }
  function f(d) {
    return d === a || d === null || J(d) ? (e.exit("chunkString"), s(d)) : (e.consume(d), d === 92 ? c : f);
  }
  function c(d) {
    return d === a || d === 92 ? (e.consume(d), f) : f(d);
  }
}
function Dt(e, t) {
  let n;
  return r;
  function r(i) {
    return J(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), n = !0, r) : ae(i) ? ce(
      e,
      r,
      n ? "linePrefix" : "lineSuffix"
    )(i) : t(i);
  }
}
function Xe(e) {
  return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const ss = {
  name: "definition",
  tokenize: cs
}, us = {
  tokenize: fs,
  partial: !0
};
function cs(e, t, n) {
  const r = this;
  let i;
  return o;
  function o(p) {
    return e.enter("definition"), a(p);
  }
  function a(p) {
    return wo.call(
      r,
      e,
      l,
      // Note: we don’t need to reset the way `markdown-rs` does.
      n,
      "definitionLabel",
      "definitionLabelMarker",
      "definitionLabelString"
    )(p);
  }
  function l(p) {
    return i = Xe(
      r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)
    ), p === 58 ? (e.enter("definitionMarker"), e.consume(p), e.exit("definitionMarker"), u) : n(p);
  }
  function u(p) {
    return xe(p) ? Dt(e, s)(p) : s(p);
  }
  function s(p) {
    return bo(
      e,
      f,
      // Note: we don’t need to reset the way `markdown-rs` does.
      n,
      "definitionDestination",
      "definitionDestinationLiteral",
      "definitionDestinationLiteralMarker",
      "definitionDestinationRaw",
      "definitionDestinationString"
    )(p);
  }
  function f(p) {
    return e.attempt(us, c, c)(p);
  }
  function c(p) {
    return ae(p) ? ce(e, d, "whitespace")(p) : d(p);
  }
  function d(p) {
    return p === null || J(p) ? (e.exit("definition"), r.parser.defined.push(i), t(p)) : n(p);
  }
}
function fs(e, t, n) {
  return r;
  function r(l) {
    return xe(l) ? Dt(e, i)(l) : n(l);
  }
  function i(l) {
    return xo(
      e,
      o,
      n,
      "definitionTitle",
      "definitionTitleMarker",
      "definitionTitleString"
    )(l);
  }
  function o(l) {
    return ae(l) ? ce(e, a, "whitespace")(l) : a(l);
  }
  function a(l) {
    return l === null || J(l) ? t(l) : n(l);
  }
}
const ps = {
  name: "hardBreakEscape",
  tokenize: hs
};
function hs(e, t, n) {
  return r;
  function r(o) {
    return e.enter("hardBreakEscape"), e.consume(o), i;
  }
  function i(o) {
    return J(o) ? (e.exit("hardBreakEscape"), t(o)) : n(o);
  }
}
const ds = {
  name: "headingAtx",
  tokenize: gs,
  resolve: ms
};
function ms(e, t) {
  let n = e.length - 2, r = 3, i, o;
  return e[r][1].type === "whitespace" && (r += 2), n - 2 > r && e[n][1].type === "whitespace" && (n -= 2), e[n][1].type === "atxHeadingSequence" && (r === n - 1 || n - 4 > r && e[n - 2][1].type === "whitespace") && (n -= r + 1 === n ? 2 : 4), n > r && (i = {
    type: "atxHeadingText",
    start: e[r][1].start,
    end: e[n][1].end
  }, o = {
    type: "chunkText",
    start: e[r][1].start,
    end: e[n][1].end,
    contentType: "text"
  }, qe(e, r, n - r + 1, [
    ["enter", i, t],
    ["enter", o, t],
    ["exit", o, t],
    ["exit", i, t]
  ])), e;
}
function gs(e, t, n) {
  let r = 0;
  return i;
  function i(f) {
    return e.enter("atxHeading"), o(f);
  }
  function o(f) {
    return e.enter("atxHeadingSequence"), a(f);
  }
  function a(f) {
    return f === 35 && r++ < 6 ? (e.consume(f), a) : f === null || xe(f) ? (e.exit("atxHeadingSequence"), l(f)) : n(f);
  }
  function l(f) {
    return f === 35 ? (e.enter("atxHeadingSequence"), u(f)) : f === null || J(f) ? (e.exit("atxHeading"), t(f)) : ae(f) ? ce(e, l, "whitespace")(f) : (e.enter("atxHeadingText"), s(f));
  }
  function u(f) {
    return f === 35 ? (e.consume(f), u) : (e.exit("atxHeadingSequence"), l(f));
  }
  function s(f) {
    return f === null || f === 35 || xe(f) ? (e.exit("atxHeadingText"), l(f)) : (e.consume(f), s);
  }
}
const ys = [
  "address",
  "article",
  "aside",
  "base",
  "basefont",
  "blockquote",
  "body",
  "caption",
  "center",
  "col",
  "colgroup",
  "dd",
  "details",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "iframe",
  "legend",
  "li",
  "link",
  "main",
  "menu",
  "menuitem",
  "nav",
  "noframes",
  "ol",
  "optgroup",
  "option",
  "p",
  "param",
  "search",
  "section",
  "summary",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "title",
  "tr",
  "track",
  "ul"
], ri = ["pre", "script", "style", "textarea"], bs = {
  name: "htmlFlow",
  tokenize: vs,
  resolveTo: ks,
  concrete: !0
}, ws = {
  tokenize: Es,
  partial: !0
}, xs = {
  tokenize: Ss,
  partial: !0
};
function ks(e) {
  let t = e.length;
  for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"); )
    ;
  return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
}
function vs(e, t, n) {
  const r = this;
  let i, o, a, l, u;
  return s;
  function s(b) {
    return f(b);
  }
  function f(b) {
    return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(b), c;
  }
  function c(b) {
    return b === 33 ? (e.consume(b), d) : b === 47 ? (e.consume(b), o = !0, g) : b === 63 ? (e.consume(b), i = 3, r.interrupt ? t : h) : Ie(b) ? (e.consume(b), a = String.fromCharCode(b), y) : n(b);
  }
  function d(b) {
    return b === 45 ? (e.consume(b), i = 2, p) : b === 91 ? (e.consume(b), i = 5, l = 0, m) : Ie(b) ? (e.consume(b), i = 4, r.interrupt ? t : h) : n(b);
  }
  function p(b) {
    return b === 45 ? (e.consume(b), r.interrupt ? t : h) : n(b);
  }
  function m(b) {
    const H = "CDATA[";
    return b === H.charCodeAt(l++) ? (e.consume(b), l === H.length ? r.interrupt ? t : z : m) : n(b);
  }
  function g(b) {
    return Ie(b) ? (e.consume(b), a = String.fromCharCode(b), y) : n(b);
  }
  function y(b) {
    if (b === null || b === 47 || b === 62 || xe(b)) {
      const H = b === 47, Z = a.toLowerCase();
      return !H && !o && ri.includes(Z) ? (i = 1, r.interrupt ? t(b) : z(b)) : ys.includes(a.toLowerCase()) ? (i = 6, H ? (e.consume(b), x) : r.interrupt ? t(b) : z(b)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(b) : o ? T(b) : E(b));
    }
    return b === 45 || _e(b) ? (e.consume(b), a += String.fromCharCode(b), y) : n(b);
  }
  function x(b) {
    return b === 62 ? (e.consume(b), r.interrupt ? t : z) : n(b);
  }
  function T(b) {
    return ae(b) ? (e.consume(b), T) : S(b);
  }
  function E(b) {
    return b === 47 ? (e.consume(b), S) : b === 58 || b === 95 || Ie(b) ? (e.consume(b), _) : ae(b) ? (e.consume(b), E) : S(b);
  }
  function _(b) {
    return b === 45 || b === 46 || b === 58 || b === 95 || _e(b) ? (e.consume(b), _) : v(b);
  }
  function v(b) {
    return b === 61 ? (e.consume(b), k) : ae(b) ? (e.consume(b), v) : E(b);
  }
  function k(b) {
    return b === null || b === 60 || b === 61 || b === 62 || b === 96 ? n(b) : b === 34 || b === 39 ? (e.consume(b), u = b, R) : ae(b) ? (e.consume(b), k) : B(b);
  }
  function R(b) {
    return b === u ? (e.consume(b), u = null, q) : b === null || J(b) ? n(b) : (e.consume(b), R);
  }
  function B(b) {
    return b === null || b === 34 || b === 39 || b === 47 || b === 60 || b === 61 || b === 62 || b === 96 || xe(b) ? v(b) : (e.consume(b), B);
  }
  function q(b) {
    return b === 47 || b === 62 || ae(b) ? E(b) : n(b);
  }
  function S(b) {
    return b === 62 ? (e.consume(b), O) : n(b);
  }
  function O(b) {
    return b === null || J(b) ? z(b) : ae(b) ? (e.consume(b), O) : n(b);
  }
  function z(b) {
    return b === 45 && i === 2 ? (e.consume(b), Q) : b === 60 && i === 1 ? (e.consume(b), se) : b === 62 && i === 4 ? (e.consume(b), D) : b === 63 && i === 3 ? (e.consume(b), h) : b === 93 && i === 5 ? (e.consume(b), Se) : J(b) && (i === 6 || i === 7) ? (e.exit("htmlFlowData"), e.check(
      ws,
      Y,
      N
    )(b)) : b === null || J(b) ? (e.exit("htmlFlowData"), N(b)) : (e.consume(b), z);
  }
  function N(b) {
    return e.check(
      xs,
      L,
      Y
    )(b);
  }
  function L(b) {
    return e.enter("lineEnding"), e.consume(b), e.exit("lineEnding"), U;
  }
  function U(b) {
    return b === null || J(b) ? N(b) : (e.enter("htmlFlowData"), z(b));
  }
  function Q(b) {
    return b === 45 ? (e.consume(b), h) : z(b);
  }
  function se(b) {
    return b === 47 ? (e.consume(b), a = "", fe) : z(b);
  }
  function fe(b) {
    if (b === 62) {
      const H = a.toLowerCase();
      return ri.includes(H) ? (e.consume(b), D) : z(b);
    }
    return Ie(b) && a.length < 8 ? (e.consume(b), a += String.fromCharCode(b), fe) : z(b);
  }
  function Se(b) {
    return b === 93 ? (e.consume(b), h) : z(b);
  }
  function h(b) {
    return b === 62 ? (e.consume(b), D) : b === 45 && i === 2 ? (e.consume(b), h) : z(b);
  }
  function D(b) {
    return b === null || J(b) ? (e.exit("htmlFlowData"), Y(b)) : (e.consume(b), D);
  }
  function Y(b) {
    return e.exit("htmlFlow"), t(b);
  }
}
function Ss(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return J(a) ? (e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), o) : n(a);
  }
  function o(a) {
    return r.parser.lazy[r.now().line] ? n(a) : t(a);
  }
}
function Es(e, t, n) {
  return r;
  function r(i) {
    return e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), e.attempt(zt, t, n);
  }
}
const Cs = {
  name: "htmlText",
  tokenize: Ts
};
function Ts(e, t, n) {
  const r = this;
  let i, o, a;
  return l;
  function l(h) {
    return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(h), u;
  }
  function u(h) {
    return h === 33 ? (e.consume(h), s) : h === 47 ? (e.consume(h), v) : h === 63 ? (e.consume(h), E) : Ie(h) ? (e.consume(h), B) : n(h);
  }
  function s(h) {
    return h === 45 ? (e.consume(h), f) : h === 91 ? (e.consume(h), o = 0, m) : Ie(h) ? (e.consume(h), T) : n(h);
  }
  function f(h) {
    return h === 45 ? (e.consume(h), p) : n(h);
  }
  function c(h) {
    return h === null ? n(h) : h === 45 ? (e.consume(h), d) : J(h) ? (a = c, se(h)) : (e.consume(h), c);
  }
  function d(h) {
    return h === 45 ? (e.consume(h), p) : c(h);
  }
  function p(h) {
    return h === 62 ? Q(h) : h === 45 ? d(h) : c(h);
  }
  function m(h) {
    const D = "CDATA[";
    return h === D.charCodeAt(o++) ? (e.consume(h), o === D.length ? g : m) : n(h);
  }
  function g(h) {
    return h === null ? n(h) : h === 93 ? (e.consume(h), y) : J(h) ? (a = g, se(h)) : (e.consume(h), g);
  }
  function y(h) {
    return h === 93 ? (e.consume(h), x) : g(h);
  }
  function x(h) {
    return h === 62 ? Q(h) : h === 93 ? (e.consume(h), x) : g(h);
  }
  function T(h) {
    return h === null || h === 62 ? Q(h) : J(h) ? (a = T, se(h)) : (e.consume(h), T);
  }
  function E(h) {
    return h === null ? n(h) : h === 63 ? (e.consume(h), _) : J(h) ? (a = E, se(h)) : (e.consume(h), E);
  }
  function _(h) {
    return h === 62 ? Q(h) : E(h);
  }
  function v(h) {
    return Ie(h) ? (e.consume(h), k) : n(h);
  }
  function k(h) {
    return h === 45 || _e(h) ? (e.consume(h), k) : R(h);
  }
  function R(h) {
    return J(h) ? (a = R, se(h)) : ae(h) ? (e.consume(h), R) : Q(h);
  }
  function B(h) {
    return h === 45 || _e(h) ? (e.consume(h), B) : h === 47 || h === 62 || xe(h) ? q(h) : n(h);
  }
  function q(h) {
    return h === 47 ? (e.consume(h), Q) : h === 58 || h === 95 || Ie(h) ? (e.consume(h), S) : J(h) ? (a = q, se(h)) : ae(h) ? (e.consume(h), q) : Q(h);
  }
  function S(h) {
    return h === 45 || h === 46 || h === 58 || h === 95 || _e(h) ? (e.consume(h), S) : O(h);
  }
  function O(h) {
    return h === 61 ? (e.consume(h), z) : J(h) ? (a = O, se(h)) : ae(h) ? (e.consume(h), O) : q(h);
  }
  function z(h) {
    return h === null || h === 60 || h === 61 || h === 62 || h === 96 ? n(h) : h === 34 || h === 39 ? (e.consume(h), i = h, N) : J(h) ? (a = z, se(h)) : ae(h) ? (e.consume(h), z) : (e.consume(h), L);
  }
  function N(h) {
    return h === i ? (e.consume(h), i = void 0, U) : h === null ? n(h) : J(h) ? (a = N, se(h)) : (e.consume(h), N);
  }
  function L(h) {
    return h === null || h === 34 || h === 39 || h === 60 || h === 61 || h === 96 ? n(h) : h === 47 || h === 62 || xe(h) ? q(h) : (e.consume(h), L);
  }
  function U(h) {
    return h === 47 || h === 62 || xe(h) ? q(h) : n(h);
  }
  function Q(h) {
    return h === 62 ? (e.consume(h), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(h);
  }
  function se(h) {
    return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(h), e.exit("lineEnding"), fe;
  }
  function fe(h) {
    return ae(h) ? ce(
      e,
      Se,
      "linePrefix",
      r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
    )(h) : Se(h);
  }
  function Se(h) {
    return e.enter("htmlTextData"), a(h);
  }
}
const gr = {
  name: "labelEnd",
  tokenize: Fs,
  resolveTo: _s,
  resolveAll: Ps
}, As = {
  tokenize: Is
}, Rs = {
  tokenize: Ds
}, Os = {
  tokenize: Ls
};
function Ps(e) {
  let t = -1;
  for (; ++t < e.length; ) {
    const n = e[t][1];
    (n.type === "labelImage" || n.type === "labelLink" || n.type === "labelEnd") && (e.splice(t + 1, n.type === "labelImage" ? 4 : 2), n.type = "data", t++);
  }
  return e;
}
function _s(e, t) {
  let n = e.length, r = 0, i, o, a, l;
  for (; n--; )
    if (i = e[n][1], o) {
      if (i.type === "link" || i.type === "labelLink" && i._inactive)
        break;
      e[n][0] === "enter" && i.type === "labelLink" && (i._inactive = !0);
    } else if (a) {
      if (e[n][0] === "enter" && (i.type === "labelImage" || i.type === "labelLink") && !i._balanced && (o = n, i.type !== "labelLink")) {
        r = 2;
        break;
      }
    } else i.type === "labelEnd" && (a = n);
  const u = {
    type: e[o][1].type === "labelLink" ? "link" : "image",
    start: Object.assign({}, e[o][1].start),
    end: Object.assign({}, e[e.length - 1][1].end)
  }, s = {
    type: "label",
    start: Object.assign({}, e[o][1].start),
    end: Object.assign({}, e[a][1].end)
  }, f = {
    type: "labelText",
    start: Object.assign({}, e[o + r + 2][1].end),
    end: Object.assign({}, e[a - 2][1].start)
  };
  return l = [
    ["enter", u, t],
    ["enter", s, t]
  ], l = We(l, e.slice(o + 1, o + r + 3)), l = We(l, [["enter", f, t]]), l = We(
    l,
    pn(
      t.parser.constructs.insideSpan.null,
      e.slice(o + r + 4, a - 3),
      t
    )
  ), l = We(l, [
    ["exit", f, t],
    e[a - 2],
    e[a - 1],
    ["exit", s, t]
  ]), l = We(l, e.slice(a + 1)), l = We(l, [["exit", u, t]]), qe(e, o, e.length, l), e;
}
function Fs(e, t, n) {
  const r = this;
  let i = r.events.length, o, a;
  for (; i--; )
    if ((r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") && !r.events[i][1]._balanced) {
      o = r.events[i][1];
      break;
    }
  return l;
  function l(d) {
    return o ? o._inactive ? c(d) : (a = r.parser.defined.includes(
      Xe(
        r.sliceSerialize({
          start: o.end,
          end: r.now()
        })
      )
    ), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(d), e.exit("labelMarker"), e.exit("labelEnd"), u) : n(d);
  }
  function u(d) {
    return d === 40 ? e.attempt(
      As,
      f,
      a ? f : c
    )(d) : d === 91 ? e.attempt(
      Rs,
      f,
      a ? s : c
    )(d) : a ? f(d) : c(d);
  }
  function s(d) {
    return e.attempt(
      Os,
      f,
      c
    )(d);
  }
  function f(d) {
    return t(d);
  }
  function c(d) {
    return o._balanced = !0, n(d);
  }
}
function Is(e, t, n) {
  return r;
  function r(c) {
    return e.enter("resource"), e.enter("resourceMarker"), e.consume(c), e.exit("resourceMarker"), i;
  }
  function i(c) {
    return xe(c) ? Dt(e, o)(c) : o(c);
  }
  function o(c) {
    return c === 41 ? f(c) : bo(
      e,
      a,
      l,
      "resourceDestination",
      "resourceDestinationLiteral",
      "resourceDestinationLiteralMarker",
      "resourceDestinationRaw",
      "resourceDestinationString",
      32
    )(c);
  }
  function a(c) {
    return xe(c) ? Dt(e, u)(c) : f(c);
  }
  function l(c) {
    return n(c);
  }
  function u(c) {
    return c === 34 || c === 39 || c === 40 ? xo(
      e,
      s,
      n,
      "resourceTitle",
      "resourceTitleMarker",
      "resourceTitleString"
    )(c) : f(c);
  }
  function s(c) {
    return xe(c) ? Dt(e, f)(c) : f(c);
  }
  function f(c) {
    return c === 41 ? (e.enter("resourceMarker"), e.consume(c), e.exit("resourceMarker"), e.exit("resource"), t) : n(c);
  }
}
function Ds(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return wo.call(
      r,
      e,
      o,
      a,
      "reference",
      "referenceMarker",
      "referenceString"
    )(l);
  }
  function o(l) {
    return r.parser.defined.includes(
      Xe(
        r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)
      )
    ) ? t(l) : n(l);
  }
  function a(l) {
    return n(l);
  }
}
function Ls(e, t, n) {
  return r;
  function r(o) {
    return e.enter("reference"), e.enter("referenceMarker"), e.consume(o), e.exit("referenceMarker"), i;
  }
  function i(o) {
    return o === 93 ? (e.enter("referenceMarker"), e.consume(o), e.exit("referenceMarker"), e.exit("reference"), t) : n(o);
  }
}
const js = {
  name: "labelStartImage",
  tokenize: zs,
  resolveAll: gr.resolveAll
};
function zs(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(l), e.exit("labelImageMarker"), o;
  }
  function o(l) {
    return l === 91 ? (e.enter("labelMarker"), e.consume(l), e.exit("labelMarker"), e.exit("labelImage"), a) : n(l);
  }
  function a(l) {
    return l === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(l) : t(l);
  }
}
const Ns = {
  name: "labelStartLink",
  tokenize: Ms,
  resolveAll: gr.resolveAll
};
function Ms(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return e.enter("labelLink"), e.enter("labelMarker"), e.consume(a), e.exit("labelMarker"), e.exit("labelLink"), o;
  }
  function o(a) {
    return a === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(a) : t(a);
  }
}
const Dn = {
  name: "lineEnding",
  tokenize: Bs
};
function Bs(e, t) {
  return n;
  function n(r) {
    return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), ce(e, t, "linePrefix");
  }
}
const nn = {
  name: "thematicBreak",
  tokenize: $s
};
function $s(e, t, n) {
  let r = 0, i;
  return o;
  function o(s) {
    return e.enter("thematicBreak"), a(s);
  }
  function a(s) {
    return i = s, l(s);
  }
  function l(s) {
    return s === i ? (e.enter("thematicBreakSequence"), u(s)) : r >= 3 && (s === null || J(s)) ? (e.exit("thematicBreak"), t(s)) : n(s);
  }
  function u(s) {
    return s === i ? (e.consume(s), r++, u) : (e.exit("thematicBreakSequence"), ae(s) ? ce(e, l, "whitespace")(s) : l(s));
  }
}
const Le = {
  name: "list",
  tokenize: Hs,
  continuation: {
    tokenize: Vs
  },
  exit: Ys
}, Us = {
  tokenize: Js,
  partial: !0
}, qs = {
  tokenize: Ws,
  partial: !0
};
function Hs(e, t, n) {
  const r = this, i = r.events[r.events.length - 1];
  let o = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0, a = 0;
  return l;
  function l(p) {
    const m = r.containerState.type || (p === 42 || p === 43 || p === 45 ? "listUnordered" : "listOrdered");
    if (m === "listUnordered" ? !r.containerState.marker || p === r.containerState.marker : tr(p)) {
      if (r.containerState.type || (r.containerState.type = m, e.enter(m, {
        _container: !0
      })), m === "listUnordered")
        return e.enter("listItemPrefix"), p === 42 || p === 45 ? e.check(nn, n, s)(p) : s(p);
      if (!r.interrupt || p === 49)
        return e.enter("listItemPrefix"), e.enter("listItemValue"), u(p);
    }
    return n(p);
  }
  function u(p) {
    return tr(p) && ++a < 10 ? (e.consume(p), u) : (!r.interrupt || a < 2) && (r.containerState.marker ? p === r.containerState.marker : p === 41 || p === 46) ? (e.exit("listItemValue"), s(p)) : n(p);
  }
  function s(p) {
    return e.enter("listItemMarker"), e.consume(p), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || p, e.check(
      zt,
      // Can’t be empty when interrupting.
      r.interrupt ? n : f,
      e.attempt(
        Us,
        d,
        c
      )
    );
  }
  function f(p) {
    return r.containerState.initialBlankLine = !0, o++, d(p);
  }
  function c(p) {
    return ae(p) ? (e.enter("listItemPrefixWhitespace"), e.consume(p), e.exit("listItemPrefixWhitespace"), d) : n(p);
  }
  function d(p) {
    return r.containerState.size = o + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(p);
  }
}
function Vs(e, t, n) {
  const r = this;
  return r.containerState._closeFlow = void 0, e.check(zt, i, o);
  function i(l) {
    return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, ce(
      e,
      t,
      "listItemIndent",
      r.containerState.size + 1
    )(l);
  }
  function o(l) {
    return r.containerState.furtherBlankLines || !ae(l) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, a(l)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(qs, t, a)(l));
  }
  function a(l) {
    return r.containerState._closeFlow = !0, r.interrupt = void 0, ce(
      e,
      e.attempt(Le, t, n),
      "linePrefix",
      r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
    )(l);
  }
}
function Ws(e, t, n) {
  const r = this;
  return ce(
    e,
    i,
    "listItemIndent",
    r.containerState.size + 1
  );
  function i(o) {
    const a = r.events[r.events.length - 1];
    return a && a[1].type === "listItemIndent" && a[2].sliceSerialize(a[1], !0).length === r.containerState.size ? t(o) : n(o);
  }
}
function Ys(e) {
  e.exit(this.containerState.type);
}
function Js(e, t, n) {
  const r = this;
  return ce(
    e,
    i,
    "listItemPrefixWhitespace",
    r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5
  );
  function i(o) {
    const a = r.events[r.events.length - 1];
    return !ae(o) && a && a[1].type === "listItemPrefixWhitespace" ? t(o) : n(o);
  }
}
const ii = {
  name: "setextUnderline",
  tokenize: Xs,
  resolveTo: Ks
};
function Ks(e, t) {
  let n = e.length, r, i, o;
  for (; n--; )
    if (e[n][0] === "enter") {
      if (e[n][1].type === "content") {
        r = n;
        break;
      }
      e[n][1].type === "paragraph" && (i = n);
    } else
      e[n][1].type === "content" && e.splice(n, 1), !o && e[n][1].type === "definition" && (o = n);
  const a = {
    type: "setextHeading",
    start: Object.assign({}, e[i][1].start),
    end: Object.assign({}, e[e.length - 1][1].end)
  };
  return e[i][1].type = "setextHeadingText", o ? (e.splice(i, 0, ["enter", a, t]), e.splice(o + 1, 0, ["exit", e[r][1], t]), e[r][1].end = Object.assign({}, e[o][1].end)) : e[r][1] = a, e.push(["exit", a, t]), e;
}
function Xs(e, t, n) {
  const r = this;
  let i;
  return o;
  function o(s) {
    let f = r.events.length, c;
    for (; f--; )
      if (r.events[f][1].type !== "lineEnding" && r.events[f][1].type !== "linePrefix" && r.events[f][1].type !== "content") {
        c = r.events[f][1].type === "paragraph";
        break;
      }
    return !r.parser.lazy[r.now().line] && (r.interrupt || c) ? (e.enter("setextHeadingLine"), i = s, a(s)) : n(s);
  }
  function a(s) {
    return e.enter("setextHeadingLineSequence"), l(s);
  }
  function l(s) {
    return s === i ? (e.consume(s), l) : (e.exit("setextHeadingLineSequence"), ae(s) ? ce(e, u, "lineSuffix")(s) : u(s));
  }
  function u(s) {
    return s === null || J(s) ? (e.exit("setextHeadingLine"), t(s)) : n(s);
  }
}
const Gs = {
  tokenize: Qs
};
function Qs(e) {
  const t = this, n = e.attempt(
    // Try to parse a blank line.
    zt,
    r,
    // Try to parse initial flow (essentially, only code).
    e.attempt(
      this.parser.constructs.flowInitial,
      i,
      ce(
        e,
        e.attempt(
          this.parser.constructs.flow,
          i,
          e.attempt(rs, i)
        ),
        "linePrefix"
      )
    )
  );
  return n;
  function r(o) {
    if (o === null) {
      e.consume(o);
      return;
    }
    return e.enter("lineEndingBlank"), e.consume(o), e.exit("lineEndingBlank"), t.currentConstruct = void 0, n;
  }
  function i(o) {
    if (o === null) {
      e.consume(o);
      return;
    }
    return e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), t.currentConstruct = void 0, n;
  }
}
const Zs = {
  resolveAll: vo()
}, eu = ko("string"), tu = ko("text");
function ko(e) {
  return {
    tokenize: t,
    resolveAll: vo(
      e === "text" ? nu : void 0
    )
  };
  function t(n) {
    const r = this, i = this.parser.constructs[e], o = n.attempt(i, a, l);
    return a;
    function a(f) {
      return s(f) ? o(f) : l(f);
    }
    function l(f) {
      if (f === null) {
        n.consume(f);
        return;
      }
      return n.enter("data"), n.consume(f), u;
    }
    function u(f) {
      return s(f) ? (n.exit("data"), o(f)) : (n.consume(f), u);
    }
    function s(f) {
      if (f === null)
        return !0;
      const c = i[f];
      let d = -1;
      if (c)
        for (; ++d < c.length; ) {
          const p = c[d];
          if (!p.previous || p.previous.call(r, r.previous))
            return !0;
        }
      return !1;
    }
  }
}
function vo(e) {
  return t;
  function t(n, r) {
    let i = -1, o;
    for (; ++i <= n.length; )
      o === void 0 ? n[i] && n[i][1].type === "data" && (o = i, i++) : (!n[i] || n[i][1].type !== "data") && (i !== o + 2 && (n[o][1].end = n[i - 1][1].end, n.splice(o + 2, i - o - 2), i = o + 2), o = void 0);
    return e ? e(n, r) : n;
  }
}
function nu(e, t) {
  let n = 0;
  for (; ++n <= e.length; )
    if ((n === e.length || e[n][1].type === "lineEnding") && e[n - 1][1].type === "data") {
      const r = e[n - 1][1], i = t.sliceStream(r);
      let o = i.length, a = -1, l = 0, u;
      for (; o--; ) {
        const s = i[o];
        if (typeof s == "string") {
          for (a = s.length; s.charCodeAt(a - 1) === 32; )
            l++, a--;
          if (a) break;
          a = -1;
        } else if (s === -2)
          u = !0, l++;
        else if (s !== -1) {
          o++;
          break;
        }
      }
      if (l) {
        const s = {
          type: n === e.length || u || l < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            line: r.end.line,
            column: r.end.column - l,
            offset: r.end.offset - l,
            _index: r.start._index + o,
            _bufferIndex: o ? a : r.start._bufferIndex + a
          },
          end: Object.assign({}, r.end)
        };
        r.end = Object.assign({}, s.start), r.start.offset === r.end.offset ? Object.assign(r, s) : (e.splice(
          n,
          0,
          ["enter", s, t],
          ["exit", s, t]
        ), n += 2);
      }
      n++;
    }
  return e;
}
function ru(e, t, n) {
  let r = Object.assign(
    n ? Object.assign({}, n) : {
      line: 1,
      column: 1,
      offset: 0
    },
    {
      _index: 0,
      _bufferIndex: -1
    }
  );
  const i = {}, o = [];
  let a = [], l = [];
  const u = {
    consume: T,
    enter: E,
    exit: _,
    attempt: R(v),
    check: R(k),
    interrupt: R(k, {
      interrupt: !0
    })
  }, s = {
    previous: null,
    code: null,
    containerState: {},
    events: [],
    parser: e,
    sliceStream: p,
    sliceSerialize: d,
    now: m,
    defineSkip: g,
    write: c
  };
  let f = t.tokenize.call(s, u);
  return t.resolveAll && o.push(t), s;
  function c(O) {
    return a = We(a, O), y(), a[a.length - 1] !== null ? [] : (B(t, 0), s.events = pn(o, s.events, s), s.events);
  }
  function d(O, z) {
    return ou(p(O), z);
  }
  function p(O) {
    return iu(a, O);
  }
  function m() {
    const { line: O, column: z, offset: N, _index: L, _bufferIndex: U } = r;
    return {
      line: O,
      column: z,
      offset: N,
      _index: L,
      _bufferIndex: U
    };
  }
  function g(O) {
    i[O.line] = O.column, S();
  }
  function y() {
    let O;
    for (; r._index < a.length; ) {
      const z = a[r._index];
      if (typeof z == "string")
        for (O = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === O && r._bufferIndex < z.length; )
          x(z.charCodeAt(r._bufferIndex));
      else
        x(z);
    }
  }
  function x(O) {
    f = f(O);
  }
  function T(O) {
    J(O) ? (r.line++, r.column = 1, r.offset += O === -3 ? 2 : 1, S()) : O !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === a[r._index].length && (r._bufferIndex = -1, r._index++)), s.previous = O;
  }
  function E(O, z) {
    const N = z || {};
    return N.type = O, N.start = m(), s.events.push(["enter", N, s]), l.push(N), N;
  }
  function _(O) {
    const z = l.pop();
    return z.end = m(), s.events.push(["exit", z, s]), z;
  }
  function v(O, z) {
    B(O, z.from);
  }
  function k(O, z) {
    z.restore();
  }
  function R(O, z) {
    return N;
    function N(L, U, Q) {
      let se, fe, Se, h;
      return Array.isArray(L) ? Y(L) : "tokenize" in L ? (
        // @ts-expect-error Looks like a construct.
        Y([L])
      ) : D(L);
      function D(V) {
        return X;
        function X(G) {
          const re = G !== null && V[G], ee = G !== null && V.null, Ee = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(re) ? re : re ? [re] : [],
            ...Array.isArray(ee) ? ee : ee ? [ee] : []
          ];
          return Y(Ee)(G);
        }
      }
      function Y(V) {
        return se = V, fe = 0, V.length === 0 ? Q : b(V[fe]);
      }
      function b(V) {
        return X;
        function X(G) {
          return h = q(), Se = V, V.partial || (s.currentConstruct = V), V.name && s.parser.constructs.disable.null.includes(V.name) ? Z() : V.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            z ? Object.assign(Object.create(s), z) : s,
            u,
            H,
            Z
          )(G);
        }
      }
      function H(V) {
        return O(Se, h), U;
      }
      function Z(V) {
        return h.restore(), ++fe < se.length ? b(se[fe]) : Q;
      }
    }
  }
  function B(O, z) {
    O.resolveAll && !o.includes(O) && o.push(O), O.resolve && qe(
      s.events,
      z,
      s.events.length - z,
      O.resolve(s.events.slice(z), s)
    ), O.resolveTo && (s.events = O.resolveTo(s.events, s));
  }
  function q() {
    const O = m(), z = s.previous, N = s.currentConstruct, L = s.events.length, U = Array.from(l);
    return {
      restore: Q,
      from: L
    };
    function Q() {
      r = O, s.previous = z, s.currentConstruct = N, s.events.length = L, l = U, S();
    }
  }
  function S() {
    r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1);
  }
}
function iu(e, t) {
  const n = t.start._index, r = t.start._bufferIndex, i = t.end._index, o = t.end._bufferIndex;
  let a;
  if (n === i)
    a = [e[n].slice(r, o)];
  else {
    if (a = e.slice(n, i), r > -1) {
      const l = a[0];
      typeof l == "string" ? a[0] = l.slice(r) : a.shift();
    }
    o > 0 && a.push(e[i].slice(0, o));
  }
  return a;
}
function ou(e, t) {
  let n = -1;
  const r = [];
  let i;
  for (; ++n < e.length; ) {
    const o = e[n];
    let a;
    if (typeof o == "string")
      a = o;
    else
      switch (o) {
        case -5: {
          a = "\r";
          break;
        }
        case -4: {
          a = `
`;
          break;
        }
        case -3: {
          a = `\r
`;
          break;
        }
        case -2: {
          a = t ? " " : "	";
          break;
        }
        case -1: {
          if (!t && i) continue;
          a = " ";
          break;
        }
        default:
          a = String.fromCharCode(o);
      }
    i = o === -2, r.push(a);
  }
  return r.join("");
}
const au = {
  42: Le,
  43: Le,
  45: Le,
  48: Le,
  49: Le,
  50: Le,
  51: Le,
  52: Le,
  53: Le,
  54: Le,
  55: Le,
  56: Le,
  57: Le,
  62: ho
}, lu = {
  91: ss
}, su = {
  [-2]: In,
  [-1]: In,
  32: In
}, uu = {
  35: ds,
  42: nn,
  45: [ii, nn],
  60: bs,
  61: ii,
  95: nn,
  96: ni,
  126: ni
}, cu = {
  38: go,
  92: mo
}, fu = {
  [-5]: Dn,
  [-4]: Dn,
  [-3]: Dn,
  33: js,
  38: go,
  42: nr,
  60: [Ml, Cs],
  91: Ns,
  92: [ps, mo],
  93: gr,
  95: nr,
  96: Ql
}, pu = {
  null: [nr, Zs]
}, hu = {
  null: [42, 95]
}, du = {
  null: []
}, mu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  attentionMarkers: hu,
  contentInitial: lu,
  disable: du,
  document: au,
  flow: uu,
  flowInitial: su,
  insideSpan: pu,
  string: cu,
  text: fu
}, Symbol.toStringTag, { value: "Module" }));
function gu(e) {
  const n = (
    /** @type {FullNormalizedExtension} */
    po([mu, ...(e || {}).extensions || []])
  ), r = {
    defined: [],
    lazy: {},
    constructs: n,
    content: i(Fl),
    document: i(Dl),
    flow: i(Gs),
    string: i(eu),
    text: i(tu)
  };
  return r;
  function i(o) {
    return a;
    function a(l) {
      return ru(r, o, l);
    }
  }
}
const oi = /[\0\t\n\r]/g;
function yu() {
  let e = 1, t = "", n = !0, r;
  return i;
  function i(o, a, l) {
    const u = [];
    let s, f, c, d, p;
    for (o = t + o.toString(a), c = 0, t = "", n && (o.charCodeAt(0) === 65279 && c++, n = void 0); c < o.length; ) {
      if (oi.lastIndex = c, s = oi.exec(o), d = s && s.index !== void 0 ? s.index : o.length, p = o.charCodeAt(d), !s) {
        t = o.slice(c);
        break;
      }
      if (p === 10 && c === d && r)
        u.push(-3), r = void 0;
      else
        switch (r && (u.push(-5), r = void 0), c < d && (u.push(o.slice(c, d)), e += d - c), p) {
          case 0: {
            u.push(65533), e++;
            break;
          }
          case 9: {
            for (f = Math.ceil(e / 4) * 4, u.push(-2); e++ < f; ) u.push(-1);
            break;
          }
          case 10: {
            u.push(-4), e = 1;
            break;
          }
          default:
            r = !0, e = 1;
        }
      c = d + 1;
    }
    return l && (r && u.push(-5), t && u.push(t), u.push(null)), u;
  }
}
function bu(e) {
  for (; !yo(e); )
    ;
  return e;
}
function So(e, t) {
  const n = Number.parseInt(e, t);
  return (
    // C0 except for HT, LF, FF, CR, space.
    n < 9 || n === 11 || n > 13 && n < 32 || // Control character (DEL) of C0, and C1 controls.
    n > 126 && n < 160 || // Lone high surrogates and low surrogates.
    n > 55295 && n < 57344 || // Noncharacters.
    n > 64975 && n < 65008 || (n & 65535) === 65535 || (n & 65535) === 65534 || // Out of range
    n > 1114111 ? "�" : String.fromCharCode(n)
  );
}
const wu = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function Eo(e) {
  return e.replace(wu, xu);
}
function xu(e, t, n) {
  if (t)
    return t;
  if (n.charCodeAt(0) === 35) {
    const i = n.charCodeAt(1), o = i === 120 || i === 88;
    return So(n.slice(o ? 2 : 1), o ? 16 : 10);
  }
  return mr(n) || e;
}
const Co = {}.hasOwnProperty, ku = (
  /**
   * @type {(
   *   ((value: Value, encoding: Encoding, options?: Options | null | undefined) => Root) &
   *   ((value: Value, options?: Options | null | undefined) => Root)
   * )}
   */
  /**
   * @param {Value} value
   * @param {Encoding | Options | null | undefined} [encoding]
   * @param {Options | null | undefined} [options]
   * @returns {Root}
   */
  function(e, t, n) {
    return typeof t != "string" && (n = t, t = void 0), vu(n)(
      bu(
        gu(n).document().write(yu()(e, t, !0))
      )
    );
  }
);
function vu(e) {
  const t = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: l(qt),
      autolinkProtocol: O,
      autolinkEmail: O,
      atxHeading: l(Be),
      blockQuote: l(Ee),
      characterEscape: O,
      characterReference: O,
      codeFenced: l(M),
      codeFencedFenceInfo: u,
      codeFencedFenceMeta: u,
      codeIndented: l(M, u),
      codeText: l(Oe, u),
      codeTextData: O,
      data: O,
      codeFlowValue: O,
      definition: l(W),
      definitionDestinationString: u,
      definitionLabelString: u,
      definitionTitleString: u,
      emphasis: l(Me),
      hardBreakEscape: l(it),
      hardBreakTrailing: l(it),
      htmlFlow: l(At, u),
      htmlFlowData: O,
      htmlText: l(At, u),
      htmlTextData: O,
      image: l(yt),
      label: u,
      link: l(qt),
      listItem: l(Rt),
      listItemValue: m,
      listOrdered: l(Ht, p),
      listUnordered: l(Ht),
      paragraph: l(xn),
      reference: Z,
      referenceString: u,
      resourceDestinationString: u,
      resourceTitleString: u,
      setextHeading: l(Be),
      strong: l(kn),
      thematicBreak: l(Wt)
    },
    exit: {
      atxHeading: f(),
      atxHeadingSequence: R,
      autolink: f(),
      autolinkEmail: ee,
      autolinkProtocol: re,
      blockQuote: f(),
      characterEscapeValue: z,
      characterReferenceMarkerHexadecimal: X,
      characterReferenceMarkerNumeric: X,
      characterReferenceValue: G,
      codeFenced: f(T),
      codeFencedFence: x,
      codeFencedFenceInfo: g,
      codeFencedFenceMeta: y,
      codeFlowValue: z,
      codeIndented: f(E),
      codeText: f(se),
      codeTextData: z,
      data: z,
      definition: f(),
      definitionDestinationString: k,
      definitionLabelString: _,
      definitionTitleString: v,
      emphasis: f(),
      hardBreakEscape: f(L),
      hardBreakTrailing: f(L),
      htmlFlow: f(U),
      htmlFlowData: z,
      htmlText: f(Q),
      htmlTextData: z,
      image: f(Se),
      label: D,
      labelText: h,
      lineEnding: N,
      link: f(fe),
      listItem: f(),
      listOrdered: f(),
      listUnordered: f(),
      paragraph: f(),
      referenceString: V,
      resourceDestinationString: Y,
      resourceTitleString: b,
      resource: H,
      setextHeading: f(S),
      setextHeadingLineSequence: q,
      setextHeadingText: B,
      strong: f(),
      thematicBreak: f()
    }
  };
  To(t, (e || {}).mdastExtensions || []);
  const n = {};
  return r;
  function r(A) {
    let j = {
      type: "root",
      children: []
    };
    const K = {
      stack: [j],
      tokenStack: [],
      config: t,
      enter: s,
      exit: c,
      buffer: u,
      resume: d,
      setData: o,
      getData: a
    }, pe = [];
    let be = -1;
    for (; ++be < A.length; )
      if (A[be][1].type === "listOrdered" || A[be][1].type === "listUnordered")
        if (A[be][0] === "enter")
          pe.push(be);
        else {
          const $e = pe.pop();
          be = i(A, $e, be);
        }
    for (be = -1; ++be < A.length; ) {
      const $e = t[A[be][0]];
      Co.call($e, A[be][1].type) && $e[A[be][1].type].call(
        Object.assign(
          {
            sliceSerialize: A[be][2].sliceSerialize
          },
          K
        ),
        A[be][1]
      );
    }
    if (K.tokenStack.length > 0) {
      const $e = K.tokenStack[K.tokenStack.length - 1];
      ($e[1] || ai).call(K, void 0, $e[0]);
    }
    for (j.position = {
      start: ot(
        A.length > 0 ? A[0][1].start : {
          line: 1,
          column: 1,
          offset: 0
        }
      ),
      end: ot(
        A.length > 0 ? A[A.length - 2][1].end : {
          line: 1,
          column: 1,
          offset: 0
        }
      )
    }, be = -1; ++be < t.transforms.length; )
      j = t.transforms[be](j) || j;
    return j;
  }
  function i(A, j, K) {
    let pe = j - 1, be = -1, $e = !1, Qe, Ke, lt, st;
    for (; ++pe <= K; ) {
      const ve = A[pe];
      if (ve[1].type === "listUnordered" || ve[1].type === "listOrdered" || ve[1].type === "blockQuote" ? (ve[0] === "enter" ? be++ : be--, st = void 0) : ve[1].type === "lineEndingBlank" ? ve[0] === "enter" && (Qe && !st && !be && !lt && (lt = pe), st = void 0) : ve[1].type === "linePrefix" || ve[1].type === "listItemValue" || ve[1].type === "listItemMarker" || ve[1].type === "listItemPrefix" || ve[1].type === "listItemPrefixWhitespace" || (st = void 0), !be && ve[0] === "enter" && ve[1].type === "listItemPrefix" || be === -1 && ve[0] === "exit" && (ve[1].type === "listUnordered" || ve[1].type === "listOrdered")) {
        if (Qe) {
          let ut = pe;
          for (Ke = void 0; ut--; ) {
            const He = A[ut];
            if (He[1].type === "lineEnding" || He[1].type === "lineEndingBlank") {
              if (He[0] === "exit") continue;
              Ke && (A[Ke][1].type = "lineEndingBlank", $e = !0), He[1].type = "lineEnding", Ke = ut;
            } else if (!(He[1].type === "linePrefix" || He[1].type === "blockQuotePrefix" || He[1].type === "blockQuotePrefixWhitespace" || He[1].type === "blockQuoteMarker" || He[1].type === "listItemIndent")) break;
          }
          lt && (!Ke || lt < Ke) && (Qe._spread = !0), Qe.end = Object.assign(
            {},
            Ke ? A[Ke][1].start : ve[1].end
          ), A.splice(Ke || pe, 0, ["exit", Qe, ve[2]]), pe++, K++;
        }
        ve[1].type === "listItemPrefix" && (Qe = {
          type: "listItem",
          _spread: !1,
          start: Object.assign({}, ve[1].start),
          // @ts-expect-error: we’ll add `end` in a second.
          end: void 0
        }, A.splice(pe, 0, ["enter", Qe, ve[2]]), pe++, K++, lt = void 0, st = !0);
      }
    }
    return A[j][1]._spread = $e, K;
  }
  function o(A, j) {
    n[A] = j;
  }
  function a(A) {
    return n[A];
  }
  function l(A, j) {
    return K;
    function K(pe) {
      s.call(this, A(pe), pe), j && j.call(this, pe);
    }
  }
  function u() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function s(A, j, K) {
    return this.stack[this.stack.length - 1].children.push(A), this.stack.push(A), this.tokenStack.push([j, K]), A.position = {
      start: ot(j.start)
    }, A;
  }
  function f(A) {
    return j;
    function j(K) {
      A && A.call(this, K), c.call(this, K);
    }
  }
  function c(A, j) {
    const K = this.stack.pop(), pe = this.tokenStack.pop();
    if (pe)
      pe[0].type !== A.type && (j ? j.call(this, A, pe[0]) : (pe[1] || ai).call(this, A, pe[0]));
    else throw new Error(
      "Cannot close `" + A.type + "` (" + It({
        start: A.start,
        end: A.end
      }) + "): it’s not open"
    );
    return K.position.end = ot(A.end), K;
  }
  function d() {
    return El(this.stack.pop());
  }
  function p() {
    o("expectingFirstListItemValue", !0);
  }
  function m(A) {
    if (a("expectingFirstListItemValue")) {
      const j = this.stack[this.stack.length - 2];
      j.start = Number.parseInt(this.sliceSerialize(A), 10), o("expectingFirstListItemValue");
    }
  }
  function g() {
    const A = this.resume(), j = this.stack[this.stack.length - 1];
    j.lang = A;
  }
  function y() {
    const A = this.resume(), j = this.stack[this.stack.length - 1];
    j.meta = A;
  }
  function x() {
    a("flowCodeInside") || (this.buffer(), o("flowCodeInside", !0));
  }
  function T() {
    const A = this.resume(), j = this.stack[this.stack.length - 1];
    j.value = A.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), o("flowCodeInside");
  }
  function E() {
    const A = this.resume(), j = this.stack[this.stack.length - 1];
    j.value = A.replace(/(\r?\n|\r)$/g, "");
  }
  function _(A) {
    const j = this.resume(), K = this.stack[this.stack.length - 1];
    K.label = j, K.identifier = Xe(
      this.sliceSerialize(A)
    ).toLowerCase();
  }
  function v() {
    const A = this.resume(), j = this.stack[this.stack.length - 1];
    j.title = A;
  }
  function k() {
    const A = this.resume(), j = this.stack[this.stack.length - 1];
    j.url = A;
  }
  function R(A) {
    const j = this.stack[this.stack.length - 1];
    if (!j.depth) {
      const K = this.sliceSerialize(A).length;
      j.depth = K;
    }
  }
  function B() {
    o("setextHeadingSlurpLineEnding", !0);
  }
  function q(A) {
    const j = this.stack[this.stack.length - 1];
    j.depth = this.sliceSerialize(A).charCodeAt(0) === 61 ? 1 : 2;
  }
  function S() {
    o("setextHeadingSlurpLineEnding");
  }
  function O(A) {
    const j = this.stack[this.stack.length - 1];
    let K = j.children[j.children.length - 1];
    (!K || K.type !== "text") && (K = Vt(), K.position = {
      start: ot(A.start)
    }, j.children.push(K)), this.stack.push(K);
  }
  function z(A) {
    const j = this.stack.pop();
    j.value += this.sliceSerialize(A), j.position.end = ot(A.end);
  }
  function N(A) {
    const j = this.stack[this.stack.length - 1];
    if (a("atHardBreak")) {
      const K = j.children[j.children.length - 1];
      K.position.end = ot(A.end), o("atHardBreak");
      return;
    }
    !a("setextHeadingSlurpLineEnding") && t.canContainEols.includes(j.type) && (O.call(this, A), z.call(this, A));
  }
  function L() {
    o("atHardBreak", !0);
  }
  function U() {
    const A = this.resume(), j = this.stack[this.stack.length - 1];
    j.value = A;
  }
  function Q() {
    const A = this.resume(), j = this.stack[this.stack.length - 1];
    j.value = A;
  }
  function se() {
    const A = this.resume(), j = this.stack[this.stack.length - 1];
    j.value = A;
  }
  function fe() {
    const A = this.stack[this.stack.length - 1];
    if (a("inReference")) {
      const j = a("referenceType") || "shortcut";
      A.type += "Reference", A.referenceType = j, delete A.url, delete A.title;
    } else
      delete A.identifier, delete A.label;
    o("referenceType");
  }
  function Se() {
    const A = this.stack[this.stack.length - 1];
    if (a("inReference")) {
      const j = a("referenceType") || "shortcut";
      A.type += "Reference", A.referenceType = j, delete A.url, delete A.title;
    } else
      delete A.identifier, delete A.label;
    o("referenceType");
  }
  function h(A) {
    const j = this.sliceSerialize(A), K = this.stack[this.stack.length - 2];
    K.label = Eo(j), K.identifier = Xe(j).toLowerCase();
  }
  function D() {
    const A = this.stack[this.stack.length - 1], j = this.resume(), K = this.stack[this.stack.length - 1];
    if (o("inReference", !0), K.type === "link") {
      const pe = A.children;
      K.children = pe;
    } else
      K.alt = j;
  }
  function Y() {
    const A = this.resume(), j = this.stack[this.stack.length - 1];
    j.url = A;
  }
  function b() {
    const A = this.resume(), j = this.stack[this.stack.length - 1];
    j.title = A;
  }
  function H() {
    o("inReference");
  }
  function Z() {
    o("referenceType", "collapsed");
  }
  function V(A) {
    const j = this.resume(), K = this.stack[this.stack.length - 1];
    K.label = j, K.identifier = Xe(
      this.sliceSerialize(A)
    ).toLowerCase(), o("referenceType", "full");
  }
  function X(A) {
    o("characterReferenceType", A.type);
  }
  function G(A) {
    const j = this.sliceSerialize(A), K = a("characterReferenceType");
    let pe;
    K ? (pe = So(
      j,
      K === "characterReferenceMarkerNumeric" ? 10 : 16
    ), o("characterReferenceType")) : pe = mr(j);
    const be = this.stack.pop();
    be.value += pe, be.position.end = ot(A.end);
  }
  function re(A) {
    z.call(this, A);
    const j = this.stack[this.stack.length - 1];
    j.url = this.sliceSerialize(A);
  }
  function ee(A) {
    z.call(this, A);
    const j = this.stack[this.stack.length - 1];
    j.url = "mailto:" + this.sliceSerialize(A);
  }
  function Ee() {
    return {
      type: "blockquote",
      children: []
    };
  }
  function M() {
    return {
      type: "code",
      lang: null,
      meta: null,
      value: ""
    };
  }
  function Oe() {
    return {
      type: "inlineCode",
      value: ""
    };
  }
  function W() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: ""
    };
  }
  function Me() {
    return {
      type: "emphasis",
      children: []
    };
  }
  function Be() {
    return {
      type: "heading",
      depth: void 0,
      children: []
    };
  }
  function it() {
    return {
      type: "break"
    };
  }
  function At() {
    return {
      type: "html",
      value: ""
    };
  }
  function yt() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null
    };
  }
  function qt() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function Ht(A) {
    return {
      type: "list",
      ordered: A.type === "listOrdered",
      start: null,
      spread: A._spread,
      children: []
    };
  }
  function Rt(A) {
    return {
      type: "listItem",
      spread: A._spread,
      checked: null,
      children: []
    };
  }
  function xn() {
    return {
      type: "paragraph",
      children: []
    };
  }
  function kn() {
    return {
      type: "strong",
      children: []
    };
  }
  function Vt() {
    return {
      type: "text",
      value: ""
    };
  }
  function Wt() {
    return {
      type: "thematicBreak"
    };
  }
}
function ot(e) {
  return {
    line: e.line,
    column: e.column,
    offset: e.offset
  };
}
function To(e, t) {
  let n = -1;
  for (; ++n < t.length; ) {
    const r = t[n];
    Array.isArray(r) ? To(e, r) : Su(e, r);
  }
}
function Su(e, t) {
  let n;
  for (n in t)
    if (Co.call(t, n)) {
      if (n === "canContainEols") {
        const r = t[n];
        r && e[n].push(...r);
      } else if (n === "transforms") {
        const r = t[n];
        r && e[n].push(...r);
      } else if (n === "enter" || n === "exit") {
        const r = t[n];
        r && Object.assign(e[n], r);
      }
    }
}
function ai(e, t) {
  throw e ? new Error(
    "Cannot close `" + e.type + "` (" + It({
      start: e.start,
      end: e.end
    }) + "): a different token (`" + t.type + "`, " + It({
      start: t.start,
      end: t.end
    }) + ") is open"
  ) : new Error(
    "Cannot close document, a token (`" + t.type + "`, " + It({
      start: t.start,
      end: t.end
    }) + ") is still open"
  );
}
function Eu(e) {
  Object.assign(this, { Parser: (n) => {
    const r = (
      /** @type {Options} */
      this.data("settings")
    );
    return ku(
      n,
      Object.assign({}, r, e, {
        // Note: these options are not in the readme.
        // The goal is for them to be set by plugins on `data` instead of being
        // passed by users.
        extensions: this.data("micromarkExtensions") || [],
        mdastExtensions: this.data("fromMarkdownExtensions") || []
      })
    );
  } });
}
function Cu(e, t) {
  const n = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: e.wrap(e.all(t), !0)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Tu(e, t) {
  const n = { type: "element", tagName: "br", properties: {}, children: [] };
  return e.patch(t, n), [e.applyData(t, n), { type: "text", value: `
` }];
}
function Au(e, t) {
  const n = t.value ? t.value + `
` : "", r = t.lang ? t.lang.match(/^[^ \t]+(?=[ \t]|$)/) : null, i = {};
  r && (i.className = ["language-" + r]);
  let o = {
    type: "element",
    tagName: "code",
    properties: i,
    children: [{ type: "text", value: n }]
  };
  return t.meta && (o.data = { meta: t.meta }), e.patch(t, o), o = e.applyData(t, o), o = { type: "element", tagName: "pre", properties: {}, children: [o] }, e.patch(t, o), o;
}
function Ru(e, t) {
  const n = {
    type: "element",
    tagName: "del",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Ou(e, t) {
  const n = {
    type: "element",
    tagName: "em",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function St(e) {
  const t = [];
  let n = -1, r = 0, i = 0;
  for (; ++n < e.length; ) {
    const o = e.charCodeAt(n);
    let a = "";
    if (o === 37 && _e(e.charCodeAt(n + 1)) && _e(e.charCodeAt(n + 2)))
      i = 2;
    else if (o < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o)) || (a = String.fromCharCode(o));
    else if (o > 55295 && o < 57344) {
      const l = e.charCodeAt(n + 1);
      o < 56320 && l > 56319 && l < 57344 ? (a = String.fromCharCode(o, l), i = 1) : a = "�";
    } else
      a = String.fromCharCode(o);
    a && (t.push(e.slice(r, n), encodeURIComponent(a)), r = n + i + 1, a = ""), i && (n += i, i = 0);
  }
  return t.join("") + e.slice(r);
}
function Ao(e, t) {
  const n = String(t.identifier).toUpperCase(), r = St(n.toLowerCase()), i = e.footnoteOrder.indexOf(n);
  let o;
  i === -1 ? (e.footnoteOrder.push(n), e.footnoteCounts[n] = 1, o = e.footnoteOrder.length) : (e.footnoteCounts[n]++, o = i + 1);
  const a = e.footnoteCounts[n], l = {
    type: "element",
    tagName: "a",
    properties: {
      href: "#" + e.clobberPrefix + "fn-" + r,
      id: e.clobberPrefix + "fnref-" + r + (a > 1 ? "-" + a : ""),
      dataFootnoteRef: !0,
      ariaDescribedBy: ["footnote-label"]
    },
    children: [{ type: "text", value: String(o) }]
  };
  e.patch(t, l);
  const u = {
    type: "element",
    tagName: "sup",
    properties: {},
    children: [l]
  };
  return e.patch(t, u), e.applyData(t, u);
}
function Pu(e, t) {
  const n = e.footnoteById;
  let r = 1;
  for (; r in n; ) r++;
  const i = String(r);
  return n[i] = {
    type: "footnoteDefinition",
    identifier: i,
    children: [{ type: "paragraph", children: t.children }],
    position: t.position
  }, Ao(e, {
    type: "footnoteReference",
    identifier: i,
    position: t.position
  });
}
function _u(e, t) {
  const n = {
    type: "element",
    tagName: "h" + t.depth,
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Fu(e, t) {
  if (e.dangerous) {
    const n = { type: "raw", value: t.value };
    return e.patch(t, n), e.applyData(t, n);
  }
  return null;
}
function Ro(e, t) {
  const n = t.referenceType;
  let r = "]";
  if (n === "collapsed" ? r += "[]" : n === "full" && (r += "[" + (t.label || t.identifier) + "]"), t.type === "imageReference")
    return { type: "text", value: "![" + t.alt + r };
  const i = e.all(t), o = i[0];
  o && o.type === "text" ? o.value = "[" + o.value : i.unshift({ type: "text", value: "[" });
  const a = i[i.length - 1];
  return a && a.type === "text" ? a.value += r : i.push({ type: "text", value: r }), i;
}
function Iu(e, t) {
  const n = e.definition(t.identifier);
  if (!n)
    return Ro(e, t);
  const r = { src: St(n.url || ""), alt: t.alt };
  n.title !== null && n.title !== void 0 && (r.title = n.title);
  const i = { type: "element", tagName: "img", properties: r, children: [] };
  return e.patch(t, i), e.applyData(t, i);
}
function Du(e, t) {
  const n = { src: St(t.url) };
  t.alt !== null && t.alt !== void 0 && (n.alt = t.alt), t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = { type: "element", tagName: "img", properties: n, children: [] };
  return e.patch(t, r), e.applyData(t, r);
}
function Lu(e, t) {
  const n = { type: "text", value: t.value.replace(/\r?\n|\r/g, " ") };
  e.patch(t, n);
  const r = {
    type: "element",
    tagName: "code",
    properties: {},
    children: [n]
  };
  return e.patch(t, r), e.applyData(t, r);
}
function ju(e, t) {
  const n = e.definition(t.identifier);
  if (!n)
    return Ro(e, t);
  const r = { href: St(n.url || "") };
  n.title !== null && n.title !== void 0 && (r.title = n.title);
  const i = {
    type: "element",
    tagName: "a",
    properties: r,
    children: e.all(t)
  };
  return e.patch(t, i), e.applyData(t, i);
}
function zu(e, t) {
  const n = { href: St(t.url) };
  t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = {
    type: "element",
    tagName: "a",
    properties: n,
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function Nu(e, t, n) {
  const r = e.all(t), i = n ? Mu(n) : Oo(t), o = {}, a = [];
  if (typeof t.checked == "boolean") {
    const f = r[0];
    let c;
    f && f.type === "element" && f.tagName === "p" ? c = f : (c = { type: "element", tagName: "p", properties: {}, children: [] }, r.unshift(c)), c.children.length > 0 && c.children.unshift({ type: "text", value: " " }), c.children.unshift({
      type: "element",
      tagName: "input",
      properties: { type: "checkbox", checked: t.checked, disabled: !0 },
      children: []
    }), o.className = ["task-list-item"];
  }
  let l = -1;
  for (; ++l < r.length; ) {
    const f = r[l];
    (i || l !== 0 || f.type !== "element" || f.tagName !== "p") && a.push({ type: "text", value: `
` }), f.type === "element" && f.tagName === "p" && !i ? a.push(...f.children) : a.push(f);
  }
  const u = r[r.length - 1];
  u && (i || u.type !== "element" || u.tagName !== "p") && a.push({ type: "text", value: `
` });
  const s = { type: "element", tagName: "li", properties: o, children: a };
  return e.patch(t, s), e.applyData(t, s);
}
function Mu(e) {
  let t = !1;
  if (e.type === "list") {
    t = e.spread || !1;
    const n = e.children;
    let r = -1;
    for (; !t && ++r < n.length; )
      t = Oo(n[r]);
  }
  return t;
}
function Oo(e) {
  const t = e.spread;
  return t ?? e.children.length > 1;
}
function Bu(e, t) {
  const n = {}, r = e.all(t);
  let i = -1;
  for (typeof t.start == "number" && t.start !== 1 && (n.start = t.start); ++i < r.length; ) {
    const a = r[i];
    if (a.type === "element" && a.tagName === "li" && a.properties && Array.isArray(a.properties.className) && a.properties.className.includes("task-list-item")) {
      n.className = ["contains-task-list"];
      break;
    }
  }
  const o = {
    type: "element",
    tagName: t.ordered ? "ol" : "ul",
    properties: n,
    children: e.wrap(r, !0)
  };
  return e.patch(t, o), e.applyData(t, o);
}
function $u(e, t) {
  const n = {
    type: "element",
    tagName: "p",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Uu(e, t) {
  const n = { type: "root", children: e.wrap(e.all(t)) };
  return e.patch(t, n), e.applyData(t, n);
}
function qu(e, t) {
  const n = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
const yr = Po("start"), br = Po("end");
function Hu(e) {
  return { start: yr(e), end: br(e) };
}
function Po(e) {
  return t;
  function t(n) {
    const r = n && n.position && n.position[e] || {};
    return {
      // @ts-expect-error: in practice, null is allowed.
      line: r.line || null,
      // @ts-expect-error: in practice, null is allowed.
      column: r.column || null,
      // @ts-expect-error: in practice, null is allowed.
      offset: r.offset > -1 ? r.offset : null
    };
  }
}
function Vu(e, t) {
  const n = e.all(t), r = n.shift(), i = [];
  if (r) {
    const a = {
      type: "element",
      tagName: "thead",
      properties: {},
      children: e.wrap([r], !0)
    };
    e.patch(t.children[0], a), i.push(a);
  }
  if (n.length > 0) {
    const a = {
      type: "element",
      tagName: "tbody",
      properties: {},
      children: e.wrap(n, !0)
    }, l = yr(t.children[1]), u = br(t.children[t.children.length - 1]);
    l.line && u.line && (a.position = { start: l, end: u }), i.push(a);
  }
  const o = {
    type: "element",
    tagName: "table",
    properties: {},
    children: e.wrap(i, !0)
  };
  return e.patch(t, o), e.applyData(t, o);
}
function Wu(e, t, n) {
  const r = n ? n.children : void 0, o = (r ? r.indexOf(t) : 1) === 0 ? "th" : "td", a = n && n.type === "table" ? n.align : void 0, l = a ? a.length : t.children.length;
  let u = -1;
  const s = [];
  for (; ++u < l; ) {
    const c = t.children[u], d = {}, p = a ? a[u] : void 0;
    p && (d.align = p);
    let m = { type: "element", tagName: o, properties: d, children: [] };
    c && (m.children = e.all(c), e.patch(c, m), m = e.applyData(t, m)), s.push(m);
  }
  const f = {
    type: "element",
    tagName: "tr",
    properties: {},
    children: e.wrap(s, !0)
  };
  return e.patch(t, f), e.applyData(t, f);
}
function Yu(e, t) {
  const n = {
    type: "element",
    tagName: "td",
    // Assume body cell.
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
const li = 9, si = 32;
function Ju(e) {
  const t = String(e), n = /\r?\n|\r/g;
  let r = n.exec(t), i = 0;
  const o = [];
  for (; r; )
    o.push(
      ui(t.slice(i, r.index), i > 0, !0),
      r[0]
    ), i = r.index + r[0].length, r = n.exec(t);
  return o.push(ui(t.slice(i), i > 0, !1)), o.join("");
}
function ui(e, t, n) {
  let r = 0, i = e.length;
  if (t) {
    let o = e.codePointAt(r);
    for (; o === li || o === si; )
      r++, o = e.codePointAt(r);
  }
  if (n) {
    let o = e.codePointAt(i - 1);
    for (; o === li || o === si; )
      i--, o = e.codePointAt(i - 1);
  }
  return i > r ? e.slice(r, i) : "";
}
function Ku(e, t) {
  const n = { type: "text", value: Ju(String(t.value)) };
  return e.patch(t, n), e.applyData(t, n);
}
function Xu(e, t) {
  const n = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return e.patch(t, n), e.applyData(t, n);
}
const Gu = {
  blockquote: Cu,
  break: Tu,
  code: Au,
  delete: Ru,
  emphasis: Ou,
  footnoteReference: Ao,
  footnote: Pu,
  heading: _u,
  html: Fu,
  imageReference: Iu,
  image: Du,
  inlineCode: Lu,
  linkReference: ju,
  link: zu,
  listItem: Nu,
  list: Bu,
  paragraph: $u,
  root: Uu,
  strong: qu,
  table: Vu,
  tableCell: Yu,
  tableRow: Wu,
  text: Ku,
  thematicBreak: Xu,
  toml: Jt,
  yaml: Jt,
  definition: Jt,
  footnoteDefinition: Jt
};
function Jt() {
  return null;
}
const wr = (
  /**
   * @type {(
   *   (<Kind extends Node>(test: PredicateTest<Kind>) => AssertPredicate<Kind>) &
   *   ((test?: Test) => AssertAnything)
   * )}
   */
  /**
   * @param {Test} [test]
   * @returns {AssertAnything}
   */
  (function(e) {
    if (e == null)
      return tc;
    if (typeof e == "string")
      return ec(e);
    if (typeof e == "object")
      return Array.isArray(e) ? Qu(e) : Zu(e);
    if (typeof e == "function")
      return hn(e);
    throw new Error("Expected function, string, or object as test");
  })
);
function Qu(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.length; )
    t[n] = wr(e[n]);
  return hn(r);
  function r(...i) {
    let o = -1;
    for (; ++o < t.length; )
      if (t[o].call(this, ...i)) return !0;
    return !1;
  }
}
function Zu(e) {
  return hn(t);
  function t(n) {
    let r;
    for (r in e)
      if (n[r] !== e[r]) return !1;
    return !0;
  }
}
function ec(e) {
  return hn(t);
  function t(n) {
    return n && n.type === e;
  }
}
function hn(e) {
  return t;
  function t(n, ...r) {
    return !!(n && typeof n == "object" && "type" in n && e.call(this, n, ...r));
  }
}
function tc() {
  return !0;
}
const nc = !0, ci = !1, rc = "skip", _o = (
  /**
   * @type {(
   *   (<Tree extends Node, Check extends Test>(tree: Tree, test: Check, visitor: BuildVisitor<Tree, Check>, reverse?: boolean | null | undefined) => void) &
   *   (<Tree extends Node>(tree: Tree, visitor: BuildVisitor<Tree>, reverse?: boolean | null | undefined) => void)
   * )}
   */
  /**
   * @param {Node} tree
   * @param {Test} test
   * @param {Visitor<Node>} visitor
   * @param {boolean | null | undefined} [reverse]
   * @returns {void}
   */
  (function(e, t, n, r) {
    typeof t == "function" && typeof n != "function" && (r = n, n = t, t = null);
    const i = wr(t), o = r ? -1 : 1;
    a(e, void 0, [])();
    function a(l, u, s) {
      const f = l && typeof l == "object" ? l : {};
      if (typeof f.type == "string") {
        const d = (
          // `hast`
          typeof f.tagName == "string" ? f.tagName : (
            // `xast`
            typeof f.name == "string" ? f.name : void 0
          )
        );
        Object.defineProperty(c, "name", {
          value: "node (" + (l.type + (d ? "<" + d + ">" : "")) + ")"
        });
      }
      return c;
      function c() {
        let d = [], p, m, g;
        if ((!t || i(l, u, s[s.length - 1] || null)) && (d = ic(n(l, s)), d[0] === ci))
          return d;
        if (l.children && d[0] !== rc)
          for (m = (r ? l.children.length : -1) + o, g = s.concat(l); m > -1 && m < l.children.length; ) {
            if (p = a(l.children[m], m, g)(), p[0] === ci)
              return p;
            m = typeof p[1] == "number" ? p[1] : m + o;
          }
        return d;
      }
    }
  })
);
function ic(e) {
  return Array.isArray(e) ? e : typeof e == "number" ? [nc, e] : [e];
}
const xr = (
  /**
   * @type {(
   *   (<Tree extends Node, Check extends Test>(tree: Tree, test: Check, visitor: BuildVisitor<Tree, Check>, reverse?: boolean | null | undefined) => void) &
   *   (<Tree extends Node>(tree: Tree, visitor: BuildVisitor<Tree>, reverse?: boolean | null | undefined) => void)
   * )}
   */
  /**
   * @param {Node} tree
   * @param {Test} test
   * @param {Visitor} visitor
   * @param {boolean | null | undefined} [reverse]
   * @returns {void}
   */
  (function(e, t, n, r) {
    typeof t == "function" && typeof n != "function" && (r = n, n = t, t = null), _o(e, t, i, r);
    function i(o, a) {
      const l = a[a.length - 1];
      return n(
        o,
        l ? l.children.indexOf(o) : null,
        l
      );
    }
  })
);
function oc(e) {
  return !e || !e.position || !e.position.start || !e.position.start.line || !e.position.start.column || !e.position.end || !e.position.end.line || !e.position.end.column;
}
const fi = {}.hasOwnProperty;
function ac(e) {
  const t = /* @__PURE__ */ Object.create(null);
  if (!e || !e.type)
    throw new Error("mdast-util-definitions expected node");
  return xr(e, "definition", (r) => {
    const i = pi(r.identifier);
    i && !fi.call(t, i) && (t[i] = r);
  }), n;
  function n(r) {
    const i = pi(r);
    return i && fi.call(t, i) ? t[i] : null;
  }
}
function pi(e) {
  return String(e || "").toUpperCase();
}
const un = {}.hasOwnProperty;
function lc(e, t) {
  const n = t || {}, r = n.allowDangerousHtml || !1, i = {};
  return a.dangerous = r, a.clobberPrefix = n.clobberPrefix === void 0 || n.clobberPrefix === null ? "user-content-" : n.clobberPrefix, a.footnoteLabel = n.footnoteLabel || "Footnotes", a.footnoteLabelTagName = n.footnoteLabelTagName || "h2", a.footnoteLabelProperties = n.footnoteLabelProperties || {
    className: ["sr-only"]
  }, a.footnoteBackLabel = n.footnoteBackLabel || "Back to content", a.unknownHandler = n.unknownHandler, a.passThrough = n.passThrough, a.handlers = { ...Gu, ...n.handlers }, a.definition = ac(e), a.footnoteById = i, a.footnoteOrder = [], a.footnoteCounts = {}, a.patch = sc, a.applyData = uc, a.one = l, a.all = u, a.wrap = fc, a.augment = o, xr(e, "footnoteDefinition", (s) => {
    const f = String(s.identifier).toUpperCase();
    un.call(i, f) || (i[f] = s);
  }), a;
  function o(s, f) {
    if (s && "data" in s && s.data) {
      const c = s.data;
      c.hName && (f.type !== "element" && (f = {
        type: "element",
        tagName: "",
        properties: {},
        children: []
      }), f.tagName = c.hName), f.type === "element" && c.hProperties && (f.properties = { ...f.properties, ...c.hProperties }), "children" in f && f.children && c.hChildren && (f.children = c.hChildren);
    }
    if (s) {
      const c = "type" in s ? s : { position: s };
      oc(c) || (f.position = { start: yr(c), end: br(c) });
    }
    return f;
  }
  function a(s, f, c, d) {
    return Array.isArray(c) && (d = c, c = {}), o(s, {
      type: "element",
      tagName: f,
      properties: c || {},
      children: d || []
    });
  }
  function l(s, f) {
    return Fo(a, s, f);
  }
  function u(s) {
    return kr(a, s);
  }
}
function sc(e, t) {
  e.position && (t.position = Hu(e));
}
function uc(e, t) {
  let n = t;
  if (e && e.data) {
    const r = e.data.hName, i = e.data.hChildren, o = e.data.hProperties;
    typeof r == "string" && (n.type === "element" ? n.tagName = r : n = {
      type: "element",
      tagName: r,
      properties: {},
      children: []
    }), n.type === "element" && o && (n.properties = { ...n.properties, ...o }), "children" in n && n.children && i !== null && i !== void 0 && (n.children = i);
  }
  return n;
}
function Fo(e, t, n) {
  const r = t && t.type;
  if (!r)
    throw new Error("Expected node, got `" + t + "`");
  return un.call(e.handlers, r) ? e.handlers[r](e, t, n) : e.passThrough && e.passThrough.includes(r) ? "children" in t ? { ...t, children: kr(e, t) } : t : e.unknownHandler ? e.unknownHandler(e, t, n) : cc(e, t);
}
function kr(e, t) {
  const n = [];
  if ("children" in t) {
    const r = t.children;
    let i = -1;
    for (; ++i < r.length; ) {
      const o = Fo(e, r[i], t);
      if (o) {
        if (i && r[i - 1].type === "break" && (!Array.isArray(o) && o.type === "text" && (o.value = o.value.replace(/^\s+/, "")), !Array.isArray(o) && o.type === "element")) {
          const a = o.children[0];
          a && a.type === "text" && (a.value = a.value.replace(/^\s+/, ""));
        }
        Array.isArray(o) ? n.push(...o) : n.push(o);
      }
    }
  }
  return n;
}
function cc(e, t) {
  const n = t.data || {}, r = "value" in t && !(un.call(n, "hProperties") || un.call(n, "hChildren")) ? { type: "text", value: t.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: kr(e, t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function fc(e, t) {
  const n = [];
  let r = -1;
  for (t && n.push({ type: "text", value: `
` }); ++r < e.length; )
    r && n.push({ type: "text", value: `
` }), n.push(e[r]);
  return t && e.length > 0 && n.push({ type: "text", value: `
` }), n;
}
function pc(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.footnoteOrder.length; ) {
    const r = e.footnoteById[e.footnoteOrder[n]];
    if (!r)
      continue;
    const i = e.all(r), o = String(r.identifier).toUpperCase(), a = St(o.toLowerCase());
    let l = 0;
    const u = [];
    for (; ++l <= e.footnoteCounts[o]; ) {
      const c = {
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + e.clobberPrefix + "fnref-" + a + (l > 1 ? "-" + l : ""),
          dataFootnoteBackref: !0,
          className: ["data-footnote-backref"],
          ariaLabel: e.footnoteBackLabel
        },
        children: [{ type: "text", value: "↩" }]
      };
      l > 1 && c.children.push({
        type: "element",
        tagName: "sup",
        children: [{ type: "text", value: String(l) }]
      }), u.length > 0 && u.push({ type: "text", value: " " }), u.push(c);
    }
    const s = i[i.length - 1];
    if (s && s.type === "element" && s.tagName === "p") {
      const c = s.children[s.children.length - 1];
      c && c.type === "text" ? c.value += " " : s.children.push({ type: "text", value: " " }), s.children.push(...u);
    } else
      i.push(...u);
    const f = {
      type: "element",
      tagName: "li",
      properties: { id: e.clobberPrefix + "fn-" + a },
      children: e.wrap(i, !0)
    };
    e.patch(r, f), t.push(f);
  }
  if (t.length !== 0)
    return {
      type: "element",
      tagName: "section",
      properties: { dataFootnotes: !0, className: ["footnotes"] },
      children: [
        {
          type: "element",
          tagName: e.footnoteLabelTagName,
          properties: {
            // To do: use structured clone.
            ...JSON.parse(JSON.stringify(e.footnoteLabelProperties)),
            id: "footnote-label"
          },
          children: [{ type: "text", value: e.footnoteLabel }]
        },
        { type: "text", value: `
` },
        {
          type: "element",
          tagName: "ol",
          properties: {},
          children: e.wrap(t, !0)
        },
        { type: "text", value: `
` }
      ]
    };
}
function Io(e, t) {
  const n = lc(e, t), r = n.one(e, null), i = pc(n);
  return i && r.children.push({ type: "text", value: `
` }, i), Array.isArray(r) ? { type: "root", children: r } : r;
}
const hc = (
  /** @type {(import('unified').Plugin<[Processor, Options?]|[null|undefined, Options?]|[Options]|[], MdastRoot>)} */
  (function(e, t) {
    return e && "run" in e ? dc(e, t) : mc(e || t);
  })
);
function dc(e, t) {
  return (n, r, i) => {
    e.run(Io(n, t), r, (o) => {
      i(o);
    });
  };
}
function mc(e) {
  return (t) => Io(t, e);
}
var Kt = { exports: {} }, Xt = { exports: {} }, de = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hi;
function gc() {
  if (hi) return de;
  hi = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, s = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, y = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, T = e ? Symbol.for("react.scope") : 60119;
  function E(v) {
    if (typeof v == "object" && v !== null) {
      var k = v.$$typeof;
      switch (k) {
        case t:
          switch (v = v.type, v) {
            case u:
            case s:
            case r:
            case o:
            case i:
            case c:
              return v;
            default:
              switch (v = v && v.$$typeof, v) {
                case l:
                case f:
                case m:
                case p:
                case a:
                  return v;
                default:
                  return k;
              }
          }
        case n:
          return k;
      }
    }
  }
  function _(v) {
    return E(v) === s;
  }
  return de.AsyncMode = u, de.ConcurrentMode = s, de.ContextConsumer = l, de.ContextProvider = a, de.Element = t, de.ForwardRef = f, de.Fragment = r, de.Lazy = m, de.Memo = p, de.Portal = n, de.Profiler = o, de.StrictMode = i, de.Suspense = c, de.isAsyncMode = function(v) {
    return _(v) || E(v) === u;
  }, de.isConcurrentMode = _, de.isContextConsumer = function(v) {
    return E(v) === l;
  }, de.isContextProvider = function(v) {
    return E(v) === a;
  }, de.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === t;
  }, de.isForwardRef = function(v) {
    return E(v) === f;
  }, de.isFragment = function(v) {
    return E(v) === r;
  }, de.isLazy = function(v) {
    return E(v) === m;
  }, de.isMemo = function(v) {
    return E(v) === p;
  }, de.isPortal = function(v) {
    return E(v) === n;
  }, de.isProfiler = function(v) {
    return E(v) === o;
  }, de.isStrictMode = function(v) {
    return E(v) === i;
  }, de.isSuspense = function(v) {
    return E(v) === c;
  }, de.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === r || v === s || v === o || v === i || v === c || v === d || typeof v == "object" && v !== null && (v.$$typeof === m || v.$$typeof === p || v.$$typeof === a || v.$$typeof === l || v.$$typeof === f || v.$$typeof === y || v.$$typeof === x || v.$$typeof === T || v.$$typeof === g);
  }, de.typeOf = E, de;
}
var me = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var di;
function yc() {
  return di || (di = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, s = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, y = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, T = e ? Symbol.for("react.scope") : 60119;
    function E(M) {
      return typeof M == "string" || typeof M == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      M === r || M === s || M === o || M === i || M === c || M === d || typeof M == "object" && M !== null && (M.$$typeof === m || M.$$typeof === p || M.$$typeof === a || M.$$typeof === l || M.$$typeof === f || M.$$typeof === y || M.$$typeof === x || M.$$typeof === T || M.$$typeof === g);
    }
    function _(M) {
      if (typeof M == "object" && M !== null) {
        var Oe = M.$$typeof;
        switch (Oe) {
          case t:
            var W = M.type;
            switch (W) {
              case u:
              case s:
              case r:
              case o:
              case i:
              case c:
                return W;
              default:
                var Me = W && W.$$typeof;
                switch (Me) {
                  case l:
                  case f:
                  case m:
                  case p:
                  case a:
                    return Me;
                  default:
                    return Oe;
                }
            }
          case n:
            return Oe;
        }
      }
    }
    var v = u, k = s, R = l, B = a, q = t, S = f, O = r, z = m, N = p, L = n, U = o, Q = i, se = c, fe = !1;
    function Se(M) {
      return fe || (fe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), h(M) || _(M) === u;
    }
    function h(M) {
      return _(M) === s;
    }
    function D(M) {
      return _(M) === l;
    }
    function Y(M) {
      return _(M) === a;
    }
    function b(M) {
      return typeof M == "object" && M !== null && M.$$typeof === t;
    }
    function H(M) {
      return _(M) === f;
    }
    function Z(M) {
      return _(M) === r;
    }
    function V(M) {
      return _(M) === m;
    }
    function X(M) {
      return _(M) === p;
    }
    function G(M) {
      return _(M) === n;
    }
    function re(M) {
      return _(M) === o;
    }
    function ee(M) {
      return _(M) === i;
    }
    function Ee(M) {
      return _(M) === c;
    }
    me.AsyncMode = v, me.ConcurrentMode = k, me.ContextConsumer = R, me.ContextProvider = B, me.Element = q, me.ForwardRef = S, me.Fragment = O, me.Lazy = z, me.Memo = N, me.Portal = L, me.Profiler = U, me.StrictMode = Q, me.Suspense = se, me.isAsyncMode = Se, me.isConcurrentMode = h, me.isContextConsumer = D, me.isContextProvider = Y, me.isElement = b, me.isForwardRef = H, me.isFragment = Z, me.isLazy = V, me.isMemo = X, me.isPortal = G, me.isProfiler = re, me.isStrictMode = ee, me.isSuspense = Ee, me.isValidElementType = E, me.typeOf = _;
  })()), me;
}
var mi;
function Do() {
  return mi || (mi = 1, process.env.NODE_ENV === "production" ? Xt.exports = gc() : Xt.exports = yc()), Xt.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Ln, gi;
function bc() {
  if (gi) return Ln;
  gi = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function r(o) {
    if (o == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(o);
  }
  function i() {
    try {
      if (!Object.assign)
        return !1;
      var o = new String("abc");
      if (o[5] = "de", Object.getOwnPropertyNames(o)[0] === "5")
        return !1;
      for (var a = {}, l = 0; l < 10; l++)
        a["_" + String.fromCharCode(l)] = l;
      var u = Object.getOwnPropertyNames(a).map(function(f) {
        return a[f];
      });
      if (u.join("") !== "0123456789")
        return !1;
      var s = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        s[f] = f;
      }), Object.keys(Object.assign({}, s)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Ln = i() ? Object.assign : function(o, a) {
    for (var l, u = r(o), s, f = 1; f < arguments.length; f++) {
      l = Object(arguments[f]);
      for (var c in l)
        t.call(l, c) && (u[c] = l[c]);
      if (e) {
        s = e(l);
        for (var d = 0; d < s.length; d++)
          n.call(l, s[d]) && (u[s[d]] = l[s[d]]);
      }
    }
    return u;
  }, Ln;
}
var jn, yi;
function vr() {
  if (yi) return jn;
  yi = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return jn = e, jn;
}
var zn, bi;
function Lo() {
  return bi || (bi = 1, zn = Function.call.bind(Object.prototype.hasOwnProperty)), zn;
}
var Nn, wi;
function wc() {
  if (wi) return Nn;
  wi = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ vr(), n = {}, r = /* @__PURE__ */ Lo();
    e = function(o) {
      var a = "Warning: " + o;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function i(o, a, l, u, s) {
    if (process.env.NODE_ENV !== "production") {
      for (var f in o)
        if (r(o, f)) {
          var c;
          try {
            if (typeof o[f] != "function") {
              var d = Error(
                (u || "React class") + ": " + l + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw d.name = "Invariant Violation", d;
            }
            c = o[f](a, f, u, l, null, t);
          } catch (m) {
            c = m;
          }
          if (c && !(c instanceof Error) && e(
            (u || "React class") + ": type specification of " + l + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof c + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), c instanceof Error && !(c.message in n)) {
            n[c.message] = !0;
            var p = s ? s() : "";
            e(
              "Failed " + l + " type: " + c.message + (p ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, Nn = i, Nn;
}
var Mn, xi;
function xc() {
  if (xi) return Mn;
  xi = 1;
  var e = Do(), t = bc(), n = /* @__PURE__ */ vr(), r = /* @__PURE__ */ Lo(), i = /* @__PURE__ */ wc(), o = function() {
  };
  process.env.NODE_ENV !== "production" && (o = function(l) {
    var u = "Warning: " + l;
    typeof console < "u" && console.error(u);
    try {
      throw new Error(u);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return Mn = function(l, u) {
    var s = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function c(h) {
      var D = h && (s && h[s] || h[f]);
      if (typeof D == "function")
        return D;
    }
    var d = "<<anonymous>>", p = {
      array: x("array"),
      bigint: x("bigint"),
      bool: x("boolean"),
      func: x("function"),
      number: x("number"),
      object: x("object"),
      string: x("string"),
      symbol: x("symbol"),
      any: T(),
      arrayOf: E,
      element: _(),
      elementType: v(),
      instanceOf: k,
      node: S(),
      objectOf: B,
      oneOf: R,
      oneOfType: q,
      shape: z,
      exact: N
    };
    function m(h, D) {
      return h === D ? h !== 0 || 1 / h === 1 / D : h !== h && D !== D;
    }
    function g(h, D) {
      this.message = h, this.data = D && typeof D == "object" ? D : {}, this.stack = "";
    }
    g.prototype = Error.prototype;
    function y(h) {
      if (process.env.NODE_ENV !== "production")
        var D = {}, Y = 0;
      function b(Z, V, X, G, re, ee, Ee) {
        if (G = G || d, ee = ee || X, Ee !== n) {
          if (u) {
            var M = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw M.name = "Invariant Violation", M;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Oe = G + ":" + X;
            !D[Oe] && // Avoid spamming the console because they are often not actionable except for lib authors
            Y < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + ee + "` prop on `" + G + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), D[Oe] = !0, Y++);
          }
        }
        return V[X] == null ? Z ? V[X] === null ? new g("The " + re + " `" + ee + "` is marked as required " + ("in `" + G + "`, but its value is `null`.")) : new g("The " + re + " `" + ee + "` is marked as required in " + ("`" + G + "`, but its value is `undefined`.")) : null : h(V, X, G, re, ee);
      }
      var H = b.bind(null, !1);
      return H.isRequired = b.bind(null, !0), H;
    }
    function x(h) {
      function D(Y, b, H, Z, V, X) {
        var G = Y[b], re = Q(G);
        if (re !== h) {
          var ee = se(G);
          return new g(
            "Invalid " + Z + " `" + V + "` of type " + ("`" + ee + "` supplied to `" + H + "`, expected ") + ("`" + h + "`."),
            { expectedType: h }
          );
        }
        return null;
      }
      return y(D);
    }
    function T() {
      return y(a);
    }
    function E(h) {
      function D(Y, b, H, Z, V) {
        if (typeof h != "function")
          return new g("Property `" + V + "` of component `" + H + "` has invalid PropType notation inside arrayOf.");
        var X = Y[b];
        if (!Array.isArray(X)) {
          var G = Q(X);
          return new g("Invalid " + Z + " `" + V + "` of type " + ("`" + G + "` supplied to `" + H + "`, expected an array."));
        }
        for (var re = 0; re < X.length; re++) {
          var ee = h(X, re, H, Z, V + "[" + re + "]", n);
          if (ee instanceof Error)
            return ee;
        }
        return null;
      }
      return y(D);
    }
    function _() {
      function h(D, Y, b, H, Z) {
        var V = D[Y];
        if (!l(V)) {
          var X = Q(V);
          return new g("Invalid " + H + " `" + Z + "` of type " + ("`" + X + "` supplied to `" + b + "`, expected a single ReactElement."));
        }
        return null;
      }
      return y(h);
    }
    function v() {
      function h(D, Y, b, H, Z) {
        var V = D[Y];
        if (!e.isValidElementType(V)) {
          var X = Q(V);
          return new g("Invalid " + H + " `" + Z + "` of type " + ("`" + X + "` supplied to `" + b + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return y(h);
    }
    function k(h) {
      function D(Y, b, H, Z, V) {
        if (!(Y[b] instanceof h)) {
          var X = h.name || d, G = Se(Y[b]);
          return new g("Invalid " + Z + " `" + V + "` of type " + ("`" + G + "` supplied to `" + H + "`, expected ") + ("instance of `" + X + "`."));
        }
        return null;
      }
      return y(D);
    }
    function R(h) {
      if (!Array.isArray(h))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), a;
      function D(Y, b, H, Z, V) {
        for (var X = Y[b], G = 0; G < h.length; G++)
          if (m(X, h[G]))
            return null;
        var re = JSON.stringify(h, function(Ee, M) {
          var Oe = se(M);
          return Oe === "symbol" ? String(M) : M;
        });
        return new g("Invalid " + Z + " `" + V + "` of value `" + String(X) + "` " + ("supplied to `" + H + "`, expected one of " + re + "."));
      }
      return y(D);
    }
    function B(h) {
      function D(Y, b, H, Z, V) {
        if (typeof h != "function")
          return new g("Property `" + V + "` of component `" + H + "` has invalid PropType notation inside objectOf.");
        var X = Y[b], G = Q(X);
        if (G !== "object")
          return new g("Invalid " + Z + " `" + V + "` of type " + ("`" + G + "` supplied to `" + H + "`, expected an object."));
        for (var re in X)
          if (r(X, re)) {
            var ee = h(X, re, H, Z, V + "." + re, n);
            if (ee instanceof Error)
              return ee;
          }
        return null;
      }
      return y(D);
    }
    function q(h) {
      if (!Array.isArray(h))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var D = 0; D < h.length; D++) {
        var Y = h[D];
        if (typeof Y != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + fe(Y) + " at index " + D + "."
          ), a;
      }
      function b(H, Z, V, X, G) {
        for (var re = [], ee = 0; ee < h.length; ee++) {
          var Ee = h[ee], M = Ee(H, Z, V, X, G, n);
          if (M == null)
            return null;
          M.data && r(M.data, "expectedType") && re.push(M.data.expectedType);
        }
        var Oe = re.length > 0 ? ", expected one of type [" + re.join(", ") + "]" : "";
        return new g("Invalid " + X + " `" + G + "` supplied to " + ("`" + V + "`" + Oe + "."));
      }
      return y(b);
    }
    function S() {
      function h(D, Y, b, H, Z) {
        return L(D[Y]) ? null : new g("Invalid " + H + " `" + Z + "` supplied to " + ("`" + b + "`, expected a ReactNode."));
      }
      return y(h);
    }
    function O(h, D, Y, b, H) {
      return new g(
        (h || "React class") + ": " + D + " type `" + Y + "." + b + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + H + "`."
      );
    }
    function z(h) {
      function D(Y, b, H, Z, V) {
        var X = Y[b], G = Q(X);
        if (G !== "object")
          return new g("Invalid " + Z + " `" + V + "` of type `" + G + "` " + ("supplied to `" + H + "`, expected `object`."));
        for (var re in h) {
          var ee = h[re];
          if (typeof ee != "function")
            return O(H, Z, V, re, se(ee));
          var Ee = ee(X, re, H, Z, V + "." + re, n);
          if (Ee)
            return Ee;
        }
        return null;
      }
      return y(D);
    }
    function N(h) {
      function D(Y, b, H, Z, V) {
        var X = Y[b], G = Q(X);
        if (G !== "object")
          return new g("Invalid " + Z + " `" + V + "` of type `" + G + "` " + ("supplied to `" + H + "`, expected `object`."));
        var re = t({}, Y[b], h);
        for (var ee in re) {
          var Ee = h[ee];
          if (r(h, ee) && typeof Ee != "function")
            return O(H, Z, V, ee, se(Ee));
          if (!Ee)
            return new g(
              "Invalid " + Z + " `" + V + "` key `" + ee + "` supplied to `" + H + "`.\nBad object: " + JSON.stringify(Y[b], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(h), null, "  ")
            );
          var M = Ee(X, ee, H, Z, V + "." + ee, n);
          if (M)
            return M;
        }
        return null;
      }
      return y(D);
    }
    function L(h) {
      switch (typeof h) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !h;
        case "object":
          if (Array.isArray(h))
            return h.every(L);
          if (h === null || l(h))
            return !0;
          var D = c(h);
          if (D) {
            var Y = D.call(h), b;
            if (D !== h.entries) {
              for (; !(b = Y.next()).done; )
                if (!L(b.value))
                  return !1;
            } else
              for (; !(b = Y.next()).done; ) {
                var H = b.value;
                if (H && !L(H[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function U(h, D) {
      return h === "symbol" ? !0 : D ? D["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && D instanceof Symbol : !1;
    }
    function Q(h) {
      var D = typeof h;
      return Array.isArray(h) ? "array" : h instanceof RegExp ? "object" : U(D, h) ? "symbol" : D;
    }
    function se(h) {
      if (typeof h > "u" || h === null)
        return "" + h;
      var D = Q(h);
      if (D === "object") {
        if (h instanceof Date)
          return "date";
        if (h instanceof RegExp)
          return "regexp";
      }
      return D;
    }
    function fe(h) {
      var D = se(h);
      switch (D) {
        case "array":
        case "object":
          return "an " + D;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + D;
        default:
          return D;
      }
    }
    function Se(h) {
      return !h.constructor || !h.constructor.name ? d : h.constructor.name;
    }
    return p.checkPropTypes = i, p.resetWarningCache = i.resetWarningCache, p.PropTypes = p, p;
  }, Mn;
}
var Bn, ki;
function kc() {
  if (ki) return Bn;
  ki = 1;
  var e = /* @__PURE__ */ vr();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, Bn = function() {
    function r(a, l, u, s, f, c) {
      if (c !== e) {
        var d = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw d.name = "Invariant Violation", d;
      }
    }
    r.isRequired = r;
    function i() {
      return r;
    }
    var o = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: i,
      element: r,
      elementType: r,
      instanceOf: i,
      node: r,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return o.PropTypes = o, o;
  }, Bn;
}
var vi;
function vc() {
  if (vi) return Kt.exports;
  if (vi = 1, process.env.NODE_ENV !== "production") {
    var e = Do(), t = !0;
    Kt.exports = /* @__PURE__ */ xc()(e.isElement, t);
  } else
    Kt.exports = /* @__PURE__ */ kc()();
  return Kt.exports;
}
var Sc = /* @__PURE__ */ vc();
const ne = /* @__PURE__ */ Lt(Sc);
class Nt {
  /**
   * @constructor
   * @param {Properties} property
   * @param {Normal} normal
   * @param {string} [space]
   */
  constructor(t, n, r) {
    this.property = t, this.normal = n, r && (this.space = r);
  }
}
Nt.prototype.property = {};
Nt.prototype.normal = {};
Nt.prototype.space = null;
function jo(e, t) {
  const n = {}, r = {};
  let i = -1;
  for (; ++i < e.length; )
    Object.assign(n, e[i].property), Object.assign(r, e[i].normal);
  return new Nt(n, r, t);
}
function rr(e) {
  return e.toLowerCase();
}
class Je {
  /**
   * @constructor
   * @param {string} property
   * @param {string} attribute
   */
  constructor(t, n) {
    this.property = t, this.attribute = n;
  }
}
Je.prototype.space = null;
Je.prototype.boolean = !1;
Je.prototype.booleanish = !1;
Je.prototype.overloadedBoolean = !1;
Je.prototype.number = !1;
Je.prototype.commaSeparated = !1;
Je.prototype.spaceSeparated = !1;
Je.prototype.commaOrSpaceSeparated = !1;
Je.prototype.mustUseProperty = !1;
Je.prototype.defined = !1;
let Ec = 0;
const ie = gt(), Re = gt(), zo = gt(), I = gt(), ke = gt(), kt = gt(), Ue = gt();
function gt() {
  return 2 ** ++Ec;
}
const ir = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: ie,
  booleanish: Re,
  commaOrSpaceSeparated: Ue,
  commaSeparated: kt,
  number: I,
  overloadedBoolean: zo,
  spaceSeparated: ke
}, Symbol.toStringTag, { value: "Module" })), $n = Object.keys(ir);
class Sr extends Je {
  /**
   * @constructor
   * @param {string} property
   * @param {string} attribute
   * @param {number|null} [mask]
   * @param {string} [space]
   */
  constructor(t, n, r, i) {
    let o = -1;
    if (super(t, n), Si(this, "space", i), typeof r == "number")
      for (; ++o < $n.length; ) {
        const a = $n[o];
        Si(this, $n[o], (r & ir[a]) === ir[a]);
      }
  }
}
Sr.prototype.defined = !0;
function Si(e, t, n) {
  n && (e[t] = n);
}
const Cc = {}.hasOwnProperty;
function Et(e) {
  const t = {}, n = {};
  let r;
  for (r in e.properties)
    if (Cc.call(e.properties, r)) {
      const i = e.properties[r], o = new Sr(
        r,
        e.transform(e.attributes || {}, r),
        i,
        e.space
      );
      e.mustUseProperty && e.mustUseProperty.includes(r) && (o.mustUseProperty = !0), t[r] = o, n[rr(r)] = r, n[rr(o.attribute)] = r;
    }
  return new Nt(t, n, e.space);
}
const No = Et({
  space: "xlink",
  transform(e, t) {
    return "xlink:" + t.slice(5).toLowerCase();
  },
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null
  }
}), Mo = Et({
  space: "xml",
  transform(e, t) {
    return "xml:" + t.slice(3).toLowerCase();
  },
  properties: { xmlLang: null, xmlBase: null, xmlSpace: null }
});
function Bo(e, t) {
  return t in e ? e[t] : t;
}
function $o(e, t) {
  return Bo(e, t.toLowerCase());
}
const Uo = Et({
  space: "xmlns",
  attributes: { xmlnsxlink: "xmlns:xlink" },
  transform: $o,
  properties: { xmlns: null, xmlnsXLink: null }
}), qo = Et({
  transform(e, t) {
    return t === "role" ? t : "aria-" + t.slice(4).toLowerCase();
  },
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: Re,
    ariaAutoComplete: null,
    ariaBusy: Re,
    ariaChecked: Re,
    ariaColCount: I,
    ariaColIndex: I,
    ariaColSpan: I,
    ariaControls: ke,
    ariaCurrent: null,
    ariaDescribedBy: ke,
    ariaDetails: null,
    ariaDisabled: Re,
    ariaDropEffect: ke,
    ariaErrorMessage: null,
    ariaExpanded: Re,
    ariaFlowTo: ke,
    ariaGrabbed: Re,
    ariaHasPopup: null,
    ariaHidden: Re,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: ke,
    ariaLevel: I,
    ariaLive: null,
    ariaModal: Re,
    ariaMultiLine: Re,
    ariaMultiSelectable: Re,
    ariaOrientation: null,
    ariaOwns: ke,
    ariaPlaceholder: null,
    ariaPosInSet: I,
    ariaPressed: Re,
    ariaReadOnly: Re,
    ariaRelevant: null,
    ariaRequired: Re,
    ariaRoleDescription: ke,
    ariaRowCount: I,
    ariaRowIndex: I,
    ariaRowSpan: I,
    ariaSelected: Re,
    ariaSetSize: I,
    ariaSort: null,
    ariaValueMax: I,
    ariaValueMin: I,
    ariaValueNow: I,
    ariaValueText: null,
    role: null
  }
}), Tc = Et({
  space: "html",
  attributes: {
    acceptcharset: "accept-charset",
    classname: "class",
    htmlfor: "for",
    httpequiv: "http-equiv"
  },
  transform: $o,
  mustUseProperty: ["checked", "multiple", "muted", "selected"],
  properties: {
    // Standard Properties.
    abbr: null,
    accept: kt,
    acceptCharset: ke,
    accessKey: ke,
    action: null,
    allow: null,
    allowFullScreen: ie,
    allowPaymentRequest: ie,
    allowUserMedia: ie,
    alt: null,
    as: null,
    async: ie,
    autoCapitalize: null,
    autoComplete: ke,
    autoFocus: ie,
    autoPlay: ie,
    blocking: ke,
    capture: null,
    charSet: null,
    checked: ie,
    cite: null,
    className: ke,
    cols: I,
    colSpan: null,
    content: null,
    contentEditable: Re,
    controls: ie,
    controlsList: ke,
    coords: I | kt,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: ie,
    defer: ie,
    dir: null,
    dirName: null,
    disabled: ie,
    download: zo,
    draggable: Re,
    encType: null,
    enterKeyHint: null,
    fetchPriority: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: ie,
    formTarget: null,
    headers: ke,
    height: I,
    hidden: ie,
    high: I,
    href: null,
    hrefLang: null,
    htmlFor: ke,
    httpEquiv: ke,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: ie,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: ie,
    itemId: null,
    itemProp: ke,
    itemRef: ke,
    itemScope: ie,
    itemType: ke,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: ie,
    low: I,
    manifest: null,
    max: null,
    maxLength: I,
    media: null,
    method: null,
    min: null,
    minLength: I,
    multiple: ie,
    muted: ie,
    name: null,
    nonce: null,
    noModule: ie,
    noValidate: ie,
    onAbort: null,
    onAfterPrint: null,
    onAuxClick: null,
    onBeforeMatch: null,
    onBeforePrint: null,
    onBeforeToggle: null,
    onBeforeUnload: null,
    onBlur: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onContextLost: null,
    onContextMenu: null,
    onContextRestored: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFormData: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLanguageChange: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadEnd: null,
    onLoadStart: null,
    onMessage: null,
    onMessageError: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRejectionHandled: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onScrollEnd: null,
    onSecurityPolicyViolation: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onSlotChange: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnhandledRejection: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onWheel: null,
    open: ie,
    optimum: I,
    pattern: null,
    ping: ke,
    placeholder: null,
    playsInline: ie,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: ie,
    referrerPolicy: null,
    rel: ke,
    required: ie,
    reversed: ie,
    rows: I,
    rowSpan: I,
    sandbox: ke,
    scope: null,
    scoped: ie,
    seamless: ie,
    selected: ie,
    shadowRootClonable: ie,
    shadowRootDelegatesFocus: ie,
    shadowRootMode: null,
    shape: null,
    size: I,
    sizes: null,
    slot: null,
    span: I,
    spellCheck: Re,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: I,
    step: null,
    style: null,
    tabIndex: I,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: ie,
    useMap: null,
    value: Re,
    width: I,
    wrap: null,
    writingSuggestions: null,
    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null,
    // Several. Use CSS `text-align` instead,
    aLink: null,
    // `<body>`. Use CSS `a:active {color}` instead
    archive: ke,
    // `<object>`. List of URIs to archives
    axis: null,
    // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null,
    // `<body>`. Use CSS `background-image` instead
    bgColor: null,
    // `<body>` and table elements. Use CSS `background-color` instead
    border: I,
    // `<table>`. Use CSS `border-width` instead,
    borderColor: null,
    // `<table>`. Use CSS `border-color` instead,
    bottomMargin: I,
    // `<body>`
    cellPadding: null,
    // `<table>`
    cellSpacing: null,
    // `<table>`
    char: null,
    // Several table elements. When `align=char`, sets the character to align on
    charOff: null,
    // Several table elements. When `char`, offsets the alignment
    classId: null,
    // `<object>`
    clear: null,
    // `<br>`. Use CSS `clear` instead
    code: null,
    // `<object>`
    codeBase: null,
    // `<object>`
    codeType: null,
    // `<object>`
    color: null,
    // `<font>` and `<hr>`. Use CSS instead
    compact: ie,
    // Lists. Use CSS to reduce space between items instead
    declare: ie,
    // `<object>`
    event: null,
    // `<script>`
    face: null,
    // `<font>`. Use CSS instead
    frame: null,
    // `<table>`
    frameBorder: null,
    // `<iframe>`. Use CSS `border` instead
    hSpace: I,
    // `<img>` and `<object>`
    leftMargin: I,
    // `<body>`
    link: null,
    // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null,
    // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null,
    // `<img>`. Use a `<picture>`
    marginHeight: I,
    // `<body>`
    marginWidth: I,
    // `<body>`
    noResize: ie,
    // `<frame>`
    noHref: ie,
    // `<area>`. Use no href instead of an explicit `nohref`
    noShade: ie,
    // `<hr>`. Use background-color and height instead of borders
    noWrap: ie,
    // `<td>` and `<th>`
    object: null,
    // `<applet>`
    profile: null,
    // `<head>`
    prompt: null,
    // `<isindex>`
    rev: null,
    // `<link>`
    rightMargin: I,
    // `<body>`
    rules: null,
    // `<table>`
    scheme: null,
    // `<meta>`
    scrolling: Re,
    // `<frame>`. Use overflow in the child context
    standby: null,
    // `<object>`
    summary: null,
    // `<table>`
    text: null,
    // `<body>`. Use CSS `color` instead
    topMargin: I,
    // `<body>`
    valueType: null,
    // `<param>`
    version: null,
    // `<html>`. Use a doctype.
    vAlign: null,
    // Several. Use CSS `vertical-align` instead
    vLink: null,
    // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: I,
    // `<img>` and `<object>`
    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: ie,
    disableRemotePlayback: ie,
    prefix: null,
    property: null,
    results: I,
    security: null,
    unselectable: null
  }
}), Ac = Et({
  space: "svg",
  attributes: {
    accentHeight: "accent-height",
    alignmentBaseline: "alignment-baseline",
    arabicForm: "arabic-form",
    baselineShift: "baseline-shift",
    capHeight: "cap-height",
    className: "class",
    clipPath: "clip-path",
    clipRule: "clip-rule",
    colorInterpolation: "color-interpolation",
    colorInterpolationFilters: "color-interpolation-filters",
    colorProfile: "color-profile",
    colorRendering: "color-rendering",
    crossOrigin: "crossorigin",
    dataType: "datatype",
    dominantBaseline: "dominant-baseline",
    enableBackground: "enable-background",
    fillOpacity: "fill-opacity",
    fillRule: "fill-rule",
    floodColor: "flood-color",
    floodOpacity: "flood-opacity",
    fontFamily: "font-family",
    fontSize: "font-size",
    fontSizeAdjust: "font-size-adjust",
    fontStretch: "font-stretch",
    fontStyle: "font-style",
    fontVariant: "font-variant",
    fontWeight: "font-weight",
    glyphName: "glyph-name",
    glyphOrientationHorizontal: "glyph-orientation-horizontal",
    glyphOrientationVertical: "glyph-orientation-vertical",
    hrefLang: "hreflang",
    horizAdvX: "horiz-adv-x",
    horizOriginX: "horiz-origin-x",
    horizOriginY: "horiz-origin-y",
    imageRendering: "image-rendering",
    letterSpacing: "letter-spacing",
    lightingColor: "lighting-color",
    markerEnd: "marker-end",
    markerMid: "marker-mid",
    markerStart: "marker-start",
    navDown: "nav-down",
    navDownLeft: "nav-down-left",
    navDownRight: "nav-down-right",
    navLeft: "nav-left",
    navNext: "nav-next",
    navPrev: "nav-prev",
    navRight: "nav-right",
    navUp: "nav-up",
    navUpLeft: "nav-up-left",
    navUpRight: "nav-up-right",
    onAbort: "onabort",
    onActivate: "onactivate",
    onAfterPrint: "onafterprint",
    onBeforePrint: "onbeforeprint",
    onBegin: "onbegin",
    onCancel: "oncancel",
    onCanPlay: "oncanplay",
    onCanPlayThrough: "oncanplaythrough",
    onChange: "onchange",
    onClick: "onclick",
    onClose: "onclose",
    onCopy: "oncopy",
    onCueChange: "oncuechange",
    onCut: "oncut",
    onDblClick: "ondblclick",
    onDrag: "ondrag",
    onDragEnd: "ondragend",
    onDragEnter: "ondragenter",
    onDragExit: "ondragexit",
    onDragLeave: "ondragleave",
    onDragOver: "ondragover",
    onDragStart: "ondragstart",
    onDrop: "ondrop",
    onDurationChange: "ondurationchange",
    onEmptied: "onemptied",
    onEnd: "onend",
    onEnded: "onended",
    onError: "onerror",
    onFocus: "onfocus",
    onFocusIn: "onfocusin",
    onFocusOut: "onfocusout",
    onHashChange: "onhashchange",
    onInput: "oninput",
    onInvalid: "oninvalid",
    onKeyDown: "onkeydown",
    onKeyPress: "onkeypress",
    onKeyUp: "onkeyup",
    onLoad: "onload",
    onLoadedData: "onloadeddata",
    onLoadedMetadata: "onloadedmetadata",
    onLoadStart: "onloadstart",
    onMessage: "onmessage",
    onMouseDown: "onmousedown",
    onMouseEnter: "onmouseenter",
    onMouseLeave: "onmouseleave",
    onMouseMove: "onmousemove",
    onMouseOut: "onmouseout",
    onMouseOver: "onmouseover",
    onMouseUp: "onmouseup",
    onMouseWheel: "onmousewheel",
    onOffline: "onoffline",
    onOnline: "ononline",
    onPageHide: "onpagehide",
    onPageShow: "onpageshow",
    onPaste: "onpaste",
    onPause: "onpause",
    onPlay: "onplay",
    onPlaying: "onplaying",
    onPopState: "onpopstate",
    onProgress: "onprogress",
    onRateChange: "onratechange",
    onRepeat: "onrepeat",
    onReset: "onreset",
    onResize: "onresize",
    onScroll: "onscroll",
    onSeeked: "onseeked",
    onSeeking: "onseeking",
    onSelect: "onselect",
    onShow: "onshow",
    onStalled: "onstalled",
    onStorage: "onstorage",
    onSubmit: "onsubmit",
    onSuspend: "onsuspend",
    onTimeUpdate: "ontimeupdate",
    onToggle: "ontoggle",
    onUnload: "onunload",
    onVolumeChange: "onvolumechange",
    onWaiting: "onwaiting",
    onZoom: "onzoom",
    overlinePosition: "overline-position",
    overlineThickness: "overline-thickness",
    paintOrder: "paint-order",
    panose1: "panose-1",
    pointerEvents: "pointer-events",
    referrerPolicy: "referrerpolicy",
    renderingIntent: "rendering-intent",
    shapeRendering: "shape-rendering",
    stopColor: "stop-color",
    stopOpacity: "stop-opacity",
    strikethroughPosition: "strikethrough-position",
    strikethroughThickness: "strikethrough-thickness",
    strokeDashArray: "stroke-dasharray",
    strokeDashOffset: "stroke-dashoffset",
    strokeLineCap: "stroke-linecap",
    strokeLineJoin: "stroke-linejoin",
    strokeMiterLimit: "stroke-miterlimit",
    strokeOpacity: "stroke-opacity",
    strokeWidth: "stroke-width",
    tabIndex: "tabindex",
    textAnchor: "text-anchor",
    textDecoration: "text-decoration",
    textRendering: "text-rendering",
    transformOrigin: "transform-origin",
    typeOf: "typeof",
    underlinePosition: "underline-position",
    underlineThickness: "underline-thickness",
    unicodeBidi: "unicode-bidi",
    unicodeRange: "unicode-range",
    unitsPerEm: "units-per-em",
    vAlphabetic: "v-alphabetic",
    vHanging: "v-hanging",
    vIdeographic: "v-ideographic",
    vMathematical: "v-mathematical",
    vectorEffect: "vector-effect",
    vertAdvY: "vert-adv-y",
    vertOriginX: "vert-origin-x",
    vertOriginY: "vert-origin-y",
    wordSpacing: "word-spacing",
    writingMode: "writing-mode",
    xHeight: "x-height",
    // These were camelcased in Tiny. Now lowercased in SVG 2
    playbackOrder: "playbackorder",
    timelineBegin: "timelinebegin"
  },
  transform: Bo,
  properties: {
    about: Ue,
    accentHeight: I,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: I,
    amplitude: I,
    arabicForm: null,
    ascent: I,
    attributeName: null,
    attributeType: null,
    azimuth: I,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: I,
    by: null,
    calcMode: null,
    capHeight: I,
    className: ke,
    clip: null,
    clipPath: null,
    clipPathUnits: null,
    clipRule: null,
    color: null,
    colorInterpolation: null,
    colorInterpolationFilters: null,
    colorProfile: null,
    colorRendering: null,
    content: null,
    contentScriptType: null,
    contentStyleType: null,
    crossOrigin: null,
    cursor: null,
    cx: null,
    cy: null,
    d: null,
    dataType: null,
    defaultAction: null,
    descent: I,
    diffuseConstant: I,
    direction: null,
    display: null,
    dur: null,
    divisor: I,
    dominantBaseline: null,
    download: ie,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: I,
    enableBackground: null,
    end: null,
    event: null,
    exponent: I,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: I,
    fillRule: null,
    filter: null,
    filterRes: null,
    filterUnits: null,
    floodColor: null,
    floodOpacity: null,
    focusable: null,
    focusHighlight: null,
    fontFamily: null,
    fontSize: null,
    fontSizeAdjust: null,
    fontStretch: null,
    fontStyle: null,
    fontVariant: null,
    fontWeight: null,
    format: null,
    fr: null,
    from: null,
    fx: null,
    fy: null,
    g1: kt,
    g2: kt,
    glyphName: kt,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: I,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: I,
    horizOriginX: I,
    horizOriginY: I,
    id: null,
    ideographic: I,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: I,
    k: I,
    k1: I,
    k2: I,
    k3: I,
    k4: I,
    kernelMatrix: Ue,
    kernelUnitLength: null,
    keyPoints: null,
    // SEMI_COLON_SEPARATED
    keySplines: null,
    // SEMI_COLON_SEPARATED
    keyTimes: null,
    // SEMI_COLON_SEPARATED
    kerning: null,
    lang: null,
    lengthAdjust: null,
    letterSpacing: null,
    lightingColor: null,
    limitingConeAngle: I,
    local: null,
    markerEnd: null,
    markerMid: null,
    markerStart: null,
    markerHeight: null,
    markerUnits: null,
    markerWidth: null,
    mask: null,
    maskContentUnits: null,
    maskUnits: null,
    mathematical: null,
    max: null,
    media: null,
    mediaCharacterEncoding: null,
    mediaContentEncodings: null,
    mediaSize: I,
    mediaTime: null,
    method: null,
    min: null,
    mode: null,
    name: null,
    navDown: null,
    navDownLeft: null,
    navDownRight: null,
    navLeft: null,
    navNext: null,
    navPrev: null,
    navRight: null,
    navUp: null,
    navUpLeft: null,
    navUpRight: null,
    numOctaves: null,
    observer: null,
    offset: null,
    onAbort: null,
    onActivate: null,
    onAfterPrint: null,
    onBeforePrint: null,
    onBegin: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnd: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFocusIn: null,
    onFocusOut: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadStart: null,
    onMessage: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onMouseWheel: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRepeat: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onShow: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onZoom: null,
    opacity: null,
    operator: null,
    order: null,
    orient: null,
    orientation: null,
    origin: null,
    overflow: null,
    overlay: null,
    overlinePosition: I,
    overlineThickness: I,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: I,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: ke,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: I,
    pointsAtY: I,
    pointsAtZ: I,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: Ue,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: Ue,
    rev: Ue,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: Ue,
    requiredFeatures: Ue,
    requiredFonts: Ue,
    requiredFormats: Ue,
    resource: null,
    restart: null,
    result: null,
    rotate: null,
    rx: null,
    ry: null,
    scale: null,
    seed: null,
    shapeRendering: null,
    side: null,
    slope: null,
    snapshotTime: null,
    specularConstant: I,
    specularExponent: I,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: I,
    strikethroughThickness: I,
    string: null,
    stroke: null,
    strokeDashArray: Ue,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: I,
    strokeOpacity: I,
    strokeWidth: null,
    style: null,
    surfaceScale: I,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: Ue,
    tabIndex: I,
    tableValues: null,
    target: null,
    targetX: I,
    targetY: I,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: Ue,
    to: null,
    transform: null,
    transformOrigin: null,
    u1: null,
    u2: null,
    underlinePosition: I,
    underlineThickness: I,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: I,
    values: null,
    vAlphabetic: I,
    vMathematical: I,
    vectorEffect: null,
    vHanging: I,
    vIdeographic: I,
    version: null,
    vertAdvY: I,
    vertOriginX: I,
    vertOriginY: I,
    viewBox: null,
    viewTarget: null,
    visibility: null,
    width: null,
    widths: null,
    wordSpacing: null,
    writingMode: null,
    x: null,
    x1: null,
    x2: null,
    xChannelSelector: null,
    xHeight: I,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  }
}), Rc = /^data[-\w.:]+$/i, Ei = /-[a-z]/g, Oc = /[A-Z]/g;
function Pc(e, t) {
  const n = rr(t);
  let r = t, i = Je;
  if (n in e.normal)
    return e.property[e.normal[n]];
  if (n.length > 4 && n.slice(0, 4) === "data" && Rc.test(t)) {
    if (t.charAt(4) === "-") {
      const o = t.slice(5).replace(Ei, Fc);
      r = "data" + o.charAt(0).toUpperCase() + o.slice(1);
    } else {
      const o = t.slice(4);
      if (!Ei.test(o)) {
        let a = o.replace(Oc, _c);
        a.charAt(0) !== "-" && (a = "-" + a), t = "data" + a;
      }
    }
    i = Sr;
  }
  return new i(r, t);
}
function _c(e) {
  return "-" + e.toLowerCase();
}
function Fc(e) {
  return e.charAt(1).toUpperCase();
}
const Ci = {
  classId: "classID",
  dataType: "datatype",
  itemId: "itemID",
  strokeDashArray: "strokeDasharray",
  strokeDashOffset: "strokeDashoffset",
  strokeLineCap: "strokeLinecap",
  strokeLineJoin: "strokeLinejoin",
  strokeMiterLimit: "strokeMiterlimit",
  typeOf: "typeof",
  xLinkActuate: "xlinkActuate",
  xLinkArcRole: "xlinkArcrole",
  xLinkHref: "xlinkHref",
  xLinkRole: "xlinkRole",
  xLinkShow: "xlinkShow",
  xLinkTitle: "xlinkTitle",
  xLinkType: "xlinkType",
  xmlnsXLink: "xmlnsXlink"
}, Ic = jo([Mo, No, Uo, qo, Tc], "html"), Dc = jo([Mo, No, Uo, qo, Ac], "svg");
function Lc(e) {
  if (e.allowedElements && e.disallowedElements)
    throw new TypeError(
      "Only one of `allowedElements` and `disallowedElements` should be defined"
    );
  if (e.allowedElements || e.disallowedElements || e.allowElement)
    return (t) => {
      xr(t, "element", (n, r, i) => {
        const o = (
          /** @type {Element|Root} */
          i
        );
        let a;
        if (e.allowedElements ? a = !e.allowedElements.includes(n.tagName) : e.disallowedElements && (a = e.disallowedElements.includes(n.tagName)), !a && e.allowElement && typeof r == "number" && (a = !e.allowElement(n, r, o)), a && typeof r == "number")
          return e.unwrapDisallowed && n.children ? o.children.splice(r, 1, ...n.children) : o.children.splice(r, 1), r;
      });
    };
}
var Gt = { exports: {} }, ge = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ti;
function jc() {
  if (Ti) return ge;
  Ti = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), s = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), m;
  m = Symbol.for("react.module.reference");
  function g(y) {
    if (typeof y == "object" && y !== null) {
      var x = y.$$typeof;
      switch (x) {
        case e:
          switch (y = y.type, y) {
            case n:
            case i:
            case r:
            case s:
            case f:
              return y;
            default:
              switch (y = y && y.$$typeof, y) {
                case l:
                case a:
                case u:
                case d:
                case c:
                case o:
                  return y;
                default:
                  return x;
              }
          }
        case t:
          return x;
      }
    }
  }
  return ge.ContextConsumer = a, ge.ContextProvider = o, ge.Element = e, ge.ForwardRef = u, ge.Fragment = n, ge.Lazy = d, ge.Memo = c, ge.Portal = t, ge.Profiler = i, ge.StrictMode = r, ge.Suspense = s, ge.SuspenseList = f, ge.isAsyncMode = function() {
    return !1;
  }, ge.isConcurrentMode = function() {
    return !1;
  }, ge.isContextConsumer = function(y) {
    return g(y) === a;
  }, ge.isContextProvider = function(y) {
    return g(y) === o;
  }, ge.isElement = function(y) {
    return typeof y == "object" && y !== null && y.$$typeof === e;
  }, ge.isForwardRef = function(y) {
    return g(y) === u;
  }, ge.isFragment = function(y) {
    return g(y) === n;
  }, ge.isLazy = function(y) {
    return g(y) === d;
  }, ge.isMemo = function(y) {
    return g(y) === c;
  }, ge.isPortal = function(y) {
    return g(y) === t;
  }, ge.isProfiler = function(y) {
    return g(y) === i;
  }, ge.isStrictMode = function(y) {
    return g(y) === r;
  }, ge.isSuspense = function(y) {
    return g(y) === s;
  }, ge.isSuspenseList = function(y) {
    return g(y) === f;
  }, ge.isValidElementType = function(y) {
    return typeof y == "string" || typeof y == "function" || y === n || y === i || y === r || y === s || y === f || y === p || typeof y == "object" && y !== null && (y.$$typeof === d || y.$$typeof === c || y.$$typeof === o || y.$$typeof === a || y.$$typeof === u || y.$$typeof === m || y.getModuleId !== void 0);
  }, ge.typeOf = g, ge;
}
var ye = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ai;
function zc() {
  return Ai || (Ai = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), s = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), m = !1, g = !1, y = !1, x = !1, T = !1, E;
    E = Symbol.for("react.module.reference");
    function _(W) {
      return !!(typeof W == "string" || typeof W == "function" || W === n || W === i || T || W === r || W === s || W === f || x || W === p || m || g || y || typeof W == "object" && W !== null && (W.$$typeof === d || W.$$typeof === c || W.$$typeof === o || W.$$typeof === a || W.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      W.$$typeof === E || W.getModuleId !== void 0));
    }
    function v(W) {
      if (typeof W == "object" && W !== null) {
        var Me = W.$$typeof;
        switch (Me) {
          case e:
            var Be = W.type;
            switch (Be) {
              case n:
              case i:
              case r:
              case s:
              case f:
                return Be;
              default:
                var it = Be && Be.$$typeof;
                switch (it) {
                  case l:
                  case a:
                  case u:
                  case d:
                  case c:
                  case o:
                    return it;
                  default:
                    return Me;
                }
            }
          case t:
            return Me;
        }
      }
    }
    var k = a, R = o, B = e, q = u, S = n, O = d, z = c, N = t, L = i, U = r, Q = s, se = f, fe = !1, Se = !1;
    function h(W) {
      return fe || (fe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function D(W) {
      return Se || (Se = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Y(W) {
      return v(W) === a;
    }
    function b(W) {
      return v(W) === o;
    }
    function H(W) {
      return typeof W == "object" && W !== null && W.$$typeof === e;
    }
    function Z(W) {
      return v(W) === u;
    }
    function V(W) {
      return v(W) === n;
    }
    function X(W) {
      return v(W) === d;
    }
    function G(W) {
      return v(W) === c;
    }
    function re(W) {
      return v(W) === t;
    }
    function ee(W) {
      return v(W) === i;
    }
    function Ee(W) {
      return v(W) === r;
    }
    function M(W) {
      return v(W) === s;
    }
    function Oe(W) {
      return v(W) === f;
    }
    ye.ContextConsumer = k, ye.ContextProvider = R, ye.Element = B, ye.ForwardRef = q, ye.Fragment = S, ye.Lazy = O, ye.Memo = z, ye.Portal = N, ye.Profiler = L, ye.StrictMode = U, ye.Suspense = Q, ye.SuspenseList = se, ye.isAsyncMode = h, ye.isConcurrentMode = D, ye.isContextConsumer = Y, ye.isContextProvider = b, ye.isElement = H, ye.isForwardRef = Z, ye.isFragment = V, ye.isLazy = X, ye.isMemo = G, ye.isPortal = re, ye.isProfiler = ee, ye.isStrictMode = Ee, ye.isSuspense = M, ye.isSuspenseList = Oe, ye.isValidElementType = _, ye.typeOf = v;
  })()), ye;
}
var Ri;
function Nc() {
  return Ri || (Ri = 1, process.env.NODE_ENV === "production" ? Gt.exports = jc() : Gt.exports = zc()), Gt.exports;
}
var Mc = Nc();
const Bc = /* @__PURE__ */ Lt(Mc);
function $c(e) {
  const t = (
    // @ts-expect-error looks like a node.
    e && typeof e == "object" && e.type === "text" ? (
      // @ts-expect-error looks like a text.
      e.value || ""
    ) : e
  );
  return typeof t == "string" && t.replace(/[ \t\n\f\r]/g, "") === "";
}
function Uc(e) {
  return e.join(" ").trim();
}
function qc(e, t) {
  const n = {};
  return (e[e.length - 1] === "" ? [...e, ""] : e).join(
    (n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " ")
  ).trim();
}
var Qt = { exports: {} }, Un, Oi;
function Hc() {
  if (Oi) return Un;
  Oi = 1;
  var e = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, t = /\n/g, n = /^\s*/, r = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, i = /^:\s*/, o = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, a = /^[;\s]*/, l = /^\s+|\s+$/g, u = `
`, s = "/", f = "*", c = "", d = "comment", p = "declaration";
  Un = function(g, y) {
    if (typeof g != "string")
      throw new TypeError("First argument must be a string");
    if (!g) return [];
    y = y || {};
    var x = 1, T = 1;
    function E(N) {
      var L = N.match(t);
      L && (x += L.length);
      var U = N.lastIndexOf(u);
      T = ~U ? N.length - U : T + N.length;
    }
    function _() {
      var N = { line: x, column: T };
      return function(L) {
        return L.position = new v(N), B(), L;
      };
    }
    function v(N) {
      this.start = N, this.end = { line: x, column: T }, this.source = y.source;
    }
    v.prototype.content = g;
    function k(N) {
      var L = new Error(
        y.source + ":" + x + ":" + T + ": " + N
      );
      if (L.reason = N, L.filename = y.source, L.line = x, L.column = T, L.source = g, !y.silent) throw L;
    }
    function R(N) {
      var L = N.exec(g);
      if (L) {
        var U = L[0];
        return E(U), g = g.slice(U.length), L;
      }
    }
    function B() {
      R(n);
    }
    function q(N) {
      var L;
      for (N = N || []; L = S(); )
        L !== !1 && N.push(L);
      return N;
    }
    function S() {
      var N = _();
      if (!(s != g.charAt(0) || f != g.charAt(1))) {
        for (var L = 2; c != g.charAt(L) && (f != g.charAt(L) || s != g.charAt(L + 1)); )
          ++L;
        if (L += 2, c === g.charAt(L - 1))
          return k("End of comment missing");
        var U = g.slice(2, L - 2);
        return T += 2, E(U), g = g.slice(L), T += 2, N({
          type: d,
          comment: U
        });
      }
    }
    function O() {
      var N = _(), L = R(r);
      if (L) {
        if (S(), !R(i)) return k("property missing ':'");
        var U = R(o), Q = N({
          type: p,
          property: m(L[0].replace(e, c)),
          value: U ? m(U[0].replace(e, c)) : c
        });
        return R(a), Q;
      }
    }
    function z() {
      var N = [];
      q(N);
      for (var L; L = O(); )
        L !== !1 && (N.push(L), q(N));
      return N;
    }
    return B(), z();
  };
  function m(g) {
    return g ? g.replace(l, c) : c;
  }
  return Un;
}
var Pi;
function Vc() {
  if (Pi) return Qt.exports;
  Pi = 1;
  var e = Hc();
  function t(n, r) {
    var i = null;
    if (!n || typeof n != "string")
      return i;
    for (var o, a = e(n), l = typeof r == "function", u, s, f = 0, c = a.length; f < c; f++)
      o = a[f], u = o.property, s = o.value, l ? r(u, s, o) : s && (i || (i = {}), i[u] = s);
    return i;
  }
  return Qt.exports = t, Qt.exports.default = t, Qt.exports;
}
var Wc = Vc();
const Yc = /* @__PURE__ */ Lt(Wc), or = {}.hasOwnProperty, Jc = /* @__PURE__ */ new Set(["table", "thead", "tbody", "tfoot", "tr"]);
function Ho(e, t) {
  const n = [];
  let r = -1, i;
  for (; ++r < t.children.length; )
    i = t.children[r], i.type === "element" ? n.push(Kc(e, i, r, t)) : i.type === "text" ? (t.type !== "element" || !Jc.has(t.tagName) || !$c(i)) && n.push(i.value) : i.type === "raw" && !e.options.skipHtml && n.push(i.value);
  return n;
}
function Kc(e, t, n, r) {
  const i = e.options, o = i.transformLinkUri === void 0 ? tl : i.transformLinkUri, a = e.schema, l = t.tagName, u = {};
  let s = a, f;
  if (a.space === "html" && l === "svg" && (s = Dc, e.schema = s), t.properties)
    for (f in t.properties)
      or.call(t.properties, f) && Gc(u, f, t.properties[f], e);
  (l === "ol" || l === "ul") && e.listDepth++;
  const c = Ho(e, t);
  (l === "ol" || l === "ul") && e.listDepth--, e.schema = a;
  const d = t.position || {
    start: { line: null, column: null, offset: null },
    end: { line: null, column: null, offset: null }
  }, p = i.components && or.call(i.components, l) ? i.components[l] : l, m = typeof p == "string" || p === je.Fragment;
  if (!Bc.isValidElementType(p))
    throw new TypeError(
      `Component for name \`${l}\` not defined or is not renderable`
    );
  if (u.key = n, l === "a" && i.linkTarget && (u.target = typeof i.linkTarget == "function" ? i.linkTarget(
    String(u.href || ""),
    t.children,
    typeof u.title == "string" ? u.title : null
  ) : i.linkTarget), l === "a" && o && (u.href = o(
    String(u.href || ""),
    t.children,
    typeof u.title == "string" ? u.title : null
  )), !m && l === "code" && r.type === "element" && r.tagName !== "pre" && (u.inline = !0), !m && (l === "h1" || l === "h2" || l === "h3" || l === "h4" || l === "h5" || l === "h6") && (u.level = Number.parseInt(l.charAt(1), 10)), l === "img" && i.transformImageUri && (u.src = i.transformImageUri(
    String(u.src || ""),
    String(u.alt || ""),
    typeof u.title == "string" ? u.title : null
  )), !m && l === "li" && r.type === "element") {
    const g = Xc(t);
    u.checked = g && g.properties ? !!g.properties.checked : null, u.index = qn(r, t), u.ordered = r.tagName === "ol";
  }
  return !m && (l === "ol" || l === "ul") && (u.ordered = l === "ol", u.depth = e.listDepth), (l === "td" || l === "th") && (u.align && (u.style || (u.style = {}), u.style.textAlign = u.align, delete u.align), m || (u.isHeader = l === "th")), !m && l === "tr" && r.type === "element" && (u.isHeader = r.tagName === "thead"), i.sourcePos && (u["data-sourcepos"] = ef(d)), !m && i.rawSourcePos && (u.sourcePosition = t.position), !m && i.includeElementIndex && (u.index = qn(r, t), u.siblingCount = qn(r)), m || (u.node = t), c.length > 0 ? je.createElement(p, u, c) : je.createElement(p, u);
}
function Xc(e) {
  let t = -1;
  for (; ++t < e.children.length; ) {
    const n = e.children[t];
    if (n.type === "element" && n.tagName === "input")
      return n;
  }
  return null;
}
function qn(e, t) {
  let n = -1, r = 0;
  for (; ++n < e.children.length && e.children[n] !== t; )
    e.children[n].type === "element" && r++;
  return r;
}
function Gc(e, t, n, r) {
  const i = Pc(r.schema, t);
  let o = n;
  o == null || o !== o || (Array.isArray(o) && (o = i.commaSeparated ? qc(o) : Uc(o)), i.property === "style" && typeof o == "string" && (o = Qc(o)), i.space && i.property ? e[or.call(Ci, i.property) ? Ci[i.property] : i.property] = o : i.attribute && (e[i.attribute] = o));
}
function Qc(e) {
  const t = {};
  try {
    Yc(e, n);
  } catch {
  }
  return t;
  function n(r, i) {
    const o = r.slice(0, 4) === "-ms-" ? `ms-${r.slice(4)}` : r;
    t[o.replace(/-([a-z])/g, Zc)] = i;
  }
}
function Zc(e, t) {
  return t.toUpperCase();
}
function ef(e) {
  return [
    e.start.line,
    ":",
    e.start.column,
    "-",
    e.end.line,
    ":",
    e.end.column
  ].map(String).join("");
}
const _i = {}.hasOwnProperty, tf = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", Zt = {
  plugins: { to: "remarkPlugins", id: "change-plugins-to-remarkplugins" },
  renderers: { to: "components", id: "change-renderers-to-components" },
  astPlugins: { id: "remove-buggy-html-in-markdown-parser" },
  allowDangerousHtml: { id: "remove-buggy-html-in-markdown-parser" },
  escapeHtml: { id: "remove-buggy-html-in-markdown-parser" },
  source: { to: "children", id: "change-source-to-children" },
  allowNode: {
    to: "allowElement",
    id: "replace-allownode-allowedtypes-and-disallowedtypes"
  },
  allowedTypes: {
    to: "allowedElements",
    id: "replace-allownode-allowedtypes-and-disallowedtypes"
  },
  disallowedTypes: {
    to: "disallowedElements",
    id: "replace-allownode-allowedtypes-and-disallowedtypes"
  },
  includeNodeIndex: {
    to: "includeElementIndex",
    id: "change-includenodeindex-to-includeelementindex"
  }
};
function Vo(e) {
  for (const o in Zt)
    if (_i.call(Zt, o) && _i.call(e, o)) {
      const a = Zt[o];
      console.warn(
        `[react-markdown] Warning: please ${a.to ? `use \`${a.to}\` instead of` : "remove"} \`${o}\` (see <${tf}#${a.id}> for more info)`
      ), delete Zt[o];
    }
  const t = wl().use(Eu).use(e.remarkPlugins || []).use(hc, {
    ...e.remarkRehypeOptions,
    allowDangerousHtml: !0
  }).use(e.rehypePlugins || []).use(Lc, e), n = new so();
  typeof e.children == "string" ? n.value = e.children : e.children !== void 0 && e.children !== null && console.warn(
    `[react-markdown] Warning: please pass a string as \`children\` (not: \`${e.children}\`)`
  );
  const r = t.runSync(t.parse(n), n);
  if (r.type !== "root")
    throw new TypeError("Expected a `root` node");
  let i = je.createElement(
    je.Fragment,
    {},
    Ho({ options: e, schema: Ic, listDepth: 0 }, r)
  );
  return e.className && (i = je.createElement("div", { className: e.className }, i)), i;
}
Vo.propTypes = {
  // Core options:
  children: ne.string,
  // Layout options:
  className: ne.string,
  // Filter options:
  allowElement: ne.func,
  allowedElements: ne.arrayOf(ne.string),
  disallowedElements: ne.arrayOf(ne.string),
  unwrapDisallowed: ne.bool,
  // Plugin options:
  remarkPlugins: ne.arrayOf(
    ne.oneOfType([
      ne.object,
      ne.func,
      ne.arrayOf(
        ne.oneOfType([
          ne.bool,
          ne.string,
          ne.object,
          ne.func,
          ne.arrayOf(
            // prettier-ignore
            // type-coverage:ignore-next-line
            ne.any
          )
        ])
      )
    ])
  ),
  rehypePlugins: ne.arrayOf(
    ne.oneOfType([
      ne.object,
      ne.func,
      ne.arrayOf(
        ne.oneOfType([
          ne.bool,
          ne.string,
          ne.object,
          ne.func,
          ne.arrayOf(
            // prettier-ignore
            // type-coverage:ignore-next-line
            ne.any
          )
        ])
      )
    ])
  ),
  // Transform options:
  sourcePos: ne.bool,
  rawSourcePos: ne.bool,
  skipHtml: ne.bool,
  includeElementIndex: ne.bool,
  transformLinkUri: ne.oneOfType([ne.func, ne.bool]),
  linkTarget: ne.oneOfType([ne.func, ne.string]),
  transformImageUri: ne.func,
  components: ne.object
};
const nf = {
  tokenize: uf,
  partial: !0
}, Wo = {
  tokenize: cf,
  partial: !0
}, Yo = {
  tokenize: ff,
  partial: !0
}, Jo = {
  tokenize: pf,
  partial: !0
}, rf = {
  tokenize: hf,
  partial: !0
}, Ko = {
  tokenize: lf,
  previous: Go
}, Xo = {
  tokenize: sf,
  previous: Qo
}, rt = {
  tokenize: af,
  previous: Zo
}, nt = {}, of = {
  text: nt
};
let ft = 48;
for (; ft < 123; )
  nt[ft] = rt, ft++, ft === 58 ? ft = 65 : ft === 91 && (ft = 97);
nt[43] = rt;
nt[45] = rt;
nt[46] = rt;
nt[95] = rt;
nt[72] = [rt, Xo];
nt[104] = [rt, Xo];
nt[87] = [rt, Ko];
nt[119] = [rt, Ko];
function af(e, t, n) {
  const r = this;
  let i, o;
  return a;
  function a(c) {
    return !ar(c) || !Zo.call(r, r.previous) || Er(r.events) ? n(c) : (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), l(c));
  }
  function l(c) {
    return ar(c) ? (e.consume(c), l) : c === 64 ? (e.consume(c), u) : n(c);
  }
  function u(c) {
    return c === 46 ? e.check(
      rf,
      f,
      s
    )(c) : c === 45 || c === 95 || _e(c) ? (o = !0, e.consume(c), u) : f(c);
  }
  function s(c) {
    return e.consume(c), i = !0, u;
  }
  function f(c) {
    return o && i && Ie(r.previous) ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), t(c)) : n(c);
  }
}
function lf(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return a !== 87 && a !== 119 || !Go.call(r, r.previous) || Er(r.events) ? n(a) : (e.enter("literalAutolink"), e.enter("literalAutolinkWww"), e.check(
      nf,
      e.attempt(Wo, e.attempt(Yo, o), n),
      n
    )(a));
  }
  function o(a) {
    return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(a);
  }
}
function sf(e, t, n) {
  const r = this;
  let i = "", o = !1;
  return a;
  function a(c) {
    return (c === 72 || c === 104) && Qo.call(r, r.previous) && !Er(r.events) ? (e.enter("literalAutolink"), e.enter("literalAutolinkHttp"), i += String.fromCodePoint(c), e.consume(c), l) : n(c);
  }
  function l(c) {
    if (Ie(c) && i.length < 5)
      return i += String.fromCodePoint(c), e.consume(c), l;
    if (c === 58) {
      const d = i.toLowerCase();
      if (d === "http" || d === "https")
        return e.consume(c), u;
    }
    return n(c);
  }
  function u(c) {
    return c === 47 ? (e.consume(c), o ? s : (o = !0, u)) : n(c);
  }
  function s(c) {
    return c === null || ln(c) || xe(c) || dt(c) || fn(c) ? n(c) : e.attempt(Wo, e.attempt(Yo, f), n)(c);
  }
  function f(c) {
    return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(c);
  }
}
function uf(e, t, n) {
  let r = 0;
  return i;
  function i(a) {
    return (a === 87 || a === 119) && r < 3 ? (r++, e.consume(a), i) : a === 46 && r === 3 ? (e.consume(a), o) : n(a);
  }
  function o(a) {
    return a === null ? n(a) : t(a);
  }
}
function cf(e, t, n) {
  let r, i, o;
  return a;
  function a(s) {
    return s === 46 || s === 95 ? e.check(Jo, u, l)(s) : s === null || xe(s) || dt(s) || s !== 45 && fn(s) ? u(s) : (o = !0, e.consume(s), a);
  }
  function l(s) {
    return s === 95 ? r = !0 : (i = r, r = void 0), e.consume(s), a;
  }
  function u(s) {
    return i || r || !o ? n(s) : t(s);
  }
}
function ff(e, t) {
  let n = 0, r = 0;
  return i;
  function i(a) {
    return a === 40 ? (n++, e.consume(a), i) : a === 41 && r < n ? o(a) : a === 33 || a === 34 || a === 38 || a === 39 || a === 41 || a === 42 || a === 44 || a === 46 || a === 58 || a === 59 || a === 60 || a === 63 || a === 93 || a === 95 || a === 126 ? e.check(Jo, t, o)(a) : a === null || xe(a) || dt(a) ? t(a) : (e.consume(a), i);
  }
  function o(a) {
    return a === 41 && r++, e.consume(a), i;
  }
}
function pf(e, t, n) {
  return r;
  function r(l) {
    return l === 33 || l === 34 || l === 39 || l === 41 || l === 42 || l === 44 || l === 46 || l === 58 || l === 59 || l === 63 || l === 95 || l === 126 ? (e.consume(l), r) : l === 38 ? (e.consume(l), o) : l === 93 ? (e.consume(l), i) : (
      // `<` is an end.
      l === 60 || // So is whitespace.
      l === null || xe(l) || dt(l) ? t(l) : n(l)
    );
  }
  function i(l) {
    return l === null || l === 40 || l === 91 || xe(l) || dt(l) ? t(l) : r(l);
  }
  function o(l) {
    return Ie(l) ? a(l) : n(l);
  }
  function a(l) {
    return l === 59 ? (e.consume(l), r) : Ie(l) ? (e.consume(l), a) : n(l);
  }
}
function hf(e, t, n) {
  return r;
  function r(o) {
    return e.consume(o), i;
  }
  function i(o) {
    return _e(o) ? n(o) : t(o);
  }
}
function Go(e) {
  return e === null || e === 40 || e === 42 || e === 95 || e === 91 || e === 93 || e === 126 || xe(e);
}
function Qo(e) {
  return !Ie(e);
}
function Zo(e) {
  return !(e === 47 || ar(e));
}
function ar(e) {
  return e === 43 || e === 45 || e === 46 || e === 95 || _e(e);
}
function Er(e) {
  let t = e.length, n = !1;
  for (; t--; ) {
    const r = e[t][1];
    if ((r.type === "labelLink" || r.type === "labelImage") && !r._balanced) {
      n = !0;
      break;
    }
    if (r._gfmAutolinkLiteralWalkedInto) {
      n = !1;
      break;
    }
  }
  return e.length > 0 && !n && (e[e.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0), n;
}
const df = {
  tokenize: vf,
  partial: !0
};
function mf() {
  return {
    document: {
      91: {
        tokenize: wf,
        continuation: {
          tokenize: xf
        },
        exit: kf
      }
    },
    text: {
      91: {
        tokenize: bf
      },
      93: {
        add: "after",
        tokenize: gf,
        resolveTo: yf
      }
    }
  };
}
function gf(e, t, n) {
  const r = this;
  let i = r.events.length;
  const o = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let a;
  for (; i--; ) {
    const u = r.events[i][1];
    if (u.type === "labelImage") {
      a = u;
      break;
    }
    if (u.type === "gfmFootnoteCall" || u.type === "labelLink" || u.type === "label" || u.type === "image" || u.type === "link")
      break;
  }
  return l;
  function l(u) {
    if (!a || !a._balanced)
      return n(u);
    const s = Xe(
      r.sliceSerialize({
        start: a.end,
        end: r.now()
      })
    );
    return s.codePointAt(0) !== 94 || !o.includes(s.slice(1)) ? n(u) : (e.enter("gfmFootnoteCallLabelMarker"), e.consume(u), e.exit("gfmFootnoteCallLabelMarker"), t(u));
  }
}
function yf(e, t) {
  let n = e.length;
  for (; n--; )
    if (e[n][1].type === "labelImage" && e[n][0] === "enter") {
      e[n][1];
      break;
    }
  e[n + 1][1].type = "data", e[n + 3][1].type = "gfmFootnoteCallLabelMarker";
  const r = {
    type: "gfmFootnoteCall",
    start: Object.assign({}, e[n + 3][1].start),
    end: Object.assign({}, e[e.length - 1][1].end)
  }, i = {
    type: "gfmFootnoteCallMarker",
    start: Object.assign({}, e[n + 3][1].end),
    end: Object.assign({}, e[n + 3][1].end)
  };
  i.end.column++, i.end.offset++, i.end._bufferIndex++;
  const o = {
    type: "gfmFootnoteCallString",
    start: Object.assign({}, i.end),
    end: Object.assign({}, e[e.length - 1][1].start)
  }, a = {
    type: "chunkString",
    contentType: "string",
    start: Object.assign({}, o.start),
    end: Object.assign({}, o.end)
  }, l = [
    // Take the `labelImageMarker` (now `data`, the `!`)
    e[n + 1],
    e[n + 2],
    ["enter", r, t],
    // The `[`
    e[n + 3],
    e[n + 4],
    // The `^`.
    ["enter", i, t],
    ["exit", i, t],
    // Everything in between.
    ["enter", o, t],
    ["enter", a, t],
    ["exit", a, t],
    ["exit", o, t],
    // The ending (`]`, properly parsed and labelled).
    e[e.length - 2],
    e[e.length - 1],
    ["exit", r, t]
  ];
  return e.splice(n, e.length - n + 1, ...l), e;
}
function bf(e, t, n) {
  const r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let o = 0, a;
  return l;
  function l(c) {
    return e.enter("gfmFootnoteCall"), e.enter("gfmFootnoteCallLabelMarker"), e.consume(c), e.exit("gfmFootnoteCallLabelMarker"), u;
  }
  function u(c) {
    return c !== 94 ? n(c) : (e.enter("gfmFootnoteCallMarker"), e.consume(c), e.exit("gfmFootnoteCallMarker"), e.enter("gfmFootnoteCallString"), e.enter("chunkString").contentType = "string", s);
  }
  function s(c) {
    if (
      // Too long.
      o > 999 || // Closing brace with nothing.
      c === 93 && !a || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      c === null || c === 91 || xe(c)
    )
      return n(c);
    if (c === 93) {
      e.exit("chunkString");
      const d = e.exit("gfmFootnoteCallString");
      return i.includes(Xe(r.sliceSerialize(d))) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(c), e.exit("gfmFootnoteCallLabelMarker"), e.exit("gfmFootnoteCall"), t) : n(c);
    }
    return xe(c) || (a = !0), o++, e.consume(c), c === 92 ? f : s;
  }
  function f(c) {
    return c === 91 || c === 92 || c === 93 ? (e.consume(c), o++, s) : s(c);
  }
}
function wf(e, t, n) {
  const r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let o, a = 0, l;
  return u;
  function u(m) {
    return e.enter("gfmFootnoteDefinition")._container = !0, e.enter("gfmFootnoteDefinitionLabel"), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(m), e.exit("gfmFootnoteDefinitionLabelMarker"), s;
  }
  function s(m) {
    return m === 94 ? (e.enter("gfmFootnoteDefinitionMarker"), e.consume(m), e.exit("gfmFootnoteDefinitionMarker"), e.enter("gfmFootnoteDefinitionLabelString"), e.enter("chunkString").contentType = "string", f) : n(m);
  }
  function f(m) {
    if (
      // Too long.
      a > 999 || // Closing brace with nothing.
      m === 93 && !l || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      m === null || m === 91 || xe(m)
    )
      return n(m);
    if (m === 93) {
      e.exit("chunkString");
      const g = e.exit("gfmFootnoteDefinitionLabelString");
      return o = Xe(r.sliceSerialize(g)), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(m), e.exit("gfmFootnoteDefinitionLabelMarker"), e.exit("gfmFootnoteDefinitionLabel"), d;
    }
    return xe(m) || (l = !0), a++, e.consume(m), m === 92 ? c : f;
  }
  function c(m) {
    return m === 91 || m === 92 || m === 93 ? (e.consume(m), a++, f) : f(m);
  }
  function d(m) {
    return m === 58 ? (e.enter("definitionMarker"), e.consume(m), e.exit("definitionMarker"), i.includes(o) || i.push(o), ce(
      e,
      p,
      "gfmFootnoteDefinitionWhitespace"
    )) : n(m);
  }
  function p(m) {
    return t(m);
  }
}
function xf(e, t, n) {
  return e.check(zt, t, e.attempt(df, t, n));
}
function kf(e) {
  e.exit("gfmFootnoteDefinition");
}
function vf(e, t, n) {
  const r = this;
  return ce(
    e,
    i,
    "gfmFootnoteDefinitionIndent",
    5
  );
  function i(o) {
    const a = r.events[r.events.length - 1];
    return a && a[1].type === "gfmFootnoteDefinitionIndent" && a[2].sliceSerialize(a[1], !0).length === 4 ? t(o) : n(o);
  }
}
function Sf(e) {
  let n = (e || {}).singleTilde;
  const r = {
    tokenize: o,
    resolveAll: i
  };
  return n == null && (n = !0), {
    text: {
      126: r
    },
    insideSpan: {
      null: [r]
    },
    attentionMarkers: {
      null: [126]
    }
  };
  function i(a, l) {
    let u = -1;
    for (; ++u < a.length; )
      if (a[u][0] === "enter" && a[u][1].type === "strikethroughSequenceTemporary" && a[u][1]._close) {
        let s = u;
        for (; s--; )
          if (a[s][0] === "exit" && a[s][1].type === "strikethroughSequenceTemporary" && a[s][1]._open && // If the sizes are the same:
          a[u][1].end.offset - a[u][1].start.offset === a[s][1].end.offset - a[s][1].start.offset) {
            a[u][1].type = "strikethroughSequence", a[s][1].type = "strikethroughSequence";
            const f = {
              type: "strikethrough",
              start: Object.assign({}, a[s][1].start),
              end: Object.assign({}, a[u][1].end)
            }, c = {
              type: "strikethroughText",
              start: Object.assign({}, a[s][1].end),
              end: Object.assign({}, a[u][1].start)
            }, d = [
              ["enter", f, l],
              ["enter", a[s][1], l],
              ["exit", a[s][1], l],
              ["enter", c, l]
            ], p = l.parser.constructs.insideSpan.null;
            p && qe(
              d,
              d.length,
              0,
              pn(p, a.slice(s + 1, u), l)
            ), qe(d, d.length, 0, [
              ["exit", c, l],
              ["enter", a[u][1], l],
              ["exit", a[u][1], l],
              ["exit", f, l]
            ]), qe(a, s - 1, u - s + 3, d), u = s + d.length - 2;
            break;
          }
      }
    for (u = -1; ++u < a.length; )
      a[u][1].type === "strikethroughSequenceTemporary" && (a[u][1].type = "data");
    return a;
  }
  function o(a, l, u) {
    const s = this.previous, f = this.events;
    let c = 0;
    return d;
    function d(m) {
      return s === 126 && f[f.length - 1][1].type !== "characterEscape" ? u(m) : (a.enter("strikethroughSequenceTemporary"), p(m));
    }
    function p(m) {
      const g = sn(s);
      if (m === 126)
        return c > 1 ? u(m) : (a.consume(m), c++, p);
      if (c < 2 && !n) return u(m);
      const y = a.exit("strikethroughSequenceTemporary"), x = sn(m);
      return y._open = !x || x === 2 && !!g, y._close = !g || g === 2 && !!x, l(m);
    }
  }
}
class Ef {
  /**
   * Create a new edit map.
   */
  constructor() {
    this.map = [];
  }
  /**
   * Create an edit: a remove and/or add at a certain place.
   *
   * @param {number} index
   * @param {number} remove
   * @param {Array<Event>} add
   * @returns {void}
   */
  add(t, n, r) {
    Cf(this, t, n, r);
  }
  // To do: not used here.
  // /**
  //  * Create an edit: but insert `add` before existing additions.
  //  *
  //  * @param {number} index
  //  * @param {number} remove
  //  * @param {Array<Event>} add
  //  * @returns {void}
  //  */
  // addBefore(index, remove, add) {
  //   addImpl(this, index, remove, add, true)
  // }
  /**
   * Done, change the events.
   *
   * @param {Array<Event>} events
   * @returns {void}
   */
  consume(t) {
    if (this.map.sort((o, a) => o[0] - a[0]), this.map.length === 0)
      return;
    let n = this.map.length;
    const r = [];
    for (; n > 0; )
      n -= 1, r.push(t.slice(this.map[n][0] + this.map[n][1])), r.push(this.map[n][2]), t.length = this.map[n][0];
    r.push([...t]), t.length = 0;
    let i = r.pop();
    for (; i; )
      t.push(...i), i = r.pop();
    this.map.length = 0;
  }
}
function Cf(e, t, n, r) {
  let i = 0;
  if (!(n === 0 && r.length === 0)) {
    for (; i < e.map.length; ) {
      if (e.map[i][0] === t) {
        e.map[i][1] += n, e.map[i][2].push(...r);
        return;
      }
      i += 1;
    }
    e.map.push([t, n, r]);
  }
}
function Tf(e, t) {
  let n = !1;
  const r = [];
  for (; t < e.length; ) {
    const i = e[t];
    if (n) {
      if (i[0] === "enter")
        i[1].type === "tableContent" && r.push(
          e[t + 1][1].type === "tableDelimiterMarker" ? "left" : "none"
        );
      else if (i[1].type === "tableContent") {
        if (e[t - 1][1].type === "tableDelimiterMarker") {
          const o = r.length - 1;
          r[o] = r[o] === "left" ? "center" : "right";
        }
      } else if (i[1].type === "tableDelimiterRow")
        break;
    } else i[0] === "enter" && i[1].type === "tableDelimiterRow" && (n = !0);
    t += 1;
  }
  return r;
}
const Af = {
  flow: {
    null: {
      tokenize: Rf,
      resolveAll: Of
    }
  }
};
function Rf(e, t, n) {
  const r = this;
  let i = 0, o = 0, a;
  return l;
  function l(S) {
    let O = r.events.length - 1;
    for (; O > -1; ) {
      const L = r.events[O][1].type;
      if (L === "lineEnding" || // Note: markdown-rs uses `whitespace` instead of `linePrefix`
      L === "linePrefix")
        O--;
      else break;
    }
    const z = O > -1 ? r.events[O][1].type : null, N = z === "tableHead" || z === "tableRow" ? k : u;
    return N === k && r.parser.lazy[r.now().line] ? n(S) : N(S);
  }
  function u(S) {
    return e.enter("tableHead"), e.enter("tableRow"), s(S);
  }
  function s(S) {
    return S === 124 || (a = !0, o += 1), f(S);
  }
  function f(S) {
    return S === null ? n(S) : J(S) ? o > 1 ? (o = 0, r.interrupt = !0, e.exit("tableRow"), e.enter("lineEnding"), e.consume(S), e.exit("lineEnding"), p) : n(S) : ae(S) ? ce(e, f, "whitespace")(S) : (o += 1, a && (a = !1, i += 1), S === 124 ? (e.enter("tableCellDivider"), e.consume(S), e.exit("tableCellDivider"), a = !0, f) : (e.enter("data"), c(S)));
  }
  function c(S) {
    return S === null || S === 124 || xe(S) ? (e.exit("data"), f(S)) : (e.consume(S), S === 92 ? d : c);
  }
  function d(S) {
    return S === 92 || S === 124 ? (e.consume(S), c) : c(S);
  }
  function p(S) {
    return r.interrupt = !1, r.parser.lazy[r.now().line] ? n(S) : (e.enter("tableDelimiterRow"), a = !1, ae(S) ? ce(
      e,
      m,
      "linePrefix",
      r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
    )(S) : m(S));
  }
  function m(S) {
    return S === 45 || S === 58 ? y(S) : S === 124 ? (a = !0, e.enter("tableCellDivider"), e.consume(S), e.exit("tableCellDivider"), g) : v(S);
  }
  function g(S) {
    return ae(S) ? ce(e, y, "whitespace")(S) : y(S);
  }
  function y(S) {
    return S === 58 ? (o += 1, a = !0, e.enter("tableDelimiterMarker"), e.consume(S), e.exit("tableDelimiterMarker"), x) : S === 45 ? (o += 1, x(S)) : S === null || J(S) ? _(S) : v(S);
  }
  function x(S) {
    return S === 45 ? (e.enter("tableDelimiterFiller"), T(S)) : v(S);
  }
  function T(S) {
    return S === 45 ? (e.consume(S), T) : S === 58 ? (a = !0, e.exit("tableDelimiterFiller"), e.enter("tableDelimiterMarker"), e.consume(S), e.exit("tableDelimiterMarker"), E) : (e.exit("tableDelimiterFiller"), E(S));
  }
  function E(S) {
    return ae(S) ? ce(e, _, "whitespace")(S) : _(S);
  }
  function _(S) {
    return S === 124 ? m(S) : S === null || J(S) ? !a || i !== o ? v(S) : (e.exit("tableDelimiterRow"), e.exit("tableHead"), t(S)) : v(S);
  }
  function v(S) {
    return n(S);
  }
  function k(S) {
    return e.enter("tableRow"), R(S);
  }
  function R(S) {
    return S === 124 ? (e.enter("tableCellDivider"), e.consume(S), e.exit("tableCellDivider"), R) : S === null || J(S) ? (e.exit("tableRow"), t(S)) : ae(S) ? ce(e, R, "whitespace")(S) : (e.enter("data"), B(S));
  }
  function B(S) {
    return S === null || S === 124 || xe(S) ? (e.exit("data"), R(S)) : (e.consume(S), S === 92 ? q : B);
  }
  function q(S) {
    return S === 92 || S === 124 ? (e.consume(S), B) : B(S);
  }
}
function Of(e, t) {
  let n = -1, r = !0, i = 0, o = [0, 0, 0, 0], a = [0, 0, 0, 0], l = !1, u = 0, s, f, c;
  const d = new Ef();
  for (; ++n < e.length; ) {
    const p = e[n], m = p[1];
    p[0] === "enter" ? m.type === "tableHead" ? (l = !1, u !== 0 && (Fi(d, t, u, s, f), f = void 0, u = 0), s = {
      type: "table",
      start: Object.assign({}, m.start),
      // Note: correct end is set later.
      end: Object.assign({}, m.end)
    }, d.add(n, 0, [["enter", s, t]])) : m.type === "tableRow" || m.type === "tableDelimiterRow" ? (r = !0, c = void 0, o = [0, 0, 0, 0], a = [0, n + 1, 0, 0], l && (l = !1, f = {
      type: "tableBody",
      start: Object.assign({}, m.start),
      // Note: correct end is set later.
      end: Object.assign({}, m.end)
    }, d.add(n, 0, [["enter", f, t]])), i = m.type === "tableDelimiterRow" ? 2 : f ? 3 : 1) : i && (m.type === "data" || m.type === "tableDelimiterMarker" || m.type === "tableDelimiterFiller") ? (r = !1, a[2] === 0 && (o[1] !== 0 && (a[0] = a[1], c = en(
      d,
      t,
      o,
      i,
      void 0,
      c
    ), o = [0, 0, 0, 0]), a[2] = n)) : m.type === "tableCellDivider" && (r ? r = !1 : (o[1] !== 0 && (a[0] = a[1], c = en(
      d,
      t,
      o,
      i,
      void 0,
      c
    )), o = a, a = [o[1], n, 0, 0])) : m.type === "tableHead" ? (l = !0, u = n) : m.type === "tableRow" || m.type === "tableDelimiterRow" ? (u = n, o[1] !== 0 ? (a[0] = a[1], c = en(
      d,
      t,
      o,
      i,
      n,
      c
    )) : a[1] !== 0 && (c = en(d, t, a, i, n, c)), i = 0) : i && (m.type === "data" || m.type === "tableDelimiterMarker" || m.type === "tableDelimiterFiller") && (a[3] = n);
  }
  for (u !== 0 && Fi(d, t, u, s, f), d.consume(t.events), n = -1; ++n < t.events.length; ) {
    const p = t.events[n];
    p[0] === "enter" && p[1].type === "table" && (p[1]._align = Tf(t.events, n));
  }
  return e;
}
function en(e, t, n, r, i, o) {
  const a = r === 1 ? "tableHeader" : r === 2 ? "tableDelimiter" : "tableData", l = "tableContent";
  n[0] !== 0 && (o.end = Object.assign({}, xt(t.events, n[0])), e.add(n[0], 0, [["exit", o, t]]));
  const u = xt(t.events, n[1]);
  if (o = {
    type: a,
    start: Object.assign({}, u),
    // Note: correct end is set later.
    end: Object.assign({}, u)
  }, e.add(n[1], 0, [["enter", o, t]]), n[2] !== 0) {
    const s = xt(t.events, n[2]), f = xt(t.events, n[3]), c = {
      type: l,
      start: Object.assign({}, s),
      end: Object.assign({}, f)
    };
    if (e.add(n[2], 0, [["enter", c, t]]), r !== 2) {
      const d = t.events[n[2]], p = t.events[n[3]];
      if (d[1].end = Object.assign({}, p[1].end), d[1].type = "chunkText", d[1].contentType = "text", n[3] > n[2] + 1) {
        const m = n[2] + 1, g = n[3] - n[2] - 1;
        e.add(m, g, []);
      }
    }
    e.add(n[3] + 1, 0, [["exit", c, t]]);
  }
  return i !== void 0 && (o.end = Object.assign({}, xt(t.events, i)), e.add(i, 0, [["exit", o, t]]), o = void 0), o;
}
function Fi(e, t, n, r, i) {
  const o = [], a = xt(t.events, n);
  i && (i.end = Object.assign({}, a), o.push(["exit", i, t])), r.end = Object.assign({}, a), o.push(["exit", r, t]), e.add(n + 1, 0, o);
}
function xt(e, t) {
  const n = e[t], r = n[0] === "enter" ? "start" : "end";
  return n[1][r];
}
const Pf = {
  tokenize: Ff
}, _f = {
  text: {
    91: Pf
  }
};
function Ff(e, t, n) {
  const r = this;
  return i;
  function i(u) {
    return (
      // Exit if there’s stuff before.
      r.previous !== null || // Exit if not in the first content that is the first child of a list
      // item.
      !r._gfmTasklistFirstContentOfListItem ? n(u) : (e.enter("taskListCheck"), e.enter("taskListCheckMarker"), e.consume(u), e.exit("taskListCheckMarker"), o)
    );
  }
  function o(u) {
    return xe(u) ? (e.enter("taskListCheckValueUnchecked"), e.consume(u), e.exit("taskListCheckValueUnchecked"), a) : u === 88 || u === 120 ? (e.enter("taskListCheckValueChecked"), e.consume(u), e.exit("taskListCheckValueChecked"), a) : n(u);
  }
  function a(u) {
    return u === 93 ? (e.enter("taskListCheckMarker"), e.consume(u), e.exit("taskListCheckMarker"), e.exit("taskListCheck"), l) : n(u);
  }
  function l(u) {
    return J(u) ? t(u) : ae(u) ? e.check(
      {
        tokenize: If
      },
      t,
      n
    )(u) : n(u);
  }
}
function If(e, t, n) {
  return ce(e, r, "whitespace");
  function r(i) {
    return i === null ? n(i) : t(i);
  }
}
function Df(e) {
  return po([
    of,
    mf(),
    Sf(e),
    Af,
    _f
  ]);
}
function Ii(e, t) {
  const n = String(e);
  if (typeof t != "string")
    throw new TypeError("Expected character");
  let r = 0, i = n.indexOf(t);
  for (; i !== -1; )
    r++, i = n.indexOf(t, i + t.length);
  return r;
}
function Lf(e) {
  if (typeof e != "string")
    throw new TypeError("Expected a string");
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
const jf = {}.hasOwnProperty, zf = (
  /**
   * @type {(
   *   (<Tree extends Node>(tree: Tree, find: Find, replace?: Replace | null | undefined, options?: Options | null | undefined) => Tree) &
   *   (<Tree extends Node>(tree: Tree, schema: FindAndReplaceSchema | FindAndReplaceList, options?: Options | null | undefined) => Tree)
   * )}
   **/
  /**
   * @template {Node} Tree
   * @param {Tree} tree
   * @param {Find | FindAndReplaceSchema | FindAndReplaceList} find
   * @param {Replace | Options | null | undefined} [replace]
   * @param {Options | null | undefined} [options]
   * @returns {Tree}
   */
  (function(e, t, n, r) {
    let i, o;
    typeof t == "string" || t instanceof RegExp ? (o = [[t, n]], i = r) : (o = t, i = n), i || (i = {});
    const a = wr(i.ignore || []), l = Nf(o);
    let u = -1;
    for (; ++u < l.length; )
      _o(e, "text", s);
    return e;
    function s(c, d) {
      let p = -1, m;
      for (; ++p < d.length; ) {
        const g = d[p];
        if (a(
          g,
          // @ts-expect-error: TS doesn’t understand but it’s perfect.
          m ? m.children.indexOf(g) : void 0,
          m
        ))
          return;
        m = g;
      }
      if (m)
        return f(c, d);
    }
    function f(c, d) {
      const p = d[d.length - 1], m = l[u][0], g = l[u][1];
      let y = 0;
      const x = p.children.indexOf(c);
      let T = !1, E = [];
      m.lastIndex = 0;
      let _ = m.exec(c.value);
      for (; _; ) {
        const v = _.index, k = {
          index: _.index,
          input: _.input,
          // @ts-expect-error: stack is fine.
          stack: [...d, c]
        };
        let R = g(..._, k);
        if (typeof R == "string" && (R = R.length > 0 ? { type: "text", value: R } : void 0), R !== !1 && (y !== v && E.push({
          type: "text",
          value: c.value.slice(y, v)
        }), Array.isArray(R) ? E.push(...R) : R && E.push(R), y = v + _[0].length, T = !0), !m.global)
          break;
        _ = m.exec(c.value);
      }
      return T ? (y < c.value.length && E.push({ type: "text", value: c.value.slice(y) }), p.children.splice(x, 1, ...E)) : E = [c], x + E.length;
    }
  })
);
function Nf(e) {
  const t = [];
  if (typeof e != "object")
    throw new TypeError("Expected array or object as schema");
  if (Array.isArray(e)) {
    let n = -1;
    for (; ++n < e.length; )
      t.push([
        Di(e[n][0]),
        Li(e[n][1])
      ]);
  } else {
    let n;
    for (n in e)
      jf.call(e, n) && t.push([Di(n), Li(e[n])]);
  }
  return t;
}
function Di(e) {
  return typeof e == "string" ? new RegExp(Lf(e), "g") : e;
}
function Li(e) {
  return typeof e == "function" ? e : () => e;
}
const Hn = "phrasing", Vn = ["autolink", "link", "image", "label"], Mf = {
  transforms: [Wf],
  enter: {
    literalAutolink: $f,
    literalAutolinkEmail: Wn,
    literalAutolinkHttp: Wn,
    literalAutolinkWww: Wn
  },
  exit: {
    literalAutolink: Vf,
    literalAutolinkEmail: Hf,
    literalAutolinkHttp: Uf,
    literalAutolinkWww: qf
  }
}, Bf = {
  unsafe: [
    {
      character: "@",
      before: "[+\\-.\\w]",
      after: "[\\-.\\w]",
      inConstruct: Hn,
      notInConstruct: Vn
    },
    {
      character: ".",
      before: "[Ww]",
      after: "[\\-.\\w]",
      inConstruct: Hn,
      notInConstruct: Vn
    },
    { character: ":", before: "[ps]", after: "\\/", inConstruct: Hn, notInConstruct: Vn }
  ]
};
function $f(e) {
  this.enter({ type: "link", title: null, url: "", children: [] }, e);
}
function Wn(e) {
  this.config.enter.autolinkProtocol.call(this, e);
}
function Uf(e) {
  this.config.exit.autolinkProtocol.call(this, e);
}
function qf(e) {
  this.config.exit.data.call(this, e);
  const t = (
    /** @type {Link} */
    this.stack[this.stack.length - 1]
  );
  t.url = "http://" + this.sliceSerialize(e);
}
function Hf(e) {
  this.config.exit.autolinkEmail.call(this, e);
}
function Vf(e) {
  this.exit(e);
}
function Wf(e) {
  zf(
    e,
    [
      [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, Yf],
      [/([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/g, Jf]
    ],
    { ignore: ["link", "linkReference"] }
  );
}
function Yf(e, t, n, r, i) {
  let o = "";
  if (!ea(i) || (/^w/i.test(t) && (n = t + n, t = "", o = "http://"), !Kf(n)))
    return !1;
  const a = Xf(n + r);
  if (!a[0]) return !1;
  const l = {
    type: "link",
    title: null,
    url: o + t + a[0],
    children: [{ type: "text", value: t + a[0] }]
  };
  return a[1] ? [l, { type: "text", value: a[1] }] : l;
}
function Jf(e, t, n, r) {
  return (
    // Not an expected previous character.
    !ea(r, !0) || // Label ends in not allowed character.
    /[-\d_]$/.test(n) ? !1 : {
      type: "link",
      title: null,
      url: "mailto:" + t + "@" + n,
      children: [{ type: "text", value: t + "@" + n }]
    }
  );
}
function Kf(e) {
  const t = e.split(".");
  return !(t.length < 2 || t[t.length - 1] && (/_/.test(t[t.length - 1]) || !/[a-zA-Z\d]/.test(t[t.length - 1])) || t[t.length - 2] && (/_/.test(t[t.length - 2]) || !/[a-zA-Z\d]/.test(t[t.length - 2])));
}
function Xf(e) {
  const t = /[!"&'),.:;<>?\]}]+$/.exec(e);
  if (!t)
    return [e, void 0];
  e = e.slice(0, t.index);
  let n = t[0], r = n.indexOf(")");
  const i = Ii(e, "(");
  let o = Ii(e, ")");
  for (; r !== -1 && i > o; )
    e += n.slice(0, r + 1), n = n.slice(r + 1), r = n.indexOf(")"), o++;
  return [e, n];
}
function ea(e, t) {
  const n = e.input.charCodeAt(e.index - 1);
  return (e.index === 0 || dt(n) || fn(n)) && (!t || n !== 47);
}
function ta(e) {
  return e.label || !e.identifier ? e.label || "" : Eo(e.identifier);
}
function Gf(e, t, n) {
  const r = t.indexStack, i = e.children || [], o = t.createTracker(n), a = [];
  let l = -1;
  for (r.push(-1); ++l < i.length; ) {
    const u = i[l];
    r[r.length - 1] = l, a.push(
      o.move(
        t.handle(u, e, t, {
          before: `
`,
          after: `
`,
          ...o.current()
        })
      )
    ), u.type !== "list" && (t.bulletLastUsed = void 0), l < i.length - 1 && a.push(
      o.move(Qf(u, i[l + 1], e, t))
    );
  }
  return r.pop(), a.join("");
}
function Qf(e, t, n, r) {
  let i = r.join.length;
  for (; i--; ) {
    const o = r.join[i](e, t, n, r);
    if (o === !0 || o === 1)
      break;
    if (typeof o == "number")
      return `
`.repeat(1 + o);
    if (o === !1)
      return `

<!---->

`;
  }
  return `

`;
}
const Zf = /\r?\n|\r/g;
function ep(e, t) {
  const n = [];
  let r = 0, i = 0, o;
  for (; o = Zf.exec(e); )
    a(e.slice(r, o.index)), n.push(o[0]), r = o.index + o[0].length, i++;
  return a(e.slice(r)), n.join("");
  function a(l) {
    n.push(t(l, i, !l));
  }
}
function na(e) {
  if (!e._compiled) {
    const t = (e.atBreak ? "[\\r\\n][\\t ]*" : "") + (e.before ? "(?:" + e.before + ")" : "");
    e._compiled = new RegExp(
      (t ? "(" + t + ")" : "") + (/[|\\{}()[\]^$+*?.-]/.test(e.character) ? "\\" : "") + e.character + (e.after ? "(?:" + e.after + ")" : ""),
      "g"
    );
  }
  return e._compiled;
}
function tp(e, t) {
  return ji(e, t.inConstruct, !0) && !ji(e, t.notInConstruct, !1);
}
function ji(e, t, n) {
  if (typeof t == "string" && (t = [t]), !t || t.length === 0)
    return n;
  let r = -1;
  for (; ++r < t.length; )
    if (e.includes(t[r]))
      return !0;
  return !1;
}
function ra(e, t, n) {
  const r = (n.before || "") + (t || "") + (n.after || ""), i = [], o = [], a = {};
  let l = -1;
  for (; ++l < e.unsafe.length; ) {
    const f = e.unsafe[l];
    if (!tp(e.stack, f))
      continue;
    const c = na(f);
    let d;
    for (; d = c.exec(r); ) {
      const p = "before" in f || !!f.atBreak, m = "after" in f, g = d.index + (p ? d[1].length : 0);
      i.includes(g) ? (a[g].before && !p && (a[g].before = !1), a[g].after && !m && (a[g].after = !1)) : (i.push(g), a[g] = { before: p, after: m });
    }
  }
  i.sort(np);
  let u = n.before ? n.before.length : 0;
  const s = r.length - (n.after ? n.after.length : 0);
  for (l = -1; ++l < i.length; ) {
    const f = i[l];
    f < u || f >= s || f + 1 < s && i[l + 1] === f + 1 && a[f].after && !a[f + 1].before && !a[f + 1].after || i[l - 1] === f - 1 && a[f].before && !a[f - 1].before && !a[f - 1].after || (u !== f && o.push(zi(r.slice(u, f), "\\")), u = f, /[!-/:-@[-`{-~]/.test(r.charAt(f)) && (!n.encode || !n.encode.includes(r.charAt(f))) ? o.push("\\") : (o.push(
      "&#x" + r.charCodeAt(f).toString(16).toUpperCase() + ";"
    ), u++));
  }
  return o.push(zi(r.slice(u, s), n.after)), o.join("");
}
function np(e, t) {
  return e - t;
}
function zi(e, t) {
  const n = /\\(?=[!-/:-@[-`{-~])/g, r = [], i = [], o = e + t;
  let a = -1, l = 0, u;
  for (; u = n.exec(o); )
    r.push(u.index);
  for (; ++a < r.length; )
    l !== r[a] && i.push(e.slice(l, r[a])), i.push("\\"), l = r[a];
  return i.push(e.slice(l)), i.join("");
}
function dn(e) {
  const t = e || {}, n = t.now || {};
  let r = t.lineShift || 0, i = n.line || 1, o = n.column || 1;
  return { move: u, current: a, shift: l };
  function a() {
    return { now: { line: i, column: o }, lineShift: r };
  }
  function l(s) {
    r += s;
  }
  function u(s) {
    const f = s || "", c = f.split(/\r?\n|\r/g), d = c[c.length - 1];
    return i += c.length - 1, o = c.length === 1 ? o + d.length : 1 + d.length + r, f;
  }
}
ia.peek = hp;
function rp() {
  return {
    enter: {
      gfmFootnoteDefinition: op,
      gfmFootnoteDefinitionLabelString: ap,
      gfmFootnoteCall: up,
      gfmFootnoteCallString: cp
    },
    exit: {
      gfmFootnoteDefinition: sp,
      gfmFootnoteDefinitionLabelString: lp,
      gfmFootnoteCall: pp,
      gfmFootnoteCallString: fp
    }
  };
}
function ip() {
  return {
    // This is on by default already.
    unsafe: [{ character: "[", inConstruct: ["phrasing", "label", "reference"] }],
    handlers: { footnoteDefinition: dp, footnoteReference: ia }
  };
}
function op(e) {
  this.enter(
    { type: "footnoteDefinition", identifier: "", label: "", children: [] },
    e
  );
}
function ap() {
  this.buffer();
}
function lp(e) {
  const t = this.resume(), n = (
    /** @type {FootnoteDefinition} */
    this.stack[this.stack.length - 1]
  );
  n.label = t, n.identifier = Xe(
    this.sliceSerialize(e)
  ).toLowerCase();
}
function sp(e) {
  this.exit(e);
}
function up(e) {
  this.enter({ type: "footnoteReference", identifier: "", label: "" }, e);
}
function cp() {
  this.buffer();
}
function fp(e) {
  const t = this.resume(), n = (
    /** @type {FootnoteDefinition} */
    this.stack[this.stack.length - 1]
  );
  n.label = t, n.identifier = Xe(
    this.sliceSerialize(e)
  ).toLowerCase();
}
function pp(e) {
  this.exit(e);
}
function ia(e, t, n, r) {
  const i = dn(r);
  let o = i.move("[^");
  const a = n.enter("footnoteReference"), l = n.enter("reference");
  return o += i.move(
    ra(n, ta(e), {
      ...i.current(),
      before: o,
      after: "]"
    })
  ), l(), a(), o += i.move("]"), o;
}
function hp() {
  return "[";
}
function dp(e, t, n, r) {
  const i = dn(r);
  let o = i.move("[^");
  const a = n.enter("footnoteDefinition"), l = n.enter("label");
  return o += i.move(
    ra(n, ta(e), {
      ...i.current(),
      before: o,
      after: "]"
    })
  ), l(), o += i.move(
    "]:" + (e.children && e.children.length > 0 ? " " : "")
  ), i.shift(4), o += i.move(
    ep(Gf(e, n, i.current()), mp)
  ), a(), o;
}
function mp(e, t, n) {
  return t === 0 ? e : (n ? "" : "    ") + e;
}
function oa(e, t, n) {
  const r = t.indexStack, i = e.children || [], o = [];
  let a = -1, l = n.before;
  r.push(-1);
  let u = t.createTracker(n);
  for (; ++a < i.length; ) {
    const s = i[a];
    let f;
    if (r[r.length - 1] = a, a + 1 < i.length) {
      let c = t.handle.handlers[i[a + 1].type];
      c && c.peek && (c = c.peek), f = c ? c(i[a + 1], e, t, {
        before: "",
        after: "",
        ...u.current()
      }).charAt(0) : "";
    } else
      f = n.after;
    o.length > 0 && (l === "\r" || l === `
`) && s.type === "html" && (o[o.length - 1] = o[o.length - 1].replace(
      /(\r?\n|\r)$/,
      " "
    ), l = " ", u = t.createTracker(n), u.move(o.join(""))), o.push(
      u.move(
        t.handle(s, e, t, {
          ...u.current(),
          before: l,
          after: f
        })
      )
    ), l = o[o.length - 1].slice(-1);
  }
  return r.pop(), o.join("");
}
const gp = [
  "autolink",
  "destinationLiteral",
  "destinationRaw",
  "reference",
  "titleQuote",
  "titleApostrophe"
];
aa.peek = kp;
const yp = {
  canContainEols: ["delete"],
  enter: { strikethrough: wp },
  exit: { strikethrough: xp }
}, bp = {
  unsafe: [
    {
      character: "~",
      inConstruct: "phrasing",
      notInConstruct: gp
    }
  ],
  handlers: { delete: aa }
};
function wp(e) {
  this.enter({ type: "delete", children: [] }, e);
}
function xp(e) {
  this.exit(e);
}
function aa(e, t, n, r) {
  const i = dn(r), o = n.enter("strikethrough");
  let a = i.move("~~");
  return a += oa(e, n, {
    ...i.current(),
    before: a,
    after: "~"
  }), a += i.move("~~"), o(), a;
}
function kp() {
  return "~";
}
la.peek = vp;
function la(e, t, n) {
  let r = e.value || "", i = "`", o = -1;
  for (; new RegExp("(^|[^`])" + i + "([^`]|$)").test(r); )
    i += "`";
  for (/[^ \r\n]/.test(r) && (/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r) || /^`|`$/.test(r)) && (r = " " + r + " "); ++o < n.unsafe.length; ) {
    const a = n.unsafe[o], l = na(a);
    let u;
    if (a.atBreak)
      for (; u = l.exec(r); ) {
        let s = u.index;
        r.charCodeAt(s) === 10 && r.charCodeAt(s - 1) === 13 && s--, r = r.slice(0, s) + " " + r.slice(u.index + 1);
      }
  }
  return i + r + i;
}
function vp() {
  return "`";
}
function Sp(e) {
  return e.length;
}
function Ep(e, t) {
  const n = t || {}, r = (n.align || []).concat(), i = n.stringLength || Sp, o = [], a = [], l = [], u = [];
  let s = 0, f = -1;
  for (; ++f < e.length; ) {
    const g = [], y = [];
    let x = -1;
    for (e[f].length > s && (s = e[f].length); ++x < e[f].length; ) {
      const T = Cp(e[f][x]);
      if (n.alignDelimiters !== !1) {
        const E = i(T);
        y[x] = E, (u[x] === void 0 || E > u[x]) && (u[x] = E);
      }
      g.push(T);
    }
    a[f] = g, l[f] = y;
  }
  let c = -1;
  if (typeof r == "object" && "length" in r)
    for (; ++c < s; )
      o[c] = Ni(r[c]);
  else {
    const g = Ni(r);
    for (; ++c < s; )
      o[c] = g;
  }
  c = -1;
  const d = [], p = [];
  for (; ++c < s; ) {
    const g = o[c];
    let y = "", x = "";
    g === 99 ? (y = ":", x = ":") : g === 108 ? y = ":" : g === 114 && (x = ":");
    let T = n.alignDelimiters === !1 ? 1 : Math.max(
      1,
      u[c] - y.length - x.length
    );
    const E = y + "-".repeat(T) + x;
    n.alignDelimiters !== !1 && (T = y.length + T + x.length, T > u[c] && (u[c] = T), p[c] = T), d[c] = E;
  }
  a.splice(1, 0, d), l.splice(1, 0, p), f = -1;
  const m = [];
  for (; ++f < a.length; ) {
    const g = a[f], y = l[f];
    c = -1;
    const x = [];
    for (; ++c < s; ) {
      const T = g[c] || "";
      let E = "", _ = "";
      if (n.alignDelimiters !== !1) {
        const v = u[c] - (y[c] || 0), k = o[c];
        k === 114 ? E = " ".repeat(v) : k === 99 ? v % 2 ? (E = " ".repeat(v / 2 + 0.5), _ = " ".repeat(v / 2 - 0.5)) : (E = " ".repeat(v / 2), _ = E) : _ = " ".repeat(v);
      }
      n.delimiterStart !== !1 && !c && x.push("|"), n.padding !== !1 && // Don’t add the opening space if we’re not aligning and the cell is
      // empty: there will be a closing space.
      !(n.alignDelimiters === !1 && T === "") && (n.delimiterStart !== !1 || c) && x.push(" "), n.alignDelimiters !== !1 && x.push(E), x.push(T), n.alignDelimiters !== !1 && x.push(_), n.padding !== !1 && x.push(" "), (n.delimiterEnd !== !1 || c !== s - 1) && x.push("|");
    }
    m.push(
      n.delimiterEnd === !1 ? x.join("").replace(/ +$/, "") : x.join("")
    );
  }
  return m.join(`
`);
}
function Cp(e) {
  return e == null ? "" : String(e);
}
function Ni(e) {
  const t = typeof e == "string" ? e.codePointAt(0) : 0;
  return t === 67 || t === 99 ? 99 : t === 76 || t === 108 ? 108 : t === 82 || t === 114 ? 114 : 0;
}
const Tp = {
  enter: {
    table: Ap,
    tableData: Mi,
    tableHeader: Mi,
    tableRow: Op
  },
  exit: {
    codeText: Pp,
    table: Rp,
    tableData: Yn,
    tableHeader: Yn,
    tableRow: Yn
  }
};
function Ap(e) {
  const t = e._align;
  this.enter(
    {
      type: "table",
      align: t.map((n) => n === "none" ? null : n),
      children: []
    },
    e
  ), this.setData("inTable", !0);
}
function Rp(e) {
  this.exit(e), this.setData("inTable");
}
function Op(e) {
  this.enter({ type: "tableRow", children: [] }, e);
}
function Yn(e) {
  this.exit(e);
}
function Mi(e) {
  this.enter({ type: "tableCell", children: [] }, e);
}
function Pp(e) {
  let t = this.resume();
  this.getData("inTable") && (t = t.replace(/\\([\\|])/g, _p));
  const n = (
    /** @type {InlineCode} */
    this.stack[this.stack.length - 1]
  );
  n.value = t, this.exit(e);
}
function _p(e, t) {
  return t === "|" ? t : e;
}
function Fp(e) {
  const t = e || {}, n = t.tableCellPadding, r = t.tablePipeAlign, i = t.stringLength, o = n ? " " : "|";
  return {
    unsafe: [
      { character: "\r", inConstruct: "tableCell" },
      { character: `
`, inConstruct: "tableCell" },
      // A pipe, when followed by a tab or space (padding), or a dash or colon
      // (unpadded delimiter row), could result in a table.
      { atBreak: !0, character: "|", after: "[	 :-]" },
      // A pipe in a cell must be encoded.
      { character: "|", inConstruct: "tableCell" },
      // A colon must be followed by a dash, in which case it could start a
      // delimiter row.
      { atBreak: !0, character: ":", after: "-" },
      // A delimiter row can also start with a dash, when followed by more
      // dashes, a colon, or a pipe.
      // This is a stricter version than the built in check for lists, thematic
      // breaks, and setex heading underlines though:
      // <https://github.com/syntax-tree/mdast-util-to-markdown/blob/51a2038/lib/unsafe.js#L57>
      { atBreak: !0, character: "-", after: "[:|-]" }
    ],
    handlers: {
      table: a,
      tableRow: l,
      tableCell: u,
      inlineCode: d
    }
  };
  function a(p, m, g, y) {
    return s(
      f(p, g, y),
      p.align
    );
  }
  function l(p, m, g, y) {
    const x = c(p, g, y), T = s([x]);
    return T.slice(0, T.indexOf(`
`));
  }
  function u(p, m, g, y) {
    const x = g.enter("tableCell"), T = g.enter("phrasing"), E = oa(p, g, {
      ...y,
      before: o,
      after: o
    });
    return T(), x(), E;
  }
  function s(p, m) {
    return Ep(p, {
      align: m,
      // @ts-expect-error: `markdown-table` types should support `null`.
      alignDelimiters: r,
      // @ts-expect-error: `markdown-table` types should support `null`.
      padding: n,
      // @ts-expect-error: `markdown-table` types should support `null`.
      stringLength: i
    });
  }
  function f(p, m, g) {
    const y = p.children;
    let x = -1;
    const T = [], E = m.enter("table");
    for (; ++x < y.length; )
      T[x] = c(
        y[x],
        m,
        g
      );
    return E(), T;
  }
  function c(p, m, g) {
    const y = p.children;
    let x = -1;
    const T = [], E = m.enter("tableRow");
    for (; ++x < y.length; )
      T[x] = u(
        y[x],
        p,
        m,
        g
      );
    return E(), T;
  }
  function d(p, m, g) {
    let y = la(p, m, g);
    return g.stack.includes("tableCell") && (y = y.replace(/\|/g, "\\$&")), y;
  }
}
function Ip(e) {
  const t = e.options.bullet || "*";
  if (t !== "*" && t !== "+" && t !== "-")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.bullet`, expected `*`, `+`, or `-`"
    );
  return t;
}
function Dp(e) {
  const t = e.options.listItemIndent || "tab";
  if (t === 1 || t === "1")
    return "one";
  if (t !== "tab" && t !== "one" && t !== "mixed")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
    );
  return t;
}
function Lp(e, t, n, r) {
  const i = Dp(n);
  let o = n.bulletCurrent || Ip(n);
  t && t.type === "list" && t.ordered && (o = (typeof t.start == "number" && t.start > -1 ? t.start : 1) + (n.options.incrementListMarker === !1 ? 0 : t.children.indexOf(e)) + o);
  let a = o.length + 1;
  (i === "tab" || i === "mixed" && (t && t.type === "list" && t.spread || e.spread)) && (a = Math.ceil(a / 4) * 4);
  const l = n.createTracker(r);
  l.move(o + " ".repeat(a - o.length)), l.shift(a);
  const u = n.enter("listItem"), s = n.indentLines(
    n.containerFlow(e, l.current()),
    f
  );
  return u(), s;
  function f(c, d, p) {
    return d ? (p ? "" : " ".repeat(a)) + c : (p ? o : o + " ".repeat(a - o.length)) + c;
  }
}
const jp = {
  exit: {
    taskListCheckValueChecked: Bi,
    taskListCheckValueUnchecked: Bi,
    paragraph: Np
  }
}, zp = {
  unsafe: [{ atBreak: !0, character: "-", after: "[:|-]" }],
  handlers: { listItem: Mp }
};
function Bi(e) {
  const t = (
    /** @type {ListItem} */
    this.stack[this.stack.length - 2]
  );
  t.checked = e.type === "taskListCheckValueChecked";
}
function Np(e) {
  const t = (
    /** @type {Parents} */
    this.stack[this.stack.length - 2]
  );
  if (t && t.type === "listItem" && typeof t.checked == "boolean") {
    const n = (
      /** @type {Paragraph} */
      this.stack[this.stack.length - 1]
    ), r = n.children[0];
    if (r && r.type === "text") {
      const i = t.children;
      let o = -1, a;
      for (; ++o < i.length; ) {
        const l = i[o];
        if (l.type === "paragraph") {
          a = l;
          break;
        }
      }
      a === n && (r.value = r.value.slice(1), r.value.length === 0 ? n.children.shift() : n.position && r.position && typeof r.position.start.offset == "number" && (r.position.start.column++, r.position.start.offset++, n.position.start = Object.assign({}, r.position.start)));
    }
  }
  this.exit(e);
}
function Mp(e, t, n, r) {
  const i = e.children[0], o = typeof e.checked == "boolean" && i && i.type === "paragraph", a = "[" + (e.checked ? "x" : " ") + "] ", l = dn(r);
  o && l.move(a);
  let u = Lp(e, t, n, {
    ...r,
    ...l.current()
  });
  return o && (u = u.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, s)), u;
  function s(f) {
    return f + a;
  }
}
function Bp() {
  return [
    Mf,
    rp(),
    yp,
    Tp,
    jp
  ];
}
function $p(e) {
  return {
    extensions: [
      Bf,
      ip(),
      bp,
      Fp(e),
      zp
    ]
  };
}
function Up(e = {}) {
  const t = this.data();
  n("micromarkExtensions", Df(e)), n("fromMarkdownExtensions", Bp()), n("toMarkdownExtensions", $p(e));
  function n(r, i) {
    /** @type {unknown[]} */
    // Other extensions
    /* c8 ignore next 2 */
    (t[r] ? t[r] : t[r] = []).push(i);
  }
}
function sa(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: qp } = Object.prototype, { getPrototypeOf: Cr } = Object, { iterator: mn, toStringTag: ua } = Symbol, gn = /* @__PURE__ */ ((e) => (t) => {
  const n = qp.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Ge = (e) => (e = e.toLowerCase(), (t) => gn(t) === e), yn = (e) => (t) => typeof t === e, { isArray: Ct } = Array, vt = yn("undefined");
function Mt(e) {
  return e !== null && !vt(e) && e.constructor !== null && !vt(e.constructor) && ze(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const ca = Ge("ArrayBuffer");
function Hp(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && ca(e.buffer), t;
}
const Vp = yn("string"), ze = yn("function"), fa = yn("number"), Bt = (e) => e !== null && typeof e == "object", Wp = (e) => e === !0 || e === !1, rn = (e) => {
  if (gn(e) !== "object")
    return !1;
  const t = Cr(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(ua in e) && !(mn in e);
}, Yp = (e) => {
  if (!Bt(e) || Mt(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, Jp = Ge("Date"), Kp = Ge("File"), Xp = Ge("Blob"), Gp = Ge("FileList"), Qp = (e) => Bt(e) && ze(e.pipe), Zp = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || ze(e.append) && ((t = gn(e)) === "formdata" || // detect form-data instance
  t === "object" && ze(e.toString) && e.toString() === "[object FormData]"));
}, eh = Ge("URLSearchParams"), [th, nh, rh, ih] = ["ReadableStream", "Request", "Response", "Headers"].map(Ge), oh = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function $t(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, i;
  if (typeof e != "object" && (e = [e]), Ct(e))
    for (r = 0, i = e.length; r < i; r++)
      t.call(null, e[r], r, e);
  else {
    if (Mt(e))
      return;
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), a = o.length;
    let l;
    for (r = 0; r < a; r++)
      l = o[r], t.call(null, e[l], l, e);
  }
}
function pa(e, t) {
  if (Mt(e))
    return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, i;
  for (; r-- > 0; )
    if (i = n[r], t === i.toLowerCase())
      return i;
  return null;
}
const pt = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, ha = (e) => !vt(e) && e !== pt;
function lr() {
  const { caseless: e, skipUndefined: t } = ha(this) && this || {}, n = {}, r = (i, o) => {
    const a = e && pa(n, o) || o;
    rn(n[a]) && rn(i) ? n[a] = lr(n[a], i) : rn(i) ? n[a] = lr({}, i) : Ct(i) ? n[a] = i.slice() : (!t || !vt(i)) && (n[a] = i);
  };
  for (let i = 0, o = arguments.length; i < o; i++)
    arguments[i] && $t(arguments[i], r);
  return n;
}
const ah = (e, t, n, { allOwnKeys: r } = {}) => ($t(t, (i, o) => {
  n && ze(i) ? e[o] = sa(i, n) : e[o] = i;
}, { allOwnKeys: r }), e), lh = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), sh = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, uh = (e, t, n, r) => {
  let i, o, a;
  const l = {};
  if (t = t || {}, e == null) return t;
  do {
    for (i = Object.getOwnPropertyNames(e), o = i.length; o-- > 0; )
      a = i[o], (!r || r(a, e, t)) && !l[a] && (t[a] = e[a], l[a] = !0);
    e = n !== !1 && Cr(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, ch = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, fh = (e) => {
  if (!e) return null;
  if (Ct(e)) return e;
  let t = e.length;
  if (!fa(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, ph = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Cr(Uint8Array)), hh = (e, t) => {
  const r = (e && e[mn]).call(e);
  let i;
  for (; (i = r.next()) && !i.done; ) {
    const o = i.value;
    t.call(e, o[0], o[1]);
  }
}, dh = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, mh = Ge("HTMLFormElement"), gh = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, i) {
    return r.toUpperCase() + i;
  }
), $i = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), yh = Ge("RegExp"), da = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  $t(n, (i, o) => {
    let a;
    (a = t(i, o, e)) !== !1 && (r[o] = a || i);
  }), Object.defineProperties(e, r);
}, bh = (e) => {
  da(e, (t, n) => {
    if (ze(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (ze(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, wh = (e, t) => {
  const n = {}, r = (i) => {
    i.forEach((o) => {
      n[o] = !0;
    });
  };
  return Ct(e) ? r(e) : r(String(e).split(t)), n;
}, xh = () => {
}, kh = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function vh(e) {
  return !!(e && ze(e.append) && e[ua] === "FormData" && e[mn]);
}
const Sh = (e) => {
  const t = new Array(10), n = (r, i) => {
    if (Bt(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (Mt(r))
        return r;
      if (!("toJSON" in r)) {
        t[i] = r;
        const o = Ct(r) ? [] : {};
        return $t(r, (a, l) => {
          const u = n(a, i + 1);
          !vt(u) && (o[l] = u);
        }), t[i] = void 0, o;
      }
    }
    return r;
  };
  return n(e, 0);
}, Eh = Ge("AsyncFunction"), Ch = (e) => e && (Bt(e) || ze(e)) && ze(e.then) && ze(e.catch), ma = ((e, t) => e ? setImmediate : t ? ((n, r) => (pt.addEventListener("message", ({ source: i, data: o }) => {
  i === pt && o === n && r.length && r.shift()();
}, !1), (i) => {
  r.push(i), pt.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  ze(pt.postMessage)
), Th = typeof queueMicrotask < "u" ? queueMicrotask.bind(pt) : typeof process < "u" && process.nextTick || ma, Ah = (e) => e != null && ze(e[mn]), C = {
  isArray: Ct,
  isArrayBuffer: ca,
  isBuffer: Mt,
  isFormData: Zp,
  isArrayBufferView: Hp,
  isString: Vp,
  isNumber: fa,
  isBoolean: Wp,
  isObject: Bt,
  isPlainObject: rn,
  isEmptyObject: Yp,
  isReadableStream: th,
  isRequest: nh,
  isResponse: rh,
  isHeaders: ih,
  isUndefined: vt,
  isDate: Jp,
  isFile: Kp,
  isBlob: Xp,
  isRegExp: yh,
  isFunction: ze,
  isStream: Qp,
  isURLSearchParams: eh,
  isTypedArray: ph,
  isFileList: Gp,
  forEach: $t,
  merge: lr,
  extend: ah,
  trim: oh,
  stripBOM: lh,
  inherits: sh,
  toFlatObject: uh,
  kindOf: gn,
  kindOfTest: Ge,
  endsWith: ch,
  toArray: fh,
  forEachEntry: hh,
  matchAll: dh,
  isHTMLForm: mh,
  hasOwnProperty: $i,
  hasOwnProp: $i,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: da,
  freezeMethods: bh,
  toObjectSet: wh,
  toCamelCase: gh,
  noop: xh,
  toFiniteNumber: kh,
  findKey: pa,
  global: pt,
  isContextDefined: ha,
  isSpecCompliantForm: vh,
  toJSONObject: Sh,
  isAsyncFn: Eh,
  isThenable: Ch,
  setImmediate: ma,
  asap: Th,
  isIterable: Ah
};
function oe(e, t, n, r, i) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), i && (this.response = i, this.status = i.status ? i.status : null);
}
C.inherits(oe, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: C.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const ga = oe.prototype, ya = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  ya[e] = { value: e };
});
Object.defineProperties(oe, ya);
Object.defineProperty(ga, "isAxiosError", { value: !0 });
oe.from = (e, t, n, r, i, o) => {
  const a = Object.create(ga);
  C.toFlatObject(e, a, function(f) {
    return f !== Error.prototype;
  }, (s) => s !== "isAxiosError");
  const l = e && e.message ? e.message : "Error", u = t == null && e ? e.code : t;
  return oe.call(a, l, u, n, r, i), e && a.cause == null && Object.defineProperty(a, "cause", { value: e, configurable: !0 }), a.name = e && e.name || "Error", o && Object.assign(a, o), a;
};
const Rh = null;
function sr(e) {
  return C.isPlainObject(e) || C.isArray(e);
}
function ba(e) {
  return C.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Ui(e, t, n) {
  return e ? e.concat(t).map(function(i, o) {
    return i = ba(i), !n && o ? "[" + i + "]" : i;
  }).join(n ? "." : "") : t;
}
function Oh(e) {
  return C.isArray(e) && !e.some(sr);
}
const Ph = C.toFlatObject(C, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function bn(e, t, n) {
  if (!C.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = C.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(g, y) {
    return !C.isUndefined(y[g]);
  });
  const r = n.metaTokens, i = n.visitor || f, o = n.dots, a = n.indexes, u = (n.Blob || typeof Blob < "u" && Blob) && C.isSpecCompliantForm(t);
  if (!C.isFunction(i))
    throw new TypeError("visitor must be a function");
  function s(m) {
    if (m === null) return "";
    if (C.isDate(m))
      return m.toISOString();
    if (C.isBoolean(m))
      return m.toString();
    if (!u && C.isBlob(m))
      throw new oe("Blob is not supported. Use a Buffer instead.");
    return C.isArrayBuffer(m) || C.isTypedArray(m) ? u && typeof Blob == "function" ? new Blob([m]) : Buffer.from(m) : m;
  }
  function f(m, g, y) {
    let x = m;
    if (m && !y && typeof m == "object") {
      if (C.endsWith(g, "{}"))
        g = r ? g : g.slice(0, -2), m = JSON.stringify(m);
      else if (C.isArray(m) && Oh(m) || (C.isFileList(m) || C.endsWith(g, "[]")) && (x = C.toArray(m)))
        return g = ba(g), x.forEach(function(E, _) {
          !(C.isUndefined(E) || E === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? Ui([g], _, o) : a === null ? g : g + "[]",
            s(E)
          );
        }), !1;
    }
    return sr(m) ? !0 : (t.append(Ui(y, g, o), s(m)), !1);
  }
  const c = [], d = Object.assign(Ph, {
    defaultVisitor: f,
    convertValue: s,
    isVisitable: sr
  });
  function p(m, g) {
    if (!C.isUndefined(m)) {
      if (c.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      c.push(m), C.forEach(m, function(x, T) {
        (!(C.isUndefined(x) || x === null) && i.call(
          t,
          x,
          C.isString(T) ? T.trim() : T,
          g,
          d
        )) === !0 && p(x, g ? g.concat(T) : [T]);
      }), c.pop();
    }
  }
  if (!C.isObject(e))
    throw new TypeError("data must be an object");
  return p(e), t;
}
function qi(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function Tr(e, t) {
  this._pairs = [], e && bn(e, this, t);
}
const wa = Tr.prototype;
wa.append = function(t, n) {
  this._pairs.push([t, n]);
};
wa.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, qi);
  } : qi;
  return this._pairs.map(function(i) {
    return n(i[0]) + "=" + n(i[1]);
  }, "").join("&");
};
function _h(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function xa(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || _h;
  C.isFunction(n) && (n = {
    serialize: n
  });
  const i = n && n.serialize;
  let o;
  if (i ? o = i(t, n) : o = C.isURLSearchParams(t) ? t.toString() : new Tr(t, n).toString(r), o) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class Hi {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, n, r) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    C.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const ka = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Fh = typeof URLSearchParams < "u" ? URLSearchParams : Tr, Ih = typeof FormData < "u" ? FormData : null, Dh = typeof Blob < "u" ? Blob : null, Lh = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Fh,
    FormData: Ih,
    Blob: Dh
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Ar = typeof window < "u" && typeof document < "u", ur = typeof navigator == "object" && navigator || void 0, jh = Ar && (!ur || ["ReactNative", "NativeScript", "NS"].indexOf(ur.product) < 0), zh = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Nh = Ar && window.location.href || "http://localhost", Mh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Ar,
  hasStandardBrowserEnv: jh,
  hasStandardBrowserWebWorkerEnv: zh,
  navigator: ur,
  origin: Nh
}, Symbol.toStringTag, { value: "Module" })), Pe = {
  ...Mh,
  ...Lh
};
function Bh(e, t) {
  return bn(e, new Pe.classes.URLSearchParams(), {
    visitor: function(n, r, i, o) {
      return Pe.isNode && C.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function $h(e) {
  return C.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Uh(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const i = n.length;
  let o;
  for (r = 0; r < i; r++)
    o = n[r], t[o] = e[o];
  return t;
}
function va(e) {
  function t(n, r, i, o) {
    let a = n[o++];
    if (a === "__proto__") return !0;
    const l = Number.isFinite(+a), u = o >= n.length;
    return a = !a && C.isArray(i) ? i.length : a, u ? (C.hasOwnProp(i, a) ? i[a] = [i[a], r] : i[a] = r, !l) : ((!i[a] || !C.isObject(i[a])) && (i[a] = []), t(n, r, i[a], o) && C.isArray(i[a]) && (i[a] = Uh(i[a])), !l);
  }
  if (C.isFormData(e) && C.isFunction(e.entries)) {
    const n = {};
    return C.forEachEntry(e, (r, i) => {
      t($h(r), i, n, 0);
    }), n;
  }
  return null;
}
function qh(e, t, n) {
  if (C.isString(e))
    try {
      return (t || JSON.parse)(e), C.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const Ut = {
  transitional: ka,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", i = r.indexOf("application/json") > -1, o = C.isObject(t);
    if (o && C.isHTMLForm(t) && (t = new FormData(t)), C.isFormData(t))
      return i ? JSON.stringify(va(t)) : t;
    if (C.isArrayBuffer(t) || C.isBuffer(t) || C.isStream(t) || C.isFile(t) || C.isBlob(t) || C.isReadableStream(t))
      return t;
    if (C.isArrayBufferView(t))
      return t.buffer;
    if (C.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let l;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Bh(t, this.formSerializer).toString();
      if ((l = C.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const u = this.env && this.env.FormData;
        return bn(
          l ? { "files[]": t } : t,
          u && new u(),
          this.formSerializer
        );
      }
    }
    return o || i ? (n.setContentType("application/json", !1), qh(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || Ut.transitional, r = n && n.forcedJSONParsing, i = this.responseType === "json";
    if (C.isResponse(t) || C.isReadableStream(t))
      return t;
    if (t && C.isString(t) && (r && !this.responseType || i)) {
      const a = !(n && n.silentJSONParsing) && i;
      try {
        return JSON.parse(t, this.parseReviver);
      } catch (l) {
        if (a)
          throw l.name === "SyntaxError" ? oe.from(l, oe.ERR_BAD_RESPONSE, this, null, this.response) : l;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: Pe.classes.FormData,
    Blob: Pe.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
C.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Ut.headers[e] = {};
});
const Hh = C.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), Vh = (e) => {
  const t = {};
  let n, r, i;
  return e && e.split(`
`).forEach(function(a) {
    i = a.indexOf(":"), n = a.substring(0, i).trim().toLowerCase(), r = a.substring(i + 1).trim(), !(!n || t[n] && Hh[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, Vi = Symbol("internals");
function Ft(e) {
  return e && String(e).trim().toLowerCase();
}
function on(e) {
  return e === !1 || e == null ? e : C.isArray(e) ? e.map(on) : String(e);
}
function Wh(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const Yh = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Jn(e, t, n, r, i) {
  if (C.isFunction(r))
    return r.call(this, t, n);
  if (i && (t = n), !!C.isString(t)) {
    if (C.isString(r))
      return t.indexOf(r) !== -1;
    if (C.isRegExp(r))
      return r.test(t);
  }
}
function Jh(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Kh(e, t) {
  const n = C.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(i, o, a) {
        return this[r].call(this, t, i, o, a);
      },
      configurable: !0
    });
  });
}
let Ne = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const i = this;
    function o(l, u, s) {
      const f = Ft(u);
      if (!f)
        throw new Error("header name must be a non-empty string");
      const c = C.findKey(i, f);
      (!c || i[c] === void 0 || s === !0 || s === void 0 && i[c] !== !1) && (i[c || u] = on(l));
    }
    const a = (l, u) => C.forEach(l, (s, f) => o(s, f, u));
    if (C.isPlainObject(t) || t instanceof this.constructor)
      a(t, n);
    else if (C.isString(t) && (t = t.trim()) && !Yh(t))
      a(Vh(t), n);
    else if (C.isObject(t) && C.isIterable(t)) {
      let l = {}, u, s;
      for (const f of t) {
        if (!C.isArray(f))
          throw TypeError("Object iterator must return a key-value pair");
        l[s = f[0]] = (u = l[s]) ? C.isArray(u) ? [...u, f[1]] : [u, f[1]] : f[1];
      }
      a(l, n);
    } else
      t != null && o(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = Ft(t), t) {
      const r = C.findKey(this, t);
      if (r) {
        const i = this[r];
        if (!n)
          return i;
        if (n === !0)
          return Wh(i);
        if (C.isFunction(n))
          return n.call(this, i, r);
        if (C.isRegExp(n))
          return n.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = Ft(t), t) {
      const r = C.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Jn(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let i = !1;
    function o(a) {
      if (a = Ft(a), a) {
        const l = C.findKey(r, a);
        l && (!n || Jn(r, r[l], l, n)) && (delete r[l], i = !0);
      }
    }
    return C.isArray(t) ? t.forEach(o) : o(t), i;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, i = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || Jn(this, this[o], o, t, !0)) && (delete this[o], i = !0);
    }
    return i;
  }
  normalize(t) {
    const n = this, r = {};
    return C.forEach(this, (i, o) => {
      const a = C.findKey(r, o);
      if (a) {
        n[a] = on(i), delete n[o];
        return;
      }
      const l = t ? Jh(o) : String(o).trim();
      l !== o && delete n[o], n[l] = on(i), r[l] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return C.forEach(this, (r, i) => {
      r != null && r !== !1 && (n[i] = t && C.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((i) => r.set(i)), r;
  }
  static accessor(t) {
    const r = (this[Vi] = this[Vi] = {
      accessors: {}
    }).accessors, i = this.prototype;
    function o(a) {
      const l = Ft(a);
      r[l] || (Kh(i, a), r[l] = !0);
    }
    return C.isArray(t) ? t.forEach(o) : o(t), this;
  }
};
Ne.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
C.reduceDescriptors(Ne.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
C.freezeMethods(Ne);
function Kn(e, t) {
  const n = this || Ut, r = t || n, i = Ne.from(r.headers);
  let o = r.data;
  return C.forEach(e, function(l) {
    o = l.call(n, o, i.normalize(), t ? t.status : void 0);
  }), i.normalize(), o;
}
function Sa(e) {
  return !!(e && e.__CANCEL__);
}
function Tt(e, t, n) {
  oe.call(this, e ?? "canceled", oe.ERR_CANCELED, t, n), this.name = "CanceledError";
}
C.inherits(Tt, oe, {
  __CANCEL__: !0
});
function Ea(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new oe(
    "Request failed with status code " + n.status,
    [oe.ERR_BAD_REQUEST, oe.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function Xh(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Gh(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let i = 0, o = 0, a;
  return t = t !== void 0 ? t : 1e3, function(u) {
    const s = Date.now(), f = r[o];
    a || (a = s), n[i] = u, r[i] = s;
    let c = o, d = 0;
    for (; c !== i; )
      d += n[c++], c = c % e;
    if (i = (i + 1) % e, i === o && (o = (o + 1) % e), s - a < t)
      return;
    const p = f && s - f;
    return p ? Math.round(d * 1e3 / p) : void 0;
  };
}
function Qh(e, t) {
  let n = 0, r = 1e3 / t, i, o;
  const a = (s, f = Date.now()) => {
    n = f, i = null, o && (clearTimeout(o), o = null), e(...s);
  };
  return [(...s) => {
    const f = Date.now(), c = f - n;
    c >= r ? a(s, f) : (i = s, o || (o = setTimeout(() => {
      o = null, a(i);
    }, r - c)));
  }, () => i && a(i)];
}
const cn = (e, t, n = 3) => {
  let r = 0;
  const i = Gh(50, 250);
  return Qh((o) => {
    const a = o.loaded, l = o.lengthComputable ? o.total : void 0, u = a - r, s = i(u), f = a <= l;
    r = a;
    const c = {
      loaded: a,
      total: l,
      progress: l ? a / l : void 0,
      bytes: u,
      rate: s || void 0,
      estimated: s && l && f ? (l - a) / s : void 0,
      event: o,
      lengthComputable: l != null,
      [t ? "download" : "upload"]: !0
    };
    e(c);
  }, n);
}, Wi = (e, t) => {
  const n = e != null;
  return [(r) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: r
  }), t[1]];
}, Yi = (e) => (...t) => C.asap(() => e(...t)), Zh = Pe.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, Pe.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(Pe.origin),
  Pe.navigator && /(msie|trident)/i.test(Pe.navigator.userAgent)
) : () => !0, ed = Pe.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, i, o) {
      const a = [e + "=" + encodeURIComponent(t)];
      C.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()), C.isString(r) && a.push("path=" + r), C.isString(i) && a.push("domain=" + i), o === !0 && a.push("secure"), document.cookie = a.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function td(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function nd(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Ca(e, t, n) {
  let r = !td(t);
  return e && (r || n == !1) ? nd(e, t) : t;
}
const Ji = (e) => e instanceof Ne ? { ...e } : e;
function mt(e, t) {
  t = t || {};
  const n = {};
  function r(s, f, c, d) {
    return C.isPlainObject(s) && C.isPlainObject(f) ? C.merge.call({ caseless: d }, s, f) : C.isPlainObject(f) ? C.merge({}, f) : C.isArray(f) ? f.slice() : f;
  }
  function i(s, f, c, d) {
    if (C.isUndefined(f)) {
      if (!C.isUndefined(s))
        return r(void 0, s, c, d);
    } else return r(s, f, c, d);
  }
  function o(s, f) {
    if (!C.isUndefined(f))
      return r(void 0, f);
  }
  function a(s, f) {
    if (C.isUndefined(f)) {
      if (!C.isUndefined(s))
        return r(void 0, s);
    } else return r(void 0, f);
  }
  function l(s, f, c) {
    if (c in t)
      return r(s, f);
    if (c in e)
      return r(void 0, s);
  }
  const u = {
    url: o,
    method: o,
    data: o,
    baseURL: a,
    transformRequest: a,
    transformResponse: a,
    paramsSerializer: a,
    timeout: a,
    timeoutMessage: a,
    withCredentials: a,
    withXSRFToken: a,
    adapter: a,
    responseType: a,
    xsrfCookieName: a,
    xsrfHeaderName: a,
    onUploadProgress: a,
    onDownloadProgress: a,
    decompress: a,
    maxContentLength: a,
    maxBodyLength: a,
    beforeRedirect: a,
    transport: a,
    httpAgent: a,
    httpsAgent: a,
    cancelToken: a,
    socketPath: a,
    responseEncoding: a,
    validateStatus: l,
    headers: (s, f, c) => i(Ji(s), Ji(f), c, !0)
  };
  return C.forEach(Object.keys({ ...e, ...t }), function(f) {
    const c = u[f] || i, d = c(e[f], t[f], f);
    C.isUndefined(d) && c !== l || (n[f] = d);
  }), n;
}
const Ta = (e) => {
  const t = mt({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: i, xsrfCookieName: o, headers: a, auth: l } = t;
  if (t.headers = a = Ne.from(a), t.url = xa(Ca(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), l && a.set(
    "Authorization",
    "Basic " + btoa((l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : ""))
  ), C.isFormData(n)) {
    if (Pe.hasStandardBrowserEnv || Pe.hasStandardBrowserWebWorkerEnv)
      a.setContentType(void 0);
    else if (C.isFunction(n.getHeaders)) {
      const u = n.getHeaders(), s = ["content-type", "content-length"];
      Object.entries(u).forEach(([f, c]) => {
        s.includes(f.toLowerCase()) && a.set(f, c);
      });
    }
  }
  if (Pe.hasStandardBrowserEnv && (r && C.isFunction(r) && (r = r(t)), r || r !== !1 && Zh(t.url))) {
    const u = i && o && ed.read(o);
    u && a.set(i, u);
  }
  return t;
}, rd = typeof XMLHttpRequest < "u", id = rd && function(e) {
  return new Promise(function(n, r) {
    const i = Ta(e);
    let o = i.data;
    const a = Ne.from(i.headers).normalize();
    let { responseType: l, onUploadProgress: u, onDownloadProgress: s } = i, f, c, d, p, m;
    function g() {
      p && p(), m && m(), i.cancelToken && i.cancelToken.unsubscribe(f), i.signal && i.signal.removeEventListener("abort", f);
    }
    let y = new XMLHttpRequest();
    y.open(i.method.toUpperCase(), i.url, !0), y.timeout = i.timeout;
    function x() {
      if (!y)
        return;
      const E = Ne.from(
        "getAllResponseHeaders" in y && y.getAllResponseHeaders()
      ), v = {
        data: !l || l === "text" || l === "json" ? y.responseText : y.response,
        status: y.status,
        statusText: y.statusText,
        headers: E,
        config: e,
        request: y
      };
      Ea(function(R) {
        n(R), g();
      }, function(R) {
        r(R), g();
      }, v), y = null;
    }
    "onloadend" in y ? y.onloadend = x : y.onreadystatechange = function() {
      !y || y.readyState !== 4 || y.status === 0 && !(y.responseURL && y.responseURL.indexOf("file:") === 0) || setTimeout(x);
    }, y.onabort = function() {
      y && (r(new oe("Request aborted", oe.ECONNABORTED, e, y)), y = null);
    }, y.onerror = function(_) {
      const v = _ && _.message ? _.message : "Network Error", k = new oe(v, oe.ERR_NETWORK, e, y);
      k.event = _ || null, r(k), y = null;
    }, y.ontimeout = function() {
      let _ = i.timeout ? "timeout of " + i.timeout + "ms exceeded" : "timeout exceeded";
      const v = i.transitional || ka;
      i.timeoutErrorMessage && (_ = i.timeoutErrorMessage), r(new oe(
        _,
        v.clarifyTimeoutError ? oe.ETIMEDOUT : oe.ECONNABORTED,
        e,
        y
      )), y = null;
    }, o === void 0 && a.setContentType(null), "setRequestHeader" in y && C.forEach(a.toJSON(), function(_, v) {
      y.setRequestHeader(v, _);
    }), C.isUndefined(i.withCredentials) || (y.withCredentials = !!i.withCredentials), l && l !== "json" && (y.responseType = i.responseType), s && ([d, m] = cn(s, !0), y.addEventListener("progress", d)), u && y.upload && ([c, p] = cn(u), y.upload.addEventListener("progress", c), y.upload.addEventListener("loadend", p)), (i.cancelToken || i.signal) && (f = (E) => {
      y && (r(!E || E.type ? new Tt(null, e, y) : E), y.abort(), y = null);
    }, i.cancelToken && i.cancelToken.subscribe(f), i.signal && (i.signal.aborted ? f() : i.signal.addEventListener("abort", f)));
    const T = Xh(i.url);
    if (T && Pe.protocols.indexOf(T) === -1) {
      r(new oe("Unsupported protocol " + T + ":", oe.ERR_BAD_REQUEST, e));
      return;
    }
    y.send(o || null);
  });
}, od = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), i;
    const o = function(s) {
      if (!i) {
        i = !0, l();
        const f = s instanceof Error ? s : this.reason;
        r.abort(f instanceof oe ? f : new Tt(f instanceof Error ? f.message : f));
      }
    };
    let a = t && setTimeout(() => {
      a = null, o(new oe(`timeout ${t} of ms exceeded`, oe.ETIMEDOUT));
    }, t);
    const l = () => {
      e && (a && clearTimeout(a), a = null, e.forEach((s) => {
        s.unsubscribe ? s.unsubscribe(o) : s.removeEventListener("abort", o);
      }), e = null);
    };
    e.forEach((s) => s.addEventListener("abort", o));
    const { signal: u } = r;
    return u.unsubscribe = () => C.asap(l), u;
  }
}, ad = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, i;
  for (; r < n; )
    i = r + t, yield e.slice(r, i), r = i;
}, ld = async function* (e, t) {
  for await (const n of sd(e))
    yield* ad(n, t);
}, sd = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: n, value: r } = await t.read();
      if (n)
        break;
      yield r;
    }
  } finally {
    await t.cancel();
  }
}, Ki = (e, t, n, r) => {
  const i = ld(e, t);
  let o = 0, a, l = (u) => {
    a || (a = !0, r && r(u));
  };
  return new ReadableStream({
    async pull(u) {
      try {
        const { done: s, value: f } = await i.next();
        if (s) {
          l(), u.close();
          return;
        }
        let c = f.byteLength;
        if (n) {
          let d = o += c;
          n(d);
        }
        u.enqueue(new Uint8Array(f));
      } catch (s) {
        throw l(s), s;
      }
    },
    cancel(u) {
      return l(u), i.return();
    }
  }, {
    highWaterMark: 2
  });
}, Xi = 64 * 1024, { isFunction: tn } = C, ud = (({ Request: e, Response: t }) => ({
  Request: e,
  Response: t
}))(C.global), {
  ReadableStream: Gi,
  TextEncoder: Qi
} = C.global, Zi = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, cd = (e) => {
  e = C.merge.call({
    skipUndefined: !0
  }, ud, e);
  const { fetch: t, Request: n, Response: r } = e, i = t ? tn(t) : typeof fetch == "function", o = tn(n), a = tn(r);
  if (!i)
    return !1;
  const l = i && tn(Gi), u = i && (typeof Qi == "function" ? /* @__PURE__ */ ((m) => (g) => m.encode(g))(new Qi()) : async (m) => new Uint8Array(await new n(m).arrayBuffer())), s = o && l && Zi(() => {
    let m = !1;
    const g = new n(Pe.origin, {
      body: new Gi(),
      method: "POST",
      get duplex() {
        return m = !0, "half";
      }
    }).headers.has("Content-Type");
    return m && !g;
  }), f = a && l && Zi(() => C.isReadableStream(new r("").body)), c = {
    stream: f && ((m) => m.body)
  };
  i && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((m) => {
    !c[m] && (c[m] = (g, y) => {
      let x = g && g[m];
      if (x)
        return x.call(g);
      throw new oe(`Response type '${m}' is not supported`, oe.ERR_NOT_SUPPORT, y);
    });
  });
  const d = async (m) => {
    if (m == null)
      return 0;
    if (C.isBlob(m))
      return m.size;
    if (C.isSpecCompliantForm(m))
      return (await new n(Pe.origin, {
        method: "POST",
        body: m
      }).arrayBuffer()).byteLength;
    if (C.isArrayBufferView(m) || C.isArrayBuffer(m))
      return m.byteLength;
    if (C.isURLSearchParams(m) && (m = m + ""), C.isString(m))
      return (await u(m)).byteLength;
  }, p = async (m, g) => {
    const y = C.toFiniteNumber(m.getContentLength());
    return y ?? d(g);
  };
  return async (m) => {
    let {
      url: g,
      method: y,
      data: x,
      signal: T,
      cancelToken: E,
      timeout: _,
      onDownloadProgress: v,
      onUploadProgress: k,
      responseType: R,
      headers: B,
      withCredentials: q = "same-origin",
      fetchOptions: S
    } = Ta(m), O = t || fetch;
    R = R ? (R + "").toLowerCase() : "text";
    let z = od([T, E && E.toAbortSignal()], _), N = null;
    const L = z && z.unsubscribe && (() => {
      z.unsubscribe();
    });
    let U;
    try {
      if (k && s && y !== "get" && y !== "head" && (U = await p(B, x)) !== 0) {
        let D = new n(g, {
          method: "POST",
          body: x,
          duplex: "half"
        }), Y;
        if (C.isFormData(x) && (Y = D.headers.get("content-type")) && B.setContentType(Y), D.body) {
          const [b, H] = Wi(
            U,
            cn(Yi(k))
          );
          x = Ki(D.body, Xi, b, H);
        }
      }
      C.isString(q) || (q = q ? "include" : "omit");
      const Q = o && "credentials" in n.prototype, se = {
        ...S,
        signal: z,
        method: y.toUpperCase(),
        headers: B.normalize().toJSON(),
        body: x,
        duplex: "half",
        credentials: Q ? q : void 0
      };
      N = o && new n(g, se);
      let fe = await (o ? O(N, S) : O(g, se));
      const Se = f && (R === "stream" || R === "response");
      if (f && (v || Se && L)) {
        const D = {};
        ["status", "statusText", "headers"].forEach((Z) => {
          D[Z] = fe[Z];
        });
        const Y = C.toFiniteNumber(fe.headers.get("content-length")), [b, H] = v && Wi(
          Y,
          cn(Yi(v), !0)
        ) || [];
        fe = new r(
          Ki(fe.body, Xi, b, () => {
            H && H(), L && L();
          }),
          D
        );
      }
      R = R || "text";
      let h = await c[C.findKey(c, R) || "text"](fe, m);
      return !Se && L && L(), await new Promise((D, Y) => {
        Ea(D, Y, {
          data: h,
          headers: Ne.from(fe.headers),
          status: fe.status,
          statusText: fe.statusText,
          config: m,
          request: N
        });
      });
    } catch (Q) {
      throw L && L(), Q && Q.name === "TypeError" && /Load failed|fetch/i.test(Q.message) ? Object.assign(
        new oe("Network Error", oe.ERR_NETWORK, m, N),
        {
          cause: Q.cause || Q
        }
      ) : oe.from(Q, Q && Q.code, m, N);
    }
  };
}, fd = /* @__PURE__ */ new Map(), Aa = (e) => {
  let t = e ? e.env : {};
  const { fetch: n, Request: r, Response: i } = t, o = [
    r,
    i,
    n
  ];
  let a = o.length, l = a, u, s, f = fd;
  for (; l--; )
    u = o[l], s = f.get(u), s === void 0 && f.set(u, s = l ? /* @__PURE__ */ new Map() : cd(t)), f = s;
  return s;
};
Aa();
const cr = {
  http: Rh,
  xhr: id,
  fetch: {
    get: Aa
  }
};
C.forEach(cr, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const eo = (e) => `- ${e}`, pd = (e) => C.isFunction(e) || e === null || e === !1, Ra = {
  getAdapter: (e, t) => {
    e = C.isArray(e) ? e : [e];
    const { length: n } = e;
    let r, i;
    const o = {};
    for (let a = 0; a < n; a++) {
      r = e[a];
      let l;
      if (i = r, !pd(r) && (i = cr[(l = String(r)).toLowerCase()], i === void 0))
        throw new oe(`Unknown adapter '${l}'`);
      if (i && (C.isFunction(i) || (i = i.get(t))))
        break;
      o[l || "#" + a] = i;
    }
    if (!i) {
      const a = Object.entries(o).map(
        ([u, s]) => `adapter ${u} ` + (s === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let l = n ? a.length > 1 ? `since :
` + a.map(eo).join(`
`) : " " + eo(a[0]) : "as no adapter specified";
      throw new oe(
        "There is no suitable adapter to dispatch the request " + l,
        "ERR_NOT_SUPPORT"
      );
    }
    return i;
  },
  adapters: cr
};
function Xn(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Tt(null, e);
}
function to(e) {
  return Xn(e), e.headers = Ne.from(e.headers), e.data = Kn.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Ra.getAdapter(e.adapter || Ut.adapter, e)(e).then(function(r) {
    return Xn(e), r.data = Kn.call(
      e,
      e.transformResponse,
      r
    ), r.headers = Ne.from(r.headers), r;
  }, function(r) {
    return Sa(r) || (Xn(e), r && r.response && (r.response.data = Kn.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = Ne.from(r.response.headers))), Promise.reject(r);
  });
}
const Oa = "1.12.2", wn = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  wn[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const no = {};
wn.transitional = function(t, n, r) {
  function i(o, a) {
    return "[Axios v" + Oa + "] Transitional option '" + o + "'" + a + (r ? ". " + r : "");
  }
  return (o, a, l) => {
    if (t === !1)
      throw new oe(
        i(a, " has been removed" + (n ? " in " + n : "")),
        oe.ERR_DEPRECATED
      );
    return n && !no[a] && (no[a] = !0, console.warn(
      i(
        a,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, a, l) : !0;
  };
};
wn.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function hd(e, t, n) {
  if (typeof e != "object")
    throw new oe("options must be an object", oe.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let i = r.length;
  for (; i-- > 0; ) {
    const o = r[i], a = t[o];
    if (a) {
      const l = e[o], u = l === void 0 || a(l, o, e);
      if (u !== !0)
        throw new oe("option " + o + " must be " + u, oe.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new oe("Unknown option " + o, oe.ERR_BAD_OPTION);
  }
}
const an = {
  assertOptions: hd,
  validators: wn
}, Ze = an.validators;
let ht = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new Hi(),
      response: new Hi()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let i = {};
        Error.captureStackTrace ? Error.captureStackTrace(i) : i = new Error();
        const o = i.stack ? i.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? o && !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + o) : r.stack = o;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = mt(this.defaults, n);
    const { transitional: r, paramsSerializer: i, headers: o } = n;
    r !== void 0 && an.assertOptions(r, {
      silentJSONParsing: Ze.transitional(Ze.boolean),
      forcedJSONParsing: Ze.transitional(Ze.boolean),
      clarifyTimeoutError: Ze.transitional(Ze.boolean)
    }, !1), i != null && (C.isFunction(i) ? n.paramsSerializer = {
      serialize: i
    } : an.assertOptions(i, {
      encode: Ze.function,
      serialize: Ze.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), an.assertOptions(n, {
      baseUrl: Ze.spelling("baseURL"),
      withXsrfToken: Ze.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let a = o && C.merge(
      o.common,
      o[n.method]
    );
    o && C.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (m) => {
        delete o[m];
      }
    ), n.headers = Ne.concat(a, o);
    const l = [];
    let u = !0;
    this.interceptors.request.forEach(function(g) {
      typeof g.runWhen == "function" && g.runWhen(n) === !1 || (u = u && g.synchronous, l.unshift(g.fulfilled, g.rejected));
    });
    const s = [];
    this.interceptors.response.forEach(function(g) {
      s.push(g.fulfilled, g.rejected);
    });
    let f, c = 0, d;
    if (!u) {
      const m = [to.bind(this), void 0];
      for (m.unshift(...l), m.push(...s), d = m.length, f = Promise.resolve(n); c < d; )
        f = f.then(m[c++], m[c++]);
      return f;
    }
    d = l.length;
    let p = n;
    for (; c < d; ) {
      const m = l[c++], g = l[c++];
      try {
        p = m(p);
      } catch (y) {
        g.call(this, y);
        break;
      }
    }
    try {
      f = to.call(this, p);
    } catch (m) {
      return Promise.reject(m);
    }
    for (c = 0, d = s.length; c < d; )
      f = f.then(s[c++], s[c++]);
    return f;
  }
  getUri(t) {
    t = mt(this.defaults, t);
    const n = Ca(t.baseURL, t.url, t.allowAbsoluteUrls);
    return xa(n, t.params, t.paramsSerializer);
  }
};
C.forEach(["delete", "get", "head", "options"], function(t) {
  ht.prototype[t] = function(n, r) {
    return this.request(mt(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
C.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(o, a, l) {
      return this.request(mt(l || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: a
      }));
    };
  }
  ht.prototype[t] = n(), ht.prototype[t + "Form"] = n(!0);
});
let dd = class Pa {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(o) {
      n = o;
    });
    const r = this;
    this.promise.then((i) => {
      if (!r._listeners) return;
      let o = r._listeners.length;
      for (; o-- > 0; )
        r._listeners[o](i);
      r._listeners = null;
    }), this.promise.then = (i) => {
      let o;
      const a = new Promise((l) => {
        r.subscribe(l), o = l;
      }).then(i);
      return a.cancel = function() {
        r.unsubscribe(o);
      }, a;
    }, t(function(o, a, l) {
      r.reason || (r.reason = new Tt(o, a, l), n(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), n = (r) => {
      t.abort(r);
    };
    return this.subscribe(n), t.signal.unsubscribe = () => this.unsubscribe(n), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new Pa(function(i) {
        t = i;
      }),
      cancel: t
    };
  }
};
function md(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function gd(e) {
  return C.isObject(e) && e.isAxiosError === !0;
}
const fr = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(fr).forEach(([e, t]) => {
  fr[t] = e;
});
function _a(e) {
  const t = new ht(e), n = sa(ht.prototype.request, t);
  return C.extend(n, ht.prototype, t, { allOwnKeys: !0 }), C.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(i) {
    return _a(mt(e, i));
  }, n;
}
const Te = _a(Ut);
Te.Axios = ht;
Te.CanceledError = Tt;
Te.CancelToken = dd;
Te.isCancel = Sa;
Te.VERSION = Oa;
Te.toFormData = bn;
Te.AxiosError = oe;
Te.Cancel = Te.CanceledError;
Te.all = function(t) {
  return Promise.all(t);
};
Te.spread = md;
Te.isAxiosError = gd;
Te.mergeConfig = mt;
Te.AxiosHeaders = Ne;
Te.formToJSON = (e) => va(C.isHTMLForm(e) ? new FormData(e) : e);
Te.getAdapter = Ra.getAdapter;
Te.HttpStatusCode = fr;
Te.default = Te;
const {
  Axios: Id,
  AxiosError: Dd,
  CanceledError: Ld,
  isCancel: jd,
  CancelToken: zd,
  VERSION: Nd,
  all: Md,
  Cancel: Bd,
  isAxiosError: $d,
  spread: Ud,
  toFormData: qd,
  AxiosHeaders: Hd,
  HttpStatusCode: Vd,
  formToJSON: Wd,
  getAdapter: Yd,
  mergeConfig: Jd
} = Te, Fa = "https://asia-southeast1-orion-ai-hk.cloudfunctions.net/api", ro = "https://orion-ai-hk.web.app", Rr = "https://orion-widget.web.app", yd = () => Fa, bd = (e) => {
  const t = Te.create({
    baseURL: e,
    timeout: 6e4,
    // 60s for AI response
    headers: { "Content-Type": "application/json" },
    withCredentials: !0
    // Include cookies (for JWT token)
  }), n = () => {
    try {
      let r = localStorage.getItem("orion_auth_token");
      if (r) return r;
      const i = document.cookie.split(";");
      for (const o of i) {
        const [a, l] = o.trim().split("=");
        if (a === "orion_auth_token" && l)
          return localStorage.setItem("orion_auth_token", l), l;
      }
    } catch (r) {
      console.warn("Failed to access localStorage:", r);
    }
    return null;
  };
  return t.interceptors.request.use(
    (r) => {
      const i = n();
      i ? r.headers.Authorization = `Bearer ${i}` : delete r.headers.Authorization;
      try {
        const o = Intl.DateTimeFormat().resolvedOptions().timeZone;
        r.headers["X-Timezone"] = o;
      } catch {
      }
      return r;
    },
    (r) => Promise.reject(r)
  ), {
    sendMessage: async (r) => (await t.post("/api/chat/message", { message: r })).data,
    getMessages: async (r = 1, i = 20) => (await t.get(`/api/chat/messages?page=${r}&limit=${i}`)).data,
    healthCheck: async () => (await t.get("/api/chat/health")).data
  };
}, Ia = bd(yd()), wd = ({ onSendMessage: e, isLoading: t }) => {
  const [n, r] = tt(""), i = (a) => {
    a.key === "Enter" && !a.shiftKey && (a.preventDefault(), o());
  }, o = () => {
    n.trim() && (e(n), r(""));
  };
  return /* @__PURE__ */ F.jsx("div", { className: "w-full flex justify-center items-center bg-slate-50 border-t border-black/10 py-4", children: /* @__PURE__ */ F.jsx("div", { className: "w-[95vw] shadow-sm rounded-2xl flex flex-col p-2 overflow-hidden bg-white border border-gray-200 md:w-[635px]", children: /* @__PURE__ */ F.jsxs("div", { className: "flex items-center gap-2", children: [
    /* @__PURE__ */ F.jsx(
      "textarea",
      {
        id: "chat-input-textarea",
        value: n,
        onChange: (a) => r(a.target.value),
        onKeyDown: i,
        placeholder: "Type your message here...",
        className: "border-none cursor-text max-h-[50vh] min-h-[40px] mx-2 pt-3 w-full leading-5 text-sm bg-transparent resize-none outline-none text-gray-800 placeholder:text-gray-400 md:max-h-[350px] md:mx-0",
        rows: 1,
        disabled: t
      }
    ),
    /* @__PURE__ */ F.jsx(
      "button",
      {
        onClick: o,
        disabled: !n.trim() || t,
        className: "border-none inline-flex justify-center rounded-2xl cursor-pointer opacity-60 ml-4 bg-transparent transition-opacity hover:opacity-100 disabled:cursor-not-allowed",
        children: t ? /* @__PURE__ */ F.jsx("div", { className: "w-5 h-5 border-2 border-gray-600 border-t-transparent rounded-full animate-spin" }) : /* @__PURE__ */ F.jsx(el, { size: 20, className: "text-gray-600" })
      }
    )
  ] }) }) });
};
function xd(e) {
  const { authUrl: t, expectedOrigin: n, onSuccess: r, onError: i, onClose: o } = e, a = 500, l = 600, u = window.screenX + (window.outerWidth - a) / 2, s = window.screenY + (window.outerHeight - l) / 2, f = window.open(
    t,
    "orion-auth",
    `width=${a},height=${l},left=${u},top=${s},toolbar=no,menubar=no,scrollbars=yes,resizable=yes`
  );
  if (!f)
    return i?.("Popup blocked. Please allow popups for this site."), () => {
    };
  const c = (m) => {
    const g = "https://orion-widget.web.app";
    if (!(m.origin === n || m.origin === g)) {
      console.warn(`Ignored message from unauthorized origin: ${m.origin}. Expected: ${n} or ${g}`);
      return;
    }
    m.data.type === "orion-auth-success" ? (r?.(m.data), p()) : m.data.type === "orion-auth-error" && (i?.(m.data.error || "Authentication failed"), p());
  }, d = setInterval(() => {
    f.closed && (o?.(), p());
  }, 500), p = () => {
    window.removeEventListener("message", c), clearInterval(d), f && !f.closed && f.close();
  };
  return window.addEventListener("message", c), p;
}
function Da() {
  return !!window.opener && window.opener !== window;
}
class La {
  apiBaseUrl;
  frontendUrl;
  usePopup;
  constructor(t = {}) {
    if (this.apiBaseUrl = Fa, this.frontendUrl = ro, t.usePopup !== void 0)
      this.usePopup = t.usePopup;
    else
      try {
        const n = new URL(this.apiBaseUrl).hostname, r = window.location.hostname;
        this.usePopup = n !== r && n !== "localhost" && r !== "localhost";
      } catch {
        this.usePopup = !1;
      }
  }
  /**
   * Initiate Google OAuth authentication
   */
  async signInWithGoogle(t, n) {
    try {
      const r = this.usePopup ? Rr : ro, i = await fetch(
        `${this.apiBaseUrl}/api/auth/google?popup=${this.usePopup}&frontend_url=${encodeURIComponent(r)}`,
        {
          method: "GET",
          credentials: "include"
          // Include cookies
        }
      );
      if (!i.ok)
        throw new Error("Failed to get auth URL");
      const a = (await i.json()).authUrl;
      this.usePopup ? xd({
        authUrl: a,
        expectedOrigin: this.frontendUrl,
        onSuccess: (l) => {
          if (l.token) {
            const u = window.location.protocol === "https:", s = [
              `orion_auth_token=${l.token}`,
              "path=/",
              `max-age=${3600 * 24 * 7}`,
              // 7 days
              "SameSite=None",
              // Required for cross-origin
              u ? "Secure" : ""
              // Required for SameSite=None
            ].filter(Boolean).join("; ");
            document.cookie = s, localStorage.setItem("orion_auth_token", l.token);
          }
          t?.(l);
        },
        onError: (l) => {
          console.error("Auth error:", l), n?.(l);
        }
      }) : window.location.href = a;
    } catch (r) {
      console.error("Error initiating auth:", r), n?.(r instanceof Error ? r.message : "Authentication failed");
    }
  }
  /**
   * Get authentication status
   */
  async getAuthStatus() {
    try {
      let t = localStorage.getItem("orion_auth_token");
      if (!t) {
        const o = document.cookie.split(";");
        for (const a of o) {
          const [l, u] = a.trim().split("=");
          if (l === "orion_auth_token" && u) {
            t = u, localStorage.setItem("orion_auth_token", u);
            break;
          }
        }
      }
      const n = {
        "Content-Type": "application/json"
      };
      t && (n.Authorization = `Bearer ${t}`);
      const r = await fetch(`${this.apiBaseUrl}/api/auth/status`, {
        method: "GET",
        credentials: "include",
        headers: n
      });
      return r.ok ? await r.json() : { isAuthenticated: !1 };
    } catch (t) {
      return console.error("Error getting auth status:", t), { isAuthenticated: !1 };
    }
  }
  /**
   * Logout user
   */
  async logout() {
    try {
      await fetch(`${this.apiBaseUrl}/api/auth/logout`, {
        method: "POST",
        credentials: "include"
      }), localStorage.removeItem("orion_auth_token"), window.location.reload();
    } catch (t) {
      console.error("Error logging out:", t);
    }
  }
}
function kd() {
  if (Da()) {
    const e = new URLSearchParams(window.location.search), t = e.get("auth"), n = e.get("token");
    if (t === "success" && n)
      return window.opener && !window.opener.closed && (window.opener.postMessage(
        {
          type: "orion-auth-success",
          token: n
        },
        "*"
        // Allow any origin for iframe flexibility
      ), window.parent && window.parent !== window && window.parent.postMessage(
        {
          type: "orion-auth-success",
          token: n
        },
        "*"
        // Allow any origin for iframe flexibility
      )), !0;
    {
      const r = e.get("error") || "Authentication failed";
      return window.opener && !window.opener.closed && window.opener.postMessage(
        {
          type: "orion-auth-error",
          error: r
        },
        "*"
      ), !0;
    }
  } else
    return !1;
}
const vd = () => /* @__PURE__ */ F.jsx("div", { className: "w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold", children: "O" }), Sd = ({
  api: e = Ia,
  title: t = "Orion Chat",
  showHeader: n = !0,
  brandIcon: r,
  usePopup: i
}) => {
  const [o, a] = tt([]), [l, u] = tt(!1), [s, f] = tt(!1), [c, d] = tt(!0), [p, m] = tt(1), [, g] = tt(null), y = Wa(null), x = je.useMemo(() => new La({ usePopup: i }), [i]), T = je.useCallback(async (R = 1, B = !1) => {
    try {
      B ? f(!0) : u(!0);
      const S = (await e.getMessages(R, 20)).messages || [];
      a(B ? (O) => [...O, ...S] : S), d(S.length === 20), m(R);
    } catch (q) {
      console.error("Error loading messages:", q);
    } finally {
      u(!1), f(!1);
    }
  }, [e]);
  Lr(() => {
    if (Da()) {
      kd();
      return;
    }
    const R = new URLSearchParams(window.location.search), B = R.get("auth"), q = R.get("token");
    if (B === "success" && q) {
      const O = window.location.protocol === "https:", z = [
        `orion_auth_token=${q}`,
        "path=/",
        `max-age=${3600 * 24 * 7}`,
        // 7 days
        "SameSite=None",
        // Required for cross-origin
        O ? "Secure" : ""
        // Required for SameSite=None
      ].filter(Boolean).join("; ");
      document.cookie = z, localStorage.setItem("orion_auth_token", q);
      const N = window.location.pathname;
      window.history.replaceState({}, "", N), console.log("✅ Authentication successful"), g(!0);
    } else if (B === "error") {
      const O = R.get("error");
      console.error("❌ Authentication failed:", O);
      const z = window.location.pathname;
      window.history.replaceState({}, "", z), g(!1);
    }
    x && x.getAuthStatus().then((O) => {
      g(O.isAuthenticated);
    });
    const S = (O) => {
      if (O.data && O.data.type === "orion-auth-success") {
        if (O.origin === "https://orion-widget.web.app" || O.origin === "https://orion-ai-hk.web.app" || O.origin === window.location.origin || console.warn(`⚠️ Message from unexpected origin: ${O.origin}, but processing anyway for iframe compatibility`), O.data.token) {
          const U = window.location.protocol === "https:", Q = [
            `orion_auth_token=${O.data.token}`,
            "path=/",
            `max-age=${3600 * 24 * 7}`,
            // 7 days
            "SameSite=None",
            // Required for cross-origin
            U ? "Secure" : ""
            // Required for SameSite=None
          ].filter(Boolean).join("; ");
          document.cookie = Q, localStorage.setItem("orion_auth_token", O.data.token), localStorage.getItem("orion_auth_token") !== O.data.token && console.error("⚠️ Failed to store token in localStorage");
        }
        g(!0), T();
      } else O.data.type === "orion-auth-error" && (console.error("❌ Authentication failed:", O.data.error), g(!1));
    };
    return window.addEventListener("message", S), T(), () => {
      window.removeEventListener("message", S);
    };
  }, [x, T]);
  const E = () => {
    const R = y.current;
    R && (R.scrollTop = 0);
  }, _ = (R) => {
    const { scrollTop: B } = R.currentTarget;
    B <= 10 && c && !s && v();
  };
  Lr(() => {
    s || E();
  }, [o, s]);
  const v = je.useCallback(async () => {
    !c || s || await T(p + 1, !0);
  }, [c, s, p, T]), k = async (R) => {
    if (!(!R.trim() || l)) {
      u(!0);
      try {
        const B = {
          _id: `temp_${Date.now()}`,
          role: "user",
          content: R,
          timestamp: (/* @__PURE__ */ new Date()).toISOString(),
          tags: []
        };
        a((S) => [B, ...S]);
        const q = await e.sendMessage(R);
        q.message && a((S) => [q.message, ...S]);
      } catch (B) {
        console.error("Error sending message:", B), a((q) => q.slice(1));
      } finally {
        u(!1);
      }
    }
  };
  return /* @__PURE__ */ F.jsxs("div", { className: "h-full w-full bg-slate-50 flex flex-col", children: [
    n && /* @__PURE__ */ F.jsx("div", { className: "p-4 border-b border-black/10 flex-shrink-0", children: /* @__PURE__ */ F.jsxs("div", { className: "flex items-center gap-2", children: [
      r ?? /* @__PURE__ */ F.jsx(vd, {}),
      /* @__PURE__ */ F.jsx("h1", { className: "text-xl font-semibold text-gray-800", children: t })
    ] }) }),
    /* @__PURE__ */ F.jsx(
      "div",
      {
        ref: y,
        className: "flex-1 overflow-y-auto flex flex-col-reverse",
        onScroll: _,
        children: o.length === 0 && !l ? /* @__PURE__ */ F.jsx("div", { className: "flex justify-center items-center h-full", children: /* @__PURE__ */ F.jsx("p", { className: "text-gray-500", children: "Start a conversation with Orion!" }) }) : /* @__PURE__ */ F.jsxs(F.Fragment, { children: [
          /* @__PURE__ */ F.jsx("div", {}),
          l && /* @__PURE__ */ F.jsx("div", { className: "flex justify-center items-end w-full bg-white p-4", children: /* @__PURE__ */ F.jsxs("div", { className: "flex items-center gap-2 text-gray-600", children: [
            /* @__PURE__ */ F.jsxs("div", { className: "flex space-x-1", children: [
              /* @__PURE__ */ F.jsx("div", { className: "w-2 h-2 bg-gray-400 rounded-full animate-bounce" }),
              /* @__PURE__ */ F.jsx("div", { className: "w-2 h-2 bg-gray-400 rounded-full animate-bounce", style: { animationDelay: "0.1s" } }),
              /* @__PURE__ */ F.jsx("div", { className: "w-2 h-2 bg-gray-400 rounded-full animate-bounce", style: { animationDelay: "0.2s" } })
            ] }),
            /* @__PURE__ */ F.jsx("span", { className: "text-sm", children: "Thinking..." })
          ] }) }),
          o.map((R) => /* @__PURE__ */ F.jsx(
            Ed,
            {
              message: R,
              usePopup: i,
              authService: x,
              onAuthSuccess: () => T()
            },
            R._id
          )),
          s && /* @__PURE__ */ F.jsx("div", { className: "flex justify-center py-4", children: /* @__PURE__ */ F.jsxs("div", { className: "flex items-center gap-2 text-gray-500", children: [
            /* @__PURE__ */ F.jsx("div", { className: "w-4 h-4 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin" }),
            /* @__PURE__ */ F.jsx("span", { className: "text-sm", children: "Loading more messages..." })
          ] }) })
        ] })
      }
    ),
    /* @__PURE__ */ F.jsx("div", { className: "flex-shrink-0 px-4", children: /* @__PURE__ */ F.jsx(wd, { onSendMessage: k, isLoading: l }) })
  ] });
}, Ed = ({ message: e, usePopup: t, authService: n, onAuthSuccess: r }) => {
  const i = e.role === "user";
  return /* @__PURE__ */ F.jsx("div", { className: "flex justify-center items-end w-full bg-white", children: /* @__PURE__ */ F.jsx("div", { className: "p-4 w-full max-w-4xl", children: /* @__PURE__ */ F.jsx("div", { className: `flex ${i ? "justify-end" : "justify-start"}`, children: /* @__PURE__ */ F.jsx("div", { className: `max-w-[85%] ${i ? "ml-auto" : "mr-auto"}`, children: i ? /* @__PURE__ */ F.jsx("div", { className: "bg-blue-500 text-white rounded-2xl rounded-br-md px-4 py-3 shadow-sm", children: /* @__PURE__ */ F.jsx("span", { className: "whitespace-pre-line text-sm leading-relaxed", children: e.content }) }) : /* @__PURE__ */ F.jsx("div", { className: "text-gray-800 font-normal text-sm break-words", children: /* @__PURE__ */ F.jsx("div", { className: "prose prose-sm max-w-none", children: /* @__PURE__ */ F.jsx(
    Vo,
    {
      remarkPlugins: [Up],
      components: {
        p: ({ children: o }) => /* @__PURE__ */ F.jsx("p", { className: "mb-2 last:mb-0", children: o }),
        ul: ({ children: o }) => /* @__PURE__ */ F.jsx("ul", { className: "list-disc list-inside mb-2", children: o }),
        ol: ({ children: o }) => /* @__PURE__ */ F.jsx("ol", { className: "list-decimal list-inside mb-2", children: o }),
        li: ({ children: o }) => /* @__PURE__ */ F.jsx("li", { className: "mb-1", children: o }),
        a: ({ href: o, children: a }) => o?.includes("/api/auth/google") ? /* @__PURE__ */ F.jsx(
          "a",
          {
            href: "#",
            onClick: (u) => {
              u.preventDefault(), u.stopPropagation(), n ? n.signInWithGoogle(
                () => {
                  r?.();
                },
                (s) => {
                  console.error("Auth error:", s);
                }
              ) : new La({ usePopup: t || !1 }).signInWithGoogle(
                () => {
                  r?.();
                },
                (f) => {
                  console.error("Auth error:", f);
                }
              );
            },
            onMouseDown: (u) => {
              u.button === 0 && u.preventDefault();
            },
            onAuxClick: (u) => {
              u.button !== 0 && u.preventDefault();
            },
            className: "text-blue-600 hover:text-blue-800 underline font-medium cursor-pointer",
            children: a
          }
        ) : /* @__PURE__ */ F.jsx(
          "a",
          {
            href: o,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "text-blue-600 hover:text-blue-800 underline font-medium",
            children: a
          }
        ),
        code: ({ children: o, className: a }) => a ? /* @__PURE__ */ F.jsx("code", { className: "block bg-gray-100 p-2 rounded text-sm font-mono overflow-x-auto", children: o }) : /* @__PURE__ */ F.jsx("code", { className: "bg-gray-100 px-1 py-0.5 rounded text-sm font-mono", children: o }),
        pre: ({ children: o }) => /* @__PURE__ */ F.jsx("pre", { className: "bg-gray-100 p-2 rounded text-sm font-mono overflow-x-auto mb-2", children: o }),
        blockquote: ({ children: o }) => /* @__PURE__ */ F.jsx("blockquote", { className: "border-l-4 border-gray-300 pl-4 italic mb-2", children: o })
      },
      children: e.content
    }
  ) }) }) }) }) }) });
};
function Cd({
  title: e = "Orion Chat",
  defaultOpen: t = !1,
  zIndex: n = 2147483e3,
  position: r = "bottom-right",
  fabLabel: i,
  onOpenChange: o,
  api: a
}) {
  const [l, u] = tt(t), s = r === "bottom-left" ? "left-4" : "right-4", f = (c) => {
    u(c), o?.(c);
  };
  return /* @__PURE__ */ F.jsxs("div", { className: "orion-widget", children: [
    /* @__PURE__ */ F.jsxs(
      "button",
      {
        type: "button",
        "aria-label": i ?? (l ? "Close chat" : "Open chat"),
        onClick: () => f(!l),
        className: `fixed ${s} bottom-4 inline-flex items-center justify-center gap-2 rounded-full shadow-lg bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 transition-colors px-4 py-3`,
        style: { zIndex: n },
        children: [
          /* @__PURE__ */ F.jsx(hr, { size: 18 }),
          /* @__PURE__ */ F.jsx("span", { className: "text-sm font-semibold", children: i ?? "Chat" })
        ]
      }
    ),
    l && /* @__PURE__ */ F.jsxs("div", { className: "fixed inset-0", style: { zIndex: n - 1 }, children: [
      /* @__PURE__ */ F.jsx(
        "div",
        {
          className: "absolute inset-0 bg-black/40 animate-fade-in",
          onClick: () => f(!1)
        }
      ),
      /* @__PURE__ */ F.jsxs(
        "div",
        {
          className: `absolute ${s} bottom-20 w-[min(420px,calc(100vw-2rem))] h-[min(640px,calc(100vh-6rem))] bg-white rounded-2xl shadow-2xl overflow-hidden border border-black/10 animate-slide-up flex flex-col`,
          children: [
            /* @__PURE__ */ F.jsxs("div", { className: "flex items-center justify-between px-4 py-3 border-b border-black/10 bg-white flex-shrink-0", children: [
              /* @__PURE__ */ F.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ F.jsx("div", { className: "w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold", children: "O" }),
                /* @__PURE__ */ F.jsx("div", { className: "font-semibold text-gray-800", children: e })
              ] }),
              /* @__PURE__ */ F.jsx(
                "button",
                {
                  type: "button",
                  "aria-label": "Close chat",
                  onClick: () => f(!1),
                  className: "p-2 rounded-lg hover:bg-gray-100 active:bg-gray-200",
                  children: /* @__PURE__ */ F.jsx(dr, { size: 18, className: "text-gray-700" })
                }
              )
            ] }),
            /* @__PURE__ */ F.jsx("div", { className: "flex-1 min-h-0", children: /* @__PURE__ */ F.jsx(
              Sd,
              {
                api: a || Ia,
                showHeader: !1,
                usePopup: !0
              }
            ) })
          ]
        }
      )
    ] })
  ] });
}
const Td = '/*! tailwindcss v4.1.13 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-space-x-reverse:0;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-leading:initial;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-duration:initial;--tw-ease:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-red-100:oklch(93.6% .032 17.717);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-red-800:oklch(44.4% .177 26.899);--color-orange-50:oklch(98% .016 73.684);--color-orange-200:oklch(90.1% .076 70.697);--color-orange-700:oklch(55.3% .195 38.402);--color-orange-900:oklch(40.8% .123 38.172);--color-yellow-50:oklch(98.7% .026 102.212);--color-yellow-100:oklch(97.3% .071 103.193);--color-yellow-500:oklch(79.5% .184 86.047);--color-yellow-800:oklch(47.6% .114 61.907);--color-yellow-900:oklch(42.1% .095 57.708);--color-green-50:oklch(98.2% .018 155.826);--color-green-100:oklch(96.2% .044 156.743);--color-green-200:oklch(92.5% .084 155.995);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-green-800:oklch(44.8% .119 151.328);--color-green-900:oklch(39.3% .095 152.535);--color-blue-50:oklch(97% .014 254.604);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-blue-800:oklch(42.4% .199 265.638);--color-blue-900:oklch(37.9% .146 265.522);--color-purple-50:oklch(97.7% .014 308.299);--color-purple-200:oklch(90.2% .063 306.703);--color-purple-500:oklch(62.7% .265 303.9);--color-purple-700:oklch(49.6% .265 301.924);--color-purple-900:oklch(38.1% .176 304.987);--color-pink-500:oklch(65.6% .241 354.308);--color-slate-50:oklch(98.4% .003 247.858);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-md:28rem;--container-4xl:56rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-lg:1.125rem;--text-lg--line-height:calc(1.75/1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75/1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2/1.5);--text-4xl:2.25rem;--text-4xl--line-height:calc(2.5/2.25);--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--leading-relaxed:1.625;--radius-md:.375rem;--radius-lg:.5rem;--radius-2xl:1rem;--ease-out:cubic-bezier(0,0,.2,1);--ease-in-out:cubic-bezier(.4,0,.2,1);--animate-spin:spin 1s linear infinite;--animate-bounce:bounce 1s infinite;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.visible{visibility:visible}.sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.static{position:static}.inset-0{inset:calc(var(--spacing)*0)}.right-4{right:calc(var(--spacing)*4)}.bottom-4{bottom:calc(var(--spacing)*4)}.bottom-20{bottom:calc(var(--spacing)*20)}.left-4{left:calc(var(--spacing)*4)}.container{width:100%}@media (min-width:40rem){.container{max-width:40rem}}@media (min-width:48rem){.container{max-width:48rem}}@media (min-width:64rem){.container{max-width:64rem}}@media (min-width:80rem){.container{max-width:80rem}}@media (min-width:96rem){.container{max-width:96rem}}.mx-2{margin-inline:calc(var(--spacing)*2)}.mx-auto{margin-inline:auto}.mt-1{margin-top:calc(var(--spacing)*1)}.mt-2{margin-top:calc(var(--spacing)*2)}.mt-3{margin-top:calc(var(--spacing)*3)}.mr-auto{margin-right:auto}.mb-1{margin-bottom:calc(var(--spacing)*1)}.mb-2{margin-bottom:calc(var(--spacing)*2)}.mb-3{margin-bottom:calc(var(--spacing)*3)}.mb-4{margin-bottom:calc(var(--spacing)*4)}.mb-6{margin-bottom:calc(var(--spacing)*6)}.ml-4{margin-left:calc(var(--spacing)*4)}.ml-auto{margin-left:auto}.block{display:block}.flex{display:flex}.hidden{display:none}.inline{display:inline}.inline-flex{display:inline-flex}.table{display:table}.h-2{height:calc(var(--spacing)*2)}.h-4{height:calc(var(--spacing)*4)}.h-5{height:calc(var(--spacing)*5)}.h-6{height:calc(var(--spacing)*6)}.h-8{height:calc(var(--spacing)*8)}.h-16{height:calc(var(--spacing)*16)}.h-\\[min\\(640px\\,calc\\(100vh-6rem\\)\\)\\]{height:min(640px,100vh - 6rem)}.h-full{height:100%}.h-screen{height:100vh}.max-h-\\[50vh\\]{max-height:50vh}.min-h-0{min-height:calc(var(--spacing)*0)}.min-h-\\[40px\\]{min-height:40px}.min-h-screen{min-height:100vh}.w-2{width:calc(var(--spacing)*2)}.w-4{width:calc(var(--spacing)*4)}.w-5{width:calc(var(--spacing)*5)}.w-6{width:calc(var(--spacing)*6)}.w-8{width:calc(var(--spacing)*8)}.w-16{width:calc(var(--spacing)*16)}.w-\\[95vw\\]{width:95vw}.w-\\[min\\(420px\\,calc\\(100vw-2rem\\)\\)\\]{width:min(420px,100vw - 2rem)}.w-full{width:100%}.w-screen{width:100vw}.max-w-4xl{max-width:var(--container-4xl)}.max-w-\\[85\\%\\]{max-width:85%}.max-w-md{max-width:var(--container-md)}.max-w-none{max-width:none}.flex-1{flex:1}.flex-shrink-0{flex-shrink:0}.flex-grow{flex-grow:1}.rotate-180{rotate:180deg}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.animate-bounce{animation:var(--animate-bounce)}.animate-spin{animation:var(--animate-spin)}.cursor-pointer{cursor:pointer}.cursor-text{cursor:text}.resize{resize:both}.resize-none{resize:none}.list-inside{list-style-position:inside}.list-decimal{list-style-type:decimal}.list-disc{list-style-type:disc}.flex-col{flex-direction:column}.flex-col-reverse{flex-direction:column-reverse}.flex-row{flex-direction:row}.flex-row-reverse{flex-direction:row-reverse}.items-center{align-items:center}.items-end{align-items:flex-end}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.justify-start{justify-content:flex-start}.gap-2{gap:calc(var(--spacing)*2)}.gap-3{gap:calc(var(--spacing)*3)}:where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*1)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*1)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-6>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*6)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*6)*calc(1 - var(--tw-space-y-reverse)))}.gap-x-5{column-gap:calc(var(--spacing)*5)}:where(.space-x-1>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing)*1)*var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing)*1)*calc(1 - var(--tw-space-x-reverse)))}.overflow-hidden{overflow:hidden}.overflow-x-auto{overflow-x:auto}.overflow-y-auto{overflow-y:auto}.rounded{border-radius:.25rem}.rounded-2xl{border-radius:var(--radius-2xl)}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-br-md{border-bottom-right-radius:var(--radius-md)}.border{border-style:var(--tw-border-style);border-width:1px}.border-0{border-style:var(--tw-border-style);border-width:0}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-4{border-style:var(--tw-border-style);border-width:4px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-l-4{border-left-style:var(--tw-border-style);border-left-width:4px}.border-none{--tw-border-style:none;border-style:none}.border-black\\/10{border-color:#0000001a}@supports (color:color-mix(in lab,red,red)){.border-black\\/10{border-color:color-mix(in oklab,var(--color-black)10%,transparent)}}.border-blue-200{border-color:var(--color-blue-200)}.border-blue-500{border-color:var(--color-blue-500)}.border-gray-200{border-color:var(--color-gray-200)}.border-gray-300{border-color:var(--color-gray-300)}.border-gray-600{border-color:var(--color-gray-600)}.border-green-200{border-color:var(--color-green-200)}.border-green-500{border-color:var(--color-green-500)}.border-orange-200{border-color:var(--color-orange-200)}.border-purple-200{border-color:var(--color-purple-200)}.border-purple-500{border-color:var(--color-purple-500)}.border-yellow-500{border-color:var(--color-yellow-500)}.border-t-blue-500{border-top-color:var(--color-blue-500)}.border-t-transparent{border-top-color:#0000}.bg-black\\/40{background-color:#0006}@supports (color:color-mix(in lab,red,red)){.bg-black\\/40{background-color:color-mix(in oklab,var(--color-black)40%,transparent)}}.bg-blue-50{background-color:var(--color-blue-50)}.bg-blue-100{background-color:var(--color-blue-100)}.bg-blue-500{background-color:var(--color-blue-500)}.bg-blue-600{background-color:var(--color-blue-600)}.bg-gray-50{background-color:var(--color-gray-50)}.bg-gray-100{background-color:var(--color-gray-100)}.bg-gray-200{background-color:var(--color-gray-200)}.bg-gray-400{background-color:var(--color-gray-400)}.bg-green-50{background-color:var(--color-green-50)}.bg-green-100{background-color:var(--color-green-100)}.bg-green-600{background-color:var(--color-green-600)}.bg-orange-50{background-color:var(--color-orange-50)}.bg-purple-50{background-color:var(--color-purple-50)}.bg-red-100{background-color:var(--color-red-100)}.bg-red-600{background-color:var(--color-red-600)}.bg-slate-50{background-color:var(--color-slate-50)}.bg-transparent{background-color:#0000}.bg-white{background-color:var(--color-white)}.bg-yellow-50{background-color:var(--color-yellow-50)}.bg-yellow-100{background-color:var(--color-yellow-100)}.bg-gradient-to-br{--tw-gradient-position:to bottom right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.from-purple-500{--tw-gradient-from:var(--color-purple-500);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.to-pink-500{--tw-gradient-to:var(--color-pink-500);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.object-cover{object-fit:cover}.p-2{padding:calc(var(--spacing)*2)}.p-4{padding:calc(var(--spacing)*4)}.p-8{padding:calc(var(--spacing)*8)}.px-1{padding-inline:calc(var(--spacing)*1)}.px-2{padding-inline:calc(var(--spacing)*2)}.px-3{padding-inline:calc(var(--spacing)*3)}.px-4{padding-inline:calc(var(--spacing)*4)}.py-0\\.5{padding-block:calc(var(--spacing)*.5)}.py-1{padding-block:calc(var(--spacing)*1)}.py-3{padding-block:calc(var(--spacing)*3)}.py-4{padding-block:calc(var(--spacing)*4)}.pt-3{padding-top:calc(var(--spacing)*3)}.pl-4{padding-left:calc(var(--spacing)*4)}.text-center{text-align:center}.text-left{text-align:left}.text-right{text-align:right}.font-mono{font-family:var(--font-mono)}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-4xl{font-size:var(--text-4xl);line-height:var(--tw-leading,var(--text-4xl--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.leading-5{--tw-leading:calc(var(--spacing)*5);line-height:calc(var(--spacing)*5)}.leading-relaxed{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.break-words{overflow-wrap:break-word}.whitespace-pre-line{white-space:pre-line}.text-blue-600{color:var(--color-blue-600)}.text-blue-700{color:var(--color-blue-700)}.text-blue-800{color:var(--color-blue-800)}.text-blue-900{color:var(--color-blue-900)}.text-gray-500{color:var(--color-gray-500)}.text-gray-600{color:var(--color-gray-600)}.text-gray-700{color:var(--color-gray-700)}.text-gray-800{color:var(--color-gray-800)}.text-gray-900{color:var(--color-gray-900)}.text-green-600{color:var(--color-green-600)}.text-green-700{color:var(--color-green-700)}.text-green-800{color:var(--color-green-800)}.text-green-900{color:var(--color-green-900)}.text-orange-700{color:var(--color-orange-700)}.text-orange-900{color:var(--color-orange-900)}.text-purple-700{color:var(--color-purple-700)}.text-purple-900{color:var(--color-purple-900)}.text-red-600{color:var(--color-red-600)}.text-red-700{color:var(--color-red-700)}.text-red-800{color:var(--color-red-800)}.text-white{color:var(--color-white)}.text-yellow-800{color:var(--color-yellow-800)}.text-yellow-900{color:var(--color-yellow-900)}.italic{font-style:italic}.underline{text-decoration-line:underline}.opacity-60{opacity:.6}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-2xl{--tw-shadow:0 25px 50px -12px var(--tw-shadow-color,#00000040);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.blur{--tw-blur:blur(8px);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition\\!{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-200{--tw-duration:.2s;transition-duration:.2s}.duration-300{--tw-duration:.3s;transition-duration:.3s}.ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}.ease-out{--tw-ease:var(--ease-out);transition-timing-function:var(--ease-out)}.outline-none{--tw-outline-style:none;outline-style:none}.placeholder\\:text-gray-400::placeholder{color:var(--color-gray-400)}.last\\:mb-0:last-child{margin-bottom:calc(var(--spacing)*0)}@media (hover:hover){.hover\\:bg-blue-700:hover{background-color:var(--color-blue-700)}.hover\\:bg-gray-100:hover{background-color:var(--color-gray-100)}.hover\\:text-blue-800:hover{color:var(--color-blue-800)}.hover\\:opacity-100:hover{opacity:1}}.active\\:bg-blue-800:active{background-color:var(--color-blue-800)}.active\\:bg-gray-200:active{background-color:var(--color-gray-200)}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}@media (min-width:48rem){.md\\:mx-0{margin-inline:calc(var(--spacing)*0)}.md\\:max-h-\\[350px\\]{max-height:350px}.md\\:w-\\[635px\\]{width:635px}}}:host{font-family:Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,sans-serif}.orion-widget{font-family:inherit}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-space-x-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-gradient-position{syntax:"*";inherits:false}@property --tw-gradient-from{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-via{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-to{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-stops{syntax:"*";inherits:false}@property --tw-gradient-via-stops{syntax:"*";inherits:false}@property --tw-gradient-from-position{syntax:"<length-percentage>";inherits:false;initial-value:0%}@property --tw-gradient-via-position{syntax:"<length-percentage>";inherits:false;initial-value:50%}@property --tw-gradient-to-position{syntax:"<length-percentage>";inherits:false;initial-value:100%}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}@property --tw-ease{syntax:"*";inherits:false}@keyframes spin{to{transform:rotate(360deg)}}@keyframes bounce{0%,to{animation-timing-function:cubic-bezier(.8,0,1,1);transform:translateY(-25%)}50%{animation-timing-function:cubic-bezier(0,0,.2,1);transform:none}}';
function Kd({
  widgetUrl: e = Rr,
  title: t = "Orion Chat",
  defaultOpen: n = !1,
  zIndex: r = 2147483e3,
  position: i = "bottom-right",
  fabLabel: o,
  onOpenChange: a
}) {
  const [l, u] = tt(n), s = i === "bottom-left" ? "left-4" : "right-4", f = (d) => {
    u(d), a?.(d);
  }, c = oo(() => new URL("/widget", e).toString(), [e]);
  return /* @__PURE__ */ F.jsxs("div", { className: "orion-widget-iframe", children: [
    /* @__PURE__ */ F.jsxs(
      "button",
      {
        type: "button",
        "aria-label": o ?? (l ? "Close chat" : "Open chat"),
        onClick: () => f(!l),
        className: `fixed ${s} bottom-4 inline-flex items-center justify-center gap-2 rounded-full shadow-lg bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 transition-colors px-4 py-3`,
        style: { zIndex: r },
        children: [
          /* @__PURE__ */ F.jsx(hr, { size: 18 }),
          /* @__PURE__ */ F.jsx("span", { className: "text-sm font-semibold", children: o ?? "Chat" })
        ]
      }
    ),
    l && /* @__PURE__ */ F.jsxs("div", { className: "fixed inset-0", style: { zIndex: r - 1 }, children: [
      /* @__PURE__ */ F.jsx(
        "div",
        {
          className: "absolute inset-0 bg-black/40 animate-fade-in",
          onClick: () => f(!1)
        }
      ),
      /* @__PURE__ */ F.jsxs(
        "div",
        {
          className: `absolute ${s} bottom-20 w-[min(420px,calc(100vw-2rem))] h-[min(640px,calc(100vh-6rem))] bg-white rounded-2xl shadow-2xl overflow-hidden border border-black/10 animate-slide-up flex flex-col`,
          children: [
            /* @__PURE__ */ F.jsxs("div", { className: "flex items-center justify-between px-4 py-3 border-b border-black/10 bg-white flex-shrink-0", children: [
              /* @__PURE__ */ F.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ F.jsx("div", { className: "w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold", children: "O" }),
                /* @__PURE__ */ F.jsx("div", { className: "font-semibold text-gray-800", children: t })
              ] }),
              /* @__PURE__ */ F.jsx(
                "button",
                {
                  type: "button",
                  "aria-label": "Close chat",
                  onClick: () => f(!1),
                  className: "p-2 rounded-lg hover:bg-gray-100 active:bg-gray-200",
                  children: /* @__PURE__ */ F.jsx(dr, { size: 18, className: "text-gray-700" })
                }
              )
            ] }),
            /* @__PURE__ */ F.jsx("div", { className: "flex-1 min-h-0", children: /* @__PURE__ */ F.jsx(
              "iframe",
              {
                src: c,
                title: t,
                allow: "camera; microphone; geolocation",
                sandbox: "allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-modals",
                style: {
                  width: "100%",
                  height: "100%",
                  border: "none"
                },
                className: "w-full h-full"
              }
            ) })
          ]
        }
      )
    ] })
  ] });
}
function Xd({
  widgetUrl: e = Rr,
  position: t = "bottom-right",
  zIndex: n = 2147483e3,
  buttonLabel: r,
  onToggle: i
}) {
  const [o, a] = tt(!1), l = t === "bottom-left" ? "left-4" : "right-4", u = () => {
    const f = !o;
    a(f), i?.(f);
  }, s = oo(() => new URL("/widget", e).toString(), [e]);
  return /* @__PURE__ */ F.jsxs("div", { className: "orion-chat-bubble", style: { zIndex: n }, children: [
    /* @__PURE__ */ F.jsx(
      "button",
      {
        type: "button",
        "aria-label": o ? "Close chat" : "Open chat",
        onClick: u,
        className: `fixed ${l} bottom-4 inline-flex items-center justify-center gap-2 rounded-full shadow-lg bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 transition-all duration-200 px-4 py-3 ${o ? "rotate-180" : ""}`,
        style: { zIndex: n },
        children: o ? /* @__PURE__ */ F.jsx(dr, { size: 20 }) : /* @__PURE__ */ F.jsxs(F.Fragment, { children: [
          /* @__PURE__ */ F.jsx(hr, { size: 20 }),
          r && /* @__PURE__ */ F.jsx("span", { className: "text-sm font-semibold", children: r })
        ] })
      }
    ),
    o && /* @__PURE__ */ F.jsxs(F.Fragment, { children: [
      /* @__PURE__ */ F.jsx(
        "div",
        {
          className: "fixed inset-0 bg-black/40 animate-fade-in",
          onClick: u,
          style: { zIndex: n - 1 }
        }
      ),
      /* @__PURE__ */ F.jsx(
        "div",
        {
          className: `fixed ${l} bottom-20 w-[min(420px,calc(100vw-2rem))] h-[min(640px,calc(100vh-6rem))] bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 animate-slide-up`,
          style: { zIndex: n - 1 },
          children: /* @__PURE__ */ F.jsx(
            "iframe",
            {
              src: s,
              title: "Orion Chat",
              allow: "camera; microphone; geolocation",
              sandbox: "allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-modals",
              className: "w-full h-full border-0",
              style: { display: "block" }
            }
          )
        }
      )
    ] })
  ] });
}
function Ad(e) {
  if (e.getElementById("orion-chat-widget-style")) return;
  const n = document.createElement("style");
  n.id = "orion-chat-widget-style", n.textContent = Td, e.appendChild(n);
}
function Rd(e) {
  const {
    target: t,
    shadow: n = !0,
    title: r,
    defaultOpen: i,
    zIndex: o,
    position: a,
    fabLabel: l,
    onOpenChange: u
  } = e, s = document.createElement("div");
  s.id = `orion-chat-widget-${Math.random().toString(36).slice(2)}`;
  let f, c;
  if (n) {
    const d = s.attachShadow({ mode: "open" });
    Ad(d), c = document.createElement("div"), d.appendChild(c);
  } else
    c = s;
  return (t ?? document.body).appendChild(s), f = Ya(c), f.render(
    je.createElement(
      je.StrictMode,
      null,
      je.createElement(Cd, {
        title: r,
        defaultOpen: i,
        zIndex: o,
        position: a,
        fabLabel: l,
        onOpenChange: u
      })
    )
  ), {
    host: s,
    destroy: () => {
      f.unmount(), s.remove();
    }
  };
}
typeof window < "u" && (window.OrionChatWidget = window.OrionChatWidget ?? { initOrionChatWidget: Rd });
export {
  Xd as OrionChatBubble,
  Cd as OrionChatWidget,
  Kd as OrionChatWidgetIframe,
  Rd as initOrionChatWidget
};
//# sourceMappingURL=orion-chat-widget.es.js.map
