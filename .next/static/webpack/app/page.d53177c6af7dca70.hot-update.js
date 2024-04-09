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

/***/ "(app-pages-browser)/./src/components/FilterBlock/FilterBlock.tsx":
/*!****************************************************!*\
  !*** ./src/components/FilterBlock/FilterBlock.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FilterBlock.module.css */ \"(app-pages-browser)/./src/components/FilterBlock/FilterBlock.module.css\");\n/* harmony import */ var _FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _FilterBlockItem_FilterBlockItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../FilterBlockItem/FilterBlockItem */ \"(app-pages-browser)/./src/components/FilterBlockItem/FilterBlockItem.tsx\");\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/hooks */ \"(app-pages-browser)/./src/hooks.ts\");\n/* harmony import */ var _store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/store/features/tracksSlice */ \"(app-pages-browser)/./src/store/features/tracksSlice.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst FilterBlock = ()=>{\n    _s();\n    const dispatcher = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useAppDispatch)();\n    const playList = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useAppSelector)((state)=>state.tracks.playList);\n    const selectedAuthors = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useAppSelector)((state)=>state.tracks.activeFilters.authors);\n    const selectedGenres = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useAppSelector)((state)=>state.tracks.activeFilters.genres);\n    const [localActiveFilter, setLocalActiveFilter] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const sortByYearValues = [\n        \"Default\",\n        \"New first\",\n        \"Old first\"\n    ];\n    // year filter\n    const toggleReleaseYearFilter = (option)=>{\n        dispatcher((0,_store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_5__.setActiveFilter)({\n            release_dates: option\n        }));\n    };\n    // artist filter\n    const toggleSelectedAuthors = (author)=>{\n        dispatcher((0,_store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_5__.setActiveFilter)({\n            authors: selectedAuthors.includes(author) ? selectedAuthors.filter((item)=>item !== author) : [\n                ...selectedAuthors,\n                author\n            ]\n        }));\n    };\n    // genre filter\n    const toggleSelectedGenres = (genre)=>{\n        dispatcher((0,_store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_5__.setActiveFilter)({\n            genres: selectedGenres.includes(genre) ? selectedGenres.filter((item)=>item !== genre) : [\n                ...selectedGenres,\n                genre\n            ]\n        }));\n    };\n    // discard filters\n    const discardFilters = ()=>{\n        dispatcher((0,_store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_5__.clearActiveFilters)());\n    };\n    // get unique values for each filter\n    const getUniqueValues = (property)=>{\n        return playList ? Array.from(new Set(playList.map((track)=>track[property]))).filter((value)=>typeof value === \"string\" && value !== \"-\").map((value)=>value).sort((a, b)=>a.localeCompare(b)) : [];\n    };\n    // useMemo\n    const memoizedGetUniqueValues = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{\n        if (localActiveFilter) {\n            return getUniqueValues(localActiveFilter);\n        }\n        return [];\n    }, [\n        localActiveFilter,\n        playList\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().centerBlockFilter), (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().filter)),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().filterTitle),\n                children: \"Search for:\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterBlockItem_FilterBlockItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onClick: ()=>setLocalActiveFilter(localActiveFilter === \"author\" ? null : \"author\"),\n                isOpened: localActiveFilter === \"author\",\n                list: memoizedGetUniqueValues,\n                toggleSelectedOption: toggleSelectedAuthors,\n                children: \"Artist\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterBlockItem_FilterBlockItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onClick: ()=>setLocalActiveFilter(localActiveFilter === \"release_date\" ? null : \"release_date\"),\n                isOpened: localActiveFilter === \"release_date\",\n                list: sortByYearValues,\n                toggleSelectedOption: toggleReleaseYearFilter,\n                children: \"Year\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterBlockItem_FilterBlockItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onClick: ()=>setLocalActiveFilter(localActiveFilter === \"genre\" ? null : \"genre\"),\n                isOpened: localActiveFilter === \"genre\",\n                list: memoizedGetUniqueValues,\n                toggleSelectedOption: toggleSelectedGenres,\n                children: \"Genre\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>discardFilters(),\n                children: \"Discard filters\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FilterBlock, \"iyxi9/he5FkwWSBXs35eiY+kTrU=\", false, function() {\n    return [\n        _hooks__WEBPACK_IMPORTED_MODULE_4__.useAppDispatch,\n        _hooks__WEBPACK_IMPORTED_MODULE_4__.useAppSelector,\n        _hooks__WEBPACK_IMPORTED_MODULE_4__.useAppSelector,\n        _hooks__WEBPACK_IMPORTED_MODULE_4__.useAppSelector\n    ];\n});\n_c = FilterBlock;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FilterBlock);\nvar _c;\n$RefreshReg$(_c, \"FilterBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0ZpbHRlckJsb2NrL0ZpbHRlckJsb2NrLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRW9DO0FBQ1U7QUFDRztBQUNnQjtBQUNSO0FBRTBCO0FBRW5GLE1BQU1VLGNBQWM7O0lBQ2xCLE1BQU1DLGFBQWFMLHNEQUFjQTtJQUNqQyxNQUFNTSxXQUFXTCxzREFBY0EsQ0FBQyxDQUFDTSxRQUFVQSxNQUFNQyxNQUFNLENBQUNGLFFBQVE7SUFDaEUsTUFBTUcsa0JBQWtCUixzREFBY0EsQ0FBQyxDQUFDTSxRQUFVQSxNQUFNQyxNQUFNLENBQUNFLGFBQWEsQ0FBQ0MsT0FBTztJQUNwRixNQUFNQyxpQkFBaUJYLHNEQUFjQSxDQUFDLENBQUNNLFFBQVVBLE1BQU1DLE1BQU0sQ0FBQ0UsYUFBYSxDQUFDRyxNQUFNO0lBQ2xGLE1BQU0sQ0FBQ0MsbUJBQW1CQyxxQkFBcUIsR0FBR2pCLCtDQUFRQSxDQUF5QjtJQUNuRixNQUFNa0IsbUJBQW1CO1FBQUM7UUFBVztRQUFhO0tBQVk7SUFFOUQsY0FBYztJQUNkLE1BQU1DLDBCQUEwQixDQUFDQztRQUMvQmIsV0FBV0YsNEVBQWVBLENBQUM7WUFDekJnQixlQUFlRDtRQUFPO0lBQzFCO0lBQ0EsZ0JBQWdCO0lBQ2hCLE1BQU1FLHdCQUF3QixDQUFDQztRQUM3QmhCLFdBQVdGLDRFQUFlQSxDQUFDO1lBQ3pCUSxTQUFTRixnQkFBZ0JhLFFBQVEsQ0FBQ0QsVUFBVVosZ0JBQWdCYyxNQUFNLENBQUMsQ0FBQ0MsT0FBU0EsU0FBU0gsVUFBVTttQkFBS1o7Z0JBQWlCWTthQUFRO1FBQ2hJO0lBQ0Y7SUFDQSxlQUFlO0lBQ2YsTUFBTUksdUJBQXVCLENBQUNDO1FBQzVCckIsV0FBV0YsNEVBQWVBLENBQUM7WUFDekJVLFFBQVFELGVBQWVVLFFBQVEsQ0FBQ0ksU0FBU2QsZUFBZVcsTUFBTSxDQUFDLENBQUNDLE9BQVNBLFNBQVNFLFNBQVM7bUJBQUtkO2dCQUFnQmM7YUFBTztRQUN6SDtJQUNGO0lBQ0Esa0JBQWtCO0lBQ2xCLE1BQU1DLGlCQUFpQjtRQUNyQnRCLFdBQVdILCtFQUFrQkE7SUFDL0I7SUFFQSxvQ0FBb0M7SUFDcEMsTUFBTTBCLGtCQUFrQixDQUFDQztRQUNuQixPQUFPdkIsV0FDSHdCLE1BQU1DLElBQUksQ0FBQyxJQUFJQyxJQUFJMUIsU0FBUzJCLEdBQUcsQ0FBQyxDQUFDQyxRQUFxQkEsS0FBSyxDQUFDTCxTQUFTLElBQ3BFTixNQUFNLENBQUMsQ0FBQ1ksUUFBVSxPQUFPQSxVQUFVLFlBQVlBLFVBQVUsS0FDekRGLEdBQUcsQ0FBQyxDQUFDRSxRQUFVQSxPQUNmQyxJQUFJLENBQUMsQ0FBQ0MsR0FBR0MsSUFBTUQsRUFBRUUsYUFBYSxDQUFDRCxNQUNoQyxFQUFFO0lBQ1o7SUFFQSxVQUFVO0lBQ1YsTUFBTUUsMEJBQTBCM0MsOENBQU9BLENBQUM7UUFDdEMsSUFBSWlCLG1CQUFtQjtZQUNyQixPQUFPYyxnQkFBZ0JkO1FBQ3pCO1FBQ0EsT0FBTyxFQUFFO0lBQ1gsR0FBRztRQUFDQTtRQUFtQlI7S0FBUztJQUVoQyxxQkFDRSw4REFBQ21DO1FBQUlDLFdBQVdoRCxpREFBVUEsQ0FBQ0Msa0ZBQXdCLEVBQUVBLHVFQUFhOzswQkFDaEUsOERBQUM4QztnQkFBSUMsV0FBVy9DLDRFQUFrQjswQkFBRTs7Ozs7OzBCQUVwQyw4REFBQ0ksd0VBQWVBO2dCQUNkOEMsU0FBUyxJQUFNOUIscUJBQXFCRCxzQkFBc0IsV0FBVyxPQUFPO2dCQUM1RWdDLFVBQVVoQyxzQkFBc0I7Z0JBQ2hDaUMsTUFBTVA7Z0JBQ05RLHNCQUFzQjVCOzBCQUNyQjs7Ozs7OzBCQUlILDhEQUFDckIsd0VBQWVBO2dCQUNkOEMsU0FBUyxJQUFNOUIscUJBQXFCRCxzQkFBc0IsaUJBQWlCLE9BQU87Z0JBQ2xGZ0MsVUFBVWhDLHNCQUFzQjtnQkFDaENpQyxNQUFNL0I7Z0JBQ05nQyxzQkFBc0IvQjswQkFDdkI7Ozs7OzswQkFJRCw4REFBQ2xCLHdFQUFlQTtnQkFDZDhDLFNBQVMsSUFBTTlCLHFCQUFxQkQsc0JBQXNCLFVBQVUsT0FBTztnQkFDM0VnQyxVQUFVaEMsc0JBQXNCO2dCQUNoQ2lDLE1BQU1QO2dCQUNOUSxzQkFBc0J2QjswQkFDckI7Ozs7OzswQkFJSCw4REFBQ3dCO2dCQUFPSixTQUFTLElBQU1sQjswQkFBa0I7Ozs7Ozs7Ozs7OztBQU0vQztHQXJGTXZCOztRQUNlSixrREFBY0E7UUFDaEJDLGtEQUFjQTtRQUNQQSxrREFBY0E7UUFDZkEsa0RBQWNBOzs7S0FKakNHO0FBdUZOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0ZpbHRlckJsb2NrL0ZpbHRlckJsb2NrLnRzeD9iNTZjIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5cbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0ZpbHRlckJsb2NrLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGaWx0ZXJCbG9ja0l0ZW0gZnJvbSAnLi4vRmlsdGVyQmxvY2tJdGVtL0ZpbHRlckJsb2NrSXRlbSc7XG5pbXBvcnQgeyB1c2VBcHBEaXNwYXRjaCwgdXNlQXBwU2VsZWN0b3IgfSBmcm9tICdAL2hvb2tzJztcbmltcG9ydCB7IHRyYWNrVHlwZSB9IGZyb20gJ0AvdHlwZXMvdHlwZXMnO1xuaW1wb3J0IHsgY2xlYXJBY3RpdmVGaWx0ZXJzLCBzZXRBY3RpdmVGaWx0ZXIgfSBmcm9tICdAL3N0b3JlL2ZlYXR1cmVzL3RyYWNrc1NsaWNlJztcblxuY29uc3QgRmlsdGVyQmxvY2sgPSAoKSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoZXIgPSB1c2VBcHBEaXNwYXRjaCgpO1xuICBjb25zdCBwbGF5TGlzdCA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudHJhY2tzLnBsYXlMaXN0KTtcbiAgY29uc3Qgc2VsZWN0ZWRBdXRob3JzID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS50cmFja3MuYWN0aXZlRmlsdGVycy5hdXRob3JzKTtcbiAgY29uc3Qgc2VsZWN0ZWRHZW5yZXMgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnRyYWNrcy5hY3RpdmVGaWx0ZXJzLmdlbnJlcyk7XG4gIGNvbnN0IFtsb2NhbEFjdGl2ZUZpbHRlciwgc2V0TG9jYWxBY3RpdmVGaWx0ZXJdID0gdXNlU3RhdGU8a2V5b2YgdHJhY2tUeXBlIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IHNvcnRCeVllYXJWYWx1ZXMgPSBbXCJEZWZhdWx0XCIsIFwiTmV3IGZpcnN0XCIsIFwiT2xkIGZpcnN0XCJdO1xuXG4gIC8vIHllYXIgZmlsdGVyXG4gIGNvbnN0IHRvZ2dsZVJlbGVhc2VZZWFyRmlsdGVyID0gKG9wdGlvbjogc3RyaW5nKSA9PiB7XG4gICAgZGlzcGF0Y2hlcihzZXRBY3RpdmVGaWx0ZXIoeyBcbiAgICAgIHJlbGVhc2VfZGF0ZXM6IG9wdGlvbiB9KSk7XG4gIH07XG4gIC8vIGFydGlzdCBmaWx0ZXJcbiAgY29uc3QgdG9nZ2xlU2VsZWN0ZWRBdXRob3JzID0gKGF1dGhvcjogc3RyaW5nKSA9PiB7XG4gICAgZGlzcGF0Y2hlcihzZXRBY3RpdmVGaWx0ZXIoe1xuICAgICAgYXV0aG9yczogc2VsZWN0ZWRBdXRob3JzLmluY2x1ZGVzKGF1dGhvcikgPyBzZWxlY3RlZEF1dGhvcnMuZmlsdGVyKChpdGVtKSA9PiBpdGVtICE9PSBhdXRob3IpIDogWyAuLi5zZWxlY3RlZEF1dGhvcnMsIGF1dGhvciBdLFxuICAgIH0pKVxuICB9O1xuICAvLyBnZW5yZSBmaWx0ZXJcbiAgY29uc3QgdG9nZ2xlU2VsZWN0ZWRHZW5yZXMgPSAoZ2VucmU6IHN0cmluZykgPT4ge1xuICAgIGRpc3BhdGNoZXIoc2V0QWN0aXZlRmlsdGVyKHtcbiAgICAgIGdlbnJlczogc2VsZWN0ZWRHZW5yZXMuaW5jbHVkZXMoZ2VucmUpID8gc2VsZWN0ZWRHZW5yZXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtICE9PSBnZW5yZSkgOiBbIC4uLnNlbGVjdGVkR2VucmVzLCBnZW5yZSBdLFxuICAgIH0pKVxuICB9O1xuICAvLyBkaXNjYXJkIGZpbHRlcnNcbiAgY29uc3QgZGlzY2FyZEZpbHRlcnMgPSAoKSA9PiB7XG4gICAgZGlzcGF0Y2hlcihjbGVhckFjdGl2ZUZpbHRlcnMoKSlcbiAgfVxuICBcbiAgLy8gZ2V0IHVuaXF1ZSB2YWx1ZXMgZm9yIGVhY2ggZmlsdGVyXG4gIGNvbnN0IGdldFVuaXF1ZVZhbHVlcyA9IChwcm9wZXJ0eToga2V5b2YgdHJhY2tUeXBlKSA9PiB7XG4gICAgICAgIHJldHVybiBwbGF5TGlzdFxuICAgICAgICAgID8gQXJyYXkuZnJvbShuZXcgU2V0KHBsYXlMaXN0Lm1hcCgodHJhY2s6IHRyYWNrVHlwZSkgPT4gdHJhY2tbcHJvcGVydHldKSkpXG4gICAgICAgICAgICAuZmlsdGVyKCh2YWx1ZSkgPT4gdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiICYmIHZhbHVlICE9PSBcIi1cIilcbiAgICAgICAgICAgIC5tYXAoKHZhbHVlKSA9PiB2YWx1ZSBhcyBzdHJpbmcpXG4gICAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYS5sb2NhbGVDb21wYXJlKGIpKVxuICAgICAgICAgIDogW107XG4gIH07XG4gIFxuICAvLyB1c2VNZW1vXG4gIGNvbnN0IG1lbW9pemVkR2V0VW5pcXVlVmFsdWVzID0gdXNlTWVtbygoKSA9PiB7XG4gICAgaWYgKGxvY2FsQWN0aXZlRmlsdGVyKSB7XG4gICAgICByZXR1cm4gZ2V0VW5pcXVlVmFsdWVzKGxvY2FsQWN0aXZlRmlsdGVyKTtcbiAgICB9XG4gICAgcmV0dXJuIFtdO1xuICB9LCBbbG9jYWxBY3RpdmVGaWx0ZXIsIHBsYXlMaXN0XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMuY2VudGVyQmxvY2tGaWx0ZXIsIHN0eWxlcy5maWx0ZXIpfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmlsdGVyVGl0bGV9PlNlYXJjaCBmb3I6PC9kaXY+XG5cbiAgICAgIDxGaWx0ZXJCbG9ja0l0ZW1cbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TG9jYWxBY3RpdmVGaWx0ZXIobG9jYWxBY3RpdmVGaWx0ZXIgPT09ICdhdXRob3InID8gbnVsbCA6ICdhdXRob3InKX1cbiAgICAgICAgaXNPcGVuZWQ9e2xvY2FsQWN0aXZlRmlsdGVyID09PSAnYXV0aG9yJ31cbiAgICAgICAgbGlzdD17bWVtb2l6ZWRHZXRVbmlxdWVWYWx1ZXN9XG4gICAgICAgIHRvZ2dsZVNlbGVjdGVkT3B0aW9uPXt0b2dnbGVTZWxlY3RlZEF1dGhvcnN9XG4gICAgICAgID5cbiAgICAgICAgQXJ0aXN0XG4gICAgICA8L0ZpbHRlckJsb2NrSXRlbT5cblxuICAgICAgPEZpbHRlckJsb2NrSXRlbVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRMb2NhbEFjdGl2ZUZpbHRlcihsb2NhbEFjdGl2ZUZpbHRlciA9PT0gJ3JlbGVhc2VfZGF0ZScgPyBudWxsIDogJ3JlbGVhc2VfZGF0ZScpfVxuICAgICAgICBpc09wZW5lZD17bG9jYWxBY3RpdmVGaWx0ZXIgPT09ICdyZWxlYXNlX2RhdGUnfVxuICAgICAgICBsaXN0PXtzb3J0QnlZZWFyVmFsdWVzfVxuICAgICAgICB0b2dnbGVTZWxlY3RlZE9wdGlvbj17dG9nZ2xlUmVsZWFzZVllYXJGaWx0ZXJ9XG4gICAgICA+XG4gICAgICAgIFllYXJcbiAgICAgIDwvRmlsdGVyQmxvY2tJdGVtPlxuXG4gICAgICA8RmlsdGVyQmxvY2tJdGVtXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldExvY2FsQWN0aXZlRmlsdGVyKGxvY2FsQWN0aXZlRmlsdGVyID09PSAnZ2VucmUnID8gbnVsbCA6ICdnZW5yZScpfVxuICAgICAgICBpc09wZW5lZD17bG9jYWxBY3RpdmVGaWx0ZXIgPT09ICdnZW5yZSd9XG4gICAgICAgIGxpc3Q9e21lbW9pemVkR2V0VW5pcXVlVmFsdWVzfVxuICAgICAgICB0b2dnbGVTZWxlY3RlZE9wdGlvbj17dG9nZ2xlU2VsZWN0ZWRHZW5yZXN9XG4gICAgICAgID5cbiAgICAgICAgR2VucmVcbiAgICAgIDwvRmlsdGVyQmxvY2tJdGVtPlxuICAgICAgXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGRpc2NhcmRGaWx0ZXJzKCl9PlxuICAgICAgICBEaXNjYXJkIGZpbHRlcnNcbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJCbG9jaztcbiJdLCJuYW1lcyI6WyJjbGFzc05hbWVzIiwic3R5bGVzIiwiUmVhY3QiLCJ1c2VNZW1vIiwidXNlU3RhdGUiLCJGaWx0ZXJCbG9ja0l0ZW0iLCJ1c2VBcHBEaXNwYXRjaCIsInVzZUFwcFNlbGVjdG9yIiwiY2xlYXJBY3RpdmVGaWx0ZXJzIiwic2V0QWN0aXZlRmlsdGVyIiwiRmlsdGVyQmxvY2siLCJkaXNwYXRjaGVyIiwicGxheUxpc3QiLCJzdGF0ZSIsInRyYWNrcyIsInNlbGVjdGVkQXV0aG9ycyIsImFjdGl2ZUZpbHRlcnMiLCJhdXRob3JzIiwic2VsZWN0ZWRHZW5yZXMiLCJnZW5yZXMiLCJsb2NhbEFjdGl2ZUZpbHRlciIsInNldExvY2FsQWN0aXZlRmlsdGVyIiwic29ydEJ5WWVhclZhbHVlcyIsInRvZ2dsZVJlbGVhc2VZZWFyRmlsdGVyIiwib3B0aW9uIiwicmVsZWFzZV9kYXRlcyIsInRvZ2dsZVNlbGVjdGVkQXV0aG9ycyIsImF1dGhvciIsImluY2x1ZGVzIiwiZmlsdGVyIiwiaXRlbSIsInRvZ2dsZVNlbGVjdGVkR2VucmVzIiwiZ2VucmUiLCJkaXNjYXJkRmlsdGVycyIsImdldFVuaXF1ZVZhbHVlcyIsInByb3BlcnR5IiwiQXJyYXkiLCJmcm9tIiwiU2V0IiwibWFwIiwidHJhY2siLCJ2YWx1ZSIsInNvcnQiLCJhIiwiYiIsImxvY2FsZUNvbXBhcmUiLCJtZW1vaXplZEdldFVuaXF1ZVZhbHVlcyIsImRpdiIsImNsYXNzTmFtZSIsImNlbnRlckJsb2NrRmlsdGVyIiwiZmlsdGVyVGl0bGUiLCJvbkNsaWNrIiwiaXNPcGVuZWQiLCJsaXN0IiwidG9nZ2xlU2VsZWN0ZWRPcHRpb24iLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/FilterBlock/FilterBlock.tsx\n"));

/***/ })

});