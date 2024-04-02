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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SearchBar_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SearchBar.module.css */ \"(app-pages-browser)/./src/components/SearchBar/SearchBar.module.css\");\n/* harmony import */ var _SearchBar_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_SearchBar_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! fuse.js */ \"(app-pages-browser)/./node_modules/fuse.js/dist/fuse.mjs\");\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks */ \"(app-pages-browser)/./src/hooks.ts\");\n/* harmony import */ var _store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store/features/tracksSlice */ \"(app-pages-browser)/./src/store/features/tracksSlice.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst SearchBar = ()=>{\n    _s();\n    const dispatcher = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch)();\n    const defaultPlayList = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.tracks.playList);\n    const [fuse, setFuse] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    // initialize Fuse when trackList changes\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (defaultPlayList.length > 0) {\n            const options = {\n                keys: [\n                    \"name\"\n                ],\n                includeScore: true,\n                threshold: 0.3\n            };\n            const fuseInstance = new fuse_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"](defaultPlayList, options);\n            setFuse(fuseInstance);\n        }\n    }, [\n        defaultPlayList\n    ]);\n    // start the search\n    const handleSearch = (query)=>{\n        if (!fuse) return [];\n        // searchbar state empty\n        if (query === \"\") {\n            dispatcher((0,_store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_4__.setSearchPlayList)([]));\n            dispatcher((0,_store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_4__.setIsSearchFalse)());\n            (0,_store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_4__.setIsSearchFalse)();\n            return;\n        }\n        // define the search result\n        const result = fuse.search(query);\n        // save the search result to the storage\n        dispatcher((0,_store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_4__.setSearchPlayList)(result.map((item)=>item.item)));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_SearchBar_module_css__WEBPACK_IMPORTED_MODULE_6___default().centerBlockSearch), (_SearchBar_module_css__WEBPACK_IMPORTED_MODULE_6___default().search)),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                    className: (_SearchBar_module_css__WEBPACK_IMPORTED_MODULE_6___default().searchSvg),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"use\", {\n                        href: \"/img/icon/sprite.svg#icon-search\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\SearchBar\\\\SearchBar.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\SearchBar\\\\SearchBar.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    className: (_SearchBar_module_css__WEBPACK_IMPORTED_MODULE_6___default().searchText),\n                    type: \"text\",\n                    placeholder: \"Search\",\n                    onChange: (e)=>handleSearch(e.target.value)\n                }, void 0, false, {\n                    fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\SearchBar\\\\SearchBar.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\SearchBar\\\\SearchBar.tsx\",\n            lineNumber: 45,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\SearchBar\\\\SearchBar.tsx\",\n        lineNumber: 44,\n        columnNumber: 9\n    }, undefined);\n};\n_s(SearchBar, \"yF044V5ThhwIENpHtiHfpT/gbTQ=\", false, function() {\n    return [\n        _hooks__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch,\n        _hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector\n    ];\n});\n_c = SearchBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchBar);\nvar _c;\n$RefreshReg$(_c, \"SearchBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1NlYXJjaEJhci9TZWFyY2hCYXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBb0M7QUFDUTtBQUNPO0FBQ3hCO0FBQzhCO0FBRTBCO0FBRW5GLE1BQU1VLFlBQVk7O0lBQ2QsTUFBTUMsYUFBYUwsc0RBQWNBO0lBQ2pDLE1BQU1NLGtCQUFrQkwsc0RBQWNBLENBQUMsQ0FBQ00sUUFBVUEsTUFBTUMsTUFBTSxDQUFDQyxRQUFRO0lBQ3ZFLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHZCwrQ0FBUUEsQ0FBeUI7SUFFekQseUNBQXlDO0lBQ3pDQyxnREFBU0EsQ0FBQztRQUNOLElBQUlRLGdCQUFnQk0sTUFBTSxHQUFHLEdBQUc7WUFDNUIsTUFBTUMsVUFBVTtnQkFDWkMsTUFBTTtvQkFBQztpQkFBTztnQkFDZEMsY0FBYztnQkFDZEMsV0FBVztZQUNmO1lBQ0EsTUFBTUMsZUFBZSxJQUFJbEIsK0NBQUlBLENBQUNPLGlCQUFpQk87WUFDL0NGLFFBQVFNO1FBQ1o7SUFDSixHQUFHO1FBQUNYO0tBQWdCO0lBRXBCLG1CQUFtQjtJQUNuQixNQUFNWSxlQUFlLENBQUNDO1FBQ2xCLElBQUksQ0FBQ1QsTUFBTSxPQUFPLEVBQUU7UUFDcEIsd0JBQXdCO1FBQ3hCLElBQUlTLFVBQVUsSUFBSTtZQUNkZCxXQUFXRiw4RUFBaUJBLENBQUMsRUFBRTtZQUMvQkUsV0FBV0gsNkVBQWdCQTtZQUMzQkEsNkVBQWdCQTtZQUNoQjtRQUNKO1FBQ0EsMkJBQTJCO1FBQzNCLE1BQU1rQixTQUFTVixLQUFLVyxNQUFNLENBQUNGO1FBQzNCLHdDQUF3QztRQUN4Q2QsV0FBV0YsOEVBQWlCQSxDQUFDaUIsT0FBT0UsR0FBRyxDQUFDLENBQUNDLE9BQVNBLEtBQUtBLElBQUk7SUFDL0Q7SUFFQSxxQkFDSSw4REFBQ0M7a0JBQ0csNEVBQUNBO1lBQUlDLFdBQVcvQixpREFBVUEsQ0FBQ0MsZ0ZBQXdCLEVBQUVBLHFFQUFhOzs4QkFDOUQsOERBQUNnQztvQkFBSUYsV0FBVzlCLHdFQUFnQjs4QkFDNUIsNEVBQUNrQzt3QkFBSUMsTUFBSzs7Ozs7Ozs7Ozs7OEJBRWQsOERBQUNDO29CQUNHTixXQUFXOUIseUVBQWlCO29CQUM1QnNDLE1BQUs7b0JBQ0xDLGFBQVk7b0JBQ1pDLFVBQVUsQ0FBQ0MsSUFBTWxCLGFBQWFrQixFQUFFQyxNQUFNLENBQUNDLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2hFO0dBakRNbEM7O1FBQ2lCSixrREFBY0E7UUFDVEMsa0RBQWNBOzs7S0FGcENHO0FBbUROLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NlYXJjaEJhci9TZWFyY2hCYXIudHN4PzcwOWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vU2VhcmNoQmFyLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBGdXNlIGZyb20gJ2Z1c2UuanMnO1xyXG5pbXBvcnQgeyB1c2VBcHBEaXNwYXRjaCwgdXNlQXBwU2VsZWN0b3IgfSBmcm9tICdAL2hvb2tzJztcclxuaW1wb3J0IHsgdHJhY2tUeXBlIH0gZnJvbSAnQC90eXBlcy90eXBlcyc7XHJcbmltcG9ydCB7IHNldElzU2VhcmNoRmFsc2UsIHNldFNlYXJjaFBsYXlMaXN0IH0gZnJvbSAnQC9zdG9yZS9mZWF0dXJlcy90cmFja3NTbGljZSc7XHJcblxyXG5jb25zdCBTZWFyY2hCYXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkaXNwYXRjaGVyID0gdXNlQXBwRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IGRlZmF1bHRQbGF5TGlzdCA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudHJhY2tzLnBsYXlMaXN0KTtcclxuICAgIGNvbnN0IFtmdXNlLCBzZXRGdXNlXSA9IHVzZVN0YXRlPEZ1c2U8dHJhY2tUeXBlPiB8IG51bGw+KG51bGwpO1xyXG5cclxuICAgIC8vIGluaXRpYWxpemUgRnVzZSB3aGVuIHRyYWNrTGlzdCBjaGFuZ2VzXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChkZWZhdWx0UGxheUxpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAga2V5czogWyduYW1lJ10sXHJcbiAgICAgICAgICAgICAgICBpbmNsdWRlU2NvcmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB0aHJlc2hvbGQ6IDAuMyxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29uc3QgZnVzZUluc3RhbmNlID0gbmV3IEZ1c2UoZGVmYXVsdFBsYXlMaXN0LCBvcHRpb25zKTtcclxuICAgICAgICAgICAgc2V0RnVzZShmdXNlSW5zdGFuY2UpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtkZWZhdWx0UGxheUxpc3RdKTtcclxuXHJcbiAgICAvLyBzdGFydCB0aGUgc2VhcmNoXHJcbiAgICBjb25zdCBoYW5kbGVTZWFyY2ggPSAocXVlcnk6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGlmICghZnVzZSkgcmV0dXJuIFtdO1xyXG4gICAgICAgIC8vIHNlYXJjaGJhciBzdGF0ZSBlbXB0eVxyXG4gICAgICAgIGlmIChxdWVyeSA9PT0gJycpIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2hlcihzZXRTZWFyY2hQbGF5TGlzdChbXSkpO1xyXG4gICAgICAgICAgICBkaXNwYXRjaGVyKHNldElzU2VhcmNoRmFsc2UoKSlcclxuICAgICAgICAgICAgc2V0SXNTZWFyY2hGYWxzZSgpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZGVmaW5lIHRoZSBzZWFyY2ggcmVzdWx0XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gZnVzZS5zZWFyY2gocXVlcnkpO1xyXG4gICAgICAgIC8vIHNhdmUgdGhlIHNlYXJjaCByZXN1bHQgdG8gdGhlIHN0b3JhZ2VcclxuICAgICAgICBkaXNwYXRjaGVyKHNldFNlYXJjaFBsYXlMaXN0KHJlc3VsdC5tYXAoKGl0ZW0pID0+IGl0ZW0uaXRlbSkpKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMuY2VudGVyQmxvY2tTZWFyY2gsIHN0eWxlcy5zZWFyY2gpfT5cclxuICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoU3ZnfT5cclxuICAgICAgICAgICAgICAgICAgICA8dXNlIGhyZWY9XCIvaW1nL2ljb24vc3ByaXRlLnN2ZyNpY29uLXNlYXJjaFwiPjwvdXNlPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hUZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVTZWFyY2goZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoQmFyO1xyXG4iXSwibmFtZXMiOlsiY2xhc3NOYW1lcyIsInN0eWxlcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJGdXNlIiwidXNlQXBwRGlzcGF0Y2giLCJ1c2VBcHBTZWxlY3RvciIsInNldElzU2VhcmNoRmFsc2UiLCJzZXRTZWFyY2hQbGF5TGlzdCIsIlNlYXJjaEJhciIsImRpc3BhdGNoZXIiLCJkZWZhdWx0UGxheUxpc3QiLCJzdGF0ZSIsInRyYWNrcyIsInBsYXlMaXN0IiwiZnVzZSIsInNldEZ1c2UiLCJsZW5ndGgiLCJvcHRpb25zIiwia2V5cyIsImluY2x1ZGVTY29yZSIsInRocmVzaG9sZCIsImZ1c2VJbnN0YW5jZSIsImhhbmRsZVNlYXJjaCIsInF1ZXJ5IiwicmVzdWx0Iiwic2VhcmNoIiwibWFwIiwiaXRlbSIsImRpdiIsImNsYXNzTmFtZSIsImNlbnRlckJsb2NrU2VhcmNoIiwic3ZnIiwic2VhcmNoU3ZnIiwidXNlIiwiaHJlZiIsImlucHV0Iiwic2VhcmNoVGV4dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/SearchBar/SearchBar.tsx\n"));

/***/ })

});