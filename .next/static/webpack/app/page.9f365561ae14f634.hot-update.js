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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_tracks_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/contexts/tracks-context */ \"(app-pages-browser)/./src/contexts/tracks-context.tsx\");\n/* harmony import */ var _components_PlayListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/PlayListItem */ \"(app-pages-browser)/./src/components/PlayListItem/index.tsx\");\n// ContentPlaylist.tsx\n\nvar _s = $RefreshSig$();\n\n// import classNames from \"classnames\";\n// import { TracksContext, Track } from \"../contexts/tracks-context\";\n\n\nconst ContentPlaylist = ()=>{\n    _s();\n    // Consume tracks data from context\n    const { tracks } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_tracks_context__WEBPACK_IMPORTED_MODULE_2__.TracksContext);\n    console.log(tracks);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: tracks ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            children: tracks.map((track)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PlayListItem__WEBPACK_IMPORTED_MODULE_3__.PlayListItem, {\n                    id: track.id,\n                    album: track.album,\n                    duration: track.duration_in_seconds,\n                    genre: track.genre,\n                    logo: track.logo,\n                    name: track.name,\n                    author: track.author,\n                    date: track.release_date\n                }, track.id, false, {\n                    fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\ContentPlaylist\\\\ContentPlaylist.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 13\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\ContentPlaylist\\\\ContentPlaylist.tsx\",\n            lineNumber: 18,\n            columnNumber: 9\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading tracks...\"\n        }, void 0, false, {\n            fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\ContentPlaylist\\\\ContentPlaylist.tsx\",\n            lineNumber: 39,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\ContentPlaylist\\\\ContentPlaylist.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ContentPlaylist, \"Jo8tT0PQCPGRw3b6SMK3fyI0PTI=\");\n_c = ContentPlaylist;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContentPlaylist); // import React from \"react\";\n // import styles from \"./ContentPlaylist.module.css\";\n // import classNames from \"classnames\";\n // import { PlayListItem } from \"@components/PlayListItem\";\n // import { useTracks } from \"@/hooks/useTracks\";\n // import { Track } from \"@/interfaces/interfaces\";\n // const ContentPlaylist: React.FC = () => {\n //   const { tracks } = useTracks();\n //   console.log(tracks);\n //   if (!Array.isArray(tracks)) {\n //     return (\n //       <p>Loading tracks...</p>\n //     )\n //   }\n //   return (\n //     <div className={classNames(styles.contentPlaylist, styles.playlist)}>\n //       {tracks.map((track: Track) => (\n //         <PlayListItem\n //           key={track.id}\n //           id={track.id}\n //           album={track.album}\n //           duration={track.duration_in_seconds}\n //           genre={track.genre}\n //           logo={track.logo}\n //           name={track.name}\n //           author={track.author}\n //           date={track.release_date}\n //         />\n //       ))}\n //     </div>\n //   );\n // };\n // export default ContentPlaylist;\nvar _c;\n$RefreshReg$(_c, \"ContentPlaylist\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0NvbnRlbnRQbGF5bGlzdC9Db250ZW50UGxheWxpc3QudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHNCQUFzQjs7O0FBQ29CO0FBQzFDLHVDQUF1QztBQUV2QyxxRUFBcUU7QUFDWDtBQUVGO0FBRXhELE1BQU1JLGtCQUE0Qjs7SUFDaEMsbUNBQW1DO0lBRW5DLE1BQU0sRUFBRUMsTUFBTSxFQUFFLEdBQUdKLGlEQUFVQSxDQUFDQyxtRUFBYUE7SUFDM0NJLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDWixxQkFDRSw4REFBQ0c7a0JBQ0VILHVCQUNDLDhEQUFDSTtzQkFJRUosT0FBT0ssR0FBRyxDQUFDLENBQUNDLHNCQUVYLDhEQUFDUixrRUFBWUE7b0JBRVhTLElBQUlELE1BQU1DLEVBQUU7b0JBQ1pDLE9BQU9GLE1BQU1FLEtBQUs7b0JBQ2xCQyxVQUFVSCxNQUFNSSxtQkFBbUI7b0JBQ25DQyxPQUFPTCxNQUFNSyxLQUFLO29CQUNsQkMsTUFBTU4sTUFBTU0sSUFBSTtvQkFDaEJDLE1BQU1QLE1BQU1PLElBQUk7b0JBQ2hCQyxRQUFRUixNQUFNUSxNQUFNO29CQUNwQkMsTUFBTVQsTUFBTVUsWUFBWTttQkFSbkJWLE1BQU1DLEVBQUU7Ozs7Ozs7OztzQ0FjbkIsOERBQUNVO3NCQUFFOzs7Ozs7Ozs7OztBQUlYO0dBakNNbEI7S0FBQUE7QUFtQ04sK0RBQWVBLGVBQWVBLEVBQUMsQ0FHL0IsNkJBQTZCO0NBQzdCLHFEQUFxRDtDQUNyRCx1Q0FBdUM7Q0FDdkMsMkRBQTJEO0NBQzNELGlEQUFpRDtDQUNqRCxtREFBbUQ7Q0FFbkQsNENBQTRDO0NBRTVDLG9DQUFvQztDQUVwQyx5QkFBeUI7Q0FFekIsa0NBQWtDO0NBQ2xDLGVBQWU7Q0FDZixpQ0FBaUM7Q0FDakMsUUFBUTtDQUNSLE1BQU07Q0FFTixhQUFhO0NBQ2IsNEVBQTRFO0NBQzVFLHdDQUF3QztDQUV4Qyx3QkFBd0I7Q0FDeEIsMkJBQTJCO0NBQzNCLDBCQUEwQjtDQUMxQixnQ0FBZ0M7Q0FDaEMsaURBQWlEO0NBQ2pELGdDQUFnQztDQUNoQyw4QkFBOEI7Q0FDOUIsOEJBQThCO0NBQzlCLGtDQUFrQztDQUNsQyxzQ0FBc0M7Q0FDdEMsYUFBYTtDQUViLFlBQVk7Q0FDWixhQUFhO0NBQ2IsT0FBTztDQUNQLEtBQUs7Q0FFTCxrQ0FBa0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ29udGVudFBsYXlsaXN0L0NvbnRlbnRQbGF5bGlzdC50c3g/M2NmYyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb250ZW50UGxheWxpc3QudHN4XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcblxuLy8gaW1wb3J0IHsgVHJhY2tzQ29udGV4dCwgVHJhY2sgfSBmcm9tIFwiLi4vY29udGV4dHMvdHJhY2tzLWNvbnRleHRcIjtcbmltcG9ydCB7IFRyYWNrc0NvbnRleHQgfSBmcm9tIFwiQC9jb250ZXh0cy90cmFja3MtY29udGV4dFwiO1xuaW1wb3J0IHsgVHJhY2sgfSBmcm9tIFwiQC9pbnRlcmZhY2VzL2ludGVyZmFjZXNcIjtcbmltcG9ydCB7IFBsYXlMaXN0SXRlbSB9IGZyb20gXCJAY29tcG9uZW50cy9QbGF5TGlzdEl0ZW1cIjtcblxuY29uc3QgQ29udGVudFBsYXlsaXN0OiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgLy8gQ29uc3VtZSB0cmFja3MgZGF0YSBmcm9tIGNvbnRleHRcbiAgXG4gIGNvbnN0IHsgdHJhY2tzIH0gPSB1c2VDb250ZXh0KFRyYWNrc0NvbnRleHQpO1xuICBjb25zb2xlLmxvZyh0cmFja3MpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgPlxuICAgICAge3RyYWNrcyA/IChcbiAgICAgICAgPHVsPlxuICAgICAgICAgIHsvKiB7dHJhY2tzLm1hcCgodHJhY2s6IFRyYWNrKSA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXt0cmFjay5pZH0+e3RyYWNrLm5hbWV9PC9saT5cbiAgICAgICAgICApKX0gKi99XG4gICAgICAgICAge3RyYWNrcy5tYXAoKHRyYWNrOiBUcmFjaykgPT4gKFxuXG4gICAgICAgICAgICA8UGxheUxpc3RJdGVtXG4gICAgICAgICAgICAgIGtleT17dHJhY2suaWR9XG4gICAgICAgICAgICAgIGlkPXt0cmFjay5pZH1cbiAgICAgICAgICAgICAgYWxidW09e3RyYWNrLmFsYnVtfVxuICAgICAgICAgICAgICBkdXJhdGlvbj17dHJhY2suZHVyYXRpb25faW5fc2Vjb25kc31cbiAgICAgICAgICAgICAgZ2VucmU9e3RyYWNrLmdlbnJlfVxuICAgICAgICAgICAgICBsb2dvPXt0cmFjay5sb2dvfVxuICAgICAgICAgICAgICBuYW1lPXt0cmFjay5uYW1lfVxuICAgICAgICAgICAgICBhdXRob3I9e3RyYWNrLmF1dGhvcn1cbiAgICAgICAgICAgICAgZGF0ZT17dHJhY2sucmVsZWFzZV9kYXRlfVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgKSA6IChcbiAgICAgICAgPHA+TG9hZGluZyB0cmFja3MuLi48L3A+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGVudFBsYXlsaXN0O1xuXG5cbi8vIGltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBzdHlsZXMgZnJvbSBcIi4vQ29udGVudFBsYXlsaXN0Lm1vZHVsZS5jc3NcIjtcbi8vIGltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG4vLyBpbXBvcnQgeyBQbGF5TGlzdEl0ZW0gfSBmcm9tIFwiQGNvbXBvbmVudHMvUGxheUxpc3RJdGVtXCI7XG4vLyBpbXBvcnQgeyB1c2VUcmFja3MgfSBmcm9tIFwiQC9ob29rcy91c2VUcmFja3NcIjtcbi8vIGltcG9ydCB7IFRyYWNrIH0gZnJvbSBcIkAvaW50ZXJmYWNlcy9pbnRlcmZhY2VzXCI7XG5cbi8vIGNvbnN0IENvbnRlbnRQbGF5bGlzdDogUmVhY3QuRkMgPSAoKSA9PiB7XG5cbi8vICAgY29uc3QgeyB0cmFja3MgfSA9IHVzZVRyYWNrcygpO1xuXG4vLyAgIGNvbnNvbGUubG9nKHRyYWNrcyk7XG5cbi8vICAgaWYgKCFBcnJheS5pc0FycmF5KHRyYWNrcykpIHtcbi8vICAgICByZXR1cm4gKFxuLy8gICAgICAgPHA+TG9hZGluZyB0cmFja3MuLi48L3A+XG4vLyAgICAgKVxuLy8gICB9XG5cbi8vICAgcmV0dXJuIChcbi8vICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMuY29udGVudFBsYXlsaXN0LCBzdHlsZXMucGxheWxpc3QpfT5cbi8vICAgICAgIHt0cmFja3MubWFwKCh0cmFjazogVHJhY2spID0+IChcblxuLy8gICAgICAgICA8UGxheUxpc3RJdGVtXG4vLyAgICAgICAgICAga2V5PXt0cmFjay5pZH1cbi8vICAgICAgICAgICBpZD17dHJhY2suaWR9XG4vLyAgICAgICAgICAgYWxidW09e3RyYWNrLmFsYnVtfVxuLy8gICAgICAgICAgIGR1cmF0aW9uPXt0cmFjay5kdXJhdGlvbl9pbl9zZWNvbmRzfVxuLy8gICAgICAgICAgIGdlbnJlPXt0cmFjay5nZW5yZX1cbi8vICAgICAgICAgICBsb2dvPXt0cmFjay5sb2dvfVxuLy8gICAgICAgICAgIG5hbWU9e3RyYWNrLm5hbWV9XG4vLyAgICAgICAgICAgYXV0aG9yPXt0cmFjay5hdXRob3J9XG4vLyAgICAgICAgICAgZGF0ZT17dHJhY2sucmVsZWFzZV9kYXRlfVxuLy8gICAgICAgICAvPlxuXG4vLyAgICAgICApKX1cbi8vICAgICA8L2Rpdj5cbi8vICAgKTtcbi8vIH07XG5cbi8vIGV4cG9ydCBkZWZhdWx0IENvbnRlbnRQbGF5bGlzdDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJUcmFja3NDb250ZXh0IiwiUGxheUxpc3RJdGVtIiwiQ29udGVudFBsYXlsaXN0IiwidHJhY2tzIiwiY29uc29sZSIsImxvZyIsImRpdiIsInVsIiwibWFwIiwidHJhY2siLCJpZCIsImFsYnVtIiwiZHVyYXRpb24iLCJkdXJhdGlvbl9pbl9zZWNvbmRzIiwiZ2VucmUiLCJsb2dvIiwibmFtZSIsImF1dGhvciIsImRhdGUiLCJyZWxlYXNlX2RhdGUiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ContentPlaylist/ContentPlaylist.tsx\n"));

/***/ })

});