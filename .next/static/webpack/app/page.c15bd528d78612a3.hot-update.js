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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FilterBlock.module.css */ \"(app-pages-browser)/./src/components/FilterBlock/FilterBlock.module.css\");\n/* harmony import */ var _FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _FilterBlockItem_FilterBlockItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../FilterBlockItem/FilterBlockItem */ \"(app-pages-browser)/./src/components/FilterBlockItem/FilterBlockItem.tsx\");\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/hooks */ \"(app-pages-browser)/./src/hooks.ts\");\n/* harmony import */ var _store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/store/features/tracksSlice */ \"(app-pages-browser)/./src/store/features/tracksSlice.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n // Renaming setActiveFilter from tracksSlice\nconst FilterBlock = ()=>{\n    _s();\n    const playList = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useAppSelector)((state)=>state.tracks.playList);\n    const dispatch = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useAppDispatch)();\n    // Define active filters state\n    const [localActiveFilter, setLocalActiveFilter] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null); // Renamed to localActiveFilter\n    // Function to apply filter when a value is selected\n    const applyFilter = (filterType, value)=>{\n        setLocalActiveFilter(null); // Close the pop-up window\n        dispatch((0,_store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_5__.setActiveFilter)({\n            filterKey: filterType,\n            filterValue: value\n        })); // Dispatch action to set active filter\n    };\n    // Function to discard filters\n    const discardFilters = ()=>{\n        dispatch((0,_store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_5__.clearActiveFilters)()); // Dispatch action to clear active filters\n    };\n    // Get unique values for each filter type\n    const getUniqueValues = (property)=>{\n        return playList ? Array.from(new Set(playList.map((track)=>track[property]))).filter((value)=>typeof value === \"string\" && value !== \"-\").map((value)=>value).sort((a, b)=>a.localeCompare(b)) : [];\n    };\n    // Get unique authors, years, and genres\n    const uniqueAuthors = getUniqueValues(\"author\");\n    const uniqueYears = getUniqueValues(\"release_date\");\n    const uniqueGenres = getUniqueValues(\"genre\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().centerBlockFilter), (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().filter)),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().filterTitle),\n                children: \"Search for:\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterBlockItem_FilterBlockItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onClick: ()=>setLocalActiveFilter(localActiveFilter === \"author\" ? null : \"author\"),\n                isOpened: localActiveFilter === \"author\",\n                filterKey: localActiveFilter,\n                list: uniqueAuthors,\n                // applyFilter={() => applyFilter()} // Pass applyFilter function to handle selection\n                applyFilter: (filterType, value)=>applyFilter(filterType, value),\n                children: \"Artist\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterBlockItem_FilterBlockItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onClick: ()=>setLocalActiveFilter(localActiveFilter === \"release_date\" ? null : \"release_date\"),\n                isOpened: localActiveFilter === \"release_date\",\n                filterKey: localActiveFilter,\n                list: uniqueYears,\n                applyFilter: (filterType, value)=>applyFilter(filterType, value),\n                disca: true,\n                children: \"Year\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterBlockItem_FilterBlockItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onClick: ()=>setLocalActiveFilter(localActiveFilter === \"genre\" ? null : \"genre\"),\n                isOpened: localActiveFilter === \"genre\",\n                filterKey: localActiveFilter,\n                list: uniqueGenres,\n                applyFilter: (filterType, value)=>applyFilter(filterType, value),\n                children: \"Genre\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: discardFilters,\n                children: \"Discard filters\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FilterBlock, \"fCtBLESseeI0yB9GCv9EcP7VZqQ=\", false, function() {\n    return [\n        _hooks__WEBPACK_IMPORTED_MODULE_4__.useAppSelector,\n        _hooks__WEBPACK_IMPORTED_MODULE_4__.useAppDispatch\n    ];\n});\n_c = FilterBlock;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FilterBlock); // \"use client\"\n // import classNames from \"classnames\";\n // import styles from \"./FilterBlock.module.css\";\n // import { useMemo, useState } from \"react\";\n // import FilterBlockItem from \"../FilterBlockItem/FilterBlockItem\";\n // import { useAppSelector } from \"@/hooks\";\n // import { trackType } from \"@/types/types\";\n // const FilterBlock = () => {\n //   // import playlist from API\n //   const playList = useAppSelector((state) => state.tracks.playList);\n //   // set filter\n //   const [activeFilter, setActiveFilter] = useState<keyof trackType | null>(null);\n //   // apply filter\n //   const handleFilterClick = (newFilter: keyof trackType) => {\n //     setActiveFilter((prev) => (newFilter === prev ? null : newFilter));\n //   };\n //   // returns unique values depenging on the key\n //   const getUniqueValues = (property: keyof trackType) => {\n //     return playList\n //       ? Array.from(new Set(playList.map((track: trackType) => track[property])))\n //         .filter((value) => typeof value === \"string\" && value !== \"-\")\n //         .map((value) => value as string)\n //         .sort((a, b) => a.localeCompare(b))\n //       : [];\n //   };\n //   // getUniqueValues function adjusted to sort release_date params to unique years\n //   const getUniqueYears = () => {\n //     return playList\n //       ? Array.from(new Set(playList.map((track: trackType) => track.release_date)))\n //         .filter((date) => typeof date === \"string\" && date !== \"-\")\n //         .map((date) => date.split(\"-\")[0])\n //         .filter((year, index, self) => self.indexOf(year) === index)\n //         .sort((a, b) => a.localeCompare(b))\n //       : [];\n //   };\n //   // useMemo\n //   const memoizedGetUniqueValues = useMemo(() => {\n //     if (activeFilter) {\n //       return getUniqueValues(activeFilter);\n //     }\n //     return [];\n //   }, [activeFilter, playList]);\n //   const memoizedGetUniqueYears = useMemo(() => {\n //     if (activeFilter) {\n //       return getUniqueYears();\n //     }\n //     return [];\n //   }, [activeFilter, playList]);\n //   return (\n //     <div className={classNames(styles.centerBlockFilter, styles.filter)}>\n //       <div className={styles.filterTitle}>Search for:</div>\n //       <FilterBlockItem\n //         onClick={() => handleFilterClick(\"author\")}\n //         isOpened={activeFilter === \"author\"}\n //         list={memoizedGetUniqueValues}\n //       >\n //         artist\n //       </FilterBlockItem>\n //       <FilterBlockItem\n //         onClick={() => handleFilterClick(\"release_date\")}\n //         isOpened={activeFilter === \"release_date\"}\n //         list={memoizedGetUniqueYears}\n //       >\n //         year\n //       </FilterBlockItem>\n //       <FilterBlockItem\n //         onClick={() => handleFilterClick(\"genre\")}\n //         isOpened={activeFilter === \"genre\"}\n //         list={memoizedGetUniqueValues}\n //       >\n //         genre\n //       </FilterBlockItem>\n //     </div>\n //   );\n // };\n // export default FilterBlock;\nvar _c;\n$RefreshReg$(_c, \"FilterBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0ZpbHRlckJsb2NrL0ZpbHRlckJsb2NrLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRW9DO0FBQ1U7QUFDTjtBQUN5QjtBQUNSO0FBRTBCLENBQUMsNENBQTRDO0FBRWhJLE1BQU1TLGNBQWM7O0lBQ2xCLE1BQU1DLFdBQVdKLHNEQUFjQSxDQUFDLENBQUNLLFFBQVVBLE1BQU1DLE1BQU0sQ0FBQ0YsUUFBUTtJQUNoRSxNQUFNRyxXQUFXUixzREFBY0E7SUFFL0IsOEJBQThCO0lBQzlCLE1BQU0sQ0FBQ1MsbUJBQW1CQyxxQkFBcUIsR0FBR1osK0NBQVFBLENBQXlCLE9BQU8sK0JBQStCO0lBRXpILG9EQUFvRDtJQUNwRCxNQUFNYSxjQUFjLENBQUNDLFlBQTZCQztRQUNoREgscUJBQXFCLE9BQU8sMEJBQTBCO1FBQ3RERixTQUFTTCw0RUFBZUEsQ0FBQztZQUFFVyxXQUFXRjtZQUFZRyxhQUFhRjtRQUFNLEtBQUssdUNBQXVDO0lBQ25IO0lBRUEsOEJBQThCO0lBQzlCLE1BQU1HLGlCQUFpQjtRQUNyQlIsU0FBU04sK0VBQWtCQSxLQUFLLDBDQUEwQztJQUM1RTtJQUVBLHlDQUF5QztJQUN6QyxNQUFNZSxrQkFBa0IsQ0FBQ0M7UUFDbkIsT0FBT2IsV0FDSGMsTUFBTUMsSUFBSSxDQUFDLElBQUlDLElBQUloQixTQUFTaUIsR0FBRyxDQUFDLENBQUNDLFFBQXFCQSxLQUFLLENBQUNMLFNBQVMsSUFDcEVNLE1BQU0sQ0FBQyxDQUFDWCxRQUFVLE9BQU9BLFVBQVUsWUFBWUEsVUFBVSxLQUN6RFMsR0FBRyxDQUFDLENBQUNULFFBQVVBLE9BQ2ZZLElBQUksQ0FBQyxDQUFDQyxHQUFHQyxJQUFNRCxFQUFFRSxhQUFhLENBQUNELE1BQ2hDLEVBQUU7SUFDUjtJQUVKLHdDQUF3QztJQUN4QyxNQUFNRSxnQkFBZ0JaLGdCQUFnQjtJQUN0QyxNQUFNYSxjQUFjYixnQkFBZ0I7SUFDcEMsTUFBTWMsZUFBZWQsZ0JBQWdCO0lBRXJDLHFCQUNFLDhEQUFDZTtRQUFJQyxXQUFXdEMsaURBQVVBLENBQUNDLGtGQUF3QixFQUFFQSx1RUFBYTs7MEJBQ2hFLDhEQUFDb0M7Z0JBQUlDLFdBQVdyQyw0RUFBa0I7MEJBQUU7Ozs7OzswQkFFcEMsOERBQUNHLHdFQUFlQTtnQkFDZHFDLFNBQVMsSUFBTTFCLHFCQUFxQkQsc0JBQXNCLFdBQVcsT0FBTztnQkFDNUU0QixVQUFVNUIsc0JBQXNCO2dCQUNoQ0ssV0FBV0w7Z0JBQ1g2QixNQUFNVDtnQkFDTixxRkFBcUY7Z0JBQ3JGbEIsYUFBYSxDQUFDQyxZQUFZQyxRQUFVRixZQUFZQyxZQUFZQzswQkFDN0Q7Ozs7OzswQkFJRCw4REFBQ2Qsd0VBQWVBO2dCQUNkcUMsU0FBUyxJQUFNMUIscUJBQXFCRCxzQkFBc0IsaUJBQWlCLE9BQU87Z0JBQ2xGNEIsVUFBVTVCLHNCQUFzQjtnQkFDaENLLFdBQVdMO2dCQUNYNkIsTUFBTVI7Z0JBQ05uQixhQUFhLENBQUNDLFlBQVlDLFFBQVVGLFlBQVlDLFlBQVlDO2dCQUM1RDBCLEtBQUs7MEJBQ047Ozs7OzswQkFJRCw4REFBQ3hDLHdFQUFlQTtnQkFDZHFDLFNBQVMsSUFBTTFCLHFCQUFxQkQsc0JBQXNCLFVBQVUsT0FBTztnQkFDM0U0QixVQUFVNUIsc0JBQXNCO2dCQUNoQ0ssV0FBV0w7Z0JBQ1g2QixNQUFNUDtnQkFDTnBCLGFBQWEsQ0FBQ0MsWUFBWUMsUUFBVUYsWUFBWUMsWUFBWUM7MEJBQzdEOzs7Ozs7MEJBSUQsOERBQUMyQjtnQkFBT0osU0FBU3BCOzBCQUFnQjs7Ozs7Ozs7Ozs7O0FBTXZDO0dBM0VNWjs7UUFDYUgsa0RBQWNBO1FBQ2RELGtEQUFjQTs7O0tBRjNCSTtBQTZFTiwrREFBZUEsV0FBV0EsRUFBQyxDQUUzQixlQUFlO0NBRWYsdUNBQXVDO0NBQ3ZDLGlEQUFpRDtDQUNqRCw2Q0FBNkM7Q0FDN0Msb0VBQW9FO0NBQ3BFLDRDQUE0QztDQUM1Qyw2Q0FBNkM7Q0FFN0MsOEJBQThCO0NBQzlCLGdDQUFnQztDQUNoQyx1RUFBdUU7Q0FFdkUsa0JBQWtCO0NBQ2xCLG9GQUFvRjtDQUNwRixvQkFBb0I7Q0FDcEIsZ0VBQWdFO0NBQ2hFLDBFQUEwRTtDQUMxRSxPQUFPO0NBRVAsa0RBQWtEO0NBQ2xELDZEQUE2RDtDQUM3RCxzQkFBc0I7Q0FDdEIsbUZBQW1GO0NBQ25GLHlFQUF5RTtDQUN6RSwyQ0FBMkM7Q0FDM0MsOENBQThDO0NBQzlDLGNBQWM7Q0FDZCxPQUFPO0NBQ1AscUZBQXFGO0NBQ3JGLG1DQUFtQztDQUNuQyxzQkFBc0I7Q0FDdEIsc0ZBQXNGO0NBQ3RGLHNFQUFzRTtDQUN0RSw2Q0FBNkM7Q0FDN0MsdUVBQXVFO0NBQ3ZFLDhDQUE4QztDQUM5QyxjQUFjO0NBQ2QsT0FBTztDQUNQLGVBQWU7Q0FDZixvREFBb0Q7Q0FDcEQsMEJBQTBCO0NBQzFCLDhDQUE4QztDQUM5QyxRQUFRO0NBQ1IsaUJBQWlCO0NBQ2pCLGtDQUFrQztDQUNsQyxtREFBbUQ7Q0FDbkQsMEJBQTBCO0NBQzFCLGlDQUFpQztDQUNqQyxRQUFRO0NBQ1IsaUJBQWlCO0NBQ2pCLGtDQUFrQztDQUVsQyxhQUFhO0NBQ2IsNEVBQTRFO0NBQzVFLDhEQUE4RDtDQUU5RCx5QkFBeUI7Q0FDekIsc0RBQXNEO0NBQ3RELCtDQUErQztDQUMvQyx5Q0FBeUM7Q0FDekMsVUFBVTtDQUNWLGlCQUFpQjtDQUNqQiwyQkFBMkI7Q0FDM0IseUJBQXlCO0NBQ3pCLDREQUE0RDtDQUM1RCxxREFBcUQ7Q0FDckQsd0NBQXdDO0NBQ3hDLFVBQVU7Q0FDVixlQUFlO0NBQ2YsMkJBQTJCO0NBQzNCLHlCQUF5QjtDQUN6QixxREFBcUQ7Q0FDckQsOENBQThDO0NBQzlDLHlDQUF5QztDQUN6QyxVQUFVO0NBQ1YsZ0JBQWdCO0NBQ2hCLDJCQUEyQjtDQUUzQixhQUFhO0NBQ2IsT0FBTztDQUNQLEtBQUs7Q0FFTCw4QkFBOEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRmlsdGVyQmxvY2svRmlsdGVyQmxvY2sudHN4P2I1NmMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcblxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vRmlsdGVyQmxvY2subW9kdWxlLmNzc1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZpbHRlckJsb2NrSXRlbSBmcm9tICcuLi9GaWx0ZXJCbG9ja0l0ZW0vRmlsdGVyQmxvY2tJdGVtJztcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoLCB1c2VBcHBTZWxlY3RvciB9IGZyb20gJ0AvaG9va3MnO1xuaW1wb3J0IHsgdHJhY2tUeXBlIH0gZnJvbSAnQC90eXBlcy90eXBlcyc7XG5pbXBvcnQgeyBjbGVhckFjdGl2ZUZpbHRlcnMsIHNldEFjdGl2ZUZpbHRlciB9IGZyb20gJ0Avc3RvcmUvZmVhdHVyZXMvdHJhY2tzU2xpY2UnOyAvLyBSZW5hbWluZyBzZXRBY3RpdmVGaWx0ZXIgZnJvbSB0cmFja3NTbGljZVxuXG5jb25zdCBGaWx0ZXJCbG9jayA9ICgpID0+IHtcbiAgY29uc3QgcGxheUxpc3QgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnRyYWNrcy5wbGF5TGlzdCk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlQXBwRGlzcGF0Y2goKTtcblxuICAvLyBEZWZpbmUgYWN0aXZlIGZpbHRlcnMgc3RhdGVcbiAgY29uc3QgW2xvY2FsQWN0aXZlRmlsdGVyLCBzZXRMb2NhbEFjdGl2ZUZpbHRlcl0gPSB1c2VTdGF0ZTxrZXlvZiB0cmFja1R5cGUgfCBudWxsPihudWxsKTsgLy8gUmVuYW1lZCB0byBsb2NhbEFjdGl2ZUZpbHRlclxuXG4gIC8vIEZ1bmN0aW9uIHRvIGFwcGx5IGZpbHRlciB3aGVuIGEgdmFsdWUgaXMgc2VsZWN0ZWRcbiAgY29uc3QgYXBwbHlGaWx0ZXIgPSAoZmlsdGVyVHlwZToga2V5b2YgdHJhY2tUeXBlLCB2YWx1ZTogc3RyaW5nIHwgbnVsbCkgPT4ge1xuICAgIHNldExvY2FsQWN0aXZlRmlsdGVyKG51bGwpOyAvLyBDbG9zZSB0aGUgcG9wLXVwIHdpbmRvd1xuICAgIGRpc3BhdGNoKHNldEFjdGl2ZUZpbHRlcih7IGZpbHRlcktleTogZmlsdGVyVHlwZSwgZmlsdGVyVmFsdWU6IHZhbHVlIH0pKTsgLy8gRGlzcGF0Y2ggYWN0aW9uIHRvIHNldCBhY3RpdmUgZmlsdGVyXG4gIH07XG5cbiAgLy8gRnVuY3Rpb24gdG8gZGlzY2FyZCBmaWx0ZXJzXG4gIGNvbnN0IGRpc2NhcmRGaWx0ZXJzID0gKCkgPT4ge1xuICAgIGRpc3BhdGNoKGNsZWFyQWN0aXZlRmlsdGVycygpKTsgLy8gRGlzcGF0Y2ggYWN0aW9uIHRvIGNsZWFyIGFjdGl2ZSBmaWx0ZXJzXG4gIH07XG5cbiAgLy8gR2V0IHVuaXF1ZSB2YWx1ZXMgZm9yIGVhY2ggZmlsdGVyIHR5cGVcbiAgY29uc3QgZ2V0VW5pcXVlVmFsdWVzID0gKHByb3BlcnR5OiBrZXlvZiB0cmFja1R5cGUpID0+IHtcbiAgICAgICAgcmV0dXJuIHBsYXlMaXN0XG4gICAgICAgICAgPyBBcnJheS5mcm9tKG5ldyBTZXQocGxheUxpc3QubWFwKCh0cmFjazogdHJhY2tUeXBlKSA9PiB0cmFja1twcm9wZXJ0eV0pKSlcbiAgICAgICAgICAgIC5maWx0ZXIoKHZhbHVlKSA9PiB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgJiYgdmFsdWUgIT09IFwiLVwiKVxuICAgICAgICAgICAgLm1hcCgodmFsdWUpID0+IHZhbHVlIGFzIHN0cmluZylcbiAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBhLmxvY2FsZUNvbXBhcmUoYikpXG4gICAgICAgICAgOiBbXTtcbiAgICAgIH07XG5cbiAgLy8gR2V0IHVuaXF1ZSBhdXRob3JzLCB5ZWFycywgYW5kIGdlbnJlc1xuICBjb25zdCB1bmlxdWVBdXRob3JzID0gZ2V0VW5pcXVlVmFsdWVzKCdhdXRob3InKTtcbiAgY29uc3QgdW5pcXVlWWVhcnMgPSBnZXRVbmlxdWVWYWx1ZXMoJ3JlbGVhc2VfZGF0ZScpO1xuICBjb25zdCB1bmlxdWVHZW5yZXMgPSBnZXRVbmlxdWVWYWx1ZXMoJ2dlbnJlJyk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMuY2VudGVyQmxvY2tGaWx0ZXIsIHN0eWxlcy5maWx0ZXIpfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmlsdGVyVGl0bGV9PlNlYXJjaCBmb3I6PC9kaXY+XG5cbiAgICAgIDxGaWx0ZXJCbG9ja0l0ZW1cbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TG9jYWxBY3RpdmVGaWx0ZXIobG9jYWxBY3RpdmVGaWx0ZXIgPT09ICdhdXRob3InID8gbnVsbCA6ICdhdXRob3InKX0gLy8gVG9nZ2xlIGlzT3BlbmVkIG9uIGNsaWNrXG4gICAgICAgIGlzT3BlbmVkPXtsb2NhbEFjdGl2ZUZpbHRlciA9PT0gJ2F1dGhvcid9IC8vIENoZWNrIGlmIHRoZSBmaWx0ZXIgaXMgb3BlblxuICAgICAgICBmaWx0ZXJLZXk9e2xvY2FsQWN0aXZlRmlsdGVyfVxuICAgICAgICBsaXN0PXt1bmlxdWVBdXRob3JzfSAvLyBQYXNzIHVuaXF1ZSBhdXRob3IgdmFsdWVzXG4gICAgICAgIC8vIGFwcGx5RmlsdGVyPXsoKSA9PiBhcHBseUZpbHRlcigpfSAvLyBQYXNzIGFwcGx5RmlsdGVyIGZ1bmN0aW9uIHRvIGhhbmRsZSBzZWxlY3Rpb25cbiAgICAgICAgYXBwbHlGaWx0ZXI9eyhmaWx0ZXJUeXBlLCB2YWx1ZSkgPT4gYXBwbHlGaWx0ZXIoZmlsdGVyVHlwZSwgdmFsdWUpfSAvLyBQYXNzIGZpbHRlclR5cGUgYW5kIHZhbHVlXG4gICAgICA+XG4gICAgICAgIEFydGlzdFxuICAgICAgPC9GaWx0ZXJCbG9ja0l0ZW0+XG5cbiAgICAgIDxGaWx0ZXJCbG9ja0l0ZW1cbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TG9jYWxBY3RpdmVGaWx0ZXIobG9jYWxBY3RpdmVGaWx0ZXIgPT09ICdyZWxlYXNlX2RhdGUnID8gbnVsbCA6ICdyZWxlYXNlX2RhdGUnKX1cbiAgICAgICAgaXNPcGVuZWQ9e2xvY2FsQWN0aXZlRmlsdGVyID09PSAncmVsZWFzZV9kYXRlJ31cbiAgICAgICAgZmlsdGVyS2V5PXtsb2NhbEFjdGl2ZUZpbHRlcn1cbiAgICAgICAgbGlzdD17dW5pcXVlWWVhcnN9XG4gICAgICAgIGFwcGx5RmlsdGVyPXsoZmlsdGVyVHlwZSwgdmFsdWUpID0+IGFwcGx5RmlsdGVyKGZpbHRlclR5cGUsIHZhbHVlKX1cbiAgICAgICAgZGlzY2FcbiAgICAgID5cbiAgICAgICAgWWVhclxuICAgICAgPC9GaWx0ZXJCbG9ja0l0ZW0+XG5cbiAgICAgIDxGaWx0ZXJCbG9ja0l0ZW1cbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TG9jYWxBY3RpdmVGaWx0ZXIobG9jYWxBY3RpdmVGaWx0ZXIgPT09ICdnZW5yZScgPyBudWxsIDogJ2dlbnJlJyl9XG4gICAgICAgIGlzT3BlbmVkPXtsb2NhbEFjdGl2ZUZpbHRlciA9PT0gJ2dlbnJlJ31cbiAgICAgICAgZmlsdGVyS2V5PXtsb2NhbEFjdGl2ZUZpbHRlcn1cbiAgICAgICAgbGlzdD17dW5pcXVlR2VucmVzfVxuICAgICAgICBhcHBseUZpbHRlcj17KGZpbHRlclR5cGUsIHZhbHVlKSA9PiBhcHBseUZpbHRlcihmaWx0ZXJUeXBlLCB2YWx1ZSl9XG4gICAgICA+XG4gICAgICAgIEdlbnJlXG4gICAgICA8L0ZpbHRlckJsb2NrSXRlbT5cbiAgICAgIFxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtkaXNjYXJkRmlsdGVyc30+XG4gICAgICAgIERpc2NhcmQgZmlsdGVyc1xuICAgICAgPC9idXR0b24+XG5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZpbHRlckJsb2NrO1xuXG4vLyBcInVzZSBjbGllbnRcIlxuXG4vLyBpbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuLy8gaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9GaWx0ZXJCbG9jay5tb2R1bGUuY3NzXCI7XG4vLyBpbXBvcnQgeyB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IEZpbHRlckJsb2NrSXRlbSBmcm9tIFwiLi4vRmlsdGVyQmxvY2tJdGVtL0ZpbHRlckJsb2NrSXRlbVwiO1xuLy8gaW1wb3J0IHsgdXNlQXBwU2VsZWN0b3IgfSBmcm9tIFwiQC9ob29rc1wiO1xuLy8gaW1wb3J0IHsgdHJhY2tUeXBlIH0gZnJvbSBcIkAvdHlwZXMvdHlwZXNcIjtcblxuLy8gY29uc3QgRmlsdGVyQmxvY2sgPSAoKSA9PiB7XG4vLyAgIC8vIGltcG9ydCBwbGF5bGlzdCBmcm9tIEFQSVxuLy8gICBjb25zdCBwbGF5TGlzdCA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudHJhY2tzLnBsYXlMaXN0KTtcbiAgXG4vLyAgIC8vIHNldCBmaWx0ZXJcbi8vICAgY29uc3QgW2FjdGl2ZUZpbHRlciwgc2V0QWN0aXZlRmlsdGVyXSA9IHVzZVN0YXRlPGtleW9mIHRyYWNrVHlwZSB8IG51bGw+KG51bGwpO1xuLy8gICAvLyBhcHBseSBmaWx0ZXJcbi8vICAgY29uc3QgaGFuZGxlRmlsdGVyQ2xpY2sgPSAobmV3RmlsdGVyOiBrZXlvZiB0cmFja1R5cGUpID0+IHtcbi8vICAgICBzZXRBY3RpdmVGaWx0ZXIoKHByZXYpID0+IChuZXdGaWx0ZXIgPT09IHByZXYgPyBudWxsIDogbmV3RmlsdGVyKSk7XG4vLyAgIH07XG4gIFxuLy8gICAvLyByZXR1cm5zIHVuaXF1ZSB2YWx1ZXMgZGVwZW5naW5nIG9uIHRoZSBrZXlcbi8vICAgY29uc3QgZ2V0VW5pcXVlVmFsdWVzID0gKHByb3BlcnR5OiBrZXlvZiB0cmFja1R5cGUpID0+IHtcbi8vICAgICByZXR1cm4gcGxheUxpc3Rcbi8vICAgICAgID8gQXJyYXkuZnJvbShuZXcgU2V0KHBsYXlMaXN0Lm1hcCgodHJhY2s6IHRyYWNrVHlwZSkgPT4gdHJhY2tbcHJvcGVydHldKSkpXG4vLyAgICAgICAgIC5maWx0ZXIoKHZhbHVlKSA9PiB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgJiYgdmFsdWUgIT09IFwiLVwiKVxuLy8gICAgICAgICAubWFwKCh2YWx1ZSkgPT4gdmFsdWUgYXMgc3RyaW5nKVxuLy8gICAgICAgICAuc29ydCgoYSwgYikgPT4gYS5sb2NhbGVDb21wYXJlKGIpKVxuLy8gICAgICAgOiBbXTtcbi8vICAgfTtcbi8vICAgLy8gZ2V0VW5pcXVlVmFsdWVzIGZ1bmN0aW9uIGFkanVzdGVkIHRvIHNvcnQgcmVsZWFzZV9kYXRlIHBhcmFtcyB0byB1bmlxdWUgeWVhcnNcbi8vICAgY29uc3QgZ2V0VW5pcXVlWWVhcnMgPSAoKSA9PiB7XG4vLyAgICAgcmV0dXJuIHBsYXlMaXN0XG4vLyAgICAgICA/IEFycmF5LmZyb20obmV3IFNldChwbGF5TGlzdC5tYXAoKHRyYWNrOiB0cmFja1R5cGUpID0+IHRyYWNrLnJlbGVhc2VfZGF0ZSkpKVxuLy8gICAgICAgICAuZmlsdGVyKChkYXRlKSA9PiB0eXBlb2YgZGF0ZSA9PT0gXCJzdHJpbmdcIiAmJiBkYXRlICE9PSBcIi1cIilcbi8vICAgICAgICAgLm1hcCgoZGF0ZSkgPT4gZGF0ZS5zcGxpdChcIi1cIilbMF0pXG4vLyAgICAgICAgIC5maWx0ZXIoKHllYXIsIGluZGV4LCBzZWxmKSA9PiBzZWxmLmluZGV4T2YoeWVhcikgPT09IGluZGV4KVxuLy8gICAgICAgICAuc29ydCgoYSwgYikgPT4gYS5sb2NhbGVDb21wYXJlKGIpKVxuLy8gICAgICAgOiBbXTtcbi8vICAgfTtcbi8vICAgLy8gdXNlTWVtb1xuLy8gICBjb25zdCBtZW1vaXplZEdldFVuaXF1ZVZhbHVlcyA9IHVzZU1lbW8oKCkgPT4ge1xuLy8gICAgIGlmIChhY3RpdmVGaWx0ZXIpIHtcbi8vICAgICAgIHJldHVybiBnZXRVbmlxdWVWYWx1ZXMoYWN0aXZlRmlsdGVyKTtcbi8vICAgICB9XG4vLyAgICAgcmV0dXJuIFtdO1xuLy8gICB9LCBbYWN0aXZlRmlsdGVyLCBwbGF5TGlzdF0pO1xuLy8gICBjb25zdCBtZW1vaXplZEdldFVuaXF1ZVllYXJzID0gdXNlTWVtbygoKSA9PiB7XG4vLyAgICAgaWYgKGFjdGl2ZUZpbHRlcikge1xuLy8gICAgICAgcmV0dXJuIGdldFVuaXF1ZVllYXJzKCk7XG4vLyAgICAgfVxuLy8gICAgIHJldHVybiBbXTtcbi8vICAgfSwgW2FjdGl2ZUZpbHRlciwgcGxheUxpc3RdKTtcblxuLy8gICByZXR1cm4gKFxuLy8gICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5jZW50ZXJCbG9ja0ZpbHRlciwgc3R5bGVzLmZpbHRlcil9PlxuLy8gICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5maWx0ZXJUaXRsZX0+U2VhcmNoIGZvcjo8L2Rpdj5cblxuLy8gICAgICAgPEZpbHRlckJsb2NrSXRlbVxuLy8gICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVGaWx0ZXJDbGljayhcImF1dGhvclwiKX1cbi8vICAgICAgICAgaXNPcGVuZWQ9e2FjdGl2ZUZpbHRlciA9PT0gXCJhdXRob3JcIn1cbi8vICAgICAgICAgbGlzdD17bWVtb2l6ZWRHZXRVbmlxdWVWYWx1ZXN9XG4vLyAgICAgICA+XG4vLyAgICAgICAgIGFydGlzdFxuLy8gICAgICAgPC9GaWx0ZXJCbG9ja0l0ZW0+XG4vLyAgICAgICA8RmlsdGVyQmxvY2tJdGVtXG4vLyAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUZpbHRlckNsaWNrKFwicmVsZWFzZV9kYXRlXCIpfVxuLy8gICAgICAgICBpc09wZW5lZD17YWN0aXZlRmlsdGVyID09PSBcInJlbGVhc2VfZGF0ZVwifVxuLy8gICAgICAgICBsaXN0PXttZW1vaXplZEdldFVuaXF1ZVllYXJzfVxuLy8gICAgICAgPlxuLy8gICAgICAgICB5ZWFyXG4vLyAgICAgICA8L0ZpbHRlckJsb2NrSXRlbT5cbi8vICAgICAgIDxGaWx0ZXJCbG9ja0l0ZW1cbi8vICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlRmlsdGVyQ2xpY2soXCJnZW5yZVwiKX1cbi8vICAgICAgICAgaXNPcGVuZWQ9e2FjdGl2ZUZpbHRlciA9PT0gXCJnZW5yZVwifVxuLy8gICAgICAgICBsaXN0PXttZW1vaXplZEdldFVuaXF1ZVZhbHVlc31cbi8vICAgICAgID5cbi8vICAgICAgICAgZ2VucmVcbi8vICAgICAgIDwvRmlsdGVyQmxvY2tJdGVtPlxuXG4vLyAgICAgPC9kaXY+XG4vLyAgICk7XG4vLyB9O1xuXG4vLyBleHBvcnQgZGVmYXVsdCBGaWx0ZXJCbG9jaztcbiJdLCJuYW1lcyI6WyJjbGFzc05hbWVzIiwic3R5bGVzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIkZpbHRlckJsb2NrSXRlbSIsInVzZUFwcERpc3BhdGNoIiwidXNlQXBwU2VsZWN0b3IiLCJjbGVhckFjdGl2ZUZpbHRlcnMiLCJzZXRBY3RpdmVGaWx0ZXIiLCJGaWx0ZXJCbG9jayIsInBsYXlMaXN0Iiwic3RhdGUiLCJ0cmFja3MiLCJkaXNwYXRjaCIsImxvY2FsQWN0aXZlRmlsdGVyIiwic2V0TG9jYWxBY3RpdmVGaWx0ZXIiLCJhcHBseUZpbHRlciIsImZpbHRlclR5cGUiLCJ2YWx1ZSIsImZpbHRlcktleSIsImZpbHRlclZhbHVlIiwiZGlzY2FyZEZpbHRlcnMiLCJnZXRVbmlxdWVWYWx1ZXMiLCJwcm9wZXJ0eSIsIkFycmF5IiwiZnJvbSIsIlNldCIsIm1hcCIsInRyYWNrIiwiZmlsdGVyIiwic29ydCIsImEiLCJiIiwibG9jYWxlQ29tcGFyZSIsInVuaXF1ZUF1dGhvcnMiLCJ1bmlxdWVZZWFycyIsInVuaXF1ZUdlbnJlcyIsImRpdiIsImNsYXNzTmFtZSIsImNlbnRlckJsb2NrRmlsdGVyIiwiZmlsdGVyVGl0bGUiLCJvbkNsaWNrIiwiaXNPcGVuZWQiLCJsaXN0IiwiZGlzY2EiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/FilterBlock/FilterBlock.tsx\n"));

/***/ })

});