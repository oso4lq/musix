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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setCurrentTrack: function() { return /* binding */ setCurrentTrack; },\n/* harmony export */   setNextTrack: function() { return /* binding */ setNextTrack; },\n/* harmony export */   setPause: function() { return /* binding */ setPause; },\n/* harmony export */   setPlay: function() { return /* binding */ setPlay; },\n/* harmony export */   setPlayList: function() { return /* binding */ setPlayList; },\n/* harmony export */   setPrevTrack: function() { return /* binding */ setPrevTrack; },\n/* harmony export */   setShuffle: function() { return /* binding */ setShuffle; },\n/* harmony export */   tracksReducer: function() { return /* binding */ tracksReducer; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n\nconst initialState = {\n    track: null,\n    playList: [],\n    isPlaying: false,\n    isShuffle: false,\n    shufflePlayList: []\n};\nconst switchTrack = (direction)=>{};\nconst tracksSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"tracks\",\n    initialState,\n    reducers: {\n        setCurrentTrack: (state, action)=>{\n            state.track = action.payload;\n            state.isPlaying = true;\n        },\n        setPlayList: (state, action)=>{\n            state.playList = action.payload;\n        },\n        // Controls\n        setPlay: (state)=>{\n            state.isPlaying = true;\n        },\n        setPause: (state)=>{\n            state.isPlaying = false;\n        },\n        setNextTrack: (state)=>{\n            const playList = state.isShuffle ? state.shufflePlayList : state.playList;\n            const index = playList.findIndex((track)=>{\n                var _state_track;\n                return track.id === ((_state_track = state.track) === null || _state_track === void 0 ? void 0 : _state_track.id);\n            });\n            const nextIndex = index + 1;\n            if (playList[nextIndex]) {\n                state.track = playList[nextIndex];\n            }\n        },\n        setPrevTrack: (state)=>{\n            const playList = state.isShuffle ? state.shufflePlayList : state.playList;\n            const index = playList.findIndex((track)=>{\n                var _state_track;\n                return track.id === ((_state_track = state.track) === null || _state_track === void 0 ? void 0 : _state_track.id);\n            });\n            const prevIndex = index - 1;\n            if (playList[prevIndex]) {\n                state.track = playList[prevIndex];\n            }\n        },\n        // features\n        setShuffle: (state, action)=>{\n            state.isShuffle = action.payload;\n            console.log(action.payload);\n            if (action.payload) {\n                const playList = [\n                    ...state.playList\n                ];\n                playList.sort(()=>Math.random() - 0.5);\n                console.log(playList);\n                state.shufflePlayList = playList;\n            }\n        }\n    }\n});\nconst { setCurrentTrack, setPlayList, setPlay, setPause, setNextTrack, setPrevTrack, setShuffle } = tracksSlice.actions;\nconst tracksReducer = tracksSlice.reducer;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zdG9yZS9mZWF0dXJlcy90cmFja3NTbGljZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDOEM7QUFVOUMsTUFBTUMsZUFBZ0M7SUFDbENDLE9BQU87SUFDUEMsVUFBVSxFQUFFO0lBQ1pDLFdBQVc7SUFDWEMsV0FBVztJQUNYQyxpQkFBaUIsRUFBRTtBQUN2QjtBQUVBLE1BQU1DLGNBQWMsQ0FBQ0MsYUFFckI7QUFFQSxNQUFNQyxjQUFjVCw2REFBV0EsQ0FBQztJQUM1QlUsTUFBTTtJQUVOVDtJQUVBVSxVQUFVO1FBQ05DLGlCQUFpQixDQUFDQyxPQUFPQztZQUNyQkQsTUFBTVgsS0FBSyxHQUFHWSxPQUFPQyxPQUFPO1lBQzVCRixNQUFNVCxTQUFTLEdBQUc7UUFDdEI7UUFDQVksYUFBYSxDQUFDSCxPQUFPQztZQUNqQkQsTUFBTVYsUUFBUSxHQUFHVyxPQUFPQyxPQUFPO1FBQ25DO1FBQ0EsV0FBVztRQUNYRSxTQUFTLENBQUNKO1lBQ05BLE1BQU1ULFNBQVMsR0FBRztRQUN0QjtRQUNBYyxVQUFVLENBQUNMO1lBQ1BBLE1BQU1ULFNBQVMsR0FBRztRQUN0QjtRQUNBZSxjQUFjLENBQUNOO1lBQ1gsTUFBTVYsV0FBV1UsTUFBTVIsU0FBUyxHQUFHUSxNQUFNUCxlQUFlLEdBQUdPLE1BQU1WLFFBQVE7WUFDekUsTUFBTWlCLFFBQVFqQixTQUFTa0IsU0FBUyxDQUFDLENBQUNuQjtvQkFBdUJXO3VCQUFiWCxNQUFNb0IsRUFBRSxPQUFLVCxlQUFBQSxNQUFNWCxLQUFLLGNBQVhXLG1DQUFBQSxhQUFhUyxFQUFFOztZQUN4RSxNQUFNQyxZQUFZSCxRQUFRO1lBQzFCLElBQUlqQixRQUFRLENBQUNvQixVQUFVLEVBQUU7Z0JBQ3JCVixNQUFNWCxLQUFLLEdBQUdDLFFBQVEsQ0FBQ29CLFVBQVU7WUFDckM7UUFDSjtRQUNBQyxjQUFjLENBQUNYO1lBQ1gsTUFBTVYsV0FBV1UsTUFBTVIsU0FBUyxHQUFHUSxNQUFNUCxlQUFlLEdBQUdPLE1BQU1WLFFBQVE7WUFDekUsTUFBTWlCLFFBQVFqQixTQUFTa0IsU0FBUyxDQUFDLENBQUNuQjtvQkFBdUJXO3VCQUFiWCxNQUFNb0IsRUFBRSxPQUFLVCxlQUFBQSxNQUFNWCxLQUFLLGNBQVhXLG1DQUFBQSxhQUFhUyxFQUFFOztZQUN4RSxNQUFNRyxZQUFZTCxRQUFRO1lBQzFCLElBQUlqQixRQUFRLENBQUNzQixVQUFVLEVBQUU7Z0JBQ3JCWixNQUFNWCxLQUFLLEdBQUdDLFFBQVEsQ0FBQ3NCLFVBQVU7WUFDckM7UUFDSjtRQUNBLFdBQVc7UUFDWEMsWUFBWSxDQUFDYixPQUFPQztZQUNoQkQsTUFBTVIsU0FBUyxHQUFHUyxPQUFPQyxPQUFPO1lBQ2hDWSxRQUFRQyxHQUFHLENBQUNkLE9BQU9DLE9BQU87WUFDMUIsSUFBSUQsT0FBT0MsT0FBTyxFQUFFO2dCQUNoQixNQUFNWixXQUFXO3VCQUFJVSxNQUFNVixRQUFRO2lCQUFDO2dCQUNwQ0EsU0FBUzBCLElBQUksQ0FBQyxJQUFNQyxLQUFLQyxNQUFNLEtBQUs7Z0JBQ3BDSixRQUFRQyxHQUFHLENBQUN6QjtnQkFDWlUsTUFBTVAsZUFBZSxHQUFHSDtZQUM1QjtRQUNKO0lBQ0o7QUFDSjtBQUVPLE1BQU0sRUFBRVMsZUFBZSxFQUFFSSxXQUFXLEVBQUVDLE9BQU8sRUFBRUMsUUFBUSxFQUFFQyxZQUFZLEVBQUVLLFlBQVksRUFBRUUsVUFBVSxFQUFFLEdBQUdqQixZQUFZdUIsT0FBTyxDQUFDO0FBQ3hILE1BQU1DLGdCQUFnQnhCLFlBQVl5QixPQUFPLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0b3JlL2ZlYXR1cmVzL3RyYWNrc1NsaWNlLnRzPzE2YWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdHJhY2tUeXBlIH0gZnJvbSBcIkAvdHlwZXMvdHlwZXNcIlxyXG5pbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCJcclxuXHJcbnR5cGUgVHJhY2tzU3RhdGVUeXBlID0ge1xyXG4gICAgdHJhY2s6IG51bGwgfCB0cmFja1R5cGUsXHJcbiAgICBwbGF5TGlzdDogdHJhY2tUeXBlW11cclxuICAgIGlzUGxheWluZzogYm9vbGVhbixcclxuICAgIGlzU2h1ZmZsZTogYm9vbGVhbixcclxuICAgIHNodWZmbGVQbGF5TGlzdDogdHJhY2tUeXBlW11cclxufVxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBUcmFja3NTdGF0ZVR5cGUgPSB7XHJcbiAgICB0cmFjazogbnVsbCxcclxuICAgIHBsYXlMaXN0OiBbXSxcclxuICAgIGlzUGxheWluZzogZmFsc2UsXHJcbiAgICBpc1NodWZmbGU6IGZhbHNlLFxyXG4gICAgc2h1ZmZsZVBsYXlMaXN0OiBbXVxyXG59XHJcblxyXG5jb25zdCBzd2l0Y2hUcmFjayA9IChkaXJlY3Rpb246IG51bWJlcikgPT4ge1xyXG4gICAgXHJcbn1cclxuXHJcbmNvbnN0IHRyYWNrc1NsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gICAgbmFtZTogJ3RyYWNrcycsXHJcblxyXG4gICAgaW5pdGlhbFN0YXRlLFxyXG5cclxuICAgIHJlZHVjZXJzOiB7XHJcbiAgICAgICAgc2V0Q3VycmVudFRyYWNrOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZS50cmFjayA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgICAgICBzdGF0ZS5pc1BsYXlpbmcgPSB0cnVlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0UGxheUxpc3Q6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLnBsYXlMaXN0ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyBDb250cm9sc1xyXG4gICAgICAgIHNldFBsYXk6IChzdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZS5pc1BsYXlpbmcgPSB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXRQYXVzZTogKHN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLmlzUGxheWluZyA9IGZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXROZXh0VHJhY2s6IChzdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwbGF5TGlzdCA9IHN0YXRlLmlzU2h1ZmZsZSA/IHN0YXRlLnNodWZmbGVQbGF5TGlzdCA6IHN0YXRlLnBsYXlMaXN0O1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHBsYXlMaXN0LmZpbmRJbmRleCgodHJhY2spID0+IHRyYWNrLmlkID09PSBzdGF0ZS50cmFjaz8uaWQpXHJcbiAgICAgICAgICAgIGNvbnN0IG5leHRJbmRleCA9IGluZGV4ICsgMVxyXG4gICAgICAgICAgICBpZiAocGxheUxpc3RbbmV4dEluZGV4XSkge1xyXG4gICAgICAgICAgICAgICAgc3RhdGUudHJhY2sgPSBwbGF5TGlzdFtuZXh0SW5kZXhdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldFByZXZUcmFjazogKHN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBsYXlMaXN0ID0gc3RhdGUuaXNTaHVmZmxlID8gc3RhdGUuc2h1ZmZsZVBsYXlMaXN0IDogc3RhdGUucGxheUxpc3Q7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gcGxheUxpc3QuZmluZEluZGV4KCh0cmFjaykgPT4gdHJhY2suaWQgPT09IHN0YXRlLnRyYWNrPy5pZClcclxuICAgICAgICAgICAgY29uc3QgcHJldkluZGV4ID0gaW5kZXggLSAxXHJcbiAgICAgICAgICAgIGlmIChwbGF5TGlzdFtwcmV2SW5kZXhdKSB7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS50cmFjayA9IHBsYXlMaXN0W3ByZXZJbmRleF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gZmVhdHVyZXNcclxuICAgICAgICBzZXRTaHVmZmxlOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZS5pc1NodWZmbGUgPSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhY3Rpb24ucGF5bG9hZClcclxuICAgICAgICAgICAgaWYgKGFjdGlvbi5wYXlsb2FkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwbGF5TGlzdCA9IFsuLi5zdGF0ZS5wbGF5TGlzdF1cclxuICAgICAgICAgICAgICAgIHBsYXlMaXN0LnNvcnQoKCkgPT4gTWF0aC5yYW5kb20oKSAtIDAuNSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwbGF5TGlzdClcclxuICAgICAgICAgICAgICAgIHN0YXRlLnNodWZmbGVQbGF5TGlzdCA9IHBsYXlMaXN0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgfVxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IHsgc2V0Q3VycmVudFRyYWNrLCBzZXRQbGF5TGlzdCwgc2V0UGxheSwgc2V0UGF1c2UsIHNldE5leHRUcmFjaywgc2V0UHJldlRyYWNrLCBzZXRTaHVmZmxlIH0gPSB0cmFja3NTbGljZS5hY3Rpb25zO1xyXG5leHBvcnQgY29uc3QgdHJhY2tzUmVkdWNlciA9IHRyYWNrc1NsaWNlLnJlZHVjZXI7Il0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiaW5pdGlhbFN0YXRlIiwidHJhY2siLCJwbGF5TGlzdCIsImlzUGxheWluZyIsImlzU2h1ZmZsZSIsInNodWZmbGVQbGF5TGlzdCIsInN3aXRjaFRyYWNrIiwiZGlyZWN0aW9uIiwidHJhY2tzU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJzZXRDdXJyZW50VHJhY2siLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJzZXRQbGF5TGlzdCIsInNldFBsYXkiLCJzZXRQYXVzZSIsInNldE5leHRUcmFjayIsImluZGV4IiwiZmluZEluZGV4IiwiaWQiLCJuZXh0SW5kZXgiLCJzZXRQcmV2VHJhY2siLCJwcmV2SW5kZXgiLCJzZXRTaHVmZmxlIiwiY29uc29sZSIsImxvZyIsInNvcnQiLCJNYXRoIiwicmFuZG9tIiwiYWN0aW9ucyIsInRyYWNrc1JlZHVjZXIiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/store/features/tracksSlice.ts\n"));

/***/ })

});