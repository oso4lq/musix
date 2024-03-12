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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FilterBlock.module.css */ \"(app-pages-browser)/./src/components/FilterBlock/FilterBlock.module.css\");\n/* harmony import */ var _FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _contexts_tracks_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/contexts/tracks-context */ \"(app-pages-browser)/./src/contexts/tracks-context.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst FilterBlock = ()=>{\n    _s();\n    const { tracks } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_tracks_context__WEBPACK_IMPORTED_MODULE_3__.TracksContext);\n    const [buttonHovered, setButtonHovered] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    {}\n    const [isArtistOpened, setIsArtistOpened] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [uniqueArtistsCount, setUniqueArtistsCount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const uniqueArtists = tracks ? Array.from(new Set(tracks.map((track)=>track.author))).filter((author)=>author && author !== \"-\").sort((a, b)=>a && b ? a.localeCompare(b) : 0) : [];\n    const countUniqueArtists = ()=>{\n        if (tracks) {\n            // const uniqueArtists = Array.from(new Set(tracks.map((track: Track) => track.author)));\n            setUniqueArtistsCount(uniqueArtists.length);\n        }\n        return 0;\n    };\n    const toggleArtist = ()=>{\n        countUniqueArtists();\n        setIsDateOpened(false);\n        setIsGenreOpened(false);\n        setIsArtistOpened((prevState)=>!prevState);\n    };\n    {}\n    const [isDateOpened, setIsDateOpened] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const uniqueDates = tracks ? Array.from(new Set(tracks.map((track)=>track.release_date))).filter((release_date)=>release_date !== \"-\").sort((a, b)=>a && b ? a.localeCompare(b) : 0) : [];\n    const toggleDate = ()=>{\n        setIsArtistOpened(false);\n        setIsGenreOpened(false);\n        setIsDateOpened((prevState)=>!prevState);\n    };\n    {}\n    const [isGenreOpened, setIsGenreOpened] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const uniqueGenres = tracks ? Array.from(new Set(tracks.map((track)=>track.genre))).filter((genre)=>genre !== \"-\").sort((a, b)=>a && b ? a.localeCompare(b) : 0) : [];\n    const toggleGenre = ()=>{\n        setIsArtistOpened(false);\n        setIsDateOpened(false);\n        setIsGenreOpened((prevState)=>!prevState);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().centerBlockFilter), (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().filter)),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().filterTitle),\n                children: \"Search for:\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, undefined),\n            uniqueArtistsCount > 0 && isArtistOpened && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().artistCountPopUp)\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 68,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: toggleArtist,\n                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().filterButton), (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().buttonAuthor), (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().btnText)),\n                onMouseEnter: ()=>setButtonHovered(true),\n                onMouseLeave: ()=>setButtonHovered(false),\n                style: {\n                    borderColor: buttonHovered ? \"#AD61FF\" : \"#fff\",\n                    color: buttonHovered ? \"#AD61FF\" : \"#fff\"\n                },\n                children: [\n                    \"artist - \",\n                    uniqueArtistsCount\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, undefined),\n            isArtistOpened && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().filterBy),\n                children: uniqueArtists.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().artistList),\n                    children: uniqueArtists.map((artist, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().filterByP),\n                            children: artist\n                        }, index, false, {\n                            fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                            lineNumber: 95,\n                            columnNumber: 17\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                    lineNumber: 93,\n                    columnNumber: 13\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().playlistTitleCol),\n                    children: \"No data...\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                    lineNumber: 101,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 91,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: toggleDate,\n                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().filterButton), (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().buttonYear), (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().btnText)),\n                children: \"release date\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 107,\n                columnNumber: 7\n            }, undefined),\n            isDateOpened && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().filterBy),\n                children: tracks ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: uniqueDates.map((release_date, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().filterByP),\n                            children: release_date\n                        }, index, false, {\n                            fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                            lineNumber: 123,\n                            columnNumber: 19\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                    lineNumber: 121,\n                    columnNumber: 15\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().playlistTitleCol),\n                    children: \"No data...\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                    lineNumber: 129,\n                    columnNumber: 15\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 119,\n                columnNumber: 11\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: toggleGenre,\n                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().filterButton), (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().buttonGenre), (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().btnText)),\n                children: \"genre\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 135,\n                columnNumber: 7\n            }, undefined),\n            isGenreOpened && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().filterBy),\n                children: tracks ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: uniqueGenres.map((genre, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().filterByP),\n                            children: genre\n                        }, index, false, {\n                            fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                            lineNumber: 153,\n                            columnNumber: 19\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                    lineNumber: 151,\n                    columnNumber: 15\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().playlistTitleCol),\n                    children: \"No data...\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                    lineNumber: 159,\n                    columnNumber: 15\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 149,\n                columnNumber: 11\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n        lineNumber: 63,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FilterBlock, \"tbuhS2dS24x65vsBqB6AKpbiPoc=\");\n_c = FilterBlock;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FilterBlock);\nvar _c;\n$RefreshReg$(_c, \"FilterBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0ZpbHRlckJsb2NrL0ZpbHRlckJsb2NrLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE4QztBQUNWO0FBQ1M7QUFDYTtBQUcxRCxNQUFNSyxjQUF3Qjs7SUFFNUIsTUFBTSxFQUFFQyxNQUFNLEVBQUUsR0FBR0osaURBQVVBLENBQUNFLG1FQUFhQTtJQUUzQyxNQUFNLENBQUNHLGVBQWVDLGlCQUFpQixHQUFHTCwrQ0FBUUEsQ0FBQztJQUVuRCxDQUFjO0lBQ2QsTUFBTSxDQUFDTSxnQkFBZ0JDLGtCQUFrQixHQUFHUCwrQ0FBUUEsQ0FBQztJQUNyRCxNQUFNLENBQUNRLG9CQUFvQkMsc0JBQXNCLEdBQUdULCtDQUFRQSxDQUFDO0lBQzdELE1BQU1VLGdCQUFnQlAsU0FDbEJRLE1BQU1DLElBQUksQ0FBQyxJQUFJQyxJQUFJVixPQUFPVyxHQUFHLENBQUMsQ0FBQ0MsUUFBaUJBLE1BQU1DLE1BQU0sSUFDM0RDLE1BQU0sQ0FBQyxDQUFDRCxTQUFXQSxVQUFVQSxXQUFXLEtBQ3hDRSxJQUFJLENBQUMsQ0FBQ0MsR0FBR0MsSUFBT0QsS0FBS0MsSUFBSUQsRUFBRUUsYUFBYSxDQUFDRCxLQUFLLEtBQy9DLEVBQUU7SUFDTixNQUFNRSxxQkFBcUI7UUFDekIsSUFBSW5CLFFBQVE7WUFDVix5RkFBeUY7WUFDekZNLHNCQUFzQkMsY0FBY2EsTUFBTTtRQUM1QztRQUNBLE9BQU87SUFDVDtJQUNBLE1BQU1DLGVBQWU7UUFDbkJGO1FBQ0FHLGdCQUFnQjtRQUNoQkMsaUJBQWlCO1FBQ2pCbkIsa0JBQWtCLENBQUNvQixZQUFjLENBQUNBO0lBQ3BDO0lBSUEsQ0FBWTtJQUNaLE1BQU0sQ0FBQ0MsY0FBY0gsZ0JBQWdCLEdBQUd6QiwrQ0FBUUEsQ0FBQztJQUNqRCxNQUFNNkIsY0FBYzFCLFNBQ2hCUSxNQUFNQyxJQUFJLENBQUMsSUFBSUMsSUFBSVYsT0FBT1csR0FBRyxDQUFDLENBQUNDLFFBQWlC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Ozs7Ozs7OENBTWIsOERBQUNHO29CQUFFcEIsV0FBV3hDLGlGQUF1Qjs4QkFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNckQ7R0E5Sk1LO0tBQUFBO0FBZ0tOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0ZpbHRlckJsb2NrL0ZpbHRlckJsb2NrLnRzeD9iNTZjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vRmlsdGVyQmxvY2subW9kdWxlLmNzc1wiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUcmFja3NDb250ZXh0IH0gZnJvbSBcIkAvY29udGV4dHMvdHJhY2tzLWNvbnRleHRcIjtcbmltcG9ydCB7IFRyYWNrIH0gZnJvbSBcIkAvaW50ZXJmYWNlcy9pbnRlcmZhY2VzXCI7XG5cbmNvbnN0IEZpbHRlckJsb2NrOiBSZWFjdC5GQyA9ICgpID0+IHtcblxuICBjb25zdCB7IHRyYWNrcyB9ID0gdXNlQ29udGV4dChUcmFja3NDb250ZXh0KTtcblxuICBjb25zdCBbYnV0dG9uSG92ZXJlZCwgc2V0QnV0dG9uSG92ZXJlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgey8qIEFSVElTVCAqLyB9XG4gIGNvbnN0IFtpc0FydGlzdE9wZW5lZCwgc2V0SXNBcnRpc3RPcGVuZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbdW5pcXVlQXJ0aXN0c0NvdW50LCBzZXRVbmlxdWVBcnRpc3RzQ291bnRdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IHVuaXF1ZUFydGlzdHMgPSB0cmFja3NcbiAgICA/IEFycmF5LmZyb20obmV3IFNldCh0cmFja3MubWFwKCh0cmFjazogVHJhY2spID0+IHRyYWNrLmF1dGhvcikpKVxuICAgICAgLmZpbHRlcigoYXV0aG9yKSA9PiBhdXRob3IgJiYgYXV0aG9yICE9PSBcIi1cIilcbiAgICAgIC5zb3J0KChhLCBiKSA9PiAoYSAmJiBiID8gYS5sb2NhbGVDb21wYXJlKGIpIDogMCkpXG4gICAgOiBbXTtcbiAgY29uc3QgY291bnRVbmlxdWVBcnRpc3RzID0gKCkgPT4ge1xuICAgIGlmICh0cmFja3MpIHtcbiAgICAgIC8vIGNvbnN0IHVuaXF1ZUFydGlzdHMgPSBBcnJheS5mcm9tKG5ldyBTZXQodHJhY2tzLm1hcCgodHJhY2s6IFRyYWNrKSA9PiB0cmFjay5hdXRob3IpKSk7XG4gICAgICBzZXRVbmlxdWVBcnRpc3RzQ291bnQodW5pcXVlQXJ0aXN0cy5sZW5ndGgpO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbiAgfTtcbiAgY29uc3QgdG9nZ2xlQXJ0aXN0ID0gKCkgPT4ge1xuICAgIGNvdW50VW5pcXVlQXJ0aXN0cygpO1xuICAgIHNldElzRGF0ZU9wZW5lZChmYWxzZSk7XG4gICAgc2V0SXNHZW5yZU9wZW5lZChmYWxzZSk7XG4gICAgc2V0SXNBcnRpc3RPcGVuZWQoKHByZXZTdGF0ZSkgPT4gIXByZXZTdGF0ZSk7XG4gIH07XG5cblxuXG4gIHsvKiBEQVRFICovIH1cbiAgY29uc3QgW2lzRGF0ZU9wZW5lZCwgc2V0SXNEYXRlT3BlbmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgdW5pcXVlRGF0ZXMgPSB0cmFja3NcbiAgICA/IEFycmF5LmZyb20obmV3IFNldCh0cmFja3MubWFwKCh0cmFjazogVHJhY2spID0+IHRyYWNrLnJlbGVhc2VfZGF0ZSkpKVxuICAgICAgLmZpbHRlcigocmVsZWFzZV9kYXRlKSA9PiByZWxlYXNlX2RhdGUgIT09IFwiLVwiKVxuICAgICAgLnNvcnQoKGEsIGIpID0+IChhICYmIGIgPyBhLmxvY2FsZUNvbXBhcmUoYikgOiAwKSlcbiAgICA6IFtdO1xuICBjb25zdCB0b2dnbGVEYXRlID0gKCkgPT4ge1xuICAgIHNldElzQXJ0aXN0T3BlbmVkKGZhbHNlKTtcbiAgICBzZXRJc0dlbnJlT3BlbmVkKGZhbHNlKTtcbiAgICBzZXRJc0RhdGVPcGVuZWQoKHByZXZTdGF0ZSkgPT4gIXByZXZTdGF0ZSk7XG4gIH07XG4gIHsvKiBHRU5SRSAqLyB9XG4gIGNvbnN0IFtpc0dlbnJlT3BlbmVkLCBzZXRJc0dlbnJlT3BlbmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgdW5pcXVlR2VucmVzID0gdHJhY2tzXG4gICAgPyBBcnJheS5mcm9tKG5ldyBTZXQodHJhY2tzLm1hcCgodHJhY2s6IFRyYWNrKSA9PiB0cmFjay5nZW5yZSkpKVxuICAgICAgLmZpbHRlcigoZ2VucmUpID0+IGdlbnJlICE9PSBcIi1cIilcbiAgICAgIC5zb3J0KChhLCBiKSA9PiAoYSAmJiBiID8gYS5sb2NhbGVDb21wYXJlKGIpIDogMCkpXG4gICAgOiBbXTtcbiAgY29uc3QgdG9nZ2xlR2VucmUgPSAoKSA9PiB7XG4gICAgc2V0SXNBcnRpc3RPcGVuZWQoZmFsc2UpO1xuICAgIHNldElzRGF0ZU9wZW5lZChmYWxzZSk7XG4gICAgc2V0SXNHZW5yZU9wZW5lZCgocHJldlN0YXRlKSA9PiAhcHJldlN0YXRlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5jZW50ZXJCbG9ja0ZpbHRlciwgc3R5bGVzLmZpbHRlcil9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5maWx0ZXJUaXRsZX0+U2VhcmNoIGZvcjo8L2Rpdj5cblxuICAgICAgey8qIEFSVElTVCAqL31cbiAgICAgIHt1bmlxdWVBcnRpc3RzQ291bnQgPiAwICYmIGlzQXJ0aXN0T3BlbmVkICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hcnRpc3RDb3VudFBvcFVwfT5cbiAgICAgICAgICB7Lyoge3VuaXF1ZUFydGlzdHNDb3VudH0gKi99XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cblxuXG5cbiAgICAgIDxkaXZcbiAgICAgICAgb25DbGljaz17dG9nZ2xlQXJ0aXN0fVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgICAgc3R5bGVzLmZpbHRlckJ1dHRvbixcbiAgICAgICAgICBzdHlsZXMuYnV0dG9uQXV0aG9yLFxuICAgICAgICAgIHN0eWxlcy5idG5UZXh0XG4gICAgICAgICl9XG4gICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0QnV0dG9uSG92ZXJlZCh0cnVlKX1cbiAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRCdXR0b25Ib3ZlcmVkKGZhbHNlKX1cbiAgICAgICAgc3R5bGU9e3sgYm9yZGVyQ29sb3I6IGJ1dHRvbkhvdmVyZWQgPyBcIiNBRDYxRkZcIiA6IFwiI2ZmZlwiLCBjb2xvcjogYnV0dG9uSG92ZXJlZCA/IFwiI0FENjFGRlwiIDogXCIjZmZmXCIgfX1cbiAgICAgID5cbiAgICAgICAgYXJ0aXN0IC0ge3VuaXF1ZUFydGlzdHNDb3VudH1cblxuICAgICAgPC9kaXY+XG5cbiAgICAgIHtpc0FydGlzdE9wZW5lZCAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmlsdGVyQnl9PlxuICAgICAgICAgIHt1bmlxdWVBcnRpc3RzLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMuYXJ0aXN0TGlzdH0+XG4gICAgICAgICAgICAgIHt1bmlxdWVBcnRpc3RzLm1hcCgoYXJ0aXN0LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9e3N0eWxlcy5maWx0ZXJCeVB9PlxuICAgICAgICAgICAgICAgICAge2FydGlzdH1cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnBsYXlsaXN0VGl0bGVDb2x9Pk5vIGRhdGEuLi48L3A+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICB7LyogREFURSAqL31cbiAgICAgIDxkaXZcbiAgICAgICAgb25DbGljaz17dG9nZ2xlRGF0ZX1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICAgIHN0eWxlcy5maWx0ZXJCdXR0b24sXG4gICAgICAgICAgc3R5bGVzLmJ1dHRvblllYXIsXG4gICAgICAgICAgc3R5bGVzLmJ0blRleHRcbiAgICAgICAgKX1cbiAgICAgID5cbiAgICAgICAgcmVsZWFzZSBkYXRlXG4gICAgICA8L2Rpdj5cbiAgICAgIHtcbiAgICAgICAgaXNEYXRlT3BlbmVkICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZpbHRlckJ5fT5cbiAgICAgICAgICAgIHt0cmFja3MgPyAoXG4gICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICB7dW5pcXVlRGF0ZXMubWFwKChyZWxlYXNlX2RhdGUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtzdHlsZXMuZmlsdGVyQnlQfT5cbiAgICAgICAgICAgICAgICAgICAge3JlbGVhc2VfZGF0ZX1cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5wbGF5bGlzdFRpdGxlQ29sfT5ObyBkYXRhLi4uPC9wPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cblxuICAgICAgey8qIEdFTlJFICovfVxuICAgICAgPGRpdlxuICAgICAgICBvbkNsaWNrPXt0b2dnbGVHZW5yZX1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICAgIHN0eWxlcy5maWx0ZXJCdXR0b24sXG5cbiAgICAgICAgICBzdHlsZXMuYnV0dG9uR2VucmUsXG5cbiAgICAgICAgICBzdHlsZXMuYnRuVGV4dFxuICAgICAgICApfVxuICAgICAgPlxuICAgICAgICBnZW5yZVxuICAgICAgPC9kaXY+XG4gICAgICB7XG4gICAgICAgIGlzR2VucmVPcGVuZWQgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmlsdGVyQnl9PlxuICAgICAgICAgICAge3RyYWNrcyA/IChcbiAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHt1bmlxdWVHZW5yZXMubWFwKChnZW5yZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9e3N0eWxlcy5maWx0ZXJCeVB9PlxuICAgICAgICAgICAgICAgICAgICB7Z2VucmV9XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucGxheWxpc3RUaXRsZUNvbH0+Tm8gZGF0YS4uLjwvcD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZpbHRlckJsb2NrOyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJjbGFzc05hbWVzIiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwiVHJhY2tzQ29udGV4dCIsIkZpbHRlckJsb2NrIiwidHJhY2tzIiwiYnV0dG9uSG92ZXJlZCIsInNldEJ1dHRvbkhvdmVyZWQiLCJpc0FydGlzdE9wZW5lZCIsInNldElzQXJ0aXN0T3BlbmVkIiwidW5pcXVlQXJ0aXN0c0NvdW50Iiwic2V0VW5pcXVlQXJ0aXN0c0NvdW50IiwidW5pcXVlQXJ0aXN0cyIsIkFycmF5IiwiZnJvbSIsIlNldCIsIm1hcCIsInRyYWNrIiwiYXV0aG9yIiwiZmlsdGVyIiwic29ydCIsImEiLCJiIiwibG9jYWxlQ29tcGFyZSIsImNvdW50VW5pcXVlQXJ0aXN0cyIsImxlbmd0aCIsInRvZ2dsZUFydGlzdCIsInNldElzRGF0ZU9wZW5lZCIsInNldElzR2VucmVPcGVuZWQiLCJwcmV2U3RhdGUiLCJpc0RhdGVPcGVuZWQiLCJ1bmlxdWVEYXRlcyIsInJlbGVhc2VfZGF0ZSIsInRvZ2dsZURhdGUiLCJpc0dlbnJlT3BlbmVkIiwidW5pcXVlR2VucmVzIiwiZ2VucmUiLCJ0b2dnbGVHZW5yZSIsImRpdiIsImNsYXNzTmFtZSIsImNlbnRlckJsb2NrRmlsdGVyIiwiZmlsdGVyVGl0bGUiLCJhcnRpc3RDb3VudFBvcFVwIiwib25DbGljayIsImZpbHRlckJ1dHRvbiIsImJ1dHRvbkF1dGhvciIsImJ0blRleHQiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJzdHlsZSIsImJvcmRlckNvbG9yIiwiY29sb3IiLCJmaWx0ZXJCeSIsInVsIiwiYXJ0aXN0TGlzdCIsImFydGlzdCIsImluZGV4IiwibGkiLCJmaWx0ZXJCeVAiLCJwIiwicGxheWxpc3RUaXRsZUNvbCIsImJ1dHRvblllYXIiLCJidXR0b25HZW5yZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/FilterBlock/FilterBlock.tsx\n"));

/***/ })

});