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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _ContentPlaylist_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ContentPlaylist.module.css */ \"(app-pages-browser)/./src/components/ContentPlaylist/ContentPlaylist.module.css\");\n/* harmony import */ var _ContentPlaylist_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ContentPlaylist_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks */ \"(app-pages-browser)/./src/hooks.ts\");\n/* harmony import */ var _store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store/features/tracksSlice */ \"(app-pages-browser)/./src/store/features/tracksSlice.ts\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/api */ \"(app-pages-browser)/./src/api.tsx\");\n/* harmony import */ var _components_PlayListItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/PlayListItem */ \"(app-pages-browser)/./src/components/PlayListItem/index.tsx\");\n/* harmony import */ var _lib_sortTracksByReleaseDate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/lib/sortTracksByReleaseDate */ \"(app-pages-browser)/./src/lib/sortTracksByReleaseDate.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst ContentPlaylist = ()=>{\n    _s();\n    const dispatcher = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch)();\n    const playList = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.tracks.playList);\n    const searchPlayList = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.tracks.searchPlaylist);\n    const { track } = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.tracks);\n    const isSearch = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.tracks.isSearch);\n    const activeFilters = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.tracks.activeFilters);\n    // check playlist number 1/2/3\n    const playlistNumber = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.tracks.playlistNumber);\n    // get the tracklist from API\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        (0,_api__WEBPACK_IMPORTED_MODULE_5__.getTracks)(playlistNumber).then((data)=>{\n            // check if the data is wrapped\n            data.items ? dispatcher((0,_store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_4__.setPlayList)(data.items)) : dispatcher((0,_store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_4__.setPlayList)(data));\n        });\n    }, [\n        dispatcher,\n        playlistNumber\n    ]);\n    // Redux tools: set the track playing\n    const handleTrack = (trackR)=>{\n        dispatcher((0,_store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_4__.setCurrentTrack)(trackR));\n    };\n    // add a duration from audio props to each track\n    const [trackDurations, setTrackDurations] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});\n    const audioRefs = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)({});\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const durations = {};\n        playList === null || playList === void 0 ? void 0 : playList.forEach((track)=>{\n            const audio = new Audio(track.track_file);\n            audio.addEventListener(\"loadedmetadata\", ()=>{\n                durations[track.id] = audio.duration;\n                setTrackDurations({\n                    ...durations\n                });\n            });\n            audioRefs.current[track.id] = audio;\n        });\n        return ()=>{\n            Object.values(audioRefs.current).forEach((audio)=>{\n                audio.pause();\n                audio.removeAttribute(\"src\");\n                audio.load();\n            });\n        };\n    }, [\n        playList\n    ]);\n    // HOW IT WORKS\n    // First, check if the searchbar contains any value. If true, apply other filters to the search result.\n    // Second, check what artists and genres filters are applied.\n    // Third, memorize the result of applied search and filters. Here is the third check of sortTracksByReleaseDate.\n    // If true, apply sortTracksByReleaseDate to filteredTracks object. If false, simply return filteredTracks.\n    // determine which tracklist to render, default or search\n    const tracksToRender = isSearch ? searchPlayList : playList;\n    // filter tracks by artists and genres\n    const filterTracks = (tracks)=>{\n        return tracks.filter((track)=>{\n            const isAuthorsMatch = activeFilters.authors.length === 0 || activeFilters.authors.includes(track.author);\n            const isGenresMatch = activeFilters.genres.length === 0 || activeFilters.genres.includes(track.genre);\n            return isAuthorsMatch && isGenresMatch;\n        });\n    };\n    // useMemo to save the result of applied filters\n    const filteredAndSortedPlaylist = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{\n        const filteredTracks = filterTracks(tracksToRender);\n        if (activeFilters.release_dates) {\n            return (0,_lib_sortTracksByReleaseDate__WEBPACK_IMPORTED_MODULE_7__.sortTracksByReleaseDate)(filteredTracks, activeFilters.release_dates);\n        } else {\n            return filteredTracks;\n        }\n    }, [\n        tracksToRender,\n        activeFilters\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_ContentPlaylist_module_css__WEBPACK_IMPORTED_MODULE_8___default().contentPlaylist), (_ContentPlaylist_module_css__WEBPACK_IMPORTED_MODULE_8___default().playlist)),\n        children: isSearch && tracksToRender.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: (_ContentPlaylist_module_css__WEBPACK_IMPORTED_MODULE_8___default().playlistTitleCol),\n            children: \"No tracks found\"\n        }, void 0, false, {\n            fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\ContentPlaylist\\\\ContentPlaylist.tsx\",\n            lineNumber: 91,\n            columnNumber: 9\n        }, undefined) : filteredAndSortedPlaylist.map((trackR)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PlayListItem__WEBPACK_IMPORTED_MODULE_6__.PlayListItem, {\n                id: trackR.id,\n                name: trackR.name,\n                author: trackR.author,\n                album: trackR.album,\n                duration: trackDurations[trackR.id],\n                setTrack: ()=>handleTrack(trackR),\n                isSetTrack: trackR.id === (track === null || track === void 0 ? void 0 : track.id),\n                stared_user: trackR.stared_user\n            }, trackR.id, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\ContentPlaylist\\\\ContentPlaylist.tsx\",\n                lineNumber: 94,\n                columnNumber: 11\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\ContentPlaylist\\\\ContentPlaylist.tsx\",\n        lineNumber: 89,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ContentPlaylist, \"PzhD8bR5lDJ9n5Hswe3N0qPMcMc=\", false, function() {\n    return [\n        _hooks__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch,\n        _hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        _hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        _hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        _hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        _hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        _hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector\n    ];\n});\n_c = ContentPlaylist;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContentPlaylist);\nvar _c;\n$RefreshReg$(_c, \"ContentPlaylist\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0NvbnRlbnRQbGF5bGlzdC9Db250ZW50UGxheWxpc3QudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUVrRDtBQUNkO0FBQ2dDO0FBRVg7QUFDbUI7QUFDMUM7QUFDc0I7QUFDZ0I7QUFFeEUsTUFBTWMsa0JBQWtCOztJQUV0QixNQUFNQyxhQUFhUixzREFBY0E7SUFDakMsTUFBTVMsV0FBV1Isc0RBQWNBLENBQUMsQ0FBQ1MsUUFBVUEsTUFBTUMsTUFBTSxDQUFDRixRQUFRO0lBQ2hFLE1BQU1HLGlCQUFpQlgsc0RBQWNBLENBQUMsQ0FBQ1MsUUFBVUEsTUFBTUMsTUFBTSxDQUFDRSxjQUFjO0lBQzVFLE1BQU0sRUFBRUMsS0FBSyxFQUFFLEdBQUdiLHNEQUFjQSxDQUFDLENBQUNTLFFBQVVBLE1BQU1DLE1BQU07SUFDeEQsTUFBTUksV0FBV2Qsc0RBQWNBLENBQUMsQ0FBQ1MsUUFBVUEsTUFBTUMsTUFBTSxDQUFDSSxRQUFRO0lBRWhFLE1BQU1DLGdCQUFnQmYsc0RBQWNBLENBQUMsQ0FBQ1MsUUFBVUEsTUFBTUMsTUFBTSxDQUFDSyxhQUFhO0lBRTFFLDhCQUE4QjtJQUM5QixNQUFNQyxpQkFBaUJoQixzREFBY0EsQ0FBQyxDQUFDUyxRQUFVQSxNQUFNQyxNQUFNLENBQUNNLGNBQWM7SUFDNUUsNkJBQTZCO0lBQzdCckIsZ0RBQVNBLENBQUM7UUFFUlEsK0NBQVNBLENBQUNhLGdCQUFnQkMsSUFBSSxDQUFDLENBQUNDO1lBQzlCLCtCQUErQjtZQUMvQkEsS0FBS0MsS0FBSyxHQUFHWixXQUFXTCx3RUFBV0EsQ0FBQ2dCLEtBQUtDLEtBQUssS0FBS1osV0FBV0wsd0VBQVdBLENBQUNnQjtRQUM1RTtJQUNGLEdBQUc7UUFBQ1g7UUFBWVM7S0FBZTtJQUMvQixxQ0FBcUM7SUFDckMsTUFBTUksY0FBYyxDQUFDQztRQUNuQmQsV0FBV04sNEVBQWVBLENBQUNvQjtJQUM3QjtJQUNBLGdE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REFBZUEsZUFBZUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Db250ZW50UGxheWxpc3QvQ29udGVudFBsYXlsaXN0LnRzeD8zY2ZjIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vQ29udGVudFBsYXlsaXN0Lm1vZHVsZS5jc3NcIjtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdHJhY2tUeXBlIH0gZnJvbSAnQC90eXBlcy90eXBlcyc7XG5pbXBvcnQgeyB1c2VBcHBEaXNwYXRjaCwgdXNlQXBwU2VsZWN0b3IgfSBmcm9tICdAL2hvb2tzJztcbmltcG9ydCB7IHNldEN1cnJlbnRUcmFjaywgc2V0UGxheUxpc3QgfSBmcm9tICdAL3N0b3JlL2ZlYXR1cmVzL3RyYWNrc1NsaWNlJztcbmltcG9ydCB7IGdldFRyYWNrcyB9IGZyb20gJ0AvYXBpJztcbmltcG9ydCB7IFBsYXlMaXN0SXRlbSB9IGZyb20gJ0Bjb21wb25lbnRzL1BsYXlMaXN0SXRlbSc7XG5pbXBvcnQgeyBzb3J0VHJhY2tzQnlSZWxlYXNlRGF0ZSB9IGZyb20gXCJAL2xpYi9zb3J0VHJhY2tzQnlSZWxlYXNlRGF0ZVwiO1xuXG5jb25zdCBDb250ZW50UGxheWxpc3QgPSAoKSA9PiB7XG5cbiAgY29uc3QgZGlzcGF0Y2hlciA9IHVzZUFwcERpc3BhdGNoKCk7XG4gIGNvbnN0IHBsYXlMaXN0ID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS50cmFja3MucGxheUxpc3QpO1xuICBjb25zdCBzZWFyY2hQbGF5TGlzdCA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudHJhY2tzLnNlYXJjaFBsYXlsaXN0KTtcbiAgY29uc3QgeyB0cmFjayB9ID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS50cmFja3MpO1xuICBjb25zdCBpc1NlYXJjaCA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudHJhY2tzLmlzU2VhcmNoKTtcblxuICBjb25zdCBhY3RpdmVGaWx0ZXJzID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS50cmFja3MuYWN0aXZlRmlsdGVycyk7XG5cbiAgLy8gY2hlY2sgcGxheWxpc3QgbnVtYmVyIDEvMi8zXG4gIGNvbnN0IHBsYXlsaXN0TnVtYmVyID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS50cmFja3MucGxheWxpc3ROdW1iZXIpO1xuICAvLyBnZXQgdGhlIHRyYWNrbGlzdCBmcm9tIEFQSVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIFxuICAgIGdldFRyYWNrcyhwbGF5bGlzdE51bWJlcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgLy8gY2hlY2sgaWYgdGhlIGRhdGEgaXMgd3JhcHBlZFxuICAgICAgZGF0YS5pdGVtcyA/IGRpc3BhdGNoZXIoc2V0UGxheUxpc3QoZGF0YS5pdGVtcykpIDogZGlzcGF0Y2hlcihzZXRQbGF5TGlzdChkYXRhKSk7XG4gICAgfSk7XG4gIH0sIFtkaXNwYXRjaGVyLCBwbGF5bGlzdE51bWJlcl0pO1xuICAvLyBSZWR1eCB0b29sczogc2V0IHRoZSB0cmFjayBwbGF5aW5nXG4gIGNvbnN0IGhhbmRsZVRyYWNrID0gKHRyYWNrUjogdHJhY2tUeXBlKSA9PiB7XG4gICAgZGlzcGF0Y2hlcihzZXRDdXJyZW50VHJhY2sodHJhY2tSKSk7XG4gIH07XG4gIC8vIGFkZCBhIGR1cmF0aW9uIGZyb20gYXVkaW8gcHJvcHMgdG8gZWFjaCB0cmFja1xuICBjb25zdCBbdHJhY2tEdXJhdGlvbnMsIHNldFRyYWNrRHVyYXRpb25zXSA9IHVzZVN0YXRlPHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH0+KHt9KTtcbiAgY29uc3QgYXVkaW9SZWZzID0gdXNlUmVmPHsgW2tleTogc3RyaW5nXTogSFRNTEF1ZGlvRWxlbWVudCB9Pih7fSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZHVyYXRpb25zOiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9ID0ge307XG4gICAgcGxheUxpc3Q/LmZvckVhY2goKHRyYWNrOiB0cmFja1R5cGUpID0+IHtcbiAgICAgIGNvbnN0IGF1ZGlvID0gbmV3IEF1ZGlvKHRyYWNrLnRyYWNrX2ZpbGUpO1xuICAgICAgYXVkaW8uYWRkRXZlbnRMaXN0ZW5lcignbG9hZGVkbWV0YWRhdGEnLCAoKSA9PiB7XG4gICAgICAgIGR1cmF0aW9uc1t0cmFjay5pZF0gPSBhdWRpby5kdXJhdGlvbjtcbiAgICAgICAgc2V0VHJhY2tEdXJhdGlvbnMoeyAuLi5kdXJhdGlvbnMgfSk7XG4gICAgICB9KTtcbiAgICAgIGF1ZGlvUmVmcy5jdXJyZW50W3RyYWNrLmlkXSA9IGF1ZGlvO1xuICAgIH0pO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBPYmplY3QudmFsdWVzKGF1ZGlvUmVmcy5jdXJyZW50KS5mb3JFYWNoKChhdWRpbykgPT4ge1xuICAgICAgICBhdWRpby5wYXVzZSgpO1xuICAgICAgICBhdWRpby5yZW1vdmVBdHRyaWJ1dGUoJ3NyYycpO1xuICAgICAgICBhdWRpby5sb2FkKCk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9LCBbcGxheUxpc3RdKTtcblxuICAvLyBIT1cgSVQgV09SS1NcbiAgLy8gRmlyc3QsIGNoZWNrIGlmIHRoZSBzZWFyY2hiYXIgY29udGFpbnMgYW55IHZhbHVlLiBJZiB0cnVlLCBhcHBseSBvdGhlciBmaWx0ZXJzIHRvIHRoZSBzZWFyY2ggcmVzdWx0LlxuICAvLyBTZWNvbmQsIGNoZWNrIHdoYXQgYXJ0aXN0cyBhbmQgZ2VucmVzIGZpbHRlcnMgYXJlIGFwcGxpZWQuXG4gIC8vIFRoaXJkLCBtZW1vcml6ZSB0aGUgcmVzdWx0IG9mIGFwcGxpZWQgc2VhcmNoIGFuZCBmaWx0ZXJzLiBIZXJlIGlzIHRoZSB0aGlyZCBjaGVjayBvZiBzb3J0VHJhY2tzQnlSZWxlYXNlRGF0ZS5cbiAgLy8gSWYgdHJ1ZSwgYXBwbHkgc29ydFRyYWNrc0J5UmVsZWFzZURhdGUgdG8gZmlsdGVyZWRUcmFja3Mgb2JqZWN0LiBJZiBmYWxzZSwgc2ltcGx5IHJldHVybiBmaWx0ZXJlZFRyYWNrcy5cblxuICAvLyBkZXRlcm1pbmUgd2hpY2ggdHJhY2tsaXN0IHRvIHJlbmRlciwgZGVmYXVsdCBvciBzZWFyY2hcbiAgY29uc3QgdHJhY2tzVG9SZW5kZXIgPSBpc1NlYXJjaCA/IHNlYXJjaFBsYXlMaXN0IDogcGxheUxpc3Q7XG5cbiAgLy8gZmlsdGVyIHRyYWNrcyBieSBhcnRpc3RzIGFuZCBnZW5yZXNcbiAgY29uc3QgZmlsdGVyVHJhY2tzID0gKHRyYWNrczogdHJhY2tUeXBlW10pID0+IHtcbiAgICByZXR1cm4gdHJhY2tzLmZpbHRlcigodHJhY2spID0+IHtcbiAgICAgIGNvbnN0IGlzQXV0aG9yc01hdGNoID0gYWN0aXZlRmlsdGVycy5hdXRob3JzLmxlbmd0aCA9PT0gMCB8fCBhY3RpdmVGaWx0ZXJzLmF1dGhvcnMuaW5jbHVkZXModHJhY2suYXV0aG9yKTtcbiAgICAgIGNvbnN0IGlzR2VucmVzTWF0Y2ggPSBhY3RpdmVGaWx0ZXJzLmdlbnJlcy5sZW5ndGggPT09IDAgfHwgYWN0aXZlRmlsdGVycy5nZW5yZXMuaW5jbHVkZXModHJhY2suZ2VucmUpO1xuICAgICAgcmV0dXJuIGlzQXV0aG9yc01hdGNoICYmIGlzR2VucmVzTWF0Y2g7XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gdXNlTWVtbyB0byBzYXZlIHRoZSByZXN1bHQgb2YgYXBwbGllZCBmaWx0ZXJzXG4gIGNvbnN0IGZpbHRlcmVkQW5kU29ydGVkUGxheWxpc3QgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBmaWx0ZXJlZFRyYWNrcyA9IGZpbHRlclRyYWNrcyh0cmFja3NUb1JlbmRlcik7XG5cbiAgICBpZiAoYWN0aXZlRmlsdGVycy5yZWxlYXNlX2RhdGVzKSB7XG4gICAgICByZXR1cm4gc29ydFRyYWNrc0J5UmVsZWFzZURhdGUoZmlsdGVyZWRUcmFja3MsIGFjdGl2ZUZpbHRlcnMucmVsZWFzZV9kYXRlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmaWx0ZXJlZFRyYWNrcztcbiAgICB9XG4gIH0sIFt0cmFja3NUb1JlbmRlciwgYWN0aXZlRmlsdGVyc10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLmNvbnRlbnRQbGF5bGlzdCwgc3R5bGVzLnBsYXlsaXN0KX0+XG4gICAgICB7aXNTZWFyY2ggJiYgdHJhY2tzVG9SZW5kZXIubGVuZ3RoID09PSAwID8gKFxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5wbGF5bGlzdFRpdGxlQ29sfT5ObyB0cmFja3MgZm91bmQ8L3A+XG4gICAgICApIDogKFxuICAgICAgICBmaWx0ZXJlZEFuZFNvcnRlZFBsYXlsaXN0Lm1hcCgodHJhY2tSOiB0cmFja1R5cGUpID0+IChcbiAgICAgICAgICA8UGxheUxpc3RJdGVtXG4gICAgICAgICAgICBrZXk9e3RyYWNrUi5pZH1cbiAgICAgICAgICAgIGlkPXt0cmFja1IuaWR9XG4gICAgICAgICAgICBuYW1lPXt0cmFja1IubmFtZX1cbiAgICAgICAgICAgIGF1dGhvcj17dHJhY2tSLmF1dGhvcn1cbiAgICAgICAgICAgIGFsYnVtPXt0cmFja1IuYWxidW19XG4gICAgICAgICAgICBkdXJhdGlvbj17dHJhY2tEdXJhdGlvbnNbdHJhY2tSLmlkXX1cbiAgICAgICAgICAgIHNldFRyYWNrPXsoKSA9PiBoYW5kbGVUcmFjayh0cmFja1IpfVxuICAgICAgICAgICAgaXNTZXRUcmFjaz17dHJhY2tSLmlkID09PSB0cmFjaz8uaWR9XG4gICAgICAgICAgICBzdGFyZWRfdXNlcj17dHJhY2tSLnN0YXJlZF91c2VyfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpXG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGVudFBsYXlsaXN0O1xuIl0sIm5hbWVzIjpbInN0eWxlcyIsImNsYXNzTmFtZXMiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZU1lbW8iLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZUFwcERpc3BhdGNoIiwidXNlQXBwU2VsZWN0b3IiLCJzZXRDdXJyZW50VHJhY2siLCJzZXRQbGF5TGlzdCIsImdldFRyYWNrcyIsIlBsYXlMaXN0SXRlbSIsInNvcnRUcmFja3NCeVJlbGVhc2VEYXRlIiwiQ29udGVudFBsYXlsaXN0IiwiZGlzcGF0Y2hlciIsInBsYXlMaXN0Iiwic3RhdGUiLCJ0cmFja3MiLCJzZWFyY2hQbGF5TGlzdCIsInNlYXJjaFBsYXlsaXN0IiwidHJhY2siLCJpc1NlYXJjaCIsImFjdGl2ZUZpbHRlcnMiLCJwbGF5bGlzdE51bWJlciIsInRoZW4iLCJkYXRhIiwiaXRlbXMiLCJoYW5kbGVUcmFjayIsInRyYWNrUiIsInRyYWNrRHVyYXRpb25zIiwic2V0VHJhY2tEdXJhdGlvbnMiLCJhdWRpb1JlZnMiLCJkdXJhdGlvbnMiLCJmb3JFYWNoIiwiYXVkaW8iLCJBdWRpbyIsInRyYWNrX2ZpbGUiLCJhZGRFdmVudExpc3RlbmVyIiwiaWQiLCJkdXJhdGlvbiIsImN1cnJlbnQiLCJPYmplY3QiLCJ2YWx1ZXMiLCJwYXVzZSIsInJlbW92ZUF0dHJpYnV0ZSIsImxvYWQiLCJ0cmFja3NUb1JlbmRlciIsImZpbHRlclRyYWNrcyIsImZpbHRlciIsImlzQXV0aG9yc01hdGNoIiwiYXV0aG9ycyIsImxlbmd0aCIsImluY2x1ZGVzIiwiYXV0aG9yIiwiaXNHZW5yZXNNYXRjaCIsImdlbnJlcyIsImdlbnJlIiwiZmlsdGVyZWRBbmRTb3J0ZWRQbGF5bGlzdCIsImZpbHRlcmVkVHJhY2tzIiwicmVsZWFzZV9kYXRlcyIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRlbnRQbGF5bGlzdCIsInBsYXlsaXN0IiwicCIsInBsYXlsaXN0VGl0bGVDb2wiLCJtYXAiLCJuYW1lIiwiYWxidW0iLCJzZXRUcmFjayIsImlzU2V0VHJhY2siLCJzdGFyZWRfdXNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ContentPlaylist/ContentPlaylist.tsx\n"));

/***/ })

});