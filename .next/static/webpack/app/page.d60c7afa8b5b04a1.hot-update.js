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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FilterBlock.module.css */ \"(app-pages-browser)/./src/components/FilterBlock/FilterBlock.module.css\");\n/* harmony import */ var _FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks */ \"(app-pages-browser)/./src/hooks.ts\");\n/* harmony import */ var _store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store/features/tracksSlice */ \"(app-pages-browser)/./src/store/features/tracksSlice.ts\");\n/* harmony import */ var _lib_getUniqueValues__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/lib/getUniqueValues */ \"(app-pages-browser)/./src/lib/getUniqueValues.ts\");\n/* harmony import */ var _FilterBlockItem_FilterBlockItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../FilterBlockItem/FilterBlockItem */ \"(app-pages-browser)/./src/components/FilterBlockItem/FilterBlockItem.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst FilterBlock = ()=>{\n    _s();\n    const dispatcher = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch)();\n    const playList = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.tracks.playList);\n    const selectedAuthors = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.tracks.activeFilters.authors);\n    const selectedGenres = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.tracks.activeFilters.genres);\n    const [localActiveFilter, setLocalActiveFilter] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const sortByYearValues = [\n        \"Default\",\n        \"New first\",\n        \"Old first\"\n    ];\n    // year filter\n    const toggleReleaseYearFilter = (option)=>{\n        dispatcher((0,_store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_4__.setActiveFilter)({\n            release_dates: option\n        }));\n    };\n    // artist filter\n    const toggleSelectedAuthors = (author)=>{\n        dispatcher((0,_store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_4__.setActiveFilter)({\n            authors: selectedAuthors.includes(author) ? selectedAuthors.filter((item)=>item !== author) : [\n                ...selectedAuthors,\n                author\n            ]\n        }));\n    };\n    // genre filter\n    const toggleSelectedGenres = (genre)=>{\n        dispatcher((0,_store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_4__.setActiveFilter)({\n            genres: selectedGenres.includes(genre) ? selectedGenres.filter((item)=>item !== genre) : [\n                ...selectedGenres,\n                genre\n            ]\n        }));\n    };\n    // discard filters\n    const discardFilters = ()=>{\n        dispatcher((0,_store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_4__.clearActiveFilters)());\n    };\n    // useMemo, getUniqueValues - get unique keys to filter lists\n    const memoizedGetUniqueValues = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{\n        if (localActiveFilter) {\n            return (0,_lib_getUniqueValues__WEBPACK_IMPORTED_MODULE_5__.getUniqueValues)(playList, localActiveFilter);\n        }\n        return [];\n    }, [\n        localActiveFilter,\n        playList\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_7___default().centerBlockFilter), (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_7___default().filter)),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_7___default().filterTitle),\n                children: \"Search for:\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterBlockItem_FilterBlockItem__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                onClick: ()=>setLocalActiveFilter(localActiveFilter === \"author\" ? null : \"author\"),\n                isOpened: localActiveFilter === \"author\",\n                list: memoizedGetUniqueValues,\n                toggleSelectedOption: toggleSelectedAuthors,\n                children: \"Artist\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterBlockItem_FilterBlockItem__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                onClick: ()=>setLocalActiveFilter(localActiveFilter === \"release_date\" ? null : \"release_date\"),\n                isOpened: localActiveFilter === \"release_date\",\n                list: sortByYearValues,\n                toggleSelectedOption: toggleReleaseYearFilter,\n                children: \"Year\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterBlockItem_FilterBlockItem__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                onClick: ()=>setLocalActiveFilter(localActiveFilter === \"genre\" ? null : \"genre\"),\n                isOpened: localActiveFilter === \"genre\",\n                list: memoizedGetUniqueValues,\n                toggleSelectedOption: toggleSelectedGenres,\n                children: \"Genre\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>discardFilters(),\n                children: \"Discard filters\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FilterBlock, \"iyxi9/he5FkwWSBXs35eiY+kTrU=\", false, function() {\n    return [\n        _hooks__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch,\n        _hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        _hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        _hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector\n    ];\n});\n_c = FilterBlock;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FilterBlock);\nvar _c;\n$RefreshReg$(_c, \"FilterBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0ZpbHRlckJsb2NrL0ZpbHRlckJsb2NrLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUVvQztBQUNVO0FBQ0c7QUFDUTtBQUUwQjtBQUMzQjtBQUNTO0FBRWpFLE1BQU1XLGNBQWM7O0lBQ2xCLE1BQU1DLGFBQWFQLHNEQUFjQTtJQUNqQyxNQUFNUSxXQUFXUCxzREFBY0EsQ0FBQyxDQUFDUSxRQUFVQSxNQUFNQyxNQUFNLENBQUNGLFFBQVE7SUFDaEUsTUFBTUcsa0JBQWtCVixzREFBY0EsQ0FBQyxDQUFDUSxRQUFVQSxNQUFNQyxNQUFNLENBQUNFLGFBQWEsQ0FBQ0MsT0FBTztJQUNwRixNQUFNQyxpQkFBaUJiLHNEQUFjQSxDQUFDLENBQUNRLFFBQVVBLE1BQU1DLE1BQU0sQ0FBQ0UsYUFBYSxDQUFDRyxNQUFNO0lBQ2xGLE1BQU0sQ0FBQ0MsbUJBQW1CQyxxQkFBcUIsR0FBR2xCLCtDQUFRQSxDQUF5QjtJQUNuRixNQUFNbUIsbUJBQW1CO1FBQUM7UUFBVztRQUFhO0tBQVk7SUFFOUQsY0FBYztJQUNkLE1BQU1DLDBCQUEwQixDQUFDQztRQUMvQmIsV0FBV0osNEVBQWVBLENBQUM7WUFDekJrQixlQUFlRDtRQUFPO0lBQzFCO0lBQ0EsZ0JBQWdCO0lBQ2hCLE1BQU1FLHdCQUF3QixDQUFDQztRQUM3QmhCLFdBQVdKLDRFQUFlQSxDQUFDO1lBQ3pCVSxTQUFTRixnQkFBZ0JhLFFBQVEsQ0FBQ0QsVUFBVVosZ0JBQWdCYyxNQUFNLENBQUMsQ0FBQ0MsT0FBU0EsU0FBU0gsVUFBVTttQkFBS1o7Z0JBQWlCWTthQUFRO1FBQ2hJO0lBQ0Y7SUFDQSxlQUFlO0lBQ2YsTUFBTUksdUJBQXVCLENBQUNDO1FBQzVCckIsV0FBV0osNEVBQWVBLENBQUM7WUFDekJZLFFBQVFELGVBQWVVLFFBQVEsQ0FBQ0ksU0FBU2QsZUFBZVcsTUFBTSxDQUFDLENBQUNDLE9BQVNBLFNBQVNFLFNBQVM7bUJBQUtkO2dCQUFnQmM7YUFBTztRQUN6SDtJQUNGO0lBQ0Esa0JBQWtCO0lBQ2xCLE1BQU1DLGlCQUFpQjtRQUNyQnRCLFdBQVdMLCtFQUFrQkE7SUFDL0I7SUFFQSw2REFBNkQ7SUFDN0QsTUFBTTRCLDBCQUEwQmhDLDhDQUFPQSxDQUFDO1FBQ3RDLElBQUlrQixtQkFBbUI7WUFDckIsT0FBT1oscUVBQWVBLENBQUNJLFVBQVVRO1FBQ25DO1FBQ0EsT0FBTyxFQUFFO0lBQ1gsR0FBRztRQUFDQTtRQUFtQlI7S0FBUztJQUVoQyxxQkFDRSw4REFBQ3VCO1FBQUlDLFdBQVdyQyxpREFBVUEsQ0FBQ0Msa0ZBQXdCLEVBQUVBLHVFQUFhOzswQkFDaEUsOERBQUNtQztnQkFBSUMsV0FBV3BDLDRFQUFrQjswQkFBRTs7Ozs7OzBCQUVwQyw4REFBQ1Msd0VBQWVBO2dCQUNkOEIsU0FBUyxJQUFNbEIscUJBQXFCRCxzQkFBc0IsV0FBVyxPQUFPO2dCQUM1RW9CLFVBQVVwQixzQkFBc0I7Z0JBQ2hDcUIsTUFBTVA7Z0JBQ05RLHNCQUFzQmhCOzBCQUNyQjs7Ozs7OzBCQUlILDhEQUFDakIsd0VBQWVBO2dCQUNkOEIsU0FBUyxJQUFNbEIscUJBQXFCRCxzQkFBc0IsaUJBQWlCLE9BQU87Z0JBQ2xGb0IsVUFBVXBCLHNCQUFzQjtnQkFDaENxQixNQUFNbkI7Z0JBQ05vQixzQkFBc0JuQjswQkFDdkI7Ozs7OzswQkFJRCw4REFBQ2Qsd0VBQWVBO2dCQUNkOEIsU0FBUyxJQUFNbEIscUJBQXFCRCxzQkFBc0IsVUFBVSxPQUFPO2dCQUMzRW9CLFVBQVVwQixzQkFBc0I7Z0JBQ2hDcUIsTUFBTVA7Z0JBQ05RLHNCQUFzQlg7MEJBQ3JCOzs7Ozs7MEJBSUgsOERBQUNZO2dCQUFPSixTQUFTLElBQU1OOzBCQUFrQjs7Ozs7Ozs7Ozs7O0FBTS9DO0dBM0VNdkI7O1FBQ2VOLGtEQUFjQTtRQUNoQkMsa0RBQWNBO1FBQ1BBLGtEQUFjQTtRQUNmQSxrREFBY0E7OztLQUpqQ0s7QUE2RU4sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRmlsdGVyQmxvY2svRmlsdGVyQmxvY2sudHN4P2I1NmMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcblxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vRmlsdGVyQmxvY2subW9kdWxlLmNzc1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2gsIHVzZUFwcFNlbGVjdG9yIH0gZnJvbSAnQC9ob29rcyc7XG5pbXBvcnQgeyB0cmFja1R5cGUgfSBmcm9tICdAL3R5cGVzL3R5cGVzJztcbmltcG9ydCB7IGNsZWFyQWN0aXZlRmlsdGVycywgc2V0QWN0aXZlRmlsdGVyIH0gZnJvbSAnQC9zdG9yZS9mZWF0dXJlcy90cmFja3NTbGljZSc7XG5pbXBvcnQgeyBnZXRVbmlxdWVWYWx1ZXMgfSBmcm9tIFwiQC9saWIvZ2V0VW5pcXVlVmFsdWVzXCI7XG5pbXBvcnQgRmlsdGVyQmxvY2tJdGVtIGZyb20gJy4uL0ZpbHRlckJsb2NrSXRlbS9GaWx0ZXJCbG9ja0l0ZW0nO1xuXG5jb25zdCBGaWx0ZXJCbG9jayA9ICgpID0+IHtcbiAgY29uc3QgZGlzcGF0Y2hlciA9IHVzZUFwcERpc3BhdGNoKCk7XG4gIGNvbnN0IHBsYXlMaXN0ID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS50cmFja3MucGxheUxpc3QpO1xuICBjb25zdCBzZWxlY3RlZEF1dGhvcnMgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnRyYWNrcy5hY3RpdmVGaWx0ZXJzLmF1dGhvcnMpO1xuICBjb25zdCBzZWxlY3RlZEdlbnJlcyA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudHJhY2tzLmFjdGl2ZUZpbHRlcnMuZ2VucmVzKTtcbiAgY29uc3QgW2xvY2FsQWN0aXZlRmlsdGVyLCBzZXRMb2NhbEFjdGl2ZUZpbHRlcl0gPSB1c2VTdGF0ZTxrZXlvZiB0cmFja1R5cGUgfCBudWxsPihudWxsKTtcbiAgY29uc3Qgc29ydEJ5WWVhclZhbHVlcyA9IFtcIkRlZmF1bHRcIiwgXCJOZXcgZmlyc3RcIiwgXCJPbGQgZmlyc3RcIl07XG5cbiAgLy8geWVhciBmaWx0ZXJcbiAgY29uc3QgdG9nZ2xlUmVsZWFzZVllYXJGaWx0ZXIgPSAob3B0aW9uOiBzdHJpbmcpID0+IHtcbiAgICBkaXNwYXRjaGVyKHNldEFjdGl2ZUZpbHRlcih7IFxuICAgICAgcmVsZWFzZV9kYXRlczogb3B0aW9uIH0pKTtcbiAgfTtcbiAgLy8gYXJ0aXN0IGZpbHRlclxuICBjb25zdCB0b2dnbGVTZWxlY3RlZEF1dGhvcnMgPSAoYXV0aG9yOiBzdHJpbmcpID0+IHtcbiAgICBkaXNwYXRjaGVyKHNldEFjdGl2ZUZpbHRlcih7XG4gICAgICBhdXRob3JzOiBzZWxlY3RlZEF1dGhvcnMuaW5jbHVkZXMoYXV0aG9yKSA/IHNlbGVjdGVkQXV0aG9ycy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0gIT09IGF1dGhvcikgOiBbIC4uLnNlbGVjdGVkQXV0aG9ycywgYXV0aG9yIF0sXG4gICAgfSkpXG4gIH07XG4gIC8vIGdlbnJlIGZpbHRlclxuICBjb25zdCB0b2dnbGVTZWxlY3RlZEdlbnJlcyA9IChnZW5yZTogc3RyaW5nKSA9PiB7XG4gICAgZGlzcGF0Y2hlcihzZXRBY3RpdmVGaWx0ZXIoe1xuICAgICAgZ2VucmVzOiBzZWxlY3RlZEdlbnJlcy5pbmNsdWRlcyhnZW5yZSkgPyBzZWxlY3RlZEdlbnJlcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0gIT09IGdlbnJlKSA6IFsgLi4uc2VsZWN0ZWRHZW5yZXMsIGdlbnJlIF0sXG4gICAgfSkpXG4gIH07XG4gIC8vIGRpc2NhcmQgZmlsdGVyc1xuICBjb25zdCBkaXNjYXJkRmlsdGVycyA9ICgpID0+IHtcbiAgICBkaXNwYXRjaGVyKGNsZWFyQWN0aXZlRmlsdGVycygpKVxuICB9XG4gIFxuICAvLyB1c2VNZW1vLCBnZXRVbmlxdWVWYWx1ZXMgLSBnZXQgdW5pcXVlIGtleXMgdG8gZmlsdGVyIGxpc3RzXG4gIGNvbnN0IG1lbW9pemVkR2V0VW5pcXVlVmFsdWVzID0gdXNlTWVtbygoKSA9PiB7XG4gICAgaWYgKGxvY2FsQWN0aXZlRmlsdGVyKSB7XG4gICAgICByZXR1cm4gZ2V0VW5pcXVlVmFsdWVzKHBsYXlMaXN0LCBsb2NhbEFjdGl2ZUZpbHRlcik7XG4gICAgfVxuICAgIHJldHVybiBbXTtcbiAgfSwgW2xvY2FsQWN0aXZlRmlsdGVyLCBwbGF5TGlzdF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLmNlbnRlckJsb2NrRmlsdGVyLCBzdHlsZXMuZmlsdGVyKX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZpbHRlclRpdGxlfT5TZWFyY2ggZm9yOjwvZGl2PlxuXG4gICAgICA8RmlsdGVyQmxvY2tJdGVtXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldExvY2FsQWN0aXZlRmlsdGVyKGxvY2FsQWN0aXZlRmlsdGVyID09PSAnYXV0aG9yJyA/IG51bGwgOiAnYXV0aG9yJyl9XG4gICAgICAgIGlzT3BlbmVkPXtsb2NhbEFjdGl2ZUZpbHRlciA9PT0gJ2F1dGhvcid9XG4gICAgICAgIGxpc3Q9e21lbW9pemVkR2V0VW5pcXVlVmFsdWVzfVxuICAgICAgICB0b2dnbGVTZWxlY3RlZE9wdGlvbj17dG9nZ2xlU2VsZWN0ZWRBdXRob3JzfVxuICAgICAgICA+XG4gICAgICAgIEFydGlzdFxuICAgICAgPC9GaWx0ZXJCbG9ja0l0ZW0+XG5cbiAgICAgIDxGaWx0ZXJCbG9ja0l0ZW1cbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TG9jYWxBY3RpdmVGaWx0ZXIobG9jYWxBY3RpdmVGaWx0ZXIgPT09ICdyZWxlYXNlX2RhdGUnID8gbnVsbCA6ICdyZWxlYXNlX2RhdGUnKX1cbiAgICAgICAgaXNPcGVuZWQ9e2xvY2FsQWN0aXZlRmlsdGVyID09PSAncmVsZWFzZV9kYXRlJ31cbiAgICAgICAgbGlzdD17c29ydEJ5WWVhclZhbHVlc31cbiAgICAgICAgdG9nZ2xlU2VsZWN0ZWRPcHRpb249e3RvZ2dsZVJlbGVhc2VZZWFyRmlsdGVyfVxuICAgICAgPlxuICAgICAgICBZZWFyXG4gICAgICA8L0ZpbHRlckJsb2NrSXRlbT5cblxuICAgICAgPEZpbHRlckJsb2NrSXRlbVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRMb2NhbEFjdGl2ZUZpbHRlcihsb2NhbEFjdGl2ZUZpbHRlciA9PT0gJ2dlbnJlJyA/IG51bGwgOiAnZ2VucmUnKX1cbiAgICAgICAgaXNPcGVuZWQ9e2xvY2FsQWN0aXZlRmlsdGVyID09PSAnZ2VucmUnfVxuICAgICAgICBsaXN0PXttZW1vaXplZEdldFVuaXF1ZVZhbHVlc31cbiAgICAgICAgdG9nZ2xlU2VsZWN0ZWRPcHRpb249e3RvZ2dsZVNlbGVjdGVkR2VucmVzfVxuICAgICAgICA+XG4gICAgICAgIEdlbnJlXG4gICAgICA8L0ZpbHRlckJsb2NrSXRlbT5cbiAgICAgIFxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkaXNjYXJkRmlsdGVycygpfT5cbiAgICAgICAgRGlzY2FyZCBmaWx0ZXJzXG4gICAgICA8L2J1dHRvbj5cblxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyQmxvY2s7XG4iXSwibmFtZXMiOlsiY2xhc3NOYW1lcyIsInN0eWxlcyIsIlJlYWN0IiwidXNlTWVtbyIsInVzZVN0YXRlIiwidXNlQXBwRGlzcGF0Y2giLCJ1c2VBcHBTZWxlY3RvciIsImNsZWFyQWN0aXZlRmlsdGVycyIsInNldEFjdGl2ZUZpbHRlciIsImdldFVuaXF1ZVZhbHVlcyIsIkZpbHRlckJsb2NrSXRlbSIsIkZpbHRlckJsb2NrIiwiZGlzcGF0Y2hlciIsInBsYXlMaXN0Iiwic3RhdGUiLCJ0cmFja3MiLCJzZWxlY3RlZEF1dGhvcnMiLCJhY3RpdmVGaWx0ZXJzIiwiYXV0aG9ycyIsInNlbGVjdGVkR2VucmVzIiwiZ2VucmVzIiwibG9jYWxBY3RpdmVGaWx0ZXIiLCJzZXRMb2NhbEFjdGl2ZUZpbHRlciIsInNvcnRCeVllYXJWYWx1ZXMiLCJ0b2dnbGVSZWxlYXNlWWVhckZpbHRlciIsIm9wdGlvbiIsInJlbGVhc2VfZGF0ZXMiLCJ0b2dnbGVTZWxlY3RlZEF1dGhvcnMiLCJhdXRob3IiLCJpbmNsdWRlcyIsImZpbHRlciIsIml0ZW0iLCJ0b2dnbGVTZWxlY3RlZEdlbnJlcyIsImdlbnJlIiwiZGlzY2FyZEZpbHRlcnMiLCJtZW1vaXplZEdldFVuaXF1ZVZhbHVlcyIsImRpdiIsImNsYXNzTmFtZSIsImNlbnRlckJsb2NrRmlsdGVyIiwiZmlsdGVyVGl0bGUiLCJvbkNsaWNrIiwiaXNPcGVuZWQiLCJsaXN0IiwidG9nZ2xlU2VsZWN0ZWRPcHRpb24iLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/FilterBlock/FilterBlock.tsx\n"));

/***/ })

});