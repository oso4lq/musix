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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_tracks_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/contexts/tracks-context */ \"(app-pages-browser)/./src/contexts/tracks-context.tsx\");\n/* harmony import */ var _components_PlayListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/PlayListItem */ \"(app-pages-browser)/./src/components/PlayListItem/index.tsx\");\n// ContentPlaylist.tsx\n\nvar _s = $RefreshSig$();\n\n// import { TracksContext, Track } from \"../contexts/tracks-context\";\n\n\nconst ContentPlaylist = ()=>{\n    _s();\n    // Consume tracks data from context\n    const { tracks } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_tracks_context__WEBPACK_IMPORTED_MODULE_2__.TracksContext);\n    console.log(tracks);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classNames(styles.contentPlaylist, styles.playlist),\n        children: tracks ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            children: tracks.map((track)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PlayListItem__WEBPACK_IMPORTED_MODULE_3__.PlayListItem, {\n                    id: track.id,\n                    album: track.album,\n                    duration: track.duration_in_seconds,\n                    genre: track.genre,\n                    logo: track.logo,\n                    name: track.name,\n                    author: track.author,\n                    date: track.release_date\n                }, track.id, false, {\n                    fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\ContentPlaylist\\\\ContentPlaylist.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 13\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\ContentPlaylist\\\\ContentPlaylist.tsx\",\n            lineNumber: 16,\n            columnNumber: 9\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading tracks...\"\n        }, void 0, false, {\n            fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\ContentPlaylist\\\\ContentPlaylist.tsx\",\n            lineNumber: 37,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\ContentPlaylist\\\\ContentPlaylist.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ContentPlaylist, \"Jo8tT0PQCPGRw3b6SMK3fyI0PTI=\");\n_c = ContentPlaylist;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContentPlaylist); // import React from \"react\";\n // import styles from \"./ContentPlaylist.module.css\";\n // import classNames from \"classnames\";\n // import { PlayListItem } from \"@components/PlayListItem\";\n // import { useTracks } from \"@/hooks/useTracks\";\n // import { Track } from \"@/interfaces/interfaces\";\n // const ContentPlaylist: React.FC = () => {\n //   const { tracks } = useTracks();\n //   console.log(tracks);\n //   if (!Array.isArray(tracks)) {\n //     return (\n //       <p>Loading tracks...</p>\n //     )\n //   }\n //   return (\n //     <div className={classNames(styles.contentPlaylist, styles.playlist)}>\n //       {tracks.map((track: Track) => (\n //         <PlayListItem\n //           key={track.id}\n //           id={track.id}\n //           album={track.album}\n //           duration={track.duration_in_seconds}\n //           genre={track.genre}\n //           logo={track.logo}\n //           name={track.name}\n //           author={track.author}\n //           date={track.release_date}\n //         />\n //       ))}\n //     </div>\n //   );\n // };\n // export default ContentPlaylist;\nvar _c;\n$RefreshReg$(_c, \"ContentPlaylist\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0NvbnRlbnRQbGF5bGlzdC9Db250ZW50UGxheWxpc3QudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHNCQUFzQjs7O0FBQ29CO0FBQzFDLHFFQUFxRTtBQUNYO0FBRUY7QUFFeEQsTUFBTUksa0JBQTRCOztJQUNoQyxtQ0FBbUM7SUFFbkMsTUFBTSxFQUFFQyxNQUFNLEVBQUUsR0FBR0osaURBQVVBLENBQUNDLG1FQUFhQTtJQUMzQ0ksUUFBUUMsR0FBRyxDQUFDRjtJQUNaLHFCQUNFLDhEQUFDRztRQUFJQyxXQUFXQyxXQUFXQyxPQUFPQyxlQUFlLEVBQUVELE9BQU9FLFFBQVE7a0JBQy9EUix1QkFDQyw4REFBQ1M7c0JBSUVULE9BQU9VLEdBQUcsQ0FBQyxDQUFDQyxzQkFFWCw4REFBQ2Isa0VBQVlBO29CQUVYYyxJQUFJRCxNQUFNQyxFQUFFO29CQUNaQyxPQUFPRixNQUFNRSxLQUFLO29CQUNsQkMsVUFBVUgsTUFBTUksbUJBQW1CO29CQUNuQ0MsT0FBT0wsTUFBTUssS0FBSztvQkFDbEJDLE1BQU1OLE1BQU1NLElBQUk7b0JBQ2hCQyxNQUFNUCxNQUFNTyxJQUFJO29CQUNoQkMsUUFBUVIsTUFBTVEsTUFBTTtvQkFDcEJDLE1BQU1ULE1BQU1VLFlBQVk7bUJBUm5CVixNQUFNQyxFQUFFOzs7Ozs7Ozs7c0NBY25CLDhEQUFDVTtzQkFBRTs7Ozs7Ozs7Ozs7QUFJWDtHQWpDTXZCO0tBQUFBO0FBbUNOLCtEQUFlQSxlQUFlQSxFQUFDLENBRy9CLDZCQUE2QjtDQUM3QixxREFBcUQ7Q0FDckQsdUNBQXVDO0NBQ3ZDLDJEQUEyRDtDQUMzRCxpREFBaUQ7Q0FDakQsbURBQW1EO0NBRW5ELDRDQUE0QztDQUU1QyxvQ0FBb0M7Q0FFcEMseUJBQXlCO0NBRXpCLGtDQUFrQztDQUNsQyxlQUFlO0NBQ2YsaUNBQWlDO0NBQ2pDLFFBQVE7Q0FDUixNQUFNO0NBRU4sYUFBYTtDQUNiLDRFQUE0RTtDQUM1RSx3Q0FBd0M7Q0FFeEMsd0JBQXdCO0NBQ3hCLDJCQUEyQjtDQUMzQiwwQkFBMEI7Q0FDMUIsZ0NBQWdDO0NBQ2hDLGlEQUFpRDtDQUNqRCxnQ0FBZ0M7Q0FDaEMsOEJBQThCO0NBQzlCLDhCQUE4QjtDQUM5QixrQ0FBa0M7Q0FDbEMsc0NBQXNDO0NBQ3RDLGFBQWE7Q0FFYixZQUFZO0NBQ1osYUFBYTtDQUNiLE9BQU87Q0FDUCxLQUFLO0NBRUwsa0NBQWtDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NvbnRlbnRQbGF5bGlzdC9Db250ZW50UGxheWxpc3QudHN4PzNjZmMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29udGVudFBsYXlsaXN0LnRzeFxuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCB7IFRyYWNrc0NvbnRleHQsIFRyYWNrIH0gZnJvbSBcIi4uL2NvbnRleHRzL3RyYWNrcy1jb250ZXh0XCI7XG5pbXBvcnQgeyBUcmFja3NDb250ZXh0IH0gZnJvbSBcIkAvY29udGV4dHMvdHJhY2tzLWNvbnRleHRcIjtcbmltcG9ydCB7IFRyYWNrIH0gZnJvbSBcIkAvaW50ZXJmYWNlcy9pbnRlcmZhY2VzXCI7XG5pbXBvcnQgeyBQbGF5TGlzdEl0ZW0gfSBmcm9tIFwiQGNvbXBvbmVudHMvUGxheUxpc3RJdGVtXCI7XG5cbmNvbnN0IENvbnRlbnRQbGF5bGlzdDogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIC8vIENvbnN1bWUgdHJhY2tzIGRhdGEgZnJvbSBjb250ZXh0XG5cbiAgY29uc3QgeyB0cmFja3MgfSA9IHVzZUNvbnRleHQoVHJhY2tzQ29udGV4dCk7XG4gIGNvbnNvbGUubG9nKHRyYWNrcyk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLmNvbnRlbnRQbGF5bGlzdCwgc3R5bGVzLnBsYXlsaXN0KX0+XG4gICAgICB7dHJhY2tzID8gKFxuICAgICAgICA8dWw+XG4gICAgICAgICAgey8qIHt0cmFja3MubWFwKCh0cmFjazogVHJhY2spID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e3RyYWNrLmlkfT57dHJhY2submFtZX08L2xpPlxuICAgICAgICAgICkpfSAqL31cbiAgICAgICAgICB7dHJhY2tzLm1hcCgodHJhY2s6IFRyYWNrKSA9PiAoXG5cbiAgICAgICAgICAgIDxQbGF5TGlzdEl0ZW1cbiAgICAgICAgICAgICAga2V5PXt0cmFjay5pZH1cbiAgICAgICAgICAgICAgaWQ9e3RyYWNrLmlkfVxuICAgICAgICAgICAgICBhbGJ1bT17dHJhY2suYWxidW19XG4gICAgICAgICAgICAgIGR1cmF0aW9uPXt0cmFjay5kdXJhdGlvbl9pbl9zZWNvbmRzfVxuICAgICAgICAgICAgICBnZW5yZT17dHJhY2suZ2VucmV9XG4gICAgICAgICAgICAgIGxvZ289e3RyYWNrLmxvZ299XG4gICAgICAgICAgICAgIG5hbWU9e3RyYWNrLm5hbWV9XG4gICAgICAgICAgICAgIGF1dGhvcj17dHJhY2suYXV0aG9yfVxuICAgICAgICAgICAgICBkYXRlPXt0cmFjay5yZWxlYXNlX2RhdGV9XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICApIDogKFxuICAgICAgICA8cD5Mb2FkaW5nIHRyYWNrcy4uLjwvcD5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50UGxheWxpc3Q7XG5cblxuLy8gaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9Db250ZW50UGxheWxpc3QubW9kdWxlLmNzc1wiO1xuLy8gaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbi8vIGltcG9ydCB7IFBsYXlMaXN0SXRlbSB9IGZyb20gXCJAY29tcG9uZW50cy9QbGF5TGlzdEl0ZW1cIjtcbi8vIGltcG9ydCB7IHVzZVRyYWNrcyB9IGZyb20gXCJAL2hvb2tzL3VzZVRyYWNrc1wiO1xuLy8gaW1wb3J0IHsgVHJhY2sgfSBmcm9tIFwiQC9pbnRlcmZhY2VzL2ludGVyZmFjZXNcIjtcblxuLy8gY29uc3QgQ29udGVudFBsYXlsaXN0OiBSZWFjdC5GQyA9ICgpID0+IHtcblxuLy8gICBjb25zdCB7IHRyYWNrcyB9ID0gdXNlVHJhY2tzKCk7XG5cbi8vICAgY29uc29sZS5sb2codHJhY2tzKTtcblxuLy8gICBpZiAoIUFycmF5LmlzQXJyYXkodHJhY2tzKSkge1xuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICA8cD5Mb2FkaW5nIHRyYWNrcy4uLjwvcD5cbi8vICAgICApXG4vLyAgIH1cblxuLy8gICByZXR1cm4gKFxuLy8gICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5jb250ZW50UGxheWxpc3QsIHN0eWxlcy5wbGF5bGlzdCl9PlxuLy8gICAgICAge3RyYWNrcy5tYXAoKHRyYWNrOiBUcmFjaykgPT4gKFxuXG4vLyAgICAgICAgIDxQbGF5TGlzdEl0ZW1cbi8vICAgICAgICAgICBrZXk9e3RyYWNrLmlkfVxuLy8gICAgICAgICAgIGlkPXt0cmFjay5pZH1cbi8vICAgICAgICAgICBhbGJ1bT17dHJhY2suYWxidW19XG4vLyAgICAgICAgICAgZHVyYXRpb249e3RyYWNrLmR1cmF0aW9uX2luX3NlY29uZHN9XG4vLyAgICAgICAgICAgZ2VucmU9e3RyYWNrLmdlbnJlfVxuLy8gICAgICAgICAgIGxvZ289e3RyYWNrLmxvZ299XG4vLyAgICAgICAgICAgbmFtZT17dHJhY2submFtZX1cbi8vICAgICAgICAgICBhdXRob3I9e3RyYWNrLmF1dGhvcn1cbi8vICAgICAgICAgICBkYXRlPXt0cmFjay5yZWxlYXNlX2RhdGV9XG4vLyAgICAgICAgIC8+XG5cbi8vICAgICAgICkpfVxuLy8gICAgIDwvZGl2PlxuLy8gICApO1xuLy8gfTtcblxuLy8gZXhwb3J0IGRlZmF1bHQgQ29udGVudFBsYXlsaXN0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ29udGV4dCIsIlRyYWNrc0NvbnRleHQiLCJQbGF5TGlzdEl0ZW0iLCJDb250ZW50UGxheWxpc3QiLCJ0cmFja3MiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiY2xhc3NOYW1lcyIsInN0eWxlcyIsImNvbnRlbnRQbGF5bGlzdCIsInBsYXlsaXN0IiwidWwiLCJtYXAiLCJ0cmFjayIsImlkIiwiYWxidW0iLCJkdXJhdGlvbiIsImR1cmF0aW9uX2luX3NlY29uZHMiLCJnZW5yZSIsImxvZ28iLCJuYW1lIiwiYXV0aG9yIiwiZGF0ZSIsInJlbGVhc2VfZGF0ZSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ContentPlaylist/ContentPlaylist.tsx\n"));

/***/ })

});