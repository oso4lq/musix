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

/***/ "(app-pages-browser)/./src/components/ContentPlaylist/ContentPlaylist.tsx":
/*!************************************************************!*\
  !*** ./src/components/ContentPlaylist/ContentPlaylist.tsx ***!
  \************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ContentPlaylist; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ContentPlaylist_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ContentPlaylist.module.css */ \"(app-pages-browser)/./src/components/ContentPlaylist/ContentPlaylist.module.css\");\n/* harmony import */ var _ContentPlaylist_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ContentPlaylist_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_PlayListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/PlayListItem */ \"(app-pages-browser)/./src/components/PlayListItem/index.tsx\");\n/* harmony import */ var _hooks_useTracks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/hooks/useTracks */ \"(app-pages-browser)/./src/hooks/useTracks.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction ContentPlaylist() {\n    _s();\n    const { tracks } = (0,_hooks_useTracks__WEBPACK_IMPORTED_MODULE_4__.useTracks)();\n    // if (!Array.isArray(tracks)) {\n    //   return (\n    //     <p>Loading tracks...</p>\n    //   )\n    // }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_ContentPlaylist_module_css__WEBPACK_IMPORTED_MODULE_5___default().contentPlaylist), (_ContentPlaylist_module_css__WEBPACK_IMPORTED_MODULE_5___default().playlist)),\n        children: tracks.map((track)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PlayListItem__WEBPACK_IMPORTED_MODULE_3__.PlayListItem, {\n                id: track.id,\n                album: track.album,\n                author: track.author,\n                duration: track.duration_in_seconds,\n                genre: track.genre,\n                logo: track.logo,\n                name: track.name,\n                date: track.release_date\n            }, track.id, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\ContentPlaylist\\\\ContentPlaylist.tsx\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\ContentPlaylist\\\\ContentPlaylist.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_s(ContentPlaylist, \"8LZ7JONRhcOMoC83mME0qMzHbT8=\", false, function() {\n    return [\n        _hooks_useTracks__WEBPACK_IMPORTED_MODULE_4__.useTracks\n    ];\n});\n_c = ContentPlaylist;\nvar _c;\n$RefreshReg$(_c, \"ContentPlaylist\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0NvbnRlbnRQbGF5bGlzdC9Db250ZW50UGxheWxpc3QudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUN3QjtBQUNkO0FBQ29CO0FBQ1Y7QUFHL0IsU0FBU0s7O0lBRXRCLE1BQU0sRUFBRUMsTUFBTSxFQUFFLEdBQUdGLDJEQUFTQTtJQUU1QixnQ0FBZ0M7SUFDaEMsYUFBYTtJQUNiLCtCQUErQjtJQUMvQixNQUFNO0lBQ04sSUFBSTtJQUVKLHFCQUNFLDhEQUFDRztRQUFJQyxXQUFXTixpREFBVUEsQ0FBQ0Qsb0ZBQXNCLEVBQUVBLDZFQUFlO2tCQUUvREssT0FBT0ssR0FBRyxDQUFDLENBQUNDLHNCQUNYLDhEQUFDVCxrRUFBWUE7Z0JBRVhVLElBQUlELE1BQU1DLEVBQUU7Z0JBQ1pDLE9BQU9GLE1BQU1FLEtBQUs7Z0JBQ2xCQyxRQUFRSCxNQUFNRyxNQUFNO2dCQUNwQkMsVUFBVUosTUFBTUssbUJBQW1CO2dCQUNuQ0MsT0FBT04sTUFBTU0sS0FBSztnQkFDbEJDLE1BQU1QLE1BQU1PLElBQUk7Z0JBQ2hCQyxNQUFNUixNQUFNUSxJQUFJO2dCQUNoQkMsTUFBTVQsTUFBTVUsWUFBWTtlQVJuQlYsTUFBTUMsRUFBRTs7Ozs7Ozs7OztBQWN2QjtHQTdCd0JSOztRQUVIRCx1REFBU0E7OztLQUZOQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Db250ZW50UGxheWxpc3QvQ29udGVudFBsYXlsaXN0LnRzeD8zY2ZjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vQ29udGVudFBsYXlsaXN0Lm1vZHVsZS5jc3NcIjtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgeyBQbGF5TGlzdEl0ZW0gfSBmcm9tIFwiQGNvbXBvbmVudHMvUGxheUxpc3RJdGVtXCI7XG5pbXBvcnQgeyB1c2VUcmFja3MgfSBmcm9tIFwiQC9ob29rcy91c2VUcmFja3NcIjtcbmltcG9ydCB7IFRyYWNrIH0gZnJvbSBcIkAvaW50ZXJmYWNlcy9pbnRlcmZhY2VzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRlbnRQbGF5bGlzdCgpIHtcblxuICBjb25zdCB7IHRyYWNrcyB9ID0gdXNlVHJhY2tzKCk7XG5cbiAgLy8gaWYgKCFBcnJheS5pc0FycmF5KHRyYWNrcykpIHtcbiAgLy8gICByZXR1cm4gKFxuICAvLyAgICAgPHA+TG9hZGluZyB0cmFja3MuLi48L3A+XG4gIC8vICAgKVxuICAvLyB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMuY29udGVudFBsYXlsaXN0LCBzdHlsZXMucGxheWxpc3QpfT5cblxuICAgICAge3RyYWNrcy5tYXAoKHRyYWNrOiBUcmFjaykgPT4gKFxuICAgICAgICA8UGxheUxpc3RJdGVtXG4gICAgICAgICAga2V5PXt0cmFjay5pZH1cbiAgICAgICAgICBpZD17dHJhY2suaWR9XG4gICAgICAgICAgYWxidW09e3RyYWNrLmFsYnVtfVxuICAgICAgICAgIGF1dGhvcj17dHJhY2suYXV0aG9yfVxuICAgICAgICAgIGR1cmF0aW9uPXt0cmFjay5kdXJhdGlvbl9pbl9zZWNvbmRzfVxuICAgICAgICAgIGdlbnJlPXt0cmFjay5nZW5yZX1cbiAgICAgICAgICBsb2dvPXt0cmFjay5sb2dvfVxuICAgICAgICAgIG5hbWU9e3RyYWNrLm5hbWV9XG4gICAgICAgICAgZGF0ZT17dHJhY2sucmVsZWFzZV9kYXRlfVxuICAgICAgICAvPlxuICAgICAgKSl9XG5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlcyIsImNsYXNzTmFtZXMiLCJQbGF5TGlzdEl0ZW0iLCJ1c2VUcmFja3MiLCJDb250ZW50UGxheWxpc3QiLCJ0cmFja3MiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250ZW50UGxheWxpc3QiLCJwbGF5bGlzdCIsIm1hcCIsInRyYWNrIiwiaWQiLCJhbGJ1bSIsImF1dGhvciIsImR1cmF0aW9uIiwiZHVyYXRpb25faW5fc2Vjb25kcyIsImdlbnJlIiwibG9nbyIsIm5hbWUiLCJkYXRlIiwicmVsZWFzZV9kYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ContentPlaylist/ContentPlaylist.tsx\n"));

/***/ })

});