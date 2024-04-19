"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/myplaylist/page",{

/***/ "(app-pages-browser)/./src/components/CenterBlock/CenterBlock.tsx":
/*!****************************************************!*\
  !*** ./src/components/CenterBlock/CenterBlock.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CenterBlock; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CenterBlock.module.css */ \"(app-pages-browser)/./src/components/CenterBlock/CenterBlock.module.css\");\n/* harmony import */ var _CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"(app-pages-browser)/./node_modules/next/dist/api/app-dynamic.js\");\n/* harmony import */ var _components_FilterBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/FilterBlock */ \"(app-pages-browser)/./src/components/FilterBlock/index.tsx\");\n/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/SearchBar */ \"(app-pages-browser)/./src/components/SearchBar/index.tsx\");\n/* harmony import */ var _components_ContentTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ContentTitle */ \"(app-pages-browser)/./src/components/ContentTitle/index.tsx\");\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/hooks */ \"(app-pages-browser)/./src/hooks.ts\");\n/* harmony import */ var _store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/store/features/tracksSlice */ \"(app-pages-browser)/./src/store/features/tracksSlice.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction CenterBlock(param) {\n    let { playlistID, isFilter } = param;\n    _s();\n    const dispatcher = (0,_hooks__WEBPACK_IMPORTED_MODULE_6__.useAppDispatch)();\n    dispatcher((0,_store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_7__.setPlaylistNumber)(playlistID));\n    const ContentPlaylistWithCustomLoading = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(()=>__webpack_require__.e(/*! import() */ \"_app-pages-browser_src_components_ContentPlaylist_ContentPlaylist_tsx\").then(__webpack_require__.bind(__webpack_require__, /*! ../ContentPlaylist/ContentPlaylist */ \"(app-pages-browser)/./src/components/ContentPlaylist/ContentPlaylist.tsx\")), {\n        loadableGenerated: {\n            modules: [\n                \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx -> \" + \"../ContentPlaylist/ContentPlaylist\"\n            ]\n        },\n        loading: ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_8___default().playlistTitleCol),\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                lineNumber: 24,\n                columnNumber: 20\n            }, this)\n    });\n    let centerBlockTitle;\n    switch(playlistID){\n        case \"1\":\n            centerBlockTitle = \"Daily Playlist\";\n            break;\n        case \"2\":\n            centerBlockTitle = \"100 Dancing Hits\";\n            break;\n        case \"3\":\n            centerBlockTitle = \"Indie Charge\";\n            break;\n        default:\n            centerBlockTitle = \"Tracks\";\n            break;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_8___default().mainCenterBlock),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchBar__WEBPACK_IMPORTED_MODULE_4__.SearchBar, {}, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: (_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_8___default().centerBlockH2),\n                children: centerBlockTitle\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            isFilter && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FilterBlock__WEBPACK_IMPORTED_MODULE_3__.FilterBlock, {}, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                lineNumber: 47,\n                columnNumber: 20\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_8___default().centerBlockContent),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ContentTitle__WEBPACK_IMPORTED_MODULE_5__.ContentTitle, {}, void 0, false, {\n                        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContentPlaylistWithCustomLoading, {}, void 0, false, {\n                        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n}\n_s(CenterBlock, \"oxcldd8uK09OFAA60++g7ORnh2o=\", false, function() {\n    return [\n        _hooks__WEBPACK_IMPORTED_MODULE_6__.useAppDispatch\n    ];\n});\n_c = CenterBlock;\nvar _c;\n$RefreshReg$(_c, \"CenterBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0NlbnRlckJsb2NrL0NlbnRlckJsb2NrLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUU4QztBQUNwQjtBQUNTO0FBQ29CO0FBQ0o7QUFDTTtBQUNoQjtBQUN3QjtBQU9sRCxTQUFTUSxZQUFZLEtBQXlDO1FBQXpDLEVBQUVDLFVBQVUsRUFBRUMsUUFBUSxFQUFtQixHQUF6Qzs7SUFFbEMsTUFBTUMsYUFBYUwsc0RBQWNBO0lBRWpDSyxXQUFXSiw4RUFBaUJBLENBQUNFO0lBRTdCLE1BQU1HLG1DQUFtQ1Ysd0RBQU9BLENBQUMsSUFBTSx3UkFBNEM7Ozs7OztRQUNqR1csU0FBUyxrQkFBTSw4REFBQ0M7Z0JBQUVDLFdBQVdmLGlGQUF1QjswQkFBRTs7Ozs7OztJQUd4RCxJQUFJaUI7SUFDSixPQUFRUjtRQUNOLEtBQUs7WUFDSFEsbUJBQW1CO1lBQ25CO1FBQ0YsS0FBSztZQUNIQSxtQkFBbUI7WUFDbkI7UUFDRixLQUFLO1lBQ0hBLG1CQUFtQjtZQUNuQjtRQUNGO1lBQ0VBLG1CQUFtQjtZQUNuQjtJQUNKO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlILFdBQVdmLGdGQUFzQjs7MEJBQ3BDLDhEQUFDSSw0REFBU0E7Ozs7OzBCQUNWLDhEQUFDZ0I7Z0JBQUdMLFdBQVdmLDhFQUFvQjswQkFBR2lCOzs7Ozs7WUFDckNQLDBCQUFZLDhEQUFDUCxnRUFBV0E7Ozs7OzBCQUN6Qiw4REFBQ2U7Z0JBQUlILFdBQVdmLG1GQUF5Qjs7a0NBQ3ZDLDhEQUFDSyxrRUFBWUE7Ozs7O2tDQUNiLDhEQUFDTzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJVDtHQXJDd0JKOztRQUVIRixrREFBY0E7OztLQUZYRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DZW50ZXJCbG9jay9DZW50ZXJCbG9jay50c3g/MGZmNCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0NlbnRlckJsb2NrLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcbmltcG9ydCB7IEZpbHRlckJsb2NrIH0gZnJvbSBcIkAvY29tcG9uZW50cy9GaWx0ZXJCbG9ja1wiO1xuaW1wb3J0IHsgU2VhcmNoQmFyIH0gZnJvbSBcIkAvY29tcG9uZW50cy9TZWFyY2hCYXJcIjtcbmltcG9ydCB7IENvbnRlbnRUaXRsZSB9IGZyb20gXCJAL2NvbXBvbmVudHMvQ29udGVudFRpdGxlXCI7XG5pbXBvcnQgeyB1c2VBcHBEaXNwYXRjaCB9IGZyb20gXCJAL2hvb2tzXCI7XG5pbXBvcnQgeyBzZXRQbGF5bGlzdE51bWJlciB9IGZyb20gXCJAL3N0b3JlL2ZlYXR1cmVzL3RyYWNrc1NsaWNlXCI7XG5cbnR5cGUgY2VudGVyQmxvY2tUeXBlID0ge1xuICBwbGF5bGlzdElEOiBzdHJpbmcsXG4gIGlzRmlsdGVyOiBib29sZWFuLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2VudGVyQmxvY2soeyBwbGF5bGlzdElELCBpc0ZpbHRlciB9OiBjZW50ZXJCbG9ja1R5cGUpIHtcblxuICBjb25zdCBkaXNwYXRjaGVyID0gdXNlQXBwRGlzcGF0Y2goKTtcblxuICBkaXNwYXRjaGVyKHNldFBsYXlsaXN0TnVtYmVyKHBsYXlsaXN0SUQpKTtcblxuICBjb25zdCBDb250ZW50UGxheWxpc3RXaXRoQ3VzdG9tTG9hZGluZyA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwiLi4vQ29udGVudFBsYXlsaXN0L0NvbnRlbnRQbGF5bGlzdFwiKSwge1xuICAgIGxvYWRpbmc6ICgpID0+IDxwIGNsYXNzTmFtZT17c3R5bGVzLnBsYXlsaXN0VGl0bGVDb2x9PkxvYWRpbmcuLi48L3A+LFxuICB9KVxuXG4gIGxldCBjZW50ZXJCbG9ja1RpdGxlO1xuICBzd2l0Y2ggKHBsYXlsaXN0SUQpIHtcbiAgICBjYXNlIFwiMVwiOlxuICAgICAgY2VudGVyQmxvY2tUaXRsZSA9IFwiRGFpbHkgUGxheWxpc3RcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCIyXCI6XG4gICAgICBjZW50ZXJCbG9ja1RpdGxlID0gXCIxMDAgRGFuY2luZyBIaXRzXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiM1wiOlxuICAgICAgY2VudGVyQmxvY2tUaXRsZSA9IFwiSW5kaWUgQ2hhcmdlXCI7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgY2VudGVyQmxvY2tUaXRsZSA9IFwiVHJhY2tzXCI7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWluQ2VudGVyQmxvY2t9PlxuICAgICAgPFNlYXJjaEJhciAvPlxuICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlckJsb2NrSDJ9PntjZW50ZXJCbG9ja1RpdGxlfTwvaDI+XG4gICAgICB7aXNGaWx0ZXIgJiYgPEZpbHRlckJsb2NrIC8+fVxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJCbG9ja0NvbnRlbnR9PlxuICAgICAgICA8Q29udGVudFRpdGxlIC8+XG4gICAgICAgIDxDb250ZW50UGxheWxpc3RXaXRoQ3VzdG9tTG9hZGluZyAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsic3R5bGVzIiwiUmVhY3QiLCJkeW5hbWljIiwiRmlsdGVyQmxvY2siLCJTZWFyY2hCYXIiLCJDb250ZW50VGl0bGUiLCJ1c2VBcHBEaXNwYXRjaCIsInNldFBsYXlsaXN0TnVtYmVyIiwiQ2VudGVyQmxvY2siLCJwbGF5bGlzdElEIiwiaXNGaWx0ZXIiLCJkaXNwYXRjaGVyIiwiQ29udGVudFBsYXlsaXN0V2l0aEN1c3RvbUxvYWRpbmciLCJsb2FkaW5nIiwicCIsImNsYXNzTmFtZSIsInBsYXlsaXN0VGl0bGVDb2wiLCJjZW50ZXJCbG9ja1RpdGxlIiwiZGl2IiwibWFpbkNlbnRlckJsb2NrIiwiaDIiLCJjZW50ZXJCbG9ja0gyIiwiY2VudGVyQmxvY2tDb250ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/CenterBlock/CenterBlock.tsx\n"));

/***/ })

});