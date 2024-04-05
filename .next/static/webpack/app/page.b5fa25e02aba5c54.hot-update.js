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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FilterBlock.module.css */ \"(app-pages-browser)/./src/components/FilterBlock/FilterBlock.module.css\");\n/* harmony import */ var _FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _FilterBlockItem_FilterBlockItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../FilterBlockItem/FilterBlockItem */ \"(app-pages-browser)/./src/components/FilterBlockItem/FilterBlockItem.tsx\");\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/hooks */ \"(app-pages-browser)/./src/hooks.ts\");\n/* harmony import */ var _store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/store/features/tracksSlice */ \"(app-pages-browser)/./src/store/features/tracksSlice.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n // Renaming setActiveFilter from tracksSlice\nconst FilterBlock = ()=>{\n    _s();\n    const dispatch = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useAppDispatch)();\n    const playList = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useAppSelector)((state)=>state.tracks.playList);\n    const selectedAuthors = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useAppSelector)((state)=>state.tracks.activeFilters.authors);\n    const selectedGenres = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useAppSelector)((state)=>state.tracks.activeFilters.genres);\n    const [localReleaseYearFilter, setLocalReleaseYearFilter] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"default\");\n    // year filter\n    const toggleReleaseYearFilter = (option)=>{\n        setLocalReleaseYearFilter(option);\n        dispatch((0,_store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_5__.setActiveFilter)({\n            releaseYear: option\n        }));\n    };\n    // artist filter\n    const toggleSelectedAuthors = (author)=>{\n        dispatch((0,_store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_5__.setActiveFilter)({\n            authors: selectedAuthors.includes(author) ? selectedAuthors.filter((item)=>item !== author) : [\n                ...selectedAuthors,\n                author\n            ]\n        }));\n    };\n    // genre filter\n    const toggleSelectedGenres = (genre)=>{\n        dispatch((0,_store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_5__.setActiveFilter)({\n            genres: selectedAuthors.includes(genre) ? selectedGenres.filter((item)=>item !== genre) : [\n                ...selectedGenres,\n                genre\n            ]\n        }));\n    };\n    // get unique values for each filter\n    const getUniqueValues = (property)=>{\n        return playList ? Array.from(new Set(playList.map((track)=>track[property]))).filter((value)=>typeof value === \"string\" && value !== \"-\").map((value)=>value).sort((a, b)=>a.localeCompare(b)) : [];\n    };\n    // useMemo\n    const memoizedGetUniqueValues = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{\n        if (localActiveFilter) {\n            return getUniqueValues(localActiveFilter);\n        }\n        return [];\n    }, [\n        localActiveFilter,\n        playList\n    ]);\n    // // getUniqueValues function adjusted to sort release_date params to unique years\n    // const getUniqueYears = () => {\n    //   return playList\n    //     ? Array.from(new Set(playList.map((track: trackType) => track.release_date)))\n    //       .filter((date) => typeof date === \"string\" && date !== \"-\")\n    //       .map((date) => date.split(\"-\")[0])\n    //       .filter((year, index, self) => self.indexOf(year) === index)\n    //       .sort((a, b) => a.localeCompare(b))\n    //     : [];\n    // };\n    // // display tracks with release_date starting by year YYYY\n    // const getTracksByYear = (year: string) => {\n    //   return playList ? playList.filter((track: trackType) => {\n    //       const releaseYear = track.release_date.split(\"-\")[0];\n    //       return releaseYear === year || releaseYear > year;\n    //   }) : [];\n    // };\n    // // get the lists of unique keys for the FilterBlockItems\n    // const uniqueAuthors = getUniqueValues('author');\n    // const uniqueYears = getUniqueValues('release_date');\n    // // const uniqueYears = getUniqueYears();\n    // const uniqueGenres = getUniqueValues('genre');\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().centerBlockFilter), (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().filter)),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().filterTitle),\n                children: \"Search for:\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterBlockItem_FilterBlockItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onClick: ()=>setLocalActiveFilter(localActiveFilter === \"author\" ? null : \"author\"),\n                isOpened: localActiveFilter === \"author\",\n                filterKey: localActiveFilter,\n                list: memoizedGetUniqueValues,\n                // applyFilter={() => applyFilter()}\n                applyFilter: (filterType, value)=>applyFilter(filterType, value),\n                children: \"Artist\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterBlockItem_FilterBlockItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onClick: ()=>setLocalActiveFilter(localActiveFilter === \"release_date\" ? null : \"release_date\"),\n                isOpened: localActiveFilter === \"release_date\",\n                filterKey: localActiveFilter,\n                list: memoizedGetUniqueValues,\n                applyFilter: (filterType, value)=>applyFilter(filterType, value),\n                selectedOption: localReleaseYearFilter,\n                toggleSelectedOption: toggleReleaseYearFilter,\n                children: \"Year\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterBlockItem_FilterBlockItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onClick: ()=>setLocalActiveFilter(localActiveFilter === \"release_date\" ? null : \"release_date\"),\n                isOpened: localActiveFilter === \"release_date\",\n                filterKey: localActiveFilter,\n                list: memoizedGetUniqueValues,\n                applyFilter: (filterType, value)=>applyFilter(filterType, value),\n                children: \"Year\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 102,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterBlockItem_FilterBlockItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onClick: ()=>setLocalActiveFilter(localActiveFilter === \"genre\" ? null : \"genre\"),\n                isOpened: localActiveFilter === \"genre\",\n                filterKey: localActiveFilter,\n                list: memoizedGetUniqueValues,\n                applyFilter: (filterType, value)=>applyFilter(filterType, value),\n                children: \"Genre\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 112,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: discardFilters,\n                children: \"Discard filters\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 122,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n        lineNumber: 77,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FilterBlock, \"nf5NXXYuHW7lH2TsIp8FgqdULcM=\", false, function() {\n    return [\n        _hooks__WEBPACK_IMPORTED_MODULE_4__.useAppDispatch,\n        _hooks__WEBPACK_IMPORTED_MODULE_4__.useAppSelector,\n        _hooks__WEBPACK_IMPORTED_MODULE_4__.useAppSelector,\n        _hooks__WEBPACK_IMPORTED_MODULE_4__.useAppSelector\n    ];\n});\n_c = FilterBlock;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FilterBlock); // \"use client\"\n // import classNames from \"classnames\";\n // import styles from \"./FilterBlock.module.css\";\n // import { useMemo, useState } from \"react\";\n // import FilterBlockItem from \"../FilterBlockItem/FilterBlockItem\";\n // import { useAppSelector } from \"@/hooks\";\n // import { trackType } from \"@/types/types\";\n // const FilterBlock = () => {\n //   // import playlist from API\n //   const playList = useAppSelector((state) => state.tracks.playList);\n //   // set filter\n //   const [activeFilter, setActiveFilter] = useState<keyof trackType | null>(null);\n //   // apply filter\n //   const handleFilterClick = (newFilter: keyof trackType) => {\n //     setActiveFilter((prev) => (newFilter === prev ? null : newFilter));\n //   };\n //   // returns unique values depenging on the key\n //   const getUniqueValues = (property: keyof trackType) => {\n //     return playList\n //       ? Array.from(new Set(playList.map((track: trackType) => track[property])))\n //         .filter((value) => typeof value === \"string\" && value !== \"-\")\n //         .map((value) => value as string)\n //         .sort((a, b) => a.localeCompare(b))\n //       : [];\n //   };\n //   // getUniqueValues function adjusted to sort release_date params to unique years\n //   const getUniqueYears = () => {\n //     return playList\n //       ? Array.from(new Set(playList.map((track: trackType) => track.release_date)))\n //         .filter((date) => typeof date === \"string\" && date !== \"-\")\n //         .map((date) => date.split(\"-\")[0])\n //         .filter((year, index, self) => self.indexOf(year) === index)\n //         .sort((a, b) => a.localeCompare(b))\n //       : [];\n //   };\n //   // useMemo\n //   const memoizedGetUniqueValues = useMemo(() => {\n //     if (activeFilter) {\n //       return getUniqueValues(activeFilter);\n //     }\n //     return [];\n //   }, [activeFilter, playList]);\n //   const memoizedGetUniqueYears = useMemo(() => {\n //     if (activeFilter) {\n //       return getUniqueYears();\n //     }\n //     return [];\n //   }, [activeFilter, playList]);\n //   return (\n //     <div className={classNames(styles.centerBlockFilter, styles.filter)}>\n //       <div className={styles.filterTitle}>Search for:</div>\n //       <FilterBlockItem\n //         onClick={() => handleFilterClick(\"author\")}\n //         isOpened={activeFilter === \"author\"}\n //         list={memoizedGetUniqueValues}\n //       >\n //         artist\n //       </FilterBlockItem>\n //       <FilterBlockItem\n //         onClick={() => handleFilterClick(\"release_date\")}\n //         isOpened={activeFilter === \"release_date\"}\n //         list={memoizedGetUniqueYears}\n //       >\n //         year\n //       </FilterBlockItem>\n //       <FilterBlockItem\n //         onClick={() => handleFilterClick(\"genre\")}\n //         isOpened={activeFilter === \"genre\"}\n //         list={memoizedGetUniqueValues}\n //       >\n //         genre\n //       </FilterBlockItem>\n //     </div>\n //   );\n // };\n // export default FilterBlock;\nvar _c;\n$RefreshReg$(_c, \"FilterBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0ZpbHRlckJsb2NrL0ZpbHRlckJsb2NrLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRW9DO0FBQ1U7QUFDRztBQUNnQjtBQUNSO0FBRTBCLENBQUMsNENBQTRDO0FBRWhJLE1BQU1TLGNBQWM7O0lBQ2xCLE1BQU1DLFdBQVdKLHNEQUFjQTtJQUMvQixNQUFNSyxXQUFXSixzREFBY0EsQ0FBQyxDQUFDSyxRQUFVQSxNQUFNQyxNQUFNLENBQUNGLFFBQVE7SUFDaEUsTUFBTUcsa0JBQWtCUCxzREFBY0EsQ0FBQyxDQUFDSyxRQUFVQSxNQUFNQyxNQUFNLENBQUNFLGFBQWEsQ0FBQ0MsT0FBTztJQUNwRixNQUFNQyxpQkFBaUJWLHNEQUFjQSxDQUFDLENBQUNLLFFBQVVBLE1BQU1DLE1BQU0sQ0FBQ0UsYUFBYSxDQUFDRyxNQUFNO0lBQ2xGLE1BQU0sQ0FBQ0Msd0JBQXdCQywwQkFBMEIsR0FBR2hCLCtDQUFRQSxDQUFTO0lBQzdFLGNBQWM7SUFDZCxNQUFNaUIsMEJBQTBCLENBQUNDO1FBQy9CRiwwQkFBMEJFO1FBQzFCWixTQUFTRiw0RUFBZUEsQ0FBQztZQUFFZSxhQUFhRDtRQUFPO0lBQ2pEO0lBQ0EsZ0JBQWdCO0lBQ2hCLE1BQU1FLHdCQUF3QixDQUFDQztRQUM3QmYsU0FBU0YsNEVBQWVBLENBQUM7WUFDdkJRLFNBQVNGLGdCQUFnQlksUUFBUSxDQUFDRCxVQUFVWCxnQkFBZ0JhLE1BQU0sQ0FBQyxDQUFDQyxPQUFTQSxTQUFTSCxVQUFVO21CQUFLWDtnQkFBaUJXO2FBQVE7UUFDaEk7SUFDRjtJQUNBLGVBQWU7SUFDZixNQUFNSSx1QkFBdUIsQ0FBQ0M7UUFDNUJwQixTQUFTRiw0RUFBZUEsQ0FBQztZQUN2QlUsUUFBUUosZ0JBQWdCWSxRQUFRLENBQUNJLFNBQVNiLGVBQWVVLE1BQU0sQ0FBQyxDQUFDQyxPQUFTQSxTQUFTRSxTQUFTO21CQUFLYjtnQkFBZ0JhO2FBQU87UUFD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QUNoQyx1RUFBdUU7Q0FFdkUsa0JBQWtCO0NBQ2xCLG9GQUFvRjtDQUNwRixvQkFBb0I7Q0FDcEIsZ0VBQWdFO0NBQ2hFLDBFQUEwRTtDQUMxRSxPQUFPO0NBRVAsa0RBQWtEO0NBQ2xELDZEQUE2RDtDQUM3RCxzQkFBc0I7Q0FDdEIsbUZBQW1GO0NBQ25GLHlFQUF5RTtDQUN6RSwyQ0FBMkM7Q0FDM0MsOENBQThDO0NBQzlDLGNBQWM7Q0FDZCxPQUFPO0NBQ1AscUZBQXFGO0NBQ3JGLG1DQUFtQztDQUNuQyxzQkFBc0I7Q0FDdEIsc0ZBQXNGO0NBQ3RGLHNFQUFzRTtDQUN0RSw2Q0FBNkM7Q0FDN0MsdUVBQXVFO0NBQ3ZFLDhDQUE4QztDQUM5QyxjQUFjO0NBQ2QsT0FBTztDQUNQLGVBQWU7Q0FDZixvREFBb0Q7Q0FDcEQsMEJBQTBCO0NBQzFCLDhDQUE4QztDQUM5QyxRQUFRO0NBQ1IsaUJBQWlCO0NBQ2pCLGtDQUFrQztDQUNsQyxtREFBbUQ7Q0FDbkQsMEJBQTBCO0NBQzFCLGlDQUFpQztDQUNqQyxRQUFRO0NBQ1IsaUJBQWlCO0NBQ2pCLGtDQUFrQztDQUVsQyxhQUFhO0NBQ2IsNEVBQTRFO0NBQzVFLDhEQUE4RDtDQUU5RCx5QkFBeUI7Q0FDekIsc0RBQXNEO0NBQ3RELCtDQUErQztDQUMvQyx5Q0FBeUM7Q0FDekMsVUFBVTtDQUNWLGlCQUFpQjtDQUNqQiwyQkFBMkI7Q0FDM0IseUJBQXlCO0NBQ3pCLDREQUE0RDtDQUM1RCxxREFBcUQ7Q0FDckQsd0NBQXdDO0NBQ3hDLFVBQVU7Q0FDVixlQUFlO0NBQ2YsMkJBQTJCO0NBQzNCLHlCQUF5QjtDQUN6QixxREFBcUQ7Q0FDckQsOENBQThDO0NBQzlDLHlDQUF5QztDQUN6QyxVQUFVO0NBQ1YsZ0JBQWdCO0NBQ2hCLDJCQUEyQjtDQUUzQixhQUFhO0NBQ2IsT0FBTztDQUNQLEtBQUs7Q0FFTCw4QkFBOEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRmlsdGVyQmxvY2svRmlsdGVyQmxvY2sudHN4P2I1NmMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcblxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vRmlsdGVyQmxvY2subW9kdWxlLmNzc1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZpbHRlckJsb2NrSXRlbSBmcm9tICcuLi9GaWx0ZXJCbG9ja0l0ZW0vRmlsdGVyQmxvY2tJdGVtJztcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoLCB1c2VBcHBTZWxlY3RvciB9IGZyb20gJ0AvaG9va3MnO1xuaW1wb3J0IHsgdHJhY2tUeXBlLCB1c2VyVHlwZSB9IGZyb20gJ0AvdHlwZXMvdHlwZXMnO1xuaW1wb3J0IHsgY2xlYXJBY3RpdmVGaWx0ZXJzLCBzZXRBY3RpdmVGaWx0ZXIgfSBmcm9tICdAL3N0b3JlL2ZlYXR1cmVzL3RyYWNrc1NsaWNlJzsgLy8gUmVuYW1pbmcgc2V0QWN0aXZlRmlsdGVyIGZyb20gdHJhY2tzU2xpY2VcblxuY29uc3QgRmlsdGVyQmxvY2sgPSAoKSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlQXBwRGlzcGF0Y2goKTtcbiAgY29uc3QgcGxheUxpc3QgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnRyYWNrcy5wbGF5TGlzdCk7XG4gIGNvbnN0IHNlbGVjdGVkQXV0aG9ycyA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudHJhY2tzLmFjdGl2ZUZpbHRlcnMuYXV0aG9ycyk7XG4gIGNvbnN0IHNlbGVjdGVkR2VucmVzID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS50cmFja3MuYWN0aXZlRmlsdGVycy5nZW5yZXMpO1xuICBjb25zdCBbbG9jYWxSZWxlYXNlWWVhckZpbHRlciwgc2V0TG9jYWxSZWxlYXNlWWVhckZpbHRlcl0gPSB1c2VTdGF0ZTxzdHJpbmc+KCdkZWZhdWx0Jyk7XG4gIC8vIHllYXIgZmlsdGVyXG4gIGNvbnN0IHRvZ2dsZVJlbGVhc2VZZWFyRmlsdGVyID0gKG9wdGlvbjogc3RyaW5nKSA9PiB7XG4gICAgc2V0TG9jYWxSZWxlYXNlWWVhckZpbHRlcihvcHRpb24pO1xuICAgIGRpc3BhdGNoKHNldEFjdGl2ZUZpbHRlcih7IHJlbGVhc2VZZWFyOiBvcHRpb24gfSkpO1xuICB9O1xuICAvLyBhcnRpc3QgZmlsdGVyXG4gIGNvbnN0IHRvZ2dsZVNlbGVjdGVkQXV0aG9ycyA9IChhdXRob3I6IHN0cmluZykgPT4ge1xuICAgIGRpc3BhdGNoKHNldEFjdGl2ZUZpbHRlcih7XG4gICAgICBhdXRob3JzOiBzZWxlY3RlZEF1dGhvcnMuaW5jbHVkZXMoYXV0aG9yKSA/IHNlbGVjdGVkQXV0aG9ycy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0gIT09IGF1dGhvcikgOiBbIC4uLnNlbGVjdGVkQXV0aG9ycywgYXV0aG9yIF0sXG4gICAgfSkpXG4gIH07XG4gIC8vIGdlbnJlIGZpbHRlclxuICBjb25zdCB0b2dnbGVTZWxlY3RlZEdlbnJlcyA9IChnZW5yZTogc3RyaW5nKSA9PiB7XG4gICAgZGlzcGF0Y2goc2V0QWN0aXZlRmlsdGVyKHtcbiAgICAgIGdlbnJlczogc2VsZWN0ZWRBdXRob3JzLmluY2x1ZGVzKGdlbnJlKSA/IHNlbGVjdGVkR2VucmVzLmZpbHRlcigoaXRlbSkgPT4gaXRlbSAhPT0gZ2VucmUpIDogWyAuLi5zZWxlY3RlZEdlbnJlcywgZ2VucmUgXSxcbiAgICB9KSlcbiAgfTtcbiAgXG4gIC8vIGdldCB1bmlxdWUgdmFsdWVzIGZvciBlYWNoIGZpbHRlclxuICBjb25zdCBnZXRVbmlxdWVWYWx1ZXMgPSAocHJvcGVydHk6IGtleW9mIHRyYWNrVHlwZSkgPT4ge1xuICAgICAgICByZXR1cm4gcGxheUxpc3RcbiAgICAgICAgICA/IEFycmF5LmZyb20obmV3IFNldChwbGF5TGlzdC5tYXAoKHRyYWNrOiB0cmFja1R5cGUpID0+IHRyYWNrW3Byb3BlcnR5XSkpKVxuICAgICAgICAgICAgLmZpbHRlcigodmFsdWUpID0+IHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiAmJiB2YWx1ZSAhPT0gXCItXCIpXG4gICAgICAgICAgICAubWFwKCh2YWx1ZSkgPT4gdmFsdWUgYXMgc3RyaW5nKVxuICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGEubG9jYWxlQ29tcGFyZShiKSlcbiAgICAgICAgICA6IFtdO1xuICB9O1xuICBcbiAgLy8gdXNlTWVtb1xuICBjb25zdCBtZW1vaXplZEdldFVuaXF1ZVZhbHVlcyA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGlmIChsb2NhbEFjdGl2ZUZpbHRlcikge1xuICAgICAgcmV0dXJuIGdldFVuaXF1ZVZhbHVlcyhsb2NhbEFjdGl2ZUZpbHRlcik7XG4gICAgfVxuICAgIHJldHVybiBbXTtcbiAgfSwgW2xvY2FsQWN0aXZlRmlsdGVyLCBwbGF5TGlzdF0pO1xuXG4gIC8vIC8vIGdldFVuaXF1ZVZhbHVlcyBmdW5jdGlvbiBhZGp1c3RlZCB0byBzb3J0IHJlbGVhc2VfZGF0ZSBwYXJhbXMgdG8gdW5pcXVlIHllYXJzXG4gIC8vIGNvbnN0IGdldFVuaXF1ZVllYXJzID0gKCkgPT4ge1xuICAvLyAgIHJldHVybiBwbGF5TGlzdFxuICAvLyAgICAgPyBBcnJheS5mcm9tKG5ldyBTZXQocGxheUxpc3QubWFwKCh0cmFjazogdHJhY2tUeXBlKSA9PiB0cmFjay5yZWxlYXNlX2RhdGUpKSlcbiAgLy8gICAgICAgLmZpbHRlcigoZGF0ZSkgPT4gdHlwZW9mIGRhdGUgPT09IFwic3RyaW5nXCIgJiYgZGF0ZSAhPT0gXCItXCIpXG4gIC8vICAgICAgIC5tYXAoKGRhdGUpID0+IGRhdGUuc3BsaXQoXCItXCIpWzBdKVxuICAvLyAgICAgICAuZmlsdGVyKCh5ZWFyLCBpbmRleCwgc2VsZikgPT4gc2VsZi5pbmRleE9mKHllYXIpID09PSBpbmRleClcbiAgLy8gICAgICAgLnNvcnQoKGEsIGIpID0+IGEubG9jYWxlQ29tcGFyZShiKSlcbiAgLy8gICAgIDogW107XG4gIC8vIH07XG4gIC8vIC8vIGRpc3BsYXkgdHJhY2tzIHdpdGggcmVsZWFzZV9kYXRlIHN0YXJ0aW5nIGJ5IHllYXIgWVlZWVxuICAvLyBjb25zdCBnZXRUcmFja3NCeVllYXIgPSAoeWVhcjogc3RyaW5nKSA9PiB7XG4gIC8vICAgcmV0dXJuIHBsYXlMaXN0ID8gcGxheUxpc3QuZmlsdGVyKCh0cmFjazogdHJhY2tUeXBlKSA9PiB7XG4gIC8vICAgICAgIGNvbnN0IHJlbGVhc2VZZWFyID0gdHJhY2sucmVsZWFzZV9kYXRlLnNwbGl0KFwiLVwiKVswXTtcbiAgLy8gICAgICAgcmV0dXJuIHJlbGVhc2VZZWFyID09PSB5ZWFyIHx8IHJlbGVhc2VZZWFyID4geWVhcjtcbiAgLy8gICB9KSA6IFtdO1xuICAvLyB9O1xuICAvLyAvLyBnZXQgdGhlIGxpc3RzIG9mIHVuaXF1ZSBrZXlzIGZvciB0aGUgRmlsdGVyQmxvY2tJdGVtc1xuICAvLyBjb25zdCB1bmlxdWVBdXRob3JzID0gZ2V0VW5pcXVlVmFsdWVzKCdhdXRob3InKTtcbiAgLy8gY29uc3QgdW5pcXVlWWVhcnMgPSBnZXRVbmlxdWVWYWx1ZXMoJ3JlbGVhc2VfZGF0ZScpO1xuICAvLyAvLyBjb25zdCB1bmlxdWVZZWFycyA9IGdldFVuaXF1ZVllYXJzKCk7XG4gIC8vIGNvbnN0IHVuaXF1ZUdlbnJlcyA9IGdldFVuaXF1ZVZhbHVlcygnZ2VucmUnKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5jZW50ZXJCbG9ja0ZpbHRlciwgc3R5bGVzLmZpbHRlcil9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5maWx0ZXJUaXRsZX0+U2VhcmNoIGZvcjo8L2Rpdj5cblxuICAgICAgPEZpbHRlckJsb2NrSXRlbVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRMb2NhbEFjdGl2ZUZpbHRlcihsb2NhbEFjdGl2ZUZpbHRlciA9PT0gJ2F1dGhvcicgPyBudWxsIDogJ2F1dGhvcicpfVxuICAgICAgICBpc09wZW5lZD17bG9jYWxBY3RpdmVGaWx0ZXIgPT09ICdhdXRob3InfVxuICAgICAgICBmaWx0ZXJLZXk9e2xvY2FsQWN0aXZlRmlsdGVyfVxuICAgICAgICBsaXN0PXttZW1vaXplZEdldFVuaXF1ZVZhbHVlc31cbiAgICAgICAgLy8gYXBwbHlGaWx0ZXI9eygpID0+IGFwcGx5RmlsdGVyKCl9XG4gICAgICAgIGFwcGx5RmlsdGVyPXsoZmlsdGVyVHlwZSwgdmFsdWUpID0+IGFwcGx5RmlsdGVyKGZpbHRlclR5cGUsIHZhbHVlKX1cbiAgICAgICAgPlxuICAgICAgICBBcnRpc3RcbiAgICAgIDwvRmlsdGVyQmxvY2tJdGVtPlxuXG4gICAgICA8RmlsdGVyQmxvY2tJdGVtXG4gICAgb25DbGljaz17KCkgPT4gc2V0TG9jYWxBY3RpdmVGaWx0ZXIobG9jYWxBY3RpdmVGaWx0ZXIgPT09ICdyZWxlYXNlX2RhdGUnID8gbnVsbCA6ICdyZWxlYXNlX2RhdGUnKX1cbiAgICBpc09wZW5lZD17bG9jYWxBY3RpdmVGaWx0ZXIgPT09ICdyZWxlYXNlX2RhdGUnfVxuICAgIGZpbHRlcktleT17bG9jYWxBY3RpdmVGaWx0ZXJ9XG4gICAgbGlzdD17bWVtb2l6ZWRHZXRVbmlxdWVWYWx1ZXN9XG4gICAgYXBwbHlGaWx0ZXI9eyhmaWx0ZXJUeXBlLCB2YWx1ZSkgPT4gYXBwbHlGaWx0ZXIoZmlsdGVyVHlwZSwgdmFsdWUpfVxuICAgIHNlbGVjdGVkT3B0aW9uPXtsb2NhbFJlbGVhc2VZZWFyRmlsdGVyfSAvLyBQYXNzIHRoZSBzZWxlY3RlZCByZWxlYXNlIHllYXIgZmlsdGVyIG9wdGlvblxuICAgIHRvZ2dsZVNlbGVjdGVkT3B0aW9uPXt0b2dnbGVSZWxlYXNlWWVhckZpbHRlcn0gLy8gUGFzcyB0aGUgZnVuY3Rpb24gdG8gdG9nZ2xlIHNlbGVjdGVkIG9wdGlvblxuPlxuICAgIFllYXJcbjwvRmlsdGVyQmxvY2tJdGVtPlxuICAgICAgPEZpbHRlckJsb2NrSXRlbVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRMb2NhbEFjdGl2ZUZpbHRlcihsb2NhbEFjdGl2ZUZpbHRlciA9PT0gJ3JlbGVhc2VfZGF0ZScgPyBudWxsIDogJ3JlbGVhc2VfZGF0ZScpfVxuICAgICAgICBpc09wZW5lZD17bG9jYWxBY3RpdmVGaWx0ZXIgPT09ICdyZWxlYXNlX2RhdGUnfVxuICAgICAgICBmaWx0ZXJLZXk9e2xvY2FsQWN0aXZlRmlsdGVyfVxuICAgICAgICBsaXN0PXttZW1vaXplZEdldFVuaXF1ZVZhbHVlc31cbiAgICAgICAgYXBwbHlGaWx0ZXI9eyhmaWx0ZXJUeXBlLCB2YWx1ZSkgPT4gYXBwbHlGaWx0ZXIoZmlsdGVyVHlwZSwgdmFsdWUpfVxuICAgICAgPlxuICAgICAgICBZZWFyXG4gICAgICA8L0ZpbHRlckJsb2NrSXRlbT5cblxuICAgICAgPEZpbHRlckJsb2NrSXRlbVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRMb2NhbEFjdGl2ZUZpbHRlcihsb2NhbEFjdGl2ZUZpbHRlciA9PT0gJ2dlbnJlJyA/IG51bGwgOiAnZ2VucmUnKX1cbiAgICAgICAgaXNPcGVuZWQ9e2xvY2FsQWN0aXZlRmlsdGVyID09PSAnZ2VucmUnfVxuICAgICAgICBmaWx0ZXJLZXk9e2xvY2FsQWN0aXZlRmlsdGVyfVxuICAgICAgICBsaXN0PXttZW1vaXplZEdldFVuaXF1ZVZhbHVlc31cbiAgICAgICAgYXBwbHlGaWx0ZXI9eyhmaWx0ZXJUeXBlLCB2YWx1ZSkgPT4gYXBwbHlGaWx0ZXIoZmlsdGVyVHlwZSwgdmFsdWUpfVxuICAgICAgICA+XG4gICAgICAgIEdlbnJlXG4gICAgICA8L0ZpbHRlckJsb2NrSXRlbT5cbiAgICAgIFxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtkaXNjYXJkRmlsdGVyc30+XG4gICAgICAgIERpc2NhcmQgZmlsdGVyc1xuICAgICAgPC9idXR0b24+XG5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZpbHRlckJsb2NrO1xuXG4vLyBcInVzZSBjbGllbnRcIlxuXG4vLyBpbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuLy8gaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9GaWx0ZXJCbG9jay5tb2R1bGUuY3NzXCI7XG4vLyBpbXBvcnQgeyB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IEZpbHRlckJsb2NrSXRlbSBmcm9tIFwiLi4vRmlsdGVyQmxvY2tJdGVtL0ZpbHRlckJsb2NrSXRlbVwiO1xuLy8gaW1wb3J0IHsgdXNlQXBwU2VsZWN0b3IgfSBmcm9tIFwiQC9ob29rc1wiO1xuLy8gaW1wb3J0IHsgdHJhY2tUeXBlIH0gZnJvbSBcIkAvdHlwZXMvdHlwZXNcIjtcblxuLy8gY29uc3QgRmlsdGVyQmxvY2sgPSAoKSA9PiB7XG4vLyAgIC8vIGltcG9ydCBwbGF5bGlzdCBmcm9tIEFQSVxuLy8gICBjb25zdCBwbGF5TGlzdCA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudHJhY2tzLnBsYXlMaXN0KTtcbiAgXG4vLyAgIC8vIHNldCBmaWx0ZXJcbi8vICAgY29uc3QgW2FjdGl2ZUZpbHRlciwgc2V0QWN0aXZlRmlsdGVyXSA9IHVzZVN0YXRlPGtleW9mIHRyYWNrVHlwZSB8IG51bGw+KG51bGwpO1xuLy8gICAvLyBhcHBseSBmaWx0ZXJcbi8vICAgY29uc3QgaGFuZGxlRmlsdGVyQ2xpY2sgPSAobmV3RmlsdGVyOiBrZXlvZiB0cmFja1R5cGUpID0+IHtcbi8vICAgICBzZXRBY3RpdmVGaWx0ZXIoKHByZXYpID0+IChuZXdGaWx0ZXIgPT09IHByZXYgPyBudWxsIDogbmV3RmlsdGVyKSk7XG4vLyAgIH07XG4gIFxuLy8gICAvLyByZXR1cm5zIHVuaXF1ZSB2YWx1ZXMgZGVwZW5naW5nIG9uIHRoZSBrZXlcbi8vICAgY29uc3QgZ2V0VW5pcXVlVmFsdWVzID0gKHByb3BlcnR5OiBrZXlvZiB0cmFja1R5cGUpID0+IHtcbi8vICAgICByZXR1cm4gcGxheUxpc3Rcbi8vICAgICAgID8gQXJyYXkuZnJvbShuZXcgU2V0KHBsYXlMaXN0Lm1hcCgodHJhY2s6IHRyYWNrVHlwZSkgPT4gdHJhY2tbcHJvcGVydHldKSkpXG4vLyAgICAgICAgIC5maWx0ZXIoKHZhbHVlKSA9PiB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgJiYgdmFsdWUgIT09IFwiLVwiKVxuLy8gICAgICAgICAubWFwKCh2YWx1ZSkgPT4gdmFsdWUgYXMgc3RyaW5nKVxuLy8gICAgICAgICAuc29ydCgoYSwgYikgPT4gYS5sb2NhbGVDb21wYXJlKGIpKVxuLy8gICAgICAgOiBbXTtcbi8vICAgfTtcbi8vICAgLy8gZ2V0VW5pcXVlVmFsdWVzIGZ1bmN0aW9uIGFkanVzdGVkIHRvIHNvcnQgcmVsZWFzZV9kYXRlIHBhcmFtcyB0byB1bmlxdWUgeWVhcnNcbi8vICAgY29uc3QgZ2V0VW5pcXVlWWVhcnMgPSAoKSA9PiB7XG4vLyAgICAgcmV0dXJuIHBsYXlMaXN0XG4vLyAgICAgICA/IEFycmF5LmZyb20obmV3IFNldChwbGF5TGlzdC5tYXAoKHRyYWNrOiB0cmFja1R5cGUpID0+IHRyYWNrLnJlbGVhc2VfZGF0ZSkpKVxuLy8gICAgICAgICAuZmlsdGVyKChkYXRlKSA9PiB0eXBlb2YgZGF0ZSA9PT0gXCJzdHJpbmdcIiAmJiBkYXRlICE9PSBcIi1cIilcbi8vICAgICAgICAgLm1hcCgoZGF0ZSkgPT4gZGF0ZS5zcGxpdChcIi1cIilbMF0pXG4vLyAgICAgICAgIC5maWx0ZXIoKHllYXIsIGluZGV4LCBzZWxmKSA9PiBzZWxmLmluZGV4T2YoeWVhcikgPT09IGluZGV4KVxuLy8gICAgICAgICAuc29ydCgoYSwgYikgPT4gYS5sb2NhbGVDb21wYXJlKGIpKVxuLy8gICAgICAgOiBbXTtcbi8vICAgfTtcbi8vICAgLy8gdXNlTWVtb1xuLy8gICBjb25zdCBtZW1vaXplZEdldFVuaXF1ZVZhbHVlcyA9IHVzZU1lbW8oKCkgPT4ge1xuLy8gICAgIGlmIChhY3RpdmVGaWx0ZXIpIHtcbi8vICAgICAgIHJldHVybiBnZXRVbmlxdWVWYWx1ZXMoYWN0aXZlRmlsdGVyKTtcbi8vICAgICB9XG4vLyAgICAgcmV0dXJuIFtdO1xuLy8gICB9LCBbYWN0aXZlRmlsdGVyLCBwbGF5TGlzdF0pO1xuLy8gICBjb25zdCBtZW1vaXplZEdldFVuaXF1ZVllYXJzID0gdXNlTWVtbygoKSA9PiB7XG4vLyAgICAgaWYgKGFjdGl2ZUZpbHRlcikge1xuLy8gICAgICAgcmV0dXJuIGdldFVuaXF1ZVllYXJzKCk7XG4vLyAgICAgfVxuLy8gICAgIHJldHVybiBbXTtcbi8vICAgfSwgW2FjdGl2ZUZpbHRlciwgcGxheUxpc3RdKTtcblxuLy8gICByZXR1cm4gKFxuLy8gICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5jZW50ZXJCbG9ja0ZpbHRlciwgc3R5bGVzLmZpbHRlcil9PlxuLy8gICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5maWx0ZXJUaXRsZX0+U2VhcmNoIGZvcjo8L2Rpdj5cblxuLy8gICAgICAgPEZpbHRlckJsb2NrSXRlbVxuLy8gICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVGaWx0ZXJDbGljayhcImF1dGhvclwiKX1cbi8vICAgICAgICAgaXNPcGVuZWQ9e2FjdGl2ZUZpbHRlciA9PT0gXCJhdXRob3JcIn1cbi8vICAgICAgICAgbGlzdD17bWVtb2l6ZWRHZXRVbmlxdWVWYWx1ZXN9XG4vLyAgICAgICA+XG4vLyAgICAgICAgIGFydGlzdFxuLy8gICAgICAgPC9GaWx0ZXJCbG9ja0l0ZW0+XG4vLyAgICAgICA8RmlsdGVyQmxvY2tJdGVtXG4vLyAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUZpbHRlckNsaWNrKFwicmVsZWFzZV9kYXRlXCIpfVxuLy8gICAgICAgICBpc09wZW5lZD17YWN0aXZlRmlsdGVyID09PSBcInJlbGVhc2VfZGF0ZVwifVxuLy8gICAgICAgICBsaXN0PXttZW1vaXplZEdldFVuaXF1ZVllYXJzfVxuLy8gICAgICAgPlxuLy8gICAgICAgICB5ZWFyXG4vLyAgICAgICA8L0ZpbHRlckJsb2NrSXRlbT5cbi8vICAgICAgIDxGaWx0ZXJCbG9ja0l0ZW1cbi8vICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlRmlsdGVyQ2xpY2soXCJnZW5yZVwiKX1cbi8vICAgICAgICAgaXNPcGVuZWQ9e2FjdGl2ZUZpbHRlciA9PT0gXCJnZW5yZVwifVxuLy8gICAgICAgICBsaXN0PXttZW1vaXplZEdldFVuaXF1ZVZhbHVlc31cbi8vICAgICAgID5cbi8vICAgICAgICAgZ2VucmVcbi8vICAgICAgIDwvRmlsdGVyQmxvY2tJdGVtPlxuXG4vLyAgICAgPC9kaXY+XG4vLyAgICk7XG4vLyB9O1xuXG4vLyBleHBvcnQgZGVmYXVsdCBGaWx0ZXJCbG9jaztcbiJdLCJuYW1lcyI6WyJjbGFzc05hbWVzIiwic3R5bGVzIiwiUmVhY3QiLCJ1c2VNZW1vIiwidXNlU3RhdGUiLCJGaWx0ZXJCbG9ja0l0ZW0iLCJ1c2VBcHBEaXNwYXRjaCIsInVzZUFwcFNlbGVjdG9yIiwic2V0QWN0aXZlRmlsdGVyIiwiRmlsdGVyQmxvY2siLCJkaXNwYXRjaCIsInBsYXlMaXN0Iiwic3RhdGUiLCJ0cmFja3MiLCJzZWxlY3RlZEF1dGhvcnMiLCJhY3RpdmVGaWx0ZXJzIiwiYXV0aG9ycyIsInNlbGVjdGVkR2VucmVzIiwiZ2VucmVzIiwibG9jYWxSZWxlYXNlWWVhckZpbHRlciIsInNldExvY2FsUmVsZWFzZVllYXJGaWx0ZXIiLCJ0b2dnbGVSZWxlYXNlWWVhckZpbHRlciIsIm9wdGlvbiIsInJlbGVhc2VZZWFyIiwidG9nZ2xlU2VsZWN0ZWRBdXRob3JzIiwiYXV0aG9yIiwiaW5jbHVkZXMiLCJmaWx0ZXIiLCJpdGVtIiwidG9nZ2xlU2VsZWN0ZWRHZW5yZXMiLCJnZW5yZSIsImdldFVuaXF1ZVZhbHVlcyIsInByb3BlcnR5IiwiQXJyYXkiLCJmcm9tIiwiU2V0IiwibWFwIiwidHJhY2siLCJ2YWx1ZSIsInNvcnQiLCJhIiwiYiIsImxvY2FsZUNvbXBhcmUiLCJtZW1vaXplZEdldFVuaXF1ZVZhbHVlcyIsImxvY2FsQWN0aXZlRmlsdGVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiY2VudGVyQmxvY2tGaWx0ZXIiLCJmaWx0ZXJUaXRsZSIsIm9uQ2xpY2siLCJzZXRMb2NhbEFjdGl2ZUZpbHRlciIsImlzT3BlbmVkIiwiZmlsdGVyS2V5IiwibGlzdCIsImFwcGx5RmlsdGVyIiwiZmlsdGVyVHlwZSIsInNlbGVjdGVkT3B0aW9uIiwidG9nZ2xlU2VsZWN0ZWRPcHRpb24iLCJidXR0b24iLCJkaXNjYXJkRmlsdGVycyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/FilterBlock/FilterBlock.tsx\n"));

/***/ })

});