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
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// \"use client\"\n// import styles from \"./ContentPlaylist.module.css\";\n// import classNames from \"classnames\";\n// import React, { useEffect, useRef, useState } from \"react\";\n// import { trackType } from \"@/types/types\";\n// import { useAppDispatch, useAppSelector } from \"@/hooks\";\n// import { setCurrentTrack, setPlayList } from \"@/store/features/tracksSlice\";\n// import { getTracks } from \"@/api\";\n// import { PlayListItem } from \"@components/PlayListItem\";\n// const ContentPlaylist = () => {\n//   const dispatcher = useAppDispatch();\n//   const playList = useAppSelector((state) => state.tracks.playList);\n//   const searchPlayList = useAppSelector((state) => state.tracks.searchPlaylist);\n//   const { track } = useAppSelector((state) => state.tracks);\n//   const isSearch = useAppSelector((state) => state.tracks.isSearch);\n//   // active filters!!!\n//   // const activeFilters = useAppSelector((state) => state.filters.activeFilters);\n//   // get the tracklist from API\n//   useEffect(() => {\n//     getTracks().then((data) => {\n//       dispatcher(setPlayList(data));\n//     });\n//   }, [dispatcher]);\n//   // Redux tools: set the track playing\n//   const handleTrack = (trackR: trackType) => {\n//     dispatcher(setCurrentTrack(trackR));\n//   };\n//   // determine which tracklist to render, default or search\n//   const tracksToRender = isSearch ? searchPlayList : playList;\n//   // add a duration from audio props to each track\n//   const [trackDurations, setTrackDurations] = useState<{ [key: string]: number }>({});\n//   const audioRefs = useRef<{ [key: string]: HTMLAudioElement }>({});\n//   useEffect(() => {\n//     const durations: { [key: string]: number } = {};\n//     playList?.forEach((track: trackType) => {\n//       const audio = new Audio(track.track_file);\n//       audio.addEventListener('loadedmetadata', () => {\n//         durations[track.id] = audio.duration;\n//         setTrackDurations({ ...durations });\n//       });\n//       audioRefs.current[track.id] = audio;\n//     });\n//     return () => {\n//       Object.values(audioRefs.current).forEach((audio) => {\n//         audio.pause();\n//         audio.removeAttribute('src');\n//         audio.load();\n//       });\n//     };\n//   }, [playList]);\n//   return (\n//     <div className={classNames(styles.contentPlaylist, styles.playlist)}>\n//       {isSearch && searchPlayList.length === 0 ? (\n//         <p className={styles.playlistTitleCol}>No tracks found</p>\n//       ) : (\n//         tracksToRender.map((trackR: trackType) => (\n//           <PlayListItem\n//             key={trackR.id}\n//             name={trackR.name}\n//             author={trackR.author}\n//             album={trackR.album}\n//             duration={trackDurations[trackR.id]}\n//             setTrack={() => handleTrack(trackR)}\n//             isSetTrack={trackR.id === track?.id}\n//           />\n//         ))\n//       )}\n//     </div>\n//   );\n// };\n// export default ContentPlaylist;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0NvbnRlbnRQbGF5bGlzdC9Db250ZW50UGxheWxpc3QudHN4IiwibWFwcGluZ3MiOiJBQUFBLGVBQWU7QUFFZixxREFBcUQ7QUFDckQsdUNBQXVDO0FBQ3ZDLDhEQUE4RDtBQUM5RCw2Q0FBNkM7QUFDN0MsNERBQTREO0FBQzVELCtFQUErRTtBQUMvRSxxQ0FBcUM7QUFDckMsMkRBQTJEO0FBRTNELGtDQUFrQztBQUVsQyx5Q0FBeUM7QUFDekMsdUVBQXVFO0FBQ3ZFLG1GQUFtRjtBQUNuRiwrREFBK0Q7QUFDL0QsdUVBQXVFO0FBRXZFLHlCQUF5QjtBQUN6QixxRkFBcUY7QUFFckYsa0NBQWtDO0FBQ2xDLHNCQUFzQjtBQUN0QixtQ0FBbUM7QUFDbkMsdUNBQXVDO0FBQ3ZDLFVBQVU7QUFDVixzQkFBc0I7QUFFdEIsMENBQTBDO0FBQzFDLGlEQUFpRDtBQUNqRCwyQ0FBMkM7QUFDM0MsT0FBTztBQUVQLDhEQUE4RDtBQUM5RCxpRUFBaUU7QUFFakUscURBQXFEO0FBQ3JELHlGQUF5RjtBQUN6Rix1RUFBdUU7QUFDdkUsc0JBQXNCO0FBQ3RCLHVEQUF1RDtBQUN2RCxnREFBZ0Q7QUFDaEQsbURBQW1EO0FBQ25ELHlEQUF5RDtBQUN6RCxnREFBZ0Q7QUFDaEQsK0NBQStDO0FBQy9DLFlBQVk7QUFDWiw2Q0FBNkM7QUFDN0MsVUFBVTtBQUNWLHFCQUFxQjtBQUNyQiw4REFBOEQ7QUFDOUQseUJBQXlCO0FBQ3pCLHdDQUF3QztBQUN4Qyx3QkFBd0I7QUFDeEIsWUFBWTtBQUNaLFNBQVM7QUFDVCxvQkFBb0I7QUFFcEIsYUFBYTtBQUNiLDRFQUE0RTtBQUM1RSxxREFBcUQ7QUFDckQscUVBQXFFO0FBQ3JFLGNBQWM7QUFDZCxzREFBc0Q7QUFDdEQsMEJBQTBCO0FBQzFCLDhCQUE4QjtBQUM5QixpQ0FBaUM7QUFDakMscUNBQXFDO0FBQ3JDLG1DQUFtQztBQUNuQyxtREFBbUQ7QUFDbkQsbURBQW1EO0FBQ25ELG1EQUFtRDtBQUNuRCxlQUFlO0FBQ2YsYUFBYTtBQUNiLFdBQVc7QUFDWCxhQUFhO0FBQ2IsT0FBTztBQUNQLEtBQUs7QUFFTCxrQ0FBa0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ29udGVudFBsYXlsaXN0L0NvbnRlbnRQbGF5bGlzdC50c3g/M2NmYyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBcInVzZSBjbGllbnRcIlxuXG4vLyBpbXBvcnQgc3R5bGVzIGZyb20gXCIuL0NvbnRlbnRQbGF5bGlzdC5tb2R1bGUuY3NzXCI7XG4vLyBpbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuLy8gaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IHsgdHJhY2tUeXBlIH0gZnJvbSBcIkAvdHlwZXMvdHlwZXNcIjtcbi8vIGltcG9ydCB7IHVzZUFwcERpc3BhdGNoLCB1c2VBcHBTZWxlY3RvciB9IGZyb20gXCJAL2hvb2tzXCI7XG4vLyBpbXBvcnQgeyBzZXRDdXJyZW50VHJhY2ssIHNldFBsYXlMaXN0IH0gZnJvbSBcIkAvc3RvcmUvZmVhdHVyZXMvdHJhY2tzU2xpY2VcIjtcbi8vIGltcG9ydCB7IGdldFRyYWNrcyB9IGZyb20gXCJAL2FwaVwiO1xuLy8gaW1wb3J0IHsgUGxheUxpc3RJdGVtIH0gZnJvbSBcIkBjb21wb25lbnRzL1BsYXlMaXN0SXRlbVwiO1xuXG4vLyBjb25zdCBDb250ZW50UGxheWxpc3QgPSAoKSA9PiB7XG5cbi8vICAgY29uc3QgZGlzcGF0Y2hlciA9IHVzZUFwcERpc3BhdGNoKCk7XG4vLyAgIGNvbnN0IHBsYXlMaXN0ID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS50cmFja3MucGxheUxpc3QpO1xuLy8gICBjb25zdCBzZWFyY2hQbGF5TGlzdCA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudHJhY2tzLnNlYXJjaFBsYXlsaXN0KTtcbi8vICAgY29uc3QgeyB0cmFjayB9ID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS50cmFja3MpO1xuLy8gICBjb25zdCBpc1NlYXJjaCA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudHJhY2tzLmlzU2VhcmNoKTtcbiAgXG4vLyAgIC8vIGFjdGl2ZSBmaWx0ZXJzISEhXG4vLyAgIC8vIGNvbnN0IGFjdGl2ZUZpbHRlcnMgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmZpbHRlcnMuYWN0aXZlRmlsdGVycyk7XG4gIFxuLy8gICAvLyBnZXQgdGhlIHRyYWNrbGlzdCBmcm9tIEFQSVxuLy8gICB1c2VFZmZlY3QoKCkgPT4ge1xuLy8gICAgIGdldFRyYWNrcygpLnRoZW4oKGRhdGEpID0+IHtcbi8vICAgICAgIGRpc3BhdGNoZXIoc2V0UGxheUxpc3QoZGF0YSkpO1xuLy8gICAgIH0pO1xuLy8gICB9LCBbZGlzcGF0Y2hlcl0pO1xuXG4vLyAgIC8vIFJlZHV4IHRvb2xzOiBzZXQgdGhlIHRyYWNrIHBsYXlpbmdcbi8vICAgY29uc3QgaGFuZGxlVHJhY2sgPSAodHJhY2tSOiB0cmFja1R5cGUpID0+IHtcbi8vICAgICBkaXNwYXRjaGVyKHNldEN1cnJlbnRUcmFjayh0cmFja1IpKTtcbi8vICAgfTtcblxuLy8gICAvLyBkZXRlcm1pbmUgd2hpY2ggdHJhY2tsaXN0IHRvIHJlbmRlciwgZGVmYXVsdCBvciBzZWFyY2hcbi8vICAgY29uc3QgdHJhY2tzVG9SZW5kZXIgPSBpc1NlYXJjaCA/IHNlYXJjaFBsYXlMaXN0IDogcGxheUxpc3Q7XG5cbi8vICAgLy8gYWRkIGEgZHVyYXRpb24gZnJvbSBhdWRpbyBwcm9wcyB0byBlYWNoIHRyYWNrXG4vLyAgIGNvbnN0IFt0cmFja0R1cmF0aW9ucywgc2V0VHJhY2tEdXJhdGlvbnNdID0gdXNlU3RhdGU8eyBba2V5OiBzdHJpbmddOiBudW1iZXIgfT4oe30pO1xuLy8gICBjb25zdCBhdWRpb1JlZnMgPSB1c2VSZWY8eyBba2V5OiBzdHJpbmddOiBIVE1MQXVkaW9FbGVtZW50IH0+KHt9KTtcbi8vICAgdXNlRWZmZWN0KCgpID0+IHtcbi8vICAgICBjb25zdCBkdXJhdGlvbnM6IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH0gPSB7fTtcbi8vICAgICBwbGF5TGlzdD8uZm9yRWFjaCgodHJhY2s6IHRyYWNrVHlwZSkgPT4ge1xuLy8gICAgICAgY29uc3QgYXVkaW8gPSBuZXcgQXVkaW8odHJhY2sudHJhY2tfZmlsZSk7XG4vLyAgICAgICBhdWRpby5hZGRFdmVudExpc3RlbmVyKCdsb2FkZWRtZXRhZGF0YScsICgpID0+IHtcbi8vICAgICAgICAgZHVyYXRpb25zW3RyYWNrLmlkXSA9IGF1ZGlvLmR1cmF0aW9uO1xuLy8gICAgICAgICBzZXRUcmFja0R1cmF0aW9ucyh7IC4uLmR1cmF0aW9ucyB9KTtcbi8vICAgICAgIH0pO1xuLy8gICAgICAgYXVkaW9SZWZzLmN1cnJlbnRbdHJhY2suaWRdID0gYXVkaW87XG4vLyAgICAgfSk7XG4vLyAgICAgcmV0dXJuICgpID0+IHtcbi8vICAgICAgIE9iamVjdC52YWx1ZXMoYXVkaW9SZWZzLmN1cnJlbnQpLmZvckVhY2goKGF1ZGlvKSA9PiB7XG4vLyAgICAgICAgIGF1ZGlvLnBhdXNlKCk7XG4vLyAgICAgICAgIGF1ZGlvLnJlbW92ZUF0dHJpYnV0ZSgnc3JjJyk7XG4vLyAgICAgICAgIGF1ZGlvLmxvYWQoKTtcbi8vICAgICAgIH0pO1xuLy8gICAgIH07XG4vLyAgIH0sIFtwbGF5TGlzdF0pO1xuXG4vLyAgIHJldHVybiAoXG4vLyAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLmNvbnRlbnRQbGF5bGlzdCwgc3R5bGVzLnBsYXlsaXN0KX0+XG4vLyAgICAgICB7aXNTZWFyY2ggJiYgc2VhcmNoUGxheUxpc3QubGVuZ3RoID09PSAwID8gKFxuLy8gICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5wbGF5bGlzdFRpdGxlQ29sfT5ObyB0cmFja3MgZm91bmQ8L3A+XG4vLyAgICAgICApIDogKFxuLy8gICAgICAgICB0cmFja3NUb1JlbmRlci5tYXAoKHRyYWNrUjogdHJhY2tUeXBlKSA9PiAoXG4vLyAgICAgICAgICAgPFBsYXlMaXN0SXRlbVxuLy8gICAgICAgICAgICAga2V5PXt0cmFja1IuaWR9XG4vLyAgICAgICAgICAgICBuYW1lPXt0cmFja1IubmFtZX1cbi8vICAgICAgICAgICAgIGF1dGhvcj17dHJhY2tSLmF1dGhvcn1cbi8vICAgICAgICAgICAgIGFsYnVtPXt0cmFja1IuYWxidW19XG4vLyAgICAgICAgICAgICBkdXJhdGlvbj17dHJhY2tEdXJhdGlvbnNbdHJhY2tSLmlkXX1cbi8vICAgICAgICAgICAgIHNldFRyYWNrPXsoKSA9PiBoYW5kbGVUcmFjayh0cmFja1IpfVxuLy8gICAgICAgICAgICAgaXNTZXRUcmFjaz17dHJhY2tSLmlkID09PSB0cmFjaz8uaWR9XG4vLyAgICAgICAgICAgLz5cbi8vICAgICAgICAgKSlcbi8vICAgICAgICl9XG4vLyAgICAgPC9kaXY+XG4vLyAgICk7XG4vLyB9O1xuXG4vLyBleHBvcnQgZGVmYXVsdCBDb250ZW50UGxheWxpc3Q7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ContentPlaylist/ContentPlaylist.tsx\n"));

/***/ })

});