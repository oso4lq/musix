"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/FilterBlockItem/FilterBlockItem.tsx":
/*!************************************************************!*\
  !*** ./src/components/FilterBlockItem/FilterBlockItem.tsx ***!
  \************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _FilterBlockItem_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FilterBlockItem.module.css */ \"(app-pages-browser)/./src/components/FilterBlockItem/FilterBlockItem.module.css\");\n/* harmony import */ var _FilterBlockItem_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_FilterBlockItem_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst FilterBlockItem = (param)=>{\n    let { children, onClick, isOpened, list, toggleSelectedOption } = param;\n    _s();\n    const [selectedValue, setSelectedValue] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    // handle click on filter item\n    const handleItemClick = (value)=>{\n        setSelectedValue(value);\n        toggleSelectedOption(value);\n    };\n    // close pop-up when user clicks outside\n    const filterRef = useRef(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const handleClickOutside = (event)=>{\n            if (filterRef.current && !filterRef.current.contains(event.target)) {\n                onClick(); // Close the pop-up\n            }\n        };\n        document.addEventListener(\"mousedown\", handleClickOutside);\n        return ()=>{\n            document.removeEventListener(\"mousedown\", handleClickOutside);\n        };\n    }, [\n        onClick\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            list.length > 0 && isOpened && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_FilterBlockItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().CountPopUp),\n                children: list.length\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlockItem\\\\FilterBlockItem.tsx\",\n                lineNumber: 48,\n                columnNumber: 17\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                // ref={buttonRef}\n                type: \"button\",\n                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_FilterBlockItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().filterButton), {\n                    [(_FilterBlockItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().active)]: isOpened\n                }),\n                onClick: onClick,\n                children: children\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlockItem\\\\FilterBlockItem.tsx\",\n                lineNumber: 52,\n                columnNumber: 13\n            }, undefined),\n            isOpened && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_FilterBlockItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().filterBy),\n                children: list.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: list.map((value, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_FilterBlockItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().filterByP), {\n                                [(_FilterBlockItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().active)]: value === selectedValue\n                            }),\n                            onClick: ()=>handleItemClick(value),\n                            children: value\n                        }, index, false, {\n                            fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlockItem\\\\FilterBlockItem.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 33\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlockItem\\\\FilterBlockItem.tsx\",\n                    lineNumber: 65,\n                    columnNumber: 25\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: (_FilterBlockItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().filterByP),\n                    children: \"No data...\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlockItem\\\\FilterBlockItem.tsx\",\n                    lineNumber: 79,\n                    columnNumber: 25\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlockItem\\\\FilterBlockItem.tsx\",\n                lineNumber: 63,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlockItem\\\\FilterBlockItem.tsx\",\n        lineNumber: 46,\n        columnNumber: 9\n    }, undefined);\n};\n_s(FilterBlockItem, \"a1cHc5HmMvT/vM25Tnjy/Cvb0u4=\");\n_c = FilterBlockItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FilterBlockItem);\nvar _c;\n$RefreshReg$(_c, \"FilterBlockItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0ZpbHRlckJsb2NrSXRlbS9GaWx0ZXJCbG9ja0l0ZW0udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBb0M7QUFDYztBQUNDO0FBVW5ELE1BQU1LLGtCQUFrQjtRQUFDLEVBQ3JCQyxRQUFRLEVBQ1JDLE9BQU8sRUFDUEMsUUFBUSxFQUNSQyxJQUFJLEVBQ0pDLG9CQUFvQixFQUNOOztJQUVkLE1BQU0sQ0FBQ0MsZUFBZUMsaUJBQWlCLEdBQUdSLCtDQUFRQSxDQUFnQjtJQUVsRSw4QkFBOEI7SUFDOUIsTUFBTVMsa0JBQWtCLENBQUNDO1FBQ3JCRixpQkFBaUJFO1FBQ2pCSixxQkFBcUJJO0lBQ3pCO0lBRUEsd0NBQXdDO0lBQ3hDLE1BQU1DLFlBQVlDLE9BQXVCO0lBRXpDYixnREFBU0EsQ0FBQztRQUNOLE1BQU1jLHFCQUFxQixDQUFDQztZQUN4QixJQUFJSCxVQUFVSSxPQUFPLElBQUksQ0FBQ0osVUFBVUksT0FBTyxDQUFDQyxRQUFRLENBQUNGLE1BQU1HLE1BQU0sR0FBVztnQkFDeEVkLFdBQVcsbUJBQW1CO1lBQ2xDO1FBQ0o7UUFFQWUsU0FBU0MsZ0JBQWdCLENBQUMsYUFBYU47UUFDdkMsT0FBTztZQUNISyxTQUFTRSxtQkFBbUIsQ0FBQyxhQUFhUDtRQUM5QztJQUNKLEdBQUc7UUFBQ1Y7S0FBUTtJQUVaLHFCQUNJLDhEQUFDa0I7O1lBQ0loQixLQUFLaUIsTUFBTSxHQUFHLEtBQUtsQiwwQkFDaEIsOERBQUNpQjtnQkFBSUUsV0FBVzFCLCtFQUFpQjswQkFDNUJRLEtBQUtpQixNQUFNOzs7Ozs7MEJBR3BCLDhEQUFDRztnQkFDRyxrQkFBa0I7Z0JBQ2xCQyxNQUFLO2dCQUNMSCxXQUFXM0IsaURBQVVBLENBQUNDLGlGQUFtQixFQUFFO29CQUN2QyxDQUFDQSwyRUFBYSxDQUFDLEVBQUVPO2dCQUNyQjtnQkFDQUQsU0FBU0E7MEJBRVJEOzs7Ozs7WUFFSkUsMEJBQ0csOERBQUNpQjtnQkFBSUUsV0FBVzFCLDZFQUFlOzBCQUMxQlEsS0FBS2lCLE1BQU0sR0FBRyxrQkFDWCw4REFBQ1E7OEJBQ0l6QixLQUFLMEIsR0FBRyxDQUFDLENBQUNyQixPQUFPc0Isc0JBQ2QsOERBQUNDOzRCQUVHVixXQUFXM0IsaURBQVVBLENBQUNDLDhFQUFnQixFQUFFO2dDQUNwQyxDQUFDQSwyRUFBYSxDQUFDLEVBQUVhLFVBQVVIOzRCQUMvQjs0QkFDQUosU0FBUyxJQUFNTSxnQkFBZ0JDO3NDQUU5QkE7MkJBTklzQjs7Ozs7Ozs7OzhDQVdqQiw4REFBQ0c7b0JBQUVaLFdBQVcxQiw4RUFBZ0I7OEJBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXhEO0dBeEVNSTtLQUFBQTtBQTBFTiwrREFBZUEsZUFBZUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9GaWx0ZXJCbG9ja0l0ZW0vRmlsdGVyQmxvY2tJdGVtLnRzeD9iNDU4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vRmlsdGVyQmxvY2tJdGVtLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbnR5cGUgRmlsdGVySXRlbVByb3BzID0ge1xyXG4gICAgY2hpbGRyZW46IHN0cmluZztcclxuICAgIG9uQ2xpY2s6ICgpID0+IHZvaWQ7XHJcbiAgICBpc09wZW5lZDogYm9vbGVhbjtcclxuICAgIGxpc3Q6IEFycmF5PHN0cmluZz47XHJcbiAgICB0b2dnbGVTZWxlY3RlZE9wdGlvbjogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWQ7XHJcbn07XHJcblxyXG5jb25zdCBGaWx0ZXJCbG9ja0l0ZW0gPSAoe1xyXG4gICAgY2hpbGRyZW4sXHJcbiAgICBvbkNsaWNrLFxyXG4gICAgaXNPcGVuZWQsXHJcbiAgICBsaXN0LFxyXG4gICAgdG9nZ2xlU2VsZWN0ZWRPcHRpb24sXHJcbn06IEZpbHRlckl0ZW1Qcm9wcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtzZWxlY3RlZFZhbHVlLCBzZXRTZWxlY3RlZFZhbHVlXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xyXG5cclxuICAgIC8vIGhhbmRsZSBjbGljayBvbiBmaWx0ZXIgaXRlbVxyXG4gICAgY29uc3QgaGFuZGxlSXRlbUNsaWNrID0gKHZhbHVlOiBzdHJpbmcpID0+IHtcclxuICAgICAgICBzZXRTZWxlY3RlZFZhbHVlKHZhbHVlKTtcclxuICAgICAgICB0b2dnbGVTZWxlY3RlZE9wdGlvbih2YWx1ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIGNsb3NlIHBvcC11cCB3aGVuIHVzZXIgY2xpY2tzIG91dHNpZGVcclxuICAgIGNvbnN0IGZpbHRlclJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBoYW5kbGVDbGlja091dHNpZGUgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGZpbHRlclJlZi5jdXJyZW50ICYmICFmaWx0ZXJSZWYuY3VycmVudC5jb250YWlucyhldmVudC50YXJnZXQgYXMgTm9kZSkpIHtcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2soKTsgLy8gQ2xvc2UgdGhlIHBvcC11cFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBoYW5kbGVDbGlja091dHNpZGUpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgaGFuZGxlQ2xpY2tPdXRzaWRlKTtcclxuICAgICAgICB9O1xyXG4gICAgfSwgW29uQ2xpY2tdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtsaXN0Lmxlbmd0aCA+IDAgJiYgaXNPcGVuZWQgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Db3VudFBvcFVwfT5cclxuICAgICAgICAgICAgICAgICAgICB7bGlzdC5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgLy8gcmVmPXtidXR0b25SZWZ9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMuZmlsdGVyQnV0dG9uLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgW3N0eWxlcy5hY3RpdmVdOiBpc09wZW5lZCxcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17b25DbGlja31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAge2lzT3BlbmVkICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmlsdGVyQnl9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtsaXN0Lmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsaXN0Lm1hcCgodmFsdWUsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMuZmlsdGVyQnlQLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc3R5bGVzLmFjdGl2ZV06IHZhbHVlID09PSBzZWxlY3RlZFZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlSXRlbUNsaWNrKHZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZmlsdGVyQnlQfT5ObyBkYXRhLi4uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJCbG9ja0l0ZW07XHJcbiJdLCJuYW1lcyI6WyJjbGFzc05hbWVzIiwic3R5bGVzIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkZpbHRlckJsb2NrSXRlbSIsImNoaWxkcmVuIiwib25DbGljayIsImlzT3BlbmVkIiwibGlzdCIsInRvZ2dsZVNlbGVjdGVkT3B0aW9uIiwic2VsZWN0ZWRWYWx1ZSIsInNldFNlbGVjdGVkVmFsdWUiLCJoYW5kbGVJdGVtQ2xpY2siLCJ2YWx1ZSIsImZpbHRlclJlZiIsInVzZVJlZiIsImhhbmRsZUNsaWNrT3V0c2lkZSIsImV2ZW50IiwiY3VycmVudCIsImNvbnRhaW5zIiwidGFyZ2V0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpdiIsImxlbmd0aCIsImNsYXNzTmFtZSIsIkNvdW50UG9wVXAiLCJidXR0b24iLCJ0eXBlIiwiZmlsdGVyQnV0dG9uIiwiYWN0aXZlIiwiZmlsdGVyQnkiLCJ1bCIsIm1hcCIsImluZGV4IiwibGkiLCJmaWx0ZXJCeVAiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/FilterBlockItem/FilterBlockItem.tsx\n"));

/***/ })

});