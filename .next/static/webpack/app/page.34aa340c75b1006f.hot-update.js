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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FilterBlock.module.css */ \"(app-pages-browser)/./src/components/FilterBlock/FilterBlock.module.css\");\n/* harmony import */ var _FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _FilterBlockItem_FilterBlockItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../FilterBlockItem/FilterBlockItem */ \"(app-pages-browser)/./src/components/FilterBlockItem/FilterBlockItem.tsx\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data */ \"(app-pages-browser)/./src/components/FilterBlock/data.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n// import { TracksContext } from \"@/contexts/tracks-context\";\n// import { Track } from \"@/interfaces/interfaces\";\n\n\nconst FilterBlock = ()=>{\n    _s();\n    // const { tracks } = useContext(TracksContext);\n    const [activeFilter, setActiveFilter] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const handleFilterClick = (newFilter)=>{\n        setActiveFilter((prev)=>newFilter === prev ? null : newFilter);\n    };\n    {}\n    // const [isArtistOpened, setIsArtistOpened] = useState(false);\n    // const [uniqueArtistsCount, setUniqueArtistsCount] = useState(0);\n    // const uniqueArtists = tracks\n    //   ? Array.from(new Set(tracks.map((track: Track) => track.author)))\n    //     .filter((author) => author && author !== \"-\")\n    //     .sort((a, b) => (a && b ? a.localeCompare(b) : 0))\n    //   : [];\n    // const countUniqueArtists = () => {\n    //   if (tracks) {\n    //     setUniqueArtistsCount(uniqueArtists.length);\n    //   }\n    //   return 0;\n    // };\n    // const toggleArtist = () => {\n    //   countUniqueArtists();\n    //   setIsDateOpened(false);\n    //   setIsGenreOpened(false);\n    //   setIsArtistOpened((prevState) => !prevState);\n    // };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().centerBlockFilter), (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().filter)),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().filterTitle),\n                children: \"Search for:\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterBlockItem_FilterBlockItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onClick: ()=>handleFilterClick(\"artists\"),\n                isOpened: activeFilter === \"artists\",\n                list: _data__WEBPACK_IMPORTED_MODULE_4__.artists,\n                children: \"artist\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterBlockItem_FilterBlockItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onClick: ()=>handleFilterClick(\"years\"),\n                isOpened: activeFilter === \"years\",\n                list: _data__WEBPACK_IMPORTED_MODULE_4__.years,\n                children: \"year\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterBlockItem_FilterBlockItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onClick: ()=>handleFilterClick(\"genres\"),\n                isOpened: activeFilter === \"genres\",\n                list: _data__WEBPACK_IMPORTED_MODULE_4__.genres,\n                children: \"genre\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FilterBlock, \"Pi/x/VfDjO83yThHuaUv3Wf7Mbs=\");\n_c = FilterBlock;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FilterBlock);\nvar _c;\n$RefreshReg$(_c, \"FilterBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0ZpbHRlckJsb2NrL0ZpbHRlckJsb2NrLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBOEM7QUFDVjtBQUNTO0FBQzdDLDZEQUE2RDtBQUM3RCxtREFBbUQ7QUFDYztBQUNqQjtBQUVoRCxNQUFNTyxjQUF3Qjs7SUFFNUIsZ0RBQWdEO0lBRWhELE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdQLCtDQUFRQSxDQUFnQjtJQUNoRSxNQUFNUSxvQkFBb0IsQ0FBQ0M7UUFDekJGLGdCQUFnQixDQUFDRyxPQUFTRCxjQUFjQyxPQUFPLE9BQU9EO0lBQ3hEO0lBRUEsQ0FBa0M7SUFDbEMsK0RBQStEO0lBQy9ELG1FQUFtRTtJQUNuRSwrQkFBK0I7SUFDL0Isc0VBQXNFO0lBQ3RFLG9EQUFvRDtJQUNwRCx5REFBeUQ7SUFDekQsVUFBVTtJQUNWLHFDQUFxQztJQUNyQyxrQkFBa0I7SUFDbEIsbURBQW1EO0lBQ25ELE1BQU07SUFDTixjQUFjO0lBQ2QsS0FBSztJQUNMLCtCQUErQjtJQUMvQiwwQkFBMEI7SUFDMUIsNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3QixrREFBa0Q7SUFDbEQsS0FBSztJQUVMLHFCQUNFLDhEQUFDRTtRQUFJQyxXQUFXYixpREFBVUEsQ0FBQ0Qsa0ZBQXdCLEVBQUVBLHVFQUFhOzswQkFDaEUsOERBQUNhO2dCQUFJQyxXQUFXZCw0RUFBa0I7MEJBQUU7Ozs7OzswQkFFcEMsOERBQUNHLHdFQUFlQTtnQkFBQ2UsU0FBUyxJQUFNUixrQkFBa0I7Z0JBQVlTLFVBQVVYLGlCQUFpQjtnQkFBV1ksTUFBTWhCLDBDQUFPQTswQkFBRTs7Ozs7OzBCQUNuSCw4REFBQ0Qsd0VBQWVBO2dCQUFDZSxTQUFTLElBQU1SLGtCQUFrQjtnQkFBVVMsVUFBVVgsaUJBQWlCO2dCQUFTWSxNQUFNZCx3Q0FBS0E7MEJBQUU7Ozs7OzswQkFDN0csOERBQUNILHdFQUFlQTtnQkFBQ2UsU0FBUyxJQUFNUixrQkFBa0I7Z0JBQVdTLFVBQVVYLGlCQUFpQjtnQkFBVVksTUFBTWYseUNBQU1BOzBCQUFFOzs7Ozs7Ozs7Ozs7QUFzQ3RIO0dBMUVNRTtLQUFBQTtBQTRFTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9GaWx0ZXJCbG9jay9GaWx0ZXJCbG9jay50c3g/YjU2YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL0ZpbHRlckJsb2NrLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IHsgVHJhY2tzQ29udGV4dCB9IGZyb20gXCJAL2NvbnRleHRzL3RyYWNrcy1jb250ZXh0XCI7XG4vLyBpbXBvcnQgeyBUcmFjayB9IGZyb20gXCJAL2ludGVyZmFjZXMvaW50ZXJmYWNlc1wiO1xuaW1wb3J0IEZpbHRlckJsb2NrSXRlbSBmcm9tIFwiLi4vRmlsdGVyQmxvY2tJdGVtL0ZpbHRlckJsb2NrSXRlbVwiO1xuaW1wb3J0IHsgYXJ0aXN0cywgZ2VucmVzLCB5ZWFycyB9IGZyb20gXCIuL2RhdGFcIjtcblxuY29uc3QgRmlsdGVyQmxvY2s6IFJlYWN0LkZDID0gKCkgPT4ge1xuXG4gIC8vIGNvbnN0IHsgdHJhY2tzIH0gPSB1c2VDb250ZXh0KFRyYWNrc0NvbnRleHQpO1xuXG4gIGNvbnN0IFthY3RpdmVGaWx0ZXIsIHNldEFjdGl2ZUZpbHRlcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcbiAgY29uc3QgaGFuZGxlRmlsdGVyQ2xpY2sgPSAobmV3RmlsdGVyOiBzdHJpbmcpID0+IHtcbiAgICBzZXRBY3RpdmVGaWx0ZXIoKHByZXYpID0+IG5ld0ZpbHRlciA9PT0gcHJldiA/IG51bGwgOiBuZXdGaWx0ZXIpO1xuICB9XG5cbiAgey8qIEVYQU1QTEUgT0YgUFJFVklPVVMgTE9HSUNTICovIH1cbiAgLy8gY29uc3QgW2lzQXJ0aXN0T3BlbmVkLCBzZXRJc0FydGlzdE9wZW5lZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIC8vIGNvbnN0IFt1bmlxdWVBcnRpc3RzQ291bnQsIHNldFVuaXF1ZUFydGlzdHNDb3VudF0gPSB1c2VTdGF0ZSgwKTtcbiAgLy8gY29uc3QgdW5pcXVlQXJ0aXN0cyA9IHRyYWNrc1xuICAvLyAgID8gQXJyYXkuZnJvbShuZXcgU2V0KHRyYWNrcy5tYXAoKHRyYWNrOiBUcmFjaykgPT4gdHJhY2suYXV0aG9yKSkpXG4gIC8vICAgICAuZmlsdGVyKChhdXRob3IpID0+IGF1dGhvciAmJiBhdXRob3IgIT09IFwiLVwiKVxuICAvLyAgICAgLnNvcnQoKGEsIGIpID0+IChhICYmIGIgPyBhLmxvY2FsZUNvbXBhcmUoYikgOiAwKSlcbiAgLy8gICA6IFtdO1xuICAvLyBjb25zdCBjb3VudFVuaXF1ZUFydGlzdHMgPSAoKSA9PiB7XG4gIC8vICAgaWYgKHRyYWNrcykge1xuICAvLyAgICAgc2V0VW5pcXVlQXJ0aXN0c0NvdW50KHVuaXF1ZUFydGlzdHMubGVuZ3RoKTtcbiAgLy8gICB9XG4gIC8vICAgcmV0dXJuIDA7XG4gIC8vIH07XG4gIC8vIGNvbnN0IHRvZ2dsZUFydGlzdCA9ICgpID0+IHtcbiAgLy8gICBjb3VudFVuaXF1ZUFydGlzdHMoKTtcbiAgLy8gICBzZXRJc0RhdGVPcGVuZWQoZmFsc2UpO1xuICAvLyAgIHNldElzR2VucmVPcGVuZWQoZmFsc2UpO1xuICAvLyAgIHNldElzQXJ0aXN0T3BlbmVkKChwcmV2U3RhdGUpID0+ICFwcmV2U3RhdGUpO1xuICAvLyB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLmNlbnRlckJsb2NrRmlsdGVyLCBzdHlsZXMuZmlsdGVyKX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZpbHRlclRpdGxlfT5TZWFyY2ggZm9yOjwvZGl2PlxuXG4gICAgICA8RmlsdGVyQmxvY2tJdGVtIG9uQ2xpY2s9eygpID0+IGhhbmRsZUZpbHRlckNsaWNrKFwiYXJ0aXN0c1wiKX0gaXNPcGVuZWQ9e2FjdGl2ZUZpbHRlciA9PT0gXCJhcnRpc3RzXCJ9IGxpc3Q9e2FydGlzdHN9PmFydGlzdDwvRmlsdGVyQmxvY2tJdGVtPlxuICAgICAgPEZpbHRlckJsb2NrSXRlbSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVGaWx0ZXJDbGljayhcInllYXJzXCIpfSBpc09wZW5lZD17YWN0aXZlRmlsdGVyID09PSBcInllYXJzXCJ9IGxpc3Q9e3llYXJzfT55ZWFyPC9GaWx0ZXJCbG9ja0l0ZW0+XG4gICAgICA8RmlsdGVyQmxvY2tJdGVtIG9uQ2xpY2s9eygpID0+IGhhbmRsZUZpbHRlckNsaWNrKFwiZ2VucmVzXCIpfSBpc09wZW5lZD17YWN0aXZlRmlsdGVyID09PSBcImdlbnJlc1wifSBsaXN0PXtnZW5yZXN9PmdlbnJlPC9GaWx0ZXJCbG9ja0l0ZW0+XG5cbiAgICAgIHsvKiBQUkVWSU9VUyBSRU5ERVIgRVhBTVBMRVxuICAgICAge3VuaXF1ZUFydGlzdHNDb3VudCA+IDAgJiYgaXNBcnRpc3RPcGVuZWQgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMuQ291bnRQb3BVcCwgc3R5bGVzLmFydGlzdCl9PlxuICAgICAgICAgIHt1bmlxdWVBcnRpc3RzQ291bnR9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIDxidXR0b25cbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMuZmlsdGVyQnV0dG9uLCBzdHlsZXMuYnV0dG9uQXV0aG9yLCBzdHlsZXMuYnRuVGV4dCxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBbc3R5bGVzLmFjdGl2ZV06IGlzQXJ0aXN0T3BlbmVkLFxuICAgICAgICAgIH0pfVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVBcnRpc3QoKX1cbiAgICAgID5cbiAgICAgICAgYXJ0aXN0XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIHtcbiAgICAgICAgaXNBcnRpc3RPcGVuZWQgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmlsdGVyQnl9PlxuICAgICAgICAgICAge3VuaXF1ZUFydGlzdHMubGVuZ3RoID4gMCA/IChcbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLmFydGlzdExpc3R9PlxuICAgICAgICAgICAgICAgIHt1bmlxdWVBcnRpc3RzLm1hcCgoYXJ0aXN0LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9IGNsYXNzTmFtZT17c3R5bGVzLmZpbHRlckJ5UH0+XG4gICAgICAgICAgICAgICAgICAgIHthcnRpc3R9XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucGxheWxpc3RUaXRsZUNvbH0+Tm8gZGF0YS4uLjwvcD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgIH0gKi99XG5cbiAgICA8L2RpdiA+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZpbHRlckJsb2NrOyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJjbGFzc05hbWVzIiwidXNlU3RhdGUiLCJGaWx0ZXJCbG9ja0l0ZW0iLCJhcnRpc3RzIiwiZ2VucmVzIiwieWVhcnMiLCJGaWx0ZXJCbG9jayIsImFjdGl2ZUZpbHRlciIsInNldEFjdGl2ZUZpbHRlciIsImhhbmRsZUZpbHRlckNsaWNrIiwibmV3RmlsdGVyIiwicHJldiIsImRpdiIsImNsYXNzTmFtZSIsImNlbnRlckJsb2NrRmlsdGVyIiwiZmlsdGVyIiwiZmlsdGVyVGl0bGUiLCJvbkNsaWNrIiwiaXNPcGVuZWQiLCJsaXN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/FilterBlock/FilterBlock.tsx\n"));

/***/ })

});