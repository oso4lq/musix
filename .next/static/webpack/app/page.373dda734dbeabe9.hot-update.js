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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_tracks_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/contexts/tracks-context */ \"(app-pages-browser)/./src/contexts/tracks-context.tsx\");\n/* harmony import */ var _components_PlayListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/PlayListItem */ \"(app-pages-browser)/./src/components/PlayListItem/index.tsx\");\n// ContentPlaylist.tsx\n\nvar _s = $RefreshSig$();\n\n// import { TracksContext, Track } from \"../contexts/tracks-context\";\n\n\nconst ContentPlaylist = ()=>{\n    _s();\n    // Consume tracks data from context\n    const { tracks } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_tracks_context__WEBPACK_IMPORTED_MODULE_2__.TracksContext);\n    console.log(tracks);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classNames(styles.contentPlaylist, styles.playlist),\n        children: tracks ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            children: tracks.map((track)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PlayListItem__WEBPACK_IMPORTED_MODULE_3__.PlayListItem, {\n                    id: track.id,\n                    album: track.album,\n                    duration: track.duration_in_seconds,\n                    genre: track.genre,\n                    logo: track.logo,\n                    name: track.name,\n                    author: track.author,\n                    date: track.release_date\n                }, track.id, false, {\n                    fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\ContentPlaylist\\\\ContentPlaylist.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 13\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\ContentPlaylist\\\\ContentPlaylist.tsx\",\n            lineNumber: 16,\n            columnNumber: 9\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading tracks...\"\n        }, void 0, false, {\n            fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\ContentPlaylist\\\\ContentPlaylist.tsx\",\n            lineNumber: 37,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\ContentPlaylist\\\\ContentPlaylist.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ContentPlaylist, \"Jo8tT0PQCPGRw3b6SMK3fyI0PTI=\");\n_c = ContentPlaylist;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContentPlaylist); // import React from \"react\";\n // import styles from \"./ContentPlaylist.module.css\";\n // import classNames from \"classnames\";\n // import { PlayListItem } from \"@components/PlayListItem\";\n // import { useTracks } from \"@/hooks/useTracks\";\n // import { Track } from \"@/interfaces/interfaces\";\n // const ContentPlaylist: React.FC = () => {\n //   const { tracks } = useTracks();\n //   console.log(tracks);\n //   if (!Array.isArray(tracks)) {\n //     return (\n //       <p>Loading tracks...</p>\n //     )\n //   }\n //   return (\n //     <div className={classNames(styles.contentPlaylist, styles.playlist)}>\n //       {tracks.map((track: Track) => (\n //         <PlayListItem\n //           key={track.id}\n //           id={track.id}\n //           album={track.album}\n //           duration={track.duration_in_seconds}\n //           genre={track.genre}\n //           logo={track.logo}\n //           name={track.name}\n //           author={track.author}\n //           date={track.release_date}\n //         />\n //       ))}\n //     </div>\n //   );\n // };\n // export default ContentPlaylist;\nvar _c;\n$RefreshReg$(_c, \"ContentPlaylist\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0NvbnRlbnRQbGF5bGlzdC9Db250ZW50UGxheWxpc3QudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHNCQUFzQjs7O0FBQ29CO0FBQzFDLHFFQUFxRTtBQUNYO0FBRUY7QUFFeEQsTUFBTUksa0JBQTRCOztJQUNoQyxtQ0FBbUM7SUFFbkMsTUFBTSxFQUFFQyxNQUFNLEVBQUUsR0FBR0osaURBQVVBLENBQUNDLG1FQUFhQTtJQUMzQ0ksUUFBUUMsR0FBRyxDQUFDRjtJQUNaLHFCQUNFLDhEQUFDRztRQUFJQyxXQUFXQyxXQUFXQyxPQUFPQyxlQUFlLEVBQUVELE9BQU9FLFFBQVE7a0JBQy9EUix1QkFDQyw4REFBQ1M7c0JBSUVULE9BQU9VLEdBQUcsQ0FBQyxDQUFDQyxzQkFFWCw4REFBQ2Isa0VBQVlBO29CQUVYYyxJQUFJRCxNQUFNQyxFQUFFO29CQUNaQyxPQUFPRixNQUFNRSxLQUFLO29CQUNsQkMsVUFBVUgsTUFBTUksbUJBQW1CO29CQUNuQ0MsT0FBT0wsTUFBTUssS0FBSztvQkFDbEJDLE1BQU1OLE1BQU1NLElBQUk7b0JBQ2hCQyxNQUFNUCxNQUFNTyxJQUFJO29CQUNoQkMsUUFBUVIsTUFBTVEsTUFBTTtvQkFDcEJDLE1BQU1ULE1BQU1VLFlBQVk7bUJBUm5CVixNQUFNQyxFQUFFOzs7Ozs7Ozs7c0NBY25CLDhEQUFDVTtzQkFBRTs7Ozs7Ozs7Ozs7QUFJWDtHQWpDTXZCO0tBQUFBO0FBbUNOLCtEQUFlQSxlQUFlQSxFQUFDLENBRy9CLDZCQUE2QjtDQUM3QixxREFBcUQ7Q0FDckQsdUNBQXVDO0NBQ3ZDLDJEQUEyRDtDQUMzRCxpREFBaUQ7Q0FDakQsbURBQW1EO0NBRW5ELDRDQUE0QztDQUU1QyxvQ0FBb0M7Q0FFcEMseUJBQXlCO0NBRXpCLGtDQUFrQztDQUNsQyxlQUFlO0NBQ2YsaUNBQWlDO0NBQ2pDLFFBQVE7Q0FDUixNQUFNO0NBRU4sYUFBYTtDQUNiLDRFQUE0RTtDQUM1RSx3Q0FBd0M7Q0FFeEMsd0JBQXdCO0NBQ3hCLDJCQUEyQjtDQUMzQiwwQkFBMEI7Q0FDMUIsZ0NBQWdDO0NBQ2hDLGlEQUFpRDtDQUNqRCxnQ0FBZ0M7Q0FDaEMsOEJBQThCO0NBQzlCLDhCQUE4QjtDQUM5QixrQ0FBa0M7Q0FDbEMsc0NBQXNDO0NBQ3RDLGFBQWE7Q0FFYixZQUFZO0NBQ1osYUFBYTtDQUNiLE9BQU87Q0FDUCxLQUFLO0NBRUwsa0NBQWtDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NvbnRlbnRQbGF5bGlzdC9Db250ZW50UGxheWxpc3QudHN4PzNjZmMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29udGVudFBsYXlsaXN0LnRzeFxuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCB7IFRyYWNrc0NvbnRleHQsIFRyYWNrIH0gZnJvbSBcIi4uL2NvbnRleHRzL3RyYWNrcy1jb250ZXh0XCI7XG5pbXBvcnQgeyBUcmFja3NDb250ZXh0IH0gZnJvbSBcIkAvY29udGV4dHMvdHJhY2tzLWNvbnRleHRcIjtcbmltcG9ydCB7IFRyYWNrIH0gZnJvbSBcIkAvaW50ZXJmYWNlcy9pbnRlcmZhY2VzXCI7XG5pbXBvcnQgeyBQbGF5TGlzdEl0ZW0gfSBmcm9tIFwiQGNvbXBvbmVudHMvUGxheUxpc3RJdGVtXCI7XG5cbmNvbnN0IENvbnRlbnRQbGF5bGlzdDogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIC8vIENvbnN1bWUgdHJhY2tzIGRhdGEgZnJvbSBjb250ZXh0XG4gIFxuICBjb25zdCB7IHRyYWNrcyB9ID0gdXNlQ29udGV4dChUcmFja3NDb250ZXh0KTtcbiAgY29uc29sZS5sb2codHJhY2tzKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMuY29udGVudFBsYXlsaXN0LCBzdHlsZXMucGxheWxpc3QpfT5cbiAgICAgIHt0cmFja3MgPyAoXG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7Lyoge3RyYWNrcy5tYXAoKHRyYWNrOiBUcmFjaykgPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17dHJhY2suaWR9Pnt0cmFjay5uYW1lfTwvbGk+XG4gICAgICAgICAgKSl9ICovfVxuICAgICAgICAgIHt0cmFja3MubWFwKCh0cmFjazogVHJhY2spID0+IChcblxuICAgICAgICAgICAgPFBsYXlMaXN0SXRlbVxuICAgICAgICAgICAgICBrZXk9e3RyYWNrLmlkfVxuICAgICAgICAgICAgICBpZD17dHJhY2suaWR9XG4gICAgICAgICAgICAgIGFsYnVtPXt0cmFjay5hbGJ1bX1cbiAgICAgICAgICAgICAgZHVyYXRpb249e3RyYWNrLmR1cmF0aW9uX2luX3NlY29uZHN9XG4gICAgICAgICAgICAgIGdlbnJlPXt0cmFjay5nZW5yZX1cbiAgICAgICAgICAgICAgbG9nbz17dHJhY2subG9nb31cbiAgICAgICAgICAgICAgbmFtZT17dHJhY2submFtZX1cbiAgICAgICAgICAgICAgYXV0aG9yPXt0cmFjay5hdXRob3J9XG4gICAgICAgICAgICAgIGRhdGU9e3RyYWNrLnJlbGVhc2VfZGF0ZX1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgICkgOiAoXG4gICAgICAgIDxwPkxvYWRpbmcgdHJhY2tzLi4uPC9wPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRQbGF5bGlzdDtcblxuXG4vLyBpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgc3R5bGVzIGZyb20gXCIuL0NvbnRlbnRQbGF5bGlzdC5tb2R1bGUuY3NzXCI7XG4vLyBpbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuLy8gaW1wb3J0IHsgUGxheUxpc3RJdGVtIH0gZnJvbSBcIkBjb21wb25lbnRzL1BsYXlMaXN0SXRlbVwiO1xuLy8gaW1wb3J0IHsgdXNlVHJhY2tzIH0gZnJvbSBcIkAvaG9va3MvdXNlVHJhY2tzXCI7XG4vLyBpbXBvcnQgeyBUcmFjayB9IGZyb20gXCJAL2ludGVyZmFjZXMvaW50ZXJmYWNlc1wiO1xuXG4vLyBjb25zdCBDb250ZW50UGxheWxpc3Q6IFJlYWN0LkZDID0gKCkgPT4ge1xuXG4vLyAgIGNvbnN0IHsgdHJhY2tzIH0gPSB1c2VUcmFja3MoKTtcblxuLy8gICBjb25zb2xlLmxvZyh0cmFja3MpO1xuXG4vLyAgIGlmICghQXJyYXkuaXNBcnJheSh0cmFja3MpKSB7XG4vLyAgICAgcmV0dXJuIChcbi8vICAgICAgIDxwPkxvYWRpbmcgdHJhY2tzLi4uPC9wPlxuLy8gICAgIClcbi8vICAgfVxuXG4vLyAgIHJldHVybiAoXG4vLyAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLmNvbnRlbnRQbGF5bGlzdCwgc3R5bGVzLnBsYXlsaXN0KX0+XG4vLyAgICAgICB7dHJhY2tzLm1hcCgodHJhY2s6IFRyYWNrKSA9PiAoXG5cbi8vICAgICAgICAgPFBsYXlMaXN0SXRlbVxuLy8gICAgICAgICAgIGtleT17dHJhY2suaWR9XG4vLyAgICAgICAgICAgaWQ9e3RyYWNrLmlkfVxuLy8gICAgICAgICAgIGFsYnVtPXt0cmFjay5hbGJ1bX1cbi8vICAgICAgICAgICBkdXJhdGlvbj17dHJhY2suZHVyYXRpb25faW5fc2Vjb25kc31cbi8vICAgICAgICAgICBnZW5yZT17dHJhY2suZ2VucmV9XG4vLyAgICAgICAgICAgbG9nbz17dHJhY2subG9nb31cbi8vICAgICAgICAgICBuYW1lPXt0cmFjay5uYW1lfVxuLy8gICAgICAgICAgIGF1dGhvcj17dHJhY2suYXV0aG9yfVxuLy8gICAgICAgICAgIGRhdGU9e3RyYWNrLnJlbGVhc2VfZGF0ZX1cbi8vICAgICAgICAgLz5cblxuLy8gICAgICAgKSl9XG4vLyAgICAgPC9kaXY+XG4vLyAgICk7XG4vLyB9O1xuXG4vLyBleHBvcnQgZGVmYXVsdCBDb250ZW50UGxheWxpc3Q7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDb250ZXh0IiwiVHJhY2tzQ29udGV4dCIsIlBsYXlMaXN0SXRlbSIsIkNvbnRlbnRQbGF5bGlzdCIsInRyYWNrcyIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJjbGFzc05hbWVzIiwic3R5bGVzIiwiY29udGVudFBsYXlsaXN0IiwicGxheWxpc3QiLCJ1bCIsIm1hcCIsInRyYWNrIiwiaWQiLCJhbGJ1bSIsImR1cmF0aW9uIiwiZHVyYXRpb25faW5fc2Vjb25kcyIsImdlbnJlIiwibG9nbyIsIm5hbWUiLCJhdXRob3IiLCJkYXRlIiwicmVsZWFzZV9kYXRlIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ContentPlaylist/ContentPlaylist.tsx\n"));

/***/ })

});