! function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    "use strict";
    var n = [],
        r = Object.getPrototypeOf,
        i = n.slice,
        o = n.flat ? function (e) {
            return n.flat.call(e)
        } : function (e) {
            return n.concat.apply([], e)
        },
        a = n.push,
        s = n.indexOf,
        u = {},
        l = u.toString,
        c = u.hasOwnProperty,
        f = c.toString,
        d = f.call(Object),
        p = {},
        h = function (e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        },
        g = function (e) {
            return null != e && e === e.window
        },
        v = e.document,
        m = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };

    function y(e, t, n) {
        var r, i, o = (n = n || v).createElement("script");
        if (o.text = e, t)
            for (r in m)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }

    function b(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? u[l.call(e)] || "object" : typeof e
    }
    var x = "3.5.1 -ajax,-ajax/jsonp,-ajax/load,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-deprecated/ajax-event-alias,-effects,-effects/Tween,-effects/animatedSelector",
        w = function (e, t) {
            return new w.fn.init(e, t)
        };

    function C(e) {
        var t = !!e && "length" in e && e.length,
            n = b(e);
        return !h(e) && !g(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    w.fn = w.prototype = {
        jquery: x,
        constructor: w,
        length: 0,
        toArray: function () {
            return i.call(this)
        },
        get: function (e) {
            return null == e ? i.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function (e) {
            var t = w.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function (e) {
            return w.each(this, e)
        },
        map: function (e) {
            return this.pushStack(w.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function () {
            return this.pushStack(i.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        even: function () {
            return this.pushStack(w.grep(this, function (e, t) {
                return (t + 1) % 2
            }))
        },
        odd: function () {
            return this.pushStack(w.grep(this, function (e, t) {
                return t % 2
            }))
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: a,
        sort: n.sort,
        splice: n.splice
    }, w.extend = w.fn.extend = function () {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || h(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (w.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || w.isPlainObject(n) ? n : {}, i = !1, a[t] = w.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, w.extend({
        expando: "jQuery" + (x + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
            throw new Error(e)
        },
        noop: function () {},
        isPlainObject: function (e) {
            var t, n;
            return !(!e || "[object Object]" !== l.call(e)) && (!(t = r(e)) || "function" == typeof (n = c.call(t, "constructor") && t.constructor) && f.call(n) === d)
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function (e, t, n) {
            y(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function (e, t) {
            var n, r = 0;
            if (C(e))
                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break;
            return e
        },
        makeArray: function (e, t) {
            var n = t || [];
            return null != e && (C(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : a.call(n, e)), n
        },
        inArray: function (e, t, n) {
            return null == t ? -1 : s.call(t, e, n)
        },
        merge: function (e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function (e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function (e, t, n) {
            var r, i, a = 0,
                s = [];
            if (C(e))
                for (r = e.length; a < r; a++) null != (i = t(e[a], a, n)) && s.push(i);
            else
                for (a in e) null != (i = t(e[a], a, n)) && s.push(i);
            return o(s)
        },
        guid: 1,
        support: p
    }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        u["[object " + t + "]"] = t.toLowerCase()
    });
    var T = function (e) {
        var t, n, r, i, o, a, s, u, l, c, f, d, p, h, g, v, m, y, b, x = "sizzle" + 1 * new Date,
            w = e.document,
            C = 0,
            T = 0,
            E = ue(),
            A = ue(),
            N = ue(),
            S = ue(),
            k = function (e, t) {
                return e === t && (f = !0), 0
            },
            D = {}.hasOwnProperty,
            L = [],
            j = L.pop,
            q = L.push,
            O = L.push,
            P = L.slice,
            H = function (e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            I = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            R = "[\\x20\\t\\r\\n\\f]",
            B = "(?:\\\\[\\da-fA-F]{1,6}" + R + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            M = "\\[" + R + "*(" + B + ")(?:" + R + "*([*^$|!~]?=)" + R + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + B + "))|)" + R + "*\\]",
            W = ":(" + B + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
            F = new RegExp(R + "+", "g"),
            $ = new RegExp("^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$", "g"),
            z = new RegExp("^" + R + "*," + R + "*"),
            _ = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"),
            U = new RegExp(R + "|>"),
            V = new RegExp(W),
            X = new RegExp("^" + B + "$"),
            Q = {
                ID: new RegExp("^#(" + B + ")"),
                CLASS: new RegExp("^\\.(" + B + ")"),
                TAG: new RegExp("^(" + B + "|[*])"),
                ATTR: new RegExp("^" + M),
                PSEUDO: new RegExp("^" + W),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + R + "*(even|odd|(([+-]|)(\\d*)n|)" + R + "*(?:([+-]|)" + R + "*(\\d+)|))" + R + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + I + ")$", "i"),
                needsContext: new RegExp("^" + R + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + R + "*((?:-\\d)?\\d*)" + R + "*\\)|)(?=[^-]|$)", "i")
            },
            Y = /HTML$/i,
            G = /^(?:input|select|textarea|button)$/i,
            K = /^h\d$/i,
            J = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\[\\da-fA-F]{1,6}" + R + "?|\\\\([^\\r\\n\\f])", "g"),
            ne = function (e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
            },
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function (e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            oe = function () {
                d()
            },
            ae = xe(function (e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            O.apply(L = P.call(w.childNodes), w.childNodes), L[w.childNodes.length].nodeType
        } catch (e) {
            O = {
                apply: L.length ? function (e, t) {
                    q.apply(e, P.call(t))
                } : function (e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }

        function se(e, t, r, i) {
            var o, s, l, c, f, h, m, y = t && t.ownerDocument,
                w = t ? t.nodeType : 9;
            if (r = r || [], "string" != typeof e || !e || 1 !== w && 9 !== w && 11 !== w) return r;
            if (!i && (d(t), t = t || p, g)) {
                if (11 !== w && (f = Z.exec(e)))
                    if (o = f[1]) {
                        if (9 === w) {
                            if (!(l = t.getElementById(o))) return r;
                            if (l.id === o) return r.push(l), r
                        } else if (y && (l = y.getElementById(o)) && b(t, l) && l.id === o) return r.push(l), r
                    } else {
                        if (f[2]) return O.apply(r, t.getElementsByTagName(e)), r;
                        if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return O.apply(r, t.getElementsByClassName(o)), r
                    } if (n.qsa && !S[e + " "] && (!v || !v.test(e)) && (1 !== w || "object" !== t.nodeName.toLowerCase())) {
                    if (m = e, y = t, 1 === w && (U.test(e) || _.test(e))) {
                        for ((y = ee.test(e) && me(t.parentNode) || t) === t && n.scope || ((c = t.getAttribute("id")) ? c = c.replace(re, ie) : t.setAttribute("id", c = x)), s = (h = a(e)).length; s--;) h[s] = (c ? "#" + c : ":scope") + " " + be(h[s]);
                        m = h.join(",")
                    }
                    try {
                        return O.apply(r, y.querySelectorAll(m)), r
                    } catch (t) {
                        S(e, !0)
                    } finally {
                        c === x && t.removeAttribute("id")
                    }
                }
            }
            return u(e.replace($, "$1"), t, r, i)
        }

        function ue() {
            var e = [];
            return function t(n, i) {
                return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
            }
        }

        function le(e) {
            return e[x] = !0, e
        }

        function ce(e) {
            var t = p.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function fe(e, t) {
            for (var n = e.split("|"), i = n.length; i--;) r.attrHandle[n[i]] = t
        }

        function de(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function pe(e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function he(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function ge(e) {
            return function (t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ae(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function ve(e) {
            return le(function (t) {
                return t = +t, le(function (n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function me(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (t in n = se.support = {}, o = se.isXML = function (e) {
                var t = e.namespaceURI,
                    n = (e.ownerDocument || e).documentElement;
                return !Y.test(t || n && n.nodeName || "HTML")
            }, d = se.setDocument = function (e) {
                var t, i, a = e ? e.ownerDocument || e : w;
                return a != p && 9 === a.nodeType && a.documentElement ? (h = (p = a).documentElement, g = !o(p), w != p && (i = p.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", oe, !1) : i.attachEvent && i.attachEvent("onunload", oe)), n.scope = ce(function (e) {
                    return h.appendChild(e).appendChild(p.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                }), n.attributes = ce(function (e) {
                    return e.className = "i", !e.getAttribute("className")
                }), n.getElementsByTagName = ce(function (e) {
                    return e.appendChild(p.createComment("")), !e.getElementsByTagName("*").length
                }), n.getElementsByClassName = J.test(p.getElementsByClassName), n.getById = ce(function (e) {
                    return h.appendChild(e).id = x, !p.getElementsByName || !p.getElementsByName(x).length
                }), n.getById ? (r.filter.ID = function (e) {
                    var t = e.replace(te, ne);
                    return function (e) {
                        return e.getAttribute("id") === t
                    }
                }, r.find.ID = function (e, t) {
                    if (void 0 !== t.getElementById && g) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (r.filter.ID = function (e) {
                    var t = e.replace(te, ne);
                    return function (e) {
                        var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }, r.find.ID = function (e, t) {
                    if (void 0 !== t.getElementById && g) {
                        var n, r, i, o = t.getElementById(e);
                        if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                            for (i = t.getElementsByName(e), r = 0; o = i[r++];)
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                        }
                        return []
                    }
                }), r.find.TAG = n.getElementsByTagName ? function (e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                } : function (e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return o
                }, r.find.CLASS = n.getElementsByClassName && function (e, t) {
                    if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e)
                }, m = [], v = [], (n.qsa = J.test(p.querySelectorAll)) && (ce(function (e) {
                    var t;
                    h.appendChild(e).innerHTML = "<a id='" + x + "'></a><select id='" + x + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + R + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + R + "*(?:value|" + I + ")"), e.querySelectorAll("[id~=" + x + "-]").length || v.push("~="), (t = p.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || v.push("\\[" + R + "*name" + R + "*=" + R + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + x + "+*").length || v.push(".#.+[+~]"), e.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]")
                }), ce(function (e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = p.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + R + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
                })), (n.matchesSelector = J.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ce(function (e) {
                    n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), m.push("!=", W)
                }), v = v.length && new RegExp(v.join("|")), m = m.length && new RegExp(m.join("|")), t = J.test(h.compareDocumentPosition), b = t || J.test(h.contains) ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function (e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, k = t ? function (e, t) {
                    if (e === t) return f = !0, 0;
                    var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return r || (1 & (r = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e == p || e.ownerDocument == w && b(w, e) ? -1 : t == p || t.ownerDocument == w && b(w, t) ? 1 : c ? H(c, e) - H(c, t) : 0 : 4 & r ? -1 : 1)
                } : function (e, t) {
                    if (e === t) return f = !0, 0;
                    var n, r = 0,
                        i = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        s = [t];
                    if (!i || !o) return e == p ? -1 : t == p ? 1 : i ? -1 : o ? 1 : c ? H(c, e) - H(c, t) : 0;
                    if (i === o) return de(e, t);
                    for (n = e; n = n.parentNode;) a.unshift(n);
                    for (n = t; n = n.parentNode;) s.unshift(n);
                    for (; a[r] === s[r];) r++;
                    return r ? de(a[r], s[r]) : a[r] == w ? -1 : s[r] == w ? 1 : 0
                }, p) : p
            }, se.matches = function (e, t) {
                return se(e, null, null, t)
            }, se.matchesSelector = function (e, t) {
                if (d(e), n.matchesSelector && g && !S[t + " "] && (!m || !m.test(t)) && (!v || !v.test(t))) try {
                    var r = y.call(e, t);
                    if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                } catch (e) {
                    S(t, !0)
                }
                return se(t, p, null, [e]).length > 0
            }, se.contains = function (e, t) {
                return (e.ownerDocument || e) != p && d(e), b(e, t)
            }, se.attr = function (e, t) {
                (e.ownerDocument || e) != p && d(e);
                var i = r.attrHandle[t.toLowerCase()],
                    o = i && D.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
                return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
            }, se.escape = function (e) {
                return (e + "").replace(re, ie)
            }, se.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, se.uniqueSort = function (e) {
                var t, r = [],
                    i = 0,
                    o = 0;
                if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(k), f) {
                    for (; t = e[o++];) t === e[o] && (i = r.push(o));
                    for (; i--;) e.splice(r[i], 1)
                }
                return c = null, e
            }, i = se.getText = function (e) {
                var t, n = "",
                    r = 0,
                    o = e.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
                    } else if (3 === o || 4 === o) return e.nodeValue
                } else
                    for (; t = e[r++];) n += i(t);
                return n
            }, (r = se.selectors = {
                cacheLength: 50,
                createPseudo: le,
                match: Q,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function (e) {
                        return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function (e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
                    },
                    PSEUDO: function (e) {
                        var t, n = !e[6] && e[2];
                        return Q.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && V.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (e) {
                        var t = e.replace(te, ne).toLowerCase();
                        return "*" === e ? function () {
                            return !0
                        } : function (e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function (e) {
                        var t = E[e + " "];
                        return t || (t = new RegExp("(^|" + R + ")" + e + "(" + R + "|$)")) && E(e, function (e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function (e, t, n) {
                        return function (r) {
                            var i = se.attr(r, e);
                            return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(F, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                        }
                    },
                    CHILD: function (e, t, n, r, i) {
                        var o = "nth" !== e.slice(0, 3),
                            a = "last" !== e.slice(-4),
                            s = "of-type" === t;
                        return 1 === r && 0 === i ? function (e) {
                            return !!e.parentNode
                        } : function (t, n, u) {
                            var l, c, f, d, p, h, g = o !== a ? "nextSibling" : "previousSibling",
                                v = t.parentNode,
                                m = s && t.nodeName.toLowerCase(),
                                y = !u && !s,
                                b = !1;
                            if (v) {
                                if (o) {
                                    for (; g;) {
                                        for (d = t; d = d[g];)
                                            if (s ? d.nodeName.toLowerCase() === m : 1 === d.nodeType) return !1;
                                        h = g = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [a ? v.firstChild : v.lastChild], a && y) {
                                    for (b = (p = (l = (c = (f = (d = v)[x] || (d[x] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === C && l[1]) && l[2], d = p && v.childNodes[p]; d = ++p && d && d[g] || (b = p = 0) || h.pop();)
                                        if (1 === d.nodeType && ++b && d === t) {
                                            c[e] = [C, p, b];
                                            break
                                        }
                                } else if (y && (b = p = (l = (c = (f = (d = t)[x] || (d[x] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === C && l[1]), !1 === b)
                                    for (;
                                        (d = ++p && d && d[g] || (b = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== m : 1 !== d.nodeType) || !++b || (y && ((c = (f = d[x] || (d[x] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] = [C, b]), d !== t)););
                                return (b -= i) === r || b % r == 0 && b / r >= 0
                            }
                        }
                    },
                    PSEUDO: function (e, t) {
                        var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                        return i[x] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function (e, n) {
                            for (var r, o = i(e, t), a = o.length; a--;) e[r = H(e, o[a])] = !(n[r] = o[a])
                        }) : function (e) {
                            return i(e, 0, n)
                        }) : i
                    }
                },
                pseudos: {
                    not: le(function (e) {
                        var t = [],
                            n = [],
                            r = s(e.replace($, "$1"));
                        return r[x] ? le(function (e, t, n, i) {
                            for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                        }) : function (e, i, o) {
                            return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                        }
                    }),
                    has: le(function (e) {
                        return function (t) {
                            return se(e, t).length > 0
                        }
                    }),
                    contains: le(function (e) {
                        return e = e.replace(te, ne),
                            function (t) {
                                return (t.textContent || i(t)).indexOf(e) > -1
                            }
                    }),
                    lang: le(function (e) {
                        return X.test(e || "") || se.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(),
                            function (t) {
                                var n;
                                do {
                                    if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function (t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function (e) {
                        return e === h
                    },
                    focus: function (e) {
                        return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: ge(!1),
                    disabled: ge(!0),
                    checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function (e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function (e) {
                        return !r.pseudos.empty(e)
                    },
                    header: function (e) {
                        return K.test(e.nodeName)
                    },
                    input: function (e) {
                        return G.test(e.nodeName)
                    },
                    button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function (e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: ve(function () {
                        return [0]
                    }),
                    last: ve(function (e, t) {
                        return [t - 1]
                    }),
                    eq: ve(function (e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: ve(function (e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: ve(function (e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: ve(function (e, t, n) {
                        for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0;) e.push(r);
                        return e
                    }),
                    gt: ve(function (e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                        return e
                    })
                }
            }).pseudos.nth = r.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) r.pseudos[t] = pe(t);
        for (t in {
                submit: !0,
                reset: !0
            }) r.pseudos[t] = he(t);

        function ye() {}

        function be(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function xe(e, t, n) {
            var r = t.dir,
                i = t.next,
                o = i || r,
                a = n && "parentNode" === o,
                s = T++;
            return t.first ? function (t, n, i) {
                for (; t = t[r];)
                    if (1 === t.nodeType || a) return e(t, n, i);
                return !1
            } : function (t, n, u) {
                var l, c, f, d = [C, s];
                if (u) {
                    for (; t = t[r];)
                        if ((1 === t.nodeType || a) && e(t, n, u)) return !0
                } else
                    for (; t = t[r];)
                        if (1 === t.nodeType || a)
                            if (c = (f = t[x] || (t[x] = {}))[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
                            else {
                                if ((l = c[o]) && l[0] === C && l[1] === s) return d[2] = l[2];
                                if (c[o] = d, d[2] = e(t, n, u)) return !0
                            } return !1
            }
        }

        function we(e) {
            return e.length > 1 ? function (t, n, r) {
                for (var i = e.length; i--;)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function Ce(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
            return a
        }

        function Te(e, t, n, r, i, o) {
            return r && !r[x] && (r = Te(r)), i && !i[x] && (i = Te(i, o)), le(function (o, a, s, u) {
                var l, c, f, d = [],
                    p = [],
                    h = a.length,
                    g = o || function (e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                        return n
                    }(t || "*", s.nodeType ? [s] : s, []),
                    v = !e || !o && t ? g : Ce(g, d, e, s, u),
                    m = n ? i || (o ? e : h || r) ? [] : a : v;
                if (n && n(v, m, s, u), r)
                    for (l = Ce(m, p), r(l, [], s, u), c = l.length; c--;)(f = l[c]) && (m[p[c]] = !(v[p[c]] = f));
                if (o) {
                    if (i || e) {
                        if (i) {
                            for (l = [], c = m.length; c--;)(f = m[c]) && l.push(v[c] = f);
                            i(null, m = [], l, u)
                        }
                        for (c = m.length; c--;)(f = m[c]) && (l = i ? H(o, f) : d[c]) > -1 && (o[l] = !(a[l] = f))
                    }
                } else m = Ce(m === a ? m.splice(h, m.length) : m), i ? i(null, a, m, u) : O.apply(a, m)
            })
        }

        function Ee(e) {
            for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = xe(function (e) {
                    return e === t
                }, s, !0), f = xe(function (e) {
                    return H(t, e) > -1
                }, s, !0), d = [function (e, n, r) {
                    var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                    return t = null, i
                }]; u < o; u++)
                if (n = r.relative[e[u].type]) d = [xe(we(d), n)];
                else {
                    if ((n = r.filter[e[u].type].apply(null, e[u].matches))[x]) {
                        for (i = ++u; i < o && !r.relative[e[i].type]; i++);
                        return Te(u > 1 && we(d), u > 1 && be(e.slice(0, u - 1).concat({
                            value: " " === e[u - 2].type ? "*" : ""
                        })).replace($, "$1"), n, u < i && Ee(e.slice(u, i)), i < o && Ee(e = e.slice(i)), i < o && be(e))
                    }
                    d.push(n)
                } return we(d)
        }
        return ye.prototype = r.filters = r.pseudos, r.setFilters = new ye, a = se.tokenize = function (e, t) {
            var n, i, o, a, s, u, l, c = A[e + " "];
            if (c) return t ? 0 : c.slice(0);
            for (s = e, u = [], l = r.preFilter; s;) {
                for (a in n && !(i = z.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), n = !1, (i = _.exec(s)) && (n = i.shift(), o.push({
                        value: n,
                        type: i[0].replace($, " ")
                    }), s = s.slice(n.length)), r.filter) !(i = Q[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), o.push({
                    value: n,
                    type: a,
                    matches: i
                }), s = s.slice(n.length));
                if (!n) break
            }
            return t ? s.length : s ? se.error(e) : A(e, u).slice(0)
        }, s = se.compile = function (e, t) {
            var n, i = [],
                o = [],
                s = N[e + " "];
            if (!s) {
                for (t || (t = a(e)), n = t.length; n--;)(s = Ee(t[n]))[x] ? i.push(s) : o.push(s);
                (s = N(e, function (e, t) {
                    var n = t.length > 0,
                        i = e.length > 0,
                        o = function (o, a, s, u, c) {
                            var f, h, v, m = 0,
                                y = "0",
                                b = o && [],
                                x = [],
                                w = l,
                                T = o || i && r.find.TAG("*", c),
                                E = C += null == w ? 1 : Math.random() || .1,
                                A = T.length;
                            for (c && (l = a == p || a || c); y !== A && null != (f = T[y]); y++) {
                                if (i && f) {
                                    for (h = 0, a || f.ownerDocument == p || (d(f), s = !g); v = e[h++];)
                                        if (v(f, a || p, s)) {
                                            u.push(f);
                                            break
                                        } c && (C = E)
                                }
                                n && ((f = !v && f) && m--, o && b.push(f))
                            }
                            if (m += y, n && y !== m) {
                                for (h = 0; v = t[h++];) v(b, x, a, s);
                                if (o) {
                                    if (m > 0)
                                        for (; y--;) b[y] || x[y] || (x[y] = j.call(u));
                                    x = Ce(x)
                                }
                                O.apply(u, x), c && !o && x.length > 0 && m + t.length > 1 && se.uniqueSort(u)
                            }
                            return c && (C = E, l = w), b
                        };
                    return n ? le(o) : o
                }(o, i))).selector = e
            }
            return s
        }, u = se.select = function (e, t, n, i) {
            var o, u, l, c, f, d = "function" == typeof e && e,
                p = !i && a(e = d.selector || e);
            if (n = n || [], 1 === p.length) {
                if ((u = p[0] = p[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
                    if (!(t = (r.find.ID(l.matches[0].replace(te, ne), t) || [])[0])) return n;
                    d && (t = t.parentNode), e = e.slice(u.shift().value.length)
                }
                for (o = Q.needsContext.test(e) ? 0 : u.length; o-- && (l = u[o], !r.relative[c = l.type]);)
                    if ((f = r.find[c]) && (i = f(l.matches[0].replace(te, ne), ee.test(u[0].type) && me(t.parentNode) || t))) {
                        if (u.splice(o, 1), !(e = i.length && be(u))) return O.apply(n, i), n;
                        break
                    }
            }
            return (d || s(e, p))(i, t, !g, n, !t || ee.test(e) && me(t.parentNode) || t), n
        }, n.sortStable = x.split("").sort(k).join("") === x, n.detectDuplicates = !!f, d(), n.sortDetached = ce(function (e) {
            return 1 & e.compareDocumentPosition(p.createElement("fieldset"))
        }), ce(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || fe("type|href|height|width", function (e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), n.attributes && ce(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || fe("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), ce(function (e) {
            return null == e.getAttribute("disabled")
        }) || fe(I, function (e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), se
    }(e);
    w.find = T, w.expr = T.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = T.uniqueSort, w.text = T.getText, w.isXMLDoc = T.isXML, w.contains = T.contains, w.escapeSelector = T.escape;
    var E = function (e, t, n) {
            for (var r = [], i = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (i && w(e).is(n)) break;
                    r.push(e)
                } return r
        },
        A = function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        N = w.expr.match.needsContext;

    function S(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var k = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function D(e, t, n) {
        return h(t) ? w.grep(e, function (e, r) {
            return !!t.call(e, r, e) !== n
        }) : t.nodeType ? w.grep(e, function (e) {
            return e === t !== n
        }) : "string" != typeof t ? w.grep(e, function (e) {
            return s.call(t, e) > -1 !== n
        }) : w.filter(t, e, n)
    }
    w.filter = function (e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, w.fn.extend({
        find: function (e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(w(e).filter(function () {
                for (t = 0; t < r; t++)
                    if (w.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) w.find(e, i[t], n);
            return r > 1 ? w.uniqueSort(n) : n
        },
        filter: function (e) {
            return this.pushStack(D(this, e || [], !1))
        },
        not: function (e) {
            return this.pushStack(D(this, e || [], !0))
        },
        is: function (e) {
            return !!D(this, "string" == typeof e && N.test(e) ? w(e) : e || [], !1).length
        }
    });
    var L, j = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (w.fn.init = function (e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || L, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : j.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : v, !0)), k.test(r[1]) && w.isPlainObject(t))
                    for (r in t) h(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = v.getElementById(r[2])) && (this[0] = i, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : h(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this)
    }).prototype = w.fn, L = w(v);
    var q = /^(?:parents|prev(?:Until|All))/,
        O = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function P(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    w.fn.extend({
        has: function (e) {
            var t = w(e, this),
                n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++)
                    if (w.contains(this, t[e])) return !0
            })
        },
        closest: function (e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && w(e);
            if (!N.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        } return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o)
        },
        index: function (e) {
            return e ? "string" == typeof e ? s.call(w(e), this[0]) : s.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), w.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
            return E(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
            return E(e, "parentNode", n)
        },
        next: function (e) {
            return P(e, "nextSibling")
        },
        prev: function (e) {
            return P(e, "previousSibling")
        },
        nextAll: function (e) {
            return E(e, "nextSibling")
        },
        prevAll: function (e) {
            return E(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
            return E(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
            return E(e, "previousSibling", n)
        },
        siblings: function (e) {
            return A((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return A(e.firstChild)
        },
        contents: function (e) {
            return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (S(e, "template") && (e = e.content || e), w.merge([], e.childNodes))
        }
    }, function (e, t) {
        w.fn[e] = function (n, r) {
            var i = w.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = w.filter(r, i)), this.length > 1 && (O[e] || w.uniqueSort(i), q.test(e) && i.reverse()), this.pushStack(i)
        }
    });
    var H = /[^\x20\t\r\n\f]+/g;

    function I(e) {
        return e
    }

    function R(e) {
        throw e
    }

    function B(e, t, n, r) {
        var i;
        try {
            e && h(i = e.promise) ? i.call(e).done(t).fail(n) : e && h(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    w.Callbacks = function (e) {
        e = "string" == typeof e ? function (e) {
            var t = {};
            return w.each(e.match(H) || [], function (e, n) {
                t[n] = !0
            }), t
        }(e) : w.extend({}, e);
        var t, n, r, i, o = [],
            a = [],
            s = -1,
            u = function () {
                for (i = i || e.once, r = t = !0; a.length; s = -1)
                    for (n = a.shift(); ++s < o.length;) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1);
                e.memory || (n = !1), t = !1, i && (o = n ? [] : "")
            },
            l = {
                add: function () {
                    return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
                        w.each(n, function (n, r) {
                            h(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== b(r) && t(r)
                        })
                    }(arguments), n && !t && u()), this
                },
                remove: function () {
                    return w.each(arguments, function (e, t) {
                        for (var n;
                            (n = w.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= s && s--
                    }), this
                },
                has: function (e) {
                    return e ? w.inArray(e, o) > -1 : o.length > 0
                },
                empty: function () {
                    return o && (o = []), this
                },
                disable: function () {
                    return i = a = [], o = n = "", this
                },
                disabled: function () {
                    return !o
                },
                lock: function () {
                    return i = a = [], n || t || (o = n = ""), this
                },
                locked: function () {
                    return !!i
                },
                fireWith: function (e, n) {
                    return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || u()), this
                },
                fire: function () {
                    return l.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!r
                }
            };
        return l
    }, w.extend({
        Deferred: function (t) {
            var n = [
                    ["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2],
                    ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]
                ],
                r = "pending",
                i = {
                    state: function () {
                        return r
                    },
                    always: function () {
                        return o.done(arguments).fail(arguments), this
                    },
                    catch: function (e) {
                        return i.then(null, e)
                    },
                    pipe: function () {
                        var e = arguments;
                        return w.Deferred(function (t) {
                            w.each(n, function (n, r) {
                                var i = h(e[r[4]]) && e[r[4]];
                                o[r[1]](function () {
                                    var e = i && i.apply(this, arguments);
                                    e && h(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    then: function (t, r, i) {
                        var o = 0;

                        function a(t, n, r, i) {
                            return function () {
                                var s = this,
                                    u = arguments,
                                    l = function () {
                                        var e, l;
                                        if (!(t < o)) {
                                            if ((e = r.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                            l = e && ("object" == typeof e || "function" == typeof e) && e.then, h(l) ? i ? l.call(e, a(o, n, I, i), a(o, n, R, i)) : (o++, l.call(e, a(o, n, I, i), a(o, n, R, i), a(o, n, I, n.notifyWith))) : (r !== I && (s = void 0, u = [e]), (i || n.resolveWith)(s, u))
                                        }
                                    },
                                    c = i ? l : function () {
                                        try {
                                            l()
                                        } catch (e) {
                                            w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= o && (r !== R && (s = void 0, u = [e]), n.rejectWith(s, u))
                                        }
                                    };
                                t ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), e.setTimeout(c))
                            }
                        }
                        return w.Deferred(function (e) {
                            n[0][3].add(a(0, e, h(i) ? i : I, e.notifyWith)), n[1][3].add(a(0, e, h(t) ? t : I)), n[2][3].add(a(0, e, h(r) ? r : R))
                        }).promise()
                    },
                    promise: function (e) {
                        return null != e ? w.extend(e, i) : i
                    }
                },
                o = {};
            return w.each(n, function (e, t) {
                var a = t[2],
                    s = t[5];
                i[t[1]] = a.add, s && a.add(function () {
                    r = s
                }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), o[t[0]] = function () {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                }, o[t[0] + "With"] = a.fireWith
            }), i.promise(o), t && t.call(o, o), o
        },
        when: function (e) {
            var t = arguments.length,
                n = t,
                r = Array(n),
                o = i.call(arguments),
                a = w.Deferred(),
                s = function (e) {
                    return function (n) {
                        r[e] = this, o[e] = arguments.length > 1 ? i.call(arguments) : n, --t || a.resolveWith(r, o)
                    }
                };
            if (t <= 1 && (B(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || h(o[n] && o[n].then))) return a.then();
            for (; n--;) B(o[n], s(n), a.reject);
            return a.promise()
        }
    });
    var M = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    w.Deferred.exceptionHook = function (t, n) {
        e.console && e.console.warn && t && M.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, w.readyException = function (t) {
        e.setTimeout(function () {
            throw t
        })
    };
    var W = w.Deferred();

    function F() {
        v.removeEventListener("DOMContentLoaded", F), e.removeEventListener("load", F), w.ready()
    }
    w.fn.ready = function (e) {
        return W.then(e).catch(function (e) {
            w.readyException(e)
        }), this
    }, w.extend({
        isReady: !1,
        readyWait: 1,
        ready: function (e) {
            (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0, !0 !== e && --w.readyWait > 0 || W.resolveWith(v, [w]))
        }
    }), w.ready.then = W.then, "complete" === v.readyState || "loading" !== v.readyState && !v.documentElement.doScroll ? e.setTimeout(w.ready) : (v.addEventListener("DOMContentLoaded", F), e.addEventListener("load", F));
    var $ = function (e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === b(n))
                for (s in i = !0, n) $(e, t, s, n[s], !0, o, a);
            else if (void 0 !== r && (i = !0, h(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
                    return l.call(w(e), n)
                })), t))
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        },
        z = /^-ms-/,
        _ = /-([a-z])/g;

    function U(e, t) {
        return t.toUpperCase()
    }

    function V(e) {
        return e.replace(z, "ms-").replace(_, U)
    }
    var X = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function Q() {
        this.expando = w.expando + Q.uid++
    }
    Q.uid = 1, Q.prototype = {
        cache: function (e) {
            var t = e[this.expando];
            return t || (t = {}, X(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function (e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[V(t)] = n;
            else
                for (r in t) i[V(r)] = t[r];
            return i
        },
        get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)]
        },
        access: function (e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function (e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(V) : (t = V(t)) in r ? [t] : t.match(H) || []).length;
                    for (; n--;) delete r[t[n]]
                }(void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !w.isEmptyObject(t)
        }
    };
    var Y = new Q,
        G = new Q,
        K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        J = /[A-Z]/g;

    function Z(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(J, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = function (e) {
                        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : K.test(e) ? JSON.parse(e) : e)
                    }(n)
                } catch (e) {}
                G.set(e, t, n)
            } else n = void 0;
        return n
    }
    w.extend({
        hasData: function (e) {
            return G.hasData(e) || Y.hasData(e)
        },
        data: function (e, t, n) {
            return G.access(e, t, n)
        },
        removeData: function (e, t) {
            G.remove(e, t)
        },
        _data: function (e, t, n) {
            return Y.access(e, t, n)
        },
        _removeData: function (e, t) {
            Y.remove(e, t)
        }
    }), w.fn.extend({
        data: function (e, t) {
            var n, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = G.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
                    for (n = a.length; n--;) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = V(r.slice(5)), Z(o, r, i[r]));
                    Y.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function () {
                G.set(this, e)
            }) : $(this, function (t) {
                var n;
                if (o && void 0 === t) return void 0 !== (n = G.get(o, e)) ? n : void 0 !== (n = Z(o, e)) ? n : void 0;
                this.each(function () {
                    G.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function (e) {
            return this.each(function () {
                G.remove(this, e)
            })
        }
    }), w.extend({
        queue: function (e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, w.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var n = w.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = w._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
                w.dequeue(e, t)
            }, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return Y.get(e, n) || Y.access(e, n, {
                empty: w.Callbacks("once memory").add(function () {
                    Y.remove(e, [t + "queue", n])
                })
            })
        }
    }), w.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var n = w.queue(this, e, t);
                w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                w.dequeue(this, e)
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, t) {
            var n, r = 1,
                i = w.Deferred(),
                o = this,
                a = this.length,
                s = function () {
                    --r || i.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"],
        re = v.documentElement,
        ie = function (e) {
            return w.contains(e.ownerDocument, e)
        },
        oe = {
            composed: !0
        };
    re.getRootNode && (ie = function (e) {
        return w.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
    });
    var ae = function (e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === w.css(e, "display")
    };
    var se = {};

    function ue(e) {
        var t, n = e.ownerDocument,
            r = e.nodeName,
            i = se[r];
        return i || (t = n.body.appendChild(n.createElement(r)), i = w.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), se[r] = i, i)
    }

    function le(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; o < a; o++)(r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = Y.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && ae(r) && (i[o] = ue(r))) : "none" !== n && (i[o] = "none", Y.set(r, "display", n)));
        for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
        return e
    }
    w.fn.extend({
        show: function () {
            return le(this, !0)
        },
        hide: function () {
            return le(this)
        },
        toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                ae(this) ? w(this).show() : w(this).hide()
            })
        }
    });
    var ce, fe, de = /^(?:checkbox|radio)$/i,
        pe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i;
    ce = v.createDocumentFragment().appendChild(v.createElement("div")), (fe = v.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), p.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", p.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue, ce.innerHTML = "<option></option>", p.option = !!ce.lastChild;
    var ge = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };

    function ve(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && S(e, t) ? w.merge([e], n) : n
    }

    function me(e, t) {
        for (var n = 0, r = e.length; n < r; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
    }
    ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, p.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
    var ye = /<|&#?\w+;/;

    function be(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), d = [], p = 0, h = e.length; p < h; p++)
            if ((o = e[p]) || 0 === o)
                if ("object" === b(o)) w.merge(d, o.nodeType ? [o] : o);
                else if (ye.test(o)) {
            for (a = a || f.appendChild(t.createElement("div")), s = (pe.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2], c = u[0]; c--;) a = a.lastChild;
            w.merge(d, a.childNodes), (a = f.firstChild).textContent = ""
        } else d.push(t.createTextNode(o));
        for (f.textContent = "", p = 0; o = d[p++];)
            if (r && w.inArray(o, r) > -1) i && i.push(o);
            else if (l = ie(o), a = ve(f.appendChild(o), "script"), l && me(a), n)
            for (c = 0; o = a[c++];) he.test(o.type || "") && n.push(o);
        return f
    }
    var xe = /^key/,
        we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ce = /^([^.]*)(?:\.(.+)|)/;

    function Te() {
        return !0
    }

    function Ee() {
        return !1
    }

    function Ae(e, t) {
        return e === function () {
            try {
                return v.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }

    function Ne(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n, n = void 0), t) Ne(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Ee;
        else if (!i) return e;
        return 1 === o && (a = i, (i = function (e) {
            return w().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = w.guid++)), e.each(function () {
            w.event.add(this, t, i, r, n)
        })
    }

    function Se(e, t, n) {
        n ? (Y.set(e, t, !1), w.event.add(e, t, {
            namespace: !1,
            handler: function (e) {
                var r, o, a = Y.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                    if (a.length)(w.event.special[t] || {}).delegateType && e.stopPropagation();
                    else if (a = i.call(arguments), Y.set(this, t, a), r = n(this, t), this[t](), a !== (o = Y.get(this, t)) || r ? Y.set(this, t, !1) : o = {}, a !== o) return e.stopImmediatePropagation(), e.preventDefault(), o.value
                } else a.length && (Y.set(this, t, {
                    value: w.event.trigger(w.extend(a[0], w.Event.prototype), a.slice(1), this)
                }), e.stopImmediatePropagation())
            }
        })) : void 0 === Y.get(e, t) && w.event.add(e, t, Te)
    }
    w.event = {
        global: {},
        add: function (e, t, n, r, i) {
            var o, a, s, u, l, c, f, d, p, h, g, v = Y.get(e);
            if (X(e))
                for (n.handler && (n = (o = n).handler, i = o.selector), i && w.find.matchesSelector(re, i), n.guid || (n.guid = w.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function (t) {
                        return void 0 !== w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0
                    }), l = (t = (t || "").match(H) || [""]).length; l--;) p = g = (s = Ce.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), p && (f = w.event.special[p] || {}, p = (i ? f.delegateType : f.bindType) || p, f = w.event.special[p] || {}, c = w.extend({
                    type: p,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && w.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (d = u[p]) || ((d = u[p] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(p, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, c) : d.push(c), w.event.global[p] = !0)
        },
        remove: function (e, t, n, r, i) {
            var o, a, s, u, l, c, f, d, p, h, g, v = Y.hasData(e) && Y.get(e);
            if (v && (u = v.events)) {
                for (l = (t = (t || "").match(H) || [""]).length; l--;)
                    if (p = g = (s = Ce.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), p) {
                        for (f = w.event.special[p] || {}, d = u[p = (r ? f.delegateType : f.bindType) || p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = d.length; o--;) c = d[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !d.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || w.removeEvent(e, p, v.handle), delete u[p])
                    } else
                        for (p in u) w.event.remove(e, p + t[l], n, r, !0);
                w.isEmptyObject(u) && Y.remove(e, "handle events")
            }
        },
        dispatch: function (e) {
            var t, n, r, i, o, a, s = new Array(arguments.length),
                u = w.event.fix(e),
                l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
                c = w.event.special[u.type] || {};
            for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
            if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
                for (a = w.event.handlers.call(this, u, l), t = 0;
                    (i = a[t++]) && !u.isPropagationStopped();)
                    for (u.currentTarget = i.elem, n = 0;
                        (o = i.handlers[n++]) && !u.isImmediatePropagationStopped();) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((w.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, u), u.result
            }
        },
        handlers: function (e, t) {
            var n, r, i, o, a, s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && e.button >= 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? w(i, this).index(l) > -1 : w.find(i, this, null, [l]).length), a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    } return l = this, u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }), s
        },
        addProp: function (e, t) {
            Object.defineProperty(w.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: h(t) ? function () {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function (t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function (e) {
            return e[w.expando] ? e : new w.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function (e) {
                    var t = this || e;
                    return de.test(t.type) && t.click && S(t, "input") && Se(t, "click", Te), !1
                },
                trigger: function (e) {
                    var t = this || e;
                    return de.test(t.type) && t.click && S(t, "input") && Se(t, "click"), !0
                },
                _default: function (e) {
                    var t = e.target;
                    return de.test(t.type) && t.click && S(t, "input") && Y.get(t, "click") || S(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, w.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, w.Event = function (e, t) {
        if (!(this instanceof w.Event)) return new w.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Te : Ee, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0
    }, w.Event.prototype = {
        constructor: w.Event,
        isDefaultPrevented: Ee,
        isPropagationStopped: Ee,
        isImmediatePropagationStopped: Ee,
        isSimulated: !1,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = Te, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = Te, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Te, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, w.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
            var t = e.button;
            return null == e.which && xe.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && we.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, w.event.addProp), w.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, t) {
        w.event.special[e] = {
            setup: function () {
                return Se(this, e, Ae), !1
            },
            trigger: function () {
                return Se(this, e), !0
            },
            delegateType: t
        }
    }), w.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, t) {
        w.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
                var n, r = e.relatedTarget,
                    i = e.handleObj;
                return r && (r === this || w.contains(this, r)) || (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), w.fn.extend({
        on: function (e, t, n, r) {
            return Ne(this, e, t, n, r)
        },
        one: function (e, t, n, r) {
            return Ne(this, e, t, n, r, 1)
        },
        off: function (e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ee), this.each(function () {
                w.event.remove(this, e, n, t)
            })
        }
    });
    var ke = /<script|<style|<link/i,
        De = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Le = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function je(e, t) {
        return S(e, "table") && S(11 !== t.nodeType ? t : t.firstChild, "tr") && w(e).children("tbody")[0] || e
    }

    function qe(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function Oe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Pe(e, t) {
        var n, r, i, o, a, s;
        if (1 === t.nodeType) {
            if (Y.hasData(e) && (s = Y.get(e).events))
                for (i in Y.remove(t, "handle events"), s)
                    for (n = 0, r = s[i].length; n < r; n++) w.event.add(t, i, s[i][n]);
            G.hasData(e) && (o = G.access(e), a = w.extend({}, o), G.set(t, a))
        }
    }

    function He(e, t, n, r) {
        t = o(t);
        var i, a, s, u, l, c, f = 0,
            d = e.length,
            g = d - 1,
            v = t[0],
            m = h(v);
        if (m || d > 1 && "string" == typeof v && !p.checkClone && De.test(v)) return e.each(function (i) {
            var o = e.eq(i);
            m && (t[0] = v.call(this, i, o.html())), He(o, t, n, r)
        });
        if (d && (a = (i = be(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === i.childNodes.length && (i = a), a || r)) {
            for (u = (s = w.map(ve(i, "script"), qe)).length; f < d; f++) l = i, f !== g && (l = w.clone(l, !0, !0), u && w.merge(s, ve(l, "script"))), n.call(e[f], l, f);
            if (u)
                for (c = s[s.length - 1].ownerDocument, w.map(s, Oe), f = 0; f < u; f++) l = s[f], he.test(l.type || "") && !Y.access(l, "globalEval") && w.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? w._evalUrl && !l.noModule && w._evalUrl(l.src, {
                    nonce: l.nonce || l.getAttribute("nonce")
                }, c) : y(l.textContent.replace(Le, ""), l, c))
        }
        return e
    }

    function Ie(e, t, n) {
        for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || w.cleanData(ve(r)), r.parentNode && (n && ie(r) && me(ve(r, "script")), r.parentNode.removeChild(r));
        return e
    }
    w.extend({
        htmlPrefilter: function (e) {
            return e
        },
        clone: function (e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0),
                f = ie(e);
            if (!(p.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e)))
                for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++) s = o[r], u = a[r], l = void 0, "input" === (l = u.nodeName.toLowerCase()) && de.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) Pe(o[r], a[r]);
                else Pe(e, c);
            return (a = ve(c, "script")).length > 0 && me(a, !f && ve(e, "script")), c
        },
        cleanData: function (e) {
            for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (X(n)) {
                    if (t = n[Y.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
                        n[Y.expando] = void 0
                    }
                    n[G.expando] && (n[G.expando] = void 0)
                }
        }
    }), w.fn.extend({
        detach: function (e) {
            return Ie(this, e, !0)
        },
        remove: function (e) {
            return Ie(this, e)
        },
        text: function (e) {
            return $(this, function (e) {
                return void 0 === e ? w.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function () {
            return He(this, arguments, function (e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || je(this, e).appendChild(e)
            })
        },
        prepend: function () {
            return He(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = je(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function () {
            return He(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function () {
            return He(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (w.cleanData(ve(e, !1)), e.textContent = "");
            return this
        },
        clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return w.clone(this, e, t)
            })
        },
        html: function (e) {
            return $(this, function (e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !ke.test(e) && !ge[(pe.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = w.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (w.cleanData(ve(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function () {
            var e = [];
            return He(this, arguments, function (t) {
                var n = this.parentNode;
                w.inArray(this, e) < 0 && (w.cleanData(ve(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), w.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        w.fn[e] = function (e) {
            for (var n, r = [], i = w(e), o = i.length - 1, s = 0; s <= o; s++) n = s === o ? this : this.clone(!0), w(i[s])[t](n), a.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var Re = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        Be = function (t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        },
        Me = function (e, t, n) {
            var r, i, o = {};
            for (i in t) o[i] = e.style[i], e.style[i] = t[i];
            for (i in r = n.call(e), t) e.style[i] = o[i];
            return r
        },
        We = new RegExp(ne.join("|"), "i");

    function Fe(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || Be(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = w.style(e, t)), !p.pixelBoxStyles() && Re.test(a) && We.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function $e(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function () {
        function t() {
            if (c) {
                l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(l).appendChild(c);
                var t = e.getComputedStyle(c);
                r = "1%" !== t.top, u = 12 === n(t.marginLeft), c.style.right = "60%", a = 36 === n(t.right), i = 36 === n(t.width), c.style.position = "absolute", o = 12 === n(c.offsetWidth / 3), re.removeChild(l), c = null
            }
        }

        function n(e) {
            return Math.round(parseFloat(e))
        }
        var r, i, o, a, s, u, l = v.createElement("div"),
            c = v.createElement("div");
        c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", p.clearCloneStyle = "content-box" === c.style.backgroundClip, w.extend(p, {
            boxSizingReliable: function () {
                return t(), i
            },
            pixelBoxStyles: function () {
                return t(), a
            },
            pixelPosition: function () {
                return t(), r
            },
            reliableMarginLeft: function () {
                return t(), u
            },
            scrollboxSize: function () {
                return t(), o
            },
            reliableTrDimensions: function () {
                var t, n, r, i;
                return null == s && (t = v.createElement("table"), n = v.createElement("tr"), r = v.createElement("div"), t.style.cssText = "position:absolute;left:-11111px", n.style.height = "1px", r.style.height = "9px", re.appendChild(t).appendChild(n).appendChild(r), i = e.getComputedStyle(n), s = parseInt(i.height) > 3, re.removeChild(t)), s
            }
        }))
    }();
    var ze = ["Webkit", "Moz", "ms"],
        _e = v.createElement("div").style,
        Ue = {};

    function Ve(e) {
        var t = w.cssProps[e] || Ue[e];
        return t || (e in _e ? e : Ue[e] = function (e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = ze.length; n--;)
                if ((e = ze[n] + t) in _e) return e
        }(e) || e)
    }
    var Xe = /^(none|table(?!-c[ea]).+)/,
        Qe = /^--/,
        Ye = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ge = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function Ke(e, t, n) {
        var r = te.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function Je(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (u += w.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= w.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= w.css(e, "border" + ne[a] + "Width", !0, i))) : (u += w.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += w.css(e, "border" + ne[a] + "Width", !0, i) : s += w.css(e, "border" + ne[a] + "Width", !0, i));
        return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u
    }

    function Ze(e, t, n) {
        var r = Be(e),
            i = (!p.boxSizingReliable() || n) && "border-box" === w.css(e, "boxSizing", !1, r),
            o = i,
            a = Fe(e, t, r),
            s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Re.test(a)) {
            if (!n) return a;
            a = "auto"
        }
        return (!p.boxSizingReliable() && i || !p.reliableTrDimensions() && S(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === w.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === w.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Je(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }
    w.extend({
            cssHooks: {
                opacity: {
                    get: function (e, t) {
                        if (t) {
                            var n = Fe(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                gridArea: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnStart: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowStart: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {},
            style: function (e, t, n, r) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var i, o, a, s = V(t),
                        u = Qe.test(t),
                        l = e.style;
                    if (u || (t = Ve(s)), a = w.cssHooks[t] || w.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                    "string" === (o = typeof n) && (i = te.exec(n)) && i[1] && (n = function (e, t, n, r) {
                        var i, o, a = 20,
                            s = r ? function () {
                                return r.cur()
                            } : function () {
                                return w.css(e, t, "")
                            },
                            u = s(),
                            l = n && n[3] || (w.cssNumber[t] ? "" : "px"),
                            c = e.nodeType && (w.cssNumber[t] || "px" !== l && +u) && te.exec(w.css(e, t));
                        if (c && c[3] !== l) {
                            for (u /= 2, l = l || c[3], c = +u || 1; a--;) w.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
                            c *= 2, w.style(e, t, c + l), n = n || []
                        }
                        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
                    }(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (w.cssNumber[s] ? "" : "px")), p.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
                }
            },
            css: function (e, t, n, r) {
                var i, o, a, s = V(t);
                return Qe.test(t) || (t = Ve(s)), (a = w.cssHooks[t] || w.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Fe(e, t, r)), "normal" === i && t in Ge && (i = Ge[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
            }
        }), w.each(["height", "width"], function (e, t) {
            w.cssHooks[t] = {
                get: function (e, n, r) {
                    if (n) return !Xe.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ze(e, t, r) : Me(e, Ye, function () {
                        return Ze(e, t, r)
                    })
                },
                set: function (e, n, r) {
                    var i, o = Be(e),
                        a = !p.scrollboxSize() && "absolute" === o.position,
                        s = (a || r) && "border-box" === w.css(e, "boxSizing", !1, o),
                        u = r ? Je(e, t, r, s, o) : 0;
                    return s && a && (u -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Je(e, t, "border", !1, o) - .5)), u && (i = te.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = w.css(e, t)), Ke(0, n, u)
                }
            }
        }), w.cssHooks.marginLeft = $e(p.reliableMarginLeft, function (e, t) {
            if (t) return (parseFloat(Fe(e, "marginLeft")) || e.getBoundingClientRect().left - Me(e, {
                marginLeft: 0
            }, function () {
                return e.getBoundingClientRect().left
            })) + "px"
        }), w.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function (e, t) {
            w.cssHooks[e + t] = {
                expand: function (n) {
                    for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + ne[r] + t] = o[r] || o[r - 2] || o[0];
                    return i
                }
            }, "margin" !== e && (w.cssHooks[e + t].set = Ke)
        }), w.fn.extend({
            css: function (e, t) {
                return $(this, function (e, t, n) {
                    var r, i, o = {},
                        a = 0;
                    if (Array.isArray(t)) {
                        for (r = Be(e), i = t.length; a < i; a++) o[t[a]] = w.css(e, t[a], !1, r);
                        return o
                    }
                    return void 0 !== n ? w.style(e, t, n) : w.css(e, t)
                }, e, t, arguments.length > 1)
            }
        }), w.fn.delay = function (t, n) {
            return t = w.fx && w.fx.speeds[t] || t, n = n || "fx", this.queue(n, function (n, r) {
                var i = e.setTimeout(n, t);
                r.stop = function () {
                    e.clearTimeout(i)
                }
            })
        },
        function () {
            var e = v.createElement("input"),
                t = v.createElement("select").appendChild(v.createElement("option"));
            e.type = "checkbox", p.checkOn = "" !== e.value, p.optSelected = t.selected, (e = v.createElement("input")).value = "t", e.type = "radio", p.radioValue = "t" === e.value
        }();
    var et, tt = w.expr.attrHandle;
    w.fn.extend({
        attr: function (e, t) {
            return $(this, w.attr, e, t, arguments.length > 1)
        },
        removeAttr: function (e) {
            return this.each(function () {
                w.removeAttr(this, e)
            })
        }
    }), w.extend({
        attr: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? et : void 0)), void 0 !== n ? null === n ? void w.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = w.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!p.radioValue && "radio" === t && S(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function (e, t) {
            var n, r = 0,
                i = t && t.match(H);
            if (i && 1 === e.nodeType)
                for (; n = i[r++];) e.removeAttribute(n)
        }
    }), et = {
        set: function (e, t, n) {
            return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = tt[t] || w.find.attr;
        tt[t] = function (e, t, r) {
            var i, o, a = t.toLowerCase();
            return r || (o = tt[a], tt[a] = i, i = null != n(e, t, r) ? a : null, tt[a] = o), i
        }
    });
    var nt = /^(?:input|select|textarea|button)$/i,
        rt = /^(?:a|area)$/i;

    function it(e) {
        return (e.match(H) || []).join(" ")
    }

    function ot(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function at(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(H) || []
    }
    w.fn.extend({
        prop: function (e, t) {
            return $(this, w.prop, e, t, arguments.length > 1)
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[w.propFix[e] || e]
            })
        }
    }), w.extend({
        prop: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(e) || (t = w.propFix[t] || t, i = w.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = w.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : nt.test(e.nodeName) || rt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), p.optSelected || (w.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        w.propFix[this.toLowerCase()] = this
    }), w.fn.extend({
        addClass: function (e) {
            var t, n, r, i, o, a, s, u = 0;
            if (h(e)) return this.each(function (t) {
                w(this).addClass(e.call(this, t, ot(this)))
            });
            if ((t = at(e)).length)
                for (; n = this[u++];)
                    if (i = ot(n), r = 1 === n.nodeType && " " + it(i) + " ") {
                        for (a = 0; o = t[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = it(r)) && n.setAttribute("class", s)
                    } return this
        },
        removeClass: function (e) {
            var t, n, r, i, o, a, s, u = 0;
            if (h(e)) return this.each(function (t) {
                w(this).removeClass(e.call(this, t, ot(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((t = at(e)).length)
                for (; n = this[u++];)
                    if (i = ot(n), r = 1 === n.nodeType && " " + it(i) + " ") {
                        for (a = 0; o = t[a++];)
                            for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
                        i !== (s = it(r)) && n.setAttribute("class", s)
                    } return this
        },
        toggleClass: function (e, t) {
            var n = typeof e,
                r = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : h(e) ? this.each(function (n) {
                w(this).toggleClass(e.call(this, n, ot(this), t), t)
            }) : this.each(function () {
                var t, i, o, a;
                if (r)
                    for (i = 0, o = w(this), a = at(e); t = a[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else void 0 !== e && "boolean" !== n || ((t = ot(this)) && Y.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Y.get(this, "__className__") || ""))
            })
        },
        hasClass: function (e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++];)
                if (1 === n.nodeType && (" " + it(ot(n)) + " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var st = /\r/g;
    w.fn.extend({
        val: function (e) {
            var t, n, r, i = this[0];
            return arguments.length ? (r = h(e), this.each(function (n) {
                var i;
                1 === this.nodeType && (null == (i = r ? e.call(this, n, w(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = w.map(i, function (e) {
                    return null == e ? "" : e + ""
                })), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
            })) : i ? (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(st, "") : null == n ? "" : n : void 0
        }
    }), w.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = w.find.attr(e, "value");
                    return null != t ? t : it(w.text(e))
                }
            },
            select: {
                get: function (e) {
                    var t, n, r, i = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !S(n.parentNode, "optgroup"))) {
                            if (t = w(n).val(), a) return t;
                            s.push(t)
                        } return s
                },
                set: function (e, t) {
                    for (var n, r, i = e.options, o = w.makeArray(t), a = i.length; a--;)((r = i[a]).selected = w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), w.each(["radio", "checkbox"], function () {
        w.valHooks[this] = {
            set: function (e, t) {
                if (Array.isArray(t)) return e.checked = w.inArray(w(e).val(), t) > -1
            }
        }, p.checkOn || (w.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), p.focusin = "onfocusin" in e;
    var ut = /^(?:focusinfocus|focusoutblur)$/,
        lt = function (e) {
            e.stopPropagation()
        };
    w.extend(w.event, {
        trigger: function (t, n, r, i) {
            var o, a, s, u, l, f, d, p, m = [r || v],
                y = c.call(t, "type") ? t.type : t,
                b = c.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = p = s = r = r || v, 3 !== r.nodeType && 8 !== r.nodeType && !ut.test(y + w.event.triggered) && (y.indexOf(".") > -1 && (b = y.split("."), y = b.shift(), b.sort()), l = y.indexOf(":") < 0 && "on" + y, (t = t[w.expando] ? t : new w.Event(y, "object" == typeof t && t)).isTrigger = i ? 2 : 3, t.namespace = b.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : w.makeArray(n, [t]), d = w.event.special[y] || {}, i || !d.trigger || !1 !== d.trigger.apply(r, n))) {
                if (!i && !d.noBubble && !g(r)) {
                    for (u = d.delegateType || y, ut.test(u + y) || (a = a.parentNode); a; a = a.parentNode) m.push(a), s = a;
                    s === (r.ownerDocument || v) && m.push(s.defaultView || s.parentWindow || e)
                }
                for (o = 0;
                    (a = m[o++]) && !t.isPropagationStopped();) p = a, t.type = o > 1 ? u : d.bindType || y, (f = (Y.get(a, "events") || Object.create(null))[t.type] && Y.get(a, "handle")) && f.apply(a, n), (f = l && a[l]) && f.apply && X(a) && (t.result = f.apply(a, n), !1 === t.result && t.preventDefault());
                return t.type = y, i || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(m.pop(), n) || !X(r) || l && h(r[y]) && !g(r) && ((s = r[l]) && (r[l] = null), w.event.triggered = y, t.isPropagationStopped() && p.addEventListener(y, lt), r[y](), t.isPropagationStopped() && p.removeEventListener(y, lt), w.event.triggered = void 0, s && (r[l] = s)), t.result
            }
        },
        simulate: function (e, t, n) {
            var r = w.extend(new w.Event, n, {
                type: e,
                isSimulated: !0
            });
            w.event.trigger(r, null, t)
        }
    }), w.fn.extend({
        trigger: function (e, t) {
            return this.each(function () {
                w.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return w.event.trigger(e, t, n, !0)
        }
    }), p.focusin || w.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, t) {
        var n = function (e) {
            w.event.simulate(t, e.target, w.event.fix(e))
        };
        w.event.special[t] = {
            setup: function () {
                var r = this.ownerDocument || this.document || this,
                    i = Y.access(r, t);
                i || r.addEventListener(e, n, !0), Y.access(r, t, (i || 0) + 1)
            },
            teardown: function () {
                var r = this.ownerDocument || this.document || this,
                    i = Y.access(r, t) - 1;
                i ? Y.access(r, t, i) : (r.removeEventListener(e, n, !0), Y.remove(r, t))
            }
        }
    }), w.parseXML = function (t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t), n
    };
    var ct, ft = /\[\]$/,
        dt = /\r?\n/g,
        pt = /^(?:submit|button|image|reset|file)$/i,
        ht = /^(?:input|select|textarea|keygen)/i;

    function gt(e, t, n, r) {
        var i;
        if (Array.isArray(t)) w.each(t, function (t, i) {
            n || ft.test(e) ? r(e, i) : gt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== b(t)) r(e, t);
        else
            for (i in t) gt(e + "[" + i + "]", t[i], n, r)
    }
    w.param = function (e, t) {
        var n, r = [],
            i = function (e, t) {
                var n = h(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function () {
            i(this.name, this.value)
        });
        else
            for (n in e) gt(n, e[n], t, i);
        return r.join("&")
    }, w.fn.extend({
        serialize: function () {
            return w.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var e = w.prop(this, "elements");
                return e ? w.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !w(this).is(":disabled") && ht.test(this.nodeName) && !pt.test(e) && (this.checked || !de.test(e))
            }).map(function (e, t) {
                var n = w(this).val();
                return null == n ? null : Array.isArray(n) ? w.map(n, function (e) {
                    return {
                        name: t.name,
                        value: e.replace(dt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(dt, "\r\n")
                }
            }).get()
        }
    }), w.fn.extend({
        wrapAll: function (e) {
            var t;
            return this[0] && (h(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function (e) {
            return h(e) ? this.each(function (t) {
                w(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = w(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function (e) {
            var t = h(e);
            return this.each(function (n) {
                w(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function (e) {
            return this.parent(e).not("body").each(function () {
                w(this).replaceWith(this.childNodes)
            }), this
        }
    }), w.expr.pseudos.hidden = function (e) {
        return !w.expr.pseudos.visible(e)
    }, w.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, p.createHTMLDocument = ((ct = v.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === ct.childNodes.length), w.parseHTML = function (e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (p.createHTMLDocument ? ((r = (t = v.implementation.createHTMLDocument("")).createElement("base")).href = v.location.href, t.head.appendChild(r)) : t = v), o = !n && [], (i = k.exec(e)) ? [t.createElement(i[1])] : (i = be([e], t, o), o && o.length && w(o).remove(), w.merge([], i.childNodes)));
        var r, i, o
    }, w.offset = {
        setOffset: function (e, t, n) {
            var r, i, o, a, s, u, l = w.css(e, "position"),
                c = w(e),
                f = {};
            "static" === l && (e.style.position = "relative"), s = c.offset(), o = w.css(e, "top"), u = w.css(e, "left"), ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1 ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), h(t) && (t = t.call(e, n, w.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : ("number" == typeof f.top && (f.top += "px"), "number" == typeof f.left && (f.left += "px"), c.css(f))
        }
    }, w.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                w.offset.setOffset(this, e, t)
            });
            var t, n, r = this[0];
            return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function () {
            if (this[0]) {
                var e, t, n, r = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect();
                else {
                    for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position");) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0), i.left += w.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - w.css(r, "marginTop", !0),
                    left: t.left - i.left - w.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent; e && "static" === w.css(e, "position");) e = e.offsetParent;
                return e || re
            })
        }
    }), w.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (e, t) {
        var n = "pageYOffset" === t;
        w.fn[e] = function (r) {
            return $(this, function (e, r, i) {
                var o;
                if (g(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
                o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
            }, e, r, arguments.length)
        }
    }), w.each(["top", "left"], function (e, t) {
        w.cssHooks[t] = $e(p.pixelPosition, function (e, n) {
            if (n) return n = Fe(e, t), Re.test(n) ? w(e).position()[t] + "px" : n
        })
    }), w.each({
        Height: "height",
        Width: "width"
    }, function (e, t) {
        w.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function (n, r) {
            w.fn[r] = function (i, o) {
                var a = arguments.length && (n || "boolean" != typeof i),
                    s = n || (!0 === i || !0 === o ? "margin" : "border");
                return $(this, function (t, n, i) {
                    var o;
                    return g(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? w.css(t, n, s) : w.style(t, n, i, s)
                }, t, a ? i : void 0, a)
            }
        })
    }), w.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
        w.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    });
    var vt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    w.proxy = function (e, t) {
        var n, r, o;
        if ("string" == typeof t && (n = e[t], t = e, e = n), h(e)) return r = i.call(arguments, 2), (o = function () {
            return e.apply(t || this, r.concat(i.call(arguments)))
        }).guid = e.guid = e.guid || w.guid++, o
    }, w.holdReady = function (e) {
        e ? w.readyWait++ : w.ready(!0)
    }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = S, w.isFunction = h, w.isWindow = g, w.camelCase = V, w.type = b, w.now = Date.now, w.isNumeric = function (e) {
        var t = w.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, w.trim = function (e) {
        return null == e ? "" : (e + "").replace(vt, "")
    }, "function" == typeof define && define.amd && define("jquery", [], function () {
        return w
    });
    var mt = e.jQuery,
        yt = e.$;
    return w.noConflict = function (t) {
        return e.$ === w && (e.$ = yt), t && e.jQuery === w && (e.jQuery = mt), w
    }, void 0 === t && (e.jQuery = e.$ = w), w
});

//GSAP

! function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {})
}(this, function (t) {
    "use strict";

    function e(t, e) {
        t.prototype = Object.create(e.prototype), (t.prototype.constructor = t).__proto__ = e
    }

    function r(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function i(t) {
        return "string" == typeof t
    }

    function n(t) {
        return "function" == typeof t
    }

    function s(t) {
        return "number" == typeof t
    }

    function a(t) {
        return void 0 === t
    }

    function o(t) {
        return "object" == typeof t
    }

    function u(t) {
        return !1 !== t
    }

    function h() {
        return "undefined" != typeof window
    }

    function l(t) {
        return n(t) || i(t)
    }

    function f(t) {
        return (vt = pe(t, ie)) && lr
    }

    function p(t, e) {
        return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
    }

    function c(t, e) {
        return !e && console.warn(t)
    }

    function _(t, e) {
        return t && (ie[t] = e) && vt && (vt[t] = e) || ie
    }

    function d() {
        return 0
    }

    function m(t) {
        var e, r, i = t[0];
        if (o(i) || n(i) || (t = [t]), !(e = (i._gsap || {}).harness)) {
            for (r = le.length; r-- && !le[r].targetTest(i););
            e = le[r]
        }
        for (r = t.length; r--;) t[r] && (t[r]._gsap || (t[r]._gsap = new Fe(t[r], e))) || t.splice(r, 1);
        return t
    }

    function g(t) {
        return t._gsap || m(ge(t))[0]._gsap
    }

    function v(t, e, r) {
        return (r = t[e]) && n(r) ? t[e]() : a(r) && t.getAttribute && t.getAttribute(e) || r
    }

    function y(t, e) {
        return (t = t.split(",")).forEach(e) || t
    }

    function w(t) {
        return Math.round(1e5 * t) / 1e5 || 0
    }

    function T(t, e) {
        for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r;);
        return i < r
    }

    function x(t, e, r) {
        var i, n = s(t[1]),
            a = (n ? 2 : 1) + (e < 2 ? 0 : 1),
            o = t[a];
        if (n && (o.duration = t[1]), o.parent = r, e) {
            for (i = o; r && !("immediateRender" in i);) i = r.vars.defaults || {}, r = u(r.vars.inherit) && r.parent;
            o.immediateRender = u(i.immediateRender), e < 2 ? o.runBackwards = 1 : o.startAt = t[a - 1]
        }
        return o
    }

    function b() {
        var t, e, r = se.length,
            i = se.slice(0);
        for (ae = {}, t = se.length = 0; t < r; t++)(e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
    }

    function M(t, e, r, i) {
        se.length && b(), t.render(e, r, i), se.length && b()
    }

    function O(t) {
        var e = parseFloat(t);
        return (e || 0 === e) && (t + "").match(re).length < 2 ? e : i(t) ? t.trim() : t
    }

    function k(t) {
        return t
    }

    function C(t, e) {
        for (var r in e) r in t || (t[r] = e[r]);
        return t
    }

    function A(t, e) {
        for (var r in e) r in t || "duration" === r || "ease" === r || (t[r] = e[r])
    }

    function D(t, e) {
        for (var r in e) t[r] = o(e[r]) ? D(t[r] || (t[r] = {}), e[r]) : e[r];
        return t
    }

    function P(t, e) {
        var r, i = {};
        for (r in t) r in e || (i[r] = t[r]);
        return i
    }

    function S(t) {
        var e = t.parent || _t,
            r = t.keyframes ? A : C;
        if (u(t.inherit))
            for (; e;) r(t, e.vars.defaults), e = e.parent || e._dp;
        return t
    }

    function z(t, e, r, i) {
        void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
        var n = e._prev,
            s = e._next;
        n ? n._next = s : t[r] === e && (t[r] = s), s ? s._prev = n : t[i] === e && (t[i] = n), e._next = e._prev = e.parent = null
    }

    function R(t, e) {
        !t.parent || e && !t.parent.autoRemoveChildren || t.parent.remove(t), t._act = 0
    }

    function F(t, e) {
        if (t && (!e || e._end > t._dur || e._start < 0))
            for (var r = t; r;) r._dirty = 1, r = r.parent;
        return t
    }

    function E(t) {
        return t._repeat ? ce(t._tTime, t = t.duration() + t._rDelay) * t : 0
    }

    function B(t, e) {
        return (t - e._start) * e._ts + (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur)
    }

    function L(t) {
        return t._end = w(t._start + (t._tDur / Math.abs(t._ts || t._rts || Xt) || 0))
    }

    function I(t, e) {
        var r = t._dp;
        return r && r.smoothChildTiming && t._ts && (t._start = w(t._dp._time - (0 < t._ts ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), L(t), r._dirty || F(r, t)), t
    }

    function Y(t, e) {
        var r;
        if ((e._time || e._initted && !e._dur) && (r = B(t.rawTime(), e), (!e._dur || de(0, e.totalDuration(), r) - e._tTime > Xt) && e.render(r, !0)), F(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
            if (t._dur < t.duration())
                for (r = t; r._dp;) 0 <= r.rawTime() && r.totalTime(r._tTime), r = r._dp;
            t._zTime = -Xt
        }
    }

    function N(t, e, r, i) {
        return e.parent && R(e), e._start = w(r + e._delay), e._end = w(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)),
            function (t, e, r, i, n) {
                void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
                var s, a = t[i];
                if (n)
                    for (s = e[n]; a && a[n] > s;) a = a._prev;
                a ? (e._next = a._next, a._next = e) : (e._next = t[r], t[r] = e), e._next ? e._next._prev = e : t[i] = e, e._prev = a, e.parent = e._dp = t
            }(t, e, "_first", "_last", t._sort ? "_start" : 0), t._recent = e, i || Y(t, e), t
    }

    function U(t, e) {
        return (ie.ScrollTrigger || p("scrollTrigger", e)) && ie.ScrollTrigger.create(e, t)
    }

    function X(t, e, r, i) {
        return Ue(t, e), t._initted ? !r && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && wt !== Me.frame ? (se.push(t), t._lazy = [e, i], 1) : void 0 : 1
    }

    function q(t, e, r, i) {
        var n = t._repeat,
            s = w(e) || 0,
            a = t._tTime / t._tDur;
        return a && !i && (t._time *= s / t._dur), t._dur = s, t._tDur = n ? n < 0 ? 1e10 : w(s * (n + 1) + t._rDelay * n) : s, a && !i ? I(t, t._tTime = t._tDur * a) : t.parent && L(t), r || F(t.parent, t), t
    }

    function V(t) {
        return t instanceof Le ? F(t) : q(t, t._dur)
    }

    function j(t, e) {
        var r, n, s = t.labels,
            a = t._recent || _e,
            o = t.duration() >= Ut ? a.endTime(!1) : t._dur;
        return i(e) && (isNaN(e) || e in s) ? "<" === (r = e.charAt(0)) || ">" === r ? ("<" === r ? a._start : a.endTime(0 <= a._repeat)) + (parseFloat(e.substr(1)) || 0) : (r = e.indexOf("=")) < 0 ? (e in s || (s[e] = o), s[e]) : (n = +(e.charAt(r - 1) + e.substr(r + 1)), 1 < r ? j(t, e.substr(0, r - 1)) + n : o + n) : null == e ? o : +e
    }

    function Q(t, e) {
        return t || 0 === t ? e(t) : e
    }

    function G(t) {
        return (t = (t + "").substr((parseFloat(t) + "").length)) && isNaN(t) ? t : ""
    }

    function W(t, e) {
        return t && o(t) && "length" in t && (!e && !t.length || t.length - 1 in t && o(t[0])) && !t.nodeType && t !== dt
    }

    function Z(t) {
        return t.sort(function () {
            return .5 - Math.random()
        })
    }

    function H(t) {
        if (n(t)) return t;
        var e = o(t) ? t : {
                each: t
            },
            r = Pe(e.ease),
            s = e.from || 0,
            a = parseFloat(e.base) || 0,
            u = {},
            h = 0 < s && s < 1,
            l = isNaN(s) || h,
            f = e.axis,
            p = s,
            c = s;
        return i(s) ? p = c = {
                center: .5,
                edges: .5,
                end: 1
            } [s] || 0 : !h && l && (p = s[0], c = s[1]),
            function (t, i, n) {
                var o, h, _, d, m, g, v, y, T, x = (n || e).length,
                    b = u[x];
                if (!b) {
                    if (!(T = "auto" === e.grid ? 0 : (e.grid || [1, Ut])[1])) {
                        for (v = -Ut; v < (v = n[T++].getBoundingClientRect().left) && T < x;);
                        T--
                    }
                    for (b = u[x] = [], o = l ? Math.min(T, x) * p - .5 : s % T, h = l ? x * c / T - .5 : s / T | 0, y = Ut, g = v = 0; g < x; g++) _ = g % T - o, d = h - (g / T | 0), b[g] = m = f ? Math.abs("y" === f ? d : _) : Qt(_ * _ + d * d), v < m && (v = m), m < y && (y = m);
                    "random" === s && Z(b), b.max = v - y, b.min = y, b.v = x = (parseFloat(e.amount) || parseFloat(e.each) * (x < T ? x - 1 : f ? "y" === f ? x / T : T : Math.max(T, x / T)) || 0) * ("edges" === s ? -1 : 1), b.b = x < 0 ? a - x : a, b.u = G(e.amount || e.each) || 0, r = r && x < 0 ? De(r) : r
                }
                return x = (b[t] - b.min) / b.max || 0, w(b.b + (r ? r(x) : x) * b.v) + b.u
            }
    }

    function $(t) {
        var e = t < 1 ? Math.pow(10, (t + "").length - 2) : 1;
        return function (r) {
            return Math.floor(Math.round(parseFloat(r) / t) * t * e) / e + (s(r) ? 0 : G(r))
        }
    }

    function J(t, e) {
        var r, i, a = Ht(t);
        return !a && o(t) && (r = a = t.radius || Ut, t.values ? (t = ge(t.values), (i = !s(t[0])) && (r *= r)) : t = $(t.increment)), Q(e, a ? n(t) ? function (e) {
            return i = t(e), Math.abs(i - e) <= r ? i : e
        } : function (e) {
            for (var n, a, o = parseFloat(i ? e.x : e), u = parseFloat(i ? e.y : 0), h = Ut, l = 0, f = t.length; f--;)(n = i ? (n = t[f].x - o) * n + (a = t[f].y - u) * a : Math.abs(t[f] - o)) < h && (h = n, l = f);
            return l = !r || h <= r ? t[l] : e, i || l === e || s(e) ? l : l + G(e)
        } : $(t))
    }

    function K(t, e, r, i) {
        return Q(Ht(t) ? !e : !0 === r ? !!(r = 0) : !i, function () {
            return Ht(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t + Math.random() * (e - t)) / r) * r * i) / i
        })
    }

    function tt(t, e, r) {
        return Q(r, function (r) {
            return t[~~e(r)]
        })
    }

    function et(t) {
        for (var e, r, i, n, s = 0, a = ""; ~(e = t.indexOf("random(", s));) i = t.indexOf(")", e), n = "[" === t.charAt(e + 7), r = t.substr(e + 7, i - e - 7).match(n ? re : $t), a += t.substr(s, e - s) + K(n ? r : +r[0], n ? 0 : +r[1], +r[2] || 1e-5), s = i + 1;
        return a + t.substr(s, t.length - s)
    }

    function rt(t, e, r) {
        var i, n, s, a = t.labels,
            o = Ut;
        for (i in a)(n = a[i] - e) < 0 == !!r && n && o > (n = Math.abs(n)) && (s = i, o = n);
        return s
    }

    function it(t) {
        return R(t), t.progress() < 1 && ye(t, "onInterrupt"), t
    }

    function nt(t, e, r) {
        return (6 * (t = t < 0 ? t + 1 : 1 < t ? t - 1 : t) < 1 ? e + (r - e) * t * 6 : t < .5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * we + .5 | 0
    }

    function st(t, e, r) {
        var i, n, a, o, u, h, l, f, p, c, _ = t ? s(t) ? [t >> 16, t >> 8 & we, t & we] : 0 : Te.black;
        if (!_) {
            if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), Te[t]) _ = Te[t];
            else if ("#" === t.charAt(0)) 4 === t.length && (t = "#" + (i = t.charAt(1)) + i + (n = t.charAt(2)) + n + (a = t.charAt(3)) + a), _ = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & we, t & we];
            else if ("hsl" === t.substr(0, 3))
                if (_ = c = t.match($t), e) {
                    if (~t.indexOf("=")) return _ = t.match(Jt), r && _.length < 4 && (_[3] = 1), _
                } else o = +_[0] % 360 / 360, u = _[1] / 100, i = 2 * (h = _[2] / 100) - (n = h <= .5 ? h * (u + 1) : h + u - h * u), 3 < _.length && (_[3] *= 1), _[0] = nt(o + 1 / 3, i, n), _[1] = nt(o, i, n), _[2] = nt(o - 1 / 3, i, n);
            else _ = t.match($t) || Te.transparent;
            _ = _.map(Number)
        }
        return e && !c && (i = _[0] / we, n = _[1] / we, a = _[2] / we, h = ((l = Math.max(i, n, a)) + (f = Math.min(i, n, a))) / 2, l === f ? o = u = 0 : (p = l - f, u = .5 < h ? p / (2 - l - f) : p / (l + f), o = l === i ? (n - a) / p + (n < a ? 6 : 0) : l === n ? (a - i) / p + 2 : (i - n) / p + 4, o *= 60), _[0] = ~~(o + .5), _[1] = ~~(100 * u + .5), _[2] = ~~(100 * h + .5)), r && _.length < 4 && (_[3] = 1), _
    }

    function at(t) {
        var e = [],
            r = [],
            i = -1;
        return t.split(xe).forEach(function (t) {
            var n = t.match(Kt) || [];
            e.push.apply(e, n), r.push(i += n.length + 1)
        }), e.c = r, e
    }

    function ot(t, e, r) {
        var i, n, s, a, o = "",
            u = (t + o).match(xe),
            h = e ? "hsla(" : "rgba(",
            l = 0;
        if (!u) return t;
        if (u = u.map(function (t) {
                return (t = st(t, e, 1)) && h + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
            }), r && (s = at(t), (i = r.c).join(o) !== s.c.join(o)))
            for (a = (n = t.replace(xe, "1").split(Kt)).length - 1; l < a; l++) o += n[l] + (~i.indexOf(l) ? u.shift() || h + "0,0,0,0)" : (s.length ? s : u.length ? u : r).shift());
        if (!n)
            for (a = (n = t.split(xe)).length - 1; l < a; l++) o += n[l] + u[l];
        return o + n[a]
    }

    function ut(t) {
        var e, r = t.join(" ");
        if (xe.lastIndex = 0, xe.test(r)) return e = be.test(r), t[1] = ot(t[1], e), t[0] = ot(t[0], e, at(t[1])), !0
    }

    function ht(t, e) {
        for (var r, i = t._first; i;) i instanceof Le ? ht(i, e) : !i.vars.yoyoEase || i._yoyo && i._repeat || i._yoyo === e || (i.timeline ? ht(i.timeline, e) : (r = i._ease, i._ease = i._yEase, i._yEase = r, i._yoyo = e)), i = i._next
    }

    function lt(t, e, r, i) {
        void 0 === r && (r = function (t) {
            return 1 - e(1 - t)
        }), void 0 === i && (i = function (t) {
            return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
        });
        var n, s = {
            easeIn: e,
            easeOut: r,
            easeInOut: i
        };
        return y(t, function (t) {
            for (var e in ke[t] = ie[t] = s, ke[n = t.toLowerCase()] = r, s) ke[n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = ke[t + "." + e] = s[e]
        }), s
    }

    function ft(t) {
        return function (e) {
            return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t(2 * (e - .5)) / 2
        }
    }

    function pt(t, e, r) {
        function i(t) {
            return 1 === t ? 1 : n * Math.pow(2, -10 * t) * Wt((t - a) * s) + 1
        }
        var n = 1 <= e ? e : 1,
            s = (r || (t ? .3 : .45)) / (e < 1 ? e : 1),
            a = s / qt * (Math.asin(1 / n) || 0),
            o = "out" === t ? i : "in" === t ? function (t) {
                return 1 - i(1 - t)
            } : ft(i);
        return s = qt / s, o.config = function (e, r) {
            return pt(t, e, r)
        }, o
    }

    function ct(t, e) {
        function r(t) {
            return t ? --t * t * ((e + 1) * t + e) + 1 : 0
        }
        void 0 === e && (e = 1.70158);
        var i = "out" === t ? r : "in" === t ? function (t) {
            return 1 - r(1 - t)
        } : ft(r);
        return i.config = function (e) {
            return ct(t, e)
        }, i
    }
    var _t, dt, mt, gt, vt, yt, wt, Tt, xt, bt, Mt, Ot, kt, Ct, At, Dt, Pt, St, zt, Rt, Ft, Et, Bt, Lt, It, Yt = {
            autoSleep: 120,
            force3D: "auto",
            nullTargetWarn: 1,
            units: {
                lineHeight: ""
            }
        },
        Nt = {
            duration: .5,
            overwrite: !1,
            delay: 0
        },
        Ut = 1e8,
        Xt = 1 / Ut,
        qt = 2 * Math.PI,
        Vt = qt / 4,
        jt = 0,
        Qt = Math.sqrt,
        Gt = Math.cos,
        Wt = Math.sin,
        Zt = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function () {},
        Ht = Array.isArray,
        $t = /(?:-?\.?\d|\.)+/gi,
        Jt = /[-+=.]*\d+[.e\-+]*\d*[e\-\+]*\d*/g,
        Kt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        te = /[-+=.]*\d+(?:\.|e-|e)*\d*/gi,
        ee = /[+-]=-?[\.\d]+/,
        re = /[#\-+.]*\b[a-z\d-=+%.]+/gi,
        ie = {},
        ne = {},
        se = [],
        ae = {},
        oe = {},
        ue = {},
        he = 30,
        le = [],
        fe = "",
        pe = function (t, e) {
            for (var r in e) t[r] = e[r];
            return t
        },
        ce = function (t, e) {
            return (t /= e) && ~~t === t ? ~~t - 1 : ~~t
        },
        _e = {
            _start: 0,
            endTime: d
        },
        de = function (t, e, r) {
            return r < t ? t : e < r ? e : r
        },
        me = [].slice,
        ge = function (t, e) {
            return !i(t) || e || !mt && Oe() ? Ht(t) ? function (t, e, r) {
                return void 0 === r && (r = []), t.forEach(function (t) {
                    return i(t) && !e || W(t, 1) ? r.push.apply(r, ge(t)) : r.push(t)
                }) || r
            }(t, e) : W(t) ? me.call(t, 0) : t ? [t] : [] : me.call(gt.querySelectorAll(t), 0)
        },
        ve = function (t, e, r, i, n) {
            var s = e - t,
                a = i - r;
            return Q(n, function (e) {
                return r + ((e - t) / s * a || 0)
            })
        },
        ye = function (t, e, r) {
            var i, n, s = t.vars,
                a = s[e];
            if (a) return i = s[e + "Params"], n = s.callbackScope || t, r && se.length && b(), i ? a.apply(n, i) : a.call(n)
        },
        we = 255,
        Te = {
            aqua: [0, we, we],
            lime: [0, we, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, we],
            navy: [0, 0, 128],
            white: [we, we, we],
            olive: [128, 128, 0],
            yellow: [we, we, 0],
            orange: [we, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [we, 0, 0],
            pink: [we, 192, 203],
            cyan: [0, we, we],
            transparent: [we, we, we, 0]
        },
        xe = function () {
            var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
            for (t in Te) e += "|" + t + "\\b";
            return new RegExp(e + ")", "gi")
        }(),
        be = /hsl[a]?\(/,
        Me = (Dt = Date.now, Pt = 500, St = 33, zt = Dt(), Rt = zt, Et = Ft = 1e3 / 240, kt = {
            time: 0,
            frame: 0,
            tick: function () {
                Se(!0)
            },
            deltaRatio: function (t) {
                return Ct / (1e3 / (t || 60))
            },
            wake: function () {
                yt && (!mt && h() && (dt = mt = window, gt = dt.document || {}, ie.gsap = lr, (dt.gsapVersions || (dt.gsapVersions = [])).push(lr.version), f(vt || dt.GreenSockGlobals || !dt.gsap && dt || {}), Ot = dt.requestAnimationFrame), bt && kt.sleep(), Mt = Ot || function (t) {
                    return setTimeout(t, Et - 1e3 * kt.time + 1 | 0)
                }, xt = 1, Se(2))
            },
            sleep: function () {
                (Ot ? dt.cancelAnimationFrame : clearTimeout)(bt), xt = 0, Mt = d
            },
            lagSmoothing: function (t, e) {
                Pt = t || 1e8, St = Math.min(e, Pt, 0)
            },
            fps: function (t) {
                Ft = 1e3 / (t || 240), Et = 1e3 * kt.time + Ft
            },
            add: function (t) {
                Bt.indexOf(t) < 0 && Bt.push(t), Oe()
            },
            remove: function (t) {
                var e;
                ~(e = Bt.indexOf(t)) && Bt.splice(e, 1) && e <= At && At--
            },
            _listeners: Bt = []
        }),
        Oe = function () {
            return !xt && Me.wake()
        },
        ke = {},
        Ce = /^[\d.\-M][\d.\-,\s]/,
        Ae = /["']/g,
        De = function (t) {
            return function (e) {
                return 1 - t(1 - e)
            }
        },
        Pe = function (t, e) {
            return t && (n(t) ? t : ke[t] || function (t) {
                var e = (t + "").split("("),
                    r = ke[e[0]];
                return r && 1 < e.length && r.config ? r.config.apply(null, ~t.indexOf("{") ? [function (t) {
                    for (var e, r, i, n = {}, s = t.substr(1, t.length - 3).split(":"), a = s[0], o = 1, u = s.length; o < u; o++) r = s[o], e = o !== u - 1 ? r.lastIndexOf(",") : r.length, i = r.substr(0, e), n[a] = isNaN(i) ? i.replace(Ae, "").trim() : +i, a = r.substr(e + 1).trim();
                    return n
                }(e[1])] : function (t) {
                    var e = t.indexOf("(") + 1,
                        r = t.indexOf(")"),
                        i = t.indexOf("(", e);
                    return t.substring(e, ~i && i < r ? t.indexOf(")", r + 1) : r)
                }(t).split(",").map(O)) : ke._CE && Ce.test(t) ? ke._CE("", t) : r
            }(t)) || e
        };

    function Se(t) {
        var e, r, i, n, s = Dt() - Rt,
            a = !0 === t;
        if (Pt < s && (zt += s - St), (0 < (e = (i = (Rt += s) - zt) - Et) || a) && (n = ++kt.frame, Ct = i - 1e3 * kt.time, kt.time = i /= 1e3, Et += e + (Ft <= e ? 4 : Ft - e), r = 1), a || (bt = Mt(Se)), r)
            for (At = 0; At < Bt.length; At++) Bt[At](i, Ct, n, t)
    }

    function ze(t) {
        return t < It ? Lt * t * t : t < .7272727272727273 ? Lt * Math.pow(t - 1.5 / 2.75, 2) + .75 : t < .9090909090909092 ? Lt * (t -= 2.25 / 2.75) * t + .9375 : Lt * Math.pow(t - 2.625 / 2.75, 2) + .984375
    }
    y("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
        var r = e < 5 ? e + 1 : e;
        lt(t + ",Power" + (r - 1), e ? function (t) {
            return Math.pow(t, r)
        } : function (t) {
            return t
        }, function (t) {
            return 1 - Math.pow(1 - t, r)
        }, function (t) {
            return t < .5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow(2 * (1 - t), r) / 2
        })
    }), ke.Linear.easeNone = ke.none = ke.Linear.easeIn, lt("Elastic", pt("in"), pt("out"), pt()), Lt = 7.5625, It = 1 / 2.75, lt("Bounce", function (t) {
        return 1 - ze(1 - t)
    }, ze), lt("Expo", function (t) {
        return t ? Math.pow(2, 10 * (t - 1)) : 0
    }), lt("Circ", function (t) {
        return -(Qt(1 - t * t) - 1)
    }), lt("Sine", function (t) {
        return 1 === t ? 1 : 1 - Gt(t * Vt)
    }), lt("Back", ct("in"), ct("out"), ct()), ke.SteppedEase = ke.steps = ie.SteppedEase = {
        config: function (t, e) {
            void 0 === t && (t = 1);
            var r = 1 / t,
                i = t + (e ? 0 : 1),
                n = e ? 1 : 0;
            return function (t) {
                return ((i * de(0, .99999999, t) | 0) + n) * r
            }
        }
    }, Nt.ease = ke["quad.out"], y("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (t) {
        return fe += t + "," + t + "Params,"
    });
    var Re, Fe = function (t, e) {
            this.id = jt++, (t._gsap = this).target = t, this.harness = e, this.get = e ? e.get : v, this.set = e ? e.getSetter : $e
        },
        Ee = ((Re = Be.prototype).delay = function (t) {
            return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay
        }, Re.duration = function (t) {
            return arguments.length ? this.totalDuration(0 < this._repeat ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
        }, Re.totalDuration = function (t) {
            return arguments.length ? (this._dirty = 0, q(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
        }, Re.totalTime = function (t, e) {
            if (Oe(), !arguments.length) return this._tTime;
            var r = this._dp;
            if (r && r.smoothChildTiming && this._ts) {
                for (I(this, t); r.parent;) r.parent._time !== r._start + (0 <= r._ts ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0), r = r.parent;
                !this.parent && this._dp.autoRemoveChildren && (0 < this._ts && t < this._tDur || this._ts < 0 && 0 < t || !this._tDur && !t) && N(this._dp, this, this._start - this._delay)
            }
            return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === Xt || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), M(this, t, e)), this
        }, Re.time = function (t, e) {
            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + E(this)) % this._dur || (t ? this._dur : 0), e) : this._time
        }, Re.totalProgress = function (t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
        }, Re.progress = function (t, e) {
            return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + E(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
        }, Re.iteration = function (t, e) {
            var r = this.duration() + this._rDelay;
            return arguments.length ? this.totalTime(this._time + (t - 1) * r, e) : this._repeat ? ce(this._tTime, r) + 1 : 1
        }, Re.timeScale = function (t) {
            if (!arguments.length) return this._rts === -Xt ? 0 : this._rts;
            if (this._rts === t) return this;
            var e = this.parent && this._ts ? B(this.parent._time, this) : this._tTime;
            return this._rts = +t || 0, this._ts = this._ps || t === -Xt ? 0 : this._rts,
                function (t) {
                    for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
                    return t
                }(this.totalTime(de(-this._delay, this._tDur, e), !0))
        }, Re.paused = function (t) {
            return arguments.length ? (this._ps !== t && ((this._ps = t) ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Oe(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && (this._tTime -= Xt) && Math.abs(this._zTime) !== Xt))), this) : this._ps
        }, Re.startTime = function (t) {
            if (arguments.length) {
                this._start = t;
                var e = this.parent || this._dp;
                return !e || !e._sort && this.parent || N(e, this, t - this._delay), this
            }
            return this._start
        }, Re.endTime = function (t) {
            return this._start + (u(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts)
        }, Re.rawTime = function (t) {
            var e = this.parent || this._dp;
            return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? B(e.rawTime(t), this) : this._tTime : this._tTime
        }, Re.globalTime = function (t) {
            for (var e = this, r = arguments.length ? t : e.rawTime(); e;) r = e._start + r / (e._ts || 1), e = e._dp;
            return r
        }, Re.repeat = function (t) {
            return arguments.length ? (this._repeat = t, V(this)) : this._repeat
        }, Re.repeatDelay = function (t) {
            return arguments.length ? (this._rDelay = t, V(this)) : this._rDelay
        }, Re.yoyo = function (t) {
            return arguments.length ? (this._yoyo = t, this) : this._yoyo
        }, Re.seek = function (t, e) {
            return this.totalTime(j(this, t), u(e))
        }, Re.restart = function (t, e) {
            return this.play().totalTime(t ? -this._delay : 0, u(e))
        }, Re.play = function (t, e) {
            return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
        }, Re.reverse = function (t, e) {
            return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
        }, Re.pause = function (t, e) {
            return null != t && this.seek(t, e), this.paused(!0)
        }, Re.resume = function () {
            return this.paused(!1)
        }, Re.reversed = function (t) {
            return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -Xt : 0)), this) : this._rts < 0
        }, Re.invalidate = function () {
            return this._initted = 0, this._zTime = -Xt, this
        }, Re.isActive = function () {
            var t, e = this.parent || this._dp,
                r = this._start;
            return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= r && t < this.endTime(!0) - Xt))
        }, Re.eventCallback = function (t, e, r) {
            var i = this.vars;
            return 1 < arguments.length ? (e ? (i[t] = e, r && (i[t + "Params"] = r), "onUpdate" === t && (this._onUpdate = e)) : delete i[t], this) : i[t]
        }, Re.then = function (t) {
            var e = this;
            return new Promise(function (r) {
                function i() {
                    var t = e.then;
                    e.then = null, n(s) && (s = s(e)) && (s.then || s === e) && (e.then = t), r(s), e.then = t
                }
                var s = n(t) ? t : k;
                e._initted && 1 === e.totalProgress() && 0 <= e._ts || !e._tTime && e._ts < 0 ? i() : e._prom = i
            })
        }, Re.kill = function () {
            it(this)
        }, Be);

    function Be(t, e) {
        var r = t.parent || _t;
        this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, q(this, +t.duration, 1, 1), this.data = t.data, xt || Me.wake(), r && N(r, this, e || 0 === e ? e : r._time, 1), t.reversed && this.reverse(), t.paused && this.paused(!0)
    }
    C(Ee.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -Xt,
        _prom: 0,
        _ps: !1,
        _rts: 1
    });
    var Le = function (t) {
        function a(e, i) {
            var n;
            return void 0 === e && (e = {}), (n = t.call(this, e, i) || this).labels = {}, n.smoothChildTiming = !!e.smoothChildTiming, n.autoRemoveChildren = !!e.autoRemoveChildren, n._sort = u(e.sortChildren), n.parent && Y(n.parent, r(n)), e.scrollTrigger && U(r(n), e.scrollTrigger), n
        }
        e(a, t);
        var o = a.prototype;
        return o.to = function (t, e, r, i) {
            return new je(t, x(arguments, 0, this), j(this, s(e) ? i : r)), this
        }, o.from = function (t, e, r, i) {
            return new je(t, x(arguments, 1, this), j(this, s(e) ? i : r)), this
        }, o.fromTo = function (t, e, r, i, n) {
            return new je(t, x(arguments, 2, this), j(this, s(e) ? n : i)), this
        }, o.set = function (t, e, r) {
            return e.duration = 0, e.parent = this, S(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new je(t, e, j(this, r), 1), this
        }, o.call = function (t, e, r) {
            return N(this, je.delayedCall(0, t, e), j(this, r))
        }, o.staggerTo = function (t, e, r, i, n, s, a) {
            return r.duration = e, r.stagger = r.stagger || i, r.onComplete = s, r.onCompleteParams = a, r.parent = this, new je(t, r, j(this, n)), this
        }, o.staggerFrom = function (t, e, r, i, n, s, a) {
            return r.runBackwards = 1, S(r).immediateRender = u(r.immediateRender), this.staggerTo(t, e, r, i, n, s, a)
        }, o.staggerFromTo = function (t, e, r, i, n, s, a, o) {
            return i.startAt = r, S(i).immediateRender = u(i.immediateRender), this.staggerTo(t, e, i, n, s, a, o)
        }, o.render = function (t, e, r) {
            var i, n, s, a, o, u, h, l, f, p, c, _, d = this._time,
                m = this._dirty ? this.totalDuration() : this._tDur,
                g = this._dur,
                v = this !== _t && m - Xt < t && 0 <= t ? m : t < Xt ? 0 : t,
                y = this._zTime < 0 != t < 0 && (this._initted || !g);
            if (v !== this._tTime || r || y) {
                if (d !== this._time && g && (v += this._time - d, t += this._time - d), i = v, f = this._start, u = !(l = this._ts), y && (g || (d = this._zTime), !t && e || (this._zTime = t)), this._repeat && (c = this._yoyo, i = w(v % (o = g + this._rDelay)), v === m ? (a = this._repeat, i = g) : ((a = ~~(v / o)) && a === v / o && (i = g, a--), g < i && (i = g)), p = ce(this._tTime, o), !d && this._tTime && p !== a && (p = a), c && 1 & a && (i = g - i, _ = 1), a !== p && !this._lock)) {
                    var T = c && 1 & p,
                        x = T === (c && 1 & a);
                    if (a < p && (T = !T), d = T ? 0 : g, this._lock = 1, this.render(d || (_ ? 0 : w(a * o)), e, !g)._lock = 0, !e && this.parent && ye(this, "onRepeat"), this.vars.repeatRefresh && !_ && (this.invalidate()._lock = 1), d !== this._time || u != !this._ts) return this;
                    if (g = this._dur, m = this._tDur, x && (this._lock = 2, d = T ? g : -1e-4, this.render(d, !0), this.vars.repeatRefresh && !_ && this.invalidate()), this._lock = 0, !this._ts && !u) return this;
                    ht(this, _)
                }
                if (this._hasPause && !this._forcing && this._lock < 2 && (h = function (t, e, r) {
                        var i;
                        if (e < r)
                            for (i = t._first; i && i._start <= r;) {
                                if (!i._dur && "isPause" === i.data && i._start > e) return i;
                                i = i._next
                            } else
                                for (i = t._last; i && i._start >= r;) {
                                    if (!i._dur && "isPause" === i.data && i._start < e) return i;
                                    i = i._prev
                                }
                    }(this, w(d), w(i))) && (v -= i - (i = h._start)), this._tTime = v, this._time = i, this._act = !l, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t), d || !i || e || ye(this, "onStart"), d <= i && 0 <= t)
                    for (n = this._first; n;) {
                        if (s = n._next, (n._act || i >= n._start) && n._ts && h !== n) {
                            if (n.parent !== this) return this.render(t, e, r);
                            if (n.render(0 < n._ts ? (i - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (i - n._start) * n._ts, e, r), i !== this._time || !this._ts && !u) {
                                h = 0, s && (v += this._zTime = -Xt);
                                break
                            }
                        }
                        n = s
                    } else {
                        n = this._last;
                        for (var b = t < 0 ? t : i; n;) {
                            if (s = n._prev, (n._act || b <= n._end) && n._ts && h !== n) {
                                if (n.parent !== this) return this.render(t, e, r);
                                if (n.render(0 < n._ts ? (b - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (b - n._start) * n._ts, e, r), i !== this._time || !this._ts && !u) {
                                    h = 0, s && (v += this._zTime = b ? -Xt : Xt);
                                    break
                                }
                            }
                            n = s
                        }
                    }
                if (h && !e && (this.pause(), h.render(d <= i ? 0 : -Xt)._zTime = d <= i ? 1 : -1, this._ts)) return this._start = f, L(this), this.render(t, e, r);
                this._onUpdate && !e && ye(this, "onUpdate", !0), (v === m && m >= this.totalDuration() || !v && d) && (f !== this._start && Math.abs(l) === Math.abs(this._ts) || this._lock || (!t && g || !(v === m && 0 < this._ts || !v && this._ts < 0) || R(this, 1), e || t < 0 && !d || !v && !d || (ye(this, v === m ? "onComplete" : "onReverseComplete", !0), !this._prom || v < m && 0 < this.timeScale() || this._prom())))
            }
            return this
        }, o.add = function (t, e) {
            var r = this;
            if (s(e) || (e = j(this, e)), !(t instanceof Ee)) {
                if (Ht(t)) return t.forEach(function (t) {
                    return r.add(t, e)
                }), this;
                if (i(t)) return this.addLabel(t, e);
                if (!n(t)) return this;
                t = je.delayedCall(0, t)
            }
            return this !== t ? N(this, t, e) : this
        }, o.getChildren = function (t, e, r, i) {
            void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === r && (r = !0), void 0 === i && (i = -Ut);
            for (var n = [], s = this._first; s;) s._start >= i && (s instanceof je ? e && n.push(s) : (r && n.push(s), t && n.push.apply(n, s.getChildren(!0, e, r)))), s = s._next;
            return n
        }, o.getById = function (t) {
            for (var e = this.getChildren(1, 1, 1), r = e.length; r--;)
                if (e[r].vars.id === t) return e[r]
        }, o.remove = function (t) {
            return i(t) ? this.removeLabel(t) : n(t) ? this.killTweensOf(t) : (z(this, t), t === this._recent && (this._recent = this._last), F(this))
        }, o.totalTime = function (e, r) {
            return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = w(Me.time - (0 < this._ts ? e / this._ts : (this.totalDuration() - e) / -this._ts))), t.prototype.totalTime.call(this, e, r), this._forcing = 0, this) : this._tTime
        }, o.addLabel = function (t, e) {
            return this.labels[t] = j(this, e), this
        }, o.removeLabel = function (t) {
            return delete this.labels[t], this
        }, o.addPause = function (t, e, r) {
            var i = je.delayedCall(0, e || d, r);
            return i.data = "isPause", this._hasPause = 1, N(this, i, j(this, t))
        }, o.removePause = function (t) {
            var e = this._first;
            for (t = j(this, t); e;) e._start === t && "isPause" === e.data && R(e), e = e._next
        }, o.killTweensOf = function (t, e, r) {
            for (var i = this.getTweensOf(t, r), n = i.length; n--;) Ye !== i[n] && i[n].kill(t, e);
            return this
        }, o.getTweensOf = function (t, e) {
            for (var r, i = [], n = ge(t), a = this._first, o = s(e); a;) a instanceof je ? T(a._targets, n) && (o ? (!Ye || a._initted && a._ts) && a.globalTime(0) <= e && a.globalTime(a.totalDuration()) > e : !e || a.isActive()) && i.push(a) : (r = a.getTweensOf(n, e)).length && i.push.apply(i, r), a = a._next;
            return i
        }, o.tweenTo = function (t, e) {
            e = e || {};
            var r = this,
                i = j(r, t),
                n = e.startAt,
                s = e.onStart,
                a = e.onStartParams,
                o = je.to(r, C(e, {
                    ease: "none",
                    lazy: !1,
                    time: i,
                    overwrite: "auto",
                    duration: e.duration || Math.abs((i - (n && "time" in n ? n.time : r._time)) / r.timeScale()) || Xt,
                    onStart: function () {
                        r.pause();
                        var t = e.duration || Math.abs((i - r._time) / r.timeScale());
                        o._dur !== t && q(o, t, 0, 1).render(o._time, !0, !0), s && s.apply(o, a || [])
                    }
                }));
            return o
        }, o.tweenFromTo = function (t, e, r) {
            return this.tweenTo(e, C({
                startAt: {
                    time: j(this, t)
                }
            }, r))
        }, o.recent = function () {
            return this._recent
        }, o.nextLabel = function (t) {
            return void 0 === t && (t = this._time), rt(this, j(this, t))
        }, o.previousLabel = function (t) {
            return void 0 === t && (t = this._time), rt(this, j(this, t), 1)
        }, o.currentLabel = function (t) {
            return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + Xt)
        }, o.shiftChildren = function (t, e, r) {
            void 0 === r && (r = 0);
            for (var i, n = this._first, s = this.labels; n;) n._start >= r && (n._start += t, n._end += t), n = n._next;
            if (e)
                for (i in s) s[i] >= r && (s[i] += t);
            return F(this)
        }, o.invalidate = function () {
            var e = this._first;
            for (this._lock = 0; e;) e.invalidate(), e = e._next;
            return t.prototype.invalidate.call(this)
        }, o.clear = function (t) {
            void 0 === t && (t = !0);
            for (var e, r = this._first; r;) e = r._next, this.remove(r), r = e;
            return this._time = this._tTime = this._pTime = 0, t && (this.labels = {}), F(this)
        }, o.totalDuration = function (t) {
            var e, r, i, n = 0,
                s = this,
                a = s._last,
                o = Ut;
            if (arguments.length) return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -t : t));
            if (s._dirty) {
                for (i = s.parent; a;) e = a._prev, a._dirty && a.totalDuration(), o < (r = a._start) && s._sort && a._ts && !s._lock ? (s._lock = 1, N(s, a, r - a._delay, 1)._lock = 0) : o = r, r < 0 && a._ts && (n -= r, (!i && !s._dp || i && i.smoothChildTiming) && (s._start += r / s._ts, s._time -= r, s._tTime -= r), s.shiftChildren(-r, !1, -1 / 0), o = 0), a._end > n && a._ts && (n = a._end), a = e;
                q(s, s === _t && s._time > n ? s._time : n, 1, 1), s._dirty = 0
            }
            return s._tDur
        }, a.updateRoot = function (t) {
            if (_t._ts && (M(_t, B(t, _t)), wt = Me.frame), Me.frame >= he) {
                he += Yt.autoSleep || 120;
                var e = _t._first;
                if ((!e || !e._ts) && Yt.autoSleep && Me._listeners.length < 2) {
                    for (; e && !e._ts;) e = e._next;
                    e || Me.sleep()
                }
            }
        }, a
    }(Ee);

    function Ie(t, e, r, s, a, u) {
        var h, l, f, p;
        if (oe[t] && !1 !== (h = new oe[t]).init(a, h.rawVars ? e[t] : function (t, e, r, s, a) {
                if (n(t) && (t = Xe(t, a, e, r, s)), !o(t) || t.style && t.nodeType || Ht(t) || Zt(t)) return i(t) ? Xe(t, a, e, r, s) : t;
                var u, h = {};
                for (u in t) h[u] = Xe(t[u], a, e, r, s);
                return h
            }(e[t], s, a, u, r), r, s, u) && (r._pt = l = new sr(r._pt, a, t, 0, 1, h.render, h, 0, h.priority), r !== Tt))
            for (f = r._ptLookup[r._targets.indexOf(a)], p = h._props.length; p--;) f[h._props[p]] = l;
        return h
    }
    C(Le.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
    });
    var Ye, Ne = function (t, e, r, s, a, o, u, h, l) {
            n(s) && (s = s(a || 0, t, o));
            var f, c = t[e],
                _ = "get" !== r ? r : n(c) ? l ? t[e.indexOf("set") || !n(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](l) : t[e]() : c,
                d = n(c) ? l ? He : Ze : We;
            if (i(s) && (~s.indexOf("random(") && (s = et(s)), "=" === s.charAt(1) && (s = parseFloat(_) + parseFloat(s.substr(2)) * ("-" === s.charAt(0) ? -1 : 1) + (G(_) || 0))), _ !== s) return isNaN(_ * s) ? (c || e in t || p(e, s), function (t, e, r, i, n, s, a) {
                var o, u, h, l, f, p, c, _, d = new sr(this._pt, t, e, 0, 1, tr, null, n),
                    m = 0,
                    g = 0;
                for (d.b = r, d.e = i, r += "", (c = ~(i += "").indexOf("random(")) && (i = et(i)), s && (s(_ = [r, i], t, e), r = _[0], i = _[1]), u = r.match(te) || []; o = te.exec(i);) l = o[0], f = i.substring(m, o.index), h ? h = (h + 1) % 5 : "rgba(" === f.substr(-5) && (h = 1), l !== u[g++] && (p = parseFloat(u[g - 1]) || 0, d._pt = {
                    _next: d._pt,
                    p: f || 1 === g ? f : ",",
                    s: p,
                    c: "=" === l.charAt(1) ? parseFloat(l.substr(2)) * ("-" === l.charAt(0) ? -1 : 1) : parseFloat(l) - p,
                    m: h && h < 4 ? Math.round : 0
                }, m = te.lastIndex);
                return d.c = m < i.length ? i.substring(m, i.length) : "", d.fp = a, (ee.test(i) || c) && (d.e = 0), this._pt = d
            }.call(this, t, e, _, s, d, h || Yt.stringFilter, l)) : (f = new sr(this._pt, t, e, +_ || 0, s - (_ || 0), "boolean" == typeof c ? Ke : Je, 0, d), l && (f.fp = l), u && f.modifier(u, this, t), this._pt = f)
        },
        Ue = function t(e, r) {
            var i, n, s, a, o, h, l, f, p, c, _, d, v, y = e.vars,
                w = y.ease,
                T = y.startAt,
                x = y.immediateRender,
                M = y.lazy,
                O = y.onUpdate,
                k = y.onUpdateParams,
                A = y.callbackScope,
                D = y.runBackwards,
                S = y.yoyoEase,
                z = y.keyframes,
                F = y.autoRevert,
                E = e._dur,
                B = e._startAt,
                L = e._targets,
                I = e.parent,
                Y = I && "nested" === I.data ? I.parent._targets : L,
                N = "auto" === e._overwrite,
                U = e.timeline;
            if (!U || z && w || (w = "none"), e._ease = Pe(w, Nt.ease), e._yEase = S ? De(Pe(!0 === S ? w : S, Nt.ease)) : 0, S && e._yoyo && !e._repeat && (S = e._yEase, e._yEase = e._ease, e._ease = S), !U) {
                if (d = (f = L[0] ? g(L[0]).harness : 0) && y[f.prop], i = P(y, ne), B && B.render(-1, !0).kill(), T) {
                    if (R(e._startAt = je.set(L, C({
                            data: "isStart",
                            overwrite: !1,
                            parent: I,
                            immediateRender: !0,
                            lazy: u(M),
                            startAt: null,
                            delay: 0,
                            onUpdate: O,
                            onUpdateParams: k,
                            callbackScope: A,
                            stagger: 0
                        }, T))), x)
                        if (0 < r) F || (e._startAt = 0);
                        else if (E && !(r < 0 && B)) return void(r && (e._zTime = r))
                } else if (D && E)
                    if (B) F || (e._startAt = 0);
                    else if (r && (x = !1), s = C({
                        overwrite: !1,
                        data: "isFromStart",
                        lazy: x && u(M),
                        immediateRender: x,
                        stagger: 0,
                        parent: I
                    }, i), d && (s[f.prop] = d), R(e._startAt = je.set(L, s)), x) {
                    if (!r) return
                } else t(e._startAt, Xt);
                for (e._pt = 0, M = E && u(M) || M && !E, n = 0; n < L.length; n++) {
                    if (l = (o = L[n])._gsap || m(L)[n]._gsap, e._ptLookup[n] = c = {}, ae[l.id] && se.length && b(), _ = Y === L ? n : Y.indexOf(o), f && !1 !== (p = new f).init(o, d || i, e, _, Y) && (e._pt = a = new sr(e._pt, o, p.name, 0, 1, p.render, p, 0, p.priority), p._props.forEach(function (t) {
                            c[t] = a
                        }), p.priority && (h = 1)), !f || d)
                        for (s in i) oe[s] && (p = Ie(s, i, e, _, o, Y)) ? p.priority && (h = 1) : c[s] = a = Ne.call(e, o, s, "get", i[s], _, Y, 0, y.stringFilter);
                    e._op && e._op[n] && e.kill(o, e._op[n]), N && e._pt && (Ye = e, _t.killTweensOf(o, c, e.globalTime(0)), v = !e.parent, Ye = 0), e._pt && M && (ae[l.id] = 1)
                }
                h && nr(e), e._onInit && e._onInit(e)
            }
            e._from = !U && !!y.runBackwards, e._onUpdate = O, e._initted = (!e._op || e._pt) && !v
        },
        Xe = function (t, e, r, s, a) {
            return n(t) ? t.call(e, r, s, a) : i(t) && ~t.indexOf("random(") ? et(t) : t
        },
        qe = fe + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
        Ve = (qe + ",id,stagger,delay,duration,paused,scrollTrigger").split(","),
        je = function (t) {
            function n(e, i, n, a) {
                var h;
                "number" == typeof i && (n.duration = i, i = n, n = null);
                var f, p, _, g, v, y, T, x, b = (h = t.call(this, a ? i : S(i), n) || this).vars,
                    M = b.duration,
                    O = b.delay,
                    k = b.immediateRender,
                    A = b.stagger,
                    D = b.overwrite,
                    P = b.keyframes,
                    z = b.defaults,
                    R = b.scrollTrigger,
                    F = b.yoyoEase,
                    E = h.parent,
                    B = (Ht(e) || Zt(e) ? s(e[0]) : "length" in i) ? [e] : ge(e);
                if (h._targets = B.length ? m(B) : c("GSAP target " + e + " not found. https://greensock.com", !Yt.nullTargetWarn) || [], h._ptLookup = [], h._overwrite = D, P || A || l(M) || l(O)) {
                    if (i = h.vars, (f = h.timeline = new Le({
                            data: "nested",
                            defaults: z || {}
                        })).kill(), f.parent = r(h), P) C(f.vars.defaults, {
                        ease: "none"
                    }), P.forEach(function (t) {
                        return f.to(B, t, ">")
                    });
                    else {
                        if (g = B.length, T = A ? H(A) : d, o(A))
                            for (v in A) ~qe.indexOf(v) && ((x = x || {})[v] = A[v]);
                        for (p = 0; p < g; p++) {
                            for (v in _ = {}, i) Ve.indexOf(v) < 0 && (_[v] = i[v]);
                            _.stagger = 0, F && (_.yoyoEase = F), x && pe(_, x), y = B[p], _.duration = +Xe(M, r(h), p, y, B), _.delay = (+Xe(O, r(h), p, y, B) || 0) - h._delay, !A && 1 === g && _.delay && (h._delay = O = _.delay, h._start += O, _.delay = 0), f.to(y, _, T(p, y, B))
                        }
                        f.duration() ? M = O = 0 : h.timeline = 0
                    }
                    M || h.duration(M = f.duration())
                } else h.timeline = 0;
                return !0 === D && (Ye = r(h), _t.killTweensOf(B), Ye = 0), E && Y(E, r(h)), (k || !M && !P && h._start === w(E._time) && u(k) && function t(e) {
                    return !e || e._ts && t(e.parent)
                }(r(h)) && "nested" !== E.data) && (h._tTime = -Xt, h.render(Math.max(0, -O))), R && U(r(h), R), h
            }
            e(n, t);
            var a = n.prototype;
            return a.render = function (t, e, r) {
                var i, n, s, a, o, u, h, l, f, p = this._time,
                    c = this._tDur,
                    _ = this._dur,
                    d = c - Xt < t && 0 <= t ? c : t < Xt ? 0 : t;
                if (_) {
                    if (d !== this._tTime || !t || r || this._startAt && this._zTime < 0 != t < 0) {
                        if (i = d, l = this.timeline, this._repeat) {
                            if (i = w(d % (a = _ + this._rDelay)), d === c ? (s = this._repeat, i = _) : ((s = ~~(d / a)) && s === d / a && (i = _, s--), _ < i && (i = _)), (u = this._yoyo && 1 & s) && (f = this._yEase, i = _ - i), o = ce(this._tTime, a), i === p && !r && this._initted) return this;
                            s !== o && (l && this._yEase && ht(l, u), !this.vars.repeatRefresh || u || this._lock || (this._lock = r = 1, this.render(w(a * s), !0).invalidate()._lock = 0))
                        }
                        if (!this._initted) {
                            if (X(this, t < 0 ? t : i, r, e)) return this._tTime = 0, this;
                            if (_ !== this._dur) return this.render(t, e, r)
                        }
                        for (this._tTime = d, this._time = i, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = h = (f || this._ease)(i / _), this._from && (this.ratio = h = 1 - h), !i || p || e || ye(this, "onStart"), n = this._pt; n;) n.r(h, n.d), n = n._next;
                        l && l.render(t < 0 ? t : !i && u ? -Xt : l._dur * h, e, r) || this._startAt && (this._zTime = t), this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, r), ye(this, "onUpdate")), this._repeat && s !== o && this.vars.onRepeat && !e && this.parent && ye(this, "onRepeat"), d !== this._tDur && d || this._tTime !== d || (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, !0), !t && _ || !(d === this._tDur && 0 < this._ts || !d && this._ts < 0) || R(this, 1), e || t < 0 && !p || !d && !p || (ye(this, d === c ? "onComplete" : "onReverseComplete", !0), !this._prom || d < c && 0 < this.timeScale() || this._prom()))
                    }
                } else ! function (t, e, r, i) {
                    var n, s, a = t.ratio,
                        o = e < 0 || !e && a && !t._start && t._zTime > Xt && !t._dp._lock || (t._ts < 0 || t._dp._ts < 0) && "isFromStart" !== t.data && "isStart" !== t.data ? 0 : 1,
                        u = t._rDelay,
                        h = 0;
                    if (u && t._repeat && (h = de(0, t._tDur, e), ce(h, u) !== (s = ce(t._tTime, u)) && (a = 1 - o, t.vars.repeatRefresh && t._initted && t.invalidate())), o !== a || i || t._zTime === Xt || !e && t._zTime) {
                        if (!t._initted && X(t, e, i, r)) return;
                        for (s = t._zTime, t._zTime = e || (r ? Xt : 0), r = r || e && !s, t.ratio = o, t._from && (o = 1 - o), t._time = 0, t._tTime = h, r || ye(t, "onStart"), n = t._pt; n;) n.r(o, n.d), n = n._next;
                        t._startAt && e < 0 && t._startAt.render(e, !0, !0), t._onUpdate && !r && ye(t, "onUpdate"), h && t._repeat && !r && t.parent && ye(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === o && (o && R(t, 1), r || (ye(t, o ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
                    } else t._zTime || (t._zTime = e)
                }(this, t, e, r);
                return this
            }, a.targets = function () {
                return this._targets
            }, a.invalidate = function () {
                return this._pt = this._op = this._startAt = this._onUpdate = this._act = this._lazy = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(), t.prototype.invalidate.call(this)
            }, a.kill = function (t, e) {
                if (void 0 === e && (e = "all"), !(t || e && "all" !== e) && (this._lazy = 0, this.parent)) return it(this);
                if (this.timeline) {
                    var r = this.timeline.totalDuration();
                    return this.timeline.killTweensOf(t, e, Ye && !0 !== Ye.vars.overwrite)._first || it(this), this.parent && r !== this.timeline.totalDuration() && q(this, this._dur * this.timeline._tDur / r, 0, 1), this
                }
                var n, s, a, o, u, h, l, f = this._targets,
                    p = t ? ge(t) : f,
                    c = this._ptLookup,
                    _ = this._pt;
                if ((!e || "all" === e) && function (t, e) {
                        for (var r = t.length, i = r === e.length; i && r-- && t[r] === e[r];);
                        return r < 0
                    }(f, p)) return "all" === e && (this._pt = 0), it(this);
                for (n = this._op = this._op || [], "all" !== e && (i(e) && (u = {}, y(e, function (t) {
                        return u[t] = 1
                    }), e = u), e = function (t, e) {
                        var r, i, n, s, a = t[0] ? g(t[0]).harness : 0,
                            o = a && a.aliases;
                        if (!o) return e;
                        for (i in r = pe({}, e), o)
                            if (i in r)
                                for (n = (s = o[i].split(",")).length; n--;) r[s[n]] = r[i];
                        return r
                    }(f, e)), l = f.length; l--;)
                    if (~p.indexOf(f[l]))
                        for (u in s = c[l], "all" === e ? (n[l] = e, o = s, a = {}) : (a = n[l] = n[l] || {}, o = e), o)(h = s && s[u]) && ("kill" in h.d && !0 !== h.d.kill(u) || z(this, h, "_pt"), delete s[u]), "all" !== a && (a[u] = 1);
                return this._initted && !this._pt && _ && it(this), this
            }, n.to = function (t, e, r) {
                return new n(t, e, r)
            }, n.from = function (t, e) {
                return new n(t, x(arguments, 1))
            }, n.delayedCall = function (t, e, r, i) {
                return new n(e, 0, {
                    immediateRender: !1,
                    lazy: !1,
                    overwrite: !1,
                    delay: t,
                    onComplete: e,
                    onReverseComplete: e,
                    onCompleteParams: r,
                    onReverseCompleteParams: r,
                    callbackScope: i
                })
            }, n.fromTo = function (t, e, r) {
                return new n(t, x(arguments, 2))
            }, n.set = function (t, e) {
                return e.duration = 0, e.repeatDelay || (e.repeat = 0), new n(t, e)
            }, n.killTweensOf = function (t, e, r) {
                return _t.killTweensOf(t, e, r)
            }, n
        }(Ee);

    function Qe(t, e, r) {
        return t.setAttribute(e, r)
    }

    function Ge(t, e, r, i) {
        i.mSet(t, e, i.m.call(i.tween, r, i.mt), i)
    }
    C(je.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
    }), y("staggerTo,staggerFrom,staggerFromTo", function (t) {
        je[t] = function () {
            var e = new Le,
                r = me.call(arguments, 0);
            return r.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, r)
        }
    });
    var We = function (t, e, r) {
            return t[e] = r
        },
        Ze = function (t, e, r) {
            return t[e](r)
        },
        He = function (t, e, r, i) {
            return t[e](i.fp, r)
        },
        $e = function (t, e) {
            return n(t[e]) ? Ze : a(t[e]) && t.setAttribute ? Qe : We
        },
        Je = function (t, e) {
            return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4, e)
        },
        Ke = function (t, e) {
            return e.set(e.t, e.p, !!(e.s + e.c * t), e)
        },
        tr = function (t, e) {
            var r = e._pt,
                i = "";
            if (!t && e.b) i = e.b;
            else if (1 === t && e.e) i = e.e;
            else {
                for (; r;) i = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round(1e4 * (r.s + r.c * t)) / 1e4) + i, r = r._next;
                i += e.c
            }
            e.set(e.t, e.p, i, e)
        },
        er = function (t, e) {
            for (var r = e._pt; r;) r.r(t, r.d), r = r._next
        },
        rr = function (t, e, r, i) {
            for (var n, s = this._pt; s;) n = s._next, s.p === i && s.modifier(t, e, r), s = n
        },
        ir = function (t) {
            for (var e, r, i = this._pt; i;) r = i._next, i.p === t && !i.op || i.op === t ? z(this, i, "_pt") : i.dep || (e = 1), i = r;
            return !e
        },
        nr = function (t) {
            for (var e, r, i, n, s = t._pt; s;) {
                for (e = s._next, r = i; r && r.pr > s.pr;) r = r._next;
                (s._prev = r ? r._prev : n) ? s._prev._next = s: i = s, (s._next = r) ? r._prev = s : n = s, s = e
            }
            t._pt = i
        },
        sr = (ar.prototype.modifier = function (t, e, r) {
            this.mSet = this.mSet || this.set, this.set = Ge, this.m = t, this.mt = r, this.tween = e
        }, ar);

    function ar(t, e, r, i, n, s, a, o, u) {
        this.t = e, this.s = i, this.c = n, this.p = r, this.r = s || Je, this.d = a || this, this.set = o || We, this.pr = u || 0, (this._next = t) && (t._prev = this)
    }
    y(fe + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function (t) {
        return ne[t] = 1
    }), ie.TweenMax = ie.TweenLite = je, ie.TimelineLite = ie.TimelineMax = Le, _t = new Le({
        sortChildren: !1,
        defaults: Nt,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
    }), Yt.stringFilter = ut;
    var or = {
        registerPlugin: function () {
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
            e.forEach(function (t) {
                return function (t) {
                    var e = (t = !t.name && t.default || t).name,
                        r = n(t),
                        i = e && !r && t.init ? function () {
                            this._props = []
                        } : t,
                        s = {
                            init: d,
                            render: er,
                            add: Ne,
                            kill: ir,
                            modifier: rr,
                            rawVars: 0
                        },
                        a = {
                            targetTest: 0,
                            get: 0,
                            getSetter: $e,
                            aliases: {},
                            register: 0
                        };
                    if (Oe(), t !== i) {
                        if (oe[e]) return;
                        C(i, C(P(t, s), a)), pe(i.prototype, pe(s, P(t, a))), oe[i.prop = e] = i, t.targetTest && (le.push(i), ne[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
                    }
                    _(e, i), t.register && t.register(lr, i, sr)
                }(t)
            })
        },
        timeline: function (t) {
            return new Le(t)
        },
        getTweensOf: function (t, e) {
            return _t.getTweensOf(t, e)
        },
        getProperty: function (t, e, r, n) {
            i(t) && (t = ge(t)[0]);
            var s = g(t || {}).get,
                a = r ? k : O;
            return "native" === r && (r = ""), t ? e ? a((oe[e] && oe[e].get || s)(t, e, r, n)) : function (e, r, i) {
                return a((oe[e] && oe[e].get || s)(t, e, r, i))
            } : t
        },
        quickSetter: function (t, e, r) {
            if (1 < (t = ge(t)).length) {
                var i = t.map(function (t) {
                        return lr.quickSetter(t, e, r)
                    }),
                    n = i.length;
                return function (t) {
                    for (var e = n; e--;) i[e](t)
                }
            }
            t = t[0] || {};
            var s = oe[e],
                a = g(t),
                o = a.harness && (a.harness.aliases || {})[e] || e,
                u = s ? function (e) {
                    var i = new s;
                    Tt._pt = 0, i.init(t, r ? e + r : e, Tt, 0, [t]), i.render(1, i), Tt._pt && er(1, Tt)
                } : a.set(t, o);
            return s ? u : function (e) {
                return u(t, o, r ? e + r : e, a, 1)
            }
        },
        isTweening: function (t) {
            return 0 < _t.getTweensOf(t, !0).length
        },
        defaults: function (t) {
            return t && t.ease && (t.ease = Pe(t.ease, Nt.ease)), D(Nt, t || {})
        },
        config: function (t) {
            return D(Yt, t || {})
        },
        registerEffect: function (t) {
            var e = t.name,
                r = t.effect,
                i = t.plugins,
                n = t.defaults,
                s = t.extendTimeline;
            (i || "").split(",").forEach(function (t) {
                return t && !oe[t] && !ie[t] && c(e + " effect requires " + t + " plugin.")
            }), ue[e] = function (t, e, i) {
                return r(ge(t), C(e || {}, n), i)
            }, s && (Le.prototype[e] = function (t, r, i) {
                return this.add(ue[e](t, o(r) ? r : (i = r) && {}, this), i)
            })
        },
        registerEase: function (t, e) {
            ke[t] = Pe(e)
        },
        parseEase: function (t, e) {
            return arguments.length ? Pe(t, e) : ke
        },
        getById: function (t) {
            return _t.getById(t)
        },
        exportRoot: function (t, e) {
            void 0 === t && (t = {});
            var r, i, n = new Le(t);
            for (n.smoothChildTiming = u(t.smoothChildTiming), _t.remove(n), n._dp = 0, n._time = n._tTime = _t._time, r = _t._first; r;) i = r._next, !e && !r._dur && r instanceof je && r.vars.onComplete === r._targets[0] || N(n, r, r._start - r._delay), r = i;
            return N(_t, n, 0), n
        },
        utils: {
            wrap: function t(e, r, i) {
                var n = r - e;
                return Ht(e) ? tt(e, t(0, e.length), r) : Q(i, function (t) {
                    return (n + (t - e) % n) % n + e
                })
            },
            wrapYoyo: function t(e, r, i) {
                var n = r - e,
                    s = 2 * n;
                return Ht(e) ? tt(e, t(0, e.length - 1), r) : Q(i, function (t) {
                    return e + (n < (t = (s + (t - e) % s) % s || 0) ? s - t : t)
                })
            },
            distribute: H,
            random: K,
            snap: J,
            normalize: function (t, e, r) {
                return ve(t, e, 0, 1, r)
            },
            getUnit: G,
            clamp: function (t, e, r) {
                return Q(r, function (r) {
                    return de(t, e, r)
                })
            },
            splitColor: st,
            toArray: ge,
            mapRange: ve,
            pipe: function () {
                for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                return function (t) {
                    return e.reduce(function (t, e) {
                        return e(t)
                    }, t)
                }
            },
            unitize: function (t, e) {
                return function (r) {
                    return t(parseFloat(r)) + (e || G(r))
                }
            },
            interpolate: function t(e, r, n, s) {
                var a = isNaN(e + r) ? 0 : function (t) {
                    return (1 - t) * e + t * r
                };
                if (!a) {
                    var o, u, h, l, f, p = i(e),
                        c = {};
                    if (!0 === n && (s = 1) && (n = null), p) e = {
                        p: e
                    }, r = {
                        p: r
                    };
                    else if (Ht(e) && !Ht(r)) {
                        for (h = [], l = e.length, f = l - 2, u = 1; u < l; u++) h.push(t(e[u - 1], e[u]));
                        l--, a = function (t) {
                            t *= l;
                            var e = Math.min(f, ~~t);
                            return h[e](t - e)
                        }, n = r
                    } else s || (e = pe(Ht(e) ? [] : {}, e));
                    if (!h) {
                        for (o in r) Ne.call(c, e, o, "get", r[o]);
                        a = function (t) {
                            return er(t, c) || (p ? e.p : e)
                        }
                    }
                }
                return Q(n, a)
            },
            shuffle: Z
        },
        install: f,
        effects: ue,
        ticker: Me,
        updateRoot: Le.updateRoot,
        plugins: oe,
        globalTimeline: _t,
        core: {
            PropTween: sr,
            globals: _,
            Tween: je,
            Timeline: Le,
            Animation: Ee,
            getCache: g,
            _removeLinkedListItem: z
        }
    };

    function ur(t, e) {
        for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e;) r = r._next;
        return r
    }

    function hr(t, e) {
        return {
            name: t,
            rawVars: 1,
            init: function (t, r, n) {
                n._onInit = function (t) {
                    var n, s;
                    if (i(r) && (n = {}, y(r, function (t) {
                            return n[t] = 1
                        }), r = n), e) {
                        for (s in n = {}, r) n[s] = e(r[s]);
                        r = n
                    }! function (t, e) {
                        var r, i, n, s = t._targets;
                        for (r in e)
                            for (i = s.length; i--;)(n = (n = t._ptLookup[i][r]) && n.d) && (n._pt && (n = ur(n, r)), n && n.modifier && n.modifier(e[r], t, s[i], r))
                    }(t, r)
                }
            }
        }
    }
    y("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
        return or[t] = je[t]
    }), Me.add(Le.updateRoot), Tt = or.to({}, {
        duration: 0
    });
    var lr = or.registerPlugin({
        name: "attr",
        init: function (t, e, r, i, n) {
            var s, a;
            for (s in e)(a = this.add(t, "setAttribute", (t.getAttribute(s) || 0) + "", e[s], i, n, 0, 0, s)) && (a.op = s), this._props.push(s)
        }
    }, {
        name: "endArray",
        init: function (t, e) {
            for (var r = e.length; r--;) this.add(t, r, t[r] || 0, e[r])
        }
    }, hr("roundProps", $), hr("modifiers"), hr("snap", J)) || or;

    function fr(t, e) {
        return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    }

    function pr(t, e) {
        return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    }

    function cr(t, e) {
        return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
    }

    function _r(t, e) {
        var r = e.s + e.c * t;
        e.set(e.t, e.p, ~~(r + (r < 0 ? -.5 : .5)) + e.u, e)
    }

    function dr(t, e) {
        return e.set(e.t, e.p, t ? e.e : e.b, e)
    }

    function mr(t, e) {
        return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
    }

    function gr(t, e, r) {
        return t.style[e] = r
    }

    function vr(t, e, r) {
        return t.style.setProperty(e, r)
    }

    function yr(t, e, r) {
        return t._gsap[e] = r
    }

    function wr(t, e, r) {
        return t._gsap.scaleX = t._gsap.scaleY = r
    }

    function Tr(t, e, r, i, n) {
        var s = t._gsap;
        s.scaleX = s.scaleY = r, s.renderTransform(n, s)
    }

    function xr(t, e, r, i, n) {
        var s = t._gsap;
        s[e] = r, s.renderTransform(n, s)
    }

    function br(t, e) {
        var r = jr.createElementNS ? jr.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : jr.createElement(t);
        return r.style ? r : jr.createElement(t)
    }

    function Mr(t, e, r) {
        var i = getComputedStyle(t);
        return i[e] || i.getPropertyValue(e.replace(wi, "-$1").toLowerCase()) || i.getPropertyValue(e) || !r && Mr(t, Ci(e) || e, 1) || ""
    }

    function Or() {
        "undefined" != typeof window && window.document && (Vr = window, jr = Vr.document, Qr = jr.documentElement, Wr = br("div") || {
            style: {}
        }, Zr = br("div"), Mi = Ci(Mi), Oi = Mi + "Origin", Wr.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", $r = !!Ci("perspective"), Gr = 1)
    }

    function kr(t) {
        var e, r = br("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
            i = this.parentNode,
            n = this.nextSibling,
            s = this.style.cssText;
        if (Qr.appendChild(r), r.appendChild(this), this.style.display = "block", t) try {
            e = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = kr
        } catch (t) {} else this._gsapBBox && (e = this._gsapBBox());
        return i && (n ? i.insertBefore(this, n) : i.appendChild(this)), Qr.removeChild(r), this.style.cssText = s, e
    }

    function Cr(t, e) {
        for (var r = e.length; r--;)
            if (t.hasAttribute(e[r])) return t.getAttribute(e[r])
    }

    function Ar(t) {
        var e;
        try {
            e = t.getBBox()
        } catch (r) {
            e = kr.call(t, !0)
        }
        return e && (e.width || e.height) || t.getBBox === kr || (e = kr.call(t, !0)), !e || e.width || e.x || e.y ? e : {
            x: +Cr(t, ["x", "cx", "x1"]) || 0,
            y: +Cr(t, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
        }
    }

    function Dr(t) {
        return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !Ar(t))
    }

    function Pr(t, e) {
        if (e) {
            var r = t.style;
            e in mi && e !== Oi && (e = Mi), r.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), r.removeProperty(e.replace(wi, "-$1").toLowerCase())) : r.removeAttribute(e)
        }
    }

    function Sr(t, e, r, i, n, s) {
        var a = new sr(t._pt, e, r, 0, 1, s ? mr : dr);
        return (t._pt = a).b = i, a.e = n, t._props.push(r), a
    }

    function zr(t, e, r, i) {
        var n, s, a, o, u = parseFloat(r) || 0,
            h = (r + "").trim().substr((u + "").length) || "px",
            l = Wr.style,
            f = Ti.test(e),
            p = "svg" === t.tagName.toLowerCase(),
            c = (p ? "client" : "offset") + (f ? "Width" : "Height"),
            _ = "px" === i,
            d = "%" === i;
        return i === h || !u || Ai[i] || Ai[h] ? u : ("px" === h || _ || (u = zr(t, e, r, "px")), o = t.getCTM && Dr(t), d && (mi[e] || ~e.indexOf("adius")) ? w(u / (o ? t.getBBox()[f ? "width" : "height"] : t[c]) * 100) : (l[f ? "width" : "height"] = 100 + (_ ? h : i), s = ~e.indexOf("adius") || "em" === i && t.appendChild && !p ? t : t.parentNode, o && (s = (t.ownerSVGElement || {}).parentNode), s && s !== jr && s.appendChild || (s = jr.body), (a = s._gsap) && d && a.width && f && a.time === Me.time ? w(u / a.width * 100) : (!d && "%" !== h || (l.position = Mr(t, "position")), s === t && (l.position = "static"), s.appendChild(Wr), n = Wr[c], s.removeChild(Wr), l.position = "absolute", f && d && ((a = g(s)).time = Me.time, a.width = s[c]), w(_ ? n * u / 100 : n && u ? 100 / n * u : 0))))
    }

    function Rr(t, e, r, i) {
        var n;
        return Gr || Or(), e in bi && "transform" !== e && ~(e = bi[e]).indexOf(",") && (e = e.split(",")[0]), mi[e] && "transform" !== e ? (n = Ri(t, i), n = "transformOrigin" !== e ? n[e] : Fi(Mr(t, Oi)) + " " + n.zOrigin + "px") : (n = t.style[e]) && "auto" !== n && !i && !~(n + "").indexOf("calc(") || (n = Pi[e] && Pi[e](t, e, r) || Mr(t, e) || v(t, e) || ("opacity" === e ? 1 : 0)), r && !~(n + "").indexOf(" ") ? zr(t, e, n, r) + r : n
    }

    function Fr(t, e, r, i) {
        if (!r || "none" === r) {
            var n = Ci(e, t, 1),
                s = n && Mr(t, n, 1);
            s && s !== r ? (e = n, r = s) : "borderColor" === e && (r = Mr(t, "borderTopColor"))
        }
        var a, o, u, h, l, f, p, c, _, d, m, g, v = new sr(this._pt, t.style, e, 0, 1, tr),
            y = 0,
            w = 0;
        if (v.b = r, v.e = i, r += "", "auto" == (i += "") && (t.style[e] = i, i = Mr(t, e) || i, t.style[e] = r), ut(a = [r, i]), i = a[1], u = (r = a[0]).match(Kt) || [], (i.match(Kt) || []).length) {
            for (; o = Kt.exec(i);) p = o[0], _ = i.substring(y, o.index), l ? l = (l + 1) % 5 : "rgba(" !== _.substr(-5) && "hsla(" !== _.substr(-5) || (l = 1), p !== (f = u[w++] || "") && (h = parseFloat(f) || 0, m = f.substr((h + "").length), (g = "=" === p.charAt(1) ? +(p.charAt(0) + "1") : 0) && (p = p.substr(2)), c = parseFloat(p), d = p.substr((c + "").length), y = Kt.lastIndex - d.length, d || (d = d || Yt.units[e] || m, y === i.length && (i += d, v.e += d)), m !== d && (h = zr(t, e, f, d) || 0), v._pt = {
                _next: v._pt,
                p: _ || 1 === w ? _ : ",",
                s: h,
                c: g ? g * c : c - h,
                m: l && l < 4 ? Math.round : 0
            });
            v.c = y < i.length ? i.substring(y, i.length) : ""
        } else v.r = "display" === e && "none" === i ? mr : dr;
        return ee.test(i) && (v.e = 0), this._pt = v
    }

    function Er(t) {
        var e = t.split(" "),
            r = e[0],
            i = e[1] || "50%";
        return "top" !== r && "bottom" !== r && "left" !== i && "right" !== i || (t = r, r = i, i = t), e[0] = Di[r] || r, e[1] = Di[i] || i, e.join(" ")
    }

    function Br(t, e) {
        if (e.tween && e.tween._time === e.tween._dur) {
            var r, i, n, s = e.t,
                a = s.style,
                o = e.u,
                u = s._gsap;
            if ("all" === o || !0 === o) a.cssText = "", i = 1;
            else
                for (n = (o = o.split(",")).length; - 1 < --n;) r = o[n], mi[r] && (i = 1, r = "transformOrigin" === r ? Oi : Mi), Pr(s, r);
            i && (Pr(s, Mi), u && (u.svg && s.removeAttribute("transform"), Ri(s, 1), u.uncache = 1))
        }
    }

    function Lr(t) {
        return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
    }

    function Ir(t) {
        var e = Mr(t, Mi);
        return Lr(e) ? Si : e.substr(7).match(Jt).map(w)
    }

    function Yr(t, e) {
        var r, i, n, s, a = t._gsap || g(t),
            o = t.style,
            u = Ir(t);
        return a.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (u = [(n = t.transform.baseVal.consolidate().matrix).a, n.b, n.c, n.d, n.e, n.f]).join(",") ? Si : u : (u !== Si || t.offsetParent || t === Qr || a.svg || (n = o.display, o.display = "block", (r = t.parentNode) && t.offsetParent || (s = 1, i = t.nextSibling, Qr.appendChild(t)), u = Ir(t), n ? o.display = n : Pr(t, "display"), s && (i ? r.insertBefore(t, i) : r ? r.appendChild(t) : Qr.removeChild(t))), e && 6 < u.length ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u)
    }

    function Nr(t, e, r, i, n, s) {
        var a, o, u, h = t._gsap,
            l = n || Yr(t, !0),
            f = h.xOrigin || 0,
            p = h.yOrigin || 0,
            c = h.xOffset || 0,
            _ = h.yOffset || 0,
            d = l[0],
            m = l[1],
            g = l[2],
            v = l[3],
            y = l[4],
            w = l[5],
            T = e.split(" "),
            x = parseFloat(T[0]) || 0,
            b = parseFloat(T[1]) || 0;
        r ? l !== Si && (o = d * v - m * g) && (u = x * (-m / o) + b * (d / o) - (d * w - m * y) / o, x = x * (v / o) + b * (-g / o) + (g * w - v * y) / o, b = u) : (x = (a = Ar(t)).x + (~T[0].indexOf("%") ? x / 100 * a.width : x), b = a.y + (~(T[1] || T[0]).indexOf("%") ? b / 100 * a.height : b)), i || !1 !== i && h.smooth ? (y = x - f, w = b - p, h.xOffset = c + (y * d + w * g) - y, h.yOffset = _ + (y * m + w * v) - w) : h.xOffset = h.yOffset = 0, h.xOrigin = x, h.yOrigin = b, h.smooth = !!i, h.origin = e, h.originIsAbsolute = !!r, t.style[Oi] = "0px 0px", s && (Sr(s, h, "xOrigin", f, x), Sr(s, h, "yOrigin", p, b), Sr(s, h, "xOffset", c, h.xOffset), Sr(s, h, "yOffset", _, h.yOffset)), t.setAttribute("data-svg-origin", x + " " + b)
    }

    function Ur(t, e, r) {
        var i = G(e);
        return w(parseFloat(e) + parseFloat(zr(t, "x", r + "px", i))) + i
    }

    function Xr(t, e, r, n, s, a) {
        var o, u, h = 360,
            l = i(s),
            f = parseFloat(s) * (l && ~s.indexOf("rad") ? gi : 1),
            p = a ? f * a : f - n,
            c = n + p + "deg";
        return l && ("short" === (o = s.split("_")[1]) && (p %= h) != p % 180 && (p += p < 0 ? h : -h), "cw" === o && p < 0 ? p = (p + 36e9) % h - ~~(p / h) * h : "ccw" === o && 0 < p && (p = (p - 36e9) % h - ~~(p / h) * h)), t._pt = u = new sr(t._pt, e, r, n, p, pr), u.e = c, u.u = "deg", t._props.push(r), u
    }

    function qr(t, e, r) {
        var i, n, s, a, o, u, h, l = Zr.style,
            f = r._gsap;
        for (n in l.cssText = getComputedStyle(r).cssText + ";position:absolute;display:block;", l[Mi] = e, jr.body.appendChild(Zr), i = Ri(Zr, 1), mi)(s = f[n]) !== (a = i[n]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 && (o = G(s) !== (h = G(a)) ? zr(r, n, s, h) : parseFloat(s), u = parseFloat(a), t._pt = new sr(t._pt, f, n, o, u - o, fr), t._pt.u = h || 0, t._props.push(n));
        jr.body.removeChild(Zr)
    }
    je.version = Le.version = lr.version = "3.5.1", yt = 1, h() && Oe();
    var Vr, jr, Qr, Gr, Wr, Zr, Hr, $r, Jr = ke.Power0,
        Kr = ke.Power1,
        ti = ke.Power2,
        ei = ke.Power3,
        ri = ke.Power4,
        ii = ke.Linear,
        ni = ke.Quad,
        si = ke.Cubic,
        ai = ke.Quart,
        oi = ke.Quint,
        ui = ke.Strong,
        hi = ke.Elastic,
        li = ke.Back,
        fi = ke.SteppedEase,
        pi = ke.Bounce,
        ci = ke.Sine,
        _i = ke.Expo,
        di = ke.Circ,
        mi = {},
        gi = 180 / Math.PI,
        vi = Math.PI / 180,
        yi = Math.atan2,
        wi = /([A-Z])/g,
        Ti = /(?:left|right|width|margin|padding|x)/i,
        xi = /[\s,\(]\S/,
        bi = {
            autoAlpha: "opacity,visibility",
            scale: "scaleX,scaleY",
            alpha: "opacity"
        },
        Mi = "transform",
        Oi = Mi + "Origin",
        ki = "O,Moz,ms,Ms,Webkit".split(","),
        Ci = function (t, e, r) {
            var i = (e || Wr).style,
                n = 5;
            if (t in i && !r) return t;
            for (t = t.charAt(0).toUpperCase() + t.substr(1); n-- && !(ki[n] + t in i););
            return n < 0 ? null : (3 === n ? "ms" : 0 <= n ? ki[n] : "") + t
        },
        Ai = {
            deg: 1,
            rad: 1,
            turn: 1
        },
        Di = {
            top: "0%",
            bottom: "100%",
            left: "0%",
            right: "100%",
            center: "50%"
        },
        Pi = {
            clearProps: function (t, e, r, i, n) {
                if ("isFromStart" !== n.data) {
                    var s = t._pt = new sr(t._pt, e, r, 0, 0, Br);
                    return s.u = i, s.pr = -10, s.tween = n, t._props.push(r), 1
                }
            }
        },
        Si = [1, 0, 0, 1, 0, 0],
        zi = {},
        Ri = function (t, e) {
            var r = t._gsap || new Fe(t);
            if ("x" in r && !e && !r.uncache) return r;
            var i, n, s, a, o, u, h, l, f, p, c, _, d, m, g, v, y, T, x, b, M, O, k, C, A, D, P, S, z, R, F, E, B = t.style,
                L = r.scaleX < 0,
                I = "deg",
                Y = Mr(t, Oi) || "0";
            return i = n = s = u = h = l = f = p = c = 0, a = o = 1, r.svg = !(!t.getCTM || !Dr(t)), m = Yr(t, r.svg), r.svg && (C = !r.uncache && t.getAttribute("data-svg-origin"), Nr(t, C || Y, !!C || r.originIsAbsolute, !1 !== r.smooth, m)), _ = r.xOrigin || 0, d = r.yOrigin || 0, m !== Si && (T = m[0], x = m[1], b = m[2], M = m[3], i = O = m[4], n = k = m[5], 6 === m.length ? (a = Math.sqrt(T * T + x * x), o = Math.sqrt(M * M + b * b), u = T || x ? yi(x, T) * gi : 0, (f = b || M ? yi(b, M) * gi + u : 0) && (o *= Math.cos(f * vi)), r.svg && (i -= _ - (_ * T + d * b), n -= d - (_ * x + d * M))) : (E = m[6], R = m[7], P = m[8], S = m[9], z = m[10], F = m[11], i = m[12], n = m[13], s = m[14], h = (g = yi(E, z)) * gi, g && (C = O * (v = Math.cos(-g)) + P * (y = Math.sin(-g)), A = k * v + S * y, D = E * v + z * y, P = O * -y + P * v, S = k * -y + S * v, z = E * -y + z * v, F = R * -y + F * v, O = C, k = A, E = D), l = (g = yi(-b, z)) * gi, g && (v = Math.cos(-g), F = M * (y = Math.sin(-g)) + F * v, T = C = T * v - P * y, x = A = x * v - S * y, b = D = b * v - z * y), u = (g = yi(x, T)) * gi, g && (C = T * (v = Math.cos(g)) + x * (y = Math.sin(g)), A = O * v + k * y, x = x * v - T * y, k = k * v - O * y, T = C, O = A), h && 359.9 < Math.abs(h) + Math.abs(u) && (h = u = 0, l = 180 - l), a = w(Math.sqrt(T * T + x * x + b * b)), o = w(Math.sqrt(k * k + E * E)), g = yi(O, k), f = 2e-4 < Math.abs(g) ? g * gi : 0, c = F ? 1 / (F < 0 ? -F : F) : 0), r.svg && (C = t.getAttribute("transform"), r.forceCSS = t.setAttribute("transform", "") || !Lr(Mr(t, Mi)), C && t.setAttribute("transform", C))), 90 < Math.abs(f) && Math.abs(f) < 270 && (L ? (a *= -1, f += u <= 0 ? 180 : -180, u += u <= 0 ? 180 : -180) : (o *= -1, f += f <= 0 ? 180 : -180)), r.x = ((r.xPercent = i && Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0) ? 0 : i) + "px", r.y = ((r.yPercent = n && Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0) ? 0 : n) + "px", r.z = s + "px", r.scaleX = w(a), r.scaleY = w(o), r.rotation = w(u) + I, r.rotationX = w(h) + I, r.rotationY = w(l) + I, r.skewX = f + I, r.skewY = p + I, r.transformPerspective = c + "px", (r.zOrigin = parseFloat(Y.split(" ")[2]) || 0) && (B[Oi] = Fi(Y)), r.xOffset = r.yOffset = 0, r.force3D = Yt.force3D, r.renderTransform = r.svg ? Ni : $r ? Yi : Ei, r.uncache = 0, r
        },
        Fi = function (t) {
            return (t = t.split(" "))[0] + " " + t[1]
        },
        Ei = function (t, e) {
            e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, Yi(t, e)
        },
        Bi = "0deg",
        Li = "0px",
        Ii = ") ",
        Yi = function (t, e) {
            var r = e || this,
                i = r.xPercent,
                n = r.yPercent,
                s = r.x,
                a = r.y,
                o = r.z,
                u = r.rotation,
                h = r.rotationY,
                l = r.rotationX,
                f = r.skewX,
                p = r.skewY,
                c = r.scaleX,
                _ = r.scaleY,
                d = r.transformPerspective,
                m = r.force3D,
                g = r.target,
                v = r.zOrigin,
                y = "",
                w = "auto" === m && t && 1 !== t || !0 === m;
            if (v && (l !== Bi || h !== Bi)) {
                var T, x = parseFloat(h) * vi,
                    b = Math.sin(x),
                    M = Math.cos(x);
                x = parseFloat(l) * vi, s = Ur(g, s, b * (T = Math.cos(x)) * -v), a = Ur(g, a, -Math.sin(x) * -v), o = Ur(g, o, M * T * -v + v)
            }
            d !== Li && (y += "perspective(" + d + Ii), (i || n) && (y += "translate(" + i + "%, " + n + "%) "), !w && s === Li && a === Li && o === Li || (y += o !== Li || w ? "translate3d(" + s + ", " + a + ", " + o + ") " : "translate(" + s + ", " + a + Ii), u !== Bi && (y += "rotate(" + u + Ii), h !== Bi && (y += "rotateY(" + h + Ii), l !== Bi && (y += "rotateX(" + l + Ii), f === Bi && p === Bi || (y += "skew(" + f + ", " + p + Ii), 1 === c && 1 === _ || (y += "scale(" + c + ", " + _ + Ii), g.style[Mi] = y || "translate(0, 0)"
        },
        Ni = function (t, e) {
            var r, i, n, s, a, o = e || this,
                u = o.xPercent,
                h = o.yPercent,
                l = o.x,
                f = o.y,
                p = o.rotation,
                c = o.skewX,
                _ = o.skewY,
                d = o.scaleX,
                m = o.scaleY,
                g = o.target,
                v = o.xOrigin,
                y = o.yOrigin,
                T = o.xOffset,
                x = o.yOffset,
                b = o.forceCSS,
                M = parseFloat(l),
                O = parseFloat(f);
            p = parseFloat(p), c = parseFloat(c), (_ = parseFloat(_)) && (c += _ = parseFloat(_), p += _), p || c ? (p *= vi, c *= vi, r = Math.cos(p) * d, i = Math.sin(p) * d, n = Math.sin(p - c) * -m, s = Math.cos(p - c) * m, c && (_ *= vi, a = Math.tan(c - _), n *= a = Math.sqrt(1 + a * a), s *= a, _ && (a = Math.tan(_), r *= a = Math.sqrt(1 + a * a), i *= a)), r = w(r), i = w(i), n = w(n), s = w(s)) : (r = d, s = m, i = n = 0), (M && !~(l + "").indexOf("px") || O && !~(f + "").indexOf("px")) && (M = zr(g, "x", l, "px"), O = zr(g, "y", f, "px")), (v || y || T || x) && (M = w(M + v - (v * r + y * n) + T), O = w(O + y - (v * i + y * s) + x)), (u || h) && (M = w(M + u / 100 * (a = g.getBBox()).width), O = w(O + h / 100 * a.height)), a = "matrix(" + r + "," + i + "," + n + "," + s + "," + M + "," + O + ")", g.setAttribute("transform", a), b && (g.style[Mi] = a)
        };
    y("padding,margin,Width,Radius", function (t, e) {
        var r = "Right",
            i = "Bottom",
            n = "Left",
            s = (e < 3 ? ["Top", r, i, n] : ["Top" + n, "Top" + r, i + r, i + n]).map(function (r) {
                return e < 2 ? t + r : "border" + r + t
            });
        Pi[1 < e ? "border" + t : t] = function (t, e, r, i, n) {
            var a, o;
            if (arguments.length < 4) return a = s.map(function (e) {
                return Rr(t, e, r)
            }), 5 === (o = a.join(" ")).split(a[0]).length ? a[0] : o;
            a = (i + "").split(" "), o = {}, s.forEach(function (t, e) {
                return o[t] = a[e] = a[e] || a[(e - 1) / 2 | 0]
            }), t.init(e, o, n)
        }
    });
    var Ui, Xi, qi = {
        name: "css",
        register: Or,
        targetTest: function (t) {
            return t.style && t.nodeType
        },
        init: function (t, e, r, i, n) {
            var s, a, o, u, h, l, f, c, _, d, m, g, v, y, w, T = this._props,
                x = t.style;
            for (f in Gr || Or(), e)
                if ("autoRound" !== f && (a = e[f], !oe[f] || !Ie(f, e, r, i, t, n)))
                    if (h = typeof a, l = Pi[f], "function" === h && (h = typeof (a = a.call(r, i, t, n))), "string" === h && ~a.indexOf("random(") && (a = et(a)), l) l(this, t, f, a, r) && (w = 1);
                    else if ("--" === f.substr(0, 2)) this.add(x, "setProperty", getComputedStyle(t).getPropertyValue(f) + "", a + "", i, n, 0, 0, f);
            else if ("undefined" !== h) {
                if (s = Rr(t, f), u = parseFloat(s), (d = "string" === h && "=" === a.charAt(1) ? +(a.charAt(0) + "1") : 0) && (a = a.substr(2)), o = parseFloat(a), f in bi && ("autoAlpha" === f && (1 === u && "hidden" === Rr(t, "visibility") && o && (u = 0), Sr(this, x, "visibility", u ? "inherit" : "hidden", o ? "inherit" : "hidden", !o)), "scale" !== f && "transform" !== f && ~(f = bi[f]).indexOf(",") && (f = f.split(",")[0])), m = f in mi)
                    if (g || ((v = t._gsap).renderTransform || Ri(t), y = !1 !== e.smoothOrigin && v.smooth, (g = this._pt = new sr(this._pt, x, Mi, 0, 1, v.renderTransform, v, 0, -1)).dep = 1), "scale" === f) this._pt = new sr(this._pt, v, "scaleY", v.scaleY, d ? d * o : o - v.scaleY), T.push("scaleY", f), f += "X";
                    else {
                        if ("transformOrigin" === f) {
                            a = Er(a), v.svg ? Nr(t, a, 0, y, 0, this) : ((_ = parseFloat(a.split(" ")[2]) || 0) !== v.zOrigin && Sr(this, v, "zOrigin", v.zOrigin, _), Sr(this, x, f, Fi(s), Fi(a)));
                            continue
                        }
                        if ("svgOrigin" === f) {
                            Nr(t, a, 1, y, 0, this);
                            continue
                        }
                        if (f in zi) {
                            Xr(this, v, f, u, a, d);
                            continue
                        }
                        if ("smoothOrigin" === f) {
                            Sr(this, v, "smooth", v.smooth, a);
                            continue
                        }
                        if ("force3D" === f) {
                            v[f] = a;
                            continue
                        }
                        if ("transform" === f) {
                            qr(this, a, t);
                            continue
                        }
                    }
                else f in x || (f = Ci(f) || f);
                if (m || (o || 0 === o) && (u || 0 === u) && !xi.test(a) && f in x) o = o || 0, (c = (s + "").substr((u + "").length)) !== (_ = G(a) || (f in Yt.units ? Yt.units[f] : c)) && (u = zr(t, f, s, _)), this._pt = new sr(this._pt, m ? v : x, f, u, d ? d * o : o - u, "px" !== _ || !1 === e.autoRound || m ? fr : _r), this._pt.u = _ || 0, c !== _ && (this._pt.b = s, this._pt.r = cr);
                else if (f in x) Fr.call(this, t, f, s, a);
                else {
                    if (!(f in t)) {
                        p(f, a);
                        continue
                    }
                    this.add(t, f, t[f], a, i, n)
                }
                T.push(f)
            }
            w && nr(this)
        },
        get: Rr,
        aliases: bi,
        getSetter: function (t, e, r) {
            var i = bi[e];
            return i && i.indexOf(",") < 0 && (e = i), e in mi && e !== Oi && (t._gsap.x || Rr(t, "x")) ? r && Hr === r ? "scale" === e ? wr : yr : (Hr = r || {}) && ("scale" === e ? Tr : xr) : t.style && !a(t.style[e]) ? gr : ~e.indexOf("-") ? vr : $e(t, e)
        },
        core: {
            _removeProperty: Pr,
            _getMatrix: Yr
        }
    };
    lr.utils.checkPrefix = Ci, Xi = y("x,y,z,scale,scaleX,scaleY,xPercent,yPercent" + "," + (Ui = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function (t) {
        mi[t] = 1
    }), y(Ui, function (t) {
        Yt.units[t] = "deg", zi[t] = 1
    }), bi[Xi[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + Ui, y("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function (t) {
        var e = t.split(":");
        bi[e[1]] = Xi[e[0]]
    }), y("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (t) {
        Yt.units[t] = "px"
    }), lr.registerPlugin(qi);
    var Vi = lr.registerPlugin(qi) || lr,
        ji = Vi.core.Tween;
    t.Back = li, t.Bounce = pi, t.CSSPlugin = qi, t.Circ = di, t.Cubic = si, t.Elastic = hi, t.Expo = _i, t.Linear = ii, t.Power0 = Jr, t.Power1 = Kr, t.Power2 = ti, t.Power3 = ei, t.Power4 = ri, t.Quad = ni, t.Quart = ai, t.Quint = oi, t.Sine = ci, t.SteppedEase = fi, t.Strong = ui, t.TimelineLite = Le, t.TimelineMax = Le, t.TweenLite = je, t.TweenMax = ji, t.default = Vi, t.gsap = Vi, "undefined" == typeof window || window !== t ? Object.defineProperty(t, "__esModule", {
        value: !0
    }) : delete t.default
});


//VIVUS

! function () {
    "use strict";

    function t(t) {
        if (void 0 === t) throw new Error('Pathformer [constructor]: "element" parameter is required');
        if (t.constructor === String && !(t = document.getElementById(t))) throw new Error('Pathformer [constructor]: "element" parameter is not related to an existing ID');
        if (!(t instanceof window.SVGElement || t instanceof window.SVGGElement || /^svg$/i.test(t.nodeName))) throw new Error('Pathformer [constructor]: "element" parameter must be a string or a SVGelement');
        this.el = t, this.scan(t)
    }
    var e, r, n, i;

    function a(t, r, n) {
        e(), this.isReady = !1, this.setElement(t, r), this.setOptions(r), this.setCallback(n), this.isReady && this.init()
    }
    t.prototype.TYPES = ["line", "ellipse", "circle", "polygon", "polyline", "rect"], t.prototype.ATTR_WATCH = ["cx", "cy", "points", "r", "rx", "ry", "x", "x1", "x2", "y", "y1", "y2"], t.prototype.scan = function (t) {
        for (var e, r, n, i = t.querySelectorAll(this.TYPES.join(",")), a = 0; a < i.length; a++) r = (0, this[(e = i[a]).tagName.toLowerCase() + "ToPath"])(this.parseAttr(e.attributes)), n = this.pathMaker(e, r), e.parentNode.replaceChild(n, e)
    }, t.prototype.lineToPath = function (t) {
        var e = {},
            r = t.x1 || 0,
            n = t.y1 || 0,
            i = t.x2 || 0,
            a = t.y2 || 0;
        return e.d = "M" + r + "," + n + "L" + i + "," + a, e
    }, t.prototype.rectToPath = function (t) {
        var e = {},
            r = parseFloat(t.x) || 0,
            n = parseFloat(t.y) || 0,
            i = parseFloat(t.width) || 0,
            a = parseFloat(t.height) || 0;
        if (t.rx || t.ry) {
            var o = parseInt(t.rx, 10) || -1,
                s = parseInt(t.ry, 10) || -1;
            o = Math.min(Math.max(o < 0 ? s : o, 0), i / 2), s = Math.min(Math.max(s < 0 ? o : s, 0), a / 2), e.d = "M " + (r + o) + "," + n + " L " + (r + i - o) + "," + n + " A " + o + "," + s + ",0,0,1," + (r + i) + "," + (n + s) + " L " + (r + i) + "," + (n + a - s) + " A " + o + "," + s + ",0,0,1," + (r + i - o) + "," + (n + a) + " L " + (r + o) + "," + (n + a) + " A " + o + "," + s + ",0,0,1," + r + "," + (n + a - s) + " L " + r + "," + (n + s) + " A " + o + "," + s + ",0,0,1," + (r + o) + "," + n
        } else e.d = "M" + r + " " + n + " L" + (r + i) + " " + n + " L" + (r + i) + " " + (n + a) + " L" + r + " " + (n + a) + " Z";
        return e
    }, t.prototype.polylineToPath = function (t) {
        var e, r, n = {},
            i = t.points.trim().split(" ");
        if (-1 === t.points.indexOf(",")) {
            var a = [];
            for (e = 0; e < i.length; e += 2) a.push(i[e] + "," + i[e + 1]);
            i = a
        }
        for (r = "M" + i[0], e = 1; e < i.length; e++) - 1 !== i[e].indexOf(",") && (r += "L" + i[e]);
        return n.d = r, n
    }, t.prototype.polygonToPath = function (e) {
        var r = t.prototype.polylineToPath(e);
        return r.d += "Z", r
    }, t.prototype.ellipseToPath = function (t) {
        var e = {},
            r = parseFloat(t.rx) || 0,
            n = parseFloat(t.ry) || 0,
            i = parseFloat(t.cx) || 0,
            a = parseFloat(t.cy) || 0,
            o = i - r,
            s = a,
            h = parseFloat(i) + parseFloat(r),
            l = a;
        return e.d = "M" + o + "," + s + "A" + r + "," + n + " 0,1,1 " + h + "," + l + "A" + r + "," + n + " 0,1,1 " + o + "," + l, e
    }, t.prototype.circleToPath = function (t) {
        var e = {},
            r = parseFloat(t.r) || 0,
            n = parseFloat(t.cx) || 0,
            i = parseFloat(t.cy) || 0,
            a = n - r,
            o = i,
            s = parseFloat(n) + parseFloat(r),
            h = i;
        return e.d = "M" + a + "," + o + "A" + r + "," + r + " 0,1,1 " + s + "," + h + "A" + r + "," + r + " 0,1,1 " + a + "," + h, e
    }, t.prototype.pathMaker = function (t, e) {
        var r, n, i = document.createElementNS("http://www.w3.org/2000/svg", "path");
        for (r = 0; r < t.attributes.length; r++) n = t.attributes[r], -1 === this.ATTR_WATCH.indexOf(n.name) && i.setAttribute(n.name, n.value);
        for (r in e) i.setAttribute(r, e[r]);
        return i
    }, t.prototype.parseAttr = function (t) {
        for (var e, r = {}, n = 0; n < t.length; n++) {
            if (e = t[n], -1 !== this.ATTR_WATCH.indexOf(e.name) && -1 !== e.value.indexOf("%")) throw new Error("Pathformer [parseAttr]: a SVG shape got values in percentage. This cannot be transformed into 'path' tags. Please use 'viewBox'.");
            r[e.name] = e.value
        }
        return r
    }, a.LINEAR = function (t) {
        return t
    }, a.EASE = function (t) {
        return -Math.cos(t * Math.PI) / 2 + .5
    }, a.EASE_OUT = function (t) {
        return 1 - Math.pow(1 - t, 3)
    }, a.EASE_IN = function (t) {
        return Math.pow(t, 3)
    }, a.EASE_OUT_BOUNCE = function (t) {
        var e = 1 - Math.cos(t * (.5 * Math.PI)),
            r = Math.pow(e, 1.5),
            n = Math.pow(1 - t, 2);
        return 1 - n + (1 - Math.abs(Math.cos(r * (2.5 * Math.PI)))) * n
    }, a.prototype.setElement = function (t, e) {
        var r, n;
        if (void 0 === t) throw new Error('Vivus [constructor]: "element" parameter is required');
        if (t.constructor === String && !(t = document.getElementById(t))) throw new Error('Vivus [constructor]: "element" parameter is not related to an existing ID');
        if (this.parentEl = t, e && e.file) {
            n = this, r = function () {
                var t = document.createElement("div");
                t.innerHTML = this.responseText;
                var r = t.querySelector("svg");
                if (!r) throw new Error("Vivus [load]: Cannot find the SVG in the loaded file : " + e.file);
                n.el = r, n.el.setAttribute("width", "100%"), n.el.setAttribute("height", "100%"), n.parentEl.appendChild(n.el), n.isReady = !0, n.init(), n = null
            };
            var i = new window.XMLHttpRequest;
            return i.addEventListener("load", r), i.open("GET", e.file), void i.send()
        }
        switch (t.constructor) {
            case window.SVGSVGElement:
            case window.SVGElement:
            case window.SVGGElement:
                this.el = t, this.isReady = !0;
                break;
            case window.HTMLObjectElement:
                n = this, (r = function (e) {
                    if (!n.isReady) {
                        if (n.el = t.contentDocument && t.contentDocument.querySelector("svg"), !n.el && e) throw new Error("Vivus [constructor]: object loaded does not contain any SVG");
                        n.el && (t.getAttribute("built-by-vivus") && (n.parentEl.insertBefore(n.el, t), n.parentEl.removeChild(t), n.el.setAttribute("width", "100%"), n.el.setAttribute("height", "100%")), n.isReady = !0, n.init(), n = null)
                    }
                })() || t.addEventListener("load", r);
                break;
            default:
                throw new Error('Vivus [constructor]: "element" parameter is not valid (or miss the "file" attribute)')
        }
    }, a.prototype.setOptions = function (t) {
        var e = ["delayed", "sync", "async", "nsync", "oneByOne", "scenario", "scenario-sync"],
            r = ["inViewport", "manual", "autostart"];
        if (void 0 !== t && t.constructor !== Object) throw new Error('Vivus [constructor]: "options" parameter must be an object');
        if ((t = t || {}).type && -1 === e.indexOf(t.type)) throw new Error("Vivus [constructor]: " + t.type + " is not an existing animation `type`");
        if (this.type = t.type || e[0], t.start && -1 === r.indexOf(t.start)) throw new Error("Vivus [constructor]: " + t.start + " is not an existing `start` option");
        if (this.start = t.start || r[0], this.isIE = -1 !== window.navigator.userAgent.indexOf("MSIE") || -1 !== window.navigator.userAgent.indexOf("Trident/") || -1 !== window.navigator.userAgent.indexOf("Edge/"), this.duration = i(t.duration, 120), this.delay = i(t.delay, null), this.dashGap = i(t.dashGap, 1), this.forceRender = t.hasOwnProperty("forceRender") ? !!t.forceRender : this.isIE, this.reverseStack = !!t.reverseStack, this.selfDestroy = !!t.selfDestroy, this.onReady = t.onReady, this.map = [], this.frameLength = this.currentFrame = this.delayUnit = this.speed = this.handle = null, this.ignoreInvisible = !!t.hasOwnProperty("ignoreInvisible") && !!t.ignoreInvisible, this.animTimingFunction = t.animTimingFunction || a.LINEAR, this.pathTimingFunction = t.pathTimingFunction || a.LINEAR, this.delay >= this.duration) throw new Error("Vivus [constructor]: delay must be shorter than duration")
    }, a.prototype.setCallback = function (t) {
        if (t && t.constructor !== Function) throw new Error('Vivus [constructor]: "callback" parameter must be a function');
        this.callback = t || function () {}
    }, a.prototype.mapping = function () {
        var t, e, r, n, a, o, s, h;
        for (h = o = s = 0, e = this.el.querySelectorAll("path"), t = 0; t < e.length; t++) r = e[t], this.isInvisible(r) || (a = {
            el: r,
            length: Math.ceil(r.getTotalLength())
        }, isNaN(a.length) ? window.console && console.warn && console.warn("Vivus [mapping]: cannot retrieve a path element length", r) : (this.map.push(a), r.style.strokeDasharray = a.length + " " + (a.length + 2 * this.dashGap), r.style.strokeDashoffset = a.length + this.dashGap, a.length += this.dashGap, o += a.length, this.renderPath(t)));
        for (o = 0 === o ? 1 : o, this.delay = null === this.delay ? this.duration / 3 : this.delay, this.delayUnit = this.delay / (1 < e.length ? e.length - 1 : 1), this.reverseStack && this.map.reverse(), t = 0; t < this.map.length; t++) {
            switch (a = this.map[t], this.type) {
                case "delayed":
                    a.startAt = this.delayUnit * t, a.duration = this.duration - this.delay;
                    break;
                case "oneByOne":
                    a.startAt = s / o * this.duration, a.duration = a.length / o * this.duration;
                    break;
                case "sync":
                case "async":
                case "nsync":
                    a.startAt = 0, a.duration = this.duration;
                    break;
                case "scenario-sync":
                    r = a.el, n = this.parseAttr(r), a.startAt = h + (i(n["data-delay"], this.delayUnit) || 0), a.duration = i(n["data-duration"], this.duration), h = void 0 !== n["data-async"] ? a.startAt : a.startAt + a.duration, this.frameLength = Math.max(this.frameLength, a.startAt + a.duration);
                    break;
                case "scenario":
                    r = a.el, n = this.parseAttr(r), a.startAt = i(n["data-start"], this.delayUnit) || 0, a.duration = i(n["data-duration"], this.duration), this.frameLength = Math.max(this.frameLength, a.startAt + a.duration)
            }
            s += a.length, this.frameLength = this.frameLength || this.duration
        }
    }, a.prototype.drawer = function () {
        var t = this;
        if (this.currentFrame += this.speed, this.currentFrame <= 0) this.stop(), this.reset();
        else {
            if (!(this.currentFrame >= this.frameLength)) return this.trace(), void(this.handle = r(function () {
                t.drawer()
            }));
            this.stop(), this.currentFrame = this.frameLength, this.trace(), this.selfDestroy && this.destroy()
        }
        this.callback(this), this.instanceCallback && (this.instanceCallback(this), this.instanceCallback = null)
    }, a.prototype.trace = function () {
        var t, e, r, n;
        for (n = this.animTimingFunction(this.currentFrame / this.frameLength) * this.frameLength, t = 0; t < this.map.length; t++) e = (n - (r = this.map[t]).startAt) / r.duration, e = this.pathTimingFunction(Math.max(0, Math.min(1, e))), r.progress !== e && (r.progress = e, r.el.style.strokeDashoffset = Math.floor(r.length * (1 - e)), this.renderPath(t))
    }, a.prototype.renderPath = function (t) {
        if (this.forceRender && this.map && this.map[t]) {
            var e = this.map[t],
                r = e.el.cloneNode(!0);
            e.el.parentNode.replaceChild(r, e.el), e.el = r
        }
    }, a.prototype.init = function () {
        this.frameLength = 0, this.currentFrame = 0, this.map = [], new t(this.el), this.mapping(), this.starter(), this.onReady && this.onReady(this)
    }, a.prototype.starter = function () {
        switch (this.start) {
            case "manual":
                return;
            case "autostart":
                this.play();
                break;
            case "inViewport":
                var t = this,
                    e = function () {
                        t.isInViewport(t.parentEl, 1) && (t.play(), window.removeEventListener("scroll", e))
                    };
                window.addEventListener("scroll", e), e()
        }
    }, a.prototype.getStatus = function () {
        return 0 === this.currentFrame ? "start" : this.currentFrame === this.frameLength ? "end" : "progress"
    }, a.prototype.reset = function () {
        return this.setFrameProgress(0)
    }, a.prototype.finish = function () {
        return this.setFrameProgress(1)
    }, a.prototype.setFrameProgress = function (t) {
        return t = Math.min(1, Math.max(0, t)), this.currentFrame = Math.round(this.frameLength * t), this.trace(), this
    }, a.prototype.play = function (t, e) {
        if (this.instanceCallback = null, t && "function" == typeof t) this.instanceCallback = t, t = null;
        else if (t && "number" != typeof t) throw new Error("Vivus [play]: invalid speed");
        return e && "function" == typeof e && !this.instanceCallback && (this.instanceCallback = e), this.speed = t || 1, this.handle || this.drawer(), this
    }, a.prototype.stop = function () {
        return this.handle && (n(this.handle), this.handle = null), this
    }, a.prototype.destroy = function () {
        var t, e;
        for (this.stop(), t = 0; t < this.map.length; t++)(e = this.map[t]).el.style.strokeDashoffset = null, e.el.style.strokeDasharray = null, this.renderPath(t)
    }, a.prototype.isInvisible = function (t) {
        var e, r = t.getAttribute("data-ignore");
        return null !== r ? "false" !== r : !!this.ignoreInvisible && !(e = t.getBoundingClientRect()).width && !e.height
    }, a.prototype.parseAttr = function (t) {
        var e, r = {};
        if (t && t.attributes)
            for (var n = 0; n < t.attributes.length; n++) r[(e = t.attributes[n]).name] = e.value;
        return r
    }, a.prototype.isInViewport = function (t, e) {
        var r = this.scrollY(),
            n = r + this.getViewportH(),
            i = t.getBoundingClientRect(),
            a = i.height,
            o = r + i.top;
        return o + a * (e = e || 0) <= n && r <= o + a
    }, a.prototype.getViewportH = function () {
        var t = this.docElem.clientHeight,
            e = window.innerHeight;
        return t < e ? e : t
    }, a.prototype.scrollY = function () {
        return window.pageYOffset || this.docElem.scrollTop
    }, e = function () {
        a.prototype.docElem || (a.prototype.docElem = window.document.documentElement, r = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t) {
            return window.setTimeout(t, 1e3 / 60)
        }, n = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function (t) {
            return window.clearTimeout(t)
        })
    }, i = function (t, e) {
        var r = parseInt(t, 10);
        return 0 <= r ? r : e
    }, "function" == typeof define && define.amd ? define([], function () {
        return a
    }) : "object" == typeof exports ? module.exports = a : window.Vivus = a
}();


// Parallax 

! function (t, i, e, s) {
    function o(i, e) {
        var h = this;
        "object" == typeof e && (delete e.refresh, delete e.render, t.extend(this, e)), this.$element = t(i), !this.imageSrc && this.$element.is("img") && (this.imageSrc = this.$element.attr("src"));
        var r = (this.position + "").toLowerCase().match(/\S+/g) || [];
        if (r.length < 1 && r.push("center"), 1 == r.length && r.push(r[0]), "top" != r[0] && "bottom" != r[0] && "left" != r[1] && "right" != r[1] || (r = [r[1], r[0]]), this.positionX !== s && (r[0] = this.positionX.toLowerCase()), this.positionY !== s && (r[1] = this.positionY.toLowerCase()), h.positionX = r[0], h.positionY = r[1], "left" != this.positionX && "right" != this.positionX && (isNaN(parseInt(this.positionX)) ? this.positionX = "center" : this.positionX = parseInt(this.positionX)), "top" != this.positionY && "bottom" != this.positionY && (isNaN(parseInt(this.positionY)) ? this.positionY = "center" : this.positionY = parseInt(this.positionY)), this.position = this.positionX + (isNaN(this.positionX) ? "" : "px") + " " + this.positionY + (isNaN(this.positionY) ? "" : "px"), navigator.userAgent.match(/(iPod|iPhone|iPad)/)) return this.imageSrc && this.iosFix && !this.$element.is("img") && this.$element.css({
            backgroundImage: 'url("' + this.imageSrc + '")',
            backgroundSize: "cover",
            backgroundPosition: this.position
        }), this;
        if (navigator.userAgent.match(/(Android)/)) return this.imageSrc && this.androidFix && !this.$element.is("img") && this.$element.css({
            backgroundImage: 'url("' + this.imageSrc + '")',
            backgroundSize: "cover",
            backgroundPosition: this.position
        }), this;
        this.$mirror = t("<div />").prependTo(this.mirrorContainer);
        var a = this.$element.find(">.parallax-slider"),
            n = !1;
        0 == a.length ? this.$slider = t("<img />").prependTo(this.$mirror) : (this.$slider = a.prependTo(this.$mirror), n = !0), this.$mirror.addClass("parallax-mirror").css({
            visibility: "hidden",
            zIndex: this.zIndex,
            position: "fixed",
            top: 0,
            left: 0,
            overflow: "hidden"
        }), this.$slider.addClass("parallax-slider").one("load", function () {
            h.naturalHeight && h.naturalWidth || (h.naturalHeight = this.naturalHeight || this.height || 1, h.naturalWidth = this.naturalWidth || this.width || 1), h.aspectRatio = h.naturalWidth / h.naturalHeight, o.isSetup || o.setup(), o.sliders.push(h), o.isFresh = !1, o.requestRender()
        }), n || (this.$slider[0].src = this.imageSrc), (this.naturalHeight && this.naturalWidth || this.$slider[0].complete || a.length > 0) && this.$slider.trigger("load")
    }! function () {
        for (var t = 0, e = ["ms", "moz", "webkit", "o"], s = 0; s < e.length && !i.requestAnimationFrame; ++s) i.requestAnimationFrame = i[e[s] + "RequestAnimationFrame"], i.cancelAnimationFrame = i[e[s] + "CancelAnimationFrame"] || i[e[s] + "CancelRequestAnimationFrame"];
        i.requestAnimationFrame || (i.requestAnimationFrame = function (e) {
            var s = (new Date).getTime(),
                o = Math.max(0, 16 - (s - t)),
                h = i.setTimeout(function () {
                    e(s + o)
                }, o);
            return t = s + o, h
        }), i.cancelAnimationFrame || (i.cancelAnimationFrame = function (t) {
            clearTimeout(t)
        })
    }(), t.extend(o.prototype, {
        speed: .2,
        bleed: 0,
        zIndex: -100,
        iosFix: !0,
        androidFix: !0,
        position: "center",
        overScrollFix: !1,
        mirrorContainer: "body",
        refresh: function () {
            this.boxWidth = this.$element.outerWidth(), this.boxHeight = this.$element.outerHeight() + 2 * this.bleed, this.boxOffsetTop = this.$element.offset().top - this.bleed, this.boxOffsetLeft = this.$element.offset().left, this.boxOffsetBottom = this.boxOffsetTop + this.boxHeight;
            var t, i = o.winHeight,
                e = o.docHeight,
                s = Math.min(this.boxOffsetTop, e - i),
                h = Math.max(this.boxOffsetTop + this.boxHeight - i, 0),
                r = this.boxHeight + (s - h) * (1 - this.speed) | 0,
                a = (this.boxOffsetTop - s) * (1 - this.speed) | 0;
            r * this.aspectRatio >= this.boxWidth ? (this.imageWidth = r * this.aspectRatio | 0, this.imageHeight = r, this.offsetBaseTop = a, t = this.imageWidth - this.boxWidth, "left" == this.positionX ? this.offsetLeft = 0 : "right" == this.positionX ? this.offsetLeft = -t : isNaN(this.positionX) ? this.offsetLeft = -t / 2 | 0 : this.offsetLeft = Math.max(this.positionX, -t)) : (this.imageWidth = this.boxWidth, this.imageHeight = this.boxWidth / this.aspectRatio | 0, this.offsetLeft = 0, t = this.imageHeight - r, "top" == this.positionY ? this.offsetBaseTop = a : "bottom" == this.positionY ? this.offsetBaseTop = a - t : isNaN(this.positionY) ? this.offsetBaseTop = a - t / 2 | 0 : this.offsetBaseTop = a + Math.max(this.positionY, -t))
        },
        render: function () {
            var t = o.scrollTop,
                i = o.scrollLeft,
                e = this.overScrollFix ? o.overScroll : 0,
                s = t + o.winHeight;
            this.boxOffsetBottom > t && this.boxOffsetTop <= s ? (this.visibility = "visible", this.mirrorTop = this.boxOffsetTop - t, this.mirrorLeft = this.boxOffsetLeft - i, this.offsetTop = this.offsetBaseTop - this.mirrorTop * (1 - this.speed)) : this.visibility = "hidden", this.$mirror.css({
                transform: "translate3d(" + this.mirrorLeft + "px, " + (this.mirrorTop - e) + "px, 0px)",
                visibility: this.visibility,
                height: this.boxHeight,
                width: this.boxWidth
            }), this.$slider.css({
                transform: "translate3d(" + this.offsetLeft + "px, " + this.offsetTop + "px, 0px)",
                position: "absolute",
                height: this.imageHeight,
                width: this.imageWidth,
                maxWidth: "none"
            })
        }
    }), t.extend(o, {
        scrollTop: 0,
        scrollLeft: 0,
        winHeight: 0,
        winWidth: 0,
        docHeight: 1 << 30,
        docWidth: 1 << 30,
        sliders: [],
        isReady: !1,
        isFresh: !1,
        isBusy: !1,
        setup: function () {
            if (!this.isReady) {
                var s = this,
                    h = t(e),
                    r = t(i),
                    a = function () {
                        o.winHeight = r.height(), o.winWidth = r.width(), o.docHeight = h.height(), o.docWidth = h.width()
                    },
                    n = function () {
                        var t = r.scrollTop(),
                            i = o.docHeight - o.winHeight,
                            e = o.docWidth - o.winWidth;
                        o.scrollTop = Math.max(0, Math.min(i, t)), o.scrollLeft = Math.max(0, Math.min(e, r.scrollLeft())), o.overScroll = Math.max(t - i, Math.min(t, 0))
                    };
                r.on("resize.px.parallax load.px.parallax", function () {
                    a(), s.refresh(), o.isFresh = !1, o.requestRender()
                }).on("scroll.px.parallax load.px.parallax", function () {
                    n(), o.requestRender()
                }), a(), n(), this.isReady = !0;
                var l = -1;
                ! function t() {
                    if (l == i.pageYOffset) return i.requestAnimationFrame(t), !1;
                    l = i.pageYOffset, s.render(), i.requestAnimationFrame(t)
                }()
            }
        },
        configure: function (i) {
            "object" == typeof i && (delete i.refresh, delete i.render, t.extend(this.prototype, i))
        },
        refresh: function () {
            t.each(this.sliders, function () {
                this.refresh()
            }), this.isFresh = !0
        },
        render: function () {
            this.isFresh || this.refresh(), t.each(this.sliders, function () {
                this.render()
            })
        },
        requestRender: function () {
            this.render(), this.isBusy = !1
        },
        destroy: function (e) {
            var s, h = t(e).data("px.parallax");
            for (h.$mirror.remove(), s = 0; s < this.sliders.length; s += 1) this.sliders[s] == h && this.sliders.splice(s, 1);
            t(e).data("px.parallax", !1), 0 === this.sliders.length && (t(i).off("scroll.px.parallax resize.px.parallax load.px.parallax"), this.isReady = !1, o.isSetup = !1)
        }
    });
    var h = t.fn.parallax;
    t.fn.parallax = function (s) {
        return this.each(function () {
            var h = t(this),
                r = "object" == typeof s && s;
            this == i || this == e || h.is("body") ? o.configure(r) : h.data("px.parallax") ? "object" == typeof s && t.extend(h.data("px.parallax"), r) : (r = t.extend({}, h.data(), r), h.data("px.parallax", new o(this, r))), "string" == typeof s && ("destroy" == s ? o.destroy(this) : o[s]())
        })
    }, t.fn.parallax.Constructor = o, t.fn.parallax.noConflict = function () {
        return t.fn.parallax = h, this
    }, t(function () {
        t('[data-parallax="scroll"]').parallax()
    })
}(jQuery, window, document);

// Swiper

! function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).Swiper = t()
}(this, (function () {
    "use strict";

    function e(e, t) {
        for (var i = 0; i < t.length; i++) {
            var s = t[i];
            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
        }
    }

    function t() {
        return (t = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = arguments[t];
                for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
            }
            return e
        }).apply(this, arguments)
    }

    function i(e) {
        return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
    }

    function s(e, t) {
        void 0 === e && (e = {}), void 0 === t && (t = {}), Object.keys(t).forEach((function (a) {
            void 0 === e[a] ? e[a] = t[a] : i(t[a]) && i(e[a]) && Object.keys(t[a]).length > 0 && s(e[a], t[a])
        }))
    }
    var a = {
        body: {},
        addEventListener: function () {},
        removeEventListener: function () {},
        activeElement: {
            blur: function () {},
            nodeName: ""
        },
        querySelector: function () {
            return null
        },
        querySelectorAll: function () {
            return []
        },
        getElementById: function () {
            return null
        },
        createEvent: function () {
            return {
                initEvent: function () {}
            }
        },
        createElement: function () {
            return {
                children: [],
                childNodes: [],
                style: {},
                setAttribute: function () {},
                getElementsByTagName: function () {
                    return []
                }
            }
        },
        createElementNS: function () {
            return {}
        },
        importNode: function () {
            return null
        },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        }
    };

    function r() {
        var e = "undefined" != typeof document ? document : {};
        return s(e, a), e
    }
    var n = {
        document: a,
        navigator: {
            userAgent: ""
        },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        },
        history: {
            replaceState: function () {},
            pushState: function () {},
            go: function () {},
            back: function () {}
        },
        CustomEvent: function () {
            return this
        },
        addEventListener: function () {},
        removeEventListener: function () {},
        getComputedStyle: function () {
            return {
                getPropertyValue: function () {
                    return ""
                }
            }
        },
        Image: function () {},
        Date: function () {},
        screen: {},
        setTimeout: function () {},
        clearTimeout: function () {},
        matchMedia: function () {
            return {}
        },
        requestAnimationFrame: function (e) {
            return "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0)
        },
        cancelAnimationFrame: function (e) {
            "undefined" != typeof setTimeout && clearTimeout(e)
        }
    };

    function l() {
        var e = "undefined" != typeof window ? window : {};
        return s(e, n), e
    }

    function o(e) {
        return (o = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function d(e, t) {
        return (d = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function h() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
        } catch (e) {
            return !1
        }
    }

    function p(e, t, i) {
        return (p = h() ? Reflect.construct : function (e, t, i) {
            var s = [null];
            s.push.apply(s, t);
            var a = new(Function.bind.apply(e, s));
            return i && d(a, i.prototype), a
        }).apply(null, arguments)
    }

    function u(e) {
        var t = "function" == typeof Map ? new Map : void 0;
        return (u = function (e) {
            if (null === e || (i = e, -1 === Function.toString.call(i).indexOf("[native code]"))) return e;
            var i;
            if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== t) {
                if (t.has(e)) return t.get(e);
                t.set(e, s)
            }

            function s() {
                return p(e, arguments, o(this).constructor)
            }
            return s.prototype = Object.create(e.prototype, {
                constructor: {
                    value: s,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), d(s, e)
        })(e)
    }
    var c = function (e) {
        var t, i;

        function s(t) {
            var i, s, a;
            return i = e.call.apply(e, [this].concat(t)) || this, s = function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(i), a = s.__proto__, Object.defineProperty(s, "__proto__", {
                get: function () {
                    return a
                },
                set: function (e) {
                    a.__proto__ = e
                }
            }), i
        }
        return i = e, (t = s).prototype = Object.create(i.prototype), t.prototype.constructor = t, t.__proto__ = i, s
    }(u(Array));

    function v(e) {
        void 0 === e && (e = []);
        var t = [];
        return e.forEach((function (e) {
            Array.isArray(e) ? t.push.apply(t, v(e)) : t.push(e)
        })), t
    }

    function f(e, t) {
        return Array.prototype.filter.call(e, t)
    }

    function m(e, t) {
        var i = l(),
            s = r(),
            a = [];
        if (!t && e instanceof c) return e;
        if (!e) return new c(a);
        if ("string" == typeof e) {
            var n = e.trim();
            if (n.indexOf("<") >= 0 && n.indexOf(">") >= 0) {
                var o = "div";
                0 === n.indexOf("<li") && (o = "ul"), 0 === n.indexOf("<tr") && (o = "tbody"), 0 !== n.indexOf("<td") && 0 !== n.indexOf("<th") || (o = "tr"), 0 === n.indexOf("<tbody") && (o = "table"), 0 === n.indexOf("<option") && (o = "select");
                var d = s.createElement(o);
                d.innerHTML = n;
                for (var h = 0; h < d.childNodes.length; h += 1) a.push(d.childNodes[h])
            } else a = function (e, t) {
                if ("string" != typeof e) return [e];
                for (var i = [], s = t.querySelectorAll(e), a = 0; a < s.length; a += 1) i.push(s[a]);
                return i
            }(e.trim(), t || s)
        } else if (e.nodeType || e === i || e === s) a.push(e);
        else if (Array.isArray(e)) {
            if (e instanceof c) return e;
            a = e
        }
        return new c(function (e) {
            for (var t = [], i = 0; i < e.length; i += 1) - 1 === t.indexOf(e[i]) && t.push(e[i]);
            return t
        }(a))
    }
    m.fn = c.prototype;
    var g, w, y, b = {
        addClass: function () {
            for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
            var s = v(t.map((function (e) {
                return e.split(" ")
            })));
            return this.forEach((function (e) {
                var t;
                (t = e.classList).add.apply(t, s)
            })), this
        },
        removeClass: function () {
            for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
            var s = v(t.map((function (e) {
                return e.split(" ")
            })));
            return this.forEach((function (e) {
                var t;
                (t = e.classList).remove.apply(t, s)
            })), this
        },
        hasClass: function () {
            for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
            var s = v(t.map((function (e) {
                return e.split(" ")
            })));
            return f(this, (function (e) {
                return s.filter((function (t) {
                    return e.classList.contains(t)
                })).length > 0
            })).length > 0
        },
        toggleClass: function () {
            for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
            var s = v(t.map((function (e) {
                return e.split(" ")
            })));
            this.forEach((function (e) {
                s.forEach((function (t) {
                    e.classList.toggle(t)
                }))
            }))
        },
        attr: function (e, t) {
            if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
            for (var i = 0; i < this.length; i += 1)
                if (2 === arguments.length) this[i].setAttribute(e, t);
                else
                    for (var s in e) this[i][s] = e[s], this[i].setAttribute(s, e[s]);
            return this
        },
        removeAttr: function (e) {
            for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
            return this
        },
        transform: function (e) {
            for (var t = 0; t < this.length; t += 1) this[t].style.transform = e;
            return this
        },
        transition: function (e) {
            for (var t = 0; t < this.length; t += 1) this[t].style.transition = "string" != typeof e ? e + "ms" : e;
            return this
        },
        on: function () {
            for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
            var s = t[0],
                a = t[1],
                r = t[2],
                n = t[3];

            function l(e) {
                var t = e.target;
                if (t) {
                    var i = e.target.dom7EventData || [];
                    if (i.indexOf(e) < 0 && i.unshift(e), m(t).is(a)) r.apply(t, i);
                    else
                        for (var s = m(t).parents(), n = 0; n < s.length; n += 1) m(s[n]).is(a) && r.apply(s[n], i)
                }
            }

            function o(e) {
                var t = e && e.target && e.target.dom7EventData || [];
                t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t)
            }
            "function" == typeof t[1] && (s = t[0], r = t[1], n = t[2], a = void 0), n || (n = !1);
            for (var d, h = s.split(" "), p = 0; p < this.length; p += 1) {
                var u = this[p];
                if (a)
                    for (d = 0; d < h.length; d += 1) {
                        var c = h[d];
                        u.dom7LiveListeners || (u.dom7LiveListeners = {}), u.dom7LiveListeners[c] || (u.dom7LiveListeners[c] = []), u.dom7LiveListeners[c].push({
                            listener: r,
                            proxyListener: l
                        }), u.addEventListener(c, l, n)
                    } else
                        for (d = 0; d < h.length; d += 1) {
                            var v = h[d];
                            u.dom7Listeners || (u.dom7Listeners = {}), u.dom7Listeners[v] || (u.dom7Listeners[v] = []), u.dom7Listeners[v].push({
                                listener: r,
                                proxyListener: o
                            }), u.addEventListener(v, o, n)
                        }
            }
            return this
        },
        off: function () {
            for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
            var s = t[0],
                a = t[1],
                r = t[2],
                n = t[3];
            "function" == typeof t[1] && (s = t[0], r = t[1], n = t[2], a = void 0), n || (n = !1);
            for (var l = s.split(" "), o = 0; o < l.length; o += 1)
                for (var d = l[o], h = 0; h < this.length; h += 1) {
                    var p = this[h],
                        u = void 0;
                    if (!a && p.dom7Listeners ? u = p.dom7Listeners[d] : a && p.dom7LiveListeners && (u = p.dom7LiveListeners[d]), u && u.length)
                        for (var c = u.length - 1; c >= 0; c -= 1) {
                            var v = u[c];
                            r && v.listener === r || r && v.listener && v.listener.dom7proxy && v.listener.dom7proxy === r ? (p.removeEventListener(d, v.proxyListener, n), u.splice(c, 1)) : r || (p.removeEventListener(d, v.proxyListener, n), u.splice(c, 1))
                        }
                }
            return this
        },
        trigger: function () {
            for (var e = l(), t = arguments.length, i = new Array(t), s = 0; s < t; s++) i[s] = arguments[s];
            for (var a = i[0].split(" "), r = i[1], n = 0; n < a.length; n += 1)
                for (var o = a[n], d = 0; d < this.length; d += 1) {
                    var h = this[d];
                    if (e.CustomEvent) {
                        var p = new e.CustomEvent(o, {
                            detail: r,
                            bubbles: !0,
                            cancelable: !0
                        });
                        h.dom7EventData = i.filter((function (e, t) {
                            return t > 0
                        })), h.dispatchEvent(p), h.dom7EventData = [], delete h.dom7EventData
                    }
                }
            return this
        },
        transitionEnd: function (e) {
            var t = this;
            return e && t.on("transitionend", (function i(s) {
                s.target === this && (e.call(this, s), t.off("transitionend", i))
            })), this
        },
        outerWidth: function (e) {
            if (this.length > 0) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        },
        outerHeight: function (e) {
            if (this.length > 0) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        },
        styles: function () {
            var e = l();
            return this[0] ? e.getComputedStyle(this[0], null) : {}
        },
        offset: function () {
            if (this.length > 0) {
                var e = l(),
                    t = r(),
                    i = this[0],
                    s = i.getBoundingClientRect(),
                    a = t.body,
                    n = i.clientTop || a.clientTop || 0,
                    o = i.clientLeft || a.clientLeft || 0,
                    d = i === e ? e.scrollY : i.scrollTop,
                    h = i === e ? e.scrollX : i.scrollLeft;
                return {
                    top: s.top + d - n,
                    left: s.left + h - o
                }
            }
            return null
        },
        css: function (e, t) {
            var i, s = l();
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (i = 0; i < this.length; i += 1)
                        for (var a in e) this[i].style[a] = e[a];
                    return this
                }
                if (this[0]) return s.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 === arguments.length && "string" == typeof e) {
                for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
                return this
            }
            return this
        },
        each: function (e) {
            return e ? (this.forEach((function (t, i) {
                e.apply(t, [t, i])
            })), this) : this
        },
        html: function (e) {
            if (void 0 === e) return this[0] ? this[0].innerHTML : null;
            for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
            return this
        },
        text: function (e) {
            if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
            for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
            return this
        },
        is: function (e) {
            var t, i, s = l(),
                a = r(),
                n = this[0];
            if (!n || void 0 === e) return !1;
            if ("string" == typeof e) {
                if (n.matches) return n.matches(e);
                if (n.webkitMatchesSelector) return n.webkitMatchesSelector(e);
                if (n.msMatchesSelector) return n.msMatchesSelector(e);
                for (t = m(e), i = 0; i < t.length; i += 1)
                    if (t[i] === n) return !0;
                return !1
            }
            if (e === a) return n === a;
            if (e === s) return n === s;
            if (e.nodeType || e instanceof c) {
                for (t = e.nodeType ? [e] : e, i = 0; i < t.length; i += 1)
                    if (t[i] === n) return !0;
                return !1
            }
            return !1
        },
        index: function () {
            var e, t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                return e
            }
        },
        eq: function (e) {
            if (void 0 === e) return this;
            var t = this.length;
            if (e > t - 1) return m([]);
            if (e < 0) {
                var i = t + e;
                return m(i < 0 ? [] : [this[i]])
            }
            return m([this[e]])
        },
        append: function () {
            for (var e, t = r(), i = 0; i < arguments.length; i += 1) {
                e = i < 0 || arguments.length <= i ? void 0 : arguments[i];
                for (var s = 0; s < this.length; s += 1)
                    if ("string" == typeof e) {
                        var a = t.createElement("div");
                        for (a.innerHTML = e; a.firstChild;) this[s].appendChild(a.firstChild)
                    } else if (e instanceof c)
                    for (var n = 0; n < e.length; n += 1) this[s].appendChild(e[n]);
                else this[s].appendChild(e)
            }
            return this
        },
        prepend: function (e) {
            var t, i, s = r();
            for (t = 0; t < this.length; t += 1)
                if ("string" == typeof e) {
                    var a = s.createElement("div");
                    for (a.innerHTML = e, i = a.childNodes.length - 1; i >= 0; i -= 1) this[t].insertBefore(a.childNodes[i], this[t].childNodes[0])
                } else if (e instanceof c)
                for (i = 0; i < e.length; i += 1) this[t].insertBefore(e[i], this[t].childNodes[0]);
            else this[t].insertBefore(e, this[t].childNodes[0]);
            return this
        },
        next: function (e) {
            return this.length > 0 ? e ? this[0].nextElementSibling && m(this[0].nextElementSibling).is(e) ? m([this[0].nextElementSibling]) : m([]) : this[0].nextElementSibling ? m([this[0].nextElementSibling]) : m([]) : m([])
        },
        nextAll: function (e) {
            var t = [],
                i = this[0];
            if (!i) return m([]);
            for (; i.nextElementSibling;) {
                var s = i.nextElementSibling;
                e ? m(s).is(e) && t.push(s) : t.push(s), i = s
            }
            return m(t)
        },
        prev: function (e) {
            if (this.length > 0) {
                var t = this[0];
                return e ? t.previousElementSibling && m(t.previousElementSibling).is(e) ? m([t.previousElementSibling]) : m([]) : t.previousElementSibling ? m([t.previousElementSibling]) : m([])
            }
            return m([])
        },
        prevAll: function (e) {
            var t = [],
                i = this[0];
            if (!i) return m([]);
            for (; i.previousElementSibling;) {
                var s = i.previousElementSibling;
                e ? m(s).is(e) && t.push(s) : t.push(s), i = s
            }
            return m(t)
        },
        parent: function (e) {
            for (var t = [], i = 0; i < this.length; i += 1) null !== this[i].parentNode && (e ? m(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
            return m(t)
        },
        parents: function (e) {
            for (var t = [], i = 0; i < this.length; i += 1)
                for (var s = this[i].parentNode; s;) e ? m(s).is(e) && t.push(s) : t.push(s), s = s.parentNode;
            return m(t)
        },
        closest: function (e) {
            var t = this;
            return void 0 === e ? m([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
        },
        find: function (e) {
            for (var t = [], i = 0; i < this.length; i += 1)
                for (var s = this[i].querySelectorAll(e), a = 0; a < s.length; a += 1) t.push(s[a]);
            return m(t)
        },
        children: function (e) {
            for (var t = [], i = 0; i < this.length; i += 1)
                for (var s = this[i].children, a = 0; a < s.length; a += 1) e && !m(s[a]).is(e) || t.push(s[a]);
            return m(t)
        },
        filter: function (e) {
            return m(f(this, e))
        },
        remove: function () {
            for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this
        }
    };

    function E(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t)
    }

    function x() {
        return Date.now()
    }

    function T(e, t) {
        void 0 === t && (t = "x");
        var i, s, a, r = l(),
            n = r.getComputedStyle(e, null);
        return r.WebKitCSSMatrix ? ((s = n.transform || n.webkitTransform).split(",").length > 6 && (s = s.split(", ").map((function (e) {
            return e.replace(",", ".")
        })).join(", ")), a = new r.WebKitCSSMatrix("none" === s ? "" : s)) : i = (a = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (s = r.WebKitCSSMatrix ? a.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (s = r.WebKitCSSMatrix ? a.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), s || 0
    }

    function C(e) {
        return "object" == typeof e && null !== e && e.constructor && e.constructor === Object
    }

    function S() {
        for (var e = Object(arguments.length <= 0 ? void 0 : arguments[0]), t = 1; t < arguments.length; t += 1) {
            var i = t < 0 || arguments.length <= t ? void 0 : arguments[t];
            if (null != i)
                for (var s = Object.keys(Object(i)), a = 0, r = s.length; a < r; a += 1) {
                    var n = s[a],
                        l = Object.getOwnPropertyDescriptor(i, n);
                    void 0 !== l && l.enumerable && (C(e[n]) && C(i[n]) ? S(e[n], i[n]) : !C(e[n]) && C(i[n]) ? (e[n] = {}, S(e[n], i[n])) : e[n] = i[n])
                }
        }
        return e
    }

    function M(e, t) {
        Object.keys(t).forEach((function (i) {
            C(t[i]) && Object.keys(t[i]).forEach((function (s) {
                "function" == typeof t[i][s] && (t[i][s] = t[i][s].bind(e))
            })), e[i] = t[i]
        }))
    }

    function z() {
        return g || (g = function () {
            var e = l(),
                t = r();
            return {
                touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
                pointerEvents: !!e.PointerEvent && "maxTouchPoints" in e.navigator && e.navigator.maxTouchPoints >= 0,
                observer: "MutationObserver" in e || "WebkitMutationObserver" in e,
                passiveListener: function () {
                    var t = !1;
                    try {
                        var i = Object.defineProperty({}, "passive", {
                            get: function () {
                                t = !0
                            }
                        });
                        e.addEventListener("testPassiveListener", null, i)
                    } catch (e) {}
                    return t
                }(),
                gestures: "ongesturestart" in e
            }
        }()), g
    }

    function P(e) {
        return void 0 === e && (e = {}), w || (w = function (e) {
            var t = (void 0 === e ? {} : e).userAgent,
                i = z(),
                s = l(),
                a = s.navigator.platform,
                r = t || s.navigator.userAgent,
                n = {
                    ios: !1,
                    android: !1
                },
                o = s.screen.width,
                d = s.screen.height,
                h = r.match(/(Android);?[\s\/]+([\d.]+)?/),
                p = r.match(/(iPad).*OS\s([\d_]+)/),
                u = r.match(/(iPod)(.*OS\s([\d_]+))?/),
                c = !p && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                v = "Win32" === a,
                f = "MacIntel" === a;
            return !p && f && i.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(o + "x" + d) >= 0 && ((p = r.match(/(Version)\/([\d.]+)/)) || (p = [0, 1, "13_0_0"]), f = !1), h && !v && (n.os = "android", n.android = !0), (p || c || u) && (n.os = "ios", n.ios = !0), n
        }(e)), w
    }

    function k() {
        return y || (y = function () {
            var e, t = l();
            return {
                isEdge: !!t.navigator.userAgent.match(/Edge/g),
                isSafari: (e = t.navigator.userAgent.toLowerCase(), e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0),
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
            }
        }()), y
    }
    Object.keys(b).forEach((function (e) {
        m.fn[e] = b[e]
    }));
    var $ = {
            name: "resize",
            create: function () {
                var e = this;
                S(e, {
                    resize: {
                        resizeHandler: function () {
                            e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"))
                        },
                        orientationChangeHandler: function () {
                            e && !e.destroyed && e.initialized && e.emit("orientationchange")
                        }
                    }
                })
            },
            on: {
                init: function (e) {
                    var t = l();
                    t.addEventListener("resize", e.resize.resizeHandler), t.addEventListener("orientationchange", e.resize.orientationChangeHandler)
                },
                destroy: function (e) {
                    var t = l();
                    t.removeEventListener("resize", e.resize.resizeHandler), t.removeEventListener("orientationchange", e.resize.orientationChangeHandler)
                }
            }
        },
        L = {
            attach: function (e, t) {
                void 0 === t && (t = {});
                var i = l(),
                    s = this,
                    a = new(i.MutationObserver || i.WebkitMutationObserver)((function (e) {
                        if (1 !== e.length) {
                            var t = function () {
                                s.emit("observerUpdate", e[0])
                            };
                            i.requestAnimationFrame ? i.requestAnimationFrame(t) : i.setTimeout(t, 0)
                        } else s.emit("observerUpdate", e[0])
                    }));
                a.observe(e, {
                    attributes: void 0 === t.attributes || t.attributes,
                    childList: void 0 === t.childList || t.childList,
                    characterData: void 0 === t.characterData || t.characterData
                }), s.observer.observers.push(a)
            },
            init: function () {
                if (this.support.observer && this.params.observer) {
                    if (this.params.observeParents)
                        for (var e = this.$el.parents(), t = 0; t < e.length; t += 1) this.observer.attach(e[t]);
                    this.observer.attach(this.$el[0], {
                        childList: this.params.observeSlideChildren
                    }), this.observer.attach(this.$wrapperEl[0], {
                        attributes: !1
                    })
                }
            },
            destroy: function () {
                this.observer.observers.forEach((function (e) {
                    e.disconnect()
                })), this.observer.observers = []
            }
        },
        I = {
            name: "observer",
            params: {
                observer: !1,
                observeParents: !1,
                observeSlideChildren: !1
            },
            create: function () {
                M(this, {
                    observer: t(t({}, L), {}, {
                        observers: []
                    })
                })
            },
            on: {
                init: function (e) {
                    e.observer.init()
                },
                destroy: function (e) {
                    e.observer.destroy()
                }
            }
        };

    function O(e) {
        var t = r(),
            i = l(),
            s = this.touchEventsData,
            a = this.params,
            n = this.touches;
        if (!this.animating || !a.preventInteractionOnTransition) {
            var o = e;
            o.originalEvent && (o = o.originalEvent);
            var d = m(o.target);
            if (("wrapper" !== a.touchEventsTarget || d.closest(this.wrapperEl).length) && (s.isTouchEvent = "touchstart" === o.type, (s.isTouchEvent || !("which" in o) || 3 !== o.which) && !(!s.isTouchEvent && "button" in o && o.button > 0 || s.isTouched && s.isMoved)))
                if (a.noSwiping && d.closest(a.noSwipingSelector ? a.noSwipingSelector : "." + a.noSwipingClass)[0]) this.allowClick = !0;
                else if (!a.swipeHandler || d.closest(a.swipeHandler)[0]) {
                n.currentX = "touchstart" === o.type ? o.targetTouches[0].pageX : o.pageX, n.currentY = "touchstart" === o.type ? o.targetTouches[0].pageY : o.pageY;
                var h = n.currentX,
                    p = n.currentY,
                    u = a.edgeSwipeDetection || a.iOSEdgeSwipeDetection,
                    c = a.edgeSwipeThreshold || a.iOSEdgeSwipeThreshold;
                if (!u || !(h <= c || h >= i.screen.width - c)) {
                    if (S(s, {
                            isTouched: !0,
                            isMoved: !1,
                            allowTouchCallbacks: !0,
                            isScrolling: void 0,
                            startMoving: void 0
                        }), n.startX = h, n.startY = p, s.touchStartTime = x(), this.allowClick = !0, this.updateSize(), this.swipeDirection = void 0, a.threshold > 0 && (s.allowThresholdMove = !1), "touchstart" !== o.type) {
                        var v = !0;
                        d.is(s.formElements) && (v = !1), t.activeElement && m(t.activeElement).is(s.formElements) && t.activeElement !== d[0] && t.activeElement.blur();
                        var f = v && this.allowTouchMove && a.touchStartPreventDefault;
                        (a.touchStartForcePreventDefault || f) && o.preventDefault()
                    }
                    this.emit("touchStart", o)
                }
            }
        }
    }

    function A(e) {
        var t = r(),
            i = this.touchEventsData,
            s = this.params,
            a = this.touches,
            n = this.rtlTranslate,
            l = e;
        if (l.originalEvent && (l = l.originalEvent), i.isTouched) {
            if (!i.isTouchEvent || "touchmove" === l.type) {
                var o = "touchmove" === l.type && l.targetTouches && (l.targetTouches[0] || l.changedTouches[0]),
                    d = "touchmove" === l.type ? o.pageX : l.pageX,
                    h = "touchmove" === l.type ? o.pageY : l.pageY;
                if (l.preventedByNestedSwiper) return a.startX = d, void(a.startY = h);
                if (!this.allowTouchMove) return this.allowClick = !1, void(i.isTouched && (S(a, {
                    startX: d,
                    startY: h,
                    currentX: d,
                    currentY: h
                }), i.touchStartTime = x()));
                if (i.isTouchEvent && s.touchReleaseOnEdges && !s.loop)
                    if (this.isVertical()) {
                        if (h < a.startY && this.translate <= this.maxTranslate() || h > a.startY && this.translate >= this.minTranslate()) return i.isTouched = !1, void(i.isMoved = !1)
                    } else if (d < a.startX && this.translate <= this.maxTranslate() || d > a.startX && this.translate >= this.minTranslate()) return;
                if (i.isTouchEvent && t.activeElement && l.target === t.activeElement && m(l.target).is(i.formElements)) return i.isMoved = !0, void(this.allowClick = !1);
                if (i.allowTouchCallbacks && this.emit("touchMove", l), !(l.targetTouches && l.targetTouches.length > 1)) {
                    a.currentX = d, a.currentY = h;
                    var p = a.currentX - a.startX,
                        u = a.currentY - a.startY;
                    if (!(this.params.threshold && Math.sqrt(Math.pow(p, 2) + Math.pow(u, 2)) < this.params.threshold)) {
                        var c;
                        if (void 0 === i.isScrolling) this.isHorizontal() && a.currentY === a.startY || this.isVertical() && a.currentX === a.startX ? i.isScrolling = !1 : p * p + u * u >= 25 && (c = 180 * Math.atan2(Math.abs(u), Math.abs(p)) / Math.PI, i.isScrolling = this.isHorizontal() ? c > s.touchAngle : 90 - c > s.touchAngle);
                        if (i.isScrolling && this.emit("touchMoveOpposite", l), void 0 === i.startMoving && (a.currentX === a.startX && a.currentY === a.startY || (i.startMoving = !0)), i.isScrolling) i.isTouched = !1;
                        else if (i.startMoving) {
                            this.allowClick = !1, !s.cssMode && l.cancelable && l.preventDefault(), s.touchMoveStopPropagation && !s.nested && l.stopPropagation(), i.isMoved || (s.loop && this.loopFix(), i.startTranslate = this.getTranslate(), this.setTransition(0), this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !s.grabCursor || !0 !== this.allowSlideNext && !0 !== this.allowSlidePrev || this.setGrabCursor(!0), this.emit("sliderFirstMove", l)), this.emit("sliderMove", l), i.isMoved = !0;
                            var v = this.isHorizontal() ? p : u;
                            a.diff = v, v *= s.touchRatio, n && (v = -v), this.swipeDirection = v > 0 ? "prev" : "next", i.currentTranslate = v + i.startTranslate;
                            var f = !0,
                                g = s.resistanceRatio;
                            if (s.touchReleaseOnEdges && (g = 0), v > 0 && i.currentTranslate > this.minTranslate() ? (f = !1, s.resistance && (i.currentTranslate = this.minTranslate() - 1 + Math.pow(-this.minTranslate() + i.startTranslate + v, g))) : v < 0 && i.currentTranslate < this.maxTranslate() && (f = !1, s.resistance && (i.currentTranslate = this.maxTranslate() + 1 - Math.pow(this.maxTranslate() - i.startTranslate - v, g))), f && (l.preventedByNestedSwiper = !0), !this.allowSlideNext && "next" === this.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !this.allowSlidePrev && "prev" === this.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), s.threshold > 0) {
                                if (!(Math.abs(v) > s.threshold || i.allowThresholdMove)) return void(i.currentTranslate = i.startTranslate);
                                if (!i.allowThresholdMove) return i.allowThresholdMove = !0, a.startX = a.currentX, a.startY = a.currentY, i.currentTranslate = i.startTranslate, void(a.diff = this.isHorizontal() ? a.currentX - a.startX : a.currentY - a.startY)
                            }
                            s.followFinger && !s.cssMode && ((s.freeMode || s.watchSlidesProgress || s.watchSlidesVisibility) && (this.updateActiveIndex(), this.updateSlidesClasses()), s.freeMode && (0 === i.velocities.length && i.velocities.push({
                                position: a[this.isHorizontal() ? "startX" : "startY"],
                                time: i.touchStartTime
                            }), i.velocities.push({
                                position: a[this.isHorizontal() ? "currentX" : "currentY"],
                                time: x()
                            })), this.updateProgress(i.currentTranslate), this.setTranslate(i.currentTranslate))
                        }
                    }
                }
            }
        } else i.startMoving && i.isScrolling && this.emit("touchMoveOpposite", l)
    }

    function D(e) {
        var t = this,
            i = t.touchEventsData,
            s = t.params,
            a = t.touches,
            r = t.rtlTranslate,
            n = t.$wrapperEl,
            l = t.slidesGrid,
            o = t.snapGrid,
            d = e;
        if (d.originalEvent && (d = d.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", d), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && s.grabCursor && t.setGrabCursor(!1), i.isMoved = !1, void(i.startMoving = !1);
        s.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        var h, p = x(),
            u = p - i.touchStartTime;
        if (t.allowClick && (t.updateClickedSlide(d), t.emit("tap click", d), u < 300 && p - i.lastClickTime < 300 && t.emit("doubleTap doubleClick", d)), i.lastClickTime = x(), E((function () {
                t.destroyed || (t.allowClick = !0)
            })), !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === a.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, i.isMoved = !1, void(i.startMoving = !1);
        if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, h = s.followFinger ? r ? t.translate : -t.translate : -i.currentTranslate, !s.cssMode)
            if (s.freeMode) {
                if (h < -t.minTranslate()) return void t.slideTo(t.activeIndex);
                if (h > -t.maxTranslate()) return void(t.slides.length < o.length ? t.slideTo(o.length - 1) : t.slideTo(t.slides.length - 1));
                if (s.freeModeMomentum) {
                    if (i.velocities.length > 1) {
                        var c = i.velocities.pop(),
                            v = i.velocities.pop(),
                            f = c.position - v.position,
                            m = c.time - v.time;
                        t.velocity = f / m, t.velocity /= 2, Math.abs(t.velocity) < s.freeModeMinimumVelocity && (t.velocity = 0), (m > 150 || x() - c.time > 300) && (t.velocity = 0)
                    } else t.velocity = 0;
                    t.velocity *= s.freeModeMomentumVelocityRatio, i.velocities.length = 0;
                    var g = 1e3 * s.freeModeMomentumRatio,
                        w = t.velocity * g,
                        y = t.translate + w;
                    r && (y = -y);
                    var b, T, C = !1,
                        S = 20 * Math.abs(t.velocity) * s.freeModeMomentumBounceRatio;
                    if (y < t.maxTranslate()) s.freeModeMomentumBounce ? (y + t.maxTranslate() < -S && (y = t.maxTranslate() - S), b = t.maxTranslate(), C = !0, i.allowMomentumBounce = !0) : y = t.maxTranslate(), s.loop && s.centeredSlides && (T = !0);
                    else if (y > t.minTranslate()) s.freeModeMomentumBounce ? (y - t.minTranslate() > S && (y = t.minTranslate() + S), b = t.minTranslate(), C = !0, i.allowMomentumBounce = !0) : y = t.minTranslate(), s.loop && s.centeredSlides && (T = !0);
                    else if (s.freeModeSticky) {
                        for (var M, z = 0; z < o.length; z += 1)
                            if (o[z] > -y) {
                                M = z;
                                break
                            } y = -(y = Math.abs(o[M] - y) < Math.abs(o[M - 1] - y) || "next" === t.swipeDirection ? o[M] : o[M - 1])
                    }
                    if (T && t.once("transitionEnd", (function () {
                            t.loopFix()
                        })), 0 !== t.velocity) {
                        if (g = r ? Math.abs((-y - t.translate) / t.velocity) : Math.abs((y - t.translate) / t.velocity), s.freeModeSticky) {
                            var P = Math.abs((r ? -y : y) - t.translate),
                                k = t.slidesSizesGrid[t.activeIndex];
                            g = P < k ? s.speed : P < 2 * k ? 1.5 * s.speed : 2.5 * s.speed
                        }
                    } else if (s.freeModeSticky) return void t.slideToClosest();
                    s.freeModeMomentumBounce && C ? (t.updateProgress(b), t.setTransition(g), t.setTranslate(y), t.transitionStart(!0, t.swipeDirection), t.animating = !0, n.transitionEnd((function () {
                        t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(s.speed), setTimeout((function () {
                            t.setTranslate(b), n.transitionEnd((function () {
                                t && !t.destroyed && t.transitionEnd()
                            }))
                        }), 0))
                    }))) : t.velocity ? (t.updateProgress(y), t.setTransition(g), t.setTranslate(y), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, n.transitionEnd((function () {
                        t && !t.destroyed && t.transitionEnd()
                    })))) : t.updateProgress(y), t.updateActiveIndex(), t.updateSlidesClasses()
                } else if (s.freeModeSticky) return void t.slideToClosest();
                (!s.freeModeMomentum || u >= s.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
            } else {
                for (var $ = 0, L = t.slidesSizesGrid[0], I = 0; I < l.length; I += I < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup) {
                    var O = I < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
                    void 0 !== l[I + O] ? h >= l[I] && h < l[I + O] && ($ = I, L = l[I + O] - l[I]) : h >= l[I] && ($ = I, L = l[l.length - 1] - l[l.length - 2])
                }
                var A = (h - l[$]) / L,
                    D = $ < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
                if (u > s.longSwipesMs) {
                    if (!s.longSwipes) return void t.slideTo(t.activeIndex);
                    "next" === t.swipeDirection && (A >= s.longSwipesRatio ? t.slideTo($ + D) : t.slideTo($)), "prev" === t.swipeDirection && (A > 1 - s.longSwipesRatio ? t.slideTo($ + D) : t.slideTo($))
                } else {
                    if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
                    t.navigation && (d.target === t.navigation.nextEl || d.target === t.navigation.prevEl) ? d.target === t.navigation.nextEl ? t.slideTo($ + D) : t.slideTo($) : ("next" === t.swipeDirection && t.slideTo($ + D), "prev" === t.swipeDirection && t.slideTo($))
                }
            }
    }

    function G() {
        var e = this.params,
            t = this.el;
        if (!t || 0 !== t.offsetWidth) {
            e.breakpoints && this.setBreakpoint();
            var i = this.allowSlideNext,
                s = this.allowSlidePrev,
                a = this.snapGrid;
            this.allowSlideNext = !0, this.allowSlidePrev = !0, this.updateSize(), this.updateSlides(), this.updateSlidesClasses(), ("auto" === e.slidesPerView || e.slidesPerView > 1) && this.isEnd && !this.isBeginning && !this.params.centeredSlides ? this.slideTo(this.slides.length - 1, 0, !1, !0) : this.slideTo(this.activeIndex, 0, !1, !0), this.autoplay && this.autoplay.running && this.autoplay.paused && this.autoplay.run(), this.allowSlidePrev = s, this.allowSlideNext = i, this.params.watchOverflow && a !== this.snapGrid && this.checkOverflow()
        }
    }

    function N(e) {
        this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
    }

    function B() {
        var e = this.wrapperEl,
            t = this.rtlTranslate;
        this.previousTranslate = this.translate, this.isHorizontal() ? this.translate = t ? e.scrollWidth - e.offsetWidth - e.scrollLeft : -e.scrollLeft : this.translate = -e.scrollTop, -0 === this.translate && (this.translate = 0), this.updateActiveIndex(), this.updateSlidesClasses();
        var i = this.maxTranslate() - this.minTranslate();
        (0 === i ? 0 : (this.translate - this.minTranslate()) / i) !== this.progress && this.updateProgress(t ? -this.translate : this.translate), this.emit("setTranslate", this.translate, !1)
    }
    var H = !1;

    function X() {}
    var Y = {
            init: !0,
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            cssMode: !1,
            updateOnWindowResize: !0,
            nested: !1,
            width: null,
            height: null,
            preventInteractionOnTransition: !1,
            userAgent: null,
            url: null,
            edgeSwipeDetection: !1,
            edgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: !1,
            freeModeMinimumVelocity: .02,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            centeredSlides: !1,
            centeredSlidesBounds: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            centerInsufficientSlides: !1,
            watchOverflow: !1,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 0,
            touchMoveStopPropagation: !1,
            touchStartPreventDefault: !0,
            touchStartForcePreventDefault: !1,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: .85,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopFillGroupWithBlank: !1,
            loopPreventsSlide: !0,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: !0,
            containerModifierClass: "swiper-container-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: !0,
            _emitClasses: !1
        },
        V = {
            modular: {
                useParams: function (e) {
                    var t = this;
                    t.modules && Object.keys(t.modules).forEach((function (i) {
                        var s = t.modules[i];
                        s.params && S(e, s.params)
                    }))
                },
                useModules: function (e) {
                    void 0 === e && (e = {});
                    var t = this;
                    t.modules && Object.keys(t.modules).forEach((function (i) {
                        var s = t.modules[i],
                            a = e[i] || {};
                        s.on && t.on && Object.keys(s.on).forEach((function (e) {
                            t.on(e, s.on[e])
                        })), s.create && s.create.bind(t)(a)
                    }))
                }
            },
            eventsEmitter: {
                on: function (e, t, i) {
                    var s = this;
                    if ("function" != typeof t) return s;
                    var a = i ? "unshift" : "push";
                    return e.split(" ").forEach((function (e) {
                        s.eventsListeners[e] || (s.eventsListeners[e] = []), s.eventsListeners[e][a](t)
                    })), s
                },
                once: function (e, t, i) {
                    var s = this;
                    if ("function" != typeof t) return s;

                    function a() {
                        s.off(e, a), a.__emitterProxy && delete a.__emitterProxy;
                        for (var i = arguments.length, r = new Array(i), n = 0; n < i; n++) r[n] = arguments[n];
                        t.apply(s, r)
                    }
                    return a.__emitterProxy = t, s.on(e, a, i)
                },
                onAny: function (e, t) {
                    if ("function" != typeof e) return this;
                    var i = t ? "unshift" : "push";
                    return this.eventsAnyListeners.indexOf(e) < 0 && this.eventsAnyListeners[i](e), this
                },
                offAny: function (e) {
                    if (!this.eventsAnyListeners) return this;
                    var t = this.eventsAnyListeners.indexOf(e);
                    return t >= 0 && this.eventsAnyListeners.splice(t, 1), this
                },
                off: function (e, t) {
                    var i = this;
                    return i.eventsListeners ? (e.split(" ").forEach((function (e) {
                        void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].forEach((function (s, a) {
                            (s === t || s.__emitterProxy && s.__emitterProxy === t) && i.eventsListeners[e].splice(a, 1)
                        }))
                    })), i) : i
                },
                emit: function () {
                    var e, t, i, s = this;
                    if (!s.eventsListeners) return s;
                    for (var a = arguments.length, r = new Array(a), n = 0; n < a; n++) r[n] = arguments[n];
                    "string" == typeof r[0] || Array.isArray(r[0]) ? (e = r[0], t = r.slice(1, r.length), i = s) : (e = r[0].events, t = r[0].data, i = r[0].context || s), t.unshift(i);
                    var l = Array.isArray(e) ? e : e.split(" ");
                    return l.forEach((function (e) {
                        if (s.eventsAnyListeners && s.eventsAnyListeners.length && s.eventsAnyListeners.forEach((function (s) {
                                s.apply(i, [e].concat(t))
                            })), s.eventsListeners && s.eventsListeners[e]) {
                            var a = [];
                            s.eventsListeners[e].forEach((function (e) {
                                a.push(e)
                            })), a.forEach((function (e) {
                                e.apply(i, t)
                            }))
                        }
                    })), s
                }
            },
            update: {
                updateSize: function () {
                    var e, t, i = this.$el;
                    e = void 0 !== this.params.width && null !== this.params.width ? this.params.width : i[0].clientWidth, t = void 0 !== this.params.height && null !== this.params.width ? this.params.height : i[0].clientHeight, 0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt(i.css("padding-left") || 0, 10) - parseInt(i.css("padding-right") || 0, 10), t = t - parseInt(i.css("padding-top") || 0, 10) - parseInt(i.css("padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(t) && (t = 0), S(this, {
                        width: e,
                        height: t,
                        size: this.isHorizontal() ? e : t
                    }))
                },
                updateSlides: function () {
                    var e = l(),
                        t = this.params,
                        i = this.$wrapperEl,
                        s = this.size,
                        a = this.rtlTranslate,
                        r = this.wrongRTL,
                        n = this.virtual && t.virtual.enabled,
                        o = n ? this.virtual.slides.length : this.slides.length,
                        d = i.children("." + this.params.slideClass),
                        h = n ? this.virtual.slides.length : d.length,
                        p = [],
                        u = [],
                        c = [];

                    function v(e, i) {
                        return !t.cssMode || i !== d.length - 1
                    }
                    var f = t.slidesOffsetBefore;
                    "function" == typeof f && (f = t.slidesOffsetBefore.call(this));
                    var m = t.slidesOffsetAfter;
                    "function" == typeof m && (m = t.slidesOffsetAfter.call(this));
                    var g = this.snapGrid.length,
                        w = this.snapGrid.length,
                        y = t.spaceBetween,
                        b = -f,
                        E = 0,
                        x = 0;
                    if (void 0 !== s) {
                        var T, C;
                        "string" == typeof y && y.indexOf("%") >= 0 && (y = parseFloat(y.replace("%", "")) / 100 * s), this.virtualSize = -y, a ? d.css({
                            marginLeft: "",
                            marginTop: ""
                        }) : d.css({
                            marginRight: "",
                            marginBottom: ""
                        }), t.slidesPerColumn > 1 && (T = Math.floor(h / t.slidesPerColumn) === h / this.params.slidesPerColumn ? h : Math.ceil(h / t.slidesPerColumn) * t.slidesPerColumn, "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (T = Math.max(T, t.slidesPerView * t.slidesPerColumn)));
                        for (var M, z = t.slidesPerColumn, P = T / z, k = Math.floor(h / t.slidesPerColumn), $ = 0; $ < h; $ += 1) {
                            C = 0;
                            var L = d.eq($);
                            if (t.slidesPerColumn > 1) {
                                var I = void 0,
                                    O = void 0,
                                    A = void 0;
                                if ("row" === t.slidesPerColumnFill && t.slidesPerGroup > 1) {
                                    var D = Math.floor($ / (t.slidesPerGroup * t.slidesPerColumn)),
                                        G = $ - t.slidesPerColumn * t.slidesPerGroup * D,
                                        N = 0 === D ? t.slidesPerGroup : Math.min(Math.ceil((h - D * z * t.slidesPerGroup) / z), t.slidesPerGroup);
                                    I = (O = G - (A = Math.floor(G / N)) * N + D * t.slidesPerGroup) + A * T / z, L.css({
                                        "-webkit-box-ordinal-group": I,
                                        "-moz-box-ordinal-group": I,
                                        "-ms-flex-order": I,
                                        "-webkit-order": I,
                                        order: I
                                    })
                                } else "column" === t.slidesPerColumnFill ? (A = $ - (O = Math.floor($ / z)) * z, (O > k || O === k && A === z - 1) && (A += 1) >= z && (A = 0, O += 1)) : O = $ - (A = Math.floor($ / P)) * P;
                                L.css("margin-" + (this.isHorizontal() ? "top" : "left"), 0 !== A && t.spaceBetween && t.spaceBetween + "px")
                            }
                            if ("none" !== L.css("display")) {
                                if ("auto" === t.slidesPerView) {
                                    var B = e.getComputedStyle(L[0], null),
                                        H = L[0].style.transform,
                                        X = L[0].style.webkitTransform;
                                    if (H && (L[0].style.transform = "none"), X && (L[0].style.webkitTransform = "none"), t.roundLengths) C = this.isHorizontal() ? L.outerWidth(!0) : L.outerHeight(!0);
                                    else if (this.isHorizontal()) {
                                        var Y = parseFloat(B.getPropertyValue("width") || 0),
                                            V = parseFloat(B.getPropertyValue("padding-left") || 0),
                                            F = parseFloat(B.getPropertyValue("padding-right") || 0),
                                            R = parseFloat(B.getPropertyValue("margin-left") || 0),
                                            W = parseFloat(B.getPropertyValue("margin-right") || 0),
                                            q = B.getPropertyValue("box-sizing");
                                        if (q && "border-box" === q) C = Y + R + W;
                                        else {
                                            var j = L[0],
                                                _ = j.clientWidth;
                                            C = Y + V + F + R + W + (j.offsetWidth - _)
                                        }
                                    } else {
                                        var U = parseFloat(B.getPropertyValue("height") || 0),
                                            K = parseFloat(B.getPropertyValue("padding-top") || 0),
                                            Z = parseFloat(B.getPropertyValue("padding-bottom") || 0),
                                            J = parseFloat(B.getPropertyValue("margin-top") || 0),
                                            Q = parseFloat(B.getPropertyValue("margin-bottom") || 0),
                                            ee = B.getPropertyValue("box-sizing");
                                        if (ee && "border-box" === ee) C = U + J + Q;
                                        else {
                                            var te = L[0],
                                                ie = te.clientHeight;
                                            C = U + K + Z + J + Q + (te.offsetHeight - ie)
                                        }
                                    }
                                    H && (L[0].style.transform = H), X && (L[0].style.webkitTransform = X), t.roundLengths && (C = Math.floor(C))
                                } else C = (s - (t.slidesPerView - 1) * y) / t.slidesPerView, t.roundLengths && (C = Math.floor(C)), d[$] && (this.isHorizontal() ? d[$].style.width = C + "px" : d[$].style.height = C + "px");
                                d[$] && (d[$].swiperSlideSize = C), c.push(C), t.centeredSlides ? (b = b + C / 2 + E / 2 + y, 0 === E && 0 !== $ && (b = b - s / 2 - y), 0 === $ && (b = b - s / 2 - y), Math.abs(b) < .001 && (b = 0), t.roundLengths && (b = Math.floor(b)), x % t.slidesPerGroup == 0 && p.push(b), u.push(b)) : (t.roundLengths && (b = Math.floor(b)), (x - Math.min(this.params.slidesPerGroupSkip, x)) % this.params.slidesPerGroup == 0 && p.push(b), u.push(b), b = b + C + y), this.virtualSize += C + y, E = C, x += 1
                            }
                        }
                        if (this.virtualSize = Math.max(this.virtualSize, s) + m, a && r && ("slide" === t.effect || "coverflow" === t.effect) && i.css({
                                width: this.virtualSize + t.spaceBetween + "px"
                            }), t.setWrapperSize && (this.isHorizontal() ? i.css({
                                width: this.virtualSize + t.spaceBetween + "px"
                            }) : i.css({
                                height: this.virtualSize + t.spaceBetween + "px"
                            })), t.slidesPerColumn > 1 && (this.virtualSize = (C + t.spaceBetween) * T, this.virtualSize = Math.ceil(this.virtualSize / t.slidesPerColumn) - t.spaceBetween, this.isHorizontal() ? i.css({
                                width: this.virtualSize + t.spaceBetween + "px"
                            }) : i.css({
                                height: this.virtualSize + t.spaceBetween + "px"
                            }), t.centeredSlides)) {
                            M = [];
                            for (var se = 0; se < p.length; se += 1) {
                                var ae = p[se];
                                t.roundLengths && (ae = Math.floor(ae)), p[se] < this.virtualSize + p[0] && M.push(ae)
                            }
                            p = M
                        }
                        if (!t.centeredSlides) {
                            M = [];
                            for (var re = 0; re < p.length; re += 1) {
                                var ne = p[re];
                                t.roundLengths && (ne = Math.floor(ne)), p[re] <= this.virtualSize - s && M.push(ne)
                            }
                            p = M, Math.floor(this.virtualSize - s) - Math.floor(p[p.length - 1]) > 1 && p.push(this.virtualSize - s)
                        }
                        if (0 === p.length && (p = [0]), 0 !== t.spaceBetween && (this.isHorizontal() ? a ? d.filter(v).css({
                                marginLeft: y + "px"
                            }) : d.filter(v).css({
                                marginRight: y + "px"
                            }) : d.filter(v).css({
                                marginBottom: y + "px"
                            })), t.centeredSlides && t.centeredSlidesBounds) {
                            var le = 0;
                            c.forEach((function (e) {
                                le += e + (t.spaceBetween ? t.spaceBetween : 0)
                            }));
                            var oe = (le -= t.spaceBetween) - s;
                            p = p.map((function (e) {
                                return e < 0 ? -f : e > oe ? oe + m : e
                            }))
                        }
                        if (t.centerInsufficientSlides) {
                            var de = 0;
                            if (c.forEach((function (e) {
                                    de += e + (t.spaceBetween ? t.spaceBetween : 0)
                                })), (de -= t.spaceBetween) < s) {
                                var he = (s - de) / 2;
                                p.forEach((function (e, t) {
                                    p[t] = e - he
                                })), u.forEach((function (e, t) {
                                    u[t] = e + he
                                }))
                            }
                        }
                        S(this, {
                            slides: d,
                            snapGrid: p,
                            slidesGrid: u,
                            slidesSizesGrid: c
                        }), h !== o && this.emit("slidesLengthChange"), p.length !== g && (this.params.watchOverflow && this.checkOverflow(), this.emit("snapGridLengthChange")), u.length !== w && this.emit("slidesGridLengthChange"), (t.watchSlidesProgress || t.watchSlidesVisibility) && this.updateSlidesOffset()
                    }
                },
                updateAutoHeight: function (e) {
                    var t, i = [],
                        s = 0;
                    if ("number" == typeof e ? this.setTransition(e) : !0 === e && this.setTransition(this.params.speed), "auto" !== this.params.slidesPerView && this.params.slidesPerView > 1)
                        if (this.params.centeredSlides) this.visibleSlides.each((function (e) {
                            i.push(e)
                        }));
                        else
                            for (t = 0; t < Math.ceil(this.params.slidesPerView); t += 1) {
                                var a = this.activeIndex + t;
                                if (a > this.slides.length) break;
                                i.push(this.slides.eq(a)[0])
                            } else i.push(this.slides.eq(this.activeIndex)[0]);
                    for (t = 0; t < i.length; t += 1)
                        if (void 0 !== i[t]) {
                            var r = i[t].offsetHeight;
                            s = r > s ? r : s
                        } s && this.$wrapperEl.css("height", s + "px")
                },
                updateSlidesOffset: function () {
                    for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
                },
                updateSlidesProgress: function (e) {
                    void 0 === e && (e = this && this.translate || 0);
                    var t = this.params,
                        i = this.slides,
                        s = this.rtlTranslate;
                    if (0 !== i.length) {
                        void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
                        var a = -e;
                        s && (a = e), i.removeClass(t.slideVisibleClass), this.visibleSlidesIndexes = [], this.visibleSlides = [];
                        for (var r = 0; r < i.length; r += 1) {
                            var n = i[r],
                                l = (a + (t.centeredSlides ? this.minTranslate() : 0) - n.swiperSlideOffset) / (n.swiperSlideSize + t.spaceBetween);
                            if (t.watchSlidesVisibility || t.centeredSlides && t.autoHeight) {
                                var o = -(a - n.swiperSlideOffset),
                                    d = o + this.slidesSizesGrid[r];
                                (o >= 0 && o < this.size - 1 || d > 1 && d <= this.size || o <= 0 && d >= this.size) && (this.visibleSlides.push(n), this.visibleSlidesIndexes.push(r), i.eq(r).addClass(t.slideVisibleClass))
                            }
                            n.progress = s ? -l : l
                        }
                        this.visibleSlides = m(this.visibleSlides)
                    }
                },
                updateProgress: function (e) {
                    if (void 0 === e) {
                        var t = this.rtlTranslate ? -1 : 1;
                        e = this && this.translate && this.translate * t || 0
                    }
                    var i = this.params,
                        s = this.maxTranslate() - this.minTranslate(),
                        a = this.progress,
                        r = this.isBeginning,
                        n = this.isEnd,
                        l = r,
                        o = n;
                    0 === s ? (a = 0, r = !0, n = !0) : (r = (a = (e - this.minTranslate()) / s) <= 0, n = a >= 1), S(this, {
                        progress: a,
                        isBeginning: r,
                        isEnd: n
                    }), (i.watchSlidesProgress || i.watchSlidesVisibility || i.centeredSlides && i.autoHeight) && this.updateSlidesProgress(e), r && !l && this.emit("reachBeginning toEdge"), n && !o && this.emit("reachEnd toEdge"), (l && !r || o && !n) && this.emit("fromEdge"), this.emit("progress", a)
                },
                updateSlidesClasses: function () {
                    var e, t = this.slides,
                        i = this.params,
                        s = this.$wrapperEl,
                        a = this.activeIndex,
                        r = this.realIndex,
                        n = this.virtual && i.virtual.enabled;
                    t.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = n ? this.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + a + '"]') : t.eq(a)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass));
                    var l = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
                    i.loop && 0 === l.length && (l = t.eq(0)).addClass(i.slideNextClass);
                    var o = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
                    i.loop && 0 === o.length && (o = t.eq(-1)).addClass(i.slidePrevClass), i.loop && (l.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), o.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass)), this.emitSlidesClasses()
                },
                updateActiveIndex: function (e) {
                    var t, i = this.rtlTranslate ? this.translate : -this.translate,
                        s = this.slidesGrid,
                        a = this.snapGrid,
                        r = this.params,
                        n = this.activeIndex,
                        l = this.realIndex,
                        o = this.snapIndex,
                        d = e;
                    if (void 0 === d) {
                        for (var h = 0; h < s.length; h += 1) void 0 !== s[h + 1] ? i >= s[h] && i < s[h + 1] - (s[h + 1] - s[h]) / 2 ? d = h : i >= s[h] && i < s[h + 1] && (d = h + 1) : i >= s[h] && (d = h);
                        r.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0)
                    }
                    if (a.indexOf(i) >= 0) t = a.indexOf(i);
                    else {
                        var p = Math.min(r.slidesPerGroupSkip, d);
                        t = p + Math.floor((d - p) / r.slidesPerGroup)
                    }
                    if (t >= a.length && (t = a.length - 1), d !== n) {
                        var u = parseInt(this.slides.eq(d).attr("data-swiper-slide-index") || d, 10);
                        S(this, {
                            snapIndex: t,
                            realIndex: u,
                            previousIndex: n,
                            activeIndex: d
                        }), this.emit("activeIndexChange"), this.emit("snapIndexChange"), l !== u && this.emit("realIndexChange"), (this.initialized || this.params.runCallbacksOnInit) && this.emit("slideChange")
                    } else t !== o && (this.snapIndex = t, this.emit("snapIndexChange"))
                },
                updateClickedSlide: function (e) {
                    var t = this.params,
                        i = m(e.target).closest("." + t.slideClass)[0],
                        s = !1;
                    if (i)
                        for (var a = 0; a < this.slides.length; a += 1) this.slides[a] === i && (s = !0);
                    if (!i || !s) return this.clickedSlide = void 0, void(this.clickedIndex = void 0);
                    this.clickedSlide = i, this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(m(i).attr("data-swiper-slide-index"), 10) : this.clickedIndex = m(i).index(), t.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide()
                }
            },
            translate: {
                getTranslate: function (e) {
                    void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                    var t = this.params,
                        i = this.rtlTranslate,
                        s = this.translate,
                        a = this.$wrapperEl;
                    if (t.virtualTranslate) return i ? -s : s;
                    if (t.cssMode) return s;
                    var r = T(a[0], e);
                    return i && (r = -r), r || 0
                },
                setTranslate: function (e, t) {
                    var i = this.rtlTranslate,
                        s = this.params,
                        a = this.$wrapperEl,
                        r = this.wrapperEl,
                        n = this.progress,
                        l = 0,
                        o = 0;
                    this.isHorizontal() ? l = i ? -e : e : o = e, s.roundLengths && (l = Math.floor(l), o = Math.floor(o)), s.cssMode ? r[this.isHorizontal() ? "scrollLeft" : "scrollTop"] = this.isHorizontal() ? -l : -o : s.virtualTranslate || a.transform("translate3d(" + l + "px, " + o + "px, 0px)"), this.previousTranslate = this.translate, this.translate = this.isHorizontal() ? l : o;
                    var d = this.maxTranslate() - this.minTranslate();
                    (0 === d ? 0 : (e - this.minTranslate()) / d) !== n && this.updateProgress(e), this.emit("setTranslate", this.translate, t)
                },
                minTranslate: function () {
                    return -this.snapGrid[0]
                },
                maxTranslate: function () {
                    return -this.snapGrid[this.snapGrid.length - 1]
                },
                translateTo: function (e, t, i, s, a) {
                    void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), void 0 === s && (s = !0);
                    var r = this,
                        n = r.params,
                        l = r.wrapperEl;
                    if (r.animating && n.preventInteractionOnTransition) return !1;
                    var o, d = r.minTranslate(),
                        h = r.maxTranslate();
                    if (o = s && e > d ? d : s && e < h ? h : e, r.updateProgress(o), n.cssMode) {
                        var p, u = r.isHorizontal();
                        if (0 === t) l[u ? "scrollLeft" : "scrollTop"] = -o;
                        else if (l.scrollTo) l.scrollTo(((p = {})[u ? "left" : "top"] = -o, p.behavior = "smooth", p));
                        else l[u ? "scrollLeft" : "scrollTop"] = -o;
                        return !0
                    }
                    return 0 === t ? (r.setTransition(0), r.setTranslate(o), i && (r.emit("beforeTransitionStart", t, a), r.emit("transitionEnd"))) : (r.setTransition(t), r.setTranslate(o), i && (r.emit("beforeTransitionStart", t, a), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function (e) {
                        r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, i && r.emit("transitionEnd"))
                    }), r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))), !0
                }
            },
            transition: {
                setTransition: function (e, t) {
                    this.params.cssMode || this.$wrapperEl.transition(e), this.emit("setTransition", e, t)
                },
                transitionStart: function (e, t) {
                    void 0 === e && (e = !0);
                    var i = this.activeIndex,
                        s = this.params,
                        a = this.previousIndex;
                    if (!s.cssMode) {
                        s.autoHeight && this.updateAutoHeight();
                        var r = t;
                        if (r || (r = i > a ? "next" : i < a ? "prev" : "reset"), this.emit("transitionStart"), e && i !== a) {
                            if ("reset" === r) return void this.emit("slideResetTransitionStart");
                            this.emit("slideChangeTransitionStart"), "next" === r ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart")
                        }
                    }
                },
                transitionEnd: function (e, t) {
                    void 0 === e && (e = !0);
                    var i = this.activeIndex,
                        s = this.previousIndex,
                        a = this.params;
                    if (this.animating = !1, !a.cssMode) {
                        this.setTransition(0);
                        var r = t;
                        if (r || (r = i > s ? "next" : i < s ? "prev" : "reset"), this.emit("transitionEnd"), e && i !== s) {
                            if ("reset" === r) return void this.emit("slideResetTransitionEnd");
                            this.emit("slideChangeTransitionEnd"), "next" === r ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd")
                        }
                    }
                }
            },
            slide: {
                slideTo: function (e, t, i, s) {
                    void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
                    var a = this,
                        r = e;
                    r < 0 && (r = 0);
                    var n = a.params,
                        l = a.snapGrid,
                        o = a.slidesGrid,
                        d = a.previousIndex,
                        h = a.activeIndex,
                        p = a.rtlTranslate,
                        u = a.wrapperEl;
                    if (a.animating && n.preventInteractionOnTransition) return !1;
                    var c = Math.min(a.params.slidesPerGroupSkip, r),
                        v = c + Math.floor((r - c) / a.params.slidesPerGroup);
                    v >= l.length && (v = l.length - 1), (h || n.initialSlide || 0) === (d || 0) && i && a.emit("beforeSlideChangeStart");
                    var f, m = -l[v];
                    if (a.updateProgress(m), n.normalizeSlideIndex)
                        for (var g = 0; g < o.length; g += 1) - Math.floor(100 * m) >= Math.floor(100 * o[g]) && (r = g);
                    if (a.initialized && r !== h) {
                        if (!a.allowSlideNext && m < a.translate && m < a.minTranslate()) return !1;
                        if (!a.allowSlidePrev && m > a.translate && m > a.maxTranslate() && (h || 0) !== r) return !1
                    }
                    if (f = r > h ? "next" : r < h ? "prev" : "reset", p && -m === a.translate || !p && m === a.translate) return a.updateActiveIndex(r), n.autoHeight && a.updateAutoHeight(), a.updateSlidesClasses(), "slide" !== n.effect && a.setTranslate(m), "reset" !== f && (a.transitionStart(i, f), a.transitionEnd(i, f)), !1;
                    if (n.cssMode) {
                        var w, y = a.isHorizontal(),
                            b = -m;
                        if (p && (b = u.scrollWidth - u.offsetWidth - b), 0 === t) u[y ? "scrollLeft" : "scrollTop"] = b;
                        else if (u.scrollTo) u.scrollTo(((w = {})[y ? "left" : "top"] = b, w.behavior = "smooth", w));
                        else u[y ? "scrollLeft" : "scrollTop"] = b;
                        return !0
                    }
                    return 0 === t ? (a.setTransition(0), a.setTranslate(m), a.updateActiveIndex(r), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, s), a.transitionStart(i, f), a.transitionEnd(i, f)) : (a.setTransition(t), a.setTranslate(m), a.updateActiveIndex(r), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, s), a.transitionStart(i, f), a.animating || (a.animating = !0, a.onSlideToWrapperTransitionEnd || (a.onSlideToWrapperTransitionEnd = function (e) {
                        a && !a.destroyed && e.target === this && (a.$wrapperEl[0].removeEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.$wrapperEl[0].removeEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd), a.onSlideToWrapperTransitionEnd = null, delete a.onSlideToWrapperTransitionEnd, a.transitionEnd(i, f))
                    }), a.$wrapperEl[0].addEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.$wrapperEl[0].addEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd))), !0
                },
                slideToLoop: function (e, t, i, s) {
                    void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
                    var a = e;
                    return this.params.loop && (a += this.loopedSlides), this.slideTo(a, t, i, s)
                },
                slideNext: function (e, t, i) {
                    void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                    var s = this.params,
                        a = this.animating,
                        r = this.activeIndex < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup;
                    if (s.loop) {
                        if (a && s.loopPreventsSlide) return !1;
                        this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft
                    }
                    return this.slideTo(this.activeIndex + r, e, t, i)
                },
                slidePrev: function (e, t, i) {
                    void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                    var s = this.params,
                        a = this.animating,
                        r = this.snapGrid,
                        n = this.slidesGrid,
                        l = this.rtlTranslate;
                    if (s.loop) {
                        if (a && s.loopPreventsSlide) return !1;
                        this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft
                    }

                    function o(e) {
                        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                    }
                    var d, h = o(l ? this.translate : -this.translate),
                        p = r.map((function (e) {
                            return o(e)
                        })),
                        u = (r[p.indexOf(h)], r[p.indexOf(h) - 1]);
                    return void 0 === u && s.cssMode && r.forEach((function (e) {
                        !u && h >= e && (u = e)
                    })), void 0 !== u && (d = n.indexOf(u)) < 0 && (d = this.activeIndex - 1), this.slideTo(d, e, t, i)
                },
                slideReset: function (e, t, i) {
                    return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, i)
                },
                slideToClosest: function (e, t, i, s) {
                    void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === s && (s = .5);
                    var a = this.activeIndex,
                        r = Math.min(this.params.slidesPerGroupSkip, a),
                        n = r + Math.floor((a - r) / this.params.slidesPerGroup),
                        l = this.rtlTranslate ? this.translate : -this.translate;
                    if (l >= this.snapGrid[n]) {
                        var o = this.snapGrid[n];
                        l - o > (this.snapGrid[n + 1] - o) * s && (a += this.params.slidesPerGroup)
                    } else {
                        var d = this.snapGrid[n - 1];
                        l - d <= (this.snapGrid[n] - d) * s && (a -= this.params.slidesPerGroup)
                    }
                    return a = Math.max(a, 0), a = Math.min(a, this.slidesGrid.length - 1), this.slideTo(a, e, t, i)
                },
                slideToClickedSlide: function () {
                    var e, t = this,
                        i = t.params,
                        s = t.$wrapperEl,
                        a = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView,
                        r = t.clickedIndex;
                    if (i.loop) {
                        if (t.animating) return;
                        e = parseInt(m(t.clickedSlide).attr("data-swiper-slide-index"), 10), i.centeredSlides ? r < t.loopedSlides - a / 2 || r > t.slides.length - t.loopedSlides + a / 2 ? (t.loopFix(), r = s.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), E((function () {
                            t.slideTo(r)
                        }))) : t.slideTo(r) : r > t.slides.length - a ? (t.loopFix(), r = s.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), E((function () {
                            t.slideTo(r)
                        }))) : t.slideTo(r)
                    } else t.slideTo(r)
                }
            },
            loop: {
                loopCreate: function () {
                    var e = this,
                        t = r(),
                        i = e.params,
                        s = e.$wrapperEl;
                    s.children("." + i.slideClass + "." + i.slideDuplicateClass).remove();
                    var a = s.children("." + i.slideClass);
                    if (i.loopFillGroupWithBlank) {
                        var n = i.slidesPerGroup - a.length % i.slidesPerGroup;
                        if (n !== i.slidesPerGroup) {
                            for (var l = 0; l < n; l += 1) {
                                var o = m(t.createElement("div")).addClass(i.slideClass + " " + i.slideBlankClass);
                                s.append(o)
                            }
                            a = s.children("." + i.slideClass)
                        }
                    }
                    "auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = a.length), e.loopedSlides = Math.ceil(parseFloat(i.loopedSlides || i.slidesPerView, 10)), e.loopedSlides += i.loopAdditionalSlides, e.loopedSlides > a.length && (e.loopedSlides = a.length);
                    var d = [],
                        h = [];
                    a.each((function (t, i) {
                        var s = m(t);
                        i < e.loopedSlides && h.push(t), i < a.length && i >= a.length - e.loopedSlides && d.push(t), s.attr("data-swiper-slide-index", i)
                    }));
                    for (var p = 0; p < h.length; p += 1) s.append(m(h[p].cloneNode(!0)).addClass(i.slideDuplicateClass));
                    for (var u = d.length - 1; u >= 0; u -= 1) s.prepend(m(d[u].cloneNode(!0)).addClass(i.slideDuplicateClass))
                },
                loopFix: function () {
                    this.emit("beforeLoopFix");
                    var e, t = this.activeIndex,
                        i = this.slides,
                        s = this.loopedSlides,
                        a = this.allowSlidePrev,
                        r = this.allowSlideNext,
                        n = this.snapGrid,
                        l = this.rtlTranslate;
                    this.allowSlidePrev = !0, this.allowSlideNext = !0;
                    var o = -n[t] - this.getTranslate();
                    if (t < s) e = i.length - 3 * s + t, e += s, this.slideTo(e, 0, !1, !0) && 0 !== o && this.setTranslate((l ? -this.translate : this.translate) - o);
                    else if (t >= i.length - s) {
                        e = -i.length + t + s, e += s, this.slideTo(e, 0, !1, !0) && 0 !== o && this.setTranslate((l ? -this.translate : this.translate) - o)
                    }
                    this.allowSlidePrev = a, this.allowSlideNext = r, this.emit("loopFix")
                },
                loopDestroy: function () {
                    var e = this.$wrapperEl,
                        t = this.params,
                        i = this.slides;
                    e.children("." + t.slideClass + "." + t.slideDuplicateClass + ",." + t.slideClass + "." + t.slideBlankClass).remove(), i.removeAttr("data-swiper-slide-index")
                }
            },
            grabCursor: {
                setGrabCursor: function (e) {
                    if (!(this.support.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked || this.params.cssMode)) {
                        var t = this.el;
                        t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab"
                    }
                },
                unsetGrabCursor: function () {
                    this.support.touch || this.params.watchOverflow && this.isLocked || this.params.cssMode || (this.el.style.cursor = "")
                }
            },
            manipulation: {
                appendSlide: function (e) {
                    var t = this.$wrapperEl,
                        i = this.params;
                    if (i.loop && this.loopDestroy(), "object" == typeof e && "length" in e)
                        for (var s = 0; s < e.length; s += 1) e[s] && t.append(e[s]);
                    else t.append(e);
                    i.loop && this.loopCreate(), i.observer && this.support.observer || this.update()
                },
                prependSlide: function (e) {
                    var t = this.params,
                        i = this.$wrapperEl,
                        s = this.activeIndex;
                    t.loop && this.loopDestroy();
                    var a = s + 1;
                    if ("object" == typeof e && "length" in e) {
                        for (var r = 0; r < e.length; r += 1) e[r] && i.prepend(e[r]);
                        a = s + e.length
                    } else i.prepend(e);
                    t.loop && this.loopCreate(), t.observer && this.support.observer || this.update(), this.slideTo(a, 0, !1)
                },
                addSlide: function (e, t) {
                    var i = this.$wrapperEl,
                        s = this.params,
                        a = this.activeIndex;
                    s.loop && (a -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + s.slideClass));
                    var r = this.slides.length;
                    if (e <= 0) this.prependSlide(t);
                    else if (e >= r) this.appendSlide(t);
                    else {
                        for (var n = a > e ? a + 1 : a, l = [], o = r - 1; o >= e; o -= 1) {
                            var d = this.slides.eq(o);
                            d.remove(), l.unshift(d)
                        }
                        if ("object" == typeof t && "length" in t) {
                            for (var h = 0; h < t.length; h += 1) t[h] && i.append(t[h]);
                            n = a > e ? a + t.length : a
                        } else i.append(t);
                        for (var p = 0; p < l.length; p += 1) i.append(l[p]);
                        s.loop && this.loopCreate(), s.observer && this.support.observer || this.update(), s.loop ? this.slideTo(n + this.loopedSlides, 0, !1) : this.slideTo(n, 0, !1)
                    }
                },
                removeSlide: function (e) {
                    var t = this.params,
                        i = this.$wrapperEl,
                        s = this.activeIndex;
                    t.loop && (s -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + t.slideClass));
                    var a, r = s;
                    if ("object" == typeof e && "length" in e) {
                        for (var n = 0; n < e.length; n += 1) a = e[n], this.slides[a] && this.slides.eq(a).remove(), a < r && (r -= 1);
                        r = Math.max(r, 0)
                    } else a = e, this.slides[a] && this.slides.eq(a).remove(), a < r && (r -= 1), r = Math.max(r, 0);
                    t.loop && this.loopCreate(), t.observer && this.support.observer || this.update(), t.loop ? this.slideTo(r + this.loopedSlides, 0, !1) : this.slideTo(r, 0, !1)
                },
                removeAllSlides: function () {
                    for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
                    this.removeSlide(e)
                }
            },
            events: {
                attachEvents: function () {
                    var e = r(),
                        t = this.params,
                        i = this.touchEvents,
                        s = this.el,
                        a = this.wrapperEl,
                        n = this.device,
                        l = this.support;
                    this.onTouchStart = O.bind(this), this.onTouchMove = A.bind(this), this.onTouchEnd = D.bind(this), t.cssMode && (this.onScroll = B.bind(this)), this.onClick = N.bind(this);
                    var o = !!t.nested;
                    if (!l.touch && l.pointerEvents) s.addEventListener(i.start, this.onTouchStart, !1), e.addEventListener(i.move, this.onTouchMove, o), e.addEventListener(i.end, this.onTouchEnd, !1);
                    else {
                        if (l.touch) {
                            var d = !("touchstart" !== i.start || !l.passiveListener || !t.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                            s.addEventListener(i.start, this.onTouchStart, d), s.addEventListener(i.move, this.onTouchMove, l.passiveListener ? {
                                passive: !1,
                                capture: o
                            } : o), s.addEventListener(i.end, this.onTouchEnd, d), i.cancel && s.addEventListener(i.cancel, this.onTouchEnd, d), H || (e.addEventListener("touchstart", X), H = !0)
                        }(t.simulateTouch && !n.ios && !n.android || t.simulateTouch && !l.touch && n.ios) && (s.addEventListener("mousedown", this.onTouchStart, !1), e.addEventListener("mousemove", this.onTouchMove, o), e.addEventListener("mouseup", this.onTouchEnd, !1))
                    }(t.preventClicks || t.preventClicksPropagation) && s.addEventListener("click", this.onClick, !0), t.cssMode && a.addEventListener("scroll", this.onScroll), t.updateOnWindowResize ? this.on(n.ios || n.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", G, !0) : this.on("observerUpdate", G, !0)
                },
                detachEvents: function () {
                    var e = r(),
                        t = this.params,
                        i = this.touchEvents,
                        s = this.el,
                        a = this.wrapperEl,
                        n = this.device,
                        l = this.support,
                        o = !!t.nested;
                    if (!l.touch && l.pointerEvents) s.removeEventListener(i.start, this.onTouchStart, !1), e.removeEventListener(i.move, this.onTouchMove, o), e.removeEventListener(i.end, this.onTouchEnd, !1);
                    else {
                        if (l.touch) {
                            var d = !("onTouchStart" !== i.start || !l.passiveListener || !t.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                            s.removeEventListener(i.start, this.onTouchStart, d), s.removeEventListener(i.move, this.onTouchMove, o), s.removeEventListener(i.end, this.onTouchEnd, d), i.cancel && s.removeEventListener(i.cancel, this.onTouchEnd, d)
                        }(t.simulateTouch && !n.ios && !n.android || t.simulateTouch && !l.touch && n.ios) && (s.removeEventListener("mousedown", this.onTouchStart, !1), e.removeEventListener("mousemove", this.onTouchMove, o), e.removeEventListener("mouseup", this.onTouchEnd, !1))
                    }(t.preventClicks || t.preventClicksPropagation) && s.removeEventListener("click", this.onClick, !0), t.cssMode && a.removeEventListener("scroll", this.onScroll), this.off(n.ios || n.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", G)
                }
            },
            breakpoints: {
                setBreakpoint: function () {
                    var e = this.activeIndex,
                        t = this.initialized,
                        i = this.loopedSlides,
                        s = void 0 === i ? 0 : i,
                        a = this.params,
                        r = this.$el,
                        n = a.breakpoints;
                    if (n && (!n || 0 !== Object.keys(n).length)) {
                        var l = this.getBreakpoint(n);
                        if (l && this.currentBreakpoint !== l) {
                            var o = l in n ? n[l] : void 0;
                            o && ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach((function (e) {
                                var t = o[e];
                                void 0 !== t && (o[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto")
                            }));
                            var d = o || this.originalParams,
                                h = a.slidesPerColumn > 1,
                                p = d.slidesPerColumn > 1;
                            h && !p ? (r.removeClass(a.containerModifierClass + "multirow " + a.containerModifierClass + "multirow-column"), this.emitContainerClasses()) : !h && p && (r.addClass(a.containerModifierClass + "multirow"), "column" === d.slidesPerColumnFill && r.addClass(a.containerModifierClass + "multirow-column"), this.emitContainerClasses());
                            var u = d.direction && d.direction !== a.direction,
                                c = a.loop && (d.slidesPerView !== a.slidesPerView || u);
                            u && t && this.changeDirection(), S(this.params, d), S(this, {
                                allowTouchMove: this.params.allowTouchMove,
                                allowSlideNext: this.params.allowSlideNext,
                                allowSlidePrev: this.params.allowSlidePrev
                            }), this.currentBreakpoint = l, this.emit("_beforeBreakpoint", d), c && t && (this.loopDestroy(), this.loopCreate(), this.updateSlides(), this.slideTo(e - s + this.loopedSlides, 0, !1)), this.emit("breakpoint", d)
                        }
                    }
                },
                getBreakpoint: function (e) {
                    var t = l();
                    if (e) {
                        var i = !1,
                            s = Object.keys(e).map((function (e) {
                                if ("string" == typeof e && 0 === e.indexOf("@")) {
                                    var i = parseFloat(e.substr(1));
                                    return {
                                        value: t.innerHeight * i,
                                        point: e
                                    }
                                }
                                return {
                                    value: e,
                                    point: e
                                }
                            }));
                        s.sort((function (e, t) {
                            return parseInt(e.value, 10) - parseInt(t.value, 10)
                        }));
                        for (var a = 0; a < s.length; a += 1) {
                            var r = s[a],
                                n = r.point;
                            r.value <= t.innerWidth && (i = n)
                        }
                        return i || "max"
                    }
                }
            },
            checkOverflow: {
                checkOverflow: function () {
                    var e = this.params,
                        t = this.isLocked,
                        i = this.slides.length > 0 && e.slidesOffsetBefore + e.spaceBetween * (this.slides.length - 1) + this.slides[0].offsetWidth * this.slides.length;
                    e.slidesOffsetBefore && e.slidesOffsetAfter && i ? this.isLocked = i <= this.size : this.isLocked = 1 === this.snapGrid.length, this.allowSlideNext = !this.isLocked, this.allowSlidePrev = !this.isLocked, t !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock"), t && t !== this.isLocked && (this.isEnd = !1, this.navigation && this.navigation.update())
                }
            },
            classes: {
                addClasses: function () {
                    var e = this.classNames,
                        t = this.params,
                        i = this.rtl,
                        s = this.$el,
                        a = this.device,
                        r = [];
                    r.push("initialized"), r.push(t.direction), t.freeMode && r.push("free-mode"), t.autoHeight && r.push("autoheight"), i && r.push("rtl"), t.slidesPerColumn > 1 && (r.push("multirow"), "column" === t.slidesPerColumnFill && r.push("multirow-column")), a.android && r.push("android"), a.ios && r.push("ios"), t.cssMode && r.push("css-mode"), r.forEach((function (i) {
                        e.push(t.containerModifierClass + i)
                    })), s.addClass(e.join(" ")), this.emitContainerClasses()
                },
                removeClasses: function () {
                    var e = this.$el,
                        t = this.classNames;
                    e.removeClass(t.join(" ")), this.emitContainerClasses()
                }
            },
            images: {
                loadImage: function (e, t, i, s, a, r) {
                    var n, o = l();

                    function d() {
                        r && r()
                    }
                    m(e).parent("picture")[0] || e.complete && a ? d() : t ? ((n = new o.Image).onload = d, n.onerror = d, s && (n.sizes = s), i && (n.srcset = i), t && (n.src = t)) : d()
                },
                preloadImages: function () {
                    var e = this;

                    function t() {
                        null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                    }
                    e.imagesToLoad = e.$el.find("img");
                    for (var i = 0; i < e.imagesToLoad.length; i += 1) {
                        var s = e.imagesToLoad[i];
                        e.loadImage(s, s.currentSrc || s.getAttribute("src"), s.srcset || s.getAttribute("srcset"), s.sizes || s.getAttribute("sizes"), !0, t)
                    }
                }
            }
        },
        F = {},
        R = function () {
            function t() {
                for (var e, i, s = arguments.length, a = new Array(s), r = 0; r < s; r++) a[r] = arguments[r];
                1 === a.length && a[0].constructor && a[0].constructor === Object ? i = a[0] : (e = a[0], i = a[1]), i || (i = {}), i = S({}, i), e && !i.el && (i.el = e);
                var n = this;
                n.support = z(), n.device = P({
                    userAgent: i.userAgent
                }), n.browser = k(), n.eventsListeners = {}, n.eventsAnyListeners = [], void 0 === n.modules && (n.modules = {}), Object.keys(n.modules).forEach((function (e) {
                    var t = n.modules[e];
                    if (t.params) {
                        var s = Object.keys(t.params)[0],
                            a = t.params[s];
                        if ("object" != typeof a || null === a) return;
                        if (!(s in i) || !("enabled" in a)) return;
                        !0 === i[s] && (i[s] = {
                            enabled: !0
                        }), "object" != typeof i[s] || "enabled" in i[s] || (i[s].enabled = !0), i[s] || (i[s] = {
                            enabled: !1
                        })
                    }
                }));
                var l = S({}, Y);
                n.useParams(l), n.params = S({}, l, F, i), n.originalParams = S({}, n.params), n.passedParams = S({}, i), n.params && n.params.on && Object.keys(n.params.on).forEach((function (e) {
                    n.on(e, n.params.on[e])
                })), n.params && n.params.onAny && n.onAny(n.params.onAny), n.$ = m;
                var o = m(n.params.el);
                if (e = o[0]) {
                    if (o.length > 1) {
                        var d = [];
                        return o.each((function (e) {
                            var s = S({}, i, {
                                el: e
                            });
                            d.push(new t(s))
                        })), d
                    }
                    var h, p, u;
                    return e.swiper = n, e && e.shadowRoot && e.shadowRoot.querySelector ? (h = m(e.shadowRoot.querySelector("." + n.params.wrapperClass))).children = function (e) {
                        return o.children(e)
                    } : h = o.children("." + n.params.wrapperClass), S(n, {
                        $el: o,
                        el: e,
                        $wrapperEl: h,
                        wrapperEl: h[0],
                        classNames: [],
                        slides: m(),
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal: function () {
                            return "horizontal" === n.params.direction
                        },
                        isVertical: function () {
                            return "vertical" === n.params.direction
                        },
                        rtl: "rtl" === e.dir.toLowerCase() || "rtl" === o.css("direction"),
                        rtlTranslate: "horizontal" === n.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === o.css("direction")),
                        wrongRTL: "-webkit-box" === h.css("display"),
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        previousTranslate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        allowSlideNext: n.params.allowSlideNext,
                        allowSlidePrev: n.params.allowSlidePrev,
                        touchEvents: (p = ["touchstart", "touchmove", "touchend", "touchcancel"], u = ["mousedown", "mousemove", "mouseup"], n.support.pointerEvents && (u = ["pointerdown", "pointermove", "pointerup"]), n.touchEventsTouch = {
                            start: p[0],
                            move: p[1],
                            end: p[2],
                            cancel: p[3]
                        }, n.touchEventsDesktop = {
                            start: u[0],
                            move: u[1],
                            end: u[2]
                        }, n.support.touch || !n.params.simulateTouch ? n.touchEventsTouch : n.touchEventsDesktop),
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            formElements: "input, select, option, textarea, button, video, label",
                            lastClickTime: x(),
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            isTouchEvent: void 0,
                            startMoving: void 0
                        },
                        allowClick: !0,
                        allowTouchMove: n.params.allowTouchMove,
                        touches: {
                            startX: 0,
                            startY: 0,
                            currentX: 0,
                            currentY: 0,
                            diff: 0
                        },
                        imagesToLoad: [],
                        imagesLoaded: 0
                    }), n.useModules(), n.emit("_swiper"), n.params.init && n.init(), n
                }
            }
            var i, s, a, r = t.prototype;
            return r.emitContainerClasses = function () {
                var e = this;
                if (e.params._emitClasses && e.el) {
                    var t = e.el.className.split(" ").filter((function (t) {
                        return 0 === t.indexOf("swiper-container") || 0 === t.indexOf(e.params.containerModifierClass)
                    }));
                    e.emit("_containerClasses", t.join(" "))
                }
            }, r.getSlideClasses = function (e) {
                var t = this;
                return e.className.split(" ").filter((function (e) {
                    return 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass)
                })).join(" ")
            }, r.emitSlidesClasses = function () {
                var e = this;
                e.params._emitClasses && e.el && e.slides.each((function (t) {
                    var i = e.getSlideClasses(t);
                    e.emit("_slideClass", t, i)
                }))
            }, r.slidesPerViewDynamic = function () {
                var e = this.params,
                    t = this.slides,
                    i = this.slidesGrid,
                    s = this.size,
                    a = this.activeIndex,
                    r = 1;
                if (e.centeredSlides) {
                    for (var n, l = t[a].swiperSlideSize, o = a + 1; o < t.length; o += 1) t[o] && !n && (r += 1, (l += t[o].swiperSlideSize) > s && (n = !0));
                    for (var d = a - 1; d >= 0; d -= 1) t[d] && !n && (r += 1, (l += t[d].swiperSlideSize) > s && (n = !0))
                } else
                    for (var h = a + 1; h < t.length; h += 1) i[h] - i[a] < s && (r += 1);
                return r
            }, r.update = function () {
                var e = this;
                if (e && !e.destroyed) {
                    var t = e.snapGrid,
                        i = e.params;
                    i.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode ? (s(), e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || s(), i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
                }

                function s() {
                    var t = e.rtlTranslate ? -1 * e.translate : e.translate,
                        i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                    e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses()
                }
            }, r.changeDirection = function (e, t) {
                void 0 === t && (t = !0);
                var i = this.params.direction;
                return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e || (this.$el.removeClass("" + this.params.containerModifierClass + i).addClass("" + this.params.containerModifierClass + e), this.emitContainerClasses(), this.params.direction = e, this.slides.each((function (t) {
                    "vertical" === e ? t.style.width = "" : t.style.height = ""
                })), this.emit("changeDirection"), t && this.update()), this
            }, r.init = function () {
                this.initialized || (this.emit("beforeInit"), this.params.breakpoints && this.setBreakpoint(), this.addClasses(), this.params.loop && this.loopCreate(), this.updateSize(), this.updateSlides(), this.params.watchOverflow && this.checkOverflow(), this.params.grabCursor && this.setGrabCursor(), this.params.preloadImages && this.preloadImages(), this.params.loop ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit) : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit), this.attachEvents(), this.initialized = !0, this.emit("init"), this.emit("afterInit"))
            }, r.destroy = function (e, t) {
                void 0 === e && (e = !0), void 0 === t && (t = !0);
                var i, s = this,
                    a = s.params,
                    r = s.$el,
                    n = s.$wrapperEl,
                    l = s.slides;
                return void 0 === s.params || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), a.loop && s.loopDestroy(), t && (s.removeClasses(), r.removeAttr("style"), n.removeAttr("style"), l && l.length && l.removeClass([a.slideVisibleClass, a.slideActiveClass, a.slideNextClass, a.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), s.emit("destroy"), Object.keys(s.eventsListeners).forEach((function (e) {
                    s.off(e)
                })), !1 !== e && (s.$el[0].swiper = null, i = s, Object.keys(i).forEach((function (e) {
                    try {
                        i[e] = null
                    } catch (e) {}
                    try {
                        delete i[e]
                    } catch (e) {}
                }))), s.destroyed = !0), null
            }, t.extendDefaults = function (e) {
                S(F, e)
            }, t.installModule = function (e) {
                t.prototype.modules || (t.prototype.modules = {});
                var i = e.name || Object.keys(t.prototype.modules).length + "_" + x();
                t.prototype.modules[i] = e
            }, t.use = function (e) {
                return Array.isArray(e) ? (e.forEach((function (e) {
                    return t.installModule(e)
                })), t) : (t.installModule(e), t)
            }, i = t, a = [{
                key: "extendedDefaults",
                get: function () {
                    return F
                }
            }, {
                key: "defaults",
                get: function () {
                    return Y
                }
            }], (s = null) && e(i.prototype, s), a && e(i, a), t
        }();
    Object.keys(V).forEach((function (e) {
        Object.keys(V[e]).forEach((function (t) {
            R.prototype[t] = V[e][t]
        }))
    })), R.use([$, I]);
    var W = {
            update: function (e) {
                var t = this,
                    i = t.params,
                    s = i.slidesPerView,
                    a = i.slidesPerGroup,
                    r = i.centeredSlides,
                    n = t.params.virtual,
                    l = n.addSlidesBefore,
                    o = n.addSlidesAfter,
                    d = t.virtual,
                    h = d.from,
                    p = d.to,
                    u = d.slides,
                    c = d.slidesGrid,
                    v = d.renderSlide,
                    f = d.offset;
                t.updateActiveIndex();
                var m, g, w, y = t.activeIndex || 0;
                m = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", r ? (g = Math.floor(s / 2) + a + o, w = Math.floor(s / 2) + a + l) : (g = s + (a - 1) + o, w = a + l);
                var b = Math.max((y || 0) - w, 0),
                    E = Math.min((y || 0) + g, u.length - 1),
                    x = (t.slidesGrid[b] || 0) - (t.slidesGrid[0] || 0);

                function T() {
                    t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load()
                }
                if (S(t.virtual, {
                        from: b,
                        to: E,
                        offset: x,
                        slidesGrid: t.slidesGrid
                    }), h === b && p === E && !e) return t.slidesGrid !== c && x !== f && t.slides.css(m, x + "px"), void t.updateProgress();
                if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
                    offset: x,
                    from: b,
                    to: E,
                    slides: function () {
                        for (var e = [], t = b; t <= E; t += 1) e.push(u[t]);
                        return e
                    }()
                }), void(t.params.virtual.renderExternalUpdate && T());
                var C = [],
                    M = [];
                if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();
                else
                    for (var z = h; z <= p; z += 1)(z < b || z > E) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + z + '"]').remove();
                for (var P = 0; P < u.length; P += 1) P >= b && P <= E && (void 0 === p || e ? M.push(P) : (P > p && M.push(P), P < h && C.push(P)));
                M.forEach((function (e) {
                    t.$wrapperEl.append(v(u[e], e))
                })), C.sort((function (e, t) {
                    return t - e
                })).forEach((function (e) {
                    t.$wrapperEl.prepend(v(u[e], e))
                })), t.$wrapperEl.children(".swiper-slide").css(m, x + "px"), T()
            },
            renderSlide: function (e, t) {
                var i = this.params.virtual;
                if (i.cache && this.virtual.cache[t]) return this.virtual.cache[t];
                var s = i.renderSlide ? m(i.renderSlide.call(this, e, t)) : m('<div class="' + this.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
                return s.attr("data-swiper-slide-index") || s.attr("data-swiper-slide-index", t), i.cache && (this.virtual.cache[t] = s), s
            },
            appendSlide: function (e) {
                if ("object" == typeof e && "length" in e)
                    for (var t = 0; t < e.length; t += 1) e[t] && this.virtual.slides.push(e[t]);
                else this.virtual.slides.push(e);
                this.virtual.update(!0)
            },
            prependSlide: function (e) {
                var t = this.activeIndex,
                    i = t + 1,
                    s = 1;
                if (Array.isArray(e)) {
                    for (var a = 0; a < e.length; a += 1) e[a] && this.virtual.slides.unshift(e[a]);
                    i = t + e.length, s = e.length
                } else this.virtual.slides.unshift(e);
                if (this.params.virtual.cache) {
                    var r = this.virtual.cache,
                        n = {};
                    Object.keys(r).forEach((function (e) {
                        var t = r[e],
                            i = t.attr("data-swiper-slide-index");
                        i && t.attr("data-swiper-slide-index", parseInt(i, 10) + 1), n[parseInt(e, 10) + s] = t
                    })), this.virtual.cache = n
                }
                this.virtual.update(!0), this.slideTo(i, 0)
            },
            removeSlide: function (e) {
                if (null != e) {
                    var t = this.activeIndex;
                    if (Array.isArray(e))
                        for (var i = e.length - 1; i >= 0; i -= 1) this.virtual.slides.splice(e[i], 1), this.params.virtual.cache && delete this.virtual.cache[e[i]], e[i] < t && (t -= 1), t = Math.max(t, 0);
                    else this.virtual.slides.splice(e, 1), this.params.virtual.cache && delete this.virtual.cache[e], e < t && (t -= 1), t = Math.max(t, 0);
                    this.virtual.update(!0), this.slideTo(t, 0)
                }
            },
            removeAllSlides: function () {
                this.virtual.slides = [], this.params.virtual.cache && (this.virtual.cache = {}), this.virtual.update(!0), this.slideTo(0, 0)
            }
        },
        q = {
            name: "virtual",
            params: {
                virtual: {
                    enabled: !1,
                    slides: [],
                    cache: !0,
                    renderSlide: null,
                    renderExternal: null,
                    renderExternalUpdate: !0,
                    addSlidesBefore: 0,
                    addSlidesAfter: 0
                }
            },
            create: function () {
                M(this, {
                    virtual: t(t({}, W), {}, {
                        slides: this.params.virtual.slides,
                        cache: {}
                    })
                })
            },
            on: {
                beforeInit: function (e) {
                    if (e.params.virtual.enabled) {
                        e.classNames.push(e.params.containerModifierClass + "virtual");
                        var t = {
                            watchSlidesProgress: !0
                        };
                        S(e.params, t), S(e.originalParams, t), e.params.initialSlide || e.virtual.update()
                    }
                },
                setTranslate: function (e) {
                    e.params.virtual.enabled && e.virtual.update()
                }
            }
        },
        j = {
            handle: function (e) {
                var t = l(),
                    i = r(),
                    s = this.rtlTranslate,
                    a = e;
                a.originalEvent && (a = a.originalEvent);
                var n = a.keyCode || a.charCode,
                    o = this.params.keyboard.pageUpDown,
                    d = o && 33 === n,
                    h = o && 34 === n,
                    p = 37 === n,
                    u = 39 === n,
                    c = 38 === n,
                    v = 40 === n;
                if (!this.allowSlideNext && (this.isHorizontal() && u || this.isVertical() && v || h)) return !1;
                if (!this.allowSlidePrev && (this.isHorizontal() && p || this.isVertical() && c || d)) return !1;
                if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || i.activeElement && i.activeElement.nodeName && ("input" === i.activeElement.nodeName.toLowerCase() || "textarea" === i.activeElement.nodeName.toLowerCase()))) {
                    if (this.params.keyboard.onlyInViewport && (d || h || p || u || c || v)) {
                        var f = !1;
                        if (this.$el.parents("." + this.params.slideClass).length > 0 && 0 === this.$el.parents("." + this.params.slideActiveClass).length) return;
                        var m = t.innerWidth,
                            g = t.innerHeight,
                            w = this.$el.offset();
                        s && (w.left -= this.$el[0].scrollLeft);
                        for (var y = [
                                [w.left, w.top],
                                [w.left + this.width, w.top],
                                [w.left, w.top + this.height],
                                [w.left + this.width, w.top + this.height]
                            ], b = 0; b < y.length; b += 1) {
                            var E = y[b];
                            E[0] >= 0 && E[0] <= m && E[1] >= 0 && E[1] <= g && (f = !0)
                        }
                        if (!f) return
                    }
                    this.isHorizontal() ? ((d || h || p || u) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), ((h || u) && !s || (d || p) && s) && this.slideNext(), ((d || p) && !s || (h || u) && s) && this.slidePrev()) : ((d || h || c || v) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (h || v) && this.slideNext(), (d || c) && this.slidePrev()), this.emit("keyPress", n)
                }
            },
            enable: function () {
                var e = r();
                this.keyboard.enabled || (m(e).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0)
            },
            disable: function () {
                var e = r();
                this.keyboard.enabled && (m(e).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1)
            }
        },
        _ = {
            name: "keyboard",
            params: {
                keyboard: {
                    enabled: !1,
                    onlyInViewport: !0,
                    pageUpDown: !0
                }
            },
            create: function () {
                M(this, {
                    keyboard: t({
                        enabled: !1
                    }, j)
                })
            },
            on: {
                init: function (e) {
                    e.params.keyboard.enabled && e.keyboard.enable()
                },
                destroy: function (e) {
                    e.keyboard.enabled && e.keyboard.disable()
                }
            }
        };
    var U = {
            lastScrollTime: x(),
            lastEventBeforeSnap: void 0,
            recentWheelEvents: [],
            event: function () {
                return l().navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function () {
                    var e = r(),
                        t = "onwheel" in e;
                    if (!t) {
                        var i = e.createElement("div");
                        i.setAttribute("onwheel", "return;"), t = "function" == typeof i.onwheel
                    }
                    return !t && e.implementation && e.implementation.hasFeature && !0 !== e.implementation.hasFeature("", "") && (t = e.implementation.hasFeature("Events.wheel", "3.0")), t
                }() ? "wheel" : "mousewheel"
            },
            normalize: function (e) {
                var t = 0,
                    i = 0,
                    s = 0,
                    a = 0;
                return "detail" in e && (i = e.detail), "wheelDelta" in e && (i = -e.wheelDelta / 120), "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = i, i = 0), s = 10 * t, a = 10 * i, "deltaY" in e && (a = e.deltaY), "deltaX" in e && (s = e.deltaX), e.shiftKey && !s && (s = a, a = 0), (s || a) && e.deltaMode && (1 === e.deltaMode ? (s *= 40, a *= 40) : (s *= 800, a *= 800)), s && !t && (t = s < 1 ? -1 : 1), a && !i && (i = a < 1 ? -1 : 1), {
                    spinX: t,
                    spinY: i,
                    pixelX: s,
                    pixelY: a
                }
            },
            handleMouseEnter: function () {
                this.mouseEntered = !0
            },
            handleMouseLeave: function () {
                this.mouseEntered = !1
            },
            handle: function (e) {
                var t = e,
                    i = this,
                    s = i.params.mousewheel;
                i.params.cssMode && t.preventDefault();
                var a = i.$el;
                if ("container" !== i.params.mousewheel.eventsTarget && (a = m(i.params.mousewheel.eventsTarget)), !i.mouseEntered && !a[0].contains(t.target) && !s.releaseOnEdges) return !0;
                t.originalEvent && (t = t.originalEvent);
                var r = 0,
                    n = i.rtlTranslate ? -1 : 1,
                    l = U.normalize(t);
                if (s.forceToAxis)
                    if (i.isHorizontal()) {
                        if (!(Math.abs(l.pixelX) > Math.abs(l.pixelY))) return !0;
                        r = -l.pixelX * n
                    } else {
                        if (!(Math.abs(l.pixelY) > Math.abs(l.pixelX))) return !0;
                        r = -l.pixelY
                    }
                else r = Math.abs(l.pixelX) > Math.abs(l.pixelY) ? -l.pixelX * n : -l.pixelY;
                if (0 === r) return !0;
                if (s.invert && (r = -r), i.params.freeMode) {
                    var o = {
                            time: x(),
                            delta: Math.abs(r),
                            direction: Math.sign(r)
                        },
                        d = i.mousewheel.lastEventBeforeSnap,
                        h = d && o.time < d.time + 500 && o.delta <= d.delta && o.direction === d.direction;
                    if (!h) {
                        i.mousewheel.lastEventBeforeSnap = void 0, i.params.loop && i.loopFix();
                        var p = i.getTranslate() + r * s.sensitivity,
                            u = i.isBeginning,
                            c = i.isEnd;
                        if (p >= i.minTranslate() && (p = i.minTranslate()), p <= i.maxTranslate() && (p = i.maxTranslate()), i.setTransition(0), i.setTranslate(p), i.updateProgress(), i.updateActiveIndex(), i.updateSlidesClasses(), (!u && i.isBeginning || !c && i.isEnd) && i.updateSlidesClasses(), i.params.freeModeSticky) {
                            clearTimeout(i.mousewheel.timeout), i.mousewheel.timeout = void 0;
                            var v = i.mousewheel.recentWheelEvents;
                            v.length >= 15 && v.shift();
                            var f = v.length ? v[v.length - 1] : void 0,
                                g = v[0];
                            if (v.push(o), f && (o.delta > f.delta || o.direction !== f.direction)) v.splice(0);
                            else if (v.length >= 15 && o.time - g.time < 500 && g.delta - o.delta >= 1 && o.delta <= 6) {
                                var w = r > 0 ? .8 : .2;
                                i.mousewheel.lastEventBeforeSnap = o, v.splice(0), i.mousewheel.timeout = E((function () {
                                    i.slideToClosest(i.params.speed, !0, void 0, w)
                                }), 0)
                            }
                            i.mousewheel.timeout || (i.mousewheel.timeout = E((function () {
                                i.mousewheel.lastEventBeforeSnap = o, v.splice(0), i.slideToClosest(i.params.speed, !0, void 0, .5)
                            }), 500))
                        }
                        if (h || i.emit("scroll", t), i.params.autoplay && i.params.autoplayDisableOnInteraction && i.autoplay.stop(), p === i.minTranslate() || p === i.maxTranslate()) return !0
                    }
                } else {
                    var y = {
                            time: x(),
                            delta: Math.abs(r),
                            direction: Math.sign(r),
                            raw: e
                        },
                        b = i.mousewheel.recentWheelEvents;
                    b.length >= 2 && b.shift();
                    var T = b.length ? b[b.length - 1] : void 0;
                    if (b.push(y), T ? (y.direction !== T.direction || y.delta > T.delta || y.time > T.time + 150) && i.mousewheel.animateSlider(y) : i.mousewheel.animateSlider(y), i.mousewheel.releaseScroll(y)) return !0
                }
                return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1
            },
            animateSlider: function (e) {
                var t = l();
                return !(this.params.mousewheel.thresholdDelta && e.delta < this.params.mousewheel.thresholdDelta) && (!(this.params.mousewheel.thresholdTime && x() - this.mousewheel.lastScrollTime < this.params.mousewheel.thresholdTime) && (e.delta >= 6 && x() - this.mousewheel.lastScrollTime < 60 || (e.direction < 0 ? this.isEnd && !this.params.loop || this.animating || (this.slideNext(), this.emit("scroll", e.raw)) : this.isBeginning && !this.params.loop || this.animating || (this.slidePrev(), this.emit("scroll", e.raw)), this.mousewheel.lastScrollTime = (new t.Date).getTime(), !1)))
            },
            releaseScroll: function (e) {
                var t = this.params.mousewheel;
                if (e.direction < 0) {
                    if (this.isEnd && !this.params.loop && t.releaseOnEdges) return !0
                } else if (this.isBeginning && !this.params.loop && t.releaseOnEdges) return !0;
                return !1
            },
            enable: function () {
                var e = U.event();
                if (this.params.cssMode) return this.wrapperEl.removeEventListener(e, this.mousewheel.handle), !0;
                if (!e) return !1;
                if (this.mousewheel.enabled) return !1;
                var t = this.$el;
                return "container" !== this.params.mousewheel.eventsTarget && (t = m(this.params.mousewheel.eventsTarget)), t.on("mouseenter", this.mousewheel.handleMouseEnter), t.on("mouseleave", this.mousewheel.handleMouseLeave), t.on(e, this.mousewheel.handle), this.mousewheel.enabled = !0, !0
            },
            disable: function () {
                var e = U.event();
                if (this.params.cssMode) return this.wrapperEl.addEventListener(e, this.mousewheel.handle), !0;
                if (!e) return !1;
                if (!this.mousewheel.enabled) return !1;
                var t = this.$el;
                return "container" !== this.params.mousewheel.eventsTarget && (t = m(this.params.mousewheel.eventsTarget)), t.off(e, this.mousewheel.handle), this.mousewheel.enabled = !1, !0
            }
        },
        K = {
            update: function () {
                var e = this.params.navigation;
                if (!this.params.loop) {
                    var t = this.navigation,
                        i = t.$nextEl,
                        s = t.$prevEl;
                    s && s.length > 0 && (this.isBeginning ? s.addClass(e.disabledClass) : s.removeClass(e.disabledClass), s[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass)), i && i.length > 0 && (this.isEnd ? i.addClass(e.disabledClass) : i.removeClass(e.disabledClass), i[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass))
                }
            },
            onPrevClick: function (e) {
                e.preventDefault(), this.isBeginning && !this.params.loop || this.slidePrev()
            },
            onNextClick: function (e) {
                e.preventDefault(), this.isEnd && !this.params.loop || this.slideNext()
            },
            init: function () {
                var e, t, i = this.params.navigation;
                (i.nextEl || i.prevEl) && (i.nextEl && (e = m(i.nextEl), this.params.uniqueNavElements && "string" == typeof i.nextEl && e.length > 1 && 1 === this.$el.find(i.nextEl).length && (e = this.$el.find(i.nextEl))), i.prevEl && (t = m(i.prevEl), this.params.uniqueNavElements && "string" == typeof i.prevEl && t.length > 1 && 1 === this.$el.find(i.prevEl).length && (t = this.$el.find(i.prevEl))), e && e.length > 0 && e.on("click", this.navigation.onNextClick), t && t.length > 0 && t.on("click", this.navigation.onPrevClick), S(this.navigation, {
                    $nextEl: e,
                    nextEl: e && e[0],
                    $prevEl: t,
                    prevEl: t && t[0]
                }))
            },
            destroy: function () {
                var e = this.navigation,
                    t = e.$nextEl,
                    i = e.$prevEl;
                t && t.length && (t.off("click", this.navigation.onNextClick), t.removeClass(this.params.navigation.disabledClass)), i && i.length && (i.off("click", this.navigation.onPrevClick), i.removeClass(this.params.navigation.disabledClass))
            }
        },
        Z = {
            update: function () {
                var e = this.rtl,
                    t = this.params.pagination;
                if (t.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                    var i, s = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
                        a = this.pagination.$el,
                        r = this.params.loop ? Math.ceil((s - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length;
                    if (this.params.loop ? ((i = Math.ceil((this.activeIndex - this.loopedSlides) / this.params.slidesPerGroup)) > s - 1 - 2 * this.loopedSlides && (i -= s - 2 * this.loopedSlides), i > r - 1 && (i -= r), i < 0 && "bullets" !== this.params.paginationType && (i = r + i)) : i = void 0 !== this.snapIndex ? this.snapIndex : this.activeIndex || 0, "bullets" === t.type && this.pagination.bullets && this.pagination.bullets.length > 0) {
                        var n, l, o, d = this.pagination.bullets;
                        if (t.dynamicBullets && (this.pagination.bulletSize = d.eq(0)[this.isHorizontal() ? "outerWidth" : "outerHeight"](!0), a.css(this.isHorizontal() ? "width" : "height", this.pagination.bulletSize * (t.dynamicMainBullets + 4) + "px"), t.dynamicMainBullets > 1 && void 0 !== this.previousIndex && (this.pagination.dynamicBulletIndex += i - this.previousIndex, this.pagination.dynamicBulletIndex > t.dynamicMainBullets - 1 ? this.pagination.dynamicBulletIndex = t.dynamicMainBullets - 1 : this.pagination.dynamicBulletIndex < 0 && (this.pagination.dynamicBulletIndex = 0)), n = i - this.pagination.dynamicBulletIndex, o = ((l = n + (Math.min(d.length, t.dynamicMainBullets) - 1)) + n) / 2), d.removeClass(t.bulletActiveClass + " " + t.bulletActiveClass + "-next " + t.bulletActiveClass + "-next-next " + t.bulletActiveClass + "-prev " + t.bulletActiveClass + "-prev-prev " + t.bulletActiveClass + "-main"), a.length > 1) d.each((function (e) {
                            var s = m(e),
                                a = s.index();
                            a === i && s.addClass(t.bulletActiveClass), t.dynamicBullets && (a >= n && a <= l && s.addClass(t.bulletActiveClass + "-main"), a === n && s.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), a === l && s.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next"))
                        }));
                        else {
                            var h = d.eq(i),
                                p = h.index();
                            if (h.addClass(t.bulletActiveClass), t.dynamicBullets) {
                                for (var u = d.eq(n), c = d.eq(l), v = n; v <= l; v += 1) d.eq(v).addClass(t.bulletActiveClass + "-main");
                                if (this.params.loop)
                                    if (p >= d.length - t.dynamicMainBullets) {
                                        for (var f = t.dynamicMainBullets; f >= 0; f -= 1) d.eq(d.length - f).addClass(t.bulletActiveClass + "-main");
                                        d.eq(d.length - t.dynamicMainBullets - 1).addClass(t.bulletActiveClass + "-prev")
                                    } else u.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), c.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next");
                                else u.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), c.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next")
                            }
                        }
                        if (t.dynamicBullets) {
                            var g = Math.min(d.length, t.dynamicMainBullets + 4),
                                w = (this.pagination.bulletSize * g - this.pagination.bulletSize) / 2 - o * this.pagination.bulletSize,
                                y = e ? "right" : "left";
                            d.css(this.isHorizontal() ? y : "top", w + "px")
                        }
                    }
                    if ("fraction" === t.type && (a.find("." + t.currentClass).text(t.formatFractionCurrent(i + 1)), a.find("." + t.totalClass).text(t.formatFractionTotal(r))), "progressbar" === t.type) {
                        var b;
                        b = t.progressbarOpposite ? this.isHorizontal() ? "vertical" : "horizontal" : this.isHorizontal() ? "horizontal" : "vertical";
                        var E = (i + 1) / r,
                            x = 1,
                            T = 1;
                        "horizontal" === b ? x = E : T = E, a.find("." + t.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + x + ") scaleY(" + T + ")").transition(this.params.speed)
                    }
                    "custom" === t.type && t.renderCustom ? (a.html(t.renderCustom(this, i + 1, r)), this.emit("paginationRender", a[0])) : this.emit("paginationUpdate", a[0]), a[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](t.lockClass)
                }
            },
            render: function () {
                var e = this.params.pagination;
                if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                    var t = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
                        i = this.pagination.$el,
                        s = "";
                    if ("bullets" === e.type) {
                        for (var a = this.params.loop ? Math.ceil((t - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length, r = 0; r < a; r += 1) e.renderBullet ? s += e.renderBullet.call(this, r, e.bulletClass) : s += "<" + e.bulletElement + ' class="' + e.bulletClass + '"></' + e.bulletElement + ">";
                        i.html(s), this.pagination.bullets = i.find("." + e.bulletClass)
                    }
                    "fraction" === e.type && (s = e.renderFraction ? e.renderFraction.call(this, e.currentClass, e.totalClass) : '<span class="' + e.currentClass + '"></span> / <span class="' + e.totalClass + '"></span>', i.html(s)), "progressbar" === e.type && (s = e.renderProgressbar ? e.renderProgressbar.call(this, e.progressbarFillClass) : '<span class="' + e.progressbarFillClass + '"></span>', i.html(s)), "custom" !== e.type && this.emit("paginationRender", this.pagination.$el[0])
                }
            },
            init: function () {
                var e = this,
                    t = e.params.pagination;
                if (t.el) {
                    var i = m(t.el);
                    0 !== i.length && (e.params.uniqueNavElements && "string" == typeof t.el && i.length > 1 && (i = e.$el.find(t.el)), "bullets" === t.type && t.clickable && i.addClass(t.clickableClass), i.addClass(t.modifierClass + t.type), "bullets" === t.type && t.dynamicBullets && (i.addClass("" + t.modifierClass + t.type + "-dynamic"), e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && i.addClass(t.progressbarOppositeClass), t.clickable && i.on("click", "." + t.bulletClass, (function (t) {
                        t.preventDefault();
                        var i = m(this).index() * e.params.slidesPerGroup;
                        e.params.loop && (i += e.loopedSlides), e.slideTo(i)
                    })), S(e.pagination, {
                        $el: i,
                        el: i[0]
                    }))
                }
            },
            destroy: function () {
                var e = this.params.pagination;
                if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                    var t = this.pagination.$el;
                    t.removeClass(e.hiddenClass), t.removeClass(e.modifierClass + e.type), this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && t.off("click", "." + e.bulletClass)
                }
            }
        },
        J = {
            setTranslate: function () {
                if (this.params.scrollbar.el && this.scrollbar.el) {
                    var e = this.scrollbar,
                        t = this.rtlTranslate,
                        i = this.progress,
                        s = e.dragSize,
                        a = e.trackSize,
                        r = e.$dragEl,
                        n = e.$el,
                        l = this.params.scrollbar,
                        o = s,
                        d = (a - s) * i;
                    t ? (d = -d) > 0 ? (o = s - d, d = 0) : -d + s > a && (o = a + d) : d < 0 ? (o = s + d, d = 0) : d + s > a && (o = a - d), this.isHorizontal() ? (r.transform("translate3d(" + d + "px, 0, 0)"), r[0].style.width = o + "px") : (r.transform("translate3d(0px, " + d + "px, 0)"), r[0].style.height = o + "px"), l.hide && (clearTimeout(this.scrollbar.timeout), n[0].style.opacity = 1, this.scrollbar.timeout = setTimeout((function () {
                        n[0].style.opacity = 0, n.transition(400)
                    }), 1e3))
                }
            },
            setTransition: function (e) {
                this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e)
            },
            updateSize: function () {
                if (this.params.scrollbar.el && this.scrollbar.el) {
                    var e = this.scrollbar,
                        t = e.$dragEl,
                        i = e.$el;
                    t[0].style.width = "", t[0].style.height = "";
                    var s, a = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
                        r = this.size / this.virtualSize,
                        n = r * (a / this.size);
                    s = "auto" === this.params.scrollbar.dragSize ? a * r : parseInt(this.params.scrollbar.dragSize, 10), this.isHorizontal() ? t[0].style.width = s + "px" : t[0].style.height = s + "px", i[0].style.display = r >= 1 ? "none" : "", this.params.scrollbar.hide && (i[0].style.opacity = 0), S(e, {
                        trackSize: a,
                        divider: r,
                        moveDivider: n,
                        dragSize: s
                    }), e.$el[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](this.params.scrollbar.lockClass)
                }
            },
            getPointerPosition: function (e) {
                return this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY
            },
            setDragPosition: function (e) {
                var t, i = this.scrollbar,
                    s = this.rtlTranslate,
                    a = i.$el,
                    r = i.dragSize,
                    n = i.trackSize,
                    l = i.dragStartPos;
                t = (i.getPointerPosition(e) - a.offset()[this.isHorizontal() ? "left" : "top"] - (null !== l ? l : r / 2)) / (n - r), t = Math.max(Math.min(t, 1), 0), s && (t = 1 - t);
                var o = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * t;
                this.updateProgress(o), this.setTranslate(o), this.updateActiveIndex(), this.updateSlidesClasses()
            },
            onDragStart: function (e) {
                var t = this.params.scrollbar,
                    i = this.scrollbar,
                    s = this.$wrapperEl,
                    a = i.$el,
                    r = i.$dragEl;
                this.scrollbar.isTouched = !0, this.scrollbar.dragStartPos = e.target === r[0] || e.target === r ? i.getPointerPosition(e) - e.target.getBoundingClientRect()[this.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), s.transition(100), r.transition(100), i.setDragPosition(e), clearTimeout(this.scrollbar.dragTimeout), a.transition(0), t.hide && a.css("opacity", 1), this.params.cssMode && this.$wrapperEl.css("scroll-snap-type", "none"), this.emit("scrollbarDragStart", e)
            },
            onDragMove: function (e) {
                var t = this.scrollbar,
                    i = this.$wrapperEl,
                    s = t.$el,
                    a = t.$dragEl;
                this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), i.transition(0), s.transition(0), a.transition(0), this.emit("scrollbarDragMove", e))
            },
            onDragEnd: function (e) {
                var t = this.params.scrollbar,
                    i = this.scrollbar,
                    s = this.$wrapperEl,
                    a = i.$el;
                this.scrollbar.isTouched && (this.scrollbar.isTouched = !1, this.params.cssMode && (this.$wrapperEl.css("scroll-snap-type", ""), s.transition("")), t.hide && (clearTimeout(this.scrollbar.dragTimeout), this.scrollbar.dragTimeout = E((function () {
                    a.css("opacity", 0), a.transition(400)
                }), 1e3)), this.emit("scrollbarDragEnd", e), t.snapOnRelease && this.slideToClosest())
            },
            enableDraggable: function () {
                if (this.params.scrollbar.el) {
                    var e = r(),
                        t = this.scrollbar,
                        i = this.touchEventsTouch,
                        s = this.touchEventsDesktop,
                        a = this.params,
                        n = this.support,
                        l = t.$el[0],
                        o = !(!n.passiveListener || !a.passiveListeners) && {
                            passive: !1,
                            capture: !1
                        },
                        d = !(!n.passiveListener || !a.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                    n.touch ? (l.addEventListener(i.start, this.scrollbar.onDragStart, o), l.addEventListener(i.move, this.scrollbar.onDragMove, o), l.addEventListener(i.end, this.scrollbar.onDragEnd, d)) : (l.addEventListener(s.start, this.scrollbar.onDragStart, o), e.addEventListener(s.move, this.scrollbar.onDragMove, o), e.addEventListener(s.end, this.scrollbar.onDragEnd, d))
                }
            },
            disableDraggable: function () {
                if (this.params.scrollbar.el) {
                    var e = r(),
                        t = this.scrollbar,
                        i = this.touchEventsTouch,
                        s = this.touchEventsDesktop,
                        a = this.params,
                        n = this.support,
                        l = t.$el[0],
                        o = !(!n.passiveListener || !a.passiveListeners) && {
                            passive: !1,
                            capture: !1
                        },
                        d = !(!n.passiveListener || !a.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                    n.touch ? (l.removeEventListener(i.start, this.scrollbar.onDragStart, o), l.removeEventListener(i.move, this.scrollbar.onDragMove, o), l.removeEventListener(i.end, this.scrollbar.onDragEnd, d)) : (l.removeEventListener(s.start, this.scrollbar.onDragStart, o), e.removeEventListener(s.move, this.scrollbar.onDragMove, o), e.removeEventListener(s.end, this.scrollbar.onDragEnd, d))
                }
            },
            init: function () {
                if (this.params.scrollbar.el) {
                    var e = this.scrollbar,
                        t = this.$el,
                        i = this.params.scrollbar,
                        s = m(i.el);
                    this.params.uniqueNavElements && "string" == typeof i.el && s.length > 1 && 1 === t.find(i.el).length && (s = t.find(i.el));
                    var a = s.find("." + this.params.scrollbar.dragClass);
                    0 === a.length && (a = m('<div class="' + this.params.scrollbar.dragClass + '"></div>'), s.append(a)), S(e, {
                        $el: s,
                        el: s[0],
                        $dragEl: a,
                        dragEl: a[0]
                    }), i.draggable && e.enableDraggable()
                }
            },
            destroy: function () {
                this.scrollbar.disableDraggable()
            }
        },
        Q = {
            setTransform: function (e, t) {
                var i = this.rtl,
                    s = m(e),
                    a = i ? -1 : 1,
                    r = s.attr("data-swiper-parallax") || "0",
                    n = s.attr("data-swiper-parallax-x"),
                    l = s.attr("data-swiper-parallax-y"),
                    o = s.attr("data-swiper-parallax-scale"),
                    d = s.attr("data-swiper-parallax-opacity");
                if (n || l ? (n = n || "0", l = l || "0") : this.isHorizontal() ? (n = r, l = "0") : (l = r, n = "0"), n = n.indexOf("%") >= 0 ? parseInt(n, 10) * t * a + "%" : n * t * a + "px", l = l.indexOf("%") >= 0 ? parseInt(l, 10) * t + "%" : l * t + "px", null != d) {
                    var h = d - (d - 1) * (1 - Math.abs(t));
                    s[0].style.opacity = h
                }
                if (null == o) s.transform("translate3d(" + n + ", " + l + ", 0px)");
                else {
                    var p = o - (o - 1) * (1 - Math.abs(t));
                    s.transform("translate3d(" + n + ", " + l + ", 0px) scale(" + p + ")")
                }
            },
            setTranslate: function () {
                var e = this,
                    t = e.$el,
                    i = e.slides,
                    s = e.progress,
                    a = e.snapGrid;
                t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function (t) {
                    e.parallax.setTransform(t, s)
                })), i.each((function (t, i) {
                    var r = t.progress;
                    e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (r += Math.ceil(i / 2) - s * (a.length - 1)), r = Math.min(Math.max(r, -1), 1), m(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function (t) {
                        e.parallax.setTransform(t, r)
                    }))
                }))
            },
            setTransition: function (e) {
                void 0 === e && (e = this.params.speed);
                this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function (t) {
                    var i = m(t),
                        s = parseInt(i.attr("data-swiper-parallax-duration"), 10) || e;
                    0 === e && (s = 0), i.transition(s)
                }))
            }
        },
        ee = {
            getDistanceBetweenTouches: function (e) {
                if (e.targetTouches.length < 2) return 1;
                var t = e.targetTouches[0].pageX,
                    i = e.targetTouches[0].pageY,
                    s = e.targetTouches[1].pageX,
                    a = e.targetTouches[1].pageY;
                return Math.sqrt(Math.pow(s - t, 2) + Math.pow(a - i, 2))
            },
            onGestureStart: function (e) {
                var t = this.support,
                    i = this.params.zoom,
                    s = this.zoom,
                    a = s.gesture;
                if (s.fakeGestureTouched = !1, s.fakeGestureMoved = !1, !t.gestures) {
                    if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
                    s.fakeGestureTouched = !0, a.scaleStart = ee.getDistanceBetweenTouches(e)
                }
                a.$slideEl && a.$slideEl.length || (a.$slideEl = m(e.target).closest("." + this.params.slideClass), 0 === a.$slideEl.length && (a.$slideEl = this.slides.eq(this.activeIndex)), a.$imageEl = a.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), a.$imageWrapEl = a.$imageEl.parent("." + i.containerClass), a.maxRatio = a.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio, 0 !== a.$imageWrapEl.length) ? (a.$imageEl && a.$imageEl.transition(0), this.zoom.isScaling = !0) : a.$imageEl = void 0
            },
            onGestureChange: function (e) {
                var t = this.support,
                    i = this.params.zoom,
                    s = this.zoom,
                    a = s.gesture;
                if (!t.gestures) {
                    if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                    s.fakeGestureMoved = !0, a.scaleMove = ee.getDistanceBetweenTouches(e)
                }
                a.$imageEl && 0 !== a.$imageEl.length ? (t.gestures ? s.scale = e.scale * s.currentScale : s.scale = a.scaleMove / a.scaleStart * s.currentScale, s.scale > a.maxRatio && (s.scale = a.maxRatio - 1 + Math.pow(s.scale - a.maxRatio + 1, .5)), s.scale < i.minRatio && (s.scale = i.minRatio + 1 - Math.pow(i.minRatio - s.scale + 1, .5)), a.$imageEl.transform("translate3d(0,0,0) scale(" + s.scale + ")")) : "gesturechange" === e.type && s.onGestureStart(e)
            },
            onGestureEnd: function (e) {
                var t = this.device,
                    i = this.support,
                    s = this.params.zoom,
                    a = this.zoom,
                    r = a.gesture;
                if (!i.gestures) {
                    if (!a.fakeGestureTouched || !a.fakeGestureMoved) return;
                    if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !t.android) return;
                    a.fakeGestureTouched = !1, a.fakeGestureMoved = !1
                }
                r.$imageEl && 0 !== r.$imageEl.length && (a.scale = Math.max(Math.min(a.scale, r.maxRatio), s.minRatio), r.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + a.scale + ")"), a.currentScale = a.scale, a.isScaling = !1, 1 === a.scale && (r.$slideEl = void 0))
            },
            onTouchStart: function (e) {
                var t = this.device,
                    i = this.zoom,
                    s = i.gesture,
                    a = i.image;
                s.$imageEl && 0 !== s.$imageEl.length && (a.isTouched || (t.android && e.cancelable && e.preventDefault(), a.isTouched = !0, a.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, a.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
            },
            onTouchMove: function (e) {
                var t = this.zoom,
                    i = t.gesture,
                    s = t.image,
                    a = t.velocity;
                if (i.$imageEl && 0 !== i.$imageEl.length && (this.allowClick = !1, s.isTouched && i.$slideEl)) {
                    s.isMoved || (s.width = i.$imageEl[0].offsetWidth, s.height = i.$imageEl[0].offsetHeight, s.startX = T(i.$imageWrapEl[0], "x") || 0, s.startY = T(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), this.rtl && (s.startX = -s.startX, s.startY = -s.startY));
                    var r = s.width * t.scale,
                        n = s.height * t.scale;
                    if (!(r < i.slideWidth && n < i.slideHeight)) {
                        if (s.minX = Math.min(i.slideWidth / 2 - r / 2, 0), s.maxX = -s.minX, s.minY = Math.min(i.slideHeight / 2 - n / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !t.isScaling) {
                            if (this.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void(s.isTouched = !1);
                            if (!this.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void(s.isTouched = !1)
                        }
                        e.cancelable && e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), a.prevPositionX || (a.prevPositionX = s.touchesCurrent.x), a.prevPositionY || (a.prevPositionY = s.touchesCurrent.y), a.prevTime || (a.prevTime = Date.now()), a.x = (s.touchesCurrent.x - a.prevPositionX) / (Date.now() - a.prevTime) / 2, a.y = (s.touchesCurrent.y - a.prevPositionY) / (Date.now() - a.prevTime) / 2, Math.abs(s.touchesCurrent.x - a.prevPositionX) < 2 && (a.x = 0), Math.abs(s.touchesCurrent.y - a.prevPositionY) < 2 && (a.y = 0), a.prevPositionX = s.touchesCurrent.x, a.prevPositionY = s.touchesCurrent.y, a.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)")
                    }
                }
            },
            onTouchEnd: function () {
                var e = this.zoom,
                    t = e.gesture,
                    i = e.image,
                    s = e.velocity;
                if (t.$imageEl && 0 !== t.$imageEl.length) {
                    if (!i.isTouched || !i.isMoved) return i.isTouched = !1, void(i.isMoved = !1);
                    i.isTouched = !1, i.isMoved = !1;
                    var a = 300,
                        r = 300,
                        n = s.x * a,
                        l = i.currentX + n,
                        o = s.y * r,
                        d = i.currentY + o;
                    0 !== s.x && (a = Math.abs((l - i.currentX) / s.x)), 0 !== s.y && (r = Math.abs((d - i.currentY) / s.y));
                    var h = Math.max(a, r);
                    i.currentX = l, i.currentY = d;
                    var p = i.width * e.scale,
                        u = i.height * e.scale;
                    i.minX = Math.min(t.slideWidth / 2 - p / 2, 0), i.maxX = -i.minX, i.minY = Math.min(t.slideHeight / 2 - u / 2, 0), i.maxY = -i.minY, i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX), i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY), t.$imageWrapEl.transition(h).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)")
                }
            },
            onTransitionEnd: function () {
                var e = this.zoom,
                    t = e.gesture;
                t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl && t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl && t.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, e.currentScale = 1, t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0)
            },
            toggle: function (e) {
                var t = this.zoom;
                t.scale && 1 !== t.scale ? t.out() : t.in(e)
            },
            in: function (e) {
                var t, i, s, a, r, n, l, o, d, h, p, u, c, v, f, m, g = this.zoom,
                    w = this.params.zoom,
                    y = g.gesture,
                    b = g.image;
                (y.$slideEl || (this.params.virtual && this.params.virtual.enabled && this.virtual ? y.$slideEl = this.$wrapperEl.children("." + this.params.slideActiveClass) : y.$slideEl = this.slides.eq(this.activeIndex), y.$imageEl = y.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), y.$imageWrapEl = y.$imageEl.parent("." + w.containerClass)), y.$imageEl && 0 !== y.$imageEl.length) && (y.$slideEl.addClass("" + w.zoomedSlideClass), void 0 === b.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, i = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = b.touchesStart.x, i = b.touchesStart.y), g.scale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, g.currentScale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, e ? (f = y.$slideEl[0].offsetWidth, m = y.$slideEl[0].offsetHeight, s = y.$slideEl.offset().left + f / 2 - t, a = y.$slideEl.offset().top + m / 2 - i, l = y.$imageEl[0].offsetWidth, o = y.$imageEl[0].offsetHeight, d = l * g.scale, h = o * g.scale, c = -(p = Math.min(f / 2 - d / 2, 0)), v = -(u = Math.min(m / 2 - h / 2, 0)), (r = s * g.scale) < p && (r = p), r > c && (r = c), (n = a * g.scale) < u && (n = u), n > v && (n = v)) : (r = 0, n = 0), y.$imageWrapEl.transition(300).transform("translate3d(" + r + "px, " + n + "px,0)"), y.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + g.scale + ")"))
            },
            out: function () {
                var e = this.zoom,
                    t = this.params.zoom,
                    i = e.gesture;
                i.$slideEl || (this.params.virtual && this.params.virtual.enabled && this.virtual ? i.$slideEl = this.$wrapperEl.children("." + this.params.slideActiveClass) : i.$slideEl = this.slides.eq(this.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), i.$imageWrapEl = i.$imageEl.parent("." + t.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && (e.scale = 1, e.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + t.zoomedSlideClass), i.$slideEl = void 0)
            },
            toggleGestures: function (e) {
                var t = this.zoom,
                    i = t.slideSelector,
                    s = t.passiveListener;
                this.$wrapperEl[e]("gesturestart", i, t.onGestureStart, s), this.$wrapperEl[e]("gesturechange", i, t.onGestureChange, s), this.$wrapperEl[e]("gestureend", i, t.onGestureEnd, s)
            },
            enableGestures: function () {
                this.zoom.gesturesEnabled || (this.zoom.gesturesEnabled = !0, this.zoom.toggleGestures("on"))
            },
            disableGestures: function () {
                this.zoom.gesturesEnabled && (this.zoom.gesturesEnabled = !1, this.zoom.toggleGestures("off"))
            },
            enable: function () {
                var e = this.support,
                    t = this.zoom;
                if (!t.enabled) {
                    t.enabled = !0;
                    var i = !("touchstart" !== this.touchEvents.start || !e.passiveListener || !this.params.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        },
                        s = !e.passiveListener || {
                            passive: !1,
                            capture: !0
                        },
                        a = "." + this.params.slideClass;
                    this.zoom.passiveListener = i, this.zoom.slideSelector = a, e.gestures ? (this.$wrapperEl.on(this.touchEvents.start, this.zoom.enableGestures, i), this.$wrapperEl.on(this.touchEvents.end, this.zoom.disableGestures, i)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.on(this.touchEvents.start, a, t.onGestureStart, i), this.$wrapperEl.on(this.touchEvents.move, a, t.onGestureChange, s), this.$wrapperEl.on(this.touchEvents.end, a, t.onGestureEnd, i), this.touchEvents.cancel && this.$wrapperEl.on(this.touchEvents.cancel, a, t.onGestureEnd, i)), this.$wrapperEl.on(this.touchEvents.move, "." + this.params.zoom.containerClass, t.onTouchMove, s)
                }
            },
            disable: function () {
                var e = this.zoom;
                if (e.enabled) {
                    var t = this.support;
                    this.zoom.enabled = !1;
                    var i = !("touchstart" !== this.touchEvents.start || !t.passiveListener || !this.params.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        },
                        s = !t.passiveListener || {
                            passive: !1,
                            capture: !0
                        },
                        a = "." + this.params.slideClass;
                    t.gestures ? (this.$wrapperEl.off(this.touchEvents.start, this.zoom.enableGestures, i), this.$wrapperEl.off(this.touchEvents.end, this.zoom.disableGestures, i)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.off(this.touchEvents.start, a, e.onGestureStart, i), this.$wrapperEl.off(this.touchEvents.move, a, e.onGestureChange, s), this.$wrapperEl.off(this.touchEvents.end, a, e.onGestureEnd, i), this.touchEvents.cancel && this.$wrapperEl.off(this.touchEvents.cancel, a, e.onGestureEnd, i)), this.$wrapperEl.off(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove, s)
                }
            }
        },
        te = {
            loadInSlide: function (e, t) {
                void 0 === t && (t = !0);
                var i = this,
                    s = i.params.lazy;
                if (void 0 !== e && 0 !== i.slides.length) {
                    var a = i.virtual && i.params.virtual.enabled ? i.$wrapperEl.children("." + i.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : i.slides.eq(e),
                        r = a.find("." + s.elementClass + ":not(." + s.loadedClass + "):not(." + s.loadingClass + ")");
                    !a.hasClass(s.elementClass) || a.hasClass(s.loadedClass) || a.hasClass(s.loadingClass) || r.push(a[0]), 0 !== r.length && r.each((function (e) {
                        var r = m(e);
                        r.addClass(s.loadingClass);
                        var n = r.attr("data-background"),
                            l = r.attr("data-src"),
                            o = r.attr("data-srcset"),
                            d = r.attr("data-sizes"),
                            h = r.parent("picture");
                        i.loadImage(r[0], l || n, o, d, !1, (function () {
                            if (null != i && i && (!i || i.params) && !i.destroyed) {
                                if (n ? (r.css("background-image", 'url("' + n + '")'), r.removeAttr("data-background")) : (o && (r.attr("srcset", o), r.removeAttr("data-srcset")), d && (r.attr("sizes", d), r.removeAttr("data-sizes")), h.length && h.children("source").each((function (e) {
                                        var t = m(e);
                                        t.attr("data-srcset") && (t.attr("srcset", t.attr("data-srcset")), t.removeAttr("data-srcset"))
                                    })), l && (r.attr("src", l), r.removeAttr("data-src"))), r.addClass(s.loadedClass).removeClass(s.loadingClass), a.find("." + s.preloaderClass).remove(), i.params.loop && t) {
                                    var e = a.attr("data-swiper-slide-index");
                                    if (a.hasClass(i.params.slideDuplicateClass)) {
                                        var p = i.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + i.params.slideDuplicateClass + ")");
                                        i.lazy.loadInSlide(p.index(), !1)
                                    } else {
                                        var u = i.$wrapperEl.children("." + i.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                        i.lazy.loadInSlide(u.index(), !1)
                                    }
                                }
                                i.emit("lazyImageReady", a[0], r[0]), i.params.autoHeight && i.updateAutoHeight()
                            }
                        })), i.emit("lazyImageLoad", a[0], r[0])
                    }))
                }
            },
            load: function () {
                var e = this,
                    t = e.$wrapperEl,
                    i = e.params,
                    s = e.slides,
                    a = e.activeIndex,
                    r = e.virtual && i.virtual.enabled,
                    n = i.lazy,
                    l = i.slidesPerView;

                function o(e) {
                    if (r) {
                        if (t.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0
                    } else if (s[e]) return !0;
                    return !1
                }

                function d(e) {
                    return r ? m(e).attr("data-swiper-slide-index") : m(e).index()
                }
                if ("auto" === l && (l = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility) t.children("." + i.slideVisibleClass).each((function (t) {
                    var i = r ? m(t).attr("data-swiper-slide-index") : m(t).index();
                    e.lazy.loadInSlide(i)
                }));
                else if (l > 1)
                    for (var h = a; h < a + l; h += 1) o(h) && e.lazy.loadInSlide(h);
                else e.lazy.loadInSlide(a);
                if (n.loadPrevNext)
                    if (l > 1 || n.loadPrevNextAmount && n.loadPrevNextAmount > 1) {
                        for (var p = n.loadPrevNextAmount, u = l, c = Math.min(a + u + Math.max(p, u), s.length), v = Math.max(a - Math.max(u, p), 0), f = a + l; f < c; f += 1) o(f) && e.lazy.loadInSlide(f);
                        for (var g = v; g < a; g += 1) o(g) && e.lazy.loadInSlide(g)
                    } else {
                        var w = t.children("." + i.slideNextClass);
                        w.length > 0 && e.lazy.loadInSlide(d(w));
                        var y = t.children("." + i.slidePrevClass);
                        y.length > 0 && e.lazy.loadInSlide(d(y))
                    }
            }
        },
        ie = {
            LinearSpline: function (e, t) {
                var i, s, a, r, n, l = function (e, t) {
                    for (s = -1, i = e.length; i - s > 1;) e[a = i + s >> 1] <= t ? s = a : i = a;
                    return i
                };
                return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
                    return e ? (n = l(this.x, e), r = n - 1, (e - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0
                }, this
            },
            getInterpolateFunction: function (e) {
                this.controller.spline || (this.controller.spline = this.params.loop ? new ie.LinearSpline(this.slidesGrid, e.slidesGrid) : new ie.LinearSpline(this.snapGrid, e.snapGrid))
            },
            setTranslate: function (e, t) {
                var i, s, a = this,
                    r = a.controller.control,
                    n = a.constructor;

                function l(e) {
                    var t = a.rtlTranslate ? -a.translate : a.translate;
                    "slide" === a.params.controller.by && (a.controller.getInterpolateFunction(e), s = -a.controller.spline.interpolate(-t)), s && "container" !== a.params.controller.by || (i = (e.maxTranslate() - e.minTranslate()) / (a.maxTranslate() - a.minTranslate()), s = (t - a.minTranslate()) * i + e.minTranslate()), a.params.controller.inverse && (s = e.maxTranslate() - s), e.updateProgress(s), e.setTranslate(s, a), e.updateActiveIndex(), e.updateSlidesClasses()
                }
                if (Array.isArray(r))
                    for (var o = 0; o < r.length; o += 1) r[o] !== t && r[o] instanceof n && l(r[o]);
                else r instanceof n && t !== r && l(r)
            },
            setTransition: function (e, t) {
                var i, s = this,
                    a = s.constructor,
                    r = s.controller.control;

                function n(t) {
                    t.setTransition(e, s), 0 !== e && (t.transitionStart(), t.params.autoHeight && E((function () {
                        t.updateAutoHeight()
                    })), t.$wrapperEl.transitionEnd((function () {
                        r && (t.params.loop && "slide" === s.params.controller.by && t.loopFix(), t.transitionEnd())
                    })))
                }
                if (Array.isArray(r))
                    for (i = 0; i < r.length; i += 1) r[i] !== t && r[i] instanceof a && n(r[i]);
                else r instanceof a && t !== r && n(r)
            }
        },
        se = {
            getRandomNumber: function (e) {
                void 0 === e && (e = 16);
                return "x".repeat(e).replace(/x/g, (function () {
                    return Math.round(16 * Math.random()).toString(16)
                }))
            },
            makeElFocusable: function (e) {
                return e.attr("tabIndex", "0"), e
            },
            makeElNotFocusable: function (e) {
                return e.attr("tabIndex", "-1"), e
            },
            addElRole: function (e, t) {
                return e.attr("role", t), e
            },
            addElRoleDescription: function (e, t) {
                return e.attr("aria-role-description", t), e
            },
            addElControls: function (e, t) {
                return e.attr("aria-controls", t), e
            },
            addElLabel: function (e, t) {
                return e.attr("aria-label", t), e
            },
            addElId: function (e, t) {
                return e.attr("id", t), e
            },
            addElLive: function (e, t) {
                return e.attr("aria-live", t), e
            },
            disableEl: function (e) {
                return e.attr("aria-disabled", !0), e
            },
            enableEl: function (e) {
                return e.attr("aria-disabled", !1), e
            },
            onEnterKey: function (e) {
                var t = this.params.a11y;
                if (13 === e.keyCode) {
                    var i = m(e.target);
                    this.navigation && this.navigation.$nextEl && i.is(this.navigation.$nextEl) && (this.isEnd && !this.params.loop || this.slideNext(), this.isEnd ? this.a11y.notify(t.lastSlideMessage) : this.a11y.notify(t.nextSlideMessage)), this.navigation && this.navigation.$prevEl && i.is(this.navigation.$prevEl) && (this.isBeginning && !this.params.loop || this.slidePrev(), this.isBeginning ? this.a11y.notify(t.firstSlideMessage) : this.a11y.notify(t.prevSlideMessage)), this.pagination && i.is("." + this.params.pagination.bulletClass) && i[0].click()
                }
            },
            notify: function (e) {
                var t = this.a11y.liveRegion;
                0 !== t.length && (t.html(""), t.html(e))
            },
            updateNavigation: function () {
                if (!this.params.loop && this.navigation) {
                    var e = this.navigation,
                        t = e.$nextEl,
                        i = e.$prevEl;
                    i && i.length > 0 && (this.isBeginning ? (this.a11y.disableEl(i), this.a11y.makeElNotFocusable(i)) : (this.a11y.enableEl(i), this.a11y.makeElFocusable(i))), t && t.length > 0 && (this.isEnd ? (this.a11y.disableEl(t), this.a11y.makeElNotFocusable(t)) : (this.a11y.enableEl(t), this.a11y.makeElFocusable(t)))
                }
            },
            updatePagination: function () {
                var e = this,
                    t = e.params.a11y;
                e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each((function (i) {
                    var s = m(i);
                    e.a11y.makeElFocusable(s), e.params.pagination.renderBullet || (e.a11y.addElRole(s, "button"), e.a11y.addElLabel(s, t.paginationBulletMessage.replace(/\{\{index\}\}/, s.index() + 1)))
                }))
            },
            init: function () {
                var e = this,
                    t = e.params.a11y;
                e.$el.append(e.a11y.liveRegion);
                var i = e.$el;
                t.containerRoleDescriptionMessage && e.a11y.addElRoleDescription(i, t.containerRoleDescriptionMessage), t.containerMessage && e.a11y.addElLabel(i, t.containerMessage);
                var s, a, r, n = e.$wrapperEl,
                    l = n.attr("id") || "swiper-wrapper-" + e.a11y.getRandomNumber(16);
                e.a11y.addElId(n, l), s = e.params.autoplay && e.params.autoplay.enabled ? "off" : "polite", e.a11y.addElLive(n, s), t.itemRoleDescriptionMessage && e.a11y.addElRoleDescription(m(e.slides), t.itemRoleDescriptionMessage), e.a11y.addElRole(m(e.slides), "group"), e.slides.each((function (t) {
                    var i = m(t);
                    e.a11y.addElLabel(i, i.index() + 1 + " / " + e.slides.length)
                })), e.navigation && e.navigation.$nextEl && (a = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (r = e.navigation.$prevEl), a && a.length && (e.a11y.makeElFocusable(a), "BUTTON" !== a[0].tagName && (e.a11y.addElRole(a, "button"), a.on("keydown", e.a11y.onEnterKey)), e.a11y.addElLabel(a, t.nextSlideMessage), e.a11y.addElControls(a, l)), r && r.length && (e.a11y.makeElFocusable(r), "BUTTON" !== r[0].tagName && (e.a11y.addElRole(r, "button"), r.on("keydown", e.a11y.onEnterKey)), e.a11y.addElLabel(r, t.prevSlideMessage), e.a11y.addElControls(r, l)), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey)
            },
            destroy: function () {
                var e, t;
                this.a11y.liveRegion && this.a11y.liveRegion.length > 0 && this.a11y.liveRegion.remove(), this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && e.off("keydown", this.a11y.onEnterKey), t && t.off("keydown", this.a11y.onEnterKey), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.off("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
            }
        },
        ae = {
            init: function () {
                var e = l();
                if (this.params.history) {
                    if (!e.history || !e.history.pushState) return this.params.history.enabled = !1, void(this.params.hashNavigation.enabled = !0);
                    var t = this.history;
                    t.initialized = !0, t.paths = ae.getPathValues(this.params.url), (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, this.params.runCallbacksOnInit), this.params.history.replaceState || e.addEventListener("popstate", this.history.setHistoryPopState))
                }
            },
            destroy: function () {
                var e = l();
                this.params.history.replaceState || e.removeEventListener("popstate", this.history.setHistoryPopState)
            },
            setHistoryPopState: function () {
                this.history.paths = ae.getPathValues(this.params.url), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
            },
            getPathValues: function (e) {
                var t = l(),
                    i = (e ? new URL(e) : t.location).pathname.slice(1).split("/").filter((function (e) {
                        return "" !== e
                    })),
                    s = i.length;
                return {
                    key: i[s - 2],
                    value: i[s - 1]
                }
            },
            setHistory: function (e, t) {
                var i = l();
                if (this.history.initialized && this.params.history.enabled) {
                    var s;
                    s = this.params.url ? new URL(this.params.url) : i.location;
                    var a = this.slides.eq(t),
                        r = ae.slugify(a.attr("data-history"));
                    s.pathname.includes(e) || (r = e + "/" + r);
                    var n = i.history.state;
                    n && n.value === r || (this.params.history.replaceState ? i.history.replaceState({
                        value: r
                    }, null, r) : i.history.pushState({
                        value: r
                    }, null, r))
                }
            },
            slugify: function (e) {
                return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
            },
            scrollToSlide: function (e, t, i) {
                if (t)
                    for (var s = 0, a = this.slides.length; s < a; s += 1) {
                        var r = this.slides.eq(s);
                        if (ae.slugify(r.attr("data-history")) === t && !r.hasClass(this.params.slideDuplicateClass)) {
                            var n = r.index();
                            this.slideTo(n, e, i)
                        }
                    } else this.slideTo(0, e, i)
            }
        },
        re = {
            onHashCange: function () {
                var e = r();
                this.emit("hashChange");
                var t = e.location.hash.replace("#", "");
                if (t !== this.slides.eq(this.activeIndex).attr("data-hash")) {
                    var i = this.$wrapperEl.children("." + this.params.slideClass + '[data-hash="' + t + '"]').index();
                    if (void 0 === i) return;
                    this.slideTo(i)
                }
            },
            setHash: function () {
                var e = l(),
                    t = r();
                if (this.hashNavigation.initialized && this.params.hashNavigation.enabled)
                    if (this.params.hashNavigation.replaceState && e.history && e.history.replaceState) e.history.replaceState(null, null, "#" + this.slides.eq(this.activeIndex).attr("data-hash") || ""), this.emit("hashSet");
                    else {
                        var i = this.slides.eq(this.activeIndex),
                            s = i.attr("data-hash") || i.attr("data-history");
                        t.location.hash = s || "", this.emit("hashSet")
                    }
            },
            init: function () {
                var e = r(),
                    t = l();
                if (!(!this.params.hashNavigation.enabled || this.params.history && this.params.history.enabled)) {
                    this.hashNavigation.initialized = !0;
                    var i = e.location.hash.replace("#", "");
                    if (i)
                        for (var s = 0, a = this.slides.length; s < a; s += 1) {
                            var n = this.slides.eq(s);
                            if ((n.attr("data-hash") || n.attr("data-history")) === i && !n.hasClass(this.params.slideDuplicateClass)) {
                                var o = n.index();
                                this.slideTo(o, 0, this.params.runCallbacksOnInit, !0)
                            }
                        }
                    this.params.hashNavigation.watchState && m(t).on("hashchange", this.hashNavigation.onHashCange)
                }
            },
            destroy: function () {
                var e = l();
                this.params.hashNavigation.watchState && m(e).off("hashchange", this.hashNavigation.onHashCange)
            }
        },
        ne = {
            run: function () {
                var e = this,
                    t = e.slides.eq(e.activeIndex),
                    i = e.params.autoplay.delay;
                t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), clearTimeout(e.autoplay.timeout), e.autoplay.timeout = E((function () {
                    var t;
                    e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), t = e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (t = e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (t = e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), t = e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (t = e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (t = e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")), (e.params.cssMode && e.autoplay.running || !1 === t) && e.autoplay.run()
                }), i)
            },
            start: function () {
                return void 0 === this.autoplay.timeout && (!this.autoplay.running && (this.autoplay.running = !0, this.emit("autoplayStart"), this.autoplay.run(), !0))
            },
            stop: function () {
                return !!this.autoplay.running && (void 0 !== this.autoplay.timeout && (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout), this.autoplay.timeout = void 0), this.autoplay.running = !1, this.emit("autoplayStop"), !0))
            },
            pause: function (e) {
                this.autoplay.running && (this.autoplay.paused || (this.autoplay.timeout && clearTimeout(this.autoplay.timeout), this.autoplay.paused = !0, 0 !== e && this.params.autoplay.waitForTransition ? (this.$wrapperEl[0].addEventListener("transitionend", this.autoplay.onTransitionEnd), this.$wrapperEl[0].addEventListener("webkitTransitionEnd", this.autoplay.onTransitionEnd)) : (this.autoplay.paused = !1, this.autoplay.run())))
            },
            onVisibilityChange: function () {
                var e = r();
                "hidden" === e.visibilityState && this.autoplay.running && this.autoplay.pause(), "visible" === e.visibilityState && this.autoplay.paused && (this.autoplay.run(), this.autoplay.paused = !1)
            },
            onTransitionEnd: function (e) {
                this && !this.destroyed && this.$wrapperEl && e.target === this.$wrapperEl[0] && (this.$wrapperEl[0].removeEventListener("transitionend", this.autoplay.onTransitionEnd), this.$wrapperEl[0].removeEventListener("webkitTransitionEnd", this.autoplay.onTransitionEnd), this.autoplay.paused = !1, this.autoplay.running ? this.autoplay.run() : this.autoplay.stop())
            }
        },
        le = {
            setTranslate: function () {
                for (var e = this.slides, t = 0; t < e.length; t += 1) {
                    var i = this.slides.eq(t),
                        s = -i[0].swiperSlideOffset;
                    this.params.virtualTranslate || (s -= this.translate);
                    var a = 0;
                    this.isHorizontal() || (a = s, s = 0);
                    var r = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                    i.css({
                        opacity: r
                    }).transform("translate3d(" + s + "px, " + a + "px, 0px)")
                }
            },
            setTransition: function (e) {
                var t = this,
                    i = t.slides,
                    s = t.$wrapperEl;
                if (i.transition(e), t.params.virtualTranslate && 0 !== e) {
                    var a = !1;
                    i.transitionEnd((function () {
                        if (!a && t && !t.destroyed) {
                            a = !0, t.animating = !1;
                            for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) s.trigger(e[i])
                        }
                    }))
                }
            }
        },
        oe = {
            setTranslate: function () {
                var e, t = this.$el,
                    i = this.$wrapperEl,
                    s = this.slides,
                    a = this.width,
                    r = this.height,
                    n = this.rtlTranslate,
                    l = this.size,
                    o = this.browser,
                    d = this.params.cubeEffect,
                    h = this.isHorizontal(),
                    p = this.virtual && this.params.virtual.enabled,
                    u = 0;
                d.shadow && (h ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = m('<div class="swiper-cube-shadow"></div>'), i.append(e)), e.css({
                    height: a + "px"
                })) : 0 === (e = t.find(".swiper-cube-shadow")).length && (e = m('<div class="swiper-cube-shadow"></div>'), t.append(e)));
                for (var c = 0; c < s.length; c += 1) {
                    var v = s.eq(c),
                        f = c;
                    p && (f = parseInt(v.attr("data-swiper-slide-index"), 10));
                    var g = 90 * f,
                        w = Math.floor(g / 360);
                    n && (g = -g, w = Math.floor(-g / 360));
                    var y = Math.max(Math.min(v[0].progress, 1), -1),
                        b = 0,
                        E = 0,
                        x = 0;
                    f % 4 == 0 ? (b = 4 * -w * l, x = 0) : (f - 1) % 4 == 0 ? (b = 0, x = 4 * -w * l) : (f - 2) % 4 == 0 ? (b = l + 4 * w * l, x = l) : (f - 3) % 4 == 0 && (b = -l, x = 3 * l + 4 * l * w), n && (b = -b), h || (E = b, b = 0);
                    var T = "rotateX(" + (h ? 0 : -g) + "deg) rotateY(" + (h ? g : 0) + "deg) translate3d(" + b + "px, " + E + "px, " + x + "px)";
                    if (y <= 1 && y > -1 && (u = 90 * f + 90 * y, n && (u = 90 * -f - 90 * y)), v.transform(T), d.slideShadows) {
                        var C = h ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
                            S = h ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
                        0 === C.length && (C = m('<div class="swiper-slide-shadow-' + (h ? "left" : "top") + '"></div>'), v.append(C)), 0 === S.length && (S = m('<div class="swiper-slide-shadow-' + (h ? "right" : "bottom") + '"></div>'), v.append(S)), C.length && (C[0].style.opacity = Math.max(-y, 0)), S.length && (S[0].style.opacity = Math.max(y, 0))
                    }
                }
                if (i.css({
                        "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
                        "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
                        "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
                        "transform-origin": "50% 50% -" + l / 2 + "px"
                    }), d.shadow)
                    if (h) e.transform("translate3d(0px, " + (a / 2 + d.shadowOffset) + "px, " + -a / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")");
                    else {
                        var M = Math.abs(u) - 90 * Math.floor(Math.abs(u) / 90),
                            z = 1.5 - (Math.sin(2 * M * Math.PI / 360) / 2 + Math.cos(2 * M * Math.PI / 360) / 2),
                            P = d.shadowScale,
                            k = d.shadowScale / z,
                            $ = d.shadowOffset;
                        e.transform("scale3d(" + P + ", 1, " + k + ") translate3d(0px, " + (r / 2 + $) + "px, " + -r / 2 / k + "px) rotateX(-90deg)")
                    } var L = o.isSafari || o.isWebView ? -l / 2 : 0;
                i.transform("translate3d(0px,0," + L + "px) rotateX(" + (this.isHorizontal() ? 0 : u) + "deg) rotateY(" + (this.isHorizontal() ? -u : 0) + "deg)")
            },
            setTransition: function (e) {
                var t = this.$el;
                this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e)
            }
        },
        de = {
            setTranslate: function () {
                for (var e = this.slides, t = this.rtlTranslate, i = 0; i < e.length; i += 1) {
                    var s = e.eq(i),
                        a = s[0].progress;
                    this.params.flipEffect.limitRotation && (a = Math.max(Math.min(s[0].progress, 1), -1));
                    var r = -180 * a,
                        n = 0,
                        l = -s[0].swiperSlideOffset,
                        o = 0;
                    if (this.isHorizontal() ? t && (r = -r) : (o = l, l = 0, n = -r, r = 0), s[0].style.zIndex = -Math.abs(Math.round(a)) + e.length, this.params.flipEffect.slideShadows) {
                        var d = this.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top"),
                            h = this.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
                        0 === d.length && (d = m('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "left" : "top") + '"></div>'), s.append(d)), 0 === h.length && (h = m('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "right" : "bottom") + '"></div>'), s.append(h)), d.length && (d[0].style.opacity = Math.max(-a, 0)), h.length && (h[0].style.opacity = Math.max(a, 0))
                    }
                    s.transform("translate3d(" + l + "px, " + o + "px, 0px) rotateX(" + n + "deg) rotateY(" + r + "deg)")
                }
            },
            setTransition: function (e) {
                var t = this,
                    i = t.slides,
                    s = t.activeIndex,
                    a = t.$wrapperEl;
                if (i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) {
                    var r = !1;
                    i.eq(s).transitionEnd((function () {
                        if (!r && t && !t.destroyed) {
                            r = !0, t.animating = !1;
                            for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) a.trigger(e[i])
                        }
                    }))
                }
            }
        },
        he = {
            setTranslate: function () {
                for (var e = this.width, t = this.height, i = this.slides, s = this.slidesSizesGrid, a = this.params.coverflowEffect, r = this.isHorizontal(), n = this.translate, l = r ? e / 2 - n : t / 2 - n, o = r ? a.rotate : -a.rotate, d = a.depth, h = 0, p = i.length; h < p; h += 1) {
                    var u = i.eq(h),
                        c = s[h],
                        v = (l - u[0].swiperSlideOffset - c / 2) / c * a.modifier,
                        f = r ? o * v : 0,
                        g = r ? 0 : o * v,
                        w = -d * Math.abs(v),
                        y = a.stretch;
                    "string" == typeof y && -1 !== y.indexOf("%") && (y = parseFloat(a.stretch) / 100 * c);
                    var b = r ? 0 : y * v,
                        E = r ? y * v : 0,
                        x = 1 - (1 - a.scale) * Math.abs(v);
                    Math.abs(E) < .001 && (E = 0), Math.abs(b) < .001 && (b = 0), Math.abs(w) < .001 && (w = 0), Math.abs(f) < .001 && (f = 0), Math.abs(g) < .001 && (g = 0), Math.abs(x) < .001 && (x = 0);
                    var T = "translate3d(" + E + "px," + b + "px," + w + "px)  rotateX(" + g + "deg) rotateY(" + f + "deg) scale(" + x + ")";
                    if (u.transform(T), u[0].style.zIndex = 1 - Math.abs(Math.round(v)), a.slideShadows) {
                        var C = r ? u.find(".swiper-slide-shadow-left") : u.find(".swiper-slide-shadow-top"),
                            S = r ? u.find(".swiper-slide-shadow-right") : u.find(".swiper-slide-shadow-bottom");
                        0 === C.length && (C = m('<div class="swiper-slide-shadow-' + (r ? "left" : "top") + '"></div>'), u.append(C)), 0 === S.length && (S = m('<div class="swiper-slide-shadow-' + (r ? "right" : "bottom") + '"></div>'), u.append(S)), C.length && (C[0].style.opacity = v > 0 ? v : 0), S.length && (S[0].style.opacity = -v > 0 ? -v : 0)
                    }
                }
            },
            setTransition: function (e) {
                this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
            }
        },
        pe = {
            init: function () {
                var e = this.params.thumbs;
                if (this.thumbs.initialized) return !1;
                this.thumbs.initialized = !0;
                var t = this.constructor;
                return e.swiper instanceof t ? (this.thumbs.swiper = e.swiper, S(this.thumbs.swiper.originalParams, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                }), S(this.thumbs.swiper.params, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                })) : C(e.swiper) && (this.thumbs.swiper = new t(S({}, e.swiper, {
                    watchSlidesVisibility: !0,
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                })), this.thumbs.swiperCreated = !0), this.thumbs.swiper.$el.addClass(this.params.thumbs.thumbsContainerClass), this.thumbs.swiper.on("tap", this.thumbs.onThumbClick), !0
            },
            onThumbClick: function () {
                var e = this.thumbs.swiper;
                if (e) {
                    var t = e.clickedIndex,
                        i = e.clickedSlide;
                    if (!(i && m(i).hasClass(this.params.thumbs.slideThumbActiveClass) || null == t)) {
                        var s;
                        if (s = e.params.loop ? parseInt(m(e.clickedSlide).attr("data-swiper-slide-index"), 10) : t, this.params.loop) {
                            var a = this.activeIndex;
                            this.slides.eq(a).hasClass(this.params.slideDuplicateClass) && (this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, a = this.activeIndex);
                            var r = this.slides.eq(a).prevAll('[data-swiper-slide-index="' + s + '"]').eq(0).index(),
                                n = this.slides.eq(a).nextAll('[data-swiper-slide-index="' + s + '"]').eq(0).index();
                            s = void 0 === r ? n : void 0 === n ? r : n - a < a - r ? n : r
                        }
                        this.slideTo(s)
                    }
                }
            },
            update: function (e) {
                var t = this.thumbs.swiper;
                if (t) {
                    var i = "auto" === t.params.slidesPerView ? t.slidesPerViewDynamic() : t.params.slidesPerView,
                        s = this.params.thumbs.autoScrollOffset,
                        a = s && !t.params.loop;
                    if (this.realIndex !== t.realIndex || a) {
                        var r, n, l = t.activeIndex;
                        if (t.params.loop) {
                            t.slides.eq(l).hasClass(t.params.slideDuplicateClass) && (t.loopFix(), t._clientLeft = t.$wrapperEl[0].clientLeft, l = t.activeIndex);
                            var o = t.slides.eq(l).prevAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index(),
                                d = t.slides.eq(l).nextAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index();
                            r = void 0 === o ? d : void 0 === d ? o : d - l == l - o ? l : d - l < l - o ? d : o, n = this.activeIndex > this.previousIndex ? "next" : "prev"
                        } else n = (r = this.realIndex) > this.previousIndex ? "next" : "prev";
                        a && (r += "next" === n ? s : -1 * s), t.visibleSlidesIndexes && t.visibleSlidesIndexes.indexOf(r) < 0 && (t.params.centeredSlides ? r = r > l ? r - Math.floor(i / 2) + 1 : r + Math.floor(i / 2) - 1 : r > l && (r = r - i + 1), t.slideTo(r, e ? 0 : void 0))
                    }
                    var h = 1,
                        p = this.params.thumbs.slideThumbActiveClass;
                    if (this.params.slidesPerView > 1 && !this.params.centeredSlides && (h = this.params.slidesPerView), this.params.thumbs.multipleActiveThumbs || (h = 1), h = Math.floor(h), t.slides.removeClass(p), t.params.loop || t.params.virtual && t.params.virtual.enabled)
                        for (var u = 0; u < h; u += 1) t.$wrapperEl.children('[data-swiper-slide-index="' + (this.realIndex + u) + '"]').addClass(p);
                    else
                        for (var c = 0; c < h; c += 1) t.slides.eq(this.realIndex + c).addClass(p)
                }
            }
        },
        ue = [q, _, {
            name: "mousewheel",
            params: {
                mousewheel: {
                    enabled: !1,
                    releaseOnEdges: !1,
                    invert: !1,
                    forceToAxis: !1,
                    sensitivity: 1,
                    eventsTarget: "container",
                    thresholdDelta: null,
                    thresholdTime: null
                }
            },
            create: function () {
                M(this, {
                    mousewheel: {
                        enabled: !1,
                        lastScrollTime: x(),
                        lastEventBeforeSnap: void 0,
                        recentWheelEvents: [],
                        enable: U.enable,
                        disable: U.disable,
                        handle: U.handle,
                        handleMouseEnter: U.handleMouseEnter,
                        handleMouseLeave: U.handleMouseLeave,
                        animateSlider: U.animateSlider,
                        releaseScroll: U.releaseScroll
                    }
                })
            },
            on: {
                init: function (e) {
                    !e.params.mousewheel.enabled && e.params.cssMode && e.mousewheel.disable(), e.params.mousewheel.enabled && e.mousewheel.enable()
                },
                destroy: function (e) {
                    e.params.cssMode && e.mousewheel.enable(), e.mousewheel.enabled && e.mousewheel.disable()
                }
            }
        }, {
            name: "navigation",
            params: {
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: !1,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock"
                }
            },
            create: function () {
                M(this, {
                    navigation: t({}, K)
                })
            },
            on: {
                init: function (e) {
                    e.navigation.init(), e.navigation.update()
                },
                toEdge: function (e) {
                    e.navigation.update()
                },
                fromEdge: function (e) {
                    e.navigation.update()
                },
                destroy: function (e) {
                    e.navigation.destroy()
                },
                click: function (e, t) {
                    var i, s = e.navigation,
                        a = s.$nextEl,
                        r = s.$prevEl;
                    !e.params.navigation.hideOnClick || m(t.target).is(r) || m(t.target).is(a) || (a ? i = a.hasClass(e.params.navigation.hiddenClass) : r && (i = r.hasClass(e.params.navigation.hiddenClass)), !0 === i ? e.emit("navigationShow") : e.emit("navigationHide"), a && a.toggleClass(e.params.navigation.hiddenClass), r && r.toggleClass(e.params.navigation.hiddenClass))
                }
            }
        }, {
            name: "pagination",
            params: {
                pagination: {
                    el: null,
                    bulletElement: "span",
                    clickable: !1,
                    hideOnClick: !1,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    progressbarOpposite: !1,
                    type: "bullets",
                    dynamicBullets: !1,
                    dynamicMainBullets: 1,
                    formatFractionCurrent: function (e) {
                        return e
                    },
                    formatFractionTotal: function (e) {
                        return e
                    },
                    bulletClass: "swiper-pagination-bullet",
                    bulletActiveClass: "swiper-pagination-bullet-active",
                    modifierClass: "swiper-pagination-",
                    currentClass: "swiper-pagination-current",
                    totalClass: "swiper-pagination-total",
                    hiddenClass: "swiper-pagination-hidden",
                    progressbarFillClass: "swiper-pagination-progressbar-fill",
                    progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                    clickableClass: "swiper-pagination-clickable",
                    lockClass: "swiper-pagination-lock"
                }
            },
            create: function () {
                M(this, {
                    pagination: t({
                        dynamicBulletIndex: 0
                    }, Z)
                })
            },
            on: {
                init: function (e) {
                    e.pagination.init(), e.pagination.render(), e.pagination.update()
                },
                activeIndexChange: function (e) {
                    (e.params.loop || void 0 === e.snapIndex) && e.pagination.update()
                },
                snapIndexChange: function (e) {
                    e.params.loop || e.pagination.update()
                },
                slidesLengthChange: function (e) {
                    e.params.loop && (e.pagination.render(), e.pagination.update())
                },
                snapGridLengthChange: function (e) {
                    e.params.loop || (e.pagination.render(), e.pagination.update())
                },
                destroy: function (e) {
                    e.pagination.destroy()
                },
                click: function (e, t) {
                    e.params.pagination.el && e.params.pagination.hideOnClick && e.pagination.$el.length > 0 && !m(t.target).hasClass(e.params.pagination.bulletClass) && (!0 === e.pagination.$el.hasClass(e.params.pagination.hiddenClass) ? e.emit("paginationShow") : e.emit("paginationHide"), e.pagination.$el.toggleClass(e.params.pagination.hiddenClass))
                }
            }
        }, {
            name: "scrollbar",
            params: {
                scrollbar: {
                    el: null,
                    dragSize: "auto",
                    hide: !1,
                    draggable: !1,
                    snapOnRelease: !0,
                    lockClass: "swiper-scrollbar-lock",
                    dragClass: "swiper-scrollbar-drag"
                }
            },
            create: function () {
                M(this, {
                    scrollbar: t({
                        isTouched: !1,
                        timeout: null,
                        dragTimeout: null
                    }, J)
                })
            },
            on: {
                init: function (e) {
                    e.scrollbar.init(), e.scrollbar.updateSize(), e.scrollbar.setTranslate()
                },
                update: function (e) {
                    e.scrollbar.updateSize()
                },
                resize: function (e) {
                    e.scrollbar.updateSize()
                },
                observerUpdate: function (e) {
                    e.scrollbar.updateSize()
                },
                setTranslate: function (e) {
                    e.scrollbar.setTranslate()
                },
                setTransition: function (e, t) {
                    e.scrollbar.setTransition(t)
                },
                destroy: function (e) {
                    e.scrollbar.destroy()
                }
            }
        }, {
            name: "parallax",
            params: {
                parallax: {
                    enabled: !1
                }
            },
            create: function () {
                M(this, {
                    parallax: t({}, Q)
                })
            },
            on: {
                beforeInit: function (e) {
                    e.params.parallax.enabled && (e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0)
                },
                init: function (e) {
                    e.params.parallax.enabled && e.parallax.setTranslate()
                },
                setTranslate: function (e) {
                    e.params.parallax.enabled && e.parallax.setTranslate()
                },
                setTransition: function (e, t) {
                    e.params.parallax.enabled && e.parallax.setTransition(t)
                }
            }
        }, {
            name: "zoom",
            params: {
                zoom: {
                    enabled: !1,
                    maxRatio: 3,
                    minRatio: 1,
                    toggle: !0,
                    containerClass: "swiper-zoom-container",
                    zoomedSlideClass: "swiper-slide-zoomed"
                }
            },
            create: function () {
                var e = this;
                M(e, {
                    zoom: t({
                        enabled: !1,
                        scale: 1,
                        currentScale: 1,
                        isScaling: !1,
                        gesture: {
                            $slideEl: void 0,
                            slideWidth: void 0,
                            slideHeight: void 0,
                            $imageEl: void 0,
                            $imageWrapEl: void 0,
                            maxRatio: 3
                        },
                        image: {
                            isTouched: void 0,
                            isMoved: void 0,
                            currentX: void 0,
                            currentY: void 0,
                            minX: void 0,
                            minY: void 0,
                            maxX: void 0,
                            maxY: void 0,
                            width: void 0,
                            height: void 0,
                            startX: void 0,
                            startY: void 0,
                            touchesStart: {},
                            touchesCurrent: {}
                        },
                        velocity: {
                            x: void 0,
                            y: void 0,
                            prevPositionX: void 0,
                            prevPositionY: void 0,
                            prevTime: void 0
                        }
                    }, ee)
                });
                var i = 1;
                Object.defineProperty(e.zoom, "scale", {
                    get: function () {
                        return i
                    },
                    set: function (t) {
                        if (i !== t) {
                            var s = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0,
                                a = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0;
                            e.emit("zoomChange", t, s, a)
                        }
                        i = t
                    }
                })
            },
            on: {
                init: function (e) {
                    e.params.zoom.enabled && e.zoom.enable()
                },
                destroy: function (e) {
                    e.zoom.disable()
                },
                touchStart: function (e, t) {
                    e.zoom.enabled && e.zoom.onTouchStart(t)
                },
                touchEnd: function (e, t) {
                    e.zoom.enabled && e.zoom.onTouchEnd(t)
                },
                doubleTap: function (e, t) {
                    e.params.zoom.enabled && e.zoom.enabled && e.params.zoom.toggle && e.zoom.toggle(t)
                },
                transitionEnd: function (e) {
                    e.zoom.enabled && e.params.zoom.enabled && e.zoom.onTransitionEnd()
                },
                slideChange: function (e) {
                    e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && e.zoom.onTransitionEnd()
                }
            }
        }, {
            name: "lazy",
            params: {
                lazy: {
                    enabled: !1,
                    loadPrevNext: !1,
                    loadPrevNextAmount: 1,
                    loadOnTransitionStart: !1,
                    elementClass: "swiper-lazy",
                    loadingClass: "swiper-lazy-loading",
                    loadedClass: "swiper-lazy-loaded",
                    preloaderClass: "swiper-lazy-preloader"
                }
            },
            create: function () {
                M(this, {
                    lazy: t({
                        initialImageLoaded: !1
                    }, te)
                })
            },
            on: {
                beforeInit: function (e) {
                    e.params.lazy.enabled && e.params.preloadImages && (e.params.preloadImages = !1)
                },
                init: function (e) {
                    e.params.lazy.enabled && !e.params.loop && 0 === e.params.initialSlide && e.lazy.load()
                },
                scroll: function (e) {
                    e.params.freeMode && !e.params.freeModeSticky && e.lazy.load()
                },
                resize: function (e) {
                    e.params.lazy.enabled && e.lazy.load()
                },
                scrollbarDragMove: function (e) {
                    e.params.lazy.enabled && e.lazy.load()
                },
                transitionStart: function (e) {
                    e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load()
                },
                transitionEnd: function (e) {
                    e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart && e.lazy.load()
                },
                slideChange: function (e) {
                    e.params.lazy.enabled && e.params.cssMode && e.lazy.load()
                }
            }
        }, {
            name: "controller",
            params: {
                controller: {
                    control: void 0,
                    inverse: !1,
                    by: "slide"
                }
            },
            create: function () {
                M(this, {
                    controller: t({
                        control: this.params.controller.control
                    }, ie)
                })
            },
            on: {
                update: function (e) {
                    e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
                },
                resize: function (e) {
                    e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
                },
                observerUpdate: function (e) {
                    e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
                },
                setTranslate: function (e, t, i) {
                    e.controller.control && e.controller.setTranslate(t, i)
                },
                setTransition: function (e, t, i) {
                    e.controller.control && e.controller.setTransition(t, i)
                }
            }
        }, {
            name: "a11y",
            params: {
                a11y: {
                    enabled: !0,
                    notificationClass: "swiper-notification",
                    prevSlideMessage: "Previous slide",
                    nextSlideMessage: "Next slide",
                    firstSlideMessage: "This is the first slide",
                    lastSlideMessage: "This is the last slide",
                    paginationBulletMessage: "Go to slide {{index}}",
                    containerMessage: null,
                    containerRoleDescriptionMessage: null,
                    itemRoleDescriptionMessage: null
                }
            },
            create: function () {
                M(this, {
                    a11y: t(t({}, se), {}, {
                        liveRegion: m('<span class="' + this.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
                    })
                })
            },
            on: {
                afterInit: function (e) {
                    e.params.a11y.enabled && (e.a11y.init(), e.a11y.updateNavigation())
                },
                toEdge: function (e) {
                    e.params.a11y.enabled && e.a11y.updateNavigation()
                },
                fromEdge: function (e) {
                    e.params.a11y.enabled && e.a11y.updateNavigation()
                },
                paginationUpdate: function (e) {
                    e.params.a11y.enabled && e.a11y.updatePagination()
                },
                destroy: function (e) {
                    e.params.a11y.enabled && e.a11y.destroy()
                }
            }
        }, {
            name: "history",
            params: {
                history: {
                    enabled: !1,
                    replaceState: !1,
                    key: "slides"
                }
            },
            create: function () {
                M(this, {
                    history: t({}, ae)
                })
            },
            on: {
                init: function (e) {
                    e.params.history.enabled && e.history.init()
                },
                destroy: function (e) {
                    e.params.history.enabled && e.history.destroy()
                },
                transitionEnd: function (e) {
                    e.history.initialized && e.history.setHistory(e.params.history.key, e.activeIndex)
                },
                slideChange: function (e) {
                    e.history.initialized && e.params.cssMode && e.history.setHistory(e.params.history.key, e.activeIndex)
                }
            }
        }, {
            name: "hash-navigation",
            params: {
                hashNavigation: {
                    enabled: !1,
                    replaceState: !1,
                    watchState: !1
                }
            },
            create: function () {
                M(this, {
                    hashNavigation: t({
                        initialized: !1
                    }, re)
                })
            },
            on: {
                init: function (e) {
                    e.params.hashNavigation.enabled && e.hashNavigation.init()
                },
                destroy: function (e) {
                    e.params.hashNavigation.enabled && e.hashNavigation.destroy()
                },
                transitionEnd: function (e) {
                    e.hashNavigation.initialized && e.hashNavigation.setHash()
                },
                slideChange: function (e) {
                    e.hashNavigation.initialized && e.params.cssMode && e.hashNavigation.setHash()
                }
            }
        }, {
            name: "autoplay",
            params: {
                autoplay: {
                    enabled: !1,
                    delay: 3e3,
                    waitForTransition: !0,
                    disableOnInteraction: !0,
                    stopOnLastSlide: !1,
                    reverseDirection: !1
                }
            },
            create: function () {
                M(this, {
                    autoplay: t(t({}, ne), {}, {
                        running: !1,
                        paused: !1
                    })
                })
            },
            on: {
                init: function (e) {
                    e.params.autoplay.enabled && (e.autoplay.start(), r().addEventListener("visibilitychange", e.autoplay.onVisibilityChange))
                },
                beforeTransitionStart: function (e, t, i) {
                    e.autoplay.running && (i || !e.params.autoplay.disableOnInteraction ? e.autoplay.pause(t) : e.autoplay.stop())
                },
                sliderFirstMove: function (e) {
                    e.autoplay.running && (e.params.autoplay.disableOnInteraction ? e.autoplay.stop() : e.autoplay.pause())
                },
                touchEnd: function (e) {
                    e.params.cssMode && e.autoplay.paused && !e.params.autoplay.disableOnInteraction && e.autoplay.run()
                },
                destroy: function (e) {
                    e.autoplay.running && e.autoplay.stop(), r().removeEventListener("visibilitychange", e.autoplay.onVisibilityChange)
                }
            }
        }, {
            name: "effect-fade",
            params: {
                fadeEffect: {
                    crossFade: !1
                }
            },
            create: function () {
                M(this, {
                    fadeEffect: t({}, le)
                })
            },
            on: {
                beforeInit: function (e) {
                    if ("fade" === e.params.effect) {
                        e.classNames.push(e.params.containerModifierClass + "fade");
                        var t = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            spaceBetween: 0,
                            virtualTranslate: !0
                        };
                        S(e.params, t), S(e.originalParams, t)
                    }
                },
                setTranslate: function (e) {
                    "fade" === e.params.effect && e.fadeEffect.setTranslate()
                },
                setTransition: function (e, t) {
                    "fade" === e.params.effect && e.fadeEffect.setTransition(t)
                }
            }
        }, {
            name: "effect-cube",
            params: {
                cubeEffect: {
                    slideShadows: !0,
                    shadow: !0,
                    shadowOffset: 20,
                    shadowScale: .94
                }
            },
            create: function () {
                M(this, {
                    cubeEffect: t({}, oe)
                })
            },
            on: {
                beforeInit: function (e) {
                    if ("cube" === e.params.effect) {
                        e.classNames.push(e.params.containerModifierClass + "cube"), e.classNames.push(e.params.containerModifierClass + "3d");
                        var t = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            resistanceRatio: 0,
                            spaceBetween: 0,
                            centeredSlides: !1,
                            virtualTranslate: !0
                        };
                        S(e.params, t), S(e.originalParams, t)
                    }
                },
                setTranslate: function (e) {
                    "cube" === e.params.effect && e.cubeEffect.setTranslate()
                },
                setTransition: function (e, t) {
                    "cube" === e.params.effect && e.cubeEffect.setTransition(t)
                }
            }
        }, {
            name: "effect-flip",
            params: {
                flipEffect: {
                    slideShadows: !0,
                    limitRotation: !0
                }
            },
            create: function () {
                M(this, {
                    flipEffect: t({}, de)
                })
            },
            on: {
                beforeInit: function (e) {
                    if ("flip" === e.params.effect) {
                        e.classNames.push(e.params.containerModifierClass + "flip"), e.classNames.push(e.params.containerModifierClass + "3d");
                        var t = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            spaceBetween: 0,
                            virtualTranslate: !0
                        };
                        S(e.params, t), S(e.originalParams, t)
                    }
                },
                setTranslate: function (e) {
                    "flip" === e.params.effect && e.flipEffect.setTranslate()
                },
                setTransition: function (e, t) {
                    "flip" === e.params.effect && e.flipEffect.setTransition(t)
                }
            }
        }, {
            name: "effect-coverflow",
            params: {
                coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    scale: 1,
                    modifier: 1,
                    slideShadows: !0
                }
            },
            create: function () {
                M(this, {
                    coverflowEffect: t({}, he)
                })
            },
            on: {
                beforeInit: function (e) {
                    "coverflow" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "coverflow"), e.classNames.push(e.params.containerModifierClass + "3d"), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0)
                },
                setTranslate: function (e) {
                    "coverflow" === e.params.effect && e.coverflowEffect.setTranslate()
                },
                setTransition: function (e, t) {
                    "coverflow" === e.params.effect && e.coverflowEffect.setTransition(t)
                }
            }
        }, {
            name: "thumbs",
            params: {
                thumbs: {
                    swiper: null,
                    multipleActiveThumbs: !0,
                    autoScrollOffset: 0,
                    slideThumbActiveClass: "swiper-slide-thumb-active",
                    thumbsContainerClass: "swiper-container-thumbs"
                }
            },
            create: function () {
                M(this, {
                    thumbs: t({
                        swiper: null,
                        initialized: !1
                    }, pe)
                })
            },
            on: {
                beforeInit: function (e) {
                    var t = e.params.thumbs;
                    t && t.swiper && (e.thumbs.init(), e.thumbs.update(!0))
                },
                slideChange: function (e) {
                    e.thumbs.swiper && e.thumbs.update()
                },
                update: function (e) {
                    e.thumbs.swiper && e.thumbs.update()
                },
                resize: function (e) {
                    e.thumbs.swiper && e.thumbs.update()
                },
                observerUpdate: function (e) {
                    e.thumbs.swiper && e.thumbs.update()
                },
                setTransition: function (e, t) {
                    var i = e.thumbs.swiper;
                    i && i.setTransition(t)
                },
                beforeDestroy: function (e) {
                    var t = e.thumbs.swiper;
                    t && e.thumbs.swiperCreated && t && t.destroy()
                }
            }
        }];
    return R.use(ue), R
}));


/**
 * Skipped minification because the original files appears to be already minified.
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t=t||self).barba=n()}(this,(function(){function t(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function n(n,r,e){return r&&t(n.prototype,r),e&&t(n,e),n}function r(){return(r=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e])}return t}).apply(this,arguments)}function e(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n}function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function o(t,n){return(o=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function u(t,n,r){return(u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}()?Reflect.construct:function(t,n,r){var e=[null];e.push.apply(e,n);var i=new(Function.bind.apply(t,e));return r&&o(i,r.prototype),i}).apply(null,arguments)}function f(t){var n="function"==typeof Map?new Map:void 0;return(f=function(t){if(null===t||-1===Function.toString.call(t).indexOf("[native code]"))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return u(t,arguments,i(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),o(r,t)})(t)}function s(t,n){try{var r=t()}catch(t){return n(t)}return r&&r.then?r.then(void 0,n):r}"undefined"!=typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!=typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));var c,a="2.9.7",h=function(){};!function(t){t[t.off=0]="off",t[t.error=1]="error",t[t.warning=2]="warning",t[t.info=3]="info",t[t.debug=4]="debug"}(c||(c={}));var v=c.off,l=function(){function t(t){this.t=t}t.getLevel=function(){return v},t.setLevel=function(t){return v=c[t]};var n=t.prototype;return n.error=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this.i(console.error,c.error,n)},n.warn=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this.i(console.warn,c.warning,n)},n.info=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this.i(console.info,c.info,n)},n.debug=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this.i(console.log,c.debug,n)},n.i=function(n,r,e){r<=t.getLevel()&&n.apply(console,["["+this.t+"] "].concat(e))},t}(),d=O,m=E,p=g,w=x,b=T,y="/",P=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function g(t,n){for(var r,e=[],i=0,o=0,u="",f=n&&n.delimiter||y,s=n&&n.whitelist||void 0,c=!1;null!==(r=P.exec(t));){var a=r[0],h=r[1],v=r.index;if(u+=t.slice(o,v),o=v+a.length,h)u+=h[1],c=!0;else{var l="",d=r[2],m=r[3],p=r[4],w=r[5];if(!c&&u.length){var b=u.length-1,g=u[b];(!s||s.indexOf(g)>-1)&&(l=g,u=u.slice(0,b))}u&&(e.push(u),u="",c=!1);var E=m||p,x=l||f;e.push({name:d||i++,prefix:l,delimiter:x,optional:"?"===w||"*"===w,repeat:"+"===w||"*"===w,pattern:E?A(E):"[^"+k(x===f?x:x+f)+"]+?"})}}return(u||o<t.length)&&e.push(u+t.substr(o)),e}function E(t,n){return function(r,e){var i=t.exec(r);if(!i)return!1;for(var o=i[0],u=i.index,f={},s=e&&e.decode||decodeURIComponent,c=1;c<i.length;c++)if(void 0!==i[c]){var a=n[c-1];f[a.name]=a.repeat?i[c].split(a.delimiter).map((function(t){return s(t,a)})):s(i[c],a)}return{path:o,index:u,params:f}}}function x(t,n){for(var r=new Array(t.length),e=0;e<t.length;e++)"object"==typeof t[e]&&(r[e]=new RegExp("^(?:"+t[e].pattern+")$",R(n)));return function(n,e){for(var i="",o=e&&e.encode||encodeURIComponent,u=!e||!1!==e.validate,f=0;f<t.length;f++){var s=t[f];if("string"!=typeof s){var c,a=n?n[s.name]:void 0;if(Array.isArray(a)){if(!s.repeat)throw new TypeError('Expected "'+s.name+'" to not repeat, but got array');if(0===a.length){if(s.optional)continue;throw new TypeError('Expected "'+s.name+'" to not be empty')}for(var h=0;h<a.length;h++){if(c=o(a[h],s),u&&!r[f].test(c))throw new TypeError('Expected all "'+s.name+'" to match "'+s.pattern+'"');i+=(0===h?s.prefix:s.delimiter)+c}}else if("string"!=typeof a&&"number"!=typeof a&&"boolean"!=typeof a){if(!s.optional)throw new TypeError('Expected "'+s.name+'" to be '+(s.repeat?"an array":"a string"))}else{if(c=o(String(a),s),u&&!r[f].test(c))throw new TypeError('Expected "'+s.name+'" to match "'+s.pattern+'", but got "'+c+'"');i+=s.prefix+c}}else i+=s}return i}}function k(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function A(t){return t.replace(/([=!:$/()])/g,"\\$1")}function R(t){return t&&t.sensitive?"":"i"}function T(t,n,r){for(var e=(r=r||{}).strict,i=!1!==r.start,o=!1!==r.end,u=r.delimiter||y,f=[].concat(r.endsWith||[]).map(k).concat("$").join("|"),s=i?"^":"",c=0;c<t.length;c++){var a=t[c];if("string"==typeof a)s+=k(a);else{var h=a.repeat?"(?:"+a.pattern+")(?:"+k(a.delimiter)+"(?:"+a.pattern+"))*":a.pattern;n&&n.push(a),s+=a.optional?a.prefix?"(?:"+k(a.prefix)+"("+h+"))?":"("+h+")?":k(a.prefix)+"("+h+")"}}if(o)e||(s+="(?:"+k(u)+")?"),s+="$"===f?"$":"(?="+f+")";else{var v=t[t.length-1],l="string"==typeof v?v[v.length-1]===u:void 0===v;e||(s+="(?:"+k(u)+"(?="+f+"))?"),l||(s+="(?="+k(u)+"|"+f+")")}return new RegExp(s,R(r))}function O(t,n,r){return t instanceof RegExp?function(t,n){if(!n)return t;var r=t.source.match(/\((?!\?)/g);if(r)for(var e=0;e<r.length;e++)n.push({name:e,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return t}(t,n):Array.isArray(t)?function(t,n,r){for(var e=[],i=0;i<t.length;i++)e.push(O(t[i],n,r).source);return new RegExp("(?:"+e.join("|")+")",R(r))}(t,n,r):function(t,n,r){return T(g(t,r),n,r)}(t,n,r)}d.match=function(t,n){var r=[];return E(O(t,r,n),r)},d.regexpToFunction=m,d.parse=p,d.compile=function(t,n){return x(g(t,n),n)},d.tokensToFunction=w,d.tokensToRegExp=b;var S={container:"container",history:"history",namespace:"namespace",prefix:"data-barba",prevent:"prevent",wrapper:"wrapper"},j=new(function(){function t(){this.o=S,this.u=new DOMParser}var n=t.prototype;return n.toString=function(t){return t.outerHTML},n.toDocument=function(t){return this.u.parseFromString(t,"text/html")},n.toElement=function(t){var n=document.createElement("div");return n.innerHTML=t,n},n.getHtml=function(t){return void 0===t&&(t=document),this.toString(t.documentElement)},n.getWrapper=function(t){return void 0===t&&(t=document),t.querySelector("["+this.o.prefix+'="'+this.o.wrapper+'"]')},n.getContainer=function(t){return void 0===t&&(t=document),t.querySelector("["+this.o.prefix+'="'+this.o.container+'"]')},n.removeContainer=function(t){document.body.contains(t)&&t.parentNode.removeChild(t)},n.addContainer=function(t,n){var r=this.getContainer();r?this.s(t,r):n.appendChild(t)},n.getNamespace=function(t){void 0===t&&(t=document);var n=t.querySelector("["+this.o.prefix+"-"+this.o.namespace+"]");return n?n.getAttribute(this.o.prefix+"-"+this.o.namespace):null},n.getHref=function(t){if(t.tagName&&"a"===t.tagName.toLowerCase()){if("string"==typeof t.href)return t.href;var n=t.getAttribute("href")||t.getAttribute("xlink:href");if(n)return this.resolveUrl(n.baseVal||n)}return null},n.resolveUrl=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var e=n.length;if(0===e)throw new Error("resolveUrl requires at least one argument; got none.");var i=document.createElement("base");if(i.href=arguments[0],1===e)return i.href;var o=document.getElementsByTagName("head")[0];o.insertBefore(i,o.firstChild);for(var u,f=document.createElement("a"),s=1;s<e;s++)f.href=arguments[s],i.href=u=f.href;return o.removeChild(i),u},n.s=function(t,n){n.parentNode.insertBefore(t,n.nextSibling)},t}()),M=new(function(){function t(){this.h=[],this.v=-1}var e=t.prototype;return e.init=function(t,n){this.l="barba";var r={ns:n,scroll:{x:window.scrollX,y:window.scrollY},url:t};this.h.push(r),this.v=0;var e={from:this.l,index:0,states:[].concat(this.h)};window.history&&window.history.replaceState(e,"",t)},e.change=function(t,n,r){if(r&&r.state){var e=r.state,i=e.index;n=this.m(this.v-i),this.replace(e.states),this.v=i}else this.add(t,n);return n},e.add=function(t,n){var r=this.size,e=this.p(n),i={ns:"tmp",scroll:{x:window.scrollX,y:window.scrollY},url:t};this.h.push(i),this.v=r;var o={from:this.l,index:r,states:[].concat(this.h)};switch(e){case"push":window.history&&window.history.pushState(o,"",t);break;case"replace":window.history&&window.history.replaceState(o,"",t)}},e.update=function(t,n){var e=n||this.v,i=r({},this.get(e),{},t);this.set(e,i)},e.remove=function(t){t?this.h.splice(t,1):this.h.pop(),this.v--},e.clear=function(){this.h=[],this.v=-1},e.replace=function(t){this.h=t},e.get=function(t){return this.h[t]},e.set=function(t,n){return this.h[t]=n},e.p=function(t){var n="push",r=t,e=S.prefix+"-"+S.history;return r.hasAttribute&&r.hasAttribute(e)&&(n=r.getAttribute(e)),n},e.m=function(t){return Math.abs(t)>1?t>0?"forward":"back":0===t?"popstate":t>0?"back":"forward"},n(t,[{key:"current",get:function(){return this.h[this.v]}},{key:"state",get:function(){return this.h[this.h.length-1]}},{key:"previous",get:function(){return this.v<1?null:this.h[this.v-1]}},{key:"size",get:function(){return this.h.length}}]),t}()),L=function(t,n){try{var r=function(){if(!n.next.html)return Promise.resolve(t).then((function(t){var r=n.next;if(t){var e=j.toElement(t);r.namespace=j.getNamespace(e),r.container=j.getContainer(e),r.html=t,M.update({ns:r.namespace});var i=j.toDocument(t);document.title=i.title}}))}();return Promise.resolve(r&&r.then?r.then((function(){})):void 0)}catch(t){return Promise.reject(t)}},$=d,_={__proto__:null,update:L,nextTick:function(){return new Promise((function(t){window.requestAnimationFrame(t)}))},pathToRegexp:$},q=function(){return window.location.origin},B=function(t){return void 0===t&&(t=window.location.href),U(t).port},U=function(t){var n,r=t.match(/:\d+/);if(null===r)/^http/.test(t)&&(n=80),/^https/.test(t)&&(n=443);else{var e=r[0].substring(1);n=parseInt(e,10)}var i,o=t.replace(q(),""),u={},f=o.indexOf("#");f>=0&&(i=o.slice(f+1),o=o.slice(0,f));var s=o.indexOf("?");return s>=0&&(u=D(o.slice(s+1)),o=o.slice(0,s)),{hash:i,path:o,port:n,query:u}},D=function(t){return t.split("&").reduce((function(t,n){var r=n.split("=");return t[r[0]]=r[1],t}),{})},F=function(t){return void 0===t&&(t=window.location.href),t.replace(/(\/#.*|\/|#.*)$/,"")},H={__proto__:null,getHref:function(){return window.location.href},getOrigin:q,getPort:B,getPath:function(t){return void 0===t&&(t=window.location.href),U(t).path},parse:U,parseQuery:D,clean:F};function I(t,n,r){return void 0===n&&(n=2e3),new Promise((function(e,i){var o=new XMLHttpRequest;o.onreadystatechange=function(){if(o.readyState===XMLHttpRequest.DONE)if(200===o.status)e(o.responseText);else if(o.status){var n={status:o.status,statusText:o.statusText};r(t,n),i(n)}},o.ontimeout=function(){var e=new Error("Timeout error ["+n+"]");r(t,e),i(e)},o.onerror=function(){var n=new Error("Fetch error");r(t,n),i(n)},o.open("GET",t),o.timeout=n,o.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml"),o.setRequestHeader("x-barba","yes"),o.send()}))}var C=function(t){return!!t&&("object"==typeof t||"function"==typeof t)&&"function"==typeof t.then};function N(t,n){return void 0===n&&(n={}),function(){for(var r=arguments.length,e=new Array(r),i=0;i<r;i++)e[i]=arguments[i];var o=!1,u=new Promise((function(r,i){n.async=function(){return o=!0,function(t,n){t?i(t):r(n)}};var u=t.apply(n,e);o||(C(u)?u.then(r,i):r(u))}));return u}}var X=new(function(t){function n(){var n;return(n=t.call(this)||this).logger=new l("@barba/core"),n.all=["ready","page","reset","currentAdded","currentRemoved","nextAdded","nextRemoved","beforeOnce","once","afterOnce","before","beforeLeave","leave","afterLeave","beforeEnter","enter","afterEnter","after"],n.registered=new Map,n.init(),n}e(n,t);var r=n.prototype;return r.init=function(){var t=this;this.registered.clear(),this.all.forEach((function(n){t[n]||(t[n]=function(r,e){t.registered.has(n)||t.registered.set(n,new Set),t.registered.get(n).add({ctx:e||{},fn:r})})}))},r.do=function(t){for(var n=this,r=arguments.length,e=new Array(r>1?r-1:0),i=1;i<r;i++)e[i-1]=arguments[i];if(this.registered.has(t)){var o=Promise.resolve();return this.registered.get(t).forEach((function(t){o=o.then((function(){return N(t.fn,t.ctx).apply(void 0,e)}))})),o.catch((function(r){n.logger.debug("Hook error ["+t+"]"),n.logger.error(r)}))}return Promise.resolve()},r.clear=function(){var t=this;this.all.forEach((function(n){delete t[n]})),this.init()},r.help=function(){this.logger.info("Available hooks: "+this.all.join(","));var t=[];this.registered.forEach((function(n,r){return t.push(r)})),this.logger.info("Registered hooks: "+t.join(","))},n}(h)),z=function(){function t(t){if(this.P=[],"boolean"==typeof t)this.g=t;else{var n=Array.isArray(t)?t:[t];this.P=n.map((function(t){return $(t)}))}}return t.prototype.checkHref=function(t){if("boolean"==typeof this.g)return this.g;var n=U(t).path;return this.P.some((function(t){return null!==t.exec(n)}))},t}(),G=function(t){function n(n){var r;return(r=t.call(this,n)||this).k=new Map,r}e(n,t);var i=n.prototype;return i.set=function(t,n,r){return this.k.set(t,{action:r,request:n}),{action:r,request:n}},i.get=function(t){return this.k.get(t)},i.getRequest=function(t){return this.k.get(t).request},i.getAction=function(t){return this.k.get(t).action},i.has=function(t){return!this.checkHref(t)&&this.k.has(t)},i.delete=function(t){return this.k.delete(t)},i.update=function(t,n){var e=r({},this.k.get(t),{},n);return this.k.set(t,e),e},n}(z),Q=function(){return!window.history.pushState},W=function(t){return!t.el||!t.href},J=function(t){var n=t.event;return n.which>1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey},K=function(t){var n=t.el;return n.hasAttribute("target")&&"_blank"===n.target},V=function(t){var n=t.el;return void 0!==n.protocol&&window.location.protocol!==n.protocol||void 0!==n.hostname&&window.location.hostname!==n.hostname},Y=function(t){var n=t.el;return void 0!==n.port&&B()!==B(n.href)},Z=function(t){var n=t.el;return n.getAttribute&&"string"==typeof n.getAttribute("download")},tt=function(t){return t.el.hasAttribute(S.prefix+"-"+S.prevent)},nt=function(t){return Boolean(t.el.closest("["+S.prefix+"-"+S.prevent+'="all"]'))},rt=function(t){var n=t.href;return F(n)===F()&&B(n)===B()},et=function(t){function n(n){var r;return(r=t.call(this,n)||this).suite=[],r.tests=new Map,r.init(),r}e(n,t);var r=n.prototype;return r.init=function(){this.add("pushState",Q),this.add("exists",W),this.add("newTab",J),this.add("blank",K),this.add("corsDomain",V),this.add("corsPort",Y),this.add("download",Z),this.add("preventSelf",tt),this.add("preventAll",nt),this.add("sameUrl",rt,!1)},r.add=function(t,n,r){void 0===r&&(r=!0),this.tests.set(t,n),r&&this.suite.push(t)},r.run=function(t,n,r,e){return this.tests.get(t)({el:n,event:r,href:e})},r.checkLink=function(t,n,r){var e=this;return this.suite.some((function(i){return e.run(i,t,n,r)}))},n}(z),it=function(t){function n(r,e){var i;void 0===e&&(e="Barba error");for(var o=arguments.length,u=new Array(o>2?o-2:0),f=2;f<o;f++)u[f-2]=arguments[f];return(i=t.call.apply(t,[this].concat(u))||this).error=r,i.label=e,Error.captureStackTrace&&Error.captureStackTrace(function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(i),n),i.name="BarbaError",i}return e(n,t),n}(f(Error)),ot=function(){function t(t){void 0===t&&(t=[]),this.logger=new l("@barba/core"),this.all=[],this.page=[],this.once=[],this.A=[{name:"namespace",type:"strings"},{name:"custom",type:"function"}],t&&(this.all=this.all.concat(t)),this.update()}var n=t.prototype;return n.add=function(t,n){switch(t){case"rule":this.A.splice(n.position||0,0,n.value);break;case"transition":default:this.all.push(n)}this.update()},n.resolve=function(t,n){var r=this;void 0===n&&(n={});var e=n.once?this.once:this.page;e=e.filter(n.self?function(t){return t.name&&"self"===t.name}:function(t){return!t.name||"self"!==t.name});var i=new Map,o=e.find((function(e){var o=!0,u={};return!(!n.self||"self"!==e.name)||(r.A.reverse().forEach((function(n){o&&(o=r.R(e,n,t,u),e.from&&e.to&&(o=r.R(e,n,t,u,"from")&&r.R(e,n,t,u,"to")),e.from&&!e.to&&(o=r.R(e,n,t,u,"from")),!e.from&&e.to&&(o=r.R(e,n,t,u,"to")))})),i.set(e,u),o)})),u=i.get(o),f=[];if(f.push(n.once?"once":"page"),n.self&&f.push("self"),u){var s,c=[o];Object.keys(u).length>0&&c.push(u),(s=this.logger).info.apply(s,["Transition found ["+f.join(",")+"]"].concat(c))}else this.logger.info("No transition found ["+f.join(",")+"]");return o},n.update=function(){var t=this;this.all=this.all.map((function(n){return t.T(n)})).sort((function(t,n){return t.priority-n.priority})).reverse().map((function(t){return delete t.priority,t})),this.page=this.all.filter((function(t){return void 0!==t.leave||void 0!==t.enter})),this.once=this.all.filter((function(t){return void 0!==t.once}))},n.R=function(t,n,r,e,i){var o=!0,u=!1,f=t,s=n.name,c=s,a=s,h=s,v=i?f[i]:f,l="to"===i?r.next:r.current;if(i?v&&v[s]:v[s]){switch(n.type){case"strings":default:var d=Array.isArray(v[c])?v[c]:[v[c]];l[c]&&-1!==d.indexOf(l[c])&&(u=!0),-1===d.indexOf(l[c])&&(o=!1);break;case"object":var m=Array.isArray(v[a])?v[a]:[v[a]];l[a]?(l[a].name&&-1!==m.indexOf(l[a].name)&&(u=!0),-1===m.indexOf(l[a].name)&&(o=!1)):o=!1;break;case"function":v[h](r)?u=!0:o=!1}u&&(i?(e[i]=e[i]||{},e[i][s]=f[i][s]):e[s]=f[s])}return o},n.O=function(t,n,r){var e=0;return(t[n]||t.from&&t.from[n]||t.to&&t.to[n])&&(e+=Math.pow(10,r),t.from&&t.from[n]&&(e+=1),t.to&&t.to[n]&&(e+=2)),e},n.T=function(t){var n=this;t.priority=0;var r=0;return this.A.forEach((function(e,i){r+=n.O(t,e.name,i+1)})),t.priority=r,t},t}(),ut=function(){function t(t){void 0===t&&(t=[]),this.logger=new l("@barba/core"),this.S=!1,this.store=new ot(t)}var r=t.prototype;return r.get=function(t,n){return this.store.resolve(t,n)},r.doOnce=function(t){var n=t.data,r=t.transition;try{var e=function(){i.S=!1},i=this,o=r||{};i.S=!0;var u=s((function(){return Promise.resolve(i.j("beforeOnce",n,o)).then((function(){return Promise.resolve(i.once(n,o)).then((function(){return Promise.resolve(i.j("afterOnce",n,o)).then((function(){}))}))}))}),(function(t){i.S=!1,i.logger.debug("Transition error [before/after/once]"),i.logger.error(t)}));return Promise.resolve(u&&u.then?u.then(e):e())}catch(t){return Promise.reject(t)}},r.doPage=function(t){var n=t.data,r=t.transition,e=t.page,i=t.wrapper;try{var o=function(t){if(u)return t;f.S=!1},u=!1,f=this,c=r||{},a=!0===c.sync||!1;f.S=!0;var h=s((function(){function t(){return Promise.resolve(f.j("before",n,c)).then((function(){var t=!1;function r(r){return t?r:Promise.resolve(f.remove(n)).then((function(){return Promise.resolve(f.j("after",n,c)).then((function(){}))}))}var o=function(){if(a)return s((function(){return Promise.resolve(f.add(n,i)).then((function(){return Promise.resolve(f.j("beforeLeave",n,c)).then((function(){return Promise.resolve(f.j("beforeEnter",n,c)).then((function(){return Promise.resolve(Promise.all([f.leave(n,c),f.enter(n,c)])).then((function(){return Promise.resolve(f.j("afterLeave",n,c)).then((function(){return Promise.resolve(f.j("afterEnter",n,c)).then((function(){}))}))}))}))}))}))}),(function(t){if(f.M(t))throw new it(t,"Transition error [sync]")}));var r=function(r){return t?r:s((function(){var t=function(){if(!1!==o)return Promise.resolve(f.add(n,i)).then((function(){return Promise.resolve(f.j("beforeEnter",n,c)).then((function(){return Promise.resolve(f.enter(n,c,o)).then((function(){return Promise.resolve(f.j("afterEnter",n,c)).then((function(){}))}))}))}))}();if(t&&t.then)return t.then((function(){}))}),(function(t){if(f.M(t))throw new it(t,"Transition error [before/after/enter]")}))},o=!1,u=s((function(){return Promise.resolve(f.j("beforeLeave",n,c)).then((function(){return Promise.resolve(Promise.all([f.leave(n,c),L(e,n)]).then((function(t){return t[0]}))).then((function(t){return o=t,Promise.resolve(f.j("afterLeave",n,c)).then((function(){}))}))}))}),(function(t){if(f.M(t))throw new it(t,"Transition error [before/after/leave]")}));return u&&u.then?u.then(r):r(u)}();return o&&o.then?o.then(r):r(o)}))}var r=function(){if(a)return Promise.resolve(L(e,n)).then((function(){}))}();return r&&r.then?r.then(t):t()}),(function(t){if(f.S=!1,t.name&&"BarbaError"===t.name)throw f.logger.debug(t.label),f.logger.error(t.error),t;throw f.logger.debug("Transition error [page]"),f.logger.error(t),t}));return Promise.resolve(h&&h.then?h.then(o):o(h))}catch(t){return Promise.reject(t)}},r.once=function(t,n){try{return Promise.resolve(X.do("once",t,n)).then((function(){return n.once?N(n.once,n)(t):Promise.resolve()}))}catch(t){return Promise.reject(t)}},r.leave=function(t,n){try{return Promise.resolve(X.do("leave",t,n)).then((function(){return n.leave?N(n.leave,n)(t):Promise.resolve()}))}catch(t){return Promise.reject(t)}},r.enter=function(t,n,r){try{return Promise.resolve(X.do("enter",t,n)).then((function(){return n.enter?N(n.enter,n)(t,r):Promise.resolve()}))}catch(t){return Promise.reject(t)}},r.add=function(t,n){try{return j.addContainer(t.next.container,n),X.do("nextAdded",t),Promise.resolve()}catch(t){return Promise.reject(t)}},r.remove=function(t){try{return j.removeContainer(t.current.container),X.do("currentRemoved",t),Promise.resolve()}catch(t){return Promise.reject(t)}},r.M=function(t){return t.message?!/Timeout error|Fetch error/.test(t.message):!t.status},r.j=function(t,n,r){try{return Promise.resolve(X.do(t,n,r)).then((function(){return r[t]?N(r[t],r)(n):Promise.resolve()}))}catch(t){return Promise.reject(t)}},n(t,[{key:"isRunning",get:function(){return this.S},set:function(t){this.S=t}},{key:"hasOnce",get:function(){return this.store.once.length>0}},{key:"hasSelf",get:function(){return this.store.all.some((function(t){return"self"===t.name}))}},{key:"shouldWait",get:function(){return this.store.all.some((function(t){return t.to&&!t.to.route||t.sync}))}}]),t}(),ft=function(){function t(t){var n=this;this.names=["beforeLeave","afterLeave","beforeEnter","afterEnter"],this.byNamespace=new Map,0!==t.length&&(t.forEach((function(t){n.byNamespace.set(t.namespace,t)})),this.names.forEach((function(t){X[t](n.L(t))})))}return t.prototype.L=function(t){var n=this;return function(r){var e=t.match(/enter/i)?r.next:r.current,i=n.byNamespace.get(e.namespace);return i&&i[t]?N(i[t],i)(r):Promise.resolve()}},t}();Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(t){var n=this;do{if(n.matches(t))return n;n=n.parentElement||n.parentNode}while(null!==n&&1===n.nodeType);return null});var st={container:null,html:"",namespace:"",url:{hash:"",href:"",path:"",port:null,query:{}}};return new(function(){function t(){this.version=a,this.schemaPage=st,this.Logger=l,this.logger=new l("@barba/core"),this.plugins=[],this.hooks=X,this.dom=j,this.helpers=_,this.history=M,this.request=I,this.url=H}var e=t.prototype;return e.use=function(t,n){var r=this.plugins;r.indexOf(t)>-1?this.logger.warn("Plugin ["+t.name+"] already installed."):"function"==typeof t.install?(t.install(this,n),r.push(t)):this.logger.warn("Plugin ["+t.name+'] has no "install" method.')},e.init=function(t){var n=void 0===t?{}:t,e=n.transitions,i=void 0===e?[]:e,o=n.views,u=void 0===o?[]:o,f=n.schema,s=void 0===f?S:f,c=n.requestError,a=n.timeout,h=void 0===a?2e3:a,v=n.cacheIgnore,d=void 0!==v&&v,m=n.prefetchIgnore,p=void 0!==m&&m,w=n.preventRunning,b=void 0!==w&&w,y=n.prevent,P=void 0===y?null:y,g=n.debug,E=n.logLevel;if(l.setLevel(!0===(void 0!==g&&g)?"debug":void 0===E?"off":E),this.logger.info(this.version),Object.keys(s).forEach((function(t){S[t]&&(S[t]=s[t])})),this.$=c,this.timeout=h,this.cacheIgnore=d,this.prefetchIgnore=p,this.preventRunning=b,this._=this.dom.getWrapper(),!this._)throw new Error("[@barba/core] No Barba wrapper found");this._.setAttribute("aria-live","polite"),this.q();var x=this.data.current;if(!x.container)throw new Error("[@barba/core] No Barba container found");if(this.cache=new G(d),this.prevent=new et(p),this.transitions=new ut(i),this.views=new ft(u),null!==P){if("function"!=typeof P)throw new Error("[@barba/core] Prevent should be a function");this.prevent.add("preventCustom",P)}this.history.init(x.url.href,x.namespace),this.B=this.B.bind(this),this.U=this.U.bind(this),this.D=this.D.bind(this),this.F(),this.plugins.forEach((function(t){return t.init()}));var k=this.data;k.trigger="barba",k.next=k.current,k.current=r({},this.schemaPage),this.hooks.do("ready",k),this.once(k),this.q()},e.destroy=function(){this.q(),this.H(),this.history.clear(),this.hooks.clear(),this.plugins=[]},e.force=function(t){window.location.assign(t)},e.go=function(t,n,r){var e;if(void 0===n&&(n="barba"),this.transitions.isRunning)this.force(t);else if(!(e="popstate"===n?this.history.current&&this.url.getPath(this.history.current.url)===this.url.getPath(t):this.prevent.run("sameUrl",null,null,t))||this.transitions.hasSelf)return n=this.history.change(t,n,r),r&&(r.stopPropagation(),r.preventDefault()),this.page(t,n,e)},e.once=function(t){try{var n=this;return Promise.resolve(n.hooks.do("beforeEnter",t)).then((function(){function r(){return Promise.resolve(n.hooks.do("afterEnter",t)).then((function(){}))}var e=function(){if(n.transitions.hasOnce){var r=n.transitions.get(t,{once:!0});return Promise.resolve(n.transitions.doOnce({transition:r,data:t})).then((function(){}))}}();return e&&e.then?e.then(r):r()}))}catch(t){return Promise.reject(t)}},e.page=function(t,n,e){try{var i=function(){var t=o.data;return Promise.resolve(o.hooks.do("page",t)).then((function(){var n=s((function(){var n=o.transitions.get(t,{once:!1,self:e});return Promise.resolve(o.transitions.doPage({data:t,page:u,transition:n,wrapper:o._})).then((function(){o.q()}))}),(function(){0===l.getLevel()&&o.force(t.current.url.href)}));if(n&&n.then)return n.then((function(){}))}))},o=this;o.data.next.url=r({href:t},o.url.parse(t)),o.data.trigger=n;var u=o.cache.has(t)?o.cache.update(t,{action:"click"}).request:o.cache.set(t,o.request(t,o.timeout,o.onRequestError.bind(o,n)),"click").request,f=function(){if(o.transitions.shouldWait)return Promise.resolve(L(u,o.data)).then((function(){}))}();return Promise.resolve(f&&f.then?f.then(i):i())}catch(t){return Promise.reject(t)}},e.onRequestError=function(t){this.transitions.isRunning=!1;for(var n=arguments.length,r=new Array(n>1?n-1:0),e=1;e<n;e++)r[e-1]=arguments[e];var i=r[0],o=r[1],u=this.cache.getAction(i);return this.cache.delete(i),!(this.$&&!1===this.$(t,u,i,o)||("click"===u&&this.force(i),1))},e.prefetch=function(t){var n=this;this.cache.has(t)||this.cache.set(t,this.request(t,this.timeout,this.onRequestError.bind(this,"barba")).catch((function(t){n.logger.error(t)})),"prefetch")},e.F=function(){!0!==this.prefetchIgnore&&(document.addEventListener("mouseover",this.B),document.addEventListener("touchstart",this.B)),document.addEventListener("click",this.U),window.addEventListener("popstate",this.D)},e.H=function(){!0!==this.prefetchIgnore&&(document.removeEventListener("mouseover",this.B),document.removeEventListener("touchstart",this.B)),document.removeEventListener("click",this.U),window.removeEventListener("popstate",this.D)},e.B=function(t){var n=this,r=this.I(t);if(r){var e=this.dom.getHref(r);this.prevent.checkHref(e)||this.cache.has(e)||this.cache.set(e,this.request(e,this.timeout,this.onRequestError.bind(this,r)).catch((function(t){n.logger.error(t)})),"enter")}},e.U=function(t){var n=this.I(t);if(n)return this.transitions.isRunning&&this.preventRunning?(t.preventDefault(),void t.stopPropagation()):void this.go(this.dom.getHref(n),n,t)},e.D=function(t){this.go(this.url.getHref(),"popstate",t)},e.I=function(t){for(var n=t.target;n&&!this.dom.getHref(n);)n=n.parentNode;if(n&&!this.prevent.checkLink(n,t,this.dom.getHref(n)))return n},e.q=function(){var t=this.url.getHref(),n={container:this.dom.getContainer(),html:this.dom.getHtml(),namespace:this.dom.getNamespace(),url:r({href:t},this.url.parse(t))};this.C={current:n,next:r({},this.schemaPage),trigger:void 0},this.hooks.do("reset",this.data)},n(t,[{key:"data",get:function(){return this.C}},{key:"wrapper",get:function(){return this._}}]),t}())}));
//# sourceMappingURL=barba.umd.js.map

!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).Parallax=t()}}(function(){return function t(e,i,n){function o(r,a){if(!i[r]){if(!e[r]){var l="function"==typeof require&&require;if(!a&&l)return l(r,!0);if(s)return s(r,!0);var h=new Error("Cannot find module '"+r+"'");throw h.code="MODULE_NOT_FOUND",h}var u=i[r]={exports:{}};e[r][0].call(u.exports,function(t){var i=e[r][1][t];return o(i||t)},u,u.exports,t,e,i,n)}return i[r].exports}for(var s="function"==typeof require&&require,r=0;r<n.length;r++)o(n[r]);return o}({1:[function(t,e,i){"use strict";function n(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}var o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},i=0;i<10;i++)e["_"+String.fromCharCode(i)]=i;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(t){n[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var i,a,l=n(t),h=1;h<arguments.length;h++){i=Object(arguments[h]);for(var u in i)s.call(i,u)&&(l[u]=i[u]);if(o){a=o(i);for(var c=0;c<a.length;c++)r.call(i,a[c])&&(l[a[c]]=i[a[c]])}}return l}},{}],2:[function(t,e,i){(function(t){(function(){var i,n,o,s,r,a;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:void 0!==t&&null!==t&&t.hrtime?(e.exports=function(){return(i()-r)/1e6},n=t.hrtime,s=(i=function(){var t;return 1e9*(t=n())[0]+t[1]})(),a=1e9*t.uptime(),r=s-a):Date.now?(e.exports=function(){return Date.now()-o},o=Date.now()):(e.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(this)}).call(this,t("_process"))},{_process:3}],3:[function(t,e,i){function n(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function s(t){if(c===setTimeout)return setTimeout(t,0);if((c===n||!c)&&setTimeout)return c=setTimeout,setTimeout(t,0);try{return c(t,0)}catch(e){try{return c.call(null,t,0)}catch(e){return c.call(this,t,0)}}}function r(t){if(d===clearTimeout)return clearTimeout(t);if((d===o||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(t);try{return d(t)}catch(e){try{return d.call(null,t)}catch(e){return d.call(this,t)}}}function a(){v&&p&&(v=!1,p.length?f=p.concat(f):y=-1,f.length&&l())}function l(){if(!v){var t=s(a);v=!0;for(var e=f.length;e;){for(p=f,f=[];++y<e;)p&&p[y].run();y=-1,e=f.length}p=null,v=!1,r(t)}}function h(t,e){this.fun=t,this.array=e}function u(){}var c,d,m=e.exports={};!function(){try{c="function"==typeof setTimeout?setTimeout:n}catch(t){c=n}try{d="function"==typeof clearTimeout?clearTimeout:o}catch(t){d=o}}();var p,f=[],v=!1,y=-1;m.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)e[i-1]=arguments[i];f.push(new h(t,e)),1!==f.length||v||s(l)},h.prototype.run=function(){this.fun.apply(null,this.array)},m.title="browser",m.browser=!0,m.env={},m.argv=[],m.version="",m.versions={},m.on=u,m.addListener=u,m.once=u,m.off=u,m.removeListener=u,m.removeAllListeners=u,m.emit=u,m.prependListener=u,m.prependOnceListener=u,m.listeners=function(t){return[]},m.binding=function(t){throw new Error("process.binding is not supported")},m.cwd=function(){return"/"},m.chdir=function(t){throw new Error("process.chdir is not supported")},m.umask=function(){return 0}},{}],4:[function(t,e,i){(function(i){for(var n=t("performance-now"),o="undefined"==typeof window?i:window,s=["moz","webkit"],r="AnimationFrame",a=o["request"+r],l=o["cancel"+r]||o["cancelRequest"+r],h=0;!a&&h<s.length;h++)a=o[s[h]+"Request"+r],l=o[s[h]+"Cancel"+r]||o[s[h]+"CancelRequest"+r];if(!a||!l){var u=0,c=0,d=[];a=function(t){if(0===d.length){var e=n(),i=Math.max(0,1e3/60-(e-u));u=i+e,setTimeout(function(){var t=d.slice(0);d.length=0;for(var e=0;e<t.length;e++)if(!t[e].cancelled)try{t[e].callback(u)}catch(t){setTimeout(function(){throw t},0)}},Math.round(i))}return d.push({handle:++c,callback:t,cancelled:!1}),c},l=function(t){for(var e=0;e<d.length;e++)d[e].handle===t&&(d[e].cancelled=!0)}}e.exports=function(t){return a.call(o,t)},e.exports.cancel=function(){l.apply(o,arguments)},e.exports.polyfill=function(){o.requestAnimationFrame=a,o.cancelAnimationFrame=l}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"performance-now":2}],5:[function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=t("raf"),r=t("object-assign"),a={propertyCache:{},vendors:[null,["-webkit-","webkit"],["-moz-","Moz"],["-o-","O"],["-ms-","ms"]],clamp:function(t,e,i){return e<i?t<e?e:t>i?i:t:t<i?i:t>e?e:t},data:function(t,e){return a.deserialize(t.getAttribute("data-"+e))},deserialize:function(t){return"true"===t||"false"!==t&&("null"===t?null:!isNaN(parseFloat(t))&&isFinite(t)?parseFloat(t):t)},camelCase:function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},accelerate:function(t){a.css(t,"transform","translate3d(0,0,0) rotate(0.0001deg)"),a.css(t,"transform-style","preserve-3d"),a.css(t,"backface-visibility","hidden")},transformSupport:function(t){for(var e=document.createElement("div"),i=!1,n=null,o=!1,s=null,r=null,l=0,h=a.vendors.length;l<h;l++)if(null!==a.vendors[l]?(s=a.vendors[l][0]+"transform",r=a.vendors[l][1]+"Transform"):(s="transform",r="transform"),void 0!==e.style[r]){i=!0;break}switch(t){case"2D":o=i;break;case"3D":if(i){var u=document.body||document.createElement("body"),c=document.documentElement,d=c.style.overflow,m=!1;document.body||(m=!0,c.style.overflow="hidden",c.appendChild(u),u.style.overflow="hidden",u.style.background=""),u.appendChild(e),e.style[r]="translate3d(1px,1px,1px)",o=void 0!==(n=window.getComputedStyle(e).getPropertyValue(s))&&n.length>0&&"none"!==n,c.style.overflow=d,u.removeChild(e),m&&(u.removeAttribute("style"),u.parentNode.removeChild(u))}}return o},css:function(t,e,i){var n=a.propertyCache[e];if(!n)for(var o=0,s=a.vendors.length;o<s;o++)if(n=null!==a.vendors[o]?a.camelCase(a.vendors[o][1]+"-"+e):e,void 0!==t.style[n]){a.propertyCache[e]=n;break}t.style[n]=i}},l={relativeInput:!1,clipRelativeInput:!1,inputElement:null,hoverOnly:!1,calibrationThreshold:100,calibrationDelay:500,supportDelay:500,calibrateX:!1,calibrateY:!0,invertX:!0,invertY:!0,limitX:!1,limitY:!1,scalarX:10,scalarY:10,frictionX:.1,frictionY:.1,originX:.5,originY:.5,pointerEvents:!1,precision:1,onReady:null,selector:null},h=function(){function t(e,i){n(this,t),this.element=e;var o={calibrateX:a.data(this.element,"calibrate-x"),calibrateY:a.data(this.element,"calibrate-y"),invertX:a.data(this.element,"invert-x"),invertY:a.data(this.element,"invert-y"),limitX:a.data(this.element,"limit-x"),limitY:a.data(this.element,"limit-y"),scalarX:a.data(this.element,"scalar-x"),scalarY:a.data(this.element,"scalar-y"),frictionX:a.data(this.element,"friction-x"),frictionY:a.data(this.element,"friction-y"),originX:a.data(this.element,"origin-x"),originY:a.data(this.element,"origin-y"),pointerEvents:a.data(this.element,"pointer-events"),precision:a.data(this.element,"precision"),relativeInput:a.data(this.element,"relative-input"),clipRelativeInput:a.data(this.element,"clip-relative-input"),hoverOnly:a.data(this.element,"hover-only"),inputElement:document.querySelector(a.data(this.element,"input-element")),selector:a.data(this.element,"selector")};for(var s in o)null===o[s]&&delete o[s];r(this,l,o,i),this.inputElement||(this.inputElement=this.element),this.calibrationTimer=null,this.calibrationFlag=!0,this.enabled=!1,this.depthsX=[],this.depthsY=[],this.raf=null,this.bounds=null,this.elementPositionX=0,this.elementPositionY=0,this.elementWidth=0,this.elementHeight=0,this.elementCenterX=0,this.elementCenterY=0,this.elementRangeX=0,this.elementRangeY=0,this.calibrationX=0,this.calibrationY=0,this.inputX=0,this.inputY=0,this.motionX=0,this.motionY=0,this.velocityX=0,this.velocityY=0,this.onMouseMove=this.onMouseMove.bind(this),this.onDeviceOrientation=this.onDeviceOrientation.bind(this),this.onDeviceMotion=this.onDeviceMotion.bind(this),this.onOrientationTimer=this.onOrientationTimer.bind(this),this.onMotionTimer=this.onMotionTimer.bind(this),this.onCalibrationTimer=this.onCalibrationTimer.bind(this),this.onAnimationFrame=this.onAnimationFrame.bind(this),this.onWindowResize=this.onWindowResize.bind(this),this.windowWidth=null,this.windowHeight=null,this.windowCenterX=null,this.windowCenterY=null,this.windowRadiusX=null,this.windowRadiusY=null,this.portrait=!1,this.desktop=!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i),this.motionSupport=!!window.DeviceMotionEvent&&!this.desktop,this.orientationSupport=!!window.DeviceOrientationEvent&&!this.desktop,this.orientationStatus=0,this.motionStatus=0,this.initialise()}return o(t,[{key:"initialise",value:function(){void 0===this.transform2DSupport&&(this.transform2DSupport=a.transformSupport("2D"),this.transform3DSupport=a.transformSupport("3D")),this.transform3DSupport&&a.accelerate(this.element),"static"===window.getComputedStyle(this.element).getPropertyValue("position")&&(this.element.style.position="relative"),this.pointerEvents||(this.element.style.pointerEvents="none"),this.updateLayers(),this.updateDimensions(),this.enable(),this.queueCalibration(this.calibrationDelay)}},{key:"doReadyCallback",value:function(){this.onReady&&this.onReady()}},{key:"updateLayers",value:function(){this.selector?this.layers=this.element.querySelectorAll(this.selector):this.layers=this.element.children,this.layers.length||console.warn("ParallaxJS: Your scene does not have any layers."),this.depthsX=[],this.depthsY=[];for(var t=0;t<this.layers.length;t++){var e=this.layers[t];this.transform3DSupport&&a.accelerate(e),e.style.position=t?"absolute":"relative",e.style.display="block",e.style.left=0,e.style.top=0;var i=a.data(e,"depth")||0;this.depthsX.push(a.data(e,"depth-x")||i),this.depthsY.push(a.data(e,"depth-y")||i)}}},{key:"updateDimensions",value:function(){this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight,this.windowCenterX=this.windowWidth*this.originX,this.windowCenterY=this.windowHeight*this.originY,this.windowRadiusX=Math.max(this.windowCenterX,this.windowWidth-this.windowCenterX),this.windowRadiusY=Math.max(this.windowCenterY,this.windowHeight-this.windowCenterY)}},{key:"updateBounds",value:function(){this.bounds=this.inputElement.getBoundingClientRect(),this.elementPositionX=this.bounds.left,this.elementPositionY=this.bounds.top,this.elementWidth=this.bounds.width,this.elementHeight=this.bounds.height,this.elementCenterX=this.elementWidth*this.originX,this.elementCenterY=this.elementHeight*this.originY,this.elementRangeX=Math.max(this.elementCenterX,this.elementWidth-this.elementCenterX),this.elementRangeY=Math.max(this.elementCenterY,this.elementHeight-this.elementCenterY)}},{key:"queueCalibration",value:function(t){clearTimeout(this.calibrationTimer),this.calibrationTimer=setTimeout(this.onCalibrationTimer,t)}},{key:"enable",value:function(){this.enabled||(this.enabled=!0,this.orientationSupport?(this.portrait=!1,window.addEventListener("deviceorientation",this.onDeviceOrientation),this.detectionTimer=setTimeout(this.onOrientationTimer,this.supportDelay)):this.motionSupport?(this.portrait=!1,window.addEventListener("devicemotion",this.onDeviceMotion),this.detectionTimer=setTimeout(this.onMotionTimer,this.supportDelay)):(this.calibrationX=0,this.calibrationY=0,this.portrait=!1,window.addEventListener("mousemove",this.onMouseMove),this.doReadyCallback()),window.addEventListener("resize",this.onWindowResize),this.raf=s(this.onAnimationFrame))}},{key:"disable",value:function(){this.enabled&&(this.enabled=!1,this.orientationSupport?window.removeEventListener("deviceorientation",this.onDeviceOrientation):this.motionSupport?window.removeEventListener("devicemotion",this.onDeviceMotion):window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("resize",this.onWindowResize),s.cancel(this.raf))}},{key:"calibrate",value:function(t,e){this.calibrateX=void 0===t?this.calibrateX:t,this.calibrateY=void 0===e?this.calibrateY:e}},{key:"invert",value:function(t,e){this.invertX=void 0===t?this.invertX:t,this.invertY=void 0===e?this.invertY:e}},{key:"friction",value:function(t,e){this.frictionX=void 0===t?this.frictionX:t,this.frictionY=void 0===e?this.frictionY:e}},{key:"scalar",value:function(t,e){this.scalarX=void 0===t?this.scalarX:t,this.scalarY=void 0===e?this.scalarY:e}},{key:"limit",value:function(t,e){this.limitX=void 0===t?this.limitX:t,this.limitY=void 0===e?this.limitY:e}},{key:"origin",value:function(t,e){this.originX=void 0===t?this.originX:t,this.originY=void 0===e?this.originY:e}},{key:"setInputElement",value:function(t){this.inputElement=t,this.updateDimensions()}},{key:"setPosition",value:function(t,e,i){e=e.toFixed(this.precision)+"px",i=i.toFixed(this.precision)+"px",this.transform3DSupport?a.css(t,"transform","translate3d("+e+","+i+",0)"):this.transform2DSupport?a.css(t,"transform","translate("+e+","+i+")"):(t.style.left=e,t.style.top=i)}},{key:"onOrientationTimer",value:function(){this.orientationSupport&&0===this.orientationStatus?(this.disable(),this.orientationSupport=!1,this.enable()):this.doReadyCallback()}},{key:"onMotionTimer",value:function(){this.motionSupport&&0===this.motionStatus?(this.disable(),this.motionSupport=!1,this.enable()):this.doReadyCallback()}},{key:"onCalibrationTimer",value:function(){this.calibrationFlag=!0}},{key:"onWindowResize",value:function(){this.updateDimensions()}},{key:"onAnimationFrame",value:function(){this.updateBounds();var t=this.inputX-this.calibrationX,e=this.inputY-this.calibrationY;(Math.abs(t)>this.calibrationThreshold||Math.abs(e)>this.calibrationThreshold)&&this.queueCalibration(0),this.portrait?(this.motionX=this.calibrateX?e:this.inputY,this.motionY=this.calibrateY?t:this.inputX):(this.motionX=this.calibrateX?t:this.inputX,this.motionY=this.calibrateY?e:this.inputY),this.motionX*=this.elementWidth*(this.scalarX/100),this.motionY*=this.elementHeight*(this.scalarY/100),isNaN(parseFloat(this.limitX))||(this.motionX=a.clamp(this.motionX,-this.limitX,this.limitX)),isNaN(parseFloat(this.limitY))||(this.motionY=a.clamp(this.motionY,-this.limitY,this.limitY)),this.velocityX+=(this.motionX-this.velocityX)*this.frictionX,this.velocityY+=(this.motionY-this.velocityY)*this.frictionY;for(var i=0;i<this.layers.length;i++){var n=this.layers[i],o=this.depthsX[i],r=this.depthsY[i],l=this.velocityX*(o*(this.invertX?-1:1)),h=this.velocityY*(r*(this.invertY?-1:1));this.setPosition(n,l,h)}this.raf=s(this.onAnimationFrame)}},{key:"rotate",value:function(t,e){var i=(t||0)/30,n=(e||0)/30,o=this.windowHeight>this.windowWidth;this.portrait!==o&&(this.portrait=o,this.calibrationFlag=!0),this.calibrationFlag&&(this.calibrationFlag=!1,this.calibrationX=i,this.calibrationY=n),this.inputX=i,this.inputY=n}},{key:"onDeviceOrientation",value:function(t){var e=t.beta,i=t.gamma;null!==e&&null!==i&&(this.orientationStatus=1,this.rotate(e,i))}},{key:"onDeviceMotion",value:function(t){var e=t.rotationRate.beta,i=t.rotationRate.gamma;null!==e&&null!==i&&(this.motionStatus=1,this.rotate(e,i))}},{key:"onMouseMove",value:function(t){var e=t.clientX,i=t.clientY;if(this.hoverOnly&&(e<this.elementPositionX||e>this.elementPositionX+this.elementWidth||i<this.elementPositionY||i>this.elementPositionY+this.elementHeight))return this.inputX=0,void(this.inputY=0);this.relativeInput?(this.clipRelativeInput&&(e=Math.max(e,this.elementPositionX),e=Math.min(e,this.elementPositionX+this.elementWidth),i=Math.max(i,this.elementPositionY),i=Math.min(i,this.elementPositionY+this.elementHeight)),this.elementRangeX&&this.elementRangeY&&(this.inputX=(e-this.elementPositionX-this.elementCenterX)/this.elementRangeX,this.inputY=(i-this.elementPositionY-this.elementCenterY)/this.elementRangeY)):this.windowRadiusX&&this.windowRadiusY&&(this.inputX=(e-this.windowCenterX)/this.windowRadiusX,this.inputY=(i-this.windowCenterY)/this.windowRadiusY)}},{key:"destroy",value:function(){this.disable(),clearTimeout(this.calibrationTimer),clearTimeout(this.detectionTimer),this.element.removeAttribute("style");for(var t=0;t<this.layers.length;t++)this.layers[t].removeAttribute("style");delete this.element,delete this.layers}},{key:"version",value:function(){return"3.1.0"}}]),t}();e.exports=h},{"object-assign":1,raf:4}]},{},[5])(5)});
//# sourceMappingURL=parallax.min.js.map





