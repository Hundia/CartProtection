"use strict";
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
;
!function(e, t) {
    "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
        : t(e)
}("undefined" != typeof window ? window : void 0, function(e, t) {
    function n(e, t) {
        t = t || te;
        var n = t.createElement("script");
        n.text = e,
            t.head.appendChild(n).parentNode.removeChild(n)
    }
    function r(e) {
        var t = !!e && "length"in e && e.length
            , n = he.type(e);
        return "function" !== n && !he.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    function i(e, t, n) {
        return he.isFunction(t) ? he.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        }) : t.nodeType ? he.grep(e, function(e) {
            return e === t !== n
        }) : "string" != typeof t ? he.grep(e, function(e) {
            return ae.call(t, e) > -1 !== n
        }) : Ee.test(t) ? he.filter(t, e, n) : (t = he.filter(t, e),
            he.grep(e, function(e) {
                return ae.call(t, e) > -1 !== n && 1 === e.nodeType
            }))
    }
    function o(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; )
            ;
        return e
    }
    function a(e) {
        var t = {};
        return he.each(e.match(je) || [], function(e, n) {
            t[n] = !0
        }),
            t
    }
    function s(e) {
        return e
    }
    function u(e) {
        throw e
    }
    function l(e, t, n) {
        var r;
        try {
            e && he.isFunction(r = e.promise) ? r.call(e).done(t).fail(n) : e && he.isFunction(r = e.then) ? r.call(e, t, n) : t.call(void 0, e)
        } catch (e) {
            n.call(void 0, e)
        }
    }
    function c() {
        te.removeEventListener("DOMContentLoaded", c),
            e.removeEventListener("load", c),
            he.ready()
    }
    function f() {
        this.expando = he.expando + f.uid++
    }
    function d(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Pe.test(e) ? JSON.parse(e) : e)
    }
    function p(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(Re, "-$&").toLowerCase(),
                "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = d(n)
                } catch (e) {}
                Oe.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    function h(e, t, n, r) {
        var i, o = 1, a = 20, s = r ? function() {
            return r.cur()
        }
            : function() {
                return he.css(e, t, "")
            }
            , u = s(), l = n && n[3] || (he.cssNumber[t] ? "" : "px"), c = (he.cssNumber[t] || "px" !== l && +u) && Ie.exec(he.css(e, t));
        if (c && c[3] !== l) {
            l = l || c[3],
                n = n || [],
                c = +u || 1;
            do {
                o = o || ".5",
                    c /= o,
                    he.style(e, t, c + l)
            } while (o !== (o = s() / u) && 1 !== o && --a)
        }
        return n && (c = +c || +u || 0,
            i = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
        r && (r.unit = l,
            r.start = c,
            r.end = i)),
            i
    }
    function g(e) {
        var t, n = e.ownerDocument, r = e.nodeName, i = Be[r];
        return i || (t = n.body.appendChild(n.createElement(r)),
                i = he.css(t, "display"),
                t.parentNode.removeChild(t),
            "none" === i && (i = "block"),
                Be[r] = i,
                i)
    }
    function v(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; o < a; o++)
            r = e[o],
            r.style && (n = r.style.display,
                t ? ("none" === n && (i[o] = Fe.get(r, "display") || null,
                i[o] || (r.style.display = "")),
                "" === r.style.display && $e(r) && (i[o] = g(r))) : "none" !== n && (i[o] = "none",
                        Fe.set(r, "display", n)));
        for (o = 0; o < a; o++)
            null != i[o] && (e[o].style.display = i[o]);
        return e
    }
    function m(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
            void 0 === t || t && he.nodeName(e, t) ? he.merge([e], n) : n
    }
    function y(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            Fe.set(e[n], "globalEval", !t || Fe.get(t[n], "globalEval"))
    }
    function x(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), d = [], p = 0, h = e.length; p < h; p++)
            if ((o = e[p]) || 0 === o)
                if ("object" === he.type(o))
                    he.merge(d, o.nodeType ? [o] : o);
                else if (Ge.test(o)) {
                    for (a = a || f.appendChild(t.createElement("div")),
                             s = (Xe.exec(o) || ["", ""])[1].toLowerCase(),
                             u = Ve[s] || Ve._default,
                             a.innerHTML = u[1] + he.htmlPrefilter(o) + u[2],
                             c = u[0]; c--; )
                        a = a.lastChild;
                    he.merge(d, a.childNodes),
                        a = f.firstChild,
                        a.textContent = ""
                } else
                    d.push(t.createTextNode(o));
        for (f.textContent = "",
                 p = 0; o = d[p++]; )
            if (r && he.inArray(o, r) > -1)
                i && i.push(o);
            else if (l = he.contains(o.ownerDocument, o),
                    a = m(f.appendChild(o), "script"),
                l && y(a),
                    n)
                for (c = 0; o = a[c++]; )
                    Ue.test(o.type || "") && n.push(o);
        return f
    }
    function b() {
        return !0
    }
    function w() {
        return !1
    }
    function T() {
        try {
            return te.activeElement
        } catch (e) {}
    }
    function C(e, t, n, r, i, o) {
        var a, s;
        if ("object" == (void 0 === t ? "undefined" : _typeof(t))) {
            "string" != typeof n && (r = r || n,
                n = void 0);
            for (s in t)
                C(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n,
                r = n = void 0) : null == i && ("string" == typeof n ? (i = r,
                    r = void 0) : (i = r,
                    r = n,
                    n = void 0)),
            !1 === i)
            i = w;
        else if (!i)
            return e;
        return 1 === o && (a = i,
            i = function(e) {
                return he().off(e),
                    a.apply(this, arguments)
            }
            ,
            i.guid = a.guid || (a.guid = he.guid++)),
            e.each(function() {
                he.event.add(this, t, i, r, n)
            })
    }
    function E(e, t) {
        return he.nodeName(e, "table") && he.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e : e
    }
    function k(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
            e
    }
    function S(e) {
        var t = nt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"),
            e
    }
    function N(e, t) {
        var n, r, i, o, a, s, u, l;
        if (1 === t.nodeType) {
            if (Fe.hasData(e) && (o = Fe.access(e),
                    a = Fe.set(t, o),
                    l = o.events)) {
                delete a.handle,
                    a.events = {};
                for (i in l)
                    for (n = 0,
                             r = l[i].length; n < r; n++)
                        he.event.add(t, i, l[i][n])
            }
            Oe.hasData(e) && (s = Oe.access(e),
                u = he.extend({}, s),
                Oe.set(t, u))
        }
    }
    function D(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && ze.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }
    function j(e, t, r, i) {
        t = ie.apply([], t);
        var o, a, s, u, l, c, f = 0, d = e.length, p = d - 1, h = t[0], g = he.isFunction(h);
        if (g || d > 1 && "string" == typeof h && !de.checkClone && tt.test(h))
            return e.each(function(n) {
                var o = e.eq(n);
                g && (t[0] = h.call(this, n, o.html())),
                    j(o, t, r, i)
            });
        if (d && (o = x(t, e[0].ownerDocument, !1, e, i),
                a = o.firstChild,
            1 === o.childNodes.length && (o = a),
            a || i)) {
            for (s = he.map(m(o, "script"), k),
                     u = s.length; f < d; f++)
                l = o,
                f !== p && (l = he.clone(l, !0, !0),
                u && he.merge(s, m(l, "script"))),
                    r.call(e[f], l, f);
            if (u)
                for (c = s[s.length - 1].ownerDocument,
                         he.map(s, S),
                         f = 0; f < u; f++)
                    l = s[f],
                    Ue.test(l.type || "") && !Fe.access(l, "globalEval") && he.contains(c, l) && (l.src ? he._evalUrl && he._evalUrl(l.src) : n(l.textContent.replace(rt, ""), c))
        }
        return e
    }
    function A(e, t, n) {
        for (var r, i = t ? he.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
            n || 1 !== r.nodeType || he.cleanData(m(r)),
            r.parentNode && (n && he.contains(r.ownerDocument, r) && y(m(r, "script")),
                r.parentNode.removeChild(r));
        return e
    }
    function q(e, t, n) {
        var r, i, o, a, s = e.style;
        return n = n || at(e),
        n && (a = n.getPropertyValue(t) || n[t],
        "" !== a || he.contains(e.ownerDocument, e) || (a = he.style(e, t)),
        !de.pixelMarginRight() && ot.test(a) && it.test(t) && (r = s.width,
            i = s.minWidth,
            o = s.maxWidth,
            s.minWidth = s.maxWidth = s.width = a,
            a = n.width,
            s.width = r,
            s.minWidth = i,
            s.maxWidth = o)),
            void 0 !== a ? a + "" : a
    }
    function L(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }
    function H(e) {
        if (e in ft)
            return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = ct.length; n--; )
            if ((e = ct[n] + t)in ft)
                return e
    }
    function F(e, t, n) {
        var r = Ie.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }
    function O(e, t, n, r, i) {
        var o, a = 0;
        for (o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0; o < 4; o += 2)
            "margin" === n && (a += he.css(e, n + We[o], !0, i)),
                r ? ("content" === n && (a -= he.css(e, "padding" + We[o], !0, i)),
                "margin" !== n && (a -= he.css(e, "border" + We[o] + "Width", !0, i))) : (a += he.css(e, "padding" + We[o], !0, i),
                "padding" !== n && (a += he.css(e, "border" + We[o] + "Width", !0, i)));
        return a
    }
    function P(e, t, n) {
        var r, i = !0, o = at(e), a = "border-box" === he.css(e, "boxSizing", !1, o);
        if (e.getClientRects().length && (r = e.getBoundingClientRect()[t]),
            r <= 0 || null == r) {
            if (r = q(e, t, o),
                (r < 0 || null == r) && (r = e.style[t]),
                    ot.test(r))
                return r;
            i = a && (de.boxSizingReliable() || r === e.style[t]),
                r = parseFloat(r) || 0
        }
        return r + O(e, t, n || (a ? "border" : "content"), i, o) + "px"
    }
    function R(e, t, n, r, i) {
        return new R.prototype.init(e,t,n,r,i)
    }
    function M() {
        pt && (e.requestAnimationFrame(M),
            he.fx.tick())
    }
    function I() {
        return e.setTimeout(function() {
            dt = void 0
        }),
            dt = he.now()
    }
    function W(e, t) {
        var n, r = 0, i = {
            height: e
        };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
            n = We[r],
                i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e),
            i
    }
    function $(e, t, n) {
        for (var r, i = (z.tweeners[t] || []).concat(z.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e))
                return r
    }
    function _(e, t, n) {
        var r, i, o, a, s, u, l, c, f = "width"in t || "height"in t, d = this, p = {}, h = e.style, g = e.nodeType && $e(e), m = Fe.get(e, "fxshow");
        n.queue || (a = he._queueHooks(e, "fx"),
        null == a.unqueued && (a.unqueued = 0,
                s = a.empty.fire,
                a.empty.fire = function() {
                    a.unqueued || s()
                }
        ),
            a.unqueued++,
            d.always(function() {
                d.always(function() {
                    a.unqueued--,
                    he.queue(e, "fx").length || a.empty.fire()
                })
            }));
        for (r in t)
            if (i = t[r],
                    ht.test(i)) {
                if (delete t[r],
                        o = o || "toggle" === i,
                    i === (g ? "hide" : "show")) {
                    if ("show" !== i || !m || void 0 === m[r])
                        continue;
                    g = !0
                }
                p[r] = m && m[r] || he.style(e, r)
            }
        if ((u = !he.isEmptyObject(t)) || !he.isEmptyObject(p)) {
            f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
                l = m && m.display,
            null == l && (l = Fe.get(e, "display")),
                c = he.css(e, "display"),
            "none" === c && (l ? c = l : (v([e], !0),
                l = e.style.display || l,
                c = he.css(e, "display"),
                v([e]))),
            ("inline" === c || "inline-block" === c && null != l) && "none" === he.css(e, "float") && (u || (d.done(function() {
                h.display = l
            }),
            null == l && (c = h.display,
                l = "none" === c ? "" : c)),
                h.display = "inline-block")),
            n.overflow && (h.overflow = "hidden",
                d.always(function() {
                    h.overflow = n.overflow[0],
                        h.overflowX = n.overflow[1],
                        h.overflowY = n.overflow[2]
                })),
                u = !1;
            for (r in p)
                u || (m ? "hidden"in m && (g = m.hidden) : m = Fe.access(e, "fxshow", {
                    display: l
                }),
                o && (m.hidden = !g),
                g && v([e], !0),
                    d.done(function() {
                        g || v([e]),
                            Fe.remove(e, "fxshow");
                        for (r in p)
                            he.style(e, r, p[r])
                    })),
                    u = $(g ? m[r] : 0, r, d),
                r in m || (m[r] = u.start,
                g && (u.end = u.start,
                    u.start = 0))
        }
    }
    function B(e, t) {
        var n, r, i, o, a;
        for (n in e)
            if (r = he.camelCase(n),
                    i = t[r],
                    o = e[n],
                he.isArray(o) && (i = o[1],
                    o = e[n] = o[0]),
                n !== r && (e[r] = o,
                    delete e[n]),
                (a = he.cssHooks[r]) && "expand"in a) {
                o = a.expand(o),
                    delete e[r];
                for (n in o)
                    n in e || (e[n] = o[n],
                        t[n] = i)
            } else
                t[r] = i
    }
    function z(e, t, n) {
        var r, i, o = 0, a = z.prefilters.length, s = he.Deferred().always(function() {
            delete u.elem
        }), u = function() {
            if (i)
                return !1;
            for (var t = dt || I(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, a = 0, u = l.tweens.length; a < u; a++)
                l.tweens[a].run(o);
            return s.notifyWith(e, [l, o, n]),
                o < 1 && u ? n : (s.resolveWith(e, [l]),
                    !1)
        }, l = s.promise({
            elem: e,
            props: he.extend({}, t),
            opts: he.extend(!0, {
                specialEasing: {},
                easing: he.easing._default
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: dt || I(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var r = he.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(r),
                    r
            },
            stop: function(t) {
                var n = 0
                    , r = t ? l.tweens.length : 0;
                if (i)
                    return this;
                for (i = !0; n < r; n++)
                    l.tweens[n].run(1);
                return t ? (s.notifyWith(e, [l, 1, 0]),
                    s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]),
                    this
            }
        }), c = l.props;
        for (B(c, l.opts.specialEasing); o < a; o++)
            if (r = z.prefilters[o].call(l, e, c, l.opts))
                return he.isFunction(r.stop) && (he._queueHooks(l.elem, l.opts.queue).stop = he.proxy(r.stop, r)),
                    r;
        return he.map(c, $, l),
        he.isFunction(l.opts.start) && l.opts.start.call(e, l),
            he.fx.timer(he.extend(u, {
                elem: e,
                anim: l,
                queue: l.opts.queue
            })),
            l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }
    function X(e) {
        return (e.match(je) || []).join(" ")
    }
    function U(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function V(e, t, n, r) {
        var i;
        if (he.isArray(t))
            he.each(t, function(t, i) {
                n || kt.test(e) ? r(e, i) : V(e + "[" + ("object" == (void 0 === i ? "undefined" : _typeof(i)) && null != i ? t : "") + "]", i, n, r)
            });
        else if (n || "object" !== he.type(t))
            r(e, t);
        else
            for (i in t)
                V(e + "[" + i + "]", t[i], n, r)
    }
    function G(e) {
        return function(t, n) {
            "string" != typeof t && (n = t,
                t = "*");
            var r, i = 0, o = t.toLowerCase().match(je) || [];
            if (he.isFunction(n))
                for (; r = o[i++]; )
                    "+" === r[0] ? (r = r.slice(1) || "*",
                        (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }
    function Y(e, t, n, r) {
        function i(s) {
            var u;
            return o[s] = !0,
                he.each(e[s] || [], function(e, s) {
                    var l = s(t, n, r);
                    return "string" != typeof l || a || o[l] ? a ? !(u = l) : void 0 : (t.dataTypes.unshift(l),
                        i(l),
                        !1)
                }),
                u
        }
        var o = {}
            , a = e === Rt;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }
    function Q(e, t) {
        var n, r, i = he.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && he.extend(!0, e, r),
            e
    }
    function J(e, t, n) {
        for (var r, i, o, a, s = e.contents, u = e.dataTypes; "*" === u[0]; )
            u.shift(),
            void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (i in s)
                if (s[i] && s[i].test(r)) {
                    u.unshift(i);
                    break
                }
        if (u[0]in n)
            o = u[0];
        else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break
                }
                a || (a = i)
            }
            o = o || a
        }
        if (o)
            return o !== u[0] && u.unshift(o),
                n[o]
    }
    function K(e, t, n, r) {
        var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters)
                l[a.toLowerCase()] = e.converters[a];
        for (o = c.shift(); o; )
            if (e.responseFields[o] && (n[e.responseFields[o]] = t),
                !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                    u = o,
                    o = c.shift())
                if ("*" === o)
                    o = u;
                else if ("*" !== u && u !== o) {
                    if (!(a = l[u + " " + o] || l["* " + o]))
                        for (i in l)
                            if (s = i.split(" "),
                                s[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0],
                                        c.unshift(s[1]));
                                break
                            }
                    if (!0 !== a)
                        if (a && e.throws)
                            t = a(t);
                        else
                            try {
                                t = a(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: a ? e : "No conversion from " + u + " to " + o
                                }
                            }
                }
        return {
            state: "success",
            data: t
        }
    }
    function Z(e) {
        return he.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var ee = []
        , te = e.document
        , ne = Object.getPrototypeOf
        , re = ee.slice
        , ie = ee.concat
        , oe = ee.push
        , ae = ee.indexOf
        , se = {}
        , ue = se.toString
        , le = se.hasOwnProperty
        , ce = le.toString
        , fe = ce.call(Object)
        , de = {}
        , pe = "3.1.1"
        , he = function e(t, n) {
        return new e.fn.init(t,n)
    }
        , ge = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
        , ve = /^-ms-/
        , me = /-([a-z])/g
        , ye = function(e, t) {
        return t.toUpperCase()
    };
    he.fn = he.prototype = {
        jquery: pe,
        constructor: he,
        length: 0,
        toArray: function() {
            return re.call(this)
        },
        get: function(e) {
            return null == e ? re.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = he.merge(this.constructor(), e);
            return t.prevObject = this,
                t
        },
        each: function(e) {
            return he.each(this, e)
        },
        map: function(e) {
            return this.pushStack(he.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(re.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length
                , n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: oe,
        sort: ee.sort,
        splice: ee.splice
    },
        he.extend = he.fn.extend = function() {
            var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
            for ("boolean" == typeof a && (l = a,
                a = arguments[s] || {},
                s++),
                 "object" == (void 0 === a ? "undefined" : _typeof(a)) || he.isFunction(a) || (a = {}),
                 s === u && (a = this,
                     s--); s < u; s++)
                if (null != (e = arguments[s]))
                    for (t in e)
                        n = a[t],
                            r = e[t],
                        a !== r && (l && r && (he.isPlainObject(r) || (i = he.isArray(r))) ? (i ? (i = !1,
                            o = n && he.isArray(n) ? n : []) : o = n && he.isPlainObject(n) ? n : {},
                            a[t] = he.extend(l, o, r)) : void 0 !== r && (a[t] = r));
            return a
        }
        ,
        he.extend({
            expando: "jQuery" + (pe + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isFunction: function(e) {
                return "function" === he.type(e)
            },
            isArray: Array.isArray,
            isWindow: function(e) {
                return null != e && e === e.window
            },
            isNumeric: function(e) {
                var t = he.type(e);
                return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
            },
            isPlainObject: function(e) {
                var t, n;
                return !(!e || "[object Object]" !== ue.call(e) || (t = ne(e)) && ("function" != typeof (n = le.call(t, "constructor") && t.constructor) || ce.call(n) !== fe))
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e)
                    return !1;
                return !0
            },
            type: function(e) {
                return null == e ? e + "" : "object" == (void 0 === e ? "undefined" : _typeof(e)) || "function" == typeof e ? se[ue.call(e)] || "object" : void 0 === e ? "undefined" : _typeof(e)
            },
            globalEval: function(e) {
                n(e)
            },
            camelCase: function(e) {
                return e.replace(ve, "ms-").replace(me, ye)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, t) {
                var n, i = 0;
                if (r(e))
                    for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++)
                        ;
                else
                    for (i in e)
                        if (!1 === t.call(e[i], i, e[i]))
                            break;
                return e
            },
            trim: function(e) {
                return null == e ? "" : (e + "").replace(ge, "")
            },
            makeArray: function(e, t) {
                var n = t || [];
                return null != e && (r(Object(e)) ? he.merge(n, "string" == typeof e ? [e] : e) : oe.call(n, e)),
                    n
            },
            inArray: function(e, t, n) {
                return null == t ? -1 : ae.call(t, e, n)
            },
            merge: function(e, t) {
                for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                    e[i++] = t[r];
                return e.length = i,
                    e
            },
            grep: function(e, t, n) {
                for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
                    !t(e[i], i) !== a && r.push(e[i]);
                return r
            },
            map: function(e, t, n) {
                var i, o, a = 0, s = [];
                if (r(e))
                    for (i = e.length; a < i; a++)
                        null != (o = t(e[a], a, n)) && s.push(o);
                else
                    for (a in e)
                        null != (o = t(e[a], a, n)) && s.push(o);
                return ie.apply([], s)
            },
            guid: 1,
            proxy: function(e, t) {
                var n, r, i;
                if ("string" == typeof t && (n = e[t],
                        t = e,
                        e = n),
                        he.isFunction(e))
                    return r = re.call(arguments, 2),
                        i = function() {
                            return e.apply(t || this, r.concat(re.call(arguments)))
                        }
                        ,
                        i.guid = e.guid = e.guid || he.guid++,
                        i
            },
            now: Date.now,
            support: de
        }),
    "function" == typeof Symbol && (he.fn[Symbol.iterator] = ee[Symbol.iterator]),
        he.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            se["[object " + t + "]"] = t.toLowerCase()
        });
    var xe = function(e) {
        function t(e, t, n, r) {
            var i, o, a, s, u, c, d, p = t && t.ownerDocument, h = t ? t.nodeType : 9;
            if (n = n || [],
                "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h)
                return n;
            if (!r && ((t ? t.ownerDocument || t : I) !== q && A(t),
                    t = t || q,
                    H)) {
                if (11 !== h && (u = ge.exec(e)))
                    if (i = u[1]) {
                        if (9 === h) {
                            if (!(a = t.getElementById(i)))
                                return n;
                            if (a.id === i)
                                return n.push(a),
                                    n
                        } else if (p && (a = p.getElementById(i)) && R(t, a) && a.id === i)
                            return n.push(a),
                                n
                    } else {
                        if (u[2])
                            return Q.apply(n, t.getElementsByTagName(e)),
                                n;
                        if ((i = u[3]) && b.getElementsByClassName && t.getElementsByClassName)
                            return Q.apply(n, t.getElementsByClassName(i)),
                                n
                    }
                if (b.qsa && !z[e + " "] && (!F || !F.test(e))) {
                    if (1 !== h)
                        p = t,
                            d = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(xe, be) : t.setAttribute("id", s = M),
                                 c = E(e),
                                 o = c.length; o--; )
                            c[o] = "#" + s + " " + f(c[o]);
                        d = c.join(","),
                            p = ve.test(e) && l(t.parentNode) || t
                    }
                    if (d)
                        try {
                            return Q.apply(n, p.querySelectorAll(d)),
                                n
                        } catch (e) {} finally {
                            s === M && t.removeAttribute("id")
                        }
                }
            }
            return S(e.replace(oe, "$1"), t, n, r)
        }
        function n() {
            function e(n, r) {
                return t.push(n + " ") > w.cacheLength && delete e[t.shift()],
                    e[n + " "] = r
            }
            var t = [];
            return e
        }
        function r(e) {
            return e[M] = !0,
                e
        }
        function i(e) {
            var t = q.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                    t = null
            }
        }
        function o(e, t) {
            for (var n = e.split("|"), r = n.length; r--; )
                w.attrHandle[n[r]] = t
        }
        function a(e, t) {
            var n = t && e
                , r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r)
                return r;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function s(e) {
            return function(t) {
                return "form"in t ? t.parentNode && !1 === t.disabled ? "label"in t ? "label"in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Te(t) === e : t.disabled === e : "label"in t && t.disabled === e
            }
        }
        function u(e) {
            return r(function(t) {
                return t = +t,
                    r(function(n, r) {
                        for (var i, o = e([], n.length, t), a = o.length; a--; )
                            n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                    })
            })
        }
        function l(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        function c() {}
        function f(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++)
                r += e[t].value;
            return r
        }
        function d(e, t, n) {
            var r = t.dir
                , i = t.next
                , o = i || r
                , a = n && "parentNode" === o
                , s = $++;
            return t.first ? function(t, n, i) {
                for (; t = t[r]; )
                    if (1 === t.nodeType || a)
                        return e(t, n, i);
                return !1
            }
                : function(t, n, u) {
                    var l, c, f, d = [W, s];
                    if (u) {
                        for (; t = t[r]; )
                            if ((1 === t.nodeType || a) && e(t, n, u))
                                return !0
                    } else
                        for (; t = t[r]; )
                            if (1 === t.nodeType || a)
                                if (f = t[M] || (t[M] = {}),
                                        c = f[t.uniqueID] || (f[t.uniqueID] = {}),
                                    i && i === t.nodeName.toLowerCase())
                                    t = t[r] || t;
                                else {
                                    if ((l = c[o]) && l[0] === W && l[1] === s)
                                        return d[2] = l[2];
                                    if (c[o] = d,
                                            d[2] = e(t, n, u))
                                        return !0
                                }
                    return !1
                }
        }
        function p(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var i = e.length; i--; )
                    if (!e[i](t, n, r))
                        return !1;
                return !0
            }
                : e[0]
        }
        function h(e, n, r) {
            for (var i = 0, o = n.length; i < o; i++)
                t(e, n[i], r);
            return r
        }
        function g(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
                (o = e[s]) && (n && !n(o, r, i) || (a.push(o),
                l && t.push(s)));
            return a
        }
        function v(e, t, n, i, o, a) {
            return i && !i[M] && (i = v(i)),
            o && !o[M] && (o = v(o, a)),
                r(function(r, a, s, u) {
                    var l, c, f, d = [], p = [], v = a.length, m = r || h(t || "*", s.nodeType ? [s] : s, []), y = !e || !r && t ? m : g(m, d, e, s, u), x = n ? o || (r ? e : v || i) ? [] : a : y;
                    if (n && n(y, x, s, u),
                            i)
                        for (l = g(x, p),
                                 i(l, [], s, u),
                                 c = l.length; c--; )
                            (f = l[c]) && (x[p[c]] = !(y[p[c]] = f));
                    if (r) {
                        if (o || e) {
                            if (o) {
                                for (l = [],
                                         c = x.length; c--; )
                                    (f = x[c]) && l.push(y[c] = f);
                                o(null, x = [], l, u)
                            }
                            for (c = x.length; c--; )
                                (f = x[c]) && (l = o ? K(r, f) : d[c]) > -1 && (r[l] = !(a[l] = f))
                        }
                    } else
                        x = g(x === a ? x.splice(v, x.length) : x),
                            o ? o(null, a, x, u) : Q.apply(a, x)
                })
        }
        function m(e) {
            for (var t, n, r, i = e.length, o = w.relative[e[0].type], a = o || w.relative[" "], s = o ? 1 : 0, u = d(function(e) {
                return e === t
            }, a, !0), l = d(function(e) {
                return K(t, e) > -1
            }, a, !0), c = [function(e, n, r) {
                var i = !o && (r || n !== N) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
                return t = null,
                    i
            }
            ]; s < i; s++)
                if (n = w.relative[e[s].type])
                    c = [d(p(c), n)];
                else {
                    if (n = w.filter[e[s].type].apply(null, e[s].matches),
                            n[M]) {
                        for (r = ++s; r < i && !w.relative[e[r].type]; r++)
                            ;
                        return v(s > 1 && p(c), s > 1 && f(e.slice(0, s - 1).concat({
                                value: " " === e[s - 2].type ? "*" : ""
                            })).replace(oe, "$1"), n, s < r && m(e.slice(s, r)), r < i && m(e = e.slice(r)), r < i && f(e))
                    }
                    c.push(n)
                }
            return p(c)
        }
        function y(e, n) {
            var i = n.length > 0
                , o = e.length > 0
                , a = function(r, a, s, u, l) {
                var c, f, d, p = 0, h = "0", v = r && [], m = [], y = N, x = r || o && w.find.TAG("*", l), b = W += null == y ? 1 : Math.random() || .1, T = x.length;
                for (l && (N = a === q || a || l); h !== T && null != (c = x[h]); h++) {
                    if (o && c) {
                        for (f = 0,
                             a || c.ownerDocument === q || (A(c),
                                 s = !H); d = e[f++]; )
                            if (d(c, a || q, s)) {
                                u.push(c);
                                break
                            }
                        l && (W = b)
                    }
                    i && ((c = !d && c) && p--,
                    r && v.push(c))
                }
                if (p += h,
                    i && h !== p) {
                    for (f = 0; d = n[f++]; )
                        d(v, m, a, s);
                    if (r) {
                        if (p > 0)
                            for (; h--; )
                                v[h] || m[h] || (m[h] = G.call(u));
                        m = g(m)
                    }
                    Q.apply(u, m),
                    l && !r && m.length > 0 && p + n.length > 1 && t.uniqueSort(u)
                }
                return l && (W = b,
                    N = y),
                    v
            };
            return i ? r(a) : a
        }
        var x, b, w, T, C, E, k, S, N, D, j, A, q, L, H, F, O, P, R, M = "sizzle" + 1 * new Date, I = e.document, W = 0, $ = 0, _ = n(), B = n(), z = n(), X = function(e, t) {
            return e === t && (j = !0),
                0
        }, U = {}.hasOwnProperty, V = [], G = V.pop, Y = V.push, Q = V.push, J = V.slice, K = function(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ee = "[\\x20\\t\\r\\n\\f]", te = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]", re = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)", ie = new RegExp(ee + "+","g"), oe = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$","g"), ae = new RegExp("^" + ee + "*," + ee + "*"), se = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"), ue = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]","g"), le = new RegExp(re), ce = new RegExp("^" + te + "$"), fe = {
            ID: new RegExp("^#(" + te + ")"),
            CLASS: new RegExp("^\\.(" + te + ")"),
            TAG: new RegExp("^(" + te + "|[*])"),
            ATTR: new RegExp("^" + ne),
            PSEUDO: new RegExp("^" + re),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)","i"),
            bool: new RegExp("^(?:" + Z + ")$","i"),
            needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)","i")
        }, de = /^(?:input|select|textarea|button)$/i, pe = /^h\d$/i, he = /^[^{]+\{\s*\[native \w/, ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ve = /[+~]/, me = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)","ig"), ye = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        }, xe = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, be = function(e, t) {
            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }, we = function() {
            A()
        }, Te = d(function(e) {
            return !0 === e.disabled && ("form"in e || "label"in e)
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            Q.apply(V = J.call(I.childNodes), I.childNodes),
                V[I.childNodes.length].nodeType
        } catch (e) {
            Q = {
                apply: V.length ? function(e, t) {
                    Y.apply(e, J.call(t))
                }
                    : function(e, t) {
                        for (var n = e.length, r = 0; e[n++] = t[r++]; )
                            ;
                        e.length = n - 1
                    }
            }
        }
        b = t.support = {},
            C = t.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }
            ,
            A = t.setDocument = function(e) {
                var t, n, r = e ? e.ownerDocument || e : I;
                return r !== q && 9 === r.nodeType && r.documentElement ? (q = r,
                    L = q.documentElement,
                    H = !C(q),
                I !== q && (n = q.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", we, !1) : n.attachEvent && n.attachEvent("onunload", we)),
                    b.attributes = i(function(e) {
                        return e.className = "i",
                            !e.getAttribute("className")
                    }),
                    b.getElementsByTagName = i(function(e) {
                        return e.appendChild(q.createComment("")),
                            !e.getElementsByTagName("*").length
                    }),
                    b.getElementsByClassName = he.test(q.getElementsByClassName),
                    b.getById = i(function(e) {
                        return L.appendChild(e).id = M,
                        !q.getElementsByName || !q.getElementsByName(M).length
                    }),
                    b.getById ? (w.filter.ID = function(e) {
                            var t = e.replace(me, ye);
                            return function(e) {
                                return e.getAttribute("id") === t
                            }
                        }
                            ,
                            w.find.ID = function(e, t) {
                                if (void 0 !== t.getElementById && H) {
                                    var n = t.getElementById(e);
                                    return n ? [n] : []
                                }
                            }
                    ) : (w.filter.ID = function(e) {
                            var t = e.replace(me, ye);
                            return function(e) {
                                var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                return n && n.value === t
                            }
                        }
                            ,
                            w.find.ID = function(e, t) {
                                if (void 0 !== t.getElementById && H) {
                                    var n, r, i, o = t.getElementById(e);
                                    if (o) {
                                        if ((n = o.getAttributeNode("id")) && n.value === e)
                                            return [o];
                                        for (i = t.getElementsByName(e),
                                                 r = 0; o = i[r++]; )
                                            if ((n = o.getAttributeNode("id")) && n.value === e)
                                                return [o]
                                    }
                                    return []
                                }
                            }
                    ),
                    w.find.TAG = b.getElementsByTagName ? function(e, t) {
                        return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : b.qsa ? t.querySelectorAll(e) : void 0
                    }
                        : function(e, t) {
                            var n, r = [], i = 0, o = t.getElementsByTagName(e);
                            if ("*" === e) {
                                for (; n = o[i++]; )
                                    1 === n.nodeType && r.push(n);
                                return r
                            }
                            return o
                        }
                    ,
                    w.find.CLASS = b.getElementsByClassName && function(e, t) {
                            if (void 0 !== t.getElementsByClassName && H)
                                return t.getElementsByClassName(e)
                        }
                    ,
                    O = [],
                    F = [],
                (b.qsa = he.test(q.querySelectorAll)) && (i(function(e) {
                    L.appendChild(e).innerHTML = "<a id='" + M + "'></a><select id='" + M + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                    e.querySelectorAll("[msallowcapture^='']").length && F.push("[*^$]=" + ee + "*(?:''|\"\")"),
                    e.querySelectorAll("[selected]").length || F.push("\\[" + ee + "*(?:value|" + Z + ")"),
                    e.querySelectorAll("[id~=" + M + "-]").length || F.push("~="),
                    e.querySelectorAll(":checked").length || F.push(":checked"),
                    e.querySelectorAll("a#" + M + "+*").length || F.push(".#.+[+~]")
                }),
                    i(function(e) {
                        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var t = q.createElement("input");
                        t.setAttribute("type", "hidden"),
                            e.appendChild(t).setAttribute("name", "D"),
                        e.querySelectorAll("[name=d]").length && F.push("name" + ee + "*[*^$|!~]?="),
                        2 !== e.querySelectorAll(":enabled").length && F.push(":enabled", ":disabled"),
                            L.appendChild(e).disabled = !0,
                        2 !== e.querySelectorAll(":disabled").length && F.push(":enabled", ":disabled"),
                            e.querySelectorAll("*,:x"),
                            F.push(",.*:")
                    })),
                (b.matchesSelector = he.test(P = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && i(function(e) {
                    b.disconnectedMatch = P.call(e, "*"),
                        P.call(e, "[s!='']:x"),
                        O.push("!=", re)
                }),
                    F = F.length && new RegExp(F.join("|")),
                    O = O.length && new RegExp(O.join("|")),
                    t = he.test(L.compareDocumentPosition),
                    R = t || he.test(L.contains) ? function(e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e
                            , r = t && t.parentNode;
                        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                    }
                        : function(e, t) {
                            if (t)
                                for (; t = t.parentNode; )
                                    if (t === e)
                                        return !0;
                            return !1
                        }
                    ,
                    X = t ? function(e, t) {
                        if (e === t)
                            return j = !0,
                                0;
                        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1,
                                1 & n || !b.sortDetached && t.compareDocumentPosition(e) === n ? e === q || e.ownerDocument === I && R(I, e) ? -1 : t === q || t.ownerDocument === I && R(I, t) ? 1 : D ? K(D, e) - K(D, t) : 0 : 4 & n ? -1 : 1)
                    }
                        : function(e, t) {
                            if (e === t)
                                return j = !0,
                                    0;
                            var n, r = 0, i = e.parentNode, o = t.parentNode, s = [e], u = [t];
                            if (!i || !o)
                                return e === q ? -1 : t === q ? 1 : i ? -1 : o ? 1 : D ? K(D, e) - K(D, t) : 0;
                            if (i === o)
                                return a(e, t);
                            for (n = e; n = n.parentNode; )
                                s.unshift(n);
                            for (n = t; n = n.parentNode; )
                                u.unshift(n);
                            for (; s[r] === u[r]; )
                                r++;
                            return r ? a(s[r], u[r]) : s[r] === I ? -1 : u[r] === I ? 1 : 0
                        }
                    ,
                    q) : q
            }
            ,
            t.matches = function(e, n) {
                return t(e, null, null, n)
            }
            ,
            t.matchesSelector = function(e, n) {
                if ((e.ownerDocument || e) !== q && A(e),
                        n = n.replace(ue, "='$1']"),
                    b.matchesSelector && H && !z[n + " "] && (!O || !O.test(n)) && (!F || !F.test(n)))
                    try {
                        var r = P.call(e, n);
                        if (r || b.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                            return r
                    } catch (e) {}
                return t(n, q, null, [e]).length > 0
            }
            ,
            t.contains = function(e, t) {
                return (e.ownerDocument || e) !== q && A(e),
                    R(e, t)
            }
            ,
            t.attr = function(e, t) {
                (e.ownerDocument || e) !== q && A(e);
                var n = w.attrHandle[t.toLowerCase()]
                    , r = n && U.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !H) : void 0;
                return void 0 !== r ? r : b.attributes || !H ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }
            ,
            t.escape = function(e) {
                return (e + "").replace(xe, be)
            }
            ,
            t.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }
            ,
            t.uniqueSort = function(e) {
                var t, n = [], r = 0, i = 0;
                if (j = !b.detectDuplicates,
                        D = !b.sortStable && e.slice(0),
                        e.sort(X),
                        j) {
                    for (; t = e[i++]; )
                        t === e[i] && (r = n.push(i));
                    for (; r--; )
                        e.splice(n[r], 1)
                }
                return D = null,
                    e
            }
            ,
            T = t.getText = function(e) {
                var t, n = "", r = 0, i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent)
                            return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling)
                            n += T(e)
                    } else if (3 === i || 4 === i)
                        return e.nodeValue
                } else
                    for (; t = e[r++]; )
                        n += T(t);
                return n
            }
            ,
            w = t.selectors = {
                cacheLength: 50,
                createPseudo: r,
                match: fe,
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
                    ATTR: function(e) {
                        return e[1] = e[1].replace(me, ye),
                            e[3] = (e[3] || e[4] || e[5] || "").replace(me, ye),
                        "~=" === e[2] && (e[3] = " " + e[3] + " "),
                            e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(),
                            "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]),
                                e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                                e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]),
                            e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && le.test(n) && (t = E(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                                e[2] = n.slice(0, t)),
                            e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(me, ye).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        }
                            : function(e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                    },
                    CLASS: function(e) {
                        var t = _[e + " "];
                        return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && _(e, function(e) {
                                return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                            })
                    },
                    ATTR: function(e, n, r) {
                        return function(i) {
                            var o = t.attr(i, e);
                            return null == o ? "!=" === n : !n || (o += "",
                                    "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(ie, " ") + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"))
                        }
                    },
                    CHILD: function(e, t, n, r, i) {
                        var o = "nth" !== e.slice(0, 3)
                            , a = "last" !== e.slice(-4)
                            , s = "of-type" === t;
                        return 1 === r && 0 === i ? function(e) {
                            return !!e.parentNode
                        }
                            : function(t, n, u) {
                                var l, c, f, d, p, h, g = o !== a ? "nextSibling" : "previousSibling", v = t.parentNode, m = s && t.nodeName.toLowerCase(), y = !u && !s, x = !1;
                                if (v) {
                                    if (o) {
                                        for (; g; ) {
                                            for (d = t; d = d[g]; )
                                                if (s ? d.nodeName.toLowerCase() === m : 1 === d.nodeType)
                                                    return !1;
                                            h = g = "only" === e && !h && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (h = [a ? v.firstChild : v.lastChild],
                                        a && y) {
                                        for (d = v,
                                                 f = d[M] || (d[M] = {}),
                                                 c = f[d.uniqueID] || (f[d.uniqueID] = {}),
                                                 l = c[e] || [],
                                                 p = l[0] === W && l[1],
                                                 x = p && l[2],
                                                 d = p && v.childNodes[p]; d = ++p && d && d[g] || (x = p = 0) || h.pop(); )
                                            if (1 === d.nodeType && ++x && d === t) {
                                                c[e] = [W, p, x];
                                                break
                                            }
                                    } else if (y && (d = t,
                                            f = d[M] || (d[M] = {}),
                                            c = f[d.uniqueID] || (f[d.uniqueID] = {}),
                                            l = c[e] || [],
                                            p = l[0] === W && l[1],
                                            x = p),
                                        !1 === x)
                                        for (; (d = ++p && d && d[g] || (x = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== m : 1 !== d.nodeType) || !++x || (y && (f = d[M] || (d[M] = {}),
                                            c = f[d.uniqueID] || (f[d.uniqueID] = {}),
                                            c[e] = [W, x]),
                                        d !== t)); )
                                            ;
                                    return (x -= i) === r || x % r == 0 && x / r >= 0
                                }
                            }
                    },
                    PSEUDO: function(e, n) {
                        var i, o = w.pseudos[e] || w.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                        return o[M] ? o(n) : o.length > 1 ? (i = [e, e, "", n],
                                w.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                                    for (var r, i = o(e, n), a = i.length; a--; )
                                        r = K(e, i[a]),
                                            e[r] = !(t[r] = i[a])
                                }) : function(e) {
                                    return o(e, 0, i)
                                }
                        ) : o
                    }
                },
                pseudos: {
                    not: r(function(e) {
                        var t = []
                            , n = []
                            , i = k(e.replace(oe, "$1"));
                        return i[M] ? r(function(e, t, n, r) {
                            for (var o, a = i(e, null, r, []), s = e.length; s--; )
                                (o = a[s]) && (e[s] = !(t[s] = o))
                        }) : function(e, r, o) {
                            return t[0] = e,
                                i(t, null, o, n),
                                t[0] = null,
                                !n.pop()
                        }
                    }),
                    has: r(function(e) {
                        return function(n) {
                            return t(e, n).length > 0
                        }
                    }),
                    contains: r(function(e) {
                        return e = e.replace(me, ye),
                            function(t) {
                                return (t.textContent || t.innerText || T(t)).indexOf(e) > -1
                            }
                    }),
                    lang: r(function(e) {
                        return ce.test(e || "") || t.error("unsupported lang: " + e),
                            e = e.replace(me, ye).toLowerCase(),
                            function(t) {
                                var n;
                                do {
                                    if (n = H ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                        return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);return !1
                            }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === L
                    },
                    focus: function(e) {
                        return e === q.activeElement && (!q.hasFocus || q.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: s(!1),
                    disabled: s(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex,
                        !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6)
                                return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !w.pseudos.empty(e)
                    },
                    header: function(e) {
                        return pe.test(e.nodeName)
                    },
                    input: function(e) {
                        return de.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: u(function() {
                        return [0]
                    }),
                    last: u(function(e, t) {
                        return [t - 1]
                    }),
                    eq: u(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: u(function(e, t) {
                        for (var n = 0; n < t; n += 2)
                            e.push(n);
                        return e
                    }),
                    odd: u(function(e, t) {
                        for (var n = 1; n < t; n += 2)
                            e.push(n);
                        return e
                    }),
                    lt: u(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; --r >= 0; )
                            e.push(r);
                        return e
                    }),
                    gt: u(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t; )
                            e.push(r);
                        return e
                    })
                }
            },
            w.pseudos.nth = w.pseudos.eq;
        for (x in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            w.pseudos[x] = function(e) {
                return function(t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === e
                }
            }(x);
        for (x in {
            submit: !0,
            reset: !0
        })
            w.pseudos[x] = function(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }(x);
        return c.prototype = w.filters = w.pseudos,
            w.setFilters = new c,
            E = t.tokenize = function(e, n) {
                var r, i, o, a, s, u, l, c = B[e + " "];
                if (c)
                    return n ? 0 : c.slice(0);
                for (s = e,
                         u = [],
                         l = w.preFilter; s; ) {
                    r && !(i = ae.exec(s)) || (i && (s = s.slice(i[0].length) || s),
                        u.push(o = [])),
                        r = !1,
                    (i = se.exec(s)) && (r = i.shift(),
                        o.push({
                            value: r,
                            type: i[0].replace(oe, " ")
                        }),
                        s = s.slice(r.length));
                    for (a in w.filter)
                        !(i = fe[a].exec(s)) || l[a] && !(i = l[a](i)) || (r = i.shift(),
                            o.push({
                                value: r,
                                type: a,
                                matches: i
                            }),
                            s = s.slice(r.length));
                    if (!r)
                        break
                }
                return n ? s.length : s ? t.error(e) : B(e, u).slice(0)
            }
            ,
            k = t.compile = function(e, t) {
                var n, r = [], i = [], o = z[e + " "];
                if (!o) {
                    for (t || (t = E(e)),
                             n = t.length; n--; )
                        o = m(t[n]),
                            o[M] ? r.push(o) : i.push(o);
                    o = z(e, y(i, r)),
                        o.selector = e
                }
                return o
            }
            ,
            S = t.select = function(e, t, n, r) {
                var i, o, a, s, u, c = "function" == typeof e && e, d = !r && E(e = c.selector || e);
                if (n = n || [],
                    1 === d.length) {
                    if (o = d[0] = d[0].slice(0),
                        o.length > 2 && "ID" === (a = o[0]).type && 9 === t.nodeType && H && w.relative[o[1].type]) {
                        if (!(t = (w.find.ID(a.matches[0].replace(me, ye), t) || [])[0]))
                            return n;
                        c && (t = t.parentNode),
                            e = e.slice(o.shift().value.length)
                    }
                    for (i = fe.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i],
                        !w.relative[s = a.type]); )
                        if ((u = w.find[s]) && (r = u(a.matches[0].replace(me, ye), ve.test(o[0].type) && l(t.parentNode) || t))) {
                            if (o.splice(i, 1),
                                    !(e = r.length && f(o)))
                                return Q.apply(n, r),
                                    n;
                            break
                        }
                }
                return (c || k(e, d))(r, t, !H, n, !t || ve.test(e) && l(t.parentNode) || t),
                    n
            }
            ,
            b.sortStable = M.split("").sort(X).join("") === M,
            b.detectDuplicates = !!j,
            A(),
            b.sortDetached = i(function(e) {
                return 1 & e.compareDocumentPosition(q.createElement("fieldset"))
            }),
        i(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(e, t, n) {
            if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        b.attributes && i(function(e) {
            return e.innerHTML = "<input/>",
                e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || o("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }),
        i(function(e) {
            return null == e.getAttribute("disabled")
        }) || o(Z, function(e, t, n) {
            var r;
            if (!n)
                return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }),
            t
    }(e);
    he.find = xe,
        he.expr = xe.selectors,
        he.expr[":"] = he.expr.pseudos,
        he.uniqueSort = he.unique = xe.uniqueSort,
        he.text = xe.getText,
        he.isXMLDoc = xe.isXML,
        he.contains = xe.contains,
        he.escapeSelector = xe.escape;
    var be = function(e, t, n) {
        for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
                if (i && he(e).is(n))
                    break;
                r.push(e)
            }
        return r
    }
        , we = function(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
        , Te = he.expr.match.needsContext
        , Ce = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i
        , Ee = /^.[^:#\[\.,]*$/;
    he.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === r.nodeType ? he.find.matchesSelector(r, e) ? [r] : [] : he.find.matches(e, he.grep(t, function(e) {
                return 1 === e.nodeType
            }))
    }
        ,
        he.fn.extend({
            find: function(e) {
                var t, n, r = this.length, i = this;
                if ("string" != typeof e)
                    return this.pushStack(he(e).filter(function() {
                        for (t = 0; t < r; t++)
                            if (he.contains(i[t], this))
                                return !0
                    }));
                for (n = this.pushStack([]),
                         t = 0; t < r; t++)
                    he.find(e, i[t], n);
                return r > 1 ? he.uniqueSort(n) : n
            },
            filter: function(e) {
                return this.pushStack(i(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(i(this, e || [], !0))
            },
            is: function(e) {
                return !!i(this, "string" == typeof e && Te.test(e) ? he(e) : e || [], !1).length
            }
        });
    var ke, Se = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (he.fn.init = function(e, t, n) {
            var r, i;
            if (!e)
                return this;
            if (n = n || ke,
                "string" == typeof e) {
                if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : Se.exec(e)) || !r[1] && t)
                    return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (r[1]) {
                    if (t = t instanceof he ? t[0] : t,
                            he.merge(this, he.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : te, !0)),
                        Ce.test(r[1]) && he.isPlainObject(t))
                        for (r in t)
                            he.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                    return this
                }
                return i = te.getElementById(r[2]),
                i && (this[0] = i,
                    this.length = 1),
                    this
            }
            return e.nodeType ? (this[0] = e,
                this.length = 1,
                this) : he.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(he) : he.makeArray(e, this)
        }
    ).prototype = he.fn,
        ke = he(te);
    var Ne = /^(?:parents|prev(?:Until|All))/
        , De = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    he.fn.extend({
        has: function(e) {
            var t = he(e, this)
                , n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (he.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0, i = this.length, o = [], a = "string" != typeof e && he(e);
            if (!Te.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && he.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(o.length > 1 ? he.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? ae.call(he(e), this[0]) : ae.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(he.uniqueSort(he.merge(this.get(), he(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
        he.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return be(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return be(e, "parentNode", n)
            },
            next: function(e) {
                return o(e, "nextSibling")
            },
            prev: function(e) {
                return o(e, "previousSibling")
            },
            nextAll: function(e) {
                return be(e, "nextSibling")
            },
            prevAll: function(e) {
                return be(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return be(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return be(e, "previousSibling", n)
            },
            siblings: function(e) {
                return we((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return we(e.firstChild)
            },
            contents: function(e) {
                return e.contentDocument || he.merge([], e.childNodes)
            }
        }, function(e, t) {
            he.fn[e] = function(n, r) {
                var i = he.map(this, t, n);
                return "Until" !== e.slice(-5) && (r = n),
                r && "string" == typeof r && (i = he.filter(r, i)),
                this.length > 1 && (De[e] || he.uniqueSort(i),
                Ne.test(e) && i.reverse()),
                    this.pushStack(i)
            }
        });
    var je = /[^\x20\t\r\n\f]+/g;
    he.Callbacks = function(e) {
        e = "string" == typeof e ? a(e) : he.extend({}, e);
        var t, n, r, i, o = [], s = [], u = -1, l = function() {
            for (i = e.once,
                     r = t = !0; s.length; u = -1)
                for (n = s.shift(); ++u < o.length; )
                    !1 === o[u].apply(n[0], n[1]) && e.stopOnFalse && (u = o.length,
                        n = !1);
            e.memory || (n = !1),
                t = !1,
            i && (o = n ? [] : "")
        }, c = {
            add: function() {
                return o && (n && !t && (u = o.length - 1,
                    s.push(n)),
                    function t(n) {
                        he.each(n, function(n, r) {
                            he.isFunction(r) ? e.unique && c.has(r) || o.push(r) : r && r.length && "string" !== he.type(r) && t(r)
                        })
                    }(arguments),
                n && !t && l()),
                    this
            },
            remove: function() {
                return he.each(arguments, function(e, t) {
                    for (var n; (n = he.inArray(t, o, n)) > -1; )
                        o.splice(n, 1),
                        n <= u && u--
                }),
                    this
            },
            has: function(e) {
                return e ? he.inArray(e, o) > -1 : o.length > 0
            },
            empty: function() {
                return o && (o = []),
                    this
            },
            disable: function() {
                return i = s = [],
                    o = n = "",
                    this
            },
            disabled: function() {
                return !o
            },
            lock: function() {
                return i = s = [],
                n || t || (o = n = ""),
                    this
            },
            locked: function() {
                return !!i
            },
            fireWith: function(e, n) {
                return i || (n = n || [],
                    n = [e, n.slice ? n.slice() : n],
                    s.push(n),
                t || l()),
                    this
            },
            fire: function() {
                return c.fireWith(this, arguments),
                    this
            },
            fired: function() {
                return !!r
            }
        };
        return c
    }
        ,
        he.extend({
            Deferred: function(t) {
                var n = [["notify", "progress", he.Callbacks("memory"), he.Callbacks("memory"), 2], ["resolve", "done", he.Callbacks("once memory"), he.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", he.Callbacks("once memory"), he.Callbacks("once memory"), 1, "rejected"]]
                    , r = "pending"
                    , i = {
                    state: function() {
                        return r
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments),
                            this
                    },
                    catch: function(e) {
                        return i.then(null, e)
                    },
                    pipe: function() {
                        var e = arguments;
                        return he.Deferred(function(t) {
                            he.each(n, function(n, r) {
                                var i = he.isFunction(e[r[4]]) && e[r[4]];
                                o[r[1]](function() {
                                    var e = i && i.apply(this, arguments);
                                    e && he.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                                })
                            }),
                                e = null
                        }).promise()
                    },
                    then: function(t, r, i) {
                        function o(t, n, r, i) {
                            return function() {
                                var l = this
                                    , c = arguments
                                    , f = function() {
                                        var e, f;
                                        if (!(t < a)) {
                                            if ((e = r.apply(l, c)) === n.promise())
                                                throw new TypeError("Thenable self-resolution");
                                            f = e && ("object" == (void 0 === e ? "undefined" : _typeof(e)) || "function" == typeof e) && e.then,
                                                he.isFunction(f) ? i ? f.call(e, o(a, n, s, i), o(a, n, u, i)) : (a++,
                                                    f.call(e, o(a, n, s, i), o(a, n, u, i), o(a, n, s, n.notifyWith))) : (r !== s && (l = void 0,
                                                    c = [e]),
                                                    (i || n.resolveWith)(l, c))
                                        }
                                    }
                                    , d = i ? f : function() {
                                        try {
                                            f()
                                        } catch (e) {
                                            he.Deferred.exceptionHook && he.Deferred.exceptionHook(e, d.stackTrace),
                                            t + 1 >= a && (r !== u && (l = void 0,
                                                c = [e]),
                                                n.rejectWith(l, c))
                                        }
                                    }
                                ;
                                t ? d() : (he.Deferred.getStackHook && (d.stackTrace = he.Deferred.getStackHook()),
                                    e.setTimeout(d))
                            }
                        }
                        var a = 0;
                        return he.Deferred(function(e) {
                            n[0][3].add(o(0, e, he.isFunction(i) ? i : s, e.notifyWith)),
                                n[1][3].add(o(0, e, he.isFunction(t) ? t : s)),
                                n[2][3].add(o(0, e, he.isFunction(r) ? r : u))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? he.extend(e, i) : i
                    }
                }
                    , o = {};
                return he.each(n, function(e, t) {
                    var a = t[2]
                        , s = t[5];
                    i[t[1]] = a.add,
                    s && a.add(function() {
                        r = s
                    }, n[3 - e][2].disable, n[0][2].lock),
                        a.add(t[3].fire),
                        o[t[0]] = function() {
                            return o[t[0] + "With"](this === o ? void 0 : this, arguments),
                                this
                        }
                        ,
                        o[t[0] + "With"] = a.fireWith
                }),
                    i.promise(o),
                t && t.call(o, o),
                    o
            },
            when: function(e) {
                var t = arguments.length
                    , n = t
                    , r = Array(n)
                    , i = re.call(arguments)
                    , o = he.Deferred()
                    , a = function(e) {
                    return function(n) {
                        r[e] = this,
                            i[e] = arguments.length > 1 ? re.call(arguments) : n,
                        --t || o.resolveWith(r, i)
                    }
                };
                if (t <= 1 && (l(e, o.done(a(n)).resolve, o.reject),
                    "pending" === o.state() || he.isFunction(i[n] && i[n].then)))
                    return o.then();
                for (; n--; )
                    l(i[n], a(n), o.reject);
                return o.promise()
            }
        });
    var Ae = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    he.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && Ae.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }
        ,
        he.readyException = function(t) {
            e.setTimeout(function() {
                throw t
            })
        }
    ;
    var qe = he.Deferred();
    he.fn.ready = function(e) {
        return qe.then(e).catch(function(e) {
            he.readyException(e)
        }),
            this
    }
        ,
        he.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? he.readyWait++ : he.ready(!0)
            },
            ready: function(e) {
                (!0 === e ? --he.readyWait : he.isReady) || (he.isReady = !0,
                !0 !== e && --he.readyWait > 0 || qe.resolveWith(te, [he]))
            }
        }),
        he.ready.then = qe.then,
        "complete" === te.readyState || "loading" !== te.readyState && !te.documentElement.doScroll ? e.setTimeout(he.ready) : (te.addEventListener("DOMContentLoaded", c),
            e.addEventListener("load", c));
    var Le = function e(t, n, r, i, o, a, s) {
        var u = 0
            , l = t.length
            , c = null == r;
        if ("object" === he.type(r)) {
            o = !0;
            for (u in r)
                e(t, n, u, r[u], !0, a, s)
        } else if (void 0 !== i && (o = !0,
            he.isFunction(i) || (s = !0),
            c && (s ? (n.call(t, i),
                n = null) : (c = n,
                    n = function(e, t, n) {
                        return c.call(he(e), n)
                    }
            )),
                n))
            for (; u < l; u++)
                n(t[u], r, s ? i : i.call(t[u], u, n(t[u], r)));
        return o ? t : c ? n.call(t) : l ? n(t[0], r) : a
    }
        , He = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    f.uid = 1,
        f.prototype = {
            cache: function(e) {
                var t = e[this.expando];
                return t || (t = {},
                He(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                }))),
                    t
            },
            set: function(e, t, n) {
                var r, i = this.cache(e);
                if ("string" == typeof t)
                    i[he.camelCase(t)] = n;
                else
                    for (r in t)
                        i[he.camelCase(r)] = t[r];
                return i
            },
            get: function(e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][he.camelCase(t)]
            },
            access: function(e, t, n) {
                return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
                    void 0 !== n ? n : t)
            },
            remove: function(e, t) {
                var n, r = e[this.expando];
                if (void 0 !== r) {
                    if (void 0 !== t) {
                        he.isArray(t) ? t = t.map(he.camelCase) : (t = he.camelCase(t),
                            t = t in r ? [t] : t.match(je) || []),
                            n = t.length;
                        for (; n--; )
                            delete r[t[n]]
                    }
                    (void 0 === t || he.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            },
            hasData: function(e) {
                var t = e[this.expando];
                return void 0 !== t && !he.isEmptyObject(t)
            }
        };
    var Fe = new f
        , Oe = new f
        , Pe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
        , Re = /[A-Z]/g;
    he.extend({
        hasData: function(e) {
            return Oe.hasData(e) || Fe.hasData(e)
        },
        data: function(e, t, n) {
            return Oe.access(e, t, n)
        },
        removeData: function(e, t) {
            Oe.remove(e, t)
        },
        _data: function(e, t, n) {
            return Fe.access(e, t, n)
        },
        _removeData: function(e, t) {
            Fe.remove(e, t)
        }
    }),
        he.fn.extend({
            data: function(e, t) {
                var n, r, i, o = this[0], a = o && o.attributes;
                if (void 0 === e) {
                    if (this.length && (i = Oe.get(o),
                        1 === o.nodeType && !Fe.get(o, "hasDataAttrs"))) {
                        for (n = a.length; n--; )
                            a[n] && (r = a[n].name,
                            0 === r.indexOf("data-") && (r = he.camelCase(r.slice(5)),
                                p(o, r, i[r])));
                        Fe.set(o, "hasDataAttrs", !0)
                    }
                    return i
                }
                return "object" == (void 0 === e ? "undefined" : _typeof(e)) ? this.each(function() {
                    Oe.set(this, e)
                }) : Le(this, function(t) {
                    var n;
                    if (o && void 0 === t) {
                        if (void 0 !== (n = Oe.get(o, e)))
                            return n;
                        if (void 0 !== (n = p(o, e)))
                            return n
                    } else
                        this.each(function() {
                            Oe.set(this, e, t)
                        })
                }, null, t, arguments.length > 1, null, !0)
            },
            removeData: function(e) {
                return this.each(function() {
                    Oe.remove(this, e)
                })
            }
        }),
        he.extend({
            queue: function(e, t, n) {
                var r;
                if (e)
                    return t = (t || "fx") + "queue",
                        r = Fe.get(e, t),
                    n && (!r || he.isArray(n) ? r = Fe.access(e, t, he.makeArray(n)) : r.push(n)),
                    r || []
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = he.queue(e, t)
                    , r = n.length
                    , i = n.shift()
                    , o = he._queueHooks(e, t)
                    , a = function() {
                    he.dequeue(e, t)
                };
                "inprogress" === i && (i = n.shift(),
                    r--),
                i && ("fx" === t && n.unshift("inprogress"),
                    delete o.stop,
                    i.call(e, a, o)),
                !r && o && o.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return Fe.get(e, n) || Fe.access(e, n, {
                        empty: he.Callbacks("once memory").add(function() {
                            Fe.remove(e, [t + "queue", n])
                        })
                    })
            }
        }),
        he.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e,
                    e = "fx",
                    n--),
                    arguments.length < n ? he.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                        var n = he.queue(this, e, t);
                        he._queueHooks(this, e),
                        "fx" === e && "inprogress" !== n[0] && he.dequeue(this, e)
                    })
            },
            dequeue: function(e) {
                return this.each(function() {
                    he.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, r = 1, i = he.Deferred(), o = this, a = this.length, s = function() {
                    --r || i.resolveWith(o, [o])
                };
                for ("string" != typeof e && (t = e,
                    e = void 0),
                         e = e || "fx"; a--; )
                    (n = Fe.get(o[a], e + "queueHooks")) && n.empty && (r++,
                        n.empty.add(s));
                return s(),
                    i.promise(t)
            }
        });
    var Me = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
        , Ie = new RegExp("^(?:([+-])=|)(" + Me + ")([a-z%]*)$","i")
        , We = ["Top", "Right", "Bottom", "Left"]
        , $e = function(e, t) {
        return e = t || e,
        "none" === e.style.display || "" === e.style.display && he.contains(e.ownerDocument, e) && "none" === he.css(e, "display")
    }
        , _e = function(e, t, n, r) {
        var i, o, a = {};
        for (o in t)
            a[o] = e.style[o],
                e.style[o] = t[o];
        i = n.apply(e, r || []);
        for (o in t)
            e.style[o] = a[o];
        return i
    }
        , Be = {};
    he.fn.extend({
        show: function() {
            return v(this, !0)
        },
        hide: function() {
            return v(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                $e(this) ? he(this).show() : he(this).hide()
            })
        }
    });
    var ze = /^(?:checkbox|radio)$/i
        , Xe = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i
        , Ue = /^$|\/(?:java|ecma)script/i
        , Ve = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    Ve.optgroup = Ve.option,
        Ve.tbody = Ve.tfoot = Ve.colgroup = Ve.caption = Ve.thead,
        Ve.th = Ve.td;
    var Ge = /<|&#?\w+;/;
    !function() {
        var e = te.createDocumentFragment()
            , t = e.appendChild(te.createElement("div"))
            , n = te.createElement("input");
        n.setAttribute("type", "radio"),
            n.setAttribute("checked", "checked"),
            n.setAttribute("name", "t"),
            t.appendChild(n),
            de.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked,
            t.innerHTML = "<textarea>x</textarea>",
            de.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var Ye = te.documentElement
        , Qe = /^key/
        , Je = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
        , Ke = /^([^.]*)(?:\.(.+)|)/;
    he.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, d, p, h, g, v = Fe.get(e);
            if (v)
                for (n.handler && (o = n,
                    n = o.handler,
                    i = o.selector),
                     i && he.find.matchesSelector(Ye, i),
                     n.guid || (n.guid = he.guid++),
                     (u = v.events) || (u = v.events = {}),
                     (a = v.handle) || (a = v.handle = function(t) {
                             return void 0 !== he && he.event.triggered !== t.type ? he.event.dispatch.apply(e, arguments) : void 0
                         }
                     ),
                         t = (t || "").match(je) || [""],
                         l = t.length; l--; )
                    s = Ke.exec(t[l]) || [],
                        p = g = s[1],
                        h = (s[2] || "").split(".").sort(),
                    p && (f = he.event.special[p] || {},
                        p = (i ? f.delegateType : f.bindType) || p,
                        f = he.event.special[p] || {},
                        c = he.extend({
                            type: p,
                            origType: g,
                            data: r,
                            handler: n,
                            guid: n.guid,
                            selector: i,
                            needsContext: i && he.expr.match.needsContext.test(i),
                            namespace: h.join(".")
                        }, o),
                    (d = u[p]) || (d = u[p] = [],
                        d.delegateCount = 0,
                    f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(p, a)),
                    f.add && (f.add.call(e, c),
                    c.handler.guid || (c.handler.guid = n.guid)),
                        i ? d.splice(d.delegateCount++, 0, c) : d.push(c),
                        he.event.global[p] = !0)
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, d, p, h, g, v = Fe.hasData(e) && Fe.get(e);
            if (v && (u = v.events)) {
                for (t = (t || "").match(je) || [""],
                         l = t.length; l--; )
                    if (s = Ke.exec(t[l]) || [],
                            p = g = s[1],
                            h = (s[2] || "").split(".").sort(),
                            p) {
                        for (f = he.event.special[p] || {},
                                 p = (r ? f.delegateType : f.bindType) || p,
                                 d = u[p] || [],
                                 s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                                 a = o = d.length; o--; )
                            c = d[o],
                            !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(o, 1),
                            c.selector && d.delegateCount--,
                            f.remove && f.remove.call(e, c));
                        a && !d.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || he.removeEvent(e, p, v.handle),
                            delete u[p])
                    } else
                        for (p in u)
                            he.event.remove(e, p + t[l], n, r, !0);
                he.isEmptyObject(u) && Fe.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = he.event.fix(e), u = new Array(arguments.length), l = (Fe.get(this, "events") || {})[s.type] || [], c = he.event.special[s.type] || {};
            for (u[0] = s,
                     t = 1; t < arguments.length; t++)
                u[t] = arguments[t];
            if (s.delegateTarget = this,
                !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
                for (a = he.event.handlers.call(this, s, l),
                         t = 0; (i = a[t++]) && !s.isPropagationStopped(); )
                    for (s.currentTarget = i.elem,
                             n = 0; (o = i.handlers[n++]) && !s.isImmediatePropagationStopped(); )
                        s.rnamespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o,
                            s.data = o.data,
                        void 0 !== (r = ((he.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(),
                            s.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, s),
                    s.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target;
            if (u && l.nodeType && !("click" === e.type && e.button >= 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [],
                                 a = {},
                                 n = 0; n < u; n++)
                            r = t[n],
                                i = r.selector + " ",
                            void 0 === a[i] && (a[i] = r.needsContext ? he(i, this).index(l) > -1 : he.find(i, this, null, [l]).length),
                            a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return l = this,
            u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }),
                s
        },
        addProp: function(e, t) {
            Object.defineProperty(he.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: he.isFunction(t) ? function() {
                    if (this.originalEvent)
                        return t(this.originalEvent)
                }
                    : function() {
                        if (this.originalEvent)
                            return this.originalEvent[e]
                    }
                ,
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[he.expando] ? e : new he.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== T() && this.focus)
                        return this.focus(),
                            !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === T() && this.blur)
                        return this.blur(),
                            !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && he.nodeName(this, "input"))
                        return this.click(),
                            !1
                },
                _default: function(e) {
                    return he.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
        he.removeEvent = function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        }
        ,
        he.Event = function(e, t) {
            return this instanceof he.Event ? (e && e.type ? (this.originalEvent = e,
                this.type = e.type,
                this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? b : w,
                this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
                this.currentTarget = e.currentTarget,
                this.relatedTarget = e.relatedTarget) : this.type = e,
            t && he.extend(this, t),
                this.timeStamp = e && e.timeStamp || he.now(),
                void (this[he.expando] = !0)) : new he.Event(e,t)
        }
        ,
        he.Event.prototype = {
            constructor: he.Event,
            isDefaultPrevented: w,
            isPropagationStopped: w,
            isImmediatePropagationStopped: w,
            isSimulated: !1,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = b,
                e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = b,
                e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = b,
                e && !this.isSimulated && e.stopImmediatePropagation(),
                    this.stopPropagation()
            }
        },
        he.each({
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
            which: function(e) {
                var t = e.button;
                return null == e.which && Qe.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Je.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
            }
        }, he.event.addProp),
        he.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, t) {
            he.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, r = this, i = e.relatedTarget, o = e.handleObj;
                    return i && (i === r || he.contains(r, i)) || (e.type = o.origType,
                        n = o.handler.apply(this, arguments),
                        e.type = t),
                        n
                }
            }
        }),
        he.fn.extend({
            on: function(e, t, n, r) {
                return C(this, e, t, n, r)
            },
            one: function(e, t, n, r) {
                return C(this, e, t, n, r, 1)
            },
            off: function(e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj)
                    return r = e.handleObj,
                        he(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                        this;
                if ("object" == (void 0 === e ? "undefined" : _typeof(e))) {
                    for (i in e)
                        this.off(i, t, e[i]);
                    return this
                }
                return !1 !== t && "function" != typeof t || (n = t,
                    t = void 0),
                !1 === n && (n = w),
                    this.each(function() {
                        he.event.remove(this, e, n, t)
                    })
            }
        });
    var Ze = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
        , et = /<script|<style|<link/i
        , tt = /checked\s*(?:[^=]|=\s*.checked.)/i
        , nt = /^true\/(.*)/
        , rt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    he.extend({
        htmlPrefilter: function(e) {
            return e.replace(Ze, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r, i, o, a, s = e.cloneNode(!0), u = he.contains(e.ownerDocument, e);
            if (!(de.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || he.isXMLDoc(e)))
                for (a = m(s),
                         o = m(e),
                         r = 0,
                         i = o.length; r < i; r++)
                    D(o[r], a[r]);
            if (t)
                if (n)
                    for (o = o || m(e),
                             a = a || m(s),
                             r = 0,
                             i = o.length; r < i; r++)
                        N(o[r], a[r]);
                else
                    N(e, s);
            return a = m(s, "script"),
            a.length > 0 && y(a, !u && m(e, "script")),
                s
        },
        cleanData: function(e) {
            for (var t, n, r, i = he.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (He(n)) {
                    if (t = n[Fe.expando]) {
                        if (t.events)
                            for (r in t.events)
                                i[r] ? he.event.remove(n, r) : he.removeEvent(n, r, t.handle);
                        n[Fe.expando] = void 0
                    }
                    n[Oe.expando] && (n[Oe.expando] = void 0)
                }
        }
    }),
        he.fn.extend({
            detach: function(e) {
                return A(this, e, !0)
            },
            remove: function(e) {
                return A(this, e)
            },
            text: function(e) {
                return Le(this, function(e) {
                    return void 0 === e ? he.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    })
                }, null, e, arguments.length)
            },
            append: function() {
                return j(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        E(this, e).appendChild(e)
                    }
                })
            },
            prepend: function() {
                return j(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = E(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return j(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return j(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++)
                    1 === e.nodeType && (he.cleanData(m(e, !1)),
                        e.textContent = "");
                return this
            },
            clone: function(e, t) {
                return e = null != e && e,
                    t = null == t ? e : t,
                    this.map(function() {
                        return he.clone(this, e, t)
                    })
            },
            html: function(e) {
                return Le(this, function(e) {
                    var t = this[0] || {}
                        , n = 0
                        , r = this.length;
                    if (void 0 === e && 1 === t.nodeType)
                        return t.innerHTML;
                    if ("string" == typeof e && !et.test(e) && !Ve[(Xe.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = he.htmlPrefilter(e);
                        try {
                            for (; n < r; n++)
                                t = this[n] || {},
                                1 === t.nodeType && (he.cleanData(m(t, !1)),
                                    t.innerHTML = e);
                            t = 0
                        } catch (e) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var e = [];
                return j(this, arguments, function(t) {
                    var n = this.parentNode;
                    he.inArray(this, e) < 0 && (he.cleanData(m(this)),
                    n && n.replaceChild(t, this))
                }, e)
            }
        }),
        he.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            he.fn[e] = function(e) {
                for (var n, r = [], i = he(e), o = i.length - 1, a = 0; a <= o; a++)
                    n = a === o ? this : this.clone(!0),
                        he(i[a])[t](n),
                        oe.apply(r, n.get());
                return this.pushStack(r)
            }
        });
    var it = /^margin/
        , ot = new RegExp("^(" + Me + ")(?!px)[a-z%]+$","i")
        , at = function(t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e),
            n.getComputedStyle(t)
    };
    !function() {
        function t() {
            if (s) {
                s.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
                    s.innerHTML = "",
                    Ye.appendChild(a);
                var t = e.getComputedStyle(s);
                n = "1%" !== t.top,
                    o = "2px" === t.marginLeft,
                    r = "4px" === t.width,
                    s.style.marginRight = "50%",
                    i = "4px" === t.marginRight,
                    Ye.removeChild(a),
                    s = null
            }
        }
        var n, r, i, o, a = te.createElement("div"), s = te.createElement("div");
        s.style && (s.style.backgroundClip = "content-box",
            s.cloneNode(!0).style.backgroundClip = "",
            de.clearCloneStyle = "content-box" === s.style.backgroundClip,
            a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
            a.appendChild(s),
            he.extend(de, {
                pixelPosition: function() {
                    return t(),
                        n
                },
                boxSizingReliable: function() {
                    return t(),
                        r
                },
                pixelMarginRight: function() {
                    return t(),
                        i
                },
                reliableMarginLeft: function() {
                    return t(),
                        o
                }
            }))
    }();
    var st = /^(none|table(?!-c[ea]).+)/
        , ut = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
        , lt = {
        letterSpacing: "0",
        fontWeight: "400"
    }
        , ct = ["Webkit", "Moz", "ms"]
        , ft = te.createElement("div").style;
    he.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = q(e, "opacity");
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
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = he.camelCase(t), u = e.style;
                return t = he.cssProps[s] || (he.cssProps[s] = H(s) || s),
                    a = he.cssHooks[t] || he.cssHooks[s],
                    void 0 === n ? a && "get"in a && void 0 !== (i = a.get(e, !1, r)) ? i : u[t] : (o = void 0 === n ? "undefined" : _typeof(n),
                    "string" === o && (i = Ie.exec(n)) && i[1] && (n = h(e, t, i),
                        o = "number"),
                        void (null != n && n === n && ("number" === o && (n += i && i[3] || (he.cssNumber[s] ? "" : "px")),
                        de.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"),
                        a && "set"in a && void 0 === (n = a.set(e, n, r)) || (u[t] = n))))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = he.camelCase(t);
            return t = he.cssProps[s] || (he.cssProps[s] = H(s) || s),
                a = he.cssHooks[t] || he.cssHooks[s],
            a && "get"in a && (i = a.get(e, !0, n)),
            void 0 === i && (i = q(e, t, r)),
            "normal" === i && t in lt && (i = lt[t]),
                "" === n || n ? (o = parseFloat(i),
                    !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }),
        he.each(["height", "width"], function(e, t) {
            he.cssHooks[t] = {
                get: function(e, n, r) {
                    if (n)
                        return !st.test(he.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? P(e, t, r) : _e(e, ut, function() {
                            return P(e, t, r)
                        })
                },
                set: function(e, n, r) {
                    var i, o = r && at(e), a = r && O(e, t, r, "border-box" === he.css(e, "boxSizing", !1, o), o);
                    return a && (i = Ie.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n,
                        n = he.css(e, t)),
                        F(e, n, a)
                }
            }
        }),
        he.cssHooks.marginLeft = L(de.reliableMarginLeft, function(e, t) {
            if (t)
                return (parseFloat(q(e, "marginLeft")) || e.getBoundingClientRect().left - _e(e, {
                        marginLeft: 0
                    }, function() {
                        return e.getBoundingClientRect().left
                    })) + "px"
        }),
        he.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            he.cssHooks[e + t] = {
                expand: function(n) {
                    for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++)
                        i[e + We[r] + t] = o[r] || o[r - 2] || o[0];
                    return i
                }
            },
            it.test(e) || (he.cssHooks[e + t].set = F)
        }),
        he.fn.extend({
            css: function(e, t) {
                return Le(this, function(e, t, n) {
                    var r, i, o = {}, a = 0;
                    if (he.isArray(t)) {
                        for (r = at(e),
                                 i = t.length; a < i; a++)
                            o[t[a]] = he.css(e, t[a], !1, r);
                        return o
                    }
                    return void 0 !== n ? he.style(e, t, n) : he.css(e, t)
                }, e, t, arguments.length > 1)
            }
        }),
        he.Tween = R,
        R.prototype = {
            constructor: R,
            init: function(e, t, n, r, i, o) {
                this.elem = e,
                    this.prop = n,
                    this.easing = i || he.easing._default,
                    this.options = t,
                    this.start = this.now = this.cur(),
                    this.end = r,
                    this.unit = o || (he.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = R.propHooks[this.prop];
                return e && e.get ? e.get(this) : R.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = R.propHooks[this.prop];
                return this.options.duration ? this.pos = t = he.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
                    this.now = (this.end - this.start) * t + this.start,
                this.options.step && this.options.step.call(this.elem, this.now, this),
                    n && n.set ? n.set(this) : R.propHooks._default.set(this),
                    this
            }
        },
        R.prototype.init.prototype = R.prototype,
        R.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = he.css(e.elem, e.prop, ""),
                        t && "auto" !== t ? t : 0)
                },
                set: function(e) {
                    he.fx.step[e.prop] ? he.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[he.cssProps[e.prop]] && !he.cssHooks[e.prop] ? e.elem[e.prop] = e.now : he.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        },
        R.propHooks.scrollTop = R.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        },
        he.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        },
        he.fx = R.prototype.init,
        he.fx.step = {};
    var dt, pt, ht = /^(?:toggle|show|hide)$/, gt = /queueHooks$/;
    he.Animation = he.extend(z, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return h(n.elem, e, Ie.exec(t), n),
                    n
            }
            ]
        },
        tweener: function(e, t) {
            he.isFunction(e) ? (t = e,
                e = ["*"]) : e = e.match(je);
            for (var n, r = 0, i = e.length; r < i; r++)
                n = e[r],
                    z.tweeners[n] = z.tweeners[n] || [],
                    z.tweeners[n].unshift(t)
        },
        prefilters: [_],
        prefilter: function(e, t) {
            t ? z.prefilters.unshift(e) : z.prefilters.push(e)
        }
    }),
        he.speed = function(e, t, n) {
            var r = e && "object" == (void 0 === e ? "undefined" : _typeof(e)) ? he.extend({}, e) : {
                complete: n || !n && t || he.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !he.isFunction(t) && t
            };
            return he.fx.off || te.hidden ? r.duration = 0 : "number" != typeof r.duration && (r.duration in he.fx.speeds ? r.duration = he.fx.speeds[r.duration] : r.duration = he.fx.speeds._default),
            null != r.queue && !0 !== r.queue || (r.queue = "fx"),
                r.old = r.complete,
                r.complete = function() {
                    he.isFunction(r.old) && r.old.call(this),
                    r.queue && he.dequeue(this, r.queue)
                }
                ,
                r
        }
        ,
        he.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter($e).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(e, t, n, r) {
                var i = he.isEmptyObject(e)
                    , o = he.speed(t, n, r)
                    , a = function() {
                    var t = z(this, he.extend({}, e), o);
                    (i || Fe.get(this, "finish")) && t.stop(!0)
                };
                return a.finish = a,
                    i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function(e, t, n) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop,
                        t(n)
                };
                return "string" != typeof e && (n = t,
                    t = e,
                    e = void 0),
                t && !1 !== e && this.queue(e || "fx", []),
                    this.each(function() {
                        var t = !0
                            , i = null != e && e + "queueHooks"
                            , o = he.timers
                            , a = Fe.get(this);
                        if (i)
                            a[i] && a[i].stop && r(a[i]);
                        else
                            for (i in a)
                                a[i] && a[i].stop && gt.test(i) && r(a[i]);
                        for (i = o.length; i--; )
                            o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n),
                                t = !1,
                                o.splice(i, 1));
                        !t && n || he.dequeue(this, e)
                    })
            },
            finish: function(e) {
                return !1 !== e && (e = e || "fx"),
                    this.each(function() {
                        var t, n = Fe.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = he.timers, a = r ? r.length : 0;
                        for (n.finish = !0,
                                 he.queue(this, e, []),
                             i && i.stop && i.stop.call(this, !0),
                                 t = o.length; t--; )
                            o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0),
                                o.splice(t, 1));
                        for (t = 0; t < a; t++)
                            r[t] && r[t].finish && r[t].finish.call(this);
                        delete n.finish
                    })
            }
        }),
        he.each(["toggle", "show", "hide"], function(e, t) {
            var n = he.fn[t];
            he.fn[t] = function(e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(W(t, !0), e, r, i)
            }
        }),
        he.each({
            slideDown: W("show"),
            slideUp: W("hide"),
            slideToggle: W("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            he.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
            }
        }),
        he.timers = [],
        he.fx.tick = function() {
            var e, t = 0, n = he.timers;
            for (dt = he.now(); t < n.length; t++)
                (e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || he.fx.stop(),
                dt = void 0
        }
        ,
        he.fx.timer = function(e) {
            he.timers.push(e),
                e() ? he.fx.start() : he.timers.pop()
        }
        ,
        he.fx.interval = 13,
        he.fx.start = function() {
            pt || (pt = e.requestAnimationFrame ? e.requestAnimationFrame(M) : e.setInterval(he.fx.tick, he.fx.interval))
        }
        ,
        he.fx.stop = function() {
            e.cancelAnimationFrame ? e.cancelAnimationFrame(pt) : e.clearInterval(pt),
                pt = null
        }
        ,
        he.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        },
        he.fn.delay = function(t, n) {
            return t = he.fx ? he.fx.speeds[t] || t : t,
                n = n || "fx",
                this.queue(n, function(n, r) {
                    var i = e.setTimeout(n, t);
                    r.stop = function() {
                        e.clearTimeout(i)
                    }
                })
        }
        ,
        function() {
            var e = te.createElement("input")
                , t = te.createElement("select")
                , n = t.appendChild(te.createElement("option"));
            e.type = "checkbox",
                de.checkOn = "" !== e.value,
                de.optSelected = n.selected,
                e = te.createElement("input"),
                e.value = "t",
                e.type = "radio",
                de.radioValue = "t" === e.value
        }();
    var vt, mt = he.expr.attrHandle;
    he.fn.extend({
        attr: function(e, t) {
            return Le(this, he.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                he.removeAttr(this, e)
            })
        }
    }),
        he.extend({
            attr: function(e, t, n) {
                var r, i, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return void 0 === e.getAttribute ? he.prop(e, t, n) : (1 === o && he.isXMLDoc(e) || (i = he.attrHooks[t.toLowerCase()] || (he.expr.match.bool.test(t) ? vt : void 0)),
                        void 0 !== n ? null === n ? void he.removeAttr(e, t) : i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                            n) : i && "get"in i && null !== (r = i.get(e, t)) ? r : (r = he.find.attr(e, t),
                            null == r ? void 0 : r))
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!de.radioValue && "radio" === t && he.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t),
                            n && (e.value = n),
                                t
                        }
                    }
                }
            },
            removeAttr: function(e, t) {
                var n, r = 0, i = t && t.match(je);
                if (i && 1 === e.nodeType)
                    for (; n = i[r++]; )
                        e.removeAttribute(n)
            }
        }),
        vt = {
            set: function(e, t, n) {
                return !1 === t ? he.removeAttr(e, n) : e.setAttribute(n, n),
                    n
            }
        },
        he.each(he.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var n = mt[t] || he.find.attr;
            mt[t] = function(e, t, r) {
                var i, o, a = t.toLowerCase();
                return r || (o = mt[a],
                    mt[a] = i,
                    i = null != n(e, t, r) ? a : null,
                    mt[a] = o),
                    i
            }
        });
    var yt = /^(?:input|select|textarea|button)$/i
        , xt = /^(?:a|area)$/i;
    he.fn.extend({
        prop: function(e, t) {
            return Le(this, he.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[he.propFix[e] || e]
            })
        }
    }),
        he.extend({
            prop: function(e, t, n) {
                var r, i, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return 1 === o && he.isXMLDoc(e) || (t = he.propFix[t] || t,
                        i = he.propHooks[t]),
                        void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = he.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : yt.test(e.nodeName) || xt.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }),
    de.optSelected || (he.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
                null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
        he.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            he.propFix[this.toLowerCase()] = this
        }),
        he.fn.extend({
            addClass: function(e) {
                var t, n, r, i, o, a, s, u = 0;
                if (he.isFunction(e))
                    return this.each(function(t) {
                        he(this).addClass(e.call(this, t, U(this)))
                    });
                if ("string" == typeof e && e)
                    for (t = e.match(je) || []; n = this[u++]; )
                        if (i = U(n),
                                r = 1 === n.nodeType && " " + X(i) + " ") {
                            for (a = 0; o = t[a++]; )
                                r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                            s = X(r),
                            i !== s && n.setAttribute("class", s)
                        }
                return this
            },
            removeClass: function(e) {
                var t, n, r, i, o, a, s, u = 0;
                if (he.isFunction(e))
                    return this.each(function(t) {
                        he(this).removeClass(e.call(this, t, U(this)))
                    });
                if (!arguments.length)
                    return this.attr("class", "");
                if ("string" == typeof e && e)
                    for (t = e.match(je) || []; n = this[u++]; )
                        if (i = U(n),
                                r = 1 === n.nodeType && " " + X(i) + " ") {
                            for (a = 0; o = t[a++]; )
                                for (; r.indexOf(" " + o + " ") > -1; )
                                    r = r.replace(" " + o + " ", " ");
                            s = X(r),
                            i !== s && n.setAttribute("class", s)
                        }
                return this
            },
            toggleClass: function(e, t) {
                var n = void 0 === e ? "undefined" : _typeof(e);
                return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : he.isFunction(e) ? this.each(function(n) {
                    he(this).toggleClass(e.call(this, n, U(this), t), t)
                }) : this.each(function() {
                    var t, r, i, o;
                    if ("string" === n)
                        for (r = 0,
                                 i = he(this),
                                 o = e.match(je) || []; t = o[r++]; )
                            i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                    else
                        void 0 !== e && "boolean" !== n || (t = U(this),
                        t && Fe.set(this, "__className__", t),
                        this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Fe.get(this, "__className__") || ""))
                })
            },
            hasClass: function(e) {
                var t, n, r = 0;
                for (t = " " + e + " "; n = this[r++]; )
                    if (1 === n.nodeType && (" " + X(U(n)) + " ").indexOf(t) > -1)
                        return !0;
                return !1
            }
        });
    var bt = /\r/g;
    he.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0];
            return arguments.length ? (r = he.isFunction(e),
                this.each(function(n) {
                    var i;
                    1 === this.nodeType && (i = r ? e.call(this, n, he(this).val()) : e,
                        null == i ? i = "" : "number" == typeof i ? i += "" : he.isArray(i) && (i = he.map(i, function(e) {
                                return null == e ? "" : e + ""
                            })),
                    (t = he.valHooks[this.type] || he.valHooks[this.nodeName.toLowerCase()]) && "set"in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                })) : i ? (t = he.valHooks[i.type] || he.valHooks[i.nodeName.toLowerCase()],
                t && "get"in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value,
                    "string" == typeof n ? n.replace(bt, "") : null == n ? "" : n)) : void 0
        }
    }),
        he.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = he.find.attr(e, "value");
                        return null != t ? t : X(he.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], u = a ? o + 1 : i.length;
                        for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                            if (n = i[r],
                                (n.selected || r === o) && !n.disabled && (!n.parentNode.disabled || !he.nodeName(n.parentNode, "optgroup"))) {
                                if (t = he(n).val(),
                                        a)
                                    return t;
                                s.push(t)
                            }
                        return s
                    },
                    set: function(e, t) {
                        for (var n, r, i = e.options, o = he.makeArray(t), a = i.length; a--; )
                            r = i[a],
                            (r.selected = he.inArray(he.valHooks.option.get(r), o) > -1) && (n = !0);
                        return n || (e.selectedIndex = -1),
                            o
                    }
                }
            }
        }),
        he.each(["radio", "checkbox"], function() {
            he.valHooks[this] = {
                set: function(e, t) {
                    if (he.isArray(t))
                        return e.checked = he.inArray(he(e).val(), t) > -1
                }
            },
            de.checkOn || (he.valHooks[this].get = function(e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                }
            )
        });
    var wt = /^(?:focusinfocus|focusoutblur)$/;
    he.extend(he.event, {
        trigger: function(t, n, r, i) {
            var o, a, s, u, l, c, f, d = [r || te], p = le.call(t, "type") ? t.type : t, h = le.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = s = r = r || te,
                3 !== r.nodeType && 8 !== r.nodeType && !wt.test(p + he.event.triggered) && (p.indexOf(".") > -1 && (h = p.split("."),
                    p = h.shift(),
                    h.sort()),
                    l = p.indexOf(":") < 0 && "on" + p,
                    t = t[he.expando] ? t : new he.Event(p,"object" == (void 0 === t ? "undefined" : _typeof(t)) && t),
                    t.isTrigger = i ? 2 : 3,
                    t.namespace = h.join("."),
                    t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                    t.result = void 0,
                t.target || (t.target = r),
                    n = null == n ? [t] : he.makeArray(n, [t]),
                    f = he.event.special[p] || {},
                i || !f.trigger || !1 !== f.trigger.apply(r, n))) {
                if (!i && !f.noBubble && !he.isWindow(r)) {
                    for (u = f.delegateType || p,
                         wt.test(u + p) || (a = a.parentNode); a; a = a.parentNode)
                        d.push(a),
                            s = a;
                    s === (r.ownerDocument || te) && d.push(s.defaultView || s.parentWindow || e)
                }
                for (o = 0; (a = d[o++]) && !t.isPropagationStopped(); )
                    t.type = o > 1 ? u : f.bindType || p,
                        c = (Fe.get(a, "events") || {})[t.type] && Fe.get(a, "handle"),
                    c && c.apply(a, n),
                    (c = l && a[l]) && c.apply && He(a) && (t.result = c.apply(a, n),
                    !1 === t.result && t.preventDefault());
                return t.type = p,
                i || t.isDefaultPrevented() || f._default && !1 !== f._default.apply(d.pop(), n) || !He(r) || l && he.isFunction(r[p]) && !he.isWindow(r) && (s = r[l],
                s && (r[l] = null),
                    he.event.triggered = p,
                    r[p](),
                    he.event.triggered = void 0,
                s && (r[l] = s)),
                    t.result
            }
        },
        simulate: function(e, t, n) {
            var r = he.extend(new he.Event, n, {
                type: e,
                isSimulated: !0
            });
            he.event.trigger(r, null, t)
        }
    }),
        he.fn.extend({
            trigger: function(e, t) {
                return this.each(function() {
                    he.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                if (n)
                    return he.event.trigger(e, t, n, !0)
            }
        }),
        he.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
            he.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }),
        he.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }),
        de.focusin = "onfocusin"in e,
    de.focusin || he.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            he.event.simulate(t, e.target, he.event.fix(e))
        };
        he.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this
                    , i = Fe.access(r, t);
                i || r.addEventListener(e, n, !0),
                    Fe.access(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this
                    , i = Fe.access(r, t) - 1;
                i ? Fe.access(r, t, i) : (r.removeEventListener(e, n, !0),
                    Fe.remove(r, t))
            }
        }
    });
    var Tt = e.location
        , Ct = he.now()
        , Et = /\?/;
    he.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t)
            return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || he.error("Invalid XML: " + t),
            n
    }
    ;
    var kt = /\[\]$/
        , St = /\r?\n/g
        , Nt = /^(?:submit|button|image|reset|file)$/i
        , Dt = /^(?:input|select|textarea|keygen)/i;
    he.param = function(e, t) {
        var n, r = [], i = function(e, t) {
            var n = he.isFunction(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (he.isArray(e) || e.jquery && !he.isPlainObject(e))
            he.each(e, function() {
                i(this.name, this.value)
            });
        else
            for (n in e)
                V(n, e[n], t, i);
        return r.join("&")
    }
        ,
        he.fn.extend({
            serialize: function() {
                return he.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = he.prop(this, "elements");
                    return e ? he.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !he(this).is(":disabled") && Dt.test(this.nodeName) && !Nt.test(e) && (this.checked || !ze.test(e))
                }).map(function(e, t) {
                    var n = he(this).val();
                    return null == n ? null : he.isArray(n) ? he.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(St, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(St, "\r\n")
                    }
                }).get()
            }
        });
    var jt = /%20/g
        , At = /#.*$/
        , qt = /([?&])_=[^&]*/
        , Lt = /^(.*?):[ \t]*([^\r\n]*)$/gm
        , Ht = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
        , Ft = /^(?:GET|HEAD)$/
        , Ot = /^\/\//
        , Pt = {}
        , Rt = {}
        , Mt = "*/".concat("*")
        , It = te.createElement("a");
    It.href = Tt.href,
        he.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Tt.href,
                type: "GET",
                isLocal: Ht.test(Tt.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Mt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": he.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? Q(Q(e, he.ajaxSettings), t) : Q(he.ajaxSettings, e)
            },
            ajaxPrefilter: G(Pt),
            ajaxTransport: G(Rt),
            ajax: function(t, n) {
                function r(t, n, r, s) {
                    var l, d, p, b, w, T = n;
                    c || (c = !0,
                    u && e.clearTimeout(u),
                        i = void 0,
                        a = s || "",
                        C.readyState = t > 0 ? 4 : 0,
                        l = t >= 200 && t < 300 || 304 === t,
                    r && (b = J(h, C, r)),
                        b = K(h, b, C, l),
                        l ? (h.ifModified && (w = C.getResponseHeader("Last-Modified"),
                        w && (he.lastModified[o] = w),
                        (w = C.getResponseHeader("etag")) && (he.etag[o] = w)),
                            204 === t || "HEAD" === h.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = b.state,
                                d = b.data,
                                p = b.error,
                                l = !p)) : (p = T,
                        !t && T || (T = "error",
                        t < 0 && (t = 0))),
                        C.status = t,
                        C.statusText = (n || T) + "",
                        l ? m.resolveWith(g, [d, T, C]) : m.rejectWith(g, [C, T, p]),
                        C.statusCode(x),
                        x = void 0,
                    f && v.trigger(l ? "ajaxSuccess" : "ajaxError", [C, h, l ? d : p]),
                        y.fireWith(g, [C, T]),
                    f && (v.trigger("ajaxComplete", [C, h]),
                    --he.active || he.event.trigger("ajaxStop")))
                }
                "object" == (void 0 === t ? "undefined" : _typeof(t)) && (n = t,
                    t = void 0),
                    n = n || {};
                var i, o, a, s, u, l, c, f, d, p, h = he.ajaxSetup({}, n), g = h.context || h, v = h.context && (g.nodeType || g.jquery) ? he(g) : he.event, m = he.Deferred(), y = he.Callbacks("once memory"), x = h.statusCode || {}, b = {}, w = {}, T = "canceled", C = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (c) {
                            if (!s)
                                for (s = {}; t = Lt.exec(a); )
                                    s[t[1].toLowerCase()] = t[2];
                            t = s[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return c ? a : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == c && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e,
                            b[e] = t),
                            this
                    },
                    overrideMimeType: function(e) {
                        return null == c && (h.mimeType = e),
                            this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (c)
                                C.always(e[C.status]);
                            else
                                for (t in e)
                                    x[t] = [x[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || T;
                        return i && i.abort(t),
                            r(0, t),
                            this
                    }
                };
                if (m.promise(C),
                        h.url = ((t || h.url || Tt.href) + "").replace(Ot, Tt.protocol + "//"),
                        h.type = n.method || n.type || h.method || h.type,
                        h.dataTypes = (h.dataType || "*").toLowerCase().match(je) || [""],
                    null == h.crossDomain) {
                    l = te.createElement("a");
                    try {
                        l.href = h.url,
                            l.href = l.href,
                            h.crossDomain = It.protocol + "//" + It.host != l.protocol + "//" + l.host
                    } catch (e) {
                        h.crossDomain = !0
                    }
                }
                if (h.data && h.processData && "string" != typeof h.data && (h.data = he.param(h.data, h.traditional)),
                        Y(Pt, h, n, C),
                        c)
                    return C;
                f = he.event && h.global,
                f && 0 == he.active++ && he.event.trigger("ajaxStart"),
                    h.type = h.type.toUpperCase(),
                    h.hasContent = !Ft.test(h.type),
                    o = h.url.replace(At, ""),
                    h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(jt, "+")) : (p = h.url.slice(o.length),
                    h.data && (o += (Et.test(o) ? "&" : "?") + h.data,
                        delete h.data),
                    !1 === h.cache && (o = o.replace(qt, "$1"),
                        p = (Et.test(o) ? "&" : "?") + "_=" + Ct++ + p),
                        h.url = o + p),
                h.ifModified && (he.lastModified[o] && C.setRequestHeader("If-Modified-Since", he.lastModified[o]),
                he.etag[o] && C.setRequestHeader("If-None-Match", he.etag[o])),
                (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && C.setRequestHeader("Content-Type", h.contentType),
                    C.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Mt + "; q=0.01" : "") : h.accepts["*"]);
                for (d in h.headers)
                    C.setRequestHeader(d, h.headers[d]);
                if (h.beforeSend && (!1 === h.beforeSend.call(g, C, h) || c))
                    return C.abort();
                if (T = "abort",
                        y.add(h.complete),
                        C.done(h.success),
                        C.fail(h.error),
                        i = Y(Rt, h, n, C)) {
                    if (C.readyState = 1,
                        f && v.trigger("ajaxSend", [C, h]),
                            c)
                        return C;
                    h.async && h.timeout > 0 && (u = e.setTimeout(function() {
                        C.abort("timeout")
                    }, h.timeout));
                    try {
                        c = !1,
                            i.send(b, r)
                    } catch (e) {
                        if (c)
                            throw e;
                        r(-1, e)
                    }
                } else
                    r(-1, "No Transport");
                return C
            },
            getJSON: function(e, t, n) {
                return he.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return he.get(e, void 0, t, "script")
            }
        }),
        he.each(["get", "post"], function(e, t) {
            he[t] = function(e, n, r, i) {
                return he.isFunction(n) && (i = i || r,
                    r = n,
                    n = void 0),
                    he.ajax(he.extend({
                        url: e,
                        type: t,
                        dataType: i,
                        data: n,
                        success: r
                    }, he.isPlainObject(e) && e))
            }
        }),
        he._evalUrl = function(e) {
            return he.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                throws: !0
            })
        }
        ,
        he.fn.extend({
            wrapAll: function(e) {
                var t;
                return this[0] && (he.isFunction(e) && (e = e.call(this[0])),
                    t = he(e, this[0].ownerDocument).eq(0).clone(!0),
                this[0].parentNode && t.insertBefore(this[0]),
                    t.map(function() {
                        for (var e = this; e.firstElementChild; )
                            e = e.firstElementChild;
                        return e
                    }).append(this)),
                    this
            },
            wrapInner: function(e) {
                return he.isFunction(e) ? this.each(function(t) {
                    he(this).wrapInner(e.call(this, t))
                }) : this.each(function() {
                    var t = he(this)
                        , n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = he.isFunction(e);
                return this.each(function(n) {
                    he(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function(e) {
                return this.parent(e).not("body").each(function() {
                    he(this).replaceWith(this.childNodes)
                }),
                    this
            }
        }),
        he.expr.pseudos.hidden = function(e) {
            return !he.expr.pseudos.visible(e)
        }
        ,
        he.expr.pseudos.visible = function(e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        }
        ,
        he.ajaxSettings.xhr = function() {
            try {
                return new e.XMLHttpRequest
            } catch (e) {}
        }
    ;
    var Wt = {
        0: 200,
        1223: 204
    }
        , $t = he.ajaxSettings.xhr();
    de.cors = !!$t && "withCredentials"in $t,
        de.ajax = $t = !!$t,
        he.ajaxTransport(function(t) {
            var n, r;
            if (de.cors || $t && !t.crossDomain)
                return {
                    send: function(i, o) {
                        var a, s = t.xhr();
                        if (s.open(t.type, t.url, t.async, t.username, t.password),
                                t.xhrFields)
                            for (a in t.xhrFields)
                                s[a] = t.xhrFields[a];
                        t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType),
                        t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                        for (a in i)
                            s.setRequestHeader(a, i[a]);
                        n = function(e) {
                            return function() {
                                n && (n = r = s.onload = s.onerror = s.onabort = s.onreadystatechange = null,
                                    "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Wt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                        binary: s.response
                                    } : {
                                        text: s.responseText
                                    }, s.getAllResponseHeaders()))
                            }
                        }
                            ,
                            s.onload = n(),
                            r = s.onerror = n("error"),
                            void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                                4 === s.readyState && e.setTimeout(function() {
                                    n && r()
                                })
                            }
                            ,
                            n = n("abort");
                        try {
                            s.send(t.hasContent && t.data || null)
                        } catch (e) {
                            if (n)
                                throw e
                        }
                    },
                    abort: function() {
                        n && n()
                    }
                }
        }),
        he.ajaxPrefilter(function(e) {
            e.crossDomain && (e.contents.script = !1)
        }),
        he.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    return he.globalEval(e),
                        e
                }
            }
        }),
        he.ajaxPrefilter("script", function(e) {
            void 0 === e.cache && (e.cache = !1),
            e.crossDomain && (e.type = "GET")
        }),
        he.ajaxTransport("script", function(e) {
            if (e.crossDomain) {
                var t, n;
                return {
                    send: function(r, i) {
                        t = he("<script>").prop({
                            charset: e.scriptCharset,
                            src: e.url
                        }).on("load error", n = function(e) {
                                t.remove(),
                                    n = null,
                                e && i("error" === e.type ? 404 : 200, e.type)
                            }
                        ),
                            te.head.appendChild(t[0])
                    },
                    abort: function() {
                        n && n()
                    }
                }
            }
        });
    var _t = []
        , Bt = /(=)\?(?=&|$)|\?\?/;
    he.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = _t.pop() || he.expando + "_" + Ct++;
            return this[e] = !0,
                e
        }
    }),
        he.ajaxPrefilter("json jsonp", function(t, n, r) {
            var i, o, a, s = !1 !== t.jsonp && (Bt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Bt.test(t.data) && "data");
            if (s || "jsonp" === t.dataTypes[0])
                return i = t.jsonpCallback = he.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
                    s ? t[s] = t[s].replace(Bt, "$1" + i) : !1 !== t.jsonp && (t.url += (Et.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
                    t.converters["script json"] = function() {
                        return a || he.error(i + " was not called"),
                            a[0]
                    }
                    ,
                    t.dataTypes[0] = "json",
                    o = e[i],
                    e[i] = function() {
                        a = arguments
                    }
                    ,
                    r.always(function() {
                        void 0 === o ? he(e).removeProp(i) : e[i] = o,
                        t[i] && (t.jsonpCallback = n.jsonpCallback,
                            _t.push(i)),
                        a && he.isFunction(o) && o(a[0]),
                            a = o = void 0
                    }),
                    "script"
        }),
        de.createHTMLDocument = function() {
            var e = te.implementation.createHTMLDocument("").body;
            return e.innerHTML = "<form></form><form></form>",
            2 === e.childNodes.length
        }(),
        he.parseHTML = function(e, t, n) {
            if ("string" != typeof e)
                return [];
            "boolean" == typeof t && (n = t,
                t = !1);
            var r, i, o;
            return t || (de.createHTMLDocument ? (t = te.implementation.createHTMLDocument(""),
                r = t.createElement("base"),
                r.href = te.location.href,
                t.head.appendChild(r)) : t = te),
                i = Ce.exec(e),
                o = !n && [],
                i ? [t.createElement(i[1])] : (i = x([e], t, o),
                o && o.length && he(o).remove(),
                    he.merge([], i.childNodes))
        }
        ,
        he.fn.load = function(e, t, n) {
            var r, i, o, a = this, s = e.indexOf(" ");
            return s > -1 && (r = X(e.slice(s)),
                e = e.slice(0, s)),
                he.isFunction(t) ? (n = t,
                    t = void 0) : t && "object" == (void 0 === t ? "undefined" : _typeof(t)) && (i = "POST"),
            a.length > 0 && he.ajax({
                url: e,
                type: i || "GET",
                dataType: "html",
                data: t
            }).done(function(e) {
                o = arguments,
                    a.html(r ? he("<div>").append(he.parseHTML(e)).find(r) : e)
            }).always(n && function(e, t) {
                    a.each(function() {
                        n.apply(this, o || [e.responseText, t, e])
                    })
                }
            ),
                this
        }
        ,
        he.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            he.fn[t] = function(e) {
                return this.on(t, e)
            }
        }),
        he.expr.pseudos.animated = function(e) {
            return he.grep(he.timers, function(t) {
                return e === t.elem
            }).length
        }
        ,
        he.offset = {
            setOffset: function(e, t, n) {
                var r, i, o, a, s, u, l, c = he.css(e, "position"), f = he(e), d = {};
                "static" === c && (e.style.position = "relative"),
                    s = f.offset(),
                    o = he.css(e, "top"),
                    u = he.css(e, "left"),
                    l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1,
                    l ? (r = f.position(),
                        a = r.top,
                        i = r.left) : (a = parseFloat(o) || 0,
                        i = parseFloat(u) || 0),
                he.isFunction(t) && (t = t.call(e, n, he.extend({}, s))),
                null != t.top && (d.top = t.top - s.top + a),
                null != t.left && (d.left = t.left - s.left + i),
                    "using"in t ? t.using.call(e, d) : f.css(d)
            }
        },
        he.fn.extend({
            offset: function(e) {
                if (arguments.length)
                    return void 0 === e ? this : this.each(function(t) {
                        he.offset.setOffset(this, e, t)
                    });
                var t, n, r, i, o = this[0];
                return o ? o.getClientRects().length ? (r = o.getBoundingClientRect(),
                    r.width || r.height ? (i = o.ownerDocument,
                        n = Z(i),
                        t = i.documentElement,
                        {
                            top: r.top + n.pageYOffset - t.clientTop,
                            left: r.left + n.pageXOffset - t.clientLeft
                        }) : r) : {
                    top: 0,
                    left: 0
                } : void 0
            },
            position: function() {
                if (this[0]) {
                    var e, t, n = this[0], r = {
                        top: 0,
                        left: 0
                    };
                    return "fixed" === he.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(),
                        t = this.offset(),
                    he.nodeName(e[0], "html") || (r = e.offset()),
                        r = {
                            top: r.top + he.css(e[0], "borderTopWidth", !0),
                            left: r.left + he.css(e[0], "borderLeftWidth", !0)
                        }),
                        {
                            top: t.top - r.top - he.css(n, "marginTop", !0),
                            left: t.left - r.left - he.css(n, "marginLeft", !0)
                        }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent; e && "static" === he.css(e, "position"); )
                        e = e.offsetParent;
                    return e || Ye
                })
            }
        }),
        he.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, t) {
            var n = "pageYOffset" === t;
            he.fn[e] = function(r) {
                return Le(this, function(e, r, i) {
                    var o = Z(e);
                    return void 0 === i ? o ? o[t] : e[r] : void (o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i)
                }, e, r, arguments.length)
            }
        }),
        he.each(["top", "left"], function(e, t) {
            he.cssHooks[t] = L(de.pixelPosition, function(e, n) {
                if (n)
                    return n = q(e, t),
                        ot.test(n) ? he(e).position()[t] + "px" : n
            })
        }),
        he.each({
            Height: "height",
            Width: "width"
        }, function(e, t) {
            he.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function(n, r) {
                he.fn[r] = function(i, o) {
                    var a = arguments.length && (n || "boolean" != typeof i)
                        , s = n || (!0 === i || !0 === o ? "margin" : "border");
                    return Le(this, function(t, n, i) {
                        var o;
                        return he.isWindow(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement,
                            Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? he.css(t, n, s) : he.style(t, n, i, s)
                    }, t, a ? i : void 0, a)
                }
            })
        }),
        he.fn.extend({
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        }),
        he.parseJSON = JSON.parse,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return he
    });
    var zt = e.jQuery
        , Xt = e.$;
    return he.noConflict = function(t) {
        return e.$ === he && (e.$ = Xt),
        t && e.jQuery === he && (e.jQuery = zt),
            he
    }
        ,
    t || (e.jQuery = e.$ = he),
        he
});
"use strict";
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
;
!function(t, e) {
    function i() {
        return new Date(Date.UTC.apply(Date, arguments))
    }
    function a() {
        var t = new Date;
        return i(t.getFullYear(), t.getMonth(), t.getDate())
    }
    function s(t, e) {
        return t.getUTCFullYear() === e.getUTCFullYear() && t.getUTCMonth() === e.getUTCMonth() && t.getUTCDate() === e.getUTCDate()
    }
    function n(t) {
        return function() {
            return this[t].apply(this, arguments)
        }
    }
    function r(e, i) {
        function a(t, e) {
            return e.toLowerCase()
        }
        var s, n = t(e).data(), r = {}, o = new RegExp("^" + i.toLowerCase() + "([A-Z])");
        i = new RegExp("^" + i.toLowerCase());
        for (var h in n)
            i.test(h) && (s = h.replace(o, a),
                r[s] = n[h]);
        return r
    }
    function o(e) {
        var i = {};
        if (g[e] || (e = e.split("-")[0],
                g[e])) {
            var a = g[e];
            return t.each(f, function(t, e) {
                e in a && (i[e] = a[e])
            }),
                i
        }
    }
    var h = function() {
        var e = {
            get: function(t) {
                return this.slice(t)[0]
            },
            contains: function(t) {
                for (var e = t && t.valueOf(), i = 0, a = this.length; a > i; i++)
                    if (this[i].valueOf() === e)
                        return i;
                return -1
            },
            remove: function(t) {
                this.splice(t, 1)
            },
            replace: function(e) {
                e && (t.isArray(e) || (e = [e]),
                    this.clear(),
                    this.push.apply(this, e))
            },
            clear: function() {
                this.length = 0
            },
            copy: function() {
                var t = new h;
                return t.replace(this),
                    t
            }
        };
        return function() {
            var i = [];
            return i.push.apply(i, arguments),
                t.extend(i, e),
                i
        }
    }()
        , l = function(e, i) {
        this._process_options(i),
            this.dates = new h,
            this.viewDate = this.o.defaultViewDate,
            this.focusDate = null,
            this.element = t(e),
            this.isInline = !1,
            this.isInput = this.element.is("input"),
            this.component = !!this.element.hasClass("date") && this.element.find(".add-on, .input-group-addon, .btn"),
            this.hasInput = this.component && this.element.find("input").length,
        this.component && 0 === this.component.length && (this.component = !1),
            this.picker = t(D.template),
            this._buildEvents(),
            this._attachEvents(),
            this.isInline ? this.picker.addClass("datepicker-inline").appendTo(this.element) : this.picker.addClass("datepicker-dropdown dropdown-menu"),
        this.o.rtl && this.picker.addClass("datepicker-rtl"),
            this.viewMode = this.o.startView,
        this.o.calendarWeeks && this.picker.find("tfoot .today, tfoot .clear").attr("colspan", function(t, e) {
            return parseInt(e) + 1
        }),
            this._allow_update = !1,
            this.setStartDate(this._o.startDate),
            this.setEndDate(this._o.endDate),
            this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled),
            this.setDatesDisabled(this.o.datesDisabled),
            this.fillDow(),
            this.fillMonths(),
            this._allow_update = !0,
            this.update(),
            this.showMode(),
        this.isInline && this.show()
    };
    l.prototype = {
        constructor: l,
        _process_options: function(s) {
            this._o = t.extend({}, this._o, s);
            var n = this.o = t.extend({}, this._o)
                , r = n.language;
            switch (g[r] || (r = r.split("-")[0],
            g[r] || (r = p.language)),
                n.language = r,
                n.startView) {
                case 2:
                case "decade":
                    n.startView = 2;
                    break;
                case 1:
                case "year":
                    n.startView = 1;
                    break;
                default:
                    n.startView = 0
            }
            switch (n.minViewMode) {
                case 1:
                case "months":
                    n.minViewMode = 1;
                    break;
                case 2:
                case "years":
                    n.minViewMode = 2;
                    break;
                default:
                    n.minViewMode = 0
            }
            n.startView = Math.max(n.startView, n.minViewMode),
            !0 !== n.multidate && (n.multidate = Number(n.multidate) || !1,
            !1 !== n.multidate && (n.multidate = Math.max(0, n.multidate))),
                n.multidateSeparator = String(n.multidateSeparator),
                n.weekStart %= 7,
                n.weekEnd = (n.weekStart + 6) % 7;
            var o = D.parseFormat(n.format);
            if (n.startDate !== -1 / 0 && (n.startDate ? n.startDate instanceof Date ? n.startDate = this._local_to_utc(this._zero_time(n.startDate)) : n.startDate = D.parseDate(n.startDate, o, n.language) : n.startDate = -1 / 0),
                n.endDate !== 1 / 0 && (n.endDate ? n.endDate instanceof Date ? n.endDate = this._local_to_utc(this._zero_time(n.endDate)) : n.endDate = D.parseDate(n.endDate, o, n.language) : n.endDate = 1 / 0),
                    n.daysOfWeekDisabled = n.daysOfWeekDisabled || [],
                t.isArray(n.daysOfWeekDisabled) || (n.daysOfWeekDisabled = n.daysOfWeekDisabled.split(/[,\s]*/)),
                    n.daysOfWeekDisabled = t.map(n.daysOfWeekDisabled, function(t) {
                        return parseInt(t, 10)
                    }),
                    n.datesDisabled = n.datesDisabled || [],
                    !t.isArray(n.datesDisabled)) {
                var h = [];
                h.push(D.parseDate(n.datesDisabled, o, n.language)),
                    n.datesDisabled = h
            }
            n.datesDisabled = t.map(n.datesDisabled, function(t) {
                return D.parseDate(t, o, n.language)
            });
            var l = String(n.orientation).toLowerCase().split(/\s+/g)
                , d = n.orientation.toLowerCase();
            if (l = t.grep(l, function(t) {
                    return /^auto|left|right|top|bottom$/.test(t)
                }),
                    n.orientation = {
                        x: "auto",
                        y: "auto"
                    },
                d && "auto" !== d)
                if (1 === l.length)
                    switch (l[0]) {
                        case "top":
                        case "bottom":
                            n.orientation.y = l[0];
                            break;
                        case "left":
                        case "right":
                            n.orientation.x = l[0]
                    }
                else
                    d = t.grep(l, function(t) {
                        return /^left|right$/.test(t)
                    }),
                        n.orientation.x = d[0] || "auto",
                        d = t.grep(l, function(t) {
                            return /^top|bottom$/.test(t)
                        }),
                        n.orientation.y = d[0] || "auto";
            if (n.defaultViewDate) {
                var c = n.defaultViewDate.year || (new Date).getFullYear()
                    , u = n.defaultViewDate.month || 0
                    , f = n.defaultViewDate.day || 1;
                n.defaultViewDate = i(c, u, f)
            } else
                n.defaultViewDate = a();
            n.showOnFocus = n.showOnFocus === e || n.showOnFocus
        },
        _events: [],
        _secondaryEvents: [],
        _applyEvents: function(t) {
            for (var i, a, s, n = 0; n < t.length; n++)
                i = t[n][0],
                    2 === t[n].length ? (a = e,
                        s = t[n][1]) : 3 === t[n].length && (a = t[n][1],
                            s = t[n][2]),
                    i.on(s, a)
        },
        _unapplyEvents: function(t) {
            for (var i, a, s, n = 0; n < t.length; n++)
                i = t[n][0],
                    2 === t[n].length ? (s = e,
                        a = t[n][1]) : 3 === t[n].length && (s = t[n][1],
                            a = t[n][2]),
                    i.off(a, s)
        },
        _buildEvents: function() {
            var e = {
                keyup: t.proxy(function(e) {
                    -1 === t.inArray(e.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) && this.update()
                }, this),
                keydown: t.proxy(this.keydown, this)
            };
            !0 === this.o.showOnFocus && (e.focus = t.proxy(this.show, this)),
                this.isInput ? this._events = [[this.element, e]] : this.component && this.hasInput ? this._events = [[this.element.find("input"), e], [this.component, {
                    click: t.proxy(this.show, this)
                }]] : this.element.is("div") ? this.isInline = !0 : this._events = [[this.element, {
                    click: t.proxy(this.show, this)
                }]],
                this._events.push([this.element, "*", {
                    blur: t.proxy(function(t) {
                        this._focused_from = t.target
                    }, this)
                }], [this.element, {
                    blur: t.proxy(function(t) {
                        this._focused_from = t.target
                    }, this)
                }]),
                this._secondaryEvents = [[this.picker, {
                    click: t.proxy(this.click, this)
                }], [t(window), {
                    resize: t.proxy(this.place, this)
                }], [t(document), {
                    "mousedown touchstart": t.proxy(function(t) {
                        this.element.is(t.target) || this.element.find(t.target).length || this.picker.is(t.target) || this.picker.find(t.target).length || this.hide()
                    }, this)
                }]]
        },
        _attachEvents: function() {
            this._detachEvents(),
                this._applyEvents(this._events)
        },
        _detachEvents: function() {
            this._unapplyEvents(this._events)
        },
        _attachSecondaryEvents: function() {
            this._detachSecondaryEvents(),
                this._applyEvents(this._secondaryEvents)
        },
        _detachSecondaryEvents: function() {
            this._unapplyEvents(this._secondaryEvents)
        },
        _trigger: function(e, i) {
            var a = i || this.dates.get(-1)
                , s = this._utc_to_local(a);
            this.element.trigger({
                type: e,
                date: s,
                dates: t.map(this.dates, this._utc_to_local),
                format: t.proxy(function(t, e) {
                    0 === arguments.length ? (t = this.dates.length - 1,
                        e = this.o.format) : "string" == typeof t && (e = t,
                            t = this.dates.length - 1),
                        e = e || this.o.format;
                    var i = this.dates.get(t);
                    return D.formatDate(i, e, this.o.language)
                }, this)
            })
        },
        show: function() {
            return this.element.attr("readonly") && !1 === this.o.enableOnReadonly ? void 0 : (this.isInline || this.picker.appendTo(this.o.container),
                this.place(),
                this.picker.show(),
                this._attachSecondaryEvents(),
                this._trigger("show"),
            (window.navigator.msMaxTouchPoints || "ontouchstart"in document) && this.o.disableTouchKeyboard && t(this.element).blur(),
                this)
        },
        hide: function() {
            return this.isInline ? this : this.picker.is(":visible") ? (this.focusDate = null,
                this.picker.hide().detach(),
                this._detachSecondaryEvents(),
                this.viewMode = this.o.startView,
                this.showMode(),
            this.o.forceParse && (this.isInput && this.element.val() || this.hasInput && this.element.find("input").val()) && this.setValue(),
                this._trigger("hide"),
                this) : this
        },
        remove: function() {
            return this.hide(),
                this._detachEvents(),
                this._detachSecondaryEvents(),
                this.picker.remove(),
                delete this.element.data().datepicker,
            this.isInput || delete this.element.data().date,
                this
        },
        _utc_to_local: function(t) {
            return t && new Date(t.getTime() + 6e4 * t.getTimezoneOffset())
        },
        _local_to_utc: function(t) {
            return t && new Date(t.getTime() - 6e4 * t.getTimezoneOffset())
        },
        _zero_time: function(t) {
            return t && new Date(t.getFullYear(),t.getMonth(),t.getDate())
        },
        _zero_utc_time: function(t) {
            return t && new Date(Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()))
        },
        getDates: function() {
            return t.map(this.dates, this._utc_to_local)
        },
        getUTCDates: function() {
            return t.map(this.dates, function(t) {
                return new Date(t)
            })
        },
        getDate: function() {
            return this._utc_to_local(this.getUTCDate())
        },
        getUTCDate: function() {
            var t = this.dates.get(-1);
            return void 0 !== t ? new Date(t) : null
        },
        clearDates: function() {
            var t;
            this.isInput ? t = this.element : this.component && (t = this.element.find("input")),
            t && t.val("").change(),
                this.update(),
                this._trigger("changeDate"),
            this.o.autoclose && this.hide()
        },
        setDates: function() {
            var e = t.isArray(arguments[0]) ? arguments[0] : arguments;
            return this.update.apply(this, e),
                this._trigger("changeDate"),
                this.setValue(),
                this
        },
        setUTCDates: function() {
            var e = t.isArray(arguments[0]) ? arguments[0] : arguments;
            return this.update.apply(this, t.map(e, this._utc_to_local)),
                this._trigger("changeDate"),
                this.setValue(),
                this
        },
        setDate: n("setDates"),
        setUTCDate: n("setUTCDates"),
        setValue: function() {
            var t = this.getFormattedDate();
            return this.isInput ? this.element.val(t).change() : this.component && this.element.find("input").val(t).change(),
                this
        },
        getFormattedDate: function(i) {
            i === e && (i = this.o.format);
            var a = this.o.language;
            return t.map(this.dates, function(t) {
                return D.formatDate(t, i, a)
            }).join(this.o.multidateSeparator)
        },
        setStartDate: function(t) {
            return this._process_options({
                startDate: t
            }),
                this.update(),
                this.updateNavArrows(),
                this
        },
        setEndDate: function(t) {
            return this._process_options({
                endDate: t
            }),
                this.update(),
                this.updateNavArrows(),
                this
        },
        setDaysOfWeekDisabled: function(t) {
            return this._process_options({
                daysOfWeekDisabled: t
            }),
                this.update(),
                this.updateNavArrows(),
                this
        },
        setDatesDisabled: function(t) {
            this._process_options({
                datesDisabled: t
            }),
                this.update(),
                this.updateNavArrows()
        },
        place: function() {
            if (this.isInline)
                return this;
            var e = this.picker.outerWidth()
                , i = this.picker.outerHeight()
                , a = t(this.o.container).width()
                , s = t(this.o.container).height()
                , n = t(this.o.container).scrollTop()
                , r = t(this.o.container).offset()
                , o = [];
            this.element.parents().each(function() {
                var e = t(this).css("z-index");
                "auto" !== e && 0 !== e && o.push(parseInt(e))
            });
            var h = Math.max.apply(Math, o) + 10
                , l = this.component ? this.component.parent().offset() : this.element.offset()
                , d = this.component ? this.component.outerHeight(!0) : this.element.outerHeight(!1)
                , c = this.component ? this.component.outerWidth(!0) : this.element.outerWidth(!1)
                , u = l.left - r.left
                , p = l.top - r.top;
            this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"),
                "auto" !== this.o.orientation.x ? (this.picker.addClass("datepicker-orient-" + this.o.orientation.x),
                "right" === this.o.orientation.x && (u -= e - c)) : l.left < 0 ? (this.picker.addClass("datepicker-orient-left"),
                    u -= l.left - 10) : u + e > a ? (this.picker.addClass("datepicker-orient-right"),
                    u = l.left + c - e) : this.picker.addClass("datepicker-orient-left");
            var f, g, D = this.o.orientation.y;
            if ("auto" === D && (f = -n + p - i,
                    g = n + s - (p + d + i),
                    D = Math.max(f, g) === g ? "top" : "bottom"),
                    this.picker.addClass("datepicker-orient-" + D),
                    "top" === D ? p += d : p -= i + parseInt(this.picker.css("padding-top")),
                    this.o.rtl) {
                var v = a - (u + c);
                this.picker.css({
                    top: p,
                    right: v,
                    zIndex: h
                })
            } else
                this.picker.css({
                    top: p,
                    left: u,
                    zIndex: h
                });
            return this
        },
        _allow_update: !0,
        update: function() {
            if (!this._allow_update)
                return this;
            var e = this.dates.copy()
                , i = []
                , a = !1;
            return arguments.length ? (t.each(arguments, t.proxy(function(t, e) {
                e instanceof Date && (e = this._local_to_utc(e)),
                    i.push(e)
            }, this)),
                a = !0) : (i = this.isInput ? this.element.val() : this.element.data("date") || this.element.find("input").val(),
                i = i && this.o.multidate ? i.split(this.o.multidateSeparator) : [i],
                delete this.element.data().date),
                i = t.map(i, t.proxy(function(t) {
                    return D.parseDate(t, this.o.format, this.o.language)
                }, this)),
                i = t.grep(i, t.proxy(function(t) {
                    return t < this.o.startDate || t > this.o.endDate || !t
                }, this), !0),
                this.dates.replace(i),
                this.dates.length ? this.viewDate = new Date(this.dates.get(-1)) : this.viewDate < this.o.startDate ? this.viewDate = new Date(this.o.startDate) : this.viewDate > this.o.endDate && (this.viewDate = new Date(this.o.endDate)),
                a ? this.setValue() : i.length && String(e) !== String(this.dates) && this._trigger("changeDate"),
            !this.dates.length && e.length && this._trigger("clearDate"),
                this.fill(),
                this
        },
        fillDow: function() {
            var t = this.o.weekStart
                , e = "<tr>";
            if (this.o.calendarWeeks) {
                this.picker.find(".datepicker-days thead tr:first-child .datepicker-switch").attr("colspan", function(t, e) {
                    return parseInt(e) + 1
                });
                e += '<th class="cw">&#160;</th>'
            }
            for (; t < this.o.weekStart + 7; )
                e += '<th class="dow">' + g[this.o.language].daysMin[t++ % 7] + "</th>";
            e += "</tr>",
                this.picker.find(".datepicker-days thead").append(e)
        },
        fillMonths: function() {
            for (var t = "", e = 0; 12 > e; )
                t += '<span class="month">' + g[this.o.language].monthsShort[e++] + "</span>";
            this.picker.find(".datepicker-months td").html(t)
        },
        setRange: function(e) {
            e && e.length ? this.range = t.map(e, function(t) {
                return t.valueOf()
            }) : delete this.range,
                this.fill()
        },
        getClassNames: function(e) {
            var i = []
                , a = this.viewDate.getUTCFullYear()
                , n = this.viewDate.getUTCMonth()
                , r = new Date;
            return e.getUTCFullYear() < a || e.getUTCFullYear() === a && e.getUTCMonth() < n ? i.push("old") : (e.getUTCFullYear() > a || e.getUTCFullYear() === a && e.getUTCMonth() > n) && i.push("new"),
            this.focusDate && e.valueOf() === this.focusDate.valueOf() && i.push("focused"),
            this.o.todayHighlight && e.getUTCFullYear() === r.getFullYear() && e.getUTCMonth() === r.getMonth() && e.getUTCDate() === r.getDate() && i.push("today"),
            -1 !== this.dates.contains(e) && i.push("active"),
            (e.valueOf() < this.o.startDate || e.valueOf() > this.o.endDate || -1 !== t.inArray(e.getUTCDay(), this.o.daysOfWeekDisabled)) && i.push("disabled"),
            this.o.datesDisabled.length > 0 && t.grep(this.o.datesDisabled, function(t) {
                return s(e, t)
            }).length > 0 && i.push("disabled", "disabled-date"),
            this.range && (e > this.range[0] && e < this.range[this.range.length - 1] && i.push("range"),
            -1 !== t.inArray(e.valueOf(), this.range) && i.push("selected")),
                i
        },
        fill: function() {
            var a, s = new Date(this.viewDate), n = s.getUTCFullYear(), r = s.getUTCMonth(), o = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCFullYear() : -1 / 0, h = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCMonth() : -1 / 0, l = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCFullYear() : 1 / 0, d = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCMonth() : 1 / 0, c = g[this.o.language].today || g.en.today || "", u = g[this.o.language].clear || g.en.clear || "";
            if (!isNaN(n) && !isNaN(r)) {
                this.picker.find(".datepicker-days thead .datepicker-switch").text(g[this.o.language].months[r] + " " + n),
                    this.picker.find("tfoot .today").text(c).toggle(!1 !== this.o.todayBtn),
                    this.picker.find("tfoot .clear").text(u).toggle(!1 !== this.o.clearBtn),
                    this.updateNavArrows(),
                    this.fillMonths();
                var p = i(n, r - 1, 28)
                    , f = D.getDaysInMonth(p.getUTCFullYear(), p.getUTCMonth());
                p.setUTCDate(f),
                    p.setUTCDate(f - (p.getUTCDay() - this.o.weekStart + 7) % 7);
                var v = new Date(p);
                v.setUTCDate(v.getUTCDate() + 42),
                    v = v.valueOf();
                for (var m, y = []; p.valueOf() < v; ) {
                    if (p.getUTCDay() === this.o.weekStart && (y.push("<tr>"),
                            this.o.calendarWeeks)) {
                        var w = new Date(+p + (this.o.weekStart - p.getUTCDay() - 7) % 7 * 864e5)
                            , k = new Date(Number(w) + (11 - w.getUTCDay()) % 7 * 864e5)
                            , C = new Date(Number(C = i(k.getUTCFullYear(), 0, 1)) + (11 - C.getUTCDay()) % 7 * 864e5)
                            , b = (k - C) / 864e5 / 7 + 1;
                        y.push('<td class="cw">' + b + "</td>")
                    }
                    if (m = this.getClassNames(p),
                            m.push("day"),
                        this.o.beforeShowDay !== t.noop) {
                        var T = this.o.beforeShowDay(this._utc_to_local(p));
                        T === e ? T = {} : "boolean" == typeof T ? T = {
                            enabled: T
                        } : "string" == typeof T && (T = {
                                classes: T
                            }),
                        !1 === T.enabled && m.push("disabled"),
                        T.classes && (m = m.concat(T.classes.split(/\s+/))),
                        T.tooltip && (a = T.tooltip)
                    }
                    m = t.unique(m),
                        y.push('<td class="' + m.join(" ") + '"' + (a ? ' title="' + a + '"' : "") + ">" + p.getUTCDate() + "</td>"),
                        a = null,
                    p.getUTCDay() === this.o.weekEnd && y.push("</tr>"),
                        p.setUTCDate(p.getUTCDate() + 1)
                }
                this.picker.find(".datepicker-days tbody").empty().append(y.join(""));
                var _ = this.picker.find(".datepicker-months").find("th:eq(1)").text(n).end().find("span").removeClass("active");
                if (t.each(this.dates, function(t, e) {
                        e.getUTCFullYear() === n && _.eq(e.getUTCMonth()).addClass("active")
                    }),
                    (o > n || n > l) && _.addClass("disabled"),
                    n === o && _.slice(0, h).addClass("disabled"),
                    n === l && _.slice(d + 1).addClass("disabled"),
                    this.o.beforeShowMonth !== t.noop) {
                    var U = this;
                    t.each(_, function(e, i) {
                        if (!t(i).hasClass("disabled")) {
                            var a = new Date(n,e,1);
                            !1 === U.o.beforeShowMonth(a) && t(i).addClass("disabled")
                        }
                    })
                }
                y = "",
                    n = 10 * parseInt(n / 10, 10);
                var M = this.picker.find(".datepicker-years").find("th:eq(1)").text(n + "-" + (n + 9)).end().find("td");
                n -= 1;
                for (var S, F = t.map(this.dates, function(t) {
                    return t.getUTCFullYear()
                }), x = -1; 11 > x; x++)
                    S = ["year"],
                        -1 === x ? S.push("old") : 10 === x && S.push("new"),
                    -1 !== t.inArray(n, F) && S.push("active"),
                    (o > n || n > l) && S.push("disabled"),
                        y += '<span class="' + S.join(" ") + '">' + n + "</span>",
                        n += 1;
                M.html(y)
            }
        },
        updateNavArrows: function() {
            if (this._allow_update) {
                var t = new Date(this.viewDate)
                    , e = t.getUTCFullYear()
                    , i = t.getUTCMonth();
                switch (this.viewMode) {
                    case 0:
                        this.o.startDate !== -1 / 0 && e <= this.o.startDate.getUTCFullYear() && i <= this.o.startDate.getUTCMonth() ? this.picker.find(".prev").css({
                            visibility: "hidden"
                        }) : this.picker.find(".prev").css({
                            visibility: "visible"
                        }),
                            this.o.endDate !== 1 / 0 && e >= this.o.endDate.getUTCFullYear() && i >= this.o.endDate.getUTCMonth() ? this.picker.find(".next").css({
                                visibility: "hidden"
                            }) : this.picker.find(".next").css({
                                visibility: "visible"
                            });
                        break;
                    case 1:
                    case 2:
                        this.o.startDate !== -1 / 0 && e <= this.o.startDate.getUTCFullYear() ? this.picker.find(".prev").css({
                            visibility: "hidden"
                        }) : this.picker.find(".prev").css({
                            visibility: "visible"
                        }),
                            this.o.endDate !== 1 / 0 && e >= this.o.endDate.getUTCFullYear() ? this.picker.find(".next").css({
                                visibility: "hidden"
                            }) : this.picker.find(".next").css({
                                visibility: "visible"
                            })
                }
            }
        },
        click: function(e) {
            e.preventDefault();
            var a, s, n, r = t(e.target).closest("span, td, th");
            if (1 === r.length)
                switch (r[0].nodeName.toLowerCase()) {
                    case "th":
                        switch (r[0].className) {
                            case "datepicker-switch":
                                this.showMode(1);
                                break;
                            case "prev":
                            case "next":
                                var o = D.modes[this.viewMode].navStep * ("prev" === r[0].className ? -1 : 1);
                                switch (this.viewMode) {
                                    case 0:
                                        this.viewDate = this.moveMonth(this.viewDate, o),
                                            this._trigger("changeMonth", this.viewDate);
                                        break;
                                    case 1:
                                    case 2:
                                        this.viewDate = this.moveYear(this.viewDate, o),
                                        1 === this.viewMode && this._trigger("changeYear", this.viewDate)
                                }
                                this.fill();
                                break;
                            case "today":
                                var h = new Date;
                                h = i(h.getFullYear(), h.getMonth(), h.getDate(), 0, 0, 0),
                                    this.showMode(-2);
                                var l = "linked" === this.o.todayBtn ? null : "view";
                                this._setDate(h, l);
                                break;
                            case "clear":
                                this.clearDates()
                        }
                        break;
                    case "span":
                        r.hasClass("disabled") || (this.viewDate.setUTCDate(1),
                            r.hasClass("month") ? (n = 1,
                                s = r.parent().find("span").index(r),
                                a = this.viewDate.getUTCFullYear(),
                                this.viewDate.setUTCMonth(s),
                                this._trigger("changeMonth", this.viewDate),
                            1 === this.o.minViewMode && this._setDate(i(a, s, n))) : (n = 1,
                                s = 0,
                                a = parseInt(r.text(), 10) || 0,
                                this.viewDate.setUTCFullYear(a),
                                this._trigger("changeYear", this.viewDate),
                            2 === this.o.minViewMode && this._setDate(i(a, s, n))),
                            this.showMode(-1),
                            this.fill());
                        break;
                    case "td":
                        r.hasClass("day") && !r.hasClass("disabled") && (n = parseInt(r.text(), 10) || 1,
                            a = this.viewDate.getUTCFullYear(),
                            s = this.viewDate.getUTCMonth(),
                            r.hasClass("old") ? 0 === s ? (s = 11,
                                a -= 1) : s -= 1 : r.hasClass("new") && (11 === s ? (s = 0,
                                    a += 1) : s += 1),
                            this._setDate(i(a, s, n)))
                }
            this.picker.is(":visible") && this._focused_from && t(this._focused_from).focus(),
                delete this._focused_from
        },
        _toggle_multidate: function(t) {
            var e = this.dates.contains(t);
            if (t || this.dates.clear(),
                    -1 !== e ? (!0 === this.o.multidate || this.o.multidate > 1 || this.o.toggleActive) && this.dates.remove(e) : !1 === this.o.multidate ? (this.dates.clear(),
                        this.dates.push(t)) : this.dates.push(t),
                "number" == typeof this.o.multidate)
                for (; this.dates.length > this.o.multidate; )
                    this.dates.remove(0)
        },
        _setDate: function(t, e) {
            e && "date" !== e || this._toggle_multidate(t && new Date(t)),
            e && "view" !== e || (this.viewDate = t && new Date(t)),
                this.fill(),
                this.setValue(),
            e && "view" === e || this._trigger("changeDate");
            var i;
            this.isInput ? i = this.element : this.component && (i = this.element.find("input")),
            i && i.change(),
            !this.o.autoclose || e && "date" !== e || this.hide()
        },
        moveMonth: function(t, i) {
            if (!t)
                return e;
            if (!i)
                return t;
            var a, s, n = new Date(t.valueOf()), r = n.getUTCDate(), o = n.getUTCMonth(), h = Math.abs(i);
            if (i = i > 0 ? 1 : -1,
                1 === h)
                s = -1 === i ? function() {
                    return n.getUTCMonth() === o
                }
                    : function() {
                        return n.getUTCMonth() !== a
                    }
                    ,
                    a = o + i,
                    n.setUTCMonth(a),
                (0 > a || a > 11) && (a = (a + 12) % 12);
            else {
                for (var l = 0; h > l; l++)
                    n = this.moveMonth(n, i);
                a = n.getUTCMonth(),
                    n.setUTCDate(r),
                    s = function() {
                        return a !== n.getUTCMonth()
                    }
            }
            for (; s(); )
                n.setUTCDate(--r),
                    n.setUTCMonth(a);
            return n
        },
        moveYear: function(t, e) {
            return this.moveMonth(t, 12 * e)
        },
        dateWithinRange: function(t) {
            return t >= this.o.startDate && t <= this.o.endDate
        },
        keydown: function(t) {
            if (!this.picker.is(":visible"))
                return void (27 === t.keyCode && this.show());
            var e, i, s, n = !1, r = this.focusDate || this.viewDate;
            switch (t.keyCode) {
                case 27:
                    this.focusDate ? (this.focusDate = null,
                        this.viewDate = this.dates.get(-1) || this.viewDate,
                        this.fill()) : this.hide(),
                        t.preventDefault();
                    break;
                case 37:
                case 39:
                    if (!this.o.keyboardNavigation)
                        break;
                    e = 37 === t.keyCode ? -1 : 1,
                        t.ctrlKey ? (i = this.moveYear(this.dates.get(-1) || a(), e),
                            s = this.moveYear(r, e),
                            this._trigger("changeYear", this.viewDate)) : t.shiftKey ? (i = this.moveMonth(this.dates.get(-1) || a(), e),
                            s = this.moveMonth(r, e),
                            this._trigger("changeMonth", this.viewDate)) : (i = new Date(this.dates.get(-1) || a()),
                            i.setUTCDate(i.getUTCDate() + e),
                            s = new Date(r),
                            s.setUTCDate(r.getUTCDate() + e)),
                    this.dateWithinRange(s) && (this.focusDate = this.viewDate = s,
                        this.setValue(),
                        this.fill(),
                        t.preventDefault());
                    break;
                case 38:
                case 40:
                    if (!this.o.keyboardNavigation)
                        break;
                    e = 38 === t.keyCode ? -1 : 1,
                        t.ctrlKey ? (i = this.moveYear(this.dates.get(-1) || a(), e),
                            s = this.moveYear(r, e),
                            this._trigger("changeYear", this.viewDate)) : t.shiftKey ? (i = this.moveMonth(this.dates.get(-1) || a(), e),
                            s = this.moveMonth(r, e),
                            this._trigger("changeMonth", this.viewDate)) : (i = new Date(this.dates.get(-1) || a()),
                            i.setUTCDate(i.getUTCDate() + 7 * e),
                            s = new Date(r),
                            s.setUTCDate(r.getUTCDate() + 7 * e)),
                    this.dateWithinRange(s) && (this.focusDate = this.viewDate = s,
                        this.setValue(),
                        this.fill(),
                        t.preventDefault());
                    break;
                case 32:
                    break;
                case 13:
                    r = this.focusDate || this.dates.get(-1) || this.viewDate,
                    this.o.keyboardNavigation && (this._toggle_multidate(r),
                        n = !0),
                        this.focusDate = null,
                        this.viewDate = this.dates.get(-1) || this.viewDate,
                        this.setValue(),
                        this.fill(),
                    this.picker.is(":visible") && (t.preventDefault(),
                        "function" == typeof t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0,
                    this.o.autoclose && this.hide());
                    break;
                case 9:
                    this.focusDate = null,
                        this.viewDate = this.dates.get(-1) || this.viewDate,
                        this.fill(),
                        this.hide()
            }
            if (n) {
                this.dates.length ? this._trigger("changeDate") : this._trigger("clearDate");
                var o;
                this.isInput ? o = this.element : this.component && (o = this.element.find("input")),
                o && o.change()
            }
        },
        showMode: function(t) {
            t && (this.viewMode = Math.max(this.o.minViewMode, Math.min(2, this.viewMode + t))),
                this.picker.children("div").hide().filter(".datepicker-" + D.modes[this.viewMode].clsName).css("display", "block"),
                this.updateNavArrows()
        }
    };
    var d = function(e, i) {
        this.element = t(e),
            this.inputs = t.map(i.inputs, function(t) {
                return t.jquery ? t[0] : t
            }),
            delete i.inputs,
            u.call(t(this.inputs), i).bind("changeDate", t.proxy(this.dateUpdated, this)),
            this.pickers = t.map(this.inputs, function(e) {
                return t(e).data("datepicker")
            }),
            this.updateDates()
    };
    d.prototype = {
        updateDates: function() {
            this.dates = t.map(this.pickers, function(t) {
                return t.getUTCDate()
            }),
                this.updateRanges()
        },
        updateRanges: function() {
            var e = t.map(this.dates, function(t) {
                return t.valueOf()
            });
            t.each(this.pickers, function(t, i) {
                i.setRange(e)
            })
        },
        dateUpdated: function(e) {
            if (!this.updating) {
                this.updating = !0;
                var i = t(e.target).data("datepicker")
                    , a = i.getUTCDate()
                    , s = t.inArray(e.target, this.inputs)
                    , n = s - 1
                    , r = s + 1
                    , o = this.inputs.length;
                if (-1 !== s) {
                    if (t.each(this.pickers, function(t, e) {
                            e.getUTCDate() || e.setUTCDate(a)
                        }),
                        a < this.dates[n])
                        for (; n >= 0 && a < this.dates[n]; )
                            this.pickers[n--].setUTCDate(a);
                    else if (a > this.dates[r])
                        for (; o > r && a > this.dates[r]; )
                            this.pickers[r++].setUTCDate(a);
                    this.updateDates(),
                        delete this.updating
                }
            }
        },
        remove: function() {
            t.map(this.pickers, function(t) {
                t.remove()
            }),
                delete this.element.data().datepicker
        }
    };
    var c = t.fn.datepicker
        , u = function(i) {
        var a = Array.apply(null, arguments);
        a.shift();
        var s;
        return this.each(function() {
            var n = t(this)
                , h = n.data("datepicker")
                , c = "object" == (void 0 === i ? "undefined" : _typeof(i)) && i;
            if (!h) {
                var u = r(this, "date")
                    , f = t.extend({}, p, u, c)
                    , g = o(f.language)
                    , D = t.extend({}, p, g, u, c);
                if (n.hasClass("input-daterange") || D.inputs) {
                    var v = {
                        inputs: D.inputs || n.find("input").toArray()
                    };
                    n.data("datepicker", h = new d(this,t.extend(D, v)))
                } else
                    n.data("datepicker", h = new l(this,D))
            }
            return ("string" != typeof i || "function" != typeof h[i] || (s = h[i].apply(h, a)) === e) && void 0
        }),
            s !== e ? s : this
    };
    t.fn.datepicker = u;
    var p = t.fn.datepicker.defaults = {
        autoclose: !1,
        beforeShowDay: t.noop,
        beforeShowMonth: t.noop,
        calendarWeeks: !1,
        clearBtn: !1,
        toggleActive: !1,
        daysOfWeekDisabled: [],
        datesDisabled: [],
        endDate: 1 / 0,
        forceParse: !0,
        format: "mm/dd/yyyy",
        keyboardNavigation: !0,
        language: "en",
        minViewMode: 0,
        multidate: !1,
        multidateSeparator: ",",
        orientation: "auto",
        rtl: !1,
        startDate: -1 / 0,
        startView: 0,
        todayBtn: !1,
        todayHighlight: !1,
        weekStart: 0,
        disableTouchKeyboard: !1,
        enableOnReadonly: !0,
        container: "body"
    }
        , f = t.fn.datepicker.locale_opts = ["format", "rtl", "weekStart"];
    t.fn.datepicker.Constructor = l;
    var g = t.fn.datepicker.dates = {
        en: {
            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            today: "Today",
            clear: "Clear"
        }
    }
        , D = {
        modes: [{
            clsName: "days",
            navFnc: "Month",
            navStep: 1
        }, {
            clsName: "months",
            navFnc: "FullYear",
            navStep: 1
        }, {
            clsName: "years",
            navFnc: "FullYear",
            navStep: 10
        }],
        isLeapYear: function(t) {
            return t % 4 == 0 && t % 100 != 0 || t % 400 == 0
        },
        getDaysInMonth: function(t, e) {
            return [31, D.isLeapYear(t) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][e]
        },
        validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
        nonpunctuation: /[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,
        parseFormat: function(t) {
            var e = t.replace(this.validParts, "\0").split("\0")
                , i = t.match(this.validParts);
            if (!e || !e.length || !i || 0 === i.length)
                throw new Error("Invalid date format.");
            return {
                separators: e,
                parts: i
            }
        },
        parseDate: function(a, s, n) {
            function r() {
                var t = this.slice(0, u[d].length)
                    , e = u[d].slice(0, t.length);
                return t.toLowerCase() === e.toLowerCase()
            }
            if (!a)
                return e;
            if (a instanceof Date)
                return a;
            "string" == typeof s && (s = D.parseFormat(s));
            var o, h, d, c = /([\-+]\d+)([dmwy])/, u = a.match(/([\-+]\d+)([dmwy])/g);
            if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(a)) {
                for (a = new Date,
                         d = 0; d < u.length; d++)
                    switch (o = c.exec(u[d]),
                        h = parseInt(o[1]),
                        o[2]) {
                        case "d":
                            a.setUTCDate(a.getUTCDate() + h);
                            break;
                        case "m":
                            a = l.prototype.moveMonth.call(l.prototype, a, h);
                            break;
                        case "w":
                            a.setUTCDate(a.getUTCDate() + 7 * h);
                            break;
                        case "y":
                            a = l.prototype.moveYear.call(l.prototype, a, h)
                    }
                return i(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate(), 0, 0, 0)
            }
            u = a && a.match(this.nonpunctuation) || [],
                a = new Date;
            var p, f, v = {}, m = ["yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"], y = {
                yyyy: function(t, e) {
                    return t.setUTCFullYear(e)
                },
                yy: function(t, e) {
                    return t.setUTCFullYear(2e3 + e)
                },
                m: function(t, e) {
                    if (isNaN(t))
                        return t;
                    for (e -= 1; 0 > e; )
                        e += 12;
                    for (e %= 12,
                             t.setUTCMonth(e); t.getUTCMonth() !== e; )
                        t.setUTCDate(t.getUTCDate() - 1);
                    return t
                },
                d: function(t, e) {
                    return t.setUTCDate(e)
                }
            };
            y.M = y.MM = y.mm = y.m,
                y.dd = y.d,
                a = i(a.getFullYear(), a.getMonth(), a.getDate(), 0, 0, 0);
            var w = s.parts.slice();
            if (u.length !== w.length && (w = t(w).filter(function(e, i) {
                    return -1 !== t.inArray(i, m)
                }).toArray()),
                u.length === w.length) {
                var k;
                for (d = 0,
                         k = w.length; k > d; d++) {
                    if (p = parseInt(u[d], 10),
                            o = w[d],
                            isNaN(p))
                        switch (o) {
                            case "MM":
                                f = t(g[n].months).filter(r),
                                    p = t.inArray(f[0], g[n].months) + 1;
                                break;
                            case "M":
                                f = t(g[n].monthsShort).filter(r),
                                    p = t.inArray(f[0], g[n].monthsShort) + 1
                        }
                    v[o] = p
                }
                var C, b;
                for (d = 0; d < m.length; d++)
                    (b = m[d])in v && !isNaN(v[b]) && (C = new Date(a),
                        y[b](C, v[b]),
                    isNaN(C) || (a = C))
            }
            return a
        },
        formatDate: function(e, i, a) {
            if (!e)
                return "";
            "string" == typeof i && (i = D.parseFormat(i));
            var s = {
                d: e.getUTCDate(),
                D: g[a].daysShort[e.getUTCDay()],
                DD: g[a].days[e.getUTCDay()],
                m: e.getUTCMonth() + 1,
                M: g[a].monthsShort[e.getUTCMonth()],
                MM: g[a].months[e.getUTCMonth()],
                yy: e.getUTCFullYear().toString().substring(2),
                yyyy: e.getUTCFullYear()
            };
            s.dd = (s.d < 10 ? "0" : "") + s.d,
                s.mm = (s.m < 10 ? "0" : "") + s.m,
                e = [];
            for (var n = t.extend([], i.separators), r = 0, o = i.parts.length; o >= r; r++)
                n.length && e.push(n.shift()),
                    e.push(s[i.parts[r]]);
            return e.join("")
        },
        headTemplate: '<thead><tr><th class="prev">&#171;</th><th colspan="5" class="datepicker-switch"></th><th class="next">&#187;</th></tr></thead>',
        contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
        footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'
    };
    D.template = '<div class="datepicker"><div class="datepicker-days"><table class=" table-condensed">' + D.headTemplate + "<tbody></tbody>" + D.footTemplate + '</table></div><div class="datepicker-months"><table class="table-condensed">' + D.headTemplate + D.contTemplate + D.footTemplate + '</table></div><div class="datepicker-years"><table class="table-condensed">' + D.headTemplate + D.contTemplate + D.footTemplate + "</table></div></div>",
        t.fn.datepicker.DPGlobal = D,
        t.fn.datepicker.noConflict = function() {
            return t.fn.datepicker = c,
                this
        }
        ,
        t.fn.datepicker.version = "1.4.1",
        t(document).on("focus.datepicker.data-api click.datepicker.data-api", '[data-provide="datepicker"]', function(e) {
            var i = t(this);
            i.data("datepicker") || (e.preventDefault(),
                u.call(i, "show"))
        }),
        t(function() {
            u.call(t('[data-provide="datepicker-inline"]'))
        })
}(window.jQuery);
"use strict";
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
;
!function() {
    var e, a = function a(s, i) {
        function r(e) {
            return Math.floor(e)
        }
        function n() {
            var e = T.params.autoplay
                , a = T.slides.eq(T.activeIndex);
            a.attr("data-swiper-autoplay") && (e = a.attr("data-swiper-autoplay") || T.params.autoplay),
                T.autoplayTimeoutId = setTimeout(function() {
                    T.params.loop ? (T.fixLoop(),
                        T._slideNext(),
                        T.emit("onAutoplay", T)) : T.isEnd ? i.autoplayStopOnLast ? T.stopAutoplay() : (T._slideTo(0),
                        T.emit("onAutoplay", T)) : (T._slideNext(),
                        T.emit("onAutoplay", T))
                }, e)
        }
        function o(a, t) {
            var s = e(a.target);
            if (!s.is(t))
                if ("string" == typeof t)
                    s = s.parents(t);
                else if (t.nodeType) {
                    var i;
                    return s.parents().each(function(e, a) {
                        a === t && (i = t)
                    }),
                        i ? t : void 0
                }
            if (0 !== s.length)
                return s[0]
        }
        function l(e, a) {
            a = a || {};
            var t = window.MutationObserver || window.WebkitMutationObserver
                , s = new t(function(e) {
                    e.forEach(function(e) {
                        T.onResize(!0),
                            T.emit("onObserverUpdate", T, e)
                    })
                }
            );
            s.observe(e, {
                attributes: void 0 === a.attributes || a.attributes,
                childList: void 0 === a.childList || a.childList,
                characterData: void 0 === a.characterData || a.characterData
            }),
                T.observers.push(s)
        }
        function p(e) {
            e.originalEvent && (e = e.originalEvent);
            var a = e.keyCode || e.charCode;
            if (!T.params.allowSwipeToNext && (T.isHorizontal() && 39 === a || !T.isHorizontal() && 40 === a))
                return !1;
            if (!T.params.allowSwipeToPrev && (T.isHorizontal() && 37 === a || !T.isHorizontal() && 38 === a))
                return !1;
            if (!(e.shiftKey || e.altKey || e.ctrlKey || e.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
                if (37 === a || 39 === a || 38 === a || 40 === a) {
                    var t = !1;
                    if (T.container.parents("." + T.params.slideClass).length > 0 && 0 === T.container.parents("." + T.params.slideActiveClass).length)
                        return;
                    var s = {
                        left: window.pageXOffset,
                        top: window.pageYOffset
                    }
                        , i = window.innerWidth
                        , r = window.innerHeight
                        , n = T.container.offset();
                    T.rtl && (n.left = n.left - T.container[0].scrollLeft);
                    for (var o = [[n.left, n.top], [n.left + T.width, n.top], [n.left, n.top + T.height], [n.left + T.width, n.top + T.height]], l = 0; l < o.length; l++) {
                        var p = o[l];
                        p[0] >= s.left && p[0] <= s.left + i && p[1] >= s.top && p[1] <= s.top + r && (t = !0)
                    }
                    if (!t)
                        return
                }
                T.isHorizontal() ? (37 !== a && 39 !== a || (e.preventDefault ? e.preventDefault() : e.returnValue = !1),
                (39 === a && !T.rtl || 37 === a && T.rtl) && T.slideNext(),
                (37 === a && !T.rtl || 39 === a && T.rtl) && T.slidePrev()) : (38 !== a && 40 !== a || (e.preventDefault ? e.preventDefault() : e.returnValue = !1),
                40 === a && T.slideNext(),
                38 === a && T.slidePrev())
            }
        }
        function d(e) {
            e.originalEvent && (e = e.originalEvent);
            var a = 0
                , t = T.rtl ? -1 : 1
                , s = u(e);
            if (T.params.mousewheelForceToAxis)
                if (T.isHorizontal()) {
                    if (!(Math.abs(s.pixelX) > Math.abs(s.pixelY)))
                        return;
                    a = s.pixelX * t
                } else {
                    if (!(Math.abs(s.pixelY) > Math.abs(s.pixelX)))
                        return;
                    a = s.pixelY
                }
            else
                a = Math.abs(s.pixelX) > Math.abs(s.pixelY) ? -s.pixelX * t : -s.pixelY;
            if (0 !== a) {
                if (T.params.mousewheelInvert && (a = -a),
                        T.params.freeMode) {
                    var i = T.getWrapperTranslate() + a * T.params.mousewheelSensitivity
                        , r = T.isBeginning
                        , n = T.isEnd;
                    if (i >= T.minTranslate() && (i = T.minTranslate()),
                        i <= T.maxTranslate() && (i = T.maxTranslate()),
                            T.setWrapperTransition(0),
                            T.setWrapperTranslate(i),
                            T.updateProgress(),
                            T.updateActiveIndex(),
                        (!r && T.isBeginning || !n && T.isEnd) && T.updateClasses(),
                            T.params.freeModeSticky ? (clearTimeout(T.mousewheel.timeout),
                                T.mousewheel.timeout = setTimeout(function() {
                                    T.slideReset()
                                }, 300)) : T.params.lazyLoading && T.lazy && T.lazy.load(),
                            T.emit("onScroll", T, e),
                        T.params.autoplay && T.params.autoplayDisableOnInteraction && T.stopAutoplay(),
                        0 === i || i === T.maxTranslate())
                        return
                } else {
                    if ((new window.Date).getTime() - T.mousewheel.lastScrollTime > 60)
                        if (a < 0)
                            if (T.isEnd && !T.params.loop || T.animating) {
                                if (T.params.mousewheelReleaseOnEdges)
                                    return !0
                            } else
                                T.slideNext(),
                                    T.emit("onScroll", T, e);
                        else if (T.isBeginning && !T.params.loop || T.animating) {
                            if (T.params.mousewheelReleaseOnEdges)
                                return !0
                        } else
                            T.slidePrev(),
                                T.emit("onScroll", T, e);
                    T.mousewheel.lastScrollTime = (new window.Date).getTime()
                }
                return e.preventDefault ? e.preventDefault() : e.returnValue = !1,
                    !1
            }
        }
        function u(e) {
            var a = 0
                , t = 0
                , s = 0
                , i = 0;
            return "detail"in e && (t = e.detail),
            "wheelDelta"in e && (t = -e.wheelDelta / 120),
            "wheelDeltaY"in e && (t = -e.wheelDeltaY / 120),
            "wheelDeltaX"in e && (a = -e.wheelDeltaX / 120),
            "axis"in e && e.axis === e.HORIZONTAL_AXIS && (a = t,
                t = 0),
                s = 10 * a,
                i = 10 * t,
            "deltaY"in e && (i = e.deltaY),
            "deltaX"in e && (s = e.deltaX),
            (s || i) && e.deltaMode && (1 === e.deltaMode ? (s *= 40,
                i *= 40) : (s *= 800,
                i *= 800)),
            s && !a && (a = s < 1 ? -1 : 1),
            i && !t && (t = i < 1 ? -1 : 1),
                {
                    spinX: a,
                    spinY: t,
                    pixelX: s,
                    pixelY: i
                }
        }
        function c(a, t) {
            a = e(a);
            var s, i, r, n = T.rtl ? -1 : 1;
            s = a.attr("data-swiper-parallax") || "0",
                i = a.attr("data-swiper-parallax-x"),
                r = a.attr("data-swiper-parallax-y"),
                i || r ? (i = i || "0",
                    r = r || "0") : T.isHorizontal() ? (i = s,
                    r = "0") : (r = s,
                    i = "0"),
                i = i.indexOf("%") >= 0 ? parseInt(i, 10) * t * n + "%" : i * t * n + "px",
                r = r.indexOf("%") >= 0 ? parseInt(r, 10) * t + "%" : r * t + "px",
                a.transform("translate3d(" + i + ", " + r + ",0px)")
        }
        function m(e) {
            return 0 !== e.indexOf("on") && (e = e[0] !== e[0].toUpperCase() ? "on" + e[0].toUpperCase() + e.substring(1) : "on" + e),
                e
        }
        if (!(this instanceof a))
            return new a(s,i);
        var h = {
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            autoplay: !1,
            autoplayDisableOnInteraction: !0,
            autoplayStopOnLast: !1,
            iOSEdgeSwipeDetection: !1,
            iOSEdgeSwipeThreshold: 20,
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
            coverflow: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: !0
            },
            flip: {
                slideShadows: !0,
                limitRotation: !0
            },
            cube: {
                slideShadows: !0,
                shadow: !0,
                shadowOffset: 20,
                shadowScale: .94
            },
            fade: {
                crossFade: !1
            },
            parallax: !1,
            zoom: !1,
            zoomMax: 3,
            zoomMin: 1,
            zoomToggle: !0,
            scrollbar: null,
            scrollbarHide: !0,
            scrollbarDraggable: !1,
            scrollbarSnapOnRelease: !1,
            keyboardControl: !1,
            mousewheelControl: !1,
            mousewheelReleaseOnEdges: !1,
            mousewheelInvert: !1,
            mousewheelForceToAxis: !1,
            mousewheelSensitivity: 1,
            mousewheelEventsTarged: "container",
            hashnav: !1,
            hashnavWatchState: !1,
            history: !1,
            replaceState: !1,
            breakpoints: void 0,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            centeredSlides: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            onlyExternal: !1,
            threshold: 0,
            touchMoveStopPropagation: !0,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            pagination: null,
            paginationElement: "span",
            paginationClickable: !1,
            paginationHide: !1,
            paginationBulletRender: null,
            paginationProgressRender: null,
            paginationFractionRender: null,
            paginationCustomRender: null,
            paginationType: "bullets",
            resistance: !0,
            resistanceRatio: .85,
            nextButton: null,
            prevButton: null,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            lazyLoading: !1,
            lazyLoadingInPrevNext: !1,
            lazyLoadingInPrevNextAmount: 1,
            lazyLoadingOnTransitionStart: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            control: void 0,
            controlInverse: !1,
            controlBy: "slide",
            normalizeSlideIndex: !0,
            allowSwipeToPrev: !0,
            allowSwipeToNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            passiveListeners: !0,
            containerModifierClass: "swiper-container-",
            slideClass: "swiper-slide",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
            buttonDisabledClass: "swiper-button-disabled",
            paginationCurrentClass: "swiper-pagination-current",
            paginationTotalClass: "swiper-pagination-total",
            paginationHiddenClass: "swiper-pagination-hidden",
            paginationProgressbarClass: "swiper-pagination-progressbar",
            paginationClickableClass: "swiper-pagination-clickable",
            paginationModifierClass: "swiper-pagination-",
            lazyLoadingClass: "swiper-lazy",
            lazyStatusLoadingClass: "swiper-lazy-loading",
            lazyStatusLoadedClass: "swiper-lazy-loaded",
            lazyPreloaderClass: "swiper-lazy-preloader",
            notificationClass: "swiper-notification",
            preloaderClass: "preloader",
            zoomContainerClass: "swiper-zoom-container",
            observer: !1,
            observeParents: !1,
            a11y: !1,
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
            firstSlideMessage: "This is the first slide",
            lastSlideMessage: "This is the last slide",
            paginationBulletMessage: "Go to slide {{index}}",
            runCallbacksOnInit: !0
        }
            , g = i && i.virtualTranslate;
        i = i || {};
        var f = {};
        for (var v in i)
            if ("object" != _typeof(i[v]) || null === i[v] || i[v].nodeType || i[v] === window || i[v] === document || void 0 !== t && i[v]instanceof t || "undefined" != typeof jQuery && i[v]instanceof jQuery)
                f[v] = i[v];
            else {
                f[v] = {};
                for (var w in i[v])
                    f[v][w] = i[v][w]
            }
        for (var y in h)
            if (void 0 === i[y])
                i[y] = h[y];
            else if ("object" == _typeof(i[y]))
                for (var x in h[y])
                    void 0 === i[y][x] && (i[y][x] = h[y][x]);
        var T = this;
        if (T.params = i,
                T.originalParams = f,
                T.classNames = [],
            void 0 !== e && void 0 !== t && (e = t),
            (void 0 !== e || (e = void 0 === t ? window.Dom7 || window.Zepto || window.jQuery : t)) && (T.$ = e,
                T.currentBreakpoint = void 0,
                T.getActiveBreakpoint = function() {
                    if (!T.params.breakpoints)
                        return !1;
                    var e, a = !1, t = [];
                    for (e in T.params.breakpoints)
                        T.params.breakpoints.hasOwnProperty(e) && t.push(e);
                    t.sort(function(e, a) {
                        return parseInt(e, 10) > parseInt(a, 10)
                    });
                    for (var s = 0; s < t.length; s++)
                        (e = t[s]) >= window.innerWidth && !a && (a = e);
                    return a || "max"
                }
                ,
                T.setBreakpoint = function() {
                    var e = T.getActiveBreakpoint();
                    if (e && T.currentBreakpoint !== e) {
                        var a = e in T.params.breakpoints ? T.params.breakpoints[e] : T.originalParams
                            , t = T.params.loop && a.slidesPerView !== T.params.slidesPerView;
                        for (var s in a)
                            T.params[s] = a[s];
                        T.currentBreakpoint = e,
                        t && T.destroyLoop && T.reLoop(!0)
                    }
                }
                ,
            T.params.breakpoints && T.setBreakpoint(),
                T.container = e(s),
            0 !== T.container.length)) {
            if (T.container.length > 1) {
                var b = [];
                return T.container.each(function() {
                    b.push(new a(this,i))
                }),
                    b
            }
            T.container[0].swiper = T,
                T.container.data("swiper", T),
                T.classNames.push(T.params.containerModifierClass + T.params.direction),
            T.params.freeMode && T.classNames.push(T.params.containerModifierClass + "free-mode"),
            T.support.flexbox || (T.classNames.push(T.params.containerModifierClass + "no-flexbox"),
                T.params.slidesPerColumn = 1),
            T.params.autoHeight && T.classNames.push(T.params.containerModifierClass + "autoheight"),
            (T.params.parallax || T.params.watchSlidesVisibility) && (T.params.watchSlidesProgress = !0),
            T.params.touchReleaseOnEdges && (T.params.resistanceRatio = 0),
            ["cube", "coverflow", "flip"].indexOf(T.params.effect) >= 0 && (T.support.transforms3d ? (T.params.watchSlidesProgress = !0,
                T.classNames.push(T.params.containerModifierClass + "3d")) : T.params.effect = "slide"),
            "slide" !== T.params.effect && T.classNames.push(T.params.containerModifierClass + T.params.effect),
            "cube" === T.params.effect && (T.params.resistanceRatio = 0,
                T.params.slidesPerView = 1,
                T.params.slidesPerColumn = 1,
                T.params.slidesPerGroup = 1,
                T.params.centeredSlides = !1,
                T.params.spaceBetween = 0,
                T.params.virtualTranslate = !0,
                T.params.setWrapperSize = !1),
            "fade" !== T.params.effect && "flip" !== T.params.effect || (T.params.slidesPerView = 1,
                T.params.slidesPerColumn = 1,
                T.params.slidesPerGroup = 1,
                T.params.watchSlidesProgress = !0,
                T.params.spaceBetween = 0,
                T.params.setWrapperSize = !1,
            void 0 === g && (T.params.virtualTranslate = !0)),
            T.params.grabCursor && T.support.touch && (T.params.grabCursor = !1),
                T.wrapper = T.container.children("." + T.params.wrapperClass),
            T.params.pagination && (T.paginationContainer = e(T.params.pagination),
            T.params.uniqueNavElements && "string" == typeof T.params.pagination && T.paginationContainer.length > 1 && 1 === T.container.find(T.params.pagination).length && (T.paginationContainer = T.container.find(T.params.pagination)),
                "bullets" === T.params.paginationType && T.params.paginationClickable ? T.paginationContainer.addClass(T.params.paginationModifierClass + "clickable") : T.params.paginationClickable = !1,
                T.paginationContainer.addClass(T.params.paginationModifierClass + T.params.paginationType)),
            (T.params.nextButton || T.params.prevButton) && (T.params.nextButton && (T.nextButton = e(T.params.nextButton),
            T.params.uniqueNavElements && "string" == typeof T.params.nextButton && T.nextButton.length > 1 && 1 === T.container.find(T.params.nextButton).length && (T.nextButton = T.container.find(T.params.nextButton))),
            T.params.prevButton && (T.prevButton = e(T.params.prevButton),
            T.params.uniqueNavElements && "string" == typeof T.params.prevButton && T.prevButton.length > 1 && 1 === T.container.find(T.params.prevButton).length && (T.prevButton = T.container.find(T.params.prevButton)))),
                T.isHorizontal = function() {
                    return "horizontal" === T.params.direction
                }
                ,
                T.rtl = T.isHorizontal() && ("rtl" === T.container[0].dir.toLowerCase() || "rtl" === T.container.css("direction")),
            T.rtl && T.classNames.push(T.params.containerModifierClass + "rtl"),
            T.rtl && (T.wrongRTL = "-webkit-box" === T.wrapper.css("display")),
            T.params.slidesPerColumn > 1 && T.classNames.push(T.params.containerModifierClass + "multirow"),
            T.device.android && T.classNames.push(T.params.containerModifierClass + "android"),
                T.container.addClass(T.classNames.join(" ")),
                T.translate = 0,
                T.progress = 0,
                T.velocity = 0,
                T.lockSwipeToNext = function() {
                    T.params.allowSwipeToNext = !1,
                    !1 === T.params.allowSwipeToPrev && T.params.grabCursor && T.unsetGrabCursor()
                }
                ,
                T.lockSwipeToPrev = function() {
                    T.params.allowSwipeToPrev = !1,
                    !1 === T.params.allowSwipeToNext && T.params.grabCursor && T.unsetGrabCursor()
                }
                ,
                T.lockSwipes = function() {
                    T.params.allowSwipeToNext = T.params.allowSwipeToPrev = !1,
                    T.params.grabCursor && T.unsetGrabCursor()
                }
                ,
                T.unlockSwipeToNext = function() {
                    T.params.allowSwipeToNext = !0,
                    !0 === T.params.allowSwipeToPrev && T.params.grabCursor && T.setGrabCursor()
                }
                ,
                T.unlockSwipeToPrev = function() {
                    T.params.allowSwipeToPrev = !0,
                    !0 === T.params.allowSwipeToNext && T.params.grabCursor && T.setGrabCursor()
                }
                ,
                T.unlockSwipes = function() {
                    T.params.allowSwipeToNext = T.params.allowSwipeToPrev = !0,
                    T.params.grabCursor && T.setGrabCursor()
                }
                ,
                T.setGrabCursor = function(e) {
                    T.container[0].style.cursor = "move",
                        T.container[0].style.cursor = e ? "-webkit-grabbing" : "-webkit-grab",
                        T.container[0].style.cursor = e ? "-moz-grabbin" : "-moz-grab",
                        T.container[0].style.cursor = e ? "grabbing" : "grab"
                }
                ,
                T.unsetGrabCursor = function() {
                    T.container[0].style.cursor = ""
                }
                ,
            T.params.grabCursor && T.setGrabCursor(),
                T.imagesToLoad = [],
                T.imagesLoaded = 0,
                T.loadImage = function(e, a, t, s, i, r) {
                    function n() {
                        r && r()
                    }
                    var o;
                    e.complete && i ? n() : a ? (o = new window.Image,
                        o.onload = n,
                        o.onerror = n,
                    s && (o.sizes = s),
                    t && (o.srcset = t),
                    a && (o.src = a)) : n()
                }
                ,
                T.preloadImages = function() {
                    function e() {
                        void 0 !== T && null !== T && T && (void 0 !== T.imagesLoaded && T.imagesLoaded++,
                        T.imagesLoaded === T.imagesToLoad.length && (T.params.updateOnImagesReady && T.update(),
                            T.emit("onImagesReady", T)))
                    }
                    T.imagesToLoad = T.container.find("img");
                    for (var a = 0; a < T.imagesToLoad.length; a++)
                        T.loadImage(T.imagesToLoad[a], T.imagesToLoad[a].currentSrc || T.imagesToLoad[a].getAttribute("src"), T.imagesToLoad[a].srcset || T.imagesToLoad[a].getAttribute("srcset"), T.imagesToLoad[a].sizes || T.imagesToLoad[a].getAttribute("sizes"), !0, e)
                }
                ,
                T.autoplayTimeoutId = void 0,
                T.autoplaying = !1,
                T.autoplayPaused = !1,
                T.startAutoplay = function() {
                    return void 0 === T.autoplayTimeoutId && !!T.params.autoplay && !T.autoplaying && (T.autoplaying = !0,
                            T.emit("onAutoplayStart", T),
                            void n())
                }
                ,
                T.stopAutoplay = function(e) {
                    T.autoplayTimeoutId && (T.autoplayTimeoutId && clearTimeout(T.autoplayTimeoutId),
                        T.autoplaying = !1,
                        T.autoplayTimeoutId = void 0,
                        T.emit("onAutoplayStop", T))
                }
                ,
                T.pauseAutoplay = function(e) {
                    T.autoplayPaused || (T.autoplayTimeoutId && clearTimeout(T.autoplayTimeoutId),
                        T.autoplayPaused = !0,
                        0 === e ? (T.autoplayPaused = !1,
                            n()) : T.wrapper.transitionEnd(function() {
                            T && (T.autoplayPaused = !1,
                                T.autoplaying ? n() : T.stopAutoplay())
                        }))
                }
                ,
                T.minTranslate = function() {
                    return -T.snapGrid[0]
                }
                ,
                T.maxTranslate = function() {
                    return -T.snapGrid[T.snapGrid.length - 1]
                }
                ,
                T.updateAutoHeight = function() {
                    var e, a = [], t = 0;
                    if ("auto" !== T.params.slidesPerView && T.params.slidesPerView > 1)
                        for (e = 0; e < Math.ceil(T.params.slidesPerView); e++) {
                            var s = T.activeIndex + e;
                            if (s > T.slides.length)
                                break;
                            a.push(T.slides.eq(s)[0])
                        }
                    else
                        a.push(T.slides.eq(T.activeIndex)[0]);
                    for (e = 0; e < a.length; e++)
                        if (void 0 !== a[e]) {
                            var i = a[e].offsetHeight;
                            t = i > t ? i : t
                        }
                    t && T.wrapper.css("height", t + "px")
                }
                ,
                T.updateContainerSize = function() {
                    var e, a;
                    e = void 0 !== T.params.width ? T.params.width : T.container[0].clientWidth,
                        a = void 0 !== T.params.height ? T.params.height : T.container[0].clientHeight,
                    0 === e && T.isHorizontal() || 0 === a && !T.isHorizontal() || (e = e - parseInt(T.container.css("padding-left"), 10) - parseInt(T.container.css("padding-right"), 10),
                        a = a - parseInt(T.container.css("padding-top"), 10) - parseInt(T.container.css("padding-bottom"), 10),
                        T.width = e,
                        T.height = a,
                        T.size = T.isHorizontal() ? T.width : T.height)
                }
                ,
                T.updateSlidesSize = function() {
                    T.slides = T.wrapper.children("." + T.params.slideClass),
                        T.snapGrid = [],
                        T.slidesGrid = [],
                        T.slidesSizesGrid = [];
                    var e, a = T.params.spaceBetween, t = -T.params.slidesOffsetBefore, s = 0, i = 0;
                    if (void 0 !== T.size) {
                        "string" == typeof a && a.indexOf("%") >= 0 && (a = parseFloat(a.replace("%", "")) / 100 * T.size),
                            T.virtualSize = -a,
                            T.rtl ? T.slides.css({
                                marginLeft: "",
                                marginTop: ""
                            }) : T.slides.css({
                                marginRight: "",
                                marginBottom: ""
                            });
                        var n;
                        T.params.slidesPerColumn > 1 && (n = Math.floor(T.slides.length / T.params.slidesPerColumn) === T.slides.length / T.params.slidesPerColumn ? T.slides.length : Math.ceil(T.slides.length / T.params.slidesPerColumn) * T.params.slidesPerColumn,
                        "auto" !== T.params.slidesPerView && "row" === T.params.slidesPerColumnFill && (n = Math.max(n, T.params.slidesPerView * T.params.slidesPerColumn)));
                        var o, l = T.params.slidesPerColumn, p = n / l, d = p - (T.params.slidesPerColumn * p - T.slides.length);
                        for (e = 0; e < T.slides.length; e++) {
                            o = 0;
                            var u = T.slides.eq(e);
                            if (T.params.slidesPerColumn > 1) {
                                var c, m, h;
                                "column" === T.params.slidesPerColumnFill ? (m = Math.floor(e / l),
                                    h = e - m * l,
                                (m > d || m === d && h === l - 1) && ++h >= l && (h = 0,
                                    m++),
                                    c = m + h * n / l,
                                    u.css({
                                        "-webkit-box-ordinal-group": c,
                                        "-moz-box-ordinal-group": c,
                                        "-ms-flex-order": c,
                                        "-webkit-order": c,
                                        order: c
                                    })) : (h = Math.floor(e / p),
                                    m = e - h * p),
                                    u.css("margin-" + (T.isHorizontal() ? "top" : "left"), 0 !== h && T.params.spaceBetween && T.params.spaceBetween + "px").attr("data-swiper-column", m).attr("data-swiper-row", h)
                            }
                            "none" !== u.css("display") && ("auto" === T.params.slidesPerView ? (o = T.isHorizontal() ? u.outerWidth(!0) : u.outerHeight(!0),
                            T.params.roundLengths && (o = r(o))) : (o = (T.size - (T.params.slidesPerView - 1) * a) / T.params.slidesPerView,
                            T.params.roundLengths && (o = r(o)),
                                T.isHorizontal() ? T.slides[e].style.width = o + "px" : T.slides[e].style.height = o + "px"),
                                T.slides[e].swiperSlideSize = o,
                                T.slidesSizesGrid.push(o),
                                T.params.centeredSlides ? (t = t + o / 2 + s / 2 + a,
                                0 === e && (t = t - T.size / 2 - a),
                                Math.abs(t) < .001 && (t = 0),
                                i % T.params.slidesPerGroup == 0 && T.snapGrid.push(t),
                                    T.slidesGrid.push(t)) : (i % T.params.slidesPerGroup == 0 && T.snapGrid.push(t),
                                    T.slidesGrid.push(t),
                                    t = t + o + a),
                                T.virtualSize += o + a,
                                s = o,
                                i++)
                        }
                        T.virtualSize = Math.max(T.virtualSize, T.size) + T.params.slidesOffsetAfter;
                        var g;
                        if (T.rtl && T.wrongRTL && ("slide" === T.params.effect || "coverflow" === T.params.effect) && T.wrapper.css({
                                width: T.virtualSize + T.params.spaceBetween + "px"
                            }),
                            T.support.flexbox && !T.params.setWrapperSize || (T.isHorizontal() ? T.wrapper.css({
                                width: T.virtualSize + T.params.spaceBetween + "px"
                            }) : T.wrapper.css({
                                height: T.virtualSize + T.params.spaceBetween + "px"
                            })),
                            T.params.slidesPerColumn > 1 && (T.virtualSize = (o + T.params.spaceBetween) * n,
                                T.virtualSize = Math.ceil(T.virtualSize / T.params.slidesPerColumn) - T.params.spaceBetween,
                                T.isHorizontal() ? T.wrapper.css({
                                    width: T.virtualSize + T.params.spaceBetween + "px"
                                }) : T.wrapper.css({
                                    height: T.virtualSize + T.params.spaceBetween + "px"
                                }),
                                T.params.centeredSlides)) {
                            for (g = [],
                                     e = 0; e < T.snapGrid.length; e++)
                                T.snapGrid[e] < T.virtualSize + T.snapGrid[0] && g.push(T.snapGrid[e]);
                            T.snapGrid = g
                        }
                        if (!T.params.centeredSlides) {
                            for (g = [],
                                     e = 0; e < T.snapGrid.length; e++)
                                T.snapGrid[e] <= T.virtualSize - T.size && g.push(T.snapGrid[e]);
                            T.snapGrid = g,
                            Math.floor(T.virtualSize - T.size) - Math.floor(T.snapGrid[T.snapGrid.length - 1]) > 1 && T.snapGrid.push(T.virtualSize - T.size)
                        }
                        0 === T.snapGrid.length && (T.snapGrid = [0]),
                        0 !== T.params.spaceBetween && (T.isHorizontal() ? T.rtl ? T.slides.css({
                            marginLeft: a + "px"
                        }) : T.slides.css({
                            marginRight: a + "px"
                        }) : T.slides.css({
                            marginBottom: a + "px"
                        })),
                        T.params.watchSlidesProgress && T.updateSlidesOffset()
                    }
                }
                ,
                T.updateSlidesOffset = function() {
                    for (var e = 0; e < T.slides.length; e++)
                        T.slides[e].swiperSlideOffset = T.isHorizontal() ? T.slides[e].offsetLeft : T.slides[e].offsetTop
                }
                ,
                T.currentSlidesPerView = function() {
                    var e, a, t = 1;
                    if (T.params.centeredSlides) {
                        var s, i = T.slides[T.activeIndex].swiperSlideSize;
                        for (e = T.activeIndex + 1; e < T.slides.length; e++)
                            T.slides[e] && !s && (i += T.slides[e].swiperSlideSize,
                                t++,
                            i > T.size && (s = !0));
                        for (a = T.activeIndex - 1; a >= 0; a--)
                            T.slides[a] && !s && (i += T.slides[a].swiperSlideSize,
                                t++,
                            i > T.size && (s = !0))
                    } else
                        for (e = T.activeIndex + 1; e < T.slides.length; e++)
                            T.slidesGrid[e] - T.slidesGrid[T.activeIndex] < T.size && t++;
                    return t
                }
                ,
                T.updateSlidesProgress = function(e) {
                    if (void 0 === e && (e = T.translate || 0),
                        0 !== T.slides.length) {
                        void 0 === T.slides[0].swiperSlideOffset && T.updateSlidesOffset();
                        var a = -e;
                        T.rtl && (a = e),
                            T.slides.removeClass(T.params.slideVisibleClass);
                        for (var t = 0; t < T.slides.length; t++) {
                            var s = T.slides[t]
                                , i = (a + (T.params.centeredSlides ? T.minTranslate() : 0) - s.swiperSlideOffset) / (s.swiperSlideSize + T.params.spaceBetween);
                            if (T.params.watchSlidesVisibility) {
                                var r = -(a - s.swiperSlideOffset)
                                    , n = r + T.slidesSizesGrid[t];
                                (r >= 0 && r < T.size || n > 0 && n <= T.size || r <= 0 && n >= T.size) && T.slides.eq(t).addClass(T.params.slideVisibleClass)
                            }
                            s.progress = T.rtl ? -i : i
                        }
                    }
                }
                ,
                T.updateProgress = function(e) {
                    void 0 === e && (e = T.translate || 0);
                    var a = T.maxTranslate() - T.minTranslate()
                        , t = T.isBeginning
                        , s = T.isEnd;
                    0 === a ? (T.progress = 0,
                        T.isBeginning = T.isEnd = !0) : (T.progress = (e - T.minTranslate()) / a,
                        T.isBeginning = T.progress <= 0,
                        T.isEnd = T.progress >= 1),
                    T.isBeginning && !t && T.emit("onReachBeginning", T),
                    T.isEnd && !s && T.emit("onReachEnd", T),
                    T.params.watchSlidesProgress && T.updateSlidesProgress(e),
                        T.emit("onProgress", T, T.progress)
                }
                ,
                T.updateActiveIndex = function() {
                    var e, a, t, s = T.rtl ? T.translate : -T.translate;
                    for (a = 0; a < T.slidesGrid.length; a++)
                        void 0 !== T.slidesGrid[a + 1] ? s >= T.slidesGrid[a] && s < T.slidesGrid[a + 1] - (T.slidesGrid[a + 1] - T.slidesGrid[a]) / 2 ? e = a : s >= T.slidesGrid[a] && s < T.slidesGrid[a + 1] && (e = a + 1) : s >= T.slidesGrid[a] && (e = a);
                    T.params.normalizeSlideIndex && (e < 0 || void 0 === e) && (e = 0),
                        t = Math.floor(e / T.params.slidesPerGroup),
                    t >= T.snapGrid.length && (t = T.snapGrid.length - 1),
                    e !== T.activeIndex && (T.snapIndex = t,
                        T.previousIndex = T.activeIndex,
                        T.activeIndex = e,
                        T.updateClasses(),
                        T.updateRealIndex())
                }
                ,
                T.updateRealIndex = function() {
                    T.realIndex = parseInt(T.slides.eq(T.activeIndex).attr("data-swiper-slide-index") || T.activeIndex, 10)
                }
                ,
                T.updateClasses = function() {
                    T.slides.removeClass(T.params.slideActiveClass + " " + T.params.slideNextClass + " " + T.params.slidePrevClass + " " + T.params.slideDuplicateActiveClass + " " + T.params.slideDuplicateNextClass + " " + T.params.slideDuplicatePrevClass);
                    var a = T.slides.eq(T.activeIndex);
                    a.addClass(T.params.slideActiveClass),
                    i.loop && (a.hasClass(T.params.slideDuplicateClass) ? T.wrapper.children("." + T.params.slideClass + ":not(." + T.params.slideDuplicateClass + ')[data-swiper-slide-index="' + T.realIndex + '"]').addClass(T.params.slideDuplicateActiveClass) : T.wrapper.children("." + T.params.slideClass + "." + T.params.slideDuplicateClass + '[data-swiper-slide-index="' + T.realIndex + '"]').addClass(T.params.slideDuplicateActiveClass));
                    var t = a.next("." + T.params.slideClass).addClass(T.params.slideNextClass);
                    T.params.loop && 0 === t.length && (t = T.slides.eq(0),
                        t.addClass(T.params.slideNextClass));
                    var s = a.prev("." + T.params.slideClass).addClass(T.params.slidePrevClass);
                    if (T.params.loop && 0 === s.length && (s = T.slides.eq(-1),
                            s.addClass(T.params.slidePrevClass)),
                        i.loop && (t.hasClass(T.params.slideDuplicateClass) ? T.wrapper.children("." + T.params.slideClass + ":not(." + T.params.slideDuplicateClass + ')[data-swiper-slide-index="' + t.attr("data-swiper-slide-index") + '"]').addClass(T.params.slideDuplicateNextClass) : T.wrapper.children("." + T.params.slideClass + "." + T.params.slideDuplicateClass + '[data-swiper-slide-index="' + t.attr("data-swiper-slide-index") + '"]').addClass(T.params.slideDuplicateNextClass),
                            s.hasClass(T.params.slideDuplicateClass) ? T.wrapper.children("." + T.params.slideClass + ":not(." + T.params.slideDuplicateClass + ')[data-swiper-slide-index="' + s.attr("data-swiper-slide-index") + '"]').addClass(T.params.slideDuplicatePrevClass) : T.wrapper.children("." + T.params.slideClass + "." + T.params.slideDuplicateClass + '[data-swiper-slide-index="' + s.attr("data-swiper-slide-index") + '"]').addClass(T.params.slideDuplicatePrevClass)),
                        T.paginationContainer && T.paginationContainer.length > 0) {
                        var r, n = T.params.loop ? Math.ceil((T.slides.length - 2 * T.loopedSlides) / T.params.slidesPerGroup) : T.snapGrid.length;
                        if (T.params.loop ? (r = Math.ceil((T.activeIndex - T.loopedSlides) / T.params.slidesPerGroup),
                            r > T.slides.length - 1 - 2 * T.loopedSlides && (r -= T.slides.length - 2 * T.loopedSlides),
                            r > n - 1 && (r -= n),
                            r < 0 && "bullets" !== T.params.paginationType && (r = n + r)) : r = void 0 !== T.snapIndex ? T.snapIndex : T.activeIndex || 0,
                            "bullets" === T.params.paginationType && T.bullets && T.bullets.length > 0 && (T.bullets.removeClass(T.params.bulletActiveClass),
                                T.paginationContainer.length > 1 ? T.bullets.each(function() {
                                    e(this).index() === r && e(this).addClass(T.params.bulletActiveClass)
                                }) : T.bullets.eq(r).addClass(T.params.bulletActiveClass)),
                            "fraction" === T.params.paginationType && (T.paginationContainer.find("." + T.params.paginationCurrentClass).text(r + 1),
                                T.paginationContainer.find("." + T.params.paginationTotalClass).text(n)),
                            "progress" === T.params.paginationType) {
                            var o = (r + 1) / n
                                , l = o
                                , p = 1;
                            T.isHorizontal() || (p = o,
                                l = 1),
                                T.paginationContainer.find("." + T.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX(" + l + ") scaleY(" + p + ")").transition(T.params.speed)
                        }
                        "custom" === T.params.paginationType && T.params.paginationCustomRender && (T.paginationContainer.html(T.params.paginationCustomRender(T, r + 1, n)),
                            T.emit("onPaginationRendered", T, T.paginationContainer[0]))
                    }
                    T.params.loop || (T.params.prevButton && T.prevButton && T.prevButton.length > 0 && (T.isBeginning ? (T.prevButton.addClass(T.params.buttonDisabledClass),
                    T.params.a11y && T.a11y && T.a11y.disable(T.prevButton)) : (T.prevButton.removeClass(T.params.buttonDisabledClass),
                    T.params.a11y && T.a11y && T.a11y.enable(T.prevButton))),
                    T.params.nextButton && T.nextButton && T.nextButton.length > 0 && (T.isEnd ? (T.nextButton.addClass(T.params.buttonDisabledClass),
                    T.params.a11y && T.a11y && T.a11y.disable(T.nextButton)) : (T.nextButton.removeClass(T.params.buttonDisabledClass),
                    T.params.a11y && T.a11y && T.a11y.enable(T.nextButton))))
                }
                ,
                T.updatePagination = function() {
                    if (T.params.pagination && T.paginationContainer && T.paginationContainer.length > 0) {
                        var e = "";
                        if ("bullets" === T.params.paginationType) {
                            for (var a = T.params.loop ? Math.ceil((T.slides.length - 2 * T.loopedSlides) / T.params.slidesPerGroup) : T.snapGrid.length, t = 0; t < a; t++)
                                e += T.params.paginationBulletRender ? T.params.paginationBulletRender(T, t, T.params.bulletClass) : "<" + T.params.paginationElement + ' class="' + T.params.bulletClass + '"></' + T.params.paginationElement + ">";
                            T.paginationContainer.html(e),
                                T.bullets = T.paginationContainer.find("." + T.params.bulletClass),
                            T.params.paginationClickable && T.params.a11y && T.a11y && T.a11y.initPagination()
                        }
                        "fraction" === T.params.paginationType && (e = T.params.paginationFractionRender ? T.params.paginationFractionRender(T, T.params.paginationCurrentClass, T.params.paginationTotalClass) : '<span class="' + T.params.paginationCurrentClass + '"></span> / <span class="' + T.params.paginationTotalClass + '"></span>',
                            T.paginationContainer.html(e)),
                        "progress" === T.params.paginationType && (e = T.params.paginationProgressRender ? T.params.paginationProgressRender(T, T.params.paginationProgressbarClass) : '<span class="' + T.params.paginationProgressbarClass + '"></span>',
                            T.paginationContainer.html(e)),
                        "custom" !== T.params.paginationType && T.emit("onPaginationRendered", T, T.paginationContainer[0])
                    }
                }
                ,
                T.update = function(e) {
                    function a() {
                        T.rtl,
                            T.translate,
                            t = Math.min(Math.max(T.translate, T.maxTranslate()), T.minTranslate()),
                            T.setWrapperTranslate(t),
                            T.updateActiveIndex(),
                            T.updateClasses()
                    }
                    if (T)
                        if (T.updateContainerSize(),
                                T.updateSlidesSize(),
                                T.updateProgress(),
                                T.updatePagination(),
                                T.updateClasses(),
                            T.params.scrollbar && T.scrollbar && T.scrollbar.set(),
                                e) {
                            var t;
                            T.controller && T.controller.spline && (T.controller.spline = void 0),
                                T.params.freeMode ? (a(),
                                T.params.autoHeight && T.updateAutoHeight()) : (("auto" === T.params.slidesPerView || T.params.slidesPerView > 1) && T.isEnd && !T.params.centeredSlides ? T.slideTo(T.slides.length - 1, 0, !1, !0) : T.slideTo(T.activeIndex, 0, !1, !0)) || a()
                        } else
                            T.params.autoHeight && T.updateAutoHeight()
                }
                ,
                T.onResize = function(e) {
                    T.params.breakpoints && T.setBreakpoint();
                    var a = T.params.allowSwipeToPrev
                        , t = T.params.allowSwipeToNext;
                    T.params.allowSwipeToPrev = T.params.allowSwipeToNext = !0,
                        T.updateContainerSize(),
                        T.updateSlidesSize(),
                    ("auto" === T.params.slidesPerView || T.params.freeMode || e) && T.updatePagination(),
                    T.params.scrollbar && T.scrollbar && T.scrollbar.set(),
                    T.controller && T.controller.spline && (T.controller.spline = void 0);
                    var s = !1;
                    if (T.params.freeMode) {
                        var i = Math.min(Math.max(T.translate, T.maxTranslate()), T.minTranslate());
                        T.setWrapperTranslate(i),
                            T.updateActiveIndex(),
                            T.updateClasses(),
                        T.params.autoHeight && T.updateAutoHeight()
                    } else
                        T.updateClasses(),
                            s = ("auto" === T.params.slidesPerView || T.params.slidesPerView > 1) && T.isEnd && !T.params.centeredSlides ? T.slideTo(T.slides.length - 1, 0, !1, !0) : T.slideTo(T.activeIndex, 0, !1, !0);
                    T.params.lazyLoading && !s && T.lazy && T.lazy.load(),
                        T.params.allowSwipeToPrev = a,
                        T.params.allowSwipeToNext = t
                }
                ,
                T.touchEventsDesktop = {
                    start: "mousedown",
                    move: "mousemove",
                    end: "mouseup"
                },
                window.navigator.pointerEnabled ? T.touchEventsDesktop = {
                    start: "pointerdown",
                    move: "pointermove",
                    end: "pointerup"
                } : window.navigator.msPointerEnabled && (T.touchEventsDesktop = {
                        start: "MSPointerDown",
                        move: "MSPointerMove",
                        end: "MSPointerUp"
                    }),
                T.touchEvents = {
                    start: T.support.touch || !T.params.simulateTouch ? "touchstart" : T.touchEventsDesktop.start,
                    move: T.support.touch || !T.params.simulateTouch ? "touchmove" : T.touchEventsDesktop.move,
                    end: T.support.touch || !T.params.simulateTouch ? "touchend" : T.touchEventsDesktop.end
                },
            (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === T.params.touchEventsTarget ? T.container : T.wrapper).addClass("swiper-wp8-" + T.params.direction),
                T.initEvents = function(e) {
                    var a = e ? "off" : "on"
                        , t = e ? "removeEventListener" : "addEventListener"
                        , s = "container" === T.params.touchEventsTarget ? T.container[0] : T.wrapper[0]
                        , r = T.support.touch ? s : document
                        , n = !!T.params.nested;
                    if (T.browser.ie)
                        s[t](T.touchEvents.start, T.onTouchStart, !1),
                            r[t](T.touchEvents.move, T.onTouchMove, n),
                            r[t](T.touchEvents.end, T.onTouchEnd, !1);
                    else {
                        if (T.support.touch) {
                            var o = !("touchstart" !== T.touchEvents.start || !T.support.passiveListener || !T.params.passiveListeners) && {
                                    passive: !0,
                                    capture: !1
                                };
                            s[t](T.touchEvents.start, T.onTouchStart, o),
                                s[t](T.touchEvents.move, T.onTouchMove, n),
                                s[t](T.touchEvents.end, T.onTouchEnd, o)
                        }
                        (i.simulateTouch && !T.device.ios && !T.device.android || i.simulateTouch && !T.support.touch && T.device.ios) && (s[t]("mousedown", T.onTouchStart, !1),
                            document[t]("mousemove", T.onTouchMove, n),
                            document[t]("mouseup", T.onTouchEnd, !1))
                    }
                    window[t]("resize", T.onResize),
                    T.params.nextButton && T.nextButton && T.nextButton.length > 0 && (T.nextButton[a]("click", T.onClickNext),
                    T.params.a11y && T.a11y && T.nextButton[a]("keydown", T.a11y.onEnterKey)),
                    T.params.prevButton && T.prevButton && T.prevButton.length > 0 && (T.prevButton[a]("click", T.onClickPrev),
                    T.params.a11y && T.a11y && T.prevButton[a]("keydown", T.a11y.onEnterKey)),
                    T.params.pagination && T.params.paginationClickable && (T.paginationContainer[a]("click", "." + T.params.bulletClass, T.onClickIndex),
                    T.params.a11y && T.a11y && T.paginationContainer[a]("keydown", "." + T.params.bulletClass, T.a11y.onEnterKey)),
                    (T.params.preventClicks || T.params.preventClicksPropagation) && s[t]("click", T.preventClicks, !0)
                }
                ,
                T.attachEvents = function() {
                    T.initEvents()
                }
                ,
                T.detachEvents = function() {
                    T.initEvents(!0)
                }
                ,
                T.allowClick = !0,
                T.preventClicks = function(e) {
                    T.allowClick || (T.params.preventClicks && e.preventDefault(),
                    T.params.preventClicksPropagation && T.animating && (e.stopPropagation(),
                        e.stopImmediatePropagation()))
                }
                ,
                T.onClickNext = function(e) {
                    e.preventDefault(),
                    T.isEnd && !T.params.loop || T.slideNext()
                }
                ,
                T.onClickPrev = function(e) {
                    e.preventDefault(),
                    T.isBeginning && !T.params.loop || T.slidePrev()
                }
                ,
                T.onClickIndex = function(a) {
                    a.preventDefault();
                    var t = e(this).index() * T.params.slidesPerGroup;
                    T.params.loop && (t += T.loopedSlides),
                        T.slideTo(t)
                }
                ,
                T.updateClickedSlide = function(a) {
                    var t = o(a, "." + T.params.slideClass)
                        , s = !1;
                    if (t)
                        for (var i = 0; i < T.slides.length; i++)
                            T.slides[i] === t && (s = !0);
                    if (!t || !s)
                        return T.clickedSlide = void 0,
                            void (T.clickedIndex = void 0);
                    if (T.clickedSlide = t,
                            T.clickedIndex = e(t).index(),
                        T.params.slideToClickedSlide && void 0 !== T.clickedIndex && T.clickedIndex !== T.activeIndex) {
                        var r, n = T.clickedIndex, l = "auto" === T.params.slidesPerView ? T.currentSlidesPerView() : T.params.slidesPerView;
                        if (T.params.loop) {
                            if (T.animating)
                                return;
                            r = parseInt(e(T.clickedSlide).attr("data-swiper-slide-index"), 10),
                                T.params.centeredSlides ? n < T.loopedSlides - l / 2 || n > T.slides.length - T.loopedSlides + l / 2 ? (T.fixLoop(),
                                    n = T.wrapper.children("." + T.params.slideClass + '[data-swiper-slide-index="' + r + '"]:not(.' + T.params.slideDuplicateClass + ")").eq(0).index(),
                                    setTimeout(function() {
                                        T.slideTo(n)
                                    }, 0)) : T.slideTo(n) : n > T.slides.length - l ? (T.fixLoop(),
                                    n = T.wrapper.children("." + T.params.slideClass + '[data-swiper-slide-index="' + r + '"]:not(.' + T.params.slideDuplicateClass + ")").eq(0).index(),
                                    setTimeout(function() {
                                        T.slideTo(n)
                                    }, 0)) : T.slideTo(n)
                        } else
                            T.slideTo(n)
                    }
                }
            ;
            var S, C, z, M, E, P, I, k, L, D, B = "input, select, textarea, button, video", H = Date.now(), G = [];
            T.animating = !1,
                T.touches = {
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    diff: 0
                };
            var X, Y;
            T.onTouchStart = function(a) {
                if (a.originalEvent && (a = a.originalEvent),
                    (X = "touchstart" === a.type) || !("which"in a) || 3 !== a.which) {
                    if (T.params.noSwiping && o(a, "." + T.params.noSwipingClass))
                        return void (T.allowClick = !0);
                    if (!T.params.swipeHandler || o(a, T.params.swipeHandler)) {
                        var t = T.touches.currentX = "touchstart" === a.type ? a.targetTouches[0].pageX : a.pageX
                            , s = T.touches.currentY = "touchstart" === a.type ? a.targetTouches[0].pageY : a.pageY;
                        if (!(T.device.ios && T.params.iOSEdgeSwipeDetection && t <= T.params.iOSEdgeSwipeThreshold)) {
                            if (S = !0,
                                    C = !1,
                                    z = !0,
                                    E = void 0,
                                    Y = void 0,
                                    T.touches.startX = t,
                                    T.touches.startY = s,
                                    M = Date.now(),
                                    T.allowClick = !0,
                                    T.updateContainerSize(),
                                    T.swipeDirection = void 0,
                                T.params.threshold > 0 && (k = !1),
                                "touchstart" !== a.type) {
                                var i = !0;
                                e(a.target).is(B) && (i = !1),
                                document.activeElement && e(document.activeElement).is(B) && document.activeElement.blur(),
                                i && a.preventDefault()
                            }
                            T.emit("onTouchStart", T, a)
                        }
                    }
                }
            }
                ,
                T.onTouchMove = function(a) {
                    if (a.originalEvent && (a = a.originalEvent),
                        !X || "mousemove" !== a.type) {
                        if (a.preventedByNestedSwiper)
                            return T.touches.startX = "touchmove" === a.type ? a.targetTouches[0].pageX : a.pageX,
                                void (T.touches.startY = "touchmove" === a.type ? a.targetTouches[0].pageY : a.pageY);
                        if (T.params.onlyExternal)
                            return T.allowClick = !1,
                                void (S && (T.touches.startX = T.touches.currentX = "touchmove" === a.type ? a.targetTouches[0].pageX : a.pageX,
                                    T.touches.startY = T.touches.currentY = "touchmove" === a.type ? a.targetTouches[0].pageY : a.pageY,
                                    M = Date.now()));
                        if (X && T.params.touchReleaseOnEdges && !T.params.loop)
                            if (T.isHorizontal()) {
                                if (T.touches.currentX < T.touches.startX && T.translate <= T.maxTranslate() || T.touches.currentX > T.touches.startX && T.translate >= T.minTranslate())
                                    return
                            } else if (T.touches.currentY < T.touches.startY && T.translate <= T.maxTranslate() || T.touches.currentY > T.touches.startY && T.translate >= T.minTranslate())
                                return;
                        if (X && document.activeElement && a.target === document.activeElement && e(a.target).is(B))
                            return C = !0,
                                void (T.allowClick = !1);
                        if (z && T.emit("onTouchMove", T, a),
                                !(a.targetTouches && a.targetTouches.length > 1)) {
                            if (T.touches.currentX = "touchmove" === a.type ? a.targetTouches[0].pageX : a.pageX,
                                    T.touches.currentY = "touchmove" === a.type ? a.targetTouches[0].pageY : a.pageY,
                                void 0 === E) {
                                var t;
                                T.isHorizontal() && T.touches.currentY === T.touches.startY || !T.isHorizontal() && T.touches.currentX === T.touches.startX ? E = !1 : (t = 180 * Math.atan2(Math.abs(T.touches.currentY - T.touches.startY), Math.abs(T.touches.currentX - T.touches.startX)) / Math.PI,
                                    E = T.isHorizontal() ? t > T.params.touchAngle : 90 - t > T.params.touchAngle)
                            }
                            if (E && T.emit("onTouchMoveOpposite", T, a),
                                void 0 === Y && T.browser.ieTouch && (T.touches.currentX === T.touches.startX && T.touches.currentY === T.touches.startY || (Y = !0)),
                                    S) {
                                if (E)
                                    return void (S = !1);
                                if (Y || !T.browser.ieTouch) {
                                    T.allowClick = !1,
                                        T.emit("onSliderMove", T, a),
                                        a.preventDefault(),
                                    T.params.touchMoveStopPropagation && !T.params.nested && a.stopPropagation(),
                                    C || (i.loop && T.fixLoop(),
                                        I = T.getWrapperTranslate(),
                                        T.setWrapperTransition(0),
                                    T.animating && T.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"),
                                    T.params.autoplay && T.autoplaying && (T.params.autoplayDisableOnInteraction ? T.stopAutoplay() : T.pauseAutoplay()),
                                        D = !1,
                                    !T.params.grabCursor || !0 !== T.params.allowSwipeToNext && !0 !== T.params.allowSwipeToPrev || T.setGrabCursor(!0)),
                                        C = !0;
                                    var s = T.touches.diff = T.isHorizontal() ? T.touches.currentX - T.touches.startX : T.touches.currentY - T.touches.startY;
                                    s *= T.params.touchRatio,
                                    T.rtl && (s = -s),
                                        T.swipeDirection = s > 0 ? "prev" : "next",
                                        P = s + I;
                                    var r = !0;
                                    if (s > 0 && P > T.minTranslate() ? (r = !1,
                                        T.params.resistance && (P = T.minTranslate() - 1 + Math.pow(-T.minTranslate() + I + s, T.params.resistanceRatio))) : s < 0 && P < T.maxTranslate() && (r = !1,
                                            T.params.resistance && (P = T.maxTranslate() + 1 - Math.pow(T.maxTranslate() - I - s, T.params.resistanceRatio))),
                                        r && (a.preventedByNestedSwiper = !0),
                                        !T.params.allowSwipeToNext && "next" === T.swipeDirection && P < I && (P = I),
                                        !T.params.allowSwipeToPrev && "prev" === T.swipeDirection && P > I && (P = I),
                                        T.params.threshold > 0) {
                                        if (!(Math.abs(s) > T.params.threshold || k))
                                            return void (P = I);
                                        if (!k)
                                            return k = !0,
                                                T.touches.startX = T.touches.currentX,
                                                T.touches.startY = T.touches.currentY,
                                                P = I,
                                                void (T.touches.diff = T.isHorizontal() ? T.touches.currentX - T.touches.startX : T.touches.currentY - T.touches.startY)
                                    }
                                    T.params.followFinger && ((T.params.freeMode || T.params.watchSlidesProgress) && T.updateActiveIndex(),
                                    T.params.freeMode && (0 === G.length && G.push({
                                        position: T.touches[T.isHorizontal() ? "startX" : "startY"],
                                        time: M
                                    }),
                                        G.push({
                                            position: T.touches[T.isHorizontal() ? "currentX" : "currentY"],
                                            time: (new window.Date).getTime()
                                        })),
                                        T.updateProgress(P),
                                        T.setWrapperTranslate(P))
                                }
                            }
                        }
                    }
                }
                ,
                T.onTouchEnd = function(a) {
                    if (a.originalEvent && (a = a.originalEvent),
                        z && T.emit("onTouchEnd", T, a),
                            z = !1,
                            S) {
                        T.params.grabCursor && C && S && (!0 === T.params.allowSwipeToNext || !0 === T.params.allowSwipeToPrev) && T.setGrabCursor(!1);
                        var t = Date.now()
                            , s = t - M;
                        if (T.allowClick && (T.updateClickedSlide(a),
                                T.emit("onTap", T, a),
                            s < 300 && t - H > 300 && (L && clearTimeout(L),
                                L = setTimeout(function() {
                                    T && (T.params.paginationHide && T.paginationContainer.length > 0 && !e(a.target).hasClass(T.params.bulletClass) && T.paginationContainer.toggleClass(T.params.paginationHiddenClass),
                                        T.emit("onClick", T, a))
                                }, 300)),
                            s < 300 && t - H < 300 && (L && clearTimeout(L),
                                T.emit("onDoubleTap", T, a))),
                                H = Date.now(),
                                setTimeout(function() {
                                    T && (T.allowClick = !0)
                                }, 0),
                            !S || !C || !T.swipeDirection || 0 === T.touches.diff || P === I)
                            return void (S = C = !1);
                        S = C = !1;
                        var i;
                        if (i = T.params.followFinger ? T.rtl ? T.translate : -T.translate : -P,
                                T.params.freeMode) {
                            if (i < -T.minTranslate())
                                return void T.slideTo(T.activeIndex);
                            if (i > -T.maxTranslate())
                                return void (T.slides.length < T.snapGrid.length ? T.slideTo(T.snapGrid.length - 1) : T.slideTo(T.slides.length - 1));
                            if (T.params.freeModeMomentum) {
                                if (G.length > 1) {
                                    var r = G.pop()
                                        , n = G.pop()
                                        , o = r.position - n.position
                                        , l = r.time - n.time;
                                    T.velocity = o / l,
                                        T.velocity = T.velocity / 2,
                                    Math.abs(T.velocity) < T.params.freeModeMinimumVelocity && (T.velocity = 0),
                                    (l > 150 || (new window.Date).getTime() - r.time > 300) && (T.velocity = 0)
                                } else
                                    T.velocity = 0;
                                T.velocity = T.velocity * T.params.freeModeMomentumVelocityRatio,
                                    G.length = 0;
                                var p = 1e3 * T.params.freeModeMomentumRatio
                                    , d = T.velocity * p
                                    , u = T.translate + d;
                                T.rtl && (u = -u);
                                var c, m = !1, h = 20 * Math.abs(T.velocity) * T.params.freeModeMomentumBounceRatio;
                                if (u < T.maxTranslate())
                                    T.params.freeModeMomentumBounce ? (u + T.maxTranslate() < -h && (u = T.maxTranslate() - h),
                                        c = T.maxTranslate(),
                                        m = !0,
                                        D = !0) : u = T.maxTranslate();
                                else if (u > T.minTranslate())
                                    T.params.freeModeMomentumBounce ? (u - T.minTranslate() > h && (u = T.minTranslate() + h),
                                        c = T.minTranslate(),
                                        m = !0,
                                        D = !0) : u = T.minTranslate();
                                else if (T.params.freeModeSticky) {
                                    var g, f = 0;
                                    for (f = 0; f < T.snapGrid.length; f += 1)
                                        if (T.snapGrid[f] > -u) {
                                            g = f;
                                            break
                                        }
                                    u = Math.abs(T.snapGrid[g] - u) < Math.abs(T.snapGrid[g - 1] - u) || "next" === T.swipeDirection ? T.snapGrid[g] : T.snapGrid[g - 1],
                                    T.rtl || (u = -u)
                                }
                                if (0 !== T.velocity)
                                    p = T.rtl ? Math.abs((-u - T.translate) / T.velocity) : Math.abs((u - T.translate) / T.velocity);
                                else if (T.params.freeModeSticky)
                                    return void T.slideReset();
                                T.params.freeModeMomentumBounce && m ? (T.updateProgress(c),
                                    T.setWrapperTransition(p),
                                    T.setWrapperTranslate(u),
                                    T.onTransitionStart(),
                                    T.animating = !0,
                                    T.wrapper.transitionEnd(function() {
                                        T && D && (T.emit("onMomentumBounce", T),
                                            T.setWrapperTransition(T.params.speed),
                                            T.setWrapperTranslate(c),
                                            T.wrapper.transitionEnd(function() {
                                                T && T.onTransitionEnd()
                                            }))
                                    })) : T.velocity ? (T.updateProgress(u),
                                    T.setWrapperTransition(p),
                                    T.setWrapperTranslate(u),
                                    T.onTransitionStart(),
                                T.animating || (T.animating = !0,
                                    T.wrapper.transitionEnd(function() {
                                        T && T.onTransitionEnd()
                                    }))) : T.updateProgress(u),
                                    T.updateActiveIndex()
                            }
                            return void ((!T.params.freeModeMomentum || s >= T.params.longSwipesMs) && (T.updateProgress(),
                                T.updateActiveIndex()))
                        }
                        var v, w = 0, y = T.slidesSizesGrid[0];
                        for (v = 0; v < T.slidesGrid.length; v += T.params.slidesPerGroup)
                            void 0 !== T.slidesGrid[v + T.params.slidesPerGroup] ? i >= T.slidesGrid[v] && i < T.slidesGrid[v + T.params.slidesPerGroup] && (w = v,
                                    y = T.slidesGrid[v + T.params.slidesPerGroup] - T.slidesGrid[v]) : i >= T.slidesGrid[v] && (w = v,
                                    y = T.slidesGrid[T.slidesGrid.length - 1] - T.slidesGrid[T.slidesGrid.length - 2]);
                        var x = (i - T.slidesGrid[w]) / y;
                        if (s > T.params.longSwipesMs) {
                            if (!T.params.longSwipes)
                                return void T.slideTo(T.activeIndex);
                            "next" === T.swipeDirection && (x >= T.params.longSwipesRatio ? T.slideTo(w + T.params.slidesPerGroup) : T.slideTo(w)),
                            "prev" === T.swipeDirection && (x > 1 - T.params.longSwipesRatio ? T.slideTo(w + T.params.slidesPerGroup) : T.slideTo(w))
                        } else {
                            if (!T.params.shortSwipes)
                                return void T.slideTo(T.activeIndex);
                            "next" === T.swipeDirection && T.slideTo(w + T.params.slidesPerGroup),
                            "prev" === T.swipeDirection && T.slideTo(w)
                        }
                    }
                }
                ,
                T._slideTo = function(e, a) {
                    return T.slideTo(e, a, !0, !0)
                }
                ,
                T.slideTo = function(e, a, t, s) {
                    void 0 === t && (t = !0),
                    void 0 === e && (e = 0),
                    e < 0 && (e = 0),
                        T.snapIndex = Math.floor(e / T.params.slidesPerGroup),
                    T.snapIndex >= T.snapGrid.length && (T.snapIndex = T.snapGrid.length - 1);
                    var i = -T.snapGrid[T.snapIndex];
                    if (T.params.autoplay && T.autoplaying && (s || !T.params.autoplayDisableOnInteraction ? T.pauseAutoplay(a) : T.stopAutoplay()),
                            T.updateProgress(i),
                            T.params.normalizeSlideIndex)
                        for (var r = 0; r < T.slidesGrid.length; r++)
                            -Math.floor(100 * i) >= Math.floor(100 * T.slidesGrid[r]) && (e = r);
                    return !(!T.params.allowSwipeToNext && i < T.translate && i < T.minTranslate() || !T.params.allowSwipeToPrev && i > T.translate && i > T.maxTranslate() && (T.activeIndex || 0) !== e || (void 0 === a && (a = T.params.speed),
                        T.previousIndex = T.activeIndex || 0,
                        T.activeIndex = e,
                        T.updateRealIndex(),
                        T.rtl && -i === T.translate || !T.rtl && i === T.translate ? (T.params.autoHeight && T.updateAutoHeight(),
                            T.updateClasses(),
                        "slide" !== T.params.effect && T.setWrapperTranslate(i),
                            1) : (T.updateClasses(),
                            T.onTransitionStart(t),
                            0 === a || T.browser.lteIE9 ? (T.setWrapperTranslate(i),
                                T.setWrapperTransition(0),
                                T.onTransitionEnd(t)) : (T.setWrapperTranslate(i),
                                T.setWrapperTransition(a),
                            T.animating || (T.animating = !0,
                                T.wrapper.transitionEnd(function() {
                                    T && T.onTransitionEnd(t)
                                }))),
                            0)))
                }
                ,
                T.onTransitionStart = function(e) {
                    void 0 === e && (e = !0),
                    T.params.autoHeight && T.updateAutoHeight(),
                    T.lazy && T.lazy.onTransitionStart(),
                    e && (T.emit("onTransitionStart", T),
                    T.activeIndex !== T.previousIndex && (T.emit("onSlideChangeStart", T),
                        T.activeIndex > T.previousIndex ? T.emit("onSlideNextStart", T) : T.emit("onSlidePrevStart", T)))
                }
                ,
                T.onTransitionEnd = function(e) {
                    T.animating = !1,
                        T.setWrapperTransition(0),
                    void 0 === e && (e = !0),
                    T.lazy && T.lazy.onTransitionEnd(),
                    e && (T.emit("onTransitionEnd", T),
                    T.activeIndex !== T.previousIndex && (T.emit("onSlideChangeEnd", T),
                        T.activeIndex > T.previousIndex ? T.emit("onSlideNextEnd", T) : T.emit("onSlidePrevEnd", T))),
                    T.params.history && T.history && T.history.setHistory(T.params.history, T.activeIndex),
                    T.params.hashnav && T.hashnav && T.hashnav.setHash()
                }
                ,
                T.slideNext = function(e, a, t) {
                    return T.params.loop ? !T.animating && (T.fixLoop(),
                            T.container[0].clientLeft,
                            T.slideTo(T.activeIndex + T.params.slidesPerGroup, a, e, t)) : T.slideTo(T.activeIndex + T.params.slidesPerGroup, a, e, t)
                }
                ,
                T._slideNext = function(e) {
                    return T.slideNext(!0, e, !0)
                }
                ,
                T.slidePrev = function(e, a, t) {
                    return T.params.loop ? !T.animating && (T.fixLoop(),
                            T.container[0].clientLeft,
                            T.slideTo(T.activeIndex - 1, a, e, t)) : T.slideTo(T.activeIndex - 1, a, e, t)
                }
                ,
                T._slidePrev = function(e) {
                    return T.slidePrev(!0, e, !0)
                }
                ,
                T.slideReset = function(e, a, t) {
                    return T.slideTo(T.activeIndex, a, e)
                }
                ,
                T.disableTouchControl = function() {
                    return T.params.onlyExternal = !0,
                        !0
                }
                ,
                T.enableTouchControl = function() {
                    return T.params.onlyExternal = !1,
                        !0
                }
                ,
                T.setWrapperTransition = function(e, a) {
                    T.wrapper.transition(e),
                    "slide" !== T.params.effect && T.effects[T.params.effect] && T.effects[T.params.effect].setTransition(e),
                    T.params.parallax && T.parallax && T.parallax.setTransition(e),
                    T.params.scrollbar && T.scrollbar && T.scrollbar.setTransition(e),
                    T.params.control && T.controller && T.controller.setTransition(e, a),
                        T.emit("onSetTransition", T, e)
                }
                ,
                T.setWrapperTranslate = function(e, a, t) {
                    var s = 0
                        , i = 0;
                    T.isHorizontal() ? s = T.rtl ? -e : e : i = e,
                    T.params.roundLengths && (s = r(s),
                        i = r(i)),
                    T.params.virtualTranslate || (T.support.transforms3d ? T.wrapper.transform("translate3d(" + s + "px, " + i + "px, 0px)") : T.wrapper.transform("translate(" + s + "px, " + i + "px)")),
                        T.translate = T.isHorizontal() ? s : i;
                    var n, o = T.maxTranslate() - T.minTranslate();
                    n = 0 === o ? 0 : (e - T.minTranslate()) / o,
                    n !== T.progress && T.updateProgress(e),
                    a && T.updateActiveIndex(),
                    "slide" !== T.params.effect && T.effects[T.params.effect] && T.effects[T.params.effect].setTranslate(T.translate),
                    T.params.parallax && T.parallax && T.parallax.setTranslate(T.translate),
                    T.params.scrollbar && T.scrollbar && T.scrollbar.setTranslate(T.translate),
                    T.params.control && T.controller && T.controller.setTranslate(T.translate, t),
                        T.emit("onSetTranslate", T, T.translate)
                }
                ,
                T.getTranslate = function(e, a) {
                    var t, s, i, r;
                    return void 0 === a && (a = "x"),
                        T.params.virtualTranslate ? T.rtl ? -T.translate : T.translate : (i = window.getComputedStyle(e, null),
                            window.WebKitCSSMatrix ? (s = i.transform || i.webkitTransform,
                            s.split(",").length > 6 && (s = s.split(", ").map(function(e) {
                                return e.replace(",", ".")
                            }).join(", ")),
                                r = new window.WebKitCSSMatrix("none" === s ? "" : s)) : (r = i.MozTransform || i.OTransform || i.MsTransform || i.msTransform || i.transform || i.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"),
                                t = r.toString().split(",")),
                        "x" === a && (s = window.WebKitCSSMatrix ? r.m41 : 16 === t.length ? parseFloat(t[12]) : parseFloat(t[4])),
                        "y" === a && (s = window.WebKitCSSMatrix ? r.m42 : 16 === t.length ? parseFloat(t[13]) : parseFloat(t[5])),
                        T.rtl && s && (s = -s),
                        s || 0)
                }
                ,
                T.getWrapperTranslate = function(e) {
                    return void 0 === e && (e = T.isHorizontal() ? "x" : "y"),
                        T.getTranslate(T.wrapper[0], e)
                }
                ,
                T.observers = [],
                T.initObservers = function() {
                    if (T.params.observeParents)
                        for (var e = T.container.parents(), a = 0; a < e.length; a++)
                            l(e[a]);
                    l(T.container[0], {
                        childList: !1
                    }),
                        l(T.wrapper[0], {
                            attributes: !1
                        })
                }
                ,
                T.disconnectObservers = function() {
                    for (var e = 0; e < T.observers.length; e++)
                        T.observers[e].disconnect();
                    T.observers = []
                }
                ,
                T.createLoop = function() {
                    T.wrapper.children("." + T.params.slideClass + "." + T.params.slideDuplicateClass).remove();
                    var a = T.wrapper.children("." + T.params.slideClass);
                    "auto" !== T.params.slidesPerView || T.params.loopedSlides || (T.params.loopedSlides = a.length),
                        T.loopedSlides = parseInt(T.params.loopedSlides || T.params.slidesPerView, 10),
                        T.loopedSlides = T.loopedSlides + T.params.loopAdditionalSlides,
                    T.loopedSlides > a.length && (T.loopedSlides = a.length);
                    var t, s = [], i = [];
                    for (a.each(function(t, r) {
                        var n = e(this);
                        t < T.loopedSlides && i.push(r),
                        t < a.length && t >= a.length - T.loopedSlides && s.push(r),
                            n.attr("data-swiper-slide-index", t)
                    }),
                             t = 0; t < i.length; t++)
                        T.wrapper.append(e(i[t].cloneNode(!0)).addClass(T.params.slideDuplicateClass));
                    for (t = s.length - 1; t >= 0; t--)
                        T.wrapper.prepend(e(s[t].cloneNode(!0)).addClass(T.params.slideDuplicateClass))
                }
                ,
                T.destroyLoop = function() {
                    T.wrapper.children("." + T.params.slideClass + "." + T.params.slideDuplicateClass).remove(),
                        T.slides.removeAttr("data-swiper-slide-index")
                }
                ,
                T.reLoop = function(e) {
                    var a = T.activeIndex - T.loopedSlides;
                    T.destroyLoop(),
                        T.createLoop(),
                        T.updateSlidesSize(),
                    e && T.slideTo(a + T.loopedSlides, 0, !1)
                }
                ,
                T.fixLoop = function() {
                    var e;
                    T.activeIndex < T.loopedSlides ? (e = T.slides.length - 3 * T.loopedSlides + T.activeIndex,
                        e += T.loopedSlides,
                        T.slideTo(e, 0, !1, !0)) : ("auto" === T.params.slidesPerView && T.activeIndex >= 2 * T.loopedSlides || T.activeIndex > T.slides.length - 2 * T.params.slidesPerView) && (e = -T.slides.length + T.activeIndex + T.loopedSlides,
                            e += T.loopedSlides,
                            T.slideTo(e, 0, !1, !0))
                }
                ,
                T.appendSlide = function(e) {
                    if (T.params.loop && T.destroyLoop(),
                        "object" == (void 0 === e ? "undefined" : _typeof(e)) && e.length)
                        for (var a = 0; a < e.length; a++)
                            e[a] && T.wrapper.append(e[a]);
                    else
                        T.wrapper.append(e);
                    T.params.loop && T.createLoop(),
                    T.params.observer && T.support.observer || T.update(!0)
                }
                ,
                T.prependSlide = function(e) {
                    T.params.loop && T.destroyLoop();
                    var a = T.activeIndex + 1;
                    if ("object" == (void 0 === e ? "undefined" : _typeof(e)) && e.length) {
                        for (var t = 0; t < e.length; t++)
                            e[t] && T.wrapper.prepend(e[t]);
                        a = T.activeIndex + e.length
                    } else
                        T.wrapper.prepend(e);
                    T.params.loop && T.createLoop(),
                    T.params.observer && T.support.observer || T.update(!0),
                        T.slideTo(a, 0, !1)
                }
                ,
                T.removeSlide = function(e) {
                    T.params.loop && (T.destroyLoop(),
                        T.slides = T.wrapper.children("." + T.params.slideClass));
                    var a, t = T.activeIndex;
                    if ("object" == (void 0 === e ? "undefined" : _typeof(e)) && e.length) {
                        for (var s = 0; s < e.length; s++)
                            a = e[s],
                            T.slides[a] && T.slides.eq(a).remove(),
                            a < t && t--;
                        t = Math.max(t, 0)
                    } else
                        a = e,
                        T.slides[a] && T.slides.eq(a).remove(),
                        a < t && t--,
                            t = Math.max(t, 0);
                    T.params.loop && T.createLoop(),
                    T.params.observer && T.support.observer || T.update(!0),
                        T.params.loop ? T.slideTo(t + T.loopedSlides, 0, !1) : T.slideTo(t, 0, !1)
                }
                ,
                T.removeAllSlides = function() {
                    for (var e = [], a = 0; a < T.slides.length; a++)
                        e.push(a);
                    T.removeSlide(e)
                }
                ,
                T.effects = {
                    fade: {
                        setTranslate: function() {
                            for (var e = 0; e < T.slides.length; e++) {
                                var a = T.slides.eq(e)
                                    , t = a[0].swiperSlideOffset
                                    , s = -t;
                                T.params.virtualTranslate || (s -= T.translate);
                                var i = 0;
                                T.isHorizontal() || (i = s,
                                    s = 0);
                                var r = T.params.fade.crossFade ? Math.max(1 - Math.abs(a[0].progress), 0) : 1 + Math.min(Math.max(a[0].progress, -1), 0);
                                a.css({
                                    opacity: r
                                }).transform("translate3d(" + s + "px, " + i + "px, 0px)")
                            }
                        },
                        setTransition: function(e) {
                            if (T.slides.transition(e),
                                T.params.virtualTranslate && 0 !== e) {
                                var a = !1;
                                T.slides.transitionEnd(function() {
                                    if (!a && T) {
                                        a = !0,
                                            T.animating = !1;
                                        for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], t = 0; t < e.length; t++)
                                            T.wrapper.trigger(e[t])
                                    }
                                })
                            }
                        }
                    },
                    flip: {
                        setTranslate: function() {
                            for (var a = 0; a < T.slides.length; a++) {
                                var t = T.slides.eq(a)
                                    , s = t[0].progress;
                                T.params.flip.limitRotation && (s = Math.max(Math.min(t[0].progress, 1), -1));
                                var i = t[0].swiperSlideOffset
                                    , r = -180 * s
                                    , n = r
                                    , o = 0
                                    , l = -i
                                    , p = 0;
                                if (T.isHorizontal() ? T.rtl && (n = -n) : (p = l,
                                        l = 0,
                                        o = -n,
                                        n = 0),
                                        t[0].style.zIndex = -Math.abs(Math.round(s)) + T.slides.length,
                                        T.params.flip.slideShadows) {
                                    var d = T.isHorizontal() ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top")
                                        , u = T.isHorizontal() ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");
                                    0 === d.length && (d = e('<div class="swiper-slide-shadow-' + (T.isHorizontal() ? "left" : "top") + '"></div>'),
                                        t.append(d)),
                                    0 === u.length && (u = e('<div class="swiper-slide-shadow-' + (T.isHorizontal() ? "right" : "bottom") + '"></div>'),
                                        t.append(u)),
                                    d.length && (d[0].style.opacity = Math.max(-s, 0)),
                                    u.length && (u[0].style.opacity = Math.max(s, 0))
                                }
                                t.transform("translate3d(" + l + "px, " + p + "px, 0px) rotateX(" + o + "deg) rotateY(" + n + "deg)")
                            }
                        },
                        setTransition: function(a) {
                            if (T.slides.transition(a).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(a),
                                T.params.virtualTranslate && 0 !== a) {
                                var t = !1;
                                T.slides.eq(T.activeIndex).transitionEnd(function() {
                                    if (!t && T && e(this).hasClass(T.params.slideActiveClass)) {
                                        t = !0,
                                            T.animating = !1;
                                        for (var a = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], s = 0; s < a.length; s++)
                                            T.wrapper.trigger(a[s])
                                    }
                                })
                            }
                        }
                    },
                    cube: {
                        setTranslate: function() {
                            var a, t = 0;
                            T.params.cube.shadow && (T.isHorizontal() ? (a = T.wrapper.find(".swiper-cube-shadow"),
                            0 === a.length && (a = e('<div class="swiper-cube-shadow"></div>'),
                                T.wrapper.append(a)),
                                a.css({
                                    height: T.width + "px"
                                })) : (a = T.container.find(".swiper-cube-shadow"),
                            0 === a.length && (a = e('<div class="swiper-cube-shadow"></div>'),
                                T.container.append(a))));
                            for (var s = 0; s < T.slides.length; s++) {
                                var i = T.slides.eq(s)
                                    , r = 90 * s
                                    , n = Math.floor(r / 360);
                                T.rtl && (r = -r,
                                    n = Math.floor(-r / 360));
                                var o = Math.max(Math.min(i[0].progress, 1), -1)
                                    , l = 0
                                    , p = 0
                                    , d = 0;
                                s % 4 == 0 ? (l = 4 * -n * T.size,
                                    d = 0) : (s - 1) % 4 == 0 ? (l = 0,
                                    d = 4 * -n * T.size) : (s - 2) % 4 == 0 ? (l = T.size + 4 * n * T.size,
                                    d = T.size) : (s - 3) % 4 == 0 && (l = -T.size,
                                        d = 3 * T.size + 4 * T.size * n),
                                T.rtl && (l = -l),
                                T.isHorizontal() || (p = l,
                                    l = 0);
                                var u = "rotateX(" + (T.isHorizontal() ? 0 : -r) + "deg) rotateY(" + (T.isHorizontal() ? r : 0) + "deg) translate3d(" + l + "px, " + p + "px, " + d + "px)";
                                if (o <= 1 && o > -1 && (t = 90 * s + 90 * o,
                                    T.rtl && (t = 90 * -s - 90 * o)),
                                        i.transform(u),
                                        T.params.cube.slideShadows) {
                                    var c = T.isHorizontal() ? i.find(".swiper-slide-shadow-left") : i.find(".swiper-slide-shadow-top")
                                        , m = T.isHorizontal() ? i.find(".swiper-slide-shadow-right") : i.find(".swiper-slide-shadow-bottom");
                                    0 === c.length && (c = e('<div class="swiper-slide-shadow-' + (T.isHorizontal() ? "left" : "top") + '"></div>'),
                                        i.append(c)),
                                    0 === m.length && (m = e('<div class="swiper-slide-shadow-' + (T.isHorizontal() ? "right" : "bottom") + '"></div>'),
                                        i.append(m)),
                                    c.length && (c[0].style.opacity = Math.max(-o, 0)),
                                    m.length && (m[0].style.opacity = Math.max(o, 0))
                                }
                            }
                            if (T.wrapper.css({
                                    "-webkit-transform-origin": "50% 50% -" + T.size / 2 + "px",
                                    "-moz-transform-origin": "50% 50% -" + T.size / 2 + "px",
                                    "-ms-transform-origin": "50% 50% -" + T.size / 2 + "px",
                                    "transform-origin": "50% 50% -" + T.size / 2 + "px"
                                }),
                                    T.params.cube.shadow)
                                if (T.isHorizontal())
                                    a.transform("translate3d(0px, " + (T.width / 2 + T.params.cube.shadowOffset) + "px, " + -T.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + T.params.cube.shadowScale + ")");
                                else {
                                    var h = Math.abs(t) - 90 * Math.floor(Math.abs(t) / 90)
                                        , g = 1.5 - (Math.sin(2 * h * Math.PI / 360) / 2 + Math.cos(2 * h * Math.PI / 360) / 2)
                                        , f = T.params.cube.shadowScale
                                        , v = T.params.cube.shadowScale / g
                                        , w = T.params.cube.shadowOffset;
                                    a.transform("scale3d(" + f + ", 1, " + v + ") translate3d(0px, " + (T.height / 2 + w) + "px, " + -T.height / 2 / v + "px) rotateX(-90deg)")
                                }
                            var y = T.isSafari || T.isUiWebView ? -T.size / 2 : 0;
                            T.wrapper.transform("translate3d(0px,0," + y + "px) rotateX(" + (T.isHorizontal() ? 0 : t) + "deg) rotateY(" + (T.isHorizontal() ? -t : 0) + "deg)")
                        },
                        setTransition: function(e) {
                            T.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
                            T.params.cube.shadow && !T.isHorizontal() && T.container.find(".swiper-cube-shadow").transition(e)
                        }
                    },
                    coverflow: {
                        setTranslate: function() {
                            for (var a = T.translate, t = T.isHorizontal() ? -a + T.width / 2 : -a + T.height / 2, s = T.isHorizontal() ? T.params.coverflow.rotate : -T.params.coverflow.rotate, i = T.params.coverflow.depth, r = 0, n = T.slides.length; r < n; r++) {
                                var o = T.slides.eq(r)
                                    , l = T.slidesSizesGrid[r]
                                    , p = o[0].swiperSlideOffset
                                    , d = (t - p - l / 2) / l * T.params.coverflow.modifier
                                    , u = T.isHorizontal() ? s * d : 0
                                    , c = T.isHorizontal() ? 0 : s * d
                                    , m = -i * Math.abs(d)
                                    , h = T.isHorizontal() ? 0 : T.params.coverflow.stretch * d
                                    , g = T.isHorizontal() ? T.params.coverflow.stretch * d : 0;
                                Math.abs(g) < .001 && (g = 0),
                                Math.abs(h) < .001 && (h = 0),
                                Math.abs(m) < .001 && (m = 0),
                                Math.abs(u) < .001 && (u = 0),
                                Math.abs(c) < .001 && (c = 0);
                                var f = "translate3d(" + g + "px," + h + "px," + m + "px)  rotateX(" + c + "deg) rotateY(" + u + "deg)";
                                if (o.transform(f),
                                        o[0].style.zIndex = 1 - Math.abs(Math.round(d)),
                                        T.params.coverflow.slideShadows) {
                                    var v = T.isHorizontal() ? o.find(".swiper-slide-shadow-left") : o.find(".swiper-slide-shadow-top")
                                        , w = T.isHorizontal() ? o.find(".swiper-slide-shadow-right") : o.find(".swiper-slide-shadow-bottom");
                                    0 === v.length && (v = e('<div class="swiper-slide-shadow-' + (T.isHorizontal() ? "left" : "top") + '"></div>'),
                                        o.append(v)),
                                    0 === w.length && (w = e('<div class="swiper-slide-shadow-' + (T.isHorizontal() ? "right" : "bottom") + '"></div>'),
                                        o.append(w)),
                                    v.length && (v[0].style.opacity = d > 0 ? d : 0),
                                    w.length && (w[0].style.opacity = -d > 0 ? -d : 0)
                                }
                            }
                            if (T.browser.ie) {
                                T.wrapper[0].style.perspectiveOrigin = t + "px 50%"
                            }
                        },
                        setTransition: function(e) {
                            T.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
                        }
                    }
                },
                T.lazy = {
                    initialImageLoaded: !1,
                    loadImageInSlide: function(a, t) {
                        if (void 0 !== a && (void 0 === t && (t = !0),
                            0 !== T.slides.length)) {
                            var s = T.slides.eq(a)
                                , i = s.find("." + T.params.lazyLoadingClass + ":not(." + T.params.lazyStatusLoadedClass + "):not(." + T.params.lazyStatusLoadingClass + ")");
                            !s.hasClass(T.params.lazyLoadingClass) || s.hasClass(T.params.lazyStatusLoadedClass) || s.hasClass(T.params.lazyStatusLoadingClass) || (i = i.add(s[0])),
                            0 !== i.length && i.each(function() {
                                var a = e(this);
                                a.addClass(T.params.lazyStatusLoadingClass);
                                var i = a.attr("data-background")
                                    , r = a.attr("data-src")
                                    , n = a.attr("data-srcset")
                                    , o = a.attr("data-sizes");
                                T.loadImage(a[0], r || i, n, o, !1, function() {
                                    if (i ? (a.css("background-image", 'url("' + i + '")'),
                                            a.removeAttr("data-background")) : (n && (a.attr("srcset", n),
                                            a.removeAttr("data-srcset")),
                                        o && (a.attr("sizes", o),
                                            a.removeAttr("data-sizes")),
                                        r && (a.attr("src", r),
                                            a.removeAttr("data-src"))),
                                            a.addClass(T.params.lazyStatusLoadedClass).removeClass(T.params.lazyStatusLoadingClass),
                                            s.find("." + T.params.lazyPreloaderClass + ", ." + T.params.preloaderClass).remove(),
                                        T.params.loop && t) {
                                        var e = s.attr("data-swiper-slide-index");
                                        if (s.hasClass(T.params.slideDuplicateClass)) {
                                            var l = T.wrapper.children('[data-swiper-slide-index="' + e + '"]:not(.' + T.params.slideDuplicateClass + ")");
                                            T.lazy.loadImageInSlide(l.index(), !1)
                                        } else {
                                            var p = T.wrapper.children("." + T.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                            T.lazy.loadImageInSlide(p.index(), !1)
                                        }
                                    }
                                    T.emit("onLazyImageReady", T, s[0], a[0])
                                }),
                                    T.emit("onLazyImageLoad", T, s[0], a[0])
                            })
                        }
                    },
                    load: function() {
                        var a, t = T.params.slidesPerView;
                        if ("auto" === t && (t = 0),
                            T.lazy.initialImageLoaded || (T.lazy.initialImageLoaded = !0),
                                T.params.watchSlidesVisibility)
                            T.wrapper.children("." + T.params.slideVisibleClass).each(function() {
                                T.lazy.loadImageInSlide(e(this).index())
                            });
                        else if (t > 1)
                            for (a = T.activeIndex; a < T.activeIndex + t; a++)
                                T.slides[a] && T.lazy.loadImageInSlide(a);
                        else
                            T.lazy.loadImageInSlide(T.activeIndex);
                        if (T.params.lazyLoadingInPrevNext)
                            if (t > 1 || T.params.lazyLoadingInPrevNextAmount && T.params.lazyLoadingInPrevNextAmount > 1) {
                                var s = T.params.lazyLoadingInPrevNextAmount
                                    , i = t
                                    , r = Math.min(T.activeIndex + i + Math.max(s, i), T.slides.length)
                                    , n = Math.max(T.activeIndex - Math.max(i, s), 0);
                                for (a = T.activeIndex + t; a < r; a++)
                                    T.slides[a] && T.lazy.loadImageInSlide(a);
                                for (a = n; a < T.activeIndex; a++)
                                    T.slides[a] && T.lazy.loadImageInSlide(a)
                            } else {
                                var o = T.wrapper.children("." + T.params.slideNextClass);
                                o.length > 0 && T.lazy.loadImageInSlide(o.index());
                                var l = T.wrapper.children("." + T.params.slidePrevClass);
                                l.length > 0 && T.lazy.loadImageInSlide(l.index())
                            }
                    },
                    onTransitionStart: function() {
                        T.params.lazyLoading && (T.params.lazyLoadingOnTransitionStart || !T.params.lazyLoadingOnTransitionStart && !T.lazy.initialImageLoaded) && T.lazy.load()
                    },
                    onTransitionEnd: function() {
                        T.params.lazyLoading && !T.params.lazyLoadingOnTransitionStart && T.lazy.load()
                    }
                },
                T.scrollbar = {
                    isTouched: !1,
                    setDragPosition: function(e) {
                        var a = T.scrollbar
                            , t = T.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY
                            , s = t - a.track.offset()[T.isHorizontal() ? "left" : "top"] - a.dragSize / 2
                            , i = -T.minTranslate() * a.moveDivider
                            , r = -T.maxTranslate() * a.moveDivider;
                        s < i ? s = i : s > r && (s = r),
                            s = -s / a.moveDivider,
                            T.updateProgress(s),
                            T.setWrapperTranslate(s, !0)
                    },
                    dragStart: function(e) {
                        var a = T.scrollbar;
                        a.isTouched = !0,
                            e.preventDefault(),
                            e.stopPropagation(),
                            a.setDragPosition(e),
                            clearTimeout(a.dragTimeout),
                            a.track.transition(0),
                        T.params.scrollbarHide && a.track.css("opacity", 1),
                            T.wrapper.transition(100),
                            a.drag.transition(100),
                            T.emit("onScrollbarDragStart", T)
                    },
                    dragMove: function(e) {
                        var a = T.scrollbar;
                        a.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1,
                            a.setDragPosition(e),
                            T.wrapper.transition(0),
                            a.track.transition(0),
                            a.drag.transition(0),
                            T.emit("onScrollbarDragMove", T))
                    },
                    dragEnd: function(e) {
                        var a = T.scrollbar;
                        a.isTouched && (a.isTouched = !1,
                        T.params.scrollbarHide && (clearTimeout(a.dragTimeout),
                            a.dragTimeout = setTimeout(function() {
                                a.track.css("opacity", 0),
                                    a.track.transition(400)
                            }, 1e3)),
                            T.emit("onScrollbarDragEnd", T),
                        T.params.scrollbarSnapOnRelease && T.slideReset())
                    },
                    draggableEvents: function() {
                        return !1 !== T.params.simulateTouch || T.support.touch ? T.touchEvents : T.touchEventsDesktop
                    }(),
                    enableDraggable: function() {
                        var a = T.scrollbar
                            , t = T.support.touch ? a.track : document;
                        e(a.track).on(a.draggableEvents.start, a.dragStart),
                            e(t).on(a.draggableEvents.move, a.dragMove),
                            e(t).on(a.draggableEvents.end, a.dragEnd)
                    },
                    disableDraggable: function() {
                        var a = T.scrollbar
                            , t = T.support.touch ? a.track : document;
                        e(a.track).off(T.draggableEvents.start, a.dragStart),
                            e(t).off(T.draggableEvents.move, a.dragMove),
                            e(t).off(T.draggableEvents.end, a.dragEnd)
                    },
                    set: function() {
                        if (T.params.scrollbar) {
                            var a = T.scrollbar;
                            a.track = e(T.params.scrollbar),
                            T.params.uniqueNavElements && "string" == typeof T.params.scrollbar && a.track.length > 1 && 1 === T.container.find(T.params.scrollbar).length && (a.track = T.container.find(T.params.scrollbar)),
                                a.drag = a.track.find(".swiper-scrollbar-drag"),
                            0 === a.drag.length && (a.drag = e('<div class="swiper-scrollbar-drag"></div>'),
                                a.track.append(a.drag)),
                                a.drag[0].style.width = "",
                                a.drag[0].style.height = "",
                                a.trackSize = T.isHorizontal() ? a.track[0].offsetWidth : a.track[0].offsetHeight,
                                a.divider = T.size / T.virtualSize,
                                a.moveDivider = a.divider * (a.trackSize / T.size),
                                a.dragSize = a.trackSize * a.divider,
                                T.isHorizontal() ? a.drag[0].style.width = a.dragSize + "px" : a.drag[0].style.height = a.dragSize + "px",
                                a.divider >= 1 ? a.track[0].style.display = "none" : a.track[0].style.display = "",
                            T.params.scrollbarHide && (a.track[0].style.opacity = 0)
                        }
                    },
                    setTranslate: function() {
                        if (T.params.scrollbar) {
                            var e, a = T.scrollbar, t = (T.translate,
                                a.dragSize);
                            e = (a.trackSize - a.dragSize) * T.progress,
                                T.rtl && T.isHorizontal() ? (e = -e,
                                    e > 0 ? (t = a.dragSize - e,
                                        e = 0) : -e + a.dragSize > a.trackSize && (t = a.trackSize + e)) : e < 0 ? (t = a.dragSize + e,
                                    e = 0) : e + a.dragSize > a.trackSize && (t = a.trackSize - e),
                                T.isHorizontal() ? (T.support.transforms3d ? a.drag.transform("translate3d(" + e + "px, 0, 0)") : a.drag.transform("translateX(" + e + "px)"),
                                    a.drag[0].style.width = t + "px") : (T.support.transforms3d ? a.drag.transform("translate3d(0px, " + e + "px, 0)") : a.drag.transform("translateY(" + e + "px)"),
                                    a.drag[0].style.height = t + "px"),
                            T.params.scrollbarHide && (clearTimeout(a.timeout),
                                a.track[0].style.opacity = 1,
                                a.timeout = setTimeout(function() {
                                    a.track[0].style.opacity = 0,
                                        a.track.transition(400)
                                }, 1e3))
                        }
                    },
                    setTransition: function(e) {
                        T.params.scrollbar && T.scrollbar.drag.transition(e)
                    }
                },
                T.controller = {
                    LinearSpline: function(e, a) {
                        this.x = e,
                            this.y = a,
                            this.lastIndex = e.length - 1;
                        var t, s;
                        this.x.length,
                            this.interpolate = function(e) {
                                return e ? (s = i(this.x, e),
                                    t = s - 1,
                                (e - this.x[t]) * (this.y[s] - this.y[t]) / (this.x[s] - this.x[t]) + this.y[t]) : 0
                            }
                        ;
                        var i = function() {
                            var e, a, t;
                            return function(s, i) {
                                for (a = -1,
                                         e = s.length; e - a > 1; )
                                    s[t = e + a >> 1] <= i ? a = t : e = t;
                                return e
                            }
                        }()
                    },
                    getInterpolateFunction: function(e) {
                        T.controller.spline || (T.controller.spline = T.params.loop ? new T.controller.LinearSpline(T.slidesGrid,e.slidesGrid) : new T.controller.LinearSpline(T.snapGrid,e.snapGrid))
                    },
                    setTranslate: function(e, t) {
                        function s(a) {
                            e = a.rtl && "horizontal" === a.params.direction ? -T.translate : T.translate,
                            "slide" === T.params.controlBy && (T.controller.getInterpolateFunction(a),
                                r = -T.controller.spline.interpolate(-e)),
                            r && "container" !== T.params.controlBy || (i = (a.maxTranslate() - a.minTranslate()) / (T.maxTranslate() - T.minTranslate()),
                                r = (e - T.minTranslate()) * i + a.minTranslate()),
                            T.params.controlInverse && (r = a.maxTranslate() - r),
                                a.updateProgress(r),
                                a.setWrapperTranslate(r, !1, T),
                                a.updateActiveIndex()
                        }
                        var i, r, n = T.params.control;
                        if (T.isArray(n))
                            for (var o = 0; o < n.length; o++)
                                n[o] !== t && n[o]instanceof a && s(n[o]);
                        else
                            n instanceof a && t !== n && s(n)
                    },
                    setTransition: function(e, t) {
                        function s(a) {
                            a.setWrapperTransition(e, T),
                            0 !== e && (a.onTransitionStart(),
                                a.wrapper.transitionEnd(function() {
                                    r && (a.params.loop && "slide" === T.params.controlBy && a.fixLoop(),
                                        a.onTransitionEnd())
                                }))
                        }
                        var i, r = T.params.control;
                        if (T.isArray(r))
                            for (i = 0; i < r.length; i++)
                                r[i] !== t && r[i]instanceof a && s(r[i]);
                        else
                            r instanceof a && t !== r && s(r)
                    }
                },
                T.hashnav = {
                    onHashCange: function(e, a) {
                        var t = document.location.hash.replace("#", "");
                        t !== T.slides.eq(T.activeIndex).attr("data-hash") && T.slideTo(T.wrapper.children("." + T.params.slideClass + '[data-hash="' + t + '"]').index())
                    },
                    attachEvents: function(a) {
                        var t = a ? "off" : "on";
                        e(window)[t]("hashchange", T.hashnav.onHashCange)
                    },
                    setHash: function() {
                        if (T.hashnav.initialized && T.params.hashnav)
                            if (T.params.replaceState && window.history && window.history.replaceState)
                                window.history.replaceState(null, null, "#" + T.slides.eq(T.activeIndex).attr("data-hash") || "");
                            else {
                                var e = T.slides.eq(T.activeIndex)
                                    , a = e.attr("data-hash") || e.attr("data-history");
                                document.location.hash = a || ""
                            }
                    },
                    init: function() {
                        if (T.params.hashnav && !T.params.history) {
                            T.hashnav.initialized = !0;
                            var e = document.location.hash.replace("#", "");
                            if (e) {
                                for (var a = 0, t = T.slides.length; a < t; a++) {
                                    var s = T.slides.eq(a);
                                    if ((s.attr("data-hash") || s.attr("data-history")) === e && !s.hasClass(T.params.slideDuplicateClass)) {
                                        var i = s.index();
                                        T.slideTo(i, 0, T.params.runCallbacksOnInit, !0)
                                    }
                                }
                                T.params.hashnavWatchState && T.hashnav.attachEvents()
                            }
                        }
                    },
                    destroy: function() {
                        T.params.hashnavWatchState && T.hashnav.attachEvents(!0)
                    }
                },
                T.history = {
                    init: function() {
                        if (T.params.history) {
                            if (!window.history || !window.history.pushState)
                                return T.params.history = !1,
                                    void (T.params.hashnav = !0);
                            T.history.initialized = !0,
                                this.paths = this.getPathValues(),
                            (this.paths.key || this.paths.value) && (this.scrollToSlide(0, this.paths.value, T.params.runCallbacksOnInit),
                            T.params.replaceState || window.addEventListener("popstate", this.setHistoryPopState))
                        }
                    },
                    setHistoryPopState: function() {
                        T.history.paths = T.history.getPathValues(),
                            T.history.scrollToSlide(T.params.speed, T.history.paths.value, !1)
                    },
                    getPathValues: function() {
                        var e = window.location.pathname.slice(1).split("/")
                            , a = e.length;
                        return {
                            key: e[a - 2],
                            value: e[a - 1]
                        }
                    },
                    setHistory: function(e, a) {
                        if (T.history.initialized && T.params.history) {
                            var t = T.slides.eq(a)
                                , s = this.slugify(t.attr("data-history"));
                            window.location.pathname.includes(e) || (s = e + "/" + s),
                                T.params.replaceState ? window.history.replaceState(null, null, s) : window.history.pushState(null, null, s)
                        }
                    },
                    slugify: function(e) {
                        return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
                    },
                    scrollToSlide: function(e, a, t) {
                        if (a)
                            for (var s = 0, i = T.slides.length; s < i; s++) {
                                var r = T.slides.eq(s)
                                    , n = this.slugify(r.attr("data-history"));
                                if (n === a && !r.hasClass(T.params.slideDuplicateClass)) {
                                    var o = r.index();
                                    T.slideTo(o, e, t)
                                }
                            }
                        else
                            T.slideTo(0, e, t)
                    }
                },
                T.disableKeyboardControl = function() {
                    T.params.keyboardControl = !1,
                        e(document).off("keydown", p)
                }
                ,
                T.enableKeyboardControl = function() {
                    T.params.keyboardControl = !0,
                        e(document).on("keydown", p)
                }
                ,
                T.mousewheel = {
                    event: !1,
                    lastScrollTime: (new window.Date).getTime()
                },
            T.params.mousewheelControl && (T.mousewheel.event = navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function() {
                var e = "onwheel"
                    , a = e in document;
                if (!a) {
                    var t = document.createElement("div");
                    t.setAttribute(e, "return;"),
                        a = "function" == typeof t[e]
                }
                return !a && document.implementation && document.implementation.hasFeature && !0 !== document.implementation.hasFeature("", "") && (a = document.implementation.hasFeature("Events.wheel", "3.0")),
                    a
            }() ? "wheel" : "mousewheel"),
                T.disableMousewheelControl = function() {
                    if (!T.mousewheel.event)
                        return !1;
                    var a = T.container;
                    return "container" !== T.params.mousewheelEventsTarged && (a = e(T.params.mousewheelEventsTarged)),
                        a.off(T.mousewheel.event, d),
                        !0
                }
                ,
                T.enableMousewheelControl = function() {
                    if (!T.mousewheel.event)
                        return !1;
                    var a = T.container;
                    return "container" !== T.params.mousewheelEventsTarged && (a = e(T.params.mousewheelEventsTarged)),
                        a.on(T.mousewheel.event, d),
                        !0
                }
                ,
                T.parallax = {
                    setTranslate: function() {
                        T.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                            c(this, T.progress)
                        }),
                            T.slides.each(function() {
                                var a = e(this);
                                a.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                                    c(this, Math.min(Math.max(a[0].progress, -1), 1))
                                })
                            })
                    },
                    setTransition: function(a) {
                        void 0 === a && (a = T.params.speed),
                            T.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                                var t = e(this)
                                    , s = parseInt(t.attr("data-swiper-parallax-duration"), 10) || a;
                                0 === a && (s = 0),
                                    t.transition(s)
                            })
                    }
                },
                T.zoom = {
                    scale: 1,
                    currentScale: 1,
                    isScaling: !1,
                    gesture: {
                        slide: void 0,
                        slideWidth: void 0,
                        slideHeight: void 0,
                        image: void 0,
                        imageWrap: void 0,
                        zoomMax: T.params.zoomMax
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
                    },
                    getDistanceBetweenTouches: function(e) {
                        if (e.targetTouches.length < 2)
                            return 1;
                        var a = e.targetTouches[0].pageX
                            , t = e.targetTouches[0].pageY
                            , s = e.targetTouches[1].pageX
                            , i = e.targetTouches[1].pageY;
                        return Math.sqrt(Math.pow(s - a, 2) + Math.pow(i - t, 2))
                    },
                    onGestureStart: function(a) {
                        var t = T.zoom;
                        if (!T.support.gestures) {
                            if ("touchstart" !== a.type || "touchstart" === a.type && a.targetTouches.length < 2)
                                return;
                            t.gesture.scaleStart = t.getDistanceBetweenTouches(a)
                        }
                        return t.gesture.slide && t.gesture.slide.length || (t.gesture.slide = e(this),
                        0 === t.gesture.slide.length && (t.gesture.slide = T.slides.eq(T.activeIndex)),
                            t.gesture.image = t.gesture.slide.find("img, svg, canvas"),
                            t.gesture.imageWrap = t.gesture.image.parent("." + T.params.zoomContainerClass),
                            t.gesture.zoomMax = t.gesture.imageWrap.attr("data-swiper-zoom") || T.params.zoomMax,
                        0 !== t.gesture.imageWrap.length) ? (t.gesture.image.transition(0),
                            void (t.isScaling = !0)) : void (t.gesture.image = void 0)
                    },
                    onGestureChange: function(e) {
                        var a = T.zoom;
                        if (!T.support.gestures) {
                            if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2)
                                return;
                            a.gesture.scaleMove = a.getDistanceBetweenTouches(e)
                        }
                        a.gesture.image && 0 !== a.gesture.image.length && (T.support.gestures ? a.scale = e.scale * a.currentScale : a.scale = a.gesture.scaleMove / a.gesture.scaleStart * a.currentScale,
                        a.scale > a.gesture.zoomMax && (a.scale = a.gesture.zoomMax - 1 + Math.pow(a.scale - a.gesture.zoomMax + 1, .5)),
                        a.scale < T.params.zoomMin && (a.scale = T.params.zoomMin + 1 - Math.pow(T.params.zoomMin - a.scale + 1, .5)),
                            a.gesture.image.transform("translate3d(0,0,0) scale(" + a.scale + ")"))
                    },
                    onGestureEnd: function(e) {
                        var a = T.zoom;
                        !T.support.gestures && ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2) || a.gesture.image && 0 !== a.gesture.image.length && (a.scale = Math.max(Math.min(a.scale, a.gesture.zoomMax), T.params.zoomMin),
                            a.gesture.image.transition(T.params.speed).transform("translate3d(0,0,0) scale(" + a.scale + ")"),
                            a.currentScale = a.scale,
                            a.isScaling = !1,
                        1 === a.scale && (a.gesture.slide = void 0))
                    },
                    onTouchStart: function(e, a) {
                        var t = e.zoom;
                        t.gesture.image && 0 !== t.gesture.image.length && (t.image.isTouched || ("android" === e.device.os && a.preventDefault(),
                            t.image.isTouched = !0,
                            t.image.touchesStart.x = "touchstart" === a.type ? a.targetTouches[0].pageX : a.pageX,
                            t.image.touchesStart.y = "touchstart" === a.type ? a.targetTouches[0].pageY : a.pageY))
                    },
                    onTouchMove: function(e) {
                        var a = T.zoom;
                        if (a.gesture.image && 0 !== a.gesture.image.length && (T.allowClick = !1,
                            a.image.isTouched && a.gesture.slide)) {
                            a.image.isMoved || (a.image.width = a.gesture.image[0].offsetWidth,
                                a.image.height = a.gesture.image[0].offsetHeight,
                                a.image.startX = T.getTranslate(a.gesture.imageWrap[0], "x") || 0,
                                a.image.startY = T.getTranslate(a.gesture.imageWrap[0], "y") || 0,
                                a.gesture.slideWidth = a.gesture.slide[0].offsetWidth,
                                a.gesture.slideHeight = a.gesture.slide[0].offsetHeight,
                                a.gesture.imageWrap.transition(0),
                            T.rtl && (a.image.startX = -a.image.startX),
                            T.rtl && (a.image.startY = -a.image.startY));
                            var t = a.image.width * a.scale
                                , s = a.image.height * a.scale;
                            if (!(t < a.gesture.slideWidth && s < a.gesture.slideHeight)) {
                                if (a.image.minX = Math.min(a.gesture.slideWidth / 2 - t / 2, 0),
                                        a.image.maxX = -a.image.minX,
                                        a.image.minY = Math.min(a.gesture.slideHeight / 2 - s / 2, 0),
                                        a.image.maxY = -a.image.minY,
                                        a.image.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX,
                                        a.image.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY,
                                    !a.image.isMoved && !a.isScaling) {
                                    if (T.isHorizontal() && Math.floor(a.image.minX) === Math.floor(a.image.startX) && a.image.touchesCurrent.x < a.image.touchesStart.x || Math.floor(a.image.maxX) === Math.floor(a.image.startX) && a.image.touchesCurrent.x > a.image.touchesStart.x)
                                        return void (a.image.isTouched = !1);
                                    if (!T.isHorizontal() && Math.floor(a.image.minY) === Math.floor(a.image.startY) && a.image.touchesCurrent.y < a.image.touchesStart.y || Math.floor(a.image.maxY) === Math.floor(a.image.startY) && a.image.touchesCurrent.y > a.image.touchesStart.y)
                                        return void (a.image.isTouched = !1)
                                }
                                e.preventDefault(),
                                    e.stopPropagation(),
                                    a.image.isMoved = !0,
                                    a.image.currentX = a.image.touchesCurrent.x - a.image.touchesStart.x + a.image.startX,
                                    a.image.currentY = a.image.touchesCurrent.y - a.image.touchesStart.y + a.image.startY,
                                a.image.currentX < a.image.minX && (a.image.currentX = a.image.minX + 1 - Math.pow(a.image.minX - a.image.currentX + 1, .8)),
                                a.image.currentX > a.image.maxX && (a.image.currentX = a.image.maxX - 1 + Math.pow(a.image.currentX - a.image.maxX + 1, .8)),
                                a.image.currentY < a.image.minY && (a.image.currentY = a.image.minY + 1 - Math.pow(a.image.minY - a.image.currentY + 1, .8)),
                                a.image.currentY > a.image.maxY && (a.image.currentY = a.image.maxY - 1 + Math.pow(a.image.currentY - a.image.maxY + 1, .8)),
                                a.velocity.prevPositionX || (a.velocity.prevPositionX = a.image.touchesCurrent.x),
                                a.velocity.prevPositionY || (a.velocity.prevPositionY = a.image.touchesCurrent.y),
                                a.velocity.prevTime || (a.velocity.prevTime = Date.now()),
                                    a.velocity.x = (a.image.touchesCurrent.x - a.velocity.prevPositionX) / (Date.now() - a.velocity.prevTime) / 2,
                                    a.velocity.y = (a.image.touchesCurrent.y - a.velocity.prevPositionY) / (Date.now() - a.velocity.prevTime) / 2,
                                Math.abs(a.image.touchesCurrent.x - a.velocity.prevPositionX) < 2 && (a.velocity.x = 0),
                                Math.abs(a.image.touchesCurrent.y - a.velocity.prevPositionY) < 2 && (a.velocity.y = 0),
                                    a.velocity.prevPositionX = a.image.touchesCurrent.x,
                                    a.velocity.prevPositionY = a.image.touchesCurrent.y,
                                    a.velocity.prevTime = Date.now(),
                                    a.gesture.imageWrap.transform("translate3d(" + a.image.currentX + "px, " + a.image.currentY + "px,0)")
                            }
                        }
                    },
                    onTouchEnd: function(e, a) {
                        var t = e.zoom;
                        if (t.gesture.image && 0 !== t.gesture.image.length) {
                            if (!t.image.isTouched || !t.image.isMoved)
                                return t.image.isTouched = !1,
                                    void (t.image.isMoved = !1);
                            t.image.isTouched = !1,
                                t.image.isMoved = !1;
                            var s = 300
                                , i = 300
                                , r = t.velocity.x * s
                                , n = t.image.currentX + r
                                , o = t.velocity.y * i
                                , l = t.image.currentY + o;
                            0 !== t.velocity.x && (s = Math.abs((n - t.image.currentX) / t.velocity.x)),
                            0 !== t.velocity.y && (i = Math.abs((l - t.image.currentY) / t.velocity.y));
                            var p = Math.max(s, i);
                            t.image.currentX = n,
                                t.image.currentY = l;
                            var d = t.image.width * t.scale
                                , u = t.image.height * t.scale;
                            t.image.minX = Math.min(t.gesture.slideWidth / 2 - d / 2, 0),
                                t.image.maxX = -t.image.minX,
                                t.image.minY = Math.min(t.gesture.slideHeight / 2 - u / 2, 0),
                                t.image.maxY = -t.image.minY,
                                t.image.currentX = Math.max(Math.min(t.image.currentX, t.image.maxX), t.image.minX),
                                t.image.currentY = Math.max(Math.min(t.image.currentY, t.image.maxY), t.image.minY),
                                t.gesture.imageWrap.transition(p).transform("translate3d(" + t.image.currentX + "px, " + t.image.currentY + "px,0)")
                        }
                    },
                    onTransitionEnd: function(e) {
                        var a = e.zoom;
                        a.gesture.slide && e.previousIndex !== e.activeIndex && (a.gesture.image.transform("translate3d(0,0,0) scale(1)"),
                            a.gesture.imageWrap.transform("translate3d(0,0,0)"),
                            a.gesture.slide = a.gesture.image = a.gesture.imageWrap = void 0,
                            a.scale = a.currentScale = 1)
                    },
                    toggleZoom: function(a, t) {
                        var s = a.zoom;
                        if (s.gesture.slide || (s.gesture.slide = a.clickedSlide ? e(a.clickedSlide) : a.slides.eq(a.activeIndex),
                                s.gesture.image = s.gesture.slide.find("img, svg, canvas"),
                                s.gesture.imageWrap = s.gesture.image.parent("." + a.params.zoomContainerClass)),
                            s.gesture.image && 0 !== s.gesture.image.length) {
                            var i, r, n, o, l, p, d, u, c, m, h, g, f, v, w, y, x, T;
                            void 0 === s.image.touchesStart.x && t ? (i = "touchend" === t.type ? t.changedTouches[0].pageX : t.pageX,
                                r = "touchend" === t.type ? t.changedTouches[0].pageY : t.pageY) : (i = s.image.touchesStart.x,
                                r = s.image.touchesStart.y),
                                s.scale && 1 !== s.scale ? (s.scale = s.currentScale = 1,
                                    s.gesture.imageWrap.transition(300).transform("translate3d(0,0,0)"),
                                    s.gesture.image.transition(300).transform("translate3d(0,0,0) scale(1)"),
                                    s.gesture.slide = void 0) : (s.scale = s.currentScale = s.gesture.imageWrap.attr("data-swiper-zoom") || a.params.zoomMax,
                                    t ? (x = s.gesture.slide[0].offsetWidth,
                                        T = s.gesture.slide[0].offsetHeight,
                                        n = s.gesture.slide.offset().left,
                                        o = s.gesture.slide.offset().top,
                                        l = n + x / 2 - i,
                                        p = o + T / 2 - r,
                                        c = s.gesture.image[0].offsetWidth,
                                        m = s.gesture.image[0].offsetHeight,
                                        h = c * s.scale,
                                        g = m * s.scale,
                                        f = Math.min(x / 2 - h / 2, 0),
                                        v = Math.min(T / 2 - g / 2, 0),
                                        w = -f,
                                        y = -v,
                                        d = l * s.scale,
                                        u = p * s.scale,
                                    d < f && (d = f),
                                    d > w && (d = w),
                                    u < v && (u = v),
                                    u > y && (u = y)) : (d = 0,
                                        u = 0),
                                    s.gesture.imageWrap.transition(300).transform("translate3d(" + d + "px, " + u + "px,0)"),
                                    s.gesture.image.transition(300).transform("translate3d(0,0,0) scale(" + s.scale + ")"))
                        }
                    },
                    attachEvents: function(a) {
                        var t = a ? "off" : "on";
                        if (T.params.zoom) {
                            var s = (T.slides,
                            !("touchstart" !== T.touchEvents.start || !T.support.passiveListener || !T.params.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            });
                            T.support.gestures ? (T.slides[t]("gesturestart", T.zoom.onGestureStart, s),
                                T.slides[t]("gesturechange", T.zoom.onGestureChange, s),
                                T.slides[t]("gestureend", T.zoom.onGestureEnd, s)) : "touchstart" === T.touchEvents.start && (T.slides[t](T.touchEvents.start, T.zoom.onGestureStart, s),
                                    T.slides[t](T.touchEvents.move, T.zoom.onGestureChange, s),
                                    T.slides[t](T.touchEvents.end, T.zoom.onGestureEnd, s)),
                                T[t]("touchStart", T.zoom.onTouchStart),
                                T.slides.each(function(a, s) {
                                    e(s).find("." + T.params.zoomContainerClass).length > 0 && e(s)[t](T.touchEvents.move, T.zoom.onTouchMove)
                                }),
                                T[t]("touchEnd", T.zoom.onTouchEnd),
                                T[t]("transitionEnd", T.zoom.onTransitionEnd),
                            T.params.zoomToggle && T.on("doubleTap", T.zoom.toggleZoom)
                        }
                    },
                    init: function() {
                        T.zoom.attachEvents()
                    },
                    destroy: function() {
                        T.zoom.attachEvents(!0)
                    }
                },
                T._plugins = [];
            for (var A in T.plugins) {
                var O = T.plugins[A](T, T.params[A]);
                O && T._plugins.push(O)
            }
            return T.callPlugins = function(e) {
                for (var a = 0; a < T._plugins.length; a++)
                    e in T._plugins[a] && T._plugins[a][e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
            }
                ,
                T.emitterEventListeners = {},
                T.emit = function(e) {
                    T.params[e] && T.params[e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                    var a;
                    if (T.emitterEventListeners[e])
                        for (a = 0; a < T.emitterEventListeners[e].length; a++)
                            T.emitterEventListeners[e][a](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                    T.callPlugins && T.callPlugins(e, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
                }
                ,
                T.on = function(e, a) {
                    return e = m(e),
                    T.emitterEventListeners[e] || (T.emitterEventListeners[e] = []),
                        T.emitterEventListeners[e].push(a),
                        T
                }
                ,
                T.off = function(e, a) {
                    var t;
                    if (e = m(e),
                        void 0 === a)
                        return T.emitterEventListeners[e] = [],
                            T;
                    if (T.emitterEventListeners[e] && 0 !== T.emitterEventListeners[e].length) {
                        for (t = 0; t < T.emitterEventListeners[e].length; t++)
                            T.emitterEventListeners[e][t] === a && T.emitterEventListeners[e].splice(t, 1);
                        return T
                    }
                }
                ,
                T.once = function(e, a) {
                    e = m(e);
                    var t = function t() {
                        a(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]),
                            T.off(e, t)
                    };
                    return T.on(e, t),
                        T
                }
                ,
                T.a11y = {
                    makeFocusable: function(e) {
                        return e.attr("tabIndex", "0"),
                            e
                    },
                    addRole: function(e, a) {
                        return e.attr("role", a),
                            e
                    },
                    addLabel: function(e, a) {
                        return e.attr("aria-label", a),
                            e
                    },
                    disable: function(e) {
                        return e.attr("aria-disabled", !0),
                            e
                    },
                    enable: function(e) {
                        return e.attr("aria-disabled", !1),
                            e
                    },
                    onEnterKey: function(a) {
                        13 === a.keyCode && (e(a.target).is(T.params.nextButton) ? (T.onClickNext(a),
                            T.isEnd ? T.a11y.notify(T.params.lastSlideMessage) : T.a11y.notify(T.params.nextSlideMessage)) : e(a.target).is(T.params.prevButton) && (T.onClickPrev(a),
                                T.isBeginning ? T.a11y.notify(T.params.firstSlideMessage) : T.a11y.notify(T.params.prevSlideMessage)),
                        e(a.target).is("." + T.params.bulletClass) && e(a.target)[0].click())
                    },
                    liveRegion: e('<span class="' + T.params.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>'),
                    notify: function(e) {
                        var a = T.a11y.liveRegion;
                        0 !== a.length && (a.html(""),
                            a.html(e))
                    },
                    init: function() {
                        T.params.nextButton && T.nextButton && T.nextButton.length > 0 && (T.a11y.makeFocusable(T.nextButton),
                            T.a11y.addRole(T.nextButton, "button"),
                            T.a11y.addLabel(T.nextButton, T.params.nextSlideMessage)),
                        T.params.prevButton && T.prevButton && T.prevButton.length > 0 && (T.a11y.makeFocusable(T.prevButton),
                            T.a11y.addRole(T.prevButton, "button"),
                            T.a11y.addLabel(T.prevButton, T.params.prevSlideMessage)),
                            e(T.container).append(T.a11y.liveRegion)
                    },
                    initPagination: function() {
                        T.params.pagination && T.params.paginationClickable && T.bullets && T.bullets.length && T.bullets.each(function() {
                            var a = e(this);
                            T.a11y.makeFocusable(a),
                                T.a11y.addRole(a, "button"),
                                T.a11y.addLabel(a, T.params.paginationBulletMessage.replace(/{{index}}/, a.index() + 1))
                        })
                    },
                    destroy: function() {
                        T.a11y.liveRegion && T.a11y.liveRegion.length > 0 && T.a11y.liveRegion.remove()
                    }
                },
                T.init = function() {
                    T.params.loop && T.createLoop(),
                        T.updateContainerSize(),
                        T.updateSlidesSize(),
                        T.updatePagination(),
                    T.params.scrollbar && T.scrollbar && (T.scrollbar.set(),
                    T.params.scrollbarDraggable && T.scrollbar.enableDraggable()),
                    "slide" !== T.params.effect && T.effects[T.params.effect] && (T.params.loop || T.updateProgress(),
                        T.effects[T.params.effect].setTranslate()),
                        T.params.loop ? T.slideTo(T.params.initialSlide + T.loopedSlides, 0, T.params.runCallbacksOnInit) : (T.slideTo(T.params.initialSlide, 0, T.params.runCallbacksOnInit),
                        0 === T.params.initialSlide && (T.parallax && T.params.parallax && T.parallax.setTranslate(),
                        T.lazy && T.params.lazyLoading && (T.lazy.load(),
                            T.lazy.initialImageLoaded = !0))),
                        T.attachEvents(),
                    T.params.observer && T.support.observer && T.initObservers(),
                    T.params.preloadImages && !T.params.lazyLoading && T.preloadImages(),
                    T.params.zoom && T.zoom && T.zoom.init(),
                    T.params.autoplay && T.startAutoplay(),
                    T.params.keyboardControl && T.enableKeyboardControl && T.enableKeyboardControl(),
                    T.params.mousewheelControl && T.enableMousewheelControl && T.enableMousewheelControl(),
                    T.params.hashnavReplaceState && (T.params.replaceState = T.params.hashnavReplaceState),
                    T.params.history && T.history && T.history.init(),
                    T.params.hashnav && T.hashnav && T.hashnav.init(),
                    T.params.a11y && T.a11y && T.a11y.init(),
                        T.emit("onInit", T)
                }
                ,
                T.cleanupStyles = function() {
                    T.container.removeClass(T.classNames.join(" ")).removeAttr("style"),
                        T.wrapper.removeAttr("style"),
                    T.slides && T.slides.length && T.slides.removeClass([T.params.slideVisibleClass, T.params.slideActiveClass, T.params.slideNextClass, T.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"),
                    T.paginationContainer && T.paginationContainer.length && T.paginationContainer.removeClass(T.params.paginationHiddenClass),
                    T.bullets && T.bullets.length && T.bullets.removeClass(T.params.bulletActiveClass),
                    T.params.prevButton && e(T.params.prevButton).removeClass(T.params.buttonDisabledClass),
                    T.params.nextButton && e(T.params.nextButton).removeClass(T.params.buttonDisabledClass),
                    T.params.scrollbar && T.scrollbar && (T.scrollbar.track && T.scrollbar.track.length && T.scrollbar.track.removeAttr("style"),
                    T.scrollbar.drag && T.scrollbar.drag.length && T.scrollbar.drag.removeAttr("style"))
                }
                ,
                T.destroy = function(e, a) {
                    T.detachEvents(),
                        T.stopAutoplay(),
                    T.params.scrollbar && T.scrollbar && T.params.scrollbarDraggable && T.scrollbar.disableDraggable(),
                    T.params.loop && T.destroyLoop(),
                    a && T.cleanupStyles(),
                        T.disconnectObservers(),
                    T.params.zoom && T.zoom && T.zoom.destroy(),
                    T.params.keyboardControl && T.disableKeyboardControl && T.disableKeyboardControl(),
                    T.params.mousewheelControl && T.disableMousewheelControl && T.disableMousewheelControl(),
                    T.params.a11y && T.a11y && T.a11y.destroy(),
                    T.params.history && !T.params.replaceState && window.removeEventListener("popstate", T.history.setHistoryPopState),
                    T.params.hashnav && T.hashnav && T.hashnav.destroy(),
                        T.emit("onDestroy"),
                    !1 !== e && (T = null)
                }
                ,
                T.init(),
                T
        }
    };
    a.prototype = {
        isSafari: function() {
            var e = window.navigator.userAgent.toLowerCase();
            return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
        }(),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent),
        isArray: function(e) {
            return "[object Array]" === Object.prototype.toString.apply(e)
        },
        browser: {
            ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
            ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1,
            lteIE9: function() {
                var e = document.createElement("div");
                return e.innerHTML = "\x3c!--[if lte IE 9]><i></i><![endif]--\x3e",
                1 === e.getElementsByTagName("i").length
            }()
        },
        device: function() {
            var e = window.navigator.userAgent
                , a = e.match(/(Android);?[\s\/]+([\d.]+)?/)
                , t = e.match(/(iPad).*OS\s([\d_]+)/)
                , s = e.match(/(iPod)(.*OS\s([\d_]+))?/)
                , i = !t && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            return {
                ios: t || i || s,
                android: a
            }
        }(),
        support: {
            touch: window.Modernizr && !0 === Modernizr.touch || function() {
                return !!("ontouchstart"in window || window.DocumentTouch && document instanceof DocumentTouch)
            }(),
            transforms3d: window.Modernizr && !0 === Modernizr.csstransforms3d || function() {
                var e = document.createElement("div").style;
                return "webkitPerspective"in e || "MozPerspective"in e || "OPerspective"in e || "MsPerspective"in e || "perspective"in e
            }(),
            flexbox: function() {
                for (var e = document.createElement("div").style, a = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), t = 0; t < a.length; t++)
                    if (a[t]in e)
                        return !0
            }(),
            observer: function() {
                return "MutationObserver"in window || "WebkitMutationObserver"in window
            }(),
            passiveListener: function() {
                var e = !1;
                try {
                    var a = Object.defineProperty({}, "passive", {
                        get: function() {
                            e = !0
                        }
                    });
                    window.addEventListener("testPassiveListener", null, a)
                } catch (e) {}
                return e
            }(),
            gestures: function() {
                return "ongesturestart"in window
            }()
        },
        plugins: {}
    };
    for (var t = (function() {
        var e = function(e) {
            var a = this
                , t = 0;
            for (t = 0; t < e.length; t++)
                a[t] = e[t];
            return a.length = e.length,
                this
        }
            , a = function(a, t) {
            var s = []
                , i = 0;
            if (a && !t && a instanceof e)
                return a;
            if (a)
                if ("string" == typeof a) {
                    var r, n, o = a.trim();
                    if (o.indexOf("<") >= 0 && o.indexOf(">") >= 0) {
                        var l = "div";
                        for (0 === o.indexOf("<li") && (l = "ul"),
                             0 === o.indexOf("<tr") && (l = "tbody"),
                             0 !== o.indexOf("<td") && 0 !== o.indexOf("<th") || (l = "tr"),
                             0 === o.indexOf("<tbody") && (l = "table"),
                             0 === o.indexOf("<option") && (l = "select"),
                                 n = document.createElement(l),
                                 n.innerHTML = a,
                                 i = 0; i < n.childNodes.length; i++)
                            s.push(n.childNodes[i])
                    } else
                        for (r = t || "#" !== a[0] || a.match(/[ .<>:~]/) ? (t || document).querySelectorAll(a) : [document.getElementById(a.split("#")[1])],
                                 i = 0; i < r.length; i++)
                            r[i] && s.push(r[i])
                } else if (a.nodeType || a === window || a === document)
                    s.push(a);
                else if (a.length > 0 && a[0].nodeType)
                    for (i = 0; i < a.length; i++)
                        s.push(a[i]);
            return new e(s)
        };
        return e.prototype = {
            addClass: function(e) {
                if (void 0 === e)
                    return this;
                for (var a = e.split(" "), t = 0; t < a.length; t++)
                    for (var s = 0; s < this.length; s++)
                        this[s].classList.add(a[t]);
                return this
            },
            removeClass: function(e) {
                for (var a = e.split(" "), t = 0; t < a.length; t++)
                    for (var s = 0; s < this.length; s++)
                        this[s].classList.remove(a[t]);
                return this
            },
            hasClass: function(e) {
                return !!this[0] && this[0].classList.contains(e)
            },
            toggleClass: function(e) {
                for (var a = e.split(" "), t = 0; t < a.length; t++)
                    for (var s = 0; s < this.length; s++)
                        this[s].classList.toggle(a[t]);
                return this
            },
            attr: function(e, a) {
                if (1 === arguments.length && "string" == typeof e)
                    return this[0] ? this[0].getAttribute(e) : void 0;
                for (var t = 0; t < this.length; t++)
                    if (2 === arguments.length)
                        this[t].setAttribute(e, a);
                    else
                        for (var s in e)
                            this[t][s] = e[s],
                                this[t].setAttribute(s, e[s]);
                return this
            },
            removeAttr: function(e) {
                for (var a = 0; a < this.length; a++)
                    this[a].removeAttribute(e);
                return this
            },
            data: function(e, a) {
                if (void 0 !== a) {
                    for (var t = 0; t < this.length; t++) {
                        var s = this[t];
                        s.dom7ElementDataStorage || (s.dom7ElementDataStorage = {}),
                            s.dom7ElementDataStorage[e] = a
                    }
                    return this
                }
                if (this[0]) {
                    var i = this[0].getAttribute("data-" + e);
                    return i || (this[0].dom7ElementDataStorage && e in this[0].dom7ElementDataStorage ? this[0].dom7ElementDataStorage[e] : void 0)
                }
            },
            transform: function(e) {
                for (var a = 0; a < this.length; a++) {
                    var t = this[a].style;
                    t.webkitTransform = t.MsTransform = t.msTransform = t.MozTransform = t.OTransform = t.transform = e
                }
                return this
            },
            transition: function(e) {
                "string" != typeof e && (e += "ms");
                for (var a = 0; a < this.length; a++) {
                    var t = this[a].style;
                    t.webkitTransitionDuration = t.MsTransitionDuration = t.msTransitionDuration = t.MozTransitionDuration = t.OTransitionDuration = t.transitionDuration = e
                }
                return this
            },
            on: function(e, t, s, i) {
                function r(e) {
                    var i = e.target;
                    if (a(i).is(t))
                        s.call(i, e);
                    else
                        for (var r = a(i).parents(), n = 0; n < r.length; n++)
                            a(r[n]).is(t) && s.call(r[n], e)
                }
                var n, o, l = e.split(" ");
                for (n = 0; n < this.length; n++)
                    if ("function" == typeof t || !1 === t)
                        for ("function" == typeof t && (s = arguments[1],
                            i = arguments[2] || !1),
                                 o = 0; o < l.length; o++)
                            this[n].addEventListener(l[o], s, i);
                    else
                        for (o = 0; o < l.length; o++)
                            this[n].dom7LiveListeners || (this[n].dom7LiveListeners = []),
                                this[n].dom7LiveListeners.push({
                                    listener: s,
                                    liveListener: r
                                }),
                                this[n].addEventListener(l[o], r, i);
                return this
            },
            off: function(e, a, t, s) {
                for (var i = e.split(" "), r = 0; r < i.length; r++)
                    for (var n = 0; n < this.length; n++)
                        if ("function" == typeof a || !1 === a)
                            "function" == typeof a && (t = arguments[1],
                                s = arguments[2] || !1),
                                this[n].removeEventListener(i[r], t, s);
                        else if (this[n].dom7LiveListeners)
                            for (var o = 0; o < this[n].dom7LiveListeners.length; o++)
                                this[n].dom7LiveListeners[o].listener === t && this[n].removeEventListener(i[r], this[n].dom7LiveListeners[o].liveListener, s);
                return this
            },
            once: function(e, a, t, s) {
                function i(n) {
                    t(n),
                        r.off(e, a, i, s)
                }
                var r = this;
                "function" == typeof a && (a = !1,
                    t = arguments[1],
                    s = arguments[2]),
                    r.on(e, a, i, s)
            },
            trigger: function(e, a) {
                for (var t = 0; t < this.length; t++) {
                    var s;
                    try {
                        s = new window.CustomEvent(e,{
                            detail: a,
                            bubbles: !0,
                            cancelable: !0
                        })
                    } catch (t) {
                        s = document.createEvent("Event"),
                            s.initEvent(e, !0, !0),
                            s.detail = a
                    }
                    this[t].dispatchEvent(s)
                }
                return this
            },
            transitionEnd: function(e) {
                function a(r) {
                    if (r.target === this)
                        for (e.call(this, r),
                                 t = 0; t < s.length; t++)
                            i.off(s[t], a)
                }
                var t, s = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], i = this;
                if (e)
                    for (t = 0; t < s.length; t++)
                        i.on(s[t], a);
                return this
            },
            width: function() {
                return this[0] === window ? window.innerWidth : this.length > 0 ? parseFloat(this.css("width")) : null
            },
            outerWidth: function(e) {
                return this.length > 0 ? e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null
            },
            height: function() {
                return this[0] === window ? window.innerHeight : this.length > 0 ? parseFloat(this.css("height")) : null
            },
            outerHeight: function(e) {
                return this.length > 0 ? e ? this[0].offsetHeight + parseFloat(this.css("margin-top")) + parseFloat(this.css("margin-bottom")) : this[0].offsetHeight : null
            },
            offset: function() {
                if (this.length > 0) {
                    var e = this[0]
                        , a = e.getBoundingClientRect()
                        , t = document.body
                        , s = e.clientTop || t.clientTop || 0
                        , i = e.clientLeft || t.clientLeft || 0
                        , r = window.pageYOffset || e.scrollTop
                        , n = window.pageXOffset || e.scrollLeft;
                    return {
                        top: a.top + r - s,
                        left: a.left + n - i
                    }
                }
                return null
            },
            css: function(e, a) {
                var t;
                if (1 === arguments.length) {
                    if ("string" != typeof e) {
                        for (t = 0; t < this.length; t++)
                            for (var s in e)
                                this[t].style[s] = e[s];
                        return this
                    }
                    if (this[0])
                        return window.getComputedStyle(this[0], null).getPropertyValue(e)
                }
                if (2 === arguments.length && "string" == typeof e) {
                    for (t = 0; t < this.length; t++)
                        this[t].style[e] = a;
                    return this
                }
                return this
            },
            each: function(e) {
                for (var a = 0; a < this.length; a++)
                    e.call(this[a], a, this[a]);
                return this
            },
            html: function(e) {
                if (void 0 === e)
                    return this[0] ? this[0].innerHTML : void 0;
                for (var a = 0; a < this.length; a++)
                    this[a].innerHTML = e;
                return this
            },
            text: function(e) {
                if (void 0 === e)
                    return this[0] ? this[0].textContent.trim() : null;
                for (var a = 0; a < this.length; a++)
                    this[a].textContent = e;
                return this
            },
            is: function(t) {
                if (!this[0])
                    return !1;
                var s, i;
                if ("string" == typeof t) {
                    var r = this[0];
                    if (r === document)
                        return t === document;
                    if (r === window)
                        return t === window;
                    if (r.matches)
                        return r.matches(t);
                    if (r.webkitMatchesSelector)
                        return r.webkitMatchesSelector(t);
                    if (r.mozMatchesSelector)
                        return r.mozMatchesSelector(t);
                    if (r.msMatchesSelector)
                        return r.msMatchesSelector(t);
                    for (s = a(t),
                             i = 0; i < s.length; i++)
                        if (s[i] === this[0])
                            return !0;
                    return !1
                }
                if (t === document)
                    return this[0] === document;
                if (t === window)
                    return this[0] === window;
                if (t.nodeType || t instanceof e) {
                    for (s = t.nodeType ? [t] : t,
                             i = 0; i < s.length; i++)
                        if (s[i] === this[0])
                            return !0;
                    return !1
                }
                return !1
            },
            index: function() {
                if (this[0]) {
                    for (var e = this[0], a = 0; null !== (e = e.previousSibling); )
                        1 === e.nodeType && a++;
                    return a
                }
            },
            eq: function(a) {
                if (void 0 === a)
                    return this;
                var t, s = this.length;
                return a > s - 1 ? new e([]) : a < 0 ? (t = s + a,
                    new e(t < 0 ? [] : [this[t]])) : new e([this[a]])
            },
            append: function(a) {
                var t, s;
                for (t = 0; t < this.length; t++)
                    if ("string" == typeof a) {
                        var i = document.createElement("div");
                        for (i.innerHTML = a; i.firstChild; )
                            this[t].appendChild(i.firstChild)
                    } else if (a instanceof e)
                        for (s = 0; s < a.length; s++)
                            this[t].appendChild(a[s]);
                    else
                        this[t].appendChild(a);
                return this
            },
            prepend: function(a) {
                var t, s;
                for (t = 0; t < this.length; t++)
                    if ("string" == typeof a) {
                        var i = document.createElement("div");
                        for (i.innerHTML = a,
                                 s = i.childNodes.length - 1; s >= 0; s--)
                            this[t].insertBefore(i.childNodes[s], this[t].childNodes[0])
                    } else if (a instanceof e)
                        for (s = 0; s < a.length; s++)
                            this[t].insertBefore(a[s], this[t].childNodes[0]);
                    else
                        this[t].insertBefore(a, this[t].childNodes[0]);
                return this
            },
            insertBefore: function(e) {
                for (var t = a(e), s = 0; s < this.length; s++)
                    if (1 === t.length)
                        t[0].parentNode.insertBefore(this[s], t[0]);
                    else if (t.length > 1)
                        for (var i = 0; i < t.length; i++)
                            t[i].parentNode.insertBefore(this[s].cloneNode(!0), t[i])
            },
            insertAfter: function(e) {
                for (var t = a(e), s = 0; s < this.length; s++)
                    if (1 === t.length)
                        t[0].parentNode.insertBefore(this[s], t[0].nextSibling);
                    else if (t.length > 1)
                        for (var i = 0; i < t.length; i++)
                            t[i].parentNode.insertBefore(this[s].cloneNode(!0), t[i].nextSibling)
            },
            next: function(t) {
                return new e(this.length > 0 ? t ? this[0].nextElementSibling && a(this[0].nextElementSibling).is(t) ? [this[0].nextElementSibling] : [] : this[0].nextElementSibling ? [this[0].nextElementSibling] : [] : [])
            },
            nextAll: function(t) {
                var s = []
                    , i = this[0];
                if (!i)
                    return new e([]);
                for (; i.nextElementSibling; ) {
                    var r = i.nextElementSibling;
                    t ? a(r).is(t) && s.push(r) : s.push(r),
                        i = r
                }
                return new e(s)
            },
            prev: function(t) {
                return new e(this.length > 0 ? t ? this[0].previousElementSibling && a(this[0].previousElementSibling).is(t) ? [this[0].previousElementSibling] : [] : this[0].previousElementSibling ? [this[0].previousElementSibling] : [] : [])
            },
            prevAll: function(t) {
                var s = []
                    , i = this[0];
                if (!i)
                    return new e([]);
                for (; i.previousElementSibling; ) {
                    var r = i.previousElementSibling;
                    t ? a(r).is(t) && s.push(r) : s.push(r),
                        i = r
                }
                return new e(s)
            },
            parent: function(e) {
                for (var t = [], s = 0; s < this.length; s++)
                    e ? a(this[s].parentNode).is(e) && t.push(this[s].parentNode) : t.push(this[s].parentNode);
                return a(a.unique(t))
            },
            parents: function(e) {
                for (var t = [], s = 0; s < this.length; s++)
                    for (var i = this[s].parentNode; i; )
                        e ? a(i).is(e) && t.push(i) : t.push(i),
                            i = i.parentNode;
                return a(a.unique(t))
            },
            find: function(a) {
                for (var t = [], s = 0; s < this.length; s++)
                    for (var i = this[s].querySelectorAll(a), r = 0; r < i.length; r++)
                        t.push(i[r]);
                return new e(t)
            },
            children: function(t) {
                for (var s = [], i = 0; i < this.length; i++)
                    for (var r = this[i].childNodes, n = 0; n < r.length; n++)
                        t ? 1 === r[n].nodeType && a(r[n]).is(t) && s.push(r[n]) : 1 === r[n].nodeType && s.push(r[n]);
                return new e(a.unique(s))
            },
            remove: function() {
                for (var e = 0; e < this.length; e++)
                    this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                return this
            },
            add: function() {
                var e, t, s = this;
                for (e = 0; e < arguments.length; e++) {
                    var i = a(arguments[e]);
                    for (t = 0; t < i.length; t++)
                        s[s.length] = i[t],
                            s.length++
                }
                return s
            }
        },
            a.fn = e.prototype,
            a.unique = function(e) {
                for (var a = [], t = 0; t < e.length; t++)
                    -1 === a.indexOf(e[t]) && a.push(e[t]);
                return a
            }
            ,
            a
    }()), s = ["jQuery", "Zepto", "Dom7"], i = 0; i < s.length; i++)
        window[s[i]] && function(e) {
            e.fn.swiper = function(t) {
                var s;
                return e(this).each(function() {
                    var e = new a(this,t);
                    s || (s = e)
                }),
                    s
            }
        }(window[s[i]]);
    var r;
    r = void 0 === t ? window.Dom7 || window.Zepto || window.jQuery : t,
    r && ("transitionEnd"in r.fn || (r.fn.transitionEnd = function(e) {
            function a(r) {
                if (r.target === this)
                    for (e.call(this, r),
                             t = 0; t < s.length; t++)
                        i.off(s[t], a)
            }
            var t, s = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], i = this;
            if (e)
                for (t = 0; t < s.length; t++)
                    i.on(s[t], a);
            return this
        }
    ),
    "transform"in r.fn || (r.fn.transform = function(e) {
            for (var a = 0; a < this.length; a++) {
                var t = this[a].style;
                t.webkitTransform = t.MsTransform = t.msTransform = t.MozTransform = t.OTransform = t.transform = e
            }
            return this
        }
    ),
    "transition"in r.fn || (r.fn.transition = function(e) {
            "string" != typeof e && (e += "ms");
            for (var a = 0; a < this.length; a++) {
                var t = this[a].style;
                t.webkitTransitionDuration = t.MsTransitionDuration = t.msTransitionDuration = t.MozTransitionDuration = t.OTransitionDuration = t.transitionDuration = e
            }
            return this
        }
    ),
    "outerWidth"in r.fn || (r.fn.outerWidth = function(e) {
            return this.length > 0 ? e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null
        }
    )),
        window.Swiper = a
}(),
    "undefined" != typeof module ? module.exports = window.Swiper : "function" == typeof define && define.amd && define([], function() {
            return window.Swiper
        });
