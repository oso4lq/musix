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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _ContentPlaylist_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ContentPlaylist.module.css */ \"(app-pages-browser)/./src/components/ContentPlaylist/ContentPlaylist.module.css\");\n/* harmony import */ var _ContentPlaylist_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ContentPlaylist_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks */ \"(app-pages-browser)/./src/hooks.ts\");\n/* harmony import */ var _store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store/features/tracksSlice */ \"(app-pages-browser)/./src/store/features/tracksSlice.ts\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/api */ \"(app-pages-browser)/./src/api.tsx\");\n/* harmony import */ var _components_PlayListItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/PlayListItem */ \"(app-pages-browser)/./src/components/PlayListItem/index.tsx\");\n/* harmony import */ var _lib_sortTracksByReleaseDate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/lib/sortTracksByReleaseDate */ \"(app-pages-browser)/./src/lib/sortTracksByReleaseDate.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst ContentPlaylist = ()=>{\n    _s();\n    const dispatcher = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch)();\n    const playList = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.tracks.playList);\n    const searchPlayList = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.tracks.searchPlaylist);\n    const { track } = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.tracks);\n    const isSearch = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.tracks.isSearch);\n    const activeFilters = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.tracks.activeFilters);\n    // check playlist number 1/2/3\n    const playlistID = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.tracks.playlistNumber);\n    // get the tracklist from API\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        // if (playlistID === \"liked\") {\n        //   getLikedTracks().then((data) => {\n        //     dispatcher(setPlayList(data));\n        //   }\n        // } else {\n        if (playlistID === \"liked\") {\n        //   getLikedTracks().then((data) => {\n        //     dispatcher(setPlayList(data));\n        //   }\n        }\n        (0,_api__WEBPACK_IMPORTED_MODULE_5__.getTracks)(playlistID).then((data)=>{\n            // check if the data is wrapped\n            data.items ? dispatcher((0,_store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_4__.setPlayList)(data.items)) : dispatcher((0,_store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_4__.setPlayList)(data));\n        });\n    }, [\n        dispatcher,\n        playlistID\n    ]);\n    // Redux tools: set the track playing\n    const handleTrack = (trackR)=>{\n        dispatcher((0,_store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_4__.setCurrentTrack)(trackR));\n    };\n    // add a duration from audio props to each track\n    const [trackDurations, setTrackDurations] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});\n    const audioRefs = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)({});\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const durations = {};\n        playList === null || playList === void 0 ? void 0 : playList.forEach((track)=>{\n            const audio = new Audio(track.track_file);\n            audio.addEventListener(\"loadedmetadata\", ()=>{\n                durations[track.id] = audio.duration;\n                setTrackDurations({\n                    ...durations\n                });\n            });\n            audioRefs.current[track.id] = audio;\n        });\n        return ()=>{\n            Object.values(audioRefs.current).forEach((audio)=>{\n                audio.pause();\n                audio.removeAttribute(\"src\");\n                audio.load();\n            });\n        };\n    }, [\n        playList\n    ]);\n    // HOW IT WORKS\n    // First, check if the searchbar contains any value. If true, apply other filters to the search result.\n    // Second, check what artists and genres filters are applied.\n    // Third, memorize the result of applied search and filters. Here is the third check of sortTracksByReleaseDate.\n    // If true, apply sortTracksByReleaseDate to filteredTracks object. If false, simply return filteredTracks.\n    // determine which tracklist to render, default or search\n    const tracksToRender = isSearch ? searchPlayList : playList;\n    // filter tracks by artists and genres\n    const filterTracks = (tracks)=>{\n        return tracks.filter((track)=>{\n            const isAuthorsMatch = activeFilters.authors.length === 0 || activeFilters.authors.includes(track.author);\n            const isGenresMatch = activeFilters.genres.length === 0 || activeFilters.genres.includes(track.genre);\n            return isAuthorsMatch && isGenresMatch;\n        });\n    };\n    // useMemo to save the result of applied filters\n    const filteredAndSortedPlaylist = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{\n        const filteredTracks = filterTracks(tracksToRender);\n        if (activeFilters.release_dates) {\n            return (0,_lib_sortTracksByReleaseDate__WEBPACK_IMPORTED_MODULE_7__.sortTracksByReleaseDate)(filteredTracks, activeFilters.release_dates);\n        } else {\n            return filteredTracks;\n        }\n    }, [\n        tracksToRender,\n        activeFilters\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_ContentPlaylist_module_css__WEBPACK_IMPORTED_MODULE_8___default().contentPlaylist), (_ContentPlaylist_module_css__WEBPACK_IMPORTED_MODULE_8___default().playlist)),\n        children: isSearch && tracksToRender.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: (_ContentPlaylist_module_css__WEBPACK_IMPORTED_MODULE_8___default().playlistTitleCol),\n            children: \"No tracks found\"\n        }, void 0, false, {\n            fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\ContentPlaylist\\\\ContentPlaylist.tsx\",\n            lineNumber: 101,\n            columnNumber: 9\n        }, undefined) : filteredAndSortedPlaylist.map((trackR)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PlayListItem__WEBPACK_IMPORTED_MODULE_6__.PlayListItem, {\n                id: trackR.id,\n                name: trackR.name,\n                author: trackR.author,\n                album: trackR.album,\n                duration: trackDurations[trackR.id],\n                setTrack: ()=>handleTrack(trackR),\n                isSetTrack: trackR.id === (track === null || track === void 0 ? void 0 : track.id),\n                stared_user: trackR.stared_user\n            }, trackR.id, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\ContentPlaylist\\\\ContentPlaylist.tsx\",\n                lineNumber: 104,\n                columnNumber: 11\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\ContentPlaylist\\\\ContentPlaylist.tsx\",\n        lineNumber: 99,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ContentPlaylist, \"+M82+LlhBbIexFzyMwmY4tnazKU=\", false, function() {\n    return [\n        _hooks__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch,\n        _hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        _hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        _hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        _hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        _hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        _hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector\n    ];\n});\n_c = ContentPlaylist;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContentPlaylist);\nvar _c;\n$RefreshReg$(_c, \"ContentPlaylist\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0NvbnRlbnRQbGF5bGlzdC9Db250ZW50UGxheWxpc3QudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUVrRDtBQUNkO0FBQ2dDO0FBRVg7QUFDbUI7QUFDMUI7QUFDTTtBQUNnQjtBQUV4RSxNQUFNYyxrQkFBa0I7O0lBRXRCLE1BQU1DLGFBQWFSLHNEQUFjQTtJQUNqQyxNQUFNUyxXQUFXUixzREFBY0EsQ0FBQyxDQUFDUyxRQUFVQSxNQUFNQyxNQUFNLENBQUNGLFFBQVE7SUFDaEUsTUFBTUcsaUJBQWlCWCxzREFBY0EsQ0FBQyxDQUFDUyxRQUFVQSxNQUFNQyxNQUFNLENBQUNFLGNBQWM7SUFDNUUsTUFBTSxFQUFFQyxLQUFLLEVBQUUsR0FBR2Isc0RBQWNBLENBQUMsQ0FBQ1MsUUFBVUEsTUFBTUMsTUFBTTtJQUN4RCxNQUFNSSxXQUFXZCxzREFBY0EsQ0FBQyxDQUFDUyxRQUFVQSxNQUFNQyxNQUFNLENBQUNJLFFBQVE7SUFFaEUsTUFBTUMsZ0JBQWdCZixzREFBY0EsQ0FBQyxDQUFDUyxRQUFVQSxNQUFNQyxNQUFNLENBQUNLLGFBQWE7SUFFMUUsOEJBQThCO0lBQzlCLE1BQU1DLGFBQWFoQixzREFBY0EsQ0FBQyxDQUFDUyxRQUFVQSxNQUFNQyxNQUFNLENBQUNPLGNBQWM7SUFDeEUsNkJBQTZCO0lBQzdCdEIsZ0RBQVNBLENBQUM7UUFDUixnQ0FBZ0M7UUFDaEMsc0NBQXNDO1FBQ3RDLHFDQUFxQztRQUNyQyxNQUFNO1FBQ04sV0FBVztRQUNYLElBQUlxQixlQUFlLFNBQVM7UUFDMUIsc0NBQXNDO1FBQ3RDLHFDQUFxQztRQUNyQyxNQUFNO1FBQ1I7UUFDQWIsK0NBQVNBLENBQUNhLFlBQVlFLElBQUksQ0FBQyxDQUFDQztZQUMxQiwrQkFBK0I7WUFDL0JBLEtBQUtDLEtBQUssR0FBR2IsV0FBV0wsd0VBQVdBLENBQUNpQixLQUFLQyxLQUFLLEtBQUtiLFdBQVdMLHdFQUFX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O0dBMUdNMUI7O1FBRWVQLGtEQUFjQTtRQUNoQkMsa0RBQWNBO1FBQ1JBLGtEQUFjQTtRQUNuQkEsa0RBQWNBO1FBQ2ZBLGtEQUFjQTtRQUVUQSxrREFBY0E7UUFHakJBLGtEQUFjQTs7O0tBWDdCTTtBQTRHTiwrREFBZUEsZUFBZUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Db250ZW50UGxheWxpc3QvQ29udGVudFBsYXlsaXN0LnRzeD8zY2ZjIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vQ29udGVudFBsYXlsaXN0Lm1vZHVsZS5jc3NcIjtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdHJhY2tUeXBlIH0gZnJvbSAnQC90eXBlcy90eXBlcyc7XG5pbXBvcnQgeyB1c2VBcHBEaXNwYXRjaCwgdXNlQXBwU2VsZWN0b3IgfSBmcm9tICdAL2hvb2tzJztcbmltcG9ydCB7IHNldEN1cnJlbnRUcmFjaywgc2V0UGxheUxpc3QgfSBmcm9tICdAL3N0b3JlL2ZlYXR1cmVzL3RyYWNrc1NsaWNlJztcbmltcG9ydCB7IGdldExpa2VkVHJhY2tzLCBnZXRUcmFja3MgfSBmcm9tICdAL2FwaSc7XG5pbXBvcnQgeyBQbGF5TGlzdEl0ZW0gfSBmcm9tICdAY29tcG9uZW50cy9QbGF5TGlzdEl0ZW0nO1xuaW1wb3J0IHsgc29ydFRyYWNrc0J5UmVsZWFzZURhdGUgfSBmcm9tIFwiQC9saWIvc29ydFRyYWNrc0J5UmVsZWFzZURhdGVcIjtcblxuY29uc3QgQ29udGVudFBsYXlsaXN0ID0gKCkgPT4ge1xuXG4gIGNvbnN0IGRpc3BhdGNoZXIgPSB1c2VBcHBEaXNwYXRjaCgpO1xuICBjb25zdCBwbGF5TGlzdCA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudHJhY2tzLnBsYXlMaXN0KTtcbiAgY29uc3Qgc2VhcmNoUGxheUxpc3QgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnRyYWNrcy5zZWFyY2hQbGF5bGlzdCk7XG4gIGNvbnN0IHsgdHJhY2sgfSA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudHJhY2tzKTtcbiAgY29uc3QgaXNTZWFyY2ggPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnRyYWNrcy5pc1NlYXJjaCk7XG5cbiAgY29uc3QgYWN0aXZlRmlsdGVycyA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudHJhY2tzLmFjdGl2ZUZpbHRlcnMpO1xuXG4gIC8vIGNoZWNrIHBsYXlsaXN0IG51bWJlciAxLzIvM1xuICBjb25zdCBwbGF5bGlzdElEID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS50cmFja3MucGxheWxpc3ROdW1iZXIpO1xuICAvLyBnZXQgdGhlIHRyYWNrbGlzdCBmcm9tIEFQSVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIGlmIChwbGF5bGlzdElEID09PSBcImxpa2VkXCIpIHtcbiAgICAvLyAgIGdldExpa2VkVHJhY2tzKCkudGhlbigoZGF0YSkgPT4ge1xuICAgIC8vICAgICBkaXNwYXRjaGVyKHNldFBsYXlMaXN0KGRhdGEpKTtcbiAgICAvLyAgIH1cbiAgICAvLyB9IGVsc2Uge1xuICAgIGlmIChwbGF5bGlzdElEID09PSBcImxpa2VkXCIpIHtcbiAgICAgIC8vICAgZ2V0TGlrZWRUcmFja3MoKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAvLyAgICAgZGlzcGF0Y2hlcihzZXRQbGF5TGlzdChkYXRhKSk7XG4gICAgICAvLyAgIH1cbiAgICB9XG4gICAgZ2V0VHJhY2tzKHBsYXlsaXN0SUQpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIC8vIGNoZWNrIGlmIHRoZSBkYXRhIGlzIHdyYXBwZWRcbiAgICAgIGRhdGEuaXRlbXMgPyBkaXNwYXRjaGVyKHNldFBsYXlMaXN0KGRhdGEuaXRlbXMpKSA6IGRpc3BhdGNoZXIoc2V0UGxheUxpc3QoZGF0YSkpO1xuICAgIH0pO1xuXG4gIH0sIFtkaXNwYXRjaGVyLCBwbGF5bGlzdElEXSk7XG4gIC8vIFJlZHV4IHRvb2xzOiBzZXQgdGhlIHRyYWNrIHBsYXlpbmdcbiAgY29uc3QgaGFuZGxlVHJhY2sgPSAodHJhY2tSOiB0cmFja1R5cGUpID0+IHtcbiAgICBkaXNwYXRjaGVyKHNldEN1cnJlbnRUcmFjayh0cmFja1IpKTtcbiAgfTtcbiAgLy8gYWRkIGEgZHVyYXRpb24gZnJvbSBhdWRpbyBwcm9wcyB0byBlYWNoIHRyYWNrXG4gIGNvbnN0IFt0cmFja0R1cmF0aW9ucywgc2V0VHJhY2tEdXJhdGlvbnNdID0gdXNlU3RhdGU8eyBba2V5OiBzdHJpbmddOiBudW1iZXIgfT4oe30pO1xuICBjb25zdCBhdWRpb1JlZnMgPSB1c2VSZWY8eyBba2V5OiBzdHJpbmddOiBIVE1MQXVkaW9FbGVtZW50IH0+KHt9KTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBkdXJhdGlvbnM6IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH0gPSB7fTtcbiAgICBwbGF5TGlzdD8uZm9yRWFjaCgodHJhY2s6IHRyYWNrVHlwZSkgPT4ge1xuICAgICAgY29uc3QgYXVkaW8gPSBuZXcgQXVkaW8odHJhY2sudHJhY2tfZmlsZSk7XG4gICAgICBhdWRpby5hZGRFdmVudExpc3RlbmVyKCdsb2FkZWRtZXRhZGF0YScsICgpID0+IHtcbiAgICAgICAgZHVyYXRpb25zW3RyYWNrLmlkXSA9IGF1ZGlvLmR1cmF0aW9uO1xuICAgICAgICBzZXRUcmFja0R1cmF0aW9ucyh7IC4uLmR1cmF0aW9ucyB9KTtcbiAgICAgIH0pO1xuICAgICAgYXVkaW9SZWZzLmN1cnJlbnRbdHJhY2suaWRdID0gYXVkaW87XG4gICAgfSk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIE9iamVjdC52YWx1ZXMoYXVkaW9SZWZzLmN1cnJlbnQpLmZvckVhY2goKGF1ZGlvKSA9PiB7XG4gICAgICAgIGF1ZGlvLnBhdXNlKCk7XG4gICAgICAgIGF1ZGlvLnJlbW92ZUF0dHJpYnV0ZSgnc3JjJyk7XG4gICAgICAgIGF1ZGlvLmxvYWQoKTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH0sIFtwbGF5TGlzdF0pO1xuXG4gIC8vIEhPVyBJVCBXT1JLU1xuICAvLyBGaXJzdCwgY2hlY2sgaWYgdGhlIHNlYXJjaGJhciBjb250YWlucyBhbnkgdmFsdWUuIElmIHRydWUsIGFwcGx5IG90aGVyIGZpbHRlcnMgdG8gdGhlIHNlYXJjaCByZXN1bHQuXG4gIC8vIFNlY29uZCwgY2hlY2sgd2hhdCBhcnRpc3RzIGFuZCBnZW5yZXMgZmlsdGVycyBhcmUgYXBwbGllZC5cbiAgLy8gVGhpcmQsIG1lbW9yaXplIHRoZSByZXN1bHQgb2YgYXBwbGllZCBzZWFyY2ggYW5kIGZpbHRlcnMuIEhlcmUgaXMgdGhlIHRoaXJkIGNoZWNrIG9mIHNvcnRUcmFja3NCeVJlbGVhc2VEYXRlLlxuICAvLyBJZiB0cnVlLCBhcHBseSBzb3J0VHJhY2tzQnlSZWxlYXNlRGF0ZSB0byBmaWx0ZXJlZFRyYWNrcyBvYmplY3QuIElmIGZhbHNlLCBzaW1wbHkgcmV0dXJuIGZpbHRlcmVkVHJhY2tzLlxuXG4gIC8vIGRldGVybWluZSB3aGljaCB0cmFja2xpc3QgdG8gcmVuZGVyLCBkZWZhdWx0IG9yIHNlYXJjaFxuICBjb25zdCB0cmFja3NUb1JlbmRlciA9IGlzU2VhcmNoID8gc2VhcmNoUGxheUxpc3QgOiBwbGF5TGlzdDtcblxuICAvLyBmaWx0ZXIgdHJhY2tzIGJ5IGFydGlzdHMgYW5kIGdlbnJlc1xuICBjb25zdCBmaWx0ZXJUcmFja3MgPSAodHJhY2tzOiB0cmFja1R5cGVbXSkgPT4ge1xuICAgIHJldHVybiB0cmFja3MuZmlsdGVyKCh0cmFjaykgPT4ge1xuICAgICAgY29uc3QgaXNBdXRob3JzTWF0Y2ggPSBhY3RpdmVGaWx0ZXJzLmF1dGhvcnMubGVuZ3RoID09PSAwIHx8IGFjdGl2ZUZpbHRlcnMuYXV0aG9ycy5pbmNsdWRlcyh0cmFjay5hdXRob3IpO1xuICAgICAgY29uc3QgaXNHZW5yZXNNYXRjaCA9IGFjdGl2ZUZpbHRlcnMuZ2VucmVzLmxlbmd0aCA9PT0gMCB8fCBhY3RpdmVGaWx0ZXJzLmdlbnJlcy5pbmNsdWRlcyh0cmFjay5nZW5yZSk7XG4gICAgICByZXR1cm4gaXNBdXRob3JzTWF0Y2ggJiYgaXNHZW5yZXNNYXRjaDtcbiAgICB9KTtcbiAgfTtcblxuICAvLyB1c2VNZW1vIHRvIHNhdmUgdGhlIHJlc3VsdCBvZiBhcHBsaWVkIGZpbHRlcnNcbiAgY29uc3QgZmlsdGVyZWRBbmRTb3J0ZWRQbGF5bGlzdCA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IGZpbHRlcmVkVHJhY2tzID0gZmlsdGVyVHJhY2tzKHRyYWNrc1RvUmVuZGVyKTtcblxuICAgIGlmIChhY3RpdmVGaWx0ZXJzLnJlbGVhc2VfZGF0ZXMpIHtcbiAgICAgIHJldHVybiBzb3J0VHJhY2tzQnlSZWxlYXNlRGF0ZShmaWx0ZXJlZFRyYWNrcywgYWN0aXZlRmlsdGVycy5yZWxlYXNlX2RhdGVzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZpbHRlcmVkVHJhY2tzO1xuICAgIH1cbiAgfSwgW3RyYWNrc1RvUmVuZGVyLCBhY3RpdmVGaWx0ZXJzXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMuY29udGVudFBsYXlsaXN0LCBzdHlsZXMucGxheWxpc3QpfT5cbiAgICAgIHtpc1NlYXJjaCAmJiB0cmFja3NUb1JlbmRlci5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnBsYXlsaXN0VGl0bGVDb2x9Pk5vIHRyYWNrcyBmb3VuZDwvcD5cbiAgICAgICkgOiAoXG4gICAgICAgIGZpbHRlcmVkQW5kU29ydGVkUGxheWxpc3QubWFwKCh0cmFja1I6IHRyYWNrVHlwZSkgPT4gKFxuICAgICAgICAgIDxQbGF5TGlzdEl0ZW1cbiAgICAgICAgICAgIGtleT17dHJhY2tSLmlkfVxuICAgICAgICAgICAgaWQ9e3RyYWNrUi5pZH1cbiAgICAgICAgICAgIG5hbWU9e3RyYWNrUi5uYW1lfVxuICAgICAgICAgICAgYXV0aG9yPXt0cmFja1IuYXV0aG9yfVxuICAgICAgICAgICAgYWxidW09e3RyYWNrUi5hbGJ1bX1cbiAgICAgICAgICAgIGR1cmF0aW9uPXt0cmFja0R1cmF0aW9uc1t0cmFja1IuaWRdfVxuICAgICAgICAgICAgc2V0VHJhY2s9eygpID0+IGhhbmRsZVRyYWNrKHRyYWNrUil9XG4gICAgICAgICAgICBpc1NldFRyYWNrPXt0cmFja1IuaWQgPT09IHRyYWNrPy5pZH1cbiAgICAgICAgICAgIHN0YXJlZF91c2VyPXt0cmFja1Iuc3RhcmVkX3VzZXJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSlcbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50UGxheWxpc3Q7XG4iXSwibmFtZXMiOlsic3R5bGVzIiwiY2xhc3NOYW1lcyIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlTWVtbyIsInVzZVJlZiIsInVzZVN0YXRlIiwidXNlQXBwRGlzcGF0Y2giLCJ1c2VBcHBTZWxlY3RvciIsInNldEN1cnJlbnRUcmFjayIsInNldFBsYXlMaXN0IiwiZ2V0VHJhY2tzIiwiUGxheUxpc3RJdGVtIiwic29ydFRyYWNrc0J5UmVsZWFzZURhdGUiLCJDb250ZW50UGxheWxpc3QiLCJkaXNwYXRjaGVyIiwicGxheUxpc3QiLCJzdGF0ZSIsInRyYWNrcyIsInNlYXJjaFBsYXlMaXN0Iiwic2VhcmNoUGxheWxpc3QiLCJ0cmFjayIsImlzU2VhcmNoIiwiYWN0aXZlRmlsdGVycyIsInBsYXlsaXN0SUQiLCJwbGF5bGlzdE51bWJlciIsInRoZW4iLCJkYXRhIiwiaXRlbXMiLCJoYW5kbGVUcmFjayIsInRyYWNrUiIsInRyYWNrRHVyYXRpb25zIiwic2V0VHJhY2tEdXJhdGlvbnMiLCJhdWRpb1JlZnMiLCJkdXJhdGlvbnMiLCJmb3JFYWNoIiwiYXVkaW8iLCJBdWRpbyIsInRyYWNrX2ZpbGUiLCJhZGRFdmVudExpc3RlbmVyIiwiaWQiLCJkdXJhdGlvbiIsImN1cnJlbnQiLCJPYmplY3QiLCJ2YWx1ZXMiLCJwYXVzZSIsInJlbW92ZUF0dHJpYnV0ZSIsImxvYWQiLCJ0cmFja3NUb1JlbmRlciIsImZpbHRlclRyYWNrcyIsImZpbHRlciIsImlzQXV0aG9yc01hdGNoIiwiYXV0aG9ycyIsImxlbmd0aCIsImluY2x1ZGVzIiwiYXV0aG9yIiwiaXNHZW5yZXNNYXRjaCIsImdlbnJlcyIsImdlbnJlIiwiZmlsdGVyZWRBbmRTb3J0ZWRQbGF5bGlzdCIsImZpbHRlcmVkVHJhY2tzIiwicmVsZWFzZV9kYXRlcyIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRlbnRQbGF5bGlzdCIsInBsYXlsaXN0IiwicCIsInBsYXlsaXN0VGl0bGVDb2wiLCJtYXAiLCJuYW1lIiwiYWxidW0iLCJzZXRUcmFjayIsImlzU2V0VHJhY2siLCJzdGFyZWRfdXNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ContentPlaylist/ContentPlaylist.tsx\n"));

/***/ })

});