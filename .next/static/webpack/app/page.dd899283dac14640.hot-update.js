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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FilterBlock.module.css */ \"(app-pages-browser)/./src/components/FilterBlock/FilterBlock.module.css\");\n/* harmony import */ var _FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _FilterBlockItem_FilterBlockItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../FilterBlockItem/FilterBlockItem */ \"(app-pages-browser)/./src/components/FilterBlockItem/FilterBlockItem.tsx\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data */ \"(app-pages-browser)/./src/components/FilterBlock/data.ts\");\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/hooks */ \"(app-pages-browser)/./src/hooks.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst FilterBlock = ()=>{\n    _s();\n    const playList = (0,_hooks__WEBPACK_IMPORTED_MODULE_5__.useAppSelector)((state)=>state.tracks.playList);\n    console.log(playList);\n    // Filter logics\n    // const [isArtistOpened, setIsArtistOpened] = useState(false);\n    const [uniqueArtistsCount, setUniqueArtistsCount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const uniqueArtists = playList ? Array.from(new Set(playList.map((track)=>track.author))).filter((author)=>author && author !== \"-\").sort((a, b)=>a && b ? a.localeCompare(b) : 0) : [];\n    const uniqueDates = playList ? Array.from(new Set(playList.map((track)=>track.release_date))).filter((release_date)=>release_date && release_date !== \"-\").sort((a, b)=>a && b ? a.localeCompare(b) : 0) : [];\n    const uniqueGenres = playList ? Array.from(new Set(playList.map((track)=>track.genre))).filter((genre)=>genre && genre !== \"-\").sort((a, b)=>a && b ? a.localeCompare(b) : 0) : [];\n    const countUniqueArtists = ()=>{\n        if (playList) {\n            setUniqueArtistsCount(uniqueArtists.length);\n        }\n        console.log(uniqueArtists);\n        return 0;\n    };\n    const toggleArtist = ()=>{\n        countUniqueArtists();\n    };\n    const [activeFilter, setActiveFilter] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const handleFilterClick = (newFilter)=>{\n        setActiveFilter((prev)=>newFilter === prev ? null : newFilter);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().centerBlockFilter), (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().filter)),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().filterTitle),\n                children: \"Search for:\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterBlockItem_FilterBlockItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onClick: ()=>handleFilterClick(\"author\"),\n                isOpened: activeFilter === \"author\",\n                list: uniqueArtists,\n                children: \"artist\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterBlockItem_FilterBlockItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onClick: ()=>toggleArtist(),\n                isOpened: activeFilter === \"author\",\n                list: uniqueArtists,\n                children: \"artist\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterBlockItem_FilterBlockItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onClick: ()=>handleFilterClick(\"release_date\"),\n                isOpened: activeFilter === \"release_date\",\n                list: _data__WEBPACK_IMPORTED_MODULE_4__.release_dates,\n                children: \"year\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterBlockItem_FilterBlockItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onClick: ()=>handleFilterClick(\"genre\"),\n                isOpened: activeFilter === \"genre\",\n                list: _data__WEBPACK_IMPORTED_MODULE_4__.genres,\n                children: \"genre\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FilterBlock, \"o6Pm8rqr47WktNInHQPSvwgF7P4=\", false, function() {\n    return [\n        _hooks__WEBPACK_IMPORTED_MODULE_5__.useAppSelector\n    ];\n});\n_c = FilterBlock;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FilterBlock);\nvar _c;\n$RefreshReg$(_c, \"FilterBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0ZpbHRlckJsb2NrL0ZpbHRlckJsb2NrLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRThDO0FBQ1Y7QUFDSDtBQUNnQztBQUNUO0FBQ2Y7QUFHekMsTUFBTU8sY0FBYzs7SUFFbEIsTUFBTUMsV0FBV0Ysc0RBQWNBLENBQUMsQ0FBQ0csUUFBVUEsTUFBTUMsTUFBTSxDQUFDRixRQUFRO0lBQ2hFRyxRQUFRQyxHQUFHLENBQUNKO0lBRVosZ0JBQWdCO0lBQ2hCLCtEQUErRDtJQUMvRCxNQUFNLENBQUNLLG9CQUFvQkMsc0JBQXNCLEdBQUdaLCtDQUFRQSxDQUFDO0lBQzdELE1BQU1hLGdCQUFnQlAsV0FDbEJRLE1BQU1DLElBQUksQ0FBQyxJQUFJQyxJQUFJVixTQUFTVyxHQUFHLENBQUMsQ0FBQ0MsUUFBcUJBLE1BQU1DLE1BQU0sSUFDakVDLE1BQU0sQ0FBQyxDQUFDRCxTQUFXQSxVQUFVQSxXQUFXLEtBQ3hDRSxJQUFJLENBQUMsQ0FBQ0MsR0FBR0MsSUFBT0QsS0FBS0MsSUFBSUQsRUFBRUUsYUFBYSxDQUFDRCxLQUFLLEtBQy9DLEVBQUU7SUFDTixNQUFNRSxjQUFjbkIsV0FDaEJRLE1BQU1DLElBQUksQ0FBQyxJQUFJQyxJQUFJVixTQUFTVyxHQUFHLENBQUMsQ0FBQ0MsUUFBcUJBLE1BQU1RLFlBQVksSUFDdkVOLE1BQU0sQ0FBQyxDQUFDTSxlQUFpQkEsZ0JBQWdCQSxpQkFBaUIsS0FDMURMLElBQUksQ0FBQyxDQUFDQyxHQUFHQyxJQUFPRCxLQUFLQyxJQUFJRCxFQUFFRSxhQUFhLENBQUNELEtBQUssS0FDL0MsRUFBRTtJQUNOLE1BQU1JLGVBQWVyQixXQUNqQlEsTUFBTUMsSUFBSSxDQUFDLElBQUlDLElBQUlWLFNBQVNXLEdBQUcsQ0FBQyxDQUFDQyxRQUFxQkEsTUFBTVUsS0FBSyxJQUNoRVIsTUFBTSxDQUFDLENBQUNRLFFBQVVBLFNBQVNBLFVBQVUsS0FDckNQLElBQUksQ0FBQyxDQUFDQyxHQUFHQyxJQUFPRCxLQUFLQyxJQUFJRCxFQUFFRSxhQUFhLENBQUNELEtBQUssS0FDL0MsRUFBRTtJQUNOLE1BQU1NLHFCQUFxQjtRQUN6QixJQUFJdkIsVUFBVTtZQUNaTSxzQkFBc0JDLGNBQWNpQixNQUFNO1FBQzVDO1FBQ0FyQixRQUFRQyxHQUFHLENBQUNHO1FBQ1osT0FBTztJQUNUO0lBQ0EsTUFBTWtCLGVBQWU7UUFDbkJGO0lBQ0Y7SUFFQSxNQUFNLENBQUNHLGNBQWNDLGdCQUFnQixHQUFHakMsK0NBQVFBLENBQWdCO0lBQ2hFLE1BQU1rQyxvQkFBb0IsQ0FBQ0M7UUFDekJGLGdCQUFnQixDQUFDRyxPQUFTRCxjQUFjQyxPQUFPLE9BQU9EO0lBQ3hEO0lBSUEscUJBQ0UsOERBQUNFO1FBQUlDLFdBQVd2QyxpREFBVUEsQ0FBQ0Qsa0ZBQXdCLEVBQUVBLHVFQUFhOzswQkFDaEUsOERBQUN1QztnQkFBSUMsV0FBV3hDLDRFQUFrQjswQkFBRTs7Ozs7OzBCQUVwQyw4REFBQ0csd0VBQWVBO2dCQUFDd0MsU0FBUyxJQUFNUCxrQkFBa0I7Z0JBQVdRLFVBQVVWLGlCQUFpQjtnQkFBVVcsTUFBTTlCOzBCQUFlOzs7Ozs7MEJBQ3ZILDhEQUFDWix3RUFBZUE7Z0JBQUN3QyxTQUFTLElBQU1WO2dCQUFnQlcsVUFBVVYsaUJBQWlCO2dCQUFVVyxNQUFNOUI7MEJBQWU7Ozs7OzswQkFDMUcsOERBQUNaLHdFQUFlQTtnQkFBQ3dDLFNBQVMsSUFBTVAsa0JBQWtCO2dCQUFpQlEsVUFBVVYsaUJBQWlCO2dCQUFnQlcsTUFBTXpDLGdEQUFhQTswQkFBRTs7Ozs7OzBCQUNuSSw4REFBQ0Qsd0VBQWVBO2dCQUFDd0MsU0FBUyxJQUFNUCxrQkFBa0I7Z0JBQVVRLFVBQVVWLGlCQUFpQjtnQkFBU1csTUFBTXhDLHlDQUFNQTswQkFBRTs7Ozs7Ozs7Ozs7O0FBSXBIO0dBcERNRTs7UUFFYUQsa0RBQWNBOzs7S0FGM0JDO0FBc0ROLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0ZpbHRlckJsb2NrL0ZpbHRlckJsb2NrLnRzeD9iNTZjIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vRmlsdGVyQmxvY2subW9kdWxlLmNzc1wiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRmlsdGVyQmxvY2tJdGVtIGZyb20gXCIuLi9GaWx0ZXJCbG9ja0l0ZW0vRmlsdGVyQmxvY2tJdGVtXCI7XG5pbXBvcnQgeyBhdXRob3JzLCByZWxlYXNlX2RhdGVzLCBnZW5yZXMgfSBmcm9tIFwiLi9kYXRhXCI7XG5pbXBvcnQgeyB1c2VBcHBTZWxlY3RvciB9IGZyb20gXCJAL2hvb2tzXCI7XG5pbXBvcnQgeyB0cmFja1R5cGUgfSBmcm9tIFwiQC90eXBlcy90eXBlc1wiO1xuXG5jb25zdCBGaWx0ZXJCbG9jayA9ICgpID0+IHtcblxuICBjb25zdCBwbGF5TGlzdCA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudHJhY2tzLnBsYXlMaXN0KVxuICBjb25zb2xlLmxvZyhwbGF5TGlzdCk7XG5cbiAgLy8gRmlsdGVyIGxvZ2ljc1xuICAvLyBjb25zdCBbaXNBcnRpc3RPcGVuZWQsIHNldElzQXJ0aXN0T3BlbmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3VuaXF1ZUFydGlzdHNDb3VudCwgc2V0VW5pcXVlQXJ0aXN0c0NvdW50XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCB1bmlxdWVBcnRpc3RzID0gcGxheUxpc3RcbiAgICA/IEFycmF5LmZyb20obmV3IFNldChwbGF5TGlzdC5tYXAoKHRyYWNrOiB0cmFja1R5cGUpID0+IHRyYWNrLmF1dGhvcikpKVxuICAgICAgLmZpbHRlcigoYXV0aG9yKSA9PiBhdXRob3IgJiYgYXV0aG9yICE9PSBcIi1cIilcbiAgICAgIC5zb3J0KChhLCBiKSA9PiAoYSAmJiBiID8gYS5sb2NhbGVDb21wYXJlKGIpIDogMCkpXG4gICAgOiBbXTtcbiAgY29uc3QgdW5pcXVlRGF0ZXMgPSBwbGF5TGlzdFxuICAgID8gQXJyYXkuZnJvbShuZXcgU2V0KHBsYXlMaXN0Lm1hcCgodHJhY2s6IHRyYWNrVHlwZSkgPT4gdHJhY2sucmVsZWFzZV9kYXRlKSkpXG4gICAgICAuZmlsdGVyKChyZWxlYXNlX2RhdGUpID0+IHJlbGVhc2VfZGF0ZSAmJiByZWxlYXNlX2RhdGUgIT09IFwiLVwiKVxuICAgICAgLnNvcnQoKGEsIGIpID0+IChhICYmIGIgPyBhLmxvY2FsZUNvbXBhcmUoYikgOiAwKSlcbiAgICA6IFtdO1xuICBjb25zdCB1bmlxdWVHZW5yZXMgPSBwbGF5TGlzdFxuICAgID8gQXJyYXkuZnJvbShuZXcgU2V0KHBsYXlMaXN0Lm1hcCgodHJhY2s6IHRyYWNrVHlwZSkgPT4gdHJhY2suZ2VucmUpKSlcbiAgICAgIC5maWx0ZXIoKGdlbnJlKSA9PiBnZW5yZSAmJiBnZW5yZSAhPT0gXCItXCIpXG4gICAgICAuc29ydCgoYSwgYikgPT4gKGEgJiYgYiA/IGEubG9jYWxlQ29tcGFyZShiKSA6IDApKVxuICAgIDogW107XG4gIGNvbnN0IGNvdW50VW5pcXVlQXJ0aXN0cyA9ICgpID0+IHtcbiAgICBpZiAocGxheUxpc3QpIHtcbiAgICAgIHNldFVuaXF1ZUFydGlzdHNDb3VudCh1bmlxdWVBcnRpc3RzLmxlbmd0aCk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHVuaXF1ZUFydGlzdHMpO1xuICAgIHJldHVybiAwO1xuICB9O1xuICBjb25zdCB0b2dnbGVBcnRpc3QgPSAoKSA9PiB7XG4gICAgY291bnRVbmlxdWVBcnRpc3RzKCk7XG4gIH07XG5cbiAgY29uc3QgW2FjdGl2ZUZpbHRlciwgc2V0QWN0aXZlRmlsdGVyXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuICBjb25zdCBoYW5kbGVGaWx0ZXJDbGljayA9IChuZXdGaWx0ZXI6IHN0cmluZykgPT4ge1xuICAgIHNldEFjdGl2ZUZpbHRlcigocHJldikgPT4gbmV3RmlsdGVyID09PSBwcmV2ID8gbnVsbCA6IG5ld0ZpbHRlcik7XG4gIH1cblxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMuY2VudGVyQmxvY2tGaWx0ZXIsIHN0eWxlcy5maWx0ZXIpfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmlsdGVyVGl0bGV9PlNlYXJjaCBmb3I6PC9kaXY+XG5cbiAgICAgIDxGaWx0ZXJCbG9ja0l0ZW0gb25DbGljaz17KCkgPT4gaGFuZGxlRmlsdGVyQ2xpY2soXCJhdXRob3JcIil9IGlzT3BlbmVkPXthY3RpdmVGaWx0ZXIgPT09IFwiYXV0aG9yXCJ9IGxpc3Q9e3VuaXF1ZUFydGlzdHN9PmFydGlzdDwvRmlsdGVyQmxvY2tJdGVtPlxuICAgICAgPEZpbHRlckJsb2NrSXRlbSBvbkNsaWNrPXsoKSA9PiB0b2dnbGVBcnRpc3QoKX0gaXNPcGVuZWQ9e2FjdGl2ZUZpbHRlciA9PT0gXCJhdXRob3JcIn0gbGlzdD17dW5pcXVlQXJ0aXN0c30+YXJ0aXN0PC9GaWx0ZXJCbG9ja0l0ZW0+XG4gICAgICA8RmlsdGVyQmxvY2tJdGVtIG9uQ2xpY2s9eygpID0+IGhhbmRsZUZpbHRlckNsaWNrKFwicmVsZWFzZV9kYXRlXCIpfSBpc09wZW5lZD17YWN0aXZlRmlsdGVyID09PSBcInJlbGVhc2VfZGF0ZVwifSBsaXN0PXtyZWxlYXNlX2RhdGVzfT55ZWFyPC9GaWx0ZXJCbG9ja0l0ZW0+XG4gICAgICA8RmlsdGVyQmxvY2tJdGVtIG9uQ2xpY2s9eygpID0+IGhhbmRsZUZpbHRlckNsaWNrKFwiZ2VucmVcIil9IGlzT3BlbmVkPXthY3RpdmVGaWx0ZXIgPT09IFwiZ2VucmVcIn0gbGlzdD17Z2VucmVzfT5nZW5yZTwvRmlsdGVyQmxvY2tJdGVtPlxuXG4gICAgPC9kaXYgPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJCbG9jazsiXSwibmFtZXMiOlsic3R5bGVzIiwiY2xhc3NOYW1lcyIsInVzZVN0YXRlIiwiRmlsdGVyQmxvY2tJdGVtIiwicmVsZWFzZV9kYXRlcyIsImdlbnJlcyIsInVzZUFwcFNlbGVjdG9yIiwiRmlsdGVyQmxvY2siLCJwbGF5TGlzdCIsInN0YXRlIiwidHJhY2tzIiwiY29uc29sZSIsImxvZyIsInVuaXF1ZUFydGlzdHNDb3VudCIsInNldFVuaXF1ZUFydGlzdHNDb3VudCIsInVuaXF1ZUFydGlzdHMiLCJBcnJheSIsImZyb20iLCJTZXQiLCJtYXAiLCJ0cmFjayIsImF1dGhvciIsImZpbHRlciIsInNvcnQiLCJhIiwiYiIsImxvY2FsZUNvbXBhcmUiLCJ1bmlxdWVEYXRlcyIsInJlbGVhc2VfZGF0ZSIsInVuaXF1ZUdlbnJlcyIsImdlbnJlIiwiY291bnRVbmlxdWVBcnRpc3RzIiwibGVuZ3RoIiwidG9nZ2xlQXJ0aXN0IiwiYWN0aXZlRmlsdGVyIiwic2V0QWN0aXZlRmlsdGVyIiwiaGFuZGxlRmlsdGVyQ2xpY2siLCJuZXdGaWx0ZXIiLCJwcmV2IiwiZGl2IiwiY2xhc3NOYW1lIiwiY2VudGVyQmxvY2tGaWx0ZXIiLCJmaWx0ZXJUaXRsZSIsIm9uQ2xpY2siLCJpc09wZW5lZCIsImxpc3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/FilterBlock/FilterBlock.tsx\n"));

/***/ })

});