"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/tracks/[id]/page",{

/***/ "(app-pages-browser)/./src/components/CenterBlock/CenterBlock.tsx":
/*!****************************************************!*\
  !*** ./src/components/CenterBlock/CenterBlock.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CenterBlock; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CenterBlock.module.css */ \"(app-pages-browser)/./src/components/CenterBlock/CenterBlock.module.css\");\n/* harmony import */ var _CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"(app-pages-browser)/./node_modules/next/dist/api/app-dynamic.js\");\n/* harmony import */ var _components_FilterBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/FilterBlock */ \"(app-pages-browser)/./src/components/FilterBlock/index.tsx\");\n/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/SearchBar */ \"(app-pages-browser)/./src/components/SearchBar/index.tsx\");\n/* harmony import */ var _components_ContentTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ContentTitle */ \"(app-pages-browser)/./src/components/ContentTitle/index.tsx\");\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/hooks */ \"(app-pages-browser)/./src/hooks.ts\");\n/* harmony import */ var _store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/store/features/tracksSlice */ \"(app-pages-browser)/./src/store/features/tracksSlice.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction CenterBlock(param) {\n    let { playlistID, isFilter } = param;\n    _s();\n    const dispatcher = (0,_hooks__WEBPACK_IMPORTED_MODULE_6__.useAppDispatch)();\n    console.log(\"ss\" + playlistID);\n    dispatcher((0,_store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_7__.setPlaylistNumber)(playlistID));\n    const ContentPlaylistWithCustomLoading = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(()=>__webpack_require__.e(/*! import() */ \"_app-pages-browser_src_components_ContentPlaylist_ContentPlaylist_tsx\").then(__webpack_require__.bind(__webpack_require__, /*! ../ContentPlaylist/ContentPlaylist */ \"(app-pages-browser)/./src/components/ContentPlaylist/ContentPlaylist.tsx\")), {\n        loadableGenerated: {\n            modules: [\n                \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx -> \" + \"../ContentPlaylist/ContentPlaylist\"\n            ]\n        },\n        loading: ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_8___default().playlistTitleCol),\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                lineNumber: 25,\n                columnNumber: 20\n            }, this)\n    });\n    let centerBlockTitle;\n    switch(playlistID){\n        case \"1\":\n            centerBlockTitle = \"Daily Playlist\";\n            break;\n        case \"2\":\n            centerBlockTitle = \"100 Dancing Hits\";\n            break;\n        case \"3\":\n            centerBlockTitle = \"Indie Charge\";\n            break;\n        default:\n            centerBlockTitle = \"Tracks\";\n            break;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_8___default().mainCenterBlock),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchBar__WEBPACK_IMPORTED_MODULE_4__.SearchBar, {}, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: (_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_8___default().centerBlockH2),\n                children: centerBlockTitle\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            isFilter && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FilterBlock__WEBPACK_IMPORTED_MODULE_3__.FilterBlock, {}, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                lineNumber: 48,\n                columnNumber: 20\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_8___default().centerBlockContent),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ContentTitle__WEBPACK_IMPORTED_MODULE_5__.ContentTitle, {}, void 0, false, {\n                        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContentPlaylistWithCustomLoading, {}, void 0, false, {\n                        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n}\n_s(CenterBlock, \"oxcldd8uK09OFAA60++g7ORnh2o=\", false, function() {\n    return [\n        _hooks__WEBPACK_IMPORTED_MODULE_6__.useAppDispatch\n    ];\n});\n_c = CenterBlock;\nvar _c;\n$RefreshReg$(_c, \"CenterBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0NlbnRlckJsb2NrL0NlbnRlckJsb2NrLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUU4QztBQUNwQjtBQUNTO0FBQ29CO0FBQ0o7QUFDTTtBQUNoQjtBQUN3QjtBQU9sRCxTQUFTUSxZQUFZLEtBQXlDO1FBQXpDLEVBQUVDLFVBQVUsRUFBRUMsUUFBUSxFQUFtQixHQUF6Qzs7SUFFbEMsTUFBTUMsYUFBYUwsc0RBQWNBO0lBRWpDTSxRQUFRQyxHQUFHLENBQUMsT0FBT0o7SUFDbkJFLFdBQVdKLDhFQUFpQkEsQ0FBQ0U7SUFFN0IsTUFBTUssbUNBQW1DWix3REFBT0EsQ0FBQyxJQUFNLHdSQUE0Qzs7Ozs7O1FBQ2pHYSxTQUFTLGtCQUFNLDhEQUFDQztnQkFBRUMsV0FBV2pCLGlGQUF1QjswQkFBRTs7Ozs7OztJQUd4RCxJQUFJbUI7SUFDSixPQUFRVjtRQUNOLEtBQUs7WUFDSFUsbUJBQW1CO1lBQ25CO1FBQ0YsS0FBSztZQUNIQSxtQkFBbUI7WUFDbkI7UUFDRixLQUFLO1lBQ0hBLG1CQUFtQjtZQUNuQjtRQUNGO1lBQ0VBLG1CQUFtQjtZQUNuQjtJQUNKO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlILFdBQVdqQixnRkFBc0I7OzBCQUNwQyw4REFBQ0ksNERBQVNBOzs7OzswQkFDViw4REFBQ2tCO2dCQUFHTCxXQUFXakIsOEVBQW9COzBCQUFHbUI7Ozs7OztZQUNyQ1QsMEJBQVksOERBQUNQLGdFQUFXQTs7Ozs7MEJBQ3pCLDhEQUFDaUI7Z0JBQUlILFdBQVdqQixtRkFBeUI7O2tDQUN2Qyw4REFBQ0ssa0VBQVlBOzs7OztrQ0FDYiw4REFBQ1M7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSVQ7R0F0Q3dCTjs7UUFFSEYsa0RBQWNBOzs7S0FGWEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2VudGVyQmxvY2svQ2VudGVyQmxvY2sudHN4PzBmZjQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9DZW50ZXJCbG9jay5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XG5pbXBvcnQgeyBGaWx0ZXJCbG9jayB9IGZyb20gXCJAL2NvbXBvbmVudHMvRmlsdGVyQmxvY2tcIjtcbmltcG9ydCB7IFNlYXJjaEJhciB9IGZyb20gXCJAL2NvbXBvbmVudHMvU2VhcmNoQmFyXCI7XG5pbXBvcnQgeyBDb250ZW50VGl0bGUgfSBmcm9tIFwiQC9jb21wb25lbnRzL0NvbnRlbnRUaXRsZVwiO1xuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2ggfSBmcm9tIFwiQC9ob29rc1wiO1xuaW1wb3J0IHsgc2V0UGxheWxpc3ROdW1iZXIgfSBmcm9tIFwiQC9zdG9yZS9mZWF0dXJlcy90cmFja3NTbGljZVwiO1xuXG50eXBlIGNlbnRlckJsb2NrVHlwZSA9IHtcbiAgcGxheWxpc3RJRDogc3RyaW5nLFxuICBpc0ZpbHRlcjogYm9vbGVhbixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENlbnRlckJsb2NrKHsgcGxheWxpc3RJRCwgaXNGaWx0ZXIgfTogY2VudGVyQmxvY2tUeXBlKSB7XG5cbiAgY29uc3QgZGlzcGF0Y2hlciA9IHVzZUFwcERpc3BhdGNoKCk7XG5cbiAgY29uc29sZS5sb2coXCJzc1wiICsgcGxheWxpc3RJRCk7XG4gIGRpc3BhdGNoZXIoc2V0UGxheWxpc3ROdW1iZXIocGxheWxpc3RJRCkpO1xuXG4gIGNvbnN0IENvbnRlbnRQbGF5bGlzdFdpdGhDdXN0b21Mb2FkaW5nID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCIuLi9Db250ZW50UGxheWxpc3QvQ29udGVudFBsYXlsaXN0XCIpLCB7XG4gICAgbG9hZGluZzogKCkgPT4gPHAgY2xhc3NOYW1lPXtzdHlsZXMucGxheWxpc3RUaXRsZUNvbH0+TG9hZGluZy4uLjwvcD4sXG4gIH0pXG5cbiAgbGV0IGNlbnRlckJsb2NrVGl0bGU7XG4gIHN3aXRjaCAocGxheWxpc3RJRCkge1xuICAgIGNhc2UgXCIxXCI6XG4gICAgICBjZW50ZXJCbG9ja1RpdGxlID0gXCJEYWlseSBQbGF5bGlzdFwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIjJcIjpcbiAgICAgIGNlbnRlckJsb2NrVGl0bGUgPSBcIjEwMCBEYW5jaW5nIEhpdHNcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCIzXCI6XG4gICAgICBjZW50ZXJCbG9ja1RpdGxlID0gXCJJbmRpZSBDaGFyZ2VcIjtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBjZW50ZXJCbG9ja1RpdGxlID0gXCJUcmFja3NcIjtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW5DZW50ZXJCbG9ja30+XG4gICAgICA8U2VhcmNoQmFyIC8+XG4gICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyQmxvY2tIMn0+e2NlbnRlckJsb2NrVGl0bGV9PC9oMj5cbiAgICAgIHtpc0ZpbHRlciAmJiA8RmlsdGVyQmxvY2sgLz59XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlckJsb2NrQ29udGVudH0+XG4gICAgICAgIDxDb250ZW50VGl0bGUgLz5cbiAgICAgICAgPENvbnRlbnRQbGF5bGlzdFdpdGhDdXN0b21Mb2FkaW5nIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJSZWFjdCIsImR5bmFtaWMiLCJGaWx0ZXJCbG9jayIsIlNlYXJjaEJhciIsIkNvbnRlbnRUaXRsZSIsInVzZUFwcERpc3BhdGNoIiwic2V0UGxheWxpc3ROdW1iZXIiLCJDZW50ZXJCbG9jayIsInBsYXlsaXN0SUQiLCJpc0ZpbHRlciIsImRpc3BhdGNoZXIiLCJjb25zb2xlIiwibG9nIiwiQ29udGVudFBsYXlsaXN0V2l0aEN1c3RvbUxvYWRpbmciLCJsb2FkaW5nIiwicCIsImNsYXNzTmFtZSIsInBsYXlsaXN0VGl0bGVDb2wiLCJjZW50ZXJCbG9ja1RpdGxlIiwiZGl2IiwibWFpbkNlbnRlckJsb2NrIiwiaDIiLCJjZW50ZXJCbG9ja0gyIiwiY2VudGVyQmxvY2tDb250ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/CenterBlock/CenterBlock.tsx\n"));

/***/ })

});