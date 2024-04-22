"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/tracks/page",{

/***/ "(app-pages-browser)/./src/store/features/tracksSlice.ts":
/*!*******************************************!*\
  !*** ./src/store/features/tracksSlice.ts ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearActiveFilters: function() { return /* binding */ clearActiveFilters; },\n/* harmony export */   setActiveFilter: function() { return /* binding */ setActiveFilter; },\n/* harmony export */   setCurrentTrack: function() { return /* binding */ setCurrentTrack; },\n/* harmony export */   setIsSearchFalse: function() { return /* binding */ setIsSearchFalse; },\n/* harmony export */   setIsSearchTrue: function() { return /* binding */ setIsSearchTrue; },\n/* harmony export */   setNextTrack: function() { return /* binding */ setNextTrack; },\n/* harmony export */   setPause: function() { return /* binding */ setPause; },\n/* harmony export */   setPlay: function() { return /* binding */ setPlay; },\n/* harmony export */   setPlayList: function() { return /* binding */ setPlayList; },\n/* harmony export */   setPlaylistNumber: function() { return /* binding */ setPlaylistNumber; },\n/* harmony export */   setPrevTrack: function() { return /* binding */ setPrevTrack; },\n/* harmony export */   setSearchPlayList: function() { return /* binding */ setSearchPlayList; },\n/* harmony export */   setShuffle: function() { return /* binding */ setShuffle; },\n/* harmony export */   tracksReducer: function() { return /* binding */ tracksReducer; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n\nconst initialState = {\n    track: null,\n    playList: [],\n    isPlaying: false,\n    isShuffle: false,\n    shufflePlayList: [],\n    searchPlaylist: [],\n    isSearch: false,\n    filteredPlaylist: [],\n    activeFilters: {\n        authors: [],\n        release_dates: \"default\",\n        genres: [],\n        searchValue: \"\"\n    },\n    playlistNumber: null\n};\nconst switchTrack = (direction)=>{\n    return (state)=>{\n        const currentTracks = state.isShuffle ? state.shufflePlayList : state.playList;\n        let newIndex = currentTracks.findIndex((item)=>{\n            var _state_track;\n            return item.id === ((_state_track = state.track) === null || _state_track === void 0 ? void 0 : _state_track.id);\n        }) + direction;\n        newIndex = (newIndex + currentTracks.length) % currentTracks.length;\n        state.track = currentTracks[newIndex];\n        state.isPlaying = true;\n    };\n};\nconst tracksSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"tracks\",\n    initialState,\n    reducers: {\n        // playlist\n        setCurrentTrack: (state, action)=>{\n            state.track = action.payload;\n            state.isPlaying = true;\n        },\n        setPlayList: (state, action)=>{\n            state.playList = action.payload;\n        },\n        // controls\n        setPlay: (state)=>{\n            state.isPlaying = true;\n        },\n        setPause: (state)=>{\n            state.isPlaying = false;\n        },\n        setNextTrack: switchTrack(1),\n        setPrevTrack: switchTrack(-1),\n        // features\n        setShuffle: (state, action)=>{\n            state.isShuffle = action.payload;\n            if (action.payload) {\n                const playList = [\n                    ...state.playList\n                ];\n                playList.sort(()=>Math.random() - 0.5);\n                state.shufflePlayList = playList;\n            }\n        },\n        // search bar\n        setSearchPlayList: (state, action)=>{\n            state.searchPlaylist = action.payload;\n        },\n        setIsSearchTrue: (state)=>{\n            state.isSearch = true;\n        },\n        setIsSearchFalse: (state)=>{\n            state.isSearch = false;\n        },\n        // filters\n        setActiveFilter: (state, action)=>{\n            state.activeFilters = {\n                authors: action.payload.authors || state.activeFilters.authors,\n                release_dates: action.payload.release_dates || null,\n                genres: action.payload.genres || state.activeFilters.genres,\n                searchValue: action.payload.searchValue || state.activeFilters.searchValue\n            };\n            state.filteredPlaylist = state.playList.filter((track)=>{\n                const isAuthors = state.activeFilters.authors.length > 0 ? state.activeFilters.authors.includes(track.author) : true;\n                const isGenres = state.activeFilters.genres.length > 0 ? state.activeFilters.genres.includes(track.genre) : true;\n                return isAuthors && isGenres;\n            });\n        },\n        clearActiveFilters: (state)=>{\n            state.activeFilters = {\n                authors: [],\n                release_dates: \"default\",\n                genres: [],\n                searchValue: \"\"\n            };\n        },\n        // set chosen playlist\n        setPlaylistNumber: (state, action)=>{\n            state.playlistNumber = action.payload;\n        }\n    }\n});\nconst { // playlist\nsetCurrentTrack, setPlayList, // controls\nsetPlay, setPause, setNextTrack, setPrevTrack, // features\nsetShuffle, // search bat\nsetSearchPlayList, setIsSearchTrue, setIsSearchFalse, // filters\nsetActiveFilter, clearActiveFilters, // set chosen playlist\nsetPlaylistNumber } = tracksSlice.actions;\nconst tracksReducer = tracksSlice.reducer;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zdG9yZS9mZWF0dXJlcy90cmFja3NTbGljZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDNkQ7QUF3QjdELE1BQU1DLGVBQWdDO0lBQ2xDQyxPQUFPO0lBQ1BDLFVBQVUsRUFBRTtJQUNaQyxXQUFXO0lBQ1hDLFdBQVc7SUFDWEMsaUJBQWlCLEVBQUU7SUFFbkJDLGdCQUFnQixFQUFFO0lBQ2xCQyxVQUFVO0lBRVZDLGtCQUFrQixFQUFFO0lBRXBCQyxlQUFlO1FBQ1hDLFNBQVMsRUFBRTtRQUNYQyxlQUFlO1FBQ2ZDLFFBQVEsRUFBRTtRQUNWQyxhQUFhO0lBQ2pCO0lBRUFDLGdCQUFnQjtBQUNwQjtBQUVBLE1BQU1DLGNBQWMsQ0FBQ0M7SUFDakIsT0FBTyxDQUFDQztRQUNKLE1BQU1DLGdCQUFnQkQsTUFBTWIsU0FBUyxHQUFHYSxNQUFNWixlQUFlLEdBQUdZLE1BQU1mLFFBQVE7UUFDOUUsSUFBSWlCLFdBQVdELGNBQWNFLFNBQVMsQ0FBQ0MsQ0FBQUE7Z0JBQW9CSjttQkFBWkksS0FBS0MsRUFBRSxPQUFLTCxlQUFBQSxNQUFNaEIsS0FBSyxjQUFYZ0IsbUNBQUFBLGFBQWFLLEVBQUU7YUFBSU47UUFFOUVHLFdBQVcsQ0FBQ0EsV0FBV0QsY0FBY0ssTUFBTSxJQUFJTCxjQUFjSyxNQUFNO1FBRW5FTixNQUFNaEIsS0FBSyxHQUFHaUIsYUFBYSxDQUFDQyxTQUFTO1FBQ3JDRixNQUFNZCxTQUFTLEdBQUc7SUFDdEI7QUFDSjtBQUVBLE1BQU1xQixjQUFjekIsNkRBQVdBLENBQUM7SUFDNUIwQixNQUFNO0lBRU56QjtJQUVBMEIsVUFBVTtRQUNOLFdBQVc7UUFDWEMsaUJBQWlCLENBQUNWLE9BQU9XO1lBQ3JCWCxNQUFNaEIsS0FBSyxHQUFHMkIsT0FBT0MsT0FBTztZQUM1QlosTUFBTWQsU0FBUyxHQUFHO1FBQ3RCO1FBQ0EyQixhQUFhLENBQUNiLE9BQU9XO1lBQ2pCWCxNQUFNZixRQUFRLEdBQUcwQixPQUFPQyxPQUFPO1FBQ25DO1FBQ0EsV0FBVztRQUNYRSxTQUFTLENBQUNkO1lBQ05BLE1BQU1kLFNBQVMsR0FBRztRQUN0QjtRQUNBNkIsVUFBVSxDQUFDZjtZQUNQQSxNQUFNZCxTQUFTLEdBQUc7UUFDdEI7UUFDQThCLGNBQWNsQixZQUFZO1FBQzFCbUIsY0FBY25CLFlBQVksQ0FBQztRQUMzQixXQUFXO1FBQ1hvQixZQUFZLENBQUNsQixPQUFPVztZQUNoQlgsTUFBTWIsU0FBUyxHQUFHd0IsT0FBT0MsT0FBTztZQUNoQyxJQUFJRCxPQUFPQyxPQUFPLEVBQUU7Z0JBQ2hCLE1BQU0zQixXQUFXO3VCQUFJZSxNQUFNZixRQUFRO2lCQUFDO2dCQUNwQ0EsU0FBU2tDLElBQUksQ0FBQyxJQUFNQyxLQUFLQyxNQUFNLEtBQUs7Z0JBQ3BDckIsTUFBTVosZUFBZSxHQUFHSDtZQUM1QjtRQUNKO1FBQ0EsYUFBYTtRQUNicUMsbUJBQW1CLENBQUN0QixPQUFPVztZQUN2QlgsTUFBTVgsY0FBYyxHQUFHc0IsT0FBT0MsT0FBTztRQUN6QztRQUNBVyxpQkFBaUIsQ0FBQ3ZCO1lBQ2RBLE1BQU1WLFFBQVEsR0FBRztRQUNyQjtRQUNBa0Msa0JBQWtCLENBQUN4QjtZQUNmQSxNQUFNVixRQUFRLEdBQUc7UUFDckI7UUFDQSxVQUFVO1FBQ1ZtQyxpQkFBaUIsQ0FBQ3pCLE9BQU9XO1lBQ3JCWCxNQUFNUixhQUFhLEdBQUc7Z0JBQ2xCQyxTQUFTa0IsT0FBT0MsT0FBTyxDQUFDbkIsT0FBTyxJQUFJTyxNQUFNUixhQUFhLENBQUNDLE9BQU87Z0JBQzlEQyxlQUFlaUIsT0FBT0MsT0FBTyxDQUFDbEIsYUFBYSxJQUFJO2dCQUMvQ0MsUUFBUWdCLE9BQU9DLE9BQU8sQ0FBQ2pCLE1BQU0sSUFBSUssTUFBTVIsYUFBYSxDQUFDRyxNQUFNO2dCQUMzREMsYUFBYWUsT0FBT0MsT0FBTyxDQUFDaEIsV0FBVyxJQUFJSSxNQUFNUixhQUFhLENBQUNJLFdBQVc7WUFDOUU7WUFDQUksTUFBTVQsZ0JBQWdCLEdBQUdTLE1BQU1mLFFBQVEsQ0FBQ3lDLE1BQU0sQ0FBQyxDQUFDMUM7Z0JBQzVDLE1BQU0yQyxZQUFZM0IsTUFBTVIsYUFBYSxDQUFDQyxPQUFPLENBQUNhLE1BQU0sR0FBRyxJQUFJTixNQUFNUixhQUFhLENBQUNDLE9BQU8sQ0FBQ21DLFFBQVEsQ0FBQzVDLE1BQU02QyxNQUFNLElBQUk7Z0JBQ2hILE1BQU1DLFdBQVc5QixNQUFNUixhQUFhLENBQUNHLE1BQU0sQ0FBQ1csTUFBTSxHQUFHLElBQUlOLE1BQU1SLGFBQWEsQ0FBQ0csTUFBTSxDQUFDaUMsUUFBUSxDQUFDNUMsTUFBTStDLEtBQUssSUFBSTtnQkFDNUcsT0FBT0osYUFBYUc7WUFDeEI7UUFDSjtRQUNBRSxvQkFBb0IsQ0FBQ2hDO1lBQ2pCQSxNQUFNUixhQUFhLEdBQUc7Z0JBQ2xCQyxTQUFTLEVBQUU7Z0JBQ1hDLGVBQWU7Z0JBQ2ZDLFFBQVEsRUFBRTtnQkFDVkMsYUFBYTtZQUNqQjtRQUNKO1FBRUEsc0JBQXNCO1FBQ3RCcUMsbUJBQW1CLENBQUNqQyxPQUFPVztZQUN2QlgsTUFBTUgsY0FBYyxHQUFHYyxPQUFPQyxPQUFPO1FBQ3pDO0lBQ0o7QUFDSjtBQUVPLE1BQU0sRUFDVCxXQUFXO0FBQ1hGLGVBQWUsRUFBRUcsV0FBVyxFQUM1QixXQUFXO0FBQ1hDLE9BQU8sRUFBRUMsUUFBUSxFQUFFQyxZQUFZLEVBQUVDLFlBQVksRUFDN0MsV0FBVztBQUNYQyxVQUFVLEVBQ1YsYUFBYTtBQUNiSSxpQkFBaUIsRUFBRUMsZUFBZSxFQUFFQyxnQkFBZ0IsRUFDcEQsVUFBVTtBQUNWQyxlQUFlLEVBQUVPLGtCQUFrQixFQUNuQyxzQkFBc0I7QUFDdEJDLGlCQUFpQixFQUNwQixHQUFHMUIsWUFBWTJCLE9BQU8sQ0FBQztBQUNqQixNQUFNQyxnQkFBZ0I1QixZQUFZNkIsT0FBTyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdG9yZS9mZWF0dXJlcy90cmFja3NTbGljZS50cz8xNmFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRyYWNrVHlwZSB9IGZyb20gXCJAL3R5cGVzL3R5cGVzXCJcclxuaW1wb3J0IHsgUGF5bG9hZEFjdGlvbiwgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiXHJcblxyXG50eXBlIFRyYWNrc1N0YXRlVHlwZSA9IHtcclxuICAgIHRyYWNrOiBudWxsIHwgdHJhY2tUeXBlLFxyXG4gICAgcGxheUxpc3Q6IHRyYWNrVHlwZVtdXHJcbiAgICBpc1BsYXlpbmc6IGJvb2xlYW4sXHJcbiAgICBpc1NodWZmbGU6IGJvb2xlYW4sXHJcbiAgICBzaHVmZmxlUGxheUxpc3Q6IHRyYWNrVHlwZVtdLFxyXG5cclxuICAgIHNlYXJjaFBsYXlsaXN0OiB0cmFja1R5cGVbXSxcclxuICAgIGlzU2VhcmNoOiBib29sZWFuLFxyXG5cclxuICAgIGZpbHRlcmVkUGxheWxpc3Q6IHRyYWNrVHlwZVtdLFxyXG5cclxuICAgIGFjdGl2ZUZpbHRlcnM6IHtcclxuICAgICAgICBhdXRob3JzOiBBcnJheTxzdHJpbmc+LFxyXG4gICAgICAgIHJlbGVhc2VfZGF0ZXM6IG51bGwgfCBzdHJpbmcsXHJcbiAgICAgICAgZ2VucmVzOiBBcnJheTxzdHJpbmc+LFxyXG4gICAgICAgIHNlYXJjaFZhbHVlOiBzdHJpbmcsXHJcbiAgICB9LFxyXG5cclxuICAgIHBsYXlsaXN0TnVtYmVyOiBudW1iZXIgfCBudWxsLFxyXG59O1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBUcmFja3NTdGF0ZVR5cGUgPSB7XHJcbiAgICB0cmFjazogbnVsbCxcclxuICAgIHBsYXlMaXN0OiBbXSxcclxuICAgIGlzUGxheWluZzogZmFsc2UsXHJcbiAgICBpc1NodWZmbGU6IGZhbHNlLFxyXG4gICAgc2h1ZmZsZVBsYXlMaXN0OiBbXSxcclxuXHJcbiAgICBzZWFyY2hQbGF5bGlzdDogW10sXHJcbiAgICBpc1NlYXJjaDogZmFsc2UsXHJcblxyXG4gICAgZmlsdGVyZWRQbGF5bGlzdDogW10sXHJcblxyXG4gICAgYWN0aXZlRmlsdGVyczoge1xyXG4gICAgICAgIGF1dGhvcnM6IFtdLFxyXG4gICAgICAgIHJlbGVhc2VfZGF0ZXM6IFwiZGVmYXVsdFwiLFxyXG4gICAgICAgIGdlbnJlczogW10sXHJcbiAgICAgICAgc2VhcmNoVmFsdWU6IFwiXCIsXHJcbiAgICB9LFxyXG5cclxuICAgIHBsYXlsaXN0TnVtYmVyOiBudWxsLFxyXG59O1xyXG5cclxuY29uc3Qgc3dpdGNoVHJhY2sgPSAoZGlyZWN0aW9uOiBudW1iZXIpID0+IHtcclxuICAgIHJldHVybiAoc3RhdGU6IFRyYWNrc1N0YXRlVHlwZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRUcmFja3MgPSBzdGF0ZS5pc1NodWZmbGUgPyBzdGF0ZS5zaHVmZmxlUGxheUxpc3QgOiBzdGF0ZS5wbGF5TGlzdDtcclxuICAgICAgICBsZXQgbmV3SW5kZXggPSBjdXJyZW50VHJhY2tzLmZpbmRJbmRleChpdGVtID0+IGl0ZW0uaWQgPT09IHN0YXRlLnRyYWNrPy5pZCkgKyBkaXJlY3Rpb247XHJcblxyXG4gICAgICAgIG5ld0luZGV4ID0gKG5ld0luZGV4ICsgY3VycmVudFRyYWNrcy5sZW5ndGgpICUgY3VycmVudFRyYWNrcy5sZW5ndGg7XHJcblxyXG4gICAgICAgIHN0YXRlLnRyYWNrID0gY3VycmVudFRyYWNrc1tuZXdJbmRleF07XHJcbiAgICAgICAgc3RhdGUuaXNQbGF5aW5nID0gdHJ1ZTtcclxuICAgIH1cclxufTtcclxuXHJcbmNvbnN0IHRyYWNrc1NsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gICAgbmFtZTogJ3RyYWNrcycsXHJcblxyXG4gICAgaW5pdGlhbFN0YXRlLFxyXG5cclxuICAgIHJlZHVjZXJzOiB7XHJcbiAgICAgICAgLy8gcGxheWxpc3RcclxuICAgICAgICBzZXRDdXJyZW50VHJhY2s6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLnRyYWNrID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICAgIHN0YXRlLmlzUGxheWluZyA9IHRydWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXRQbGF5TGlzdDogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgc3RhdGUucGxheUxpc3QgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIGNvbnRyb2xzXHJcbiAgICAgICAgc2V0UGxheTogKHN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLmlzUGxheWluZyA9IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldFBhdXNlOiAoc3RhdGUpID0+IHtcclxuICAgICAgICAgICAgc3RhdGUuaXNQbGF5aW5nID0gZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldE5leHRUcmFjazogc3dpdGNoVHJhY2soMSksXHJcbiAgICAgICAgc2V0UHJldlRyYWNrOiBzd2l0Y2hUcmFjaygtMSksXHJcbiAgICAgICAgLy8gZmVhdHVyZXNcclxuICAgICAgICBzZXRTaHVmZmxlOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZS5pc1NodWZmbGUgPSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICBpZiAoYWN0aW9uLnBheWxvYWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBsYXlMaXN0ID0gWy4uLnN0YXRlLnBsYXlMaXN0XVxyXG4gICAgICAgICAgICAgICAgcGxheUxpc3Quc29ydCgoKSA9PiBNYXRoLnJhbmRvbSgpIC0gMC41KTtcclxuICAgICAgICAgICAgICAgIHN0YXRlLnNodWZmbGVQbGF5TGlzdCA9IHBsYXlMaXN0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIHNlYXJjaCBiYXJcclxuICAgICAgICBzZXRTZWFyY2hQbGF5TGlzdDogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgc3RhdGUuc2VhcmNoUGxheWxpc3QgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldElzU2VhcmNoVHJ1ZTogKHN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLmlzU2VhcmNoID0gdHJ1ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldElzU2VhcmNoRmFsc2U6IChzdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZS5pc1NlYXJjaCA9IGZhbHNlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gZmlsdGVyc1xyXG4gICAgICAgIHNldEFjdGl2ZUZpbHRlcjogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248eyBhdXRob3JzPzogc3RyaW5nW10sIHJlbGVhc2VfZGF0ZXM/OiBzdHJpbmcsIGdlbnJlcz86IHN0cmluZ1tdLCBzZWFyY2hWYWx1ZT86IHN0cmluZyB9PikgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZS5hY3RpdmVGaWx0ZXJzID0ge1xyXG4gICAgICAgICAgICAgICAgYXV0aG9yczogYWN0aW9uLnBheWxvYWQuYXV0aG9ycyB8fCBzdGF0ZS5hY3RpdmVGaWx0ZXJzLmF1dGhvcnMsXHJcbiAgICAgICAgICAgICAgICByZWxlYXNlX2RhdGVzOiBhY3Rpb24ucGF5bG9hZC5yZWxlYXNlX2RhdGVzIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICBnZW5yZXM6IGFjdGlvbi5wYXlsb2FkLmdlbnJlcyB8fCBzdGF0ZS5hY3RpdmVGaWx0ZXJzLmdlbnJlcyxcclxuICAgICAgICAgICAgICAgIHNlYXJjaFZhbHVlOiBhY3Rpb24ucGF5bG9hZC5zZWFyY2hWYWx1ZSB8fCBzdGF0ZS5hY3RpdmVGaWx0ZXJzLnNlYXJjaFZhbHVlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBzdGF0ZS5maWx0ZXJlZFBsYXlsaXN0ID0gc3RhdGUucGxheUxpc3QuZmlsdGVyKCh0cmFjaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNBdXRob3JzID0gc3RhdGUuYWN0aXZlRmlsdGVycy5hdXRob3JzLmxlbmd0aCA+IDAgPyBzdGF0ZS5hY3RpdmVGaWx0ZXJzLmF1dGhvcnMuaW5jbHVkZXModHJhY2suYXV0aG9yKSA6IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpc0dlbnJlcyA9IHN0YXRlLmFjdGl2ZUZpbHRlcnMuZ2VucmVzLmxlbmd0aCA+IDAgPyBzdGF0ZS5hY3RpdmVGaWx0ZXJzLmdlbnJlcy5pbmNsdWRlcyh0cmFjay5nZW5yZSkgOiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzQXV0aG9ycyAmJiBpc0dlbnJlc1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2xlYXJBY3RpdmVGaWx0ZXJzOiAoc3RhdGUpID0+IHtcclxuICAgICAgICAgICAgc3RhdGUuYWN0aXZlRmlsdGVycyA9IHtcclxuICAgICAgICAgICAgICAgIGF1dGhvcnM6IFtdLFxyXG4gICAgICAgICAgICAgICAgcmVsZWFzZV9kYXRlczogXCJkZWZhdWx0XCIsXHJcbiAgICAgICAgICAgICAgICBnZW5yZXM6IFtdLFxyXG4gICAgICAgICAgICAgICAgc2VhcmNoVmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy8gc2V0IGNob3NlbiBwbGF5bGlzdFxyXG4gICAgICAgIHNldFBsYXlsaXN0TnVtYmVyOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZS5wbGF5bGlzdE51bWJlciA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3Qge1xyXG4gICAgLy8gcGxheWxpc3RcclxuICAgIHNldEN1cnJlbnRUcmFjaywgc2V0UGxheUxpc3QsXHJcbiAgICAvLyBjb250cm9sc1xyXG4gICAgc2V0UGxheSwgc2V0UGF1c2UsIHNldE5leHRUcmFjaywgc2V0UHJldlRyYWNrLFxyXG4gICAgLy8gZmVhdHVyZXNcclxuICAgIHNldFNodWZmbGUsXHJcbiAgICAvLyBzZWFyY2ggYmF0XHJcbiAgICBzZXRTZWFyY2hQbGF5TGlzdCwgc2V0SXNTZWFyY2hUcnVlLCBzZXRJc1NlYXJjaEZhbHNlLFxyXG4gICAgLy8gZmlsdGVyc1xyXG4gICAgc2V0QWN0aXZlRmlsdGVyLCBjbGVhckFjdGl2ZUZpbHRlcnMsXHJcbiAgICAvLyBzZXQgY2hvc2VuIHBsYXlsaXN0XHJcbiAgICBzZXRQbGF5bGlzdE51bWJlcixcclxufSA9IHRyYWNrc1NsaWNlLmFjdGlvbnM7XHJcbmV4cG9ydCBjb25zdCB0cmFja3NSZWR1Y2VyID0gdHJhY2tzU2xpY2UucmVkdWNlcjtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiaW5pdGlhbFN0YXRlIiwidHJhY2siLCJwbGF5TGlzdCIsImlzUGxheWluZyIsImlzU2h1ZmZsZSIsInNodWZmbGVQbGF5TGlzdCIsInNlYXJjaFBsYXlsaXN0IiwiaXNTZWFyY2giLCJmaWx0ZXJlZFBsYXlsaXN0IiwiYWN0aXZlRmlsdGVycyIsImF1dGhvcnMiLCJyZWxlYXNlX2RhdGVzIiwiZ2VucmVzIiwic2VhcmNoVmFsdWUiLCJwbGF5bGlzdE51bWJlciIsInN3aXRjaFRyYWNrIiwiZGlyZWN0aW9uIiwic3RhdGUiLCJjdXJyZW50VHJhY2tzIiwibmV3SW5kZXgiLCJmaW5kSW5kZXgiLCJpdGVtIiwiaWQiLCJsZW5ndGgiLCJ0cmFja3NTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsInNldEN1cnJlbnRUcmFjayIsImFjdGlvbiIsInBheWxvYWQiLCJzZXRQbGF5TGlzdCIsInNldFBsYXkiLCJzZXRQYXVzZSIsInNldE5leHRUcmFjayIsInNldFByZXZUcmFjayIsInNldFNodWZmbGUiLCJzb3J0IiwiTWF0aCIsInJhbmRvbSIsInNldFNlYXJjaFBsYXlMaXN0Iiwic2V0SXNTZWFyY2hUcnVlIiwic2V0SXNTZWFyY2hGYWxzZSIsInNldEFjdGl2ZUZpbHRlciIsImZpbHRlciIsImlzQXV0aG9ycyIsImluY2x1ZGVzIiwiYXV0aG9yIiwiaXNHZW5yZXMiLCJnZW5yZSIsImNsZWFyQWN0aXZlRmlsdGVycyIsInNldFBsYXlsaXN0TnVtYmVyIiwiYWN0aW9ucyIsInRyYWNrc1JlZHVjZXIiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/store/features/tracksSlice.ts\n"));

/***/ })

});