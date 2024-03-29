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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setCurrentTrack: function() { return /* binding */ setCurrentTrack; },\n/* harmony export */   setNextTrack: function() { return /* binding */ setNextTrack; },\n/* harmony export */   setPause: function() { return /* binding */ setPause; },\n/* harmony export */   setPlay: function() { return /* binding */ setPlay; },\n/* harmony export */   setPlayList: function() { return /* binding */ setPlayList; },\n/* harmony export */   setPrevTrack: function() { return /* binding */ setPrevTrack; },\n/* harmony export */   setShuffle: function() { return /* binding */ setShuffle; },\n/* harmony export */   tracksReducer: function() { return /* binding */ tracksReducer; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n\nconst initialState = {\n    track: null,\n    playList: [],\n    isPlaying: false,\n    isShuffle: false,\n    shufflePlayList: []\n};\nconst switchTrack = (direction)=>{\n    return (state)=>{\n        const currentTracks = state.isShuffle ? state.shufflePlayList : state.playList;\n        let newIndex = currentTracks.findIndex((item)=>{\n            var _state_track;\n            return item.id === ((_state_track = state.track) === null || _state_track === void 0 ? void 0 : _state_track.id);\n        }) + direction;\n        newIndex = (newIndex + currentTracks.length) % currentTracks.length;\n        state.track = currentTracks[newIndex];\n        state.isPlaying = true;\n    };\n};\nconst tracksSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"tracks\",\n    initialState,\n    reducers: {\n        setCurrentTrack: (state, action)=>{\n            state.track = action.payload;\n            state.isPlaying = true;\n        },\n        setPlayList: (state, action)=>{\n            state.playList = action.payload;\n        },\n        // Controls\n        setPlay: (state)=>{\n            state.isPlaying = true;\n        },\n        setPause: (state)=>{\n            state.isPlaying = false;\n        },\n        setNextTrack: (state)=>{\n            const playList = state.isShuffle ? state.shufflePlayList : state.playList;\n            const index = playList.findIndex((track)=>{\n                var _state_track;\n                return track.id === ((_state_track = state.track) === null || _state_track === void 0 ? void 0 : _state_track.id);\n            });\n            const nextIndex = index + 1;\n            if (playList[nextIndex]) {\n                state.track = playList[nextIndex];\n            }\n        },\n        setPrevTrack: (state)=>{\n            const playList = state.isShuffle ? state.shufflePlayList : state.playList;\n            const index = playList.findIndex((track)=>{\n                var _state_track;\n                return track.id === ((_state_track = state.track) === null || _state_track === void 0 ? void 0 : _state_track.id);\n            });\n            const prevIndex = index - 1;\n            if (playList[prevIndex]) {\n                state.track = playList[prevIndex];\n            }\n        },\n        // features\n        setShuffle: (state, action)=>{\n            state.isShuffle = action.payload;\n            if (action.payload) {\n                const playList = [\n                    ...state.playList\n                ];\n                playList.sort(()=>Math.random() - 0.5);\n                state.shufflePlayList = playList;\n            }\n        }\n    }\n});\nconst { setCurrentTrack, setPlayList, setPlay, setPause, setNextTrack, setPrevTrack, setShuffle } = tracksSlice.actions;\nconst tracksReducer = tracksSlice.reducer;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zdG9yZS9mZWF0dXJlcy90cmFja3NTbGljZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDOEM7QUFVOUMsTUFBTUMsZUFBZ0M7SUFDbENDLE9BQU87SUFDUEMsVUFBVSxFQUFFO0lBQ1pDLFdBQVc7SUFDWEMsV0FBVztJQUNYQyxpQkFBaUIsRUFBRTtBQUN2QjtBQUVBLE1BQU1DLGNBQWMsQ0FBQ0M7SUFDakIsT0FBTyxDQUFDQztRQUNKLE1BQU1DLGdCQUFnQkQsTUFBTUosU0FBUyxHQUFHSSxNQUFNSCxlQUFlLEdBQUdHLE1BQU1OLFFBQVE7UUFDOUUsSUFBSVEsV0FBV0QsY0FBY0UsU0FBUyxDQUFDQyxDQUFBQTtnQkFBb0JKO21CQUFaSSxLQUFLQyxFQUFFLE9BQUtMLGVBQUFBLE1BQU1QLEtBQUssY0FBWE8sbUNBQUFBLGFBQWFLLEVBQUU7YUFBSU47UUFFOUVHLFdBQVcsQ0FBQ0EsV0FBV0QsY0FBY0ssTUFBTSxJQUFJTCxjQUFjSyxNQUFNO1FBRW5FTixNQUFNUCxLQUFLLEdBQUdRLGFBQWEsQ0FBQ0MsU0FBUztRQUNyQ0YsTUFBTUwsU0FBUyxHQUFHO0lBQ3RCO0FBQ0o7QUFFQSxNQUFNWSxjQUFjaEIsNkRBQVdBLENBQUM7SUFDNUJpQixNQUFNO0lBRU5oQjtJQUVBaUIsVUFBVTtRQUNOQyxpQkFBaUIsQ0FBQ1YsT0FBT1c7WUFDckJYLE1BQU1QLEtBQUssR0FBR2tCLE9BQU9DLE9BQU87WUFDNUJaLE1BQU1MLFNBQVMsR0FBRztRQUN0QjtRQUNBa0IsYUFBYSxDQUFDYixPQUFPVztZQUNqQlgsTUFBTU4sUUFBUSxHQUFHaUIsT0FBT0MsT0FBTztRQUNuQztRQUNBLFdBQVc7UUFDWEUsU0FBUyxDQUFDZDtZQUNOQSxNQUFNTCxTQUFTLEdBQUc7UUFDdEI7UUFDQW9CLFVBQVUsQ0FBQ2Y7WUFDUEEsTUFBTUwsU0FBUyxHQUFHO1FBQ3RCO1FBQ0FxQixjQUFjLENBQUNoQjtZQUNYLE1BQU1OLFdBQVdNLE1BQU1KLFNBQVMsR0FBR0ksTUFBTUgsZUFBZSxHQUFHRyxNQUFNTixRQUFRO1lBQ3pFLE1BQU11QixRQUFRdkIsU0FBU1MsU0FBUyxDQUFDLENBQUNWO29CQUF1Qk87dUJBQWJQLE1BQU1ZLEVBQUUsT0FBS0wsZUFBQUEsTUFBTVAsS0FBSyxjQUFYTyxtQ0FBQUEsYUFBYUssRUFBRTs7WUFDeEUsTUFBTWEsWUFBWUQsUUFBUTtZQUMxQixJQUFJdkIsUUFBUSxDQUFDd0IsVUFBVSxFQUFFO2dCQUNyQmxCLE1BQU1QLEtBQUssR0FBR0MsUUFBUSxDQUFDd0IsVUFBVTtZQUNyQztRQUNKO1FBQ0FDLGNBQWMsQ0FBQ25CO1lBQ1gsTUFBTU4sV0FBV00sTUFBTUosU0FBUyxHQUFHSSxNQUFNSCxlQUFlLEdBQUdHLE1BQU1OLFFBQVE7WUFDekUsTUFBTXVCLFFBQVF2QixTQUFTUyxTQUFTLENBQUMsQ0FBQ1Y7b0JBQXVCTzt1QkFBYlAsTUFBTVksRUFBRSxPQUFLTCxlQUFBQSxNQUFNUCxLQUFLLGNBQVhPLG1DQUFBQSxhQUFhSyxFQUFFOztZQUN4RSxNQUFNZSxZQUFZSCxRQUFRO1lBQzFCLElBQUl2QixRQUFRLENBQUMwQixVQUFVLEVBQUU7Z0JBQ3JCcEIsTUFBTVAsS0FBSyxHQUFHQyxRQUFRLENBQUMwQixVQUFVO1lBQ3JDO1FBQ0o7UUFDQSxXQUFXO1FBQ1hDLFlBQVksQ0FBQ3JCLE9BQU9XO1lBQ2hCWCxNQUFNSixTQUFTLEdBQUdlLE9BQU9DLE9BQU87WUFDaEMsSUFBSUQsT0FBT0MsT0FBTyxFQUFFO2dCQUNoQixNQUFNbEIsV0FBVzt1QkFBSU0sTUFBTU4sUUFBUTtpQkFBQztnQkFDcENBLFNBQVM0QixJQUFJLENBQUMsSUFBTUMsS0FBS0MsTUFBTSxLQUFLO2dCQUNwQ3hCLE1BQU1ILGVBQWUsR0FBR0g7WUFDNUI7UUFDSjtJQUNKO0FBQ0o7QUFFTyxNQUFNLEVBQUVnQixlQUFlLEVBQUVHLFdBQVcsRUFBRUMsT0FBTyxFQUFFQyxRQUFRLEVBQUVDLFlBQVksRUFBRUcsWUFBWSxFQUFFRSxVQUFVLEVBQUUsR0FBR2QsWUFBWWtCLE9BQU8sQ0FBQztBQUN4SCxNQUFNQyxnQkFBZ0JuQixZQUFZb0IsT0FBTyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdG9yZS9mZWF0dXJlcy90cmFja3NTbGljZS50cz8xNmFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRyYWNrVHlwZSB9IGZyb20gXCJAL3R5cGVzL3R5cGVzXCJcclxuaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiXHJcblxyXG50eXBlIFRyYWNrc1N0YXRlVHlwZSA9IHtcclxuICAgIHRyYWNrOiBudWxsIHwgdHJhY2tUeXBlLFxyXG4gICAgcGxheUxpc3Q6IHRyYWNrVHlwZVtdXHJcbiAgICBpc1BsYXlpbmc6IGJvb2xlYW4sXHJcbiAgICBpc1NodWZmbGU6IGJvb2xlYW4sXHJcbiAgICBzaHVmZmxlUGxheUxpc3Q6IHRyYWNrVHlwZVtdXHJcbn07XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IFRyYWNrc1N0YXRlVHlwZSA9IHtcclxuICAgIHRyYWNrOiBudWxsLFxyXG4gICAgcGxheUxpc3Q6IFtdLFxyXG4gICAgaXNQbGF5aW5nOiBmYWxzZSxcclxuICAgIGlzU2h1ZmZsZTogZmFsc2UsXHJcbiAgICBzaHVmZmxlUGxheUxpc3Q6IFtdXHJcbn1cclxuXHJcbmNvbnN0IHN3aXRjaFRyYWNrID0gKGRpcmVjdGlvbjogbnVtYmVyKSA9PiB7XHJcbiAgICByZXR1cm4gKHN0YXRlOiBUcmFja3NTdGF0ZVR5cGUpID0+IHtcclxuICAgICAgICBjb25zdCBjdXJyZW50VHJhY2tzID0gc3RhdGUuaXNTaHVmZmxlID8gc3RhdGUuc2h1ZmZsZVBsYXlMaXN0IDogc3RhdGUucGxheUxpc3Q7XHJcbiAgICAgICAgbGV0IG5ld0luZGV4ID0gY3VycmVudFRyYWNrcy5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLmlkID09PSBzdGF0ZS50cmFjaz8uaWQpICsgZGlyZWN0aW9uO1xyXG5cclxuICAgICAgICBuZXdJbmRleCA9IChuZXdJbmRleCArIGN1cnJlbnRUcmFja3MubGVuZ3RoKSAlIGN1cnJlbnRUcmFja3MubGVuZ3RoO1xyXG5cclxuICAgICAgICBzdGF0ZS50cmFjayA9IGN1cnJlbnRUcmFja3NbbmV3SW5kZXhdO1xyXG4gICAgICAgIHN0YXRlLmlzUGxheWluZyA9IHRydWU7XHJcbiAgICB9XHJcbn07XHJcblxyXG5jb25zdCB0cmFja3NTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICAgIG5hbWU6ICd0cmFja3MnLFxyXG5cclxuICAgIGluaXRpYWxTdGF0ZSxcclxuXHJcbiAgICByZWR1Y2Vyczoge1xyXG4gICAgICAgIHNldEN1cnJlbnRUcmFjazogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgc3RhdGUudHJhY2sgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgc3RhdGUuaXNQbGF5aW5nID0gdHJ1ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldFBsYXlMaXN0OiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZS5wbGF5TGlzdCA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gQ29udHJvbHNcclxuICAgICAgICBzZXRQbGF5OiAoc3RhdGUpID0+IHtcclxuICAgICAgICAgICAgc3RhdGUuaXNQbGF5aW5nID0gdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0UGF1c2U6IChzdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZS5pc1BsYXlpbmcgPSBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0TmV4dFRyYWNrOiAoc3RhdGUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcGxheUxpc3QgPSBzdGF0ZS5pc1NodWZmbGUgPyBzdGF0ZS5zaHVmZmxlUGxheUxpc3QgOiBzdGF0ZS5wbGF5TGlzdDtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBwbGF5TGlzdC5maW5kSW5kZXgoKHRyYWNrKSA9PiB0cmFjay5pZCA9PT0gc3RhdGUudHJhY2s/LmlkKVxyXG4gICAgICAgICAgICBjb25zdCBuZXh0SW5kZXggPSBpbmRleCArIDFcclxuICAgICAgICAgICAgaWYgKHBsYXlMaXN0W25leHRJbmRleF0pIHtcclxuICAgICAgICAgICAgICAgIHN0YXRlLnRyYWNrID0gcGxheUxpc3RbbmV4dEluZGV4XVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXRQcmV2VHJhY2s6IChzdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwbGF5TGlzdCA9IHN0YXRlLmlzU2h1ZmZsZSA/IHN0YXRlLnNodWZmbGVQbGF5TGlzdCA6IHN0YXRlLnBsYXlMaXN0O1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHBsYXlMaXN0LmZpbmRJbmRleCgodHJhY2spID0+IHRyYWNrLmlkID09PSBzdGF0ZS50cmFjaz8uaWQpXHJcbiAgICAgICAgICAgIGNvbnN0IHByZXZJbmRleCA9IGluZGV4IC0gMVxyXG4gICAgICAgICAgICBpZiAocGxheUxpc3RbcHJldkluZGV4XSkge1xyXG4gICAgICAgICAgICAgICAgc3RhdGUudHJhY2sgPSBwbGF5TGlzdFtwcmV2SW5kZXhdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIGZlYXR1cmVzXHJcbiAgICAgICAgc2V0U2h1ZmZsZTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgc3RhdGUuaXNTaHVmZmxlID0gYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgaWYgKGFjdGlvbi5wYXlsb2FkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwbGF5TGlzdCA9IFsuLi5zdGF0ZS5wbGF5TGlzdF1cclxuICAgICAgICAgICAgICAgIHBsYXlMaXN0LnNvcnQoKCkgPT4gTWF0aC5yYW5kb20oKSAtIDAuNSk7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5zaHVmZmxlUGxheUxpc3QgPSBwbGF5TGlzdFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgIH1cclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCB7IHNldEN1cnJlbnRUcmFjaywgc2V0UGxheUxpc3QsIHNldFBsYXksIHNldFBhdXNlLCBzZXROZXh0VHJhY2ssIHNldFByZXZUcmFjaywgc2V0U2h1ZmZsZSB9ID0gdHJhY2tzU2xpY2UuYWN0aW9ucztcclxuZXhwb3J0IGNvbnN0IHRyYWNrc1JlZHVjZXIgPSB0cmFja3NTbGljZS5yZWR1Y2VyOyJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImluaXRpYWxTdGF0ZSIsInRyYWNrIiwicGxheUxpc3QiLCJpc1BsYXlpbmciLCJpc1NodWZmbGUiLCJzaHVmZmxlUGxheUxpc3QiLCJzd2l0Y2hUcmFjayIsImRpcmVjdGlvbiIsInN0YXRlIiwiY3VycmVudFRyYWNrcyIsIm5ld0luZGV4IiwiZmluZEluZGV4IiwiaXRlbSIsImlkIiwibGVuZ3RoIiwidHJhY2tzU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJzZXRDdXJyZW50VHJhY2siLCJhY3Rpb24iLCJwYXlsb2FkIiwic2V0UGxheUxpc3QiLCJzZXRQbGF5Iiwic2V0UGF1c2UiLCJzZXROZXh0VHJhY2siLCJpbmRleCIsIm5leHRJbmRleCIsInNldFByZXZUcmFjayIsInByZXZJbmRleCIsInNldFNodWZmbGUiLCJzb3J0IiwiTWF0aCIsInJhbmRvbSIsImFjdGlvbnMiLCJ0cmFja3NSZWR1Y2VyIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/store/features/tracksSlice.ts\n"));

/***/ })

});