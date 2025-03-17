(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_components_1caaff3e._.js", {

"[project]/src/app/components/PayCalculator.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>PayCalculator)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function PayCalculator() {
    _s();
    const [income, setIncome] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [period, setPeriod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("annually");
    const [includeSuper, setIncludeSuper] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [includeHelpDebt, setIncludeHelpDebt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isNonResident, setIsNonResident] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Ref for scrolling
    const resultRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PayCalculator.useEffect": ()=>{
            if (result) {
                resultRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        }
    }["PayCalculator.useEffect"], [
        result
    ]); // Runs whenever `result` changes
    const calculateTax = ()=>{
        let annualIncome = parseFloat(income) || 0;
        if (period === "monthly") annualIncome *= 12;
        else if (period === "fortnightly") annualIncome *= 26;
        else if (period === "weekly") annualIncome *= 52;
        const superRate = includeSuper ? 0.105 : 0;
        const superAmount = annualIncome * superRate;
        let tax = 0;
        if (!isNonResident) {
            if (annualIncome > 180000) tax = (annualIncome - 180000) * 0.45 + 51667;
            else if (annualIncome > 120000) tax = (annualIncome - 120000) * 0.37 + 29467;
            else if (annualIncome > 45000) tax = (annualIncome - 45000) * 0.325 + 5092;
            else if (annualIncome > 18200) tax = (annualIncome - 18200) * 0.19;
        } else {
            if (annualIncome > 180000) tax = (annualIncome - 180000) * 0.45 + 61200;
            else if (annualIncome > 120000) tax = (annualIncome - 120000) * 0.37 + 31200;
            else if (annualIncome > 45000) tax = (annualIncome - 45000) * 0.325 + 14625;
            else tax = annualIncome * 0.325;
        }
        const medicareLevy = isNonResident ? 0 : annualIncome * 0.02;
        const helpDebtAmount = includeHelpDebt ? annualIncome * 0.05 : 0;
        const netIncome = annualIncome - (tax + medicareLevy + helpDebtAmount);
        setResult({
            grossIncome: annualIncome,
            superannuation: superAmount,
            tax,
            medicareLevy,
            help: helpDebtAmount,
            helpDebt: helpDebtAmount,
            taxOffsets: 0,
            netIncome
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center justify-center bg-white mb-[60px] pb-[60px] mx-2 md:mx-0 ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "shadow-lg shadow-[#FF8B661F] bg-[#F8F8F8] w-full h-full md:w-[1216px] md:h-[844px] rounded-xl p-2 md:p-8 border border-gray-200 flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center justify-center md:pr-6 w-full h-full md:w-[340px] md:h-[425px]  ",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/taxpic.png",
                            alt: "Tax Image",
                            width: 340,
                            height: 424,
                            className: "hidden md:block"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/PayCalculator.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/PayCalculator.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-px h-[425px] bg-[#A19C9C] md:mx-6 shadow-md shadow-gray-400 hidden md:block"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/PayCalculator.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 pr-4 md:pr-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-[14px] md:text-[20px] font-semibold text-[#A19C9C]",
                                children: "Gross Income (Before Tax)"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/PayCalculator.tsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "number",
                                value: income,
                                onChange: (e)=>setIncome(e.target.value),
                                className: "w-full p-3 border rounded-xl shadow-inner mt-2 text-lg bg-[#F8F8F8] text-[#A19C9C]",
                                placeholder: "$0.00"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/PayCalculator.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between mt-4 bg-[#F8F8F8] shadow-lg p-1 rounded-[50px] px-4 py-2",
                                children: [
                                    "annually",
                                    "monthly",
                                    "fortnightly",
                                    "weekly"
                                ].map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setPeriod(p),
                                        className: ` px-2 py-2 md:px-4 md:py-2 text-[10px] md:text-[16px] font-semibold rounded-[50px] transition-all ${period === p ? "hover:text-orange-600 border rounded-[50px] shadow-inner text-orange-600" : "text-[#A19C9C] hover:text-orange-500"}`,
                                        children: p.toUpperCase()
                                    }, p, false, {
                                        fileName: "[project]/src/app/components/PayCalculator.tsx",
                                        lineNumber: 96,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/PayCalculator.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 space-y-2",
                                children: [
                                    {
                                        label: "Includes Superannuation",
                                        state: includeSuper,
                                        setState: setIncludeSuper
                                    },
                                    {
                                        label: "Includes HELP Debt",
                                        state: includeHelpDebt,
                                        setState: setIncludeHelpDebt
                                    },
                                    {
                                        label: "Non-Resident",
                                        state: isNonResident,
                                        setState: setIsNonResident
                                    }
                                ].map(({ label, state, setState })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#939393] font-medium",
                                                children: label
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/PayCalculator.tsx",
                                                lineNumber: 115,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex md:space-x-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-[#F8F8F8] flex justify-between md:px-6 items-center w-full h-full md:w-[198px] md:h-[64px] border shadow-lg rounded-[50px]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setState(true),
                                                            className: `px-5 py-2 rounded-[50px] transition-all hover:text-orange-500 hover:text-lg hover:shadow-inner ${state ? "text-orange-600 shadow-inner " : "text-[#A19C9C]"}`,
                                                            children: "YES"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/PayCalculator.tsx",
                                                            lineNumber: 118,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setState(false),
                                                            className: `px-5 py-2 rounded-[50px] transition-all hover:text-orange-500 hover:text-lg hover:shadow-inner ${!state ? "text-orange-600 shadow-inner" : "text-[#A19C9C]"}`,
                                                            children: "NO"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/PayCalculator.tsx",
                                                            lineNumber: 126,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/PayCalculator.tsx",
                                                    lineNumber: 117,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/PayCalculator.tsx",
                                                lineNumber: 116,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, label, true, {
                                        fileName: "[project]/src/app/components/PayCalculator.tsx",
                                        lineNumber: 114,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/PayCalculator.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-end",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: calculateTax,
                                    className: "mt-6 bg-orange-600 text-white py-3 rounded-[50px] w-full h-full md:w-[198px] md:h-[64px] text-lg font-semibold shadow-md hover:bg-orange-500",
                                    children: "CALCULATE"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/PayCalculator.tsx",
                                    lineNumber: 141,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/PayCalculator.tsx",
                                lineNumber: 140,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/PayCalculator.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/PayCalculator.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            result && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: resultRef,
                className: "mt-6  md:p-4 bg-white rounded-xl w-full md:w-[1216px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "w-full border-collapse border mt-2 shadow-lg rounded-xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                className: "bg-white text-[#7C7C7C] text-[9px] md:text-[20px] shadow-lg rounded-xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "p-2 md:p-6",
                                        children: "YEAR"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/PayCalculator.tsx",
                                        lineNumber: 154,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "p-2 md:p-6",
                                        children: "ANNUALLY"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/PayCalculator.tsx",
                                        lineNumber: 155,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "p-2 md:p-6",
                                        children: "MONTHLY"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/PayCalculator.tsx",
                                        lineNumber: 156,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "p-2 md:p-6",
                                        children: "FORTNIGHTLY"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/PayCalculator.tsx",
                                        lineNumber: 157,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "p-2 md:p-6",
                                        children: "WEEKLY"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/PayCalculator.tsx",
                                        lineNumber: 158,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/PayCalculator.tsx",
                                lineNumber: 153,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/PayCalculator.tsx",
                            lineNumber: 152,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: Object.entries(result).map(([key, value])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: key === "netIncome" ? "bg-[#FF8B662E]" : "",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "border p-1 md:p-2 capitalize text-[#7C7C7C] text-[10px] md:text-[20px]",
                                            children: key.replace(/([A-Z])/g, " $1").trim()
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/PayCalculator.tsx",
                                            lineNumber: 164,
                                            columnNumber: 19
                                        }, this),
                                        [
                                            1,
                                            12,
                                            26,
                                            52
                                        ].map((divider, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "border p-2 md:p-6 text-[#7C7C7C] text-[10px] md:text-[20px]",
                                                children: [
                                                    "$",
                                                    (value / divider).toFixed(2)
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/src/app/components/PayCalculator.tsx",
                                                lineNumber: 166,
                                                columnNumber: 21
                                            }, this))
                                    ]
                                }, key, true, {
                                    fileName: "[project]/src/app/components/PayCalculator.tsx",
                                    lineNumber: 163,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/PayCalculator.tsx",
                            lineNumber: 161,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/PayCalculator.tsx",
                    lineNumber: 151,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/PayCalculator.tsx",
                lineNumber: 150,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/PayCalculator.tsx",
        lineNumber: 75,
        columnNumber: 5
    }, this);
}
_s(PayCalculator, "/rKpsEElpRjaKUCxveCcQyHMyoE=");
_c = PayCalculator;
var _c;
__turbopack_context__.k.register(_c, "PayCalculator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/WelcomeCalc.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
;
const WelcomeSection = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "flex flex-col md:flex-row items-center justify-between px-6 md:pl-10 2xl:mx-20 md:mr-20 py-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        x: -100
                    },
                    whileInView: {
                        opacity: 1,
                        x: 0
                    },
                    transition: {
                        duration: 0.8
                    },
                    className: "relative w-full p-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/calculatorgirl.png",
                        alt: "Using a calculator",
                        width: 500,
                        height: 333,
                        className: "rounded-[20px] shadow-md md:w-[500px] lg:w-[700px] hover:scale-105 transition-transform duration-300"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/WelcomeCalc.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/components/WelcomeCalc.tsx",
                    lineNumber: 11,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        x: 100
                    },
                    whileInView: {
                        opacity: 1,
                        x: 0
                    },
                    transition: {
                        duration: 0.8,
                        delay: 0.2
                    },
                    className: "w-full md:w-1/2 2xl:w-full mt-6 md:mt-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-[25px] md:text-[50px] 2xl:text-[60px] text-[#1E1E1E] font-bold mb-2 w-[900px]",
                            children: "Welcome To Pay Calculator"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/WelcomeCalc.tsx",
                            lineNumber: 33,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[#1E1E1E] text-[12px] md:text-[16px] 2xl:text-[20px] mb-2",
                            children: "Easily calculate your net income after factoring in tax withheld, superannuation entitlement, HELP debt (if applicable), Medicare levy, and any tax offset entitlement using the tool below."
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/WelcomeCalc.tsx",
                            lineNumber: 36,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "space-y-2 text-gray-700 text-[12px] md:text-[16px] 2xl:text-[20px]",
                            children: [
                                "Enter your gross income (before tax) in the '$' box.",
                                "Select the relevant income period (weekly, monthly, yearly).",
                                "Click on the 'Calculate' button."
                            ].map((text, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].li, {
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
                                        delay: 0.3 * index
                                    },
                                    className: "flex items-center hover:text-[#FF5733] transition-colors duration-300",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-6 h-6 flex items-center justify-center bg-[#FFAB91] text-white font-bold rounded-full mr-3",
                                            children: "✓"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/WelcomeCalc.tsx",
                                            lineNumber: 49,
                                            columnNumber: 15
                                        }, this),
                                        text
                                    ]
                                }, index, true, {
                                    fileName: "[project]/src/app/components/WelcomeCalc.tsx",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/WelcomeCalc.tsx",
                            lineNumber: 40,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 text-[#1E1E1E] text-[12px] md:text-[16px] 2xl:text-[20px]",
                            children: "The calculator will provide you with an estimate of your net income, which represents the amount you will receive after accounting for all the deductions mentioned above."
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/WelcomeCalc.tsx",
                            lineNumber: 57,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/WelcomeCalc.tsx",
                    lineNumber: 27,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/WelcomeCalc.tsx",
            lineNumber: 9,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/WelcomeCalc.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
};
_c = WelcomeSection;
const __TURBOPACK__default__export__ = WelcomeSection;
var _c;
__turbopack_context__.k.register(_c, "WelcomeSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/GetStarted.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>TaxReturnSection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
function TaxReturnSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative bg-cover bg-center text-white",
        style: {
            backgroundImage: "url('/calcbg.png')"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "bg-black bg-opacity-50 p-8 rounded-xl text-center flex justify-center items-center flex-col w-full mx-auto py-16 px-6 md:px-12",
            initial: {
                opacity: 0,
                y: 50
            },
            whileInView: {
                opacity: 1,
                y: 0
            },
            transition: {
                duration: 0.8,
                ease: "easeOut"
            },
            viewport: {
                once: true
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                    className: "text-[14px] md:text-[35px] font-semibold",
                    whileHover: {
                        scale: 1.05,
                        color: "#FFAB91"
                    },
                    children: [
                        "Lodge your personal tax return conveniently by clicking",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-orange-500 font-bold",
                            children: ' "Get Started"'
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/GetStarted.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/GetStarted.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                    className: "mt-6 bg-orange-500 hover:bg-orange-600 text-[14px] md:text-[18px] text-white font-bold py-2 px-6 md:py-4 md:px-10 rounded-full shadow-md transition",
                    whileHover: {
                        scale: 1.1,
                        boxShadow: "0 0 15px #FFAB91"
                    },
                    whileTap: {
                        scale: 0.9
                    },
                    children: "GET STARTED"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/GetStarted.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                    className: "mt-4 text-[12px] md:text-[25px] md:w-[1110px] text-center",
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        delay: 0.3,
                        duration: 0.8
                    },
                    viewport: {
                        once: true
                    },
                    children: "Our platform is easy-to-use and tax returns will be reviewed and lodged by our qualified tax professionals. We guarantee maximum tax refund."
                }, void 0, false, {
                    fileName: "[project]/src/app/components/GetStarted.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/GetStarted.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/GetStarted.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = TaxReturnSection;
var _c;
__turbopack_context__.k.register(_c, "TaxReturnSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_components_1caaff3e._.js.map