"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("_app-pages-browser_src_components_ContentPlaylist_ContentPlaylist_tsx",{

/***/ "(app-pages-browser)/./src/components/ContentPlaylist/ContentPlaylist.tsx":
/*!************************************************************!*\
  !*** ./src/components/ContentPlaylist/ContentPlaylist.tsx ***!
  \************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _ContentPlaylist_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ContentPlaylist.module.css */ \"(app-pages-browser)/./src/components/ContentPlaylist/ContentPlaylist.module.css\");\n/* harmony import */ var _ContentPlaylist_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ContentPlaylist_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks */ \"(app-pages-browser)/./src/hooks.ts\");\n/* harmony import */ var _store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store/features/tracksSlice */ \"(app-pages-browser)/./src/store/features/tracksSlice.ts\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/api */ \"(app-pages-browser)/./src/api.tsx\");\n/* harmony import */ var _components_PlayListItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/PlayListItem */ \"(app-pages-browser)/./src/components/PlayListItem/index.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst ContentPlaylist = ()=>{\n    _s();\n    const dispatcher = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch)();\n    const playList = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.tracks.playList);\n    const searchPlayList = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.tracks.searchPlaylist);\n    const { track } = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.tracks);\n    const [isSearchActive, setIsSearchActive] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    // const { isSearch } = useAppSelector((state) => state.tracks.isSearch)\n    const isSearch = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.tracks.isSearch);\n    console.log(\"content\" + isSearch);\n    console.log(searchPlayList);\n    // get the tracklist from API\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        (0,_api__WEBPACK_IMPORTED_MODULE_5__.getTracks)().then((data)=>{\n            dispatcher((0,_store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_4__.setPlayList)(data));\n        });\n    }, [\n        dispatcher\n    ]);\n    // Redux tools: set the track playing\n    const handleTrack = (trackR)=>{\n        dispatcher((0,_store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_4__.setCurrentTrack)(trackR));\n    };\n    // determine which tracklist to render, default or search\n    // const tracksToRender = searchPlayList.length > 0 ? searchPlayList : playList;\n    // const tracksToRender = (isSearch && searchPlayList?.length > 0) ? searchPlayList : playList;\n    const tracksToRender = isSearch ? searchPlayList : playList;\n    // add a duration from audio props to each track\n    const [trackDurations, setTrackDurations] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});\n    const audioRefs = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)({});\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const durations = {};\n        playList === null || playList === void 0 ? void 0 : playList.forEach((track)=>{\n            const audio = new Audio(track.track_file);\n            audio.addEventListener(\"loadedmetadata\", ()=>{\n                durations[track.id] = audio.duration;\n                setTrackDurations({\n                    ...durations\n                });\n            });\n            audioRefs.current[track.id] = audio;\n        });\n        return ()=>{\n            Object.values(audioRefs.current).forEach((audio)=>{\n                audio.pause();\n                audio.removeAttribute(\"src\");\n                audio.load();\n            });\n        };\n    }, [\n        playList\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_ContentPlaylist_module_css__WEBPACK_IMPORTED_MODULE_7___default().contentPlaylist), (_ContentPlaylist_module_css__WEBPACK_IMPORTED_MODULE_7___default().playlist)),\n        children: isSearch && searchPlayList.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"No tracks found\"\n        }, void 0, false, {\n            fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\ContentPlaylist\\\\ContentPlaylist.tsx\",\n            lineNumber: 65,\n            columnNumber: 9\n        }, undefined) : tracksToRender.map((trackR)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PlayListItem__WEBPACK_IMPORTED_MODULE_6__.PlayListItem, {\n                name: trackR.name,\n                author: trackR.author,\n                album: trackR.album,\n                duration: trackDurations[trackR.id],\n                setTrack: ()=>handleTrack(trackR),\n                isSetTrack: trackR.id === (track === null || track === void 0 ? void 0 : track.id)\n            }, trackR.id, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\ContentPlaylist\\\\ContentPlaylist.tsx\",\n                lineNumber: 68,\n                columnNumber: 11\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\ContentPlaylist\\\\ContentPlaylist.tsx\",\n        lineNumber: 63,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ContentPlaylist, \"qriI4737n+sWT3Y6ht4/38Ce0p8=\", false, function() {\n    return [\n        _hooks__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch,\n        _hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        _hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        _hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        _hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector\n    ];\n});\n_c = ContentPlaylist;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContentPlaylist);\nvar _c;\n$RefreshReg$(_c, \"ContentPlaylist\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0NvbnRlbnRQbGF5bGlzdC9Db250ZW50UGxheWxpc3QudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRWtEO0FBQ2Q7QUFDdUI7QUFFRjtBQUNtQjtBQUMxQztBQUNzQjtBQUV4RCxNQUFNWSxrQkFBa0I7O0lBRXRCLE1BQU1DLGFBQWFQLHNEQUFjQTtJQUNqQyxNQUFNUSxXQUFXUCxzREFBY0EsQ0FBQyxDQUFDUSxRQUFVQSxNQUFNQyxNQUFNLENBQUNGLFFBQVE7SUFDaEUsTUFBTUcsaUJBQWlCVixzREFBY0EsQ0FBQyxDQUFDUSxRQUFVQSxNQUFNQyxNQUFNLENBQUNFLGNBQWM7SUFDNUUsTUFBTSxFQUFFQyxLQUFLLEVBQUUsR0FBR1osc0RBQWNBLENBQUMsQ0FBQ1EsUUFBVUEsTUFBTUMsTUFBTTtJQUN4RCxNQUFNLENBQUNJLGdCQUFnQkMsa0JBQWtCLEdBQUdoQiwrQ0FBUUEsQ0FBQztJQUNyRCx3RUFBd0U7SUFDeEUsTUFBTWlCLFdBQVdmLHNEQUFjQSxDQUFDLENBQUNRLFFBQVVBLE1BQU1DLE1BQU0sQ0FBQ00sUUFBUTtJQUNoRUMsUUFBUUMsR0FBRyxDQUFDLFlBQVlGO0lBQ3hCQyxRQUFRQyxHQUFHLENBQUNQO0lBQ1osNkJBQTZCO0lBQzdCZCxnREFBU0EsQ0FBQztRQUNSTywrQ0FBU0EsR0FBR2UsSUFBSSxDQUFDLENBQUNDO1lBQ2hCYixXQUFXSix3RUFBV0EsQ0FBQ2lCO1FBQ3pCO0lBQ0YsR0FBRztRQUFDYjtLQUFXO0lBRWYscUNBQXFDO0lBQ3JDLE1BQU1jLGNBQWMsQ0FBQ0M7UUFDbkJmLFdBQVdMLDRFQUFlQSxDQUFDb0I7SUFDN0I7SUFFQSx5REFBeUQ7SUFDekQsZ0ZBQWdGO0lBQ2hGLCtGQUErRjtJQUMvRixNQUFNQyxpQkFBaUJQLFdBQVdMLGlCQUFpQkg7SUFFbkQsZ0RBQWdEO0lBQ2hELE1BQU0sQ0FBQ2dCLGdCQUFnQkMsa0JBQWtCLEdBQUcxQiwrQ0FBUUEsQ0FBNEIsQ0FBQztJQUNqRixNQUFNMkIsWUFBWTVCLDZDQUFNQSxDQUFzQyxDQUFDO0lBQy9ERCxnREFBU0EsQ0FBQztRQUNSLE1BQU04QixZQUF1QyxDQUFDO1FBQzlDbkIscUJBQUFBLCtCQUFBQSxTQUFVb0IsT0FBTyxDQUFDLENBQUNmO1lBQ2pCLE1BQU1nQixRQUFRLElBQUlDLE1BQU1qQixNQUFNa0IsVUFBVTtZQUN4Q0YsTUFBTUcsZ0JBQWdCLENBQUMsa0JBQWtCO2dCQUN2Q0wsU0FBUyxDQUFDZCxNQUFNb0IsRUFBRSxDQUFDLEdBQUdKLE1BQU1LLFFBQVE7Z0JBQ3BDVCxrQkFBa0I7b0JBQUUsR0FBR0UsU0FBUztnQkFBQztZQUNuQztZQUNBRCxVQUFVUyxPQUFPLENBQUN0QixNQUFNb0IsRUFBRSxDQUFDLEdBQUdKO1FBQ2hDO1FBQ0EsT0FBTztZQUNMTyxPQUFPQyxNQUFNLENBQUNYLFVBQVVTLE9BQU8sRUFBRVAsT0FBTyxDQUFDLENBQUNDO2dCQUN4Q0EsTUFBTVMsS0FBSztnQkFDWFQsTUFBTVUsZUFBZSxDQUFDO2dCQUN0QlYsTUFBTVcsSUFBSTtZQUNaO1FBQ0Y7SUFDRixHQUFHO1FBQUNoQztLQUFTO0lBRWIscUJBQ0UsOERBQUNpQztRQUFJQyxXQUFXL0MsaURBQVVBLENBQUNELG9GQUFzQixFQUFFQSw2RUFBZTtrQkFDL0RzQixZQUFZTCxlQUFla0MsTUFBTSxLQUFLLGtCQUNyQyw4REFBQ0M7c0JBQUU7Ozs7O3dCQUVIdkIsZUFBZXdCLEdBQUcsQ0FBQyxDQUFDekIsdUJBQ2xCLDhEQUFDakIsa0VBQVlBO2dCQUVYMkMsTUFBTTFCLE9BQU8wQixJQUFJO2dCQUNqQkMsUUFBUTNCLE9BQU8yQixNQUFNO2dCQUNyQkMsT0FBTzVCLE9BQU80QixLQUFLO2dCQUNuQmhCLFVBQVVWLGNBQWMsQ0FBQ0YsT0FBT1csRUFBRSxDQUFDO2dCQUNuQ2tCLFVBQVUsSUFBTTlCLFlBQVlDO2dCQUM1QjhCLFlBQVk5QixPQUFPVyxFQUFFLE1BQUtwQixrQkFBQUEsNEJBQUFBLE1BQU9vQixFQUFFO2VBTjlCWCxPQUFPVyxFQUFFOzs7Ozs7Ozs7O0FBWTFCO0dBckVNM0I7O1FBRWVOLGtEQUFjQTtRQUNoQkMsa0RBQWNBO1FBQ1JBLGtEQUFjQTtRQUNuQkEsa0RBQWNBO1FBR2ZBLGtEQUFjQTs7O0tBUjNCSztBQXVFTiwrREFBZUEsZUFBZUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Db250ZW50UGxheWxpc3QvQ29udGVudFBsYXlsaXN0LnRzeD8zY2ZjIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vQ29udGVudFBsYXlsaXN0Lm1vZHVsZS5jc3NcIjtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB0cmFja1R5cGUgfSBmcm9tIFwiQC90eXBlcy90eXBlc1wiO1xuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2gsIHVzZUFwcFNlbGVjdG9yIH0gZnJvbSBcIkAvaG9va3NcIjtcbmltcG9ydCB7IHNldEN1cnJlbnRUcmFjaywgc2V0UGxheUxpc3QgfSBmcm9tIFwiQC9zdG9yZS9mZWF0dXJlcy90cmFja3NTbGljZVwiO1xuaW1wb3J0IHsgZ2V0VHJhY2tzIH0gZnJvbSBcIkAvYXBpXCI7XG5pbXBvcnQgeyBQbGF5TGlzdEl0ZW0gfSBmcm9tIFwiQGNvbXBvbmVudHMvUGxheUxpc3RJdGVtXCI7XG5cbmNvbnN0IENvbnRlbnRQbGF5bGlzdCA9ICgpID0+IHtcblxuICBjb25zdCBkaXNwYXRjaGVyID0gdXNlQXBwRGlzcGF0Y2goKTtcbiAgY29uc3QgcGxheUxpc3QgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnRyYWNrcy5wbGF5TGlzdCk7XG4gIGNvbnN0IHNlYXJjaFBsYXlMaXN0ID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS50cmFja3Muc2VhcmNoUGxheWxpc3QpO1xuICBjb25zdCB7IHRyYWNrIH0gPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnRyYWNrcyk7XG4gIGNvbnN0IFtpc1NlYXJjaEFjdGl2ZSwgc2V0SXNTZWFyY2hBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAvLyBjb25zdCB7IGlzU2VhcmNoIH0gPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnRyYWNrcy5pc1NlYXJjaClcbiAgY29uc3QgaXNTZWFyY2ggPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnRyYWNrcy5pc1NlYXJjaCk7XG4gIGNvbnNvbGUubG9nKFwiY29udGVudFwiICsgaXNTZWFyY2gpO1xuICBjb25zb2xlLmxvZyhzZWFyY2hQbGF5TGlzdCk7XG4gIC8vIGdldCB0aGUgdHJhY2tsaXN0IGZyb20gQVBJXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0VHJhY2tzKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgZGlzcGF0Y2hlcihzZXRQbGF5TGlzdChkYXRhKSk7XG4gICAgfSk7XG4gIH0sIFtkaXNwYXRjaGVyXSk7XG5cbiAgLy8gUmVkdXggdG9vbHM6IHNldCB0aGUgdHJhY2sgcGxheWluZ1xuICBjb25zdCBoYW5kbGVUcmFjayA9ICh0cmFja1I6IHRyYWNrVHlwZSkgPT4ge1xuICAgIGRpc3BhdGNoZXIoc2V0Q3VycmVudFRyYWNrKHRyYWNrUikpO1xuICB9O1xuXG4gIC8vIGRldGVybWluZSB3aGljaCB0cmFja2xpc3QgdG8gcmVuZGVyLCBkZWZhdWx0IG9yIHNlYXJjaFxuICAvLyBjb25zdCB0cmFja3NUb1JlbmRlciA9IHNlYXJjaFBsYXlMaXN0Lmxlbmd0aCA+IDAgPyBzZWFyY2hQbGF5TGlzdCA6IHBsYXlMaXN0O1xuICAvLyBjb25zdCB0cmFja3NUb1JlbmRlciA9IChpc1NlYXJjaCAmJiBzZWFyY2hQbGF5TGlzdD8ubGVuZ3RoID4gMCkgPyBzZWFyY2hQbGF5TGlzdCA6IHBsYXlMaXN0O1xuICBjb25zdCB0cmFja3NUb1JlbmRlciA9IGlzU2VhcmNoID8gc2VhcmNoUGxheUxpc3QgOiBwbGF5TGlzdDtcblxuICAvLyBhZGQgYSBkdXJhdGlvbiBmcm9tIGF1ZGlvIHByb3BzIHRvIGVhY2ggdHJhY2tcbiAgY29uc3QgW3RyYWNrRHVyYXRpb25zLCBzZXRUcmFja0R1cmF0aW9uc10gPSB1c2VTdGF0ZTx7IFtrZXk6IHN0cmluZ106IG51bWJlciB9Pih7fSk7XG4gIGNvbnN0IGF1ZGlvUmVmcyA9IHVzZVJlZjx7IFtrZXk6IHN0cmluZ106IEhUTUxBdWRpb0VsZW1lbnQgfT4oe30pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGR1cmF0aW9uczogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSA9IHt9O1xuICAgIHBsYXlMaXN0Py5mb3JFYWNoKCh0cmFjazogdHJhY2tUeXBlKSA9PiB7XG4gICAgICBjb25zdCBhdWRpbyA9IG5ldyBBdWRpbyh0cmFjay50cmFja19maWxlKTtcbiAgICAgIGF1ZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRlZG1ldGFkYXRhJywgKCkgPT4ge1xuICAgICAgICBkdXJhdGlvbnNbdHJhY2suaWRdID0gYXVkaW8uZHVyYXRpb247XG4gICAgICAgIHNldFRyYWNrRHVyYXRpb25zKHsgLi4uZHVyYXRpb25zIH0pO1xuICAgICAgfSk7XG4gICAgICBhdWRpb1JlZnMuY3VycmVudFt0cmFjay5pZF0gPSBhdWRpbztcbiAgICB9KTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgT2JqZWN0LnZhbHVlcyhhdWRpb1JlZnMuY3VycmVudCkuZm9yRWFjaCgoYXVkaW8pID0+IHtcbiAgICAgICAgYXVkaW8ucGF1c2UoKTtcbiAgICAgICAgYXVkaW8ucmVtb3ZlQXR0cmlidXRlKCdzcmMnKTtcbiAgICAgICAgYXVkaW8ubG9hZCgpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfSwgW3BsYXlMaXN0XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMuY29udGVudFBsYXlsaXN0LCBzdHlsZXMucGxheWxpc3QpfT5cbiAgICAgIHtpc1NlYXJjaCAmJiBzZWFyY2hQbGF5TGlzdC5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgIDxwPk5vIHRyYWNrcyBmb3VuZDwvcD5cbiAgICAgICkgOiAoXG4gICAgICAgIHRyYWNrc1RvUmVuZGVyLm1hcCgodHJhY2tSOiB0cmFja1R5cGUpID0+IChcbiAgICAgICAgICA8UGxheUxpc3RJdGVtXG4gICAgICAgICAgICBrZXk9e3RyYWNrUi5pZH1cbiAgICAgICAgICAgIG5hbWU9e3RyYWNrUi5uYW1lfVxuICAgICAgICAgICAgYXV0aG9yPXt0cmFja1IuYXV0aG9yfVxuICAgICAgICAgICAgYWxidW09e3RyYWNrUi5hbGJ1bX1cbiAgICAgICAgICAgIGR1cmF0aW9uPXt0cmFja0R1cmF0aW9uc1t0cmFja1IuaWRdfVxuICAgICAgICAgICAgc2V0VHJhY2s9eygpID0+IGhhbmRsZVRyYWNrKHRyYWNrUil9XG4gICAgICAgICAgICBpc1NldFRyYWNrPXt0cmFja1IuaWQgPT09IHRyYWNrPy5pZH1cbiAgICAgICAgICAvPlxuICAgICAgICApKVxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRQbGF5bGlzdDtcbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJjbGFzc05hbWVzIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZUFwcERpc3BhdGNoIiwidXNlQXBwU2VsZWN0b3IiLCJzZXRDdXJyZW50VHJhY2siLCJzZXRQbGF5TGlzdCIsImdldFRyYWNrcyIsIlBsYXlMaXN0SXRlbSIsIkNvbnRlbnRQbGF5bGlzdCIsImRpc3BhdGNoZXIiLCJwbGF5TGlzdCIsInN0YXRlIiwidHJhY2tzIiwic2VhcmNoUGxheUxpc3QiLCJzZWFyY2hQbGF5bGlzdCIsInRyYWNrIiwiaXNTZWFyY2hBY3RpdmUiLCJzZXRJc1NlYXJjaEFjdGl2ZSIsImlzU2VhcmNoIiwiY29uc29sZSIsImxvZyIsInRoZW4iLCJkYXRhIiwiaGFuZGxlVHJhY2siLCJ0cmFja1IiLCJ0cmFja3NUb1JlbmRlciIsInRyYWNrRHVyYXRpb25zIiwic2V0VHJhY2tEdXJhdGlvbnMiLCJhdWRpb1JlZnMiLCJkdXJhdGlvbnMiLCJmb3JFYWNoIiwiYXVkaW8iLCJBdWRpbyIsInRyYWNrX2ZpbGUiLCJhZGRFdmVudExpc3RlbmVyIiwiaWQiLCJkdXJhdGlvbiIsImN1cnJlbnQiLCJPYmplY3QiLCJ2YWx1ZXMiLCJwYXVzZSIsInJlbW92ZUF0dHJpYnV0ZSIsImxvYWQiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250ZW50UGxheWxpc3QiLCJwbGF5bGlzdCIsImxlbmd0aCIsInAiLCJtYXAiLCJuYW1lIiwiYXV0aG9yIiwiYWxidW0iLCJzZXRUcmFjayIsImlzU2V0VHJhY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ContentPlaylist/ContentPlaylist.tsx\n"));

/***/ })

});