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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FilterBlock; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FilterBlock.module.css */ \"(app-pages-browser)/./src/components/FilterBlock/FilterBlock.module.css\");\n/* harmony import */ var _FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction FilterBlock() {\n    _s();\n    const [isArtistOpened, setIsArtistOpened] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isYearOpened, setIsYearOpened] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isGenreOpened, setIsGenreOpened] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggleArtist = ()=>{\n        setIsArtistOpened((prevState)=>!prevState);\n    };\n    const toggleYear = ()=>{\n        setIsYearOpened((prevState)=>!prevState);\n    };\n    const toggleGenre = ()=>{\n        setIsGenreOpened((prevState)=>!prevState);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_3___default().centerBlockFilter), (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_3___default().filter)),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_3___default().filterTitle),\n                children: \"Search for:\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: toggleArtist,\n                className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_3___default().filterButton), (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_3___default().buttonAuthor), (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_3___default().btnText)),\n                children: \"artist\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            isArtistOpened && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_3___default().filterBy),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"Michael Jackson\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"Frank Sinatra\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 33,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: toggleArtist,\n                className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_3___default().filterButton), (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_3___default().buttonYear), (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_3___default().btnText)),\n                children: \"year\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_3___default().filterButton), (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_3___default().buttonGenre), (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_3___default().btnText)),\n                children: \"genre\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_s(FilterBlock, \"8yNZ7wEKN1LQCcPaASALwq6jqNA=\");\n_c = FilterBlock;\nvar _c;\n$RefreshReg$(_c, \"FilterBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0ZpbHRlckJsb2NrL0ZpbHRlckJsb2NrLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ2E7QUFDVjtBQUVyQixTQUFTRzs7SUFFdEIsTUFBTSxDQUFDQyxnQkFBZ0JDLGtCQUFrQixHQUFHTCwrQ0FBUUEsQ0FBQztJQUNyRCxNQUFNLENBQUNNLGNBQWNDLGdCQUFnQixHQUFHUCwrQ0FBUUEsQ0FBQztJQUNqRCxNQUFNLENBQUNRLGVBQWVDLGlCQUFpQixHQUFHVCwrQ0FBUUEsQ0FBQztJQUNuRCxNQUFNVSxlQUFlO1FBQ25CTCxrQkFBa0IsQ0FBQ00sWUFBYyxDQUFDQTtJQUNwQztJQUFHLE1BQU1DLGFBQWE7UUFDcEJMLGdCQUFnQixDQUFDSSxZQUFjLENBQUNBO0lBQ2xDO0lBQUcsTUFBTUUsY0FBYztRQUNyQkosaUJBQWlCLENBQUNFLFlBQWMsQ0FBQ0E7SUFDbkM7SUFFQSxxQkFDRSw4REFBQ0c7UUFBSUMsV0FBV2IsaURBQVVBLENBQUNELGtGQUF3QixFQUFFQSx1RUFBYTs7MEJBQ2hFLDhEQUFDYTtnQkFBSUMsV0FBV2QsNEVBQWtCOzBCQUFFOzs7Ozs7MEJBQ3BDLDhEQUFDYTtnQkFDQ0ssU0FBU1Q7Z0JBQ1RLLFdBQVdiLGlEQUFVQSxDQUNuQkQsNkVBQW1CLEVBQ25CQSw2RUFBbUIsRUFDbkJBLHdFQUFjOzBCQUVqQjs7Ozs7O1lBSUNHLGdDQUNFLDhEQUFDVTtnQkFBSUMsV0FBV2QseUVBQWU7O2tDQUM3Qiw4REFBQ3VCO2tDQUFLOzs7Ozs7a0NBQ04sOERBQUNBO2tDQUFLOzs7Ozs7Ozs7Ozs7MEJBR1osOERBQUNWO2dCQUNDSyxTQUFTVDtnQkFDVEssV0FBV2IsaURBQVVBLENBQ25CRCw2RUFBbUIsRUFDbkJBLDJFQUFpQixFQUNqQkEsd0VBQWM7MEJBRWpCOzs7Ozs7MEJBR0QsOERBQUNhO2dCQUNDQyxXQUFXYixpREFBVUEsQ0FDbkJELDZFQUFtQixFQUVuQkEsNEVBQWtCLEVBRWxCQSx3RUFBYzswQkFFakI7Ozs7Ozs7Ozs7OztBQUtQO0dBeER3QkU7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRmlsdGVyQmxvY2svRmlsdGVyQmxvY2sudHN4P2I1NmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vRmlsdGVyQmxvY2subW9kdWxlLmNzc1wiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmlsdGVyQmxvY2soKSB7XG5cbiAgY29uc3QgW2lzQXJ0aXN0T3BlbmVkLCBzZXRJc0FydGlzdE9wZW5lZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc1llYXJPcGVuZWQsIHNldElzWWVhck9wZW5lZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc0dlbnJlT3BlbmVkLCBzZXRJc0dlbnJlT3BlbmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgdG9nZ2xlQXJ0aXN0ID0gKCkgPT4ge1xuICAgIHNldElzQXJ0aXN0T3BlbmVkKChwcmV2U3RhdGUpID0+ICFwcmV2U3RhdGUpO1xuICB9OyBjb25zdCB0b2dnbGVZZWFyID0gKCkgPT4ge1xuICAgIHNldElzWWVhck9wZW5lZCgocHJldlN0YXRlKSA9PiAhcHJldlN0YXRlKTtcbiAgfTsgY29uc3QgdG9nZ2xlR2VucmUgPSAoKSA9PiB7XG4gICAgc2V0SXNHZW5yZU9wZW5lZCgocHJldlN0YXRlKSA9PiAhcHJldlN0YXRlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5jZW50ZXJCbG9ja0ZpbHRlciwgc3R5bGVzLmZpbHRlcil9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5maWx0ZXJUaXRsZX0+U2VhcmNoIGZvcjo8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgb25DbGljaz17dG9nZ2xlQXJ0aXN0fVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgICAgc3R5bGVzLmZpbHRlckJ1dHRvbixcbiAgICAgICAgICBzdHlsZXMuYnV0dG9uQXV0aG9yLFxuICAgICAgICAgIHN0eWxlcy5idG5UZXh0XG4gICAgICAgICl9XG4gICAgICA+XG4gICAgICAgIGFydGlzdFxuICAgICAgPC9kaXY+XG4gICAgICB7XG4gICAgICAgIGlzQXJ0aXN0T3BlbmVkICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZpbHRlckJ5fT5cbiAgICAgICAgICAgIDxzcGFuPk1pY2hhZWwgSmFja3Nvbjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuPkZyYW5rIFNpbmF0cmE8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8ZGl2XG4gICAgICAgIG9uQ2xpY2s9e3RvZ2dsZUFydGlzdH1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICAgIHN0eWxlcy5maWx0ZXJCdXR0b24sXG4gICAgICAgICAgc3R5bGVzLmJ1dHRvblllYXIsXG4gICAgICAgICAgc3R5bGVzLmJ0blRleHRcbiAgICAgICAgKX1cbiAgICAgID5cbiAgICAgICAgeWVhclxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgICBzdHlsZXMuZmlsdGVyQnV0dG9uLFxuXG4gICAgICAgICAgc3R5bGVzLmJ1dHRvbkdlbnJlLFxuXG4gICAgICAgICAgc3R5bGVzLmJ0blRleHRcbiAgICAgICAgKX1cbiAgICAgID5cbiAgICAgICAgZ2VucmVcbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwic3R5bGVzIiwiY2xhc3NOYW1lcyIsIkZpbHRlckJsb2NrIiwiaXNBcnRpc3RPcGVuZWQiLCJzZXRJc0FydGlzdE9wZW5lZCIsImlzWWVhck9wZW5lZCIsInNldElzWWVhck9wZW5lZCIsImlzR2VucmVPcGVuZWQiLCJzZXRJc0dlbnJlT3BlbmVkIiwidG9nZ2xlQXJ0aXN0IiwicHJldlN0YXRlIiwidG9nZ2xlWWVhciIsInRvZ2dsZUdlbnJlIiwiZGl2IiwiY2xhc3NOYW1lIiwiY2VudGVyQmxvY2tGaWx0ZXIiLCJmaWx0ZXIiLCJmaWx0ZXJUaXRsZSIsIm9uQ2xpY2siLCJmaWx0ZXJCdXR0b24iLCJidXR0b25BdXRob3IiLCJidG5UZXh0IiwiZmlsdGVyQnkiLCJzcGFuIiwiYnV0dG9uWWVhciIsImJ1dHRvbkdlbnJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/FilterBlock/FilterBlock.tsx\n"));

/***/ })

});