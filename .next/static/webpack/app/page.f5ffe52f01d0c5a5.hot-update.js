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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FilterBlock.module.css */ \"(app-pages-browser)/./src/components/FilterBlock/FilterBlock.module.css\");\n/* harmony import */ var _FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _contexts_tracks_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/contexts/tracks-context */ \"(app-pages-browser)/./src/contexts/tracks-context.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst FilterBlock = ()=>{\n    _s();\n    const [isArtistOpened, setIsArtistOpened] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [isDateOpened, setIsDateOpened] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [isGenreOpened, setIsGenreOpened] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const { tracks } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_tracks_context__WEBPACK_IMPORTED_MODULE_3__.TracksContext);\n    const uniqueArtists = tracks ? Array.from(new Set(tracks.map((track)=>track.author))).filter((author)=>author && author !== \"-\").sort((a, b)=>a && b ? a.localeCompare(b) : 0) : [];\n    const countUniqueArtists = ()=>{\n        if (tracks) {\n            const uniqueArtists = Array.from(new Set(tracks.map((track)=>track.author)));\n            return uniqueArtists.length;\n        }\n        return 0;\n    };\n    const [uniqueArtistsCount, setUniqueArtistsCount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(countUniqueArtists());\n    const toggleArtist = ()=>{\n        setIsDateOpened(false);\n        setIsGenreOpened(false);\n        setIsArtistOpened((prevState)=>!prevState);\n    };\n    const uniqueDates = tracks ? Array.from(new Set(tracks.map((track)=>track.release_date))).filter((release_date)=>release_date !== \"-\").sort((a, b)=>a && b ? a.localeCompare(b) : 0) : [];\n    const uniqueGenres = tracks ? Array.from(new Set(tracks.map((track)=>track.genre))).filter((genre)=>genre !== \"-\").sort((a, b)=>a && b ? a.localeCompare(b) : 0) : [];\n    const toggleDate = ()=>{\n        setIsArtistOpened(false);\n        setIsGenreOpened(false);\n        setIsDateOpened((prevState)=>!prevState);\n    };\n    const toggleGenre = ()=>{\n        setIsArtistOpened(false);\n        setIsDateOpened(false);\n        setIsGenreOpened((prevState)=>!prevState);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().centerBlockFilter), (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().filter)),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().filterTitle),\n                children: \"Search for:\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: toggleArtist,\n                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().filterButton), (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().buttonAuthor), (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().btnText)),\n                children: \"artist\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, undefined),\n            uniqueArtistsCount > 0 && isArtistOpened && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().artistCountPopUp),\n                children: uniqueArtistsCount\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 73,\n                columnNumber: 9\n            }, undefined),\n            isArtistOpened && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().filterBy),\n                children: uniqueArtists.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().artistList),\n                    children: uniqueArtists.map((artist, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().filterByP),\n                            children: artist\n                        }, index, false, {\n                            fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                            lineNumber: 82,\n                            columnNumber: 17\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                    lineNumber: 80,\n                    columnNumber: 13\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().playlistTitleCol),\n                    children: \"No data...\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                    lineNumber: 88,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 78,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: toggleDate,\n                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().filterButton), (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().buttonYear), (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().btnText)),\n                children: \"release date\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 93,\n                columnNumber: 7\n            }, undefined),\n            isDateOpened && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().filterBy),\n                children: tracks ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: uniqueDates.map((release_date, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().filterByP),\n                            children: release_date\n                        }, index, false, {\n                            fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                            lineNumber: 109,\n                            columnNumber: 19\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                    lineNumber: 107,\n                    columnNumber: 15\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().playlistTitleCol),\n                    children: \"No data...\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                    lineNumber: 115,\n                    columnNumber: 15\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 105,\n                columnNumber: 11\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: toggleGenre,\n                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().filterButton), (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().buttonGenre), (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().btnText)),\n                children: \"genre\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 120,\n                columnNumber: 7\n            }, undefined),\n            isGenreOpened && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().filterBy),\n                children: tracks ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: uniqueGenres.map((genre, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().filterByP),\n                            children: genre\n                        }, index, false, {\n                            fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                            lineNumber: 138,\n                            columnNumber: 19\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                    lineNumber: 136,\n                    columnNumber: 15\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().playlistTitleCol),\n                    children: \"No data...\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                    lineNumber: 144,\n                    columnNumber: 15\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 134,\n                columnNumber: 11\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n        lineNumber: 59,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FilterBlock, \"Ty8mz47aFMuAS61N5cHHFKreD3g=\");\n_c = FilterBlock;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FilterBlock);\nvar _c;\n$RefreshReg$(_c, \"FilterBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0ZpbHRlckJsb2NrL0ZpbHRlckJsb2NrLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE4QztBQUNWO0FBQ1M7QUFDYTtBQUcxRCxNQUFNSyxjQUF3Qjs7SUFFNUIsTUFBTSxDQUFDQyxnQkFBZ0JDLGtCQUFrQixHQUFHSiwrQ0FBUUEsQ0FBQztJQUNyRCxNQUFNLENBQUNLLGNBQWNDLGdCQUFnQixHQUFHTiwrQ0FBUUEsQ0FBQztJQUNqRCxNQUFNLENBQUNPLGVBQWVDLGlCQUFpQixHQUFHUiwrQ0FBUUEsQ0FBQztJQUVuRCxNQUFNLEVBQUVTLE1BQU0sRUFBRSxHQUFHVixpREFBVUEsQ0FBQ0UsbUVBQWFBO0lBRTNDLE1BQU1TLGdCQUFnQkQsU0FDbEJFLE1BQU1DLElBQUksQ0FBQyxJQUFJQyxJQUFJSixPQUFPSyxHQUFHLENBQUMsQ0FBQ0MsUUFBaUJBLE1BQU1DLE1BQU0sSUFDM0RDLE1BQU0sQ0FBQyxDQUFDRCxTQUFXQSxVQUFVQSxXQUFXLEtBQ3hDRSxJQUFJLENBQUMsQ0FBQ0MsR0FBR0MsSUFBT0QsS0FBS0MsSUFBSUQsRUFBRUUsYUFBYSxDQUFDRCxLQUFLLEtBQy9DLEVBQUU7SUFDTixNQUFNRSxxQkFBcUI7UUFDekIsSUFBSWIsUUFBUTtZQUNWLE1BQU1DLGdCQUFnQkMsTUFBTUMsSUFBSSxDQUFDLElBQUlDLElBQUlKLE9BQU9LLEdBQUcsQ0FBQyxDQUFDQyxRQUFpQkEsTUFBTUMsTUFBTTtZQUNsRixPQUFPTixjQUFjYSxNQUFNO1FBQzdCO1FBQ0EsT0FBTztJQUNUO0lBQ0EsTUFBTSxDQUFDQyxvQkFBb0JDLHNCQUFzQixHQUFHekIsK0NBQVFBLENBQUNzQjtJQUM3RCxNQUFNSSxlQUFlO1FBQ25CcEIsZ0JBQWdCO1FBQ2hCRSxpQkFBaUI7UUFDakJKLGtCQUFrQixDQUFDdUIsWUFBYyxDQUFDQTtJQUNwQztJQUVBLE1BQU1DLGNBQWNuQixTQUNoQkUsTUFBTUMsSUFB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bHRlckJsb2NrL0ZpbHRlckJsb2NrLnRzeD9iNTZjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vRmlsdGVyQmxvY2subW9kdWxlLmNzc1wiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUcmFja3NDb250ZXh0IH0gZnJvbSBcIkAvY29udGV4dHMvdHJhY2tzLWNvbnRleHRcIjtcbmltcG9ydCB7IFRyYWNrIH0gZnJvbSBcIkAvaW50ZXJmYWNlcy9pbnRlcmZhY2VzXCI7XG5cbmNvbnN0IEZpbHRlckJsb2NrOiBSZWFjdC5GQyA9ICgpID0+IHtcblxuICBjb25zdCBbaXNBcnRpc3RPcGVuZWQsIHNldElzQXJ0aXN0T3BlbmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzRGF0ZU9wZW5lZCwgc2V0SXNEYXRlT3BlbmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzR2VucmVPcGVuZWQsIHNldElzR2VucmVPcGVuZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHsgdHJhY2tzIH0gPSB1c2VDb250ZXh0KFRyYWNrc0NvbnRleHQpO1xuXG4gIGNvbnN0IHVuaXF1ZUFydGlzdHMgPSB0cmFja3NcbiAgICA/IEFycmF5LmZyb20obmV3IFNldCh0cmFja3MubWFwKCh0cmFjazogVHJhY2spID0+IHRyYWNrLmF1dGhvcikpKVxuICAgICAgLmZpbHRlcigoYXV0aG9yKSA9PiBhdXRob3IgJiYgYXV0aG9yICE9PSBcIi1cIilcbiAgICAgIC5zb3J0KChhLCBiKSA9PiAoYSAmJiBiID8gYS5sb2NhbGVDb21wYXJlKGIpIDogMCkpXG4gICAgOiBbXTtcbiAgY29uc3QgY291bnRVbmlxdWVBcnRpc3RzID0gKCkgPT4ge1xuICAgIGlmICh0cmFja3MpIHtcbiAgICAgIGNvbnN0IHVuaXF1ZUFydGlzdHMgPSBBcnJheS5mcm9tKG5ldyBTZXQodHJhY2tzLm1hcCgodHJhY2s6IFRyYWNrKSA9PiB0cmFjay5hdXRob3IpKSk7XG4gICAgICByZXR1cm4gdW5pcXVlQXJ0aXN0cy5sZW5ndGg7XG4gICAgfVxuICAgIHJldHVybiAwO1xuICB9O1xuICBjb25zdCBbdW5pcXVlQXJ0aXN0c0NvdW50LCBzZXRVbmlxdWVBcnRpc3RzQ291bnRdID0gdXNlU3RhdGUoY291bnRVbmlxdWVBcnRpc3RzKCkpO1xuICBjb25zdCB0b2dnbGVBcnRpc3QgPSAoKSA9PiB7XG4gICAgc2V0SXNEYXRlT3BlbmVkKGZhbHNlKTtcbiAgICBzZXRJc0dlbnJlT3BlbmVkKGZhbHNlKTtcbiAgICBzZXRJc0FydGlzdE9wZW5lZCgocHJldlN0YXRlKSA9PiAhcHJldlN0YXRlKTtcbiAgfTtcblxuICBjb25zdCB1bmlxdWVEYXRlcyA9IHRyYWNrc1xuICAgID8gQXJyYXkuZnJvbShuZXcgU2V0KHRyYWNrcy5tYXAoKHRyYWNrOiBUcmFjaykgPT4gdHJhY2sucmVsZWFzZV9kYXRlKSkpXG4gICAgICAuZmlsdGVyKChyZWxlYXNlX2RhdGUpID0+IHJlbGVhc2VfZGF0ZSAhPT0gXCItXCIpXG4gICAgICAuc29ydCgoYSwgYikgPT4gKGEgJiYgYiA/IGEubG9jYWxlQ29tcGFyZShiKSA6IDApKVxuICAgIDogW107XG5cbiAgY29uc3QgdW5pcXVlR2VucmVzID0gdHJhY2tzXG4gICAgPyBBcnJheS5mcm9tKG5ldyBTZXQodHJhY2tzLm1hcCgodHJhY2s6IFRyYWNrKSA9PiB0cmFjay5nZW5yZSkpKVxuICAgICAgLmZpbHRlcigoZ2VucmUpID0+IGdlbnJlICE9PSBcIi1cIilcbiAgICAgIC5zb3J0KChhLCBiKSA9PiAoYSAmJiBiID8gYS5sb2NhbGVDb21wYXJlKGIpIDogMCkpXG4gICAgOiBbXTtcblxuXG4gIGNvbnN0IHRvZ2dsZURhdGUgPSAoKSA9PiB7XG4gICAgc2V0SXNBcnRpc3RPcGVuZWQoZmFsc2UpO1xuICAgIHNldElzR2VucmVPcGVuZWQoZmFsc2UpO1xuICAgIHNldElzRGF0ZU9wZW5lZCgocHJldlN0YXRlKSA9PiAhcHJldlN0YXRlKTtcbiAgfTtcbiAgY29uc3QgdG9nZ2xlR2VucmUgPSAoKSA9PiB7XG4gICAgc2V0SXNBcnRpc3RPcGVuZWQoZmFsc2UpO1xuICAgIHNldElzRGF0ZU9wZW5lZChmYWxzZSk7XG4gICAgc2V0SXNHZW5yZU9wZW5lZCgocHJldlN0YXRlKSA9PiAhcHJldlN0YXRlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5jZW50ZXJCbG9ja0ZpbHRlciwgc3R5bGVzLmZpbHRlcil9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5maWx0ZXJUaXRsZX0+U2VhcmNoIGZvcjo8L2Rpdj5cbiAgICAgIHsvKiBBUlRJU1QgKi99XG4gICAgICA8ZGl2XG4gICAgICAgIG9uQ2xpY2s9e3RvZ2dsZUFydGlzdH1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICAgIHN0eWxlcy5maWx0ZXJCdXR0b24sXG4gICAgICAgICAgc3R5bGVzLmJ1dHRvbkF1dGhvcixcbiAgICAgICAgICBzdHlsZXMuYnRuVGV4dFxuICAgICAgICApfVxuICAgICAgPlxuICAgICAgICBhcnRpc3RcbiAgICAgIDwvZGl2PlxuICAgICAge3VuaXF1ZUFydGlzdHNDb3VudCA+IDAgJiYgaXNBcnRpc3RPcGVuZWQgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFydGlzdENvdW50UG9wVXB9PlxuICAgICAgICAgIHt1bmlxdWVBcnRpc3RzQ291bnR9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIHtpc0FydGlzdE9wZW5lZCAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmlsdGVyQnl9PlxuICAgICAgICAgIHt1bmlxdWVBcnRpc3RzLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMuYXJ0aXN0TGlzdH0+XG4gICAgICAgICAgICAgIHt1bmlxdWVBcnRpc3RzLm1hcCgoYXJ0aXN0LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9e3N0eWxlcy5maWx0ZXJCeVB9PlxuICAgICAgICAgICAgICAgICAge2FydGlzdH1cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnBsYXlsaXN0VGl0bGVDb2x9Pk5vIGRhdGEuLi48L3A+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAgey8qIERBVEUgKi99XG4gICAgICA8ZGl2XG4gICAgICAgIG9uQ2xpY2s9e3RvZ2dsZURhdGV9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgICBzdHlsZXMuZmlsdGVyQnV0dG9uLFxuICAgICAgICAgIHN0eWxlcy5idXR0b25ZZWFyLFxuICAgICAgICAgIHN0eWxlcy5idG5UZXh0XG4gICAgICAgICl9XG4gICAgICA+XG4gICAgICAgIHJlbGVhc2UgZGF0ZVxuICAgICAgPC9kaXY+XG4gICAgICB7XG4gICAgICAgIGlzRGF0ZU9wZW5lZCAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5maWx0ZXJCeX0+XG4gICAgICAgICAgICB7dHJhY2tzID8gKFxuICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge3VuaXF1ZURhdGVzLm1hcCgocmVsZWFzZV9kYXRlLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9IGNsYXNzTmFtZT17c3R5bGVzLmZpbHRlckJ5UH0+XG4gICAgICAgICAgICAgICAgICAgIHtyZWxlYXNlX2RhdGV9XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucGxheWxpc3RUaXRsZUNvbH0+Tm8gZGF0YS4uLjwvcD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIFxuICAgICAgPGRpdlxuICAgICAgICBvbkNsaWNrPXt0b2dnbGVHZW5yZX1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICAgIHN0eWxlcy5maWx0ZXJCdXR0b24sXG5cbiAgICAgICAgICBzdHlsZXMuYnV0dG9uR2VucmUsXG5cbiAgICAgICAgICBzdHlsZXMuYnRuVGV4dFxuICAgICAgICApfVxuICAgICAgPlxuICAgICAgICBnZW5yZVxuICAgICAgPC9kaXY+XG4gICAgICB7XG4gICAgICAgIGlzR2VucmVPcGVuZWQgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmlsdGVyQnl9PlxuICAgICAgICAgICAge3RyYWNrcyA/IChcbiAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHt1bmlxdWVHZW5yZXMubWFwKChnZW5yZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9e3N0eWxlcy5maWx0ZXJCeVB9PlxuICAgICAgICAgICAgICAgICAgICB7Z2VucmV9XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucGxheWxpc3RUaXRsZUNvbH0+Tm8gZGF0YS4uLjwvcD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZpbHRlckJsb2NrOyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJjbGFzc05hbWVzIiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwiVHJhY2tzQ29udGV4dCIsIkZpbHRlckJsb2NrIiwiaXNBcnRpc3RPcGVuZWQiLCJzZXRJc0FydGlzdE9wZW5lZCIsImlzRGF0ZU9wZW5lZCIsInNldElzRGF0ZU9wZW5lZCIsImlzR2VucmVPcGVuZWQiLCJzZXRJc0dlbnJlT3BlbmVkIiwidHJhY2tzIiwidW5pcXVlQXJ0aXN0cyIsIkFycmF5IiwiZnJvbSIsIlNldCIsIm1hcCIsInRyYWNrIiwiYXV0aG9yIiwiZmlsdGVyIiwic29ydCIsImEiLCJiIiwibG9jYWxlQ29tcGFyZSIsImNvdW50VW5pcXVlQXJ0aXN0cyIsImxlbmd0aCIsInVuaXF1ZUFydGlzdHNDb3VudCIsInNldFVuaXF1ZUFydGlzdHNDb3VudCIsInRvZ2dsZUFydGlzdCIsInByZXZTdGF0ZSIsInVuaXF1ZURhdGVzIiwicmVsZWFzZV9kYXRlIiwidW5pcXVlR2VucmVzIiwiZ2VucmUiLCJ0b2dnbGVEYXRlIiwidG9nZ2xlR2VucmUiLCJkaXYiLCJjbGFzc05hbWUiLCJjZW50ZXJCbG9ja0ZpbHRlciIsImZpbHRlclRpdGxlIiwib25DbGljayIsImZpbHRlckJ1dHRvbiIsImJ1dHRvbkF1dGhvciIsImJ0blRleHQiLCJhcnRpc3RDb3VudFBvcFVwIiwiZmlsdGVyQnkiLCJ1bCIsImFydGlzdExpc3QiLCJhcnRpc3QiLCJpbmRleCIsImxpIiwiZmlsdGVyQnlQIiwicCIsInBsYXlsaXN0VGl0bGVDb2wiLCJidXR0b25ZZWFyIiwiYnV0dG9uR2VucmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/FilterBlock/FilterBlock.tsx\n"));

/***/ })

});