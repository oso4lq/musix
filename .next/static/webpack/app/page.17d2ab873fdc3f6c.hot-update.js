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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FilterBlock.module.css */ \"(app-pages-browser)/./src/components/FilterBlock/FilterBlock.module.css\");\n/* harmony import */ var _FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _FilterBlockItem_FilterBlockItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../FilterBlockItem/FilterBlockItem */ \"(app-pages-browser)/./src/components/FilterBlockItem/FilterBlockItem.tsx\");\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/hooks */ \"(app-pages-browser)/./src/hooks.ts\");\n/* harmony import */ var _store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/store/features/tracksSlice */ \"(app-pages-browser)/./src/store/features/tracksSlice.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n // Renaming setActiveFilter from tracksSlice\nconst FilterBlock = ()=>{\n    _s();\n    const dispatch = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useAppDispatch)();\n    const playList = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useAppSelector)((state)=>state.tracks.playList);\n    const selectedAuthors = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useAppSelector)((state)=>state.tracks.activeFilters.authors);\n    const selectedGenres = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useAppSelector)((state)=>state.tracks.activeFilters.genres);\n    const [localReleaseYearFilter, setLocalReleaseYearFilter] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"default\");\n    // \n    const toggleReleaseYearFilter = (option)=>{\n        setLocalReleaseYearFilter(option);\n        dispatch((0,_store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_5__.setActiveFilter)({\n            releaseYear: option\n        }));\n    };\n    const toggleSelectedAuthors = (author)=>{\n        dispatch((0,_store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_5__.setActiveFilter)({\n            authors: selectedAuthors.includes(author) ? selectedAuthors.filter((item)=>item !== author) : [\n                ...selectedAuthors,\n                author\n            ]\n        }));\n    };\n    const toggleSelectedGenres = (genre)=>{\n        dispatch((0,_store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_5__.setActiveFilter)({\n            genres: selectedAuthors.includes(genre) ? selectedGenres.filter((item)=>item !== genre) : [\n                ...selectedGenres,\n                genre\n            ]\n        }));\n    };\n    // get unique values for each filter\n    const getUniqueValues = (property)=>{\n        return playList ? Array.from(new Set(playList.map((track)=>track[property]))).filter((value)=>typeof value === \"string\" && value !== \"-\").map((value)=>value).sort((a, b)=>a.localeCompare(b)) : [];\n    };\n    // useMemo\n    const memoizedGetUniqueValues = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{\n        if (localActiveFilter) {\n            return getUniqueValues(localActiveFilter);\n        }\n        return [];\n    }, [\n        localActiveFilter,\n        playList\n    ]);\n    // // getUniqueValues function adjusted to sort release_date params to unique years\n    // const getUniqueYears = () => {\n    //   return playList\n    //     ? Array.from(new Set(playList.map((track: trackType) => track.release_date)))\n    //       .filter((date) => typeof date === \"string\" && date !== \"-\")\n    //       .map((date) => date.split(\"-\")[0])\n    //       .filter((year, index, self) => self.indexOf(year) === index)\n    //       .sort((a, b) => a.localeCompare(b))\n    //     : [];\n    // };\n    // // display tracks with release_date starting by year YYYY\n    // const getTracksByYear = (year: string) => {\n    //   return playList ? playList.filter((track: trackType) => {\n    //       const releaseYear = track.release_date.split(\"-\")[0];\n    //       return releaseYear === year || releaseYear > year;\n    //   }) : [];\n    // };\n    // // get the lists of unique keys for the FilterBlockItems\n    // const uniqueAuthors = getUniqueValues('author');\n    // const uniqueYears = getUniqueValues('release_date');\n    // // const uniqueYears = getUniqueYears();\n    // const uniqueGenres = getUniqueValues('genre');\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().centerBlockFilter), (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().filter)),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().filterTitle),\n                children: \"Search for:\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterBlockItem_FilterBlockItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onClick: ()=>setLocalActiveFilter(localActiveFilter === \"author\" ? null : \"author\"),\n                isOpened: localActiveFilter === \"author\",\n                filterKey: localActiveFilter,\n                list: memoizedGetUniqueValues,\n                // applyFilter={() => applyFilter()}\n                applyFilter: (filterType, value)=>applyFilter(filterType, value),\n                children: \"Artist\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterBlockItem_FilterBlockItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onClick: ()=>setLocalActiveFilter(localActiveFilter === \"release_date\" ? null : \"release_date\"),\n                isOpened: localActiveFilter === \"release_date\",\n                filterKey: localActiveFilter,\n                list: memoizedGetUniqueValues,\n                applyFilter: (filterType, value)=>applyFilter(filterType, value),\n                children: \"Year\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterBlockItem_FilterBlockItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onClick: ()=>setLocalActiveFilter(localActiveFilter === \"genre\" ? null : \"genre\"),\n                isOpened: localActiveFilter === \"genre\",\n                filterKey: localActiveFilter,\n                list: memoizedGetUniqueValues,\n                applyFilter: (filterType, value)=>applyFilter(filterType, value),\n                children: \"Genre\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 101,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: discardFilters,\n                children: \"Discard filters\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 111,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n        lineNumber: 77,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FilterBlock, \"nf5NXXYuHW7lH2TsIp8FgqdULcM=\", false, function() {\n    return [\n        _hooks__WEBPACK_IMPORTED_MODULE_4__.useAppDispatch,\n        _hooks__WEBPACK_IMPORTED_MODULE_4__.useAppSelector,\n        _hooks__WEBPACK_IMPORTED_MODULE_4__.useAppSelector,\n        _hooks__WEBPACK_IMPORTED_MODULE_4__.useAppSelector\n    ];\n});\n_c = FilterBlock;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FilterBlock); // \"use client\"\n // import classNames from \"classnames\";\n // import styles from \"./FilterBlock.module.css\";\n // import { useMemo, useState } from \"react\";\n // import FilterBlockItem from \"../FilterBlockItem/FilterBlockItem\";\n // import { useAppSelector } from \"@/hooks\";\n // import { trackType } from \"@/types/types\";\n // const FilterBlock = () => {\n //   // import playlist from API\n //   const playList = useAppSelector((state) => state.tracks.playList);\n //   // set filter\n //   const [activeFilter, setActiveFilter] = useState<keyof trackType | null>(null);\n //   // apply filter\n //   const handleFilterClick = (newFilter: keyof trackType) => {\n //     setActiveFilter((prev) => (newFilter === prev ? null : newFilter));\n //   };\n //   // returns unique values depenging on the key\n //   const getUniqueValues = (property: keyof trackType) => {\n //     return playList\n //       ? Array.from(new Set(playList.map((track: trackType) => track[property])))\n //         .filter((value) => typeof value === \"string\" && value !== \"-\")\n //         .map((value) => value as string)\n //         .sort((a, b) => a.localeCompare(b))\n //       : [];\n //   };\n //   // getUniqueValues function adjusted to sort release_date params to unique years\n //   const getUniqueYears = () => {\n //     return playList\n //       ? Array.from(new Set(playList.map((track: trackType) => track.release_date)))\n //         .filter((date) => typeof date === \"string\" && date !== \"-\")\n //         .map((date) => date.split(\"-\")[0])\n //         .filter((year, index, self) => self.indexOf(year) === index)\n //         .sort((a, b) => a.localeCompare(b))\n //       : [];\n //   };\n //   // useMemo\n //   const memoizedGetUniqueValues = useMemo(() => {\n //     if (activeFilter) {\n //       return getUniqueValues(activeFilter);\n //     }\n //     return [];\n //   }, [activeFilter, playList]);\n //   const memoizedGetUniqueYears = useMemo(() => {\n //     if (activeFilter) {\n //       return getUniqueYears();\n //     }\n //     return [];\n //   }, [activeFilter, playList]);\n //   return (\n //     <div className={classNames(styles.centerBlockFilter, styles.filter)}>\n //       <div className={styles.filterTitle}>Search for:</div>\n //       <FilterBlockItem\n //         onClick={() => handleFilterClick(\"author\")}\n //         isOpened={activeFilter === \"author\"}\n //         list={memoizedGetUniqueValues}\n //       >\n //         artist\n //       </FilterBlockItem>\n //       <FilterBlockItem\n //         onClick={() => handleFilterClick(\"release_date\")}\n //         isOpened={activeFilter === \"release_date\"}\n //         list={memoizedGetUniqueYears}\n //       >\n //         year\n //       </FilterBlockItem>\n //       <FilterBlockItem\n //         onClick={() => handleFilterClick(\"genre\")}\n //         isOpened={activeFilter === \"genre\"}\n //         list={memoizedGetUniqueValues}\n //       >\n //         genre\n //       </FilterBlockItem>\n //     </div>\n //   );\n // };\n // export default FilterBlock;\nvar _c;\n$RefreshReg$(_c, \"FilterBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0ZpbHRlckJsb2NrL0ZpbHRlckJsb2NrLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRW9DO0FBQ1U7QUFDRztBQUNnQjtBQUNSO0FBRTBCLENBQUMsNENBQTRDO0FBRWhJLE1BQU1TLGNBQWM7O0lBQ2xCLE1BQU1DLFdBQVdKLHNEQUFjQTtJQUMvQixNQUFNSyxXQUFXSixzREFBY0EsQ0FBQyxDQUFDSyxRQUFVQSxNQUFNQyxNQUFNLENBQUNGLFFBQVE7SUFDaEUsTUFBTUcsa0JBQWtCUCxzREFBY0EsQ0FBQyxDQUFDSyxRQUFVQSxNQUFNQyxNQUFNLENBQUNFLGFBQWEsQ0FBQ0MsT0FBTztJQUNwRixNQUFNQyxpQkFBaUJWLHNEQUFjQSxDQUFDLENBQUNLLFFBQVVBLE1BQU1DLE1BQU0sQ0FBQ0UsYUFBYSxDQUFDRyxNQUFNO0lBQ2xGLE1BQU0sQ0FBQ0Msd0JBQXdCQywwQkFBMEIsR0FBR2hCLCtDQUFRQSxDQUFTO0lBQzdFLEdBQUc7SUFDSCxNQUFNaUIsMEJBQTBCLENBQUNDO1FBQy9CRiwwQkFBMEJFO1FBQzFCWixTQUFTRiw0RUFBZUEsQ0FBQztZQUFFZSxhQUFhRDtRQUFPO0lBQ2pEO0lBRUEsTUFBTUUsd0JBQXdCLENBQUNDO1FBQzdCZixTQUFTRiw0RUFBZUEsQ0FBQztZQUN2QlEsU0FBU0YsZ0JBQWdCWSxRQUFRLENBQUNELFVBQVVYLGdCQUFnQmEsTUFBTSxDQUFDLENBQUNDLE9BQVNBLFNBQVNILFVBQVU7bUJBQUtYO2dCQUFpQlc7YUFBUTtRQUNoSTtJQUNGO0lBQ0EsTUFBTUksdUJBQXVCLENBQUNDO1FBQzVCcEIsU0FBU0YsNEVBQWVBLENBQUM7WUFDdkJVLFFBQVFKLGdCQUFnQlksUUFBUSxDQUFDSSxTQUFTYixlQUFlVSxNQUFNLENBQUMsQ0FBQ0MsT0FBU0EsU0FBU0UsU0FBUzttQkFBS2I7Z0JBQWdCYTthQUFPO1FBQzFIO0lBQ0Y7SUFHQSxvQ0FBb0M7SUFD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QUFzQjtDQUN0QixzRkFBc0Y7Q0FDdEYsc0VBQXNFO0NBQ3RFLDZDQUE2QztDQUM3Qyx1RUFBdUU7Q0FDdkUsOENBQThDO0NBQzlDLGNBQWM7Q0FDZCxPQUFPO0NBQ1AsZUFBZTtDQUNmLG9EQUFvRDtDQUNwRCwwQkFBMEI7Q0FDMUIsOENBQThDO0NBQzlDLFFBQVE7Q0FDUixpQkFBaUI7Q0FDakIsa0NBQWtDO0NBQ2xDLG1EQUFtRDtDQUNuRCwwQkFBMEI7Q0FDMUIsaUNBQWlDO0NBQ2pDLFFBQVE7Q0FDUixpQkFBaUI7Q0FDakIsa0NBQWtDO0NBRWxDLGFBQWE7Q0FDYiw0RUFBNEU7Q0FDNUUsOERBQThEO0NBRTlELHlCQUF5QjtDQUN6QixzREFBc0Q7Q0FDdEQsK0NBQStDO0NBQy9DLHlDQUF5QztDQUN6QyxVQUFVO0NBQ1YsaUJBQWlCO0NBQ2pCLDJCQUEyQjtDQUMzQix5QkFBeUI7Q0FDekIsNERBQTREO0NBQzVELHFEQUFxRDtDQUNyRCx3Q0FBd0M7Q0FDeEMsVUFBVTtDQUNWLGVBQWU7Q0FDZiwyQkFBMkI7Q0FDM0IseUJBQXlCO0NBQ3pCLHFEQUFxRDtDQUNyRCw4Q0FBOEM7Q0FDOUMseUNBQXlDO0NBQ3pDLFVBQVU7Q0FDVixnQkFBZ0I7Q0FDaEIsMkJBQTJCO0NBRTNCLGFBQWE7Q0FDYixPQUFPO0NBQ1AsS0FBSztDQUVMLDhCQUE4QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9GaWx0ZXJCbG9jay9GaWx0ZXJCbG9jay50c3g/YjU2YyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9GaWx0ZXJCbG9jay5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRmlsdGVyQmxvY2tJdGVtIGZyb20gJy4uL0ZpbHRlckJsb2NrSXRlbS9GaWx0ZXJCbG9ja0l0ZW0nO1xuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2gsIHVzZUFwcFNlbGVjdG9yIH0gZnJvbSAnQC9ob29rcyc7XG5pbXBvcnQgeyB0cmFja1R5cGUsIHVzZXJUeXBlIH0gZnJvbSAnQC90eXBlcy90eXBlcyc7XG5pbXBvcnQgeyBjbGVhckFjdGl2ZUZpbHRlcnMsIHNldEFjdGl2ZUZpbHRlciB9IGZyb20gJ0Avc3RvcmUvZmVhdHVyZXMvdHJhY2tzU2xpY2UnOyAvLyBSZW5hbWluZyBzZXRBY3RpdmVGaWx0ZXIgZnJvbSB0cmFja3NTbGljZVxuXG5jb25zdCBGaWx0ZXJCbG9jayA9ICgpID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xuICBjb25zdCBwbGF5TGlzdCA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudHJhY2tzLnBsYXlMaXN0KTtcbiAgY29uc3Qgc2VsZWN0ZWRBdXRob3JzID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS50cmFja3MuYWN0aXZlRmlsdGVycy5hdXRob3JzKTtcbiAgY29uc3Qgc2VsZWN0ZWRHZW5yZXMgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnRyYWNrcy5hY3RpdmVGaWx0ZXJzLmdlbnJlcyk7XG4gIGNvbnN0IFtsb2NhbFJlbGVhc2VZZWFyRmlsdGVyLCBzZXRMb2NhbFJlbGVhc2VZZWFyRmlsdGVyXSA9IHVzZVN0YXRlPHN0cmluZz4oJ2RlZmF1bHQnKTtcbiAgLy8gXG4gIGNvbnN0IHRvZ2dsZVJlbGVhc2VZZWFyRmlsdGVyID0gKG9wdGlvbjogc3RyaW5nKSA9PiB7XG4gICAgc2V0TG9jYWxSZWxlYXNlWWVhckZpbHRlcihvcHRpb24pO1xuICAgIGRpc3BhdGNoKHNldEFjdGl2ZUZpbHRlcih7IHJlbGVhc2VZZWFyOiBvcHRpb24gfSkpO1xuICB9O1xuXG4gIGNvbnN0IHRvZ2dsZVNlbGVjdGVkQXV0aG9ycyA9IChhdXRob3I6IHN0cmluZykgPT4ge1xuICAgIGRpc3BhdGNoKHNldEFjdGl2ZUZpbHRlcih7XG4gICAgICBhdXRob3JzOiBzZWxlY3RlZEF1dGhvcnMuaW5jbHVkZXMoYXV0aG9yKSA/IHNlbGVjdGVkQXV0aG9ycy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0gIT09IGF1dGhvcikgOiBbIC4uLnNlbGVjdGVkQXV0aG9ycywgYXV0aG9yIF0sXG4gICAgfSkpXG4gIH07XG4gIGNvbnN0IHRvZ2dsZVNlbGVjdGVkR2VucmVzID0gKGdlbnJlOiBzdHJpbmcpID0+IHtcbiAgICBkaXNwYXRjaChzZXRBY3RpdmVGaWx0ZXIoe1xuICAgICAgZ2VucmVzOiBzZWxlY3RlZEF1dGhvcnMuaW5jbHVkZXMoZ2VucmUpID8gc2VsZWN0ZWRHZW5yZXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtICE9PSBnZW5yZSkgOiBbIC4uLnNlbGVjdGVkR2VucmVzLCBnZW5yZSBdLFxuICAgIH0pKVxuICB9O1xuICBcblxuICAvLyBnZXQgdW5pcXVlIHZhbHVlcyBmb3IgZWFjaCBmaWx0ZXJcbiAgY29uc3QgZ2V0VW5pcXVlVmFsdWVzID0gKHByb3BlcnR5OiBrZXlvZiB0cmFja1R5cGUpID0+IHtcbiAgICAgICAgcmV0dXJuIHBsYXlMaXN0XG4gICAgICAgICAgPyBBcnJheS5mcm9tKG5ldyBTZXQocGxheUxpc3QubWFwKCh0cmFjazogdHJhY2tUeXBlKSA9PiB0cmFja1twcm9wZXJ0eV0pKSlcbiAgICAgICAgICAgIC5maWx0ZXIoKHZhbHVlKSA9PiB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgJiYgdmFsdWUgIT09IFwiLVwiKVxuICAgICAgICAgICAgLm1hcCgodmFsdWUpID0+IHZhbHVlIGFzIHN0cmluZylcbiAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBhLmxvY2FsZUNvbXBhcmUoYikpXG4gICAgICAgICAgOiBbXTtcbiAgfTtcbiAgXG4gIC8vIHVzZU1lbW9cbiAgY29uc3QgbWVtb2l6ZWRHZXRVbmlxdWVWYWx1ZXMgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBpZiAobG9jYWxBY3RpdmVGaWx0ZXIpIHtcbiAgICAgIHJldHVybiBnZXRVbmlxdWVWYWx1ZXMobG9jYWxBY3RpdmVGaWx0ZXIpO1xuICAgIH1cbiAgICByZXR1cm4gW107XG4gIH0sIFtsb2NhbEFjdGl2ZUZpbHRlciwgcGxheUxpc3RdKTtcblxuICAvLyAvLyBnZXRVbmlxdWVWYWx1ZXMgZnVuY3Rpb24gYWRqdXN0ZWQgdG8gc29ydCByZWxlYXNlX2RhdGUgcGFyYW1zIHRvIHVuaXF1ZSB5ZWFyc1xuICAvLyBjb25zdCBnZXRVbmlxdWVZZWFycyA9ICgpID0+IHtcbiAgLy8gICByZXR1cm4gcGxheUxpc3RcbiAgLy8gICAgID8gQXJyYXkuZnJvbShuZXcgU2V0KHBsYXlMaXN0Lm1hcCgodHJhY2s6IHRyYWNrVHlwZSkgPT4gdHJhY2sucmVsZWFzZV9kYXRlKSkpXG4gIC8vICAgICAgIC5maWx0ZXIoKGRhdGUpID0+IHR5cGVvZiBkYXRlID09PSBcInN0cmluZ1wiICYmIGRhdGUgIT09IFwiLVwiKVxuICAvLyAgICAgICAubWFwKChkYXRlKSA9PiBkYXRlLnNwbGl0KFwiLVwiKVswXSlcbiAgLy8gICAgICAgLmZpbHRlcigoeWVhciwgaW5kZXgsIHNlbGYpID0+IHNlbGYuaW5kZXhPZih5ZWFyKSA9PT0gaW5kZXgpXG4gIC8vICAgICAgIC5zb3J0KChhLCBiKSA9PiBhLmxvY2FsZUNvbXBhcmUoYikpXG4gIC8vICAgICA6IFtdO1xuICAvLyB9O1xuICAvLyAvLyBkaXNwbGF5IHRyYWNrcyB3aXRoIHJlbGVhc2VfZGF0ZSBzdGFydGluZyBieSB5ZWFyIFlZWVlcbiAgLy8gY29uc3QgZ2V0VHJhY2tzQnlZZWFyID0gKHllYXI6IHN0cmluZykgPT4ge1xuICAvLyAgIHJldHVybiBwbGF5TGlzdCA/IHBsYXlMaXN0LmZpbHRlcigodHJhY2s6IHRyYWNrVHlwZSkgPT4ge1xuICAvLyAgICAgICBjb25zdCByZWxlYXNlWWVhciA9IHRyYWNrLnJlbGVhc2VfZGF0ZS5zcGxpdChcIi1cIilbMF07XG4gIC8vICAgICAgIHJldHVybiByZWxlYXNlWWVhciA9PT0geWVhciB8fCByZWxlYXNlWWVhciA+IHllYXI7XG4gIC8vICAgfSkgOiBbXTtcbiAgLy8gfTtcbiAgLy8gLy8gZ2V0IHRoZSBsaXN0cyBvZiB1bmlxdWUga2V5cyBmb3IgdGhlIEZpbHRlckJsb2NrSXRlbXNcbiAgLy8gY29uc3QgdW5pcXVlQXV0aG9ycyA9IGdldFVuaXF1ZVZhbHVlcygnYXV0aG9yJyk7XG4gIC8vIGNvbnN0IHVuaXF1ZVllYXJzID0gZ2V0VW5pcXVlVmFsdWVzKCdyZWxlYXNlX2RhdGUnKTtcbiAgLy8gLy8gY29uc3QgdW5pcXVlWWVhcnMgPSBnZXRVbmlxdWVZZWFycygpO1xuICAvLyBjb25zdCB1bmlxdWVHZW5yZXMgPSBnZXRVbmlxdWVWYWx1ZXMoJ2dlbnJlJyk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMuY2VudGVyQmxvY2tGaWx0ZXIsIHN0eWxlcy5maWx0ZXIpfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmlsdGVyVGl0bGV9PlNlYXJjaCBmb3I6PC9kaXY+XG5cbiAgICAgIDxGaWx0ZXJCbG9ja0l0ZW1cbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TG9jYWxBY3RpdmVGaWx0ZXIobG9jYWxBY3RpdmVGaWx0ZXIgPT09ICdhdXRob3InID8gbnVsbCA6ICdhdXRob3InKX1cbiAgICAgICAgaXNPcGVuZWQ9e2xvY2FsQWN0aXZlRmlsdGVyID09PSAnYXV0aG9yJ31cbiAgICAgICAgZmlsdGVyS2V5PXtsb2NhbEFjdGl2ZUZpbHRlcn1cbiAgICAgICAgbGlzdD17bWVtb2l6ZWRHZXRVbmlxdWVWYWx1ZXN9XG4gICAgICAgIC8vIGFwcGx5RmlsdGVyPXsoKSA9PiBhcHBseUZpbHRlcigpfVxuICAgICAgICBhcHBseUZpbHRlcj17KGZpbHRlclR5cGUsIHZhbHVlKSA9PiBhcHBseUZpbHRlcihmaWx0ZXJUeXBlLCB2YWx1ZSl9XG4gICAgICAgID5cbiAgICAgICAgQXJ0aXN0XG4gICAgICA8L0ZpbHRlckJsb2NrSXRlbT5cblxuICAgICAgPEZpbHRlckJsb2NrSXRlbVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRMb2NhbEFjdGl2ZUZpbHRlcihsb2NhbEFjdGl2ZUZpbHRlciA9PT0gJ3JlbGVhc2VfZGF0ZScgPyBudWxsIDogJ3JlbGVhc2VfZGF0ZScpfVxuICAgICAgICBpc09wZW5lZD17bG9jYWxBY3RpdmVGaWx0ZXIgPT09ICdyZWxlYXNlX2RhdGUnfVxuICAgICAgICBmaWx0ZXJLZXk9e2xvY2FsQWN0aXZlRmlsdGVyfVxuICAgICAgICBsaXN0PXttZW1vaXplZEdldFVuaXF1ZVZhbHVlc31cbiAgICAgICAgYXBwbHlGaWx0ZXI9eyhmaWx0ZXJUeXBlLCB2YWx1ZSkgPT4gYXBwbHlGaWx0ZXIoZmlsdGVyVHlwZSwgdmFsdWUpfVxuICAgICAgPlxuICAgICAgICBZZWFyXG4gICAgICA8L0ZpbHRlckJsb2NrSXRlbT5cblxuICAgICAgPEZpbHRlckJsb2NrSXRlbVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRMb2NhbEFjdGl2ZUZpbHRlcihsb2NhbEFjdGl2ZUZpbHRlciA9PT0gJ2dlbnJlJyA/IG51bGwgOiAnZ2VucmUnKX1cbiAgICAgICAgaXNPcGVuZWQ9e2xvY2FsQWN0aXZlRmlsdGVyID09PSAnZ2VucmUnfVxuICAgICAgICBmaWx0ZXJLZXk9e2xvY2FsQWN0aXZlRmlsdGVyfVxuICAgICAgICBsaXN0PXttZW1vaXplZEdldFVuaXF1ZVZhbHVlc31cbiAgICAgICAgYXBwbHlGaWx0ZXI9eyhmaWx0ZXJUeXBlLCB2YWx1ZSkgPT4gYXBwbHlGaWx0ZXIoZmlsdGVyVHlwZSwgdmFsdWUpfVxuICAgICAgICA+XG4gICAgICAgIEdlbnJlXG4gICAgICA8L0ZpbHRlckJsb2NrSXRlbT5cbiAgICAgIFxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtkaXNjYXJkRmlsdGVyc30+XG4gICAgICAgIERpc2NhcmQgZmlsdGVyc1xuICAgICAgPC9idXR0b24+XG5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZpbHRlckJsb2NrO1xuXG4vLyBcInVzZSBjbGllbnRcIlxuXG4vLyBpbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuLy8gaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9GaWx0ZXJCbG9jay5tb2R1bGUuY3NzXCI7XG4vLyBpbXBvcnQgeyB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IEZpbHRlckJsb2NrSXRlbSBmcm9tIFwiLi4vRmlsdGVyQmxvY2tJdGVtL0ZpbHRlckJsb2NrSXRlbVwiO1xuLy8gaW1wb3J0IHsgdXNlQXBwU2VsZWN0b3IgfSBmcm9tIFwiQC9ob29rc1wiO1xuLy8gaW1wb3J0IHsgdHJhY2tUeXBlIH0gZnJvbSBcIkAvdHlwZXMvdHlwZXNcIjtcblxuLy8gY29uc3QgRmlsdGVyQmxvY2sgPSAoKSA9PiB7XG4vLyAgIC8vIGltcG9ydCBwbGF5bGlzdCBmcm9tIEFQSVxuLy8gICBjb25zdCBwbGF5TGlzdCA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudHJhY2tzLnBsYXlMaXN0KTtcbiAgXG4vLyAgIC8vIHNldCBmaWx0ZXJcbi8vICAgY29uc3QgW2FjdGl2ZUZpbHRlciwgc2V0QWN0aXZlRmlsdGVyXSA9IHVzZVN0YXRlPGtleW9mIHRyYWNrVHlwZSB8IG51bGw+KG51bGwpO1xuLy8gICAvLyBhcHBseSBmaWx0ZXJcbi8vICAgY29uc3QgaGFuZGxlRmlsdGVyQ2xpY2sgPSAobmV3RmlsdGVyOiBrZXlvZiB0cmFja1R5cGUpID0+IHtcbi8vICAgICBzZXRBY3RpdmVGaWx0ZXIoKHByZXYpID0+IChuZXdGaWx0ZXIgPT09IHByZXYgPyBudWxsIDogbmV3RmlsdGVyKSk7XG4vLyAgIH07XG4gIFxuLy8gICAvLyByZXR1cm5zIHVuaXF1ZSB2YWx1ZXMgZGVwZW5naW5nIG9uIHRoZSBrZXlcbi8vICAgY29uc3QgZ2V0VW5pcXVlVmFsdWVzID0gKHByb3BlcnR5OiBrZXlvZiB0cmFja1R5cGUpID0+IHtcbi8vICAgICByZXR1cm4gcGxheUxpc3Rcbi8vICAgICAgID8gQXJyYXkuZnJvbShuZXcgU2V0KHBsYXlMaXN0Lm1hcCgodHJhY2s6IHRyYWNrVHlwZSkgPT4gdHJhY2tbcHJvcGVydHldKSkpXG4vLyAgICAgICAgIC5maWx0ZXIoKHZhbHVlKSA9PiB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgJiYgdmFsdWUgIT09IFwiLVwiKVxuLy8gICAgICAgICAubWFwKCh2YWx1ZSkgPT4gdmFsdWUgYXMgc3RyaW5nKVxuLy8gICAgICAgICAuc29ydCgoYSwgYikgPT4gYS5sb2NhbGVDb21wYXJlKGIpKVxuLy8gICAgICAgOiBbXTtcbi8vICAgfTtcbi8vICAgLy8gZ2V0VW5pcXVlVmFsdWVzIGZ1bmN0aW9uIGFkanVzdGVkIHRvIHNvcnQgcmVsZWFzZV9kYXRlIHBhcmFtcyB0byB1bmlxdWUgeWVhcnNcbi8vICAgY29uc3QgZ2V0VW5pcXVlWWVhcnMgPSAoKSA9PiB7XG4vLyAgICAgcmV0dXJuIHBsYXlMaXN0XG4vLyAgICAgICA/IEFycmF5LmZyb20obmV3IFNldChwbGF5TGlzdC5tYXAoKHRyYWNrOiB0cmFja1R5cGUpID0+IHRyYWNrLnJlbGVhc2VfZGF0ZSkpKVxuLy8gICAgICAgICAuZmlsdGVyKChkYXRlKSA9PiB0eXBlb2YgZGF0ZSA9PT0gXCJzdHJpbmdcIiAmJiBkYXRlICE9PSBcIi1cIilcbi8vICAgICAgICAgLm1hcCgoZGF0ZSkgPT4gZGF0ZS5zcGxpdChcIi1cIilbMF0pXG4vLyAgICAgICAgIC5maWx0ZXIoKHllYXIsIGluZGV4LCBzZWxmKSA9PiBzZWxmLmluZGV4T2YoeWVhcikgPT09IGluZGV4KVxuLy8gICAgICAgICAuc29ydCgoYSwgYikgPT4gYS5sb2NhbGVDb21wYXJlKGIpKVxuLy8gICAgICAgOiBbXTtcbi8vICAgfTtcbi8vICAgLy8gdXNlTWVtb1xuLy8gICBjb25zdCBtZW1vaXplZEdldFVuaXF1ZVZhbHVlcyA9IHVzZU1lbW8oKCkgPT4ge1xuLy8gICAgIGlmIChhY3RpdmVGaWx0ZXIpIHtcbi8vICAgICAgIHJldHVybiBnZXRVbmlxdWVWYWx1ZXMoYWN0aXZlRmlsdGVyKTtcbi8vICAgICB9XG4vLyAgICAgcmV0dXJuIFtdO1xuLy8gICB9LCBbYWN0aXZlRmlsdGVyLCBwbGF5TGlzdF0pO1xuLy8gICBjb25zdCBtZW1vaXplZEdldFVuaXF1ZVllYXJzID0gdXNlTWVtbygoKSA9PiB7XG4vLyAgICAgaWYgKGFjdGl2ZUZpbHRlcikge1xuLy8gICAgICAgcmV0dXJuIGdldFVuaXF1ZVllYXJzKCk7XG4vLyAgICAgfVxuLy8gICAgIHJldHVybiBbXTtcbi8vICAgfSwgW2FjdGl2ZUZpbHRlciwgcGxheUxpc3RdKTtcblxuLy8gICByZXR1cm4gKFxuLy8gICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5jZW50ZXJCbG9ja0ZpbHRlciwgc3R5bGVzLmZpbHRlcil9PlxuLy8gICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5maWx0ZXJUaXRsZX0+U2VhcmNoIGZvcjo8L2Rpdj5cblxuLy8gICAgICAgPEZpbHRlckJsb2NrSXRlbVxuLy8gICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVGaWx0ZXJDbGljayhcImF1dGhvclwiKX1cbi8vICAgICAgICAgaXNPcGVuZWQ9e2FjdGl2ZUZpbHRlciA9PT0gXCJhdXRob3JcIn1cbi8vICAgICAgICAgbGlzdD17bWVtb2l6ZWRHZXRVbmlxdWVWYWx1ZXN9XG4vLyAgICAgICA+XG4vLyAgICAgICAgIGFydGlzdFxuLy8gICAgICAgPC9GaWx0ZXJCbG9ja0l0ZW0+XG4vLyAgICAgICA8RmlsdGVyQmxvY2tJdGVtXG4vLyAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUZpbHRlckNsaWNrKFwicmVsZWFzZV9kYXRlXCIpfVxuLy8gICAgICAgICBpc09wZW5lZD17YWN0aXZlRmlsdGVyID09PSBcInJlbGVhc2VfZGF0ZVwifVxuLy8gICAgICAgICBsaXN0PXttZW1vaXplZEdldFVuaXF1ZVllYXJzfVxuLy8gICAgICAgPlxuLy8gICAgICAgICB5ZWFyXG4vLyAgICAgICA8L0ZpbHRlckJsb2NrSXRlbT5cbi8vICAgICAgIDxGaWx0ZXJCbG9ja0l0ZW1cbi8vICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlRmlsdGVyQ2xpY2soXCJnZW5yZVwiKX1cbi8vICAgICAgICAgaXNPcGVuZWQ9e2FjdGl2ZUZpbHRlciA9PT0gXCJnZW5yZVwifVxuLy8gICAgICAgICBsaXN0PXttZW1vaXplZEdldFVuaXF1ZVZhbHVlc31cbi8vICAgICAgID5cbi8vICAgICAgICAgZ2VucmVcbi8vICAgICAgIDwvRmlsdGVyQmxvY2tJdGVtPlxuXG4vLyAgICAgPC9kaXY+XG4vLyAgICk7XG4vLyB9O1xuXG4vLyBleHBvcnQgZGVmYXVsdCBGaWx0ZXJCbG9jaztcbiJdLCJuYW1lcyI6WyJjbGFzc05hbWVzIiwic3R5bGVzIiwiUmVhY3QiLCJ1c2VNZW1vIiwidXNlU3RhdGUiLCJGaWx0ZXJCbG9ja0l0ZW0iLCJ1c2VBcHBEaXNwYXRjaCIsInVzZUFwcFNlbGVjdG9yIiwic2V0QWN0aXZlRmlsdGVyIiwiRmlsdGVyQmxvY2siLCJkaXNwYXRjaCIsInBsYXlMaXN0Iiwic3RhdGUiLCJ0cmFja3MiLCJzZWxlY3RlZEF1dGhvcnMiLCJhY3RpdmVGaWx0ZXJzIiwiYXV0aG9ycyIsInNlbGVjdGVkR2VucmVzIiwiZ2VucmVzIiwibG9jYWxSZWxlYXNlWWVhckZpbHRlciIsInNldExvY2FsUmVsZWFzZVllYXJGaWx0ZXIiLCJ0b2dnbGVSZWxlYXNlWWVhckZpbHRlciIsIm9wdGlvbiIsInJlbGVhc2VZZWFyIiwidG9nZ2xlU2VsZWN0ZWRBdXRob3JzIiwiYXV0aG9yIiwiaW5jbHVkZXMiLCJmaWx0ZXIiLCJpdGVtIiwidG9nZ2xlU2VsZWN0ZWRHZW5yZXMiLCJnZW5yZSIsImdldFVuaXF1ZVZhbHVlcyIsInByb3BlcnR5IiwiQXJyYXkiLCJmcm9tIiwiU2V0IiwibWFwIiwidHJhY2siLCJ2YWx1ZSIsInNvcnQiLCJhIiwiYiIsImxvY2FsZUNvbXBhcmUiLCJtZW1vaXplZEdldFVuaXF1ZVZhbHVlcyIsImxvY2FsQWN0aXZlRmlsdGVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiY2VudGVyQmxvY2tGaWx0ZXIiLCJmaWx0ZXJUaXRsZSIsIm9uQ2xpY2siLCJzZXRMb2NhbEFjdGl2ZUZpbHRlciIsImlzT3BlbmVkIiwiZmlsdGVyS2V5IiwibGlzdCIsImFwcGx5RmlsdGVyIiwiZmlsdGVyVHlwZSIsImJ1dHRvbiIsImRpc2NhcmRGaWx0ZXJzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/FilterBlock/FilterBlock.tsx\n"));

/***/ })

});