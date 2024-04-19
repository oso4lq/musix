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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _ContentPlaylist_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ContentPlaylist.module.css */ \"(app-pages-browser)/./src/components/ContentPlaylist/ContentPlaylist.module.css\");\n/* harmony import */ var _ContentPlaylist_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ContentPlaylist_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks */ \"(app-pages-browser)/./src/hooks.ts\");\n/* harmony import */ var _store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store/features/tracksSlice */ \"(app-pages-browser)/./src/store/features/tracksSlice.ts\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/api */ \"(app-pages-browser)/./src/api.tsx\");\n/* harmony import */ var _components_PlayListItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/PlayListItem */ \"(app-pages-browser)/./src/components/PlayListItem/index.tsx\");\n/* harmony import */ var _lib_sortTracksByReleaseDate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/lib/sortTracksByReleaseDate */ \"(app-pages-browser)/./src/lib/sortTracksByReleaseDate.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst ContentPlaylist = ()=>{\n    _s();\n    const dispatcher = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch)();\n    const playList = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.tracks.playList);\n    const searchPlayList = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.tracks.searchPlaylist);\n    const { track } = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.tracks);\n    const userToken = localStorage.getItem(\"userToken\");\n    const isSearch = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.tracks.isSearch);\n    const activeFilters = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.tracks.activeFilters);\n    // check playlist number 1/2/3\n    const playlistID = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.tracks.playlistNumber);\n    // get the tracklist from API\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (playlistID === \"liked\") {\n            (0,_api__WEBPACK_IMPORTED_MODULE_5__.getLikedTracks)(userToken).then((data)=>{\n                dispatcher((0,_store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_4__.setPlayList)(data));\n            });\n        } else (0,_api__WEBPACK_IMPORTED_MODULE_5__.getTracks)(playlistID).then((data)=>{\n            // check if the data is wrapped\n            data.items ? dispatcher((0,_store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_4__.setPlayList)(data.items)) : dispatcher((0,_store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_4__.setPlayList)(data));\n        });\n    }, [\n        dispatcher,\n        playlistID\n    ]);\n    // Redux tools: set the track playing\n    const handleTrack = (trackR)=>{\n        dispatcher((0,_store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_4__.setCurrentTrack)(trackR));\n    };\n    // add a duration from audio props to each track\n    const [trackDurations, setTrackDurations] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});\n    const audioRefs = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)({});\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const durations = {};\n        playList === null || playList === void 0 ? void 0 : playList.forEach((track)=>{\n            const audio = new Audio(track.track_file);\n            audio.addEventListener(\"loadedmetadata\", ()=>{\n                durations[track.id] = audio.duration;\n                setTrackDurations({\n                    ...durations\n                });\n            });\n            audioRefs.current[track.id] = audio;\n        });\n        return ()=>{\n            Object.values(audioRefs.current).forEach((audio)=>{\n                audio.pause();\n                audio.removeAttribute(\"src\");\n                audio.load();\n            });\n        };\n    }, [\n        playList\n    ]);\n    // HOW IT WORKS\n    // First, check if the searchbar contains any value. If true, apply other filters to the search result.\n    // Second, check what artists and genres filters are applied.\n    // Third, memorize the result of applied search and filters. Here is the third check of sortTracksByReleaseDate.\n    // If true, apply sortTracksByReleaseDate to filteredTracks object. If false, simply return filteredTracks.\n    // determine which tracklist to render, default or search\n    const tracksToRender = isSearch ? searchPlayList : playList;\n    // filter tracks by artists and genres\n    const filterTracks = (tracks)=>{\n        return tracks.filter((track)=>{\n            const isAuthorsMatch = activeFilters.authors.length === 0 || activeFilters.authors.includes(track.author);\n            const isGenresMatch = activeFilters.genres.length === 0 || activeFilters.genres.includes(track.genre);\n            return isAuthorsMatch && isGenresMatch;\n        });\n    };\n    // useMemo to save the result of applied filters\n    const filteredAndSortedPlaylist = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{\n        const filteredTracks = filterTracks(tracksToRender);\n        if (activeFilters.release_dates) {\n            return (0,_lib_sortTracksByReleaseDate__WEBPACK_IMPORTED_MODULE_7__.sortTracksByReleaseDate)(filteredTracks, activeFilters.release_dates);\n        } else {\n            return filteredTracks;\n        }\n    }, [\n        tracksToRender,\n        activeFilters\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_ContentPlaylist_module_css__WEBPACK_IMPORTED_MODULE_8___default().contentPlaylist), (_ContentPlaylist_module_css__WEBPACK_IMPORTED_MODULE_8___default().playlist)),\n        children: isSearch && tracksToRender.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: (_ContentPlaylist_module_css__WEBPACK_IMPORTED_MODULE_8___default().playlistTitleCol),\n            children: \"No tracks found\"\n        }, void 0, false, {\n            fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\ContentPlaylist\\\\ContentPlaylist.tsx\",\n            lineNumber: 96,\n            columnNumber: 9\n        }, undefined) : filteredAndSortedPlaylist.map((trackR)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PlayListItem__WEBPACK_IMPORTED_MODULE_6__.PlayListItem, {\n                id: trackR.id,\n                name: trackR.name,\n                author: trackR.author,\n                album: trackR.album,\n                duration: trackDurations[trackR.id],\n                setTrack: ()=>handleTrack(trackR),\n                isSetTrack: trackR.id === (track === null || track === void 0 ? void 0 : track.id),\n                stared_user: trackR.stared_user\n            }, trackR.id, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\ContentPlaylist\\\\ContentPlaylist.tsx\",\n                lineNumber: 99,\n                columnNumber: 11\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\ContentPlaylist\\\\ContentPlaylist.tsx\",\n        lineNumber: 94,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ContentPlaylist, \"+M82+LlhBbIexFzyMwmY4tnazKU=\", false, function() {\n    return [\n        _hooks__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch,\n        _hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        _hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        _hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        _hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        _hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        _hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector\n    ];\n});\n_c = ContentPlaylist;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContentPlaylist);\nvar _c;\n$RefreshReg$(_c, \"ContentPlaylist\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0NvbnRlbnRQbGF5bGlzdC9Db250ZW50UGxheWxpc3QudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUVrRDtBQUNkO0FBQ2dDO0FBRVg7QUFDbUI7QUFDMUI7QUFDTTtBQUNnQjtBQUV4RSxNQUFNZSxrQkFBa0I7O0lBRXRCLE1BQU1DLGFBQWFULHNEQUFjQTtJQUNqQyxNQUFNVSxXQUFXVCxzREFBY0EsQ0FBQyxDQUFDVSxRQUFVQSxNQUFNQyxNQUFNLENBQUNGLFFBQVE7SUFDaEUsTUFBTUcsaUJBQWlCWixzREFBY0EsQ0FBQyxDQUFDVSxRQUFVQSxNQUFNQyxNQUFNLENBQUNFLGNBQWM7SUFDNUUsTUFBTSxFQUFFQyxLQUFLLEVBQUUsR0FBR2Qsc0RBQWNBLENBQUMsQ0FBQ1UsUUFBVUEsTUFBTUMsTUFBTTtJQUN4RCxNQUFNSSxZQUFZQyxhQUFhQyxPQUFPLENBQUM7SUFDdkMsTUFBTUMsV0FBV2xCLHNEQUFjQSxDQUFDLENBQUNVLFFBQVVBLE1BQU1DLE1BQU0sQ0FBQ08sUUFBUTtJQUNoRSxNQUFNQyxnQkFBZ0JuQixzREFBY0EsQ0FBQyxDQUFDVSxRQUFVQSxNQUFNQyxNQUFNLENBQUNRLGFBQWE7SUFFMUUsOEJBQThCO0lBQzlCLE1BQU1DLGFBQWFwQixzREFBY0EsQ0FBQyxDQUFDVSxRQUFVQSxNQUFNQyxNQUFNLENBQUNVLGNBQWM7SUFDeEUsNkJBQTZCO0lBQzdCMUIsZ0RBQVNBLENBQUM7UUFDUixJQUFJeUIsZUFBZSxTQUFTO1lBQzFCakIsb0RBQWNBLENBQUNZLFdBQVdPLElBQUksQ0FBQyxDQUFDQztnQkFDOUJmLFdBQVdOLHdFQUFXQSxDQUFDcUI7WUFDekI7UUFDRixPQUNBbkIsK0NBQVNBLENBQUNnQixZQUFZRSxJQUFJLENBQUMsQ0FBQ0M7WUFDMUIsK0JBQStCO1lBQy9CQSxLQUFLQyxLQUFLLEdBQUdoQixXQUFXTix3RUFBV0EsQ0FBQ3FCLEtBQUtDLEtB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T0FBT1UsRUFBRTs7Ozs7Ozs7OztBQWMxQjtHQXJHTTdCOztRQUVlUixrREFBY0E7UUFDaEJDLGtEQUFjQTtRQUNSQSxrREFBY0E7UUFDbkJBLGtEQUFjQTtRQUVmQSxrREFBY0E7UUFDVEEsa0RBQWNBO1FBR2pCQSxrREFBY0E7OztLQVg3Qk87QUF1R04sK0RBQWVBLGVBQWVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ29udGVudFBsYXlsaXN0L0NvbnRlbnRQbGF5bGlzdC50c3g/M2NmYyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0NvbnRlbnRQbGF5bGlzdC5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHRyYWNrVHlwZSB9IGZyb20gJ0AvdHlwZXMvdHlwZXMnO1xuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2gsIHVzZUFwcFNlbGVjdG9yIH0gZnJvbSAnQC9ob29rcyc7XG5pbXBvcnQgeyBzZXRDdXJyZW50VHJhY2ssIHNldFBsYXlMaXN0IH0gZnJvbSAnQC9zdG9yZS9mZWF0dXJlcy90cmFja3NTbGljZSc7XG5pbXBvcnQgeyBnZXRMaWtlZFRyYWNrcywgZ2V0VHJhY2tzIH0gZnJvbSAnQC9hcGknO1xuaW1wb3J0IHsgUGxheUxpc3RJdGVtIH0gZnJvbSAnQGNvbXBvbmVudHMvUGxheUxpc3RJdGVtJztcbmltcG9ydCB7IHNvcnRUcmFja3NCeVJlbGVhc2VEYXRlIH0gZnJvbSBcIkAvbGliL3NvcnRUcmFja3NCeVJlbGVhc2VEYXRlXCI7XG5cbmNvbnN0IENvbnRlbnRQbGF5bGlzdCA9ICgpID0+IHtcblxuICBjb25zdCBkaXNwYXRjaGVyID0gdXNlQXBwRGlzcGF0Y2goKTtcbiAgY29uc3QgcGxheUxpc3QgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnRyYWNrcy5wbGF5TGlzdCk7XG4gIGNvbnN0IHNlYXJjaFBsYXlMaXN0ID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS50cmFja3Muc2VhcmNoUGxheWxpc3QpO1xuICBjb25zdCB7IHRyYWNrIH0gPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnRyYWNrcyk7XG4gIGNvbnN0IHVzZXJUb2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyVG9rZW4nKTtcbiAgY29uc3QgaXNTZWFyY2ggPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnRyYWNrcy5pc1NlYXJjaCk7XG4gIGNvbnN0IGFjdGl2ZUZpbHRlcnMgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnRyYWNrcy5hY3RpdmVGaWx0ZXJzKTtcblxuICAvLyBjaGVjayBwbGF5bGlzdCBudW1iZXIgMS8yLzNcbiAgY29uc3QgcGxheWxpc3RJRCA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudHJhY2tzLnBsYXlsaXN0TnVtYmVyKTtcbiAgLy8gZ2V0IHRoZSB0cmFja2xpc3QgZnJvbSBBUElcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocGxheWxpc3RJRCA9PT0gXCJsaWtlZFwiKSB7XG4gICAgICBnZXRMaWtlZFRyYWNrcyh1c2VyVG9rZW4pLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgZGlzcGF0Y2hlcihzZXRQbGF5TGlzdChkYXRhKSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2VcbiAgICBnZXRUcmFja3MocGxheWxpc3RJRCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgLy8gY2hlY2sgaWYgdGhlIGRhdGEgaXMgd3JhcHBlZFxuICAgICAgZGF0YS5pdGVtcyA/IGRpc3BhdGNoZXIoc2V0UGxheUxpc3QoZGF0YS5pdGVtcykpIDogZGlzcGF0Y2hlcihzZXRQbGF5TGlzdChkYXRhKSk7XG4gICAgfSk7XG5cbiAgfSwgW2Rpc3BhdGNoZXIsIHBsYXlsaXN0SURdKTtcbiAgLy8gUmVkdXggdG9vbHM6IHNldCB0aGUgdHJhY2sgcGxheWluZ1xuICBjb25zdCBoYW5kbGVUcmFjayA9ICh0cmFja1I6IHRyYWNrVHlwZSkgPT4ge1xuICAgIGRpc3BhdGNoZXIoc2V0Q3VycmVudFRyYWNrKHRyYWNrUikpO1xuICB9O1xuICAvLyBhZGQgYSBkdXJhdGlvbiBmcm9tIGF1ZGlvIHByb3BzIHRvIGVhY2ggdHJhY2tcbiAgY29uc3QgW3RyYWNrRHVyYXRpb25zLCBzZXRUcmFja0R1cmF0aW9uc10gPSB1c2VTdGF0ZTx7IFtrZXk6IHN0cmluZ106IG51bWJlciB9Pih7fSk7XG4gIGNvbnN0IGF1ZGlvUmVmcyA9IHVzZVJlZjx7IFtrZXk6IHN0cmluZ106IEhUTUxBdWRpb0VsZW1lbnQgfT4oe30pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGR1cmF0aW9uczogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSA9IHt9O1xuICAgIHBsYXlMaXN0Py5mb3JFYWNoKCh0cmFjazogdHJhY2tUeXBlKSA9PiB7XG4gICAgICBjb25zdCBhdWRpbyA9IG5ldyBBdWRpbyh0cmFjay50cmFja19maWxlKTtcbiAgICAgIGF1ZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRlZG1ldGFkYXRhJywgKCkgPT4ge1xuICAgICAgICBkdXJhdGlvbnNbdHJhY2suaWRdID0gYXVkaW8uZHVyYXRpb247XG4gICAgICAgIHNldFRyYWNrRHVyYXRpb25zKHsgLi4uZHVyYXRpb25zIH0pO1xuICAgICAgfSk7XG4gICAgICBhdWRpb1JlZnMuY3VycmVudFt0cmFjay5pZF0gPSBhdWRpbztcbiAgICB9KTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgT2JqZWN0LnZhbHVlcyhhdWRpb1JlZnMuY3VycmVudCkuZm9yRWFjaCgoYXVkaW8pID0+IHtcbiAgICAgICAgYXVkaW8ucGF1c2UoKTtcbiAgICAgICAgYXVkaW8ucmVtb3ZlQXR0cmlidXRlKCdzcmMnKTtcbiAgICAgICAgYXVkaW8ubG9hZCgpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfSwgW3BsYXlMaXN0XSk7XG5cbiAgLy8gSE9XIElUIFdPUktTXG4gIC8vIEZpcnN0LCBjaGVjayBpZiB0aGUgc2VhcmNoYmFyIGNvbnRhaW5zIGFueSB2YWx1ZS4gSWYgdHJ1ZSwgYXBwbHkgb3RoZXIgZmlsdGVycyB0byB0aGUgc2VhcmNoIHJlc3VsdC5cbiAgLy8gU2Vjb25kLCBjaGVjayB3aGF0IGFydGlzdHMgYW5kIGdlbnJlcyBmaWx0ZXJzIGFyZSBhcHBsaWVkLlxuICAvLyBUaGlyZCwgbWVtb3JpemUgdGhlIHJlc3VsdCBvZiBhcHBsaWVkIHNlYXJjaCBhbmQgZmlsdGVycy4gSGVyZSBpcyB0aGUgdGhpcmQgY2hlY2sgb2Ygc29ydFRyYWNrc0J5UmVsZWFzZURhdGUuXG4gIC8vIElmIHRydWUsIGFwcGx5IHNvcnRUcmFja3NCeVJlbGVhc2VEYXRlIHRvIGZpbHRlcmVkVHJhY2tzIG9iamVjdC4gSWYgZmFsc2UsIHNpbXBseSByZXR1cm4gZmlsdGVyZWRUcmFja3MuXG5cbiAgLy8gZGV0ZXJtaW5lIHdoaWNoIHRyYWNrbGlzdCB0byByZW5kZXIsIGRlZmF1bHQgb3Igc2VhcmNoXG4gIGNvbnN0IHRyYWNrc1RvUmVuZGVyID0gaXNTZWFyY2ggPyBzZWFyY2hQbGF5TGlzdCA6IHBsYXlMaXN0O1xuXG4gIC8vIGZpbHRlciB0cmFja3MgYnkgYXJ0aXN0cyBhbmQgZ2VucmVzXG4gIGNvbnN0IGZpbHRlclRyYWNrcyA9ICh0cmFja3M6IHRyYWNrVHlwZVtdKSA9PiB7XG4gICAgcmV0dXJuIHRyYWNrcy5maWx0ZXIoKHRyYWNrKSA9PiB7XG4gICAgICBjb25zdCBpc0F1dGhvcnNNYXRjaCA9IGFjdGl2ZUZpbHRlcnMuYXV0aG9ycy5sZW5ndGggPT09IDAgfHwgYWN0aXZlRmlsdGVycy5hdXRob3JzLmluY2x1ZGVzKHRyYWNrLmF1dGhvcik7XG4gICAgICBjb25zdCBpc0dlbnJlc01hdGNoID0gYWN0aXZlRmlsdGVycy5nZW5yZXMubGVuZ3RoID09PSAwIHx8IGFjdGl2ZUZpbHRlcnMuZ2VucmVzLmluY2x1ZGVzKHRyYWNrLmdlbnJlKTtcbiAgICAgIHJldHVybiBpc0F1dGhvcnNNYXRjaCAmJiBpc0dlbnJlc01hdGNoO1xuICAgIH0pO1xuICB9O1xuXG4gIC8vIHVzZU1lbW8gdG8gc2F2ZSB0aGUgcmVzdWx0IG9mIGFwcGxpZWQgZmlsdGVyc1xuICBjb25zdCBmaWx0ZXJlZEFuZFNvcnRlZFBsYXlsaXN0ID0gdXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgZmlsdGVyZWRUcmFja3MgPSBmaWx0ZXJUcmFja3ModHJhY2tzVG9SZW5kZXIpO1xuXG4gICAgaWYgKGFjdGl2ZUZpbHRlcnMucmVsZWFzZV9kYXRlcykge1xuICAgICAgcmV0dXJuIHNvcnRUcmFja3NCeVJlbGVhc2VEYXRlKGZpbHRlcmVkVHJhY2tzLCBhY3RpdmVGaWx0ZXJzLnJlbGVhc2VfZGF0ZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmlsdGVyZWRUcmFja3M7XG4gICAgfVxuICB9LCBbdHJhY2tzVG9SZW5kZXIsIGFjdGl2ZUZpbHRlcnNdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5jb250ZW50UGxheWxpc3QsIHN0eWxlcy5wbGF5bGlzdCl9PlxuICAgICAge2lzU2VhcmNoICYmIHRyYWNrc1RvUmVuZGVyLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucGxheWxpc3RUaXRsZUNvbH0+Tm8gdHJhY2tzIGZvdW5kPC9wPlxuICAgICAgKSA6IChcbiAgICAgICAgZmlsdGVyZWRBbmRTb3J0ZWRQbGF5bGlzdC5tYXAoKHRyYWNrUjogdHJhY2tUeXBlKSA9PiAoXG4gICAgICAgICAgPFBsYXlMaXN0SXRlbVxuICAgICAgICAgICAga2V5PXt0cmFja1IuaWR9XG4gICAgICAgICAgICBpZD17dHJhY2tSLmlkfVxuICAgICAgICAgICAgbmFtZT17dHJhY2tSLm5hbWV9XG4gICAgICAgICAgICBhdXRob3I9e3RyYWNrUi5hdXRob3J9XG4gICAgICAgICAgICBhbGJ1bT17dHJhY2tSLmFsYnVtfVxuICAgICAgICAgICAgZHVyYXRpb249e3RyYWNrRHVyYXRpb25zW3RyYWNrUi5pZF19XG4gICAgICAgICAgICBzZXRUcmFjaz17KCkgPT4gaGFuZGxlVHJhY2sodHJhY2tSKX1cbiAgICAgICAgICAgIGlzU2V0VHJhY2s9e3RyYWNrUi5pZCA9PT0gdHJhY2s/LmlkfVxuICAgICAgICAgICAgc3RhcmVkX3VzZXI9e3RyYWNrUi5zdGFyZWRfdXNlcn1cbiAgICAgICAgICAvPlxuICAgICAgICApKVxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRQbGF5bGlzdDtcbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJjbGFzc05hbWVzIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VNZW1vIiwidXNlUmVmIiwidXNlU3RhdGUiLCJ1c2VBcHBEaXNwYXRjaCIsInVzZUFwcFNlbGVjdG9yIiwic2V0Q3VycmVudFRyYWNrIiwic2V0UGxheUxpc3QiLCJnZXRMaWtlZFRyYWNrcyIsImdldFRyYWNrcyIsIlBsYXlMaXN0SXRlbSIsInNvcnRUcmFja3NCeVJlbGVhc2VEYXRlIiwiQ29udGVudFBsYXlsaXN0IiwiZGlzcGF0Y2hlciIsInBsYXlMaXN0Iiwic3RhdGUiLCJ0cmFja3MiLCJzZWFyY2hQbGF5TGlzdCIsInNlYXJjaFBsYXlsaXN0IiwidHJhY2siLCJ1c2VyVG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiaXNTZWFyY2giLCJhY3RpdmVGaWx0ZXJzIiwicGxheWxpc3RJRCIsInBsYXlsaXN0TnVtYmVyIiwidGhlbiIsImRhdGEiLCJpdGVtcyIsImhhbmRsZVRyYWNrIiwidHJhY2tSIiwidHJhY2tEdXJhdGlvbnMiLCJzZXRUcmFja0R1cmF0aW9ucyIsImF1ZGlvUmVmcyIsImR1cmF0aW9ucyIsImZvckVhY2giLCJhdWRpbyIsIkF1ZGlvIiwidHJhY2tfZmlsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJpZCIsImR1cmF0aW9uIiwiY3VycmVudCIsIk9iamVjdCIsInZhbHVlcyIsInBhdXNlIiwicmVtb3ZlQXR0cmlidXRlIiwibG9hZCIsInRyYWNrc1RvUmVuZGVyIiwiZmlsdGVyVHJhY2tzIiwiZmlsdGVyIiwiaXNBdXRob3JzTWF0Y2giLCJhdXRob3JzIiwibGVuZ3RoIiwiaW5jbHVkZXMiLCJhdXRob3IiLCJpc0dlbnJlc01hdGNoIiwiZ2VucmVzIiwiZ2VucmUiLCJmaWx0ZXJlZEFuZFNvcnRlZFBsYXlsaXN0IiwiZmlsdGVyZWRUcmFja3MiLCJyZWxlYXNlX2RhdGVzIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGVudFBsYXlsaXN0IiwicGxheWxpc3QiLCJwIiwicGxheWxpc3RUaXRsZUNvbCIsIm1hcCIsIm5hbWUiLCJhbGJ1bSIsInNldFRyYWNrIiwiaXNTZXRUcmFjayIsInN0YXJlZF91c2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ContentPlaylist/ContentPlaylist.tsx\n"));

/***/ })

});