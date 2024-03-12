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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ContentPlaylist_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ContentPlaylist.module.css */ \"(app-pages-browser)/./src/components/ContentPlaylist/ContentPlaylist.module.css\");\n/* harmony import */ var _ContentPlaylist_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ContentPlaylist_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _contexts_tracks_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/contexts/tracks-context */ \"(app-pages-browser)/./src/contexts/tracks-context.tsx\");\n/* harmony import */ var _components_PlayListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/PlayListItem */ \"(app-pages-browser)/./src/components/PlayListItem/index.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst ContentPlaylist = ()=>{\n    _s();\n    const { tracks } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_tracks_context__WEBPACK_IMPORTED_MODULE_3__.TracksContext);\n    // console.log(tracks);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_ContentPlaylist_module_css__WEBPACK_IMPORTED_MODULE_5___default().contentPlaylist), (_ContentPlaylist_module_css__WEBPACK_IMPORTED_MODULE_5___default().playlist)),\n        children: tracks ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            children: tracks.map((track)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PlayListItem__WEBPACK_IMPORTED_MODULE_4__.PlayListItem, {\n                    id: id,\n                    album: track.album,\n                    duration: track.duration_in_seconds,\n                    genre: track.genre,\n                    logo: track.logo,\n                    name: track.name,\n                    author: track.author,\n                    date: track.release_date\n                }, id, false, {\n                    fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\ContentPlaylist\\\\ContentPlaylist.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 13\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\ContentPlaylist\\\\ContentPlaylist.tsx\",\n            lineNumber: 15,\n            columnNumber: 9\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: (_ContentPlaylist_module_css__WEBPACK_IMPORTED_MODULE_5___default().playlistTitleCol),\n            children: \"Loading tracks...\"\n        }, void 0, false, {\n            fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\ContentPlaylist\\\\ContentPlaylist.tsx\",\n            lineNumber: 33,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\ContentPlaylist\\\\ContentPlaylist.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ContentPlaylist, \"Jo8tT0PQCPGRw3b6SMK3fyI0PTI=\");\n_c = ContentPlaylist;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContentPlaylist); // import React from \"react\";\n // import styles from \"./ContentPlaylist.module.css\";\n // import classNames from \"classnames\";\n // import { PlayListItem } from \"@components/PlayListItem\";\n // import { useTracks } from \"@/hooks/useTracks\";\n // import { Track } from \"@/interfaces/interfaces\";\n // const ContentPlaylist: React.FC = () => {\n //   const { tracks } = useTracks();\n //   console.log(tracks);\n //   if (!Array.isArray(tracks)) {\n //     return (\n //       <p>Loading tracks...</p>\n //     )\n //   }\n //   return (\n //     <div className={classNames(styles.contentPlaylist, styles.playlist)}>\n //       {tracks.map((track: Track) => (\n //         <PlayListItem\n //           key={track.id}\n //           id={track.id}\n //           album={track.album}\n //           duration={track.duration_in_seconds}\n //           genre={track.genre}\n //           logo={track.logo}\n //           name={track.name}\n //           author={track.author}\n //           date={track.release_date}\n //         />\n //       ))}\n //     </div>\n //   );\n // };\n // export default ContentPlaylist;\nvar _c;\n$RefreshReg$(_c, \"ContentPlaylist\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0NvbnRlbnRQbGF5bGlzdC9Db250ZW50UGxheWxpc3QudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQztBQUNRO0FBQ2Q7QUFDc0I7QUFFRjtBQUV4RCxNQUFNTSxrQkFBNEI7O0lBRWhDLE1BQU0sRUFBRUMsTUFBTSxFQUFFLEdBQUdOLGlEQUFVQSxDQUFDRyxtRUFBYUE7SUFDM0MsdUJBQXVCO0lBQ3ZCLHFCQUNFLDhEQUFDSTtRQUFJQyxXQUFXTixpREFBVUEsQ0FBQ0Qsb0ZBQXNCLEVBQUVBLDZFQUFlO2tCQUMvREssdUJBQ0MsOERBQUNLO3NCQUNFTCxPQUFPTSxHQUFHLENBQUMsQ0FBQ0Msc0JBRVgsOERBQUNULGtFQUFZQTtvQkFFWFUsSUFBSUE7b0JBQ0pDLE9BQU9GLE1BQU1FLEtBQUs7b0JBQ2xCQyxVQUFVSCxNQUFNSSxtQkFBbUI7b0JBQ25DQyxPQUFPTCxNQUFNSyxLQUFLO29CQUNsQkMsTUFBTU4sTUFBTU0sSUFBSTtvQkFDaEJDLE1BQU1QLE1BQU1PLElBQUk7b0JBQ2hCQyxRQUFRUixNQUFNUSxNQUFNO29CQUNwQkMsTUFBTVQsTUFBTVUsWUFBWTttQkFSbkJUOzs7Ozs7Ozs7c0NBY1gsOERBQUNVO1lBQUVoQixXQUFXUCxxRkFBdUI7c0JBQUU7Ozs7Ozs7Ozs7O0FBSS9DO0dBN0JNSTtLQUFBQTtBQStCTiwrREFBZUEsZUFBZUEsRUFBQyxDQUcvQiw2QkFBNkI7Q0FDN0IscURBQXFEO0NBQ3JELHVDQUF1QztDQUN2QywyREFBMkQ7Q0FDM0QsaURBQWlEO0NBQ2pELG1EQUFtRDtDQUVuRCw0Q0FBNEM7Q0FFNUMsb0NBQW9DO0NBRXBDLHlCQUF5QjtDQUV6QixrQ0FBa0M7Q0FDbEMsZUFBZTtDQUNmLGlDQUFpQztDQUNqQyxRQUFRO0NBQ1IsTUFBTTtDQUVOLGFBQWE7Q0FDYiw0RUFBNEU7Q0FDNUUsd0NBQXdDO0NBRXhDLHdCQUF3QjtDQUN4QiwyQkFBMkI7Q0FDM0IsMEJBQTBCO0NBQzFCLGdDQUFnQztDQUNoQyxpREFBaUQ7Q0FDakQsZ0NBQWdDO0NBQ2hDLDhCQUE4QjtDQUM5Qiw4QkFBOEI7Q0FDOUIsa0NBQWtDO0NBQ2xDLHNDQUFzQztDQUN0QyxhQUFhO0NBRWIsWUFBWTtDQUNaLGFBQWE7Q0FDYixPQUFPO0NBQ1AsS0FBSztDQUVMLGtDQUFrQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Db250ZW50UGxheWxpc3QvQ29udGVudFBsYXlsaXN0LnRzeD8zY2ZjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0NvbnRlbnRQbGF5bGlzdC5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IHsgVHJhY2tzQ29udGV4dCB9IGZyb20gXCJAL2NvbnRleHRzL3RyYWNrcy1jb250ZXh0XCI7XG5pbXBvcnQgeyBUcmFjayB9IGZyb20gXCJAL2ludGVyZmFjZXMvaW50ZXJmYWNlc1wiO1xuaW1wb3J0IHsgUGxheUxpc3RJdGVtIH0gZnJvbSBcIkBjb21wb25lbnRzL1BsYXlMaXN0SXRlbVwiO1xuXG5jb25zdCBDb250ZW50UGxheWxpc3Q6IFJlYWN0LkZDID0gKCkgPT4ge1xuXG4gIGNvbnN0IHsgdHJhY2tzIH0gPSB1c2VDb250ZXh0KFRyYWNrc0NvbnRleHQpO1xuICAvLyBjb25zb2xlLmxvZyh0cmFja3MpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5jb250ZW50UGxheWxpc3QsIHN0eWxlcy5wbGF5bGlzdCl9PlxuICAgICAge3RyYWNrcyA/IChcbiAgICAgICAgPHVsPlxuICAgICAgICAgIHt0cmFja3MubWFwKCh0cmFjazogVHJhY2spID0+IChcblxuICAgICAgICAgICAgPFBsYXlMaXN0SXRlbVxuICAgICAgICAgICAgICBrZXk9e2lkfVxuICAgICAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgICAgIGFsYnVtPXt0cmFjay5hbGJ1bX1cbiAgICAgICAgICAgICAgZHVyYXRpb249e3RyYWNrLmR1cmF0aW9uX2luX3NlY29uZHN9XG4gICAgICAgICAgICAgIGdlbnJlPXt0cmFjay5nZW5yZX1cbiAgICAgICAgICAgICAgbG9nbz17dHJhY2subG9nb31cbiAgICAgICAgICAgICAgbmFtZT17dHJhY2submFtZX1cbiAgICAgICAgICAgICAgYXV0aG9yPXt0cmFjay5hdXRob3J9XG4gICAgICAgICAgICAgIGRhdGU9e3RyYWNrLnJlbGVhc2VfZGF0ZX1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgICkgOiAoXG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnBsYXlsaXN0VGl0bGVDb2x9PkxvYWRpbmcgdHJhY2tzLi4uPC9wPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRQbGF5bGlzdDtcblxuXG4vLyBpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgc3R5bGVzIGZyb20gXCIuL0NvbnRlbnRQbGF5bGlzdC5tb2R1bGUuY3NzXCI7XG4vLyBpbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuLy8gaW1wb3J0IHsgUGxheUxpc3RJdGVtIH0gZnJvbSBcIkBjb21wb25lbnRzL1BsYXlMaXN0SXRlbVwiO1xuLy8gaW1wb3J0IHsgdXNlVHJhY2tzIH0gZnJvbSBcIkAvaG9va3MvdXNlVHJhY2tzXCI7XG4vLyBpbXBvcnQgeyBUcmFjayB9IGZyb20gXCJAL2ludGVyZmFjZXMvaW50ZXJmYWNlc1wiO1xuXG4vLyBjb25zdCBDb250ZW50UGxheWxpc3Q6IFJlYWN0LkZDID0gKCkgPT4ge1xuXG4vLyAgIGNvbnN0IHsgdHJhY2tzIH0gPSB1c2VUcmFja3MoKTtcblxuLy8gICBjb25zb2xlLmxvZyh0cmFja3MpO1xuXG4vLyAgIGlmICghQXJyYXkuaXNBcnJheSh0cmFja3MpKSB7XG4vLyAgICAgcmV0dXJuIChcbi8vICAgICAgIDxwPkxvYWRpbmcgdHJhY2tzLi4uPC9wPlxuLy8gICAgIClcbi8vICAgfVxuXG4vLyAgIHJldHVybiAoXG4vLyAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLmNvbnRlbnRQbGF5bGlzdCwgc3R5bGVzLnBsYXlsaXN0KX0+XG4vLyAgICAgICB7dHJhY2tzLm1hcCgodHJhY2s6IFRyYWNrKSA9PiAoXG5cbi8vICAgICAgICAgPFBsYXlMaXN0SXRlbVxuLy8gICAgICAgICAgIGtleT17dHJhY2suaWR9XG4vLyAgICAgICAgICAgaWQ9e3RyYWNrLmlkfVxuLy8gICAgICAgICAgIGFsYnVtPXt0cmFjay5hbGJ1bX1cbi8vICAgICAgICAgICBkdXJhdGlvbj17dHJhY2suZHVyYXRpb25faW5fc2Vjb25kc31cbi8vICAgICAgICAgICBnZW5yZT17dHJhY2suZ2VucmV9XG4vLyAgICAgICAgICAgbG9nbz17dHJhY2subG9nb31cbi8vICAgICAgICAgICBuYW1lPXt0cmFjay5uYW1lfVxuLy8gICAgICAgICAgIGF1dGhvcj17dHJhY2suYXV0aG9yfVxuLy8gICAgICAgICAgIGRhdGU9e3RyYWNrLnJlbGVhc2VfZGF0ZX1cbi8vICAgICAgICAgLz5cblxuLy8gICAgICAgKSl9XG4vLyAgICAgPC9kaXY+XG4vLyAgICk7XG4vLyB9O1xuXG4vLyBleHBvcnQgZGVmYXVsdCBDb250ZW50UGxheWxpc3Q7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDb250ZXh0Iiwic3R5bGVzIiwiY2xhc3NOYW1lcyIsIlRyYWNrc0NvbnRleHQiLCJQbGF5TGlzdEl0ZW0iLCJDb250ZW50UGxheWxpc3QiLCJ0cmFja3MiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250ZW50UGxheWxpc3QiLCJwbGF5bGlzdCIsInVsIiwibWFwIiwidHJhY2siLCJpZCIsImFsYnVtIiwiZHVyYXRpb24iLCJkdXJhdGlvbl9pbl9zZWNvbmRzIiwiZ2VucmUiLCJsb2dvIiwibmFtZSIsImF1dGhvciIsImRhdGUiLCJyZWxlYXNlX2RhdGUiLCJwIiwicGxheWxpc3RUaXRsZUNvbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ContentPlaylist/ContentPlaylist.tsx\n"));

/***/ })

});