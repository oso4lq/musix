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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FilterBlock.module.css */ \"(app-pages-browser)/./src/components/FilterBlock/FilterBlock.module.css\");\n/* harmony import */ var _FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _FilterBlockItem_FilterBlockItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../FilterBlockItem/FilterBlockItem */ \"(app-pages-browser)/./src/components/FilterBlockItem/FilterBlockItem.tsx\");\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/hooks */ \"(app-pages-browser)/./src/hooks.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst FilterBlock = ()=>{\n    _s();\n    const playList = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useAppSelector)((state)=>state.tracks.playList);\n    const dispatch = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useAppDispatch)();\n    // Define active filters state\n    const [localActiveFilter, setLocalActiveFilter] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null); // Renamed to localActiveFilter\n    // Function to apply filter when a value is selected\n    const applyFilter = (filterType, value)=>{\n        setLocalActiveFilter(null); // Close the pop-up window\n        dispatch(setActiveFilter({\n            filterKey: filterType,\n            filterValue: value\n        })); // Dispatch action to set active filter\n    };\n    // Get unique values for each filter type\n    const getUniqueValues = (property)=>{\n        return playList ? Array.from(new Set(playList.map((track)=>track[property]))).filter((value)=>typeof value === \"string\" && value !== \"-\").map((value)=>value).sort((a, b)=>a.localeCompare(b)) : [];\n    };\n    // Get unique authors, years, and genres\n    const uniqueAuthors = getUniqueValues(\"author\");\n    const uniqueYears = getUniqueValues(\"release_date\");\n    const uniqueGenres = getUniqueValues(\"genre\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().centerBlockFilter), (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().filter)),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().filterTitle),\n                children: \"Search for:\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterBlockItem_FilterBlockItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onClick: ()=>setLocalActiveFilter(localActiveFilter === \"author\" ? null : \"author\"),\n                isOpened: localActiveFilter === \"author\",\n                filterKey: localActiveFilter,\n                list: uniqueAuthors,\n                // applyFilter={() => applyFilter()} // Pass applyFilter function to handle selection\n                applyFilter: (filterType, value)=>applyFilter(filterType, value),\n                children: \"Artist\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterBlockItem_FilterBlockItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onClick: ()=>setLocalActiveFilter(localActiveFilter === \"release_date\" ? null : \"release_date\"),\n                isOpened: localActiveFilter === \"release_date\",\n                filterKey: localActiveFilter,\n                list: uniqueYears,\n                applyFilter: (filterType, value)=>applyFilter(filterType, value),\n                children: \"Year\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterBlockItem_FilterBlockItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onClick: ()=>setLocalActiveFilter(localActiveFilter === \"genre\" ? null : \"genre\"),\n                isOpened: localActiveFilter === \"genre\",\n                filterKey: localActiveFilter,\n                list: uniqueGenres,\n                applyFilter: (filterType, value)=>applyFilter(filterType, value),\n                children: \"Genre\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                children: \"Discard filters\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FilterBlock, \"fCtBLESseeI0yB9GCv9EcP7VZqQ=\", false, function() {\n    return [\n        _hooks__WEBPACK_IMPORTED_MODULE_4__.useAppSelector,\n        _hooks__WEBPACK_IMPORTED_MODULE_4__.useAppDispatch\n    ];\n});\n_c = FilterBlock;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FilterBlock); // \"use client\"\n // import classNames from \"classnames\";\n // import styles from \"./FilterBlock.module.css\";\n // import { useMemo, useState } from \"react\";\n // import FilterBlockItem from \"../FilterBlockItem/FilterBlockItem\";\n // import { useAppSelector } from \"@/hooks\";\n // import { trackType } from \"@/types/types\";\n // const FilterBlock = () => {\n //   // import playlist from API\n //   const playList = useAppSelector((state) => state.tracks.playList);\n //   // set filter\n //   const [activeFilter, setActiveFilter] = useState<keyof trackType | null>(null);\n //   // apply filter\n //   const handleFilterClick = (newFilter: keyof trackType) => {\n //     setActiveFilter((prev) => (newFilter === prev ? null : newFilter));\n //   };\n //   // returns unique values depenging on the key\n //   const getUniqueValues = (property: keyof trackType) => {\n //     return playList\n //       ? Array.from(new Set(playList.map((track: trackType) => track[property])))\n //         .filter((value) => typeof value === \"string\" && value !== \"-\")\n //         .map((value) => value as string)\n //         .sort((a, b) => a.localeCompare(b))\n //       : [];\n //   };\n //   // getUniqueValues function adjusted to sort release_date params to unique years\n //   const getUniqueYears = () => {\n //     return playList\n //       ? Array.from(new Set(playList.map((track: trackType) => track.release_date)))\n //         .filter((date) => typeof date === \"string\" && date !== \"-\")\n //         .map((date) => date.split(\"-\")[0])\n //         .filter((year, index, self) => self.indexOf(year) === index)\n //         .sort((a, b) => a.localeCompare(b))\n //       : [];\n //   };\n //   // useMemo\n //   const memoizedGetUniqueValues = useMemo(() => {\n //     if (activeFilter) {\n //       return getUniqueValues(activeFilter);\n //     }\n //     return [];\n //   }, [activeFilter, playList]);\n //   const memoizedGetUniqueYears = useMemo(() => {\n //     if (activeFilter) {\n //       return getUniqueYears();\n //     }\n //     return [];\n //   }, [activeFilter, playList]);\n //   return (\n //     <div className={classNames(styles.centerBlockFilter, styles.filter)}>\n //       <div className={styles.filterTitle}>Search for:</div>\n //       <FilterBlockItem\n //         onClick={() => handleFilterClick(\"author\")}\n //         isOpened={activeFilter === \"author\"}\n //         list={memoizedGetUniqueValues}\n //       >\n //         artist\n //       </FilterBlockItem>\n //       <FilterBlockItem\n //         onClick={() => handleFilterClick(\"release_date\")}\n //         isOpened={activeFilter === \"release_date\"}\n //         list={memoizedGetUniqueYears}\n //       >\n //         year\n //       </FilterBlockItem>\n //       <FilterBlockItem\n //         onClick={() => handleFilterClick(\"genre\")}\n //         isOpened={activeFilter === \"genre\"}\n //         list={memoizedGetUniqueValues}\n //       >\n //         genre\n //       </FilterBlockItem>\n //     </div>\n //   );\n // };\n // export default FilterBlock;\nvar _c;\n$RefreshReg$(_c, \"FilterBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0ZpbHRlckJsb2NrL0ZpbHRlckJsb2NrLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFb0M7QUFDVTtBQUNOO0FBQ3lCO0FBQ1I7QUFJekQsTUFBTU8sY0FBYzs7SUFDbEIsTUFBTUMsV0FBV0Ysc0RBQWNBLENBQUMsQ0FBQ0csUUFBVUEsTUFBTUMsTUFBTSxDQUFDRixRQUFRO0lBQ2hFLE1BQU1HLFdBQVdOLHNEQUFjQTtJQUUvQiw4QkFBOEI7SUFDOUIsTUFBTSxDQUFDTyxtQkFBbUJDLHFCQUFxQixHQUFHViwrQ0FBUUEsQ0FBeUIsT0FBTywrQkFBK0I7SUFFekgsb0RBQW9EO0lBQ3BELE1BQU1XLGNBQWMsQ0FBQ0MsWUFBNkJDO1FBQ2hESCxxQkFBcUIsT0FBTywwQkFBMEI7UUFDdERGLFNBQVNNLGdCQUFnQjtZQUFFQyxXQUFXSDtZQUFZSSxhQUFhSDtRQUFNLEtBQUssdUNBQXVDO0lBQ25IO0lBRUEseUNBQXlDO0lBQ3pDLE1BQU1JLGtCQUFrQixDQUFDQztRQUNuQixPQUFPYixXQUNIYyxNQUFNQyxJQUFJLENBQUMsSUFBSUMsSUFBSWhCLFNBQVNpQixHQUFHLENBQUMsQ0FBQ0MsUUFBcUJBLEtBQUssQ0FBQ0wsU0FBUyxJQUNwRU0sTUFBTSxDQUFDLENBQUNYLFFBQVUsT0FBT0EsVUFBVSxZQUFZQSxVQUFVLEtBQ3pEUyxHQUFHLENBQUMsQ0FBQ1QsUUFBVUEsT0FDZlksSUFBSSxDQUFDLENBQUNDLEdBQUdDLElBQU1ELEVBQUVFLGFBQWEsQ0FBQ0QsTUFDaEMsRUFBRTtJQUNSO0lBRUosd0NBQXdDO0lBQ3hDLE1BQU1FLGdCQUFnQlosZ0JBQWdCO0lBQ3RDLE1BQU1hLGNBQWNiLGdCQUFnQjtJQUNwQyxNQUFNYyxlQUFlZCxnQkFBZ0I7SUFFckMscUJBQ0UsOERBQUNlO1FBQUlDLFdBQVdwQyxpREFBVUEsQ0FBQ0Msa0ZBQXdCLEVBQUVBLHVFQUFhOzswQkFDaEUsOERBQUNrQztnQkFBSUMsV0FBV25DLDRFQUFrQjswQkFBRTs7Ozs7OzBCQUVwQyw4REFBQ0csd0VBQWVBO2dCQUNkbUMsU0FBUyxJQUFNMUIscUJBQXFCRCxzQkFBc0IsV0FBVyxPQUFPO2dCQUM1RTRCLFVBQVU1QixzQkFBc0I7Z0JBQ2hDTSxXQUFXTjtnQkFDWDZCLE1BQU1UO2dCQUNOLHFGQUFxRjtnQkFDckZsQixhQUFhLENBQUNDLFlBQVlDLFFBQVVGLFlBQVlDLFlBQVlDOzBCQUM3RDs7Ozs7OzBCQUlELDhEQUFDWix3RUFBZUE7Z0JBQ2RtQyxTQUFTLElBQU0xQixxQkFBcUJELHNCQUFzQixpQkFBaUIsT0FBTztnQkFDbEY0QixVQUFVNUIsc0JBQXNCO2dCQUNoQ00sV0FBV047Z0JBQ1g2QixNQUFNUjtnQkFDTm5CLGFBQWEsQ0FBQ0MsWUFBWUMsUUFBVUYsWUFBWUMsWUFBWUM7MEJBQzdEOzs7Ozs7MEJBSUQsOERBQUNaLHdFQUFlQTtnQkFDZG1DLFNBQVMsSUFBTTFCLHFCQUFxQkQsc0JBQXNCLFVBQVUsT0FBTztnQkFDM0U0QixVQUFVNUIsc0JBQXNCO2dCQUNoQ00sV0FBV047Z0JBQ1g2QixNQUFNUDtnQkFDTnBCLGFBQWEsQ0FBQ0MsWUFBWUMsUUFBVUYsWUFBWUMsWUFBWUM7MEJBQzdEOzs7Ozs7MEJBSUQsOERBQUMwQjswQkFBTzs7Ozs7Ozs7Ozs7O0FBTWQ7R0FyRU1uQzs7UUFDYUQsa0RBQWNBO1FBQ2RELGtEQUFjQTs7O0tBRjNCRTtBQXVFTiwrREFBZUEsV0FBV0EsRUFBQyxDQUUzQixlQUFlO0NBRWYsdUNBQXVDO0NBQ3ZDLGlEQUFpRDtDQUNqRCw2Q0FBNkM7Q0FDN0Msb0VBQW9FO0NBQ3BFLDRDQUE0QztDQUM1Qyw2Q0FBNkM7Q0FFN0MsOEJBQThCO0NBQzlCLGdDQUFnQztDQUNoQyx1RUFBdUU7Q0FFdkUsa0JBQWtCO0NBQ2xCLG9GQUFvRjtDQUNwRixvQkFBb0I7Q0FDcEIsZ0VBQWdFO0NBQ2hFLDBFQUEwRTtDQUMxRSxPQUFPO0NBRVAsa0RBQWtEO0NBQ2xELDZEQUE2RDtDQUM3RCxzQkFBc0I7Q0FDdEIsbUZBQW1GO0NBQ25GLHlFQUF5RTtDQUN6RSwyQ0FBMkM7Q0FDM0MsOENBQThDO0NBQzlDLGNBQWM7Q0FDZCxPQUFPO0NBQ1AscUZBQXFGO0NBQ3JGLG1DQUFtQztDQUNuQyxzQkFBc0I7Q0FDdEIsc0ZBQXNGO0NBQ3RGLHNFQUFzRTtDQUN0RSw2Q0FBNkM7Q0FDN0MsdUVBQXVFO0NBQ3ZFLDhDQUE4QztDQUM5QyxjQUFjO0NBQ2QsT0FBTztDQUNQLGVBQWU7Q0FDZixvREFBb0Q7Q0FDcEQsMEJBQTBCO0NBQzFCLDhDQUE4QztDQUM5QyxRQUFRO0NBQ1IsaUJBQWlCO0NBQ2pCLGtDQUFrQztDQUNsQyxtREFBbUQ7Q0FDbkQsMEJBQTBCO0NBQzFCLGlDQUFpQztDQUNqQyxRQUFRO0NBQ1IsaUJBQWlCO0NBQ2pCLGtDQUFrQztDQUVsQyxhQUFhO0NBQ2IsNEVBQTRFO0NBQzVFLDhEQUE4RDtDQUU5RCx5QkFBeUI7Q0FDekIsc0RBQXNEO0NBQ3RELCtDQUErQztDQUMvQyx5Q0FBeUM7Q0FDekMsVUFBVTtDQUNWLGlCQUFpQjtDQUNqQiwyQkFBMkI7Q0FDM0IseUJBQXlCO0NBQ3pCLDREQUE0RDtDQUM1RCxxREFBcUQ7Q0FDckQsd0NBQXdDO0NBQ3hDLFVBQVU7Q0FDVixlQUFlO0NBQ2YsMkJBQTJCO0NBQzNCLHlCQUF5QjtDQUN6QixxREFBcUQ7Q0FDckQsOENBQThDO0NBQzlDLHlDQUF5QztDQUN6QyxVQUFVO0NBQ1YsZ0JBQWdCO0NBQ2hCLDJCQUEyQjtDQUUzQixhQUFhO0NBQ2IsT0FBTztDQUNQLEtBQUs7Q0FFTCw4QkFBOEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRmlsdGVyQmxvY2svRmlsdGVyQmxvY2sudHN4P2I1NmMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcblxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vRmlsdGVyQmxvY2subW9kdWxlLmNzc1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZpbHRlckJsb2NrSXRlbSBmcm9tICcuLi9GaWx0ZXJCbG9ja0l0ZW0vRmlsdGVyQmxvY2tJdGVtJztcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoLCB1c2VBcHBTZWxlY3RvciB9IGZyb20gJ0AvaG9va3MnO1xuaW1wb3J0IHsgdHJhY2tUeXBlIH0gZnJvbSAnQC90eXBlcy90eXBlcyc7XG5pbXBvcnQgeyBzZXRBY3RpdmVGaWx0ZXIgYXMgc2V0QWN0aXZlRmlsdGVyQWN0aW9uIH0gZnJvbSAnQC9zdG9yZS9mZWF0dXJlcy90cmFja3NTbGljZSc7IC8vIFJlbmFtaW5nIHNldEFjdGl2ZUZpbHRlciBmcm9tIHRyYWNrc1NsaWNlXG5cbmNvbnN0IEZpbHRlckJsb2NrID0gKCkgPT4ge1xuICBjb25zdCBwbGF5TGlzdCA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudHJhY2tzLnBsYXlMaXN0KTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xuXG4gIC8vIERlZmluZSBhY3RpdmUgZmlsdGVycyBzdGF0ZVxuICBjb25zdCBbbG9jYWxBY3RpdmVGaWx0ZXIsIHNldExvY2FsQWN0aXZlRmlsdGVyXSA9IHVzZVN0YXRlPGtleW9mIHRyYWNrVHlwZSB8IG51bGw+KG51bGwpOyAvLyBSZW5hbWVkIHRvIGxvY2FsQWN0aXZlRmlsdGVyXG5cbiAgLy8gRnVuY3Rpb24gdG8gYXBwbHkgZmlsdGVyIHdoZW4gYSB2YWx1ZSBpcyBzZWxlY3RlZFxuICBjb25zdCBhcHBseUZpbHRlciA9IChmaWx0ZXJUeXBlOiBrZXlvZiB0cmFja1R5cGUsIHZhbHVlOiBzdHJpbmcgfCBudWxsKSA9PiB7XG4gICAgc2V0TG9jYWxBY3RpdmVGaWx0ZXIobnVsbCk7IC8vIENsb3NlIHRoZSBwb3AtdXAgd2luZG93XG4gICAgZGlzcGF0Y2goc2V0QWN0aXZlRmlsdGVyKHsgZmlsdGVyS2V5OiBmaWx0ZXJUeXBlLCBmaWx0ZXJWYWx1ZTogdmFsdWUgfSkpOyAvLyBEaXNwYXRjaCBhY3Rpb24gdG8gc2V0IGFjdGl2ZSBmaWx0ZXJcbiAgfTtcblxuICAvLyBHZXQgdW5pcXVlIHZhbHVlcyBmb3IgZWFjaCBmaWx0ZXIgdHlwZVxuICBjb25zdCBnZXRVbmlxdWVWYWx1ZXMgPSAocHJvcGVydHk6IGtleW9mIHRyYWNrVHlwZSkgPT4ge1xuICAgICAgICByZXR1cm4gcGxheUxpc3RcbiAgICAgICAgICA/IEFycmF5LmZyb20obmV3IFNldChwbGF5TGlzdC5tYXAoKHRyYWNrOiB0cmFja1R5cGUpID0+IHRyYWNrW3Byb3BlcnR5XSkpKVxuICAgICAgICAgICAgLmZpbHRlcigodmFsdWUpID0+IHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiAmJiB2YWx1ZSAhPT0gXCItXCIpXG4gICAgICAgICAgICAubWFwKCh2YWx1ZSkgPT4gdmFsdWUgYXMgc3RyaW5nKVxuICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGEubG9jYWxlQ29tcGFyZShiKSlcbiAgICAgICAgICA6IFtdO1xuICAgICAgfTtcblxuICAvLyBHZXQgdW5pcXVlIGF1dGhvcnMsIHllYXJzLCBhbmQgZ2VucmVzXG4gIGNvbnN0IHVuaXF1ZUF1dGhvcnMgPSBnZXRVbmlxdWVWYWx1ZXMoJ2F1dGhvcicpO1xuICBjb25zdCB1bmlxdWVZZWFycyA9IGdldFVuaXF1ZVZhbHVlcygncmVsZWFzZV9kYXRlJyk7XG4gIGNvbnN0IHVuaXF1ZUdlbnJlcyA9IGdldFVuaXF1ZVZhbHVlcygnZ2VucmUnKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5jZW50ZXJCbG9ja0ZpbHRlciwgc3R5bGVzLmZpbHRlcil9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5maWx0ZXJUaXRsZX0+U2VhcmNoIGZvcjo8L2Rpdj5cblxuICAgICAgPEZpbHRlckJsb2NrSXRlbVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRMb2NhbEFjdGl2ZUZpbHRlcihsb2NhbEFjdGl2ZUZpbHRlciA9PT0gJ2F1dGhvcicgPyBudWxsIDogJ2F1dGhvcicpfSAvLyBUb2dnbGUgaXNPcGVuZWQgb24gY2xpY2tcbiAgICAgICAgaXNPcGVuZWQ9e2xvY2FsQWN0aXZlRmlsdGVyID09PSAnYXV0aG9yJ30gLy8gQ2hlY2sgaWYgdGhlIGZpbHRlciBpcyBvcGVuXG4gICAgICAgIGZpbHRlcktleT17bG9jYWxBY3RpdmVGaWx0ZXJ9XG4gICAgICAgIGxpc3Q9e3VuaXF1ZUF1dGhvcnN9IC8vIFBhc3MgdW5pcXVlIGF1dGhvciB2YWx1ZXNcbiAgICAgICAgLy8gYXBwbHlGaWx0ZXI9eygpID0+IGFwcGx5RmlsdGVyKCl9IC8vIFBhc3MgYXBwbHlGaWx0ZXIgZnVuY3Rpb24gdG8gaGFuZGxlIHNlbGVjdGlvblxuICAgICAgICBhcHBseUZpbHRlcj17KGZpbHRlclR5cGUsIHZhbHVlKSA9PiBhcHBseUZpbHRlcihmaWx0ZXJUeXBlLCB2YWx1ZSl9IC8vIFBhc3MgZmlsdGVyVHlwZSBhbmQgdmFsdWVcbiAgICAgID5cbiAgICAgICAgQXJ0aXN0XG4gICAgICA8L0ZpbHRlckJsb2NrSXRlbT5cblxuICAgICAgPEZpbHRlckJsb2NrSXRlbVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRMb2NhbEFjdGl2ZUZpbHRlcihsb2NhbEFjdGl2ZUZpbHRlciA9PT0gJ3JlbGVhc2VfZGF0ZScgPyBudWxsIDogJ3JlbGVhc2VfZGF0ZScpfVxuICAgICAgICBpc09wZW5lZD17bG9jYWxBY3RpdmVGaWx0ZXIgPT09ICdyZWxlYXNlX2RhdGUnfVxuICAgICAgICBmaWx0ZXJLZXk9e2xvY2FsQWN0aXZlRmlsdGVyfVxuICAgICAgICBsaXN0PXt1bmlxdWVZZWFyc31cbiAgICAgICAgYXBwbHlGaWx0ZXI9eyhmaWx0ZXJUeXBlLCB2YWx1ZSkgPT4gYXBwbHlGaWx0ZXIoZmlsdGVyVHlwZSwgdmFsdWUpfVxuICAgICAgPlxuICAgICAgICBZZWFyXG4gICAgICA8L0ZpbHRlckJsb2NrSXRlbT5cblxuICAgICAgPEZpbHRlckJsb2NrSXRlbVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRMb2NhbEFjdGl2ZUZpbHRlcihsb2NhbEFjdGl2ZUZpbHRlciA9PT0gJ2dlbnJlJyA/IG51bGwgOiAnZ2VucmUnKX1cbiAgICAgICAgaXNPcGVuZWQ9e2xvY2FsQWN0aXZlRmlsdGVyID09PSAnZ2VucmUnfVxuICAgICAgICBmaWx0ZXJLZXk9e2xvY2FsQWN0aXZlRmlsdGVyfVxuICAgICAgICBsaXN0PXt1bmlxdWVHZW5yZXN9XG4gICAgICAgIGFwcGx5RmlsdGVyPXsoZmlsdGVyVHlwZSwgdmFsdWUpID0+IGFwcGx5RmlsdGVyKGZpbHRlclR5cGUsIHZhbHVlKX1cbiAgICAgID5cbiAgICAgICAgR2VucmVcbiAgICAgIDwvRmlsdGVyQmxvY2tJdGVtPlxuICAgICAgXG4gICAgICA8YnV0dG9uPlxuICAgICAgICBEaXNjYXJkIGZpbHRlcnNcbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJCbG9jaztcblxuLy8gXCJ1c2UgY2xpZW50XCJcblxuLy8gaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbi8vIGltcG9ydCBzdHlsZXMgZnJvbSBcIi4vRmlsdGVyQmxvY2subW9kdWxlLmNzc1wiO1xuLy8gaW1wb3J0IHsgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBGaWx0ZXJCbG9ja0l0ZW0gZnJvbSBcIi4uL0ZpbHRlckJsb2NrSXRlbS9GaWx0ZXJCbG9ja0l0ZW1cIjtcbi8vIGltcG9ydCB7IHVzZUFwcFNlbGVjdG9yIH0gZnJvbSBcIkAvaG9va3NcIjtcbi8vIGltcG9ydCB7IHRyYWNrVHlwZSB9IGZyb20gXCJAL3R5cGVzL3R5cGVzXCI7XG5cbi8vIGNvbnN0IEZpbHRlckJsb2NrID0gKCkgPT4ge1xuLy8gICAvLyBpbXBvcnQgcGxheWxpc3QgZnJvbSBBUElcbi8vICAgY29uc3QgcGxheUxpc3QgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnRyYWNrcy5wbGF5TGlzdCk7XG4gIFxuLy8gICAvLyBzZXQgZmlsdGVyXG4vLyAgIGNvbnN0IFthY3RpdmVGaWx0ZXIsIHNldEFjdGl2ZUZpbHRlcl0gPSB1c2VTdGF0ZTxrZXlvZiB0cmFja1R5cGUgfCBudWxsPihudWxsKTtcbi8vICAgLy8gYXBwbHkgZmlsdGVyXG4vLyAgIGNvbnN0IGhhbmRsZUZpbHRlckNsaWNrID0gKG5ld0ZpbHRlcjoga2V5b2YgdHJhY2tUeXBlKSA9PiB7XG4vLyAgICAgc2V0QWN0aXZlRmlsdGVyKChwcmV2KSA9PiAobmV3RmlsdGVyID09PSBwcmV2ID8gbnVsbCA6IG5ld0ZpbHRlcikpO1xuLy8gICB9O1xuICBcbi8vICAgLy8gcmV0dXJucyB1bmlxdWUgdmFsdWVzIGRlcGVuZ2luZyBvbiB0aGUga2V5XG4vLyAgIGNvbnN0IGdldFVuaXF1ZVZhbHVlcyA9IChwcm9wZXJ0eToga2V5b2YgdHJhY2tUeXBlKSA9PiB7XG4vLyAgICAgcmV0dXJuIHBsYXlMaXN0XG4vLyAgICAgICA/IEFycmF5LmZyb20obmV3IFNldChwbGF5TGlzdC5tYXAoKHRyYWNrOiB0cmFja1R5cGUpID0+IHRyYWNrW3Byb3BlcnR5XSkpKVxuLy8gICAgICAgICAuZmlsdGVyKCh2YWx1ZSkgPT4gdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiICYmIHZhbHVlICE9PSBcIi1cIilcbi8vICAgICAgICAgLm1hcCgodmFsdWUpID0+IHZhbHVlIGFzIHN0cmluZylcbi8vICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGEubG9jYWxlQ29tcGFyZShiKSlcbi8vICAgICAgIDogW107XG4vLyAgIH07XG4vLyAgIC8vIGdldFVuaXF1ZVZhbHVlcyBmdW5jdGlvbiBhZGp1c3RlZCB0byBzb3J0IHJlbGVhc2VfZGF0ZSBwYXJhbXMgdG8gdW5pcXVlIHllYXJzXG4vLyAgIGNvbnN0IGdldFVuaXF1ZVllYXJzID0gKCkgPT4ge1xuLy8gICAgIHJldHVybiBwbGF5TGlzdFxuLy8gICAgICAgPyBBcnJheS5mcm9tKG5ldyBTZXQocGxheUxpc3QubWFwKCh0cmFjazogdHJhY2tUeXBlKSA9PiB0cmFjay5yZWxlYXNlX2RhdGUpKSlcbi8vICAgICAgICAgLmZpbHRlcigoZGF0ZSkgPT4gdHlwZW9mIGRhdGUgPT09IFwic3RyaW5nXCIgJiYgZGF0ZSAhPT0gXCItXCIpXG4vLyAgICAgICAgIC5tYXAoKGRhdGUpID0+IGRhdGUuc3BsaXQoXCItXCIpWzBdKVxuLy8gICAgICAgICAuZmlsdGVyKCh5ZWFyLCBpbmRleCwgc2VsZikgPT4gc2VsZi5pbmRleE9mKHllYXIpID09PSBpbmRleClcbi8vICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGEubG9jYWxlQ29tcGFyZShiKSlcbi8vICAgICAgIDogW107XG4vLyAgIH07XG4vLyAgIC8vIHVzZU1lbW9cbi8vICAgY29uc3QgbWVtb2l6ZWRHZXRVbmlxdWVWYWx1ZXMgPSB1c2VNZW1vKCgpID0+IHtcbi8vICAgICBpZiAoYWN0aXZlRmlsdGVyKSB7XG4vLyAgICAgICByZXR1cm4gZ2V0VW5pcXVlVmFsdWVzKGFjdGl2ZUZpbHRlcik7XG4vLyAgICAgfVxuLy8gICAgIHJldHVybiBbXTtcbi8vICAgfSwgW2FjdGl2ZUZpbHRlciwgcGxheUxpc3RdKTtcbi8vICAgY29uc3QgbWVtb2l6ZWRHZXRVbmlxdWVZZWFycyA9IHVzZU1lbW8oKCkgPT4ge1xuLy8gICAgIGlmIChhY3RpdmVGaWx0ZXIpIHtcbi8vICAgICAgIHJldHVybiBnZXRVbmlxdWVZZWFycygpO1xuLy8gICAgIH1cbi8vICAgICByZXR1cm4gW107XG4vLyAgIH0sIFthY3RpdmVGaWx0ZXIsIHBsYXlMaXN0XSk7XG5cbi8vICAgcmV0dXJuIChcbi8vICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMuY2VudGVyQmxvY2tGaWx0ZXIsIHN0eWxlcy5maWx0ZXIpfT5cbi8vICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmlsdGVyVGl0bGV9PlNlYXJjaCBmb3I6PC9kaXY+XG5cbi8vICAgICAgIDxGaWx0ZXJCbG9ja0l0ZW1cbi8vICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlRmlsdGVyQ2xpY2soXCJhdXRob3JcIil9XG4vLyAgICAgICAgIGlzT3BlbmVkPXthY3RpdmVGaWx0ZXIgPT09IFwiYXV0aG9yXCJ9XG4vLyAgICAgICAgIGxpc3Q9e21lbW9pemVkR2V0VW5pcXVlVmFsdWVzfVxuLy8gICAgICAgPlxuLy8gICAgICAgICBhcnRpc3Rcbi8vICAgICAgIDwvRmlsdGVyQmxvY2tJdGVtPlxuLy8gICAgICAgPEZpbHRlckJsb2NrSXRlbVxuLy8gICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVGaWx0ZXJDbGljayhcInJlbGVhc2VfZGF0ZVwiKX1cbi8vICAgICAgICAgaXNPcGVuZWQ9e2FjdGl2ZUZpbHRlciA9PT0gXCJyZWxlYXNlX2RhdGVcIn1cbi8vICAgICAgICAgbGlzdD17bWVtb2l6ZWRHZXRVbmlxdWVZZWFyc31cbi8vICAgICAgID5cbi8vICAgICAgICAgeWVhclxuLy8gICAgICAgPC9GaWx0ZXJCbG9ja0l0ZW0+XG4vLyAgICAgICA8RmlsdGVyQmxvY2tJdGVtXG4vLyAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUZpbHRlckNsaWNrKFwiZ2VucmVcIil9XG4vLyAgICAgICAgIGlzT3BlbmVkPXthY3RpdmVGaWx0ZXIgPT09IFwiZ2VucmVcIn1cbi8vICAgICAgICAgbGlzdD17bWVtb2l6ZWRHZXRVbmlxdWVWYWx1ZXN9XG4vLyAgICAgICA+XG4vLyAgICAgICAgIGdlbnJlXG4vLyAgICAgICA8L0ZpbHRlckJsb2NrSXRlbT5cblxuLy8gICAgIDwvZGl2PlxuLy8gICApO1xuLy8gfTtcblxuLy8gZXhwb3J0IGRlZmF1bHQgRmlsdGVyQmxvY2s7XG4iXSwibmFtZXMiOlsiY2xhc3NOYW1lcyIsInN0eWxlcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJGaWx0ZXJCbG9ja0l0ZW0iLCJ1c2VBcHBEaXNwYXRjaCIsInVzZUFwcFNlbGVjdG9yIiwiRmlsdGVyQmxvY2siLCJwbGF5TGlzdCIsInN0YXRlIiwidHJhY2tzIiwiZGlzcGF0Y2giLCJsb2NhbEFjdGl2ZUZpbHRlciIsInNldExvY2FsQWN0aXZlRmlsdGVyIiwiYXBwbHlGaWx0ZXIiLCJmaWx0ZXJUeXBlIiwidmFsdWUiLCJzZXRBY3RpdmVGaWx0ZXIiLCJmaWx0ZXJLZXkiLCJmaWx0ZXJWYWx1ZSIsImdldFVuaXF1ZVZhbHVlcyIsInByb3BlcnR5IiwiQXJyYXkiLCJmcm9tIiwiU2V0IiwibWFwIiwidHJhY2siLCJmaWx0ZXIiLCJzb3J0IiwiYSIsImIiLCJsb2NhbGVDb21wYXJlIiwidW5pcXVlQXV0aG9ycyIsInVuaXF1ZVllYXJzIiwidW5pcXVlR2VucmVzIiwiZGl2IiwiY2xhc3NOYW1lIiwiY2VudGVyQmxvY2tGaWx0ZXIiLCJmaWx0ZXJUaXRsZSIsIm9uQ2xpY2siLCJpc09wZW5lZCIsImxpc3QiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/FilterBlock/FilterBlock.tsx\n"));

/***/ })

});