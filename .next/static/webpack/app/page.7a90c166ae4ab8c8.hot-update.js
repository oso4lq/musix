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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FilterBlock.module.css */ \"(app-pages-browser)/./src/components/FilterBlock/FilterBlock.module.css\");\n/* harmony import */ var _FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _contexts_tracks_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/contexts/tracks-context */ \"(app-pages-browser)/./src/contexts/tracks-context.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst FilterBlock = ()=>{\n    _s();\n    const [isDateOpened, setIsDateOpened] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [isGenreOpened, setIsGenreOpened] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const { tracks } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_tracks_context__WEBPACK_IMPORTED_MODULE_3__.TracksContext);\n    const [buttonHovered, setButtonHovered] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    {}\n    const [isArtistOpened, setIsArtistOpened] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const uniqueArtists = tracks ? Array.from(new Set(tracks.map((track)=>track.author))).filter((author)=>author && author !== \"-\").sort((a, b)=>a && b ? a.localeCompare(b) : 0) : [];\n    const countUniqueArtists = ()=>{\n        if (tracks) {\n            // const uniqueArtists = Array.from(new Set(tracks.map((track: Track) => track.author)));\n            return uniqueArtists.length;\n        }\n        return 0;\n    };\n    const [uniqueArtistsCount, setUniqueArtistsCount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(countUniqueArtists());\n    const toggleArtist = ()=>{\n        setIsDateOpened(false);\n        setIsGenreOpened(false);\n        setIsArtistOpened((prevState)=>!prevState);\n    };\n    {}\n    const uniqueDates = tracks ? Array.from(new Set(tracks.map((track)=>track.release_date))).filter((release_date)=>release_date !== \"-\").sort((a, b)=>a && b ? a.localeCompare(b) : 0) : [];\n    const toggleDate = ()=>{\n        setIsArtistOpened(false);\n        setIsGenreOpened(false);\n        setIsDateOpened((prevState)=>!prevState);\n    };\n    {}\n    const uniqueGenres = tracks ? Array.from(new Set(tracks.map((track)=>track.genre))).filter((genre)=>genre !== \"-\").sort((a, b)=>a && b ? a.localeCompare(b) : 0) : [];\n    const toggleGenre = ()=>{\n        setIsArtistOpened(false);\n        setIsDateOpened(false);\n        setIsGenreOpened((prevState)=>!prevState);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().centerBlockFilter), (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().filter)),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().filterTitle),\n                children: \"Search for:\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, undefined),\n            uniqueArtistsCount > 0 && isArtistOpened && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().artistCountPopUp),\n                children: uniqueArtistsCount\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 70,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: toggleArtist,\n                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().filterButton), (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().buttonAuthor), (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().btnText)),\n                onMouseEnter: ()=>setButtonHovered(true),\n                onMouseLeave: ()=>setButtonHovered(false),\n                style: {\n                    borderColor: buttonHovered ? \"#AD61FF\" : \"#fff\",\n                    color: buttonHovered ? \"#AD61FF\" : \"#fff\"\n                },\n                children: \"artist\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, undefined),\n            isArtistOpened && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().filterBy),\n                children: uniqueArtists.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().artistList),\n                    children: uniqueArtists.map((artist, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().filterByP),\n                            children: artist\n                        }, index, false, {\n                            fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                            lineNumber: 96,\n                            columnNumber: 17\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                    lineNumber: 94,\n                    columnNumber: 13\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().playlistTitleCol),\n                    children: \"No data...\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                    lineNumber: 102,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 92,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: toggleDate,\n                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().filterButton), (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().buttonYear), (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().btnText)),\n                children: \"release date\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 107,\n                columnNumber: 7\n            }, undefined),\n            isDateOpened && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().filterBy),\n                children: tracks ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: uniqueDates.map((release_date, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().filterByP),\n                            children: release_date\n                        }, index, false, {\n                            fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                            lineNumber: 123,\n                            columnNumber: 19\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                    lineNumber: 121,\n                    columnNumber: 15\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().playlistTitleCol),\n                    children: \"No data...\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                    lineNumber: 129,\n                    columnNumber: 15\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 119,\n                columnNumber: 11\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: toggleGenre,\n                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().filterButton), (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().buttonGenre), (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().btnText)),\n                children: \"genre\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 134,\n                columnNumber: 7\n            }, undefined),\n            isGenreOpened && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().filterBy),\n                children: tracks ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: uniqueGenres.map((genre, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().filterByP),\n                            children: genre\n                        }, index, false, {\n                            fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                            lineNumber: 152,\n                            columnNumber: 19\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                    lineNumber: 150,\n                    columnNumber: 15\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().playlistTitleCol),\n                    children: \"No data...\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                    lineNumber: 158,\n                    columnNumber: 15\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 148,\n                columnNumber: 11\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n        lineNumber: 65,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FilterBlock, \"FTRBRGVO23KdyGYNSriABuqmWeQ=\");\n_c = FilterBlock;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FilterBlock);\nvar _c;\n$RefreshReg$(_c, \"FilterBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0ZpbHRlckJsb2NrL0ZpbHRlckJsb2NrLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE4QztBQUNWO0FBQ1M7QUFDYTtBQUcxRCxNQUFNSyxjQUF3Qjs7SUFFNUIsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR0osK0NBQVFBLENBQUM7SUFDakQsTUFBTSxDQUFDSyxlQUFlQyxpQkFBaUIsR0FBR04sK0NBQVFBLENBQUM7SUFFbkQsTUFBTSxFQUFFTyxNQUFNLEVBQUUsR0FBR1IsaURBQVVBLENBQUNFLG1FQUFhQTtJQUczQyxNQUFNLENBQUNPLGVBQWVDLGlCQUFpQixHQUFHVCwrQ0FBUUEsQ0FBQztJQUduRCxDQUFjO0lBQ2QsTUFBTSxDQUFDVSxnQkFBZ0JDLGtCQUFrQixHQUFHWCwrQ0FBUUEsQ0FBQztJQUNyRCxNQUFNWSxnQkFBZ0JMLFNBQ2xCTSxNQUFNQyxJQUFJLENBQUMsSUFBSUMsSUFBSVIsT0FBT1MsR0FBRyxDQUFDLENBQUNDLFFBQWlCQSxNQUFNQyxNQUFNLElBQzNEQyxNQUFNLENBQUMsQ0FBQ0QsU0FBV0EsVUFBVUEsV0FBVyxLQUN4Q0UsSUFBSSxDQUFDLENBQUNDLEdBQUdDLElBQU9ELEtBQUtDLElBQUlELEVBQUVFLGFBQWEsQ0FBQ0QsS0FBSyxLQUMvQyxFQUFFO0lBQ04sTUFBTUUscUJBQXFCO1FBQ3pCLElBQUlqQixRQUFRO1lBQ1YseUZBQXlGO1lBQ3pGLE9BQU9LLGNBQWNhLE1BQU07UUFDN0I7UUFDQSxPQUFPO0lBQ1Q7SUFDQSxNQUFNLENBQUNDLG9CQUFvQkMsc0JBQXNCLEdBQUczQiwrQ0FBUUEsQ0FBQ3dCO0lBQzdELE1BQU1JLGVBQWU7UUFDbkJ4QixnQkFBZ0I7UUFDaEJFLGlCQUFpQjtRQUNqQkssa0JBQWtCLENBQUNrQixZQUFjLENBQUNBO0lBQ3BDO0lBSUEsQ0FBWTtJQUNaLE1BQU1DLGNBQWN2QixTQUNoQk0sTUFBTUMsSUFBSSxDQUFD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QUNHO29CQUFFcEIsV0FBV3hDLGlGQUF1Qjs4QkFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNckQ7R0E3Sk1LO0tBQUFBO0FBK0pOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0ZpbHRlckJsb2NrL0ZpbHRlckJsb2NrLnRzeD9iNTZjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vRmlsdGVyQmxvY2subW9kdWxlLmNzc1wiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUcmFja3NDb250ZXh0IH0gZnJvbSBcIkAvY29udGV4dHMvdHJhY2tzLWNvbnRleHRcIjtcbmltcG9ydCB7IFRyYWNrIH0gZnJvbSBcIkAvaW50ZXJmYWNlcy9pbnRlcmZhY2VzXCI7XG5cbmNvbnN0IEZpbHRlckJsb2NrOiBSZWFjdC5GQyA9ICgpID0+IHtcblxuICBjb25zdCBbaXNEYXRlT3BlbmVkLCBzZXRJc0RhdGVPcGVuZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNHZW5yZU9wZW5lZCwgc2V0SXNHZW5yZU9wZW5lZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgeyB0cmFja3MgfSA9IHVzZUNvbnRleHQoVHJhY2tzQ29udGV4dCk7XG5cbiAgXG4gIGNvbnN0IFtidXR0b25Ib3ZlcmVkLCBzZXRCdXR0b25Ib3ZlcmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuXG4gIHsvKiBBUlRJU1QgKi8gfVxuICBjb25zdCBbaXNBcnRpc3RPcGVuZWQsIHNldElzQXJ0aXN0T3BlbmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgdW5pcXVlQXJ0aXN0cyA9IHRyYWNrc1xuICAgID8gQXJyYXkuZnJvbShuZXcgU2V0KHRyYWNrcy5tYXAoKHRyYWNrOiBUcmFjaykgPT4gdHJhY2suYXV0aG9yKSkpXG4gICAgICAuZmlsdGVyKChhdXRob3IpID0+IGF1dGhvciAmJiBhdXRob3IgIT09IFwiLVwiKVxuICAgICAgLnNvcnQoKGEsIGIpID0+IChhICYmIGIgPyBhLmxvY2FsZUNvbXBhcmUoYikgOiAwKSlcbiAgICA6IFtdO1xuICBjb25zdCBjb3VudFVuaXF1ZUFydGlzdHMgPSAoKSA9PiB7XG4gICAgaWYgKHRyYWNrcykge1xuICAgICAgLy8gY29uc3QgdW5pcXVlQXJ0aXN0cyA9IEFycmF5LmZyb20obmV3IFNldCh0cmFja3MubWFwKCh0cmFjazogVHJhY2spID0+IHRyYWNrLmF1dGhvcikpKTtcbiAgICAgIHJldHVybiB1bmlxdWVBcnRpc3RzLmxlbmd0aDtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG4gIH07XG4gIGNvbnN0IFt1bmlxdWVBcnRpc3RzQ291bnQsIHNldFVuaXF1ZUFydGlzdHNDb3VudF0gPSB1c2VTdGF0ZShjb3VudFVuaXF1ZUFydGlzdHMoKSk7XG4gIGNvbnN0IHRvZ2dsZUFydGlzdCA9ICgpID0+IHtcbiAgICBzZXRJc0RhdGVPcGVuZWQoZmFsc2UpO1xuICAgIHNldElzR2VucmVPcGVuZWQoZmFsc2UpO1xuICAgIHNldElzQXJ0aXN0T3BlbmVkKChwcmV2U3RhdGUpID0+ICFwcmV2U3RhdGUpO1xuICB9O1xuXG5cblxuICB7LyogREFURSAqLyB9XG4gIGNvbnN0IHVuaXF1ZURhdGVzID0gdHJhY2tzXG4gICAgPyBBcnJheS5mcm9tKG5ldyBTZXQodHJhY2tzLm1hcCgodHJhY2s6IFRyYWNrKSA9PiB0cmFjay5yZWxlYXNlX2RhdGUpKSlcbiAgICAgIC5maWx0ZXIoKHJlbGVhc2VfZGF0ZSkgPT4gcmVsZWFzZV9kYXRlICE9PSBcIi1cIilcbiAgICAgIC5zb3J0KChhLCBiKSA9PiAoYSAmJiBiID8gYS5sb2NhbGVDb21wYXJlKGIpIDogMCkpXG4gICAgOiBbXTtcbiAgY29uc3QgdG9nZ2xlRGF0ZSA9ICgpID0+IHtcbiAgICBzZXRJc0FydGlzdE9wZW5lZChmYWxzZSk7XG4gICAgc2V0SXNHZW5yZU9wZW5lZChmYWxzZSk7XG4gICAgc2V0SXNEYXRlT3BlbmVkKChwcmV2U3RhdGUpID0+ICFwcmV2U3RhdGUpO1xuICB9O1xuICB7LyogR0VOUkUgKi8gfVxuICBjb25zdCB1bmlxdWVHZW5yZXMgPSB0cmFja3NcbiAgICA/IEFycmF5LmZyb20obmV3IFNldCh0cmFja3MubWFwKCh0cmFjazogVHJhY2spID0+IHRyYWNrLmdlbnJlKSkpXG4gICAgICAuZmlsdGVyKChnZW5yZSkgPT4gZ2VucmUgIT09IFwiLVwiKVxuICAgICAgLnNvcnQoKGEsIGIpID0+IChhICYmIGIgPyBhLmxvY2FsZUNvbXBhcmUoYikgOiAwKSlcbiAgICA6IFtdO1xuICBjb25zdCB0b2dnbGVHZW5yZSA9ICgpID0+IHtcbiAgICBzZXRJc0FydGlzdE9wZW5lZChmYWxzZSk7XG4gICAgc2V0SXNEYXRlT3BlbmVkKGZhbHNlKTtcbiAgICBzZXRJc0dlbnJlT3BlbmVkKChwcmV2U3RhdGUpID0+ICFwcmV2U3RhdGUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLmNlbnRlckJsb2NrRmlsdGVyLCBzdHlsZXMuZmlsdGVyKX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZpbHRlclRpdGxlfT5TZWFyY2ggZm9yOjwvZGl2PlxuICAgICAgey8qIEFSVElTVCAqL31cblxuICAgICAge3VuaXF1ZUFydGlzdHNDb3VudCA+IDAgJiYgaXNBcnRpc3RPcGVuZWQgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFydGlzdENvdW50UG9wVXB9PlxuICAgICAgICAgIHt1bmlxdWVBcnRpc3RzQ291bnR9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cblxuICAgICAgPGRpdlxuICAgICAgICBvbkNsaWNrPXt0b2dnbGVBcnRpc3R9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgICBzdHlsZXMuZmlsdGVyQnV0dG9uLFxuICAgICAgICAgIHN0eWxlcy5idXR0b25BdXRob3IsXG4gICAgICAgICAgc3R5bGVzLmJ0blRleHRcbiAgICAgICAgKX1cbiAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRCdXR0b25Ib3ZlcmVkKHRydWUpfVxuICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldEJ1dHRvbkhvdmVyZWQoZmFsc2UpfVxuICAgICAgICBzdHlsZT17eyBib3JkZXJDb2xvcjogYnV0dG9uSG92ZXJlZCA/IFwiI0FENjFGRlwiIDogXCIjZmZmXCIsIGNvbG9yOiBidXR0b25Ib3ZlcmVkID8gXCIjQUQ2MUZGXCIgOiBcIiNmZmZcIiB9fVxuICAgICAgPlxuICAgICAgICBhcnRpc3RcbiAgICAgIDwvZGl2PlxuXG5cblxuICAgICAge2lzQXJ0aXN0T3BlbmVkICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5maWx0ZXJCeX0+XG4gICAgICAgICAge3VuaXF1ZUFydGlzdHMubGVuZ3RoID4gMCA/IChcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5hcnRpc3RMaXN0fT5cbiAgICAgICAgICAgICAge3VuaXF1ZUFydGlzdHMubWFwKChhcnRpc3QsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9IGNsYXNzTmFtZT17c3R5bGVzLmZpbHRlckJ5UH0+XG4gICAgICAgICAgICAgICAgICB7YXJ0aXN0fVxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucGxheWxpc3RUaXRsZUNvbH0+Tm8gZGF0YS4uLjwvcD5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICB7LyogREFURSAqL31cbiAgICAgIDxkaXZcbiAgICAgICAgb25DbGljaz17dG9nZ2xlRGF0ZX1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICAgIHN0eWxlcy5maWx0ZXJCdXR0b24sXG4gICAgICAgICAgc3R5bGVzLmJ1dHRvblllYXIsXG4gICAgICAgICAgc3R5bGVzLmJ0blRleHRcbiAgICAgICAgKX1cbiAgICAgID5cbiAgICAgICAgcmVsZWFzZSBkYXRlXG4gICAgICA8L2Rpdj5cbiAgICAgIHtcbiAgICAgICAgaXNEYXRlT3BlbmVkICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZpbHRlckJ5fT5cbiAgICAgICAgICAgIHt0cmFja3MgPyAoXG4gICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICB7dW5pcXVlRGF0ZXMubWFwKChyZWxlYXNlX2RhdGUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtzdHlsZXMuZmlsdGVyQnlQfT5cbiAgICAgICAgICAgICAgICAgICAge3JlbGVhc2VfZGF0ZX1cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5wbGF5bGlzdFRpdGxlQ29sfT5ObyBkYXRhLi4uPC9wPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIHsvKiBHRU5SRSAqL31cbiAgICAgIDxkaXZcbiAgICAgICAgb25DbGljaz17dG9nZ2xlR2VucmV9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgICBzdHlsZXMuZmlsdGVyQnV0dG9uLFxuXG4gICAgICAgICAgc3R5bGVzLmJ1dHRvbkdlbnJlLFxuXG4gICAgICAgICAgc3R5bGVzLmJ0blRleHRcbiAgICAgICAgKX1cbiAgICAgID5cbiAgICAgICAgZ2VucmVcbiAgICAgIDwvZGl2PlxuICAgICAge1xuICAgICAgICBpc0dlbnJlT3BlbmVkICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZpbHRlckJ5fT5cbiAgICAgICAgICAgIHt0cmFja3MgPyAoXG4gICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICB7dW5pcXVlR2VucmVzLm1hcCgoZ2VucmUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtzdHlsZXMuZmlsdGVyQnlQfT5cbiAgICAgICAgICAgICAgICAgICAge2dlbnJlfVxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnBsYXlsaXN0VGl0bGVDb2x9Pk5vIGRhdGEuLi48L3A+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJCbG9jazsiXSwibmFtZXMiOlsic3R5bGVzIiwiY2xhc3NOYW1lcyIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIlRyYWNrc0NvbnRleHQiLCJGaWx0ZXJCbG9jayIsImlzRGF0ZU9wZW5lZCIsInNldElzRGF0ZU9wZW5lZCIsImlzR2VucmVPcGVuZWQiLCJzZXRJc0dlbnJlT3BlbmVkIiwidHJhY2tzIiwiYnV0dG9uSG92ZXJlZCIsInNldEJ1dHRvbkhvdmVyZWQiLCJpc0FydGlzdE9wZW5lZCIsInNldElzQXJ0aXN0T3BlbmVkIiwidW5pcXVlQXJ0aXN0cyIsIkFycmF5IiwiZnJvbSIsIlNldCIsIm1hcCIsInRyYWNrIiwiYXV0aG9yIiwiZmlsdGVyIiwic29ydCIsImEiLCJiIiwibG9jYWxlQ29tcGFyZSIsImNvdW50VW5pcXVlQXJ0aXN0cyIsImxlbmd0aCIsInVuaXF1ZUFydGlzdHNDb3VudCIsInNldFVuaXF1ZUFydGlzdHNDb3VudCIsInRvZ2dsZUFydGlzdCIsInByZXZTdGF0ZSIsInVuaXF1ZURhdGVzIiwicmVsZWFzZV9kYXRlIiwidG9nZ2xlRGF0ZSIsInVuaXF1ZUdlbnJlcyIsImdlbnJlIiwidG9nZ2xlR2VucmUiLCJkaXYiLCJjbGFzc05hbWUiLCJjZW50ZXJCbG9ja0ZpbHRlciIsImZpbHRlclRpdGxlIiwiYXJ0aXN0Q291bnRQb3BVcCIsIm9uQ2xpY2siLCJmaWx0ZXJCdXR0b24iLCJidXR0b25BdXRob3IiLCJidG5UZXh0Iiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwic3R5bGUiLCJib3JkZXJDb2xvciIsImNvbG9yIiwiZmlsdGVyQnkiLCJ1bCIsImFydGlzdExpc3QiLCJhcnRpc3QiLCJpbmRleCIsImxpIiwiZmlsdGVyQnlQIiwicCIsInBsYXlsaXN0VGl0bGVDb2wiLCJidXR0b25ZZWFyIiwiYnV0dG9uR2VucmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/FilterBlock/FilterBlock.tsx\n"));

/***/ })

});