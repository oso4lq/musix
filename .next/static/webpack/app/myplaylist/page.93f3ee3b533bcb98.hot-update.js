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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CenterBlock; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CenterBlock.module.css */ \"(app-pages-browser)/./src/components/CenterBlock/CenterBlock.module.css\");\n/* harmony import */ var _CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"(app-pages-browser)/./node_modules/next/dist/api/app-dynamic.js\");\n/* harmony import */ var _components_FilterBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/FilterBlock */ \"(app-pages-browser)/./src/components/FilterBlock/index.tsx\");\n/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/SearchBar */ \"(app-pages-browser)/./src/components/SearchBar/index.tsx\");\n/* harmony import */ var _components_ContentTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ContentTitle */ \"(app-pages-browser)/./src/components/ContentTitle/index.tsx\");\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/hooks */ \"(app-pages-browser)/./src/hooks.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction CenterBlock(param) {\n    let { playlistID, isFilter } = param;\n    _s();\n    const dispatcher = (0,_hooks__WEBPACK_IMPORTED_MODULE_6__.useAppDispatch)();\n    console.log(\"ss\" + playlistID);\n    // const handlePlaylistNumber = (number: number) => {\n    dispatcher(setPlaylistNumber(playlistID));\n    const ContentPlaylistWithCustomLoading = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(()=>__webpack_require__.e(/*! import() */ \"_app-pages-browser_src_components_ContentPlaylist_ContentPlaylist_tsx\").then(__webpack_require__.bind(__webpack_require__, /*! ../ContentPlaylist/ContentPlaylist */ \"(app-pages-browser)/./src/components/ContentPlaylist/ContentPlaylist.tsx\")), {\n        loadableGenerated: {\n            modules: [\n                \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx -> \" + \"../ContentPlaylist/ContentPlaylist\"\n            ]\n        },\n        loading: ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_7___default().playlistTitleCol),\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                lineNumber: 26,\n                columnNumber: 20\n            }, this)\n    });\n    let centerBlockTitle;\n    switch(playlistID){\n        case \"1\":\n            centerBlockTitle = \"Daily Playlist\";\n            break;\n        case \"2\":\n            centerBlockTitle = \"100 Dancing Hits\";\n            break;\n        case \"3\":\n            centerBlockTitle = \"Indie Charge\";\n            break;\n        default:\n            centerBlockTitle = \"Tracks\";\n            break;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_7___default().mainCenterBlock),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchBar__WEBPACK_IMPORTED_MODULE_4__.SearchBar, {}, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: (_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_7___default().centerBlockH2),\n                children: centerBlockTitle\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            isFilter && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FilterBlock__WEBPACK_IMPORTED_MODULE_3__.FilterBlock, {}, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                lineNumber: 49,\n                columnNumber: 20\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_7___default().centerBlockContent),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ContentTitle__WEBPACK_IMPORTED_MODULE_5__.ContentTitle, {}, void 0, false, {\n                        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContentPlaylistWithCustomLoading, {}, void 0, false, {\n                        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n}\n_s(CenterBlock, \"oxcldd8uK09OFAA60++g7ORnh2o=\", false, function() {\n    return [\n        _hooks__WEBPACK_IMPORTED_MODULE_6__.useAppDispatch\n    ];\n});\n_c = CenterBlock;\nvar _c;\n$RefreshReg$(_c, \"CenterBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0NlbnRlckJsb2NrL0NlbnRlckJsb2NrLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBRThDO0FBQ3BCO0FBQ1M7QUFDb0I7QUFDSjtBQUNNO0FBQ2hCO0FBTzFCLFNBQVNPLFlBQVksS0FBeUM7UUFBekMsRUFBRUMsVUFBVSxFQUFFQyxRQUFRLEVBQW1CLEdBQXpDOztJQUVsQyxNQUFNQyxhQUFhSixzREFBY0E7SUFFakNLLFFBQVFDLEdBQUcsQ0FBQyxPQUFPSjtJQUNuQixxREFBcUQ7SUFDckRFLFdBQVdHLGtCQUFrQkw7SUFHN0IsTUFBTU0sbUNBQW1DWix3REFBT0EsQ0FBQyxJQUFNLHdSQUE0Qzs7Ozs7O1FBQ2pHYSxTQUFTLGtCQUFNLDhEQUFDQztnQkFBRUMsV0FBV2pCLGlGQUF1QjswQkFBRTs7Ozs7OztJQUd4RCxJQUFJbUI7SUFDSixPQUFRWDtRQUNOLEtBQUs7WUFDSFcsbUJBQW1CO1lBQ25CO1FBQ0YsS0FBSztZQUNIQSxtQkFBbUI7WUFDbkI7UUFDRixLQUFLO1lBQ0hBLG1CQUFtQjtZQUNuQjtRQUNGO1lBQ0VBLG1CQUFtQjtZQUNuQjtJQUNKO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlILFdBQVdqQixnRkFBc0I7OzBCQUNwQyw4REFBQ0ksNERBQVNBOzs7OzswQkFDViw4REFBQ2tCO2dCQUFHTCxXQUFXakIsOEVBQW9COzBCQUFHbUI7Ozs7OztZQUNyQ1YsMEJBQVksOERBQUNOLGdFQUFXQTs7Ozs7MEJBQ3pCLDhEQUFDaUI7Z0JBQUlILFdBQVdqQixtRkFBeUI7O2tDQUN2Qyw4REFBQ0ssa0VBQVlBOzs7OztrQ0FDYiw4REFBQ1M7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSVQ7R0F4Q3dCUDs7UUFFSEQsa0RBQWNBOzs7S0FGWEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2VudGVyQmxvY2svQ2VudGVyQmxvY2sudHN4PzBmZjQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9DZW50ZXJCbG9jay5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XG5pbXBvcnQgeyBGaWx0ZXJCbG9jayB9IGZyb20gXCJAL2NvbXBvbmVudHMvRmlsdGVyQmxvY2tcIjtcbmltcG9ydCB7IFNlYXJjaEJhciB9IGZyb20gXCJAL2NvbXBvbmVudHMvU2VhcmNoQmFyXCI7XG5pbXBvcnQgeyBDb250ZW50VGl0bGUgfSBmcm9tIFwiQC9jb21wb25lbnRzL0NvbnRlbnRUaXRsZVwiO1xuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2ggfSBmcm9tIFwiQC9ob29rc1wiO1xuXG50eXBlIGNlbnRlckJsb2NrVHlwZSA9IHtcbiAgcGxheWxpc3RJRDogc3RyaW5nLFxuICBpc0ZpbHRlcjogYm9vbGVhbixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENlbnRlckJsb2NrKHsgcGxheWxpc3RJRCwgaXNGaWx0ZXIgfTogY2VudGVyQmxvY2tUeXBlKSB7XG5cbiAgY29uc3QgZGlzcGF0Y2hlciA9IHVzZUFwcERpc3BhdGNoKCk7XG5cbiAgY29uc29sZS5sb2coXCJzc1wiICsgcGxheWxpc3RJRCk7XG4gIC8vIGNvbnN0IGhhbmRsZVBsYXlsaXN0TnVtYmVyID0gKG51bWJlcjogbnVtYmVyKSA9PiB7XG4gIGRpc3BhdGNoZXIoc2V0UGxheWxpc3ROdW1iZXIocGxheWxpc3RJRCkpO1xuXG5cbiAgY29uc3QgQ29udGVudFBsYXlsaXN0V2l0aEN1c3RvbUxvYWRpbmcgPSBkeW5hbWljKCgpID0+IGltcG9ydChcIi4uL0NvbnRlbnRQbGF5bGlzdC9Db250ZW50UGxheWxpc3RcIiksIHtcbiAgICBsb2FkaW5nOiAoKSA9PiA8cCBjbGFzc05hbWU9e3N0eWxlcy5wbGF5bGlzdFRpdGxlQ29sfT5Mb2FkaW5nLi4uPC9wPixcbiAgfSlcblxuICBsZXQgY2VudGVyQmxvY2tUaXRsZTtcbiAgc3dpdGNoIChwbGF5bGlzdElEKSB7XG4gICAgY2FzZSBcIjFcIjpcbiAgICAgIGNlbnRlckJsb2NrVGl0bGUgPSBcIkRhaWx5IFBsYXlsaXN0XCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiMlwiOlxuICAgICAgY2VudGVyQmxvY2tUaXRsZSA9IFwiMTAwIERhbmNpbmcgSGl0c1wiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIjNcIjpcbiAgICAgIGNlbnRlckJsb2NrVGl0bGUgPSBcIkluZGllIENoYXJnZVwiO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGNlbnRlckJsb2NrVGl0bGUgPSBcIlRyYWNrc1wiO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbkNlbnRlckJsb2NrfT5cbiAgICAgIDxTZWFyY2hCYXIgLz5cbiAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJCbG9ja0gyfT57Y2VudGVyQmxvY2tUaXRsZX08L2gyPlxuICAgICAge2lzRmlsdGVyICYmIDxGaWx0ZXJCbG9jayAvPn1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyQmxvY2tDb250ZW50fT5cbiAgICAgICAgPENvbnRlbnRUaXRsZSAvPlxuICAgICAgICA8Q29udGVudFBsYXlsaXN0V2l0aEN1c3RvbUxvYWRpbmcgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInN0eWxlcyIsIlJlYWN0IiwiZHluYW1pYyIsIkZpbHRlckJsb2NrIiwiU2VhcmNoQmFyIiwiQ29udGVudFRpdGxlIiwidXNlQXBwRGlzcGF0Y2giLCJDZW50ZXJCbG9jayIsInBsYXlsaXN0SUQiLCJpc0ZpbHRlciIsImRpc3BhdGNoZXIiLCJjb25zb2xlIiwibG9nIiwic2V0UGxheWxpc3ROdW1iZXIiLCJDb250ZW50UGxheWxpc3RXaXRoQ3VzdG9tTG9hZGluZyIsImxvYWRpbmciLCJwIiwiY2xhc3NOYW1lIiwicGxheWxpc3RUaXRsZUNvbCIsImNlbnRlckJsb2NrVGl0bGUiLCJkaXYiLCJtYWluQ2VudGVyQmxvY2siLCJoMiIsImNlbnRlckJsb2NrSDIiLCJjZW50ZXJCbG9ja0NvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/CenterBlock/CenterBlock.tsx\n"));

/***/ })

});