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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FilterBlock.module.css */ \"(app-pages-browser)/./src/components/FilterBlock/FilterBlock.module.css\");\n/* harmony import */ var _FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _FilterBlockItem_FilterBlockItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../FilterBlockItem/FilterBlockItem */ \"(app-pages-browser)/./src/components/FilterBlockItem/FilterBlockItem.tsx\");\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/hooks */ \"(app-pages-browser)/./src/hooks.ts\");\n/* harmony import */ var _store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/store/features/tracksSlice */ \"(app-pages-browser)/./src/store/features/tracksSlice.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n // Renaming setActiveFilter from tracksSlice\nconst FilterBlock = ()=>{\n    _s();\n    const dispatch = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useAppDispatch)();\n    const playList = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useAppSelector)((state)=>state.tracks.playList);\n    const selectedAuthors = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useAppSelector)((state)=>state.tracks.activeFilters.authors);\n    const selectedGenres = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useAppSelector)((state)=>state.tracks.activeFilters.genres);\n    const [localActiveFilter, setLocalActiveFilter] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const sortByYearValues = [\n        \"Default\",\n        \"New first\",\n        \"Old first\"\n    ];\n    // year filter\n    const toggleReleaseYearFilter = (option)=>{\n        dispatch((0,_store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_5__.setActiveFilter)({\n            release_dates: option\n        }));\n    };\n    // artist filter\n    const toggleSelectedAuthors = (author)=>{\n        dispatch((0,_store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_5__.setActiveFilter)({\n            authors: selectedAuthors.includes(author) ? selectedAuthors.filter((item)=>item !== author) : [\n                ...selectedAuthors,\n                author\n            ]\n        }));\n    };\n    // genre filter\n    const toggleSelectedGenres = (genre)=>{\n        dispatch((0,_store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_5__.setActiveFilter)({\n            genres: selectedGenres.includes(genre) ? selectedGenres.filter((item)=>item !== genre) : [\n                ...selectedGenres,\n                genre\n            ]\n        }));\n    };\n    // discard filters\n    const discardFilters = ()=>{\n        dis;\n    };\n    // get unique values for each filter\n    const getUniqueValues = (property)=>{\n        return playList ? Array.from(new Set(playList.map((track)=>track[property]))).filter((value)=>typeof value === \"string\" && value !== \"-\").map((value)=>value).sort((a, b)=>a.localeCompare(b)) : [];\n    };\n    // useMemo\n    const memoizedGetUniqueValues = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{\n        if (localActiveFilter) {\n            return getUniqueValues(localActiveFilter);\n        }\n        return [];\n    }, [\n        localActiveFilter,\n        playList\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().centerBlockFilter), (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().filter)),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().filterTitle),\n                children: \"Search for:\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterBlockItem_FilterBlockItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onClick: ()=>setLocalActiveFilter(localActiveFilter === \"author\" ? null : \"author\"),\n                isOpened: localActiveFilter === \"author\",\n                list: memoizedGetUniqueValues,\n                toggleSelectedOption: toggleSelectedAuthors,\n                children: \"Artist\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterBlockItem_FilterBlockItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onClick: ()=>setLocalActiveFilter(localActiveFilter === \"release_date\" ? null : \"release_date\"),\n                isOpened: localActiveFilter === \"release_date\",\n                list: sortByYearValues,\n                toggleSelectedOption: toggleReleaseYearFilter,\n                children: \"Year\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterBlockItem_FilterBlockItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onClick: ()=>setLocalActiveFilter(localActiveFilter === \"genre\" ? null : \"genre\"),\n                isOpened: localActiveFilter === \"genre\",\n                list: memoizedGetUniqueValues,\n                toggleSelectedOption: toggleSelectedGenres,\n                children: \"Genre\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>(0,_store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_5__.clearActiveFilters)(),\n                children: \"Discard filters\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FilterBlock, \"XGHLN2GWViHsgtN0vAgznDDz4wc=\", false, function() {\n    return [\n        _hooks__WEBPACK_IMPORTED_MODULE_4__.useAppDispatch,\n        _hooks__WEBPACK_IMPORTED_MODULE_4__.useAppSelector,\n        _hooks__WEBPACK_IMPORTED_MODULE_4__.useAppSelector,\n        _hooks__WEBPACK_IMPORTED_MODULE_4__.useAppSelector\n    ];\n});\n_c = FilterBlock;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FilterBlock); // \"use client\"\n // import classNames from \"classnames\";\n // import styles from \"./FilterBlock.module.css\";\n // import { useMemo, useState } from \"react\";\n // import FilterBlockItem from \"../FilterBlockItem/FilterBlockItem\";\n // import { useAppSelector } from \"@/hooks\";\n // import { trackType } from \"@/types/types\";\n // const FilterBlock = () => {\n //   // import playlist from API\n //   const playList = useAppSelector((state) => state.tracks.playList);\n //   // set filter\n //   const [activeFilter, setActiveFilter] = useState<keyof trackType | null>(null);\n //   // apply filter\n //   const handleFilterClick = (newFilter: keyof trackType) => {\n //     setActiveFilter((prev) => (newFilter === prev ? null : newFilter));\n //   };\n //   // returns unique values depenging on the key\n //   const getUniqueValues = (property: keyof trackType) => {\n //     return playList\n //       ? Array.from(new Set(playList.map((track: trackType) => track[property])))\n //         .filter((value) => typeof value === \"string\" && value !== \"-\")\n //         .map((value) => value as string)\n //         .sort((a, b) => a.localeCompare(b))\n //       : [];\n //   };\n //   // getUniqueValues function adjusted to sort release_date params to unique years\n //   const getUniqueYears = () => {\n //     return playList\n //       ? Array.from(new Set(playList.map((track: trackType) => track.release_date)))\n //         .filter((date) => typeof date === \"string\" && date !== \"-\")\n //         .map((date) => date.split(\"-\")[0])\n //         .filter((year, index, self) => self.indexOf(year) === index)\n //         .sort((a, b) => a.localeCompare(b))\n //       : [];\n //   };\n //   // useMemo\n //   const memoizedGetUniqueValues = useMemo(() => {\n //     if (activeFilter) {\n //       return getUniqueValues(activeFilter);\n //     }\n //     return [];\n //   }, [activeFilter, playList]);\n //   const memoizedGetUniqueYears = useMemo(() => {\n //     if (activeFilter) {\n //       return getUniqueYears();\n //     }\n //     return [];\n //   }, [activeFilter, playList]);\n //   return (\n //     <div className={classNames(styles.centerBlockFilter, styles.filter)}>\n //       <div className={styles.filterTitle}>Search for:</div>\n //       <FilterBlockItem\n //         onClick={() => handleFilterClick(\"author\")}\n //         isOpened={activeFilter === \"author\"}\n //         list={memoizedGetUniqueValues}\n //       >\n //         artist\n //       </FilterBlockItem>\n //       <FilterBlockItem\n //         onClick={() => handleFilterClick(\"release_date\")}\n //         isOpened={activeFilter === \"release_date\"}\n //         list={memoizedGetUniqueYears}\n //       >\n //         year\n //       </FilterBlockItem>\n //       <FilterBlockItem\n //         onClick={() => handleFilterClick(\"genre\")}\n //         isOpened={activeFilter === \"genre\"}\n //         list={memoizedGetUniqueValues}\n //       >\n //         genre\n //       </FilterBlockItem>\n //     </div>\n //   );\n // };\n // export default FilterBlock;\nvar _c;\n$RefreshReg$(_c, \"FilterBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0ZpbHRlckJsb2NrL0ZpbHRlckJsb2NrLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRW9DO0FBQ1U7QUFDRztBQUNnQjtBQUNSO0FBRTBCLENBQUMsNENBQTRDO0FBRWhJLE1BQU1VLGNBQWM7O0lBQ2xCLE1BQU1DLFdBQVdMLHNEQUFjQTtJQUMvQixNQUFNTSxXQUFXTCxzREFBY0EsQ0FBQyxDQUFDTSxRQUFVQSxNQUFNQyxNQUFNLENBQUNGLFFBQVE7SUFDaEUsTUFBTUcsa0JBQWtCUixzREFBY0EsQ0FBQyxDQUFDTSxRQUFVQSxNQUFNQyxNQUFNLENBQUNFLGFBQWEsQ0FBQ0MsT0FBTztJQUNwRixNQUFNQyxpQkFBaUJYLHNEQUFjQSxDQUFDLENBQUNNLFFBQVVBLE1BQU1DLE1BQU0sQ0FBQ0UsYUFBYSxDQUFDRyxNQUFNO0lBQ2xGLE1BQU0sQ0FBQ0MsbUJBQW1CQyxxQkFBcUIsR0FBR2pCLCtDQUFRQSxDQUF5QjtJQUNuRixNQUFNa0IsbUJBQW1CO1FBQUM7UUFBVztRQUFhO0tBQVk7SUFFOUQsY0FBYztJQUNkLE1BQU1DLDBCQUEwQixDQUFDQztRQUMvQmIsU0FBU0YsNEVBQWVBLENBQUM7WUFDdkJnQixlQUFlRDtRQUFPO0lBQzFCO0lBQ0EsZ0JBQWdCO0lBQ2hCLE1BQU1FLHdCQUF3QixDQUFDQztRQUM3QmhCLFNBQVNGLDRFQUFlQSxDQUFDO1lBQ3ZCUSxTQUFTRixnQkFBZ0JhLFFBQVEsQ0FBQ0QsVUFBVVosZ0JBQWdCYyxNQUFNLENBQUMsQ0FBQ0MsT0FBU0EsU0FBU0gsVUFBVTttQkFBS1o7Z0JBQWlCWTthQUFRO1FBQ2hJO0lBQ0Y7SUFDQSxlQUFlO0lBQ2YsTUFBTUksdUJBQXVCLENBQUNDO1FBQzVCckIsU0FBU0YsNEVBQWVBLENBQUM7WUFDdkJVLFFBQVFELGVBQWVVLFFBQVEsQ0FBQ0ksU0FBU2QsZUFBZVcsTUFBTSxDQUFDLENBQUNDLE9BQVNBLFNBQVNFLFNB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QjtDQUN6QixzREFBc0Q7Q0FDdEQsK0NBQStDO0NBQy9DLHlDQUF5QztDQUN6QyxVQUFVO0NBQ1YsaUJBQWlCO0NBQ2pCLDJCQUEyQjtDQUMzQix5QkFBeUI7Q0FDekIsNERBQTREO0NBQzVELHFEQUFxRDtDQUNyRCx3Q0FBd0M7Q0FDeEMsVUFBVTtDQUNWLGVBQWU7Q0FDZiwyQkFBMkI7Q0FDM0IseUJBQXlCO0NBQ3pCLHFEQUFxRDtDQUNyRCw4Q0FBOEM7Q0FDOUMseUNBQXlDO0NBQ3pDLFVBQVU7Q0FDVixnQkFBZ0I7Q0FDaEIsMkJBQTJCO0NBRTNCLGFBQWE7Q0FDYixPQUFPO0NBQ1AsS0FBSztDQUVMLDhCQUE4QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9GaWx0ZXJCbG9jay9GaWx0ZXJCbG9jay50c3g/YjU2YyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9GaWx0ZXJCbG9jay5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRmlsdGVyQmxvY2tJdGVtIGZyb20gJy4uL0ZpbHRlckJsb2NrSXRlbS9GaWx0ZXJCbG9ja0l0ZW0nO1xuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2gsIHVzZUFwcFNlbGVjdG9yIH0gZnJvbSAnQC9ob29rcyc7XG5pbXBvcnQgeyB0cmFja1R5cGUsIHVzZXJUeXBlIH0gZnJvbSAnQC90eXBlcy90eXBlcyc7XG5pbXBvcnQgeyBjbGVhckFjdGl2ZUZpbHRlcnMsIHNldEFjdGl2ZUZpbHRlciB9IGZyb20gJ0Avc3RvcmUvZmVhdHVyZXMvdHJhY2tzU2xpY2UnOyAvLyBSZW5hbWluZyBzZXRBY3RpdmVGaWx0ZXIgZnJvbSB0cmFja3NTbGljZVxuXG5jb25zdCBGaWx0ZXJCbG9jayA9ICgpID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xuICBjb25zdCBwbGF5TGlzdCA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudHJhY2tzLnBsYXlMaXN0KTtcbiAgY29uc3Qgc2VsZWN0ZWRBdXRob3JzID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS50cmFja3MuYWN0aXZlRmlsdGVycy5hdXRob3JzKTtcbiAgY29uc3Qgc2VsZWN0ZWRHZW5yZXMgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnRyYWNrcy5hY3RpdmVGaWx0ZXJzLmdlbnJlcyk7XG4gIGNvbnN0IFtsb2NhbEFjdGl2ZUZpbHRlciwgc2V0TG9jYWxBY3RpdmVGaWx0ZXJdID0gdXNlU3RhdGU8a2V5b2YgdHJhY2tUeXBlIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IHNvcnRCeVllYXJWYWx1ZXMgPSBbXCJEZWZhdWx0XCIsIFwiTmV3IGZpcnN0XCIsIFwiT2xkIGZpcnN0XCJdO1xuXG4gIC8vIHllYXIgZmlsdGVyXG4gIGNvbnN0IHRvZ2dsZVJlbGVhc2VZZWFyRmlsdGVyID0gKG9wdGlvbjogc3RyaW5nKSA9PiB7XG4gICAgZGlzcGF0Y2goc2V0QWN0aXZlRmlsdGVyKHsgXG4gICAgICByZWxlYXNlX2RhdGVzOiBvcHRpb24gfSkpO1xuICB9O1xuICAvLyBhcnRpc3QgZmlsdGVyXG4gIGNvbnN0IHRvZ2dsZVNlbGVjdGVkQXV0aG9ycyA9IChhdXRob3I6IHN0cmluZykgPT4ge1xuICAgIGRpc3BhdGNoKHNldEFjdGl2ZUZpbHRlcih7XG4gICAgICBhdXRob3JzOiBzZWxlY3RlZEF1dGhvcnMuaW5jbHVkZXMoYXV0aG9yKSA/IHNlbGVjdGVkQXV0aG9ycy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0gIT09IGF1dGhvcikgOiBbIC4uLnNlbGVjdGVkQXV0aG9ycywgYXV0aG9yIF0sXG4gICAgfSkpXG4gIH07XG4gIC8vIGdlbnJlIGZpbHRlclxuICBjb25zdCB0b2dnbGVTZWxlY3RlZEdlbnJlcyA9IChnZW5yZTogc3RyaW5nKSA9PiB7XG4gICAgZGlzcGF0Y2goc2V0QWN0aXZlRmlsdGVyKHtcbiAgICAgIGdlbnJlczogc2VsZWN0ZWRHZW5yZXMuaW5jbHVkZXMoZ2VucmUpID8gc2VsZWN0ZWRHZW5yZXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtICE9PSBnZW5yZSkgOiBbIC4uLnNlbGVjdGVkR2VucmVzLCBnZW5yZSBdLFxuICAgIH0pKVxuICB9O1xuICAvLyBkaXNjYXJkIGZpbHRlcnNcbiAgY29uc3QgZGlzY2FyZEZpbHRlcnMgPSAoKSA9PiB7XG4gICAgZGlzXG4gIH1cbiAgXG4gIC8vIGdldCB1bmlxdWUgdmFsdWVzIGZvciBlYWNoIGZpbHRlclxuICBjb25zdCBnZXRVbmlxdWVWYWx1ZXMgPSAocHJvcGVydHk6IGtleW9mIHRyYWNrVHlwZSkgPT4ge1xuICAgICAgICByZXR1cm4gcGxheUxpc3RcbiAgICAgICAgICA/IEFycmF5LmZyb20obmV3IFNldChwbGF5TGlzdC5tYXAoKHRyYWNrOiB0cmFja1R5cGUpID0+IHRyYWNrW3Byb3BlcnR5XSkpKVxuICAgICAgICAgICAgLmZpbHRlcigodmFsdWUpID0+IHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiAmJiB2YWx1ZSAhPT0gXCItXCIpXG4gICAgICAgICAgICAubWFwKCh2YWx1ZSkgPT4gdmFsdWUgYXMgc3RyaW5nKVxuICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGEubG9jYWxlQ29tcGFyZShiKSlcbiAgICAgICAgICA6IFtdO1xuICB9O1xuICBcbiAgLy8gdXNlTWVtb1xuICBjb25zdCBtZW1vaXplZEdldFVuaXF1ZVZhbHVlcyA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGlmIChsb2NhbEFjdGl2ZUZpbHRlcikge1xuICAgICAgcmV0dXJuIGdldFVuaXF1ZVZhbHVlcyhsb2NhbEFjdGl2ZUZpbHRlcik7XG4gICAgfVxuICAgIHJldHVybiBbXTtcbiAgfSwgW2xvY2FsQWN0aXZlRmlsdGVyLCBwbGF5TGlzdF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLmNlbnRlckJsb2NrRmlsdGVyLCBzdHlsZXMuZmlsdGVyKX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZpbHRlclRpdGxlfT5TZWFyY2ggZm9yOjwvZGl2PlxuXG4gICAgICA8RmlsdGVyQmxvY2tJdGVtXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldExvY2FsQWN0aXZlRmlsdGVyKGxvY2FsQWN0aXZlRmlsdGVyID09PSAnYXV0aG9yJyA/IG51bGwgOiAnYXV0aG9yJyl9XG4gICAgICAgIGlzT3BlbmVkPXtsb2NhbEFjdGl2ZUZpbHRlciA9PT0gJ2F1dGhvcid9XG4gICAgICAgIGxpc3Q9e21lbW9pemVkR2V0VW5pcXVlVmFsdWVzfVxuICAgICAgICB0b2dnbGVTZWxlY3RlZE9wdGlvbj17dG9nZ2xlU2VsZWN0ZWRBdXRob3JzfVxuICAgICAgICA+XG4gICAgICAgIEFydGlzdFxuICAgICAgPC9GaWx0ZXJCbG9ja0l0ZW0+XG5cbiAgICAgIDxGaWx0ZXJCbG9ja0l0ZW1cbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TG9jYWxBY3RpdmVGaWx0ZXIobG9jYWxBY3RpdmVGaWx0ZXIgPT09ICdyZWxlYXNlX2RhdGUnID8gbnVsbCA6ICdyZWxlYXNlX2RhdGUnKX1cbiAgICAgICAgaXNPcGVuZWQ9e2xvY2FsQWN0aXZlRmlsdGVyID09PSAncmVsZWFzZV9kYXRlJ31cbiAgICAgICAgbGlzdD17c29ydEJ5WWVhclZhbHVlc31cbiAgICAgICAgdG9nZ2xlU2VsZWN0ZWRPcHRpb249e3RvZ2dsZVJlbGVhc2VZZWFyRmlsdGVyfVxuICAgICAgPlxuICAgICAgICBZZWFyXG4gICAgICA8L0ZpbHRlckJsb2NrSXRlbT5cblxuICAgICAgPEZpbHRlckJsb2NrSXRlbVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRMb2NhbEFjdGl2ZUZpbHRlcihsb2NhbEFjdGl2ZUZpbHRlciA9PT0gJ2dlbnJlJyA/IG51bGwgOiAnZ2VucmUnKX1cbiAgICAgICAgaXNPcGVuZWQ9e2xvY2FsQWN0aXZlRmlsdGVyID09PSAnZ2VucmUnfVxuICAgICAgICBsaXN0PXttZW1vaXplZEdldFVuaXF1ZVZhbHVlc31cbiAgICAgICAgdG9nZ2xlU2VsZWN0ZWRPcHRpb249e3RvZ2dsZVNlbGVjdGVkR2VucmVzfVxuICAgICAgICA+XG4gICAgICAgIEdlbnJlXG4gICAgICA8L0ZpbHRlckJsb2NrSXRlbT5cbiAgICAgIFxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBjbGVhckFjdGl2ZUZpbHRlcnMoKX0+XG4gICAgICAgIERpc2NhcmQgZmlsdGVyc1xuICAgICAgPC9idXR0b24+XG5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZpbHRlckJsb2NrO1xuXG4vLyBcInVzZSBjbGllbnRcIlxuXG4vLyBpbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuLy8gaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9GaWx0ZXJCbG9jay5tb2R1bGUuY3NzXCI7XG4vLyBpbXBvcnQgeyB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IEZpbHRlckJsb2NrSXRlbSBmcm9tIFwiLi4vRmlsdGVyQmxvY2tJdGVtL0ZpbHRlckJsb2NrSXRlbVwiO1xuLy8gaW1wb3J0IHsgdXNlQXBwU2VsZWN0b3IgfSBmcm9tIFwiQC9ob29rc1wiO1xuLy8gaW1wb3J0IHsgdHJhY2tUeXBlIH0gZnJvbSBcIkAvdHlwZXMvdHlwZXNcIjtcblxuLy8gY29uc3QgRmlsdGVyQmxvY2sgPSAoKSA9PiB7XG4vLyAgIC8vIGltcG9ydCBwbGF5bGlzdCBmcm9tIEFQSVxuLy8gICBjb25zdCBwbGF5TGlzdCA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudHJhY2tzLnBsYXlMaXN0KTtcbiAgXG4vLyAgIC8vIHNldCBmaWx0ZXJcbi8vICAgY29uc3QgW2FjdGl2ZUZpbHRlciwgc2V0QWN0aXZlRmlsdGVyXSA9IHVzZVN0YXRlPGtleW9mIHRyYWNrVHlwZSB8IG51bGw+KG51bGwpO1xuLy8gICAvLyBhcHBseSBmaWx0ZXJcbi8vICAgY29uc3QgaGFuZGxlRmlsdGVyQ2xpY2sgPSAobmV3RmlsdGVyOiBrZXlvZiB0cmFja1R5cGUpID0+IHtcbi8vICAgICBzZXRBY3RpdmVGaWx0ZXIoKHByZXYpID0+IChuZXdGaWx0ZXIgPT09IHByZXYgPyBudWxsIDogbmV3RmlsdGVyKSk7XG4vLyAgIH07XG4gIFxuLy8gICAvLyByZXR1cm5zIHVuaXF1ZSB2YWx1ZXMgZGVwZW5naW5nIG9uIHRoZSBrZXlcbi8vICAgY29uc3QgZ2V0VW5pcXVlVmFsdWVzID0gKHByb3BlcnR5OiBrZXlvZiB0cmFja1R5cGUpID0+IHtcbi8vICAgICByZXR1cm4gcGxheUxpc3Rcbi8vICAgICAgID8gQXJyYXkuZnJvbShuZXcgU2V0KHBsYXlMaXN0Lm1hcCgodHJhY2s6IHRyYWNrVHlwZSkgPT4gdHJhY2tbcHJvcGVydHldKSkpXG4vLyAgICAgICAgIC5maWx0ZXIoKHZhbHVlKSA9PiB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgJiYgdmFsdWUgIT09IFwiLVwiKVxuLy8gICAgICAgICAubWFwKCh2YWx1ZSkgPT4gdmFsdWUgYXMgc3RyaW5nKVxuLy8gICAgICAgICAuc29ydCgoYSwgYikgPT4gYS5sb2NhbGVDb21wYXJlKGIpKVxuLy8gICAgICAgOiBbXTtcbi8vICAgfTtcbi8vICAgLy8gZ2V0VW5pcXVlVmFsdWVzIGZ1bmN0aW9uIGFkanVzdGVkIHRvIHNvcnQgcmVsZWFzZV9kYXRlIHBhcmFtcyB0byB1bmlxdWUgeWVhcnNcbi8vICAgY29uc3QgZ2V0VW5pcXVlWWVhcnMgPSAoKSA9PiB7XG4vLyAgICAgcmV0dXJuIHBsYXlMaXN0XG4vLyAgICAgICA/IEFycmF5LmZyb20obmV3IFNldChwbGF5TGlzdC5tYXAoKHRyYWNrOiB0cmFja1R5cGUpID0+IHRyYWNrLnJlbGVhc2VfZGF0ZSkpKVxuLy8gICAgICAgICAuZmlsdGVyKChkYXRlKSA9PiB0eXBlb2YgZGF0ZSA9PT0gXCJzdHJpbmdcIiAmJiBkYXRlICE9PSBcIi1cIilcbi8vICAgICAgICAgLm1hcCgoZGF0ZSkgPT4gZGF0ZS5zcGxpdChcIi1cIilbMF0pXG4vLyAgICAgICAgIC5maWx0ZXIoKHllYXIsIGluZGV4LCBzZWxmKSA9PiBzZWxmLmluZGV4T2YoeWVhcikgPT09IGluZGV4KVxuLy8gICAgICAgICAuc29ydCgoYSwgYikgPT4gYS5sb2NhbGVDb21wYXJlKGIpKVxuLy8gICAgICAgOiBbXTtcbi8vICAgfTtcbi8vICAgLy8gdXNlTWVtb1xuLy8gICBjb25zdCBtZW1vaXplZEdldFVuaXF1ZVZhbHVlcyA9IHVzZU1lbW8oKCkgPT4ge1xuLy8gICAgIGlmIChhY3RpdmVGaWx0ZXIpIHtcbi8vICAgICAgIHJldHVybiBnZXRVbmlxdWVWYWx1ZXMoYWN0aXZlRmlsdGVyKTtcbi8vICAgICB9XG4vLyAgICAgcmV0dXJuIFtdO1xuLy8gICB9LCBbYWN0aXZlRmlsdGVyLCBwbGF5TGlzdF0pO1xuLy8gICBjb25zdCBtZW1vaXplZEdldFVuaXF1ZVllYXJzID0gdXNlTWVtbygoKSA9PiB7XG4vLyAgICAgaWYgKGFjdGl2ZUZpbHRlcikge1xuLy8gICAgICAgcmV0dXJuIGdldFVuaXF1ZVllYXJzKCk7XG4vLyAgICAgfVxuLy8gICAgIHJldHVybiBbXTtcbi8vICAgfSwgW2FjdGl2ZUZpbHRlciwgcGxheUxpc3RdKTtcblxuLy8gICByZXR1cm4gKFxuLy8gICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5jZW50ZXJCbG9ja0ZpbHRlciwgc3R5bGVzLmZpbHRlcil9PlxuLy8gICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5maWx0ZXJUaXRsZX0+U2VhcmNoIGZvcjo8L2Rpdj5cblxuLy8gICAgICAgPEZpbHRlckJsb2NrSXRlbVxuLy8gICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVGaWx0ZXJDbGljayhcImF1dGhvclwiKX1cbi8vICAgICAgICAgaXNPcGVuZWQ9e2FjdGl2ZUZpbHRlciA9PT0gXCJhdXRob3JcIn1cbi8vICAgICAgICAgbGlzdD17bWVtb2l6ZWRHZXRVbmlxdWVWYWx1ZXN9XG4vLyAgICAgICA+XG4vLyAgICAgICAgIGFydGlzdFxuLy8gICAgICAgPC9GaWx0ZXJCbG9ja0l0ZW0+XG4vLyAgICAgICA8RmlsdGVyQmxvY2tJdGVtXG4vLyAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUZpbHRlckNsaWNrKFwicmVsZWFzZV9kYXRlXCIpfVxuLy8gICAgICAgICBpc09wZW5lZD17YWN0aXZlRmlsdGVyID09PSBcInJlbGVhc2VfZGF0ZVwifVxuLy8gICAgICAgICBsaXN0PXttZW1vaXplZEdldFVuaXF1ZVllYXJzfVxuLy8gICAgICAgPlxuLy8gICAgICAgICB5ZWFyXG4vLyAgICAgICA8L0ZpbHRlckJsb2NrSXRlbT5cbi8vICAgICAgIDxGaWx0ZXJCbG9ja0l0ZW1cbi8vICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlRmlsdGVyQ2xpY2soXCJnZW5yZVwiKX1cbi8vICAgICAgICAgaXNPcGVuZWQ9e2FjdGl2ZUZpbHRlciA9PT0gXCJnZW5yZVwifVxuLy8gICAgICAgICBsaXN0PXttZW1vaXplZEdldFVuaXF1ZVZhbHVlc31cbi8vICAgICAgID5cbi8vICAgICAgICAgZ2VucmVcbi8vICAgICAgIDwvRmlsdGVyQmxvY2tJdGVtPlxuXG4vLyAgICAgPC9kaXY+XG4vLyAgICk7XG4vLyB9O1xuXG4vLyBleHBvcnQgZGVmYXVsdCBGaWx0ZXJCbG9jaztcbiJdLCJuYW1lcyI6WyJjbGFzc05hbWVzIiwic3R5bGVzIiwiUmVhY3QiLCJ1c2VNZW1vIiwidXNlU3RhdGUiLCJGaWx0ZXJCbG9ja0l0ZW0iLCJ1c2VBcHBEaXNwYXRjaCIsInVzZUFwcFNlbGVjdG9yIiwiY2xlYXJBY3RpdmVGaWx0ZXJzIiwic2V0QWN0aXZlRmlsdGVyIiwiRmlsdGVyQmxvY2siLCJkaXNwYXRjaCIsInBsYXlMaXN0Iiwic3RhdGUiLCJ0cmFja3MiLCJzZWxlY3RlZEF1dGhvcnMiLCJhY3RpdmVGaWx0ZXJzIiwiYXV0aG9ycyIsInNlbGVjdGVkR2VucmVzIiwiZ2VucmVzIiwibG9jYWxBY3RpdmVGaWx0ZXIiLCJzZXRMb2NhbEFjdGl2ZUZpbHRlciIsInNvcnRCeVllYXJWYWx1ZXMiLCJ0b2dnbGVSZWxlYXNlWWVhckZpbHRlciIsIm9wdGlvbiIsInJlbGVhc2VfZGF0ZXMiLCJ0b2dnbGVTZWxlY3RlZEF1dGhvcnMiLCJhdXRob3IiLCJpbmNsdWRlcyIsImZpbHRlciIsIml0ZW0iLCJ0b2dnbGVTZWxlY3RlZEdlbnJlcyIsImdlbnJlIiwiZGlzY2FyZEZpbHRlcnMiLCJkaXMiLCJnZXRVbmlxdWVWYWx1ZXMiLCJwcm9wZXJ0eSIsIkFycmF5IiwiZnJvbSIsIlNldCIsIm1hcCIsInRyYWNrIiwidmFsdWUiLCJzb3J0IiwiYSIsImIiLCJsb2NhbGVDb21wYXJlIiwibWVtb2l6ZWRHZXRVbmlxdWVWYWx1ZXMiLCJkaXYiLCJjbGFzc05hbWUiLCJjZW50ZXJCbG9ja0ZpbHRlciIsImZpbHRlclRpdGxlIiwib25DbGljayIsImlzT3BlbmVkIiwibGlzdCIsInRvZ2dsZVNlbGVjdGVkT3B0aW9uIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/FilterBlock/FilterBlock.tsx\n"));

/***/ })

});