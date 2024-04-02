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

/***/ "(app-pages-browser)/./src/store/features/tracksSlice.ts":
/*!*******************************************!*\
  !*** ./src/store/features/tracksSlice.ts ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setCurrentTrack: function() { return /* binding */ setCurrentTrack; },\n/* harmony export */   setNextTrack: function() { return /* binding */ setNextTrack; },\n/* harmony export */   setPause: function() { return /* binding */ setPause; },\n/* harmony export */   setPlay: function() { return /* binding */ setPlay; },\n/* harmony export */   setPlayList: function() { return /* binding */ setPlayList; },\n/* harmony export */   setPrevTrack: function() { return /* binding */ setPrevTrack; },\n/* harmony export */   setSearchPlayList: function() { return /* binding */ setSearchPlayList; },\n/* harmony export */   setShuffle: function() { return /* binding */ setShuffle; },\n/* harmony export */   tracksReducer: function() { return /* binding */ tracksReducer; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n\nconst initialState = {\n    track: null,\n    playList: [],\n    isPlaying: false,\n    isShuffle: false,\n    shufflePlayList: [],\n    searchPlaylist: []\n};\nconst switchTrack = (direction)=>{\n    return (state)=>{\n        const currentTracks = state.isShuffle ? state.shufflePlayList : state.playList;\n        let newIndex = currentTracks.findIndex((item)=>{\n            var _state_track;\n            return item.id === ((_state_track = state.track) === null || _state_track === void 0 ? void 0 : _state_track.id);\n        }) + direction;\n        newIndex = (newIndex + currentTracks.length) % currentTracks.length;\n        state.track = currentTracks[newIndex];\n        state.isPlaying = true;\n    };\n};\nconst tracksSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"tracks\",\n    initialState,\n    reducers: {\n        setCurrentTrack: (state, action)=>{\n            state.track = action.payload;\n            state.isPlaying = true;\n        },\n        setPlayList: (state, action)=>{\n            state.playList = action.payload;\n        },\n        // Controls\n        setPlay: (state)=>{\n            state.isPlaying = true;\n        },\n        setPause: (state)=>{\n            state.isPlaying = false;\n        },\n        setNextTrack: switchTrack(1),\n        setPrevTrack: switchTrack(-1),\n        // features\n        setShuffle: (state, action)=>{\n            state.isShuffle = action.payload;\n            if (action.payload) {\n                const playList = [\n                    ...state.playList\n                ];\n                playList.sort(()=>Math.random() - 0.5);\n                state.shufflePlayList = playList;\n            }\n        },\n        setSearchPlayList: (state, action)=>{\n            state.searchPlaylist = action.payload;\n        }\n    }\n});\nconst { setCurrentTrack, setPlayList, setPlay, setPause, setNextTrack, setPrevTrack, setShuffle, setSearchPlayList } = tracksSlice.actions;\nconst tracksReducer = tracksSlice.reducer;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zdG9yZS9mZWF0dXJlcy90cmFja3NTbGljZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQzhDO0FBWTlDLE1BQU1DLGVBQWdDO0lBQ2xDQyxPQUFPO0lBQ1BDLFVBQVUsRUFBRTtJQUNaQyxXQUFXO0lBQ1hDLFdBQVc7SUFDWEMsaUJBQWlCLEVBQUU7SUFDbkJDLGdCQUFnQixFQUFFO0FBQ3RCO0FBRUEsTUFBTUMsY0FBYyxDQUFDQztJQUNqQixPQUFPLENBQUNDO1FBQ0osTUFBTUMsZ0JBQWdCRCxNQUFNTCxTQUFTLEdBQUdLLE1BQU1KLGVBQWUsR0FBR0ksTUFBTVAsUUFBUTtRQUM5RSxJQUFJUyxXQUFXRCxjQUFjRSxTQUFTLENBQUNDLENBQUFBO2dCQUFvQko7bUJBQVpJLEtBQUtDLEVBQUUsT0FBS0wsZUFBQUEsTUFBTVIsS0FBSyxjQUFYUSxtQ0FBQUEsYUFBYUssRUFBRTthQUFJTjtRQUU5RUcsV0FBVyxDQUFDQSxXQUFXRCxjQUFjSyxNQUFNLElBQUlMLGNBQWNLLE1BQU07UUFFbkVOLE1BQU1SLEtBQUssR0FBR1MsYUFBYSxDQUFDQyxTQUFTO1FBQ3JDRixNQUFNTixTQUFTLEdBQUc7SUFDdEI7QUFDSjtBQUVBLE1BQU1hLGNBQWNqQiw2REFBV0EsQ0FBQztJQUM1QmtCLE1BQU07SUFFTmpCO0lBRUFrQixVQUFVO1FBQ05DLGlCQUFpQixDQUFDVixPQUFPVztZQUNyQlgsTUFBTVIsS0FBSyxHQUFHbUIsT0FBT0MsT0FBTztZQUM1QlosTUFBTU4sU0FBUyxHQUFHO1FBQ3RCO1FBQ0FtQixhQUFhLENBQUNiLE9BQU9XO1lBQ2pCWCxNQUFNUCxRQUFRLEdBQUdrQixPQUFPQyxPQUFPO1FBQ25DO1FBQ0EsV0FBVztRQUNYRSxTQUFTLENBQUNkO1lBQ05BLE1BQU1OLFNBQVMsR0FBRztRQUN0QjtRQUNBcUIsVUFBVSxDQUFDZjtZQUNQQSxNQUFNTixTQUFTLEdBQUc7UUFDdEI7UUFDQXNCLGNBQWNsQixZQUFZO1FBQzFCbUIsY0FBY25CLFlBQVksQ0FBQztRQUMzQixXQUFXO1FBQ1hvQixZQUFZLENBQUNsQixPQUFPVztZQUNoQlgsTUFBTUwsU0FBUyxHQUFHZ0IsT0FBT0MsT0FBTztZQUNoQyxJQUFJRCxPQUFPQyxPQUFPLEVBQUU7Z0JBQ2hCLE1BQU1uQixXQUFXO3VCQUFJTyxNQUFNUCxRQUFRO2lCQUFDO2dCQUNwQ0EsU0FBUzBCLElBQUksQ0FBQyxJQUFNQyxLQUFLQyxNQUFNLEtBQUs7Z0JBQ3BDckIsTUFBTUosZUFBZSxHQUFHSDtZQUM1QjtRQUNKO1FBQ0E2QixtQkFBbUIsQ0FBQ3RCLE9BQU9XO1lBQ3ZCWCxNQUFNSCxjQUFjLEdBQUdjLE9BQU9DLE9BQU87UUFDekM7SUFDSjtBQUNKO0FBRU8sTUFBTSxFQUFFRixlQUFlLEVBQUVHLFdBQVcsRUFBRUMsT0FBTyxFQUFFQyxRQUFRLEVBQUVDLFlBQVksRUFBRUMsWUFBWSxFQUFFQyxVQUFVLEVBQUVJLGlCQUFpQixFQUFFLEdBQUdmLFlBQVlnQixPQUFPLENBQUM7QUFDM0ksTUFBTUMsZ0JBQWdCakIsWUFBWWtCLE9BQU8sQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc3RvcmUvZmVhdHVyZXMvdHJhY2tzU2xpY2UudHM/MTZhYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0cmFja1R5cGUgfSBmcm9tIFwiQC90eXBlcy90eXBlc1wiXHJcbmltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIlxyXG5cclxudHlwZSBUcmFja3NTdGF0ZVR5cGUgPSB7XHJcbiAgICB0cmFjazogbnVsbCB8IHRyYWNrVHlwZSxcclxuICAgIHBsYXlMaXN0OiB0cmFja1R5cGVbXVxyXG4gICAgaXNQbGF5aW5nOiBib29sZWFuLFxyXG4gICAgaXNTaHVmZmxlOiBib29sZWFuLFxyXG4gICAgc2h1ZmZsZVBsYXlMaXN0OiB0cmFja1R5cGVbXSxcclxuICAgIHNlYXJjaFBsYXlsaXN0OiB0cmFja1R5cGVbXSxcclxuICAgIFxyXG59O1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBUcmFja3NTdGF0ZVR5cGUgPSB7XHJcbiAgICB0cmFjazogbnVsbCxcclxuICAgIHBsYXlMaXN0OiBbXSxcclxuICAgIGlzUGxheWluZzogZmFsc2UsXHJcbiAgICBpc1NodWZmbGU6IGZhbHNlLFxyXG4gICAgc2h1ZmZsZVBsYXlMaXN0OiBbXSxcclxuICAgIHNlYXJjaFBsYXlsaXN0OiBbXSxcclxufTtcclxuXHJcbmNvbnN0IHN3aXRjaFRyYWNrID0gKGRpcmVjdGlvbjogbnVtYmVyKSA9PiB7XHJcbiAgICByZXR1cm4gKHN0YXRlOiBUcmFja3NTdGF0ZVR5cGUpID0+IHtcclxuICAgICAgICBjb25zdCBjdXJyZW50VHJhY2tzID0gc3RhdGUuaXNTaHVmZmxlID8gc3RhdGUuc2h1ZmZsZVBsYXlMaXN0IDogc3RhdGUucGxheUxpc3Q7XHJcbiAgICAgICAgbGV0IG5ld0luZGV4ID0gY3VycmVudFRyYWNrcy5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLmlkID09PSBzdGF0ZS50cmFjaz8uaWQpICsgZGlyZWN0aW9uO1xyXG5cclxuICAgICAgICBuZXdJbmRleCA9IChuZXdJbmRleCArIGN1cnJlbnRUcmFja3MubGVuZ3RoKSAlIGN1cnJlbnRUcmFja3MubGVuZ3RoO1xyXG5cclxuICAgICAgICBzdGF0ZS50cmFjayA9IGN1cnJlbnRUcmFja3NbbmV3SW5kZXhdO1xyXG4gICAgICAgIHN0YXRlLmlzUGxheWluZyA9IHRydWU7XHJcbiAgICB9XHJcbn07XHJcblxyXG5jb25zdCB0cmFja3NTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICAgIG5hbWU6ICd0cmFja3MnLFxyXG5cclxuICAgIGluaXRpYWxTdGF0ZSxcclxuXHJcbiAgICByZWR1Y2Vyczoge1xyXG4gICAgICAgIHNldEN1cnJlbnRUcmFjazogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgc3RhdGUudHJhY2sgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgc3RhdGUuaXNQbGF5aW5nID0gdHJ1ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldFBsYXlMaXN0OiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZS5wbGF5TGlzdCA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gQ29udHJvbHNcclxuICAgICAgICBzZXRQbGF5OiAoc3RhdGUpID0+IHtcclxuICAgICAgICAgICAgc3RhdGUuaXNQbGF5aW5nID0gdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0UGF1c2U6IChzdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZS5pc1BsYXlpbmcgPSBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0TmV4dFRyYWNrOiBzd2l0Y2hUcmFjaygxKSxcclxuICAgICAgICBzZXRQcmV2VHJhY2s6IHN3aXRjaFRyYWNrKC0xKSxcclxuICAgICAgICAvLyBmZWF0dXJlc1xyXG4gICAgICAgIHNldFNodWZmbGU6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLmlzU2h1ZmZsZSA9IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICAgIGlmIChhY3Rpb24ucGF5bG9hZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGxheUxpc3QgPSBbLi4uc3RhdGUucGxheUxpc3RdXHJcbiAgICAgICAgICAgICAgICBwbGF5TGlzdC5zb3J0KCgpID0+IE1hdGgucmFuZG9tKCkgLSAwLjUpO1xyXG4gICAgICAgICAgICAgICAgc3RhdGUuc2h1ZmZsZVBsYXlMaXN0ID0gcGxheUxpc3RcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0U2VhcmNoUGxheUxpc3Q6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLnNlYXJjaFBsYXlsaXN0ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgfSxcclxuICAgIH1cclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCB7IHNldEN1cnJlbnRUcmFjaywgc2V0UGxheUxpc3QsIHNldFBsYXksIHNldFBhdXNlLCBzZXROZXh0VHJhY2ssIHNldFByZXZUcmFjaywgc2V0U2h1ZmZsZSwgc2V0U2VhcmNoUGxheUxpc3QgfSA9IHRyYWNrc1NsaWNlLmFjdGlvbnM7XHJcbmV4cG9ydCBjb25zdCB0cmFja3NSZWR1Y2VyID0gdHJhY2tzU2xpY2UucmVkdWNlcjsiXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJ0cmFjayIsInBsYXlMaXN0IiwiaXNQbGF5aW5nIiwiaXNTaHVmZmxlIiwic2h1ZmZsZVBsYXlMaXN0Iiwic2VhcmNoUGxheWxpc3QiLCJzd2l0Y2hUcmFjayIsImRpcmVjdGlvbiIsInN0YXRlIiwiY3VycmVudFRyYWNrcyIsIm5ld0luZGV4IiwiZmluZEluZGV4IiwiaXRlbSIsImlkIiwibGVuZ3RoIiwidHJhY2tzU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJzZXRDdXJyZW50VHJhY2siLCJhY3Rpb24iLCJwYXlsb2FkIiwic2V0UGxheUxpc3QiLCJzZXRQbGF5Iiwic2V0UGF1c2UiLCJzZXROZXh0VHJhY2siLCJzZXRQcmV2VHJhY2siLCJzZXRTaHVmZmxlIiwic29ydCIsIk1hdGgiLCJyYW5kb20iLCJzZXRTZWFyY2hQbGF5TGlzdCIsImFjdGlvbnMiLCJ0cmFja3NSZWR1Y2VyIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/store/features/tracksSlice.ts\n"));

/***/ })

});