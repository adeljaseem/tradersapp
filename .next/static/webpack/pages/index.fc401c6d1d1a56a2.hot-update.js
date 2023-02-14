"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/components/Contact.jsx":
/*!**************************************!*\
  !*** ./pages/components/Contact.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/hi */ \"./node_modules/react-icons/hi/index.esm.js\");\n/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emailjs/browser */ \"./node_modules/@emailjs/browser/es/index.js\");\n/* harmony import */ var _assets_stars_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/stars.png */ \"./pages/assets/stars.png\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Contact = ()=>{\n    _s();\n    const form = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    const sendEmail = (e)=>{\n        e.preventDefault();\n        _emailjs_browser__WEBPACK_IMPORTED_MODULE_3__[\"default\"].sendForm(\"service_d4ngv0h\", \"template_0cvm7xm\", form.current, \"zuGwnHelKQqZ85lu0\").then((result)=>{\n            console.log(result.text);\n        }, (error)=>{\n            console.log(error.text);\n        });\n        e.target.reset();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"contact\",\n        className: \"w-full bg-slate-800\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"max-w-[1240px] m-auto px- py-10 w-full text-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \" text-white font-bold\",\n                        children: \"Do you have a question?\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\MYPROJECTS\\\\xyz\\\\portfolio\\\\pages\\\\components\\\\Contact.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"py-1 text-white\",\n                        children: \"Feel free to contact\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\MYPROJECTS\\\\xyz\\\\portfolio\\\\pages\\\\components\\\\Contact.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-8 grid lg:grid-cols-5 gap-8\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"col-span-3 lg:col-span-2 w-full h-full\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"lg:h-full\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                                className: \"text-xl pt-5 text-white \",\n                                                children: \"Connect With Me\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\MYPROJECTS\\\\xyz\\\\portfolio\\\\pages\\\\components\\\\Contact.jsx\",\n                                                lineNumber: 56,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"flex ml-20 gap-5 items-center mt-5\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"rounded-full p-5 cursor-pointer hover:scale-110 ease-in duration-300\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                            className: \"w-[153px] flex gap-3\",\n                                                            children: [\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_6__.AiFillPhone, {\n                                                                    className: \"text-[#ffb31b] mt-1\"\n                                                                }, void 0, false, {\n                                                                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\MYPROJECTS\\\\xyz\\\\portfolio\\\\pages\\\\components\\\\Contact.jsx\",\n                                                                    lineNumber: 60,\n                                                                    columnNumber: 23\n                                                                }, undefined),\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                                    className: \" text-white\",\n                                                                    children: \"+91 383 675 345\"\n                                                                }, void 0, false, {\n                                                                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\MYPROJECTS\\\\xyz\\\\portfolio\\\\pages\\\\components\\\\Contact.jsx\",\n                                                                    lineNumber: 61,\n                                                                    columnNumber: 23\n                                                                }, undefined)\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\MYPROJECTS\\\\xyz\\\\portfolio\\\\pages\\\\components\\\\Contact.jsx\",\n                                                            lineNumber: 59,\n                                                            columnNumber: 21\n                                                        }, undefined)\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\MYPROJECTS\\\\xyz\\\\portfolio\\\\pages\\\\components\\\\Contact.jsx\",\n                                                        lineNumber: 58,\n                                                        columnNumber: 19\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"rounded-ful p-5 cursor-pointer hover:scale-110 ease-in duration-300\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                            className: \"flex gap-3\",\n                                                            children: [\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_6__.AiOutlineMail, {\n                                                                    className: \"text-[#ffb31b] mt-1\"\n                                                                }, void 0, false, {\n                                                                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\MYPROJECTS\\\\xyz\\\\portfolio\\\\pages\\\\components\\\\Contact.jsx\",\n                                                                    lineNumber: 66,\n                                                                    columnNumber: 23\n                                                                }, undefined),\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                                    className: \" text-white\",\n                                                                    children: \"xyz@gmail.com\"\n                                                                }, void 0, false, {\n                                                                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\MYPROJECTS\\\\xyz\\\\portfolio\\\\pages\\\\components\\\\Contact.jsx\",\n                                                                    lineNumber: 67,\n                                                                    columnNumber: 23\n                                                                }, undefined)\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\MYPROJECTS\\\\xyz\\\\portfolio\\\\pages\\\\components\\\\Contact.jsx\",\n                                                            lineNumber: 65,\n                                                            columnNumber: 21\n                                                        }, undefined)\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\MYPROJECTS\\\\xyz\\\\portfolio\\\\pages\\\\components\\\\Contact.jsx\",\n                                                        lineNumber: 64,\n                                                        columnNumber: 19\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\MYPROJECTS\\\\xyz\\\\portfolio\\\\pages\\\\components\\\\Contact.jsx\",\n                                                lineNumber: 57,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\MYPROJECTS\\\\xyz\\\\portfolio\\\\pages\\\\components\\\\Contact.jsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\MYPROJECTS\\\\xyz\\\\portfolio\\\\pages\\\\components\\\\Contact.jsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\MYPROJECTS\\\\xyz\\\\portfolio\\\\pages\\\\components\\\\Contact.jsx\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"col-span-3 w-full h-auto rounded-xl lg:p-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-col items-center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                            className: \"text-white\",\n                                            children: \"4.7\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\MYPROJECTS\\\\xyz\\\\portfolio\\\\pages\\\\components\\\\Contact.jsx\",\n                                            lineNumber: 77,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-white\",\n                                            children: \"Ratings in Google business\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\MYPROJECTS\\\\xyz\\\\portfolio\\\\pages\\\\components\\\\Contact.jsx\",\n                                            lineNumber: 78,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                            src: _assets_stars_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                            width: \"200\",\n                                            height: \"64\",\n                                            alt: \"/\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\MYPROJECTS\\\\xyz\\\\portfolio\\\\pages\\\\components\\\\Contact.jsx\",\n                                            lineNumber: 79,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\MYPROJECTS\\\\xyz\\\\portfolio\\\\pages\\\\components\\\\Contact.jsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\MYPROJECTS\\\\xyz\\\\portfolio\\\\pages\\\\components\\\\Contact.jsx\",\n                                lineNumber: 75,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\MYPROJECTS\\\\xyz\\\\portfolio\\\\pages\\\\components\\\\Contact.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\MYPROJECTS\\\\xyz\\\\portfolio\\\\pages\\\\components\\\\Contact.jsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"px-16\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\MYPROJECTS\\\\xyz\\\\portfolio\\\\pages\\\\components\\\\Contact.jsx\",\n                            lineNumber: 86,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-center justify-between\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"py-8 font-thin text-white\",\n                                    children: \"\\xa9 Copyright 2022 | | Designed by Aslah Ahmed\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\MYPROJECTS\\\\xyz\\\\portfolio\\\\pages\\\\components\\\\Contact.jsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_hi__WEBPACK_IMPORTED_MODULE_7__.HiOutlineChevronDoubleUp, {\n                                            className: \"text-white\",\n                                            size: 30\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\MYPROJECTS\\\\xyz\\\\portfolio\\\\pages\\\\components\\\\Contact.jsx\",\n                                            lineNumber: 94,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\MYPROJECTS\\\\xyz\\\\portfolio\\\\pages\\\\components\\\\Contact.jsx\",\n                                        lineNumber: 93,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\MYPROJECTS\\\\xyz\\\\portfolio\\\\pages\\\\components\\\\Contact.jsx\",\n                                    lineNumber: 92,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\MYPROJECTS\\\\xyz\\\\portfolio\\\\pages\\\\components\\\\Contact.jsx\",\n                            lineNumber: 87,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\MYPROJECTS\\\\xyz\\\\portfolio\\\\pages\\\\components\\\\Contact.jsx\",\n                    lineNumber: 85,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\MYPROJECTS\\\\xyz\\\\portfolio\\\\pages\\\\components\\\\Contact.jsx\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\MYPROJECTS\\\\xyz\\\\portfolio\\\\pages\\\\components\\\\Contact.jsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Contact, \"dQhLC9DEDZP9Q6oVJIWRdCVKDdw=\");\n_c = Contact;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Contact);\nvar _c;\n$RefreshReg$(_c, \"Contact\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL0NvbnRhY3QuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBNkI7QUFDUztBQUNzQjtBQUNGO0FBQ25CO0FBQ0M7QUFDVDtBQUUvQixNQUFNUyxVQUFVLElBQU07O0lBQ3BCLE1BQU1DLE9BQU9SLDZDQUFNQTtJQUNuQixNQUFNUyxZQUFZLENBQUNDLElBQU07UUFDdkJBLEVBQUVDLGNBQWM7UUFFaEJQLGlFQUNXLENBQ1AsbUJBQ0Esb0JBQ0FJLEtBQUtLLE9BQU8sRUFDWixxQkFFREMsSUFBSSxDQUNILENBQUNDLFNBQVc7WUFDVkMsUUFBUUMsR0FBRyxDQUFDRixPQUFPRyxJQUFJO1FBQ3pCLEdBQ0EsQ0FBQ0MsUUFBVTtZQUNUSCxRQUFRQyxHQUFHLENBQUNFLE1BQU1ELElBQUk7UUFDeEI7UUFFSlIsRUFBRVUsTUFBTSxDQUFDQyxLQUFLO0lBQ2hCO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLElBQUc7UUFBVUMsV0FBVTs7MEJBQzFCLDhEQUFDRjtnQkFBSUUsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFHRCxXQUFVO2tDQUF3Qjs7Ozs7O2tDQUN0Qyw4REFBQ0M7d0JBQUdELFdBQVU7a0NBQWtCOzs7Ozs7a0NBQ2hDLDhEQUFDRjt3QkFBSUUsV0FBVTs7MENBRWIsOERBQUNGO2dDQUFJRSxXQUFVOzBDQUNiLDRFQUFDRjtvQ0FBSUUsV0FBVTs4Q0FlYiw0RUFBQ0Y7OzBEQUNDLDhEQUFDSTtnREFBR0YsV0FBVTswREFBMkI7Ozs7OzswREFDekMsOERBQUNGO2dEQUFJRSxXQUFVOztrRUFDYiw4REFBQ0Y7d0RBQUlFLFdBQVU7a0VBQ2IsNEVBQUNGOzREQUFJRSxXQUFVOzs4RUFDYiw4REFBQ3ZCLHVEQUFXQTtvRUFBQ3VCLFdBQVU7Ozs7Ozs4RUFDdkIsOERBQUNHO29FQUFFSCxXQUFVOzhFQUFjOzs7Ozs7Ozs7Ozs7Ozs7OztrRUFHL0IsOERBQUNGO3dEQUFJRSxXQUFVO2tFQUNiLDRFQUFDRjs0REFBSUUsV0FBVTs7OEVBQ2IsOERBQUN0Qix5REFBYUE7b0VBQUNzQixXQUFVOzs7Ozs7OEVBQ3pCLDhEQUFDRztvRUFBRUgsV0FBVTs4RUFBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQVF2Qyw4REFBQ0Y7Z0NBQUlFLFdBQVU7MENBQ2IsNEVBQUNGO29DQUFJRSxXQUFVOztzREFDYiw4REFBQ0k7NENBQUdKLFdBQVU7c0RBQWE7Ozs7OztzREFDM0IsOERBQUNHOzRDQUFFSCxXQUFVO3NEQUFhOzs7Ozs7c0RBQzFCLDhEQUFDbEIsbURBQUtBOzRDQUFDdUIsS0FBS3hCLHlEQUFLQTs0Q0FBRXlCLE9BQU07NENBQU1DLFFBQU87NENBQUtDLEtBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUt2RCw4REFBQ1Y7Z0JBQUlFLFdBQVU7MEJBQ2IsNEVBQUNTOztzQ0FDQyw4REFBQ0M7Ozs7O3NDQUNELDhEQUFDWjs0QkFBSUUsV0FBVTs7OENBQ2IsOERBQUNHO29DQUFFSCxXQUFVOzhDQUE0Qjs7Ozs7OzhDQUl6Qyw4REFBQzFCLGtEQUFJQTtvQ0FBQ3FDLE1BQUs7OENBQ1QsNEVBQUNiO3dDQUFJRSxXQUFVO2tEQUNiLDRFQUFDckIsb0VBQXdCQTs0Q0FBQ3FCLFdBQVU7NENBQWFZLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVF2RTtHQTdGTTdCO0tBQUFBO0FBK0ZOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudHMvQ29udGFjdC5qc3g/ZjcxMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQWlGaWxsUGhvbmUsIEFpT3V0bGluZU1haWwgfSBmcm9tIFwicmVhY3QtaWNvbnMvYWlcIjtcclxuaW1wb3J0IHsgSGlPdXRsaW5lQ2hldnJvbkRvdWJsZVVwIH0gZnJvbSBcInJlYWN0LWljb25zL2hpXCI7XHJcbmltcG9ydCBlbWFpbGpzIGZyb20gXCJAZW1haWxqcy9icm93c2VyXCI7XHJcbmltcG9ydCBzdGFycyBmcm9tIFwiLi4vYXNzZXRzL3N0YXJzLnBuZ1wiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuXHJcbmNvbnN0IENvbnRhY3QgPSAoKSA9PiB7XHJcbiAgY29uc3QgZm9ybSA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IHNlbmRFbWFpbCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgZW1haWxqc1xyXG4gICAgICAuc2VuZEZvcm0oXHJcbiAgICAgICAgXCJzZXJ2aWNlX2Q0bmd2MGhcIixcclxuICAgICAgICBcInRlbXBsYXRlXzBjdm03eG1cIixcclxuICAgICAgICBmb3JtLmN1cnJlbnQsXHJcbiAgICAgICAgXCJ6dUd3bkhlbEtRcVo4NWx1MFwiXHJcbiAgICAgIClcclxuICAgICAgLnRoZW4oXHJcbiAgICAgICAgKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LnRleHQpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci50ZXh0KTtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICBlLnRhcmdldC5yZXNldCgpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGlkPVwiY29udGFjdFwiIGNsYXNzTmFtZT1cInctZnVsbCBiZy1zbGF0ZS04MDBcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1bMTI0MHB4XSBtLWF1dG8gcHgtIHB5LTEwIHctZnVsbCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCIgdGV4dC13aGl0ZSBmb250LWJvbGRcIj5EbyB5b3UgaGF2ZSBhIHF1ZXN0aW9uPzwvaDI+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInB5LTEgdGV4dC13aGl0ZVwiPkZlZWwgZnJlZSB0byBjb250YWN0PC9oMj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtOCBncmlkIGxnOmdyaWQtY29scy01IGdhcC04XCI+XHJcbiAgICAgICAgICB7LyogbGVmdCAqL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMyBsZzpjb2wtc3Bhbi0yIHctZnVsbCBoLWZ1bGxcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzpoLWZ1bGxcIj5cclxuICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJwLTRcIj5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCByb3VuZGVkLXhsIGhvdmVyOnNjYWxlLTEwNSBlYXNlLWluIGR1cmF0aW9uLTIwMFwiXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTE1Mzc4NzkxMDM2LTA2NDhhM2VmNzdiMj9peGxpYj1yYi00LjAuMyZpeGlkPU1ud3hNakEzZkRCOE1IeHpaV0Z5WTJoOE1URjhmR05vWVhSOFpXNThNSHg4TUh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTUwMCZxPTYwXCJcclxuICAgICAgICAgICAgICAgICAgYWx0PVwiL1wiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICB7LyogPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJweS0yXCI+QWRpbCBKYXNlZW08L2gyPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bIzkwMTg1Y11cIj5XZWIgRGV2ZWxvcGVyPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHktNFwiPlxyXG4gICAgICAgICAgICAgICAgICBBdmFpbGFibGUgZm9yIGZ1bGwtdGltZSBwb3NpdGlvbnMuIENvbnRhY3QgbWUuXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwidGV4dC14bCBwdC01IHRleHQtd2hpdGUgXCI+Q29ubmVjdCBXaXRoIE1lPC9oNT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtbC0yMCBnYXAtNSBpdGVtcy1jZW50ZXIgbXQtNVwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBwLTUgY3Vyc29yLXBvaW50ZXIgaG92ZXI6c2NhbGUtMTEwIGVhc2UtaW4gZHVyYXRpb24tMzAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LVsxNTNweF0gZmxleCBnYXAtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEFpRmlsbFBob25lIGNsYXNzTmFtZT1cInRleHQtWyNmZmIzMWJdIG10LTFcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiIHRleHQtd2hpdGVcIj4rOTEgMzgzIDY3NSAzNDU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsIHAtNSBjdXJzb3ItcG9pbnRlciBob3ZlcjpzY2FsZS0xMTAgZWFzZS1pbiBkdXJhdGlvbi0zMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxBaU91dGxpbmVNYWlsIGNsYXNzTmFtZT1cInRleHQtWyNmZmIzMWJdIG10LTFcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiIHRleHQtd2hpdGVcIj54eXpAZ21haWwuY29tPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgey8qIHJpZ2h0ICovfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0zIHctZnVsbCBoLWF1dG8gcm91bmRlZC14bCBsZzpwLTRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+NC43PC9oMT5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+UmF0aW5ncyBpbiBHb29nbGUgYnVzaW5lc3M8L3A+XHJcbiAgICAgICAgICAgICAgPEltYWdlIHNyYz17c3RhcnN9IHdpZHRoPVwiMjAwXCIgaGVpZ2h0PVwiNjRcIiBhbHQ9XCIvXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtMTZcIj5cclxuICAgICAgICA8Zm9vdGVyPlxyXG4gICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInB5LTggZm9udC10aGluIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAmY29weTsgQ29weXJpZ2h0IDIwMjIgfCB8IERlc2lnbmVkIGJ5IEFzbGFoIEFobWVkXHJcbiAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgc2hhZG93LWxnIHNoYWRvdy1ncmF5LTQwMCBwLTUgY3Vyc29yLXBvaW50ZXIgaG92ZXI6c2NhbGUtMTEwIGVhc2UtaW4gZHVyYXRpb24tMzAwXCI+XHJcbiAgICAgICAgICAgICAgICA8SGlPdXRsaW5lQ2hldnJvbkRvdWJsZVVwIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIiBzaXplPXszMH0gLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3Q7XHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwiUmVhY3QiLCJ1c2VSZWYiLCJBaUZpbGxQaG9uZSIsIkFpT3V0bGluZU1haWwiLCJIaU91dGxpbmVDaGV2cm9uRG91YmxlVXAiLCJlbWFpbGpzIiwic3RhcnMiLCJJbWFnZSIsIkNvbnRhY3QiLCJmb3JtIiwic2VuZEVtYWlsIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2VuZEZvcm0iLCJjdXJyZW50IiwidGhlbiIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJ0ZXh0IiwiZXJyb3IiLCJ0YXJnZXQiLCJyZXNldCIsImRpdiIsImlkIiwiY2xhc3NOYW1lIiwiaDIiLCJoNSIsInAiLCJoMSIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwiZm9vdGVyIiwiaHIiLCJocmVmIiwic2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/Contact.jsx\n"));

/***/ })

});