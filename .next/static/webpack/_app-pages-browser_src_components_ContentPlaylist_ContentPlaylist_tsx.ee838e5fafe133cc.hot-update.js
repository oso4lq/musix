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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _ContentPlaylist_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ContentPlaylist.module.css */ \"(app-pages-browser)/./src/components/ContentPlaylist/ContentPlaylist.module.css\");\n/* harmony import */ var _ContentPlaylist_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_ContentPlaylist_module_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks */ \"(app-pages-browser)/./src/hooks.ts\");\n/* harmony import */ var _store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store/features/tracksSlice */ \"(app-pages-browser)/./src/store/features/tracksSlice.ts\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/api */ \"(app-pages-browser)/./src/api.tsx\");\n/* harmony import */ var _components_PlayListItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/PlayListItem */ \"(app-pages-browser)/./src/components/PlayListItem/index.tsx\");\n/* harmony import */ var _lib_sortTracksByReleaseDate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/lib/sortTracksByReleaseDate */ \"(app-pages-browser)/./src/lib/sortTracksByReleaseDate.ts\");\n/* harmony import */ var _store_features_authSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/store/features/authSlice */ \"(app-pages-browser)/./src/store/features/authSlice.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst ContentPlaylist = ()=>{\n    _s();\n    const dispatcher = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch)();\n    const playList = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.tracks.playList);\n    const searchPlayList = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.tracks.searchPlaylist);\n    const { track } = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.tracks);\n    const userToken = localStorage.getItem(\"userToken\");\n    const isSearch = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.tracks.isSearch);\n    const activeFilters = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.tracks.activeFilters);\n    // get a new access token using the refresh token\n    const [tokenRefreshInterval, setTokenRefreshInterval] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const handleRefreshToken = async ()=>{\n        try {\n            const token = localStorage.getItem(\"refreshToken\");\n            if (!token) return;\n            const refreshedToken = await (0,_api__WEBPACK_IMPORTED_MODULE_5__.refreshToken)(token);\n            dispatcher((0,_store_features_authSlice__WEBPACK_IMPORTED_MODULE_8__.setAuthUserToken)(refreshedToken.access));\n        } catch (error) {\n            console.error(\"Error refreshing token:\", error);\n        }\n    };\n    // timer to refresh the token every 180 seconds\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            handleRefreshToken();\n        }, 180000);\n        setTokenRefreshInterval(interval);\n        return ()=>{\n            if (tokenRefreshInterval) clearInterval(tokenRefreshInterval);\n        };\n    }, []);\n    // check playlist number 1/2/3\n    const playlistID = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.tracks.playlistNumber);\n    // get the tracklist from API\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (userToken !== null) {\n            if (String(playlistID) === \"liked\") {\n                (0,_api__WEBPACK_IMPORTED_MODULE_5__.getLikedTracks)(userToken).then((data)=>{\n                    dispatcher((0,_store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_4__.setPlayList)(data));\n                });\n            } else {\n                (0,_api__WEBPACK_IMPORTED_MODULE_5__.getTracks)(playlistID).then((data)=>{\n                    // check if the data is wrapped\n                    data.items ? dispatcher((0,_store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_4__.setPlayList)(data.items)) : dispatcher((0,_store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_4__.setPlayList)(data));\n                });\n            }\n        }\n    }, [\n        dispatcher,\n        playlistID\n    ]);\n    // Redux tools: set the track playing\n    const handleTrack = (trackR)=>{\n        dispatcher((0,_store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_4__.setCurrentTrack)(trackR));\n    };\n    // add a duration from audio props to each track\n    const [trackDurations, setTrackDurations] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});\n    const audioRefs = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)({});\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const durations = {};\n        playList === null || playList === void 0 ? void 0 : playList.forEach((track)=>{\n            const audio = new Audio(track.track_file);\n            audio.addEventListener(\"loadedmetadata\", ()=>{\n                durations[track.id] = audio.duration;\n                setTrackDurations({\n                    ...durations\n                });\n            });\n            audioRefs.current[track.id] = audio;\n        });\n        return ()=>{\n            Object.values(audioRefs.current).forEach((audio)=>{\n                audio.pause();\n                audio.removeAttribute(\"src\");\n                audio.load();\n            });\n        };\n    }, [\n        playList\n    ]);\n    // HOW IT WORKS\n    // First, check if the searchbar contains any value. If true, apply other filters to the search result.\n    // Second, check what artists and genres filters are applied.\n    // Third, memorize the result of applied search and filters. Here is the third check of sortTracksByReleaseDate.\n    // If true, apply sortTracksByReleaseDate to filteredTracks object. If false, simply return filteredTracks.\n    // determine which tracklist to render, default or search\n    const tracksToRender = isSearch ? searchPlayList : playList;\n    console.log(tracksToRender);\n    // filter tracks by artists and genres\n    const filterTracks = (tracks)=>{\n        return tracks.filter((track)=>{\n            const isAuthorsMatch = activeFilters.authors.length === 0 || activeFilters.authors.includes(track.author);\n            const isGenresMatch = activeFilters.genres.length === 0 || activeFilters.genres.includes(track.genre);\n            return isAuthorsMatch && isGenresMatch;\n        });\n    };\n    // useMemo to save the result of applied filters\n    const filteredAndSortedPlaylist = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{\n        const filteredTracks = filterTracks(tracksToRender);\n        if (activeFilters.release_dates) {\n            return (0,_lib_sortTracksByReleaseDate__WEBPACK_IMPORTED_MODULE_7__.sortTracksByReleaseDate)(filteredTracks, activeFilters.release_dates);\n        } else {\n            return filteredTracks;\n        }\n    }, [\n        tracksToRender,\n        activeFilters\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_ContentPlaylist_module_css__WEBPACK_IMPORTED_MODULE_9___default().contentPlaylist), (_ContentPlaylist_module_css__WEBPACK_IMPORTED_MODULE_9___default().playlist)),\n        children: isSearch || tracksToRender.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: (_ContentPlaylist_module_css__WEBPACK_IMPORTED_MODULE_9___default().playlistTitleCol),\n            children: \"No tracks found\"\n        }, void 0, false, {\n            fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\ContentPlaylist\\\\ContentPlaylist.tsx\",\n            lineNumber: 123,\n            columnNumber: 9\n        }, undefined) : filteredAndSortedPlaylist.map((trackR)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PlayListItem__WEBPACK_IMPORTED_MODULE_6__.PlayListItem, {\n                id: trackR.id,\n                name: trackR.name,\n                author: trackR.author,\n                album: trackR.album,\n                duration: trackDurations[trackR.id],\n                setTrack: ()=>handleTrack(trackR),\n                isSetTrack: trackR.id === (track === null || track === void 0 ? void 0 : track.id),\n                stared_user: trackR.stared_user,\n                // @ts-ignore\n                playlistID: playlistID\n            }, trackR.id, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\ContentPlaylist\\\\ContentPlaylist.tsx\",\n                lineNumber: 126,\n                columnNumber: 11\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\ContentPlaylist\\\\ContentPlaylist.tsx\",\n        lineNumber: 121,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ContentPlaylist, \"fe7HF2i0C4pWsrnuDQdIhTWhSpg=\", false, function() {\n    return [\n        _hooks__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch,\n        _hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        _hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        _hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        _hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        _hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        _hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector\n    ];\n});\n_c = ContentPlaylist;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContentPlaylist);\nvar _c;\n$RefreshReg$(_c, \"ContentPlaylist\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0NvbnRlbnRQbGF5bGlzdC9Db250ZW50UGxheWxpc3QudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFa0Q7QUFDZDtBQUNnQztBQUVYO0FBQ21CO0FBQ1o7QUFDUjtBQUNnQjtBQUNWO0FBRTlELE1BQU1pQixrQkFBa0I7O0lBRXRCLE1BQU1DLGFBQWFYLHNEQUFjQTtJQUNqQyxNQUFNWSxXQUFXWCxzREFBY0EsQ0FBQyxDQUFDWSxRQUFVQSxNQUFNQyxNQUFNLENBQUNGLFFBQVE7SUFDaEUsTUFBTUcsaUJBQWlCZCxzREFBY0EsQ0FBQyxDQUFDWSxRQUFVQSxNQUFNQyxNQUFNLENBQUNFLGNBQWM7SUFDNUUsTUFBTSxFQUFFQyxLQUFLLEVBQUUsR0FBR2hCLHNEQUFjQSxDQUFDLENBQUNZLFFBQVVBLE1BQU1DLE1BQU07SUFDeEQsTUFBTUksWUFBWUMsYUFBYUMsT0FBTyxDQUFDO0lBQ3ZDLE1BQU1DLFdBQVdwQixzREFBY0EsQ0FBQyxDQUFDWSxRQUFVQSxNQUFNQyxNQUFNLENBQUNPLFFBQVE7SUFDaEUsTUFBTUMsZ0JBQWdCckIsc0RBQWNBLENBQUMsQ0FBQ1ksUUFBVUEsTUFBTUMsTUFBTSxDQUFDUSxhQUFhO0lBRTFFLGlEQUFpRDtJQUNqRCxNQUFNLENBQUNDLHNCQUFzQkMsd0JBQXdCLEdBQUd6QiwrQ0FBUUEsQ0FBd0I7SUFDeEYsTUFBTTBCLHFCQUFxQjtRQUN6QixJQUFJO1lBQ0YsTUFBTUMsUUFBUVAsYUFBYUMsT0FBTyxDQUFDO1lBQ25DLElBQUksQ0FBQ00sT0FBTztZQUNaLE1BQU1DLGlCQUFpQixNQUFNckIsa0RBQVlBLENBQUNvQjtZQUMxQ2YsV0FBV0YsMkVBQWdCQSxDQUFDa0IsZUFBZUMsTUFBTTtRQUNuRCxFQUFFLE9BQU9DLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDLDJCQUEyQkE7UUFDM0M7SUFDRjtJQUNBLCtDQUErQztJQUMvQ2pDLGdEQUFT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QzVFLE9BQU87WUFDTCxPQUFPRDtRQUNUO0lBQ0YsR0FBRztRQUFDYjtRQUFnQnJDO0tBQWM7SUFFbEMscUJBQ0UsOERBQUNvRDtRQUFJQyxXQUFXakYsaURBQVVBLENBQUNELG9GQUFzQixFQUFFQSw2RUFBZTtrQkFDL0Q0QixZQUFZc0MsZUFBZU0sTUFBTSxLQUFLLGtCQUNyQyw4REFBQ2E7WUFBRUgsV0FBV2xGLHFGQUF1QjtzQkFBRTs7Ozs7d0JBRXZDOEUsMEJBQTBCUyxHQUFHLENBQUMsQ0FBQ3ZDLHVCQUM3Qiw4REFBQ2xDLGtFQUFZQTtnQkFFWDRDLElBQUlWLE9BQU9VLEVBQUU7Z0JBQ2I4QixNQUFNeEMsT0FBT3dDLElBQUk7Z0JBQ2pCZCxRQUFRMUIsT0FBTzBCLE1BQU07Z0JBQ3JCZSxPQUFPekMsT0FBT3lDLEtBQUs7Z0JBQ25COUIsVUFBVVYsY0FBYyxDQUFDRCxPQUFPVSxFQUFFLENBQUM7Z0JBQ25DZ0MsVUFBVSxJQUFNM0MsWUFBWUM7Z0JBQzVCMkMsWUFBWTNDLE9BQU9VLEVBQUUsTUFBS2xDLGtCQUFBQSw0QkFBQUEsTUFBT2tDLEVBQUU7Z0JBQ25Da0MsYUFBYTVDLE9BQU80QyxXQUFXO2dCQUMvQixhQUFhO2dCQUNibkQsWUFBWUE7ZUFWUE8sT0FBT1UsRUFBRTs7Ozs7Ozs7OztBQWdCMUI7R0FqSU16Qzs7UUFFZVYsa0RBQWNBO1FBQ2hCQyxrREFBY0E7UUFDUkEsa0RBQWNBO1FBQ25CQSxrREFBY0E7UUFFZkEsa0RBQWNBO1FBQ1RBLGtEQUFjQTtRQTBCakJBLGtEQUFjQTs7O0tBbEM3QlM7QUFtSU4sK0RBQWVBLGVBQWVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ29udGVudFBsYXlsaXN0L0NvbnRlbnRQbGF5bGlzdC50c3g/M2NmYyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0NvbnRlbnRQbGF5bGlzdC5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHRyYWNrVHlwZSB9IGZyb20gJ0AvdHlwZXMvdHlwZXMnO1xuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2gsIHVzZUFwcFNlbGVjdG9yIH0gZnJvbSAnQC9ob29rcyc7XG5pbXBvcnQgeyBzZXRDdXJyZW50VHJhY2ssIHNldFBsYXlMaXN0IH0gZnJvbSAnQC9zdG9yZS9mZWF0dXJlcy90cmFja3NTbGljZSc7XG5pbXBvcnQgeyBnZXRMaWtlZFRyYWNrcywgZ2V0VHJhY2tzLCByZWZyZXNoVG9rZW4gfSBmcm9tICdAL2FwaSc7XG5pbXBvcnQgeyBQbGF5TGlzdEl0ZW0gfSBmcm9tICdAY29tcG9uZW50cy9QbGF5TGlzdEl0ZW0nO1xuaW1wb3J0IHsgc29ydFRyYWNrc0J5UmVsZWFzZURhdGUgfSBmcm9tIFwiQC9saWIvc29ydFRyYWNrc0J5UmVsZWFzZURhdGVcIjtcbmltcG9ydCB7IHNldEF1dGhVc2VyVG9rZW4gfSBmcm9tIFwiQC9zdG9yZS9mZWF0dXJlcy9hdXRoU2xpY2VcIjtcblxuY29uc3QgQ29udGVudFBsYXlsaXN0ID0gKCkgPT4ge1xuXG4gIGNvbnN0IGRpc3BhdGNoZXIgPSB1c2VBcHBEaXNwYXRjaCgpO1xuICBjb25zdCBwbGF5TGlzdCA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudHJhY2tzLnBsYXlMaXN0KTtcbiAgY29uc3Qgc2VhcmNoUGxheUxpc3QgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnRyYWNrcy5zZWFyY2hQbGF5bGlzdCk7XG4gIGNvbnN0IHsgdHJhY2sgfSA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudHJhY2tzKTtcbiAgY29uc3QgdXNlclRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJUb2tlbicpO1xuICBjb25zdCBpc1NlYXJjaCA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudHJhY2tzLmlzU2VhcmNoKTtcbiAgY29uc3QgYWN0aXZlRmlsdGVycyA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudHJhY2tzLmFjdGl2ZUZpbHRlcnMpO1xuXG4gIC8vIGdldCBhIG5ldyBhY2Nlc3MgdG9rZW4gdXNpbmcgdGhlIHJlZnJlc2ggdG9rZW5cbiAgY29uc3QgW3Rva2VuUmVmcmVzaEludGVydmFsLCBzZXRUb2tlblJlZnJlc2hJbnRlcnZhbF0gPSB1c2VTdGF0ZTxOb2RlSlMuVGltZW91dCB8IG51bGw+KG51bGwpO1xuICBjb25zdCBoYW5kbGVSZWZyZXNoVG9rZW4gPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3JlZnJlc2hUb2tlbicpO1xuICAgICAgaWYgKCF0b2tlbikgcmV0dXJuO1xuICAgICAgY29uc3QgcmVmcmVzaGVkVG9rZW4gPSBhd2FpdCByZWZyZXNoVG9rZW4odG9rZW4pO1xuICAgICAgZGlzcGF0Y2hlcihzZXRBdXRoVXNlclRva2VuKHJlZnJlc2hlZFRva2VuLmFjY2VzcykpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciByZWZyZXNoaW5nIHRva2VuOicsIGVycm9yKTtcbiAgICB9XG4gIH07XG4gIC8vIHRpbWVyIHRvIHJlZnJlc2ggdGhlIHRva2VuIGV2ZXJ5IDE4MCBzZWNvbmRzXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBoYW5kbGVSZWZyZXNoVG9rZW4oKTtcbiAgICB9LCAxODAwMDApO1xuICAgIHNldFRva2VuUmVmcmVzaEludGVydmFsKGludGVydmFsKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaWYgKHRva2VuUmVmcmVzaEludGVydmFsKSBjbGVhckludGVydmFsKHRva2VuUmVmcmVzaEludGVydmFsKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgLy8gY2hlY2sgcGxheWxpc3QgbnVtYmVyIDEvMi8zXG4gIGNvbnN0IHBsYXlsaXN0SUQgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnRyYWNrcy5wbGF5bGlzdE51bWJlcik7XG4gIC8vIGdldCB0aGUgdHJhY2tsaXN0IGZyb20gQVBJXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHVzZXJUb2tlbiAhPT0gbnVsbCkge1xuICAgICAgaWYgKFN0cmluZyhwbGF5bGlzdElEKSA9PT0gXCJsaWtlZFwiKSB7XG4gICAgICAgIGdldExpa2VkVHJhY2tzKHVzZXJUb2tlbikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIGRpc3BhdGNoZXIoc2V0UGxheUxpc3QoZGF0YSkpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGdldFRyYWNrcyhwbGF5bGlzdElEKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGRhdGEgaXMgd3JhcHBlZFxuICAgICAgICAgIGRhdGEuaXRlbXMgPyBkaXNwYXRjaGVyKHNldFBsYXlMaXN0KGRhdGEuaXRlbXMpKSA6IGRpc3BhdGNoZXIoc2V0UGxheUxpc3QoZGF0YSkpO1xuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgfTtcbiAgfSwgW2Rpc3BhdGNoZXIsIHBsYXlsaXN0SURdKTtcbiAgLy8gUmVkdXggdG9vbHM6IHNldCB0aGUgdHJhY2sgcGxheWluZ1xuICBjb25zdCBoYW5kbGVUcmFjayA9ICh0cmFja1I6IHRyYWNrVHlwZSkgPT4ge1xuICAgIGRpc3BhdGNoZXIoc2V0Q3VycmVudFRyYWNrKHRyYWNrUikpO1xuICB9O1xuICAvLyBhZGQgYSBkdXJhdGlvbiBmcm9tIGF1ZGlvIHByb3BzIHRvIGVhY2ggdHJhY2tcbiAgY29uc3QgW3RyYWNrRHVyYXRpb25zLCBzZXRUcmFja0R1cmF0aW9uc10gPSB1c2VTdGF0ZTx7IFtrZXk6IHN0cmluZ106IG51bWJlciB9Pih7fSk7XG4gIGNvbnN0IGF1ZGlvUmVmcyA9IHVzZVJlZjx7IFtrZXk6IHN0cmluZ106IEhUTUxBdWRpb0VsZW1lbnQgfT4oe30pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGR1cmF0aW9uczogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSA9IHt9O1xuICAgIHBsYXlMaXN0Py5mb3JFYWNoKCh0cmFjazogdHJhY2tUeXBlKSA9PiB7XG4gICAgICBjb25zdCBhdWRpbyA9IG5ldyBBdWRpbyh0cmFjay50cmFja19maWxlKTtcbiAgICAgIGF1ZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRlZG1ldGFkYXRhJywgKCkgPT4ge1xuICAgICAgICBkdXJhdGlvbnNbdHJhY2suaWRdID0gYXVkaW8uZHVyYXRpb247XG4gICAgICAgIHNldFRyYWNrRHVyYXRpb25zKHsgLi4uZHVyYXRpb25zIH0pO1xuICAgICAgfSk7XG4gICAgICBhdWRpb1JlZnMuY3VycmVudFt0cmFjay5pZF0gPSBhdWRpbztcbiAgICB9KTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgT2JqZWN0LnZhbHVlcyhhdWRpb1JlZnMuY3VycmVudCkuZm9yRWFjaCgoYXVkaW8pID0+IHtcbiAgICAgICAgYXVkaW8ucGF1c2UoKTtcbiAgICAgICAgYXVkaW8ucmVtb3ZlQXR0cmlidXRlKCdzcmMnKTtcbiAgICAgICAgYXVkaW8ubG9hZCgpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfSwgW3BsYXlMaXN0XSk7XG5cbiAgLy8gSE9XIElUIFdPUktTXG4gIC8vIEZpcnN0LCBjaGVjayBpZiB0aGUgc2VhcmNoYmFyIGNvbnRhaW5zIGFueSB2YWx1ZS4gSWYgdHJ1ZSwgYXBwbHkgb3RoZXIgZmlsdGVycyB0byB0aGUgc2VhcmNoIHJlc3VsdC5cbiAgLy8gU2Vjb25kLCBjaGVjayB3aGF0IGFydGlzdHMgYW5kIGdlbnJlcyBmaWx0ZXJzIGFyZSBhcHBsaWVkLlxuICAvLyBUaGlyZCwgbWVtb3JpemUgdGhlIHJlc3VsdCBvZiBhcHBsaWVkIHNlYXJjaCBhbmQgZmlsdGVycy4gSGVyZSBpcyB0aGUgdGhpcmQgY2hlY2sgb2Ygc29ydFRyYWNrc0J5UmVsZWFzZURhdGUuXG4gIC8vIElmIHRydWUsIGFwcGx5IHNvcnRUcmFja3NCeVJlbGVhc2VEYXRlIHRvIGZpbHRlcmVkVHJhY2tzIG9iamVjdC4gSWYgZmFsc2UsIHNpbXBseSByZXR1cm4gZmlsdGVyZWRUcmFja3MuXG5cbiAgLy8gZGV0ZXJtaW5lIHdoaWNoIHRyYWNrbGlzdCB0byByZW5kZXIsIGRlZmF1bHQgb3Igc2VhcmNoXG4gIGNvbnN0IHRyYWNrc1RvUmVuZGVyID0gaXNTZWFyY2ggPyBzZWFyY2hQbGF5TGlzdCA6IHBsYXlMaXN0O1xuICBjb25zb2xlLmxvZyh0cmFja3NUb1JlbmRlcik7XG5cbiAgLy8gZmlsdGVyIHRyYWNrcyBieSBhcnRpc3RzIGFuZCBnZW5yZXNcbiAgY29uc3QgZmlsdGVyVHJhY2tzID0gKHRyYWNrczogdHJhY2tUeXBlW10pID0+IHtcbiAgICByZXR1cm4gdHJhY2tzLmZpbHRlcigodHJhY2spID0+IHtcbiAgICAgIGNvbnN0IGlzQXV0aG9yc01hdGNoID0gYWN0aXZlRmlsdGVycy5hdXRob3JzLmxlbmd0aCA9PT0gMCB8fCBhY3RpdmVGaWx0ZXJzLmF1dGhvcnMuaW5jbHVkZXModHJhY2suYXV0aG9yKTtcbiAgICAgIGNvbnN0IGlzR2VucmVzTWF0Y2ggPSBhY3RpdmVGaWx0ZXJzLmdlbnJlcy5sZW5ndGggPT09IDAgfHwgYWN0aXZlRmlsdGVycy5nZW5yZXMuaW5jbHVkZXModHJhY2suZ2VucmUpO1xuICAgICAgcmV0dXJuIGlzQXV0aG9yc01hdGNoICYmIGlzR2VucmVzTWF0Y2g7XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gdXNlTWVtbyB0byBzYXZlIHRoZSByZXN1bHQgb2YgYXBwbGllZCBmaWx0ZXJzXG4gIGNvbnN0IGZpbHRlcmVkQW5kU29ydGVkUGxheWxpc3QgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBmaWx0ZXJlZFRyYWNrcyA9IGZpbHRlclRyYWNrcyh0cmFja3NUb1JlbmRlcik7XG5cbiAgICBpZiAoYWN0aXZlRmlsdGVycy5yZWxlYXNlX2RhdGVzKSB7XG4gICAgICByZXR1cm4gc29ydFRyYWNrc0J5UmVsZWFzZURhdGUoZmlsdGVyZWRUcmFja3MsIGFjdGl2ZUZpbHRlcnMucmVsZWFzZV9kYXRlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmaWx0ZXJlZFRyYWNrcztcbiAgICB9XG4gIH0sIFt0cmFja3NUb1JlbmRlciwgYWN0aXZlRmlsdGVyc10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLmNvbnRlbnRQbGF5bGlzdCwgc3R5bGVzLnBsYXlsaXN0KX0+XG4gICAgICB7aXNTZWFyY2ggfHwgdHJhY2tzVG9SZW5kZXIubGVuZ3RoID09PSAwID8gKFxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5wbGF5bGlzdFRpdGxlQ29sfT5ObyB0cmFja3MgZm91bmQ8L3A+XG4gICAgICApIDogKFxuICAgICAgICBmaWx0ZXJlZEFuZFNvcnRlZFBsYXlsaXN0Lm1hcCgodHJhY2tSOiB0cmFja1R5cGUpID0+IChcbiAgICAgICAgICA8UGxheUxpc3RJdGVtXG4gICAgICAgICAgICBrZXk9e3RyYWNrUi5pZH1cbiAgICAgICAgICAgIGlkPXt0cmFja1IuaWR9XG4gICAgICAgICAgICBuYW1lPXt0cmFja1IubmFtZX1cbiAgICAgICAgICAgIGF1dGhvcj17dHJhY2tSLmF1dGhvcn1cbiAgICAgICAgICAgIGFsYnVtPXt0cmFja1IuYWxidW19XG4gICAgICAgICAgICBkdXJhdGlvbj17dHJhY2tEdXJhdGlvbnNbdHJhY2tSLmlkXX1cbiAgICAgICAgICAgIHNldFRyYWNrPXsoKSA9PiBoYW5kbGVUcmFjayh0cmFja1IpfVxuICAgICAgICAgICAgaXNTZXRUcmFjaz17dHJhY2tSLmlkID09PSB0cmFjaz8uaWR9XG4gICAgICAgICAgICBzdGFyZWRfdXNlcj17dHJhY2tSLnN0YXJlZF91c2VyfVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgcGxheWxpc3RJRD17cGxheWxpc3RJRH1cbiAgICAgICAgICAvPlxuICAgICAgICApKVxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRQbGF5bGlzdDtcbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJjbGFzc05hbWVzIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VNZW1vIiwidXNlUmVmIiwidXNlU3RhdGUiLCJ1c2VBcHBEaXNwYXRjaCIsInVzZUFwcFNlbGVjdG9yIiwic2V0Q3VycmVudFRyYWNrIiwic2V0UGxheUxpc3QiLCJnZXRMaWtlZFRyYWNrcyIsImdldFRyYWNrcyIsInJlZnJlc2hUb2tlbiIsIlBsYXlMaXN0SXRlbSIsInNvcnRUcmFja3NCeVJlbGVhc2VEYXRlIiwic2V0QXV0aFVzZXJUb2tlbiIsIkNvbnRlbnRQbGF5bGlzdCIsImRpc3BhdGNoZXIiLCJwbGF5TGlzdCIsInN0YXRlIiwidHJhY2tzIiwic2VhcmNoUGxheUxpc3QiLCJzZWFyY2hQbGF5bGlzdCIsInRyYWNrIiwidXNlclRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImlzU2VhcmNoIiwiYWN0aXZlRmlsdGVycyIsInRva2VuUmVmcmVzaEludGVydmFsIiwic2V0VG9rZW5SZWZyZXNoSW50ZXJ2YWwiLCJoYW5kbGVSZWZyZXNoVG9rZW4iLCJ0b2tlbiIsInJlZnJlc2hlZFRva2VuIiwiYWNjZXNzIiwiZXJyb3IiLCJjb25zb2xlIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJwbGF5bGlzdElEIiwicGxheWxpc3ROdW1iZXIiLCJTdHJpbmciLCJ0aGVuIiwiZGF0YSIsIml0ZW1zIiwiaGFuZGxlVHJhY2siLCJ0cmFja1IiLCJ0cmFja0R1cmF0aW9ucyIsInNldFRyYWNrRHVyYXRpb25zIiwiYXVkaW9SZWZzIiwiZHVyYXRpb25zIiwiZm9yRWFjaCIsImF1ZGlvIiwiQXVkaW8iLCJ0cmFja19maWxlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImlkIiwiZHVyYXRpb24iLCJjdXJyZW50IiwiT2JqZWN0IiwidmFsdWVzIiwicGF1c2UiLCJyZW1vdmVBdHRyaWJ1dGUiLCJsb2FkIiwidHJhY2tzVG9SZW5kZXIiLCJsb2ciLCJmaWx0ZXJUcmFja3MiLCJmaWx0ZXIiLCJpc0F1dGhvcnNNYXRjaCIsImF1dGhvcnMiLCJsZW5ndGgiLCJpbmNsdWRlcyIsImF1dGhvciIsImlzR2VucmVzTWF0Y2giLCJnZW5yZXMiLCJnZW5yZSIsImZpbHRlcmVkQW5kU29ydGVkUGxheWxpc3QiLCJmaWx0ZXJlZFRyYWNrcyIsInJlbGVhc2VfZGF0ZXMiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250ZW50UGxheWxpc3QiLCJwbGF5bGlzdCIsInAiLCJwbGF5bGlzdFRpdGxlQ29sIiwibWFwIiwibmFtZSIsImFsYnVtIiwic2V0VHJhY2siLCJpc1NldFRyYWNrIiwic3RhcmVkX3VzZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ContentPlaylist/ContentPlaylist.tsx\n"));

/***/ })

});