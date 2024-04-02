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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SearchBar_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SearchBar.module.css */ \"(app-pages-browser)/./src/components/SearchBar/SearchBar.module.css\");\n/* harmony import */ var _SearchBar_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_SearchBar_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! fuse.js */ \"(app-pages-browser)/./node_modules/fuse.js/dist/fuse.mjs\");\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks */ \"(app-pages-browser)/./src/hooks.ts\");\n/* harmony import */ var _store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store/features/tracksSlice */ \"(app-pages-browser)/./src/store/features/tracksSlice.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst SearchBar = ()=>{\n    _s();\n    const playList = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.tracks.playList);\n    const [fuse, setFuse] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [searchResults, setSearchResults] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [showSuggestions, setShowSuggestions] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const dispatcher = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch)();\n    // initialize Fuse when trackList changes\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (playList.length > 0) {\n            const options = {\n                keys: [\n                    \"name\"\n                ],\n                includeScore: true,\n                threshold: 0.3\n            };\n            const fuseInstance = new fuse_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"](playList, options);\n            setFuse(fuseInstance);\n        }\n    }, [\n        playList\n    ]);\n    // start search\n    const handleSearch = (query)=>{\n        if (!fuse) return [];\n        const result = fuse.search(query);\n        setSearchResults(result.map((item)=>item.item));\n        setShowSuggestions(true);\n        dispatcher((0,_store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_4__.setPlayList)(result.map((item)=>item.item)));\n        console.log(object);\n    };\n    // exit the searchbar on clicking out\n    const handleBlur = ()=>{\n        setShowSuggestions(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_SearchBar_module_css__WEBPACK_IMPORTED_MODULE_6___default().centerBlockSearch), (_SearchBar_module_css__WEBPACK_IMPORTED_MODULE_6___default().search)),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                    className: (_SearchBar_module_css__WEBPACK_IMPORTED_MODULE_6___default().searchSvg),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"use\", {\n                        href: \"/img/icon/sprite.svg#icon-search\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\SearchBar\\\\SearchBar.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\SearchBar\\\\SearchBar.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    className: (_SearchBar_module_css__WEBPACK_IMPORTED_MODULE_6___default().searchText),\n                    type: \"text\",\n                    placeholder: \"Search\",\n                    onChange: (e)=>handleSearch(e.target.value),\n                    onBlur: handleBlur\n                }, void 0, false, {\n                    fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\SearchBar\\\\SearchBar.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 17\n                }, undefined),\n                showSuggestions && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_SearchBar_module_css__WEBPACK_IMPORTED_MODULE_6___default().searchBy),\n                    children: searchResults.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: searchResults.map((track)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: (_SearchBar_module_css__WEBPACK_IMPORTED_MODULE_6___default().searchByP),\n                                children: track.name\n                            }, track.id, false, {\n                                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\SearchBar\\\\SearchBar.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 37\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\SearchBar\\\\SearchBar.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 29\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_SearchBar_module_css__WEBPACK_IMPORTED_MODULE_6___default().searchByP),\n                        children: \"No tracks found\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\SearchBar\\\\SearchBar.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 29\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\SearchBar\\\\SearchBar.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 21\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\SearchBar\\\\SearchBar.tsx\",\n            lineNumber: 45,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\SearchBar\\\\SearchBar.tsx\",\n        lineNumber: 44,\n        columnNumber: 9\n    }, undefined);\n};\n_s(SearchBar, \"1CIKVDdoMC+OFKjjh0T7sjpzr6c=\", false, function() {\n    return [\n        _hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        _hooks__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch\n    ];\n});\n_c = SearchBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchBar);\nvar _c;\n$RefreshReg$(_c, \"SearchBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1NlYXJjaEJhci9TZWFyY2hCYXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBb0M7QUFDUTtBQUNPO0FBQ3hCO0FBQzhCO0FBRUU7QUFFM0QsTUFBTVMsWUFBWTs7SUFDZCxNQUFNQyxXQUFXSCxzREFBY0EsQ0FBQyxDQUFDSSxRQUFVQSxNQUFNQyxNQUFNLENBQUNGLFFBQVE7SUFDaEUsTUFBTSxDQUFDRyxNQUFNQyxRQUFRLEdBQUdYLCtDQUFRQSxDQUF5QjtJQUN6RCxNQUFNLENBQUNZLGVBQWVDLGlCQUFpQixHQUFHYiwrQ0FBUUEsQ0FBYyxFQUFFO0lBQ2xFLE1BQU0sQ0FBQ2MsaUJBQWlCQyxtQkFBbUIsR0FBR2YsK0NBQVFBLENBQUM7SUFFdkQsTUFBTWdCLGFBQWFiLHNEQUFjQTtJQUVqQyx5Q0FBeUM7SUFDekNGLGdEQUFTQSxDQUFDO1FBQ04sSUFBSU0sU0FBU1UsTUFBTSxHQUFHLEdBQUc7WUFDckIsTUFBTUMsVUFBVTtnQkFDWkMsTUFBTTtvQkFBQztpQkFBTztnQkFDZEMsY0FBYztnQkFDZEMsV0FBVztZQUNmO1lBQ0EsTUFBTUMsZUFBZSxJQUFJcEIsK0NBQUlBLENBQUNLLFVBQVVXO1lBQ3hDUCxRQUFRVztRQUNaO0lBQ0osR0FBRztRQUFDZjtLQUFTO0lBQ2IsZUFBZTtJQUNmLE1BQU1nQixlQUFlLENBQUNDO1FBQ2xCLElBQUksQ0FBQ2QsTUFBTSxPQUFPLEVBQUU7UUFDcEIsTUFBTWUsU0FBU2YsS0FBS2dCLE1BQU0sQ0FBQ0Y7UUFDM0JYLGlCQUFpQlksT0FBT0UsR0FBRyxDQUFDLENBQUNDLE9BQVNBLEtBQUtBLElBQUk7UUFDL0NiLG1CQUFtQjtRQUNuQkMsV0FBV1gsd0VBQVdBLENBQUNvQixPQUFPRSxHQUFHLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS0EsSUFBSTtRQUNyREMsUUFBUUMsR0FBRyxDQUFDQztJQUNoQjtJQUNBLHFDQUFxQztJQUNyQyxNQUFNQyxhQUFhO1FBQ2ZqQixtQkFBbUI7SUFDdkI7SUFFQSxxQkFDSSw4REFBQ2tCO2tCQUNHLDRFQUFDQTtZQUFJQyxXQUFXckMsaURBQVVBLENBQUNDLGdGQUF3QixFQUFFQSxxRUFBYTs7OEJBQzlELDhEQUFDc0M7b0JBQUlGLFdBQVdwQyx3RUFBZ0I7OEJBQzVCLDRFQUFDd0M7d0JBQUlDLE1BQUs7Ozs7Ozs7Ozs7OzhCQUVkLDhEQUFDQztvQkFDR04sV0FBV3BDLHlFQUFpQjtvQkFDNUI0QyxNQUFLO29CQUNMQyxhQUFZO29CQUNaQyxVQUFVLENBQUNDLElBQU10QixhQUFhc0IsRUFBRUMsTUFBTSxDQUFDQyxLQUFLO29CQUM1Q0MsUUFBUWhCOzs7Ozs7Z0JBRVhsQixpQ0FDRyw4REFBQ21CO29CQUFJQyxXQUFXcEMsdUVBQWU7OEJBQzFCYyxjQUFjSyxNQUFNLEdBQUcsa0JBQ3BCLDhEQUFDaUM7a0NBQ0l0QyxjQUFjZSxHQUFHLENBQUMsQ0FBQ3dCLHNCQUNoQiw4REFBQ0M7Z0NBRUdsQixXQUFXcEMsd0VBQWdCOzBDQUUxQnFELE1BQU1HLElBQUk7K0JBSE5ILE1BQU1JLEVBQUU7Ozs7Ozs7OztrREFRekIsOERBQUNDO3dCQUFFdEIsV0FBV3BDLHdFQUFnQjtrQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU81RDtHQXBFTVE7O1FBQ2VGLGtEQUFjQTtRQUtaRCxrREFBY0E7OztLQU4vQkc7QUFzRU4sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2VhcmNoQmFyL1NlYXJjaEJhci50c3g/NzA5YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9TZWFyY2hCYXIubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEZ1c2UgZnJvbSAnZnVzZS5qcyc7XHJcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoLCB1c2VBcHBTZWxlY3RvciB9IGZyb20gJ0AvaG9va3MnO1xyXG5pbXBvcnQgeyB0cmFja1R5cGUgfSBmcm9tICdAL3R5cGVzL3R5cGVzJztcclxuaW1wb3J0IHsgc2V0UGxheUxpc3QgfSBmcm9tICdAL3N0b3JlL2ZlYXR1cmVzL3RyYWNrc1NsaWNlJztcclxuXHJcbmNvbnN0IFNlYXJjaEJhciA9ICgpID0+IHtcclxuICAgIGNvbnN0IHBsYXlMaXN0ID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS50cmFja3MucGxheUxpc3QpO1xyXG4gICAgY29uc3QgW2Z1c2UsIHNldEZ1c2VdID0gdXNlU3RhdGU8RnVzZTx0cmFja1R5cGU+IHwgbnVsbD4obnVsbCk7XHJcbiAgICBjb25zdCBbc2VhcmNoUmVzdWx0cywgc2V0U2VhcmNoUmVzdWx0c10gPSB1c2VTdGF0ZTx0cmFja1R5cGVbXT4oW10pO1xyXG4gICAgY29uc3QgW3Nob3dTdWdnZXN0aW9ucywgc2V0U2hvd1N1Z2dlc3Rpb25zXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBkaXNwYXRjaGVyID0gdXNlQXBwRGlzcGF0Y2goKTtcclxuXHJcbiAgICAvLyBpbml0aWFsaXplIEZ1c2Ugd2hlbiB0cmFja0xpc3QgY2hhbmdlc1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAocGxheUxpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAga2V5czogWyduYW1lJ10sXHJcbiAgICAgICAgICAgICAgICBpbmNsdWRlU2NvcmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB0aHJlc2hvbGQ6IDAuMyxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29uc3QgZnVzZUluc3RhbmNlID0gbmV3IEZ1c2UocGxheUxpc3QsIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICBzZXRGdXNlKGZ1c2VJbnN0YW5jZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3BsYXlMaXN0XSk7XHJcbiAgICAvLyBzdGFydCBzZWFyY2hcclxuICAgIGNvbnN0IGhhbmRsZVNlYXJjaCA9IChxdWVyeTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgaWYgKCFmdXNlKSByZXR1cm4gW107XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gZnVzZS5zZWFyY2gocXVlcnkpO1xyXG4gICAgICAgIHNldFNlYXJjaFJlc3VsdHMocmVzdWx0Lm1hcCgoaXRlbSkgPT4gaXRlbS5pdGVtKSk7XHJcbiAgICAgICAgc2V0U2hvd1N1Z2dlc3Rpb25zKHRydWUpO1xyXG4gICAgICAgIGRpc3BhdGNoZXIoc2V0UGxheUxpc3QocmVzdWx0Lm1hcCgoaXRlbSkgPT4gaXRlbS5pdGVtKSkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG9iamVjdCk7XHJcbiAgICB9O1xyXG4gICAgLy8gZXhpdCB0aGUgc2VhcmNoYmFyIG9uIGNsaWNraW5nIG91dFxyXG4gICAgY29uc3QgaGFuZGxlQmx1ciA9ICgpID0+IHtcclxuICAgICAgICBzZXRTaG93U3VnZ2VzdGlvbnMoZmFsc2UpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5jZW50ZXJCbG9ja1NlYXJjaCwgc3R5bGVzLnNlYXJjaCl9PlxyXG4gICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hTdmd9PlxyXG4gICAgICAgICAgICAgICAgICAgIDx1c2UgaHJlZj1cIi9pbWcvaWNvbi9zcHJpdGUuc3ZnI2ljb24tc2VhcmNoXCI+PC91c2U+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaFRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZVNlYXJjaChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIHtzaG93U3VnZ2VzdGlvbnMgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoQnl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c2VhcmNoUmVzdWx0cy5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWFyY2hSZXN1bHRzLm1hcCgodHJhY2spID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3RyYWNrLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoQnlQfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dHJhY2submFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hCeVB9Pk5vIHRyYWNrcyBmb3VuZDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEJhcjtcclxuIl0sIm5hbWVzIjpbImNsYXNzTmFtZXMiLCJzdHlsZXMiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiRnVzZSIsInVzZUFwcERpc3BhdGNoIiwidXNlQXBwU2VsZWN0b3IiLCJzZXRQbGF5TGlzdCIsIlNlYXJjaEJhciIsInBsYXlMaXN0Iiwic3RhdGUiLCJ0cmFja3MiLCJmdXNlIiwic2V0RnVzZSIsInNlYXJjaFJlc3VsdHMiLCJzZXRTZWFyY2hSZXN1bHRzIiwic2hvd1N1Z2dlc3Rpb25zIiwic2V0U2hvd1N1Z2dlc3Rpb25zIiwiZGlzcGF0Y2hlciIsImxlbmd0aCIsIm9wdGlvbnMiLCJrZXlzIiwiaW5jbHVkZVNjb3JlIiwidGhyZXNob2xkIiwiZnVzZUluc3RhbmNlIiwiaGFuZGxlU2VhcmNoIiwicXVlcnkiLCJyZXN1bHQiLCJzZWFyY2giLCJtYXAiLCJpdGVtIiwiY29uc29sZSIsImxvZyIsIm9iamVjdCIsImhhbmRsZUJsdXIiLCJkaXYiLCJjbGFzc05hbWUiLCJjZW50ZXJCbG9ja1NlYXJjaCIsInN2ZyIsInNlYXJjaFN2ZyIsInVzZSIsImhyZWYiLCJpbnB1dCIsInNlYXJjaFRleHQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uQmx1ciIsInNlYXJjaEJ5IiwidWwiLCJ0cmFjayIsImxpIiwic2VhcmNoQnlQIiwibmFtZSIsImlkIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/SearchBar/SearchBar.tsx\n"));

/***/ })

});