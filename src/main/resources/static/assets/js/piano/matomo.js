/*!!
 * Piwik - free/libre analytics platform
 *
 * JavaScript tracking client
 *
 * @link https://piwik.org
 * @source https://github.com/matomo-org/matomo/blob/master/js/piwik.js
 * @license https://piwik.org/free-software/bsd/ BSD-3 Clause (also in js/LICENSE.txt)
 * @license magnet:?xt=urn:btih:c80d50af7d3db9be66a4d0a86db0286e4fd33292&dn=bsd-3-clause.txt BSD-3-Clause
 */
;
if (typeof JSON_PIWIK !== "object" && typeof window.JSON === "object" && window.JSON.stringify && window.JSON.parse) {
    JSON_PIWIK = window.JSON
} else {
    (function() {
        var a = {};
        /*!! JSON v3.3.2 | http://bestiejs.github.io/json3 | Copyright 2012-2014, Kit Cambridge | http://kit.mit-license.org */
        (function() {
            var c = typeof define === "function" && define.amd;
            var e = {
                "function": true,
                object: true
            };
            var h = e[typeof a] && a && !a.nodeType && a;
            var i = e[typeof window] && window || this,
                b = h && e[typeof module] && module && !module.nodeType && typeof global == "object" && global;
            if (b && (b.global === b || b.window === b || b.self === b)) {
                i = b
            }

            function j(ab, V) {
                ab || (ab = i.Object());
                V || (V = i.Object());
                var K = ab.Number || i.Number,
                    R = ab.String || i.String,
                    x = ab.Object || i.Object,
                    S = ab.Date || i.Date,
                    T = ab.SyntaxError || i.SyntaxError,
                    aa = ab.TypeError || i.TypeError,
                    J = ab.Math || i.Math,
                    Y = ab.JSON || i.JSON;
                if (typeof Y == "object" && Y) {
                    V.stringify = Y.stringify;
                    V.parse = Y.parse
                }
                var n = x.prototype,
                    u = n.toString,
                    r, m, L;
                var B = new S(-3509827334573292);
                try {
                    B = B.getUTCFullYear() == -109252 && B.getUTCMonth() === 0 && B.getUTCDate() === 1 && B.getUTCHours() == 10 && B.getUTCMinutes() == 37 && B.getUTCSeconds() == 6 && B.getUTCMilliseconds() == 708
                } catch (v) {}

                function o(ac) {
                    if (o[ac] !== L) {
                        return o[ac]
                    }
                    var ad;
                    if (ac == "bug-string-char-index") {
                        ad = "a" [0] != "a"
                    } else {
                        if (ac == "json") {
                            ad = o("json-stringify") && o("json-parse")
                        } else {
                            var ak, ah = '{"a":[1,true,false,null,"\\\b\\n\\f\\r\\t"]}';
                            if (ac == "json-stringify") {
                                var ai = V.stringify,
                                    aj = typeof ai == "function" && B;
                                if (aj) {
                                    (ak = function() {
                                        return 1
                                    }).toJSON = ak;
                                    try {
                                        aj = ai(0) === "0" && ai(new K()) === "0" && ai(new R()) == '""' && ai(u) === L && ai(L) === L && ai() === L && ai(ak) === "1" && ai([ak]) == "[1]" && ai([L]) == "[null]" && ai(null) == "null" && ai([L, u, null]) == "[null,null,null]" && ai({
                                            a: [ak, true, false, null, "\b\n\f\r\t"]
                                        }) == ah && ai(null, ak) === "1" && ai([1, 2], null, 1) == "[\n 1,\n 2\n]" && ai(new S(-8640000000000000)) == '"-271821-04-20T00:00:00.000Z"' && ai(new S(8640000000000000)) == '"+275760-09-13T00:00:00.000Z"' && ai(new S(-62198755200000)) == '"-000001-01-01T00:00:00.000Z"' && ai(new S(-1)) == '"1969-12-31T23:59:59.999Z"'
                                    } catch (ae) {
                                        aj = false
                                    }
                                }
                                ad = aj
                            }
                            if (ac == "json-parse") {
                                var ag = V.parse;
                                if (typeof ag == "function") {
                                    try {
                                        if (ag("0") === 0 && !ag(false)) {
                                            ak = ag(ah);
                                            var af = ak.a.length == 5 && ak.a[0] === 1;
                                            if (af) {
                                                try {
                                                    af = !ag('"\t"')
                                                } catch (ae) {}
                                                if (af) {
                                                    try {
                                                        af = ag("01") !== 1
                                                    } catch (ae) {}
                                                }
                                                if (af) {
                                                    try {
                                                        af = ag("1.") !== 1
                                                    } catch (ae) {}
                                                }
                                            }
                                        }
                                    } catch (ae) {
                                        af = false
                                    }
                                }
                                ad = af
                            }
                        }
                    }
                    return o[ac] = !!ad
                }
                if (!o("json")) {
                    var U = "[object Function]",
                        Q = "[object Date]",
                        N = "[object Number]",
                        O = "[object String]",
                        E = "[object Array]",
                        A = "[object Boolean]";
                    var F = o("bug-string-char-index");
                    if (!B) {
                        var s = J.floor;
                        var Z = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
                        var D = function(ac, ad) {
                            return Z[ad] + 365 * (ac - 1970) + s((ac - 1969 + (ad = +(ad > 1))) / 4) - s((ac - 1901 + ad) / 100) + s((ac - 1601 + ad) / 400)
                        }
                    }
                    if (!(r = n.hasOwnProperty)) {
                        r = function(ae) {
                            var ac = {},
                                ad;
                            if ((ac.__proto__ = null, ac.__proto__ = {
                                toString: 1
                            }, ac).toString != u) {
                                r = function(ah) {
                                    var ag = this.__proto__,
                                        af = ah in (this.__proto__ = null, this);
                                    this.__proto__ = ag;
                                    return af
                                }
                            } else {
                                ad = ac.constructor;
                                r = function(ag) {
                                    var af = (this.constructor || ad).prototype;
                                    return ag in this && !(ag in af && this[ag] === af[ag])
                                }
                            }
                            ac = null;
                            return r.call(this, ae)
                        }
                    }
                    m = function(ae, ah) {
                        var af = 0,
                            ac, ad, ag;
                        (ac = function() {
                            this.valueOf = 0
                        }).prototype.valueOf = 0;
                        ad = new ac();
                        for (ag in ad) {
                            if (r.call(ad, ag)) {
                                af++
                            }
                        }
                        ac = ad = null;
                        if (!af) {
                            ad = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
                            m = function(aj, an) {
                                var am = u.call(aj) == U,
                                    al, ak;
                                var ai = !am && typeof aj.constructor != "function" && e[typeof aj.hasOwnProperty] && aj.hasOwnProperty || r;
                                for (al in aj) {
                                    if (!(am && al == "prototype") && ai.call(aj, al)) {
                                        an(al)
                                    }
                                }
                                for (ak = ad.length; al = ad[--ak]; ai.call(aj, al) && an(al)) {}
                            }
                        } else {
                            if (af == 2) {
                                m = function(aj, am) {
                                    var ai = {},
                                        al = u.call(aj) == U,
                                        ak;
                                    for (ak in aj) {
                                        if (!(al && ak == "prototype") && !r.call(ai, ak) && (ai[ak] = 1) && r.call(aj, ak)) {
                                            am(ak)
                                        }
                                    }
                                }
                            } else {
                                m = function(aj, am) {
                                    var al = u.call(aj) == U,
                                        ak, ai;
                                    for (ak in aj) {
                                        if (!(al && ak == "prototype") && r.call(aj, ak) && !(ai = ak === "constructor")) {
                                            am(ak)
                                        }
                                    }
                                    if (ai || r.call(aj, (ak = "constructor"))) {
                                        am(ak)
                                    }
                                }
                            }
                        }
                        return m(ae, ah)
                    };
                    if (!o("json-stringify")) {
                        var q = {
                            92: "\\\\",
                            34: '\\"',
                            8: "\\b",
                            12: "\\f",
                            10: "\\n",
                            13: "\\r",
                            9: "\\t"
                        };
                        var I = "000000";
                        var t = function(ac, ad) {
                            return (I + (ad || 0)).slice(-ac)
                        };
                        var z = "\\u00";
                        var C = function(ai) {
                            var ad = '"',
                                ag = 0,
                                ah = ai.length,
                                ac = !F || ah > 10;
                            var af = ac && (F ? ai.split("") : ai);
                            for (; ag < ah; ag++) {
                                var ae = ai.charCodeAt(ag);
                                switch (ae) {
                                    case 8:
                                    case 9:
                                    case 10:
                                    case 12:
                                    case 13:
                                    case 34:
                                    case 92:
                                        ad += q[ae];
                                        break;
                                    default:
                                        if (ae < 32) {
                                            ad += z + t(2, ae.toString(16));
                                            break
                                        }
                                        ad += ac ? af[ag] : ai.charAt(ag)
                                }
                            }
                            return ad + '"'
                        };
                        var p = function(ai, aA, ag, al, ax, ac, aj) {
                            var at, ae, ap, az, ay, ak, aw, au, aq, an, ar, ad, ah, af, av, ao;
                            try {
                                at = aA[ai]
                            } catch (am) {}
                            if (typeof at == "object" && at) {
                                ae = u.call(at);
                                if (ae == Q && !r.call(at, "toJSON")) {
                                    if (at > -1 / 0 && at < 1 / 0) {
                                        if (D) {
                                            ay = s(at / 86400000);
                                            for (ap = s(ay / 365.2425) + 1970 - 1; D(ap + 1, 0) <= ay; ap++) {}
                                            for (az = s((ay - D(ap, 0)) / 30.42); D(ap, az + 1) <= ay; az++) {}
                                            ay = 1 + ay - D(ap, az);
                                            ak = (at % 86400000 + 86400000) % 86400000;
                                            aw = s(ak / 3600000) % 24;
                                            au = s(ak / 60000) % 60;
                                            aq = s(ak / 1000) % 60;
                                            an = ak % 1000
                                        } else {
                                            ap = at.getUTCFullYear();
                                            az = at.getUTCMonth();
                                            ay = at.getUTCDate();
                                            aw = at.getUTCHours();
                                            au = at.getUTCMinutes();
                                            aq = at.getUTCSeconds();
                                            an = at.getUTCMilliseconds()
                                        }
                                        at = (ap <= 0 || ap >= 10000 ? (ap < 0 ? "-" : "+") + t(6, ap < 0 ? -ap : ap) : t(4, ap)) + "-" + t(2, az + 1) + "-" + t(2, ay) + "T" + t(2, aw) + ":" + t(2, au) + ":" + t(2, aq) + "." + t(3, an) + "Z"
                                    } else {
                                        at = null
                                    }
                                } else {
                                    if (typeof at.toJSON == "function" && ((ae != N && ae != O && ae != E) || r.call(at, "toJSON"))) {
                                        at = at.toJSON(ai)
                                    }
                                }
                            }
                            if (ag) {
                                at = ag.call(aA, ai, at)
                            }
                            if (at === null) {
                                return "null"
                            }
                            ae = u.call(at);
                            if (ae == A) {
                                return "" + at
                            } else {
                                if (ae == N) {
                                    return at > -1 / 0 && at < 1 / 0 ? "" + at : "null"
                                } else {
                                    if (ae == O) {
                                        return C("" + at)
                                    }
                                }
                            } if (typeof at == "object") {
                                for (af = aj.length; af--;) {
                                    if (aj[af] === at) {
                                        throw aa()
                                    }
                                }
                                aj.push(at);
                                ar = [];
                                av = ac;
                                ac += ax;
                                if (ae == E) {
                                    for (ah = 0, af = at.length; ah < af; ah++) {
                                        ad = p(ah, at, ag, al, ax, ac, aj);
                                        ar.push(ad === L ? "null" : ad)
                                    }
                                    ao = ar.length ? (ax ? "[\n" + ac + ar.join(",\n" + ac) + "\n" + av + "]" : ("[" + ar.join(",") + "]")) : "[]"
                                } else {
                                    m(al || at, function(aC) {
                                        var aB = p(aC, at, ag, al, ax, ac, aj);
                                        if (aB !== L) {
                                            ar.push(C(aC) + ":" + (ax ? " " : "") + aB)
                                        }
                                    });
                                    ao = ar.length ? (ax ? "{\n" + ac + ar.join(",\n" + ac) + "\n" + av + "}" : ("{" + ar.join(",") + "}")) : "{}"
                                }
                                aj.pop();
                                return ao
                            }
                        };
                        V.stringify = function(ac, ae, af) {
                            var ad, al, aj, ai;
                            if (e[typeof ae] && ae) {
                                if ((ai = u.call(ae)) == U) {
                                    al = ae
                                } else {
                                    if (ai == E) {
                                        aj = {};
                                        for (var ah = 0, ag = ae.length, ak; ah < ag; ak = ae[ah++], ((ai = u.call(ak)), ai == O || ai == N) && (aj[ak] = 1)) {}
                                    }
                                }
                            }
                            if (af) {
                                if ((ai = u.call(af)) == N) {
                                    if ((af -= af % 1) > 0) {
                                        for (ad = "", af > 10 && (af = 10); ad.length < af; ad += " ") {}
                                    }
                                } else {
                                    if (ai == O) {
                                        ad = af.length <= 10 ? af : af.slice(0, 10)
                                    }
                                }
                            }
                            return p("", (ak = {}, ak[""] = ac, ak), al, aj, ad, "", [])
                        }
                    }
                    if (!o("json-parse")) {
                        var M = R.fromCharCode;
                        var l = {
                            92: "\\",
                            34: '"',
                            47: "/",
                            98: "\b",
                            116: "\t",
                            110: "\n",
                            102: "\f",
                            114: "\r"
                        };
                        var G, X;
                        var H = function() {
                            G = X = null;
                            throw T()
                        };
                        var y = function() {
                            var ah = X,
                                af = ah.length,
                                ag, ae, ac, ai, ad;
                            while (G < af) {
                                ad = ah.charCodeAt(G);
                                switch (ad) {
                                    case 9:
                                    case 10:
                                    case 13:
                                    case 32:
                                        G++;
                                        break;
                                    case 123:
                                    case 125:
                                    case 91:
                                    case 93:
                                    case 58:
                                    case 44:
                                        ag = F ? ah.charAt(G) : ah[G];
                                        G++;
                                        return ag;
                                    case 34:
                                        for (ag = "@", G++; G < af;) {
                                            ad = ah.charCodeAt(G);
                                            if (ad < 32) {
                                                H()
                                            } else {
                                                if (ad == 92) {
                                                    ad = ah.charCodeAt(++G);
                                                    switch (ad) {
                                                        case 92:
                                                        case 34:
                                                        case 47:
                                                        case 98:
                                                        case 116:
                                                        case 110:
                                                        case 102:
                                                        case 114:
                                                            ag += l[ad];
                                                            G++;
                                                            break;
                                                        case 117:
                                                            ae = ++G;
                                                            for (ac = G + 4; G < ac; G++) {
                                                                ad = ah.charCodeAt(G);
                                                                if (!(ad >= 48 && ad <= 57 || ad >= 97 && ad <= 102 || ad >= 65 && ad <= 70)) {
                                                                    H()
                                                                }
                                                            }
                                                            ag += M("0x" + ah.slice(ae, G));
                                                            break;
                                                        default:
                                                            H()
                                                    }
                                                } else {
                                                    if (ad == 34) {
                                                        break
                                                    }
                                                    ad = ah.charCodeAt(G);
                                                    ae = G;
                                                    while (ad >= 32 && ad != 92 && ad != 34) {
                                                        ad = ah.charCodeAt(++G)
                                                    }
                                                    ag += ah.slice(ae, G)
                                                }
                                            }
                                        }
                                        if (ah.charCodeAt(G) == 34) {
                                            G++;
                                            return ag
                                        }
                                        H();
                                    default:
                                        ae = G;
                                        if (ad == 45) {
                                            ai = true;
                                            ad = ah.charCodeAt(++G)
                                        }
                                        if (ad >= 48 && ad <= 57) {
                                            if (ad == 48 && ((ad = ah.charCodeAt(G + 1)), ad >= 48 && ad <= 57)) {
                                                H()
                                            }
                                            ai = false;
                                            for (; G < af && ((ad = ah.charCodeAt(G)), ad >= 48 && ad <= 57); G++) {}
                                            if (ah.charCodeAt(G) == 46) {
                                                ac = ++G;
                                                for (; ac < af && ((ad = ah.charCodeAt(ac)), ad >= 48 && ad <= 57); ac++) {}
                                                if (ac == G) {
                                                    H()
                                                }
                                                G = ac
                                            }
                                            ad = ah.charCodeAt(G);
                                            if (ad == 101 || ad == 69) {
                                                ad = ah.charCodeAt(++G);
                                                if (ad == 43 || ad == 45) {
                                                    G++
                                                }
                                                for (ac = G; ac < af && ((ad = ah.charCodeAt(ac)), ad >= 48 && ad <= 57); ac++) {}
                                                if (ac == G) {
                                                    H()
                                                }
                                                G = ac
                                            }
                                            return +ah.slice(ae, G)
                                        }
                                        if (ai) {
                                            H()
                                        }
                                        if (ah.slice(G, G + 4) == "true") {
                                            G += 4;
                                            return true
                                        } else {
                                            if (ah.slice(G, G + 5) == "false") {
                                                G += 5;
                                                return false
                                            } else {
                                                if (ah.slice(G, G + 4) == "null") {
                                                    G += 4;
                                                    return null
                                                }
                                            }
                                        }
                                        H()
                                }
                            }
                            return "$"
                        };
                        var W = function(ad) {
                            var ac, ae;
                            if (ad == "$") {
                                H()
                            }
                            if (typeof ad == "string") {
                                if ((F ? ad.charAt(0) : ad[0]) == "@") {
                                    return ad.slice(1)
                                }
                                if (ad == "[") {
                                    ac = [];
                                    for (;; ae || (ae = true)) {
                                        ad = y();
                                        if (ad == "]") {
                                            break
                                        }
                                        if (ae) {
                                            if (ad == ",") {
                                                ad = y();
                                                if (ad == "]") {
                                                    H()
                                                }
                                            } else {
                                                H()
                                            }
                                        }
                                        if (ad == ",") {
                                            H()
                                        }
                                        ac.push(W(ad))
                                    }
                                    return ac
                                } else {
                                    if (ad == "{") {
                                        ac = {};
                                        for (;; ae || (ae = true)) {
                                            ad = y();
                                            if (ad == "}") {
                                                break
                                            }
                                            if (ae) {
                                                if (ad == ",") {
                                                    ad = y();
                                                    if (ad == "}") {
                                                        H()
                                                    }
                                                } else {
                                                    H()
                                                }
                                            }
                                            if (ad == "," || typeof ad != "string" || (F ? ad.charAt(0) : ad[0]) != "@" || y() != ":") {
                                                H()
                                            }
                                            ac[ad.slice(1)] = W(y())
                                        }
                                        return ac
                                    }
                                }
                                H()
                            }
                            return ad
                        };
                        var P = function(ae, ad, af) {
                            var ac = w(ae, ad, af);
                            if (ac === L) {
                                delete ae[ad]
                            } else {
                                ae[ad] = ac
                            }
                        };
                        var w = function(af, ae, ag) {
                            var ad = af[ae],
                                ac;
                            if (typeof ad == "object" && ad) {
                                if (u.call(ad) == E) {
                                    for (ac = ad.length; ac--;) {
                                        P(ad, ac, ag)
                                    }
                                } else {
                                    m(ad, function(ah) {
                                        P(ad, ah, ag)
                                    })
                                }
                            }
                            return ag.call(af, ae, ad)
                        };
                        V.parse = function(ae, af) {
                            var ac, ad;
                            G = 0;
                            X = "" + ae;
                            ac = W(y());
                            if (y() != "$") {
                                H()
                            }
                            G = X = null;
                            return af && u.call(af) == U ? w((ad = {}, ad[""] = ac, ad), "", af) : ac
                        }
                    }
                }
                V.runInContext = j;
                return V
            }
            if (h && !c) {
                j(i, h)
            } else {
                var f = i.JSON,
                    k = i.JSON3,
                    d = false;
                var g = j(i, (i.JSON3 = {
                    noConflict: function() {
                        if (!d) {
                            d = true;
                            i.JSON = f;
                            i.JSON3 = k;
                            f = k = null
                        }
                        return g
                    }
                }));
                i.JSON = {
                    parse: g.parse,
                    stringify: g.stringify
                }
            } if (c) {
                define(function() {
                    return g
                })
            }
        }).call(this);
        JSON_PIWIK = a
    })()
} if (typeof _paq !== "object") {
    _paq = []
}
if (typeof window.Piwik !== "object") {
    window.Matomo = window.Piwik = (function() {
        var r, b = {},
            y = {},
            G = document,
            h = navigator,
            X = screen,
            T = window,
            i = T.performance || T.mozPerformance || T.msPerformance || T.webkitPerformance,
            t = T.encodeURIComponent,
            S = T.decodeURIComponent,
            l = unescape,
            I = [],
            E, e, ah = [],
            x = 0,
            ab = 0,
            U = 0,
            m = false;

        function p(ao) {
            try {
                return S(ao)
            } catch (ap) {
                return unescape(ao)
            }
        }

        function J(ap) {
            var ao = typeof ap;
            return ao !== "undefined"
        }

        function A(ao) {
            return typeof ao === "function"
        }

        function W(ao) {
            return typeof ao === "object"
        }

        function w(ao) {
            return typeof ao === "string" || ao instanceof String
        }

        function ag(ao) {
            return typeof ao === "number" || ao instanceof Number
        }

        function Y(ao) {
            return J(ao) && (ag(ao) || (w(ao) && ao.length))
        }

        function B(ap) {
            if (!ap) {
                return true
            }
            var ao;
            var aq = true;
            for (ao in ap) {
                if (Object.prototype.hasOwnProperty.call(ap, ao)) {
                    aq = false
                }
            }
            return aq
        }

        function ak(ao) {
            var ap = typeof console;
            if (ap !== "undefined" && console && console.error) {
                console.error(ao)
            }
        }

        function af() {
            var au, at, aw, ap, ao;
            for (au = 0; au < arguments.length; au += 1) {
                ao = null;
                if (arguments[au] && arguments[au].slice) {
                    ao = arguments[au].slice()
                }
                ap = arguments[au];
                aw = ap.shift();
                var av, aq;
                var ar = w(aw) && aw.indexOf("::") > 0;
                if (ar) {
                    av = aw.split("::");
                    aq = av[0];
                    aw = av[1];
                    if ("object" === typeof e[aq] && "function" === typeof e[aq][aw]) {
                        e[aq][aw].apply(e[aq], ap)
                    } else {
                        if (ao) {
                            ah.push(ao)
                        }
                    }
                } else {
                    for (at = 0; at < I.length; at++) {
                        if (w(aw)) {
                            aq = I[at];
                            var ax = aw.indexOf(".") > 0;
                            if (ax) {
                                av = aw.split(".");
                                if (aq && "object" === typeof aq[av[0]]) {
                                    aq = aq[av[0]];
                                    aw = av[1]
                                } else {
                                    if (ao) {
                                        ah.push(ao);
                                        break
                                    }
                                }
                            }
                            if (aq[aw]) {
                                aq[aw].apply(aq, ap)
                            } else {
                                var ay = "The method '" + aw + '\' was not found in "_paq" variable.  Please have a look at the Piwik tracker documentation: https://developer.piwik.org/api-reference/tracking-javascript';
                                ak(ay);
                                if (!ax) {
                                    throw new TypeError(ay)
                                }
                            } if (aw === "addTracker") {
                                break
                            }
                            if (aw === "setTrackerUrl" || aw === "setSiteId") {
                                break
                            }
                        } else {
                            aw.apply(I[at], ap)
                        }
                    }
                }
            }
        }

        function an(ar, aq, ap, ao) {
            if (ar.addEventListener) {
                ar.addEventListener(aq, ap, ao);
                return true
            }
            if (ar.attachEvent) {
                return ar.attachEvent("on" + aq, ap)
            }
            ar["on" + aq] = ap
        }

        function n(ao) {
            if (G.readyState === "complete") {
                ao()
            } else {
                if (T.addEventListener) {
                    T.addEventListener("load", ao, false)
                } else {
                    if (T.attachEvent) {
                        T.attachEvent("onload", ao)
                    }
                }
            }
        }

        function q(ar) {
            var ao = false;
            if (G.attachEvent) {
                ao = G.readyState === "complete"
            } else {
                ao = G.readyState !== "loading"
            } if (ao) {
                ar();
                return
            }
            var aq;
            if (G.addEventListener) {
                an(G, "DOMContentLoaded", function ap() {
                    G.removeEventListener("DOMContentLoaded", ap, false);
                    if (!ao) {
                        ao = true;
                        ar()
                    }
                })
            } else {
                if (G.attachEvent) {
                    G.attachEvent("onreadystatechange", function ap() {
                        if (G.readyState === "complete") {
                            G.detachEvent("onreadystatechange", ap);
                            if (!ao) {
                                ao = true;
                                ar()
                            }
                        }
                    });
                    if (G.documentElement.doScroll && T === T.top) {
                        (function ap() {
                            if (!ao) {
                                try {
                                    G.documentElement.doScroll("left")
                                } catch (at) {
                                    setTimeout(ap, 0);
                                    return
                                }
                                ao = true;
                                ar()
                            }
                        }())
                    }
                }
            }
            an(T, "load", function() {
                if (!ao) {
                    ao = true;
                    ar()
                }
            }, false)
        }

        function ac(ap, av, aw) {
            if (!ap) {
                return ""
            }
            var ao = "",
                ar, aq, at, au;
            for (ar in b) {
                if (Object.prototype.hasOwnProperty.call(b, ar)) {
                    au = b[ar] && "function" === typeof b[ar][ap];
                    if (au) {
                        aq = b[ar][ap];
                        at = aq(av || {}, aw);
                        if (at) {
                            ao += at
                        }
                    }
                }
            }
            return ao
        }

        function ai() {
            var ao;
            m = true;
            ac("unload");
            if (r) {
                do {
                    ao = new Date()
                } while (ao.getTimeAlias() < r)
            }
        }

        function o(aq, ap) {
            var ao = G.createElement("script");
            ao.type = "text/javascript";
            ao.src = aq;
            if (ao.readyState) {
                ao.onreadystatechange = function() {
                    var ar = this.readyState;
                    if (ar === "loaded" || ar === "complete") {
                        ao.onreadystatechange = null;
                        ap()
                    }
                }
            } else {
                ao.onload = ap
            }
            G.getElementsByTagName("head")[0].appendChild(ao)
        }

        function K() {
            var ao = "";
            try {
                ao = T.top.document.referrer
            } catch (aq) {
                if (T.parent) {
                    try {
                        ao = T.parent.document.referrer
                    } catch (ap) {
                        ao = ""
                    }
                }
            }
            if (ao === "") {
                ao = G.referrer
            }
            return ao
        }

        function s(ao) {
            var aq = new RegExp("^([a-z]+):"),
                ap = aq.exec(ao);
            return ap ? ap[1] : null
        }

        function d(ao) {
            var aq = new RegExp("^(?:(?:https?|ftp):)/*(?:[^@]+@)?([^:/#]+)"),
                ap = aq.exec(ao);
            return ap ? ap[1] : ao
        }

        function aj(ap, ao) {
            ap = String(ap);
            return ap.lastIndexOf(ao, 0) === 0
        }

        function R(ap, ao) {
            ap = String(ap);
            return ap.indexOf(ao, ap.length - ao.length) !== -1
        }

        function z(ap, ao) {
            ap = String(ap);
            return ap.indexOf(ao) !== -1
        }

        function g(ap, ao) {
            ap = String(ap);
            return ap.substr(0, ap.length - ao)
        }

        function F(ar, aq, au) {
            ar = String(ar);
            if (!au) {
                au = ""
            }
            var ao = ar.indexOf("#");
            var av = ar.length;
            if (ao === -1) {
                ao = av
            }
            var at = ar.substr(0, ao);
            var ap = ar.substr(ao, av - ao);
            if (at.indexOf("?") === -1) {
                at += "?"
            } else {
                if (!R(at, "?")) {
                    at += "&"
                }
            }
            return at + t(aq) + "=" + t(au) + ap
        }

        function k(ap, aq) {
            ap = String(ap);
            if (ap.indexOf("?" + aq + "=") === -1 && ap.indexOf("&" + aq + "=") === -1) {
                return ap
            }
            var ar = ap.indexOf("?");
            if (ar === -1) {
                return ap
            }
            var ao = ap.substr(ar + 1);
            var aw = ap.substr(0, ar);
            if (ao) {
                var ax = "";
                var az = ao.indexOf("#");
                if (az !== -1) {
                    ax = ao.substr(az + 1);
                    ao = ao.substr(0, az)
                }
                var at;
                var av = ao.split("&");
                var au = av.length - 1;
                for (au; au >= 0; au--) {
                    at = av[au].split("=")[0];
                    if (at === aq) {
                        av.splice(au, 1)
                    }
                }
                var ay = av.join("&");
                if (ay) {
                    aw = aw + "?" + ay
                }
                if (ax) {
                    aw += "#" + ax
                }
            }
            return aw
        }

        function f(aq, ap) {
            var ao = "[\\?&#]" + ap + "=([^&#]*)";
            var at = new RegExp(ao);
            var ar = at.exec(aq);
            return ar ? S(ar[1]) : ""
        }

        function a(ao) {
            if (ao && String(ao) === ao) {
                return ao.replace(/^\s+|\s+$/g, "")
            }
            return ao
        }

        function D(ao) {
            return unescape(t(ao))
        }

        function am(aE) {
            var aq = function(aK, aJ) {
                    return (aK << aJ) | (aK >>> (32 - aJ))
                },
                aF = function(aM) {
                    var aK = "",
                        aL, aJ;
                    for (aL = 7; aL >= 0; aL--) {
                        aJ = (aM >>> (aL * 4)) & 15;
                        aK += aJ.toString(16)
                    }
                    return aK
                },
                au, aH, aG, ap = [],
                ay = 1732584193,
                aw = 4023233417,
                av = 2562383102,
                at = 271733878,
                ar = 3285377520,
                aD, aC, aB, aA, az, aI, ao, ax = [];
            aE = D(aE);
            ao = aE.length;
            for (aH = 0; aH < ao - 3; aH += 4) {
                aG = aE.charCodeAt(aH) << 24 | aE.charCodeAt(aH + 1) << 16 | aE.charCodeAt(aH + 2) << 8 | aE.charCodeAt(aH + 3);
                ax.push(aG)
            }
            switch (ao & 3) {
                case 0:
                    aH = 2147483648;
                    break;
                case 1:
                    aH = aE.charCodeAt(ao - 1) << 24 | 8388608;
                    break;
                case 2:
                    aH = aE.charCodeAt(ao - 2) << 24 | aE.charCodeAt(ao - 1) << 16 | 32768;
                    break;
                case 3:
                    aH = aE.charCodeAt(ao - 3) << 24 | aE.charCodeAt(ao - 2) << 16 | aE.charCodeAt(ao - 1) << 8 | 128;
                    break
            }
            ax.push(aH);
            while ((ax.length & 15) !== 14) {
                ax.push(0)
            }
            ax.push(ao >>> 29);
            ax.push((ao << 3) & 4294967295);
            for (au = 0; au < ax.length; au += 16) {
                for (aH = 0; aH < 16; aH++) {
                    ap[aH] = ax[au + aH]
                }
                for (aH = 16; aH <= 79; aH++) {
                    ap[aH] = aq(ap[aH - 3] ^ ap[aH - 8] ^ ap[aH - 14] ^ ap[aH - 16], 1)
                }
                aD = ay;
                aC = aw;
                aB = av;
                aA = at;
                az = ar;
                for (aH = 0; aH <= 19; aH++) {
                    aI = (aq(aD, 5) + ((aC & aB) | (~aC & aA)) + az + ap[aH] + 1518500249) & 4294967295;
                    az = aA;
                    aA = aB;
                    aB = aq(aC, 30);
                    aC = aD;
                    aD = aI
                }
                for (aH = 20; aH <= 39; aH++) {
                    aI = (aq(aD, 5) + (aC ^ aB ^ aA) + az + ap[aH] + 1859775393) & 4294967295;
                    az = aA;
                    aA = aB;
                    aB = aq(aC, 30);
                    aC = aD;
                    aD = aI
                }
                for (aH = 40; aH <= 59; aH++) {
                    aI = (aq(aD, 5) + ((aC & aB) | (aC & aA) | (aB & aA)) + az + ap[aH] + 2400959708) & 4294967295;
                    az = aA;
                    aA = aB;
                    aB = aq(aC, 30);
                    aC = aD;
                    aD = aI
                }
                for (aH = 60; aH <= 79; aH++) {
                    aI = (aq(aD, 5) + (aC ^ aB ^ aA) + az + ap[aH] + 3395469782) & 4294967295;
                    az = aA;
                    aA = aB;
                    aB = aq(aC, 30);
                    aC = aD;
                    aD = aI
                }
                ay = (ay + aD) & 4294967295;
                aw = (aw + aC) & 4294967295;
                av = (av + aB) & 4294967295;
                at = (at + aA) & 4294967295;
                ar = (ar + az) & 4294967295
            }
            aI = aF(ay) + aF(aw) + aF(av) + aF(at) + aF(ar);
            return aI.toLowerCase()
        }

        function aa(aq, ao, ap) {
            if (!aq) {
                aq = ""
            }
            if (!ao) {
                ao = ""
            }
            if (aq === "translate.googleusercontent.com") {
                if (ap === "") {
                    ap = ao
                }
                ao = f(ao, "u");
                aq = d(ao)
            } else {
                if (aq === "cc.bingj.com" || aq === "webcache.googleusercontent.com" || aq.slice(0, 5) === "74.6.") {
                    ao = G.links[0].href;
                    aq = d(ao)
                }
            }
            return [aq, ao, ap]
        }

        function L(ap) {
            var ao = ap.length;
            if (ap.charAt(--ao) === ".") {
                ap = ap.slice(0, ao)
            }
            if (ap.slice(0, 2) === "*.") {
                ap = ap.slice(1)
            }
            if (ap.indexOf("/") !== -1) {
                ap = ap.substr(0, ap.indexOf("/"))
            }
            return ap
        }

        function al(ap) {
            ap = ap && ap.text ? ap.text : ap;
            if (!w(ap)) {
                var ao = G.getElementsByTagName("title");
                if (ao && J(ao[0])) {
                    ap = ao[0].text
                }
            }
            return ap
        }

        function P(ao) {
            if (!ao) {
                return []
            }
            if (!J(ao.children) && J(ao.childNodes)) {
                return ao.children
            }
            if (J(ao.children)) {
                return ao.children
            }
            return []
        }

        function V(ap, ao) {
            if (!ap || !ao) {
                return false
            }
            if (ap.contains) {
                return ap.contains(ao)
            }
            if (ap === ao) {
                return true
            }
            if (ap.compareDocumentPosition) {
                return !!(ap.compareDocumentPosition(ao) & 16)
            }
            return false
        }

        function M(aq, ar) {
            if (aq && aq.indexOf) {
                return aq.indexOf(ar)
            }
            if (!J(aq) || aq === null) {
                return -1
            }
            if (!aq.length) {
                return -1
            }
            var ao = aq.length;
            if (ao === 0) {
                return -1
            }
            var ap = 0;
            while (ap < ao) {
                if (aq[ap] === ar) {
                    return ap
                }
                ap++
            }
            return -1
        }

        function j(aq) {
            if (!aq) {
                return false
            }

            function ao(at, au) {
                if (T.getComputedStyle) {
                    return G.defaultView.getComputedStyle(at, null)[au]
                }
                if (at.currentStyle) {
                    return at.currentStyle[au]
                }
            }

            function ar(at) {
                at = at.parentNode;
                while (at) {
                    if (at === G) {
                        return true
                    }
                    at = at.parentNode
                }
                return false
            }

            function ap(av, aB, at, ay, aw, az, ax) {
                var au = av.parentNode,
                    aA = 1;
                if (!ar(av)) {
                    return false
                }
                if (9 === au.nodeType) {
                    return true
                }
                if ("0" === ao(av, "opacity") || "none" === ao(av, "display") || "hidden" === ao(av, "visibility")) {
                    return false
                }
                if (!J(aB) || !J(at) || !J(ay) || !J(aw) || !J(az) || !J(ax)) {
                    aB = av.offsetTop;
                    aw = av.offsetLeft;
                    ay = aB + av.offsetHeight;
                    at = aw + av.offsetWidth;
                    az = av.offsetWidth;
                    ax = av.offsetHeight
                }
                if (aq === av && (0 === ax || 0 === az) && "hidden" === ao(av, "overflow")) {
                    return false
                }
                if (au) {
                    if (("hidden" === ao(au, "overflow") || "scroll" === ao(au, "overflow"))) {
                        if (aw + aA > au.offsetWidth + au.scrollLeft || aw + az - aA < au.scrollLeft || aB + aA > au.offsetHeight + au.scrollTop || aB + ax - aA < au.scrollTop) {
                            return false
                        }
                    }
                    if (av.offsetParent === au) {
                        aw += au.offsetLeft;
                        aB += au.offsetTop
                    }
                    return ap(au, aB, at, ay, aw, az, ax)
                }
                return true
            }
            return ap(aq)
        }
        var ae = {
            htmlCollectionToArray: function(aq) {
                var ao = [],
                    ap;
                if (!aq || !aq.length) {
                    return ao
                }
                for (ap = 0; ap < aq.length; ap++) {
                    ao.push(aq[ap])
                }
                return ao
            },
            find: function(ao) {
                if (!document.querySelectorAll || !ao) {
                    return []
                }
                var ap = document.querySelectorAll(ao);
                return this.htmlCollectionToArray(ap)
            },
            findMultiple: function(aq) {
                if (!aq || !aq.length) {
                    return []
                }
                var ap, ar;
                var ao = [];
                for (ap = 0; ap < aq.length; ap++) {
                    ar = this.find(aq[ap]);
                    ao = ao.concat(ar)
                }
                ao = this.makeNodesUnique(ao);
                return ao
            },
            findNodesByTagName: function(ap, ao) {
                if (!ap || !ao || !ap.getElementsByTagName) {
                    return []
                }
                var aq = ap.getElementsByTagName(ao);
                return this.htmlCollectionToArray(aq)
            },
            makeNodesUnique: function(ao) {
                var au = [].concat(ao);
                ao.sort(function(aw, av) {
                    if (aw === av) {
                        return 0
                    }
                    var ay = M(au, aw);
                    var ax = M(au, av);
                    if (ay === ax) {
                        return 0
                    }
                    return ay > ax ? -1 : 1
                });
                if (ao.length <= 1) {
                    return ao
                }
                var ap = 0;
                var ar = 0;
                var at = [];
                var aq;
                aq = ao[ap++];
                while (aq) {
                    if (aq === ao[ap]) {
                        ar = at.push(ap)
                    }
                    aq = ao[ap++] || null
                }
                while (ar--) {
                    ao.splice(at[ar], 1)
                }
                return ao
            },
            getAttributeValueFromNode: function(at, aq) {
                if (!this.hasNodeAttribute(at, aq)) {
                    return
                }
                if (at && at.getAttribute) {
                    return at.getAttribute(aq)
                }
                if (!at || !at.attributes) {
                    return
                }
                var ar = (typeof at.attributes[aq]);
                if ("undefined" === ar) {
                    return
                }
                if (at.attributes[aq].value) {
                    return at.attributes[aq].value
                }
                if (at.attributes[aq].nodeValue) {
                    return at.attributes[aq].nodeValue
                }
                var ap;
                var ao = at.attributes;
                if (!ao) {
                    return
                }
                for (ap = 0; ap < ao.length; ap++) {
                    if (ao[ap].nodeName === aq) {
                        return ao[ap].nodeValue
                    }
                }
                return null
            },
            hasNodeAttributeWithValue: function(ap, ao) {
                var aq = this.getAttributeValueFromNode(ap, ao);
                return !!aq
            },
            hasNodeAttribute: function(aq, ao) {
                if (aq && aq.hasAttribute) {
                    return aq.hasAttribute(ao)
                }
                if (aq && aq.attributes) {
                    var ap = (typeof aq.attributes[ao]);
                    return "undefined" !== ap
                }
                return false
            },
            hasNodeCssClass: function(aq, ao) {
                if (aq && ao && aq.className) {
                    var ap = typeof aq.className === "string" ? aq.className.split(" ") : [];
                    if (-1 !== M(ap, ao)) {
                        return true
                    }
                }
                return false
            },
            findNodesHavingAttribute: function(at, aq, ao) {
                if (!ao) {
                    ao = []
                }
                if (!at || !aq) {
                    return ao
                }
                var ar = P(at);
                if (!ar || !ar.length) {
                    return ao
                }
                var ap, au;
                for (ap = 0; ap < ar.length; ap++) {
                    au = ar[ap];
                    if (this.hasNodeAttribute(au, aq)) {
                        ao.push(au)
                    }
                    ao = this.findNodesHavingAttribute(au, aq, ao)
                }
                return ao
            },
            findFirstNodeHavingAttribute: function(aq, ap) {
                if (!aq || !ap) {
                    return
                }
                if (this.hasNodeAttribute(aq, ap)) {
                    return aq
                }
                var ao = this.findNodesHavingAttribute(aq, ap);
                if (ao && ao.length) {
                    return ao[0]
                }
            },
            findFirstNodeHavingAttributeWithValue: function(ar, aq) {
                if (!ar || !aq) {
                    return
                }
                if (this.hasNodeAttributeWithValue(ar, aq)) {
                    return ar
                }
                var ao = this.findNodesHavingAttribute(ar, aq);
                if (!ao || !ao.length) {
                    return
                }
                var ap;
                for (ap = 0; ap < ao.length; ap++) {
                    if (this.getAttributeValueFromNode(ao[ap], aq)) {
                        return ao[ap]
                    }
                }
            },
            findNodesHavingCssClass: function(at, ar, ao) {
                if (!ao) {
                    ao = []
                }
                if (!at || !ar) {
                    return ao
                }
                if (at.getElementsByClassName) {
                    var au = at.getElementsByClassName(ar);
                    return this.htmlCollectionToArray(au)
                }
                var aq = P(at);
                if (!aq || !aq.length) {
                    return []
                }
                var ap, av;
                for (ap = 0; ap < aq.length; ap++) {
                    av = aq[ap];
                    if (this.hasNodeCssClass(av, ar)) {
                        ao.push(av)
                    }
                    ao = this.findNodesHavingCssClass(av, ar, ao)
                }
                return ao
            },
            findFirstNodeHavingClass: function(aq, ap) {
                if (!aq || !ap) {
                    return
                }
                if (this.hasNodeCssClass(aq, ap)) {
                    return aq
                }
                var ao = this.findNodesHavingCssClass(aq, ap);
                if (ao && ao.length) {
                    return ao[0]
                }
            },
            isLinkElement: function(ap) {
                if (!ap) {
                    return false
                }
                var ao = String(ap.nodeName).toLowerCase();
                var ar = ["a", "area"];
                var aq = M(ar, ao);
                return aq !== -1
            },
            setAnyAttribute: function(ap, ao, aq) {
                if (!ap || !ao) {
                    return
                }
                if (ap.setAttribute) {
                    ap.setAttribute(ao, aq)
                } else {
                    ap[ao] = aq
                }
            }
        };
        var v = {
            CONTENT_ATTR: "data-track-content",
            CONTENT_CLASS: "piwikTrackContent",
            CONTENT_NAME_ATTR: "data-content-name",
            CONTENT_PIECE_ATTR: "data-content-piece",
            CONTENT_PIECE_CLASS: "piwikContentPiece",
            CONTENT_TARGET_ATTR: "data-content-target",
            CONTENT_TARGET_CLASS: "piwikContentTarget",
            CONTENT_IGNOREINTERACTION_ATTR: "data-content-ignoreinteraction",
            CONTENT_IGNOREINTERACTION_CLASS: "piwikContentIgnoreInteraction",
            location: undefined,
            findContentNodes: function() {
                var ap = "." + this.CONTENT_CLASS;
                var ao = "[" + this.CONTENT_ATTR + "]";
                var aq = ae.findMultiple([ap, ao]);
                return aq
            },
            findContentNodesWithinNode: function(ar) {
                if (!ar) {
                    return []
                }
                var ap = ae.findNodesHavingCssClass(ar, this.CONTENT_CLASS);
                var ao = ae.findNodesHavingAttribute(ar, this.CONTENT_ATTR);
                if (ao && ao.length) {
                    var aq;
                    for (aq = 0; aq < ao.length; aq++) {
                        ap.push(ao[aq])
                    }
                }
                if (ae.hasNodeAttribute(ar, this.CONTENT_ATTR)) {
                    ap.push(ar)
                } else {
                    if (ae.hasNodeCssClass(ar, this.CONTENT_CLASS)) {
                        ap.push(ar)
                    }
                }
                ap = ae.makeNodesUnique(ap);
                return ap
            },
            findParentContentNode: function(ap) {
                if (!ap) {
                    return
                }
                var aq = ap;
                var ao = 0;
                while (aq && aq !== G && aq.parentNode) {
                    if (ae.hasNodeAttribute(aq, this.CONTENT_ATTR)) {
                        return aq
                    }
                    if (ae.hasNodeCssClass(aq, this.CONTENT_CLASS)) {
                        return aq
                    }
                    aq = aq.parentNode;
                    if (ao > 1000) {
                        break
                    }
                    ao++
                }
            },
            findPieceNode: function(ap) {
                var ao;
                ao = ae.findFirstNodeHavingAttribute(ap, this.CONTENT_PIECE_ATTR);
                if (!ao) {
                    ao = ae.findFirstNodeHavingClass(ap, this.CONTENT_PIECE_CLASS)
                }
                if (ao) {
                    return ao
                }
                return ap
            },
            findTargetNodeNoDefault: function(ao) {
                if (!ao) {
                    return
                }
                var ap = ae.findFirstNodeHavingAttributeWithValue(ao, this.CONTENT_TARGET_ATTR);
                if (ap) {
                    return ap
                }
                ap = ae.findFirstNodeHavingAttribute(ao, this.CONTENT_TARGET_ATTR);
                if (ap) {
                    return ap
                }
                ap = ae.findFirstNodeHavingClass(ao, this.CONTENT_TARGET_CLASS);
                if (ap) {
                    return ap
                }
            },
            findTargetNode: function(ao) {
                var ap = this.findTargetNodeNoDefault(ao);
                if (ap) {
                    return ap
                }
                return ao
            },
            findContentName: function(ap) {
                if (!ap) {
                    return
                }
                var at = ae.findFirstNodeHavingAttributeWithValue(ap, this.CONTENT_NAME_ATTR);
                if (at) {
                    return ae.getAttributeValueFromNode(at, this.CONTENT_NAME_ATTR)
                }
                var ao = this.findContentPiece(ap);
                if (ao) {
                    return this.removeDomainIfIsInLink(ao)
                }
                if (ae.hasNodeAttributeWithValue(ap, "title")) {
                    return ae.getAttributeValueFromNode(ap, "title")
                }
                var aq = this.findPieceNode(ap);
                if (ae.hasNodeAttributeWithValue(aq, "title")) {
                    return ae.getAttributeValueFromNode(aq, "title")
                }
                var ar = this.findTargetNode(ap);
                if (ae.hasNodeAttributeWithValue(ar, "title")) {
                    return ae.getAttributeValueFromNode(ar, "title")
                }
            },
            findContentPiece: function(ap) {
                if (!ap) {
                    return
                }
                var ar = ae.findFirstNodeHavingAttributeWithValue(ap, this.CONTENT_PIECE_ATTR);
                if (ar) {
                    return ae.getAttributeValueFromNode(ar, this.CONTENT_PIECE_ATTR)
                }
                var ao = this.findPieceNode(ap);
                var aq = this.findMediaUrlInNode(ao);
                if (aq) {
                    return this.toAbsoluteUrl(aq)
                }
            },
            findContentTarget: function(aq) {
                if (!aq) {
                    return
                }
                var ar = this.findTargetNode(aq);
                if (ae.hasNodeAttributeWithValue(ar, this.CONTENT_TARGET_ATTR)) {
                    return ae.getAttributeValueFromNode(ar, this.CONTENT_TARGET_ATTR)
                }
                var ap;
                if (ae.hasNodeAttributeWithValue(ar, "href")) {
                    ap = ae.getAttributeValueFromNode(ar, "href");
                    return this.toAbsoluteUrl(ap)
                }
                var ao = this.findPieceNode(aq);
                if (ae.hasNodeAttributeWithValue(ao, "href")) {
                    ap = ae.getAttributeValueFromNode(ao, "href");
                    return this.toAbsoluteUrl(ap)
                }
            },
            isSameDomain: function(ao) {
                if (!ao || !ao.indexOf) {
                    return false
                }
                if (0 === ao.indexOf(this.getLocation().origin)) {
                    return true
                }
                var ap = ao.indexOf(this.getLocation().host);
                if (8 >= ap && 0 <= ap) {
                    return true
                }
                return false
            },
            removeDomainIfIsInLink: function(aq) {
                var ap = "^https?://[^/]+";
                var ao = "^.*//[^/]+";
                if (aq && aq.search && -1 !== aq.search(new RegExp(ap)) && this.isSameDomain(aq)) {
                    aq = aq.replace(new RegExp(ao), "");
                    if (!aq) {
                        aq = "/"
                    }
                }
                return aq
            },
            findMediaUrlInNode: function(at) {
                if (!at) {
                    return
                }
                var aq = ["img", "embed", "video", "audio"];
                var ao = at.nodeName.toLowerCase();
                if (-1 !== M(aq, ao) && ae.findFirstNodeHavingAttributeWithValue(at, "src")) {
                    var ar = ae.findFirstNodeHavingAttributeWithValue(at, "src");
                    return ae.getAttributeValueFromNode(ar, "src")
                }
                if (ao === "object" && ae.hasNodeAttributeWithValue(at, "data")) {
                    return ae.getAttributeValueFromNode(at, "data")
                }
                if (ao === "object") {
                    var au = ae.findNodesByTagName(at, "param");
                    if (au && au.length) {
                        var ap;
                        for (ap = 0; ap < au.length; ap++) {
                            if ("movie" === ae.getAttributeValueFromNode(au[ap], "name") && ae.hasNodeAttributeWithValue(au[ap], "value")) {
                                return ae.getAttributeValueFromNode(au[ap], "value")
                            }
                        }
                    }
                    var av = ae.findNodesByTagName(at, "embed");
                    if (av && av.length) {
                        return this.findMediaUrlInNode(av[0])
                    }
                }
            },
            trim: function(ao) {
                return a(ao)
            },
            isOrWasNodeInViewport: function(au) {
                if (!au || !au.getBoundingClientRect || au.nodeType !== 1) {
                    return true
                }
                var at = au.getBoundingClientRect();
                var ar = G.documentElement || {};
                var aq = at.top < 0;
                if (aq && au.offsetTop) {
                    aq = (au.offsetTop + at.height) > 0
                }
                var ap = ar.clientWidth;
                if (T.innerWidth && ap > T.innerWidth) {
                    ap = T.innerWidth
                }
                var ao = ar.clientHeight;
                if (T.innerHeight && ao > T.innerHeight) {
                    ao = T.innerHeight
                }
                return ((at.bottom > 0 || aq) && at.right > 0 && at.left < ap && ((at.top < ao) || aq))
            },
            isNodeVisible: function(ap) {
                var ao = j(ap);
                var aq = this.isOrWasNodeInViewport(ap);
                return ao && aq
            },
            buildInteractionRequestParams: function(ao, ap, aq, ar) {
                var at = "";
                if (ao) {
                    at += "c_i=" + t(ao)
                }
                if (ap) {
                    if (at) {
                        at += "&"
                    }
                    at += "c_n=" + t(ap)
                }
                if (aq) {
                    if (at) {
                        at += "&"
                    }
                    at += "c_p=" + t(aq)
                }
                if (ar) {
                    if (at) {
                        at += "&"
                    }
                    at += "c_t=" + t(ar)
                }
                return at
            },
            buildImpressionRequestParams: function(ao, ap, aq) {
                var ar = "c_n=" + t(ao) + "&c_p=" + t(ap);
                if (aq) {
                    ar += "&c_t=" + t(aq)
                }
                return ar
            },
            buildContentBlock: function(aq) {
                if (!aq) {
                    return
                }
                var ao = this.findContentName(aq);
                var ap = this.findContentPiece(aq);
                var ar = this.findContentTarget(aq);
                ao = this.trim(ao);
                ap = this.trim(ap);
                ar = this.trim(ar);
                return {
                    name: ao || "Unknown",
                    piece: ap || "Unknown",
                    target: ar || ""
                }
            },
            collectContent: function(ar) {
                if (!ar || !ar.length) {
                    return []
                }
                var aq = [];
                var ao, ap;
                for (ao = 0; ao < ar.length; ao++) {
                    ap = this.buildContentBlock(ar[ao]);
                    if (J(ap)) {
                        aq.push(ap)
                    }
                }
                return aq
            },
            setLocation: function(ao) {
                this.location = ao
            },
            getLocation: function() {
                var ao = this.location || T.location;
                if (!ao.origin) {
                    ao.origin = ao.protocol + "//" + ao.hostname + (ao.port ? ":" + ao.port : "")
                }
                return ao
            },
            toAbsoluteUrl: function(ap) {
                if ((!ap || String(ap) !== ap) && ap !== "") {
                    return ap
                }
                if ("" === ap) {
                    return this.getLocation().href
                }
                if (ap.search(/^\/\//) !== -1) {
                    return this.getLocation().protocol + ap
                }
                if (ap.search(/:\/\//) !== -1) {
                    return ap
                }
                if (0 === ap.indexOf("#")) {
                    return this.getLocation().origin + this.getLocation().pathname + ap
                }
                if (0 === ap.indexOf("?")) {
                    return this.getLocation().origin + this.getLocation().pathname + ap
                }
                if (0 === ap.search("^[a-zA-Z]{2,11}:")) {
                    return ap
                }
                if (ap.search(/^\//) !== -1) {
                    return this.getLocation().origin + ap
                }
                var ao = "(.*/)";
                var aq = this.getLocation().origin + this.getLocation().pathname.match(new RegExp(ao))[0];
                return aq + ap
            },
            isUrlToCurrentDomain: function(ap) {
                var aq = this.toAbsoluteUrl(ap);
                if (!aq) {
                    return false
                }
                var ao = this.getLocation().origin;
                if (ao === aq) {
                    return true
                }
                if (0 === String(aq).indexOf(ao)) {
                    if (":" === String(aq).substr(ao.length, 1)) {
                        return false
                    }
                    return true
                }
                return false
            },
            setHrefAttribute: function(ap, ao) {
                if (!ap || !ao) {
                    return
                }
                ae.setAnyAttribute(ap, "href", ao)
            },
            shouldIgnoreInteraction: function(aq) {
                var ap = ae.hasNodeAttribute(aq, this.CONTENT_IGNOREINTERACTION_ATTR);
                var ao = ae.hasNodeCssClass(aq, this.CONTENT_IGNOREINTERACTION_CLASS);
                return ap || ao
            }
        };

        function O(ap, at) {
            if (at) {
                return at
            }
            ap = v.toAbsoluteUrl(ap);
            if (z(ap, "?")) {
                var ar = ap.indexOf("?");
                ap = ap.slice(0, ar)
            }
            if (R(ap, "matomo.php")) {
                ap = g(ap, "matomo.php".length)
            } else {
                if (R(ap, "piwik.php")) {
                    ap = g(ap, "piwik.php".length)
                } else {
                    if (R(ap, ".php")) {
                        var ao = ap.lastIndexOf("/");
                        var aq = 1;
                        ap = ap.slice(0, ao + aq)
                    }
                }
            } if (R(ap, "/js/")) {
                ap = g(ap, "js/".length)
            }
            return ap
        }

        function N(av) {
            var ax = "Piwik_Overlay";
            var ap = new RegExp("index\\.php\\?module=Overlay&action=startOverlaySession&idSite=([0-9]+)&period=([^&]+)&date=([^&]+)(&segment=.*)?$");
            var aq = ap.exec(G.referrer);
            if (aq) {
                var at = aq[1];
                if (at !== String(av)) {
                    return false
                }
                var au = aq[2],
                    ao = aq[3],
                    ar = aq[4];
                if (!ar) {
                    ar = ""
                } else {
                    if (ar.indexOf("&segment=") === 0) {
                        ar = ar.substr("&segment=".length)
                    }
                }
                T.name = ax + "###" + au + "###" + ao + "###" + ar
            }
            var aw = T.name.split("###");
            return aw.length === 4 && aw[0] === ax
        }

        function Z(ap, aw, ar) {
            var av = T.name.split("###"),
                au = av[1],
                ao = av[2],
                at = av[3],
                aq = O(ap, aw);
            o(aq + "plugins/Overlay/client/client.js?v=1", function() {
                Piwik_Overlay_Client.initialize(aq, ar, au, ao, at)
            })
        }

        function u() {
            var aq;
            try {
                aq = T.frameElement
            } catch (ap) {
                return true
            }
            if (J(aq)) {
                return (aq && String(aq.nodeName).toLowerCase() === "iframe") ? true : false
            }
            try {
                return T.self !== T.top
            } catch (ao) {
                return true
            }
        }

        function Q(cd, b8) {
            var bH = this,
                bd = "mtm_consent",
                cK = "mtm_consent_removed",
                b3 = aa(G.domain, T.location.href, K()),
                cT = L(b3[0]),
                bM = p(b3[1]),
                bm = p(b3[2]),
                cR = false,
                ch = "GET",
                c9 = ch,
                aH = "application/x-www-form-urlencoded; charset=UTF-8",
                cw = aH,
                aD = cd || "",
                bG = "",
                cY = "",
                b5 = b8 || "",
                bx = "",
                bN = "",
                a4, bi = "",
                c5 = ["7z", "aac", "apk", "arc", "arj", "asf", "asx", "avi", "azw3", "bin", "csv", "deb", "dmg", "doc", "docx", "epub", "exe", "flv", "gif", "gz", "gzip", "hqx", "ibooks", "jar", "jpg", "jpeg", "js", "mobi", "mp2", "mp3", "mp4", "mpg", "mpeg", "mov", "movie", "msi", "msp", "odb", "odf", "odg", "ods", "odt", "ogg", "ogv", "pdf", "phps", "png", "ppt", "pptx", "qt", "qtm", "ra", "ram", "rar", "rpm", "sea", "sit", "tar", "tbz", "tbz2", "bz", "bz2", "tgz", "torrent", "txt", "wav", "wma", "wmv", "wpd", "xls", "xlsx", "xml", "z", "zip"],
                ax = [cT],
                by = [],
                bK = [],
                a8 = [],
                bI = 500,
                cV = false,
                cG, a5, bQ, c6 = 1800,
                bO, ao, cq = ["pk_campaign", "piwik_campaign", "utm_campaign", "utm_source", "utm_medium"],
                bF = ["pk_kwd", "piwik_kwd", "utm_term"],
                bj = "_pk_",
                av = "pk_vid",
                aZ = 180,
                cW, bo, bR = false,
                bk = false,
                cO, be, bu, cH = 33955200000,
                co = 1800000,
                c4 = 15768000000,
                a2 = true,
                cm = 0,
                bP = false,
                aQ = false,
                ca, bV = {},
                cl = {},
                bl = {},
                bs = 200,
                cZ = {},
                c7 = {},
                b9 = [],
                ce = false,
                cA = false,
                ap = false,
                c8 = false,
                cL = false,
                aN = false,
                bc = u(),
                cQ = null,
                cX = null,
                cb, aR, bz, b6 = am,
                bn, aK, cr = 0,
                bt = ["id", "ses", "cvar", "ref"],
                cz = false,
                bA = null,
                cI = [],
                aw = U++;
            try {
                bi = G.title
            } catch (cx) {
                bi = ""
            }

            function dd(dp, dm, dl, dn, dk, dj) {
                if (bk) {
                    return
                }
                var di;
                if (dl) {
                    di = new Date();
                    di.setTime(di.getTime() + dl)
                }
                G.cookie = dp + "=" + t(dm) + (dl ? ";expires=" + di.toGMTString() : "") + ";path=" + (dn || "/") + (dk ? ";domain=" + dk : "") + (dj ? ";secure" : "") + ";SameSite=Lax"
            }

            function aC(dk) {
                if (bk) {
                    return 0
                }
                var di = new RegExp("(^|;)[ ]*" + dk + "=([^;]*)"),
                    dj = di.exec(G.cookie);
                return dj ? S(dj[2]) : 0
            }
            bA = !aC(cK);

            function b1(di) {
                var dj;
                di = k(di, av);
                if (bO) {
                    dj = new RegExp("#.*");
                    return di.replace(dj, "")
                }
                return di
            }

            function bU(dk, di) {
                var dl = s(di),
                    dj;
                if (dl) {
                    return di
                }
                if (di.slice(0, 1) === "/") {
                    return s(dk) + "://" + d(dk) + di
                }
                dk = b1(dk);
                dj = dk.indexOf("?");
                if (dj >= 0) {
                    dk = dk.slice(0, dj)
                }
                dj = dk.lastIndexOf("/");
                if (dj !== dk.length - 1) {
                    dk = dk.slice(0, dj + 1)
                }
                return dk + di
            }

            function cE(dk, di) {
                var dj;
                dk = String(dk).toLowerCase();
                di = String(di).toLowerCase();
                if (dk === di) {
                    return true
                }
                if (di.slice(0, 1) === ".") {
                    if (dk === di.slice(1)) {
                        return true
                    }
                    dj = dk.length - di.length;
                    if ((dj > 0) && (dk.slice(dj) === di)) {
                        return true
                    }
                }
                return false
            }

            function ck(di) {
                var dj = document.createElement("a");
                if (di.indexOf("//") !== 0 && di.indexOf("http") !== 0) {
                    if (di.indexOf("*") === 0) {
                        di = di.substr(1)
                    }
                    if (di.indexOf(".") === 0) {
                        di = di.substr(1)
                    }
                    di = "http://" + di
                }
                dj.href = v.toAbsoluteUrl(di);
                if (dj.pathname) {
                    return dj.pathname
                }
                return ""
            }

            function a3(dj, di) {
                if (!aj(di, "/")) {
                    di = "/" + di
                }
                if (!aj(dj, "/")) {
                    dj = "/" + dj
                }
                var dk = (di === "/" || di === "/*");
                if (dk) {
                    return true
                }
                if (dj === di) {
                    return true
                }
                di = String(di).toLowerCase();
                dj = String(dj).toLowerCase();
                if (R(di, "*")) {
                    di = di.slice(0, -1);
                    dk = (!di || di === "/");
                    if (dk) {
                        return true
                    }
                    if (dj === di) {
                        return true
                    }
                    return dj.indexOf(di) === 0
                }
                if (!R(dj, "/")) {
                    dj += "/"
                }
                if (!R(di, "/")) {
                    di += "/"
                }
                return dj.indexOf(di) === 0
            }

            function ar(dm, dp) {
                var dj, di, dk, dl, dn;
                for (dj = 0; dj < ax.length; dj++) {
                    dl = L(ax[dj]);
                    dn = ck(ax[dj]);
                    if (cE(dm, dl) && a3(dp, dn)) {
                        return true
                    }
                }
                return false
            }

            function aV(dl) {
                var dj, di, dk;
                for (dj = 0; dj < ax.length; dj++) {
                    di = L(ax[dj].toLowerCase());
                    if (dl === di) {
                        return true
                    }
                    if (di.slice(0, 1) === ".") {
                        if (dl === di.slice(1)) {
                            return true
                        }
                        dk = dl.length - di.length;
                        if ((dk > 0) && (dl.slice(dk) === di)) {
                            return true
                        }
                    }
                }
                return false
            }

            function cp(di, dk) {
                di = di.replace("send_image=0", "send_image=1");
                var dj = new Image(1, 1);
                dj.onload = function() {
                    E = 0;
                    if (typeof dk === "function") {
                        dk({
                            request: di,
                            trackerUrl: aD,
                            success: true
                        })
                    }
                };
                dj.onerror = function() {
                    if (typeof dk === "function") {
                        dk({
                            request: di,
                            trackerUrl: aD,
                            success: false
                        })
                    }
                };
                dj.src = aD + (aD.indexOf("?") < 0 ? "?" : "&") + di
            }

            function aJ() {
                return "object" === typeof h && "function" === typeof h.sendBeacon && "function" === typeof Blob
            }

            function a6(dl, dq) {
                var dk = aJ();
                if (!dk) {
                    return false
                }
                var dp = {
                    type: "application/x-www-form-urlencoded; charset=UTF-8"
                };
                var dn = false;
                var dj = aD;
                try {
                    var di = new Blob([dl], dp);
                    if (dl.length <= 2000) {
                        di = new Blob([], dp);
                        dj = dj + (dj.indexOf("?") < 0 ? "?" : "&") + dl
                    }
                    dn = h.sendBeacon(dj, di)
                } catch (dm) {
                    return false
                }
                if (dn && typeof dq === "function") {
                    dq({
                        request: dl,
                        trackerUrl: aD,
                        success: true,
                        isSendBeacon: true
                    })
                }
                return dn
            }

            function c3(dj, dk, di) {
                if (!J(di) || null === di) {
                    di = true
                }
                if (m && a6(dj, dk)) {
                    return
                }
                setTimeout(function() {
                    if (m && a6(dj, dk)) {
                        return
                    }
                    var dn;
                    try {
                        var dm = T.XMLHttpRequest ? new T.XMLHttpRequest() : T.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : null;
                        dm.open("POST", aD, true);
                        dm.onreadystatechange = function() {
                            if (this.readyState === 4 && !(this.status >= 200 && this.status < 300)) {
                                var dp = m && a6(dj, dk);
                                if (!dp && di) {
                                    cp(dj, dk)
                                } else {
                                    if (typeof dk === "function") {
                                        dk({
                                            request: dj,
                                            trackerUrl: aD,
                                            success: false,
                                            xhr: this
                                        })
                                    }
                                }
                            } else {
                                if (this.readyState === 4 && (typeof dk === "function")) {
                                    dk({
                                        request: dj,
                                        trackerUrl: aD,
                                        success: true,
                                        xhr: this
                                    })
                                }
                            }
                        };
                        dm.setRequestHeader("Content-Type", cw);
                        dm.withCredentials = true;
                        dm.send(dj)
                    } catch (dl) {
                        dn = m && a6(dj, dk);
                        if (!dn && di) {
                            cp(dj, dk)
                        } else {
                            if (typeof dk === "function") {
                                dk({
                                    request: dj,
                                    trackerUrl: aD,
                                    success: false
                                })
                            }
                        }
                    }
                }, 50)
            }

            function cf(dj) {
                var di = new Date();
                var dk = di.getTime() + dj;
                if (!r || dk > r) {
                    r = dk
                }
            }

            function cn(di) {
                if (cb || !a5 || !bA) {
                    return
                }
                cb = setTimeout(function dj() {
                    cb = null;
                    if (!bc) {
                        bc = (!G.hasFocus || G.hasFocus())
                    }
                    if (!bc) {
                        cn(a5);
                        return
                    }
                    if (bQ()) {
                        return
                    }
                    var dk = new Date(),
                        dl = a5 - (dk.getTime() - cX);
                    dl = Math.min(a5, dl);
                    cn(dl)
                }, di || a5)
            }

            function bJ() {
                if (!cb) {
                    return
                }
                clearTimeout(cb);
                cb = null
            }

            function ba() {
                bc = true;
                cQ = new Date().getTime()
            }

            function dc() {
                var di = new Date().getTime();
                return !cQ || (di - cQ) > a5
            }

            function ay() {
                if (dc()) {
                    bQ()
                }
                bJ()
            }

            function df() {
                if (aN || !a5) {
                    return
                }
                aN = true;
                an(T, "focus", ba);
                an(T, "blur", ay);
                ab++;
                e.addPlugin("HeartBeat" + ab, {
                    unload: function() {
                        if (aN && dc()) {
                            bQ()
                        }
                    }
                })
            }

            function cB(dm) {
                var dj = new Date();
                var di = dj.getTime();
                cX = di;
                if (cA && di < cA) {
                    var dk = cA - di;
                    setTimeout(dm, dk);
                    cf(dk + 50);
                    cA += 50;
                    return
                }
                if (cA === false) {
                    var dl = 800;
                    cA = di + dl
                }
                dm()
            }

            function aO() {
                if (aC(cK)) {
                    bA = false
                } else {
                    if (aC(bd)) {
                        bA = true
                    }
                }
            }

            function bE(dj, di, dk) {
                aO();
                if (!bA) {
                    cI.push(dj);
                    return
                }
                if (!cO && dj) {
                    if (cz && bA) {
                        dj += "&consent=1"
                    }
                    cB(function() {
                        if (cV && a6(dj, dk)) {
                            cf(100);
                            return
                        }
                        if (c9 === "POST" || String(dj).length > 2000) {
                            c3(dj, dk)
                        } else {
                            cp(dj, dk)
                        }
                        cf(di)
                    })
                }
                if (!aN) {
                    df()
                }
            }

            function cj(di) {
                if (cO) {
                    return false
                }
                return (di && di.length)
            }

            function c2(di, dm) {
                if (!dm || dm >= di.length) {
                    return [di]
                }
                var dj = 0;
                var dk = di.length;
                var dl = [];
                for (dj; dj < dk; dj += dm) {
                    dl.push(di.slice(dj, dj + dm))
                }
                return dl
            }

            function de(dj, di) {
                if (!cj(dj)) {
                    return
                }
                if (!bA) {
                    cI.push(dj);
                    return
                }
                cB(function() {
                    var dm = c2(dj, 50);
                    var dk = 0,
                        dl;
                    for (dk; dk < dm.length; dk++) {
                        dl = '{"requests":["?' + dm[dk].join('","?') + '"]}';
                        c3(dl, null, false)
                    }
                    cf(di)
                })
            }

            function aT(di) {
                return bj + di + "." + b5 + "." + bn
            }

            function bX(dk, dj, di) {
                dd(dk, "", -86400, dj, di)
            }

            function b4() {
                if (bk) {
                    return "0"
                }
                if (!J(T.showModalDialog) && J(h.cookieEnabled)) {
                    return h.cookieEnabled ? "1" : "0"
                }
                var di = bj + "testcookie";
                dd(di, "1", undefined, bo, cW, bR);
                var dj = aC(di) === "1" ? "1" : "0";
                bX(di);
                return dj
            }

            function bh() {
                bn = b6((cW || cT) + (bo || "/")).slice(0, 4)
            }

            function cF() {
                if (J(c7.res)) {
                    return c7
                }
                var dj, dl, dm = {
                    pdf: "application/pdf",
                    qt: "video/quicktime",
                    realp: "audio/x-pn-realaudio-plugin",
                    wma: "application/x-mplayer2",
                    dir: "application/x-director",
                    fla: "application/x-shockwave-flash",
                    java: "application/x-java-vm",
                    gears: "application/x-googlegears",
                    ag: "application/x-silverlight"
                };
                if (!((new RegExp("MSIE")).test(h.userAgent))) {
                    if (h.mimeTypes && h.mimeTypes.length) {
                        for (dj in dm) {
                            if (Object.prototype.hasOwnProperty.call(dm, dj)) {
                                dl = h.mimeTypes[dm[dj]];
                                c7[dj] = (dl && dl.enabledPlugin) ? "1" : "0"
                            }
                        }
                    }
                    if (!((new RegExp("Edge[ /](\\d+[\\.\\d]+)")).test(h.userAgent)) && typeof navigator.javaEnabled !== "unknown" && J(h.javaEnabled) && h.javaEnabled()) {
                        c7.java = "1"
                    }
                    if (A(T.GearsFactory)) {
                        c7.gears = "1"
                    }
                    c7.cookie = b4()
                }
                var dk = parseInt(X.width, 10);
                var di = parseInt(X.height, 10);
                c7.res = parseInt(dk, 10) + "x" + parseInt(di, 10);
                return c7
            }

            function bW() {
                var dj = aT("cvar"),
                    di = aC(dj);
                if (di.length) {
                    di = JSON_PIWIK.parse(di);
                    if (W(di)) {
                        return di
                    }
                }
                return {}
            }

            function cC() {
                if (aQ === false) {
                    aQ = bW()
                }
            }

            function cP() {
                var di = cF();
                return b6((h.userAgent || "") + (h.platform || "") + JSON_PIWIK.stringify(di) + (new Date()).getTime() + Math.random()).slice(0, 16)
            }

            function az() {
                var di = cF();
                return b6((h.userAgent || "") + (h.platform || "") + JSON_PIWIK.stringify(di)).slice(0, 6)
            }

            function bf() {
                return Math.floor((new Date()).getTime() / 1000)
            }

            function aI() {
                var dj = bf();
                var dk = az();
                var di = String(dj) + dk;
                return di
            }

            function c1(dk) {
                dk = String(dk);
                var dn = az();
                var dl = dn.length;
                var dm = dk.substr(-1 * dl, dl);
                var dj = parseInt(dk.substr(0, dk.length - dl), 10);
                if (dj && dm && dm === dn) {
                    var di = bf();
                    if (aZ <= 0) {
                        return true
                    }
                    if (di >= dj && di <= (dj + aZ)) {
                        return true
                    }
                }
                return false
            }

            function dg(di) {
                if (!cL) {
                    return ""
                }
                var dm = f(di, av);
                if (!dm) {
                    return ""
                }
                dm = String(dm);
                var dk = new RegExp("^[a-zA-Z0-9]+$");
                if (dm.length === 32 && dk.test(dm)) {
                    var dj = dm.substr(16, 32);
                    if (c1(dj)) {
                        var dl = dm.substr(0, 16);
                        return dl
                    }
                }
                return ""
            }

            function cM() {
                if (!bN) {
                    bN = dg(bM)
                }
                var dk = new Date(),
                    di = Math.round(dk.getTime() / 1000),
                    dj = aT("id"),
                    dn = aC(dj),
                    dm, dl;
                if (dn) {
                    dm = dn.split(".");
                    dm.unshift("0");
                    if (bN.length) {
                        dm[1] = bN
                    }
                    return dm
                }
                if (bN.length) {
                    dl = bN
                } else {
                    if ("0" === b4()) {
                        dl = ""
                    } else {
                        dl = cP()
                    }
                }
                dm = ["1", dl, di, 0, di, "", ""];
                return dm
            }

            function aY() {
                var dq = cM(),
                    dl = dq[0],
                    dm = dq[1],
                    dj = dq[2],
                    di = dq[3],
                    dn = dq[4],
                    dk = dq[5];
                if (!J(dq[6])) {
                    dq[6] = ""
                }
                var dp = dq[6];
                return {
                    newVisitor: dl,
                    uuid: dm,
                    createTs: dj,
                    visitCount: di,
                    currentVisitTs: dn,
                    lastVisitTs: dk,
                    lastEcommerceOrderTs: dp
                }
            }

            function aG() {
                var dl = new Date(),
                    dj = dl.getTime(),
                    dm = aY().createTs;
                var di = parseInt(dm, 10);
                var dk = (di * 1000) + cH - dj;
                return dk
            }

            function aL(di) {
                if (!b5) {
                    return
                }
                var dk = new Date(),
                    dj = Math.round(dk.getTime() / 1000);
                if (!J(di)) {
                    di = aY()
                }
                var dl = di.uuid + "." + di.createTs + "." + di.visitCount + "." + dj + "." + di.lastVisitTs + "." + di.lastEcommerceOrderTs;
                dd(aT("id"), dl, aG(), bo, cW, bR)
            }

            function bL() {
                var di = aC(aT("ref"));
                if (di.length) {
                    try {
                        di = JSON_PIWIK.parse(di);
                        if (W(di)) {
                            return di
                        }
                    } catch (dj) {}
                }
                return ["", "", 0, ""]
            }

            function bv(dj) {
                var di = "testvalue";
                dd("test", di, 10000, null, dj);
                if (aC("test") === di) {
                    bX("test", null, dj);
                    return true
                }
                return false
            }

            function aE() {
                var dj = bk;
                bk = false;
                var di, dk;
                for (di = 0; di < bt.length; di++) {
                    dk = aT(bt[di]);
                    if (dk !== cK && dk !== bd && 0 !== aC(dk)) {
                        bX(dk, bo, cW)
                    }
                }
                bk = dj
            }

            function b2(di) {
                b5 = di;
                aL()
            }

            function dh(dm) {
                if (!dm || !W(dm)) {
                    return
                }
                var dl = [];
                var dk;
                for (dk in dm) {
                    if (Object.prototype.hasOwnProperty.call(dm, dk)) {
                        dl.push(dk)
                    }
                }
                var dn = {};
                dl.sort();
                var di = dl.length;
                var dj;
                for (dj = 0; dj < di; dj++) {
                    dn[dl[dj]] = dm[dl[dj]]
                }
                return dn
            }

            function cc() {
                dd(aT("ses"), "1", co, bo, cW, bR)
            }

            function bg() {
                var dl = "";
                var dj = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                var dk = dj.length;
                var di;
                for (di = 0; di < 6; di++) {
                    dl += dj.charAt(Math.floor(Math.random() * dk))
                }
                return dl
            }

            function cs(dk, dG, dH, dl) {
                var dF, dj = new Date(),
                    dt = Math.round(dj.getTime() / 1000),
                    dq, dE, dm = 1024,
                    dN, du, dC = aQ,
                    dn = aT("ses"),
                    dA = aT("ref"),
                    dx = aT("cvar"),
                    dy = aC(dn),
                    dD = bL(),
                    dJ = a4 || bM,
                    dr, di;
                if (bk) {
                    aE()
                }
                if (cO) {
                    return ""
                }
                var dz = aY();
                if (!J(dl)) {
                    dl = ""
                }
                var dw = G.characterSet || G.charset;
                if (!dw || dw.toLowerCase() === "utf-8") {
                    dw = null
                }
                dr = dD[0];
                di = dD[1];
                dq = dD[2];
                dE = dD[3];
                if (!dy) {
                    var dI = co / 1000;
                    if (!dz.lastVisitTs || (dt - dz.lastVisitTs) > dI) {
                        dz.visitCount++;
                        dz.lastVisitTs = dz.currentVisitTs
                    }
                    if (!bu || !dr.length) {
                        for (dF in cq) {
                            if (Object.prototype.hasOwnProperty.call(cq, dF)) {
                                dr = f(dJ, cq[dF]);
                                if (dr.length) {
                                    break
                                }
                            }
                        }
                        for (dF in bF) {
                            if (Object.prototype.hasOwnProperty.call(bF, dF)) {
                                di = f(dJ, bF[dF]);
                                if (di.length) {
                                    break
                                }
                            }
                        }
                    }
                    dN = d(bm);
                    du = dE.length ? d(dE) : "";
                    if (dN.length && !aV(dN) && (!bu || !du.length || aV(du))) {
                        dE = bm
                    }
                    if (dE.length || dr.length) {
                        dq = dt;
                        dD = [dr, di, dq, b1(dE.slice(0, dm))];
                        dd(dA, JSON_PIWIK.stringify(dD), c4, bo, cW)
                    }
                }
                dk += "&idsite=" + b5 + "&rec=1&r=" + String(Math.random()).slice(2, 8) + "&h=" + dj.getHours() + "&m=" + dj.getMinutes() + "&s=" + dj.getSeconds() + "&url=" + t(b1(dJ)) + (bm.length ? "&urlref=" + t(b1(bm)) : "") + ((bx && bx.length) ? "&uid=" + t(bx) : "") + "&_id=" + dz.uuid + "&_idts=" + dz.createTs + "&_idvc=" + dz.visitCount + "&_idn=" + dz.newVisitor + (dr.length ? "&_rcn=" + t(dr) : "") + (di.length ? "&_rck=" + t(di) : "") + "&_refts=" + dq + "&_viewts=" + dz.lastVisitTs + (String(dz.lastEcommerceOrderTs).length ? "&_ects=" + dz.lastEcommerceOrderTs : "") + (String(dE).length ? "&_ref=" + t(b1(dE.slice(0, dm))) : "") + (dw ? "&cs=" + t(dw) : "") + "&send_image=0";
                var dM = cF();
                for (dF in dM) {
                    if (Object.prototype.hasOwnProperty.call(dM, dF)) {
                        dk += "&" + dF + "=" + dM[dF]
                    }
                }
                var dL = [];
                if (dG) {
                    for (dF in dG) {
                        if (Object.prototype.hasOwnProperty.call(dG, dF) && /^dimension\d+$/.test(dF)) {
                            var dp = dF.replace("dimension", "");
                            dL.push(parseInt(dp, 10));
                            dL.push(String(dp));
                            dk += "&" + dF + "=" + t(dG[dF]);
                            delete dG[dF]
                        }
                    }
                }
                if (dG && B(dG)) {
                    dG = null
                }
                for (dF in bl) {
                    if (Object.prototype.hasOwnProperty.call(bl, dF)) {
                        var dv = (-1 === M(dL, dF));
                        if (dv) {
                            dk += "&dimension" + dF + "=" + t(bl[dF])
                        }
                    }
                }
                if (dG) {
                    dk += "&data=" + t(JSON_PIWIK.stringify(dG))
                } else {
                    if (ao) {
                        dk += "&data=" + t(JSON_PIWIK.stringify(ao))
                    }
                }

                function ds(dO, dP) {
                    var dQ = JSON_PIWIK.stringify(dO);
                    if (dQ.length > 2) {
                        return "&" + dP + "=" + t(dQ)
                    }
                    return ""
                }
                var dK = dh(bV);
                var dB = dh(cl);
                dk += ds(dK, "cvar");
                dk += ds(dB, "e_cvar");
                if (aQ) {
                    dk += ds(aQ, "_cvar");
                    for (dF in dC) {
                        if (Object.prototype.hasOwnProperty.call(dC, dF)) {
                            if (aQ[dF][0] === "" || aQ[dF][1] === "") {
                                delete aQ[dF]
                            }
                        }
                    }
                    if (bP) {
                        dd(dx, JSON_PIWIK.stringify(aQ), co, bo, cW)
                    }
                }
                if (a2) {
                    if (cm) {
                        dk += "&gt_ms=" + cm
                    } else {
                        if (i && i.timing && i.timing.requestStart && i.timing.responseEnd) {
                            dk += "&gt_ms=" + (i.timing.responseEnd - i.timing.requestStart)
                        }
                    }
                }
                if (aK) {
                    dk += "&pv_id=" + aK
                }
                dz.lastEcommerceOrderTs = J(dl) && String(dl).length ? dl : dz.lastEcommerceOrderTs;
                aL(dz);
                cc();
                dk += ac(dH, {
                    tracker: bH,
                    request: dk
                });
                if (cY.length) {
                    dk += "&" + cY
                }
                if (A(ca)) {
                    dk = ca(dk)
                }
                return dk
            }
            bQ = function a7() {
                var di = new Date();
                di = di.getTime();
                if (!cX) {
                    return false
                }
                if ((cX + (1000 * c6)) <= di) {
                    return false
                }
                if (cX + a5 <= di) {
                    bH.ping();
                    return true
                }
                return false
            };

            function bp(dl, dk, dr, dm, di, du) {
                var dp = "idgoal=0",
                    dq, dj = new Date(),
                    ds = [],
                    dt, dn = String(dl).length;
                if (dn) {
                    dp += "&ec_id=" + t(dl);
                    dq = Math.round(dj.getTime() / 1000)
                }
                dp += "&revenue=" + dk;
                if (String(dr).length) {
                    dp += "&ec_st=" + dr
                }
                if (String(dm).length) {
                    dp += "&ec_tx=" + dm
                }
                if (String(di).length) {
                    dp += "&ec_sh=" + di
                }
                if (String(du).length) {
                    dp += "&ec_dt=" + du
                }
                if (cZ) {
                    for (dt in cZ) {
                        if (Object.prototype.hasOwnProperty.call(cZ, dt)) {
                            if (!J(cZ[dt][1])) {
                                cZ[dt][1] = ""
                            }
                            if (!J(cZ[dt][2])) {
                                cZ[dt][2] = ""
                            }
                            if (!J(cZ[dt][3]) || String(cZ[dt][3]).length === 0) {
                                cZ[dt][3] = 0
                            }
                            if (!J(cZ[dt][4]) || String(cZ[dt][4]).length === 0) {
                                cZ[dt][4] = 1
                            }
                            ds.push(cZ[dt])
                        }
                    }
                    dp += "&ec_items=" + t(JSON_PIWIK.stringify(ds))
                }
                dp = cs(dp, ao, "ecommerce", dq);
                bE(dp, bI);
                if (dn) {
                    cZ = {}
                }
            }

            function bY(di, dm, dl, dk, dj, dn) {
                if (String(di).length && J(dm)) {
                    bp(di, dm, dl, dk, dj, dn)
                }
            }

            function br(di) {
                if (J(di)) {
                    bp("", di, "", "", "", "")
                }
            }

            function bZ(dj, dl, dk) {
                aK = bg();
                var di = cs("action_name=" + t(al(dj || bi)), dl, "log");
                bE(di, bI, dk)
            }

            function a0(dk, dj) {
                var dl, di = "(^| )(piwik[_-]" + dj;
                if (dk) {
                    for (dl = 0; dl < dk.length; dl++) {
                        di += "|" + dk[dl]
                    }
                }
                di += ")( |$)";
                return new RegExp(di)
            }

            function aU(di) {
                return (aD && di && 0 === String(di).indexOf(aD))
            }

            function cu(dm, di, dn, dj) {
                if (aU(di)) {
                    return 0
                }
                var dl = a0(bK, "download"),
                    dk = a0(a8, "link"),
                    dp = new RegExp("\\.(" + c5.join("|") + ")([?&#]|$)", "i");
                if (dk.test(dm)) {
                    return "link"
                }
                if (dj || dl.test(dm) || dp.test(di)) {
                    return "download"
                }
                if (dn) {
                    return 0
                }
                return "link"
            }

            function au(dj) {
                var di;
                di = dj.parentNode;
                while (di !== null && J(di)) {
                    if (ae.isLinkElement(dj)) {
                        break
                    }
                    dj = di;
                    di = dj.parentNode
                }
                return dj
            }

            function db(dn) {
                dn = au(dn);
                if (!ae.hasNodeAttribute(dn, "href")) {
                    return
                }
                if (!J(dn.href)) {
                    return
                }
                var dm = ae.getAttributeValueFromNode(dn, "href");
                if (aU(dm)) {
                    return
                }
                var dj = dn.pathname || ck(dn.href);
                var dp = dn.hostname || d(dn.href);
                var dq = dp.toLowerCase();
                var dk = dn.href.replace(dp, dq);
                var dl = new RegExp("^(javascript|vbscript|jscript|mocha|livescript|ecmascript|mailto|tel):", "i");
                if (!dl.test(dk)) {
                    var di = cu(dn.className, dk, ar(dq, dj), ae.hasNodeAttribute(dn, "download"));
                    if (di) {
                        return {
                            type: di,
                            href: dk
                        }
                    }
                }
            }

            function aP(di, dj, dk, dl) {
                var dm = v.buildInteractionRequestParams(di, dj, dk, dl);
                if (!dm) {
                    return
                }
                return cs(dm, null, "contentInteraction")
            }

            function cJ(dk, dl, dq, di, dj) {
                if (!J(dk)) {
                    return
                }
                if (aU(dk)) {
                    return dk
                }
                var dn = v.toAbsoluteUrl(dk);
                var dm = "redirecturl=" + t(dn) + "&";
                dm += aP(dl, dq, di, (dj || dk));
                var dp = "&";
                if (aD.indexOf("?") < 0) {
                    dp = "?"
                }
                return aD + dp + dm
            }

            function bb(di, dj) {
                if (!di || !dj) {
                    return false
                }
                var dk = v.findTargetNode(di);
                if (v.shouldIgnoreInteraction(dk)) {
                    return false
                }
                dk = v.findTargetNodeNoDefault(di);
                if (dk && !V(dk, dj)) {
                    return false
                }
                return true
            }

            function ct(dk, dj, dm) {
                if (!dk) {
                    return
                }
                var di = v.findParentContentNode(dk);
                if (!di) {
                    return
                }
                if (!bb(di, dk)) {
                    return
                }
                var dl = v.buildContentBlock(di);
                if (!dl) {
                    return
                }
                if (!dl.target && dm) {
                    dl.target = dm
                }
                return v.buildInteractionRequestParams(dj, dl.name, dl.piece, dl.target)
            }

            function aW(dj) {
                if (!b9 || !b9.length) {
                    return false
                }
                var di, dk;
                for (di = 0; di < b9.length; di++) {
                    dk = b9[di];
                    if (dk && dk.name === dj.name && dk.piece === dj.piece && dk.target === dj.target) {
                        return true
                    }
                }
                return false
            }

            function bD(dl) {
                if (!dl) {
                    return false
                }
                var dp = v.findTargetNode(dl);
                if (!dp || v.shouldIgnoreInteraction(dp)) {
                    return false
                }
                var dq = db(dp);
                if (c8 && dq && dq.type) {
                    return false
                }
                if (ae.isLinkElement(dp) && ae.hasNodeAttributeWithValue(dp, "href")) {
                    var di = String(ae.getAttributeValueFromNode(dp, "href"));
                    if (0 === di.indexOf("#")) {
                        return false
                    }
                    if (aU(di)) {
                        return true
                    }
                    if (!v.isUrlToCurrentDomain(di)) {
                        return false
                    }
                    var dm = v.buildContentBlock(dl);
                    if (!dm) {
                        return
                    }
                    var dk = dm.name;
                    var dr = dm.piece;
                    var dn = dm.target;
                    if (!ae.hasNodeAttributeWithValue(dp, v.CONTENT_TARGET_ATTR) || dp.wasContentTargetAttrReplaced) {
                        dp.wasContentTargetAttrReplaced = true;
                        dn = v.toAbsoluteUrl(di);
                        ae.setAnyAttribute(dp, v.CONTENT_TARGET_ATTR, dn)
                    }
                    var dj = cJ(di, "click", dk, dr, dn);
                    v.setHrefAttribute(dp, dj);
                    return true
                }
                return false
            }

            function aM(dj) {
                if (!dj || !dj.length) {
                    return
                }
                var di;
                for (di = 0; di < dj.length; di++) {
                    bD(dj[di])
                }
            }

            function aX(di) {
                return function(dj) {
                    if (!di) {
                        return
                    }
                    var dm = v.findParentContentNode(di);
                    var dn;
                    if (dj) {
                        dn = dj.target || dj.srcElement
                    }
                    if (!dn) {
                        dn = di
                    }
                    if (!bb(dm, dn)) {
                        return
                    }
                    cf(bI);
                    if (ae.isLinkElement(di) && ae.hasNodeAttributeWithValue(di, "href") && ae.hasNodeAttributeWithValue(di, v.CONTENT_TARGET_ATTR)) {
                        var dk = ae.getAttributeValueFromNode(di, "href");
                        if (!aU(dk) && di.wasContentTargetAttrReplaced) {
                            ae.setAnyAttribute(di, v.CONTENT_TARGET_ATTR, "")
                        }
                    }
                    var ds = db(di);
                    if (ap && ds && ds.type) {
                        return ds.type
                    }
                    if (bD(dm)) {
                        return "href"
                    }
                    var dp = v.buildContentBlock(dm);
                    if (!dp) {
                        return
                    }
                    var dl = dp.name;
                    var dt = dp.piece;
                    var dr = dp.target;
                    var dq = aP("click", dl, dt, dr);
                    if (dq) {
                        bE(dq, bI)
                    }
                    return dq
                }
            }

            function b0(dk) {
                if (!dk || !dk.length) {
                    return
                }
                var di, dj;
                for (di = 0; di < dk.length; di++) {
                    dj = v.findTargetNode(dk[di]);
                    if (dj && !dj.contentInteractionTrackingSetupDone) {
                        dj.contentInteractionTrackingSetupDone = true;
                        an(dj, "click", aX(dj))
                    }
                }
            }

            function bw(dk, dl) {
                if (!dk || !dk.length) {
                    return []
                }
                var di, dj;
                for (di = 0; di < dk.length; di++) {
                    if (aW(dk[di])) {
                        dk.splice(di, 1);
                        di--
                    } else {
                        b9.push(dk[di])
                    }
                }
                if (!dk || !dk.length) {
                    return []
                }
                aM(dl);
                b0(dl);
                var dm = [];
                for (di = 0; di < dk.length; di++) {
                    dj = cs(v.buildImpressionRequestParams(dk[di].name, dk[di].piece, dk[di].target), undefined, "contentImpressions");
                    if (dj) {
                        dm.push(dj)
                    }
                }
                return dm
            }

            function cy(dj) {
                var di = v.collectContent(dj);
                return bw(di, dj)
            }

            function a9(dj) {
                if (!dj || !dj.length) {
                    return []
                }
                var di;
                for (di = 0; di < dj.length; di++) {
                    if (!v.isNodeVisible(dj[di])) {
                        dj.splice(di, 1);
                        di--
                    }
                }
                if (!dj || !dj.length) {
                    return []
                }
                return cy(dj)
            }

            function aF(dk, di, dj) {
                var dl = v.buildImpressionRequestParams(dk, di, dj);
                return cs(dl, null, "contentImpression")
            }

            function da(dl, dj) {
                if (!dl) {
                    return
                }
                var di = v.findParentContentNode(dl);
                var dk = v.buildContentBlock(di);
                if (!dk) {
                    return
                }
                if (!dj) {
                    dj = "Unknown"
                }
                return aP(dj, dk.name, dk.piece, dk.target)
            }

            function cN(dj, dl, di, dk) {
                return "e_c=" + t(dj) + "&e_a=" + t(dl) + (J(di) ? "&e_n=" + t(di) : "") + (J(dk) ? "&e_v=" + t(dk) : "")
            }

            function at(dk, dm, di, dl, dp, dn) {
                if (a(String(dk)).length === 0 || a(String(dm)).length === 0) {
                    ak("Error while logging event: Parameters `category` and `action` must not be empty or filled with whitespaces");
                    return false
                }
                var dj = cs(cN(dk, dm, di, dl), dp, "event");
                bE(dj, bI, dn)
            }

            function b7(di, dl, dj, dm) {
                var dk = cs("search=" + t(di) + (dl ? "&search_cat=" + t(dl) : "") + (J(dj) ? "&search_count=" + dj : ""), dm, "sitesearch");
                bE(dk, bI)
            }

            function cS(di, dm, dl, dk) {
                var dj = cs("idgoal=" + di + (dm ? "&revenue=" + dm : ""), dl, "goal");
                bE(dj, bI, dk)
            }

            function c0(dl, di, dq, dp, dk) {
                var dn = di + "=" + t(b1(dl));
                var dj = ct(dk, "click", dl);
                if (dj) {
                    dn += "&" + dj
                }
                var dm = cs(dn, dq, "link");
                bE(dm, bI, dp)
            }

            function bT(dj, di) {
                if (dj !== "") {
                    return dj + di.charAt(0).toUpperCase() + di.slice(1)
                }
                return di
            }

            function cg(dn) {
                var dm, di, dl = ["", "webkit", "ms", "moz"],
                    dk;
                if (!be) {
                    for (di = 0; di < dl.length; di++) {
                        dk = dl[di];
                        if (Object.prototype.hasOwnProperty.call(G, bT(dk, "hidden"))) {
                            if (G[bT(dk, "visibilityState")] === "prerender") {
                                dm = true
                            }
                            break
                        }
                    }
                }
                if (dm) {
                    an(G, dk + "visibilitychange", function dj() {
                        G.removeEventListener(dk + "visibilitychange", dj, false);
                        dn()
                    });
                    return
                }
                dn()
            }

            function bq() {
                var dj = aY().uuid;
                var di = aI();
                return dj + di
            }

            function ci(di) {
                if (!di) {
                    return
                }
                if (!ae.hasNodeAttribute(di, "href")) {
                    return
                }
                var dj = ae.getAttributeValueFromNode(di, "href");
                if (!dj || aU(dj)) {
                    return
                }
                dj = k(dj, av);
                var dk = bq();
                dj = F(dj, av, dk);
                ae.setAnyAttribute(di, "href", dj)
            }

            function aA(dl) {
                var dm = ae.getAttributeValueFromNode(dl, "href");
                if (!dm) {
                    return false
                }
                dm = String(dm);
                var dj = dm.indexOf("//") === 0 || dm.indexOf("http://") === 0 || dm.indexOf("https://") === 0;
                if (!dj) {
                    return false
                }
                var di = dl.pathname || ck(dl.href);
                var dk = (dl.hostname || d(dl.href)).toLowerCase();
                if (ar(dk, di)) {
                    if (!cE(cT, L(dk))) {
                        return true
                    }
                    return false
                }
                return false
            }

            function cD(di) {
                var dj = db(di);
                if (dj && dj.type) {
                    dj.href = p(dj.href);
                    c0(dj.href, dj.type, undefined, null, di);
                    return
                }
                if (cL) {
                    di = au(di);
                    if (aA(di)) {
                        ci(di)
                    }
                }
            }

            function cv() {
                return G.all && !G.addEventListener
            }

            function cU(di) {
                var dk = di.which;
                var dj = (typeof di.button);
                if (!dk && dj !== "undefined") {
                    if (cv()) {
                        if (di.button & 1) {
                            dk = 1
                        } else {
                            if (di.button & 2) {
                                dk = 3
                            } else {
                                if (di.button & 4) {
                                    dk = 2
                                }
                            }
                        }
                    } else {
                        if (di.button === 0 || di.button === "0") {
                            dk = 1
                        } else {
                            if (di.button & 1) {
                                dk = 2
                            } else {
                                if (di.button & 2) {
                                    dk = 3
                                }
                            }
                        }
                    }
                }
                return dk
            }

            function bS(di) {
                switch (cU(di)) {
                    case 1:
                        return "left";
                    case 2:
                        return "middle";
                    case 3:
                        return "right"
                }
            }

            function a1(di) {
                return di.target || di.srcElement
            }

            function aB(di) {
                return function(dl) {
                    dl = dl || T.event;
                    var dk = bS(dl);
                    var dm = a1(dl);
                    if (dl.type === "click") {
                        var dj = false;
                        if (di && dk === "middle") {
                            dj = true
                        }
                        if (dm && !dj) {
                            cD(dm)
                        }
                    } else {
                        if (dl.type === "mousedown") {
                            if (dk === "middle" && dm) {
                                aR = dk;
                                bz = dm
                            } else {
                                aR = bz = null
                            }
                        } else {
                            if (dl.type === "mouseup") {
                                if (dk === aR && dm === bz) {
                                    cD(dm)
                                }
                                aR = bz = null
                            } else {
                                if (dl.type === "contextmenu") {
                                    cD(dm)
                                }
                            }
                        }
                    }
                }
            }

            function aq(dk, dj) {
                var di = typeof dj;
                if (di === "undefined") {
                    dj = true
                }
                an(dk, "click", aB(dj), false);
                if (dj) {
                    an(dk, "mouseup", aB(dj), false);
                    an(dk, "mousedown", aB(dj), false);
                    an(dk, "contextmenu", aB(dj), false)
                }
            }

            function bC(dk, dm) {
                ap = true;
                var dl, dj = a0(by, "ignore"),
                    dn = G.links,
                    di = null,
                    dp = null;
                if (dn) {
                    for (dl = 0; dl < dn.length; dl++) {
                        di = dn[dl];
                        if (!dj.test(di.className)) {
                            dp = typeof di.piwikTrackers;
                            if ("undefined" === dp) {
                                di.piwikTrackers = []
                            }
                            if (-1 === M(di.piwikTrackers, dm)) {
                                di.piwikTrackers.push(dm);
                                aq(di, dk)
                            }
                        }
                    }
                }
            }

            function aS(dj, dm, dn) {
                if (ce) {
                    return true
                }
                ce = true;
                var dp = false;
                var dl, dk;

                function di() {
                    dp = true
                }
                n(function() {
                    function dq(ds) {
                        setTimeout(function() {
                            if (!ce) {
                                return
                            }
                            dp = false;
                            dn.trackVisibleContentImpressions();
                            dq(ds)
                        }, ds)
                    }

                    function dr(ds) {
                        setTimeout(function() {
                            if (!ce) {
                                return
                            }
                            if (dp) {
                                dp = false;
                                dn.trackVisibleContentImpressions()
                            }
                            dr(ds)
                        }, ds)
                    }
                    if (dj) {
                        dl = ["scroll", "resize"];
                        for (dk = 0; dk < dl.length; dk++) {
                            if (G.addEventListener) {
                                G.addEventListener(dl[dk], di, false)
                            } else {
                                T.attachEvent("on" + dl[dk], di)
                            }
                        }
                        dr(100)
                    }
                    if (dm && dm > 0) {
                        dm = parseInt(dm, 10);
                        dq(dm)
                    }
                })
            }
            var bB = {
                enabled: true,
                requests: [],
                timeout: null,
                interval: 2500,
                sendRequests: function() {
                    var di = this.requests;
                    this.requests = [];
                    if (di.length === 1) {
                        bE(di[0], bI)
                    } else {
                        de(di, bI)
                    }
                },
                push: function(di) {
                    if (!di) {
                        return
                    }
                    if (m || !this.enabled) {
                        bE(di, bI);
                        return
                    }
                    bB.requests.push(di);
                    if (this.timeout) {
                        clearTimeout(this.timeout);
                        this.timeout = null
                    }
                    this.timeout = setTimeout(function() {
                        bB.timeout = null;
                        bB.sendRequests()
                    }, bB.interval);
                    var dj = "RequestQueue" + aw;
                    if (!Object.prototype.hasOwnProperty.call(b, dj)) {
                        b[dj] = {
                            unload: function() {
                                if (bB.timeout) {
                                    clearTimeout(bB.timeout)
                                }
                                bB.sendRequests()
                            }
                        }
                    }
                }
            };
            bh();
            aL();
            this.hasConsent = function() {
                return bA
            };
            this.getVisitorId = function() {
                return aY().uuid
            };
            this.getVisitorInfo = function() {
                return cM()
            };
            this.getAttributionInfo = function() {
                return bL()
            };
            this.getAttributionCampaignName = function() {
                return bL()[0]
            };
            this.getAttributionCampaignKeyword = function() {
                return bL()[1]
            };
            this.getAttributionReferrerTimestamp = function() {
                return bL()[2]
            };
            this.getAttributionReferrerUrl = function() {
                return bL()[3]
            };
            this.setTrackerUrl = function(di) {
                aD = di
            };
            this.getTrackerUrl = function() {
                return aD
            };
            this.getPiwikUrl = function() {
                return O(this.getTrackerUrl(), bG)
            };
            this.addTracker = function(di, dk) {
                if (!J(di) || null === di) {
                    di = this.getTrackerUrl()
                }
                var dj = new Q(di, dk);
                I.push(dj);
                e.trigger("TrackerAdded", [this]);
                return dj
            };
            this.getSiteId = function() {
                return b5
            };
            this.setSiteId = function(di) {
                b2(di)
            };
            this.resetUserId = function() {
                bx = ""
            };
            this.setUserId = function(di) {
                if (Y(di)) {
                    bx = di
                }
            };
            this.getUserId = function() {
                return bx
            };
            this.setCustomData = function(di, dj) {
                if (W(di)) {
                    ao = di
                } else {
                    if (!ao) {
                        ao = {}
                    }
                    ao[di] = dj
                }
            };
            this.getCustomData = function() {
                return ao
            };
            this.setCustomRequestProcessing = function(di) {
                ca = di
            };
            this.appendToTrackingUrl = function(di) {
                cY = di
            };
            this.getRequest = function(di) {
                return cs(di)
            };
            this.addPlugin = function(di, dj) {
                b[di] = dj
            };
            this.setCustomDimension = function(di, dj) {
                di = parseInt(di, 10);
                if (di > 0) {
                    if (!J(dj)) {
                        dj = ""
                    }
                    if (!w(dj)) {
                        dj = String(dj)
                    }
                    bl[di] = dj
                }
            };
            this.getCustomDimension = function(di) {
                di = parseInt(di, 10);
                if (di > 0 && Object.prototype.hasOwnProperty.call(bl, di)) {
                    return bl[di]
                }
            };
            this.deleteCustomDimension = function(di) {
                di = parseInt(di, 10);
                if (di > 0) {
                    delete bl[di]
                }
            };
            this.setCustomVariable = function(dj, di, dm, dk) {
                var dl;
                if (!J(dk)) {
                    dk = "visit"
                }
                if (!J(di)) {
                    return
                }
                if (!J(dm)) {
                    dm = ""
                }
                if (dj > 0) {
                    di = !w(di) ? String(di) : di;
                    dm = !w(dm) ? String(dm) : dm;
                    dl = [di.slice(0, bs), dm.slice(0, bs)];
                    if (dk === "visit" || dk === 2) {
                        cC();
                        aQ[dj] = dl
                    } else {
                        if (dk === "page" || dk === 3) {
                            bV[dj] = dl
                        } else {
                            if (dk === "event") {
                                cl[dj] = dl
                            }
                        }
                    }
                }
            };
            this.getCustomVariable = function(dj, dk) {
                var di;
                if (!J(dk)) {
                    dk = "visit"
                }
                if (dk === "page" || dk === 3) {
                    di = bV[dj]
                } else {
                    if (dk === "event") {
                        di = cl[dj]
                    } else {
                        if (dk === "visit" || dk === 2) {
                            cC();
                            di = aQ[dj]
                        }
                    }
                } if (!J(di) || (di && di[0] === "")) {
                    return false
                }
                return di
            };
            this.deleteCustomVariable = function(di, dj) {
                if (this.getCustomVariable(di, dj)) {
                    this.setCustomVariable(di, "", "", dj)
                }
            };
            this.deleteCustomVariables = function(di) {
                if (di === "page" || di === 3) {
                    bV = {}
                } else {
                    if (di === "event") {
                        cl = {}
                    } else {
                        if (di === "visit" || di === 2) {
                            aQ = {}
                        }
                    }
                }
            };
            this.storeCustomVariablesInCookie = function() {
                bP = true
            };
            this.setLinkTrackingTimer = function(di) {
                bI = di
            };
            this.getLinkTrackingTimer = function() {
                return bI
            };
            this.setDownloadExtensions = function(di) {
                if (w(di)) {
                    di = di.split("|")
                }
                c5 = di
            };
            this.addDownloadExtensions = function(dj) {
                var di;
                if (w(dj)) {
                    dj = dj.split("|")
                }
                for (di = 0; di < dj.length; di++) {
                    c5.push(dj[di])
                }
            };
            this.removeDownloadExtensions = function(dk) {
                var dj, di = [];
                if (w(dk)) {
                    dk = dk.split("|")
                }
                for (dj = 0; dj < c5.length; dj++) {
                    if (M(dk, c5[dj]) === -1) {
                        di.push(c5[dj])
                    }
                }
                c5 = di
            };
            this.setDomains = function(di) {
                ax = w(di) ? [di] : di;
                var dm = false,
                    dk = 0,
                    dj;
                for (dk; dk < ax.length; dk++) {
                    dj = String(ax[dk]);
                    if (cE(cT, L(dj))) {
                        dm = true;
                        break
                    }
                    var dl = ck(dj);
                    if (dl && dl !== "/" && dl !== "/*") {
                        dm = true;
                        break
                    }
                }
                if (!dm) {
                    ax.push(cT)
                }
            };
            this.enableCrossDomainLinking = function() {
                cL = true
            };
            this.disableCrossDomainLinking = function() {
                cL = false
            };
            this.isCrossDomainLinkingEnabled = function() {
                return cL
            };
            this.setCrossDomainLinkingTimeout = function(di) {
                aZ = di
            };
            this.getCrossDomainLinkingUrlParameter = function() {
                return t(av) + "=" + t(bq())
            };
            this.setIgnoreClasses = function(di) {
                by = w(di) ? [di] : di
            };
            this.setRequestMethod = function(di) {
                c9 = di || ch
            };
            this.setRequestContentType = function(di) {
                cw = di || aH
            };
            this.setReferrerUrl = function(di) {
                bm = di
            };
            this.setCustomUrl = function(di) {
                a4 = bU(bM, di)
            };
            this.getCurrentUrl = function() {
                return a4 || bM
            };
            this.setDocumentTitle = function(di) {
                bi = di
            };
            this.setAPIUrl = function(di) {
                bG = di
            };
            this.setDownloadClasses = function(di) {
                bK = w(di) ? [di] : di
            };
            this.setLinkClasses = function(di) {
                a8 = w(di) ? [di] : di
            };
            this.setCampaignNameKey = function(di) {
                cq = w(di) ? [di] : di
            };
            this.setCampaignKeywordKey = function(di) {
                bF = w(di) ? [di] : di
            };
            this.discardHashTag = function(di) {
                bO = di
            };
            this.setCookieNamePrefix = function(di) {
                bj = di;
                aQ = bW()
            };
            this.setCookieDomain = function(di) {
                var dj = L(di);
                if (bv(dj)) {
                    cW = dj;
                    bh()
                }
            };
            this.getCookieDomain = function() {
                return cW
            };
            this.hasCookies = function() {
                return "1" === b4()
            };
            this.setSessionCookie = function(dk, dj, di) {
                if (!dk) {
                    throw new Error("Missing cookie name")
                }
                if (!J(di)) {
                    di = co
                }
                bt.push(dk);
                dd(aT(dk), dj, di, bo, cW)
            };
            this.getCookie = function(dj) {
                var di = aC(aT(dj));
                if (di === 0) {
                    return null
                }
                return di
            };
            this.setCookiePath = function(di) {
                bo = di;
                bh()
            };
            this.getCookiePath = function(di) {
                return bo
            };
            this.setVisitorCookieTimeout = function(di) {
                cH = di * 1000
            };
            this.setSessionCookieTimeout = function(di) {
                co = di * 1000
            };
            this.getSessionCookieTimeout = function() {
                return co
            };
            this.setReferralCookieTimeout = function(di) {
                c4 = di * 1000
            };
            this.setConversionAttributionFirstReferrer = function(di) {
                bu = di
            };
            this.setSecureCookie = function(di) {
                bR = di
            };
            this.disableCookies = function() {
                bk = true;
                c7.cookie = "0";
                if (b5) {
                    aE()
                }
            };
            this.deleteCookies = function() {
                aE()
            };
            this.setDoNotTrack = function(dj) {
                var di = h.doNotTrack || h.msDoNotTrack;
                cO = dj && (di === "yes" || di === "1");
                if (cO) {
                    this.disableCookies()
                }
            };
            this.alwaysUseSendBeacon = function() {
                cV = true
            };
            this.addListener = function(dj, di) {
                aq(dj, di)
            };
            this.enableLinkTracking = function(dj) {
                c8 = true;
                var di = this;
                cg(function() {
                    q(function() {
                        bC(dj, di)
                    })
                })
            };
            this.enableJSErrorTracking = function() {
                if (cR) {
                    return
                }
                cR = true;
                var di = T.onerror;
                T.onerror = function(dn, dl, dk, dm, dj) {
                    cg(function() {
                        var dp = "JavaScript Errors";
                        var dq = dl + ":" + dk;
                        if (dm) {
                            dq += ":" + dm
                        }
                        at(dp, dq, dn)
                    });
                    if (di) {
                        return di(dn, dl, dk, dm, dj)
                    }
                    return false
                }
            };
            this.disablePerformanceTracking = function() {
                a2 = false
            };
            this.setGenerationTimeMs = function(di) {
                cm = parseInt(di, 10)
            };
            this.setVisitStandardLength = function(di) {
                di = Math.max(di, 5);
                c6 = di
            };
            this.enableHeartBeatTimer = function(di) {
                di = Math.max(di, 5);
                a5 = (di || 15) * 1000;
                if (cX !== null) {
                    df()
                }
            };
            this.disableHeartBeatTimer = function() {
                bJ();
                if (a5 || aN) {
                    if (T.removeEventListener) {
                        T.removeEventListener("focus", ba);
                        T.removeEventListener("blur", ay)
                    } else {
                        if (T.detachEvent) {
                            T.detachEvent("onfocus", ba);
                            T.detachEvent("onblur", ay)
                        }
                    }
                }
                a5 = null;
                aN = false
            };
            this.killFrame = function() {
                if (T.location !== T.top.location) {
                    T.top.location = T.location
                }
            };
            this.redirectFile = function(di) {
                if (T.location.protocol === "file:") {
                    T.location = di
                }
            };
            this.setCountPreRendered = function(di) {
                be = di
            };
            this.trackGoal = function(di, dl, dk, dj) {
                cg(function() {
                    cS(di, dl, dk, dj)
                })
            };
            this.trackLink = function(dj, di, dl, dk) {
                cg(function() {
                    c0(dj, di, dl, dk)
                })
            };
            this.getNumTrackedPageViews = function() {
                return cr
            };
            this.trackPageView = function(di, dk, dj) {
                b9 = [];
                cI = [];
                if (N(b5)) {
                    cg(function() {
                        Z(aD, bG, b5)
                    })
                } else {
                    cg(function() {
                        cr++;
                        bZ(di, dk, dj)
                    })
                }
            };
            this.trackAllContentImpressions = function() {
                if (N(b5)) {
                    return
                }
                cg(function() {
                    q(function() {
                        var di = v.findContentNodes();
                        var dj = cy(di);
                        de(dj, bI)
                    })
                })
            };
            this.trackVisibleContentImpressions = function(di, dj) {
                if (N(b5)) {
                    return
                }
                if (!J(di)) {
                    di = true
                }
                if (!J(dj)) {
                    dj = 750
                }
                aS(di, dj, this);
                cg(function() {
                    n(function() {
                        var dk = v.findContentNodes();
                        var dl = a9(dk);
                        de(dl, bI)
                    })
                })
            };
            this.trackContentImpression = function(dk, di, dj) {
                if (N(b5)) {
                    return
                }
                dk = a(dk);
                di = a(di);
                dj = a(dj);
                if (!dk) {
                    return
                }
                di = di || "Unknown";
                cg(function() {
                    var dl = aF(dk, di, dj);
                    bE(dl, bI)
                })
            };
            this.trackContentImpressionsWithinNode = function(di) {
                if (N(b5) || !di) {
                    return
                }
                cg(function() {
                    if (ce) {
                        n(function() {
                            var dj = v.findContentNodesWithinNode(di);
                            var dk = a9(dj);
                            de(dk, bI)
                        })
                    } else {
                        q(function() {
                            var dj = v.findContentNodesWithinNode(di);
                            var dk = cy(dj);
                            de(dk, bI)
                        })
                    }
                })
            };
            this.trackContentInteraction = function(dk, dl, di, dj) {
                if (N(b5)) {
                    return
                }
                dk = a(dk);
                dl = a(dl);
                di = a(di);
                dj = a(dj);
                if (!dk || !dl) {
                    return
                }
                di = di || "Unknown";
                cg(function() {
                    var dm = aP(dk, dl, di, dj);
                    if (dm) {
                        bE(dm, bI)
                    }
                })
            };
            this.trackContentInteractionNode = function(dj, di) {
                if (N(b5) || !dj) {
                    return
                }
                cg(function() {
                    var dk = da(dj, di);
                    if (dk) {
                        bE(dk, bI)
                    }
                })
            };
            this.logAllContentBlocksOnPage = function() {
                var dk = v.findContentNodes();
                var di = v.collectContent(dk);
                var dj = typeof console;
                if (dj !== "undefined" && console && console.log) {
                    console.log(di)
                }
            };
            this.trackEvent = function(dj, dl, di, dk, dn, dm) {
                cg(function() {
                    at(dj, dl, di, dk, dn, dm)
                })
            };
            this.trackSiteSearch = function(di, dk, dj, dl) {
                b9 = [];
                cg(function() {
                    b7(di, dk, dj, dl)
                })
            };
            this.setEcommerceView = function(dl, di, dk, dj) {
                if (Y(dk)) {
                    dk = String(dk)
                }
                if (!J(dk) || dk === null || dk === false || !dk.length) {
                    dk = ""
                } else {
                    if (dk instanceof Array) {
                        dk = JSON_PIWIK.stringify(dk)
                    }
                }
                bV[5] = ["_pkc", dk];
                if (J(dj) && dj !== null && dj !== false && String(dj).length) {
                    bV[2] = ["_pkp", dj]
                }
                if (!Y(dl) && !Y(di)) {
                    return
                }
                if (Y(dl)) {
                    bV[3] = ["_pks", dl]
                }
                if (!Y(di)) {
                    di = ""
                }
                bV[4] = ["_pkn", di]
            };
            this.getEcommerceItems = function() {
                return JSON.parse(JSON.stringify(cZ))
            };
            this.addEcommerceItem = function(dm, di, dk, dj, dl) {
                if (Y(dm)) {
                    cZ[dm] = [String(dm), di, dk, dj, dl]
                }
            };
            this.removeEcommerceItem = function(di) {
                if (Y(di)) {
                    di = String(di);
                    delete cZ[di]
                }
            };
            this.clearEcommerceCart = function() {
                cZ = {}
            };
            this.trackEcommerceOrder = function(di, dm, dl, dk, dj, dn) {
                bY(di, dm, dl, dk, dj, dn)
            };
            this.trackEcommerceCartUpdate = function(di) {
                br(di)
            };
            this.trackRequest = function(dj, dl, dk, di) {
                cg(function() {
                    var dm = cs(dj, dl, di);
                    bE(dm, bI, dk)
                })
            };
            this.ping = function() {
                this.trackRequest("ping=1", null, null, "ping")
            };
            this.disableQueueRequest = function() {
                bB.enabled = false
            };
            this.setRequestQueueInterval = function(di) {
                if (di < 1000) {
                    throw new Error("Request queue interval needs to be at least 1000ms")
                }
                bB.interval = di
            };
            this.queueRequest = function(di) {
                cg(function() {
                    var dj = cs(di);
                    bB.push(dj)
                })
            };
            this.isConsentRequired = function() {
                return cz
            };
            this.getRememberedConsent = function() {
                var di = aC(bd);
                if (aC(cK)) {
                    if (di) {
                        bX(bd, bo, cW)
                    }
                    return null
                }
                if (!di || di === 0) {
                    return null
                }
                return di
            };
            this.hasRememberedConsent = function() {
                return !!this.getRememberedConsent()
            };
            this.requireConsent = function() {
                cz = true;
                bA = this.hasRememberedConsent();
                x++;
                b["CoreConsent" + x] = {
                    unload: function() {
                        if (!bA) {
                            aE()
                        }
                    }
                }
            };
            this.setConsentGiven = function() {
                bA = true;
                bX(cK, bo, cW);
                var dj, di;
                for (dj = 0; dj < cI.length; dj++) {
                    di = typeof cI[dj];
                    if (di === "string") {
                        bE(cI[dj], bI)
                    } else {
                        if (di === "object") {
                            de(cI[dj], bI)
                        }
                    }
                }
                cI = []
            };
            this.rememberConsentGiven = function(dj) {
                if (dj) {
                    dj = dj * 60 * 60 * 1000
                } else {
                    dj = 30 * 365 * 24 * 60 * 60 * 1000
                }
                this.setConsentGiven();
                var di = new Date().getTime();
                dd(bd, di, dj, bo, cW, bR)
            };
            this.forgetConsentGiven = function() {
                var di = 30 * 365 * 24 * 60 * 60 * 1000;
                bX(bd, bo, cW);
                dd(cK, new Date().getTime(), di, bo, cW, bR);
                this.requireConsent()
            };
            this.isUserOptedOut = function() {
                return !bA
            };
            this.optUserOut = this.forgetConsentGiven;
            this.forgetUserOptOut = this.rememberConsentGiven;
            e.trigger("TrackerSetup", [this])
        }

        function H() {
            return {
                push: af
            }
        }

        function c(au, at) {
            var av = {};
            var aq, ar;
            for (aq = 0; aq < at.length; aq++) {
                var ao = at[aq];
                av[ao] = 1;
                for (ar = 0; ar < au.length; ar++) {
                    if (au[ar] && au[ar][0]) {
                        var ap = au[ar][0];
                        if (ao === ap) {
                            af(au[ar]);
                            delete au[ar];
                            if (av[ap] > 1 && ap !== "addTracker") {
                                ak("The method " + ap + ' is registered more than once in "_paq" variable. Only the last call has an effect. Please have a look at the multiple Piwik trackers documentation: https://developer.piwik.org/guides/tracking-javascript-guide#multiple-piwik-trackers')
                            }
                            av[ap]++
                        }
                    }
                }
            }
            return au
        }
        var C = ["addTracker", "disableCookies", "setTrackerUrl", "setAPIUrl", "enableCrossDomainLinking", "setCrossDomainLinkingTimeout", "setSessionCookieTimeout", "setVisitorCookieTimeout", "setSecureCookie", "setCookiePath", "setCookieDomain", "setDomains", "setUserId", "setSiteId", "alwaysUseSendBeacon", "enableLinkTracking", "requireConsent", "setConsentGiven"];

        function ad(ao, aq) {
            var ap = new Q(ao, aq);
            I.push(ap);
            _paq = c(_paq, C);
            for (E = 0; E < _paq.length; E++) {
                if (_paq[E]) {
                    af(_paq[E])
                }
            }
            _paq = new H();
            e.trigger("TrackerAdded", [ap]);
            return ap
        }
        an(T, "beforeunload", ai, false);
        an(T, "message", function(au) {
            if (!au || !au.origin) {
                return
            }
            var aw, ar, ap;
            var ax = d(au.origin);
            var at = e.getAsyncTrackers();
            for (ar = 0; ar < at.length; ar++) {
                ap = d(at[ar].getPiwikUrl());
                if (ap === ax) {
                    aw = at[ar];
                    break
                }
            }
            if (!aw) {
                return
            }
            var aq = null;
            try {
                aq = JSON.parse(au.data)
            } catch (av) {
                return
            }
            if (!aq) {
                return
            }

            function ao(aA) {
                var aC = G.getElementsByTagName("iframe");
                for (ar = 0; ar < aC.length; ar++) {
                    var aB = aC[ar];
                    var ay = d(aB.src);
                    if (aB.contentWindow && J(aB.contentWindow.postMessage) && ay === ax) {
                        var az = JSON.stringify(aA);
                        aB.contentWindow.postMessage(az, "*")
                    }
                }
            }
            if (J(aq.maq_initial_value)) {
                ao({
                    maq_opted_in: aq.maq_initial_value && aw.hasConsent(),
                    maq_url: aw.getPiwikUrl(),
                    maq_optout_by_default: aw.isConsentRequired()
                })
            } else {
                if (J(aq.maq_opted_in)) {
                    at = e.getAsyncTrackers();
                    for (ar = 0; ar < at.length; ar++) {
                        aw = at[ar];
                        if (aq.maq_opted_in) {
                            aw.rememberConsentGiven()
                        } else {
                            aw.forgetConsentGiven()
                        }
                    }
                    ao({
                        maq_confirm_opted_in: aw.hasConsent(),
                        maq_url: aw.getPiwikUrl(),
                        maq_optout_by_default: aw.isConsentRequired()
                    })
                }
            }
        }, false);
        Date.prototype.getTimeAlias = Date.prototype.getTime;
        e = {
            initialized: false,
            JSON: JSON_PIWIK,
            DOM: {
                addEventListener: function(ar, aq, ap, ao) {
                    var at = typeof ao;
                    if (at === "undefined") {
                        ao = false
                    }
                    an(ar, aq, ap, ao)
                },
                onLoad: n,
                onReady: q,
                isNodeVisible: j,
                isOrWasNodeVisible: v.isNodeVisible
            },
            on: function(ap, ao) {
                if (!y[ap]) {
                    y[ap] = []
                }
                y[ap].push(ao)
            },
            off: function(aq, ap) {
                if (!y[aq]) {
                    return
                }
                var ao = 0;
                for (ao; ao < y[aq].length; ao++) {
                    if (y[aq][ao] === ap) {
                        y[aq].splice(ao, 1)
                    }
                }
            },
            trigger: function(aq, ar, ap) {
                if (!y[aq]) {
                    return
                }
                var ao = 0;
                for (ao; ao < y[aq].length; ao++) {
                    y[aq][ao].apply(ap || T, ar)
                }
            },
            addPlugin: function(ao, ap) {
                b[ao] = ap
            },
            getTracker: function(ao, ap) {
                if (!J(ap)) {
                    ap = this.getAsyncTracker().getSiteId()
                }
                if (!J(ao)) {
                    ao = this.getAsyncTracker().getTrackerUrl()
                }
                return new Q(ao, ap)
            },
            getAsyncTrackers: function() {
                return I
            },
            addTracker: function(ao, aq) {
                var ap;
                if (!I.length) {
                    ap = ad(ao, aq)
                } else {
                    ap = I[0].addTracker(ao, aq)
                }
                return ap
            },
            getAsyncTracker: function(ap, at) {
                var ar;
                if (I && I.length && I[0]) {
                    ar = I[0]
                } else {
                    return ad(ap, at)
                } if (!at && !ap) {
                    return ar
                }
                if ((!J(at) || null === at) && ar) {
                    at = ar.getSiteId()
                }
                if ((!J(ap) || null === ap) && ar) {
                    ap = ar.getTrackerUrl()
                }
                var aq, ao = 0;
                for (ao; ao < I.length; ao++) {
                    aq = I[ao];
                    if (aq && String(aq.getSiteId()) === String(at) && aq.getTrackerUrl() === ap) {
                        return aq
                    }
                }
            },
            retryMissedPluginCalls: function() {
                var ap = ah;
                ah = [];
                var ao = 0;
                for (ao; ao < ap.length; ao++) {
                    af(ap[ao])
                }
            }
        };
        if (typeof define === "function" && define.amd) {
            define("piwik", [], function() {
                return e
            });
            define("matomo", [], function() {
                return e
            })
        }
        return e
    }())
}
/*!!! pluginTrackerHook */
(function() {
    function b() {
        if ("object" !== typeof _paq) {
            return false
        }
        var c = typeof _paq.length;
        if ("undefined" === c) {
            return false
        }
        return !!_paq.length
    }
    if (window && "object" === typeof window.piwikPluginAsyncInit && window.piwikPluginAsyncInit.length) {
        var a = 0;
        for (a; a < window.piwikPluginAsyncInit.length; a++) {
            if (typeof window.piwikPluginAsyncInit[a] === "function") {
                window.piwikPluginAsyncInit[a]()
            }
        }
    }
    if (window && window.piwikAsyncInit) {
        window.piwikAsyncInit()
    }
    if (!window.Piwik.getAsyncTrackers().length) {
        if (b()) {
            window.Piwik.addTracker()
        } else {
            _paq = {
                push: function(c) {
                    var d = typeof console;
                    if (d !== "undefined" && console && console.error) {
                        console.error("_paq.push() was used but Matomo tracker was not initialized before the matomo.js file was loaded. Make sure to configure the tracker via _paq.push before loading matomo.js. Alternatively, you can create a tracker via Matomo.addTracker() manually and then use _paq.push but it may not fully work as tracker methods may not be executed in the correct order.", c)
                    }
                }
            }
        }
    }
    window.Piwik.trigger("PiwikInitialized", []);
    window.Piwik.initialized = true
}());
(function() {
    var a = (typeof AnalyticsTracker);
    if (a === "undefined") {
        AnalyticsTracker = window.Piwik
    }
}());
if (typeof piwik_log !== "function") {
    piwik_log = function(b, f, d, g) {
        function a(h) {
            try {
                if (window["piwik_" + h]) {
                    return window["piwik_" + h]
                }
            } catch (i) {}
            return
        }
        var c, e = window.Piwik.getTracker(d, f);
        e.setDocumentTitle(b);
        e.setCustomData(g);
        c = a("tracker_pause");
        if (c) {
            e.setLinkTrackingTimer(c)
        }
        c = a("download_extensions");
        if (c) {
            e.setDownloadExtensions(c)
        }
        c = a("hosts_alias");
        if (c) {
            e.setDomains(c)
        }
        c = a("ignore_classes");
        if (c) {
            e.setIgnoreClasses(c)
        }
        e.trackPageView();
        if (a("install_tracker")) {
            piwik_track = function(i, k, j, h) {
                e.setSiteId(k);
                e.setTrackerUrl(j);
                e.trackLink(i, h)
            };
            e.enableLinkTracking()
        }
    }
}
/*!! @license-end */
;