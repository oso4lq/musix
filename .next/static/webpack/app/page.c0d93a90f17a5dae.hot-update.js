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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FilterBlock.module.css */ \"(app-pages-browser)/./src/components/FilterBlock/FilterBlock.module.css\");\n/* harmony import */ var _FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _FilterBlockItem_FilterBlockItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../FilterBlockItem/FilterBlockItem */ \"(app-pages-browser)/./src/components/FilterBlockItem/FilterBlockItem.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst FilterBlock = ()=>{\n    _s();\n    // const { tracks } = useContext(TracksContext);\n    const [activeFilter, setActiveFilter] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const handleFilterClick = (newFilter)=>{\n        setActiveFilter((prev)=>newFilter === prev ? null : newFilter);\n    };\n    {}\n    // const [isArtistOpened, setIsArtistOpened] = useState(false);\n    // const [uniqueArtistsCount, setUniqueArtistsCount] = useState(0);\n    // const uniqueArtists = tracks\n    //   ? Array.from(new Set(tracks.map((track: Track) => track.author)))\n    //     .filter((author) => author && author !== \"-\")\n    //     .sort((a, b) => (a && b ? a.localeCompare(b) : 0))\n    //   : [];\n    // const countUniqueArtists = () => {\n    //   if (tracks) {\n    //     setUniqueArtistsCount(uniqueArtists.length);\n    //   }\n    //   return 0;\n    // };\n    // const toggleArtist = () => {\n    //   countUniqueArtists();\n    //   setIsDateOpened(false);\n    //   setIsGenreOpened(false);\n    //   setIsArtistOpened((prevState) => !prevState);\n    // };\n    {}\n    // const [isDateOpened, setIsDateOpened] = useState(false);\n    // const [uniqueDatesCount, setUniqueDatesCount] = useState(0);\n    // const uniqueDates = tracks\n    //   ? Array.from(new Set(tracks.map((track: Track) => track.release_date)))\n    //     .filter((release_date) => release_date !== \"-\")\n    //     .sort((a, b) => (a && b ? a.localeCompare(b) : 0))\n    //   : [];\n    // const countUniqueDates = () => {\n    //   if (tracks) {\n    //     setUniqueDatesCount(uniqueDates.length);\n    //   }\n    //   return 0;\n    // };\n    // const toggleDate = () => {\n    //   countUniqueDates();\n    //   setIsArtistOpened(false);\n    //   setIsGenreOpened(false);\n    //   setIsDateOpened((prevState) => !prevState);\n    // };\n    {}\n    // const [isGenreOpened, setIsGenreOpened] = useState(false);\n    // const [uniqueGenresCount, setUniqueGenresCount] = useState(0);\n    // const uniqueGenres = tracks\n    //   ? Array.from(new Set(tracks.map((track: Track) => track.genre)))\n    //     .filter((genre) => genre !== \"-\")\n    //     .sort((a, b) => (a && b ? a.localeCompare(b) : 0))\n    //   : [];\n    // const countUniqueGenres = () => {\n    //   if (tracks) {\n    //     setUniqueGenresCount(uniqueGenres.length);\n    //   }\n    //   return 0;\n    // };\n    // const toggleGenre = () => {\n    //   countUniqueGenres();\n    //   setIsArtistOpened(false);\n    //   setIsDateOpened(false);\n    //   setIsGenreOpened((prevState) => !prevState);\n    // };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().centerBlockFilter), (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().filter)),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().filterTitle),\n                children: \"Search for:\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterBlockItem_FilterBlockItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onClick: ()=>handleFilterClick(\"artists\"),\n                isOpened: activeFilter === \"artists\",\n                list: artists,\n                children: \"artist\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterBlockItem_FilterBlockItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onClick: ()=>handleFilterClick(\"years\"),\n                isOpened: activeFilter === \"years\",\n                list: years,\n                children: \"year\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterBlockItem_FilterBlockItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onClick: ()=>handleFilterClick(\"genres\"),\n                isOpened: activeFilter === \"genres\",\n                list: genres,\n                children: \"genre\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, undefined),\n            \"GENRE\",\n            uniqueGenresCount > 0 && isGenreOpened && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().CountPopUp), (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().genre)),\n                children: uniqueGenresCount\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 158,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"button\",\n                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().filterButton), (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().buttonYear), (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().btnText), {\n                    [(_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().active)]: isGenreOpened\n                }),\n                onClick: ()=>toggleGenre(),\n                children: \"genre\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 162,\n                columnNumber: 7\n            }, undefined),\n            isGenreOpened && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().filterBy),\n                children: tracks ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: uniqueGenres.map((genre, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().filterByP),\n                            children: genre\n                        }, index, false, {\n                            fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                            lineNumber: 178,\n                            columnNumber: 19\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                    lineNumber: 176,\n                    columnNumber: 15\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().playlistTitleCol),\n                    children: \"No data...\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                    lineNumber: 184,\n                    columnNumber: 15\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 174,\n                columnNumber: 11\n            }, undefined),\n            \" */}\"\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n        lineNumber: 81,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FilterBlock, \"Pi/x/VfDjO83yThHuaUv3Wf7Mbs=\");\n_c = FilterBlock;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FilterBlock);\nvar _c;\n$RefreshReg$(_c, \"FilterBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0ZpbHRlckJsb2NrL0ZpbHRlckJsb2NrLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE4QztBQUNWO0FBQ1M7QUFHb0I7QUFFakUsTUFBTUksY0FBd0I7O0lBRTVCLGdEQUFnRDtJQUVoRCxNQUFNLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHSiwrQ0FBUUEsQ0FBZ0I7SUFDaEUsTUFBTUssb0JBQW9CLENBQUNDO1FBQ3pCRixnQkFBZ0IsQ0FBQ0csT0FBU0QsY0FBY0MsT0FBTyxPQUFPRDtJQUN4RDtJQUVBLENBQWM7SUFDZCwrREFBK0Q7SUFDL0QsbUVBQW1FO0lBQ25FLCtCQUErQjtJQUMvQixzRUFBc0U7SUFDdEUsb0RBQW9EO0lBQ3BELHlEQUF5RDtJQUN6RCxVQUFVO0lBQ1YscUNBQXFDO0lBQ3JDLGtCQUFrQjtJQUNsQixtREFBbUQ7SUFDbkQsTUFBTTtJQUNOLGNBQWM7SUFDZCxLQUFLO0lBQ0wsK0JBQStCO0lBQy9CLDBCQUEwQjtJQUMxQiw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBQzdCLGtEQUFrRDtJQUNsRCxLQUFLO0lBRUwsQ0FBWTtJQUNaLDJEQUEyRDtJQUMzRCwrREFBK0Q7SUFDL0QsNkJBQTZCO0lBQzdCLDRFQUE0RTtJQUM1RSxzREFBc0Q7SUFDdEQseURBQXlEO0lBQ3pELFVBQVU7SUFDVixtQ0FBbUM7SUFDbkMsa0JBQWtCO0lBQ2xCLCtDQUErQztJQUMvQyxNQUFNO0lBQ04sY0FBYztJQUNkLEtBQUs7SUFDTCw2QkFBNkI7SUFDN0Isd0JBQXdCO0lBQ3hCLDhCQUE4QjtJQUM5Qiw2QkFBNkI7SUFDN0IsZ0RBQWdEO0lBQ2hELEtBQUs7SUFFTCxDQUFhO0lBQ2IsNkRBQTZEO0lBQzdELGlFQUFpRTtJQUNqRSw4QkFBOEI7SUFDOUIscUVBQXFFO0lBQ3JFLHdDQUF3QztJQUN4Qyx5REFBeUQ7SUFDekQsVUFBVTtJQUNWLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIsaURBQWlEO0lBQ2pELE1BQU07SUFDTixjQUFjO0lBQ2QsS0FBSztJQUNMLDhCQUE4QjtJQUM5Qix5QkFBeUI7SUFDekIsOEJBQThCO0lBQzlCLDRCQUE0QjtJQUM1QixpREFBaUQ7SUFDakQsS0FBSztJQUVMLHFCQUNFLDhEQUFDRTtRQUFJQyxXQUFXVixpREFBVUEsQ0FBQ0Qsa0ZBQXdCLEVBQUVBLHVFQUFhOzswQkFDaEUsOERBQUNVO2dCQUFJQyxXQUFXWCw0RUFBa0I7MEJBQUU7Ozs7OzswQkFFcEMsOERBQUNHLHdFQUFlQTtnQkFBQ1ksU0FBUyxJQUFNUixrQkFBa0I7Z0JBQVlTLFVBQVVYLGlCQUFpQjtnQkFBV1ksTUFBTUM7MEJBQVM7Ozs7OzswQkFDbkgsOERBQUNmLHdFQUFlQTtnQkFBQ1ksU0FBUyxJQUFNUixrQkFBa0I7Z0JBQVVTLFVBQVVYLGlCQUFpQjtnQkFBU1ksTUFBTUU7MEJBQU87Ozs7OzswQkFDN0csOERBQUNoQix3RUFBZUE7Z0JBQUNZLFNBQVMsSUFBTVIsa0JBQWtCO2dCQUFXUyxVQUFVWCxpQkFBaUI7Z0JBQVVZLE1BQU1HOzBCQUFROzs7Ozs7WUFvRTNHO1lBR0pDLG9CQUFvQixLQUFLQywrQkFDeEIsOERBQUNaO2dCQUFJQyxXQUFXVixpREFBVUEsQ0FBQ0QsMkVBQWlCLEVBQUVBLHNFQUFZOzBCQUN2RHFCOzs7Ozs7MEJBR0wsOERBQUNJO2dCQUNDQyxNQUFLO2dCQUNMZixXQUFXVixpREFBVUEsQ0FBQ0QsNkVBQW1CLEVBQUVBLDJFQUFpQixFQUFFQSx3RUFBYyxFQUMxRTtvQkFDRSxDQUFDQSx1RUFBYSxDQUFDLEVBQUVzQjtnQkFDbkI7Z0JBQ0ZQLFNBQVMsSUFBTWdCOzBCQUNoQjs7Ozs7O1lBSUNULCtCQUNFLDhEQUFDWjtnQkFBSUMsV0FBV1gseUVBQWU7MEJBQzVCaUMsdUJBQ0MsOERBQUNDOzhCQUNFQyxhQUFhQyxHQUFHLENBQUMsQ0FBQ1osT0FBT2Esc0JBQ3hCLDhEQUFDQzs0QkFBZTNCLFdBQVdYLDBFQUFnQjtzQ0FDeEN3QjsyQkFETWE7Ozs7Ozs7Ozs4Q0FNYiw4REFBQ0c7b0JBQUU3QixXQUFXWCxpRkFBdUI7OEJBQUU7Ozs7Ozs7Ozs7O1lBSTlDOzs7Ozs7O0FBR1A7R0F2TE1JO0tBQUFBO0FBeUxOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0ZpbHRlckJsb2NrL0ZpbHRlckJsb2NrLnRzeD9iNTZjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vRmlsdGVyQmxvY2subW9kdWxlLmNzc1wiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUcmFja3NDb250ZXh0IH0gZnJvbSBcIkAvY29udGV4dHMvdHJhY2tzLWNvbnRleHRcIjtcbmltcG9ydCB7IFRyYWNrIH0gZnJvbSBcIkAvaW50ZXJmYWNlcy9pbnRlcmZhY2VzXCI7XG5pbXBvcnQgRmlsdGVyQmxvY2tJdGVtIGZyb20gXCIuLi9GaWx0ZXJCbG9ja0l0ZW0vRmlsdGVyQmxvY2tJdGVtXCI7XG5cbmNvbnN0IEZpbHRlckJsb2NrOiBSZWFjdC5GQyA9ICgpID0+IHtcblxuICAvLyBjb25zdCB7IHRyYWNrcyB9ID0gdXNlQ29udGV4dChUcmFja3NDb250ZXh0KTtcblxuICBjb25zdCBbYWN0aXZlRmlsdGVyLCBzZXRBY3RpdmVGaWx0ZXJdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IGhhbmRsZUZpbHRlckNsaWNrID0gKG5ld0ZpbHRlcjogc3RyaW5nKSA9PiB7XG4gICAgc2V0QWN0aXZlRmlsdGVyKChwcmV2KSA9PiBuZXdGaWx0ZXIgPT09IHByZXYgPyBudWxsIDogbmV3RmlsdGVyKTtcbiAgfVxuXG4gIHsvKiBBUlRJU1QgKi8gfVxuICAvLyBjb25zdCBbaXNBcnRpc3RPcGVuZWQsIHNldElzQXJ0aXN0T3BlbmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgLy8gY29uc3QgW3VuaXF1ZUFydGlzdHNDb3VudCwgc2V0VW5pcXVlQXJ0aXN0c0NvdW50XSA9IHVzZVN0YXRlKDApO1xuICAvLyBjb25zdCB1bmlxdWVBcnRpc3RzID0gdHJhY2tzXG4gIC8vICAgPyBBcnJheS5mcm9tKG5ldyBTZXQodHJhY2tzLm1hcCgodHJhY2s6IFRyYWNrKSA9PiB0cmFjay5hdXRob3IpKSlcbiAgLy8gICAgIC5maWx0ZXIoKGF1dGhvcikgPT4gYXV0aG9yICYmIGF1dGhvciAhPT0gXCItXCIpXG4gIC8vICAgICAuc29ydCgoYSwgYikgPT4gKGEgJiYgYiA/IGEubG9jYWxlQ29tcGFyZShiKSA6IDApKVxuICAvLyAgIDogW107XG4gIC8vIGNvbnN0IGNvdW50VW5pcXVlQXJ0aXN0cyA9ICgpID0+IHtcbiAgLy8gICBpZiAodHJhY2tzKSB7XG4gIC8vICAgICBzZXRVbmlxdWVBcnRpc3RzQ291bnQodW5pcXVlQXJ0aXN0cy5sZW5ndGgpO1xuICAvLyAgIH1cbiAgLy8gICByZXR1cm4gMDtcbiAgLy8gfTtcbiAgLy8gY29uc3QgdG9nZ2xlQXJ0aXN0ID0gKCkgPT4ge1xuICAvLyAgIGNvdW50VW5pcXVlQXJ0aXN0cygpO1xuICAvLyAgIHNldElzRGF0ZU9wZW5lZChmYWxzZSk7XG4gIC8vICAgc2V0SXNHZW5yZU9wZW5lZChmYWxzZSk7XG4gIC8vICAgc2V0SXNBcnRpc3RPcGVuZWQoKHByZXZTdGF0ZSkgPT4gIXByZXZTdGF0ZSk7XG4gIC8vIH07XG5cbiAgey8qIERBVEUgKi8gfVxuICAvLyBjb25zdCBbaXNEYXRlT3BlbmVkLCBzZXRJc0RhdGVPcGVuZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAvLyBjb25zdCBbdW5pcXVlRGF0ZXNDb3VudCwgc2V0VW5pcXVlRGF0ZXNDb3VudF0gPSB1c2VTdGF0ZSgwKTtcbiAgLy8gY29uc3QgdW5pcXVlRGF0ZXMgPSB0cmFja3NcbiAgLy8gICA/IEFycmF5LmZyb20obmV3IFNldCh0cmFja3MubWFwKCh0cmFjazogVHJhY2spID0+IHRyYWNrLnJlbGVhc2VfZGF0ZSkpKVxuICAvLyAgICAgLmZpbHRlcigocmVsZWFzZV9kYXRlKSA9PiByZWxlYXNlX2RhdGUgIT09IFwiLVwiKVxuICAvLyAgICAgLnNvcnQoKGEsIGIpID0+IChhICYmIGIgPyBhLmxvY2FsZUNvbXBhcmUoYikgOiAwKSlcbiAgLy8gICA6IFtdO1xuICAvLyBjb25zdCBjb3VudFVuaXF1ZURhdGVzID0gKCkgPT4ge1xuICAvLyAgIGlmICh0cmFja3MpIHtcbiAgLy8gICAgIHNldFVuaXF1ZURhdGVzQ291bnQodW5pcXVlRGF0ZXMubGVuZ3RoKTtcbiAgLy8gICB9XG4gIC8vICAgcmV0dXJuIDA7XG4gIC8vIH07XG4gIC8vIGNvbnN0IHRvZ2dsZURhdGUgPSAoKSA9PiB7XG4gIC8vICAgY291bnRVbmlxdWVEYXRlcygpO1xuICAvLyAgIHNldElzQXJ0aXN0T3BlbmVkKGZhbHNlKTtcbiAgLy8gICBzZXRJc0dlbnJlT3BlbmVkKGZhbHNlKTtcbiAgLy8gICBzZXRJc0RhdGVPcGVuZWQoKHByZXZTdGF0ZSkgPT4gIXByZXZTdGF0ZSk7XG4gIC8vIH07XG5cbiAgey8qIEdFTlJFICovIH1cbiAgLy8gY29uc3QgW2lzR2VucmVPcGVuZWQsIHNldElzR2VucmVPcGVuZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAvLyBjb25zdCBbdW5pcXVlR2VucmVzQ291bnQsIHNldFVuaXF1ZUdlbnJlc0NvdW50XSA9IHVzZVN0YXRlKDApO1xuICAvLyBjb25zdCB1bmlxdWVHZW5yZXMgPSB0cmFja3NcbiAgLy8gICA/IEFycmF5LmZyb20obmV3IFNldCh0cmFja3MubWFwKCh0cmFjazogVHJhY2spID0+IHRyYWNrLmdlbnJlKSkpXG4gIC8vICAgICAuZmlsdGVyKChnZW5yZSkgPT4gZ2VucmUgIT09IFwiLVwiKVxuICAvLyAgICAgLnNvcnQoKGEsIGIpID0+IChhICYmIGIgPyBhLmxvY2FsZUNvbXBhcmUoYikgOiAwKSlcbiAgLy8gICA6IFtdO1xuICAvLyBjb25zdCBjb3VudFVuaXF1ZUdlbnJlcyA9ICgpID0+IHtcbiAgLy8gICBpZiAodHJhY2tzKSB7XG4gIC8vICAgICBzZXRVbmlxdWVHZW5yZXNDb3VudCh1bmlxdWVHZW5yZXMubGVuZ3RoKTtcbiAgLy8gICB9XG4gIC8vICAgcmV0dXJuIDA7XG4gIC8vIH07XG4gIC8vIGNvbnN0IHRvZ2dsZUdlbnJlID0gKCkgPT4ge1xuICAvLyAgIGNvdW50VW5pcXVlR2VucmVzKCk7XG4gIC8vICAgc2V0SXNBcnRpc3RPcGVuZWQoZmFsc2UpO1xuICAvLyAgIHNldElzRGF0ZU9wZW5lZChmYWxzZSk7XG4gIC8vICAgc2V0SXNHZW5yZU9wZW5lZCgocHJldlN0YXRlKSA9PiAhcHJldlN0YXRlKTtcbiAgLy8gfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5jZW50ZXJCbG9ja0ZpbHRlciwgc3R5bGVzLmZpbHRlcil9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5maWx0ZXJUaXRsZX0+U2VhcmNoIGZvcjo8L2Rpdj5cblxuICAgICAgPEZpbHRlckJsb2NrSXRlbSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVGaWx0ZXJDbGljayhcImFydGlzdHNcIil9IGlzT3BlbmVkPXthY3RpdmVGaWx0ZXIgPT09IFwiYXJ0aXN0c1wifSBsaXN0PXthcnRpc3RzfT5hcnRpc3Q8L0ZpbHRlckJsb2NrSXRlbT5cbiAgICAgIDxGaWx0ZXJCbG9ja0l0ZW0gb25DbGljaz17KCkgPT4gaGFuZGxlRmlsdGVyQ2xpY2soXCJ5ZWFyc1wiKX0gaXNPcGVuZWQ9e2FjdGl2ZUZpbHRlciA9PT0gXCJ5ZWFyc1wifSBsaXN0PXt5ZWFyc30+eWVhcjwvRmlsdGVyQmxvY2tJdGVtPlxuICAgICAgPEZpbHRlckJsb2NrSXRlbSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVGaWx0ZXJDbGljayhcImdlbnJlc1wiKX0gaXNPcGVuZWQ9e2FjdGl2ZUZpbHRlciA9PT0gXCJnZW5yZXNcIn0gbGlzdD17Z2VucmVzfT5nZW5yZTwvRmlsdGVyQmxvY2tJdGVtPlxuXG4gICAgICB7LyogQVJUSVNUXG4gICAgICB7dW5pcXVlQXJ0aXN0c0NvdW50ID4gMCAmJiBpc0FydGlzdE9wZW5lZCAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5Db3VudFBvcFVwLCBzdHlsZXMuYXJ0aXN0KX0+XG4gICAgICAgICAge3VuaXF1ZUFydGlzdHNDb3VudH1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAgPGJ1dHRvblxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5maWx0ZXJCdXR0b24sIHN0eWxlcy5idXR0b25BdXRob3IsIHN0eWxlcy5idG5UZXh0LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFtzdHlsZXMuYWN0aXZlXTogaXNBcnRpc3RPcGVuZWQsXG4gICAgICAgICAgfSl9XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZUFydGlzdCgpfVxuICAgICAgPlxuICAgICAgICBhcnRpc3RcbiAgICAgIDwvYnV0dG9uPlxuICAgICAge1xuICAgICAgICBpc0FydGlzdE9wZW5lZCAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5maWx0ZXJCeX0+XG4gICAgICAgICAgICB7dW5pcXVlQXJ0aXN0cy5sZW5ndGggPiAwID8gKFxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMuYXJ0aXN0TGlzdH0+XG4gICAgICAgICAgICAgICAge3VuaXF1ZUFydGlzdHMubWFwKChhcnRpc3QsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtzdHlsZXMuZmlsdGVyQnlQfT5cbiAgICAgICAgICAgICAgICAgICAge2FydGlzdH1cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5wbGF5bGlzdFRpdGxlQ29sfT5ObyBkYXRhLi4uPC9wPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICAgfSAqL31cblxuICAgICAgey8qIFlFQVIgXG4gICAgICB7dW5pcXVlRGF0ZXNDb3VudCA+IDAgJiYgaXNEYXRlT3BlbmVkICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLkNvdW50UG9wVXAsIHN0eWxlcy55ZWFyKX0+XG4gICAgICAgICAge3VuaXF1ZURhdGVzQ291bnR9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIDxidXR0b25cbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMuZmlsdGVyQnV0dG9uLCBzdHlsZXMuYnV0dG9uWWVhciwgc3R5bGVzLmJ0blRleHQsXG4gICAgICAgICAge1xuICAgICAgICAgICAgW3N0eWxlcy5hY3RpdmVdOiBpc0RhdGVPcGVuZWQsXG4gICAgICAgICAgfSl9XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZURhdGUoKX1cbiAgICAgID5cbiAgICAgICAgcmVsZWFzZSBkYXRlXG4gICAgICA8L2J1dHRvbj5cbiAgICAgIHtcbiAgICAgICAgaXNEYXRlT3BlbmVkICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZpbHRlckJ5fT5cbiAgICAgICAgICAgIHt0cmFja3MgPyAoXG4gICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICB7dW5pcXVlRGF0ZXMubWFwKChyZWxlYXNlX2RhdGUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtzdHlsZXMuZmlsdGVyQnlQfT5cbiAgICAgICAgICAgICAgICAgICAge3JlbGVhc2VfZGF0ZX1cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5wbGF5bGlzdFRpdGxlQ29sfT5ObyBkYXRhLi4uPC9wPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICAgfSAqL31cblxuICAgICAgIEdFTlJFIFxuICAgICAge3VuaXF1ZUdlbnJlc0NvdW50ID4gMCAmJiBpc0dlbnJlT3BlbmVkICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLkNvdW50UG9wVXAsIHN0eWxlcy5nZW5yZSl9PlxuICAgICAgICAgIHt1bmlxdWVHZW5yZXNDb3VudH1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAgPGJ1dHRvblxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5maWx0ZXJCdXR0b24sIHN0eWxlcy5idXR0b25ZZWFyLCBzdHlsZXMuYnRuVGV4dCxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBbc3R5bGVzLmFjdGl2ZV06IGlzR2VucmVPcGVuZWQsXG4gICAgICAgICAgfSl9XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZUdlbnJlKCl9XG4gICAgICA+XG4gICAgICAgIGdlbnJlXG4gICAgICA8L2J1dHRvbj5cbiAgICAgIHtcbiAgICAgICAgaXNHZW5yZU9wZW5lZCAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5maWx0ZXJCeX0+XG4gICAgICAgICAgICB7dHJhY2tzID8gKFxuICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge3VuaXF1ZUdlbnJlcy5tYXAoKGdlbnJlLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9IGNsYXNzTmFtZT17c3R5bGVzLmZpbHRlckJ5UH0+XG4gICAgICAgICAgICAgICAgICAgIHtnZW5yZX1cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5wbGF5bGlzdFRpdGxlQ29sfT5ObyBkYXRhLi4uPC9wPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICAgfSAqL31cbiAgICA8L2RpdiA+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZpbHRlckJsb2NrOyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJjbGFzc05hbWVzIiwidXNlU3RhdGUiLCJGaWx0ZXJCbG9ja0l0ZW0iLCJGaWx0ZXJCbG9jayIsImFjdGl2ZUZpbHRlciIsInNldEFjdGl2ZUZpbHRlciIsImhhbmRsZUZpbHRlckNsaWNrIiwibmV3RmlsdGVyIiwicHJldiIsImRpdiIsImNsYXNzTmFtZSIsImNlbnRlckJsb2NrRmlsdGVyIiwiZmlsdGVyIiwiZmlsdGVyVGl0bGUiLCJvbkNsaWNrIiwiaXNPcGVuZWQiLCJsaXN0IiwiYXJ0aXN0cyIsInllYXJzIiwiZ2VucmVzIiwidW5pcXVlR2VucmVzQ291bnQiLCJpc0dlbnJlT3BlbmVkIiwiQ291bnRQb3BVcCIsImdlbnJlIiwiYnV0dG9uIiwidHlwZSIsImZpbHRlckJ1dHRvbiIsImJ1dHRvblllYXIiLCJidG5UZXh0IiwiYWN0aXZlIiwidG9nZ2xlR2VucmUiLCJmaWx0ZXJCeSIsInRyYWNrcyIsInVsIiwidW5pcXVlR2VucmVzIiwibWFwIiwiaW5kZXgiLCJsaSIsImZpbHRlckJ5UCIsInAiLCJwbGF5bGlzdFRpdGxlQ29sIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/FilterBlock/FilterBlock.tsx\n"));

/***/ })

});