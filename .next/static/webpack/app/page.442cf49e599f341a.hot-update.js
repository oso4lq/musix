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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FilterBlock.module.css */ \"(app-pages-browser)/./src/components/FilterBlock/FilterBlock.module.css\");\n/* harmony import */ var _FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _FilterBlockItem_FilterBlockItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../FilterBlockItem/FilterBlockItem */ \"(app-pages-browser)/./src/components/FilterBlockItem/FilterBlockItem.tsx\");\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/hooks */ \"(app-pages-browser)/./src/hooks.ts\");\n/* harmony import */ var _store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/store/features/tracksSlice */ \"(app-pages-browser)/./src/store/features/tracksSlice.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n // Renaming setActiveFilter from tracksSlice\nconst FilterBlock = ()=>{\n    _s();\n    const dispatch = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useAppDispatch)();\n    const playList = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useAppSelector)((state)=>state.tracks.playList);\n    const selectedAuthors = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useAppSelector)((state)=>state.tracks.activeFilters.authors);\n    const selectedGenres = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useAppSelector)((state)=>state.tracks.activeFilters.genres);\n    const [localReleaseYearFilter, setLocalReleaseYearFilter] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"default\");\n    const [localActiveFilter, setLocalActiveFilter] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    // year filter\n    const sortByYearValues = [\n        \"Default\",\n        \"New first\",\n        \"Old first\"\n    ];\n    const toggleReleaseYearFilter = (option)=>{\n        setLocalReleaseYearFilter(option);\n        dispatch((0,_store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_5__.setActiveFilter)({\n            releaseYear: option\n        }));\n    };\n    // artist filter\n    const toggleSelectedAuthors = (author)=>{\n        dispatch((0,_store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_5__.setActiveFilter)({\n            authors: selectedAuthors.includes(author) ? selectedAuthors.filter((item)=>item !== author) : [\n                ...selectedAuthors,\n                author\n            ]\n        }));\n    };\n    // genre filter\n    const toggleSelectedGenres = (genre)=>{\n        dispatch((0,_store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_5__.setActiveFilter)({\n            genres: selectedAuthors.includes(genre) ? selectedGenres.filter((item)=>item !== genre) : [\n                ...selectedGenres,\n                genre\n            ]\n        }));\n    };\n    // get unique values for each filter\n    const getUniqueValues = (property)=>{\n        return playList ? Array.from(new Set(playList.map((track)=>track[property]))).filter((value)=>typeof value === \"string\" && value !== \"-\").map((value)=>value).sort((a, b)=>a.localeCompare(b)) : [];\n    };\n    // useMemo\n    const memoizedGetUniqueValues = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{\n        if (localActiveFilter) {\n            return getUniqueValues(localActiveFilter);\n        }\n        return [];\n    }, [\n        localActiveFilter,\n        playList\n    ]);\n    // // getUniqueValues function adjusted to sort release_date params to unique years\n    // const getUniqueYears = () => {\n    //   return playList\n    //     ? Array.from(new Set(playList.map((track: trackType) => track.release_date)))\n    //       .filter((date) => typeof date === \"string\" && date !== \"-\")\n    //       .map((date) => date.split(\"-\")[0])\n    //       .filter((year, index, self) => self.indexOf(year) === index)\n    //       .sort((a, b) => a.localeCompare(b))\n    //     : [];\n    // };\n    // // display tracks with release_date starting by year YYYY\n    // const getTracksByYear = (year: string) => {\n    //   return playList ? playList.filter((track: trackType) => {\n    //       const releaseYear = track.release_date.split(\"-\")[0];\n    //       return releaseYear === year || releaseYear > year;\n    //   }) : [];\n    // };\n    // // get the lists of unique keys for the FilterBlockItems\n    // const uniqueAuthors = getUniqueValues('author');\n    // const uniqueYears = getUniqueValues('release_date');\n    // // const uniqueYears = getUniqueYears();\n    // const uniqueGenres = getUniqueValues('genre');\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().centerBlockFilter), (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().filter)),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().filterTitle),\n                children: \"Search for:\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterBlockItem_FilterBlockItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onClick: ()=>setLocalActiveFilter(localActiveFilter === \"author\" ? null : \"author\"),\n                isOpened: localActiveFilter === \"author\",\n                filterKey: localActiveFilter,\n                list: memoizedGetUniqueValues,\n                children: \"Artist\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterBlockItem_FilterBlockItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onClick: ()=>setLocalActiveFilter(localActiveFilter === \"release_date\" ? null : \"release_date\"),\n                isOpened: localActiveFilter === \"release_date\",\n                filterKey: localActiveFilter,\n                list: memoizedGetUniqueValues,\n                // applyFilter={(filterType, value) => applyFilter(filterType, value)}\n                selectedOption: sortByYearValues,\n                toggleSelectedOption: toggleReleaseYearFilter,\n                children: \"Year\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterBlockItem_FilterBlockItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onClick: ()=>setLocalActiveFilter(localActiveFilter === \"release_date\" ? null : \"release_date\"),\n                isOpened: localActiveFilter === \"release_date\",\n                filterKey: localActiveFilter,\n                list: memoizedGetUniqueValues,\n                children: \"Year\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 105,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterBlockItem_FilterBlockItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onClick: ()=>setLocalActiveFilter(localActiveFilter === \"genre\" ? null : \"genre\"),\n                isOpened: localActiveFilter === \"genre\",\n                filterKey: localActiveFilter,\n                list: memoizedGetUniqueValues,\n                children: \"Genre\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 115,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                children: \"Discard filters\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 125,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n        lineNumber: 80,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FilterBlock, \"8e2/RfYmya83rruM+E9wvC7kJdo=\", false, function() {\n    return [\n        _hooks__WEBPACK_IMPORTED_MODULE_4__.useAppDispatch,\n        _hooks__WEBPACK_IMPORTED_MODULE_4__.useAppSelector,\n        _hooks__WEBPACK_IMPORTED_MODULE_4__.useAppSelector,\n        _hooks__WEBPACK_IMPORTED_MODULE_4__.useAppSelector\n    ];\n});\n_c = FilterBlock;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FilterBlock); // \"use client\"\n // import classNames from \"classnames\";\n // import styles from \"./FilterBlock.module.css\";\n // import { useMemo, useState } from \"react\";\n // import FilterBlockItem from \"../FilterBlockItem/FilterBlockItem\";\n // import { useAppSelector } from \"@/hooks\";\n // import { trackType } from \"@/types/types\";\n // const FilterBlock = () => {\n //   // import playlist from API\n //   const playList = useAppSelector((state) => state.tracks.playList);\n //   // set filter\n //   const [activeFilter, setActiveFilter] = useState<keyof trackType | null>(null);\n //   // apply filter\n //   const handleFilterClick = (newFilter: keyof trackType) => {\n //     setActiveFilter((prev) => (newFilter === prev ? null : newFilter));\n //   };\n //   // returns unique values depenging on the key\n //   const getUniqueValues = (property: keyof trackType) => {\n //     return playList\n //       ? Array.from(new Set(playList.map((track: trackType) => track[property])))\n //         .filter((value) => typeof value === \"string\" && value !== \"-\")\n //         .map((value) => value as string)\n //         .sort((a, b) => a.localeCompare(b))\n //       : [];\n //   };\n //   // getUniqueValues function adjusted to sort release_date params to unique years\n //   const getUniqueYears = () => {\n //     return playList\n //       ? Array.from(new Set(playList.map((track: trackType) => track.release_date)))\n //         .filter((date) => typeof date === \"string\" && date !== \"-\")\n //         .map((date) => date.split(\"-\")[0])\n //         .filter((year, index, self) => self.indexOf(year) === index)\n //         .sort((a, b) => a.localeCompare(b))\n //       : [];\n //   };\n //   // useMemo\n //   const memoizedGetUniqueValues = useMemo(() => {\n //     if (activeFilter) {\n //       return getUniqueValues(activeFilter);\n //     }\n //     return [];\n //   }, [activeFilter, playList]);\n //   const memoizedGetUniqueYears = useMemo(() => {\n //     if (activeFilter) {\n //       return getUniqueYears();\n //     }\n //     return [];\n //   }, [activeFilter, playList]);\n //   return (\n //     <div className={classNames(styles.centerBlockFilter, styles.filter)}>\n //       <div className={styles.filterTitle}>Search for:</div>\n //       <FilterBlockItem\n //         onClick={() => handleFilterClick(\"author\")}\n //         isOpened={activeFilter === \"author\"}\n //         list={memoizedGetUniqueValues}\n //       >\n //         artist\n //       </FilterBlockItem>\n //       <FilterBlockItem\n //         onClick={() => handleFilterClick(\"release_date\")}\n //         isOpened={activeFilter === \"release_date\"}\n //         list={memoizedGetUniqueYears}\n //       >\n //         year\n //       </FilterBlockItem>\n //       <FilterBlockItem\n //         onClick={() => handleFilterClick(\"genre\")}\n //         isOpened={activeFilter === \"genre\"}\n //         list={memoizedGetUniqueValues}\n //       >\n //         genre\n //       </FilterBlockItem>\n //     </div>\n //   );\n // };\n // export default FilterBlock;\nvar _c;\n$RefreshReg$(_c, \"FilterBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0ZpbHRlckJsb2NrL0ZpbHRlckJsb2NrLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRW9DO0FBQ1U7QUFDRztBQUNnQjtBQUNSO0FBRTBCLENBQUMsNENBQTRDO0FBRWhJLE1BQU1TLGNBQWM7O0lBQ2xCLE1BQU1DLFdBQVdKLHNEQUFjQTtJQUMvQixNQUFNSyxXQUFXSixzREFBY0EsQ0FBQyxDQUFDSyxRQUFVQSxNQUFNQyxNQUFNLENBQUNGLFFBQVE7SUFDaEUsTUFBTUcsa0JBQWtCUCxzREFBY0EsQ0FBQyxDQUFDSyxRQUFVQSxNQUFNQyxNQUFNLENBQUNFLGFBQWEsQ0FBQ0MsT0FBTztJQUNwRixNQUFNQyxpQkFBaUJWLHNEQUFjQSxDQUFDLENBQUNLLFFBQVVBLE1BQU1DLE1BQU0sQ0FBQ0UsYUFBYSxDQUFDRyxNQUFNO0lBQ2xGLE1BQU0sQ0FBQ0Msd0JBQXdCQywwQkFBMEIsR0FBR2hCLCtDQUFRQSxDQUFTO0lBQzdFLE1BQU0sQ0FBQ2lCLG1CQUFtQkMscUJBQXFCLEdBQUdsQiwrQ0FBUUEsQ0FBeUI7SUFFbkYsY0FBYztJQUNkLE1BQU1tQixtQkFBbUI7UUFBQztRQUFXO1FBQWE7S0FBWTtJQUM5RCxNQUFNQywwQkFBMEIsQ0FBQ0M7UUFDL0JMLDBCQUEwQks7UUFDMUJmLFNBQVNGLDRFQUFlQSxDQUFDO1lBQUVrQixhQUFhRDtRQUFPO0lBQ2pEO0lBQ0EsZ0JBQWdCO0lBQ2hCLE1BQU1FLHdCQUF3QixDQUFDQztRQUM3QmxCLFNBQVNGLDRFQUFlQSxDQUFDO1lBQ3ZCUSxTQUFTRixnQkFBZ0JlLFFBQVEsQ0FBQ0QsVUFBVWQsZ0JBQWdCZ0IsTUFBTSxDQUFDLENBQUNDLE9BQVNBLFNBQVNILFVBQVU7bUJBQUtkO2dCQUFpQmM7YUFBUTtRQUNoSTtJQUNGO0lBQ0EsZUFBZTtJQUNmLE1BQU1JLHVCQUF1QixDQUFDQztRQUM1QnZCLFNBQVNGLDRFQUFlQSxDQUFDO1lBQ3ZC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RSxPQUFPO0NBRVAsa0RBQWtEO0NBQ2xELDZEQUE2RDtDQUM3RCxzQkFBc0I7Q0FDdEIsbUZBQW1GO0NBQ25GLHlFQUF5RTtDQUN6RSwyQ0FBMkM7Q0FDM0MsOENBQThDO0NBQzlDLGNBQWM7Q0FDZCxPQUFPO0NBQ1AscUZBQXFGO0NBQ3JGLG1DQUFtQztDQUNuQyxzQkFBc0I7Q0FDdEIsc0ZBQXNGO0NBQ3RGLHNFQUFzRTtDQUN0RSw2Q0FBNkM7Q0FDN0MsdUVBQXVFO0NBQ3ZFLDhDQUE4QztDQUM5QyxjQUFjO0NBQ2QsT0FBTztDQUNQLGVBQWU7Q0FDZixvREFBb0Q7Q0FDcEQsMEJBQTBCO0NBQzFCLDhDQUE4QztDQUM5QyxRQUFRO0NBQ1IsaUJBQWlCO0NBQ2pCLGtDQUFrQztDQUNsQyxtREFBbUQ7Q0FDbkQsMEJBQTBCO0NBQzFCLGlDQUFpQztDQUNqQyxRQUFRO0NBQ1IsaUJBQWlCO0NBQ2pCLGtDQUFrQztDQUVsQyxhQUFhO0NBQ2IsNEVBQTRFO0NBQzVFLDhEQUE4RDtDQUU5RCx5QkFBeUI7Q0FDekIsc0RBQXNEO0NBQ3RELCtDQUErQztDQUMvQyx5Q0FBeUM7Q0FDekMsVUFBVTtDQUNWLGlCQUFpQjtDQUNqQiwyQkFBMkI7Q0FDM0IseUJBQXlCO0NBQ3pCLDREQUE0RDtDQUM1RCxxREFBcUQ7Q0FDckQsd0NBQXdDO0NBQ3hDLFVBQVU7Q0FDVixlQUFlO0NBQ2YsMkJBQTJCO0NBQzNCLHlCQUF5QjtDQUN6QixxREFBcUQ7Q0FDckQsOENBQThDO0NBQzlDLHlDQUF5QztDQUN6QyxVQUFVO0NBQ1YsZ0JBQWdCO0NBQ2hCLDJCQUEyQjtDQUUzQixhQUFhO0NBQ2IsT0FBTztDQUNQLEtBQUs7Q0FFTCw4QkFBOEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRmlsdGVyQmxvY2svRmlsdGVyQmxvY2sudHN4P2I1NmMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcblxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vRmlsdGVyQmxvY2subW9kdWxlLmNzc1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZpbHRlckJsb2NrSXRlbSBmcm9tICcuLi9GaWx0ZXJCbG9ja0l0ZW0vRmlsdGVyQmxvY2tJdGVtJztcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoLCB1c2VBcHBTZWxlY3RvciB9IGZyb20gJ0AvaG9va3MnO1xuaW1wb3J0IHsgdHJhY2tUeXBlLCB1c2VyVHlwZSB9IGZyb20gJ0AvdHlwZXMvdHlwZXMnO1xuaW1wb3J0IHsgY2xlYXJBY3RpdmVGaWx0ZXJzLCBzZXRBY3RpdmVGaWx0ZXIgfSBmcm9tICdAL3N0b3JlL2ZlYXR1cmVzL3RyYWNrc1NsaWNlJzsgLy8gUmVuYW1pbmcgc2V0QWN0aXZlRmlsdGVyIGZyb20gdHJhY2tzU2xpY2VcblxuY29uc3QgRmlsdGVyQmxvY2sgPSAoKSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlQXBwRGlzcGF0Y2goKTtcbiAgY29uc3QgcGxheUxpc3QgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnRyYWNrcy5wbGF5TGlzdCk7XG4gIGNvbnN0IHNlbGVjdGVkQXV0aG9ycyA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudHJhY2tzLmFjdGl2ZUZpbHRlcnMuYXV0aG9ycyk7XG4gIGNvbnN0IHNlbGVjdGVkR2VucmVzID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS50cmFja3MuYWN0aXZlRmlsdGVycy5nZW5yZXMpO1xuICBjb25zdCBbbG9jYWxSZWxlYXNlWWVhckZpbHRlciwgc2V0TG9jYWxSZWxlYXNlWWVhckZpbHRlcl0gPSB1c2VTdGF0ZTxzdHJpbmc+KCdkZWZhdWx0Jyk7XG4gIGNvbnN0IFtsb2NhbEFjdGl2ZUZpbHRlciwgc2V0TG9jYWxBY3RpdmVGaWx0ZXJdID0gdXNlU3RhdGU8a2V5b2YgdHJhY2tUeXBlIHwgbnVsbD4obnVsbCk7XG5cbiAgLy8geWVhciBmaWx0ZXJcbiAgY29uc3Qgc29ydEJ5WWVhclZhbHVlcyA9IFtcIkRlZmF1bHRcIiwgXCJOZXcgZmlyc3RcIiwgXCJPbGQgZmlyc3RcIl07XG4gIGNvbnN0IHRvZ2dsZVJlbGVhc2VZZWFyRmlsdGVyID0gKG9wdGlvbjogc3RyaW5nKSA9PiB7XG4gICAgc2V0TG9jYWxSZWxlYXNlWWVhckZpbHRlcihvcHRpb24pO1xuICAgIGRpc3BhdGNoKHNldEFjdGl2ZUZpbHRlcih7IHJlbGVhc2VZZWFyOiBvcHRpb24gfSkpO1xuICB9O1xuICAvLyBhcnRpc3QgZmlsdGVyXG4gIGNvbnN0IHRvZ2dsZVNlbGVjdGVkQXV0aG9ycyA9IChhdXRob3I6IHN0cmluZykgPT4ge1xuICAgIGRpc3BhdGNoKHNldEFjdGl2ZUZpbHRlcih7XG4gICAgICBhdXRob3JzOiBzZWxlY3RlZEF1dGhvcnMuaW5jbHVkZXMoYXV0aG9yKSA/IHNlbGVjdGVkQXV0aG9ycy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0gIT09IGF1dGhvcikgOiBbIC4uLnNlbGVjdGVkQXV0aG9ycywgYXV0aG9yIF0sXG4gICAgfSkpXG4gIH07XG4gIC8vIGdlbnJlIGZpbHRlclxuICBjb25zdCB0b2dnbGVTZWxlY3RlZEdlbnJlcyA9IChnZW5yZTogc3RyaW5nKSA9PiB7XG4gICAgZGlzcGF0Y2goc2V0QWN0aXZlRmlsdGVyKHtcbiAgICAgIGdlbnJlczogc2VsZWN0ZWRBdXRob3JzLmluY2x1ZGVzKGdlbnJlKSA/IHNlbGVjdGVkR2VucmVzLmZpbHRlcigoaXRlbSkgPT4gaXRlbSAhPT0gZ2VucmUpIDogWyAuLi5zZWxlY3RlZEdlbnJlcywgZ2VucmUgXSxcbiAgICB9KSlcbiAgfTtcbiAgXG4gIC8vIGdldCB1bmlxdWUgdmFsdWVzIGZvciBlYWNoIGZpbHRlclxuICBjb25zdCBnZXRVbmlxdWVWYWx1ZXMgPSAocHJvcGVydHk6IGtleW9mIHRyYWNrVHlwZSkgPT4ge1xuICAgICAgICByZXR1cm4gcGxheUxpc3RcbiAgICAgICAgICA/IEFycmF5LmZyb20obmV3IFNldChwbGF5TGlzdC5tYXAoKHRyYWNrOiB0cmFja1R5cGUpID0+IHRyYWNrW3Byb3BlcnR5XSkpKVxuICAgICAgICAgICAgLmZpbHRlcigodmFsdWUpID0+IHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiAmJiB2YWx1ZSAhPT0gXCItXCIpXG4gICAgICAgICAgICAubWFwKCh2YWx1ZSkgPT4gdmFsdWUgYXMgc3RyaW5nKVxuICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGEubG9jYWxlQ29tcGFyZShiKSlcbiAgICAgICAgICA6IFtdO1xuICB9O1xuICBcbiAgLy8gdXNlTWVtb1xuICBjb25zdCBtZW1vaXplZEdldFVuaXF1ZVZhbHVlcyA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGlmIChsb2NhbEFjdGl2ZUZpbHRlcikge1xuICAgICAgcmV0dXJuIGdldFVuaXF1ZVZhbHVlcyhsb2NhbEFjdGl2ZUZpbHRlcik7XG4gICAgfVxuICAgIHJldHVybiBbXTtcbiAgfSwgW2xvY2FsQWN0aXZlRmlsdGVyLCBwbGF5TGlzdF0pO1xuXG4gIC8vIC8vIGdldFVuaXF1ZVZhbHVlcyBmdW5jdGlvbiBhZGp1c3RlZCB0byBzb3J0IHJlbGVhc2VfZGF0ZSBwYXJhbXMgdG8gdW5pcXVlIHllYXJzXG4gIC8vIGNvbnN0IGdldFVuaXF1ZVllYXJzID0gKCkgPT4ge1xuICAvLyAgIHJldHVybiBwbGF5TGlzdFxuICAvLyAgICAgPyBBcnJheS5mcm9tKG5ldyBTZXQocGxheUxpc3QubWFwKCh0cmFjazogdHJhY2tUeXBlKSA9PiB0cmFjay5yZWxlYXNlX2RhdGUpKSlcbiAgLy8gICAgICAgLmZpbHRlcigoZGF0ZSkgPT4gdHlwZW9mIGRhdGUgPT09IFwic3RyaW5nXCIgJiYgZGF0ZSAhPT0gXCItXCIpXG4gIC8vICAgICAgIC5tYXAoKGRhdGUpID0+IGRhdGUuc3BsaXQoXCItXCIpWzBdKVxuICAvLyAgICAgICAuZmlsdGVyKCh5ZWFyLCBpbmRleCwgc2VsZikgPT4gc2VsZi5pbmRleE9mKHllYXIpID09PSBpbmRleClcbiAgLy8gICAgICAgLnNvcnQoKGEsIGIpID0+IGEubG9jYWxlQ29tcGFyZShiKSlcbiAgLy8gICAgIDogW107XG4gIC8vIH07XG4gIC8vIC8vIGRpc3BsYXkgdHJhY2tzIHdpdGggcmVsZWFzZV9kYXRlIHN0YXJ0aW5nIGJ5IHllYXIgWVlZWVxuICAvLyBjb25zdCBnZXRUcmFja3NCeVllYXIgPSAoeWVhcjogc3RyaW5nKSA9PiB7XG4gIC8vICAgcmV0dXJuIHBsYXlMaXN0ID8gcGxheUxpc3QuZmlsdGVyKCh0cmFjazogdHJhY2tUeXBlKSA9PiB7XG4gIC8vICAgICAgIGNvbnN0IHJlbGVhc2VZZWFyID0gdHJhY2sucmVsZWFzZV9kYXRlLnNwbGl0KFwiLVwiKVswXTtcbiAgLy8gICAgICAgcmV0dXJuIHJlbGVhc2VZZWFyID09PSB5ZWFyIHx8IHJlbGVhc2VZZWFyID4geWVhcjtcbiAgLy8gICB9KSA6IFtdO1xuICAvLyB9O1xuICAvLyAvLyBnZXQgdGhlIGxpc3RzIG9mIHVuaXF1ZSBrZXlzIGZvciB0aGUgRmlsdGVyQmxvY2tJdGVtc1xuICAvLyBjb25zdCB1bmlxdWVBdXRob3JzID0gZ2V0VW5pcXVlVmFsdWVzKCdhdXRob3InKTtcbiAgLy8gY29uc3QgdW5pcXVlWWVhcnMgPSBnZXRVbmlxdWVWYWx1ZXMoJ3JlbGVhc2VfZGF0ZScpO1xuICAvLyAvLyBjb25zdCB1bmlxdWVZZWFycyA9IGdldFVuaXF1ZVllYXJzKCk7XG4gIC8vIGNvbnN0IHVuaXF1ZUdlbnJlcyA9IGdldFVuaXF1ZVZhbHVlcygnZ2VucmUnKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5jZW50ZXJCbG9ja0ZpbHRlciwgc3R5bGVzLmZpbHRlcil9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5maWx0ZXJUaXRsZX0+U2VhcmNoIGZvcjo8L2Rpdj5cblxuICAgICAgPEZpbHRlckJsb2NrSXRlbVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRMb2NhbEFjdGl2ZUZpbHRlcihsb2NhbEFjdGl2ZUZpbHRlciA9PT0gJ2F1dGhvcicgPyBudWxsIDogJ2F1dGhvcicpfVxuICAgICAgICBpc09wZW5lZD17bG9jYWxBY3RpdmVGaWx0ZXIgPT09ICdhdXRob3InfVxuICAgICAgICBmaWx0ZXJLZXk9e2xvY2FsQWN0aXZlRmlsdGVyfVxuICAgICAgICBsaXN0PXttZW1vaXplZEdldFVuaXF1ZVZhbHVlc31cbiAgICAgICAgLy8gYXBwbHlGaWx0ZXI9eygpID0+IGFwcGx5RmlsdGVyKCl9XG4gICAgICAgIC8vIGFwcGx5RmlsdGVyPXsoZmlsdGVyVHlwZSwgdmFsdWUpID0+IGFwcGx5RmlsdGVyKGZpbHRlclR5cGUsIHZhbHVlKX1cbiAgICAgICAgPlxuICAgICAgICBBcnRpc3RcbiAgICAgIDwvRmlsdGVyQmxvY2tJdGVtPlxuXG4gICAgICA8RmlsdGVyQmxvY2tJdGVtXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldExvY2FsQWN0aXZlRmlsdGVyKGxvY2FsQWN0aXZlRmlsdGVyID09PSAncmVsZWFzZV9kYXRlJyA/IG51bGwgOiAncmVsZWFzZV9kYXRlJyl9XG4gICAgICAgIGlzT3BlbmVkPXtsb2NhbEFjdGl2ZUZpbHRlciA9PT0gJ3JlbGVhc2VfZGF0ZSd9XG4gICAgICAgIGZpbHRlcktleT17bG9jYWxBY3RpdmVGaWx0ZXJ9XG4gICAgICAgIGxpc3Q9e21lbW9pemVkR2V0VW5pcXVlVmFsdWVzfVxuICAgICAgICAvLyBhcHBseUZpbHRlcj17KGZpbHRlclR5cGUsIHZhbHVlKSA9PiBhcHBseUZpbHRlcihmaWx0ZXJUeXBlLCB2YWx1ZSl9XG4gICAgICAgIHNlbGVjdGVkT3B0aW9uPXtzb3J0QnlZZWFyVmFsdWVzfSAvLyBQYXNzIHRoZSBzZWxlY3RlZCByZWxlYXNlIHllYXIgZmlsdGVyIG9wdGlvblxuICAgICAgICB0b2dnbGVTZWxlY3RlZE9wdGlvbj17dG9nZ2xlUmVsZWFzZVllYXJGaWx0ZXJ9IC8vIFBhc3MgdGhlIGZ1bmN0aW9uIHRvIHRvZ2dsZSBzZWxlY3RlZCBvcHRpb25cbiAgICAgID5cbiAgICAgICAgWWVhclxuICAgICAgPC9GaWx0ZXJCbG9ja0l0ZW0+XG4gICAgICA8RmlsdGVyQmxvY2tJdGVtXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldExvY2FsQWN0aXZlRmlsdGVyKGxvY2FsQWN0aXZlRmlsdGVyID09PSAncmVsZWFzZV9kYXRlJyA/IG51bGwgOiAncmVsZWFzZV9kYXRlJyl9XG4gICAgICAgIGlzT3BlbmVkPXtsb2NhbEFjdGl2ZUZpbHRlciA9PT0gJ3JlbGVhc2VfZGF0ZSd9XG4gICAgICAgIGZpbHRlcktleT17bG9jYWxBY3RpdmVGaWx0ZXJ9XG4gICAgICAgIGxpc3Q9e21lbW9pemVkR2V0VW5pcXVlVmFsdWVzfVxuICAgICAgICAvLyBhcHBseUZpbHRlcj17KGZpbHRlclR5cGUsIHZhbHVlKSA9PiBhcHBseUZpbHRlcihmaWx0ZXJUeXBlLCB2YWx1ZSl9XG4gICAgICA+XG4gICAgICAgIFllYXJcbiAgICAgIDwvRmlsdGVyQmxvY2tJdGVtPlxuXG4gICAgICA8RmlsdGVyQmxvY2tJdGVtXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldExvY2FsQWN0aXZlRmlsdGVyKGxvY2FsQWN0aXZlRmlsdGVyID09PSAnZ2VucmUnID8gbnVsbCA6ICdnZW5yZScpfVxuICAgICAgICBpc09wZW5lZD17bG9jYWxBY3RpdmVGaWx0ZXIgPT09ICdnZW5yZSd9XG4gICAgICAgIGZpbHRlcktleT17bG9jYWxBY3RpdmVGaWx0ZXJ9XG4gICAgICAgIGxpc3Q9e21lbW9pemVkR2V0VW5pcXVlVmFsdWVzfVxuICAgICAgICAvLyBhcHBseUZpbHRlcj17KGZpbHRlclR5cGUsIHZhbHVlKSA9PiBhcHBseUZpbHRlcihmaWx0ZXJUeXBlLCB2YWx1ZSl9XG4gICAgICAgID5cbiAgICAgICAgR2VucmVcbiAgICAgIDwvRmlsdGVyQmxvY2tJdGVtPlxuICAgICAgXG4gICAgICA8YnV0dG9uPlxuICAgICAgICBEaXNjYXJkIGZpbHRlcnNcbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJCbG9jaztcblxuLy8gXCJ1c2UgY2xpZW50XCJcblxuLy8gaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbi8vIGltcG9ydCBzdHlsZXMgZnJvbSBcIi4vRmlsdGVyQmxvY2subW9kdWxlLmNzc1wiO1xuLy8gaW1wb3J0IHsgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBGaWx0ZXJCbG9ja0l0ZW0gZnJvbSBcIi4uL0ZpbHRlckJsb2NrSXRlbS9GaWx0ZXJCbG9ja0l0ZW1cIjtcbi8vIGltcG9ydCB7IHVzZUFwcFNlbGVjdG9yIH0gZnJvbSBcIkAvaG9va3NcIjtcbi8vIGltcG9ydCB7IHRyYWNrVHlwZSB9IGZyb20gXCJAL3R5cGVzL3R5cGVzXCI7XG5cbi8vIGNvbnN0IEZpbHRlckJsb2NrID0gKCkgPT4ge1xuLy8gICAvLyBpbXBvcnQgcGxheWxpc3QgZnJvbSBBUElcbi8vICAgY29uc3QgcGxheUxpc3QgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnRyYWNrcy5wbGF5TGlzdCk7XG4gIFxuLy8gICAvLyBzZXQgZmlsdGVyXG4vLyAgIGNvbnN0IFthY3RpdmVGaWx0ZXIsIHNldEFjdGl2ZUZpbHRlcl0gPSB1c2VTdGF0ZTxrZXlvZiB0cmFja1R5cGUgfCBudWxsPihudWxsKTtcbi8vICAgLy8gYXBwbHkgZmlsdGVyXG4vLyAgIGNvbnN0IGhhbmRsZUZpbHRlckNsaWNrID0gKG5ld0ZpbHRlcjoga2V5b2YgdHJhY2tUeXBlKSA9PiB7XG4vLyAgICAgc2V0QWN0aXZlRmlsdGVyKChwcmV2KSA9PiAobmV3RmlsdGVyID09PSBwcmV2ID8gbnVsbCA6IG5ld0ZpbHRlcikpO1xuLy8gICB9O1xuICBcbi8vICAgLy8gcmV0dXJucyB1bmlxdWUgdmFsdWVzIGRlcGVuZ2luZyBvbiB0aGUga2V5XG4vLyAgIGNvbnN0IGdldFVuaXF1ZVZhbHVlcyA9IChwcm9wZXJ0eToga2V5b2YgdHJhY2tUeXBlKSA9PiB7XG4vLyAgICAgcmV0dXJuIHBsYXlMaXN0XG4vLyAgICAgICA/IEFycmF5LmZyb20obmV3IFNldChwbGF5TGlzdC5tYXAoKHRyYWNrOiB0cmFja1R5cGUpID0+IHRyYWNrW3Byb3BlcnR5XSkpKVxuLy8gICAgICAgICAuZmlsdGVyKCh2YWx1ZSkgPT4gdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiICYmIHZhbHVlICE9PSBcIi1cIilcbi8vICAgICAgICAgLm1hcCgodmFsdWUpID0+IHZhbHVlIGFzIHN0cmluZylcbi8vICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGEubG9jYWxlQ29tcGFyZShiKSlcbi8vICAgICAgIDogW107XG4vLyAgIH07XG4vLyAgIC8vIGdldFVuaXF1ZVZhbHVlcyBmdW5jdGlvbiBhZGp1c3RlZCB0byBzb3J0IHJlbGVhc2VfZGF0ZSBwYXJhbXMgdG8gdW5pcXVlIHllYXJzXG4vLyAgIGNvbnN0IGdldFVuaXF1ZVllYXJzID0gKCkgPT4ge1xuLy8gICAgIHJldHVybiBwbGF5TGlzdFxuLy8gICAgICAgPyBBcnJheS5mcm9tKG5ldyBTZXQocGxheUxpc3QubWFwKCh0cmFjazogdHJhY2tUeXBlKSA9PiB0cmFjay5yZWxlYXNlX2RhdGUpKSlcbi8vICAgICAgICAgLmZpbHRlcigoZGF0ZSkgPT4gdHlwZW9mIGRhdGUgPT09IFwic3RyaW5nXCIgJiYgZGF0ZSAhPT0gXCItXCIpXG4vLyAgICAgICAgIC5tYXAoKGRhdGUpID0+IGRhdGUuc3BsaXQoXCItXCIpWzBdKVxuLy8gICAgICAgICAuZmlsdGVyKCh5ZWFyLCBpbmRleCwgc2VsZikgPT4gc2VsZi5pbmRleE9mKHllYXIpID09PSBpbmRleClcbi8vICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGEubG9jYWxlQ29tcGFyZShiKSlcbi8vICAgICAgIDogW107XG4vLyAgIH07XG4vLyAgIC8vIHVzZU1lbW9cbi8vICAgY29uc3QgbWVtb2l6ZWRHZXRVbmlxdWVWYWx1ZXMgPSB1c2VNZW1vKCgpID0+IHtcbi8vICAgICBpZiAoYWN0aXZlRmlsdGVyKSB7XG4vLyAgICAgICByZXR1cm4gZ2V0VW5pcXVlVmFsdWVzKGFjdGl2ZUZpbHRlcik7XG4vLyAgICAgfVxuLy8gICAgIHJldHVybiBbXTtcbi8vICAgfSwgW2FjdGl2ZUZpbHRlciwgcGxheUxpc3RdKTtcbi8vICAgY29uc3QgbWVtb2l6ZWRHZXRVbmlxdWVZZWFycyA9IHVzZU1lbW8oKCkgPT4ge1xuLy8gICAgIGlmIChhY3RpdmVGaWx0ZXIpIHtcbi8vICAgICAgIHJldHVybiBnZXRVbmlxdWVZZWFycygpO1xuLy8gICAgIH1cbi8vICAgICByZXR1cm4gW107XG4vLyAgIH0sIFthY3RpdmVGaWx0ZXIsIHBsYXlMaXN0XSk7XG5cbi8vICAgcmV0dXJuIChcbi8vICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMuY2VudGVyQmxvY2tGaWx0ZXIsIHN0eWxlcy5maWx0ZXIpfT5cbi8vICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmlsdGVyVGl0bGV9PlNlYXJjaCBmb3I6PC9kaXY+XG5cbi8vICAgICAgIDxGaWx0ZXJCbG9ja0l0ZW1cbi8vICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlRmlsdGVyQ2xpY2soXCJhdXRob3JcIil9XG4vLyAgICAgICAgIGlzT3BlbmVkPXthY3RpdmVGaWx0ZXIgPT09IFwiYXV0aG9yXCJ9XG4vLyAgICAgICAgIGxpc3Q9e21lbW9pemVkR2V0VW5pcXVlVmFsdWVzfVxuLy8gICAgICAgPlxuLy8gICAgICAgICBhcnRpc3Rcbi8vICAgICAgIDwvRmlsdGVyQmxvY2tJdGVtPlxuLy8gICAgICAgPEZpbHRlckJsb2NrSXRlbVxuLy8gICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVGaWx0ZXJDbGljayhcInJlbGVhc2VfZGF0ZVwiKX1cbi8vICAgICAgICAgaXNPcGVuZWQ9e2FjdGl2ZUZpbHRlciA9PT0gXCJyZWxlYXNlX2RhdGVcIn1cbi8vICAgICAgICAgbGlzdD17bWVtb2l6ZWRHZXRVbmlxdWVZZWFyc31cbi8vICAgICAgID5cbi8vICAgICAgICAgeWVhclxuLy8gICAgICAgPC9GaWx0ZXJCbG9ja0l0ZW0+XG4vLyAgICAgICA8RmlsdGVyQmxvY2tJdGVtXG4vLyAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUZpbHRlckNsaWNrKFwiZ2VucmVcIil9XG4vLyAgICAgICAgIGlzT3BlbmVkPXthY3RpdmVGaWx0ZXIgPT09IFwiZ2VucmVcIn1cbi8vICAgICAgICAgbGlzdD17bWVtb2l6ZWRHZXRVbmlxdWVWYWx1ZXN9XG4vLyAgICAgICA+XG4vLyAgICAgICAgIGdlbnJlXG4vLyAgICAgICA8L0ZpbHRlckJsb2NrSXRlbT5cblxuLy8gICAgIDwvZGl2PlxuLy8gICApO1xuLy8gfTtcblxuLy8gZXhwb3J0IGRlZmF1bHQgRmlsdGVyQmxvY2s7XG4iXSwibmFtZXMiOlsiY2xhc3NOYW1lcyIsInN0eWxlcyIsIlJlYWN0IiwidXNlTWVtbyIsInVzZVN0YXRlIiwiRmlsdGVyQmxvY2tJdGVtIiwidXNlQXBwRGlzcGF0Y2giLCJ1c2VBcHBTZWxlY3RvciIsInNldEFjdGl2ZUZpbHRlciIsIkZpbHRlckJsb2NrIiwiZGlzcGF0Y2giLCJwbGF5TGlzdCIsInN0YXRlIiwidHJhY2tzIiwic2VsZWN0ZWRBdXRob3JzIiwiYWN0aXZlRmlsdGVycyIsImF1dGhvcnMiLCJzZWxlY3RlZEdlbnJlcyIsImdlbnJlcyIsImxvY2FsUmVsZWFzZVllYXJGaWx0ZXIiLCJzZXRMb2NhbFJlbGVhc2VZZWFyRmlsdGVyIiwibG9jYWxBY3RpdmVGaWx0ZXIiLCJzZXRMb2NhbEFjdGl2ZUZpbHRlciIsInNvcnRCeVllYXJWYWx1ZXMiLCJ0b2dnbGVSZWxlYXNlWWVhckZpbHRlciIsIm9wdGlvbiIsInJlbGVhc2VZZWFyIiwidG9nZ2xlU2VsZWN0ZWRBdXRob3JzIiwiYXV0aG9yIiwiaW5jbHVkZXMiLCJmaWx0ZXIiLCJpdGVtIiwidG9nZ2xlU2VsZWN0ZWRHZW5yZXMiLCJnZW5yZSIsImdldFVuaXF1ZVZhbHVlcyIsInByb3BlcnR5IiwiQXJyYXkiLCJmcm9tIiwiU2V0IiwibWFwIiwidHJhY2siLCJ2YWx1ZSIsInNvcnQiLCJhIiwiYiIsImxvY2FsZUNvbXBhcmUiLCJtZW1vaXplZEdldFVuaXF1ZVZhbHVlcyIsImRpdiIsImNsYXNzTmFtZSIsImNlbnRlckJsb2NrRmlsdGVyIiwiZmlsdGVyVGl0bGUiLCJvbkNsaWNrIiwiaXNPcGVuZWQiLCJmaWx0ZXJLZXkiLCJsaXN0Iiwic2VsZWN0ZWRPcHRpb24iLCJ0b2dnbGVTZWxlY3RlZE9wdGlvbiIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/FilterBlock/FilterBlock.tsx\n"));

/***/ })

});