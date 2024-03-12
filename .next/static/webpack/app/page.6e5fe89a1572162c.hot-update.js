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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FilterBlock.module.css */ \"(app-pages-browser)/./src/components/FilterBlock/FilterBlock.module.css\");\n/* harmony import */ var _FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _contexts_tracks_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/contexts/tracks-context */ \"(app-pages-browser)/./src/contexts/tracks-context.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst FilterBlock = ()=>{\n    _s();\n    const { tracks } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_tracks_context__WEBPACK_IMPORTED_MODULE_3__.TracksContext);\n    const [buttonHovered, setButtonHovered] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    {}\n    const [isArtistOpened, setIsArtistOpened] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [uniqueArtistsCount, setUniqueArtistsCount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    // const uniqueArtists = tracks\n    //   ? Array.from(new Set(tracks.map((track: Track) => track.author)))\n    //     .filter((author) => author && author !== \"-\")\n    //     .sort((a, b) => (a && b ? a.localeCompare(b) : 0))\n    //   : [];\n    // const countUniqueArtists = () => {\n    //   if (tracks) {\n    //     // const uniqueArtists = Array.from(new Set(tracks.map((track: Track) => track.author)));\n    //     setUniqueArtistsCount(uniqueArtists.length);\n    //   }\n    //   return 0;\n    // };\n    const toggleArtist = ()=>{\n        // countUniqueArtists();\n        setIsDateOpened(false);\n        setIsGenreOpened(false);\n        setIsArtistOpened((prevState)=>!prevState);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (tracks) {\n            const uniqueArtists1 = Array.from(new Set(tracks.map((track)=>track.author))).filter((author)=>author && author !== \"-\").sort((a, b)=>a && b ? a.localeCompare(b) : 0);\n            setUniqueArtistsCount(uniqueArtists1.length);\n        }\n    }, [\n        tracks\n    ]);\n    {}\n    const [isDateOpened, setIsDateOpened] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const uniqueDates = tracks ? Array.from(new Set(tracks.map((track)=>track.release_date))).filter((release_date)=>release_date !== \"-\").sort((a, b)=>a && b ? a.localeCompare(b) : 0) : [];\n    const toggleDate = ()=>{\n        setIsArtistOpened(false);\n        setIsGenreOpened(false);\n        setIsDateOpened((prevState)=>!prevState);\n    };\n    {}\n    const [isGenreOpened, setIsGenreOpened] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const uniqueGenres = tracks ? Array.from(new Set(tracks.map((track)=>track.genre))).filter((genre)=>genre !== \"-\").sort((a, b)=>a && b ? a.localeCompare(b) : 0) : [];\n    const toggleGenre = ()=>{\n        setIsArtistOpened(false);\n        setIsDateOpened(false);\n        setIsGenreOpened((prevState)=>!prevState);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().centerBlockFilter), (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().filter)),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().filterTitle),\n                children: \"Search for:\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, undefined),\n            uniqueArtistsCount > 0 && isArtistOpened && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().artistCountPopUp),\n                children: uniqueArtistsCount\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 76,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: toggleArtist,\n                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().filterButton), (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().buttonAuthor), (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().btnText), {\n                    [(_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().active)]: isArtistOpened\n                }),\n                onMouseEnter: ()=>setButtonHovered(true),\n                onMouseLeave: ()=>setButtonHovered(false),\n                style: {\n                    borderColor: buttonHovered ? \"#AD61FF\" : \"#fff\",\n                    color: buttonHovered ? \"#AD61FF\" : \"#fff\"\n                },\n                children: \"artist\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, undefined),\n            isArtistOpened && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().filterBy),\n                children: uniqueArtists.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().artistList),\n                    children: uniqueArtists.map((artist, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().filterByP),\n                            children: artist\n                        }, index, false, {\n                            fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                            lineNumber: 94,\n                            columnNumber: 17\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                    lineNumber: 92,\n                    columnNumber: 13\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().playlistTitleCol),\n                    children: \"No data...\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                    lineNumber: 100,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 90,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: toggleDate,\n                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().filterButton), (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().buttonYear), (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().btnText)),\n                children: \"release date\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 108,\n                columnNumber: 7\n            }, undefined),\n            isDateOpened && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().filterBy),\n                children: tracks ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: uniqueDates.map((release_date, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().filterByP),\n                            children: release_date\n                        }, index, false, {\n                            fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                            lineNumber: 124,\n                            columnNumber: 19\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                    lineNumber: 122,\n                    columnNumber: 15\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().playlistTitleCol),\n                    children: \"No data...\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                    lineNumber: 130,\n                    columnNumber: 15\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 120,\n                columnNumber: 11\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: toggleGenre,\n                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().filterButton), (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().buttonGenre), (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().btnText)),\n                children: \"genre\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 136,\n                columnNumber: 7\n            }, undefined),\n            isGenreOpened && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().filterBy),\n                children: tracks ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: uniqueGenres.map((genre, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().filterByP),\n                            children: genre\n                        }, index, false, {\n                            fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                            lineNumber: 154,\n                            columnNumber: 19\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                    lineNumber: 152,\n                    columnNumber: 15\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_4___default().playlistTitleCol),\n                    children: \"No data...\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                    lineNumber: 160,\n                    columnNumber: 15\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 150,\n                columnNumber: 11\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n        lineNumber: 71,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FilterBlock, \"IEF33eEpCGQhD4a6yxNGpjK4/Qw=\");\n_c = FilterBlock;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FilterBlock);\nvar _c;\n$RefreshReg$(_c, \"FilterBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0ZpbHRlckJsb2NrL0ZpbHRlckJsb2NrLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE4QztBQUNWO0FBQ29CO0FBQ0U7QUFHMUQsTUFBTU0sY0FBd0I7O0lBRTVCLE1BQU0sRUFBRUMsTUFBTSxFQUFFLEdBQUdMLGlEQUFVQSxDQUFDRyxtRUFBYUE7SUFFM0MsTUFBTSxDQUFDRyxlQUFlQyxpQkFBaUIsR0FBR0wsK0NBQVFBLENBQUM7SUFFbkQsQ0FBYztJQUNkLE1BQU0sQ0FBQ00sZ0JBQWdCQyxrQkFBa0IsR0FBR1AsK0NBQVFBLENBQUM7SUFDckQsTUFBTSxDQUFDUSxvQkFBb0JDLHNCQUFzQixHQUFHVCwrQ0FBUUEsQ0FBQztJQUM3RCwrQkFBK0I7SUFDL0Isc0VBQXNFO0lBQ3RFLG9EQUFvRDtJQUNwRCx5REFBeUQ7SUFDekQsVUFBVTtJQUNWLHFDQUFxQztJQUNyQyxrQkFBa0I7SUFDbEIsZ0dBQWdHO0lBQ2hHLG1EQUFtRDtJQUNuRCxNQUFNO0lBQ04sY0FBYztJQUNkLEtBQUs7SUFDTCxNQUFNVSxlQUFlO1FBQ25CLHdCQUF3QjtRQUN4QkMsZ0JBQWdCO1FBQ2hCQyxpQkFBaUI7UUFDakJMLGtCQUFrQixDQUFDTSxZQUFjLENBQUNBO0lBQ3BDO0lBQ0FkLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSUksUUFBUTtZQUNWLE1BQU1XLGlCQUFnQkMsTUFBTUMsSUFBSSxDQUFDLElBQUlDLElBQUlkLE9BQU9lLEdBQUcsQ0FBQyxDQUFDQyxRQUFpQkEsTUFBTUMsTUFBTSxJQUMvRUMsTUFBTSxDQUFDLENBQUNELFNBQVdBLFVBQVVBLFdBQVcsS0FDeENFLElBQUksQ0FBQyxDQUFDQyxHQUFHQyxJQUFPRCxLQUFLQyxJQUFJRCxFQUFFRSxhQUFhLENBQUNELEtBQUs7WUFDakRmLHNCQUFzQkssZUFBY1ksTUFBTTtRQUM1QztJQUNGLEdBQUc7UUFBQ3ZCO0tBQU87SUFJWCxDQUFZO0lBQ1os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Ozs7O1lBSUNtQywrQkFDRSw4REFBQ0k7Z0JBQUlDLFdBQVd4Qyx5RUFBZTswQkFDNUJPLHVCQUNDLDhEQUFDZ0Q7OEJBQ0VuQixhQUFhZCxHQUFHLENBQUMsQ0FBQ2UsT0FBT3FCLHNCQUN4Qiw4REFBQ0M7NEJBQWVuQixXQUFXeEMsMEVBQWdCO3NDQUN4Q3FDOzJCQURNcUI7Ozs7Ozs7Ozs4Q0FNYiw4REFBQ0c7b0JBQUVyQixXQUFXeEMsaUZBQXVCOzhCQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztBQU1yRDtHQS9KTU07S0FBQUE7QUFpS04sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRmlsdGVyQmxvY2svRmlsdGVyQmxvY2sudHN4P2I1NmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9GaWx0ZXJCbG9jay5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVHJhY2tzQ29udGV4dCB9IGZyb20gXCJAL2NvbnRleHRzL3RyYWNrcy1jb250ZXh0XCI7XG5pbXBvcnQgeyBUcmFjayB9IGZyb20gXCJAL2ludGVyZmFjZXMvaW50ZXJmYWNlc1wiO1xuXG5jb25zdCBGaWx0ZXJCbG9jazogUmVhY3QuRkMgPSAoKSA9PiB7XG5cbiAgY29uc3QgeyB0cmFja3MgfSA9IHVzZUNvbnRleHQoVHJhY2tzQ29udGV4dCk7XG5cbiAgY29uc3QgW2J1dHRvbkhvdmVyZWQsIHNldEJ1dHRvbkhvdmVyZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHsvKiBBUlRJU1QgKi8gfVxuICBjb25zdCBbaXNBcnRpc3RPcGVuZWQsIHNldElzQXJ0aXN0T3BlbmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3VuaXF1ZUFydGlzdHNDb3VudCwgc2V0VW5pcXVlQXJ0aXN0c0NvdW50XSA9IHVzZVN0YXRlKDApO1xuICAvLyBjb25zdCB1bmlxdWVBcnRpc3RzID0gdHJhY2tzXG4gIC8vICAgPyBBcnJheS5mcm9tKG5ldyBTZXQodHJhY2tzLm1hcCgodHJhY2s6IFRyYWNrKSA9PiB0cmFjay5hdXRob3IpKSlcbiAgLy8gICAgIC5maWx0ZXIoKGF1dGhvcikgPT4gYXV0aG9yICYmIGF1dGhvciAhPT0gXCItXCIpXG4gIC8vICAgICAuc29ydCgoYSwgYikgPT4gKGEgJiYgYiA/IGEubG9jYWxlQ29tcGFyZShiKSA6IDApKVxuICAvLyAgIDogW107XG4gIC8vIGNvbnN0IGNvdW50VW5pcXVlQXJ0aXN0cyA9ICgpID0+IHtcbiAgLy8gICBpZiAodHJhY2tzKSB7XG4gIC8vICAgICAvLyBjb25zdCB1bmlxdWVBcnRpc3RzID0gQXJyYXkuZnJvbShuZXcgU2V0KHRyYWNrcy5tYXAoKHRyYWNrOiBUcmFjaykgPT4gdHJhY2suYXV0aG9yKSkpO1xuICAvLyAgICAgc2V0VW5pcXVlQXJ0aXN0c0NvdW50KHVuaXF1ZUFydGlzdHMubGVuZ3RoKTtcbiAgLy8gICB9XG4gIC8vICAgcmV0dXJuIDA7XG4gIC8vIH07XG4gIGNvbnN0IHRvZ2dsZUFydGlzdCA9ICgpID0+IHtcbiAgICAvLyBjb3VudFVuaXF1ZUFydGlzdHMoKTtcbiAgICBzZXRJc0RhdGVPcGVuZWQoZmFsc2UpO1xuICAgIHNldElzR2VucmVPcGVuZWQoZmFsc2UpO1xuICAgIHNldElzQXJ0aXN0T3BlbmVkKChwcmV2U3RhdGUpID0+ICFwcmV2U3RhdGUpO1xuICB9O1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh0cmFja3MpIHtcbiAgICAgIGNvbnN0IHVuaXF1ZUFydGlzdHMgPSBBcnJheS5mcm9tKG5ldyBTZXQodHJhY2tzLm1hcCgodHJhY2s6IFRyYWNrKSA9PiB0cmFjay5hdXRob3IpKSlcbiAgICAgICAgLmZpbHRlcigoYXV0aG9yKSA9PiBhdXRob3IgJiYgYXV0aG9yICE9PSBcIi1cIilcbiAgICAgICAgLnNvcnQoKGEsIGIpID0+IChhICYmIGIgPyBhLmxvY2FsZUNvbXBhcmUoYikgOiAwKSk7XG4gICAgICBzZXRVbmlxdWVBcnRpc3RzQ291bnQodW5pcXVlQXJ0aXN0cy5sZW5ndGgpO1xuICAgIH1cbiAgfSwgW3RyYWNrc10pO1xuXG5cblxuICB7LyogREFURSAqLyB9XG4gIGNvbnN0IFtpc0RhdGVPcGVuZWQsIHNldElzRGF0ZU9wZW5lZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHVuaXF1ZURhdGVzID0gdHJhY2tzXG4gICAgPyBBcnJheS5mcm9tKG5ldyBTZXQodHJhY2tzLm1hcCgodHJhY2s6IFRyYWNrKSA9PiB0cmFjay5yZWxlYXNlX2RhdGUpKSlcbiAgICAgIC5maWx0ZXIoKHJlbGVhc2VfZGF0ZSkgPT4gcmVsZWFzZV9kYXRlICE9PSBcIi1cIilcbiAgICAgIC5zb3J0KChhLCBiKSA9PiAoYSAmJiBiID8gYS5sb2NhbGVDb21wYXJlKGIpIDogMCkpXG4gICAgOiBbXTtcbiAgY29uc3QgdG9nZ2xlRGF0ZSA9ICgpID0+IHtcbiAgICBzZXRJc0FydGlzdE9wZW5lZChmYWxzZSk7XG4gICAgc2V0SXNHZW5yZU9wZW5lZChmYWxzZSk7XG4gICAgc2V0SXNEYXRlT3BlbmVkKChwcmV2U3RhdGUpID0+ICFwcmV2U3RhdGUpO1xuICB9O1xuICB7LyogR0VOUkUgKi8gfVxuICBjb25zdCBbaXNHZW5yZU9wZW5lZCwgc2V0SXNHZW5yZU9wZW5lZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHVuaXF1ZUdlbnJlcyA9IHRyYWNrc1xuICAgID8gQXJyYXkuZnJvbShuZXcgU2V0KHRyYWNrcy5tYXAoKHRyYWNrOiBUcmFjaykgPT4gdHJhY2suZ2VucmUpKSlcbiAgICAgIC5maWx0ZXIoKGdlbnJlKSA9PiBnZW5yZSAhPT0gXCItXCIpXG4gICAgICAuc29ydCgoYSwgYikgPT4gKGEgJiYgYiA/IGEubG9jYWxlQ29tcGFyZShiKSA6IDApKVxuICAgIDogW107XG4gIGNvbnN0IHRvZ2dsZUdlbnJlID0gKCkgPT4ge1xuICAgIHNldElzQXJ0aXN0T3BlbmVkKGZhbHNlKTtcbiAgICBzZXRJc0RhdGVPcGVuZWQoZmFsc2UpO1xuICAgIHNldElzR2VucmVPcGVuZWQoKHByZXZTdGF0ZSkgPT4gIXByZXZTdGF0ZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMuY2VudGVyQmxvY2tGaWx0ZXIsIHN0eWxlcy5maWx0ZXIpfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmlsdGVyVGl0bGV9PlNlYXJjaCBmb3I6PC9kaXY+XG5cbiAgICAgIHsvKiBBUlRJU1QgKi99XG4gICAgICB7dW5pcXVlQXJ0aXN0c0NvdW50ID4gMCAmJiBpc0FydGlzdE9wZW5lZCAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXJ0aXN0Q291bnRQb3BVcH0+e3VuaXF1ZUFydGlzdHNDb3VudH08L2Rpdj5cbiAgICAgICl9XG4gICAgICA8ZGl2XG4gICAgICAgIG9uQ2xpY2s9e3RvZ2dsZUFydGlzdH1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5maWx0ZXJCdXR0b24sIHN0eWxlcy5idXR0b25BdXRob3IsIHN0eWxlcy5idG5UZXh0LCB7XG4gICAgICAgICAgW3N0eWxlcy5hY3RpdmVdOiBpc0FydGlzdE9wZW5lZCxcbiAgICAgICAgfSl9XG4gICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0QnV0dG9uSG92ZXJlZCh0cnVlKX1cbiAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRCdXR0b25Ib3ZlcmVkKGZhbHNlKX1cbiAgICAgICAgc3R5bGU9e3sgYm9yZGVyQ29sb3I6IGJ1dHRvbkhvdmVyZWQgPyBcIiNBRDYxRkZcIiA6IFwiI2ZmZlwiLCBjb2xvcjogYnV0dG9uSG92ZXJlZCA/IFwiI0FENjFGRlwiIDogXCIjZmZmXCIgfX1cbiAgICAgID5cbiAgICAgICAgYXJ0aXN0XG4gICAgICA8L2Rpdj5cbiAgICAgIHtpc0FydGlzdE9wZW5lZCAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmlsdGVyQnl9PlxuICAgICAgICAgIHt1bmlxdWVBcnRpc3RzLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMuYXJ0aXN0TGlzdH0+XG4gICAgICAgICAgICAgIHt1bmlxdWVBcnRpc3RzLm1hcCgoYXJ0aXN0LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9e3N0eWxlcy5maWx0ZXJCeVB9PlxuICAgICAgICAgICAgICAgICAge2FydGlzdH1cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnBsYXlsaXN0VGl0bGVDb2x9Pk5vIGRhdGEuLi48L3A+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG5cblxuICAgICAgey8qIERBVEUgKi99XG4gICAgICA8ZGl2XG4gICAgICAgIG9uQ2xpY2s9e3RvZ2dsZURhdGV9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgICBzdHlsZXMuZmlsdGVyQnV0dG9uLFxuICAgICAgICAgIHN0eWxlcy5idXR0b25ZZWFyLFxuICAgICAgICAgIHN0eWxlcy5idG5UZXh0XG4gICAgICAgICl9XG4gICAgICA+XG4gICAgICAgIHJlbGVhc2UgZGF0ZVxuICAgICAgPC9kaXY+XG4gICAgICB7XG4gICAgICAgIGlzRGF0ZU9wZW5lZCAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5maWx0ZXJCeX0+XG4gICAgICAgICAgICB7dHJhY2tzID8gKFxuICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge3VuaXF1ZURhdGVzLm1hcCgocmVsZWFzZV9kYXRlLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9IGNsYXNzTmFtZT17c3R5bGVzLmZpbHRlckJ5UH0+XG4gICAgICAgICAgICAgICAgICAgIHtyZWxlYXNlX2RhdGV9XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucGxheWxpc3RUaXRsZUNvbH0+Tm8gZGF0YS4uLjwvcD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG5cbiAgICAgIHsvKiBHRU5SRSAqL31cbiAgICAgIDxkaXZcbiAgICAgICAgb25DbGljaz17dG9nZ2xlR2VucmV9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgICBzdHlsZXMuZmlsdGVyQnV0dG9uLFxuXG4gICAgICAgICAgc3R5bGVzLmJ1dHRvbkdlbnJlLFxuXG4gICAgICAgICAgc3R5bGVzLmJ0blRleHRcbiAgICAgICAgKX1cbiAgICAgID5cbiAgICAgICAgZ2VucmVcbiAgICAgIDwvZGl2PlxuICAgICAge1xuICAgICAgICBpc0dlbnJlT3BlbmVkICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZpbHRlckJ5fT5cbiAgICAgICAgICAgIHt0cmFja3MgPyAoXG4gICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICB7dW5pcXVlR2VucmVzLm1hcCgoZ2VucmUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtzdHlsZXMuZmlsdGVyQnlQfT5cbiAgICAgICAgICAgICAgICAgICAge2dlbnJlfVxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnBsYXlsaXN0VGl0bGVDb2x9Pk5vIGRhdGEuLi48L3A+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJCbG9jazsiXSwibmFtZXMiOlsic3R5bGVzIiwiY2xhc3NOYW1lcyIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlRyYWNrc0NvbnRleHQiLCJGaWx0ZXJCbG9jayIsInRyYWNrcyIsImJ1dHRvbkhvdmVyZWQiLCJzZXRCdXR0b25Ib3ZlcmVkIiwiaXNBcnRpc3RPcGVuZWQiLCJzZXRJc0FydGlzdE9wZW5lZCIsInVuaXF1ZUFydGlzdHNDb3VudCIsInNldFVuaXF1ZUFydGlzdHNDb3VudCIsInRvZ2dsZUFydGlzdCIsInNldElzRGF0ZU9wZW5lZCIsInNldElzR2VucmVPcGVuZWQiLCJwcmV2U3RhdGUiLCJ1bmlxdWVBcnRpc3RzIiwiQXJyYXkiLCJmcm9tIiwiU2V0IiwibWFwIiwidHJhY2siLCJhdXRob3IiLCJmaWx0ZXIiLCJzb3J0IiwiYSIsImIiLCJsb2NhbGVDb21wYXJlIiwibGVuZ3RoIiwiaXNEYXRlT3BlbmVkIiwidW5pcXVlRGF0ZXMiLCJyZWxlYXNlX2RhdGUiLCJ0b2dnbGVEYXRlIiwiaXNHZW5yZU9wZW5lZCIsInVuaXF1ZUdlbnJlcyIsImdlbnJlIiwidG9nZ2xlR2VucmUiLCJkaXYiLCJjbGFzc05hbWUiLCJjZW50ZXJCbG9ja0ZpbHRlciIsImZpbHRlclRpdGxlIiwiYXJ0aXN0Q291bnRQb3BVcCIsIm9uQ2xpY2siLCJmaWx0ZXJCdXR0b24iLCJidXR0b25BdXRob3IiLCJidG5UZXh0IiwiYWN0aXZlIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwic3R5bGUiLCJib3JkZXJDb2xvciIsImNvbG9yIiwiZmlsdGVyQnkiLCJ1bCIsImFydGlzdExpc3QiLCJhcnRpc3QiLCJpbmRleCIsImxpIiwiZmlsdGVyQnlQIiwicCIsInBsYXlsaXN0VGl0bGVDb2wiLCJidXR0b25ZZWFyIiwiYnV0dG9uR2VucmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/FilterBlock/FilterBlock.tsx\n"));

/***/ })

});