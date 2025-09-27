(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8026, 2645], {
        91015: function(a, b, c) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/dashboard", function() {
                return c(32664)
            }])
        },
        54045: function(a, b, c) {
            "use strict";
            var d = c(828),
                e = c(35944),
                f = c(33299),
                g = c(25675),
                h = c.n(g),
                i = c(94794),
                j = c(58469),
                k = function(a) {
                    var b, c, g, k, l = a.photoURL,
                        m = a.size,
                        n = void 0 === m ? 36 : m,
                        o = (0, f.useSession)(),
                        p = o.data,
                        q = (0, j.G)().subscription_data,
                        r = (0, d.Z)(q, 1),
                        s = r[0];
                    return (0, e.tZ)(i.E.div, {
                        style: {
                            width: n,
                            height: n
                        },
                        className: "h-9 relative -z-10 overflow-hidden rounded-full w-9 ring-[2.5px] ring-offset-2 dark:ring-offset-n8 ring-offset-n0 ".concat(s ? "ring-p2" : "ring-p1 dark:ring-n5/20", "  flex items-center justify-center"),
                        children: (0, e.tZ)(h(), {
                            layout: "fill",
                            alt: null == p ? void 0 : null === (b = p.user) || void 0 === b ? void 0 : b.displayName,
                            unoptimized: !0,
                            src: null !== (k = null !== (g = null == p ? void 0 : null === (c = p.user) || void 0 === c ? void 0 : c.photoURL) && void 0 !== g ? g : l) && void 0 !== k ? k : "/assets/avatar.png"
                        })
                    })
                };
            b.Z = k
        },
        32664: function(a, b, c) {
            "use strict";
            c.r(b), c.d(b, {
                "__N_SSP": function() {
                    return aJ
                },
                default: function() {
                    return aK
                }
            });
            var d = c(26042),
                e = c(69396),
                f = c(828),
                g = c(35944),
                h = c(94794),
                i = c(33299),
                j = c(11163),
                k = c(40240),
                l = c(41664),
                m = c.n(l),
                n = c(67294),
                o = c(85313),
                p = c(92397),
                q = c(54045),
                r = function(a) {
                    a.noside;
                    var b, c, d = a.sticky,
                        e = (0, i.useSession)().data,
                        h = (0, n.useState)(),
                        k = h[0],
                        l = h[1],
                        r = (0, j.useRouter)();
                    (0, n.useEffect)(function() {
                        l(JSON.parse(localStorage.getItem("_cusr")))
                    }, []);
                    var s = new URLSearchParams;
                    Object.entries(r.query).forEach(function(a) {
                        var b = (0, f.Z)(a, 2),
                            c = b[0],
                            d = b[1];
                        s.append(c, d)
                    }), s.toString();
                    var t = function() {
                        if (!window.Tawk_API) return alert("Refresh this page and retry");
                        window.Tawk_API.maximize && window.Tawk_API.maximize()
                    };
                    return (0, g.BX)("div", {
                        className: "flex w-full p-4 justify-between ".concat(d ? "fixed top-0 z-20 dark:bg-n8/90 bg-n05/90 backdrop-filter backdrop-blur-sm" : ""),
                        children: [(0, g.BX)("div", {
                            className: "flex items-center",
                            children: [(0, g.tZ)(m(), {
                                href: "/dashboard?t=more",
                                shallow: !0,
                                children: (0, g.tZ)("a", {
                                    children: (0, g.tZ)(q.Z, {
                                        photoURL: null == k ? void 0 : k.photoURL
                                    })
                                })
                            }), (0, g.BX)("div", {
                                className: "ml-4 font-poppins space-y-0.5",
                                children: [(0, g.BX)("p", {
                                    className: "capitalize text-caption font-medium leading-normal tracking-wide",
                                    children: [(0, g.BX)("span", {
                                        className: "text-n6 dark:text-n0/60",
                                        children: ["Good\xa0", (0, o.Qq)()]
                                    }), "\uD83D\uDC4B"]
                                }), (0, g.tZ)("p", {
                                    className: "text-caption leading-none font-semibold tracking-wider text-[#1F2C37] dark:text-n0",
                                    children: (0, p.m)(null !== (c = null == e ? void 0 : null === (b = e.user) || void 0 === b ? void 0 : b.displayName) && void 0 !== c ? c : null == k ? void 0 : k.displayName)
                                })]
                            })]
                        }), (0, g.tZ)("div", {
                            className: "flex items-center space-x-4 relative",
                            children: (0, g.tZ)("div", {
                                className: "p-2 dark:bg-n5/20 bg-p1 text-n0 flex center rounded-full",
                                onClick: t,
                                children: (0, g.tZ)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 24 24",
                                    fill: "currentColor",
                                    className: "w-6 h-6",
                                    children: (0, g.tZ)("path", {
                                        "fill-rule": "evenodd",
                                        d: "M4.804 21.644A6.707 6.707 0 0 0 6 21.75a6.721 6.721 0 0 0 3.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 0 1-.814 1.686.75.75 0 0 0 .44 1.223ZM8.25 10.875a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM10.875 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z",
                                        "clip-rule": "evenodd"
                                    })
                                })
                            })
                        })]
                    })
                },
                s = r,
                t = c(13559),
                u = (c(29815), c(65820)),
                v = c(98571),
                w = c(5152),
                x = c.n(w),
                y = c(77556),
                z = c(19230),
                A = c(72645),
                B = x()(function() {
                    return Promise.all([c.e(2746), c.e(326), c.e(210)]).then(c.bind(c, 30210))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [30210]
                        }
                    },
                    suspense: !0
                }),
                C = x()(function() {
                    return Promise.all([c.e(2746), c.e(8130), c.e(326), c.e(3162)]).then(c.bind(c, 63162))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [63162]
                        }
                    },
                    suspense: !0
                }),
                D = x()(function() {
                    return Promise.all([c.e(2746), c.e(8130), c.e(3200)]).then(c.bind(c, 3200))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [3200]
                        }
                    },
                    suspense: !0
                }),
                E = x()(function() {
                    return Promise.all([c.e(2746), c.e(8130), c.e(4084)]).then(c.bind(c, 94084))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [94084]
                        }
                    },
                    suspense: !0
                }),
                F = x()(function() {
                    return Promise.all([c.e(326), c.e(5047)]).then(c.bind(c, 81988))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [81988]
                        }
                    },
                    suspense: !0
                }),
                G = [{
                    id: "data",
                    label: "Data",
                    query: "data",
                    default: !0
                }, {
                    id: "cash",
                    query: "cash",
                    label: "Convert"
                }, {
                    id: "airtime",
                    query: "airtime",
                    label: "Airtime"
                }, {
                    query: "electricity",
                    id: "electricity",
                    label: "Electricity"
                }, {
                    id: "tv",
                    query: "tvsub",
                    label: "TV Sub"
                }, {
                    id: "giftcard",
                    query: "gift",
                    label: "Giftcards"
                }, ];
            v.pB;
            var H = function(a) {
                    var b = a.children,
                        c = a.renderEndComp;
                    return (0, g.BX)("label", {
                        className: "flex items-center justify-between font-poppins text-caption2 text-p1 dark:text-alertGreen font-semibold",
                        children: [(0, g.BX)("span", {
                            className: "flex items-center",
                            children: [(0, g.tZ)("span", {
                                className: "mr-1",
                                children: (0, g.tZ)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 24 24",
                                    fill: "#4ADE80",
                                    class: "w-6 h-6",
                                    children: (0, g.tZ)("path", {
                                        fillRule: "evenodd",
                                        d: "M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z",
                                        clipRule: "evenodd"
                                    })
                                })
                            }), b]
                        }), c]
                    })
                },
                I = function(a) {
                    var b = a.href,
                        c = a.as,
                        d = (a.icon, a.id),
                        e = a.children,
                        f = (a.className, a.renderIcon),
                        i = a.active,
                        j = (0, g.BX)("a", {
                            id: d,
                            className: "block relative",
                            children: [i && (0, g.BX)(h.E.span, {
                                layoutId: "services",
                                class: "flex h-2 w-3.5 absolute top-3 right-3",
                                children: [(0, g.tZ)("span", {
                                    class: "animate-ping absolute inline-flex h-full w-full rounded-full bg-alertGreen opacity-75"
                                }), (0, g.tZ)("span", {
                                    class: "relative inline-flex rounded-full h-2 w-3.5 bg-alertGreen"
                                })]
                            }), (0, g.tZ)(h.E.div, {
                                className: "space-x-2 w-full font-poppins shadow-button dark:bg-n5/5 bg-n0 dark:shadow-sm rounded-md overflow-x-hidden",
                                children: (0, g.BX)("div", {
                                    className: "p-3 block w-[6.5rem] space-y-2 text-hairline2 text-center",
                                    children: [(0, g.tZ)("div", {
                                        className: "flex items-center justify-center text-[#0163A4]",
                                        children: f(i)
                                    }), (0, g.tZ)("div", {
                                        className: "".concat(i ? "dark:bg-n5/5 dark:shadow-none shadow-button" : "", " p-1 rounded-md"),
                                        children: (0, g.tZ)("p", {
                                            className: "flex center gap-2 ".concat(i ? "dark:text-n0 text-p1" : "dark:text-n05/50 text-p1/90", " leading-normal text-hairline2 text-n7 font-semibold tracking-wider"),
                                            children: e
                                        })
                                    })]
                                })
                            })]
                        });
                    return b ? (0, g.tZ)(m(), {
                        id: d,
                        href: b,
                        as: c,
                        shallow: !0,
                        replace: !0,
                        children: j
                    }) : j
                },
                J = function() {
                    var a = (0, j.useRouter)(),
                        b = (0, n.useState)(G),
                        c = b[0],
                        e = (b[1], (0, n.useState)(!1)),
                        f = (e[0], e[1], (0, n.useRef)(null)),
                        i = a.query,
                        k = function(a, b) {
                            var c = i.qs;
                            return c ? c.includes(a) : Boolean(b)
                        };
                    (0, n.useEffect)(function() {
                        var a = i.qs;
                        console.log({
                            id: a
                        }), (0, o.DN)(i.qs, f.current)
                    }, [i.qs]);
                    var l = {
                            data: {
                                title: "Buy Data",
                                render: function(a) {
                                    return (0, g.tZ)(B, (0, d.Z)({}, a))
                                }
                            },
                            airtime: {
                                title: "Buy Airtime",
                                render: function(a) {
                                    return (0, g.tZ)(C, (0, d.Z)({}, a))
                                }
                            },
                            electricity: {
                                title: "Pay Electricity",
                                render: function(a) {
                                    return (0, g.tZ)(D, (0, d.Z)({}, a))
                                }
                            },
                            tvsub: {
                                title: "Subscribe TV",
                                render: function(a) {
                                    return (0, g.tZ)(E, (0, d.Z)({}, a))
                                }
                            },
                            cash: {
                                title: "Airtime to Cash",
                                render: function(a) {
                                    return (0, g.tZ)(F, (0, d.Z)({}, a))
                                }
                            },
                            gift: {
                                title: "Sell Giftcard",
                                render: function(a) {
                                    return (0, g.tZ)(A.default, (0, d.Z)({}, a))
                                }
                            }
                        },
                        m = {
                            data: (0, g.BX)("svg", {
                                width: "32",
                                height: "32",
                                viewBox: "0 0 32 33",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [(0, g.tZ)("path", {
                                    d: "M4 23.5329V13.0333C4 10.0464 4 8.55292 4.58129 7.41205C5.09263 6.40852 5.90852 5.59263 6.91205 5.08129C8.05292 4.5 9.54639 4.5 12.5333 4.5H19.4667C22.4536 4.5 23.9471 4.5 25.088 5.08129C26.0915 5.59263 26.9073 6.40852 27.4187 7.41205C28 8.55292 28 10.0464 28 13.0333V14.6333C28 17.6203 28 19.1137 27.4187 20.2547C26.9073 21.2581 26.0915 22.074 25.088 22.5853C23.9471 23.1667 22.4536 23.1667 19.4667 23.1667H13.8123C13.1439 23.1667 12.8098 23.1667 12.4962 23.2437C12.2182 23.312 11.9531 23.4247 11.7109 23.5772C11.4378 23.7495 11.2057 23.9899 10.7417 24.4708L9.50288 25.7548C7.7828 27.5376 6.92275 28.4291 6.18189 28.4967C5.53931 28.5553 4.90788 28.3004 4.48619 27.812C4 27.2489 4 26.0103 4 23.5329Z",
                                    className: "dark:fill-n0/10"
                                }), (0, g.tZ)("path", {
                                    d: "M10.6668 9.83325C9.93046 9.83325 9.3335 10.4302 9.3335 11.1666C9.3335 11.903 9.93046 12.4999 10.6668 12.4999H21.3335C22.0699 12.4999 22.6668 11.903 22.6668 11.1666C22.6668 10.4302 22.0699 9.83325 21.3335 9.83325H10.6668Z",
                                    fill: "#0163A4"
                                }), (0, g.tZ)("path", {
                                    d: "M10.6668 15.1667C9.93046 15.1667 9.3335 15.7637 9.3335 16.5001C9.3335 17.2365 9.93046 17.8334 10.6668 17.8334H14.6668C15.4032 17.8334 16.0002 17.2365 16.0002 16.5001C16.0002 15.7637 15.4032 15.1667 14.6668 15.1667H10.6668Z",
                                    fill: "#0163A4"
                                })]
                            }),
                            cash: (0, g.BX)("svg", {
                                width: "32",
                                height: "32",
                                viewBox: "0 0 40 40",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [(0, g.tZ)("path", {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M18.0895 6.38525C18.7802 8.0917 17.9568 10.035 16.2504 10.7258C12.5795 12.2117 9.99967 15.8086 9.99967 20.0001C9.99967 20.4263 10.0261 20.8448 10.0772 21.2543C10.305 23.0811 9.00874 24.7466 7.18194 24.9744C5.35514 25.2023 3.68957 23.9059 3.46177 22.0793C3.37667 21.3968 3.33301 20.7028 3.33301 20.0001C3.33301 13.0003 7.64712 7.01613 13.749 4.54618C15.4554 3.85543 17.3987 4.67881 18.0895 6.38525ZM9.06551 28.3241C10.217 26.8878 12.3148 26.6568 13.7512 27.8083C15.4639 29.1811 17.6315 30.0001 19.9997 30.0001C22.3678 30.0001 24.5355 29.1811 26.2482 27.8083C27.6845 26.6568 29.7823 26.8878 30.9338 28.3241C32.0853 29.7606 31.8543 31.8584 30.4178 33.0099C27.5652 35.2968 23.9378 36.6668 19.9997 36.6668C16.0615 36.6668 12.4341 35.2968 9.58144 33.0099C8.14504 31.8584 7.91406 29.7606 9.06551 28.3241Z",
                                    fill: "#E8EDFF",
                                    className: "dark:fill-n0/10"
                                }), (0, g.tZ)("path", {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M21.9104 6.38525C22.6012 4.67881 24.5446 3.85543 26.2509 4.54618C32.3527 7.01613 36.6669 13.0003 36.6669 20.0001C36.6669 20.7028 36.6232 21.3968 36.5382 22.0793C36.3104 23.9059 34.6447 25.2023 32.8179 24.9744C30.9912 24.7466 29.6949 23.0811 29.9227 21.2543C29.9737 20.8448 30.0002 20.4263 30.0002 20.0001C30.0002 15.8086 27.4204 12.2117 23.7496 10.7258C22.0431 10.035 21.2197 8.0917 21.9104 6.38525Z",
                                    fill: "#0163A4"
                                })]
                            }),
                            airtime: (0, g.BX)("svg", {
                                width: "32",
                                height: "32",
                                viewBox: "0 0 40 40",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [(0, g.tZ)("path", {
                                    d: "M15.7206 23.0869L7.49187 20.9421C4.35932 20.1256 4.11187 15.7733 7.13169 14.607L31.546 5.17793C33.5968 4.38586 35.614 6.403 34.8218 8.45383L25.3928 32.8681C24.2265 35.8879 19.8743 35.6404 19.0578 32.5079L16.913 24.2792C16.7608 23.6952 16.3047 23.2391 15.7206 23.0869Z",
                                    className: "dark:fill-n0/10"
                                }), (0, g.tZ)("path", {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M16.4785 23.5216L34.2497 5.75024C34.9114 6.41186 35.2176 7.42884 34.8216 8.45424L25.3926 32.8686C24.2262 35.8884 19.8741 35.6409 19.0576 32.5084L16.9127 24.2797C16.8366 23.9876 16.6846 23.7276 16.4785 23.5216Z",
                                    fill: "#0163A4"
                                })]
                            }),
                            electricity: (0, g.BX)("svg", {
                                width: "30",
                                height: "30",
                                viewBox: "0 0 22 27",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [(0, g.tZ)("path", {
                                    d: "M16 20.073C19.1883 18.2287 21.3333 14.7815 21.3333 10.8334C21.3333 4.94231 16.5577 0.166687 10.6667 0.166687C4.77563 0.166687 0 4.94231 0 10.8334C0 14.7815 2.14505 18.2287 5.33333 20.073V21.5C5.33333 22.2364 5.93029 22.8334 6.66667 22.8334H14.6667C15.4031 22.8334 16 22.2364 16 21.5V20.073Z",
                                    className: "dark:fill-n0/10"
                                }), (0, g.tZ)("path", {
                                    d: "M6.66667 22.8334H14.6667L14.6667 24.1667C14.6667 25.6395 13.4728 26.8334 12 26.8334H9.33333C7.86057 26.8334 6.66667 25.6395 6.66667 24.1667L6.66667 22.8334Z",
                                    fill: "#0163A4"
                                }), (0, g.tZ)("path", {
                                    d: "M8.9428 11.2239C8.42213 10.7032 7.57789 10.7032 7.05719 11.2239C6.53649 11.7446 6.53649 12.5888 7.05719 13.1095L9.33333 15.3856V22.8334H12V15.3856L14.2761 13.1095C14.7968 12.5888 14.7968 11.7446 14.2761 11.2239C13.7555 10.7032 12.9112 10.7032 12.3905 11.2239L10.6667 12.9478L8.9428 11.2239Z",
                                    fill: "#0163A4"
                                })]
                            }),
                            tv: (0, g.BX)("svg", {
                                width: "32",
                                height: "32",
                                viewBox: "0 0 40 40",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [(0, g.tZ)("path", {
                                    d: "M11.667 33.3334C11.667 32.4129 12.4132 31.6667 13.3337 31.6667H26.667C27.5875 31.6667 28.3337 32.4129 28.3337 33.3334C28.3337 34.2539 27.5875 35.0001 26.667 35.0001H13.3337C12.4132 35.0001 11.667 34.2539 11.667 33.3334Z",
                                    className: "dark:fill-n0/10"
                                }), (0, g.tZ)("path", {
                                    d: "M13 28.3333C10.1997 28.3333 8.7996 28.3333 7.73005 27.7883C6.78923 27.309 6.02433 26.5442 5.54497 25.6033C5 24.5337 5 23.1337 5 20.3333V13C5 10.1997 5 8.7996 5.54497 7.73005C6.02433 6.78923 6.78923 6.02433 7.73005 5.54497C8.7996 5 10.1997 5 13 5H27C29.8003 5 31.2003 5 32.27 5.54497C33.2108 6.02433 33.9757 6.78923 34.455 7.73005C35 8.7996 35 10.1997 35 13V20.3333C35 23.1337 35 24.5337 34.455 25.6033C33.9757 26.5442 33.2108 27.309 32.27 27.7883C31.2003 28.3333 29.8003 28.3333 27 28.3333H13Z",
                                    className: "dark:fill-n0/10"
                                }), (0, g.tZ)("path", {
                                    d: "M11.6667 10C10.7462 10 10 10.7462 10 11.6667C10 12.5871 10.7462 13.3333 11.6667 13.3333H23.3333C24.2538 13.3333 25 12.5871 25 11.6667C25 10.7462 24.2538 10 23.3333 10H11.6667Z",
                                    fill: "#0163A4"
                                }), (0, g.tZ)("path", {
                                    d: "M11.6667 16.6667C10.7462 16.6667 10 17.4129 10 18.3334C10 19.2539 10.7462 20.0001 11.6667 20.0001H15C15.9205 20.0001 16.6667 19.2539 16.6667 18.3334C16.6667 17.4129 15.9205 16.6667 15 16.6667H11.6667Z",
                                    fill: "#0163A4"
                                })]
                            }),
                            giftcard: (0, g.BX)("svg", {
                                width: "32",
                                height: "32",
                                viewBox: "0 0 40 40",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [(0, g.tZ)("path", {
                                    d: "M6.66699 21.6667C6.66699 20.7462 7.41319 20 8.33366 20H31.667C32.5875 20 33.3337 20.7462 33.3337 21.6667V30C33.3337 32.7615 31.0952 35 28.3337 35H11.667C8.90558 35 6.66699 32.7615 6.66699 30V21.6667Z",
                                    className: "dark:fill-n0/10"
                                }), (0, g.tZ)("path", {
                                    d: "M5 15.0001C5 13.1591 6.49238 11.6667 8.33333 11.6667H31.6667C33.5077 11.6667 35 13.1591 35 15.0001V16.6667C35 18.5077 33.5077 20.0001 31.6667 20.0001H8.33333C6.49238 20.0001 5 18.5077 5 16.6667V15.0001Z",
                                    fill: "#0163A4"
                                }), (0, g.tZ)("path", {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M11.667 10C11.667 7.23858 13.9056 5 16.667 5C17.9477 5 19.1157 5.48142 20.0003 6.27315C20.885 5.48142 22.053 5 23.3337 5C26.0952 5 28.3337 7.23858 28.3337 10C28.3337 12.7614 26.0952 15 23.3337 15H21.667V35H18.3337V15H16.667C13.9056 15 11.667 12.7614 11.667 10ZM18.3337 11.6667H16.667C15.7465 11.6667 15.0003 10.9205 15.0003 10C15.0003 9.07953 15.7465 8.33333 16.667 8.33333C17.5875 8.33333 18.3337 9.07953 18.3337 10V11.6667ZM21.667 11.6667H23.3337C24.2542 11.6667 25.0003 10.9205 25.0003 10C25.0003 9.07953 24.2542 8.33333 23.3337 8.33333C22.4132 8.33333 21.667 9.07953 21.667 10V11.6667Z",
                                    fill: "#0163A4"
                                })]
                            })
                        };
                    return (0, n.useEffect)(function() {
                        i.qs || a.asPath !== y.vB.root || a.replace("".concat(y.vB.root, "?qs=data"), void 0, {
                            shallow: !0
                        })
                    }, [i.qs, a.asPath]), (0, g.BX)(g.HY, {
                        children: [(0, g.BX)(z.Z, {
                            className: "space-y-2 dark:bg-n8/90",
                            children: [(0, g.tZ)(H, {
                                children: "Quick Access"
                            }), (0, g.tZ)("div", {
                                ref: f,
                                id: "wrapper",
                                className: "relative p-1 dark:px-0 flex items-center no-scrollbar overflow-x-auto gap-2 font-poppins overflow-y-visible",
                                children: null == c ? void 0 : c.map(function(a, b) {
                                    var c = k(a.query, a.default);
                                    return (0, g.tZ)("div", {
                                        id: a.query,
                                        children: (0, g.tZ)(I, {
                                            href: "".concat(y.vB.root, "?qs=").concat(a.query),
                                            active: c,
                                            renderIcon: function(b) {
                                                return m[a.id]
                                            },
                                            children: a.label
                                        }, a.label)
                                    })
                                })
                            })]
                        }), (0, g.tZ)(n.Suspense, {
                            children: (0, g.tZ)(u.M, {
                                mode: "wait",
                                children: (0, g.tZ)("div", {
                                    className: "max-w-xl mx-auto px-4",
                                    children: l[i.qs] ? (0, g.tZ)(h.E.div, {
                                        children: l[i.qs].render()
                                    }) : (0, g.tZ)(B, {})
                                })
                            })
                        })]
                    })
                },
                K = J,
                L = c(25675),
                M = c.n(L),
                N = c(47568),
                O = c(34051),
                P = c.n(O),
                Q = c(64666),
                R = c(37645),
                S = c(31425),
                T = c(14574),
                U = c.n(T);
            c(85893);
            var V, W, X, Y, Z, $, _ = Object.create,
                aa = Object.defineProperty,
                ab = Object.getOwnPropertyDescriptor,
                ac = Object.getOwnPropertyNames,
                ad = Object.getPrototypeOf,
                ae = Object.prototype.hasOwnProperty,
                af = (V = (a, b) => {
                    ! function(d, e) {
                        "object" == typeof a && "u" > typeof b ? e(a) : "function" == typeof define && c.amdO ? define(["exports"], e) : (d = "u" > typeof globalThis ? globalThis : d || self, e(d.fastUniqueNumbers = {}))
                    }(a, function(a) {
                        var b, c, d, e, f = void 0 === Number.MAX_SAFE_INTEGER ? 9007199254740991 : Number.MAX_SAFE_INTEGER,
                            g = 1073741824,
                            h = new WeakMap,
                            i = (c = (b = h, function(a, c) {
                                return b.set(a, c), c
                            }), d = h, function(a) {
                                var b = d.get(a),
                                    e = void 0 === b ? a.size : b < g ? b + 1 : 0;
                                if (!a.has(e)) return c(a, e);
                                if (a.size < 536870912) {
                                    for (; a.has(e);) e = Math.floor(Math.random() * g);
                                    return c(a, e)
                                }
                                if (a.size > f) throw Error("Congratulations, you created a collection of unique numbers which uses all available integers!");
                                for (; a.has(e);) e = Math.floor(Math.random() * f);
                                return c(a, e)
                            }),
                            j = (e = i, function(a) {
                                var b = e(a);
                                return a.add(b), b
                            });
                        a.addUniqueNumber = j, a.generateUniqueNumber = i
                    })
                }, () => (W || V((W = {
                    exports: {}
                }).exports, W), W.exports)),
                ag = (Y = null != (X = af()) ? _(ad(X)) : {}, ((a, b, c, d) => {
                    if (b && "object" == typeof b || "function" == typeof b)
                        for (let e of ac(b)) ae.call(a, e) || void 0 === e || aa(a, e, {
                            get: () => b[e],
                            enumerable: !(d = ab(b, e)) || d.enumerable
                        });
                    return a
                })(X && X.__esModule ? Y : aa(Y, "default", {
                    value: X,
                    enumerable: !0
                }), X)),
                ah = a => void 0 !== a.method && "call" === a.method,
                ai = a => null === a.error && "number" == typeof a.id,
                aj = a => {
                    let b = new Map([
                            [0, () => {}]
                        ]),
                        c = new Map([
                            [0, () => {}]
                        ]),
                        d = new Map,
                        e = new Worker(a);
                    return e.addEventListener("message", ({
                        data: a
                    }) => {
                        if (ah(a)) {
                            let {
                                params: {
                                    timerId: e,
                                    timerType: f
                                }
                            } = a;
                            if ("interval" === f) {
                                let g = b.get(e);
                                if ("number" == typeof g) {
                                    let h = d.get(g);
                                    if (void 0 === h || h.timerId !== e || h.timerType !== f) throw Error("The timer is in an undefined state.")
                                } else if ("u" > typeof g) g();
                                else throw Error("The timer is in an undefined state.")
                            } else if ("timeout" === f) {
                                let i = c.get(e);
                                if ("number" == typeof i) {
                                    let j = d.get(i);
                                    if (void 0 === j || j.timerId !== e || j.timerType !== f) throw Error("The timer is in an undefined state.")
                                } else if ("u" > typeof i) i(), c.delete(e);
                                else throw Error("The timer is in an undefined state.")
                            }
                        } else if (ai(a)) {
                            let {
                                id: k
                            } = a, l = d.get(k);
                            if (void 0 === l) throw Error("The timer is in an undefined state.");
                            let {
                                timerId: m,
                                timerType: n
                            } = l;
                            d.delete(k), "interval" === n ? b.delete(m) : c.delete(m)
                        } else {
                            let {
                                error: {
                                    message: o
                                }
                            } = a;
                            throw Error(o)
                        }
                    }), {
                        clearInterval: a => {
                            let c = (0, ag.generateUniqueNumber)(d);
                            d.set(c, {
                                timerId: a,
                                timerType: "interval"
                            }), b.set(a, c), e.postMessage({
                                id: c,
                                method: "clear",
                                params: {
                                    timerId: a,
                                    timerType: "interval"
                                }
                            })
                        },
                        clearTimeout: a => {
                            let b = (0, ag.generateUniqueNumber)(d);
                            d.set(b, {
                                timerId: a,
                                timerType: "timeout"
                            }), c.set(a, b), e.postMessage({
                                id: b,
                                method: "clear",
                                params: {
                                    timerId: a,
                                    timerType: "timeout"
                                }
                            })
                        },
                        setInterval: (a, c) => {
                            let d = (0, ag.generateUniqueNumber)(b);
                            return b.set(d, () => {
                                a(), "function" == typeof b.get(d) && e.postMessage({
                                    id: null,
                                    method: "set",
                                    params: {
                                        delay: c,
                                        now: performance.now(),
                                        timerId: d,
                                        timerType: "interval"
                                    }
                                })
                            }), e.postMessage({
                                id: null,
                                method: "set",
                                params: {
                                    delay: c,
                                    now: performance.now(),
                                    timerId: d,
                                    timerType: "interval"
                                }
                            }), d
                        },
                        setTimeout: (a, b) => {
                            let d = (0, ag.generateUniqueNumber)(c);
                            return c.set(d, a), e.postMessage({
                                id: null,
                                method: "set",
                                params: {
                                    delay: b,
                                    now: performance.now(),
                                    timerId: d,
                                    timerType: "timeout"
                                }
                            }), d
                        }
                    }
                };
            let ak;
            var al = (Z = aj, $ = '(()=>{"use strict";const e=new Map,t=new Map,r=(e,t)=>{let r,o;const i=performance.now();r=i,o=e-Math.max(0,i-t);return{expected:r+o,remainingDelay:o}},o=(e,t,r,i)=>{const s=performance.now();s>r?postMessage({id:null,method:"call",params:{timerId:t,timerType:i}}):e.set(t,setTimeout(o,r-s,e,t,r,i))};addEventListener("message",(i=>{let{data:s}=i;try{if("clear"===s.method){const{id:r,params:{timerId:o,timerType:i}}=s;if("interval"===i)(t=>{const r=e.get(t);if(void 0===r)throw new Error(\'There is no interval scheduled with the given id "\'.concat(t,\'".\'));clearTimeout(r),e.delete(t)})(o),postMessage({error:null,id:r});else{if("timeout"!==i)throw new Error(\'The given type "\'.concat(i,\'" is not supported\'));(e=>{const r=t.get(e);if(void 0===r)throw new Error(\'There is no timeout scheduled with the given id "\'.concat(e,\'".\'));clearTimeout(r),t.delete(e)})(o),postMessage({error:null,id:r})}}else{if("set"!==s.method)throw new Error(\'The given method "\'.concat(s.method,\'" is not supported\'));{const{params:{delay:i,now:n,timerId:a,timerType:d}}=s;if("interval"===d)((t,i,s)=>{const{expected:n,remainingDelay:a}=r(t,s);e.set(i,setTimeout(o,a,e,i,n,"interval"))})(i,a,n);else{if("timeout"!==d)throw new Error(\'The given type "\'.concat(d,\'" is not supported\'));((e,i,s)=>{const{expected:n,remainingDelay:a}=r(e,s);t.set(i,setTimeout(o,a,t,i,n,"timeout"))})(i,a,n)}}}}catch(e){postMessage({error:{message:e.message},id:s.id,result:null})}}))})();', ak = null, () => {
                    if (null !== ak) return ak;
                    let a = new Blob([$], {
                            type: "application/javascript; charset=utf-8"
                        }),
                        b = URL.createObjectURL(a);
                    return ak = Z(b), setTimeout(() => URL.revokeObjectURL(b)), ak
                }),
                am = a => al().clearInterval(a),
                an = a => al().clearTimeout(a),
                ao = (a, b) => al().setInterval(a, b),
                ap = (a, b) => al().setTimeout(a, b),
                aq = (typeof window > "u" ? "undefined" : typeof window) == "object",
                ar = {
                    setTimeout: aq ? setTimeout.bind(window) : setTimeout,
                    clearTimeout: aq ? clearTimeout.bind(window) : clearTimeout,
                    setInterval: aq ? setInterval.bind(window) : setInterval,
                    clearInterval: aq ? clearInterval.bind(window) : clearInterval
                },
                as = {},
                at = class {
                    name;
                    closed = !1;
                    mc = new MessageChannel;
                    constructor(a) {
                        this.name = a, as[a] = as[a] || [], as[a].push(this), this.mc.port1.start(), this.mc.port2.start(), this.onStorage = this.onStorage.bind(this), window.addEventListener("storage", this.onStorage)
                    }
                    onStorage(a) {
                        if (a.storageArea !== window.localStorage || a.key.substring(0, this.name.length) !== this.name || null === a.newValue) return;
                        let b = JSON.parse(a.newValue);
                        this.mc.port2.postMessage(b)
                    }
                    postMessage(a) {
                        if (this.closed) throw Error("InvalidStateError");
                        let b = JSON.stringify(a),
                            c = `${this.name}:${String(Date.now())}${String(Math.random())}`;
                        window.localStorage.setItem(c, b), ar.setTimeout(() => {
                            window.localStorage.removeItem(c)
                        }, 500), as[this.name].forEach(a => {
                            a !== this && a.mc.port2.postMessage(JSON.parse(b))
                        })
                    }
                    close() {
                        if (this.closed) return;
                        this.closed = !0, this.mc.port1.close(), this.mc.port2.close(), window.removeEventListener("storage", this.onStorage);
                        let a = as[this.name].indexOf(this);
                        as[this.name].splice(a, 1)
                    }
                    get onmessage() {
                        return this.mc.port1.onmessage
                    }
                    set onmessage(a) {
                        this.mc.port1.onmessage = a
                    }
                    get onmessageerror() {
                        return this.mc.port1.onmessageerror
                    }
                    set onmessageerror(a) {
                        this.mc.port1.onmessageerror = a
                    }
                    addEventListener(a, b) {
                        return this.mc.port1.addEventListener(a, b)
                    }
                    removeEventListener(a, b) {
                        return this.mc.port1.removeEventListener(a, b)
                    }
                    dispatchEvent(a) {
                        return this.mc.port1.dispatchEvent(a)
                    }
                },
                au = typeof window > "u" ? void 0 : "function" == typeof window.BroadcastChannel ? window.BroadcastChannel : at;

            function av() {
                return Math.random().toString(36).substring(2)
            }
            var aw = class {
                    options;
                    channel;
                    token = av();
                    isLeader = !1;
                    isDead = !1;
                    isApplying = !1;
                    reApply = !1;
                    intervals = [];
                    listeners = [];
                    deferred;
                    constructor(a, b) {
                        this.channel = a, this.options = b, this.apply = this.apply.bind(this), this.awaitLeadership = this.awaitLeadership.bind(this), this.sendAction = this.sendAction.bind(this)
                    }
                    async apply() {
                        if (this.isLeader || this.isDead) return !1;
                        if (this.isApplying) return this.reApply = !0, !1;
                        this.isApplying = !0;
                        let a = !1,
                            b = b => {
                                let {
                                    token: c,
                                    action: d
                                } = b.data;
                                c !== this.token && (0 === d && c > this.token && (a = !0), 1 === d && (a = !0))
                            };
                        this.channel.addEventListener("message", b);
                        try {
                            return this.sendAction(0), await
                            function(a = 0) {
                                return new Promise(b => ar.setTimeout(b, a))
                            }(this.options.responseTime), this.channel.removeEventListener("message", b), this.isApplying = !1, a ? !!this.reApply && this.apply() : (this.assumeLead(), !0)
                        } catch {
                            return !1
                        }
                    }
                    awaitLeadership() {
                        if (this.isLeader) return Promise.resolve();
                        let a = !1,
                            b = null;
                        return new Promise(c => {
                            let d = () => {
                                if (a) return;
                                a = !0;
                                try {
                                    ar.clearInterval(b)
                                } catch {}
                                let d = this.intervals.indexOf(b);
                                d >= 0 && this.intervals.splice(d, 1), this.channel.removeEventListener("message", e), c()
                            };
                            b = ar.setInterval(() => {
                                this.apply().then(() => {
                                    this.isLeader && d()
                                })
                            }, this.options.fallbackInterval), this.intervals.push(b);
                            let e = a => {
                                let {
                                    action: b
                                } = a.data;
                                2 === b && this.apply().then(() => {
                                    this.isLeader && d()
                                })
                            };
                            this.channel.addEventListener("message", e)
                        })
                    }
                    sendAction(a) {
                        this.channel.postMessage({
                            action: a,
                            token: this.token
                        })
                    }
                    assumeLead() {
                        this.isLeader = !0;
                        let a = a => {
                            let {
                                action: b
                            } = a.data;
                            0 === b && this.sendAction(1)
                        };
                        return this.channel.addEventListener("message", a), this.listeners.push(a), this.sendAction(1)
                    }
                    waitForLeadership() {
                        return this.deferred || (this.deferred = this.awaitLeadership()), this.deferred
                    }
                    close() {
                        if (!this.isDead) {
                            this.isDead = !0, this.isLeader = !1, this.sendAction(2);
                            try {
                                this.listeners.forEach(a => this.channel.removeEventListener("message", a)), this.intervals.forEach(a => ar.clearInterval(a))
                            } catch {}
                        }
                    }
                },
                ax = class {
                    channel;
                    options;
                    elector;
                    token = av();
                    registry = new Map;
                    allIdle = !1;
                    isLastActive = !1;
                    constructor(a) {
                        let {
                            channelName: b
                        } = a;
                        if (this.options = a, this.channel = new au(b), this.registry.set(this.token, 1), a.leaderElection) {
                            let c = {
                                fallbackInterval: 2e3,
                                responseTime: 100
                            };
                            this.elector = new aw(this.channel, c), this.elector.waitForLeadership()
                        }
                        this.channel.addEventListener("message", a => {
                            let {
                                action: b,
                                token: c,
                                data: d
                            } = a.data;
                            switch (b) {
                                case 3:
                                    this.registry.set(c, 2);
                                    break;
                                case 4:
                                    this.registry.delete(c);
                                    break;
                                case 5:
                                    this.idle(c);
                                    break;
                                case 6:
                                    this.active(c);
                                    break;
                                case 7:
                                    this.prompt(c);
                                    break;
                                case 8:
                                    this.start(c);
                                    break;
                                case 9:
                                    this.reset(c);
                                    break;
                                case 10:
                                    this.activate(c);
                                    break;
                                case 11:
                                    this.pause(c);
                                    break;
                                case 12:
                                    this.resume(c);
                                    break;
                                case 13:
                                    this.options.onMessage(d)
                            }
                        }), this.send(3)
                    }
                    get isLeader() {
                        if (!this.elector) throw Error('❌ Leader election is not enabled. To Enable it set the "leaderElection" property to true.');
                        return this.elector.isLeader
                    }
                    prompt(a = this.token) {
                        this.registry.set(a, 0);
                        let b = [...this.registry.values()].every(a => 0 === a);
                        a === this.token && this.send(7), b && this.options.onPrompt()
                    }
                    idle(a = this.token) {
                        this.registry.set(a, 2);
                        let b = [...this.registry.values()].every(a => 2 === a);
                        a === this.token && this.send(5), !this.allIdle && b && (this.allIdle = !0, this.options.onIdle())
                    }
                    active(a = this.token) {
                        this.allIdle = !1, this.registry.set(a, 1);
                        let b = [...this.registry.values()].some(a => 1 === a);
                        a === this.token && this.send(6), b && this.options.onActive(), this.isLastActive = a === this.token
                    }
                    start(a = this.token) {
                        this.allIdle = !1, this.registry.set(a, 1), a === this.token ? this.send(8) : this.options.start(!0), this.isLastActive = a === this.token
                    }
                    reset(a = this.token) {
                        this.allIdle = !1, this.registry.set(a, 1), a === this.token ? this.send(9) : this.options.reset(!0), this.isLastActive = a === this.token
                    }
                    activate(a = this.token) {
                        this.allIdle = !1, this.registry.set(a, 1), a === this.token ? this.send(10) : this.options.activate(!0), this.isLastActive = a === this.token
                    }
                    pause(a = this.token) {
                        a === this.token ? this.send(11) : this.options.pause(!0)
                    }
                    resume(a = this.token) {
                        a === this.token ? this.send(12) : this.options.resume(!0)
                    }
                    message(a) {
                        try {
                            this.channel.postMessage({
                                action: 13,
                                token: this.token,
                                data: a
                            })
                        } catch {}
                    }
                    send(a) {
                        try {
                            this.channel.postMessage({
                                action: a,
                                token: this.token
                            })
                        } catch {}
                    }
                    close() {
                        this.options.leaderElection && this.elector.close(), this.send(4), this.channel.close()
                    }
                },
                ay = aq ? document : null,
                az = ["mousemove", "keydown", "wheel", "DOMMouseScroll", "mousewheel", "mousedown", "touchstart", "touchmove", "MSPointerDown", "MSPointerMove", "visibilitychange", "focus"];

            function aA(a, b) {
                let c = 0;
                return function(...d) {
                    let e = new Date().getTime();
                    if (!(e - c < b)) return c = e, a(...d)
                }
            }
            var aB, aC = () => Date.now();
            (0, n.createContext)(null).Consumer, c(27451);
            var aD = function() {
                    var a = function() {
                            f(!1), r(!1), console.log("IS ACTIVE...")
                        },
                        b = function() {
                            console.log("IS PROMPTED..."), f(!0)
                        },
                        c = function() {
                            o()
                        },
                        d = (0, n.useState)(!1),
                        e = d[0],
                        f = d[1],
                        h = (0, i.useSession)(),
                        k = h.data,
                        l = (0, j.useRouter)(),
                        m = function a({
                            timeout: b = 12e5,
                            promptTimeout: c = 0,
                            promptBeforeIdle: d = 0,
                            element: e = ay,
                            events: f = az,
                            timers: g,
                            immediateEvents: h = [],
                            onPresenceChange: i = () => {},
                            onPrompt: j = () => {},
                            onIdle: k = () => {},
                            onActive: l = () => {},
                            onAction: m = () => {},
                            onMessage: o = () => {},
                            debounce: p = 0,
                            throttle: q = 0,
                            eventsThrottle: r = 200,
                            startOnMount: s = !0,
                            startManually: t = !1,
                            stopOnIdle: u = !1,
                            crossTab: v = !1,
                            name: w = "idle-timer",
                            syncTimers: x = 0,
                            leaderElection: y = !1,
                            disabled: z = !1
                        } = {}) {
                            let A = (0, n.useRef)(aC()),
                                B = (0, n.useRef)(aC()),
                                C = (0, n.useRef)(null),
                                D = (0, n.useRef)(null),
                                E = (0, n.useRef)(0),
                                F = (0, n.useRef)(0),
                                G = (0, n.useRef)(0),
                                H = (0, n.useRef)(0),
                                I = (0, n.useRef)(!1),
                                J = (0, n.useRef)(!1),
                                K = (0, n.useRef)(!1),
                                L = (0, n.useRef)(!0),
                                M = (0, n.useRef)(!1),
                                N = (0, n.useRef)(null),
                                O = (0, n.useRef)(null),
                                P = (0, n.useRef)(b),
                                Q = (0, n.useRef)(0);
                            (0, n.useEffect)(() => {
                                if (c && console.warn("⚠️ IdleTimer -- The `promptTimeout` property has been deprecated in favor of `promptBeforeIdle`. It will be removed in the next major release."), d && c) throw Error("❌ Both promptTimeout and promptBeforeIdle can not be set. The promptTimeout property will be deprecated in a future version.");
                                if (b >= 2147483647) throw Error("\\u274C The value for the timeout property must fit in a 32 bit signed integer, 2147483647.");
                                if (c >= 2147483647) throw Error("\\u274C The value for the promptTimeout property must fit in a 32 bit signed integer, 2147483647.");
                                if (d >= 2147483647) throw Error("\\u274C The value for the promptBeforeIdle property must fit in a 32 bit signed integer, 2147483647.");
                                if (d >= b) throw Error(`\u274C The value for the promptBeforeIdle property must be less than the timeout property, ${b}.`);
                                if (d ? (P.current = b - d, Q.current = d) : (P.current = b, Q.current = c), !L.current) {
                                    if (t || z) return;
                                    I.current && (Z.current(null, aN), O.current && O.current.active()), am()
                                }
                            }, [b, c, d, t, z]);
                            let R = (0, n.useRef)(u);
                            (0, n.useEffect)(() => {
                                R.current = u
                            }, [u]);
                            let S = (0, n.useRef)(h),
                                T = (0, n.useRef)(e),
                                U = (0, n.useRef)([...new Set([...f, ...h]).values()]),
                                V = (0, n.useRef)(z);
                            (0, n.useEffect)(() => {
                                V.current = z, !L.current && (z ? ap() : t || am())
                            }, [z]);
                            let W = (0, n.useRef)(i);
                            (0, n.useEffect)(() => {
                                W.current = i
                            }, [i]);
                            let X = (0, n.useRef)(j);
                            (0, n.useEffect)(() => {
                                X.current = j
                            }, [j]);
                            let Y = (0, n.useRef)(k);
                            (0, n.useEffect)(() => {
                                Y.current = k
                            }, [k]);
                            let Z = (0, n.useRef)(l);
                            (0, n.useEffect)(() => {
                                Z.current = l
                            }, [l]);
                            let $ = (0, n.useRef)(m);
                            (0, n.useEffect)(() => {
                                $.current = m
                            }, [m]);
                            let _ = (0, n.useRef)(o);
                            (0, n.useEffect)(() => {
                                _.current = o
                            }, [o]);
                            let aa = (0, n.useMemo)(() => {
                                    let a = (a, b) => $.current(a, b);
                                    return p > 0 ? function(a, b) {
                                        let c;

                                        function d(...d) {
                                            c && clearTimeout(c), c = setTimeout(() => {
                                                a(...d), c = null
                                            }, b)
                                        }
                                        return d.cancel = function() {
                                            clearTimeout(c)
                                        }, d
                                    }(a, p) : q > 0 ? aA(a, q) : a
                                }, [q, p]),
                                ab = (0, n.useRef)();
                            (0, n.useEffect)(() => {
                                v && x && (ab.current = aA(() => {
                                    O.current.active()
                                }, x))
                            }, [v, x]);
                            let ac = () => {
                                    null !== N.current && (ar.clearTimeout(N.current), N.current = null)
                                },
                                ad = (a, b = !0) => {
                                    ac(), N.current = ar.setTimeout(ah, a || P.current), b && (D.current = aC())
                                },
                                ae = a => {
                                    J.current || I.current || (X.current(a, aN), W.current({
                                        type: "active",
                                        prompted: !0
                                    }, aN)), H.current = 0, G.current = aC(), J.current = !0, ad(Q.current, !1)
                                },
                                af = () => {
                                    ac(), I.current || (Y.current(null, aN), W.current({
                                        type: "idle"
                                    }, aN)), I.current = !0, C.current = aC(), R.current ? al() : J.current && (G.current = 0, J.current = !1)
                                },
                                ag = a => {
                                    ac(), (I.current || J.current) && (Z.current(a, aN), W.current({
                                        type: "active",
                                        prompted: !1
                                    }, aN)), J.current = !1, G.current = 0, I.current = !1, E.current += aC() - C.current, F.current += aC() - C.current, ak(), ad()
                                },
                                ah = a => {
                                    if (!I.current) {
                                        aa.cancel && aa.cancel();
                                        let b = aC() - D.current;
                                        if (!(P.current + Q.current < b) && Q.current > 0 && !J.current) {
                                            O.current ? O.current.prompt() : ae(a);
                                            return
                                        }
                                        O.current ? O.current.idle() : af();
                                        return
                                    }
                                    O.current ? O.current.active() : ag(a)
                                },
                                ai = a => {
                                    if (s || D.current || (D.current = aC(), Z.current(null, aN)), aa(a, aN), J.current) return;
                                    if (ac(), !I.current && S.current.includes(a.type)) {
                                        ah(a);
                                        return
                                    }
                                    let b = aC() - D.current;
                                    if (I.current && !u || !I.current && b >= P.current) {
                                        ah(a);
                                        return
                                    }
                                    K.current = !1, H.current = 0, G.current = 0, ad(), v && x && ab.current()
                                },
                                aj = (0, n.useRef)(ai);
                            (0, n.useEffect)(() => {
                                let a = M.current;
                                a && al(), r > 0 ? aj.current = aA(ai, r) : aj.current = ai, a && ak()
                            }, [r, q, p, $, v, x]);
                            let ak = () => {
                                    aq && T.current && (M.current || (U.current.forEach(a => {
                                        T.current.addEventListener(a, aj.current, {
                                            capture: !0,
                                            passive: !0
                                        })
                                    }), M.current = !0))
                                },
                                al = (a = !1) => {
                                    aq && T.current && (M.current || a) && (U.current.forEach(a => {
                                        T.current.removeEventListener(a, aj.current, {
                                            capture: !0
                                        })
                                    }), M.current = !1)
                                },
                                am = (0, n.useCallback)(a => !V.current && (ac(), ak(), I.current = !1, J.current = !1, K.current = !1, H.current = 0, G.current = 0, O.current && !a && O.current.start(), ad(), !0), [N, I, V, P, O]),
                                an = (0, n.useCallback)(a => !V.current && (ac(), ak(), B.current = aC(), E.current += aC() - C.current, F.current += aC() - C.current, E.current = 0, I.current = !1, J.current = !1, K.current = !1, H.current = 0, G.current = 0, O.current && !a && O.current.reset(), t || ad(), !0), [N, I, P, t, V, O]),
                                ao = (0, n.useCallback)(a => !V.current && (ac(), ak(), (I.current || J.current) && ag(), I.current = !1, J.current = !1, K.current = !1, H.current = 0, G.current = 0, B.current = aC(), O.current && !a && O.current.activate(), ad(), !0), [N, I, J, V, P, O]),
                                ap = (0, n.useCallback)((a = !1) => !V.current && !K.current && (H.current = aE(), K.current = !0, al(), ac(), O.current && !a && O.current.pause(), !0), [N, V, O]),
                                as = (0, n.useCallback)((a = !1) => !V.current && !!K.current && (K.current = !1, J.current || ak(), I.current || ad(H.current), G.current && (G.current = aC()), O.current && !a && O.current.resume(), !0), [N, P, V, H, O]),
                                at = (0, n.useCallback)((a, b) => (O.current ? (b && _.current(a, aN), O.current.message(a)) : b && _.current(a, aN), !0), [o]),
                                au = (0, n.useCallback)(() => I.current, [I]),
                                av = (0, n.useCallback)(() => J.current, [J]),
                                aw = (0, n.useCallback)(() => O.current ? O.current.isLeader : null, [O]),
                                aB = (0, n.useCallback)(() => O.current ? O.current.isLastActive : null, [O]),
                                aD = (0, n.useCallback)(() => O.current ? O.current.token : null, [O]),
                                aE = (0, n.useCallback)(() => {
                                    if (K.current) return H.current;
                                    let a = H.current ? H.current : Q.current + P.current,
                                        b = D.current ? aC() - D.current : 0,
                                        c = Math.floor(a - b);
                                    return c < 0 ? 0 : Math.abs(c)
                                }, [P, Q, J, H, D]),
                                aF = (0, n.useCallback)(() => Math.round(aC() - B.current), [B]),
                                aG = (0, n.useCallback)(() => Math.round(aC() - A.current), [A]),
                                aH = (0, n.useCallback)(() => C.current ? new Date(C.current) : null, [C]),
                                aI = (0, n.useCallback)(() => D.current ? new Date(D.current) : null, [D]),
                                aJ = (0, n.useCallback)(() => I.current ? Math.round(aC() - C.current + E.current) : Math.round(E.current), [C, E]),
                                aK = (0, n.useCallback)(() => I.current ? Math.round(aC() - C.current + F.current) : Math.round(F.current), [C, F]),
                                aL = (0, n.useCallback)(() => {
                                    let a = Math.round(aF() - aJ());
                                    return a >= 0 ? a : 0
                                }, [C, E]),
                                aM = (0, n.useCallback)(() => {
                                    let a = Math.round(aG() - aK());
                                    return a >= 0 ? a : 0
                                }, [C, E]);
                            (0, n.useEffect)(() => {
                                var a;
                                if (p > 0 && q > 0) throw Error("❌ onAction can either be throttled or debounced, not both.");
                                g && (a = g, ar.setTimeout = a.setTimeout, ar.clearTimeout = a.clearTimeout, ar.setInterval = a.setInterval, ar.clearInterval = a.clearInterval);
                                let b = () => {
                                    O.current && O.current.close(), aa.cancel && aa.cancel(), ac(), al(!0)
                                };
                                return aq && window.addEventListener("beforeunload", b), () => {
                                    aq && window.removeEventListener("beforeunload", b), O.current && O.current.close(), aa.cancel && aa.cancel(), ac(), al(!0)
                                }
                            }, []), (0, n.useEffect)(() => {
                                O.current && O.current.close(), v ? O.current = new ax({
                                    channelName: w,
                                    leaderElection: y,
                                    onPrompt: () => {
                                        ae()
                                    },
                                    onIdle: () => {
                                        af()
                                    },
                                    onActive: () => {
                                        ag()
                                    },
                                    onMessage: a => {
                                        _.current(a, aN)
                                    },
                                    start: am,
                                    reset: an,
                                    activate: ao,
                                    pause: ap,
                                    resume: as
                                }) : O.current = null
                            }, [v, w, y, X, Y, Z, _, am, an, ap, as]), (0, n.useEffect)(() => {
                                L.current || (ac(), al(!0)), t || z || (s ? am() : ak())
                            }, [t, s, z, L]), (0, n.useEffect)(() => {
                                if (!L.current) {
                                    let a = [...new Set([...f, ...h]).values()];
                                    al(), U.current = a, T.current = e, S.current = h, t || z || (s ? am() : ak())
                                }
                            }, [e, JSON.stringify(f), JSON.stringify(h), L, z, t, s]), (0, n.useEffect)(() => {
                                L.current && (L.current = !1)
                            }, [L]);
                            let aN = {
                                message: at,
                                start: am,
                                reset: an,
                                activate: ao,
                                pause: ap,
                                resume: as,
                                isIdle: au,
                                isPrompted: av,
                                isLeader: aw,
                                isLastActiveTab: aB,
                                getTabId: aD,
                                getRemainingTime: aE,
                                getElapsedTime: aF,
                                getTotalElapsedTime: aG,
                                getLastIdleTime: aH,
                                getLastActiveTime: aI,
                                getIdleTime: aJ,
                                getTotalIdleTime: aK,
                                getActiveTime: aL,
                                getTotalActiveTime: aM,
                                setOnPresenceChange: a => {
                                    i = a, W.current = a
                                },
                                setOnPrompt: a => {
                                    j = a, X.current = a
                                },
                                setOnIdle: a => {
                                    k = a, Y.current = a
                                },
                                setOnActive: a => {
                                    l = a, Z.current = a
                                },
                                setOnAction: a => {
                                    m = a, $.current = a
                                },
                                setOnMessage: a => {
                                    o = a, _.current = a
                                }
                            };
                            return aN
                        }({
                            onIdle: function() {
                                return s.apply(this, arguments)
                            },
                            onActive: a,
                            onPrompt: b,
                            timeout: 3e5,
                            promptTimeout: 15e3,
                            throttle: 500,
                            stopOnIdle: !0
                        }),
                        o = m.activate,
                        p = m.isIdle,
                        q = (m.start, (0, n.useState)(p())),
                        r = (q[0], q[1]);

                    function s() {
                        return (s = (0, N.Z)(P().mark(function a() {
                            var b, c, d;
                            return P().wrap(function(a) {
                                for (;;) switch (a.prev = a.next) {
                                    case 0:
                                        return f(!1), r(!0), c = (null == k ? void 0 : null === (b = k.encryptedData) || void 0 === b ? void 0 : b.encrypted) ? y.EE.passcode : y.EE.signin, a.next = 6, (0, i.signOut)({
                                            redirect: !1,
                                            callbackUrl: c
                                        });
                                    case 6:
                                        d = a.sent, l.replace(d.url);
                                    case 8:
                                    case "end":
                                        return a.stop()
                                }
                            }, a)
                        }))).apply(this, arguments)
                    }
                    return (0, g.BX)(Q.Z, {
                        open: e,
                        "aria-labelledby": "alert-dialog-title",
                        "aria-describedby": "alert-dialog-description",
                        fullWidth: !0,
                        classes: {
                            paper: U().paper
                        },
                        className: "[&_.MuiPaper-root]:dark:bg-n8 bg-n0/5 z-[200]",
                        children: [(0, g.tZ)(R.Z, {
                            id: "alert-dialog-title",
                            className: "font-semibold font-poppins text-body3 leading-normal text-n6 dark:text-n3 pb-4",
                            children: "Are you still here?"
                        }), (0, g.tZ)(S.Z, {
                            className: "font-poppins justify-start px-2 pb-2 space-x-4",
                            children: (0, g.tZ)("button", {
                                onClick: c,
                                className: "bg-p1 text-[#FFFFFF] w-full text-hairline2 font-bold h-12 rounded",
                                children: "Yes"
                            })
                        })]
                    })
                },
                aE = c(58469),
                aF = function(a) {
                    var b = a.q,
                        c = a.icon_left,
                        f = a.title,
                        i = a.desc,
                        k = a.icon,
                        l = (0, j.useRouter)(),
                        m = function() {
                            l.push({
                                pathname: l.pathname,
                                query: (0, d.Z)({}, l.query, b)
                            }, void 0, {
                                shallow: !0,
                                scroll: !1
                            })
                        };
                    return (0, g.tZ)("div", {
                        className: "px-4 mx-auto font-poppins text-caption2",
                        children: (0, g.tZ)(h.E.div, (0, e.Z)((0, d.Z)({
                            variants: v.Gs
                        }, v.i6), {
                            onClick: m,
                            className: "dark:bg-n5/5 bg-n0 dark:shadow-none shadow-button p-1 rounded-md",
                            children: (0, g.BX)("div", {
                                className: "flex relative p-2 gap-4 overflow-hidden",
                                children: [c ? k : (0, g.BX)("div", {
                                    className: "h-16 w-16 grid gap-2 grid-rows-3 flex-shrink-0",
                                    children: [(0, g.tZ)("div", {
                                        className: "h-full dark:bg-n5/10 dark:shadow-none shadow-button bg-n0 rounded-full"
                                    }), (0, g.tZ)("div", {
                                        className: "h-full w-5/6 dark:bg-n5/10 dark:shadow-none shadow-button bg-n0 rounded-full"
                                    }), (0, g.tZ)("div", {
                                        className: "h-full w-3/6 dark:bg-n5/10 dark:shadow-none shadow-button bg-n0 rounded-full"
                                    })]
                                }), (0, g.BX)("div", {
                                    className: "py-1 space-y-1 pr-12 relative z-10 dark:z-0",
                                    children: [(0, g.tZ)("h3", {
                                        className: "text-body15 dark:text-n2 tracking-wide",
                                        children: f
                                    }), (0, g.tZ)("p", {
                                        className: "text-caption2 leading-normal tracking-wide font-normal text-n8 dark:text-n0/60",
                                        children: i
                                    })]
                                }), !c && (0, g.tZ)("div", {
                                    className: "absolute top-0 -right-4 dark:-z-10 z-0 dark:text-n0/80",
                                    children: k
                                })]
                            })
                        }))
                    })
                },
                aG = {
                    q: {
                        t: "create-pin"
                    },
                    title: "Setup Your PIN",
                    desc: "Secure your account with a personal PIN",
                    icon: (0, g.tZ)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        strokeWidth: "1.5",
                        stroke: "currentColor",
                        className: "w-20 h-20",
                        children: (0, g.tZ)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13"
                        })
                    })
                },
                aH = {
                    q: {
                        t: "kyc"
                    },
                    title: "CBN KYC Requirement",
                    desc: "Verify Your Account NIN or BVN for CBN KYC Compliance",
                    icon_left: !0,
                    icon: (0, g.tZ)(M(), {
                        src: "/assets/banks/cbn.svg",
                        width: 92,
                        height: 92
                    })
                },
                aI = function(a) {
                    var b = (0, j.useRouter)(),
                        c = (0, aE.G)().profile_data,
                        e = (0, f.Z)(c, 3),
                        h = e[0],
                        l = e[1];
                    e[2];
                    var m = (0, i.useSession)(),
                        o = m.data;
                    return (0, n.useEffect)(function() {
                        var a = JSON.parse(localStorage.getItem("_cusr"));
                        !o && a && b.replace(y.EE.passcode)
                    }, [o]), (0, g.BX)(g.HY, {
                        children: [(0, g.tZ)(aD, {}), (0, g.BX)("div", {
                            className: "space-y-4",
                            children: [(0, g.tZ)(s, {
                                sticky: !0
                            }), (0, g.tZ)("div", {
                                className: "h-14"
                            }), (0, g.tZ)(k.yo, (0, d.Z)({}, a)), o && !o.encryptedData && (0, g.tZ)(aF, (0, d.Z)({}, aG)), void 0 !== h && !l && !(null == h ? void 0 : h.verified_id) && (0, g.tZ)(aF, (0, d.Z)({}, aH)), (0, g.tZ)(K, {}), (0, g.tZ)("div", {
                                className: "h-2"
                            }), (0, g.tZ)(k.tW, {})]
                        })]
                    })
                },
                aJ = !0,
                aK = aI;
            aI.getLayout = function(a) {
                return (0, g.tZ)(t.Z, (0, d.Z)({}, a))
            }
        },
        72645: function(a, b, c) {
            "use strict";
            c.r(b), c.d(b, {
                default: function() {
                    return r
                }
            }), c(47568), c(14924);
            var d = c(26042);
            c(69396), c(34051);
            var e = c(35944);
            c(33299), c(11163), c(87536), c(22501);
            var f = c(99534),
                g = c(828),
                h = c(54318),
                i = c(15082),
                j = c.n(i);
            c(60486);
            var k = c(13800);
            c(15793);
            var l = c(95801),
                m = c(58469),
                n = c(32071);
            c(12194), c(77556), c(19230);
            var o = c(69311),
                p = c.n(o),
                q = function(a) {
                    return a.noDesc, null
                },
                r = q
        },
        15082: function(a) {
            a.exports = {
                inputRoot: "AmountField_inputRoot__4Yt7n",
                focused: "AmountField_focused__bSyE9",
                input: "AmountField_input__YTJD_"
            }
        },
        69311: function(a) {
            a.exports = {
                inputRoot: "EmailField_inputRoot__EdSnG",
                focused: "EmailField_focused__a9jyo",
                input: "EmailField_input__VjAZu"
            }
        }
    },
    function(a) {
        a.O(0, [9532, 7536, 2011, 3911, 3170, 2501, 7451, 3559, 9774, 2888, 179], function() {
            var b;
            return a(a.s = 91015)
        }), _N_E = a.O()
    }
])