/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/SearchBar/SearchBar.tsx":
/*!************************************************!*\
  !*** ./src/components/SearchBar/SearchBar.tsx ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// import classNames from 'classnames';\n// import styles from \"./SearchBar.module.css\";\n// import React, { useState, useEffect } from 'react';\n// import Fuse from 'fuse.js';\n// import { useAppDispatch, useAppSelector } from '@/hooks';\n// import { trackType } from '@/types/types';\n// import { setSearchPlayList } from '@/store/features/tracksSlice';\n// const SearchBar = () => {\n//     const defaultPlayList = useAppSelector((state) => state.tracks.playList); // Move inside the component\n//     const searchPlaylist = useAppSelector((state) => state.tracks.searchPlaylist);\n//     const [fuse, setFuse] = useState<Fuse<trackType> | null>(null);\n//     const [searchResults, setSearchResults] = useState<trackType[]>([]);\n//     const [showSuggestions, setShowSuggestions] = useState(false);\n//     const dispatcher = useAppDispatch();\n//     // initialize Fuse when trackList changes\n//     useEffect(() => {\n//         if (defaultPlayList.length > 0) {\n//             const options = {\n//                 keys: ['name'],\n//                 includeScore: true,\n//                 threshold: 0.3,\n//             };\n//             // const fuseInstance = new Fuse(playList, options);\n//             const fuseInstance = new Fuse(defaultPlayList, options); // Use defaultPlayList\n//             setFuse(fuseInstance);\n//         }\n//         // }, [playList]);\n//     }, [defaultPlayList]);\n//     // start the search\n//     const handleSearch = (query: string) => {\n//         if (!fuse) return [];\n//         if (query === '') {\n//             setSearchResults(defaultPlayList);\n//             setShowSuggestions(false);\n//             return;\n//         }\n//         const result = fuse.search(query);\n//         setSearchResults(result.map((item) => item.item));\n//         setShowSuggestions(true);\n//         // save the search result to the storage\n//         console.log(result.map((item) => item.item));\n//         dispatcher(setSearchPlayList(result.map((item) => item.item)));\n//     };\n//     // exit the searchbar on clicking out\n//     const handleBlur = () => {\n//         setShowSuggestions(false);\n//     };\n//     return (\n//         <div>\n//             <div className={classNames(styles.centerBlockSearch, styles.search)}>\n//                 <svg className={styles.searchSvg}>\n//                     <use href=\"/img/icon/sprite.svg#icon-search\"></use>\n//                 </svg>\n//                 <input\n//                     className={styles.searchText}\n//                     type=\"text\"\n//                     placeholder=\"Search\"\n//                     onChange={(e) => handleSearch(e.target.value)}\n//                     onBlur={handleBlur}\n//                 />\n//                 {showSuggestions && (\n//                     <div className={styles.searchBy}>\n//                         {searchResults.length > 0 ? (\n//                             <ul>\n//                                 {searchResults.map((track) => (\n//                                     <li\n//                                         key={track.id}\n//                                         className={styles.searchByP}\n//                                     >\n//                                         {track.name}\n//                                     </li>\n//                                 ))}\n//                             </ul>\n//                         ) : (\n//                             <p className={styles.searchByP}>No tracks found</p>\n//                         )}\n//                     </div>\n//                 )}\n//             </div>\n//         </div>\n//     );\n// };\n// export default SearchBar;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1NlYXJjaEJhci9TZWFyY2hCYXIudHN4IiwibWFwcGluZ3MiOiJBQUFBLHVDQUF1QztBQUN2QywrQ0FBK0M7QUFDL0Msc0RBQXNEO0FBQ3RELDhCQUE4QjtBQUM5Qiw0REFBNEQ7QUFDNUQsNkNBQTZDO0FBQzdDLG9FQUFvRTtBQUVwRSw0QkFBNEI7QUFDNUIsNkdBQTZHO0FBQzdHLHFGQUFxRjtBQUNyRixzRUFBc0U7QUFDdEUsMkVBQTJFO0FBQzNFLHFFQUFxRTtBQUVyRSwyQ0FBMkM7QUFFM0MsZ0RBQWdEO0FBQ2hELHdCQUF3QjtBQUN4Qiw0Q0FBNEM7QUFDNUMsZ0NBQWdDO0FBQ2hDLGtDQUFrQztBQUNsQyxzQ0FBc0M7QUFDdEMsa0NBQWtDO0FBQ2xDLGlCQUFpQjtBQUNqQixtRUFBbUU7QUFDbkUsOEZBQThGO0FBQzlGLHFDQUFxQztBQUNyQyxZQUFZO0FBQ1osNkJBQTZCO0FBQzdCLDZCQUE2QjtBQUc3QiwwQkFBMEI7QUFDMUIsZ0RBQWdEO0FBQ2hELGdDQUFnQztBQUNoQyw4QkFBOEI7QUFDOUIsaURBQWlEO0FBQ2pELHlDQUF5QztBQUN6QyxzQkFBc0I7QUFDdEIsWUFBWTtBQUNaLDZDQUE2QztBQUM3Qyw2REFBNkQ7QUFDN0Qsb0NBQW9DO0FBRXBDLG1EQUFtRDtBQUNuRCx3REFBd0Q7QUFDeEQsMEVBQTBFO0FBQzFFLFNBQVM7QUFFVCw0Q0FBNEM7QUFDNUMsaUNBQWlDO0FBQ2pDLHFDQUFxQztBQUNyQyxTQUFTO0FBRVQsZUFBZTtBQUNmLGdCQUFnQjtBQUNoQixvRkFBb0Y7QUFDcEYscURBQXFEO0FBQ3JELDBFQUEwRTtBQUMxRSx5QkFBeUI7QUFDekIseUJBQXlCO0FBQ3pCLG9EQUFvRDtBQUNwRCxrQ0FBa0M7QUFDbEMsMkNBQTJDO0FBQzNDLHFFQUFxRTtBQUNyRSwwQ0FBMEM7QUFDMUMscUJBQXFCO0FBQ3JCLHdDQUF3QztBQUN4Qyx3REFBd0Q7QUFDeEQsd0RBQXdEO0FBQ3hELG1DQUFtQztBQUNuQyxrRUFBa0U7QUFDbEUsMENBQTBDO0FBQzFDLHlEQUF5RDtBQUN6RCx1RUFBdUU7QUFDdkUsd0NBQXdDO0FBQ3hDLHVEQUF1RDtBQUN2RCw0Q0FBNEM7QUFDNUMsc0NBQXNDO0FBQ3RDLG9DQUFvQztBQUNwQyxnQ0FBZ0M7QUFDaEMsa0ZBQWtGO0FBQ2xGLDZCQUE2QjtBQUM3Qiw2QkFBNkI7QUFDN0IscUJBQXFCO0FBQ3JCLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakIsU0FBUztBQUNULEtBQUs7QUFFTCw0QkFBNEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2VhcmNoQmFyL1NlYXJjaEJhci50c3g/NzA5YSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuLy8gaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9TZWFyY2hCYXIubW9kdWxlLmNzc1wiO1xyXG4vLyBpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuLy8gaW1wb3J0IEZ1c2UgZnJvbSAnZnVzZS5qcyc7XHJcbi8vIGltcG9ydCB7IHVzZUFwcERpc3BhdGNoLCB1c2VBcHBTZWxlY3RvciB9IGZyb20gJ0AvaG9va3MnO1xyXG4vLyBpbXBvcnQgeyB0cmFja1R5cGUgfSBmcm9tICdAL3R5cGVzL3R5cGVzJztcclxuLy8gaW1wb3J0IHsgc2V0U2VhcmNoUGxheUxpc3QgfSBmcm9tICdAL3N0b3JlL2ZlYXR1cmVzL3RyYWNrc1NsaWNlJztcclxuXHJcbi8vIGNvbnN0IFNlYXJjaEJhciA9ICgpID0+IHtcclxuLy8gICAgIGNvbnN0IGRlZmF1bHRQbGF5TGlzdCA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudHJhY2tzLnBsYXlMaXN0KTsgLy8gTW92ZSBpbnNpZGUgdGhlIGNvbXBvbmVudFxyXG4vLyAgICAgY29uc3Qgc2VhcmNoUGxheWxpc3QgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnRyYWNrcy5zZWFyY2hQbGF5bGlzdCk7XHJcbi8vICAgICBjb25zdCBbZnVzZSwgc2V0RnVzZV0gPSB1c2VTdGF0ZTxGdXNlPHRyYWNrVHlwZT4gfCBudWxsPihudWxsKTtcclxuLy8gICAgIGNvbnN0IFtzZWFyY2hSZXN1bHRzLCBzZXRTZWFyY2hSZXN1bHRzXSA9IHVzZVN0YXRlPHRyYWNrVHlwZVtdPihbXSk7XHJcbi8vICAgICBjb25zdCBbc2hvd1N1Z2dlc3Rpb25zLCBzZXRTaG93U3VnZ2VzdGlvbnNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuLy8gICAgIGNvbnN0IGRpc3BhdGNoZXIgPSB1c2VBcHBEaXNwYXRjaCgpO1xyXG5cclxuLy8gICAgIC8vIGluaXRpYWxpemUgRnVzZSB3aGVuIHRyYWNrTGlzdCBjaGFuZ2VzXHJcbi8vICAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4vLyAgICAgICAgIGlmIChkZWZhdWx0UGxheUxpc3QubGVuZ3RoID4gMCkge1xyXG4vLyAgICAgICAgICAgICBjb25zdCBvcHRpb25zID0ge1xyXG4vLyAgICAgICAgICAgICAgICAga2V5czogWyduYW1lJ10sXHJcbi8vICAgICAgICAgICAgICAgICBpbmNsdWRlU2NvcmU6IHRydWUsXHJcbi8vICAgICAgICAgICAgICAgICB0aHJlc2hvbGQ6IDAuMyxcclxuLy8gICAgICAgICAgICAgfTtcclxuLy8gICAgICAgICAgICAgLy8gY29uc3QgZnVzZUluc3RhbmNlID0gbmV3IEZ1c2UocGxheUxpc3QsIG9wdGlvbnMpO1xyXG4vLyAgICAgICAgICAgICBjb25zdCBmdXNlSW5zdGFuY2UgPSBuZXcgRnVzZShkZWZhdWx0UGxheUxpc3QsIG9wdGlvbnMpOyAvLyBVc2UgZGVmYXVsdFBsYXlMaXN0XHJcbi8vICAgICAgICAgICAgIHNldEZ1c2UoZnVzZUluc3RhbmNlKTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgLy8gfSwgW3BsYXlMaXN0XSk7XHJcbi8vICAgICB9LCBbZGVmYXVsdFBsYXlMaXN0XSk7XHJcblxyXG5cclxuLy8gICAgIC8vIHN0YXJ0IHRoZSBzZWFyY2hcclxuLy8gICAgIGNvbnN0IGhhbmRsZVNlYXJjaCA9IChxdWVyeTogc3RyaW5nKSA9PiB7XHJcbi8vICAgICAgICAgaWYgKCFmdXNlKSByZXR1cm4gW107XHJcbi8vICAgICAgICAgaWYgKHF1ZXJ5ID09PSAnJykge1xyXG4vLyAgICAgICAgICAgICBzZXRTZWFyY2hSZXN1bHRzKGRlZmF1bHRQbGF5TGlzdCk7XHJcbi8vICAgICAgICAgICAgIHNldFNob3dTdWdnZXN0aW9ucyhmYWxzZSk7XHJcbi8vICAgICAgICAgICAgIHJldHVybjtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgY29uc3QgcmVzdWx0ID0gZnVzZS5zZWFyY2gocXVlcnkpO1xyXG4vLyAgICAgICAgIHNldFNlYXJjaFJlc3VsdHMocmVzdWx0Lm1hcCgoaXRlbSkgPT4gaXRlbS5pdGVtKSk7XHJcbi8vICAgICAgICAgc2V0U2hvd1N1Z2dlc3Rpb25zKHRydWUpO1xyXG5cclxuLy8gICAgICAgICAvLyBzYXZlIHRoZSBzZWFyY2ggcmVzdWx0IHRvIHRoZSBzdG9yYWdlXHJcbi8vICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0Lm1hcCgoaXRlbSkgPT4gaXRlbS5pdGVtKSk7XHJcbi8vICAgICAgICAgZGlzcGF0Y2hlcihzZXRTZWFyY2hQbGF5TGlzdChyZXN1bHQubWFwKChpdGVtKSA9PiBpdGVtLml0ZW0pKSk7XHJcbi8vICAgICB9O1xyXG5cclxuLy8gICAgIC8vIGV4aXQgdGhlIHNlYXJjaGJhciBvbiBjbGlja2luZyBvdXRcclxuLy8gICAgIGNvbnN0IGhhbmRsZUJsdXIgPSAoKSA9PiB7XHJcbi8vICAgICAgICAgc2V0U2hvd1N1Z2dlc3Rpb25zKGZhbHNlKTtcclxuLy8gICAgIH07XHJcblxyXG4vLyAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICA8ZGl2PlxyXG4vLyAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMuY2VudGVyQmxvY2tTZWFyY2gsIHN0eWxlcy5zZWFyY2gpfT5cclxuLy8gICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoU3ZnfT5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8dXNlIGhyZWY9XCIvaW1nL2ljb24vc3ByaXRlLnN2ZyNpY29uLXNlYXJjaFwiPjwvdXNlPlxyXG4vLyAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbi8vICAgICAgICAgICAgICAgICA8aW5wdXRcclxuLy8gICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hUZXh0fVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuLy8gICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXHJcbi8vICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVTZWFyY2goZS50YXJnZXQudmFsdWUpfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cclxuLy8gICAgICAgICAgICAgICAgIC8+XHJcbi8vICAgICAgICAgICAgICAgICB7c2hvd1N1Z2dlc3Rpb25zICYmIChcclxuLy8gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaEJ5fT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAge3NlYXJjaFJlc3VsdHMubGVuZ3RoID4gMCA/IChcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VhcmNoUmVzdWx0cy5tYXAoKHRyYWNrKSA9PiAoXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXt0cmFjay5pZH1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaEJ5UH1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RyYWNrLm5hbWV9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoQnlQfT5ObyB0cmFja3MgZm91bmQ8L3A+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICApfVxyXG4vLyAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICA8L2Rpdj5cclxuLy8gICAgICk7XHJcbi8vIH07XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBTZWFyY2hCYXI7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/SearchBar/SearchBar.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/SearchBar/index.tsx":
/*!********************************************!*\
  !*** ./src/components/SearchBar/index.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SearchBar: function() { return /* reexport default from dynamic */ _SearchBar__WEBPACK_IMPORTED_MODULE_0___default.a; }\n/* harmony export */ });\n/* harmony import */ var _SearchBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchBar */ \"(app-pages-browser)/./src/components/SearchBar/SearchBar.tsx\");\n/* harmony import */ var _SearchBar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_SearchBar__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1NlYXJjaEJhci9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWtEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NlYXJjaEJhci9pbmRleC50c3g/MjgzZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyBkZWZhdWx0IGFzIFNlYXJjaEJhciB9IGZyb20gXCIuL1NlYXJjaEJhclwiIl0sIm5hbWVzIjpbImRlZmF1bHQiLCJTZWFyY2hCYXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/SearchBar/index.tsx\n"));

/***/ })

});