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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FilterBlock.module.css */ \"(app-pages-browser)/./src/components/FilterBlock/FilterBlock.module.css\");\n/* harmony import */ var _FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _contexts_tracks_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/contexts/tracks-context */ \"(app-pages-browser)/./src/contexts/tracks-context.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst FilterBlock = ()=>{\n    _s();\n    const [isDateOpened, setIsDateOpened] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [isGenreOpened, setIsGenreOpened] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const { tracks } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_tracks_context__WEBPACK_IMPORTED_MODULE_3__.TracksContext);\n    {}\n    const [isArtistOpened, setIsArtistOpened] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const uniqueArtists = tracks ? Array.from(new Set(tracks.map((track)=>track.author))).filter((author)=>author && author !== \"-\").sort((a, b)=>a && b ? a.localeCompare(b) : 0) : [];\n    const countUniqueArtists = ()=>{\n        if (tracks) {\n            // const uniqueArtists = Array.from(new Set(tracks.map((track: Track) => track.author)));\n            return uniqueArtists.length;\n        }\n        return 0;\n    };\n    const [uniqueArtistsCount, setUniqueArtistsCount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(countUniqueArtists());\n    const toggleArtist = ()=>{\n        setIsDateOpened(false);\n        setIsGenreOpened(false);\n        setIsArtistOpened((prevState)=>!prevState);\n    };\n    {}\n    const uniqueDates = tracks ? Array.from(new Set(tracks.map((track)=>track.release_date))).filter((release_date)=>release_date !== \"-\").sort((a, b)=>a && b ? a.localeCompare(b) : 0) : [];\n    const toggleDate = ()=>{\n        setIsArtistOpened(false);\n        setIsGenreOpened(false);\n        setIsDateOpened((prevState)=>!prevState);\n    };\n    {}\n    const uniqueGenres = tracks ? Array.from(new Set(tracks.map((track)=>track.genre))).filter((genre)=>genre !== \"-\").sort((a, b)=>a && b ? a.localeCompare(b) : 0) : [];\n    const toggleGenre = ()=>{\n        setIsArtistOpened(false);\n        setIsDateOpened(false);\n        setIsGenreOpened((prevState)=>!prevState);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().centerBlockFilter), (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().filter)),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().filterTitle),\n                children: \"Search for:\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: toggleArtist,\n                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().filterButton), (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().buttonAuthor), (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().btnText)),\n                children: \"artist\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, undefined),\n            isArtistOpened && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().filterBy),\n                children: uniqueArtists.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().artistList),\n                    children: uniqueArtists.map((artist, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().filterByP),\n                            children: artist\n                        }, index, false, {\n                            fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                            lineNumber: 82,\n                            columnNumber: 17\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                    lineNumber: 80,\n                    columnNumber: 13\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().playlistTitleCol),\n                    children: \"No data...\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                    lineNumber: 88,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 78,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: toggleDate,\n                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().filterButton), (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().buttonYear), (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().btnText)),\n                children: \"release date\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 93,\n                columnNumber: 7\n            }, undefined),\n            isDateOpened && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().filterBy),\n                children: tracks ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: uniqueDates.map((release_date, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().filterByP),\n                            children: release_date\n                        }, index, false, {\n                            fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                            lineNumber: 109,\n                            columnNumber: 19\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                    lineNumber: 107,\n                    columnNumber: 15\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().playlistTitleCol),\n                    children: \"No data...\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                    lineNumber: 115,\n                    columnNumber: 15\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 105,\n                columnNumber: 11\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: toggleGenre,\n                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().filterButton), (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().buttonGenre), (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().btnText)),\n                children: \"genre\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 120,\n                columnNumber: 7\n            }, undefined),\n            isGenreOpened && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().filterBy),\n                children: tracks ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: uniqueGenres.map((genre, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().filterByP),\n                            children: genre\n                        }, index, false, {\n                            fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                            lineNumber: 138,\n                            columnNumber: 19\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                    lineNumber: 136,\n                    columnNumber: 15\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().playlistTitleCol),\n                    children: \"No data...\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                    lineNumber: 144,\n                    columnNumber: 15\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 134,\n                columnNumber: 11\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FilterBlock, \"rtLD7M8YLy6ViuvoLJtAOxkX5Pc=\");\n_c = FilterBlock;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FilterBlock);\nvar _c;\n$RefreshReg$(_c, \"FilterBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0ZpbHRlckJsb2NrL0ZpbHRlckJsb2NrLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE4QztBQUNWO0FBQ1M7QUFDYTtBQUcxRCxNQUFNSyxjQUF3Qjs7SUFFNUIsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR0osK0NBQVFBLENBQUM7SUFDakQsTUFBTSxDQUFDSyxlQUFlQyxpQkFBaUIsR0FBR04sK0NBQVFBLENBQUM7SUFFbkQsTUFBTSxFQUFFTyxNQUFNLEVBQUUsR0FBR1IsaURBQVVBLENBQUNFLG1FQUFhQTtJQUUzQyxDQUFjO0lBQ2QsTUFBTSxDQUFDTyxnQkFBZ0JDLGtCQUFrQixHQUFHVCwrQ0FBUUEsQ0FBQztJQUNyRCxNQUFNVSxnQkFBZ0JILFNBQ2xCSSxNQUFNQyxJQUFJLENBQUMsSUFBSUMsSUFBSU4sT0FBT08sR0FBRyxDQUFDLENBQUNDLFFBQWlCQSxNQUFNQyxNQUFNLElBQzNEQyxNQUFNLENBQUMsQ0FBQ0QsU0FBV0EsVUFBVUEsV0FBVyxLQUN4Q0UsSUFBSSxDQUFDLENBQUNDLEdBQUdDLElBQU9ELEtBQUtDLElBQUlELEVBQUVFLGFBQWEsQ0FBQ0QsS0FBSyxLQUMvQyxFQUFFO0lBQ04sTUFBTUUscUJBQXFCO1FBQ3pCLElBQUlmLFFBQVE7WUFDVix5RkFBeUY7WUFDekYsT0FBT0csY0FBY2EsTUFBTTtRQUM3QjtRQUNBLE9BQU87SUFDVDtJQUNBLE1BQU0sQ0FBQ0Msb0JBQW9CQyxzQkFBc0IsR0FBR3pCLCtDQUFRQSxDQUFDc0I7SUFDN0QsTUFBTUksZUFBZTtRQUNuQnRCLGdCQUFnQjtRQUNoQkUsaUJBQWlCO1FBQ2pCRyxrQkFBa0IsQ0FBQ2tCLFlBQWMsQ0FBQ0E7SUFDcEM7SUFJQSxDQUFZO0lBQ1osTUFBTUMsY0FBY3JCLFNBQ2hCSSxNQUFNQyxJQUFJLENBQUMsSUFBSUMsSUFBSU4sT0FBT08sR0FBRyxDQUFDLENBQUNDLFFBQWlCQSxNQUFNYyxZQUFZLElBQ2pFWixNQUFNLENBQUMsQ0FBQ1ksZUFBaUJBLGlCQUFpQixLQUMxQ1gsSUFBSSxDQUFDLENBQUNDLEdBQUdDLElBQU9ELEtBQUtDLElBQUlELEVBQUVFLGFBQWEsQ0FBQ0QsS0FBSyxLQUMvQyxFQUFFO0lBQ04sTUFBTVUsYUFBYTtRQUNqQnJCLGtCQUFrQjtRQUNsQkgsaUJBQWlCO1FBQ2pCRixnQkFBZ0IsQ0FBQ3VCLFlBQWMsQ0FBQ0E7SUFDbEM7SUFDQSxDQUFhO0lBQ2IsTUFBTUksZUFBZXhCLFNBQ2pCSSxNQUFNQyxJQUFJLENBQUMsSUFBSUMsSUFBSU4sT0FBT08sR0FBRyxDQUFDLENBQUNDLFFBQWlCQSxNQUFNaUIsS0FBSyxJQUMxRGYsTUFBTSxDQUFDLENBQUNlLFFBQVVBLFVBQVUsS0FDNUJkLElBQUksQ0FBQyxDQUFDQyxHQUFHQyxJQUFPRCxLQUFLQyxJQUFJRCxFQUFFRSxhQUFhLENBQUNELEtBQUssS0FDL0MsRUFBRTtJQUNOLE1BQU1hLGNBQWM7UUFDbEJ4QixrQkFBa0I7UUFDbEJMLGdCQUFnQjtRQUNoQkUsaUJBQWlCLENBQUNxQixZQUFjLENBQUNBO0lBQ25DO0lBRUEscUJBQ0UsOERBQUNPO1FBQUlDLFdBQVdyQyxpREFBVUEsQ0FBQ0Qsa0ZBQXdCLEVBQUVBLHVFQUFhOzswQkFDaEUsOERBQUNxQztnQkFBSUMsV0FBV3RDLDRFQUFrQjswQkFBRTs7Ozs7OzBCQUVwQyw4REFBQ3FDO2dCQUNDSSxTQUFTWjtnQkFDVFMsV0FBV3JDLGlEQUFVQSxDQUNuQkQsNkVBQW1CLEVBQ25CQSw2RUFBbUIsRUFDbkJBLHdFQUFjOzBCQUVqQjs7Ozs7O1lBTUFXLGdDQUNDLDhEQUFDMEI7Z0JBQUlDLFdBQVd0Qyx5RUFBZTswQkFDNUJhLGNBQWNhLE1BQU0sR0FBRyxrQkFDdEIsOERBQUNvQjtvQkFBR1IsV0FBV3RDLDJFQUFpQjs4QkFDN0JhLGNBQWNJLEdBQUcsQ0FBQyxDQUFDK0IsUUFBUUMsc0JBQzFCLDhEQUFDQzs0QkFBZVosV0FBV3RDLDBFQUFnQjtzQ0FDeENnRDsyQkFETUM7Ozs7Ozs7Ozs4Q0FNYiw4REFBQ0c7b0JBQUVkLFdBQVd0QyxpRkFBdUI7OEJBQUU7Ozs7Ozs7Ozs7OzBCQUs3Qyw4REFBQ3FDO2dCQUNDSSxTQUFTUjtnQkFDVEssV0FBV3JDLGlEQUFVQSxDQUNuQkQsNkVBQW1CLEVBQ25CQSwyRUFBaUIsRUFDakJBLHdFQUFjOzBCQUVqQjs7Ozs7O1lBSUNNLDhCQUNFLDhEQUFDK0I7Z0JBQUlDLFdBQVd0Qyx5RUFBZTswQkFDNUJVLHVCQUNDLDhEQUFDb0M7OEJBQ0VmLFlBQVlkLEdBQUcsQ0FBQyxDQUFDZSxjQUFjaUIsc0JBQzlCLDhEQUFDQzs0QkFBZVosV0FBV3RDLDBFQUFnQjtzQ0FDeENnQzsyQkFETWlCOzs7Ozs7Ozs7OENBTWIsOERBQUNHO29CQUFFZCxXQUFXdEMsaUZBQXVCOzhCQUFFOzs7Ozs7Ozs7OzswQkFLL0MsOERBQUNxQztnQkFDQ0ksU0FBU0w7Z0JBQ1RFLFdBQVdyQyxpREFBVUEsQ0FDbkJELDZFQUFtQixFQUVuQkEsNEVBQWtCLEVBRWxCQSx3RUFBYzswQkFFakI7Ozs7OztZQUlDUSwrQkFDRSw4REFBQzZCO2dCQUFJQyxXQUFXdEMseUVBQWU7MEJBQzVCVSx1QkFDQyw4REFBQ29DOzhCQUNFWixhQUFhakIsR0FBRyxDQUFDLENBQUNrQixPQUFPYyxzQkFDeEIsOERBQUNDOzRCQUFlWixXQUFXdEMsMEVBQWdCO3NDQUN4Q21DOzJCQURNYzs7Ozs7Ozs7OzhDQU1iLDhEQUFDRztvQkFBRWQsV0FBV3RDLGlGQUF1Qjs4QkFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNckQ7R0EvSU1LO0tBQUFBO0FBaUpOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0ZpbHRlckJsb2NrL0ZpbHRlckJsb2NrLnRzeD9iNTZjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vRmlsdGVyQmxvY2subW9kdWxlLmNzc1wiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUcmFja3NDb250ZXh0IH0gZnJvbSBcIkAvY29udGV4dHMvdHJhY2tzLWNvbnRleHRcIjtcbmltcG9ydCB7IFRyYWNrIH0gZnJvbSBcIkAvaW50ZXJmYWNlcy9pbnRlcmZhY2VzXCI7XG5cbmNvbnN0IEZpbHRlckJsb2NrOiBSZWFjdC5GQyA9ICgpID0+IHtcblxuICBjb25zdCBbaXNEYXRlT3BlbmVkLCBzZXRJc0RhdGVPcGVuZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNHZW5yZU9wZW5lZCwgc2V0SXNHZW5yZU9wZW5lZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgeyB0cmFja3MgfSA9IHVzZUNvbnRleHQoVHJhY2tzQ29udGV4dCk7XG5cbiAgey8qIEFSVElTVCAqLyB9XG4gIGNvbnN0IFtpc0FydGlzdE9wZW5lZCwgc2V0SXNBcnRpc3RPcGVuZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB1bmlxdWVBcnRpc3RzID0gdHJhY2tzXG4gICAgPyBBcnJheS5mcm9tKG5ldyBTZXQodHJhY2tzLm1hcCgodHJhY2s6IFRyYWNrKSA9PiB0cmFjay5hdXRob3IpKSlcbiAgICAgIC5maWx0ZXIoKGF1dGhvcikgPT4gYXV0aG9yICYmIGF1dGhvciAhPT0gXCItXCIpXG4gICAgICAuc29ydCgoYSwgYikgPT4gKGEgJiYgYiA/IGEubG9jYWxlQ29tcGFyZShiKSA6IDApKVxuICAgIDogW107XG4gIGNvbnN0IGNvdW50VW5pcXVlQXJ0aXN0cyA9ICgpID0+IHtcbiAgICBpZiAodHJhY2tzKSB7XG4gICAgICAvLyBjb25zdCB1bmlxdWVBcnRpc3RzID0gQXJyYXkuZnJvbShuZXcgU2V0KHRyYWNrcy5tYXAoKHRyYWNrOiBUcmFjaykgPT4gdHJhY2suYXV0aG9yKSkpO1xuICAgICAgcmV0dXJuIHVuaXF1ZUFydGlzdHMubGVuZ3RoO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbiAgfTtcbiAgY29uc3QgW3VuaXF1ZUFydGlzdHNDb3VudCwgc2V0VW5pcXVlQXJ0aXN0c0NvdW50XSA9IHVzZVN0YXRlKGNvdW50VW5pcXVlQXJ0aXN0cygpKTtcbiAgY29uc3QgdG9nZ2xlQXJ0aXN0ID0gKCkgPT4ge1xuICAgIHNldElzRGF0ZU9wZW5lZChmYWxzZSk7XG4gICAgc2V0SXNHZW5yZU9wZW5lZChmYWxzZSk7XG4gICAgc2V0SXNBcnRpc3RPcGVuZWQoKHByZXZTdGF0ZSkgPT4gIXByZXZTdGF0ZSk7XG4gIH07XG5cblxuXG4gIHsvKiBEQVRFICovIH1cbiAgY29uc3QgdW5pcXVlRGF0ZXMgPSB0cmFja3NcbiAgICA/IEFycmF5LmZyb20obmV3IFNldCh0cmFja3MubWFwKCh0cmFjazogVHJhY2spID0+IHRyYWNrLnJlbGVhc2VfZGF0ZSkpKVxuICAgICAgLmZpbHRlcigocmVsZWFzZV9kYXRlKSA9PiByZWxlYXNlX2RhdGUgIT09IFwiLVwiKVxuICAgICAgLnNvcnQoKGEsIGIpID0+IChhICYmIGIgPyBhLmxvY2FsZUNvbXBhcmUoYikgOiAwKSlcbiAgICA6IFtdO1xuICBjb25zdCB0b2dnbGVEYXRlID0gKCkgPT4ge1xuICAgIHNldElzQXJ0aXN0T3BlbmVkKGZhbHNlKTtcbiAgICBzZXRJc0dlbnJlT3BlbmVkKGZhbHNlKTtcbiAgICBzZXRJc0RhdGVPcGVuZWQoKHByZXZTdGF0ZSkgPT4gIXByZXZTdGF0ZSk7XG4gIH07XG4gIHsvKiBHRU5SRSAqLyB9XG4gIGNvbnN0IHVuaXF1ZUdlbnJlcyA9IHRyYWNrc1xuICAgID8gQXJyYXkuZnJvbShuZXcgU2V0KHRyYWNrcy5tYXAoKHRyYWNrOiBUcmFjaykgPT4gdHJhY2suZ2VucmUpKSlcbiAgICAgIC5maWx0ZXIoKGdlbnJlKSA9PiBnZW5yZSAhPT0gXCItXCIpXG4gICAgICAuc29ydCgoYSwgYikgPT4gKGEgJiYgYiA/IGEubG9jYWxlQ29tcGFyZShiKSA6IDApKVxuICAgIDogW107XG4gIGNvbnN0IHRvZ2dsZUdlbnJlID0gKCkgPT4ge1xuICAgIHNldElzQXJ0aXN0T3BlbmVkKGZhbHNlKTtcbiAgICBzZXRJc0RhdGVPcGVuZWQoZmFsc2UpO1xuICAgIHNldElzR2VucmVPcGVuZWQoKHByZXZTdGF0ZSkgPT4gIXByZXZTdGF0ZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMuY2VudGVyQmxvY2tGaWx0ZXIsIHN0eWxlcy5maWx0ZXIpfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmlsdGVyVGl0bGV9PlNlYXJjaCBmb3I6PC9kaXY+XG4gICAgICB7LyogQVJUSVNUICovfVxuICAgICAgPGRpdlxuICAgICAgICBvbkNsaWNrPXt0b2dnbGVBcnRpc3R9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgICBzdHlsZXMuZmlsdGVyQnV0dG9uLFxuICAgICAgICAgIHN0eWxlcy5idXR0b25BdXRob3IsXG4gICAgICAgICAgc3R5bGVzLmJ0blRleHRcbiAgICAgICAgKX1cbiAgICAgID5cbiAgICAgICAgYXJ0aXN0XG4gICAgICA8L2Rpdj5cblxuICAgICAgXG5cbiAgICAgIHtpc0FydGlzdE9wZW5lZCAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmlsdGVyQnl9PlxuICAgICAgICAgIHt1bmlxdWVBcnRpc3RzLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMuYXJ0aXN0TGlzdH0+XG4gICAgICAgICAgICAgIHt1bmlxdWVBcnRpc3RzLm1hcCgoYXJ0aXN0LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9e3N0eWxlcy5maWx0ZXJCeVB9PlxuICAgICAgICAgICAgICAgICAge2FydGlzdH1cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnBsYXlsaXN0VGl0bGVDb2x9Pk5vIGRhdGEuLi48L3A+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAgey8qIERBVEUgKi99XG4gICAgICA8ZGl2XG4gICAgICAgIG9uQ2xpY2s9e3RvZ2dsZURhdGV9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgICBzdHlsZXMuZmlsdGVyQnV0dG9uLFxuICAgICAgICAgIHN0eWxlcy5idXR0b25ZZWFyLFxuICAgICAgICAgIHN0eWxlcy5idG5UZXh0XG4gICAgICAgICl9XG4gICAgICA+XG4gICAgICAgIHJlbGVhc2UgZGF0ZVxuICAgICAgPC9kaXY+XG4gICAgICB7XG4gICAgICAgIGlzRGF0ZU9wZW5lZCAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5maWx0ZXJCeX0+XG4gICAgICAgICAgICB7dHJhY2tzID8gKFxuICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge3VuaXF1ZURhdGVzLm1hcCgocmVsZWFzZV9kYXRlLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9IGNsYXNzTmFtZT17c3R5bGVzLmZpbHRlckJ5UH0+XG4gICAgICAgICAgICAgICAgICAgIHtyZWxlYXNlX2RhdGV9XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucGxheWxpc3RUaXRsZUNvbH0+Tm8gZGF0YS4uLjwvcD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICB7LyogR0VOUkUgKi99XG4gICAgICA8ZGl2XG4gICAgICAgIG9uQ2xpY2s9e3RvZ2dsZUdlbnJlfVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgICAgc3R5bGVzLmZpbHRlckJ1dHRvbixcblxuICAgICAgICAgIHN0eWxlcy5idXR0b25HZW5yZSxcblxuICAgICAgICAgIHN0eWxlcy5idG5UZXh0XG4gICAgICAgICl9XG4gICAgICA+XG4gICAgICAgIGdlbnJlXG4gICAgICA8L2Rpdj5cbiAgICAgIHtcbiAgICAgICAgaXNHZW5yZU9wZW5lZCAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5maWx0ZXJCeX0+XG4gICAgICAgICAgICB7dHJhY2tzID8gKFxuICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge3VuaXF1ZUdlbnJlcy5tYXAoKGdlbnJlLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9IGNsYXNzTmFtZT17c3R5bGVzLmZpbHRlckJ5UH0+XG4gICAgICAgICAgICAgICAgICAgIHtnZW5yZX1cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5wbGF5bGlzdFRpdGxlQ29sfT5ObyBkYXRhLi4uPC9wPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyQmxvY2s7Il0sIm5hbWVzIjpbInN0eWxlcyIsImNsYXNzTmFtZXMiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJUcmFja3NDb250ZXh0IiwiRmlsdGVyQmxvY2siLCJpc0RhdGVPcGVuZWQiLCJzZXRJc0RhdGVPcGVuZWQiLCJpc0dlbnJlT3BlbmVkIiwic2V0SXNHZW5yZU9wZW5lZCIsInRyYWNrcyIsImlzQXJ0aXN0T3BlbmVkIiwic2V0SXNBcnRpc3RPcGVuZWQiLCJ1bmlxdWVBcnRpc3RzIiwiQXJyYXkiLCJmcm9tIiwiU2V0IiwibWFwIiwidHJhY2siLCJhdXRob3IiLCJmaWx0ZXIiLCJzb3J0IiwiYSIsImIiLCJsb2NhbGVDb21wYXJlIiwiY291bnRVbmlxdWVBcnRpc3RzIiwibGVuZ3RoIiwidW5pcXVlQXJ0aXN0c0NvdW50Iiwic2V0VW5pcXVlQXJ0aXN0c0NvdW50IiwidG9nZ2xlQXJ0aXN0IiwicHJldlN0YXRlIiwidW5pcXVlRGF0ZXMiLCJyZWxlYXNlX2RhdGUiLCJ0b2dnbGVEYXRlIiwidW5pcXVlR2VucmVzIiwiZ2VucmUiLCJ0b2dnbGVHZW5yZSIsImRpdiIsImNsYXNzTmFtZSIsImNlbnRlckJsb2NrRmlsdGVyIiwiZmlsdGVyVGl0bGUiLCJvbkNsaWNrIiwiZmlsdGVyQnV0dG9uIiwiYnV0dG9uQXV0aG9yIiwiYnRuVGV4dCIsImZpbHRlckJ5IiwidWwiLCJhcnRpc3RMaXN0IiwiYXJ0aXN0IiwiaW5kZXgiLCJsaSIsImZpbHRlckJ5UCIsInAiLCJwbGF5bGlzdFRpdGxlQ29sIiwiYnV0dG9uWWVhciIsImJ1dHRvbkdlbnJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/FilterBlock/FilterBlock.tsx\n"));

/***/ })

});