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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FilterBlock.module.css */ \"(app-pages-browser)/./src/components/FilterBlock/FilterBlock.module.css\");\n/* harmony import */ var _FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst FilterBlock = ()=>{\n    _s();\n    // const { tracks } = useContext(TracksContext);\n    const [activeFilter, setActiveFilter] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const handleFilterClick = (newFilter)=>{\n        setActiveFilter((prev)=>newFilter);\n    };\n    {}\n    // const [isArtistOpened, setIsArtistOpened] = useState(false);\n    // const [uniqueArtistsCount, setUniqueArtistsCount] = useState(0);\n    // const uniqueArtists = tracks\n    //   ? Array.from(new Set(tracks.map((track: Track) => track.author)))\n    //     .filter((author) => author && author !== \"-\")\n    //     .sort((a, b) => (a && b ? a.localeCompare(b) : 0))\n    //   : [];\n    // const countUniqueArtists = () => {\n    //   if (tracks) {\n    //     setUniqueArtistsCount(uniqueArtists.length);\n    //   }\n    //   return 0;\n    // };\n    // const toggleArtist = () => {\n    //   countUniqueArtists();\n    //   setIsDateOpened(false);\n    //   setIsGenreOpened(false);\n    //   setIsArtistOpened((prevState) => !prevState);\n    // };\n    {}\n    // const [isDateOpened, setIsDateOpened] = useState(false);\n    // const [uniqueDatesCount, setUniqueDatesCount] = useState(0);\n    // const uniqueDates = tracks\n    //   ? Array.from(new Set(tracks.map((track: Track) => track.release_date)))\n    //     .filter((release_date) => release_date !== \"-\")\n    //     .sort((a, b) => (a && b ? a.localeCompare(b) : 0))\n    //   : [];\n    // const countUniqueDates = () => {\n    //   if (tracks) {\n    //     setUniqueDatesCount(uniqueDates.length);\n    //   }\n    //   return 0;\n    // };\n    // const toggleDate = () => {\n    //   countUniqueDates();\n    //   setIsArtistOpened(false);\n    //   setIsGenreOpened(false);\n    //   setIsDateOpened((prevState) => !prevState);\n    // };\n    {}\n    // const [isGenreOpened, setIsGenreOpened] = useState(false);\n    // const [uniqueGenresCount, setUniqueGenresCount] = useState(0);\n    // const uniqueGenres = tracks\n    //   ? Array.from(new Set(tracks.map((track: Track) => track.genre)))\n    //     .filter((genre) => genre !== \"-\")\n    //     .sort((a, b) => (a && b ? a.localeCompare(b) : 0))\n    //   : [];\n    // const countUniqueGenres = () => {\n    //   if (tracks) {\n    //     setUniqueGenresCount(uniqueGenres.length);\n    //   }\n    //   return 0;\n    // };\n    // const toggleGenre = () => {\n    //   countUniqueGenres();\n    //   setIsArtistOpened(false);\n    //   setIsDateOpened(false);\n    //   setIsGenreOpened((prevState) => !prevState);\n    // };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_3___default().centerBlockFilter), (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_3___default().filter)),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_3___default().filterTitle),\n                children: \"Search for:\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"button\",\n                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_3___default().filterButton), (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_3___default().buttonAuthor), (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_3___default().btnText)),\n                onClick: ()=>handleFilterClick(\"authors\"),\n                children: \"artist\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"button\",\n                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_3___default().filterButton), (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_3___default().buttonAuthor), (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_3___default().btnText)),\n                onClick: ()=>handleFilterClick(\"years\"),\n                children: \"release date\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"button\",\n                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_3___default().filterButton), (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_3___default().buttonAuthor), (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_3___default().btnText)),\n                onClick: ()=>handleFilterClick(\"genre\"),\n                children: \"genre\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 105,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n        lineNumber: 80,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FilterBlock, \"Pi/x/VfDjO83yThHuaUv3Wf7Mbs=\");\n_c = FilterBlock;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FilterBlock);\nvar _c;\n$RefreshReg$(_c, \"FilterBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0ZpbHRlckJsb2NrL0ZpbHRlckJsb2NrLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQThDO0FBQ1Y7QUFDUztBQUk3QyxNQUFNRyxjQUF3Qjs7SUFFNUIsZ0RBQWdEO0lBRWhELE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdILCtDQUFRQSxDQUFnQjtJQUNoRSxNQUFNSSxvQkFBb0IsQ0FBQ0M7UUFDekJGLGdCQUFnQixDQUFDRyxPQUFTRDtJQUM1QjtJQUVBLENBQWM7SUFDZCwrREFBK0Q7SUFDL0QsbUVBQW1FO0lBQ25FLCtCQUErQjtJQUMvQixzRUFBc0U7SUFDdEUsb0RBQW9EO0lBQ3BELHlEQUF5RDtJQUN6RCxVQUFVO0lBQ1YscUNBQXFDO0lBQ3JDLGtCQUFrQjtJQUNsQixtREFBbUQ7SUFDbkQsTUFBTTtJQUNOLGNBQWM7SUFDZCxLQUFLO0lBQ0wsK0JBQStCO0lBQy9CLDBCQUEwQjtJQUMxQiw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBQzdCLGtEQUFrRDtJQUNsRCxLQUFLO0lBRUwsQ0FBWTtJQUNaLDJEQUEyRDtJQUMzRCwrREFBK0Q7SUFDL0QsNkJBQTZCO0lBQzdCLDRFQUE0RTtJQUM1RSxzREFBc0Q7SUFDdEQseURBQXlEO0lBQ3pELFVBQVU7SUFDVixtQ0FBbUM7SUFDbkMsa0JBQWtCO0lBQ2xCLCtDQUErQztJQUMvQyxNQUFNO0lBQ04sY0FBYztJQUNkLEtBQUs7SUFDTCw2QkFBNkI7SUFDN0Isd0JBQXdCO0lBQ3hCLDhCQUE4QjtJQUM5Qiw2QkFBNkI7SUFDN0IsZ0RBQWdEO0lBQ2hELEtBQUs7SUFFTCxDQUFhO0lBQ2IsNkRBQTZEO0lBQzdELGlFQUFpRTtJQUNqRSw4QkFBOEI7SUFDOUIscUVBQXFFO0lBQ3JFLHdDQUF3QztJQUN4Qyx5REFBeUQ7SUFDekQsVUFBVTtJQUNWLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIsaURBQWlEO0lBQ2pELE1BQU07SUFDTixjQUFjO0lBQ2QsS0FBSztJQUNMLDhCQUE4QjtJQUM5Qix5QkFBeUI7SUFDekIsOEJBQThCO0lBQzlCLDRCQUE0QjtJQUM1QixpREFBaUQ7SUFDakQsS0FBSztJQUVMLHFCQUNFLDhEQUFDRTtRQUFJQyxXQUFXVCxpREFBVUEsQ0FBQ0Qsa0ZBQXdCLEVBQUVBLHVFQUFhOzswQkFDaEUsOERBQUNTO2dCQUFJQyxXQUFXViw0RUFBa0I7MEJBQUU7Ozs7OzswQkFFcEMsOERBQUNjO2dCQUNDQyxNQUFLO2dCQUNMTCxXQUFXVCxpREFBVUEsQ0FBQ0QsNkVBQW1CLEVBQUVBLDZFQUFtQixFQUFFQSx3RUFBYztnQkFLOUVtQixTQUFTLElBQU1iLGtCQUFrQjswQkFDbEM7Ozs7OzswQkFHRCw4REFBQ1E7Z0JBQ0NDLE1BQUs7Z0JBQ0xMLFdBQVdULGlEQUFVQSxDQUFDRCw2RUFBbUIsRUFBRUEsNkVBQW1CLEVBQUVBLHdFQUFjO2dCQUs5RW1CLFNBQVMsSUFBTWIsa0JBQWtCOzBCQUNsQzs7Ozs7OzBCQUdELDhEQUFDUTtnQkFDQ0MsTUFBSztnQkFDTEwsV0FBV1QsaURBQVVBLENBQUNELDZFQUFtQixFQUFFQSw2RUFBbUIsRUFBRUEsd0VBQWM7Z0JBSzlFbUIsU0FBUyxJQUFNYixrQkFBa0I7MEJBQ2xDOzs7Ozs7Ozs7Ozs7QUEyR1A7R0FyTk1IO0tBQUFBO0FBdU5OLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0ZpbHRlckJsb2NrL0ZpbHRlckJsb2NrLnRzeD9iNTZjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vRmlsdGVyQmxvY2subW9kdWxlLmNzc1wiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUcmFja3NDb250ZXh0IH0gZnJvbSBcIkAvY29udGV4dHMvdHJhY2tzLWNvbnRleHRcIjtcbmltcG9ydCB7IFRyYWNrIH0gZnJvbSBcIkAvaW50ZXJmYWNlcy9pbnRlcmZhY2VzXCI7XG5cbmNvbnN0IEZpbHRlckJsb2NrOiBSZWFjdC5GQyA9ICgpID0+IHtcblxuICAvLyBjb25zdCB7IHRyYWNrcyB9ID0gdXNlQ29udGV4dChUcmFja3NDb250ZXh0KTtcblxuICBjb25zdCBbYWN0aXZlRmlsdGVyLCBzZXRBY3RpdmVGaWx0ZXJdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IGhhbmRsZUZpbHRlckNsaWNrID0gKG5ld0ZpbHRlcjogc3RyaW5nKSA9PiB7XG4gICAgc2V0QWN0aXZlRmlsdGVyKChwcmV2KSA9PiBuZXdGaWx0ZXIpO1xuICB9XG5cbiAgey8qIEFSVElTVCAqLyB9XG4gIC8vIGNvbnN0IFtpc0FydGlzdE9wZW5lZCwgc2V0SXNBcnRpc3RPcGVuZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAvLyBjb25zdCBbdW5pcXVlQXJ0aXN0c0NvdW50LCBzZXRVbmlxdWVBcnRpc3RzQ291bnRdID0gdXNlU3RhdGUoMCk7XG4gIC8vIGNvbnN0IHVuaXF1ZUFydGlzdHMgPSB0cmFja3NcbiAgLy8gICA/IEFycmF5LmZyb20obmV3IFNldCh0cmFja3MubWFwKCh0cmFjazogVHJhY2spID0+IHRyYWNrLmF1dGhvcikpKVxuICAvLyAgICAgLmZpbHRlcigoYXV0aG9yKSA9PiBhdXRob3IgJiYgYXV0aG9yICE9PSBcIi1cIilcbiAgLy8gICAgIC5zb3J0KChhLCBiKSA9PiAoYSAmJiBiID8gYS5sb2NhbGVDb21wYXJlKGIpIDogMCkpXG4gIC8vICAgOiBbXTtcbiAgLy8gY29uc3QgY291bnRVbmlxdWVBcnRpc3RzID0gKCkgPT4ge1xuICAvLyAgIGlmICh0cmFja3MpIHtcbiAgLy8gICAgIHNldFVuaXF1ZUFydGlzdHNDb3VudCh1bmlxdWVBcnRpc3RzLmxlbmd0aCk7XG4gIC8vICAgfVxuICAvLyAgIHJldHVybiAwO1xuICAvLyB9O1xuICAvLyBjb25zdCB0b2dnbGVBcnRpc3QgPSAoKSA9PiB7XG4gIC8vICAgY291bnRVbmlxdWVBcnRpc3RzKCk7XG4gIC8vICAgc2V0SXNEYXRlT3BlbmVkKGZhbHNlKTtcbiAgLy8gICBzZXRJc0dlbnJlT3BlbmVkKGZhbHNlKTtcbiAgLy8gICBzZXRJc0FydGlzdE9wZW5lZCgocHJldlN0YXRlKSA9PiAhcHJldlN0YXRlKTtcbiAgLy8gfTtcblxuICB7LyogREFURSAqLyB9XG4gIC8vIGNvbnN0IFtpc0RhdGVPcGVuZWQsIHNldElzRGF0ZU9wZW5lZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIC8vIGNvbnN0IFt1bmlxdWVEYXRlc0NvdW50LCBzZXRVbmlxdWVEYXRlc0NvdW50XSA9IHVzZVN0YXRlKDApO1xuICAvLyBjb25zdCB1bmlxdWVEYXRlcyA9IHRyYWNrc1xuICAvLyAgID8gQXJyYXkuZnJvbShuZXcgU2V0KHRyYWNrcy5tYXAoKHRyYWNrOiBUcmFjaykgPT4gdHJhY2sucmVsZWFzZV9kYXRlKSkpXG4gIC8vICAgICAuZmlsdGVyKChyZWxlYXNlX2RhdGUpID0+IHJlbGVhc2VfZGF0ZSAhPT0gXCItXCIpXG4gIC8vICAgICAuc29ydCgoYSwgYikgPT4gKGEgJiYgYiA/IGEubG9jYWxlQ29tcGFyZShiKSA6IDApKVxuICAvLyAgIDogW107XG4gIC8vIGNvbnN0IGNvdW50VW5pcXVlRGF0ZXMgPSAoKSA9PiB7XG4gIC8vICAgaWYgKHRyYWNrcykge1xuICAvLyAgICAgc2V0VW5pcXVlRGF0ZXNDb3VudCh1bmlxdWVEYXRlcy5sZW5ndGgpO1xuICAvLyAgIH1cbiAgLy8gICByZXR1cm4gMDtcbiAgLy8gfTtcbiAgLy8gY29uc3QgdG9nZ2xlRGF0ZSA9ICgpID0+IHtcbiAgLy8gICBjb3VudFVuaXF1ZURhdGVzKCk7XG4gIC8vICAgc2V0SXNBcnRpc3RPcGVuZWQoZmFsc2UpO1xuICAvLyAgIHNldElzR2VucmVPcGVuZWQoZmFsc2UpO1xuICAvLyAgIHNldElzRGF0ZU9wZW5lZCgocHJldlN0YXRlKSA9PiAhcHJldlN0YXRlKTtcbiAgLy8gfTtcblxuICB7LyogR0VOUkUgKi8gfVxuICAvLyBjb25zdCBbaXNHZW5yZU9wZW5lZCwgc2V0SXNHZW5yZU9wZW5lZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIC8vIGNvbnN0IFt1bmlxdWVHZW5yZXNDb3VudCwgc2V0VW5pcXVlR2VucmVzQ291bnRdID0gdXNlU3RhdGUoMCk7XG4gIC8vIGNvbnN0IHVuaXF1ZUdlbnJlcyA9IHRyYWNrc1xuICAvLyAgID8gQXJyYXkuZnJvbShuZXcgU2V0KHRyYWNrcy5tYXAoKHRyYWNrOiBUcmFjaykgPT4gdHJhY2suZ2VucmUpKSlcbiAgLy8gICAgIC5maWx0ZXIoKGdlbnJlKSA9PiBnZW5yZSAhPT0gXCItXCIpXG4gIC8vICAgICAuc29ydCgoYSwgYikgPT4gKGEgJiYgYiA/IGEubG9jYWxlQ29tcGFyZShiKSA6IDApKVxuICAvLyAgIDogW107XG4gIC8vIGNvbnN0IGNvdW50VW5pcXVlR2VucmVzID0gKCkgPT4ge1xuICAvLyAgIGlmICh0cmFja3MpIHtcbiAgLy8gICAgIHNldFVuaXF1ZUdlbnJlc0NvdW50KHVuaXF1ZUdlbnJlcy5sZW5ndGgpO1xuICAvLyAgIH1cbiAgLy8gICByZXR1cm4gMDtcbiAgLy8gfTtcbiAgLy8gY29uc3QgdG9nZ2xlR2VucmUgPSAoKSA9PiB7XG4gIC8vICAgY291bnRVbmlxdWVHZW5yZXMoKTtcbiAgLy8gICBzZXRJc0FydGlzdE9wZW5lZChmYWxzZSk7XG4gIC8vICAgc2V0SXNEYXRlT3BlbmVkKGZhbHNlKTtcbiAgLy8gICBzZXRJc0dlbnJlT3BlbmVkKChwcmV2U3RhdGUpID0+ICFwcmV2U3RhdGUpO1xuICAvLyB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLmNlbnRlckJsb2NrRmlsdGVyLCBzdHlsZXMuZmlsdGVyKX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZpbHRlclRpdGxlfT5TZWFyY2ggZm9yOjwvZGl2PlxuXG4gICAgICA8YnV0dG9uXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLmZpbHRlckJ1dHRvbiwgc3R5bGVzLmJ1dHRvbkF1dGhvciwgc3R5bGVzLmJ0blRleHQsXG4gICAgICAgICAgLy8ge1xuICAgICAgICAgIC8vICAgW3N0eWxlcy5hY3RpdmVdOiBpc0FydGlzdE9wZW5lZCxcbiAgICAgICAgICAvLyB9XG4gICAgICAgICl9XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUZpbHRlckNsaWNrKFwiYXV0aG9yc1wiKX1cbiAgICAgID5cbiAgICAgICAgYXJ0aXN0XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMuZmlsdGVyQnV0dG9uLCBzdHlsZXMuYnV0dG9uQXV0aG9yLCBzdHlsZXMuYnRuVGV4dCxcbiAgICAgICAgICAvLyB7XG4gICAgICAgICAgLy8gICBbc3R5bGVzLmFjdGl2ZV06IGlzQXJ0aXN0T3BlbmVkLFxuICAgICAgICAgIC8vIH1cbiAgICAgICAgKX1cbiAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlRmlsdGVyQ2xpY2soXCJ5ZWFyc1wiKX1cbiAgICAgID5cbiAgICAgICAgcmVsZWFzZSBkYXRlXG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMuZmlsdGVyQnV0dG9uLCBzdHlsZXMuYnV0dG9uQXV0aG9yLCBzdHlsZXMuYnRuVGV4dCxcbiAgICAgICAgICAvLyB7XG4gICAgICAgICAgLy8gICBbc3R5bGVzLmFjdGl2ZV06IGlzQXJ0aXN0T3BlbmVkLFxuICAgICAgICAgIC8vIH1cbiAgICAgICAgKX1cbiAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlRmlsdGVyQ2xpY2soXCJnZW5yZVwiKX1cbiAgICAgID5cbiAgICAgICAgZ2VucmVcbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgICB7LyogQVJUSVNUXG4gICAgICB7dW5pcXVlQXJ0aXN0c0NvdW50ID4gMCAmJiBpc0FydGlzdE9wZW5lZCAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5Db3VudFBvcFVwLCBzdHlsZXMuYXJ0aXN0KX0+XG4gICAgICAgICAge3VuaXF1ZUFydGlzdHNDb3VudH1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAgPGJ1dHRvblxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5maWx0ZXJCdXR0b24sIHN0eWxlcy5idXR0b25BdXRob3IsIHN0eWxlcy5idG5UZXh0LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFtzdHlsZXMuYWN0aXZlXTogaXNBcnRpc3RPcGVuZWQsXG4gICAgICAgICAgfSl9XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZUFydGlzdCgpfVxuICAgICAgPlxuICAgICAgICBhcnRpc3RcbiAgICAgIDwvYnV0dG9uPlxuICAgICAge1xuICAgICAgICBpc0FydGlzdE9wZW5lZCAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5maWx0ZXJCeX0+XG4gICAgICAgICAgICB7dW5pcXVlQXJ0aXN0cy5sZW5ndGggPiAwID8gKFxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMuYXJ0aXN0TGlzdH0+XG4gICAgICAgICAgICAgICAge3VuaXF1ZUFydGlzdHMubWFwKChhcnRpc3QsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtzdHlsZXMuZmlsdGVyQnlQfT5cbiAgICAgICAgICAgICAgICAgICAge2FydGlzdH1cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5wbGF5bGlzdFRpdGxlQ29sfT5ObyBkYXRhLi4uPC9wPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICAgWUVBUiBcbiAgICAgIHt1bmlxdWVEYXRlc0NvdW50ID4gMCAmJiBpc0RhdGVPcGVuZWQgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMuQ291bnRQb3BVcCwgc3R5bGVzLnllYXIpfT5cbiAgICAgICAgICB7dW5pcXVlRGF0ZXNDb3VudH1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAgPGJ1dHRvblxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5maWx0ZXJCdXR0b24sIHN0eWxlcy5idXR0b25ZZWFyLCBzdHlsZXMuYnRuVGV4dCxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBbc3R5bGVzLmFjdGl2ZV06IGlzRGF0ZU9wZW5lZCxcbiAgICAgICAgICB9KX1cbiAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlRGF0ZSgpfVxuICAgICAgPlxuICAgICAgICByZWxlYXNlIGRhdGVcbiAgICAgIDwvYnV0dG9uPlxuICAgICAge1xuICAgICAgICBpc0RhdGVPcGVuZWQgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmlsdGVyQnl9PlxuICAgICAgICAgICAge3RyYWNrcyA/IChcbiAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHt1bmlxdWVEYXRlcy5tYXAoKHJlbGVhc2VfZGF0ZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9e3N0eWxlcy5maWx0ZXJCeVB9PlxuICAgICAgICAgICAgICAgICAgICB7cmVsZWFzZV9kYXRlfVxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnBsYXlsaXN0VGl0bGVDb2x9Pk5vIGRhdGEuLi48L3A+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgICBHRU5SRSBcbiAgICAgIHt1bmlxdWVHZW5yZXNDb3VudCA+IDAgJiYgaXNHZW5yZU9wZW5lZCAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5Db3VudFBvcFVwLCBzdHlsZXMuZ2VucmUpfT5cbiAgICAgICAgICB7dW5pcXVlR2VucmVzQ291bnR9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIDxidXR0b25cbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMuZmlsdGVyQnV0dG9uLCBzdHlsZXMuYnV0dG9uWWVhciwgc3R5bGVzLmJ0blRleHQsXG4gICAgICAgICAge1xuICAgICAgICAgICAgW3N0eWxlcy5hY3RpdmVdOiBpc0dlbnJlT3BlbmVkLFxuICAgICAgICAgIH0pfVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVHZW5yZSgpfVxuICAgICAgPlxuICAgICAgICBnZW5yZVxuICAgICAgPC9idXR0b24+XG4gICAgICB7XG4gICAgICAgIGlzR2VucmVPcGVuZWQgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmlsdGVyQnl9PlxuICAgICAgICAgICAge3RyYWNrcyA/IChcbiAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHt1bmlxdWVHZW5yZXMubWFwKChnZW5yZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9e3N0eWxlcy5maWx0ZXJCeVB9PlxuICAgICAgICAgICAgICAgICAgICB7Z2VucmV9XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucGxheWxpc3RUaXRsZUNvbH0+Tm8gZGF0YS4uLjwvcD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgIH0gKi99XG4gICAgPC9kaXYgPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJCbG9jazsiXSwibmFtZXMiOlsic3R5bGVzIiwiY2xhc3NOYW1lcyIsInVzZVN0YXRlIiwiRmlsdGVyQmxvY2siLCJhY3RpdmVGaWx0ZXIiLCJzZXRBY3RpdmVGaWx0ZXIiLCJoYW5kbGVGaWx0ZXJDbGljayIsIm5ld0ZpbHRlciIsInByZXYiLCJkaXYiLCJjbGFzc05hbWUiLCJjZW50ZXJCbG9ja0ZpbHRlciIsImZpbHRlciIsImZpbHRlclRpdGxlIiwiYnV0dG9uIiwidHlwZSIsImZpbHRlckJ1dHRvbiIsImJ1dHRvbkF1dGhvciIsImJ0blRleHQiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/FilterBlock/FilterBlock.tsx\n"));

/***/ })

});