"use strict";
window.asModules = {},
    function(t, a, e, i) {
        a.historyBack = function() {
            e.history.back()
        }
            ,
            a.toggleActive = function(a) {
                "array" == typeof a ? t(a).each(function() {
                    this.toggleClass("as-active")
                }) : t(a).toggleClass("as-active")
            }
            ,
            a.activeOnScroll = function(a, e) {
                t(i).scroll(function() {
                    t(this).scrollTop() > e ? t(a).addClass("as-active") : t(a).removeClass("as-active")
                })
            }
            ,
            a.createDateInput = function(a) {
                var e = t(a)
                    , i = e.parent();
                e.datepicker({
                    language: "he",
                    format: "dd.mm.yyyy",
                    todayHighlight: !0,
                    container: i,
                    autoclose: !0,
                    orientation: "top left"
                })
            }
            ,
            a.createFileInput = function(a) {
                t(a).each(function() {
                    var a = t(this)
                        , e = a.next("label")
                        , i = e.find("[file-input-value]")
                        , s = e.find("[file-input-btn]");
                    a.on("change", function(t) {
                        var a = "";
                        this.files && this.files.length > 1 ? a = (this.getAttribute("data-multiple-caption") || "").replace("{count}", this.files.length) : t.target.value && (a = t.target.value.split("\\").pop()),
                            a ? (s.addClass("as-active"),
                                i.addClass("as-active"),
                                i.html(a)) : (s.removeClass("as-active"),
                                i.removeClass("as-active"),
                                i.html(i.html()))
                    }),
                        a.on("focus", function() {
                            a.addClass("has-focus")
                        }).on("blur", function() {
                            a.removeClass("has-focus")
                        })
                })
            }
    }(jQuery, window.asModules || {}, window, document);
