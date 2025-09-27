"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3559], {
        38053: function(a, b, c) {
            var d = c(47568),
                e = c(26042),
                f = c(69396),
                g = c(99534),
                h = c(34051),
                i = c.n(h),
                j = c(35944),
                k = c(58703),
                l = c(21737),
                m = c(67294),
                n = function(a) {
                    var b, c = a.children,
                        h = a.copyText,
                        n = a.onClick,
                        o = (0, g.Z)(a, ["children", "copyText", "onClick"]),
                        p = (0, m.useState)(!1),
                        q = p[0],
                        r = p[1],
                        s = (b = (0, d.Z)(i().mark(function a() {
                            return i().wrap(function(a) {
                                for (;;) switch (a.prev = a.next) {
                                    case 0:
                                        return a.prev = 0, a.next = 3, navigator.clipboard.writeText(h);
                                    case 3:
                                        console.log("Content copied to clipboard"), r(!0), a.next = 10;
                                        break;
                                    case 7:
                                        a.prev = 7, a.t0 = a.catch(0), console.error("Failed to copy: ", a.t0);
                                    case 10:
                                        n && n();
                                    case 11:
                                    case "end":
                                        return a.stop()
                                }
                            }, a, null, [
                                [0, 7]
                            ])
                        })), function() {
                            return b.apply(this, arguments)
                        });
                    return (0, j.BX)(j.HY, {
                        children: [(0, j.tZ)("button", (0, f.Z)((0, e.Z)({}, o), {
                            onClick: s,
                            children: c
                        })), (0, j.tZ)(k.Z, {
                            anchorOrigin: {
                                vertical: "bottom",
                                horizontal: "center"
                            },
                            open: q,
                            autoHideDuration: 3e3,
                            onClose: function() {
                                return r(!1)
                            },
                            children: (0, j.BX)(l.Z, {
                                onClose: function() {
                                    return r(!1)
                                },
                                severity: "success",
                                className: "dark:bg-[#000] shadow-lg tracking-wide text-n05 font-poppins rounded-md font-medium",
                                sx: {
                                    width: "auto",
                                    zIndex: 50,
                                    "& .MuiAlert-icon": {
                                        display: "none"
                                    }
                                },
                                children: ["Copied ", h]
                            })
                        })]
                    })
                };
            b.Z = n
        },
        57764: function(a, b, c) {
            var d = c(47568),
                e = c(34051),
                f = c.n(e),
                g = c(35944),
                h = c(67294),
                i = function(a) {
                    var b, c = a.textToCopy,
                        e = a.children,
                        i = a.className,
                        j = a.copiedComp,
                        k = (0, h.useState)(!1),
                        l = k[0],
                        m = k[1],
                        n = (b = (0, d.Z)(f().mark(function a() {
                            return f().wrap(function(a) {
                                for (;;) switch (a.prev = a.next) {
                                    case 0:
                                        return a.prev = 0, a.next = 3, navigator.clipboard.writeText(c);
                                    case 3:
                                        m(!0), setTimeout(function() {
                                            return m(!1)
                                        }, 2e3), a.next = 10;
                                        break;
                                    case 7:
                                        a.prev = 7, a.t0 = a.catch(0), console.error("Failed to copy text to clipboard:", a.t0);
                                    case 10:
                                    case "end":
                                        return a.stop()
                                }
                            }, a, null, [
                                [0, 7]
                            ])
                        })), function() {
                            return b.apply(this, arguments)
                        });
                    return (0, g.tZ)("span", {
                        onClick: n,
                        className: "".concat(l ? "pointer-events-none" : "", " ").concat(i),
                        children: l && j ? j : e
                    })
                };
            b.Z = i
        },
        13559: function(a, b, c) {
            c.d(b, {
                Z: function() {
                    return ad
                }
            });
            var d = c(26042),
                e = c(69396),
                f = c(35944),
                g = c(5152),
                h = c.n(g),
                i = c(67294),
                j = c(41664),
                k = c.n(j),
                l = c(11163),
                m = c(828);
            c(15793);
            var n = c(77556),
                o = c(58469),
                p = function() {
                    var a, b = (0, l.useRouter)(),
                        c = (0, o.G)().profile_data,
                        d = (0, m.Z)(c, 3),
                        e = d[0];
                    d[1], d[2];
                    var g = null !== (a = b.query.t) && void 0 !== a ? a : "home",
                        h = function(a) {
                            return null == g ? void 0 : g.includes(a)
                        };
                    return ["home", "admin", "services", "history", "more"].includes(g) ? (0, f.BX)("div", {
                        className: "flex items-center z-20 fixed bottom-0 left-0 w-full bg-n0 dark:bg-[#000]",
                        children: [(0, f.tZ)(k(), {
                            href: "/dashboard?t=home",
                            as: "/dashboard",
                            shallow: !0,
                            children: (0, f.BX)("a", {
                                className: "flex-1 py-4 w-[94px] flex center flex-col",
                                children: [(0, f.tZ)("div", {
                                    children: h("home") ? (0, f.BX)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 24 24",
                                        fill: "currentColor",
                                        className: "w-6 h-6 [&_path]:fill-p1 dark:[&_path]:fill-n3",
                                        children: [(0, f.tZ)("path", {
                                            d: "M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"
                                        }), (0, f.tZ)("path", {
                                            d: "M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"
                                        })]
                                    }) : (0, f.tZ)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        strokeWidth: "2.5",
                                        stroke: "currentColor",
                                        className: "w-6 h-6 [&_path]:stroke-[#000]/85 dark:[&_path]:stroke-n0/25 dark:opacity-70",
                                        children: (0, f.tZ)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                                        })
                                    })
                                }), (0, f.tZ)("p", {
                                    className: "text-[0.75rem] tracking-wide font-poppins font-medium ".concat(h("home") ? "text-p1 dark:text-n0" : "text-n7 dark:text-n0/40", " mt-0.5"),
                                    children: "Home"
                                })]
                            })
                        }), (null == e ? void 0 : e.isAdmin) && (0, f.tZ)(k(), {
                            href: "/dashboard?t=admin",
                            shallow: !0,
                            children: (0, f.BX)("a", {
                                className: "flex-1 py-4 w-[94px] flex center flex-col",
                                children: [(0, f.tZ)("div", {
                                    children: h("admin") ? (0, f.tZ)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 24 24",
                                        fill: "currentColor",
                                        className: "w-6 h-6 [&_path]:fill-p1 dark:[&_path]:fill-n3",
                                        children: (0, f.tZ)("path", {
                                            fillRule: "evenodd",
                                            d: "M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z",
                                            clipRule: "evenodd"
                                        })
                                    }) : (0, f.tZ)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        strokeWidth: "2.5",
                                        stroke: "currentColor",
                                        className: "w-6 h-6 [&_path]:stroke-[#000]/85 dark:[&_path]:stroke-n0/25 dark:opacity-70",
                                        children: (0, f.tZ)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                                        })
                                    })
                                }), (0, f.tZ)("p", {
                                    className: "text-[0.75rem] tracking-wide font-poppins font-medium ".concat(h("admin") ? "text-p1 dark:text-n0" : "text-n7 dark:text-n0/40", " mt-1"),
                                    children: "Admin"
                                })]
                            })
                        }), (0, f.tZ)(k(), {
                            href: "/dashboard?t=services",
                            shallow: !0,
                            children: (0, f.BX)("a", {
                                className: "flex-1 py-4 w-[94px] flex center flex-col",
                                children: [(0, f.tZ)("div", {
                                    children: h("services") ? (0, f.BX)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 24 24",
                                        fill: "currentColor",
                                        className: "w-6 h-6 [&_path]:fill-p1 dark:[&_path]:fill-n3",
                                        children: [(0, f.tZ)("path", {
                                            fillRule: "evenodd",
                                            d: "M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z",
                                            clipRule: "evenodd"
                                        }), (0, f.tZ)("path", {
                                            d: "M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z"
                                        })]
                                    }) : (0, f.tZ)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        strokeWidth: "2.5",
                                        stroke: "currentColor",
                                        className: "w-6 h-6 [&_path]:stroke-[#000]/85 dark:[&_path]:stroke-n0/25 dark:opacity-70",
                                        children: (0, f.tZ)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                                        })
                                    })
                                }), (0, f.tZ)("p", {
                                    className: "text-[0.75rem] tracking-wide font-poppins font-medium ".concat(h("services") ? "text-p1 dark:text-n0" : "text-n7 dark:text-n0/40", " mt-1"),
                                    children: "Pay"
                                })]
                            })
                        }), (0, f.tZ)(k(), {
                            href: "/dashboard?t=history",
                            shallow: !0,
                            children: (0, f.BX)("a", {
                                className: "flex-1 py-4 w-[94px] flex center flex-col",
                                children: [(0, f.tZ)("div", {
                                    children: h("history") ? (0, f.tZ)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 24 24",
                                        fill: "currentColor",
                                        className: "w-6 h-6 [&_path]:fill-p1 dark:[&_path]:fill-n3",
                                        children: (0, f.tZ)("path", {
                                            fillRule: "evenodd",
                                            d: "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z",
                                            clipRule: "evenodd"
                                        })
                                    }) : (0, f.tZ)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        strokeWidth: "2.5",
                                        stroke: "currentColor",
                                        className: "w-6 h-6 [&_path]:stroke-[#000]/85 dark:[&_path]:stroke-n0/25 dark:opacity-70",
                                        children: (0, f.tZ)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                        })
                                    })
                                }), (0, f.tZ)("p", {
                                    className: "text-[0.75rem] tracking-wide font-poppins  font-medium ".concat(h("history") ? "text-p1 dark:text-n0" : "text-n7 dark:text-n0/40", " mt-1"),
                                    children: "History"
                                })]
                            })
                        }), (0, f.tZ)(k(), {
                            href: "/dashboard?t=more",
                            shallow: !0,
                            children: (0, f.BX)("a", {
                                className: "flex-1 py-4 w-[94px] flex center flex-col",
                                children: [(0, f.tZ)("div", {
                                    children: h("more") ? (0, f.tZ)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 24 24",
                                        fill: "currentColor",
                                        className: "[&_path]:fill-p1 dark:[&_path]:fill-n3 w-6 h-6",
                                        children: (0, f.tZ)("path", {
                                            fillRule: "evenodd",
                                            d: "M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 01-.517.608 7.45 7.45 0 00-.478.198.798.798 0 01-.796-.064l-.453-.324a1.875 1.875 0 00-2.416.2l-.243.243a1.875 1.875 0 00-.2 2.416l.324.453a.798.798 0 01.064.796 7.448 7.448 0 00-.198.478.798.798 0 01-.608.517l-.55.092a1.875 1.875 0 00-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 01-.064.796l-.324.453a1.875 1.875 0 00.2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 01.796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 01.517-.608 7.52 7.52 0 00.478-.198.798.798 0 01.796.064l.453.324a1.875 1.875 0 002.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 01-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 001.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 01-.608-.517 7.507 7.507 0 00-.198-.478.798.798 0 01.064-.796l.324-.453a1.875 1.875 0 00-.2-2.416l-.243-.243a1.875 1.875 0 00-2.416-.2l-.453.324a.798.798 0 01-.796.064 7.462 7.462 0 00-.478-.198.798.798 0 01-.517-.608l-.091-.55a1.875 1.875 0 00-1.85-1.566h-.344zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z",
                                            clipRule: "evenodd"
                                        })
                                    }) : (0, f.BX)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        strokeWidth: "2.5",
                                        stroke: "currentColor",
                                        className: "w-6 h-6 [&_path]:stroke-[#000]/85 dark:[&_path]:stroke-n0/25 dark:opacity-70",
                                        children: [(0, f.tZ)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
                                        }), (0, f.tZ)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        })]
                                    })
                                }), (0, f.tZ)("p", {
                                    className: "text-[0.75rem] tracking-wide font-poppins font-medium ".concat(h("more") ? "text-p1 dark:text-n0" : "text-n7 dark:text-n0/40", " mt-1"),
                                    children: "Settings"
                                })]
                            })
                        })]
                    }) : null
                },
                q = p;
            c(38053), c(12194);
            var r = c(95801),
                s = c(60486);
            c(98571), c(40240);
            var t = c(47568),
                u = c(29815),
                v = c(34051),
                w = c.n(v);
            c(25675);
            var x = c(3129),
                y = c(71392),
                z = c(44663),
                A = c(57764),
                B = function(a) {
                    var b = a.onClose,
                        c = (0, z.Zo)(),
                        e = c.feedbackState,
                        g = c.dispatchFeedback,
                        h = e.feedback,
                        j = e.handler,
                        k = (0, i.useState)(!1),
                        m = k[0],
                        o = k[1],
                        p = (0, i.useState)(null),
                        q = p[0],
                        v = p[1],
                        B = (0, i.useState)(!1),
                        C = B[0],
                        D = B[1],
                        E = (0, l.useRouter)(),
                        F = function(a, c) {
                            if (a.type === s.s5.buyData && "failed" === a.status && a.message.includes("number is not") && c) {
                                var d = a.details;
                                console.log({
                                    details: d
                                }), o(!0), v({
                                    provider_id: d.provider_id,
                                    plan_id: d.plan_id,
                                    mobile_no: d.mobile_no.replace(/[^0-9,]/g, ""),
                                    ported_no: !0
                                });
                                return
                            }
                            if (h.length > 1) {
                                g({
                                    type: z.Hp.RESET_FEEDBACKSET_FEEDBACK,
                                    payload: h.slice(1)
                                });
                                return
                            }
                            b && b(), g({
                                type: z.Hp.RESET_FEEDBACK
                            }), E.replace(n.vB.root, {
                                shallow: !0
                            })
                        };
                    console.log({
                        feedback: h
                    });
                    var G, H = (G = (0, t.Z)(w().mark(function a(b) {
                        return w().wrap(function(a) {
                            for (;;) switch (a.prev = a.next) {
                                case 0:
                                    return a.prev = 0, D(!0), a.next = 4, j({
                                        data: q,
                                        feedback: h
                                    }, b, !1, !0);
                                case 4:
                                    v(null), a.next = 10;
                                    break;
                                case 7:
                                    a.prev = 7, a.t0 = a.catch(0), console.log(a.t0);
                                case 10:
                                    return a.prev = 10, D(!1), a.finish(10);
                                case 13:
                                case "end":
                                    return a.stop()
                            }
                        }, a, null, [
                            [0, 7, 10, 13]
                        ])
                    })), function(a) {
                        return G.apply(this, arguments)
                    });
                    return h ? ((0, i.useEffect)(function() {
                        var a, b = null !== (a = JSON.parse(localStorage.getItem("beneficiaries"))) && void 0 !== a ? a : [],
                            c = (0, d.Z)({}, s.u_, s.NZ),
                            e = h.filter(function(a) {
                                return (null == a ? void 0 : a.status) === "completed"
                            }).map(function(a) {
                                var b, d, e, f, g, h, i, j, k, l;
                                return {
                                    type: null == a ? void 0 : a.type,
                                    value: null !== (j = null !== (i = null == a ? void 0 : null === (b = a.details) || void 0 === b ? void 0 : b.mobile_no) && void 0 !== i ? i : null == a ? void 0 : null === (d = a.details) || void 0 === d ? void 0 : d.iuc_no) && void 0 !== j ? j : null == a ? void 0 : null === (e = a.details) || void 0 === e ? void 0 : e.meter_no,
                                    name: null !== (k = null == a ? void 0 : null === (f = a.details) || void 0 === f ? void 0 : f.beneficiary_name) && void 0 !== k ? k : "",
                                    accent: null !== (l = null == c ? void 0 : null === (h = c[null == a ? void 0 : null === (g = a.details) || void 0 === g ? void 0 : g.provider_id]) || void 0 === h ? void 0 : h.activeColor) && void 0 !== l ? l : "bg-p1"
                                }
                            });
                        localStorage.setItem("beneficiaries", JSON.stringify((0, r.OR)((0, u.Z)(e).concat((0, u.Z)(b)))))
                    }, [h]), (0, f.BX)(f.HY, {
                        children: [q && m && (0, f.BX)(f.HY, {
                            children: [(0, f.tZ)(y.Z, {
                                onValid: function(a) {
                                    return H(a)
                                },
                                onClose: function() {
                                    return o(!1)
                                },
                                ontop: !0
                            }), C && (0, f.tZ)(x.Z, {
                                loading: C
                            })]
                        }), null == h ? void 0 : h.map(function(a, b) {
                            var c, d, e, g, h;
                            return a.type === s.s5.buyData && "failed" === a.status && a.message.includes("number is not"), (0, f.tZ)("div", {
                                className: "px-6 flex flex-col",
                                children: (0, f.BX)("div", {
                                    className: "flex flex-col font-poppins items-center py-1 relative",
                                    children: [(0, f.BX)("div", {
                                        class: "relative flex center h-14 w-14 mt-5",
                                        children: [(0, f.tZ)("div", {
                                            className: "animate-ping -z-10 absolute h-full w-full ".concat("failed" === a.status && "bg-p3/30", " \n                      ").concat("completed" === a.status && "bg-alertGreen/30", " rounded-full ")
                                        }), "completed" === a.status && (0, f.tZ)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            viewBox: "0 0 24 24",
                                            fill: "currentColor",
                                            className: "w-8 h-8 text-[#45B36B]",
                                            children: (0, f.tZ)("path", {
                                                fillRule: "evenodd",
                                                d: "M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z",
                                                clipRule: "evenodd"
                                            })
                                        }), "failed" === a.status && (0, f.tZ)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            viewBox: "0 0 24 24",
                                            fill: "currentColor",
                                            className: "w-8 h-8 text-p3",
                                            children: (0, f.tZ)("path", {
                                                fillRule: "evenodd",
                                                d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
                                                clipRule: "evenodd"
                                            })
                                        })]
                                    }), (0, f.BX)("h4", {
                                        className: "text-body mt-6 font-poppins dark:text-n3 text-n7 font-semibold tracking-wider",
                                        children: ["failed" === a.status && "Failed", "completed" === a.status && (null !== (h = null == a ? void 0 : null === (c = a.details) || void 0 === c ? void 0 : c.res_title) && void 0 !== h ? h : "Sent.")]
                                    }), (0, f.tZ)("section", {
                                        className: "w-full text-center mt-2",
                                        children: (0, f.tZ)("p", {
                                            className: "text-body2 px-2 font-medium text-n7 dark:text-n3 leading-normal tracking-wide",
                                            children: a.message
                                        })
                                    }), (0, f.BX)("section", {
                                        className: "space-y-2 w-full mt-8",
                                        children: [(0, f.BX)("div", {
                                            className: "bg-n5/5 hidden p-4 relative flex-col rounded-md text-center font-medium tracking-widest",
                                            children: [(0, f.tZ)("div", {
                                                className: "select-text flex center",
                                                children: (0, f.tZ)("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    strokeWidth: "2",
                                                    stroke: "currentColor",
                                                    className: "w-6 h-6",
                                                    children: (0, f.tZ)("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        d: "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                                                    })
                                                })
                                            }), (0, f.tZ)("div", {
                                                className: "text-caption2 dark:text-n0/50 font-normal tracking-wider",
                                                children: "Share Receipt"
                                            })]
                                        }), "internet_data_purchase" === a.type && !(null == a ? void 0 : null === (d = a.details) || void 0 === d ? void 0 : d.res_title) && (0, f.BX)("div", {
                                            className: "bg-n5/5 p-4 relative flex flex-col rounded-md text-center font-medium tracking-widest",
                                            children: [(0, f.tZ)("span", {
                                                className: "select-text",
                                                children: null === s.Gy || void 0 === s.Gy ? void 0 : s.Gy[null == a ? void 0 : null === (e = a.details) || void 0 === e ? void 0 : e.provider_id]
                                            }), (0, f.tZ)("div", {
                                                className: "text-caption2 dark:text-n0/50 font-normal tracking-wider",
                                                children: "Balance Code"
                                            }), (0, f.tZ)(A.Z, {
                                                textToCopy: null === s.Gy || void 0 === s.Gy ? void 0 : s.Gy[null == a ? void 0 : null === (g = a.details) || void 0 === g ? void 0 : g.provider_id],
                                                children: (0, f.tZ)("div", {
                                                    className: "absolute inset-y-0 right-0 p-5 dark:text-n0/50 flex center",
                                                    children: (0, f.tZ)("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        fill: "none",
                                                        viewBox: "0 0 24 24",
                                                        strokeWidth: "2",
                                                        stroke: "currentColor",
                                                        className: "w-5 h-5",
                                                        children: (0, f.tZ)("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            d: "M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                                                        })
                                                    })
                                                })
                                            })]
                                        })]
                                    }), (0, f.BX)("div", {
                                        className: "w-full space-y-2 pt-4",
                                        children: [(0, f.BX)("button", {
                                            className: "w-full hidden gap-2 flex-1 shadow-md font-poppins items-center justify-center h-14 dark:text-n2 text-n0 text-button2 font-medium tracking-wider",
                                            children: ["View Details", (0, f.tZ)("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                strokeWidth: "2",
                                                stroke: "currentColor",
                                                className: "w-5 h-5",
                                                children: (0, f.tZ)("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    d: "M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                                                })
                                            })]
                                        }), (0, f.tZ)("button", {
                                            onClick: function() {
                                                return F(a)
                                            },
                                            className: "w-full flex-1 font-poppins shadow-sm flex items-center justify-center h-14 rounded-md bg-p1/60 dark:text-n2 text-n0 font-semibold tracking-wider text-button2",
                                            children: "Okay"
                                        })]
                                    })]
                                })
                            })
                        })]
                    })) : null
                },
                C = function() {
                    var a = function() {};
                    return (0, f.tZ)(B, {
                        onClose: a
                    })
                },
                D = c(97438),
                E = c(8421),
                F = h()(function() {
                    return Promise.all([c.e(1525), c.e(9521)]).then(c.bind(c, 51525))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [51525]
                        }
                    },
                    suspense: !0
                }),
                G = h()(function() {
                    return c.e(2887).then(c.bind(c, 52887))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [52887]
                        }
                    },
                    suspense: !0
                }),
                H = h()(function() {
                    return c.e(8221).then(c.bind(c, 98221))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [98221]
                        }
                    },
                    suspense: !0
                }),
                I = h()(function() {
                    return c.e(4790).then(c.bind(c, 44790))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [44790]
                        }
                    },
                    suspense: !0
                }),
                J = h()(function() {
                    return Promise.all([c.e(9532), c.e(4558), c.e(2501), c.e(5115)]).then(c.bind(c, 55115))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [55115]
                        }
                    },
                    suspense: !0
                }),
                K = h()(function() {
                    return Promise.all([c.e(9532), c.e(2501), c.e(1275)]).then(c.bind(c, 71275))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [71275]
                        }
                    },
                    suspense: !0
                }),
                L = h()(function() {
                    return c.e(7190).then(c.bind(c, 17190))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [17190]
                        }
                    },
                    suspense: !0
                }),
                M = h()(function() {
                    return Promise.all([c.e(7536), c.e(5657)]).then(c.bind(c, 25657))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [25657]
                        }
                    },
                    suspense: !0
                }),
                N = h()(function() {
                    return c.e(2429).then(c.bind(c, 12429))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [12429]
                        }
                    },
                    suspense: !0
                }),
                O = h()(function() {
                    return Promise.all([c.e(3911), c.e(5361), c.e(1087)]).then(c.bind(c, 1087))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [1087]
                        }
                    },
                    suspense: !0
                }),
                P = h()(function() {
                    return Promise.all([c.e(9532), c.e(7536), c.e(2501), c.e(9794)]).then(c.bind(c, 69794))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [69794]
                        }
                    },
                    suspense: !0
                }),
                Q = h()(function() {
                    return c.e(4081).then(c.bind(c, 74081))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [74081]
                        }
                    },
                    suspense: !0
                }),
                R = h()(function() {
                    return Promise.resolve().then(c.bind(c, 40486))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [40486]
                        }
                    },
                    suspense: !0
                }),
                S = h()(function() {
                    return c.e(7957).then(c.bind(c, 97957))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [97957]
                        }
                    },
                    suspense: !0
                }),
                T = h()(function() {
                    return c.e(2956).then(c.bind(c, 42956))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [42956]
                        }
                    },
                    suspense: !0
                }),
                U = h()(function() {
                    return c.e(4369).then(c.bind(c, 34369))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [34369]
                        }
                    },
                    suspense: !0
                }),
                V = h()(function() {
                    return c.e(1336).then(c.bind(c, 81336))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [81336]
                        }
                    },
                    suspense: !0
                }),
                W = h()(function() {
                    return Promise.all([c.e(9532), c.e(7536), c.e(2746), c.e(2501), c.e(326), c.e(210)]).then(c.bind(c, 30210))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [30210]
                        }
                    },
                    suspense: !0
                }),
                X = h()(function() {
                    return Promise.all([c.e(9532), c.e(7536), c.e(2746), c.e(8130), c.e(2501), c.e(326), c.e(3162)]).then(c.bind(c, 63162))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [63162]
                        }
                    },
                    suspense: !0
                }),
                Y = h()(function() {
                    return Promise.all([c.e(9532), c.e(2501), c.e(326), c.e(5047)]).then(c.bind(c, 81988))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [81988]
                        }
                    },
                    suspense: !0
                }),
                Z = h()(function() {
                    return Promise.all([c.e(9532), c.e(7536), c.e(2746), c.e(8130), c.e(2501), c.e(3200)]).then(c.bind(c, 3200))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [3200]
                        }
                    },
                    suspense: !0
                }),
                $ = h()(function() {
                    return Promise.all([c.e(9532), c.e(7536), c.e(2746), c.e(8130), c.e(2501), c.e(4084)]).then(c.bind(c, 94084))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [94084]
                        }
                    },
                    suspense: !0
                }),
                _ = h()(function() {
                    return Promise.all([c.e(9532), c.e(7536), c.e(2501), c.e(2645)]).then(c.bind(c, 72645))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [72645]
                        }
                    },
                    suspense: !0
                }),
                aa = {
                    services: function(a) {
                        return (0, f.tZ)(F, (0, d.Z)({}, a))
                    },
                    history: function(a) {
                        return (0, f.tZ)(G, (0, d.Z)({}, a))
                    },
                    more: function(a) {
                        return (0, f.tZ)(H, (0, d.Z)({}, a))
                    },
                    admin: function(a) {
                        return (0, f.tZ)(O, (0, d.Z)({}, a))
                    },
                    security: function(a) {
                        return (0, f.tZ)(I, (0, d.Z)({}, a))
                    },
                    referrals: function(a) {
                        return (0, f.tZ)(N, (0, d.Z)({}, a))
                    },
                    "reset-pin": function(a) {
                        return (0, f.tZ)(J, (0, d.Z)({}, a))
                    },
                    transfer: function(a) {
                        return (0, f.tZ)(P, (0, d.Z)({}, a))
                    },
                    "create-pin": function(a) {
                        return (0, f.tZ)(L, (0, d.Z)({}, a))
                    },
                    kyc: function(a) {
                        return (0, f.tZ)(M, (0, d.Z)({}, a))
                    },
                    "account-pin": function(a) {
                        return (0, f.tZ)(K, (0, d.Z)({}, a))
                    }
                },
                ab = {
                    addmoney: {
                        name: "Add Money",
                        render: function(a) {
                            return (0, f.tZ)(Q, (0, d.Z)({}, a))
                        }
                    },
                    notifications: {
                        name: "Notifications",
                        render: function(a) {
                            return (0, f.tZ)(S, (0, d.Z)({}, a))
                        }
                    },
                    contest: {
                        name: "Your Referrals",
                        render: function(a) {
                            return (0, f.tZ)(T, (0, d.Z)({}, a))
                        }
                    },
                    affiliate: {
                        name: "Affiliate",
                        render: function(a) {
                            return (0, f.tZ)(T, (0, d.Z)({}, a))
                        }
                    },
                    leaderboard: {
                        name: "Contest Leaderboard",
                        render: function(a) {
                            return (0, f.tZ)(V, (0, d.Z)({}, a))
                        }
                    },
                    data: {
                        name: "Buy Data",
                        render: function(a) {
                            return (0, f.tZ)(W, (0, d.Z)({}, a))
                        }
                    },
                    airtime: {
                        name: "Buy Airtime",
                        render: function(a) {
                            return (0, f.tZ)(X, (0, d.Z)({}, a))
                        }
                    },
                    cash: {
                        name: "Convert Airtime",
                        render: function(a) {
                            return (0, f.tZ)(Y, (0, d.Z)({}, a))
                        }
                    },
                    electricity: {
                        name: "Pay Electricity",
                        render: function(a) {
                            return (0, f.tZ)(Z, (0, d.Z)({}, a))
                        }
                    },
                    tv: {
                        name: "Subscribe TV",
                        render: function(a) {
                            return (0, f.tZ)($, (0, d.Z)({}, a))
                        }
                    },
                    giftcard: {
                        name: "Sell Giftcard",
                        render: function(a) {
                            return (0, f.tZ)(_, (0, d.Z)({}, a))
                        }
                    },
                    confirm: {
                        name: "Confirm",
                        render: function(a) {
                            return (0, f.tZ)(U, (0, d.Z)({}, a))
                        }
                    },
                    details: {
                        name: "Transaction",
                        render: function(a) {
                            return (0, f.tZ)(R, (0, d.Z)({}, a))
                        }
                    },
                    feedback: {
                        render: function(a) {
                            return (0, f.tZ)(C, (0, d.Z)({}, a))
                        }
                    }
                },
                ac = {
                    confirm: {
                        name: "Confirm",
                        render: function(a) {
                            return (0, f.tZ)(U, (0, d.Z)({}, a))
                        }
                    },
                    feedback: {
                        render: function(a) {
                            return (0, f.tZ)(C, (0, d.Z)({}, a))
                        }
                    }
                },
                ad = function(a) {
                    var b, c, g, h = a.Component,
                        j = a.pageProps,
                        k = a.router,
                        l = k.query;
                    (0, i.useEffect)(function() {
                        window.Tawk_API && window.Tawk_API.hideWidget && window.Tawk_API.hideWidget()
                    });
                    var m = function() {};
                    return (0, f.BX)(f.HY, {
                        children: [aa[k.query.t] ? (0, f.tZ)(i.Suspense, {
                            fallback: (0, f.tZ)(D.Z, {
                                blank: !0
                            }),
                            children: aa[k.query.t]((0, e.Z)((0, d.Z)({}, j), {
                                router: k
                            }))
                        }) : (0, f.tZ)(h, (0, e.Z)((0, d.Z)({}, j), {
                            router: k
                        })), (0, f.tZ)(q, {}), (0, f.tZ)(E.I, {
                            open: Boolean(null == ab ? void 0 : ab[l.sc]),
                            onClose: m,
                            title: null == ab ? void 0 : null === (b = ab[l.sc]) || void 0 === b ? void 0 : b.name,
                            children: (0, f.tZ)(i.Suspense, {
                                fallback: (0, f.tZ)(D.Z, {
                                    blank: !0
                                }),
                                children: (null == ab ? void 0 : ab[l.sc]) && (null == ab ? void 0 : null === (c = ab[l.sc]) || void 0 === c ? void 0 : c.render())
                            })
                        }), (0, f.tZ)(E.I, {
                            open: Boolean(null == ac ? void 0 : ac[l.scc]),
                            onClose: m,
                            title: null == ac ? void 0 : null === (g = ac[l.scc]) || void 0 === g ? void 0 : g.name,
                            children: (0, f.tZ)(i.Suspense, {
                                fallback: (0, f.tZ)(D.Z, {
                                    blank: !0
                                }),
                                children: (null == ac ? void 0 : ac[l.scc]) && (null == ac ? void 0 : ac[l.scc].render())
                            })
                        })]
                    })
                }
        }
    }
])