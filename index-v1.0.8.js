function e(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}! function() {
    const e = document.createElement("link").relList;
    if (!(e && e.supports && e.supports("modulepreload"))) {
        for (const e of document.querySelectorAll('link[rel="modulepreload"]')) t(e);
        new MutationObserver((e => {
            for (const n of e)
                if ("childList" === n.type)
                    for (const e of n.addedNodes) "LINK" === e.tagName && "modulepreload" === e.rel && t(e)
        })).observe(document, {
            childList: !0,
            subtree: !0
        })
    }

    function t(e) {
        if (e.ep) return;
        e.ep = !0;
        const t = function(e) {
            const t = {};
            return e.integrity && (t.integrity = e.integrity), e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy), "use-credentials" === e.crossOrigin ? t.credentials = "include" : "anonymous" === e.crossOrigin ? t.credentials = "omit" : t.credentials = "same-origin", t
        }(e);
        fetch(e.href, t)
    }
}();
var t = {
        exports: {}
    },
    n = {},
    r = {
        exports: {}
    },
    o = {},
    a = Symbol.for("react.element"),
    i = Symbol.for("react.portal"),
    l = Symbol.for("react.fragment"),
    s = Symbol.for("react.strict_mode"),
    u = Symbol.for("react.profiler"),
    c = Symbol.for("react.provider"),
    d = Symbol.for("react.context"),
    f = Symbol.for("react.forward_ref"),
    p = Symbol.for("react.suspense"),
    h = Symbol.for("react.memo"),
    m = Symbol.for("react.lazy"),
    g = Symbol.iterator;
var v = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    },
    y = Object.assign,
    b = {};

function w(e, t, n) {
    this.props = e, this.context = t, this.refs = b, this.updater = n || v
}

function C() {}

function x(e, t, n) {
    this.props = e, this.context = t, this.refs = b, this.updater = n || v
}
w.prototype.isReactComponent = {}, w.prototype.setState = function(e, t) {
    if ("object" != typeof e && "function" != typeof e && null != e) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}, w.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}, C.prototype = w.prototype;
var S = x.prototype = new C;
S.constructor = x, y(S, w.prototype), S.isPureReactComponent = !0;
var E = Array.isArray,
    _ = Object.prototype.hasOwnProperty,
    R = {
        current: null
    },
    k = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function O(e, t, n) {
    var r, o = {},
        i = null,
        l = null;
    if (null != t)
        for (r in void 0 !== t.ref && (l = t.ref), void 0 !== t.key && (i = "" + t.key), t) _.call(t, r) && !k.hasOwnProperty(r) && (o[r] = t[r]);
    var s = arguments.length - 2;
    if (1 === s) o.children = n;
    else if (1 < s) {
        for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
        o.children = u
    }
    if (e && e.defaultProps)
        for (r in s = e.defaultProps) void 0 === o[r] && (o[r] = s[r]);
    return {
        $$typeof: a,
        type: e,
        key: i,
        ref: l,
        props: o,
        _owner: R.current
    }
}

function N(e) {
    return "object" == typeof e && null !== e && e.$$typeof === a
}
var j = /\/+/g;

function P(e, t) {
    return "object" == typeof e && null !== e && null != e.key ? function(e) {
        var t = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + e.replace(/[=:]/g, (function(e) {
            return t[e]
        }))
    }("" + e.key) : t.toString(36)
}

function L(e, t, n, r, o) {
    var l = typeof e;
    "undefined" !== l && "boolean" !== l || (e = null);
    var s = !1;
    if (null === e) s = !0;
    else switch (l) {
        case "string":
        case "number":
            s = !0;
            break;
        case "object":
            switch (e.$$typeof) {
                case a:
                case i:
                    s = !0
            }
    }
    if (s) return o = o(s = e), e = "" === r ? "." + P(s, 0) : r, E(o) ? (n = "", null != e && (n = e.replace(j, "$&/") + "/"), L(o, t, n, "", (function(e) {
        return e
    }))) : null != o && (N(o) && (o = function(e, t) {
        return {
            $$typeof: a,
            type: e.type,
            key: t,
            ref: e.ref,
            props: e.props,
            _owner: e._owner
        }
    }(o, n + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(j, "$&/") + "/") + e)), t.push(o)), 1;
    if (s = 0, r = "" === r ? "." : r + ":", E(e))
        for (var u = 0; u < e.length; u++) {
            var c = r + P(l = e[u], u);
            s += L(l, t, n, c, o)
        } else if (c = function(e) {
                return null === e || "object" != typeof e ? null : "function" == typeof(e = g && e[g] || e["@@iterator"]) ? e : null
            }(e), "function" == typeof c)
            for (e = c.call(e), u = 0; !(l = e.next()).done;) s += L(l = l.value, t, n, c = r + P(l, u++), o);
        else if ("object" === l) throw t = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return s
}

function T(e, t, n) {
    if (null == e) return e;
    var r = [],
        o = 0;
    return L(e, r, "", "", (function(e) {
        return t.call(n, e, o++)
    })), r
}

function M(e) {
    if (-1 === e._status) {
        var t = e._result;
        (t = t()).then((function(t) {
            0 !== e._status && -1 !== e._status || (e._status = 1, e._result = t)
        }), (function(t) {
            0 !== e._status && -1 !== e._status || (e._status = 2, e._result = t)
        })), -1 === e._status && (e._status = 0, e._result = t)
    }
    if (1 === e._status) return e._result.default;
    throw e._result
}
var F = {
        current: null
    },
    A = {
        transition: null
    },
    D = {
        ReactCurrentDispatcher: F,
        ReactCurrentBatchConfig: A,
        ReactCurrentOwner: R
    };
o.Children = {
    map: T,
    forEach: function(e, t, n) {
        T(e, (function() {
            t.apply(this, arguments)
        }), n)
    },
    count: function(e) {
        var t = 0;
        return T(e, (function() {
            t++
        })), t
    },
    toArray: function(e) {
        return T(e, (function(e) {
            return e
        })) || []
    },
    only: function(e) {
        if (!N(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
}, o.Component = w, o.Fragment = l, o.Profiler = u, o.PureComponent = x, o.StrictMode = s, o.Suspense = p, o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = D, o.cloneElement = function(e, t, n) {
    if (null == e) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = y({}, e.props),
        o = e.key,
        i = e.ref,
        l = e._owner;
    if (null != t) {
        if (void 0 !== t.ref && (i = t.ref, l = R.current), void 0 !== t.key && (o = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
        for (u in t) _.call(t, u) && !k.hasOwnProperty(u) && (r[u] = void 0 === t[u] && void 0 !== s ? s[u] : t[u])
    }
    var u = arguments.length - 2;
    if (1 === u) r.children = n;
    else if (1 < u) {
        s = Array(u);
        for (var c = 0; c < u; c++) s[c] = arguments[c + 2];
        r.children = s
    }
    return {
        $$typeof: a,
        type: e.type,
        key: o,
        ref: i,
        props: r,
        _owner: l
    }
}, o.createContext = function(e) {
    return (e = {
        $$typeof: d,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }).Provider = {
        $$typeof: c,
        _context: e
    }, e.Consumer = e
}, o.createElement = O, o.createFactory = function(e) {
    var t = O.bind(null, e);
    return t.type = e, t
}, o.createRef = function() {
    return {
        current: null
    }
}, o.forwardRef = function(e) {
    return {
        $$typeof: f,
        render: e
    }
}, o.isValidElement = N, o.lazy = function(e) {
    return {
        $$typeof: m,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: M
    }
}, o.memo = function(e, t) {
    return {
        $$typeof: h,
        type: e,
        compare: void 0 === t ? null : t
    }
}, o.startTransition = function(e) {
    var t = A.transition;
    A.transition = {};
    try {
        e()
    } finally {
        A.transition = t
    }
}, o.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.")
}, o.useCallback = function(e, t) {
    return F.current.useCallback(e, t)
}, o.useContext = function(e) {
    return F.current.useContext(e)
}, o.useDebugValue = function() {}, o.useDeferredValue = function(e) {
    return F.current.useDeferredValue(e)
}, o.useEffect = function(e, t) {
    return F.current.useEffect(e, t)
}, o.useId = function() {
    return F.current.useId()
}, o.useImperativeHandle = function(e, t, n) {
    return F.current.useImperativeHandle(e, t, n)
}, o.useInsertionEffect = function(e, t) {
    return F.current.useInsertionEffect(e, t)
}, o.useLayoutEffect = function(e, t) {
    return F.current.useLayoutEffect(e, t)
}, o.useMemo = function(e, t) {
    return F.current.useMemo(e, t)
}, o.useReducer = function(e, t, n) {
    return F.current.useReducer(e, t, n)
}, o.useRef = function(e) {
    return F.current.useRef(e)
}, o.useState = function(e) {
    return F.current.useState(e)
}, o.useSyncExternalStore = function(e, t, n) {
    return F.current.useSyncExternalStore(e, t, n)
}, o.useTransition = function() {
    return F.current.useTransition()
}, o.version = "18.2.0", r.exports = o;
var I = r.exports;
const z = e(I);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var U = I,
    V = Symbol.for("react.element"),
    B = Symbol.for("react.fragment"),
    H = Object.prototype.hasOwnProperty,
    $ = U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    q = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function K(e, t, n) {
    var r, o = {},
        a = null,
        i = null;
    for (r in void 0 !== n && (a = "" + n), void 0 !== t.key && (a = "" + t.key), void 0 !== t.ref && (i = t.ref), t) H.call(t, r) && !q.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps) void 0 === o[r] && (o[r] = t[r]);
    return {
        $$typeof: V,
        type: e,
        key: a,
        ref: i,
        props: o,
        _owner: $.current
    }
}
n.Fragment = B, n.jsx = K, n.jsxs = K, t.exports = n;
var Q = t.exports,
    W = {},
    G = {
        exports: {}
    },
    Z = {},
    X = {
        exports: {}
    },
    J = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
! function(e) {
    function t(e, t) {
        var n = e.length;
        e.push(t);
        e: for (; 0 < n;) {
            var r = n - 1 >>> 1,
                a = e[r];
            if (!(0 < o(a, t))) break e;
            e[r] = t, e[n] = a, n = r
        }
    }

    function n(e) {
        return 0 === e.length ? null : e[0]
    }

    function r(e) {
        if (0 === e.length) return null;
        var t = e[0],
            n = e.pop();
        if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length, i = a >>> 1; r < i;) {
                var l = 2 * (r + 1) - 1,
                    s = e[l],
                    u = l + 1,
                    c = e[u];
                if (0 > o(s, n)) u < a && 0 > o(c, s) ? (e[r] = c, e[u] = n, r = u) : (e[r] = s, e[l] = n, r = l);
                else {
                    if (!(u < a && 0 > o(c, n))) break e;
                    e[r] = c, e[u] = n, r = u
                }
            }
        }
        return t
    }

    function o(e, t) {
        var n = e.sortIndex - t.sortIndex;
        return 0 !== n ? n : e.id - t.id
    }
    if ("object" == typeof performance && "function" == typeof performance.now) {
        var a = performance;
        e.unstable_now = function() {
            return a.now()
        }
    } else {
        var i = Date,
            l = i.now();
        e.unstable_now = function() {
            return i.now() - l
        }
    }
    var s = [],
        u = [],
        c = 1,
        d = null,
        f = 3,
        p = !1,
        h = !1,
        m = !1,
        g = "function" == typeof setTimeout ? setTimeout : null,
        v = "function" == typeof clearTimeout ? clearTimeout : null,
        y = "undefined" != typeof setImmediate ? setImmediate : null;

    function b(e) {
        for (var o = n(u); null !== o;) {
            if (null === o.callback) r(u);
            else {
                if (!(o.startTime <= e)) break;
                r(u), o.sortIndex = o.expirationTime, t(s, o)
            }
            o = n(u)
        }
    }

    function w(e) {
        if (m = !1, b(e), !h)
            if (null !== n(s)) h = !0, L(C);
            else {
                var t = n(u);
                null !== t && T(w, t.startTime - e)
            }
    }

    function C(t, o) {
        h = !1, m && (m = !1, v(_), _ = -1), p = !0;
        var a = f;
        try {
            for (b(o), d = n(s); null !== d && (!(d.expirationTime > o) || t && !O());) {
                var i = d.callback;
                if ("function" == typeof i) {
                    d.callback = null, f = d.priorityLevel;
                    var l = i(d.expirationTime <= o);
                    o = e.unstable_now(), "function" == typeof l ? d.callback = l : d === n(s) && r(s), b(o)
                } else r(s);
                d = n(s)
            }
            if (null !== d) var c = !0;
            else {
                var g = n(u);
                null !== g && T(w, g.startTime - o), c = !1
            }
            return c
        } finally {
            d = null, f = a, p = !1
        }
    }
    "undefined" != typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    var x, S = !1,
        E = null,
        _ = -1,
        R = 5,
        k = -1;

    function O() {
        return !(e.unstable_now() - k < R)
    }

    function N() {
        if (null !== E) {
            var t = e.unstable_now();
            k = t;
            var n = !0;
            try {
                n = E(!0, t)
            } finally {
                n ? x() : (S = !1, E = null)
            }
        } else S = !1
    }
    if ("function" == typeof y) x = function() {
        y(N)
    };
    else if ("undefined" != typeof MessageChannel) {
        var j = new MessageChannel,
            P = j.port2;
        j.port1.onmessage = N, x = function() {
            P.postMessage(null)
        }
    } else x = function() {
        g(N, 0)
    };

    function L(e) {
        E = e, S || (S = !0, x())
    }

    function T(t, n) {
        _ = g((function() {
            t(e.unstable_now())
        }), n)
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(e) {
        e.callback = null
    }, e.unstable_continueExecution = function() {
        h || p || (h = !0, L(C))
    }, e.unstable_forceFrameRate = function(e) {
        0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : R = 0 < e ? Math.floor(1e3 / e) : 5
    }, e.unstable_getCurrentPriorityLevel = function() {
        return f
    }, e.unstable_getFirstCallbackNode = function() {
        return n(s)
    }, e.unstable_next = function(e) {
        switch (f) {
            case 1:
            case 2:
            case 3:
                var t = 3;
                break;
            default:
                t = f
        }
        var n = f;
        f = t;
        try {
            return e()
        } finally {
            f = n
        }
    }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(e, t) {
        switch (e) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                e = 3
        }
        var n = f;
        f = e;
        try {
            return t()
        } finally {
            f = n
        }
    }, e.unstable_scheduleCallback = function(r, o, a) {
        var i = e.unstable_now();
        switch ("object" == typeof a && null !== a ? a = "number" == typeof(a = a.delay) && 0 < a ? i + a : i : a = i, r) {
            case 1:
                var l = -1;
                break;
            case 2:
                l = 250;
                break;
            case 5:
                l = 1073741823;
                break;
            case 4:
                l = 1e4;
                break;
            default:
                l = 5e3
        }
        return r = {
            id: c++,
            callback: o,
            priorityLevel: r,
            startTime: a,
            expirationTime: l = a + l,
            sortIndex: -1
        }, a > i ? (r.sortIndex = a, t(u, r), null === n(s) && r === n(u) && (m ? (v(_), _ = -1) : m = !0, T(w, a - i))) : (r.sortIndex = l, t(s, r), h || p || (h = !0, L(C))), r
    }, e.unstable_shouldYield = O, e.unstable_wrapCallback = function(e) {
        var t = f;
        return function() {
            var n = f;
            f = t;
            try {
                return e.apply(this, arguments)
            } finally {
                f = n
            }
        }
    }
}(J), X.exports = J;
var Y = X.exports,
    ee = I,
    te = Y;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function ne(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var re = new Set,
    oe = {};

function ae(e, t) {
    ie(e, t), ie(e + "Capture", t)
}

function ie(e, t) {
    for (oe[e] = t, e = 0; e < t.length; e++) re.add(t[e])
}
var le = !("undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement),
    se = Object.prototype.hasOwnProperty,
    ue = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    ce = {},
    de = {};

function fe(e, t, n, r, o, a, i) {
    this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = a, this.removeEmptyString = i
}
var pe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e) {
    pe[e] = new fe(e, 0, !1, e, null, !1, !1)
})), [
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
].forEach((function(e) {
    var t = e[0];
    pe[t] = new fe(t, 1, !1, e[1], null, !1, !1)
})), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function(e) {
    pe[e] = new fe(e, 2, !1, e.toLowerCase(), null, !1, !1)
})), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function(e) {
    pe[e] = new fe(e, 2, !1, e, null, !1, !1)
})), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e) {
    pe[e] = new fe(e, 3, !1, e.toLowerCase(), null, !1, !1)
})), ["checked", "multiple", "muted", "selected"].forEach((function(e) {
    pe[e] = new fe(e, 3, !0, e, null, !1, !1)
})), ["capture", "download"].forEach((function(e) {
    pe[e] = new fe(e, 4, !1, e, null, !1, !1)
})), ["cols", "rows", "size", "span"].forEach((function(e) {
    pe[e] = new fe(e, 6, !1, e, null, !1, !1)
})), ["rowSpan", "start"].forEach((function(e) {
    pe[e] = new fe(e, 5, !1, e.toLowerCase(), null, !1, !1)
}));
var he = /[\-:]([a-z])/g;

function me(e) {
    return e[1].toUpperCase()
}

function ge(e, t, n, r) {
    var o = pe.hasOwnProperty(t) ? pe[t] : null;
    (null !== o ? 0 !== o.type : r || !(2 < t.length) || "o" !== t[0] && "O" !== t[0] || "n" !== t[1] && "N" !== t[1]) && (function(e, t, n, r) {
        if (null == t || function(e, t, n, r) {
                if (null !== n && 0 === n.type) return !1;
                switch (typeof t) {
                    case "function":
                    case "symbol":
                        return !0;
                    case "boolean":
                        return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
                    default:
                        return !1
                }
            }(e, t, n, r)) return !0;
        if (r) return !1;
        if (null !== n) switch (n.type) {
            case 3:
                return !t;
            case 4:
                return !1 === t;
            case 5:
                return isNaN(t);
            case 6:
                return isNaN(t) || 1 > t
        }
        return !1
    }(t, n, o, r) && (n = null), r || null === o ? function(e) {
        return !!se.call(de, e) || !se.call(ce, e) && (ue.test(e) ? de[e] = !0 : (ce[e] = !0, !1))
    }(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = null === n ? 3 !== o.type && "" : n : (t = o.attributeName, r = o.attributeNamespace, null === n ? e.removeAttribute(t) : (n = 3 === (o = o.type) || 4 === o && !0 === n ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e) {
    var t = e.replace(he, me);
    pe[t] = new fe(t, 1, !1, e, null, !1, !1)
})), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e) {
    var t = e.replace(he, me);
    pe[t] = new fe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
})), ["xml:base", "xml:lang", "xml:space"].forEach((function(e) {
    var t = e.replace(he, me);
    pe[t] = new fe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
})), ["tabIndex", "crossOrigin"].forEach((function(e) {
    pe[e] = new fe(e, 1, !1, e.toLowerCase(), null, !1, !1)
})), pe.xlinkHref = new fe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach((function(e) {
    pe[e] = new fe(e, 1, !1, e.toLowerCase(), null, !0, !0)
}));
var ve = ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    ye = Symbol.for("react.element"),
    be = Symbol.for("react.portal"),
    we = Symbol.for("react.fragment"),
    Ce = Symbol.for("react.strict_mode"),
    xe = Symbol.for("react.profiler"),
    Se = Symbol.for("react.provider"),
    Ee = Symbol.for("react.context"),
    _e = Symbol.for("react.forward_ref"),
    Re = Symbol.for("react.suspense"),
    ke = Symbol.for("react.suspense_list"),
    Oe = Symbol.for("react.memo"),
    Ne = Symbol.for("react.lazy"),
    je = Symbol.for("react.offscreen"),
    Pe = Symbol.iterator;

function Le(e) {
    return null === e || "object" != typeof e ? null : "function" == typeof(e = Pe && e[Pe] || e["@@iterator"]) ? e : null
}
var Te, Me = Object.assign;

function Fe(e) {
    if (void 0 === Te) try {
        throw Error()
    } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Te = t && t[1] || ""
    }
    return "\n" + Te + e
}
var Ae = !1;

function De(e, t) {
    if (!e || Ae) return "";
    Ae = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                    throw Error()
                }, Object.defineProperty(t.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }), "object" == typeof Reflect && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && "string" == typeof u.stack) {
            for (var o = u.stack.split("\n"), a = r.stack.split("\n"), i = o.length - 1, l = a.length - 1; 1 <= i && 0 <= l && o[i] !== a[l];) l--;
            for (; 1 <= i && 0 <= l; i--, l--)
                if (o[i] !== a[l]) {
                    if (1 !== i || 1 !== l)
                        do {
                            if (i--, 0 > --l || o[i] !== a[l]) {
                                var s = "\n" + o[i].replace(" at new ", " at ");
                                return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s
                            }
                        } while (1 <= i && 0 <= l);
                    break
                }
        }
    } finally {
        Ae = !1, Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? Fe(e) : ""
}

function Ie(e) {
    switch (e.tag) {
        case 5:
            return Fe(e.type);
        case 16:
            return Fe("Lazy");
        case 13:
            return Fe("Suspense");
        case 19:
            return Fe("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = De(e.type, !1);
        case 11:
            return e = De(e.type.render, !1);
        case 1:
            return e = De(e.type, !0);
        default:
            return ""
    }
}

function ze(e) {
    if (null == e) return null;
    if ("function" == typeof e) return e.displayName || e.name || null;
    if ("string" == typeof e) return e;
    switch (e) {
        case we:
            return "Fragment";
        case be:
            return "Portal";
        case xe:
            return "Profiler";
        case Ce:
            return "StrictMode";
        case Re:
            return "Suspense";
        case ke:
            return "SuspenseList"
    }
    if ("object" == typeof e) switch (e.$$typeof) {
        case Ee:
            return (e.displayName || "Context") + ".Consumer";
        case Se:
            return (e._context.displayName || "Context") + ".Provider";
        case _e:
            var t = e.render;
            return (e = e.displayName) || (e = "" !== (e = t.displayName || t.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case Oe:
            return null !== (t = e.displayName || null) ? t : ze(e.type) || "Memo";
        case Ne:
            t = e._payload, e = e._init;
            try {
                return ze(e(t))
            } catch (n) {}
    }
    return null
}

function Ue(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = (e = t.render).displayName || e.name || "", t.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return ze(t);
        case 8:
            return t === Ce ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if ("function" == typeof t) return t.displayName || t.name || null;
            if ("string" == typeof t) return t
    }
    return null
}

function Ve(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
        case "object":
            return e;
        default:
            return ""
    }
}

function Be(e) {
    var t = e.type;
    return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
}

function He(e) {
    e._valueTracker || (e._valueTracker = function(e) {
        var t = Be(e) ? "checked" : "value",
            n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
            r = "" + e[t];
        if (!e.hasOwnProperty(t) && void 0 !== n && "function" == typeof n.get && "function" == typeof n.set) {
            var o = n.get,
                a = n.set;
            return Object.defineProperty(e, t, {
                configurable: !0,
                get: function() {
                    return o.call(this)
                },
                set: function(e) {
                    r = "" + e, a.call(this, e)
                }
            }), Object.defineProperty(e, t, {
                enumerable: n.enumerable
            }), {
                getValue: function() {
                    return r
                },
                setValue: function(e) {
                    r = "" + e
                },
                stopTracking: function() {
                    e._valueTracker = null, delete e[t]
                }
            }
        }
    }(e))
}

function $e(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = Be(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== n && (t.setValue(e), !0)
}

function qe(e) {
    if (void 0 === (e = e || ("undefined" != typeof document ? document : void 0))) return null;
    try {
        return e.activeElement || e.body
    } catch (t) {
        return e.body
    }
}

function Ke(e, t) {
    var n = t.checked;
    return Me({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: null != n ? n : e._wrapperState.initialChecked
    })
}

function Qe(e, t) {
    var n = null == t.defaultValue ? "" : t.defaultValue,
        r = null != t.checked ? t.checked : t.defaultChecked;
    n = Ve(null != t.value ? t.value : n), e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
    }
}

function We(e, t) {
    null != (t = t.checked) && ge(e, "checked", t, !1)
}

function Ge(e, t) {
    We(e, t);
    var n = Ve(t.value),
        r = t.type;
    if (null != n) "number" === r ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if ("submit" === r || "reset" === r) return void e.removeAttribute("value");
    t.hasOwnProperty("value") ? Xe(e, t.type, n) : t.hasOwnProperty("defaultValue") && Xe(e, t.type, Ve(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked)
}

function Ze(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!("submit" !== r && "reset" !== r || void 0 !== t.value && null !== t.value)) return;
        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
    }
    "" !== (n = e.name) && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, "" !== n && (e.name = n)
}

function Xe(e, t, n) {
    "number" === t && qe(e.ownerDocument) === e || (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Je = Array.isArray;

function Ye(e, t, n, r) {
    if (e = e.options, t) {
        t = {};
        for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + Ve(n), t = null, o = 0; o < e.length; o++) {
            if (e[o].value === n) return e[o].selected = !0, void(r && (e[o].defaultSelected = !0));
            null !== t || e[o].disabled || (t = e[o])
        }
        null !== t && (t.selected = !0)
    }
}

function et(e, t) {
    if (null != t.dangerouslySetInnerHTML) throw Error(ne(91));
    return Me({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}

function tt(e, t) {
    var n = t.value;
    if (null == n) {
        if (n = t.children, t = t.defaultValue, null != n) {
            if (null != t) throw Error(ne(92));
            if (Je(n)) {
                if (1 < n.length) throw Error(ne(93));
                n = n[0]
            }
            t = n
        }
        null == t && (t = ""), n = t
    }
    e._wrapperState = {
        initialValue: Ve(n)
    }
}

function nt(e, t) {
    var n = Ve(t.value),
        r = Ve(t.defaultValue);
    null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)), null != r && (e.defaultValue = "" + r)
}

function rt(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t)
}

function ot(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function at(e, t) {
    return null == e || "http://www.w3.org/1999/xhtml" === e ? ot(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e
}
var it, lt, st = (lt = function(e, t) {
    if ("http://www.w3.org/2000/svg" !== e.namespaceURI || "innerHTML" in e) e.innerHTML = t;
    else {
        for ((it = it || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = it.firstChild; e.firstChild;) e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild)
    }
}, "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction ? function(e, t, n, r) {
    MSApp.execUnsafeLocalFunction((function() {
        return lt(e, t)
    }))
} : lt);

function ut(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && 3 === n.nodeType) return void(n.nodeValue = t)
    }
    e.textContent = t
}
var ct = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    },
    dt = ["Webkit", "ms", "Moz", "O"];

function ft(e, t, n) {
    return null == t || "boolean" == typeof t || "" === t ? "" : n || "number" != typeof t || 0 === t || ct.hasOwnProperty(e) && ct[e] ? ("" + t).trim() : t + "px"
}

function pt(e, t) {
    for (var n in e = e.style, t)
        if (t.hasOwnProperty(n)) {
            var r = 0 === n.indexOf("--"),
                o = ft(n, t[n], r);
            "float" === n && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o
        }
}
Object.keys(ct).forEach((function(e) {
    dt.forEach((function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), ct[t] = ct[e]
    }))
}));
var ht = Me({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});

function mt(e, t) {
    if (t) {
        if (ht[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(ne(137, e));
        if (null != t.dangerouslySetInnerHTML) {
            if (null != t.children) throw Error(ne(60));
            if ("object" != typeof t.dangerouslySetInnerHTML || !("__html" in t.dangerouslySetInnerHTML)) throw Error(ne(61))
        }
        if (null != t.style && "object" != typeof t.style) throw Error(ne(62))
    }
}

function gt(e, t) {
    if (-1 === e.indexOf("-")) return "string" == typeof t.is;
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
    }
}
var vt = null;

function yt(e) {
    return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e
}
var bt = null,
    wt = null,
    Ct = null;

function xt(e) {
    if (e = va(e)) {
        if ("function" != typeof bt) throw Error(ne(280));
        var t = e.stateNode;
        t && (t = ba(t), bt(e.stateNode, e.type, t))
    }
}

function St(e) {
    wt ? Ct ? Ct.push(e) : Ct = [e] : wt = e
}

function Et() {
    if (wt) {
        var e = wt,
            t = Ct;
        if (Ct = wt = null, xt(e), t)
            for (e = 0; e < t.length; e++) xt(t[e])
    }
}

function _t(e, t) {
    return e(t)
}

function Rt() {}
var kt = !1;

function Ot(e, t, n) {
    if (kt) return e(t, n);
    kt = !0;
    try {
        return _t(e, t, n)
    } finally {
        kt = !1, (null !== wt || null !== Ct) && (Rt(), Et())
    }
}

function Nt(e, t) {
    var n = e.stateNode;
    if (null === n) return null;
    var r = ba(n);
    if (null === r) return null;
    n = r[t];
    e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !r;
            break e;
        default:
            e = !1
    }
    if (e) return null;
    if (n && "function" != typeof n) throw Error(ne(231, t, typeof n));
    return n
}
var jt = !1;
if (le) try {
    var Pt = {};
    Object.defineProperty(Pt, "passive", {
        get: function() {
            jt = !0
        }
    }), window.addEventListener("test", Pt, Pt), window.removeEventListener("test", Pt, Pt)
} catch (lt) {
    jt = !1
}

function Lt(e, t, n, r, o, a, i, l, s) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (c) {
        this.onError(c)
    }
}
var Tt = !1,
    Mt = null,
    Ft = !1,
    At = null,
    Dt = {
        onError: function(e) {
            Tt = !0, Mt = e
        }
    };

function It(e, t, n, r, o, a, i, l, s) {
    Tt = !1, Mt = null, Lt.apply(Dt, arguments)
}

function zt(e) {
    var t = e,
        n = e;
    if (e.alternate)
        for (; t.return;) t = t.return;
    else {
        e = t;
        do {
            0 != (4098 & (t = e).flags) && (n = t.return), e = t.return
        } while (e)
    }
    return 3 === t.tag ? n : null
}

function Ut(e) {
    if (13 === e.tag) {
        var t = e.memoizedState;
        if (null === t && (null !== (e = e.alternate) && (t = e.memoizedState)), null !== t) return t.dehydrated
    }
    return null
}

function Vt(e) {
    if (zt(e) !== e) throw Error(ne(188))
}

function Bt(e) {
    return null !== (e = function(e) {
        var t = e.alternate;
        if (!t) {
            if (null === (t = zt(e))) throw Error(ne(188));
            return t !== e ? null : e
        }
        for (var n = e, r = t;;) {
            var o = n.return;
            if (null === o) break;
            var a = o.alternate;
            if (null === a) {
                if (null !== (r = o.return)) {
                    n = r;
                    continue
                }
                break
            }
            if (o.child === a.child) {
                for (a = o.child; a;) {
                    if (a === n) return Vt(o), e;
                    if (a === r) return Vt(o), t;
                    a = a.sibling
                }
                throw Error(ne(188))
            }
            if (n.return !== r.return) n = o, r = a;
            else {
                for (var i = !1, l = o.child; l;) {
                    if (l === n) {
                        i = !0, n = o, r = a;
                        break
                    }
                    if (l === r) {
                        i = !0, r = o, n = a;
                        break
                    }
                    l = l.sibling
                }
                if (!i) {
                    for (l = a.child; l;) {
                        if (l === n) {
                            i = !0, n = a, r = o;
                            break
                        }
                        if (l === r) {
                            i = !0, r = a, n = o;
                            break
                        }
                        l = l.sibling
                    }
                    if (!i) throw Error(ne(189))
                }
            }
            if (n.alternate !== r) throw Error(ne(190))
        }
        if (3 !== n.tag) throw Error(ne(188));
        return n.stateNode.current === n ? e : t
    }(e)) ? Ht(e) : null
}

function Ht(e) {
    if (5 === e.tag || 6 === e.tag) return e;
    for (e = e.child; null !== e;) {
        var t = Ht(e);
        if (null !== t) return t;
        e = e.sibling
    }
    return null
}
var $t = te.unstable_scheduleCallback,
    qt = te.unstable_cancelCallback,
    Kt = te.unstable_shouldYield,
    Qt = te.unstable_requestPaint,
    Wt = te.unstable_now,
    Gt = te.unstable_getCurrentPriorityLevel,
    Zt = te.unstable_ImmediatePriority,
    Xt = te.unstable_UserBlockingPriority,
    Jt = te.unstable_NormalPriority,
    Yt = te.unstable_LowPriority,
    en = te.unstable_IdlePriority,
    tn = null,
    nn = null;
var rn = Math.clz32 ? Math.clz32 : function(e) {
        return e >>>= 0, 0 === e ? 32 : 31 - (on(e) / an | 0) | 0
    },
    on = Math.log,
    an = Math.LN2;
var ln = 64,
    sn = 4194304;

function un(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return 4194240 & e;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return 130023424 & e;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
    }
}

function cn(e, t) {
    var n = e.pendingLanes;
    if (0 === n) return 0;
    var r = 0,
        o = e.suspendedLanes,
        a = e.pingedLanes,
        i = 268435455 & n;
    if (0 !== i) {
        var l = i & ~o;
        0 !== l ? r = un(l) : 0 !== (a &= i) && (r = un(a))
    } else 0 !== (i = n & ~o) ? r = un(i) : 0 !== a && (r = un(a));
    if (0 === r) return 0;
    if (0 !== t && t !== r && 0 == (t & o) && ((o = r & -r) >= (a = t & -t) || 16 === o && 0 != (4194240 & a))) return t;
    if (0 != (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes))
        for (e = e.entanglements, t &= r; 0 < t;) o = 1 << (n = 31 - rn(t)), r |= e[n], t &= ~o;
    return r
}

function dn(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        default:
            return -1
    }
}

function fn(e) {
    return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0
}

function pn() {
    var e = ln;
    return 0 == (4194240 & (ln <<= 1)) && (ln = 64), e
}

function hn(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t
}

function mn(e, t, n) {
    e.pendingLanes |= t, 536870912 !== t && (e.suspendedLanes = 0, e.pingedLanes = 0), (e = e.eventTimes)[t = 31 - rn(t)] = n
}

function gn(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - rn(n),
            o = 1 << r;
        o & t | e[r] & t && (e[r] |= t), n &= ~o
    }
}
var vn = 0;

function yn(e) {
    return 1 < (e &= -e) ? 4 < e ? 0 != (268435455 & e) ? 16 : 536870912 : 4 : 1
}
var bn, wn, Cn, xn, Sn, En = !1,
    _n = [],
    Rn = null,
    kn = null,
    On = null,
    Nn = new Map,
    jn = new Map,
    Pn = [],
    Ln = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function Tn(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            Rn = null;
            break;
        case "dragenter":
        case "dragleave":
            kn = null;
            break;
        case "mouseover":
        case "mouseout":
            On = null;
            break;
        case "pointerover":
        case "pointerout":
            Nn.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            jn.delete(t.pointerId)
    }
}

function Mn(e, t, n, r, o, a) {
    return null === e || e.nativeEvent !== a ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: a,
        targetContainers: [o]
    }, null !== t && (null !== (t = va(t)) && wn(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, null !== o && -1 === t.indexOf(o) && t.push(o), e)
}

function Fn(e) {
    var t = ga(e.target);
    if (null !== t) {
        var n = zt(t);
        if (null !== n)
            if (13 === (t = n.tag)) {
                if (null !== (t = Ut(n))) return e.blockedOn = t, void Sn(e.priority, (function() {
                    Cn(n)
                }))
            } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated) return void(e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null)
    }
    e.blockedOn = null
}

function An(e) {
    if (null !== e.blockedOn) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = Qn(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (null !== n) return null !== (t = va(n)) && wn(t), e.blockedOn = n, !1;
        var r = new(n = e.nativeEvent).constructor(n.type, n);
        vt = r, n.target.dispatchEvent(r), vt = null, t.shift()
    }
    return !0
}

function Dn(e, t, n) {
    An(e) && n.delete(t)
}

function In() {
    En = !1, null !== Rn && An(Rn) && (Rn = null), null !== kn && An(kn) && (kn = null), null !== On && An(On) && (On = null), Nn.forEach(Dn), jn.forEach(Dn)
}

function zn(e, t) {
    e.blockedOn === t && (e.blockedOn = null, En || (En = !0, te.unstable_scheduleCallback(te.unstable_NormalPriority, In)))
}

function Un(e) {
    function t(t) {
        return zn(t, e)
    }
    if (0 < _n.length) {
        zn(_n[0], e);
        for (var n = 1; n < _n.length; n++) {
            var r = _n[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (null !== Rn && zn(Rn, e), null !== kn && zn(kn, e), null !== On && zn(On, e), Nn.forEach(t), jn.forEach(t), n = 0; n < Pn.length; n++)(r = Pn[n]).blockedOn === e && (r.blockedOn = null);
    for (; 0 < Pn.length && null === (n = Pn[0]).blockedOn;) Fn(n), null === n.blockedOn && Pn.shift()
}
var Vn = ve.ReactCurrentBatchConfig,
    Bn = !0;

function Hn(e, t, n, r) {
    var o = vn,
        a = Vn.transition;
    Vn.transition = null;
    try {
        vn = 1, qn(e, t, n, r)
    } finally {
        vn = o, Vn.transition = a
    }
}

function $n(e, t, n, r) {
    var o = vn,
        a = Vn.transition;
    Vn.transition = null;
    try {
        vn = 4, qn(e, t, n, r)
    } finally {
        vn = o, Vn.transition = a
    }
}

function qn(e, t, n, r) {
    if (Bn) {
        var o = Qn(e, t, n, r);
        if (null === o) Bo(e, t, r, Kn, n), Tn(e, r);
        else if (function(e, t, n, r, o) {
                switch (t) {
                    case "focusin":
                        return Rn = Mn(Rn, e, t, n, r, o), !0;
                    case "dragenter":
                        return kn = Mn(kn, e, t, n, r, o), !0;
                    case "mouseover":
                        return On = Mn(On, e, t, n, r, o), !0;
                    case "pointerover":
                        var a = o.pointerId;
                        return Nn.set(a, Mn(Nn.get(a) || null, e, t, n, r, o)), !0;
                    case "gotpointercapture":
                        return a = o.pointerId, jn.set(a, Mn(jn.get(a) || null, e, t, n, r, o)), !0
                }
                return !1
            }(o, e, t, n, r)) r.stopPropagation();
        else if (Tn(e, r), 4 & t && -1 < Ln.indexOf(e)) {
            for (; null !== o;) {
                var a = va(o);
                if (null !== a && bn(a), null === (a = Qn(e, t, n, r)) && Bo(e, t, r, Kn, n), a === o) break;
                o = a
            }
            null !== o && r.stopPropagation()
        } else Bo(e, t, r, null, n)
    }
}
var Kn = null;

function Qn(e, t, n, r) {
    if (Kn = null, null !== (e = ga(e = yt(r))))
        if (null === (t = zt(e))) e = null;
        else if (13 === (n = t.tag)) {
        if (null !== (e = Ut(t))) return e;
        e = null
    } else if (3 === n) {
        if (t.stateNode.current.memoizedState.isDehydrated) return 3 === t.tag ? t.stateNode.containerInfo : null;
        e = null
    } else t !== e && (e = null);
    return Kn = e, null
}

function Wn(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (Gt()) {
                case Zt:
                    return 1;
                case Xt:
                    return 4;
                case Jt:
                case Yt:
                    return 16;
                case en:
                    return 536870912;
                default:
                    return 16
            }
            default:
                return 16
    }
}
var Gn = null,
    Zn = null,
    Xn = null;

function Jn() {
    if (Xn) return Xn;
    var e, t, n = Zn,
        r = n.length,
        o = "value" in Gn ? Gn.value : Gn.textContent,
        a = o.length;
    for (e = 0; e < r && n[e] === o[e]; e++);
    var i = r - e;
    for (t = 1; t <= i && n[r - t] === o[a - t]; t++);
    return Xn = o.slice(e, 1 < t ? 1 - t : void 0)
}

function Yn(e) {
    var t = e.keyCode;
    return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0
}

function er() {
    return !0
}

function tr() {
    return !1
}

function nr(e) {
    function t(t, n, r, o, a) {
        for (var i in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = o, this.target = a, this.currentTarget = null, e) e.hasOwnProperty(i) && (t = e[i], this[i] = t ? t(o) : o[i]);
        return this.isDefaultPrevented = (null != o.defaultPrevented ? o.defaultPrevented : !1 === o.returnValue) ? er : tr, this.isPropagationStopped = tr, this
    }
    return Me(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var e = this.nativeEvent;
            e && (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = er)
        },
        stopPropagation: function() {
            var e = this.nativeEvent;
            e && (e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = er)
        },
        persist: function() {},
        isPersistent: er
    }), t
}
var rr, or, ar, ir = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    },
    lr = nr(ir),
    sr = Me({}, ir, {
        view: 0,
        detail: 0
    }),
    ur = nr(sr),
    cr = Me({}, sr, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: xr,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== ar && (ar && "mousemove" === e.type ? (rr = e.screenX - ar.screenX, or = e.screenY - ar.screenY) : or = rr = 0, ar = e), rr)
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : or
        }
    }),
    dr = nr(cr),
    fr = nr(Me({}, cr, {
        dataTransfer: 0
    })),
    pr = nr(Me({}, sr, {
        relatedTarget: 0
    })),
    hr = nr(Me({}, ir, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })),
    mr = Me({}, ir, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }),
    gr = nr(mr),
    vr = nr(Me({}, ir, {
        data: 0
    })),
    yr = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    },
    br = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
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
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    },
    wr = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };

function Cr(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : !!(e = wr[e]) && !!t[e]
}

function xr() {
    return Cr
}
var Sr = Me({}, sr, {
        key: function(e) {
            if (e.key) {
                var t = yr[e.key] || e.key;
                if ("Unidentified" !== t) return t
            }
            return "keypress" === e.type ? 13 === (e = Yn(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? br[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: xr,
        charCode: function(e) {
            return "keypress" === e.type ? Yn(e) : 0
        },
        keyCode: function(e) {
            return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
        },
        which: function(e) {
            return "keypress" === e.type ? Yn(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
        }
    }),
    Er = nr(Sr),
    _r = nr(Me({}, cr, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    })),
    Rr = nr(Me({}, sr, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: xr
    })),
    kr = nr(Me({}, ir, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })),
    Or = Me({}, cr, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    }),
    Nr = nr(Or),
    jr = [9, 13, 27, 32],
    Pr = le && "CompositionEvent" in window,
    Lr = null;
le && "documentMode" in document && (Lr = document.documentMode);
var Tr = le && "TextEvent" in window && !Lr,
    Mr = le && (!Pr || Lr && 8 < Lr && 11 >= Lr),
    Fr = String.fromCharCode(32),
    Ar = !1;

function Dr(e, t) {
    switch (e) {
        case "keyup":
            return -1 !== jr.indexOf(t.keyCode);
        case "keydown":
            return 229 !== t.keyCode;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}

function Ir(e) {
    return "object" == typeof(e = e.detail) && "data" in e ? e.data : null
}
var zr = !1;
var Ur = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};

function Vr(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return "input" === t ? !!Ur[e.type] : "textarea" === t
}

function Br(e, t, n, r) {
    St(r), 0 < (t = $o(t, "onChange")).length && (n = new lr("onChange", "change", null, n, r), e.push({
        event: n,
        listeners: t
    }))
}
var Hr = null,
    $r = null;

function qr(e) {
    Ao(e, 0)
}

function Kr(e) {
    if ($e(ya(e))) return e
}

function Qr(e, t) {
    if ("change" === e) return t
}
var Wr = !1;
if (le) {
    var Gr;
    if (le) {
        var Zr = "oninput" in document;
        if (!Zr) {
            var Xr = document.createElement("div");
            Xr.setAttribute("oninput", "return;"), Zr = "function" == typeof Xr.oninput
        }
        Gr = Zr
    } else Gr = !1;
    Wr = Gr && (!document.documentMode || 9 < document.documentMode)
}

function Jr() {
    Hr && (Hr.detachEvent("onpropertychange", Yr), $r = Hr = null)
}

function Yr(e) {
    if ("value" === e.propertyName && Kr($r)) {
        var t = [];
        Br(t, $r, e, yt(e)), Ot(qr, t)
    }
}

function eo(e, t, n) {
    "focusin" === e ? (Jr(), $r = n, (Hr = t).attachEvent("onpropertychange", Yr)) : "focusout" === e && Jr()
}

function to(e) {
    if ("selectionchange" === e || "keyup" === e || "keydown" === e) return Kr($r)
}

function no(e, t) {
    if ("click" === e) return Kr(t)
}

function ro(e, t) {
    if ("input" === e || "change" === e) return Kr(t)
}
var oo = "function" == typeof Object.is ? Object.is : function(e, t) {
    return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
};

function ao(e, t) {
    if (oo(e, t)) return !0;
    if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var o = n[r];
        if (!se.call(t, o) || !oo(e[o], t[o])) return !1
    }
    return !0
}

function io(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
}

function lo(e, t) {
    var n, r = io(e);
    for (e = 0; r;) {
        if (3 === r.nodeType) {
            if (n = e + r.textContent.length, e <= t && n >= t) return {
                node: r,
                offset: t - e
            };
            e = n
        }
        e: {
            for (; r;) {
                if (r.nextSibling) {
                    r = r.nextSibling;
                    break e
                }
                r = r.parentNode
            }
            r = void 0
        }
        r = io(r)
    }
}

function so(e, t) {
    return !(!e || !t) && (e === t || (!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? so(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))))
}

function uo() {
    for (var e = window, t = qe(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = "string" == typeof t.contentWindow.location.href
        } catch (r) {
            n = !1
        }
        if (!n) break;
        t = qe((e = t.contentWindow).document)
    }
    return t
}

function co(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
}

function fo(e) {
    var t = uo(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && so(n.ownerDocument.documentElement, n)) {
        if (null !== r && co(n))
            if (t = r.start, void 0 === (e = r.end) && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
            else if ((e = (t = n.ownerDocument || document) && t.defaultView || window).getSelection) {
            e = e.getSelection();
            var o = n.textContent.length,
                a = Math.min(r.start, o);
            r = void 0 === r.end ? a : Math.min(r.end, o), !e.extend && a > r && (o = r, r = a, a = o), o = lo(n, a);
            var i = lo(n, r);
            o && i && (1 !== e.rangeCount || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && ((t = t.createRange()).setStart(o.node, o.offset), e.removeAllRanges(), a > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)))
        }
        for (t = [], e = n; e = e.parentNode;) 1 === e.nodeType && t.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
        });
        for ("function" == typeof n.focus && n.focus(), n = 0; n < t.length; n++)(e = t[n]).element.scrollLeft = e.left, e.element.scrollTop = e.top
    }
}
var po = le && "documentMode" in document && 11 >= document.documentMode,
    ho = null,
    mo = null,
    go = null,
    vo = !1;

function yo(e, t, n) {
    var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
    vo || null == ho || ho !== qe(r) || ("selectionStart" in (r = ho) && co(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : r = {
        anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }, go && ao(go, r) || (go = r, 0 < (r = $o(mo, "onSelect")).length && (t = new lr("onSelect", "select", null, t, n), e.push({
        event: t,
        listeners: r
    }), t.target = ho)))
}

function bo(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}
var wo = {
        animationend: bo("Animation", "AnimationEnd"),
        animationiteration: bo("Animation", "AnimationIteration"),
        animationstart: bo("Animation", "AnimationStart"),
        transitionend: bo("Transition", "TransitionEnd")
    },
    Co = {},
    xo = {};

function So(e) {
    if (Co[e]) return Co[e];
    if (!wo[e]) return e;
    var t, n = wo[e];
    for (t in n)
        if (n.hasOwnProperty(t) && t in xo) return Co[e] = n[t];
    return e
}
le && (xo = document.createElement("div").style, "AnimationEvent" in window || (delete wo.animationend.animation, delete wo.animationiteration.animation, delete wo.animationstart.animation), "TransitionEvent" in window || delete wo.transitionend.transition);
var Eo = So("animationend"),
    _o = So("animationiteration"),
    Ro = So("animationstart"),
    ko = So("transitionend"),
    Oo = new Map,
    No = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function jo(e, t) {
    Oo.set(e, t), ae(t, [e])
}
for (var Po = 0; Po < No.length; Po++) {
    var Lo = No[Po];
    jo(Lo.toLowerCase(), "on" + (Lo[0].toUpperCase() + Lo.slice(1)))
}
jo(Eo, "onAnimationEnd"), jo(_o, "onAnimationIteration"), jo(Ro, "onAnimationStart"), jo("dblclick", "onDoubleClick"), jo("focusin", "onFocus"), jo("focusout", "onBlur"), jo(ko, "onTransitionEnd"), ie("onMouseEnter", ["mouseout", "mouseover"]), ie("onMouseLeave", ["mouseout", "mouseover"]), ie("onPointerEnter", ["pointerout", "pointerover"]), ie("onPointerLeave", ["pointerout", "pointerover"]), ae("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), ae("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), ae("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), ae("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), ae("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), ae("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var To = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    Mo = new Set("cancel close invalid load scroll toggle".split(" ").concat(To));

function Fo(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
        function(e, t, n, r, o, a, i, l, s) {
            if (It.apply(this, arguments), Tt) {
                if (!Tt) throw Error(ne(198));
                var u = Mt;
                Tt = !1, Mt = null, Ft || (Ft = !0, At = u)
            }
        }(r, t, void 0, e), e.currentTarget = null
}

function Ao(e, t) {
    t = 0 != (4 & t);
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            o = r.event;
        r = r.listeners;
        e: {
            var a = void 0;
            if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                    var l = r[i],
                        s = l.instance,
                        u = l.currentTarget;
                    if (l = l.listener, s !== a && o.isPropagationStopped()) break e;
                    Fo(o, l, u), a = s
                } else
                    for (i = 0; i < r.length; i++) {
                        if (s = (l = r[i]).instance, u = l.currentTarget, l = l.listener, s !== a && o.isPropagationStopped()) break e;
                        Fo(o, l, u), a = s
                    }
        }
    }
    if (Ft) throw e = At, Ft = !1, At = null, e
}

function Do(e, t) {
    var n = t[pa];
    void 0 === n && (n = t[pa] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Vo(t, e, 2, !1), n.add(r))
}

function Io(e, t, n) {
    var r = 0;
    t && (r |= 4), Vo(n, e, r, t)
}
var zo = "_reactListening" + Math.random().toString(36).slice(2);

function Uo(e) {
    if (!e[zo]) {
        e[zo] = !0, re.forEach((function(t) {
            "selectionchange" !== t && (Mo.has(t) || Io(t, !1, e), Io(t, !0, e))
        }));
        var t = 9 === e.nodeType ? e : e.ownerDocument;
        null === t || t[zo] || (t[zo] = !0, Io("selectionchange", !1, t))
    }
}

function Vo(e, t, n, r) {
    switch (Wn(t)) {
        case 1:
            var o = Hn;
            break;
        case 4:
            o = $n;
            break;
        default:
            o = qn
    }
    n = o.bind(null, t, n, e), o = void 0, !jt || "touchstart" !== t && "touchmove" !== t && "wheel" !== t || (o = !0), r ? void 0 !== o ? e.addEventListener(t, n, {
        capture: !0,
        passive: o
    }) : e.addEventListener(t, n, !0) : void 0 !== o ? e.addEventListener(t, n, {
        passive: o
    }) : e.addEventListener(t, n, !1)
}

function Bo(e, t, n, r, o) {
    var a = r;
    if (0 == (1 & t) && 0 == (2 & t) && null !== r) e: for (;;) {
        if (null === r) return;
        var i = r.tag;
        if (3 === i || 4 === i) {
            var l = r.stateNode.containerInfo;
            if (l === o || 8 === l.nodeType && l.parentNode === o) break;
            if (4 === i)
                for (i = r.return; null !== i;) {
                    var s = i.tag;
                    if ((3 === s || 4 === s) && ((s = i.stateNode.containerInfo) === o || 8 === s.nodeType && s.parentNode === o)) return;
                    i = i.return
                }
            for (; null !== l;) {
                if (null === (i = ga(l))) return;
                if (5 === (s = i.tag) || 6 === s) {
                    r = a = i;
                    continue e
                }
                l = l.parentNode
            }
        }
        r = r.return
    }
    Ot((function() {
        var r = a,
            o = yt(n),
            i = [];
        e: {
            var l = Oo.get(e);
            if (void 0 !== l) {
                var s = lr,
                    u = e;
                switch (e) {
                    case "keypress":
                        if (0 === Yn(n)) break e;
                    case "keydown":
                    case "keyup":
                        s = Er;
                        break;
                    case "focusin":
                        u = "focus", s = pr;
                        break;
                    case "focusout":
                        u = "blur", s = pr;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        s = pr;
                        break;
                    case "click":
                        if (2 === n.button) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        s = dr;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        s = fr;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        s = Rr;
                        break;
                    case Eo:
                    case _o:
                    case Ro:
                        s = hr;
                        break;
                    case ko:
                        s = kr;
                        break;
                    case "scroll":
                        s = ur;
                        break;
                    case "wheel":
                        s = Nr;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        s = gr;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        s = _r
                }
                var c = 0 != (4 & t),
                    d = !c && "scroll" === e,
                    f = c ? null !== l ? l + "Capture" : null : l;
                c = [];
                for (var p, h = r; null !== h;) {
                    var m = (p = h).stateNode;
                    if (5 === p.tag && null !== m && (p = m, null !== f && (null != (m = Nt(h, f)) && c.push(Ho(h, m, p)))), d) break;
                    h = h.return
                }
                0 < c.length && (l = new s(l, u, null, n, o), i.push({
                    event: l,
                    listeners: c
                }))
            }
        }
        if (0 == (7 & t)) {
            if (s = "mouseout" === e || "pointerout" === e, (!(l = "mouseover" === e || "pointerover" === e) || n === vt || !(u = n.relatedTarget || n.fromElement) || !ga(u) && !u[fa]) && (s || l) && (l = o.window === o ? o : (l = o.ownerDocument) ? l.defaultView || l.parentWindow : window, s ? (s = r, null !== (u = (u = n.relatedTarget || n.toElement) ? ga(u) : null) && (u !== (d = zt(u)) || 5 !== u.tag && 6 !== u.tag) && (u = null)) : (s = null, u = r), s !== u)) {
                if (c = dr, m = "onMouseLeave", f = "onMouseEnter", h = "mouse", "pointerout" !== e && "pointerover" !== e || (c = _r, m = "onPointerLeave", f = "onPointerEnter", h = "pointer"), d = null == s ? l : ya(s), p = null == u ? l : ya(u), (l = new c(m, h + "leave", s, n, o)).target = d, l.relatedTarget = p, m = null, ga(o) === r && ((c = new c(f, h + "enter", u, n, o)).target = p, c.relatedTarget = d, m = c), d = m, s && u) e: {
                    for (f = u, h = 0, p = c = s; p; p = qo(p)) h++;
                    for (p = 0, m = f; m; m = qo(m)) p++;
                    for (; 0 < h - p;) c = qo(c),
                    h--;
                    for (; 0 < p - h;) f = qo(f),
                    p--;
                    for (; h--;) {
                        if (c === f || null !== f && c === f.alternate) break e;
                        c = qo(c), f = qo(f)
                    }
                    c = null
                }
                else c = null;
                null !== s && Ko(i, l, s, c, !1), null !== u && null !== d && Ko(i, d, u, c, !0)
            }
            if ("select" === (s = (l = r ? ya(r) : window).nodeName && l.nodeName.toLowerCase()) || "input" === s && "file" === l.type) var g = Qr;
            else if (Vr(l))
                if (Wr) g = ro;
                else {
                    g = to;
                    var v = eo
                }
            else(s = l.nodeName) && "input" === s.toLowerCase() && ("checkbox" === l.type || "radio" === l.type) && (g = no);
            switch (g && (g = g(e, r)) ? Br(i, g, n, o) : (v && v(e, l, r), "focusout" === e && (v = l._wrapperState) && v.controlled && "number" === l.type && Xe(l, "number", l.value)), v = r ? ya(r) : window, e) {
                case "focusin":
                    (Vr(v) || "true" === v.contentEditable) && (ho = v, mo = r, go = null);
                    break;
                case "focusout":
                    go = mo = ho = null;
                    break;
                case "mousedown":
                    vo = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    vo = !1, yo(i, n, o);
                    break;
                case "selectionchange":
                    if (po) break;
                case "keydown":
                case "keyup":
                    yo(i, n, o)
            }
            var y;
            if (Pr) e: {
                switch (e) {
                    case "compositionstart":
                        var b = "onCompositionStart";
                        break e;
                    case "compositionend":
                        b = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        b = "onCompositionUpdate";
                        break e
                }
                b = void 0
            }
            else zr ? Dr(e, n) && (b = "onCompositionEnd") : "keydown" === e && 229 === n.keyCode && (b = "onCompositionStart");
            b && (Mr && "ko" !== n.locale && (zr || "onCompositionStart" !== b ? "onCompositionEnd" === b && zr && (y = Jn()) : (Zn = "value" in (Gn = o) ? Gn.value : Gn.textContent, zr = !0)), 0 < (v = $o(r, b)).length && (b = new vr(b, e, null, n, o), i.push({
                event: b,
                listeners: v
            }), y ? b.data = y : null !== (y = Ir(n)) && (b.data = y))), (y = Tr ? function(e, t) {
                switch (e) {
                    case "compositionend":
                        return Ir(t);
                    case "keypress":
                        return 32 !== t.which ? null : (Ar = !0, Fr);
                    case "textInput":
                        return (e = t.data) === Fr && Ar ? null : e;
                    default:
                        return null
                }
            }(e, n) : function(e, t) {
                if (zr) return "compositionend" === e || !Pr && Dr(e, t) ? (e = Jn(), Xn = Zn = Gn = null, zr = !1, e) : null;
                switch (e) {
                    case "paste":
                    default:
                        return null;
                    case "keypress":
                        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which)
                        }
                        return null;
                    case "compositionend":
                        return Mr && "ko" !== t.locale ? null : t.data
                }
            }(e, n)) && (0 < (r = $o(r, "onBeforeInput")).length && (o = new vr("onBeforeInput", "beforeinput", null, n, o), i.push({
                event: o,
                listeners: r
            }), o.data = y))
        }
        Ao(i, t)
    }))
}

function Ho(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}

function $o(e, t) {
    for (var n = t + "Capture", r = []; null !== e;) {
        var o = e,
            a = o.stateNode;
        5 === o.tag && null !== a && (o = a, null != (a = Nt(e, n)) && r.unshift(Ho(e, a, o)), null != (a = Nt(e, t)) && r.push(Ho(e, a, o))), e = e.return
    }
    return r
}

function qo(e) {
    if (null === e) return null;
    do {
        e = e.return
    } while (e && 5 !== e.tag);
    return e || null
}

function Ko(e, t, n, r, o) {
    for (var a = t._reactName, i = []; null !== n && n !== r;) {
        var l = n,
            s = l.alternate,
            u = l.stateNode;
        if (null !== s && s === r) break;
        5 === l.tag && null !== u && (l = u, o ? null != (s = Nt(n, a)) && i.unshift(Ho(n, s, l)) : o || null != (s = Nt(n, a)) && i.push(Ho(n, s, l))), n = n.return
    }
    0 !== i.length && e.push({
        event: t,
        listeners: i
    })
}
var Qo = /\r\n?/g,
    Wo = /\u0000|\uFFFD/g;

function Go(e) {
    return ("string" == typeof e ? e : "" + e).replace(Qo, "\n").replace(Wo, "")
}

function Zo(e, t, n) {
    if (t = Go(t), Go(e) !== t && n) throw Error(ne(425))
}

function Xo() {}
var Jo = null,
    Yo = null;

function ea(e, t) {
    return "textarea" === e || "noscript" === e || "string" == typeof t.children || "number" == typeof t.children || "object" == typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
}
var ta = "function" == typeof setTimeout ? setTimeout : void 0,
    na = "function" == typeof clearTimeout ? clearTimeout : void 0,
    ra = "function" == typeof Promise ? Promise : void 0,
    oa = "function" == typeof queueMicrotask ? queueMicrotask : void 0 !== ra ? function(e) {
        return ra.resolve(null).then(e).catch(aa)
    } : ta;

function aa(e) {
    setTimeout((function() {
        throw e
    }))
}

function ia(e, t) {
    var n = t,
        r = 0;
    do {
        var o = n.nextSibling;
        if (e.removeChild(n), o && 8 === o.nodeType)
            if ("/$" === (n = o.data)) {
                if (0 === r) return e.removeChild(o), void Un(t);
                r--
            } else "$" !== n && "$?" !== n && "$!" !== n || r++;
        n = o
    } while (n);
    Un(t)
}

function la(e) {
    for (; null != e; e = e.nextSibling) {
        var t = e.nodeType;
        if (1 === t || 3 === t) break;
        if (8 === t) {
            if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
            if ("/$" === t) return null
        }
    }
    return e
}

function sa(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (8 === e.nodeType) {
            var n = e.data;
            if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--
            } else "/$" === n && t++
        }
        e = e.previousSibling
    }
    return null
}
var ua = Math.random().toString(36).slice(2),
    ca = "__reactFiber$" + ua,
    da = "__reactProps$" + ua,
    fa = "__reactContainer$" + ua,
    pa = "__reactEvents$" + ua,
    ha = "__reactListeners$" + ua,
    ma = "__reactHandles$" + ua;

function ga(e) {
    var t = e[ca];
    if (t) return t;
    for (var n = e.parentNode; n;) {
        if (t = n[fa] || n[ca]) {
            if (n = t.alternate, null !== t.child || null !== n && null !== n.child)
                for (e = sa(e); null !== e;) {
                    if (n = e[ca]) return n;
                    e = sa(e)
                }
            return t
        }
        n = (e = n).parentNode
    }
    return null
}

function va(e) {
    return !(e = e[ca] || e[fa]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e
}

function ya(e) {
    if (5 === e.tag || 6 === e.tag) return e.stateNode;
    throw Error(ne(33))
}

function ba(e) {
    return e[da] || null
}
var wa = [],
    Ca = -1;

function xa(e) {
    return {
        current: e
    }
}

function Sa(e) {
    0 > Ca || (e.current = wa[Ca], wa[Ca] = null, Ca--)
}

function Ea(e, t) {
    Ca++, wa[Ca] = e.current, e.current = t
}
var _a = {},
    Ra = xa(_a),
    ka = xa(!1),
    Oa = _a;

function Na(e, t) {
    var n = e.type.contextTypes;
    if (!n) return _a;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var o, a = {};
    for (o in n) a[o] = t[o];
    return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = a), a
}

function ja(e) {
    return null != (e = e.childContextTypes)
}

function Pa() {
    Sa(ka), Sa(Ra)
}

function La(e, t, n) {
    if (Ra.current !== _a) throw Error(ne(168));
    Ea(Ra, t), Ea(ka, n)
}

function Ta(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, "function" != typeof r.getChildContext) return n;
    for (var o in r = r.getChildContext())
        if (!(o in t)) throw Error(ne(108, Ue(e) || "Unknown", o));
    return Me({}, n, r)
}

function Ma(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || _a, Oa = Ra.current, Ea(Ra, e), Ea(ka, ka.current), !0
}

function Fa(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(ne(169));
    n ? (e = Ta(e, t, Oa), r.__reactInternalMemoizedMergedChildContext = e, Sa(ka), Sa(Ra), Ea(Ra, e)) : Sa(ka), Ea(ka, n)
}
var Aa = null,
    Da = !1,
    Ia = !1;

function za(e) {
    null === Aa ? Aa = [e] : Aa.push(e)
}

function Ua() {
    if (!Ia && null !== Aa) {
        Ia = !0;
        var e = 0,
            t = vn;
        try {
            var n = Aa;
            for (vn = 1; e < n.length; e++) {
                var r = n[e];
                do {
                    r = r(!0)
                } while (null !== r)
            }
            Aa = null, Da = !1
        } catch (o) {
            throw null !== Aa && (Aa = Aa.slice(e + 1)), $t(Zt, Ua), o
        } finally {
            vn = t, Ia = !1
        }
    }
    return null
}
var Va = [],
    Ba = 0,
    Ha = null,
    $a = 0,
    qa = [],
    Ka = 0,
    Qa = null,
    Wa = 1,
    Ga = "";

function Za(e, t) {
    Va[Ba++] = $a, Va[Ba++] = Ha, Ha = e, $a = t
}

function Xa(e, t, n) {
    qa[Ka++] = Wa, qa[Ka++] = Ga, qa[Ka++] = Qa, Qa = e;
    var r = Wa;
    e = Ga;
    var o = 32 - rn(r) - 1;
    r &= ~(1 << o), n += 1;
    var a = 32 - rn(t) + o;
    if (30 < a) {
        var i = o - o % 5;
        a = (r & (1 << i) - 1).toString(32), r >>= i, o -= i, Wa = 1 << 32 - rn(t) + o | n << o | r, Ga = a + e
    } else Wa = 1 << a | n << o | r, Ga = e
}

function Ja(e) {
    null !== e.return && (Za(e, 1), Xa(e, 1, 0))
}

function Ya(e) {
    for (; e === Ha;) Ha = Va[--Ba], Va[Ba] = null, $a = Va[--Ba], Va[Ba] = null;
    for (; e === Qa;) Qa = qa[--Ka], qa[Ka] = null, Ga = qa[--Ka], qa[Ka] = null, Wa = qa[--Ka], qa[Ka] = null
}
var ei = null,
    ti = null,
    ni = !1,
    ri = null;

function oi(e, t) {
    var n = Nc(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, null === (t = e.deletions) ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function ai(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t, ei = e, ti = la(t.firstChild), !0);
        case 6:
            return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t, ei = e, ti = null, !0);
        case 13:
            return null !== (t = 8 !== t.nodeType ? null : t) && (n = null !== Qa ? {
                id: Wa,
                overflow: Ga
            } : null, e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824
            }, (n = Nc(18, null, null, 0)).stateNode = t, n.return = e, e.child = n, ei = e, ti = null, !0);
        default:
            return !1
    }
}

function ii(e) {
    return 0 != (1 & e.mode) && 0 == (128 & e.flags)
}

function li(e) {
    if (ni) {
        var t = ti;
        if (t) {
            var n = t;
            if (!ai(e, t)) {
                if (ii(e)) throw Error(ne(418));
                t = la(n.nextSibling);
                var r = ei;
                t && ai(e, t) ? oi(r, n) : (e.flags = -4097 & e.flags | 2, ni = !1, ei = e)
            }
        } else {
            if (ii(e)) throw Error(ne(418));
            e.flags = -4097 & e.flags | 2, ni = !1, ei = e
        }
    }
}

function si(e) {
    for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;) e = e.return;
    ei = e
}

function ui(e) {
    if (e !== ei) return !1;
    if (!ni) return si(e), ni = !0, !1;
    var t;
    if ((t = 3 !== e.tag) && !(t = 5 !== e.tag) && (t = "head" !== (t = e.type) && "body" !== t && !ea(e.type, e.memoizedProps)), t && (t = ti)) {
        if (ii(e)) throw ci(), Error(ne(418));
        for (; t;) oi(e, t), t = la(t.nextSibling)
    }
    if (si(e), 13 === e.tag) {
        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(ne(317));
        e: {
            for (e = e.nextSibling, t = 0; e;) {
                if (8 === e.nodeType) {
                    var n = e.data;
                    if ("/$" === n) {
                        if (0 === t) {
                            ti = la(e.nextSibling);
                            break e
                        }
                        t--
                    } else "$" !== n && "$!" !== n && "$?" !== n || t++
                }
                e = e.nextSibling
            }
            ti = null
        }
    } else ti = ei ? la(e.stateNode.nextSibling) : null;
    return !0
}

function ci() {
    for (var e = ti; e;) e = la(e.nextSibling)
}

function di() {
    ti = ei = null, ni = !1
}

function fi(e) {
    null === ri ? ri = [e] : ri.push(e)
}
var pi = ve.ReactCurrentBatchConfig;

function hi(e, t) {
    if (e && e.defaultProps) {
        for (var n in t = Me({}, t), e = e.defaultProps) void 0 === t[n] && (t[n] = e[n]);
        return t
    }
    return t
}
var mi = xa(null),
    gi = null,
    vi = null,
    yi = null;

function bi() {
    yi = vi = gi = null
}

function wi(e) {
    var t = mi.current;
    Sa(mi), e._currentValue = t
}

function Ci(e, t, n) {
    for (; null !== e;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, null !== r && (r.childLanes |= t)) : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
        e = e.return
    }
}

function xi(e, t) {
    gi = e, yi = vi = null, null !== (e = e.dependencies) && null !== e.firstContext && (0 != (e.lanes & t) && (vs = !0), e.firstContext = null)
}

function Si(e) {
    var t = e._currentValue;
    if (yi !== e)
        if (e = {
                context: e,
                memoizedValue: t,
                next: null
            }, null === vi) {
            if (null === gi) throw Error(ne(308));
            vi = e, gi.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else vi = vi.next = e;
    return t
}
var Ei = null;

function _i(e) {
    null === Ei ? Ei = [e] : Ei.push(e)
}

function Ri(e, t, n, r) {
    var o = t.interleaved;
    return null === o ? (n.next = n, _i(t)) : (n.next = o.next, o.next = n), t.interleaved = n, ki(e, r)
}

function ki(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e;) e.childLanes |= t, null !== (n = e.alternate) && (n.childLanes |= t), n = e, e = e.return;
    return 3 === n.tag ? n.stateNode : null
}
var Oi = !1;

function Ni(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}

function ji(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}

function Pi(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}

function Li(e, t, n) {
    var r = e.updateQueue;
    if (null === r) return null;
    if (r = r.shared, 0 != (2 & Ru)) {
        var o = r.pending;
        return null === o ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, ki(e, n)
    }
    return null === (o = r.interleaved) ? (t.next = t, _i(r)) : (t.next = o.next, o.next = t), r.interleaved = t, ki(e, n)
}

function Ti(e, t, n) {
    if (null !== (t = t.updateQueue) && (t = t.shared, 0 != (4194240 & n))) {
        var r = t.lanes;
        n |= r &= e.pendingLanes, t.lanes = n, gn(e, n)
    }
}

function Mi(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (null !== r && n === (r = r.updateQueue)) {
        var o = null,
            a = null;
        if (null !== (n = n.firstBaseUpdate)) {
            do {
                var i = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                null === a ? o = a = i : a = a.next = i, n = n.next
            } while (null !== n);
            null === a ? o = a = t : a = a.next = t
        } else o = a = t;
        return n = {
            baseState: r.baseState,
            firstBaseUpdate: o,
            lastBaseUpdate: a,
            shared: r.shared,
            effects: r.effects
        }, void(e.updateQueue = n)
    }
    null === (e = n.lastBaseUpdate) ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function Fi(e, t, n, r) {
    var o = e.updateQueue;
    Oi = !1;
    var a = o.firstBaseUpdate,
        i = o.lastBaseUpdate,
        l = o.shared.pending;
    if (null !== l) {
        o.shared.pending = null;
        var s = l,
            u = s.next;
        s.next = null, null === i ? a = u : i.next = u, i = s;
        var c = e.alternate;
        null !== c && ((l = (c = c.updateQueue).lastBaseUpdate) !== i && (null === l ? c.firstBaseUpdate = u : l.next = u, c.lastBaseUpdate = s))
    }
    if (null !== a) {
        var d = o.baseState;
        for (i = 0, c = u = s = null, l = a;;) {
            var f = l.lane,
                p = l.eventTime;
            if ((r & f) === f) {
                null !== c && (c = c.next = {
                    eventTime: p,
                    lane: 0,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                });
                e: {
                    var h = e,
                        m = l;
                    switch (f = t, p = n, m.tag) {
                        case 1:
                            if ("function" == typeof(h = m.payload)) {
                                d = h.call(p, d, f);
                                break e
                            }
                            d = h;
                            break e;
                        case 3:
                            h.flags = -65537 & h.flags | 128;
                        case 0:
                            if (null == (f = "function" == typeof(h = m.payload) ? h.call(p, d, f) : h)) break e;
                            d = Me({}, d, f);
                            break e;
                        case 2:
                            Oi = !0
                    }
                }
                null !== l.callback && 0 !== l.lane && (e.flags |= 64, null === (f = o.effects) ? o.effects = [l] : f.push(l))
            } else p = {
                eventTime: p,
                lane: f,
                tag: l.tag,
                payload: l.payload,
                callback: l.callback,
                next: null
            }, null === c ? (u = c = p, s = d) : c = c.next = p, i |= f;
            if (null === (l = l.next)) {
                if (null === (l = o.shared.pending)) break;
                l = (f = l).next, f.next = null, o.lastBaseUpdate = f, o.shared.pending = null
            }
        }
        if (null === c && (s = d), o.baseState = s, o.firstBaseUpdate = u, o.lastBaseUpdate = c, null !== (t = o.shared.interleaved)) {
            o = t;
            do {
                i |= o.lane, o = o.next
            } while (o !== t)
        } else null === a && (o.shared.lanes = 0);
        Mu |= i, e.lanes = i, e.memoizedState = d
    }
}

function Ai(e, t, n) {
    if (e = t.effects, t.effects = null, null !== e)
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                o = r.callback;
            if (null !== o) {
                if (r.callback = null, r = n, "function" != typeof o) throw Error(ne(191, o));
                o.call(r)
            }
        }
}
var Di = (new ee.Component).refs;

function Ii(e, t, n, r) {
    n = null == (n = n(r, t = e.memoizedState)) ? t : Me({}, t, n), e.memoizedState = n, 0 === e.lanes && (e.updateQueue.baseState = n)
}
var zi = {
    isMounted: function(e) {
        return !!(e = e._reactInternals) && zt(e) === e
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = Ju(),
            o = Yu(e),
            a = Pi(r, o);
        a.payload = t, null != n && (a.callback = n), null !== (t = Li(e, a, o)) && (ec(t, e, o, r), Ti(t, e, o))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = Ju(),
            o = Yu(e),
            a = Pi(r, o);
        a.tag = 1, a.payload = t, null != n && (a.callback = n), null !== (t = Li(e, a, o)) && (ec(t, e, o, r), Ti(t, e, o))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = Ju(),
            r = Yu(e),
            o = Pi(n, r);
        o.tag = 2, null != t && (o.callback = t), null !== (t = Li(e, o, r)) && (ec(t, e, r, n), Ti(t, e, r))
    }
};

function Ui(e, t, n, r, o, a, i) {
    return "function" == typeof(e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, a, i) : !t.prototype || !t.prototype.isPureReactComponent || (!ao(n, r) || !ao(o, a))
}

function Vi(e, t, n) {
    var r = !1,
        o = _a,
        a = t.contextType;
    return "object" == typeof a && null !== a ? a = Si(a) : (o = ja(t) ? Oa : Ra.current, a = (r = null != (r = t.contextTypes)) ? Na(e, o) : _a), t = new t(n, a), e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null, t.updater = zi, e.stateNode = t, t._reactInternals = e, r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = a), t
}

function Bi(e, t, n, r) {
    e = t.state, "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && zi.enqueueReplaceState(t, t.state, null)
}

function Hi(e, t, n, r) {
    var o = e.stateNode;
    o.props = n, o.state = e.memoizedState, o.refs = Di, Ni(e);
    var a = t.contextType;
    "object" == typeof a && null !== a ? o.context = Si(a) : (a = ja(t) ? Oa : Ra.current, o.context = Na(e, a)), o.state = e.memoizedState, "function" == typeof(a = t.getDerivedStateFromProps) && (Ii(e, t, a, n), o.state = e.memoizedState), "function" == typeof t.getDerivedStateFromProps || "function" == typeof o.getSnapshotBeforeUpdate || "function" != typeof o.UNSAFE_componentWillMount && "function" != typeof o.componentWillMount || (t = o.state, "function" == typeof o.componentWillMount && o.componentWillMount(), "function" == typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount(), t !== o.state && zi.enqueueReplaceState(o, o.state, null), Fi(e, n, o, r), o.state = e.memoizedState), "function" == typeof o.componentDidMount && (e.flags |= 4194308)
}

function $i(e, t, n) {
    if (null !== (e = n.ref) && "function" != typeof e && "object" != typeof e) {
        if (n._owner) {
            if (n = n._owner) {
                if (1 !== n.tag) throw Error(ne(309));
                var r = n.stateNode
            }
            if (!r) throw Error(ne(147, e));
            var o = r,
                a = "" + e;
            return null !== t && null !== t.ref && "function" == typeof t.ref && t.ref._stringRef === a ? t.ref : ((t = function(e) {
                var t = o.refs;
                t === Di && (t = o.refs = {}), null === e ? delete t[a] : t[a] = e
            })._stringRef = a, t)
        }
        if ("string" != typeof e) throw Error(ne(284));
        if (!n._owner) throw Error(ne(290, e))
    }
    return e
}

function qi(e, t) {
    throw e = Object.prototype.toString.call(t), Error(ne(31, "[object Object]" === e ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function Ki(e) {
    return (0, e._init)(e._payload)
}

function Qi(e) {
    function t(t, n) {
        if (e) {
            var r = t.deletions;
            null === r ? (t.deletions = [n], t.flags |= 16) : r.push(n)
        }
    }

    function n(n, r) {
        if (!e) return null;
        for (; null !== r;) t(n, r), r = r.sibling;
        return null
    }

    function r(e, t) {
        for (e = new Map; null !== t;) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), t = t.sibling;
        return e
    }

    function o(e, t) {
        return (e = Pc(e, t)).index = 0, e.sibling = null, e
    }

    function a(t, n, r) {
        return t.index = r, e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.flags |= 2, n) : r : (t.flags |= 2, n) : (t.flags |= 1048576, n)
    }

    function i(t) {
        return e && null === t.alternate && (t.flags |= 2), t
    }

    function l(e, t, n, r) {
        return null === t || 6 !== t.tag ? ((t = Fc(n, e.mode, r)).return = e, t) : ((t = o(t, n)).return = e, t)
    }

    function s(e, t, n, r) {
        var a = n.type;
        return a === we ? c(e, t, n.props.children, r, n.key) : null !== t && (t.elementType === a || "object" == typeof a && null !== a && a.$$typeof === Ne && Ki(a) === t.type) ? ((r = o(t, n.props)).ref = $i(e, t, n), r.return = e, r) : ((r = Lc(n.type, n.key, n.props, null, e.mode, r)).ref = $i(e, t, n), r.return = e, r)
    }

    function u(e, t, n, r) {
        return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = Ac(n, e.mode, r)).return = e, t) : ((t = o(t, n.children || [])).return = e, t)
    }

    function c(e, t, n, r, a) {
        return null === t || 7 !== t.tag ? ((t = Tc(n, e.mode, r, a)).return = e, t) : ((t = o(t, n)).return = e, t)
    }

    function d(e, t, n) {
        if ("string" == typeof t && "" !== t || "number" == typeof t) return (t = Fc("" + t, e.mode, n)).return = e, t;
        if ("object" == typeof t && null !== t) {
            switch (t.$$typeof) {
                case ye:
                    return (n = Lc(t.type, t.key, t.props, null, e.mode, n)).ref = $i(e, null, t), n.return = e, n;
                case be:
                    return (t = Ac(t, e.mode, n)).return = e, t;
                case Ne:
                    return d(e, (0, t._init)(t._payload), n)
            }
            if (Je(t) || Le(t)) return (t = Tc(t, e.mode, n, null)).return = e, t;
            qi(e, t)
        }
        return null
    }

    function f(e, t, n, r) {
        var o = null !== t ? t.key : null;
        if ("string" == typeof n && "" !== n || "number" == typeof n) return null !== o ? null : l(e, t, "" + n, r);
        if ("object" == typeof n && null !== n) {
            switch (n.$$typeof) {
                case ye:
                    return n.key === o ? s(e, t, n, r) : null;
                case be:
                    return n.key === o ? u(e, t, n, r) : null;
                case Ne:
                    return f(e, t, (o = n._init)(n._payload), r)
            }
            if (Je(n) || Le(n)) return null !== o ? null : c(e, t, n, r, null);
            qi(e, n)
        }
        return null
    }

    function p(e, t, n, r, o) {
        if ("string" == typeof r && "" !== r || "number" == typeof r) return l(t, e = e.get(n) || null, "" + r, o);
        if ("object" == typeof r && null !== r) {
            switch (r.$$typeof) {
                case ye:
                    return s(t, e = e.get(null === r.key ? n : r.key) || null, r, o);
                case be:
                    return u(t, e = e.get(null === r.key ? n : r.key) || null, r, o);
                case Ne:
                    return p(e, t, n, (0, r._init)(r._payload), o)
            }
            if (Je(r) || Le(r)) return c(t, e = e.get(n) || null, r, o, null);
            qi(t, r)
        }
        return null
    }
    return function l(s, u, c, h) {
        if ("object" == typeof c && null !== c && c.type === we && null === c.key && (c = c.props.children), "object" == typeof c && null !== c) {
            switch (c.$$typeof) {
                case ye:
                    e: {
                        for (var m = c.key, g = u; null !== g;) {
                            if (g.key === m) {
                                if ((m = c.type) === we) {
                                    if (7 === g.tag) {
                                        n(s, g.sibling), (u = o(g, c.props.children)).return = s, s = u;
                                        break e
                                    }
                                } else if (g.elementType === m || "object" == typeof m && null !== m && m.$$typeof === Ne && Ki(m) === g.type) {
                                    n(s, g.sibling), (u = o(g, c.props)).ref = $i(s, g, c), u.return = s, s = u;
                                    break e
                                }
                                n(s, g);
                                break
                            }
                            t(s, g), g = g.sibling
                        }
                        c.type === we ? ((u = Tc(c.props.children, s.mode, h, c.key)).return = s, s = u) : ((h = Lc(c.type, c.key, c.props, null, s.mode, h)).ref = $i(s, u, c), h.return = s, s = h)
                    }
                    return i(s);
                case be:
                    e: {
                        for (g = c.key; null !== u;) {
                            if (u.key === g) {
                                if (4 === u.tag && u.stateNode.containerInfo === c.containerInfo && u.stateNode.implementation === c.implementation) {
                                    n(s, u.sibling), (u = o(u, c.children || [])).return = s, s = u;
                                    break e
                                }
                                n(s, u);
                                break
                            }
                            t(s, u), u = u.sibling
                        }(u = Ac(c, s.mode, h)).return = s,
                        s = u
                    }
                    return i(s);
                case Ne:
                    return l(s, u, (g = c._init)(c._payload), h)
            }
            if (Je(c)) return function(o, i, l, s) {
                for (var u = null, c = null, h = i, m = i = 0, g = null; null !== h && m < l.length; m++) {
                    h.index > m ? (g = h, h = null) : g = h.sibling;
                    var v = f(o, h, l[m], s);
                    if (null === v) {
                        null === h && (h = g);
                        break
                    }
                    e && h && null === v.alternate && t(o, h), i = a(v, i, m), null === c ? u = v : c.sibling = v, c = v, h = g
                }
                if (m === l.length) return n(o, h), ni && Za(o, m), u;
                if (null === h) {
                    for (; m < l.length; m++) null !== (h = d(o, l[m], s)) && (i = a(h, i, m), null === c ? u = h : c.sibling = h, c = h);
                    return ni && Za(o, m), u
                }
                for (h = r(o, h); m < l.length; m++) null !== (g = p(h, o, m, l[m], s)) && (e && null !== g.alternate && h.delete(null === g.key ? m : g.key), i = a(g, i, m), null === c ? u = g : c.sibling = g, c = g);
                return e && h.forEach((function(e) {
                    return t(o, e)
                })), ni && Za(o, m), u
            }(s, u, c, h);
            if (Le(c)) return function(o, i, l, s) {
                var u = Le(l);
                if ("function" != typeof u) throw Error(ne(150));
                if (null == (l = u.call(l))) throw Error(ne(151));
                for (var c = u = null, h = i, m = i = 0, g = null, v = l.next(); null !== h && !v.done; m++, v = l.next()) {
                    h.index > m ? (g = h, h = null) : g = h.sibling;
                    var y = f(o, h, v.value, s);
                    if (null === y) {
                        null === h && (h = g);
                        break
                    }
                    e && h && null === y.alternate && t(o, h), i = a(y, i, m), null === c ? u = y : c.sibling = y, c = y, h = g
                }
                if (v.done) return n(o, h), ni && Za(o, m), u;
                if (null === h) {
                    for (; !v.done; m++, v = l.next()) null !== (v = d(o, v.value, s)) && (i = a(v, i, m), null === c ? u = v : c.sibling = v, c = v);
                    return ni && Za(o, m), u
                }
                for (h = r(o, h); !v.done; m++, v = l.next()) null !== (v = p(h, o, m, v.value, s)) && (e && null !== v.alternate && h.delete(null === v.key ? m : v.key), i = a(v, i, m), null === c ? u = v : c.sibling = v, c = v);
                return e && h.forEach((function(e) {
                    return t(o, e)
                })), ni && Za(o, m), u
            }(s, u, c, h);
            qi(s, c)
        }
        return "string" == typeof c && "" !== c || "number" == typeof c ? (c = "" + c, null !== u && 6 === u.tag ? (n(s, u.sibling), (u = o(u, c)).return = s, s = u) : (n(s, u), (u = Fc(c, s.mode, h)).return = s, s = u), i(s)) : n(s, u)
    }
}
var Wi = Qi(!0),
    Gi = Qi(!1),
    Zi = {},
    Xi = xa(Zi),
    Ji = xa(Zi),
    Yi = xa(Zi);

function el(e) {
    if (e === Zi) throw Error(ne(174));
    return e
}

function tl(e, t) {
    switch (Ea(Yi, t), Ea(Ji, e), Ea(Xi, Zi), e = t.nodeType) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : at(null, "");
            break;
        default:
            t = at(t = (e = 8 === e ? t.parentNode : t).namespaceURI || null, e = e.tagName)
    }
    Sa(Xi), Ea(Xi, t)
}

function nl() {
    Sa(Xi), Sa(Ji), Sa(Yi)
}

function rl(e) {
    el(Yi.current);
    var t = el(Xi.current),
        n = at(t, e.type);
    t !== n && (Ea(Ji, e), Ea(Xi, n))
}

function ol(e) {
    Ji.current === e && (Sa(Xi), Sa(Ji))
}
var al = xa(0);

function il(e) {
    for (var t = e; null !== t;) {
        if (13 === t.tag) {
            var n = t.memoizedState;
            if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data)) return t
        } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
            if (0 != (128 & t.flags)) return t
        } else if (null !== t.child) {
            t.child.return = t, t = t.child;
            continue
        }
        if (t === e) break;
        for (; null === t.sibling;) {
            if (null === t.return || t.return === e) return null;
            t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
    }
    return null
}
var ll = [];

function sl() {
    for (var e = 0; e < ll.length; e++) ll[e]._workInProgressVersionPrimary = null;
    ll.length = 0
}
var ul = ve.ReactCurrentDispatcher,
    cl = ve.ReactCurrentBatchConfig,
    dl = 0,
    fl = null,
    pl = null,
    hl = null,
    ml = !1,
    gl = !1,
    vl = 0,
    yl = 0;

function bl() {
    throw Error(ne(321))
}

function wl(e, t) {
    if (null === t) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!oo(e[n], t[n])) return !1;
    return !0
}

function Cl(e, t, n, r, o, a) {
    if (dl = a, fl = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ul.current = null === e || null === e.memoizedState ? os : as, e = n(r, o), gl) {
        a = 0;
        do {
            if (gl = !1, vl = 0, 25 <= a) throw Error(ne(301));
            a += 1, hl = pl = null, t.updateQueue = null, ul.current = is, e = n(r, o)
        } while (gl)
    }
    if (ul.current = rs, t = null !== pl && null !== pl.next, dl = 0, hl = pl = fl = null, ml = !1, t) throw Error(ne(300));
    return e
}

function xl() {
    var e = 0 !== vl;
    return vl = 0, e
}

function Sl() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return null === hl ? fl.memoizedState = hl = e : hl = hl.next = e, hl
}

function El() {
    if (null === pl) {
        var e = fl.alternate;
        e = null !== e ? e.memoizedState : null
    } else e = pl.next;
    var t = null === hl ? fl.memoizedState : hl.next;
    if (null !== t) hl = t, pl = e;
    else {
        if (null === e) throw Error(ne(310));
        e = {
            memoizedState: (pl = e).memoizedState,
            baseState: pl.baseState,
            baseQueue: pl.baseQueue,
            queue: pl.queue,
            next: null
        }, null === hl ? fl.memoizedState = hl = e : hl = hl.next = e
    }
    return hl
}

function _l(e, t) {
    return "function" == typeof t ? t(e) : t
}

function Rl(e) {
    var t = El(),
        n = t.queue;
    if (null === n) throw Error(ne(311));
    n.lastRenderedReducer = e;
    var r = pl,
        o = r.baseQueue,
        a = n.pending;
    if (null !== a) {
        if (null !== o) {
            var i = o.next;
            o.next = a.next, a.next = i
        }
        r.baseQueue = o = a, n.pending = null
    }
    if (null !== o) {
        a = o.next, r = r.baseState;
        var l = i = null,
            s = null,
            u = a;
        do {
            var c = u.lane;
            if ((dl & c) === c) null !== s && (s = s.next = {
                lane: 0,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null
            }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var d = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                null === s ? (l = s = d, i = r) : s = s.next = d, fl.lanes |= c, Mu |= c
            }
            u = u.next
        } while (null !== u && u !== a);
        null === s ? i = r : s.next = l, oo(r, t.memoizedState) || (vs = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = s, n.lastRenderedState = r
    }
    if (null !== (e = n.interleaved)) {
        o = e;
        do {
            a = o.lane, fl.lanes |= a, Mu |= a, o = o.next
        } while (o !== e)
    } else null === o && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}

function kl(e) {
    var t = El(),
        n = t.queue;
    if (null === n) throw Error(ne(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        o = n.pending,
        a = t.memoizedState;
    if (null !== o) {
        n.pending = null;
        var i = o = o.next;
        do {
            a = e(a, i.action), i = i.next
        } while (i !== o);
        oo(a, t.memoizedState) || (vs = !0), t.memoizedState = a, null === t.baseQueue && (t.baseState = a), n.lastRenderedState = a
    }
    return [a, r]
}

function Ol() {}

function Nl(e, t) {
    var n = fl,
        r = El(),
        o = t(),
        a = !oo(r.memoizedState, o);
    if (a && (r.memoizedState = o, vs = !0), r = r.queue, Vl(Ll.bind(null, n, r, e), [e]), r.getSnapshot !== t || a || null !== hl && 1 & hl.memoizedState.tag) {
        if (n.flags |= 2048, Al(9, Pl.bind(null, n, r, o, t), void 0, null), null === ku) throw Error(ne(349));
        0 != (30 & dl) || jl(n, t, o)
    }
    return o
}

function jl(e, t, n) {
    e.flags |= 16384, e = {
        getSnapshot: t,
        value: n
    }, null === (t = fl.updateQueue) ? (t = {
        lastEffect: null,
        stores: null
    }, fl.updateQueue = t, t.stores = [e]) : null === (n = t.stores) ? t.stores = [e] : n.push(e)
}

function Pl(e, t, n, r) {
    t.value = n, t.getSnapshot = r, Tl(t) && Ml(e)
}

function Ll(e, t, n) {
    return n((function() {
        Tl(t) && Ml(e)
    }))
}

function Tl(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !oo(e, n)
    } catch (r) {
        return !0
    }
}

function Ml(e) {
    var t = ki(e, 1);
    null !== t && ec(t, e, 1, -1)
}

function Fl(e) {
    var t = Sl();
    return "function" == typeof e && (e = e()), t.memoizedState = t.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: _l,
        lastRenderedState: e
    }, t.queue = e, e = e.dispatch = Yl.bind(null, fl, e), [t.memoizedState, e]
}

function Al(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    }, null === (t = fl.updateQueue) ? (t = {
        lastEffect: null,
        stores: null
    }, fl.updateQueue = t, t.lastEffect = e.next = e) : null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e
}

function Dl() {
    return El().memoizedState
}

function Il(e, t, n, r) {
    var o = Sl();
    fl.flags |= e, o.memoizedState = Al(1 | t, n, void 0, void 0 === r ? null : r)
}

function zl(e, t, n, r) {
    var o = El();
    r = void 0 === r ? null : r;
    var a = void 0;
    if (null !== pl) {
        var i = pl.memoizedState;
        if (a = i.destroy, null !== r && wl(r, i.deps)) return void(o.memoizedState = Al(t, n, a, r))
    }
    fl.flags |= e, o.memoizedState = Al(1 | t, n, a, r)
}

function Ul(e, t) {
    return Il(8390656, 8, e, t)
}

function Vl(e, t) {
    return zl(2048, 8, e, t)
}

function Bl(e, t) {
    return zl(4, 2, e, t)
}

function Hl(e, t) {
    return zl(4, 4, e, t)
}

function $l(e, t) {
    return "function" == typeof t ? (e = e(), t(e), function() {
        t(null)
    }) : null != t ? (e = e(), t.current = e, function() {
        t.current = null
    }) : void 0
}

function ql(e, t, n) {
    return n = null != n ? n.concat([e]) : null, zl(4, 4, $l.bind(null, t, e), n)
}

function Kl() {}

function Ql(e, t) {
    var n = El();
    t = void 0 === t ? null : t;
    var r = n.memoizedState;
    return null !== r && null !== t && wl(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function Wl(e, t) {
    var n = El();
    t = void 0 === t ? null : t;
    var r = n.memoizedState;
    return null !== r && null !== t && wl(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function Gl(e, t, n) {
    return 0 == (21 & dl) ? (e.baseState && (e.baseState = !1, vs = !0), e.memoizedState = n) : (oo(n, t) || (n = pn(), fl.lanes |= n, Mu |= n, e.baseState = !0), t)
}

function Zl(e, t) {
    var n = vn;
    vn = 0 !== n && 4 > n ? n : 4, e(!0);
    var r = cl.transition;
    cl.transition = {};
    try {
        e(!1), t()
    } finally {
        vn = n, cl.transition = r
    }
}

function Xl() {
    return El().memoizedState
}

function Jl(e, t, n) {
    var r = Yu(e);
    if (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, es(e)) ts(t, n);
    else if (null !== (n = Ri(e, t, n, r))) {
        ec(n, e, r, Ju()), ns(n, t, r)
    }
}

function Yl(e, t, n) {
    var r = Yu(e),
        o = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if (es(e)) ts(t, o);
    else {
        var a = e.alternate;
        if (0 === e.lanes && (null === a || 0 === a.lanes) && null !== (a = t.lastRenderedReducer)) try {
            var i = t.lastRenderedState,
                l = a(i, n);
            if (o.hasEagerState = !0, o.eagerState = l, oo(l, i)) {
                var s = t.interleaved;
                return null === s ? (o.next = o, _i(t)) : (o.next = s.next, s.next = o), void(t.interleaved = o)
            }
        } catch (u) {}
        null !== (n = Ri(e, t, o, r)) && (ec(n, e, r, o = Ju()), ns(n, t, r))
    }
}

function es(e) {
    var t = e.alternate;
    return e === fl || null !== t && t === fl
}

function ts(e, t) {
    gl = ml = !0;
    var n = e.pending;
    null === n ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function ns(e, t, n) {
    if (0 != (4194240 & n)) {
        var r = t.lanes;
        n |= r &= e.pendingLanes, t.lanes = n, gn(e, n)
    }
}
var rs = {
        readContext: Si,
        useCallback: bl,
        useContext: bl,
        useEffect: bl,
        useImperativeHandle: bl,
        useInsertionEffect: bl,
        useLayoutEffect: bl,
        useMemo: bl,
        useReducer: bl,
        useRef: bl,
        useState: bl,
        useDebugValue: bl,
        useDeferredValue: bl,
        useTransition: bl,
        useMutableSource: bl,
        useSyncExternalStore: bl,
        useId: bl,
        unstable_isNewReconciler: !1
    },
    os = {
        readContext: Si,
        useCallback: function(e, t) {
            return Sl().memoizedState = [e, void 0 === t ? null : t], e
        },
        useContext: Si,
        useEffect: Ul,
        useImperativeHandle: function(e, t, n) {
            return n = null != n ? n.concat([e]) : null, Il(4194308, 4, $l.bind(null, t, e), n)
        },
        useLayoutEffect: function(e, t) {
            return Il(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            return Il(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var n = Sl();
            return t = void 0 === t ? null : t, e = e(), n.memoizedState = [e, t], e
        },
        useReducer: function(e, t, n) {
            var r = Sl();
            return t = void 0 !== n ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }, r.queue = e, e = e.dispatch = Jl.bind(null, fl, e), [r.memoizedState, e]
        },
        useRef: function(e) {
            return e = {
                current: e
            }, Sl().memoizedState = e
        },
        useState: Fl,
        useDebugValue: Kl,
        useDeferredValue: function(e) {
            return Sl().memoizedState = e
        },
        useTransition: function() {
            var e = Fl(!1),
                t = e[0];
            return e = Zl.bind(null, e[1]), Sl().memoizedState = e, [t, e]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, n) {
            var r = fl,
                o = Sl();
            if (ni) {
                if (void 0 === n) throw Error(ne(407));
                n = n()
            } else {
                if (n = t(), null === ku) throw Error(ne(349));
                0 != (30 & dl) || jl(r, t, n)
            }
            o.memoizedState = n;
            var a = {
                value: n,
                getSnapshot: t
            };
            return o.queue = a, Ul(Ll.bind(null, r, a, e), [e]), r.flags |= 2048, Al(9, Pl.bind(null, r, a, n, t), void 0, null), n
        },
        useId: function() {
            var e = Sl(),
                t = ku.identifierPrefix;
            if (ni) {
                var n = Ga;
                t = ":" + t + "R" + (n = (Wa & ~(1 << 32 - rn(Wa) - 1)).toString(32) + n), 0 < (n = vl++) && (t += "H" + n.toString(32)), t += ":"
            } else t = ":" + t + "r" + (n = yl++).toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    },
    as = {
        readContext: Si,
        useCallback: Ql,
        useContext: Si,
        useEffect: Vl,
        useImperativeHandle: ql,
        useInsertionEffect: Bl,
        useLayoutEffect: Hl,
        useMemo: Wl,
        useReducer: Rl,
        useRef: Dl,
        useState: function() {
            return Rl(_l)
        },
        useDebugValue: Kl,
        useDeferredValue: function(e) {
            return Gl(El(), pl.memoizedState, e)
        },
        useTransition: function() {
            return [Rl(_l)[0], El().memoizedState]
        },
        useMutableSource: Ol,
        useSyncExternalStore: Nl,
        useId: Xl,
        unstable_isNewReconciler: !1
    },
    is = {
        readContext: Si,
        useCallback: Ql,
        useContext: Si,
        useEffect: Vl,
        useImperativeHandle: ql,
        useInsertionEffect: Bl,
        useLayoutEffect: Hl,
        useMemo: Wl,
        useReducer: kl,
        useRef: Dl,
        useState: function() {
            return kl(_l)
        },
        useDebugValue: Kl,
        useDeferredValue: function(e) {
            var t = El();
            return null === pl ? t.memoizedState = e : Gl(t, pl.memoizedState, e)
        },
        useTransition: function() {
            return [kl(_l)[0], El().memoizedState]
        },
        useMutableSource: Ol,
        useSyncExternalStore: Nl,
        useId: Xl,
        unstable_isNewReconciler: !1
    };

function ls(e, t) {
    try {
        var n = "",
            r = t;
        do {
            n += Ie(r), r = r.return
        } while (r);
        var o = n
    } catch (a) {
        o = "\nError generating stack: " + a.message + "\n" + a.stack
    }
    return {
        value: e,
        source: t,
        stack: o,
        digest: null
    }
}

function ss(e, t, n) {
    return {
        value: e,
        source: null,
        stack: null != n ? n : null,
        digest: null != t ? t : null
    }
}

function us(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout((function() {
            throw n
        }))
    }
}
var cs = "function" == typeof WeakMap ? WeakMap : Map;

function ds(e, t, n) {
    (n = Pi(-1, n)).tag = 3, n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        Bu || (Bu = !0, Hu = r), us(0, t)
    }, n
}

function fs(e, t, n) {
    (n = Pi(-1, n)).tag = 3;
    var r = e.type.getDerivedStateFromError;
    if ("function" == typeof r) {
        var o = t.value;
        n.payload = function() {
            return r(o)
        }, n.callback = function() {
            us(0, t)
        }
    }
    var a = e.stateNode;
    return null !== a && "function" == typeof a.componentDidCatch && (n.callback = function() {
        us(0, t), "function" != typeof r && (null === $u ? $u = new Set([this]) : $u.add(this));
        var e = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: null !== e ? e : ""
        })
    }), n
}

function ps(e, t, n) {
    var r = e.pingCache;
    if (null === r) {
        r = e.pingCache = new cs;
        var o = new Set;
        r.set(t, o)
    } else void 0 === (o = r.get(t)) && (o = new Set, r.set(t, o));
    o.has(n) || (o.add(n), e = Sc.bind(null, e, t, n), t.then(e, e))
}

function hs(e) {
    do {
        var t;
        if ((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated), t) return e;
        e = e.return
    } while (null !== e);
    return null
}

function ms(e, t, n, r, o) {
    return 0 == (1 & e.mode) ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, 1 === n.tag && (null === n.alternate ? n.tag = 17 : ((t = Pi(-1, 1)).tag = 2, Li(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = o, e)
}
var gs = ve.ReactCurrentOwner,
    vs = !1;

function ys(e, t, n, r) {
    t.child = null === e ? Gi(t, null, n, r) : Wi(t, e.child, n, r)
}

function bs(e, t, n, r, o) {
    n = n.render;
    var a = t.ref;
    return xi(t, o), r = Cl(e, t, n, r, a, o), n = xl(), null === e || vs ? (ni && n && Ja(t), t.flags |= 1, ys(e, t, r, o), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Bs(e, t, o))
}

function ws(e, t, n, r, o) {
    if (null === e) {
        var a = n.type;
        return "function" != typeof a || jc(a) || void 0 !== a.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = Lc(n.type, null, r, t, t.mode, o)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = a, Cs(e, t, a, r, o))
    }
    if (a = e.child, 0 == (e.lanes & o)) {
        var i = a.memoizedProps;
        if ((n = null !== (n = n.compare) ? n : ao)(i, r) && e.ref === t.ref) return Bs(e, t, o)
    }
    return t.flags |= 1, (e = Pc(a, r)).ref = t.ref, e.return = t, t.child = e
}

function Cs(e, t, n, r, o) {
    if (null !== e) {
        var a = e.memoizedProps;
        if (ao(a, r) && e.ref === t.ref) {
            if (vs = !1, t.pendingProps = r = a, 0 == (e.lanes & o)) return t.lanes = e.lanes, Bs(e, t, o);
            0 != (131072 & e.flags) && (vs = !0)
        }
    }
    return Es(e, t, n, r, o)
}

function xs(e, t, n) {
    var r = t.pendingProps,
        o = r.children,
        a = null !== e ? e.memoizedState : null;
    if ("hidden" === r.mode)
        if (0 == (1 & t.mode)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, Ea(Pu, ju), ju |= n;
        else {
            if (0 == (1073741824 & n)) return e = null !== a ? a.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, t.updateQueue = null, Ea(Pu, ju), ju |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = null !== a ? a.baseLanes : n, Ea(Pu, ju), ju |= r
        }
    else null !== a ? (r = a.baseLanes | n, t.memoizedState = null) : r = n, Ea(Pu, ju), ju |= r;
    return ys(e, t, o, n), t.child
}

function Ss(e, t) {
    var n = t.ref;
    (null === e && null !== n || null !== e && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function Es(e, t, n, r, o) {
    var a = ja(n) ? Oa : Ra.current;
    return a = Na(t, a), xi(t, o), n = Cl(e, t, n, r, a, o), r = xl(), null === e || vs ? (ni && r && Ja(t), t.flags |= 1, ys(e, t, n, o), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Bs(e, t, o))
}

function _s(e, t, n, r, o) {
    if (ja(n)) {
        var a = !0;
        Ma(t)
    } else a = !1;
    if (xi(t, o), null === t.stateNode) Vs(e, t), Vi(t, n, r), Hi(t, n, r, o), r = !0;
    else if (null === e) {
        var i = t.stateNode,
            l = t.memoizedProps;
        i.props = l;
        var s = i.context,
            u = n.contextType;
        "object" == typeof u && null !== u ? u = Si(u) : u = Na(t, u = ja(n) ? Oa : Ra.current);
        var c = n.getDerivedStateFromProps,
            d = "function" == typeof c || "function" == typeof i.getSnapshotBeforeUpdate;
        d || "function" != typeof i.UNSAFE_componentWillReceiveProps && "function" != typeof i.componentWillReceiveProps || (l !== r || s !== u) && Bi(t, i, r, u), Oi = !1;
        var f = t.memoizedState;
        i.state = f, Fi(t, r, i, o), s = t.memoizedState, l !== r || f !== s || ka.current || Oi ? ("function" == typeof c && (Ii(t, n, c, r), s = t.memoizedState), (l = Oi || Ui(t, n, l, r, f, s, u)) ? (d || "function" != typeof i.UNSAFE_componentWillMount && "function" != typeof i.componentWillMount || ("function" == typeof i.componentWillMount && i.componentWillMount(), "function" == typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount()), "function" == typeof i.componentDidMount && (t.flags |= 4194308)) : ("function" == typeof i.componentDidMount && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), i.props = r, i.state = s, i.context = u, r = l) : ("function" == typeof i.componentDidMount && (t.flags |= 4194308), r = !1)
    } else {
        i = t.stateNode, ji(e, t), l = t.memoizedProps, u = t.type === t.elementType ? l : hi(t.type, l), i.props = u, d = t.pendingProps, f = i.context, "object" == typeof(s = n.contextType) && null !== s ? s = Si(s) : s = Na(t, s = ja(n) ? Oa : Ra.current);
        var p = n.getDerivedStateFromProps;
        (c = "function" == typeof p || "function" == typeof i.getSnapshotBeforeUpdate) || "function" != typeof i.UNSAFE_componentWillReceiveProps && "function" != typeof i.componentWillReceiveProps || (l !== d || f !== s) && Bi(t, i, r, s), Oi = !1, f = t.memoizedState, i.state = f, Fi(t, r, i, o);
        var h = t.memoizedState;
        l !== d || f !== h || ka.current || Oi ? ("function" == typeof p && (Ii(t, n, p, r), h = t.memoizedState), (u = Oi || Ui(t, n, u, r, f, h, s) || !1) ? (c || "function" != typeof i.UNSAFE_componentWillUpdate && "function" != typeof i.componentWillUpdate || ("function" == typeof i.componentWillUpdate && i.componentWillUpdate(r, h, s), "function" == typeof i.UNSAFE_componentWillUpdate && i.UNSAFE_componentWillUpdate(r, h, s)), "function" == typeof i.componentDidUpdate && (t.flags |= 4), "function" == typeof i.getSnapshotBeforeUpdate && (t.flags |= 1024)) : ("function" != typeof i.componentDidUpdate || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), "function" != typeof i.getSnapshotBeforeUpdate || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = h), i.props = r, i.state = h, i.context = s, r = u) : ("function" != typeof i.componentDidUpdate || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), "function" != typeof i.getSnapshotBeforeUpdate || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1)
    }
    return Rs(e, t, n, r, a, o)
}

function Rs(e, t, n, r, o, a) {
    Ss(e, t);
    var i = 0 != (128 & t.flags);
    if (!r && !i) return o && Fa(t, n, !1), Bs(e, t, a);
    r = t.stateNode, gs.current = t;
    var l = i && "function" != typeof n.getDerivedStateFromError ? null : r.render();
    return t.flags |= 1, null !== e && i ? (t.child = Wi(t, e.child, null, a), t.child = Wi(t, null, l, a)) : ys(e, t, l, a), t.memoizedState = r.state, o && Fa(t, n, !0), t.child
}

function ks(e) {
    var t = e.stateNode;
    t.pendingContext ? La(0, t.pendingContext, t.pendingContext !== t.context) : t.context && La(0, t.context, !1), tl(e, t.containerInfo)
}

function Os(e, t, n, r, o) {
    return di(), fi(o), t.flags |= 256, ys(e, t, n, r), t.child
}
var Ns, js, Ps, Ls, Ts = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};

function Ms(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}

function Fs(e, t, n) {
    var r, o = t.pendingProps,
        a = al.current,
        i = !1,
        l = 0 != (128 & t.flags);
    if ((r = l) || (r = (null === e || null !== e.memoizedState) && 0 != (2 & a)), r ? (i = !0, t.flags &= -129) : null !== e && null === e.memoizedState || (a |= 1), Ea(al, 1 & a), null === e) return li(t), null !== (e = t.memoizedState) && null !== (e = e.dehydrated) ? (0 == (1 & t.mode) ? t.lanes = 1 : "$!" === e.data ? t.lanes = 8 : t.lanes = 1073741824, null) : (l = o.children, e = o.fallback, i ? (o = t.mode, i = t.child, l = {
        mode: "hidden",
        children: l
    }, 0 == (1 & o) && null !== i ? (i.childLanes = 0, i.pendingProps = l) : i = Mc(l, o, 0, null), e = Tc(e, o, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Ms(n), t.memoizedState = Ts, e) : As(t, l));
    if (null !== (a = e.memoizedState) && null !== (r = a.dehydrated)) return function(e, t, n, r, o, a, i) {
        if (n) return 256 & t.flags ? (t.flags &= -257, Ds(e, t, i, r = ss(Error(ne(422))))) : null !== t.memoizedState ? (t.child = e.child, t.flags |= 128, null) : (a = r.fallback, o = t.mode, r = Mc({
            mode: "visible",
            children: r.children
        }, o, 0, null), (a = Tc(a, o, i, null)).flags |= 2, r.return = t, a.return = t, r.sibling = a, t.child = r, 0 != (1 & t.mode) && Wi(t, e.child, null, i), t.child.memoizedState = Ms(i), t.memoizedState = Ts, a);
        if (0 == (1 & t.mode)) return Ds(e, t, i, null);
        if ("$!" === o.data) {
            if (r = o.nextSibling && o.nextSibling.dataset) var l = r.dgst;
            return r = l, Ds(e, t, i, r = ss(a = Error(ne(419)), r, void 0))
        }
        if (l = 0 != (i & e.childLanes), vs || l) {
            if (null !== (r = ku)) {
                switch (i & -i) {
                    case 4:
                        o = 2;
                        break;
                    case 16:
                        o = 8;
                        break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                        o = 32;
                        break;
                    case 536870912:
                        o = 268435456;
                        break;
                    default:
                        o = 0
                }
                0 !== (o = 0 != (o & (r.suspendedLanes | i)) ? 0 : o) && o !== a.retryLane && (a.retryLane = o, ki(e, o), ec(r, e, o, -1))
            }
            return pc(), Ds(e, t, i, r = ss(Error(ne(421))))
        }
        return "$?" === o.data ? (t.flags |= 128, t.child = e.child, t = _c.bind(null, e), o._reactRetry = t, null) : (e = a.treeContext, ti = la(o.nextSibling), ei = t, ni = !0, ri = null, null !== e && (qa[Ka++] = Wa, qa[Ka++] = Ga, qa[Ka++] = Qa, Wa = e.id, Ga = e.overflow, Qa = t), t = As(t, r.children), t.flags |= 4096, t)
    }(e, t, l, o, r, a, n);
    if (i) {
        i = o.fallback, l = t.mode, r = (a = e.child).sibling;
        var s = {
            mode: "hidden",
            children: o.children
        };
        return 0 == (1 & l) && t.child !== a ? ((o = t.child).childLanes = 0, o.pendingProps = s, t.deletions = null) : (o = Pc(a, s)).subtreeFlags = 14680064 & a.subtreeFlags, null !== r ? i = Pc(r, i) : (i = Tc(i, l, n, null)).flags |= 2, i.return = t, o.return = t, o.sibling = i, t.child = o, o = i, i = t.child, l = null === (l = e.child.memoizedState) ? Ms(n) : {
            baseLanes: l.baseLanes | n,
            cachePool: null,
            transitions: l.transitions
        }, i.memoizedState = l, i.childLanes = e.childLanes & ~n, t.memoizedState = Ts, o
    }
    return e = (i = e.child).sibling, o = Pc(i, {
        mode: "visible",
        children: o.children
    }), 0 == (1 & t.mode) && (o.lanes = n), o.return = t, o.sibling = null, null !== e && (null === (n = t.deletions) ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = o, t.memoizedState = null, o
}

function As(e, t) {
    return (t = Mc({
        mode: "visible",
        children: t
    }, e.mode, 0, null)).return = e, e.child = t
}

function Ds(e, t, n, r) {
    return null !== r && fi(r), Wi(t, e.child, null, n), (e = As(t, t.pendingProps.children)).flags |= 2, t.memoizedState = null, e
}

function Is(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    null !== r && (r.lanes |= t), Ci(e.return, t, n)
}

function zs(e, t, n, r, o) {
    var a = e.memoizedState;
    null === a ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o
    } : (a.isBackwards = t, a.rendering = null, a.renderingStartTime = 0, a.last = r, a.tail = n, a.tailMode = o)
}

function Us(e, t, n) {
    var r = t.pendingProps,
        o = r.revealOrder,
        a = r.tail;
    if (ys(e, t, r.children, n), 0 != (2 & (r = al.current))) r = 1 & r | 2, t.flags |= 128;
    else {
        if (null !== e && 0 != (128 & e.flags)) e: for (e = t.child; null !== e;) {
            if (13 === e.tag) null !== e.memoizedState && Is(e, n, t);
            else if (19 === e.tag) Is(e, n, t);
            else if (null !== e.child) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break e;
            for (; null === e.sibling;) {
                if (null === e.return || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        r &= 1
    }
    if (Ea(al, r), 0 == (1 & t.mode)) t.memoizedState = null;
    else switch (o) {
        case "forwards":
            for (n = t.child, o = null; null !== n;) null !== (e = n.alternate) && null === il(e) && (o = n), n = n.sibling;
            null === (n = o) ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), zs(t, !1, o, n, a);
            break;
        case "backwards":
            for (n = null, o = t.child, t.child = null; null !== o;) {
                if (null !== (e = o.alternate) && null === il(e)) {
                    t.child = o;
                    break
                }
                e = o.sibling, o.sibling = n, n = o, o = e
            }
            zs(t, !0, n, null, a);
            break;
        case "together":
            zs(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
    }
    return t.child
}

function Vs(e, t) {
    0 == (1 & t.mode) && null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function Bs(e, t, n) {
    if (null !== e && (t.dependencies = e.dependencies), Mu |= t.lanes, 0 == (n & t.childLanes)) return null;
    if (null !== e && t.child !== e.child) throw Error(ne(153));
    if (null !== t.child) {
        for (n = Pc(e = t.child, e.pendingProps), t.child = n, n.return = t; null !== e.sibling;) e = e.sibling, (n = n.sibling = Pc(e, e.pendingProps)).return = t;
        n.sibling = null
    }
    return t.child
}

function Hs(e, t) {
    if (!ni) switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; null !== t;) null !== t.alternate && (n = t), t = t.sibling;
            null === n ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; null !== n;) null !== n.alternate && (r = n), n = n.sibling;
            null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null
    }
}

function $s(e) {
    var t = null !== e.alternate && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var o = e.child; null !== o;) n |= o.lanes | o.childLanes, r |= 14680064 & o.subtreeFlags, r |= 14680064 & o.flags, o.return = e, o = o.sibling;
    else
        for (o = e.child; null !== o;) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t
}

function qs(e, t, n) {
    var r = t.pendingProps;
    switch (Ya(t), t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return $s(t), null;
        case 1:
        case 17:
            return ja(t.type) && Pa(), $s(t), null;
        case 3:
            return r = t.stateNode, nl(), Sa(ka), Sa(Ra), sl(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), null !== e && null !== e.child || (ui(t) ? t.flags |= 4 : null === e || e.memoizedState.isDehydrated && 0 == (256 & t.flags) || (t.flags |= 1024, null !== ri && (oc(ri), ri = null))), js(e, t), $s(t), null;
        case 5:
            ol(t);
            var o = el(Yi.current);
            if (n = t.type, null !== e && null != t.stateNode) Ps(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
            else {
                if (!r) {
                    if (null === t.stateNode) throw Error(ne(166));
                    return $s(t), null
                }
                if (e = el(Xi.current), ui(t)) {
                    r = t.stateNode, n = t.type;
                    var a = t.memoizedProps;
                    switch (r[ca] = t, r[da] = a, e = 0 != (1 & t.mode), n) {
                        case "dialog":
                            Do("cancel", r), Do("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            Do("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (o = 0; o < To.length; o++) Do(To[o], r);
                            break;
                        case "source":
                            Do("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            Do("error", r), Do("load", r);
                            break;
                        case "details":
                            Do("toggle", r);
                            break;
                        case "input":
                            Qe(r, a), Do("invalid", r);
                            break;
                        case "select":
                            r._wrapperState = {
                                wasMultiple: !!a.multiple
                            }, Do("invalid", r);
                            break;
                        case "textarea":
                            tt(r, a), Do("invalid", r)
                    }
                    for (var i in mt(n, a), o = null, a)
                        if (a.hasOwnProperty(i)) {
                            var l = a[i];
                            "children" === i ? "string" == typeof l ? r.textContent !== l && (!0 !== a.suppressHydrationWarning && Zo(r.textContent, l, e), o = ["children", l]) : "number" == typeof l && r.textContent !== "" + l && (!0 !== a.suppressHydrationWarning && Zo(r.textContent, l, e), o = ["children", "" + l]) : oe.hasOwnProperty(i) && null != l && "onScroll" === i && Do("scroll", r)
                        } switch (n) {
                        case "input":
                            He(r), Ze(r, a, !0);
                            break;
                        case "textarea":
                            He(r), rt(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            "function" == typeof a.onClick && (r.onclick = Xo)
                    }
                    r = o, t.updateQueue = r, null !== r && (t.flags |= 4)
                } else {
                    i = 9 === o.nodeType ? o : o.ownerDocument, "http://www.w3.org/1999/xhtml" === e && (e = ot(n)), "http://www.w3.org/1999/xhtml" === e ? "script" === n ? ((e = i.createElement("div")).innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : "string" == typeof r.is ? e = i.createElement(n, {
                        is: r.is
                    }) : (e = i.createElement(n), "select" === n && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[ca] = t, e[da] = r, Ns(e, t, !1, !1), t.stateNode = e;
                    e: {
                        switch (i = gt(n, r), n) {
                            case "dialog":
                                Do("cancel", e), Do("close", e), o = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                Do("load", e), o = r;
                                break;
                            case "video":
                            case "audio":
                                for (o = 0; o < To.length; o++) Do(To[o], e);
                                o = r;
                                break;
                            case "source":
                                Do("error", e), o = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                Do("error", e), Do("load", e), o = r;
                                break;
                            case "details":
                                Do("toggle", e), o = r;
                                break;
                            case "input":
                                Qe(e, r), o = Ke(e, r), Do("invalid", e);
                                break;
                            case "option":
                            default:
                                o = r;
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!r.multiple
                                }, o = Me({}, r, {
                                    value: void 0
                                }), Do("invalid", e);
                                break;
                            case "textarea":
                                tt(e, r), o = et(e, r), Do("invalid", e)
                        }
                        for (a in mt(n, o), l = o)
                            if (l.hasOwnProperty(a)) {
                                var s = l[a];
                                "style" === a ? pt(e, s) : "dangerouslySetInnerHTML" === a ? null != (s = s ? s.__html : void 0) && st(e, s) : "children" === a ? "string" == typeof s ? ("textarea" !== n || "" !== s) && ut(e, s) : "number" == typeof s && ut(e, "" + s) : "suppressContentEditableWarning" !== a && "suppressHydrationWarning" !== a && "autoFocus" !== a && (oe.hasOwnProperty(a) ? null != s && "onScroll" === a && Do("scroll", e) : null != s && ge(e, a, s, i))
                            } switch (n) {
                            case "input":
                                He(e), Ze(e, r, !1);
                                break;
                            case "textarea":
                                He(e), rt(e);
                                break;
                            case "option":
                                null != r.value && e.setAttribute("value", "" + Ve(r.value));
                                break;
                            case "select":
                                e.multiple = !!r.multiple, null != (a = r.value) ? Ye(e, !!r.multiple, a, !1) : null != r.defaultValue && Ye(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                "function" == typeof o.onClick && (e.onclick = Xo)
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                null !== t.ref && (t.flags |= 512, t.flags |= 2097152)
            }
            return $s(t), null;
        case 6:
            if (e && null != t.stateNode) Ls(e, t, e.memoizedProps, r);
            else {
                if ("string" != typeof r && null === t.stateNode) throw Error(ne(166));
                if (n = el(Yi.current), el(Xi.current), ui(t)) {
                    if (r = t.stateNode, n = t.memoizedProps, r[ca] = t, (a = r.nodeValue !== n) && null !== (e = ei)) switch (e.tag) {
                        case 3:
                            Zo(r.nodeValue, n, 0 != (1 & e.mode));
                            break;
                        case 5:
                            !0 !== e.memoizedProps.suppressHydrationWarning && Zo(r.nodeValue, n, 0 != (1 & e.mode))
                    }
                    a && (t.flags |= 4)
                } else(r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[ca] = t, t.stateNode = r
            }
            return $s(t), null;
        case 13:
            if (Sa(al), r = t.memoizedState, null === e || null !== e.memoizedState && null !== e.memoizedState.dehydrated) {
                if (ni && null !== ti && 0 != (1 & t.mode) && 0 == (128 & t.flags)) ci(), di(), t.flags |= 98560, a = !1;
                else if (a = ui(t), null !== r && null !== r.dehydrated) {
                    if (null === e) {
                        if (!a) throw Error(ne(318));
                        if (!(a = null !== (a = t.memoizedState) ? a.dehydrated : null)) throw Error(ne(317));
                        a[ca] = t
                    } else di(), 0 == (128 & t.flags) && (t.memoizedState = null), t.flags |= 4;
                    $s(t), a = !1
                } else null !== ri && (oc(ri), ri = null), a = !0;
                if (!a) return 65536 & t.flags ? t : null
            }
            return 0 != (128 & t.flags) ? (t.lanes = n, t) : ((r = null !== r) !== (null !== e && null !== e.memoizedState) && r && (t.child.flags |= 8192, 0 != (1 & t.mode) && (null === e || 0 != (1 & al.current) ? 0 === Lu && (Lu = 3) : pc())), null !== t.updateQueue && (t.flags |= 4), $s(t), null);
        case 4:
            return nl(), js(e, t), null === e && Uo(t.stateNode.containerInfo), $s(t), null;
        case 10:
            return wi(t.type._context), $s(t), null;
        case 19:
            if (Sa(al), null === (a = t.memoizedState)) return $s(t), null;
            if (r = 0 != (128 & t.flags), null === (i = a.rendering))
                if (r) Hs(a, !1);
                else {
                    if (0 !== Lu || null !== e && 0 != (128 & e.flags))
                        for (e = t.child; null !== e;) {
                            if (null !== (i = il(e))) {
                                for (t.flags |= 128, Hs(a, !1), null !== (r = i.updateQueue) && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; null !== n;) e = r, (a = n).flags &= 14680066, null === (i = a.alternate) ? (a.childLanes = 0, a.lanes = e, a.child = null, a.subtreeFlags = 0, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = i.childLanes, a.lanes = i.lanes, a.child = i.child, a.subtreeFlags = 0, a.deletions = null, a.memoizedProps = i.memoizedProps, a.memoizedState = i.memoizedState, a.updateQueue = i.updateQueue, a.type = i.type, e = i.dependencies, a.dependencies = null === e ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }), n = n.sibling;
                                return Ea(al, 1 & al.current | 2), t.child
                            }
                            e = e.sibling
                        }
                    null !== a.tail && Wt() > Uu && (t.flags |= 128, r = !0, Hs(a, !1), t.lanes = 4194304)
                }
            else {
                if (!r)
                    if (null !== (e = il(i))) {
                        if (t.flags |= 128, r = !0, null !== (n = e.updateQueue) && (t.updateQueue = n, t.flags |= 4), Hs(a, !0), null === a.tail && "hidden" === a.tailMode && !i.alternate && !ni) return $s(t), null
                    } else 2 * Wt() - a.renderingStartTime > Uu && 1073741824 !== n && (t.flags |= 128, r = !0, Hs(a, !1), t.lanes = 4194304);
                a.isBackwards ? (i.sibling = t.child, t.child = i) : (null !== (n = a.last) ? n.sibling = i : t.child = i, a.last = i)
            }
            return null !== a.tail ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = Wt(), t.sibling = null, n = al.current, Ea(al, r ? 1 & n | 2 : 1 & n), t) : ($s(t), null);
        case 22:
        case 23:
            return uc(), r = null !== t.memoizedState, null !== e && null !== e.memoizedState !== r && (t.flags |= 8192), r && 0 != (1 & t.mode) ? 0 != (1073741824 & ju) && ($s(t), 6 & t.subtreeFlags && (t.flags |= 8192)) : $s(t), null;
        case 24:
        case 25:
            return null
    }
    throw Error(ne(156, t.tag))
}

function Ks(e, t) {
    switch (Ya(t), t.tag) {
        case 1:
            return ja(t.type) && Pa(), 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
        case 3:
            return nl(), Sa(ka), Sa(Ra), sl(), 0 != (65536 & (e = t.flags)) && 0 == (128 & e) ? (t.flags = -65537 & e | 128, t) : null;
        case 5:
            return ol(t), null;
        case 13:
            if (Sa(al), null !== (e = t.memoizedState) && null !== e.dehydrated) {
                if (null === t.alternate) throw Error(ne(340));
                di()
            }
            return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
        case 19:
            return Sa(al), null;
        case 4:
            return nl(), null;
        case 10:
            return wi(t.type._context), null;
        case 22:
        case 23:
            return uc(), null;
        default:
            return null
    }
}
Ns = function(e, t) {
    for (var n = t.child; null !== n;) {
        if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
        else if (4 !== n.tag && null !== n.child) {
            n.child.return = n, n = n.child;
            continue
        }
        if (n === t) break;
        for (; null === n.sibling;) {
            if (null === n.return || n.return === t) return;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
}, js = function() {}, Ps = function(e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
        e = t.stateNode, el(Xi.current);
        var a, i = null;
        switch (n) {
            case "input":
                o = Ke(e, o), r = Ke(e, r), i = [];
                break;
            case "select":
                o = Me({}, o, {
                    value: void 0
                }), r = Me({}, r, {
                    value: void 0
                }), i = [];
                break;
            case "textarea":
                o = et(e, o), r = et(e, r), i = [];
                break;
            default:
                "function" != typeof o.onClick && "function" == typeof r.onClick && (e.onclick = Xo)
        }
        for (u in mt(n, r), n = null, o)
            if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && null != o[u])
                if ("style" === u) {
                    var l = o[u];
                    for (a in l) l.hasOwnProperty(a) && (n || (n = {}), n[a] = "")
                } else "dangerouslySetInnerHTML" !== u && "children" !== u && "suppressContentEditableWarning" !== u && "suppressHydrationWarning" !== u && "autoFocus" !== u && (oe.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
        for (u in r) {
            var s = r[u];
            if (l = null != o ? o[u] : void 0, r.hasOwnProperty(u) && s !== l && (null != s || null != l))
                if ("style" === u)
                    if (l) {
                        for (a in l) !l.hasOwnProperty(a) || s && s.hasOwnProperty(a) || (n || (n = {}), n[a] = "");
                        for (a in s) s.hasOwnProperty(a) && l[a] !== s[a] && (n || (n = {}), n[a] = s[a])
                    } else n || (i || (i = []), i.push(u, n)), n = s;
            else "dangerouslySetInnerHTML" === u ? (s = s ? s.__html : void 0, l = l ? l.__html : void 0, null != s && l !== s && (i = i || []).push(u, s)) : "children" === u ? "string" != typeof s && "number" != typeof s || (i = i || []).push(u, "" + s) : "suppressContentEditableWarning" !== u && "suppressHydrationWarning" !== u && (oe.hasOwnProperty(u) ? (null != s && "onScroll" === u && Do("scroll", e), i || l === s || (i = [])) : (i = i || []).push(u, s))
        }
        n && (i = i || []).push("style", n);
        var u = i;
        (t.updateQueue = u) && (t.flags |= 4)
    }
}, Ls = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
};
var Qs = !1,
    Ws = !1,
    Gs = "function" == typeof WeakSet ? WeakSet : Set,
    Zs = null;

function Xs(e, t) {
    var n = e.ref;
    if (null !== n)
        if ("function" == typeof n) try {
            n(null)
        } catch (r) {
            xc(e, t, r)
        } else n.current = null
}

function Js(e, t, n) {
    try {
        n()
    } catch (r) {
        xc(e, t, r)
    }
}
var Ys = !1;

function eu(e, t, n) {
    var r = t.updateQueue;
    if (null !== (r = null !== r ? r.lastEffect : null)) {
        var o = r = r.next;
        do {
            if ((o.tag & e) === e) {
                var a = o.destroy;
                o.destroy = void 0, void 0 !== a && Js(t, n, a)
            }
            o = o.next
        } while (o !== r)
    }
}

function tu(e, t) {
    if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}

function nu(e) {
    var t = e.ref;
    if (null !== t) {
        var n = e.stateNode;
        e.tag, e = n, "function" == typeof t ? t(e) : t.current = e
    }
}

function ru(e) {
    var t = e.alternate;
    null !== t && (e.alternate = null, ru(t)), e.child = null, e.deletions = null, e.sibling = null, 5 === e.tag && (null !== (t = e.stateNode) && (delete t[ca], delete t[da], delete t[pa], delete t[ha], delete t[ma])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function ou(e) {
    return 5 === e.tag || 3 === e.tag || 4 === e.tag
}

function au(e) {
    e: for (;;) {
        for (; null === e.sibling;) {
            if (null === e.return || ou(e.return)) return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag;) {
            if (2 & e.flags) continue e;
            if (null === e.child || 4 === e.tag) continue e;
            e.child.return = e, e = e.child
        }
        if (!(2 & e.flags)) return e.stateNode
    }
}

function iu(e, t, n) {
    var r = e.tag;
    if (5 === r || 6 === r) e = e.stateNode, t ? 8 === n.nodeType ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e), null != (n = n._reactRootContainer) || null !== t.onclick || (t.onclick = Xo));
    else if (4 !== r && null !== (e = e.child))
        for (iu(e, t, n), e = e.sibling; null !== e;) iu(e, t, n), e = e.sibling
}

function lu(e, t, n) {
    var r = e.tag;
    if (5 === r || 6 === r) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (4 !== r && null !== (e = e.child))
        for (lu(e, t, n), e = e.sibling; null !== e;) lu(e, t, n), e = e.sibling
}
var su = null,
    uu = !1;

function cu(e, t, n) {
    for (n = n.child; null !== n;) du(e, t, n), n = n.sibling
}

function du(e, t, n) {
    if (nn && "function" == typeof nn.onCommitFiberUnmount) try {
        nn.onCommitFiberUnmount(tn, n)
    } catch (l) {}
    switch (n.tag) {
        case 5:
            Ws || Xs(n, t);
        case 6:
            var r = su,
                o = uu;
            su = null, cu(e, t, n), uu = o, null !== (su = r) && (uu ? (e = su, n = n.stateNode, 8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n)) : su.removeChild(n.stateNode));
            break;
        case 18:
            null !== su && (uu ? (e = su, n = n.stateNode, 8 === e.nodeType ? ia(e.parentNode, n) : 1 === e.nodeType && ia(e, n), Un(e)) : ia(su, n.stateNode));
            break;
        case 4:
            r = su, o = uu, su = n.stateNode.containerInfo, uu = !0, cu(e, t, n), su = r, uu = o;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!Ws && (null !== (r = n.updateQueue) && null !== (r = r.lastEffect))) {
                o = r = r.next;
                do {
                    var a = o,
                        i = a.destroy;
                    a = a.tag, void 0 !== i && (0 != (2 & a) || 0 != (4 & a)) && Js(n, t, i), o = o.next
                } while (o !== r)
            }
            cu(e, t, n);
            break;
        case 1:
            if (!Ws && (Xs(n, t), "function" == typeof(r = n.stateNode).componentWillUnmount)) try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
            } catch (l) {
                xc(n, t, l)
            }
            cu(e, t, n);
            break;
        case 21:
            cu(e, t, n);
            break;
        case 22:
            1 & n.mode ? (Ws = (r = Ws) || null !== n.memoizedState, cu(e, t, n), Ws = r) : cu(e, t, n);
            break;
        default:
            cu(e, t, n)
    }
}

function fu(e) {
    var t = e.updateQueue;
    if (null !== t) {
        e.updateQueue = null;
        var n = e.stateNode;
        null === n && (n = e.stateNode = new Gs), t.forEach((function(t) {
            var r = Rc.bind(null, e, t);
            n.has(t) || (n.add(t), t.then(r, r))
        }))
    }
}

function pu(e, t) {
    var n = t.deletions;
    if (null !== n)
        for (var r = 0; r < n.length; r++) {
            var o = n[r];
            try {
                var a = e,
                    i = t,
                    l = i;
                e: for (; null !== l;) {
                    switch (l.tag) {
                        case 5:
                            su = l.stateNode, uu = !1;
                            break e;
                        case 3:
                        case 4:
                            su = l.stateNode.containerInfo, uu = !0;
                            break e
                    }
                    l = l.return
                }
                if (null === su) throw Error(ne(160));
                du(a, i, o), su = null, uu = !1;
                var s = o.alternate;
                null !== s && (s.return = null), o.return = null
            } catch (u) {
                xc(o, t, u)
            }
        }
    if (12854 & t.subtreeFlags)
        for (t = t.child; null !== t;) hu(t, e), t = t.sibling
}

function hu(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (pu(t, e), mu(e), 4 & r) {
                try {
                    eu(3, e, e.return), tu(3, e)
                } catch (m) {
                    xc(e, e.return, m)
                }
                try {
                    eu(5, e, e.return)
                } catch (m) {
                    xc(e, e.return, m)
                }
            }
            break;
        case 1:
            pu(t, e), mu(e), 512 & r && null !== n && Xs(n, n.return);
            break;
        case 5:
            if (pu(t, e), mu(e), 512 & r && null !== n && Xs(n, n.return), 32 & e.flags) {
                var o = e.stateNode;
                try {
                    ut(o, "")
                } catch (m) {
                    xc(e, e.return, m)
                }
            }
            if (4 & r && null != (o = e.stateNode)) {
                var a = e.memoizedProps,
                    i = null !== n ? n.memoizedProps : a,
                    l = e.type,
                    s = e.updateQueue;
                if (e.updateQueue = null, null !== s) try {
                    "input" === l && "radio" === a.type && null != a.name && We(o, a), gt(l, i);
                    var u = gt(l, a);
                    for (i = 0; i < s.length; i += 2) {
                        var c = s[i],
                            d = s[i + 1];
                        "style" === c ? pt(o, d) : "dangerouslySetInnerHTML" === c ? st(o, d) : "children" === c ? ut(o, d) : ge(o, c, d, u)
                    }
                    switch (l) {
                        case "input":
                            Ge(o, a);
                            break;
                        case "textarea":
                            nt(o, a);
                            break;
                        case "select":
                            var f = o._wrapperState.wasMultiple;
                            o._wrapperState.wasMultiple = !!a.multiple;
                            var p = a.value;
                            null != p ? Ye(o, !!a.multiple, p, !1) : f !== !!a.multiple && (null != a.defaultValue ? Ye(o, !!a.multiple, a.defaultValue, !0) : Ye(o, !!a.multiple, a.multiple ? [] : "", !1))
                    }
                    o[da] = a
                } catch (m) {
                    xc(e, e.return, m)
                }
            }
            break;
        case 6:
            if (pu(t, e), mu(e), 4 & r) {
                if (null === e.stateNode) throw Error(ne(162));
                o = e.stateNode, a = e.memoizedProps;
                try {
                    o.nodeValue = a
                } catch (m) {
                    xc(e, e.return, m)
                }
            }
            break;
        case 3:
            if (pu(t, e), mu(e), 4 & r && null !== n && n.memoizedState.isDehydrated) try {
                Un(t.containerInfo)
            } catch (m) {
                xc(e, e.return, m)
            }
            break;
        case 4:
        default:
            pu(t, e), mu(e);
            break;
        case 13:
            pu(t, e), mu(e), 8192 & (o = e.child).flags && (a = null !== o.memoizedState, o.stateNode.isHidden = a, !a || null !== o.alternate && null !== o.alternate.memoizedState || (zu = Wt())), 4 & r && fu(e);
            break;
        case 22:
            if (c = null !== n && null !== n.memoizedState, 1 & e.mode ? (Ws = (u = Ws) || c, pu(t, e), Ws = u) : pu(t, e), mu(e), 8192 & r) {
                if (u = null !== e.memoizedState, (e.stateNode.isHidden = u) && !c && 0 != (1 & e.mode))
                    for (Zs = e, c = e.child; null !== c;) {
                        for (d = Zs = c; null !== Zs;) {
                            switch (p = (f = Zs).child, f.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    eu(4, f, f.return);
                                    break;
                                case 1:
                                    Xs(f, f.return);
                                    var h = f.stateNode;
                                    if ("function" == typeof h.componentWillUnmount) {
                                        r = f, n = f.return;
                                        try {
                                            t = r, h.props = t.memoizedProps, h.state = t.memoizedState, h.componentWillUnmount()
                                        } catch (m) {
                                            xc(r, n, m)
                                        }
                                    }
                                    break;
                                case 5:
                                    Xs(f, f.return);
                                    break;
                                case 22:
                                    if (null !== f.memoizedState) {
                                        bu(d);
                                        continue
                                    }
                            }
                            null !== p ? (p.return = f, Zs = p) : bu(d)
                        }
                        c = c.sibling
                    }
                e: for (c = null, d = e;;) {
                    if (5 === d.tag) {
                        if (null === c) {
                            c = d;
                            try {
                                o = d.stateNode, u ? "function" == typeof(a = o.style).setProperty ? a.setProperty("display", "none", "important") : a.display = "none" : (l = d.stateNode, i = null != (s = d.memoizedProps.style) && s.hasOwnProperty("display") ? s.display : null, l.style.display = ft("display", i))
                            } catch (m) {
                                xc(e, e.return, m)
                            }
                        }
                    } else if (6 === d.tag) {
                        if (null === c) try {
                            d.stateNode.nodeValue = u ? "" : d.memoizedProps
                        } catch (m) {
                            xc(e, e.return, m)
                        }
                    } else if ((22 !== d.tag && 23 !== d.tag || null === d.memoizedState || d === e) && null !== d.child) {
                        d.child.return = d, d = d.child;
                        continue
                    }
                    if (d === e) break e;
                    for (; null === d.sibling;) {
                        if (null === d.return || d.return === e) break e;
                        c === d && (c = null), d = d.return
                    }
                    c === d && (c = null), d.sibling.return = d.return, d = d.sibling
                }
            }
            break;
        case 19:
            pu(t, e), mu(e), 4 & r && fu(e);
        case 21:
    }
}

function mu(e) {
    var t = e.flags;
    if (2 & t) {
        try {
            e: {
                for (var n = e.return; null !== n;) {
                    if (ou(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(ne(160))
            }
            switch (r.tag) {
                case 5:
                    var o = r.stateNode;
                    32 & r.flags && (ut(o, ""), r.flags &= -33), lu(e, au(e), o);
                    break;
                case 3:
                case 4:
                    var a = r.stateNode.containerInfo;
                    iu(e, au(e), a);
                    break;
                default:
                    throw Error(ne(161))
            }
        }
        catch (i) {
            xc(e, e.return, i)
        }
        e.flags &= -3
    }
    4096 & t && (e.flags &= -4097)
}

function gu(e, t, n) {
    Zs = e, vu(e)
}

function vu(e, t, n) {
    for (var r = 0 != (1 & e.mode); null !== Zs;) {
        var o = Zs,
            a = o.child;
        if (22 === o.tag && r) {
            var i = null !== o.memoizedState || Qs;
            if (!i) {
                var l = o.alternate,
                    s = null !== l && null !== l.memoizedState || Ws;
                l = Qs;
                var u = Ws;
                if (Qs = i, (Ws = s) && !u)
                    for (Zs = o; null !== Zs;) s = (i = Zs).child, 22 === i.tag && null !== i.memoizedState ? wu(o) : null !== s ? (s.return = i, Zs = s) : wu(o);
                for (; null !== a;) Zs = a, vu(a), a = a.sibling;
                Zs = o, Qs = l, Ws = u
            }
            yu(e)
        } else 0 != (8772 & o.subtreeFlags) && null !== a ? (a.return = o, Zs = a) : yu(e)
    }
}

function yu(e) {
    for (; null !== Zs;) {
        var t = Zs;
        if (0 != (8772 & t.flags)) {
            var n = t.alternate;
            try {
                if (0 != (8772 & t.flags)) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Ws || tu(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (4 & t.flags && !Ws)
                            if (null === n) r.componentDidMount();
                            else {
                                var o = t.elementType === t.type ? n.memoizedProps : hi(t.type, n.memoizedProps);
                                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            } var a = t.updateQueue;
                        null !== a && Ai(t, a, r);
                        break;
                    case 3:
                        var i = t.updateQueue;
                        if (null !== i) {
                            if (n = null, null !== t.child) switch (t.child.tag) {
                                case 5:
                                case 1:
                                    n = t.child.stateNode
                            }
                            Ai(t, i, n)
                        }
                        break;
                    case 5:
                        var l = t.stateNode;
                        if (null === n && 4 & t.flags) {
                            n = l;
                            var s = t.memoizedProps;
                            switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    s.autoFocus && n.focus();
                                    break;
                                case "img":
                                    s.src && (n.src = s.src)
                            }
                        }
                        break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    case 13:
                        if (null === t.memoizedState) {
                            var u = t.alternate;
                            if (null !== u) {
                                var c = u.memoizedState;
                                if (null !== c) {
                                    var d = c.dehydrated;
                                    null !== d && Un(d)
                                }
                            }
                        }
                        break;
                    default:
                        throw Error(ne(163))
                }
                Ws || 512 & t.flags && nu(t)
            } catch (f) {
                xc(t, t.return, f)
            }
        }
        if (t === e) {
            Zs = null;
            break
        }
        if (null !== (n = t.sibling)) {
            n.return = t.return, Zs = n;
            break
        }
        Zs = t.return
    }
}

function bu(e) {
    for (; null !== Zs;) {
        var t = Zs;
        if (t === e) {
            Zs = null;
            break
        }
        var n = t.sibling;
        if (null !== n) {
            n.return = t.return, Zs = n;
            break
        }
        Zs = t.return
    }
}

function wu(e) {
    for (; null !== Zs;) {
        var t = Zs;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        tu(4, t)
                    } catch (s) {
                        xc(t, n, s)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if ("function" == typeof r.componentDidMount) {
                        var o = t.return;
                        try {
                            r.componentDidMount()
                        } catch (s) {
                            xc(t, o, s)
                        }
                    }
                    var a = t.return;
                    try {
                        nu(t)
                    } catch (s) {
                        xc(t, a, s)
                    }
                    break;
                case 5:
                    var i = t.return;
                    try {
                        nu(t)
                    } catch (s) {
                        xc(t, i, s)
                    }
            }
        } catch (s) {
            xc(t, t.return, s)
        }
        if (t === e) {
            Zs = null;
            break
        }
        var l = t.sibling;
        if (null !== l) {
            l.return = t.return, Zs = l;
            break
        }
        Zs = t.return
    }
}
var Cu, xu = Math.ceil,
    Su = ve.ReactCurrentDispatcher,
    Eu = ve.ReactCurrentOwner,
    _u = ve.ReactCurrentBatchConfig,
    Ru = 0,
    ku = null,
    Ou = null,
    Nu = 0,
    ju = 0,
    Pu = xa(0),
    Lu = 0,
    Tu = null,
    Mu = 0,
    Fu = 0,
    Au = 0,
    Du = null,
    Iu = null,
    zu = 0,
    Uu = 1 / 0,
    Vu = null,
    Bu = !1,
    Hu = null,
    $u = null,
    qu = !1,
    Ku = null,
    Qu = 0,
    Wu = 0,
    Gu = null,
    Zu = -1,
    Xu = 0;

function Ju() {
    return 0 != (6 & Ru) ? Wt() : -1 !== Zu ? Zu : Zu = Wt()
}

function Yu(e) {
    return 0 == (1 & e.mode) ? 1 : 0 != (2 & Ru) && 0 !== Nu ? Nu & -Nu : null !== pi.transition ? (0 === Xu && (Xu = pn()), Xu) : 0 !== (e = vn) ? e : e = void 0 === (e = window.event) ? 16 : Wn(e.type)
}

function ec(e, t, n, r) {
    if (50 < Wu) throw Wu = 0, Gu = null, Error(ne(185));
    mn(e, n, r), 0 != (2 & Ru) && e === ku || (e === ku && (0 == (2 & Ru) && (Fu |= n), 4 === Lu && ac(e, Nu)), tc(e, r), 1 === n && 0 === Ru && 0 == (1 & t.mode) && (Uu = Wt() + 500, Da && Ua()))
}

function tc(e, t) {
    var n = e.callbackNode;
    ! function(e, t) {
        for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, a = e.pendingLanes; 0 < a;) {
            var i = 31 - rn(a),
                l = 1 << i,
                s = o[i]; - 1 === s ? 0 != (l & n) && 0 == (l & r) || (o[i] = dn(l, t)) : s <= t && (e.expiredLanes |= l), a &= ~l
        }
    }(e, t);
    var r = cn(e, e === ku ? Nu : 0);
    if (0 === r) null !== n && qt(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
        if (null != n && qt(n), 1 === t) 0 === e.tag ? function(e) {
            Da = !0, za(e)
        }(ic.bind(null, e)) : za(ic.bind(null, e)), oa((function() {
            0 == (6 & Ru) && Ua()
        })), n = null;
        else {
            switch (yn(r)) {
                case 1:
                    n = Zt;
                    break;
                case 4:
                    n = Xt;
                    break;
                case 16:
                default:
                    n = Jt;
                    break;
                case 536870912:
                    n = en
            }
            n = kc(n, nc.bind(null, e))
        }
        e.callbackPriority = t, e.callbackNode = n
    }
}

function nc(e, t) {
    if (Zu = -1, Xu = 0, 0 != (6 & Ru)) throw Error(ne(327));
    var n = e.callbackNode;
    if (wc() && e.callbackNode !== n) return null;
    var r = cn(e, e === ku ? Nu : 0);
    if (0 === r) return null;
    if (0 != (30 & r) || 0 != (r & e.expiredLanes) || t) t = hc(e, r);
    else {
        t = r;
        var o = Ru;
        Ru |= 2;
        var a = fc();
        for (ku === e && Nu === t || (Vu = null, Uu = Wt() + 500, cc(e, t));;) try {
            gc();
            break
        } catch (l) {
            dc(e, l)
        }
        bi(), Su.current = a, Ru = o, null !== Ou ? t = 0 : (ku = null, Nu = 0, t = Lu)
    }
    if (0 !== t) {
        if (2 === t && (0 !== (o = fn(e)) && (r = o, t = rc(e, o))), 1 === t) throw n = Tu, cc(e, 0), ac(e, r), tc(e, Wt()), n;
        if (6 === t) ac(e, r);
        else {
            if (o = e.current.alternate, 0 == (30 & r) && ! function(e) {
                    for (var t = e;;) {
                        if (16384 & t.flags) {
                            var n = t.updateQueue;
                            if (null !== n && null !== (n = n.stores))
                                for (var r = 0; r < n.length; r++) {
                                    var o = n[r],
                                        a = o.getSnapshot;
                                    o = o.value;
                                    try {
                                        if (!oo(a(), o)) return !1
                                    } catch (i) {
                                        return !1
                                    }
                                }
                        }
                        if (n = t.child, 16384 & t.subtreeFlags && null !== n) n.return = t, t = n;
                        else {
                            if (t === e) break;
                            for (; null === t.sibling;) {
                                if (null === t.return || t.return === e) return !0;
                                t = t.return
                            }
                            t.sibling.return = t.return, t = t.sibling
                        }
                    }
                    return !0
                }(o) && (2 === (t = hc(e, r)) && (0 !== (a = fn(e)) && (r = a, t = rc(e, a))), 1 === t)) throw n = Tu, cc(e, 0), ac(e, r), tc(e, Wt()), n;
            switch (e.finishedWork = o, e.finishedLanes = r, t) {
                case 0:
                case 1:
                    throw Error(ne(345));
                case 2:
                case 5:
                    bc(e, Iu, Vu);
                    break;
                case 3:
                    if (ac(e, r), (130023424 & r) === r && 10 < (t = zu + 500 - Wt())) {
                        if (0 !== cn(e, 0)) break;
                        if (((o = e.suspendedLanes) & r) !== r) {
                            Ju(), e.pingedLanes |= e.suspendedLanes & o;
                            break
                        }
                        e.timeoutHandle = ta(bc.bind(null, e, Iu, Vu), t);
                        break
                    }
                    bc(e, Iu, Vu);
                    break;
                case 4:
                    if (ac(e, r), (4194240 & r) === r) break;
                    for (t = e.eventTimes, o = -1; 0 < r;) {
                        var i = 31 - rn(r);
                        a = 1 << i, (i = t[i]) > o && (o = i), r &= ~a
                    }
                    if (r = o, 10 < (r = (120 > (r = Wt() - r) ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * xu(r / 1960)) - r)) {
                        e.timeoutHandle = ta(bc.bind(null, e, Iu, Vu), r);
                        break
                    }
                    bc(e, Iu, Vu);
                    break;
                default:
                    throw Error(ne(329))
            }
        }
    }
    return tc(e, Wt()), e.callbackNode === n ? nc.bind(null, e) : null
}

function rc(e, t) {
    var n = Du;
    return e.current.memoizedState.isDehydrated && (cc(e, t).flags |= 256), 2 !== (e = hc(e, t)) && (t = Iu, Iu = n, null !== t && oc(t)), e
}

function oc(e) {
    null === Iu ? Iu = e : Iu.push.apply(Iu, e)
}

function ac(e, t) {
    for (t &= ~Au, t &= ~Fu, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var n = 31 - rn(t),
            r = 1 << n;
        e[n] = -1, t &= ~r
    }
}

function ic(e) {
    if (0 != (6 & Ru)) throw Error(ne(327));
    wc();
    var t = cn(e, 0);
    if (0 == (1 & t)) return tc(e, Wt()), null;
    var n = hc(e, t);
    if (0 !== e.tag && 2 === n) {
        var r = fn(e);
        0 !== r && (t = r, n = rc(e, r))
    }
    if (1 === n) throw n = Tu, cc(e, 0), ac(e, t), tc(e, Wt()), n;
    if (6 === n) throw Error(ne(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, bc(e, Iu, Vu), tc(e, Wt()), null
}

function lc(e, t) {
    var n = Ru;
    Ru |= 1;
    try {
        return e(t)
    } finally {
        0 === (Ru = n) && (Uu = Wt() + 500, Da && Ua())
    }
}

function sc(e) {
    null !== Ku && 0 === Ku.tag && 0 == (6 & Ru) && wc();
    var t = Ru;
    Ru |= 1;
    var n = _u.transition,
        r = vn;
    try {
        if (_u.transition = null, vn = 1, e) return e()
    } finally {
        vn = r, _u.transition = n, 0 == (6 & (Ru = t)) && Ua()
    }
}

function uc() {
    ju = Pu.current, Sa(Pu)
}

function cc(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (-1 !== n && (e.timeoutHandle = -1, na(n)), null !== Ou)
        for (n = Ou.return; null !== n;) {
            var r = n;
            switch (Ya(r), r.tag) {
                case 1:
                    null != (r = r.type.childContextTypes) && Pa();
                    break;
                case 3:
                    nl(), Sa(ka), Sa(Ra), sl();
                    break;
                case 5:
                    ol(r);
                    break;
                case 4:
                    nl();
                    break;
                case 13:
                case 19:
                    Sa(al);
                    break;
                case 10:
                    wi(r.type._context);
                    break;
                case 22:
                case 23:
                    uc()
            }
            n = n.return
        }
    if (ku = e, Ou = e = Pc(e.current, null), Nu = ju = t, Lu = 0, Tu = null, Au = Fu = Mu = 0, Iu = Du = null, null !== Ei) {
        for (t = 0; t < Ei.length; t++)
            if (null !== (r = (n = Ei[t]).interleaved)) {
                n.interleaved = null;
                var o = r.next,
                    a = n.pending;
                if (null !== a) {
                    var i = a.next;
                    a.next = o, r.next = i
                }
                n.pending = r
            } Ei = null
    }
    return e
}

function dc(e, t) {
    for (;;) {
        var n = Ou;
        try {
            if (bi(), ul.current = rs, ml) {
                for (var r = fl.memoizedState; null !== r;) {
                    var o = r.queue;
                    null !== o && (o.pending = null), r = r.next
                }
                ml = !1
            }
            if (dl = 0, hl = pl = fl = null, gl = !1, vl = 0, Eu.current = null, null === n || null === n.return) {
                Lu = 1, Tu = t, Ou = null;
                break
            }
            e: {
                var a = e,
                    i = n.return,
                    l = n,
                    s = t;
                if (t = Nu, l.flags |= 32768, null !== s && "object" == typeof s && "function" == typeof s.then) {
                    var u = s,
                        c = l,
                        d = c.tag;
                    if (0 == (1 & c.mode) && (0 === d || 11 === d || 15 === d)) {
                        var f = c.alternate;
                        f ? (c.updateQueue = f.updateQueue, c.memoizedState = f.memoizedState, c.lanes = f.lanes) : (c.updateQueue = null, c.memoizedState = null)
                    }
                    var p = hs(i);
                    if (null !== p) {
                        p.flags &= -257, ms(p, i, l, 0, t), 1 & p.mode && ps(a, u, t), s = u;
                        var h = (t = p).updateQueue;
                        if (null === h) {
                            var m = new Set;
                            m.add(s), t.updateQueue = m
                        } else h.add(s);
                        break e
                    }
                    if (0 == (1 & t)) {
                        ps(a, u, t), pc();
                        break e
                    }
                    s = Error(ne(426))
                } else if (ni && 1 & l.mode) {
                    var g = hs(i);
                    if (null !== g) {
                        0 == (65536 & g.flags) && (g.flags |= 256), ms(g, i, l, 0, t), fi(ls(s, l));
                        break e
                    }
                }
                a = s = ls(s, l),
                4 !== Lu && (Lu = 2),
                null === Du ? Du = [a] : Du.push(a),
                a = i;do {
                    switch (a.tag) {
                        case 3:
                            a.flags |= 65536, t &= -t, a.lanes |= t, Mi(a, ds(0, s, t));
                            break e;
                        case 1:
                            l = s;
                            var v = a.type,
                                y = a.stateNode;
                            if (0 == (128 & a.flags) && ("function" == typeof v.getDerivedStateFromError || null !== y && "function" == typeof y.componentDidCatch && (null === $u || !$u.has(y)))) {
                                a.flags |= 65536, t &= -t, a.lanes |= t, Mi(a, fs(a, l, t));
                                break e
                            }
                    }
                    a = a.return
                } while (null !== a)
            }
            yc(n)
        } catch (b) {
            t = b, Ou === n && null !== n && (Ou = n = n.return);
            continue
        }
        break
    }
}

function fc() {
    var e = Su.current;
    return Su.current = rs, null === e ? rs : e
}

function pc() {
    0 !== Lu && 3 !== Lu && 2 !== Lu || (Lu = 4), null === ku || 0 == (268435455 & Mu) && 0 == (268435455 & Fu) || ac(ku, Nu)
}

function hc(e, t) {
    var n = Ru;
    Ru |= 2;
    var r = fc();
    for (ku === e && Nu === t || (Vu = null, cc(e, t));;) try {
        mc();
        break
    } catch (o) {
        dc(e, o)
    }
    if (bi(), Ru = n, Su.current = r, null !== Ou) throw Error(ne(261));
    return ku = null, Nu = 0, Lu
}

function mc() {
    for (; null !== Ou;) vc(Ou)
}

function gc() {
    for (; null !== Ou && !Kt();) vc(Ou)
}

function vc(e) {
    var t = Cu(e.alternate, e, ju);
    e.memoizedProps = e.pendingProps, null === t ? yc(e) : Ou = t, Eu.current = null
}

function yc(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return, 0 == (32768 & t.flags)) {
            if (null !== (n = qs(n, t, ju))) return void(Ou = n)
        } else {
            if (null !== (n = Ks(n, t))) return n.flags &= 32767, void(Ou = n);
            if (null === e) return Lu = 6, void(Ou = null);
            e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null
        }
        if (null !== (t = t.sibling)) return void(Ou = t);
        Ou = t = e
    } while (null !== t);
    0 === Lu && (Lu = 5)
}

function bc(e, t, n) {
    var r = vn,
        o = _u.transition;
    try {
        _u.transition = null, vn = 1,
            function(e, t, n, r) {
                do {
                    wc()
                } while (null !== Ku);
                if (0 != (6 & Ru)) throw Error(ne(327));
                n = e.finishedWork;
                var o = e.finishedLanes;
                if (null === n) return null;
                if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(ne(177));
                e.callbackNode = null, e.callbackPriority = 0;
                var a = n.lanes | n.childLanes;
                if (function(e, t) {
                        var n = e.pendingLanes & ~t;
                        e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
                        var r = e.eventTimes;
                        for (e = e.expirationTimes; 0 < n;) {
                            var o = 31 - rn(n),
                                a = 1 << o;
                            t[o] = 0, r[o] = -1, e[o] = -1, n &= ~a
                        }
                    }(e, a), e === ku && (Ou = ku = null, Nu = 0), 0 == (2064 & n.subtreeFlags) && 0 == (2064 & n.flags) || qu || (qu = !0, kc(Jt, (function() {
                        return wc(), null
                    }))), a = 0 != (15990 & n.flags), 0 != (15990 & n.subtreeFlags) || a) {
                    a = _u.transition, _u.transition = null;
                    var i = vn;
                    vn = 1;
                    var l = Ru;
                    Ru |= 4, Eu.current = null,
                        function(e, t) {
                            if (Jo = Bn, co(e = uo())) {
                                if ("selectionStart" in e) var n = {
                                    start: e.selectionStart,
                                    end: e.selectionEnd
                                };
                                else e: {
                                    var r = (n = (n = e.ownerDocument) && n.defaultView || window).getSelection && n.getSelection();
                                    if (r && 0 !== r.rangeCount) {
                                        n = r.anchorNode;
                                        var o = r.anchorOffset,
                                            a = r.focusNode;
                                        r = r.focusOffset;
                                        try {
                                            n.nodeType, a.nodeType
                                        } catch (w) {
                                            n = null;
                                            break e
                                        }
                                        var i = 0,
                                            l = -1,
                                            s = -1,
                                            u = 0,
                                            c = 0,
                                            d = e,
                                            f = null;
                                        t: for (;;) {
                                            for (var p; d !== n || 0 !== o && 3 !== d.nodeType || (l = i + o), d !== a || 0 !== r && 3 !== d.nodeType || (s = i + r), 3 === d.nodeType && (i += d.nodeValue.length), null !== (p = d.firstChild);) f = d, d = p;
                                            for (;;) {
                                                if (d === e) break t;
                                                if (f === n && ++u === o && (l = i), f === a && ++c === r && (s = i), null !== (p = d.nextSibling)) break;
                                                f = (d = f).parentNode
                                            }
                                            d = p
                                        }
                                        n = -1 === l || -1 === s ? null : {
                                            start: l,
                                            end: s
                                        }
                                    } else n = null
                                }
                                n = n || {
                                    start: 0,
                                    end: 0
                                }
                            } else n = null;
                            for (Yo = {
                                    focusedElem: e,
                                    selectionRange: n
                                }, Bn = !1, Zs = t; null !== Zs;)
                                if (e = (t = Zs).child, 0 != (1028 & t.subtreeFlags) && null !== e) e.return = t, Zs = e;
                                else
                                    for (; null !== Zs;) {
                                        t = Zs;
                                        try {
                                            var h = t.alternate;
                                            if (0 != (1024 & t.flags)) switch (t.tag) {
                                                case 0:
                                                case 11:
                                                case 15:
                                                case 5:
                                                case 6:
                                                case 4:
                                                case 17:
                                                    break;
                                                case 1:
                                                    if (null !== h) {
                                                        var m = h.memoizedProps,
                                                            g = h.memoizedState,
                                                            v = t.stateNode,
                                                            y = v.getSnapshotBeforeUpdate(t.elementType === t.type ? m : hi(t.type, m), g);
                                                        v.__reactInternalSnapshotBeforeUpdate = y
                                                    }
                                                    break;
                                                case 3:
                                                    var b = t.stateNode.containerInfo;
                                                    1 === b.nodeType ? b.textContent = "" : 9 === b.nodeType && b.documentElement && b.removeChild(b.documentElement);
                                                    break;
                                                default:
                                                    throw Error(ne(163))
                                            }
                                        } catch (w) {
                                            xc(t, t.return, w)
                                        }
                                        if (null !== (e = t.sibling)) {
                                            e.return = t.return, Zs = e;
                                            break
                                        }
                                        Zs = t.return
                                    }
                            h = Ys, Ys = !1
                        }(e, n), hu(n, e), fo(Yo), Bn = !!Jo, Yo = Jo = null, e.current = n, gu(n), Qt(), Ru = l, vn = i, _u.transition = a
                } else e.current = n;
                if (qu && (qu = !1, Ku = e, Qu = o), a = e.pendingLanes, 0 === a && ($u = null), function(e) {
                        if (nn && "function" == typeof nn.onCommitFiberRoot) try {
                            nn.onCommitFiberRoot(tn, e, void 0, 128 == (128 & e.current.flags))
                        } catch (t) {}
                    }(n.stateNode), tc(e, Wt()), null !== t)
                    for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, {
                        componentStack: o.stack,
                        digest: o.digest
                    });
                if (Bu) throw Bu = !1, e = Hu, Hu = null, e;
                0 != (1 & Qu) && 0 !== e.tag && wc(), a = e.pendingLanes, 0 != (1 & a) ? e === Gu ? Wu++ : (Wu = 0, Gu = e) : Wu = 0, Ua()
            }(e, t, n, r)
    } finally {
        _u.transition = o, vn = r
    }
    return null
}

function wc() {
    if (null !== Ku) {
        var e = yn(Qu),
            t = _u.transition,
            n = vn;
        try {
            if (_u.transition = null, vn = 16 > e ? 16 : e, null === Ku) var r = !1;
            else {
                if (e = Ku, Ku = null, Qu = 0, 0 != (6 & Ru)) throw Error(ne(331));
                var o = Ru;
                for (Ru |= 4, Zs = e.current; null !== Zs;) {
                    var a = Zs,
                        i = a.child;
                    if (0 != (16 & Zs.flags)) {
                        var l = a.deletions;
                        if (null !== l) {
                            for (var s = 0; s < l.length; s++) {
                                var u = l[s];
                                for (Zs = u; null !== Zs;) {
                                    var c = Zs;
                                    switch (c.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            eu(8, c, a)
                                    }
                                    var d = c.child;
                                    if (null !== d) d.return = c, Zs = d;
                                    else
                                        for (; null !== Zs;) {
                                            var f = (c = Zs).sibling,
                                                p = c.return;
                                            if (ru(c), c === u) {
                                                Zs = null;
                                                break
                                            }
                                            if (null !== f) {
                                                f.return = p, Zs = f;
                                                break
                                            }
                                            Zs = p
                                        }
                                }
                            }
                            var h = a.alternate;
                            if (null !== h) {
                                var m = h.child;
                                if (null !== m) {
                                    h.child = null;
                                    do {
                                        var g = m.sibling;
                                        m.sibling = null, m = g
                                    } while (null !== m)
                                }
                            }
                            Zs = a
                        }
                    }
                    if (0 != (2064 & a.subtreeFlags) && null !== i) i.return = a, Zs = i;
                    else e: for (; null !== Zs;) {
                        if (0 != (2048 & (a = Zs).flags)) switch (a.tag) {
                            case 0:
                            case 11:
                            case 15:
                                eu(9, a, a.return)
                        }
                        var v = a.sibling;
                        if (null !== v) {
                            v.return = a.return, Zs = v;
                            break e
                        }
                        Zs = a.return
                    }
                }
                var y = e.current;
                for (Zs = y; null !== Zs;) {
                    var b = (i = Zs).child;
                    if (0 != (2064 & i.subtreeFlags) && null !== b) b.return = i, Zs = b;
                    else e: for (i = y; null !== Zs;) {
                        if (0 != (2048 & (l = Zs).flags)) try {
                            switch (l.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    tu(9, l)
                            }
                        } catch (C) {
                            xc(l, l.return, C)
                        }
                        if (l === i) {
                            Zs = null;
                            break e
                        }
                        var w = l.sibling;
                        if (null !== w) {
                            w.return = l.return, Zs = w;
                            break e
                        }
                        Zs = l.return
                    }
                }
                if (Ru = o, Ua(), nn && "function" == typeof nn.onPostCommitFiberRoot) try {
                    nn.onPostCommitFiberRoot(tn, e)
                } catch (C) {}
                r = !0
            }
            return r
        } finally {
            vn = n, _u.transition = t
        }
    }
    return !1
}

function Cc(e, t, n) {
    e = Li(e, t = ds(0, t = ls(n, t), 1), 1), t = Ju(), null !== e && (mn(e, 1, t), tc(e, t))
}

function xc(e, t, n) {
    if (3 === e.tag) Cc(e, e, n);
    else
        for (; null !== t;) {
            if (3 === t.tag) {
                Cc(t, e, n);
                break
            }
            if (1 === t.tag) {
                var r = t.stateNode;
                if ("function" == typeof t.type.getDerivedStateFromError || "function" == typeof r.componentDidCatch && (null === $u || !$u.has(r))) {
                    t = Li(t, e = fs(t, e = ls(n, e), 1), 1), e = Ju(), null !== t && (mn(t, 1, e), tc(t, e));
                    break
                }
            }
            t = t.return
        }
}

function Sc(e, t, n) {
    var r = e.pingCache;
    null !== r && r.delete(t), t = Ju(), e.pingedLanes |= e.suspendedLanes & n, ku === e && (Nu & n) === n && (4 === Lu || 3 === Lu && (130023424 & Nu) === Nu && 500 > Wt() - zu ? cc(e, 0) : Au |= n), tc(e, t)
}

function Ec(e, t) {
    0 === t && (0 == (1 & e.mode) ? t = 1 : (t = sn, 0 == (130023424 & (sn <<= 1)) && (sn = 4194304)));
    var n = Ju();
    null !== (e = ki(e, t)) && (mn(e, t, n), tc(e, n))
}

function _c(e) {
    var t = e.memoizedState,
        n = 0;
    null !== t && (n = t.retryLane), Ec(e, n)
}

function Rc(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                o = e.memoizedState;
            null !== o && (n = o.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(ne(314))
    }
    null !== r && r.delete(t), Ec(e, n)
}

function kc(e, t) {
    return $t(e, t)
}

function Oc(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function Nc(e, t, n, r) {
    return new Oc(e, t, n, r)
}

function jc(e) {
    return !(!(e = e.prototype) || !e.isReactComponent)
}

function Pc(e, t) {
    var n = e.alternate;
    return null === n ? ((n = Nc(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = 14680064 & e.flags, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = null === t ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function Lc(e, t, n, r, o, a) {
    var i = 2;
    if (r = e, "function" == typeof e) jc(e) && (i = 1);
    else if ("string" == typeof e) i = 5;
    else e: switch (e) {
        case we:
            return Tc(n.children, o, a, t);
        case Ce:
            i = 8, o |= 8;
            break;
        case xe:
            return (e = Nc(12, n, t, 2 | o)).elementType = xe, e.lanes = a, e;
        case Re:
            return (e = Nc(13, n, t, o)).elementType = Re, e.lanes = a, e;
        case ke:
            return (e = Nc(19, n, t, o)).elementType = ke, e.lanes = a, e;
        case je:
            return Mc(n, o, a, t);
        default:
            if ("object" == typeof e && null !== e) switch (e.$$typeof) {
                case Se:
                    i = 10;
                    break e;
                case Ee:
                    i = 9;
                    break e;
                case _e:
                    i = 11;
                    break e;
                case Oe:
                    i = 14;
                    break e;
                case Ne:
                    i = 16, r = null;
                    break e
            }
            throw Error(ne(130, null == e ? e : typeof e, ""))
    }
    return (t = Nc(i, n, t, o)).elementType = e, t.type = r, t.lanes = a, t
}

function Tc(e, t, n, r) {
    return (e = Nc(7, e, r, t)).lanes = n, e
}

function Mc(e, t, n, r) {
    return (e = Nc(22, e, r, t)).elementType = je, e.lanes = n, e.stateNode = {
        isHidden: !1
    }, e
}

function Fc(e, t, n) {
    return (e = Nc(6, e, null, t)).lanes = n, e
}

function Ac(e, t, n) {
    return (t = Nc(4, null !== e.children ? e.children : [], e.key, t)).lanes = n, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    }, t
}

function Dc(e, t, n, r, o) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = hn(0), this.expirationTimes = hn(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = hn(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null
}

function Ic(e, t, n, r, o, a, i, l, s) {
    return e = new Dc(e, t, n, l, s), 1 === t ? (t = 1, !0 === a && (t |= 8)) : t = 0, a = Nc(3, null, null, t), e.current = a, a.stateNode = e, a.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, Ni(a), e
}

function zc(e) {
    if (!e) return _a;
    e: {
        if (zt(e = e._reactInternals) !== e || 1 !== e.tag) throw Error(ne(170));
        var t = e;do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (ja(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (null !== t);
        throw Error(ne(171))
    }
    if (1 === e.tag) {
        var n = e.type;
        if (ja(n)) return Ta(e, n, t)
    }
    return t
}

function Uc(e, t, n, r, o, a, i, l, s) {
    return (e = Ic(n, r, !0, e, 0, a, 0, l, s)).context = zc(null), n = e.current, (a = Pi(r = Ju(), o = Yu(n))).callback = null != t ? t : null, Li(n, a, o), e.current.lanes = o, mn(e, o, r), tc(e, r), e
}

function Vc(e, t, n, r) {
    var o = t.current,
        a = Ju(),
        i = Yu(o);
    return n = zc(n), null === t.context ? t.context = n : t.pendingContext = n, (t = Pi(a, i)).payload = {
        element: e
    }, null !== (r = void 0 === r ? null : r) && (t.callback = r), null !== (e = Li(o, t, i)) && (ec(e, o, i, a), Ti(e, o, i)), i
}

function Bc(e) {
    return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null
}

function Hc(e, t) {
    if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
        var n = e.retryLane;
        e.retryLane = 0 !== n && n < t ? n : t
    }
}

function $c(e, t) {
    Hc(e, t), (e = e.alternate) && Hc(e, t)
}
Cu = function(e, t, n) {
    if (null !== e)
        if (e.memoizedProps !== t.pendingProps || ka.current) vs = !0;
        else {
            if (0 == (e.lanes & n) && 0 == (128 & t.flags)) return vs = !1,
                function(e, t, n) {
                    switch (t.tag) {
                        case 3:
                            ks(t), di();
                            break;
                        case 5:
                            rl(t);
                            break;
                        case 1:
                            ja(t.type) && Ma(t);
                            break;
                        case 4:
                            tl(t, t.stateNode.containerInfo);
                            break;
                        case 10:
                            var r = t.type._context,
                                o = t.memoizedProps.value;
                            Ea(mi, r._currentValue), r._currentValue = o;
                            break;
                        case 13:
                            if (null !== (r = t.memoizedState)) return null !== r.dehydrated ? (Ea(al, 1 & al.current), t.flags |= 128, null) : 0 != (n & t.child.childLanes) ? Fs(e, t, n) : (Ea(al, 1 & al.current), null !== (e = Bs(e, t, n)) ? e.sibling : null);
                            Ea(al, 1 & al.current);
                            break;
                        case 19:
                            if (r = 0 != (n & t.childLanes), 0 != (128 & e.flags)) {
                                if (r) return Us(e, t, n);
                                t.flags |= 128
                            }
                            if (null !== (o = t.memoizedState) && (o.rendering = null, o.tail = null, o.lastEffect = null), Ea(al, al.current), r) break;
                            return null;
                        case 22:
                        case 23:
                            return t.lanes = 0, xs(e, t, n)
                    }
                    return Bs(e, t, n)
                }(e, t, n);
            vs = 0 != (131072 & e.flags)
        }
    else vs = !1, ni && 0 != (1048576 & t.flags) && Xa(t, $a, t.index);
    switch (t.lanes = 0, t.tag) {
        case 2:
            var r = t.type;
            Vs(e, t), e = t.pendingProps;
            var o = Na(t, Ra.current);
            xi(t, n), o = Cl(null, t, r, e, o, n);
            var a = xl();
            return t.flags |= 1, "object" == typeof o && null !== o && "function" == typeof o.render && void 0 === o.$$typeof ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, ja(r) ? (a = !0, Ma(t)) : a = !1, t.memoizedState = null !== o.state && void 0 !== o.state ? o.state : null, Ni(t), o.updater = zi, t.stateNode = o, o._reactInternals = t, Hi(t, r, e, n), t = Rs(null, t, r, !0, a, n)) : (t.tag = 0, ni && a && Ja(t), ys(null, t, o, n), t = t.child), t;
        case 16:
            r = t.elementType;
            e: {
                switch (Vs(e, t), e = t.pendingProps, r = (o = r._init)(r._payload), t.type = r, o = t.tag = function(e) {
                        if ("function" == typeof e) return jc(e) ? 1 : 0;
                        if (null != e) {
                            if ((e = e.$$typeof) === _e) return 11;
                            if (e === Oe) return 14
                        }
                        return 2
                    }(r), e = hi(r, e), o) {
                    case 0:
                        t = Es(null, t, r, e, n);
                        break e;
                    case 1:
                        t = _s(null, t, r, e, n);
                        break e;
                    case 11:
                        t = bs(null, t, r, e, n);
                        break e;
                    case 14:
                        t = ws(null, t, r, hi(r.type, e), n);
                        break e
                }
                throw Error(ne(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type, o = t.pendingProps, Es(e, t, r, o = t.elementType === r ? o : hi(r, o), n);
        case 1:
            return r = t.type, o = t.pendingProps, _s(e, t, r, o = t.elementType === r ? o : hi(r, o), n);
        case 3:
            e: {
                if (ks(t), null === e) throw Error(ne(387));r = t.pendingProps,
                o = (a = t.memoizedState).element,
                ji(e, t),
                Fi(t, r, null, n);
                var i = t.memoizedState;
                if (r = i.element, a.isDehydrated) {
                    if (a = {
                            element: r,
                            isDehydrated: !1,
                            cache: i.cache,
                            pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                            transitions: i.transitions
                        }, t.updateQueue.baseState = a, t.memoizedState = a, 256 & t.flags) {
                        t = Os(e, t, r, n, o = ls(Error(ne(423)), t));
                        break e
                    }
                    if (r !== o) {
                        t = Os(e, t, r, n, o = ls(Error(ne(424)), t));
                        break e
                    }
                    for (ti = la(t.stateNode.containerInfo.firstChild), ei = t, ni = !0, ri = null, n = Gi(t, null, r, n), t.child = n; n;) n.flags = -3 & n.flags | 4096, n = n.sibling
                } else {
                    if (di(), r === o) {
                        t = Bs(e, t, n);
                        break e
                    }
                    ys(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return rl(t), null === e && li(t), r = t.type, o = t.pendingProps, a = null !== e ? e.memoizedProps : null, i = o.children, ea(r, o) ? i = null : null !== a && ea(r, a) && (t.flags |= 32), Ss(e, t), ys(e, t, i, n), t.child;
        case 6:
            return null === e && li(t), null;
        case 13:
            return Fs(e, t, n);
        case 4:
            return tl(t, t.stateNode.containerInfo), r = t.pendingProps, null === e ? t.child = Wi(t, null, r, n) : ys(e, t, r, n), t.child;
        case 11:
            return r = t.type, o = t.pendingProps, bs(e, t, r, o = t.elementType === r ? o : hi(r, o), n);
        case 7:
            return ys(e, t, t.pendingProps, n), t.child;
        case 8:
        case 12:
            return ys(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (r = t.type._context, o = t.pendingProps, a = t.memoizedProps, i = o.value, Ea(mi, r._currentValue), r._currentValue = i, null !== a)
                    if (oo(a.value, i)) {
                        if (a.children === o.children && !ka.current) {
                            t = Bs(e, t, n);
                            break e
                        }
                    } else
                        for (null !== (a = t.child) && (a.return = t); null !== a;) {
                            var l = a.dependencies;
                            if (null !== l) {
                                i = a.child;
                                for (var s = l.firstContext; null !== s;) {
                                    if (s.context === r) {
                                        if (1 === a.tag) {
                                            (s = Pi(-1, n & -n)).tag = 2;
                                            var u = a.updateQueue;
                                            if (null !== u) {
                                                var c = (u = u.shared).pending;
                                                null === c ? s.next = s : (s.next = c.next, c.next = s), u.pending = s
                                            }
                                        }
                                        a.lanes |= n, null !== (s = a.alternate) && (s.lanes |= n), Ci(a.return, n, t), l.lanes |= n;
                                        break
                                    }
                                    s = s.next
                                }
                            } else if (10 === a.tag) i = a.type === t.type ? null : a.child;
                            else if (18 === a.tag) {
                                if (null === (i = a.return)) throw Error(ne(341));
                                i.lanes |= n, null !== (l = i.alternate) && (l.lanes |= n), Ci(i, n, t), i = a.sibling
                            } else i = a.child;
                            if (null !== i) i.return = a;
                            else
                                for (i = a; null !== i;) {
                                    if (i === t) {
                                        i = null;
                                        break
                                    }
                                    if (null !== (a = i.sibling)) {
                                        a.return = i.return, i = a;
                                        break
                                    }
                                    i = i.return
                                }
                            a = i
                        }
                ys(e, t, o.children, n),
                t = t.child
            }
            return t;
        case 9:
            return o = t.type, r = t.pendingProps.children, xi(t, n), r = r(o = Si(o)), t.flags |= 1, ys(e, t, r, n), t.child;
        case 14:
            return o = hi(r = t.type, t.pendingProps), ws(e, t, r, o = hi(r.type, o), n);
        case 15:
            return Cs(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : hi(r, o), Vs(e, t), t.tag = 1, ja(r) ? (e = !0, Ma(t)) : e = !1, xi(t, n), Vi(t, r, o), Hi(t, r, o, n), Rs(null, t, r, !0, e, n);
        case 19:
            return Us(e, t, n);
        case 22:
            return xs(e, t, n)
    }
    throw Error(ne(156, t.tag))
};
var qc = "function" == typeof reportError ? reportError : function(e) {
    console.error(e)
};

function Kc(e) {
    this._internalRoot = e
}

function Qc(e) {
    this._internalRoot = e
}

function Wc(e) {
    return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
}

function Gc(e) {
    return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
}

function Zc() {}

function Xc(e, t, n, r, o) {
    var a = n._reactRootContainer;
    if (a) {
        var i = a;
        if ("function" == typeof o) {
            var l = o;
            o = function() {
                var e = Bc(i);
                l.call(e)
            }
        }
        Vc(t, i, e, o)
    } else i = function(e, t, n, r, o) {
        if (o) {
            if ("function" == typeof r) {
                var a = r;
                r = function() {
                    var e = Bc(i);
                    a.call(e)
                }
            }
            var i = Uc(t, r, e, 0, null, !1, 0, "", Zc);
            return e._reactRootContainer = i, e[fa] = i.current, Uo(8 === e.nodeType ? e.parentNode : e), sc(), i
        }
        for (; o = e.lastChild;) e.removeChild(o);
        if ("function" == typeof r) {
            var l = r;
            r = function() {
                var e = Bc(s);
                l.call(e)
            }
        }
        var s = Ic(e, 0, !1, null, 0, !1, 0, "", Zc);
        return e._reactRootContainer = s, e[fa] = s.current, Uo(8 === e.nodeType ? e.parentNode : e), sc((function() {
            Vc(t, s, n, r)
        })), s
    }(n, t, e, o, r);
    return Bc(i)
}
Qc.prototype.render = Kc.prototype.render = function(e) {
    var t = this._internalRoot;
    if (null === t) throw Error(ne(409));
    Vc(e, t, null, null)
}, Qc.prototype.unmount = Kc.prototype.unmount = function() {
    var e = this._internalRoot;
    if (null !== e) {
        this._internalRoot = null;
        var t = e.containerInfo;
        sc((function() {
            Vc(null, e, null, null)
        })), t[fa] = null
    }
}, Qc.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = xn();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < Pn.length && 0 !== t && t < Pn[n].priority; n++);
        Pn.splice(n, 0, e), 0 === n && Fn(e)
    }
}, bn = function(e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = un(t.pendingLanes);
                0 !== n && (gn(t, 1 | n), tc(t, Wt()), 0 == (6 & Ru) && (Uu = Wt() + 500, Ua()))
            }
            break;
        case 13:
            sc((function() {
                var t = ki(e, 1);
                if (null !== t) {
                    var n = Ju();
                    ec(t, e, 1, n)
                }
            })), $c(e, 1)
    }
}, wn = function(e) {
    if (13 === e.tag) {
        var t = ki(e, 134217728);
        if (null !== t) ec(t, e, 134217728, Ju());
        $c(e, 134217728)
    }
}, Cn = function(e) {
    if (13 === e.tag) {
        var t = Yu(e),
            n = ki(e, t);
        if (null !== n) ec(n, e, t, Ju());
        $c(e, t)
    }
}, xn = function() {
    return vn
}, Sn = function(e, t) {
    var n = vn;
    try {
        return vn = e, t()
    } finally {
        vn = n
    }
}, bt = function(e, t, n) {
    switch (t) {
        case "input":
            if (Ge(e, n), t = n.name, "radio" === n.type && null != t) {
                for (n = e; n.parentNode;) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var o = ba(r);
                        if (!o) throw Error(ne(90));
                        $e(r), Ge(r, o)
                    }
                }
            }
            break;
        case "textarea":
            nt(e, n);
            break;
        case "select":
            null != (t = n.value) && Ye(e, !!n.multiple, t, !1)
    }
}, _t = lc, Rt = sc;
var Jc = {
        usingClientEntryPoint: !1,
        Events: [va, ya, ba, St, Et, lc]
    },
    Yc = {
        findFiberByHostInstance: ga,
        bundleType: 0,
        version: "18.2.0",
        rendererPackageName: "react-dom"
    },
    ed = {
        bundleType: Yc.bundleType,
        version: Yc.version,
        rendererPackageName: Yc.rendererPackageName,
        rendererConfig: Yc.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: ve.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return null === (e = Bt(e)) ? null : e.stateNode
        },
        findFiberByHostInstance: Yc.findFiberByHostInstance || function() {
            return null
        },
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
    };
if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
    var td = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!td.isDisabled && td.supportsFiber) try {
        tn = td.inject(ed), nn = td
    } catch (lt) {}
}
Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Jc, Z.createPortal = function(e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!Wc(t)) throw Error(ne(200));
        return function(e, t, n) {
            var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
            return {
                $$typeof: be,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: t,
                implementation: n
            }
        }(e, t, null, n)
    }, Z.createRoot = function(e, t) {
        if (!Wc(e)) throw Error(ne(299));
        var n = !1,
            r = "",
            o = qc;
        return null != t && (!0 === t.unstable_strictMode && (n = !0), void 0 !== t.identifierPrefix && (r = t.identifierPrefix), void 0 !== t.onRecoverableError && (o = t.onRecoverableError)), t = Ic(e, 1, !1, null, 0, n, 0, r, o), e[fa] = t.current, Uo(8 === e.nodeType ? e.parentNode : e), new Kc(t)
    }, Z.findDOMNode = function(e) {
        if (null == e) return null;
        if (1 === e.nodeType) return e;
        var t = e._reactInternals;
        if (void 0 === t) {
            if ("function" == typeof e.render) throw Error(ne(188));
            throw e = Object.keys(e).join(","), Error(ne(268, e))
        }
        return e = null === (e = Bt(t)) ? null : e.stateNode
    }, Z.flushSync = function(e) {
        return sc(e)
    }, Z.hydrate = function(e, t, n) {
        if (!Gc(t)) throw Error(ne(200));
        return Xc(null, e, t, !0, n)
    }, Z.hydrateRoot = function(e, t, n) {
        if (!Wc(e)) throw Error(ne(405));
        var r = null != n && n.hydratedSources || null,
            o = !1,
            a = "",
            i = qc;
        if (null != n && (!0 === n.unstable_strictMode && (o = !0), void 0 !== n.identifierPrefix && (a = n.identifierPrefix), void 0 !== n.onRecoverableError && (i = n.onRecoverableError)), t = Uc(t, null, e, 1, null != n ? n : null, o, 0, a, i), e[fa] = t.current, Uo(e), r)
            for (e = 0; e < r.length; e++) o = (o = (n = r[e])._getVersion)(n._source), null == t.mutableSourceEagerHydrationData ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
        return new Qc(t)
    }, Z.render = function(e, t, n) {
        if (!Gc(t)) throw Error(ne(200));
        return Xc(null, e, t, !1, n)
    }, Z.unmountComponentAtNode = function(e) {
        if (!Gc(e)) throw Error(ne(40));
        return !!e._reactRootContainer && (sc((function() {
            Xc(null, null, e, !1, (function() {
                e._reactRootContainer = null, e[fa] = null
            }))
        })), !0)
    }, Z.unstable_batchedUpdates = lc, Z.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
        if (!Gc(n)) throw Error(ne(200));
        if (null == e || void 0 === e._reactInternals) throw Error(ne(38));
        return Xc(e, t, n, !1, r)
    }, Z.version = "18.2.0-next-9e3b772b8-20220608",
    function e() {
        if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
        } catch (t) {
            console.error(t)
        }
    }(), G.exports = Z;
var nd = G.exports;
const rd = e(nd);
var od = nd;

function ad(e, t) {
    return (ad = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
        return e.__proto__ = t, e
    })(e, t)
}

function id(e, t) {
    e.prototype = Object.create(t.prototype), e.prototype.constructor = e, ad(e, t)
}
W.createRoot = od.createRoot, W.hydrateRoot = od.hydrateRoot;
var ld = function() {
    function e() {
        this.listeners = []
    }
    var t = e.prototype;
    return t.subscribe = function(e) {
        var t = this,
            n = e || function() {};
        return this.listeners.push(n), this.onSubscribe(),
            function() {
                t.listeners = t.listeners.filter((function(e) {
                    return e !== n
                })), t.onUnsubscribe()
            }
    }, t.hasListeners = function() {
        return this.listeners.length > 0
    }, t.onSubscribe = function() {}, t.onUnsubscribe = function() {}, e
}();

function sd() {
    return sd = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, sd.apply(this, arguments)
}
var ud = "undefined" == typeof window;

function cd() {}

function dd(e) {
    return "number" == typeof e && e >= 0 && e !== 1 / 0
}

function fd(e) {
    return Array.isArray(e) ? e : [e]
}

function pd(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0)
}

function hd(e, t, n) {
    return _d(e) ? "function" == typeof t ? sd({}, n, {
        queryKey: e,
        queryFn: t
    }) : sd({}, t, {
        queryKey: e
    }) : e
}

function md(e, t, n) {
    return _d(e) ? [sd({}, t, {
        queryKey: e
    }), n] : [e || {}, t]
}

function gd(e, t) {
    var n = e.active,
        r = e.exact,
        o = e.fetching,
        a = e.inactive,
        i = e.predicate,
        l = e.queryKey,
        s = e.stale;
    if (_d(l))
        if (r) {
            if (t.queryHash !== yd(l, t.options)) return !1
        } else if (!wd(t.queryKey, l)) return !1;
    var u = function(e, t) {
        return !0 === e && !0 === t || null == e && null == t ? "all" : !1 === e && !1 === t ? "none" : (null != e ? e : !t) ? "active" : "inactive"
    }(n, a);
    if ("none" === u) return !1;
    if ("all" !== u) {
        var c = t.isActive();
        if ("active" === u && !c) return !1;
        if ("inactive" === u && c) return !1
    }
    return ("boolean" != typeof s || t.isStale() === s) && (("boolean" != typeof o || t.isFetching() === o) && !(i && !i(t)))
}

function vd(e, t) {
    var n = e.exact,
        r = e.fetching,
        o = e.predicate,
        a = e.mutationKey;
    if (_d(a)) {
        if (!t.options.mutationKey) return !1;
        if (n) {
            if (bd(t.options.mutationKey) !== bd(a)) return !1
        } else if (!wd(t.options.mutationKey, a)) return !1
    }
    return ("boolean" != typeof r || "loading" === t.state.status === r) && !(o && !o(t))
}

function yd(e, t) {
    return ((null == t ? void 0 : t.queryKeyHashFn) || bd)(e)
}

function bd(e) {
    var t, n = fd(e);
    return t = n, JSON.stringify(t, (function(e, t) {
        return Sd(t) ? Object.keys(t).sort().reduce((function(e, n) {
            return e[n] = t[n], e
        }), {}) : t
    }))
}

function wd(e, t) {
    return Cd(fd(e), fd(t))
}

function Cd(e, t) {
    return e === t || typeof e == typeof t && (!(!e || !t || "object" != typeof e || "object" != typeof t) && !Object.keys(t).some((function(n) {
        return !Cd(e[n], t[n])
    })))
}

function xd(e, t) {
    if (e === t) return e;
    var n = Array.isArray(e) && Array.isArray(t);
    if (n || Sd(e) && Sd(t)) {
        for (var r = n ? e.length : Object.keys(e).length, o = n ? t : Object.keys(t), a = o.length, i = n ? [] : {}, l = 0, s = 0; s < a; s++) {
            var u = n ? s : o[s];
            i[u] = xd(e[u], t[u]), i[u] === e[u] && l++
        }
        return r === a && l === r ? e : i
    }
    return t
}

function Sd(e) {
    if (!Ed(e)) return !1;
    var t = e.constructor;
    if (void 0 === t) return !0;
    var n = t.prototype;
    return !!Ed(n) && !!n.hasOwnProperty("isPrototypeOf")
}

function Ed(e) {
    return "[object Object]" === Object.prototype.toString.call(e)
}

function _d(e) {
    return "string" == typeof e || Array.isArray(e)
}

function Rd(e) {
    Promise.resolve().then(e).catch((function(e) {
        return setTimeout((function() {
            throw e
        }))
    }))
}

function kd() {
    if ("function" == typeof AbortController) return new AbortController
}
var Od = new(function(e) {
        function t() {
            var t;
            return (t = e.call(this) || this).setup = function(e) {
                var t;
                if (!ud && (null == (t = window) ? void 0 : t.addEventListener)) {
                    var n = function() {
                        return e()
                    };
                    return window.addEventListener("visibilitychange", n, !1), window.addEventListener("focus", n, !1),
                        function() {
                            window.removeEventListener("visibilitychange", n), window.removeEventListener("focus", n)
                        }
                }
            }, t
        }
        id(t, e);
        var n = t.prototype;
        return n.onSubscribe = function() {
            this.cleanup || this.setEventListener(this.setup)
        }, n.onUnsubscribe = function() {
            var e;
            this.hasListeners() || (null == (e = this.cleanup) || e.call(this), this.cleanup = void 0)
        }, n.setEventListener = function(e) {
            var t, n = this;
            this.setup = e, null == (t = this.cleanup) || t.call(this), this.cleanup = e((function(e) {
                "boolean" == typeof e ? n.setFocused(e) : n.onFocus()
            }))
        }, n.setFocused = function(e) {
            this.focused = e, e && this.onFocus()
        }, n.onFocus = function() {
            this.listeners.forEach((function(e) {
                e()
            }))
        }, n.isFocused = function() {
            return "boolean" == typeof this.focused ? this.focused : "undefined" == typeof document || [void 0, "visible", "prerender"].includes(document.visibilityState)
        }, t
    }(ld)),
    Nd = new(function(e) {
        function t() {
            var t;
            return (t = e.call(this) || this).setup = function(e) {
                var t;
                if (!ud && (null == (t = window) ? void 0 : t.addEventListener)) {
                    var n = function() {
                        return e()
                    };
                    return window.addEventListener("online", n, !1), window.addEventListener("offline", n, !1),
                        function() {
                            window.removeEventListener("online", n), window.removeEventListener("offline", n)
                        }
                }
            }, t
        }
        id(t, e);
        var n = t.prototype;
        return n.onSubscribe = function() {
            this.cleanup || this.setEventListener(this.setup)
        }, n.onUnsubscribe = function() {
            var e;
            this.hasListeners() || (null == (e = this.cleanup) || e.call(this), this.cleanup = void 0)
        }, n.setEventListener = function(e) {
            var t, n = this;
            this.setup = e, null == (t = this.cleanup) || t.call(this), this.cleanup = e((function(e) {
                "boolean" == typeof e ? n.setOnline(e) : n.onOnline()
            }))
        }, n.setOnline = function(e) {
            this.online = e, e && this.onOnline()
        }, n.onOnline = function() {
            this.listeners.forEach((function(e) {
                e()
            }))
        }, n.isOnline = function() {
            return "boolean" == typeof this.online ? this.online : "undefined" == typeof navigator || void 0 === navigator.onLine || navigator.onLine
        }, t
    }(ld));

function jd(e) {
    return Math.min(1e3 * Math.pow(2, e), 3e4)
}

function Pd(e) {
    return "function" == typeof(null == e ? void 0 : e.cancel)
}
var Ld = function(e) {
    this.revert = null == e ? void 0 : e.revert, this.silent = null == e ? void 0 : e.silent
};

function Td(e) {
    return e instanceof Ld
}
var Md = function(e) {
        var t, n, r, o, a = this,
            i = !1;
        this.abort = e.abort, this.cancel = function(e) {
            return null == t ? void 0 : t(e)
        }, this.cancelRetry = function() {
            i = !0
        }, this.continueRetry = function() {
            i = !1
        }, this.continue = function() {
            return null == n ? void 0 : n()
        }, this.failureCount = 0, this.isPaused = !1, this.isResolved = !1, this.isTransportCancelable = !1, this.promise = new Promise((function(e, t) {
            r = e, o = t
        }));
        var l = function(t) {
                a.isResolved || (a.isResolved = !0, null == e.onSuccess || e.onSuccess(t), null == n || n(), r(t))
            },
            s = function(t) {
                a.isResolved || (a.isResolved = !0, null == e.onError || e.onError(t), null == n || n(), o(t))
            };
        ! function r() {
            if (!a.isResolved) {
                var o;
                try {
                    o = e.fn()
                } catch (u) {
                    o = Promise.reject(u)
                }
                t = function(e) {
                    if (!a.isResolved && (s(new Ld(e)), null == a.abort || a.abort(), Pd(o))) try {
                        o.cancel()
                    } catch (t) {}
                }, a.isTransportCancelable = Pd(o), Promise.resolve(o).then(l).catch((function(t) {
                    var o, l;
                    if (!a.isResolved) {
                        var u, c = null != (o = e.retry) ? o : 3,
                            d = null != (l = e.retryDelay) ? l : jd,
                            f = "function" == typeof d ? d(a.failureCount, t) : d,
                            p = !0 === c || "number" == typeof c && a.failureCount < c || "function" == typeof c && c(a.failureCount, t);
                        if (!i && p) a.failureCount++, null == e.onFail || e.onFail(a.failureCount, t), (u = f, new Promise((function(e) {
                            setTimeout(e, u)
                        }))).then((function() {
                            if (!Od.isFocused() || !Nd.isOnline()) return new Promise((function(t) {
                                n = t, a.isPaused = !0, null == e.onPause || e.onPause()
                            })).then((function() {
                                n = void 0, a.isPaused = !1, null == e.onContinue || e.onContinue()
                            }))
                        })).then((function() {
                            i ? s(t) : r()
                        }));
                        else s(t)
                    }
                }))
            }
        }()
    },
    Fd = new(function() {
        function e() {
            this.queue = [], this.transactions = 0, this.notifyFn = function(e) {
                e()
            }, this.batchNotifyFn = function(e) {
                e()
            }
        }
        var t = e.prototype;
        return t.batch = function(e) {
            var t;
            this.transactions++;
            try {
                t = e()
            } finally {
                this.transactions--, this.transactions || this.flush()
            }
            return t
        }, t.schedule = function(e) {
            var t = this;
            this.transactions ? this.queue.push(e) : Rd((function() {
                t.notifyFn(e)
            }))
        }, t.batchCalls = function(e) {
            var t = this;
            return function() {
                for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                t.schedule((function() {
                    e.apply(void 0, r)
                }))
            }
        }, t.flush = function() {
            var e = this,
                t = this.queue;
            this.queue = [], t.length && Rd((function() {
                e.batchNotifyFn((function() {
                    t.forEach((function(t) {
                        e.notifyFn(t)
                    }))
                }))
            }))
        }, t.setNotifyFunction = function(e) {
            this.notifyFn = e
        }, t.setBatchNotifyFunction = function(e) {
            this.batchNotifyFn = e
        }, e
    }()),
    Ad = console;

function Dd() {
    return Ad
}
var Id = function() {
        function e(e) {
            this.abortSignalConsumed = !1, this.hadObservers = !1, this.defaultOptions = e.defaultOptions, this.setOptions(e.options), this.observers = [], this.cache = e.cache, this.queryKey = e.queryKey, this.queryHash = e.queryHash, this.initialState = e.state || this.getDefaultState(this.options), this.state = this.initialState, this.meta = e.meta, this.scheduleGc()
        }
        var t = e.prototype;
        return t.setOptions = function(e) {
            var t;
            this.options = sd({}, this.defaultOptions, e), this.meta = null == e ? void 0 : e.meta, this.cacheTime = Math.max(this.cacheTime || 0, null != (t = this.options.cacheTime) ? t : 3e5)
        }, t.setDefaultOptions = function(e) {
            this.defaultOptions = e
        }, t.scheduleGc = function() {
            var e = this;
            this.clearGcTimeout(), dd(this.cacheTime) && (this.gcTimeout = setTimeout((function() {
                e.optionalRemove()
            }), this.cacheTime))
        }, t.clearGcTimeout = function() {
            this.gcTimeout && (clearTimeout(this.gcTimeout), this.gcTimeout = void 0)
        }, t.optionalRemove = function() {
            this.observers.length || (this.state.isFetching ? this.hadObservers && this.scheduleGc() : this.cache.remove(this))
        }, t.setData = function(e, t) {
            var n, r, o = this.state.data,
                a = function(e, t) {
                    return "function" == typeof e ? e(t) : e
                }(e, o);
            return (null == (n = (r = this.options).isDataEqual) ? void 0 : n.call(r, o, a)) ? a = o : !1 !== this.options.structuralSharing && (a = xd(o, a)), this.dispatch({
                data: a,
                type: "success",
                dataUpdatedAt: null == t ? void 0 : t.updatedAt
            }), a
        }, t.setState = function(e, t) {
            this.dispatch({
                type: "setState",
                state: e,
                setStateOptions: t
            })
        }, t.cancel = function(e) {
            var t, n = this.promise;
            return null == (t = this.retryer) || t.cancel(e), n ? n.then(cd).catch(cd) : Promise.resolve()
        }, t.destroy = function() {
            this.clearGcTimeout(), this.cancel({
                silent: !0
            })
        }, t.reset = function() {
            this.destroy(), this.setState(this.initialState)
        }, t.isActive = function() {
            return this.observers.some((function(e) {
                return !1 !== e.options.enabled
            }))
        }, t.isFetching = function() {
            return this.state.isFetching
        }, t.isStale = function() {
            return this.state.isInvalidated || !this.state.dataUpdatedAt || this.observers.some((function(e) {
                return e.getCurrentResult().isStale
            }))
        }, t.isStaleByTime = function(e) {
            return void 0 === e && (e = 0), this.state.isInvalidated || !this.state.dataUpdatedAt || !pd(this.state.dataUpdatedAt, e)
        }, t.onFocus = function() {
            var e, t = this.observers.find((function(e) {
                return e.shouldFetchOnWindowFocus()
            }));
            t && t.refetch(), null == (e = this.retryer) || e.continue()
        }, t.onOnline = function() {
            var e, t = this.observers.find((function(e) {
                return e.shouldFetchOnReconnect()
            }));
            t && t.refetch(), null == (e = this.retryer) || e.continue()
        }, t.addObserver = function(e) {
            -1 === this.observers.indexOf(e) && (this.observers.push(e), this.hadObservers = !0, this.clearGcTimeout(), this.cache.notify({
                type: "observerAdded",
                query: this,
                observer: e
            }))
        }, t.removeObserver = function(e) {
            -1 !== this.observers.indexOf(e) && (this.observers = this.observers.filter((function(t) {
                return t !== e
            })), this.observers.length || (this.retryer && (this.retryer.isTransportCancelable || this.abortSignalConsumed ? this.retryer.cancel({
                revert: !0
            }) : this.retryer.cancelRetry()), this.cacheTime ? this.scheduleGc() : this.cache.remove(this)), this.cache.notify({
                type: "observerRemoved",
                query: this,
                observer: e
            }))
        }, t.getObserversCount = function() {
            return this.observers.length
        }, t.invalidate = function() {
            this.state.isInvalidated || this.dispatch({
                type: "invalidate"
            })
        }, t.fetch = function(e, t) {
            var n, r, o, a = this;
            if (this.state.isFetching)
                if (this.state.dataUpdatedAt && (null == t ? void 0 : t.cancelRefetch)) this.cancel({
                    silent: !0
                });
                else if (this.promise) {
                var i;
                return null == (i = this.retryer) || i.continueRetry(), this.promise
            }
            if (e && this.setOptions(e), !this.options.queryFn) {
                var l = this.observers.find((function(e) {
                    return e.options.queryFn
                }));
                l && this.setOptions(l.options)
            }
            var s = fd(this.queryKey),
                u = kd(),
                c = {
                    queryKey: s,
                    pageParam: void 0,
                    meta: this.meta
                };
            Object.defineProperty(c, "signal", {
                enumerable: !0,
                get: function() {
                    if (u) return a.abortSignalConsumed = !0, u.signal
                }
            });
            var d, f, p = {
                fetchOptions: t,
                options: this.options,
                queryKey: s,
                state: this.state,
                fetchFn: function() {
                    return a.options.queryFn ? (a.abortSignalConsumed = !1, a.options.queryFn(c)) : Promise.reject("Missing queryFn")
                },
                meta: this.meta
            };
            (null == (n = this.options.behavior) ? void 0 : n.onFetch) && (null == (d = this.options.behavior) || d.onFetch(p));
            (this.revertState = this.state, this.state.isFetching && this.state.fetchMeta === (null == (r = p.fetchOptions) ? void 0 : r.meta)) || this.dispatch({
                type: "fetch",
                meta: null == (f = p.fetchOptions) ? void 0 : f.meta
            });
            return this.retryer = new Md({
                fn: p.fetchFn,
                abort: null == u || null == (o = u.abort) ? void 0 : o.bind(u),
                onSuccess: function(e) {
                    a.setData(e), null == a.cache.config.onSuccess || a.cache.config.onSuccess(e, a), 0 === a.cacheTime && a.optionalRemove()
                },
                onError: function(e) {
                    Td(e) && e.silent || a.dispatch({
                        type: "error",
                        error: e
                    }), Td(e) || (null == a.cache.config.onError || a.cache.config.onError(e, a), Dd().error(e)), 0 === a.cacheTime && a.optionalRemove()
                },
                onFail: function() {
                    a.dispatch({
                        type: "failed"
                    })
                },
                onPause: function() {
                    a.dispatch({
                        type: "pause"
                    })
                },
                onContinue: function() {
                    a.dispatch({
                        type: "continue"
                    })
                },
                retry: p.options.retry,
                retryDelay: p.options.retryDelay
            }), this.promise = this.retryer.promise, this.promise
        }, t.dispatch = function(e) {
            var t = this;
            this.state = this.reducer(this.state, e), Fd.batch((function() {
                t.observers.forEach((function(t) {
                    t.onQueryUpdate(e)
                })), t.cache.notify({
                    query: t,
                    type: "queryUpdated",
                    action: e
                })
            }))
        }, t.getDefaultState = function(e) {
            var t = "function" == typeof e.initialData ? e.initialData() : e.initialData,
                n = void 0 !== e.initialData ? "function" == typeof e.initialDataUpdatedAt ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0,
                r = void 0 !== t;
            return {
                data: t,
                dataUpdateCount: 0,
                dataUpdatedAt: r ? null != n ? n : Date.now() : 0,
                error: null,
                errorUpdateCount: 0,
                errorUpdatedAt: 0,
                fetchFailureCount: 0,
                fetchMeta: null,
                isFetching: !1,
                isInvalidated: !1,
                isPaused: !1,
                status: r ? "success" : "idle"
            }
        }, t.reducer = function(e, t) {
            var n, r;
            switch (t.type) {
                case "failed":
                    return sd({}, e, {
                        fetchFailureCount: e.fetchFailureCount + 1
                    });
                case "pause":
                    return sd({}, e, {
                        isPaused: !0
                    });
                case "continue":
                    return sd({}, e, {
                        isPaused: !1
                    });
                case "fetch":
                    return sd({}, e, {
                        fetchFailureCount: 0,
                        fetchMeta: null != (n = t.meta) ? n : null,
                        isFetching: !0,
                        isPaused: !1
                    }, !e.dataUpdatedAt && {
                        error: null,
                        status: "loading"
                    });
                case "success":
                    return sd({}, e, {
                        data: t.data,
                        dataUpdateCount: e.dataUpdateCount + 1,
                        dataUpdatedAt: null != (r = t.dataUpdatedAt) ? r : Date.now(),
                        error: null,
                        fetchFailureCount: 0,
                        isFetching: !1,
                        isInvalidated: !1,
                        isPaused: !1,
                        status: "success"
                    });
                case "error":
                    var o = t.error;
                    return Td(o) && o.revert && this.revertState ? sd({}, this.revertState) : sd({}, e, {
                        error: o,
                        errorUpdateCount: e.errorUpdateCount + 1,
                        errorUpdatedAt: Date.now(),
                        fetchFailureCount: e.fetchFailureCount + 1,
                        isFetching: !1,
                        isPaused: !1,
                        status: "error"
                    });
                case "invalidate":
                    return sd({}, e, {
                        isInvalidated: !0
                    });
                case "setState":
                    return sd({}, e, t.state);
                default:
                    return e
            }
        }, e
    }(),
    zd = function(e) {
        function t(t) {
            var n;
            return (n = e.call(this) || this).config = t || {}, n.queries = [], n.queriesMap = {}, n
        }
        id(t, e);
        var n = t.prototype;
        return n.build = function(e, t, n) {
            var r, o = t.queryKey,
                a = null != (r = t.queryHash) ? r : yd(o, t),
                i = this.get(a);
            return i || (i = new Id({
                cache: this,
                queryKey: o,
                queryHash: a,
                options: e.defaultQueryOptions(t),
                state: n,
                defaultOptions: e.getQueryDefaults(o),
                meta: t.meta
            }), this.add(i)), i
        }, n.add = function(e) {
            this.queriesMap[e.queryHash] || (this.queriesMap[e.queryHash] = e, this.queries.push(e), this.notify({
                type: "queryAdded",
                query: e
            }))
        }, n.remove = function(e) {
            var t = this.queriesMap[e.queryHash];
            t && (e.destroy(), this.queries = this.queries.filter((function(t) {
                return t !== e
            })), t === e && delete this.queriesMap[e.queryHash], this.notify({
                type: "queryRemoved",
                query: e
            }))
        }, n.clear = function() {
            var e = this;
            Fd.batch((function() {
                e.queries.forEach((function(t) {
                    e.remove(t)
                }))
            }))
        }, n.get = function(e) {
            return this.queriesMap[e]
        }, n.getAll = function() {
            return this.queries
        }, n.find = function(e, t) {
            var n = md(e, t)[0];
            return void 0 === n.exact && (n.exact = !0), this.queries.find((function(e) {
                return gd(n, e)
            }))
        }, n.findAll = function(e, t) {
            var n = md(e, t)[0];
            return Object.keys(n).length > 0 ? this.queries.filter((function(e) {
                return gd(n, e)
            })) : this.queries
        }, n.notify = function(e) {
            var t = this;
            Fd.batch((function() {
                t.listeners.forEach((function(t) {
                    t(e)
                }))
            }))
        }, n.onFocus = function() {
            var e = this;
            Fd.batch((function() {
                e.queries.forEach((function(e) {
                    e.onFocus()
                }))
            }))
        }, n.onOnline = function() {
            var e = this;
            Fd.batch((function() {
                e.queries.forEach((function(e) {
                    e.onOnline()
                }))
            }))
        }, t
    }(ld),
    Ud = function() {
        function e(e) {
            this.options = sd({}, e.defaultOptions, e.options), this.mutationId = e.mutationId, this.mutationCache = e.mutationCache, this.observers = [], this.state = e.state || {
                context: void 0,
                data: void 0,
                error: null,
                failureCount: 0,
                isPaused: !1,
                status: "idle",
                variables: void 0
            }, this.meta = e.meta
        }
        var t = e.prototype;
        return t.setState = function(e) {
            this.dispatch({
                type: "setState",
                state: e
            })
        }, t.addObserver = function(e) {
            -1 === this.observers.indexOf(e) && this.observers.push(e)
        }, t.removeObserver = function(e) {
            this.observers = this.observers.filter((function(t) {
                return t !== e
            }))
        }, t.cancel = function() {
            return this.retryer ? (this.retryer.cancel(), this.retryer.promise.then(cd).catch(cd)) : Promise.resolve()
        }, t.continue = function() {
            return this.retryer ? (this.retryer.continue(), this.retryer.promise) : this.execute()
        }, t.execute = function() {
            var e, t = this,
                n = "loading" === this.state.status,
                r = Promise.resolve();
            return n || (this.dispatch({
                type: "loading",
                variables: this.options.variables
            }), r = r.then((function() {
                null == t.mutationCache.config.onMutate || t.mutationCache.config.onMutate(t.state.variables, t)
            })).then((function() {
                return null == t.options.onMutate ? void 0 : t.options.onMutate(t.state.variables)
            })).then((function(e) {
                e !== t.state.context && t.dispatch({
                    type: "loading",
                    context: e,
                    variables: t.state.variables
                })
            }))), r.then((function() {
                return t.executeMutation()
            })).then((function(n) {
                e = n, null == t.mutationCache.config.onSuccess || t.mutationCache.config.onSuccess(e, t.state.variables, t.state.context, t)
            })).then((function() {
                return null == t.options.onSuccess ? void 0 : t.options.onSuccess(e, t.state.variables, t.state.context)
            })).then((function() {
                return null == t.options.onSettled ? void 0 : t.options.onSettled(e, null, t.state.variables, t.state.context)
            })).then((function() {
                return t.dispatch({
                    type: "success",
                    data: e
                }), e
            })).catch((function(e) {
                return null == t.mutationCache.config.onError || t.mutationCache.config.onError(e, t.state.variables, t.state.context, t), Dd().error(e), Promise.resolve().then((function() {
                    return null == t.options.onError ? void 0 : t.options.onError(e, t.state.variables, t.state.context)
                })).then((function() {
                    return null == t.options.onSettled ? void 0 : t.options.onSettled(void 0, e, t.state.variables, t.state.context)
                })).then((function() {
                    throw t.dispatch({
                        type: "error",
                        error: e
                    }), e
                }))
            }))
        }, t.executeMutation = function() {
            var e, t = this;
            return this.retryer = new Md({
                fn: function() {
                    return t.options.mutationFn ? t.options.mutationFn(t.state.variables) : Promise.reject("No mutationFn found")
                },
                onFail: function() {
                    t.dispatch({
                        type: "failed"
                    })
                },
                onPause: function() {
                    t.dispatch({
                        type: "pause"
                    })
                },
                onContinue: function() {
                    t.dispatch({
                        type: "continue"
                    })
                },
                retry: null != (e = this.options.retry) ? e : 0,
                retryDelay: this.options.retryDelay
            }), this.retryer.promise
        }, t.dispatch = function(e) {
            var t = this;
            this.state = function(e, t) {
                switch (t.type) {
                    case "failed":
                        return sd({}, e, {
                            failureCount: e.failureCount + 1
                        });
                    case "pause":
                        return sd({}, e, {
                            isPaused: !0
                        });
                    case "continue":
                        return sd({}, e, {
                            isPaused: !1
                        });
                    case "loading":
                        return sd({}, e, {
                            context: t.context,
                            data: void 0,
                            error: null,
                            isPaused: !1,
                            status: "loading",
                            variables: t.variables
                        });
                    case "success":
                        return sd({}, e, {
                            data: t.data,
                            error: null,
                            status: "success",
                            isPaused: !1
                        });
                    case "error":
                        return sd({}, e, {
                            data: void 0,
                            error: t.error,
                            failureCount: e.failureCount + 1,
                            isPaused: !1,
                            status: "error"
                        });
                    case "setState":
                        return sd({}, e, t.state);
                    default:
                        return e
                }
            }(this.state, e), Fd.batch((function() {
                t.observers.forEach((function(t) {
                    t.onMutationUpdate(e)
                })), t.mutationCache.notify(t)
            }))
        }, e
    }();
var Vd = function(e) {
    function t(t) {
        var n;
        return (n = e.call(this) || this).config = t || {}, n.mutations = [], n.mutationId = 0, n
    }
    id(t, e);
    var n = t.prototype;
    return n.build = function(e, t, n) {
        var r = new Ud({
            mutationCache: this,
            mutationId: ++this.mutationId,
            options: e.defaultMutationOptions(t),
            state: n,
            defaultOptions: t.mutationKey ? e.getMutationDefaults(t.mutationKey) : void 0,
            meta: t.meta
        });
        return this.add(r), r
    }, n.add = function(e) {
        this.mutations.push(e), this.notify(e)
    }, n.remove = function(e) {
        this.mutations = this.mutations.filter((function(t) {
            return t !== e
        })), e.cancel(), this.notify(e)
    }, n.clear = function() {
        var e = this;
        Fd.batch((function() {
            e.mutations.forEach((function(t) {
                e.remove(t)
            }))
        }))
    }, n.getAll = function() {
        return this.mutations
    }, n.find = function(e) {
        return void 0 === e.exact && (e.exact = !0), this.mutations.find((function(t) {
            return vd(e, t)
        }))
    }, n.findAll = function(e) {
        return this.mutations.filter((function(t) {
            return vd(e, t)
        }))
    }, n.notify = function(e) {
        var t = this;
        Fd.batch((function() {
            t.listeners.forEach((function(t) {
                t(e)
            }))
        }))
    }, n.onFocus = function() {
        this.resumePausedMutations()
    }, n.onOnline = function() {
        this.resumePausedMutations()
    }, n.resumePausedMutations = function() {
        var e = this.mutations.filter((function(e) {
            return e.state.isPaused
        }));
        return Fd.batch((function() {
            return e.reduce((function(e, t) {
                return e.then((function() {
                    return t.continue().catch(cd)
                }))
            }), Promise.resolve())
        }))
    }, t
}(ld);

function Bd(e, t) {
    return null == e.getNextPageParam ? void 0 : e.getNextPageParam(t[t.length - 1], t)
}
var Hd = function() {
        function e(e) {
            void 0 === e && (e = {}), this.queryCache = e.queryCache || new zd, this.mutationCache = e.mutationCache || new Vd, this.defaultOptions = e.defaultOptions || {}, this.queryDefaults = [], this.mutationDefaults = []
        }
        var t = e.prototype;
        return t.mount = function() {
            var e = this;
            this.unsubscribeFocus = Od.subscribe((function() {
                Od.isFocused() && Nd.isOnline() && (e.mutationCache.onFocus(), e.queryCache.onFocus())
            })), this.unsubscribeOnline = Nd.subscribe((function() {
                Od.isFocused() && Nd.isOnline() && (e.mutationCache.onOnline(), e.queryCache.onOnline())
            }))
        }, t.unmount = function() {
            var e, t;
            null == (e = this.unsubscribeFocus) || e.call(this), null == (t = this.unsubscribeOnline) || t.call(this)
        }, t.isFetching = function(e, t) {
            var n = md(e, t)[0];
            return n.fetching = !0, this.queryCache.findAll(n).length
        }, t.isMutating = function(e) {
            return this.mutationCache.findAll(sd({}, e, {
                fetching: !0
            })).length
        }, t.getQueryData = function(e, t) {
            var n;
            return null == (n = this.queryCache.find(e, t)) ? void 0 : n.state.data
        }, t.getQueriesData = function(e) {
            return this.getQueryCache().findAll(e).map((function(e) {
                return [e.queryKey, e.state.data]
            }))
        }, t.setQueryData = function(e, t, n) {
            var r = hd(e),
                o = this.defaultQueryOptions(r);
            return this.queryCache.build(this, o).setData(t, n)
        }, t.setQueriesData = function(e, t, n) {
            var r = this;
            return Fd.batch((function() {
                return r.getQueryCache().findAll(e).map((function(e) {
                    var o = e.queryKey;
                    return [o, r.setQueryData(o, t, n)]
                }))
            }))
        }, t.getQueryState = function(e, t) {
            var n;
            return null == (n = this.queryCache.find(e, t)) ? void 0 : n.state
        }, t.removeQueries = function(e, t) {
            var n = md(e, t)[0],
                r = this.queryCache;
            Fd.batch((function() {
                r.findAll(n).forEach((function(e) {
                    r.remove(e)
                }))
            }))
        }, t.resetQueries = function(e, t, n) {
            var r = this,
                o = md(e, t, n),
                a = o[0],
                i = o[1],
                l = this.queryCache,
                s = sd({}, a, {
                    active: !0
                });
            return Fd.batch((function() {
                return l.findAll(a).forEach((function(e) {
                    e.reset()
                })), r.refetchQueries(s, i)
            }))
        }, t.cancelQueries = function(e, t, n) {
            var r = this,
                o = md(e, t, n),
                a = o[0],
                i = o[1],
                l = void 0 === i ? {} : i;
            void 0 === l.revert && (l.revert = !0);
            var s = Fd.batch((function() {
                return r.queryCache.findAll(a).map((function(e) {
                    return e.cancel(l)
                }))
            }));
            return Promise.all(s).then(cd).catch(cd)
        }, t.invalidateQueries = function(e, t, n) {
            var r, o, a, i = this,
                l = md(e, t, n),
                s = l[0],
                u = l[1],
                c = sd({}, s, {
                    active: null == (r = null != (o = s.refetchActive) ? o : s.active) || r,
                    inactive: null != (a = s.refetchInactive) && a
                });
            return Fd.batch((function() {
                return i.queryCache.findAll(s).forEach((function(e) {
                    e.invalidate()
                })), i.refetchQueries(c, u)
            }))
        }, t.refetchQueries = function(e, t, n) {
            var r = this,
                o = md(e, t, n),
                a = o[0],
                i = o[1],
                l = Fd.batch((function() {
                    return r.queryCache.findAll(a).map((function(e) {
                        return e.fetch(void 0, sd({}, i, {
                            meta: {
                                refetchPage: null == a ? void 0 : a.refetchPage
                            }
                        }))
                    }))
                })),
                s = Promise.all(l).then(cd);
            return (null == i ? void 0 : i.throwOnError) || (s = s.catch(cd)), s
        }, t.fetchQuery = function(e, t, n) {
            var r = hd(e, t, n),
                o = this.defaultQueryOptions(r);
            void 0 === o.retry && (o.retry = !1);
            var a = this.queryCache.build(this, o);
            return a.isStaleByTime(o.staleTime) ? a.fetch(o) : Promise.resolve(a.state.data)
        }, t.prefetchQuery = function(e, t, n) {
            return this.fetchQuery(e, t, n).then(cd).catch(cd)
        }, t.fetchInfiniteQuery = function(e, t, n) {
            var r = hd(e, t, n);
            return r.behavior = {
                onFetch: function(e) {
                    e.fetchFn = function() {
                        var t, n, r, o, a, i, l, s = null == (t = e.fetchOptions) || null == (n = t.meta) ? void 0 : n.refetchPage,
                            u = null == (r = e.fetchOptions) || null == (o = r.meta) ? void 0 : o.fetchMore,
                            c = null == u ? void 0 : u.pageParam,
                            d = "forward" === (null == u ? void 0 : u.direction),
                            f = "backward" === (null == u ? void 0 : u.direction),
                            p = (null == (a = e.state.data) ? void 0 : a.pages) || [],
                            h = (null == (i = e.state.data) ? void 0 : i.pageParams) || [],
                            m = kd(),
                            g = null == m ? void 0 : m.signal,
                            v = h,
                            y = !1,
                            b = e.options.queryFn || function() {
                                return Promise.reject("Missing queryFn")
                            },
                            w = function(e, t, n, r) {
                                return v = r ? [t].concat(v) : [].concat(v, [t]), r ? [n].concat(e) : [].concat(e, [n])
                            },
                            C = function(t, n, r, o) {
                                if (y) return Promise.reject("Cancelled");
                                if (void 0 === r && !n && t.length) return Promise.resolve(t);
                                var a = {
                                        queryKey: e.queryKey,
                                        signal: g,
                                        pageParam: r,
                                        meta: e.meta
                                    },
                                    i = b(a),
                                    l = Promise.resolve(i).then((function(e) {
                                        return w(t, r, e, o)
                                    }));
                                return Pd(i) && (l.cancel = i.cancel), l
                            };
                        if (p.length)
                            if (d) {
                                var x = void 0 !== c,
                                    S = x ? c : Bd(e.options, p);
                                l = C(p, x, S)
                            } else if (f) {
                            var E = void 0 !== c,
                                _ = E ? c : function(e, t) {
                                    return null == e.getPreviousPageParam ? void 0 : e.getPreviousPageParam(t[0], t)
                                }(e.options, p);
                            l = C(p, E, _, !0)
                        } else ! function() {
                            v = [];
                            var t = void 0 === e.options.getNextPageParam,
                                n = !s || !p[0] || s(p[0], 0, p);
                            l = n ? C([], t, h[0]) : Promise.resolve(w([], h[0], p[0]));
                            for (var r = function(n) {
                                    l = l.then((function(r) {
                                        if (!s || !p[n] || s(p[n], n, p)) {
                                            var o = t ? h[n] : Bd(e.options, r);
                                            return C(r, t, o)
                                        }
                                        return Promise.resolve(w(r, h[n], p[n]))
                                    }))
                                }, o = 1; o < p.length; o++) r(o)
                        }();
                        else l = C([]);
                        var R = l.then((function(e) {
                            return {
                                pages: e,
                                pageParams: v
                            }
                        }));
                        return R.cancel = function() {
                            y = !0, null == m || m.abort(), Pd(l) && l.cancel()
                        }, R
                    }
                }
            }, this.fetchQuery(r)
        }, t.prefetchInfiniteQuery = function(e, t, n) {
            return this.fetchInfiniteQuery(e, t, n).then(cd).catch(cd)
        }, t.cancelMutations = function() {
            var e = this,
                t = Fd.batch((function() {
                    return e.mutationCache.getAll().map((function(e) {
                        return e.cancel()
                    }))
                }));
            return Promise.all(t).then(cd).catch(cd)
        }, t.resumePausedMutations = function() {
            return this.getMutationCache().resumePausedMutations()
        }, t.executeMutation = function(e) {
            return this.mutationCache.build(this, e).execute()
        }, t.getQueryCache = function() {
            return this.queryCache
        }, t.getMutationCache = function() {
            return this.mutationCache
        }, t.getDefaultOptions = function() {
            return this.defaultOptions
        }, t.setDefaultOptions = function(e) {
            this.defaultOptions = e
        }, t.setQueryDefaults = function(e, t) {
            var n = this.queryDefaults.find((function(t) {
                return bd(e) === bd(t.queryKey)
            }));
            n ? n.defaultOptions = t : this.queryDefaults.push({
                queryKey: e,
                defaultOptions: t
            })
        }, t.getQueryDefaults = function(e) {
            var t;
            return e ? null == (t = this.queryDefaults.find((function(t) {
                return wd(e, t.queryKey)
            }))) ? void 0 : t.defaultOptions : void 0
        }, t.setMutationDefaults = function(e, t) {
            var n = this.mutationDefaults.find((function(t) {
                return bd(e) === bd(t.mutationKey)
            }));
            n ? n.defaultOptions = t : this.mutationDefaults.push({
                mutationKey: e,
                defaultOptions: t
            })
        }, t.getMutationDefaults = function(e) {
            var t;
            return e ? null == (t = this.mutationDefaults.find((function(t) {
                return wd(e, t.mutationKey)
            }))) ? void 0 : t.defaultOptions : void 0
        }, t.defaultQueryOptions = function(e) {
            if (null == e ? void 0 : e._defaulted) return e;
            var t = sd({}, this.defaultOptions.queries, this.getQueryDefaults(null == e ? void 0 : e.queryKey), e, {
                _defaulted: !0
            });
            return !t.queryHash && t.queryKey && (t.queryHash = yd(t.queryKey, t)), t
        }, t.defaultQueryObserverOptions = function(e) {
            return this.defaultQueryOptions(e)
        }, t.defaultMutationOptions = function(e) {
            return (null == e ? void 0 : e._defaulted) ? e : sd({}, this.defaultOptions.mutations, this.getMutationDefaults(null == e ? void 0 : e.mutationKey), e, {
                _defaulted: !0
            })
        }, t.clear = function() {
            this.queryCache.clear(), this.mutationCache.clear()
        }, e
    }(),
    $d = function(e) {
        function t(t, n) {
            var r;
            return (r = e.call(this) || this).client = t, r.options = n, r.trackedProps = [], r.selectError = null, r.bindMethods(), r.setOptions(n), r
        }
        id(t, e);
        var n = t.prototype;
        return n.bindMethods = function() {
            this.remove = this.remove.bind(this), this.refetch = this.refetch.bind(this)
        }, n.onSubscribe = function() {
            1 === this.listeners.length && (this.currentQuery.addObserver(this), qd(this.currentQuery, this.options) && this.executeFetch(), this.updateTimers())
        }, n.onUnsubscribe = function() {
            this.listeners.length || this.destroy()
        }, n.shouldFetchOnReconnect = function() {
            return Kd(this.currentQuery, this.options, this.options.refetchOnReconnect)
        }, n.shouldFetchOnWindowFocus = function() {
            return Kd(this.currentQuery, this.options, this.options.refetchOnWindowFocus)
        }, n.destroy = function() {
            this.listeners = [], this.clearTimers(), this.currentQuery.removeObserver(this)
        }, n.setOptions = function(e, t) {
            var n = this.options,
                r = this.currentQuery;
            if (this.options = this.client.defaultQueryObserverOptions(e), void 0 !== this.options.enabled && "boolean" != typeof this.options.enabled) throw new Error("Expected enabled to be a boolean");
            this.options.queryKey || (this.options.queryKey = n.queryKey), this.updateQuery();
            var o = this.hasListeners();
            o && Qd(this.currentQuery, r, this.options, n) && this.executeFetch(), this.updateResult(t), !o || this.currentQuery === r && this.options.enabled === n.enabled && this.options.staleTime === n.staleTime || this.updateStaleTimeout();
            var a = this.computeRefetchInterval();
            !o || this.currentQuery === r && this.options.enabled === n.enabled && a === this.currentRefetchInterval || this.updateRefetchInterval(a)
        }, n.getOptimisticResult = function(e) {
            var t = this.client.defaultQueryObserverOptions(e),
                n = this.client.getQueryCache().build(this.client, t);
            return this.createResult(n, t)
        }, n.getCurrentResult = function() {
            return this.currentResult
        }, n.trackResult = function(e, t) {
            var n = this,
                r = {},
                o = function(e) {
                    n.trackedProps.includes(e) || n.trackedProps.push(e)
                };
            return Object.keys(e).forEach((function(t) {
                Object.defineProperty(r, t, {
                    configurable: !1,
                    enumerable: !0,
                    get: function() {
                        return o(t), e[t]
                    }
                })
            })), (t.useErrorBoundary || t.suspense) && o("error"), r
        }, n.getNextResult = function(e) {
            var t = this;
            return new Promise((function(n, r) {
                var o = t.subscribe((function(t) {
                    t.isFetching || (o(), t.isError && (null == e ? void 0 : e.throwOnError) ? r(t.error) : n(t))
                }))
            }))
        }, n.getCurrentQuery = function() {
            return this.currentQuery
        }, n.remove = function() {
            this.client.getQueryCache().remove(this.currentQuery)
        }, n.refetch = function(e) {
            return this.fetch(sd({}, e, {
                meta: {
                    refetchPage: null == e ? void 0 : e.refetchPage
                }
            }))
        }, n.fetchOptimistic = function(e) {
            var t = this,
                n = this.client.defaultQueryObserverOptions(e),
                r = this.client.getQueryCache().build(this.client, n);
            return r.fetch().then((function() {
                return t.createResult(r, n)
            }))
        }, n.fetch = function(e) {
            var t = this;
            return this.executeFetch(e).then((function() {
                return t.updateResult(), t.currentResult
            }))
        }, n.executeFetch = function(e) {
            this.updateQuery();
            var t = this.currentQuery.fetch(this.options, e);
            return (null == e ? void 0 : e.throwOnError) || (t = t.catch(cd)), t
        }, n.updateStaleTimeout = function() {
            var e = this;
            if (this.clearStaleTimeout(), !ud && !this.currentResult.isStale && dd(this.options.staleTime)) {
                var t = pd(this.currentResult.dataUpdatedAt, this.options.staleTime) + 1;
                this.staleTimeoutId = setTimeout((function() {
                    e.currentResult.isStale || e.updateResult()
                }), t)
            }
        }, n.computeRefetchInterval = function() {
            var e;
            return "function" == typeof this.options.refetchInterval ? this.options.refetchInterval(this.currentResult.data, this.currentQuery) : null != (e = this.options.refetchInterval) && e
        }, n.updateRefetchInterval = function(e) {
            var t = this;
            this.clearRefetchInterval(), this.currentRefetchInterval = e, !ud && !1 !== this.options.enabled && dd(this.currentRefetchInterval) && 0 !== this.currentRefetchInterval && (this.refetchIntervalId = setInterval((function() {
                (t.options.refetchIntervalInBackground || Od.isFocused()) && t.executeFetch()
            }), this.currentRefetchInterval))
        }, n.updateTimers = function() {
            this.updateStaleTimeout(), this.updateRefetchInterval(this.computeRefetchInterval())
        }, n.clearTimers = function() {
            this.clearStaleTimeout(), this.clearRefetchInterval()
        }, n.clearStaleTimeout = function() {
            this.staleTimeoutId && (clearTimeout(this.staleTimeoutId), this.staleTimeoutId = void 0)
        }, n.clearRefetchInterval = function() {
            this.refetchIntervalId && (clearInterval(this.refetchIntervalId), this.refetchIntervalId = void 0)
        }, n.createResult = function(e, t) {
            var n, r = this.currentQuery,
                o = this.options,
                a = this.currentResult,
                i = this.currentResultState,
                l = this.currentResultOptions,
                s = e !== r,
                u = s ? e.state : this.currentQueryInitialState,
                c = s ? this.currentResult : this.previousQueryResult,
                d = e.state,
                f = d.dataUpdatedAt,
                p = d.error,
                h = d.errorUpdatedAt,
                m = d.isFetching,
                g = d.status,
                v = !1,
                y = !1;
            if (t.optimisticResults) {
                var b = this.hasListeners(),
                    w = !b && qd(e, t),
                    C = b && Qd(e, r, t, o);
                (w || C) && (m = !0, f || (g = "loading"))
            }
            if (t.keepPreviousData && !d.dataUpdateCount && (null == c ? void 0 : c.isSuccess) && "error" !== g) n = c.data, f = c.dataUpdatedAt, g = c.status, v = !0;
            else if (t.select && void 0 !== d.data)
                if (a && d.data === (null == i ? void 0 : i.data) && t.select === this.selectFn) n = this.selectResult;
                else try {
                    this.selectFn = t.select, n = t.select(d.data), !1 !== t.structuralSharing && (n = xd(null == a ? void 0 : a.data, n)), this.selectResult = n, this.selectError = null
                } catch (S) {
                    Dd().error(S), this.selectError = S
                } else n = d.data;
            if (void 0 !== t.placeholderData && void 0 === n && ("loading" === g || "idle" === g)) {
                var x;
                if ((null == a ? void 0 : a.isPlaceholderData) && t.placeholderData === (null == l ? void 0 : l.placeholderData)) x = a.data;
                else if (x = "function" == typeof t.placeholderData ? t.placeholderData() : t.placeholderData, t.select && void 0 !== x) try {
                    x = t.select(x), !1 !== t.structuralSharing && (x = xd(null == a ? void 0 : a.data, x)), this.selectError = null
                } catch (S) {
                    Dd().error(S), this.selectError = S
                }
                void 0 !== x && (g = "success", n = x, y = !0)
            }
            return this.selectError && (p = this.selectError, n = this.selectResult, h = Date.now(), g = "error"), {
                status: g,
                isLoading: "loading" === g,
                isSuccess: "success" === g,
                isError: "error" === g,
                isIdle: "idle" === g,
                data: n,
                dataUpdatedAt: f,
                error: p,
                errorUpdatedAt: h,
                failureCount: d.fetchFailureCount,
                errorUpdateCount: d.errorUpdateCount,
                isFetched: d.dataUpdateCount > 0 || d.errorUpdateCount > 0,
                isFetchedAfterMount: d.dataUpdateCount > u.dataUpdateCount || d.errorUpdateCount > u.errorUpdateCount,
                isFetching: m,
                isRefetching: m && "loading" !== g,
                isLoadingError: "error" === g && 0 === d.dataUpdatedAt,
                isPlaceholderData: y,
                isPreviousData: v,
                isRefetchError: "error" === g && 0 !== d.dataUpdatedAt,
                isStale: Wd(e, t),
                refetch: this.refetch,
                remove: this.remove
            }
        }, n.shouldNotifyListeners = function(e, t) {
            if (!t) return !0;
            var n = this.options,
                r = n.notifyOnChangeProps,
                o = n.notifyOnChangePropsExclusions;
            if (!r && !o) return !0;
            if ("tracked" === r && !this.trackedProps.length) return !0;
            var a = "tracked" === r ? this.trackedProps : r;
            return Object.keys(e).some((function(n) {
                var r = n,
                    i = e[r] !== t[r],
                    l = null == a ? void 0 : a.some((function(e) {
                        return e === n
                    })),
                    s = null == o ? void 0 : o.some((function(e) {
                        return e === n
                    }));
                return i && !s && (!a || l)
            }))
        }, n.updateResult = function(e) {
            var t = this.currentResult;
            if (this.currentResult = this.createResult(this.currentQuery, this.options), this.currentResultState = this.currentQuery.state, this.currentResultOptions = this.options, ! function(e, t) {
                    if (e && !t || t && !e) return !1;
                    for (var n in e)
                        if (e[n] !== t[n]) return !1;
                    return !0
                }(this.currentResult, t)) {
                var n = {
                    cache: !0
                };
                !1 !== (null == e ? void 0 : e.listeners) && this.shouldNotifyListeners(this.currentResult, t) && (n.listeners = !0), this.notify(sd({}, n, e))
            }
        }, n.updateQuery = function() {
            var e = this.client.getQueryCache().build(this.client, this.options);
            if (e !== this.currentQuery) {
                var t = this.currentQuery;
                this.currentQuery = e, this.currentQueryInitialState = e.state, this.previousQueryResult = this.currentResult, this.hasListeners() && (null == t || t.removeObserver(this), e.addObserver(this))
            }
        }, n.onQueryUpdate = function(e) {
            var t = {};
            "success" === e.type ? t.onSuccess = !0 : "error" !== e.type || Td(e.error) || (t.onError = !0), this.updateResult(t), this.hasListeners() && this.updateTimers()
        }, n.notify = function(e) {
            var t = this;
            Fd.batch((function() {
                e.onSuccess ? (null == t.options.onSuccess || t.options.onSuccess(t.currentResult.data), null == t.options.onSettled || t.options.onSettled(t.currentResult.data, null)) : e.onError && (null == t.options.onError || t.options.onError(t.currentResult.error), null == t.options.onSettled || t.options.onSettled(void 0, t.currentResult.error)), e.listeners && t.listeners.forEach((function(e) {
                    e(t.currentResult)
                })), e.cache && t.client.getQueryCache().notify({
                    query: t.currentQuery,
                    type: "observerResultsUpdated"
                })
            }))
        }, t
    }(ld);

function qd(e, t) {
    return function(e, t) {
        return !(!1 === t.enabled || e.state.dataUpdatedAt || "error" === e.state.status && !1 === t.retryOnMount)
    }(e, t) || e.state.dataUpdatedAt > 0 && Kd(e, t, t.refetchOnMount)
}

function Kd(e, t, n) {
    if (!1 !== t.enabled) {
        var r = "function" == typeof n ? n(e) : n;
        return "always" === r || !1 !== r && Wd(e, t)
    }
    return !1
}

function Qd(e, t, n, r) {
    return !1 !== n.enabled && (e !== t || !1 === r.enabled) && (!n.suspense || "error" !== e.state.status) && Wd(e, n)
}

function Wd(e, t) {
    return e.isStaleByTime(t.staleTime)
}
var Gd = function(e) {
        function t(t, n) {
            var r;
            return (r = e.call(this) || this).client = t, r.setOptions(n), r.bindMethods(), r.updateResult(), r
        }
        id(t, e);
        var n = t.prototype;
        return n.bindMethods = function() {
            this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this)
        }, n.setOptions = function(e) {
            this.options = this.client.defaultMutationOptions(e)
        }, n.onUnsubscribe = function() {
            var e;
            this.listeners.length || (null == (e = this.currentMutation) || e.removeObserver(this))
        }, n.onMutationUpdate = function(e) {
            this.updateResult();
            var t = {
                listeners: !0
            };
            "success" === e.type ? t.onSuccess = !0 : "error" === e.type && (t.onError = !0), this.notify(t)
        }, n.getCurrentResult = function() {
            return this.currentResult
        }, n.reset = function() {
            this.currentMutation = void 0, this.updateResult(), this.notify({
                listeners: !0
            })
        }, n.mutate = function(e, t) {
            return this.mutateOptions = t, this.currentMutation && this.currentMutation.removeObserver(this), this.currentMutation = this.client.getMutationCache().build(this.client, sd({}, this.options, {
                variables: void 0 !== e ? e : this.options.variables
            })), this.currentMutation.addObserver(this), this.currentMutation.execute()
        }, n.updateResult = function() {
            var e = this.currentMutation ? this.currentMutation.state : {
                    context: void 0,
                    data: void 0,
                    error: null,
                    failureCount: 0,
                    isPaused: !1,
                    status: "idle",
                    variables: void 0
                },
                t = sd({}, e, {
                    isLoading: "loading" === e.status,
                    isSuccess: "success" === e.status,
                    isError: "error" === e.status,
                    isIdle: "idle" === e.status,
                    mutate: this.mutate,
                    reset: this.reset
                });
            this.currentResult = t
        }, n.notify = function(e) {
            var t = this;
            Fd.batch((function() {
                t.mutateOptions && (e.onSuccess ? (null == t.mutateOptions.onSuccess || t.mutateOptions.onSuccess(t.currentResult.data, t.currentResult.variables, t.currentResult.context), null == t.mutateOptions.onSettled || t.mutateOptions.onSettled(t.currentResult.data, null, t.currentResult.variables, t.currentResult.context)) : e.onError && (null == t.mutateOptions.onError || t.mutateOptions.onError(t.currentResult.error, t.currentResult.variables, t.currentResult.context), null == t.mutateOptions.onSettled || t.mutateOptions.onSettled(void 0, t.currentResult.error, t.currentResult.variables, t.currentResult.context))), e.listeners && t.listeners.forEach((function(e) {
                    e(t.currentResult)
                }))
            }))
        }, t
    }(ld),
    Zd = rd.unstable_batchedUpdates;
Fd.setBatchNotifyFunction(Zd);
var Xd = console;
Ad = Xd;
var Jd = z.createContext(void 0),
    Yd = z.createContext(!1);

function ef(e) {
    return e && "undefined" != typeof window ? (window.ReactQueryClientContext || (window.ReactQueryClientContext = Jd), window.ReactQueryClientContext) : Jd
}
var tf = function() {
        var e = z.useContext(ef(z.useContext(Yd)));
        if (!e) throw new Error("No QueryClient set, use QueryClientProvider to set one");
        return e
    },
    nf = function(e) {
        var t = e.client,
            n = e.contextSharing,
            r = void 0 !== n && n,
            o = e.children;
        z.useEffect((function() {
            return t.mount(),
                function() {
                    t.unmount()
                }
        }), [t]);
        var a = ef(r);
        return z.createElement(Yd.Provider, {
            value: r
        }, z.createElement(a.Provider, {
            value: t
        }, o))
    };
var rf, of , af, lf = z.createContext((rf = !1, {
        clearReset: function() {
            rf = !1
        },
        reset: function() {
            rf = !0
        },
        isReset: function() {
            return rf
        }
    })),
    sf = function() {
        return z.useContext(lf)
    };

function uf(e, t, n) {
    return "function" == typeof t ? t.apply(void 0, n) : "boolean" == typeof t ? t : !!e
}

function cf(e, t, n) {
    var r = z.useRef(!1),
        o = z.useState(0)[1],
        a = function(e, t, n) {
            return _d(e) ? "function" == typeof t ? sd({}, n, {
                mutationKey: e,
                mutationFn: t
            }) : sd({}, t, {
                mutationKey: e
            }) : "function" == typeof e ? sd({}, t, {
                mutationFn: e
            }) : sd({}, e)
        }(e, t, n),
        i = tf(),
        l = z.useRef();
    l.current ? l.current.setOptions(a) : l.current = new Gd(i, a);
    var s = l.current.getCurrentResult();
    z.useEffect((function() {
        r.current = !0;
        var e = l.current.subscribe(Fd.batchCalls((function() {
            r.current && o((function(e) {
                return e + 1
            }))
        })));
        return function() {
            r.current = !1, e()
        }
    }), []);
    var u = z.useCallback((function(e, t) {
        l.current.mutate(e, t).catch(cd)
    }), []);
    if (s.error && uf(void 0, l.current.options.useErrorBoundary, [s.error])) throw s.error;
    return sd({}, s, {
        mutate: u,
        mutateAsync: s.mutate
    })
}

function df(e, t, n) {
    return function(e, t) {
        var n = z.useRef(!1),
            r = z.useState(0)[1],
            o = tf(),
            a = sf(),
            i = o.defaultQueryObserverOptions(e);
        i.optimisticResults = !0, i.onError && (i.onError = Fd.batchCalls(i.onError)), i.onSuccess && (i.onSuccess = Fd.batchCalls(i.onSuccess)), i.onSettled && (i.onSettled = Fd.batchCalls(i.onSettled)), i.suspense && ("number" != typeof i.staleTime && (i.staleTime = 1e3), 0 === i.cacheTime && (i.cacheTime = 1)), (i.suspense || i.useErrorBoundary) && (a.isReset() || (i.retryOnMount = !1));
        var l = z.useState((function() {
                return new t(o, i)
            }))[0],
            s = l.getOptimisticResult(i);
        if (z.useEffect((function() {
                n.current = !0, a.clearReset();
                var e = l.subscribe(Fd.batchCalls((function() {
                    n.current && r((function(e) {
                        return e + 1
                    }))
                })));
                return l.updateResult(),
                    function() {
                        n.current = !1, e()
                    }
            }), [a, l]), z.useEffect((function() {
                l.setOptions(i, {
                    listeners: !1
                })
            }), [i, l]), i.suspense && s.isLoading) throw l.fetchOptimistic(i).then((function(e) {
            var t = e.data;
            null == i.onSuccess || i.onSuccess(t), null == i.onSettled || i.onSettled(t, null)
        })).catch((function(e) {
            a.clearReset(), null == i.onError || i.onError(e), null == i.onSettled || i.onSettled(void 0, e)
        }));
        if (s.isError && !a.isReset() && !s.isFetching && uf(i.suspense, i.useErrorBoundary, [s.error, l.getCurrentQuery()])) throw s.error;
        return "tracked" === i.notifyOnChangeProps && (s = l.trackResult(s, i)), s
    }(hd(e, t, n), $d)
}
/**
 * @remix-run/router v1.6.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ff() {
    return ff = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, ff.apply(this, arguments)
}(af = of || ( of = {})).Pop = "POP", af.Push = "PUSH", af.Replace = "REPLACE";
const pf = "popstate";

function hf(e) {
    return void 0 === e && (e = {}),
        function(e, t, n, r) {
            void 0 === r && (r = {});
            let {
                window: o = document.defaultView,
                v5Compat: a = !1
            } = r, i = o.history, l = of .Pop, s = null, u = c();
            null == u && (u = 0, i.replaceState(ff({}, i.state, {
                idx: u
            }), ""));

            function c() {
                return (i.state || {
                    idx: null
                }).idx
            }

            function d() {
                l = of .Pop;
                let e = c(),
                    t = null == e ? null : e - u;
                u = e, s && s({
                    action: l,
                    location: m.location,
                    delta: t
                })
            }

            function f(e, t) {
                l = of .Push;
                let r = yf(m.location, e, t);
                n && n(r, e), u = c() + 1;
                let d = vf(r, u),
                    f = m.createHref(r);
                try {
                    i.pushState(d, "", f)
                } catch (p) {
                    o.location.assign(f)
                }
                a && s && s({
                    action: l,
                    location: m.location,
                    delta: 1
                })
            }

            function p(e, t) {
                l = of .Replace;
                let r = yf(m.location, e, t);
                n && n(r, e), u = c();
                let o = vf(r, u),
                    d = m.createHref(r);
                i.replaceState(o, "", d), a && s && s({
                    action: l,
                    location: m.location,
                    delta: 0
                })
            }

            function h(e) {
                let t = "null" !== o.location.origin ? o.location.origin : o.location.href,
                    n = "string" == typeof e ? e : bf(e);
                return mf(t, "No window.location.(origin|href) available to create URL for href: " + n), new URL(n, t)
            }
            let m = {
                get action() {
                    return l
                },
                get location() {
                    return e(o, i)
                },
                listen(e) {
                    if (s) throw new Error("A history only accepts one active listener");
                    return o.addEventListener(pf, d), s = e, () => {
                        o.removeEventListener(pf, d), s = null
                    }
                },
                createHref: e => t(o, e),
                createURL: h,
                encodeLocation(e) {
                    let t = h(e);
                    return {
                        pathname: t.pathname,
                        search: t.search,
                        hash: t.hash
                    }
                },
                push: f,
                replace: p,
                go: e => i.go(e)
            };
            return m
        }((function(e, t) {
            let {
                pathname: n = "/",
                search: r = "",
                hash: o = ""
            } = wf(e.location.hash.substr(1));
            return yf("", {
                pathname: n,
                search: r,
                hash: o
            }, t.state && t.state.usr || null, t.state && t.state.key || "default")
        }), (function(e, t) {
            let n = e.document.querySelector("base"),
                r = "";
            if (n && n.getAttribute("href")) {
                let t = e.location.href,
                    n = t.indexOf("#");
                r = -1 === n ? t : t.slice(0, n)
            }
            return r + "#" + ("string" == typeof t ? t : bf(t))
        }), (function(e, t) {
            gf("/" === e.pathname.charAt(0), "relative pathnames are not supported in hash history.push(" + JSON.stringify(t) + ")")
        }), e)
}

function mf(e, t) {
    if (!1 === e || null == e) throw new Error(t)
}

function gf(e, t) {
    if (!e) {
        "undefined" != typeof console && console.warn(t);
        try {
            throw new Error(t)
        } catch (n) {}
    }
}

function vf(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}

function yf(e, t, n, r) {
    return void 0 === n && (n = null), ff({
        pathname: "string" == typeof e ? e : e.pathname,
        search: "",
        hash: ""
    }, "string" == typeof t ? wf(t) : t, {
        state: n,
        key: t && t.key || r || Math.random().toString(36).substr(2, 8)
    })
}

function bf(e) {
    let {
        pathname: t = "/",
        search: n = "",
        hash: r = ""
    } = e;
    return n && "?" !== n && (t += "?" === n.charAt(0) ? n : "?" + n), r && "#" !== r && (t += "#" === r.charAt(0) ? r : "#" + r), t
}

function wf(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e)
    }
    return t
}
var Cf, xf;
(xf = Cf || (Cf = {})).data = "data", xf.deferred = "deferred", xf.redirect = "redirect", xf.error = "error";
const Sf = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);

function Ef(e, t, n, r) {
    return void 0 === n && (n = []), void 0 === r && (r = {}), e.map(((e, o) => {
        let a = [...n, o],
            i = "string" == typeof e.id ? e.id : a.join("-");
        if (mf(!0 !== e.index || !e.children, "Cannot specify children on an index route"), mf(!r[i], 'Found a route id collision on id "' + i + "\".  Route id's must be globally unique within Data Router usages"), function(e) {
                return !0 === e.index
            }(e)) {
            let n = ff({}, e, t(e), {
                id: i
            });
            return r[i] = n, n
        } {
            let n = ff({}, e, t(e), {
                id: i,
                children: void 0
            });
            return r[i] = n, e.children && (n.children = Ef(e.children, t, a, r)), n
        }
    }))
}

function _f(e, t, n) {
    void 0 === n && (n = "/");
    let r = zf(("string" == typeof t ? wf(t) : t).pathname || "/", n);
    if (null == r) return null;
    let o = Rf(e);
    ! function(e) {
        e.sort(((e, t) => e.score !== t.score ? t.score - e.score : function(e, t) {
            let n = e.length === t.length && e.slice(0, -1).every(((e, n) => e === t[n]));
            return n ? e[e.length - 1] - t[t.length - 1] : 0
        }(e.routesMeta.map((e => e.childrenIndex)), t.routesMeta.map((e => e.childrenIndex)))))
    }(o);
    let a = null;
    for (let i = 0; null == a && i < o.length; ++i) a = Af(o[i], If(r));
    return a
}

function Rf(e, t, n, r) {
    void 0 === t && (t = []), void 0 === n && (n = []), void 0 === r && (r = "");
    let o = (e, o, a) => {
        let i = {
            relativePath: void 0 === a ? e.path || "" : a,
            caseSensitive: !0 === e.caseSensitive,
            childrenIndex: o,
            route: e
        };
        i.relativePath.startsWith("/") && (mf(i.relativePath.startsWith(r), 'Absolute route path "' + i.relativePath + '" nested under path "' + r + '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'), i.relativePath = i.relativePath.slice(r.length));
        let l = Hf([r, i.relativePath]),
            s = n.concat(i);
        e.children && e.children.length > 0 && (mf(!0 !== e.index, 'Index routes must not have child routes. Please remove all child routes from route path "' + l + '".'), Rf(e.children, t, s, l)), (null != e.path || e.index) && t.push({
            path: l,
            score: Ff(l, e.index),
            routesMeta: s
        })
    };
    return e.forEach(((e, t) => {
        var n;
        if ("" !== e.path && null != (n = e.path) && n.includes("?"))
            for (let r of kf(e.path)) o(e, t, r);
        else o(e, t)
    })), t
}

function kf(e) {
    let t = e.split("/");
    if (0 === t.length) return [];
    let [n, ...r] = t, o = n.endsWith("?"), a = n.replace(/\?$/, "");
    if (0 === r.length) return o ? [a, ""] : [a];
    let i = kf(r.join("/")),
        l = [];
    return l.push(...i.map((e => "" === e ? a : [a, e].join("/")))), o && l.push(...i), l.map((t => e.startsWith("/") && "" === t ? "/" : t))
}
const Of = /^:\w+$/,
    Nf = 3,
    jf = 2,
    Pf = 1,
    Lf = 10,
    Tf = -2,
    Mf = e => "*" === e;

function Ff(e, t) {
    let n = e.split("/"),
        r = n.length;
    return n.some(Mf) && (r += Tf), t && (r += jf), n.filter((e => !Mf(e))).reduce(((e, t) => e + (Of.test(t) ? Nf : "" === t ? Pf : Lf)), r)
}

function Af(e, t) {
    let {
        routesMeta: n
    } = e, r = {}, o = "/", a = [];
    for (let i = 0; i < n.length; ++i) {
        let e = n[i],
            l = i === n.length - 1,
            s = "/" === o ? t : t.slice(o.length) || "/",
            u = Df({
                path: e.relativePath,
                caseSensitive: e.caseSensitive,
                end: l
            }, s);
        if (!u) return null;
        Object.assign(r, u.params);
        let c = e.route;
        a.push({
            params: r,
            pathname: Hf([o, u.pathname]),
            pathnameBase: $f(Hf([o, u.pathnameBase])),
            route: c
        }), "/" !== u.pathnameBase && (o = Hf([o, u.pathnameBase]))
    }
    return a
}

function Df(e, t) {
    "string" == typeof e && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let [n, r] = function(e, t, n) {
        void 0 === t && (t = !1);
        void 0 === n && (n = !0);
        gf("*" === e || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were "' + e.replace(/\*$/, "/*") + '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' + e.replace(/\*$/, "/*") + '".');
        let r = [],
            o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/\/:(\w+)/g, ((e, t) => (r.push(t), "/([^\\/]+)")));
        e.endsWith("*") ? (r.push("*"), o += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? o += "\\/*$" : "" !== e && "/" !== e && (o += "(?:(?=\\/|$))");
        let a = new RegExp(o, t ? void 0 : "i");
        return [a, r]
    }(e.path, e.caseSensitive, e.end), o = t.match(n);
    if (!o) return null;
    let a = o[0],
        i = a.replace(/(.)\/+$/, "$1"),
        l = o.slice(1);
    return {
        params: r.reduce(((e, t, n) => {
            if ("*" === t) {
                let e = l[n] || "";
                i = a.slice(0, a.length - e.length).replace(/(.)\/+$/, "$1")
            }
            return e[t] = function(e, t) {
                try {
                    return decodeURIComponent(e)
                } catch (n) {
                    return gf(!1, 'The value for the URL param "' + t + '" will not be decoded because the string "' + e + '" is a malformed URL segment. This is probably due to a bad percent encoding (' + n + ")."), e
                }
            }(l[n] || "", t), e
        }), {}),
        pathname: a,
        pathnameBase: i,
        pattern: e
    }
}

function If(e) {
    try {
        return decodeURI(e)
    } catch (t) {
        return gf(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' + t + ")."), e
    }
}

function zf(e, t) {
    if ("/" === t) return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length,
        r = e.charAt(n);
    return r && "/" !== r ? null : e.slice(n) || "/"
}

function Uf(e, t, n, r) {
    return "Cannot include a '" + e + "' character in a manually specified `to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the `to." + n + '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
}

function Vf(e) {
    return e.filter(((e, t) => 0 === t || e.route.path && e.route.path.length > 0))
}

function Bf(e, t, n, r) {
    let o;
    void 0 === r && (r = !1), "string" == typeof e ? o = wf(e) : (o = ff({}, e), mf(!o.pathname || !o.pathname.includes("?"), Uf("?", "pathname", "search", o)), mf(!o.pathname || !o.pathname.includes("#"), Uf("#", "pathname", "hash", o)), mf(!o.search || !o.search.includes("#"), Uf("#", "search", "hash", o)));
    let a, i = "" === e || "" === o.pathname,
        l = i ? "/" : o.pathname;
    if (r || null == l) a = n;
    else {
        let e = t.length - 1;
        if (l.startsWith("..")) {
            let t = l.split("/");
            for (;
                ".." === t[0];) t.shift(), e -= 1;
            o.pathname = t.join("/")
        }
        a = e >= 0 ? t[e] : "/"
    }
    let s = function(e, t) {
            void 0 === t && (t = "/");
            let {
                pathname: n,
                search: r = "",
                hash: o = ""
            } = "string" == typeof e ? wf(e) : e, a = n ? n.startsWith("/") ? n : function(e, t) {
                let n = t.replace(/\/+$/, "").split("/");
                return e.split("/").forEach((e => {
                    ".." === e ? n.length > 1 && n.pop() : "." !== e && n.push(e)
                })), n.length > 1 ? n.join("/") : "/"
            }(n, t) : t;
            return {
                pathname: a,
                search: qf(r),
                hash: Kf(o)
            }
        }(o, a),
        u = l && "/" !== l && l.endsWith("/"),
        c = (i || "." === l) && n.endsWith("/");
    return s.pathname.endsWith("/") || !u && !c || (s.pathname += "/"), s
}
const Hf = e => e.join("/").replace(/\/\/+/g, "/"),
    $f = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
    qf = e => e && "?" !== e ? e.startsWith("?") ? e : "?" + e : "",
    Kf = e => e && "#" !== e ? e.startsWith("#") ? e : "#" + e : "";
class Qf {
    constructor(e, t, n, r) {
        void 0 === r && (r = !1), this.status = e, this.statusText = t || "", this.internal = r, n instanceof Error ? (this.data = n.toString(), this.error = n) : this.data = n
    }
}

function Wf(e) {
    return null != e && "number" == typeof e.status && "string" == typeof e.statusText && "boolean" == typeof e.internal && "data" in e
}
const Gf = ["post", "put", "patch", "delete"],
    Zf = new Set(Gf),
    Xf = ["get", ...Gf],
    Jf = new Set(Xf),
    Yf = new Set([301, 302, 303, 307, 308]),
    ep = new Set([307, 308]),
    tp = {
        state: "idle",
        location: void 0,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0
    },
    np = {
        state: "idle",
        data: void 0,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0
    },
    rp = {
        state: "unblocked",
        proceed: void 0,
        reset: void 0,
        location: void 0
    },
    op = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    ap = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement,
    ip = !ap,
    lp = e => ({
        hasErrorBoundary: Boolean(e.hasErrorBoundary)
    });

function sp(e) {
    let t;
    if (mf(e.routes.length > 0, "You must provide a non-empty routes array to createRouter"), e.mapRouteProperties) t = e.mapRouteProperties;
    else if (e.detectErrorBoundary) {
        let n = e.detectErrorBoundary;
        t = e => ({
            hasErrorBoundary: n(e)
        })
    } else t = lp;
    let n, r = {},
        o = Ef(e.routes, t, void 0, r),
        a = e.basename || "/",
        i = ff({
            v7_normalizeFormMethod: !1,
            v7_prependBasename: !1
        }, e.future),
        l = null,
        s = new Set,
        u = null,
        c = null,
        d = null,
        f = null != e.hydrationData,
        p = _f(o, e.history.location, a),
        h = null;
    if (null == p) {
        let t = xp(404, {
                pathname: e.history.location.pathname
            }),
            {
                matches: n,
                route: r
            } = Cp(o);
        p = n, h = {
            [r.id]: t
        }
    }
    let m, g, v = !(p.some((e => e.route.lazy)) || p.some((e => e.route.loader)) && null == e.hydrationData),
        y = {
            historyAction: e.history.action,
            location: e.history.location,
            matches: p,
            initialized: v,
            navigation: tp,
            restoreScrollPosition: null == e.hydrationData && null,
            preventScrollReset: !1,
            revalidation: "idle",
            loaderData: e.hydrationData && e.hydrationData.loaderData || {},
            actionData: e.hydrationData && e.hydrationData.actionData || null,
            errors: e.hydrationData && e.hydrationData.errors || h,
            fetchers: new Map,
            blockers: new Map
        },
        b = of .Pop,
        w = !1,
        C = !1,
        x = !1,
        S = [],
        E = [],
        _ = new Map,
        R = 0,
        k = -1,
        O = new Map,
        N = new Set,
        j = new Map,
        P = new Map,
        L = new Map,
        T = !1;

    function M(e) {
        y = ff({}, y, e), s.forEach((e => e(y)))
    }

    function F(t, r) {
        var a, i;
        let l, s = null != y.actionData && null != y.navigation.formMethod && Op(y.navigation.formMethod) && "loading" === y.navigation.state && !0 !== (null == (a = t.state) ? void 0 : a._isRedirect);
        l = r.actionData ? Object.keys(r.actionData).length > 0 ? r.actionData : null : s ? y.actionData : null;
        let u = r.loaderData ? bp(y.loaderData, r.loaderData, r.matches || [], r.errors) : y.loaderData;
        for (let [e] of L) Q(e);
        let c = !0 === w || null != y.navigation.formMethod && Op(y.navigation.formMethod) && !0 !== (null == (i = t.state) ? void 0 : i._isRedirect);
        n && (o = n, n = void 0), M(ff({}, r, {
            actionData: l,
            loaderData: u,
            historyAction: b,
            location: t,
            initialized: !0,
            navigation: tp,
            revalidation: "idle",
            restoreScrollPosition: X(t, r.matches || y.matches),
            preventScrollReset: c,
            blockers: new Map(y.blockers)
        })), C || b === of .Pop || (b === of .Push ? e.history.push(t, t.state) : b === of .Replace && e.history.replace(t, t.state)), b = of .Pop, w = !1, C = !1, x = !1, S = [], E = []
    }
    async function A(i, l, s) {
        g && g.abort(), g = null, b = i, C = !0 === (s && s.startUninterruptedRevalidation),
            function(e, t) {
                if (u && c && d) {
                    let n = t.map((e => Lp(e, y.loaderData))),
                        r = c(e, n) || e.key;
                    u[r] = d()
                }
            }(y.location, y.matches), w = !0 === (s && s.preventScrollReset);
        let f = n || o,
            p = s && s.overrideNavigation,
            h = _f(f, l, a);
        if (!h) {
            let e = xp(404, {
                    pathname: l.pathname
                }),
                {
                    matches: t,
                    route: n
                } = Cp(f);
            return Z(), void F(l, {
                matches: t,
                loaderData: {},
                errors: {
                    [n.id]: e
                }
            })
        }
        if (function(e, t) {
                if (e.pathname !== t.pathname || e.search !== t.search) return !1;
                if ("" === e.hash) return "" !== t.hash;
                if (e.hash === t.hash) return !0;
                if ("" !== t.hash) return !0;
                return !1
            }(y.location, l) && !(s && s.submission && Op(s.submission.formMethod))) return void F(l, {
            matches: h
        });
        g = new AbortController;
        let m, v, O = gp(e.history, l, g.signal, s && s.submission);
        if (s && s.pendingError) v = {
            [wp(h).route.id]: s.pendingError
        };
        else if (s && s.submission && Op(s.submission.formMethod)) {
            let e = await async function(e, n, o, i, l) {
                U();
                let s, u = ff({
                    state: "submitting",
                    location: n
                }, o);
                M({
                    navigation: u
                });
                let c = Tp(i, n);
                if (c.route.action || c.route.lazy) {
                    if (s = await mp("action", e, c, i, r, t, a), e.signal.aborted) return {
                        shortCircuited: !0
                    }
                } else s = {
                    type: Cf.error,
                    error: xp(405, {
                        method: e.method,
                        pathname: n.pathname,
                        routeId: c.route.id
                    })
                };
                if (kp(s)) {
                    let e;
                    return e = l && null != l.replace ? l.replace : s.location === y.location.pathname + y.location.search, await I(y, s, {
                        submission: o,
                        replace: e
                    }), {
                        shortCircuited: !0
                    }
                }
                if (Rp(s)) {
                    let e = wp(i, c.route.id);
                    return !0 !== (l && l.replace) && (b = of .Push), {
                        pendingActionData: {},
                        pendingActionError: {
                            [e.route.id]: s.error
                        }
                    }
                }
                if (_p(s)) throw xp(400, {
                    type: "defer-action"
                });
                return {
                    pendingActionData: {
                        [c.route.id]: s.data
                    }
                }
            }(O, l, s.submission, h, {
                replace: s.replace
            });
            if (e.shortCircuited) return;
            m = e.pendingActionData, v = e.pendingActionError, p = ff({
                state: "loading",
                location: l
            }, s.submission), O = new Request(O.url, {
                signal: O.signal
            })
        }
        let {
            shortCircuited: N,
            loaderData: L,
            errors: T
        } = await async function(t, r, i, l, s, u, c, d, f) {
            let p = l;
            if (!p) {
                p = ff({
                    state: "loading",
                    location: r,
                    formMethod: void 0,
                    formAction: void 0,
                    formEncType: void 0,
                    formData: void 0
                }, s)
            }
            let h = s || u ? s || u : p.formMethod && p.formAction && p.formData && p.formEncType ? {
                    formMethod: p.formMethod,
                    formAction: p.formAction,
                    formData: p.formData,
                    formEncType: p.formEncType
                } : void 0,
                m = n || o,
                [v, b] = dp(e.history, y, i, h, r, x, S, E, j, m, a, d, f);
            if (Z((e => !(i && i.some((t => t.route.id === e))) || v && v.some((t => t.route.id === e)))), 0 === v.length && 0 === b.length) {
                let e = q();
                return F(r, ff({
                    matches: i,
                    loaderData: {},
                    errors: f || null
                }, d ? {
                    actionData: d
                } : {}, e ? {
                    fetchers: new Map(y.fetchers)
                } : {})), {
                    shortCircuited: !0
                }
            }
            if (!C) {
                b.forEach((e => {
                    let t = y.fetchers.get(e.key),
                        n = {
                            state: "loading",
                            data: t && t.data,
                            formMethod: void 0,
                            formAction: void 0,
                            formEncType: void 0,
                            formData: void 0,
                            " _hasFetcherDoneAnything ": !0
                        };
                    y.fetchers.set(e.key, n)
                }));
                let e = d || y.actionData;
                M(ff({
                    navigation: p
                }, e ? 0 === Object.keys(e).length ? {
                    actionData: null
                } : {
                    actionData: e
                } : {}, b.length > 0 ? {
                    fetchers: new Map(y.fetchers)
                } : {}))
            }
            k = ++R, b.forEach((e => {
                e.controller && _.set(e.key, e.controller)
            }));
            let w = () => b.forEach((e => H(e.key)));
            g && g.signal.addEventListener("abort", w);
            let {
                results: O,
                loaderResults: N,
                fetcherResults: L
            } = await z(y.matches, i, v, b, t);
            if (t.signal.aborted) return {
                shortCircuited: !0
            };
            g && g.signal.removeEventListener("abort", w);
            b.forEach((e => _.delete(e.key)));
            let T = Sp(O);
            if (T) return await I(y, T, {
                replace: c
            }), {
                shortCircuited: !0
            };
            let {
                loaderData: A,
                errors: D
            } = yp(y, i, v, N, f, b, L, P);
            P.forEach(((e, t) => {
                e.subscribe((n => {
                    (n || e.done) && P.delete(t)
                }))
            }));
            let U = q(),
                V = K(k),
                B = U || V || b.length > 0;
            return ff({
                loaderData: A,
                errors: D
            }, B ? {
                fetchers: new Map(y.fetchers)
            } : {})
        }(O, l, h, p, s && s.submission, s && s.fetcherSubmission, s && s.replace, m, v);
        N || (g = null, F(l, ff({
            matches: h
        }, m ? {
            actionData: m
        } : {}, {
            loaderData: L,
            errors: T
        })))
    }

    function D(e) {
        return y.fetchers.get(e) || np
    }
    async function I(t, n, r) {
        var o;
        let {
            submission: i,
            replace: l,
            isFetchActionRedirect: s
        } = void 0 === r ? {} : r;
        n.revalidate && (x = !0);
        let u = yf(t.location, n.location, ff({
            _isRedirect: !0
        }, s ? {
            _isFetchActionRedirect: !0
        } : {}));
        if (mf(u, "Expected a location on the redirect navigation"), op.test(n.location) && ap && void 0 !== (null == (o = window) ? void 0 : o.location)) {
            let t = e.history.createURL(n.location),
                r = null == zf(t.pathname, a);
            if (window.location.origin !== t.origin || r) return void(l ? window.location.replace(n.location) : window.location.assign(n.location))
        }
        g = null;
        let c = !0 === l ? of .Replace : of .Push,
            {
                formMethod: d,
                formAction: f,
                formEncType: p,
                formData: h
            } = t.navigation;
        !i && d && f && h && p && (i = {
            formMethod: d,
            formAction: f,
            formEncType: p,
            formData: h
        }), ep.has(n.status) && i && Op(i.formMethod) ? await A(c, u, {
            submission: ff({}, i, {
                formAction: n.location
            }),
            preventScrollReset: w
        }) : s ? await A(c, u, {
            overrideNavigation: {
                state: "loading",
                location: u,
                formMethod: void 0,
                formAction: void 0,
                formEncType: void 0,
                formData: void 0
            },
            fetcherSubmission: i,
            preventScrollReset: w
        }) : await A(c, u, {
            overrideNavigation: {
                state: "loading",
                location: u,
                formMethod: i ? i.formMethod : void 0,
                formAction: i ? i.formAction : void 0,
                formEncType: i ? i.formEncType : void 0,
                formData: i ? i.formData : void 0
            },
            preventScrollReset: w
        })
    }
    async function z(n, o, i, l, s) {
        let u = await Promise.all([...i.map((e => mp("loader", s, e, o, r, t, a))), ...l.map((n => {
                if (n.matches && n.match && n.controller) return mp("loader", gp(e.history, n.path, n.controller.signal), n.match, n.matches, r, t, a);
                return {
                    type: Cf.error,
                    error: xp(404, {
                        pathname: n.path
                    })
                }
            }))]),
            c = u.slice(0, i.length),
            d = u.slice(i.length);
        return await Promise.all([Np(n, i, c, c.map((() => s.signal)), !1, y.loaderData), Np(n, l.map((e => e.match)), d, l.map((e => e.controller ? e.controller.signal : null)), !0)]), {
            results: u,
            loaderResults: c,
            fetcherResults: d
        }
    }

    function U() {
        x = !0, S.push(...Z()), j.forEach(((e, t) => {
            _.has(t) && (E.push(t), H(t))
        }))
    }

    function V(e, t, n) {
        let r = wp(y.matches, t);
        B(e), M({
            errors: {
                [r.route.id]: n
            },
            fetchers: new Map(y.fetchers)
        })
    }

    function B(e) {
        _.has(e) && H(e), j.delete(e), O.delete(e), N.delete(e), y.fetchers.delete(e)
    }

    function H(e) {
        let t = _.get(e);
        mf(t, "Expected fetch controller: " + e), t.abort(), _.delete(e)
    }

    function $(e) {
        for (let t of e) {
            let e = {
                state: "idle",
                data: D(t).data,
                formMethod: void 0,
                formAction: void 0,
                formEncType: void 0,
                formData: void 0,
                " _hasFetcherDoneAnything ": !0
            };
            y.fetchers.set(t, e)
        }
    }

    function q() {
        let e = [],
            t = !1;
        for (let n of N) {
            let r = y.fetchers.get(n);
            mf(r, "Expected fetcher: " + n), "loading" === r.state && (N.delete(n), e.push(n), t = !0)
        }
        return $(e), t
    }

    function K(e) {
        let t = [];
        for (let [n, r] of O)
            if (r < e) {
                let e = y.fetchers.get(n);
                mf(e, "Expected fetcher: " + n), "loading" === e.state && (H(n), O.delete(n), t.push(n))
            } return $(t), t.length > 0
    }

    function Q(e) {
        y.blockers.delete(e), L.delete(e)
    }

    function W(e, t) {
        let n = y.blockers.get(e) || rp;
        mf("unblocked" === n.state && "blocked" === t.state || "blocked" === n.state && "blocked" === t.state || "blocked" === n.state && "proceeding" === t.state || "blocked" === n.state && "unblocked" === t.state || "proceeding" === n.state && "unblocked" === t.state, "Invalid blocker state transition: " + n.state + " -> " + t.state), y.blockers.set(e, t), M({
            blockers: new Map(y.blockers)
        })
    }

    function G(e) {
        let {
            currentLocation: t,
            nextLocation: n,
            historyAction: r
        } = e;
        if (0 === L.size) return;
        L.size > 1 && gf(!1, "A router only supports one blocker at a time");
        let o = Array.from(L.entries()),
            [a, i] = o[o.length - 1],
            l = y.blockers.get(a);
        return l && "proceeding" === l.state ? void 0 : i({
            currentLocation: t,
            nextLocation: n,
            historyAction: r
        }) ? a : void 0
    }

    function Z(e) {
        let t = [];
        return P.forEach(((n, r) => {
            e && !e(r) || (n.cancel(), t.push(r), P.delete(r))
        })), t
    }

    function X(e, t) {
        if (u && c && d) {
            let n = t.map((e => Lp(e, y.loaderData))),
                r = c(e, n) || e.key,
                o = u[r];
            if ("number" == typeof o) return o
        }
        return null
    }
    return m = {
        get basename() {
            return a
        },
        get state() {
            return y
        },
        get routes() {
            return o
        },
        initialize: function() {
            return l = e.history.listen((t => {
                let {
                    action: n,
                    location: r,
                    delta: o
                } = t;
                if (T) return void(T = !1);
                gf(0 === L.size || null != o, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
                let a = G({
                    currentLocation: y.location,
                    nextLocation: r,
                    historyAction: n
                });
                return a && null != o ? (T = !0, e.history.go(-1 * o), void W(a, {
                    state: "blocked",
                    location: r,
                    proceed() {
                        W(a, {
                            state: "proceeding",
                            proceed: void 0,
                            reset: void 0,
                            location: r
                        }), e.history.go(o)
                    },
                    reset() {
                        Q(a), M({
                            blockers: new Map(m.state.blockers)
                        })
                    }
                })) : A(n, r)
            })), y.initialized || A( of .Pop, y.location), m
        },
        subscribe: function(e) {
            return s.add(e), () => s.delete(e)
        },
        enableScrollRestoration: function(e, t, n) {
            if (u = e, d = t, c = n || (e => e.key), !f && y.navigation === tp) {
                f = !0;
                let e = X(y.location, y.matches);
                null != e && M({
                    restoreScrollPosition: e
                })
            }
            return () => {
                u = null, d = null, c = null
            }
        },
        navigate: async function t(n, r) {
            if ("number" == typeof n) return void e.history.go(n);
            let o = up(y.location, y.matches, a, i.v7_prependBasename, n, null == r ? void 0 : r.fromRouteId, null == r ? void 0 : r.relative),
                {
                    path: l,
                    submission: s,
                    error: u
                } = cp(i.v7_normalizeFormMethod, !1, o, r),
                c = y.location,
                d = yf(y.location, l, r && r.state);
            d = ff({}, d, e.history.encodeLocation(d));
            let f = r && null != r.replace ? r.replace : void 0,
                p = of .Push;
            !0 === f ? p = of .Replace : !1 === f || null != s && Op(s.formMethod) && s.formAction === y.location.pathname + y.location.search && (p = of .Replace);
            let h = r && "preventScrollReset" in r ? !0 === r.preventScrollReset : void 0,
                m = G({
                    currentLocation: c,
                    nextLocation: d,
                    historyAction: p
                });
            if (!m) return await A(p, d, {
                submission: s,
                pendingError: u,
                preventScrollReset: h,
                replace: r && r.replace
            });
            W(m, {
                state: "blocked",
                location: d,
                proceed() {
                    W(m, {
                        state: "proceeding",
                        proceed: void 0,
                        reset: void 0,
                        location: d
                    }), t(n, r)
                },
                reset() {
                    Q(m), M({
                        blockers: new Map(y.blockers)
                    })
                }
            })
        },
        fetch: function(l, s, u, c) {
            if (ip) throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");
            _.has(l) && H(l);
            let d = n || o,
                f = up(y.location, y.matches, a, i.v7_prependBasename, u, s, null == c ? void 0 : c.relative),
                p = _f(d, f, a);
            if (!p) return void V(l, s, xp(404, {
                pathname: f
            }));
            let {
                path: h,
                submission: m
            } = cp(i.v7_normalizeFormMethod, !0, f, c), v = Tp(p, h);
            w = !0 === (c && c.preventScrollReset), m && Op(m.formMethod) ? async function(i, l, s, u, c, d) {
                if (U(), j.delete(i), !u.route.action && !u.route.lazy) {
                    let e = xp(405, {
                        method: d.formMethod,
                        pathname: s,
                        routeId: l
                    });
                    return void V(i, l, e)
                }
                let f = y.fetchers.get(i),
                    p = ff({
                        state: "submitting"
                    }, d, {
                        data: f && f.data,
                        " _hasFetcherDoneAnything ": !0
                    });
                y.fetchers.set(i, p), M({
                    fetchers: new Map(y.fetchers)
                });
                let h = new AbortController,
                    m = gp(e.history, s, h.signal, d);
                _.set(i, h);
                let v = await mp("action", m, u, c, r, t, a);
                if (m.signal.aborted) return void(_.get(i) === h && _.delete(i));
                if (kp(v)) {
                    _.delete(i), N.add(i);
                    let e = ff({
                        state: "loading"
                    }, d, {
                        data: void 0,
                        " _hasFetcherDoneAnything ": !0
                    });
                    return y.fetchers.set(i, e), M({
                        fetchers: new Map(y.fetchers)
                    }), I(y, v, {
                        submission: d,
                        isFetchActionRedirect: !0
                    })
                }
                if (Rp(v)) return void V(i, l, v.error);
                if (_p(v)) throw xp(400, {
                    type: "defer-action"
                });
                let w = y.navigation.location || y.location,
                    C = gp(e.history, w, h.signal),
                    L = n || o,
                    T = "idle" !== y.navigation.state ? _f(L, y.navigation.location, a) : y.matches;
                mf(T, "Didn't find any matches after fetcher action");
                let A = ++R;
                O.set(i, A);
                let D = ff({
                    state: "loading",
                    data: v.data
                }, d, {
                    " _hasFetcherDoneAnything ": !0
                });
                y.fetchers.set(i, D);
                let [B, $] = dp(e.history, y, T, d, w, x, S, E, j, L, a, {
                    [u.route.id]: v.data
                }, void 0);
                $.filter((e => e.key !== i)).forEach((e => {
                    let t = e.key,
                        n = y.fetchers.get(t),
                        r = {
                            state: "loading",
                            data: n && n.data,
                            formMethod: void 0,
                            formAction: void 0,
                            formEncType: void 0,
                            formData: void 0,
                            " _hasFetcherDoneAnything ": !0
                        };
                    y.fetchers.set(t, r), e.controller && _.set(t, e.controller)
                })), M({
                    fetchers: new Map(y.fetchers)
                });
                let q = () => $.forEach((e => H(e.key)));
                h.signal.addEventListener("abort", q);
                let {
                    results: Q,
                    loaderResults: W,
                    fetcherResults: G
                } = await z(y.matches, T, B, $, C);
                if (h.signal.aborted) return;
                h.signal.removeEventListener("abort", q), O.delete(i), _.delete(i), $.forEach((e => _.delete(e.key)));
                let Z = Sp(Q);
                if (Z) return I(y, Z);
                let {
                    loaderData: X,
                    errors: J
                } = yp(y, y.matches, B, W, void 0, $, G, P), Y = {
                    state: "idle",
                    data: v.data,
                    formMethod: void 0,
                    formAction: void 0,
                    formEncType: void 0,
                    formData: void 0,
                    " _hasFetcherDoneAnything ": !0
                };
                y.fetchers.set(i, Y);
                let ee = K(A);
                "loading" === y.navigation.state && A > k ? (mf(b, "Expected pending action"), g && g.abort(), F(y.navigation.location, {
                    matches: T,
                    loaderData: X,
                    errors: J,
                    fetchers: new Map(y.fetchers)
                })) : (M(ff({
                    errors: J,
                    loaderData: bp(y.loaderData, X, T, J)
                }, ee ? {
                    fetchers: new Map(y.fetchers)
                } : {})), x = !1)
            }(l, s, h, v, p, m): (j.set(l, {
                routeId: s,
                path: h
            }), async function(n, o, i, l, s, u) {
                let c = y.fetchers.get(n),
                    d = ff({
                        state: "loading",
                        formMethod: void 0,
                        formAction: void 0,
                        formEncType: void 0,
                        formData: void 0
                    }, u, {
                        data: c && c.data,
                        " _hasFetcherDoneAnything ": !0
                    });
                y.fetchers.set(n, d), M({
                    fetchers: new Map(y.fetchers)
                });
                let f = new AbortController,
                    p = gp(e.history, i, f.signal);
                _.set(n, f);
                let h = await mp("loader", p, l, s, r, t, a);
                _p(h) && (h = await jp(h, p.signal, !0) || h);
                _.get(n) === f && _.delete(n);
                if (p.signal.aborted) return;
                if (kp(h)) return N.add(n), void(await I(y, h));
                if (Rp(h)) {
                    let e = wp(y.matches, o);
                    return y.fetchers.delete(n), void M({
                        fetchers: new Map(y.fetchers),
                        errors: {
                            [e.route.id]: h.error
                        }
                    })
                }
                mf(!_p(h), "Unhandled fetcher deferred data");
                let m = {
                    state: "idle",
                    data: h.data,
                    formMethod: void 0,
                    formAction: void 0,
                    formEncType: void 0,
                    formData: void 0,
                    " _hasFetcherDoneAnything ": !0
                };
                y.fetchers.set(n, m), M({
                    fetchers: new Map(y.fetchers)
                })
            }(l, s, h, v, p, m))
        },
        revalidate: function() {
            U(), M({
                revalidation: "loading"
            }), "submitting" !== y.navigation.state && ("idle" !== y.navigation.state ? A(b || y.historyAction, y.navigation.location, {
                overrideNavigation: y.navigation
            }) : A(y.historyAction, y.location, {
                startUninterruptedRevalidation: !0
            }))
        },
        createHref: t => e.history.createHref(t),
        encodeLocation: t => e.history.encodeLocation(t),
        getFetcher: D,
        deleteFetcher: B,
        dispose: function() {
            l && l(), s.clear(), g && g.abort(), y.fetchers.forEach(((e, t) => B(t))), y.blockers.forEach(((e, t) => Q(t)))
        },
        getBlocker: function(e, t) {
            let n = y.blockers.get(e) || rp;
            return L.get(e) !== t && L.set(e, t), n
        },
        deleteBlocker: Q,
        _internalFetchControllers: _,
        _internalActiveDeferreds: P,
        _internalSetRoutes: function(e) {
            n = e
        }
    }, m
}

function up(e, t, n, r, o, a, i) {
    let l, s;
    if (null != a && "path" !== i) {
        l = [];
        for (let e of t)
            if (l.push(e), e.route.id === a) {
                s = e;
                break
            }
    } else l = t, s = t[t.length - 1];
    let u = Bf(o || ".", Vf(l).map((e => e.pathnameBase)), zf(e.pathname, n) || e.pathname, "path" === i);
    return null == o && (u.search = e.search, u.hash = e.hash), null != o && "" !== o && "." !== o || !s || !s.route.index || Pp(u.search) || (u.search = u.search ? u.search.replace(/^\?/, "?index&") : "?index"), r && "/" !== n && (u.pathname = "/" === u.pathname ? n : Hf([n, u.pathname])), bf(u)
}

function cp(e, t, n, r) {
    if (!r || ! function(e) {
            return null != e && "formData" in e
        }(r)) return {
        path: n
    };
    if (r.formMethod && (o = r.formMethod, !Jf.has(o.toLowerCase()))) return {
        path: n,
        error: xp(405, {
            method: r.formMethod
        })
    };
    var o;
    let a;
    if (r.formData) {
        let t = r.formMethod || "get";
        if (a = {
                formMethod: e ? t.toUpperCase() : t.toLowerCase(),
                formAction: Ep(n),
                formEncType: r && r.formEncType || "application/x-www-form-urlencoded",
                formData: r.formData
            }, Op(a.formMethod)) return {
            path: n,
            submission: a
        }
    }
    let i = wf(n),
        l = vp(r.formData);
    return t && i.search && Pp(i.search) && l.append("index", ""), i.search = "?" + l, {
        path: bf(i),
        submission: a
    }
}

function dp(e, t, n, r, o, a, i, l, s, u, c, d, f) {
    let p = f ? Object.values(f)[0] : d ? Object.values(d)[0] : void 0,
        h = e.createURL(t.location),
        m = e.createURL(o),
        g = f ? Object.keys(f)[0] : void 0,
        v = function(e, t) {
            let n = e;
            if (t) {
                let r = e.findIndex((e => e.route.id === t));
                r >= 0 && (n = e.slice(0, r))
            }
            return n
        }(n, g),
        y = v.filter(((e, n) => {
            if (e.route.lazy) return !0;
            if (null == e.route.loader) return !1;
            if (function(e, t, n) {
                    let r = !t || n.route.id !== t.route.id,
                        o = void 0 === e[n.route.id];
                    return r || o
                }(t.loaderData, t.matches[n], e) || i.some((t => t === e.route.id))) return !0;
            let o = t.matches[n],
                l = e;
            return pp(e, ff({
                currentUrl: h,
                currentParams: o.params,
                nextUrl: m,
                nextParams: l.params
            }, r, {
                actionResult: p,
                defaultShouldRevalidate: a || h.pathname + h.search === m.pathname + m.search || h.search !== m.search || fp(o, l)
            }))
        })),
        b = [];
    return s.forEach(((e, o) => {
        if (!n.some((t => t.route.id === e.routeId))) return;
        let i = _f(u, e.path, c);
        if (!i) return void b.push({
            key: o,
            routeId: e.routeId,
            path: e.path,
            matches: null,
            match: null,
            controller: null
        });
        let s = Tp(i, e.path);
        (l.includes(o) || pp(s, ff({
            currentUrl: h,
            currentParams: t.matches[t.matches.length - 1].params,
            nextUrl: m,
            nextParams: n[n.length - 1].params
        }, r, {
            actionResult: p,
            defaultShouldRevalidate: a
        }))) && b.push({
            key: o,
            routeId: e.routeId,
            path: e.path,
            matches: i,
            match: s,
            controller: new AbortController
        })
    })), [y, b]
}

function fp(e, t) {
    let n = e.route.path;
    return e.pathname !== t.pathname || null != n && n.endsWith("*") && e.params["*"] !== t.params["*"]
}

function pp(e, t) {
    if (e.route.shouldRevalidate) {
        let n = e.route.shouldRevalidate(t);
        if ("boolean" == typeof n) return n
    }
    return t.defaultShouldRevalidate
}
async function hp(e, t, n) {
    if (!e.lazy) return;
    let r = await e.lazy();
    if (!e.lazy) return;
    let o = n[e.id];
    mf(o, "No route found in manifest");
    let a = {};
    for (let i in r) {
        let e = void 0 !== o[i] && "hasErrorBoundary" !== i;
        gf(!e, 'Route "' + o.id + '" has a static property "' + i + '" defined but its lazy function is also returning a value for this property. The lazy route property "' + i + '" will be ignored.'), e || Sf.has(i) || (a[i] = r[i])
    }
    Object.assign(o, a), Object.assign(o, ff({}, t(o), {
        lazy: void 0
    }))
}
async function mp(e, t, n, r, o, a, i, l, s, u) {
    let c, d, f;
    void 0 === l && (l = !1), void 0 === s && (s = !1);
    let p = e => {
        let r, o = new Promise(((e, t) => r = t));
        return f = () => r(), t.signal.addEventListener("abort", f), Promise.race([e({
            request: t,
            params: n.params,
            context: u
        }), o])
    };
    try {
        let r = n.route[e];
        if (n.route.lazy)
            if (r) {
                d = (await Promise.all([p(r), hp(n.route, a, o)]))[0]
            } else {
                if (await hp(n.route, a, o), r = n.route[e], !r) {
                    if ("action" === e) {
                        let e = new URL(t.url),
                            r = e.pathname + e.search;
                        throw xp(405, {
                            method: t.method,
                            pathname: r,
                            routeId: n.route.id
                        })
                    }
                    return {
                        type: Cf.data,
                        data: void 0
                    }
                }
                d = await p(r)
            }
        else {
            if (!r) {
                let e = new URL(t.url);
                throw xp(404, {
                    pathname: e.pathname + e.search
                })
            }
            d = await p(r)
        }
        mf(void 0 !== d, "You defined " + ("action" === e ? "an action" : "a loader") + ' for route "' + n.route.id + "\" but didn't return anything from your `" + e + "` function. Please return a value or `null`.")
    } catch (v) {
        c = Cf.error, d = v
    } finally {
        f && t.signal.removeEventListener("abort", f)
    }
    if (null != (h = d) && "number" == typeof h.status && "string" == typeof h.statusText && "object" == typeof h.headers && void 0 !== h.body) {
        let e, o = d.status;
        if (Yf.has(o)) {
            let e = d.headers.get("Location");
            if (mf(e, "Redirects returned/thrown from loaders/actions must have a Location header"), op.test(e)) {
                if (!l) {
                    let n = new URL(t.url),
                        r = e.startsWith("//") ? new URL(n.protocol + e) : new URL(e),
                        o = null != zf(r.pathname, i);
                    r.origin === n.origin && o && (e = r.pathname + r.search + r.hash)
                }
            } else e = up(new URL(t.url), r.slice(0, r.indexOf(n) + 1), i, !0, e);
            if (l) throw d.headers.set("Location", e), d;
            return {
                type: Cf.redirect,
                status: o,
                location: e,
                revalidate: null !== d.headers.get("X-Remix-Revalidate")
            }
        }
        if (s) throw {
            type: c || Cf.data,
            response: d
        };
        let a = d.headers.get("Content-Type");
        return e = a && /\bapplication\/json\b/.test(a) ? await d.json() : await d.text(), c === Cf.error ? {
            type: c,
            error: new Qf(o, d.statusText, e),
            headers: d.headers
        } : {
            type: Cf.data,
            data: e,
            statusCode: d.status,
            headers: d.headers
        }
    }
    var h, m, g;
    return c === Cf.error ? {
        type: c,
        error: d
    } : function(e) {
        let t = e;
        return t && "object" == typeof t && "object" == typeof t.data && "function" == typeof t.subscribe && "function" == typeof t.cancel && "function" == typeof t.resolveData
    }(d) ? {
        type: Cf.deferred,
        deferredData: d,
        statusCode: null == (m = d.init) ? void 0 : m.status,
        headers: (null == (g = d.init) ? void 0 : g.headers) && new Headers(d.init.headers)
    } : {
        type: Cf.data,
        data: d
    }
}

function gp(e, t, n, r) {
    let o = e.createURL(Ep(t)).toString(),
        a = {
            signal: n
        };
    if (r && Op(r.formMethod)) {
        let {
            formMethod: e,
            formEncType: t,
            formData: n
        } = r;
        a.method = e.toUpperCase(), a.body = "application/x-www-form-urlencoded" === t ? vp(n) : n
    }
    return new Request(o, a)
}

function vp(e) {
    let t = new URLSearchParams;
    for (let [n, r] of e.entries()) t.append(n, r instanceof File ? r.name : r);
    return t
}

function yp(e, t, n, r, o, a, i, l) {
    let {
        loaderData: s,
        errors: u
    } = function(e, t, n, r, o) {
        let a, i = {},
            l = null,
            s = !1,
            u = {};
        return n.forEach(((n, c) => {
            let d = t[c].route.id;
            if (mf(!kp(n), "Cannot handle redirect results in processLoaderData"), Rp(n)) {
                let t = wp(e, d),
                    o = n.error;
                r && (o = Object.values(r)[0], r = void 0), l = l || {}, null == l[t.route.id] && (l[t.route.id] = o), i[d] = void 0, s || (s = !0, a = Wf(n.error) ? n.error.status : 500), n.headers && (u[d] = n.headers)
            } else _p(n) ? (o.set(d, n.deferredData), i[d] = n.deferredData.data) : i[d] = n.data, null == n.statusCode || 200 === n.statusCode || s || (a = n.statusCode), n.headers && (u[d] = n.headers)
        })), r && (l = r, i[Object.keys(r)[0]] = void 0), {
            loaderData: i,
            errors: l,
            statusCode: a || 200,
            loaderHeaders: u
        }
    }(t, n, r, o, l);
    for (let c = 0; c < a.length; c++) {
        let {
            key: t,
            match: n,
            controller: r
        } = a[c];
        mf(void 0 !== i && void 0 !== i[c], "Did not find corresponding fetcher result");
        let o = i[c];
        if (!r || !r.signal.aborted)
            if (Rp(o)) {
                let r = wp(e.matches, null == n ? void 0 : n.route.id);
                u && u[r.route.id] || (u = ff({}, u, {
                    [r.route.id]: o.error
                })), e.fetchers.delete(t)
            } else if (kp(o)) mf(!1, "Unhandled fetcher revalidation redirect");
        else if (_p(o)) mf(!1, "Unhandled fetcher deferred data");
        else {
            let n = {
                state: "idle",
                data: o.data,
                formMethod: void 0,
                formAction: void 0,
                formEncType: void 0,
                formData: void 0,
                " _hasFetcherDoneAnything ": !0
            };
            e.fetchers.set(t, n)
        }
    }
    return {
        loaderData: s,
        errors: u
    }
}

function bp(e, t, n, r) {
    let o = ff({}, t);
    for (let a of n) {
        let n = a.route.id;
        if (t.hasOwnProperty(n) ? void 0 !== t[n] && (o[n] = t[n]) : void 0 !== e[n] && a.route.loader && (o[n] = e[n]), r && r.hasOwnProperty(n)) break
    }
    return o
}

function wp(e, t) {
    return (t ? e.slice(0, e.findIndex((e => e.route.id === t)) + 1) : [...e]).reverse().find((e => !0 === e.route.hasErrorBoundary)) || e[0]
}

function Cp(e) {
    let t = e.find((e => e.index || !e.path || "/" === e.path)) || {
        id: "__shim-error-route__"
    };
    return {
        matches: [{
            params: {},
            pathname: "",
            pathnameBase: "",
            route: t
        }],
        route: t
    }
}

function xp(e, t) {
    let {
        pathname: n,
        routeId: r,
        method: o,
        type: a
    } = void 0 === t ? {} : t, i = "Unknown Server Error", l = "Unknown @remix-run/router error";
    return 400 === e ? (i = "Bad Request", o && n && r ? l = "You made a " + o + ' request to "' + n + '" but did not provide a `loader` for route "' + r + '", so there is no way to handle the request.' : "defer-action" === a && (l = "defer() is not supported in actions")) : 403 === e ? (i = "Forbidden", l = 'Route "' + r + '" does not match URL "' + n + '"') : 404 === e ? (i = "Not Found", l = 'No route matches URL "' + n + '"') : 405 === e && (i = "Method Not Allowed", o && n && r ? l = "You made a " + o.toUpperCase() + ' request to "' + n + '" but did not provide an `action` for route "' + r + '", so there is no way to handle the request.' : o && (l = 'Invalid request method "' + o.toUpperCase() + '"')), new Qf(e || 500, i, new Error(l), !0)
}

function Sp(e) {
    for (let t = e.length - 1; t >= 0; t--) {
        let n = e[t];
        if (kp(n)) return n
    }
}

function Ep(e) {
    return bf(ff({}, "string" == typeof e ? wf(e) : e, {
        hash: ""
    }))
}

function _p(e) {
    return e.type === Cf.deferred
}

function Rp(e) {
    return e.type === Cf.error
}

function kp(e) {
    return (e && e.type) === Cf.redirect
}

function Op(e) {
    return Zf.has(e.toLowerCase())
}
async function Np(e, t, n, r, o, a) {
    for (let i = 0; i < n.length; i++) {
        let l = n[i],
            s = t[i];
        if (!s) continue;
        let u = e.find((e => e.route.id === s.route.id)),
            c = null != u && !fp(u, s) && void 0 !== (a && a[s.route.id]);
        if (_p(l) && (o || c)) {
            let e = r[i];
            mf(e, "Expected an AbortSignal for revalidating fetcher deferred result"), await jp(l, e, o).then((e => {
                e && (n[i] = e || n[i])
            }))
        }
    }
}
async function jp(e, t, n) {
    if (void 0 === n && (n = !1), !(await e.deferredData.resolveData(t))) {
        if (n) try {
            return {
                type: Cf.data,
                data: e.deferredData.unwrappedData
            }
        } catch (r) {
            return {
                type: Cf.error,
                error: r
            }
        }
        return {
            type: Cf.data,
            data: e.deferredData.data
        }
    }
}

function Pp(e) {
    return new URLSearchParams(e).getAll("index").some((e => "" === e))
}

function Lp(e, t) {
    let {
        route: n,
        pathname: r,
        params: o
    } = e;
    return {
        id: n.id,
        pathname: r,
        params: o,
        data: t[n.id],
        handle: n.handle
    }
}

function Tp(e, t) {
    let n = "string" == typeof t ? wf(t).search : t.search;
    if (e[e.length - 1].route.index && Pp(n || "")) return e[e.length - 1];
    let r = Vf(e);
    return r[r.length - 1]
}
/**
 * React Router v6.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Mp() {
    return Mp = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, Mp.apply(this, arguments)
}
const Fp = I.createContext(null),
    Ap = I.createContext(null),
    Dp = I.createContext(null),
    Ip = I.createContext(null),
    zp = I.createContext({
        outlet: null,
        matches: [],
        isDataRoute: !1
    }),
    Up = I.createContext(null);

function Vp() {
    return null != I.useContext(Ip)
}

function Bp() {
    return Vp() || mf(!1), I.useContext(Ip).location
}

function Hp(e) {
    I.useContext(Dp).static || I.useLayoutEffect(e)
}

function $p() {
    let {
        isDataRoute: e
    } = I.useContext(zp);
    return e ? function() {
        let {
            router: e
        } = function(e) {
            let t = I.useContext(Fp);
            return t || mf(!1), t
        }(Xp.UseNavigateStable), t = rh(Yp.UseNavigateStable), n = I.useRef(!1);
        Hp((() => {
            n.current = !0
        }));
        let r = I.useCallback((function(r, o) {
            void 0 === o && (o = {}), n.current && ("number" == typeof r ? e.navigate(r) : e.navigate(r, Mp({
                fromRouteId: t
            }, o)))
        }), [e, t]);
        return r
    }() : function() {
        Vp() || mf(!1);
        let {
            basename: e,
            navigator: t
        } = I.useContext(Dp), {
            matches: n
        } = I.useContext(zp), {
            pathname: r
        } = Bp(), o = JSON.stringify(Vf(n).map((e => e.pathnameBase))), a = I.useRef(!1);
        Hp((() => {
            a.current = !0
        }));
        let i = I.useCallback((function(n, i) {
            if (void 0 === i && (i = {}), !a.current) return;
            if ("number" == typeof n) return void t.go(n);
            let l = Bf(n, JSON.parse(o), r, "path" === i.relative);
            "/" !== e && (l.pathname = "/" === l.pathname ? e : Hf([e, l.pathname])), (i.replace ? t.replace : t.push)(l, i.state, i)
        }), [e, t, o, r]);
        return i
    }()
}

function qp(e, t) {
    let {
        relative: n
    } = void 0 === t ? {} : t, {
        matches: r
    } = I.useContext(zp), {
        pathname: o
    } = Bp(), a = JSON.stringify(Vf(r).map((e => e.pathnameBase)));
    return I.useMemo((() => Bf(e, JSON.parse(a), o, "path" === n)), [e, a, o, n])
}

function Kp(e, t, n) {
    Vp() || mf(!1);
    let {
        navigator: r
    } = I.useContext(Dp), {
        matches: o
    } = I.useContext(zp), a = o[o.length - 1], i = a ? a.params : {};
    !a || a.pathname;
    let l = a ? a.pathnameBase : "/";
    a && a.route;
    let s, u = Bp();
    if (t) {
        var c;
        let e = "string" == typeof t ? wf(t) : t;
        "/" === l || (null == (c = e.pathname) ? void 0 : c.startsWith(l)) || mf(!1), s = e
    } else s = u;
    let d = s.pathname || "/",
        f = _f(e, {
            pathname: "/" === l ? d : d.slice(l.length) || "/"
        }),
        p = function(e, t, n) {
            var r, o;
            void 0 === t && (t = []);
            void 0 === n && (n = null);
            if (null == e) {
                if (null == (o = n) || !o.errors) return null;
                e = n.matches
            }
            let a = e,
                i = null == (r = n) ? void 0 : r.errors;
            if (null != i) {
                let e = a.findIndex((e => e.route.id && (null == i ? void 0 : i[e.route.id])));
                e >= 0 || mf(!1), a = a.slice(0, Math.min(a.length, e + 1))
            }
            return a.reduceRight(((e, r, o) => {
                let l = r.route.id ? null == i ? void 0 : i[r.route.id] : null,
                    s = null;
                n && (s = r.route.errorElement || Wp);
                let u = t.concat(a.slice(0, o + 1)),
                    c = () => {
                        let t;
                        return t = l ? s : r.route.Component ? I.createElement(r.route.Component, null) : r.route.element ? r.route.element : e, I.createElement(Zp, {
                            match: r,
                            routeContext: {
                                outlet: e,
                                matches: u,
                                isDataRoute: null != n
                            },
                            children: t
                        })
                    };
                return n && (r.route.ErrorBoundary || r.route.errorElement || 0 === o) ? I.createElement(Gp, {
                    location: n.location,
                    revalidation: n.revalidation,
                    component: s,
                    error: l,
                    children: c(),
                    routeContext: {
                        outlet: null,
                        matches: u,
                        isDataRoute: !0
                    }
                }) : c()
            }), null)
        }(f && f.map((e => Object.assign({}, e, {
            params: Object.assign({}, i, e.params),
            pathname: Hf([l, r.encodeLocation ? r.encodeLocation(e.pathname).pathname : e.pathname]),
            pathnameBase: "/" === e.pathnameBase ? l : Hf([l, r.encodeLocation ? r.encodeLocation(e.pathnameBase).pathname : e.pathnameBase])
        }))), o, n);
    return t && p ? I.createElement(Ip.Provider, {
        value: {
            location: Mp({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, s),
            navigationType: of .Pop
        }
    }, p) : p
}

function Qp() {
    let e = function() {
            var e;
            let t = I.useContext(Up),
                n = function(e) {
                    let t = I.useContext(Ap);
                    return t || mf(!1), t
                }(Yp.UseRouteError),
                r = rh(Yp.UseRouteError);
            if (t) return t;
            return null == (e = n.errors) ? void 0 : e[r]
        }(),
        t = Wf(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
        n = e instanceof Error ? e.stack : null,
        r = {
            padding: "0.5rem",
            backgroundColor: "rgba(200,200,200, 0.5)"
        };
    return I.createElement(I.Fragment, null, I.createElement("h2", null, "Unexpected Application Error!"), I.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? I.createElement("pre", {
        style: r
    }, n) : null, null)
}
const Wp = I.createElement(Qp, null);
class Gp extends I.Component {
    constructor(e) {
        super(e), this.state = {
            location: e.location,
            revalidation: e.revalidation,
            error: e.error
        }
    }
    static getDerivedStateFromError(e) {
        return {
            error: e
        }
    }
    static getDerivedStateFromProps(e, t) {
        return t.location !== e.location || "idle" !== t.revalidation && "idle" === e.revalidation ? {
            error: e.error,
            location: e.location,
            revalidation: e.revalidation
        } : {
            error: e.error || t.error,
            location: t.location,
            revalidation: e.revalidation || t.revalidation
        }
    }
    componentDidCatch(e, t) {
        console.error("React Router caught the following error during render", e, t)
    }
    render() {
        return this.state.error ? I.createElement(zp.Provider, {
            value: this.props.routeContext
        }, I.createElement(Up.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}

function Zp(e) {
    let {
        routeContext: t,
        match: n,
        children: r
    } = e, o = I.useContext(Fp);
    return o && o.static && o.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = n.route.id), I.createElement(zp.Provider, {
        value: t
    }, r)
}
var Xp, Jp, Yp, eh, th, nh;

function rh(e) {
    let t = function(e) {
            let t = I.useContext(zp);
            return t || mf(!1), t
        }(),
        n = t.matches[t.matches.length - 1];
    return n.route.id || mf(!1), n.route.id
}

function oh(e) {
    let {
        fallbackElement: t,
        router: n
    } = e, [r, o] = I.useState(n.state);
    I.useLayoutEffect((() => n.subscribe(o)), [n, o]);
    let a = I.useMemo((() => ({
            createHref: n.createHref,
            encodeLocation: n.encodeLocation,
            go: e => n.navigate(e),
            push: (e, t, r) => n.navigate(e, {
                state: t,
                preventScrollReset: null == r ? void 0 : r.preventScrollReset
            }),
            replace: (e, t, r) => n.navigate(e, {
                replace: !0,
                state: t,
                preventScrollReset: null == r ? void 0 : r.preventScrollReset
            })
        })), [n]),
        i = n.basename || "/",
        l = I.useMemo((() => ({
            router: n,
            navigator: a,
            static: !1,
            basename: i
        })), [n, a, i]);
    return I.createElement(I.Fragment, null, I.createElement(Fp.Provider, {
        value: l
    }, I.createElement(Ap.Provider, {
        value: r
    }, I.createElement(lh, {
        basename: n.basename,
        location: n.state.location,
        navigationType: n.state.historyAction,
        navigator: a
    }, n.state.initialized ? I.createElement(ah, {
        routes: n.routes,
        state: r
    }) : t))), null)
}

function ah(e) {
    let {
        routes: t,
        state: n
    } = e;
    return Kp(t, void 0, n)
}

function ih(e) {
    let {
        to: t,
        replace: n,
        state: r,
        relative: o
    } = e;
    Vp() || mf(!1);
    let {
        matches: a
    } = I.useContext(zp), {
        pathname: i
    } = Bp(), l = $p(), s = Bf(t, Vf(a).map((e => e.pathnameBase)), i, "path" === o), u = JSON.stringify(s);
    return I.useEffect((() => l(JSON.parse(u), {
        replace: n,
        state: r,
        relative: o
    })), [l, u, o, n, r]), null
}

function lh(e) {
    let {
        basename: t = "/",
        children: n = null,
        location: r,
        navigationType: o = of .Pop,
        navigator: a,
        static: i = !1
    } = e;
    Vp() && mf(!1);
    let l = t.replace(/^\/*/, "/"),
        s = I.useMemo((() => ({
            basename: l,
            navigator: a,
            static: i
        })), [l, a, i]);
    "string" == typeof r && (r = wf(r));
    let {
        pathname: u = "/",
        search: c = "",
        hash: d = "",
        state: f = null,
        key: p = "default"
    } = r, h = I.useMemo((() => {
        let e = zf(u, l);
        return null == e ? null : {
            location: {
                pathname: e,
                search: c,
                hash: d,
                state: f,
                key: p
            },
            navigationType: o
        }
    }), [l, u, c, d, f, p, o]);
    return null == h ? null : I.createElement(Dp.Provider, {
        value: s
    }, I.createElement(Ip.Provider, {
        children: n,
        value: h
    }))
}

function sh(e) {
    let t = {
        hasErrorBoundary: null != e.ErrorBoundary || null != e.errorElement
    };
    return e.Component && Object.assign(t, {
        element: I.createElement(e.Component),
        Component: void 0
    }), e.ErrorBoundary && Object.assign(t, {
        errorElement: I.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0
    }), t
}
/**
 * React Router DOM v6.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function uh() {
    return uh = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, uh.apply(this, arguments)
}

function ch(e, t) {
    if (null == e) return {};
    var n, r, o = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
    return o
}(Jp = Xp || (Xp = {})).UseBlocker = "useBlocker", Jp.UseRevalidator = "useRevalidator", Jp.UseNavigateStable = "useNavigate", (eh = Yp || (Yp = {})).UseBlocker = "useBlocker", eh.UseLoaderData = "useLoaderData", eh.UseActionData = "useActionData", eh.UseRouteError = "useRouteError", eh.UseNavigation = "useNavigation", eh.UseRouteLoaderData = "useRouteLoaderData", eh.UseMatches = "useMatches", eh.UseRevalidator = "useRevalidator", eh.UseNavigateStable = "useNavigate", eh.UseRouteId = "useRouteId", (nh = th || (th = {}))[nh.pending = 0] = "pending", nh[nh.success = 1] = "success", nh[nh.error = 2] = "error", new Promise((() => {}));
const dh = "get",
    fh = "application/x-www-form-urlencoded";

function ph(e) {
    return null != e && "string" == typeof e.tagName
}

function hh(e, t, n) {
    let r, o, a, i = null;
    if (ph(l = e) && "form" === l.tagName.toLowerCase()) {
        let l = t.submissionTrigger;
        if (t.action) i = t.action;
        else {
            let t = e.getAttribute("action");
            i = t ? zf(t, n) : null
        }
        r = t.method || e.getAttribute("method") || dh, o = t.encType || e.getAttribute("enctype") || fh, a = new FormData(e), l && l.name && a.append(l.name, l.value)
    } else if (function(e) {
            return ph(e) && "button" === e.tagName.toLowerCase()
        }(e) || function(e) {
            return ph(e) && "input" === e.tagName.toLowerCase()
        }(e) && ("submit" === e.type || "image" === e.type)) {
        let l = e.form;
        if (null == l) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
        if (t.action) i = t.action;
        else {
            let t = e.getAttribute("formaction") || l.getAttribute("action");
            i = t ? zf(t, n) : null
        }
        r = t.method || e.getAttribute("formmethod") || l.getAttribute("method") || dh, o = t.encType || e.getAttribute("formenctype") || l.getAttribute("enctype") || fh, a = new FormData(l), e.name && a.append(e.name, e.value)
    } else {
        if (ph(e)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
        if (r = t.method || dh, i = t.action || null, o = t.encType || fh, e instanceof FormData) a = e;
        else if (a = new FormData, e instanceof URLSearchParams)
            for (let [t, n] of e) a.append(t, n);
        else if (null != e)
            for (let t of Object.keys(e)) a.append(t, e[t])
    }
    var l;
    return {
        action: i,
        method: r.toLowerCase(),
        encType: o,
        formData: a
    }
}
const mh = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset"],
    gh = ["reloadDocument", "replace", "method", "action", "onSubmit", "fetcherKey", "routeId", "relative", "preventScrollReset"];

function vh() {
    var e;
    let t = null == (e = window) ? void 0 : e.__staticRouterHydrationData;
    return t && t.errors && (t = uh({}, t, {
        errors: yh(t.errors)
    })), t
}

function yh(e) {
    if (!e) return null;
    let t = Object.entries(e),
        n = {};
    for (let [r, o] of t)
        if (o && "RouteErrorResponse" === o.__type) n[r] = new Qf(o.status, o.statusText, o.data, !0 === o.internal);
        else if (o && "Error" === o.__type) {
        let e = new Error(o.message);
        e.stack = "", n[r] = e
    } else n[r] = o;
    return n
}
const bh = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement,
    wh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    Ch = I.forwardRef((function(e, t) {
        let n, {
                onClick: r,
                relative: o,
                reloadDocument: a,
                replace: i,
                state: l,
                target: s,
                to: u,
                preventScrollReset: c
            } = e,
            d = ch(e, mh),
            {
                basename: f
            } = I.useContext(Dp),
            p = !1;
        if ("string" == typeof u && wh.test(u) && (n = u, bh)) try {
            let e = new URL(window.location.href),
                t = u.startsWith("//") ? new URL(e.protocol + u) : new URL(u),
                n = zf(t.pathname, f);
            t.origin === e.origin && null != n ? u = n + t.search + t.hash : p = !0
        } catch (g) {}
        let h = function(e, t) {
                let {
                    relative: n
                } = void 0 === t ? {} : t;
                Vp() || mf(!1);
                let {
                    basename: r,
                    navigator: o
                } = I.useContext(Dp), {
                    hash: a,
                    pathname: i,
                    search: l
                } = qp(e, {
                    relative: n
                }), s = i;
                return "/" !== r && (s = "/" === i ? r : Hf([r, i])), o.createHref({
                    pathname: s,
                    search: l,
                    hash: a
                })
            }(u, {
                relative: o
            }),
            m = function(e, t) {
                let {
                    target: n,
                    replace: r,
                    state: o,
                    preventScrollReset: a,
                    relative: i
                } = void 0 === t ? {} : t, l = $p(), s = Bp(), u = qp(e, {
                    relative: i
                });
                return I.useCallback((t => {
                    if (function(e, t) {
                            return !(0 !== e.button || t && "_self" !== t || function(e) {
                                return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
                            }(e))
                        }(t, n)) {
                        t.preventDefault();
                        let n = void 0 !== r ? r : bf(s) === bf(u);
                        l(e, {
                            replace: n,
                            state: o,
                            preventScrollReset: a,
                            relative: i
                        })
                    }
                }), [s, l, u, r, o, n, e, a, i])
            }(u, {
                replace: i,
                state: l,
                target: s,
                preventScrollReset: c,
                relative: o
            });
        return I.createElement("a", uh({}, d, {
            href: n || h,
            onClick: p || a ? r : function(e) {
                r && r(e), e.defaultPrevented || m(e)
            },
            ref: t,
            target: s
        }))
    })),
    xh = I.forwardRef(((e, t) => I.createElement(Sh, uh({}, e, {
        ref: t
    })))),
    Sh = I.forwardRef(((e, t) => {
        let {
            reloadDocument: n,
            replace: r,
            method: o = dh,
            action: a,
            onSubmit: i,
            fetcherKey: l,
            routeId: s,
            relative: u,
            preventScrollReset: c
        } = e, d = ch(e, gh), f = function(e, t) {
            let {
                router: n
            } = function(e) {
                let t = I.useContext(Fp);
                return t || mf(!1), t
            }(Eh.UseSubmitImpl), {
                basename: r
            } = I.useContext(Dp), o = rh(Yp.UseRouteId);
            return I.useCallback((function(a, i) {
                if (void 0 === i && (i = {}), "undefined" == typeof document) throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");
                let {
                    action: l,
                    method: s,
                    encType: u,
                    formData: c
                } = hh(a, i, r), d = {
                    preventScrollReset: i.preventScrollReset,
                    formData: c,
                    formMethod: s,
                    formEncType: u
                };
                e ? (null == t && mf(!1), n.fetch(e, t, l, d)) : n.navigate(l, uh({}, d, {
                    replace: i.replace,
                    fromRouteId: o
                }))
            }), [n, r, e, t, o])
        }(l, s), p = "get" === o.toLowerCase() ? "get" : "post", h = function(e, t) {
            let {
                relative: n
            } = void 0 === t ? {} : t, {
                basename: r
            } = I.useContext(Dp), o = I.useContext(zp);
            o || mf(!1);
            let [a] = o.matches.slice(-1), i = uh({}, qp(e || ".", {
                relative: n
            })), l = Bp();
            if (null == e && (i.search = l.search, i.hash = l.hash, a.route.index)) {
                let e = new URLSearchParams(i.search);
                e.delete("index"), i.search = e.toString() ? "?" + e.toString() : ""
            }
            e && "." !== e || !a.route.index || (i.search = i.search ? i.search.replace(/^\?/, "?index&") : "?index");
            "/" !== r && (i.pathname = "/" === i.pathname ? r : Hf([r, i.pathname]));
            return bf(i)
        }(a, {
            relative: u
        });
        return I.createElement("form", uh({
            ref: t,
            method: p,
            action: h,
            onSubmit: n ? i : e => {
                if (i && i(e), e.defaultPrevented) return;
                e.preventDefault();
                let t = e.nativeEvent.submitter,
                    n = (null == t ? void 0 : t.getAttribute("formmethod")) || o;
                f(t || e.currentTarget, {
                    method: n,
                    replace: r,
                    relative: u,
                    preventScrollReset: c
                })
            }
        }, d))
    }));
var Eh, _h;
! function(e) {
    e.UseScrollRestoration = "useScrollRestoration", e.UseSubmitImpl = "useSubmitImpl", e.UseFetcher = "useFetcher"
}(Eh || (Eh = {})),
function(e) {
    e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"
}(_h || (_h = {}));
var Rh, kh = {
    exports: {}
};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
Rh = kh,
    function() {
        var e = {}.hasOwnProperty;

        function t() {
            for (var n = [], r = 0; r < arguments.length; r++) {
                var o = arguments[r];
                if (o) {
                    var a = typeof o;
                    if ("string" === a || "number" === a) n.push(o);
                    else if (Array.isArray(o)) {
                        if (o.length) {
                            var i = t.apply(null, o);
                            i && n.push(i)
                        }
                    } else if ("object" === a) {
                        if (o.toString !== Object.prototype.toString && !o.toString.toString().includes("[native code]")) {
                            n.push(o.toString());
                            continue
                        }
                        for (var l in o) e.call(o, l) && o[l] && n.push(l)
                    }
                }
            }
            return n.join(" ")
        }
        Rh.exports ? (t.default = t, Rh.exports = t) : window.classNames = t
    }();
const Oh = e(kh.exports);

function Nh(e, t) {
    if (null == e) return {};
    var n, r, o = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
    return o
}

function jh(e) {
    return "default" + e.charAt(0).toUpperCase() + e.substr(1)
}

function Ph(e) {
    var t = function(e, t) {
        if ("object" != typeof e || null === e) return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === t ? String : Number)(e)
    }(e, "string");
    return "symbol" == typeof t ? t : String(t)
}

function Lh(e, t, n) {
    var r = I.useRef(void 0 !== e),
        o = I.useState(t),
        a = o[0],
        i = o[1],
        l = void 0 !== e,
        s = r.current;
    return r.current = l, !l && s && a !== t && i(t), [l ? e : a, I.useCallback((function(e) {
        for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) r[o - 1] = arguments[o];
        n && n.apply(void 0, [e].concat(r)), i(e)
    }), [n])]
}

function Th(e, t) {
    return Object.keys(t).reduce((function(n, r) {
        var o, a = n,
            i = a[jh(r)],
            l = a[r],
            s = Nh(a, [jh(r), r].map(Ph)),
            u = t[r],
            c = Lh(l, i, e[u]),
            d = c[0],
            f = c[1];
        return sd({}, s, ((o = {})[r] = d, o[u] = f, o))
    }), e)
}
const Mh = I.createContext({
    prefixes: {},
    breakpoints: ["xxl", "xl", "lg", "md", "sm", "xs"],
    minBreakpoint: "xs"
});

function Fh(e, t) {
    const {
        prefixes: n
    } = I.useContext(Mh);
    return e || n[t] || t
}

function Ah() {
    const {
        dir: e
    } = I.useContext(Mh);
    return "rtl" === e
}

function Dh(e) {
    return e && e.ownerDocument || document
}

function Ih(e, t) {
    return function(e) {
        var t = Dh(e);
        return t && t.defaultView || window
    }(e).getComputedStyle(e, t)
}
var zh = /([A-Z])/g;
var Uh = /^ms-/;

function Vh(e) {
    return function(e) {
        return e.replace(zh, "-$1").toLowerCase()
    }(e).replace(Uh, "-ms-")
}
var Bh = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;

function Hh(e, t) {
    var n = "",
        r = "";
    if ("string" == typeof t) return e.style.getPropertyValue(Vh(t)) || Ih(e).getPropertyValue(Vh(t));
    Object.keys(t).forEach((function(o) {
        var a = t[o];
        a || 0 === a ? ! function(e) {
            return !(!e || !Bh.test(e))
        }(o) ? n += Vh(o) + ": " + a + ";" : r += o + "(" + a + ") " : e.style.removeProperty(Vh(o))
    })), r && (n += "transform: " + r + ";"), e.style.cssText += ";" + n
}
var $h = {
    exports: {}
};

function qh() {}

function Kh() {}
Kh.resetWarningCache = qh;
$h.exports = function() {
    function e(e, t, n, r, o, a) {
        if ("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED" !== a) {
            var i = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw i.name = "Invariant Violation", i
        }
    }

    function t() {
        return e
    }
    e.isRequired = e;
    var n = {
        array: e,
        bigint: e,
        bool: e,
        func: e,
        number: e,
        object: e,
        string: e,
        symbol: e,
        any: e,
        arrayOf: t,
        element: e,
        elementType: e,
        instanceOf: t,
        node: e,
        objectOf: t,
        oneOf: t,
        oneOfType: t,
        shape: t,
        exact: t,
        checkPropTypes: Kh,
        resetWarningCache: qh
    };
    return n.PropTypes = n, n
}();
const Qh = e($h.exports),
    Wh = !1,
    Gh = z.createContext(null);
var Zh = "unmounted",
    Xh = "exited",
    Jh = "entering",
    Yh = "entered",
    em = "exiting",
    tm = function(e) {
        function t(t, n) {
            var r;
            r = e.call(this, t, n) || this;
            var o, a = n && !n.isMounting ? t.enter : t.appear;
            return r.appearStatus = null, t.in ? a ? (o = Xh, r.appearStatus = Jh) : o = Yh : o = t.unmountOnExit || t.mountOnEnter ? Zh : Xh, r.state = {
                status: o
            }, r.nextCallback = null, r
        }
        id(t, e), t.getDerivedStateFromProps = function(e, t) {
            return e.in && t.status === Zh ? {
                status: Xh
            } : null
        };
        var n = t.prototype;
        return n.componentDidMount = function() {
            this.updateStatus(!0, this.appearStatus)
        }, n.componentDidUpdate = function(e) {
            var t = null;
            if (e !== this.props) {
                var n = this.state.status;
                this.props.in ? n !== Jh && n !== Yh && (t = Jh) : n !== Jh && n !== Yh || (t = em)
            }
            this.updateStatus(!1, t)
        }, n.componentWillUnmount = function() {
            this.cancelNextCallback()
        }, n.getTimeouts = function() {
            var e, t, n, r = this.props.timeout;
            return e = t = n = r, null != r && "number" != typeof r && (e = r.exit, t = r.enter, n = void 0 !== r.appear ? r.appear : t), {
                exit: e,
                enter: t,
                appear: n
            }
        }, n.updateStatus = function(e, t) {
            if (void 0 === e && (e = !1), null !== t)
                if (this.cancelNextCallback(), t === Jh) {
                    if (this.props.unmountOnExit || this.props.mountOnEnter) {
                        var n = this.props.nodeRef ? this.props.nodeRef.current : rd.findDOMNode(this);
                        n && function(e) {
                            e.scrollTop
                        }(n)
                    }
                    this.performEnter(e)
                } else this.performExit();
            else this.props.unmountOnExit && this.state.status === Xh && this.setState({
                status: Zh
            })
        }, n.performEnter = function(e) {
            var t = this,
                n = this.props.enter,
                r = this.context ? this.context.isMounting : e,
                o = this.props.nodeRef ? [r] : [rd.findDOMNode(this), r],
                a = o[0],
                i = o[1],
                l = this.getTimeouts(),
                s = r ? l.appear : l.enter;
            !e && !n || Wh ? this.safeSetState({
                status: Yh
            }, (function() {
                t.props.onEntered(a)
            })) : (this.props.onEnter(a, i), this.safeSetState({
                status: Jh
            }, (function() {
                t.props.onEntering(a, i), t.onTransitionEnd(s, (function() {
                    t.safeSetState({
                        status: Yh
                    }, (function() {
                        t.props.onEntered(a, i)
                    }))
                }))
            })))
        }, n.performExit = function() {
            var e = this,
                t = this.props.exit,
                n = this.getTimeouts(),
                r = this.props.nodeRef ? void 0 : rd.findDOMNode(this);
            t && !Wh ? (this.props.onExit(r), this.safeSetState({
                status: em
            }, (function() {
                e.props.onExiting(r), e.onTransitionEnd(n.exit, (function() {
                    e.safeSetState({
                        status: Xh
                    }, (function() {
                        e.props.onExited(r)
                    }))
                }))
            }))) : this.safeSetState({
                status: Xh
            }, (function() {
                e.props.onExited(r)
            }))
        }, n.cancelNextCallback = function() {
            null !== this.nextCallback && (this.nextCallback.cancel(), this.nextCallback = null)
        }, n.safeSetState = function(e, t) {
            t = this.setNextCallback(t), this.setState(e, t)
        }, n.setNextCallback = function(e) {
            var t = this,
                n = !0;
            return this.nextCallback = function(r) {
                n && (n = !1, t.nextCallback = null, e(r))
            }, this.nextCallback.cancel = function() {
                n = !1
            }, this.nextCallback
        }, n.onTransitionEnd = function(e, t) {
            this.setNextCallback(t);
            var n = this.props.nodeRef ? this.props.nodeRef.current : rd.findDOMNode(this),
                r = null == e && !this.props.addEndListener;
            if (n && !r) {
                if (this.props.addEndListener) {
                    var o = this.props.nodeRef ? [this.nextCallback] : [n, this.nextCallback],
                        a = o[0],
                        i = o[1];
                    this.props.addEndListener(a, i)
                }
                null != e && setTimeout(this.nextCallback, e)
            } else setTimeout(this.nextCallback, 0)
        }, n.render = function() {
            var e = this.state.status;
            if (e === Zh) return null;
            var t = this.props,
                n = t.children;
            t.in, t.mountOnEnter, t.unmountOnExit, t.appear, t.enter, t.exit, t.timeout, t.addEndListener, t.onEnter, t.onEntering, t.onEntered, t.onExit, t.onExiting, t.onExited, t.nodeRef;
            var r = Nh(t, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
            return z.createElement(Gh.Provider, {
                value: null
            }, "function" == typeof n ? n(e, r) : z.cloneElement(z.Children.only(n), r))
        }, t
    }(z.Component);

function nm() {}
tm.contextType = Gh, tm.propTypes = {}, tm.defaultProps = {
    in: !1,
    mountOnEnter: !1,
    unmountOnExit: !1,
    appear: !1,
    enter: !0,
    exit: !0,
    onEnter: nm,
    onEntering: nm,
    onEntered: nm,
    onExit: nm,
    onExiting: nm,
    onExited: nm
}, tm.UNMOUNTED = Zh, tm.EXITED = Xh, tm.ENTERING = Jh, tm.ENTERED = Yh, tm.EXITING = em;
const rm = tm,
    om = !("undefined" == typeof window || !window.document || !window.document.createElement);
var am = !1,
    im = !1;
try {
    var lm = {
        get passive() {
            return am = !0
        },
        get once() {
            return im = am = !0
        }
    };
    om && (window.addEventListener("test", lm, lm), window.removeEventListener("test", lm, !0))
} catch (pE) {}

function sm(e, t, n, r) {
    if (r && "boolean" != typeof r && !im) {
        var o = r.once,
            a = r.capture,
            i = n;
        !im && o && (i = n.__once || function e(r) {
            this.removeEventListener(t, e, a), n.call(this, r)
        }, n.__once = i), e.addEventListener(t, i, am ? r : a)
    }
    e.addEventListener(t, n, r)
}

function um(e, t, n, r) {
    var o = r && "boolean" != typeof r ? r.capture : r;
    e.removeEventListener(t, n, o), n.__once && e.removeEventListener(t, n.__once, o)
}

function cm(e, t, n, r) {
    return sm(e, t, n, r),
        function() {
            um(e, t, n, r)
        }
}

function dm(e, t, n) {
    void 0 === n && (n = 5);
    var r = !1,
        o = setTimeout((function() {
            r || function(e, t, n, r) {
                if (void 0 === n && (n = !1), void 0 === r && (r = !0), e) {
                    var o = document.createEvent("HTMLEvents");
                    o.initEvent(t, n, r), e.dispatchEvent(o)
                }
            }(e, "transitionend", !0)
        }), t + n),
        a = cm(e, "transitionend", (function() {
            r = !0
        }), {
            once: !0
        });
    return function() {
        clearTimeout(o), a()
    }
}

function fm(e, t, n, r) {
    var o, a;
    null == n && (o = Hh(e, "transitionDuration") || "", a = -1 === o.indexOf("ms") ? 1e3 : 1, n = parseFloat(o) * a || 0);
    var i = dm(e, n, r),
        l = cm(e, "transitionend", t);
    return function() {
        i(), l()
    }
}

function pm(e, t) {
    const n = Hh(e, t) || "",
        r = -1 === n.indexOf("ms") ? 1e3 : 1;
    return parseFloat(n) * r
}

function hm(e, t) {
    const n = pm(e, "transitionDuration"),
        r = pm(e, "transitionDelay"),
        o = fm(e, (n => {
            n.target === e && (o(), t(n))
        }), n + r)
}

function mm(...e) {
    return e.filter((e => null != e)).reduce(((e, t) => {
        if ("function" != typeof t) throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");
        return null === e ? t : function(...n) {
            e.apply(this, n), t.apply(this, n)
        }
    }), null)
}

function gm(e) {
    e.offsetHeight
}
var vm = function(e) {
    return e && "function" != typeof e ? function(t) {
        e.current = t
    } : e
};

function ym(e, t) {
    return I.useMemo((function() {
        return function(e, t) {
            var n = vm(e),
                r = vm(t);
            return function(e) {
                n && n(e), r && r(e)
            }
        }(e, t)
    }), [e, t])
}
const bm = z.forwardRef((({
        onEnter: e,
        onEntering: t,
        onEntered: n,
        onExit: r,
        onExiting: o,
        onExited: a,
        addEndListener: i,
        children: l,
        childRef: s,
        ...u
    }, c) => {
        const d = I.useRef(null),
            f = ym(d, s),
            p = e => {
                var t;
                f((t = e) && "setState" in t ? rd.findDOMNode(t) : null != t ? t : null)
            },
            h = e => t => {
                e && d.current && e(d.current, t)
            },
            m = I.useCallback(h(e), [e]),
            g = I.useCallback(h(t), [t]),
            v = I.useCallback(h(n), [n]),
            y = I.useCallback(h(r), [r]),
            b = I.useCallback(h(o), [o]),
            w = I.useCallback(h(a), [a]),
            C = I.useCallback(h(i), [i]);
        return Q.jsx(rm, {
            ref: c,
            ...u,
            onEnter: m,
            onEntered: v,
            onEntering: g,
            onExit: y,
            onExited: w,
            onExiting: b,
            addEndListener: C,
            nodeRef: d,
            children: "function" == typeof l ? (e, t) => l(e, {
                ...t,
                ref: p
            }) : z.cloneElement(l, {
                ref: p
            })
        })
    })),
    wm = {
        height: ["marginTop", "marginBottom"],
        width: ["marginLeft", "marginRight"]
    };

function Cm(e, t) {
    const n = t[`offset${e[0].toUpperCase()}${e.slice(1)}`],
        r = wm[e];
    return n + parseInt(Hh(t, r[0]), 10) + parseInt(Hh(t, r[1]), 10)
}
const xm = {
        [Xh]: "collapse",
        [em]: "collapsing",
        [Jh]: "collapsing",
        [Yh]: "collapse show"
    },
    Sm = z.forwardRef((({
        onEnter: e,
        onEntering: t,
        onEntered: n,
        onExit: r,
        onExiting: o,
        className: a,
        children: i,
        dimension: l = "height",
        in: s = !1,
        timeout: u = 300,
        mountOnEnter: c = !1,
        unmountOnExit: d = !1,
        appear: f = !1,
        getDimensionValue: p = Cm,
        ...h
    }, m) => {
        const g = "function" == typeof l ? l() : l,
            v = I.useMemo((() => mm((e => {
                e.style[g] = "0"
            }), e)), [g, e]),
            y = I.useMemo((() => mm((e => {
                const t = `scroll${g[0].toUpperCase()}${g.slice(1)}`;
                e.style[g] = `${e[t]}px`
            }), t)), [g, t]),
            b = I.useMemo((() => mm((e => {
                e.style[g] = null
            }), n)), [g, n]),
            w = I.useMemo((() => mm((e => {
                e.style[g] = `${p(g,e)}px`, gm(e)
            }), r)), [r, p, g]),
            C = I.useMemo((() => mm((e => {
                e.style[g] = null
            }), o)), [g, o]);
        return Q.jsx(bm, {
            ref: m,
            addEndListener: hm,
            ...h,
            "aria-expanded": h.role ? s : null,
            onEnter: v,
            onEntering: y,
            onEntered: b,
            onExit: w,
            onExiting: C,
            childRef: i.ref,
            in: s,
            timeout: u,
            mountOnEnter: c,
            unmountOnExit: d,
            appear: f,
            children: (e, t) => z.cloneElement(i, {
                ...t,
                className: Oh(a, i.props.className, xm[e], "width" === g && "collapse-horizontal")
            })
        })
    }));

function Em(e, t) {
    return Array.isArray(e) ? e.includes(t) : e === t
}
const _m = I.createContext({});
_m.displayName = "AccordionContext";
const Rm = _m,
    km = I.forwardRef((({
        as: e = "div",
        bsPrefix: t,
        className: n,
        children: r,
        eventKey: o,
        ...a
    }, i) => {
        const {
            activeEventKey: l
        } = I.useContext(Rm);
        return t = Fh(t, "accordion-collapse"), Q.jsx(Sm, {
            ref: i,
            in: Em(l, o),
            ...a,
            className: Oh(n, t),
            children: Q.jsx(e, {
                children: I.Children.only(r)
            })
        })
    }));
km.displayName = "AccordionCollapse";
const Om = km,
    Nm = I.createContext({
        eventKey: ""
    });
Nm.displayName = "AccordionItemContext";
const jm = Nm,
    Pm = I.forwardRef((({
        as: e = "div",
        bsPrefix: t,
        className: n,
        onEnter: r,
        onEntering: o,
        onEntered: a,
        onExit: i,
        onExiting: l,
        onExited: s,
        ...u
    }, c) => {
        t = Fh(t, "accordion-body");
        const {
            eventKey: d
        } = I.useContext(jm);
        return Q.jsx(Om, {
            eventKey: d,
            onEnter: r,
            onEntering: o,
            onEntered: a,
            onExit: i,
            onExiting: l,
            onExited: s,
            children: Q.jsx(e, {
                ref: c,
                ...u,
                className: Oh(n, t)
            })
        })
    }));
Pm.displayName = "AccordionBody";
const Lm = Pm;
const Tm = I.forwardRef((({
    as: e = "button",
    bsPrefix: t,
    className: n,
    onClick: r,
    ...o
}, a) => {
    t = Fh(t, "accordion-button");
    const {
        eventKey: i
    } = I.useContext(jm), l = function(e, t) {
        const {
            activeEventKey: n,
            onSelect: r,
            alwaysOpen: o
        } = I.useContext(Rm);
        return a => {
            let i = e === n ? null : e;
            o && (i = Array.isArray(n) ? n.includes(e) ? n.filter((t => t !== e)) : [...n, e] : [e]), null == r || r(i, a), null == t || t(a)
        }
    }(i, r), {
        activeEventKey: s
    } = I.useContext(Rm);
    return "button" === e && (o.type = "button"), Q.jsx(e, {
        ref: a,
        onClick: l,
        ...o,
        "aria-expanded": Array.isArray(s) ? s.includes(i) : i === s,
        className: Oh(n, t, !Em(s, i) && "collapsed")
    })
}));
Tm.displayName = "AccordionButton";
const Mm = Tm,
    Fm = I.forwardRef((({
        as: e = "h2",
        bsPrefix: t,
        className: n,
        children: r,
        onClick: o,
        ...a
    }, i) => (t = Fh(t, "accordion-header"), Q.jsx(e, {
        ref: i,
        ...a,
        className: Oh(n, t),
        children: Q.jsx(Mm, {
            onClick: o,
            children: r
        })
    }))));
Fm.displayName = "AccordionHeader";
const Am = Fm,
    Dm = I.forwardRef((({
        as: e = "div",
        bsPrefix: t,
        className: n,
        eventKey: r,
        ...o
    }, a) => {
        t = Fh(t, "accordion-item");
        const i = I.useMemo((() => ({
            eventKey: r
        })), [r]);
        return Q.jsx(jm.Provider, {
            value: i,
            children: Q.jsx(e, {
                ref: a,
                ...o,
                className: Oh(n, t)
            })
        })
    }));
Dm.displayName = "AccordionItem";
const Im = Dm,
    zm = I.forwardRef(((e, t) => {
        const {
            as: n = "div",
            activeKey: r,
            bsPrefix: o,
            className: a,
            onSelect: i,
            flush: l,
            alwaysOpen: s,
            ...u
        } = Th(e, {
            activeKey: "onSelect"
        }), c = Fh(o, "accordion"), d = I.useMemo((() => ({
            activeEventKey: r,
            onSelect: i,
            alwaysOpen: s
        })), [r, i, s]);
        return Q.jsx(Rm.Provider, {
            value: d,
            children: Q.jsx(n, {
                ref: t,
                ...u,
                className: Oh(a, c, l && `${c}-flush`)
            })
        })
    }));
zm.displayName = "Accordion";
const Um = Object.assign(zm, {
    Button: Mm,
    Collapse: Om,
    Item: Im,
    Header: Am,
    Body: Lm
});

function Vm(e) {
    var t = I.useRef(e);
    return I.useEffect((function() {
        t.current = e
    }), [e]), t
}

function Bm(e) {
    var t = Vm(e);
    return I.useCallback((function() {
        return t.current && t.current.apply(t, arguments)
    }), [t])
}

function Hm() {
    var e = I.useRef(!0),
        t = I.useRef((function() {
            return e.current
        }));
    return I.useEffect((function() {
        return e.current = !0,
            function() {
                e.current = !1
            }
    }), []), t.current
}
var $m = "undefined" != typeof global && global.navigator && "ReactNative" === global.navigator.product;
const qm = "undefined" != typeof document || $m ? I.useLayoutEffect : I.useEffect,
    Km = ["as", "disabled"];

function Qm({
    tagName: e,
    disabled: t,
    href: n,
    target: r,
    rel: o,
    role: a,
    onClick: i,
    tabIndex: l = 0,
    type: s
}) {
    e || (e = null != n || null != r || null != o ? "a" : "button");
    const u = {
        tagName: e
    };
    if ("button" === e) return [{
        type: s || "button",
        disabled: t
    }, u];
    const c = r => {
        (t || "a" === e && function(e) {
            return !e || "#" === e.trim()
        }(n)) && r.preventDefault(), t ? r.stopPropagation() : null == i || i(r)
    };
    return "a" === e && (n || (n = "#"), t && (n = void 0)), [{
        role: null != a ? a : "button",
        disabled: void 0,
        tabIndex: t ? void 0 : l,
        href: n,
        target: "a" === e ? r : void 0,
        "aria-disabled": t || void 0,
        rel: "a" === e ? o : void 0,
        onClick: c,
        onKeyDown: e => {
            " " === e.key && (e.preventDefault(), c(e))
        }
    }, u]
}
const Wm = I.forwardRef(((e, t) => {
    let {
        as: n,
        disabled: r
    } = e, o = function(e, t) {
        if (null == e) return {};
        var n, r, o = {},
            a = Object.keys(e);
        for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o
    }(e, Km);
    const [a, {
        tagName: i
    }] = Qm(Object.assign({
        tagName: n,
        disabled: r
    }, o));
    return Q.jsx(i, Object.assign({}, o, a, {
        ref: t
    }))
}));
Wm.displayName = "Button";
const Gm = ["onKeyDown"];
const Zm = I.forwardRef(((e, t) => {
    let {
        onKeyDown: n
    } = e, r = function(e, t) {
        if (null == e) return {};
        var n, r, o = {},
            a = Object.keys(e);
        for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o
    }(e, Gm);
    const [o] = Qm(Object.assign({
        tagName: "a"
    }, r)), a = Bm((e => {
        o.onKeyDown(e), null == n || n(e)
    }));
    return (i = r.href) && "#" !== i.trim() && "button" !== r.role ? Q.jsx("a", Object.assign({
        ref: t
    }, r, {
        onKeyDown: n
    })) : Q.jsx("a", Object.assign({
        ref: t
    }, r, o, {
        onKeyDown: a
    }));
    var i
}));
Zm.displayName = "Anchor";
const Xm = Zm,
    Jm = {
        [Jh]: "show",
        [Yh]: "show"
    },
    Ym = I.forwardRef((({
        className: e,
        children: t,
        transitionClasses: n = {},
        onEnter: r,
        ...o
    }, a) => {
        const i = {
                in: !1,
                timeout: 300,
                mountOnEnter: !1,
                unmountOnExit: !1,
                appear: !1,
                ...o
            },
            l = I.useCallback(((e, t) => {
                gm(e), null == r || r(e, t)
            }), [r]);
        return Q.jsx(bm, {
            ref: a,
            addEndListener: hm,
            ...i,
            onEnter: l,
            childRef: t.ref,
            children: (r, o) => I.cloneElement(t, {
                ...o,
                className: Oh("fade", e, t.props.className, Jm[r], n[r])
            })
        })
    }));
Ym.displayName = "Fade";
const eg = Ym,
    tg = {
        "aria-label": Qh.string,
        onClick: Qh.func,
        variant: Qh.oneOf(["white"])
    },
    ng = I.forwardRef((({
        className: e,
        variant: t,
        "aria-label": n = "Close",
        ...r
    }, o) => Q.jsx("button", {
        ref: o,
        type: "button",
        className: Oh("btn-close", t && `btn-close-${t}`, e),
        "aria-label": n,
        ...r
    })));
ng.displayName = "CloseButton", ng.propTypes = tg;
const rg = ng,
    og = e => I.forwardRef(((t, n) => Q.jsx("div", {
        ...t,
        ref: n,
        className: Oh(t.className, e)
    })));
var ag = /-(.)/g;
const ig = e => {
    return e[0].toUpperCase() + (t = e, t.replace(ag, (function(e, t) {
        return t.toUpperCase()
    }))).slice(1);
    var t
};

function lg(e, {
    displayName: t = ig(e),
    Component: n,
    defaultProps: r
} = {}) {
    const o = I.forwardRef((({
        className: t,
        bsPrefix: o,
        as: a = n || "div",
        ...i
    }, l) => {
        const s = {
                ...r,
                ...i
            },
            u = Fh(o, e);
        return Q.jsx(a, {
            ref: l,
            className: Oh(t, u),
            ...s
        })
    }));
    return o.displayName = t, o
}
const sg = I.forwardRef((({
    as: e,
    bsPrefix: t,
    variant: n = "primary",
    size: r,
    active: o = !1,
    disabled: a = !1,
    className: i,
    ...l
}, s) => {
    const u = Fh(t, "btn"),
        [c, {
            tagName: d
        }] = Qm({
            tagName: e,
            disabled: a,
            ...l
        }),
        f = d;
    return Q.jsx(f, {
        ...c,
        ...l,
        ref: s,
        disabled: a,
        className: Oh(i, u, o && "active", n && `${u}-${n}`, r && `${u}-${r}`, l.href && a && "disabled")
    })
}));
sg.displayName = "Button";
const ug = sg,
    cg = I.createContext(null);
cg.displayName = "CardHeaderContext";
const dg = cg;

function fg(e) {
    var t, n, r = (t = e, (n = I.useRef(t)).current = t, n);
    I.useEffect((function() {
        return function() {
            return r.current()
        }
    }), [])
}
var pg = Math.pow(2, 31) - 1;

function hg(e, t, n) {
    var r = n - Date.now();
    e.current = r <= pg ? setTimeout(t, r) : setTimeout((function() {
        return hg(e, t, n)
    }), pg)
}

function mg() {
    var e = Hm(),
        t = I.useRef();
    return fg((function() {
        return clearTimeout(t.current)
    })), I.useMemo((function() {
        var n = function() {
            return clearTimeout(t.current)
        };
        return {
            set: function(r, o) {
                void 0 === o && (o = 0), e() && (n(), o <= pg ? t.current = setTimeout(r, o) : hg(t, r, Date.now() + o))
            },
            clear: n
        }
    }), [])
}
const gg = lg("carousel-caption"),
    vg = I.forwardRef((({
        as: e = "div",
        bsPrefix: t,
        className: n,
        ...r
    }, o) => {
        const a = Oh(n, Fh(t, "carousel-item"));
        return Q.jsx(e, {
            ref: o,
            ...r,
            className: a
        })
    }));
vg.displayName = "CarouselItem";
const yg = vg;

function bg(e, t) {
    let n = 0;
    return I.Children.map(e, (e => I.isValidElement(e) ? t(e, n++) : e))
}

function wg(e, t) {
    let n = 0;
    I.Children.forEach(e, (e => {
        I.isValidElement(e) && t(e, n++)
    }))
}
const Cg = I.forwardRef((({
    defaultActiveIndex: e = 0,
    ...t
}, n) => {
    const {
        as: r = "div",
        bsPrefix: o,
        slide: a = !0,
        fade: i = !1,
        controls: l = !0,
        indicators: s = !0,
        indicatorLabels: u = [],
        activeIndex: c,
        onSelect: d,
        onSlide: f,
        onSlid: p,
        interval: h = 5e3,
        keyboard: m = !0,
        onKeyDown: g,
        pause: v = "hover",
        onMouseOver: y,
        onMouseOut: b,
        wrap: w = !0,
        touch: C = !0,
        onTouchStart: x,
        onTouchMove: S,
        onTouchEnd: E,
        prevIcon: _ = Q.jsx("span", {
            "aria-hidden": "true",
            className: "carousel-control-prev-icon"
        }),
        prevLabel: R = "Previous",
        nextIcon: k = Q.jsx("span", {
            "aria-hidden": "true",
            className: "carousel-control-next-icon"
        }),
        nextLabel: O = "Next",
        variant: N,
        className: j,
        children: P,
        ...L
    } = Th({
        defaultActiveIndex: e,
        ...t
    }, {
        activeIndex: "onSelect"
    }), T = Fh(o, "carousel"), M = Ah(), F = I.useRef(null), [A, D] = I.useState("next"), [z, U] = I.useState(!1), [V, B] = I.useState(!1), [H, $] = I.useState(c || 0);
    I.useEffect((() => {
        V || c === H || (F.current ? D(F.current) : D((c || 0) > H ? "next" : "prev"), a && B(!0), $(c || 0))
    }), [c, V, H, a]), I.useEffect((() => {
        F.current && (F.current = null)
    }));
    let q, K = 0;
    wg(P, ((e, t) => {
        ++K, t === c && (q = e.props.interval)
    }));
    const W = Vm(q),
        G = I.useCallback((e => {
            if (V) return;
            let t = H - 1;
            if (t < 0) {
                if (!w) return;
                t = K - 1
            }
            F.current = "prev", null == d || d(t, e)
        }), [V, H, d, w, K]),
        Z = Bm((e => {
            if (V) return;
            let t = H + 1;
            if (t >= K) {
                if (!w) return;
                t = 0
            }
            F.current = "next", null == d || d(t, e)
        })),
        X = I.useRef();
    I.useImperativeHandle(n, (() => ({
        element: X.current,
        prev: G,
        next: Z
    })));
    const J = Bm((() => {
            !document.hidden && function(e) {
                if (!(e && e.style && e.parentNode && e.parentNode.style)) return !1;
                const t = getComputedStyle(e);
                return "none" !== t.display && "hidden" !== t.visibility && "none" !== getComputedStyle(e.parentNode).display
            }(X.current) && (M ? G() : Z())
        })),
        Y = "next" === A ? "start" : "end";
    var ee, te, ne;
    ee = () => {
        a || (null == f || f(H, Y), null == p || p(H, Y))
    }, te = [H], ne = I.useRef(!0), I.useEffect((function() {
        if (!ne.current) return ee();
        ne.current = !1
    }), te);
    const re = `${T}-item-${A}`,
        oe = `${T}-item-${Y}`,
        ae = I.useCallback((e => {
            gm(e), null == f || f(H, Y)
        }), [f, H, Y]),
        ie = I.useCallback((() => {
            B(!1), null == p || p(H, Y)
        }), [p, H, Y]),
        le = I.useCallback((e => {
            if (m && !/input|textarea/i.test(e.target.tagName)) switch (e.key) {
                case "ArrowLeft":
                    return e.preventDefault(), void(M ? Z(e) : G(e));
                case "ArrowRight":
                    return e.preventDefault(), void(M ? G(e) : Z(e))
            }
            null == g || g(e)
        }), [m, g, G, Z, M]),
        se = I.useCallback((e => {
            "hover" === v && U(!0), null == y || y(e)
        }), [v, y]),
        ue = I.useCallback((e => {
            U(!1), null == b || b(e)
        }), [b]),
        ce = I.useRef(0),
        de = I.useRef(0),
        fe = mg(),
        pe = I.useCallback((e => {
            ce.current = e.touches[0].clientX, de.current = 0, "hover" === v && U(!0), null == x || x(e)
        }), [v, x]),
        he = I.useCallback((e => {
            e.touches && e.touches.length > 1 ? de.current = 0 : de.current = e.touches[0].clientX - ce.current, null == S || S(e)
        }), [S]),
        me = I.useCallback((e => {
            if (C) {
                const t = de.current;
                Math.abs(t) > 40 && (t > 0 ? G(e) : Z(e))
            }
            "hover" === v && fe.set((() => {
                U(!1)
            }), h || void 0), null == E || E(e)
        }), [C, v, G, Z, fe, h, E]),
        ge = null != h && !z && !V,
        ve = I.useRef();
    I.useEffect((() => {
        var e, t;
        if (!ge) return;
        const n = M ? G : Z;
        return ve.current = window.setInterval(document.visibilityState ? J : n, null != (e = null != (t = W.current) ? t : h) ? e : void 0), () => {
            null !== ve.current && clearInterval(ve.current)
        }
    }), [ge, G, Z, W, h, J, M]);
    const ye = I.useMemo((() => s && Array.from({
        length: K
    }, ((e, t) => e => {
        null == d || d(t, e)
    }))), [s, K, d]);
    return Q.jsxs(r, {
        ref: X,
        ...L,
        onKeyDown: le,
        onMouseOver: se,
        onMouseOut: ue,
        onTouchStart: pe,
        onTouchMove: he,
        onTouchEnd: me,
        className: Oh(j, T, a && "slide", i && `${T}-fade`, N && `${T}-${N}`),
        children: [s && Q.jsx("div", {
            className: `${T}-indicators`,
            children: bg(P, ((e, t) => Q.jsx("button", {
                type: "button",
                "data-bs-target": "",
                "aria-label": null != u && u.length ? u[t] : `Slide ${t+1}`,
                className: t === H ? "active" : void 0,
                onClick: ye ? ye[t] : void 0,
                "aria-current": t === H
            }, t)))
        }), Q.jsx("div", {
            className: `${T}-inner`,
            children: bg(P, ((e, t) => {
                const n = t === H;
                return a ? Q.jsx(bm, {
                    in: n,
                    onEnter: n ? ae : void 0,
                    onEntered: n ? ie : void 0,
                    addEndListener: hm,
                    children: (t, r) => I.cloneElement(e, {
                        ...r,
                        className: Oh(e.props.className, n && "entered" !== t && re, ("entered" === t || "exiting" === t) && "active", ("entering" === t || "exiting" === t) && oe)
                    })
                }) : I.cloneElement(e, {
                    className: Oh(e.props.className, n && "active")
                })
            }))
        }), l && Q.jsxs(Q.Fragment, {
            children: [(w || 0 !== c) && Q.jsxs(Xm, {
                className: `${T}-control-prev`,
                onClick: G,
                children: [_, R && Q.jsx("span", {
                    className: "visually-hidden",
                    children: R
                })]
            }), (w || c !== K - 1) && Q.jsxs(Xm, {
                className: `${T}-control-next`,
                onClick: Z,
                children: [k, O && Q.jsx("span", {
                    className: "visually-hidden",
                    children: O
                })]
            })]
        })]
    })
}));
Cg.displayName = "Carousel";
const xg = Object.assign(Cg, {
    Caption: gg,
    Item: yg
});

function Sg({
    as: e,
    bsPrefix: t,
    className: n,
    ...r
}) {
    t = Fh(t, "col");
    const o = function() {
            const {
                breakpoints: e
            } = I.useContext(Mh);
            return e
        }(),
        a = function() {
            const {
                minBreakpoint: e
            } = I.useContext(Mh);
            return e
        }(),
        i = [],
        l = [];
    return o.forEach((e => {
        const n = r[e];
        let o, s, u;
        delete r[e], "object" == typeof n && null != n ? ({
            span: o,
            offset: s,
            order: u
        } = n) : o = n;
        const c = e !== a ? `-${e}` : "";
        o && i.push(!0 === o ? `${t}${c}` : `${t}${c}-${o}`), null != u && l.push(`order${c}-${u}`), null != s && l.push(`offset${c}-${s}`)
    })), [{
        ...r,
        className: Oh(n, ...i, ...l)
    }, {
        as: e,
        bsPrefix: t,
        spans: i
    }]
}
I.forwardRef(((e, t) => {
    const [{
        className: n,
        ...r
    }, {
        as: o = "div",
        bsPrefix: a,
        spans: i
    }] = Sg(e);
    return Q.jsx(o, {
        ...r,
        ref: t,
        className: Oh(n, !i.length && a)
    })
})).displayName = "Col";
var Eg = Function.prototype.bind.call(Function.prototype.call, [].slice);

function _g(e, t) {
    return Eg(e.querySelectorAll(t))
}

function Rg(e, t) {
    return e.contains ? e.contains(t) : e.compareDocumentPosition ? e === t || !!(16 & e.compareDocumentPosition(t)) : void 0
}
const kg = {
        prefix: String(Math.round(1e10 * Math.random())),
        current: 0,
        isSSR: !1
    },
    Og = z.createContext(kg);
let Ng = Boolean("undefined" != typeof window && window.document && window.document.createElement),
    jg = new WeakMap;

function Pg(e) {
    let t = I.useContext(Og);
    t !== kg || Ng || console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
    let n = function(e = !1) {
        let t = I.useContext(Og),
            n = I.useRef(null);
        if (null === n.current && !e) {
            var r, o;
            let e = null === (r = z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) || void 0 === r || null === (o = r.ReactCurrentOwner) || void 0 === o ? void 0 : o.current;
            if (e) {
                let n = jg.get(e);
                null == n ? jg.set(e, {
                    id: t.current,
                    state: e.memoizedState
                }) : e.memoizedState !== n.state && (t.current = n.id, jg.delete(e))
            }
            n.current = ++t.current
        }
        return n.current
    }(!!e);
    return e || `react-aria${t.prefix}-${n}`
}
const Lg = (e, t = null) => null != e ? String(e) : t || null,
    Tg = I.createContext(null),
    Mg = I.createContext(null);
Mg.displayName = "NavContext";
const Fg = Mg,
    Ag = "data-rr-ui-";

function Dg(e) {
    return `${Ag}${e}`
}
const Ig = I.createContext(om ? window : void 0);

function zg() {
    return I.useContext(Ig)
}
Ig.Provider;
const Ug = I.createContext(null);
Ug.displayName = "NavbarContext";
const Vg = Ug,
    Bg = I.forwardRef((({
        bsPrefix: e,
        fluid: t = !1,
        as: n = "div",
        className: r,
        ...o
    }, a) => {
        const i = Fh(e, "container"),
            l = "string" == typeof t ? `-${t}` : "-fluid";
        return Q.jsx(n, {
            ref: a,
            ...o,
            className: Oh(r, t ? `${i}${l}` : i)
        })
    }));
Bg.displayName = "Container";
const Hg = Bg,
    $g = I.createContext(null),
    qg = ["as", "active", "eventKey"];

function Kg({
    key: e,
    onClick: t,
    active: n,
    id: r,
    role: o,
    disabled: a
}) {
    const i = I.useContext(Tg),
        l = I.useContext(Fg),
        s = I.useContext($g);
    let u = n;
    const c = {
        role: o
    };
    if (l) {
        o || "tablist" !== l.role || (c.role = "tab");
        const t = l.getControllerId(null != e ? e : null),
            a = l.getControlledId(null != e ? e : null);
        c[Dg("event-key")] = e, c.id = t || r, u = null == n && null != e ? l.activeKey === e : n, !u && (null != s && s.unmountOnExit || null != s && s.mountOnEnter) || (c["aria-controls"] = a)
    }
    return "tab" === c.role && (c["aria-selected"] = u, u || (c.tabIndex = -1), a && (c.tabIndex = -1, c["aria-disabled"] = !0)), c.onClick = Bm((n => {
        a || (null == t || t(n), null != e && i && !n.isPropagationStopped() && i(e, n))
    })), [c, {
        isActive: u
    }]
}
const Qg = I.forwardRef(((e, t) => {
    let {
        as: n = Wm,
        active: r,
        eventKey: o
    } = e, a = function(e, t) {
        if (null == e) return {};
        var n, r, o = {},
            a = Object.keys(e);
        for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o
    }(e, qg);
    const [i, l] = Kg(Object.assign({
        key: Lg(o, a.href),
        active: r
    }, a));
    return i[Dg("active")] = l.isActive, Q.jsx(n, Object.assign({}, a, i, {
        ref: t
    }))
}));
Qg.displayName = "NavItem";
const Wg = Qg,
    Gg = ["as", "onSelect", "activeKey", "role", "onKeyDown"];
const Zg = () => {},
    Xg = Dg("event-key"),
    Jg = I.forwardRef(((e, t) => {
        let {
            as: n = "div",
            onSelect: r,
            activeKey: o,
            role: a,
            onKeyDown: i
        } = e, l = function(e, t) {
            if (null == e) return {};
            var n, r, o = {},
                a = Object.keys(e);
            for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o
        }(e, Gg);
        const s = I.useReducer((function(e) {
                return !e
            }), !1)[1],
            u = I.useRef(!1),
            c = I.useContext(Tg),
            d = I.useContext($g);
        let f, p;
        d && (a = a || "tablist", o = d.activeKey, f = d.getControlledId, p = d.getControllerId);
        const h = I.useRef(null),
            m = e => {
                const t = h.current;
                if (!t) return null;
                const n = _g(t, `[${Xg}]:not([aria-disabled=true])`),
                    r = t.querySelector("[aria-selected=true]");
                if (!r || r !== document.activeElement) return null;
                const o = n.indexOf(r);
                if (-1 === o) return null;
                let a = o + e;
                return a >= n.length && (a = 0), a < 0 && (a = n.length - 1), n[a]
            },
            g = (e, t) => {
                null != e && (null == r || r(e, t), null == c || c(e, t))
            };
        I.useEffect((() => {
            if (h.current && u.current) {
                const e = h.current.querySelector(`[${Xg}][aria-selected=true]`);
                null == e || e.focus()
            }
            u.current = !1
        }));
        const v = ym(t, h);
        return Q.jsx(Tg.Provider, {
            value: g,
            children: Q.jsx(Fg.Provider, {
                value: {
                    role: a,
                    activeKey: Lg(o),
                    getControlledId: f || Zg,
                    getControllerId: p || Zg
                },
                children: Q.jsx(n, Object.assign({}, l, {
                    onKeyDown: e => {
                        if (null == i || i(e), !d) return;
                        let t;
                        switch (e.key) {
                            case "ArrowLeft":
                            case "ArrowUp":
                                t = m(-1);
                                break;
                            case "ArrowRight":
                            case "ArrowDown":
                                t = m(1);
                                break;
                            default:
                                return
                        }
                        var n;
                        t && (e.preventDefault(), g(t.dataset[(n = "EventKey", `rrUi${n}`)] || null, e), u.current = !0, s())
                    },
                    ref: v,
                    role: a
                }))
            })
        })
    }));
Jg.displayName = "Nav";
const Yg = Object.assign(Jg, {
        Item: Wg
    }),
    ev = I.forwardRef((({
        bsPrefix: e,
        active: t,
        disabled: n,
        eventKey: r,
        className: o,
        variant: a,
        action: i,
        as: l,
        ...s
    }, u) => {
        e = Fh(e, "list-group-item");
        const [c, d] = Kg({
            key: Lg(r, s.href),
            active: t,
            ...s
        }), f = Bm((e => {
            if (n) return e.preventDefault(), void e.stopPropagation();
            c.onClick(e)
        }));
        n && void 0 === s.tabIndex && (s.tabIndex = -1, s["aria-disabled"] = !0);
        const p = l || (i ? s.href ? "a" : "button" : "div");
        return Q.jsx(p, {
            ref: u,
            ...s,
            ...c,
            onClick: f,
            className: Oh(o, e, d.isActive && "active", n && "disabled", a && `${e}-${a}`, i && `${e}-action`)
        })
    }));
ev.displayName = "ListGroupItem";
const tv = ev,
    nv = I.forwardRef(((e, t) => {
        const {
            className: n,
            bsPrefix: r,
            variant: o,
            horizontal: a,
            numbered: i,
            as: l = "div",
            ...s
        } = Th(e, {
            activeKey: "onSelect"
        }), u = Fh(r, "list-group");
        let c;
        return a && (c = !0 === a ? "horizontal" : `horizontal-${a}`), Q.jsx(Yg, {
            ref: t,
            ...s,
            as: l,
            className: Oh(n, u, o && `${u}-${o}`, c && `${u}-${c}`, i && `${u}-numbered`)
        })
    }));
nv.displayName = "ListGroup";
const rv = Object.assign(nv, {
    Item: tv
});
var ov;

function av(e) {
    if ((!ov && 0 !== ov || e) && om) {
        var t = document.createElement("div");
        t.style.position = "absolute", t.style.top = "-9999px", t.style.width = "50px", t.style.height = "50px", t.style.overflow = "scroll", document.body.appendChild(t), ov = t.offsetWidth - t.clientWidth, document.body.removeChild(t)
    }
    return ov
}

function iv(e) {
    void 0 === e && (e = Dh());
    try {
        var t = e.activeElement;
        return t && t.nodeName ? t : null
    } catch (pE) {
        return e.body
    }
}
const lv = Dg("modal-open");
const sv = class {
        constructor({
            ownerDocument: e,
            handleContainerOverflow: t = !0,
            isRTL: n = !1
        } = {}) {
            this.handleContainerOverflow = t, this.isRTL = n, this.modals = [], this.ownerDocument = e
        }
        getScrollbarWidth() {
            return function(e = document) {
                const t = e.defaultView;
                return Math.abs(t.innerWidth - e.documentElement.clientWidth)
            }(this.ownerDocument)
        }
        getElement() {
            return (this.ownerDocument || document).body
        }
        setModalAttributes(e) {}
        removeModalAttributes(e) {}
        setContainerStyle(e) {
            const t = {
                    overflow: "hidden"
                },
                n = this.isRTL ? "paddingLeft" : "paddingRight",
                r = this.getElement();
            e.style = {
                overflow: r.style.overflow,
                [n]: r.style[n]
            }, e.scrollBarWidth && (t[n] = `${parseInt(Hh(r,n)||"0",10)+e.scrollBarWidth}px`), r.setAttribute(lv, ""), Hh(r, t)
        }
        reset() {
            [...this.modals].forEach((e => this.remove(e)))
        }
        removeContainerStyle(e) {
            const t = this.getElement();
            t.removeAttribute(lv), Object.assign(t.style, e.style)
        }
        add(e) {
            let t = this.modals.indexOf(e);
            return -1 !== t ? t : (t = this.modals.length, this.modals.push(e), this.setModalAttributes(e), 0 !== t || (this.state = {
                scrollBarWidth: this.getScrollbarWidth(),
                style: {}
            }, this.handleContainerOverflow && this.setContainerStyle(this.state)), t)
        }
        remove(e) {
            const t = this.modals.indexOf(e); - 1 !== t && (this.modals.splice(t, 1), !this.modals.length && this.handleContainerOverflow && this.removeContainerStyle(this.state), this.removeModalAttributes(e))
        }
        isTopModal(e) {
            return !!this.modals.length && this.modals[this.modals.length - 1] === e
        }
    },
    uv = (e, t) => om ? null == e ? (t || Dh()).body : ("function" == typeof e && (e = e()), e && "current" in e && (e = e.current), e && ("nodeType" in e || e.getBoundingClientRect) ? e : null) : null;

function cv({
    children: e,
    in: t,
    onExited: n,
    mountOnEnter: r,
    unmountOnExit: o
}) {
    const a = I.useRef(null),
        i = I.useRef(t),
        l = Bm(n);
    I.useEffect((() => {
        t ? i.current = !0 : l(a.current)
    }), [t, l]);
    const s = ym(a, e.ref),
        u = I.cloneElement(e, {
            ref: s
        });
    return t ? u : o || !i.current && r ? null : u
}

function dv({
    children: e,
    in: t,
    onExited: n,
    onEntered: r,
    transition: o
}) {
    const [a, i] = I.useState(!t);
    t && a && i(!1);
    const l = function({
            in: e,
            onTransition: t
        }) {
            const n = I.useRef(null),
                r = I.useRef(!0),
                o = Bm(t);
            return qm((() => {
                if (!n.current) return;
                let t = !1;
                return o({
                    in: e,
                    element: n.current,
                    initial: r.current,
                    isStale: () => t
                }), () => {
                    t = !0
                }
            }), [e, o]), qm((() => (r.current = !1, () => {
                r.current = !0
            })), []), n
        }({
            in: !!t,
            onTransition: e => {
                Promise.resolve(o(e)).then((() => {
                    e.isStale() || (e.in ? null == r || r(e.element, e.initial) : (i(!0), null == n || n(e.element)))
                }), (t => {
                    throw e.in || i(!0), t
                }))
            }
        }),
        s = ym(l, e.ref);
    return a && !t ? null : I.cloneElement(e, {
        ref: s
    })
}

function fv(e, t, n) {
    return e ? Q.jsx(e, Object.assign({}, n)) : t ? Q.jsx(dv, Object.assign({}, n, {
        transition: t
    })) : Q.jsx(cv, Object.assign({}, n))
}
const pv = ["show", "role", "className", "style", "children", "backdrop", "keyboard", "onBackdropClick", "onEscapeKeyDown", "transition", "runTransition", "backdropTransition", "runBackdropTransition", "autoFocus", "enforceFocus", "restoreFocus", "restoreFocusOptions", "renderDialog", "renderBackdrop", "manager", "container", "onShow", "onHide", "onExit", "onExited", "onExiting", "onEnter", "onEntering", "onEntered"];
let hv;

function mv(e) {
    const t = zg(),
        n = e || function(e) {
            return hv || (hv = new sv({
                ownerDocument: null == e ? void 0 : e.document
            })), hv
        }(t),
        r = I.useRef({
            dialog: null,
            backdrop: null
        });
    return Object.assign(r.current, {
        add: () => n.add(r.current),
        remove: () => n.remove(r.current),
        isTopModal: () => n.isTopModal(r.current),
        setDialogRef: I.useCallback((e => {
            r.current.dialog = e
        }), []),
        setBackdropRef: I.useCallback((e => {
            r.current.backdrop = e
        }), [])
    })
}
const gv = I.forwardRef(((e, t) => {
    let {
        show: n = !1,
        role: r = "dialog",
        className: o,
        style: a,
        children: i,
        backdrop: l = !0,
        keyboard: s = !0,
        onBackdropClick: u,
        onEscapeKeyDown: c,
        transition: d,
        runTransition: f,
        backdropTransition: p,
        runBackdropTransition: h,
        autoFocus: m = !0,
        enforceFocus: g = !0,
        restoreFocus: v = !0,
        restoreFocusOptions: y,
        renderDialog: b,
        renderBackdrop: w = (e => Q.jsx("div", Object.assign({}, e))),
        manager: C,
        container: x,
        onShow: S,
        onHide: E = (() => {}),
        onExit: _,
        onExited: R,
        onExiting: k,
        onEnter: O,
        onEntering: N,
        onEntered: j
    } = e, P = function(e, t) {
        if (null == e) return {};
        var n, r, o = {},
            a = Object.keys(e);
        for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o
    }(e, pv);
    const L = function(e, t) {
            const n = zg(),
                [r, o] = I.useState((() => uv(e, null == n ? void 0 : n.document)));
            if (!r) {
                const t = uv(e);
                t && o(t)
            }
            return I.useEffect((() => {
                t && r && t(r)
            }), [t, r]), I.useEffect((() => {
                const t = uv(e);
                t !== r && o(t)
            }), [e, r]), r
        }(x),
        T = mv(C),
        M = Hm(),
        F = function(e) {
            var t = I.useRef(null);
            return I.useEffect((function() {
                t.current = e
            })), t.current
        }(n),
        [A, D] = I.useState(!n),
        z = I.useRef(null);
    I.useImperativeHandle(t, (() => T), [T]), om && !F && n && (z.current = iv()), n && A && D(!1);
    const U = Bm((() => {
            if (T.add(), K.current = cm(document, "keydown", $), q.current = cm(document, "focus", (() => setTimeout(B)), !0), S && S(), m) {
                const e = iv(document);
                T.dialog && e && !Rg(T.dialog, e) && (z.current = e, T.dialog.focus())
            }
        })),
        V = Bm((() => {
            var e;
            (T.remove(), null == K.current || K.current(), null == q.current || q.current(), v) && (null == (e = z.current) || null == e.focus || e.focus(y), z.current = null)
        }));
    I.useEffect((() => {
        n && L && U()
    }), [n, L, U]), I.useEffect((() => {
        A && V()
    }), [A, V]), fg((() => {
        V()
    }));
    const B = Bm((() => {
            if (!g || !M() || !T.isTopModal()) return;
            const e = iv();
            T.dialog && e && !Rg(T.dialog, e) && T.dialog.focus()
        })),
        H = Bm((e => {
            e.target === e.currentTarget && (null == u || u(e), !0 === l && E())
        })),
        $ = Bm((e => {
            s && function(e) {
                return "Escape" === e.code || 27 === e.keyCode
            }(e) && T.isTopModal() && (null == c || c(e), e.defaultPrevented || E())
        })),
        q = I.useRef(),
        K = I.useRef();
    if (!L) return null;
    const W = Object.assign({
        role: r,
        ref: T.setDialogRef,
        "aria-modal": "dialog" === r || void 0
    }, P, {
        style: a,
        className: o,
        tabIndex: -1
    });
    let G = b ? b(W) : Q.jsx("div", Object.assign({}, W, {
        children: I.cloneElement(i, {
            role: "document"
        })
    }));
    G = fv(d, f, {
        unmountOnExit: !0,
        mountOnEnter: !0,
        appear: !0,
        in: !!n,
        onExit: _,
        onExiting: k,
        onExited: (...e) => {
            D(!0), null == R || R(...e)
        },
        onEnter: O,
        onEntering: N,
        onEntered: j,
        children: G
    });
    let Z = null;
    return l && (Z = w({
        ref: T.setBackdropRef,
        onClick: H
    }), Z = fv(p, h, {
        in: !!n,
        appear: !0,
        mountOnEnter: !0,
        unmountOnExit: !0,
        children: Z
    })), Q.jsx(Q.Fragment, {
        children: rd.createPortal(Q.jsxs(Q.Fragment, {
            children: [Z, G]
        }), L)
    })
}));
gv.displayName = "Modal";
const vv = Object.assign(gv, {
    Manager: sv
});

function yv(e, t) {
    return e.replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "")
}
const bv = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
    wv = ".sticky-top",
    Cv = ".navbar-toggler";
class xv extends sv {
    adjustAndStore(e, t, n) {
        const r = t.style[e];
        t.dataset[e] = r, Hh(t, {
            [e]: `${parseFloat(Hh(t,e))+n}px`
        })
    }
    restore(e, t) {
        const n = t.dataset[e];
        void 0 !== n && (delete t.dataset[e], Hh(t, {
            [e]: n
        }))
    }
    setContainerStyle(e) {
        super.setContainerStyle(e);
        const t = this.getElement();
        var n, r;
        if (r = "modal-open", (n = t).classList ? n.classList.add(r) : function(e, t) {
                return e.classList ? !!t && e.classList.contains(t) : -1 !== (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ")
            }(n, r) || ("string" == typeof n.className ? n.className = n.className + " " + r : n.setAttribute("class", (n.className && n.className.baseVal || "") + " " + r)), !e.scrollBarWidth) return;
        const o = this.isRTL ? "paddingLeft" : "paddingRight",
            a = this.isRTL ? "marginLeft" : "marginRight";
        _g(t, bv).forEach((t => this.adjustAndStore(o, t, e.scrollBarWidth))), _g(t, wv).forEach((t => this.adjustAndStore(a, t, -e.scrollBarWidth))), _g(t, Cv).forEach((t => this.adjustAndStore(a, t, e.scrollBarWidth)))
    }
    removeContainerStyle(e) {
        super.removeContainerStyle(e);
        const t = this.getElement();
        var n, r;
        r = "modal-open", (n = t).classList ? n.classList.remove(r) : "string" == typeof n.className ? n.className = yv(n.className, r) : n.setAttribute("class", yv(n.className && n.className.baseVal || "", r));
        const o = this.isRTL ? "paddingLeft" : "paddingRight",
            a = this.isRTL ? "marginLeft" : "marginRight";
        _g(t, bv).forEach((e => this.restore(o, e))), _g(t, wv).forEach((e => this.restore(a, e))), _g(t, Cv).forEach((e => this.restore(a, e)))
    }
}
let Sv;

function Ev(e) {
    return Sv || (Sv = new xv(e)), Sv
}
const _v = xv,
    Rv = lg("modal-body"),
    kv = I.createContext({
        onHide() {}
    }),
    Ov = I.forwardRef((({
        bsPrefix: e,
        className: t,
        contentClassName: n,
        centered: r,
        size: o,
        fullscreen: a,
        children: i,
        scrollable: l,
        ...s
    }, u) => {
        const c = `${e=Fh(e,"modal")}-dialog`,
            d = "string" == typeof a ? `${e}-fullscreen-${a}` : `${e}-fullscreen`;
        return Q.jsx("div", {
            ...s,
            ref: u,
            className: Oh(c, t, o && `${e}-${o}`, r && `${c}-centered`, l && `${c}-scrollable`, a && d),
            children: Q.jsx("div", {
                className: Oh(`${e}-content`, n),
                children: i
            })
        })
    }));
Ov.displayName = "ModalDialog";
const Nv = Ov,
    jv = lg("modal-footer"),
    Pv = I.forwardRef((({
        closeLabel: e = "Close",
        closeVariant: t,
        closeButton: n = !1,
        onHide: r,
        children: o,
        ...a
    }, i) => {
        const l = I.useContext(kv),
            s = Bm((() => {
                null == l || l.onHide(), null == r || r()
            }));
        return Q.jsxs("div", {
            ref: i,
            ...a,
            children: [o, n && Q.jsx(rg, {
                "aria-label": e,
                variant: t,
                onClick: s
            })]
        })
    })),
    Lv = I.forwardRef((({
        bsPrefix: e,
        className: t,
        closeLabel: n = "Close",
        closeButton: r = !1,
        ...o
    }, a) => (e = Fh(e, "modal-header"), Q.jsx(Pv, {
        ref: a,
        ...o,
        className: Oh(t, e),
        closeLabel: n,
        closeButton: r
    }))));
Lv.displayName = "ModalHeader";
const Tv = Lv,
    Mv = lg("modal-title", {
        Component: og("h4")
    });

function Fv(e) {
    return Q.jsx(eg, {
        ...e,
        timeout: null
    })
}

function Av(e) {
    return Q.jsx(eg, {
        ...e,
        timeout: null
    })
}
const Dv = I.forwardRef((({
    bsPrefix: e,
    className: t,
    style: n,
    dialogClassName: r,
    contentClassName: o,
    children: a,
    dialogAs: i = Nv,
    "aria-labelledby": l,
    "aria-describedby": s,
    "aria-label": u,
    show: c = !1,
    animation: d = !0,
    backdrop: f = !0,
    keyboard: p = !0,
    onEscapeKeyDown: h,
    onShow: m,
    onHide: g,
    container: v,
    autoFocus: y = !0,
    enforceFocus: b = !0,
    restoreFocus: w = !0,
    restoreFocusOptions: C,
    onEntered: x,
    onExit: S,
    onExiting: E,
    onEnter: _,
    onEntering: R,
    onExited: k,
    backdropClassName: O,
    manager: N,
    ...j
}, P) => {
    const [L, T] = I.useState({}), [M, F] = I.useState(!1), A = I.useRef(!1), D = I.useRef(!1), z = I.useRef(null), [U, V] = I.useState(null), B = ym(P, V), H = Bm(g), $ = Ah();
    e = Fh(e, "modal");
    const q = I.useMemo((() => ({
        onHide: H
    })), [H]);

    function K() {
        return N || Ev({
            isRTL: $
        })
    }

    function W(e) {
        if (!om) return;
        const t = K().getScrollbarWidth() > 0,
            n = e.scrollHeight > Dh(e).documentElement.clientHeight;
        T({
            paddingRight: t && !n ? av() : void 0,
            paddingLeft: !t && n ? av() : void 0
        })
    }
    const G = Bm((() => {
        U && W(U.dialog)
    }));
    fg((() => {
        um(window, "resize", G), null == z.current || z.current()
    }));
    const Z = () => {
            A.current = !0
        },
        X = e => {
            A.current && U && e.target === U.dialog && (D.current = !0), A.current = !1
        },
        J = () => {
            F(!0), z.current = fm(U.dialog, (() => {
                F(!1)
            }))
        },
        Y = e => {
            "static" !== f ? D.current || e.target !== e.currentTarget ? D.current = !1 : null == g || g() : (e => {
                e.target === e.currentTarget && J()
            })(e)
        },
        ee = I.useCallback((t => Q.jsx("div", {
            ...t,
            className: Oh(`${e}-backdrop`, O, !d && "show")
        })), [d, O, e]),
        te = {
            ...n,
            ...L
        };
    te.display = "block";
    return Q.jsx(kv.Provider, {
        value: q,
        children: Q.jsx(vv, {
            show: c,
            ref: B,
            backdrop: f,
            container: v,
            keyboard: !0,
            autoFocus: y,
            enforceFocus: b,
            restoreFocus: w,
            restoreFocusOptions: C,
            onEscapeKeyDown: e => {
                p ? null == h || h(e) : (e.preventDefault(), "static" === f && J())
            },
            onShow: m,
            onHide: g,
            onEnter: (e, t) => {
                e && W(e), null == _ || _(e, t)
            },
            onEntering: (e, t) => {
                null == R || R(e, t), sm(window, "resize", G)
            },
            onEntered: x,
            onExit: e => {
                null == z.current || z.current(), null == S || S(e)
            },
            onExiting: E,
            onExited: e => {
                e && (e.style.display = ""), null == k || k(e), um(window, "resize", G)
            },
            manager: K(),
            transition: d ? Fv : void 0,
            backdropTransition: d ? Av : void 0,
            renderBackdrop: ee,
            renderDialog: n => Q.jsx("div", {
                role: "dialog",
                ...n,
                style: te,
                className: Oh(t, e, M && `${e}-static`, !d && "show"),
                onClick: f ? Y : void 0,
                onMouseUp: X,
                "aria-label": u,
                "aria-labelledby": l,
                "aria-describedby": s,
                children: Q.jsx(i, {
                    ...j,
                    onMouseDown: Z,
                    className: r,
                    contentClassName: o,
                    children: a
                })
            })
        })
    })
}));
Dv.displayName = "Modal";
const Iv = Object.assign(Dv, {
    Body: Rv,
    Header: Tv,
    Title: Mv,
    Footer: jv,
    Dialog: Nv,
    TRANSITION_DURATION: 300,
    BACKDROP_TRANSITION_DURATION: 150
});
var zv = {
        exports: {}
    },
    Uv = {
        exports: {}
    };
! function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        function t(t, n, r, o, a, i) {
            var l = o || "<<anonymous>>",
                s = i || r;
            if (null == n[r]) return t ? new Error("Required " + a + " `" + s + "` was not specified in `" + l + "`.") : null;
            for (var u = arguments.length, c = Array(u > 6 ? u - 6 : 0), d = 6; d < u; d++) c[d - 6] = arguments[d];
            return e.apply(void 0, [n, r, l, a, s].concat(c))
        }
        var n = t.bind(null, !1);
        return n.isRequired = t.bind(null, !0), n
    }, e.exports = t.default
}(Uv, Uv.exports);
var Vv = Uv.exports;
! function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return (0, r.default)((function() {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            var o = null;
            return t.forEach((function(e) {
                if (null == o) {
                    var t = e.apply(void 0, n);
                    null != t && (o = t)
                }
            })), o
        }))
    };
    var n, r = (n = Vv) && n.__esModule ? n : {
        default: n
    };
    e.exports = t.default
}(zv, zv.exports);
const Bv = lg("nav-item"),
    Hv = I.forwardRef((({
        bsPrefix: e,
        className: t,
        as: n = Xm,
        active: r,
        eventKey: o,
        disabled: a = !1,
        ...i
    }, l) => {
        e = Fh(e, "nav-link");
        const [s, u] = Kg({
            key: Lg(o, i.href),
            active: r,
            disabled: a,
            ...i
        });
        return Q.jsx(n, {
            ...i,
            ...s,
            ref: l,
            disabled: a,
            className: Oh(t, e, a && "disabled", u.isActive && "active")
        })
    }));
Hv.displayName = "NavLink";
const $v = Hv,
    qv = I.forwardRef(((e, t) => {
        const {
            as: n = "div",
            bsPrefix: r,
            variant: o,
            fill: a = !1,
            justify: i = !1,
            navbar: l,
            navbarScroll: s,
            className: u,
            activeKey: c,
            ...d
        } = Th(e, {
            activeKey: "onSelect"
        }), f = Fh(r, "nav");
        let p, h, m = !1;
        const g = I.useContext(Vg),
            v = I.useContext(dg);
        return g ? (p = g.bsPrefix, m = null == l || l) : v && ({
            cardHeaderBsPrefix: h
        } = v), Q.jsx(Yg, {
            as: n,
            ref: t,
            activeKey: c,
            className: Oh(u, {
                [f]: !m,
                [`${p}-nav`]: m,
                [`${p}-nav-scroll`]: m && s,
                [`${h}-${o}`]: !!h,
                [`${f}-${o}`]: !!o,
                [`${f}-fill`]: a,
                [`${f}-justified`]: i
            }),
            ...d
        })
    }));
qv.displayName = "Nav";
const Kv = Object.assign(qv, {
        Item: Bv,
        Link: $v
    }),
    Qv = I.forwardRef((({
        bsPrefix: e,
        className: t,
        as: n,
        ...r
    }, o) => {
        e = Fh(e, "navbar-brand");
        const a = n || (r.href ? "a" : "span");
        return Q.jsx(a, {
            ...r,
            ref: o,
            className: Oh(t, e)
        })
    }));
Qv.displayName = "NavbarBrand";
const Wv = Qv,
    Gv = I.forwardRef((({
        children: e,
        bsPrefix: t,
        ...n
    }, r) => {
        t = Fh(t, "navbar-collapse");
        const o = I.useContext(Vg);
        return Q.jsx(Sm, {
            in: !(!o || !o.expanded),
            ...n,
            children: Q.jsx("div", {
                ref: r,
                className: t,
                children: e
            })
        })
    }));
Gv.displayName = "NavbarCollapse";
const Zv = Gv,
    Xv = I.forwardRef((({
        bsPrefix: e,
        className: t,
        children: n,
        label: r = "Toggle navigation",
        as: o = "button",
        onClick: a,
        ...i
    }, l) => {
        e = Fh(e, "navbar-toggler");
        const {
            onToggle: s,
            expanded: u
        } = I.useContext(Vg) || {}, c = Bm((e => {
            a && a(e), s && s()
        }));
        return "button" === o && (i.type = "button"), Q.jsx(o, {
            ...i,
            ref: l,
            onClick: c,
            "aria-label": r,
            className: Oh(t, e, !u && "collapsed"),
            children: n || Q.jsx("span", {
                className: `${e}-icon`
            })
        })
    }));
Xv.displayName = "NavbarToggle";
const Jv = Xv;
var Yv = new WeakMap,
    ey = function(e, t) {
        if (e && t) {
            var n = Yv.get(t) || new Map;
            Yv.set(t, n);
            var r = n.get(e);
            return r || ((r = t.matchMedia(e)).refCount = 0, n.set(r.media, r)), r
        }
    };
var ty = function(e) {
    var t = Object.keys(e);

    function n(e, t) {
        return e === t ? t : e ? e + " and " + t : t
    }

    function r(n) {
        var r = function(e) {
                return t[Math.min(t.indexOf(e) + 1, t.length - 1)]
            }(n),
            o = e[r];
        return "(max-width: " + (o = "number" == typeof o ? o - .2 + "px" : "calc(" + o + " - 0.2px)") + ")"
    }
    return function(t, o, a) {
        var i, l;
        return "object" == typeof t ? (i = t, a = o, o = !0) : ((l = {})[t] = o = o || !0, i = l),
            function(e, t) {
                void 0 === t && (t = "undefined" == typeof window ? void 0 : window);
                var n = ey(e, t),
                    r = I.useState((function() {
                        return !!n && n.matches
                    })),
                    o = r[0],
                    a = r[1];
                return qm((function() {
                    var n = ey(e, t);
                    if (!n) return a(!1);
                    var r = Yv.get(t),
                        o = function() {
                            a(n.matches)
                        };
                    return n.refCount++, n.addListener(o), o(),
                        function() {
                            n.removeListener(o), n.refCount--, n.refCount <= 0 && (null == r || r.delete(n.media)), n = void 0
                        }
                }), [e]), o
            }(I.useMemo((function() {
                return Object.entries(i).reduce((function(t, o) {
                    var a, i = o[0],
                        l = o[1];
                    return "up" !== l && !0 !== l || (t = n(t, ("number" == typeof(a = e[i]) && (a += "px"), "(min-width: " + a + ")"))), "down" !== l && !0 !== l || (t = n(t, r(i))), t
                }), "")
            }), [JSON.stringify(i)]), a)
    }
}({
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400
});
const ny = lg("offcanvas-body"),
    ry = {
        [Jh]: "show",
        [Yh]: "show"
    },
    oy = I.forwardRef((({
        bsPrefix: e,
        className: t,
        children: n,
        in: r = !1,
        mountOnEnter: o = !1,
        unmountOnExit: a = !1,
        appear: i = !1,
        ...l
    }, s) => (e = Fh(e, "offcanvas"), Q.jsx(bm, {
        ref: s,
        addEndListener: hm,
        in: r,
        mountOnEnter: o,
        unmountOnExit: a,
        appear: i,
        ...l,
        childRef: n.ref,
        children: (r, o) => I.cloneElement(n, {
            ...o,
            className: Oh(t, n.props.className, (r === Jh || r === em) && `${e}-toggling`, ry[r])
        })
    }))));
oy.displayName = "OffcanvasToggling";
const ay = oy,
    iy = I.forwardRef((({
        bsPrefix: e,
        className: t,
        closeLabel: n = "Close",
        closeButton: r = !1,
        ...o
    }, a) => (e = Fh(e, "offcanvas-header"), Q.jsx(Pv, {
        ref: a,
        ...o,
        className: Oh(t, e),
        closeLabel: n,
        closeButton: r
    }))));
iy.displayName = "OffcanvasHeader";
const ly = iy,
    sy = lg("offcanvas-title", {
        Component: og("h5")
    });

function uy(e) {
    return Q.jsx(ay, {
        ...e
    })
}

function cy(e) {
    return Q.jsx(eg, {
        ...e
    })
}
const dy = I.forwardRef((({
    bsPrefix: e,
    className: t,
    children: n,
    "aria-labelledby": r,
    placement: o = "start",
    responsive: a,
    show: i = !1,
    backdrop: l = !0,
    keyboard: s = !0,
    scroll: u = !1,
    onEscapeKeyDown: c,
    onShow: d,
    onHide: f,
    container: p,
    autoFocus: h = !0,
    enforceFocus: m = !0,
    restoreFocus: g = !0,
    restoreFocusOptions: v,
    onEntered: y,
    onExit: b,
    onExiting: w,
    onEnter: C,
    onEntering: x,
    onExited: S,
    backdropClassName: E,
    manager: _,
    renderStaticNode: R = !1,
    ...k
}, O) => {
    const N = I.useRef();
    e = Fh(e, "offcanvas");
    const {
        onToggle: j
    } = I.useContext(Vg) || {}, [P, L] = I.useState(!1), T = ty(a || "xs", "up");
    I.useEffect((() => {
        L(a ? i && !T : i)
    }), [i, a, T]);
    const M = Bm((() => {
            null == j || j(), null == f || f()
        })),
        F = I.useMemo((() => ({
            onHide: M
        })), [M]);
    const A = I.useCallback((t => Q.jsx("div", {
            ...t,
            className: Oh(`${e}-backdrop`, E)
        })), [E, e]),
        D = i => Q.jsx("div", {
            ...i,
            ...k,
            className: Oh(t, a ? `${e}-${a}` : e, `${e}-${o}`),
            "aria-labelledby": r,
            children: n
        });
    return Q.jsxs(Q.Fragment, {
        children: [!P && (a || R) && D({}), Q.jsx(kv.Provider, {
            value: F,
            children: Q.jsx(vv, {
                show: P,
                ref: O,
                backdrop: l,
                container: p,
                keyboard: s,
                autoFocus: h,
                enforceFocus: m && !u,
                restoreFocus: g,
                restoreFocusOptions: v,
                onEscapeKeyDown: c,
                onShow: d,
                onHide: M,
                onEnter: (e, ...t) => {
                    e && (e.style.visibility = "visible"), null == C || C(e, ...t)
                },
                onEntering: x,
                onEntered: y,
                onExit: b,
                onExiting: w,
                onExited: (e, ...t) => {
                    e && (e.style.visibility = ""), null == S || S(...t)
                },
                manager: _ || (u ? (N.current || (N.current = new _v({
                    handleContainerOverflow: !1
                })), N.current) : Ev()),
                transition: uy,
                backdropTransition: cy,
                renderBackdrop: A,
                renderDialog: D
            })
        })]
    })
}));
dy.displayName = "Offcanvas";
const fy = Object.assign(dy, {
        Body: ny,
        Header: ly,
        Title: sy
    }),
    py = I.forwardRef(((e, t) => {
        const n = I.useContext(Vg);
        return Q.jsx(fy, {
            ref: t,
            show: !(null == n || !n.expanded),
            ...e,
            renderStaticNode: !0
        })
    }));
py.displayName = "NavbarOffcanvas";
const hy = py,
    my = lg("navbar-text", {
        Component: "span"
    }),
    gy = I.forwardRef(((e, t) => {
        const {
            bsPrefix: n,
            expand: r = !0,
            variant: o = "light",
            bg: a,
            fixed: i,
            sticky: l,
            className: s,
            as: u = "nav",
            expanded: c,
            onToggle: d,
            onSelect: f,
            collapseOnSelect: p = !1,
            ...h
        } = Th(e, {
            expanded: "onToggle"
        }), m = Fh(n, "navbar"), g = I.useCallback(((...e) => {
            null == f || f(...e), p && c && (null == d || d(!1))
        }), [f, p, c, d]);
        void 0 === h.role && "nav" !== u && (h.role = "navigation");
        let v = `${m}-expand`;
        "string" == typeof r && (v = `${v}-${r}`);
        const y = I.useMemo((() => ({
            onToggle: () => null == d ? void 0 : d(!c),
            bsPrefix: m,
            expanded: !!c,
            expand: r
        })), [m, c, r, d]);
        return Q.jsx(Vg.Provider, {
            value: y,
            children: Q.jsx(Tg.Provider, {
                value: g,
                children: Q.jsx(u, {
                    ref: t,
                    ...h,
                    className: Oh(s, m, r && v, o && `${m}-${o}`, a && `bg-${a}`, l && `sticky-${l}`, i && `fixed-${i}`)
                })
            })
        })
    }));
gy.displayName = "Navbar";
const vy = Object.assign(gy, {
    Brand: Wv,
    Collapse: Zv,
    Offcanvas: hy,
    Text: my,
    Toggle: Jv
});

function yy({
    animation: e,
    bg: t,
    bsPrefix: n,
    size: r,
    ...o
}) {
    n = Fh(n, "placeholder");
    const [{
        className: a,
        ...i
    }] = Sg(o);
    return {
        ...i,
        className: Oh(a, e ? `${n}-${e}` : n, r && `${n}-${r}`, t && `bg-${t}`)
    }
}
const by = I.forwardRef(((e, t) => {
    const n = yy(e);
    return Q.jsx(ug, {
        ...n,
        ref: t,
        disabled: !0,
        tabIndex: -1
    })
}));
by.displayName = "PlaceholderButton";
const wy = by,
    Cy = I.forwardRef((({
        as: e = "span",
        ...t
    }, n) => {
        const r = yy(t);
        return Q.jsx(e, {
            ...r,
            ref: n
        })
    }));
Cy.displayName = "Placeholder";
const xy = Object.assign(Cy, {
        Button: wy
    }),
    Sy = I.forwardRef((({
        bsPrefix: e,
        variant: t,
        animation: n = "border",
        size: r,
        as: o = "div",
        className: a,
        ...i
    }, l) => {
        const s = `${e=Fh(e,"spinner")}-${n}`;
        return Q.jsx(o, {
            ref: l,
            ...i,
            className: Oh(a, s, r && `${s}-${r}`, t && `text-${t}`)
        })
    }));
Sy.displayName = "Spinner";
const Ey = Sy,
    _y = ["active", "eventKey", "mountOnEnter", "transition", "unmountOnExit", "role", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited"],
    Ry = ["activeKey", "getControlledId", "getControllerId"],
    ky = ["as"];

function Oy(e, t) {
    if (null == e) return {};
    var n, r, o = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
    return o
}

function Ny(e) {
    let {
        active: t,
        eventKey: n,
        mountOnEnter: r,
        transition: o,
        unmountOnExit: a,
        role: i = "tabpanel",
        onEnter: l,
        onEntering: s,
        onEntered: u,
        onExit: c,
        onExiting: d,
        onExited: f
    } = e, p = Oy(e, _y);
    const h = I.useContext($g);
    if (!h) return [Object.assign({}, p, {
        role: i
    }), {
        eventKey: n,
        isActive: t,
        mountOnEnter: r,
        transition: o,
        unmountOnExit: a,
        onEnter: l,
        onEntering: s,
        onEntered: u,
        onExit: c,
        onExiting: d,
        onExited: f
    }];
    const {
        activeKey: m,
        getControlledId: g,
        getControllerId: v
    } = h, y = Oy(h, Ry), b = Lg(n);
    return [Object.assign({}, p, {
        role: i,
        id: g(n),
        "aria-labelledby": v(n)
    }), {
        eventKey: n,
        isActive: null == t && null != b ? Lg(m) === b : t,
        transition: o || y.transition,
        mountOnEnter: null != r ? r : y.mountOnEnter,
        unmountOnExit: null != a ? a : y.unmountOnExit,
        onEnter: l,
        onEntering: s,
        onEntered: u,
        onExit: c,
        onExiting: d,
        onExited: f
    }]
}
const jy = I.forwardRef(((e, t) => {
    let {
        as: n = "div"
    } = e, r = Oy(e, ky);
    const [o, {
        isActive: a,
        onEnter: i,
        onEntering: l,
        onEntered: s,
        onExit: u,
        onExiting: c,
        onExited: d,
        mountOnEnter: f,
        unmountOnExit: p,
        transition: h = cv
    }] = Ny(r);
    return Q.jsx($g.Provider, {
        value: null,
        children: Q.jsx(Tg.Provider, {
            value: null,
            children: Q.jsx(h, {
                in: a,
                onEnter: i,
                onEntering: l,
                onEntered: s,
                onExit: u,
                onExiting: c,
                onExited: d,
                mountOnEnter: f,
                unmountOnExit: p,
                children: Q.jsx(n, Object.assign({}, o, {
                    ref: t,
                    hidden: !a,
                    "aria-hidden": !a
                }))
            })
        })
    })
}));
jy.displayName = "TabPanel";
const Py = e => {
    const {
        id: t,
        generateChildId: n,
        onSelect: r,
        activeKey: o,
        defaultActiveKey: a,
        transition: i,
        mountOnEnter: l,
        unmountOnExit: s,
        children: u
    } = e, [c, d] = Lh(o, a, r), f = Pg(t), p = I.useMemo((() => n || ((e, t) => f ? `${f}-${t}-${e}` : null)), [f, n]), h = I.useMemo((() => ({
        onSelect: d,
        activeKey: c,
        transition: i,
        mountOnEnter: l || !1,
        unmountOnExit: s || !1,
        getControlledId: e => p(e, "tabpane"),
        getControllerId: e => p(e, "tab")
    })), [d, c, i, l, s, p]);
    return Q.jsx($g.Provider, {
        value: h,
        children: Q.jsx(Tg.Provider, {
            value: d || null,
            children: u
        })
    })
};
Py.Panel = jy;
const Ly = Py;

function Ty(e) {
    return "boolean" == typeof e ? e ? eg : cv : e
}
const My = ({
    transition: e,
    ...t
}) => Q.jsx(Ly, {
    ...t,
    transition: Ty(e)
});
My.displayName = "TabContainer";
const Fy = My,
    Ay = lg("tab-content"),
    Dy = I.forwardRef((({
        bsPrefix: e,
        transition: t,
        ...n
    }, r) => {
        const [{
            className: o,
            as: a = "div",
            ...i
        }, {
            isActive: l,
            onEnter: s,
            onEntering: u,
            onEntered: c,
            onExit: d,
            onExiting: f,
            onExited: p,
            mountOnEnter: h,
            unmountOnExit: m,
            transition: g = eg
        }] = Ny({
            ...n,
            transition: Ty(t)
        }), v = Fh(e, "tab-pane");
        return Q.jsx($g.Provider, {
            value: null,
            children: Q.jsx(Tg.Provider, {
                value: null,
                children: Q.jsx(g, {
                    in: l,
                    onEnter: s,
                    onEntering: u,
                    onEntered: c,
                    onExit: d,
                    onExiting: f,
                    onExited: p,
                    mountOnEnter: h,
                    unmountOnExit: m,
                    children: Q.jsx(a, {
                        ...i,
                        ref: r,
                        className: Oh(o, v, l && "active")
                    })
                })
            })
        })
    }));
Dy.displayName = "TabPane";
const Iy = Dy,
    zy = {
        eventKey: Qh.oneOfType([Qh.string, Qh.number]),
        title: Qh.node.isRequired,
        disabled: Qh.bool,
        tabClassName: Qh.string,
        tabAttrs: Qh.object
    },
    Uy = () => {
        throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")
    };
Uy.propTypes = zy;
const Vy = Object.assign(Uy, {
    Container: Fy,
    Content: Ay,
    Pane: Iy
});

function By(e) {
    let t;
    return wg(e, (e => {
        null == t && (t = e.props.eventKey)
    })), t
}

function Hy(e) {
    const {
        title: t,
        eventKey: n,
        disabled: r,
        tabClassName: o,
        tabAttrs: a,
        id: i
    } = e.props;
    return null == t ? null : Q.jsx(Bv, {
        as: "li",
        role: "presentation",
        children: Q.jsx($v, {
            as: "button",
            type: "button",
            eventKey: n,
            disabled: r,
            id: i,
            className: o,
            ...a,
            children: t
        })
    })
}
const $y = e => {
    const {
        id: t,
        onSelect: n,
        transition: r,
        mountOnEnter: o = !1,
        unmountOnExit: a = !1,
        variant: i = "tabs",
        children: l,
        activeKey: s = By(l),
        ...u
    } = Th(e, {
        activeKey: "onSelect"
    });
    return Q.jsxs(Ly, {
        id: t,
        activeKey: s,
        onSelect: n,
        transition: Ty(r),
        mountOnEnter: o,
        unmountOnExit: a,
        children: [Q.jsx(Kv, {
            ...u,
            role: "tablist",
            as: "ul",
            variant: i,
            children: bg(l, Hy)
        }), Q.jsx(Ay, {
            children: bg(l, (e => {
                const t = {
                    ...e.props
                };
                return delete t.title, delete t.disabled, delete t.tabClassName, delete t.tabAttrs, Q.jsx(Iy, {
                    ...t
                })
            }))
        })]
    })
};
$y.displayName = "Tabs";
const qy = $y;

function Ky(e, t) {
    return function() {
        return e.apply(t, arguments)
    }
}
const {
    toString: Qy
} = Object.prototype, {
    getPrototypeOf: Wy
} = Object, Gy = (Zy = Object.create(null), e => {
    const t = Qy.call(e);
    return Zy[t] || (Zy[t] = t.slice(8, -1).toLowerCase())
});
var Zy;
const Xy = e => (e = e.toLowerCase(), t => Gy(t) === e),
    Jy = e => t => typeof t === e,
    {
        isArray: Yy
    } = Array,
    eb = Jy("undefined");
const tb = Xy("ArrayBuffer");
const nb = Jy("string"),
    rb = Jy("function"),
    ob = Jy("number"),
    ab = e => null !== e && "object" == typeof e,
    ib = e => {
        if ("object" !== Gy(e)) return !1;
        const t = Wy(e);
        return !(null !== t && t !== Object.prototype && null !== Object.getPrototypeOf(t) || Symbol.toStringTag in e || Symbol.iterator in e)
    },
    lb = Xy("Date"),
    sb = Xy("File"),
    ub = Xy("Blob"),
    cb = Xy("FileList"),
    db = Xy("URLSearchParams");

function fb(e, t, {
    allOwnKeys: n = !1
} = {}) {
    if (null == e) return;
    let r, o;
    if ("object" != typeof e && (e = [e]), Yy(e))
        for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e);
    else {
        const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
            a = o.length;
        let i;
        for (r = 0; r < a; r++) i = o[r], t.call(null, e[i], i, e)
    }
}

function pb(e, t) {
    t = t.toLowerCase();
    const n = Object.keys(e);
    let r, o = n.length;
    for (; o-- > 0;)
        if (r = n[o], t === r.toLowerCase()) return r;
    return null
}
const hb = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : global,
    mb = e => !eb(e) && e !== hb;
const gb = (vb = "undefined" != typeof Uint8Array && Wy(Uint8Array), e => vb && e instanceof vb);
var vb;
const yb = Xy("HTMLFormElement"),
    bb = (({
        hasOwnProperty: e
    }) => (t, n) => e.call(t, n))(Object.prototype),
    wb = Xy("RegExp"),
    Cb = (e, t) => {
        const n = Object.getOwnPropertyDescriptors(e),
            r = {};
        fb(n, ((n, o) => {
            !1 !== t(n, o, e) && (r[o] = n)
        })), Object.defineProperties(e, r)
    },
    xb = "abcdefghijklmnopqrstuvwxyz",
    Sb = "0123456789",
    Eb = {
        DIGIT: Sb,
        ALPHA: xb,
        ALPHA_DIGIT: xb + xb.toUpperCase() + Sb
    };
const _b = Xy("AsyncFunction"),
    Rb = {
        isArray: Yy,
        isArrayBuffer: tb,
        isBuffer: function(e) {
            return null !== e && !eb(e) && null !== e.constructor && !eb(e.constructor) && rb(e.constructor.isBuffer) && e.constructor.isBuffer(e)
        },
        isFormData: e => {
            let t;
            return e && ("function" == typeof FormData && e instanceof FormData || rb(e.append) && ("formdata" === (t = Gy(e)) || "object" === t && rb(e.toString) && "[object FormData]" === e.toString()))
        },
        isArrayBufferView: function(e) {
            let t;
            return t = "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && tb(e.buffer), t
        },
        isString: nb,
        isNumber: ob,
        isBoolean: e => !0 === e || !1 === e,
        isObject: ab,
        isPlainObject: ib,
        isUndefined: eb,
        isDate: lb,
        isFile: sb,
        isBlob: ub,
        isRegExp: wb,
        isFunction: rb,
        isStream: e => ab(e) && rb(e.pipe),
        isURLSearchParams: db,
        isTypedArray: gb,
        isFileList: cb,
        forEach: fb,
        merge: function e() {
            const {
                caseless: t
            } = mb(this) && this || {}, n = {}, r = (r, o) => {
                const a = t && pb(n, o) || o;
                ib(n[a]) && ib(r) ? n[a] = e(n[a], r) : ib(r) ? n[a] = e({}, r) : Yy(r) ? n[a] = r.slice() : n[a] = r
            };
            for (let o = 0, a = arguments.length; o < a; o++) arguments[o] && fb(arguments[o], r);
            return n
        },
        extend: (e, t, n, {
            allOwnKeys: r
        } = {}) => (fb(t, ((t, r) => {
            n && rb(t) ? e[r] = Ky(t, n) : e[r] = t
        }), {
            allOwnKeys: r
        }), e),
        trim: e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
        stripBOM: e => (65279 === e.charCodeAt(0) && (e = e.slice(1)), e),
        inherits: (e, t, n, r) => {
            e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
                value: t.prototype
            }), n && Object.assign(e.prototype, n)
        },
        toFlatObject: (e, t, n, r) => {
            let o, a, i;
            const l = {};
            if (t = t || {}, null == e) return t;
            do {
                for (o = Object.getOwnPropertyNames(e), a = o.length; a-- > 0;) i = o[a], r && !r(i, e, t) || l[i] || (t[i] = e[i], l[i] = !0);
                e = !1 !== n && Wy(e)
            } while (e && (!n || n(e, t)) && e !== Object.prototype);
            return t
        },
        kindOf: Gy,
        kindOfTest: Xy,
        endsWith: (e, t, n) => {
            e = String(e), (void 0 === n || n > e.length) && (n = e.length), n -= t.length;
            const r = e.indexOf(t, n);
            return -1 !== r && r === n
        },
        toArray: e => {
            if (!e) return null;
            if (Yy(e)) return e;
            let t = e.length;
            if (!ob(t)) return null;
            const n = new Array(t);
            for (; t-- > 0;) n[t] = e[t];
            return n
        },
        forEachEntry: (e, t) => {
            const n = (e && e[Symbol.iterator]).call(e);
            let r;
            for (;
                (r = n.next()) && !r.done;) {
                const n = r.value;
                t.call(e, n[0], n[1])
            }
        },
        matchAll: (e, t) => {
            let n;
            const r = [];
            for (; null !== (n = e.exec(t));) r.push(n);
            return r
        },
        isHTMLForm: yb,
        hasOwnProperty: bb,
        hasOwnProp: bb,
        reduceDescriptors: Cb,
        freezeMethods: e => {
            Cb(e, ((t, n) => {
                if (rb(e) && -1 !== ["arguments", "caller", "callee"].indexOf(n)) return !1;
                const r = e[n];
                rb(r) && (t.enumerable = !1, "writable" in t ? t.writable = !1 : t.set || (t.set = () => {
                    throw Error("Can not rewrite read-only method '" + n + "'")
                }))
            }))
        },
        toObjectSet: (e, t) => {
            const n = {},
                r = e => {
                    e.forEach((e => {
                        n[e] = !0
                    }))
                };
            return Yy(e) ? r(e) : r(String(e).split(t)), n
        },
        toCamelCase: e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, (function(e, t, n) {
            return t.toUpperCase() + n
        })),
        noop: () => {},
        toFiniteNumber: (e, t) => (e = +e, Number.isFinite(e) ? e : t),
        findKey: pb,
        global: hb,
        isContextDefined: mb,
        ALPHABET: Eb,
        generateString: (e = 16, t = Eb.ALPHA_DIGIT) => {
            let n = "";
            const {
                length: r
            } = t;
            for (; e--;) n += t[Math.random() * r | 0];
            return n
        },
        isSpecCompliantForm: function(e) {
            return !!(e && rb(e.append) && "FormData" === e[Symbol.toStringTag] && e[Symbol.iterator])
        },
        toJSONObject: e => {
            const t = new Array(10),
                n = (e, r) => {
                    if (ab(e)) {
                        if (t.indexOf(e) >= 0) return;
                        if (!("toJSON" in e)) {
                            t[r] = e;
                            const o = Yy(e) ? [] : {};
                            return fb(e, ((e, t) => {
                                const a = n(e, r + 1);
                                !eb(a) && (o[t] = a)
                            })), t[r] = void 0, o
                        }
                    }
                    return e
                };
            return n(e, 0)
        },
        isAsyncFn: _b,
        isThenable: e => e && (ab(e) || rb(e)) && rb(e.then) && rb(e.catch)
    };

function kb(e, t, n, r, o) {
    Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = (new Error).stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), o && (this.response = o)
}
Rb.inherits(kb, Error, {
    toJSON: function() {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: Rb.toJSONObject(this.config),
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null
        }
    }
});
const Ob = kb.prototype,
    Nb = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach((e => {
    Nb[e] = {
        value: e
    }
})), Object.defineProperties(kb, Nb), Object.defineProperty(Ob, "isAxiosError", {
    value: !0
}), kb.from = (e, t, n, r, o, a) => {
    const i = Object.create(Ob);
    return Rb.toFlatObject(e, i, (function(e) {
        return e !== Error.prototype
    }), (e => "isAxiosError" !== e)), kb.call(i, e.message, t, n, r, o), i.cause = e, i.name = e.name, a && Object.assign(i, a), i
};

function jb(e) {
    return Rb.isPlainObject(e) || Rb.isArray(e)
}

function Pb(e) {
    return Rb.endsWith(e, "[]") ? e.slice(0, -2) : e
}

function Lb(e, t, n) {
    return e ? e.concat(t).map((function(e, t) {
        return e = Pb(e), !n && t ? "[" + e + "]" : e
    })).join(n ? "." : "") : t
}
const Tb = Rb.toFlatObject(Rb, {}, null, (function(e) {
    return /^is[A-Z]/.test(e)
}));

function Mb(e, t, n) {
    if (!Rb.isObject(e)) throw new TypeError("target must be an object");
    t = t || new FormData;
    const r = (n = Rb.toFlatObject(n, {
            metaTokens: !0,
            dots: !1,
            indexes: !1
        }, !1, (function(e, t) {
            return !Rb.isUndefined(t[e])
        }))).metaTokens,
        o = n.visitor || u,
        a = n.dots,
        i = n.indexes,
        l = (n.Blob || "undefined" != typeof Blob && Blob) && Rb.isSpecCompliantForm(t);
    if (!Rb.isFunction(o)) throw new TypeError("visitor must be a function");

    function s(e) {
        if (null === e) return "";
        if (Rb.isDate(e)) return e.toISOString();
        if (!l && Rb.isBlob(e)) throw new kb("Blob is not supported. Use a Buffer instead.");
        return Rb.isArrayBuffer(e) || Rb.isTypedArray(e) ? l && "function" == typeof Blob ? new Blob([e]) : Buffer.from(e) : e
    }

    function u(e, n, o) {
        let l = e;
        if (e && !o && "object" == typeof e)
            if (Rb.endsWith(n, "{}")) n = r ? n : n.slice(0, -2), e = JSON.stringify(e);
            else if (Rb.isArray(e) && function(e) {
                return Rb.isArray(e) && !e.some(jb)
            }(e) || (Rb.isFileList(e) || Rb.endsWith(n, "[]")) && (l = Rb.toArray(e))) return n = Pb(n), l.forEach((function(e, r) {
            !Rb.isUndefined(e) && null !== e && t.append(!0 === i ? Lb([n], r, a) : null === i ? n : n + "[]", s(e))
        })), !1;
        return !!jb(e) || (t.append(Lb(o, n, a), s(e)), !1)
    }
    const c = [],
        d = Object.assign(Tb, {
            defaultVisitor: u,
            convertValue: s,
            isVisitable: jb
        });
    if (!Rb.isObject(e)) throw new TypeError("data must be an object");
    return function e(n, r) {
        if (!Rb.isUndefined(n)) {
            if (-1 !== c.indexOf(n)) throw Error("Circular reference detected in " + r.join("."));
            c.push(n), Rb.forEach(n, (function(n, a) {
                !0 === (!(Rb.isUndefined(n) || null === n) && o.call(t, n, Rb.isString(a) ? a.trim() : a, r, d)) && e(n, r ? r.concat(a) : [a])
            })), c.pop()
        }
    }(e), t
}

function Fb(e) {
    const t = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0"
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, (function(e) {
        return t[e]
    }))
}

function Ab(e, t) {
    this._pairs = [], e && Mb(e, this, t)
}
const Db = Ab.prototype;

function Ib(e) {
    return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
}

function zb(e, t, n) {
    if (!t) return e;
    const r = n && n.encode || Ib,
        o = n && n.serialize;
    let a;
    if (a = o ? o(t, n) : Rb.isURLSearchParams(t) ? t.toString() : new Ab(t, n).toString(r), a) {
        const t = e.indexOf("#"); - 1 !== t && (e = e.slice(0, t)), e += (-1 === e.indexOf("?") ? "?" : "&") + a
    }
    return e
}
Db.append = function(e, t) {
    this._pairs.push([e, t])
}, Db.toString = function(e) {
    const t = e ? function(t) {
        return e.call(this, t, Fb)
    } : Fb;
    return this._pairs.map((function(e) {
        return t(e[0]) + "=" + t(e[1])
    }), "").join("&")
};
const Ub = class {
        constructor() {
            this.handlers = []
        }
        use(e, t, n) {
            return this.handlers.push({
                fulfilled: e,
                rejected: t,
                synchronous: !!n && n.synchronous,
                runWhen: n ? n.runWhen : null
            }), this.handlers.length - 1
        }
        eject(e) {
            this.handlers[e] && (this.handlers[e] = null)
        }
        clear() {
            this.handlers && (this.handlers = [])
        }
        forEach(e) {
            Rb.forEach(this.handlers, (function(t) {
                null !== t && e(t)
            }))
        }
    },
    Vb = {
        silentJSONParsing: !0,
        forcedJSONParsing: !0,
        clarifyTimeoutError: !1
    },
    Bb = {
        isBrowser: !0,
        classes: {
            URLSearchParams: "undefined" != typeof URLSearchParams ? URLSearchParams : Ab,
            FormData: "undefined" != typeof FormData ? FormData : null,
            Blob: "undefined" != typeof Blob ? Blob : null
        },
        isStandardBrowserEnv: (() => {
            let e;
            return ("undefined" == typeof navigator || "ReactNative" !== (e = navigator.product) && "NativeScript" !== e && "NS" !== e) && ("undefined" != typeof window && "undefined" != typeof document)
        })(),
        isStandardBrowserWebWorkerEnv: "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && "function" == typeof self.importScripts,
        protocols: ["http", "https", "file", "blob", "url", "data"]
    };

function Hb(e) {
    function t(e, n, r, o) {
        let a = e[o++];
        const i = Number.isFinite(+a),
            l = o >= e.length;
        if (a = !a && Rb.isArray(r) ? r.length : a, l) return Rb.hasOwnProp(r, a) ? r[a] = [r[a], n] : r[a] = n, !i;
        r[a] && Rb.isObject(r[a]) || (r[a] = []);
        return t(e, n, r[a], o) && Rb.isArray(r[a]) && (r[a] = function(e) {
            const t = {},
                n = Object.keys(e);
            let r;
            const o = n.length;
            let a;
            for (r = 0; r < o; r++) a = n[r], t[a] = e[a];
            return t
        }(r[a])), !i
    }
    if (Rb.isFormData(e) && Rb.isFunction(e.entries)) {
        const n = {};
        return Rb.forEachEntry(e, ((e, r) => {
            t(function(e) {
                return Rb.matchAll(/\w+|\[(\w*)]/g, e).map((e => "[]" === e[0] ? "" : e[1] || e[0]))
            }(e), r, n, 0)
        })), n
    }
    return null
}
const $b = {
    "Content-Type": void 0
};
const qb = {
    transitional: Vb,
    adapter: ["xhr", "http"],
    transformRequest: [function(e, t) {
        const n = t.getContentType() || "",
            r = n.indexOf("application/json") > -1,
            o = Rb.isObject(e);
        o && Rb.isHTMLForm(e) && (e = new FormData(e));
        if (Rb.isFormData(e)) return r && r ? JSON.stringify(Hb(e)) : e;
        if (Rb.isArrayBuffer(e) || Rb.isBuffer(e) || Rb.isStream(e) || Rb.isFile(e) || Rb.isBlob(e)) return e;
        if (Rb.isArrayBufferView(e)) return e.buffer;
        if (Rb.isURLSearchParams(e)) return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
        let a;
        if (o) {
            if (n.indexOf("application/x-www-form-urlencoded") > -1) return function(e, t) {
                return Mb(e, new Bb.classes.URLSearchParams, Object.assign({
                    visitor: function(e, t, n, r) {
                        return Bb.isNode && Rb.isBuffer(e) ? (this.append(t, e.toString("base64")), !1) : r.defaultVisitor.apply(this, arguments)
                    }
                }, t))
            }(e, this.formSerializer).toString();
            if ((a = Rb.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
                const t = this.env && this.env.FormData;
                return Mb(a ? {
                    "files[]": e
                } : e, t && new t, this.formSerializer)
            }
        }
        return o || r ? (t.setContentType("application/json", !1), function(e, t, n) {
            if (Rb.isString(e)) try {
                return (t || JSON.parse)(e), Rb.trim(e)
            } catch (pE) {
                if ("SyntaxError" !== pE.name) throw pE
            }
            return (n || JSON.stringify)(e)
        }(e)) : e
    }],
    transformResponse: [function(e) {
        const t = this.transitional || qb.transitional,
            n = t && t.forcedJSONParsing,
            r = "json" === this.responseType;
        if (e && Rb.isString(e) && (n && !this.responseType || r)) {
            const n = !(t && t.silentJSONParsing) && r;
            try {
                return JSON.parse(e)
            } catch (pE) {
                if (n) {
                    if ("SyntaxError" === pE.name) throw kb.from(pE, kb.ERR_BAD_RESPONSE, this, null, this.response);
                    throw pE
                }
            }
        }
        return e
    }],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: Bb.classes.FormData,
        Blob: Bb.classes.Blob
    },
    validateStatus: function(e) {
        return e >= 200 && e < 300
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*"
        }
    }
};
Rb.forEach(["delete", "get", "head"], (function(e) {
    qb.headers[e] = {}
})), Rb.forEach(["post", "put", "patch"], (function(e) {
    qb.headers[e] = Rb.merge($b)
}));
const Kb = qb,
    Qb = Rb.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]),
    Wb = Symbol("internals");

function Gb(e) {
    return e && String(e).trim().toLowerCase()
}

function Zb(e) {
    return !1 === e || null == e ? e : Rb.isArray(e) ? e.map(Zb) : String(e)
}

function Xb(e, t, n, r, o) {
    return Rb.isFunction(r) ? r.call(this, t, n) : (o && (t = n), Rb.isString(t) ? Rb.isString(r) ? -1 !== t.indexOf(r) : Rb.isRegExp(r) ? r.test(t) : void 0 : void 0)
}
class Jb {
    constructor(e) {
        e && this.set(e)
    }
    set(e, t, n) {
        const r = this;

        function o(e, t, n) {
            const o = Gb(t);
            if (!o) throw new Error("header name must be a non-empty string");
            const a = Rb.findKey(r, o);
            (!a || void 0 === r[a] || !0 === n || void 0 === n && !1 !== r[a]) && (r[a || t] = Zb(e))
        }
        const a = (e, t) => Rb.forEach(e, ((e, n) => o(e, n, t)));
        return Rb.isPlainObject(e) || e instanceof this.constructor ? a(e, t) : Rb.isString(e) && (e = e.trim()) && !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim()) ? a((e => {
            const t = {};
            let n, r, o;
            return e && e.split("\n").forEach((function(e) {
                o = e.indexOf(":"), n = e.substring(0, o).trim().toLowerCase(), r = e.substring(o + 1).trim(), !n || t[n] && Qb[n] || ("set-cookie" === n ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r)
            })), t
        })(e), t) : null != e && o(t, e, n), this
    }
    get(e, t) {
        if (e = Gb(e)) {
            const n = Rb.findKey(this, e);
            if (n) {
                const e = this[n];
                if (!t) return e;
                if (!0 === t) return function(e) {
                    const t = Object.create(null),
                        n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                    let r;
                    for (; r = n.exec(e);) t[r[1]] = r[2];
                    return t
                }(e);
                if (Rb.isFunction(t)) return t.call(this, e, n);
                if (Rb.isRegExp(t)) return t.exec(e);
                throw new TypeError("parser must be boolean|regexp|function")
            }
        }
    }
    has(e, t) {
        if (e = Gb(e)) {
            const n = Rb.findKey(this, e);
            return !(!n || void 0 === this[n] || t && !Xb(0, this[n], n, t))
        }
        return !1
    }
    delete(e, t) {
        const n = this;
        let r = !1;

        function o(e) {
            if (e = Gb(e)) {
                const o = Rb.findKey(n, e);
                !o || t && !Xb(0, n[o], o, t) || (delete n[o], r = !0)
            }
        }
        return Rb.isArray(e) ? e.forEach(o) : o(e), r
    }
    clear(e) {
        const t = Object.keys(this);
        let n = t.length,
            r = !1;
        for (; n--;) {
            const o = t[n];
            e && !Xb(0, this[o], o, e, !0) || (delete this[o], r = !0)
        }
        return r
    }
    normalize(e) {
        const t = this,
            n = {};
        return Rb.forEach(this, ((r, o) => {
            const a = Rb.findKey(n, o);
            if (a) return t[a] = Zb(r), void delete t[o];
            const i = e ? function(e) {
                return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, ((e, t, n) => t.toUpperCase() + n))
            }(o) : String(o).trim();
            i !== o && delete t[o], t[i] = Zb(r), n[i] = !0
        })), this
    }
    concat(...e) {
        return this.constructor.concat(this, ...e)
    }
    toJSON(e) {
        const t = Object.create(null);
        return Rb.forEach(this, ((n, r) => {
            null != n && !1 !== n && (t[r] = e && Rb.isArray(n) ? n.join(", ") : n)
        })), t
    } [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }
    toString() {
        return Object.entries(this.toJSON()).map((([e, t]) => e + ": " + t)).join("\n")
    }
    get[Symbol.toStringTag]() {
        return "AxiosHeaders"
    }
    static from(e) {
        return e instanceof this ? e : new this(e)
    }
    static concat(e, ...t) {
        const n = new this(e);
        return t.forEach((e => n.set(e))), n
    }
    static accessor(e) {
        const t = (this[Wb] = this[Wb] = {
                accessors: {}
            }).accessors,
            n = this.prototype;

        function r(e) {
            const r = Gb(e);
            t[r] || (! function(e, t) {
                const n = Rb.toCamelCase(" " + t);
                ["get", "set", "has"].forEach((r => {
                    Object.defineProperty(e, r + n, {
                        value: function(e, n, o) {
                            return this[r].call(this, t, e, n, o)
                        },
                        configurable: !0
                    })
                }))
            }(n, e), t[r] = !0)
        }
        return Rb.isArray(e) ? e.forEach(r) : r(e), this
    }
}
Jb.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]), Rb.freezeMethods(Jb.prototype), Rb.freezeMethods(Jb);
const Yb = Jb;

function ew(e, t) {
    const n = this || Kb,
        r = t || n,
        o = Yb.from(r.headers);
    let a = r.data;
    return Rb.forEach(e, (function(e) {
        a = e.call(n, a, o.normalize(), t ? t.status : void 0)
    })), o.normalize(), a
}

function tw(e) {
    return !(!e || !e.__CANCEL__)
}

function nw(e, t, n) {
    kb.call(this, null == e ? "canceled" : e, kb.ERR_CANCELED, t, n), this.name = "CanceledError"
}
Rb.inherits(nw, kb, {
    __CANCEL__: !0
});
const rw = Bb.isStandardBrowserEnv ? {
    write: function(e, t, n, r, o, a) {
        const i = [];
        i.push(e + "=" + encodeURIComponent(t)), Rb.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()), Rb.isString(r) && i.push("path=" + r), Rb.isString(o) && i.push("domain=" + o), !0 === a && i.push("secure"), document.cookie = i.join("; ")
    },
    read: function(e) {
        const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
        return t ? decodeURIComponent(t[3]) : null
    },
    remove: function(e) {
        this.write(e, "", Date.now() - 864e5)
    }
} : {
    write: function() {},
    read: function() {
        return null
    },
    remove: function() {}
};

function ow(e, t) {
    return e && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t) ? function(e, t) {
        return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
    }(e, t) : t
}
const aw = Bb.isStandardBrowserEnv ? function() {
    const e = /(msie|trident)/i.test(navigator.userAgent),
        t = document.createElement("a");
    let n;

    function r(n) {
        let r = n;
        return e && (t.setAttribute("href", r), r = t.href), t.setAttribute("href", r), {
            href: t.href,
            protocol: t.protocol ? t.protocol.replace(/:$/, "") : "",
            host: t.host,
            search: t.search ? t.search.replace(/^\?/, "") : "",
            hash: t.hash ? t.hash.replace(/^#/, "") : "",
            hostname: t.hostname,
            port: t.port,
            pathname: "/" === t.pathname.charAt(0) ? t.pathname : "/" + t.pathname
        }
    }
    return n = r(window.location.href),
        function(e) {
            const t = Rb.isString(e) ? r(e) : e;
            return t.protocol === n.protocol && t.host === n.host
        }
}() : function() {
    return !0
};

function iw(e, t) {
    let n = 0;
    const r = function(e, t) {
        e = e || 10;
        const n = new Array(e),
            r = new Array(e);
        let o, a = 0,
            i = 0;
        return t = void 0 !== t ? t : 1e3,
            function(l) {
                const s = Date.now(),
                    u = r[i];
                o || (o = s), n[a] = l, r[a] = s;
                let c = i,
                    d = 0;
                for (; c !== a;) d += n[c++], c %= e;
                if (a = (a + 1) % e, a === i && (i = (i + 1) % e), s - o < t) return;
                const f = u && s - u;
                return f ? Math.round(1e3 * d / f) : void 0
            }
    }(50, 250);
    return o => {
        const a = o.loaded,
            i = o.lengthComputable ? o.total : void 0,
            l = a - n,
            s = r(l);
        n = a;
        const u = {
            loaded: a,
            total: i,
            progress: i ? a / i : void 0,
            bytes: l,
            rate: s || void 0,
            estimated: s && i && a <= i ? (i - a) / s : void 0,
            event: o
        };
        u[t ? "download" : "upload"] = !0, e(u)
    }
}
const lw = {
    http: null,
    xhr: "undefined" != typeof XMLHttpRequest && function(e) {
        return new Promise((function(t, n) {
            let r = e.data;
            const o = Yb.from(e.headers).normalize(),
                a = e.responseType;
            let i;

            function l() {
                e.cancelToken && e.cancelToken.unsubscribe(i), e.signal && e.signal.removeEventListener("abort", i)
            }
            Rb.isFormData(r) && (Bb.isStandardBrowserEnv || Bb.isStandardBrowserWebWorkerEnv ? o.setContentType(!1) : o.setContentType("multipart/form-data;", !1));
            let s = new XMLHttpRequest;
            if (e.auth) {
                const t = e.auth.username || "",
                    n = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
                o.set("Authorization", "Basic " + btoa(t + ":" + n))
            }
            const u = ow(e.baseURL, e.url);

            function c() {
                if (!s) return;
                const r = Yb.from("getAllResponseHeaders" in s && s.getAllResponseHeaders());
                ! function(e, t, n) {
                    const r = n.config.validateStatus;
                    n.status && r && !r(n.status) ? t(new kb("Request failed with status code " + n.status, [kb.ERR_BAD_REQUEST, kb.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4], n.config, n.request, n)) : e(n)
                }((function(e) {
                    t(e), l()
                }), (function(e) {
                    n(e), l()
                }), {
                    data: a && "text" !== a && "json" !== a ? s.response : s.responseText,
                    status: s.status,
                    statusText: s.statusText,
                    headers: r,
                    config: e,
                    request: s
                }), s = null
            }
            if (s.open(e.method.toUpperCase(), zb(u, e.params, e.paramsSerializer), !0), s.timeout = e.timeout, "onloadend" in s ? s.onloadend = c : s.onreadystatechange = function() {
                    s && 4 === s.readyState && (0 !== s.status || s.responseURL && 0 === s.responseURL.indexOf("file:")) && setTimeout(c)
                }, s.onabort = function() {
                    s && (n(new kb("Request aborted", kb.ECONNABORTED, e, s)), s = null)
                }, s.onerror = function() {
                    n(new kb("Network Error", kb.ERR_NETWORK, e, s)), s = null
                }, s.ontimeout = function() {
                    let t = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
                    const r = e.transitional || Vb;
                    e.timeoutErrorMessage && (t = e.timeoutErrorMessage), n(new kb(t, r.clarifyTimeoutError ? kb.ETIMEDOUT : kb.ECONNABORTED, e, s)), s = null
                }, Bb.isStandardBrowserEnv) {
                const t = (e.withCredentials || aw(u)) && e.xsrfCookieName && rw.read(e.xsrfCookieName);
                t && o.set(e.xsrfHeaderName, t)
            }
            void 0 === r && o.setContentType(null), "setRequestHeader" in s && Rb.forEach(o.toJSON(), (function(e, t) {
                s.setRequestHeader(t, e)
            })), Rb.isUndefined(e.withCredentials) || (s.withCredentials = !!e.withCredentials), a && "json" !== a && (s.responseType = e.responseType), "function" == typeof e.onDownloadProgress && s.addEventListener("progress", iw(e.onDownloadProgress, !0)), "function" == typeof e.onUploadProgress && s.upload && s.upload.addEventListener("progress", iw(e.onUploadProgress)), (e.cancelToken || e.signal) && (i = t => {
                s && (n(!t || t.type ? new nw(null, e, s) : t), s.abort(), s = null)
            }, e.cancelToken && e.cancelToken.subscribe(i), e.signal && (e.signal.aborted ? i() : e.signal.addEventListener("abort", i)));
            const d = function(e) {
                const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
                return t && t[1] || ""
            }(u);
            d && -1 === Bb.protocols.indexOf(d) ? n(new kb("Unsupported protocol " + d + ":", kb.ERR_BAD_REQUEST, e)) : s.send(r || null)
        }))
    }
};
Rb.forEach(lw, ((e, t) => {
    if (e) {
        try {
            Object.defineProperty(e, "name", {
                value: t
            })
        } catch (pE) {}
        Object.defineProperty(e, "adapterName", {
            value: t
        })
    }
}));
const sw = e => {
    e = Rb.isArray(e) ? e : [e];
    const {
        length: t
    } = e;
    let n, r;
    for (let o = 0; o < t && (n = e[o], !(r = Rb.isString(n) ? lw[n.toLowerCase()] : n)); o++);
    if (!r) {
        if (!1 === r) throw new kb(`Adapter ${n} is not supported by the environment`, "ERR_NOT_SUPPORT");
        throw new Error(Rb.hasOwnProp(lw, n) ? `Adapter '${n}' is not available in the build` : `Unknown adapter '${n}'`)
    }
    if (!Rb.isFunction(r)) throw new TypeError("adapter is not a function");
    return r
};

function uw(e) {
    if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new nw(null, e)
}

function cw(e) {
    uw(e), e.headers = Yb.from(e.headers), e.data = ew.call(e, e.transformRequest), -1 !== ["post", "put", "patch"].indexOf(e.method) && e.headers.setContentType("application/x-www-form-urlencoded", !1);
    return sw(e.adapter || Kb.adapter)(e).then((function(t) {
        return uw(e), t.data = ew.call(e, e.transformResponse, t), t.headers = Yb.from(t.headers), t
    }), (function(t) {
        return tw(t) || (uw(e), t && t.response && (t.response.data = ew.call(e, e.transformResponse, t.response), t.response.headers = Yb.from(t.response.headers))), Promise.reject(t)
    }))
}
const dw = e => e instanceof Yb ? e.toJSON() : e;

function fw(e, t) {
    t = t || {};
    const n = {};

    function r(e, t, n) {
        return Rb.isPlainObject(e) && Rb.isPlainObject(t) ? Rb.merge.call({
            caseless: n
        }, e, t) : Rb.isPlainObject(t) ? Rb.merge({}, t) : Rb.isArray(t) ? t.slice() : t
    }

    function o(e, t, n) {
        return Rb.isUndefined(t) ? Rb.isUndefined(e) ? void 0 : r(void 0, e, n) : r(e, t, n)
    }

    function a(e, t) {
        if (!Rb.isUndefined(t)) return r(void 0, t)
    }

    function i(e, t) {
        return Rb.isUndefined(t) ? Rb.isUndefined(e) ? void 0 : r(void 0, e) : r(void 0, t)
    }

    function l(n, o, a) {
        return a in t ? r(n, o) : a in e ? r(void 0, n) : void 0
    }
    const s = {
        url: a,
        method: a,
        data: a,
        baseURL: i,
        transformRequest: i,
        transformResponse: i,
        paramsSerializer: i,
        timeout: i,
        timeoutMessage: i,
        withCredentials: i,
        adapter: i,
        responseType: i,
        xsrfCookieName: i,
        xsrfHeaderName: i,
        onUploadProgress: i,
        onDownloadProgress: i,
        decompress: i,
        maxContentLength: i,
        maxBodyLength: i,
        beforeRedirect: i,
        transport: i,
        httpAgent: i,
        httpsAgent: i,
        cancelToken: i,
        socketPath: i,
        responseEncoding: i,
        validateStatus: l,
        headers: (e, t) => o(dw(e), dw(t), !0)
    };
    return Rb.forEach(Object.keys(Object.assign({}, e, t)), (function(r) {
        const a = s[r] || o,
            i = a(e[r], t[r], r);
        Rb.isUndefined(i) && a !== l || (n[r] = i)
    })), n
}
const pw = "1.4.0",
    hw = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(((e, t) => {
    hw[e] = function(n) {
        return typeof n === e || "a" + (t < 1 ? "n " : " ") + e
    }
}));
const mw = {};
hw.transitional = function(e, t, n) {
    function r(e, t) {
        return "[Axios v1.4.0] Transitional option '" + e + "'" + t + (n ? ". " + n : "")
    }
    return (n, o, a) => {
        if (!1 === e) throw new kb(r(o, " has been removed" + (t ? " in " + t : "")), kb.ERR_DEPRECATED);
        return t && !mw[o] && (mw[o] = !0, console.warn(r(o, " has been deprecated since v" + t + " and will be removed in the near future"))), !e || e(n, o, a)
    }
};
const gw = {
        assertOptions: function(e, t, n) {
            if ("object" != typeof e) throw new kb("options must be an object", kb.ERR_BAD_OPTION_VALUE);
            const r = Object.keys(e);
            let o = r.length;
            for (; o-- > 0;) {
                const a = r[o],
                    i = t[a];
                if (i) {
                    const t = e[a],
                        n = void 0 === t || i(t, a, e);
                    if (!0 !== n) throw new kb("option " + a + " must be " + n, kb.ERR_BAD_OPTION_VALUE)
                } else if (!0 !== n) throw new kb("Unknown option " + a, kb.ERR_BAD_OPTION)
            }
        },
        validators: hw
    },
    vw = gw.validators;
class yw {
    constructor(e) {
        this.defaults = e, this.interceptors = {
            request: new Ub,
            response: new Ub
        }
    }
    request(e, t) {
        "string" == typeof e ? (t = t || {}).url = e : t = e || {}, t = fw(this.defaults, t);
        const {
            transitional: n,
            paramsSerializer: r,
            headers: o
        } = t;
        let a;
        void 0 !== n && gw.assertOptions(n, {
            silentJSONParsing: vw.transitional(vw.boolean),
            forcedJSONParsing: vw.transitional(vw.boolean),
            clarifyTimeoutError: vw.transitional(vw.boolean)
        }, !1), null != r && (Rb.isFunction(r) ? t.paramsSerializer = {
            serialize: r
        } : gw.assertOptions(r, {
            encode: vw.function,
            serialize: vw.function
        }, !0)), t.method = (t.method || this.defaults.method || "get").toLowerCase(), a = o && Rb.merge(o.common, o[t.method]), a && Rb.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (e => {
            delete o[e]
        })), t.headers = Yb.concat(a, o);
        const i = [];
        let l = !0;
        this.interceptors.request.forEach((function(e) {
            "function" == typeof e.runWhen && !1 === e.runWhen(t) || (l = l && e.synchronous, i.unshift(e.fulfilled, e.rejected))
        }));
        const s = [];
        let u;
        this.interceptors.response.forEach((function(e) {
            s.push(e.fulfilled, e.rejected)
        }));
        let c, d = 0;
        if (!l) {
            const e = [cw.bind(this), void 0];
            for (e.unshift.apply(e, i), e.push.apply(e, s), c = e.length, u = Promise.resolve(t); d < c;) u = u.then(e[d++], e[d++]);
            return u
        }
        c = i.length;
        let f = t;
        for (d = 0; d < c;) {
            const e = i[d++],
                t = i[d++];
            try {
                f = e(f)
            } catch (p) {
                t.call(this, p);
                break
            }
        }
        try {
            u = cw.call(this, f)
        } catch (p) {
            return Promise.reject(p)
        }
        for (d = 0, c = s.length; d < c;) u = u.then(s[d++], s[d++]);
        return u
    }
    getUri(e) {
        return zb(ow((e = fw(this.defaults, e)).baseURL, e.url), e.params, e.paramsSerializer)
    }
}
Rb.forEach(["delete", "get", "head", "options"], (function(e) {
    yw.prototype[e] = function(t, n) {
        return this.request(fw(n || {}, {
            method: e,
            url: t,
            data: (n || {}).data
        }))
    }
})), Rb.forEach(["post", "put", "patch"], (function(e) {
    function t(t) {
        return function(n, r, o) {
            return this.request(fw(o || {}, {
                method: e,
                headers: t ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url: n,
                data: r
            }))
        }
    }
    yw.prototype[e] = t(), yw.prototype[e + "Form"] = t(!0)
}));
const bw = yw;
class ww {
    constructor(e) {
        if ("function" != typeof e) throw new TypeError("executor must be a function.");
        let t;
        this.promise = new Promise((function(e) {
            t = e
        }));
        const n = this;
        this.promise.then((e => {
            if (!n._listeners) return;
            let t = n._listeners.length;
            for (; t-- > 0;) n._listeners[t](e);
            n._listeners = null
        })), this.promise.then = e => {
            let t;
            const r = new Promise((e => {
                n.subscribe(e), t = e
            })).then(e);
            return r.cancel = function() {
                n.unsubscribe(t)
            }, r
        }, e((function(e, r, o) {
            n.reason || (n.reason = new nw(e, r, o), t(n.reason))
        }))
    }
    throwIfRequested() {
        if (this.reason) throw this.reason
    }
    subscribe(e) {
        this.reason ? e(this.reason) : this._listeners ? this._listeners.push(e) : this._listeners = [e]
    }
    unsubscribe(e) {
        if (!this._listeners) return;
        const t = this._listeners.indexOf(e); - 1 !== t && this._listeners.splice(t, 1)
    }
    static source() {
        let e;
        return {
            token: new ww((function(t) {
                e = t
            })),
            cancel: e
        }
    }
}
const Cw = ww;
const xw = {
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
Object.entries(xw).forEach((([e, t]) => {
    xw[t] = e
}));
const Sw = xw;
const Ew = function e(t) {
    const n = new bw(t),
        r = Ky(bw.prototype.request, n);
    return Rb.extend(r, bw.prototype, n, {
        allOwnKeys: !0
    }), Rb.extend(r, n, null, {
        allOwnKeys: !0
    }), r.create = function(n) {
        return e(fw(t, n))
    }, r
}(Kb);
Ew.Axios = bw, Ew.CanceledError = nw, Ew.CancelToken = Cw, Ew.isCancel = tw, Ew.VERSION = pw, Ew.toFormData = Mb, Ew.AxiosError = kb, Ew.Cancel = Ew.CanceledError, Ew.all = function(e) {
    return Promise.all(e)
}, Ew.spread = function(e) {
    return function(t) {
        return e.apply(null, t)
    }
}, Ew.isAxiosError = function(e) {
    return Rb.isObject(e) && !0 === e.isAxiosError
}, Ew.mergeConfig = fw, Ew.AxiosHeaders = Yb, Ew.formToJSON = e => Hb(Rb.isHTMLForm(e) ? new FormData(e) : e), Ew.HttpStatusCode = Sw, Ew.default = Ew;
const _w = Ew.create({
    baseURL: "https://redbear.online/files/stores/backend",
    withCredentials: !0
});
_w.interceptors.request.use((e => e)), _w.interceptors.response.use((e => (e.status, e)));
const Rw = async () => {
    const {
        data: e
    } = await _w.post("/store.users.php", {
        action: "info"
    });
    return e
}, kw = {
    auth: ["auth-gamestores"]
}, Ow = e => df({
    queryKey: [...kw.auth],
    queryFn: Rw,
    ...e
}), Nw = async e => {
    const {
        data: t
    } = await _w.post("/store.shop.php", {
        action: "buy",
        ...e
    });
    return t
}, jw = {
    buy: ["buy"]
}, Pw = e => cf({
    mutationKey: [...jw.buy],
    mutationFn: Nw,
    ...e
}), Lw = ({
    type: e = "primary",
    title: t,
    icon: n,
    className: r,
    active: o = !1,
    ...a
}) => {
    const i = {
        [e]: e,
        [r]: !!r,
        active: o
    };
    return Q.jsxs("button", {
        ...a,
        className: Oh("button", i),
        children: [n, t]
    })
}, Tw = ({
    onChange: e,
    ...t
}) => Q.jsx("input", {
    className: "input",
    onChange: ({
        target: {
            value: t
        }
    }) => e(t),
    ...t
}), Mw = [{
    link: "https://vk.com/k1ss_lyak",
    icon: Q.jsx("svg", {
        width: "32",
        height: "32",
        viewBox: "0 0 32 32",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: Q.jsx("path", {
            d: "M28.2589 21.3664C28.2294 21.3028 28.2019 21.25 28.1763 21.2077C27.7532 20.4456 26.9445 19.5102 25.751 18.4012L25.7258 18.3758L25.7131 18.3634L25.7004 18.3506H25.6876C25.1458 17.8342 24.8028 17.487 24.6592 17.3092C24.3963 16.9706 24.3374 16.6278 24.4811 16.2805C24.5826 16.0181 24.9638 15.464 25.6239 14.6173C25.9711 14.1686 26.2461 13.809 26.4492 13.538C27.9138 11.5909 28.5488 10.3467 28.354 9.80486L28.2783 9.67823C28.2275 9.602 28.0963 9.53227 27.8849 9.46867C27.673 9.4052 27.4022 9.39471 27.072 9.437L23.4151 9.46226C23.3558 9.44127 23.2712 9.44323 23.161 9.46867C23.0509 9.49411 22.9959 9.50687 22.9959 9.50687L22.9322 9.53867L22.8817 9.57688C22.8394 9.60214 22.7928 9.64657 22.742 9.71008C22.6914 9.77337 22.6491 9.84764 22.6153 9.93228C22.2172 10.9566 21.7645 11.9089 21.2565 12.7893C20.9432 13.3142 20.6556 13.7691 20.3929 14.1543C20.1305 14.5394 19.9104 14.8231 19.7328 15.005C19.5549 15.187 19.3943 15.3328 19.2501 15.443C19.1061 15.5532 18.9962 15.5998 18.9202 15.5827C18.8439 15.5657 18.7721 15.5488 18.7041 15.5319C18.5856 15.4557 18.4903 15.352 18.4185 15.2208C18.3464 15.0896 18.2978 14.9245 18.2724 14.7255C18.2472 14.5265 18.2322 14.3552 18.2279 14.2113C18.224 14.0675 18.2258 13.8641 18.2344 13.6017C18.2432 13.3391 18.2472 13.1615 18.2472 13.0684C18.2472 12.7467 18.2534 12.3975 18.266 12.0208C18.2788 11.6441 18.2892 11.3456 18.2979 11.1257C18.3065 10.9056 18.3105 10.6727 18.3105 10.4272C18.3105 10.1817 18.2955 9.9892 18.266 9.84946C18.2368 9.7099 18.1921 9.57443 18.133 9.4431C18.0737 9.31189 17.9868 9.2104 17.8727 9.13835C17.7585 9.06639 17.6164 9.00929 17.4474 8.96686C16.9987 8.86532 16.4273 8.81039 15.733 8.80186C14.1585 8.78496 13.1469 8.88662 12.6982 9.10673C12.5204 9.19973 12.3596 9.32679 12.2157 9.48753C12.0633 9.67383 12.0421 9.7755 12.1521 9.79222C12.6601 9.86832 13.0197 10.0504 13.2314 10.3382L13.3076 10.4907C13.367 10.6007 13.4262 10.7955 13.4855 11.0748C13.5447 11.3541 13.5829 11.6631 13.5997 12.0015C13.642 12.6196 13.642 13.1487 13.5997 13.5888C13.5573 14.0291 13.5173 14.3719 13.4791 14.6174C13.4409 14.8629 13.3838 15.0618 13.3076 15.2141C13.2314 15.3665 13.1806 15.4596 13.1552 15.4934C13.1298 15.5272 13.1086 15.5485 13.0918 15.5569C12.9818 15.5991 12.8673 15.6205 12.7489 15.6205C12.6303 15.6205 12.4864 15.5612 12.3172 15.4426C12.1479 15.3241 11.9723 15.1612 11.7903 14.9538C11.6082 14.7463 11.4029 14.4564 11.1743 14.0839C10.9458 13.7115 10.7088 13.2713 10.4633 12.7634L10.2602 12.3951C10.1332 12.1581 9.95974 11.8131 9.73963 11.3603C9.51939 10.9073 9.32472 10.4691 9.15549 10.0459C9.08785 9.8681 8.98622 9.73276 8.8508 9.63963L8.78724 9.60143C8.74499 9.56763 8.67717 9.53173 8.58412 9.49349C8.49095 9.45528 8.39373 9.42788 8.29206 9.41103L4.81282 9.43629C4.45729 9.43629 4.21606 9.51683 4.08904 9.6777L4.0382 9.7538C4.01281 9.79618 4 9.86387 4 9.95705C4 10.0502 4.0254 10.1645 4.07623 10.2998C4.58413 11.4935 5.13647 12.6448 5.73323 13.7537C6.33 14.8626 6.84858 15.7559 7.28866 16.4327C7.72883 17.11 8.17749 17.7493 8.63465 18.3501C9.09181 18.9512 9.39441 19.3364 9.54247 19.5056C9.69071 19.6752 9.80714 19.8019 9.89178 19.8866L10.2093 20.1913C10.4124 20.3945 10.7108 20.6378 11.1044 20.9214C11.4982 21.2051 11.9341 21.4844 12.4124 21.7597C12.8907 22.0346 13.4472 22.259 14.0822 22.4325C14.7171 22.6061 15.335 22.6758 15.9361 22.6422H17.3964C17.6926 22.6166 17.9169 22.5235 18.0694 22.3628L18.12 22.2991C18.1539 22.2486 18.1857 22.1701 18.2151 22.0645C18.2448 21.9587 18.2596 21.8421 18.2596 21.7153C18.2509 21.3514 18.2786 21.0234 18.3419 20.7313C18.4052 20.4394 18.4774 20.2193 18.558 20.0711C18.6387 19.923 18.7297 19.798 18.8309 19.6967C18.9324 19.5951 19.0047 19.5336 19.0472 19.5125C19.0893 19.4911 19.123 19.4767 19.1484 19.468C19.3516 19.4003 19.5907 19.4659 19.866 19.665C20.1412 19.8639 20.3993 20.1096 20.6407 20.4015C20.882 20.6937 21.1719 21.0215 21.5104 21.3855C21.8492 21.7495 22.1454 22.0202 22.3993 22.1982L22.6531 22.3506C22.8227 22.4522 23.0428 22.5454 23.3137 22.63C23.5842 22.7146 23.8211 22.7358 24.0246 22.6935L27.2751 22.6428C27.5966 22.6428 27.8468 22.5895 28.0243 22.4839C28.2021 22.3781 28.3077 22.2615 28.3418 22.1347C28.3758 22.0078 28.3776 21.8638 28.3482 21.7028C28.3181 21.5422 28.2885 21.4299 28.2589 21.3664Z",
            fill: "#6F7EAE"
        })
    })
}, {
    link: "https://t.me/dream_rust_team",
    icon: Q.jsx("svg", {
        width: "32",
        height: "32",
        viewBox: "0 0 32 32",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: Q.jsx("path", {
            d: "M26.7614 11.0221C27.3777 12.4918 27.7096 14.0088 27.7096 15.6207C27.7096 17.2325 27.3777 18.7495 26.7614 20.2192C26.1451 21.6888 25.2918 22.9214 24.2488 24.0118C23.2059 25.0547 21.9259 25.9081 20.4562 26.5244C18.9866 27.1406 17.4696 27.4725 15.8577 27.4725C14.2459 27.4725 12.7288 27.1406 11.2592 26.5244C9.78956 25.9081 8.55697 25.0547 7.4666 24.0118C6.42364 22.9688 5.5703 21.6888 4.95401 20.2192C4.33771 18.7495 4.00586 17.2325 4.00586 15.6207C4.00586 14.0088 4.33771 12.4918 4.95401 11.0221C5.5703 9.5525 6.42364 8.31991 7.4666 7.22954C8.50956 6.18658 9.78956 5.33324 11.2592 4.71695C12.7288 4.10065 14.2459 3.7688 15.8577 3.7688C17.4696 3.7688 18.9866 4.10065 20.4562 4.71695C21.9259 5.33324 23.1585 6.18658 24.2488 7.22954C25.2918 8.31991 26.0977 9.59991 26.7614 11.0221ZM19.6977 21.0725L21.6414 11.9229C21.7362 11.5436 21.6888 11.2592 21.4992 11.0695C21.3096 10.8799 21.1199 10.8799 20.8355 10.9747L9.4103 15.3836C9.17327 15.4784 8.98364 15.5732 8.88882 15.7155C8.79401 15.8577 8.79401 15.9525 8.84141 16.0473C8.88882 16.1421 9.03104 16.2369 9.26808 16.2844L12.2073 17.1851L18.9866 12.9184C19.1762 12.7762 19.3185 12.7762 19.4133 12.8236C19.4607 12.871 19.4607 12.9184 19.3659 13.0132L13.8666 18.0384L13.6296 21.0725C13.8192 21.0725 14.0088 20.9777 14.2459 20.7881L15.6681 19.4132L18.6073 21.594C19.2236 21.9258 19.5555 21.7362 19.6977 21.0725Z",
            fill: "#6F7EAE"
        })
    })
}], Fw = () => Q.jsx("footer", {
    children: Q.jsxs(Hg, {
        className: "footer",
        children: [Q.jsx("img", {
            src: "https://sun9-80.userapi.com/impg/709pOCufAMDstABtxntv2TP1OEfEGxq43iYzIQ/1FU-cYI0RyQ.jpg?size=1080x1080&quality=95&sign=e52e868d7ceec8be9036aa051133a1fc&type=album",
            alt: "Dream Rust Label",
            className: "navbar-brand"
        }), Q.jsx("a", {
            href: "https://vk.com/k1ss_lyak",
            className: "footer__link",
            children: "Контакты"
        }), Q.jsx("a", {
            href: "https://redbear.online/agreement",
            className: "footer__link",
            children: "Пользовательское соглашение"
        }), Q.jsx("a", {
            href: "https://redbear.online/privacy",
            className: "footer__link",
            children: "Политика конфиденциальности"
        }), Q.jsxs("div", {
            className: "footer__link banner",
            children: ["Сайт создан при поддержке", " ", Q.jsx("a", {
                href: "https://gamestores.app",
                target: "_blank",
                title: "GameStores",
                rel: "noreferrer",
                children: "GameStores"
            })]
        }), Q.jsxs("div", {
            className: "d-flex media-links align-items-center footer__link",
            children: ["Мы в соцсетях:", Mw.map((({
                link: e,
                icon: t
            }, n) => Q.jsx("a", {
                href: e,
                children: t
            }, `media-link-${n}`)))]
        })]
    })
}), Aw = e => {
    let t;
    const n = new Set,
        r = (e, r) => {
            const o = "function" == typeof e ? e(t) : e;
            if (!Object.is(o, t)) {
                const e = t;
                t = (null != r ? r : "object" != typeof o) ? o : Object.assign({}, t, o), n.forEach((n => n(t, e)))
            }
        },
        o = () => t,
        a = {
            setState: r,
            getState: o,
            subscribe: e => (n.add(e), () => n.delete(e)),
            destroy: () => {
                "production" !== ({
                    BASE_URL: "/",
                    MODE: "production",
                    DEV: !1,
                    PROD: !0,
                    SSR: !1
                } && "production") && console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."), n.clear()
            }
        };
    return t = e(r, o, a), a
};
var Dw = {
        exports: {}
    },
    Iw = {},
    zw = {
        exports: {}
    },
    Uw = {},
    Vw = I;
var Bw = "function" == typeof Object.is ? Object.is : function(e, t) {
        return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
    },
    Hw = Vw.useState,
    $w = Vw.useEffect,
    qw = Vw.useLayoutEffect,
    Kw = Vw.useDebugValue;

function Qw(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Bw(e, n)
    } catch (r) {
        return !0
    }
}
var Ww = "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function(e, t) {
    return t()
} : function(e, t) {
    var n = t(),
        r = Hw({
            inst: {
                value: n,
                getSnapshot: t
            }
        }),
        o = r[0].inst,
        a = r[1];
    return qw((function() {
        o.value = n, o.getSnapshot = t, Qw(o) && a({
            inst: o
        })
    }), [e, n, t]), $w((function() {
        return Qw(o) && a({
            inst: o
        }), e((function() {
            Qw(o) && a({
                inst: o
            })
        }))
    }), [e]), Kw(n), n
};
Uw.useSyncExternalStore = void 0 !== Vw.useSyncExternalStore ? Vw.useSyncExternalStore : Ww, zw.exports = Uw;
var Gw = zw.exports,
    Zw = I,
    Xw = Gw;
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jw = "function" == typeof Object.is ? Object.is : function(e, t) {
        return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
    },
    Yw = Xw.useSyncExternalStore,
    eC = Zw.useRef,
    tC = Zw.useEffect,
    nC = Zw.useMemo,
    rC = Zw.useDebugValue;
Iw.useSyncExternalStoreWithSelector = function(e, t, n, r, o) {
    var a = eC(null);
    if (null === a.current) {
        var i = {
            hasValue: !1,
            value: null
        };
        a.current = i
    } else i = a.current;
    a = nC((function() {
        function e(e) {
            if (!s) {
                if (s = !0, a = e, e = r(e), void 0 !== o && i.hasValue) {
                    var t = i.value;
                    if (o(t, e)) return l = t
                }
                return l = e
            }
            if (t = l, Jw(a, e)) return t;
            var n = r(e);
            return void 0 !== o && o(t, n) ? t : (a = e, l = n)
        }
        var a, l, s = !1,
            u = void 0 === n ? null : n;
        return [function() {
            return e(t())
        }, null === u ? void 0 : function() {
            return e(u())
        }]
    }), [t, n, r, o]);
    var l = Yw(e, a[0], a[1]);
    return tC((function() {
        i.hasValue = !0, i.value = l
    }), [l]), rC(l), l
}, Dw.exports = Iw;
const oC = e(Dw.exports),
    {
        useSyncExternalStoreWithSelector: aC
    } = oC;
const iC = e => {
        "production" !== ({
            BASE_URL: "/",
            MODE: "production",
            DEV: !1,
            PROD: !0,
            SSR: !1
        } && "production") && "function" != typeof e && console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");
        const t = "function" == typeof e ? (e => e ? Aw(e) : Aw)(e) : e,
            n = (e, n) => function(e, t = e.getState, n) {
                const r = aC(e.subscribe, e.getState, e.getServerState || e.getState, t, n);
                return I.useDebugValue(r), r
            }(t, e, n);
        return Object.assign(n, t), n
    },
    lC = e => e ? iC(e) : iC;

function sC(e, t) {
    let n;
    try {
        n = e()
    } catch (pE) {
        return
    }
    return {
        getItem: e => {
            var r;
            const o = e => null === e ? null : JSON.parse(e, null == t ? void 0 : t.reviver),
                a = null != (r = n.getItem(e)) ? r : null;
            return a instanceof Promise ? a.then(o) : o(a)
        },
        setItem: (e, r) => n.setItem(e, JSON.stringify(r, null == t ? void 0 : t.replacer)),
        removeItem: e => n.removeItem(e)
    }
}
const uC = e => t => {
        try {
            const n = e(t);
            return n instanceof Promise ? n : {
                then: e => uC(e)(n),
                catch (e) {
                    return this
                }
            }
        } catch (pE) {
            return {
                then(e) {
                    return this
                },
                catch: t => uC(t)(pE)
            }
        }
    },
    cC = (e, t) => "getStorage" in t || "serialize" in t || "deserialize" in t ? ("production" !== ({
        BASE_URL: "/",
        MODE: "production",
        DEV: !1,
        PROD: !0,
        SSR: !1
    } && "production") && console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."), ((e, t) => (n, r, o) => {
        let a = {
                getStorage: () => localStorage,
                serialize: JSON.stringify,
                deserialize: JSON.parse,
                partialize: e => e,
                version: 0,
                merge: (e, t) => ({
                    ...t,
                    ...e
                }),
                ...t
            },
            i = !1;
        const l = new Set,
            s = new Set;
        let u;
        try {
            u = a.getStorage()
        } catch (pE) {}
        if (!u) return e(((...e) => {
            console.warn(`[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`), n(...e)
        }), r, o);
        const c = uC(a.serialize),
            d = () => {
                const e = a.partialize({
                    ...r()
                });
                let t;
                const n = c({
                    state: e,
                    version: a.version
                }).then((e => u.setItem(a.name, e))).catch((e => {
                    t = e
                }));
                if (t) throw t;
                return n
            },
            f = o.setState;
        o.setState = (e, t) => {
            f(e, t), d()
        };
        const p = e(((...e) => {
            n(...e), d()
        }), r, o);
        let h;
        const m = () => {
            var e;
            if (!u) return;
            i = !1, l.forEach((e => e(r())));
            const t = (null == (e = a.onRehydrateStorage) ? void 0 : e.call(a, r())) || void 0;
            return uC(u.getItem.bind(u))(a.name).then((e => {
                if (e) return a.deserialize(e)
            })).then((e => {
                if (e) {
                    if ("number" != typeof e.version || e.version === a.version) return e.state;
                    if (a.migrate) return a.migrate(e.state, e.version);
                    console.error("State loaded from storage couldn't be migrated since no migrate function was provided")
                }
            })).then((e => {
                var t;
                return h = a.merge(e, null != (t = r()) ? t : p), n(h, !0), d()
            })).then((() => {
                null == t || t(h, void 0), i = !0, s.forEach((e => e(h)))
            })).catch((e => {
                null == t || t(void 0, e)
            }))
        };
        return o.persist = {
            setOptions: e => {
                a = {
                    ...a,
                    ...e
                }, e.getStorage && (u = e.getStorage())
            },
            clearStorage: () => {
                null == u || u.removeItem(a.name)
            },
            getOptions: () => a,
            rehydrate: () => m(),
            hasHydrated: () => i,
            onHydrate: e => (l.add(e), () => {
                l.delete(e)
            }),
            onFinishHydration: e => (s.add(e), () => {
                s.delete(e)
            })
        }, m(), h || p
    })(e, t)) : ((e, t) => (n, r, o) => {
        let a = {
                storage: sC((() => localStorage)),
                partialize: e => e,
                version: 0,
                merge: (e, t) => ({
                    ...t,
                    ...e
                }),
                ...t
            },
            i = !1;
        const l = new Set,
            s = new Set;
        let u = a.storage;
        if (!u) return e(((...e) => {
            console.warn(`[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`), n(...e)
        }), r, o);
        const c = () => {
                const e = a.partialize({
                    ...r()
                });
                return u.setItem(a.name, {
                    state: e,
                    version: a.version
                })
            },
            d = o.setState;
        o.setState = (e, t) => {
            d(e, t), c()
        };
        const f = e(((...e) => {
            n(...e), c()
        }), r, o);
        let p;
        const h = () => {
            var e, t;
            if (!u) return;
            i = !1, l.forEach((e => {
                var t;
                return e(null != (t = r()) ? t : f)
            }));
            const o = (null == (t = a.onRehydrateStorage) ? void 0 : t.call(a, null != (e = r()) ? e : f)) || void 0;
            return uC(u.getItem.bind(u))(a.name).then((e => {
                if (e) {
                    if ("number" != typeof e.version || e.version === a.version) return e.state;
                    if (a.migrate) return a.migrate(e.state, e.version);
                    console.error("State loaded from storage couldn't be migrated since no migrate function was provided")
                }
            })).then((e => {
                var t;
                return p = a.merge(e, null != (t = r()) ? t : f), n(p, !0), c()
            })).then((() => {
                null == o || o(p, void 0), p = r(), i = !0, s.forEach((e => e(p)))
            })).catch((e => {
                null == o || o(void 0, e)
            }))
        };
        return o.persist = {
            setOptions: e => {
                a = {
                    ...a,
                    ...e
                }, e.storage && (u = e.storage)
            },
            clearStorage: () => {
                null == u || u.removeItem(a.name)
            },
            getOptions: () => a,
            rehydrate: () => h(),
            hasHydrated: () => i,
            onHydrate: e => (l.add(e), () => {
                l.delete(e)
            }),
            onFinishHydration: e => (s.add(e), () => {
                s.delete(e)
            })
        }, a.skipHydration || h(), p || f
    })(e, t),
    dC = lC()(cC((e => ({
        cart: [],
        addItemToCart: (t, n) => {
            e((e => {
                const r = e.cart.findIndex((e => e.item.id === t.id));
                if (-1 !== r) {
                    const t = e.cart;
                    return t[r].count + n > 0 ? t[r].count += n : t[r].count = 0, {
                        cart: t.filter((e => e.count > 0))
                    }
                }
                return {
                    cart: [...e.cart, {
                        item: t,
                        count: n
                    }]
                }
            }))
        }
    })), {
        name: "cart-storage"
    })),
    fC = lC((e => ({
        products: [],
        categories: [],
        currentCategoryId: 0,
        currentProduct: null,
        isProductModalOpen: !1,
        isRewardModalOpen: !1,
        isRouletteModalOpen: !1,
        auth: {
            data: null,
            logged: !1,
            mess: "",
            result: ""
        },
        actions: {
            setProducts: t => {
                e({
                    products: t
                })
            },
            setCategories: t => {
                e({
                    categories: t
                })
            },
            setCurrentCategory: t => {
                e({
                    currentCategoryId: t
                })
            },
            toggleProductModal: t => {
                e((() => ({
                    isProductModalOpen: t
                })))
            },
            toggleRewardModal: t => {
                e((() => ({
                    isRewardModalOpen: t
                })))
            },
            toggleRouletteModal: t => {
                e((() => ({
                    isRouletteModalOpen: t
                })))
            },
            setCurrentProduct: t => {
                e({
                    currentProduct: t
                })
            },
            setAuth: t => {
                e({
                    auth: t
                })
            }
        }
    }))),
    pC = e => e.products,
    hC = e => e.categories,
    mC = e => e.actions,
    gC = e => e.currentCategoryId,
    vC = e => e.isProductModalOpen,
    yC = e => e.isRouletteModalOpen,
    bC = e => e.currentProduct,
    wC = e => e.cart,
    CC = e => e.addItemToCart,
    xC = e => e.auth.logged,
    SC = e => e.auth.data,
    EC = e => e.actions,
    _C = e => e.privilege,
    RC = e => e.currentPrivilege,
    kC = Q.jsxs("svg", {
        width: "18",
        height: "19",
        viewBox: "0 0 18 19",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [Q.jsx("path", {
            d: "M13.5 3.9375C13.5 2.28065 12.1569 0.9375 10.5 0.9375H3C1.34315 0.9375 0 2.28065 0 3.9375V11.4375C0 13.0944 1.34315 14.4375 3 14.4375V8.4375C3 5.95222 5.01472 3.9375 7.5 3.9375H13.5Z",
            fill: "#6F7EAE"
        }), Q.jsx("path", {
            d: "M15 5.4375C16.6569 5.4375 18 6.78065 18 8.4375V15.9375C18 17.5944 16.6569 18.9375 15 18.9375H7.5C5.84315 18.9375 4.5 17.5944 4.5 15.9375V8.4375C4.5 6.78065 5.84315 5.4375 7.5 5.4375H15Z",
            fill: "#6F7EAE"
        })]
    }),
    OC = Q.jsx("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: Q.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M2.25 12C2.25 6.61522 6.61522 2.25 12 2.25C17.3848 2.25 21.75 6.61522 21.75 12C21.75 17.3848 17.3848 21.75 12 21.75C6.61522 21.75 2.25 17.3848 2.25 12ZM13.6277 8.08328C12.7389 7.30557 11.2616 7.30557 10.3728 8.08328C10.0611 8.35604 9.58723 8.32445 9.31447 8.01272C9.04171 7.701 9.0733 7.22717 9.38503 6.95441C10.8394 5.68186 13.1611 5.68186 14.6154 6.95441C16.1285 8.27835 16.1285 10.4717 14.6154 11.7956C14.3588 12.0202 14.0761 12.2041 13.778 12.3484C13.1018 12.6756 12.7502 13.1222 12.7502 13.5V14.25C12.7502 14.6642 12.4144 15 12.0002 15C11.586 15 11.2502 14.6642 11.2502 14.25V13.5C11.2502 12.221 12.3095 11.3926 13.1246 10.9982C13.3073 10.9098 13.4765 10.799 13.6277 10.6667C14.4577 9.9404 14.4577 8.80959 13.6277 8.08328ZM12 18C12.4142 18 12.75 17.6642 12.75 17.25C12.75 16.8358 12.4142 16.5 12 16.5C11.5858 16.5 11.25 16.8358 11.25 17.25C11.25 17.6642 11.5858 18 12 18Z",
            fill: "white"
        })
    }),
    NC = Q.jsx("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: Q.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M16.5001 4.47819V4.70498C17.4548 4.79237 18.4017 4.90731 19.3398 5.04898C19.6871 5.10143 20.0332 5.15755 20.3781 5.2173C20.7863 5.28799 21.0598 5.67617 20.9891 6.0843C20.9184 6.49244 20.5302 6.76598 20.1221 6.69529C20.0525 6.68323 19.9829 6.67132 19.9131 6.65957L18.9077 19.7301C18.7875 21.2931 17.4842 22.5 15.9166 22.5H8.08369C6.51608 22.5 5.21276 21.2931 5.09253 19.7301L4.0871 6.65957C4.0174 6.67132 3.94774 6.68323 3.87813 6.69529C3.47 6.76598 3.08183 6.49244 3.01113 6.0843C2.94043 5.67617 3.21398 5.28799 3.62211 5.2173C3.96701 5.15755 4.31315 5.10143 4.66048 5.04898C5.59858 4.90731 6.5454 4.79237 7.50012 4.70498V4.47819C7.50012 2.91371 8.71265 1.57818 10.3156 1.52691C10.8749 1.50901 11.4365 1.5 12.0001 1.5C12.5638 1.5 13.1253 1.50901 13.6847 1.52691C15.2876 1.57818 16.5001 2.91371 16.5001 4.47819ZM10.3635 3.02614C10.9069 3.00876 11.4525 3 12.0001 3C12.5478 3 13.0934 3.00876 13.6367 3.02614C14.3913 3.05028 15.0001 3.68393 15.0001 4.47819V4.59082C14.0078 4.53056 13.0075 4.5 12.0001 4.5C10.9928 4.5 9.99249 4.53056 9.00012 4.59082V4.47819C9.00012 3.68393 9.6089 3.05028 10.3635 3.02614ZM10.0087 8.97118C9.9928 8.55727 9.64436 8.23463 9.23045 8.25055C8.81654 8.26647 8.49391 8.61492 8.50983 9.02882L8.85599 18.0288C8.8719 18.4427 9.22035 18.7654 9.63426 18.7494C10.0482 18.7335 10.3708 18.3851 10.3549 17.9712L10.0087 8.97118ZM15.4895 9.02882C15.5054 8.61492 15.1828 8.26647 14.7689 8.25055C14.355 8.23463 14.0065 8.55727 13.9906 8.97118L13.6444 17.9712C13.6285 18.3851 13.9512 18.7335 14.3651 18.7494C14.779 18.7654 15.1274 18.4427 15.1433 18.0288L15.4895 9.02882Z",
            fill: "white"
        })
    }),
    jC = Q.jsx("svg", {
        width: "24",
        height: "26",
        viewBox: "0 0 24 26",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: Q.jsx("path", {
            d: "M12.4285 2C6.93115 2 2.42768 6.27758 2 11.7132L7.60881 14.0534C8.08393 13.7251 8.65844 13.5339 9.27587 13.5339C9.33159 13.5339 9.38656 13.5354 9.44077 13.5384L11.9353 9.88954V9.83833C11.9353 7.6427 13.7055 5.85592 15.8816 5.85592C18.0577 5.85592 19.8279 7.6427 19.8279 9.83833C19.8279 12.034 18.0577 13.8215 15.8816 13.8215C15.8515 13.8215 15.8221 13.8207 15.792 13.82L12.2343 16.3808C12.2365 16.4283 12.238 16.4757 12.238 16.5224C12.238 18.1714 10.909 19.5124 9.27587 19.5124C7.84223 19.5124 6.64276 18.4793 6.3717 17.1119L2.35992 15.4381C3.6023 19.8708 7.63818 23.1206 12.4285 23.1206C18.2083 23.1206 22.8932 18.392 22.8932 12.5603C22.8932 6.72785 18.2083 2 12.4285 2ZM8.55785 18.0235L7.27254 17.4874C7.49994 17.9663 7.89449 18.3668 8.4178 18.5867C9.54875 19.0626 10.8529 18.5212 11.3242 17.3789C11.5524 16.8263 11.5539 16.2164 11.328 15.6622C11.1021 15.108 10.6752 14.6758 10.1278 14.4454C9.58338 14.2173 9.00059 14.2255 8.48857 14.4206L9.8168 14.9747C10.6511 15.3256 11.0456 16.2924 10.6978 17.1342C10.3506 17.976 9.39213 18.3744 8.55785 18.0235ZM18.5113 9.83841C18.5113 8.3754 17.3314 7.18422 15.8819 7.18422C14.4317 7.18422 13.2518 8.3754 13.2518 9.83841C13.2518 11.3014 14.4317 12.4918 15.8819 12.4918C17.3314 12.4918 18.5113 11.3014 18.5113 9.83841ZM13.9107 9.83389C13.9107 8.73306 14.7954 7.8408 15.8857 7.8408C16.9767 7.8408 17.8614 8.73306 17.8614 9.83389C17.8614 10.9347 16.9767 11.827 15.8857 11.827C14.7954 11.827 13.9107 10.9347 13.9107 9.83389Z",
            fill: "white"
        })
    }),
    PC = Q.jsx("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: Q.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M7.5 3.75C6.67157 3.75 6 4.42157 6 5.25L6 18.75C6 19.5784 6.67157 20.25 7.5 20.25H13.5C14.3284 20.25 15 19.5784 15 18.75V15C15 14.5858 15.3358 14.25 15.75 14.25C16.1642 14.25 16.5 14.5858 16.5 15V18.75C16.5 20.4069 15.1569 21.75 13.5 21.75H7.5C5.84315 21.75 4.5 20.4069 4.5 18.75L4.5 5.25C4.5 3.59315 5.84315 2.25 7.5 2.25L13.5 2.25C15.1569 2.25 16.5 3.59315 16.5 5.25V9C16.5 9.41421 16.1642 9.75 15.75 9.75C15.3358 9.75 15 9.41421 15 9V5.25C15 4.42157 14.3284 3.75 13.5 3.75L7.5 3.75ZM12.5303 8.46967C12.8232 8.76256 12.8232 9.23744 12.5303 9.53033L10.8107 11.25L21.75 11.25C22.1642 11.25 22.5 11.5858 22.5 12C22.5 12.4142 22.1642 12.75 21.75 12.75L10.8107 12.75L12.5303 14.4697C12.8232 14.7626 12.8232 15.2374 12.5303 15.5303C12.2374 15.8232 11.7626 15.8232 11.4697 15.5303L8.46967 12.5303C8.17678 12.2374 8.17678 11.7626 8.46967 11.4697L11.4697 8.46967C11.7626 8.17678 12.2374 8.17678 12.5303 8.46967Z",
            fill: "white"
        })
    }),
    LC = Q.jsx("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: Q.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M1.875 10C1.875 5.51269 5.51269 1.875 10 1.875C14.4873 1.875 18.125 5.51269 18.125 10C18.125 14.4873 14.4873 18.125 10 18.125C5.51269 18.125 1.875 14.4873 1.875 10ZM13.0086 8.48827C13.2092 8.20739 13.1442 7.81705 12.8633 7.61642C12.5824 7.41579 12.192 7.48084 11.9914 7.76173L9.29525 11.5364L7.94194 10.1831C7.69786 9.93898 7.30214 9.93898 7.05806 10.1831C6.81398 10.4271 6.81398 10.8229 7.05806 11.0669L8.93306 12.9419C9.06297 13.0719 9.24346 13.138 9.42655 13.1229C9.60964 13.1077 9.7768 13.0128 9.88358 12.8633L13.0086 8.48827Z",
            fill: "#00DD73"
        })
    }),
    TC = Q.jsx("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: Q.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M10 1.875C5.51269 1.875 1.875 5.51269 1.875 10C1.875 14.4873 5.51269 18.125 10 18.125C14.4873 18.125 18.125 14.4873 18.125 10C18.125 5.51269 14.4873 1.875 10 1.875ZM8.56694 7.68306C8.32286 7.43898 7.92714 7.43898 7.68306 7.68306C7.43898 7.92714 7.43898 8.32286 7.68306 8.56694L9.11612 10L7.68306 11.4331C7.43898 11.6771 7.43898 12.0729 7.68306 12.3169C7.92714 12.561 8.32286 12.561 8.56694 12.3169L10 10.8839L11.4331 12.3169C11.6771 12.561 12.0729 12.561 12.3169 12.3169C12.561 12.0729 12.561 11.6771 12.3169 11.4331L10.8839 10L12.3169 8.56694C12.561 8.32286 12.561 7.92714 12.3169 7.68306C12.0729 7.43898 11.6771 7.43898 11.4331 7.68306L10 9.11612L8.56694 7.68306Z",
            fill: "#FF5656"
        })
    }),
    MC = Q.jsxs("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [Q.jsx("path", {
            d: "M2.25 2.25C1.83579 2.25 1.5 2.58579 1.5 3C1.5 3.41421 1.83579 3.75 2.25 3.75H3.63568C3.80558 3.75 3.95425 3.86422 3.99803 4.02838L6.55576 13.6199C4.94178 14.0385 3.75 15.5051 3.75 17.25C3.75 17.6642 4.08579 18 4.5 18H20.25C20.6642 18 21 17.6642 21 17.25C21 16.8358 20.6642 16.5 20.25 16.5H5.37803C5.68691 15.6261 6.52034 15 7.5 15H18.7183C19.0051 15 19.2668 14.8364 19.3925 14.5785C20.5277 12.249 21.5183 9.83603 22.3527 7.35126C22.4191 7.15357 22.4002 6.93716 22.3005 6.75399C22.2008 6.57082 22.0294 6.43743 21.8273 6.38583C17.0055 5.15442 11.9536 4.5 6.75 4.5C6.39217 4.5 6.03505 4.5031 5.67868 4.50926L5.44738 3.64188C5.2285 2.82109 4.48515 2.25 3.63568 2.25H2.25Z",
            fill: "white"
        }), Q.jsx("path", {
            d: "M3.75 20.25C3.75 19.4216 4.42157 18.75 5.25 18.75C6.07843 18.75 6.75 19.4216 6.75 20.25C6.75 21.0784 6.07843 21.75 5.25 21.75C4.42157 21.75 3.75 21.0784 3.75 20.25Z",
            fill: "white"
        }), Q.jsx("path", {
            d: "M16.5 20.25C16.5 19.4216 17.1716 18.75 18 18.75C18.8284 18.75 19.5 19.4216 19.5 20.25C19.5 21.0784 18.8284 21.75 18 21.75C17.1716 21.75 16.5 21.0784 16.5 20.25Z",
            fill: "white"
        })]
    }),
    FC = Q.jsx("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: Q.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M3 6C3 4.34315 4.34315 3 6 3H8.25C9.90685 3 11.25 4.34315 11.25 6V8.25C11.25 9.90685 9.90685 11.25 8.25 11.25H6C4.34315 11.25 3 9.90685 3 8.25V6ZM12.75 6C12.75 4.34315 14.0931 3 15.75 3H18C19.6569 3 21 4.34315 21 6V8.25C21 9.90685 19.6569 11.25 18 11.25H15.75C14.0931 11.25 12.75 9.90685 12.75 8.25V6ZM3 15.75C3 14.0931 4.34315 12.75 6 12.75H8.25C9.90685 12.75 11.25 14.0931 11.25 15.75V18C11.25 19.6569 9.90685 21 8.25 21H6C4.34315 21 3 19.6569 3 18V15.75ZM12.75 15.75C12.75 14.0931 14.0931 12.75 15.75 12.75H18C19.6569 12.75 21 14.0931 21 15.75V18C21 19.6569 19.6569 21 18 21H15.75C14.0931 21 12.75 19.6569 12.75 18V15.75Z",
            fill: "white"
        })
    }),
    AC = Q.jsxs("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [Q.jsx("path", {
            d: "M12.3779 1.60217C12.1444 1.46594 11.8556 1.46594 11.6221 1.60217L3 6.63172L12 11.8817L21 6.63172L12.3779 1.60217Z",
            fill: "white"
        }), Q.jsx("path", {
            d: "M21.75 7.93078L12.75 13.1808V22.1808L21.3779 17.1478C21.6083 17.0134 21.75 16.7668 21.75 16.5V7.93078Z",
            fill: "white"
        }), Q.jsx("path", {
            d: "M11.25 22.1808V13.1808L2.25 7.93078V16.5C2.25 16.7668 2.39168 17.0134 2.6221 17.1478L11.25 22.1808Z",
            fill: "white"
        })]
    }),
    DC = Q.jsxs("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [Q.jsx("g", {
            clipPath: "url(#clip0_380_396)",
            children: Q.jsx("path", {
                d: "M5.44766 19.218C7.00248 20.6209 9.01137 21.5301 11.2273 21.6986L11.2275 23.9539C8.39069 23.7791 5.82052 22.6187 3.85522 20.8109L5.44766 19.218ZM18.7139 19.0251L20.1893 20.4999C20.2293 20.5399 20.2726 20.5745 20.3186 20.6035C18.3272 22.5296 15.6708 23.7723 12.7272 23.9539L12.7274 21.6985C15.043 21.5223 17.1325 20.5372 18.7139 19.0251ZM11.977 3.72697C16.5333 3.72697 20.227 7.42063 20.227 11.977C20.227 16.5333 16.5333 20.227 11.977 20.227C7.42063 20.227 3.72697 16.5333 3.72697 11.977C3.72697 7.42063 7.42063 3.72697 11.977 3.72697ZM2.25542 12.7274C2.41079 14.7686 3.19469 16.6341 4.41401 18.1309L2.8168 19.7292C1.19633 17.8164 0.164252 15.3892 4.57764e-05 12.7272L2.25542 12.7274ZM23.9539 12.7272C23.7958 15.2901 22.8333 17.6353 21.3151 19.5135C21.2953 19.4877 21.2736 19.4629 21.2499 19.4393L19.7172 17.9066C20.8351 16.4496 21.5508 14.6679 21.6985 12.7274L23.9539 12.7272ZM21.0008 4.06654C22.6998 6.00313 23.7853 8.49127 23.9539 11.2275L21.6986 11.2273C21.5377 9.11194 20.7019 7.18526 19.4059 5.66215L21.0008 4.06654ZM2.8168 4.22472L4.41401 5.8231C3.19454 7.31998 2.41059 9.18578 2.25536 11.2273L0 11.2275C0.164058 8.56521 1.19617 6.13777 2.8168 4.22472ZM11.2275 0L11.2273 2.25536C9.01172 2.42382 7.00313 3.33278 5.44842 4.73529L3.85522 3.14303C5.82052 1.33523 8.39069 0.174813 11.2275 0ZM12.7272 4.57764e-05C15.49 0.170469 17.9998 1.27572 19.9442 3.00336L18.3494 4.59746C16.8176 3.27349 14.8692 2.41845 12.7274 2.25542L12.7272 4.57764e-05Z",
                fill: "white"
            })
        }), Q.jsx("defs", {
            children: Q.jsx("clipPath", {
                id: "clip0_380_396",
                children: Q.jsx("rect", {
                    width: "24",
                    height: "24",
                    fill: "white"
                })
            })
        })]
    }),
    IC = Q.jsx("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: Q.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M6.43306 10.4419C6.18898 10.1979 6.18898 9.80214 6.43306 9.55806L12.6831 3.30806C12.9271 3.06398 13.3229 3.06398 13.5669 3.30806C13.811 3.55214 13.811 3.94786 13.5669 4.19194L7.75888 10L13.5669 15.8081C13.811 16.0521 13.811 16.4479 13.5669 16.6919C13.3229 16.936 12.9271 16.936 12.6831 16.6919L6.43306 10.4419Z",
            fill: "#6F7EAE"
        })
    }),
    zC = Q.jsxs("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [Q.jsx("path", {
            d: "M12 7.5C10.7574 7.5 9.75 8.50736 9.75 9.75C9.75 10.9926 10.7574 12 12 12C13.2426 12 14.25 10.9926 14.25 9.75C14.25 8.50736 13.2426 7.5 12 7.5Z",
            fill: "white"
        }), Q.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M1.5 4.875C1.5 3.83947 2.33947 3 3.375 3H20.625C21.6605 3 22.5 3.83947 22.5 4.875V14.625C22.5 15.6605 21.6605 16.5 20.625 16.5H3.375C2.33947 16.5 1.5 15.6605 1.5 14.625V4.875ZM8.25 9.75C8.25 7.67893 9.92893 6 12 6C14.0711 6 15.75 7.67893 15.75 9.75C15.75 11.8211 14.0711 13.5 12 13.5C9.92893 13.5 8.25 11.8211 8.25 9.75ZM18.75 9C18.3358 9 18 9.33579 18 9.75V9.7575C18 10.1717 18.3358 10.5075 18.75 10.5075H18.7575C19.1717 10.5075 19.5075 10.1717 19.5075 9.7575V9.75C19.5075 9.33579 19.1717 9 18.7575 9H18.75ZM4.5 9.75C4.5 9.33579 4.83579 9 5.25 9H5.2575C5.67171 9 6.0075 9.33579 6.0075 9.75V9.7575C6.0075 10.1717 5.67171 10.5075 5.2575 10.5075H5.25C4.83579 10.5075 4.5 10.1717 4.5 9.7575V9.75Z",
            fill: "white"
        }), Q.jsx("path", {
            d: "M2.25 18C1.83579 18 1.5 18.3358 1.5 18.75C1.5 19.1642 1.83579 19.5 2.25 19.5C7.65005 19.5 12.8802 20.2222 17.8498 21.5749C19.0404 21.899 20.25 21.0168 20.25 19.7551V18.75C20.25 18.3358 19.9142 18 19.5 18H2.25Z",
            fill: "white"
        })]
    }),
    UC = I.memo((() => {
        const e = fC(xC),
            t = fC(SC),
            n = dC(wC);
        return Q.jsx(vy, {
            collapseOnSelect: !0,
            expand: "lg",
            children: Q.jsxs(Hg, {
                children: [Q.jsx(vy.Brand, {
                    className: "p-0",
                    children: Q.jsx($v, {
                        className: "p-0",
                        eventKey: "1",
                        as: Ch,
                        to: "/app/store",
                        children: Q.jsx("img", {
                            src: "https://gspics.org/images/2023/05/03/0PZJlT.png",
                            alt: "Dream Rust Label",
                            className: "navbar-brand p-0 m-0"
                        })
                    })
                }), Q.jsx(vy.Toggle, {
                    "aria-controls": "navbarScroll"
                }), Q.jsxs(vy.Collapse, {
                    id: "navbarScroll",
                    children: [Q.jsx(Kv, {
                        className: "ms-5 me-auto mr-4 my-2 my-lg-0",
                        navbarScroll: !0
                    }), Q.jsxs(xh, {
                        children: [e && t ? Q.jsx(Ch, {
                            className: "cart-link",
                            to: "/app/page/profile",
                            children: Q.jsx(Lw, {
                                type: "transparent",
                                title: t.balance,
                                icon: zC
                            })
                        }) : null, Q.jsx(Ch, {
                            className: "cart-link",
                            to: "/app/page/cart",
                            children: Q.jsx(Lw, {
                                type: "transparent",
                                title: `${n.length?n.length:""}`,
                                icon: MC
                            })
                        }), t ? Q.jsxs(Ch, {
                            className: "cart-link",
                            to: "/app/page/profile",
                            children: [Q.jsx("img", {
                                className: "img",
                                src: t.avatar
                            }), t.username]
                        }) : Q.jsx("div", {
                            className: "gradient-btn",
                            children: Q.jsxs("a", {
                                role: "button",
                                className: "btn__login",
                                href: "https://redbear.online/files/stores/backend/steam.php?login",
                                children: [jC, "Войти через Steam"]
                            })
                        })]
                    })]
                })]
            })
        })
    }));

function VC(e) {
    var t, n, r = "";
    if ("string" == typeof e || "number" == typeof e) r += e;
    else if ("object" == typeof e)
        if (Array.isArray(e))
            for (t = 0; t < e.length; t++) e[t] && (n = VC(e[t])) && (r && (r += " "), r += n);
        else
            for (t in e) e[t] && (r && (r += " "), r += t);
    return r
}

function BC() {
    for (var e, t, n = 0, r = ""; n < arguments.length;)(e = arguments[n++]) && (t = VC(e)) && (r && (r += " "), r += t);
    return r
}
const HC = e => "number" == typeof e && !isNaN(e),
    $C = e => "string" == typeof e,
    qC = e => "function" == typeof e,
    KC = e => $C(e) || qC(e) ? e : null,
    QC = e => I.isValidElement(e) || $C(e) || qC(e) || HC(e);

function WC(e) {
    let {
        enter: t,
        exit: n,
        appendPosition: r = !1,
        collapse: o = !0,
        collapseDuration: a = 300
    } = e;
    return function(e) {
        let {
            children: i,
            position: l,
            preventExitTransition: s,
            done: u,
            nodeRef: c,
            isIn: d
        } = e;
        const f = r ? `${t}--${l}` : t,
            p = r ? `${n}--${l}` : n,
            h = I.useRef(0);
        return I.useLayoutEffect((() => {
            const e = c.current,
                t = f.split(" "),
                n = r => {
                    r.target === c.current && (e.dispatchEvent(new Event("d")), e.removeEventListener("animationend", n), e.removeEventListener("animationcancel", n), 0 === h.current && "animationcancel" !== r.type && e.classList.remove(...t))
                };
            e.classList.add(...t), e.addEventListener("animationend", n), e.addEventListener("animationcancel", n)
        }), []), I.useEffect((() => {
            const e = c.current,
                t = () => {
                    e.removeEventListener("animationend", t), o ? function(e, t, n) {
                        void 0 === n && (n = 300);
                        const {
                            scrollHeight: r,
                            style: o
                        } = e;
                        requestAnimationFrame((() => {
                            o.minHeight = "initial", o.height = r + "px", o.transition = `all ${n}ms`, requestAnimationFrame((() => {
                                o.height = "0", o.padding = "0", o.margin = "0", setTimeout(t, n)
                            }))
                        }))
                    }(e, u, a) : u()
                };
            d || (s ? t() : (h.current = 1, e.className += ` ${p}`, e.addEventListener("animationend", t)))
        }), [d]), z.createElement(z.Fragment, null, i)
    }
}

function GC(e, t) {
    return {
        content: e.content,
        containerId: e.props.containerId,
        id: e.props.toastId,
        theme: e.props.theme,
        type: e.props.type,
        data: e.props.data || {},
        isLoading: e.props.isLoading,
        icon: e.props.icon,
        status: t
    }
}
const ZC = {
        list: new Map,
        emitQueue: new Map,
        on(e, t) {
            return this.list.has(e) || this.list.set(e, []), this.list.get(e).push(t), this
        },
        off(e, t) {
            if (t) {
                const n = this.list.get(e).filter((e => e !== t));
                return this.list.set(e, n), this
            }
            return this.list.delete(e), this
        },
        cancelEmit(e) {
            const t = this.emitQueue.get(e);
            return t && (t.forEach(clearTimeout), this.emitQueue.delete(e)), this
        },
        emit(e) {
            this.list.has(e) && this.list.get(e).forEach((t => {
                const n = setTimeout((() => {
                    t(...[].slice.call(arguments, 1))
                }), 0);
                this.emitQueue.has(e) || this.emitQueue.set(e, []), this.emitQueue.get(e).push(n)
            }))
        }
    },
    XC = e => {
        let {
            theme: t,
            type: n,
            ...r
        } = e;
        return z.createElement("svg", {
            viewBox: "0 0 24 24",
            width: "100%",
            height: "100%",
            fill: "colored" === t ? "currentColor" : `var(--toastify-icon-color-${n})`,
            ...r
        })
    },
    JC = {
        info: function(e) {
            return z.createElement(XC, {
                ...e
            }, z.createElement("path", {
                d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"
            }))
        },
        warning: function(e) {
            return z.createElement(XC, {
                ...e
            }, z.createElement("path", {
                d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"
            }))
        },
        success: function(e) {
            return z.createElement(XC, {
                ...e
            }, z.createElement("path", {
                d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"
            }))
        },
        error: function(e) {
            return z.createElement(XC, {
                ...e
            }, z.createElement("path", {
                d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"
            }))
        },
        spinner: function() {
            return z.createElement("div", {
                className: "Toastify__spinner"
            })
        }
    };

function YC(e) {
    return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientX : e.clientX
}

function ex(e) {
    return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientY : e.clientY
}

function tx(e) {
    let {
        closeToast: t,
        theme: n,
        ariaLabel: r = "close"
    } = e;
    return z.createElement("button", {
        className: `Toastify__close-button Toastify__close-button--${n}`,
        type: "button",
        onClick: e => {
            e.stopPropagation(), t(e)
        },
        "aria-label": r
    }, z.createElement("svg", {
        "aria-hidden": "true",
        viewBox: "0 0 14 16"
    }, z.createElement("path", {
        fillRule: "evenodd",
        d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"
    })))
}

function nx(e) {
    let {
        delay: t,
        isRunning: n,
        closeToast: r,
        type: o = "default",
        hide: a,
        className: i,
        style: l,
        controlledProgress: s,
        progress: u,
        rtl: c,
        isIn: d,
        theme: f
    } = e;
    const p = a || s && 0 === u,
        h = {
            ...l,
            animationDuration: `${t}ms`,
            animationPlayState: n ? "running" : "paused",
            opacity: p ? 0 : 1
        };
    s && (h.transform = `scaleX(${u})`);
    const m = BC("Toastify__progress-bar", s ? "Toastify__progress-bar--controlled" : "Toastify__progress-bar--animated", `Toastify__progress-bar-theme--${f}`, `Toastify__progress-bar--${o}`, {
            "Toastify__progress-bar--rtl": c
        }),
        g = qC(i) ? i({
            rtl: c,
            type: o,
            defaultClassName: m
        }) : BC(m, i);
    return z.createElement("div", {
        role: "progressbar",
        "aria-hidden": p ? "true" : "false",
        "aria-label": "notification timer",
        className: g,
        style: h,
        [s && u >= 1 ? "onTransitionEnd" : "onAnimationEnd"]: s && u < 1 ? null : () => {
            d && r()
        }
    })
}
const rx = e => {
        const {
            isRunning: t,
            preventExitTransition: n,
            toastRef: r,
            eventHandlers: o
        } = function(e) {
            const [t, n] = I.useState(!1), [r, o] = I.useState(!1), a = I.useRef(null), i = I.useRef({
                start: 0,
                x: 0,
                y: 0,
                delta: 0,
                removalDistance: 0,
                canCloseOnClick: !0,
                canDrag: !1,
                boundingRect: null,
                didMove: !1
            }).current, l = I.useRef(e), {
                autoClose: s,
                pauseOnHover: u,
                closeToast: c,
                onClick: d,
                closeOnClick: f
            } = e;

            function p(t) {
                if (e.draggable) {
                    "touchstart" === t.nativeEvent.type && t.nativeEvent.preventDefault(), i.didMove = !1, document.addEventListener("mousemove", v), document.addEventListener("mouseup", y), document.addEventListener("touchmove", v), document.addEventListener("touchend", y);
                    const n = a.current;
                    i.canCloseOnClick = !0, i.canDrag = !0, i.boundingRect = n.getBoundingClientRect(), n.style.transition = "", i.x = YC(t.nativeEvent), i.y = ex(t.nativeEvent), "x" === e.draggableDirection ? (i.start = i.x, i.removalDistance = n.offsetWidth * (e.draggablePercent / 100)) : (i.start = i.y, i.removalDistance = n.offsetHeight * (80 === e.draggablePercent ? 1.5 * e.draggablePercent : e.draggablePercent / 100))
                }
            }

            function h(t) {
                if (i.boundingRect) {
                    const {
                        top: n,
                        bottom: r,
                        left: o,
                        right: a
                    } = i.boundingRect;
                    "touchend" !== t.nativeEvent.type && e.pauseOnHover && i.x >= o && i.x <= a && i.y >= n && i.y <= r ? g() : m()
                }
            }

            function m() {
                n(!0)
            }

            function g() {
                n(!1)
            }

            function v(n) {
                const r = a.current;
                i.canDrag && r && (i.didMove = !0, t && g(), i.x = YC(n), i.y = ex(n), i.delta = "x" === e.draggableDirection ? i.x - i.start : i.y - i.start, i.start !== i.x && (i.canCloseOnClick = !1), r.style.transform = `translate${e.draggableDirection}(${i.delta}px)`, r.style.opacity = "" + (1 - Math.abs(i.delta / i.removalDistance)))
            }

            function y() {
                document.removeEventListener("mousemove", v), document.removeEventListener("mouseup", y), document.removeEventListener("touchmove", v), document.removeEventListener("touchend", y);
                const t = a.current;
                if (i.canDrag && i.didMove && t) {
                    if (i.canDrag = !1, Math.abs(i.delta) > i.removalDistance) return o(!0), void e.closeToast();
                    t.style.transition = "transform 0.2s, opacity 0.2s", t.style.transform = `translate${e.draggableDirection}(0)`, t.style.opacity = "1"
                }
            }
            I.useEffect((() => {
                l.current = e
            })), I.useEffect((() => (a.current && a.current.addEventListener("d", m, {
                once: !0
            }), qC(e.onOpen) && e.onOpen(I.isValidElement(e.children) && e.children.props), () => {
                const e = l.current;
                qC(e.onClose) && e.onClose(I.isValidElement(e.children) && e.children.props)
            })), []), I.useEffect((() => (e.pauseOnFocusLoss && (document.hasFocus() || g(), window.addEventListener("focus", m), window.addEventListener("blur", g)), () => {
                e.pauseOnFocusLoss && (window.removeEventListener("focus", m), window.removeEventListener("blur", g))
            })), [e.pauseOnFocusLoss]);
            const b = {
                onMouseDown: p,
                onTouchStart: p,
                onMouseUp: h,
                onTouchEnd: h
            };
            return s && u && (b.onMouseEnter = g, b.onMouseLeave = m), f && (b.onClick = e => {
                d && d(e), i.canCloseOnClick && c()
            }), {
                playToast: m,
                pauseToast: g,
                isRunning: t,
                preventExitTransition: r,
                toastRef: a,
                eventHandlers: b
            }
        }(e), {
            closeButton: a,
            children: i,
            autoClose: l,
            onClick: s,
            type: u,
            hideProgressBar: c,
            closeToast: d,
            transition: f,
            position: p,
            className: h,
            style: m,
            bodyClassName: g,
            bodyStyle: v,
            progressClassName: y,
            progressStyle: b,
            updateId: w,
            role: C,
            progress: x,
            rtl: S,
            toastId: E,
            deleteToast: _,
            isIn: R,
            isLoading: k,
            iconOut: O,
            closeOnClick: N,
            theme: j
        } = e, P = BC("Toastify__toast", `Toastify__toast-theme--${j}`, `Toastify__toast--${u}`, {
            "Toastify__toast--rtl": S
        }, {
            "Toastify__toast--close-on-click": N
        }), L = qC(h) ? h({
            rtl: S,
            position: p,
            type: u,
            defaultClassName: P
        }) : BC(P, h), T = !!x || !l, M = {
            closeToast: d,
            type: u,
            theme: j
        };
        let F = null;
        return !1 === a || (F = qC(a) ? a(M) : I.isValidElement(a) ? I.cloneElement(a, M) : tx(M)), z.createElement(f, {
            isIn: R,
            done: _,
            position: p,
            preventExitTransition: n,
            nodeRef: r
        }, z.createElement("div", {
            id: E,
            onClick: s,
            className: L,
            ...o,
            style: m,
            ref: r
        }, z.createElement("div", {
            ...R && {
                role: C
            },
            className: qC(g) ? g({
                type: u
            }) : BC("Toastify__toast-body", g),
            style: v
        }, null != O && z.createElement("div", {
            className: BC("Toastify__toast-icon", {
                "Toastify--animate-icon Toastify__zoom-enter": !k
            })
        }, O), z.createElement("div", null, i)), F, z.createElement(nx, {
            ...w && !T ? {
                key: `pb-${w}`
            } : {},
            rtl: S,
            theme: j,
            delay: l,
            isRunning: t,
            isIn: R,
            closeToast: d,
            hide: c,
            type: u,
            style: b,
            className: y,
            controlledProgress: T,
            progress: x || 0
        })))
    },
    ox = function(e, t) {
        return void 0 === t && (t = !1), {
            enter: `Toastify--animate Toastify__${e}-enter`,
            exit: `Toastify--animate Toastify__${e}-exit`,
            appendPosition: t
        }
    },
    ax = WC(ox("bounce", !0));
WC(ox("slide", !0)), WC(ox("zoom")), WC(ox("flip"));
const ix = I.forwardRef(((e, t) => {
    const {
        getToastToRender: n,
        containerRef: r,
        isToastActive: o
    } = function(e) {
        const [, t] = I.useReducer((e => e + 1), 0), [n, r] = I.useState([]), o = I.useRef(null), a = I.useRef(new Map).current, i = e => -1 !== n.indexOf(e), l = I.useRef({
            toastKey: 1,
            displayedToast: 0,
            count: 0,
            queue: [],
            props: e,
            containerId: null,
            isToastActive: i,
            getToast: e => a.get(e)
        }).current;

        function s(e) {
            let {
                containerId: t
            } = e;
            const {
                limit: n
            } = l.props;
            !n || t && l.containerId !== t || (l.count -= l.queue.length, l.queue = [])
        }

        function u(e) {
            r((t => null == e ? [] : t.filter((t => t !== e))))
        }

        function c() {
            const {
                toastContent: e,
                toastProps: t,
                staleId: n
            } = l.queue.shift();
            f(e, t, n)
        }

        function d(e, n) {
            let {
                delay: r,
                staleId: i,
                ...s
            } = n;
            if (!QC(e) || (d = s, !o.current || l.props.enableMultiContainer && d.containerId !== l.props.containerId || a.has(d.toastId) && null == d.updateId)) return;
            var d;
            const {
                toastId: p,
                updateId: h,
                data: m
            } = s, {
                props: g
            } = l, v = () => u(p), y = null == h;
            y && l.count++;
            const b = {
                ...g,
                style: g.toastStyle,
                key: l.toastKey++,
                ...Object.fromEntries(Object.entries(s).filter((e => {
                    let [t, n] = e;
                    return null != n
                }))),
                toastId: p,
                updateId: h,
                data: m,
                closeToast: v,
                isIn: !1,
                className: KC(s.className || g.toastClassName),
                bodyClassName: KC(s.bodyClassName || g.bodyClassName),
                progressClassName: KC(s.progressClassName || g.progressClassName),
                autoClose: !s.isLoading && (w = s.autoClose, C = g.autoClose, !1 === w || HC(w) && w > 0 ? w : C),
                deleteToast() {
                    const e = GC(a.get(p), "removed");
                    a.delete(p), ZC.emit(4, e);
                    const n = l.queue.length;
                    if (l.count = null == p ? l.count - l.displayedToast : l.count - 1, l.count < 0 && (l.count = 0), n > 0) {
                        const e = null == p ? l.props.limit : 1;
                        if (1 === n || 1 === e) l.displayedToast++, c();
                        else {
                            const t = e > n ? n : e;
                            l.displayedToast = t;
                            for (let e = 0; e < t; e++) c()
                        }
                    } else t()
                }
            };
            var w, C;
            b.iconOut = function(e) {
                let {
                    theme: t,
                    type: n,
                    isLoading: r,
                    icon: o
                } = e, a = null;
                const i = {
                    theme: t,
                    type: n
                };
                return !1 === o || (qC(o) ? a = o(i) : I.isValidElement(o) ? a = I.cloneElement(o, i) : $C(o) || HC(o) ? a = o : r ? a = JC.spinner() : n in JC && (a = JC[n](i))), a
            }(b), qC(s.onOpen) && (b.onOpen = s.onOpen), qC(s.onClose) && (b.onClose = s.onClose), b.closeButton = g.closeButton, !1 === s.closeButton || QC(s.closeButton) ? b.closeButton = s.closeButton : !0 === s.closeButton && (b.closeButton = !QC(g.closeButton) || g.closeButton);
            let x = e;
            I.isValidElement(e) && !$C(e.type) ? x = I.cloneElement(e, {
                closeToast: v,
                toastProps: b,
                data: m
            }) : qC(e) && (x = e({
                closeToast: v,
                toastProps: b,
                data: m
            })), g.limit && g.limit > 0 && l.count > g.limit && y ? l.queue.push({
                toastContent: x,
                toastProps: b,
                staleId: i
            }) : HC(r) ? setTimeout((() => {
                f(x, b, i)
            }), r) : f(x, b, i)
        }

        function f(e, t, n) {
            const {
                toastId: o
            } = t;
            n && a.delete(n);
            const i = {
                content: e,
                props: t
            };
            a.set(o, i), r((e => [...e, o].filter((e => e !== n)))), ZC.emit(4, GC(i, null == i.props.updateId ? "added" : "updated"))
        }
        return I.useEffect((() => (l.containerId = e.containerId, ZC.cancelEmit(3).on(0, d).on(1, (e => o.current && u(e))).on(5, s).emit(2, l), () => {
            a.clear(), ZC.emit(3, l)
        })), []), I.useEffect((() => {
            l.props = e, l.isToastActive = i, l.displayedToast = n.length
        })), {
            getToastToRender: function(t) {
                const n = new Map,
                    r = Array.from(a.values());
                return e.newestOnTop && r.reverse(), r.forEach((e => {
                    const {
                        position: t
                    } = e.props;
                    n.has(t) || n.set(t, []), n.get(t).push(e)
                })), Array.from(n, (e => t(e[0], e[1])))
            },
            containerRef: o,
            isToastActive: i
        }
    }(e), {
        className: a,
        style: i,
        rtl: l,
        containerId: s
    } = e;

    function u(e) {
        const t = BC("Toastify__toast-container", `Toastify__toast-container--${e}`, {
            "Toastify__toast-container--rtl": l
        });
        return qC(a) ? a({
            position: e,
            rtl: l,
            defaultClassName: t
        }) : BC(t, KC(a))
    }
    return I.useEffect((() => {
        t && (t.current = r.current)
    }), []), z.createElement("div", {
        ref: r,
        className: "Toastify",
        id: s
    }, n(((e, t) => {
        const n = t.length ? {
            ...i
        } : {
            ...i,
            pointerEvents: "none"
        };
        return z.createElement("div", {
            className: u(e),
            style: n,
            key: `container-${e}`
        }, t.map(((e, n) => {
            let {
                content: r,
                props: a
            } = e;
            return z.createElement(rx, {
                ...a,
                isIn: o(a.toastId),
                style: {
                    ...a.style,
                    "--nth": n + 1,
                    "--len": t.length
                },
                key: `toast-${a.key}`
            }, r)
        })))
    })))
}));
ix.displayName = "ToastContainer", ix.defaultProps = {
    position: "top-right",
    transition: ax,
    autoClose: 5e3,
    closeButton: tx,
    pauseOnHover: !0,
    pauseOnFocusLoss: !0,
    closeOnClick: !0,
    draggable: !0,
    draggablePercent: 80,
    draggableDirection: "x",
    role: "alert",
    theme: "light"
};
let lx, sx = new Map,
    ux = [],
    cx = 1;

function dx() {
    return "" + cx++
}

function fx(e) {
    return e && ($C(e.toastId) || HC(e.toastId)) ? e.toastId : dx()
}

function px(e, t) {
    return sx.size > 0 ? ZC.emit(0, e, t) : ux.push({
        content: e,
        options: t
    }), t.toastId
}

function hx(e, t) {
    return {
        ...t,
        type: t && t.type || e,
        toastId: fx(t)
    }
}

function mx(e) {
    return (t, n) => px(t, hx(e, n))
}

function gx(e, t) {
    return px(e, hx("default", t))
}
gx.loading = (e, t) => px(e, hx("default", {
    isLoading: !0,
    autoClose: !1,
    closeOnClick: !1,
    closeButton: !1,
    draggable: !1,
    ...t
})), gx.promise = function(e, t, n) {
    let r, {
        pending: o,
        error: a,
        success: i
    } = t;
    o && (r = $C(o) ? gx.loading(o, n) : gx.loading(o.render, {
        ...n,
        ...o
    }));
    const l = {
            isLoading: null,
            autoClose: null,
            closeOnClick: null,
            closeButton: null,
            draggable: null
        },
        s = (e, t, o) => {
            if (null == t) return void gx.dismiss(r);
            const a = {
                    type: e,
                    ...l,
                    ...n,
                    data: o
                },
                i = $C(t) ? {
                    render: t
                } : t;
            return r ? gx.update(r, {
                ...a,
                ...i
            }) : gx(i.render, {
                ...a,
                ...i
            }), o
        },
        u = qC(e) ? e() : e;
    return u.then((e => s("success", i, e))).catch((e => s("error", a, e))), u
}, gx.success = mx("success"), gx.info = mx("info"), gx.error = mx("error"), gx.warning = mx("warning"), gx.warn = gx.warning, gx.dark = (e, t) => px(e, hx("default", {
    theme: "dark",
    ...t
})), gx.dismiss = e => {
    sx.size > 0 ? ZC.emit(1, e) : ux = ux.filter((t => null != e && t.options.toastId !== e))
}, gx.clearWaitingQueue = function(e) {
    return void 0 === e && (e = {}), ZC.emit(5, e)
}, gx.isActive = e => {
    let t = !1;
    return sx.forEach((n => {
        n.isToastActive && n.isToastActive(e) && (t = !0)
    })), t
}, gx.update = function(e, t) {
    void 0 === t && (t = {}), setTimeout((() => {
        const n = function(e, t) {
            let {
                containerId: n
            } = t;
            const r = sx.get(n || lx);
            return r && r.getToast(e)
        }(e, t);
        if (n) {
            const {
                props: r,
                content: o
            } = n, a = {
                delay: 100,
                ...r,
                ...t,
                toastId: t.toastId || e,
                updateId: dx()
            };
            a.toastId !== e && (a.staleId = e);
            const i = a.render || o;
            delete a.render, px(i, a)
        }
    }), 0)
}, gx.done = e => {
    gx.update(e, {
        progress: 1
    })
}, gx.onChange = e => (ZC.on(4, e), () => {
    ZC.off(4, e)
}), gx.POSITION = {
    TOP_LEFT: "top-left",
    TOP_RIGHT: "top-right",
    TOP_CENTER: "top-center",
    BOTTOM_LEFT: "bottom-left",
    BOTTOM_RIGHT: "bottom-right",
    BOTTOM_CENTER: "bottom-center"
}, gx.TYPE = {
    INFO: "info",
    SUCCESS: "success",
    WARNING: "warning",
    ERROR: "error",
    DEFAULT: "default"
}, ZC.on(2, (e => {
    lx = e.containerId || e, sx.set(lx, e), ux.forEach((e => {
        ZC.emit(0, e.content, e.options)
    })), ux = []
})).on(3, (e => {
    sx.delete(e.containerId || e), 0 === sx.size && ZC.off(0).off(1).off(5)
}));
const vx = I.memo((() => Q.jsx(ix, {
        position: "top-right",
        autoClose: 3e3,
        hideProgressBar: !1,
        newestOnTop: !1,
        closeOnClick: !0,
        rtl: !1,
        limit: 4,
        draggable: !0,
        pauseOnHover: !0,
        theme: "dark"
    }))),
    yx = async () => {
        const {
            data: e
        } = await _w.post("store.shop.php", {
            action: "items"
        });
        return e
    }, bx = {
        shop: ["shop"]
    }, wx = async () => {
        const {
            data: e
        } = await _w.post("/store.info.php", {
            action: "info"
        });
        return e
    }, Cx = {
        auth: ["store-info"]
    }, xx = lC((e => ({
        privilege: {
            dream: void 0,
            rust: void 0,
            top: void 0
        },
        currentPrivilege: null,
        actions: {
            setPrivilege: (t, n) => {
                e((e => ({
                    privilege: {
                        ...e.privilege,
                        [t]: n
                    }
                })))
            },
            setPrivilegesList: t => {
                e({
                    privilege: t
                })
            },
            setCurrentPrivilege: t => {
                e({
                    currentPrivilege: t
                })
            }
        }
    })));
/** */
var Sx = (e => (e[e.DREAM = 5828520] = "DREAM", e[e.RUST = 5828521] = "RUST", e[e.TOP = 5828522] = "TOP", e[e.DAILY_DREAM = 6135082] = "DAILY_DREAM", e[e.DAILY_TOP = 6135080] = "DAILY_TOP", e[e.DAILY_RUST = 6135081] = "DAILY_RUST", e))(Sx || {}),
    Ex = (e => (e.DREAM = "dream", e.RUST = "rust", e.TOP = "top", e))(Ex || {});
const _x = [5828520, 5828521, 5828522, 6135082, 6135081, 6135080],
    Rx = ["dream", "rust", "top"],
    kx = () => {
        const {
            data: e
        } = (e => df({
            queryKey: [...bx.shop],
            queryFn: yx,
            ...e
        }))(), {
            data: t
        } = Ow(), {
            data: n
        } = (e => df({
            queryKey: [...Cx.auth],
            queryFn: wx,
            ...e
        }))(), {
            setProducts: r,
            setCategories: o,
            setAuth: a
        } = fC(mC), {
            setPrivilegesList: i
        } = xx(EC);
        I.useEffect((() => {
            if (n)
                if (null == e ? void 0 : e.items) {
                    r(e.items.filter((e => !_x.includes(e.id))));
                    const t = t => {
						// Поиск товара привилегий
						// e => все что возвращается на запрос магазина
                        const n = e.items.find((e => e.id === t));
						console.log(e);
                        return {
                            ...n,
                            about: n && JSON.parse(n?.items[0].about)
                        }
                    };
                    if (!t(Sx.DREAM)) throw new Error("Ошибка на сервере, нужно связаться с админом");
                    i({
                        [Ex.DREAM]: t(Sx.DREAM),
                        [Ex.RUST]: t(Sx.RUST),
                        [Ex.TOP]: t(Sx.TOP)
                    })
                }(null == e ? void 0 : e.categories) && o(null == e ? void 0 : e.categories.filter((e => "Привилегии" !== e.name)))
        }), [e, n]), I.useEffect((() => {
            t && a(t)
        }), [t])
    },
    Ox = ({
        children: e
    }) => (kx(), Q.jsxs(Q.Fragment, {
        children: [Q.jsx(UC, {}), e, Q.jsx(vx, {}), Q.jsx(Fw, {})]
    }));
var Nx = (e => (e.ROULETTE = "roulette", e.ITEM = "item", e.COMMAND = "command", e))(Nx || {}),
    jx = (e => (e.SUCCESS = "success", e.FAIL = "fail", e))(jx || {});
const Px = (e, t) => gx.error(e, {
        ...t
    }),
    Lx = (e, t) => gx.success(e, {
        ...t
    });
var Tx = {},
    Mx = {},
    Fx = {};
Object.defineProperty(Fx, "__esModule", {
    value: !0
}), Fx.getInterfaceLanguage = function() {
    var e = "en-US";
    if ("undefined" == typeof navigator) return e;
    var t = navigator;
    if (t) {
        if (t.language) return t.language;
        if (t.languages && t.languages[0]) return t.languages[0];
        if (t.userLanguage) return t.userLanguage;
        if (t.browserLanguage) return t.browserLanguage
    }
    return e
}, Fx.getBestMatchingLanguage = function(e, t) {
    if (t[e]) return e;
    var n = e.indexOf("-"),
        r = n >= 0 ? e.substring(0, n) : e;
    return t[r] ? r : Object.keys(t)[0]
}, Fx.validateTranslationKeys = function(e) {
    var t = ["_interfaceLanguage", "_language", "_defaultLanguage", "_defaultLanguageFirstLevelKeys", "_props"];
    e.forEach((function(e) {
        if (-1 !== t.indexOf(e)) throw new Error(e + " cannot be used as a key. It is a reserved word.")
    }))
}, Fx.randomPseudo = function(e) {
    for (var t = "", n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", r = 0; r < e; r += 1) t += n.charAt(Math.floor(62 * Math.random()));
    return t
}, Object.defineProperty(Mx, "__esModule", {
    value: !0
});
var Ax = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    },
    Dx = function(e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e)) return function(e, t) {
            var n = [],
                r = !0,
                o = !1,
                a = void 0;
            try {
                for (var i, l = e[Symbol.iterator](); !(r = (i = l.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
            } catch (s) {
                o = !0, a = s
            } finally {
                try {
                    !r && l.return && l.return()
                } finally {
                    if (o) throw a
                }
            }
            return n
        }(e, t);
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
    },
    Ix = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    },
    zx = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }(),
    Ux = function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
    }(Fx);
var Vx = /(\{[\d|\w]+\})/,
    Bx = /(\$ref\{[\w|.]+\})/,
    Hx = function() {
        function e(t, n) {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), "function" == typeof n && (n = {
                customLanguageInterface: n
            }), this._opts = Ix({}, {
                customLanguageInterface: Ux.getInterfaceLanguage,
                pseudo: !1,
                pseudoMultipleLanguages: !1,
                logsEnabled: !0
            }, n), this._interfaceLanguage = this._opts.customLanguageInterface(), this._language = this._interfaceLanguage, this.setContent(t)
        }
        return zx(e, [{
            key: "setContent",
            value: function(e) {
                var t = this,
                    n = Object.keys(e),
                    r = Dx(n, 1)[0];
                this._defaultLanguage = r, this._defaultLanguageFirstLevelKeys = [], this._props = e, Ux.validateTranslationKeys(Object.keys(e[this._defaultLanguage])), Object.keys(this._props[this._defaultLanguage]).forEach((function(e) {
                    "string" == typeof t._props[t._defaultLanguage][e] && t._defaultLanguageFirstLevelKeys.push(e)
                })), this.setLanguage(this._interfaceLanguage), this._opts.pseudo && this._pseudoAllValues(this._props)
            }
        }, {
            key: "_pseudoAllValues",
            value: function(e) {
                var t = this;
                Object.keys(e).forEach((function(n) {
                    if ("object" === Ax(e[n])) t._pseudoAllValues(e[n]);
                    else if ("string" == typeof e[n]) {
                        if (0 === e[n].indexOf("[") && e[n].lastIndexOf("]") === e[n].length - 1) return;
                        for (var r = e[n].split(" "), o = 0; o < r.length; o += 1)
                            if (r[o].match(Vx));
                            else if (r[o].match(Bx));
                        else {
                            var a = r[o].length;
                            t._opts.pseudoMultipleLanguages && (a = parseInt(1.4 * a, 10)), r[o] = Ux.randomPseudo(a)
                        }
                        e[n] = "[" + r.join(" ") + "]"
                    }
                }))
            }
        }, {
            key: "setLanguage",
            value: function(e) {
                var t = this,
                    n = Ux.getBestMatchingLanguage(e, this._props),
                    r = Object.keys(this._props)[0];
                if (this._language = n, this._props[n]) {
                    for (var o = 0; o < this._defaultLanguageFirstLevelKeys.length; o += 1) delete this[this._defaultLanguageFirstLevelKeys[o]];
                    var a = Ix({}, this._props[this._language]);
                    Object.keys(a).forEach((function(e) {
                        t[e] = a[e]
                    })), r !== this._language && (a = this._props[r], this._fallbackValues(a, this))
                }
            }
        }, {
            key: "_fallbackValues",
            value: function(e, t) {
                var n = this;
                Object.keys(e).forEach((function(r) {
                    Object.prototype.hasOwnProperty.call(e, r) && !t[r] && "" !== t[r] ? (t[r] = e[r], n._opts.logsEnabled && console.log("🚧 👷 key '" + r + "' not found in localizedStrings for language " + n._language + " 🚧")) : "string" != typeof t[r] && n._fallbackValues(e[r], t[r])
                }))
            }
        }, {
            key: "getLanguage",
            value: function() {
                return this._language
            }
        }, {
            key: "getInterfaceLanguage",
            value: function() {
                return this._interfaceLanguage
            }
        }, {
            key: "getAvailableLanguages",
            value: function() {
                var e = this;
                return this._availableLanguages || (this._availableLanguages = [], Object.keys(this._props).forEach((function(t) {
                    e._availableLanguages.push(t)
                }))), this._availableLanguages
            }
        }, {
            key: "formatString",
            value: function(e) {
                for (var t = this, n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
                var a = e || "";
                return "string" == typeof a && (a = this.getString(e, null, !0) || a), a.split(Bx).filter((function(e) {
                    return !!e
                })).map((function(n) {
                    if (n.match(Bx)) {
                        var r = n.slice(5, -1),
                            o = t.getString(r);
                        return o || (t._opts.logsEnabled && console.log("No Localization ref found for '" + n + "' in string '" + e + "'"), "$ref(id:" + r + ")")
                    }
                    return n
                })).join("").split(Vx).filter((function(e) {
                    return !!e
                })).map((function(e) {
                    if (e.match(Vx)) {
                        var t = e.slice(1, -1),
                            n = r[t];
                        if (void 0 === n) {
                            var o = r[0][t];
                            if (void 0 === o) return n;
                            n = o
                        }
                        return n
                    }
                    return e
                })).join("")
            }
        }, {
            key: "getString",
            value: function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                try {
                    for (var r = this._props[t || this._language], o = e.split("."), a = 0; a < o.length; a += 1) {
                        if (void 0 === r[o[a]]) throw Error(o[a]);
                        r = r[o[a]]
                    }
                    return r
                } catch (i) {
                    !n && this._opts.logsEnabled && console.log("No localization found for key '" + e + "' and language '" + t + "', failed on " + i.message)
                }
                return null
            }
        }, {
            key: "getContent",
            value: function() {
                return this._props
            }
        }]), e
    }();
Mx.default = Hx, Object.defineProperty(Tx, "__esModule", {
    value: !0
});
var $x = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    },
    qx = Qx(I),
    Kx = Qx(Mx);

function Qx(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
var Wx = /(\{[\d|\w]+\})/;
Kx.default.prototype.formatString = function(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    var o = !1,
        a = (e || "").split(Wx).filter((function(e) {
            return !!e
        })).map((function(e, t) {
            if (e.match(Wx)) {
                var r = e.slice(1, -1),
                    a = n[r];
                if (null == a) {
                    var i = n[0][r];
                    if (void 0 === i) return a;
                    a = i
                }
                return qx.default.isValidElement(a) ? (o = !0, qx.default.Children.toArray(a).map((function(e) {
                    return $x({}, e, {
                        key: t.toString()
                    })
                }))) : a
            }
            return e
        }));
    return o ? a : a.join("")
};
const Gx = new(Tx.default = Kx.default)({
        en: {
            monitoring: {
                reload: "Reload"
            },
            product: {
                addCard: "В корзину",
                buy: "Купить сейчас",
                description: "К сожалению, у данного товара нет описания."
            },
            privilege: {
                days: {
                    first: "день",
                    medium: "дня",
                    last: "дней"
                }
            },
            notify: {
                productAddToCard: "Товар успешно добавлен в корзину!",
                productBuySuccess: "Товар успешно приобретен!",
                notBalance: "Недостаточно средств на балансе!",
                notAuth: "Покупка товара доступна только авторизованным пользователям!"
            }
        },
        ru: {
            monitoring: {
                reload: "Обновить"
            },
            product: {
                addCard: "В корзину",
                buy: "Купить сейчас"
            },
            privilege: {
                days: {
                    first: "день",
                    medium: "дня",
                    last: "дней"
                }
            },
            notify: {
                productAddToCard: "Товар успешно добавлен в корзину!",
                productBuySuccess: "Товар успешно приобретен!",
                notBalance: "Недостаточно средств на балансе!",
                notAuth: "Покупка товара доступна только авторизованным пользователям!"
            }
        }
    }),
    Zx = I.memo((({
        item: e,
        count: t
    }) => {
        const n = dC(CC),
            r = Rx.includes(e.name.toLowerCase());
        return Q.jsxs("div", {
            className: "cart__content__items__item",
            children: [Q.jsxs("div", {
                className: "cart__content__items__item_c1",
                children: [Q.jsx("div", {
                    className: Oh("cart__content__items__item_c1__image", {
                        privilege: r
                    }),
                    children: Q.jsx("img", {
                        alt: "Cart item avatar",
                        src: e.img
                    })
                }), Q.jsxs("div", {
                    className: "cart__content__items__item_c1__info",
                    children: [Q.jsx("p", {
                        className: "cart__content__items__item_c1__info__name",
                        children: e.name
                    }), Q.jsxs("div", {
                        className: "cart__content__items__item_c1__info__price",
                        children: [Q.jsxs("p", {
                            className: "cart__content__items__item_c1__info__price__text",
                            children: [(null == e ? void 0 : e.discount) ? (null == e ? void 0 : e.price) - (null == e ? void 0 : e.price) * (null == e ? void 0 : e.discount) / 100 : (null == e ? void 0 : e.price) * t, "₽"]
                        }), !!(null == e ? void 0 : e.discount) && Q.jsx("p", {
                            className: "cart__content__items__item_c1__info__price__degree",
                            children: `–${null==e?void 0:e.discount}%`
                        })]
                    })]
                })]
            }), Q.jsxs("div", {
                className: "cart__content__items__item_c2",
                children: [r ? "Кол-во дней" : "Кол-во", Q.jsxs("div", {
                    className: "cart__content__items__item_c2__action",
                    children: [Q.jsx(Lw, {
                        title: "",
                        type: "transparent",
                        onClick: () => n(e, -1),
                        icon: Q.jsx("svg", {
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: Q.jsx("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M4.25 12C4.25 11.5858 4.58579 11.25 5 11.25H19C19.4142 11.25 19.75 11.5858 19.75 12C19.75 12.4142 19.4142 12.75 19 12.75H5C4.58579 12.75 4.25 12.4142 4.25 12Z",
                                fill: "white"
                            })
                        })
                    }), Q.jsx("p", {
                        className: "cart__content__items__item_c2__amount",
                        children: t * e.amount
                    }), Q.jsx(Lw, {
                        title: "",
                        type: "transparent",
                        onClick: () => n(e, 1),
                        icon: Q.jsx("svg", {
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: Q.jsx("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M12 3.75C12.4142 3.75 12.75 4.08579 12.75 4.5V11.25H19.5C19.9142 11.25 20.25 11.5858 20.25 12C20.25 12.4142 19.9142 12.75 19.5 12.75H12.75V19.5C12.75 19.9142 12.4142 20.25 12 20.25C11.5858 20.25 11.25 19.9142 11.25 19.5V12.75H4.5C4.08579 12.75 3.75 12.4142 3.75 12C3.75 11.5858 4.08579 11.25 4.5 11.25H11.25V4.5C11.25 4.08579 11.5858 3.75 12 3.75Z",
                                fill: "white"
                            })
                        })
                    })]
                }), Q.jsx(Lw, {
                    type: "transparent",
                    title: "",
                    className: "button__trash",
                    icon: NC,
                    onClick: () => n(e, -t)
                })]
            })]
        })
    })),
    Xx = I.memo((() => {
        const e = $p(),
            t = Pw(),
            {
                refetch: n
            } = Ow(),
            r = dC(CC),
            o = dC(wC),
            a = fC(xC),
            i = fC(SC),
            l = I.useMemo((() => o.length ? o.map((({
                count: e,
                item: t
            }) => t.discount ? t.discount * e : t.price * e)).reduce(((e, t) => e + t)) : 0), [o]);
        return Q.jsx(Ox, {
            children: Q.jsx(Hg, {
                children: o.length ? Q.jsxs("div", {
                    className: "cart",
                    children: [Q.jsxs("div", {
                        className: "cart__title",
                        children: [Q.jsx("h1", {
                            children: "Корзина"
                        }), Q.jsx("p", {
                            children: o.length
                        })]
                    }), Q.jsxs("div", {
                        className: "cart__content",
                        children: [Q.jsx("div", {
                            className: "cart__content__items",
                            children: o.map((({
                                item: e,
                                count: t
                            }) => Q.jsx(Zx, {
                                item: e,
                                count: t
                            }, `cart-item-${e.id}`)))
                        }), Q.jsxs("div", {
                            className: "cart__content__sum",
                            children: [Q.jsxs("div", {
                                className: "cart__content__sum__count",
                                children: [o.length, " товаров"]
                            }), Q.jsxs("div", {
                                className: "cart__content__sum__total",
                                children: [Q.jsx("p", {
                                    children: "ИТОГО"
                                }), Q.jsxs("p", {
                                    children: [l, "₽"]
                                })]
                            }), a ? Q.jsx(Lw, {
                                onClick: () => (async () => {
                                    if (i)
                                        if (i.balance < l) Px(Gx.notify.notBalance, {
                                            icon: TC
                                        });
                                        else {
                                            let e = 0;
                                            for (const a of o) {
                                                const o = {
                                                    id: a.item.id,
                                                    count: a.count * a.item.amount
                                                };
                                                await t.mutateAsync(o, {
                                                    onSuccess: t => {
                                                        t.result === jx.FAIL ? (Px(t.mess, {
                                                            icon: TC
                                                        }), n()) : e++
                                                    },
                                                    onError: () => {
                                                        Px(Gx.notify.notAuth, {
                                                            icon: TC
                                                        })
                                                    }
                                                }), r(a.item, -a.count)
                                            }
                                            o.length === e && Lx(Gx.notify.productBuySuccess, {
                                                icon: LC
                                            })
                                        }
                                })(),
                                type: "primary",
                                className: "cart__content__sum__buy",
                                title: "Купить"
                            }) : Q.jsx("a", {
                                href: "/files/stores/backend/steam.php?login",
                                children: Q.jsx(Lw, {
                                    title: "Авторизоваться и купить",
                                    className: "cart__content__sum__buy",
                                    type: "primary"
                                })
                            })]
                        })]
                    })]
                }) : Q.jsxs("div", {
                    className: "cart_empty",
                    children: [Q.jsx("div", {
                        className: "cart_empty__image",
                        children: Q.jsx("img", {
                            src: "https://gspics.org/images/2023/05/09/0RFt3u.png",
                            alt: "Empty cart icon"
                        })
                    }), Q.jsx("h1", {
                        children: "Bruh..."
                    }), Q.jsx("h2", {
                        children: "Корзина пуста. Самое время ее наполнить!"
                    }), Q.jsx(Lw, {
                        type: "primary",
                        title: "Перейти в каталог",
                        onClick: () => e("/app/store")
                    })]
                })
            })
        })
    })),
    Jx = () => {
        const e = fC(hC),
            t = fC(gC),
            {
                setCurrentCategory: n
            } = fC(mC),
            r = I.useCallback((e => () => {
                n(e)
            }), []);
        return Q.jsx("aside", {
            className: "categories",
            children: e.length ? Q.jsx(rv, {
                className: "categories__list",
                children: e.map((e => {
                    const n = "Все" === e.name,
                        o = "Кейсы" === e.name,
                        a = "Рулетки" === e.name,
                        i = n ? "-3" : o ? "-2" : a ? "-1" : 0;
                    return Q.jsxs(rv.Item, {
                        className: Oh("categories__list__item", {
                            all_items: n,
                            cases: o,
                            roulette: a
                        }),
                        style: {
                            order: i
                        },
                        active: t === e.id,
                        onClick: r(e.id),
                        children: [n && FC, o && AC, a && DC, n ? "Все товары" : e.name]
                    }, `categories-item-${e.id}`)
                }))
            }) : Q.jsx(Ey, {
                animation: "border"
            })
        })
    },
    Yx = ({
        product: e,
        filteredProducts: t,
        className: n
    }) => {
        var r;
        const {
            setCurrentProduct: o,
            toggleProductModal: a,
            toggleRouletteModal: i
        } = fC(mC), l = dC(CC), s = I.useCallback((e => () => {
            o(e), e.type === Nx.ROULETTE ? i(!0) : a(!0)
        }), [t]), u = I.useCallback((e => t => {
            t.stopPropagation(), l(e, 1), Lx(Gx.notify.productAddToCard)
        }), []);
        return Q.jsxs("div", {
            onClick: s(e),
            className: `product ${n||""}`,
            children: [Q.jsxs("div", {
                className: "product__wrapper",
                children: [Q.jsx("div", {
                    className: "product__image",
                    children: Q.jsx("img", {
                        src: e.img
                    })
                }), Q.jsxs("div", {
                    className: "product__price",
                    children: [(null == e ? void 0 : e.discount) ? (null == e ? void 0 : e.price) - (null == e ? void 0 : e.price) * (null == e ? void 0 : e.discount) / 100 : null == e ? void 0 : e.price, "₽", !!(null == e ? void 0 : e.discount) && Q.jsx("p", {
                        className: "product__price__degree",
                        children: `–${null==e?void 0:e.discount}%`
                    })]
                })]
            }), Q.jsxs("div", {
                className: "product__action",
                children: [Q.jsx("div", {
                    className: "product__action__name",
                    children: Q.jsx("p", {
                        children: e.name
                    })
                }), Q.jsx("div", {
                    className: "product__action__btn",
                    children: Q.jsx("button", {
                        className: "btn",
                        onClick: u(e),
                        children: null == (r = Gx.product) ? void 0 : r.addCard
                    })
                })]
            })]
        })
    },
    eS = I.memo((() => {
        const [e] = (() => {
            const [e, t] = I.useState([0, 0]);
            return I.useLayoutEffect((() => {
                function e() {
                    t([window.innerWidth, window.innerHeight])
                }
                return window.addEventListener("resize", e), e(), () => window.removeEventListener("resize", e)
            }), []), e
        })(), t = fC(pC), n = fC(gC), r = I.useMemo((() => n ? t.filter((e => e.category === n)) : t), [n, t]), o = (t, n) => 1 === ++n ? "first" : n === t ? "last" : e <= 960 ? 1 === n && t <= 2 ? "first_and_last_row" : n === t && t <= 2 ? "last_and_first_row" : 2 === n ? "last_in_row" : n === t - 1 ? "first_in_last_row" : "" : e < 1200 ? 1 === n && t <= 3 ? "first_and_last_row" : n === t && t <= 2 ? "last_and_first_row" : 3 === n ? "last_in_row" : n === t - 2 ? "first_in_last_row" : "" : e < 1400 && e > 1200 ? 1 === n && t <= 5 ? "first_and_last_row" : n === t && t <= 5 ? "last_and_first_row" : 4 === n ? "last_in_row" : n === t - 3 ? "first_in_last_row" : "" : e >= 1400 ? n === t && t <= 4 ? "last_and_first_row" : 1 === n && t <= 4 ? "first_and_last_row" : 5 === n ? "last_in_row" : n === t - 4 ? "first_in_last_row" : "" : void 0;
        return Q.jsxs("div", {
            className: "products",
            children: [0 === r.length ? new Array(10).fill("").map(((e, t) => Q.jsxs("div", {
                className: "product",
                children: [Q.jsxs("div", {
                    className: "product__wrapper",
                    children: [Q.jsx("div", {
                        className: "product__image",
                        children: Q.jsx(xy, {
                            animation: "glow",
                            children: Q.jsx(xy, {
                                xs: 6,
                                style: {
                                    minWidth: "100%",
                                    minHeight: "150px"
                                }
                            })
                        })
                    }), Q.jsx(xy, {
                        animation: "glow",
                        children: Q.jsx(xy, {
                            xs: 6,
                            size: "xs"
                        })
                    }), Q.jsxs("div", {
                        children: ["Цена", " ", Q.jsx(xy, {
                            animation: "glow",
                            children: Q.jsx(xy, {
                                xs: 4,
                                size: "xs"
                            })
                        })]
                    })]
                }), Q.jsx("div", {
                    className: "product__action",
                    children: Q.jsx("button", {
                        className: "btn",
                        children: "Товара еще нет"
                    })
                })]
            }, `products-item-${t}`))) : null, r.map(((e, t) => Q.jsx(Yx, {
                product: e,
                className: o(r.length, t),
                filteredProducts: r
            }, `product-item-${e.id}`)))]
        })
    })),
    tS = async () => {
        const {
            data: e
        } = await _w.post("/store.info.php", {
            action: "servers"
        });
        return e.data
    }, nS = {
        online: ["online"]
    }, rS = () => {
        const {
            data: e
        } = (e => df({
            queryKey: [...nS.online],
            queryFn: tS,
            refetchInterval: 2e3,
            ...e
        }))();
        return I.useEffect((() => {
            (null == e ? void 0 : e.players) && console.clear()
        }), [e]), Q.jsxs("div", {
            className: "monitoring",
            children: [Q.jsxs("div", {
                className: "server",
                children: [Q.jsxs("div", {
                    className: "server__description",
                    children: [Q.jsx("p", {
                        className: "server__description__name",
                        children: "Название вашего сервера"
                    }), Q.jsx("p", {
                        className: "server__description__title",
                        children: "Описание вашего сервера"
                    })]
                }), Q.jsx("p", {
                    className: "server__status",
                    children: "ON"
                })]
            }), Q.jsxs("div", {
                className: "server__online",
                children: [Q.jsx("div", {
                    className: "server__online__bar",
                    children: Q.jsx("div", {
                        className: "server__online__bar__content",
                        style: {
                            width: `${null==e?void 0:e.players}%`
                        }
                    })
                }), Q.jsxs("p", {
                    className: "server__online__text",
                    children: [null == e ? void 0 : e.players, " / ", null == e ? void 0 : e.playersMax]
                })]
            }), Q.jsx(Lw, {
                className: "server__connect",
                title: Gx.monitoring.reload,
                type: "primary"
            })]
        })
    }, oS = () => {
        const e = xx(_C),
            {
                setCurrentPrivilege: t
            } = xx(EC);
		console.log(e);
        return Q.jsxs(Hg, {
            children: [Q.jsx("div", {
                className: "dashboard",
                children: Q.jsxs("div", {
                    className: "dashboard__top",
                    children: [Q.jsx(rS, {})]
					// Отвечает за слайдер с привелегиями
					/*
				Object.values(e).map(((e, n) => e ? Q.jsx("div", {
                        className: "dashboard__top__item",
                        style: {
                            backgroundImage: `url('${null==e?void 0:e.img}')`
                        },
                        onClick: () => t(e),
                        children: Q.jsxs("div", {
                            className: "price",
                            children: ["1 день ", null == e ? void 0 : e.price, "₽"]
                        })
                    }, n) : Q.jsx("div", {
                        className: "dashboard__top__item skeleton"
                    }, n)))	
				*.
					
                })
            }), Q.jsxs("div", {
                className: "dashboard__catalog",
                children: [Q.jsx("div", {
                    className: "dashboard__catalog__categories",
                    children: Q.jsx(Jx, {})
                }), Q.jsx("div", {
                    className: "dashboard__catalog__products",
                    children: Q.jsx(eS, {})
                })]
            })]
        })
    }, aS = ({
        children: e,
        header: t,
        footer: n,
        ...r
    }) => Q.jsxs(Iv, {
        ...r,
        size: "lg",
        "aria-labelledby": "contained-modal-title-vcenter",
        centered: !0,
        children: [Q.jsx(Iv.Header, {
            closeButton: !0,
            children: Q.jsx(Iv.Title, {
                id: "contained-modal-title-vcenter",
                children: t
            })
        }), Q.jsx(Iv.Body, {
            children: e
        }), Q.jsx(Iv.Footer, {
            children: n
        })]
    }), iS = () => {
        var e;
        const t = xx(RC),
            n = xx(_C),
            [r, o] = I.useState((null == t ? void 0 : t.about).kits[0].name),
            [a, i] = I.useState(null == t ? void 0 : t.name),
            l = I.useMemo((() => {
                var e;
                return (null == (e = n[null == a ? void 0 : a.toLowerCase()]) ? void 0 : e.about).kits.find((e => e.name === r))
            }), [r, a, n]),
            s = I.useCallback((e => () => {
                o(e)
            }), [r]),
            u = e => {
                const t = Object.keys(n);
                e < 0 ? i(t[t.length - 1]) : e > t.length - 1 ? i(t[0]) : i(t[e])
            },
            c = I.useMemo((() => Object.keys(n).indexOf(null == a ? void 0 : a.toLowerCase())), [a, n]),
            d = I.useCallback((e => {
                if (null == l ? void 0 : l.item[e]) {
                    const t = [...l.item[e]];
                    if ((null == t ? void 0 : t.length) < 8) {
                        for (let e = null == t ? void 0 : t.length; e < 8; e++) t.push({
                            img: "",
                            name: "",
                            count: 0
                        });
                        return t
                    }
                }
                return []
            }), [l]);
        return Q.jsxs("div", {
            className: "privilege-kit",
            children: [Q.jsxs("div", {
                className: "privilege-kit__privilege-select",
                children: [Q.jsx(Lw, {
                    onClick: () => u(c - 1),
                    type: "additionary",
                    className: "chevron left",
                    icon: IC,
                    title: ""
                }), Q.jsxs("p", {
                    className: "privilege",
                    children: ["Привилегия ", Q.jsx("span", {
                        className: Oh(null == a ? void 0 : a.toLocaleLowerCase()),
                        children: a
                    })]
                }), Q.jsx(Lw, {
                    onClick: () => u(c + 1),
                    type: "additionary",
                    className: "chevron right",
                    icon: IC,
                    title: ""
                })]
            }), Q.jsx("div", {
                className: "privilege-kit__kit-tabs",
                children: !!a && (null == (e = n[null == a ? void 0 : a.toLowerCase()]) ? void 0 : e.about).kits.map((({
                    name: e
                }, t) => Q.jsx(Lw, {
                    onClick: s(e),
                    type: "kit",
                    title: e,
                    active: r === e
                }, `lit-tab-${t}`)))
            }), Q.jsxs("div", {
                className: "privilege-kit__content",
                children: [Q.jsxs("div", {
                    className: "privilege-kit__content_list",
                    children: [Q.jsx("h2", {
                        children: "ИНВЕНТАРЬ"
                    }), Q.jsx("div", {
                        className: "privilege-kit__content_list__items",
                        children: d("inventory").map((({
                            count: e,
                            name: t,
                            img: n
                        }, r) => Q.jsxs("div", {
                            className: Oh("item", {
                                empty: !n
                            }),
                            children: [Q.jsx("img", {
                                src: n
                            }), Q.jsxs("div", {
                                className: "description",
                                children: [Q.jsx("p", {
                                    className: "name",
                                    children: t
                                }), Q.jsxs("p", {
                                    className: "count",
                                    children: ["X", e]
                                })]
                            })]
                        }, `inventory-item-${r}`)))
                    })]
                }), Q.jsxs("div", {
                    className: "privilege-kit__content_list",
                    children: [Q.jsx("h2", {
                        children: "ПОЯС"
                    }), Q.jsx("div", {
                        className: "privilege-kit__content_list__items",
                        children: d("belt").map((({
                            count: e,
                            name: t,
                            img: n
                        }, r) => Q.jsxs("div", {
                            className: Oh("item", {
                                empty: !n
                            }),
                            children: [Q.jsx("img", {
                                src: n
                            }), Q.jsxs("div", {
                                className: "description",
                                children: [Q.jsx("p", {
                                    className: "name",
                                    children: t
                                }), Q.jsxs("p", {
                                    className: "count",
                                    children: ["X", e]
                                })]
                            })]
                        }, `inventory-item-${r}`)))
                    })]
                }), Q.jsxs("div", {
                    className: "privilege-kit__content_list",
                    children: [Q.jsx("h2", {
                        children: "ОДЕЖДА"
                    }), Q.jsx("div", {
                        className: "privilege-kit__content_list__items",
                        children: d("cloth").map((({
                            count: e,
                            name: t,
                            img: n
                        }, r) => Q.jsxs("div", {
                            className: Oh("item", {
                                empty: !n
                            }),
                            children: [Q.jsx("img", {
                                src: n
                            }), Q.jsxs("div", {
                                className: "description",
                                children: [Q.jsx("p", {
                                    className: "name",
                                    children: t
                                }), Q.jsxs("p", {
                                    className: "count",
                                    children: ["X", e]
                                })]
                            })]
                        }, `inventory-item-${r}`)))
                    })]
                })]
            })]
        })
    }, lS = Array.from({
        length: 28
    }, ((e, t) => t + 3)), sS = () => {
        var e;
        const t = xx(RC),
            {
                setCurrentPrivilege: n
            } = xx(EC);
        dC(CC);
        const r = fC(xC),
            o = Pw(),
            [a, i] = I.useState(!1),
            [l, s] = I.useState(3),
            u = () => {
                i(!1), n(null)
            },
            c = I.useMemo((() => 1 === l || 21 === l ? Gx.privilege.days.first : 2 === l || 3 === l || 4 === l || 24 === l || 22 === l || 23 === l || 24 === l ? Gx.privilege.days.medium : Gx.privilege.days.last), [l]),
            d = I.useCallback((async () => {
                if (r && t && (null == t ? void 0 : t.items)) {
                    const e = null == t ? void 0 : t.items.find((e => e.name === `Привилегия ${t.name} на ${l} ${c}`));
                    o.mutate({
                        id: t.id,
                        dropdown_id: e.id,
                        count: 1
                    }, {
                        onSuccess: e => {
                            e.result === jx.FAIL ? Px(e.mess, {
                                icon: TC
                            }) : Lx(Gx.notify.productBuySuccess, {
                                icon: LC
                            })
                        },
                        onError: () => {
                            Px(Gx.notify.notAuth, {
                                icon: TC
                            })
                        }
                    })
                } else Px(Gx.notify.notAuth, {
                    icon: TC
                });
                u(), s(3)
            }), [r, t, l]),
            f = () => Q.jsxs(Q.Fragment, {
                children: [Q.jsxs("div", {
                    className: "modal__footer__product",
                    children: [Q.jsxs("div", {
                        className: "modal__footer__product__days",
                        children: [null == t ? void 0 : t.name.toLocaleUpperCase(), " на ", l, " ", c]
                    }), Q.jsxs("div", {
                        className: "modal__footer__product__price",
                        children: [!!(null == t ? void 0 : t.discount) && Q.jsx("p", {
                            className: "modal__footer__product__price__old",
                            children: (null == t ? void 0 : t.price) * l
                        }), (null == t ? void 0 : t.discount) ? ((null == t ? void 0 : t.price) - (null == t ? void 0 : t.price) * (null == t ? void 0 : t.discount) / 100) * l : ((null == t ? void 0 : t.price) || 0) * l, "₽", !!(null == t ? void 0 : t.discount) && Q.jsx("p", {
                            className: "modal__footer__product__price__degree",
                            children: `–${null==t?void 0:t.discount}%`
                        })]
                    })]
                }), Q.jsx("div", {
                    className: "modal__footer__action",
                    children: Q.jsx(Lw, {
                        className: "modal__footer__action__button",
                        type: "secondary",
                        title: Gx.product.buy,
                        onClick: d
                    })
                })]
            });
        return Q.jsx(aS, {
            onHide: u,
            show: !!t,
            header: a ? "Содержимое кит наборов" : null == t ? void 0 : t.name.toLocaleUpperCase(),
            footer: a ? Q.jsx("div", {
                className: "kit-footer",
                children: Q.jsx(Lw, {
                    onClick: () => i(!1),
                    title: "Назад",
                    type: "primary"
                })
            }) : Q.jsx(f, {}),
            children: a ? Q.jsx(iS, {}) : Q.jsxs("div", {
                className: "privilege-modal",
                children: [Q.jsxs("div", {
                    className: "privilege-modal__description",
                    children: [Q.jsx("div", {
                        className: "privilege-modal__description__img",
                        style: {
                            backgroundImage: `url('${null==t?void 0:t.img}')`
                        }
                    }), Q.jsx("div", {
                        className: "privilege-modal__description__info",
                        children: !!t && Q.jsxs("div", {
                            className: "privilege-modal__description__info__items",
                            children: [Q.jsx("div", {
                                className: "details",
                                children: Q.jsx("div", {
                                    className: "details__title",
                                    children: Q.jsx("p", {
                                        children: null == (e = null == t ? void 0 : t.about) ? void 0 : e.description
                                    })
                                })
                            }), Q.jsx(Lw, {
                                onClick: () => i(!0),
                                title: "Смотреть кит",
                                type: "additionary"
                            })]
                        })
                    })]
                }), Q.jsx("div", {
                    className: "privilege-modal__day-count",
                    children: Q.jsx(Um, {
                        defaultActiveKey: "0",
                        children: Q.jsxs(Um.Item, {
                            eventKey: "0",
                            children: [Q.jsxs(Um.Header, {
                                children: ["Количество дней: ", l]
                            }), Q.jsx(Um.Body, {
                                children: lS.map(((e, t) => {
                                    return Q.jsx(Lw, {
                                        type: "picker",
                                        title: e,
                                        active: l === e,
                                        onClick: (n = e, () => {
                                            s(n)
                                        })
                                    }, `day-${t}`);
                                    var n
                                }))
                            })]
                        })
                    })
                })]
            })
        })
    }, uS = () => {
        const e = fC(bC),
            t = fC(vC),
            {
                toggleProductModal: n,
                setCurrentProduct: r
            } = fC(mC),
            o = dC(CC),
            a = fC(xC),
            i = Pw(),
            [l, s] = I.useState(1),
            u = I.useCallback((() => {
                n(!1), r(null)
            }), []),
            c = I.useCallback((() => {
                a ? i.mutate({
                    id: null == e ? void 0 : e.id,
                    count: l
                }, {
                    onSuccess: e => {
                        e.result === jx.FAIL ? Px(e.mess, {
                            icon: TC
                        }) : Lx(Gx.notify.productBuySuccess, {
                            icon: LC
                        })
                    },
                    onError: () => {
                        Px(Gx.notify.notAuth, {
                            icon: TC
                        })
                    }
                }) : Px(Gx.notify.notAuth, {
                    icon: TC
                }), n(!1)
            }), [a, e]),
            d = I.useCallback((() => {
                e && (o(e, l), n(!1), Lx(Gx.notify.productAddToCard, {
                    icon: LC
                }))
            }), [t, e, l]),
            f = () => Q.jsxs(Q.Fragment, {
                children: [Q.jsxs("div", {
                    className: "modal__footer__product",
                    children: [Q.jsxs("div", {
                        className: "modal__footer__product__count",
                        children: [Q.jsx("button", {
                            onClick: () => s((e => e - 1 <= 0 ? 1 : e - 1)),
                            children: Q.jsx("svg", {
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: Q.jsx("path", {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M4.25 12C4.25 11.5858 4.58579 11.25 5 11.25H19C19.4142 11.25 19.75 11.5858 19.75 12C19.75 12.4142 19.4142 12.75 19 12.75H5C4.58579 12.75 4.25 12.4142 4.25 12Z",
                                    fill: "white"
                                })
                            })
                        }), e && (null == e ? void 0 : e.amount) * l, Q.jsx("button", {
                            onClick: () => s((e => e + 1)),
                            children: Q.jsx("svg", {
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: Q.jsx("path", {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M12 3.75C12.4142 3.75 12.75 4.08579 12.75 4.5V11.25H19.5C19.9142 11.25 20.25 11.5858 20.25 12C20.25 12.4142 19.9142 12.75 19.5 12.75H12.75V19.5C12.75 19.9142 12.4142 20.25 12 20.25C11.5858 20.25 11.25 19.9142 11.25 19.5V12.75H4.5C4.08579 12.75 3.75 12.4142 3.75 12C3.75 11.5858 4.08579 11.25 4.5 11.25H11.25V4.5C11.25 4.08579 11.5858 3.75 12 3.75Z",
                                    fill: "white"
                                })
                            })
                        })]
                    }), Q.jsxs("div", {
                        className: "modal__footer__product__price",
                        children: [!!(null == e ? void 0 : e.discount) && Q.jsx("p", {
                            className: "modal__footer__product__price__old",
                            children: null == e ? void 0 : e.price
                        }), (null == e ? void 0 : e.discount) ? (null == e ? void 0 : e.price) - (null == e ? void 0 : e.price) * (null == e ? void 0 : e.discount) / 100 : (null == e ? void 0 : e.price) && (null == e ? void 0 : e.price) * l, "₽", !!(null == e ? void 0 : e.discount) && Q.jsx("p", {
                            className: "modal__footer__product__price__degree",
                            children: `–${null==e?void 0:e.discount}%`
                        })]
                    })]
                }), Q.jsxs("div", {
                    className: "modal__footer__action",
                    children: [Q.jsx(Lw, {
                        className: "modal__footer__action__button",
                        type: "secondary",
                        title: Gx.product.buy,
                        onClick: c
                    }), Q.jsx(Lw, {
                        className: "modal__footer__action__button",
                        type: "primary",
                        title: Gx.product.addCard,
                        onClick: d
                    })]
                })]
            });
        return Q.jsx(aS, {
            onHide: u,
            show: t,
            header: null == e ? void 0 : e.name,
            footer: Q.jsx(f, {}),
            children: Q.jsxs("div", {
                className: "modal__product",
                children: [Q.jsx("div", {
                    className: "modal__product__img",
                    children: Q.jsx("img", {
                        src: null == e ? void 0 : e.img,
                        alt: "product img"
                    })
                }), Q.jsx("div", {
                    className: "modal__product__description",
                    children: (null == e ? void 0 : e.about) && (null == e ? void 0 : e.about).length > 1 ? e.about : Gx.product.description
                })]
            })
        })
    }, cS = () => {
        var e;
        const t = fC(bC),
            n = fC(yC),
            {
                toggleRouletteModal: r,
                setCurrentProduct: o
            } = fC(mC),
            a = I.useCallback((() => {
                r(!1), o(null)
            }), []),
            i = () => Q.jsxs(Q.Fragment, {
                children: [Q.jsx("div", {
                    className: "modal__footer__product",
                    children: Q.jsxs("div", {
                        className: "modal__footer__product__price",
                        children: [null == t ? void 0 : t.price, "₽"]
                    })
                }), Q.jsx("div", {
                    className: "modal__footer__action",
                    children: Q.jsx(ug, {
                        children: "Открыть кейс"
                    })
                })]
            });
        return Q.jsx(aS, {
            onHide: a,
            show: n,
            header: null == t ? void 0 : t.name,
            footer: Q.jsx(i, {}),
            children: Q.jsx("div", {
                className: "modal__roulette",
                children: Q.jsx("div", {
                    className: "modal__roulette__items",
                    children: null == (e = null == t ? void 0 : t.items) ? void 0 : e.map(((e, t) => Q.jsx("div", {
                        className: "modal__roulette__items__item",
                        children: t
                    }, t)))
                })
            })
        })
    }, dS = () => {
        const [e, t] = I.useState(0);
        return Q.jsx(Hg, {
            children: Q.jsx("div", {
                className: "carousel__container",
                children: Q.jsxs(xg, {
                    activeIndex: e,
                    onSelect: e => {
                        t(e)
                    },
                    children: [Q.jsx(xg.Item, {
                        children: Q.jsx("img", {
                            className: "d-block",
                            src: "https://gspics.org/images/2023/05/13/0RtqFy.jpg",
                            alt: "First slide"
                        })
                    }), Q.jsx(xg.Item, {
                        children: Q.jsx("img", {
                            className: "d-block",
                            src: "https://gspics.org/images/2023/04/25/0PnKoN.jpg",
                            alt: "Second slide"
                        })
                    })]
                })
            })
        })
    }, fS = () => Q.jsxs(Ox, {
        children: [Q.jsx(dS, {}), Q.jsx(oS, {}), Q.jsx(uS, {}), Q.jsx(cS, {}), Q.jsx(sS, {})]
    }), pS = ({
        balance: e
    }) => Q.jsxs("div", {
        className: "tabs__balance",
        children: [Q.jsxs("div", {
            className: "tabs__balance__title",
            children: [Q.jsx("p", {
                children: "Текущий баланс:"
            }), Q.jsx("p", {
                children: e
            })]
        }), Q.jsxs("div", {
            className: "tabs__balance__payments",
            children: [Q.jsx("img", {
                src: "https://gspics.org/images/2023/05/12/0RccEX.png",
                alt: ""
            }), Q.jsx("img", {
                src: "https://gspics.org/images/2023/05/12/0RchUi.png",
                alt: ""
            }), Q.jsx("img", {
                src: "https://gspics.org/images/2023/05/12/0RctfO.png",
                alt: ""
            }), Q.jsx("img", {
                src: "https://gspics.org/images/2023/05/12/0RcHs3.png",
                alt: ""
            }), Q.jsx("img", {
                src: "https://gspics.org/images/2023/05/12/0RcQWL.png",
                alt: ""
            })]
        }), Q.jsx("div", {
            className: "tabs__balance__add_balance",
            children: Q.jsxs("form", {
                action: "/files/stores/backend/store.donate.php",
                method: "post",
                children: [Q.jsx("input", {
                    name: "sum",
                    type: "number",
                    className: "input"
                }), Q.jsx("input", {
                    type: "hidden",
                    name: "lang",
                    value: "ru"
                }), Q.jsx(Lw, {
                    type: "primary",
                    title: "Пополнить"
                })]
            })
        })]
    }), hS = ({
        data: e
    }) => Q.jsxs("div", {
        className: "tabs__history_transaction",
        children: [Q.jsxs("div", {
            className: "tabs__history_transaction__title",
            children: [Q.jsx("div", {
                className: "tabs__history_transaction__title__column_1",
                children: "Дата"
            }), Q.jsx("div", {
                className: "tabs__history_transaction__title__column_2",
                children: "Операция"
            }), Q.jsx("div", {
                className: "tabs__history_transaction__title__column_3",
                children: "Сумма"
            })]
        }), (null == e ? void 0 : e.history) && e.history.map(((e, t) => {
            const n = parseFloat(e.amount.replace(/ /g, ""));
            return Q.jsxs("div", {
                className: "tabs__history_transaction__item",
                children: [Q.jsx("div", {
                    className: "tabs__history_transaction__item__column_1",
                    children: e.date
                }), Q.jsx("div", {
                    className: "tabs__history_transaction__item__column_2",
                    children: e.about
                }), Q.jsxs("div", {
                    className: "tabs__history_transaction__item__column_3 " + (n > 0 ? "plus" : "minus"),
                    children: [e.amount.replace(/ RUB./g, ""), "₽"]
                })]
            }, `history-item-${t}`)
        }))]
    });
/**
 * table-core
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function mS(e, t) {
    return "function" == typeof e ? e(t) : e
}

function gS(e, t) {
    return n => {
        t.setState((t => ({
            ...t,
            [e]: mS(n, t[e])
        })))
    }
}

function vS(e) {
    return e instanceof Function
}

function yS(e, t, n) {
    let r, o = [];
    return () => {
        let a;
        n.key && n.debug && (a = Date.now());
        const i = e();
        if (!(i.length !== o.length || i.some(((e, t) => o[t] !== e)))) return r;
        let l;
        if (o = i, n.key && n.debug && (l = Date.now()), r = t(...i), null == n || null == n.onChange || n.onChange(r), n.key && n.debug && null != n && n.debug()) {
            const e = Math.round(100 * (Date.now() - a)) / 100,
                t = Math.round(100 * (Date.now() - l)) / 100,
                r = t / 16,
                o = (e, t) => {
                    for (e = String(e); e.length < t;) e = " " + e;
                    return e
                };
            console.info(`%c⏱ ${o(t,5)} /${o(e,5)} ms`, `\n            font-size: .6rem;\n            font-weight: bold;\n            color: hsl(${Math.max(0,Math.min(120-120*r,120))}deg 100% 31%);`, null == n ? void 0 : n.key)
        }
        return r
    }
}

function bS(e, t, n) {
    var r;
    let o = {
        id: null != (r = n.id) ? r : t.id,
        column: t,
        index: n.index,
        isPlaceholder: !!n.isPlaceholder,
        placeholderId: n.placeholderId,
        depth: n.depth,
        subHeaders: [],
        colSpan: 0,
        rowSpan: 0,
        headerGroup: null,
        getLeafHeaders: () => {
            const e = [],
                t = n => {
                    n.subHeaders && n.subHeaders.length && n.subHeaders.map(t), e.push(n)
                };
            return t(o), e
        },
        getContext: () => ({
            table: e,
            header: o,
            column: t
        })
    };
    return e._features.forEach((t => {
        Object.assign(o, null == t.createHeader ? void 0 : t.createHeader(o, e))
    })), o
}
const wS = {
    createTable: e => ({
        getHeaderGroups: yS((() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right]), ((t, n, r, o) => {
            var a, i;
            const l = null != (a = null == r ? void 0 : r.map((e => n.find((t => t.id === e)))).filter(Boolean)) ? a : [],
                s = null != (i = null == o ? void 0 : o.map((e => n.find((t => t.id === e)))).filter(Boolean)) ? i : [];
            return CS(t, [...l, ...n.filter((e => !(null != r && r.includes(e.id) || null != o && o.includes(e.id)))), ...s], e)
        }), {
            key: !1,
            debug: () => {
                var t;
                return null != (t = e.options.debugAll) ? t : e.options.debugHeaders
            }
        }),
        getCenterHeaderGroups: yS((() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right]), ((t, n, r, o) => CS(t, n = n.filter((e => !(null != r && r.includes(e.id) || null != o && o.includes(e.id)))), e, "center")), {
            key: !1,
            debug: () => {
                var t;
                return null != (t = e.options.debugAll) ? t : e.options.debugHeaders
            }
        }),
        getLeftHeaderGroups: yS((() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left]), ((t, n, r) => {
            var o;
            return CS(t, null != (o = null == r ? void 0 : r.map((e => n.find((t => t.id === e)))).filter(Boolean)) ? o : [], e, "left")
        }), {
            key: !1,
            debug: () => {
                var t;
                return null != (t = e.options.debugAll) ? t : e.options.debugHeaders
            }
        }),
        getRightHeaderGroups: yS((() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.right]), ((t, n, r) => {
            var o;
            return CS(t, null != (o = null == r ? void 0 : r.map((e => n.find((t => t.id === e)))).filter(Boolean)) ? o : [], e, "right")
        }), {
            key: !1,
            debug: () => {
                var t;
                return null != (t = e.options.debugAll) ? t : e.options.debugHeaders
            }
        }),
        getFooterGroups: yS((() => [e.getHeaderGroups()]), (e => [...e].reverse()), {
            key: !1,
            debug: () => {
                var t;
                return null != (t = e.options.debugAll) ? t : e.options.debugHeaders
            }
        }),
        getLeftFooterGroups: yS((() => [e.getLeftHeaderGroups()]), (e => [...e].reverse()), {
            key: !1,
            debug: () => {
                var t;
                return null != (t = e.options.debugAll) ? t : e.options.debugHeaders
            }
        }),
        getCenterFooterGroups: yS((() => [e.getCenterHeaderGroups()]), (e => [...e].reverse()), {
            key: !1,
            debug: () => {
                var t;
                return null != (t = e.options.debugAll) ? t : e.options.debugHeaders
            }
        }),
        getRightFooterGroups: yS((() => [e.getRightHeaderGroups()]), (e => [...e].reverse()), {
            key: !1,
            debug: () => {
                var t;
                return null != (t = e.options.debugAll) ? t : e.options.debugHeaders
            }
        }),
        getFlatHeaders: yS((() => [e.getHeaderGroups()]), (e => e.map((e => e.headers)).flat()), {
            key: !1,
            debug: () => {
                var t;
                return null != (t = e.options.debugAll) ? t : e.options.debugHeaders
            }
        }),
        getLeftFlatHeaders: yS((() => [e.getLeftHeaderGroups()]), (e => e.map((e => e.headers)).flat()), {
            key: !1,
            debug: () => {
                var t;
                return null != (t = e.options.debugAll) ? t : e.options.debugHeaders
            }
        }),
        getCenterFlatHeaders: yS((() => [e.getCenterHeaderGroups()]), (e => e.map((e => e.headers)).flat()), {
            key: !1,
            debug: () => {
                var t;
                return null != (t = e.options.debugAll) ? t : e.options.debugHeaders
            }
        }),
        getRightFlatHeaders: yS((() => [e.getRightHeaderGroups()]), (e => e.map((e => e.headers)).flat()), {
            key: !1,
            debug: () => {
                var t;
                return null != (t = e.options.debugAll) ? t : e.options.debugHeaders
            }
        }),
        getCenterLeafHeaders: yS((() => [e.getCenterFlatHeaders()]), (e => e.filter((e => {
            var t;
            return !(null != (t = e.subHeaders) && t.length)
        }))), {
            key: !1,
            debug: () => {
                var t;
                return null != (t = e.options.debugAll) ? t : e.options.debugHeaders
            }
        }),
        getLeftLeafHeaders: yS((() => [e.getLeftFlatHeaders()]), (e => e.filter((e => {
            var t;
            return !(null != (t = e.subHeaders) && t.length)
        }))), {
            key: !1,
            debug: () => {
                var t;
                return null != (t = e.options.debugAll) ? t : e.options.debugHeaders
            }
        }),
        getRightLeafHeaders: yS((() => [e.getRightFlatHeaders()]), (e => e.filter((e => {
            var t;
            return !(null != (t = e.subHeaders) && t.length)
        }))), {
            key: !1,
            debug: () => {
                var t;
                return null != (t = e.options.debugAll) ? t : e.options.debugHeaders
            }
        }),
        getLeafHeaders: yS((() => [e.getLeftHeaderGroups(), e.getCenterHeaderGroups(), e.getRightHeaderGroups()]), ((e, t, n) => {
            var r, o, a, i, l, s;
            return [...null != (r = null == (o = e[0]) ? void 0 : o.headers) ? r : [], ...null != (a = null == (i = t[0]) ? void 0 : i.headers) ? a : [], ...null != (l = null == (s = n[0]) ? void 0 : s.headers) ? l : []].map((e => e.getLeafHeaders())).flat()
        }), {
            key: !1,
            debug: () => {
                var t;
                return null != (t = e.options.debugAll) ? t : e.options.debugHeaders
            }
        })
    })
};

function CS(e, t, n, r) {
    var o, a;
    let i = 0;
    const l = function(e, t) {
        void 0 === t && (t = 1), i = Math.max(i, t), e.filter((e => e.getIsVisible())).forEach((e => {
            var n;
            null != (n = e.columns) && n.length && l(e.columns, t + 1)
        }), 0)
    };
    l(e);
    let s = [];
    const u = (e, t) => {
            const o = {
                    depth: t,
                    id: [r, `${t}`].filter(Boolean).join("_"),
                    headers: []
                },
                a = [];
            e.forEach((e => {
                const i = [...a].reverse()[0];
                let l, s = !1;
                if (e.column.depth === o.depth && e.column.parent ? l = e.column.parent : (l = e.column, s = !0), i && (null == i ? void 0 : i.column) === l) i.subHeaders.push(e);
                else {
                    const o = bS(n, l, {
                        id: [r, t, l.id, null == e ? void 0 : e.id].filter(Boolean).join("_"),
                        isPlaceholder: s,
                        placeholderId: s ? `${a.filter((e=>e.column===l)).length}` : void 0,
                        depth: t,
                        index: a.length
                    });
                    o.subHeaders.push(e), a.push(o)
                }
                o.headers.push(e), e.headerGroup = o
            })), s.push(o), t > 0 && u(a, t - 1)
        },
        c = t.map(((e, t) => bS(n, e, {
            depth: i,
            index: t
        })));
    u(c, i - 1), s.reverse();
    const d = e => e.filter((e => e.column.getIsVisible())).map((e => {
        let t = 0,
            n = 0,
            r = [0];
        e.subHeaders && e.subHeaders.length ? (r = [], d(e.subHeaders).forEach((e => {
            let {
                colSpan: n,
                rowSpan: o
            } = e;
            t += n, r.push(o)
        }))) : t = 1;
        return n += Math.min(...r), e.colSpan = t, e.rowSpan = n, {
            colSpan: t,
            rowSpan: n
        }
    }));
    return d(null != (o = null == (a = s[0]) ? void 0 : a.headers) ? o : []), s
}
const xS = {
        size: 150,
        minSize: 20,
        maxSize: Number.MAX_SAFE_INTEGER
    },
    SS = {
        getDefaultColumnDef: () => xS,
        getInitialState: e => ({
            columnSizing: {},
            columnSizingInfo: {
                startOffset: null,
                startSize: null,
                deltaOffset: null,
                deltaPercentage: null,
                isResizingColumn: !1,
                columnSizingStart: []
            },
            ...e
        }),
        getDefaultOptions: e => ({
            columnResizeMode: "onEnd",
            onColumnSizingChange: gS("columnSizing", e),
            onColumnSizingInfoChange: gS("columnSizingInfo", e)
        }),
        createColumn: (e, t) => ({
            getSize: () => {
                var n, r, o;
                const a = t.getState().columnSizing[e.id];
                return Math.min(Math.max(null != (n = e.columnDef.minSize) ? n : xS.minSize, null != (r = null != a ? a : e.columnDef.size) ? r : xS.size), null != (o = e.columnDef.maxSize) ? o : xS.maxSize)
            },
            getStart: n => {
                const r = n ? "left" === n ? t.getLeftVisibleLeafColumns() : t.getRightVisibleLeafColumns() : t.getVisibleLeafColumns(),
                    o = r.findIndex((t => t.id === e.id));
                if (o > 0) {
                    const e = r[o - 1];
                    return e.getStart(n) + e.getSize()
                }
                return 0
            },
            resetSize: () => {
                t.setColumnSizing((t => {
                    let {
                        [e.id]: n, ...r
                    } = t;
                    return r
                }))
            },
            getCanResize: () => {
                var n, r;
                return (null == (n = e.columnDef.enableResizing) || n) && (null == (r = t.options.enableColumnResizing) || r)
            },
            getIsResizing: () => t.getState().columnSizingInfo.isResizingColumn === e.id
        }),
        createHeader: (e, t) => ({
            getSize: () => {
                let t = 0;
                const n = e => {
                    var r;
                    e.subHeaders.length ? e.subHeaders.forEach(n) : t += null != (r = e.column.getSize()) ? r : 0
                };
                return n(e), t
            },
            getStart: () => {
                if (e.index > 0) {
                    const t = e.headerGroup.headers[e.index - 1];
                    return t.getStart() + t.getSize()
                }
                return 0
            },
            getResizeHandler: () => {
                const n = t.getColumn(e.column.id),
                    r = null == n ? void 0 : n.getCanResize();
                return o => {
                    if (!n || !r) return;
                    if (null == o.persist || o.persist(), _S(o) && o.touches && o.touches.length > 1) return;
                    const a = e.getSize(),
                        i = e ? e.getLeafHeaders().map((e => [e.column.id, e.column.getSize()])) : [
                            [n.id, n.getSize()]
                        ],
                        l = _S(o) ? Math.round(o.touches[0].clientX) : o.clientX,
                        s = {},
                        u = (e, n) => {
                            "number" == typeof n && (t.setColumnSizingInfo((e => {
                                var t, r;
                                const o = n - (null != (t = null == e ? void 0 : e.startOffset) ? t : 0),
                                    a = Math.max(o / (null != (r = null == e ? void 0 : e.startSize) ? r : 0), -.999999);
                                return e.columnSizingStart.forEach((e => {
                                    let [t, n] = e;
                                    s[t] = Math.round(100 * Math.max(n + n * a, 0)) / 100
                                })), {
                                    ...e,
                                    deltaOffset: o,
                                    deltaPercentage: a
                                }
                            })), "onChange" !== t.options.columnResizeMode && "end" !== e || t.setColumnSizing((e => ({
                                ...e,
                                ...s
                            }))))
                        },
                        c = e => u("move", e),
                        d = e => {
                            u("end", e), t.setColumnSizingInfo((e => ({
                                ...e,
                                isResizingColumn: !1,
                                startOffset: null,
                                startSize: null,
                                deltaOffset: null,
                                deltaPercentage: null,
                                columnSizingStart: []
                            })))
                        },
                        f = {
                            moveHandler: e => c(e.clientX),
                            upHandler: e => {
                                document.removeEventListener("mousemove", f.moveHandler), document.removeEventListener("mouseup", f.upHandler), d(e.clientX)
                            }
                        },
                        p = {
                            moveHandler: e => (e.cancelable && (e.preventDefault(), e.stopPropagation()), c(e.touches[0].clientX), !1),
                            upHandler: e => {
                                var t;
                                document.removeEventListener("touchmove", p.moveHandler), document.removeEventListener("touchend", p.upHandler), e.cancelable && (e.preventDefault(), e.stopPropagation()), d(null == (t = e.touches[0]) ? void 0 : t.clientX)
                            }
                        },
                        h = !! function() {
                            if ("boolean" == typeof ES) return ES;
                            let e = !1;
                            try {
                                const t = {
                                        get passive() {
                                            return e = !0, !1
                                        }
                                    },
                                    n = () => {};
                                window.addEventListener("test", n, t), window.removeEventListener("test", n)
                            } catch (t) {
                                e = !1
                            }
                            return ES = e, ES
                        }() && {
                            passive: !1
                        };
                    _S(o) ? (document.addEventListener("touchmove", p.moveHandler, h), document.addEventListener("touchend", p.upHandler, h)) : (document.addEventListener("mousemove", f.moveHandler, h), document.addEventListener("mouseup", f.upHandler, h)), t.setColumnSizingInfo((e => ({
                        ...e,
                        startOffset: l,
                        startSize: a,
                        deltaOffset: 0,
                        deltaPercentage: 0,
                        columnSizingStart: i,
                        isResizingColumn: n.id
                    })))
                }
            }
        }),
        createTable: e => ({
            setColumnSizing: t => null == e.options.onColumnSizingChange ? void 0 : e.options.onColumnSizingChange(t),
            setColumnSizingInfo: t => null == e.options.onColumnSizingInfoChange ? void 0 : e.options.onColumnSizingInfoChange(t),
            resetColumnSizing: t => {
                var n;
                e.setColumnSizing(t ? {} : null != (n = e.initialState.columnSizing) ? n : {})
            },
            resetHeaderSizeInfo: t => {
                var n;
                e.setColumnSizingInfo(t ? {
                    startOffset: null,
                    startSize: null,
                    deltaOffset: null,
                    deltaPercentage: null,
                    isResizingColumn: !1,
                    columnSizingStart: []
                } : null != (n = e.initialState.columnSizingInfo) ? n : {
                    startOffset: null,
                    startSize: null,
                    deltaOffset: null,
                    deltaPercentage: null,
                    isResizingColumn: !1,
                    columnSizingStart: []
                })
            },
            getTotalSize: () => {
                var t, n;
                return null != (t = null == (n = e.getHeaderGroups()[0]) ? void 0 : n.headers.reduce(((e, t) => e + t.getSize()), 0)) ? t : 0
            },
            getLeftTotalSize: () => {
                var t, n;
                return null != (t = null == (n = e.getLeftHeaderGroups()[0]) ? void 0 : n.headers.reduce(((e, t) => e + t.getSize()), 0)) ? t : 0
            },
            getCenterTotalSize: () => {
                var t, n;
                return null != (t = null == (n = e.getCenterHeaderGroups()[0]) ? void 0 : n.headers.reduce(((e, t) => e + t.getSize()), 0)) ? t : 0
            },
            getRightTotalSize: () => {
                var t, n;
                return null != (t = null == (n = e.getRightHeaderGroups()[0]) ? void 0 : n.headers.reduce(((e, t) => e + t.getSize()), 0)) ? t : 0
            }
        })
    };
let ES = null;

function _S(e) {
    return "touchstart" === e.type
}
const RS = {
        getInitialState: e => ({
            expanded: {},
            ...e
        }),
        getDefaultOptions: e => ({
            onExpandedChange: gS("expanded", e),
            paginateExpandedRows: !0
        }),
        createTable: e => {
            let t = !1,
                n = !1;
            return {
                _autoResetExpanded: () => {
                    var r, o;
                    if (t) {
                        if (null != (r = null != (o = e.options.autoResetAll) ? o : e.options.autoResetExpanded) ? r : !e.options.manualExpanding) {
                            if (n) return;
                            n = !0, e._queue((() => {
                                e.resetExpanded(), n = !1
                            }))
                        }
                    } else e._queue((() => {
                        t = !0
                    }))
                },
                setExpanded: t => null == e.options.onExpandedChange ? void 0 : e.options.onExpandedChange(t),
                toggleAllRowsExpanded: t => {
                    (null != t ? t : !e.getIsAllRowsExpanded()) ? e.setExpanded(!0): e.setExpanded({})
                },
                resetExpanded: t => {
                    var n, r;
                    e.setExpanded(t ? {} : null != (n = null == (r = e.initialState) ? void 0 : r.expanded) ? n : {})
                },
                getCanSomeRowsExpand: () => e.getPrePaginationRowModel().flatRows.some((e => e.getCanExpand())),
                getToggleAllRowsExpandedHandler: () => t => {
                    null == t.persist || t.persist(), e.toggleAllRowsExpanded()
                },
                getIsSomeRowsExpanded: () => {
                    const t = e.getState().expanded;
                    return !0 === t || Object.values(t).some(Boolean)
                },
                getIsAllRowsExpanded: () => {
                    const t = e.getState().expanded;
                    return "boolean" == typeof t ? !0 === t : !!Object.keys(t).length && !e.getRowModel().flatRows.some((e => !e.getIsExpanded()))
                },
                getExpandedDepth: () => {
                    let t = 0;
                    return (!0 === e.getState().expanded ? Object.keys(e.getRowModel().rowsById) : Object.keys(e.getState().expanded)).forEach((e => {
                        const n = e.split(".");
                        t = Math.max(t, n.length)
                    })), t
                },
                getPreExpandedRowModel: () => e.getSortedRowModel(),
                getExpandedRowModel: () => (!e._getExpandedRowModel && e.options.getExpandedRowModel && (e._getExpandedRowModel = e.options.getExpandedRowModel(e)), e.options.manualExpanding || !e._getExpandedRowModel ? e.getPreExpandedRowModel() : e._getExpandedRowModel())
            }
        },
        createRow: (e, t) => ({
            toggleExpanded: n => {
                t.setExpanded((r => {
                    var o;
                    const a = !0 === r || !(null == r || !r[e.id]);
                    let i = {};
                    if (!0 === r ? Object.keys(t.getRowModel().rowsById).forEach((e => {
                            i[e] = !0
                        })) : i = r, n = null != (o = n) ? o : !a, !a && n) return {
                        ...i,
                        [e.id]: !0
                    };
                    if (a && !n) {
                        const {
                            [e.id]: t, ...n
                        } = i;
                        return n
                    }
                    return r
                }))
            },
            getIsExpanded: () => {
                var n;
                const r = t.getState().expanded;
                return !!(null != (n = null == t.options.getIsRowExpanded ? void 0 : t.options.getIsRowExpanded(e)) ? n : !0 === r || (null == r ? void 0 : r[e.id]))
            },
            getCanExpand: () => {
                var n, r, o;
                return null != (n = null == t.options.getRowCanExpand ? void 0 : t.options.getRowCanExpand(e)) ? n : (null == (r = t.options.enableExpanding) || r) && !(null == (o = e.subRows) || !o.length)
            },
            getToggleExpandedHandler: () => {
                const t = e.getCanExpand();
                return () => {
                    t && e.toggleExpanded()
                }
            }
        })
    },
    kS = (e, t, n) => {
        var r, o, a;
        const i = n.toLowerCase();
        return Boolean(null == (r = e.getValue(t)) || null == (o = r.toString()) || null == (a = o.toLowerCase()) ? void 0 : a.includes(i))
    };
kS.autoRemove = e => DS(e);
const OS = (e, t, n) => {
    var r, o;
    return Boolean(null == (r = e.getValue(t)) || null == (o = r.toString()) ? void 0 : o.includes(n))
};
OS.autoRemove = e => DS(e);
const NS = (e, t, n) => {
    var r, o;
    return (null == (r = e.getValue(t)) || null == (o = r.toString()) ? void 0 : o.toLowerCase()) === (null == n ? void 0 : n.toLowerCase())
};
NS.autoRemove = e => DS(e);
const jS = (e, t, n) => {
    var r;
    return null == (r = e.getValue(t)) ? void 0 : r.includes(n)
};
jS.autoRemove = e => DS(e) || !(null != e && e.length);
const PS = (e, t, n) => !n.some((n => {
    var r;
    return !(null != (r = e.getValue(t)) && r.includes(n))
}));
PS.autoRemove = e => DS(e) || !(null != e && e.length);
const LS = (e, t, n) => n.some((n => {
    var r;
    return null == (r = e.getValue(t)) ? void 0 : r.includes(n)
}));
LS.autoRemove = e => DS(e) || !(null != e && e.length);
const TS = (e, t, n) => e.getValue(t) === n;
TS.autoRemove = e => DS(e);
const MS = (e, t, n) => e.getValue(t) == n;
MS.autoRemove = e => DS(e);
const FS = (e, t, n) => {
    let [r, o] = n;
    const a = e.getValue(t);
    return a >= r && a <= o
};
FS.resolveFilterValue = e => {
    let [t, n] = e, r = "number" != typeof t ? parseFloat(t) : t, o = "number" != typeof n ? parseFloat(n) : n, a = null === t || Number.isNaN(r) ? -1 / 0 : r, i = null === n || Number.isNaN(o) ? 1 / 0 : o;
    if (a > i) {
        const e = a;
        a = i, i = e
    }
    return [a, i]
}, FS.autoRemove = e => DS(e) || DS(e[0]) && DS(e[1]);
const AS = {
    includesString: kS,
    includesStringSensitive: OS,
    equalsString: NS,
    arrIncludes: jS,
    arrIncludesAll: PS,
    arrIncludesSome: LS,
    equals: TS,
    weakEquals: MS,
    inNumberRange: FS
};

function DS(e) {
    return null == e || "" === e
}

function IS(e, t, n) {
    return !(!e || !e.autoRemove) && e.autoRemove(t, n) || void 0 === t || "string" == typeof t && !t
}
const zS = {
    sum: (e, t, n) => n.reduce(((t, n) => {
        const r = n.getValue(e);
        return t + ("number" == typeof r ? r : 0)
    }), 0),
    min: (e, t, n) => {
        let r;
        return n.forEach((t => {
            const n = t.getValue(e);
            null != n && (r > n || void 0 === r && n >= n) && (r = n)
        })), r
    },
    max: (e, t, n) => {
        let r;
        return n.forEach((t => {
            const n = t.getValue(e);
            null != n && (r < n || void 0 === r && n >= n) && (r = n)
        })), r
    },
    extent: (e, t, n) => {
        let r, o;
        return n.forEach((t => {
            const n = t.getValue(e);
            null != n && (void 0 === r ? n >= n && (r = o = n) : (r > n && (r = n), o < n && (o = n)))
        })), [r, o]
    },
    mean: (e, t) => {
        let n = 0,
            r = 0;
        if (t.forEach((t => {
                let o = t.getValue(e);
                null != o && (o = +o) >= o && (++n, r += o)
            })), n) return r / n
    },
    median: (e, t) => {
        if (!t.length) return;
        const n = t.map((t => t.getValue(e)));
        if (r = n, !Array.isArray(r) || !r.every((e => "number" == typeof e))) return;
        var r;
        if (1 === n.length) return n[0];
        const o = Math.floor(n.length / 2),
            a = n.sort(((e, t) => e - t));
        return n.length % 2 != 0 ? a[o] : (a[o - 1] + a[o]) / 2
    },
    unique: (e, t) => Array.from(new Set(t.map((t => t.getValue(e)))).values()),
    uniqueCount: (e, t) => new Set(t.map((t => t.getValue(e)))).size,
    count: (e, t) => t.length
};
const US = {
        getInitialState: e => ({
            rowSelection: {},
            ...e
        }),
        getDefaultOptions: e => ({
            onRowSelectionChange: gS("rowSelection", e),
            enableRowSelection: !0,
            enableMultiRowSelection: !0,
            enableSubRowSelection: !0
        }),
        createTable: e => ({
            setRowSelection: t => null == e.options.onRowSelectionChange ? void 0 : e.options.onRowSelectionChange(t),
            resetRowSelection: t => {
                var n;
                return e.setRowSelection(t ? {} : null != (n = e.initialState.rowSelection) ? n : {})
            },
            toggleAllRowsSelected: t => {
                e.setRowSelection((n => {
                    t = void 0 !== t ? t : !e.getIsAllRowsSelected();
                    const r = {
                            ...n
                        },
                        o = e.getPreGroupedRowModel().flatRows;
                    return t ? o.forEach((e => {
                        e.getCanSelect() && (r[e.id] = !0)
                    })) : o.forEach((e => {
                        delete r[e.id]
                    })), r
                }))
            },
            toggleAllPageRowsSelected: t => e.setRowSelection((n => {
                const r = void 0 !== t ? t : !e.getIsAllPageRowsSelected(),
                    o = {
                        ...n
                    };
                return e.getRowModel().rows.forEach((t => {
                    VS(o, t.id, r, e)
                })), o
            })),
            getPreSelectedRowModel: () => e.getCoreRowModel(),
            getSelectedRowModel: yS((() => [e.getState().rowSelection, e.getCoreRowModel()]), ((t, n) => Object.keys(t).length ? BS(e, n) : {
                rows: [],
                flatRows: [],
                rowsById: {}
            }), {
                key: !1,
                debug: () => {
                    var t;
                    return null != (t = e.options.debugAll) ? t : e.options.debugTable
                }
            }),
            getFilteredSelectedRowModel: yS((() => [e.getState().rowSelection, e.getFilteredRowModel()]), ((t, n) => Object.keys(t).length ? BS(e, n) : {
                rows: [],
                flatRows: [],
                rowsById: {}
            }), {
                key: "getFilteredSelectedRowModel",
                debug: () => {
                    var t;
                    return null != (t = e.options.debugAll) ? t : e.options.debugTable
                }
            }),
            getGroupedSelectedRowModel: yS((() => [e.getState().rowSelection, e.getSortedRowModel()]), ((t, n) => Object.keys(t).length ? BS(e, n) : {
                rows: [],
                flatRows: [],
                rowsById: {}
            }), {
                key: "getGroupedSelectedRowModel",
                debug: () => {
                    var t;
                    return null != (t = e.options.debugAll) ? t : e.options.debugTable
                }
            }),
            getIsAllRowsSelected: () => {
                const t = e.getFilteredRowModel().flatRows,
                    {
                        rowSelection: n
                    } = e.getState();
                let r = Boolean(t.length && Object.keys(n).length);
                return r && t.some((e => e.getCanSelect() && !n[e.id])) && (r = !1), r
            },
            getIsAllPageRowsSelected: () => {
                const t = e.getPaginationRowModel().flatRows.filter((e => e.getCanSelect())),
                    {
                        rowSelection: n
                    } = e.getState();
                let r = !!t.length;
                return r && t.some((e => !n[e.id])) && (r = !1), r
            },
            getIsSomeRowsSelected: () => {
                var t;
                const n = Object.keys(null != (t = e.getState().rowSelection) ? t : {}).length;
                return n > 0 && n < e.getFilteredRowModel().flatRows.length
            },
            getIsSomePageRowsSelected: () => {
                const t = e.getPaginationRowModel().flatRows;
                return !e.getIsAllPageRowsSelected() && t.filter((e => e.getCanSelect())).some((e => e.getIsSelected() || e.getIsSomeSelected()))
            },
            getToggleAllRowsSelectedHandler: () => t => {
                e.toggleAllRowsSelected(t.target.checked)
            },
            getToggleAllPageRowsSelectedHandler: () => t => {
                e.toggleAllPageRowsSelected(t.target.checked)
            }
        }),
        createRow: (e, t) => ({
            toggleSelected: n => {
                const r = e.getIsSelected();
                t.setRowSelection((o => {
                    if (r === (n = void 0 !== n ? n : !r)) return o;
                    const a = {
                        ...o
                    };
                    return VS(a, e.id, n, t), a
                }))
            },
            getIsSelected: () => {
                const {
                    rowSelection: n
                } = t.getState();
                return HS(e, n)
            },
            getIsSomeSelected: () => {
                const {
                    rowSelection: n
                } = t.getState();
                return "some" === $S(e, n)
            },
            getIsAllSubRowsSelected: () => {
                const {
                    rowSelection: n
                } = t.getState();
                return "all" === $S(e, n)
            },
            getCanSelect: () => {
                var n;
                return "function" == typeof t.options.enableRowSelection ? t.options.enableRowSelection(e) : null == (n = t.options.enableRowSelection) || n
            },
            getCanSelectSubRows: () => {
                var n;
                return "function" == typeof t.options.enableSubRowSelection ? t.options.enableSubRowSelection(e) : null == (n = t.options.enableSubRowSelection) || n
            },
            getCanMultiSelect: () => {
                var n;
                return "function" == typeof t.options.enableMultiRowSelection ? t.options.enableMultiRowSelection(e) : null == (n = t.options.enableMultiRowSelection) || n
            },
            getToggleSelectedHandler: () => {
                const t = e.getCanSelect();
                return n => {
                    var r;
                    t && e.toggleSelected(null == (r = n.target) ? void 0 : r.checked)
                }
            }
        })
    },
    VS = (e, t, n, r) => {
        var o;
        const a = r.getRow(t);
        n ? (a.getCanMultiSelect() || Object.keys(e).forEach((t => delete e[t])), a.getCanSelect() && (e[t] = !0)) : delete e[t], null != (o = a.subRows) && o.length && a.getCanSelectSubRows() && a.subRows.forEach((t => VS(e, t.id, n, r)))
    };

function BS(e, t) {
    const n = e.getState().rowSelection,
        r = [],
        o = {},
        a = function(e, t) {
            return e.map((e => {
                var t;
                const i = HS(e, n);
                if (i && (r.push(e), o[e.id] = e), null != (t = e.subRows) && t.length && (e = {
                        ...e,
                        subRows: a(e.subRows)
                    }), i) return e
            })).filter(Boolean)
        };
    return {
        rows: a(t.rows),
        flatRows: r,
        rowsById: o
    }
}

function HS(e, t) {
    var n;
    return null != (n = t[e.id]) && n
}

function $S(e, t, n) {
    if (e.subRows && e.subRows.length) {
        let n = !0,
            r = !1;
        return e.subRows.forEach((e => {
            r && !n || (HS(e, t) ? r = !0 : n = !1)
        })), n ? "all" : !!r && "some"
    }
    return !1
}
const qS = /([0-9]+)/gm;

function KS(e, t) {
    return e === t ? 0 : e > t ? 1 : -1
}

function QS(e) {
    return "number" == typeof e ? isNaN(e) || e === 1 / 0 || e === -1 / 0 ? "" : String(e) : "string" == typeof e ? e : ""
}

function WS(e, t) {
    const n = e.split(qS).filter(Boolean),
        r = t.split(qS).filter(Boolean);
    for (; n.length && r.length;) {
        const e = n.shift(),
            t = r.shift(),
            o = parseInt(e, 10),
            a = parseInt(t, 10),
            i = [o, a].sort();
        if (isNaN(i[0])) {
            if (e > t) return 1;
            if (t > e) return -1
        } else {
            if (isNaN(i[1])) return isNaN(o) ? -1 : 1;
            if (o > a) return 1;
            if (a > o) return -1
        }
    }
    return n.length - r.length
}
const GS = {
        alphanumeric: (e, t, n) => WS(QS(e.getValue(n)).toLowerCase(), QS(t.getValue(n)).toLowerCase()),
        alphanumericCaseSensitive: (e, t, n) => WS(QS(e.getValue(n)), QS(t.getValue(n))),
        text: (e, t, n) => KS(QS(e.getValue(n)).toLowerCase(), QS(t.getValue(n)).toLowerCase()),
        textCaseSensitive: (e, t, n) => KS(QS(e.getValue(n)), QS(t.getValue(n))),
        datetime: (e, t, n) => {
            const r = e.getValue(n),
                o = t.getValue(n);
            return r > o ? 1 : r < o ? -1 : 0
        },
        basic: (e, t, n) => KS(e.getValue(n), t.getValue(n))
    },
    ZS = [wS, {
        getInitialState: e => ({
            columnVisibility: {},
            ...e
        }),
        getDefaultOptions: e => ({
            onColumnVisibilityChange: gS("columnVisibility", e)
        }),
        createColumn: (e, t) => ({
            toggleVisibility: n => {
                e.getCanHide() && t.setColumnVisibility((t => ({
                    ...t,
                    [e.id]: null != n ? n : !e.getIsVisible()
                })))
            },
            getIsVisible: () => {
                var n, r;
                return null == (n = null == (r = t.getState().columnVisibility) ? void 0 : r[e.id]) || n
            },
            getCanHide: () => {
                var n, r;
                return (null == (n = e.columnDef.enableHiding) || n) && (null == (r = t.options.enableHiding) || r)
            },
            getToggleVisibilityHandler: () => t => {
                null == e.toggleVisibility || e.toggleVisibility(t.target.checked)
            }
        }),
        createRow: (e, t) => ({
            _getAllVisibleCells: yS((() => [e.getAllCells(), t.getState().columnVisibility]), (e => e.filter((e => e.column.getIsVisible()))), {
                key: "row._getAllVisibleCells",
                debug: () => {
                    var e;
                    return null != (e = t.options.debugAll) ? e : t.options.debugRows
                }
            }),
            getVisibleCells: yS((() => [e.getLeftVisibleCells(), e.getCenterVisibleCells(), e.getRightVisibleCells()]), ((e, t, n) => [...e, ...t, ...n]), {
                key: !1,
                debug: () => {
                    var e;
                    return null != (e = t.options.debugAll) ? e : t.options.debugRows
                }
            })
        }),
        createTable: e => {
            const t = (t, n) => yS((() => [n(), n().filter((e => e.getIsVisible())).map((e => e.id)).join("_")]), (e => e.filter((e => null == e.getIsVisible ? void 0 : e.getIsVisible()))), {
                key: t,
                debug: () => {
                    var t;
                    return null != (t = e.options.debugAll) ? t : e.options.debugColumns
                }
            });
            return {
                getVisibleFlatColumns: t("getVisibleFlatColumns", (() => e.getAllFlatColumns())),
                getVisibleLeafColumns: t("getVisibleLeafColumns", (() => e.getAllLeafColumns())),
                getLeftVisibleLeafColumns: t("getLeftVisibleLeafColumns", (() => e.getLeftLeafColumns())),
                getRightVisibleLeafColumns: t("getRightVisibleLeafColumns", (() => e.getRightLeafColumns())),
                getCenterVisibleLeafColumns: t("getCenterVisibleLeafColumns", (() => e.getCenterLeafColumns())),
                setColumnVisibility: t => null == e.options.onColumnVisibilityChange ? void 0 : e.options.onColumnVisibilityChange(t),
                resetColumnVisibility: t => {
                    var n;
                    e.setColumnVisibility(t ? {} : null != (n = e.initialState.columnVisibility) ? n : {})
                },
                toggleAllColumnsVisible: t => {
                    var n;
                    t = null != (n = t) ? n : !e.getIsAllColumnsVisible(), e.setColumnVisibility(e.getAllLeafColumns().reduce(((e, n) => ({
                        ...e,
                        [n.id]: t || !(null != n.getCanHide && n.getCanHide())
                    })), {}))
                },
                getIsAllColumnsVisible: () => !e.getAllLeafColumns().some((e => !(null != e.getIsVisible && e.getIsVisible()))),
                getIsSomeColumnsVisible: () => e.getAllLeafColumns().some((e => null == e.getIsVisible ? void 0 : e.getIsVisible())),
                getToggleAllColumnsVisibilityHandler: () => t => {
                    var n;
                    e.toggleAllColumnsVisible(null == (n = t.target) ? void 0 : n.checked)
                }
            }
        }
    }, {
        getInitialState: e => ({
            columnOrder: [],
            ...e
        }),
        getDefaultOptions: e => ({
            onColumnOrderChange: gS("columnOrder", e)
        }),
        createTable: e => ({
            setColumnOrder: t => null == e.options.onColumnOrderChange ? void 0 : e.options.onColumnOrderChange(t),
            resetColumnOrder: t => {
                var n;
                e.setColumnOrder(t ? [] : null != (n = e.initialState.columnOrder) ? n : [])
            },
            _getOrderColumnsFn: yS((() => [e.getState().columnOrder, e.getState().grouping, e.options.groupedColumnMode]), ((e, t, n) => r => {
                let o = [];
                if (null != e && e.length) {
                    const t = [...e],
                        n = [...r];
                    for (; n.length && t.length;) {
                        const e = t.shift(),
                            r = n.findIndex((t => t.id === e));
                        r > -1 && o.push(n.splice(r, 1)[0])
                    }
                    o = [...o, ...n]
                } else o = r;
                return function(e, t, n) {
                    if (null == t || !t.length || !n) return e;
                    const r = e.filter((e => !t.includes(e.id)));
                    return "remove" === n ? r : [...t.map((t => e.find((e => e.id === t)))).filter(Boolean), ...r]
                }(o, t, n)
            }), {
                key: !1
            })
        })
    }, {
        getInitialState: e => ({
            columnPinning: {
                left: [],
                right: []
            },
            ...e
        }),
        getDefaultOptions: e => ({
            onColumnPinningChange: gS("columnPinning", e)
        }),
        createColumn: (e, t) => ({
            pin: n => {
                const r = e.getLeafColumns().map((e => e.id)).filter(Boolean);
                t.setColumnPinning((e => {
                    var t, o, a, i, l, s;
                    return "right" === n ? {
                        left: (null != (a = null == e ? void 0 : e.left) ? a : []).filter((e => !(null != r && r.includes(e)))),
                        right: [...(null != (i = null == e ? void 0 : e.right) ? i : []).filter((e => !(null != r && r.includes(e)))), ...r]
                    } : "left" === n ? {
                        left: [...(null != (l = null == e ? void 0 : e.left) ? l : []).filter((e => !(null != r && r.includes(e)))), ...r],
                        right: (null != (s = null == e ? void 0 : e.right) ? s : []).filter((e => !(null != r && r.includes(e))))
                    } : {
                        left: (null != (t = null == e ? void 0 : e.left) ? t : []).filter((e => !(null != r && r.includes(e)))),
                        right: (null != (o = null == e ? void 0 : e.right) ? o : []).filter((e => !(null != r && r.includes(e))))
                    }
                }))
            },
            getCanPin: () => e.getLeafColumns().some((e => {
                var n, r;
                return (null == (n = e.columnDef.enablePinning) || n) && (null == (r = t.options.enablePinning) || r)
            })),
            getIsPinned: () => {
                const n = e.getLeafColumns().map((e => e.id)),
                    {
                        left: r,
                        right: o
                    } = t.getState().columnPinning,
                    a = n.some((e => null == r ? void 0 : r.includes(e))),
                    i = n.some((e => null == o ? void 0 : o.includes(e)));
                return a ? "left" : !!i && "right"
            },
            getPinnedIndex: () => {
                var n, r, o;
                const a = e.getIsPinned();
                return a ? null != (n = null == (r = t.getState().columnPinning) || null == (o = r[a]) ? void 0 : o.indexOf(e.id)) ? n : -1 : 0
            }
        }),
        createRow: (e, t) => ({
            getCenterVisibleCells: yS((() => [e._getAllVisibleCells(), t.getState().columnPinning.left, t.getState().columnPinning.right]), ((e, t, n) => {
                const r = [...null != t ? t : [], ...null != n ? n : []];
                return e.filter((e => !r.includes(e.column.id)))
            }), {
                key: "row.getCenterVisibleCells",
                debug: () => {
                    var e;
                    return null != (e = t.options.debugAll) ? e : t.options.debugRows
                }
            }),
            getLeftVisibleCells: yS((() => [e._getAllVisibleCells(), t.getState().columnPinning.left, , ]), ((e, t) => (null != t ? t : []).map((t => e.find((e => e.column.id === t)))).filter(Boolean).map((e => ({
                ...e,
                position: "left"
            })))), {
                key: "row.getLeftVisibleCells",
                debug: () => {
                    var e;
                    return null != (e = t.options.debugAll) ? e : t.options.debugRows
                }
            }),
            getRightVisibleCells: yS((() => [e._getAllVisibleCells(), t.getState().columnPinning.right]), ((e, t) => (null != t ? t : []).map((t => e.find((e => e.column.id === t)))).filter(Boolean).map((e => ({
                ...e,
                position: "right"
            })))), {
                key: "row.getRightVisibleCells",
                debug: () => {
                    var e;
                    return null != (e = t.options.debugAll) ? e : t.options.debugRows
                }
            })
        }),
        createTable: e => ({
            setColumnPinning: t => null == e.options.onColumnPinningChange ? void 0 : e.options.onColumnPinningChange(t),
            resetColumnPinning: t => {
                var n, r;
                return e.setColumnPinning(t ? {
                    left: [],
                    right: []
                } : null != (n = null == (r = e.initialState) ? void 0 : r.columnPinning) ? n : {
                    left: [],
                    right: []
                })
            },
            getIsSomeColumnsPinned: t => {
                var n;
                const r = e.getState().columnPinning;
                var o, a;
                return t ? Boolean(null == (n = r[t]) ? void 0 : n.length) : Boolean((null == (o = r.left) ? void 0 : o.length) || (null == (a = r.right) ? void 0 : a.length))
            },
            getLeftLeafColumns: yS((() => [e.getAllLeafColumns(), e.getState().columnPinning.left]), ((e, t) => (null != t ? t : []).map((t => e.find((e => e.id === t)))).filter(Boolean)), {
                key: !1,
                debug: () => {
                    var t;
                    return null != (t = e.options.debugAll) ? t : e.options.debugColumns
                }
            }),
            getRightLeafColumns: yS((() => [e.getAllLeafColumns(), e.getState().columnPinning.right]), ((e, t) => (null != t ? t : []).map((t => e.find((e => e.id === t)))).filter(Boolean)), {
                key: !1,
                debug: () => {
                    var t;
                    return null != (t = e.options.debugAll) ? t : e.options.debugColumns
                }
            }),
            getCenterLeafColumns: yS((() => [e.getAllLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right]), ((e, t, n) => {
                const r = [...null != t ? t : [], ...null != n ? n : []];
                return e.filter((e => !r.includes(e.id)))
            }), {
                key: !1,
                debug: () => {
                    var t;
                    return null != (t = e.options.debugAll) ? t : e.options.debugColumns
                }
            })
        })
    }, {
        getDefaultColumnDef: () => ({
            filterFn: "auto"
        }),
        getInitialState: e => ({
            columnFilters: [],
            globalFilter: void 0,
            ...e
        }),
        getDefaultOptions: e => ({
            onColumnFiltersChange: gS("columnFilters", e),
            onGlobalFilterChange: gS("globalFilter", e),
            filterFromLeafRows: !1,
            maxLeafRowFilterDepth: 100,
            globalFilterFn: "auto",
            getColumnCanGlobalFilter: t => {
                var n, r;
                const o = null == (n = e.getCoreRowModel().flatRows[0]) || null == (r = n._getAllCellsByColumnId()[t.id]) ? void 0 : r.getValue();
                return "string" == typeof o || "number" == typeof o
            }
        }),
        createColumn: (e, t) => ({
            getAutoFilterFn: () => {
                const n = t.getCoreRowModel().flatRows[0],
                    r = null == n ? void 0 : n.getValue(e.id);
                return "string" == typeof r ? AS.includesString : "number" == typeof r ? AS.inNumberRange : "boolean" == typeof r || null !== r && "object" == typeof r ? AS.equals : Array.isArray(r) ? AS.arrIncludes : AS.weakEquals
            },
            getFilterFn: () => {
                var n, r;
                return vS(e.columnDef.filterFn) ? e.columnDef.filterFn : "auto" === e.columnDef.filterFn ? e.getAutoFilterFn() : null != (n = null == (r = t.options.filterFns) ? void 0 : r[e.columnDef.filterFn]) ? n : AS[e.columnDef.filterFn]
            },
            getCanFilter: () => {
                var n, r, o;
                return (null == (n = e.columnDef.enableColumnFilter) || n) && (null == (r = t.options.enableColumnFilters) || r) && (null == (o = t.options.enableFilters) || o) && !!e.accessorFn
            },
            getCanGlobalFilter: () => {
                var n, r, o, a;
                return (null == (n = e.columnDef.enableGlobalFilter) || n) && (null == (r = t.options.enableGlobalFilter) || r) && (null == (o = t.options.enableFilters) || o) && (null == (a = null == t.options.getColumnCanGlobalFilter ? void 0 : t.options.getColumnCanGlobalFilter(e)) || a) && !!e.accessorFn
            },
            getIsFiltered: () => e.getFilterIndex() > -1,
            getFilterValue: () => {
                var n, r;
                return null == (n = t.getState().columnFilters) || null == (r = n.find((t => t.id === e.id))) ? void 0 : r.value
            },
            getFilterIndex: () => {
                var n, r;
                return null != (n = null == (r = t.getState().columnFilters) ? void 0 : r.findIndex((t => t.id === e.id))) ? n : -1
            },
            setFilterValue: n => {
                t.setColumnFilters((t => {
                    const r = e.getFilterFn(),
                        o = null == t ? void 0 : t.find((t => t.id === e.id)),
                        a = mS(n, o ? o.value : void 0);
                    var i;
                    if (IS(r, a, e)) return null != (i = null == t ? void 0 : t.filter((t => t.id !== e.id))) ? i : [];
                    const l = {
                        id: e.id,
                        value: a
                    };
                    var s;
                    return o ? null != (s = null == t ? void 0 : t.map((t => t.id === e.id ? l : t))) ? s : [] : null != t && t.length ? [...t, l] : [l]
                }))
            },
            _getFacetedRowModel: t.options.getFacetedRowModel && t.options.getFacetedRowModel(t, e.id),
            getFacetedRowModel: () => e._getFacetedRowModel ? e._getFacetedRowModel() : t.getPreFilteredRowModel(),
            _getFacetedUniqueValues: t.options.getFacetedUniqueValues && t.options.getFacetedUniqueValues(t, e.id),
            getFacetedUniqueValues: () => e._getFacetedUniqueValues ? e._getFacetedUniqueValues() : new Map,
            _getFacetedMinMaxValues: t.options.getFacetedMinMaxValues && t.options.getFacetedMinMaxValues(t, e.id),
            getFacetedMinMaxValues: () => {
                if (e._getFacetedMinMaxValues) return e._getFacetedMinMaxValues()
            }
        }),
        createRow: (e, t) => ({
            columnFilters: {},
            columnFiltersMeta: {}
        }),
        createTable: e => ({
            getGlobalAutoFilterFn: () => AS.includesString,
            getGlobalFilterFn: () => {
                var t, n;
                const {
                    globalFilterFn: r
                } = e.options;
                return vS(r) ? r : "auto" === r ? e.getGlobalAutoFilterFn() : null != (t = null == (n = e.options.filterFns) ? void 0 : n[r]) ? t : AS[r]
            },
            setColumnFilters: t => {
                const n = e.getAllLeafColumns();
                null == e.options.onColumnFiltersChange || e.options.onColumnFiltersChange((e => {
                    var r;
                    return null == (r = mS(t, e)) ? void 0 : r.filter((e => {
                        const t = n.find((t => t.id === e.id));
                        if (t) {
                            if (IS(t.getFilterFn(), e.value, t)) return !1
                        }
                        return !0
                    }))
                }))
            },
            setGlobalFilter: t => {
                null == e.options.onGlobalFilterChange || e.options.onGlobalFilterChange(t)
            },
            resetGlobalFilter: t => {
                e.setGlobalFilter(t ? void 0 : e.initialState.globalFilter)
            },
            resetColumnFilters: t => {
                var n, r;
                e.setColumnFilters(t ? [] : null != (n = null == (r = e.initialState) ? void 0 : r.columnFilters) ? n : [])
            },
            getPreFilteredRowModel: () => e.getCoreRowModel(),
            getFilteredRowModel: () => (!e._getFilteredRowModel && e.options.getFilteredRowModel && (e._getFilteredRowModel = e.options.getFilteredRowModel(e)), e.options.manualFiltering || !e._getFilteredRowModel ? e.getPreFilteredRowModel() : e._getFilteredRowModel()),
            _getGlobalFacetedRowModel: e.options.getFacetedRowModel && e.options.getFacetedRowModel(e, "__global__"),
            getGlobalFacetedRowModel: () => e.options.manualFiltering || !e._getGlobalFacetedRowModel ? e.getPreFilteredRowModel() : e._getGlobalFacetedRowModel(),
            _getGlobalFacetedUniqueValues: e.options.getFacetedUniqueValues && e.options.getFacetedUniqueValues(e, "__global__"),
            getGlobalFacetedUniqueValues: () => e._getGlobalFacetedUniqueValues ? e._getGlobalFacetedUniqueValues() : new Map,
            _getGlobalFacetedMinMaxValues: e.options.getFacetedMinMaxValues && e.options.getFacetedMinMaxValues(e, "__global__"),
            getGlobalFacetedMinMaxValues: () => {
                if (e._getGlobalFacetedMinMaxValues) return e._getGlobalFacetedMinMaxValues()
            }
        })
    }, {
        getInitialState: e => ({
            sorting: [],
            ...e
        }),
        getDefaultColumnDef: () => ({
            sortingFn: "auto"
        }),
        getDefaultOptions: e => ({
            onSortingChange: gS("sorting", e),
            isMultiSortEvent: e => e.shiftKey
        }),
        createColumn: (e, t) => ({
            getAutoSortingFn: () => {
                const n = t.getFilteredRowModel().flatRows.slice(10);
                let r = !1;
                for (const t of n) {
                    const n = null == t ? void 0 : t.getValue(e.id);
                    if ("[object Date]" === Object.prototype.toString.call(n)) return GS.datetime;
                    if ("string" == typeof n && (r = !0, n.split(qS).length > 1)) return GS.alphanumeric
                }
                return r ? GS.text : GS.basic
            },
            getAutoSortDir: () => {
                const n = t.getFilteredRowModel().flatRows[0];
                return "string" == typeof(null == n ? void 0 : n.getValue(e.id)) ? "asc" : "desc"
            },
            getSortingFn: () => {
                var n, r;
                if (!e) throw new Error;
                return vS(e.columnDef.sortingFn) ? e.columnDef.sortingFn : "auto" === e.columnDef.sortingFn ? e.getAutoSortingFn() : null != (n = null == (r = t.options.sortingFns) ? void 0 : r[e.columnDef.sortingFn]) ? n : GS[e.columnDef.sortingFn]
            },
            toggleSorting: (n, r) => {
                const o = e.getNextSortingOrder(),
                    a = null != n;
                t.setSorting((i => {
                    const l = null == i ? void 0 : i.find((t => t.id === e.id)),
                        s = null == i ? void 0 : i.findIndex((t => t.id === e.id));
                    let u, c = [],
                        d = a ? n : "desc" === o;
                    var f;
                    (u = null != i && i.length && e.getCanMultiSort() && r ? l ? "toggle" : "add" : null != i && i.length && s !== i.length - 1 ? "replace" : l ? "toggle" : "replace", "toggle" === u && (a || o || (u = "remove")), "add" === u) ? (c = [...i, {
                        id: e.id,
                        desc: d
                    }], c.splice(0, c.length - (null != (f = t.options.maxMultiSortColCount) ? f : Number.MAX_SAFE_INTEGER))) : c = "toggle" === u ? i.map((t => t.id === e.id ? {
                        ...t,
                        desc: d
                    } : t)) : "remove" === u ? i.filter((t => t.id !== e.id)) : [{
                        id: e.id,
                        desc: d
                    }];
                    return c
                }))
            },
            getFirstSortDir: () => {
                var n, r;
                return (null != (n = null != (r = e.columnDef.sortDescFirst) ? r : t.options.sortDescFirst) ? n : "desc" === e.getAutoSortDir()) ? "desc" : "asc"
            },
            getNextSortingOrder: n => {
                var r, o;
                const a = e.getFirstSortDir(),
                    i = e.getIsSorted();
                return i ? !!(i === a || null != (r = t.options.enableSortingRemoval) && !r || n && null != (o = t.options.enableMultiRemove) && !o) && ("desc" === i ? "asc" : "desc") : a
            },
            getCanSort: () => {
                var n, r;
                return (null == (n = e.columnDef.enableSorting) || n) && (null == (r = t.options.enableSorting) || r) && !!e.accessorFn
            },
            getCanMultiSort: () => {
                var n, r;
                return null != (n = null != (r = e.columnDef.enableMultiSort) ? r : t.options.enableMultiSort) ? n : !!e.accessorFn
            },
            getIsSorted: () => {
                var n;
                const r = null == (n = t.getState().sorting) ? void 0 : n.find((t => t.id === e.id));
                return !!r && (r.desc ? "desc" : "asc")
            },
            getSortIndex: () => {
                var n, r;
                return null != (n = null == (r = t.getState().sorting) ? void 0 : r.findIndex((t => t.id === e.id))) ? n : -1
            },
            clearSorting: () => {
                t.setSorting((t => null != t && t.length ? t.filter((t => t.id !== e.id)) : []))
            },
            getToggleSortingHandler: () => {
                const n = e.getCanSort();
                return r => {
                    n && (null == r.persist || r.persist(), null == e.toggleSorting || e.toggleSorting(void 0, !!e.getCanMultiSort() && (null == t.options.isMultiSortEvent ? void 0 : t.options.isMultiSortEvent(r))))
                }
            }
        }),
        createTable: e => ({
            setSorting: t => null == e.options.onSortingChange ? void 0 : e.options.onSortingChange(t),
            resetSorting: t => {
                var n, r;
                e.setSorting(t ? [] : null != (n = null == (r = e.initialState) ? void 0 : r.sorting) ? n : [])
            },
            getPreSortedRowModel: () => e.getGroupedRowModel(),
            getSortedRowModel: () => (!e._getSortedRowModel && e.options.getSortedRowModel && (e._getSortedRowModel = e.options.getSortedRowModel(e)), e.options.manualSorting || !e._getSortedRowModel ? e.getPreSortedRowModel() : e._getSortedRowModel())
        })
    }, {
        getDefaultColumnDef: () => ({
            aggregatedCell: e => {
                var t, n;
                return null != (t = null == (n = e.getValue()) || null == n.toString ? void 0 : n.toString()) ? t : null
            },
            aggregationFn: "auto"
        }),
        getInitialState: e => ({
            grouping: [],
            ...e
        }),
        getDefaultOptions: e => ({
            onGroupingChange: gS("grouping", e),
            groupedColumnMode: "reorder"
        }),
        createColumn: (e, t) => ({
            toggleGrouping: () => {
                t.setGrouping((t => null != t && t.includes(e.id) ? t.filter((t => t !== e.id)) : [...null != t ? t : [], e.id]))
            },
            getCanGroup: () => {
                var n, r, o, a;
                return null != (n = null == (r = null != (o = null == (a = e.columnDef.enableGrouping) || a) ? o : t.options.enableGrouping) || r) ? n : !!e.accessorFn
            },
            getIsGrouped: () => {
                var n;
                return null == (n = t.getState().grouping) ? void 0 : n.includes(e.id)
            },
            getGroupedIndex: () => {
                var n;
                return null == (n = t.getState().grouping) ? void 0 : n.indexOf(e.id)
            },
            getToggleGroupingHandler: () => {
                const t = e.getCanGroup();
                return () => {
                    t && e.toggleGrouping()
                }
            },
            getAutoAggregationFn: () => {
                const n = t.getCoreRowModel().flatRows[0],
                    r = null == n ? void 0 : n.getValue(e.id);
                return "number" == typeof r ? zS.sum : "[object Date]" === Object.prototype.toString.call(r) ? zS.extent : void 0
            },
            getAggregationFn: () => {
                var n, r;
                if (!e) throw new Error;
                return vS(e.columnDef.aggregationFn) ? e.columnDef.aggregationFn : "auto" === e.columnDef.aggregationFn ? e.getAutoAggregationFn() : null != (n = null == (r = t.options.aggregationFns) ? void 0 : r[e.columnDef.aggregationFn]) ? n : zS[e.columnDef.aggregationFn]
            }
        }),
        createTable: e => ({
            setGrouping: t => null == e.options.onGroupingChange ? void 0 : e.options.onGroupingChange(t),
            resetGrouping: t => {
                var n, r;
                e.setGrouping(t ? [] : null != (n = null == (r = e.initialState) ? void 0 : r.grouping) ? n : [])
            },
            getPreGroupedRowModel: () => e.getFilteredRowModel(),
            getGroupedRowModel: () => (!e._getGroupedRowModel && e.options.getGroupedRowModel && (e._getGroupedRowModel = e.options.getGroupedRowModel(e)), e.options.manualGrouping || !e._getGroupedRowModel ? e.getPreGroupedRowModel() : e._getGroupedRowModel())
        }),
        createRow: (e, t) => ({
            getIsGrouped: () => !!e.groupingColumnId,
            getGroupingValue: n => {
                if (e._groupingValuesCache.hasOwnProperty(n)) return e._groupingValuesCache[n];
                const r = t.getColumn(n);
                return null != r && r.columnDef.getGroupingValue ? (e._groupingValuesCache[n] = r.columnDef.getGroupingValue(e.original), e._groupingValuesCache[n]) : e.getValue(n)
            },
            _groupingValuesCache: {}
        }),
        createCell: (e, t, n, r) => ({
            getIsGrouped: () => t.getIsGrouped() && t.id === n.groupingColumnId,
            getIsPlaceholder: () => !e.getIsGrouped() && t.getIsGrouped(),
            getIsAggregated: () => {
                var t;
                return !e.getIsGrouped() && !e.getIsPlaceholder() && !(null == (t = n.subRows) || !t.length)
            }
        })
    }, RS, {
        getInitialState: e => ({
            ...e,
            pagination: {
                pageIndex: 0,
                pageSize: 10,
                ...null == e ? void 0 : e.pagination
            }
        }),
        getDefaultOptions: e => ({
            onPaginationChange: gS("pagination", e)
        }),
        createTable: e => {
            let t = !1,
                n = !1;
            return {
                _autoResetPageIndex: () => {
                    var r, o;
                    if (t) {
                        if (null != (r = null != (o = e.options.autoResetAll) ? o : e.options.autoResetPageIndex) ? r : !e.options.manualPagination) {
                            if (n) return;
                            n = !0, e._queue((() => {
                                e.resetPageIndex(), n = !1
                            }))
                        }
                    } else e._queue((() => {
                        t = !0
                    }))
                },
                setPagination: t => null == e.options.onPaginationChange ? void 0 : e.options.onPaginationChange((e => mS(t, e))),
                resetPagination: t => {
                    var n;
                    e.setPagination(t ? {
                        pageIndex: 0,
                        pageSize: 10
                    } : null != (n = e.initialState.pagination) ? n : {
                        pageIndex: 0,
                        pageSize: 10
                    })
                },
                setPageIndex: t => {
                    e.setPagination((n => {
                        let r = mS(t, n.pageIndex);
                        const o = void 0 === e.options.pageCount || -1 === e.options.pageCount ? Number.MAX_SAFE_INTEGER : e.options.pageCount - 1;
                        return r = Math.max(0, Math.min(r, o)), {
                            ...n,
                            pageIndex: r
                        }
                    }))
                },
                resetPageIndex: t => {
                    var n, r, o;
                    e.setPageIndex(t ? 0 : null != (n = null == (r = e.initialState) || null == (o = r.pagination) ? void 0 : o.pageIndex) ? n : 0)
                },
                resetPageSize: t => {
                    var n, r, o;
                    e.setPageSize(t ? 10 : null != (n = null == (r = e.initialState) || null == (o = r.pagination) ? void 0 : o.pageSize) ? n : 10)
                },
                setPageSize: t => {
                    e.setPagination((e => {
                        const n = Math.max(1, mS(t, e.pageSize)),
                            r = e.pageSize * e.pageIndex,
                            o = Math.floor(r / n);
                        return {
                            ...e,
                            pageIndex: o,
                            pageSize: n
                        }
                    }))
                },
                setPageCount: t => e.setPagination((n => {
                    var r;
                    let o = mS(t, null != (r = e.options.pageCount) ? r : -1);
                    return "number" == typeof o && (o = Math.max(-1, o)), {
                        ...n,
                        pageCount: o
                    }
                })),
                getPageOptions: yS((() => [e.getPageCount()]), (e => {
                    let t = [];
                    return e && e > 0 && (t = [...new Array(e)].fill(null).map(((e, t) => t))), t
                }), {
                    key: !1,
                    debug: () => {
                        var t;
                        return null != (t = e.options.debugAll) ? t : e.options.debugTable
                    }
                }),
                getCanPreviousPage: () => e.getState().pagination.pageIndex > 0,
                getCanNextPage: () => {
                    const {
                        pageIndex: t
                    } = e.getState().pagination, n = e.getPageCount();
                    return -1 === n || 0 !== n && t < n - 1
                },
                previousPage: () => e.setPageIndex((e => e - 1)),
                nextPage: () => e.setPageIndex((e => e + 1)),
                getPrePaginationRowModel: () => e.getExpandedRowModel(),
                getPaginationRowModel: () => (!e._getPaginationRowModel && e.options.getPaginationRowModel && (e._getPaginationRowModel = e.options.getPaginationRowModel(e)), e.options.manualPagination || !e._getPaginationRowModel ? e.getPrePaginationRowModel() : e._getPaginationRowModel()),
                getPageCount: () => {
                    var t;
                    return null != (t = e.options.pageCount) ? t : Math.ceil(e.getPrePaginationRowModel().rows.length / e.getState().pagination.pageSize)
                }
            }
        }
    }, US, SS];

function XS(e) {
    var t;
    (e.debugAll || e.debugTable) && console.info("Creating Table Instance...");
    let n = {
        _features: ZS
    };
    const r = n._features.reduce(((e, t) => Object.assign(e, null == t.getDefaultOptions ? void 0 : t.getDefaultOptions(n))), {});
    let o = {
        ...null != (t = e.initialState) ? t : {}
    };
    n._features.forEach((e => {
        var t;
        o = null != (t = null == e.getInitialState ? void 0 : e.getInitialState(o)) ? t : o
    }));
    const a = [];
    let i = !1;
    const l = {
        _features: ZS,
        options: {
            ...r,
            ...e
        },
        initialState: o,
        _queue: e => {
            a.push(e), i || (i = !0, Promise.resolve().then((() => {
                for (; a.length;) a.shift()();
                i = !1
            })).catch((e => setTimeout((() => {
                throw e
            })))))
        },
        reset: () => {
            n.setState(n.initialState)
        },
        setOptions: e => {
            const t = mS(e, n.options);
            var o;
            n.options = (o = t, n.options.mergeOptions ? n.options.mergeOptions(r, o) : {
                ...r,
                ...o
            })
        },
        getState: () => n.options.state,
        setState: e => {
            null == n.options.onStateChange || n.options.onStateChange(e)
        },
        _getRowId: (e, t, r) => {
            var o;
            return null != (o = null == n.options.getRowId ? void 0 : n.options.getRowId(e, t, r)) ? o : `${r?[r.id,t].join("."):t}`
        },
        getCoreRowModel: () => (n._getCoreRowModel || (n._getCoreRowModel = n.options.getCoreRowModel(n)), n._getCoreRowModel()),
        getRowModel: () => n.getPaginationRowModel(),
        getRow: e => {
            const t = n.getRowModel().rowsById[e];
            if (!t) throw new Error;
            return t
        },
        _getDefaultColumnDef: yS((() => [n.options.defaultColumn]), (e => {
            var t;
            return e = null != (t = e) ? t : {}, {
                header: e => {
                    const t = e.header.column.columnDef;
                    return t.accessorKey ? t.accessorKey : t.accessorFn ? t.id : null
                },
                cell: e => {
                    var t, n;
                    return null != (t = null == (n = e.renderValue()) || null == n.toString ? void 0 : n.toString()) ? t : null
                },
                ...n._features.reduce(((e, t) => Object.assign(e, null == t.getDefaultColumnDef ? void 0 : t.getDefaultColumnDef())), {}),
                ...e
            }
        }), {
            debug: () => {
                var e;
                return null != (e = n.options.debugAll) ? e : n.options.debugColumns
            },
            key: !1
        }),
        _getColumnDefs: () => n.options.columns,
        getAllColumns: yS((() => [n._getColumnDefs()]), (e => {
            const t = function(e, r, o) {
                return void 0 === o && (o = 0), e.map((e => {
                    const a = function(e, t, n, r) {
                            var o, a;
                            const i = {
                                    ...e._getDefaultColumnDef(),
                                    ...t
                                },
                                l = i.accessorKey;
                            let s, u = null != (o = null != (a = i.id) ? a : l ? l.replace(".", "_") : void 0) ? o : "string" == typeof i.header ? i.header : void 0;
                            if (i.accessorFn ? s = i.accessorFn : l && (s = l.includes(".") ? e => {
                                    let t = e;
                                    for (const r of l.split(".")) {
                                        var n;
                                        t = null == (n = t) ? void 0 : n[r]
                                    }
                                    return t
                                } : e => e[i.accessorKey]), !u) throw new Error;
                            let c = {
                                id: `${String(u)}`,
                                accessorFn: s,
                                parent: r,
                                depth: n,
                                columnDef: i,
                                columns: [],
                                getFlatColumns: yS((() => [!0]), (() => {
                                    var e;
                                    return [c, ...null == (e = c.columns) ? void 0 : e.flatMap((e => e.getFlatColumns()))]
                                }), {
                                    key: "column.getFlatColumns",
                                    debug: () => {
                                        var t;
                                        return null != (t = e.options.debugAll) ? t : e.options.debugColumns
                                    }
                                }),
                                getLeafColumns: yS((() => [e._getOrderColumnsFn()]), (e => {
                                    var t;
                                    return null != (t = c.columns) && t.length ? e(c.columns.flatMap((e => e.getLeafColumns()))) : [c]
                                }), {
                                    key: "column.getLeafColumns",
                                    debug: () => {
                                        var t;
                                        return null != (t = e.options.debugAll) ? t : e.options.debugColumns
                                    }
                                })
                            };
                            return c = e._features.reduce(((t, n) => Object.assign(t, null == n.createColumn ? void 0 : n.createColumn(c, e))), c), c
                        }(n, e, o, r),
                        i = e;
                    return a.columns = i.columns ? t(i.columns, a, o + 1) : [], a
                }))
            };
            return t(e)
        }), {
            key: !1,
            debug: () => {
                var e;
                return null != (e = n.options.debugAll) ? e : n.options.debugColumns
            }
        }),
        getAllFlatColumns: yS((() => [n.getAllColumns()]), (e => e.flatMap((e => e.getFlatColumns()))), {
            key: !1,
            debug: () => {
                var e;
                return null != (e = n.options.debugAll) ? e : n.options.debugColumns
            }
        }),
        _getAllFlatColumnsById: yS((() => [n.getAllFlatColumns()]), (e => e.reduce(((e, t) => (e[t.id] = t, e)), {})), {
            key: !1,
            debug: () => {
                var e;
                return null != (e = n.options.debugAll) ? e : n.options.debugColumns
            }
        }),
        getAllLeafColumns: yS((() => [n.getAllColumns(), n._getOrderColumnsFn()]), ((e, t) => t(e.flatMap((e => e.getLeafColumns())))), {
            key: !1,
            debug: () => {
                var e;
                return null != (e = n.options.debugAll) ? e : n.options.debugColumns
            }
        }),
        getColumn: e => n._getAllFlatColumnsById()[e]
    };
    return Object.assign(n, l), n._features.forEach((e => Object.assign(n, null == e.createTable ? void 0 : e.createTable(n)))), n
}
const JS = (e, t, n, r, o, a, i) => {
    let l = {
        id: t,
        index: r,
        original: n,
        depth: o,
        parentId: i,
        _valuesCache: {},
        _uniqueValuesCache: {},
        getValue: t => {
            if (l._valuesCache.hasOwnProperty(t)) return l._valuesCache[t];
            const n = e.getColumn(t);
            return null != n && n.accessorFn ? (l._valuesCache[t] = n.accessorFn(l.original, r), l._valuesCache[t]) : void 0
        },
        getUniqueValues: t => {
            if (l._uniqueValuesCache.hasOwnProperty(t)) return l._uniqueValuesCache[t];
            const n = e.getColumn(t);
            return null != n && n.accessorFn ? n.columnDef.getUniqueValues ? (l._uniqueValuesCache[t] = n.columnDef.getUniqueValues(l.original, r), l._uniqueValuesCache[t]) : (l._uniqueValuesCache[t] = [l.getValue(t)], l._uniqueValuesCache[t]) : void 0
        },
        renderValue: t => {
            var n;
            return null != (n = l.getValue(t)) ? n : e.options.renderFallbackValue
        },
        subRows: null != a ? a : [],
        getLeafRows: () => function(e, t) {
            const n = [],
                r = e => {
                    e.forEach((e => {
                        n.push(e);
                        const o = t(e);
                        null != o && o.length && r(o)
                    }))
                };
            return r(e), n
        }(l.subRows, (e => e.subRows)),
        getParentRow: () => l.parentId ? e.getRow(l.parentId) : void 0,
        getParentRows: () => {
            let e = [],
                t = l;
            for (;;) {
                const n = t.getParentRow();
                if (!n) break;
                e.push(n), t = n
            }
            return e.reverse()
        },
        getAllCells: yS((() => [e.getAllLeafColumns()]), (t => t.map((t => function(e, t, n, r) {
            const o = {
                id: `${t.id}_${n.id}`,
                row: t,
                column: n,
                getValue: () => t.getValue(r),
                renderValue: () => {
                    var t;
                    return null != (t = o.getValue()) ? t : e.options.renderFallbackValue
                },
                getContext: yS((() => [e, n, t, o]), ((e, t, n, r) => ({
                    table: e,
                    column: t,
                    row: n,
                    cell: r,
                    getValue: r.getValue,
                    renderValue: r.renderValue
                })), {
                    key: !1,
                    debug: () => e.options.debugAll
                })
            };
            return e._features.forEach((r => {
                Object.assign(o, null == r.createCell ? void 0 : r.createCell(o, n, t, e))
            }), {}), o
        }(e, l, t, t.id)))), {
            key: !1,
            debug: () => {
                var t;
                return null != (t = e.options.debugAll) ? t : e.options.debugRows
            }
        }),
        _getAllCellsByColumnId: yS((() => [l.getAllCells()]), (e => e.reduce(((e, t) => (e[t.column.id] = t, e)), {})), {
            key: "row.getAllCellsByColumnId",
            debug: () => {
                var t;
                return null != (t = e.options.debugAll) ? t : e.options.debugRows
            }
        })
    };
    for (let s = 0; s < e._features.length; s++) {
        const t = e._features[s];
        Object.assign(l, null == t || null == t.createRow ? void 0 : t.createRow(l, e))
    }
    return l
};

function YS(e, t, n) {
    return n.options.filterFromLeafRows ? function(e, t, n) {
        var r;
        const o = [],
            a = {},
            i = null != (r = n.options.maxLeafRowFilterDepth) ? r : 100,
            l = function(e, r) {
                void 0 === r && (r = 0);
                const o = [];
                for (let u = 0; u < e.length; u++) {
                    var s;
                    let c = e[u];
                    const d = JS(n, c.id, c.original, c.index, c.depth, void 0, c.parentId);
                    if (d.columnFilters = c.columnFilters, null != (s = c.subRows) && s.length && r < i) {
                        if (d.subRows = l(c.subRows, r + 1), c = d, t(c) && !d.subRows.length) {
                            o.push(c), a[c.id] = c, a[u] = c;
                            continue
                        }
                        if (t(c) || d.subRows.length) {
                            o.push(c), a[c.id] = c, a[u] = c;
                            continue
                        }
                    } else c = d, t(c) && (o.push(c), a[c.id] = c, a[u] = c)
                }
                return o
            };
        return {
            rows: l(e),
            flatRows: o,
            rowsById: a
        }
    }(e, t, n) : function(e, t, n) {
        var r;
        const o = [],
            a = {},
            i = null != (r = n.options.maxLeafRowFilterDepth) ? r : 100,
            l = function(e, r) {
                void 0 === r && (r = 0);
                const s = [];
                for (let c = 0; c < e.length; c++) {
                    let d = e[c];
                    if (t(d)) {
                        var u;
                        if (null != (u = d.subRows) && u.length && r < i) {
                            const e = JS(n, d.id, d.original, d.index, d.depth, void 0, d.parentId);
                            e.subRows = l(d.subRows, r + 1), d = e
                        }
                        s.push(d), o.push(d), a[d.id] = d
                    }
                }
                return s
            };
        return {
            rows: l(e),
            flatRows: o,
            rowsById: a
        }
    }(e, t, n)
}
/**
 * react-table
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function eE(e, t) {
    return e ? function(e) {
        return "function" == typeof e && (() => {
            const t = Object.getPrototypeOf(e);
            return t.prototype && t.prototype.isReactComponent
        })()
    }(n = e) || "function" == typeof n || function(e) {
        return "object" == typeof e && "symbol" == typeof e.$$typeof && ["react.memo", "react.forward_ref"].includes(e.$$typeof.description)
    }(n) ? I.createElement(e, t) : e : null;
    var n
}
const tE = ({
    data: e
}) => {
    const t = I.useMemo((() => [{
        header: "",
        accessorKey: "img",
        cell: ({
            getValue: e
        }) => {
            const t = e();
            return Q.jsx("img", {
                src: t,
                alt: ""
            })
        }
    }, {
        header: "Товар",
        accessorKey: "name",
        cell: e => e.getValue()
    }, {
        header: "Количество",
        accessorKey: "amount",
        cell: e => e.getValue()
    }]), []);
    return Q.jsx("div", {
        className: "tabs__inventory",
        children: Q.jsx(nE, {
            data: e.bucket,
            columns: t
        })
    })
};

function nE({
    data: e,
    columns: t
}) {
    const n = function(e) {
        const t = {
                state: {},
                onStateChange: () => {},
                renderFallbackValue: null,
                ...e
            },
            [n] = I.useState((() => ({
                current: XS(t)
            }))),
            [r, o] = I.useState((() => n.current.initialState));
        return n.current.setOptions((t => ({
            ...t,
            ...e,
            state: {
                ...r,
                ...e.state
            },
            onStateChange: t => {
                o(t), null == e.onStateChange || e.onStateChange(t)
            }
        }))), n.current
    }({
        data: e,
        columns: t,
        getCoreRowModel: e => yS((() => [e.options.data]), (t => {
            const n = {
                    rows: [],
                    flatRows: [],
                    rowsById: {}
                },
                r = function(t, o, a) {
                    void 0 === o && (o = 0);
                    const i = [];
                    for (let s = 0; s < t.length; s++) {
                        const u = JS(e, e._getRowId(t[s], s, a), t[s], s, o, void 0, null == a ? void 0 : a.id);
                        var l;
                        n.flatRows.push(u), n.rowsById[u.id] = u, i.push(u), e.options.getSubRows && (u.originalSubRows = e.options.getSubRows(t[s], s), null != (l = u.originalSubRows) && l.length && (u.subRows = r(u.originalSubRows, o + 1, u)))
                    }
                    return i
                };
            return n.rows = r(t), n
        }), {
            key: !1,
            debug: () => {
                var t;
                return null != (t = e.options.debugAll) ? t : e.options.debugTable
            },
            onChange: () => {
                e._autoResetPageIndex()
            }
        }),
        getFilteredRowModel: e => yS((() => [e.getPreFilteredRowModel(), e.getState().columnFilters, e.getState().globalFilter]), ((t, n, r) => {
            if (!t.rows.length || (null == n || !n.length) && !r) {
                for (let e = 0; e < t.flatRows.length; e++) t.flatRows[e].columnFilters = {}, t.flatRows[e].columnFiltersMeta = {};
                return t
            }
            const o = [],
                a = [];
            (null != n ? n : []).forEach((t => {
                var n;
                const r = e.getColumn(t.id);
                if (!r) return;
                const a = r.getFilterFn();
                a && o.push({
                    id: t.id,
                    filterFn: a,
                    resolvedValue: null != (n = null == a.resolveFilterValue ? void 0 : a.resolveFilterValue(t.value)) ? n : t.value
                })
            }));
            const i = n.map((e => e.id)),
                l = e.getGlobalFilterFn(),
                s = e.getAllLeafColumns().filter((e => e.getCanGlobalFilter()));
            let u, c;
            r && l && s.length && (i.push("__global__"), s.forEach((e => {
                var t;
                a.push({
                    id: e.id,
                    filterFn: l,
                    resolvedValue: null != (t = null == l.resolveFilterValue ? void 0 : l.resolveFilterValue(r)) ? t : r
                })
            })));
            for (let e = 0; e < t.flatRows.length; e++) {
                const n = t.flatRows[e];
                if (n.columnFilters = {}, o.length)
                    for (let e = 0; e < o.length; e++) {
                        u = o[e];
                        const t = u.id;
                        n.columnFilters[t] = u.filterFn(n, t, u.resolvedValue, (e => {
                            n.columnFiltersMeta[t] = e
                        }))
                    }
                if (a.length) {
                    for (let e = 0; e < a.length; e++) {
                        c = a[e];
                        const t = c.id;
                        if (c.filterFn(n, t, c.resolvedValue, (e => {
                                n.columnFiltersMeta[t] = e
                            }))) {
                            n.columnFilters.__global__ = !0;
                            break
                        }
                    }!0 !== n.columnFilters.__global__ && (n.columnFilters.__global__ = !1)
                }
            }
            return YS(t.rows, (e => {
                for (let t = 0; t < i.length; t++)
                    if (!1 === e.columnFilters[i[t]]) return !1;
                return !0
            }), e)
        }), {
            key: !1,
            debug: () => {
                var t;
                return null != (t = e.options.debugAll) ? t : e.options.debugTable
            },
            onChange: () => {
                e._autoResetPageIndex()
            }
        }),
        getPaginationRowModel: e => yS((() => [e.getState().pagination, e.getPrePaginationRowModel(), e.options.paginateExpandedRows ? void 0 : e.getState().expanded]), ((t, n) => {
            if (!n.rows.length) return n;
            const {
                pageSize: r,
                pageIndex: o
            } = t;
            let {
                rows: a,
                flatRows: i,
                rowsById: l
            } = n;
            const s = r * o,
                u = s + r;
            let c;
            a = a.slice(s, u), c = e.options.paginateExpandedRows ? {
                rows: a,
                flatRows: i,
                rowsById: l
            } : function(e) {
                const t = [],
                    n = e => {
                        var r;
                        t.push(e), null != (r = e.subRows) && r.length && e.getIsExpanded() && e.subRows.forEach(n)
                    };
                return e.rows.forEach(n), {
                    rows: t,
                    flatRows: e.flatRows,
                    rowsById: e.rowsById
                }
            }({
                rows: a,
                flatRows: i,
                rowsById: l
            }), c.flatRows = [];
            const d = e => {
                c.flatRows.push(e), e.subRows.length && e.subRows.forEach(d)
            };
            return c.rows.forEach(d), c
        }), {
            key: !1,
            debug: () => {
                var t;
                return null != (t = e.options.debugAll) ? t : e.options.debugTable
            }
        }),
        debugTable: !0
    });
    return I.useEffect((() => {
        n.setPageSize(Number(5))
    }), []), Q.jsxs(Q.Fragment, {
        children: [Q.jsxs("table", {
            children: [Q.jsx("thead", {
                children: n.getHeaderGroups().map((e => Q.jsx("tr", {
                    children: e.headers.map((e => Q.jsx("th", {
                        colSpan: e.colSpan,
                        children: e.isPlaceholder ? null : Q.jsx("div", {
                            children: eE(e.column.columnDef.header, e.getContext())
                        })
                    }, e.id)))
                }, e.id)))
            }), Q.jsx("tbody", {
                children: n.getRowModel().rows.map((e => Q.jsx("tr", {
                    children: e.getVisibleCells().map((e => Q.jsx("td", {
                        children: eE(e.column.columnDef.cell, e.getContext())
                    }, e.id)))
                }, e.id)))
            })]
        }), Q.jsxs("div", {
            className: "table__pagination",
            children: [Q.jsx(Lw, {
                type: "primary",
                title: "<<",
                onClick: () => n.setPageIndex(0),
                disabled: !n.getCanPreviousPage()
            }), Q.jsx(Lw, {
                type: "primary",
                onClick: () => n.previousPage(),
                disabled: !n.getCanPreviousPage(),
                title: "<"
            }), Q.jsx("span", {
                children: Q.jsxs("strong", {
                    children: [n.getState().pagination.pageIndex + 1, " из ", n.getPageCount()]
                })
            }), Q.jsx(Lw, {
                type: "primary",
                onClick: () => n.nextPage(),
                disabled: !n.getCanNextPage(),
                title: ">"
            }), Q.jsx(Lw, {
                type: "primary",
                onClick: () => n.setPageIndex(n.getPageCount() - 1),
                disabled: !n.getCanNextPage(),
                title: ">>"
            })]
        })]
    })
}
const rE = async e => {
    const {
        data: t
    } = await _w.post("/store.users.php", {
        action: "usePromocode",
        ...e
    });
    return t
}, oE = {
    promoCode: ["promoCode"]
}, aE = () => {
    const [e, t] = I.useState(""), n = (e => cf({
        mutationKey: [...oE.promoCode],
        mutationFn: rE,
        ...e
    }))();
    return Q.jsxs("div", {
        className: "tabs__promo_code",
        children: [Q.jsxs("div", {
            className: "tabs__promo_code__action",
            children: [Q.jsx(Tw, {
                placeholder: "DREAMRUSTTOP",
                value: e,
                onChange: e => {
                    t(e)
                }
            }), Q.jsx(Lw, {
                type: "primary",
                title: "Применить",
                onClick: () => {
                    n.mutate({
                        code: e
                    }, {
                        onSuccess: e => {
                            e.result === jx.FAIL ? Px(e.mess, {
                                icon: TC
                            }) : Lx(e.mess.replaceAll("<br>", ""), {
                                icon: LC
                            })
                        },
                        onError: () => {
                            Px(Gx.notify.notAuth, {
                                icon: TC
                            })
                        }
                    })
                }
            })]
        }), Q.jsxs("a", {
            className: "tabs__promo_code__telegram",
            target: "_blank",
            href: "https://vk.com/k1ss_lyak",
            rel: "noreferrer",
            children: [Q.jsxs("div", {
                className: "tabs__promo_code__telegram__title",
                children: [OC, "Промокоды можно найти на нашей странице вк."]
            }), Q.jsxs("div", {
                className: "tabs__promo_code__telegram__body",
                children: [Q.jsx("img", {
                    src: "https://sun9-78.userapi.com/impg/o26SuoAHXagaq1KonD8mkHv9-I3URpI9iV_i1Q/I6bt7GW5n6M.jpg?size=699x699&quality=96&sign=68508b667608b6d08fc729b4574929b8&type=album",
                    alt: "Dream Rust Avatar"
                }), Q.jsxs("div", {
                    className: "tabs__promo_code__telegram__body__info",
                    children: [Q.jsx("h4", {
                        children: "Разработчик: https://vk.com/k1ss_lyak"
                    }), Q.jsx("p", {
                        children: "А ты чё думал, в сказку попал?"
                    })]
                })]
            })]
        })]
    })
}, iE = () => {
    const e = fC(SC);
    return Q.jsx(Ox, {
        children: Q.jsx(Hg, {
            children: Q.jsxs("div", {
                className: "profile",
                children: [Q.jsx("div", {
                    className: "profile__title",
                    children: Q.jsx("h1", {
                        children: "Профиль"
                    })
                }), Q.jsxs("div", {
                    className: "profile__description",
                    children: [Q.jsxs("div", {
                        className: "profile__description__info",
                        children: [Q.jsx("div", {
                            className: "profile__description__info__img",
                            children: Q.jsx("img", {
                                src: null == e ? void 0 : e.avatar,
                                alt: "Profile avatar"
                            })
                        }), Q.jsxs("div", {
                            className: "profile__description__info__data",
                            children: [Q.jsx("h2", {
                                children: null == e ? void 0 : e.username
                            }), Q.jsxs("div", {
                                className: "profile__description__info__data__steamid",
                                children: [Q.jsx("p", {
                                    children: "Steam ID:"
                                }), Q.jsx("p", {
                                    children: null == e ? void 0 : e.steamId
                                }), Q.jsx("p", {
                                    onClick: () => {
                                        navigator.clipboard.writeText(null == e ? void 0 : e.steamId), Lx("Вы успешно скопировали ваш SteamId!", {
                                            icon: LC,
                                            autoClose: 1e3
                                        })
                                    },
                                    children: kC
                                })]
                            })]
                        })]
                    }), Q.jsx("div", {
                        className: "profile__description__logout",
                        children: Q.jsx(Lw, {
                            type: "danger",
                            title: "Выйти",
                            icon: PC,
                            onClick: () => {
                                document.cookie = "SessionShop=;expires=Thu, 01 Jan 1970 00:00:00 GMT", window.location.href = window.location.origin
                            }
                        })
                    })]
                }), Q.jsx("div", {
                    className: "profile__tabs",
                    children: Q.jsxs(qy, {
                        defaultActiveKey: "inventory",
                        children: [Q.jsx(Vy, {
                            eventKey: "inventory",
                            title: "ИНВЕНТАРЬ",
                            children: Q.jsx(tE, {
                                data: e
                            })
                        }), Q.jsx(Vy, {
                            eventKey: "history_transaction",
                            title: "ИСТОРИЯ ТРАНЗАКЦИЙ",
                            children: Q.jsx(hS, {
                                data: e
                            })
                        }), Q.jsx(Vy, {
                            eventKey: "add_balance",
                            title: "ПОПОЛНИТЬ БАЛАНС",
                            children: Q.jsx(pS, {
                                balance: e.balance
                            })
                        }), Q.jsx(Vy, {
                            eventKey: "promo_code",
                            title: "ВВЕСТИ ПРОМОКОД",
                            children: Q.jsx(aE, {})
                        })]
                    })
                })]
            })
        })
    })
}, lE = ({
    children: e
}) => fC(xC) ? Q.jsx(Q.Fragment, {
    children: e
}) : Q.jsx(ih, {
    to: "/app/store/"
}), sE = (uE = [{
    element: Q.jsx(fS, {}),
    path: "/app/store/"
}, {
    element: Q.jsx(Xx, {}),
    path: "/app/page/cart"
}, {
    path: "*",
    element: Q.jsx(ih, {
        to: "/app/store",
        replace: !0
    })
}, {
    element: Q.jsx(lE, {
        children: Q.jsx(iE, {})
    }),
    path: "/app/page/profile"
}, {
    path: "/profile",
    element: Q.jsx(iE, {})
}], sp({
    basename: null == cE ? void 0 : cE.basename,
    future: uh({}, null == cE ? void 0 : cE.future, {
        v7_prependBasename: !0
    }),
    history: hf({
        window: null == cE ? void 0 : cE.window
    }),
    hydrationData: (null == cE ? void 0 : cE.hydrationData) || vh(),
    routes: uE,
    mapRouteProperties: sh
}).initialize());
var uE, cE;
const dE = W.createRoot(document.getElementById("root")),
    fE = new Hd({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: !1
            }
        }
    });
dE.render(Q.jsx(nf, {
    client: fE,
    children: Q.jsx(oh, {
        router: sE
    })
}));
