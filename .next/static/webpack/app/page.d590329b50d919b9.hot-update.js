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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FilterBlock.module.css */ \"(app-pages-browser)/./src/components/FilterBlock/FilterBlock.module.css\");\n/* harmony import */ var _FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _FilterBlockItem_FilterBlockItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../FilterBlockItem/FilterBlockItem */ \"(app-pages-browser)/./src/components/FilterBlockItem/FilterBlockItem.tsx\");\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/hooks */ \"(app-pages-browser)/./src/hooks.ts\");\n/* harmony import */ var _store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/store/features/tracksSlice */ \"(app-pages-browser)/./src/store/features/tracksSlice.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n // Renaming setActiveFilter from tracksSlice\nconst FilterBlock = ()=>{\n    _s();\n    const playList = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useAppSelector)((state)=>state.tracks.playList);\n    const dispatch = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useAppDispatch)();\n    // Define active filters state\n    const [localActiveFilter, setLocalActiveFilter] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null); // Renamed to localActiveFilter\n    // Function to apply filter when a value is selected\n    const applyFilter = (filterType, value)=>{\n        discardFilters();\n        setLocalActiveFilter(null); // Close the pop-up window\n        // dispatch(setActiveFilter({ filterKey: filterType, filterValue: value })); // Dispatch action to set active filter\n        if (filterType === \"release_date\") {\n            const year = value ? value.split(\"-\")[0] : null;\n            const filteredTracks = getTracksByYear(year);\n        // Update the playlist with the filtered tracks\n        // For example, dispatch an action to set the filtered tracks in the Redux store\n        } else {\n            dispatch((0,_store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_5__.setActiveFilter)({\n                filterKey: filterType,\n                filterValue: value\n            }));\n        }\n    };\n    // Function to discard filters\n    const discardFilters = ()=>{\n        dispatch((0,_store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_5__.clearActiveFilters)());\n        setLocalActiveFilter(null);\n    };\n    // Get unique values for each filter type\n    const getUniqueValues = (property)=>{\n        return playList ? Array.from(new Set(playList.map((track)=>track[property]))).filter((value)=>typeof value === \"string\" && value !== \"-\").map((value)=>value).sort((a, b)=>a.localeCompare(b)) : [];\n    };\n    // getUniqueValues function adjusted to sort release_date params to unique years\n    const getUniqueYears = ()=>{\n        return playList ? Array.from(new Set(playList.map((track)=>track.release_date))).filter((date)=>typeof date === \"string\" && date !== \"-\").map((date)=>date.split(\"-\")[0]).filter((year, index, self)=>self.indexOf(year) === index).sort((a, b)=>a.localeCompare(b)) : [];\n    };\n    const getTracksByYear = (year)=>{\n        if (!year) return []; // Return an empty array if year is null or undefined\n        return playList.filter((track)=>{\n            // Check if the release_date exists and is in the format \"YYYY-MM-DD\"\n            if (track.release_date && /\\d{4}-\\d{2}-\\d{2}/.test(track.release_date)) {\n                const releaseYear = track.release_date.split(\"-\")[0];\n                return releaseYear === year;\n            }\n            return false; // If release_date doesn't exist or is not in the correct format, exclude the track\n        });\n    };\n    // get the lists of unique keys for the FilterBlockItems\n    const uniqueAuthors = getUniqueValues(\"author\");\n    // const uniqueYears = getUniqueValues('release_date');\n    const uniqueYears = getUniqueYears();\n    const uniqueGenres = getUniqueValues(\"genre\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().centerBlockFilter), (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().filter)),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().filterTitle),\n                children: \"Search for:\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 95,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterBlockItem_FilterBlockItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onClick: ()=>setLocalActiveFilter(localActiveFilter === \"author\" ? null : \"author\"),\n                isOpened: localActiveFilter === \"author\",\n                filterKey: localActiveFilter,\n                list: uniqueAuthors,\n                // applyFilter={() => applyFilter()}\n                applyFilter: (filterType, value)=>applyFilter(filterType, value),\n                children: \"Artist\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterBlockItem_FilterBlockItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onClick: ()=>setLocalActiveFilter(localActiveFilter === \"release_date\" ? null : \"release_date\"),\n                isOpened: localActiveFilter === \"release_date\",\n                filterKey: localActiveFilter,\n                list: uniqueYears,\n                applyFilter: (filterType, value)=>applyFilter(filterType, value),\n                children: \"Year\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 108,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterBlockItem_FilterBlockItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onClick: ()=>setLocalActiveFilter(localActiveFilter === \"genre\" ? null : \"genre\"),\n                isOpened: localActiveFilter === \"genre\",\n                filterKey: localActiveFilter,\n                list: uniqueGenres,\n                applyFilter: (filterType, value)=>applyFilter(filterType, value),\n                children: \"Genre\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 118,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: discardFilters,\n                children: \"Discard filters\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 128,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n        lineNumber: 94,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FilterBlock, \"fCtBLESseeI0yB9GCv9EcP7VZqQ=\", false, function() {\n    return [\n        _hooks__WEBPACK_IMPORTED_MODULE_4__.useAppSelector,\n        _hooks__WEBPACK_IMPORTED_MODULE_4__.useAppDispatch\n    ];\n});\n_c = FilterBlock;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FilterBlock); // \"use client\"\n // import classNames from \"classnames\";\n // import styles from \"./FilterBlock.module.css\";\n // import { useMemo, useState } from \"react\";\n // import FilterBlockItem from \"../FilterBlockItem/FilterBlockItem\";\n // import { useAppSelector } from \"@/hooks\";\n // import { trackType } from \"@/types/types\";\n // const FilterBlock = () => {\n //   // import playlist from API\n //   const playList = useAppSelector((state) => state.tracks.playList);\n //   // set filter\n //   const [activeFilter, setActiveFilter] = useState<keyof trackType | null>(null);\n //   // apply filter\n //   const handleFilterClick = (newFilter: keyof trackType) => {\n //     setActiveFilter((prev) => (newFilter === prev ? null : newFilter));\n //   };\n //   // returns unique values depenging on the key\n //   const getUniqueValues = (property: keyof trackType) => {\n //     return playList\n //       ? Array.from(new Set(playList.map((track: trackType) => track[property])))\n //         .filter((value) => typeof value === \"string\" && value !== \"-\")\n //         .map((value) => value as string)\n //         .sort((a, b) => a.localeCompare(b))\n //       : [];\n //   };\n //   // getUniqueValues function adjusted to sort release_date params to unique years\n //   const getUniqueYears = () => {\n //     return playList\n //       ? Array.from(new Set(playList.map((track: trackType) => track.release_date)))\n //         .filter((date) => typeof date === \"string\" && date !== \"-\")\n //         .map((date) => date.split(\"-\")[0])\n //         .filter((year, index, self) => self.indexOf(year) === index)\n //         .sort((a, b) => a.localeCompare(b))\n //       : [];\n //   };\n //   // useMemo\n //   const memoizedGetUniqueValues = useMemo(() => {\n //     if (activeFilter) {\n //       return getUniqueValues(activeFilter);\n //     }\n //     return [];\n //   }, [activeFilter, playList]);\n //   const memoizedGetUniqueYears = useMemo(() => {\n //     if (activeFilter) {\n //       return getUniqueYears();\n //     }\n //     return [];\n //   }, [activeFilter, playList]);\n //   return (\n //     <div className={classNames(styles.centerBlockFilter, styles.filter)}>\n //       <div className={styles.filterTitle}>Search for:</div>\n //       <FilterBlockItem\n //         onClick={() => handleFilterClick(\"author\")}\n //         isOpened={activeFilter === \"author\"}\n //         list={memoizedGetUniqueValues}\n //       >\n //         artist\n //       </FilterBlockItem>\n //       <FilterBlockItem\n //         onClick={() => handleFilterClick(\"release_date\")}\n //         isOpened={activeFilter === \"release_date\"}\n //         list={memoizedGetUniqueYears}\n //       >\n //         year\n //       </FilterBlockItem>\n //       <FilterBlockItem\n //         onClick={() => handleFilterClick(\"genre\")}\n //         isOpened={activeFilter === \"genre\"}\n //         list={memoizedGetUniqueValues}\n //       >\n //         genre\n //       </FilterBlockItem>\n //     </div>\n //   );\n // };\n // export default FilterBlock;\nvar _c;\n$RefreshReg$(_c, \"FilterBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0ZpbHRlckJsb2NrL0ZpbHRlckJsb2NrLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRW9DO0FBQ1U7QUFDTjtBQUN5QjtBQUNSO0FBRTBCLENBQUMsNENBQTRDO0FBRWhJLE1BQU1TLGNBQWM7O0lBQ2xCLE1BQU1DLFdBQVdKLHNEQUFjQSxDQUFDLENBQUNLLFFBQVVBLE1BQU1DLE1BQU0sQ0FBQ0YsUUFBUTtJQUNoRSxNQUFNRyxXQUFXUixzREFBY0E7SUFFL0IsOEJBQThCO0lBQzlCLE1BQU0sQ0FBQ1MsbUJBQW1CQyxxQkFBcUIsR0FBR1osK0NBQVFBLENBQXlCLE9BQU8sK0JBQStCO0lBRXpILG9EQUFvRDtJQUNwRCxNQUFNYSxjQUFjLENBQUNDLFlBQTZCQztRQUNoREM7UUFDQUoscUJBQXFCLE9BQU8sMEJBQTBCO1FBR3RELG9IQUFvSDtRQUlwSCxJQUFJRSxlQUFlLGdCQUFnQjtZQUNqQyxNQUFNRyxPQUFPRixRQUFRQSxNQUFNRyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRztZQUMzQyxNQUFNQyxpQkFBaUJDLGdCQUFnQkg7UUFDdkMsK0NBQStDO1FBQy9DLGdGQUFnRjtRQUNwRixPQUFPO1lBQ0hQLFNBQVNMLDRFQUFlQSxDQUFDO2dCQUFFZ0IsV0FBV1A7Z0JBQVlRLGFBQWFQO1lBQU07UUFDekU7SUFDQTtJQU9BLDhCQUE4QjtJQUM5QixNQUFNQyxpQkFBaUI7UUFDckJOLFNBQVNOLCtFQUFrQkE7UUFDM0JRLHFCQUFxQjtJQUN2QjtJQUVBLHlDQUF5QztJQUN6QyxNQUFNVyxrQkFBa0IsQ0FBQ0M7UUFDbkIsT0FBT2pCLFdBQ0hrQixNQUFNQyxJQUFJLENBQUMsSUFBSUMsSUFBSXBCLFNBQVNxQixHQUFHLENBQUMsQ0FBQ0MsUUFBcUJBLEtBQUssQ0FBQ0wsU0FBUyxJQUNwRU0sTUFBTSxDQUFDLENBQUNmLFFBQVUsT0FBT0EsVUFBVSxZQUFZQSxVQUFVLEtB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QUFnRTtDQUNoRSwwRUFBMEU7Q0FDMUUsT0FBTztDQUVQLGtEQUFrRDtDQUNsRCw2REFBNkQ7Q0FDN0Qsc0JBQXNCO0NBQ3RCLG1GQUFtRjtDQUNuRix5RUFBeUU7Q0FDekUsMkNBQTJDO0NBQzNDLDhDQUE4QztDQUM5QyxjQUFjO0NBQ2QsT0FBTztDQUNQLHFGQUFxRjtDQUNyRixtQ0FBbUM7Q0FDbkMsc0JBQXNCO0NBQ3RCLHNGQUFzRjtDQUN0RixzRUFBc0U7Q0FDdEUsNkNBQTZDO0NBQzdDLHVFQUF1RTtDQUN2RSw4Q0FBOEM7Q0FDOUMsY0FBYztDQUNkLE9BQU87Q0FDUCxlQUFlO0NBQ2Ysb0RBQW9EO0NBQ3BELDBCQUEwQjtDQUMxQiw4Q0FBOEM7Q0FDOUMsUUFBUTtDQUNSLGlCQUFpQjtDQUNqQixrQ0FBa0M7Q0FDbEMsbURBQW1EO0NBQ25ELDBCQUEwQjtDQUMxQixpQ0FBaUM7Q0FDakMsUUFBUTtDQUNSLGlCQUFpQjtDQUNqQixrQ0FBa0M7Q0FFbEMsYUFBYTtDQUNiLDRFQUE0RTtDQUM1RSw4REFBOEQ7Q0FFOUQseUJBQXlCO0NBQ3pCLHNEQUFzRDtDQUN0RCwrQ0FBK0M7Q0FDL0MseUNBQXlDO0NBQ3pDLFVBQVU7Q0FDVixpQkFBaUI7Q0FDakIsMkJBQTJCO0NBQzNCLHlCQUF5QjtDQUN6Qiw0REFBNEQ7Q0FDNUQscURBQXFEO0NBQ3JELHdDQUF3QztDQUN4QyxVQUFVO0NBQ1YsZUFBZTtDQUNmLDJCQUEyQjtDQUMzQix5QkFBeUI7Q0FDekIscURBQXFEO0NBQ3JELDhDQUE4QztDQUM5Qyx5Q0FBeUM7Q0FDekMsVUFBVTtDQUNWLGdCQUFnQjtDQUNoQiwyQkFBMkI7Q0FFM0IsYUFBYTtDQUNiLE9BQU87Q0FDUCxLQUFLO0NBRUwsOEJBQThCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0ZpbHRlckJsb2NrL0ZpbHRlckJsb2NrLnRzeD9iNTZjIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5cbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0ZpbHRlckJsb2NrLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGaWx0ZXJCbG9ja0l0ZW0gZnJvbSAnLi4vRmlsdGVyQmxvY2tJdGVtL0ZpbHRlckJsb2NrSXRlbSc7XG5pbXBvcnQgeyB1c2VBcHBEaXNwYXRjaCwgdXNlQXBwU2VsZWN0b3IgfSBmcm9tICdAL2hvb2tzJztcbmltcG9ydCB7IHRyYWNrVHlwZSB9IGZyb20gJ0AvdHlwZXMvdHlwZXMnO1xuaW1wb3J0IHsgY2xlYXJBY3RpdmVGaWx0ZXJzLCBzZXRBY3RpdmVGaWx0ZXIgfSBmcm9tICdAL3N0b3JlL2ZlYXR1cmVzL3RyYWNrc1NsaWNlJzsgLy8gUmVuYW1pbmcgc2V0QWN0aXZlRmlsdGVyIGZyb20gdHJhY2tzU2xpY2VcblxuY29uc3QgRmlsdGVyQmxvY2sgPSAoKSA9PiB7XG4gIGNvbnN0IHBsYXlMaXN0ID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS50cmFja3MucGxheUxpc3QpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKCk7XG5cbiAgLy8gRGVmaW5lIGFjdGl2ZSBmaWx0ZXJzIHN0YXRlXG4gIGNvbnN0IFtsb2NhbEFjdGl2ZUZpbHRlciwgc2V0TG9jYWxBY3RpdmVGaWx0ZXJdID0gdXNlU3RhdGU8a2V5b2YgdHJhY2tUeXBlIHwgbnVsbD4obnVsbCk7IC8vIFJlbmFtZWQgdG8gbG9jYWxBY3RpdmVGaWx0ZXJcblxuICAvLyBGdW5jdGlvbiB0byBhcHBseSBmaWx0ZXIgd2hlbiBhIHZhbHVlIGlzIHNlbGVjdGVkXG4gIGNvbnN0IGFwcGx5RmlsdGVyID0gKGZpbHRlclR5cGU6IGtleW9mIHRyYWNrVHlwZSwgdmFsdWU6IHN0cmluZyB8IG51bGwpID0+IHtcbiAgICBkaXNjYXJkRmlsdGVycygpO1xuICAgIHNldExvY2FsQWN0aXZlRmlsdGVyKG51bGwpOyAvLyBDbG9zZSB0aGUgcG9wLXVwIHdpbmRvd1xuXG5cbiAgICAvLyBkaXNwYXRjaChzZXRBY3RpdmVGaWx0ZXIoeyBmaWx0ZXJLZXk6IGZpbHRlclR5cGUsIGZpbHRlclZhbHVlOiB2YWx1ZSB9KSk7IC8vIERpc3BhdGNoIGFjdGlvbiB0byBzZXQgYWN0aXZlIGZpbHRlclxuICAgIFxuICAgIFxuICAgIFxuICAgIGlmIChmaWx0ZXJUeXBlID09PSAncmVsZWFzZV9kYXRlJykge1xuICAgICAgY29uc3QgeWVhciA9IHZhbHVlID8gdmFsdWUuc3BsaXQoXCItXCIpWzBdIDogbnVsbDtcbiAgICAgIGNvbnN0IGZpbHRlcmVkVHJhY2tzID0gZ2V0VHJhY2tzQnlZZWFyKHllYXIpO1xuICAgICAgLy8gVXBkYXRlIHRoZSBwbGF5bGlzdCB3aXRoIHRoZSBmaWx0ZXJlZCB0cmFja3NcbiAgICAgIC8vIEZvciBleGFtcGxlLCBkaXNwYXRjaCBhbiBhY3Rpb24gdG8gc2V0IHRoZSBmaWx0ZXJlZCB0cmFja3MgaW4gdGhlIFJlZHV4IHN0b3JlXG4gIH0gZWxzZSB7XG4gICAgICBkaXNwYXRjaChzZXRBY3RpdmVGaWx0ZXIoeyBmaWx0ZXJLZXk6IGZpbHRlclR5cGUsIGZpbHRlclZhbHVlOiB2YWx1ZSB9KSk7XG4gIH1cbiAgfTtcblxuXG5cblxuXG5cbiAgLy8gRnVuY3Rpb24gdG8gZGlzY2FyZCBmaWx0ZXJzXG4gIGNvbnN0IGRpc2NhcmRGaWx0ZXJzID0gKCkgPT4ge1xuICAgIGRpc3BhdGNoKGNsZWFyQWN0aXZlRmlsdGVycygpKTtcbiAgICBzZXRMb2NhbEFjdGl2ZUZpbHRlcihudWxsKTtcbiAgfTtcblxuICAvLyBHZXQgdW5pcXVlIHZhbHVlcyBmb3IgZWFjaCBmaWx0ZXIgdHlwZVxuICBjb25zdCBnZXRVbmlxdWVWYWx1ZXMgPSAocHJvcGVydHk6IGtleW9mIHRyYWNrVHlwZSkgPT4ge1xuICAgICAgICByZXR1cm4gcGxheUxpc3RcbiAgICAgICAgICA/IEFycmF5LmZyb20obmV3IFNldChwbGF5TGlzdC5tYXAoKHRyYWNrOiB0cmFja1R5cGUpID0+IHRyYWNrW3Byb3BlcnR5XSkpKVxuICAgICAgICAgICAgLmZpbHRlcigodmFsdWUpID0+IHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiAmJiB2YWx1ZSAhPT0gXCItXCIpXG4gICAgICAgICAgICAubWFwKCh2YWx1ZSkgPT4gdmFsdWUgYXMgc3RyaW5nKVxuICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGEubG9jYWxlQ29tcGFyZShiKSlcbiAgICAgICAgICA6IFtdO1xuICB9O1xuXG5cblxuXG4gIC8vIGdldFVuaXF1ZVZhbHVlcyBmdW5jdGlvbiBhZGp1c3RlZCB0byBzb3J0IHJlbGVhc2VfZGF0ZSBwYXJhbXMgdG8gdW5pcXVlIHllYXJzXG4gIGNvbnN0IGdldFVuaXF1ZVllYXJzID0gKCkgPT4ge1xuICAgIHJldHVybiBwbGF5TGlzdFxuICAgICAgPyBBcnJheS5mcm9tKG5ldyBTZXQocGxheUxpc3QubWFwKCh0cmFjazogdHJhY2tUeXBlKSA9PiB0cmFjay5yZWxlYXNlX2RhdGUpKSlcbiAgICAgICAgLmZpbHRlcigoZGF0ZSkgPT4gdHlwZW9mIGRhdGUgPT09IFwic3RyaW5nXCIgJiYgZGF0ZSAhPT0gXCItXCIpXG4gICAgICAgIC5tYXAoKGRhdGUpID0+IGRhdGUuc3BsaXQoXCItXCIpWzBdKVxuICAgICAgICAuZmlsdGVyKCh5ZWFyLCBpbmRleCwgc2VsZikgPT4gc2VsZi5pbmRleE9mKHllYXIpID09PSBpbmRleClcbiAgICAgICAgLnNvcnQoKGEsIGIpID0+IGEubG9jYWxlQ29tcGFyZShiKSlcbiAgICAgIDogW107XG4gIH07XG4gIGNvbnN0IGdldFRyYWNrc0J5WWVhciA9ICh5ZWFyOiBzdHJpbmcgfCBudWxsKSA9PiB7XG4gICAgaWYgKCF5ZWFyKSByZXR1cm4gW107IC8vIFJldHVybiBhbiBlbXB0eSBhcnJheSBpZiB5ZWFyIGlzIG51bGwgb3IgdW5kZWZpbmVkXG4gICAgcmV0dXJuIHBsYXlMaXN0LmZpbHRlcigodHJhY2s6IHRyYWNrVHlwZSkgPT4ge1xuICAgICAgICAvLyBDaGVjayBpZiB0aGUgcmVsZWFzZV9kYXRlIGV4aXN0cyBhbmQgaXMgaW4gdGhlIGZvcm1hdCBcIllZWVktTU0tRERcIlxuICAgICAgICBpZiAodHJhY2sucmVsZWFzZV9kYXRlICYmIC9cXGR7NH0tXFxkezJ9LVxcZHsyfS8udGVzdCh0cmFjay5yZWxlYXNlX2RhdGUpKSB7XG4gICAgICAgICAgICBjb25zdCByZWxlYXNlWWVhciA9IHRyYWNrLnJlbGVhc2VfZGF0ZS5zcGxpdChcIi1cIilbMF07XG4gICAgICAgICAgICByZXR1cm4gcmVsZWFzZVllYXIgPT09IHllYXI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBJZiByZWxlYXNlX2RhdGUgZG9lc24ndCBleGlzdCBvciBpcyBub3QgaW4gdGhlIGNvcnJlY3QgZm9ybWF0LCBleGNsdWRlIHRoZSB0cmFja1xuICAgIH0pO1xuICB9O1xuXG5cblxuXG4gIC8vIGdldCB0aGUgbGlzdHMgb2YgdW5pcXVlIGtleXMgZm9yIHRoZSBGaWx0ZXJCbG9ja0l0ZW1zXG4gIGNvbnN0IHVuaXF1ZUF1dGhvcnMgPSBnZXRVbmlxdWVWYWx1ZXMoJ2F1dGhvcicpO1xuICAvLyBjb25zdCB1bmlxdWVZZWFycyA9IGdldFVuaXF1ZVZhbHVlcygncmVsZWFzZV9kYXRlJyk7XG4gIGNvbnN0IHVuaXF1ZVllYXJzID0gZ2V0VW5pcXVlWWVhcnMoKTtcbiAgY29uc3QgdW5pcXVlR2VucmVzID0gZ2V0VW5pcXVlVmFsdWVzKCdnZW5yZScpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLmNlbnRlckJsb2NrRmlsdGVyLCBzdHlsZXMuZmlsdGVyKX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZpbHRlclRpdGxlfT5TZWFyY2ggZm9yOjwvZGl2PlxuXG4gICAgICA8RmlsdGVyQmxvY2tJdGVtXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldExvY2FsQWN0aXZlRmlsdGVyKGxvY2FsQWN0aXZlRmlsdGVyID09PSAnYXV0aG9yJyA/IG51bGwgOiAnYXV0aG9yJyl9IC8vIFRvZ2dsZSBpc09wZW5lZCBvbiBjbGlja1xuICAgICAgICBpc09wZW5lZD17bG9jYWxBY3RpdmVGaWx0ZXIgPT09ICdhdXRob3InfSAvLyBDaGVjayBpZiB0aGUgZmlsdGVyIGlzIG9wZW5cbiAgICAgICAgZmlsdGVyS2V5PXtsb2NhbEFjdGl2ZUZpbHRlcn1cbiAgICAgICAgbGlzdD17dW5pcXVlQXV0aG9yc31cbiAgICAgICAgLy8gYXBwbHlGaWx0ZXI9eygpID0+IGFwcGx5RmlsdGVyKCl9XG4gICAgICAgIGFwcGx5RmlsdGVyPXsoZmlsdGVyVHlwZSwgdmFsdWUpID0+IGFwcGx5RmlsdGVyKGZpbHRlclR5cGUsIHZhbHVlKX1cbiAgICAgICAgPlxuICAgICAgICBBcnRpc3RcbiAgICAgIDwvRmlsdGVyQmxvY2tJdGVtPlxuXG4gICAgICA8RmlsdGVyQmxvY2tJdGVtXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldExvY2FsQWN0aXZlRmlsdGVyKGxvY2FsQWN0aXZlRmlsdGVyID09PSAncmVsZWFzZV9kYXRlJyA/IG51bGwgOiAncmVsZWFzZV9kYXRlJyl9XG4gICAgICAgIGlzT3BlbmVkPXtsb2NhbEFjdGl2ZUZpbHRlciA9PT0gJ3JlbGVhc2VfZGF0ZSd9XG4gICAgICAgIGZpbHRlcktleT17bG9jYWxBY3RpdmVGaWx0ZXJ9XG4gICAgICAgIGxpc3Q9e3VuaXF1ZVllYXJzfVxuICAgICAgICBhcHBseUZpbHRlcj17KGZpbHRlclR5cGUsIHZhbHVlKSA9PiBhcHBseUZpbHRlcihmaWx0ZXJUeXBlLCB2YWx1ZSl9XG4gICAgICA+XG4gICAgICAgIFllYXJcbiAgICAgIDwvRmlsdGVyQmxvY2tJdGVtPlxuXG4gICAgICA8RmlsdGVyQmxvY2tJdGVtXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldExvY2FsQWN0aXZlRmlsdGVyKGxvY2FsQWN0aXZlRmlsdGVyID09PSAnZ2VucmUnID8gbnVsbCA6ICdnZW5yZScpfVxuICAgICAgICBpc09wZW5lZD17bG9jYWxBY3RpdmVGaWx0ZXIgPT09ICdnZW5yZSd9XG4gICAgICAgIGZpbHRlcktleT17bG9jYWxBY3RpdmVGaWx0ZXJ9XG4gICAgICAgIGxpc3Q9e3VuaXF1ZUdlbnJlc31cbiAgICAgICAgYXBwbHlGaWx0ZXI9eyhmaWx0ZXJUeXBlLCB2YWx1ZSkgPT4gYXBwbHlGaWx0ZXIoZmlsdGVyVHlwZSwgdmFsdWUpfVxuICAgICAgICA+XG4gICAgICAgIEdlbnJlXG4gICAgICA8L0ZpbHRlckJsb2NrSXRlbT5cbiAgICAgIFxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtkaXNjYXJkRmlsdGVyc30+XG4gICAgICAgIERpc2NhcmQgZmlsdGVyc1xuICAgICAgPC9idXR0b24+XG5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZpbHRlckJsb2NrO1xuXG4vLyBcInVzZSBjbGllbnRcIlxuXG4vLyBpbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuLy8gaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9GaWx0ZXJCbG9jay5tb2R1bGUuY3NzXCI7XG4vLyBpbXBvcnQgeyB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IEZpbHRlckJsb2NrSXRlbSBmcm9tIFwiLi4vRmlsdGVyQmxvY2tJdGVtL0ZpbHRlckJsb2NrSXRlbVwiO1xuLy8gaW1wb3J0IHsgdXNlQXBwU2VsZWN0b3IgfSBmcm9tIFwiQC9ob29rc1wiO1xuLy8gaW1wb3J0IHsgdHJhY2tUeXBlIH0gZnJvbSBcIkAvdHlwZXMvdHlwZXNcIjtcblxuLy8gY29uc3QgRmlsdGVyQmxvY2sgPSAoKSA9PiB7XG4vLyAgIC8vIGltcG9ydCBwbGF5bGlzdCBmcm9tIEFQSVxuLy8gICBjb25zdCBwbGF5TGlzdCA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudHJhY2tzLnBsYXlMaXN0KTtcbiAgXG4vLyAgIC8vIHNldCBmaWx0ZXJcbi8vICAgY29uc3QgW2FjdGl2ZUZpbHRlciwgc2V0QWN0aXZlRmlsdGVyXSA9IHVzZVN0YXRlPGtleW9mIHRyYWNrVHlwZSB8IG51bGw+KG51bGwpO1xuLy8gICAvLyBhcHBseSBmaWx0ZXJcbi8vICAgY29uc3QgaGFuZGxlRmlsdGVyQ2xpY2sgPSAobmV3RmlsdGVyOiBrZXlvZiB0cmFja1R5cGUpID0+IHtcbi8vICAgICBzZXRBY3RpdmVGaWx0ZXIoKHByZXYpID0+IChuZXdGaWx0ZXIgPT09IHByZXYgPyBudWxsIDogbmV3RmlsdGVyKSk7XG4vLyAgIH07XG4gIFxuLy8gICAvLyByZXR1cm5zIHVuaXF1ZSB2YWx1ZXMgZGVwZW5naW5nIG9uIHRoZSBrZXlcbi8vICAgY29uc3QgZ2V0VW5pcXVlVmFsdWVzID0gKHByb3BlcnR5OiBrZXlvZiB0cmFja1R5cGUpID0+IHtcbi8vICAgICByZXR1cm4gcGxheUxpc3Rcbi8vICAgICAgID8gQXJyYXkuZnJvbShuZXcgU2V0KHBsYXlMaXN0Lm1hcCgodHJhY2s6IHRyYWNrVHlwZSkgPT4gdHJhY2tbcHJvcGVydHldKSkpXG4vLyAgICAgICAgIC5maWx0ZXIoKHZhbHVlKSA9PiB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgJiYgdmFsdWUgIT09IFwiLVwiKVxuLy8gICAgICAgICAubWFwKCh2YWx1ZSkgPT4gdmFsdWUgYXMgc3RyaW5nKVxuLy8gICAgICAgICAuc29ydCgoYSwgYikgPT4gYS5sb2NhbGVDb21wYXJlKGIpKVxuLy8gICAgICAgOiBbXTtcbi8vICAgfTtcbi8vICAgLy8gZ2V0VW5pcXVlVmFsdWVzIGZ1bmN0aW9uIGFkanVzdGVkIHRvIHNvcnQgcmVsZWFzZV9kYXRlIHBhcmFtcyB0byB1bmlxdWUgeWVhcnNcbi8vICAgY29uc3QgZ2V0VW5pcXVlWWVhcnMgPSAoKSA9PiB7XG4vLyAgICAgcmV0dXJuIHBsYXlMaXN0XG4vLyAgICAgICA/IEFycmF5LmZyb20obmV3IFNldChwbGF5TGlzdC5tYXAoKHRyYWNrOiB0cmFja1R5cGUpID0+IHRyYWNrLnJlbGVhc2VfZGF0ZSkpKVxuLy8gICAgICAgICAuZmlsdGVyKChkYXRlKSA9PiB0eXBlb2YgZGF0ZSA9PT0gXCJzdHJpbmdcIiAmJiBkYXRlICE9PSBcIi1cIilcbi8vICAgICAgICAgLm1hcCgoZGF0ZSkgPT4gZGF0ZS5zcGxpdChcIi1cIilbMF0pXG4vLyAgICAgICAgIC5maWx0ZXIoKHllYXIsIGluZGV4LCBzZWxmKSA9PiBzZWxmLmluZGV4T2YoeWVhcikgPT09IGluZGV4KVxuLy8gICAgICAgICAuc29ydCgoYSwgYikgPT4gYS5sb2NhbGVDb21wYXJlKGIpKVxuLy8gICAgICAgOiBbXTtcbi8vICAgfTtcbi8vICAgLy8gdXNlTWVtb1xuLy8gICBjb25zdCBtZW1vaXplZEdldFVuaXF1ZVZhbHVlcyA9IHVzZU1lbW8oKCkgPT4ge1xuLy8gICAgIGlmIChhY3RpdmVGaWx0ZXIpIHtcbi8vICAgICAgIHJldHVybiBnZXRVbmlxdWVWYWx1ZXMoYWN0aXZlRmlsdGVyKTtcbi8vICAgICB9XG4vLyAgICAgcmV0dXJuIFtdO1xuLy8gICB9LCBbYWN0aXZlRmlsdGVyLCBwbGF5TGlzdF0pO1xuLy8gICBjb25zdCBtZW1vaXplZEdldFVuaXF1ZVllYXJzID0gdXNlTWVtbygoKSA9PiB7XG4vLyAgICAgaWYgKGFjdGl2ZUZpbHRlcikge1xuLy8gICAgICAgcmV0dXJuIGdldFVuaXF1ZVllYXJzKCk7XG4vLyAgICAgfVxuLy8gICAgIHJldHVybiBbXTtcbi8vICAgfSwgW2FjdGl2ZUZpbHRlciwgcGxheUxpc3RdKTtcblxuLy8gICByZXR1cm4gKFxuLy8gICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5jZW50ZXJCbG9ja0ZpbHRlciwgc3R5bGVzLmZpbHRlcil9PlxuLy8gICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5maWx0ZXJUaXRsZX0+U2VhcmNoIGZvcjo8L2Rpdj5cblxuLy8gICAgICAgPEZpbHRlckJsb2NrSXRlbVxuLy8gICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVGaWx0ZXJDbGljayhcImF1dGhvclwiKX1cbi8vICAgICAgICAgaXNPcGVuZWQ9e2FjdGl2ZUZpbHRlciA9PT0gXCJhdXRob3JcIn1cbi8vICAgICAgICAgbGlzdD17bWVtb2l6ZWRHZXRVbmlxdWVWYWx1ZXN9XG4vLyAgICAgICA+XG4vLyAgICAgICAgIGFydGlzdFxuLy8gICAgICAgPC9GaWx0ZXJCbG9ja0l0ZW0+XG4vLyAgICAgICA8RmlsdGVyQmxvY2tJdGVtXG4vLyAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUZpbHRlckNsaWNrKFwicmVsZWFzZV9kYXRlXCIpfVxuLy8gICAgICAgICBpc09wZW5lZD17YWN0aXZlRmlsdGVyID09PSBcInJlbGVhc2VfZGF0ZVwifVxuLy8gICAgICAgICBsaXN0PXttZW1vaXplZEdldFVuaXF1ZVllYXJzfVxuLy8gICAgICAgPlxuLy8gICAgICAgICB5ZWFyXG4vLyAgICAgICA8L0ZpbHRlckJsb2NrSXRlbT5cbi8vICAgICAgIDxGaWx0ZXJCbG9ja0l0ZW1cbi8vICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlRmlsdGVyQ2xpY2soXCJnZW5yZVwiKX1cbi8vICAgICAgICAgaXNPcGVuZWQ9e2FjdGl2ZUZpbHRlciA9PT0gXCJnZW5yZVwifVxuLy8gICAgICAgICBsaXN0PXttZW1vaXplZEdldFVuaXF1ZVZhbHVlc31cbi8vICAgICAgID5cbi8vICAgICAgICAgZ2VucmVcbi8vICAgICAgIDwvRmlsdGVyQmxvY2tJdGVtPlxuXG4vLyAgICAgPC9kaXY+XG4vLyAgICk7XG4vLyB9O1xuXG4vLyBleHBvcnQgZGVmYXVsdCBGaWx0ZXJCbG9jaztcbiJdLCJuYW1lcyI6WyJjbGFzc05hbWVzIiwic3R5bGVzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIkZpbHRlckJsb2NrSXRlbSIsInVzZUFwcERpc3BhdGNoIiwidXNlQXBwU2VsZWN0b3IiLCJjbGVhckFjdGl2ZUZpbHRlcnMiLCJzZXRBY3RpdmVGaWx0ZXIiLCJGaWx0ZXJCbG9jayIsInBsYXlMaXN0Iiwic3RhdGUiLCJ0cmFja3MiLCJkaXNwYXRjaCIsImxvY2FsQWN0aXZlRmlsdGVyIiwic2V0TG9jYWxBY3RpdmVGaWx0ZXIiLCJhcHBseUZpbHRlciIsImZpbHRlclR5cGUiLCJ2YWx1ZSIsImRpc2NhcmRGaWx0ZXJzIiwieWVhciIsInNwbGl0IiwiZmlsdGVyZWRUcmFja3MiLCJnZXRUcmFja3NCeVllYXIiLCJmaWx0ZXJLZXkiLCJmaWx0ZXJWYWx1ZSIsImdldFVuaXF1ZVZhbHVlcyIsInByb3BlcnR5IiwiQXJyYXkiLCJmcm9tIiwiU2V0IiwibWFwIiwidHJhY2siLCJmaWx0ZXIiLCJzb3J0IiwiYSIsImIiLCJsb2NhbGVDb21wYXJlIiwiZ2V0VW5pcXVlWWVhcnMiLCJyZWxlYXNlX2RhdGUiLCJkYXRlIiwiaW5kZXgiLCJzZWxmIiwiaW5kZXhPZiIsInRlc3QiLCJyZWxlYXNlWWVhciIsInVuaXF1ZUF1dGhvcnMiLCJ1bmlxdWVZZWFycyIsInVuaXF1ZUdlbnJlcyIsImRpdiIsImNsYXNzTmFtZSIsImNlbnRlckJsb2NrRmlsdGVyIiwiZmlsdGVyVGl0bGUiLCJvbkNsaWNrIiwiaXNPcGVuZWQiLCJsaXN0IiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/FilterBlock/FilterBlock.tsx\n"));

/***/ })

});