"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/store/features/tracksSlice.ts":
/*!*******************************************!*\
  !*** ./src/store/features/tracksSlice.ts ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setCurrentTrack: function() { return /* binding */ setCurrentTrack; },\n/* harmony export */   setIsSearchTrue: function() { return /* binding */ setIsSearchTrue; },\n/* harmony export */   setNextTrack: function() { return /* binding */ setNextTrack; },\n/* harmony export */   setPause: function() { return /* binding */ setPause; },\n/* harmony export */   setPlay: function() { return /* binding */ setPlay; },\n/* harmony export */   setPlayList: function() { return /* binding */ setPlayList; },\n/* harmony export */   setPrevTrack: function() { return /* binding */ setPrevTrack; },\n/* harmony export */   setSearchPlayList: function() { return /* binding */ setSearchPlayList; },\n/* harmony export */   setShuffle: function() { return /* binding */ setShuffle; },\n/* harmony export */   tracksReducer: function() { return /* binding */ tracksReducer; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n\nconst initialState = {\n    track: null,\n    playList: [],\n    isPlaying: false,\n    isShuffle: false,\n    shufflePlayList: [],\n    searchPlaylist: [],\n    isSearch: false\n};\nconst switchTrack = (direction)=>{\n    return (state)=>{\n        const currentTracks = state.isShuffle ? state.shufflePlayList : state.playList;\n        let newIndex = currentTracks.findIndex((item)=>{\n            var _state_track;\n            return item.id === ((_state_track = state.track) === null || _state_track === void 0 ? void 0 : _state_track.id);\n        }) + direction;\n        newIndex = (newIndex + currentTracks.length) % currentTracks.length;\n        state.track = currentTracks[newIndex];\n        state.isPlaying = true;\n    };\n};\nconst tracksSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"tracks\",\n    initialState,\n    reducers: {\n        setCurrentTrack: (state, action)=>{\n            state.track = action.payload;\n            state.isPlaying = true;\n        },\n        setPlayList: (state, action)=>{\n            state.playList = action.payload;\n        },\n        // Controls\n        setPlay: (state)=>{\n            state.isPlaying = true;\n        },\n        setPause: (state)=>{\n            state.isPlaying = false;\n        },\n        setNextTrack: switchTrack(1),\n        setPrevTrack: switchTrack(-1),\n        // features\n        setShuffle: (state, action)=>{\n            state.isShuffle = action.payload;\n            if (action.payload) {\n                const playList = [\n                    ...state.playList\n                ];\n                playList.sort(()=>Math.random() - 0.5);\n                state.shufflePlayList = playList;\n            }\n        },\n        setSearchPlayList: (state, action)=>{\n            state.searchPlaylist = action.payload;\n        },\n        setIsSearchTrue: (state)=>{\n            state.isSearch = true;\n        },\n        setIsSearchFalse: (state)=>{\n            state.isSearch = false;\n        }\n    }\n});\nconst { setCurrentTrack, setPlayList, setPlay, setPause, setNextTrack, setPrevTrack, setShuffle, setSearchPlayList, setIsSearchTrue } = tracksSlice.actions;\nconst tracksReducer = tracksSlice.reducer;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zdG9yZS9mZWF0dXJlcy90cmFja3NTbGljZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUM4QztBQVk5QyxNQUFNQyxlQUFnQztJQUNsQ0MsT0FBTztJQUNQQyxVQUFVLEVBQUU7SUFDWkMsV0FBVztJQUNYQyxXQUFXO0lBQ1hDLGlCQUFpQixFQUFFO0lBQ25CQyxnQkFBZ0IsRUFBRTtJQUNsQkMsVUFBVTtBQUNkO0FBRUEsTUFBTUMsY0FBYyxDQUFDQztJQUNqQixPQUFPLENBQUNDO1FBQ0osTUFBTUMsZ0JBQWdCRCxNQUFNTixTQUFTLEdBQUdNLE1BQU1MLGVBQWUsR0FBR0ssTUFBTVIsUUFBUTtRQUM5RSxJQUFJVSxXQUFXRCxjQUFjRSxTQUFTLENBQUNDLENBQUFBO2dCQUFvQko7bUJBQVpJLEtBQUtDLEVBQUUsT0FBS0wsZUFBQUEsTUFBTVQsS0FBSyxjQUFYUyxtQ0FBQUEsYUFBYUssRUFBRTthQUFJTjtRQUU5RUcsV0FBVyxDQUFDQSxXQUFXRCxjQUFjSyxNQUFNLElBQUlMLGNBQWNLLE1BQU07UUFFbkVOLE1BQU1ULEtBQUssR0FBR1UsYUFBYSxDQUFDQyxTQUFTO1FBQ3JDRixNQUFNUCxTQUFTLEdBQUc7SUFDdEI7QUFDSjtBQUVBLE1BQU1jLGNBQWNsQiw2REFBV0EsQ0FBQztJQUM1Qm1CLE1BQU07SUFFTmxCO0lBRUFtQixVQUFVO1FBQ05DLGlCQUFpQixDQUFDVixPQUFPVztZQUNyQlgsTUFBTVQsS0FBSyxHQUFHb0IsT0FBT0MsT0FBTztZQUM1QlosTUFBTVAsU0FBUyxHQUFHO1FBQ3RCO1FBQ0FvQixhQUFhLENBQUNiLE9BQU9XO1lBQ2pCWCxNQUFNUixRQUFRLEdBQUdtQixPQUFPQyxPQUFPO1FBQ25DO1FBQ0EsV0FBVztRQUNYRSxTQUFTLENBQUNkO1lBQ05BLE1BQU1QLFNBQVMsR0FBRztRQUN0QjtRQUNBc0IsVUFBVSxDQUFDZjtZQUNQQSxNQUFNUCxTQUFTLEdBQUc7UUFDdEI7UUFDQXVCLGNBQWNsQixZQUFZO1FBQzFCbUIsY0FBY25CLFlBQVksQ0FBQztRQUMzQixXQUFXO1FBQ1hvQixZQUFZLENBQUNsQixPQUFPVztZQUNoQlgsTUFBTU4sU0FBUyxHQUFHaUIsT0FBT0MsT0FBTztZQUNoQyxJQUFJRCxPQUFPQyxPQUFPLEVBQUU7Z0JBQ2hCLE1BQU1wQixXQUFXO3VCQUFJUSxNQUFNUixRQUFRO2lCQUFDO2dCQUNwQ0EsU0FBUzJCLElBQUksQ0FBQyxJQUFNQyxLQUFLQyxNQUFNLEtBQUs7Z0JBQ3BDckIsTUFBTUwsZUFBZSxHQUFHSDtZQUM1QjtRQUNKO1FBQ0E4QixtQkFBbUIsQ0FBQ3RCLE9BQU9XO1lBQ3ZCWCxNQUFNSixjQUFjLEdBQUdlLE9BQU9DLE9BQU87UUFDekM7UUFDQVcsaUJBQWlCLENBQUN2QjtZQUNkQSxNQUFNSCxRQUFRLEdBQUc7UUFDckI7UUFDQTJCLGtCQUFrQixDQUFDeEI7WUFDZkEsTUFBTUgsUUFBUSxHQUFHO1FBQ3JCO0lBQ0o7QUFDSjtBQUVPLE1BQU0sRUFBRWEsZUFBZSxFQUFFRyxXQUFXLEVBQUVDLE9BQU8sRUFBRUMsUUFBUSxFQUFFQyxZQUFZLEVBQUVDLFlBQVksRUFBRUMsVUFBVSxFQUFFSSxpQkFBaUIsRUFBRUMsZUFBZSxFQUFFLEdBQUdoQixZQUFZa0IsT0FBTyxDQUFDO0FBQzVKLE1BQU1DLGdCQUFnQm5CLFlBQVlvQixPQUFPLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0b3JlL2ZlYXR1cmVzL3RyYWNrc1NsaWNlLnRzPzE2YWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdHJhY2tUeXBlIH0gZnJvbSBcIkAvdHlwZXMvdHlwZXNcIlxyXG5pbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCJcclxuXHJcbnR5cGUgVHJhY2tzU3RhdGVUeXBlID0ge1xyXG4gICAgdHJhY2s6IG51bGwgfCB0cmFja1R5cGUsXHJcbiAgICBwbGF5TGlzdDogdHJhY2tUeXBlW11cclxuICAgIGlzUGxheWluZzogYm9vbGVhbixcclxuICAgIGlzU2h1ZmZsZTogYm9vbGVhbixcclxuICAgIHNodWZmbGVQbGF5TGlzdDogdHJhY2tUeXBlW10sXHJcbiAgICBzZWFyY2hQbGF5bGlzdDogdHJhY2tUeXBlW10sXHJcbiAgICBpc1NlYXJjaDogYm9vbGVhblxyXG59O1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBUcmFja3NTdGF0ZVR5cGUgPSB7XHJcbiAgICB0cmFjazogbnVsbCxcclxuICAgIHBsYXlMaXN0OiBbXSxcclxuICAgIGlzUGxheWluZzogZmFsc2UsXHJcbiAgICBpc1NodWZmbGU6IGZhbHNlLFxyXG4gICAgc2h1ZmZsZVBsYXlMaXN0OiBbXSxcclxuICAgIHNlYXJjaFBsYXlsaXN0OiBbXSxcclxuICAgIGlzU2VhcmNoOiBmYWxzZVxyXG59O1xyXG5cclxuY29uc3Qgc3dpdGNoVHJhY2sgPSAoZGlyZWN0aW9uOiBudW1iZXIpID0+IHtcclxuICAgIHJldHVybiAoc3RhdGU6IFRyYWNrc1N0YXRlVHlwZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRUcmFja3MgPSBzdGF0ZS5pc1NodWZmbGUgPyBzdGF0ZS5zaHVmZmxlUGxheUxpc3QgOiBzdGF0ZS5wbGF5TGlzdDtcclxuICAgICAgICBsZXQgbmV3SW5kZXggPSBjdXJyZW50VHJhY2tzLmZpbmRJbmRleChpdGVtID0+IGl0ZW0uaWQgPT09IHN0YXRlLnRyYWNrPy5pZCkgKyBkaXJlY3Rpb247XHJcblxyXG4gICAgICAgIG5ld0luZGV4ID0gKG5ld0luZGV4ICsgY3VycmVudFRyYWNrcy5sZW5ndGgpICUgY3VycmVudFRyYWNrcy5sZW5ndGg7XHJcblxyXG4gICAgICAgIHN0YXRlLnRyYWNrID0gY3VycmVudFRyYWNrc1tuZXdJbmRleF07XHJcbiAgICAgICAgc3RhdGUuaXNQbGF5aW5nID0gdHJ1ZTtcclxuICAgIH1cclxufTtcclxuXHJcbmNvbnN0IHRyYWNrc1NsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gICAgbmFtZTogJ3RyYWNrcycsXHJcblxyXG4gICAgaW5pdGlhbFN0YXRlLFxyXG5cclxuICAgIHJlZHVjZXJzOiB7XHJcbiAgICAgICAgc2V0Q3VycmVudFRyYWNrOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZS50cmFjayA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgICAgICBzdGF0ZS5pc1BsYXlpbmcgPSB0cnVlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0UGxheUxpc3Q6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLnBsYXlMaXN0ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyBDb250cm9sc1xyXG4gICAgICAgIHNldFBsYXk6IChzdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZS5pc1BsYXlpbmcgPSB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXRQYXVzZTogKHN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLmlzUGxheWluZyA9IGZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXROZXh0VHJhY2s6IHN3aXRjaFRyYWNrKDEpLFxyXG4gICAgICAgIHNldFByZXZUcmFjazogc3dpdGNoVHJhY2soLTEpLFxyXG4gICAgICAgIC8vIGZlYXR1cmVzXHJcbiAgICAgICAgc2V0U2h1ZmZsZTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgc3RhdGUuaXNTaHVmZmxlID0gYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgaWYgKGFjdGlvbi5wYXlsb2FkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwbGF5TGlzdCA9IFsuLi5zdGF0ZS5wbGF5TGlzdF1cclxuICAgICAgICAgICAgICAgIHBsYXlMaXN0LnNvcnQoKCkgPT4gTWF0aC5yYW5kb20oKSAtIDAuNSk7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5zaHVmZmxlUGxheUxpc3QgPSBwbGF5TGlzdFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXRTZWFyY2hQbGF5TGlzdDogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgc3RhdGUuc2VhcmNoUGxheWxpc3QgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldElzU2VhcmNoVHJ1ZTogKHN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLmlzU2VhcmNoID0gdHJ1ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldElzU2VhcmNoRmFsc2U6IChzdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZS5pc1NlYXJjaCA9IGZhbHNlO1xyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgeyBzZXRDdXJyZW50VHJhY2ssIHNldFBsYXlMaXN0LCBzZXRQbGF5LCBzZXRQYXVzZSwgc2V0TmV4dFRyYWNrLCBzZXRQcmV2VHJhY2ssIHNldFNodWZmbGUsIHNldFNlYXJjaFBsYXlMaXN0LCBzZXRJc1NlYXJjaFRydWUgfSA9IHRyYWNrc1NsaWNlLmFjdGlvbnM7XHJcbmV4cG9ydCBjb25zdCB0cmFja3NSZWR1Y2VyID0gdHJhY2tzU2xpY2UucmVkdWNlcjsiXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJ0cmFjayIsInBsYXlMaXN0IiwiaXNQbGF5aW5nIiwiaXNTaHVmZmxlIiwic2h1ZmZsZVBsYXlMaXN0Iiwic2VhcmNoUGxheWxpc3QiLCJpc1NlYXJjaCIsInN3aXRjaFRyYWNrIiwiZGlyZWN0aW9uIiwic3RhdGUiLCJjdXJyZW50VHJhY2tzIiwibmV3SW5kZXgiLCJmaW5kSW5kZXgiLCJpdGVtIiwiaWQiLCJsZW5ndGgiLCJ0cmFja3NTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsInNldEN1cnJlbnRUcmFjayIsImFjdGlvbiIsInBheWxvYWQiLCJzZXRQbGF5TGlzdCIsInNldFBsYXkiLCJzZXRQYXVzZSIsInNldE5leHRUcmFjayIsInNldFByZXZUcmFjayIsInNldFNodWZmbGUiLCJzb3J0IiwiTWF0aCIsInJhbmRvbSIsInNldFNlYXJjaFBsYXlMaXN0Iiwic2V0SXNTZWFyY2hUcnVlIiwic2V0SXNTZWFyY2hGYWxzZSIsImFjdGlvbnMiLCJ0cmFja3NSZWR1Y2VyIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/store/features/tracksSlice.ts\n"));

/***/ })

});