"use strict";
!function(t) {
    t.fn.datepicker.dates.he = {
        days: ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת", "ראשון"],
        daysShort: ["א", "ב", "ג", "ד", "ה", "ו", "ש", "א"],
        daysMin: ["א", "ב", "ג", "ד", "ה", "ו", "ש", "א"],
        months: ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"],
        monthsShort: ["ינו", "פבר", "מרץ", "אפר", "מאי", "יונ", "יול", "אוג", "ספט", "אוק", "נוב", "דצמ"],
        today: "היום",
        rtl: !0
    }
}(jQuery);
"use strict";
!function(o, e) {
    e.goTopClickHandler = function() {
        o("body").animate({
            scrollTop: 0
        }, 700),
            o("header").attr("tabindex", -1).focus()
    }
}(jQuery, window.asModules || {});
"use strict";
!function(e, l, a) {
    var r = new l(".as-gallery-preview-slider",{
        nextButton: ".as-gallery-preview-slider__btn_next",
        prevButton: ".as-gallery-preview-slider__btn_prev",
        keyboardControl: !0,
        paginationClickable: !0,
        loop: !0,
        autoplay: 4e3,
        a11y: !0,
        spaceBetween: 0,
        speed: 600
    });
    a.galleryCloseHandler = function() {
        a.toggleActive(".as-gallery-preview")
    }
        ,
        a.galleryImageClickHandler = function(e) {
            r.slideTo(e, 0),
                a.toggleActive(".as-gallery-preview")
        }
        ,
        e(".as-gallery-container .as-gallery-container__img-wrap").each(function(l) {
            e(this).on("click", function() {
                a.galleryImageClickHandler(l + 1)
            })
        })
}(jQuery, Swiper, window.asModules || {});
"use strict";
!function(e, s) {
    var a = new s(".as-news-slider",{
        nextButton: ".as-news-slider__btn_next",
        prevButton: ".as-news-slider__btn_prev",
        keyboardControl: !0,
        a11y: !0,
        spaceBetween: 25,
        loop: !0,
        autoplay: 8e3,
        speed: 800
    })
        , t = !1;
    e(".as-news-slider__btn_pause").on("click", function() {
        t ? (e(this).find(".fi").removeClass("fi-play").addClass("fi-pause"),
            a.startAutoplay()) : (e(this).find(".fi").addClass("fi-play").removeClass("fi-pause"),
            a.stopAutoplay()),
            t = !t
    })
}(jQuery, Swiper);
"use strict";
!function(e, t) {
    var a = new t(".as-home-slider",{
        pagination: ".swiper-pagination",
        paginationType: "bullets",
        nextButton: ".as-home-slider__btn_next",
        prevButton: ".as-home-slider__btn_prev",
        keyboardControl: !0,
        paginationClickable: !0,
        loop: !0,
        autoplay: 4e3,
        a11y: !0,
        spaceBetween: 0,
        speed: 600,
        parallax: !0
    });
    e(".as-home-slider").hover(function() {
        a.stopAutoplay()
    }, function() {
        a.startAutoplay()
    })
}(jQuery, Swiper);
"use strict";
!function(n, o, e, t, a) {
    var i = n(".as-map-loader")
        , r = {
        address: "",
        title: "",
        image: "",
        content: "",
        button: {
            label: "",
            href: ""
        },
        color: "#333"
    }
        , s = function() {
        return /localhost/i.test(location.host) ? "www.pqpq3.co.il" : location.host
    }
        , l = function() {
        return n.post({
            url: "https://" + s() + "/Classes/mysqli/infoApi/map.php",
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            },
            crossDomain: !0,
            data: JSON.stringify({
                domain: location.host
            })
        }).catch(function(n) {
            throw new Error(n)
        })
    }
        , c = function(o) {
        var e = n.Deferred();
        return (new a.maps.Geocoder).geocode({
            address: o
        }, function(n, t) {
            t == a.maps.GeocoderStatus.OK ? e.resolve({
                coordinates: n[0].geometry.location
            }) : e.resolve({
                error: "Can't find \"" + o + '" coordinates'
            })
        }),
            e.promise()
    }
        , d = function() {
        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r
            , o = n.address
            , e = n.title
            , t = n.image
            , a = n.content
            , i = n.button
            , s = n.color;
        return '\n      <div class="as-map-info-window">\n        ' + (t ? '<div class="as-map-info-window__img-wrap">\n        <img class="as-map-info-window__img" src="' + t + '" alt="' + e + '" />\n      </div>' : "") + '\n        <div class="as-map-info-window__main">\n          <h1 class="as-map-info-window__title" style="color: ' + s + '">' + e + '</h1>\n          <h2 class="as-map-info-window__subtitle">' + o + '</h2>\n          <div class="as-map-info-window__content">' + a + "</div>\n          " + (i.href ? '<a \n        class="as-map-info-window__btn" \n        style="background: ' + s + '" \n        href="' + i.href + '" \n        target="_blank"\n      >\n        ' + i.label + "\n      </a>" : "") + "\n        </div>\n      </div>\n    "
    }
        , f = function(n) {
        return {
            scale: .15,
            path: "M78,0A78,78,0,0,0,0,78c0,43.08,78,180,78,180s78-136.92,78-180A78,78,0,0,0,78,0Zm0,121.64A43.64,43.64,0,1,1,121.64,78,43.64,43.64,0,0,1,78,121.64Z",
            strokeColor: "transparent",
            fillColor: n,
            fillOpacity: 1
        }
    }
        , m = function(o, e) {
        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r
            , i = n.Deferred();
        return c(t.address).then(function(n) {
            n.error && i.resolve(n);
            var r = new a.maps.Marker({
                position: n.coordinates,
                map: o,
                title: t.title,
                animation: a.maps.Animation.DROP,
                icon: f(t.color)
            });
            o.addListener("click", function() {
                e.close()
            }),
                r.addListener("click", function() {
                    e.close(),
                        e.setContent(d(t)),
                        e.open(o, r)
                }),
                i.resolve()
        }),
            i.promise()
    }
        , p = function(o) {
        var e = n.Deferred()
            , t = 0
            , i = new a.maps.Map(document.getElementById("map"),{
            zoom: 8,
            scaleControl: !1,
            center: {
                lat: 31.508,
                lng: 35.4345
            }
        })
            , r = new a.maps.InfoWindow
            , s = !0
            , l = !1
            , c = void 0;
        try {
            for (var d, f = o[Symbol.iterator](); !(s = (d = f.next()).done); s = !0) {
                var p = d.value;
                m(i, r, p).then(function(n) {
                    ++t === o.length && e.resolve(n)
                })
            }
        } catch (n) {
            l = !0,
                c = n
        } finally {
            try {
                !s && f.return && f.return()
            } finally {
                if (l)
                    throw c
            }
        }
        return e.promise()
    };
    a.maps.event.addDomListener(o, "load", function() {
        i.addClass("as-active"),
            l().then(function(n) {
                p(n).then(function(n) {
                    i.removeClass("as-active"),
                        console.warn(n.error)
                })
            })
    })
}(jQuery, window, location, window.asModules, window.google);
"use strict";
!function(e, n) {
    n.handleToggleMenu = function() {
        n.toggleActive(".as-menu"),
            n.toggleActive(".as-menu-mask"),
            e(".as-main, .as-footer").toggleClass("as-menu-open")
    }
        ,
        e(".as-menu-active-btn").each(function() {
            var t = !1
                , s = e(this);
            s.click(function() {
                n.toggleActive(s),
                    n.toggleActive(s.siblings(".as-menu__submenu")),
                    t = !t
            })
        })
}(jQuery, window.asModules || {});
"use strict";
!function(e, t) {
    e(document).ready(function() {
        t.createDateInput("input[data-datepicker]"),
            t.createFileInput("input[type=file]")
    })
}(jQuery, window.asModules || {});
