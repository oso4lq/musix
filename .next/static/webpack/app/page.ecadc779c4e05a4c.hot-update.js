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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FilterBlock.module.css */ \"(app-pages-browser)/./src/components/FilterBlock/FilterBlock.module.css\");\n/* harmony import */ var _FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _FilterBlockItem_FilterBlockItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../FilterBlockItem/FilterBlockItem */ \"(app-pages-browser)/./src/components/FilterBlockItem/FilterBlockItem.tsx\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data */ \"(app-pages-browser)/./src/components/FilterBlock/data.ts\");\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/hooks */ \"(app-pages-browser)/./src/hooks.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst FilterBlock = ()=>{\n    _s();\n    const playList = (0,_hooks__WEBPACK_IMPORTED_MODULE_5__.useAppSelector)((state)=>state.tracks.playList);\n    console.log(playList);\n    const [activeFilter, setActiveFilter] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const handleFilterClick = (newFilter)=>{\n        setActiveFilter((prev)=>newFilter === prev ? null : newFilter);\n    };\n    {}\n    // const [isArtistOpened, setIsArtistOpened] = useState(false);\n    const [uniqueArtistsCount, setUniqueArtistsCount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const uniqueArtists = playList ? Array.from(new Set(playList.map((track)=>track.author))).filter((author)=>author && author !== \"-\").sort((a, b)=>a && b ? a.localeCompare(b) : 0) : [];\n    const countUniqueArtists = ()=>{\n        if (playList) {\n            setUniqueArtistsCount(uniqueArtists.length);\n        }\n        console.log(uniqueArtists.length);\n        return 0;\n    };\n    const toggleArtist = ()=>{\n        countUniqueArtists();\n    };\n    toggleArtist();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().centerBlockFilter), (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().filter)),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().filterTitle),\n                children: \"Search for:\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterBlockItem_FilterBlockItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onClick: ()=>handleFilterClick(\"artists\"),\n                isOpened: activeFilter === \"artists\",\n                list: _data__WEBPACK_IMPORTED_MODULE_4__.artists,\n                children: \"artist\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterBlockItem_FilterBlockItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onClick: ()=>handleFilterClick(\"years\"),\n                isOpened: activeFilter === \"years\",\n                list: _data__WEBPACK_IMPORTED_MODULE_4__.years,\n                children: \"year\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterBlockItem_FilterBlockItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onClick: ()=>handleFilterClick(\"genres\"),\n                isOpened: activeFilter === \"genres\",\n                list: _data__WEBPACK_IMPORTED_MODULE_4__.genres,\n                children: \"genre\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FilterBlock, \"+w8rcuek1ipUhv705OQvp7B+uz8=\", false, function() {\n    return [\n        _hooks__WEBPACK_IMPORTED_MODULE_5__.useAppSelector\n    ];\n});\n_c = FilterBlock;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FilterBlock);\nvar _c;\n$RefreshReg$(_c, \"FilterBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0ZpbHRlckJsb2NrL0ZpbHRlckJsb2NrLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRThDO0FBQ1Y7QUFDSDtBQUNnQztBQUNqQjtBQUNQO0FBR3pDLE1BQU1RLGNBQWM7O0lBRWxCLE1BQU1DLFdBQVdGLHNEQUFjQSxDQUFDLENBQUNHLFFBQVVBLE1BQU1DLE1BQU0sQ0FBQ0YsUUFBUTtJQUNoRUcsUUFBUUMsR0FBRyxDQUFDSjtJQUVaLE1BQU0sQ0FBQ0ssY0FBY0MsZ0JBQWdCLEdBQUdiLCtDQUFRQSxDQUFnQjtJQUNoRSxNQUFNYyxvQkFBb0IsQ0FBQ0M7UUFDekJGLGdCQUFnQixDQUFDRyxPQUFTRCxjQUFjQyxPQUFPLE9BQU9EO0lBQ3hEO0lBRUEsQ0FBK0I7SUFDL0IsK0RBQStEO0lBQy9ELE1BQU0sQ0FBQ0Usb0JBQW9CQyxzQkFBc0IsR0FBR2xCLCtDQUFRQSxDQUFDO0lBQzdELE1BQU1tQixnQkFBZ0JaLFdBQ2xCYSxNQUFNQyxJQUFJLENBQUMsSUFBSUMsSUFBSWYsU0FBU2dCLEdBQUcsQ0FBQyxDQUFDQyxRQUFxQkEsTUFBTUMsTUFBTSxJQUNqRUMsTUFBTSxDQUFDLENBQUNELFNBQVdBLFVBQVVBLFdBQVcsS0FDeENFLElBQUksQ0FBQyxDQUFDQyxHQUFHQyxJQUFPRCxLQUFLQyxJQUFJRCxFQUFFRSxhQUFhLENBQUNELEtBQUssS0FDL0MsRUFBRTtJQUNOLE1BQU1FLHFCQUFxQjtRQUN6QixJQUFJeEIsVUFBVTtZQUNaVyxzQkFBc0JDLGNBQWNhLE1BQU07UUFDNUM7UUFDQXRCLFFBQVFDLEdBQUcsQ0FBQ1EsY0FBY2EsTUFBTTtRQUNoQyxPQUFPO0lBQ1Q7SUFDQSxNQUFNQyxlQUFlO1FBQ25CRjtJQUNGO0lBQ0FFO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVdwQyxpREFBVUEsQ0FBQ0Qsa0ZBQXdCLEVBQUVBLHVFQUFhOzswQkFDaEUsOERBQUNvQztnQkFBSUMsV0FBV3JDLDRFQUFrQjswQkFBRTs7Ozs7OzBCQUVwQyw4REFBQ0csd0VBQWVBO2dCQUFDcUMsU0FBUyxJQUFNeEIsa0JBQWtCO2dCQUFZeUIsVUFBVTNCLGlCQUFpQjtnQkFBVzRCLE1BQU10QywwQ0FBT0E7MEJBQUU7Ozs7OzswQkFDbkgsOERBQUNELHdFQUFlQTtnQkFBQ3FDLFNBQVMsSUFBTXhCLGtCQUFrQjtnQkFBVXlCLFVBQVUzQixpQkFBaUI7Z0JBQVM0QixNQUFNcEMsd0NBQUtBOzBCQUFFOzs7Ozs7MEJBQzdHLDhEQUFDSCx3RUFBZUE7Z0JBQUNxQyxTQUFTLElBQU14QixrQkFBa0I7Z0JBQVd5QixVQUFVM0IsaUJBQWlCO2dCQUFVNEIsTUFBTXJDLHlDQUFNQTswQkFBRTs7Ozs7Ozs7Ozs7O0FBSXRIO0dBeENNRzs7UUFFYUQsa0RBQWNBOzs7S0FGM0JDO0FBMENOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0ZpbHRlckJsb2NrL0ZpbHRlckJsb2NrLnRzeD9iNTZjIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vRmlsdGVyQmxvY2subW9kdWxlLmNzc1wiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRmlsdGVyQmxvY2tJdGVtIGZyb20gXCIuLi9GaWx0ZXJCbG9ja0l0ZW0vRmlsdGVyQmxvY2tJdGVtXCI7XG5pbXBvcnQgeyBhcnRpc3RzLCBnZW5yZXMsIHllYXJzIH0gZnJvbSBcIi4vZGF0YVwiO1xuaW1wb3J0IHsgdXNlQXBwU2VsZWN0b3IgfSBmcm9tIFwiQC9ob29rc1wiO1xuaW1wb3J0IHsgdHJhY2tUeXBlIH0gZnJvbSBcIkAvdHlwZXMvdHlwZXNcIjtcblxuY29uc3QgRmlsdGVyQmxvY2sgPSAoKSA9PiB7XG5cbiAgY29uc3QgcGxheUxpc3QgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnRyYWNrcy5wbGF5TGlzdClcbiAgY29uc29sZS5sb2cocGxheUxpc3QpO1xuXG4gIGNvbnN0IFthY3RpdmVGaWx0ZXIsIHNldEFjdGl2ZUZpbHRlcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcbiAgY29uc3QgaGFuZGxlRmlsdGVyQ2xpY2sgPSAobmV3RmlsdGVyOiBzdHJpbmcpID0+IHtcbiAgICBzZXRBY3RpdmVGaWx0ZXIoKHByZXYpID0+IG5ld0ZpbHRlciA9PT0gcHJldiA/IG51bGwgOiBuZXdGaWx0ZXIpO1xuICB9XG5cbiAgey8qIFBSRVZJT1VTIExPR0lDUyBFWEFNUExFICovIH1cbiAgLy8gY29uc3QgW2lzQXJ0aXN0T3BlbmVkLCBzZXRJc0FydGlzdE9wZW5lZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt1bmlxdWVBcnRpc3RzQ291bnQsIHNldFVuaXF1ZUFydGlzdHNDb3VudF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgdW5pcXVlQXJ0aXN0cyA9IHBsYXlMaXN0XG4gICAgPyBBcnJheS5mcm9tKG5ldyBTZXQocGxheUxpc3QubWFwKCh0cmFjazogdHJhY2tUeXBlKSA9PiB0cmFjay5hdXRob3IpKSlcbiAgICAgIC5maWx0ZXIoKGF1dGhvcikgPT4gYXV0aG9yICYmIGF1dGhvciAhPT0gXCItXCIpXG4gICAgICAuc29ydCgoYSwgYikgPT4gKGEgJiYgYiA/IGEubG9jYWxlQ29tcGFyZShiKSA6IDApKVxuICAgIDogW107XG4gIGNvbnN0IGNvdW50VW5pcXVlQXJ0aXN0cyA9ICgpID0+IHtcbiAgICBpZiAocGxheUxpc3QpIHtcbiAgICAgIHNldFVuaXF1ZUFydGlzdHNDb3VudCh1bmlxdWVBcnRpc3RzLmxlbmd0aCk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHVuaXF1ZUFydGlzdHMubGVuZ3RoKTtcbiAgICByZXR1cm4gMDtcbiAgfTtcbiAgY29uc3QgdG9nZ2xlQXJ0aXN0ID0gKCkgPT4ge1xuICAgIGNvdW50VW5pcXVlQXJ0aXN0cygpO1xuICB9O1xuICB0b2dnbGVBcnRpc3QoKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5jZW50ZXJCbG9ja0ZpbHRlciwgc3R5bGVzLmZpbHRlcil9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5maWx0ZXJUaXRsZX0+U2VhcmNoIGZvcjo8L2Rpdj5cblxuICAgICAgPEZpbHRlckJsb2NrSXRlbSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVGaWx0ZXJDbGljayhcImFydGlzdHNcIil9IGlzT3BlbmVkPXthY3RpdmVGaWx0ZXIgPT09IFwiYXJ0aXN0c1wifSBsaXN0PXthcnRpc3RzfT5hcnRpc3Q8L0ZpbHRlckJsb2NrSXRlbT5cbiAgICAgIDxGaWx0ZXJCbG9ja0l0ZW0gb25DbGljaz17KCkgPT4gaGFuZGxlRmlsdGVyQ2xpY2soXCJ5ZWFyc1wiKX0gaXNPcGVuZWQ9e2FjdGl2ZUZpbHRlciA9PT0gXCJ5ZWFyc1wifSBsaXN0PXt5ZWFyc30+eWVhcjwvRmlsdGVyQmxvY2tJdGVtPlxuICAgICAgPEZpbHRlckJsb2NrSXRlbSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVGaWx0ZXJDbGljayhcImdlbnJlc1wiKX0gaXNPcGVuZWQ9e2FjdGl2ZUZpbHRlciA9PT0gXCJnZW5yZXNcIn0gbGlzdD17Z2VucmVzfT5nZW5yZTwvRmlsdGVyQmxvY2tJdGVtPlxuXG4gICAgPC9kaXYgPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJCbG9jazsiXSwibmFtZXMiOlsic3R5bGVzIiwiY2xhc3NOYW1lcyIsInVzZVN0YXRlIiwiRmlsdGVyQmxvY2tJdGVtIiwiYXJ0aXN0cyIsImdlbnJlcyIsInllYXJzIiwidXNlQXBwU2VsZWN0b3IiLCJGaWx0ZXJCbG9jayIsInBsYXlMaXN0Iiwic3RhdGUiLCJ0cmFja3MiLCJjb25zb2xlIiwibG9nIiwiYWN0aXZlRmlsdGVyIiwic2V0QWN0aXZlRmlsdGVyIiwiaGFuZGxlRmlsdGVyQ2xpY2siLCJuZXdGaWx0ZXIiLCJwcmV2IiwidW5pcXVlQXJ0aXN0c0NvdW50Iiwic2V0VW5pcXVlQXJ0aXN0c0NvdW50IiwidW5pcXVlQXJ0aXN0cyIsIkFycmF5IiwiZnJvbSIsIlNldCIsIm1hcCIsInRyYWNrIiwiYXV0aG9yIiwiZmlsdGVyIiwic29ydCIsImEiLCJiIiwibG9jYWxlQ29tcGFyZSIsImNvdW50VW5pcXVlQXJ0aXN0cyIsImxlbmd0aCIsInRvZ2dsZUFydGlzdCIsImRpdiIsImNsYXNzTmFtZSIsImNlbnRlckJsb2NrRmlsdGVyIiwiZmlsdGVyVGl0bGUiLCJvbkNsaWNrIiwiaXNPcGVuZWQiLCJsaXN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/FilterBlock/FilterBlock.tsx\n"));

/***/ })

});