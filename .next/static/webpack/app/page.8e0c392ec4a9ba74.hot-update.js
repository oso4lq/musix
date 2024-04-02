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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SearchBar_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SearchBar.module.css */ \"(app-pages-browser)/./src/components/SearchBar/SearchBar.module.css\");\n/* harmony import */ var _SearchBar_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_SearchBar_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! fuse.js */ \"(app-pages-browser)/./node_modules/fuse.js/dist/fuse.mjs\");\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks */ \"(app-pages-browser)/./src/hooks.ts\");\n/* harmony import */ var _store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store/features/tracksSlice */ \"(app-pages-browser)/./src/store/features/tracksSlice.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst SearchBar = ()=>{\n    _s();\n    const defaultPlayList = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.tracks.playList); // Move inside the component\n    const [fuse, setFuse] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [searchResults, setSearchResults] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [showSuggestions, setShowSuggestions] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const dispatcher = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch)();\n    // initialize Fuse when trackList changes\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        // if (playList.length > 0) {\n        const options = {\n            keys: [\n                \"name\"\n            ],\n            includeScore: true,\n            threshold: 0.3\n        };\n        // const fuseInstance = new Fuse(playList, options);\n        const fuseInstance = new fuse_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"](defaultPlayList, options); // Use defaultPlayList\n        setFuse(fuseInstance);\n    // }\n    // }, [playList]);\n    }, [\n        defaultPlayList\n    ]);\n    // start the search\n    const handleSearch = (query)=>{\n        if (!fuse) return [];\n        const result = fuse.search(query);\n        setSearchResults(result.map((item)=>item.item));\n        setShowSuggestions(true);\n        // save the search result to the storage\n        console.log(result.map((item)=>item.item));\n        dispatcher((0,_store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_4__.setPlayList)(result.map((item)=>item.item)));\n    };\n    // exit the searchbar on clicking out\n    const handleBlur = ()=>{\n        setShowSuggestions(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_SearchBar_module_css__WEBPACK_IMPORTED_MODULE_6___default().centerBlockSearch), (_SearchBar_module_css__WEBPACK_IMPORTED_MODULE_6___default().search)),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                    className: (_SearchBar_module_css__WEBPACK_IMPORTED_MODULE_6___default().searchSvg),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"use\", {\n                        href: \"/img/icon/sprite.svg#icon-search\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\SearchBar\\\\SearchBar.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\SearchBar\\\\SearchBar.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    className: (_SearchBar_module_css__WEBPACK_IMPORTED_MODULE_6___default().searchText),\n                    type: \"text\",\n                    placeholder: \"Search\",\n                    onChange: (e)=>handleSearch(e.target.value),\n                    onBlur: handleBlur\n                }, void 0, false, {\n                    fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\SearchBar\\\\SearchBar.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 17\n                }, undefined),\n                showSuggestions && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_SearchBar_module_css__WEBPACK_IMPORTED_MODULE_6___default().searchBy),\n                    children: searchResults.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: searchResults.map((track)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: (_SearchBar_module_css__WEBPACK_IMPORTED_MODULE_6___default().searchByP),\n                                children: track.name\n                            }, track.id, false, {\n                                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\SearchBar\\\\SearchBar.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 37\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\SearchBar\\\\SearchBar.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 29\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_SearchBar_module_css__WEBPACK_IMPORTED_MODULE_6___default().searchByP),\n                        children: \"No tracks found\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\SearchBar\\\\SearchBar.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 29\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\SearchBar\\\\SearchBar.tsx\",\n                    lineNumber: 65,\n                    columnNumber: 21\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\SearchBar\\\\SearchBar.tsx\",\n            lineNumber: 53,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\SearchBar\\\\SearchBar.tsx\",\n        lineNumber: 52,\n        columnNumber: 9\n    }, undefined);\n};\n_s(SearchBar, \"J824l40RrqPUESrgCs+zVD8bmKI=\", false, function() {\n    return [\n        _hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        _hooks__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch\n    ];\n});\n_c = SearchBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchBar);\nvar _c;\n$RefreshReg$(_c, \"SearchBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1NlYXJjaEJhci9TZWFyY2hCYXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBb0M7QUFDUTtBQUNPO0FBQ3hCO0FBQzhCO0FBRUU7QUFFM0QsTUFBTVMsWUFBWTs7SUFDZCxNQUFNQyxrQkFBa0JILHNEQUFjQSxDQUFDLENBQUNJLFFBQVVBLE1BQU1DLE1BQU0sQ0FBQ0MsUUFBUSxHQUFHLDRCQUE0QjtJQUV0RyxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1osK0NBQVFBLENBQXlCO0lBQ3pELE1BQU0sQ0FBQ2EsZUFBZUMsaUJBQWlCLEdBQUdkLCtDQUFRQSxDQUFjLEVBQUU7SUFDbEUsTUFBTSxDQUFDZSxpQkFBaUJDLG1CQUFtQixHQUFHaEIsK0NBQVFBLENBQUM7SUFFdkQsTUFBTWlCLGFBQWFkLHNEQUFjQTtJQUVqQyx5Q0FBeUM7SUFDekNGLGdEQUFTQSxDQUFDO1FBQ04sNkJBQTZCO1FBQ3pCLE1BQU1pQixVQUFVO1lBQ1pDLE1BQU07Z0JBQUM7YUFBTztZQUNkQyxjQUFjO1lBQ2RDLFdBQVc7UUFDZjtRQUNBLG9EQUFvRDtRQUNwRCxNQUFNQyxlQUFlLElBQUlwQiwrQ0FBSUEsQ0FBQ0ssaUJBQWlCVyxVQUFVLHNCQUFzQjtRQUMvRU4sUUFBUVU7SUFDWixJQUFJO0lBQ1Isa0JBQWtCO0lBQ3RCLEdBQUc7UUFBQ2Y7S0FBZ0I7SUFHaEIsbUJBQW1CO0lBQ25CLE1BQU1nQixlQUFlLENBQUNDO1FBQ2xCLElBQUksQ0FBQ2IsTUFBTSxPQUFPLEVBQUU7UUFDcEIsTUFBTWMsU0FBU2QsS0FBS2UsTUFBTSxDQUFDRjtRQUMzQlYsaUJBQWlCVyxPQUFPRSxHQUFHLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS0EsSUFBSTtRQUMvQ1osbUJBQW1CO1FBRW5CLHdDQUF3QztRQUN4Q2EsUUFBUUMsR0FBRyxDQUFDTCxPQUFPRSxHQUFHLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS0EsSUFBSTtRQUMxQ1gsV0FBV1osd0VBQVdBLENBQUNvQixPQUFPRSxHQUFHLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS0EsSUFBSTtJQUN6RDtJQUVBLHFDQUFxQztJQUNyQyxNQUFNRyxhQUFhO1FBQ2ZmLG1CQUFtQjtJQUN2QjtJQUVBLHFCQUNJLDhEQUFDZ0I7a0JBQ0csNEVBQUNBO1lBQUlDLFdBQVdwQyxpREFBVUEsQ0FBQ0MsZ0ZBQXdCLEVBQUVBLHFFQUFhOzs4QkFDOUQsOERBQUNxQztvQkFBSUYsV0FBV25DLHdFQUFnQjs4QkFDNUIsNEVBQUN1Qzt3QkFBSUMsTUFBSzs7Ozs7Ozs7Ozs7OEJBRWQsOERBQUNDO29CQUNHTixXQUFXbkMseUVBQWlCO29CQUM1QjJDLE1BQUs7b0JBQ0xDLGFBQVk7b0JBQ1pDLFVBQVUsQ0FBQ0MsSUFBTXJCLGFBQWFxQixFQUFFQyxNQUFNLENBQUNDLEtBQUs7b0JBQzVDQyxRQUFRaEI7Ozs7OztnQkFFWGhCLGlDQUNHLDhEQUFDaUI7b0JBQUlDLFdBQVduQyx1RUFBZTs4QkFDMUJlLGNBQWNvQyxNQUFNLEdBQUcsa0JBQ3BCLDhEQUFDQztrQ0FDSXJDLGNBQWNjLEdBQUcsQ0FBQyxDQUFDd0Isc0JBQ2hCLDhEQUFDQztnQ0FFR25CLFdBQVduQyx3RUFBZ0I7MENBRTFCcUQsTUFBTUcsSUFBSTsrQkFITkgsTUFBTUksRUFBRTs7Ozs7Ozs7O2tEQVF6Qiw4REFBQ0M7d0JBQUV2QixXQUFXbkMsd0VBQWdCO2tDQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzVEO0dBNUVNUTs7UUFDc0JGLGtEQUFjQTtRQU1uQkQsa0RBQWNBOzs7S0FQL0JHO0FBOEVOLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NlYXJjaEJhci9TZWFyY2hCYXIudHN4PzcwOWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vU2VhcmNoQmFyLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBGdXNlIGZyb20gJ2Z1c2UuanMnO1xyXG5pbXBvcnQgeyB1c2VBcHBEaXNwYXRjaCwgdXNlQXBwU2VsZWN0b3IgfSBmcm9tICdAL2hvb2tzJztcclxuaW1wb3J0IHsgdHJhY2tUeXBlIH0gZnJvbSAnQC90eXBlcy90eXBlcyc7XHJcbmltcG9ydCB7IHNldFBsYXlMaXN0IH0gZnJvbSAnQC9zdG9yZS9mZWF0dXJlcy90cmFja3NTbGljZSc7XHJcblxyXG5jb25zdCBTZWFyY2hCYXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkZWZhdWx0UGxheUxpc3QgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnRyYWNrcy5wbGF5TGlzdCk7IC8vIE1vdmUgaW5zaWRlIHRoZSBjb21wb25lbnRcclxuXHJcbiAgICBjb25zdCBbZnVzZSwgc2V0RnVzZV0gPSB1c2VTdGF0ZTxGdXNlPHRyYWNrVHlwZT4gfCBudWxsPihudWxsKTtcclxuICAgIGNvbnN0IFtzZWFyY2hSZXN1bHRzLCBzZXRTZWFyY2hSZXN1bHRzXSA9IHVzZVN0YXRlPHRyYWNrVHlwZVtdPihbXSk7XHJcbiAgICBjb25zdCBbc2hvd1N1Z2dlc3Rpb25zLCBzZXRTaG93U3VnZ2VzdGlvbnNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IGRpc3BhdGNoZXIgPSB1c2VBcHBEaXNwYXRjaCgpO1xyXG5cclxuICAgIC8vIGluaXRpYWxpemUgRnVzZSB3aGVuIHRyYWNrTGlzdCBjaGFuZ2VzXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIC8vIGlmIChwbGF5TGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICAgICBrZXlzOiBbJ25hbWUnXSxcclxuICAgICAgICAgICAgICAgIGluY2x1ZGVTY29yZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHRocmVzaG9sZDogMC4zLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAvLyBjb25zdCBmdXNlSW5zdGFuY2UgPSBuZXcgRnVzZShwbGF5TGlzdCwgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZ1c2VJbnN0YW5jZSA9IG5ldyBGdXNlKGRlZmF1bHRQbGF5TGlzdCwgb3B0aW9ucyk7IC8vIFVzZSBkZWZhdWx0UGxheUxpc3RcclxuICAgICAgICAgICAgc2V0RnVzZShmdXNlSW5zdGFuY2UpO1xyXG4gICAgICAgIC8vIH1cclxuICAgIC8vIH0sIFtwbGF5TGlzdF0pO1xyXG59LCBbZGVmYXVsdFBsYXlMaXN0XSk7XHJcblxyXG5cclxuICAgIC8vIHN0YXJ0IHRoZSBzZWFyY2hcclxuICAgIGNvbnN0IGhhbmRsZVNlYXJjaCA9IChxdWVyeTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgaWYgKCFmdXNlKSByZXR1cm4gW107XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gZnVzZS5zZWFyY2gocXVlcnkpO1xyXG4gICAgICAgIHNldFNlYXJjaFJlc3VsdHMocmVzdWx0Lm1hcCgoaXRlbSkgPT4gaXRlbS5pdGVtKSk7XHJcbiAgICAgICAgc2V0U2hvd1N1Z2dlc3Rpb25zKHRydWUpO1xyXG5cclxuICAgICAgICAvLyBzYXZlIHRoZSBzZWFyY2ggcmVzdWx0IHRvIHRoZSBzdG9yYWdlXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0Lm1hcCgoaXRlbSkgPT4gaXRlbS5pdGVtKSk7XHJcbiAgICAgICAgZGlzcGF0Y2hlcihzZXRQbGF5TGlzdChyZXN1bHQubWFwKChpdGVtKSA9PiBpdGVtLml0ZW0pKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIGV4aXQgdGhlIHNlYXJjaGJhciBvbiBjbGlja2luZyBvdXRcclxuICAgIGNvbnN0IGhhbmRsZUJsdXIgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0U2hvd1N1Z2dlc3Rpb25zKGZhbHNlKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMuY2VudGVyQmxvY2tTZWFyY2gsIHN0eWxlcy5zZWFyY2gpfT5cclxuICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoU3ZnfT5cclxuICAgICAgICAgICAgICAgICAgICA8dXNlIGhyZWY9XCIvaW1nL2ljb24vc3ByaXRlLnN2ZyNpY29uLXNlYXJjaFwiPjwvdXNlPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hUZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVTZWFyY2goZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB7c2hvd1N1Z2dlc3Rpb25zICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaEJ5fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3NlYXJjaFJlc3VsdHMubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VhcmNoUmVzdWx0cy5tYXAoKHRyYWNrKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXt0cmFjay5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaEJ5UH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RyYWNrLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoQnlQfT5ObyB0cmFja3MgZm91bmQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hCYXI7XHJcbiJdLCJuYW1lcyI6WyJjbGFzc05hbWVzIiwic3R5bGVzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkZ1c2UiLCJ1c2VBcHBEaXNwYXRjaCIsInVzZUFwcFNlbGVjdG9yIiwic2V0UGxheUxpc3QiLCJTZWFyY2hCYXIiLCJkZWZhdWx0UGxheUxpc3QiLCJzdGF0ZSIsInRyYWNrcyIsInBsYXlMaXN0IiwiZnVzZSIsInNldEZ1c2UiLCJzZWFyY2hSZXN1bHRzIiwic2V0U2VhcmNoUmVzdWx0cyIsInNob3dTdWdnZXN0aW9ucyIsInNldFNob3dTdWdnZXN0aW9ucyIsImRpc3BhdGNoZXIiLCJvcHRpb25zIiwia2V5cyIsImluY2x1ZGVTY29yZSIsInRocmVzaG9sZCIsImZ1c2VJbnN0YW5jZSIsImhhbmRsZVNlYXJjaCIsInF1ZXJ5IiwicmVzdWx0Iiwic2VhcmNoIiwibWFwIiwiaXRlbSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVCbHVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiY2VudGVyQmxvY2tTZWFyY2giLCJzdmciLCJzZWFyY2hTdmciLCJ1c2UiLCJocmVmIiwiaW5wdXQiLCJzZWFyY2hUZXh0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJvbkJsdXIiLCJzZWFyY2hCeSIsImxlbmd0aCIsInVsIiwidHJhY2siLCJsaSIsInNlYXJjaEJ5UCIsIm5hbWUiLCJpZCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/SearchBar/SearchBar.tsx\n"));

/***/ })

});