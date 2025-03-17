module.exports = {

"[project]/src/app/components/Pricing.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
const plans = [
    {
        title: "Online Tax Return",
        price: "$99 / month",
        features: [
            "Salary and Wages income",
            "All work deductions included",
            "Eligible tax offsets applied",
            "Private Health Insurance",
            "Electronic signature",
            "Fast, easy and simple",
            "Prepared by Tax Accountant",
            "Additional charges may apply in supplementary section income"
        ],
        bgColor: "bg-white",
        textColor: "text-black",
        tickColor: "text-white",
        borderColor: "border-[#FF8B66]",
        borderBgColor: "bg-[#FF8B66]"
    },
    {
        title: "Complex Online Tax Return",
        price: "$245 / month",
        features: [
            "Salary and Wages income",
            "All work deductions included",
            "One Rental Property",
            "One Capital Gain",
            "10 Dividend income &",
            "$10 Additional dividend income",
            "Eligible tax offsets applied",
            "Private Health Insurance",
            "Electronic signature",
            "Fast, easy and simple",
            "Prepared by Tax Accountant"
        ],
        bgColor: "bg-orange-200",
        textColor: "text-black",
        tickColor: "text-[#FF8B66]",
        borderColor: "border-white",
        borderBgColor: "bg-white"
    },
    {
        title: "Sole Trader Online Tax Return",
        price: "$245 / month",
        features: [
            "Single Business income",
            "Business expenses",
            "EOFY GST Reconciliation",
            "All eligible deductions claimed",
            "Eligible tax offsets applied",
            "Private Health Insurance",
            "Electronic signature",
            "Prepared by Tax Accountant",
            "Additional charges apply where multiple business income"
        ],
        bgColor: "bg-orange-100",
        textColor: "text-black",
        tickColor: "text-[#FF8B66]",
        borderColor: "border-white",
        borderBgColor: "bg-white"
    },
    {
        title: "Rideshare Driver Tax Return",
        price: "$180 / month",
        features: [
            "Rideshare income",
            "Rideshare expenses",
            "EOFY GST Reconciliation",
            "All eligible deductions claimed",
            "Eligible tax offsets applied",
            "Private Health Insurance",
            "Electronic signature",
            "Fast, easy and simple",
            "Prepared by Tax Accountant"
        ],
        bgColor: "bg-white",
        textColor: "text-black",
        tickColor: "text-white",
        borderColor: "border-[#FF8B66]",
        borderBgColor: "bg-[#FF8B66]"
    }
];
const priceplans = [
    {
        heading: "Partnership Tax Return",
        price: "$495 / month",
        features: [
            "Partnership income",
            "Partnership expenses",
            "Partnership income distributed",
            "Eligible tax offsets applied",
            "Electronic signature",
            "Fast, simple and easy",
            "Prepared by Tax Accountant"
        ],
        bgColor: "bg-white",
        textColor: "text-black",
        tickColor: "text-white",
        borderColor: "border-[#FF8B66]",
        borderBgColor: "bg-[#FF8B66]"
    },
    {
        heading: "Company Tax Return",
        price: "$1195 / month",
        features: [
            "Company Income Statement",
            "Company Balance Sheet",
            "EOFY GST Reconciliation",
            "PAYGW Reconciliation",
            "Electronic signature",
            "Fast, easy and simple",
            "Prepared by Tax Accountant"
        ],
        bgColor: "bg-orange-200",
        textColor: "text-black",
        tickColor: "text-[#FF8B66]",
        borderColor: "border-white",
        borderBgColor: "bg-white"
    },
    {
        heading: "Trust Tax Return",
        price: "$1195 / month",
        features: [
            "Trust Income Statement",
            "Trust Balance Sheet",
            "EOFY GST Reconciliation",
            "PAYGW Reconciliation",
            "Electronic signature",
            "Fast, easy and simple",
            "Prepared by Tax Accountant"
        ],
        bgColor: "bg-orange-100",
        textColor: "text-black",
        tickColor: "text-[#FF8B66]",
        borderColor: "border-white",
        borderBgColor: "bg-white"
    },
    {
        heading: "Business Activity Statements",
        price: "$215 / month",
        features: [
            "GST Calculated",
            "PAYGW for up to 2 Employees",
            "PAYG Installment",
            "Electronic signature",
            "Prepared by Tax Accountant"
        ],
        bgColor: "bg-white",
        textColor: "text-black",
        tickColor: "text-white",
        borderColor: "border-[#FF8B66]",
        borderBgColor: "bg-[#FF8B66]"
    }
];
const Pricing = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-10 bg-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-4xl font-bold text-center mb-10 mt-10",
                    children: "Individual & Sole Trader Tax Returns"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Pricing.tsx",
                    lineNumber: 167,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap justify-center gap-6",
                    children: plans.map((plan, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: `w-[416px] h-[580px] p-6 rounded-lg shadow-lg ${plan.bgColor} ${plan.textColor} flex flex-col`,
                            initial: {
                                opacity: 0,
                                y: 50
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            whileHover: {
                                scale: 1.05,
                                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)"
                            },
                            transition: {
                                duration: 0.6,
                                delay: index * 0.2
                            },
                            viewport: {
                                once: true
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-bold text-center",
                                    children: plan.title
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Pricing.tsx",
                                    lineNumber: 181,
                                    columnNumber: 5
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg font-semibold mt-2 text-center",
                                    children: plan.price
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Pricing.tsx",
                                    lineNumber: 182,
                                    columnNumber: 5
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "mt-4 space-y-2 text-sm flex-grow",
                                    children: plan.features.map((feature, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `rounded-full w-6 h-6 flex items-center justify-center mr-2 border-2 ${plan.borderColor} ${plan.borderBgColor}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: `h-4 w-4 ${plan.tickColor}`,
                                                        fill: "none",
                                                        viewBox: "0 0 24 24",
                                                        stroke: "currentColor",
                                                        strokeWidth: 3,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            d: "M5 13l4 4L19 7"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/Pricing.tsx",
                                                            lineNumber: 196,
                                                            columnNumber: 15
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/Pricing.tsx",
                                                        lineNumber: 189,
                                                        columnNumber: 13
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Pricing.tsx",
                                                    lineNumber: 186,
                                                    columnNumber: 11
                                                }, this),
                                                feature
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/src/app/components/Pricing.tsx",
                                            lineNumber: 185,
                                            columnNumber: 9
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Pricing.tsx",
                                    lineNumber: 183,
                                    columnNumber: 5
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "mt-1 w-full mb-4 bg-black text-white py-2 rounded-lg hover:bg-gray-800 hover:shadow-lg hover:-translate-y-1 transition-all duration-300",
                                    children: "GET STARTED"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Pricing.tsx",
                                    lineNumber: 203,
                                    columnNumber: 5
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/src/app/components/Pricing.tsx",
                            lineNumber: 172,
                            columnNumber: 3
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Pricing.tsx",
                    lineNumber: 170,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "flex justify-center items-center md:w-[850px] md:ml-32 mt-10",
                    children: "* Excludes Tax Returns that needs inclusion of supplementary section that can include income or loss from investment property, capital gains, foreign income and business."
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Pricing.tsx",
                    lineNumber: 211,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-4xl font-bold text-center mt-28 mb-10",
                    children: "Partnership & Business Entity Tax Returns"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Pricing.tsx",
                    lineNumber: 214,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap justify-center gap-6 mt-6",
                    children: priceplans.map((plan, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: `w-[416px] h-[580px] p-6 rounded-lg shadow-lg ${plan.bgColor} ${plan.textColor} flex flex-col transition-transform duration-300 hover:scale-105`,
                            initial: {
                                opacity: 0,
                                y: 50
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.6,
                                delay: index * 0.2
                            },
                            viewport: {
                                once: true
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-bold text-center",
                                    children: plan.heading
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Pricing.tsx",
                                    lineNumber: 227,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg font-semibold mt-2 text-center",
                                    children: plan.price
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Pricing.tsx",
                                    lineNumber: 228,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "mt-4 space-y-2 text-sm flex-grow",
                                    children: plan.features.map((feature, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `rounded-full w-6 h-6 flex items-center justify-center mr-2 border-2 ${plan.borderColor} ${plan.borderBgColor}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: `h-4 w-4 ${plan.tickColor}`,
                                                        fill: "none",
                                                        viewBox: "0 0 24 24",
                                                        stroke: "currentColor",
                                                        strokeWidth: 3,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            d: "M5 13l4 4L19 7"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/Pricing.tsx",
                                                            lineNumber: 234,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/Pricing.tsx",
                                                        lineNumber: 233,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Pricing.tsx",
                                                    lineNumber: 232,
                                                    columnNumber: 21
                                                }, this),
                                                feature
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/src/app/components/Pricing.tsx",
                                            lineNumber: 231,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Pricing.tsx",
                                    lineNumber: 229,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "mt-1 w-full mb-4 bg-black text-white py-2 rounded-lg hover:bg-gray-800 hover:shadow-lg hover:-translate-y-1 transition-all duration-300",
                                    children: "GET STARTED"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Pricing.tsx",
                                    lineNumber: 241,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/src/app/components/Pricing.tsx",
                            lineNumber: 219,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Pricing.tsx",
                    lineNumber: 217,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/Pricing.tsx",
            lineNumber: 165,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/Pricing.tsx",
        lineNumber: 164,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Pricing;
}}),
"[project]/src/app/components/Supplementaryplan.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const supplementaryPlans = [
    {
        title: "Rental Property",
        price: "$99 / Per Property",
        buttonText: "LODGE NOW"
    },
    {
        title: "Business Income/Loss",
        price: "$99 / Per Business",
        buttonText: "LODGE NOW"
    },
    {
        title: "Capital Gains Tax",
        price: "$199 / Per Business",
        subPrice: "$20 / Company Share",
        buttonText: "LODGE NOW"
    },
    {
        title: "Foreign Income",
        price: "$99",
        buttonText: "LODGE NOW"
    },
    {
        title: "Dividend Income",
        price: "$20 / Company Dividend",
        buttonText: "LODGE NOW"
    },
    {
        title: "Partnership/ Trusts Income",
        price: "$99",
        buttonText: "LODGE NOW"
    },
    {
        title: "Other Income",
        price: "$99 / Income Stream",
        buttonText: "LODGE NOW"
    },
    {
        title: "Tax & Business Advise",
        price: "$99 / 30 mins",
        buttonText: "LODGE NOW"
    }
];
const bgColors = [
    "bg-[#888888]",
    "bg-[#979797]",
    "bg-[#B3B3B3]",
    "bg-[#CECECE]",
    "bg-[#CECECE]",
    "bg-[#B3B3B3]",
    "bg-[#979797]",
    "bg-[#888888]"
];
const extractBoldPrice = (price)=>{
    const match = price.match(/(\$\d+)/); // Extracts "$99", "$199", etc.
    if (!match) return price;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-bold text-[48px]",
                children: match[0]
            }, void 0, false, {
                fileName: "[project]/src/app/components/Supplementaryplan.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            " ",
            price.replace(match[0], "").trim()
        ]
    }, void 0, true);
};
const PricingSupplementary = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-10 bg-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-[32px] md:text-[44px] font-bold text-center mb-10 mt-10",
                    children: "Individual Supplementary"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Supplementaryplan.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center items-center bg-[#FF8B66] px-6 py-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: "/logo.png",
                                alt: "Logo",
                                width: 100,
                                height: 113
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Supplementaryplan.tsx",
                                lineNumber: 48,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Supplementaryplan.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-white text-[44px] pl-6",
                            children: "Tax Lodge Online"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Supplementaryplan.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/Supplementaryplan.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10",
                    children: supplementaryPlans.map((plan, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: `p-6 shadow-lg flex flex-col items-center text-center rounded-xl ${bgColors[index % bgColors.length]}`,
                            initial: {
                                opacity: 0,
                                y: 50
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.6,
                                delay: index * 0.2
                            },
                            whileHover: {
                                scale: 1.05,
                                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-[20px] font-bold mb-2 text-black pt-3 ",
                                    children: plan.title
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Supplementaryplan.tsx",
                                    lineNumber: 64,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-black mt-3",
                                    children: extractBoldPrice(plan.price)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Supplementaryplan.tsx",
                                    lineNumber: 65,
                                    columnNumber: 15
                                }, this),
                                plan.subPrice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm pt-3 text-black",
                                    children: extractBoldPrice(plan.subPrice)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Supplementaryplan.tsx",
                                    lineNumber: 66,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                    className: "mt-10 bg-[#FF8B66] text-white py-2 px-8 rounded-[50px] hover:bg-orange-500 transition-transform duration-300",
                                    whileHover: {
                                        scale: 1.1
                                    },
                                    children: plan.buttonText
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Supplementaryplan.tsx",
                                    lineNumber: 67,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/src/app/components/Supplementaryplan.tsx",
                            lineNumber: 56,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Supplementaryplan.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/Supplementaryplan.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/Supplementaryplan.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = PricingSupplementary;
}}),
"[project]/src/app/components/Registrationfee.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
const services = [
    {
        title: "TFN Registration",
        price: "$99",
        buttonText: "APPLY NOW"
    },
    {
        title: "ABN Registration",
        price: "$59",
        buttonText: "APPLY NOW"
    },
    {
        title: "Business Name",
        price: "$99",
        buttonText: "SUBMIT REQUEST"
    },
    {
        title: "Pty Ltd Company",
        price: "$995",
        buttonText: "SUBMIT REQUEST"
    }
];
const RegistrationFees = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-10 bg-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto px-4 md:px-2 flex justify-center items-center flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-[32px] md:text-[44px] font-bold mb-10 text-center",
                    children: "Other Registration Services Fees"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Registrationfee.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8",
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.6,
                        ease: "easeOut"
                    },
                    viewport: {
                        once: true
                    },
                    children: services.map((service, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "bg-white p-4 md:p-6 rounded-[20px] shadow-2xl border w-[160px] h-[197px] md:w-[260px] md:h-[315px] border-gray-200 flex flex-col justify-center items-center gap-2 md:gap-4 cursor-pointer hover:scale-105 hover:shadow-orange-300 transition-transform duration-300",
                            whileHover: {
                                scale: 1.05,
                                boxShadow: "0 0 20px rgba(255, 139, 102, 0.8)"
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            transition: {
                                duration: 0.4,
                                delay: index * 0.2
                            },
                            viewport: {
                                once: true
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-[18px] md:text-[24px] font-medium text-[#1E1E1E] md:mb-2 text-center",
                                    children: service.title
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Registrationfee.tsx",
                                    lineNumber: 36,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[32px] md:text-[48px] font-bold text-black md:mt-5",
                                    children: service.price
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Registrationfee.tsx",
                                    lineNumber: 39,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                    className: "mt-1 md:mt-4 bg-[#FF8B66] text-white text-[16px] md:text-[18px] font-semibold px-2 py-1 md:py-2 md:px-6 rounded-[20px] hover:bg-orange-500 transition duration-300",
                                    whileHover: {
                                        scale: 1.1
                                    },
                                    whileTap: {
                                        scale: 0.9
                                    },
                                    children: service.buttonText
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Registrationfee.tsx",
                                    lineNumber: 42,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/src/app/components/Registrationfee.tsx",
                            lineNumber: 27,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Registrationfee.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/Registrationfee.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/Registrationfee.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = RegistrationFees;
}}),
"[project]/src/app/components/TaxSolution.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
const HeroSection = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "flex flex-col md:flex-row items-center md:justify-between bg-[#FF8B66] text-white md:pl-12 mt-28 mx-auto overflow-x-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "md:w-1/2 flex justify-center items-start ml-5 md:ml-20 flex-col",
                initial: {
                    opacity: 0,
                    x: -50
                },
                whileInView: {
                    opacity: 1,
                    x: 0
                },
                transition: {
                    duration: 0.6,
                    ease: "easeOut"
                },
                viewport: {
                    once: true
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-[30px] md:text-[44px] font-semibold md:w-[578px] mb-6 mt-4 md:mt-0 md:mb-10",
                        children: "Smart Tax Solutions for You & Your Business"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/TaxSolution.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-4 mt-4 mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                className: "bg-white text-[#FF8B66] w-[235px] px-2 md:px-6 py-3 rounded-md font-semibold shadow-md hover:bg-gray-200",
                                whileHover: {
                                    scale: 1.1
                                },
                                whileTap: {
                                    scale: 0.9
                                },
                                children: "SCHEDULE A CONSULTATION"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/TaxSolution.tsx",
                                lineNumber: 21,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                className: "border-2 border-white w-[235px] md:px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-[#FF8B66]",
                                whileHover: {
                                    scale: 1.1
                                },
                                whileTap: {
                                    scale: 0.9
                                },
                                children: "START YOUR JOURNEY"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/TaxSolution.tsx",
                                lineNumber: 28,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/TaxSolution.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/TaxSolution.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "w-full md:w-1/2 flex md:justify-end mt-6 lg:mt-0",
                initial: {
                    opacity: 0,
                    x: 50
                },
                whileInView: {
                    opacity: 1,
                    x: 0
                },
                transition: {
                    duration: 0.6,
                    ease: "easeOut",
                    delay: 0.2
                },
                viewport: {
                    once: true
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    src: "/orange.png",
                    alt: "Tax Solutions",
                    width: 500,
                    height: 300,
                    className: "shadow-lg w-full "
                }, void 0, false, {
                    fileName: "[project]/src/app/components/TaxSolution.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/TaxSolution.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/TaxSolution.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = HeroSection;
}}),

};

//# sourceMappingURL=src_app_components_e5aed123._.js.map