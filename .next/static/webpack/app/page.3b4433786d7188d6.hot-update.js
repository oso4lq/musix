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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FilterBlock.module.css */ \"(app-pages-browser)/./src/components/FilterBlock/FilterBlock.module.css\");\n/* harmony import */ var _FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _FilterBlockItem_FilterBlockItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../FilterBlockItem/FilterBlockItem */ \"(app-pages-browser)/./src/components/FilterBlockItem/FilterBlockItem.tsx\");\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/hooks */ \"(app-pages-browser)/./src/hooks.ts\");\n/* harmony import */ var _store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/store/features/tracksSlice */ \"(app-pages-browser)/./src/store/features/tracksSlice.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n // Renaming setActiveFilter from tracksSlice\nconst FilterBlock = ()=>{\n    _s();\n    const dispatch = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useAppDispatch)();\n    const playList = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useAppSelector)((state)=>state.tracks.playList);\n    const selectedAuthors = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useAppSelector)((state)=>state.tracks.activeFilters.authors);\n    const selectedGenres = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useAppSelector)((state)=>state.tracks.activeFilters.genres);\n    const [localReleaseYearFilter, setLocalReleaseYearFilter] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"default\");\n    const [localActiveFilter, setLocalActiveFilter] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    // year filter\n    const sortByYearValues = [\n        \"Default\",\n        \"New first\",\n        \"Old first\"\n    ];\n    const toggleReleaseYearFilter = (option)=>{\n        setLocalReleaseYearFilter(option);\n        dispatch((0,_store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_5__.setActiveFilter)({\n            release_dates: option\n        }));\n    };\n    // artist filter\n    const toggleSelectedAuthors = (author)=>{\n        dispatch((0,_store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_5__.setActiveFilter)({\n            authors: selectedAuthors.includes(author) ? selectedAuthors.filter((item)=>item !== author) : [\n                ...selectedAuthors,\n                author\n            ]\n        }));\n    };\n    // genre filter\n    const toggleSelectedGenres = (genre)=>{\n        dispatch((0,_store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_5__.setActiveFilter)({\n            genres: selectedGenres.includes(genre) ? selectedGenres.filter((item)=>item !== genre) : [\n                ...selectedGenres,\n                genre\n            ]\n        }));\n    };\n    // get unique values for each filter\n    const getUniqueValues = (property)=>{\n        return playList ? Array.from(new Set(playList.map((track)=>track[property]))).filter((value)=>typeof value === \"string\" && value !== \"-\").map((value)=>value).sort((a, b)=>a.localeCompare(b)) : [];\n    };\n    // useMemo\n    const memoizedGetUniqueValues = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{\n        if (localActiveFilter) {\n            return getUniqueValues(localActiveFilter);\n        }\n        return [];\n    }, [\n        localActiveFilter,\n        playList\n    ]);\n    // // getUniqueValues function adjusted to sort release_date params to unique years\n    // const getUniqueYears = () => {\n    //   return playList\n    //     ? Array.from(new Set(playList.map((track: trackType) => track.release_date)))\n    //       .filter((date) => typeof date === \"string\" && date !== \"-\")\n    //       .map((date) => date.split(\"-\")[0])\n    //       .filter((year, index, self) => self.indexOf(year) === index)\n    //       .sort((a, b) => a.localeCompare(b))\n    //     : [];\n    // };\n    // // display tracks with release_date starting by year YYYY\n    // const getTracksByYear = (year: string) => {\n    //   return playList ? playList.filter((track: trackType) => {\n    //       const releaseYear = track.release_date.split(\"-\")[0];\n    //       return releaseYear === year || releaseYear > year;\n    //   }) : [];\n    // };\n    // // get the lists of unique keys for the FilterBlockItems\n    // const uniqueAuthors = getUniqueValues('author');\n    // const uniqueYears = getUniqueValues('release_date');\n    // // const uniqueYears = getUniqueYears();\n    // const uniqueGenres = getUniqueValues('genre');\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().centerBlockFilter), (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().filter)),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().filterTitle),\n                children: \"Search for:\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterBlockItem_FilterBlockItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onClick: ()=>setLocalActiveFilter(localActiveFilter === \"author\" ? null : \"author\"),\n                isOpened: localActiveFilter === \"author\",\n                list: memoizedGetUniqueValues,\n                toggleSelectedOption: toggleSelectedAuthors,\n                children: \"Artist\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterBlockItem_FilterBlockItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onClick: ()=>setLocalActiveFilter(localActiveFilter === \"release_date\" ? null : \"release_date\"),\n                isOpened: localActiveFilter === \"release_date\",\n                list: sortByYearValues,\n                selectedOption: localReleaseYearFilter,\n                toggleSelectedOption: toggleReleaseYearFilter,\n                children: \"Year\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterBlockItem_FilterBlockItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onClick: ()=>setLocalActiveFilter(localActiveFilter === \"genre\" ? null : \"genre\"),\n                isOpened: localActiveFilter === \"genre\",\n                filterKey: localActiveFilter,\n                list: memoizedGetUniqueValues,\n                toggleSelectedOption: toggleSelectedGenres,\n                children: \"Genre\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 104,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                children: \"Discard filters\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 114,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n        lineNumber: 82,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FilterBlock, \"8e2/RfYmya83rruM+E9wvC7kJdo=\", false, function() {\n    return [\n        _hooks__WEBPACK_IMPORTED_MODULE_4__.useAppDispatch,\n        _hooks__WEBPACK_IMPORTED_MODULE_4__.useAppSelector,\n        _hooks__WEBPACK_IMPORTED_MODULE_4__.useAppSelector,\n        _hooks__WEBPACK_IMPORTED_MODULE_4__.useAppSelector\n    ];\n});\n_c = FilterBlock;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FilterBlock); // \"use client\"\n // import classNames from \"classnames\";\n // import styles from \"./FilterBlock.module.css\";\n // import { useMemo, useState } from \"react\";\n // import FilterBlockItem from \"../FilterBlockItem/FilterBlockItem\";\n // import { useAppSelector } from \"@/hooks\";\n // import { trackType } from \"@/types/types\";\n // const FilterBlock = () => {\n //   // import playlist from API\n //   const playList = useAppSelector((state) => state.tracks.playList);\n //   // set filter\n //   const [activeFilter, setActiveFilter] = useState<keyof trackType | null>(null);\n //   // apply filter\n //   const handleFilterClick = (newFilter: keyof trackType) => {\n //     setActiveFilter((prev) => (newFilter === prev ? null : newFilter));\n //   };\n //   // returns unique values depenging on the key\n //   const getUniqueValues = (property: keyof trackType) => {\n //     return playList\n //       ? Array.from(new Set(playList.map((track: trackType) => track[property])))\n //         .filter((value) => typeof value === \"string\" && value !== \"-\")\n //         .map((value) => value as string)\n //         .sort((a, b) => a.localeCompare(b))\n //       : [];\n //   };\n //   // getUniqueValues function adjusted to sort release_date params to unique years\n //   const getUniqueYears = () => {\n //     return playList\n //       ? Array.from(new Set(playList.map((track: trackType) => track.release_date)))\n //         .filter((date) => typeof date === \"string\" && date !== \"-\")\n //         .map((date) => date.split(\"-\")[0])\n //         .filter((year, index, self) => self.indexOf(year) === index)\n //         .sort((a, b) => a.localeCompare(b))\n //       : [];\n //   };\n //   // useMemo\n //   const memoizedGetUniqueValues = useMemo(() => {\n //     if (activeFilter) {\n //       return getUniqueValues(activeFilter);\n //     }\n //     return [];\n //   }, [activeFilter, playList]);\n //   const memoizedGetUniqueYears = useMemo(() => {\n //     if (activeFilter) {\n //       return getUniqueYears();\n //     }\n //     return [];\n //   }, [activeFilter, playList]);\n //   return (\n //     <div className={classNames(styles.centerBlockFilter, styles.filter)}>\n //       <div className={styles.filterTitle}>Search for:</div>\n //       <FilterBlockItem\n //         onClick={() => handleFilterClick(\"author\")}\n //         isOpened={activeFilter === \"author\"}\n //         list={memoizedGetUniqueValues}\n //       >\n //         artist\n //       </FilterBlockItem>\n //       <FilterBlockItem\n //         onClick={() => handleFilterClick(\"release_date\")}\n //         isOpened={activeFilter === \"release_date\"}\n //         list={memoizedGetUniqueYears}\n //       >\n //         year\n //       </FilterBlockItem>\n //       <FilterBlockItem\n //         onClick={() => handleFilterClick(\"genre\")}\n //         isOpened={activeFilter === \"genre\"}\n //         list={memoizedGetUniqueValues}\n //       >\n //         genre\n //       </FilterBlockItem>\n //     </div>\n //   );\n // };\n // export default FilterBlock;\nvar _c;\n$RefreshReg$(_c, \"FilterBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0ZpbHRlckJsb2NrL0ZpbHRlckJsb2NrLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRW9DO0FBQ1U7QUFDRztBQUNnQjtBQUNSO0FBRTBCLENBQUMsNENBQTRDO0FBRWhJLE1BQU1TLGNBQWM7O0lBQ2xCLE1BQU1DLFdBQVdKLHNEQUFjQTtJQUMvQixNQUFNSyxXQUFXSixzREFBY0EsQ0FBQyxDQUFDSyxRQUFVQSxNQUFNQyxNQUFNLENBQUNGLFFBQVE7SUFDaEUsTUFBTUcsa0JBQWtCUCxzREFBY0EsQ0FBQyxDQUFDSyxRQUFVQSxNQUFNQyxNQUFNLENBQUNFLGFBQWEsQ0FBQ0MsT0FBTztJQUNwRixNQUFNQyxpQkFBaUJWLHNEQUFjQSxDQUFDLENBQUNLLFFBQVVBLE1BQU1DLE1BQU0sQ0FBQ0UsYUFBYSxDQUFDRyxNQUFNO0lBQ2xGLE1BQU0sQ0FBQ0Msd0JBQXdCQywwQkFBMEIsR0FBR2hCLCtDQUFRQSxDQUFTO0lBQzdFLE1BQU0sQ0FBQ2lCLG1CQUFtQkMscUJBQXFCLEdBQUdsQiwrQ0FBUUEsQ0FBeUI7SUFFbkYsY0FBYztJQUNkLE1BQU1tQixtQkFBbUI7UUFBQztRQUFXO1FBQWE7S0FBWTtJQUU5RCxNQUFNQywwQkFBMEIsQ0FBQ0M7UUFDL0JMLDBCQUEwQks7UUFDMUJmLFNBQVNGLDRFQUFlQSxDQUFDO1lBQ3ZCa0IsZUFBZUQ7UUFBTztJQUMxQjtJQUNBLGdCQUFnQjtJQUNoQixNQUFNRSx3QkFBd0IsQ0FBQ0M7UUFDN0JsQixTQUFTRiw0RUFBZUEsQ0FBQztZQUN2QlEsU0FBU0YsZ0JBQWdCZSxRQUFRLENBQUNELFVBQVVkLGdCQUFnQmdCLE1BQU0sQ0FBQyxDQUFDQyxPQUFTQSxTQUFTSCxVQUFVO21CQUFLZDtnQkFBaUJjO2FBQVE7UUFDaEk7SUFDRjtJQUNBLGVBQWU7SUFDZixNQUFNSSx1QkFBdUIsQ0FBQ0M7UUFDNUJ2QixTQUFTRiw0RUFBZUEsQ0FBQztZQUN2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bUM7Q0FDbkMsc0JBQXNCO0NBQ3RCLHNGQUFzRjtDQUN0RixzRUFBc0U7Q0FDdEUsNkNBQTZDO0NBQzdDLHVFQUF1RTtDQUN2RSw4Q0FBOEM7Q0FDOUMsY0FBYztDQUNkLE9BQU87Q0FDUCxlQUFlO0NBQ2Ysb0RBQW9EO0NBQ3BELDBCQUEwQjtDQUMxQiw4Q0FBOEM7Q0FDOUMsUUFBUTtDQUNSLGlCQUFpQjtDQUNqQixrQ0FBa0M7Q0FDbEMsbURBQW1EO0NBQ25ELDBCQUEwQjtDQUMxQixpQ0FBaUM7Q0FDakMsUUFBUTtDQUNSLGlCQUFpQjtDQUNqQixrQ0FBa0M7Q0FFbEMsYUFBYTtDQUNiLDRFQUE0RTtDQUM1RSw4REFBOEQ7Q0FFOUQseUJBQXlCO0NBQ3pCLHNEQUFzRDtDQUN0RCwrQ0FBK0M7Q0FDL0MseUNBQXlDO0NBQ3pDLFVBQVU7Q0FDVixpQkFBaUI7Q0FDakIsMkJBQTJCO0NBQzNCLHlCQUF5QjtDQUN6Qiw0REFBNEQ7Q0FDNUQscURBQXFEO0NBQ3JELHdDQUF3QztDQUN4QyxVQUFVO0NBQ1YsZUFBZTtDQUNmLDJCQUEyQjtDQUMzQix5QkFBeUI7Q0FDekIscURBQXFEO0NBQ3JELDhDQUE4QztDQUM5Qyx5Q0FBeUM7Q0FDekMsVUFBVTtDQUNWLGdCQUFnQjtDQUNoQiwyQkFBMkI7Q0FFM0IsYUFBYTtDQUNiLE9BQU87Q0FDUCxLQUFLO0NBRUwsOEJBQThCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0ZpbHRlckJsb2NrL0ZpbHRlckJsb2NrLnRzeD9iNTZjIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5cbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0ZpbHRlckJsb2NrLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGaWx0ZXJCbG9ja0l0ZW0gZnJvbSAnLi4vRmlsdGVyQmxvY2tJdGVtL0ZpbHRlckJsb2NrSXRlbSc7XG5pbXBvcnQgeyB1c2VBcHBEaXNwYXRjaCwgdXNlQXBwU2VsZWN0b3IgfSBmcm9tICdAL2hvb2tzJztcbmltcG9ydCB7IHRyYWNrVHlwZSwgdXNlclR5cGUgfSBmcm9tICdAL3R5cGVzL3R5cGVzJztcbmltcG9ydCB7IGNsZWFyQWN0aXZlRmlsdGVycywgc2V0QWN0aXZlRmlsdGVyIH0gZnJvbSAnQC9zdG9yZS9mZWF0dXJlcy90cmFja3NTbGljZSc7IC8vIFJlbmFtaW5nIHNldEFjdGl2ZUZpbHRlciBmcm9tIHRyYWNrc1NsaWNlXG5cbmNvbnN0IEZpbHRlckJsb2NrID0gKCkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKCk7XG4gIGNvbnN0IHBsYXlMaXN0ID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS50cmFja3MucGxheUxpc3QpO1xuICBjb25zdCBzZWxlY3RlZEF1dGhvcnMgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnRyYWNrcy5hY3RpdmVGaWx0ZXJzLmF1dGhvcnMpO1xuICBjb25zdCBzZWxlY3RlZEdlbnJlcyA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudHJhY2tzLmFjdGl2ZUZpbHRlcnMuZ2VucmVzKTtcbiAgY29uc3QgW2xvY2FsUmVsZWFzZVllYXJGaWx0ZXIsIHNldExvY2FsUmVsZWFzZVllYXJGaWx0ZXJdID0gdXNlU3RhdGU8c3RyaW5nPignZGVmYXVsdCcpO1xuICBjb25zdCBbbG9jYWxBY3RpdmVGaWx0ZXIsIHNldExvY2FsQWN0aXZlRmlsdGVyXSA9IHVzZVN0YXRlPGtleW9mIHRyYWNrVHlwZSB8IG51bGw+KG51bGwpO1xuXG4gIC8vIHllYXIgZmlsdGVyXG4gIGNvbnN0IHNvcnRCeVllYXJWYWx1ZXMgPSBbXCJEZWZhdWx0XCIsIFwiTmV3IGZpcnN0XCIsIFwiT2xkIGZpcnN0XCJdO1xuXG4gIGNvbnN0IHRvZ2dsZVJlbGVhc2VZZWFyRmlsdGVyID0gKG9wdGlvbjogc3RyaW5nKSA9PiB7XG4gICAgc2V0TG9jYWxSZWxlYXNlWWVhckZpbHRlcihvcHRpb24pO1xuICAgIGRpc3BhdGNoKHNldEFjdGl2ZUZpbHRlcih7IFxuICAgICAgcmVsZWFzZV9kYXRlczogb3B0aW9uIH0pKTtcbiAgfTtcbiAgLy8gYXJ0aXN0IGZpbHRlclxuICBjb25zdCB0b2dnbGVTZWxlY3RlZEF1dGhvcnMgPSAoYXV0aG9yOiBzdHJpbmcpID0+IHtcbiAgICBkaXNwYXRjaChzZXRBY3RpdmVGaWx0ZXIoe1xuICAgICAgYXV0aG9yczogc2VsZWN0ZWRBdXRob3JzLmluY2x1ZGVzKGF1dGhvcikgPyBzZWxlY3RlZEF1dGhvcnMuZmlsdGVyKChpdGVtKSA9PiBpdGVtICE9PSBhdXRob3IpIDogWyAuLi5zZWxlY3RlZEF1dGhvcnMsIGF1dGhvciBdLFxuICAgIH0pKVxuICB9O1xuICAvLyBnZW5yZSBmaWx0ZXJcbiAgY29uc3QgdG9nZ2xlU2VsZWN0ZWRHZW5yZXMgPSAoZ2VucmU6IHN0cmluZykgPT4ge1xuICAgIGRpc3BhdGNoKHNldEFjdGl2ZUZpbHRlcih7XG4gICAgICBnZW5yZXM6IHNlbGVjdGVkR2VucmVzLmluY2x1ZGVzKGdlbnJlKSA/IHNlbGVjdGVkR2VucmVzLmZpbHRlcigoaXRlbSkgPT4gaXRlbSAhPT0gZ2VucmUpIDogWyAuLi5zZWxlY3RlZEdlbnJlcywgZ2VucmUgXSxcbiAgICB9KSlcbiAgfTtcbiAgXG4gIC8vIGdldCB1bmlxdWUgdmFsdWVzIGZvciBlYWNoIGZpbHRlclxuICBjb25zdCBnZXRVbmlxdWVWYWx1ZXMgPSAocHJvcGVydHk6IGtleW9mIHRyYWNrVHlwZSkgPT4ge1xuICAgICAgICByZXR1cm4gcGxheUxpc3RcbiAgICAgICAgICA/IEFycmF5LmZyb20obmV3IFNldChwbGF5TGlzdC5tYXAoKHRyYWNrOiB0cmFja1R5cGUpID0+IHRyYWNrW3Byb3BlcnR5XSkpKVxuICAgICAgICAgICAgLmZpbHRlcigodmFsdWUpID0+IHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiAmJiB2YWx1ZSAhPT0gXCItXCIpXG4gICAgICAgICAgICAubWFwKCh2YWx1ZSkgPT4gdmFsdWUgYXMgc3RyaW5nKVxuICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGEubG9jYWxlQ29tcGFyZShiKSlcbiAgICAgICAgICA6IFtdO1xuICB9O1xuICBcbiAgLy8gdXNlTWVtb1xuICBjb25zdCBtZW1vaXplZEdldFVuaXF1ZVZhbHVlcyA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGlmIChsb2NhbEFjdGl2ZUZpbHRlcikge1xuICAgICAgcmV0dXJuIGdldFVuaXF1ZVZhbHVlcyhsb2NhbEFjdGl2ZUZpbHRlcik7XG4gICAgfVxuICAgIHJldHVybiBbXTtcbiAgfSwgW2xvY2FsQWN0aXZlRmlsdGVyLCBwbGF5TGlzdF0pO1xuXG4gIC8vIC8vIGdldFVuaXF1ZVZhbHVlcyBmdW5jdGlvbiBhZGp1c3RlZCB0byBzb3J0IHJlbGVhc2VfZGF0ZSBwYXJhbXMgdG8gdW5pcXVlIHllYXJzXG4gIC8vIGNvbnN0IGdldFVuaXF1ZVllYXJzID0gKCkgPT4ge1xuICAvLyAgIHJldHVybiBwbGF5TGlzdFxuICAvLyAgICAgPyBBcnJheS5mcm9tKG5ldyBTZXQocGxheUxpc3QubWFwKCh0cmFjazogdHJhY2tUeXBlKSA9PiB0cmFjay5yZWxlYXNlX2RhdGUpKSlcbiAgLy8gICAgICAgLmZpbHRlcigoZGF0ZSkgPT4gdHlwZW9mIGRhdGUgPT09IFwic3RyaW5nXCIgJiYgZGF0ZSAhPT0gXCItXCIpXG4gIC8vICAgICAgIC5tYXAoKGRhdGUpID0+IGRhdGUuc3BsaXQoXCItXCIpWzBdKVxuICAvLyAgICAgICAuZmlsdGVyKCh5ZWFyLCBpbmRleCwgc2VsZikgPT4gc2VsZi5pbmRleE9mKHllYXIpID09PSBpbmRleClcbiAgLy8gICAgICAgLnNvcnQoKGEsIGIpID0+IGEubG9jYWxlQ29tcGFyZShiKSlcbiAgLy8gICAgIDogW107XG4gIC8vIH07XG4gIC8vIC8vIGRpc3BsYXkgdHJhY2tzIHdpdGggcmVsZWFzZV9kYXRlIHN0YXJ0aW5nIGJ5IHllYXIgWVlZWVxuICAvLyBjb25zdCBnZXRUcmFja3NCeVllYXIgPSAoeWVhcjogc3RyaW5nKSA9PiB7XG4gIC8vICAgcmV0dXJuIHBsYXlMaXN0ID8gcGxheUxpc3QuZmlsdGVyKCh0cmFjazogdHJhY2tUeXBlKSA9PiB7XG4gIC8vICAgICAgIGNvbnN0IHJlbGVhc2VZZWFyID0gdHJhY2sucmVsZWFzZV9kYXRlLnNwbGl0KFwiLVwiKVswXTtcbiAgLy8gICAgICAgcmV0dXJuIHJlbGVhc2VZZWFyID09PSB5ZWFyIHx8IHJlbGVhc2VZZWFyID4geWVhcjtcbiAgLy8gICB9KSA6IFtdO1xuICAvLyB9O1xuICAvLyAvLyBnZXQgdGhlIGxpc3RzIG9mIHVuaXF1ZSBrZXlzIGZvciB0aGUgRmlsdGVyQmxvY2tJdGVtc1xuICAvLyBjb25zdCB1bmlxdWVBdXRob3JzID0gZ2V0VW5pcXVlVmFsdWVzKCdhdXRob3InKTtcbiAgLy8gY29uc3QgdW5pcXVlWWVhcnMgPSBnZXRVbmlxdWVWYWx1ZXMoJ3JlbGVhc2VfZGF0ZScpO1xuICAvLyAvLyBjb25zdCB1bmlxdWVZZWFycyA9IGdldFVuaXF1ZVllYXJzKCk7XG4gIC8vIGNvbnN0IHVuaXF1ZUdlbnJlcyA9IGdldFVuaXF1ZVZhbHVlcygnZ2VucmUnKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5jZW50ZXJCbG9ja0ZpbHRlciwgc3R5bGVzLmZpbHRlcil9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5maWx0ZXJUaXRsZX0+U2VhcmNoIGZvcjo8L2Rpdj5cblxuICAgICAgPEZpbHRlckJsb2NrSXRlbVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRMb2NhbEFjdGl2ZUZpbHRlcihsb2NhbEFjdGl2ZUZpbHRlciA9PT0gJ2F1dGhvcicgPyBudWxsIDogJ2F1dGhvcicpfVxuICAgICAgICBpc09wZW5lZD17bG9jYWxBY3RpdmVGaWx0ZXIgPT09ICdhdXRob3InfVxuICAgICAgICBsaXN0PXttZW1vaXplZEdldFVuaXF1ZVZhbHVlc31cbiAgICAgICAgdG9nZ2xlU2VsZWN0ZWRPcHRpb249e3RvZ2dsZVNlbGVjdGVkQXV0aG9yc31cbiAgICAgICAgPlxuICAgICAgICBBcnRpc3RcbiAgICAgIDwvRmlsdGVyQmxvY2tJdGVtPlxuXG4gICAgICA8RmlsdGVyQmxvY2tJdGVtXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldExvY2FsQWN0aXZlRmlsdGVyKGxvY2FsQWN0aXZlRmlsdGVyID09PSAncmVsZWFzZV9kYXRlJyA/IG51bGwgOiAncmVsZWFzZV9kYXRlJyl9XG4gICAgICAgIGlzT3BlbmVkPXtsb2NhbEFjdGl2ZUZpbHRlciA9PT0gJ3JlbGVhc2VfZGF0ZSd9XG4gICAgICAgIGxpc3Q9e3NvcnRCeVllYXJWYWx1ZXN9XG4gICAgICAgIHNlbGVjdGVkT3B0aW9uPXtsb2NhbFJlbGVhc2VZZWFyRmlsdGVyfSAvLyBQYXNzIHRoZSBzZWxlY3RlZCByZWxlYXNlIHllYXIgZmlsdGVyIG9wdGlvblxuICAgICAgICB0b2dnbGVTZWxlY3RlZE9wdGlvbj17dG9nZ2xlUmVsZWFzZVllYXJGaWx0ZXJ9IC8vIFBhc3MgdGhlIGZ1bmN0aW9uIHRvIHRvZ2dsZSBzZWxlY3RlZCBvcHRpb25cbiAgICAgID5cbiAgICAgICAgWWVhclxuICAgICAgPC9GaWx0ZXJCbG9ja0l0ZW0+XG5cbiAgICAgIDxGaWx0ZXJCbG9ja0l0ZW1cbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TG9jYWxBY3RpdmVGaWx0ZXIobG9jYWxBY3RpdmVGaWx0ZXIgPT09ICdnZW5yZScgPyBudWxsIDogJ2dlbnJlJyl9XG4gICAgICAgIGlzT3BlbmVkPXtsb2NhbEFjdGl2ZUZpbHRlciA9PT0gJ2dlbnJlJ31cbiAgICAgICAgZmlsdGVyS2V5PXtsb2NhbEFjdGl2ZUZpbHRlcn1cbiAgICAgICAgbGlzdD17bWVtb2l6ZWRHZXRVbmlxdWVWYWx1ZXN9XG4gICAgICAgIHRvZ2dsZVNlbGVjdGVkT3B0aW9uPXt0b2dnbGVTZWxlY3RlZEdlbnJlc31cbiAgICAgICAgPlxuICAgICAgICBHZW5yZVxuICAgICAgPC9GaWx0ZXJCbG9ja0l0ZW0+XG4gICAgICBcbiAgICAgIDxidXR0b24+XG4gICAgICAgIERpc2NhcmQgZmlsdGVyc1xuICAgICAgPC9idXR0b24+XG5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZpbHRlckJsb2NrO1xuXG4vLyBcInVzZSBjbGllbnRcIlxuXG4vLyBpbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuLy8gaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9GaWx0ZXJCbG9jay5tb2R1bGUuY3NzXCI7XG4vLyBpbXBvcnQgeyB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IEZpbHRlckJsb2NrSXRlbSBmcm9tIFwiLi4vRmlsdGVyQmxvY2tJdGVtL0ZpbHRlckJsb2NrSXRlbVwiO1xuLy8gaW1wb3J0IHsgdXNlQXBwU2VsZWN0b3IgfSBmcm9tIFwiQC9ob29rc1wiO1xuLy8gaW1wb3J0IHsgdHJhY2tUeXBlIH0gZnJvbSBcIkAvdHlwZXMvdHlwZXNcIjtcblxuLy8gY29uc3QgRmlsdGVyQmxvY2sgPSAoKSA9PiB7XG4vLyAgIC8vIGltcG9ydCBwbGF5bGlzdCBmcm9tIEFQSVxuLy8gICBjb25zdCBwbGF5TGlzdCA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudHJhY2tzLnBsYXlMaXN0KTtcbiAgXG4vLyAgIC8vIHNldCBmaWx0ZXJcbi8vICAgY29uc3QgW2FjdGl2ZUZpbHRlciwgc2V0QWN0aXZlRmlsdGVyXSA9IHVzZVN0YXRlPGtleW9mIHRyYWNrVHlwZSB8IG51bGw+KG51bGwpO1xuLy8gICAvLyBhcHBseSBmaWx0ZXJcbi8vICAgY29uc3QgaGFuZGxlRmlsdGVyQ2xpY2sgPSAobmV3RmlsdGVyOiBrZXlvZiB0cmFja1R5cGUpID0+IHtcbi8vICAgICBzZXRBY3RpdmVGaWx0ZXIoKHByZXYpID0+IChuZXdGaWx0ZXIgPT09IHByZXYgPyBudWxsIDogbmV3RmlsdGVyKSk7XG4vLyAgIH07XG4gIFxuLy8gICAvLyByZXR1cm5zIHVuaXF1ZSB2YWx1ZXMgZGVwZW5naW5nIG9uIHRoZSBrZXlcbi8vICAgY29uc3QgZ2V0VW5pcXVlVmFsdWVzID0gKHByb3BlcnR5OiBrZXlvZiB0cmFja1R5cGUpID0+IHtcbi8vICAgICByZXR1cm4gcGxheUxpc3Rcbi8vICAgICAgID8gQXJyYXkuZnJvbShuZXcgU2V0KHBsYXlMaXN0Lm1hcCgodHJhY2s6IHRyYWNrVHlwZSkgPT4gdHJhY2tbcHJvcGVydHldKSkpXG4vLyAgICAgICAgIC5maWx0ZXIoKHZhbHVlKSA9PiB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgJiYgdmFsdWUgIT09IFwiLVwiKVxuLy8gICAgICAgICAubWFwKCh2YWx1ZSkgPT4gdmFsdWUgYXMgc3RyaW5nKVxuLy8gICAgICAgICAuc29ydCgoYSwgYikgPT4gYS5sb2NhbGVDb21wYXJlKGIpKVxuLy8gICAgICAgOiBbXTtcbi8vICAgfTtcbi8vICAgLy8gZ2V0VW5pcXVlVmFsdWVzIGZ1bmN0aW9uIGFkanVzdGVkIHRvIHNvcnQgcmVsZWFzZV9kYXRlIHBhcmFtcyB0byB1bmlxdWUgeWVhcnNcbi8vICAgY29uc3QgZ2V0VW5pcXVlWWVhcnMgPSAoKSA9PiB7XG4vLyAgICAgcmV0dXJuIHBsYXlMaXN0XG4vLyAgICAgICA/IEFycmF5LmZyb20obmV3IFNldChwbGF5TGlzdC5tYXAoKHRyYWNrOiB0cmFja1R5cGUpID0+IHRyYWNrLnJlbGVhc2VfZGF0ZSkpKVxuLy8gICAgICAgICAuZmlsdGVyKChkYXRlKSA9PiB0eXBlb2YgZGF0ZSA9PT0gXCJzdHJpbmdcIiAmJiBkYXRlICE9PSBcIi1cIilcbi8vICAgICAgICAgLm1hcCgoZGF0ZSkgPT4gZGF0ZS5zcGxpdChcIi1cIilbMF0pXG4vLyAgICAgICAgIC5maWx0ZXIoKHllYXIsIGluZGV4LCBzZWxmKSA9PiBzZWxmLmluZGV4T2YoeWVhcikgPT09IGluZGV4KVxuLy8gICAgICAgICAuc29ydCgoYSwgYikgPT4gYS5sb2NhbGVDb21wYXJlKGIpKVxuLy8gICAgICAgOiBbXTtcbi8vICAgfTtcbi8vICAgLy8gdXNlTWVtb1xuLy8gICBjb25zdCBtZW1vaXplZEdldFVuaXF1ZVZhbHVlcyA9IHVzZU1lbW8oKCkgPT4ge1xuLy8gICAgIGlmIChhY3RpdmVGaWx0ZXIpIHtcbi8vICAgICAgIHJldHVybiBnZXRVbmlxdWVWYWx1ZXMoYWN0aXZlRmlsdGVyKTtcbi8vICAgICB9XG4vLyAgICAgcmV0dXJuIFtdO1xuLy8gICB9LCBbYWN0aXZlRmlsdGVyLCBwbGF5TGlzdF0pO1xuLy8gICBjb25zdCBtZW1vaXplZEdldFVuaXF1ZVllYXJzID0gdXNlTWVtbygoKSA9PiB7XG4vLyAgICAgaWYgKGFjdGl2ZUZpbHRlcikge1xuLy8gICAgICAgcmV0dXJuIGdldFVuaXF1ZVllYXJzKCk7XG4vLyAgICAgfVxuLy8gICAgIHJldHVybiBbXTtcbi8vICAgfSwgW2FjdGl2ZUZpbHRlciwgcGxheUxpc3RdKTtcblxuLy8gICByZXR1cm4gKFxuLy8gICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5jZW50ZXJCbG9ja0ZpbHRlciwgc3R5bGVzLmZpbHRlcil9PlxuLy8gICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5maWx0ZXJUaXRsZX0+U2VhcmNoIGZvcjo8L2Rpdj5cblxuLy8gICAgICAgPEZpbHRlckJsb2NrSXRlbVxuLy8gICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVGaWx0ZXJDbGljayhcImF1dGhvclwiKX1cbi8vICAgICAgICAgaXNPcGVuZWQ9e2FjdGl2ZUZpbHRlciA9PT0gXCJhdXRob3JcIn1cbi8vICAgICAgICAgbGlzdD17bWVtb2l6ZWRHZXRVbmlxdWVWYWx1ZXN9XG4vLyAgICAgICA+XG4vLyAgICAgICAgIGFydGlzdFxuLy8gICAgICAgPC9GaWx0ZXJCbG9ja0l0ZW0+XG4vLyAgICAgICA8RmlsdGVyQmxvY2tJdGVtXG4vLyAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUZpbHRlckNsaWNrKFwicmVsZWFzZV9kYXRlXCIpfVxuLy8gICAgICAgICBpc09wZW5lZD17YWN0aXZlRmlsdGVyID09PSBcInJlbGVhc2VfZGF0ZVwifVxuLy8gICAgICAgICBsaXN0PXttZW1vaXplZEdldFVuaXF1ZVllYXJzfVxuLy8gICAgICAgPlxuLy8gICAgICAgICB5ZWFyXG4vLyAgICAgICA8L0ZpbHRlckJsb2NrSXRlbT5cbi8vICAgICAgIDxGaWx0ZXJCbG9ja0l0ZW1cbi8vICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlRmlsdGVyQ2xpY2soXCJnZW5yZVwiKX1cbi8vICAgICAgICAgaXNPcGVuZWQ9e2FjdGl2ZUZpbHRlciA9PT0gXCJnZW5yZVwifVxuLy8gICAgICAgICBsaXN0PXttZW1vaXplZEdldFVuaXF1ZVZhbHVlc31cbi8vICAgICAgID5cbi8vICAgICAgICAgZ2VucmVcbi8vICAgICAgIDwvRmlsdGVyQmxvY2tJdGVtPlxuXG4vLyAgICAgPC9kaXY+XG4vLyAgICk7XG4vLyB9O1xuXG4vLyBleHBvcnQgZGVmYXVsdCBGaWx0ZXJCbG9jaztcbiJdLCJuYW1lcyI6WyJjbGFzc05hbWVzIiwic3R5bGVzIiwiUmVhY3QiLCJ1c2VNZW1vIiwidXNlU3RhdGUiLCJGaWx0ZXJCbG9ja0l0ZW0iLCJ1c2VBcHBEaXNwYXRjaCIsInVzZUFwcFNlbGVjdG9yIiwic2V0QWN0aXZlRmlsdGVyIiwiRmlsdGVyQmxvY2siLCJkaXNwYXRjaCIsInBsYXlMaXN0Iiwic3RhdGUiLCJ0cmFja3MiLCJzZWxlY3RlZEF1dGhvcnMiLCJhY3RpdmVGaWx0ZXJzIiwiYXV0aG9ycyIsInNlbGVjdGVkR2VucmVzIiwiZ2VucmVzIiwibG9jYWxSZWxlYXNlWWVhckZpbHRlciIsInNldExvY2FsUmVsZWFzZVllYXJGaWx0ZXIiLCJsb2NhbEFjdGl2ZUZpbHRlciIsInNldExvY2FsQWN0aXZlRmlsdGVyIiwic29ydEJ5WWVhclZhbHVlcyIsInRvZ2dsZVJlbGVhc2VZZWFyRmlsdGVyIiwib3B0aW9uIiwicmVsZWFzZV9kYXRlcyIsInRvZ2dsZVNlbGVjdGVkQXV0aG9ycyIsImF1dGhvciIsImluY2x1ZGVzIiwiZmlsdGVyIiwiaXRlbSIsInRvZ2dsZVNlbGVjdGVkR2VucmVzIiwiZ2VucmUiLCJnZXRVbmlxdWVWYWx1ZXMiLCJwcm9wZXJ0eSIsIkFycmF5IiwiZnJvbSIsIlNldCIsIm1hcCIsInRyYWNrIiwidmFsdWUiLCJzb3J0IiwiYSIsImIiLCJsb2NhbGVDb21wYXJlIiwibWVtb2l6ZWRHZXRVbmlxdWVWYWx1ZXMiLCJkaXYiLCJjbGFzc05hbWUiLCJjZW50ZXJCbG9ja0ZpbHRlciIsImZpbHRlclRpdGxlIiwib25DbGljayIsImlzT3BlbmVkIiwibGlzdCIsInRvZ2dsZVNlbGVjdGVkT3B0aW9uIiwic2VsZWN0ZWRPcHRpb24iLCJmaWx0ZXJLZXkiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/FilterBlock/FilterBlock.tsx\n"));

/***/ })

});