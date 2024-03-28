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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _ContentPlaylist_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ContentPlaylist.module.css */ \"(app-pages-browser)/./src/components/ContentPlaylist/ContentPlaylist.module.css\");\n/* harmony import */ var _ContentPlaylist_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ContentPlaylist_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_PlayListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/PlayListItem */ \"(app-pages-browser)/./src/components/PlayListItem/index.tsx\");\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/hooks */ \"(app-pages-browser)/./src/hooks.ts\");\n/* harmony import */ var _store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/store/features/tracksSlice */ \"(app-pages-browser)/./src/store/features/tracksSlice.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n// import { useAppDispatch, useAppSelector } from \"@/store/store\";\n\n\nconst ContentPlaylist = (param)=>{\n    let { trackList } = param;\n    _s();\n    // Redux tools: set the track playing\n    const dispatcher = useAppDispatch();\n    const { track } = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useAppSelector)((state)=>state.tracks);\n    const handleTrack = (trackR)=>{\n        dispatcher((0,_store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_5__.setCurrentTrack)(trackR));\n        dispatcher((0,_store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_5__.setPlayList)(trackList));\n    };\n    // add a duration from audio props to each track\n    const [trackDurations, setTrackDurations] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});\n    const audioRefs = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)({});\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const durations = {};\n        trackList.forEach((track)=>{\n            const audio = new Audio(track.track_file);\n            audio.addEventListener(\"loadedmetadata\", ()=>{\n                durations[track.id] = audio.duration;\n                setTrackDurations({\n                    ...durations\n                });\n            });\n            audioRefs.current[track.id] = audio;\n        });\n        return ()=>{\n            Object.values(audioRefs.current).forEach((audio)=>{\n                audio.pause();\n                audio.removeAttribute(\"src\");\n                audio.load();\n            });\n        };\n    }, [\n        trackList\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_ContentPlaylist_module_css__WEBPACK_IMPORTED_MODULE_6___default().contentPlaylist), (_ContentPlaylist_module_css__WEBPACK_IMPORTED_MODULE_6___default().playlist)),\n        children: trackList.map((trackR)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PlayListItem__WEBPACK_IMPORTED_MODULE_3__.PlayListItem, {\n                name: trackR.name,\n                author: trackR.author,\n                album: trackR.album,\n                duration: trackDurations[trackR.id],\n                setTrack: ()=>handleTrack(trackR),\n                isSetTrack: trackR.id === (track === null || track === void 0 ? void 0 : track.id)\n            }, trackR.id, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\ContentPlaylist\\\\ContentPlaylist.tsx\",\n                lineNumber: 51,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\ContentPlaylist\\\\ContentPlaylist.tsx\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ContentPlaylist, \"1vqkaYnVUVQFP4AgnUbyUWb73p8=\", true, function() {\n    return [\n        _hooks__WEBPACK_IMPORTED_MODULE_4__.useAppSelector\n    ];\n});\n_c = ContentPlaylist;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContentPlaylist);\nvar _c;\n$RefreshReg$(_c, \"ContentPlaylist\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0NvbnRlbnRQbGF5bGlzdC9Db250ZW50UGxheWxpc3QudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBa0Q7QUFDZDtBQUN1QjtBQUNIO0FBRXhELGtFQUFrRTtBQUN6QjtBQUNtQztBQU01RSxNQUFNVSxrQkFBa0I7UUFBQyxFQUN2QkMsU0FBUyxFQUNZOztJQUVyQixxQ0FBcUM7SUFDckMsTUFBTUMsYUFBYUM7SUFDbkIsTUFBTSxFQUFFQyxLQUFLLEVBQUUsR0FBR1Asc0RBQWNBLENBQUMsQ0FBQ1EsUUFBVUEsTUFBTUMsTUFBTTtJQUN4RCxNQUFNQyxjQUFjLENBQUNDO1FBQ25CTixXQUFXSiw0RUFBZUEsQ0FBQ1U7UUFDM0JOLFdBQVdILHdFQUFXQSxDQUFDRTtJQUN6QjtJQUVBLGdEQUFnRDtJQUNoRCxNQUFNLENBQUNRLGdCQUFnQkMsa0JBQWtCLEdBQUdmLCtDQUFRQSxDQUE0QixDQUFDO0lBQ2pGLE1BQU1nQixZQUFZakIsNkNBQU1BLENBQXNDLENBQUM7SUFDL0RELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTW1CLFlBQXVDLENBQUM7UUFDOUNYLFVBQVVZLE9BQU8sQ0FBQyxDQUFDVDtZQUNqQixNQUFNVSxRQUFRLElBQUlDLE1BQU1YLE1BQU1ZLFVBQVU7WUFDeENGLE1BQU1HLGdCQUFnQixDQUFDLGtCQUFrQjtnQkFDdkNMLFNBQVMsQ0FBQ1IsTUFBTWMsRUFBRSxDQUFDLEdBQUdKLE1BQU1LLFFBQVE7Z0JBQ3BDVCxrQkFBa0I7b0JBQUUsR0FBR0UsU0FBUztnQkFBQztZQUNuQztZQUNBRCxVQUFVUyxPQUFPLENBQUNoQixNQUFNYyxFQUFFLENBQUMsR0FBR0o7UUFDaEM7UUFDQSxPQUFPO1lBQ0xPLE9BQU9DLE1BQU0sQ0FBQ1gsVUFBVVMsT0FBTyxFQUFFUCxPQUFPLENBQUMsQ0FBQ0M7Z0JBQ3hDQSxNQUFNUyxLQUFLO2dCQUNYVCxNQUFNVSxlQUFlLENBQUM7Z0JBQ3RCVixNQUFNVyxJQUFJO1lBQ1o7UUFDRjtJQUNGLEdBQUc7UUFBQ3hCO0tBQVU7SUFFZCxxQkFDRSw4REFBQ3lCO1FBQUlDLFdBQVdwQyxpREFBVUEsQ0FBQ0Qsb0ZBQXNCLEVBQUVBLDZFQUFlO2tCQUMvRFcsVUFBVTZCLEdBQUcsQ0FBQyxDQUFDdEIsdUJBQ2QsOERBQUNaLGtFQUFZQTtnQkFFWG1DLE1BQU12QixPQUFPdUIsSUFBSTtnQkFDakJDLFFBQVF4QixPQUFPd0IsTUFBTTtnQkFDckJDLE9BQU96QixPQUFPeUIsS0FBSztnQkFDbkJkLFVBQVVWLGNBQWMsQ0FBQ0QsT0FBT1UsRUFBRSxDQUFDO2dCQUNuQ2dCLFVBQVUsSUFBTTNCLFlBQVlDO2dCQUM1QjJCLFlBQVkzQixPQUFPVSxFQUFFLE1BQUtkLGtCQUFBQSw0QkFBQUEsTUFBT2MsRUFBRTtlQU45QlYsT0FBT1UsRUFBRTs7Ozs7Ozs7OztBQVl4QjtHQWxETWxCOztRQU1jSCxrREFBY0E7OztLQU41Qkc7QUFvRE4sK0RBQWVBLGVBQWVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ29udGVudFBsYXlsaXN0L0NvbnRlbnRQbGF5bGlzdC50c3g/M2NmYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL0NvbnRlbnRQbGF5bGlzdC5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUGxheUxpc3RJdGVtIH0gZnJvbSBcIkBjb21wb25lbnRzL1BsYXlMaXN0SXRlbVwiO1xuaW1wb3J0IHsgdHJhY2tUeXBlIH0gZnJvbSBcIkAvdHlwZXMvdHlwZXNcIjtcbi8vIGltcG9ydCB7IHVzZUFwcERpc3BhdGNoLCB1c2VBcHBTZWxlY3RvciB9IGZyb20gXCJAL3N0b3JlL3N0b3JlXCI7XG5pbXBvcnQgeyB1c2VBcHBTZWxlY3RvciB9IGZyb20gXCJAL2hvb2tzXCI7XG5pbXBvcnQgeyBzZXRDdXJyZW50VHJhY2ssIHNldFBsYXlMaXN0IH0gZnJvbSBcIkAvc3RvcmUvZmVhdHVyZXMvdHJhY2tzU2xpY2VcIjtcblxudHlwZSBDb250ZW50UGxheUxpc3RQcm9wcyA9IHtcbiAgdHJhY2tMaXN0OiB0cmFja1R5cGVbXTtcbn07XG5cbmNvbnN0IENvbnRlbnRQbGF5bGlzdCA9ICh7XG4gIHRyYWNrTGlzdCxcbn06IENvbnRlbnRQbGF5TGlzdFByb3BzKSA9PiB7XG5cbiAgLy8gUmVkdXggdG9vbHM6IHNldCB0aGUgdHJhY2sgcGxheWluZ1xuICBjb25zdCBkaXNwYXRjaGVyID0gdXNlQXBwRGlzcGF0Y2goKTtcbiAgY29uc3QgeyB0cmFjayB9ID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS50cmFja3MpO1xuICBjb25zdCBoYW5kbGVUcmFjayA9ICh0cmFja1I6IHRyYWNrVHlwZSkgPT4ge1xuICAgIGRpc3BhdGNoZXIoc2V0Q3VycmVudFRyYWNrKHRyYWNrUikpO1xuICAgIGRpc3BhdGNoZXIoc2V0UGxheUxpc3QodHJhY2tMaXN0KSk7XG4gIH07XG5cbiAgLy8gYWRkIGEgZHVyYXRpb24gZnJvbSBhdWRpbyBwcm9wcyB0byBlYWNoIHRyYWNrXG4gIGNvbnN0IFt0cmFja0R1cmF0aW9ucywgc2V0VHJhY2tEdXJhdGlvbnNdID0gdXNlU3RhdGU8eyBba2V5OiBzdHJpbmddOiBudW1iZXIgfT4oe30pO1xuICBjb25zdCBhdWRpb1JlZnMgPSB1c2VSZWY8eyBba2V5OiBzdHJpbmddOiBIVE1MQXVkaW9FbGVtZW50IH0+KHt9KTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBkdXJhdGlvbnM6IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH0gPSB7fTtcbiAgICB0cmFja0xpc3QuZm9yRWFjaCgodHJhY2spID0+IHtcbiAgICAgIGNvbnN0IGF1ZGlvID0gbmV3IEF1ZGlvKHRyYWNrLnRyYWNrX2ZpbGUpO1xuICAgICAgYXVkaW8uYWRkRXZlbnRMaXN0ZW5lcignbG9hZGVkbWV0YWRhdGEnLCAoKSA9PiB7XG4gICAgICAgIGR1cmF0aW9uc1t0cmFjay5pZF0gPSBhdWRpby5kdXJhdGlvbjtcbiAgICAgICAgc2V0VHJhY2tEdXJhdGlvbnMoeyAuLi5kdXJhdGlvbnMgfSk7XG4gICAgICB9KTtcbiAgICAgIGF1ZGlvUmVmcy5jdXJyZW50W3RyYWNrLmlkXSA9IGF1ZGlvO1xuICAgIH0pO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBPYmplY3QudmFsdWVzKGF1ZGlvUmVmcy5jdXJyZW50KS5mb3JFYWNoKChhdWRpbykgPT4ge1xuICAgICAgICBhdWRpby5wYXVzZSgpO1xuICAgICAgICBhdWRpby5yZW1vdmVBdHRyaWJ1dGUoJ3NyYycpO1xuICAgICAgICBhdWRpby5sb2FkKCk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9LCBbdHJhY2tMaXN0XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMuY29udGVudFBsYXlsaXN0LCBzdHlsZXMucGxheWxpc3QpfT5cbiAgICAgIHt0cmFja0xpc3QubWFwKCh0cmFja1IpID0+IChcbiAgICAgICAgPFBsYXlMaXN0SXRlbVxuICAgICAgICAgIGtleT17dHJhY2tSLmlkfVxuICAgICAgICAgIG5hbWU9e3RyYWNrUi5uYW1lfVxuICAgICAgICAgIGF1dGhvcj17dHJhY2tSLmF1dGhvcn1cbiAgICAgICAgICBhbGJ1bT17dHJhY2tSLmFsYnVtfVxuICAgICAgICAgIGR1cmF0aW9uPXt0cmFja0R1cmF0aW9uc1t0cmFja1IuaWRdfVxuICAgICAgICAgIHNldFRyYWNrPXsoKSA9PiBoYW5kbGVUcmFjayh0cmFja1IpfVxuICAgICAgICAgIGlzU2V0VHJhY2s9e3RyYWNrUi5pZCA9PT0gdHJhY2s/LmlkfVxuICAgICAgICAvPlxuICAgICAgKSlcbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRQbGF5bGlzdDtcbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJjbGFzc05hbWVzIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIlBsYXlMaXN0SXRlbSIsInVzZUFwcFNlbGVjdG9yIiwic2V0Q3VycmVudFRyYWNrIiwic2V0UGxheUxpc3QiLCJDb250ZW50UGxheWxpc3QiLCJ0cmFja0xpc3QiLCJkaXNwYXRjaGVyIiwidXNlQXBwRGlzcGF0Y2giLCJ0cmFjayIsInN0YXRlIiwidHJhY2tzIiwiaGFuZGxlVHJhY2siLCJ0cmFja1IiLCJ0cmFja0R1cmF0aW9ucyIsInNldFRyYWNrRHVyYXRpb25zIiwiYXVkaW9SZWZzIiwiZHVyYXRpb25zIiwiZm9yRWFjaCIsImF1ZGlvIiwiQXVkaW8iLCJ0cmFja19maWxlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImlkIiwiZHVyYXRpb24iLCJjdXJyZW50IiwiT2JqZWN0IiwidmFsdWVzIiwicGF1c2UiLCJyZW1vdmVBdHRyaWJ1dGUiLCJsb2FkIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGVudFBsYXlsaXN0IiwicGxheWxpc3QiLCJtYXAiLCJuYW1lIiwiYXV0aG9yIiwiYWxidW0iLCJzZXRUcmFjayIsImlzU2V0VHJhY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ContentPlaylist/ContentPlaylist.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/Main/Main.tsx":
/*!**************************************!*\
  !*** ./src/components/Main/Main.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Main; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _Main_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Main.module.css */ \"(app-pages-browser)/./src/components/Main/Main.module.css\");\n/* harmony import */ var _Main_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Main_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Nav */ \"(app-pages-browser)/./src/components/Nav/index.tsx\");\n/* harmony import */ var _components_CenterBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/CenterBlock */ \"(app-pages-browser)/./src/components/CenterBlock/index.tsx\");\n/* harmony import */ var _components_MainSlideBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/MainSlideBar */ \"(app-pages-browser)/./src/components/MainSlideBar/index.tsx\");\n/* harmony import */ var _components_Bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Bar */ \"(app-pages-browser)/./src/components/Bar/index.tsx\");\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/hooks */ \"(app-pages-browser)/./src/hooks.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Main() {\n    _s();\n    const { track } = (0,_hooks__WEBPACK_IMPORTED_MODULE_5__.useAppSelector)((state)=>state.tracks);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_Main_module_css__WEBPACK_IMPORTED_MODULE_6___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Nav__WEBPACK_IMPORTED_MODULE_1__.Nav, {}, void 0, false, {\n                        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\Main\\\\Main.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CenterBlock__WEBPACK_IMPORTED_MODULE_2__.CenterBlock, {}, void 0, false, {\n                        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\Main\\\\Main.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MainSlideBar__WEBPACK_IMPORTED_MODULE_3__.MainSlideBar, {}, void 0, false, {\n                        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\Main\\\\Main.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\Main\\\\Main.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            track && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Bar__WEBPACK_IMPORTED_MODULE_4__.Bar, {}, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\Main\\\\Main.tsx\",\n                lineNumber: 18,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: \"footer\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\Main\\\\Main.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Main, \"i+dXdKx0uwBrAU2FOovtwWguAsE=\", false, function() {\n    return [\n        _hooks__WEBPACK_IMPORTED_MODULE_5__.useAppSelector\n    ];\n});\n_c = Main;\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL01haW4vTWFpbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDdUM7QUFDRDtBQUNpQjtBQUNDO0FBQ2xCO0FBQ0c7QUFFMUIsU0FBU007O0lBQ3RCLE1BQU0sRUFBRUMsS0FBSyxFQUFFLEdBQUdGLHNEQUFjQSxDQUFDLENBQUNHLFFBQVVBLE1BQU1DLE1BQU07SUFDeEQscUJBQ0U7OzBCQUNFLDhEQUFDQztnQkFBS0MsV0FBV1gsOERBQVc7O2tDQUMxQiw4REFBQ0MsZ0RBQUdBOzs7OztrQ0FDSiw4REFBQ0MsZ0VBQVdBOzs7OztrQ0FDWiw4REFBQ0Msa0VBQVlBOzs7Ozs7Ozs7OztZQUVkSSx1QkFBUyw4REFBQ0gsZ0RBQUdBOzs7OzswQkFDZCw4REFBQ1E7Z0JBQU9ELFdBQVU7Ozs7Ozs7O0FBR3hCO0dBYndCTDs7UUFDSkQsa0RBQWNBOzs7S0FEVkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWFpbi9NYWluLnRzeD9hMTAxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL01haW4ubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgTmF2IH0gZnJvbSBcIkBjb21wb25lbnRzL05hdlwiO1xuaW1wb3J0IHsgQ2VudGVyQmxvY2sgfSBmcm9tIFwiQC9jb21wb25lbnRzL0NlbnRlckJsb2NrXCI7XG5pbXBvcnQgeyBNYWluU2xpZGVCYXIgfSBmcm9tIFwiQGNvbXBvbmVudHMvTWFpblNsaWRlQmFyXCI7XG5pbXBvcnQgeyBCYXIgfSBmcm9tIFwiQGNvbXBvbmVudHMvQmFyXCI7XG5pbXBvcnQgeyB1c2VBcHBTZWxlY3RvciB9IGZyb20gXCJAL2hvb2tzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW4oKSB7XG4gIGNvbnN0IHsgdHJhY2sgfSA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudHJhY2tzKVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPE5hdiAvPlxuICAgICAgICA8Q2VudGVyQmxvY2sgLz5cbiAgICAgICAgPE1haW5TbGlkZUJhciAvPlxuICAgICAgPC9tYWluPlxuICAgICAge3RyYWNrICYmIDxCYXIgLz59XG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImZvb3RlclwiPjwvZm9vdGVyPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInN0eWxlcyIsIk5hdiIsIkNlbnRlckJsb2NrIiwiTWFpblNsaWRlQmFyIiwiQmFyIiwidXNlQXBwU2VsZWN0b3IiLCJNYWluIiwidHJhY2siLCJzdGF0ZSIsInRyYWNrcyIsIm1haW4iLCJjbGFzc05hbWUiLCJmb290ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Main/Main.tsx\n"));

/***/ })

});