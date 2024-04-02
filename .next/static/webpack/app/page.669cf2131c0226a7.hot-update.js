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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FilterBlock.module.css */ \"(app-pages-browser)/./src/components/FilterBlock/FilterBlock.module.css\");\n/* harmony import */ var _FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _FilterBlockItem_FilterBlockItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../FilterBlockItem/FilterBlockItem */ \"(app-pages-browser)/./src/components/FilterBlockItem/FilterBlockItem.tsx\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data */ \"(app-pages-browser)/./src/components/FilterBlock/data.ts\");\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/hooks */ \"(app-pages-browser)/./src/hooks.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst FilterBlock = ()=>{\n    _s();\n    const playList = (0,_hooks__WEBPACK_IMPORTED_MODULE_5__.useAppSelector)((state)=>state.tracks.playList);\n    console.log(playList);\n    // Filter logics\n    // const [isArtistOpened, setIsArtistOpened] = useState(false);\n    const [uniqueArtistsCount, setUniqueArtistsCount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const uniqueArtists = playList ? Array.from(new Set(playList.map((track)=>track.author))).filter((author)=>author && author !== \"-\").sort((a, b)=>a && b ? a.localeCompare(b) : 0) : [];\n    const uniqueDates = playList ? Array.from(new Set(playList.map((track)=>track.release_date))).filter((release_date)=>release_date && release_date !== \"-\").sort((a, b)=>a && b ? a.localeCompare(b) : 0) : [];\n    const uniqueGenres = playList ? Array.from(new Set(playList.map((track)=>track.genre))).filter((genre)=>genre && genre !== \"-\").sort((a, b)=>a && b ? a.localeCompare(b) : 0) : [];\n    const countUniqueArtists = ()=>{\n        if (playList) {\n            setUniqueArtistsCount(uniqueArtists.length);\n        }\n        console.log(uniqueArtists);\n        console.log(uniqueArtists.length);\n        return 0;\n    };\n    const toggleArtist = ()=>{\n        countUniqueArtists();\n    };\n    const [activeFilter, setActiveFilter] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const handleFilterClick = (newFilter)=>{\n        setActiveFilter((prev)=>newFilter === prev ? null : newFilter);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().centerBlockFilter), (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().filter)),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().filterTitle),\n                children: \"Search for:\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterBlockItem_FilterBlockItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onClick: ()=>handleFilterClick(\"author\"),\n                isOpened: activeFilter === \"author\",\n                list: _data__WEBPACK_IMPORTED_MODULE_4__.artists,\n                children: \"artist\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterBlockItem_FilterBlockItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onClick: ()=>toggleArtist(),\n                isOpened: activeFilter === \"artists\",\n                list: _data__WEBPACK_IMPORTED_MODULE_4__.artists,\n                children: \"artist\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterBlockItem_FilterBlockItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onClick: ()=>handleFilterClick(\"release_date\"),\n                isOpened: activeFilter === \"release_date\",\n                list: _data__WEBPACK_IMPORTED_MODULE_4__.years,\n                children: \"year\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterBlockItem_FilterBlockItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onClick: ()=>handleFilterClick(\"genre\"),\n                isOpened: activeFilter === \"genre\",\n                list: _data__WEBPACK_IMPORTED_MODULE_4__.genres,\n                children: \"genre\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FilterBlock, \"o6Pm8rqr47WktNInHQPSvwgF7P4=\", false, function() {\n    return [\n        _hooks__WEBPACK_IMPORTED_MODULE_5__.useAppSelector\n    ];\n});\n_c = FilterBlock;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FilterBlock);\nvar _c;\n$RefreshReg$(_c, \"FilterBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0ZpbHRlckJsb2NrL0ZpbHRlckJsb2NrLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRThDO0FBQ1Y7QUFDSDtBQUNnQztBQUNqQjtBQUNQO0FBR3pDLE1BQU1RLGNBQWM7O0lBRWxCLE1BQU1DLFdBQVdGLHNEQUFjQSxDQUFDLENBQUNHLFFBQVVBLE1BQU1DLE1BQU0sQ0FBQ0YsUUFBUTtJQUNoRUcsUUFBUUMsR0FBRyxDQUFDSjtJQUVaLGdCQUFnQjtJQUNoQiwrREFBK0Q7SUFDL0QsTUFBTSxDQUFDSyxvQkFBb0JDLHNCQUFzQixHQUFHYiwrQ0FBUUEsQ0FBQztJQUM3RCxNQUFNYyxnQkFBZ0JQLFdBQ2xCUSxNQUFNQyxJQUFJLENBQUMsSUFBSUMsSUFBSVYsU0FBU1csR0FBRyxDQUFDLENBQUNDLFFBQXFCQSxNQUFNQyxNQUFNLElBQ2pFQyxNQUFNLENBQUMsQ0FBQ0QsU0FBV0EsVUFBVUEsV0FBVyxLQUN4Q0UsSUFBSSxDQUFDLENBQUNDLEdBQUdDLElBQU9ELEtBQUtDLElBQUlELEVBQUVFLGFBQWEsQ0FBQ0QsS0FBSyxLQUMvQyxFQUFFO0lBQ04sTUFBTUUsY0FBY25CLFdBQ2hCUSxNQUFNQyxJQUFJLENBQUMsSUFBSUMsSUFBSVYsU0FBU1csR0FBRyxDQUFDLENBQUNDLFFBQXFCQSxNQUFNUSxZQUFZLElBQ3ZFTixNQUFNLENBQUMsQ0FBQ00sZUFBaUJBLGdCQUFnQkEsaUJBQWlCLEtBQzFETCxJQUFJLENBQUMsQ0FBQ0MsR0FBR0MsSUFBT0QsS0FBS0MsSUFBSUQsRUFBRUUsYUFBYSxDQUFDRCxLQUFLLEtBQy9DLEVBQUU7SUFDTixNQUFNSSxlQUFlckIsV0FDakJRLE1BQU1DLElBQUksQ0FBQyxJQUFJQyxJQUFJVixTQUFTVyxHQUFHLENBQUMsQ0FBQ0MsUUFBcUJBLE1BQU1VLEtBQUssSUFDaEVSLE1BQU0sQ0FBQyxDQUFDUSxRQUFVQSxTQUFTQSxVQUFVLEtBQ3JDUCxJQUFJLENBQUMsQ0FBQ0MsR0FBR0MsSUFBT0QsS0FBS0MsSUFBSUQsRUFBRUUsYUFBYSxDQUFDRCxLQUFLLEtBQy9DLEVBQUU7SUFDTixNQUFNTSxxQkFBcUI7UUFDekIsSUFBSXZCLFVBQVU7WUFDWk0sc0JBQXNCQyxjQUFjaUIsTUFBTTtRQUM1QztRQUNBckIsUUFBUUMsR0FBRyxDQUFDRztRQUNaSixRQUFRQyxHQUFHLENBQUNHLGNBQWNpQixNQUFNO1FBQ2hDLE9BQU87SUFDVDtJQUNBLE1BQU1DLGVBQWU7UUFDbkJGO0lBQ0Y7SUFFQSxNQUFNLENBQUNHLGNBQWNDLGdCQUFnQixHQUFHbEMsK0NBQVFBLENBQWdCO0lBQ2hFLE1BQU1tQyxvQkFBb0IsQ0FBQ0M7UUFDekJGLGdCQUFnQixDQUFDRyxPQUFTRCxjQUFjQyxPQUFPLE9BQU9EO0lBQ3hEO0lBSUEscUJBQ0UsOERBQUNFO1FBQUlDLFdBQVd4QyxpREFBVUEsQ0FBQ0Qsa0ZBQXdCLEVBQUVBLHVFQUFhOzswQkFDaEUsOERBQUN3QztnQkFBSUMsV0FBV3pDLDRFQUFrQjswQkFBRTs7Ozs7OzBCQUVwQyw4REFBQ0csd0VBQWVBO2dCQUFDeUMsU0FBUyxJQUFNUCxrQkFBa0I7Z0JBQVdRLFVBQVVWLGlCQUFpQjtnQkFBVVcsTUFBTTFDLDBDQUFPQTswQkFBRTs7Ozs7OzBCQUNqSCw4REFBQ0Qsd0VBQWVBO2dCQUFDeUMsU0FBUyxJQUFNVjtnQkFBZ0JXLFVBQVVWLGlCQUFpQjtnQkFBV1csTUFBTTFDLDBDQUFPQTswQkFBRTs7Ozs7OzBCQUNyRyw4REFBQ0Qsd0VBQWVBO2dCQUFDeUMsU0FBUyxJQUFNUCxrQkFBa0I7Z0JBQWlCUSxVQUFVVixpQkFBaUI7Z0JBQWdCVyxNQUFNeEMsd0NBQUtBOzBCQUFFOzs7Ozs7MEJBQzNILDhEQUFDSCx3RUFBZUE7Z0JBQUN5QyxTQUFTLElBQU1QLGtCQUFrQjtnQkFBVVEsVUFBVVYsaUJBQWlCO2dCQUFTVyxNQUFNekMseUNBQU1BOzBCQUFFOzs7Ozs7Ozs7Ozs7QUFJcEg7R0FyRE1HOztRQUVhRCxrREFBY0E7OztLQUYzQkM7QUF1RE4sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRmlsdGVyQmxvY2svRmlsdGVyQmxvY2sudHN4P2I1NmMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9GaWx0ZXJCbG9jay5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBGaWx0ZXJCbG9ja0l0ZW0gZnJvbSBcIi4uL0ZpbHRlckJsb2NrSXRlbS9GaWx0ZXJCbG9ja0l0ZW1cIjtcbmltcG9ydCB7IGFydGlzdHMsIGdlbnJlcywgeWVhcnMgfSBmcm9tIFwiLi9kYXRhXCI7XG5pbXBvcnQgeyB1c2VBcHBTZWxlY3RvciB9IGZyb20gXCJAL2hvb2tzXCI7XG5pbXBvcnQgeyB0cmFja1R5cGUgfSBmcm9tIFwiQC90eXBlcy90eXBlc1wiO1xuXG5jb25zdCBGaWx0ZXJCbG9jayA9ICgpID0+IHtcblxuICBjb25zdCBwbGF5TGlzdCA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudHJhY2tzLnBsYXlMaXN0KVxuICBjb25zb2xlLmxvZyhwbGF5TGlzdCk7XG5cbiAgLy8gRmlsdGVyIGxvZ2ljc1xuICAvLyBjb25zdCBbaXNBcnRpc3RPcGVuZWQsIHNldElzQXJ0aXN0T3BlbmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3VuaXF1ZUFydGlzdHNDb3VudCwgc2V0VW5pcXVlQXJ0aXN0c0NvdW50XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCB1bmlxdWVBcnRpc3RzID0gcGxheUxpc3RcbiAgICA/IEFycmF5LmZyb20obmV3IFNldChwbGF5TGlzdC5tYXAoKHRyYWNrOiB0cmFja1R5cGUpID0+IHRyYWNrLmF1dGhvcikpKVxuICAgICAgLmZpbHRlcigoYXV0aG9yKSA9PiBhdXRob3IgJiYgYXV0aG9yICE9PSBcIi1cIilcbiAgICAgIC5zb3J0KChhLCBiKSA9PiAoYSAmJiBiID8gYS5sb2NhbGVDb21wYXJlKGIpIDogMCkpXG4gICAgOiBbXTtcbiAgY29uc3QgdW5pcXVlRGF0ZXMgPSBwbGF5TGlzdFxuICAgID8gQXJyYXkuZnJvbShuZXcgU2V0KHBsYXlMaXN0Lm1hcCgodHJhY2s6IHRyYWNrVHlwZSkgPT4gdHJhY2sucmVsZWFzZV9kYXRlKSkpXG4gICAgICAuZmlsdGVyKChyZWxlYXNlX2RhdGUpID0+IHJlbGVhc2VfZGF0ZSAmJiByZWxlYXNlX2RhdGUgIT09IFwiLVwiKVxuICAgICAgLnNvcnQoKGEsIGIpID0+IChhICYmIGIgPyBhLmxvY2FsZUNvbXBhcmUoYikgOiAwKSlcbiAgICA6IFtdO1xuICBjb25zdCB1bmlxdWVHZW5yZXMgPSBwbGF5TGlzdFxuICAgID8gQXJyYXkuZnJvbShuZXcgU2V0KHBsYXlMaXN0Lm1hcCgodHJhY2s6IHRyYWNrVHlwZSkgPT4gdHJhY2suZ2VucmUpKSlcbiAgICAgIC5maWx0ZXIoKGdlbnJlKSA9PiBnZW5yZSAmJiBnZW5yZSAhPT0gXCItXCIpXG4gICAgICAuc29ydCgoYSwgYikgPT4gKGEgJiYgYiA/IGEubG9jYWxlQ29tcGFyZShiKSA6IDApKVxuICAgIDogW107XG4gIGNvbnN0IGNvdW50VW5pcXVlQXJ0aXN0cyA9ICgpID0+IHtcbiAgICBpZiAocGxheUxpc3QpIHtcbiAgICAgIHNldFVuaXF1ZUFydGlzdHNDb3VudCh1bmlxdWVBcnRpc3RzLmxlbmd0aCk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHVuaXF1ZUFydGlzdHMpO1xuICAgIGNvbnNvbGUubG9nKHVuaXF1ZUFydGlzdHMubGVuZ3RoKTtcbiAgICByZXR1cm4gMDtcbiAgfTtcbiAgY29uc3QgdG9nZ2xlQXJ0aXN0ID0gKCkgPT4ge1xuICAgIGNvdW50VW5pcXVlQXJ0aXN0cygpO1xuICB9O1xuXG4gIGNvbnN0IFthY3RpdmVGaWx0ZXIsIHNldEFjdGl2ZUZpbHRlcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcbiAgY29uc3QgaGFuZGxlRmlsdGVyQ2xpY2sgPSAobmV3RmlsdGVyOiBzdHJpbmcpID0+IHtcbiAgICBzZXRBY3RpdmVGaWx0ZXIoKHByZXYpID0+IG5ld0ZpbHRlciA9PT0gcHJldiA/IG51bGwgOiBuZXdGaWx0ZXIpO1xuICB9XG5cblxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLmNlbnRlckJsb2NrRmlsdGVyLCBzdHlsZXMuZmlsdGVyKX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZpbHRlclRpdGxlfT5TZWFyY2ggZm9yOjwvZGl2PlxuXG4gICAgICA8RmlsdGVyQmxvY2tJdGVtIG9uQ2xpY2s9eygpID0+IGhhbmRsZUZpbHRlckNsaWNrKFwiYXV0aG9yXCIpfSBpc09wZW5lZD17YWN0aXZlRmlsdGVyID09PSBcImF1dGhvclwifSBsaXN0PXthcnRpc3RzfT5hcnRpc3Q8L0ZpbHRlckJsb2NrSXRlbT5cbiAgICAgIDxGaWx0ZXJCbG9ja0l0ZW0gb25DbGljaz17KCkgPT4gdG9nZ2xlQXJ0aXN0KCl9IGlzT3BlbmVkPXthY3RpdmVGaWx0ZXIgPT09IFwiYXJ0aXN0c1wifSBsaXN0PXthcnRpc3RzfT5hcnRpc3Q8L0ZpbHRlckJsb2NrSXRlbT5cbiAgICAgIDxGaWx0ZXJCbG9ja0l0ZW0gb25DbGljaz17KCkgPT4gaGFuZGxlRmlsdGVyQ2xpY2soXCJyZWxlYXNlX2RhdGVcIil9IGlzT3BlbmVkPXthY3RpdmVGaWx0ZXIgPT09IFwicmVsZWFzZV9kYXRlXCJ9IGxpc3Q9e3llYXJzfT55ZWFyPC9GaWx0ZXJCbG9ja0l0ZW0+XG4gICAgICA8RmlsdGVyQmxvY2tJdGVtIG9uQ2xpY2s9eygpID0+IGhhbmRsZUZpbHRlckNsaWNrKFwiZ2VucmVcIil9IGlzT3BlbmVkPXthY3RpdmVGaWx0ZXIgPT09IFwiZ2VucmVcIn0gbGlzdD17Z2VucmVzfT5nZW5yZTwvRmlsdGVyQmxvY2tJdGVtPlxuXG4gICAgPC9kaXYgPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJCbG9jazsiXSwibmFtZXMiOlsic3R5bGVzIiwiY2xhc3NOYW1lcyIsInVzZVN0YXRlIiwiRmlsdGVyQmxvY2tJdGVtIiwiYXJ0aXN0cyIsImdlbnJlcyIsInllYXJzIiwidXNlQXBwU2VsZWN0b3IiLCJGaWx0ZXJCbG9jayIsInBsYXlMaXN0Iiwic3RhdGUiLCJ0cmFja3MiLCJjb25zb2xlIiwibG9nIiwidW5pcXVlQXJ0aXN0c0NvdW50Iiwic2V0VW5pcXVlQXJ0aXN0c0NvdW50IiwidW5pcXVlQXJ0aXN0cyIsIkFycmF5IiwiZnJvbSIsIlNldCIsIm1hcCIsInRyYWNrIiwiYXV0aG9yIiwiZmlsdGVyIiwic29ydCIsImEiLCJiIiwibG9jYWxlQ29tcGFyZSIsInVuaXF1ZURhdGVzIiwicmVsZWFzZV9kYXRlIiwidW5pcXVlR2VucmVzIiwiZ2VucmUiLCJjb3VudFVuaXF1ZUFydGlzdHMiLCJsZW5ndGgiLCJ0b2dnbGVBcnRpc3QiLCJhY3RpdmVGaWx0ZXIiLCJzZXRBY3RpdmVGaWx0ZXIiLCJoYW5kbGVGaWx0ZXJDbGljayIsIm5ld0ZpbHRlciIsInByZXYiLCJkaXYiLCJjbGFzc05hbWUiLCJjZW50ZXJCbG9ja0ZpbHRlciIsImZpbHRlclRpdGxlIiwib25DbGljayIsImlzT3BlbmVkIiwibGlzdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/FilterBlock/FilterBlock.tsx\n"));

/***/ })

});