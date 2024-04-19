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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _ContentPlaylist_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ContentPlaylist.module.css */ \"(app-pages-browser)/./src/components/ContentPlaylist/ContentPlaylist.module.css\");\n/* harmony import */ var _ContentPlaylist_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ContentPlaylist_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks */ \"(app-pages-browser)/./src/hooks.ts\");\n/* harmony import */ var _store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store/features/tracksSlice */ \"(app-pages-browser)/./src/store/features/tracksSlice.ts\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/api */ \"(app-pages-browser)/./src/api.tsx\");\n/* harmony import */ var _components_PlayListItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/PlayListItem */ \"(app-pages-browser)/./src/components/PlayListItem/index.tsx\");\n/* harmony import */ var _lib_sortTracksByReleaseDate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/lib/sortTracksByReleaseDate */ \"(app-pages-browser)/./src/lib/sortTracksByReleaseDate.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst ContentPlaylist = ()=>{\n    _s();\n    const dispatcher = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch)();\n    const playList = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.tracks.playList);\n    const searchPlayList = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.tracks.searchPlaylist);\n    const { track } = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.tracks);\n    const isSearch = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.tracks.isSearch);\n    const activeFilters = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.tracks.activeFilters);\n    // check playlist number 1/2/3\n    // const playlistNumber = useAppSelector((state) => state.tracks.playlistNumber);\n    // get the tracklist from API\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        (0,_api__WEBPACK_IMPORTED_MODULE_5__.getTracks)(playlistNumber).then((data)=>{\n            // check if the data is wrapped\n            data.items ? dispatcher((0,_store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_4__.setPlayList)(data.items)) : dispatcher((0,_store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_4__.setPlayList)(data));\n        });\n    }, [\n        dispatcher,\n        playlistNumber\n    ]);\n    // Redux tools: set the track playing\n    const handleTrack = (trackR)=>{\n        dispatcher((0,_store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_4__.setCurrentTrack)(trackR));\n    };\n    // add a duration from audio props to each track\n    const [trackDurations, setTrackDurations] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});\n    const audioRefs = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)({});\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const durations = {};\n        playList === null || playList === void 0 ? void 0 : playList.forEach((track)=>{\n            const audio = new Audio(track.track_file);\n            audio.addEventListener(\"loadedmetadata\", ()=>{\n                durations[track.id] = audio.duration;\n                setTrackDurations({\n                    ...durations\n                });\n            });\n            audioRefs.current[track.id] = audio;\n        });\n        return ()=>{\n            Object.values(audioRefs.current).forEach((audio)=>{\n                audio.pause();\n                audio.removeAttribute(\"src\");\n                audio.load();\n            });\n        };\n    }, [\n        playList\n    ]);\n    // HOW IT WORKS\n    // First, check if the searchbar contains any value. If true, apply other filters to the search result.\n    // Second, check what artists and genres filters are applied.\n    // Third, memorize the result of applied search and filters. Here is the third check of sortTracksByReleaseDate.\n    // If true, apply sortTracksByReleaseDate to filteredTracks object. If false, simply return filteredTracks.\n    // determine which tracklist to render, default or search\n    const tracksToRender = isSearch ? searchPlayList : playList;\n    // filter tracks by artists and genres\n    const filterTracks = (tracks)=>{\n        return tracks.filter((track)=>{\n            const isAuthorsMatch = activeFilters.authors.length === 0 || activeFilters.authors.includes(track.author);\n            const isGenresMatch = activeFilters.genres.length === 0 || activeFilters.genres.includes(track.genre);\n            return isAuthorsMatch && isGenresMatch;\n        });\n    };\n    // useMemo to save the result of applied filters\n    const filteredAndSortedPlaylist = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{\n        const filteredTracks = filterTracks(tracksToRender);\n        if (activeFilters.release_dates) {\n            return (0,_lib_sortTracksByReleaseDate__WEBPACK_IMPORTED_MODULE_7__.sortTracksByReleaseDate)(filteredTracks, activeFilters.release_dates);\n        } else {\n            return filteredTracks;\n        }\n    }, [\n        tracksToRender,\n        activeFilters\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_ContentPlaylist_module_css__WEBPACK_IMPORTED_MODULE_8___default().contentPlaylist), (_ContentPlaylist_module_css__WEBPACK_IMPORTED_MODULE_8___default().playlist)),\n        children: isSearch && tracksToRender.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: (_ContentPlaylist_module_css__WEBPACK_IMPORTED_MODULE_8___default().playlistTitleCol),\n            children: \"No tracks found\"\n        }, void 0, false, {\n            fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\ContentPlaylist\\\\ContentPlaylist.tsx\",\n            lineNumber: 90,\n            columnNumber: 9\n        }, undefined) : filteredAndSortedPlaylist.map((trackR)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PlayListItem__WEBPACK_IMPORTED_MODULE_6__.PlayListItem, {\n                id: trackR.id,\n                name: trackR.name,\n                author: trackR.author,\n                album: trackR.album,\n                duration: trackDurations[trackR.id],\n                setTrack: ()=>handleTrack(trackR),\n                isSetTrack: trackR.id === (track === null || track === void 0 ? void 0 : track.id),\n                stared_user: trackR.stared_user\n            }, trackR.id, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\ContentPlaylist\\\\ContentPlaylist.tsx\",\n                lineNumber: 93,\n                columnNumber: 11\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\ContentPlaylist\\\\ContentPlaylist.tsx\",\n        lineNumber: 88,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ContentPlaylist, \"HNKUotDgZO28YTSibyl6U7l5tEw=\", false, function() {\n    return [\n        _hooks__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch,\n        _hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        _hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        _hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        _hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        _hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector\n    ];\n});\n_c = ContentPlaylist;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContentPlaylist);\nvar _c;\n$RefreshReg$(_c, \"ContentPlaylist\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0NvbnRlbnRQbGF5bGlzdC9Db250ZW50UGxheWxpc3QudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUVrRDtBQUNkO0FBQ2dDO0FBRVg7QUFDbUI7QUFDMUM7QUFDc0I7QUFDZ0I7QUFFeEUsTUFBTWMsa0JBQWtCOztJQUV0QixNQUFNQyxhQUFhUixzREFBY0E7SUFDakMsTUFBTVMsV0FBV1Isc0RBQWNBLENBQUMsQ0FBQ1MsUUFBVUEsTUFBTUMsTUFBTSxDQUFDRixRQUFRO0lBQ2hFLE1BQU1HLGlCQUFpQlgsc0RBQWNBLENBQUMsQ0FBQ1MsUUFBVUEsTUFBTUMsTUFBTSxDQUFDRSxjQUFjO0lBQzVFLE1BQU0sRUFBRUMsS0FBSyxFQUFFLEdBQUdiLHNEQUFjQSxDQUFDLENBQUNTLFFBQVVBLE1BQU1DLE1BQU07SUFDeEQsTUFBTUksV0FBV2Qsc0RBQWNBLENBQUMsQ0FBQ1MsUUFBVUEsTUFBTUMsTUFBTSxDQUFDSSxRQUFRO0lBRWhFLE1BQU1DLGdCQUFnQmYsc0RBQWNBLENBQUMsQ0FBQ1MsUUFBVUEsTUFBTUMsTUFBTSxDQUFDSyxhQUFhO0lBRTFFLDhCQUE4QjtJQUM5QixpRkFBaUY7SUFDakYsNkJBQTZCO0lBQzdCcEIsZ0RBQVNBLENBQUM7UUFDUlEsK0NBQVNBLENBQUNhLGdCQUFnQkMsSUFBSSxDQUFDLENBQUNDO1lBQzlCLCtCQUErQjtZQUMvQkEsS0FBS0MsS0FBSyxHQUFHWixXQUFXTCx3RUFBV0EsQ0FBQ2dCLEtBQUtDLEtBQUssS0FBS1osV0FBV0wsd0VBQVdBLENBQUNnQjtRQUM1RTtJQUNGLEdBQUc7UUFBQ1g7UUFBWVM7S0FBZTtJQUMvQixxQ0FBcUM7SUFDckMsTUFBTUksY0FBYyxDQUFDQztRQUNuQmQsV0FBV04sNEVBQWVBLENBQUNvQjtJQUM3QjtJQUNBLGdEQUFnRDtJQUNoRCxNQUFNLENBQUNDLGdCQUFnQkMsa0JBQWtCLEdBQUd6QiwrQ0FBUUEsQ0FB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bnRQbGF5bGlzdC9Db250ZW50UGxheWxpc3QudHN4PzNjZmMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9Db250ZW50UGxheWxpc3QubW9kdWxlLmNzc1wiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB0cmFja1R5cGUgfSBmcm9tICdAL3R5cGVzL3R5cGVzJztcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoLCB1c2VBcHBTZWxlY3RvciB9IGZyb20gJ0AvaG9va3MnO1xuaW1wb3J0IHsgc2V0Q3VycmVudFRyYWNrLCBzZXRQbGF5TGlzdCB9IGZyb20gJ0Avc3RvcmUvZmVhdHVyZXMvdHJhY2tzU2xpY2UnO1xuaW1wb3J0IHsgZ2V0VHJhY2tzIH0gZnJvbSAnQC9hcGknO1xuaW1wb3J0IHsgUGxheUxpc3RJdGVtIH0gZnJvbSAnQGNvbXBvbmVudHMvUGxheUxpc3RJdGVtJztcbmltcG9ydCB7IHNvcnRUcmFja3NCeVJlbGVhc2VEYXRlIH0gZnJvbSBcIkAvbGliL3NvcnRUcmFja3NCeVJlbGVhc2VEYXRlXCI7XG5cbmNvbnN0IENvbnRlbnRQbGF5bGlzdCA9ICgpID0+IHtcblxuICBjb25zdCBkaXNwYXRjaGVyID0gdXNlQXBwRGlzcGF0Y2goKTtcbiAgY29uc3QgcGxheUxpc3QgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnRyYWNrcy5wbGF5TGlzdCk7XG4gIGNvbnN0IHNlYXJjaFBsYXlMaXN0ID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS50cmFja3Muc2VhcmNoUGxheWxpc3QpO1xuICBjb25zdCB7IHRyYWNrIH0gPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnRyYWNrcyk7XG4gIGNvbnN0IGlzU2VhcmNoID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS50cmFja3MuaXNTZWFyY2gpO1xuXG4gIGNvbnN0IGFjdGl2ZUZpbHRlcnMgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnRyYWNrcy5hY3RpdmVGaWx0ZXJzKTtcblxuICAvLyBjaGVjayBwbGF5bGlzdCBudW1iZXIgMS8yLzNcbiAgLy8gY29uc3QgcGxheWxpc3ROdW1iZXIgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnRyYWNrcy5wbGF5bGlzdE51bWJlcik7XG4gIC8vIGdldCB0aGUgdHJhY2tsaXN0IGZyb20gQVBJXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0VHJhY2tzKHBsYXlsaXN0TnVtYmVyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAvLyBjaGVjayBpZiB0aGUgZGF0YSBpcyB3cmFwcGVkXG4gICAgICBkYXRhLml0ZW1zID8gZGlzcGF0Y2hlcihzZXRQbGF5TGlzdChkYXRhLml0ZW1zKSkgOiBkaXNwYXRjaGVyKHNldFBsYXlMaXN0KGRhdGEpKTtcbiAgICB9KTtcbiAgfSwgW2Rpc3BhdGNoZXIsIHBsYXlsaXN0TnVtYmVyXSk7XG4gIC8vIFJlZHV4IHRvb2xzOiBzZXQgdGhlIHRyYWNrIHBsYXlpbmdcbiAgY29uc3QgaGFuZGxlVHJhY2sgPSAodHJhY2tSOiB0cmFja1R5cGUpID0+IHtcbiAgICBkaXNwYXRjaGVyKHNldEN1cnJlbnRUcmFjayh0cmFja1IpKTtcbiAgfTtcbiAgLy8gYWRkIGEgZHVyYXRpb24gZnJvbSBhdWRpbyBwcm9wcyB0byBlYWNoIHRyYWNrXG4gIGNvbnN0IFt0cmFja0R1cmF0aW9ucywgc2V0VHJhY2tEdXJhdGlvbnNdID0gdXNlU3RhdGU8eyBba2V5OiBzdHJpbmddOiBudW1iZXIgfT4oe30pO1xuICBjb25zdCBhdWRpb1JlZnMgPSB1c2VSZWY8eyBba2V5OiBzdHJpbmddOiBIVE1MQXVkaW9FbGVtZW50IH0+KHt9KTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBkdXJhdGlvbnM6IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH0gPSB7fTtcbiAgICBwbGF5TGlzdD8uZm9yRWFjaCgodHJhY2s6IHRyYWNrVHlwZSkgPT4ge1xuICAgICAgY29uc3QgYXVkaW8gPSBuZXcgQXVkaW8odHJhY2sudHJhY2tfZmlsZSk7XG4gICAgICBhdWRpby5hZGRFdmVudExpc3RlbmVyKCdsb2FkZWRtZXRhZGF0YScsICgpID0+IHtcbiAgICAgICAgZHVyYXRpb25zW3RyYWNrLmlkXSA9IGF1ZGlvLmR1cmF0aW9uO1xuICAgICAgICBzZXRUcmFja0R1cmF0aW9ucyh7IC4uLmR1cmF0aW9ucyB9KTtcbiAgICAgIH0pO1xuICAgICAgYXVkaW9SZWZzLmN1cnJlbnRbdHJhY2suaWRdID0gYXVkaW87XG4gICAgfSk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIE9iamVjdC52YWx1ZXMoYXVkaW9SZWZzLmN1cnJlbnQpLmZvckVhY2goKGF1ZGlvKSA9PiB7XG4gICAgICAgIGF1ZGlvLnBhdXNlKCk7XG4gICAgICAgIGF1ZGlvLnJlbW92ZUF0dHJpYnV0ZSgnc3JjJyk7XG4gICAgICAgIGF1ZGlvLmxvYWQoKTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH0sIFtwbGF5TGlzdF0pO1xuXG4gIC8vIEhPVyBJVCBXT1JLU1xuICAvLyBGaXJzdCwgY2hlY2sgaWYgdGhlIHNlYXJjaGJhciBjb250YWlucyBhbnkgdmFsdWUuIElmIHRydWUsIGFwcGx5IG90aGVyIGZpbHRlcnMgdG8gdGhlIHNlYXJjaCByZXN1bHQuXG4gIC8vIFNlY29uZCwgY2hlY2sgd2hhdCBhcnRpc3RzIGFuZCBnZW5yZXMgZmlsdGVycyBhcmUgYXBwbGllZC5cbiAgLy8gVGhpcmQsIG1lbW9yaXplIHRoZSByZXN1bHQgb2YgYXBwbGllZCBzZWFyY2ggYW5kIGZpbHRlcnMuIEhlcmUgaXMgdGhlIHRoaXJkIGNoZWNrIG9mIHNvcnRUcmFja3NCeVJlbGVhc2VEYXRlLlxuICAvLyBJZiB0cnVlLCBhcHBseSBzb3J0VHJhY2tzQnlSZWxlYXNlRGF0ZSB0byBmaWx0ZXJlZFRyYWNrcyBvYmplY3QuIElmIGZhbHNlLCBzaW1wbHkgcmV0dXJuIGZpbHRlcmVkVHJhY2tzLlxuXG4gIC8vIGRldGVybWluZSB3aGljaCB0cmFja2xpc3QgdG8gcmVuZGVyLCBkZWZhdWx0IG9yIHNlYXJjaFxuICBjb25zdCB0cmFja3NUb1JlbmRlciA9IGlzU2VhcmNoID8gc2VhcmNoUGxheUxpc3QgOiBwbGF5TGlzdDtcblxuICAvLyBmaWx0ZXIgdHJhY2tzIGJ5IGFydGlzdHMgYW5kIGdlbnJlc1xuICBjb25zdCBmaWx0ZXJUcmFja3MgPSAodHJhY2tzOiB0cmFja1R5cGVbXSkgPT4ge1xuICAgIHJldHVybiB0cmFja3MuZmlsdGVyKCh0cmFjaykgPT4ge1xuICAgICAgY29uc3QgaXNBdXRob3JzTWF0Y2ggPSBhY3RpdmVGaWx0ZXJzLmF1dGhvcnMubGVuZ3RoID09PSAwIHx8IGFjdGl2ZUZpbHRlcnMuYXV0aG9ycy5pbmNsdWRlcyh0cmFjay5hdXRob3IpO1xuICAgICAgY29uc3QgaXNHZW5yZXNNYXRjaCA9IGFjdGl2ZUZpbHRlcnMuZ2VucmVzLmxlbmd0aCA9PT0gMCB8fCBhY3RpdmVGaWx0ZXJzLmdlbnJlcy5pbmNsdWRlcyh0cmFjay5nZW5yZSk7XG4gICAgICByZXR1cm4gaXNBdXRob3JzTWF0Y2ggJiYgaXNHZW5yZXNNYXRjaDtcbiAgICB9KTtcbiAgfTtcblxuICAvLyB1c2VNZW1vIHRvIHNhdmUgdGhlIHJlc3VsdCBvZiBhcHBsaWVkIGZpbHRlcnNcbiAgY29uc3QgZmlsdGVyZWRBbmRTb3J0ZWRQbGF5bGlzdCA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IGZpbHRlcmVkVHJhY2tzID0gZmlsdGVyVHJhY2tzKHRyYWNrc1RvUmVuZGVyKTtcblxuICAgIGlmIChhY3RpdmVGaWx0ZXJzLnJlbGVhc2VfZGF0ZXMpIHtcbiAgICAgIHJldHVybiBzb3J0VHJhY2tzQnlSZWxlYXNlRGF0ZShmaWx0ZXJlZFRyYWNrcywgYWN0aXZlRmlsdGVycy5yZWxlYXNlX2RhdGVzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZpbHRlcmVkVHJhY2tzO1xuICAgIH1cbiAgfSwgW3RyYWNrc1RvUmVuZGVyLCBhY3RpdmVGaWx0ZXJzXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMuY29udGVudFBsYXlsaXN0LCBzdHlsZXMucGxheWxpc3QpfT5cbiAgICAgIHtpc1NlYXJjaCAmJiB0cmFja3NUb1JlbmRlci5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnBsYXlsaXN0VGl0bGVDb2x9Pk5vIHRyYWNrcyBmb3VuZDwvcD5cbiAgICAgICkgOiAoXG4gICAgICAgIGZpbHRlcmVkQW5kU29ydGVkUGxheWxpc3QubWFwKCh0cmFja1I6IHRyYWNrVHlwZSkgPT4gKFxuICAgICAgICAgIDxQbGF5TGlzdEl0ZW1cbiAgICAgICAgICAgIGtleT17dHJhY2tSLmlkfVxuICAgICAgICAgICAgaWQ9e3RyYWNrUi5pZH1cbiAgICAgICAgICAgIG5hbWU9e3RyYWNrUi5uYW1lfVxuICAgICAgICAgICAgYXV0aG9yPXt0cmFja1IuYXV0aG9yfVxuICAgICAgICAgICAgYWxidW09e3RyYWNrUi5hbGJ1bX1cbiAgICAgICAgICAgIGR1cmF0aW9uPXt0cmFja0R1cmF0aW9uc1t0cmFja1IuaWRdfVxuICAgICAgICAgICAgc2V0VHJhY2s9eygpID0+IGhhbmRsZVRyYWNrKHRyYWNrUil9XG4gICAgICAgICAgICBpc1NldFRyYWNrPXt0cmFja1IuaWQgPT09IHRyYWNrPy5pZH1cbiAgICAgICAgICAgIHN0YXJlZF91c2VyPXt0cmFja1Iuc3RhcmVkX3VzZXJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSlcbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50UGxheWxpc3Q7XG4iXSwibmFtZXMiOlsic3R5bGVzIiwiY2xhc3NOYW1lcyIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlTWVtbyIsInVzZVJlZiIsInVzZVN0YXRlIiwidXNlQXBwRGlzcGF0Y2giLCJ1c2VBcHBTZWxlY3RvciIsInNldEN1cnJlbnRUcmFjayIsInNldFBsYXlMaXN0IiwiZ2V0VHJhY2tzIiwiUGxheUxpc3RJdGVtIiwic29ydFRyYWNrc0J5UmVsZWFzZURhdGUiLCJDb250ZW50UGxheWxpc3QiLCJkaXNwYXRjaGVyIiwicGxheUxpc3QiLCJzdGF0ZSIsInRyYWNrcyIsInNlYXJjaFBsYXlMaXN0Iiwic2VhcmNoUGxheWxpc3QiLCJ0cmFjayIsImlzU2VhcmNoIiwiYWN0aXZlRmlsdGVycyIsInBsYXlsaXN0TnVtYmVyIiwidGhlbiIsImRhdGEiLCJpdGVtcyIsImhhbmRsZVRyYWNrIiwidHJhY2tSIiwidHJhY2tEdXJhdGlvbnMiLCJzZXRUcmFja0R1cmF0aW9ucyIsImF1ZGlvUmVmcyIsImR1cmF0aW9ucyIsImZvckVhY2giLCJhdWRpbyIsIkF1ZGlvIiwidHJhY2tfZmlsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJpZCIsImR1cmF0aW9uIiwiY3VycmVudCIsIk9iamVjdCIsInZhbHVlcyIsInBhdXNlIiwicmVtb3ZlQXR0cmlidXRlIiwibG9hZCIsInRyYWNrc1RvUmVuZGVyIiwiZmlsdGVyVHJhY2tzIiwiZmlsdGVyIiwiaXNBdXRob3JzTWF0Y2giLCJhdXRob3JzIiwibGVuZ3RoIiwiaW5jbHVkZXMiLCJhdXRob3IiLCJpc0dlbnJlc01hdGNoIiwiZ2VucmVzIiwiZ2VucmUiLCJmaWx0ZXJlZEFuZFNvcnRlZFBsYXlsaXN0IiwiZmlsdGVyZWRUcmFja3MiLCJyZWxlYXNlX2RhdGVzIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGVudFBsYXlsaXN0IiwicGxheWxpc3QiLCJwIiwicGxheWxpc3RUaXRsZUNvbCIsIm1hcCIsIm5hbWUiLCJhbGJ1bSIsInNldFRyYWNrIiwiaXNTZXRUcmFjayIsInN0YXJlZF91c2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ContentPlaylist/ContentPlaylist.tsx\n"));

/***/ })

});