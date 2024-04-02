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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setCurrentTrack: function() { return /* binding */ setCurrentTrack; },\n/* harmony export */   setNextTrack: function() { return /* binding */ setNextTrack; },\n/* harmony export */   setPause: function() { return /* binding */ setPause; },\n/* harmony export */   setPlay: function() { return /* binding */ setPlay; },\n/* harmony export */   setPlayList: function() { return /* binding */ setPlayList; },\n/* harmony export */   setPrevTrack: function() { return /* binding */ setPrevTrack; },\n/* harmony export */   setSearchPlayList: function() { return /* binding */ setSearchPlayList; },\n/* harmony export */   setShuffle: function() { return /* binding */ setShuffle; },\n/* harmony export */   tracksReducer: function() { return /* binding */ tracksReducer; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n\nconst initialState = {\n    track: null,\n    playList: [],\n    isPlaying: false,\n    isShuffle: false,\n    shufflePlayList: [],\n    searchPlaylist: [],\n    isSearch: false\n};\nconst switchTrack = (direction)=>{\n    return (state)=>{\n        const currentTracks = state.isShuffle ? state.shufflePlayList : state.playList;\n        let newIndex = currentTracks.findIndex((item)=>{\n            var _state_track;\n            return item.id === ((_state_track = state.track) === null || _state_track === void 0 ? void 0 : _state_track.id);\n        }) + direction;\n        newIndex = (newIndex + currentTracks.length) % currentTracks.length;\n        state.track = currentTracks[newIndex];\n        state.isPlaying = true;\n    };\n};\nconst tracksSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"tracks\",\n    initialState,\n    reducers: {\n        setCurrentTrack: (state, action)=>{\n            state.track = action.payload;\n            state.isPlaying = true;\n        },\n        setPlayList: (state, action)=>{\n            state.playList = action.payload;\n        },\n        // Controls\n        setPlay: (state)=>{\n            state.isPlaying = true;\n        },\n        setPause: (state)=>{\n            state.isPlaying = false;\n        },\n        setNextTrack: switchTrack(1),\n        setPrevTrack: switchTrack(-1),\n        // features\n        setShuffle: (state, action)=>{\n            state.isShuffle = action.payload;\n            if (action.payload) {\n                const playList = [\n                    ...state.playList\n                ];\n                playList.sort(()=>Math.random() - 0.5);\n                state.shufflePlayList = playList;\n            }\n        },\n        setSearchPlayList: (state, action)=>{\n            state.searchPlaylist = action.payload;\n        },\n        setIsSearchTrue: (state)=>{\n            state.isSearch = true;\n        },\n        setIsSearchFalse: (state)=>{\n            state.isSearch = false;\n        }\n    }\n});\nconst { setCurrentTrack, setPlayList, setPlay, setPause, setNextTrack, setPrevTrack, setShuffle, setSearchPlayList } = tracksSlice.actions;\nconst tracksReducer = tracksSlice.reducer;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zdG9yZS9mZWF0dXJlcy90cmFja3NTbGljZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQzhDO0FBWTlDLE1BQU1DLGVBQWdDO0lBQ2xDQyxPQUFPO0lBQ1BDLFVBQVUsRUFBRTtJQUNaQyxXQUFXO0lBQ1hDLFdBQVc7SUFDWEMsaUJBQWlCLEVBQUU7SUFDbkJDLGdCQUFnQixFQUFFO0lBQ2xCQyxVQUFVO0FBQ2Q7QUFFQSxNQUFNQyxjQUFjLENBQUNDO0lBQ2pCLE9BQU8sQ0FBQ0M7UUFDSixNQUFNQyxnQkFBZ0JELE1BQU1OLFNBQVMsR0FBR00sTUFBTUwsZUFBZSxHQUFHSyxNQUFNUixRQUFRO1FBQzlFLElBQUlVLFdBQVdELGNBQWNFLFNBQVMsQ0FBQ0MsQ0FBQUE7Z0JBQW9CSjttQkFBWkksS0FBS0MsRUFBRSxPQUFLTCxlQUFBQSxNQUFNVCxLQUFLLGNBQVhTLG1DQUFBQSxhQUFhSyxFQUFFO2FBQUlOO1FBRTlFRyxXQUFXLENBQUNBLFdBQVdELGNBQWNLLE1BQU0sSUFBSUwsY0FBY0ssTUFBTTtRQUVuRU4sTUFBTVQsS0FBSyxHQUFHVSxhQUFhLENBQUNDLFNBQVM7UUFDckNGLE1BQU1QLFNBQVMsR0FBRztJQUN0QjtBQUNKO0FBRUEsTUFBTWMsY0FBY2xCLDZEQUFXQSxDQUFDO0lBQzVCbUIsTUFBTTtJQUVObEI7SUFFQW1CLFVBQVU7UUFDTkMsaUJBQWlCLENBQUNWLE9BQU9XO1lBQ3JCWCxNQUFNVCxLQUFLLEdBQUdvQixPQUFPQyxPQUFPO1lBQzVCWixNQUFNUCxTQUFTLEdBQUc7UUFDdEI7UUFDQW9CLGFBQWEsQ0FBQ2IsT0FBT1c7WUFDakJYLE1BQU1SLFFBQVEsR0FBR21CLE9BQU9DLE9BQU87UUFDbkM7UUFDQSxXQUFXO1FBQ1hFLFNBQVMsQ0FBQ2Q7WUFDTkEsTUFBTVAsU0FBUyxHQUFHO1FBQ3RCO1FBQ0FzQixVQUFVLENBQUNmO1lBQ1BBLE1BQU1QLFNBQVMsR0FBRztRQUN0QjtRQUNBdUIsY0FBY2xCLFlBQVk7UUFDMUJtQixjQUFjbkIsWUFBWSxDQUFDO1FBQzNCLFdBQVc7UUFDWG9CLFlBQVksQ0FBQ2xCLE9BQU9XO1lBQ2hCWCxNQUFNTixTQUFTLEdBQUdpQixPQUFPQyxPQUFPO1lBQ2hDLElBQUlELE9BQU9DLE9BQU8sRUFBRTtnQkFDaEIsTUFBTXBCLFdBQVc7dUJBQUlRLE1BQU1SLFFBQVE7aUJBQUM7Z0JBQ3BDQSxTQUFTMkIsSUFBSSxDQUFDLElBQU1DLEtBQUtDLE1BQU0sS0FBSztnQkFDcENyQixNQUFNTCxlQUFlLEdBQUdIO1lBQzVCO1FBQ0o7UUFDQThCLG1CQUFtQixDQUFDdEIsT0FBT1c7WUFDdkJYLE1BQU1KLGNBQWMsR0FBR2UsT0FBT0MsT0FBTztRQUN6QztRQUNBVyxpQkFBaUIsQ0FBQ3ZCO1lBQ2RBLE1BQU1ILFFBQVEsR0FBRztRQUNyQjtRQUNBMkIsa0JBQWtCLENBQUN4QjtZQUNmQSxNQUFNSCxRQUFRLEdBQUc7UUFDckI7SUFDSjtBQUNKO0FBRU8sTUFBTSxFQUFFYSxlQUFlLEVBQUVHLFdBQVcsRUFBRUMsT0FBTyxFQUFFQyxRQUFRLEVBQUVDLFlBQVksRUFBRUMsWUFBWSxFQUFFQyxVQUFVLEVBQUVJLGlCQUFpQixFQUFFLEdBQUdmLFlBQVlrQixPQUFPLENBQUM7QUFDM0ksTUFBTUMsZ0JBQWdCbkIsWUFBWW9CLE9BQU8sQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc3RvcmUvZmVhdHVyZXMvdHJhY2tzU2xpY2UudHM/MTZhYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0cmFja1R5cGUgfSBmcm9tIFwiQC90eXBlcy90eXBlc1wiXHJcbmltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIlxyXG5cclxudHlwZSBUcmFja3NTdGF0ZVR5cGUgPSB7XHJcbiAgICB0cmFjazogbnVsbCB8IHRyYWNrVHlwZSxcclxuICAgIHBsYXlMaXN0OiB0cmFja1R5cGVbXVxyXG4gICAgaXNQbGF5aW5nOiBib29sZWFuLFxyXG4gICAgaXNTaHVmZmxlOiBib29sZWFuLFxyXG4gICAgc2h1ZmZsZVBsYXlMaXN0OiB0cmFja1R5cGVbXSxcclxuICAgIHNlYXJjaFBsYXlsaXN0OiB0cmFja1R5cGVbXSxcclxuICAgIGlzU2VhcmNoOiBib29sZWFuXHJcbn07XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IFRyYWNrc1N0YXRlVHlwZSA9IHtcclxuICAgIHRyYWNrOiBudWxsLFxyXG4gICAgcGxheUxpc3Q6IFtdLFxyXG4gICAgaXNQbGF5aW5nOiBmYWxzZSxcclxuICAgIGlzU2h1ZmZsZTogZmFsc2UsXHJcbiAgICBzaHVmZmxlUGxheUxpc3Q6IFtdLFxyXG4gICAgc2VhcmNoUGxheWxpc3Q6IFtdLFxyXG4gICAgaXNTZWFyY2g6IGZhbHNlXHJcbn07XHJcblxyXG5jb25zdCBzd2l0Y2hUcmFjayA9IChkaXJlY3Rpb246IG51bWJlcikgPT4ge1xyXG4gICAgcmV0dXJuIChzdGF0ZTogVHJhY2tzU3RhdGVUeXBlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFRyYWNrcyA9IHN0YXRlLmlzU2h1ZmZsZSA/IHN0YXRlLnNodWZmbGVQbGF5TGlzdCA6IHN0YXRlLnBsYXlMaXN0O1xyXG4gICAgICAgIGxldCBuZXdJbmRleCA9IGN1cnJlbnRUcmFja3MuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5pZCA9PT0gc3RhdGUudHJhY2s/LmlkKSArIGRpcmVjdGlvbjtcclxuXHJcbiAgICAgICAgbmV3SW5kZXggPSAobmV3SW5kZXggKyBjdXJyZW50VHJhY2tzLmxlbmd0aCkgJSBjdXJyZW50VHJhY2tzLmxlbmd0aDtcclxuXHJcbiAgICAgICAgc3RhdGUudHJhY2sgPSBjdXJyZW50VHJhY2tzW25ld0luZGV4XTtcclxuICAgICAgICBzdGF0ZS5pc1BsYXlpbmcgPSB0cnVlO1xyXG4gICAgfVxyXG59O1xyXG5cclxuY29uc3QgdHJhY2tzU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgICBuYW1lOiAndHJhY2tzJyxcclxuXHJcbiAgICBpbml0aWFsU3RhdGUsXHJcblxyXG4gICAgcmVkdWNlcnM6IHtcclxuICAgICAgICBzZXRDdXJyZW50VHJhY2s6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLnRyYWNrID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICAgIHN0YXRlLmlzUGxheWluZyA9IHRydWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXRQbGF5TGlzdDogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgc3RhdGUucGxheUxpc3QgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIENvbnRyb2xzXHJcbiAgICAgICAgc2V0UGxheTogKHN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLmlzUGxheWluZyA9IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldFBhdXNlOiAoc3RhdGUpID0+IHtcclxuICAgICAgICAgICAgc3RhdGUuaXNQbGF5aW5nID0gZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldE5leHRUcmFjazogc3dpdGNoVHJhY2soMSksXHJcbiAgICAgICAgc2V0UHJldlRyYWNrOiBzd2l0Y2hUcmFjaygtMSksXHJcbiAgICAgICAgLy8gZmVhdHVyZXNcclxuICAgICAgICBzZXRTaHVmZmxlOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZS5pc1NodWZmbGUgPSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICBpZiAoYWN0aW9uLnBheWxvYWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBsYXlMaXN0ID0gWy4uLnN0YXRlLnBsYXlMaXN0XVxyXG4gICAgICAgICAgICAgICAgcGxheUxpc3Quc29ydCgoKSA9PiBNYXRoLnJhbmRvbSgpIC0gMC41KTtcclxuICAgICAgICAgICAgICAgIHN0YXRlLnNodWZmbGVQbGF5TGlzdCA9IHBsYXlMaXN0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldFNlYXJjaFBsYXlMaXN0OiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZS5zZWFyY2hQbGF5bGlzdCA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0SXNTZWFyY2hUcnVlOiAoc3RhdGUpID0+IHtcclxuICAgICAgICAgICAgc3RhdGUuaXNTZWFyY2ggPSB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXRJc1NlYXJjaEZhbHNlOiAoc3RhdGUpID0+IHtcclxuICAgICAgICAgICAgc3RhdGUuaXNTZWFyY2ggPSBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgeyBzZXRDdXJyZW50VHJhY2ssIHNldFBsYXlMaXN0LCBzZXRQbGF5LCBzZXRQYXVzZSwgc2V0TmV4dFRyYWNrLCBzZXRQcmV2VHJhY2ssIHNldFNodWZmbGUsIHNldFNlYXJjaFBsYXlMaXN0IH0gPSB0cmFja3NTbGljZS5hY3Rpb25zO1xyXG5leHBvcnQgY29uc3QgdHJhY2tzUmVkdWNlciA9IHRyYWNrc1NsaWNlLnJlZHVjZXI7Il0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiaW5pdGlhbFN0YXRlIiwidHJhY2siLCJwbGF5TGlzdCIsImlzUGxheWluZyIsImlzU2h1ZmZsZSIsInNodWZmbGVQbGF5TGlzdCIsInNlYXJjaFBsYXlsaXN0IiwiaXNTZWFyY2giLCJzd2l0Y2hUcmFjayIsImRpcmVjdGlvbiIsInN0YXRlIiwiY3VycmVudFRyYWNrcyIsIm5ld0luZGV4IiwiZmluZEluZGV4IiwiaXRlbSIsImlkIiwibGVuZ3RoIiwidHJhY2tzU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJzZXRDdXJyZW50VHJhY2siLCJhY3Rpb24iLCJwYXlsb2FkIiwic2V0UGxheUxpc3QiLCJzZXRQbGF5Iiwic2V0UGF1c2UiLCJzZXROZXh0VHJhY2siLCJzZXRQcmV2VHJhY2siLCJzZXRTaHVmZmxlIiwic29ydCIsIk1hdGgiLCJyYW5kb20iLCJzZXRTZWFyY2hQbGF5TGlzdCIsInNldElzU2VhcmNoVHJ1ZSIsInNldElzU2VhcmNoRmFsc2UiLCJhY3Rpb25zIiwidHJhY2tzUmVkdWNlciIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/store/features/tracksSlice.ts\n"));

/***/ })

});