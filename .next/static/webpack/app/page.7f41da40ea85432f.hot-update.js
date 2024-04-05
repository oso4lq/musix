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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FilterBlock.module.css */ \"(app-pages-browser)/./src/components/FilterBlock/FilterBlock.module.css\");\n/* harmony import */ var _FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks */ \"(app-pages-browser)/./src/hooks.ts\");\n/* harmony import */ var _store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store/features/tracksSlice */ \"(app-pages-browser)/./src/store/features/tracksSlice.ts\");\n/* harmony import */ var _lib_getUniqueValues__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/lib/getUniqueValues */ \"(app-pages-browser)/./src/lib/getUniqueValues.ts\");\n/* harmony import */ var _components_FilterBlockItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/FilterBlockItem */ \"(app-pages-browser)/./src/components/FilterBlockItem/index.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst FilterBlock = ()=>{\n    _s();\n    const dispatcher = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch)();\n    const playList = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.tracks.playList);\n    const selectedAuthors = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.tracks.activeFilters.authors);\n    const selectedGenres = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.tracks.activeFilters.genres);\n    const [localActiveFilter, setLocalActiveFilter] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const sortByYearValues = [\n        \"Default\",\n        \"New first\",\n        \"Old first\"\n    ];\n    // year filter\n    const toggleReleaseYearFilter = (option)=>{\n        dispatcher((0,_store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_4__.setActiveFilter)({\n            release_dates: option\n        }));\n    };\n    // artist filter\n    const toggleSelectedAuthors = (author)=>{\n        dispatcher((0,_store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_4__.setActiveFilter)({\n            authors: selectedAuthors.includes(author) ? selectedAuthors.filter((item)=>item !== author) : [\n                ...selectedAuthors,\n                author\n            ]\n        }));\n    };\n    // genre filter\n    const toggleSelectedGenres = (genre)=>{\n        dispatcher((0,_store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_4__.setActiveFilter)({\n            genres: selectedGenres.includes(genre) ? selectedGenres.filter((item)=>item !== genre) : [\n                ...selectedGenres,\n                genre\n            ]\n        }));\n    };\n    // discard filters\n    const discardFilters = ()=>{\n        dispatcher((0,_store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_4__.clearActiveFilters)());\n    };\n    // useMemo, getUniqueValues - get unique keys to filter lists\n    const memoizedGetUniqueValues = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{\n        if (localActiveFilter) {\n            return (0,_lib_getUniqueValues__WEBPACK_IMPORTED_MODULE_5__.getUniqueValues)(playList, localActiveFilter);\n        }\n        return [];\n    }, [\n        localActiveFilter,\n        playList\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_7___default().centerBlockFilter), (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_7___default().filter)),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_7___default().filterTitle),\n                children: \"Search for:\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FilterBlockItem__WEBPACK_IMPORTED_MODULE_6__.FilterBlockItem, {\n                onClick: ()=>setLocalActiveFilter(localActiveFilter === \"author\" ? null : \"author\"),\n                isOpened: localActiveFilter === \"author\",\n                list: memoizedGetUniqueValues,\n                toggleSelectedOption: toggleSelectedAuthors,\n                children: \"Artist\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FilterBlockItem__WEBPACK_IMPORTED_MODULE_6__.FilterBlockItem, {\n                onClick: ()=>setLocalActiveFilter(localActiveFilter === \"release_date\" ? null : \"release_date\"),\n                isOpened: localActiveFilter === \"release_date\",\n                list: sortByYearValues,\n                toggleSelectedOption: toggleReleaseYearFilter,\n                children: \"Year\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FilterBlockItem__WEBPACK_IMPORTED_MODULE_6__.FilterBlockItem, {\n                onClick: ()=>setLocalActiveFilter(localActiveFilter === \"genre\" ? null : \"genre\"),\n                isOpened: localActiveFilter === \"genre\",\n                list: memoizedGetUniqueValues,\n                toggleSelectedOption: toggleSelectedGenres,\n                children: \"Genre\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_7___default().discardButton),\n                onClick: ()=>discardFilters(),\n                children: \"Discard filters\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FilterBlock, \"iyxi9/he5FkwWSBXs35eiY+kTrU=\", false, function() {\n    return [\n        _hooks__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch,\n        _hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        _hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        _hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector\n    ];\n});\n_c = FilterBlock;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FilterBlock);\nvar _c;\n$RefreshReg$(_c, \"FilterBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0ZpbHRlckJsb2NrL0ZpbHRlckJsb2NrLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUVvQztBQUNVO0FBQ0c7QUFDUTtBQUUwQjtBQUMzQjtBQUNNO0FBRTlELE1BQU1XLGNBQWM7O0lBQ2xCLE1BQU1DLGFBQWFQLHNEQUFjQTtJQUNqQyxNQUFNUSxXQUFXUCxzREFBY0EsQ0FBQyxDQUFDUSxRQUFVQSxNQUFNQyxNQUFNLENBQUNGLFFBQVE7SUFDaEUsTUFBTUcsa0JBQWtCVixzREFBY0EsQ0FBQyxDQUFDUSxRQUFVQSxNQUFNQyxNQUFNLENBQUNFLGFBQWEsQ0FBQ0MsT0FBTztJQUNwRixNQUFNQyxpQkFBaUJiLHNEQUFjQSxDQUFDLENBQUNRLFFBQVVBLE1BQU1DLE1BQU0sQ0FBQ0UsYUFBYSxDQUFDRyxNQUFNO0lBQ2xGLE1BQU0sQ0FBQ0MsbUJBQW1CQyxxQkFBcUIsR0FBR2xCLCtDQUFRQSxDQUF5QjtJQUNuRixNQUFNbUIsbUJBQW1CO1FBQUM7UUFBVztRQUFhO0tBQVk7SUFFOUQsY0FBYztJQUNkLE1BQU1DLDBCQUEwQixDQUFDQztRQUMvQmIsV0FBV0osNEVBQWVBLENBQUM7WUFDekJrQixlQUFlRDtRQUNqQjtJQUNGO0lBQ0EsZ0JBQWdCO0lBQ2hCLE1BQU1FLHdCQUF3QixDQUFDQztRQUM3QmhCLFdBQVdKLDRFQUFlQSxDQUFDO1lBQ3pCVSxTQUFTRixnQkFBZ0JhLFFBQVEsQ0FBQ0QsVUFBVVosZ0JBQWdCYyxNQUFNLENBQUMsQ0FBQ0MsT0FBU0EsU0FBU0gsVUFBVTttQkFBSVo7Z0JBQWlCWTthQUFPO1FBQzlIO0lBQ0Y7SUFDQSxlQUFlO0lBQ2YsTUFBTUksdUJBQXVCLENBQUNDO1FBQzVCckIsV0FBV0osNEVBQWVBLENBQUM7WUFDekJZLFFBQVFELGVBQWVVLFFBQVEsQ0FBQ0ksU0FBU2QsZUFBZVcsTUFBTSxDQUFDLENBQUNDLE9BQVNBLFNBQVNFLFNBQVM7bUJBQUlkO2dCQUFnQmM7YUFBTTtRQUN2SDtJQUNGO0lBQ0Esa0JBQWtCO0lBQ2xCLE1BQU1DLGlCQUFpQjtRQUNyQnRCLFdBQVdMLCtFQUFrQkE7SUFDL0I7SUFFQSw2REFBNkQ7SUFDN0QsTUFBTTRCLDBCQUEwQmhDLDhDQUFPQSxDQUFDO1FBQ3RDLElBQUlrQixtQkFBbUI7WUFDckIsT0FBT1oscUVBQWVBLENBQUNJLFVBQVVRO1FBQ25DO1FBQ0EsT0FBTyxFQUFFO0lBQ1gsR0FBRztRQUFDQTtRQUFtQlI7S0FBUztJQUVoQyxxQkFDRSw4REFBQ3VCO1FBQUlDLFdBQVdyQyxpREFBVUEsQ0FBQ0Msa0ZBQXdCLEVBQUVBLHVFQUFhOzswQkFDaEUsOERBQUNtQztnQkFBSUMsV0FBV3BDLDRFQUFrQjswQkFBRTs7Ozs7OzBCQUVwQyw4REFBQ1Msd0VBQWVBO2dCQUNkOEIsU0FBUyxJQUFNbEIscUJBQXFCRCxzQkFBc0IsV0FBVyxPQUFPO2dCQUM1RW9CLFVBQVVwQixzQkFBc0I7Z0JBQ2hDcUIsTUFBTVA7Z0JBQ05RLHNCQUFzQmhCOzBCQUN2Qjs7Ozs7OzBCQUlELDhEQUFDakIsd0VBQWVBO2dCQUNkOEIsU0FBUyxJQUFNbEIscUJBQXFCRCxzQkFBc0IsaUJBQWlCLE9BQU87Z0JBQ2xGb0IsVUFBVXBCLHNCQUFzQjtnQkFDaENxQixNQUFNbkI7Z0JBQ05vQixzQkFBc0JuQjswQkFDdkI7Ozs7OzswQkFJRCw4REFBQ2Qsd0VBQWVBO2dCQUNkOEIsU0FBUyxJQUFNbEIscUJBQXFCRCxzQkFBc0IsVUFBVSxPQUFPO2dCQUMzRW9CLFVBQVVwQixzQkFBc0I7Z0JBQ2hDcUIsTUFBTVA7Z0JBQ05RLHNCQUFzQlg7MEJBQ3ZCOzs7Ozs7MEJBSUQsOERBQUNZO2dCQUNDUCxXQUFXcEMsOEVBQW9CO2dCQUMvQnVDLFNBQVMsSUFBTU47MEJBQWtCOzs7Ozs7Ozs7Ozs7QUFNekM7R0E5RU12Qjs7UUFDZU4sa0RBQWNBO1FBQ2hCQyxrREFBY0E7UUFDUEEsa0RBQWNBO1FBQ2ZBLGtEQUFjQTs7O0tBSmpDSztBQWdGTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9GaWx0ZXJCbG9jay9GaWx0ZXJCbG9jay50c3g/YjU2YyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9GaWx0ZXJCbG9jay5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VBcHBEaXNwYXRjaCwgdXNlQXBwU2VsZWN0b3IgfSBmcm9tICdAL2hvb2tzJztcbmltcG9ydCB7IHRyYWNrVHlwZSB9IGZyb20gJ0AvdHlwZXMvdHlwZXMnO1xuaW1wb3J0IHsgY2xlYXJBY3RpdmVGaWx0ZXJzLCBzZXRBY3RpdmVGaWx0ZXIgfSBmcm9tICdAL3N0b3JlL2ZlYXR1cmVzL3RyYWNrc1NsaWNlJztcbmltcG9ydCB7IGdldFVuaXF1ZVZhbHVlcyB9IGZyb20gXCJAL2xpYi9nZXRVbmlxdWVWYWx1ZXNcIjtcbmltcG9ydCB7IEZpbHRlckJsb2NrSXRlbSB9IGZyb20gJ0Bjb21wb25lbnRzL0ZpbHRlckJsb2NrSXRlbSc7XG5cbmNvbnN0IEZpbHRlckJsb2NrID0gKCkgPT4ge1xuICBjb25zdCBkaXNwYXRjaGVyID0gdXNlQXBwRGlzcGF0Y2goKTtcbiAgY29uc3QgcGxheUxpc3QgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnRyYWNrcy5wbGF5TGlzdCk7XG4gIGNvbnN0IHNlbGVjdGVkQXV0aG9ycyA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudHJhY2tzLmFjdGl2ZUZpbHRlcnMuYXV0aG9ycyk7XG4gIGNvbnN0IHNlbGVjdGVkR2VucmVzID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS50cmFja3MuYWN0aXZlRmlsdGVycy5nZW5yZXMpO1xuICBjb25zdCBbbG9jYWxBY3RpdmVGaWx0ZXIsIHNldExvY2FsQWN0aXZlRmlsdGVyXSA9IHVzZVN0YXRlPGtleW9mIHRyYWNrVHlwZSB8IG51bGw+KG51bGwpO1xuICBjb25zdCBzb3J0QnlZZWFyVmFsdWVzID0gW1wiRGVmYXVsdFwiLCBcIk5ldyBmaXJzdFwiLCBcIk9sZCBmaXJzdFwiXTtcblxuICAvLyB5ZWFyIGZpbHRlclxuICBjb25zdCB0b2dnbGVSZWxlYXNlWWVhckZpbHRlciA9IChvcHRpb246IHN0cmluZykgPT4ge1xuICAgIGRpc3BhdGNoZXIoc2V0QWN0aXZlRmlsdGVyKHtcbiAgICAgIHJlbGVhc2VfZGF0ZXM6IG9wdGlvblxuICAgIH0pKTtcbiAgfTtcbiAgLy8gYXJ0aXN0IGZpbHRlclxuICBjb25zdCB0b2dnbGVTZWxlY3RlZEF1dGhvcnMgPSAoYXV0aG9yOiBzdHJpbmcpID0+IHtcbiAgICBkaXNwYXRjaGVyKHNldEFjdGl2ZUZpbHRlcih7XG4gICAgICBhdXRob3JzOiBzZWxlY3RlZEF1dGhvcnMuaW5jbHVkZXMoYXV0aG9yKSA/IHNlbGVjdGVkQXV0aG9ycy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0gIT09IGF1dGhvcikgOiBbLi4uc2VsZWN0ZWRBdXRob3JzLCBhdXRob3JdLFxuICAgIH0pKVxuICB9O1xuICAvLyBnZW5yZSBmaWx0ZXJcbiAgY29uc3QgdG9nZ2xlU2VsZWN0ZWRHZW5yZXMgPSAoZ2VucmU6IHN0cmluZykgPT4ge1xuICAgIGRpc3BhdGNoZXIoc2V0QWN0aXZlRmlsdGVyKHtcbiAgICAgIGdlbnJlczogc2VsZWN0ZWRHZW5yZXMuaW5jbHVkZXMoZ2VucmUpID8gc2VsZWN0ZWRHZW5yZXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtICE9PSBnZW5yZSkgOiBbLi4uc2VsZWN0ZWRHZW5yZXMsIGdlbnJlXSxcbiAgICB9KSlcbiAgfTtcbiAgLy8gZGlzY2FyZCBmaWx0ZXJzXG4gIGNvbnN0IGRpc2NhcmRGaWx0ZXJzID0gKCkgPT4ge1xuICAgIGRpc3BhdGNoZXIoY2xlYXJBY3RpdmVGaWx0ZXJzKCkpXG4gIH1cblxuICAvLyB1c2VNZW1vLCBnZXRVbmlxdWVWYWx1ZXMgLSBnZXQgdW5pcXVlIGtleXMgdG8gZmlsdGVyIGxpc3RzXG4gIGNvbnN0IG1lbW9pemVkR2V0VW5pcXVlVmFsdWVzID0gdXNlTWVtbygoKSA9PiB7XG4gICAgaWYgKGxvY2FsQWN0aXZlRmlsdGVyKSB7XG4gICAgICByZXR1cm4gZ2V0VW5pcXVlVmFsdWVzKHBsYXlMaXN0LCBsb2NhbEFjdGl2ZUZpbHRlcik7XG4gICAgfVxuICAgIHJldHVybiBbXTtcbiAgfSwgW2xvY2FsQWN0aXZlRmlsdGVyLCBwbGF5TGlzdF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLmNlbnRlckJsb2NrRmlsdGVyLCBzdHlsZXMuZmlsdGVyKX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZpbHRlclRpdGxlfT5TZWFyY2ggZm9yOjwvZGl2PlxuXG4gICAgICA8RmlsdGVyQmxvY2tJdGVtXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldExvY2FsQWN0aXZlRmlsdGVyKGxvY2FsQWN0aXZlRmlsdGVyID09PSAnYXV0aG9yJyA/IG51bGwgOiAnYXV0aG9yJyl9XG4gICAgICAgIGlzT3BlbmVkPXtsb2NhbEFjdGl2ZUZpbHRlciA9PT0gJ2F1dGhvcid9XG4gICAgICAgIGxpc3Q9e21lbW9pemVkR2V0VW5pcXVlVmFsdWVzfVxuICAgICAgICB0b2dnbGVTZWxlY3RlZE9wdGlvbj17dG9nZ2xlU2VsZWN0ZWRBdXRob3JzfVxuICAgICAgPlxuICAgICAgICBBcnRpc3RcbiAgICAgIDwvRmlsdGVyQmxvY2tJdGVtPlxuXG4gICAgICA8RmlsdGVyQmxvY2tJdGVtXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldExvY2FsQWN0aXZlRmlsdGVyKGxvY2FsQWN0aXZlRmlsdGVyID09PSAncmVsZWFzZV9kYXRlJyA/IG51bGwgOiAncmVsZWFzZV9kYXRlJyl9XG4gICAgICAgIGlzT3BlbmVkPXtsb2NhbEFjdGl2ZUZpbHRlciA9PT0gJ3JlbGVhc2VfZGF0ZSd9XG4gICAgICAgIGxpc3Q9e3NvcnRCeVllYXJWYWx1ZXN9XG4gICAgICAgIHRvZ2dsZVNlbGVjdGVkT3B0aW9uPXt0b2dnbGVSZWxlYXNlWWVhckZpbHRlcn1cbiAgICAgID5cbiAgICAgICAgWWVhclxuICAgICAgPC9GaWx0ZXJCbG9ja0l0ZW0+XG5cbiAgICAgIDxGaWx0ZXJCbG9ja0l0ZW1cbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TG9jYWxBY3RpdmVGaWx0ZXIobG9jYWxBY3RpdmVGaWx0ZXIgPT09ICdnZW5yZScgPyBudWxsIDogJ2dlbnJlJyl9XG4gICAgICAgIGlzT3BlbmVkPXtsb2NhbEFjdGl2ZUZpbHRlciA9PT0gJ2dlbnJlJ31cbiAgICAgICAgbGlzdD17bWVtb2l6ZWRHZXRVbmlxdWVWYWx1ZXN9XG4gICAgICAgIHRvZ2dsZVNlbGVjdGVkT3B0aW9uPXt0b2dnbGVTZWxlY3RlZEdlbnJlc31cbiAgICAgID5cbiAgICAgICAgR2VucmVcbiAgICAgIDwvRmlsdGVyQmxvY2tJdGVtPlxuXG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmRpc2NhcmRCdXR0b259XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IGRpc2NhcmRGaWx0ZXJzKCl9PlxuICAgICAgICBEaXNjYXJkIGZpbHRlcnNcbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJCbG9jaztcbiJdLCJuYW1lcyI6WyJjbGFzc05hbWVzIiwic3R5bGVzIiwiUmVhY3QiLCJ1c2VNZW1vIiwidXNlU3RhdGUiLCJ1c2VBcHBEaXNwYXRjaCIsInVzZUFwcFNlbGVjdG9yIiwiY2xlYXJBY3RpdmVGaWx0ZXJzIiwic2V0QWN0aXZlRmlsdGVyIiwiZ2V0VW5pcXVlVmFsdWVzIiwiRmlsdGVyQmxvY2tJdGVtIiwiRmlsdGVyQmxvY2siLCJkaXNwYXRjaGVyIiwicGxheUxpc3QiLCJzdGF0ZSIsInRyYWNrcyIsInNlbGVjdGVkQXV0aG9ycyIsImFjdGl2ZUZpbHRlcnMiLCJhdXRob3JzIiwic2VsZWN0ZWRHZW5yZXMiLCJnZW5yZXMiLCJsb2NhbEFjdGl2ZUZpbHRlciIsInNldExvY2FsQWN0aXZlRmlsdGVyIiwic29ydEJ5WWVhclZhbHVlcyIsInRvZ2dsZVJlbGVhc2VZZWFyRmlsdGVyIiwib3B0aW9uIiwicmVsZWFzZV9kYXRlcyIsInRvZ2dsZVNlbGVjdGVkQXV0aG9ycyIsImF1dGhvciIsImluY2x1ZGVzIiwiZmlsdGVyIiwiaXRlbSIsInRvZ2dsZVNlbGVjdGVkR2VucmVzIiwiZ2VucmUiLCJkaXNjYXJkRmlsdGVycyIsIm1lbW9pemVkR2V0VW5pcXVlVmFsdWVzIiwiZGl2IiwiY2xhc3NOYW1lIiwiY2VudGVyQmxvY2tGaWx0ZXIiLCJmaWx0ZXJUaXRsZSIsIm9uQ2xpY2siLCJpc09wZW5lZCIsImxpc3QiLCJ0b2dnbGVTZWxlY3RlZE9wdGlvbiIsImJ1dHRvbiIsImRpc2NhcmRCdXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/FilterBlock/FilterBlock.tsx\n"));

/***/ })

});