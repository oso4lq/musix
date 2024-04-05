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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _ContentPlaylist_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ContentPlaylist.module.css */ \"(app-pages-browser)/./src/components/ContentPlaylist/ContentPlaylist.module.css\");\n/* harmony import */ var _ContentPlaylist_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ContentPlaylist_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks */ \"(app-pages-browser)/./src/hooks.ts\");\n/* harmony import */ var _store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store/features/tracksSlice */ \"(app-pages-browser)/./src/store/features/tracksSlice.ts\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/api */ \"(app-pages-browser)/./src/api.tsx\");\n/* harmony import */ var _components_PlayListItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/PlayListItem */ \"(app-pages-browser)/./src/components/PlayListItem/index.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst ContentPlaylist = ()=>{\n    _s();\n    const dispatcher = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch)();\n    const playList = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.tracks.playList);\n    const searchPlayList = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.tracks.searchPlaylist);\n    const { track } = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.tracks);\n    const isSearch = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.tracks.isSearch);\n    const activeFilters = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.tracks.activeFilters);\n    // get the tracklist from API\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        (0,_api__WEBPACK_IMPORTED_MODULE_5__.getTracks)().then((data)=>{\n            dispatcher((0,_store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_4__.setPlayList)(data));\n        });\n    }, [\n        dispatcher\n    ]);\n    // Redux tools: set the track playing\n    const handleTrack = (trackR)=>{\n        dispatcher((0,_store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_4__.setCurrentTrack)(trackR));\n    };\n    // add a duration from audio props to each track\n    const [trackDurations, setTrackDurations] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});\n    const audioRefs = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)({});\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const durations = {};\n        playList === null || playList === void 0 ? void 0 : playList.forEach((track)=>{\n            const audio = new Audio(track.track_file);\n            audio.addEventListener(\"loadedmetadata\", ()=>{\n                durations[track.id] = audio.duration;\n                setTrackDurations({\n                    ...durations\n                });\n            });\n            audioRefs.current[track.id] = audio;\n        });\n        return ()=>{\n            Object.values(audioRefs.current).forEach((audio)=>{\n                audio.pause();\n                audio.removeAttribute(\"src\");\n                audio.load();\n            });\n        };\n    }, [\n        playList\n    ]);\n    // how it works\n    // first, we need to determ\n    // determine which tracklist to render, default or search\n    const tracksToRender = isSearch ? searchPlayList : playList;\n    // filter tracks by artists and genres\n    const filterTracks = (tracks)=>{\n        return tracks.filter((track)=>{\n            const isAuthorsMatch = activeFilters.authors.length === 0 || activeFilters.authors.includes(track.author);\n            const isGenresMatch = activeFilters.genres.length === 0 || activeFilters.genres.includes(track.genre);\n            return isAuthorsMatch && isGenresMatch;\n        });\n    };\n    // sort tracks by release date\n    const sortTracksByReleaseDate = (tracks, order)=>{\n        return tracks.sort((a, b)=>{\n            const dateA = new Date(a.release_date).getTime();\n            const dateB = new Date(b.release_date).getTime();\n            switch(order){\n                case \"New first\":\n                    return dateB - dateA;\n                case \"Old first\":\n                    return dateA - dateB;\n                default:\n                    return 0;\n            }\n        });\n    };\n    // useMemo to save the result of applied filters\n    const filteredAndSortedPlaylist = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{\n        const filteredTracks = filterTracks(tracksToRender);\n        if (activeFilters.release_dates) {\n            return sortTracksByReleaseDate(filteredTracks, activeFilters.release_dates);\n        } else {\n            return filteredTracks;\n        }\n    }, [\n        tracksToRender,\n        activeFilters\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_ContentPlaylist_module_css__WEBPACK_IMPORTED_MODULE_7___default().contentPlaylist), (_ContentPlaylist_module_css__WEBPACK_IMPORTED_MODULE_7___default().playlist)),\n        children: isSearch && tracksToRender.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: (_ContentPlaylist_module_css__WEBPACK_IMPORTED_MODULE_7___default().playlistTitleCol),\n            children: \"No tracks found\"\n        }, void 0, false, {\n            fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\ContentPlaylist\\\\ContentPlaylist.tsx\",\n            lineNumber: 101,\n            columnNumber: 9\n        }, undefined) : filteredAndSortedPlaylist.map((trackR)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PlayListItem__WEBPACK_IMPORTED_MODULE_6__.PlayListItem, {\n                name: trackR.name,\n                author: trackR.author,\n                album: trackR.album,\n                duration: trackDurations[trackR.id],\n                setTrack: ()=>handleTrack(trackR),\n                isSetTrack: trackR.id === (track === null || track === void 0 ? void 0 : track.id)\n            }, trackR.id, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\ContentPlaylist\\\\ContentPlaylist.tsx\",\n                lineNumber: 104,\n                columnNumber: 11\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\ContentPlaylist\\\\ContentPlaylist.tsx\",\n        lineNumber: 99,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ContentPlaylist, \"HNKUotDgZO28YTSibyl6U7l5tEw=\", false, function() {\n    return [\n        _hooks__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch,\n        _hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        _hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        _hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        _hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        _hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector\n    ];\n});\n_c = ContentPlaylist;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContentPlaylist);\nvar _c;\n$RefreshReg$(_c, \"ContentPlaylist\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0NvbnRlbnRQbGF5bGlzdC9Db250ZW50UGxheWxpc3QudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRWtEO0FBQ2Q7QUFDZ0M7QUFFWDtBQUNtQjtBQUMxQztBQUNzQjtBQUV4RCxNQUFNYSxrQkFBa0I7O0lBRXRCLE1BQU1DLGFBQWFQLHNEQUFjQTtJQUNqQyxNQUFNUSxXQUFXUCxzREFBY0EsQ0FBQyxDQUFDUSxRQUFVQSxNQUFNQyxNQUFNLENBQUNGLFFBQVE7SUFDaEUsTUFBTUcsaUJBQWlCVixzREFBY0EsQ0FBQyxDQUFDUSxRQUFVQSxNQUFNQyxNQUFNLENBQUNFLGNBQWM7SUFDNUUsTUFBTSxFQUFFQyxLQUFLLEVBQUUsR0FBR1osc0RBQWNBLENBQUMsQ0FBQ1EsUUFBVUEsTUFBTUMsTUFBTTtJQUN4RCxNQUFNSSxXQUFXYixzREFBY0EsQ0FBQyxDQUFDUSxRQUFVQSxNQUFNQyxNQUFNLENBQUNJLFFBQVE7SUFFaEUsTUFBTUMsZ0JBQWdCZCxzREFBY0EsQ0FBQyxDQUFDUSxRQUFVQSxNQUFNQyxNQUFNLENBQUNLLGFBQWE7SUFFMUUsNkJBQTZCO0lBQzdCbkIsZ0RBQVNBLENBQUM7UUFDUlEsK0NBQVNBLEdBQUdZLElBQUksQ0FBQyxDQUFDQztZQUNoQlYsV0FBV0osd0VBQVdBLENBQUNjO1FBQ3pCO0lBQ0YsR0FBRztRQUFDVjtLQUFXO0lBQ2YscUNBQXFDO0lBQ3JDLE1BQU1XLGNBQWMsQ0FBQ0M7UUFDbkJaLFdBQVdMLDRFQUFlQSxDQUFDaUI7SUFDN0I7SUFDQSxnREFBZ0Q7SUFDaEQsTUFBTSxDQUFDQyxnQkFBZ0JDLGtCQUFrQixHQUFHdEIsK0NBQVFBLENBQTRCLENBQUM7SUFDakYsTUFBTXVCLFlBQVl4Qiw2Q0FBTUEsQ0FBc0MsQ0FBQztJQUMvREYsZ0RBQVNBLENBQUM7UUFDUixNQUFNMkIsWUFBdUMsQ0FBQztRQUM5Q2YscUJBQUFBLCtCQUFBQSxTQUFVZ0Is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UmhDSztBQTJHTiwrREFBZUEsZUFBZUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Db250ZW50UGxheWxpc3QvQ29udGVudFBsYXlsaXN0LnRzeD8zY2ZjIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vQ29udGVudFBsYXlsaXN0Lm1vZHVsZS5jc3NcIjtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdHJhY2tUeXBlIH0gZnJvbSAnQC90eXBlcy90eXBlcyc7XG5pbXBvcnQgeyB1c2VBcHBEaXNwYXRjaCwgdXNlQXBwU2VsZWN0b3IgfSBmcm9tICdAL2hvb2tzJztcbmltcG9ydCB7IHNldEN1cnJlbnRUcmFjaywgc2V0UGxheUxpc3QgfSBmcm9tICdAL3N0b3JlL2ZlYXR1cmVzL3RyYWNrc1NsaWNlJztcbmltcG9ydCB7IGdldFRyYWNrcyB9IGZyb20gJ0AvYXBpJztcbmltcG9ydCB7IFBsYXlMaXN0SXRlbSB9IGZyb20gJ0Bjb21wb25lbnRzL1BsYXlMaXN0SXRlbSc7XG5cbmNvbnN0IENvbnRlbnRQbGF5bGlzdCA9ICgpID0+IHtcblxuICBjb25zdCBkaXNwYXRjaGVyID0gdXNlQXBwRGlzcGF0Y2goKTtcbiAgY29uc3QgcGxheUxpc3QgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnRyYWNrcy5wbGF5TGlzdCk7XG4gIGNvbnN0IHNlYXJjaFBsYXlMaXN0ID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS50cmFja3Muc2VhcmNoUGxheWxpc3QpO1xuICBjb25zdCB7IHRyYWNrIH0gPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnRyYWNrcyk7XG4gIGNvbnN0IGlzU2VhcmNoID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS50cmFja3MuaXNTZWFyY2gpO1xuXG4gIGNvbnN0IGFjdGl2ZUZpbHRlcnMgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnRyYWNrcy5hY3RpdmVGaWx0ZXJzKTtcblxuICAvLyBnZXQgdGhlIHRyYWNrbGlzdCBmcm9tIEFQSVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldFRyYWNrcygpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGRpc3BhdGNoZXIoc2V0UGxheUxpc3QoZGF0YSkpO1xuICAgIH0pO1xuICB9LCBbZGlzcGF0Y2hlcl0pO1xuICAvLyBSZWR1eCB0b29sczogc2V0IHRoZSB0cmFjayBwbGF5aW5nXG4gIGNvbnN0IGhhbmRsZVRyYWNrID0gKHRyYWNrUjogdHJhY2tUeXBlKSA9PiB7XG4gICAgZGlzcGF0Y2hlcihzZXRDdXJyZW50VHJhY2sodHJhY2tSKSk7XG4gIH07XG4gIC8vIGFkZCBhIGR1cmF0aW9uIGZyb20gYXVkaW8gcHJvcHMgdG8gZWFjaCB0cmFja1xuICBjb25zdCBbdHJhY2tEdXJhdGlvbnMsIHNldFRyYWNrRHVyYXRpb25zXSA9IHVzZVN0YXRlPHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH0+KHt9KTtcbiAgY29uc3QgYXVkaW9SZWZzID0gdXNlUmVmPHsgW2tleTogc3RyaW5nXTogSFRNTEF1ZGlvRWxlbWVudCB9Pih7fSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZHVyYXRpb25zOiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9ID0ge307XG4gICAgcGxheUxpc3Q/LmZvckVhY2goKHRyYWNrOiB0cmFja1R5cGUpID0+IHtcbiAgICAgIGNvbnN0IGF1ZGlvID0gbmV3IEF1ZGlvKHRyYWNrLnRyYWNrX2ZpbGUpO1xuICAgICAgYXVkaW8uYWRkRXZlbnRMaXN0ZW5lcignbG9hZGVkbWV0YWRhdGEnLCAoKSA9PiB7XG4gICAgICAgIGR1cmF0aW9uc1t0cmFjay5pZF0gPSBhdWRpby5kdXJhdGlvbjtcbiAgICAgICAgc2V0VHJhY2tEdXJhdGlvbnMoeyAuLi5kdXJhdGlvbnMgfSk7XG4gICAgICB9KTtcbiAgICAgIGF1ZGlvUmVmcy5jdXJyZW50W3RyYWNrLmlkXSA9IGF1ZGlvO1xuICAgIH0pO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBPYmplY3QudmFsdWVzKGF1ZGlvUmVmcy5jdXJyZW50KS5mb3JFYWNoKChhdWRpbykgPT4ge1xuICAgICAgICBhdWRpby5wYXVzZSgpO1xuICAgICAgICBhdWRpby5yZW1vdmVBdHRyaWJ1dGUoJ3NyYycpO1xuICAgICAgICBhdWRpby5sb2FkKCk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9LCBbcGxheUxpc3RdKTtcblxuICAvLyBob3cgaXQgd29ya3NcbiAgLy8gZmlyc3QsIHdlIG5lZWQgdG8gZGV0ZXJtXG5cbiAgLy8gZGV0ZXJtaW5lIHdoaWNoIHRyYWNrbGlzdCB0byByZW5kZXIsIGRlZmF1bHQgb3Igc2VhcmNoXG4gIGNvbnN0IHRyYWNrc1RvUmVuZGVyID0gaXNTZWFyY2ggPyBzZWFyY2hQbGF5TGlzdCA6IHBsYXlMaXN0O1xuXG4gIC8vIGZpbHRlciB0cmFja3MgYnkgYXJ0aXN0cyBhbmQgZ2VucmVzXG4gIGNvbnN0IGZpbHRlclRyYWNrcyA9ICh0cmFja3M6IHRyYWNrVHlwZVtdKSA9PiB7XG4gICAgcmV0dXJuIHRyYWNrcy5maWx0ZXIoKHRyYWNrKSA9PiB7XG4gICAgICBjb25zdCBpc0F1dGhvcnNNYXRjaCA9IGFjdGl2ZUZpbHRlcnMuYXV0aG9ycy5sZW5ndGggPT09IDAgfHwgYWN0aXZlRmlsdGVycy5hdXRob3JzLmluY2x1ZGVzKHRyYWNrLmF1dGhvcik7XG4gICAgICBjb25zdCBpc0dlbnJlc01hdGNoID0gYWN0aXZlRmlsdGVycy5nZW5yZXMubGVuZ3RoID09PSAwIHx8IGFjdGl2ZUZpbHRlcnMuZ2VucmVzLmluY2x1ZGVzKHRyYWNrLmdlbnJlKTtcbiAgICAgIHJldHVybiBpc0F1dGhvcnNNYXRjaCAmJiBpc0dlbnJlc01hdGNoO1xuICAgIH0pO1xuICB9O1xuXG4gIC8vIHNvcnQgdHJhY2tzIGJ5IHJlbGVhc2UgZGF0ZVxuICBjb25zdCBzb3J0VHJhY2tzQnlSZWxlYXNlRGF0ZSA9ICh0cmFja3M6IHRyYWNrVHlwZVtdLCBvcmRlcjogc3RyaW5nKSA9PiB7XG4gICAgcmV0dXJuIHRyYWNrcy5zb3J0KChhLCBiKSA9PiB7XG5cbiAgICAgIGNvbnN0IGRhdGVBID0gbmV3IERhdGUoYS5yZWxlYXNlX2RhdGUpLmdldFRpbWUoKTtcbiAgICAgIGNvbnN0IGRhdGVCID0gbmV3IERhdGUoYi5yZWxlYXNlX2RhdGUpLmdldFRpbWUoKTtcblxuICAgICAgc3dpdGNoIChvcmRlcikge1xuICAgICAgICBjYXNlICdOZXcgZmlyc3QnOlxuICAgICAgICAgIHJldHVybiBkYXRlQiAtIGRhdGVBO1xuICAgICAgICBjYXNlICdPbGQgZmlyc3QnOlxuICAgICAgICAgIHJldHVybiBkYXRlQSAtIGRhdGVCO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIC8vIHVzZU1lbW8gdG8gc2F2ZSB0aGUgcmVzdWx0IG9mIGFwcGxpZWQgZmlsdGVyc1xuICBjb25zdCBmaWx0ZXJlZEFuZFNvcnRlZFBsYXlsaXN0ID0gdXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgZmlsdGVyZWRUcmFja3MgPSBmaWx0ZXJUcmFja3ModHJhY2tzVG9SZW5kZXIpO1xuXG4gICAgaWYgKGFjdGl2ZUZpbHRlcnMucmVsZWFzZV9kYXRlcykge1xuICAgICAgcmV0dXJuIHNvcnRUcmFja3NCeVJlbGVhc2VEYXRlKGZpbHRlcmVkVHJhY2tzLCBhY3RpdmVGaWx0ZXJzLnJlbGVhc2VfZGF0ZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmlsdGVyZWRUcmFja3M7XG4gICAgfVxuICB9LCBbdHJhY2tzVG9SZW5kZXIsIGFjdGl2ZUZpbHRlcnNdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5jb250ZW50UGxheWxpc3QsIHN0eWxlcy5wbGF5bGlzdCl9PlxuICAgICAge2lzU2VhcmNoICYmIHRyYWNrc1RvUmVuZGVyLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucGxheWxpc3RUaXRsZUNvbH0+Tm8gdHJhY2tzIGZvdW5kPC9wPlxuICAgICAgKSA6IChcbiAgICAgICAgZmlsdGVyZWRBbmRTb3J0ZWRQbGF5bGlzdC5tYXAoKHRyYWNrUjogdHJhY2tUeXBlKSA9PiAoXG4gICAgICAgICAgPFBsYXlMaXN0SXRlbVxuICAgICAgICAgICAga2V5PXt0cmFja1IuaWR9XG4gICAgICAgICAgICBuYW1lPXt0cmFja1IubmFtZX1cbiAgICAgICAgICAgIGF1dGhvcj17dHJhY2tSLmF1dGhvcn1cbiAgICAgICAgICAgIGFsYnVtPXt0cmFja1IuYWxidW19XG4gICAgICAgICAgICBkdXJhdGlvbj17dHJhY2tEdXJhdGlvbnNbdHJhY2tSLmlkXX1cbiAgICAgICAgICAgIHNldFRyYWNrPXsoKSA9PiBoYW5kbGVUcmFjayh0cmFja1IpfVxuICAgICAgICAgICAgaXNTZXRUcmFjaz17dHJhY2tSLmlkID09PSB0cmFjaz8uaWR9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSlcbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50UGxheWxpc3Q7XG4iXSwibmFtZXMiOlsic3R5bGVzIiwiY2xhc3NOYW1lcyIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlTWVtbyIsInVzZVJlZiIsInVzZVN0YXRlIiwidXNlQXBwRGlzcGF0Y2giLCJ1c2VBcHBTZWxlY3RvciIsInNldEN1cnJlbnRUcmFjayIsInNldFBsYXlMaXN0IiwiZ2V0VHJhY2tzIiwiUGxheUxpc3RJdGVtIiwiQ29udGVudFBsYXlsaXN0IiwiZGlzcGF0Y2hlciIsInBsYXlMaXN0Iiwic3RhdGUiLCJ0cmFja3MiLCJzZWFyY2hQbGF5TGlzdCIsInNlYXJjaFBsYXlsaXN0IiwidHJhY2siLCJpc1NlYXJjaCIsImFjdGl2ZUZpbHRlcnMiLCJ0aGVuIiwiZGF0YSIsImhhbmRsZVRyYWNrIiwidHJhY2tSIiwidHJhY2tEdXJhdGlvbnMiLCJzZXRUcmFja0R1cmF0aW9ucyIsImF1ZGlvUmVmcyIsImR1cmF0aW9ucyIsImZvckVhY2giLCJhdWRpbyIsIkF1ZGlvIiwidHJhY2tfZmlsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJpZCIsImR1cmF0aW9uIiwiY3VycmVudCIsIk9iamVjdCIsInZhbHVlcyIsInBhdXNlIiwicmVtb3ZlQXR0cmlidXRlIiwibG9hZCIsInRyYWNrc1RvUmVuZGVyIiwiZmlsdGVyVHJhY2tzIiwiZmlsdGVyIiwiaXNBdXRob3JzTWF0Y2giLCJhdXRob3JzIiwibGVuZ3RoIiwiaW5jbHVkZXMiLCJhdXRob3IiLCJpc0dlbnJlc01hdGNoIiwiZ2VucmVzIiwiZ2VucmUiLCJzb3J0VHJhY2tzQnlSZWxlYXNlRGF0ZSIsIm9yZGVyIiwic29ydCIsImEiLCJiIiwiZGF0ZUEiLCJEYXRlIiwicmVsZWFzZV9kYXRlIiwiZ2V0VGltZSIsImRhdGVCIiwiZmlsdGVyZWRBbmRTb3J0ZWRQbGF5bGlzdCIsImZpbHRlcmVkVHJhY2tzIiwicmVsZWFzZV9kYXRlcyIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRlbnRQbGF5bGlzdCIsInBsYXlsaXN0IiwicCIsInBsYXlsaXN0VGl0bGVDb2wiLCJtYXAiLCJuYW1lIiwiYWxidW0iLCJzZXRUcmFjayIsImlzU2V0VHJhY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ContentPlaylist/ContentPlaylist.tsx\n"));

/***/ })

});