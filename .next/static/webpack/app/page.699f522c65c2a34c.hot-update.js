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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FilterBlock.module.css */ \"(app-pages-browser)/./src/components/FilterBlock/FilterBlock.module.css\");\n/* harmony import */ var _FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _contexts_tracks_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/contexts/tracks-context */ \"(app-pages-browser)/./src/contexts/tracks-context.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst FilterBlock = ()=>{\n    _s();\n    const { tracks } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_tracks_context__WEBPACK_IMPORTED_MODULE_3__.TracksContext);\n    const [activeFilter, setActiveFilter] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const handleFilterClick = (newFilter)=>{\n        setActiveFilter(newFilter);\n    };\n    {}\n    // const [isArtistOpened, setIsArtistOpened] = useState(false);\n    // const [uniqueArtistsCount, setUniqueArtistsCount] = useState(0);\n    // const uniqueArtists = tracks\n    //   ? Array.from(new Set(tracks.map((track: Track) => track.author)))\n    //     .filter((author) => author && author !== \"-\")\n    //     .sort((a, b) => (a && b ? a.localeCompare(b) : 0))\n    //   : [];\n    // const countUniqueArtists = () => {\n    //   if (tracks) {\n    //     setUniqueArtistsCount(uniqueArtists.length);\n    //   }\n    //   return 0;\n    // };\n    // const toggleArtist = () => {\n    //   countUniqueArtists();\n    //   setIsDateOpened(false);\n    //   setIsGenreOpened(false);\n    //   setIsArtistOpened((prevState) => !prevState);\n    // };\n    {}\n    // const [isDateOpened, setIsDateOpened] = useState(false);\n    // const [uniqueDatesCount, setUniqueDatesCount] = useState(0);\n    // const uniqueDates = tracks\n    //   ? Array.from(new Set(tracks.map((track: Track) => track.release_date)))\n    //     .filter((release_date) => release_date !== \"-\")\n    //     .sort((a, b) => (a && b ? a.localeCompare(b) : 0))\n    //   : [];\n    // const countUniqueDates = () => {\n    //   if (tracks) {\n    //     setUniqueDatesCount(uniqueDates.length);\n    //   }\n    //   return 0;\n    // };\n    // const toggleDate = () => {\n    //   countUniqueDates();\n    //   setIsArtistOpened(false);\n    //   setIsGenreOpened(false);\n    //   setIsDateOpened((prevState) => !prevState);\n    // };\n    {}\n    // const [isGenreOpened, setIsGenreOpened] = useState(false);\n    // const [uniqueGenresCount, setUniqueGenresCount] = useState(0);\n    // const uniqueGenres = tracks\n    //   ? Array.from(new Set(tracks.map((track: Track) => track.genre)))\n    //     .filter((genre) => genre !== \"-\")\n    //     .sort((a, b) => (a && b ? a.localeCompare(b) : 0))\n    //   : [];\n    // const countUniqueGenres = () => {\n    //   if (tracks) {\n    //     setUniqueGenresCount(uniqueGenres.length);\n    //   }\n    //   return 0;\n    // };\n    // const toggleGenre = () => {\n    //   countUniqueGenres();\n    //   setIsArtistOpened(false);\n    //   setIsDateOpened(false);\n    //   setIsGenreOpened((prevState) => !prevState);\n    // };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().centerBlockFilter), (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().filter)),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().filterTitle),\n                children: \"Search for:\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"button\",\n                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().filterButton), (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().buttonAuthor), (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().btnText)),\n                onClick: ()=>handleFilterClick(\"authors\"),\n                children: \"artist\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"button\",\n                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().filterButton), (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().buttonAuthor), (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().btnText)),\n                onClick: ()=>handleFilterClick(\"years\"),\n                children: \"release date\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"button\",\n                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().filterButton), (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().buttonAuthor), (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().btnText)),\n                onClick: ()=>handleFilterClick(\"genre\"),\n                children: \"genre\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 105,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n        lineNumber: 80,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FilterBlock, \"wPDriRIRj+xTEut9x+9qOFDBago=\");\n_c = FilterBlock;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FilterBlock);\nvar _c;\n$RefreshReg$(_c, \"FilterBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0ZpbHRlckJsb2NrL0ZpbHRlckJsb2NrLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE4QztBQUNWO0FBQ1M7QUFDYTtBQUcxRCxNQUFNSyxjQUF3Qjs7SUFFNUIsTUFBTSxFQUFFQyxNQUFNLEVBQUUsR0FBR0osaURBQVVBLENBQUNFLG1FQUFhQTtJQUUzQyxNQUFNLENBQUNHLGNBQWNDLGdCQUFnQixHQUFHTCwrQ0FBUUEsQ0FBZ0I7SUFDaEUsTUFBTU0sb0JBQW9CLENBQUNDO1FBQ3pCRixnQkFBZ0JFO0lBQ2xCO0lBRUEsQ0FBYztJQUNkLCtEQUErRDtJQUMvRCxtRUFBbUU7SUFDbkUsK0JBQStCO0lBQy9CLHNFQUFzRTtJQUN0RSxvREFBb0Q7SUFDcEQseURBQXlEO0lBQ3pELFVBQVU7SUFDVixxQ0FBcUM7SUFDckMsa0JBQWtCO0lBQ2xCLG1EQUFtRDtJQUNuRCxNQUFNO0lBQ04sY0FBYztJQUNkLEtBQUs7SUFDTCwrQkFBK0I7SUFDL0IsMEJBQTBCO0lBQzFCLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0Isa0RBQWtEO0lBQ2xELEtBQUs7SUFFTCxDQUFZO0lBQ1osMkRBQTJEO0lBQzNELCtEQUErRDtJQUMvRCw2QkFBNkI7SUFDN0IsNEVBQTRFO0lBQzVFLHNEQUFzRDtJQUN0RCx5REFBeUQ7SUFDekQsVUFBVTtJQUNWLG1DQUFtQztJQUNuQyxrQkFBa0I7SUFDbEIsK0NBQStDO0lBQy9DLE1BQU07SUFDTixjQUFjO0lBQ2QsS0FBSztJQUNMLDZCQUE2QjtJQUM3Qix3QkFBd0I7SUFDeEIsOEJBQThCO0lBQzlCLDZCQUE2QjtJQUM3QixnREFBZ0Q7SUFDaEQsS0FBSztJQUVMLENBQWE7SUFDYiw2REFBNkQ7SUFDN0QsaUVBQWlFO0lBQ2pFLDhCQUE4QjtJQUM5QixxRUFBcUU7SUFDckUsd0NBQXdDO0lBQ3hDLHlEQUF5RDtJQUN6RCxVQUFVO0lBQ1Ysb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQixpREFBaUQ7SUFDakQsTUFBTTtJQUNOLGNBQWM7SUFDZCxLQUFLO0lBQ0wsOEJBQThCO0lBQzlCLHlCQUF5QjtJQUN6Qiw4QkFBOEI7SUFDOUIsNEJBQTRCO0lBQzVCLGlEQUFpRDtJQUNqRCxLQUFLO0lBRUwscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVdYLGlEQUFVQSxDQUFDRCxrRkFBd0IsRUFBRUEsdUVBQWE7OzBCQUNoRSw4REFBQ1c7Z0JBQUlDLFdBQVdaLDRFQUFrQjswQkFBRTs7Ozs7OzBCQUVwQyw4REFBQ2dCO2dCQUNDQyxNQUFLO2dCQUNMTCxXQUFXWCxpREFBVUEsQ0FBQ0QsNkVBQW1CLEVBQUVBLDZFQUFtQixFQUFFQSx3RUFBYztnQkFLOUVxQixTQUFTLElBQU1aLGtCQUFrQjswQkFDbEM7Ozs7OzswQkFHRCw4REFBQ087Z0JBQ0NDLE1BQUs7Z0JBQ0xMLFdBQVdYLGlEQUFVQSxDQUFDRCw2RUFBbUIsRUFBRUEsNkVBQW1CLEVBQUVBLHdFQUFjO2dCQUs5RXFCLFNBQVMsSUFBTVosa0JBQWtCOzBCQUNsQzs7Ozs7OzBCQUdELDhEQUFDTztnQkFDQ0MsTUFBSztnQkFDTEwsV0FBV1gsaURBQVVBLENBQUNELDZFQUFtQixFQUFFQSw2RUFBbUIsRUFBRUEsd0VBQWM7Z0JBSzlFcUIsU0FBUyxJQUFNWixrQkFBa0I7MEJBQ2xDOzs7Ozs7Ozs7Ozs7QUEyR1A7R0FyTk1KO0tBQUFBO0FBdU5OLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0ZpbHRlckJsb2NrL0ZpbHRlckJsb2NrLnRzeD9iNTZjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vRmlsdGVyQmxvY2subW9kdWxlLmNzc1wiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUcmFja3NDb250ZXh0IH0gZnJvbSBcIkAvY29udGV4dHMvdHJhY2tzLWNvbnRleHRcIjtcbmltcG9ydCB7IFRyYWNrIH0gZnJvbSBcIkAvaW50ZXJmYWNlcy9pbnRlcmZhY2VzXCI7XG5cbmNvbnN0IEZpbHRlckJsb2NrOiBSZWFjdC5GQyA9ICgpID0+IHtcblxuICBjb25zdCB7IHRyYWNrcyB9ID0gdXNlQ29udGV4dChUcmFja3NDb250ZXh0KTtcblxuICBjb25zdCBbYWN0aXZlRmlsdGVyLCBzZXRBY3RpdmVGaWx0ZXJdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IGhhbmRsZUZpbHRlckNsaWNrID0gKG5ld0ZpbHRlcjogc3RyaW5nKSA9PiB7XG4gICAgc2V0QWN0aXZlRmlsdGVyKG5ld0ZpbHRlcik7XG4gIH1cblxuICB7LyogQVJUSVNUICovIH1cbiAgLy8gY29uc3QgW2lzQXJ0aXN0T3BlbmVkLCBzZXRJc0FydGlzdE9wZW5lZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIC8vIGNvbnN0IFt1bmlxdWVBcnRpc3RzQ291bnQsIHNldFVuaXF1ZUFydGlzdHNDb3VudF0gPSB1c2VTdGF0ZSgwKTtcbiAgLy8gY29uc3QgdW5pcXVlQXJ0aXN0cyA9IHRyYWNrc1xuICAvLyAgID8gQXJyYXkuZnJvbShuZXcgU2V0KHRyYWNrcy5tYXAoKHRyYWNrOiBUcmFjaykgPT4gdHJhY2suYXV0aG9yKSkpXG4gIC8vICAgICAuZmlsdGVyKChhdXRob3IpID0+IGF1dGhvciAmJiBhdXRob3IgIT09IFwiLVwiKVxuICAvLyAgICAgLnNvcnQoKGEsIGIpID0+IChhICYmIGIgPyBhLmxvY2FsZUNvbXBhcmUoYikgOiAwKSlcbiAgLy8gICA6IFtdO1xuICAvLyBjb25zdCBjb3VudFVuaXF1ZUFydGlzdHMgPSAoKSA9PiB7XG4gIC8vICAgaWYgKHRyYWNrcykge1xuICAvLyAgICAgc2V0VW5pcXVlQXJ0aXN0c0NvdW50KHVuaXF1ZUFydGlzdHMubGVuZ3RoKTtcbiAgLy8gICB9XG4gIC8vICAgcmV0dXJuIDA7XG4gIC8vIH07XG4gIC8vIGNvbnN0IHRvZ2dsZUFydGlzdCA9ICgpID0+IHtcbiAgLy8gICBjb3VudFVuaXF1ZUFydGlzdHMoKTtcbiAgLy8gICBzZXRJc0RhdGVPcGVuZWQoZmFsc2UpO1xuICAvLyAgIHNldElzR2VucmVPcGVuZWQoZmFsc2UpO1xuICAvLyAgIHNldElzQXJ0aXN0T3BlbmVkKChwcmV2U3RhdGUpID0+ICFwcmV2U3RhdGUpO1xuICAvLyB9O1xuXG4gIHsvKiBEQVRFICovIH1cbiAgLy8gY29uc3QgW2lzRGF0ZU9wZW5lZCwgc2V0SXNEYXRlT3BlbmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgLy8gY29uc3QgW3VuaXF1ZURhdGVzQ291bnQsIHNldFVuaXF1ZURhdGVzQ291bnRdID0gdXNlU3RhdGUoMCk7XG4gIC8vIGNvbnN0IHVuaXF1ZURhdGVzID0gdHJhY2tzXG4gIC8vICAgPyBBcnJheS5mcm9tKG5ldyBTZXQodHJhY2tzLm1hcCgodHJhY2s6IFRyYWNrKSA9PiB0cmFjay5yZWxlYXNlX2RhdGUpKSlcbiAgLy8gICAgIC5maWx0ZXIoKHJlbGVhc2VfZGF0ZSkgPT4gcmVsZWFzZV9kYXRlICE9PSBcIi1cIilcbiAgLy8gICAgIC5zb3J0KChhLCBiKSA9PiAoYSAmJiBiID8gYS5sb2NhbGVDb21wYXJlKGIpIDogMCkpXG4gIC8vICAgOiBbXTtcbiAgLy8gY29uc3QgY291bnRVbmlxdWVEYXRlcyA9ICgpID0+IHtcbiAgLy8gICBpZiAodHJhY2tzKSB7XG4gIC8vICAgICBzZXRVbmlxdWVEYXRlc0NvdW50KHVuaXF1ZURhdGVzLmxlbmd0aCk7XG4gIC8vICAgfVxuICAvLyAgIHJldHVybiAwO1xuICAvLyB9O1xuICAvLyBjb25zdCB0b2dnbGVEYXRlID0gKCkgPT4ge1xuICAvLyAgIGNvdW50VW5pcXVlRGF0ZXMoKTtcbiAgLy8gICBzZXRJc0FydGlzdE9wZW5lZChmYWxzZSk7XG4gIC8vICAgc2V0SXNHZW5yZU9wZW5lZChmYWxzZSk7XG4gIC8vICAgc2V0SXNEYXRlT3BlbmVkKChwcmV2U3RhdGUpID0+ICFwcmV2U3RhdGUpO1xuICAvLyB9O1xuXG4gIHsvKiBHRU5SRSAqLyB9XG4gIC8vIGNvbnN0IFtpc0dlbnJlT3BlbmVkLCBzZXRJc0dlbnJlT3BlbmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgLy8gY29uc3QgW3VuaXF1ZUdlbnJlc0NvdW50LCBzZXRVbmlxdWVHZW5yZXNDb3VudF0gPSB1c2VTdGF0ZSgwKTtcbiAgLy8gY29uc3QgdW5pcXVlR2VucmVzID0gdHJhY2tzXG4gIC8vICAgPyBBcnJheS5mcm9tKG5ldyBTZXQodHJhY2tzLm1hcCgodHJhY2s6IFRyYWNrKSA9PiB0cmFjay5nZW5yZSkpKVxuICAvLyAgICAgLmZpbHRlcigoZ2VucmUpID0+IGdlbnJlICE9PSBcIi1cIilcbiAgLy8gICAgIC5zb3J0KChhLCBiKSA9PiAoYSAmJiBiID8gYS5sb2NhbGVDb21wYXJlKGIpIDogMCkpXG4gIC8vICAgOiBbXTtcbiAgLy8gY29uc3QgY291bnRVbmlxdWVHZW5yZXMgPSAoKSA9PiB7XG4gIC8vICAgaWYgKHRyYWNrcykge1xuICAvLyAgICAgc2V0VW5pcXVlR2VucmVzQ291bnQodW5pcXVlR2VucmVzLmxlbmd0aCk7XG4gIC8vICAgfVxuICAvLyAgIHJldHVybiAwO1xuICAvLyB9O1xuICAvLyBjb25zdCB0b2dnbGVHZW5yZSA9ICgpID0+IHtcbiAgLy8gICBjb3VudFVuaXF1ZUdlbnJlcygpO1xuICAvLyAgIHNldElzQXJ0aXN0T3BlbmVkKGZhbHNlKTtcbiAgLy8gICBzZXRJc0RhdGVPcGVuZWQoZmFsc2UpO1xuICAvLyAgIHNldElzR2VucmVPcGVuZWQoKHByZXZTdGF0ZSkgPT4gIXByZXZTdGF0ZSk7XG4gIC8vIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMuY2VudGVyQmxvY2tGaWx0ZXIsIHN0eWxlcy5maWx0ZXIpfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmlsdGVyVGl0bGV9PlNlYXJjaCBmb3I6PC9kaXY+XG5cbiAgICAgIDxidXR0b25cbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMuZmlsdGVyQnV0dG9uLCBzdHlsZXMuYnV0dG9uQXV0aG9yLCBzdHlsZXMuYnRuVGV4dCxcbiAgICAgICAgICAvLyB7XG4gICAgICAgICAgLy8gICBbc3R5bGVzLmFjdGl2ZV06IGlzQXJ0aXN0T3BlbmVkLFxuICAgICAgICAgIC8vIH1cbiAgICAgICAgKX1cbiAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlRmlsdGVyQ2xpY2soXCJhdXRob3JzXCIpfVxuICAgICAgPlxuICAgICAgICBhcnRpc3RcbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvblxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5maWx0ZXJCdXR0b24sIHN0eWxlcy5idXR0b25BdXRob3IsIHN0eWxlcy5idG5UZXh0LFxuICAgICAgICAgIC8vIHtcbiAgICAgICAgICAvLyAgIFtzdHlsZXMuYWN0aXZlXTogaXNBcnRpc3RPcGVuZWQsXG4gICAgICAgICAgLy8gfVxuICAgICAgICApfVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVGaWx0ZXJDbGljayhcInllYXJzXCIpfVxuICAgICAgPlxuICAgICAgICByZWxlYXNlIGRhdGVcbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvblxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5maWx0ZXJCdXR0b24sIHN0eWxlcy5idXR0b25BdXRob3IsIHN0eWxlcy5idG5UZXh0LFxuICAgICAgICAgIC8vIHtcbiAgICAgICAgICAvLyAgIFtzdHlsZXMuYWN0aXZlXTogaXNBcnRpc3RPcGVuZWQsXG4gICAgICAgICAgLy8gfVxuICAgICAgICApfVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVGaWx0ZXJDbGljayhcImdlbnJlXCIpfVxuICAgICAgPlxuICAgICAgICBnZW5yZVxuICAgICAgPC9idXR0b24+XG5cbiAgICAgIHsvKiBBUlRJU1RcbiAgICAgIHt1bmlxdWVBcnRpc3RzQ291bnQgPiAwICYmIGlzQXJ0aXN0T3BlbmVkICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLkNvdW50UG9wVXAsIHN0eWxlcy5hcnRpc3QpfT5cbiAgICAgICAgICB7dW5pcXVlQXJ0aXN0c0NvdW50fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICA8YnV0dG9uXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLmZpbHRlckJ1dHRvbiwgc3R5bGVzLmJ1dHRvbkF1dGhvciwgc3R5bGVzLmJ0blRleHQsXG4gICAgICAgICAge1xuICAgICAgICAgICAgW3N0eWxlcy5hY3RpdmVdOiBpc0FydGlzdE9wZW5lZCxcbiAgICAgICAgICB9KX1cbiAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlQXJ0aXN0KCl9XG4gICAgICA+XG4gICAgICAgIGFydGlzdFxuICAgICAgPC9idXR0b24+XG4gICAgICB7XG4gICAgICAgIGlzQXJ0aXN0T3BlbmVkICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZpbHRlckJ5fT5cbiAgICAgICAgICAgIHt1bmlxdWVBcnRpc3RzLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5hcnRpc3RMaXN0fT5cbiAgICAgICAgICAgICAgICB7dW5pcXVlQXJ0aXN0cy5tYXAoKGFydGlzdCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9e3N0eWxlcy5maWx0ZXJCeVB9PlxuICAgICAgICAgICAgICAgICAgICB7YXJ0aXN0fVxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnBsYXlsaXN0VGl0bGVDb2x9Pk5vIGRhdGEuLi48L3A+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgICBZRUFSIFxuICAgICAge3VuaXF1ZURhdGVzQ291bnQgPiAwICYmIGlzRGF0ZU9wZW5lZCAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5Db3VudFBvcFVwLCBzdHlsZXMueWVhcil9PlxuICAgICAgICAgIHt1bmlxdWVEYXRlc0NvdW50fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICA8YnV0dG9uXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLmZpbHRlckJ1dHRvbiwgc3R5bGVzLmJ1dHRvblllYXIsIHN0eWxlcy5idG5UZXh0LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFtzdHlsZXMuYWN0aXZlXTogaXNEYXRlT3BlbmVkLFxuICAgICAgICAgIH0pfVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVEYXRlKCl9XG4gICAgICA+XG4gICAgICAgIHJlbGVhc2UgZGF0ZVxuICAgICAgPC9idXR0b24+XG4gICAgICB7XG4gICAgICAgIGlzRGF0ZU9wZW5lZCAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5maWx0ZXJCeX0+XG4gICAgICAgICAgICB7dHJhY2tzID8gKFxuICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge3VuaXF1ZURhdGVzLm1hcCgocmVsZWFzZV9kYXRlLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9IGNsYXNzTmFtZT17c3R5bGVzLmZpbHRlckJ5UH0+XG4gICAgICAgICAgICAgICAgICAgIHtyZWxlYXNlX2RhdGV9XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucGxheWxpc3RUaXRsZUNvbH0+Tm8gZGF0YS4uLjwvcD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgIEdFTlJFIFxuICAgICAge3VuaXF1ZUdlbnJlc0NvdW50ID4gMCAmJiBpc0dlbnJlT3BlbmVkICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLkNvdW50UG9wVXAsIHN0eWxlcy5nZW5yZSl9PlxuICAgICAgICAgIHt1bmlxdWVHZW5yZXNDb3VudH1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAgPGJ1dHRvblxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5maWx0ZXJCdXR0b24sIHN0eWxlcy5idXR0b25ZZWFyLCBzdHlsZXMuYnRuVGV4dCxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBbc3R5bGVzLmFjdGl2ZV06IGlzR2VucmVPcGVuZWQsXG4gICAgICAgICAgfSl9XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZUdlbnJlKCl9XG4gICAgICA+XG4gICAgICAgIGdlbnJlXG4gICAgICA8L2J1dHRvbj5cbiAgICAgIHtcbiAgICAgICAgaXNHZW5yZU9wZW5lZCAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5maWx0ZXJCeX0+XG4gICAgICAgICAgICB7dHJhY2tzID8gKFxuICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge3VuaXF1ZUdlbnJlcy5tYXAoKGdlbnJlLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9IGNsYXNzTmFtZT17c3R5bGVzLmZpbHRlckJ5UH0+XG4gICAgICAgICAgICAgICAgICAgIHtnZW5yZX1cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5wbGF5bGlzdFRpdGxlQ29sfT5ObyBkYXRhLi4uPC9wPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICAgfSAqL31cbiAgICA8L2RpdiA+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZpbHRlckJsb2NrOyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJjbGFzc05hbWVzIiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwiVHJhY2tzQ29udGV4dCIsIkZpbHRlckJsb2NrIiwidHJhY2tzIiwiYWN0aXZlRmlsdGVyIiwic2V0QWN0aXZlRmlsdGVyIiwiaGFuZGxlRmlsdGVyQ2xpY2siLCJuZXdGaWx0ZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJjZW50ZXJCbG9ja0ZpbHRlciIsImZpbHRlciIsImZpbHRlclRpdGxlIiwiYnV0dG9uIiwidHlwZSIsImZpbHRlckJ1dHRvbiIsImJ1dHRvbkF1dGhvciIsImJ0blRleHQiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/FilterBlock/FilterBlock.tsx\n"));

/***/ })

});