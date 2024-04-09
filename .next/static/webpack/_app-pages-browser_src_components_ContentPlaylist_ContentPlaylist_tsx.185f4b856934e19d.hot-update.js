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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _ContentPlaylist_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ContentPlaylist.module.css */ \"(app-pages-browser)/./src/components/ContentPlaylist/ContentPlaylist.module.css\");\n/* harmony import */ var _ContentPlaylist_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ContentPlaylist_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks */ \"(app-pages-browser)/./src/hooks.ts\");\n/* harmony import */ var _store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store/features/tracksSlice */ \"(app-pages-browser)/./src/store/features/tracksSlice.ts\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/api */ \"(app-pages-browser)/./src/api.tsx\");\n/* harmony import */ var _components_PlayListItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/PlayListItem */ \"(app-pages-browser)/./src/components/PlayListItem/index.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst ContentPlaylist = ()=>{\n    _s();\n    const dispatcher = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch)();\n    const playList = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.tracks.playList);\n    const searchPlayList = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.tracks.searchPlaylist);\n    const { track } = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.tracks);\n    const isSearch = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.tracks.isSearch);\n    const activeFilters = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.tracks.activeFilters);\n    // get the tracklist from API\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        (0,_api__WEBPACK_IMPORTED_MODULE_5__.getTracks)().then((data)=>{\n            dispatcher((0,_store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_4__.setPlayList)(data));\n        });\n    }, [\n        dispatcher\n    ]);\n    // Redux tools: set the track playing\n    const handleTrack = (trackR)=>{\n        dispatcher((0,_store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_4__.setCurrentTrack)(trackR));\n    };\n    // determine which tracklist to render, default or search\n    const tracksToRender = isSearch ? searchPlayList : playList;\n    // add a duration from audio props to each track\n    const [trackDurations, setTrackDurations] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});\n    const audioRefs = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)({});\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const durations = {};\n        playList === null || playList === void 0 ? void 0 : playList.forEach((track)=>{\n            const audio = new Audio(track.track_file);\n            audio.addEventListener(\"loadedmetadata\", ()=>{\n                durations[track.id] = audio.duration;\n                setTrackDurations({\n                    ...durations\n                });\n            });\n            audioRefs.current[track.id] = audio;\n        });\n        return ()=>{\n            Object.values(audioRefs.current).forEach((audio)=>{\n                audio.pause();\n                audio.removeAttribute(\"src\");\n                audio.load();\n            });\n        };\n    }, [\n        playList\n    ]);\n    // filter tracks based on active filters\n    const filterTracks = (tracks)=>{\n        return tracks.filter((track)=>{\n            return (activeFilters.authors.length === 0 || activeFilters.authors.includes(track.author)) && (activeFilters.genres.length === 0 || activeFilters.genres.includes(track.genre));\n        });\n    };\n    const filteredPlayList = filterTracks(tracksToRender);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_ContentPlaylist_module_css__WEBPACK_IMPORTED_MODULE_7___default().contentPlaylist), (_ContentPlaylist_module_css__WEBPACK_IMPORTED_MODULE_7___default().playlist)),\n        children: isSearch && filteredPlayList.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: (_ContentPlaylist_module_css__WEBPACK_IMPORTED_MODULE_7___default().playlistTitleCol),\n            children: \"No tracks found\"\n        }, void 0, false, {\n            fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\ContentPlaylist\\\\ContentPlaylist.tsx\",\n            lineNumber: 73,\n            columnNumber: 9\n        }, undefined) : filteredPlayList.map((trackR)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PlayListItem__WEBPACK_IMPORTED_MODULE_6__.PlayListItem, {\n                name: trackR.name,\n                author: trackR.author,\n                album: trackR.album,\n                duration: trackDurations[trackR.id],\n                setTrack: ()=>handleTrack(trackR),\n                isSetTrack: trackR.id === (track === null || track === void 0 ? void 0 : track.id)\n            }, trackR.id, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\ContentPlaylist\\\\ContentPlaylist.tsx\",\n                lineNumber: 76,\n                columnNumber: 11\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\ContentPlaylist\\\\ContentPlaylist.tsx\",\n        lineNumber: 71,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ContentPlaylist, \"+t9Bc/Q0j6AmuHCspgXZue3sc78=\", false, function() {\n    return [\n        _hooks__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch,\n        _hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        _hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        _hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        _hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        _hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector\n    ];\n});\n_c = ContentPlaylist;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContentPlaylist); // \"use client\"\n // import styles from \"./ContentPlaylist.module.css\";\n // import classNames from \"classnames\";\n // import React, { useEffect, useRef, useState } from \"react\";\n // import { trackType } from \"@/types/types\";\n // import { useAppDispatch, useAppSelector } from \"@/hooks\";\n // import { setCurrentTrack, setPlayList } from \"@/store/features/tracksSlice\";\n // import { getTracks } from \"@/api\";\n // import { PlayListItem } from \"@components/PlayListItem\";\n // const ContentPlaylist = () => {\n //   const dispatcher = useAppDispatch();\n //   const playList = useAppSelector((state) => state.tracks.playList);\n //   const searchPlayList = useAppSelector((state) => state.tracks.searchPlaylist);\n //   const { track } = useAppSelector((state) => state.tracks);\n //   const isSearch = useAppSelector((state) => state.tracks.isSearch);\n //   // active filters!!!\n //   // const activeFilters = useAppSelector((state) => state.filters.activeFilters);\n //   // get the tracklist from API\n //   useEffect(() => {\n //     getTracks().then((data) => {\n //       dispatcher(setPlayList(data));\n //     });\n //   }, [dispatcher]);\n //   // Redux tools: set the track playing\n //   const handleTrack = (trackR: trackType) => {\n //     dispatcher(setCurrentTrack(trackR));\n //   };\n //   // determine which tracklist to render, default or search\n //   const tracksToRender = isSearch ? searchPlayList : playList;\n //   // add a duration from audio props to each track\n //   const [trackDurations, setTrackDurations] = useState<{ [key: string]: number }>({});\n //   const audioRefs = useRef<{ [key: string]: HTMLAudioElement }>({});\n //   useEffect(() => {\n //     const durations: { [key: string]: number } = {};\n //     playList?.forEach((track: trackType) => {\n //       const audio = new Audio(track.track_file);\n //       audio.addEventListener('loadedmetadata', () => {\n //         durations[track.id] = audio.duration;\n //         setTrackDurations({ ...durations });\n //       });\n //       audioRefs.current[track.id] = audio;\n //     });\n //     return () => {\n //       Object.values(audioRefs.current).forEach((audio) => {\n //         audio.pause();\n //         audio.removeAttribute('src');\n //         audio.load();\n //       });\n //     };\n //   }, [playList]);\n //   return (\n //     <div className={classNames(styles.contentPlaylist, styles.playlist)}>\n //       {isSearch && searchPlayList.length === 0 ? (\n //         <p className={styles.playlistTitleCol}>No tracks found</p>\n //       ) : (\n //         tracksToRender.map((trackR: trackType) => (\n //           <PlayListItem\n //             key={trackR.id}\n //             name={trackR.name}\n //             author={trackR.author}\n //             album={trackR.album}\n //             duration={trackDurations[trackR.id]}\n //             setTrack={() => handleTrack(trackR)}\n //             isSetTrack={trackR.id === track?.id}\n //           />\n //         ))\n //       )}\n //     </div>\n //   );\n // };\n // export default ContentPlaylist;\nvar _c;\n$RefreshReg$(_c, \"ContentPlaylist\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0NvbnRlbnRQbGF5bGlzdC9Db250ZW50UGxheWxpc3QudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRWtEO0FBQ2Q7QUFDdUI7QUFFRjtBQUNtQjtBQUMxQztBQUNzQjtBQUV4RCxNQUFNWSxrQkFBa0I7O0lBRXRCLE1BQU1DLGFBQWFQLHNEQUFjQTtJQUNqQyxNQUFNUSxXQUFXUCxzREFBY0EsQ0FBQyxDQUFDUSxRQUFVQSxNQUFNQyxNQUFNLENBQUNGLFFBQVE7SUFDaEUsTUFBTUcsaUJBQWlCVixzREFBY0EsQ0FBQyxDQUFDUSxRQUFVQSxNQUFNQyxNQUFNLENBQUNFLGNBQWM7SUFDNUUsTUFBTSxFQUFFQyxLQUFLLEVBQUUsR0FBR1osc0RBQWNBLENBQUMsQ0FBQ1EsUUFBVUEsTUFBTUMsTUFBTTtJQUN4RCxNQUFNSSxXQUFXYixzREFBY0EsQ0FBQyxDQUFDUSxRQUFVQSxNQUFNQyxNQUFNLENBQUNJLFFBQVE7SUFFaEUsTUFBTUMsZ0JBQWdCZCxzREFBY0EsQ0FBQyxDQUFDUSxRQUFVQSxNQUFNQyxNQUFNLENBQUNLLGFBQWE7SUFFMUUsNkJBQTZCO0lBQzdCbEIsZ0RBQVNBLENBQUM7UUFDUk8sK0NBQVNBLEdBQUdZLElBQUksQ0FBQyxDQUFDQztZQUNoQlYsV0FBV0osd0VBQVdBLENBQUNjO1FBQ3pCO0lBQ0YsR0FBRztRQUFDVjtLQUFXO0lBQ2YscUNBQXFDO0lBQ3JDLE1BQU1XLGNBQWMsQ0FBQ0M7UUFDbkJaLFdBQVdMLDRFQUFlQSxDQUFDaUI7SUFDN0I7SUFFQSx5REFBeUQ7SUFDekQsTUFBTUMsaUJBQWlCTixXQUFXSCxpQkFBaUJIO0lBRW5ELGdEQUFnRDtJQUNoRCxNQUFNLENBQUNhLGdCQUFnQkMsa0JBQWtCLEdBQUd2QiwrQ0FBUUEsQ0FBNEIsQ0FBQztJQUNqRixNQUFNd0IsWUFBWXpCLDZDQUFNQSxDQUFzQyxDQUFDO0lBQy9ERCxnREFBU0EsQ0FBQztRQUNS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O0NBQy9DLFlBQVk7Q0FDWiw2Q0FBNkM7Q0FDN0MsVUFBVTtDQUNWLHFCQUFxQjtDQUNyQiw4REFBOEQ7Q0FDOUQseUJBQXlCO0NBQ3pCLHdDQUF3QztDQUN4Qyx3QkFBd0I7Q0FDeEIsWUFBWTtDQUNaLFNBQVM7Q0FDVCxvQkFBb0I7Q0FFcEIsYUFBYTtDQUNiLDRFQUE0RTtDQUM1RSxxREFBcUQ7Q0FDckQscUVBQXFFO0NBQ3JFLGNBQWM7Q0FDZCxzREFBc0Q7Q0FDdEQsMEJBQTBCO0NBQzFCLDhCQUE4QjtDQUM5QixpQ0FBaUM7Q0FDakMscUNBQXFDO0NBQ3JDLG1DQUFtQztDQUNuQyxtREFBbUQ7Q0FDbkQsbURBQW1EO0NBQ25ELG1EQUFtRDtDQUNuRCxlQUFlO0NBQ2YsYUFBYTtDQUNiLFdBQVc7Q0FDWCxhQUFhO0NBQ2IsT0FBTztDQUNQLEtBQUs7Q0FFTCxrQ0FBa0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ29udGVudFBsYXlsaXN0L0NvbnRlbnRQbGF5bGlzdC50c3g/M2NmYyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0NvbnRlbnRQbGF5bGlzdC5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHRyYWNrVHlwZSB9IGZyb20gJ0AvdHlwZXMvdHlwZXMnO1xuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2gsIHVzZUFwcFNlbGVjdG9yIH0gZnJvbSAnQC9ob29rcyc7XG5pbXBvcnQgeyBzZXRDdXJyZW50VHJhY2ssIHNldFBsYXlMaXN0IH0gZnJvbSAnQC9zdG9yZS9mZWF0dXJlcy90cmFja3NTbGljZSc7XG5pbXBvcnQgeyBnZXRUcmFja3MgfSBmcm9tICdAL2FwaSc7XG5pbXBvcnQgeyBQbGF5TGlzdEl0ZW0gfSBmcm9tICdAY29tcG9uZW50cy9QbGF5TGlzdEl0ZW0nO1xuXG5jb25zdCBDb250ZW50UGxheWxpc3QgPSAoKSA9PiB7XG5cbiAgY29uc3QgZGlzcGF0Y2hlciA9IHVzZUFwcERpc3BhdGNoKCk7XG4gIGNvbnN0IHBsYXlMaXN0ID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS50cmFja3MucGxheUxpc3QpO1xuICBjb25zdCBzZWFyY2hQbGF5TGlzdCA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudHJhY2tzLnNlYXJjaFBsYXlsaXN0KTtcbiAgY29uc3QgeyB0cmFjayB9ID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS50cmFja3MpO1xuICBjb25zdCBpc1NlYXJjaCA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudHJhY2tzLmlzU2VhcmNoKTtcblxuICBjb25zdCBhY3RpdmVGaWx0ZXJzID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS50cmFja3MuYWN0aXZlRmlsdGVycyk7XG5cbiAgLy8gZ2V0IHRoZSB0cmFja2xpc3QgZnJvbSBBUElcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRUcmFja3MoKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBkaXNwYXRjaGVyKHNldFBsYXlMaXN0KGRhdGEpKTtcbiAgICB9KTtcbiAgfSwgW2Rpc3BhdGNoZXJdKTtcbiAgLy8gUmVkdXggdG9vbHM6IHNldCB0aGUgdHJhY2sgcGxheWluZ1xuICBjb25zdCBoYW5kbGVUcmFjayA9ICh0cmFja1I6IHRyYWNrVHlwZSkgPT4ge1xuICAgIGRpc3BhdGNoZXIoc2V0Q3VycmVudFRyYWNrKHRyYWNrUikpO1xuICB9O1xuXG4gIC8vIGRldGVybWluZSB3aGljaCB0cmFja2xpc3QgdG8gcmVuZGVyLCBkZWZhdWx0IG9yIHNlYXJjaFxuICBjb25zdCB0cmFja3NUb1JlbmRlciA9IGlzU2VhcmNoID8gc2VhcmNoUGxheUxpc3QgOiBwbGF5TGlzdDtcblxuICAvLyBhZGQgYSBkdXJhdGlvbiBmcm9tIGF1ZGlvIHByb3BzIHRvIGVhY2ggdHJhY2tcbiAgY29uc3QgW3RyYWNrRHVyYXRpb25zLCBzZXRUcmFja0R1cmF0aW9uc10gPSB1c2VTdGF0ZTx7IFtrZXk6IHN0cmluZ106IG51bWJlciB9Pih7fSk7XG4gIGNvbnN0IGF1ZGlvUmVmcyA9IHVzZVJlZjx7IFtrZXk6IHN0cmluZ106IEhUTUxBdWRpb0VsZW1lbnQgfT4oe30pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGR1cmF0aW9uczogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSA9IHt9O1xuICAgIHBsYXlMaXN0Py5mb3JFYWNoKCh0cmFjazogdHJhY2tUeXBlKSA9PiB7XG4gICAgICBjb25zdCBhdWRpbyA9IG5ldyBBdWRpbyh0cmFjay50cmFja19maWxlKTtcbiAgICAgIGF1ZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRlZG1ldGFkYXRhJywgKCkgPT4ge1xuICAgICAgICBkdXJhdGlvbnNbdHJhY2suaWRdID0gYXVkaW8uZHVyYXRpb247XG4gICAgICAgIHNldFRyYWNrRHVyYXRpb25zKHsgLi4uZHVyYXRpb25zIH0pO1xuICAgICAgfSk7XG4gICAgICBhdWRpb1JlZnMuY3VycmVudFt0cmFjay5pZF0gPSBhdWRpbztcbiAgICB9KTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgT2JqZWN0LnZhbHVlcyhhdWRpb1JlZnMuY3VycmVudCkuZm9yRWFjaCgoYXVkaW8pID0+IHtcbiAgICAgICAgYXVkaW8ucGF1c2UoKTtcbiAgICAgICAgYXVkaW8ucmVtb3ZlQXR0cmlidXRlKCdzcmMnKTtcbiAgICAgICAgYXVkaW8ubG9hZCgpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfSwgW3BsYXlMaXN0XSk7XG5cbiAgLy8gZmlsdGVyIHRyYWNrcyBiYXNlZCBvbiBhY3RpdmUgZmlsdGVyc1xuICBjb25zdCBmaWx0ZXJUcmFja3MgPSAodHJhY2tzOiB0cmFja1R5cGVbXSkgPT4ge1xuICAgIHJldHVybiB0cmFja3MuZmlsdGVyKCh0cmFjaykgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgKGFjdGl2ZUZpbHRlcnMuYXV0aG9ycy5sZW5ndGggPT09IDAgfHwgYWN0aXZlRmlsdGVycy5hdXRob3JzLmluY2x1ZGVzKHRyYWNrLmF1dGhvcikpICYmXG4gICAgICAgIChhY3RpdmVGaWx0ZXJzLmdlbnJlcy5sZW5ndGggPT09IDAgfHwgYWN0aXZlRmlsdGVycy5nZW5yZXMuaW5jbHVkZXModHJhY2suZ2VucmUpKVxuICAgICAgICAvLyBBcHBseSBsb2dpYyBmb3IgcmVsZWFzZSBkYXRlcyBpZiBuZWVkZWRcbiAgICAgICk7XG4gICAgfSk7XG4gIH07XG4gIGNvbnN0IGZpbHRlcmVkUGxheUxpc3QgPSBmaWx0ZXJUcmFja3ModHJhY2tzVG9SZW5kZXIpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLmNvbnRlbnRQbGF5bGlzdCwgc3R5bGVzLnBsYXlsaXN0KX0+XG4gICAgICB7aXNTZWFyY2ggJiYgZmlsdGVyZWRQbGF5TGlzdC5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnBsYXlsaXN0VGl0bGVDb2x9Pk5vIHRyYWNrcyBmb3VuZDwvcD5cbiAgICAgICkgOiAoXG4gICAgICAgIGZpbHRlcmVkUGxheUxpc3QubWFwKCh0cmFja1I6IHRyYWNrVHlwZSkgPT4gKFxuICAgICAgICAgIDxQbGF5TGlzdEl0ZW1cbiAgICAgICAgICAgIGtleT17dHJhY2tSLmlkfVxuICAgICAgICAgICAgbmFtZT17dHJhY2tSLm5hbWV9XG4gICAgICAgICAgICBhdXRob3I9e3RyYWNrUi5hdXRob3J9XG4gICAgICAgICAgICBhbGJ1bT17dHJhY2tSLmFsYnVtfVxuICAgICAgICAgICAgZHVyYXRpb249e3RyYWNrRHVyYXRpb25zW3RyYWNrUi5pZF19XG4gICAgICAgICAgICBzZXRUcmFjaz17KCkgPT4gaGFuZGxlVHJhY2sodHJhY2tSKX1cbiAgICAgICAgICAgIGlzU2V0VHJhY2s9e3RyYWNrUi5pZCA9PT0gdHJhY2s/LmlkfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpXG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGVudFBsYXlsaXN0O1xuXG5cbi8vIFwidXNlIGNsaWVudFwiXG5cbi8vIGltcG9ydCBzdHlsZXMgZnJvbSBcIi4vQ29udGVudFBsYXlsaXN0Lm1vZHVsZS5jc3NcIjtcbi8vIGltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG4vLyBpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgeyB0cmFja1R5cGUgfSBmcm9tIFwiQC90eXBlcy90eXBlc1wiO1xuLy8gaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2gsIHVzZUFwcFNlbGVjdG9yIH0gZnJvbSBcIkAvaG9va3NcIjtcbi8vIGltcG9ydCB7IHNldEN1cnJlbnRUcmFjaywgc2V0UGxheUxpc3QgfSBmcm9tIFwiQC9zdG9yZS9mZWF0dXJlcy90cmFja3NTbGljZVwiO1xuLy8gaW1wb3J0IHsgZ2V0VHJhY2tzIH0gZnJvbSBcIkAvYXBpXCI7XG4vLyBpbXBvcnQgeyBQbGF5TGlzdEl0ZW0gfSBmcm9tIFwiQGNvbXBvbmVudHMvUGxheUxpc3RJdGVtXCI7XG5cbi8vIGNvbnN0IENvbnRlbnRQbGF5bGlzdCA9ICgpID0+IHtcblxuLy8gICBjb25zdCBkaXNwYXRjaGVyID0gdXNlQXBwRGlzcGF0Y2goKTtcbi8vICAgY29uc3QgcGxheUxpc3QgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnRyYWNrcy5wbGF5TGlzdCk7XG4vLyAgIGNvbnN0IHNlYXJjaFBsYXlMaXN0ID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS50cmFja3Muc2VhcmNoUGxheWxpc3QpO1xuLy8gICBjb25zdCB7IHRyYWNrIH0gPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnRyYWNrcyk7XG4vLyAgIGNvbnN0IGlzU2VhcmNoID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS50cmFja3MuaXNTZWFyY2gpO1xuICBcbi8vICAgLy8gYWN0aXZlIGZpbHRlcnMhISFcbi8vICAgLy8gY29uc3QgYWN0aXZlRmlsdGVycyA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuZmlsdGVycy5hY3RpdmVGaWx0ZXJzKTtcbiAgXG4vLyAgIC8vIGdldCB0aGUgdHJhY2tsaXN0IGZyb20gQVBJXG4vLyAgIHVzZUVmZmVjdCgoKSA9PiB7XG4vLyAgICAgZ2V0VHJhY2tzKCkudGhlbigoZGF0YSkgPT4ge1xuLy8gICAgICAgZGlzcGF0Y2hlcihzZXRQbGF5TGlzdChkYXRhKSk7XG4vLyAgICAgfSk7XG4vLyAgIH0sIFtkaXNwYXRjaGVyXSk7XG5cbi8vICAgLy8gUmVkdXggdG9vbHM6IHNldCB0aGUgdHJhY2sgcGxheWluZ1xuLy8gICBjb25zdCBoYW5kbGVUcmFjayA9ICh0cmFja1I6IHRyYWNrVHlwZSkgPT4ge1xuLy8gICAgIGRpc3BhdGNoZXIoc2V0Q3VycmVudFRyYWNrKHRyYWNrUikpO1xuLy8gICB9O1xuXG4vLyAgIC8vIGRldGVybWluZSB3aGljaCB0cmFja2xpc3QgdG8gcmVuZGVyLCBkZWZhdWx0IG9yIHNlYXJjaFxuLy8gICBjb25zdCB0cmFja3NUb1JlbmRlciA9IGlzU2VhcmNoID8gc2VhcmNoUGxheUxpc3QgOiBwbGF5TGlzdDtcblxuLy8gICAvLyBhZGQgYSBkdXJhdGlvbiBmcm9tIGF1ZGlvIHByb3BzIHRvIGVhY2ggdHJhY2tcbi8vICAgY29uc3QgW3RyYWNrRHVyYXRpb25zLCBzZXRUcmFja0R1cmF0aW9uc10gPSB1c2VTdGF0ZTx7IFtrZXk6IHN0cmluZ106IG51bWJlciB9Pih7fSk7XG4vLyAgIGNvbnN0IGF1ZGlvUmVmcyA9IHVzZVJlZjx7IFtrZXk6IHN0cmluZ106IEhUTUxBdWRpb0VsZW1lbnQgfT4oe30pO1xuLy8gICB1c2VFZmZlY3QoKCkgPT4ge1xuLy8gICAgIGNvbnN0IGR1cmF0aW9uczogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSA9IHt9O1xuLy8gICAgIHBsYXlMaXN0Py5mb3JFYWNoKCh0cmFjazogdHJhY2tUeXBlKSA9PiB7XG4vLyAgICAgICBjb25zdCBhdWRpbyA9IG5ldyBBdWRpbyh0cmFjay50cmFja19maWxlKTtcbi8vICAgICAgIGF1ZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRlZG1ldGFkYXRhJywgKCkgPT4ge1xuLy8gICAgICAgICBkdXJhdGlvbnNbdHJhY2suaWRdID0gYXVkaW8uZHVyYXRpb247XG4vLyAgICAgICAgIHNldFRyYWNrRHVyYXRpb25zKHsgLi4uZHVyYXRpb25zIH0pO1xuLy8gICAgICAgfSk7XG4vLyAgICAgICBhdWRpb1JlZnMuY3VycmVudFt0cmFjay5pZF0gPSBhdWRpbztcbi8vICAgICB9KTtcbi8vICAgICByZXR1cm4gKCkgPT4ge1xuLy8gICAgICAgT2JqZWN0LnZhbHVlcyhhdWRpb1JlZnMuY3VycmVudCkuZm9yRWFjaCgoYXVkaW8pID0+IHtcbi8vICAgICAgICAgYXVkaW8ucGF1c2UoKTtcbi8vICAgICAgICAgYXVkaW8ucmVtb3ZlQXR0cmlidXRlKCdzcmMnKTtcbi8vICAgICAgICAgYXVkaW8ubG9hZCgpO1xuLy8gICAgICAgfSk7XG4vLyAgICAgfTtcbi8vICAgfSwgW3BsYXlMaXN0XSk7XG5cbi8vICAgcmV0dXJuIChcbi8vICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMuY29udGVudFBsYXlsaXN0LCBzdHlsZXMucGxheWxpc3QpfT5cbi8vICAgICAgIHtpc1NlYXJjaCAmJiBzZWFyY2hQbGF5TGlzdC5sZW5ndGggPT09IDAgPyAoXG4vLyAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnBsYXlsaXN0VGl0bGVDb2x9Pk5vIHRyYWNrcyBmb3VuZDwvcD5cbi8vICAgICAgICkgOiAoXG4vLyAgICAgICAgIHRyYWNrc1RvUmVuZGVyLm1hcCgodHJhY2tSOiB0cmFja1R5cGUpID0+IChcbi8vICAgICAgICAgICA8UGxheUxpc3RJdGVtXG4vLyAgICAgICAgICAgICBrZXk9e3RyYWNrUi5pZH1cbi8vICAgICAgICAgICAgIG5hbWU9e3RyYWNrUi5uYW1lfVxuLy8gICAgICAgICAgICAgYXV0aG9yPXt0cmFja1IuYXV0aG9yfVxuLy8gICAgICAgICAgICAgYWxidW09e3RyYWNrUi5hbGJ1bX1cbi8vICAgICAgICAgICAgIGR1cmF0aW9uPXt0cmFja0R1cmF0aW9uc1t0cmFja1IuaWRdfVxuLy8gICAgICAgICAgICAgc2V0VHJhY2s9eygpID0+IGhhbmRsZVRyYWNrKHRyYWNrUil9XG4vLyAgICAgICAgICAgICBpc1NldFRyYWNrPXt0cmFja1IuaWQgPT09IHRyYWNrPy5pZH1cbi8vICAgICAgICAgICAvPlxuLy8gICAgICAgICApKVxuLy8gICAgICAgKX1cbi8vICAgICA8L2Rpdj5cbi8vICAgKTtcbi8vIH07XG5cbi8vIGV4cG9ydCBkZWZhdWx0IENvbnRlbnRQbGF5bGlzdDtcbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJjbGFzc05hbWVzIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZUFwcERpc3BhdGNoIiwidXNlQXBwU2VsZWN0b3IiLCJzZXRDdXJyZW50VHJhY2siLCJzZXRQbGF5TGlzdCIsImdldFRyYWNrcyIsIlBsYXlMaXN0SXRlbSIsIkNvbnRlbnRQbGF5bGlzdCIsImRpc3BhdGNoZXIiLCJwbGF5TGlzdCIsInN0YXRlIiwidHJhY2tzIiwic2VhcmNoUGxheUxpc3QiLCJzZWFyY2hQbGF5bGlzdCIsInRyYWNrIiwiaXNTZWFyY2giLCJhY3RpdmVGaWx0ZXJzIiwidGhlbiIsImRhdGEiLCJoYW5kbGVUcmFjayIsInRyYWNrUiIsInRyYWNrc1RvUmVuZGVyIiwidHJhY2tEdXJhdGlvbnMiLCJzZXRUcmFja0R1cmF0aW9ucyIsImF1ZGlvUmVmcyIsImR1cmF0aW9ucyIsImZvckVhY2giLCJhdWRpbyIsIkF1ZGlvIiwidHJhY2tfZmlsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJpZCIsImR1cmF0aW9uIiwiY3VycmVudCIsIk9iamVjdCIsInZhbHVlcyIsInBhdXNlIiwicmVtb3ZlQXR0cmlidXRlIiwibG9hZCIsImZpbHRlclRyYWNrcyIsImZpbHRlciIsImF1dGhvcnMiLCJsZW5ndGgiLCJpbmNsdWRlcyIsImF1dGhvciIsImdlbnJlcyIsImdlbnJlIiwiZmlsdGVyZWRQbGF5TGlzdCIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRlbnRQbGF5bGlzdCIsInBsYXlsaXN0IiwicCIsInBsYXlsaXN0VGl0bGVDb2wiLCJtYXAiLCJuYW1lIiwiYWxidW0iLCJzZXRUcmFjayIsImlzU2V0VHJhY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ContentPlaylist/ContentPlaylist.tsx\n"));

/***/ })

});