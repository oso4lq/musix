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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FilterBlock.module.css */ \"(app-pages-browser)/./src/components/FilterBlock/FilterBlock.module.css\");\n/* harmony import */ var _FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _contexts_tracks_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/contexts/tracks-context */ \"(app-pages-browser)/./src/contexts/tracks-context.tsx\");\n/* harmony import */ var _FilterBlockItem_FilterBlockItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../FilterBlockItem/FilterBlockItem */ \"(app-pages-browser)/./src/components/FilterBlockItem/FilterBlockItem.tsx\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data */ \"(app-pages-browser)/./src/components/FilterBlock/data.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst FilterBlock = ()=>{\n    _s();\n    const { tracks } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_tracks_context__WEBPACK_IMPORTED_MODULE_3__.TracksContext);\n    const [activeFilter, setActiveFilter] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const handleFilterClick = (newFilter)=>{\n        setActiveFilter((prev)=>newFilter === prev ? null : newFilter);\n    };\n    {}\n    // const [isArtistOpened, setIsArtistOpened] = useState(false);\n    // const [uniqueArtistsCount, setUniqueArtistsCount] = useState(0);\n    const uniqueArtists = tracks ? Array.from(new Set(tracks.map((track)=>track.author))).filter((author)=>author && author !== \"-\").sort((a, b)=>a && b ? a.localeCompare(b) : 0) : [];\n    // const countUniqueArtists = () => {\n    //   if (tracks) {\n    //     setUniqueArtistsCount(uniqueArtists.length);\n    //   }\n    //   return 0;\n    // };\n    // const toggleArtist = () => {\n    //   countUniqueArtists();\n    //   setIsDateOpened(false);\n    //   setIsGenreOpened(false);\n    //   setIsArtistOpened((prevState) => !prevState);\n    // };\n    {}\n    // const [isDateOpened, setIsDateOpened] = useState(false);\n    // const [uniqueDatesCount, setUniqueDatesCount] = useState(0);\n    const uniqueDates = tracks ? Array.from(new Set(tracks.map((track)=>track.release_date))).filter((release_date)=>release_date !== \"-\").sort((a, b)=>a && b ? a.localeCompare(b) : 0) : [];\n    // const countUniqueDates = () => {\n    //   if (tracks) {\n    //     setUniqueDatesCount(uniqueDates.length);\n    //   }\n    //   return 0;\n    // };\n    // const toggleDate = () => {\n    //   countUniqueDates();\n    //   setIsArtistOpened(false);\n    //   setIsGenreOpened(false);\n    //   setIsDateOpened((prevState) => !prevState);\n    // };\n    {}\n    // const [isGenreOpened, setIsGenreOpened] = useState(false);\n    // const [uniqueGenresCount, setUniqueGenresCount] = useState(0);\n    const uniqueGenres = tracks ? Array.from(new Set(tracks.map((track)=>track.genre))).filter((genre)=>genre !== \"-\").sort((a, b)=>a && b ? a.localeCompare(b) : 0) : [];\n    // const countUniqueGenres = () => {\n    //   if (tracks) {\n    //     setUniqueGenresCount(uniqueGenres.length);\n    //   }\n    //   return 0;\n    // };\n    // const toggleGenre = () => {\n    //   countUniqueGenres();\n    //   setIsArtistOpened(false);\n    //   setIsDateOpened(false);\n    //   setIsGenreOpened((prevState) => !prevState);\n    // };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().centerBlockFilter), (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().filter)),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().filterTitle),\n                children: \"Search for:\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterBlockItem_FilterBlockItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                onClick: ()=>handleFilterClick(\"artists\"),\n                isOpened: activeFilter === \"artists\",\n                list: _data__WEBPACK_IMPORTED_MODULE_5__.artists,\n                children: \"artist\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterBlockItem_FilterBlockItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                onClick: ()=>handleFilterClick(\"years\"),\n                isOpened: activeFilter === \"years\",\n                list: _data__WEBPACK_IMPORTED_MODULE_5__.years,\n                children: \"year\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterBlockItem_FilterBlockItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                onClick: ()=>handleFilterClick(\"genres\"),\n                isOpened: activeFilter === \"genres\",\n                list: ge,\n                children: \"genre\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n        lineNumber: 82,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FilterBlock, \"wPDriRIRj+xTEut9x+9qOFDBago=\");\n_c = FilterBlock;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FilterBlock);\nvar _c;\n$RefreshReg$(_c, \"FilterBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0ZpbHRlckJsb2NrL0ZpbHRlckJsb2NrLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQThDO0FBQ1Y7QUFDUztBQUNhO0FBRU87QUFDekI7QUFFeEMsTUFBTVEsY0FBd0I7O0lBRTVCLE1BQU0sRUFBRUMsTUFBTSxFQUFFLEdBQUdQLGlEQUFVQSxDQUFDRSxtRUFBYUE7SUFFM0MsTUFBTSxDQUFDTSxjQUFjQyxnQkFBZ0IsR0FBR1IsK0NBQVFBLENBQWdCO0lBQ2hFLE1BQU1TLG9CQUFvQixDQUFDQztRQUN6QkYsZ0JBQWdCLENBQUNHLE9BQVNELGNBQWNDLE9BQU8sT0FBT0Q7SUFDeEQ7SUFFQSxDQUFjO0lBQ2QsK0RBQStEO0lBQy9ELG1FQUFtRTtJQUNuRSxNQUFNRSxnQkFBZ0JOLFNBQ2xCTyxNQUFNQyxJQUFJLENBQUMsSUFBSUMsSUFBSVQsT0FBT1UsR0FBRyxDQUFDLENBQUNDLFFBQWlCQSxNQUFNQyxNQUFNLElBQzNEQyxNQUFNLENBQUMsQ0FBQ0QsU0FBV0EsVUFBVUEsV0FBVyxLQUN4Q0UsSUFBSSxDQUFDLENBQUNDLEdBQUdDLElBQU9ELEtBQUtDLElBQUlELEVBQUVFLGFBQWEsQ0FBQ0QsS0FBSyxLQUMvQyxFQUFFO0lBQ04scUNBQXFDO0lBQ3JDLGtCQUFrQjtJQUNsQixtREFBbUQ7SUFDbkQsTUFBTTtJQUNOLGNBQWM7SUFDZCxLQUFLO0lBQ0wsK0JBQStCO0lBQy9CLDBCQUEwQjtJQUMxQiw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBQzdCLGtEQUFrRDtJQUNsRCxLQUFLO0lBRUwsQ0FBWTtJQUNaLDJEQUEyRDtJQUMzRCwrREFBK0Q7SUFDL0QsTUFBTUUsY0FBY2xCLFNBQ2hCTyxNQUFNQyxJQUFJLENBQUMsSUFBSUMsSUFBSVQsT0FBT1UsR0FBRyxDQUFDLENBQUNDLFFBQWlCQSxNQUFNUSxZQUFZLElBQ2pFTixNQUFNLENBQUMsQ0FBQ00sZUFBaUJBLGlCQUFpQixLQUMxQ0wsSUFBSSxDQUFDLENBQUNDLEdBQUdDLElBQU9ELEtBQUtDLElBQUlELEVBQUVFLGFBQWEsQ0FBQ0QsS0FBSyxLQUMvQyxFQUFFO0lBQ04sbUNBQW1DO0lBQ25DLGtCQUFrQjtJQUNsQiwrQ0FBK0M7SUFDL0MsTUFBTTtJQUNOLGNBQWM7SUFDZCxLQUFLO0lBQ0wsNkJBQTZCO0lBQzdCLHdCQUF3QjtJQUN4Qiw4QkFBOEI7SUFDOUIsNkJBQTZCO0lBQzdCLGdEQUFnRDtJQUNoRCxLQUFLO0lBRUwsQ0FBYTtJQUNiLDZEQUE2RDtJQUM3RCxpRUFBaUU7SUFDakUsTUFBTUksZUFBZXBCLFNBQ2pCTyxNQUFNQyxJQUFJLENBQUMsSUFBSUMsSUFBSVQsT0FBT1UsR0FBRyxDQUFDLENBQUNDLFFBQWlCQSxNQUFNVSxLQUFLLElBQzFEUixNQUFNLENBQUMsQ0FBQ1EsUUFBVUEsVUFBVSxLQUM1QlAsSUFBSSxDQUFDLENBQUNDLEdBQUdDLElBQU9ELEtBQUtDLElBQUlELEVBQUVFLGFBQWEsQ0FBQ0QsS0FBSyxLQUMvQyxFQUFFO0lBQ04sb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQixpREFBaUQ7SUFDakQsTUFBTTtJQUNOLGNBQWM7SUFDZCxLQUFLO0lBQ0wsOEJBQThCO0lBQzlCLHlCQUF5QjtJQUN6Qiw4QkFBOEI7SUFDOUIsNEJBQTRCO0lBQzVCLGlEQUFpRDtJQUNqRCxLQUFLO0lBRUwscUJBQ0UsOERBQUNNO1FBQUlDLFdBQVcvQixpREFBVUEsQ0FBQ0Qsa0ZBQXdCLEVBQUVBLHVFQUFhOzswQkFDaEUsOERBQUMrQjtnQkFBSUMsV0FBV2hDLDRFQUFrQjswQkFBRTs7Ozs7OzBCQUtwQyw4REFBQ0ssd0VBQWVBO2dCQUFDOEIsU0FBUyxJQUFNdkIsa0JBQWtCO2dCQUFZd0IsVUFBVTFCLGlCQUFpQjtnQkFBVzJCLE1BQU0vQiwwQ0FBT0E7MEJBQUU7Ozs7OzswQkFDbkgsOERBQUNELHdFQUFlQTtnQkFBQzhCLFNBQVMsSUFBTXZCLGtCQUFrQjtnQkFBVXdCLFVBQVUxQixpQkFBaUI7Z0JBQVMyQixNQUFNOUIsd0NBQUtBOzBCQUFFOzs7Ozs7MEJBQzdHLDhEQUFDRix3RUFBZUE7Z0JBQUM4QixTQUFTLElBQU12QixrQkFBa0I7Z0JBQVd3QixVQUFVMUIsaUJBQWlCO2dCQUFVMkIsTUFBTUM7MEJBQUk7Ozs7Ozs7Ozs7OztBQXlHbEg7R0ExTE05QjtLQUFBQTtBQTRMTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9GaWx0ZXJCbG9jay9GaWx0ZXJCbG9jay50c3g/YjU2YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL0ZpbHRlckJsb2NrLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVHJhY2tzQ29udGV4dCB9IGZyb20gXCJAL2NvbnRleHRzL3RyYWNrcy1jb250ZXh0XCI7XG5pbXBvcnQgeyBUcmFjayB9IGZyb20gXCJAL2ludGVyZmFjZXMvaW50ZXJmYWNlc1wiO1xuaW1wb3J0IEZpbHRlckJsb2NrSXRlbSBmcm9tIFwiLi4vRmlsdGVyQmxvY2tJdGVtL0ZpbHRlckJsb2NrSXRlbVwiO1xuaW1wb3J0IHsgYXJ0aXN0cywgeWVhcnMgfSBmcm9tIFwiLi9kYXRhXCI7XG5cbmNvbnN0IEZpbHRlckJsb2NrOiBSZWFjdC5GQyA9ICgpID0+IHtcblxuICBjb25zdCB7IHRyYWNrcyB9ID0gdXNlQ29udGV4dChUcmFja3NDb250ZXh0KTtcblxuICBjb25zdCBbYWN0aXZlRmlsdGVyLCBzZXRBY3RpdmVGaWx0ZXJdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IGhhbmRsZUZpbHRlckNsaWNrID0gKG5ld0ZpbHRlcjogc3RyaW5nKSA9PiB7XG4gICAgc2V0QWN0aXZlRmlsdGVyKChwcmV2KSA9PiBuZXdGaWx0ZXIgPT09IHByZXYgPyBudWxsIDogbmV3RmlsdGVyKTtcbiAgfVxuXG4gIHsvKiBBUlRJU1QgKi8gfVxuICAvLyBjb25zdCBbaXNBcnRpc3RPcGVuZWQsIHNldElzQXJ0aXN0T3BlbmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgLy8gY29uc3QgW3VuaXF1ZUFydGlzdHNDb3VudCwgc2V0VW5pcXVlQXJ0aXN0c0NvdW50XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCB1bmlxdWVBcnRpc3RzID0gdHJhY2tzXG4gICAgPyBBcnJheS5mcm9tKG5ldyBTZXQodHJhY2tzLm1hcCgodHJhY2s6IFRyYWNrKSA9PiB0cmFjay5hdXRob3IpKSlcbiAgICAgIC5maWx0ZXIoKGF1dGhvcikgPT4gYXV0aG9yICYmIGF1dGhvciAhPT0gXCItXCIpXG4gICAgICAuc29ydCgoYSwgYikgPT4gKGEgJiYgYiA/IGEubG9jYWxlQ29tcGFyZShiKSA6IDApKVxuICAgIDogW107XG4gIC8vIGNvbnN0IGNvdW50VW5pcXVlQXJ0aXN0cyA9ICgpID0+IHtcbiAgLy8gICBpZiAodHJhY2tzKSB7XG4gIC8vICAgICBzZXRVbmlxdWVBcnRpc3RzQ291bnQodW5pcXVlQXJ0aXN0cy5sZW5ndGgpO1xuICAvLyAgIH1cbiAgLy8gICByZXR1cm4gMDtcbiAgLy8gfTtcbiAgLy8gY29uc3QgdG9nZ2xlQXJ0aXN0ID0gKCkgPT4ge1xuICAvLyAgIGNvdW50VW5pcXVlQXJ0aXN0cygpO1xuICAvLyAgIHNldElzRGF0ZU9wZW5lZChmYWxzZSk7XG4gIC8vICAgc2V0SXNHZW5yZU9wZW5lZChmYWxzZSk7XG4gIC8vICAgc2V0SXNBcnRpc3RPcGVuZWQoKHByZXZTdGF0ZSkgPT4gIXByZXZTdGF0ZSk7XG4gIC8vIH07XG5cbiAgey8qIERBVEUgKi8gfVxuICAvLyBjb25zdCBbaXNEYXRlT3BlbmVkLCBzZXRJc0RhdGVPcGVuZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAvLyBjb25zdCBbdW5pcXVlRGF0ZXNDb3VudCwgc2V0VW5pcXVlRGF0ZXNDb3VudF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgdW5pcXVlRGF0ZXMgPSB0cmFja3NcbiAgICA/IEFycmF5LmZyb20obmV3IFNldCh0cmFja3MubWFwKCh0cmFjazogVHJhY2spID0+IHRyYWNrLnJlbGVhc2VfZGF0ZSkpKVxuICAgICAgLmZpbHRlcigocmVsZWFzZV9kYXRlKSA9PiByZWxlYXNlX2RhdGUgIT09IFwiLVwiKVxuICAgICAgLnNvcnQoKGEsIGIpID0+IChhICYmIGIgPyBhLmxvY2FsZUNvbXBhcmUoYikgOiAwKSlcbiAgICA6IFtdO1xuICAvLyBjb25zdCBjb3VudFVuaXF1ZURhdGVzID0gKCkgPT4ge1xuICAvLyAgIGlmICh0cmFja3MpIHtcbiAgLy8gICAgIHNldFVuaXF1ZURhdGVzQ291bnQodW5pcXVlRGF0ZXMubGVuZ3RoKTtcbiAgLy8gICB9XG4gIC8vICAgcmV0dXJuIDA7XG4gIC8vIH07XG4gIC8vIGNvbnN0IHRvZ2dsZURhdGUgPSAoKSA9PiB7XG4gIC8vICAgY291bnRVbmlxdWVEYXRlcygpO1xuICAvLyAgIHNldElzQXJ0aXN0T3BlbmVkKGZhbHNlKTtcbiAgLy8gICBzZXRJc0dlbnJlT3BlbmVkKGZhbHNlKTtcbiAgLy8gICBzZXRJc0RhdGVPcGVuZWQoKHByZXZTdGF0ZSkgPT4gIXByZXZTdGF0ZSk7XG4gIC8vIH07XG5cbiAgey8qIEdFTlJFICovIH1cbiAgLy8gY29uc3QgW2lzR2VucmVPcGVuZWQsIHNldElzR2VucmVPcGVuZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAvLyBjb25zdCBbdW5pcXVlR2VucmVzQ291bnQsIHNldFVuaXF1ZUdlbnJlc0NvdW50XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCB1bmlxdWVHZW5yZXMgPSB0cmFja3NcbiAgICA/IEFycmF5LmZyb20obmV3IFNldCh0cmFja3MubWFwKCh0cmFjazogVHJhY2spID0+IHRyYWNrLmdlbnJlKSkpXG4gICAgICAuZmlsdGVyKChnZW5yZSkgPT4gZ2VucmUgIT09IFwiLVwiKVxuICAgICAgLnNvcnQoKGEsIGIpID0+IChhICYmIGIgPyBhLmxvY2FsZUNvbXBhcmUoYikgOiAwKSlcbiAgICA6IFtdO1xuICAvLyBjb25zdCBjb3VudFVuaXF1ZUdlbnJlcyA9ICgpID0+IHtcbiAgLy8gICBpZiAodHJhY2tzKSB7XG4gIC8vICAgICBzZXRVbmlxdWVHZW5yZXNDb3VudCh1bmlxdWVHZW5yZXMubGVuZ3RoKTtcbiAgLy8gICB9XG4gIC8vICAgcmV0dXJuIDA7XG4gIC8vIH07XG4gIC8vIGNvbnN0IHRvZ2dsZUdlbnJlID0gKCkgPT4ge1xuICAvLyAgIGNvdW50VW5pcXVlR2VucmVzKCk7XG4gIC8vICAgc2V0SXNBcnRpc3RPcGVuZWQoZmFsc2UpO1xuICAvLyAgIHNldElzRGF0ZU9wZW5lZChmYWxzZSk7XG4gIC8vICAgc2V0SXNHZW5yZU9wZW5lZCgocHJldlN0YXRlKSA9PiAhcHJldlN0YXRlKTtcbiAgLy8gfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5jZW50ZXJCbG9ja0ZpbHRlciwgc3R5bGVzLmZpbHRlcil9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5maWx0ZXJUaXRsZX0+U2VhcmNoIGZvcjo8L2Rpdj5cblxuICAgICAgey8qIDxGaWx0ZXJCbG9ja0l0ZW0gb25DbGljaz17KCkgPT4gaGFuZGxlRmlsdGVyQ2xpY2soXCJhcnRpc3RzXCIpfSBpc09wZW5lZD17YWN0aXZlRmlsdGVyID09PSBcImFydGlzdHNcIn0gbGlzdD17YXJ0aXN0c30+YXJ0aXN0PC9GaWx0ZXJCbG9ja0l0ZW0+XG4gICAgICA8RmlsdGVyQmxvY2tJdGVtIG9uQ2xpY2s9eygpID0+IGhhbmRsZUZpbHRlckNsaWNrKFwieWVhcnNcIil9IGlzT3BlbmVkPXthY3RpdmVGaWx0ZXIgPT09IFwieWVhcnNcIn0gbGlzdD17eWVhcnN9PnllYXI8L0ZpbHRlckJsb2NrSXRlbT5cbiAgICAgIDxGaWx0ZXJCbG9ja0l0ZW0gb25DbGljaz17KCkgPT4gaGFuZGxlRmlsdGVyQ2xpY2soXCJnZW5yZXNcIil9IGlzT3BlbmVkPXthY3RpdmVGaWx0ZXIgPT09IFwiZ2VucmVzXCJ9IGxpc3Q9e2dlbnJlc30+Z2VucmU8L0ZpbHRlckJsb2NrSXRlbT4gKi99XG4gICAgICA8RmlsdGVyQmxvY2tJdGVtIG9uQ2xpY2s9eygpID0+IGhhbmRsZUZpbHRlckNsaWNrKFwiYXJ0aXN0c1wiKX0gaXNPcGVuZWQ9e2FjdGl2ZUZpbHRlciA9PT0gXCJhcnRpc3RzXCJ9IGxpc3Q9e2FydGlzdHN9PmFydGlzdDwvRmlsdGVyQmxvY2tJdGVtPlxuICAgICAgPEZpbHRlckJsb2NrSXRlbSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVGaWx0ZXJDbGljayhcInllYXJzXCIpfSBpc09wZW5lZD17YWN0aXZlRmlsdGVyID09PSBcInllYXJzXCJ9IGxpc3Q9e3llYXJzfT55ZWFyPC9GaWx0ZXJCbG9ja0l0ZW0+XG4gICAgICA8RmlsdGVyQmxvY2tJdGVtIG9uQ2xpY2s9eygpID0+IGhhbmRsZUZpbHRlckNsaWNrKFwiZ2VucmVzXCIpfSBpc09wZW5lZD17YWN0aXZlRmlsdGVyID09PSBcImdlbnJlc1wifSBsaXN0PXtnZX0+Z2VucmU8L0ZpbHRlckJsb2NrSXRlbT5cblxuICAgICAgey8qIEFSVElTVFxuICAgICAge3VuaXF1ZUFydGlzdHNDb3VudCA+IDAgJiYgaXNBcnRpc3RPcGVuZWQgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMuQ291bnRQb3BVcCwgc3R5bGVzLmFydGlzdCl9PlxuICAgICAgICAgIHt1bmlxdWVBcnRpc3RzQ291bnR9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIDxidXR0b25cbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMuZmlsdGVyQnV0dG9uLCBzdHlsZXMuYnV0dG9uQXV0aG9yLCBzdHlsZXMuYnRuVGV4dCxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBbc3R5bGVzLmFjdGl2ZV06IGlzQXJ0aXN0T3BlbmVkLFxuICAgICAgICAgIH0pfVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVBcnRpc3QoKX1cbiAgICAgID5cbiAgICAgICAgYXJ0aXN0XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIHtcbiAgICAgICAgaXNBcnRpc3RPcGVuZWQgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmlsdGVyQnl9PlxuICAgICAgICAgICAge3VuaXF1ZUFydGlzdHMubGVuZ3RoID4gMCA/IChcbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLmFydGlzdExpc3R9PlxuICAgICAgICAgICAgICAgIHt1bmlxdWVBcnRpc3RzLm1hcCgoYXJ0aXN0LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9IGNsYXNzTmFtZT17c3R5bGVzLmZpbHRlckJ5UH0+XG4gICAgICAgICAgICAgICAgICAgIHthcnRpc3R9XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucGxheWxpc3RUaXRsZUNvbH0+Tm8gZGF0YS4uLjwvcD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgIH0gKi99XG5cbiAgICAgIHsvKiBZRUFSIFxuICAgICAge3VuaXF1ZURhdGVzQ291bnQgPiAwICYmIGlzRGF0ZU9wZW5lZCAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5Db3VudFBvcFVwLCBzdHlsZXMueWVhcil9PlxuICAgICAgICAgIHt1bmlxdWVEYXRlc0NvdW50fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICA8YnV0dG9uXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLmZpbHRlckJ1dHRvbiwgc3R5bGVzLmJ1dHRvblllYXIsIHN0eWxlcy5idG5UZXh0LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFtzdHlsZXMuYWN0aXZlXTogaXNEYXRlT3BlbmVkLFxuICAgICAgICAgIH0pfVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVEYXRlKCl9XG4gICAgICA+XG4gICAgICAgIHJlbGVhc2UgZGF0ZVxuICAgICAgPC9idXR0b24+XG4gICAgICB7XG4gICAgICAgIGlzRGF0ZU9wZW5lZCAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5maWx0ZXJCeX0+XG4gICAgICAgICAgICB7dHJhY2tzID8gKFxuICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge3VuaXF1ZURhdGVzLm1hcCgocmVsZWFzZV9kYXRlLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9IGNsYXNzTmFtZT17c3R5bGVzLmZpbHRlckJ5UH0+XG4gICAgICAgICAgICAgICAgICAgIHtyZWxlYXNlX2RhdGV9XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucGxheWxpc3RUaXRsZUNvbH0+Tm8gZGF0YS4uLjwvcD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgIH0gKi99XG5cbiAgICAgIHsvKiBHRU5SRSBcbiAgICAgIHt1bmlxdWVHZW5yZXNDb3VudCA+IDAgJiYgaXNHZW5yZU9wZW5lZCAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5Db3VudFBvcFVwLCBzdHlsZXMuZ2VucmUpfT5cbiAgICAgICAgICB7dW5pcXVlR2VucmVzQ291bnR9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIDxidXR0b25cbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMuZmlsdGVyQnV0dG9uLCBzdHlsZXMuYnV0dG9uWWVhciwgc3R5bGVzLmJ0blRleHQsXG4gICAgICAgICAge1xuICAgICAgICAgICAgW3N0eWxlcy5hY3RpdmVdOiBpc0dlbnJlT3BlbmVkLFxuICAgICAgICAgIH0pfVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVHZW5yZSgpfVxuICAgICAgPlxuICAgICAgICBnZW5yZVxuICAgICAgPC9idXR0b24+XG4gICAgICB7XG4gICAgICAgIGlzR2VucmVPcGVuZWQgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmlsdGVyQnl9PlxuICAgICAgICAgICAge3RyYWNrcyA/IChcbiAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHt1bmlxdWVHZW5yZXMubWFwKChnZW5yZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9e3N0eWxlcy5maWx0ZXJCeVB9PlxuICAgICAgICAgICAgICAgICAgICB7Z2VucmV9XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucGxheWxpc3RUaXRsZUNvbH0+Tm8gZGF0YS4uLjwvcD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgIH0gKi99XG4gICAgPC9kaXYgPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJCbG9jazsiXSwibmFtZXMiOlsic3R5bGVzIiwiY2xhc3NOYW1lcyIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIlRyYWNrc0NvbnRleHQiLCJGaWx0ZXJCbG9ja0l0ZW0iLCJhcnRpc3RzIiwieWVhcnMiLCJGaWx0ZXJCbG9jayIsInRyYWNrcyIsImFjdGl2ZUZpbHRlciIsInNldEFjdGl2ZUZpbHRlciIsImhhbmRsZUZpbHRlckNsaWNrIiwibmV3RmlsdGVyIiwicHJldiIsInVuaXF1ZUFydGlzdHMiLCJBcnJheSIsImZyb20iLCJTZXQiLCJtYXAiLCJ0cmFjayIsImF1dGhvciIsImZpbHRlciIsInNvcnQiLCJhIiwiYiIsImxvY2FsZUNvbXBhcmUiLCJ1bmlxdWVEYXRlcyIsInJlbGVhc2VfZGF0ZSIsInVuaXF1ZUdlbnJlcyIsImdlbnJlIiwiZGl2IiwiY2xhc3NOYW1lIiwiY2VudGVyQmxvY2tGaWx0ZXIiLCJmaWx0ZXJUaXRsZSIsIm9uQ2xpY2siLCJpc09wZW5lZCIsImxpc3QiLCJnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/FilterBlock/FilterBlock.tsx\n"));

/***/ })

});