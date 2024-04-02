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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SearchBar_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SearchBar.module.css */ \"(app-pages-browser)/./src/components/SearchBar/SearchBar.module.css\");\n/* harmony import */ var _SearchBar_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_SearchBar_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! fuse.js */ \"(app-pages-browser)/./node_modules/fuse.js/dist/fuse.mjs\");\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks */ \"(app-pages-browser)/./src/hooks.ts\");\n/* harmony import */ var _store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store/features/tracksSlice */ \"(app-pages-browser)/./src/store/features/tracksSlice.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst SearchBar = ()=>{\n    _s();\n    const defaultPlayList = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.tracks.playList); // Move inside the component\n    const searchPlaylist = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.tracks.searchPlaylist);\n    const [fuse, setFuse] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [searchResults, setSearchResults] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [showSuggestions, setShowSuggestions] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const dispatcher = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch)();\n    // initialize Fuse when trackList changes\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (defaultPlayList.length > 0) {\n            const options = {\n                keys: [\n                    \"name\"\n                ],\n                includeScore: true,\n                threshold: 0.3\n            };\n            // const fuseInstance = new Fuse(playList, options);\n            const fuseInstance = new fuse_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"](defaultPlayList, options); // Use defaultPlayList\n            setFuse(fuseInstance);\n        }\n    // }, [playList]);\n    }, [\n        defaultPlayList\n    ]);\n    // start the search\n    const handleSearch = (query)=>{\n        if (!fuse) return [];\n        if (query === \"\") {\n            setSearchResults(defaultPlayList);\n            setShowSuggestions(false);\n            return;\n        }\n        const result = fuse.search(query);\n        setSearchResults(result.map((item)=>item.item));\n        setShowSuggestions(true);\n        // save the search result to the storage\n        console.log(result.map((item)=>item.item));\n        dispatcher((0,_store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_4__.setSearchPlayList)(result.map((item)=>item.item)));\n    };\n    // exit the searchbar on clicking out\n    const handleBlur = ()=>{\n        setShowSuggestions(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_SearchBar_module_css__WEBPACK_IMPORTED_MODULE_6___default().centerBlockSearch), (_SearchBar_module_css__WEBPACK_IMPORTED_MODULE_6___default().search)),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                    className: (_SearchBar_module_css__WEBPACK_IMPORTED_MODULE_6___default().searchSvg),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"use\", {\n                        href: \"/img/icon/sprite.svg#icon-search\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\SearchBar\\\\SearchBar.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\SearchBar\\\\SearchBar.tsx\",\n                    lineNumber: 59,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    className: (_SearchBar_module_css__WEBPACK_IMPORTED_MODULE_6___default().searchText),\n                    type: \"text\",\n                    placeholder: \"Search\",\n                    onChange: (e)=>handleSearch(e.target.value),\n                    onBlur: handleBlur\n                }, void 0, false, {\n                    fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\SearchBar\\\\SearchBar.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 17\n                }, undefined),\n                showSuggestions && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_SearchBar_module_css__WEBPACK_IMPORTED_MODULE_6___default().searchBy),\n                    children: searchResults.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: searchResults.map((track)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: (_SearchBar_module_css__WEBPACK_IMPORTED_MODULE_6___default().searchByP),\n                                children: track.name\n                            }, track.id, false, {\n                                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\SearchBar\\\\SearchBar.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 37\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\SearchBar\\\\SearchBar.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 29\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_SearchBar_module_css__WEBPACK_IMPORTED_MODULE_6___default().searchByP),\n                        children: \"No tracks found\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\SearchBar\\\\SearchBar.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 29\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\SearchBar\\\\SearchBar.tsx\",\n                    lineNumber: 70,\n                    columnNumber: 21\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\SearchBar\\\\SearchBar.tsx\",\n            lineNumber: 58,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\SearchBar\\\\SearchBar.tsx\",\n        lineNumber: 57,\n        columnNumber: 9\n    }, undefined);\n};\n_s(SearchBar, \"6BOWvvQDE1aNhANAIsvOeAOqHlY=\", false, function() {\n    return [\n        _hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        _hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        _hooks__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch\n    ];\n});\n_c = SearchBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchBar);\nvar _c;\n$RefreshReg$(_c, \"SearchBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1NlYXJjaEJhci9TZWFyY2hCYXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBb0M7QUFDUTtBQUNPO0FBQ3hCO0FBQzhCO0FBRVE7QUFFakUsTUFBTVMsWUFBWTs7SUFDZCxNQUFNQyxrQkFBa0JILHNEQUFjQSxDQUFDLENBQUNJLFFBQVVBLE1BQU1DLE1BQU0sQ0FBQ0MsUUFBUSxHQUFHLDRCQUE0QjtJQUN0RyxNQUFNQyxpQkFBaUJQLHNEQUFjQSxDQUFDLENBQUNJLFFBQVVBLE1BQU1DLE1BQU0sQ0FBQ0UsY0FBYztJQUM1RSxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR2IsK0NBQVFBLENBQXlCO0lBQ3pELE1BQU0sQ0FBQ2MsZUFBZUMsaUJBQWlCLEdBQUdmLCtDQUFRQSxDQUFjLEVBQUU7SUFDbEUsTUFBTSxDQUFDZ0IsaUJBQWlCQyxtQkFBbUIsR0FBR2pCLCtDQUFRQSxDQUFDO0lBRXZELE1BQU1rQixhQUFhZixzREFBY0E7SUFFakMseUNBQXlDO0lBQ3pDRixnREFBU0EsQ0FBQztRQUNOLElBQUlNLGdCQUFnQlksTUFBTSxHQUFHLEdBQUc7WUFDNUIsTUFBTUMsVUFBVTtnQkFDWkMsTUFBTTtvQkFBQztpQkFBTztnQkFDZEMsY0FBYztnQkFDZEMsV0FBVztZQUNmO1lBQ0Esb0RBQW9EO1lBQ3BELE1BQU1DLGVBQWUsSUFBSXRCLCtDQUFJQSxDQUFDSyxpQkFBaUJhLFVBQVUsc0JBQXNCO1lBQy9FUCxRQUFRVztRQUNaO0lBQ0Esa0JBQWtCO0lBQ3RCLEdBQUc7UUFBQ2pCO0tBQWdCO0lBR3BCLG1CQUFtQjtJQUNuQixNQUFNa0IsZUFBZSxDQUFDQztRQUNsQixJQUFJLENBQUNkLE1BQU0sT0FBTyxFQUFFO1FBQ3BCLElBQUljLFVBQVUsSUFBSTtZQUNkWCxpQkFBaUJSO1lBQ2pCVSxtQkFBbUI7WUFDbkI7UUFDSjtRQUNBLE1BQU1VLFNBQVNmLEtBQUtnQixNQUFNLENBQUNGO1FBQzNCWCxpQkFBaUJZLE9BQU9FLEdBQUcsQ0FBQyxDQUFDQyxPQUFTQSxLQUFLQSxJQUFJO1FBQy9DYixtQkFBbUI7UUFFbkIsd0NBQXdDO1FBQ3hDYyxRQUFRQyxHQUFHLENBQUNMLE9BQU9FLEdBQUcsQ0FBQyxDQUFDQyxPQUFTQSxLQUFLQSxJQUFJO1FBQzFDWixXQUFXYiw4RUFBaUJBLENBQUNzQixPQUFPRSxHQUFHLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS0EsSUFBSTtJQUMvRDtJQUVBLHFDQUFxQztJQUNyQyxNQUFNRyxhQUFhO1FBQ2ZoQixtQkFBbUI7SUFDdkI7SUFFQSxxQkFDSSw4REFBQ2lCO2tCQUNHLDRFQUFDQTtZQUFJQyxXQUFXdEMsaURBQVVBLENBQUNDLGdGQUF3QixFQUFFQSxxRUFBYTs7OEJBQzlELDhEQUFDdUM7b0JBQUlGLFdBQVdyQyx3RUFBZ0I7OEJBQzVCLDRFQUFDeUM7d0JBQUlDLE1BQUs7Ozs7Ozs7Ozs7OzhCQUVkLDhEQUFDQztvQkFDR04sV0FBV3JDLHlFQUFpQjtvQkFDNUI2QyxNQUFLO29CQUNMQyxhQUFZO29CQUNaQyxVQUFVLENBQUNDLElBQU1yQixhQUFhcUIsRUFBRUMsTUFBTSxDQUFDQyxLQUFLO29CQUM1Q0MsUUFBUWhCOzs7Ozs7Z0JBRVhqQixpQ0FDRyw4REFBQ2tCO29CQUFJQyxXQUFXckMsdUVBQWU7OEJBQzFCZ0IsY0FBY0ssTUFBTSxHQUFHLGtCQUNwQiw4REFBQ2dDO2tDQUNJckMsY0FBY2UsR0FBRyxDQUFDLENBQUN1QixzQkFDaEIsOERBQUNDO2dDQUVHbEIsV0FBV3JDLHdFQUFnQjswQ0FFMUJzRCxNQUFNRyxJQUFJOytCQUhOSCxNQUFNSSxFQUFFOzs7Ozs7Ozs7a0RBUXpCLDhEQUFDQzt3QkFBRXRCLFdBQVdyQyx3RUFBZ0I7a0NBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPNUQ7R0FqRk1ROztRQUNzQkYsa0RBQWNBO1FBQ2ZBLGtEQUFjQTtRQUtsQkQsa0RBQWNBOzs7S0FQL0JHO0FBbUZOLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NlYXJjaEJhci9TZWFyY2hCYXIudHN4PzcwOWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vU2VhcmNoQmFyLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBGdXNlIGZyb20gJ2Z1c2UuanMnO1xyXG5pbXBvcnQgeyB1c2VBcHBEaXNwYXRjaCwgdXNlQXBwU2VsZWN0b3IgfSBmcm9tICdAL2hvb2tzJztcclxuaW1wb3J0IHsgdHJhY2tUeXBlIH0gZnJvbSAnQC90eXBlcy90eXBlcyc7XHJcbmltcG9ydCB7IHNldFNlYXJjaFBsYXlMaXN0IH0gZnJvbSAnQC9zdG9yZS9mZWF0dXJlcy90cmFja3NTbGljZSc7XHJcblxyXG5jb25zdCBTZWFyY2hCYXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkZWZhdWx0UGxheUxpc3QgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnRyYWNrcy5wbGF5TGlzdCk7IC8vIE1vdmUgaW5zaWRlIHRoZSBjb21wb25lbnRcclxuICAgIGNvbnN0IHNlYXJjaFBsYXlsaXN0ID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS50cmFja3Muc2VhcmNoUGxheWxpc3QpO1xyXG4gICAgY29uc3QgW2Z1c2UsIHNldEZ1c2VdID0gdXNlU3RhdGU8RnVzZTx0cmFja1R5cGU+IHwgbnVsbD4obnVsbCk7XHJcbiAgICBjb25zdCBbc2VhcmNoUmVzdWx0cywgc2V0U2VhcmNoUmVzdWx0c10gPSB1c2VTdGF0ZTx0cmFja1R5cGVbXT4oW10pO1xyXG4gICAgY29uc3QgW3Nob3dTdWdnZXN0aW9ucywgc2V0U2hvd1N1Z2dlc3Rpb25zXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBkaXNwYXRjaGVyID0gdXNlQXBwRGlzcGF0Y2goKTtcclxuXHJcbiAgICAvLyBpbml0aWFsaXplIEZ1c2Ugd2hlbiB0cmFja0xpc3QgY2hhbmdlc1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoZGVmYXVsdFBsYXlMaXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgIGtleXM6IFsnbmFtZSddLFxyXG4gICAgICAgICAgICAgICAgaW5jbHVkZVNjb3JlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdGhyZXNob2xkOiAwLjMsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIC8vIGNvbnN0IGZ1c2VJbnN0YW5jZSA9IG5ldyBGdXNlKHBsYXlMaXN0LCBvcHRpb25zKTtcclxuICAgICAgICAgICAgY29uc3QgZnVzZUluc3RhbmNlID0gbmV3IEZ1c2UoZGVmYXVsdFBsYXlMaXN0LCBvcHRpb25zKTsgLy8gVXNlIGRlZmF1bHRQbGF5TGlzdFxyXG4gICAgICAgICAgICBzZXRGdXNlKGZ1c2VJbnN0YW5jZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIH0sIFtwbGF5TGlzdF0pO1xyXG4gICAgfSwgW2RlZmF1bHRQbGF5TGlzdF0pO1xyXG5cclxuXHJcbiAgICAvLyBzdGFydCB0aGUgc2VhcmNoXHJcbiAgICBjb25zdCBoYW5kbGVTZWFyY2ggPSAocXVlcnk6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGlmICghZnVzZSkgcmV0dXJuIFtdO1xyXG4gICAgICAgIGlmIChxdWVyeSA9PT0gJycpIHtcclxuICAgICAgICAgICAgc2V0U2VhcmNoUmVzdWx0cyhkZWZhdWx0UGxheUxpc3QpO1xyXG4gICAgICAgICAgICBzZXRTaG93U3VnZ2VzdGlvbnMoZmFsc2UpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGZ1c2Uuc2VhcmNoKHF1ZXJ5KTtcclxuICAgICAgICBzZXRTZWFyY2hSZXN1bHRzKHJlc3VsdC5tYXAoKGl0ZW0pID0+IGl0ZW0uaXRlbSkpO1xyXG4gICAgICAgIHNldFNob3dTdWdnZXN0aW9ucyh0cnVlKTtcclxuXHJcbiAgICAgICAgLy8gc2F2ZSB0aGUgc2VhcmNoIHJlc3VsdCB0byB0aGUgc3RvcmFnZVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC5tYXAoKGl0ZW0pID0+IGl0ZW0uaXRlbSkpO1xyXG4gICAgICAgIGRpc3BhdGNoZXIoc2V0U2VhcmNoUGxheUxpc3QocmVzdWx0Lm1hcCgoaXRlbSkgPT4gaXRlbS5pdGVtKSkpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBleGl0IHRoZSBzZWFyY2hiYXIgb24gY2xpY2tpbmcgb3V0XHJcbiAgICBjb25zdCBoYW5kbGVCbHVyID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFNob3dTdWdnZXN0aW9ucyhmYWxzZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLmNlbnRlckJsb2NrU2VhcmNoLCBzdHlsZXMuc2VhcmNoKX0+XHJcbiAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaFN2Z30+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVzZSBocmVmPVwiL2ltZy9pY29uL3Nwcml0ZS5zdmcjaWNvbi1zZWFyY2hcIj48L3VzZT5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoVGV4dH1cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlU2VhcmNoKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAge3Nob3dTdWdnZXN0aW9ucyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hCeX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzZWFyY2hSZXN1bHRzLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlYXJjaFJlc3VsdHMubWFwKCh0cmFjaykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17dHJhY2suaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hCeVB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0cmFjay5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaEJ5UH0+Tm8gdHJhY2tzIGZvdW5kPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoQmFyO1xyXG4iXSwibmFtZXMiOlsiY2xhc3NOYW1lcyIsInN0eWxlcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJGdXNlIiwidXNlQXBwRGlzcGF0Y2giLCJ1c2VBcHBTZWxlY3RvciIsInNldFNlYXJjaFBsYXlMaXN0IiwiU2VhcmNoQmFyIiwiZGVmYXVsdFBsYXlMaXN0Iiwic3RhdGUiLCJ0cmFja3MiLCJwbGF5TGlzdCIsInNlYXJjaFBsYXlsaXN0IiwiZnVzZSIsInNldEZ1c2UiLCJzZWFyY2hSZXN1bHRzIiwic2V0U2VhcmNoUmVzdWx0cyIsInNob3dTdWdnZXN0aW9ucyIsInNldFNob3dTdWdnZXN0aW9ucyIsImRpc3BhdGNoZXIiLCJsZW5ndGgiLCJvcHRpb25zIiwia2V5cyIsImluY2x1ZGVTY29yZSIsInRocmVzaG9sZCIsImZ1c2VJbnN0YW5jZSIsImhhbmRsZVNlYXJjaCIsInF1ZXJ5IiwicmVzdWx0Iiwic2VhcmNoIiwibWFwIiwiaXRlbSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVCbHVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiY2VudGVyQmxvY2tTZWFyY2giLCJzdmciLCJzZWFyY2hTdmciLCJ1c2UiLCJocmVmIiwiaW5wdXQiLCJzZWFyY2hUZXh0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJvbkJsdXIiLCJzZWFyY2hCeSIsInVsIiwidHJhY2siLCJsaSIsInNlYXJjaEJ5UCIsIm5hbWUiLCJpZCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/SearchBar/SearchBar.tsx\n"));

/***/ })

});