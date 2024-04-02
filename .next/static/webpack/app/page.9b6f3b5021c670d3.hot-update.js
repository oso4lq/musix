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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FilterBlock.module.css */ \"(app-pages-browser)/./src/components/FilterBlock/FilterBlock.module.css\");\n/* harmony import */ var _FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _FilterBlockItem_FilterBlockItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../FilterBlockItem/FilterBlockItem */ \"(app-pages-browser)/./src/components/FilterBlockItem/FilterBlockItem.tsx\");\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/hooks */ \"(app-pages-browser)/./src/hooks.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst FilterBlock = ()=>{\n    _s();\n    const playList = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useAppSelector)((state)=>state.tracks.playList);\n    const getUniqueValues = (property)=>{\n        return playList ? Array.from(new Set(playList.map((track)=>track[property]))).filter((value)=>typeof value === \"string\" && value !== \"-\").map((value)=>value) // Cast to string to handle union type\n        .sort((a, b)=>a.localeCompare(b)) // Use localeCompare directly\n         : [];\n    };\n    const getUniqueYears = ()=>{\n        return playList ? Array.from(new Set(playList.map((track)=>track.release_date))).filter((date)=>typeof date === \"string\" && date !== \"-\").map((date)=>date.split(\"-\")[0]) // Extract year part\n        .filter((year, index, self)=>self.indexOf(year) === index) // Filter out repeating years\n        .sort((a, b)=>a.localeCompare(b)) // Use localeCompare directly\n         : [];\n    };\n    const [activeFilter, setActiveFilter] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const handleFilterClick = (newFilter)=>{\n        setActiveFilter((prev)=>newFilter === prev ? null : newFilter);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().centerBlockFilter), (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().filter)),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().filterTitle),\n                children: \"Search for:\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterBlockItem_FilterBlockItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onClick: ()=>handleFilterClick(\"author\"),\n                isOpened: activeFilter === \"author\",\n                list: getUniqueValues(\"author\"),\n                children: \"artist\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterBlockItem_FilterBlockItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onClick: ()=>handleFilterClick(\"release_date\"),\n                isOpened: activeFilter === \"release_date\",\n                list: getUniqueYears(),\n                children: \"year\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterBlockItem_FilterBlockItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onClick: ()=>handleFilterClick(\"genre\"),\n                isOpened: activeFilter === \"genre\",\n                list: getUniqueValues(\"genre\"),\n                children: \"genre\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FilterBlock, \"en3hVn7Y4Xe0swpYr5Ocbz1JAbo=\", false, function() {\n    return [\n        _hooks__WEBPACK_IMPORTED_MODULE_4__.useAppSelector\n    ];\n});\n_c = FilterBlock;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FilterBlock);\nvar _c;\n$RefreshReg$(_c, \"FilterBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0ZpbHRlckJsb2NrL0ZpbHRlckJsb2NrLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFOEM7QUFDVjtBQUNIO0FBQ2dDO0FBQ3hCO0FBR3pDLE1BQU1LLGNBQWM7O0lBQ2xCLE1BQU1DLFdBQVdGLHNEQUFjQSxDQUFDLENBQUNHLFFBQVVBLE1BQU1DLE1BQU0sQ0FBQ0YsUUFBUTtJQUVoRSxNQUFNRyxrQkFBa0IsQ0FBQ0M7UUFDdkIsT0FBT0osV0FDSEssTUFBTUMsSUFBSSxDQUFDLElBQUlDLElBQUlQLFNBQVNRLEdBQUcsQ0FBQyxDQUFDQyxRQUFxQkEsS0FBSyxDQUFDTCxTQUFTLElBQ2xFTSxNQUFNLENBQUMsQ0FBQ0MsUUFBVSxPQUFPQSxVQUFVLFlBQVlBLFVBQVUsS0FDekRILEdBQUcsQ0FBQyxDQUFDRyxRQUFVQSxPQUFpQixzQ0FBc0M7U0FDdEVDLElBQUksQ0FBQyxDQUFDQyxHQUFHQyxJQUFNRCxFQUFFRSxhQUFhLENBQUNELElBQUksNkJBQTZCO1dBQ25FLEVBQUU7SUFDUjtJQUVBLE1BQU1FLGlCQUFpQjtRQUNyQixPQUFPaEIsV0FDSEssTUFBTUMsSUFBSSxDQUFDLElBQUlDLElBQUlQLFNBQVNRLEdBQUcsQ0FBQyxDQUFDQyxRQUFxQkEsTUFBTVEsWUFBWSxJQUNyRVAsTUFBTSxDQUFDLENBQUNRLE9BQVMsT0FBT0EsU0FBUyxZQUFZQSxTQUFTLEtBQ3REVixHQUFHLENBQUMsQ0FBQ1UsT0FBU0EsS0FBS0MsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsb0JBQW9CO1NBQ3REVCxNQUFNLENBQUMsQ0FBQ1UsTUFBTUMsT0FBT0MsT0FBU0EsS0FBS0MsT0FBTyxDQUFDSCxVQUFVQyxPQUFPLDZCQUE2QjtTQUN6RlQsSUFBSSxDQUFDLENBQUNDLEdBQUdDLElBQU1ELEVBQUVFLGFBQWEsQ0FBQ0QsSUFBSSw2QkFBNkI7V0FDbkUsRUFBRTtJQUNSO0lBRUEsTUFBTSxDQUFDVSxjQUFjQyxnQkFBZ0IsR0FBRzdCLCtDQUFRQSxDQUF5QjtJQUN6RSxNQUFNOEIsb0JBQW9CLENBQUNDO1FBQ3pCRixnQkFBZ0IsQ0FBQ0csT0FBVUQsY0FBY0MsT0FBTyxPQUFPRDtJQUN6RDtJQUVBLHFCQUNFLDhEQUFDRTtRQUFJQyxXQUFXbkMsaURBQVVBLENBQUNELGtGQUF3QixFQUFFQSx1RUFBYTs7MEJBQ2hFLDhEQUFDbUM7Z0JBQUlDLFdBQVdwQyw0RUFBa0I7MEJBQUU7Ozs7OzswQkFFcEMsOERBQUNHLHdFQUFlQTtnQkFDZG9DLFNBQVMsSUFBTVAsa0JBQWtCO2dCQUNqQ1EsVUFBVVYsaUJBQWlCO2dCQUMzQlcsTUFBTWhDLGdCQUFnQjswQkFDdkI7Ozs7OzswQkFHRCw4REFBQ04sd0VBQWVBO2dCQUNkb0MsU0FBUyxJQUFNUCxrQkFBa0I7Z0JBQ2pDUSxVQUFVVixpQkFBaUI7Z0JBQzNCVyxNQUFNbkI7MEJBQ1A7Ozs7OzswQkFHRCw4REFBQ25CLHdFQUFlQTtnQkFDZG9DLFNBQVMsSUFBTVAsa0JBQWtCO2dCQUNqQ1EsVUFBVVYsaUJBQWlCO2dCQUMzQlcsTUFBTWhDLGdCQUFnQjswQkFDdkI7Ozs7Ozs7Ozs7OztBQUtQO0dBdERNSjs7UUFDYUQsa0RBQWNBOzs7S0FEM0JDO0FBd0ROLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0ZpbHRlckJsb2NrL0ZpbHRlckJsb2NrLnRzeD9iNTZjIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vRmlsdGVyQmxvY2subW9kdWxlLmNzc1wiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRmlsdGVyQmxvY2tJdGVtIGZyb20gXCIuLi9GaWx0ZXJCbG9ja0l0ZW0vRmlsdGVyQmxvY2tJdGVtXCI7XG5pbXBvcnQgeyB1c2VBcHBTZWxlY3RvciB9IGZyb20gXCJAL2hvb2tzXCI7XG5pbXBvcnQgeyB0cmFja1R5cGUgfSBmcm9tIFwiQC90eXBlcy90eXBlc1wiO1xuXG5jb25zdCBGaWx0ZXJCbG9jayA9ICgpID0+IHtcbiAgY29uc3QgcGxheUxpc3QgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnRyYWNrcy5wbGF5TGlzdCk7XG5cbiAgY29uc3QgZ2V0VW5pcXVlVmFsdWVzID0gKHByb3BlcnR5OiBrZXlvZiB0cmFja1R5cGUpID0+IHtcbiAgICByZXR1cm4gcGxheUxpc3RcbiAgICAgID8gQXJyYXkuZnJvbShuZXcgU2V0KHBsYXlMaXN0Lm1hcCgodHJhY2s6IHRyYWNrVHlwZSkgPT4gdHJhY2tbcHJvcGVydHldKSkpXG4gICAgICAgICAgLmZpbHRlcigodmFsdWUpID0+IHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiAmJiB2YWx1ZSAhPT0gXCItXCIpXG4gICAgICAgICAgLm1hcCgodmFsdWUpID0+IHZhbHVlIGFzIHN0cmluZykgLy8gQ2FzdCB0byBzdHJpbmcgdG8gaGFuZGxlIHVuaW9uIHR5cGVcbiAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYS5sb2NhbGVDb21wYXJlKGIpKSAvLyBVc2UgbG9jYWxlQ29tcGFyZSBkaXJlY3RseVxuICAgICAgOiBbXTtcbiAgfTtcblxuICBjb25zdCBnZXRVbmlxdWVZZWFycyA9ICgpID0+IHtcbiAgICByZXR1cm4gcGxheUxpc3RcbiAgICAgID8gQXJyYXkuZnJvbShuZXcgU2V0KHBsYXlMaXN0Lm1hcCgodHJhY2s6IHRyYWNrVHlwZSkgPT4gdHJhY2sucmVsZWFzZV9kYXRlKSkpXG4gICAgICAgICAgLmZpbHRlcigoZGF0ZSkgPT4gdHlwZW9mIGRhdGUgPT09IFwic3RyaW5nXCIgJiYgZGF0ZSAhPT0gXCItXCIpXG4gICAgICAgICAgLm1hcCgoZGF0ZSkgPT4gZGF0ZS5zcGxpdChcIi1cIilbMF0pIC8vIEV4dHJhY3QgeWVhciBwYXJ0XG4gICAgICAgICAgLmZpbHRlcigoeWVhciwgaW5kZXgsIHNlbGYpID0+IHNlbGYuaW5kZXhPZih5ZWFyKSA9PT0gaW5kZXgpIC8vIEZpbHRlciBvdXQgcmVwZWF0aW5nIHllYXJzXG4gICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGEubG9jYWxlQ29tcGFyZShiKSkgLy8gVXNlIGxvY2FsZUNvbXBhcmUgZGlyZWN0bHlcbiAgICAgIDogW107XG4gIH07XG5cbiAgY29uc3QgW2FjdGl2ZUZpbHRlciwgc2V0QWN0aXZlRmlsdGVyXSA9IHVzZVN0YXRlPGtleW9mIHRyYWNrVHlwZSB8IG51bGw+KG51bGwpO1xuICBjb25zdCBoYW5kbGVGaWx0ZXJDbGljayA9IChuZXdGaWx0ZXI6IGtleW9mIHRyYWNrVHlwZSkgPT4ge1xuICAgIHNldEFjdGl2ZUZpbHRlcigocHJldikgPT4gKG5ld0ZpbHRlciA9PT0gcHJldiA/IG51bGwgOiBuZXdGaWx0ZXIpKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5jZW50ZXJCbG9ja0ZpbHRlciwgc3R5bGVzLmZpbHRlcil9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5maWx0ZXJUaXRsZX0+U2VhcmNoIGZvcjo8L2Rpdj5cblxuICAgICAgPEZpbHRlckJsb2NrSXRlbVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVGaWx0ZXJDbGljayhcImF1dGhvclwiKX1cbiAgICAgICAgaXNPcGVuZWQ9e2FjdGl2ZUZpbHRlciA9PT0gXCJhdXRob3JcIn1cbiAgICAgICAgbGlzdD17Z2V0VW5pcXVlVmFsdWVzKFwiYXV0aG9yXCIpfVxuICAgICAgPlxuICAgICAgICBhcnRpc3RcbiAgICAgIDwvRmlsdGVyQmxvY2tJdGVtPlxuICAgICAgPEZpbHRlckJsb2NrSXRlbVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVGaWx0ZXJDbGljayhcInJlbGVhc2VfZGF0ZVwiKX1cbiAgICAgICAgaXNPcGVuZWQ9e2FjdGl2ZUZpbHRlciA9PT0gXCJyZWxlYXNlX2RhdGVcIn1cbiAgICAgICAgbGlzdD17Z2V0VW5pcXVlWWVhcnMoKX0gLy8gVXNlIGdldFVuaXF1ZVllYXJzIGZvciB5ZWFyc1xuICAgICAgPlxuICAgICAgICB5ZWFyXG4gICAgICA8L0ZpbHRlckJsb2NrSXRlbT5cbiAgICAgIDxGaWx0ZXJCbG9ja0l0ZW1cbiAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlRmlsdGVyQ2xpY2soXCJnZW5yZVwiKX1cbiAgICAgICAgaXNPcGVuZWQ9e2FjdGl2ZUZpbHRlciA9PT0gXCJnZW5yZVwifVxuICAgICAgICBsaXN0PXtnZXRVbmlxdWVWYWx1ZXMoXCJnZW5yZVwiKX1cbiAgICAgID5cbiAgICAgICAgZ2VucmVcbiAgICAgIDwvRmlsdGVyQmxvY2tJdGVtPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyQmxvY2s7XG4iXSwibmFtZXMiOlsic3R5bGVzIiwiY2xhc3NOYW1lcyIsInVzZVN0YXRlIiwiRmlsdGVyQmxvY2tJdGVtIiwidXNlQXBwU2VsZWN0b3IiLCJGaWx0ZXJCbG9jayIsInBsYXlMaXN0Iiwic3RhdGUiLCJ0cmFja3MiLCJnZXRVbmlxdWVWYWx1ZXMiLCJwcm9wZXJ0eSIsIkFycmF5IiwiZnJvbSIsIlNldCIsIm1hcCIsInRyYWNrIiwiZmlsdGVyIiwidmFsdWUiLCJzb3J0IiwiYSIsImIiLCJsb2NhbGVDb21wYXJlIiwiZ2V0VW5pcXVlWWVhcnMiLCJyZWxlYXNlX2RhdGUiLCJkYXRlIiwic3BsaXQiLCJ5ZWFyIiwiaW5kZXgiLCJzZWxmIiwiaW5kZXhPZiIsImFjdGl2ZUZpbHRlciIsInNldEFjdGl2ZUZpbHRlciIsImhhbmRsZUZpbHRlckNsaWNrIiwibmV3RmlsdGVyIiwicHJldiIsImRpdiIsImNsYXNzTmFtZSIsImNlbnRlckJsb2NrRmlsdGVyIiwiZmlsdGVyVGl0bGUiLCJvbkNsaWNrIiwiaXNPcGVuZWQiLCJsaXN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/FilterBlock/FilterBlock.tsx\n"));

/***/ })

});