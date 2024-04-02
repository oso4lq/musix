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

/***/ "(app-pages-browser)/./src/components/SearchBar/SearchBar.tsx":
/*!************************************************!*\
  !*** ./src/components/SearchBar/SearchBar.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SearchBar_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SearchBar.module.css */ \"(app-pages-browser)/./src/components/SearchBar/SearchBar.module.css\");\n/* harmony import */ var _SearchBar_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_SearchBar_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! fuse.js */ \"(app-pages-browser)/./node_modules/fuse.js/dist/fuse.mjs\");\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks */ \"(app-pages-browser)/./src/hooks.ts\");\n/* harmony import */ var _store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store/features/tracksSlice */ \"(app-pages-browser)/./src/store/features/tracksSlice.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst SearchBar = ()=>{\n    _s();\n    const defaultPlayList = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.tracks.playList); // Move inside the component\n    const [fuse, setFuse] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [searchResults, setSearchResults] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [showSuggestions, setShowSuggestions] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const dispatcher = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch)();\n    // initialize Fuse when trackList changes\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        // if (playList.length > 0) {\n        const options = {\n            keys: [\n                \"name\"\n            ],\n            includeScore: true,\n            threshold: 0.3\n        };\n        // const fuseInstance = new Fuse(playList, options);\n        const fuseInstance = new fuse_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"](defaultPlayList, options); // Use defaultPlayList\n        setFuse(fuseInstance);\n    // }\n    // }, [playList]);\n    }, [\n        defaultPlayList\n    ]);\n    // start the search\n    const handleSearch = (query)=>{\n        if (!fuse) return [];\n        if (query === \"\") {\n            setSearchResults(defaultPlayList);\n            setShowSuggestions(false);\n            return;\n        }\n        const result = fuse.search(query);\n        setSearchResults(result.map((item)=>item.item));\n        setShowSuggestions(true);\n        // save the search result to the storage\n        console.log(result.map((item)=>item.item));\n        dispatcher((0,_store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_4__.setPlayList)(result.map((item)=>item.item)));\n    };\n    // exit the searchbar on clicking out\n    const handleBlur = ()=>{\n        setShowSuggestions(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_SearchBar_module_css__WEBPACK_IMPORTED_MODULE_6___default().centerBlockSearch), (_SearchBar_module_css__WEBPACK_IMPORTED_MODULE_6___default().search)),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                    className: (_SearchBar_module_css__WEBPACK_IMPORTED_MODULE_6___default().searchSvg),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"use\", {\n                        href: \"/img/icon/sprite.svg#icon-search\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\SearchBar\\\\SearchBar.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\SearchBar\\\\SearchBar.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    className: (_SearchBar_module_css__WEBPACK_IMPORTED_MODULE_6___default().searchText),\n                    type: \"text\",\n                    placeholder: \"Search\",\n                    onChange: (e)=>handleSearch(e.target.value),\n                    onBlur: handleBlur\n                }, void 0, false, {\n                    fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\SearchBar\\\\SearchBar.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 17\n                }, undefined),\n                showSuggestions && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_SearchBar_module_css__WEBPACK_IMPORTED_MODULE_6___default().searchBy),\n                    children: searchResults.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: searchResults.map((track)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: (_SearchBar_module_css__WEBPACK_IMPORTED_MODULE_6___default().searchByP),\n                                children: track.name\n                            }, track.id, false, {\n                                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\SearchBar\\\\SearchBar.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 37\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\SearchBar\\\\SearchBar.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 29\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_SearchBar_module_css__WEBPACK_IMPORTED_MODULE_6___default().searchByP),\n                        children: \"No tracks found\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\SearchBar\\\\SearchBar.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 29\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\SearchBar\\\\SearchBar.tsx\",\n                    lineNumber: 69,\n                    columnNumber: 21\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\SearchBar\\\\SearchBar.tsx\",\n            lineNumber: 57,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\SearchBar\\\\SearchBar.tsx\",\n        lineNumber: 56,\n        columnNumber: 9\n    }, undefined);\n};\n_s(SearchBar, \"J824l40RrqPUESrgCs+zVD8bmKI=\", false, function() {\n    return [\n        _hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        _hooks__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch\n    ];\n});\n_c = SearchBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchBar);\nvar _c;\n$RefreshReg$(_c, \"SearchBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1NlYXJjaEJhci9TZWFyY2hCYXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBb0M7QUFDUTtBQUNPO0FBQ3hCO0FBQzhCO0FBRUU7QUFFM0QsTUFBTVMsWUFBWTs7SUFDZCxNQUFNQyxrQkFBa0JILHNEQUFjQSxDQUFDLENBQUNJLFFBQVVBLE1BQU1DLE1BQU0sQ0FBQ0MsUUFBUSxHQUFHLDRCQUE0QjtJQUN0RyxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1osK0NBQVFBLENBQXlCO0lBQ3pELE1BQU0sQ0FBQ2EsZUFBZUMsaUJBQWlCLEdBQUdkLCtDQUFRQSxDQUFjLEVBQUU7SUFDbEUsTUFBTSxDQUFDZSxpQkFBaUJDLG1CQUFtQixHQUFHaEIsK0NBQVFBLENBQUM7SUFFdkQsTUFBTWlCLGFBQWFkLHNEQUFjQTtJQUVqQyx5Q0FBeUM7SUFDekNGLGdEQUFTQSxDQUFDO1FBQ04sNkJBQTZCO1FBQ3pCLE1BQU1pQixVQUFVO1lBQ1pDLE1BQU07Z0JBQUM7YUFBTztZQUNkQyxjQUFjO1lBQ2RDLFdBQVc7UUFDZjtRQUNBLG9EQUFvRDtRQUNwRCxNQUFNQyxlQUFlLElBQUlwQiwrQ0FBSUEsQ0FBQ0ssaUJBQWlCVyxVQUFVLHNCQUFzQjtRQUMvRU4sUUFBUVU7SUFDWixJQUFJO0lBQ1Isa0JBQWtCO0lBQ3RCLEdBQUc7UUFBQ2Y7S0FBZ0I7SUFHaEIsbUJBQW1CO0lBQ25CLE1BQU1nQixlQUFlLENBQUNDO1FBQ2xCLElBQUksQ0FBQ2IsTUFBTSxPQUFPLEVBQUU7UUFDcEIsSUFBSWEsVUFBVSxJQUFJO1lBQ2RWLGlCQUFpQlA7WUFDakJTLG1CQUFtQjtZQUNuQjtRQUNKO1FBQ0EsTUFBTVMsU0FBU2QsS0FBS2UsTUFBTSxDQUFDRjtRQUMzQlYsaUJBQWlCVyxPQUFPRSxHQUFHLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS0EsSUFBSTtRQUMvQ1osbUJBQW1CO1FBRW5CLHdDQUF3QztRQUN4Q2EsUUFBUUMsR0FBRyxDQUFDTCxPQUFPRSxHQUFHLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS0EsSUFBSTtRQUMxQ1gsV0FBV1osd0VBQVdBLENBQUNvQixPQUFPRSxHQUFHLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS0EsSUFBSTtJQUN6RDtJQUVBLHFDQUFxQztJQUNyQyxNQUFNRyxhQUFhO1FBQ2ZmLG1CQUFtQjtJQUN2QjtJQUVBLHFCQUNJLDhEQUFDZ0I7a0JBQ0csNEVBQUNBO1lBQUlDLFdBQVdwQyxpREFBVUEsQ0FBQ0MsZ0ZBQXdCLEVBQUVBLHFFQUFhOzs4QkFDOUQsOERBQUNxQztvQkFBSUYsV0FBV25DLHdFQUFnQjs4QkFDNUIsNEVBQUN1Qzt3QkFBSUMsTUFBSzs7Ozs7Ozs7Ozs7OEJBRWQsOERBQUNDO29CQUNHTixXQUFXbkMseUVBQWlCO29CQUM1QjJDLE1BQUs7b0JBQ0xDLGFBQVk7b0JBQ1pDLFVBQVUsQ0FBQ0MsSUFBTXJCLGFBQWFxQixFQUFFQyxNQUFNLENBQUNDLEtBQUs7b0JBQzVDQyxRQUFRaEI7Ozs7OztnQkFFWGhCLGlDQUNHLDhEQUFDaUI7b0JBQUlDLFdBQVduQyx1RUFBZTs4QkFDMUJlLGNBQWNvQyxNQUFNLEdBQUcsa0JBQ3BCLDhEQUFDQztrQ0FDSXJDLGNBQWNjLEdBQUcsQ0FBQyxDQUFDd0Isc0JBQ2hCLDhEQUFDQztnQ0FFR25CLFdBQVduQyx3RUFBZ0I7MENBRTFCcUQsTUFBTUcsSUFBSTsrQkFITkgsTUFBTUksRUFBRTs7Ozs7Ozs7O2tEQVF6Qiw4REFBQ0M7d0JBQUV2QixXQUFXbkMsd0VBQWdCO2tDQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzVEO0dBaEZNUTs7UUFDc0JGLGtEQUFjQTtRQUtuQkQsa0RBQWNBOzs7S0FOL0JHO0FBa0ZOLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NlYXJjaEJhci9TZWFyY2hCYXIudHN4PzcwOWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vU2VhcmNoQmFyLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBGdXNlIGZyb20gJ2Z1c2UuanMnO1xyXG5pbXBvcnQgeyB1c2VBcHBEaXNwYXRjaCwgdXNlQXBwU2VsZWN0b3IgfSBmcm9tICdAL2hvb2tzJztcclxuaW1wb3J0IHsgdHJhY2tUeXBlIH0gZnJvbSAnQC90eXBlcy90eXBlcyc7XHJcbmltcG9ydCB7IHNldFBsYXlMaXN0IH0gZnJvbSAnQC9zdG9yZS9mZWF0dXJlcy90cmFja3NTbGljZSc7XHJcblxyXG5jb25zdCBTZWFyY2hCYXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkZWZhdWx0UGxheUxpc3QgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnRyYWNrcy5wbGF5TGlzdCk7IC8vIE1vdmUgaW5zaWRlIHRoZSBjb21wb25lbnRcclxuICAgIGNvbnN0IFtmdXNlLCBzZXRGdXNlXSA9IHVzZVN0YXRlPEZ1c2U8dHJhY2tUeXBlPiB8IG51bGw+KG51bGwpO1xyXG4gICAgY29uc3QgW3NlYXJjaFJlc3VsdHMsIHNldFNlYXJjaFJlc3VsdHNdID0gdXNlU3RhdGU8dHJhY2tUeXBlW10+KFtdKTtcclxuICAgIGNvbnN0IFtzaG93U3VnZ2VzdGlvbnMsIHNldFNob3dTdWdnZXN0aW9uc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgZGlzcGF0Y2hlciA9IHVzZUFwcERpc3BhdGNoKCk7XHJcblxyXG4gICAgLy8gaW5pdGlhbGl6ZSBGdXNlIHdoZW4gdHJhY2tMaXN0IGNoYW5nZXNcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgLy8gaWYgKHBsYXlMaXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgIGtleXM6IFsnbmFtZSddLFxyXG4gICAgICAgICAgICAgICAgaW5jbHVkZVNjb3JlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdGhyZXNob2xkOiAwLjMsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIC8vIGNvbnN0IGZ1c2VJbnN0YW5jZSA9IG5ldyBGdXNlKHBsYXlMaXN0LCBvcHRpb25zKTtcclxuICAgICAgICAgICAgY29uc3QgZnVzZUluc3RhbmNlID0gbmV3IEZ1c2UoZGVmYXVsdFBsYXlMaXN0LCBvcHRpb25zKTsgLy8gVXNlIGRlZmF1bHRQbGF5TGlzdFxyXG4gICAgICAgICAgICBzZXRGdXNlKGZ1c2VJbnN0YW5jZSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgLy8gfSwgW3BsYXlMaXN0XSk7XHJcbn0sIFtkZWZhdWx0UGxheUxpc3RdKTtcclxuXHJcblxyXG4gICAgLy8gc3RhcnQgdGhlIHNlYXJjaFxyXG4gICAgY29uc3QgaGFuZGxlU2VhcmNoID0gKHF1ZXJ5OiBzdHJpbmcpID0+IHtcclxuICAgICAgICBpZiAoIWZ1c2UpIHJldHVybiBbXTtcclxuICAgICAgICBpZiAocXVlcnkgPT09ICcnKSB7XHJcbiAgICAgICAgICAgIHNldFNlYXJjaFJlc3VsdHMoZGVmYXVsdFBsYXlMaXN0KTtcclxuICAgICAgICAgICAgc2V0U2hvd1N1Z2dlc3Rpb25zKGZhbHNlKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCByZXN1bHQgPSBmdXNlLnNlYXJjaChxdWVyeSk7XHJcbiAgICAgICAgc2V0U2VhcmNoUmVzdWx0cyhyZXN1bHQubWFwKChpdGVtKSA9PiBpdGVtLml0ZW0pKTtcclxuICAgICAgICBzZXRTaG93U3VnZ2VzdGlvbnModHJ1ZSk7XHJcblxyXG4gICAgICAgIC8vIHNhdmUgdGhlIHNlYXJjaCByZXN1bHQgdG8gdGhlIHN0b3JhZ2VcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQubWFwKChpdGVtKSA9PiBpdGVtLml0ZW0pKTtcclxuICAgICAgICBkaXNwYXRjaGVyKHNldFBsYXlMaXN0KHJlc3VsdC5tYXAoKGl0ZW0pID0+IGl0ZW0uaXRlbSkpKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gZXhpdCB0aGUgc2VhcmNoYmFyIG9uIGNsaWNraW5nIG91dFxyXG4gICAgY29uc3QgaGFuZGxlQmx1ciA9ICgpID0+IHtcclxuICAgICAgICBzZXRTaG93U3VnZ2VzdGlvbnMoZmFsc2UpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5jZW50ZXJCbG9ja1NlYXJjaCwgc3R5bGVzLnNlYXJjaCl9PlxyXG4gICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hTdmd9PlxyXG4gICAgICAgICAgICAgICAgICAgIDx1c2UgaHJlZj1cIi9pbWcvaWNvbi9zcHJpdGUuc3ZnI2ljb24tc2VhcmNoXCI+PC91c2U+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaFRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZVNlYXJjaChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIHtzaG93U3VnZ2VzdGlvbnMgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoQnl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c2VhcmNoUmVzdWx0cy5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWFyY2hSZXN1bHRzLm1hcCgodHJhY2spID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3RyYWNrLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoQnlQfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dHJhY2submFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hCeVB9Pk5vIHRyYWNrcyBmb3VuZDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEJhcjtcclxuIl0sIm5hbWVzIjpbImNsYXNzTmFtZXMiLCJzdHlsZXMiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiRnVzZSIsInVzZUFwcERpc3BhdGNoIiwidXNlQXBwU2VsZWN0b3IiLCJzZXRQbGF5TGlzdCIsIlNlYXJjaEJhciIsImRlZmF1bHRQbGF5TGlzdCIsInN0YXRlIiwidHJhY2tzIiwicGxheUxpc3QiLCJmdXNlIiwic2V0RnVzZSIsInNlYXJjaFJlc3VsdHMiLCJzZXRTZWFyY2hSZXN1bHRzIiwic2hvd1N1Z2dlc3Rpb25zIiwic2V0U2hvd1N1Z2dlc3Rpb25zIiwiZGlzcGF0Y2hlciIsIm9wdGlvbnMiLCJrZXlzIiwiaW5jbHVkZVNjb3JlIiwidGhyZXNob2xkIiwiZnVzZUluc3RhbmNlIiwiaGFuZGxlU2VhcmNoIiwicXVlcnkiLCJyZXN1bHQiLCJzZWFyY2giLCJtYXAiLCJpdGVtIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUJsdXIiLCJkaXYiLCJjbGFzc05hbWUiLCJjZW50ZXJCbG9ja1NlYXJjaCIsInN2ZyIsInNlYXJjaFN2ZyIsInVzZSIsImhyZWYiLCJpbnB1dCIsInNlYXJjaFRleHQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uQmx1ciIsInNlYXJjaEJ5IiwibGVuZ3RoIiwidWwiLCJ0cmFjayIsImxpIiwic2VhcmNoQnlQIiwibmFtZSIsImlkIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/SearchBar/SearchBar.tsx\n"));

/***/ })

});