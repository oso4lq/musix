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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FilterBlock.module.css */ \"(app-pages-browser)/./src/components/FilterBlock/FilterBlock.module.css\");\n/* harmony import */ var _FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _FilterBlockItem_FilterBlockItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../FilterBlockItem/FilterBlockItem */ \"(app-pages-browser)/./src/components/FilterBlockItem/FilterBlockItem.tsx\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data */ \"(app-pages-browser)/./src/components/FilterBlock/data.ts\");\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/hooks */ \"(app-pages-browser)/./src/hooks.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst FilterBlock = ()=>{\n    _s();\n    const playList = (0,_hooks__WEBPACK_IMPORTED_MODULE_5__.useAppSelector)((state)=>state.tracks.playList);\n    const [activeFilter, setActiveFilter] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const handleFilterClick = (newFilter)=>{\n        setActiveFilter((prev)=>newFilter === prev ? null : newFilter);\n    };\n    {}\n    // const [isArtistOpened, setIsArtistOpened] = useState(false);\n    // const [uniqueArtistsCount, setUniqueArtistsCount] = useState(0);\n    // const uniqueArtists = tracks\n    //   ? Array.from(new Set(tracks.map((track: Track) => track.author)))\n    //     .filter((author) => author && author !== \"-\")\n    //     .sort((a, b) => (a && b ? a.localeCompare(b) : 0))\n    //   : [];\n    // const countUniqueArtists = () => {\n    //   if (tracks) {\n    //     setUniqueArtistsCount(uniqueArtists.length);\n    //   }\n    //   return 0;\n    // };\n    // const toggleArtist = () => {\n    //   countUniqueArtists();\n    //   setIsDateOpened(false);\n    //   setIsGenreOpened(false);\n    //   setIsArtistOpened((prevState) => !prevState);\n    // };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().centerBlockFilter), (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().filter)),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().filterTitle),\n                children: \"Search for:\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterBlockItem_FilterBlockItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onClick: ()=>handleFilterClick(\"artists\"),\n                isOpened: activeFilter === \"artists\",\n                list: _data__WEBPACK_IMPORTED_MODULE_4__.artists,\n                children: \"artist\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterBlockItem_FilterBlockItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onClick: ()=>handleFilterClick(\"years\"),\n                isOpened: activeFilter === \"years\",\n                list: _data__WEBPACK_IMPORTED_MODULE_4__.years,\n                children: \"year\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterBlockItem_FilterBlockItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onClick: ()=>handleFilterClick(\"genres\"),\n                isOpened: activeFilter === \"genres\",\n                list: _data__WEBPACK_IMPORTED_MODULE_4__.genres,\n                children: \"genre\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FilterBlock, \"en3hVn7Y4Xe0swpYr5Ocbz1JAbo=\", false, function() {\n    return [\n        _hooks__WEBPACK_IMPORTED_MODULE_5__.useAppSelector\n    ];\n});\n_c = FilterBlock;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FilterBlock);\nvar _c;\n$RefreshReg$(_c, \"FilterBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0ZpbHRlckJsb2NrL0ZpbHRlckJsb2NrLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRThDO0FBQ1Y7QUFDSDtBQUNnQztBQUNqQjtBQUNQO0FBRXpDLE1BQU1RLGNBQWM7O0lBRWxCLE1BQU1DLFdBQVdGLHNEQUFjQSxDQUFDLENBQUNHLFFBQVVBLE1BQU1DLE1BQU0sQ0FBQ0YsUUFBUTtJQUVoRSxNQUFNLENBQUNHLGNBQWNDLGdCQUFnQixHQUFHWCwrQ0FBUUEsQ0FBZ0I7SUFDaEUsTUFBTVksb0JBQW9CLENBQUNDO1FBQ3pCRixnQkFBZ0IsQ0FBQ0csT0FBU0QsY0FBY0MsT0FBTyxPQUFPRDtJQUN4RDtJQUVBLENBQStCO0lBQy9CLCtEQUErRDtJQUMvRCxtRUFBbUU7SUFDbkUsK0JBQStCO0lBQy9CLHNFQUFzRTtJQUN0RSxvREFBb0Q7SUFDcEQseURBQXlEO0lBQ3pELFVBQVU7SUFDVixxQ0FBcUM7SUFDckMsa0JBQWtCO0lBQ2xCLG1EQUFtRDtJQUNuRCxNQUFNO0lBQ04sY0FBYztJQUNkLEtBQUs7SUFDTCwrQkFBK0I7SUFDL0IsMEJBQTBCO0lBQzFCLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0Isa0RBQWtEO0lBQ2xELEtBQUs7SUFFTCxxQkFDRSw4REFBQ0U7UUFBSUMsV0FBV2pCLGlEQUFVQSxDQUFDRCxrRkFBd0IsRUFBRUEsdUVBQWE7OzBCQUNoRSw4REFBQ2lCO2dCQUFJQyxXQUFXbEIsNEVBQWtCOzBCQUFFOzs7Ozs7MEJBRXBDLDhEQUFDRyx3RUFBZUE7Z0JBQUNtQixTQUFTLElBQU1SLGtCQUFrQjtnQkFBWVMsVUFBVVgsaUJBQWlCO2dCQUFXWSxNQUFNcEIsMENBQU9BOzBCQUFFOzs7Ozs7MEJBQ25ILDhEQUFDRCx3RUFBZUE7Z0JBQUNtQixTQUFTLElBQU1SLGtCQUFrQjtnQkFBVVMsVUFBVVgsaUJBQWlCO2dCQUFTWSxNQUFNbEIsd0NBQUtBOzBCQUFFOzs7Ozs7MEJBQzdHLDhEQUFDSCx3RUFBZUE7Z0JBQUNtQixTQUFTLElBQU1SLGtCQUFrQjtnQkFBV1MsVUFBVVgsaUJBQWlCO2dCQUFVWSxNQUFNbkIseUNBQU1BOzBCQUFFOzs7Ozs7Ozs7Ozs7QUFJdEg7R0F4Q01HOztRQUVhRCxrREFBY0E7OztLQUYzQkM7QUEwQ04sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRmlsdGVyQmxvY2svRmlsdGVyQmxvY2sudHN4P2I1NmMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9GaWx0ZXJCbG9jay5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBGaWx0ZXJCbG9ja0l0ZW0gZnJvbSBcIi4uL0ZpbHRlckJsb2NrSXRlbS9GaWx0ZXJCbG9ja0l0ZW1cIjtcbmltcG9ydCB7IGFydGlzdHMsIGdlbnJlcywgeWVhcnMgfSBmcm9tIFwiLi9kYXRhXCI7XG5pbXBvcnQgeyB1c2VBcHBTZWxlY3RvciB9IGZyb20gXCJAL2hvb2tzXCI7XG5cbmNvbnN0IEZpbHRlckJsb2NrID0gKCkgPT4ge1xuXG4gIGNvbnN0IHBsYXlMaXN0ID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS50cmFja3MucGxheUxpc3QpXG5cbiAgY29uc3QgW2FjdGl2ZUZpbHRlciwgc2V0QWN0aXZlRmlsdGVyXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuICBjb25zdCBoYW5kbGVGaWx0ZXJDbGljayA9IChuZXdGaWx0ZXI6IHN0cmluZykgPT4ge1xuICAgIHNldEFjdGl2ZUZpbHRlcigocHJldikgPT4gbmV3RmlsdGVyID09PSBwcmV2ID8gbnVsbCA6IG5ld0ZpbHRlcik7XG4gIH1cblxuICB7LyogUFJFVklPVVMgTE9HSUNTIEVYQU1QTEUgKi8gfVxuICAvLyBjb25zdCBbaXNBcnRpc3RPcGVuZWQsIHNldElzQXJ0aXN0T3BlbmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgLy8gY29uc3QgW3VuaXF1ZUFydGlzdHNDb3VudCwgc2V0VW5pcXVlQXJ0aXN0c0NvdW50XSA9IHVzZVN0YXRlKDApO1xuICAvLyBjb25zdCB1bmlxdWVBcnRpc3RzID0gdHJhY2tzXG4gIC8vICAgPyBBcnJheS5mcm9tKG5ldyBTZXQodHJhY2tzLm1hcCgodHJhY2s6IFRyYWNrKSA9PiB0cmFjay5hdXRob3IpKSlcbiAgLy8gICAgIC5maWx0ZXIoKGF1dGhvcikgPT4gYXV0aG9yICYmIGF1dGhvciAhPT0gXCItXCIpXG4gIC8vICAgICAuc29ydCgoYSwgYikgPT4gKGEgJiYgYiA/IGEubG9jYWxlQ29tcGFyZShiKSA6IDApKVxuICAvLyAgIDogW107XG4gIC8vIGNvbnN0IGNvdW50VW5pcXVlQXJ0aXN0cyA9ICgpID0+IHtcbiAgLy8gICBpZiAodHJhY2tzKSB7XG4gIC8vICAgICBzZXRVbmlxdWVBcnRpc3RzQ291bnQodW5pcXVlQXJ0aXN0cy5sZW5ndGgpO1xuICAvLyAgIH1cbiAgLy8gICByZXR1cm4gMDtcbiAgLy8gfTtcbiAgLy8gY29uc3QgdG9nZ2xlQXJ0aXN0ID0gKCkgPT4ge1xuICAvLyAgIGNvdW50VW5pcXVlQXJ0aXN0cygpO1xuICAvLyAgIHNldElzRGF0ZU9wZW5lZChmYWxzZSk7XG4gIC8vICAgc2V0SXNHZW5yZU9wZW5lZChmYWxzZSk7XG4gIC8vICAgc2V0SXNBcnRpc3RPcGVuZWQoKHByZXZTdGF0ZSkgPT4gIXByZXZTdGF0ZSk7XG4gIC8vIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMuY2VudGVyQmxvY2tGaWx0ZXIsIHN0eWxlcy5maWx0ZXIpfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmlsdGVyVGl0bGV9PlNlYXJjaCBmb3I6PC9kaXY+XG5cbiAgICAgIDxGaWx0ZXJCbG9ja0l0ZW0gb25DbGljaz17KCkgPT4gaGFuZGxlRmlsdGVyQ2xpY2soXCJhcnRpc3RzXCIpfSBpc09wZW5lZD17YWN0aXZlRmlsdGVyID09PSBcImFydGlzdHNcIn0gbGlzdD17YXJ0aXN0c30+YXJ0aXN0PC9GaWx0ZXJCbG9ja0l0ZW0+XG4gICAgICA8RmlsdGVyQmxvY2tJdGVtIG9uQ2xpY2s9eygpID0+IGhhbmRsZUZpbHRlckNsaWNrKFwieWVhcnNcIil9IGlzT3BlbmVkPXthY3RpdmVGaWx0ZXIgPT09IFwieWVhcnNcIn0gbGlzdD17eWVhcnN9PnllYXI8L0ZpbHRlckJsb2NrSXRlbT5cbiAgICAgIDxGaWx0ZXJCbG9ja0l0ZW0gb25DbGljaz17KCkgPT4gaGFuZGxlRmlsdGVyQ2xpY2soXCJnZW5yZXNcIil9IGlzT3BlbmVkPXthY3RpdmVGaWx0ZXIgPT09IFwiZ2VucmVzXCJ9IGxpc3Q9e2dlbnJlc30+Z2VucmU8L0ZpbHRlckJsb2NrSXRlbT5cblxuICAgIDwvZGl2ID5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyQmxvY2s7Il0sIm5hbWVzIjpbInN0eWxlcyIsImNsYXNzTmFtZXMiLCJ1c2VTdGF0ZSIsIkZpbHRlckJsb2NrSXRlbSIsImFydGlzdHMiLCJnZW5yZXMiLCJ5ZWFycyIsInVzZUFwcFNlbGVjdG9yIiwiRmlsdGVyQmxvY2siLCJwbGF5TGlzdCIsInN0YXRlIiwidHJhY2tzIiwiYWN0aXZlRmlsdGVyIiwic2V0QWN0aXZlRmlsdGVyIiwiaGFuZGxlRmlsdGVyQ2xpY2siLCJuZXdGaWx0ZXIiLCJwcmV2IiwiZGl2IiwiY2xhc3NOYW1lIiwiY2VudGVyQmxvY2tGaWx0ZXIiLCJmaWx0ZXIiLCJmaWx0ZXJUaXRsZSIsIm9uQ2xpY2siLCJpc09wZW5lZCIsImxpc3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/FilterBlock/FilterBlock.tsx\n"));

/***/ })

});