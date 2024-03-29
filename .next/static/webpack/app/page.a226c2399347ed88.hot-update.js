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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _ContentPlaylist_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ContentPlaylist.module.css */ \"(app-pages-browser)/./src/components/ContentPlaylist/ContentPlaylist.module.css\");\n/* harmony import */ var _ContentPlaylist_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ContentPlaylist_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_PlayListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/PlayListItem */ \"(app-pages-browser)/./src/components/PlayListItem/index.tsx\");\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/hooks */ \"(app-pages-browser)/./src/hooks.ts\");\n/* harmony import */ var _store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/store/features/tracksSlice */ \"(app-pages-browser)/./src/store/features/tracksSlice.ts\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/api */ \"(app-pages-browser)/./src/api.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst ContentPlaylist = ()=>{\n    _s();\n    // get the tracklist from API\n    const [trackList, setTrackList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        (0,_api__WEBPACK_IMPORTED_MODULE_6__.getTracks)().then((data)=>setTrackLisT(data));\n    }, []);\n    // Redux tools: set the track playing\n    const dispatcher = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useAppDispatch)();\n    const { track } = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useAppSelector)((state)=>state.tracks);\n    const handleTrack = (trackR)=>{\n        dispatcher((0,_store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_5__.setCurrentTrack)(trackR));\n        dispatcher((0,_store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_5__.setPlayList)(trackList));\n    };\n    // add a duration from audio props to each track\n    const [trackDurations, setTrackDurations] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});\n    const audioRefs = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)({});\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const durations = {};\n        trackList.forEach((track)=>{\n            const audio = new Audio(track.track_file);\n            audio.addEventListener(\"loadedmetadata\", ()=>{\n                durations[track.id] = audio.duration;\n                setTrackDurations({\n                    ...durations\n                });\n            });\n            audioRefs.current[track.id] = audio;\n        });\n        return ()=>{\n            Object.values(audioRefs.current).forEach((audio)=>{\n                audio.pause();\n                audio.removeAttribute(\"src\");\n                audio.load();\n            });\n        };\n    }, [\n        trackList\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_ContentPlaylist_module_css__WEBPACK_IMPORTED_MODULE_7___default().contentPlaylist), (_ContentPlaylist_module_css__WEBPACK_IMPORTED_MODULE_7___default().playlist)),\n        children: trackList.map((trackR)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PlayListItem__WEBPACK_IMPORTED_MODULE_3__.PlayListItem, {\n                name: trackR.name,\n                author: trackR.author,\n                album: trackR.album,\n                duration: trackDurations[trackR.id],\n                setTrack: ()=>handleTrack(trackR),\n                isSetTrack: trackR.id === (track === null || track === void 0 ? void 0 : track.id)\n            }, trackR.id, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\ContentPlaylist\\\\ContentPlaylist.tsx\",\n                lineNumber: 55,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\ContentPlaylist\\\\ContentPlaylist.tsx\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ContentPlaylist, \"Yje4sg+QM8zb5n6vclA1/9Mj32w=\", false, function() {\n    return [\n        _hooks__WEBPACK_IMPORTED_MODULE_4__.useAppDispatch,\n        _hooks__WEBPACK_IMPORTED_MODULE_4__.useAppSelector\n    ];\n});\n_c = ContentPlaylist;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContentPlaylist);\nvar _c;\n$RefreshReg$(_c, \"ContentPlaylist\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0NvbnRlbnRQbGF5bGlzdC9Db250ZW50UGxheWxpc3QudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWtEO0FBQ2Q7QUFDdUI7QUFDSDtBQUVDO0FBQ21CO0FBQzFDO0FBTWxDLE1BQU1ZLGtCQUFrQjs7SUFHdEIsNkJBQTZCO0lBQzdCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHVCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQzdDRixnREFBU0EsQ0FBQztRQUNSUSwrQ0FBU0EsR0FBR0ksSUFBSSxDQUFDLENBQUNDLE9BQVNDLGFBQWFEO0lBQzFDLEdBQUcsRUFBRTtJQUNMLHFDQUFxQztJQUNyQyxNQUFNRSxhQUFhWCxzREFBY0E7SUFDakMsTUFBTSxFQUFFWSxLQUFLLEVBQUUsR0FBR1gsc0RBQWNBLENBQUMsQ0FBQ1ksUUFBVUEsTUFBTUMsTUFBTTtJQUN4RCxNQUFNQyxjQUFjLENBQUNDO1FBQ25CTCxXQUFXVCw0RUFBZUEsQ0FBQ2M7UUFDM0JMLFdBQVdSLHdFQUFXQSxDQUFDRztJQUN6QjtJQUVBLGdEQUFnRDtJQUNoRCxNQUFNLENBQUNXLGdCQUFnQkMsa0JBQWtCLEdBQUdwQiwrQ0FBUUEsQ0FBNEIsQ0FBQztJQUNqRixNQUFNcUIsWUFBWXRCLDZDQUFNQSxDQUFzQyxDQUFDO0lBQy9ERCxnREFBU0EsQ0FBQztRQUNSLE1BQU13QixZQUF1QyxDQUFDO1FBQzlDZCxVQUFVZSxPQUFPLENBQUMsQ0FBQ1Q7WUFDakIsTUFBTVUsUUFBUSxJQUFJQyxNQUFNWCxNQUFNWSxVQUFVO1lBQ3hDRixNQUFNRyxnQkFBZ0IsQ0FBQyxrQkFBa0I7Z0JBQ3ZDTCxTQUFTLENBQUNSLE1BQU1jLEVBQUUsQ0FBQyxHQUFHSixNQUFNSyxRQUFRO2dCQUNwQ1Qsa0JBQWtCO29CQUFFLEdBQUdFLFNBQVM7Z0JBQUM7WUFDbkM7WUFDQUQsVUFBVVMsT0FBTyxDQUFDaEIsTUFBTWMsRUFBRSxDQUFDLEdBQUdKO1FBQ2hDO1FBQ0EsT0FBTztZQUNMTyxPQUFPQyxNQUFNLENBQUNYLFVBQVVTLE9BQU8sRUFBRVAsT0FBTyxDQUFDLENBQUNDO2dCQUN4Q0EsTUFBTVMsS0FBSztnQkFDWFQsTUFBTVUsZUFBZSxDQUFDO2dCQUN0QlYsTUFBTVcsSUFBSTtZQUNaO1FBQ0Y7SUFDRixHQUFHO1FBQUMzQjtLQUFVO0lBRWQscUJBQ0UsOERBQUM0QjtRQUFJQyxXQUFXekMsaURBQVVBLENBQUNELG9GQUFzQixFQUFFQSw2RUFBZTtrQkFDL0RhLFVBQVVnQyxHQUFHLENBQUMsQ0FBQ3RCLHVCQUNkLDhEQUFDakIsa0VBQVlBO2dCQUVYd0MsTUFBTXZCLE9BQU91QixJQUFJO2dCQUNqQkMsUUFBUXhCLE9BQU93QixNQUFNO2dCQUNyQkMsT0FBT3pCLE9BQU95QixLQUFLO2dCQUNuQmQsVUFBVVYsY0FBYyxDQUFDRCxPQUFPVSxFQUFFLENBQUM7Z0JBQ25DZ0IsVUFBVSxJQUFNM0IsWUFBWUM7Z0JBQzVCMkIsWUFBWTNCLE9BQU9VLEVBQUUsTUFBS2Qsa0JBQUFBLDRCQUFBQSxNQUFPYyxFQUFFO2VBTjlCVixPQUFPVSxFQUFFOzs7Ozs7Ozs7O0FBWXhCO0dBdERNckI7O1FBU2VMLGtEQUFjQTtRQUNmQyxrREFBY0E7OztLQVY1Qkk7QUF3RE4sK0RBQWVBLGVBQWVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ29udGVudFBsYXlsaXN0L0NvbnRlbnRQbGF5bGlzdC50c3g/M2NmYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL0NvbnRlbnRQbGF5bGlzdC5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUGxheUxpc3RJdGVtIH0gZnJvbSBcIkBjb21wb25lbnRzL1BsYXlMaXN0SXRlbVwiO1xuaW1wb3J0IHsgdHJhY2tUeXBlIH0gZnJvbSBcIkAvdHlwZXMvdHlwZXNcIjtcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoLCB1c2VBcHBTZWxlY3RvciB9IGZyb20gXCJAL2hvb2tzXCI7XG5pbXBvcnQgeyBzZXRDdXJyZW50VHJhY2ssIHNldFBsYXlMaXN0IH0gZnJvbSBcIkAvc3RvcmUvZmVhdHVyZXMvdHJhY2tzU2xpY2VcIjtcbmltcG9ydCB7IGdldFRyYWNrcyB9IGZyb20gXCJAL2FwaVwiO1xuXG50eXBlIENvbnRlbnRQbGF5TGlzdFByb3BzID0ge1xuICB0cmFja0xpc3Q6IHRyYWNrVHlwZVtdO1xufTtcblxuY29uc3QgQ29udGVudFBsYXlsaXN0ID0gKCkgPT4ge1xuXG5cbiAgLy8gZ2V0IHRoZSB0cmFja2xpc3QgZnJvbSBBUElcbiAgY29uc3QgW3RyYWNrTGlzdCwgc2V0VHJhY2tMaXN0XSA9IHVzZVN0YXRlKFtdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRUcmFja3MoKS50aGVuKChkYXRhKSA9PiBzZXRUcmFja0xpc1QoZGF0YSkpO1xuICB9LCBbXSk7XG4gIC8vIFJlZHV4IHRvb2xzOiBzZXQgdGhlIHRyYWNrIHBsYXlpbmdcbiAgY29uc3QgZGlzcGF0Y2hlciA9IHVzZUFwcERpc3BhdGNoKCk7XG4gIGNvbnN0IHsgdHJhY2sgfSA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudHJhY2tzKTtcbiAgY29uc3QgaGFuZGxlVHJhY2sgPSAodHJhY2tSOiB0cmFja1R5cGUpID0+IHtcbiAgICBkaXNwYXRjaGVyKHNldEN1cnJlbnRUcmFjayh0cmFja1IpKTtcbiAgICBkaXNwYXRjaGVyKHNldFBsYXlMaXN0KHRyYWNrTGlzdCkpO1xuICB9O1xuXG4gIC8vIGFkZCBhIGR1cmF0aW9uIGZyb20gYXVkaW8gcHJvcHMgdG8gZWFjaCB0cmFja1xuICBjb25zdCBbdHJhY2tEdXJhdGlvbnMsIHNldFRyYWNrRHVyYXRpb25zXSA9IHVzZVN0YXRlPHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH0+KHt9KTtcbiAgY29uc3QgYXVkaW9SZWZzID0gdXNlUmVmPHsgW2tleTogc3RyaW5nXTogSFRNTEF1ZGlvRWxlbWVudCB9Pih7fSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZHVyYXRpb25zOiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9ID0ge307XG4gICAgdHJhY2tMaXN0LmZvckVhY2goKHRyYWNrKSA9PiB7XG4gICAgICBjb25zdCBhdWRpbyA9IG5ldyBBdWRpbyh0cmFjay50cmFja19maWxlKTtcbiAgICAgIGF1ZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRlZG1ldGFkYXRhJywgKCkgPT4ge1xuICAgICAgICBkdXJhdGlvbnNbdHJhY2suaWRdID0gYXVkaW8uZHVyYXRpb247XG4gICAgICAgIHNldFRyYWNrRHVyYXRpb25zKHsgLi4uZHVyYXRpb25zIH0pO1xuICAgICAgfSk7XG4gICAgICBhdWRpb1JlZnMuY3VycmVudFt0cmFjay5pZF0gPSBhdWRpbztcbiAgICB9KTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgT2JqZWN0LnZhbHVlcyhhdWRpb1JlZnMuY3VycmVudCkuZm9yRWFjaCgoYXVkaW8pID0+IHtcbiAgICAgICAgYXVkaW8ucGF1c2UoKTtcbiAgICAgICAgYXVkaW8ucmVtb3ZlQXR0cmlidXRlKCdzcmMnKTtcbiAgICAgICAgYXVkaW8ubG9hZCgpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfSwgW3RyYWNrTGlzdF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLmNvbnRlbnRQbGF5bGlzdCwgc3R5bGVzLnBsYXlsaXN0KX0+XG4gICAgICB7dHJhY2tMaXN0Lm1hcCgodHJhY2tSKSA9PiAoXG4gICAgICAgIDxQbGF5TGlzdEl0ZW1cbiAgICAgICAgICBrZXk9e3RyYWNrUi5pZH1cbiAgICAgICAgICBuYW1lPXt0cmFja1IubmFtZX1cbiAgICAgICAgICBhdXRob3I9e3RyYWNrUi5hdXRob3J9XG4gICAgICAgICAgYWxidW09e3RyYWNrUi5hbGJ1bX1cbiAgICAgICAgICBkdXJhdGlvbj17dHJhY2tEdXJhdGlvbnNbdHJhY2tSLmlkXX1cbiAgICAgICAgICBzZXRUcmFjaz17KCkgPT4gaGFuZGxlVHJhY2sodHJhY2tSKX1cbiAgICAgICAgICBpc1NldFRyYWNrPXt0cmFja1IuaWQgPT09IHRyYWNrPy5pZH1cbiAgICAgICAgLz5cbiAgICAgICkpXG4gICAgICB9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50UGxheWxpc3Q7XG4iXSwibmFtZXMiOlsic3R5bGVzIiwiY2xhc3NOYW1lcyIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJQbGF5TGlzdEl0ZW0iLCJ1c2VBcHBEaXNwYXRjaCIsInVzZUFwcFNlbGVjdG9yIiwic2V0Q3VycmVudFRyYWNrIiwic2V0UGxheUxpc3QiLCJnZXRUcmFja3MiLCJDb250ZW50UGxheWxpc3QiLCJ0cmFja0xpc3QiLCJzZXRUcmFja0xpc3QiLCJ0aGVuIiwiZGF0YSIsInNldFRyYWNrTGlzVCIsImRpc3BhdGNoZXIiLCJ0cmFjayIsInN0YXRlIiwidHJhY2tzIiwiaGFuZGxlVHJhY2siLCJ0cmFja1IiLCJ0cmFja0R1cmF0aW9ucyIsInNldFRyYWNrRHVyYXRpb25zIiwiYXVkaW9SZWZzIiwiZHVyYXRpb25zIiwiZm9yRWFjaCIsImF1ZGlvIiwiQXVkaW8iLCJ0cmFja19maWxlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImlkIiwiZHVyYXRpb24iLCJjdXJyZW50IiwiT2JqZWN0IiwidmFsdWVzIiwicGF1c2UiLCJyZW1vdmVBdHRyaWJ1dGUiLCJsb2FkIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGVudFBsYXlsaXN0IiwicGxheWxpc3QiLCJtYXAiLCJuYW1lIiwiYXV0aG9yIiwiYWxidW0iLCJzZXRUcmFjayIsImlzU2V0VHJhY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ContentPlaylist/ContentPlaylist.tsx\n"));

/***/ })

});