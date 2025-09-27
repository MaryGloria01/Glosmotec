"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [326], {
        21340: function(a, b, c) {
            c.d(b, {
                o: function() {
                    return f
                }
            });
            var d = c(35944),
                e = c(88078),
                f = function(a) {
                    var b = a.className;
                    return (0, d.BX)("div", {
                        className: "relative dark:bg-n5/5 rounded-2xl py-6 px-4 ".concat(void 0 === b ? "" : b),
                        children: [(0, d.tZ)(e.Z, {
                            className: "text-caption dark:bg-n5/5 w-1/3",
                            variant: "text",
                            animation: "wave"
                        }), (0, d.tZ)(e.Z, {
                            className: "dark:bg-n5/5 rounded-md h-14 mt-1",
                            variant: "rectangular",
                            animation: "wave"
                        }), (0, d.tZ)("div", {
                            style: {
                                height: 24
                            }
                        }), (0, d.tZ)(e.Z, {
                            className: "text-caption dark:bg-n5/5 w-1/2",
                            variant: "text",
                            animation: "wave"
                        }), (0, d.tZ)("div", {
                            className: "flex gap-2 relative no-scrollbar overflow-x-auto mt-1",
                            children: Array.from({
                                length: 4
                            }).map(function(a) {
                                return (0, d.tZ)(e.Z, {
                                    className: "rounded-xl rounded-tr-3xl w-[75px] dark:bg-n05/5 relative h-20",
                                    variant: "rectangular",
                                    animation: "wave"
                                })
                            })
                        }), (0, d.tZ)("div", {
                            style: {
                                height: 24
                            }
                        }), (0, d.tZ)(e.Z, {
                            className: "text-caption dark:bg-n5/5 w-1/2",
                            variant: "text",
                            animation: "wave"
                        }), (0, d.tZ)("div", {
                            className: "flex gap-2 relative no-scrollbar overflow-x-auto mt-1",
                            children: Array.from({
                                length: 3
                            }).map(function(a, b) {
                                return (0, d.tZ)(e.Z, {
                                    className: "rounded-xl rounded-tr-3xl w-1/3 ".concat(b < 2 ? "dark:bg-n05/5" : "", " relative h-20"),
                                    variant: "rectangular",
                                    animation: "wave"
                                })
                            })
                        }), (0, d.tZ)("div", {
                            style: {
                                height: 24
                            }
                        }), (0, d.tZ)(e.Z, {
                            className: "dark:bg-n5/5 rounded-md h-14 mt-1",
                            variant: "rectangular",
                            animation: "wave"
                        })]
                    })
                }
        },
        15434: function(a, b, c) {
            c.d(b, {
                Z: function() {
                    return p
                }
            });
            var d = c(47568),
                e = c(26042),
                f = c(69396),
                g = c(828),
                h = c(29815),
                i = c(34051),
                j = c.n(i),
                k = c(35944);
            c(67294);
            var l = c(80786),
                m = c(60486),
                n = c(26519),
                o = c(95801);

            function p(a) {
                var b, c = (0, l.rI)(),
                    i = c.state,
                    p = c.dispatch,
                    q = (0, n.Z)(),
                    r = q.supported,
                    s = q.getContacts,
                    t = "mobile_no",
                    u = null !== (b = a.productType) && void 0 !== b ? b : m.s5.buyData,
                    v = i[u],
                    w = v.activeInput.index,
                    x = v.mobile_no;
                a.contacts, a.multiple;
                var y, z = function(a, b) {
                        var c = {
                            type: l.Hp.UPDATE_FIELD,
                            payload: {
                                productType: u,
                                field: a,
                                value: b
                            }
                        };
                        p(c)
                    },
                    A = function(a) {
                        var b = document.getElementById(a);
                        b && b.focus()
                    },
                    B = function(b, c) {
                        var d = v[t],
                            g = (0, h.Z)(d),
                            i = b.target.value;
                        g[c] = (0, f.Z)((0, e.Z)({}, d[c]), {
                            value: void 0 === i ? "" : (0, o.IC)(i)
                        }), i || (g[c].name = ""), z(t, g), a.onChange && a.onChange(i)
                    },
                    C = function() {
                        var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                            b = arguments.length > 1 ? arguments[1] : void 0;
                        z("activeInput", {
                            ref: a,
                            index: b
                        })
                    },
                    D = function(a, b) {
                        var c;
                        B(a, b), null === (c = v.activeInput.ref) || void 0 === c || c.focus()
                    },
                    E = (y = (0, d.Z)(j().mark(function b() {
                        var c, d, e, f, i, k, l;
                        return j().wrap(function(b) {
                            for (;;) switch (b.prev = b.next) {
                                case 0:
                                    if (r) {
                                        b.next = 2;
                                        break
                                    }
                                    return b.abrupt("return", alert("Contacts isn't supported on this device"));
                                case 2:
                                    return b.next = 4, s();
                                case 4:
                                    c = b.sent, d = v[t], e = (0, h.Z)(d).filter(function(a) {
                                        return a.value
                                    }), f = c.map(function(a) {
                                        var b = (0, g.Z)(a.tel, 1)[0],
                                            c = (0, g.Z)(a.name, 1),
                                            d = c[0],
                                            e = (0, o.IC)(b);
                                        return {
                                            value: e,
                                            name: d
                                        }
                                    }), (i = e.concat(f)).length || (i = [{
                                        value: "",
                                        name: ""
                                    }]), z(t, i), l = (k = (0, g.Z)(i.slice(-1), 1))[0], a.onChange && a.onChange(l.value), setTimeout(function() {
                                        A("".concat(t).concat(l.value))
                                    }, 200);
                                case 14:
                                case "end":
                                    return b.stop()
                            }
                        }, b)
                    })), function() {
                        return y.apply(this, arguments)
                    }),
                    F = function(a, b) {
                        var c = "add" === a,
                            d = {
                                mobile_no: {
                                    value: ""
                                },
                                plan_id: "",
                                amount: "",
                                provider_id: ""
                            };
                        Object.keys(d).forEach(function(a) {
                            var e = v[a],
                                f = (0, g.Z)(e.slice(-1), 1)[0],
                                i = d[a] || f;
                            if (i) {
                                var j = c ? (0, h.Z)(e).concat([i]) : (0, h.Z)(e).filter(function(a, c) {
                                        return c !== b
                                    }),
                                    k = {
                                        type: l.Hp.UPDATE_FIELD,
                                        payload: {
                                            productType: u,
                                            field: a,
                                            value: j
                                        }
                                    };
                                p(k)
                            }
                        })
                    },
                    G = function(a, b) {
                        if ("Enter" === a.key && (a.preventDefault(), console.log("Pressed Enter Key"), x.every(function(a) {
                                var b;
                                return null === (b = (0, o.CN)(a.value)) || void 0 === b ? void 0 : b.isValid
                            }) && (F("add"), C(null, x.length))), "Backspace" === a.key && b && !x[b].value) {
                            var c = b - 1,
                                d = b + 1;
                            F("remove", b), setTimeout(function() {
                                var a, b;
                                A("".concat(t).concat(null !== (b = null === (a = x[d]) || void 0 === a ? void 0 : a.value) && void 0 !== b ? b : x[c].value))
                            }, 200)
                        }
                    };
                return (0, k.tZ)("div", {
                    className: "flex flex-col gap-2",
                    children: null == x ? void 0 : x.map(function(a, b) {
                        return (0, k.BX)("label", {
                            htmlFor: t + a,
                            className: "bg-n1 h-14 px-4 focus-within:[&]:dark:bg-n5/10 ".concat("dark:bg-n5/5", "  flex rounded-xl font-medium relative font-poppins"),
                            children: [(0, k.tZ)("input", {
                                id: t + (null == a ? void 0 : a.value),
                                className: "bg-[transparent] w-full outline-none tracking-wider leading-none",
                                autoComplete: "off",
                                type: "tel",
                                value: null == a ? void 0 : a.value,
                                onFocus: function(a) {
                                    return C(a.target, b)
                                },
                                onChange: function(a) {
                                    return B(a, b)
                                },
                                onKeyDown: function(a) {
                                    return G(a, b)
                                }
                            }), a.name && (0, k.tZ)("span", {
                                className: "absolute bottom-1 text-alertGreen font-poppins font-semibold text-hairline2",
                                children: a.name
                            }), !a.value && (0, k.tZ)("button", {
                                onClick: E,
                                type: "button",
                                className: "w-16 h-14 -mr-4 self-center flex center rounded-lg bg-n2 dark:bg-n5/10",
                                children: (0, k.tZ)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 24 24",
                                    className: "[&_path]:fill-p1 dark:[&_path]:fill-n3 w-5 h-5",
                                    children: (0, k.tZ)("path", {
                                        d: "M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z"
                                    })
                                })
                            }), a.value && (0, k.tZ)("button", {
                                type: "button",
                                onClick: function(a) {
                                    return D(a, b)
                                },
                                className: "w-12 h-11 -mr-2.5 self-center flex center ",
                                children: (0, k.tZ)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 24 24",
                                    className: "[&_path]:fill-n3 w-5 h-5",
                                    children: (0, k.tZ)("path", {
                                        fillRule: "evenodd",
                                        d: "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z",
                                        clipRule: "evenodd"
                                    })
                                })
                            })]
                        }, t + a)
                    })
                })
            }
            c(66125)
        },
        85615: function(a, b, c) {
            c.d(b, {
                Z: function() {
                    return r
                }
            });
            var d = c(26042),
                e = c(69396),
                f = c(29815),
                g = c(35944),
                h = c(94794),
                i = c(25675),
                j = c.n(i),
                k = c(67294),
                l = c(80786),
                m = c(26519),
                n = c(35568),
                o = c(60486),
                p = c(85313),
                q = c(98571);

            function r(a) {
                var b = a.provider_category,
                    c = (0, n.Z)({
                        provider_category: b
                    }),
                    i = c.providerData;
                c.loading, c.error;
                var r = (0, l.rI)(),
                    s = r.state,
                    t = r.dispatch,
                    u = (0, m.Z)();
                u.supported, u.getContacts;
                var v = (0, k.useRef)(null),
                    w = "provider_id",
                    x = a.productType || o.s5.buyData,
                    y = s[x],
                    z = y.activeInput.index,
                    A = function(b, c) {
                        var d = y[w],
                            e = (0, f.Z)(d);
                        e[c] = b;
                        var g = {
                            type: l.Hp.UPDATE_FIELD,
                            payload: {
                                productType: x,
                                field: w,
                                value: e
                            }
                        };
                        t(g), a.onChange && a.onChange(b), (0, p.DN)(b, v.current)
                    };
                return (0, k.useEffect)(function() {
                    var a = y[w][z];
                    (0, p.DN)(a, v.current)
                }, [y[w], z]), (0, g.tZ)("div", {
                    ref: v,
                    className: "flex gap-2 p-1 dark:p-0 relative scroll no-scrollbar overflow-x-auto",
                    children: null == i ? void 0 : i.map(function(a, b) {
                        var c, f = null == a ? void 0 : a.id,
                            i = null !== (c = o.u_[f]) && void 0 !== c ? c : o.NZ[f],
                            k = i.icon,
                            l = i.size,
                            m = i.short_name;
                        null == a || a.isUnavailable;
                        var n = y[w][z] === f,
                            p = i.activeColor,
                            r = i.activeText;
                        return (0, g.BX)(h.E.div, (0, e.Z)((0, d.Z)({
                            id: "9mobile" === f ? "etisalat" : f,
                            variants: q.Gs
                        }, q.i6), {
                            className: "flex rounded-xl rounded-tr-3xl gap-1 relative flex-col min-w-[75px] items-center w-full ".concat(n ? r : "dark:text-n0/50 dark:bg-[transparent] dark:shadow-none shadow-button", " p-2"),
                            onClick: function(a) {
                                return A(f, z, a)
                            },
                            children: [(0, g.tZ)("div", {
                                className: "absolute rounded-xl rounded-tr-3xl inset-0 z-10 dark:bg-n05/5"
                            }), n && (0, g.tZ)(h.E.div, {
                                layoutId: "provider",
                                className: "absolute rounded-xl rounded-tr-3xl inset-0 z-10 ".concat(p)
                            }), (0, g.tZ)("div", {
                                className: "flex center flex-1 relative z-10",
                                children: (0, g.tZ)(j(), (0, d.Z)({
                                    className: "".concat(f.includes("mtn") ? n ? "" : "invert-0 dark:invert opacity-60" : "", " ").concat(f.includes("airtel") ? n ? "" : "dark:invert-0 invert opacity-60" : ""),
                                    src: k,
                                    alt: a.name
                                }, l))
                            }), (0, g.tZ)("span", {
                                className: "text-[11px] relative z-10 text-[inherit] font-semibold font-poppins",
                                children: m
                            })]
                        }), b)
                    })
                })
            }
        },
        35568: function(a, b, c) {
            var d = c(47568),
                e = c(26042),
                f = c(69396),
                g = c(34051),
                h = c.n(g),
                i = c(67294),
                j = c(36100),
                k = c(51562),
                l = c(60486),
                m = {
                    providerData: [],
                    loading: !0,
                    error: null,
                    currentProvider: null
                },
                n = {
                    SET_PROVIDER_DATA: "SET_PROVIDER_DATA",
                    SET_CURRENT_PROVIDER: "SET_CURRENT_PROVIDER",
                    SET_ERROR: "SET_ERROR",
                    SET_LOADING: "SET_LOADING"
                },
                o = function(a, b) {
                    switch (b.type) {
                        case n.SET_PROVIDER_DATA:
                            return (0, f.Z)((0, e.Z)({}, a), {
                                providerData: b.payload,
                                loading: !1
                            });
                        case n.SET_ERROR:
                            return (0, f.Z)((0, e.Z)({}, a), {
                                error: b.payload,
                                loading: !1
                            });
                        case n.SET_LOADING:
                            return (0, f.Z)((0, e.Z)({}, a), {
                                loading: !0
                            });
                        case n.SET_CURRENT_PROVIDER:
                            return (0, f.Z)((0, e.Z)({}, a), {
                                currentProvider: b.payload
                            });
                        default:
                            return a
                    }
                },
                p = function(a) {
                    var b, c = a.provider_category,
                        g = (0, i.useReducer)(o, m),
                        p = g[0],
                        q = g[1],
                        r = function(a) {
                            q({
                                type: n.SET_CURRENT_PROVIDER,
                                payload: p.providerData.find(function(b) {
                                    return b.id === a
                                })
                            })
                        },
                        s = (b = (0, d.Z)(h().mark(function a() {
                            var b, c;
                            return h().wrap(function(a) {
                                for (;;) switch (a.prev = a.next) {
                                    case 0:
                                        return q({
                                            type: n.SET_LOADING
                                        }), b = (0, j.IO)((0, j.hJ)(k.DB, "internet-providers"), (0, j.Xo)("order")), c = (0, j.cf)(b, function(a) {
                                            var b = [];
                                            a.forEach(function(a) {
                                                var c = a.data(),
                                                    d = (0, j.IO)((0, j.hJ)(a.ref, "packages"), (0, j.Xo)("price")),
                                                    g = (0, j.cf)(d, function(d) {
                                                        var g = d.docs.map(function(a) {
                                                                var b, d = a.data();
                                                                return (0, f.Z)((0, e.Z)({}, d), {
                                                                    isUnavailable: null !== (b = d.isUnavailable) && void 0 !== b ? b : c.isUnavailable,
                                                                    id: +a.id
                                                                })
                                                            }),
                                                            h = {
                                                                id: a.id,
                                                                name: c.name,
                                                                packages: g
                                                            };
                                                        b.push(h), q({
                                                            type: n.SET_PROVIDER_DATA,
                                                            payload: b
                                                        })
                                                    });
                                                return function() {
                                                    g()
                                                }
                                            })
                                        }), a.abrupt("return", function() {
                                            c()
                                        });
                                    case 4:
                                    case "end":
                                        return a.stop()
                                }
                            }, a)
                        })), function() {
                            return b.apply(this, arguments)
                        }),
                        t = function() {
                            var a = Object.keys(l.NZ).map(function(a) {
                                return {
                                    name: l.NZ[a].short_name,
                                    id: a
                                }
                            });
                            q({
                                type: n.SET_PROVIDER_DATA,
                                payload: a
                            })
                        };
                    return (0, i.useEffect)(function() {
                        switch (c) {
                            case "airtime-providers":
                                t();
                                break;
                            case "internet-providers":
                                s()
                        }
                    }, [c]), (0, f.Z)((0, e.Z)({}, p), {
                        setCurrentProvider: r
                    })
                };
            b.Z = p
        }
    }
])